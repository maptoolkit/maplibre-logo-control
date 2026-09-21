import { Map, IControl, ControlPosition } from "maplibre-gl";

/**
 * Options for configuring the {@link LogoControl}.
 */
export type LogoControlOptions = Record<string, never>;

export const defaultLogoControlOptions: LogoControlOptions = {};

/**
 * Provides a maptoolkit logo control for the map.
 */
export class LogoControl implements IControl {
  options: LogoControlOptions;
  private _container?: HTMLElement;

  constructor(options?: LogoControlOptions) {
    this.options = Object.assign({}, defaultLogoControlOptions, options);
  }

  getDefaultPosition(): ControlPosition {
    return "bottom-left";
  }

  onAdd(_map: Map) {
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maplibre-maptoolkit-logo-control");

    const link = document.createElement("a");
    link.title = "Maptoolkit Logo";
    link.href = "https://maptoolkit.org/";
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
