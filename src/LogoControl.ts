import { Map, IControl, ControlPosition } from "maplibre-gl";

/**
 * The Maptoolkit offering the map belongs to: `"org"` for maptoolkit.org, `"com"` for maptoolkit.com.
 */
export type LogoControlVariant = "org" | "com";

/**
 * Options for configuring the {@link LogoControl}.
 */
export type LogoControlOptions = {
  /** Which Maptoolkit offering the logo links to. Defaults to `"org"`. */
  variant?: LogoControlVariant;
};

export const defaultLogoControlOptions: Required<LogoControlOptions> = {
  variant: "org",
};

const variants: Record<LogoControlVariant, { href: string; title: string }> = {
  org: { href: "https://maptoolkit.org/", title: "Maptoolkit Logo" },
  com: { href: "https://maptoolkit.com/", title: "Maptoolkit Logo" },
};

/**
 * Provides a maptoolkit logo control for the map.
 */
export class LogoControl implements IControl {
  options: Required<LogoControlOptions>;
  private _container?: HTMLElement;

  constructor(options?: LogoControlOptions) {
    this.options = Object.assign({}, defaultLogoControlOptions, options);
  }

  getDefaultPosition(): ControlPosition {
    return "bottom-left";
  }

  onAdd(_map: Map) {
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maplibre-maptoolkit-logo-control", `maplibre-maptoolkit-logo-control--${this.options.variant}`);

    const { href, title } = variants[this.options.variant];
    const link = document.createElement("a");
    link.title = title;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    this._container.appendChild(link);

    return this._container;
  }

  onRemove() {
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
  }
}
