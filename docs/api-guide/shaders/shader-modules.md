# Shader Modules

luma.gl provides a shader module system (`@luma.gl/shadertools`) that allows you to use prebuilt modular shaders in your shader code and also package your own shader code for reuse. 

The system supports both WGSL and GLSL and allows you to import chunks of reusable shader code from separately defined shader fragments into your shader program source code, which allows you to organize your shader code in reusable modules.

The shader module system is built around an "assembler", and addresses the lack of a module/import system in the WGSL / GLSL languages. 


- Enables you to include code from prepackaged modules of shader code into your shaders.
- Enables you to "inject" shader code into your shaders.
- Allows you to package up reusable GLSL code as shader modules.
- Adds GPU detection and a measure of portability your shaders.

## Usage

Most applications call the shader assembler indirectly by supplying a `ModelProps.modules` parameter to the `Model` constructor.

```ts
// Import the color picking module
import {picking} from '@luma.gl/shadertools';
import {ShaderAssembler} from '@luma.gl/shadertools';

const shaderAssembler = ShaderAssembler.getDefaultShaderAssembler();
const {vs, fs, getUniforms, moduleMap} = shaderAssembler.assembleShaderPair(device, {
  fs: '...',
  vs: '...',
  modules: [shaderModule],
  ...
})
```

For full control, is possible to use the shader assembler directly:

To add/inject existing modules into your shaders, just add the modules parameter to your `assembleShaders` call:

```ts
// Import the color picking module
import {picking} from '@luma.gl/shadertools';
import {ShaderAssembler} from '@luma.gl/shadertools';

const shaderAssembler = ShaderAssembler.getDefaultShaderAssembler();
const {vs, fs, getUniforms, moduleMap} = shaderAssembler.assembleShaderPair(device, {
  fs: '...',
  vs: '...',
  modules: [shaderModule],
  ...
})
```

To create a new shader module, you need to create a descriptor object.

```ts
import type {ShaderModule} from '@luma.gl/shadertools';

const myShaderModule: ShaderModule = {
  name: 'my-shader-module',
  vs: ....
  fs: null,
  inject: {},
  dependencies: [],
  deprecations: [],
  getUniforms
};
```

This object can be used as shader module directly:

```ts
assembleShaders(device, {..., modules: [MY_SHADER_MODULE]});
```

## Structure of a Shader Module

### Shader Module Type

A shader module is either:

- **Generic** - a set of generic GLSL functions that can be included either in a fragment shader or a vertex shader (or both). The `fp64` module is a good example of this type of module.
- **Functional** - Contains specific vertex and/or fragment shader "chunks", often set up so that the vertex shader part sets up a `varying` used by the fragment shader part.

