# @solidos/tokens

Frameworkless CSS custom properties for SolidOS themes.

## Install

```bash
npm install @solidos/tokens
```

## Usage

Import the theme CSS once in your webpack entry.

```ts
import '@solidos/tokens/themes.css';
```

Switch themes by setting `data-theme`:

```ts
document.documentElement.dataset.theme = 'dark';
// or 'light'
```

//TODO
Available semantic tokens include `--icon-color` and `--icon-color-muted` for icon rendering.
