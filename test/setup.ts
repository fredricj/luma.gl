// decorate tape-catch with tape-promise
import {webglDevice} from '@luma.gl/test-utils';

export {default as deepCopy} from './utils/deep-copy';

export {getResourceCounts, getLeakedResources} from './utils/resource-tracker';

/** @type {{gl: WebGLRenderingContext, gl2: WebGL2RenderingContext}} */
export const fixture = {
  gl: webglDevice.gl,
  gl2: webglDevice?.gl2
};
