# HommeDeTautavel

*a web AR project created for an immersive museum experience*


## Elevator pitch
Scan a QR code with a smartphone to visualize life-size 3D reconstructions and animated scenes of prehistoric animals and hominins in AR. The demo is fully functional and includes four open-source 3D models — designed to be recreational and educational for museum visitors.


## Problem
Museum visitors need an easy, engaging, and shareable way to experience life-size prehistoric reconstructions without specialized equipment.

## Solution / Key features

- QR-code-driven Web AR: no app install required, just a smartphone with a camera and internet.
- Life-size 3D models of animals and hominins, plus animated prehistory scenes.
- Photo mode: visitors can take souvenir photos with extinct species.
- Models are based on recent research and collaborations with research institutes.

## Demo

- https://thebadseed.fr/HommeDeTautavel to view whole website and existing models
- Note: The 3D models used in this demo are open-source assets chosen for visual similarity during the hackathon and are not research-backed reconstructions.

## Usage

- Scan the printed QR code or open the demo URL on your phone.
- Ensure a stable connection for model streaming.
- Supported: iOS (AR Quick Look for USDZ), Android (WebXR-capable browsers).

## Tech Stack

- Static site: HTML, CSS, JavaScript
- Web AR: USDZ / WebXR / AR Quick Look viewers
- 3D assets: USDZ/GLB (open-source)

## Architecture

Client-side static website that serves AR pages and 3D assets; simple, lightweight, and optimized for mobile use.

## Team — Credits & Contacts

- Charlotte Hénique — charlotte.1.hq@gmail.com — github.com/chheniqu
- Ophelia Marboeuf — m.opheliaa@gmail.com — github.com/opheliamarboeuf
- Qiutong Zhang — zqt1998@gmail.com — github.com/110101110

## 3D Model Credits (Sketchfab / Open Source)

- Model 1 — Title by Author — Sketchfab: <URL> — License: <e.g., CC BY 4.0>
- Model 2 — Title by Author — Sketchfab: <URL> — License: <...>
- Model 3 — Title by Author — Sketchfab: <URL> — License: <...>
- Model 4 — Title by Author — Sketchfab: <URL> — License: <...>

**Disclaimer: The models included here were selected from available open-source assets during the short hackathon timeframe because they best matched our needs. They are intended as placeholders and are not research-based reconstructions; original authors and licenses are preserved.**


## Done / Not done / Future work

**Done**
- Functional website demo with 4 open-source 3D models and QR-based AR viewer.

**Not done / Next**
- Collaborate with research partners to develop or validate research-based reconstructions
- Add more models and metadata per exhibit.
- Improve offline caching and performance.
- Add multilingual descriptions and more educational content.

## Contributing

Contributions welcome!

## License

MIT — see `LICENSE`

## Acknowledgements

Built during the hackathon organized by **42 Perpignan** and **Musée de la Préhistoire de Tautavel**. Thanks to research partners and the artists/authors of the open-source 3D models.
