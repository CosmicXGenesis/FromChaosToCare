(()=>{"use strict";var t={831:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class s extends Error{constructor(t,e,s,i,n){super(t+":"+s+":"+i+": "+e),this.reason=e,this.filename=t,this.line=s,this.column=i,this.source=n}}e.default=s},711:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e,s){this.start=t,this.end=e,this.source=s}}},607:function(t,e,s){var i=this&&this.__createBinding||(Object.create?function(t,e,s,i){void 0===i&&(i=s);var n=Object.getOwnPropertyDescriptor(e,s);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,i,n)}:function(t,e,s,i){void 0===i&&(i=s),t[i]=e[s]}),n=this&&this.__exportStar||function(t,e){for(var s in t)"default"===s||Object.prototype.hasOwnProperty.call(e,s)||i(e,t,s)};Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.parse=void 0;var r=s(654);Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return r.default}});var o=s(373);Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return o.default}}),n(s(371),e),n(s(831),e),n(s(711),e)},654:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parse=void 0;const i=s(831),n=s(711),r=s(371),o=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;function c(t){return t?t.trim():""}function u(t,e){const s=t&&"string"==typeof t.type,i=s?t:e;for(const e in t){const s=t[e];Array.isArray(s)?s.forEach((t=>{u(t,i)})):s&&"object"==typeof s&&u(s,i)}return s&&Object.defineProperty(t,"parent",{configurable:!0,writable:!0,enumerable:!1,value:e||null}),t}e.parse=(t,e)=>{e=e||{};let s=1,a=1;function m(){const t={line:s,column:a};return function(i){return i.position=new n.default(t,{line:s,column:a},(null==e?void 0:e.source)||""),g(),i}}const p=[];function h(n){const r=new i.default((null==e?void 0:e.source)||"",n,s,a,t);if(!(null==e?void 0:e.silent))throw r;p.push(r)}function l(){return y(/^{\s*/)}function f(){return y(/^}/)}function d(){let e;const s=[];for(g(),v(s);t.length&&"}"!==t.charAt(0)&&(e=M()||P());)e&&(s.push(e),v(s));return s}function y(e){const i=e.exec(t);if(!i)return;const n=i[0];return function(t){const e=t.match(/\n/g);e&&(s+=e.length);const i=t.lastIndexOf("\n");a=~i?t.length-i:a+t.length}(n),t=t.slice(n.length),i}function g(){y(/^\s*/)}function v(t){let e;for(t=t||[];e=C();)e&&t.push(e);return t}function C(){const e=m();if("/"!==t.charAt(0)||"*"!==t.charAt(1))return;const s=y(/^\/\*[^]*?\*\//);return s?e({type:r.CssTypes.comment,comment:s[0].slice(2,-2)}):h("End of comment missing")}function T(){const t=y(/^([^{]+)/);if(!t)return;const e=c(t[0]).replace(/\/\*[^]*?\*\//gm,"");return-1===e.indexOf(",")?[e]:e.replace(/("|')(?:\\\1|.)*?,(?:\\\1|.)*?\1|\(.*?,.*?\)/g,(t=>t.replace(/,/g,"‌"))).split(",").map((t=>c(t.replace(/\u200C/g,","))))}function b(){const t=m(),e=y(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(!e)return;const s=c(e[0]);if(!y(/^:\s*/))return h("property missing ':'");const i=y(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/),n=t({type:r.CssTypes.declaration,property:s.replace(o,""),value:i?c(i[0]).replace(o,""):""});return y(/^[;\s]*/),n}function j(){const t=[];if(!l())return h("missing '{'");let e;for(v(t);e=b();)e&&(t.push(e),v(t));return f()?t:h("missing '}'")}function k(){let t;const e=[],s=m();for(;t=y(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)e.push(t[1]),y(/^,\s*/);if(e.length)return s({type:r.CssTypes.keyframe,values:e,declarations:j()||[]})}const _=w("import"),V=w("charset"),O=w("namespace");function w(t){const e=new RegExp("^@"+t+"\\s*([^;]+);");return function(){const s=m(),i=y(e);if(!i)return;const n={type:t};return n[t]=i[1].trim(),s(n)}}function M(){if("@"===t[0])return function(){const t=m(),e=y(/^@([-\w]+)?keyframes\s*/);if(!e)return;const s=e[1],i=y(/^([-\w]+)\s*/);if(!i)return h("@keyframes missing name");const n=i[1];if(!l())return h("@keyframes missing '{'");let o,c=v();for(;o=k();)c.push(o),c=c.concat(v());return f()?t({type:r.CssTypes.keyframes,name:n,vendor:s,keyframes:c}):h("@keyframes missing '}'")}()||function(){const t=m(),e=y(/^@media *([^{]+)/);if(!e)return;const s=c(e[1]);if(!l())return h("@media missing '{'");const i=v().concat(d());return f()?t({type:r.CssTypes.media,media:s,rules:i}):h("@media missing '}'")}()||function(){const t=m(),e=y(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return t({type:r.CssTypes.customMedia,name:c(e[1]),media:c(e[2])})}()||function(){const t=m(),e=y(/^@supports *([^{]+)/);if(!e)return;const s=c(e[1]);if(!l())return h("@supports missing '{'");const i=v().concat(d());return f()?t({type:r.CssTypes.supports,supports:s,rules:i}):h("@supports missing '}'")}()||_()||V()||O()||function(){const t=m(),e=y(/^@([-\w]+)?document *([^{]+)/);if(!e)return;const s=c(e[1]),i=c(e[2]);if(!l())return h("@document missing '{'");const n=v().concat(d());return f()?t({type:r.CssTypes.document,document:i,vendor:s,rules:n}):h("@document missing '}'")}()||function(){const t=m();if(!y(/^@page */))return;const e=T()||[];if(!l())return h("@page missing '{'");let s,i=v();for(;s=b();)i.push(s),i=i.concat(v());return f()?t({type:r.CssTypes.page,selectors:e,declarations:i}):h("@page missing '}'")}()||function(){const t=m();if(!y(/^@host\s*/))return;if(!l())return h("@host missing '{'");const e=v().concat(d());return f()?t({type:r.CssTypes.host,rules:e}):h("@host missing '}'")}()||function(){const t=m();if(!y(/^@font-face\s*/))return;if(!l())return h("@font-face missing '{'");let e,s=v();for(;e=b();)s.push(e),s=s.concat(v());return f()?t({type:r.CssTypes.fontFace,declarations:s}):h("@font-face missing '}'")}()}function P(){const t=m(),e=T();return e?(v(),t({type:r.CssTypes.rule,selectors:e,declarations:j()||[]})):h("selector missing")}return u(function(){const t=d();return{type:r.CssTypes.stylesheet,stylesheet:{source:null==e?void 0:e.source,rules:t,parsingErrors:p}}}())},e.default=e.parse},854:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(371);e.default=class{constructor(t){this.level=0,this.indentation="  ",this.compress=!1,"string"==typeof(null==t?void 0:t.indent)&&(this.indentation=null==t?void 0:t.indent),(null==t?void 0:t.compress)&&(this.compress=!0)}emit(t,e){return t}indent(t){return this.level=this.level||1,t?(this.level+=t,""):Array(this.level).join(this.indentation)}visit(t){switch(t.type){case i.CssTypes.stylesheet:return this.stylesheet(t);case i.CssTypes.rule:return this.rule(t);case i.CssTypes.declaration:return this.declaration(t);case i.CssTypes.comment:return this.comment(t);case i.CssTypes.charset:return this.charset(t);case i.CssTypes.document:return this.document(t);case i.CssTypes.customMedia:return this.customMedia(t);case i.CssTypes.fontFace:return this.fontFace(t);case i.CssTypes.host:return this.host(t);case i.CssTypes.import:return this.import(t);case i.CssTypes.keyframes:return this.keyframes(t);case i.CssTypes.keyframe:return this.keyframe(t);case i.CssTypes.media:return this.media(t);case i.CssTypes.namespace:return this.namespace(t);case i.CssTypes.page:return this.page(t);case i.CssTypes.supports:return this.supports(t)}}mapVisit(t,e){let s="";e=e||"";for(let i=0,n=t.length;i<n;i++)s+=this.visit(t[i]),e&&i<n-1&&(s+=this.emit(e));return s}compile(t){return this.compress?t.stylesheet.rules.map(this.visit,this).join(""):this.stylesheet(t)}stylesheet(t){return this.mapVisit(t.stylesheet.rules,"\n\n")}comment(t){return this.compress?this.emit("",t.position):this.emit(this.indent()+"/*"+t.comment+"*/",t.position)}import(t){return this.emit("@import "+t.import+";",t.position)}media(t){return this.compress?this.emit("@media "+t.media,t.position)+this.emit("{")+this.mapVisit(t.rules)+this.emit("}"):this.emit("@media "+t.media,t.position)+this.emit(" {\n"+this.indent(1))+this.mapVisit(t.rules,"\n\n")+this.emit(this.indent(-1)+"\n}")}document(t){const e="@"+(t.vendor||"")+"document "+t.document;return this.compress?this.emit(e,t.position)+this.emit("{")+this.mapVisit(t.rules)+this.emit("}"):this.emit(e,t.position)+this.emit("  {\n"+this.indent(1))+this.mapVisit(t.rules,"\n\n")+this.emit(this.indent(-1)+"\n}")}charset(t){return this.emit("@charset "+t.charset+";",t.position)}namespace(t){return this.emit("@namespace "+t.namespace+";",t.position)}supports(t){return this.compress?this.emit("@supports "+t.supports,t.position)+this.emit("{")+this.mapVisit(t.rules)+this.emit("}"):this.emit("@supports "+t.supports,t.position)+this.emit(" {\n"+this.indent(1))+this.mapVisit(t.rules,"\n\n")+this.emit(this.indent(-1)+"\n}")}keyframes(t){return this.compress?this.emit("@"+(t.vendor||"")+"keyframes "+t.name,t.position)+this.emit("{")+this.mapVisit(t.keyframes)+this.emit("}"):this.emit("@"+(t.vendor||"")+"keyframes "+t.name,t.position)+this.emit(" {\n"+this.indent(1))+this.mapVisit(t.keyframes,"\n")+this.emit(this.indent(-1)+"}")}keyframe(t){const e=t.declarations;return this.compress?this.emit(t.values.join(","),t.position)+this.emit("{")+this.mapVisit(e)+this.emit("}"):this.emit(this.indent())+this.emit(t.values.join(", "),t.position)+this.emit(" {\n"+this.indent(1))+this.mapVisit(e,"\n")+this.emit(this.indent(-1)+"\n"+this.indent()+"}\n")}page(t){if(this.compress){const e=t.selectors.length?t.selectors.join(", "):"";return this.emit("@page "+e,t.position)+this.emit("{")+this.mapVisit(t.declarations)+this.emit("}")}const e=t.selectors.length?t.selectors.join(", ")+" ":"";return this.emit("@page "+e,t.position)+this.emit("{\n")+this.emit(this.indent(1))+this.mapVisit(t.declarations,"\n")+this.emit(this.indent(-1))+this.emit("\n}")}fontFace(t){return this.compress?this.emit("@font-face",t.position)+this.emit("{")+this.mapVisit(t.declarations)+this.emit("}"):this.emit("@font-face ",t.position)+this.emit("{\n")+this.emit(this.indent(1))+this.mapVisit(t.declarations,"\n")+this.emit(this.indent(-1))+this.emit("\n}")}host(t){return this.compress?this.emit("@host",t.position)+this.emit("{")+this.mapVisit(t.rules)+this.emit("}"):this.emit("@host",t.position)+this.emit(" {\n"+this.indent(1))+this.mapVisit(t.rules,"\n\n")+this.emit(this.indent(-1)+"\n}")}customMedia(t){return this.emit("@custom-media "+t.name+" "+t.media+";",t.position)}rule(t){const e=t.declarations;if(!e.length)return"";if(this.compress)return this.emit(t.selectors.join(","),t.position)+this.emit("{")+this.mapVisit(e)+this.emit("}");const s=this.indent();return this.emit(t.selectors.map((t=>s+t)).join(",\n"),t.position)+this.emit(" {\n")+this.emit(this.indent(1))+this.mapVisit(e,"\n")+this.emit(this.indent(-1))+this.emit("\n"+this.indent()+"}")}declaration(t){return this.compress?this.emit(t.property+":"+t.value,t.position)+this.emit(";"):this.emit(this.indent())+this.emit(t.property+": "+t.value,t.position)+this.emit(";")}}},373:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(854);e.default=(t,e)=>new i.default(e||{}).compile(t)},371:(t,e)=>{var s;Object.defineProperty(e,"__esModule",{value:!0}),e.CssTypes=void 0,(s=e.CssTypes||(e.CssTypes={})).stylesheet="stylesheet",s.rule="rule",s.declaration="declaration",s.comment="comment",s.charset="charset",s.document="document",s.customMedia="custom-media",s.fontFace="font-face",s.host="host",s.import="import",s.keyframes="keyframes",s.keyframe="keyframe",s.media="media",s.namespace="namespace",s.page="page",s.supports="supports"}},e={},s=function s(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,s),r.exports}(607);module.exports=s})();
//# sourceMappingURL=cssTools.js.map