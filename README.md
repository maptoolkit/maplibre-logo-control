# maplibre-logo-control

[![License](https://img.shields.io/npm/l/@maptoolkit/maplibre-logo-control?style=plastic)](LICENSE)
[![Version](https://img.shields.io/npm/v/@maptoolkit/maplibre-logo-control?style=plastic)](https://www.npmjs.com/package/@maptoolkit/maplibre-logo-control)
[![Downloads](https://img.shields.io/npm/dm/@maptoolkit/maplibre-logo-control?style=plastic)](https://www.npmjs.com/package/@maptoolkit/maplibre-logo-control)

A [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) control plugin that adds a maptoolkit logo link to the map.

**[Live demo](https://maptoolkit.github.io/maplibre-logo-control/)**

## Install

```bash
npm install @maptoolkit/maplibre-logo-control maplibre-gl
```

## Usage

```js
import * as maplibregl from "maplibre-gl";
import { LogoControl } from "@maptoolkit/maplibre-logo-control";
import "@maptoolkit/maplibre-logo-control/style.css";

const map = new maplibregl.Map({ container: "map", style, center, zoom });
map.addControl(new LogoControl());
```

By default the control is placed in the bottom-left corner; pass a position to `addControl` to change that:

```js
map.addControl(new LogoControl(), "bottom-right");
```

### Without a bundler

The package is ESM-only (no UMD/CJS build). Loading it straight from a CDN via
a `<script>` tag works with an [import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap)
to resolve the bare `maplibre-gl` specifier:

```html
<link href="https://unpkg.com/maplibre-gl@^6.0.0/dist/maplibre-gl.css" rel="stylesheet" />
<link href="https://unpkg.com/@maptoolkit/maplibre-logo-control@^1.0.0/dist/maplibre-logo-control.css" rel="stylesheet" />

<script type="importmap">
  {
    "imports": {
      "maplibre-gl": "https://unpkg.com/maplibre-gl@^6.0.0/dist/maplibre-gl.mjs"
    }
  }
</script>
<script type="module">
  import * as maplibregl from "maplibre-gl";
  import { LogoControl } from "https://unpkg.com/@maptoolkit/maplibre-logo-control@^1.0.0/dist/maplibre-logo-control.js";

  const map = new maplibregl.Map({ container: "map", style, center, zoom });
  map.addControl(new LogoControl());
</script>
```

## License

**maplibre-logo-control** is open-source under the [BSD 3-Clause License](LICENSE).
