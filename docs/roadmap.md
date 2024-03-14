# Roadmap

Information about plans for future releases

## Version 9.1 (In Development)

Target Date: Q2 2024

- Production quality (non-experimental) WebGPU backend.

**@luma.gl/core**

- `Texture` class has been refactored. Textures no longer accept promises, use `AsyncTexture` class instead.
- New [`luma.attachDevice()`](/docs/api-reference/core/luma) method - A `Device` can now be attached to a `WebGL2RenderingContext` without calling `WebGLDevice.attach()`.

**@luma.gl/engine**

- New `AsyncTexture` class allows applications to create textures from a URL or Promise.


## Version 9.x

- Improve support for WGSL shader modules.
