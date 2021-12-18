/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class s{constructor(e,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=(e,...i)=>{const o=1===e.length?e[0]:i.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new s(o,t)},a=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new s("string"==typeof e?e:e+"",t))(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const n=window.trustedTypes,d=n?n.emptyScript:"",c=window.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},l=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:l};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Eh(i,t);void 0!==s&&(this._$Eu.set(s,i),e.push(s))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=p){var s,o;const a=this.constructor._$Eh(e,i);if(void 0!==a&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:m.toAttribute)(t,i.type);this._$Ei=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Ei=null}}_$AK(e,t){var i,s,o;const a=this.constructor,r=a._$Eu.get(e);if(void 0!==r&&this._$Ei!==r){const e=a.getPropertyOptions(r),n=e.converter,d=null!==(o=null!==(s=null===(i=n)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof n?n:null)&&void 0!==o?o:m.fromAttribute;this._$Ei=r,this[r]=d(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||l)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:h}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.2");const g=globalThis.trustedTypes,b=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,v="?"+w,f=`<${v}>`,x=document,y=(e="")=>x.createComment(e),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,k=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,S=/"/g,P=/^(?:script|style|textarea)$/i,T=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),N=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),z=new WeakMap,M=x.createTreeWalker(x,129,null,!1),L=(e,t)=>{const i=e.length-1,s=[];let o,a=2===t?"<svg>":"",r=C;for(let t=0;t<i;t++){const i=e[t];let n,d,c=-1,m=0;for(;m<i.length&&(r.lastIndex=m,d=r.exec(i),null!==d);)m=r.lastIndex,r===C?"!--"===d[1]?r=_:void 0!==d[1]?r=k:void 0!==d[2]?(P.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=E):void 0!==d[3]&&(r=E):r===E?">"===d[0]?(r=null!=o?o:C,c=-1):void 0===d[1]?c=-2:(c=r.lastIndex-d[2].length,n=d[1],r=void 0===d[3]?E:'"'===d[3]?S:A):r===S||r===A?r=E:r===_||r===k?r=C:(r=E,o=void 0);const l=r===E&&e[t+1].startsWith("/>")?" ":"";a+=r===C?i+f:c>=0?(s.push(n),i.slice(0,c)+"$lit$"+i.slice(c)+w+l):i+w+(-2===c?(s.push(void 0),t):l)}const n=a+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==b?b.createHTML(n):n,s]};class O{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,a=0;const r=e.length-1,n=this.parts,[d,c]=L(e,t);if(this.el=O.createElement(d,i),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=M.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const i=c[a++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(i);n.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?H:"?"===t[1]?Y:"@"===t[1]?F:R})}else n.push({type:6,index:o})}for(const t of e)s.removeAttribute(t)}if(P.test(s.tagName)){const e=s.textContent.split(w),t=e.length-1;if(t>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],y()),M.nextNode(),n.push({type:2,index:++o});s.append(e[t],y())}}}else if(8===s.nodeType)if(s.data===v)n.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(w,e+1));)n.push({type:7,index:o}),e+=w.length-1}o++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function V(e,t,i=e,s){var o,a,r,n;if(t===N)return t;let d=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const c=j(t)?void 0:t._$litDirective$;return(null==d?void 0:d.constructor)!==c&&(null===(a=null==d?void 0:d._$AO)||void 0===a||a.call(d,!1),void 0===c?d=void 0:(d=new c(e),d._$AT(e,i,s)),void 0!==s?(null!==(r=(n=i)._$Cl)&&void 0!==r?r:n._$Cl=[])[s]=d:i._$Cu=d),void 0!==d&&(t=V(e,d._$AS(e,t.values),d,s)),t}class U{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(i,!0);M.currentNode=o;let a=M.nextNode(),r=0,n=0,d=s[0];for(;void 0!==d;){if(r===d.index){let t;2===d.type?t=new D(a,a.nextSibling,this,e):1===d.type?t=new d.ctor(a,d.name,d.strings,this,e):6===d.type&&(t=new q(a,this,e)),this.v.push(t),d=s[++n]}r!==(null==d?void 0:d.index)&&(a=M.nextNode(),r++)}return o}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class D{constructor(e,t,i,s){var o;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),j(e)?e===I||null==e||""===e?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return $(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==I&&j(this._$AH)?this._$AA.nextSibling.data=e:this.S(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=O.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(i);else{const e=new U(o,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new O(e)),t}M(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new D(this.A(y()),this.A(y()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class R{constructor(e,t,i,s,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let a=!1;if(void 0===o)e=V(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{const s=e;let r,n;for(e=o[0],r=0;r<o.length-1;r++)n=V(this,s[i+r],t,r),n===N&&(n=this._$AH[r]),a||(a=!j(n)||n!==this._$AH[r]),n===I?e=I:e!==I&&(e+=(null!=n?n:"")+o[r+1]),this._$AH[r]=n}a&&!s&&this.k(e)}k(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class H extends R{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===I?void 0:e}}const B=g?g.emptyScript:"";class Y extends R{constructor(){super(...arguments),this.type=4}k(e){e&&e!==I?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class F extends R{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=V(this,e,t,0))&&void 0!==i?i:I)===N)return;const s=this._$AH,o=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==I&&(s===I||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const X=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,Z;null==X||X(O,D),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.2");class J extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var s,o;const a=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let r=a._$litPart$;if(void 0===r){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=r=new D(t.insertBefore(y(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return N}}J.finalized=!0,J._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:J});const Q=globalThis.litElementPolyfillSupport;function G(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}null==Q||Q({LitElement:J}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.0.2"),
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var K="function"==typeof Symbol&&Symbol.observable||"@@observable",ee=function(){return Math.random().toString(36).substring(7).split("").join(".")},te={INIT:"@@redux/INIT"+ee(),REPLACE:"@@redux/REPLACE"+ee(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ee()}};function ie(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function se(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=typeof e;switch(t){case"boolean":case"string":case"number":case"symbol":case"function":return t}if(Array.isArray(e))return"array";if(function(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}(e))return"date";if(function(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}(e))return"error";var i=function(e){return"function"==typeof e.constructor?e.constructor.name:null}(e);switch(i){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return i}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}function oe(e){var t=typeof e;return"production"!==process.env.NODE_ENV&&(t=se(e)),t}function ae(){}"production"!==process.env.NODE_ENV&&"string"==typeof ae.name&&"isCrushed"!==ae.name&&function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');const re={renderValue:"home",levelValue:0,areaValue:0,mediaValue:["Linki",0],siteTree:[{position:1,name:"home",title:"home"},{position:2,name:"about",title:"Conócenos"},{position:3,name:"news",title:"Noticias"},{position:4,name:"projects",title:"Proyectos",projects:[{name:"D.B.A.E.",description:"Esta iniciativa es financiada por el Ministerio de Desarrollo Social y Familia, a través de los Fondos Chile Compromiso de Todos 2021. \n El propósito de este material es apoyar la educación de estudiantes Sordos en primer ciclo de enseñanza básica de la región de Atacama.",img:"/src/img.webp",levels:[{name:"1° Básico",areas:[{aNames:"Ciencias",contents:[{position:1,title:"características de los seres vivos y cosas no vivas.",iframe:"https://www.youtube.com/embed/Z7sfoodZtL0",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"¿cómo nacen los seres vivos?",iframe:"https://www.youtube.com/embed/qKSzR01JDSY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"¿cómo cambian los seres vivos?",iframe:"https://www.youtube.com/embed/LXKzjSt6XWU",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Cómo responden los seres vivos (Parte 1)",iframe:"https://www.youtube.com/embed/84kCjobe8CQ",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Cómo responden los seres vivos (Parte 2)",iframe:"https://www.youtube.com/embed/tctslx_3HUY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Los 5 Sentidos",iframe:"https://www.youtube.com/embed/dz4zUq2Z26U",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Cómo debemos alimentarnos",iframe:"https://www.youtube.com/embed/norUgunTWhY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"¿Cómo alimentarnos? (Parte 1)",iframe:"https://www.youtube.com/embed/0IEuOA51SM4",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"¿Cómo alimentarnos? (Parte 2)",iframe:"https://www.youtube.com/embed/b-H1wnuOwLg",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Qué cubre el cuerpo de los animales (parte 1)",iframe:"https://www.youtube.com/embed/VeQ8XMXbXXI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:11,title:"Qué cubre el cuerpo de los animales (parte 2)",iframe:"https://www.youtube.com/embed/VeQ8XMXbXXI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:12,title:"Identificar partes de animales que permiten desplazarse (parte 1)",iframe:"https://www.youtube.com/embed/blsCaCbXFlY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:13,title:"Identificar partes de animales que permiten desplazarse (parte 2)",iframe:"https://www.youtube.com/embed/OOktq7Z8eGI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:14,title:"Partes de una planta",iframe:"https://www.youtube.com/embed/TTmbu0SL6XI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:15,title:"Materiales de Mi Entorno (parte1)",iframe:"https://www.youtube.com/embed/gbO5Ev8kpFE",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:16,title:"Materiales de mi entorno (parte 2)",iframe:"https://www.youtube.com/embed/R4B2Wst9jq8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:17,title:"El cielo, el Sol, el día y la noche",iframe:"https://www.youtube.com/embed/Zn9t-dNJwJ8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:18,title:"Estaciones del Año",iframe:"https://www.youtube.com/embed/EYhxhu0mcUM",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Lenguaje",contents:[{position:1,title:"Letra M",iframe:"https://www.youtube.com/embed/hewjqH6Fky4",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Letra L",iframe:"https://www.youtube.com/embed/ZU6eXTdo4QQ",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Letra P",iframe:"https://www.youtube.com/embed/61Ul3c730MY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Letra S",iframe:"https://www.youtube.com/embed/hewjqH6Fky4",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Letra D",iframe:"https://www.youtube.com/embed/YY1v_VnbJ1U",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Letra T",iframe:"https://www.youtube.com/embed/aXtf0msy_ro",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Letra N",iframe:"https://www.youtube.com/embed/_A6qUGPlNL8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Letra F (parte 2)",iframe:"https://www.youtube.com/embed/9a7YYqms0nI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Cuento Fofi ",iframe:"https://www.youtube.com/embed/E5LR7r8BgnI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Preguntas cuento del fantasma Fofi",iframe:"https://www.youtube.com/embed/fqJSeNMF5-o",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:11,title:'Cuento letra "H"',iframe:"https://www.youtube.com/embed/u0E4-G2gOwY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Matematicas",contents:[{position:1,title:"Números del 0 al 10",iframe:"https://www.youtube.com/embed/cnf9k6RZAzc",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Juntar o agregar, situaciones de la vida cotidiana ",iframe:"https://www.youtube.com/embed/6kumq1homRc",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Comparar grupos Hasta 10",iframe:"https://www.youtube.com/embed/-DZzLlUUUg8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Representar Adición y Sustracción",iframe:"https://www.youtube.com/embed/BIU1pqLizc8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Sumas con Frase Numérica",iframe:"https://www.youtube.com/embed/TSJCyj4udUk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Sustracción hasta 10",iframe:"https://www.youtube.com/embed/-T9x2wQIG78",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Problemas numéricos de sustracción",iframe:"https://www.youtube.com/embed/H5qZYnXjlAs",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Problemas de sustracción hasta 10",iframe:"https://www.youtube.com/embed/89lxZJPVSEY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Identificar la Longitud con medida (parte 1)",iframe:"https://www.youtube.com/embed/lPWYIIwlFW0",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Identificar la Longitud con medida (parte 2)",iframe:"https://www.youtube.com/embed/6biRY7JXoWg",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:11,title:"Sumas y restas hasta el 20",iframe:"https://www.youtube.com/embed/w2ODtVTJMPo",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:12,title:"Unidades del 0 al 20",iframe:"https://www.youtube.com/embed/Z2szaV-PqHY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:13,title:"Decenas del 0 al 20",iframe:"https://www.youtube.com/embed/4xfkB_0XLLg",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]}]},{name:"2° Básico",areas:[{aNames:"Ciencias",contents:[{position:1,title:"Animales vertebrados (parte 1)",iframe:"https://www.youtube.com/embed/n6yLOijojj4",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Animales vertebrados (parte 2)",iframe:"https://www.youtube.com/embed/XvEFwGWoRIw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Animales Invertebrados (parte 1)",iframe:"https://www.youtube.com/embed/w0PVkaV23X8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Animales Invertebrados (parte 2)",iframe:"https://www.youtube.com/embed/P_MPEDsd46I",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Partes del Cuerpo y sus Funciones",iframe:"https://www.youtube.com/embed/Q9TeK30N7XA",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Ciclo del agua, Forma del agua",iframe:"https://www.youtube.com/embed/-QkQUIsxIrU",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Celebración de las estaciones del año",iframe:"https://www.youtube.com/embed/-9fFVkPLsKg",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Ciclos del Agua, Tiempo Atmosférico",iframe:"https://www.youtube.com/embed/IkfI-CN4k-U",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Estaciones del año Otoño",iframe:"https://www.youtube.com/embed/RAYdkHqUcRw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Estaciones del año, Verano",iframe:"https://www.youtube.com/embed/hZbbcI63sbs",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:11,title:"Estaciones del año, Primavera",iframe:"https://www.youtube.com/embed/NkAPqpa_37w",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:12,title:"Estaciones del año, Invierno",iframe:"https://www.youtube.com/embed/wy2FrYG9MlA",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:13,title:"Identificar animales en peligro de extinción",iframe:"https://www.youtube.com/embed/qVg5UfBtJsw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:14,title:"La actividad física para el desarrollo de los músculos (Parte 1)",iframe:"https://www.youtube.com/embed/KOUdDU8V0uo",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:15,title:"La actividad física para el desarrollo de los músculos (Parte 2)",iframe:"https://www.youtube.com/embed/EBysq_ml7bw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Lenguaje",contents:[{position:1,title:"Diptongo e hiato Gue / Gui",iframe:"https://www.youtube.com/embed/OCYw1kiA4OA",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Diptongos e Hiatos Que- Qui",iframe:"https://www.youtube.com/embed/R9uQHXl-1cY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Cuento Pelitos Blanco (Parte 1) Relato",iframe:"https://www.youtube.com/embed/RCkkHmZ3SH8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Cuento Pelitos Blanco (Parte 2) Preguntas",iframe:"https://www.youtube.com/embed/jHlHP6BTEYw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Cuenco Pelitos Blanco (Parte 3) Preguntas",iframe:"https://www.youtube.com/embed/Xn9acAcBnhk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Cuento El Hacha (Parte 1)",iframe:"https://www.youtube.com/embed/wDCX3xIuRno",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Cuento del hacha (parte 2) Preguntas",iframe:"https://www.youtube.com/embed/v4gf77mkDYc",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Matematicas",contents:[{position:1,title:"Patrones Repetitivos",iframe:"https://www.youtube.com/embed/3pv-_-svj8c",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Contar hasta 100 Agrupando (Parte 1)",iframe:"https://www.youtube.com/embed/OQ7rIcJIFHs",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Contar hasta 100 Agrupando (Parte 2)",iframe:"https://www.youtube.com/embed/-v62g1Ci_0w",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Sumas de decenas",iframe:"https://www.youtube.com/embed/HbV7XFcLW7k",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Restas de números múltiplos de 10.",iframe:"https://www.youtube.com/embed/lSKqStlXnAk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Demostración Adición y Sustracción de 0 a 100",iframe:"https://www.youtube.com/embed/Ga5c82lDrSk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Unidades y decenas de 0 a 100",iframe:"https://www.youtube.com/embed/eYAwdS49ZqI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Igualdad y desigualdad (parte 1)",iframe:"https://www.youtube.com/embed/mL0FKbXlQ7A",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Igualdad y desigualdad (parte 2)",iframe:"https://www.youtube.com/embed/KdKnks93Sc8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]}]},{name:"3° Básico",areas:[{aNames:"Ciencias",contents:[{position:1,title:"Las plantas y que uso le damos (parte 1)",iframe:"https://www.youtube.com/embed/AB3hRK7tyi8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Las plantas y que uso le damos (parte 2)",iframe:"https://www.youtube.com/embed/AXB22JNVEVI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Importancia de las planta, Reproducción",iframe:"https://www.youtube.com/embed/uO0FdqRdoIQ",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Importancia de las plantas, Qué usos le damos",iframe:"https://www.youtube.com/embed/TNpI8r9ZCM4",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Clasificación de los alimentos, cuales nos hacen bien y cuales evitar",iframe:"https://www.youtube.com/embed/CvunfoVeWJo",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Investigar y explicar la luz",iframe:"https://www.youtube.com/embed/hdH1OSe0vUw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Traslación y rotación",iframe:"https://www.youtube.com/embed/S7HPI9aEpWg",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Movimiento de Traslación y Rotación (Parte 1)",iframe:"https://www.youtube.com/embed/1u5dOsCQS-g",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Movimiento de Traslación y Rotación, Eclipse (Parte 2)",iframe:"https://www.youtube.com/embed/h2795T_N0PY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Buenas prácticas de higiene",iframe:"https://www.youtube.com/embed/tZjZG0eGjNk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Lenguaje",contents:[{position:1,title:"Identificar ambientes, personajes y sus acciones (parte 1)",iframe:"https://www.youtube.com/embed/uObBbZ1o9DM",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Identificar ambientes, personajes y sus acciones (parte 2)Cuento del Rey Midas",iframe:"https://www.youtube.com/embed/qnkCCCD0E18",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Identificar ambientes, personajes y sus acciones ( parte 3) Preguntas del cuento",iframe:"https://www.youtube.com/embed/D1quE6M6Xu8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Leyendas, Cai Cai -Tren Tren (Parte 1)",iframe:"https://www.youtube.com/embed/6Z3_zW_z-JY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Comprensión lectora, El CÓMIC",iframe:"https://www.youtube.com/embed/499TEVaCU_I",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Escribir una anécdota, siguiendo etapas de la escritura",iframe:"https://www.youtube.com/embed/KU4Ywz0Kkuw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Matematicas",contents:[{position:1,title:"Adición hasta el 20, Ejercicios",iframe:"https://www.youtube.com/embed/G4WRqrWBVIk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Aplicar Sumas y restas",iframe:"https://www.youtube.com/embed/nKHJgJ4gtAY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Multiplicaciones con el mismo sumando",iframe:"https://www.youtube.com/embed/Hq_qhqmteSw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Tablas del 3 y 4",iframe:"https://www.youtube.com/embed/pvPsCmP1xdI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Tablas del 6 y 7",iframe:"https://www.youtube.com/embed/g_4rLhlFMQ0",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Tablas del 8 Y 9",iframe:"https://www.youtube.com/embed/PeR0ZBU_6dQ",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"División y sus componentes",iframe:"https://www.youtube.com/embed/LfdbQh0IY3E",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Concepto de reparto en la vida cotidiana",iframe:"https://www.youtube.com/embed/ZTBv8t9hM8A",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Divisiones (Parte 1)",iframe:"https://www.youtube.com/embed/y2BOCyh4mXA",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Divisiones (Parte 2)",iframe:"https://www.youtube.com/embed/I6V9rWeoiJ0",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]}]},{name:"4° Básico",areas:[{aNames:"Ciencias",contents:[{position:1,title:"Ecosistemas, cómo se alimentan los seres vivos",iframe:"https://www.youtube.com/embed/ld6dXatLLcs",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Reconocer ecosistemas, protección del ecosistema",iframe:"https://www.youtube.com/embed/SU5t5NMB2lI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Lenguaje",contents:[{position:1,title:"Comprensión de textos No Literarios, la Carta",iframe:"https://www.youtube.com/embed/YWHR6RGwbyw",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"Comprensión de textos No literarios, Biografía",iframe:"https://www.youtube.com/embed/msTnpoARPB8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Comprensión de textos no literarios, INSTRUCTIVO",iframe:"https://www.youtube.com/embed/YbYuGz5uFy8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Comprensión de textos NO Literarios, NOTICIAS",iframe:"https://www.youtube.com/embed/PfEXsk_uXGk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Fábula 1 (parte 1)",iframe:"https://www.youtube.com/embed/7pMZZT2CdSM",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Fábula (parte 2)",iframe:"https://www.youtube.com/embed/zRuHUYPyTXA",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Comprensión de textos, INFOGRAFIA",iframe:"https://www.youtube.com/embed/tZFcwUgCM3U",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Caracterización de personajes",iframe:"https://www.youtube.com/embed/1CM6W2UiFy4",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Caracterización de los personajes (Parte 2)",iframe:"https://www.youtube.com/embed/1yyWvxhy-n0",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]},{aNames:"Matematicas",contents:[{position:1,title:"Multiplicación de 3 dígitos en 1 dígito",iframe:"https://www.youtube.com/embed/BLD_7bUmGBk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:2,title:"División de 2 dígitos en 1 dígito",iframe:"https://www.youtube.com/embed/yc4cvQCie7E",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:3,title:"Problemas Rutinarios con Dinero",iframe:"https://www.youtube.com/embed/-JOU_jO-4BU",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:4,title:"Problemas Rutinarios con Dinero, ejercicio",iframe:"https://www.youtube.com/embed/ZmWIZedooB8",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:5,title:"Problemas Rutinarios con Dinero, ejercicio 2",iframe:"https://www.youtube.com/embed/IwTafJavlQI",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:6,title:"Patrones numéricos",iframe:"https://www.youtube.com/embed/cQTSbuKbTqE",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:7,title:"Líneas Simétricas",iframe:"https://www.youtube.com/embed/d6KlkCXSjfs",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:8,title:"Medir longitudes metros y centímetros",iframe:"https://www.youtube.com/embed/OkE8rY2Cwxk",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:9,title:"Pictogramas, Tipos de Gráficos",iframe:"https://www.youtube.com/embed/DISt1sH0xhY",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"},{position:10,title:"Pictogramas, Interpretación de datos",iframe:"https://www.youtube.com/embed/_tZyDZsFD0A",img:"src\\img\\pjts\\dbae\\imgmedia\\mbr-10-506x337.jpg"}]}]}]}]},{position:5,name:"contact",title:"Contáctanos"}]},ne=function e(t,i,s){var o;if("function"==typeof i&&"function"==typeof s||"function"==typeof s&&"function"==typeof arguments[3])throw new Error("production"===process.env.NODE_ENV?G(0):"It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");if("function"==typeof i&&void 0===s&&(s=i,i=void 0),void 0!==s){if("function"!=typeof s)throw new Error("production"===process.env.NODE_ENV?G(1):"Expected the enhancer to be a function. Instead, received: '"+oe(s)+"'");return s(e)(t,i)}if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?G(2):"Expected the root reducer to be a function. Instead, received: '"+oe(t)+"'");var a=t,r=i,n=[],d=n,c=!1;function m(){d===n&&(d=n.slice())}function l(){if(c)throw new Error("production"===process.env.NODE_ENV?G(3):"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return r}function p(e){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?G(4):"Expected the listener to be a function. Instead, received: '"+oe(e)+"'");if(c)throw new Error("production"===process.env.NODE_ENV?G(5):"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var t=!0;return m(),d.push(e),function(){if(t){if(c)throw new Error("production"===process.env.NODE_ENV?G(6):"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");t=!1,m();var i=d.indexOf(e);d.splice(i,1),n=null}}}function h(e){if(!ie(e))throw new Error("production"===process.env.NODE_ENV?G(7):"Actions must be plain objects. Instead, the actual type was: '"+oe(e)+"'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");if(void 0===e.type)throw new Error("production"===process.env.NODE_ENV?G(8):'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if(c)throw new Error("production"===process.env.NODE_ENV?G(9):"Reducers may not dispatch actions.");try{c=!0,r=a(r,e)}finally{c=!1}for(var t=n=d,i=0;i<t.length;i++){(0,t[i])()}return e}function u(e){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?G(10):"Expected the nextReducer to be a function. Instead, received: '"+oe(e));a=e,h({type:te.REPLACE})}function g(){var e,t=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error("production"===process.env.NODE_ENV?G(11):"Expected the observer to be an object. Instead, received: '"+oe(e)+"'");function i(){e.next&&e.next(l())}return i(),{unsubscribe:t(i)}}})[K]=function(){return this},e}return h({type:te.INIT}),(o={dispatch:h,subscribe:p,getState:l,replaceReducer:u})[K]=g,o}(((e=re,t)=>{switch(t.type){case"renderPage":return{...e,renderValue:t.page};case"levelValue":return{...e,levelValue:t.level};case"areaValue":return{...e,areaValue:t.area};case"mediaValue":return{...e,mediaValue:t.media};default:return e}})),de=e=>({type:"renderPage",page:e}),ce=e=>({type:"areaValue",area:e}),me=o`

.homeOne {
    position: relative;
    background: url(src/img/images/mbr-1920x1281.jpg);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.container {
    position: relative;
    top: 60%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    justify-items: center;
    /* border: 1px solid black; */
}

.home-var {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-column: 2/3;
}

.btn-home {
        position: relative;
        margin: 10px;
        padding: 0.4rem 0.8rem;
        width: 140px;
        border-color: transparent;
        border-radius: 100px;
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
        background-color: #d1f7ab;
        font-size: 1em;
        font-weight: 700;
        color: #52950e;
        transform: translateY(-0.125rem);
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
    .btn-home:hover {
        margin: 10px;
        background: #c9f69c;
        transform: translateY(-0.2rem);
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        background-color: #abf065;
    }

`;customElements.define("view-home",class extends J{static get properties(){return{}}constructor(){super()}goPage(e){e.preventDefault();let t=e.target.getAttribute("name");ne.dispatch(de(t))}static get styles(){return[me,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: #abf7f7;
                }
            `]}render(){return T`
            <div class="homeOne">
                <div class="container">
                    <div class="home-var">
                        <button class="btn-home" @click="${this.goPage}" name="about"> Conocenos </button>
                        <button class="btn-home" @click="${this.goPage}" name="news">  Noticias </button>
                        <button class="btn-home" @click="${this.goPage}" name="projects"> Proyectos </button>
                        <button class="btn-home" @click="${this.goPage}" name="contact">  Contacto </button>
                    </div>
                </div>
            </div>
        `}});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const le=e=>t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe((()=>this.stateChanged(e.getState()))),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}},pe=o`
    .navTreeVI {
        position: relative;
        display: flex;
        justify-content: center;
        margin-top: 13px;
        margin-inline: 30%;
    }
    .navTree a {
        margin: 0;
    }
    span {
        width: 4rem;
    
        padding: 1rem;
        display: flex;
      
        justify-content: center;
  
        align-items: center;
        color: #00aeee;
    }

    span:hover {
        color: white;
    }
    
    .title h2 {
        position: relative;
        box-sizing: border-box;
        padding: 3%;
        margin: 10px 0;
        color: #00aeee;
        text-align: center;
        font-size: calc( 1.7874999999999999rem + (2.25 - 1.7874999999999999) * ((100vw - 20rem) / (48 - 20)));
    }
`;class he extends(le(ne)(J)){static get properties(){return{siteTree:{type:Object},renderValue:{type:String},leveli:{type:Number},areai:{type:Number}}}constructor(){super(),this.siteTree={},this.leveli=0,this.areai=0}stateChanged(e){this.siteTree=e.siteTree,this.renderValue=e.renderValue,this.leveli=e.levelValue,this.areai=e.areaValue}idPage(){var e=[];if("project1"==this.renderValue)return[3,3];if("project1Lv"==this.renderValue)return[3,3];for(var t=0;t<this.siteTree.length;t++)if(this.siteTree[t].name==this.renderValue)return e.push(t-1,t+1),e}downPage(e){e.preventDefault();let t=this.siteTree.length,i=this.areai;"project1Lv"==this.renderValue?"0"==i?ne.dispatch(ce("2")):(i--,ne.dispatch(ce(i))):this.idPage()[0]<0?ne.dispatch(de(this.siteTree[t].name)):ne.dispatch(de(this.siteTree[this.idPage()[0]].name))}upPage(e){e.preventDefault();let t=this.siteTree.length,i=this.areai;"project1Lv"==this.renderValue?2==i?ne.dispatch(ce("0")):(i++,ne.dispatch(ce(i))):this.idPage()[1]>=t?ne.dispatch(de(this.siteTree[0].name)):ne.dispatch(de(this.siteTree[this.idPage()[1]].name))}goPage(e){if(e.preventDefault(),"project1"==this.renderValue)ne.dispatch(de("projects"));else if("project1Lv"==this.renderValue)ne.dispatch(de("project1"));else{let t=e.target.getAttribute("name");ne.dispatch(de(t))}}titlePagei(){if("project1"==this.renderValue)return"D.B.A.E.";if("project1Lv"==this.renderValue)return this.siteTree[3].projects[0].levels[this.leveli].name+"-"+this.siteTree[3].projects[0].levels[this.leveli].areas[this.areai].aNames;for(var e=0;e<this.siteTree.length;e++)if(this.siteTree[e].name==this.renderValue)return this.siteTree[e].title}static get styles(){return[pe,o`
                :host {
                    position: relative;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: transparent;
                }
            `]}render(){return T`
            <div class="navTreeVI">
                <a href="#" @click="${this.downPage}">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M19.4 1.4L8.8 12l10.6 10.6L18 24 6 12 18 0z">
                            </path>
                        </svg>
                    </span>
                </a>
                <a href="#" @click="${this.goPage}" name="home">
                    <span name="home">
                        <svg name="home" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                            <path name="home"
                                d="M2 13v16c0 0.524 0.476 1 1 1h8c0.524 0 1-0.476 1-1v-7c0-2.232 1.766-4 4-4s4 1.768 4 4v7c0 0.524 0.476 1 1 1h8c0.524 0 1-0.476 1-1v-16c0-1.32-2-1.328-2 0v15h-6v-6c0-3.304-2.694-6-6-6s-6 2.696-6 6v6h-6v-15c0-1.34-2-1.24-2 0zM12.504 3.004l-11.99 7.086c-1.146 0.68-0.084 2.412 1 1.772l11.986-7.082c1.956-1.154 3.084-1.13 5 0l11.986 7.086c1.056 0.626 2.168-1.080 1-1.77l-11.99-7.092c-2.3-1.36-4.806-1.292-6.992 0z">
                            </path>
                        </svg> 
                    </span>       
                </a>
                <a href="#" @click="${this.upPage}">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M4.6 22.6L15.2 12 4.6 1.4 6 0l12 12L6 24z">
                            </path>
                        </svg>
                    </span>
                </a>
            </div>
            <div class="title">
                <h2>${this.titlePagei()}</h2>
            </div>   
            `}}customElements.define("ttech-nav",he);const ue=o`
    a {
        text-decoration: none;
    }

    .mediainfovi {
        position: relative;
        box-sizing: border-box;
        padding: 3%;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
        .descript h3 {
            text-align: center;
        }
        .descript p {
            text-align: justify;
        }
        .btn-download {
            position: relative;
            margin: 10px 0;
            padding: 0.4rem 0.8rem;
            width: 140px;
            border-color: transparent;
            border-radius: 100px;
            box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
            line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
            background-color: #d1f7ab;
            font-size: 1em;
            font-weight: 700;
            color: #52950e;
            transform: translateY(-0.125rem);
            transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .btn-download:hover {
            margin: 10px 0;
            background: #c9f69c;
            transform: translateY(-0.2rem);
            box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
            background-color: #abf065;
        }

        .media {
            margin-top: 5%;
            height: 50vw;
            border-radius: 10px;
            box-shadow: inset 0 0 0 1px #ebebf0,0 15px 30px 0 rgba(0,0,0,0.15);
            overflow: hidden;
        }

       

/* Responsive Web Design */
    [class*="col-"] {
            width: 100%;
        }

    @media(min-width: 720px) {
        /* For desktop: */
        .title {
            font-size: 2.25em;
        }
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}

        .row-3 {height: 30vw }
    }

`;customElements.define("ttech-mediainfovi",class extends J{static get properties(){return{proptyName:{type:String}}}constructor(){super(),this.proptyName="pname"}goToTab(e){e.preventDefault(),window.open("https://drive.google.com/file/d/1JdwIsWmzxUYXVnve-wU1TE2r3U1_CQYa/view?usp=sharing","_blank").focus()}static get styles(){return[ue,o`
                :host {
                    position: relative;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: transparent;
                }
            `]}render(){return T`
        <div class="mediainfovi">
            <div class="row">
                <div class="descript col-5">
                    <h3>QUIENES SOMOS</h3>
                    <h4>"Somos una organización sin fines de lucro, cuyo objeto social es la Inclusión Social de Personas con Discapacidad y Personas Sordas..."</h4>
                    <p style="text-align: right;">Julio Pizarro Metzdorff</p>
                    
                    <button class="btn-download" @click="${this.goToTab}">
                        Gestion 2020
                    </button>
                </div>
                <div class="media col-5 row-3">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-lT4HzqDyiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        `}});const ge=o`

.perscardvi {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    padding: 3%;
}

    .cards {
        margin: 10px 0;
        background: #d1f7ab;
        width: 250px;
        text-align: center;
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px #ebebf0,0 15px 30px 0 rgba(0,0,0,0.15);
    }
    .imgTeam{
        margin: 40px;

    }
/* Responsive Web Design */
    [class*="col-"] {
            width: 100%;
        }

    @media(min-width: 720px) {
        /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
`;customElements.define("ttech-perscardvi",class extends J{static get styles(){return[ge,o`
                :host {
                    position: relative;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: transparent;
                }
            `]}render(){return T`
        <div class="perscardvi">
            <div class="cards">
                <img class="imgTeam" decoding="async" alt="" src="src/img/filsaTeam/jPizarro.webp">
                <h5>Director<br>Ejecutivo</h5>
                <h4>Julio Pizarro Metzdorff</h4>
                
            </div>
            <div class="cards">
                <img class="imgTeam" decoding="async" alt="" src="src/img/filsaTeam/kTrigo.webp">
                <h5>Directora de Administración y Finanzas</h5>
                <h4>Katerina Trigo Garay</h4>
                
            </div>          
            <div class="cards">
                <img class="imgTeam" decoding="async" alt="" src="src/img/filsaTeam/jCarvajal.webp">
                <h5>Director de Cultura y Comunidad Sorda</h5>
                <h4>Jorge Carvajal Jofré</h4>
                
            </div> 
            <div class="cards">
                <img class="imgTeam" decoding="async" alt="" src="src/img/filsaTeam/xCisternas.webp">
                <h5>Directora<br>Regional </h5>
                <h4>Ximena Cisternas Robles</h4>
                <p>Antofagasta</p>
            </div>  
        </div>
        `}});const be=o`
.tabtextvi {
    display: block;
    padding-bottom: 2rem;
}

.row-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    padding: 3%;
}

    .btn-home {
            position: relative;
            margin: 10px;
            padding: 0.4rem 0.8rem;
            width: 140px;
            border: 2px solid #abf7f7;
            border-radius: 100px;
            box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
            line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
            font-size: 1em;
            font-weight: 700;
            color: #000000;
            transform: translateY(-0.125rem);
            transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
        .btn-home:hover {
            margin: 10px;
            /* background: #c9f69c; */
            transform: translateY(-0.2rem);
            box-shadow: 0 15px 15px -15px rgba(0, 0, 0, 0.15);
        }

.rendered {
    position: relative;  
    display: block;
    margin: 0 10%;
    padding: 1rem;
    height:auto;
    border: 2px solid #abf7f7;
    background: #d1f7ab;
    border-radius: 8px;
    text-align: justify;
    }
/* Responsive Web Design */
    [class*="col-"] {
            width: 100%;
        }

    @media(min-width: 720px) {
        .rendered {
            height: 250px;
        }
        /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
`;customElements.define("ttech-tabtextvi",class extends J{static get properties(){return{text:{type:String},btColor1:{type:String},btColor2:{type:String},btColor3:{type:String}}}constructor(){super(),this.text="value",this.btColor1="#d1abf7",this.btColor2="#d1abf7",this.btColor3="#c9f69c"}goText(e){e.preventDefault();let t=e.target.getAttribute("name");this.text=t,"mision"==t?(this.btColor1="#c9f69c",this.btColor2="#d1abf7",this.btColor3="#d1abf7"):"vision"==t?(this.btColor1="#d1abf7",this.btColor2="#c9f69c",this.btColor3="#d1abf7"):(this.btColor1="#d1abf7",this.btColor2="#d1abf7",this.btColor3="#c9f69c")}static get styles(){return[be,o`
                :host {
                    position: relative;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: transparent;
                }
            `]}render(){return T`
        <div class="tabtextvi">
            <div class="row-1">
                <button id="btn-1" class="btn-home" @click="${this.goText}" name="mision" style="background-color: ${this.btColor1}"> Mision </button>
                <button id="btn-2" class="btn-home" @click="${this.goText}" name="vision" style="background-color: ${this.btColor2}"> Vision </button>
                <button id="btn-3" class="btn-home" @click="${this.goText}" name="value" style="background-color: ${this.btColor3}"> Valores </button>   
            </div>
            <div class="rendered">
                ${"mision"==this.text?T`<p>Fundación de Facilitadores e Intérpretes de Lengua de Señas de Atacama, Fundación FILSA. Es una institución sin fines de lucro, cuya misión es promover el derecho al acceso a la información y comunicación de, para y con las Personas Sordas, Sordociegas e Hipoacúsicas, con el fin de obtener plena inclusión social, contribuyendo a eliminar cualquier barrera lingüístico-cultural, a través de la articulación con el sector público y privado.</p>`:""}

                ${"vision"==this.text?T`<p>Nuestra visión es ser referentes en el trabajo colaborativo con la comunidad Sorda, desarrollando altos estándares de ética profesional y de vínculo con pertinencia territorial.</p>`:""}
                ${"value"==this.text?T`<p>
                        <b>Pluralismo:</b> Fundación FILSA acepta la diversidad de creencias, sensibilidades y visiones del mundo en la sociedad y lo hace en base al respeto y el diálogo.
                        <br><br><b>Transversalidad:</b> Nuestro quehacer tiene por bien superior el acceso universal a la información y comunicación.
                        <br><br><b>Neutralidad:</b> Fundación FILSA no impone perspectiva alguna al momento de trabajar y hacer accesible la información. Tampoco sus miembros imponen gustos o preferencias personales en su labor.
                        <br><br><b>Confidencialidad:</b> El trabajo de nuestra Fundación se basa en el ejercicio ético de la confidencialidad, procurando el manejo adecuado de la información.
                        <br><br><b>Fidelidad:</b> Propendemos el mejoramiento continuo para ser fieles a la información que deba trasladarse de una lengua a otra
                    </p>`:""}
            </div> 
        </div>
        `}});const we=o`

.pjcardvi {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    padding: 3%;
}

    .cards {
        margin: 10px 0;
        background: #d1f7ab;
        width: 300px;
        text-align: center;
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px #ebebf0,0 15px 30px 0 rgba(0,0,0,0.15);
    }
    .imgPj{
        margin-top: 35px;
    }
    .cards h3 {
        margin: 5% auto;
    }
    .cards p {
        margin: 5% auto;
        margin-bottom: 5%;
        font-size: 80%;
    }
    .btn-home {
        position: relative;
        margin: 10px;
        margin-bottom: 20px;
        padding: 0.4rem 0.8rem;
        width: 140px;
        border-color: transparent;
        border-radius: 100px;
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
        background-color: #d1abf7;
        font-size: 1em;
        font-weight: 700;
        color: #52950e;
        transform: translateY(-0.125rem);
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
    .btn-home:hover {
        
        background: #c9f69c;
        transform: translateY(-0.2rem);
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        background-color: #abf065;
    }

/* Responsive Web Design */
    [class*="col-"] {
            width: 75%;
        }

    @media(min-width: 720px) {
        /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
`;class ve extends(le(ne)(J)){static get properties(){return{siteTree:{type:Object},renderValue:{type:String},pjPs:{type:Number}}}constructor(){super(),this.siteTree={},this.pjPs=0}stateChanged(e){this.siteTree=e.siteTree,this.renderValue=e.renderValue}goPage(e){e.preventDefault();let t=e.target.getAttribute("name");ne.dispatch(de(t))}static get styles(){return[we,o`
                :host {
                    position: relative;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: transparent;
                }
            `]}render(){return T`
        <div class="pjcardvi">
            <div class="cards">
                <img class="imgPj col-9" decoding="async" alt="" src="src/img/pjts/dbae/mbr-1920x1357.jpg">
                <h3>${this.siteTree[3].projects[this.pjPs].name}</h3>
                <p class="col-9">${this.siteTree[3].projects[this.pjPs].description}</p>
                <button class="btn-home" @click="${this.goPage}" name="project1"> Contenidos </button>
            </div>
        </div>
        `}}customElements.define("ttech-pjcardvi",ve);const fe=o`

    .cards {
        margin: 05px;
        background: #d1f7ab;
        width: 250px;
        text-align: center;
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px #ebebf0,0 15px 30px 0 rgba(0,0,0,0.15);
    }
    .imgPj{
        margin-top: 35px;
    }
    .cards h3 {
        margin: 5% auto;
    }
    .cards p {
        margin: 5% auto;
        margin-bottom: 5%;
        font-size: 75%;
    }
    .btn-home {
        position: relative;
        margin: 10px;
        margin-bottom: 20px;
        padding: 0.4rem 0.8rem;
        width: 140px;
        border-color: transparent;
        border-radius: 100px;
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
        background-color: #d1abf7;
        font-size: 1em;
        font-weight: 700;
        color: #52950e;
        transform: translateY(-0.125rem);
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
    .btn-home:hover {
        
        background: #c9f69c;
        transform: translateY(-0.2rem);
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        background-color: #abf065;
    }
    .pClosed {
            display: none;
        }

     .pMedia{
        position: fixed;
        top: 30vh;
        left: 10vw;
        height: 50vh;
        width: 80vw;
        display: flex;
        justify-content:center;
        align-content: center;
        z-index:11;
    }
    .pMedia iframe{
        border-radius:10px;
        box-shadow: inset 0 0 0 1px #ebebf0,0 15px 30px 0 rgba(0,0,0,0.15);
    }
    .cMedia {
        display: block;
        background-image:url(src/img/pjts/dbae/mbr-1920x1357.jpg);
        background-attachment: fixed;
        background-size: cover;
        position: fixed;
        top:0;
        left:0;
        height: 100vh;
        width: 100vw;
        z-index:10;
    }

/* Responsive Web Design */
    [class*="col-"] {
            width: 75%;
        }

    @media(min-width: 720px) {
        /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
`;customElements.define("ttech-mdcardvi",class extends J{static get properties(){return{imagei:{tipe:String},titlei:{type:String},linki:{type:String},opened:{type:Boolean}}}constructor(){super(),this.linki="https://www.youtube.com/embed/-lT4HzqDyiI",this.titlei="TITLE",this.imagei="src/img/pjts/dbae/mbr-1920x1357.jpg",this.opened=0}goToMedia(e){e.preventDefault(),0==this.opened?this.opened=1:this.opened=0}static get styles(){return[fe,o`
                :host {
                    position: relative;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: transparent;
                }
            `]}render(){return T`
        <div class="mdcardvi">
            <div class="cards">
                <img class="imgPj col-9" decoding="async" alt="" src=${this.imagei}>
                <p>${this.titlei}</p>
                <button class="btn-home" @click="${this.goToMedia}"> contenido </button>
            </div>
        </div>
        <div>
        ${"1"==this.opened?T`
                <div class="${this.opened?"pMedia":"pClosed"}">
                    <iframe width="100%" height="100%" src="${this.linki}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="${this.opened?"cMedia":"pClosed"}" @click="${this.goToMedia}">
                </div>`:""}
        </div>
        `}});const xe=o`

    .aboutOne {
        position: relative;
        display: block;
    }

`;customElements.define("view-about",class extends J{static get properties(){return{proptyName:{type:String}}}constructor(){super(),this.proptyName="pname"}static get styles(){return[xe,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: #abf7f7;
                    overflow-y: auto;
                }
            `]}render(){return T`
            <div class="aboutOne">
                <ttech-nav></ttech-nav>
                <ttech-mediainfovi style="background: #abf7f7;"></ttech-mediainfovi>
                <ttech-perscardvi style="background: #abf7f7;"></ttech-perscardvi>
                <ttech-tabtextvi style="background: #abf7f7;"></ttech-tabtextvi>
            </div>
        `}});const ye=o`
.newOne {
        position: relative;
        display: block;
        background: #abf7f7;
        padding-bottom: 2rem;
    }
    
.title {
    position: relative;
    box-sizing: border-box;
    padding: 3%;
    margin: auto 0;
    color: #00aeee;
    text-align: center;
    font-size: calc( 1.7874999999999999rem + (2.25 - 1.7874999999999999) * ((100vw - 20rem) / (48 - 20)));
}

.faceNews {
    display: grid;
    justify-content: space-around;
}

.frame1 {
    display: none;
}

iframe {
    border:none;
    overflow:hidden;
    display:block;
    margin:auto;
    width: 320px;
    height: 500px;
}
@media(min-width: 720px) {
    .frame2 {
        display: none;
    }
    .frame1 {
        display: block;
    }

    iframe {
        width: 500px;
    }
}


`;customElements.define("view-news",class extends J{static get properties(){return{proptyName:{type:String}}}constructor(){super(),this.proptyName="pname"}static get styles(){return[ye,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: #abf7f7;
                    overflow-y: auto;
                }
            `]}render(){return T`
            <div class="newOne">
                <ttech-nav></ttech-nav>
                <div class="faceNews">
                    <iframe class="frame1" scrolling="no" allowtransparency="true" allow="encrypted-media" src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Noticias-Fundaci%C3%B3n-FILSA-100292809125580&amp;tabs=timeline,events,messages&amp;width=720&amp;height=620&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;hide_cta=false&amp;appId=2773163886047820" frameborder="0"></iframe>
                    <iframe class="frame2" scrolling="no" allowtransparency="true" allow="encrypted-media" src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Noticias-Fundaci%C3%B3n-FILSA-100292809125580&amp;tabs=timeline,events,messages&amp;width=320&amp;height=620&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;hide_cta=false&amp;appId=2773163886047820" frameborder="0"></iframe>
                </div>
                
            </div>
            
        `}});const je=o`




`;customElements.define("view-projects",class extends J{static get properties(){return{proptyName:{type:String},pjPs:{type:Number}}}constructor(){super(),this.proptyName="pname",this.pjPs=0}static get styles(){return[je,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: #abf7f7;
                    overflow-y: auto;
                }
            `]}render(){return T`
            <div class="homeOne">
                <ttech-nav></ttech-nav>
                <ttech-pjcardvi pjPs="${this.pjPs}" style="background: #abf7f7"></ttech-pjcardvi>
            </div>
        `}});const $e=o`
.pjOne {
    background-image:url(src/img/pjts/dbae/mbr-1920x1357.jpg);
    background-attachment: fixed;
    background-size: cover;
}
.title{
    text-align: center;
    background: #abf7f7;
    margin: 30px 5%;
    margin-top: 50px;
    padding: 3px;
    border-radius: 5px;
}
.menu-var {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.btn-home {
        position: relative;
        margin: 10px;
        padding: 0.4rem 0.8rem;
        width: 140px;
        border-color: transparent;
        border-radius: 100px;
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
        background-color: #d1f7ab;
        font-size: 1em;
        font-weight: 700;
        color: #52950e;
        transform: translateY(-0.125rem);
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
    .btn-home:hover {
        margin: 10px;
        background: #c9f69c;
        transform: translateY(-0.2rem);
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        background-color: #abf065;
    }
`;customElements.define("view-project1",class extends J{static get properties(){return{proptyName:{type:String}}}constructor(){super(),this.proptyName="pname"}goPage(e){e.preventDefault();let t=e.target.getAttribute("name"),i=e.target.getAttribute("leveli"),s=e.target.getAttribute("areai");ne.dispatch({type:"levelValue",level:i}),ne.dispatch(ce(s)),ne.dispatch(de(t))}static get styles(){return[$e,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    overflow-y: auto;
                    
                }
            `]}render(){return T`
            <div class="pjOne"> 
                <!-- nav to project -->
                <ttech-nav></ttech-nav>
                    <div class="leveli">
                        <div class="title">
                            <h3>1° Básico</h3>
                        </div>
                        <div class="menu-var">
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=0 areai=0> Ciencias </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=0 areai=1> Lenguaje </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=0 areai=2> Matematicas </button>
                        </div>
                    </div>
                    <div class="leveli">
                        <div class="title">
                            <h3>2° Básico</h3>
                        </div>
                        <div class="menu-var">
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=1 areai=0> Ciencias </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=1 areai=1> Lenguaje </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=1 areai=2> Matematicas </button>
                        </div>
                    </div>
                    <div class="leveli">
                        <div class="title">
                            <h3>3° Básico</h3>
                        </div>
                        <div class="menu-var">
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=2 areai=0> Ciencias </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=2 areai=1> Lenguaje </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=2 areai=2> Matematicas </button>
                        </div>
                    </div>
                    <div class="leveli">
                        <div class="title">
                            <h3>4° Básico</h3>
                        </div>
                        <div class="menu-var">
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=3 areai=0> Ciencias </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=3 areai=1> Lenguaje </button>
                            <button class="btn-home" @click="${this.goPage}" name="project1Lv" leveli=3 areai=2> Matematicas </button>
                        </div>
                    </div>
            </div>
        `}});const Ce=o`
.pjOne {
    background-image:url(src/img/pjts/dbae/mbr-1920x1357.jpg);
    background-attachment: fixed;
    background-size: cover;
}
.pjOne h3 {
    text-align: center;
    background: #abf7f7;
    margin: 30px 5%;
    margin-top: 50px;
    padding: 3px;
    border-radius: 5px;

}

.levels {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.btn-home {
        position: relative;
        margin: 10px;
        padding: 0.4rem 0.8rem;
        width: 140px;
        border-color: transparent;
        border-radius: 100px;
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
        background-color: #d1f7ab;
        font-size: 1em;
        font-weight: 700;
        color: #52950e;
        transform: translateY(-0.125rem);
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
    .btn-home:hover {
        margin: 10px;
        background: #c9f69c;
        transform: translateY(-0.2rem);
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        background-color: #abf065;
    }
    .media-view {
        position: fixed;
    }
    .mediaClosed{
        display: none;
    }
`;class _e extends(le(ne)(J)){static get properties(){return{siteTree:{type:Object},leveli:{type:Number},areai:{type:Number},contIndex:{type:Number},aux:{type:Number},title:{type:String},image:{tipe:String},link:{type:String},media:{type:Object}}}constructor(){super(),this.leveli=0,this.areai=0,this.contIndex=0,this.aux=0,this.title="test",this.image="src/img/pjts/dbae/mbr-1920x1357.jpg",this.link="https://www.youtube.com/embed/-lT4HzqDyiI",this.media=[]}stateChanged(e){this.siteTree=e.siteTree,this.leveli=e.levelValue,this.areai=e.areaValue}medias(){if(console.log(this.contIndex),this.contIndex<this.siteTree[3].projects[0].levels[this.leveli].areas[this.areai].contents.length)return this.image=this.siteTree[3].projects[0].levels[this.leveli].areas[this.areai].contents[this.contIndex].img,this.title=this.siteTree[3].projects[0].levels[this.leveli].areas[this.areai].contents[this.contIndex].title,this.link=this.siteTree[3].projects[0].levels[this.leveli].areas[this.areai].contents[this.contIndex].iframe,T`
                
                <ttech-mdcardvi titlei=${this.title} imagei=${this.image} linki=${this.link}></ttech-mdcardvi>
            `}indexCont(){20==this.contIndex?this.contIndex=0:this.contIndex++}static get styles(){return[Ce,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    overflow-y: auto;
                }
            `]}render(){return T`
             
            <div class="pjOne">
                <!-- nav to project -->
                <ttech-nav></ttech-nav>
                
                <div class="levels">
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>  
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div> 
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>  
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div> 
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>  
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div> 
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div>
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}                 
                    </div>  
                    <div>
                        ${this.medias()}
                        ${this.indexCont()}
                    </div> 
                  
                </div>

            </div>
        `}}customElements.define("view-project1lv",_e);const ke=o`

    .form-1 {
        display: none;
    }
    .form-2 {
        display: flex;
        justify-content: space-around;
    }

@media(min-width: 720px) {
    .form-2 {
        display: none;
    }
    .form-1 {
        display: flex;
        justify-content: space-around;
    }
}


`;customElements.define("view-contact",class extends J{static get properties(){return{proptyName:{type:String}}}constructor(){super(),this.proptyName="pname"}static get styles(){return[ke,o`
                :host {
                    position: absolute;
                    display: block;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background: #abf7f7;
                    overflow-y: auto;
                }
            `]}render(){return T`
            <div class="contactOne">
                <ttech-nav></ttech-nav>
            </div>
            <div class="form-1">
                <iframe scrolling="no" src="https://ttechfilsa.github.io/contactFormulary" width="640" height="475" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>
            <div class="form-2">
                <iframe scrolling="no" src="https://ttechfilsa.github.io/contactFormulary" width="315" height="475" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>    
        `}});customElements.define("app-render",class extends J{static get properties(){return{selected:{type:String}}}constructor(){super(),this.selected="home"}static get styles(){return o`
            :host {
                display: block;
                position: absolute;
                height: 100%;
                width: 100%;
            }
            .rendered {
                position: absolute;
                height: 100%;
                width: 100%;
                
            }
         `}render(){return T`
        
        <div class="rendered">
            ${"home"==this.selected?T`<view-home></view-home>`:""}

            ${"about"==this.selected?T`<view-about></view-about>`:""}
            ${"news"==this.selected?T`<view-news></view-news>`:""}
            ${"projects"==this.selected?T`<view-projects></view-projects>`:""}
            ${"project1"==this.selected?T`<view-project1></view-project1>`:""}
                ${"project1Lv"==this.selected?T`<view-project1lv></view-project1lv>`:""}

            ${"contact"==this.selected?T`<view-contact></view-contact>`:""}
        </div>
        `}});const Ee=o`
    *{
        margin: 0;
        padding: 0;
    }

    .container {
        display: block;
        position: relative;
        height: 100%;
        width: 100%;
    }

    main {
        display: block;
        position: fixed;
        margin: 0;
        padding: 0;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 50;
        
    }
    
    .menu-btn {
        cursor: pointer;
        display: flex;
        position: fixed;
        top: 30px;
        right: 15px;
        width: 30px;
        height: 16px;
        border-right: 5px;
        border-color: transparent;
        background: none;
        z-index: 100;
    }

        .menu-btn span:nth-child(0) {
            top: 0px;
        }
        .menu-btn span:nth-child(1) {
            top: 4px;
        }
        .menu-btn span:nth-child(2) {
            top: 8px;
        }
        .menu-btn span:nth-child(3) {
            top: 12px;
        }

        .hamburger {
            position: relative;
            box-sizing: border-box;
            right: 0;
            width: 30px;
            height: 3px;
            border-right: 5px;
            background-color: #00aeee;
            position: absolute;
        }
    
    .mainClosed {
        display: block;
        position: fixed;
        top: 05px;
        left: 05px;
        width: auto;
        height: auto;
        padding: 30px;
        font-size: 1px;
        background: #00aeee;
        opacity: .95;
        transition: all .7s;
        transform: translateX(-3000px);
        z-index: 100;
    }
    .nav-main {
        display: block;
        position: fixed;
        z-index: 10;
        top: 05px;
        left: 05px;
        width: auto;
        height: auto;
        padding: 30px;
        font-size: 22px;
        background: #00aeee;
        border-radius: 20px;
        opacity: .95;
        transition: all .9s;
        z-index: 100;
    }
        .menu-cls {
            cursor: pointer;
            display: flex;
            position: absolute;
            z-index: 1;
            top: 15px;
            right: 30px;
            width: 30px;
            height: 30px;
            background-color: transparent;
            border: none;
        }

            .menu-cls span:nth-child(2) {
                transform: rotate(-45deg);
            }
            .menu-cls span:nth-child(1) {
                transform: rotate(45deg);
            }

            .mClose {
                position: absolute;
                box-sizing: border-box;
                margin: 0px;
                top: 15px;
                right: 0px;
                width: 30px;
                height: 3px;
              
                background-color: #ffffff;
                
            }
    
        .nav-brand {               
            width: 70px;
            margin-left: 40px;
            margin-bottom: 10px;
            margin-top: 10px;

        }
    
        ul {
            list-style: none;
        }
        
        a {
            color: #ffffff;
            text-decoration: none;
        }

        .nav-main ul li a:hover {
            border-bottom: 3px solid #ffffff;
        }

    .nav-btn {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        margin-top: 30px;

    }
    .btn-prj {
        position: relative;
        margin: 0.4rem 0.9rem;
        padding: 0.4rem 0.8rem;
        border-color: #d1f7ab;
        border-radius: 100px;
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
        background-color: #d1f7ab;
        font-size: 0.6em;
        font-weight: 700;
        color: #52950e;
        transform: translateY(-0.125rem);
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }   
    .btn-prj:hover {
        margin: 0.35rem 0.8rem;
        margin-bottom: 0.45rem;
        background: #c9f69c;
        transform: translateY(-0.125rem);
        box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
        color: #52950e;
        background-color: #abf065;
        border-color: #abf065;
    }

    #scrollToTopButton {
    background-color: #abf7f7;
    border-radius: 50%;
    }

    #scrollToTopButton {
        position: fixed;
        bottom: 25px;
        right: 25px;
        opacity: .4;
        z-index: 5000;
        font-size: 32px;
        height: 60px;
        width: 60px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        opacity: 0;
    }
`;class Ae extends(le(ne)(J)){static get properties(){return{renderValue:{type:String},mSelected:{type:String},nSelected:{type:String},opened:{type:Boolean}}}constructor(){super(),this.mSelected="Inicio",this.nSelected="home"}stateChanged(e){this.renderValue=e.renderValue,console.log(e.renderValue,e.levelValue,e.areaValue)}goPage(e){e.preventDefault();let t=e.target.getAttribute("name");ne.dispatch(de(t))}mgMenu(e){e.preventDefault(),1==this.opened?this.opened=!1:this.opened=!0}mgMenuClose(e){e.preventDefault(),1==this.opened&&(this.opened=!1)}static get styles(){return[Ee,o`
                :host {
                    display: block;
                }
            `]}render(){return T`
            <div class="container">
                <button class="menu-btn" @click="${this.mgMenu}">
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                </button>
                <nav class="${this.opened?"nav-main":"mainClosed"}">
                    <button class="menu-cls" @click="${this.mgMenu}">
                        <span class="mClose"></span>
                        <span class="mClose"></span>
                    </button>
                    <img class="nav-brand" decoding="async" alt="" src="/src/img/logo/logo.webp">
                    <ul class="nav-menu">
                        <li>
                            <a href="#" @click="${this.goPage}" name="home">
                                <span name="home">
                                    <svg name="home" version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"
                                        fill="currentColor">
                                        <path name="home"
                                            d="M2 13v16c0 0.524 0.476 1 1 1h8c0.524 0 1-0.476 1-1v-7c0-2.232 1.766-4 4-4s4 1.768 4 4v7c0 0.524 0.476 1 1 1h8c0.524 0 1-0.476 1-1v-16c0-1.32-2-1.328-2 0v15h-6v-6c0-3.304-2.694-6-6-6s-6 2.696-6 6v6h-6v-15c0-1.34-2-1.24-2 0zM12.504 3.004l-11.99 7.086c-1.146 0.68-0.084 2.412 1 1.772l11.986-7.082c1.956-1.154 3.084-1.13 5 0l11.986 7.086c1.056 0.626 2.168-1.080 1-1.77l-11.99-7.092c-2.3-1.36-4.806-1.292-6.992 0z">
                                        </path>
                                    </svg>
                                </span>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="${this.goPage}" name="about">
                                <span name="about">
                                    <svg name="about" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16"
                                        height="16">
                                        <path name="about"
                                            d="M19.7 11.7c.8-.8 1.3-2 1.3-3.2C21 6 19 4 16.5 4S12 6 12 8.5c-.4-.3-.9-.6-1.4-.8.8-.8 1.4-2 1.4-3.2C12 2 10 0 7.5 0S3 2 3 4.5c0 1.3.5 2.4 1.3 3.2C1.8 8.9 0 11.5 0 14.5V20h9v4h15v-5.5c0-3-1.8-5.6-4.3-6.8zM16.5 6C17.9 6 19 7.1 19 8.5S17.9 11 16.5 11 14 9.9 14 8.5 15.1 6 16.5 6zM5 4.5C5 3.1 6.1 2 7.5 2S10 3.1 10 4.5 8.9 7 7.5 7 5 5.9 5 4.5zm-3 10C2 11.5 4.5 9 7.5 9c2.1 0 4.1 1.3 5 3.2-2 1.2-3.3 3.4-3.5 5.8H2v-3.5zM22 22H11v-3.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5V22z">
                                        </path>
                                    </svg>
                                </span>
                                Conocenos
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="${this.goPage}" name="news">
                                <span name="news">
                                    <svg name="news" width="16" height="16" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor">>
                                        <path name="news"
                                            d="M1024 512h-384v384h384v-384zm128 640v128h-640v-128h640zm0-768v640h-640v-640h640zm640 768v128h-512v-128h512zm0-256v128h-512v-128h512zm0-256v128h-512v-128h512zm0-256v128h-512v-128h512zm-1536 960v-960h-128v960q0 26 19 45t45 19 45-19 19-45zm1664 0v-1088h-1536v1088q0 33-11 64h1483q26 0 45-19t19-45zm128-1216v1216q0 80-56 136t-136 56h-1664q-80 0-136-56t-56-136v-1088h256v-128h1792z">
                                        </path>
                                    </svg>
                                </span>
                                Noticias
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="${this.goPage}" name="projects">
                                <span  name="projects">
                                    <svg name="projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16"
                                        height="16">
                                        <path name="projects"
                                            d="M17 15.6V13c0-.3.5-7.6-4.3-12.4L12 0l-.7.7C6.5 5.5 7 12.8 7 13v2.7L3 23l1.8 1L7 20v2h4v2h2v-2h4v-2.1l2.2 4.1 1.8-1.1-4-7.3zM15 13v7h-2v-4h-2v4H9v-7.1c0-.1-.4-6 3-10 3.3 4 3 10 3 10.1zm-3-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z">
                                        </path>
                                    </svg>
                                </span>
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="${this.goPage}" name="contact">
                                <span name="contact">
                                    <svg name="contact" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16"
                                        height="16">
                                        <path name="contact"
                                            d="M0 4v16h24V4H0zm19.8 2L12 10.7 4.2 6h15.6zM2 18V7l10 6 10-6v11H2z"></path>
                                    </svg>
                                </span>
                                Contactanos
                            </a>
                        </li>
                    </ul>
                    <div class="nav-btn">
                        <a class="btn-prj" href="#" @click="${this.goPage}" name="project1">DBAE</a>
                    </div>
                </nav>
                <main @click="${this.mgMenuClose}">
                    
                    <!-- <app-render class="contRender" id="appRender"></app-render> -->
                    <app-render class="contRender" selected=${this.renderValue}></app-render>
                </main>
            </div>
        `}}customElements.define("app-call",Ae);
