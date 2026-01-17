# System Patterns

## Architecture
- **Monorepo Structure**: Uses Yarn workspaces with packages/ for core code and apps/ for documentation/examples
- **Package Separation**: camphora-styled for CSS, camphora-react for components
- **CSS-in-TS**: vanilla-extract for type-safe styling with design tokens

## Component Patterns
- **Minimal Wrappers**: React components forward props and apply base styles
- **ClassName Composition**: Use clsx for combining base styles with variants
- **TypeScript Interfaces**: Extend native HTML attributes for flexibility
- **Export Structure**: index.ts files for clean imports

## Styling Patterns
- **Design Tokens**: Centralized in tokens/ directory (colors, sizes, typography)
- **Base Styles**: Core component styles with selectors for variants
- **Responsive Design**: Mobile-first approach with size tokens
- **Accessibility**: Focus states, ARIA attributes, keyboard navigation

## File Organization
- Components: packages/camphora-react/src/components/[Component]/index.tsx
- Styles: packages/camphora-styled/src/[component].css.ts
- Examples: apps/website/app/(docs)/components/[component]/page.tsx
- Tests: apps/website/app/(docs)/components/[component]/page.spec.ts

## Key Implementation Paths
- Component creation follows: styles → component → example → test
- All components support className prop for additional styling
- Playwright snapshots ensure visual consistency
- Lerna manages package versioning and publishing
