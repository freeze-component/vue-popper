!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=o(16),n=i(r),p=o(5),s=i(p);new n["default"]({el:"body",components:{App:s["default"]}})},function(t,e,o){var i,r;i=o(11),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e){t.exports='<h1 style="margin-bottom: 100px">vue-popper: popover demo</h1> <vue-popover :placement.sync=placement :visible=popoverVisible> <div>这里是会弹出来的东西 🌚</div> <button @click="placement = \'left\'">左</button> <button @click="placement = \'right\'">右</button> <button @click="placement = \'top\'">上</button> <button @click="placement = \'bottom\'">下</button> <div slot=content> <button @click="popoverVisible = !popoverVisible">点击出现弹出框</button> </div> </vue-popover> <h1 style="margin: 100px 0">vue-popper: tooltip demo</h1> <vue-tooltip placement=top content=文字提示在上面 :visible=tooltipVisible> <button @click="tooltipVisible = !tooltipVisible">点击出现文字提示</button> </vue-tooltip> <vue-tooltip content=bottom :visible=tooltipVisible2> <button @click="tooltipVisible2 = !tooltipVisible2">点击出现文字提示 bottom</button> </vue-tooltip>'},function(t,e){t.exports='<span _v-505bc52a=""> <div class=popper v-el:popper="" v-show=visible _v-505bc52a=""> <span v-text=content _v-505bc52a=""></span> </div> <div class=rel v-el:reference="" _v-505bc52a=""> <slot _v-505bc52a=""></slot> </div> </span>'},function(t,e){t.exports='<div _v-9986e9e6=""> <div class=popper v-el:popper="" v-show=visible _v-9986e9e6=""> <slot _v-9986e9e6=""></slot> </div> <div class=rel v-el:reference="" _v-9986e9e6=""> <slot name=content _v-9986e9e6=""> <div v-text=content _v-9986e9e6=""></div> </slot> </div> </div>'},function(t,e,o){var i,r;o(12),i=o(8),r=o(2),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var i,r;o(14),i=o(9),r=o(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var i,r;o(13),i=o(10),r=o(3),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(6),n=i(r),p=o(7),s=i(p);e["default"]={name:"app",components:[n["default"],s["default"]],data:function(){return{placement:"top",popoverVisible:!1,tooltipVisible:!1,tooltipVisible2:!1}}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=i(r);e["default"]={name:"vue-popover",props:{content:String,visibleArrow:{"default":!0}},mixins:[n["default"]]}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=i(r);e["default"]={name:"vue-tooltip",mixins:[n["default"]],props:{content:String,visibleArrow:{"default":!0}}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(15),n=i(r);e["default"]={props:{placement:{type:String,"default":"bottom"},flipBehavior:{"default":"flip"},reference:Object,popper:Object,offset:{type:Number,"default":0},visible:{type:Boolean,"default":!1},visibleArrow:{type:Boolean,"default":!1}},watch:{placement:function(){this.createPopper()}},methods:{createPopper:function(){this.cachePlacement!==this.placement&&-1!==["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"].indexOf(this.placement)&&(this.cachePlacement=this.placement,this.popperJS&&this.popperJS.hasOwnProperty("destroy")&&this.popperJS.destroy(),this.popperJS=new n["default"](this.reference,this.popper,{placement:this.placement,offset:this.offset,flipBehavior:this.flipBehavior}))},appendArrow:function(t){var e=void 0;for(var o in t.attributes)/^_v-/.test(t.attributes[o].name)&&(e=t.attributes[o].name);var i=document.createElement("div");e&&i.setAttribute(e,""),i.setAttribute("x-arrow",""),i.className="popper__arrow",t.appendChild(i)}},ready:function(){return this.reference=this.reference||this.$els.reference,this.reference?(this.popper=this.popper||this.$els.popper,this.popper?(this.visibleArrow&&this.appendArrow(this.popper),void this.createPopper()):void console.error("[vue-popper] popper is required.")):void console.error("[vue-popper] reference is required.")},beforeDestroy:function(){this.popperJS.destroy()}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,o){var i,r;!function(n,p){i=p,r="function"==typeof i?i.call(e,o,e,t):i,!(void 0!==r&&(t.exports=r))}(this,function(){"use strict";function t(t,e,o){this._reference=t.jquery?t[0]:t,this.state={};var i="undefined"==typeof e||null===e,r=e&&"[object Object]"===Object.prototype.toString.call(e);return i||r?this._popper=this.parse(r?e:{}):this._popper=e.jquery?e[0]:e,this._options=Object.assign({},v,o),this._options.modifiers=this._options.modifiers.map(function(t){return-1===this._options.modifiersIgnored.indexOf(t)?("applyStyle"===t&&this._popper.setAttribute("x-placement",this._options.placement),this.modifiers[t]||t):void 0}.bind(this)),this.state.position=this._getPosition(this._popper,this._reference),l(this._popper,{position:this.state.position}),this.update(),this._setupEventListeners(),this}function e(t){var e=t.style.display,o=t.style.visibility;t.style.display="block",t.style.visibility="hidden";var i=(t.offsetWidth,m.getComputedStyle(t)),r=parseFloat(i.marginTop)+parseFloat(i.marginBottom),n=parseFloat(i.marginLeft)+parseFloat(i.marginRight),p={width:t.offsetWidth+n,height:t.offsetHeight+r};return t.style.display=e,t.style.visibility=o,p}function o(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function i(t){var e=Object.assign({},t);return e.right=e.left+e.width,e.bottom=e.top+e.height,e}function r(t,e){var o,i=0;for(o in t){if(t[o]===e)return i;i++}return null}function n(t,e){var o=m.getComputedStyle(t,null);return o[e]}function p(t){var e=t.offsetParent;return e!==m.document.body&&e?e:m.document.documentElement}function s(t){return t===m.document?m.document.body.scrollTop?m.document.body:m.document.documentElement:-1!==["scroll","auto"].indexOf(n(t,"overflow"))||-1!==["scroll","auto"].indexOf(n(t,"overflow-x"))||-1!==["scroll","auto"].indexOf(n(t,"overflow-y"))?t:t.parentNode?s(t.parentNode):t}function f(t){return t===m.document.body?!1:"fixed"===n(t,"position")?!0:t.parentNode?f(t.parentNode):t}function l(t,e){function o(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}Object.keys(e).forEach(function(i){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&o(e[i])&&(r="px"),t.style[i]=e[i]+r})}function a(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function u(t){var e={width:t.offsetWidth,height:t.offsetHeight,left:t.offsetLeft,top:t.offsetTop};return e.right=e.left+e.width,e.bottom=e.top+e.height,e}function c(t){var e=t.getBoundingClientRect();return{left:e.left,top:e.top,right:e.right,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top}}function d(t,e,o){var i=c(t),r=c(e);if(o){var n=s(e);r.top+=n.scrollTop,r.bottom+=n.scrollTop,r.left+=n.scrollLeft,r.right+=n.scrollLeft}var p={top:i.top-r.top,left:i.left-r.left,bottom:i.top-r.top+i.height,right:i.left-r.left+i.width,width:i.width,height:i.height};return p}function h(t){for(var e=["","ms","webkit","moz","o"],o=0;o<e.length;o++){var i=e[o]?e[o]+t.charAt(0).toUpperCase()+t.slice(1):t;if("undefined"!=typeof m.document.body.style[i])return i}return null}var m=window,v={placement:"bottom",gpuAcceleration:!0,offset:0,boundariesElement:"viewport",boundariesPadding:5,preventOverflowOrder:["left","right","top","bottom"],flipBehavior:"flip",arrowElement:"[x-arrow]",modifiers:["shift","offset","preventOverflow","keepTogether","arrow","flip","applyStyle"],modifiersIgnored:[]};return t.prototype.destroy=function(){return this._popper.removeAttribute("x-placement"),this._popper.style.left="",this._popper.style.position="",this._popper.style.top="",this._popper.style[h("transform")]="",this._removeEventListeners(),this._options.removeOnDestroy&&this._popper.remove(),this},t.prototype.update=function(){var t={instance:this};t.placement=this._options.placement,t._originalPlacement=this._options.placement,t.offsets=this._getOffsets(this._popper,this._reference,t.placement),t.boundaries=this._getBoundaries(t,this._options.boundariesPadding,this._options.boundariesElement),t=this.runModifiers(t,this._options.modifiers),"function"==typeof this.state.updateCallback&&this.state.updateCallback(t)},t.prototype.onCreate=function(t){return t(this),this},t.prototype.onUpdate=function(t){return this.state.updateCallback=t,this},t.prototype.parse=function(t){function e(t,e){e.forEach(function(e){t.classList.add(e)})}function o(t,e){e.forEach(function(e){t.setAttribute(e.split(":")[0],e.split(":")[1]||"")})}var i={tagName:"div",classNames:["popper"],attributes:[],parent:m.document.body,content:"",contentType:"text",arrowTagName:"div",arrowClassNames:["popper__arrow"],arrowAttributes:["x-arrow"]};t=Object.assign({},i,t);var r=m.document,n=r.createElement(t.tagName);if(e(n,t.classNames),o(n,t.attributes),"node"===t.contentType?n.appendChild(t.content.jquery?t.content[0]:t.content):"html"===t.contentType?n.innerHTML=t.content:n.textContent=t.content,t.arrowTagName){var p=r.createElement(t.arrowTagName);e(p,t.arrowClassNames),o(p,t.arrowAttributes),n.appendChild(p)}var s=t.parent.jquery?t.parent[0]:t.parent;if("string"==typeof s){if(s=r.querySelectorAll(t.parent),s.length>1&&console.warn("WARNING: the given `parent` query("+t.parent+") matched more than one element, the first one will be used"),0===s.length)throw"ERROR: the given `parent` doesn't exists!";s=s[0]}return s.length>1&&s instanceof Element==!1&&(console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"),s=s[0]),s.appendChild(n),n},t.prototype._getPosition=function(t,e){var o=p(e),i=f(e,o);return i?"fixed":"absolute"},t.prototype._getOffsets=function(t,o,i){i=i.split("-")[0];var r={};r.position=this.state.position;var n="fixed"===r.position,s=d(o,p(t),n),f=e(t);return-1!==["right","left"].indexOf(i)?(r.top=s.top+s.height/2-f.height/2,"left"===i?r.left=s.left-f.width:r.left=s.right):(r.left=s.left+s.width/2-f.width/2,"top"===i?r.top=s.top-f.height:r.top=s.bottom),r.width=f.width,r.height=f.height,{popper:r,reference:s}},t.prototype._setupEventListeners=function(){if(this.state.updateBound=this.update.bind(this),m.addEventListener("resize",this.state.updateBound),"window"!==this._options.boundariesElement){var t=s(this._reference);t!==m.document.body&&t!==m.document.documentElement||(t=m),t.addEventListener("scroll",this.state.updateBound)}},t.prototype._removeEventListeners=function(){if(m.removeEventListener("resize",this.state.updateBound),"window"!==this._options.boundariesElement){var t=s(this._reference);t!==m.document.body&&t!==m.document.documentElement||(t=m),t.removeEventListener("scroll",this.state.updateBound)}this.state.updateBound=null},t.prototype._getBoundaries=function(t,e,o){var i,r,n={};if("window"===o){var f=m.document.body,l=m.document.documentElement;r=Math.max(f.scrollHeight,f.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight),i=Math.max(f.scrollWidth,f.offsetWidth,l.clientWidth,l.scrollWidth,l.offsetWidth),n={top:0,right:i,bottom:r,left:0}}else if("viewport"===o){var a=p(this._popper),c=s(this._popper),d=u(a),h="fixed"===t.offsets.popper.position?0:c.scrollTop,v="fixed"===t.offsets.popper.position?0:c.scrollLeft;n={top:0-(d.top-h),right:m.document.documentElement.clientWidth-(d.left-v),bottom:m.document.documentElement.clientHeight-(d.top-h),left:0-(d.left-v)}}else n=p(this._popper)===o?{top:0,left:0,right:o.clientWidth,bottom:o.clientHeight}:u(o);return n.left+=e,n.right-=e,n.top=n.top+e,n.bottom=n.bottom-e,n},t.prototype.runModifiers=function(t,e,o){var i=e.slice();return void 0!==o&&(i=this._options.modifiers.slice(0,r(this._options.modifiers,o))),i.forEach(function(e){a(e)&&(t=e.call(this,t))}.bind(this)),t},t.prototype.isModifierRequired=function(t,e){var o=r(this._options.modifiers,t);return!!this._options.modifiers.slice(0,o).filter(function(t){return t===e}).length},t.prototype.modifiers={},t.prototype.modifiers.applyStyle=function(t){var e,o={position:t.offsets.popper.position},i=Math.round(t.offsets.popper.left),r=Math.round(t.offsets.popper.top);return this._options.gpuAcceleration&&(e=h("transform"))?(o[e]="translate3d("+i+"px, "+r+"px, 0)",o.top=0,o.left=0):(o.left=i,o.top=r),l(this._popper,o),this._popper.setAttribute("x-placement",t.placement),this.isModifierRequired(this.modifiers.applyStyle,this.modifiers.arrow)&&t.offsets.arrow&&l(t.arrowElement,t.offsets.arrow),t},t.prototype.modifiers.shift=function(t){var e=t.placement,o=e.split("-")[0],r=e.split("-")[1];if(r){var n=t.offsets.reference,p=i(t.offsets.popper),s={y:{start:{top:n.top},end:{top:n.top+n.height-p.height}},x:{start:{left:n.left},end:{left:n.left+n.width-p.width}}},f=-1!==["bottom","top"].indexOf(o)?"x":"y";t.offsets.popper=Object.assign(p,s[f][r])}return t},t.prototype.modifiers.preventOverflow=function(t){var e=this._options.preventOverflowOrder,o=i(t.offsets.popper),r={left:function(){var e=o.left;return o.left<t.boundaries.left&&(e=Math.max(o.left,t.boundaries.left)),{left:e}},right:function(){var e=o.left;return o.right>t.boundaries.right&&(e=Math.min(o.left,t.boundaries.right-o.width)),{left:e}},top:function(){var e=o.top;return o.top<t.boundaries.top&&(e=Math.max(o.top,t.boundaries.top)),{top:e}},bottom:function(){var e=o.top;return o.bottom>t.boundaries.bottom&&(e=Math.min(o.top,t.boundaries.bottom-o.height)),{top:e}}};return e.forEach(function(e){t.offsets.popper=Object.assign(o,r[e]())}),t},t.prototype.modifiers.keepTogether=function(t){var e=i(t.offsets.popper),o=t.offsets.reference,r=Math.floor;return e.right<r(o.left)&&(t.offsets.popper.left=r(o.left)-e.width),e.left>r(o.right)&&(t.offsets.popper.left=r(o.right)),e.bottom<r(o.top)&&(t.offsets.popper.top=r(o.top)-e.height),e.top>r(o.bottom)&&(t.offsets.popper.top=r(o.bottom)),t},t.prototype.modifiers.flip=function(t){if(!this.isModifierRequired(this.modifiers.flip,this.modifiers.preventOverflow))return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"),t;if(t.flipped&&t.placement===t._originalPlacement)return t;var e=t.placement.split("-")[0],r=o(e),n=t.placement.split("-")[1]||"",p=[];return p="flip"===this._options.flipBehavior?[e,r]:this._options.flipBehavior,p.forEach(function(s,f){if(e===s&&p.length!==f+1){e=t.placement.split("-")[0],r=o(e);var l=i(t.offsets.popper),a=-1!==["right","bottom"].indexOf(e);(a&&Math.floor(t.offsets.reference[e])>Math.floor(l[r])||!a&&Math.floor(t.offsets.reference[e])<Math.floor(l[r]))&&(t.flipped=!0,t.placement=p[f+1],n&&(t.placement+="-"+n),t.offsets.popper=this._getOffsets(this._popper,this._reference,t.placement).popper,t=this.runModifiers(t,this._options.modifiers,this._flip))}}.bind(this)),t},t.prototype.modifiers.offset=function(t){var e=this._options.offset,o=t.offsets.popper;return-1!==t.placement.indexOf("left")?o.top-=e:-1!==t.placement.indexOf("right")?o.top+=e:-1!==t.placement.indexOf("top")?o.left-=e:-1!==t.placement.indexOf("bottom")&&(o.left+=e),t},t.prototype.modifiers.arrow=function(t){var o=this._options.arrowElement;if("string"==typeof o&&(o=this._popper.querySelector(o)),!o)return t;if(!this._popper.contains(o))return console.warn("WARNING: `arrowElement` must be child of its popper element!"),t;if(!this.isModifierRequired(this.modifiers.arrow,this.modifiers.keepTogether))return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"),t;var r={},n=t.placement.split("-")[0],p=i(t.offsets.popper),s=t.offsets.reference,f=-1!==["left","right"].indexOf(n),l=f?"height":"width",a=f?"top":"left",u=f?"left":"top",c=f?"bottom":"right",d=e(o)[l];s[c]-d<p[a]&&(t.offsets.popper[a]-=p[a]-(s[c]-d)),s[a]+d>p[c]&&(t.offsets.popper[a]+=s[a]+d-p[c]);var h=s[a]+s[l]/2-d/2,m=h-p[a];return m=Math.max(Math.min(p[l]-d,m),0),r[a]=m,r[u]="",t.offsets.arrow=r,t.arrowElement=o,t},Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),o=1;o<arguments.length;o++){var i=arguments[o];if(void 0!==i&&null!==i){i=Object(i);for(var r=Object.keys(i),n=0,p=r.length;p>n;n++){var s=r[n],f=Object.getOwnPropertyDescriptor(i,s);void 0!==f&&f.enumerable&&(e[s]=i[s])}}}return e}}),t})},function(t,e){t.exports=Vue}]);