(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{HGgG:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("rePB"),i=n("dI71"),o=(n("PF2M"),n("IZzc"),n("PG+Z")),a=n("BunF");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),l=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),d=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),v=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),p={POSITION:{size:3,value:new Float32Array(l)},NORMAL:{size:3,value:new Float32Array(d)},TEXCOORD_0:{size:2,value:new Float32Array(v)}},f=function(t){function e(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(a.c)("cube-geometry"):n;return t.call(this,s(s({},e),{},{id:r,indices:{size:1,value:new Uint16Array(u)},attributes:s(s({},p),e.attributes)}))||this}return Object(i.a)(e,t),e}(o.a)},"PG+Z":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("rePB"),i=n("vuIU"),o=n("BunF"),a=n("Iq2B");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var s={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},u=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,r=void 0===n?Object(o.c)("geometry"):n,i=e.drawMode,a=void 0===i?s.TRIANGLES:i,c=e.attributes,u=void 0===c?{}:c,l=e.indices,d=void 0===l?null:l,v=e.vertexCount,p=void 0===v?null:v;this.id=r,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(u,d),this.vertexCount=p||this._calculateVertexCount(this.attributes,this.indices)}var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var r=t[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(a.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(a.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var r in t){var i=t[r],o=i.value,c=i.size;!i.constant&&o&&c>=1&&(n=Math.min(n,o.length/c))}return Object(a.a)(Number.isFinite(n)),n},Object(i.a)(t,[{key:"mode",get:function(){return this.drawMode}}],[{key:"DRAW_MODE",get:function(){return s}}]),t}()},QJb2:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("PF2M"),n("IZzc");var r=n("kh/P"),i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o={modelMatrix:i,viewMatrix:i,projectionMatrix:i,cameraPositionWorld:[0,0,0]};var a={name:"project",getUniforms:function(t,e){void 0===t&&(t=o),void 0===e&&(e={});var n={};return void 0!==t.modelMatrix&&(n.modelMatrix=t.modelMatrix),void 0!==t.viewMatrix&&(n.viewMatrix=t.viewMatrix),void 0!==t.projectionMatrix&&(n.projectionMatrix=t.projectionMatrix),void 0!==t.cameraPositionWorld&&(n.cameraPositionWorld=t.cameraPositionWorld),void 0===t.projectionMatrix&&void 0===t.viewMatrix||(n.viewProjectionMatrix=new r.a(t.projectionMatrix).multiplyRight(t.viewMatrix)),n},vs:"varying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n\n\n// Unprefixed uniforms\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewProjectionMatrix;\nuniform vec3 cameraPositionWorld;\n\nstruct World {\n  vec3 position;\n  vec3 normal;\n};\n\nWorld world;\n\nvoid project_setPosition(vec4 position) {\n  project_vPositionWorld = position;\n}\n\nvoid project_setNormal(vec3 normal) {\n  project_vNormalWorld = normal;\n}\n\nvoid project_setPositionAndNormal_World(vec3 position, vec3 normal) {\n  world.position = position;\n  world.normal = normal;\n}\n\nvoid project_setPositionAndNormal_Model(vec3 position, vec3 normal) {\n  world.position = (modelMatrix * vec4(position, 1.)).xyz;\n  world.normal = mat3(modelMatrix) * normal;\n}\n\nvec4 project_model_to_clipspace(vec4 position) {\n  return viewProjectionMatrix * modelMatrix * position;\n}\n\nvec4 project_model_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * modelMatrix * vec4(position, 1.);\n}\n\nvec4 project_world_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_view_to_clipspace(vec3 position) {\n  return projectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n",fs:"\nvarying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n"},c={lightDirection:new Float32Array([1,1,2])};var s={name:"dirlight",vs:null,fs:"uniform vec3 dirlight_uLightDirection;\n\n/*\n * Returns color attenuated by angle from light source\n */\nvec4 dirlight_filterColor(vec4 color) {\n  vec3 normal = project_getNormal_World();\n  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));\n  return vec4(color.rgb * d, color.a);\n}\n",getUniforms:function(t){void 0===t&&(t=c);var e={};return t.lightDirection&&(e.dirlight_uLightDirection=t.lightDirection),e},dependencies:[a]}},aI42:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){function t(){}t.getInfo=function(){return""};var e=t.prototype;return e.start=function(){},e.stop=function(){},e.delete=function(){},e.onFinalize=function(){},e.waitForRender=function(){return Promise.resolve()},e._setDisplay=function(){},e._getCanvas=function(t){var e;if(void 0===t&&(t={}),t.canvas){e=document.getElementById(t.canvas);var n=window.devicePixelRatio||1;e.height=e.clientHeight*n,e.width=e.clientWidth*n}else(e=document.createElement("canvas")).width=800,e.height=600,document.body.appendChild(e);return e},e._getContainer=function(t){if(void 0===t&&(t={}),this.container)return this.container;var e,n;if(this.container=document.createElement("div"),t.canvas){var r=document.getElementById(t.canvas);this.parent=r.parentElement,e=r.clientWidth,n=r.clientHeight,this.container.style.position="relative",this.container.style.top="-"+n+"px"}else this.parent=document.body,e=800,n=800;return this.container.style.width=e+"px",this.container.style.height=n+"px",this.parent.appendChild(this.container),this.container},e._removeContainer=function(t){void 0===t&&(t={}),this.parent.removeChild(this.container)},t}();function i(){var t=1,e=1;return function(){return t=Math.sin(17.23*e),e=Math.cos(27.92*t),(n=1432.71*Math.abs(t*e))-Math.floor(n);var n}}},d8an:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var r=n("dI71"),i=n("q1tI"),o=n.n(i),a=n("z0FI"),c=(n("PF2M"),n("IZzc"),n("73Rc")),s=n("HGgG"),u=n("UD/Y"),l=n("bjw9"),d=n("3LCa"),v=n("2urO"),p=n("IObG"),f=n("QJb2"),h=n("lHlH"),m=n("kh/P"),b=n("yeNo"),g=n("J4mz"),w=n("aI42"),j=Math.floor(2500),y=5e3-j,O=Object(w.b)(),_=0,P=function(t){function e(e,n){var r,i=n.count,o=new d.a(e,n.offsets);return(r=t.call(this,e,Object.assign({geometry:new s.a},n,{vs:"#version 300 es\n#define SHADER_NAME scene.vs\n\nin vec3 positions;\nin vec3 normals;\nin vec2 texCoords;\nin vec3 offset;\n\nuniform mat4 uView;\nuniform mat4 uProjection;\nout vec2 vUV;\n\nvoid main(void) {\n  gl_Position = uProjection * uView * vec4(positions * 4.0 + offset, 1.0);\n  project_setNormal(normals);\n  vUV = texCoords;\n}\n",fs:"#version 300 es\nprecision highp float;\n#define SHADER_NAME scene.fs\n\nin vec2 vUV;\nuniform sampler2D uTexture;\nuniform float alpha;\n\nout vec4 fragColor;\nvoid main(void) {\n  fragColor.rgb = texture(uTexture, vec2(vUV.x, 1.0 - vUV.y)).rgb;\n  fragColor.a = alpha;\n  fragColor = dirlight_filterColor(fragColor);\n  fragColor.rgb *= fragColor.a;\n}\n",modules:[f.a],isInstanced:1,instanceCount:i,uniforms:n.uniforms,attributes:{offset:{buffer:o,size:3,divisor:1}}}))||this).count=i,r}return Object(r.a)(e,t),e}(u.a),x=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t),e.getInfo=function(){return'\n<p>\n  <div id="info-stats"></div>\n<p>\n'};var n=e.prototype;return n.onInitialize=function(t){var e,n=t.gl;t.framebuffer;if(this.demoNotSupported=!Object(h.h)(n),this.demoNotSupported)return{};for(var r=new m.a,i=(new m.a).lookAt({eye:[0,0,8]}),o=new v.a(n,{data:"vis-logo.png",mipmaps:!0,parameters:(e={},e[n.TEXTURE_MAG_FILTER]=n.LINEAR,e[n.TEXTURE_MIN_FILTER]=n.LINEAR_MIPMAP_NEAREST,e)}),a=new Array(j),c=new Array(y),s=new Float32Array(600),u=0;u<j;++u)a[u]=M(n,s,o,1);for(var l=0;l<y;++l)c[l]=M(n,s,o,.5);var d=new g.a(this.stats,{container:document.getElementById("info-stats"),title:"Drawing "+200*j+" opaque cubes and "+200*y+" transparent cubes in 5000 draw calls",css:{position:"absolute",top:"10px",left:"10px",fontSize:"14px"},formatters:{"CPU Time":"averageTime","GPU Time":"averageTime","Frame Rate":"fps"}});return _=0,{projectionMatrix:r,viewMatrix:i,opaqueCubes:a,transparentCubes:c,statsWidget:d}},n.onRender=function(t){if(!this.demoNotSupported){_+=.01;var e=t.gl,n=t.aspect,r=t.projectionMatrix,i=t.viewMatrix,o=t.opaqueCubes,a=t.transparentCubes,s=t.statsWidget,u=t.tick;s.update(),u%600==0&&this.stats.reset();var l=Math.cos(_),d=Math.sin(_);r.perspective({fov:Object(b.e)(60),aspect:n,near:200,far:2e3}),i.lookAt({eye:[800*l,400,800*d],center:[0,0,0],up:[0,1,0]}),Object(p.a)(e,{color:[0,0,0,1],depth:!0}),Object(h.n)(e,{depthTest:!0,depthMask:!0,depthFunc:c.a.LEQUAL,cull:!0,blend:!1},(function(){for(var t=0;t<j;++t)o[t].draw({uniforms:{uProjection:r,uView:i}})})),Object(h.n)(e,{depthTest:!0,depthMask:!1,depthFunc:c.a.LEQUAL,cull:!0,blend:!0,blendFunc:[c.a.ONE,c.a.ONE_MINUS_SRC_ALPHA]},(function(){for(var t=0;t<y;++t)a[t].draw({uniforms:{uProjection:r,uView:i}})}))}},n.onFinalize=function(t){var e=t.opaqueCubes,n=t.transparentCubes;e&&e.forEach((function(t){return t.delete()})),n&&n.forEach((function(t){return t.delete()}))},n.getAltText=function(){return"THIS DEMO REQUIRES WEBGL 2, BUT YOUR BROWSER DOESN'T SUPPORT IT"},e}(l.a);function M(t,e,n,r){for(var i=0;i<200;++i){var o=500*(O()-.5),a=500*(O()-.5),c=500*(O()-.5);e.set([o,a,c],3*i)}return new P(t,{count:200,offsets:e,uniforms:{uTexture:n,alpha:r}})}"undefined"==typeof window||window.website||(document.body.style.overflow="hidden",document.body.style.margin="0",(new x).start({width:window.innerWidth,height:window.innerHeight}));var E=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.pageContext,e=t&&t.exampleConfig||{};return o.a.createElement(a.a,{AnimationLoop:x,exampleConfig:e})},e}(o.a.Component)}}]);