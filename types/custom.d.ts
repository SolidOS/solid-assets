declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.svg?raw' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.css';

declare module '@solid/ui' {
  export type UiIconOptions = {
    /** Width of the icon wrapper. */
    width?: string | number;
    /** Height of the icon wrapper. */
    height?: string | number;
    /** Icon color value. */
    color?: string;
    /** Muted fallback color value. */
    muted?: string;
    /** Additional classes to apply to the icon wrapper. */
    className?: string;
    /** Additional attributes to add to the icon wrapper. */
    attrs?: Record<string, string>;
    /** Additional inline styles to apply to the icon wrapper. */
    style?: Record<string, string>;
  };

  /**
   * Create an accessible icon wrapper element.
   *
   * @param icon - Raw SVG markup or a URL to an icon asset.
   * @param label - Accessible label used for `aria-label`.
   * @param options - Styling and attribute overrides for the icon element.
   */
  export function createUiIcon(
    icon: string,
    label?: string,
    options?: UiIconOptions
  ): HTMLSpanElement;
  /**
   * Create a purple fill SVG icon.
   *
   * @param icon - Raw SVG markup for the icon.
   * @param label - Accessible label used for `aria-label`.
   * @param options - Additional overrides for the icon wrapper.
   */
  export function createUiIconPurple(
    icon: string,
    label?: string,
    options?: UiIconOptions
  ): HTMLSpanElement;
  /**
   * Create a white fill SVG icon.
   *
   * @param icon - Raw SVG markup for the icon.
   * @param label - Accessible label used for `aria-label`.
   * @param options - Additional overrides for the icon wrapper.
   */
  export function createUiIconWhite(
    icon: string,
    label?: string,
    options?: UiIconOptions
  ): HTMLSpanElement;
  /**
   * Create an image logo element.
   *
   * @param url - Source URL for the image.
   * @param alt - Alternate text for the image.
   */
  export function createLogo(url: string, alt?: string): HTMLImageElement;
  /**
   * Set the current theme on the document element.
   *
   * @param theme - Theme name to apply, e.g. `dark` or `light`.
   */
  export function setTheme(theme: string): void;
  /**
   * Toggle the current theme between `dark` and `light`.
   */
  export function toggleTheme(): void;
}
