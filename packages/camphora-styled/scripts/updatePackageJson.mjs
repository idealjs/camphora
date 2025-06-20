import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, "../src");
const packageJsonPath = path.resolve(__dirname, "../package.json");

/**
 * Creates an export configuration for a file
 */
function createExports(filePath, isIndex = false) {
  const basePath = filePath.replace(/\.(ts|css\.ts)$/, "");
  const dirName = path.dirname(basePath);
  const fileName = path.basename(basePath);
  
  // Determine export key
  let exportKey;
  if (isIndex) {
    if (dirName === ".") {
      exportKey = "."; // Root index file
    } else {
      exportKey = dirName; // Index file in subdirectory
    }
  } else {
    exportKey = basePath;
  }
  
  const exports = {};
  
  // Add both JS and CSS exports for every file
  const mainExportKey = exportKey === "." ? "." : `./${exportKey}`;
  
  // Add JS export
  exports[mainExportKey] = {
    types: `./dist/${basePath}.d.ts`,
    require: `./dist/cjs/${basePath}.js`,
    import: `./dist/esm/${basePath}.js`
  };

  // Add CSS export
  const cssExportKey = exportKey === "." 
    ? "./index.css"  // Root index file
    : isIndex && dirName !== "." 
      ? `./${dirName}.css`  // Index files in subdirectories (e.g. "./themes.css")
      : `./${basePath}.css`; // Regular files

  exports[cssExportKey] = {
    require: `./dist/cjs/${basePath}.css`,
    import: `./dist/esm/${basePath}.css`
  };
  
  return exports;
}

/**
 * Recursively finds TypeScript files and generates their exports
 */
async function findFiles(dir, root = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findFiles(fullPath, root)));
      continue;
    }
    
    if (entry.isFile() && entry.name.endsWith(".ts")) {
      const relativePath = path.relative(root, fullPath);
      const isIndex = entry.name === "index.ts" || entry.name === "index.css.ts";
      results.push({ path: relativePath, isIndex });
    }
  }
  
  return results;
}

/**
 * Generate package.json exports
 */
function generateExports(files) {
  // Sort files to ensure index files come first
  files.sort((a, b) => {
    if (a.isIndex !== b.isIndex) return a.isIndex ? -1 : 1;
    return a.path.localeCompare(b.path);
  });
  
  // Generate exports for each file
  return files.reduce((exports, file) => {
    const fileExports = createExports(file.path, file.isIndex);
    return { ...exports, ...fileExports };
  }, {});
}

async function updatePackageJson() {
  try {
    // Find all TypeScript files
    const files = await findFiles(srcDir);
    
    // Read and update package.json
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
    packageJson.exports = generateExports(files);
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n", "utf8");
    
    console.log("Successfully updated package.json exports");
  } catch (error) {
    console.error("Error updating package.json:", error.message);
    process.exit(1);
  }
}

updatePackageJson();
