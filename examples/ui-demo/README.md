# ui-demo

A minimal webpack 5 project demonstrating `@solid/ui` together with `@solidos/tokens` and `@solidos/icons`.

## What it shows

- Theme-aware UI icon rendering via `@solid/ui`
- Reusable `createUiIcon()` and `createLogo()` helpers
- `@solidos/tokens/themes.css` for light/dark theme variables
- Tree-shaken SVG icons from `@solidos/icons`
- Demo of the current icon set from `@solidos/icons/icons`

## Prerequisites

Build the workspace packages first:

```bash
npm install
npm run build
```

## Run the demo

```bash
cd examples/ui-demo
npm install
npm run build
npm run dev
```
