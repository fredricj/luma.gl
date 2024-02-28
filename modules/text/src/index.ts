// luma.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

export type {FontSettings} from './font-atlas-manager'
export {DEFAULT_FONT_SETTINGS} from './font-atlas-manager';
export {setFontAtlasCacheLimit} from './font-atlas-manager';
export {FontAtlasManager} from './font-atlas-manager';

// TEST EXPORTS

export {LRUCache} from './lru-cache';

export {
  nextPowOfTwo,
  buildMapping,
  autoWrapping,
  transformParagraph,
  getTextFromBuffer
} from './utils';
