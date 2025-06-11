# Technical Context

## Technology Stack

### Core Technologies
- React
- TypeScript
- styled-components
- @vanilla-extract/css (for CSS-in-TS)
- Next.js (for documentation site)
- Lerna (for monorepo management)

### Development Tools
- ESLint
- Rollup (for library bundling)
- Playwright (for testing)
- Yarn (package management)
- VS Code (recommended IDE)

## Development Setup

### Project Structure
```
/
├── apps/
│   └── website/         # Documentation site (Next.js)
├── packages/
│   ├── camphora-react/  # React components
│   └── camphora-styled/ # Styled components
├── memory-bank/         # Project documentation
└── docs/                # Additional documentation
```

### Key Configuration Files
- `tsconfig.base.json`: Base TypeScript configuration
- `.eslintrc`: ESLint rules
- `rollup.config.mjs`: Build configuration
- `lerna.json`: Monorepo settings
- `package.json`: Project dependencies

## Dependencies

### Production Dependencies
- react
- react-dom
- @vanilla-extract/css
- @vanilla-extract/sprinkles
- clsx

### Development Dependencies
- typescript
- eslint
- rollup
- @types/react
- playwright
- lerna

## Build & Development Process

### Local Development
1. Install dependencies: `yarn install`
2. Start documentation site: `cd apps/website && yarn dev`
3. Build libraries: `yarn build` (at root)

### Component Development
1. Create component in camphora-react
2. Add styles in camphora-styled
3. Add documentation in website
4. Add tests
5. Update exports

### Testing Strategy
- Unit tests for components
- Integration tests for complex interactions
- Visual regression tests
- End-to-end tests for documentation site

## Technical Constraints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features supported
- CSS Grid and Flexbox required

### Performance Requirements
- Small bundle size
- Tree-shaking support
- Efficient CSS-in-JS implementation
- Optimized build output

### Accessibility
- WCAG 2.1 compliance
- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support

## Deployment

### Documentation Site
- Hosted on Vercel
- Automatic deployments from main branch
- Preview deployments for PRs

### Package Publishing
- Published to npm
- Semantic versioning
- Changelog maintenance
- Release automation
