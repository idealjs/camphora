import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, "../src");
const packageJsonPath = path.resolve(__dirname, "../package.json");

function createExportConfig(basePath) {
  return {
    js: {
      types: `./dist/${basePath}.d.ts`,
      require: `./dist/cjs/${basePath}.js`,
      import: `./dist/esm/${basePath}.js`,
    },
    css: {
      require: `./dist/cjs/${basePath}.css`,
      import: `./dist/esm/${basePath}.css`,
    },
  };
}

function createExports(filePath, isIndex = false) {
  const basePath = filePath.replace(/\.(ts|css\.ts)$/, "");
  const dirName = path.dirname(basePath);

  const exportKey = isIndex
    ? dirName === "."
      ? "."
      : dirName
    : basePath;

  const mainExportKey = exportKey === "." ? "." : `./${exportKey}`;
  const cssExportKey =
    exportKey === "."
      ? "./index.css"
      : isIndex && dirName !== "."
      ? `./${dirName}.css`
      : `./${basePath}.css`;

  const config = createExportConfig(basePath);

  return {
    [mainExportKey]: config.js,
    [cssExportKey]: config.css,
  };
}

const FILE_PATTERNS = {
  isTypeScript: (name) => name.endsWith(".ts"),
  isIndex: (name) => name === "index.ts" || name === "index.css.ts",
};

async function findFiles(dir, root = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const processEntry = async (entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return await findFiles(fullPath, root);
    }

    if (entry.isFile() && FILE_PATTERNS.isTypeScript(entry.name)) {
      const relativePath = path.relative(root, fullPath);
      return [
        {
          path: relativePath,
          isIndex: FILE_PATTERNS.isIndex(entry.name),
        },
      ];
    }

    return [];
  };

  const results = await Promise.all(entries.map(processEntry));
  return results.flat();
}

function generateExports(files) {
  files.sort((a, b) => {
    if (a.isIndex !== b.isIndex) return a.isIndex ? -1 : 1;
    return a.path.localeCompare(b.path);
  });

  return files.reduce((exports, file) => {
    const fileExports = createExports(file.path, file.isIndex);
    return { ...exports, ...fileExports };
  }, {});
}

async function getTypeScriptFiles() {
  const files = await findFiles(srcDir);
  if (files.length === 0) {
    throw new Error("No TypeScript files found in src directory");
  }
  return files;
}

async function readPackageJson() {
  try {
    const content = await fs.readFile(packageJsonPath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to parse package.json: ${error.message}`);
  }
}

async function writePackageJson(packageJson) {
  const content = JSON.stringify(packageJson, null, 2) + "\n";
  await fs.writeFile(packageJsonPath, content, "utf8");
}

async function updatePackageJson() {
  try {
    await fs.access(srcDir);
    await fs.access(packageJsonPath);

    const files = await getTypeScriptFiles();
    console.log(`Found ${files.length} TypeScript files`);

    const packageJson = await readPackageJson();
    packageJson.exports = generateExports(files);
    await writePackageJson(packageJson);

    console.log("Successfully updated package.json exports");
  } catch (error) {
    console.error("\nError updating package.json:");
    console.error(`  ${error.message}`);
    if (error.stack) {
      console.error("\nStack trace:");
      console.error(error.stack);
    }
    process.exit(1);
  }
}

updatePackageJson();
