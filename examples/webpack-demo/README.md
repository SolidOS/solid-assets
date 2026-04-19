# webpack-demo

A minimal webpack 5 project that demonstrates consuming `@solidos/tokens` and `@solidos/icons` in an application bundle.

## What it shows

- **SVGs as asset modules** – webpack emits only the SVG files you import via `type: 'asset/resource'`, keeping the bundle small.
- **CSS theme tokens** – `@solidos/tokens/themes.css` is extracted into a standalone stylesheet by `mini-css-extract-plugin`.
- **Light / dark theming** – toggled at runtime by setting `data-theme` on `<html>`.
- **Icon rendering** – single-color UI icons via CSS `mask-image` + `--icon-color`; multi-color logo via `<img>`.

## Prerequisites

Build the workspace packages first so the `dist/` outputs exist:

```bash
# from the repo root
npm install
npm run build
```

## Run the demo

```bash
cd examples/webpack-demo
npm install
npm run build   # production bundle → dist/
npm run dev     # webpack dev-server with HMR
```

## Key webpack configuration

```js
// webpack.config.js (excerpt)
{
  test: /\.svg$/i,
  type: 'asset/resource'   // tree-shakeable: only imported SVGs are emitted
},
{
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader']
}
```
