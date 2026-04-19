/**
 * Create an accessible icon wrapper element.
 *
 * @param icon - Raw SVG markup or a URL to an icon asset.
 * @param label - Accessible label used for `aria-label`.
 * @param options - Styling and attribute overrides for the icon element.
 */
export type UiIconOptions = {
  width?: string | number;
  height?: string | number;
  color?: string;
  muted?: string;
  className?: string;
  attrs?: Record<string, string>;
  style?: Record<string, string>;
};

function normalizeSvgStrokeColor(svg: string): string {
  return svg
    .replace(/stroke\s*=\s*"(?!(?:none|currentColor))[^"]*"/gi, 'stroke="currentColor"')
    .replace(/stroke\s*=\s*'(?!(?:none|currentColor))[^']*'/gi, "stroke='currentColor'");
}

function hasThemeIconColor(): boolean {
  return Boolean(
    getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim()
  );
}

export function createUiIcon(
  icon: string,
  label = 'icon',
  options: UiIconOptions = {}
): HTMLSpanElement {
  const span = document.createElement('span');
  span.className = 'icon';
  span.setAttribute('role', 'img');
  span.setAttribute('aria-label', label);

  const shouldNormalize =
    typeof icon === 'string' &&
    icon.trim().startsWith('<svg') &&
    (options.color != null || options.muted != null || hasThemeIconColor());

  const content = shouldNormalize ? normalizeSvgStrokeColor(icon) : icon;

  if (typeof content === 'string' && content.trim().startsWith('<svg')) {
    span.classList.add('icon--svg');
    span.innerHTML = content;

    const svg = span.querySelector('svg');
    if (svg) {
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.style.display = 'block';
    }
  }

  const { width, height, color, muted, className, attrs = {}, style = {} } = options;

  if (width != null) {
    span.style.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height != null) {
    span.style.height = typeof height === 'number' ? `${height}px` : height;
  }
  if (color) {
    span.style.setProperty('--icon-color', color);
    span.style.color = color;
  }
  if (muted) {
    span.style.setProperty('--icon-color-muted', muted);
  }
  if (className) {
    span.classList.add(...className.split(' ').filter(Boolean));
  }
  Object.entries(attrs).forEach(([key, value]) => span.setAttribute(key, value));
  Object.entries(style).forEach(([key, value]) => span.style.setProperty(key, value));

  return span;
}

/**
 * Create a purple fill SVG icon.
 *
 * @param icon - Raw SVG markup for the icon.
 * @param label - Accessible label used for `aria-label`.
 * @param options - Additional overrides for the icon wrapper.
 */
export function createUiIconPurple(
  icon: string,
  label = 'icon',
  options: UiIconOptions = {}
): HTMLSpanElement {
  return createUiIcon(icon, label, { color: '#7C4DFF', ...options });
}

/**
 * Create a white fill SVG icon.
 *
 * @param icon - Raw SVG markup for the icon.
 * @param label - Accessible label used for `aria-label`.
 * @param options - Additional overrides for the icon wrapper.
 */
export function createUiIconWhite(
  icon: string,
  label = 'icon',
  options: UiIconOptions = {}
): HTMLSpanElement {
  return createUiIcon(icon, label, { color: '#FFFFFF', ...options });
}

/**
 * Create an image logo element.
 *
 * @param url - Source URL for the image.
 * @param alt - Alternate text for the image.
 */
export function createLogo(url: string, alt = 'logo'): HTMLImageElement {
  const img = document.createElement('img');
  img.className = 'logo';
  img.src = url;
  img.alt = alt;
  return img;
}

/**
 * Set the current application theme by writing the data attribute on the document.
 *
 * @param theme - Theme name to apply, e.g. `dark` or `light`.
 */
export function setTheme(theme: string): void {
  document.documentElement.dataset.theme = theme;
}

/**
 * Toggle the current application theme between `dark` and `light`.
 */
export function toggleTheme(): void {
  const current = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark';
}
