# Active Context

## Current Focus
- Development of Glass component
- Documentation site improvements
- Component theming system refinement

## Recent Changes
- Added documentation website under apps/website
- Implemented base component set in camphora-react
- Set up styling system with @vanilla-extract/css
- Created memory bank documentation structure

## Next Steps
1. Complete Glass component implementation
2. Add comprehensive documentation for existing components
3. Enhance theme customization capabilities
4. Improve testing coverage

## Active Decisions

### Component Implementation
- Using TypeScript for type safety
- Implementing styled-components for theming
- Following composition pattern for component architecture
- Maintaining accessibility standards

### Documentation Strategy
- MDX for component documentation
- Interactive examples in documentation
- Comprehensive API documentation
- Usage patterns and best practices

### Development Workflow
- Monorepo structure with Lerna
- Component-first development approach
- Documentation-driven development
- Continuous testing and integration

- 每个文件仅包含一个导出的组件（single-component-per-file）；此约定有助于提高可维护性、便于代码审查、并增强 tree-shaking 效果 — 将此规则列为重点。

### Component Development
- Props 类型尽可能不要导出。使用接口命名为 `IProps`（例如 `interface IProps { ... }`），并在组件中以 `props: IProps` 使用。
- 避免使用 `React.FC`；推荐直接使用函数表达式：`const Component = (props: IProps) => {}`。

```tsx
// Recommended component structure
import React from 'react'
import { styled } from '@vanilla-extract/css'

interface IProps {
  // Type definitions
}

const Component = (props: IProps) => {
  // Implementation
}
```
}
```

### Styling Pattern
```typescript
// Using vanilla-extract for type-safe CSS
import { style } from '@vanilla-extract/css'

export const componentStyle = style({
  // Type-safe styles
})
```

## Project Insights

### Key Learnings
1. Effective monorepo management with Lerna
2. Integration of vanilla-extract with React
3. Documentation site organization
4. Component API design patterns

### Areas for Improvement
1. Testing coverage
2. Documentation completeness
3. Theme customization options
4. Build optimization

### Current Challenges
1. Glass component implementation complexity
2. Theme system flexibility
3. Documentation organization
4. Testing strategy refinement

## Implementation Notes
- Follow TypeScript strict mode
- Maintain consistent file structure
- Document all public APIs
- Include usage examples
- Consider accessibility in design
- Optimize for bundle size
