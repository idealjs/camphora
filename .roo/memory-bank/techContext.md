# Tech Context

## Technologies Used
- **React**: Component library framework
- **TypeScript**: Type safety for components and styles
- **vanilla-extract**: CSS-in-TS with zero-runtime styling
- **Next.js**: Documentation site and examples
- **Playwright**: Visual regression testing
- **Biome**: Code linting and formatting
- **Lerna**: Monorepo management
- **Yarn**: Package management

## Development Setup
- Node.js with Yarn workspaces
- TypeScript compilation with rollup for packages
- Local development server for docs site
- Playwright for E2E testing with snapshot comparisons

## Technical Constraints
- Must maintain compatibility with React 18+
- CSS must be compatible with modern browsers
- Components must be tree-shakeable
- Bundle size optimization required

## Dependencies
- Core: React, clsx for class composition
- Styling: @vanilla-extract/css, design token utilities
- Testing: @playwright/test
- Build: rollup, TypeScript compiler

## Tool Usage Patterns
- Use vanilla-extract style() for component base styles
- Apply variants with selector nesting
- Forward refs and spread props in React components
- Use clsx for conditional class application
- Snapshot tests for visual verification
