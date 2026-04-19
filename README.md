# solid-assets

npm-publishable monorepo for SolidOS theme tokens and icons.

## Packages

- `@solidos/tokens`: frameworkless theme CSS variables with light/dark mode.
- `@solid/ui`: reusable UI helpers, icon utilities, and theme-aware styles.
- `@solidos/icons`: SVG UI icons and multi-color logos.

## Workspace setup

```bash
npm install
```

## Build

```bash
npm run build
```

This runs all workspace build scripts and produces publishable package outputs in each package `dist/` directory.

## Webpack demo

A fully working webpack 5 example lives in [`examples/webpack-demo/`](./examples/webpack-demo/README.md).
It demonstrates importing theme tokens and tree-shaken icons in a real application bundle.

A second demo showing `@solid/ui` together with `@solidos/tokens` and `@solidos/icons` is available in [`examples/ui-demo/`](./examples/ui-demo/README.md).

## Webpack consumer example

Use webpack 5 asset modules so only imported icons are emitted:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset/resource'
      }
    ]
  }
};
```

Import tokens and one icon file:

```ts
import '@solidos/tokens/themes.css';
import searchIconUrl from '@solidos/icons/icons/search.svg';

document.documentElement.dataset.theme = 'light';

const icon = document.createElement('span');
icon.className = 'Icon';
icon.style.setProperty('--icon-mask', `url("${searchIconUrl}")`);
```

```css
.Icon {
  width: 20px;
  height: 20px;
  background: var(--icon-color);
  -webkit-mask: var(--icon-mask) no-repeat center / contain;
  mask: var(--icon-mask) no-repeat center / contain;
}
```

Use logos through `<img>`:

```ts
import logoUrl from '@solidos/icons/logos/solidos.svg';

const logo = document.createElement('img');
logo.src = logoUrl;
logo.alt = 'SolidOS';
```

## Generative AI usage
The SolidOS team is using GitHub Copilot integrated in Visual Studio Code. 
We have added comments in the code to make it explicit which parts are 100% written by AI. This repo was created with its initial structure by Copilot after a long conversation about state of the art usage of CSS variables and icons. The prompt is very long to paste here. Initial PR was: https://github.com/SolidOS/solid-assets/pull/1 followed by https://github.com/SolidOS/solid-assets/pull/2

### Prompt usage history:
* Raptor mini: according to state of the art maybe this should also contain a ui package
* Raptor mini: add a demo
* Raptor mini: I want instead of the mask to have control over fill
* Raptor mini: create additional similar function where the user can manipulate these values inclugin height and width
* Raptor mini: I want to rename the packages from "@solidos/ui" to "@solid/ui", use solid everywhere in the disribution and examples.