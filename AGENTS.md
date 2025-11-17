# AGENTS.md

## Build/Lint/Test Commands
- No build system configured - static HTML/CSS/JS site
- No linting tools configured
- No testing framework configured

## Code Style Guidelines

### JavaScript
- Use `const` for constants, `let` for variables
- camelCase for variables and functions (e.g., `workExp`, `viewBloack`)
- Function declarations with `function` keyword
- Use modern DOM APIs alongside jQuery where appropriate
- Object property names use PascalCase for keys (e.g., `"Title"`, `"Company"`)
- String concatenation with `+` operator
- Event listeners use arrow functions for callbacks

### CSS
- CSS custom properties (variables) for theming
- Responsive design with media queries
- BEM-like class naming (e.g., `card-header`, `card-content`)
- Comments for section organization

### HTML
- Semantic HTML5 elements
- External resources loaded from CDNs with integrity checks
- Accessible markup with proper alt attributes

### General
- No TypeScript - vanilla JavaScript only
- No package.json or dependency management
- Direct file references in HTML
- No automated testing or CI/CD setup