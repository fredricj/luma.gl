// luma.gl, MIT license
// Copyright (c) vis.gl contributors

import test from 'tape-promise/tape';
import {webglDevice} from '@luma.gl/test-utils';
import {DeviceFeature} from '@luma.gl/core';

// true: always supported in WebGL2, false: never supported in WebGL1
const WEBGL2_ALWAYS_FEATURES: DeviceFeature[] = [
  'webgl2',

  // api support
  'vertex-array-object-webgl1',
  'instanced-rendering-webgl1',
  'multiple-render-targets-webgl1',

  // features
  'index-uint32-webgl1',
  'blend-minmax-webgl1',
  'texture-formats-srgb-webgl1',

  'texture-formats-depth-webgl1',
  'texture-formats-float32-webgl1',
  'texture-formats-float16-webgl1',

  // glsl extensions
  'glsl-frag-data',
  'glsl-frag-depth',
  'glsl-derivatives',
  'glsl-texture-lod'
];

test('WebGLDevice#features (query for unknown features)', t => {
  // @ts-expect-error
  t.notOk(webglDevice.features.has('unknown'), 'features.has should return false');
  // @ts-expect-error
  t.notOk(webglDevice.features.has(''), 'features.has should return false');
  t.end();
});

test('WebGLDevice#features (WebGL1)', t => {
  t.notOk(webglDevice.features.has('webgl2'), 'features.has should return false');
  t.notOk(
    webglDevice.features.has('texture-renderable-float32-webgl'),
    'features.has should return false'
  );

  t.ok(webglDevice.features.has('vertex-array-object-webgl1'), 'features.has should return true');
  t.ok(webglDevice.features.has('instanced-rendering-webgl1'), 'features.has should return true');

  t.end();
});

test('WebGLDevice#hasFeature(WebGL1)', t => {
  for (const feature of WEBGL2_ALWAYS_FEATURES) {
    t.equal(webglDevice.features.has(feature), true, `${feature} is always supported under WebGL2`);
  }

  t.end();
});
