import { describe, expect, it } from "vitest";
import type { Map as MaplibreMap } from "maplibre-gl";
import { LogoControl } from "../src/LogoControl";

function createMockMap(): MaplibreMap {
  return {} as unknown as MaplibreMap;
}

describe("LogoControl", () => {
  it("creates a container element on add", () => {
    const control = new LogoControl();
    const container = control.onAdd(createMockMap());

    expect(container).toBeInstanceOf(HTMLElement);
    expect(container.classList.contains("maplibregl-ctrl")).toBe(true);
    expect(container.classList.contains("maplibre-maptoolkit-logo-control")).toBe(true);

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.title).toBe("Maptoolkit Logo");
    expect(link?.href).toBe("https://maptoolkit.org/");
    expect(link?.target).toBe("_blank");
    expect(link?.rel).toBe("noopener noreferrer");
  });

  it("removes the container on remove", () => {
    const control = new LogoControl();
    const container = control.onAdd(createMockMap());
    document.body.appendChild(container);

    control.onRemove();

    expect(document.body.contains(container)).toBe(false);
  });

  it("defaults to the bottom-left position", () => {
    const control = new LogoControl();
    expect(control.getDefaultPosition()).toBe("bottom-left");
  });
});
