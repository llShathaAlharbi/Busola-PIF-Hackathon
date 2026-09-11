# Asset and data provenance

- `semiconductor.blend` and `semiconductor.glb`: created for this project using Blender 4.5.9; reproducible with `tools/build_semiconductor.py`. Conceptual wire-bond package, not a manufacturing CAD model. Package structure reference: https://www.ti.com/design-development/packaging.html .
- Other catalogue product geometries: created in `lab3d.js` for the prototype.
- Saudi boundary: Natural Earth 1:110m, public domain; https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson . Simplified geographic outline, not a cadastral boundary. City coordinates use the same projection as the outline.
- Three.js 0.170.0, GLTFLoader and BufferGeometryUtils: MIT, https://github.com/mrdoob/three.js/blob/r170/LICENSE . Loader utility import adjusted for the local folder structure.
- All demand, import, export and localization numbers in the catalogue are explicitly synthetic scenario assumptions. No national part-level statistics are claimed. Verified-only mode reports unavailable until data is connected.
- Simulator calculations run locally using documented cost assumptions; no purchase or investment decision is executed.
