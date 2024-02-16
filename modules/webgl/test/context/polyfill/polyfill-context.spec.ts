// luma.gl, MIT license
// Copyright (c) vis.gl contributors

import {polyfillContext} from '@luma.gl/webgl';
import test from 'tape-promise/tape';
import {makeSpy} from '@probe.gl/test-utils';
import {webglDevice} from '@luma.gl/test-utils/create-test-device';

test('WebGL#polyfillContext', (t) => {
  t.ok(typeof polyfillContext === 'function', 'polyfillContext defined');

  const extensions = polyfillContext(webglDevice.gl);
  t.ok(extensions, 'extensions were returned');

  t.end();
});

test('WebGL#polyfillContext getSupportedExtensions when context is lost', (t) => {

  const getSupportedExtensions2Spy = makeSpy(webglDevice.gl, 'getSupportedExtensions');
  getSupportedExtensions2Spy.returns(null);
  const extensions2 = polyfillContext(webglDevice.gl);
  t.ok(extensions2, 'extensions were returned');
  getSupportedExtensions2Spy.restore();

  t.end();
});
