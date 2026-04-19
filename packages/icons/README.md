# @solidos/icons

Single-color UI icons and multi-color logos for SolidOS.

Use `@solid/ui` for reusable UI icon helpers and token-aware styling.

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
## Available icons

The current UI icon set includes the following single-color SVGs:

- bento
- birthday
- camera
- chat
- clock
- comment
- dashboard
- delete
- downArrow
- email
- emptyCircle
- emptyCircle2
- folder
- friends
- globe
- lightning
- location
- mainEdit
- personInCircle
- phone
- plus
- purple-checkBox
- purple-checkBox1
- purple-checkMark
- purple-close
- purple-edit
- purple-help
- purple-paste
- purple-person
- purple-profile
- search
- sharing
- signOut
- solid
- trash
- twoDownArrows
- white-starInSquare
## Recommended usage

### UI icons (single-color) via raw SVG

The icons in `src/icons/` are authored as single-color SVGs and now use `stroke="currentColor"` for stroke-based paths. That means the icon color is controlled through CSS, not a hard-coded SVG color.

```ts
import { createUiIcon } from '@solid/ui';
import searchIconRaw from '@solidos/icons/icons/search.svg?raw';

const icon = createUiIcon(searchIconRaw, 'Search', {
  color: '#8B5CF6'
});
document.body.appendChild(icon);
```

If you need a fill-based icon instead, use an SVG authored with `fill="currentColor"` or set the color directly in the SVG.

### Logos (multi-color) via `<img>`

```ts
import solidosLogoUrl from '@solidos/icons/logos/solidos.svg';

const img = document.createElement('img');
img.src = solidosLogoUrl;
img.alt = 'SolidOS';
```
