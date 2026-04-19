# @solidos/tokens

Frameworkless CSS custom properties for SolidOS themes.

## Install

```bash
npm install @solidos/tokens
```

## Usage

Use `@solid/ui` for reusable UI helpers that build on these theme tokens.

Import the theme CSS once in your webpack entry.

```ts
import '@solidos/tokens/themes.css';
```

Switch themes by setting `data-theme`:

```ts
document.documentElement.dataset.theme = 'dark';
// or 'light'
```

Available semantic tokens include:

- `--icon-color` — the default fill color for single-color UI icons.
- `--icon-color-muted` — a lower-intensity variant for secondary icon states.

The UI package uses these variables to keep icon styling aligned with the active theme.
