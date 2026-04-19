# @solid/ui

Reusable UI helpers and CSS utilities that combine SolidOS theme tokens with icon rendering.

## Install

```bash
npm install @solid/ui
```

## Usage

Import theme tokens and UI styles:

```js
import '@solidos/tokens/themes.css';
import '@solid/ui/styles.css';
import { createUiIcon, createLogo, toggleTheme } from '@solid/ui';
```

Create icon elements using raw SVG markup from `@solidos/icons`.

These icons are authored as single-color SVGs and use `stroke="currentColor"` where possible, so the stroke color is controlled by CSS rather than a hard-coded value. `createUiIcon` writes `--icon-color` to the wrapper, which your UI styles then use to style the icon.

Available icons in `@solidos/icons/icons/`:

```js
[
  'bento',
  'birthday',
  'camera',
  'chat',
  'clock',
  'comment',
  'dashboard',
  'delete',
  'downArrow',
  'email',
  'emptyCircle',
  'emptyCircle2',
  'folder',
  'friends',
  'globe',
  'lightning',
  'location',
  'mainEdit',
  'personInCircle',
  'phone',
  'plus',
  'purple-checkBox',
  'purple-checkBox1',
  'purple-checkMark',
  'purple-close',
  'purple-edit',
  'purple-help',
  'purple-paste',
  'purple-person',
  'purple-profile',
  'search',
  'sharing',
  'signOut',
  'solid',
  'trash',
  'twoDownArrows',
  'white-starInSquare'
]
```

```js
import searchIconRaw from '@solidos/icons/icons/search.svg?raw';

const icon = createUiIcon(searchIconRaw, 'Search');
document.body.appendChild(icon);
```

Use the optional `options` argument to set size, color, and additional attributes in one call:

```js
import searchIconRaw from '@solidos/icons/icons/search.svg?raw';

const icon = createUiIcon(searchIconRaw, 'Search', {
  width: '2rem',
  height: '2rem',
  color: '#8B5CF6',
  attrs: { title: 'Search icon' }
});

document.body.appendChild(icon);
```

Create a logo element:

```js
import logoUrl from '@solidos/icons/logos/solid.svg';
const logo = createLogo(logoUrl, 'Solid');
document.body.appendChild(logo);
```
### Theme-aware icon color

`@solid/ui` icon styles use the following theme tokens from `@solidos/tokens`:

- `--icon-color`
- `--icon-color-muted`

These are defined in the active theme and allow icons to automatically match your light or dark theme palette.

Because the icon set uses `stroke="currentColor"` for single-color SVG strokes, `--icon-color` controls the rendered stroke color. This is a CSS-driven color mechanism rather than a hard-coded SVG fill value.

If you want icon color to be purple across themes, update the theme tokens in `@solidos/tokens`:

```css
:root {
  --icon-color: var(--purple-500, #AD46FF);
  --icon-color-muted: rgba(173, 70, 255, 0.6);
}

html[data-theme="dark"] {
  --icon-color: #D9B8FF;
  --icon-color-muted: rgba(217, 184, 255, 0.6);
}
```

You can also override the color for a specific icon.

```css
.icon.custom-purple {
  --icon-color: #8B5CF6;
}

.icon.custom-muted {
  --icon-color: rgba(139, 92, 246, 0.6);
}
```

```js
const icon = createUiIcon(searchIconUrl, 'Search');
icon.classList.add('custom-purple');
document.body.appendChild(icon);

const mutedIcon = createUiIcon(searchIconUrl, 'Search');
mutedIcon.classList.add('custom-muted');
document.body.appendChild(mutedIcon);
```

Create colored icons directly with the `options.color` argument:

```js
const purpleIcon = createUiIcon(searchIconUrl, 'Search', {
  color: '#8B5CF6'
});
document.body.appendChild(purpleIcon);

const whiteIcon = createUiIcon(searchIconUrl, 'Search', {
  color: '#FFFFFF'
});
document.body.appendChild(whiteIcon);
```

Switch themes by setting `data-theme` on the document root or with `toggleTheme()`:

```js
toggleTheme();
```
