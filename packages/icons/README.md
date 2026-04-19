# @solidos/icons

Single-color UI icons and multi-color logos for SolidOS.

- `src/icons/`: single-color UI icons (SVG)
- `src/logos/`: multi-color logos (SVG)

## Install

```bash
npm install @solidos/icons
```

## Build output

The package build optimizes and publishes files to:

- `dist/icons/*.svg` (aggressive SVGO)
- `dist/logos/*.svg` (conservative SVGO)

## Webpack per-file imports (bundle only what you use)

```ts
import searchIconUrl from '@solidos/icons/icons/search.svg';
import solidosLogoUrl from '@solidos/icons/logos/solidos.svg';
```

With webpack 5 `asset/resource`, only imported files are emitted.

## Recommended usage

### UI icons (single-color) via CSS mask

```css
.Icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  background: var(--icon-color);
  -webkit-mask: var(--icon-mask) no-repeat center / contain;
  mask: var(--icon-mask) no-repeat center / contain;
}
```

```ts
import searchIconUrl from '@solidos/icons/icons/search.svg';

const icon = document.createElement('span');
icon.className = 'Icon';
icon.style.setProperty('--icon-mask', `url("${searchIconUrl}")`);
```

### Logos (multi-color) via `<img>`

```ts
import solidosLogoUrl from '@solidos/icons/logos/solidos.svg';

const img = document.createElement('img');
img.src = solidosLogoUrl;
img.alt = 'SolidOS';
```
