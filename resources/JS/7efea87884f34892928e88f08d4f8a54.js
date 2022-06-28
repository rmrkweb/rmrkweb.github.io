/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.8"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.8",major:1,minor:7,dot:8,codeName:"enthusiastic-oblation"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&(a||(a={}),r(d,function(b,d){null==a[d]&&(a[d]="")}));a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.6.4
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

var ELEMENT_NODE = 1;
var COMMENT_NODE = 8;

var ADD_CLASS_SUFFIX = '-add';
var REMOVE_CLASS_SUFFIX = '-remove';
var EVENT_CLASS_PREFIX = 'ng-';
var ACTIVE_CLASS_SUFFIX = '-active';
var PREPARE_CLASS_SUFFIX = '-prepare';

var NG_ANIMATE_CLASSNAME = 'ng-animate';
var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';

// Detect proper transitionend/animationend event names.
var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

// If unprefixed events are not supported but webkit-prefixed are, use the latter.
// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
// Register both events in case `window.onanimationend` is not supported because of that,
// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
// therefore there is no reason to test anymore for other vendor prefixes:
// http://caniuse.com/#search=transition
if ((window.ontransitionend === undefined) && (window.onwebkittransitionend !== undefined)) {
  CSS_PREFIX = '-webkit-';
  TRANSITION_PROP = 'WebkitTransition';
  TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
} else {
  TRANSITION_PROP = 'transition';
  TRANSITIONEND_EVENT = 'transitionend';
}

if ((window.onanimationend === undefined) && (window.onwebkitanimationend !== undefined)) {
  CSS_PREFIX = '-webkit-';
  ANIMATION_PROP = 'WebkitAnimation';
  ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
} else {
  ANIMATION_PROP = 'animation';
  ANIMATIONEND_EVENT = 'animationend';
}

var DURATION_KEY = 'Duration';
var PROPERTY_KEY = 'Property';
var DELAY_KEY = 'Delay';
var TIMING_KEY = 'TimingFunction';
var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
var ANIMATION_PLAYSTATE_KEY = 'PlayState';
var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;

var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;
var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;

var ngMinErr = angular.$$minErr('ng');
function assertArg(arg, name, reason) {
  if (!arg) {
    throw ngMinErr('areq', 'Argument \'{0}\' is {1}', (name || '?'), (reason || 'required'));
  }
  return arg;
}

function mergeClasses(a,b) {
  if (!a && !b) return '';
  if (!a) return b;
  if (!b) return a;
  if (isArray(a)) a = a.join(' ');
  if (isArray(b)) b = b.join(' ');
  return a + ' ' + b;
}

function packageStyles(options) {
  var styles = {};
  if (options && (options.to || options.from)) {
    styles.to = options.to;
    styles.from = options.from;
  }
  return styles;
}

function pendClasses(classes, fix, isPrefix) {
  var className = '';
  classes = isArray(classes)
      ? classes
      : classes && isString(classes) && classes.length
          ? classes.split(/\s+/)
          : [];
  forEach(classes, function(klass, i) {
    if (klass && klass.length > 0) {
      className += (i > 0) ? ' ' : '';
      className += isPrefix ? fix + klass
                            : klass + fix;
    }
  });
  return className;
}

function removeFromArray(arr, val) {
  var index = arr.indexOf(val);
  if (val >= 0) {
    arr.splice(index, 1);
  }
}

function stripCommentsFromElement(element) {
  if (element instanceof jqLite) {
    switch (element.length) {
      case 0:
        return element;

      case 1:
        // there is no point of stripping anything if the element
        // is the only element within the jqLite wrapper.
        // (it's important that we retain the element instance.)
        if (element[0].nodeType === ELEMENT_NODE) {
          return element;
        }
        break;

      default:
        return jqLite(extractElementNode(element));
    }
  }

  if (element.nodeType === ELEMENT_NODE) {
    return jqLite(element);
  }
}

function extractElementNode(element) {
  if (!element[0]) return element;
  for (var i = 0; i < element.length; i++) {
    var elm = element[i];
    if (elm.nodeType === ELEMENT_NODE) {
      return elm;
    }
  }
}

function $$addClass($$jqLite, element, className) {
  forEach(element, function(elm) {
    $$jqLite.addClass(elm, className);
  });
}

function $$removeClass($$jqLite, element, className) {
  forEach(element, function(elm) {
    $$jqLite.removeClass(elm, className);
  });
}

function applyAnimationClassesFactory($$jqLite) {
  return function(element, options) {
    if (options.addClass) {
      $$addClass($$jqLite, element, options.addClass);
      options.addClass = null;
    }
    if (options.removeClass) {
      $$removeClass($$jqLite, element, options.removeClass);
      options.removeClass = null;
    }
  };
}

function prepareAnimationOptions(options) {
  options = options || {};
  if (!options.$$prepared) {
    var domOperation = options.domOperation || noop;
    options.domOperation = function() {
      options.$$domOperationFired = true;
      domOperation();
      domOperation = noop;
    };
    options.$$prepared = true;
  }
  return options;
}

function applyAnimationStyles(element, options) {
  applyAnimationFromStyles(element, options);
  applyAnimationToStyles(element, options);
}

function applyAnimationFromStyles(element, options) {
  if (options.from) {
    element.css(options.from);
    options.from = null;
  }
}

function applyAnimationToStyles(element, options) {
  if (options.to) {
    element.css(options.to);
    options.to = null;
  }
}

function mergeAnimationDetails(element, oldAnimation, newAnimation) {
  var target = oldAnimation.options || {};
  var newOptions = newAnimation.options || {};

  var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
  var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
  var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);

  if (newOptions.preparationClasses) {
    target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
    delete newOptions.preparationClasses;
  }

  // noop is basically when there is no callback; otherwise something has been set
  var realDomOperation = target.domOperation !== noop ? target.domOperation : null;

  extend(target, newOptions);

  // TODO(matsko or sreeramu): proper fix is to maintain all animation callback in array and call at last,but now only leave has the callback so no issue with this.
  if (realDomOperation) {
    target.domOperation = realDomOperation;
  }

  if (classes.addClass) {
    target.addClass = classes.addClass;
  } else {
    target.addClass = null;
  }

  if (classes.removeClass) {
    target.removeClass = classes.removeClass;
  } else {
    target.removeClass = null;
  }

  oldAnimation.addClass = target.addClass;
  oldAnimation.removeClass = target.removeClass;

  return target;
}

function resolveElementClasses(existing, toAdd, toRemove) {
  var ADD_CLASS = 1;
  var REMOVE_CLASS = -1;

  var flags = {};
  existing = splitClassesToLookup(existing);

  toAdd = splitClassesToLookup(toAdd);
  forEach(toAdd, function(value, key) {
    flags[key] = ADD_CLASS;
  });

  toRemove = splitClassesToLookup(toRemove);
  forEach(toRemove, function(value, key) {
    flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
  });

  var classes = {
    addClass: '',
    removeClass: ''
  };

  forEach(flags, function(val, klass) {
    var prop, allow;
    if (val === ADD_CLASS) {
      prop = 'addClass';
      allow = !existing[klass] || existing[klass + REMOVE_CLASS_SUFFIX];
    } else if (val === REMOVE_CLASS) {
      prop = 'removeClass';
      allow = existing[klass] || existing[klass + ADD_CLASS_SUFFIX];
    }
    if (allow) {
      if (classes[prop].length) {
        classes[prop] += ' ';
      }
      classes[prop] += klass;
    }
  });

  function splitClassesToLookup(classes) {
    if (isString(classes)) {
      classes = classes.split(' ');
    }

    var obj = {};
    forEach(classes, function(klass) {
      // sometimes the split leaves empty string values
      // incase extra spaces were applied to the options
      if (klass.length) {
        obj[klass] = true;
      }
    });
    return obj;
  }

  return classes;
}

function getDomNode(element) {
  return (element instanceof jqLite) ? element[0] : element;
}

function applyGeneratedPreparationClasses(element, event, options) {
  var classes = '';
  if (event) {
    classes = pendClasses(event, EVENT_CLASS_PREFIX, true);
  }
  if (options.addClass) {
    classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX));
  }
  if (options.removeClass) {
    classes = concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX));
  }
  if (classes.length) {
    options.preparationClasses = classes;
    element.addClass(classes);
  }
}

function clearGeneratedClasses(element, options) {
  if (options.preparationClasses) {
    element.removeClass(options.preparationClasses);
    options.preparationClasses = null;
  }
  if (options.activeClasses) {
    element.removeClass(options.activeClasses);
    options.activeClasses = null;
  }
}

function blockTransitions(node, duration) {
  // we use a negative delay value since it performs blocking
  // yet it doesn't kill any existing transitions running on the
  // same element which makes this safe for class-based animations
  var value = duration ? '-' + duration + 's' : '';
  applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
  return [TRANSITION_DELAY_PROP, value];
}

function blockKeyframeAnimations(node, applyBlock) {
  var value = applyBlock ? 'paused' : '';
  var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
  applyInlineStyle(node, [key, value]);
  return [key, value];
}

function applyInlineStyle(node, styleTuple) {
  var prop = styleTuple[0];
  var value = styleTuple[1];
  node.style[prop] = value;
}

function concatWithSpace(a,b) {
  if (!a) return b;
  if (!b) return a;
  return a + ' ' + b;
}

var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
  var queue, cancelFn;

  function scheduler(tasks) {
    // we make a copy since RAFScheduler mutates the state
    // of the passed in array variable and this would be difficult
    // to track down on the outside code
    queue = queue.concat(tasks);
    nextTick();
  }

  queue = scheduler.queue = [];

  /* waitUntilQuiet does two things:
   * 1. It will run the FINAL `fn` value only when an uncanceled RAF has passed through
   * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
   *
   * The motivation here is that animation code can request more time from the scheduler
   * before the next wave runs. This allows for certain DOM properties such as classes to
   * be resolved in time for the next animation to run.
   */
  scheduler.waitUntilQuiet = function(fn) {
    if (cancelFn) cancelFn();

    cancelFn = $$rAF(function() {
      cancelFn = null;
      fn();
      nextTick();
    });
  };

  return scheduler;

  function nextTick() {
    if (!queue.length) return;

    var items = queue.shift();
    for (var i = 0; i < items.length; i++) {
      items[i]();
    }

    if (!cancelFn) {
      $$rAF(function() {
        if (!cancelFn) nextTick();
      });
    }
  }
}];

/**
 * @ngdoc directive
 * @name ngAnimateChildren
 * @restrict AE
 * @element ANY
 *
 * @description
 *
 * ngAnimateChildren allows you to specify that children of this element should animate even if any
 * of the children's parents are currently animating. By default, when an element has an active `enter`, `leave`, or `move`
 * (structural) animation, child elements that also have an active structural animation are not animated.
 *
 * Note that even if `ngAnimateChildren` is set, no child animations will run when the parent element is removed from the DOM (`leave` animation).
 *
 *
 * @param {string} ngAnimateChildren If the value is empty, `true` or `on`,
 *     then child animations are allowed. If the value is `false`, child animations are not allowed.
 *
 * @example
 * <example module="ngAnimateChildren" name="ngAnimateChildren" deps="angular-animate.js" animations="true">
     <file name="index.html">
       <div ng-controller="MainController as main">
         <label>Show container? <input type="checkbox" ng-model="main.enterElement" /></label>
         <label>Animate children? <input type="checkbox" ng-model="main.animateChildren" /></label>
         <hr>
         <div ng-animate-children="{{main.animateChildren}}">
           <div ng-if="main.enterElement" class="container">
             List of items:
             <div ng-repeat="item in [0, 1, 2, 3]" class="item">Item {{item}}</div>
           </div>
         </div>
       </div>
     </file>
     <file name="animations.css">

      .container.ng-enter,
      .container.ng-leave {
        transition: all ease 1.5s;
      }

      .container.ng-enter,
      .container.ng-leave-active {
        opacity: 0;
      }

      .container.ng-leave,
      .container.ng-enter-active {
        opacity: 1;
      }

      .item {
        background: firebrick;
        color: #FFF;
        margin-bottom: 10px;
      }

      .item.ng-enter,
      .item.ng-leave {
        transition: transform 1.5s ease;
      }

      .item.ng-enter {
        transform: translateX(50px);
      }

      .item.ng-enter-active {
        transform: translateX(0);
      }
    </file>
    <file name="script.js">
      angular.module('ngAnimateChildren', ['ngAnimate'])
        .controller('MainController', function MainController() {
          this.animateChildren = false;
          this.enterElement = false;
        });
    </file>
  </example>
 */
var $$AnimateChildrenDirective = ['$interpolate', function($interpolate) {
  return {
    link: function(scope, element, attrs) {
      var val = attrs.ngAnimateChildren;
      if (isString(val) && val.length === 0) { //empty attribute
        element.data(NG_ANIMATE_CHILDREN_DATA, true);
      } else {
        // Interpolate and set the value, so that it is available to
        // animations that run right after compilation
        setData($interpolate(val)(scope));
        attrs.$observe('ngAnimateChildren', setData);
      }

      function setData(value) {
        value = value === 'on' || value === 'true';
        element.data(NG_ANIMATE_CHILDREN_DATA, value);
      }
    }
  };
}];

/* exported $AnimateCssProvider */

var ANIMATE_TIMER_KEY = '$$animateCss';

/**
 * @ngdoc service
 * @name $animateCss
 * @kind object
 *
 * @description
 * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
 * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
 * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
 * directives to create more complex animations that can be purely driven using CSS code.
 *
 * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
 * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
 *
 * ## Usage
 * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
 * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
 * any automatic control over cancelling animations and/or preventing animations from being run on
 * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
 * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
 * the CSS animation.
 *
 * The example below shows how we can create a folding animation on an element using `ng-if`:
 *
 * ```html
 * <!-- notice the `fold-animation` CSS class -->
 * <div ng-if="onOff" class="fold-animation">
 *   This element will go BOOM
 * </div>
 * <button ng-click="onOff=true">Fold In</button>
 * ```
 *
 * Now we create the **JavaScript animation** that will trigger the CSS transition:
 *
 * ```js
 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var height = element[0].offsetHeight;
 *       return $animateCss(element, {
 *         from: { height:'0px' },
 *         to: { height:height + 'px' },
 *         duration: 1 // one second
 *       });
 *     }
 *   }
 * }]);
 * ```
 *
 * ## More Advanced Uses
 *
 * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
 * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
 *
 * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
 * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
 * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
 * to provide a working animation that will run in CSS.
 *
 * The example below showcases a more advanced version of the `.fold-animation` from the example above:
 *
 * ```js
 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var height = element[0].offsetHeight;
 *       return $animateCss(element, {
 *         addClass: 'red large-text pulse-twice',
 *         easing: 'ease-out',
 *         from: { height:'0px' },
 *         to: { height:height + 'px' },
 *         duration: 1 // one second
 *       });
 *     }
 *   }
 * }]);
 * ```
 *
 * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
 *
 * ```css
 * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
 * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
 * .red { background:red; }
 * .large-text { font-size:20px; }
 *
 * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
 * .pulse-twice {
 *   animation: 0.5s pulse linear 2;
 *   -webkit-animation: 0.5s pulse linear 2;
 * }
 *
 * @keyframes pulse {
 *   from { transform: scale(0.5); }
 *   to { transform: scale(1.5); }
 * }
 *
 * @-webkit-keyframes pulse {
 *   from { -webkit-transform: scale(0.5); }
 *   to { -webkit-transform: scale(1.5); }
 * }
 * ```
 *
 * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
 *
 * ## How the Options are handled
 *
 * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
 * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
 * styles using the `from` and `to` properties.
 *
 * ```js
 * var animator = $animateCss(element, {
 *   from: { background:'red' },
 *   to: { background:'blue' }
 * });
 * animator.start();
 * ```
 *
 * ```css
 * .rotating-animation {
 *   animation:0.5s rotate linear;
 *   -webkit-animation:0.5s rotate linear;
 * }
 *
 * @keyframes rotate {
 *   from { transform: rotate(0deg); }
 *   to { transform: rotate(360deg); }
 * }
 *
 * @-webkit-keyframes rotate {
 *   from { -webkit-transform: rotate(0deg); }
 *   to { -webkit-transform: rotate(360deg); }
 * }
 * ```
 *
 * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
 * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
 * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
 * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
 * and spread across the transition and keyframe animation.
 *
 * ## What is returned
 *
 * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
 * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
 * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
 *
 * ```js
 * var animator = $animateCss(element, { ... });
 * ```
 *
 * Now what do the contents of our `animator` variable look like:
 *
 * ```js
 * {
 *   // starts the animation
 *   start: Function,
 *
 *   // ends (aborts) the animation
 *   end: Function
 * }
 * ```
 *
 * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
 * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and styles may have been
 * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
 * and that changing them will not reconfigure the parameters of the animation.
 *
 * ### runner.done() vs runner.then()
 * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
 * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
 * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
 * unless you really need a digest to kick off afterwards.
 *
 * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
 * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
 * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
 *
 * @param {DOMElement} element the element that will be animated
 * @param {object} options the animation-related options that will be applied during the animation
 *
 * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
 * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
 * * `structural` - Indicates that the `ng-` prefix will be added to the event class. Setting to `false` or omitting will turn `ng-EVENT` and
 * `ng-EVENT-active` in `EVENT` and `EVENT-active`. Unused if `event` is omitted.
 * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
 * * `transitionStyle` - The raw CSS transition style that will be used (e.g. `1s linear all`).
 * * `keyframeStyle` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
 * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
 * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
 * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
 * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
 * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
 * is provided then the animation will be skipped entirely.
 * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
 * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
 * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
 * CSS delay value.
 * * `stagger` - A numeric time value representing the delay between successively animated elements
 * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
 * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
 *   `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
 * * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occurring on the classes being added and removed.)
 * * `cleanupStyles` - Whether or not the provided `from` and `to` styles will be removed once
 *    the animation is closed. This is useful for when the styles are used purely for the sake of
 *    the animation and do not have a lasting visual effect on the element (e.g. a collapse and open animation).
 *    By default this value is set to `false`.
 *
 * @return {object} an object with start and end methods and details about the animation.
 *
 * * `start` - The method to start the animation. This will return a `Promise` when called.
 * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
 */
var ONE_SECOND = 1000;

var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
var CLOSING_TIME_BUFFER = 1.5;

var DETECT_CSS_PROPERTIES = {
  transitionDuration:      TRANSITION_DURATION_PROP,
  transitionDelay:         TRANSITION_DELAY_PROP,
  transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
  animationDuration:       ANIMATION_DURATION_PROP,
  animationDelay:          ANIMATION_DELAY_PROP,
  animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
};

var DETECT_STAGGER_CSS_PROPERTIES = {
  transitionDuration:      TRANSITION_DURATION_PROP,
  transitionDelay:         TRANSITION_DELAY_PROP,
  animationDuration:       ANIMATION_DURATION_PROP,
  animationDelay:          ANIMATION_DELAY_PROP
};

function getCssKeyframeDurationStyle(duration) {
  return [ANIMATION_DURATION_PROP, duration + 's'];
}

function getCssDelayStyle(delay, isKeyframeAnimation) {
  var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
  return [prop, delay + 's'];
}

function computeCssStyles($window, element, properties) {
  var styles = Object.create(null);
  var detectedStyles = $window.getComputedStyle(element) || {};
  forEach(properties, function(formalStyleName, actualStyleName) {
    var val = detectedStyles[formalStyleName];
    if (val) {
      var c = val.charAt(0);

      // only numerical-based values have a negative sign or digit as the first value
      if (c === '-' || c === '+' || c >= 0) {
        val = parseMaxTime(val);
      }

      // by setting this to null in the event that the delay is not set or is set directly as 0
      // then we can still allow for negative values to be used later on and not mistake this
      // value for being greater than any other negative value.
      if (val === 0) {
        val = null;
      }
      styles[actualStyleName] = val;
    }
  });

  return styles;
}

function parseMaxTime(str) {
  var maxValue = 0;
  var values = str.split(/\s*,\s*/);
  forEach(values, function(value) {
    // it's always safe to consider only second values and omit `ms` values since
    // getComputedStyle will always handle the conversion for us
    if (value.charAt(value.length - 1) === 's') {
      value = value.substring(0, value.length - 1);
    }
    value = parseFloat(value) || 0;
    maxValue = maxValue ? Math.max(value, maxValue) : value;
  });
  return maxValue;
}

function truthyTimingValue(val) {
  return val === 0 || val != null;
}

function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
  var style = TRANSITION_PROP;
  var value = duration + 's';
  if (applyOnlyDuration) {
    style += DURATION_KEY;
  } else {
    value += ' linear all';
  }
  return [style, value];
}

function createLocalCacheLookup() {
  var cache = Object.create(null);
  return {
    flush: function() {
      cache = Object.create(null);
    },

    count: function(key) {
      var entry = cache[key];
      return entry ? entry.total : 0;
    },

    get: function(key) {
      var entry = cache[key];
      return entry && entry.value;
    },

    put: function(key, value) {
      if (!cache[key]) {
        cache[key] = { total: 1, value: value };
      } else {
        cache[key].total++;
      }
    }
  };
}

// we do not reassign an already present style value since
// if we detect the style property value again we may be
// detecting styles that were added via the `from` styles.
// We make use of `isDefined` here since an empty string
// or null value (which is what getPropertyValue will return
// for a non-existing style) will still be marked as a valid
// value for the style (a falsy value implies that the style
// is to be removed at the end of the animation). If we had a simple
// "OR" statement then it would not be enough to catch that.
function registerRestorableStyles(backup, node, properties) {
  forEach(properties, function(prop) {
    backup[prop] = isDefined(backup[prop])
        ? backup[prop]
        : node.style.getPropertyValue(prop);
  });
}

var $AnimateCssProvider = ['$animateProvider', /** @this */ function($animateProvider) {
  var gcsLookup = createLocalCacheLookup();
  var gcsStaggerLookup = createLocalCacheLookup();

  this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
               '$$forceReflow', '$sniffer', '$$rAFScheduler', '$$animateQueue',
       function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
                $$forceReflow,   $sniffer,   $$rAFScheduler, $$animateQueue) {

    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

    var parentCounter = 0;
    function gcsHashFn(node, extraClasses) {
      var KEY = '$$ngAnimateParentKey';
      var parentNode = node.parentNode;
      var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
      return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
    }

    function computeCachedCssStyles(node, className, cacheKey, properties) {
      var timings = gcsLookup.get(cacheKey);

      if (!timings) {
        timings = computeCssStyles($window, node, properties);
        if (timings.animationIterationCount === 'infinite') {
          timings.animationIterationCount = 1;
        }
      }

      // we keep putting this in multiple times even though the value and the cacheKey are the same
      // because we're keeping an internal tally of how many duplicate animations are detected.
      gcsLookup.put(cacheKey, timings);
      return timings;
    }

    function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
      var stagger;

      // if we have one or more existing matches of matching elements
      // containing the same parent + CSS styles (which is how cacheKey works)
      // then staggering is possible
      if (gcsLookup.count(cacheKey) > 0) {
        stagger = gcsStaggerLookup.get(cacheKey);

        if (!stagger) {
          var staggerClassName = pendClasses(className, '-stagger');

          $$jqLite.addClass(node, staggerClassName);

          stagger = computeCssStyles($window, node, properties);

          // force the conversion of a null value to zero incase not set
          stagger.animationDuration = Math.max(stagger.animationDuration, 0);
          stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);

          $$jqLite.removeClass(node, staggerClassName);

          gcsStaggerLookup.put(cacheKey, stagger);
        }
      }

      return stagger || {};
    }

    var rafWaitQueue = [];
    function waitUntilQuiet(callback) {
      rafWaitQueue.push(callback);
      $$rAFScheduler.waitUntilQuiet(function() {
        gcsLookup.flush();
        gcsStaggerLookup.flush();

        // DO NOT REMOVE THIS LINE OR REFACTOR OUT THE `pageWidth` variable.
        // PLEASE EXAMINE THE `$$forceReflow` service to understand why.
        var pageWidth = $$forceReflow();

        // we use a for loop to ensure that if the queue is changed
        // during this looping then it will consider new requests
        for (var i = 0; i < rafWaitQueue.length; i++) {
          rafWaitQueue[i](pageWidth);
        }
        rafWaitQueue.length = 0;
      });
    }

    function computeTimings(node, className, cacheKey) {
      var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
      var aD = timings.animationDelay;
      var tD = timings.transitionDelay;
      timings.maxDelay = aD && tD
          ? Math.max(aD, tD)
          : (aD || tD);
      timings.maxDuration = Math.max(
          timings.animationDuration * timings.animationIterationCount,
          timings.transitionDuration);

      return timings;
    }

    return function init(element, initialOptions) {
      // all of the animation functions should create
      // a copy of the options data, however, if a
      // parent service has already created a copy then
      // we should stick to using that
      var options = initialOptions || {};
      if (!options.$$prepared) {
        options = prepareAnimationOptions(copy(options));
      }

      var restoreStyles = {};
      var node = getDomNode(element);
      if (!node
          || !node.parentNode
          || !$$animateQueue.enabled()) {
        return closeAndReturnNoopAnimator();
      }

      var temporaryStyles = [];
      var classes = element.attr('class');
      var styles = packageStyles(options);
      var animationClosed;
      var animationPaused;
      var animationCompleted;
      var runner;
      var runnerHost;
      var maxDelay;
      var maxDelayTime;
      var maxDuration;
      var maxDurationTime;
      var startTime;
      var events = [];

      if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
        return closeAndReturnNoopAnimator();
      }

      var method = options.event && isArray(options.event)
            ? options.event.join(' ')
            : options.event;

      var isStructural = method && options.structural;
      var structuralClassName = '';
      var addRemoveClassName = '';

      if (isStructural) {
        structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, true);
      } else if (method) {
        structuralClassName = method;
      }

      if (options.addClass) {
        addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX);
      }

      if (options.removeClass) {
        if (addRemoveClassName.length) {
          addRemoveClassName += ' ';
        }
        addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
      }

      // there may be a situation where a structural animation is combined together
      // with CSS classes that need to resolve before the animation is computed.
      // However this means that there is no explicit CSS code to block the animation
      // from happening (by setting 0s none in the class name). If this is the case
      // we need to apply the classes before the first rAF so we know to continue if
      // there actually is a detected transition or keyframe animation
      if (options.applyClassesEarly && addRemoveClassName.length) {
        applyAnimationClasses(element, options);
      }

      var preparationClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
      var fullClassName = classes + ' ' + preparationClasses;
      var activeClasses = pendClasses(preparationClasses, ACTIVE_CLASS_SUFFIX);
      var hasToStyles = styles.to && Object.keys(styles.to).length > 0;
      var containsKeyframeAnimation = (options.keyframeStyle || '').length > 0;

      // there is no way we can trigger an animation if no styles and
      // no classes are being applied which would then trigger a transition,
      // unless there a is raw keyframe value that is applied to the element.
      if (!containsKeyframeAnimation
           && !hasToStyles
           && !preparationClasses) {
        return closeAndReturnNoopAnimator();
      }

      var cacheKey, stagger;
      if (options.stagger > 0) {
        var staggerVal = parseFloat(options.stagger);
        stagger = {
          transitionDelay: staggerVal,
          animationDelay: staggerVal,
          transitionDuration: 0,
          animationDuration: 0
        };
      } else {
        cacheKey = gcsHashFn(node, fullClassName);
        stagger = computeCachedCssStaggerStyles(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
      }

      if (!options.$$skipPreparationClasses) {
        $$jqLite.addClass(element, preparationClasses);
      }

      var applyOnlyDuration;

      if (options.transitionStyle) {
        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
        applyInlineStyle(node, transitionStyle);
        temporaryStyles.push(transitionStyle);
      }

      if (options.duration >= 0) {
        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);

        // we set the duration so that it will be picked up by getComputedStyle later
        applyInlineStyle(node, durationStyle);
        temporaryStyles.push(durationStyle);
      }

      if (options.keyframeStyle) {
        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
        applyInlineStyle(node, keyframeStyle);
        temporaryStyles.push(keyframeStyle);
      }

      var itemIndex = stagger
          ? options.staggerIndex >= 0
              ? options.staggerIndex
              : gcsLookup.count(cacheKey)
          : 0;

      var isFirst = itemIndex === 0;

      // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
      // without causing any combination of transitions to kick in. By adding a negative delay value
      // it forces the setup class' transition to end immediately. We later then remove the negative
      // transition delay to allow for the transition to naturally do it's thing. The beauty here is
      // that if there is no transition defined then nothing will happen and this will also allow
      // other transitions to be stacked on top of each other without any chopping them out.
      if (isFirst && !options.skipBlocking) {
        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
      }

      var timings = computeTimings(node, fullClassName, cacheKey);
      var relativeDelay = timings.maxDelay;
      maxDelay = Math.max(relativeDelay, 0);
      maxDuration = timings.maxDuration;

      var flags = {};
      flags.hasTransitions          = timings.transitionDuration > 0;
      flags.hasAnimations           = timings.animationDuration > 0;
      flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty === 'all';
      flags.applyTransitionDuration = hasToStyles && (
                                        (flags.hasTransitions && !flags.hasTransitionAll)
                                         || (flags.hasAnimations && !flags.hasTransitions));
      flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
      flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
      flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
      flags.recalculateTimingStyles = addRemoveClassName.length > 0;

      if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;

        if (flags.applyTransitionDuration) {
          flags.hasTransitions = true;
          timings.transitionDuration = maxDuration;
          applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
          temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
        }

        if (flags.applyAnimationDuration) {
          flags.hasAnimations = true;
          timings.animationDuration = maxDuration;
          temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
        }
      }

      if (maxDuration === 0 && !flags.recalculateTimingStyles) {
        return closeAndReturnNoopAnimator();
      }

      if (options.delay != null) {
        var delayStyle;
        if (typeof options.delay !== 'boolean') {
          delayStyle = parseFloat(options.delay);
          // number in options.delay means we have to recalculate the delay for the closing timeout
          maxDelay = Math.max(delayStyle, 0);
        }

        if (flags.applyTransitionDelay) {
          temporaryStyles.push(getCssDelayStyle(delayStyle));
        }

        if (flags.applyAnimationDelay) {
          temporaryStyles.push(getCssDelayStyle(delayStyle, true));
        }
      }

      // we need to recalculate the delay value since we used a pre-emptive negative
      // delay value and the delay value is required for the final event checking. This
      // property will ensure that this will happen after the RAF phase has passed.
      if (options.duration == null && timings.transitionDuration > 0) {
        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
      }

      maxDelayTime = maxDelay * ONE_SECOND;
      maxDurationTime = maxDuration * ONE_SECOND;
      if (!options.skipBlocking) {
        flags.blockTransition = timings.transitionDuration > 0;
        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
                                       stagger.animationDelay > 0 &&
                                       stagger.animationDuration === 0;
      }

      if (options.from) {
        if (options.cleanupStyles) {
          registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
        }
        applyAnimationFromStyles(element, options);
      }

      if (flags.blockTransition || flags.blockKeyframeAnimation) {
        applyBlocking(maxDuration);
      } else if (!options.skipBlocking) {
        blockTransitions(node, false);
      }

      // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
      return {
        $$willAnimate: true,
        end: endFn,
        start: function() {
          if (animationClosed) return;

          runnerHost = {
            end: endFn,
            cancel: cancelFn,
            resume: null, //this will be set during the start() phase
            pause: null
          };

          runner = new $$AnimateRunner(runnerHost);

          waitUntilQuiet(start);

          // we don't have access to pause/resume the animation
          // since it hasn't run yet. AnimateRunner will therefore
          // set noop functions for resume and pause and they will
          // later be overridden once the animation is triggered
          return runner;
        }
      };

      function endFn() {
        close();
      }

      function cancelFn() {
        close(true);
      }

      function close(rejected) {
        // if the promise has been called already then we shouldn't close
        // the animation again
        if (animationClosed || (animationCompleted && animationPaused)) return;
        animationClosed = true;
        animationPaused = false;

        if (!options.$$skipPreparationClasses) {
          $$jqLite.removeClass(element, preparationClasses);
        }
        $$jqLite.removeClass(element, activeClasses);

        blockKeyframeAnimations(node, false);
        blockTransitions(node, false);

        forEach(temporaryStyles, function(entry) {
          // There is only one way to remove inline style properties entirely from elements.
          // By using `removeProperty` this works, but we need to convert camel-cased CSS
          // styles down to hyphenated values.
          node.style[entry[0]] = '';
        });

        applyAnimationClasses(element, options);
        applyAnimationStyles(element, options);

        if (Object.keys(restoreStyles).length) {
          forEach(restoreStyles, function(value, prop) {
            if (value) {
              node.style.setProperty(prop, value);
            } else {
              node.style.removeProperty(prop);
            }
          });
        }

        // the reason why we have this option is to allow a synchronous closing callback
        // that is fired as SOON as the animation ends (when the CSS is removed) or if
        // the animation never takes off at all. A good example is a leave animation since
        // the element must be removed just after the animation is over or else the element
        // will appear on screen for one animation frame causing an overbearing flicker.
        if (options.onDone) {
          options.onDone();
        }

        if (events && events.length) {
          // Remove the transitionend / animationend listener(s)
          element.off(events.join(' '), onAnimationProgress);
        }

        //Cancel the fallback closing timeout and remove the timer data
        var animationTimerData = element.data(ANIMATE_TIMER_KEY);
        if (animationTimerData) {
          $timeout.cancel(animationTimerData[0].timer);
          element.removeData(ANIMATE_TIMER_KEY);
        }

        // if the preparation function fails then the promise is not setup
        if (runner) {
          runner.complete(!rejected);
        }
      }

      function applyBlocking(duration) {
        if (flags.blockTransition) {
          blockTransitions(node, duration);
        }

        if (flags.blockKeyframeAnimation) {
          blockKeyframeAnimations(node, !!duration);
        }
      }

      function closeAndReturnNoopAnimator() {
        runner = new $$AnimateRunner({
          end: endFn,
          cancel: cancelFn
        });

        // should flush the cache animation
        waitUntilQuiet(noop);
        close();

        return {
          $$willAnimate: false,
          start: function() {
            return runner;
          },
          end: endFn
        };
      }

      function onAnimationProgress(event) {
        event.stopPropagation();
        var ev = event.originalEvent || event;

        // we now always use `Date.now()` due to the recent changes with
        // event.timeStamp in Firefox, Webkit and Chrome (see #13494 for more info)
        var timeStamp = ev.$manualTimeStamp || Date.now();

        /* Firefox (or possibly just Gecko) likes to not round values up
         * when a ms measurement is used for the animation */
        var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

        /* $manualTimeStamp is a mocked timeStamp value which is set
         * within browserTrigger(). This is only here so that tests can
         * mock animations properly. Real events fallback to event.timeStamp,
         * or, if they don't, then a timeStamp is automatically created for them.
         * We're checking to see if the timeStamp surpasses the expected delay,
         * but we're using elapsedTime instead of the timeStamp on the 2nd
         * pre-condition since animationPauseds sometimes close off early */
        if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
          // we set this flag to ensure that if the transition is paused then, when resumed,
          // the animation will automatically close itself since transitions cannot be paused.
          animationCompleted = true;
          close();
        }
      }

      function start() {
        if (animationClosed) return;
        if (!node.parentNode) {
          close();
          return;
        }

        // even though we only pause keyframe animations here the pause flag
        // will still happen when transitions are used. Only the transition will
        // not be paused since that is not possible. If the animation ends when
        // paused then it will not complete until unpaused or cancelled.
        var playPause = function(playAnimation) {
          if (!animationCompleted) {
            animationPaused = !playAnimation;
            if (timings.animationDuration) {
              var value = blockKeyframeAnimations(node, animationPaused);
              if (animationPaused) {
                temporaryStyles.push(value);
              } else {
                removeFromArray(temporaryStyles, value);
              }
            }
          } else if (animationPaused && playAnimation) {
            animationPaused = false;
            close();
          }
        };

        // checking the stagger duration prevents an accidentally cascade of the CSS delay style
        // being inherited from the parent. If the transition duration is zero then we can safely
        // rely that the delay value is an intentional stagger delay style.
        var maxStagger = itemIndex > 0
                         && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
                            (timings.animationDuration && stagger.animationDuration === 0))
                         && Math.max(stagger.animationDelay, stagger.transitionDelay);
        if (maxStagger) {
          $timeout(triggerAnimationStart,
                   Math.floor(maxStagger * itemIndex * ONE_SECOND),
                   false);
        } else {
          triggerAnimationStart();
        }

        // this will decorate the existing promise runner with pause/resume methods
        runnerHost.resume = function() {
          playPause(true);
        };

        runnerHost.pause = function() {
          playPause(false);
        };

        function triggerAnimationStart() {
          // just incase a stagger animation kicks in when the animation
          // itself was cancelled entirely
          if (animationClosed) return;

          applyBlocking(false);

          forEach(temporaryStyles, function(entry) {
            var key = entry[0];
            var value = entry[1];
            node.style[key] = value;
          });

          applyAnimationClasses(element, options);
          $$jqLite.addClass(element, activeClasses);

          if (flags.recalculateTimingStyles) {
            fullClassName = node.getAttribute('class') + ' ' + preparationClasses;
            cacheKey = gcsHashFn(node, fullClassName);

            timings = computeTimings(node, fullClassName, cacheKey);
            relativeDelay = timings.maxDelay;
            maxDelay = Math.max(relativeDelay, 0);
            maxDuration = timings.maxDuration;

            if (maxDuration === 0) {
              close();
              return;
            }

            flags.hasTransitions = timings.transitionDuration > 0;
            flags.hasAnimations = timings.animationDuration > 0;
          }

          if (flags.applyAnimationDelay) {
            relativeDelay = typeof options.delay !== 'boolean' && truthyTimingValue(options.delay)
                  ? parseFloat(options.delay)
                  : relativeDelay;

            maxDelay = Math.max(relativeDelay, 0);
            timings.animationDelay = relativeDelay;
            delayStyle = getCssDelayStyle(relativeDelay, true);
            temporaryStyles.push(delayStyle);
            node.style[delayStyle[0]] = delayStyle[1];
          }

          maxDelayTime = maxDelay * ONE_SECOND;
          maxDurationTime = maxDuration * ONE_SECOND;

          if (options.easing) {
            var easeProp, easeVal = options.easing;
            if (flags.hasTransitions) {
              easeProp = TRANSITION_PROP + TIMING_KEY;
              temporaryStyles.push([easeProp, easeVal]);
              node.style[easeProp] = easeVal;
            }
            if (flags.hasAnimations) {
              easeProp = ANIMATION_PROP + TIMING_KEY;
              temporaryStyles.push([easeProp, easeVal]);
              node.style[easeProp] = easeVal;
            }
          }

          if (timings.transitionDuration) {
            events.push(TRANSITIONEND_EVENT);
          }

          if (timings.animationDuration) {
            events.push(ANIMATIONEND_EVENT);
          }

          startTime = Date.now();
          var timerTime = maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime;
          var endTime = startTime + timerTime;

          var animationsData = element.data(ANIMATE_TIMER_KEY) || [];
          var setupFallbackTimer = true;
          if (animationsData.length) {
            var currentTimerData = animationsData[0];
            setupFallbackTimer = endTime > currentTimerData.expectedEndTime;
            if (setupFallbackTimer) {
              $timeout.cancel(currentTimerData.timer);
            } else {
              animationsData.push(close);
            }
          }

          if (setupFallbackTimer) {
            var timer = $timeout(onAnimationExpired, timerTime, false);
            animationsData[0] = {
              timer: timer,
              expectedEndTime: endTime
            };
            animationsData.push(close);
            element.data(ANIMATE_TIMER_KEY, animationsData);
          }

          if (events.length) {
            element.on(events.join(' '), onAnimationProgress);
          }

          if (options.to) {
            if (options.cleanupStyles) {
              registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
            }
            applyAnimationToStyles(element, options);
          }
        }

        function onAnimationExpired() {
          var animationsData = element.data(ANIMATE_TIMER_KEY);

          // this will be false in the event that the element was
          // removed from the DOM (via a leave animation or something
          // similar)
          if (animationsData) {
            for (var i = 1; i < animationsData.length; i++) {
              animationsData[i]();
            }
            element.removeData(ANIMATE_TIMER_KEY);
          }
        }
      }
    };
  }];
}];

var $$AnimateCssDriverProvider = ['$$animationProvider', /** @this */ function($$animationProvider) {
  $$animationProvider.drivers.push('$$animateCssDriver');

  var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
  var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';

  var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
  var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';

  function isDocumentFragment(node) {
    return node.parentNode && node.parentNode.nodeType === 11;
  }

  this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document',
       function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $sniffer,   $$jqLite,   $document) {

    // only browsers that support these properties can render animations
    if (!$sniffer.animations && !$sniffer.transitions) return noop;

    var bodyNode = $document[0].body;
    var rootNode = getDomNode($rootElement);

    var rootBodyElement = jqLite(
      // this is to avoid using something that exists outside of the body
      // we also special case the doc fragment case because our unit test code
      // appends the $rootElement to the body after the app has been bootstrapped
      isDocumentFragment(rootNode) || bodyNode.contains(rootNode) ? rootNode : bodyNode
    );

    return function initDriverFn(animationDetails) {
      return animationDetails.from && animationDetails.to
          ? prepareFromToAnchorAnimation(animationDetails.from,
                                         animationDetails.to,
                                         animationDetails.classes,
                                         animationDetails.anchors)
          : prepareRegularAnimation(animationDetails);
    };

    function filterCssClasses(classes) {
      //remove all the `ng-` stuff
      return classes.replace(/\bng-\S+\b/g, '');
    }

    function getUniqueValues(a, b) {
      if (isString(a)) a = a.split(' ');
      if (isString(b)) b = b.split(' ');
      return a.filter(function(val) {
        return b.indexOf(val) === -1;
      }).join(' ');
    }

    function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
      var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
      var startingClasses = filterCssClasses(getClassVal(clone));

      outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
      inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);

      clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);

      rootBodyElement.append(clone);

      var animatorIn, animatorOut = prepareOutAnimation();

      // the user may not end up using the `out` animation and
      // only making use of the `in` animation or vice-versa.
      // In either case we should allow this and not assume the
      // animation is over unless both animations are not used.
      if (!animatorOut) {
        animatorIn = prepareInAnimation();
        if (!animatorIn) {
          return end();
        }
      }

      var startingAnimator = animatorOut || animatorIn;

      return {
        start: function() {
          var runner;

          var currentAnimation = startingAnimator.start();
          currentAnimation.done(function() {
            currentAnimation = null;
            if (!animatorIn) {
              animatorIn = prepareInAnimation();
              if (animatorIn) {
                currentAnimation = animatorIn.start();
                currentAnimation.done(function() {
                  currentAnimation = null;
                  end();
                  runner.complete();
                });
                return currentAnimation;
              }
            }
            // in the event that there is no `in` animation
            end();
            runner.complete();
          });

          runner = new $$AnimateRunner({
            end: endFn,
            cancel: endFn
          });

          return runner;

          function endFn() {
            if (currentAnimation) {
              currentAnimation.end();
            }
          }
        }
      };

      function calculateAnchorStyles(anchor) {
        var styles = {};

        var coords = getDomNode(anchor).getBoundingClientRect();

        // we iterate directly since safari messes up and doesn't return
        // all the keys for the coords object when iterated
        forEach(['width','height','top','left'], function(key) {
          var value = coords[key];
          switch (key) {
            case 'top':
              value += bodyNode.scrollTop;
              break;
            case 'left':
              value += bodyNode.scrollLeft;
              break;
          }
          styles[key] = Math.floor(value) + 'px';
        });
        return styles;
      }

      function prepareOutAnimation() {
        var animator = $animateCss(clone, {
          addClass: NG_OUT_ANCHOR_CLASS_NAME,
          delay: true,
          from: calculateAnchorStyles(outAnchor)
        });

        // read the comment within `prepareRegularAnimation` to understand
        // why this check is necessary
        return animator.$$willAnimate ? animator : null;
      }

      function getClassVal(element) {
        return element.attr('class') || '';
      }

      function prepareInAnimation() {
        var endingClasses = filterCssClasses(getClassVal(inAnchor));
        var toAdd = getUniqueValues(endingClasses, startingClasses);
        var toRemove = getUniqueValues(startingClasses, endingClasses);

        var animator = $animateCss(clone, {
          to: calculateAnchorStyles(inAnchor),
          addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
          removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
          delay: true
        });

        // read the comment within `prepareRegularAnimation` to understand
        // why this check is necessary
        return animator.$$willAnimate ? animator : null;
      }

      function end() {
        clone.remove();
        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
      }
    }

    function prepareFromToAnchorAnimation(from, to, classes, anchors) {
      var fromAnimation = prepareRegularAnimation(from, noop);
      var toAnimation = prepareRegularAnimation(to, noop);

      var anchorAnimations = [];
      forEach(anchors, function(anchor) {
        var outElement = anchor['out'];
        var inElement = anchor['in'];
        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
        if (animator) {
          anchorAnimations.push(animator);
        }
      });

      // no point in doing anything when there are no elements to animate
      if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;

      return {
        start: function() {
          var animationRunners = [];

          if (fromAnimation) {
            animationRunners.push(fromAnimation.start());
          }

          if (toAnimation) {
            animationRunners.push(toAnimation.start());
          }

          forEach(anchorAnimations, function(animation) {
            animationRunners.push(animation.start());
          });

          var runner = new $$AnimateRunner({
            end: endFn,
            cancel: endFn // CSS-driven animations cannot be cancelled, only ended
          });

          $$AnimateRunner.all(animationRunners, function(status) {
            runner.complete(status);
          });

          return runner;

          function endFn() {
            forEach(animationRunners, function(runner) {
              runner.end();
            });
          }
        }
      };
    }

    function prepareRegularAnimation(animationDetails) {
      var element = animationDetails.element;
      var options = animationDetails.options || {};

      if (animationDetails.structural) {
        options.event = animationDetails.event;
        options.structural = true;
        options.applyClassesEarly = true;

        // we special case the leave animation since we want to ensure that
        // the element is removed as soon as the animation is over. Otherwise
        // a flicker might appear or the element may not be removed at all
        if (animationDetails.event === 'leave') {
          options.onDone = options.domOperation;
        }
      }

      // We assign the preparationClasses as the actual animation event since
      // the internals of $animateCss will just suffix the event token values
      // with `-active` to trigger the animation.
      if (options.preparationClasses) {
        options.event = concatWithSpace(options.event, options.preparationClasses);
      }

      var animator = $animateCss(element, options);

      // the driver lookup code inside of $$animation attempts to spawn a
      // driver one by one until a driver returns a.$$willAnimate animator object.
      // $animateCss will always return an object, however, it will pass in
      // a flag as a hint as to whether an animation was detected or not
      return animator.$$willAnimate ? animator : null;
    }
  }];
}];

// TODO(matsko): use caching here to speed things up for detection
// TODO(matsko): add documentation
//  by the time...

var $$AnimateJsProvider = ['$animateProvider', /** @this */ function($animateProvider) {
  this.$get = ['$injector', '$$AnimateRunner', '$$jqLite',
       function($injector,   $$AnimateRunner,   $$jqLite) {

    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
         // $animateJs(element, 'enter');
    return function(element, event, classes, options) {
      var animationClosed = false;

      // the `classes` argument is optional and if it is not used
      // then the classes will be resolved from the element's className
      // property as well as options.addClass/options.removeClass.
      if (arguments.length === 3 && isObject(classes)) {
        options = classes;
        classes = null;
      }

      options = prepareAnimationOptions(options);
      if (!classes) {
        classes = element.attr('class') || '';
        if (options.addClass) {
          classes += ' ' + options.addClass;
        }
        if (options.removeClass) {
          classes += ' ' + options.removeClass;
        }
      }

      var classesToAdd = options.addClass;
      var classesToRemove = options.removeClass;

      // the lookupAnimations function returns a series of animation objects that are
      // matched up with one or more of the CSS classes. These animation objects are
      // defined via the module.animation factory function. If nothing is detected then
      // we don't return anything which then makes $animation query the next driver.
      var animations = lookupAnimations(classes);
      var before, after;
      if (animations.length) {
        var afterFn, beforeFn;
        if (event === 'leave') {
          beforeFn = 'leave';
          afterFn = 'afterLeave'; // TODO(matsko): get rid of this
        } else {
          beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
          afterFn = event;
        }

        if (event !== 'enter' && event !== 'move') {
          before = packageAnimations(element, event, options, animations, beforeFn);
        }
        after  = packageAnimations(element, event, options, animations, afterFn);
      }

      // no matching animations
      if (!before && !after) return;

      function applyOptions() {
        options.domOperation();
        applyAnimationClasses(element, options);
      }

      function close() {
        animationClosed = true;
        applyOptions();
        applyAnimationStyles(element, options);
      }

      var runner;

      return {
        $$willAnimate: true,
        end: function() {
          if (runner) {
            runner.end();
          } else {
            close();
            runner = new $$AnimateRunner();
            runner.complete(true);
          }
          return runner;
        },
        start: function() {
          if (runner) {
            return runner;
          }

          runner = new $$AnimateRunner();
          var closeActiveAnimations;
          var chain = [];

          if (before) {
            chain.push(function(fn) {
              closeActiveAnimations = before(fn);
            });
          }

          if (chain.length) {
            chain.push(function(fn) {
              applyOptions();
              fn(true);
            });
          } else {
            applyOptions();
          }

          if (after) {
            chain.push(function(fn) {
              closeActiveAnimations = after(fn);
            });
          }

          runner.setHost({
            end: function() {
              endAnimations();
            },
            cancel: function() {
              endAnimations(true);
            }
          });

          $$AnimateRunner.chain(chain, onComplete);
          return runner;

          function onComplete(success) {
            close(success);
            runner.complete(success);
          }

          function endAnimations(cancelled) {
            if (!animationClosed) {
              (closeActiveAnimations || noop)(cancelled);
              onComplete(cancelled);
            }
          }
        }
      };

      function executeAnimationFn(fn, element, event, options, onDone) {
        var args;
        switch (event) {
          case 'animate':
            args = [element, options.from, options.to, onDone];
            break;

          case 'setClass':
            args = [element, classesToAdd, classesToRemove, onDone];
            break;

          case 'addClass':
            args = [element, classesToAdd, onDone];
            break;

          case 'removeClass':
            args = [element, classesToRemove, onDone];
            break;

          default:
            args = [element, onDone];
            break;
        }

        args.push(options);

        var value = fn.apply(fn, args);
        if (value) {
          if (isFunction(value.start)) {
            value = value.start();
          }

          if (value instanceof $$AnimateRunner) {
            value.done(onDone);
          } else if (isFunction(value)) {
            // optional onEnd / onCancel callback
            return value;
          }
        }

        return noop;
      }

      function groupEventedAnimations(element, event, options, animations, fnName) {
        var operations = [];
        forEach(animations, function(ani) {
          var animation = ani[fnName];
          if (!animation) return;

          // note that all of these animations will run in parallel
          operations.push(function() {
            var runner;
            var endProgressCb;

            var resolved = false;
            var onAnimationComplete = function(rejected) {
              if (!resolved) {
                resolved = true;
                (endProgressCb || noop)(rejected);
                runner.complete(!rejected);
              }
            };

            runner = new $$AnimateRunner({
              end: function() {
                onAnimationComplete();
              },
              cancel: function() {
                onAnimationComplete(true);
              }
            });

            endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
              var cancelled = result === false;
              onAnimationComplete(cancelled);
            });

            return runner;
          });
        });

        return operations;
      }

      function packageAnimations(element, event, options, animations, fnName) {
        var operations = groupEventedAnimations(element, event, options, animations, fnName);
        if (operations.length === 0) {
          var a, b;
          if (fnName === 'beforeSetClass') {
            a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
            b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
          } else if (fnName === 'setClass') {
            a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
            b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
          }

          if (a) {
            operations = operations.concat(a);
          }
          if (b) {
            operations = operations.concat(b);
          }
        }

        if (operations.length === 0) return;

        // TODO(matsko): add documentation
        return function startAnimation(callback) {
          var runners = [];
          if (operations.length) {
            forEach(operations, function(animateFn) {
              runners.push(animateFn());
            });
          }

          if (runners.length) {
            $$AnimateRunner.all(runners, callback);
          }  else {
            callback();
          }

          return function endFn(reject) {
            forEach(runners, function(runner) {
              if (reject) {
                runner.cancel();
              } else {
                runner.end();
              }
            });
          };
        };
      }
    };

    function lookupAnimations(classes) {
      classes = isArray(classes) ? classes : classes.split(' ');
      var matches = [], flagMap = {};
      for (var i = 0; i < classes.length; i++) {
        var klass = classes[i],
            animationFactory = $animateProvider.$$registeredAnimations[klass];
        if (animationFactory && !flagMap[klass]) {
          matches.push($injector.get(animationFactory));
          flagMap[klass] = true;
        }
      }
      return matches;
    }
  }];
}];

var $$AnimateJsDriverProvider = ['$$animationProvider', /** @this */ function($$animationProvider) {
  $$animationProvider.drivers.push('$$animateJsDriver');
  this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
    return function initDriverFn(animationDetails) {
      if (animationDetails.from && animationDetails.to) {
        var fromAnimation = prepareAnimation(animationDetails.from);
        var toAnimation = prepareAnimation(animationDetails.to);
        if (!fromAnimation && !toAnimation) return;

        return {
          start: function() {
            var animationRunners = [];

            if (fromAnimation) {
              animationRunners.push(fromAnimation.start());
            }

            if (toAnimation) {
              animationRunners.push(toAnimation.start());
            }

            $$AnimateRunner.all(animationRunners, done);

            var runner = new $$AnimateRunner({
              end: endFnFactory(),
              cancel: endFnFactory()
            });

            return runner;

            function endFnFactory() {
              return function() {
                forEach(animationRunners, function(runner) {
                  // at this point we cannot cancel animations for groups just yet. 1.5+
                  runner.end();
                });
              };
            }

            function done(status) {
              runner.complete(status);
            }
          }
        };
      } else {
        return prepareAnimation(animationDetails);
      }
    };

    function prepareAnimation(animationDetails) {
      // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
      var element = animationDetails.element;
      var event = animationDetails.event;
      var options = animationDetails.options;
      var classes = animationDetails.classes;
      return $$animateJs(element, event, classes, options);
    }
  }];
}];

var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
var $$AnimateQueueProvider = ['$animateProvider', /** @this */ function($animateProvider) {
  var PRE_DIGEST_STATE = 1;
  var RUNNING_STATE = 2;
  var ONE_SPACE = ' ';

  var rules = this.rules = {
    skip: [],
    cancel: [],
    join: []
  };

  function makeTruthyCssClassMap(classString) {
    if (!classString) {
      return null;
    }

    var keys = classString.split(ONE_SPACE);
    var map = Object.create(null);

    forEach(keys, function(key) {
      map[key] = true;
    });
    return map;
  }

  function hasMatchingClasses(newClassString, currentClassString) {
    if (newClassString && currentClassString) {
      var currentClassMap = makeTruthyCssClassMap(currentClassString);
      return newClassString.split(ONE_SPACE).some(function(className) {
        return currentClassMap[className];
      });
    }
  }

  function isAllowed(ruleType, currentAnimation, previousAnimation) {
    return rules[ruleType].some(function(fn) {
      return fn(currentAnimation, previousAnimation);
    });
  }

  function hasAnimationClasses(animation, and) {
    var a = (animation.addClass || '').length > 0;
    var b = (animation.removeClass || '').length > 0;
    return and ? a && b : a || b;
  }

  rules.join.push(function(newAnimation, currentAnimation) {
    // if the new animation is class-based then we can just tack that on
    return !newAnimation.structural && hasAnimationClasses(newAnimation);
  });

  rules.skip.push(function(newAnimation, currentAnimation) {
    // there is no need to animate anything if no classes are being added and
    // there is no structural animation that will be triggered
    return !newAnimation.structural && !hasAnimationClasses(newAnimation);
  });

  rules.skip.push(function(newAnimation, currentAnimation) {
    // why should we trigger a new structural animation if the element will
    // be removed from the DOM anyway?
    return currentAnimation.event === 'leave' && newAnimation.structural;
  });

  rules.skip.push(function(newAnimation, currentAnimation) {
    // if there is an ongoing current animation then don't even bother running the class-based animation
    return currentAnimation.structural && currentAnimation.state === RUNNING_STATE && !newAnimation.structural;
  });

  rules.cancel.push(function(newAnimation, currentAnimation) {
    // there can never be two structural animations running at the same time
    return currentAnimation.structural && newAnimation.structural;
  });

  rules.cancel.push(function(newAnimation, currentAnimation) {
    // if the previous animation is already running, but the new animation will
    // be triggered, but the new animation is structural
    return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
  });

  rules.cancel.push(function(newAnimation, currentAnimation) {
    // cancel the animation if classes added / removed in both animation cancel each other out,
    // but only if the current animation isn't structural

    if (currentAnimation.structural) return false;

    var nA = newAnimation.addClass;
    var nR = newAnimation.removeClass;
    var cA = currentAnimation.addClass;
    var cR = currentAnimation.removeClass;

    // early detection to save the global CPU shortage :)
    if ((isUndefined(nA) && isUndefined(nR)) || (isUndefined(cA) && isUndefined(cR))) {
      return false;
    }

    return hasMatchingClasses(nA, cR) || hasMatchingClasses(nR, cA);
  });

  this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$Map',
               '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow',
               '$$isDocumentHidden',
       function($$rAF,   $rootScope,   $rootElement,   $document,   $$Map,
                $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite,   $$forceReflow,
                $$isDocumentHidden) {

    var activeAnimationsLookup = new $$Map();
    var disabledElementsLookup = new $$Map();
    var animationsEnabled = null;

    function postDigestTaskFactory() {
      var postDigestCalled = false;
      return function(fn) {
        // we only issue a call to postDigest before
        // it has first passed. This prevents any callbacks
        // from not firing once the animation has completed
        // since it will be out of the digest cycle.
        if (postDigestCalled) {
          fn();
        } else {
          $rootScope.$$postDigest(function() {
            postDigestCalled = true;
            fn();
          });
        }
      };
    }

    // Wait until all directive and route-related templates are downloaded and
    // compiled. The $templateRequest.totalPendingRequests variable keeps track of
    // all of the remote templates being currently downloaded. If there are no
    // templates currently downloading then the watcher will still fire anyway.
    var deregisterWatch = $rootScope.$watch(
      function() { return $templateRequest.totalPendingRequests === 0; },
      function(isEmpty) {
        if (!isEmpty) return;
        deregisterWatch();

        // Now that all templates have been downloaded, $animate will wait until
        // the post digest queue is empty before enabling animations. By having two
        // calls to $postDigest calls we can ensure that the flag is enabled at the
        // very end of the post digest queue. Since all of the animations in $animate
        // use $postDigest, it's important that the code below executes at the end.
        // This basically means that the page is fully downloaded and compiled before
        // any animations are triggered.
        $rootScope.$$postDigest(function() {
          $rootScope.$$postDigest(function() {
            // we check for null directly in the event that the application already called
            // .enabled() with whatever arguments that it provided it with
            if (animationsEnabled === null) {
              animationsEnabled = true;
            }
          });
        });
      }
    );

    var callbackRegistry = Object.create(null);

    // remember that the classNameFilter is set during the provider/config
    // stage therefore we can optimize here and setup a helper function
    var classNameFilter = $animateProvider.classNameFilter();
    var isAnimatableClassName = !classNameFilter
              ? function() { return true; }
              : function(className) {
                return classNameFilter.test(className);
              };

    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

    function normalizeAnimationDetails(element, animation) {
      return mergeAnimationDetails(element, animation, {});
    }

    // IE9-11 has no method "contains" in SVG element and in Node.prototype. Bug #10259.
    var contains = window.Node.prototype.contains || /** @this */ function(arg) {
      // eslint-disable-next-line no-bitwise
      return this === arg || !!(this.compareDocumentPosition(arg) & 16);
    };

    function findCallbacks(targetParentNode, targetNode, event) {
      var matches = [];
      var entries = callbackRegistry[event];
      if (entries) {
        forEach(entries, function(entry) {
          if (contains.call(entry.node, targetNode)) {
            matches.push(entry.callback);
          } else if (event === 'leave' && contains.call(entry.node, targetParentNode)) {
            matches.push(entry.callback);
          }
        });
      }

      return matches;
    }

    function filterFromRegistry(list, matchContainer, matchCallback) {
      var containerNode = extractElementNode(matchContainer);
      return list.filter(function(entry) {
        var isMatch = entry.node === containerNode &&
                        (!matchCallback || entry.callback === matchCallback);
        return !isMatch;
      });
    }

    function cleanupEventListeners(phase, node) {
      if (phase === 'close' && !node.parentNode) {
        // If the element is not attached to a parentNode, it has been removed by
        // the domOperation, and we can safely remove the event callbacks
        $animate.off(node);
      }
    }

    var $animate = {
      on: function(event, container, callback) {
        var node = extractElementNode(container);
        callbackRegistry[event] = callbackRegistry[event] || [];
        callbackRegistry[event].push({
          node: node,
          callback: callback
        });

        // Remove the callback when the element is removed from the DOM
        jqLite(container).on('$destroy', function() {
          var animationDetails = activeAnimationsLookup.get(node);

          if (!animationDetails) {
            // If there's an animation ongoing, the callback calling code will remove
            // the event listeners. If we'd remove here, the callbacks would be removed
            // before the animation ends
            $animate.off(event, container, callback);
          }
        });
      },

      off: function(event, container, callback) {
        if (arguments.length === 1 && !isString(arguments[0])) {
          container = arguments[0];
          for (var eventType in callbackRegistry) {
            callbackRegistry[eventType] = filterFromRegistry(callbackRegistry[eventType], container);
          }

          return;
        }

        var entries = callbackRegistry[event];
        if (!entries) return;

        callbackRegistry[event] = arguments.length === 1
            ? null
            : filterFromRegistry(entries, container, callback);
      },

      pin: function(element, parentElement) {
        assertArg(isElement(element), 'element', 'not an element');
        assertArg(isElement(parentElement), 'parentElement', 'not an element');
        element.data(NG_ANIMATE_PIN_DATA, parentElement);
      },

      push: function(element, event, options, domOperation) {
        options = options || {};
        options.domOperation = domOperation;
        return queueAnimation(element, event, options);
      },

      // this method has four signatures:
      //  () - global getter
      //  (bool) - global setter
      //  (element) - element getter
      //  (element, bool) - element setter<F37>
      enabled: function(element, bool) {
        var argCount = arguments.length;

        if (argCount === 0) {
          // () - Global getter
          bool = !!animationsEnabled;
        } else {
          var hasElement = isElement(element);

          if (!hasElement) {
            // (bool) - Global setter
            bool = animationsEnabled = !!element;
          } else {
            var node = getDomNode(element);

            if (argCount === 1) {
              // (element) - Element getter
              bool = !disabledElementsLookup.get(node);
            } else {
              // (element, bool) - Element setter
              disabledElementsLookup.set(node, !bool);
            }
          }
        }

        return bool;
      }
    };

    return $animate;

    function queueAnimation(originalElement, event, initialOptions) {
      // we always make a copy of the options since
      // there should never be any side effects on
      // the input data when running `$animateCss`.
      var options = copy(initialOptions);

      var element = stripCommentsFromElement(originalElement);
      var node = getDomNode(element);
      var parentNode = node && node.parentNode;

      options = prepareAnimationOptions(options);

      // we create a fake runner with a working promise.
      // These methods will become available after the digest has passed
      var runner = new $$AnimateRunner();

      // this is used to trigger callbacks in postDigest mode
      var runInNextPostDigestOrNow = postDigestTaskFactory();

      if (isArray(options.addClass)) {
        options.addClass = options.addClass.join(' ');
      }

      if (options.addClass && !isString(options.addClass)) {
        options.addClass = null;
      }

      if (isArray(options.removeClass)) {
        options.removeClass = options.removeClass.join(' ');
      }

      if (options.removeClass && !isString(options.removeClass)) {
        options.removeClass = null;
      }

      if (options.from && !isObject(options.from)) {
        options.from = null;
      }

      if (options.to && !isObject(options.to)) {
        options.to = null;
      }

      // there are situations where a directive issues an animation for
      // a jqLite wrapper that contains only comment nodes... If this
      // happens then there is no way we can perform an animation
      if (!node) {
        close();
        return runner;
      }

      var className = [node.getAttribute('class'), options.addClass, options.removeClass].join(' ');
      if (!isAnimatableClassName(className)) {
        close();
        return runner;
      }

      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

      var documentHidden = $$isDocumentHidden();

      // this is a hard disable of all animations for the application or on
      // the element itself, therefore  there is no need to continue further
      // past this point if not enabled
      // Animations are also disabled if the document is currently hidden (page is not visible
      // to the user), because browsers slow down or do not flush calls to requestAnimationFrame
      var skipAnimations = !animationsEnabled || documentHidden || disabledElementsLookup.get(node);
      var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
      var hasExistingAnimation = !!existingAnimation.state;

      // there is no point in traversing the same collection of parent ancestors if a followup
      // animation will be run on the same element that already did all that checking work
      if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state !== PRE_DIGEST_STATE)) {
        skipAnimations = !areAnimationsAllowed(node, parentNode, event);
      }

      if (skipAnimations) {
        // Callbacks should fire even if the document is hidden (regression fix for issue #14120)
        if (documentHidden) notifyProgress(runner, event, 'start');
        close();
        if (documentHidden) notifyProgress(runner, event, 'close');
        return runner;
      }

      if (isStructural) {
        closeChildAnimations(node);
      }

      var newAnimation = {
        structural: isStructural,
        element: element,
        event: event,
        addClass: options.addClass,
        removeClass: options.removeClass,
        close: close,
        options: options,
        runner: runner
      };

      if (hasExistingAnimation) {
        var skipAnimationFlag = isAllowed('skip', newAnimation, existingAnimation);
        if (skipAnimationFlag) {
          if (existingAnimation.state === RUNNING_STATE) {
            close();
            return runner;
          } else {
            mergeAnimationDetails(element, existingAnimation, newAnimation);
            return existingAnimation.runner;
          }
        }
        var cancelAnimationFlag = isAllowed('cancel', newAnimation, existingAnimation);
        if (cancelAnimationFlag) {
          if (existingAnimation.state === RUNNING_STATE) {
            // this will end the animation right away and it is safe
            // to do so since the animation is already running and the
            // runner callback code will run in async
            existingAnimation.runner.end();
          } else if (existingAnimation.structural) {
            // this means that the animation is queued into a digest, but
            // hasn't started yet. Therefore it is safe to run the close
            // method which will call the runner methods in async.
            existingAnimation.close();
          } else {
            // this will merge the new animation options into existing animation options
            mergeAnimationDetails(element, existingAnimation, newAnimation);

            return existingAnimation.runner;
          }
        } else {
          // a joined animation means that this animation will take over the existing one
          // so an example would involve a leave animation taking over an enter. Then when
          // the postDigest kicks in the enter will be ignored.
          var joinAnimationFlag = isAllowed('join', newAnimation, existingAnimation);
          if (joinAnimationFlag) {
            if (existingAnimation.state === RUNNING_STATE) {
              normalizeAnimationDetails(element, newAnimation);
            } else {
              applyGeneratedPreparationClasses(element, isStructural ? event : null, options);

              event = newAnimation.event = existingAnimation.event;
              options = mergeAnimationDetails(element, existingAnimation, newAnimation);

              //we return the same runner since only the option values of this animation will
              //be fed into the `existingAnimation`.
              return existingAnimation.runner;
            }
          }
        }
      } else {
        // normalization in this case means that it removes redundant CSS classes that
        // already exist (addClass) or do not exist (removeClass) on the element
        normalizeAnimationDetails(element, newAnimation);
      }

      // when the options are merged and cleaned up we may end up not having to do
      // an animation at all, therefore we should check this before issuing a post
      // digest callback. Structural animations will always run no matter what.
      var isValidAnimation = newAnimation.structural;
      if (!isValidAnimation) {
        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
                            || hasAnimationClasses(newAnimation);
      }

      if (!isValidAnimation) {
        close();
        clearElementAnimationState(node);
        return runner;
      }

      // the counter keeps track of cancelled animations
      var counter = (existingAnimation.counter || 0) + 1;
      newAnimation.counter = counter;

      markElementAnimationState(node, PRE_DIGEST_STATE, newAnimation);

      $rootScope.$$postDigest(function() {
        // It is possible that the DOM nodes inside `originalElement` have been replaced. This can
        // happen if the animated element is a transcluded clone and also has a `templateUrl`
        // directive on it. Therefore, we must recreate `element` in order to interact with the
        // actual DOM nodes.
        // Note: We still need to use the old `node` for certain things, such as looking up in
        //       HashMaps where it was used as the key.

        element = stripCommentsFromElement(originalElement);

        var animationDetails = activeAnimationsLookup.get(node);
        var animationCancelled = !animationDetails;
        animationDetails = animationDetails || {};

        // if addClass/removeClass is called before something like enter then the
        // registered parent element may not be present. The code below will ensure
        // that a final value for parent element is obtained
        var parentElement = element.parent() || [];

        // animate/structural/class-based animations all have requirements. Otherwise there
        // is no point in performing an animation. The parent node must also be set.
        var isValidAnimation = parentElement.length > 0
                                && (animationDetails.event === 'animate'
                                    || animationDetails.structural
                                    || hasAnimationClasses(animationDetails));

        // this means that the previous animation was cancelled
        // even if the follow-up animation is the same event
        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
          // if another animation did not take over then we need
          // to make sure that the domOperation and options are
          // handled accordingly
          if (animationCancelled) {
            applyAnimationClasses(element, options);
            applyAnimationStyles(element, options);
          }

          // if the event changed from something like enter to leave then we do
          // it, otherwise if it's the same then the end result will be the same too
          if (animationCancelled || (isStructural && animationDetails.event !== event)) {
            options.domOperation();
            runner.end();
          }

          // in the event that the element animation was not cancelled or a follow-up animation
          // isn't allowed to animate from here then we need to clear the state of the element
          // so that any future animations won't read the expired animation data.
          if (!isValidAnimation) {
            clearElementAnimationState(node);
          }

          return;
        }

        // this combined multiple class to addClass / removeClass into a setClass event
        // so long as a structural event did not take over the animation
        event = !animationDetails.structural && hasAnimationClasses(animationDetails, true)
            ? 'setClass'
            : animationDetails.event;

        markElementAnimationState(node, RUNNING_STATE);
        var realRunner = $$animation(element, event, animationDetails.options);

        // this will update the runner's flow-control events based on
        // the `realRunner` object.
        runner.setHost(realRunner);
        notifyProgress(runner, event, 'start', {});

        realRunner.done(function(status) {
          close(!status);
          var animationDetails = activeAnimationsLookup.get(node);
          if (animationDetails && animationDetails.counter === counter) {
            clearElementAnimationState(node);
          }
          notifyProgress(runner, event, 'close', {});
        });
      });

      return runner;

      function notifyProgress(runner, event, phase, data) {
        runInNextPostDigestOrNow(function() {
          var callbacks = findCallbacks(parentNode, node, event);
          if (callbacks.length) {
            // do not optimize this call here to RAF because
            // we don't know how heavy the callback code here will
            // be and if this code is buffered then this can
            // lead to a performance regression.
            $$rAF(function() {
              forEach(callbacks, function(callback) {
                callback(element, phase, data);
              });
              cleanupEventListeners(phase, node);
            });
          } else {
            cleanupEventListeners(phase, node);
          }
        });
        runner.progress(event, phase, data);
      }

      function close(reject) {
        clearGeneratedClasses(element, options);
        applyAnimationClasses(element, options);
        applyAnimationStyles(element, options);
        options.domOperation();
        runner.complete(!reject);
      }
    }

    function closeChildAnimations(node) {
      var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
      forEach(children, function(child) {
        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME), 10);
        var animationDetails = activeAnimationsLookup.get(child);
        if (animationDetails) {
          switch (state) {
            case RUNNING_STATE:
              animationDetails.runner.end();
              /* falls through */
            case PRE_DIGEST_STATE:
              activeAnimationsLookup.delete(child);
              break;
          }
        }
      });
    }

    function clearElementAnimationState(node) {
      node.removeAttribute(NG_ANIMATE_ATTR_NAME);
      activeAnimationsLookup.delete(node);
    }

    /**
     * This fn returns false if any of the following is true:
     * a) animations on any parent element are disabled, and animations on the element aren't explicitly allowed
     * b) a parent element has an ongoing structural animation, and animateChildren is false
     * c) the element is not a child of the body
     * d) the element is not a child of the $rootElement
     */
    function areAnimationsAllowed(node, parentNode, event) {
      var bodyNode = $document[0].body;
      var rootNode = getDomNode($rootElement);

      var bodyNodeDetected = (node === bodyNode) || node.nodeName === 'HTML';
      var rootNodeDetected = (node === rootNode);
      var parentAnimationDetected = false;
      var elementDisabled = disabledElementsLookup.get(node);
      var animateChildren;

      var parentHost = jqLite.data(node, NG_ANIMATE_PIN_DATA);
      if (parentHost) {
        parentNode = getDomNode(parentHost);
      }

      while (parentNode) {
        if (!rootNodeDetected) {
          // angular doesn't want to attempt to animate elements outside of the application
          // therefore we need to ensure that the rootElement is an ancestor of the current element
          rootNodeDetected = (parentNode === rootNode);
        }

        if (parentNode.nodeType !== ELEMENT_NODE) {
          // no point in inspecting the #document element
          break;
        }

        var details = activeAnimationsLookup.get(parentNode) || {};
        // either an enter, leave or move animation will commence
        // therefore we can't allow any animations to take place
        // but if a parent animation is class-based then that's ok
        if (!parentAnimationDetected) {
          var parentNodeDisabled = disabledElementsLookup.get(parentNode);

          if (parentNodeDisabled === true && elementDisabled !== false) {
            // disable animations if the user hasn't explicitly enabled animations on the
            // current element
            elementDisabled = true;
            // element is disabled via parent element, no need to check anything else
            break;
          } else if (parentNodeDisabled === false) {
            elementDisabled = false;
          }
          parentAnimationDetected = details.structural;
        }

        if (isUndefined(animateChildren) || animateChildren === true) {
          var value = jqLite.data(parentNode, NG_ANIMATE_CHILDREN_DATA);
          if (isDefined(value)) {
            animateChildren = value;
          }
        }

        // there is no need to continue traversing at this point
        if (parentAnimationDetected && animateChildren === false) break;

        if (!bodyNodeDetected) {
          // we also need to ensure that the element is or will be a part of the body element
          // otherwise it is pointless to even issue an animation to be rendered
          bodyNodeDetected = (parentNode === bodyNode);
        }

        if (bodyNodeDetected && rootNodeDetected) {
          // If both body and root have been found, any other checks are pointless,
          // as no animation data should live outside the application
          break;
        }

        if (!rootNodeDetected) {
          // If `rootNode` is not detected, check if `parentNode` is pinned to another element
          parentHost = jqLite.data(parentNode, NG_ANIMATE_PIN_DATA);
          if (parentHost) {
            // The pin target element becomes the next parent element
            parentNode = getDomNode(parentHost);
            continue;
          }
        }

        parentNode = parentNode.parentNode;
      }

      var allowAnimation = (!parentAnimationDetected || animateChildren) && elementDisabled !== true;
      return allowAnimation && rootNodeDetected && bodyNodeDetected;
    }

    function markElementAnimationState(node, state, details) {
      details = details || {};
      details.state = state;

      node.setAttribute(NG_ANIMATE_ATTR_NAME, state);

      var oldValue = activeAnimationsLookup.get(node);
      var newValue = oldValue
          ? extend(oldValue, details)
          : details;
      activeAnimationsLookup.set(node, newValue);
    }
  }];
}];

/* exported $$AnimationProvider */

var $$AnimationProvider = ['$animateProvider', /** @this */ function($animateProvider) {
  var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';

  var drivers = this.drivers = [];

  var RUNNER_STORAGE_KEY = '$$animationRunner';

  function setRunner(element, runner) {
    element.data(RUNNER_STORAGE_KEY, runner);
  }

  function removeRunner(element) {
    element.removeData(RUNNER_STORAGE_KEY);
  }

  function getRunner(element) {
    return element.data(RUNNER_STORAGE_KEY);
  }

  this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$Map', '$$rAFScheduler',
       function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$Map,   $$rAFScheduler) {

    var animationQueue = [];
    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

    function sortAnimations(animations) {
      var tree = { children: [] };
      var i, lookup = new $$Map();

      // this is done first beforehand so that the map
      // is filled with a list of the elements that will be animated
      for (i = 0; i < animations.length; i++) {
        var animation = animations[i];
        lookup.set(animation.domNode, animations[i] = {
          domNode: animation.domNode,
          fn: animation.fn,
          children: []
        });
      }

      for (i = 0; i < animations.length; i++) {
        processNode(animations[i]);
      }

      return flatten(tree);

      function processNode(entry) {
        if (entry.processed) return entry;
        entry.processed = true;

        var elementNode = entry.domNode;
        var parentNode = elementNode.parentNode;
        lookup.set(elementNode, entry);

        var parentEntry;
        while (parentNode) {
          parentEntry = lookup.get(parentNode);
          if (parentEntry) {
            if (!parentEntry.processed) {
              parentEntry = processNode(parentEntry);
            }
            break;
          }
          parentNode = parentNode.parentNode;
        }

        (parentEntry || tree).children.push(entry);
        return entry;
      }

      function flatten(tree) {
        var result = [];
        var queue = [];
        var i;

        for (i = 0; i < tree.children.length; i++) {
          queue.push(tree.children[i]);
        }

        var remainingLevelEntries = queue.length;
        var nextLevelEntries = 0;
        var row = [];

        for (i = 0; i < queue.length; i++) {
          var entry = queue[i];
          if (remainingLevelEntries <= 0) {
            remainingLevelEntries = nextLevelEntries;
            nextLevelEntries = 0;
            result.push(row);
            row = [];
          }
          row.push(entry.fn);
          entry.children.forEach(function(childEntry) {
            nextLevelEntries++;
            queue.push(childEntry);
          });
          remainingLevelEntries--;
        }

        if (row.length) {
          result.push(row);
        }

        return result;
      }
    }

    // TODO(matsko): document the signature in a better way
    return function(element, event, options) {
      options = prepareAnimationOptions(options);
      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

      // there is no animation at the current moment, however
      // these runner methods will get later updated with the
      // methods leading into the driver's end/cancel methods
      // for now they just stop the animation from starting
      var runner = new $$AnimateRunner({
        end: function() { close(); },
        cancel: function() { close(true); }
      });

      if (!drivers.length) {
        close();
        return runner;
      }

      setRunner(element, runner);

      var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
      var tempClasses = options.tempClasses;
      if (tempClasses) {
        classes += ' ' + tempClasses;
        options.tempClasses = null;
      }

      var prepareClassName;
      if (isStructural) {
        prepareClassName = 'ng-' + event + PREPARE_CLASS_SUFFIX;
        $$jqLite.addClass(element, prepareClassName);
      }

      animationQueue.push({
        // this data is used by the postDigest code and passed into
        // the driver step function
        element: element,
        classes: classes,
        event: event,
        structural: isStructural,
        options: options,
        beforeStart: beforeStart,
        close: close
      });

      element.on('$destroy', handleDestroyedElement);

      // we only want there to be one function called within the post digest
      // block. This way we can group animations for all the animations that
      // were apart of the same postDigest flush call.
      if (animationQueue.length > 1) return runner;

      $rootScope.$$postDigest(function() {
        var animations = [];
        forEach(animationQueue, function(entry) {
          // the element was destroyed early on which removed the runner
          // form its storage. This means we can't animate this element
          // at all and it already has been closed due to destruction.
          if (getRunner(entry.element)) {
            animations.push(entry);
          } else {
            entry.close();
          }
        });

        // now any future animations will be in another postDigest
        animationQueue.length = 0;

        var groupedAnimations = groupAnimations(animations);
        var toBeSortedAnimations = [];

        forEach(groupedAnimations, function(animationEntry) {
          toBeSortedAnimations.push({
            domNode: getDomNode(animationEntry.from ? animationEntry.from.element : animationEntry.element),
            fn: function triggerAnimationStart() {
              // it's important that we apply the `ng-animate` CSS class and the
              // temporary classes before we do any driver invoking since these
              // CSS classes may be required for proper CSS detection.
              animationEntry.beforeStart();

              var startAnimationFn, closeFn = animationEntry.close;

              // in the event that the element was removed before the digest runs or
              // during the RAF sequencing then we should not trigger the animation.
              var targetElement = animationEntry.anchors
                  ? (animationEntry.from.element || animationEntry.to.element)
                  : animationEntry.element;

              if (getRunner(targetElement)) {
                var operation = invokeFirstDriver(animationEntry);
                if (operation) {
                  startAnimationFn = operation.start;
                }
              }

              if (!startAnimationFn) {
                closeFn();
              } else {
                var animationRunner = startAnimationFn();
                animationRunner.done(function(status) {
                  closeFn(!status);
                });
                updateAnimationRunners(animationEntry, animationRunner);
              }
            }
          });
        });

        // we need to sort each of the animations in order of parent to child
        // relationships. This ensures that the child classes are applied at the
        // right time.
        $$rAFScheduler(sortAnimations(toBeSortedAnimations));
      });

      return runner;

      // TODO(matsko): change to reference nodes
      function getAnchorNodes(node) {
        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
              ? [node]
              : node.querySelectorAll(SELECTOR);
        var anchors = [];
        forEach(items, function(node) {
          var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
          if (attr && attr.length) {
            anchors.push(node);
          }
        });
        return anchors;
      }

      function groupAnimations(animations) {
        var preparedAnimations = [];
        var refLookup = {};
        forEach(animations, function(animation, index) {
          var element = animation.element;
          var node = getDomNode(element);
          var event = animation.event;
          var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
          var anchorNodes = animation.structural ? getAnchorNodes(node) : [];

          if (anchorNodes.length) {
            var direction = enterOrMove ? 'to' : 'from';

            forEach(anchorNodes, function(anchor) {
              var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
              refLookup[key] = refLookup[key] || {};
              refLookup[key][direction] = {
                animationID: index,
                element: jqLite(anchor)
              };
            });
          } else {
            preparedAnimations.push(animation);
          }
        });

        var usedIndicesLookup = {};
        var anchorGroups = {};
        forEach(refLookup, function(operations, key) {
          var from = operations.from;
          var to = operations.to;

          if (!from || !to) {
            // only one of these is set therefore we can't have an
            // anchor animation since all three pieces are required
            var index = from ? from.animationID : to.animationID;
            var indexKey = index.toString();
            if (!usedIndicesLookup[indexKey]) {
              usedIndicesLookup[indexKey] = true;
              preparedAnimations.push(animations[index]);
            }
            return;
          }

          var fromAnimation = animations[from.animationID];
          var toAnimation = animations[to.animationID];
          var lookupKey = from.animationID.toString();
          if (!anchorGroups[lookupKey]) {
            var group = anchorGroups[lookupKey] = {
              structural: true,
              beforeStart: function() {
                fromAnimation.beforeStart();
                toAnimation.beforeStart();
              },
              close: function() {
                fromAnimation.close();
                toAnimation.close();
              },
              classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
              from: fromAnimation,
              to: toAnimation,
              anchors: [] // TODO(matsko): change to reference nodes
            };

            // the anchor animations require that the from and to elements both have at least
            // one shared CSS class which effectively marries the two elements together to use
            // the same animation driver and to properly sequence the anchor animation.
            if (group.classes.length) {
              preparedAnimations.push(group);
            } else {
              preparedAnimations.push(fromAnimation);
              preparedAnimations.push(toAnimation);
            }
          }

          anchorGroups[lookupKey].anchors.push({
            'out': from.element, 'in': to.element
          });
        });

        return preparedAnimations;
      }

      function cssClassesIntersection(a,b) {
        a = a.split(' ');
        b = b.split(' ');
        var matches = [];

        for (var i = 0; i < a.length; i++) {
          var aa = a[i];
          if (aa.substring(0,3) === 'ng-') continue;

          for (var j = 0; j < b.length; j++) {
            if (aa === b[j]) {
              matches.push(aa);
              break;
            }
          }
        }

        return matches.join(' ');
      }

      function invokeFirstDriver(animationDetails) {
        // we loop in reverse order since the more general drivers (like CSS and JS)
        // may attempt more elements, but custom drivers are more particular
        for (var i = drivers.length - 1; i >= 0; i--) {
          var driverName = drivers[i];
          var factory = $injector.get(driverName);
          var driver = factory(animationDetails);
          if (driver) {
            return driver;
          }
        }
      }

      function beforeStart() {
        element.addClass(NG_ANIMATE_CLASSNAME);
        if (tempClasses) {
          $$jqLite.addClass(element, tempClasses);
        }
        if (prepareClassName) {
          $$jqLite.removeClass(element, prepareClassName);
          prepareClassName = null;
        }
      }

      function updateAnimationRunners(animation, newRunner) {
        if (animation.from && animation.to) {
          update(animation.from.element);
          update(animation.to.element);
        } else {
          update(animation.element);
        }

        function update(element) {
          var runner = getRunner(element);
          if (runner) runner.setHost(newRunner);
        }
      }

      function handleDestroyedElement() {
        var runner = getRunner(element);
        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
          runner.end();
        }
      }

      function close(rejected) {
        element.off('$destroy', handleDestroyedElement);
        removeRunner(element);

        applyAnimationClasses(element, options);
        applyAnimationStyles(element, options);
        options.domOperation();

        if (tempClasses) {
          $$jqLite.removeClass(element, tempClasses);
        }

        element.removeClass(NG_ANIMATE_CLASSNAME);
        runner.complete(!rejected);
      }
    };
  }];
}];

/**
 * @ngdoc directive
 * @name ngAnimateSwap
 * @restrict A
 * @scope
 *
 * @description
 *
 * ngAnimateSwap is a animation-oriented directive that allows for the container to
 * be removed and entered in whenever the associated expression changes. A
 * common usecase for this directive is a rotating banner or slider component which
 * contains one image being present at a time. When the active image changes
 * then the old image will perform a `leave` animation and the new element
 * will be inserted via an `enter` animation.
 *
 * @animations
 * | Animation                        | Occurs                               |
 * |----------------------------------|--------------------------------------|
 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM  |
 * | {@link ng.$animate#leave leave}  | when the old element is removed from the DOM |
 *
 * @example
 * <example name="ngAnimateSwap-directive" module="ngAnimateSwapExample"
 *          deps="angular-animate.js"
 *          animations="true" fixBase="true">
 *   <file name="index.html">
 *     <div class="container" ng-controller="AppCtrl">
 *       <div ng-animate-swap="number" class="cell swap-animation" ng-class="colorClass(number)">
 *         {{ number }}
 *       </div>
 *     </div>
 *   </file>
 *   <file name="script.js">
 *     angular.module('ngAnimateSwapExample', ['ngAnimate'])
 *       .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
 *         $scope.number = 0;
 *         $interval(function() {
 *           $scope.number++;
 *         }, 1000);
 *
 *         var colors = ['red','blue','green','yellow','orange'];
 *         $scope.colorClass = function(number) {
 *           return colors[number % colors.length];
 *         };
 *       }]);
 *   </file>
 *  <file name="animations.css">
 *  .container {
 *    height:250px;
 *    width:250px;
 *    position:relative;
 *    overflow:hidden;
 *    border:2px solid black;
 *  }
 *  .container .cell {
 *    font-size:150px;
 *    text-align:center;
 *    line-height:250px;
 *    position:absolute;
 *    top:0;
 *    left:0;
 *    right:0;
 *    border-bottom:2px solid black;
 *  }
 *  .swap-animation.ng-enter, .swap-animation.ng-leave {
 *    transition:0.5s linear all;
 *  }
 *  .swap-animation.ng-enter {
 *    top:-250px;
 *  }
 *  .swap-animation.ng-enter-active {
 *    top:0px;
 *  }
 *  .swap-animation.ng-leave {
 *    top:0px;
 *  }
 *  .swap-animation.ng-leave-active {
 *    top:250px;
 *  }
 *  .red { background:red; }
 *  .green { background:green; }
 *  .blue { background:blue; }
 *  .yellow { background:yellow; }
 *  .orange { background:orange; }
 *  </file>
 * </example>
 */
var ngAnimateSwapDirective = ['$animate', '$rootScope', function($animate, $rootScope) {
  return {
    restrict: 'A',
    transclude: 'element',
    terminal: true,
    priority: 600, // we use 600 here to ensure that the directive is caught before others
    link: function(scope, $element, attrs, ctrl, $transclude) {
      var previousElement, previousScope;
      scope.$watchCollection(attrs.ngAnimateSwap || attrs['for'], function(value) {
        if (previousElement) {
          $animate.leave(previousElement);
        }
        if (previousScope) {
          previousScope.$destroy();
          previousScope = null;
        }
        if (value || value === 0) {
          previousScope = scope.$new();
          $transclude(previousScope, function(element) {
            previousElement = element;
            $animate.enter(element, null, $element);
          });
        }
      });
    }
  };
}];

/**
 * @ngdoc module
 * @name ngAnimate
 * @description
 *
 * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
 * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` the animation hooks are enabled for an Angular app.
 *
 * <div doc-module-components="ngAnimate"></div>
 *
 * # Usage
 * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
 * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
 * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
 * the HTML element that the animation will be triggered on.
 *
 * ## Directive Support
 * The following directives are "animation aware":
 *
 * | Directive                                                                                                | Supported Animations                                                     |
 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
 *
 * (More information can be found by visiting each the documentation associated with each directive.)
 *
 * ## CSS-based Animations
 *
 * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
 * and CSS code we can create an animation that will be picked up by Angular when an underlying directive performs an operation.
 *
 * The example below shows how an `enter` animation can be made possible on an element using `ng-if`:
 *
 * ```html
 * <div ng-if="bool" class="fade">
 *    Fade me in out
 * </div>
 * <button ng-click="bool=true">Fade In!</button>
 * <button ng-click="bool=false">Fade Out!</button>
 * ```
 *
 * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
 *
 * ```css
 * /&#42; The starting CSS styles for the enter animation &#42;/
 * .fade.ng-enter {
 *   transition:0.5s linear all;
 *   opacity:0;
 * }
 *
 * /&#42; The finishing CSS styles for the enter animation &#42;/
 * .fade.ng-enter.ng-enter-active {
 *   opacity:1;
 * }
 * ```
 *
 * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
 * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
 * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
 *
 * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
 *
 * ```css
 * /&#42; now the element will fade out before it is removed from the DOM &#42;/
 * .fade.ng-leave {
 *   transition:0.5s linear all;
 *   opacity:1;
 * }
 * .fade.ng-leave.ng-leave-active {
 *   opacity:0;
 * }
 * ```
 *
 * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
 *
 * ```css
 * /&#42; there is no need to define anything inside of the destination
 * CSS class since the keyframe will take charge of the animation &#42;/
 * .fade.ng-leave {
 *   animation: my_fade_animation 0.5s linear;
 *   -webkit-animation: my_fade_animation 0.5s linear;
 * }
 *
 * @keyframes my_fade_animation {
 *   from { opacity:1; }
 *   to { opacity:0; }
 * }
 *
 * @-webkit-keyframes my_fade_animation {
 *   from { opacity:1; }
 *   to { opacity:0; }
 * }
 * ```
 *
 * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
 *
 * ### CSS Class-based Animations
 *
 * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
 * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
 * and removed.
 *
 * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
 *
 * ```html
 * <div ng-show="bool" class="fade">
 *   Show and hide me
 * </div>
 * <button ng-click="bool=!bool">Toggle</button>
 *
 * <style>
 * .fade.ng-hide {
 *   transition:0.5s linear all;
 *   opacity:0;
 * }
 * </style>
 * ```
 *
 * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
 * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
 *
 * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
 * with CSS styles.
 *
 * ```html
 * <div ng-class="{on:onOff}" class="highlight">
 *   Highlight this box
 * </div>
 * <button ng-click="onOff=!onOff">Toggle</button>
 *
 * <style>
 * .highlight {
 *   transition:0.5s linear all;
 * }
 * .highlight.on-add {
 *   background:white;
 * }
 * .highlight.on {
 *   background:yellow;
 * }
 * .highlight.on-remove {
 *   background:black;
 * }
 * </style>
 * ```
 *
 * We can also make use of CSS keyframes by placing them within the CSS classes.
 *
 *
 * ### CSS Staggering Animations
 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
 *
 * ```css
 * .my-animation.ng-enter {
 *   /&#42; standard transition code &#42;/
 *   transition: 1s linear all;
 *   opacity:0;
 * }
 * .my-animation.ng-enter-stagger {
 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
 *   transition-delay: 0.1s;
 *
 *   /&#42; As of 1.4.4, this must always be set: it signals ngAnimate
 *     to not accidentally inherit a delay property from another CSS class &#42;/
 *   transition-duration: 0s;
 *
 *   /&#42; if you are using animations instead of transitions you should configure as follows:
 *     animation-delay: 0.1s;
 *     animation-duration: 0s; &#42;/
 * }
 * .my-animation.ng-enter.ng-enter-active {
 *   /&#42; standard transition styles &#42;/
 *   opacity:1;
 * }
 * ```
 *
 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
 * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
 *
 * The following code will issue the **ng-leave-stagger** event on the element provided:
 *
 * ```js
 * var kids = parent.children();
 *
 * $animate.leave(kids[0]); //stagger index=0
 * $animate.leave(kids[1]); //stagger index=1
 * $animate.leave(kids[2]); //stagger index=2
 * $animate.leave(kids[3]); //stagger index=3
 * $animate.leave(kids[4]); //stagger index=4
 *
 * window.requestAnimationFrame(function() {
 *   //stagger has reset itself
 *   $animate.leave(kids[5]); //stagger index=0
 *   $animate.leave(kids[6]); //stagger index=1
 *
 *   $scope.$digest();
 * });
 * ```
 *
 * Stagger animations are currently only supported within CSS-defined animations.
 *
 * ### The `ng-animate` CSS class
 *
 * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
 * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
 *
 * Therefore, animations can be applied to an element using this temporary class directly via CSS.
 *
 * ```css
 * .zipper.ng-animate {
 *   transition:0.5s linear all;
 * }
 * .zipper.ng-enter {
 *   opacity:0;
 * }
 * .zipper.ng-enter.ng-enter-active {
 *   opacity:1;
 * }
 * .zipper.ng-leave {
 *   opacity:1;
 * }
 * .zipper.ng-leave.ng-leave-active {
 *   opacity:0;
 * }
 * ```
 *
 * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
 * the CSS class once an animation has completed.)
 *
 *
 * ### The `ng-[event]-prepare` class
 *
 * This is a special class that can be used to prevent unwanted flickering / flash of content before
 * the actual animation starts. The class is added as soon as an animation is initialized, but removed
 * before the actual animation starts (after waiting for a $digest).
 * It is also only added for *structural* animations (`enter`, `move`, and `leave`).
 *
 * In practice, flickering can appear when nesting elements with structural animations such as `ngIf`
 * into elements that have class-based animations such as `ngClass`.
 *
 * ```html
 * <div ng-class="{red: myProp}">
 *   <div ng-class="{blue: myProp}">
 *     <div class="message" ng-if="myProp"></div>
 *   </div>
 * </div>
 * ```
 *
 * It is possible that during the `enter` animation, the `.message` div will be briefly visible before it starts animating.
 * In that case, you can add styles to the CSS that make sure the element stays hidden before the animation starts:
 *
 * ```css
 * .message.ng-enter-prepare {
 *   opacity: 0;
 * }
 *
 * ```
 *
 * ## JavaScript-based Animations
 *
 * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
 * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
 * `module.animation()` module function we can register the animation.
 *
 * Let's see an example of a enter/leave animation using `ngRepeat`:
 *
 * ```html
 * <div ng-repeat="item in items" class="slide">
 *   {{ item }}
 * </div>
 * ```
 *
 * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
 *
 * ```js
 * myModule.animation('.slide', [function() {
 *   return {
 *     // make note that other events (like addClass/removeClass)
 *     // have different function input parameters
 *     enter: function(element, doneFn) {
 *       jQuery(element).fadeIn(1000, doneFn);
 *
 *       // remember to call doneFn so that angular
 *       // knows that the animation has concluded
 *     },
 *
 *     move: function(element, doneFn) {
 *       jQuery(element).fadeIn(1000, doneFn);
 *     },
 *
 *     leave: function(element, doneFn) {
 *       jQuery(element).fadeOut(1000, doneFn);
 *     }
 *   }
 * }]);
 * ```
 *
 * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
 * greensock.js and velocity.js.
 *
 * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
 * our animations inside of the same registered animation, however, the function input arguments are a bit different:
 *
 * ```html
 * <div ng-class="color" class="colorful">
 *   this box is moody
 * </div>
 * <button ng-click="color='red'">Change to red</button>
 * <button ng-click="color='blue'">Change to blue</button>
 * <button ng-click="color='green'">Change to green</button>
 * ```
 *
 * ```js
 * myModule.animation('.colorful', [function() {
 *   return {
 *     addClass: function(element, className, doneFn) {
 *       // do some cool animation and call the doneFn
 *     },
 *     removeClass: function(element, className, doneFn) {
 *       // do some cool animation and call the doneFn
 *     },
 *     setClass: function(element, addedClass, removedClass, doneFn) {
 *       // do some cool animation and call the doneFn
 *     }
 *   }
 * }]);
 * ```
 *
 * ## CSS + JS Animations Together
 *
 * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
 * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
 * charge of the animation**:
 *
 * ```html
 * <div ng-if="bool" class="slide">
 *   Slide in and out
 * </div>
 * ```
 *
 * ```js
 * myModule.animation('.slide', [function() {
 *   return {
 *     enter: function(element, doneFn) {
 *       jQuery(element).slideIn(1000, doneFn);
 *     }
 *   }
 * }]);
 * ```
 *
 * ```css
 * .slide.ng-enter {
 *   transition:0.5s linear all;
 *   transform:translateY(-100px);
 * }
 * .slide.ng-enter.ng-enter-active {
 *   transform:translateY(0);
 * }
 * ```
 *
 * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
 * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
 * our own JS-based animation code:
 *
 * ```js
 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element) {
*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
 *       return $animateCss(element, {
 *         event: 'enter',
 *         structural: true
 *       });
 *     }
 *   }
 * }]);
 * ```
 *
 * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
 *
 * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
 * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
 * data into `$animateCss` directly:
 *
 * ```js
 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element) {
 *       return $animateCss(element, {
 *         event: 'enter',
 *         structural: true,
 *         addClass: 'maroon-setting',
 *         from: { height:0 },
 *         to: { height: 200 }
 *       });
 *     }
 *   }
 * }]);
 * ```
 *
 * Now we can fill in the rest via our transition CSS code:
 *
 * ```css
 * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
 * .slide.ng-enter { transition:0.5s linear all; }
 *
 * /&#42; this extra CSS class will be absorbed into the transition
 * since the $animateCss code is adding the class &#42;/
 * .maroon-setting { background:red; }
 * ```
 *
 * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
 *
 * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
 *
 * ## Animation Anchoring (via `ng-animate-ref`)
 *
 * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
 * structural areas of an application (like views) by pairing up elements using an attribute
 * called `ng-animate-ref`.
 *
 * Let's say for example we have two views that are managed by `ng-view` and we want to show
 * that there is a relationship between two components situated in within these views. By using the
 * `ng-animate-ref` attribute we can identify that the two components are paired together and we
 * can then attach an animation, which is triggered when the view changes.
 *
 * Say for example we have the following template code:
 *
 * ```html
 * <!-- index.html -->
 * <div ng-view class="view-animation">
 * </div>
 *
 * <!-- home.html -->
 * <a href="#/banner-page">
 *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
 * </a>
 *
 * <!-- banner-page.html -->
 * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
 * ```
 *
 * Now, when the view changes (once the link is clicked), ngAnimate will examine the
 * HTML contents to see if there is a match reference between any components in the view
 * that is leaving and the view that is entering. It will scan both the view which is being
 * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
 * contain a matching ref value.
 *
 * The two images match since they share the same ref value. ngAnimate will now create a
 * transport element (which is a clone of the first image element) and it will then attempt
 * to animate to the position of the second image element in the next view. For the animation to
 * work a special CSS class called `ng-anchor` will be added to the transported element.
 *
 * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
 * ngAnimate will handle the entire transition for us as well as the addition and removal of
 * any changes of CSS classes between the elements:
 *
 * ```css
 * .banner.ng-anchor {
 *   /&#42; this animation will last for 1 second since there are
 *          two phases to the animation (an `in` and an `out` phase) &#42;/
 *   transition:0.5s linear all;
 * }
 * ```
 *
 * We also **must** include animations for the views that are being entered and removed
 * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
 *
 * ```css
 * .view-animation.ng-enter, .view-animation.ng-leave {
 *   transition:0.5s linear all;
 *   position:fixed;
 *   left:0;
 *   top:0;
 *   width:100%;
 * }
 * .view-animation.ng-enter {
 *   transform:translateX(100%);
 * }
 * .view-animation.ng-leave,
 * .view-animation.ng-enter.ng-enter-active {
 *   transform:translateX(0%);
 * }
 * .view-animation.ng-leave.ng-leave-active {
 *   transform:translateX(-100%);
 * }
 * ```
 *
 * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
 * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
 * from its origin. Once that animation is over then the `in` stage occurs which animates the
 * element to its destination. The reason why there are two animations is to give enough time
 * for the enter animation on the new element to be ready.
 *
 * The example above sets up a transition for both the in and out phases, but we can also target the out or
 * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
 *
 * ```css
 * .banner.ng-anchor-out {
 *   transition: 0.5s linear all;
 *
 *   /&#42; the scale will be applied during the out animation,
 *          but will be animated away when the in animation runs &#42;/
 *   transform: scale(1.2);
 * }
 *
 * .banner.ng-anchor-in {
 *   transition: 1s linear all;
 * }
 * ```
 *
 *
 *
 *
 * ### Anchoring Demo
 *
  <example module="anchoringExample"
           name="anchoringExample"
           id="anchoringExample"
           deps="angular-animate.js;angular-route.js"
           animations="true">
    <file name="index.html">
      <a href="#!/">Home</a>
      <hr />
      <div class="view-container">
        <div ng-view class="view"></div>
      </div>
    </file>
    <file name="script.js">
      angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController as home'
          });
          $routeProvider.when('/profile/:id', {
            templateUrl: 'profile.html',
            controller: 'ProfileController as profile'
          });
        }])
        .run(['$rootScope', function($rootScope) {
          $rootScope.records = [
            { id: 1, title: 'Miss Beulah Roob' },
            { id: 2, title: 'Trent Morissette' },
            { id: 3, title: 'Miss Ava Pouros' },
            { id: 4, title: 'Rod Pouros' },
            { id: 5, title: 'Abdul Rice' },
            { id: 6, title: 'Laurie Rutherford Sr.' },
            { id: 7, title: 'Nakia McLaughlin' },
            { id: 8, title: 'Jordon Blanda DVM' },
            { id: 9, title: 'Rhoda Hand' },
            { id: 10, title: 'Alexandrea Sauer' }
          ];
        }])
        .controller('HomeController', [function() {
          //empty
        }])
        .controller('ProfileController', ['$rootScope', '$routeParams',
            function ProfileController($rootScope, $routeParams) {
          var index = parseInt($routeParams.id, 10);
          var record = $rootScope.records[index - 1];

          this.title = record.title;
          this.id = record.id;
        }]);
    </file>
    <file name="home.html">
      <h2>Welcome to the home page</h1>
      <p>Please click on an element</p>
      <a class="record"
         ng-href="#!/profile/{{ record.id }}"
         ng-animate-ref="{{ record.id }}"
         ng-repeat="record in records">
        {{ record.title }}
      </a>
    </file>
    <file name="profile.html">
      <div class="profile record" ng-animate-ref="{{ profile.id }}">
        {{ profile.title }}
      </div>
    </file>
    <file name="animations.css">
      .record {
        display:block;
        font-size:20px;
      }
      .profile {
        background:black;
        color:white;
        font-size:100px;
      }
      .view-container {
        position:relative;
      }
      .view-container > .view.ng-animate {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        min-height:500px;
      }
      .view.ng-enter, .view.ng-leave,
      .record.ng-anchor {
        transition:0.5s linear all;
      }
      .view.ng-enter {
        transform:translateX(100%);
      }
      .view.ng-enter.ng-enter-active, .view.ng-leave {
        transform:translateX(0%);
      }
      .view.ng-leave.ng-leave-active {
        transform:translateX(-100%);
      }
      .record.ng-anchor-out {
        background:red;
      }
    </file>
  </example>
 *
 * ### How is the element transported?
 *
 * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
 * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
 * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
 * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
 * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
 * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
 * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
 * will become visible since the shim class will be removed.
 *
 * ### How is the morphing handled?
 *
 * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
 * what CSS classes differ between the starting element and the destination element. These different CSS classes
 * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
 * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
 * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
 * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
 * the cloned element is placed inside of root element which is likely close to the body element).
 *
 * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
 *
 *
 * ## Using $animate in your directive code
 *
 * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
 * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
 * imagine we have a greeting box that shows and hides itself when the data changes
 *
 * ```html
 * <greeting-box active="onOrOff">Hi there</greeting-box>
 * ```
 *
 * ```js
 * ngModule.directive('greetingBox', ['$animate', function($animate) {
 *   return function(scope, element, attrs) {
 *     attrs.$observe('active', function(value) {
 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
 *     });
 *   });
 * }]);
 * ```
 *
 * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
 * in our HTML code then we can trigger a CSS or JS animation to happen.
 *
 * ```css
 * /&#42; normally we would create a CSS class to reference on the element &#42;/
 * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
 * ```
 *
 * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
 * possible be sure to visit the {@link ng.$animate $animate service API page}.
 *
 *
 * ## Callbacks and Promises
 *
 * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
 * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
 * ended by chaining onto the returned promise that animation method returns.
 *
 * ```js
 * // somewhere within the depths of the directive
 * $animate.enter(element, parent).then(function() {
 *   //the animation has completed
 * });
 * ```
 *
 * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
 * anymore.)
 *
 * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
 * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
 * routing controller to hook into that:
 *
 * ```js
 * ngModule.controller('HomePageController', ['$animate', function($animate) {
 *   $animate.on('enter', ngViewElement, function(element) {
 *     // the animation for this route has completed
 *   }]);
 * }])
 * ```
 *
 * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
 */

var copy;
var extend;
var forEach;
var isArray;
var isDefined;
var isElement;
var isFunction;
var isObject;
var isString;
var isUndefined;
var jqLite;
var noop;

/**
 * @ngdoc service
 * @name $animate
 * @kind object
 *
 * @description
 * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
 *
 * Click here {@link ng.$animate to learn more about animations with `$animate`}.
 */
angular.module('ngAnimate', [], function initAngularHelpers() {
  // Access helpers from angular core.
  // Do it inside a `config` block to ensure `window.angular` is available.
  noop        = angular.noop;
  copy        = angular.copy;
  extend      = angular.extend;
  jqLite      = angular.element;
  forEach     = angular.forEach;
  isArray     = angular.isArray;
  isString    = angular.isString;
  isObject    = angular.isObject;
  isUndefined = angular.isUndefined;
  isDefined   = angular.isDefined;
  isFunction  = angular.isFunction;
  isElement   = angular.isElement;
})
  .info({ angularVersion: '1.6.4' })
  .directive('ngAnimateSwap', ngAnimateSwapDirective)

  .directive('ngAnimateChildren', $$AnimateChildrenDirective)
  .factory('$$rAFScheduler', $$rAFSchedulerFactory)

  .provider('$$animateQueue', $$AnimateQueueProvider)
  .provider('$$animation', $$AnimationProvider)

  .provider('$animateCss', $AnimateCssProvider)
  .provider('$$animateCssDriver', $$AnimateCssDriverProvider)

  .provider('$$animateJs', $$AnimateJsProvider)
  .provider('$$animateJsDriver', $$AnimateJsDriverProvider);


})(window, window.angular);

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,l){'use strict';var c="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),m=function(a,e){if(-1!==e.indexOf(a[0].nodeName))return!0};l.module("ngAria",["ng"]).info({angularVersion:"1.7.8"}).provider("$aria",function(){function a(a,c,n,g){return function(d,f,b){if(!b.hasOwnProperty("ngAriaDisable")){var p=b.$normalize(c);!e[p]||m(f,n)||b[p]||d.$watch(b[a],function(b){b=g?!b:!!b;f.attr(c,b)})}}}var e={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,
ariaValue:!0,tabindex:!0,bindKeydown:!0,bindRoleForClick:!0};this.config=function(a){e=l.extend(e,a)};this.$get=function(){return{config:function(a){return e[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",c,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked",
"aria-checked",c,!1)}]).directive("ngReadonly",["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",c,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",c,!1)}]).directive("ngModel",["$aria",function(a){function e(e,g,d,f){return a.config(g)&&!d.attr(e)&&(f||!m(d,c))&&("hidden"!==d.attr("type")||"INPUT"!==d[0].nodeName)}function k(a,e){return!e.attr("role")&&e.attr("type")===a&&!m(e,c)}function h(a,e){var d=a.type,f=a.role;return"checkbox"===
(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(c,g){if(!g.hasOwnProperty("ngAriaDisable")){var d=h(g,c);return{post:function(f,b,c,g){function h(){return g.$modelValue}function m(a){b.attr("aria-checked",c.value==g.$viewValue)}function n(){b.attr("aria-checked",!g.$isEmpty(g.$viewValue))}var l=e("tabindex","tabindex",b,!1);switch(d){case "radio":case "checkbox":k(d,
b)&&b.attr("role",d);e("aria-checked","ariaChecked",b,!1)&&f.$watch(h,"radio"===d?m:n);l&&b.attr("tabindex",0);break;case "range":k(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var q=!b.attr("aria-valuemin")&&(c.hasOwnProperty("min")||c.hasOwnProperty("ngMin")),r=!b.attr("aria-valuemax")&&(c.hasOwnProperty("max")||c.hasOwnProperty("ngMax")),s=!b.attr("aria-valuenow");q&&c.$observe("min",function(a){b.attr("aria-valuemin",a)});r&&c.$observe("max",function(a){b.attr("aria-valuemax",a)});
s&&f.$watch(h,function(a){b.attr("aria-valuenow",a)})}l&&b.attr("tabindex",0)}!c.hasOwnProperty("ngRequired")&&g.$validators.required&&e("aria-required","ariaRequired",b,!1)&&c.$observe("required",function(){b.attr("aria-required",!!c.required)});e("aria-invalid","ariaInvalid",b,!0)&&f.$watch(function(){return g.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",c,!1)}]).directive("ngMessages",function(){return{restrict:"A",
require:"?ngMessages",link:function(a,c,k,h){k.hasOwnProperty("ngAriaDisable")||c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,e){return{restrict:"A",compile:function(k,h){if(!h.hasOwnProperty("ngAriaDisable")){var l=e(h.ngClick);return function(e,d,f){if(!m(d,c)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeydown")&&!f.ngKeydown&&!f.ngKeypress&&
!f.ngKeyup))d.on("keydown",function(a){function d(){l(e,{$event:a})}var f=a.which||a.keyCode;if(13===f||32===f)-1!==c.indexOf(a.target.nodeName)||a.target.isContentEditable||a.preventDefault(),e.$apply(d)})}}}}}]).directive("ngDblclick",["$aria",function(a){return function(e,k,h){h.hasOwnProperty("ngAriaDisable")||!a.config("tabindex")||k.attr("tabindex")||m(k,c)||k.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z,l){'use strict';function q(n){return["$animate",function(u){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(m,f,a,e,r){var b,h,s;if(!n){b=f[0];s=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var k=function(c){h=c?v(c)?c:c.split(/[\s,]+/):null;e.reRender()};a?(k(m.$eval(a)),m.$watchCollection(a,k)):k(s)}var g,t;e.register(b,t={test:function(c){var b=h;c=b?v(b)?0<=b.indexOf(c):b.hasOwnProperty(c):void 0;return c},attach:function(){g||
r(function(c,a){u.enter(c,null,f);g=c;var d=g.$$attachId=e.getAttachId();g.on("$destroy",function(){g&&g.$$attachId===d&&(e.deregister(b,n),t.detach());a.$destroy()})})},detach:function(){if(g){var c=g;g=null;u.leave(c)}}},n);m.$on("$destroy",function(){e.deregister(b,n)})}}}]}var x,v,p,y;l.module("ngMessages",[],function(){x=l.forEach;v=l.isArray;p=l.isString;y=l.element}).info({angularVersion:"1.7.8"}).directive("ngMessages",["$animate",function(n){function u(f,a){return p(a)&&0===a.length||m(f.$eval(a))}
function m(f){return p(f)?f.length:!!f}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(f,a,e){function r(c,b){for(var d=b,a=[];d&&d!==c;){var e=d.$$ngMessageNode;if(e&&e.length)return k[e];d.childNodes.length&&-1===a.indexOf(d)?(a.push(d),d=d.childNodes[d.childNodes.length-1]):d.previousSibling?d=d.previousSibling:(d=d.parentNode,a.push(d))}}var b=this,h=0,s=0;this.getAttachId=function(){return s++};var k=this.messages={},g,t;this.render=function(c){c=c||
{};g=!1;t=c;for(var w=u(a,e.ngMessagesMultiple)||u(a,e.multiple),d=[],r={},h=0,k=b.head,s=!1,l=0;null!=k;){l++;var p=k.message,q=!1;s||x(c,function(b,c){m(b)&&!q&&(h++,p.test(c)&&!r[c]&&(q=r[c]=!0,p.attach()))});q?s=!w:d.push(p);k=k.next}x(d,function(c){c.detach()});c=d.length!==l;(w=b.default&&!c&&0<h)?b.default.attach():b.default&&b.default.detach();c||w?n.setClass(f,"ng-active","ng-inactive"):n.setClass(f,"ng-inactive","ng-active")};a.$watchCollection(e.ngMessages||e["for"],b.render);this.reRender=
function(){g||(g=!0,a.$evalAsync(function(){g&&t&&b.render(t)}))};this.register=function(c,a,d){if(d)b.default=a;else{d=h.toString();k[d]={message:a};var e=f[0];a=k[d];b.head?(e=r(e,c))?(a.next=e.next,e.next=a):(a.next=b.head,b.head=a):b.head=a;c.$$ngMessageNode=d;h++}b.reRender()};this.deregister=function(a,e){if(e)delete b.default;else{var d=a.$$ngMessageNode;delete a.$$ngMessageNode;var g=k[d];if(g){var h=r(f[0],a);h?h.next=g.next:b.head=g.next}delete k[d]}b.reRender()}}]}}]).directive("ngMessagesInclude",
["$templateRequest","$document","$compile",function(n,l,m){function f(a,e){var f=m.$$createComment?m.$$createComment("ngMessagesInclude",e):l[0].createComment(" ngMessagesInclude: "+e+" "),f=y(f);a.after(f);a.remove()}return{restrict:"AE",require:"^^ngMessages",link:function(a,e,l){var b=l.ngMessagesInclude||l.src;n(b).then(function(h){a.$$destroyed||(p(h)&&!h.trim()?f(e,b):m(h)(a,function(a){e.after(a);f(e,b)}))})}}}]).directive("ngMessage",q()).directive("ngMessageExp",q()).directive("ngMessageDefault",
q(!0))})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (n, e) {
    'use strict'; function m(d, k, l) {
        var a = l.baseHref(), h = d[0]; return function (f, b, c) {
            var d, g; c = c || {}; g = c.expires; d = e.isDefined(c.path) ? c.path : a; e.isUndefined(b) && (g = "Thu, 01 Jan 1970 00:00:00 GMT", b = ""); e.isString(g) && (g = new Date(g)); b = encodeURIComponent(f) + "=" + encodeURIComponent(b); b = b + (d ? ";path=" + d : "") + (c.domain ? ";domain=" + c.domain : ""); b += g ? ";expires=" + g.toUTCString() : ""; b += c.secure ? ";secure" : ""; b += c.samesite ? ";samesite=" + c.samesite : ""; c = b.length + 1; 4096 < c && k.warn("Cookie '" + f + "' possibly not set or overflowed because it was too large (" +
                c + " > 4096 bytes)!"); h.cookie = b
        }
    } e.module("ngCookies", ["ng"]).info({ angularVersion: "1.7.8" }).provider("$cookies", [function () { var d = this.defaults = {}; this.$get = ["$$cookieReader", "$$cookieWriter", function (k, l) { return { get: function (a) { return k()[a] }, getObject: function (a) { return (a = this.get(a)) ? e.fromJson(a) : a }, getAll: function () { return k() }, put: function (a, h, f) { l(a, h, f ? e.extend({}, d, f) : d) }, putObject: function (a, d, f) { this.put(a, e.toJson(d), f) }, remove: function (a, h) { l(a, void 0, h ? e.extend({}, d, h) : d) } } }] }]); m.$inject =
        ["$document", "$log", "$browser"]; e.module("ngCookies").provider("$$cookieWriter", function () { this.$get = m })
})(window, window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*--------------------------------------------------------------------------
* linq.js - LINQ for JavaScript
* ver 2.2.0.2 (Jan. 21th, 2011)
*
* created and maintained by neuecc <ils@neue.cc>
* licensed under Microsoft Public License(Ms-PL)
* http://neue.cc/
* http://linqjs.codeplex.com/
*--------------------------------------------------------------------------*/
Enumerable=function(){var m="Single:sequence contains more than one element.",e=true,b=null,a=false,c=function(a){this.GetEnumerator=a};c.Choice=function(){var a=arguments[0]instanceof Array?arguments[0]:arguments;return new c(function(){return new f(g.Blank,function(){return this.Yield(a[Math.floor(Math.random()*a.length)])},g.Blank)})};c.Cycle=function(){var a=arguments[0]instanceof Array?arguments[0]:arguments;return new c(function(){var b=0;return new f(g.Blank,function(){if(b>=a.length)b=0;return this.Yield(a[b++])},g.Blank)})};c.Empty=function(){return new c(function(){return new f(g.Blank,function(){return a},g.Blank)})};c.From=function(j){if(j==b)return c.Empty();if(j instanceof c)return j;if(typeof j==i.Number||typeof j==i.Boolean)return c.Repeat(j,1);if(typeof j==i.String)return new c(function(){var b=0;return new f(g.Blank,function(){return b<j.length?this.Yield(j.charAt(b++)):a},g.Blank)});if(typeof j!=i.Function){if(typeof j.length==i.Number)return new h(j);if(!(j instanceof Object)&&d.IsIEnumerable(j))return new c(function(){var c=e,b;return new f(function(){b=new Enumerator(j)},function(){if(c)c=a;else b.moveNext();return b.atEnd()?a:this.Yield(b.item())},g.Blank)})}return new c(function(){var b=[],c=0;return new f(function(){for(var a in j)!(j[a]instanceof Function)&&b.push({Key:a,Value:j[a]})},function(){return c<b.length?this.Yield(b[c++]):a},g.Blank)})},c.Return=function(a){return c.Repeat(a,1)};c.Matches=function(h,e,d){if(d==b)d="";if(e instanceof RegExp){d+=e.ignoreCase?"i":"";d+=e.multiline?"m":"";e=e.source}if(d.indexOf("g")===-1)d+="g";return new c(function(){var b;return new f(function(){b=new RegExp(e,d)},function(){var c=b.exec(h);return c?this.Yield(c):a},g.Blank)})};c.Range=function(e,d,a){if(a==b)a=1;return c.ToInfinity(e,a).Take(d)};c.RangeDown=function(e,d,a){if(a==b)a=1;return c.ToNegativeInfinity(e,a).Take(d)};c.RangeTo=function(d,e,a){if(a==b)a=1;return d<e?c.ToInfinity(d,a).TakeWhile(function(a){return a<=e}):c.ToNegativeInfinity(d,a).TakeWhile(function(a){return a>=e})};c.Repeat=function(d,a){return a!=b?c.Repeat(d).Take(a):new c(function(){return new f(g.Blank,function(){return this.Yield(d)},g.Blank)})};c.RepeatWithFinalize=function(a,e){a=d.CreateLambda(a);e=d.CreateLambda(e);return new c(function(){var c;return new f(function(){c=a()},function(){return this.Yield(c)},function(){if(c!=b){e(c);c=b}})})};c.Generate=function(a,e){if(e!=b)return c.Generate(a).Take(e);a=d.CreateLambda(a);return new c(function(){return new f(g.Blank,function(){return this.Yield(a())},g.Blank)})};c.ToInfinity=function(d,a){if(d==b)d=0;if(a==b)a=1;return new c(function(){var b;return new f(function(){b=d-a},function(){return this.Yield(b+=a)},g.Blank)})};c.ToNegativeInfinity=function(d,a){if(d==b)d=0;if(a==b)a=1;return new c(function(){var b;return new f(function(){b=d+a},function(){return this.Yield(b-=a)},g.Blank)})};c.Unfold=function(h,b){b=d.CreateLambda(b);return new c(function(){var d=e,c;return new f(g.Blank,function(){if(d){d=a;c=h;return this.Yield(c)}c=b(c);return this.Yield(c)},g.Blank)})};c.prototype={CascadeBreadthFirst:function(g,b){var h=this;g=d.CreateLambda(g);b=d.CreateLambda(b);return new c(function(){var i,k=0,j=[];return new f(function(){i=h.GetEnumerator()},function(){while(e){if(i.MoveNext()){j.push(i.Current());return this.Yield(b(i.Current(),k))}var f=c.From(j).SelectMany(function(a){return g(a)});if(!f.Any())return a;else{k++;j=[];d.Dispose(i);i=f.GetEnumerator()}}},function(){d.Dispose(i)})})},CascadeDepthFirst:function(g,b){var h=this;g=d.CreateLambda(g);b=d.CreateLambda(b);return new c(function(){var j=[],i;return new f(function(){i=h.GetEnumerator()},function(){while(e){if(i.MoveNext()){var f=b(i.Current(),j.length);j.push(i);i=c.From(g(i.Current())).GetEnumerator();return this.Yield(f)}if(j.length<=0)return a;d.Dispose(i);i=j.pop()}},function(){try{d.Dispose(i)}finally{c.From(j).ForEach(function(a){a.Dispose()})}})})},Flatten:function(){var h=this;return new c(function(){var j,i=b;return new f(function(){j=h.GetEnumerator()},function(){while(e){if(i!=b)if(i.MoveNext())return this.Yield(i.Current());else i=b;if(j.MoveNext())if(j.Current()instanceof Array){d.Dispose(i);i=c.From(j.Current()).SelectMany(g.Identity).Flatten().GetEnumerator();continue}else return this.Yield(j.Current());return a}},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Pairwise:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c;return new f(function(){c=e.GetEnumerator();c.MoveNext()},function(){var d=c.Current();return c.MoveNext()?this.Yield(b(d,c.Current())):a},function(){d.Dispose(c)})})},Scan:function(i,g,j){if(j!=b)return this.Scan(i,g).Select(j);var h;if(g==b){g=d.CreateLambda(i);h=a}else{g=d.CreateLambda(g);h=e}var k=this;return new c(function(){var b,c,j=e;return new f(function(){b=k.GetEnumerator()},function(){if(j){j=a;if(!h){if(b.MoveNext())return this.Yield(c=b.Current())}else return this.Yield(c=i)}return b.MoveNext()?this.Yield(c=g(c,b.Current())):a},function(){d.Dispose(b)})})},Select:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()?this.Yield(b(c.Current(),g++)):a},function(){d.Dispose(c)})})},SelectMany:function(g,e){var h=this;g=d.CreateLambda(g);if(e==b)e=function(b,a){return a};e=d.CreateLambda(e);return new c(function(){var j,i=undefined,k=0;return new f(function(){j=h.GetEnumerator()},function(){if(i===undefined)if(!j.MoveNext())return a;do{if(i==b){var f=g(j.Current(),k++);i=c.From(f).GetEnumerator()}if(i.MoveNext())return this.Yield(e(j.Current(),i.Current()));d.Dispose(i);i=b}while(j.MoveNext());return a},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Where:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){while(c.MoveNext())if(b(c.Current(),g++))return this.Yield(c.Current());return a},function(){d.Dispose(c)})})},OfType:function(c){var a;switch(c){case Number:a=i.Number;break;case String:a=i.String;break;case Boolean:a=i.Boolean;break;case Function:a=i.Function;break;default:a=b}return a===b?this.Where(function(a){return a instanceof c}):this.Where(function(b){return typeof b===a})},Zip:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var i,h,j=0;return new f(function(){i=g.GetEnumerator();h=c.From(e).GetEnumerator()},function(){return i.MoveNext()&&h.MoveNext()?this.Yield(b(i.Current(),h.Current(),j++)):a},function(){try{d.Dispose(i)}finally{d.Dispose(h)}})})},Join:function(m,i,h,k,j){i=d.CreateLambda(i);h=d.CreateLambda(h);k=d.CreateLambda(k);j=d.CreateLambda(j);var l=this;return new c(function(){var n,q,o=b,p=0;return new f(function(){n=l.GetEnumerator();q=c.From(m).ToLookup(h,g.Identity,j)},function(){while(e){if(o!=b){var c=o[p++];if(c!==undefined)return this.Yield(k(n.Current(),c));c=b;p=0}if(n.MoveNext()){var d=i(n.Current());o=q.Get(d).ToArray()}else return a}},function(){d.Dispose(n)})})},GroupJoin:function(l,h,e,j,i){h=d.CreateLambda(h);e=d.CreateLambda(e);j=d.CreateLambda(j);i=d.CreateLambda(i);var k=this;return new c(function(){var m=k.GetEnumerator(),n=b;return new f(function(){m=k.GetEnumerator();n=c.From(l).ToLookup(e,g.Identity,i)},function(){if(m.MoveNext()){var b=n.Get(h(m.Current()));return this.Yield(j(m.Current(),b))}return a},function(){d.Dispose(m)})})},All:function(b){b=d.CreateLambda(b);var c=e;this.ForEach(function(d){if(!b(d)){c=a;return a}});return c},Any:function(c){c=d.CreateLambda(c);var b=this.GetEnumerator();try{if(arguments.length==0)return b.MoveNext();while(b.MoveNext())if(c(b.Current()))return e;return a}finally{d.Dispose(b)}},Concat:function(e){var g=this;return new c(function(){var i,h;return new f(function(){i=g.GetEnumerator()},function(){if(h==b){if(i.MoveNext())return this.Yield(i.Current());h=c.From(e).GetEnumerator()}return h.MoveNext()?this.Yield(h.Current()):a},function(){try{d.Dispose(i)}finally{d.Dispose(h)}})})},Insert:function(h,b){var g=this;return new c(function(){var j,i,l=0,k=a;return new f(function(){j=g.GetEnumerator();i=c.From(b).GetEnumerator()},function(){if(l==h&&i.MoveNext()){k=e;return this.Yield(i.Current())}if(j.MoveNext()){l++;return this.Yield(j.Current())}return!k&&i.MoveNext()?this.Yield(i.Current()):a},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Alternate:function(a){a=c.Return(a);return this.SelectMany(function(b){return c.Return(b).Concat(a)}).TakeExceptLast()},Contains:function(f,b){b=d.CreateLambda(b);var c=this.GetEnumerator();try{while(c.MoveNext())if(b(c.Current())===f)return e;return a}finally{d.Dispose(c)}},DefaultIfEmpty:function(b){var g=this;return new c(function(){var c,h=e;return new f(function(){c=g.GetEnumerator()},function(){if(c.MoveNext()){h=a;return this.Yield(c.Current())}else if(h){h=a;return this.Yield(b)}return a},function(){d.Dispose(c)})})},Distinct:function(a){return this.Except(c.Empty(),a)},Except:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var h,i;return new f(function(){h=g.GetEnumerator();i=new n(b);c.From(e).ForEach(function(a){i.Add(a)})},function(){while(h.MoveNext()){var b=h.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}return a},function(){d.Dispose(h)})})},Intersect:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var h,i,j;return new f(function(){h=g.GetEnumerator();i=new n(b);c.From(e).ForEach(function(a){i.Add(a)});j=new n(b)},function(){while(h.MoveNext()){var b=h.Current();if(!j.Contains(b)&&i.Contains(b)){j.Add(b);return this.Yield(b)}}return a},function(){d.Dispose(h)})})},SequenceEqual:function(h,f){f=d.CreateLambda(f);var g=this.GetEnumerator();try{var b=c.From(h).GetEnumerator();try{while(g.MoveNext())if(!b.MoveNext()||f(g.Current())!==f(b.Current()))return a;return b.MoveNext()?a:e}finally{d.Dispose(b)}}finally{d.Dispose(g)}},Union:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var j,h,i;return new f(function(){j=g.GetEnumerator();i=new n(b)},function(){var b;if(h===undefined){while(j.MoveNext()){b=j.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}h=c.From(e).GetEnumerator()}while(h.MoveNext()){b=h.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}return a},function(){try{d.Dispose(j)}finally{d.Dispose(h)}})})},OrderBy:function(b){return new j(this,b,a)},OrderByDescending:function(a){return new j(this,a,e)},Reverse:function(){var b=this;return new c(function(){var c,d;return new f(function(){c=b.ToArray();d=c.length},function(){return d>0?this.Yield(c[--d]):a},g.Blank)})},Shuffle:function(){var b=this;return new c(function(){var c;return new f(function(){c=b.ToArray()},function(){if(c.length>0){var b=Math.floor(Math.random()*c.length);return this.Yield(c.splice(b,1)[0])}return a},g.Blank)})},GroupBy:function(i,h,e,g){var j=this;i=d.CreateLambda(i);h=d.CreateLambda(h);if(e!=b)e=d.CreateLambda(e);g=d.CreateLambda(g);return new c(function(){var c;return new f(function(){c=j.ToLookup(i,h,g).ToEnumerable().GetEnumerator()},function(){while(c.MoveNext())return e==b?this.Yield(c.Current()):this.Yield(e(c.Current().Key(),c.Current()));return a},function(){d.Dispose(c)})})},PartitionBy:function(j,i,g,h){var l=this;j=d.CreateLambda(j);i=d.CreateLambda(i);h=d.CreateLambda(h);var k;if(g==b){k=a;g=function(b,a){return new o(b,a)}}else{k=e;g=d.CreateLambda(g)}return new c(function(){var b,n,o,m=[];return new f(function(){b=l.GetEnumerator();if(b.MoveNext()){n=j(b.Current());o=h(n);m.push(i(b.Current()))}},function(){var d;while((d=b.MoveNext())==e)if(o===h(j(b.Current())))m.push(i(b.Current()));else break;if(m.length>0){var f=k?g(n,c.From(m)):g(n,m);if(d){n=j(b.Current());o=h(n);m=[i(b.Current())]}else m=[];return this.Yield(f)}return a},function(){d.Dispose(b)})})},BufferWithCount:function(e){var b=this;return new c(function(){var c;return new f(function(){c=b.GetEnumerator()},function(){var b=[],d=0;while(c.MoveNext()){b.push(c.Current());if(++d>=e)return this.Yield(b)}return b.length>0?this.Yield(b):a},function(){d.Dispose(c)})})},Aggregate:function(c,b,a){return this.Scan(c,b,a).Last()},Average:function(a){a=d.CreateLambda(a);var c=0,b=0;this.ForEach(function(d){c+=a(d);++b});return c/b},Count:function(a){a=a==b?g.True:d.CreateLambda(a);var c=0;this.ForEach(function(d,b){if(a(d,b))++c});return c},Max:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(function(a,b){return a>b?a:b})},Min:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(function(a,b){return a<b?a:b})},MaxBy:function(a){a=d.CreateLambda(a);return this.Aggregate(function(b,c){return a(b)>a(c)?b:c})},MinBy:function(a){a=d.CreateLambda(a);return this.Aggregate(function(b,c){return a(b)<a(c)?b:c})},Sum:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(0,function(a,b){return a+b})},ElementAt:function(d){var c,b=a;this.ForEach(function(g,f){if(f==d){c=g;b=e;return a}});if(!b)throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");return c},ElementAtOrDefault:function(f,d){var c,b=a;this.ForEach(function(g,d){if(d==f){c=g;b=e;return a}});return!b?d:c},First:function(c){if(c!=b)return this.Where(c).First();var f,d=a;this.ForEach(function(b){f=b;d=e;return a});if(!d)throw new Error("First:No element satisfies the condition.");return f},FirstOrDefault:function(c,d){if(d!=b)return this.Where(d).FirstOrDefault(c);var g,f=a;this.ForEach(function(b){g=b;f=e;return a});return!f?c:g},Last:function(c){if(c!=b)return this.Where(c).Last();var f,d=a;this.ForEach(function(a){d=e;f=a});if(!d)throw new Error("Last:No element satisfies the condition.");return f},LastOrDefault:function(c,d){if(d!=b)return this.Where(d).LastOrDefault(c);var g,f=a;this.ForEach(function(a){f=e;g=a});return!f?c:g},Single:function(d){if(d!=b)return this.Where(d).Single();var f,c=a;this.ForEach(function(a){if(!c){c=e;f=a}else throw new Error(m);});if(!c)throw new Error("Single:No element satisfies the condition.");return f},SingleOrDefault:function(d,f){if(f!=b)return this.Where(f).SingleOrDefault(d);var g,c=a;this.ForEach(function(a){if(!c){c=e;g=a}else throw new Error(m);});return!c?d:g},Skip:function(e){var b=this;return new c(function(){var c,g=0;return new f(function(){c=b.GetEnumerator();while(g++<e&&c.MoveNext());},function(){return c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},SkipWhile:function(b){b=d.CreateLambda(b);var g=this;return new c(function(){var c,i=0,h=a;return new f(function(){c=g.GetEnumerator()},function(){while(!h)if(c.MoveNext()){if(!b(c.Current(),i++)){h=e;return this.Yield(c.Current())}continue}else return a;return c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},Take:function(e){var b=this;return new c(function(){var c,g=0;return new f(function(){c=b.GetEnumerator()},function(){return g++<e&&c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},TakeWhile:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()&&b(c.Current(),g++)?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},TakeExceptLast:function(e){if(e==b)e=1;var g=this;return new c(function(){if(e<=0)return g.GetEnumerator();var b,c=[];return new f(function(){b=g.GetEnumerator()},function(){while(b.MoveNext()){if(c.length==e){c.push(b.Current());return this.Yield(c.shift())}c.push(b.Current())}return a},function(){d.Dispose(b)})})},TakeFromLast:function(e){if(e<=0||e==b)return c.Empty();var g=this;return new c(function(){var j,h,i=[];return new f(function(){j=g.GetEnumerator()},function(){while(j.MoveNext()){i.length==e&&i.shift();i.push(j.Current())}if(h==b)h=c.From(i).GetEnumerator();return h.MoveNext()?this.Yield(h.Current()):a},function(){d.Dispose(h)})})},IndexOf:function(c){var a=b;this.ForEach(function(d,b){if(d===c){a=b;return e}});return a!==b?a:-1},LastIndexOf:function(b){var a=-1;this.ForEach(function(d,c){if(d===b)a=c});return a},ToArray:function(){var a=[];this.ForEach(function(b){a.push(b)});return a},ToLookup:function(c,b,a){c=d.CreateLambda(c);b=d.CreateLambda(b);a=d.CreateLambda(a);var e=new n(a);this.ForEach(function(g){var f=c(g),a=b(g),d=e.Get(f);if(d!==undefined)d.push(a);else e.Add(f,[a])});return new q(e)},ToObject:function(b,a){b=d.CreateLambda(b);a=d.CreateLambda(a);var c={};this.ForEach(function(d){c[b(d)]=a(d)});return c},ToDictionary:function(c,b,a){c=d.CreateLambda(c);b=d.CreateLambda(b);a=d.CreateLambda(a);var e=new n(a);this.ForEach(function(a){e.Add(c(a),b(a))});return e},ToJSON:function(a,b){return JSON.stringify(this.ToArray(),a,b)},ToString:function(a,c){if(a==b)a="";if(c==b)c=g.Identity;return this.Select(c).ToArray().join(a)},Do:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){if(c.MoveNext()){b(c.Current(),g++);return this.Yield(c.Current())}return a},function(){d.Dispose(c)})})},ForEach:function(c){c=d.CreateLambda(c);var e=0,b=this.GetEnumerator();try{while(b.MoveNext())if(c(b.Current(),e++)===a)break}finally{d.Dispose(b)}},Write:function(c,f){if(c==b)c="";f=d.CreateLambda(f);var g=e;this.ForEach(function(b){if(g)g=a;else document.write(c);document.write(f(b))})},WriteLine:function(a){a=d.CreateLambda(a);this.ForEach(function(b){document.write(a(b));document.write("<br />")})},Force:function(){var a=this.GetEnumerator();try{while(a.MoveNext());}finally{d.Dispose(a)}},Let:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var g;return new f(function(){g=c.From(b(e)).GetEnumerator()},function(){return g.MoveNext()?this.Yield(g.Current()):a},function(){d.Dispose(g)})})},Share:function(){var e=this,d;return new c(function(){return new f(function(){if(d==b)d=e.GetEnumerator()},function(){return d.MoveNext()?this.Yield(d.Current()):a},g.Blank)})},MemoizeAll:function(){var h=this,e,d;return new c(function(){var c=-1;return new f(function(){if(d==b){d=h.GetEnumerator();e=[]}},function(){c++;return e.length<=c?d.MoveNext()?this.Yield(e[c]=d.Current()):a:this.Yield(e[c])},g.Blank)})},Catch:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c;return new f(function(){c=e.GetEnumerator()},function(){try{return c.MoveNext()?this.Yield(c.Current()):a}catch(d){b(d);return a}},function(){d.Dispose(c)})})},Finally:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()?this.Yield(c.Current()):a},function(){try{d.Dispose(c)}finally{b()}})})},Trace:function(c,a){if(c==b)c="Trace";a=d.CreateLambda(a);return this.Do(function(b){console.log(c,":",a(b))})}};var g={Identity:function(a){return a},True:function(){return e},Blank:function(){}},i={Boolean:typeof e,Number:typeof 0,String:typeof"",Object:typeof{},Undefined:typeof undefined,Function:typeof function(){}},d={CreateLambda:function(a){if(a==b)return g.Identity;if(typeof a==i.String)if(a=="")return g.Identity;else if(a.indexOf("=>")==-1)return new Function("$,$$,$$$,$$$$","return "+a);else{var c=a.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);return new Function(c[1],"return "+c[2])}return a},IsIEnumerable:function(b){if(typeof Enumerator!=i.Undefined)try{new Enumerator(b);return e}catch(c){}return a},Compare:function(a,b){return a===b?0:a>b?1:-1},Dispose:function(a){a!=b&&a.Dispose()}},k={Before:0,Running:1,After:2},f=function(d,f,g){var c=new p,b=k.Before;this.Current=c.Current;this.MoveNext=function(){try{switch(b){case k.Before:b=k.Running;d();case k.Running:if(f.apply(c))return e;else{this.Dispose();return a}case k.After:return a}}catch(g){this.Dispose();throw g;}};this.Dispose=function(){if(b!=k.Running)return;try{g()}finally{b=k.After}}},p=function(){var a=b;this.Current=function(){return a};this.Yield=function(b){a=b;return e}},j=function(f,b,c,e){var a=this;a.source=f;a.keySelector=d.CreateLambda(b);a.descending=c;a.parent=e};j.prototype=new c;j.prototype.CreateOrderedEnumerable=function(a,b){return new j(this.source,a,b,this)};j.prototype.ThenBy=function(b){return this.CreateOrderedEnumerable(b,a)};j.prototype.ThenByDescending=function(a){return this.CreateOrderedEnumerable(a,e)};j.prototype.GetEnumerator=function(){var h=this,d,c,e=0;return new f(function(){d=[];c=[];h.source.ForEach(function(b,a){d.push(b);c.push(a)});var a=l.Create(h,b);a.GenerateKeys(d);c.sort(function(b,c){return a.Compare(b,c)})},function(){return e<c.length?this.Yield(d[c[e++]]):a},g.Blank)};var l=function(c,d,e){var a=this;a.keySelector=c;a.descending=d;a.child=e;a.keys=b};l.Create=function(a,d){var c=new l(a.keySelector,a.descending,d);return a.parent!=b?l.Create(a.parent,c):c};l.prototype.GenerateKeys=function(d){var a=this;for(var f=d.length,g=a.keySelector,e=new Array(f),c=0;c<f;c++)e[c]=g(d[c]);a.keys=e;a.child!=b&&a.child.GenerateKeys(d)};l.prototype.Compare=function(e,f){var a=this,c=d.Compare(a.keys[e],a.keys[f]);if(c==0){if(a.child!=b)return a.child.Compare(e,f);c=d.Compare(e,f)}return a.descending?-c:c};var h=function(a){this.source=a};h.prototype=new c;h.prototype.Any=function(a){return a==b?this.source.length>0:c.prototype.Any.apply(this,arguments)};h.prototype.Count=function(a){return a==b?this.source.length:c.prototype.Count.apply(this,arguments)};h.prototype.ElementAt=function(a){return 0<=a&&a<this.source.length?this.source[a]:c.prototype.ElementAt.apply(this,arguments)};h.prototype.ElementAtOrDefault=function(a,b){return 0<=a&&a<this.source.length?this.source[a]:b};h.prototype.First=function(a){return a==b&&this.source.length>0?this.source[0]:c.prototype.First.apply(this,arguments)};h.prototype.FirstOrDefault=function(a,d){return d!=b?c.prototype.FirstOrDefault.apply(this,arguments):this.source.length>0?this.source[0]:a};h.prototype.Last=function(d){var a=this;return d==b&&a.source.length>0?a.source[a.source.length-1]:c.prototype.Last.apply(a,arguments)};h.prototype.LastOrDefault=function(d,e){var a=this;return e!=b?c.prototype.LastOrDefault.apply(a,arguments):a.source.length>0?a.source[a.source.length-1]:d};h.prototype.Skip=function(d){var b=this.source;return new c(function(){var c;return new f(function(){c=d<0?0:d},function(){return c<b.length?this.Yield(b[c++]):a},g.Blank)})};h.prototype.TakeExceptLast=function(a){if(a==b)a=1;return this.Take(this.source.length-a)};h.prototype.TakeFromLast=function(a){return this.Skip(this.source.length-a)};h.prototype.Reverse=function(){var b=this.source;return new c(function(){var c;return new f(function(){c=b.length},function(){return c>0?this.Yield(b[--c]):a},g.Blank)})};h.prototype.SequenceEqual=function(d,e){return(d instanceof h||d instanceof Array)&&e==b&&c.From(d).Count()!=this.Count()?a:c.prototype.SequenceEqual.apply(this,arguments)};h.prototype.ToString=function(a,d){if(d!=b||!(this.source instanceof Array))return c.prototype.ToString.apply(this,arguments);if(a==b)a="";return this.source.join(a)};h.prototype.GetEnumerator=function(){var b=this.source,c=0;return new f(g.Blank,function(){return c<b.length?this.Yield(b[c++]):a},g.Blank)};var n=function(){var h=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d=function(a){return a===b?"null":a===undefined?"undefined":typeof a.toString===i.Function?a.toString():Object.prototype.toString.call(a)},l=function(d,c){var a=this;a.Key=d;a.Value=c;a.Prev=b;a.Next=b},j=function(){this.First=b;this.Last=b};j.prototype={AddLast:function(c){var a=this;if(a.Last!=b){a.Last.Next=c;c.Prev=a.Last;a.Last=c}else a.First=a.Last=c},Replace:function(c,a){if(c.Prev!=b){c.Prev.Next=a;a.Prev=c.Prev}else this.First=a;if(c.Next!=b){c.Next.Prev=a;a.Next=c.Next}else this.Last=a},Remove:function(a){if(a.Prev!=b)a.Prev.Next=a.Next;else this.First=a.Next;if(a.Next!=b)a.Next.Prev=a.Prev;else this.Last=a.Prev}};var k=function(c){var a=this;a.count=0;a.entryList=new j;a.buckets={};a.compareSelector=c==b?g.Identity:c};k.prototype={Add:function(i,j){var a=this,g=a.compareSelector(i),f=d(g),c=new l(i,j);if(h(a.buckets,f)){for(var b=a.buckets[f],e=0;e<b.length;e++)if(a.compareSelector(b[e].Key)===g){a.entryList.Replace(b[e],c);b[e]=c;return}b.push(c)}else a.buckets[f]=[c];a.count++;a.entryList.AddLast(c)},Get:function(i){var a=this,c=a.compareSelector(i),g=d(c);if(!h(a.buckets,g))return undefined;for(var e=a.buckets[g],b=0;b<e.length;b++){var f=e[b];if(a.compareSelector(f.Key)===c)return f.Value}return undefined},Set:function(k,m){var b=this,g=b.compareSelector(k),j=d(g);if(h(b.buckets,j))for(var f=b.buckets[j],c=0;c<f.length;c++)if(b.compareSelector(f[c].Key)===g){var i=new l(k,m);b.entryList.Replace(f[c],i);f[c]=i;return e}return a},Contains:function(j){var b=this,f=b.compareSelector(j),i=d(f);if(!h(b.buckets,i))return a;for(var g=b.buckets[i],c=0;c<g.length;c++)if(b.compareSelector(g[c].Key)===f)return e;return a},Clear:function(){this.count=0;this.buckets={};this.entryList=new j},Remove:function(g){var a=this,f=a.compareSelector(g),e=d(f);if(!h(a.buckets,e))return;for(var b=a.buckets[e],c=0;c<b.length;c++)if(a.compareSelector(b[c].Key)===f){a.entryList.Remove(b[c]);b.splice(c,1);if(b.length==0)delete a.buckets[e];a.count--;return}},Count:function(){return this.count},ToEnumerable:function(){var d=this;return new c(function(){var c;return new f(function(){c=d.entryList.First},function(){if(c!=b){var d={Key:c.Key,Value:c.Value};c=c.Next;return this.Yield(d)}return a},g.Blank)})}};return k}(),q=function(a){var b=this;b.Count=function(){return a.Count()};b.Get=function(b){return c.From(a.Get(b))};b.Contains=function(b){return a.Contains(b)};b.ToEnumerable=function(){return a.ToEnumerable().Select(function(a){return new o(a.Key,a.Value)})}},o=function(b,a){this.Key=function(){return b};h.call(this,a)};o.prototype=new h;return c}()
/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.22
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e((t=t||self)["@uirouter/angularjs"]={},t.angular)}(this,function(d,t){"use strict";var e=angular,b=t&&t.module?t:e;function c(r){var t=[].slice.apply(arguments,[1]),n=r.length;return function t(e){return e.length>=n?r.apply(null,e):function(){return t(e.concat([].slice.apply(arguments)))}}(t)}function r(){var r=arguments,n=r.length-1;return function(){for(var t=n,e=r[n].apply(this,arguments);t--;)e=r[t].call(this,e);return e}}function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(null,[].slice.call(arguments).reverse())}var w=function(e){return function(t){return t&&t[e]}},y=c(function(t,e,r){return r&&r[t]===e}),R=function(t){return s.apply(null,t.split(".").map(w))},l=function(r){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return!r.apply(null,t)}};function n(r,n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(null,t)&&n.apply(null,t)}}function i(r,n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(null,t)||n.apply(null,t)}}var f=function(r){return function(t){return t.reduce(function(t,e){return t&&!!r(e)},!0)}},h=function(r){return function(t){return t.reduce(function(t,e){return t||!!r(e)},!1)}},p=function(e){return function(t){return null!=t&&t.constructor===e||t instanceof e}},o=function(e){return function(t){return e===t}},v=function(t){return function(){return t}};function a(e,r){return function(t){return t[e].apply(t,r)}}function m(r){return function(t){for(var e=0;e<r.length;e++)if(r[e][0](t))return r[e][1](t)}}var u=Object.prototype.toString,g=function(e){return function(t){return typeof t===e}},_=g("undefined"),E=l(_),S=function(t){return null===t},$=i(S,_),C=g("function"),T=g("number"),P=g("string"),k=function(t){return null!==t&&"object"==typeof t},O=Array.isArray,x=function(t){return"[object Date]"===u.call(t)},j=function(t){return"[object RegExp]"===u.call(t)};function V(t){if(O(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(l(P)).length||r.filter(l(C)).length)}return C(t)}var I=n(k,s(w("then"),C)),H=function(n,t){return t.reduce(function(t,e){return t[e]=(r=n+"."+e+"()",function(){throw new Error("No implementation for "+r+". The framework specific code did not implement this method.")}),t;var r},{})},A={$q:void 0,$injector:void 0},D="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||void 0,q=D.angular||{},U=q.fromJson||JSON.parse.bind(JSON),F=q.toJson||JSON.stringify.bind(JSON),N=q.forEach||function(e,r,t){if(O(e))return e.forEach(r,t);Object.keys(e).forEach(function(t){return r(e[t],t)})},L=Object.assign||Pt,M=q.equals||kt;function B(t){return t}function G(){}function W(e,n,r,t,i){void 0===i&&(i=!1);var o=function(t){return e()[t].bind(r())};return(t=t||Object.keys(e())).reduce(function(t,e){var r;return t[e]=i?(r=e,function(){return n[r]=o(r),n[r].apply(null,arguments)}):o(e),t},n)}var z=function(t,e){return L(Object.create(t),e)},J=c(Q);function Q(t,e){return-1!==t.indexOf(e)}var K=c(Y);function Y(t,e){var r=t.indexOf(e);return 0<=r&&t.splice(r,1),t}var Z=c(X);function X(t,e){return t.push(e),e}var tt=function(e){return e.slice().forEach(function(t){"function"==typeof t&&t(),K(e,t)})};function et(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=L.apply(void 0,[{}].concat(e.reverse()));return L(n,it(t||{},Object.keys(n)))}var rt=function(t,e){return L(t,e)};function nt(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function it(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function ot(r,t){return Object.keys(r).filter(l(J(t))).reduce(function(t,e){return t[e]=r[e],t},{})}function at(t,e){return ft(t,w(e))}function ut(t,r){var e=O(t),n=e?[]:{},i=e?function(t){return n.push(t)}:function(t,e){return n[e]=t};return N(t,function(t,e){r(t,e)&&i(t,e)}),n}function st(t,r){var n;return N(t,function(t,e){n||r(t,e)&&(n=t)}),n}var ct=ft;function ft(t,r,n){return n=n||(O(t)?[]:{}),N(t,function(t,e){return n[e]=r(t,e)}),n}var lt=function(e){return Object.keys(e).map(function(t){return e[t]})},ht=function(t,e){return t&&e},pt=function(t,e){return t||e},vt=function(t,e){return t.concat(e)},dt=function(t,e){return O(e)?t.concat(e.reduce(dt,[])):mt(t,e)};function mt(t,e){return t.push(e),t}var yt=function(t,e){return J(t,e)?t:mt(t,e)},gt=function(t){return t.reduce(vt,[])},wt=function(t){return t.reduce(dt,[])},_t=$t,St=$t;function $t(r,n){return void 0===n&&(n="assert failure"),function(t){var e=r(t);if(!e)throw new Error(C(n)?n(t):n);return e}}var bt=function(e){return Object.keys(e).map(function(t){return[t,e[t]]})};function Rt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];for(var r=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),n=[],i=function(e){switch(t.length){case 1:n.push([t[0][e]]);break;case 2:n.push([t[0][e],t[1][e]]);break;case 3:n.push([t[0][e],t[1][e],t[2][e]]);break;case 4:n.push([t[0][e],t[1][e],t[2][e],t[3][e]]);break;default:n.push(t.map(function(t){return t[e]}))}},o=0;o<r;o++)i(o);return n}function Et(t,e){var r,n;if(O(e)&&(r=e[0],n=e[1]),!P(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function Ct(t){return t.length&&t[t.length-1]||void 0}function Tt(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),e||(e={}),L(e,t)}function Pt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function kt(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!=t&&e!=e)return!0;var r=typeof t;if(r!==typeof e||"object"!==r)return!1;var n,i,o=[t,e];if(f(O)(o))return i=e,(n=t).length===i.length&&Rt(n,i).reduce(function(t,e){return t&&kt(e[0],e[1])},!0);if(f(x)(o))return t.getTime()===e.getTime();if(f(j)(o))return t.toString()===e.toString();if(f(C)(o))return!0;if([C,O,x,j].map(h).reduce(function(t,e){return t||!!e(o)},!1))return!1;var a={};for(var u in t){if(!kt(t[u],e[u]))return!1;a[u]=!0}for(var u in e)if(!a[u])return!1;return!0}var Ot,xt=function(t){return t.catch(function(t){return 0})&&t},jt=function(t){return xt(A.$q.reject(t))},Vt=function(){function e(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return e.is=function(t){return!!/[!,*]+/.exec(t)},e.fromString=function(t){return e.is(t)?new e(t):null},e.prototype.matches=function(t){return this.regexp.test("."+t)},e}(),It=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e,this._evictListeners=[],this.onEvict=Z(this._evictListeners)}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&this.evict(),t},t.prototype.evict=function(){var e=this._items.shift();return this._evictListeners.forEach(function(t){return t(e)}),e},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return-1<e&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();(Ot=d.RejectType||(d.RejectType={}))[Ot.SUPERSEDED=2]="SUPERSEDED",Ot[Ot.ABORTED=3]="ABORTED",Ot[Ot.INVALID=4]="INVALID",Ot[Ot.IGNORED=5]="IGNORED",Ot[Ot.ERROR=6]="ERROR";var Ht=0,At=function(){function n(t,e,r){this.$id=Ht++,this.type=t,this.message=e,this.detail=r}return n.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&p(n)(t._transitionRejection)},n.superseded=function(t,e){var r=new n(d.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",t);return e&&e.redirected&&(r.redirected=!0),r},n.redirected=function(t){return n.superseded(t,{redirected:!0})},n.invalid=function(t){return new n(d.RejectType.INVALID,"This transition is invalid",t)},n.ignored=function(t){return new n(d.RejectType.IGNORED,"The transition was ignored",t)},n.aborted=function(t){return new n(d.RejectType.ABORTED,"The transition has been aborted",t)},n.errored=function(t){return new n(d.RejectType.ERROR,"The transition errored",t)},n.normalize=function(t){return p(n)(t)?t:n.errored(t)},n.prototype.toString=function(){var t,e=(t=this.detail)&&t.toString!==Object.prototype.toString?t.toString():Bt(t);return"Transition Rejection($id: "+this.$id+" type: "+this.type+", message: "+this.message+", detail: "+e+")"},n.prototype.toPromise=function(){return L(jt(this),{_transitionRejection:this})},n}();function Dt(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function qt(t,e){for(;e.length<t;)e+=" ";return e}function Ut(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function Ft(t){var e=Nt(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function Nt(t){var e=O(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}var Lt=At.isRejectionPromise,Mt=m([[_,v("undefined")],[S,v("null")],[I,v("[Promise]")],[Lt,function(t){return t._transitionRejection.toString()}],[function(t){return k(t)&&!O(t)&&t.constructor!==Object&&C(t.toString)},function(t){return t.toString()}],[V,Ft],[v(!0),B]]);function Bt(t){var e=[];function r(t){if(k(t)){if(-1!==e.indexOf(t))return"[circular ref]";e.push(t)}return Mt(t)}return _(t)?r(t):JSON.stringify(t,function(t,e){return r(e)}).replace(/\\"/g,'"')}var Gt=function(r){return function(t){if(!t)return["",""];var e=t.indexOf(r);return-1===e?[t,""]:[t.substr(0,e),t.substr(e+1)]}},Wt=new RegExp("^(?:[a-z]+:)?//[^/]+/"),zt=function(t){return t.replace(/\/[^/]*$/,"")},Jt=Gt("#"),Qt=Gt("?"),Kt=Gt("="),Yt=function(t){return t?t.replace(/^#/,""):""};function Zt(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(B)}}function Xt(t,e){return P(Ct(t))&&P(e)?t.slice(0,-1).concat(Ct(t)+e):mt(t,e)}function te(t){if(!t)return"ui-view (defunct)";var e=t.creationContext?t.creationContext.name||"(root)":"(none)";return"[ui-view#"+t.id+" "+t.$type+":"+t.fqn+" ("+t.name+"@"+e+")]"}function ee(t){return T(t)?d.Category[t]:d.Category[d.Category[t]]}var re,ne=Function.prototype.bind.call(console.log,console),ie=C(console.table)?console.table.bind(console):ne.bind(console);(re=d.Category||(d.Category={}))[re.RESOLVE=0]="RESOLVE",re[re.TRANSITION=1]="TRANSITION",re[re.HOOK=2]="HOOK",re[re.UIVIEW=3]="UIVIEW",re[re.VIEWCONFIG=4]="VIEWCONFIG";var oe=R("$id"),ae=R("router.$id"),ue=function(t){return"Transition #"+oe(t)+"-"+ae(t)},se=function(){function t(){this._enabled={},this.approximateDigests=0}return t.prototype._set=function(e,t){var r=this;t.length||(t=Object.keys(d.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(t){return d.Category[t]})),t.map(ee).forEach(function(t){return r._enabled[t]=e})},t.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},t.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},t.prototype.enabled=function(t){return!!this._enabled[ee(t)]},t.prototype.traceTransitionStart=function(t){this.enabled(d.Category.TRANSITION)&&console.log(ue(t)+": Started  -> "+Bt(t))},t.prototype.traceTransitionIgnored=function(t){this.enabled(d.Category.TRANSITION)&&console.log(ue(t)+": Ignored  <> "+Bt(t))},t.prototype.traceHookInvocation=function(t,e,r){if(this.enabled(d.Category.HOOK)){var n=R("traceData.hookType")(r)||"internal",i=R("traceData.context.state.name")(r)||R("traceData.context")(r)||"unknown",o=Ft(t.registeredHook.callback);console.log(ue(e)+":   Hook -> "+n+" context: "+i+", "+Dt(200,o))}},t.prototype.traceHookResult=function(t,e,r){this.enabled(d.Category.HOOK)&&console.log(ue(e)+":   <- Hook returned: "+Dt(200,Bt(t)))},t.prototype.traceResolvePath=function(t,e,r){this.enabled(d.Category.RESOLVE)&&console.log(ue(r)+":         Resolving "+t+" ("+e+")")},t.prototype.traceResolvableResolved=function(t,e){this.enabled(d.Category.RESOLVE)&&console.log(ue(e)+":               <- Resolved  "+t+" to: "+Dt(200,Bt(t.data)))},t.prototype.traceError=function(t,e){this.enabled(d.Category.TRANSITION)&&console.log(ue(e)+": <- Rejected "+Bt(e)+", reason: "+t)},t.prototype.traceSuccess=function(t,e){this.enabled(d.Category.TRANSITION)&&console.log(ue(e)+": <- Success  "+Bt(e)+", final state: "+t.name)},t.prototype.traceUIViewEvent=function(t,e,r){void 0===r&&(r=""),this.enabled(d.Category.UIVIEW)&&console.log("ui-view: "+qt(30,t)+" "+te(e)+r)},t.prototype.traceUIViewConfigUpdated=function(t,e){this.enabled(d.Category.UIVIEW)&&this.traceUIViewEvent("Updating",t," with ViewConfig from context='"+e+"'")},t.prototype.traceUIViewFill=function(t,e){this.enabled(d.Category.UIVIEW)&&this.traceUIViewEvent("Fill",t," with: "+Dt(200,e))},t.prototype.traceViewSync=function(t){if(this.enabled(d.Category.VIEWCONFIG)){var a="uiview component fqn",e=t.map(function(t){var e,r=t.uiView,n=t.viewConfig,i=r&&r.fqn,o=n&&n.viewDecl.$context.name+": ("+n.viewDecl.$name+")";return(e={})[a]=i,e["view config state (view name)"]=o,e}).sort(function(t,e){return(t[a]||"").localeCompare(e[a]||"")});ie(e)}},t.prototype.traceViewServiceEvent=function(t,e){var r,n,i;this.enabled(d.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+t+" "+(n=(r=e).viewDecl,i=n.$context.name||"(root)","[View#"+r.$id+" from '"+i+"' state]: target ui-view: '"+n.$uiViewName+"@"+n.$uiViewContextAnchor+"'"))},t.prototype.traceViewServiceUIViewEvent=function(t,e){this.enabled(d.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+t+" "+te(e))},t}(),ce=new se,fe=function(){function t(t){this.pattern=/.*/,this.inherit=!0,L(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new le(this,t)},t}();function le(n,i){var o=this;function a(t){return O(t)?t:E(t)?[t]:[]}function u(r,n){return function(t){if(O(t)&&0===t.length)return t;var e=ft(a(t),r);return!0===n?0===ut(e,function(t){return!t}).length:function(t){switch(t.length){case 0:return;case 1:return"auto"===i?t[0]:t;default:return t}}(e)}}function s(o){return function(t,e){var r=a(t),n=a(e);if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++)if(!o(r[i],n[i]))return!1;return!0}}["encode","decode","equals","$normalize"].forEach(function(t){var e=n[t].bind(n),r="equals"===t?s:u;o[t]=r(e)}),L(this,{dynamic:n.dynamic,name:n.name,pattern:n.pattern,inherit:n.inherit,raw:n.raw,is:u(n.is.bind(n),!0),$arrayMode:i})}var he,pe=Object.prototype.hasOwnProperty,ve=function(t){return 0===["value","type","squash","array","dynamic"].filter(pe.bind(t||{})).length};function de(t,e,r){var n=!1===r.reloadOnSearch&&e===d.DefType.SEARCH||void 0,i=st([r.dynamic,n],E),o=E(i)?{dynamic:i}:{},a=function(t){function e(){return t.value}t=ve(t)?{value:t}:t,e.__cacheable=!0;var r=V(t.value)?t.value:e;return L(t,{$$fn:r})}(r&&r.params&&r.params[t]);return L(o,a)}(he=d.DefType||(d.DefType={}))[he.PATH=0]="PATH",he[he.SEARCH=1]="SEARCH",he[he.CONFIG=2]="CONFIG";var me,ye=function(){function n(t,e,r,n,i){var o=de(t,r,i);e=function(t,e,r,n,i){if(t.type&&e&&"string"!==e.name)throw new Error("Param '"+n+"' has two type configurations.");if(t.type&&e&&"string"===e.name&&i.type(t.type))return i.type(t.type);if(e)return e;if(t.type)return t.type instanceof fe?t.type:i.type(t.type);var o=r===d.DefType.CONFIG?"any":r===d.DefType.PATH?"path":r===d.DefType.SEARCH?"query":"string";return i.type(o)}(o,e,r,t,n.paramTypes);var a,u,s=(a={array:r===d.DefType.SEARCH&&"auto"},u=t.match(/\[\]$/)?{array:!0}:{},L(a,u,o).array);e=s?e.$asArray(s,r===d.DefType.SEARCH):e;var c=void 0!==o.value||r===d.DefType.SEARCH,f=E(o.dynamic)?!!o.dynamic:!!e.dynamic,l=E(o.raw)?!!o.raw:!!e.raw,h=function(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!E(n)||null==n)return r;if(!0===n||P(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}(o,c,n.defaultSquashPolicy()),p=function(t,e,r,n){var i=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}],o=O(t.replace)?t.replace:[];P(n)&&o.push({from:n,to:void 0});var a=ft(o,w("from"));return ut(i,function(t){return-1===a.indexOf(t.from)}).concat(o)}(o,s,c,h),v=E(o.inherit)?!!o.inherit:!!e.inherit;L(this,{id:t,type:e,location:r,isOptional:c,dynamic:f,raw:l,squash:h,replace:p,inherit:v,array:s,config:o})}return n.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},n.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},n.equals=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),0===n.changed(t,e,r).length},n.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(ht,!0)},n.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},n.prototype.value=function(t){var i=this;return t=function(t){for(var e=0,r=i.replace;e<r.length;e++){var n=r[e];if(n.from===t)return n.to}return t}(t),_(t)?function(){if(i._defaultValueCache)return i._defaultValueCache.defaultValue;if(!A.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=A.$injector.invoke(i.config.$$fn);if(null!=t&&!i.type.is(t))throw new Error("Default value ("+t+") for parameter '"+i.id+"' is not an instance of ParamType ("+i.type.name+")");return i.config.$$fn.__cacheable&&(i._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},n.prototype.isSearch=function(){return this.location===d.DefType.SEARCH},n.prototype.validates=function(t){if((_(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(P(r)&&!this.type.pattern.exec(r))},n.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},n}(),ge=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=it(t.prototype,["hash","string","query","path","int","bool","date","json","any"]);this.types=z(ft(this.defaultTypes,function(t,e){return new fe(L({name:e},t))}),{})}return t.prototype.dispose=function(){this.types={}},t.prototype.type=function(t,e,r){if(!E(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new fe(L({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");L(this.types[t.name],A.$injector.invoke(t.def))}},t}();me=function(t){var e=function(t){return null!=t?t.toString():t},r={encode:e,decode:e,is:p(String),pattern:/.*/,equals:function(t,e){return t==e}};return L({},r,t)},L(ge.prototype,{string:me({}),path:me({pattern:/[^/]*/}),query:me({}),hash:me({inherit:!1}),int:me({decode:function(t){return parseInt(t,10)},is:function(t){return!$(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:me({encode:function(t){return t?1:0},decode:function(t){return 0!==parseInt(t,10)},is:p(Boolean),pattern:/0|1/}),date:me({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(r,n){return["getFullYear","getMonth","getDate"].reduce(function(t,e){return t&&r[e]()===n[e]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:me({encode:F,decode:U,is:p(Object),equals:M,pattern:/[^/]*/}),any:me({encode:B,decode:B,is:function(){return!0},equals:M})});var we=function(){function t(t){void 0===t&&(t={}),L(this,t)}return t.prototype.$inherit=function(t,e,r){var n,i=nt(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params)).length)for(var s in n)0<=a.indexOf(n[s])||(a.push(n[s]),o[n[s]]=this[n[s]]);return L({},o,t)},t}(),_e=function(){function n(t){if(t instanceof n){var e=t;this.state=e.state,this.paramSchema=e.paramSchema.slice(),this.paramValues=L({},e.paramValues),this.resolvables=e.resolvables.slice(),this.views=e.views&&e.views.slice()}else{var r=t;this.state=r,this.paramSchema=r.parameters({inherit:!1}),this.paramValues={},this.resolvables=r.resolvables.map(function(t){return t.clone()})}}return n.prototype.clone=function(){return new n(this)},n.prototype.applyRawParams=function(n){return this.paramValues=this.paramSchema.reduce(function(t,e){return Et(t,[(r=e).id,r.value(n[r.id])]);var r},{}),this},n.prototype.parameter=function(t){return st(this.paramSchema,y("id",t))},n.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},n.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return ye.changed(r,this.paramValues,t.paramValues)},n.clone=function(t){return t.clone()},n}(),Se=function(){function n(t,e,r,n){this._stateRegistry=t,this._identifier=e,this._identifier=e,this._params=L({},r||{}),this._options=L({},n||{}),this._definition=t.matcher.find(e,this._options.relative)}return n.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},n.prototype.identifier=function(){return this._identifier},n.prototype.params=function(){return this._params},n.prototype.$state=function(){return this._definition},n.prototype.state=function(){return this._definition&&this._definition.self},n.prototype.options=function(){return this._options},n.prototype.exists=function(){return!(!this._definition||!this._definition.self)},n.prototype.valid=function(){return!this.error()},n.prototype.error=function(){var t=this.options().relative;if(this._definition||!t)return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'";var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"},n.prototype.toString=function(){return"'"+this.name()+"'"+Bt(this.params())},n.prototype.withState=function(t){return new n(this._stateRegistry,t,this._params,this._options)},n.prototype.withParams=function(t,e){void 0===e&&(e=!1);var r=e?t:L({},this._params,t);return new n(this._stateRegistry,this._identifier,r,this._options)},n.prototype.withOptions=function(t,e){void 0===e&&(e=!1);var r=e?t:L({},this._options,t);return new n(this._stateRegistry,this._identifier,this._params,r)},n.isDef=function(t){return t&&t.state&&(P(t.state)||P(t.state.name))},n}(),$e=function(){function h(){}return h.makeTargetState=function(t,e){var r=Ct(e).state;return new Se(t,r,e.map(w("paramValues")).reduce(rt,{}),{})},h.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new _e(t).applyRawParams(e)})},h.buildToPath=function(t,e){var r=h.buildPath(e);return e.options().inherit?h.inheritParams(t,r,Object.keys(e.params())):r},h.applyViewConfigs=function(i,o,e){o.filter(function(t){return J(e,t.state)}).forEach(function(e){var t=lt(e.state.views||{}),r=h.subPath(o,function(t){return t===e}),n=t.map(function(t){return i.createViewConfig(r,t)});e.views=n.reduce(vt,[])})},h.inheritParams=function(s,t,c){void 0===c&&(c=[]);var f=s.map(function(t){return t.paramSchema}).reduce(vt,[]).filter(function(t){return!t.inherit}).map(w("id"));return t.map(function(t){var e=L({},t&&t.paramValues),r=it(e,c);e=ot(e,c);var n,i,o,a=ot((n=s,i=t.state,o=st(n,y("state",i)),L({},o&&o.paramValues)||{}),f),u=L(e,a,r);return new _e(t.state).applyRawParams(u)})},h.treeChanges=function(t,n,e){for(var r,i,o,a,u,s,c=Math.min(t.length,n.length),f=0;f<c&&t[f].state!==e&&(r=t[f],i=n[f],r.equals(i,h.nonDynamicParams));)f++;a=(o=t).slice(0,f),u=o.slice(f);var l=a.map(function(t,e){var r=t.clone();return r.paramValues=n[e].paramValues,r});return s=n.slice(f),{from:o,to:l.concat(s),retained:a,retainedWithToParams:l,exiting:u,entering:s}},h.matching=function(t,e,i){var o=!1;return Rt(t,e).reduce(function(t,e){var r=e[0],n=e[1];return(o=o||!r.equals(n,i))?t:t.concat(r)},[])},h.equals=function(t,e,r){return t.length===e.length&&h.matching(t,e,r).length===t.length},h.subPath=function(t,e){var r=st(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},h.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},h.paramValues=function(t){return t.reduce(function(t,e){return L(t,e.paramValues)},{})},h}(),be={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}},Re={when:"LAZY",async:"WAIT"},Ee=function(){function a(t,e,r,n,i){if(this.resolved=!1,this.promise=void 0,t instanceof a)L(this,t);else if(C(e)){if($(t))throw new Error("new Resolvable(): token argument is required");if(!C(e))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=t,this.policy=n,this.resolveFn=e,this.deps=r||[],this.data=i,this.resolved=void 0!==i,this.promise=this.resolved?A.$q.when(this.data):void 0}else if(k(t)&&t.token&&(t.hasOwnProperty("resolveFn")||t.hasOwnProperty("data"))){var o=t;return new a(o.token,o.resolveFn,o.deps,o.policy,o.data)}}return a.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||Re.when,async:e.async||r.async||Re.async}},a.prototype.resolve=function(e,r){var n=this,t=A.$q,i=e.findNode(this),o=i&&i.state,a="RXWAIT"===this.getPolicy(o).async?function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})}:B;return this.promise=t.when().then(function(){return t.all(e.getDependencies(n).map(function(t){return t.get(e,r)}))}).then(function(t){return n.resolveFn.apply(null,t)}).then(a).then(function(t){return n.data=t,n.resolved=!0,n.resolveFn=null,ce.traceResolvableResolved(n,r),n.data})},a.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},a.prototype.toString=function(){return"Resolvable(token: "+Bt(this.token)+", requires: ["+this.deps.map(Bt)+"])"},a.prototype.clone=function(){return new a(this)},a.fromData=function(t,e){return new a(t,function(){return e},null,null,e)},a}(),Ce=be.when,Te=[Ce.EAGER,Ce.LAZY],Pe=[Ce.EAGER],ke="Native Injector",Oe=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(yt,[])},t.prototype.getResolvable=function(e){return Ct(this._path.map(function(t){return t.resolvables}).reduce(vt,[]).filter(function(t){return t.token===e}))},t.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},t.prototype.subContext=function(e){return new t($e.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var r=st(this._path,y("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},t.prototype.resolvePath=function(t,u){var s=this;void 0===t&&(t="LAZY");var c=(J(Te,t)?t:"LAZY")===be.when.EAGER?Pe:Te;ce.traceResolvePath(this._path,t,u);var f=function(e,r){return function(t){return J(e,s.getPolicy(t)[r])}},e=this._path.reduce(function(t,e){var r=e.resolvables.filter(f(c,"when")),n=r.filter(f(["NOWAIT"],"async")),i=r.filter(l(f(["NOWAIT"],"async"))),o=s.subContext(e.state),a=function(e){return e.get(o,u).then(function(t){return{token:e.token,value:t}})};return n.forEach(a),t.concat(i.map(a))},[]);return A.$q.all(e)},t.prototype.injector=function(){return this._injector||(this._injector=new xe(this))},t.prototype.findNode=function(e){return st(this._path,function(t){return J(t.resolvables,e)})},t.prototype.getDependencies=function(e){var n=this,r=this.findNode(e),i=($e.subPath(this._path,function(t){return t===r})||this._path).reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(t){return t!==e});return e.deps.map(function(e){var t=i.filter(function(t){return t.token===e});if(t.length)return Ct(t);var r=n.injector().getNative(e);if(_(r))throw new Error("Could not find Dependency Injection token: "+Bt(e));return new Ee(e,function(){return r},[],r)})},t}(),xe=function(){function t(t){this.context=t,this.native=this.get(ke)||A.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+Bt(e.token));return e.data}return this.getNative(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):A.$q.when(this.native.get(t))},t.prototype.getNative=function(t){return this.native&&this.native.get(t)},t}();function je(t){return t.name}function Ve(t){return t.self.$$state=function(){return t},t.self}function Ie(t){return t.parent&&t.parent.data&&(t.data=t.self.data=z(t.parent.data,t.data)),t.data}var He=function(a,u){return function(t){var e=t.self;if(e&&e.url&&e.name&&e.name.match(/\.\*\*$/)){var r={};Tt(e,r),r.url+="{remainder:any}",e=r}var n=t.parent,i=function(t){if(!P(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}}(e.url),o=i?a.compile(i.val,{state:e}):e.url;if(!o)return null;if(!a.isMatcher(o))throw new Error("Invalid url '"+o+"' in state '"+t+"'");return i&&i.root?o:(n&&n.navigable||u()).url.append(o)}};function Ae(t){return t.parent?t.parent.path.concat(t):[t]}function De(t){var e=t.parent?L({},t.parent.includes):{};return e[t.name]=!0,e}function qe(t){var e,r,n=function(t){return t.provide||t.token},i=m([[w("resolveFn"),function(t){return new Ee(n(t),t.resolveFn,t.deps,t.policy)}],[w("useFactory"),function(t){return new Ee(n(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[w("useClass"),function(t){return new Ee(n(t),function(){return new t.useClass},[],t.policy)}],[w("useValue"),function(t){return new Ee(n(t),function(){return t.useValue},[],t.policy,t.useValue)}],[w("useExisting"),function(t){return new Ee(n(t),B,[t.useExisting],t.policy)}]]),o=m([[s(w("val"),P),function(t){return new Ee(t.token,B,[t.val],t.policy)}],[s(w("val"),O),function(t){return new Ee(t.token,Ct(t.val),t.val.slice(0,-1),t.policy)}],[s(w("val"),C),function(t){return new Ee(t.token,t.val,(e=t.val,r=A.$injector,e.$inject||r&&r.annotate(e,r.strictDi)||"deferred"),t.policy);var e,r}]]),a=m([[p(Ee),function(t){return t}],[function(t){return!(!t.token||!t.resolveFn)},i],[function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},i],[function(t){return!!(t&&t.val&&(P(t.val)||O(t.val)||C(t.val)))},o],[v(!0),function(t){throw new Error("Invalid resolve value: "+Bt(t))}]]),u=t.resolve;return(O(u)?u:(e=u,r=t.resolvePolicy||{},Object.keys(e||{}).map(function(t){return{token:t,val:e[t],deps:void 0,policy:r[t]}}))).map(a)}var Ue,Fe,Ne=function(){function t(e,t){this.matcher=e;var n,r,i=this,o=function(){return e.find("")},a=function(t){return""===t.name};this.builders={name:[je],self:[Ve],parent:[function(t){return a(t)?null:e.find(i.parentName(t))||o()}],data:[Ie],url:[He(t,o)],navigable:[(r=a,function(t){return!r(t)&&t.url?t:t.parent?t.parent.navigable:null})],params:[(n=t.paramFactory,function(r){var t=r.url&&r.url.parameters({inherit:!1})||[],e=lt(ct(ot(r.params||{},t.map(w("id"))),function(t,e){return n.fromConfig(e,null,r.self)}));return t.concat(e).map(function(t){return[t.id,t]}).reduce(Et,{})})],views:[],path:[Ae],includes:[De],resolvables:[qe]}}return t.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return P(t)&&!E(e)?1<n.length?n:n[0]:P(t)&&C(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this.matcher,r=this.builders,n=this.parentName(t);if(n&&!e.find(n,void 0,!1))return null;for(var i in r)if(r.hasOwnProperty(i)){var o=r[i].reduce(function(e,r){return function(t){return r(t,e)}},G);t[i]=o(t)}return t},t.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if("**"===r.pop()&&r.pop(),r.length){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return r.join(".")}return t.parent?P(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=P(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},t}(),Le=function(){function r(t){return r.create(t||{})}return r.create=function(t){t=r.isStateClass(t)?new t:t;var e=z(z(t,r.prototype));return t.$$state=function(){return e},e.self=t,e.__stateObjectCache={nameGlob:Vt.fromString(e.name)},e},r.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},r.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},r.prototype.root=function(){return this.parent&&this.parent.root()||this},r.prototype.parameters=function(e){return((e=et(e,{inherit:!0,matchingKeys:null})).inherit&&this.parent&&this.parent.parameters()||[]).concat(lt(this.params)).filter(function(t){return!e.matchingKeys||e.matchingKeys.hasOwnProperty(t.id)})},r.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||st(lt(this.params),y("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},r.prototype.toString=function(){return this.fqn()},r.isStateClass=function(t){return C(t)&&!0===t.__uiRouterState},r.isState=function(t){return k(t.__stateObjectCache)},r}(),Me=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return 0===(t=t||"").indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=P(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=lt(this._states).filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return 1<a.length&&console.log("stateMatcher.find: Found multiple matches for "+i+" using glob: ",a.map(function(t){return t.name})),a[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=n.length,o=0,a=r;o<i;o++)if(""!==n[o]||0!==o){if("^"!==n[o])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(o).join(".");return a.name+(a.name&&u?".":"")+u},t}(),Be=function(){function t(t,e,r,n){this.router=t,this.states=e,this.builder=r,this.listeners=n,this.queue=[]}return t.prototype.dispose=function(){this.queue=[]},t.prototype.register=function(t){var e=this.queue,r=Le.create(t),n=r.name;if(!P(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||J(e.map(w("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},t.prototype.flush=function(){for(var e=this,t=this.queue,r=this.states,n=this.builder,i=[],o=[],a={},u=function(t){return e.states.hasOwnProperty(t)&&e.states[t]},s=function(){i.length&&e.listeners.forEach(function(t){return t("registered",i.map(function(t){return t.self}))})};0<t.length;){var c=t.shift(),f=c.name,l=n.build(c),h=o.indexOf(c);if(l){var p=u(f);if(p&&p.name===f)throw new Error("State '"+f+"' is already defined");var v=u(f+".**");v&&this.router.stateRegistry.deregister(v),r[f]=c,this.attachRoute(c),0<=h&&o.splice(h,1),i.push(c)}else{var d=a[f];if(a[f]=t.length,0<=h&&d===t.length)return t.push(c),s(),r;h<0&&o.push(c),t.push(c)}}return s(),r},t.prototype.attachRoute=function(t){if(!t.abstract&&t.url){var e=this.router.urlService.rules;e.rule(e.urlRuleFactory.create(t))}},t}(),Ge=function(){function t(t){this.router=t,this.states={},this.listeners=[],this.matcher=new Me(this.states),this.builder=new Ne(this.matcher,t.urlMatcherFactory),this.stateQueue=new Be(t,this.states,this.builder,this.listeners),this._registerRoot()}return t.prototype._registerRoot=function(){(this._root=this.stateQueue.register({name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0})).navigable=null},t.prototype.dispose=function(){var e=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(t){return e.get(t)&&e.deregister(t)})},t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){K(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var r=this,n=this.get().map(function(t){return t.$$state()}),i=function(e){var t=n.filter(function(t){return-1!==e.indexOf(t.parent)});return 0===t.length?t:t.concat(i(t))},e=i([t]),o=[t].concat(e).reverse();return o.forEach(function(t){var e=r.router.urlService.rules;e.rules().filter(y("state",t)).forEach(function(t){return e.removeRule(t)}),delete r.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},t.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}();(Ue=d.TransitionHookPhase||(d.TransitionHookPhase={}))[Ue.CREATE=0]="CREATE",Ue[Ue.BEFORE=1]="BEFORE",Ue[Ue.RUN=2]="RUN",Ue[Ue.SUCCESS=3]="SUCCESS",Ue[Ue.ERROR=4]="ERROR",(Fe=d.TransitionHookScope||(d.TransitionHookScope={}))[Fe.TRANSITION=0]="TRANSITION",Fe[Fe.STATE=1]="STATE";var We={current:G,transition:null,traceData:{},bind:null},ze=function(){function o(t,e,r,n){var i=this;this.transition=t,this.stateContext=e,this.registeredHook=r,this.options=n,this.isSuperseded=function(){return i.type.hookPhase===d.TransitionHookPhase.RUN&&!i.options.transition.isActive()},this.options=et(n,We),this.type=r.eventType}return o.chain=function(t,e){return t.reduce(function(t,e){return t.then(function(){return e.invokeHook()})},e||A.$q.when())},o.invokeHooks=function(t,e){for(var r=0;r<t.length;r++){var n=t[r].invokeHook();if(I(n)){var i=t.slice(r+1);return o.chain(i,n).then(e)}}return e()},o.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},o.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},o.prototype.invokeHook=function(){var e=this,r=this.registeredHook;if(!r._deregistered){var t=this.getNotCurrentRejection();if(t)return t;var n=this.options;ce.traceHookInvocation(this,this.transition,n);var i=function(t){return r.eventType.getErrorHandler(e)(t)},o=function(t){return r.eventType.getResultHandler(e)(t)};try{var a=r.callback.call(n.bind,e.transition,e.stateContext);return!this.type.synchronous&&I(a)?a.catch(function(t){return At.normalize(t).toPromise()}).then(o,i):o(a)}catch(t){return i(At.normalize(t))}finally{r.invokeLimit&&++r.invokeCount>=r.invokeLimit&&r.deregister()}}},o.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(I(t)?t.then(function(t){return e.handleHookResult(t)}):(ce.traceHookResult(t,this.transition,this.options),!1===t?At.aborted("Hook aborted transition").toPromise():p(Se)(t)?At.redirected(t).toPromise():void 0))},o.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?At.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?At.aborted().toPromise():this.isSuperseded()?At.superseded(this.options.current()).toPromise():void 0},o.prototype.toString=function(){var t=this.options,e=this.registeredHook;return(R("traceData.hookType")(t)||"internal")+" context: "+(R("traceData.context.state.name")(t)||R("traceData.context")(t)||"unknown")+", "+Dt(200,Nt(e.callback))},o.HANDLE_RESULT=function(e){return function(t){return e.handleHookResult(t)}},o.LOG_REJECTED_RESULT=function(e){return function(t){I(t)&&t.catch(function(t){return e.logError(At.normalize(t))})}},o.LOG_ERROR=function(e){return function(t){return e.logError(t)}},o.REJECT_ERROR=function(t){return function(t){return jt(t)}},o.THROW_ERROR=function(t){return function(t){throw t}},o}();function Je(t,e,r){var i=P(e)?[e]:e;return!!(C(i)?i:function(t){for(var e=i,r=0;r<e.length;r++){var n=new Vt(e[r]);if(n&&n.matches(t.name)||!n&&e[r]===t.name)return!0}return!1})(t,r)}var Qe=function(){function t(t,e,r,n,i,o){void 0===o&&(o={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.removeHookFromRegistry=i,this.invokeCount=0,this._deregistered=!1,this.priority=o.priority||0,this.bind=o.bind||null,this.invokeLimit=o.invokeLimit}return t.prototype._matchingNodes=function(t,e,r){if(!0===e)return t;var n=t.filter(function(t){return Je(t.state,e,r)});return n.length?n:null},t.prototype._getDefaultMatchCriteria=function(){return ct(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},t.prototype._getMatchingNodes=function(o,a){var u=this,s=L(this._getDefaultMatchCriteria(),this.matchCriteria);return lt(this.tranSvc._pluginapi._getPathTypes()).reduce(function(t,e){var r=e.scope===d.TransitionHookScope.STATE,n=o[e.name]||[],i=r?n:[Ct(n)];return t[e.name]=u._matchingNodes(i,s[e.name],a),t},{})},t.prototype.matches=function(t,e){var r=this._getMatchingNodes(t,e);return lt(r).every(B)?r:null},t.prototype.deregister=function(){this.removeHookFromRegistry(this),this._deregistered=!0},t}();function Ke(t,i,o){var a=(t._registeredHooks=t._registeredHooks||{})[o.name]=[],u=K(a);function e(t,e,r){void 0===r&&(r={});var n=new Qe(i,o,e,t,u,r);return a.push(n),n.deregister.bind(n)}return t[o.name]=e}var Ye=function(){function t(t){this.transition=t}return t.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(vt,[]).filter(B)},t.prototype.buildHooks=function(o){var a=this.transition,t=a.treeChanges(),e=this.getMatchingHooks(o,t,a);if(!e)return[];var u={transition:a,current:a.options().current};return e.map(function(i){return i.matches(t,a)[o.criteriaMatchPath.name].map(function(t){var e=L({bind:i.bind,traceData:{hookType:o.name,context:t}},u),r=o.criteriaMatchPath.scope===d.TransitionHookScope.STATE?t.state.self:null,n=new ze(a,r,i,e);return{hook:i,node:t,transitionHook:n}})}).reduce(vt,[]).sort(function(i){void 0===i&&(i=!1);return function(t,e){var r=i?-1:1,n=(t.node.state.path.length-e.node.state.path.length)*r;return 0!==n?n:e.hook.priority-t.hook.priority}}(o.reverseSort)).map(function(t){return t.transitionHook})},t.prototype.getMatchingHooks=function(e,r,n){var t=e.hookPhase===d.TransitionHookPhase.CREATE,i=this.transition.router.transitionService;return(t?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(_t(O,"broken event named: "+e.name)).reduce(vt,[]).filter(function(t){return t.matches(r,n)})},t}();var Ze=w("self"),Xe=function(){function e(t,e,r){var n=this;if(this._deferred=A.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new Ye(this),this.isActive=function(){return n.router.globals.transition===n},this.router=r,!(this._targetState=e).valid())throw new Error(e.error());this._options=L({current:v(this)},e.options()),this.$id=r.transitionService._transitionCount++;var i=$e.buildToPath(t,e);this._treeChanges=$e.treeChanges(t,i,this._options.reloadState),this.createTransitionHookRegFns();var o=this._hookBuilder.buildHooksForPhase(d.TransitionHookPhase.CREATE);ze.invokeHooks(o,function(){return null}),this.applyViewConfigs(r)}return e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(t){return t.hookPhase!==d.TransitionHookPhase.CREATE}).forEach(function(t){return Ke(e,e.router.transitionService,t)})},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});$e.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},e.prototype.$from=function(){return Ct(this._treeChanges.from).state},e.prototype.$to=function(){return Ct(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!Je(this.$to(),t.to,this)||t.from&&!Je(this.$from(),t.from,this))},e.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(w("paramValues")).reduce(rt,{}))},e.prototype.paramsChanged=function(){var t=this.params("from"),r=this.params("to"),e=[].concat(this._treeChanges.to).concat(this._treeChanges.from).map(function(t){return t.paramSchema}).reduce(dt,[]).reduce(yt,[]);return ye.changed(e,t,r).reduce(function(t,e){return t[e.id]=r[e.id],t},{})},e.prototype.injector=function(e,t){void 0===t&&(t="to");var r=this._treeChanges[t];return e&&(r=$e.subPath(r,function(t){return t.state===e||t.state.name===e})),new Oe(r).injector()},e.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new Oe(this._treeChanges[t]).getTokens()},e.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=p(Ee)(t)?t:new Ee(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=st(n,function(t){return t.state.name===r});new Oe(n).addResolvables([t],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return ft(this._treeChanges.entering,w("state")).map(Ze)},e.prototype.exiting=function(){return ft(this._treeChanges.exiting,w("state")).map(Ze).reverse()},e.prototype.retained=function(){return ft(this._treeChanges.retained,w("state")).map(Ze)},e.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return(r=e?r.filter(y("state",e)):r).map(w("views")).filter(B).reduce(vt,[])},e.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},e.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(20<++e)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=L({},this.options(),t.options(),n);t=t.withOptions(i,!0);var o,a=this.router.transitionService.create(this._treeChanges.from,t),u=this._treeChanges.entering,s=a._treeChanges.entering;return $e.matching(s,u,$e.nonDynamicParams).filter(l((o=t.options().reloadState,function(t){return o&&t.state.includes[o.name]}))).forEach(function(t,e){t.resolvables=u[e].resolvables}),a},e.prototype._changedParams=function(){var t=this._treeChanges;if(!this._options.reload&&(!t.exiting.length&&!t.entering.length&&t.to.length===t.from.length&&!Rt(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(pt,!1))){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return Rt(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return ye.changed(e,r,n)}).reduce(vt,[])}},e.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(pt,!1)},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var t=this.router.globals.transition,n=this._options.reloadState,e=function(t,e){if(t.length!==e.length)return!1;var r=$e.matching(t,e);return t.length===r.filter(function(t){return!n||!t.state.includes[n.name]}).length},r=this.treeChanges(),i=t&&t.treeChanges();return i&&e(i.to,r.to)&&e(i.exiting,r.exiting)?"SameAsPending":0===r.exiting.length&&0===r.entering.length&&e(r.from,r.to)?"SameAsCurrent":void 0},e.prototype.run=function(){var e=this,r=ze.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},t=n(d.TransitionHookPhase.BEFORE);return ze.invokeHooks(t,function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),ce.traceTransitionStart(e),A.$q.when(void 0)}).then(function(){var t=n(d.TransitionHookPhase.RUN);return ze.invokeHooks(t,function(){return A.$q.when(void 0)})}).then(function(){ce.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),r(n(d.TransitionHookPhase.SUCCESS))},function(t){ce.traceError(t,e),e.success=!1,e._deferred.reject(t),e._error=t,r(n(d.TransitionHookPhase.ERROR))}),this.promise},e.prototype.valid=function(){return!this.error()||void 0!==this.success},e.prototype.abort=function(){_(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var t=this.$to();if(t.self.abstract)return At.invalid("Cannot transition to abstract state '"+t.name+"'");var e=t.parameters(),r=this.params(),n=e.filter(function(t){return!t.validates(r[t.id])});if(n.length){var i=n.map(function(t){return"["+t.id+":"+Bt(r[t.id])+"]"}).join(", "),o="The following parameter values are not valid for state '"+t.name+"': "+i;return At.invalid(o)}return!1===this.success?this._error:void 0},e.prototype.toString=function(){var t=this.from(),e=this.to(),r=function(t){return null!==t["#"]&&void 0!==t["#"]?t:ot(t,["#"])};return"Transition#"+this.$id+"( '"+(k(t)?t.name:t)+"'"+Bt(r(this._treeChanges.from.map(w("paramValues")).reduce(rt,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(k(e)?e.name:e)+"'"+Bt(r(this.params()))+" )"},e.diToken=e}();function tr(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}var er=Zt("/"),rr={state:{params:{}},strict:!0,caseInsensitive:!0},nr=function(){function m(o,a,t,e){var u=this;this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.config=e=et(e,rr),this.pattern=o;for(var r,n,i,s=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f=[],l=0,h=function(t){if(!m.nameValidator.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+o+"'");if(st(u._params,y("id",t)))throw new Error("Duplicate parameter name '"+t+"' in pattern '"+o+"'")},p=function(t,e){var r,n=t[2]||t[3],i=e?t[4]:t[4]||("*"===t[1]?"[\\s\\S]*":null);return{id:n,regexp:i,segment:o.substring(l,t.index),type:i?a.type(i)||(r=i,z(a.type(e?"query":"path"),{pattern:new RegExp(r,u.config.caseInsensitive?"i":void 0)})):null}};(r=s.exec(o))&&!(0<=(n=p(r,!1)).segment.indexOf("?"));)h(n.id),this._params.push(t.fromPath(n.id,n.type,e.state)),this._segments.push(n.segment),f.push([n.segment,Ct(this._params)]),l=s.lastIndex;var v=(i=o.substring(l)).indexOf("?");if(0<=v){var d=i.substring(v);if(i=i.substring(0,v),0<d.length)for(l=0;r=c.exec(d);)h((n=p(r,!0)).id),this._params.push(t.fromSearch(n.id,n.type,e.state)),l=s.lastIndex}this._segments.push(i),this._compiled=f.map(function(t){return tr.apply(null,t)}).concat(tr(i))}return m.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},m.pathSegmentsAndParams=function(t){return Rt(t._segments,t._params.filter(function(t){return t.location===d.DefType.PATH}).concat(void 0)).reduce(vt,[]).filter(function(t){return""!==t&&E(t)})},m.queryParams=function(t){return t._params.filter(function(t){return t.location===d.DefType.SEARCH})},m.compare=function(t,e){var r=function(t){return t._cache.weights=t._cache.weights||(e=t,e._cache.segments=e._cache.segments||e._cache.path.map(m.pathSegmentsAndParams).reduce(vt,[]).reduce(Xt,[]).map(function(t){return P(t)?er(t):t}).reduce(vt,[])).map(function(t){return"/"===t?1:P(t)?2:t instanceof ye?3:void 0});var e},n=r(t),i=r(e);!function(t,e,r){for(var n=Math.max(t.length,e.length);t.length<n;)t.push(r);for(;e.length<n;)e.push(r)}(n,i,0);var o,a,u=Rt(n,i);for(a=0;a<u.length;a++)if(0!==(o=u[a][0]-u[a][1]))return o;return 0},m.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},m.prototype.isRoot=function(){return this._cache.path[0]===this},m.prototype.toString=function(){return this.pattern},m.prototype.exec=function(t,n,e,r){var i=this;void 0===n&&(n={}),void 0===r&&(r={});var o,a,u,s=(o=this._cache,a="pattern",u=function(){return new RegExp(["^",gt(i._cache.path.map(w("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)},o[a]=o[a]||u()).exec(t);if(!s)return null;var c,f=this.parameters(),l=f.filter(function(t){return!t.isSearch()}),h=f.filter(function(t){return t.isSearch()}),p=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),v={};if(p!==s.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var d=0;d<p;d++){for(var m=l[d],y=s[d+1],g=0;g<m.replace.length;g++)m.replace[g].from===y&&(y=m.replace[g].to);y&&!0===m.array&&(void 0,y=ft(ft((c=function(t){return t.split("").reverse().join("")})(y).split(/-(?!\\)/),c),function(t){return t.replace(/\\-/g,"-")}).reverse()),E(y)&&(y=m.type.decode(y)),v[m.id]=m.value(y)}return h.forEach(function(t){for(var e=n[t.id],r=0;r<t.replace.length;r++)t.replace[r].from===e&&(e=t.replace[r].to);E(e)&&(e=t.type.decode(e)),v[t.id]=t.value(e)}),e&&(v["#"]=e),v},m.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:gt(this._cache.path.map(function(t){return t._params}))},m.prototype.parameter=function(n,t){var i=this;void 0===t&&(t={});var e=this._cache.parent;return function(){for(var t=0,e=i._params;t<e.length;t++){var r=e[t];if(r.id===n)return r}}()||!1!==t.inherit&&e&&e.parameter(n,t)||null},m.prototype.validates=function(n){return n=n||{},this.parameters().filter(function(t){return n.hasOwnProperty(t.id)}).map(function(t){return r=n[(e=t).id],!e||e.validates(r);var e,r}).reduce(ht,!0)},m.prototype.format=function(a){void 0===a&&(a={});var t=this._cache.path,e=t.map(m.pathSegmentsAndParams).reduce(vt,[]).map(function(t){return P(t)?t:n(t)}),r=t.map(m.queryParams).reduce(vt,[]).map(n);if(e.concat(r).filter(function(t){return!1===t.isValid}).length)return null;function n(t){var e=t.value(a[t.id]),r=t.validates(e),n=t.isDefaultValue(e),i=!!n&&t.squash,o=t.type.encode(e);return{param:t,value:e,isValid:r,isDefaultValue:n,squash:i,encoded:o}}var i=e.reduce(function(t,e){if(P(e))return t+e;var r=e.squash,n=e.encoded,i=e.param;return!0===r?t.match(/\/$/)?t.slice(0,-1):t:P(r)?t+r:!1!==r?t:null==n?t:O(n)?t+ft(n,m.encodeDashes).join("-"):i.raw?t+n:t+encodeURIComponent(n)},""),o=r.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(O(n)||(n=[n]),0!==n.length))return e.raw||(n=ft(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(B).reduce(vt,[]).join("&");return i+(o?"?"+o:"")+(a["#"]?"#"+a["#"]:"")},m.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,m}(),ir=function(){return(ir=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},or=function(){function t(t){this.router=t}return t.prototype.fromConfig=function(t,e,r){return new ye(t,e,d.DefType.CONFIG,this.router.urlService.config,r)},t.prototype.fromPath=function(t,e,r){return new ye(t,e,d.DefType.PATH,this.router.urlService.config,r)},t.prototype.fromSearch=function(t,e,r){return new ye(t,e,d.DefType.SEARCH,this.router.urlService.config,r)},t}(),ar=function(){function t(t){var n=this;this.router=t,this.paramFactory=new or(this.router),this.caseInsensitive=function(t){return n.router.urlService.config.caseInsensitive(t)},this.defaultSquashPolicy=function(t){return n.router.urlService.config.defaultSquashPolicy(t)},this.strictMode=function(t){return n.router.urlService.config.strictMode(t)},this.type=function(t,e,r){return n.router.urlService.config.type(t,e,r)||n},L(this,{UrlMatcher:nr,Param:ye})}return t.prototype.compile=function(t,e){var r=this.router.urlService.config,n=e&&!e.state&&e.params;e=n?ir({state:{params:n}},e):e;var i={strict:r._isStrictMode,caseInsensitive:r._isCaseInsensitive};return new nr(t,r.paramTypes,this.paramFactory,L(i,e))},t.prototype.isMatcher=function(r){if(!k(r))return!1;var n=!0;return N(nr.prototype,function(t,e){C(t)&&(n=n&&E(r[e])&&C(r[e]))}),n},t.prototype.$get=function(){var t=this.router.urlService.config;return t.paramTypes.enqueue=!1,t.paramTypes._flushTypeQueue(),this},t}(),ur=function(){function t(t){this.router=t}return t.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},t.prototype.create=function(t,e){var r=this,n=Le.isState,i=m([[P,function(t){return i(r.compile(t))}],[p(nr),function(t){return r.fromUrlMatcher(t,e)}],[n,function(t){return r.fromState(t,r.router)}],[p(RegExp),function(t){return r.fromRegExp(t,e)}],[C,function(t){return new sr(t,e)}]]),o=i(t);if(!o)throw new Error("invalid 'what' in when()");return o},t.prototype.fromUrlMatcher=function(r,e){var t=e;P(e)&&(e=this.router.urlMatcherFactory.compile(e)),p(nr)(e)&&(t=function(t){return e.format(t)});var n={urlMatcher:r,matchPriority:function(e){var t=r.parameters().filter(function(t){return t.isOptional});return t.length?t.filter(function(t){return e[t.id]}).length/t.length:1e-6},type:"URLMATCHER"};return L(new sr(function(t){var e=r.exec(t.path,t.search,t.hash);return r.validates(e)&&e},t),n)},t.prototype.fromState=function(n,i){var t={state:n,type:"STATE"};return L(this.fromUrlMatcher(n.url,function(t){var e=i.stateService,r=i.globals;e.href(n,t)!==e.href(r.current,r.params)&&e.transitionTo(n,t,{inherit:!0,source:"url"})}),t)},t.prototype.fromRegExp=function(e,t){if(e.global||e.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=P(t)?function(r){return t.replace(/\$(\$|\d{1,2})/,function(t,e){return r["$"===e?0:Number(e)]})}:t,n={regexp:e,type:"REGEXP"};return L(new sr(function(t){return e.exec(t.path)},r),n)},t.isUrlRule=function(e){return e&&["type","match","handler"].every(function(t){return E(e[t])})},t}(),sr=function(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||B};var cr,fr=function(){function t(t){var n=this;this.router=t,this.sync=function(t){return n.router.urlService.sync(t)},this.listen=function(t){return n.router.urlService.listen(t)},this.deferIntercept=function(t){return n.router.urlService.deferIntercept(t)},this.match=function(t){return n.router.urlService.match(t)},this.initial=function(t){return n.router.urlService.rules.initial(t)},this.otherwise=function(t){return n.router.urlService.rules.otherwise(t)},this.removeRule=function(t){return n.router.urlService.rules.removeRule(t)},this.rule=function(t){return n.router.urlService.rules.rule(t)},this.rules=function(){return n.router.urlService.rules.rules()},this.sort=function(t){return n.router.urlService.rules.sort(t)},this.when=function(t,e,r){return n.router.urlService.rules.when(t,e,r)},this.urlRuleFactory=new ur(t)}return t.prototype.update=function(t){var e=this.router.locationService;t?this.location=e.url():e.url()!==this.location&&e.url(this.location,!0)},t.prototype.push=function(t,e,r){var n=r&&!!r.replace;this.router.urlService.url(t.format(e||{}),n)},t.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i,o,a,u,s=this.router.urlService.config,c=s.html5Mode();if(c||null===n||(n="#"+s.hashPrefix()+n),i=n,o=c,a=r.absolute,n="/"===(u=s.baseHref())?i:o?zt(u)+i:a?u.slice(1)+i:i,!r.absolute||!n)return n;var f=!c&&n?"/":"",l=s.port(),h=80===l||443===l?"":":"+l;return[s.protocol(),"://",s.host(),h,f,n].join("")},Object.defineProperty(t.prototype,"interceptDeferred",{get:function(){return this.router.urlService.interceptDeferred},enumerable:!0,configurable:!0}),t}(),lr=function(){function s(t){var r=this;this.router=t,this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._listeners=[],this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIView:function(e){return st(r._uiViews,function(t){return r.router.$id+"."+t.id===e})},_registeredUIViews:function(){return r._uiViews},_activeViewConfigs:function(){return r._viewConfigs},_onSync:function(t){return r._listeners.push(t),function(){return K(r._listeners,t)}}}}return s.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=P(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i="");/^(\^(?:\.\^)*)$/.exec(i)?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name);return{uiViewName:n,uiViewContextAnchor:i}},s.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},s.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},s.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return O(n)?n:[n]},s.prototype.deactivateViewConfig=function(t){ce.traceViewServiceEvent("<- Removing",t),K(this._viewConfigs,t)},s.prototype.activateViewConfig=function(t){ce.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},s.prototype.sync=function(){var r=this,n=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(Et,{});function i(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var o=c(function(t,e,r,n){return e*(t(r)-t(n))}),t=this._uiViews.sort(o(function(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)},1)).map(function(t){var e=r._viewConfigs.filter(s.matches(n,t));return 1<e.length&&e.sort(o(i,-1)),{uiView:t,viewConfig:e[0]}}),e=t.map(function(t){return t.viewConfig}),a=this._viewConfigs.filter(function(t){return!J(e,t)}).map(function(t){return{uiView:void 0,viewConfig:t}});t.forEach(function(t){-1!==r._uiViews.indexOf(t.uiView)&&t.uiView.configUpdated(t.viewConfig)});var u=t.concat(a);this._listeners.forEach(function(t){return t(u)}),ce.traceViewSync(u)},s.prototype.registerUIView=function(e){ce.traceViewServiceUIViewEvent("-> Registering",e);var t=this._uiViews;return t.filter(function(t){return t.fqn===e.fqn&&t.$type===e.$type}).length&&ce.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",e),t.push(e),this.sync(),function(){-1!==t.indexOf(e)?(ce.traceViewServiceUIViewEvent("<- Deregistering",e),K(t)(e)):ce.traceViewServiceUIViewEvent("Tried removing non-registered uiView",e)}},s.prototype.available=function(){return this._uiViews.map(w("fqn"))},s.prototype.active=function(){return this._uiViews.filter(w("$config")).map(w("name"))},s.matches=function(u,s){return function(t){if(s.$type!==t.viewDecl.$type)return!1;var e=t.viewDecl,r=e.$uiViewName.split("."),n=s.fqn.split(".");if(!M(r,n.slice(0-r.length)))return!1;var i=1-r.length||void 0,o=n.slice(0,i).join("."),a=u[o].creationContext;return e.$uiViewContextAnchor===(a&&a.name)}},s}(),hr=function(){function t(){this.params=new we,this.lastStartedTransitionId=-1,this.transitionHistory=new It([],1),this.successfulTransitions=new It([],1)}return t.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},t}();function pr(t){if(!(C(t)||P(t)||p(Se)(t)||Se.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return C(t)?t:v(t)}cr=function(t,e){var r,n,i,o,a,u,s,c,f=(r=t,(e.priority||0)-(r.priority||0));return 0!==f?f:(n=e,0!==(f=((i={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1})[t.type]||0)-(i[n.type]||0))?f:(a=e,0!==(f=(o=t).urlMatcher&&a.urlMatcher?nr.compare(o.urlMatcher,a.urlMatcher):0)?f:(s=e,(c={STATE:!0,URLMATCHER:!0})[(u=t).type]&&c[s.type]?0:(u.$id||0)-(s.$id||0))))};var vr=function(){function t(t){this.router=t,this._sortFn=cr,this._rules=[],this._id=0,this.urlRuleFactory=new ur(t)}return t.prototype.dispose=function(t){this._rules=[],delete this._otherwiseFn},t.prototype.initial=function(t){var e=pr(t);this.rule(this.urlRuleFactory.create(function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)},e))},t.prototype.otherwise=function(t){var e=pr(t);this._otherwiseFn=this.urlRuleFactory.create(v(!0),e),this._sorted=!1},t.prototype.removeRule=function(t){K(this._rules,t)},t.prototype.rule=function(t){var e=this;if(!ur.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},t.prototype.rules=function(){return this.ensureSorted(),this._rules.concat(this._otherwiseFn?[this._otherwiseFn]:[])},t.prototype.sort=function(t){for(var e=this.stableSort(this._rules,this._sortFn=t||this._sortFn),r=0,n=0;n<e.length;n++)e[n]._group=r,n<e.length-1&&0!==this._sortFn(e[n],e[n+1])&&r++;this._rules=e,this._sorted=!0},t.prototype.ensureSorted=function(){this._sorted||this.sort()},t.prototype.stableSort=function(t,n){var e=t.map(function(t,e){return{elem:t,idx:e}});return e.sort(function(t,e){var r=n(t.elem,e.elem);return 0===r?t.idx-e.idx:r}),e.map(function(t){return t.elem})},t.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return E(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},t}(),dr=function(){function t(t){var e=this;this.router=t,this.paramTypes=new ge,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this.dispose=function(){return e.paramTypes.dispose()},this.baseHref=function(){return e.router.locationConfig.baseHref()},this.hashPrefix=function(t){return e.router.locationConfig.hashPrefix(t)},this.host=function(){return e.router.locationConfig.host()},this.html5Mode=function(){return e.router.locationConfig.html5Mode()},this.port=function(){return e.router.locationConfig.port()},this.protocol=function(){return e.router.locationConfig.protocol()}}return t.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=E(t)?t:this._isCaseInsensitive},t.prototype.defaultSquashPolicy=function(t){if(E(t)&&!0!==t&&!1!==t&&!P(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=E(t)?t:this._defaultSquashPolicy},t.prototype.strictMode=function(t){return this._isStrictMode=E(t)?t:this._isStrictMode},t.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return E(e)?this:n},t}(),mr=function(){function t(t){var n=this;this.router=t,this.interceptDeferred=!1,this.rules=new vr(this.router),this.config=new dr(this.router),this.url=function(t,e,r){return n.router.locationService.url(t,e,r)},this.path=function(){return n.router.locationService.path()},this.search=function(){return n.router.locationService.search()},this.hash=function(){return n.router.locationService.hash()},this.onChange=function(t){return n.router.locationService.onChange(t)}}return t.prototype.dispose=function(){this.listen(!1),this.rules.dispose()},t.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},t.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this.router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);m([[P,function(t){return r.url(t,!0)}],[Se.isDef,function(t){return n.go(t.state,t.params,t.options)}],[p(Se),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,this.router))}},t.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopListeningFn=this._stopListeningFn||this.router.urlService.onChange(function(t){return e.sync(t)});this._stopListeningFn&&this._stopListeningFn(),delete this._stopListeningFn},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t.prototype.match=function(t){var e=this;t=L({path:"",search:{},hash:""},t);for(var r,n,i,o=this.rules.rules(),a=0;a<o.length&&(!r||r.rule._group===o[a]._group);a++){var u=(n=o[a],void 0,(i=n.match(t,e.router))&&{match:i,rule:n,weight:n.matchPriority(i)});r=!r||u&&u.weight>r.weight?u:r}return r},t}(),yr=0,gr=H("LocationServices",["url","path","search","hash","onChange"]),wr=H("LocationConfig",["port","protocol","host","baseHref","html5Mode","hashPrefix"]),_r=function(){function t(t,e){void 0===t&&(t=gr),void 0===e&&(e=wr),this.locationService=t,this.locationConfig=e,this.$id=yr++,this._disposed=!1,this._disposables=[],this.trace=ce,this.viewService=new lr(this),this.globals=new hr,this.transitionService=new Lr(this),this.urlMatcherFactory=new ar(this),this.urlRouter=new fr(this),this.urlService=new mr(this),this.stateRegistry=new Ge(this),this.stateService=new Mr(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlService),this.disposable(t),this.disposable(e)}return t.prototype.disposable=function(t){this._disposables.push(t)},t.prototype.dispose=function(t){var e=this;t&&C(t.dispose)?t.dispose(this):(this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),K(e._disposables,t)}catch(t){}}))},t.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},t.prototype.getPlugin=function(t){return t?this._plugins[t]:lt(this._plugins)},t}();function Sr(e){e.addResolvable(Ee.fromData(_r,e.router),""),e.addResolvable(Ee.fromData(Xe,e),""),e.addResolvable(Ee.fromData("$transition$",e),""),e.addResolvable(Ee.fromData("$stateParams",e.params()),""),e.entering().forEach(function(t){e.addResolvable(Ee.fromData("$state$",t),t)})}var $r=J(["$transition$",Xe]),br=function(t){var e=lt(t.treeChanges()).reduce(vt,[]).reduce(yt,[]),r=function(t){return $r(t.token)?Ee.fromData(t.token,null):t};e.forEach(function(t){t.resolvables=t.resolvables.map(r)})},Rr=function(e){var t=e.to().redirectTo;if(t){var r=e.router.stateService;return C(t)?A.$q.when(t(e)).then(n):n(t)}function n(t){if(t)return t instanceof Se?t:P(t)?r.target(t,e.params(),e.options()):t.state||t.params?r.target(t.state||e.to(),t.params||e.params(),e.options()):void 0}};function Er(r){return function(t,e){return(0,e.$$state()[r])(t,e)}}var Cr=Er("onExit"),Tr=Er("onRetain"),Pr=Er("onEnter"),kr=function(t){return new Oe(t.treeChanges().to).resolvePath("EAGER",t).then(G)},Or=function(t,e){return new Oe(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(G)},xr=function(t){return new Oe(t.treeChanges().to).resolvePath("LAZY",t).then(G)},jr=function(t){var e=A.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(G)},Vr=function(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}},Ir=function(t){var e=t.router.globals,r=function(){e.transition===t&&(e.transition=null)};t.onSuccess({},function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,Tt(t.params(),e.params)},{priority:1e4}),t.promise.then(r,r)},Hr=function(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)},Ar=function(a){var u=a.router;var t=a.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(t){return Dr(a,t)});return A.$q.all(t).then(function(){if("url"!==a.originalTransition().options().source){var t=a.targetState();return u.stateService.target(t.identifier(),t.params(),t.options())}var e=u.urlService,r=e.match(e.parts()),n=r&&r.rule;if(n&&"STATE"===n.type){var i=n.state,o=r.match;return u.stateService.target(i,o,a.options())}u.urlService.sync()})};function Dr(e,r){var n=r.$$state().lazyLoad,t=n._promise;if(!t){t=n._promise=A.$q.when(n(e,r)).then(function(t){t&&Array.isArray(t.states)&&t.states.forEach(function(t){return e.router.stateRegistry.register(t)});return t}).then(function(t){return delete r.lazyLoad,delete r.$$state().lazyLoad,delete n._promise,t},function(t){return delete n._promise,A.$q.reject(t)})}return t}var qr=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=ze.HANDLE_RESULT),void 0===a&&(a=ze.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u};function Ur(t){var e=t._ignoredReason();if(e){ce.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),At.ignored().toPromise()}}function Fr(t){if(!t.valid())throw new Error(t.error().toString())}var Nr={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"},Lr=function(){function t(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=W(v(this),{},v(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks(),t.globals.successfulTransitions.onEvict(br)}return t.prototype.onCreate=function(t,e,r){},t.prototype.onBefore=function(t,e,r){},t.prototype.onStart=function(t,e,r){},t.prototype.onExit=function(t,e,r){},t.prototype.onRetain=function(t,e,r){},t.prototype.onEnter=function(t,e,r){},t.prototype.onFinish=function(t,e,r){},t.prototype.onSuccess=function(t,e,r){},t.prototype.onError=function(t,e,r){},t.prototype.dispose=function(t){lt(this._registeredHooks).forEach(function(e){return e.forEach(function(t){t._deregistered=!0,K(e,t)})})},t.prototype.create=function(t,e){return new Xe(t,e,this._router)},t.prototype._defineCoreEvents=function(){var t=d.TransitionHookPhase,e=ze,r=this._criteriaPaths;this._defineEvent("onCreate",t.CREATE,0,r.to,!1,e.LOG_REJECTED_RESULT,e.THROW_ERROR,!0),this._defineEvent("onBefore",t.BEFORE,0,r.to),this._defineEvent("onStart",t.RUN,0,r.to),this._defineEvent("onExit",t.RUN,100,r.exiting,!0),this._defineEvent("onRetain",t.RUN,200,r.retained),this._defineEvent("onEnter",t.RUN,300,r.entering),this._defineEvent("onFinish",t.RUN,400,r.to),this._defineEvent("onSuccess",t.SUCCESS,0,r.to,!1,e.LOG_REJECTED_RESULT,e.LOG_ERROR,!0),this._defineEvent("onError",t.ERROR,0,r.to,!1,e.LOG_REJECTED_RESULT,e.LOG_ERROR,!0)},t.prototype._defineCorePaths=function(){var t=d.TransitionHookScope.STATE,e=d.TransitionHookScope.TRANSITION;this._definePathType("to",e),this._definePathType("from",e),this._definePathType("exiting",t),this._definePathType("retained",t),this._definePathType("entering",t)},t.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=ze.HANDLE_RESULT),void 0===a&&(a=ze.REJECT_ERROR),void 0===u&&(u=!1);var s=new qr(t,e,r,n,i,o,a,u);this._eventTypes.push(s),Ke(this,this,s)},t.prototype._getEvents=function(e){return(E(e)?this._eventTypes.filter(function(t){return t.hookPhase===e}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0===r?t.hookOrder-e.hookOrder:r})},t.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},t.prototype._getPathTypes=function(){return this._criteriaPaths},t.prototype.getHooks=function(t){return this._registeredHooks[t]},t.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=this.onCreate({},Sr),t.ignored=this.onBefore({},Ur,{priority:-9999}),t.invalid=this.onBefore({},Fr,{priority:-1e4}),t.redirectTo=this.onStart({to:function(t){return!!t.redirectTo}},Rr),t.onExit=this.onExit({exiting:function(t){return!!t.onExit}},Cr),t.onRetain=this.onRetain({retained:function(t){return!!t.onRetain}},Tr),t.onEnter=this.onEnter({entering:function(t){return!!t.onEnter}},Pr),t.eagerResolve=this.onStart({},kr,{priority:1e3}),t.lazyResolve=this.onEnter({entering:v(!0)},Or,{priority:1e3}),t.resolveAll=this.onFinish({},xr,{priority:1e3}),t.loadViews=this.onFinish({},jr),t.activateViews=this.onSuccess({},Vr),t.updateGlobals=this.onCreate({},Ir),t.updateUrl=this.onSuccess({},Hr,{priority:9999}),t.lazyLoad=this.onBefore({entering:function(t){return!!t.lazyLoad}},Ar)},t}(),Mr=function(){function r(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof At?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var e=Object.keys(r.prototype).filter(l(J(["current","$current","params","transition"])));W(v(r.prototype),this,v(this),e)}return Object.defineProperty(r.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){this.defaultErrorHandler(G),this.invalidCallbacks=[]},r.prototype._handleInvalidTargetState=function(t,r){var n=this,i=$e.makeTargetState(this.router.stateRegistry,t),e=this.router.globals,o=function(){return e.transitionHistory.peekTail()},a=o(),u=new It(this.invalidCallbacks.slice()),s=new Oe(t).injector(),c=function(t){if(t instanceof Se){var e=t;return(e=n.target(e.identifier(),e.params(),e.options())).valid()?o()!==a?At.superseded().toPromise():n.transitionTo(e.identifier(),e.params(),e.options()):At.invalid(e.error()).toPromise()}};return function e(){var t=u.dequeue();return void 0===t?At.invalid(r.error()).toPromise():A.$q.when(t(r,i,s)).then(c).then(function(t){return t||e()})}()},r.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){K(this.invalidCallbacks)(t)}.bind(this)},r.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!E(t)||t,inherit:!1,notify:!1})},r.prototype.go=function(t,e,r){var n=et(r,{relative:this.$current,inherit:!0},Nr);return this.transitionTo(t,e,n)},r.prototype.target=function(t,e,r){if(void 0===r&&(r={}),k(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(P(r.reload)?r.reload:r.reload.name)+"'");return new Se(this.router.stateRegistry,t,e,r)},r.prototype.getCurrentPath=function(){var t=this,e=this.router.globals.successfulTransitions.peekTail();return e?e.treeChanges().to:[new _e(t.router.stateRegistry.root())]},r.prototype.transitionTo=function(t,e,r){var o=this;void 0===e&&(e={}),void 0===r&&(r={});var a=this.router,u=a.globals;r=et(r,Nr);r=L(r,{current:function(){return u.transition}});var n=this.target(t,e,r),i=this.getCurrentPath();if(!n.exists())return this._handleInvalidTargetState(i,n);if(!n.valid())return jt(n.error());var s=function(i){return function(t){if(t instanceof At){var e=a.globals.lastStartedTransitionId<=i.$id;if(t.type===d.RejectType.IGNORED)return e&&a.urlRouter.update(),A.$q.when(u.current);var r=t.detail;if(t.type===d.RejectType.SUPERSEDED&&t.redirected&&r instanceof Se){var n=i.redirect(r);return n.run().catch(s(n))}if(t.type===d.RejectType.ABORTED)return e&&a.urlRouter.update(),A.$q.reject(t)}return o.defaultErrorHandler()(t),A.$q.reject(t)}},c=this.router.transitionService.create(i,n),f=c.run().catch(s(c));return xt(f),L(f,{transition:c})},r.prototype.is=function(t,e,r){r=et(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(E(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return ye.equals(i,ye.values(i,e),this.params)}},r.prototype.includes=function(t,e,r){r=et(r,{relative:this.$current});var n=P(t)&&Vt.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(E(i)){if(!E(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return ye.equals(a,ye.values(a,e),this.params)}},r.prototype.href=function(t,e,r){r=et(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!E(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},r.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},r.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},r.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=$e.makeTargetState(this.router.stateRegistry,n);return Dr(e=e||this.router.transitionService.create(n,i),r)},r}(),Br={when:function(r){return new Promise(function(t,e){return t(r)})},reject:function(r){return new Promise(function(t,e){e(r)})},defer:function(){var r={};return r.promise=new Promise(function(t,e){r.resolve=t,r.reject=e}),r},all:function(t){if(O(t))return Promise.all(t);if(k(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return Br.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},Gr={},Wr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,zr=/([^\s,]+)/g,Jr={get:function(t){return Gr[t]},has:function(t){return null!=Jr.get(t)},invoke:function(t,e,r){var n=L({},Gr,r||{}),i=Jr.annotate(t),o=_t(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return C(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!V(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(O(t))return t.slice(0,-1);var e=t.toString().replace(Wr,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(zr)||[]}},Qr=function(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?O(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t},Kr=function(t){return t.split("&").filter(B).map(Kt).reduce(Qr,{})};function Yr(t){var e=function(t){return t||""},r=Jt(t).map(e),n=r[0],i=r[1],o=Qt(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}var Zr=function(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(e){var t=r[e];return(O(t)?t:[t]).map(function(t){return e+"="+t})}).reduce(vt,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")};function Xr(n,i,o,a){return function(t){var e=t.locationService=new o(t),r=t.locationConfig=new a(t,i);return{name:n,service:e,configuration:r,dispose:function(t){t.dispose(e),t.dispose(r)}}}}var tn,en,rn,nn=function(){function t(t,e){var r=this;this.fireAfterUpdate=e,this._listeners=[],this._listener=function(e){return r._listeners.forEach(function(t){return t(e)})},this.hash=function(){return Yr(r._get()).hash},this.path=function(){return Yr(r._get()).path},this.search=function(){return Kr(Yr(r._get()).search)},this._location=D.location,this._history=D.history}return t.prototype.url=function(e,t){return void 0===t&&(t=!0),E(e)&&e!==this._get()&&(this._set(null,null,e,t),this.fireAfterUpdate&&this._listeners.forEach(function(t){return t({url:e})})),Zr(this)},t.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return K(e._listeners,t)}},t.prototype.dispose=function(t){tt(this._listeners)},t}(),on=(tn=function(t,e){return(tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}tn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),an=function(r){function t(t){var e=r.call(this,t,!1)||this;return D.addEventListener("hashchange",e._listener,!1),e}return on(t,r),t.prototype._get=function(){return Yt(this._location.hash)},t.prototype._set=function(t,e,r,n){this._location.hash=r},t.prototype.dispose=function(t){r.prototype.dispose.call(this,t),D.removeEventListener("hashchange",this._listener)},t}(nn),un=(en=function(t,e){return(en=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}en(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),sn=function(e){function t(t){return e.call(this,t,!0)||this}return un(t,e),t.prototype._get=function(){return this._url},t.prototype._set=function(t,e,r,n){this._url=r},t}(nn),cn=(rn=function(t,e){return(rn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}rn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),fn=function(r){function t(t){var e=r.call(this,t,!0)||this;return e._config=t.urlService.config,D.addEventListener("popstate",e._listener,!1),e}return cn(t,r),t.prototype._getBasePrefix=function(){return zt(this._config.baseHref())},t.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;n=Qt(n)[1],r=Jt(r)[1];var i=this._getBasePrefix(),o=e===this._config.baseHref(),a=e.substr(0,i.length)===i;return(e=o?"/":a?e.substring(i.length):e)+(n?"?"+n:"")+(r?"#"+r:"")},t.prototype._set=function(t,e,r,n){var i=this._getBasePrefix(),o=r&&"/"!==r[0]?"/":"",a=""===r||"/"===r?this._config.baseHref():i+o+r;n?this._history.replaceState(t,e,a):this._history.pushState(t,e,a)},t.prototype.dispose=function(t){r.prototype.dispose.call(this,t),D.removeEventListener("popstate",this._listener)},t}(nn),ln=function(){var e=this;this.dispose=G,this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return e._port},this.protocol=function(){return e._protocol},this.host=function(){return e._host},this.baseHref=function(){return e._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(t){return E(t)?e._hashPrefix=t:e._hashPrefix}},hn=function(){function t(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}return t.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},t.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},t.prototype.host=function(){return location.hostname},t.prototype.html5Mode=function(){return this._isHtml5},t.prototype.hashPrefix=function(t){return E(t)?this._hashPrefix=t:this._hashPrefix},t.prototype.baseHref=function(t){return E(t)&&(this._baseHref=t),_(this._baseHref)&&(this._baseHref=this.getBaseHref()),this._baseHref},t.prototype.getBaseHref=function(){var t=document.getElementsByTagName("base")[0];return t&&t.href?t.href.replace(/^([^/:]*:)?\/\/[^/]*/,""):this._isHtml5?"/":location.pathname||"/"},t.prototype.dispose=function(){},t}();function pn(t){return A.$injector=Jr,{name:"vanilla.services",$q:A.$q=Br,$injector:Jr,dispose:function(){return null}}}var vn=Xr("vanilla.hashBangLocation",!1,an,hn),dn=Xr("vanilla.pushStateLocation",!0,fn,hn),mn=Xr("vanilla.memoryLocation",!1,sn,ln),yn=function(){function t(){}return t.prototype.dispose=function(t){},t}(),gn=Object.freeze({root:D,fromJson:U,toJson:F,forEach:N,extend:L,equals:M,identity:B,noop:G,createProxyFunctions:W,inherit:z,inArray:J,_inArray:Q,removeFrom:K,_removeFrom:Y,pushTo:Z,_pushTo:X,deregAll:tt,defaults:et,mergeR:rt,ancestors:nt,pick:it,omit:ot,pluck:at,filter:ut,find:st,mapObj:ct,map:ft,values:lt,allTrueR:ht,anyTrueR:pt,unnestR:vt,flattenR:dt,pushR:mt,uniqR:yt,unnest:gt,flatten:wt,assertPredicate:_t,assertMap:St,assertFn:$t,pairs:bt,arrayTuples:Rt,applyPairs:Et,tail:Ct,copy:Tt,_extend:Pt,silenceUncaughtInPromise:xt,silentRejection:jt,makeStub:H,services:A,Glob:Vt,curry:c,compose:r,pipe:s,prop:w,propEq:y,parse:R,not:l,and:n,or:i,all:f,any:h,is:p,eq:o,val:v,invoke:a,pattern:m,isUndefined:_,isDefined:E,isNull:S,isNullOrUndefined:$,isFunction:C,isNumber:T,isString:P,isObject:k,isArray:O,isDate:x,isRegExp:j,isInjectable:V,isPromise:I,Queue:It,maxLength:Dt,padString:qt,kebobString:Ut,functionToString:Ft,fnToString:Nt,stringify:Bt,beforeAfterSubstr:Gt,hostRegex:Wt,stripLastPathElement:zt,splitHash:Jt,splitQuery:Qt,splitEqual:Kt,trimHashVal:Yt,splitOnDelim:Zt,joinNeighborsR:Xt,get Category(){return d.Category},Trace:se,trace:ce,get DefType(){return d.DefType},Param:ye,ParamTypes:ge,StateParams:we,ParamType:fe,PathNode:_e,PathUtils:$e,resolvePolicies:be,defaultResolvePolicy:Re,Resolvable:Ee,NATIVE_INJECTOR_TOKEN:ke,ResolveContext:Oe,resolvablesBuilder:qe,StateBuilder:Ne,StateObject:Le,StateMatcher:Me,StateQueueManager:Be,StateRegistry:Ge,StateService:Mr,TargetState:Se,get TransitionHookPhase(){return d.TransitionHookPhase},get TransitionHookScope(){return d.TransitionHookScope},HookBuilder:Ye,matchState:Je,RegisteredHook:Qe,makeEvent:Ke,get RejectType(){return d.RejectType},Rejection:At,Transition:Xe,TransitionHook:ze,TransitionEventType:qr,defaultTransOpts:Nr,TransitionService:Lr,UrlRules:vr,UrlConfig:dr,UrlMatcher:nr,ParamFactory:or,UrlMatcherFactory:ar,UrlRouter:fr,UrlRuleFactory:ur,BaseUrlRule:sr,UrlService:mr,ViewService:lr,UIRouterGlobals:hr,UIRouter:_r,$q:Br,$injector:Jr,BaseLocationServices:nn,HashLocationService:an,MemoryLocationService:sn,PushStateLocationService:fn,MemoryLocationConfig:ln,BrowserLocationConfig:hn,keyValsToObjectR:Qr,getParams:Kr,parseUrl:Yr,buildUrl:Zr,locationPluginFactory:Xr,servicesPlugin:pn,hashLocationPlugin:vn,pushStateLocationPlugin:dn,memoryLocationPlugin:mn,UIRouterPluginBase:yn});function wn(){var r=null;return function(t,e){return r=r||A.$injector.get("$templateFactory"),[new bn(t,e,r)]}}var _n=function(t,r){return t.reduce(function(t,e){return t||E(r[e])},!1)};function Sn(n){if(!n.parent)return{};var i=["component","bindings","componentProvider"],o=["templateProvider","templateUrl","template","notify","async"].concat(["controller","controllerProvider","controllerAs","resolveAs"]),t=i.concat(o);if(E(n.views)&&_n(t,n))throw new Error("State '"+n.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+t.filter(function(t){return E(n[t])}).join(", "));var a={},e=n.views||{$default:it(n,t)};return N(e,function(t,e){if(e=e||"$default",P(t)&&(t={component:t}),t=L({},t),_n(i,t)&&_n(o,t))throw new Error("Cannot combine: "+i.join("|")+" with: "+o.join("|")+" in stateview: '"+e+"@"+n.name+"'");t.resolveAs=t.resolveAs||"$resolve",t.$type="ng1",t.$context=n,t.$name=e;var r=lr.normalizeUIViewTarget(t.$context,t.$name);t.$uiViewName=r.uiViewName,t.$uiViewContextAnchor=r.uiViewContextAnchor,a[e]=t}),a}var $n=0,bn=function(){function t(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=$n++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}return t.prototype.load=function(){var e=this,t=A.$q,r=new Oe(this.path),n=this.path.reduce(function(t,e){return L(t,e.paramValues)},{}),i={template:t.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:t.when(this.getController(r))};return t.all(i).then(function(t){return ce.traceViewServiceEvent("Loaded",e),e.controller=t.controller,L(e,t.template),e})},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!V(e))return this.viewDecl.controller;var r=A.$injector.annotate(e),n=O(e)?Ct(e):e;return new Ee("",n,r).get(t)},t}(),Rn=function(){function t(){var n=this;this._useHttp=b.version.minor<3,this.$get=["$http","$templateCache","$injector",function(t,e,r){return n.$templateRequest=r.has&&r.has("$templateRequest")&&r.get("$templateRequest"),n.$http=t,n.$templateCache=e,n}]}return t.prototype.useHttpService=function(t){this._useHttp=t},t.prototype.fromConfig=function(t,e,r){var n=function(t){return A.$q.when(t).then(function(t){return{template:t}})},i=function(t){return A.$q.when(t).then(function(t){return{component:t}})};return E(t.template)?n(this.fromString(t.template,e)):E(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):E(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):E(t.component)?i(t.component):E(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},t.prototype.fromString=function(t,e){return C(t)?t(e):t},t.prototype.fromUrl=function(t,e){return C(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},t.prototype.fromProvider=function(t,e,r){var n=A.$injector.annotate(t),i=O(t)?Ct(t):t;return new Ee("",i,n).get(r)},t.prototype.fromComponentProvider=function(t,e,r){var n=A.$injector.annotate(t),i=O(t)?Ct(t):t;return new Ee("",i,n).get(r)},t.prototype.makeComponentTemplate=function(s,c,t,f){f=f||{};var l=3<=b.version.minor?"::":"",h=function(t){var e=Ut(t);return/^(x|data)-/.exec(e)?"x-"+e:e},e=function(t){var e=A.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(En).reduce(vt,[])}(t).map(function(t){var e=t.name,r=t.type,n=h(e);if(s.attr(n)&&!f[e])return n+"='"+s.attr(n)+"'";var i=f[e]||e;if("@"===r)return n+"='{{"+l+"$resolve."+i+"}}'";if("&"!==r)return n+"='"+l+"$resolve."+i+"'";var o=c.getResolvable(i),a=o&&o.data,u=a&&A.$injector.annotate(a)||[];return n+"='$resolve."+i+(O(a)?"["+(a.length-1)+"]":"")+"("+u.join(",")+")'"}).join(" "),r=h(t);return"<"+r+" "+e+"></"+r+">"},t}();var En=function(t){return k(t.bindToController)?Cn(t.bindToController):Cn(t.scope)},Cn=function(e){return Object.keys(e||{}).map(function(t){return[t,/^([=<@&])[?]?(.*)/.exec(e[t])]}).filter(function(t){return E(t)&&O(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},Tn=function(){function r(t,e){this.stateRegistry=t,this.stateService=e,W(v(r.prototype),this,v(this))}return r.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},r.prototype.state=function(t,e){return k(t)?e=t:e.name=t,this.stateRegistry.register(e),this},r.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},r}(),Pn=function(r){return function(t,e){var i=t[r],o="onExit"===r?"from":"to";return i?function(t,e){var r=new Oe(t.treeChanges(o)).subContext(e.$$state()),n=L(Gn(r),{$state$:e,$transition$:t});return A.$injector.invoke(i,this,n)}:void 0}},kn=function(){function t(t){this._urlListeners=[],this.$locationProvider=t;var e=v(t);W(e,this,e,["hashPrefix"])}return t.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},t.prototype.dispose=function(){},t.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return K(e._urlListeners)(t)}},t.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=k(t)?t.enabled:t)&&this.$sniffer.history},t.prototype.baseHref=function(){return this._baseHref||(this._baseHref=this.$browser.baseHref()||this.$window.location.pathname)},t.prototype.url=function(t,e,r){return void 0===e&&(e=!1),E(t)&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},t.prototype._runtimeServices=function(t,e,r,n,i){var o=this;this.$location=e,this.$sniffer=r,this.$browser=n,this.$window=i,t.$on("$locationChangeSuccess",function(e){return o._urlListeners.forEach(function(t){return t(e)})});var a=v(e);W(a,this,a,["replace","path","search","hash"]),W(a,this,a,["port","protocol","host"])},t}(),On=function(){function r(t){this.router=t}return r.injectableHandler=function(e,r){return function(t){return A.$injector.invoke(r,null,{$match:t,$stateParams:e.globals.params})}},r.prototype.$get=function(){var t=this.router.urlService;return this.router.urlRouter.update(!0),t.interceptDeferred||t.listen(),this.router.urlRouter},r.prototype.rule=function(t){var e=this;if(!C(t))throw new Error("'rule' must be a function");var r=new sr(function(){return t(A.$injector,e.router.locationService)},B);return this.router.urlService.rules.rule(r),this},r.prototype.otherwise=function(t){var e=this,r=this.router.urlService.rules;if(P(t))r.otherwise(t);else{if(!C(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(A.$injector,e.router.locationService)})}return this},r.prototype.when=function(t,e){return(O(e)||C(e))&&(e=r.injectableHandler(this.router,e)),this.router.urlService.rules.when(t,e),this},r.prototype.deferIntercept=function(t){this.router.urlService.deferIntercept(t)},r}();b.module("ui.router.angular1",[]);var xn=b.module("ui.router.init",["ng"]),jn=b.module("ui.router.util",["ui.router.init"]),Vn=b.module("ui.router.router",["ui.router.util"]),In=b.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),Hn=b.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),An=(b.module("ui.router.compat",["ui.router"]),null);function Dn(t){(An=this.router=new _r).stateProvider=new Tn(An.stateRegistry,An.stateService),An.stateRegistry.decorator("views",Sn),An.stateRegistry.decorator("onExit",Pn("onExit")),An.stateRegistry.decorator("onRetain",Pn("onRetain")),An.stateRegistry.decorator("onEnter",Pn("onEnter")),An.viewService._pluginapi._viewConfigFactory("ng1",wn());var u=An.locationService=An.locationConfig=new kn(t);function e(t,e,r,n,i,o,a){return u._runtimeServices(i,t,n,e,r),delete An.router,delete An.$get,An}return kn.monkeyPatchPathParameterType(An),((An.router=An).$get=e).$inject=["$location","$browser","$window","$sniffer","$rootScope","$http","$templateCache"],An}Dn.$inject=["$locationProvider"];var qn=function(r){return["$uiRouterProvider",function(t){var e=t.router[r];return e.$get=function(){return e},e}]};function Un(e,t,r){if(A.$injector=e,A.$q=t,!e.hasOwnProperty("strictDi"))try{e.invoke(function(t){})}catch(t){e.strictDi=!!/strict mode/.exec(t&&t.toString())}r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(vt,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(t){return t.deps=e.annotate(t.resolveFn,e.strictDi)})}Un.$inject=["$injector","$q","$uiRouter"];function Fn(t){t.$watch(function(){ce.approximateDigests++})}Fn.$inject=["$rootScope"],xn.provider("$uiRouter",Dn),Vn.provider("$urlRouter",["$uiRouterProvider",function(t){return t.urlRouterProvider=new On(t)}]),jn.provider("$urlService",qn("urlService")),jn.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return An.urlMatcherFactory}]),jn.provider("$templateFactory",function(){return new Rn}),In.provider("$stateRegistry",qn("stateRegistry")),In.provider("$uiRouterGlobals",qn("globals")),In.provider("$transitions",qn("transitionService")),In.provider("$state",["$uiRouterProvider",function(){return L(An.stateProvider,{$get:function(){return An.stateService}})}]),In.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),Hn.factory("$view",function(){return An.viewService}),Hn.service("$trace",function(){return ce}),Hn.run(Fn),jn.run(["$urlMatcherFactory",function(t){}]),In.run(["$state",function(t){}]),Vn.run(["$urlRouter",function(t){}]),xn.run(Un);var Nn,Ln,Mn,Bn,Gn=function(r){return r.getTokens().filter(P).map(function(t){var e=r.getResolvable(t);return[t,"NOWAIT"===r.getPolicy(e).async?e.promise:e.data]}).reduce(Et,{})};function Wn(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function zn(t){var e=t.parent().inheritedData("$uiView"),r=R("$cfg.path")(e);return r?Ct(r).state.name:void 0}function Jn(t,e,r){var n,i=r.uiState||t.current.name,o=L((n=t,{relative:zn(e)||n.$current,inherit:!0,source:"sref"}),r.uiStateOpts||{}),a=t.href(i,r.uiStateParams,o);return{uiState:i,uiStateParams:r.uiStateParams,uiStateOpts:o,href:a}}function Qn(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Kn(o,a,u,s,c){return function(t){var e=t.which||t.button,r=c();if(!(1<e||t.ctrlKey||t.metaKey||t.shiftKey||o.attr("target"))){var n=u(function(){o.attr("disabled")||a.go(r.uiState,r.uiStateParams,r.uiStateOpts)});t.preventDefault();var i=s.isAnchor&&!r.href?1:0;t.preventDefault=function(){i--<=0&&u.cancel(n)}}}}function Yn(i,t,o,e){var a;e&&(a=e.events),O(a)||(a=["click"]);for(var r=i.on?"on":"bind",n=0,u=a;n<u.length;n++){var s=u[n];i[r](s,o)}t.$on("$destroy",function(){for(var t=i.off?"off":"unbind",e=0,r=a;e<r.length;e++){var n=r[e];i[t](n,o)}})}function Zn(n){var t=function(t,e,r){return n.is(t,e,r)};return t.$stateful=!0,t}function Xn(n){var t=function(t,e,r){return n.includes(t,e,r)};return t.$stateful=!0,t}function ti(d,m,y,t,g,e){var w=R("viewDecl.controllerAs"),_=R("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(t){var v=t.html();return t.empty(),function(e,r){var t=r.data("$uiView");if(!t)return r.html(v),void d(r.contents())(e);var n=t.$cfg||{viewDecl:{},getTemplate:G},i=n.path&&new Oe(n.path);r.html(n.getTemplate(r,i)||v),ce.traceUIViewFill(t.$uiView,r.html());var o=d(r.contents()),a=n.controller,u=w(n),s=_(n),c=i&&Gn(i);if(e[s]=c,a){var f=m(a,L({},c,{$scope:e,$element:r}));u&&(e[u]=f,e[u][s]=c),r.data("$ngControllerController",f),r.children().data("$ngControllerController",f),ni(g,y,f,e,n)}if(P(n.component))var l=Ut(n.component),h=new RegExp("^(x-|data-)?"+l+"$","i"),p=e.$watch(function(){var t=[].slice.call(r[0].children).filter(function(t){return t&&t.tagName&&h.exec(t.tagName)});return t&&b.element(t).data("$"+n.component+"Controller")},function(t){t&&(ni(g,y,t,e,n),p())});o(e)}}}}Nn=["$uiRouter","$timeout",function(h,p){var v=h.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(t,e,r,n){var i,o=Qn(e),a=n[1]||n[0],u=null,s={},c=function(){return Jn(v,e,s)},f=Wn(r.uiSref);function l(){var t=c();u&&u(),a&&(u=a.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&r.$set(o.attr,t.href)}s.uiState=f.state,s.uiStateOpts=r.uiSrefOpts?t.$eval(r.uiSrefOpts):{},f.paramExpr&&(t.$watch(f.paramExpr,function(t){s.uiStateParams=L({},t),l()},!0),s.uiStateParams=L({},t.$eval(f.paramExpr))),l(),t.$on("$destroy",h.stateRegistry.onStatesChanged(l)),t.$on("$destroy",h.transitionService.onSuccess({},l)),o.clickable&&(i=Kn(e,v,p,o,c),Yn(e,t,i,s.uiStateOpts))}}}],Ln=["$uiRouter","$timeout",function(p,v){var d=p.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,t,n,e){var i,o=Qn(t),a=e[1]||e[0],u=null,s={},c=function(){return Jn(d,t,s)},f=["uiState","uiStateParams","uiStateOpts"],l=f.reduce(function(t,e){return t[e]=G,t},{});function h(){var t=c();u&&u(),a&&(u=a.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&n.$set(o.attr,t.href)}f.forEach(function(e){s[e]=n[e]?r.$eval(n[e]):null,n.$observe(e,function(t){l[e](),l[e]=r.$watch(t,function(t){s[e]=t,h()},!0)})}),h(),r.$on("$destroy",p.stateRegistry.onStatesChanged(h)),r.$on("$destroy",p.transitionService.onSuccess({},h)),o.clickable&&(i=Kn(t,d,v,o,c),Yn(t,r,i,s.uiStateOpts))}}}],Mn=["$state","$stateParams","$interpolate","$uiRouter",function(v,t,d,m){return{restrict:"A",controller:["$scope","$element","$attrs",function(u,s,t){var c,n,e,r,i,f=[];c=d(t.uiSrefActiveEq||"",!1)(u);try{n=u.$eval(t.uiSrefActive)}catch(t){}function o(t){t.promise.then(p,G)}function a(){l(n)}function l(t){k(t)&&(f=[],N(t,function(t,e){var r=function(t,e){var r=Wn(t);h(r.state,u.$eval(r.paramExpr),e)};P(t)?r(t,e):O(t)&&N(t,function(t){r(t,e)})}))}function h(t,e,r){var n={state:v.get(t,zn(s))||{name:t},params:e,activeClass:r};return f.push(n),function(){K(f)(n)}}function p(){var e=function(t){return t.split(/\s/).filter(B)},t=function(t){return t.map(function(t){return t.activeClass}).map(e).reduce(vt,[])},r=t(f).concat(e(c)).reduce(yt,[]),n=t(f.filter(function(t){return v.includes(t.state.name,t.params)})),i=!!f.filter(function(t){return v.is(t.state.name,t.params)}).length?e(c):[],o=n.concat(i).reduce(yt,[]),a=r.filter(function(t){return!J(o,t)});u.$evalAsync(function(){o.forEach(function(t){return s.addClass(t)}),a.forEach(function(t){return s.removeClass(t)})})}l(n=n||d(t.uiSrefActive||"",!1)(u)),this.$$addStateInfo=function(t,e){if(!(k(n)&&0<f.length)){var r=h(t,e,n);return p(),r}},u.$on("$destroy",(e=m.stateRegistry.onStatesChanged(a),r=m.transitionService.onStart({},o),i=u.$on("$stateChangeSuccess",p),function(){e(),r(),i()})),m.globals.transition&&o(m.globals.transition),p()}]}}],b.module("ui.router.state").directive("uiSref",Nn).directive("uiSrefActive",Mn).directive("uiSrefActiveEq",Mn).directive("uiState",Ln),Zn.$inject=["$state"],Xn.$inject=["$state"],b.module("ui.router.state").filter("isState",Zn).filter("includedByState",Xn),Bn=["$view","$animate","$uiViewScroll","$interpolate","$q",function(i,o,g,w,_){var S={$cfg:{viewDecl:{$context:i._pluginapi._rootViewContext()}},$uiView:{}},$={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(t,e,y){return function(a,u,t){var s,c,f,l,e,h=t.onload||"",p=t.autoscroll,v={enter:function(t,e,r){2<b.version.minor?o.enter(t,null,e).then(r):o.enter(t,null,e,r)},leave:function(t,e){2<b.version.minor?o.leave(t).then(e):o.leave(t,e)}},r=u.inheritedData("$uiView")||S,d=w(t.uiView||t.name||"")(a)||"$default",m={$type:"ng1",id:$.count++,name:d,fqn:r.$uiView.fqn?r.$uiView.fqn+"."+d:d,config:null,configUpdated:function(t){if(t&&!(t instanceof bn))return;if(e=l,r=t,e===r)return;var e,r;ce.traceUIViewConfigUpdated(m,t&&t.viewDecl&&t.viewDecl.$context),n(l=t)},get creationContext(){var t=R("$cfg.viewDecl.$context")(r),e=R("$uiView.creationContext")(r);return t||e}};function n(t){var e=a.$new(),r=_.defer(),n=_.defer(),i={$cfg:t,$uiView:m},o={$animEnter:r.promise,$animLeave:n.promise,$$animLeave:n};e.$emit("$viewContentLoading",d),c=y(e,function(t){t.data("$uiViewAnim",o),t.data("$uiView",i),v.enter(t,u,function(){r.resolve(),f&&f.$emit("$viewContentAnimationEnded"),(E(p)&&!p||a.$eval(p))&&g(t)}),function(){if(s&&(ce.traceUIViewEvent("Removing (previous) el",s.data("$uiView")),s.remove(),s=null),f&&(ce.traceUIViewEvent("Destroying scope",m),f.$destroy(),f=null),c){var t=c.data("$uiViewAnim");ce.traceUIViewEvent("Animate out",t),v.leave(c,function(){t.$$animLeave.resolve(),s=null}),s=c,c=null}}()}),(f=e).$emit("$viewContentLoaded",t||l),f.$eval(h)}ce.traceUIViewEvent("Linking",m),u.data("$uiView",{$uiView:m}),n(),e=i.registerUIView(m),a.$on("$destroy",function(){ce.traceUIViewEvent("Destroying/Unregistering",m),e()})}}};return $}],ti.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var ei="function"==typeof b.module("ui.router").component,ri=0;function ni(n,t,c,e,r){!C(c.$onInit)||r.viewDecl.component&&ei||c.$onInit();var f=Ct(r.path).state.self,i={bind:c};if(C(c.uiOnParamsChanged)){var l=new Oe(r.path).getResolvable("$transition$").data;e.$on("$destroy",t.onSuccess({},function(t){if(t!==l&&-1===t.exiting().indexOf(f)){var r=t.params("to"),n=t.params("from"),e=function(t){return t.paramSchema},i=t.treeChanges("to").map(e).reduce(vt,[]),o=t.treeChanges("from").map(e).reduce(vt,[]),a=i.filter(function(t){var e=o.indexOf(t);return-1===e||!o[e].type.equals(r[t.id],n[t.id])});if(a.length){var u=a.map(function(t){return t.id}),s=ut(r,function(t,e){return-1!==u.indexOf(e)});c.uiOnParamsChanged(s,t)}}},i))}if(C(c.uiCanExit)){var o=ri++,a="_uiCanExitIds",u=function(t){return!!t&&(t[a]&&!0===t[a][o]||u(t.redirectedFrom()))},s={exiting:f.name};e.$on("$destroy",t.onBefore(s,function(t){var e,r=t[a]=t[a]||{};return u(t)||(e=n.when(c.uiCanExit(t))).then(function(t){return r[o]=!1!==t}),e},i))}}b.module("ui.router.state").directive("uiView",Bn),b.module("ui.router.state").directive("uiView",ti),b.module("ui.router.state").provider("$uiViewScroll",function(){var r=!1;this.useAnchorScroll=function(){r=!0},this.$get=["$anchorScroll","$timeout",function(t,e){return r?t:function(t){return e(function(){t[0].scrollIntoView()},0,!1)}}]});d.default="ui.router",d.core=gn,d.watchDigests=Fn,d.getLocals=Gn,d.getNg1ViewConfigFactory=wn,d.ng1ViewsBuilder=Sn,d.Ng1ViewConfig=bn,d.StateProvider=Tn,d.UrlRouterProvider=On,d.root=D,d.fromJson=U,d.toJson=F,d.forEach=N,d.extend=L,d.equals=M,d.identity=B,d.noop=G,d.createProxyFunctions=W,d.inherit=z,d.inArray=J,d._inArray=Q,d.removeFrom=K,d._removeFrom=Y,d.pushTo=Z,d._pushTo=X,d.deregAll=tt,d.defaults=et,d.mergeR=rt,d.ancestors=nt,d.pick=it,d.omit=ot,d.pluck=at,d.filter=ut,d.find=st,d.mapObj=ct,d.map=ft,d.values=lt,d.allTrueR=ht,d.anyTrueR=pt,d.unnestR=vt,d.flattenR=dt,d.pushR=mt,d.uniqR=yt,d.unnest=gt,d.flatten=wt,d.assertPredicate=_t,d.assertMap=St,d.assertFn=$t,d.pairs=bt,d.arrayTuples=Rt,d.applyPairs=Et,d.tail=Ct,d.copy=Tt,d._extend=Pt,d.silenceUncaughtInPromise=xt,d.silentRejection=jt,d.makeStub=H,d.services=A,d.Glob=Vt,d.curry=c,d.compose=r,d.pipe=s,d.prop=w,d.propEq=y,d.parse=R,d.not=l,d.and=n,d.or=i,d.all=f,d.any=h,d.is=p,d.eq=o,d.val=v,d.invoke=a,d.pattern=m,d.isUndefined=_,d.isDefined=E,d.isNull=S,d.isNullOrUndefined=$,d.isFunction=C,d.isNumber=T,d.isString=P,d.isObject=k,d.isArray=O,d.isDate=x,d.isRegExp=j,d.isInjectable=V,d.isPromise=I,d.Queue=It,d.maxLength=Dt,d.padString=qt,d.kebobString=Ut,d.functionToString=Ft,d.fnToString=Nt,d.stringify=Bt,d.beforeAfterSubstr=Gt,d.hostRegex=Wt,d.stripLastPathElement=zt,d.splitHash=Jt,d.splitQuery=Qt,d.splitEqual=Kt,d.trimHashVal=Yt,d.splitOnDelim=Zt,d.joinNeighborsR=Xt,d.Trace=se,d.trace=ce,d.Param=ye,d.ParamTypes=ge,d.StateParams=we,d.ParamType=fe,d.PathNode=_e,d.PathUtils=$e,d.resolvePolicies=be,d.defaultResolvePolicy=Re,d.Resolvable=Ee,d.NATIVE_INJECTOR_TOKEN=ke,d.ResolveContext=Oe,d.resolvablesBuilder=qe,d.StateBuilder=Ne,d.StateObject=Le,d.StateMatcher=Me,d.StateQueueManager=Be,d.StateRegistry=Ge,d.StateService=Mr,d.TargetState=Se,d.HookBuilder=Ye,d.matchState=Je,d.RegisteredHook=Qe,d.makeEvent=Ke,d.Rejection=At,d.Transition=Xe,d.TransitionHook=ze,d.TransitionEventType=qr,d.defaultTransOpts=Nr,d.TransitionService=Lr,d.UrlRules=vr,d.UrlConfig=dr,d.UrlMatcher=nr,d.ParamFactory=or,d.UrlMatcherFactory=ar,d.UrlRouter=fr,d.UrlRuleFactory=ur,d.BaseUrlRule=sr,d.UrlService=mr,d.ViewService=lr,d.UIRouterGlobals=hr,d.UIRouter=_r,d.$q=Br,d.$injector=Jr,d.BaseLocationServices=nn,d.HashLocationService=an,d.MemoryLocationService=sn,d.PushStateLocationService=fn,d.MemoryLocationConfig=ln,d.BrowserLocationConfig=hn,d.keyValsToObjectR=Qr,d.getParams=Kr,d.parseUrl=Yr,d.buildUrl=Zr,d.locationPluginFactory=Xr,d.servicesPlugin=pn,d.hashLocationPlugin=vn,d.pushStateLocationPlugin=dn,d.memoryLocationPlugin=mn,d.UIRouterPluginBase=yn,Object.defineProperty(d,"__esModule",{value:!0})});
//# sourceMappingURL=angular-ui-router.min.js.map

/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define([], function () {
            return (factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        factory();
    }
}(this, function () {
    /**
     * @ngdoc overview
     * @name pascalprecht.translate
     *
     * @description
     * The main module which holds everything together.
     */
    runTranslate.$inject = ['$translate'];
    $translate.$inject = ['$STORAGE_KEY', '$windowProvider', '$translateSanitizationProvider', 'pascalprechtTranslateOverrider'];
    $translateDefaultInterpolation.$inject = ['$interpolate', '$translateSanitization'];
    translateDirective.$inject = ['$translate', '$interpolate', '$compile', '$parse', '$rootScope'];
    translateAttrDirective.$inject = ['$translate', '$rootScope'];
    translateCloakDirective.$inject = ['$translate', '$rootScope'];
    translateFilterFactory.$inject = ['$parse', '$translate'];
    $translationCache.$inject = ['$cacheFactory'];
    angular.module('pascalprecht.translate', ['ng'])
        .run(runTranslate);

    function runTranslate($translate) {

        'use strict';

        var key = $translate.storageKey(),
            storage = $translate.storage();

        var fallbackFromIncorrectStorageValue = function () {
            var preferred = $translate.preferredLanguage();
            if (angular.isString(preferred)) {
                $translate.use(preferred);
                // $translate.use() will also remember the language.
                // So, we don't need to call storage.put() here.
            } else {
                storage.put(key, $translate.use());
            }
        };

        fallbackFromIncorrectStorageValue.displayName = 'fallbackFromIncorrectStorageValue';

        if (storage) {
            if (!storage.get(key)) {
                fallbackFromIncorrectStorageValue();
            } else {
                $translate.use(storage.get(key))['catch'](fallbackFromIncorrectStorageValue);
            }
        } else if (angular.isString($translate.preferredLanguage())) {
            $translate.use($translate.preferredLanguage());
        }
    }

    runTranslate.displayName = 'runTranslate';

    /**
     * @ngdoc object
     * @name pascalprecht.translate.$translateSanitizationProvider
     *
     * @description
     *
     * Configurations for $translateSanitization
     */
    angular.module('pascalprecht.translate').provider('$translateSanitization', $translateSanitizationProvider);

    function $translateSanitizationProvider() {

        'use strict';

        var $sanitize,
            $sce,
            currentStrategy = null, // TODO change to either 'sanitize', 'escape' or ['sanitize', 'escapeParameters'] in 3.0.
            hasConfiguredStrategy = false,
            hasShownNoStrategyConfiguredWarning = false,
            strategies;

        /**
         * Definition of a sanitization strategy function
         * @callback StrategyFunction
         * @param {string|object} value - value to be sanitized (either a string or an interpolated value map)
         * @param {string} mode - either 'text' for a string (translation) or 'params' for the interpolated params
         * @return {string|object}
         */

        /**
         * @ngdoc property
         * @name strategies
         * @propertyOf pascalprecht.translate.$translateSanitizationProvider
         *
         * @description
         * Following strategies are built-in:
         * <dl>
         *   <dt>sanitize</dt>
         *   <dd>Sanitizes HTML in the translation text using $sanitize</dd>
         *   <dt>escape</dt>
         *   <dd>Escapes HTML in the translation</dd>
         *   <dt>sanitizeParameters</dt>
         *   <dd>Sanitizes HTML in the values of the interpolation parameters using $sanitize</dd>
         *   <dt>escapeParameters</dt>
         *   <dd>Escapes HTML in the values of the interpolation parameters</dd>
         *   <dt>escaped</dt>
         *   <dd>Support legacy strategy name 'escaped' for backwards compatibility (will be removed in 3.0)</dd>
         * </dl>
         *
         */

        strategies = {
            sanitize: function (value, mode/*, context*/) {
                if (mode === 'text') {
                    value = htmlSanitizeValue(value);
                }
                return value;
            },
            escape: function (value, mode/*, context*/) {
                if (mode === 'text') {
                    value = htmlEscapeValue(value);
                }
                return value;
            },
            sanitizeParameters: function (value, mode/*, context*/) {
                if (mode === 'params') {
                    value = mapInterpolationParameters(value, htmlSanitizeValue);
                }
                return value;
            },
            escapeParameters: function (value, mode/*, context*/) {
                if (mode === 'params') {
                    value = mapInterpolationParameters(value, htmlEscapeValue);
                }
                return value;
            },
            sce: function (value, mode, context) {
                if (mode === 'text') {
                    value = htmlTrustValue(value);
                } else if (mode === 'params') {
                    if (context !== 'filter') {
                        // do html escape in filter context #1101
                        value = mapInterpolationParameters(value, htmlEscapeValue);
                    }
                }
                return value;
            },
            sceParameters: function (value, mode/*, context*/) {
                if (mode === 'params') {
                    value = mapInterpolationParameters(value, htmlTrustValue);
                }
                return value;
            }
        };
        // Support legacy strategy name 'escaped' for backwards compatibility.
        // TODO should be removed in 3.0
        strategies.escaped = strategies.escapeParameters;

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateSanitizationProvider#addStrategy
         * @methodOf pascalprecht.translate.$translateSanitizationProvider
         *
         * @description
         * Adds a sanitization strategy to the list of known strategies.
         *
         * @param {string} strategyName - unique key for a strategy
         * @param {StrategyFunction} strategyFunction - strategy function
         * @returns {object} this
         */
        this.addStrategy = function (strategyName, strategyFunction) {
            strategies[strategyName] = strategyFunction;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateSanitizationProvider#removeStrategy
         * @methodOf pascalprecht.translate.$translateSanitizationProvider
         *
         * @description
         * Removes a sanitization strategy from the list of known strategies.
         *
         * @param {string} strategyName - unique key for a strategy
         * @returns {object} this
         */
        this.removeStrategy = function (strategyName) {
            delete strategies[strategyName];
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateSanitizationProvider#useStrategy
         * @methodOf pascalprecht.translate.$translateSanitizationProvider
         *
         * @description
         * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
         *
         * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
         * @returns {object} this
         */
        this.useStrategy = function (strategy) {
            hasConfiguredStrategy = true;
            currentStrategy = strategy;
            return this;
        };

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translateSanitization
         * @requires $injector
         * @requires $log
         *
         * @description
         * Sanitizes interpolation parameters and translated texts.
         *
         */
        this.$get = ['$injector', '$log', function ($injector, $log) {

            var cachedStrategyMap = {};

            var applyStrategies = function (value, mode, context, selectedStrategies) {
                angular.forEach(selectedStrategies, function (selectedStrategy) {
                    if (angular.isFunction(selectedStrategy)) {
                        value = selectedStrategy(value, mode, context);
                    } else if (angular.isFunction(strategies[selectedStrategy])) {
                        value = strategies[selectedStrategy](value, mode, context);
                    } else if (angular.isString(strategies[selectedStrategy])) {
                        if (!cachedStrategyMap[strategies[selectedStrategy]]) {
                            try {
                                cachedStrategyMap[strategies[selectedStrategy]] = $injector.get(strategies[selectedStrategy]);
                            } catch (e) {
                                cachedStrategyMap[strategies[selectedStrategy]] = function () { };
                                throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
                            }
                        }
                        value = cachedStrategyMap[strategies[selectedStrategy]](value, mode, context);
                    } else {
                        throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
                    }
                });
                return value;
            };

            // TODO: should be removed in 3.0
            var showNoStrategyConfiguredWarning = function () {
                if (!hasConfiguredStrategy && !hasShownNoStrategyConfiguredWarning) {
                    $log.warn('pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details.');
                    hasShownNoStrategyConfiguredWarning = true;
                }
            };

            if ($injector.has('$sanitize')) {
                $sanitize = $injector.get('$sanitize');
            }
            if ($injector.has('$sce')) {
                $sce = $injector.get('$sce');
            }

            return {
                /**
                 * @ngdoc function
                 * @name pascalprecht.translate.$translateSanitization#useStrategy
                 * @methodOf pascalprecht.translate.$translateSanitization
                 *
                 * @description
                 * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
                 *
                 * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
                 */
                useStrategy: (function (self) {
                    return function (strategy) {
                        self.useStrategy(strategy);
                    };
                })(this),

                /**
                 * @ngdoc function
                 * @name pascalprecht.translate.$translateSanitization#sanitize
                 * @methodOf pascalprecht.translate.$translateSanitization
                 *
                 * @description
                 * Sanitizes a value.
                 *
                 * @param {string|object} value The value which should be sanitized.
                 * @param {string} mode The current sanitization mode, either 'params' or 'text'.
                 * @param {string|StrategyFunction|array} [strategy] Optional custom strategy which should be used instead of the currently selected strategy.
                 * @param {string} [context] The context of this call: filter, service. Default is service
                 * @returns {string|object} sanitized value
                 */
                sanitize: function (value, mode, strategy, context) {
                    if (!currentStrategy) {
                        showNoStrategyConfiguredWarning();
                    }

                    if (!strategy && strategy !== null) {
                        strategy = currentStrategy;
                    }

                    if (!strategy) {
                        return value;
                    }

                    if (!context) {
                        context = 'service';
                    }

                    var selectedStrategies = angular.isArray(strategy) ? strategy : [strategy];
                    return applyStrategies(value, mode, context, selectedStrategies);
                }
            };
        }];

        var htmlEscapeValue = function (value) {
            var element = angular.element('<div></div>');
            element.text(value); // not chainable, see #1044
            return element.html();
        };

        var htmlSanitizeValue = function (value) {
            if (!$sanitize) {
                throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as \'escape\'.');
            }
            return $sanitize(value);
        };

        var htmlTrustValue = function (value) {
            if (!$sce) {
                throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sce service.');
            }
            return $sce.trustAsHtml(value);
        };

        var mapInterpolationParameters = function (value, iteratee, stack) {
            if (angular.isDate(value)) {
                return value;
            } else if (angular.isObject(value)) {
                var result = angular.isArray(value) ? [] : {};

                if (!stack) {
                    stack = [];
                } else {
                    if (stack.indexOf(value) > -1) {
                        throw new Error('pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object');
                    }
                }

                stack.push(value);
                angular.forEach(value, function (propertyValue, propertyKey) {

                    /* Skipping function properties. */
                    if (angular.isFunction(propertyValue)) {
                        return;
                    }

                    result[propertyKey] = mapInterpolationParameters(propertyValue, iteratee, stack);
                });
                stack.splice(-1, 1); // remove last

                return result;
            } else if (angular.isNumber(value)) {
                return value;
            } else if (value === true || value === false) {
                return value;
            } else if (!angular.isUndefined(value) && value !== null) {
                return iteratee(value);
            } else {
                return value;
            }
        };
    }

    /**
     * @ngdoc object
     * @name pascalprecht.translate.$translateProvider
     * @description
     *
     * $translateProvider allows developers to register translation-tables, asynchronous loaders
     * and similar to configure translation behavior directly inside of a module.
     *
     */
    angular.module('pascalprecht.translate')
        .constant('pascalprechtTranslateOverrider', {})
        .provider('$translate', $translate);

    function $translate($STORAGE_KEY, $windowProvider, $translateSanitizationProvider, pascalprechtTranslateOverrider) {

        'use strict';

        var $translationTable = {},
            $preferredLanguage,
            $availableLanguageKeys = [],
            $languageKeyAliases,
            $fallbackLanguage,
            $fallbackWasString,
            $uses,
            $nextLang,
            $storageFactory,
            $storageKey = $STORAGE_KEY,
            $storagePrefix,
            $missingTranslationHandlerFactory,
            $interpolationFactory,
            $interpolatorFactories = [],
            $loaderFactory,
            $cloakClassName = 'translate-cloak',
            $loaderOptions,
            $notFoundIndicatorLeft,
            $notFoundIndicatorRight,
            $postCompilingEnabled = false,
            $forceAsyncReloadEnabled = false,
            $nestedObjectDelimeter = '.',
            $isReady = false,
            $keepContent = false,
            loaderCache,
            directivePriority = 0,
            statefulFilter = true,
            postProcessFn,
            uniformLanguageTagResolver = 'default',
            languageTagResolver = {
                'default': function (tag) {
                    return (tag || '').split('-').join('_');
                },
                java: function (tag) {
                    var temp = (tag || '').split('-').join('_');
                    var parts = temp.split('_');
                    return parts.length > 1 ? (parts[0].toLowerCase() + '_' + parts[1].toUpperCase()) : temp;
                },
                bcp47: function (tag) {
                    var temp = (tag || '').split('_').join('-');
                    var parts = temp.split('-');

                    switch (parts.length) {
                        case 1: // language only
                            parts[0] = parts[0].toLowerCase();
                            break;
                        case 2: // language-script or language-region
                            parts[0] = parts[0].toLowerCase();
                            if (parts[1].length === 4) { // parts[1] is script
                                parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
                            } else { // parts[1] is region
                                parts[1] = parts[1].toUpperCase();
                            }
                            break;
                        case 3: // language-script-region
                            parts[0] = parts[0].toLowerCase();
                            parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
                            parts[2] = parts[2].toUpperCase();
                            break;
                        default:
                            return temp;
                    }

                    return parts.join('-');
                },
                'iso639-1': function (tag) {
                    var temp = (tag || '').split('_').join('-');
                    var parts = temp.split('-');
                    return parts[0].toLowerCase();
                }
            };

        var version = '2.18.1';

        // tries to determine the browsers language
        var getFirstBrowserLanguage = function () {

            // internal purpose only
            if (angular.isFunction(pascalprechtTranslateOverrider.getLocale)) {
                return pascalprechtTranslateOverrider.getLocale();
            }

            var nav = $windowProvider.$get().navigator,
                browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
                i,
                language;

            // support for HTML 5.1 "navigator.languages"
            if (angular.isArray(nav.languages)) {
                for (i = 0; i < nav.languages.length; i++) {
                    language = nav.languages[i];
                    if (language && language.length) {
                        return language;
                    }
                }
            }

            // support for other well known properties in browsers
            for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
                language = nav[browserLanguagePropertyKeys[i]];
                if (language && language.length) {
                    return language;
                }
            }

            return null;
        };
        getFirstBrowserLanguage.displayName = 'angular-translate/service: getFirstBrowserLanguage';

        // tries to determine the browsers locale
        var getLocale = function () {
            var locale = getFirstBrowserLanguage() || '';
            if (languageTagResolver[uniformLanguageTagResolver]) {
                locale = languageTagResolver[uniformLanguageTagResolver](locale);
            }
            return locale;
        };
        getLocale.displayName = 'angular-translate/service: getLocale';

        /**
         * @name indexOf
         * @private
         *
         * @description
         * indexOf polyfill. Kinda sorta.
         *
         * @param {array} array Array to search in.
         * @param {string} searchElement Element to search for.
         *
         * @returns {int} Index of search element.
         */
        var indexOf = function (array, searchElement) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        };

        /**
         * @name trim
         * @private
         *
         * @description
         * trim polyfill
         *
         * @returns {string} The string stripped of whitespace from both ends
         */
        var trim = function () {
            return this.toString().replace(/^\s+|\s+$/g, '');
        };

        /**
         * @name lowercase
         * @private
         *
         * @description
         * Return the lowercase string only if the type is string
         *
         * @returns {string} The string all in lowercase
         */
        var lowercase = function (string) {
            return angular.isString(string) ? string.toLowerCase() : string;
        };

        var negotiateLocale = function (preferred) {
            if (!preferred) {
                return;
            }

            var avail = [],
                locale = lowercase(preferred),
                i = 0,
                n = $availableLanguageKeys.length;

            for (; i < n; i++) {
                avail.push(lowercase($availableLanguageKeys[i]));
            }

            // Check for an exact match in our list of available keys
            i = indexOf(avail, locale);
            if (i > -1) {
                return $availableLanguageKeys[i];
            }

            if ($languageKeyAliases) {
                var alias;
                for (var langKeyAlias in $languageKeyAliases) {
                    if ($languageKeyAliases.hasOwnProperty(langKeyAlias)) {
                        var hasWildcardKey = false;
                        var hasExactKey = Object.prototype.hasOwnProperty.call($languageKeyAliases, langKeyAlias) &&
                            lowercase(langKeyAlias) === lowercase(preferred);

                        if (langKeyAlias.slice(-1) === '*') {
                            hasWildcardKey = lowercase(langKeyAlias.slice(0, -1)) === lowercase(preferred.slice(0, langKeyAlias.length - 1));
                        }
                        if (hasExactKey || hasWildcardKey) {
                            alias = $languageKeyAliases[langKeyAlias];
                            if (indexOf(avail, lowercase(alias)) > -1) {
                                return alias;
                            }
                        }
                    }
                }
            }

            // Check for a language code without region
            var parts = preferred.split('_');

            if (parts.length > 1 && indexOf(avail, lowercase(parts[0])) > -1) {
                return parts[0];
            }

            // If everything fails, return undefined.
            return;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#translations
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Registers a new translation table for specific language key.
         *
         * To register a translation table for specific language, pass a defined language
         * key as first parameter.
         *
         * <pre>
         *  // register translation table for language: 'de_DE'
         *  $translateProvider.translations('de_DE', {
         *    'GREETING': 'Hallo Welt!'
         *  });
         *
         *  // register another one
         *  $translateProvider.translations('en_US', {
         *    'GREETING': 'Hello world!'
         *  });
         * </pre>
         *
         * When registering multiple translation tables for for the same language key,
         * the actual translation table gets extended. This allows you to define module
         * specific translation which only get added, once a specific module is loaded in
         * your app.
         *
         * Invoking this method with no arguments returns the translation table which was
         * registered with no language key. Invoking it with a language key returns the
         * related translation table.
         *
         * @param {string} langKey A language key.
         * @param {object} translationTable A plain old JavaScript object that represents a translation table.
         *
         */
        var translations = function (langKey, translationTable) {

            if (!langKey && !translationTable) {
                return $translationTable;
            }

            if (langKey && !translationTable) {
                if (angular.isString(langKey)) {
                    return $translationTable[langKey];
                }
            } else {
                if (!angular.isObject($translationTable[langKey])) {
                    $translationTable[langKey] = {};
                }
                angular.extend($translationTable[langKey], flatObject(translationTable));
            }
            return this;
        };

        this.translations = translations;

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#cloakClassName
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         *
         * Let's you change the class name for `translate-cloak` directive.
         * Default class name is `translate-cloak`.
         *
         * @param {string} name translate-cloak class name
         */
        this.cloakClassName = function (name) {
            if (!name) {
                return $cloakClassName;
            }
            $cloakClassName = name;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#nestedObjectDelimeter
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         *
         * Let's you change the delimiter for namespaced translations.
         * Default delimiter is `.`.
         *
         * @param {string} delimiter namespace separator
         */
        this.nestedObjectDelimeter = function (delimiter) {
            if (!delimiter) {
                return $nestedObjectDelimeter;
            }
            $nestedObjectDelimeter = delimiter;
            return this;
        };

        /**
         * @name flatObject
         * @private
         *
         * @description
         * Flats an object. This function is used to flatten given translation data with
         * namespaces, so they are later accessible via dot notation.
         */
        var flatObject = function (data, path, result, prevKey) {
            var key, keyWithPath, keyWithShortPath, val;

            if (!path) {
                path = [];
            }
            if (!result) {
                result = {};
            }
            for (key in data) {
                if (!Object.prototype.hasOwnProperty.call(data, key)) {
                    continue;
                }
                val = data[key];
                if (angular.isObject(val)) {
                    flatObject(val, path.concat(key), result, key);
                } else {
                    keyWithPath = path.length ? ('' + path.join($nestedObjectDelimeter) + $nestedObjectDelimeter + key) : key;
                    if (path.length && key === prevKey) {
                        // Create shortcut path (foo.bar == foo.bar.bar)
                        keyWithShortPath = '' + path.join($nestedObjectDelimeter);
                        // Link it to original path
                        result[keyWithShortPath] = '@:' + keyWithPath;
                    }
                    result[keyWithPath] = val;
                }
            }
            return result;
        };
        flatObject.displayName = 'flatObject';

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#addInterpolation
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Adds interpolation services to angular-translate, so it can manage them.
         *
         * @param {object} factory Interpolation service factory
         */
        this.addInterpolation = function (factory) {
            $interpolatorFactories.push(factory);
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useMessageFormatInterpolation
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use interpolation functionality of messageformat.js.
         * This is useful when having high level pluralization and gender selection.
         */
        this.useMessageFormatInterpolation = function () {
            return this.useInterpolation('$translateMessageFormatInterpolation');
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useInterpolation
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate which interpolation style to use as default, application-wide.
         * Simply pass a factory/service name. The interpolation service has to implement
         * the correct interface.
         *
         * @param {string} factory Interpolation service name.
         */
        this.useInterpolation = function (factory) {
            $interpolationFactory = factory;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useSanitizeStrategy
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Simply sets a sanitation strategy type.
         *
         * @param {string} value Strategy type.
         */
        this.useSanitizeValueStrategy = function (value) {
            $translateSanitizationProvider.useStrategy(value);
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#preferredLanguage
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells the module which of the registered translation tables to use for translation
         * at initial startup by passing a language key. Similar to `$translateProvider#use`
         * only that it says which language to **prefer**.
         * It is recommended to call this after {@link pascalprecht.translate.$translate#fallbackLanguage fallbackLanguage()}.
         *
         * @param {string} langKey A language key.
         */
        this.preferredLanguage = function (langKey) {
            if (langKey) {
                setupPreferredLanguage(langKey);
                return this;
            }
            return $preferredLanguage;
        };
        var setupPreferredLanguage = function (langKey) {
            if (langKey) {
                $preferredLanguage = langKey;
            }
            return $preferredLanguage;
        };
        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicator
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Sets an indicator which is used when a translation isn't found. E.g. when
         * setting the indicator as 'X' and one tries to translate a translation id
         * called `NOT_FOUND`, this will result in `X NOT_FOUND X`.
         *
         * Internally this methods sets a left indicator and a right indicator using
         * `$translateProvider.translationNotFoundIndicatorLeft()` and
         * `$translateProvider.translationNotFoundIndicatorRight()`.
         *
         * **Note**: These methods automatically add a whitespace between the indicators
         * and the translation id.
         *
         * @param {string} indicator An indicator, could be any string.
         */
        this.translationNotFoundIndicator = function (indicator) {
            this.translationNotFoundIndicatorLeft(indicator);
            this.translationNotFoundIndicatorRight(indicator);
            return this;
        };

        /**
         * ngdoc function
         * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Sets an indicator which is used when a translation isn't found left to the
         * translation id.
         *
         * @param {string} indicator An indicator.
         */
        this.translationNotFoundIndicatorLeft = function (indicator) {
            if (!indicator) {
                return $notFoundIndicatorLeft;
            }
            $notFoundIndicatorLeft = indicator;
            return this;
        };

        /**
         * ngdoc function
         * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Sets an indicator which is used when a translation isn't found right to the
         * translation id.
         *
         * @param {string} indicator An indicator.
         */
        this.translationNotFoundIndicatorRight = function (indicator) {
            if (!indicator) {
                return $notFoundIndicatorRight;
            }
            $notFoundIndicatorRight = indicator;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#fallbackLanguage
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells the module which of the registered translation tables to use when missing translations
         * at initial startup by passing a language key. Similar to `$translateProvider#use`
         * only that it says which language to **fallback**.
         *
         * @param {string||array} langKey A language key.
         *
         */
        this.fallbackLanguage = function (langKey) {
            fallbackStack(langKey);
            return this;
        };

        var fallbackStack = function (langKey) {
            if (langKey) {
                if (angular.isString(langKey)) {
                    $fallbackWasString = true;
                    $fallbackLanguage = [langKey];
                } else if (angular.isArray(langKey)) {
                    $fallbackWasString = false;
                    $fallbackLanguage = langKey;
                }
                if (angular.isString($preferredLanguage) && indexOf($fallbackLanguage, $preferredLanguage) < 0) {
                    $fallbackLanguage.push($preferredLanguage);
                }

                return this;
            } else {
                if ($fallbackWasString) {
                    return $fallbackLanguage[0];
                } else {
                    return $fallbackLanguage;
                }
            }
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#use
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Set which translation table to use for translation by given language key. When
         * trying to 'use' a language which isn't provided, it'll throw an error.
         *
         * You actually don't have to use this method since `$translateProvider#preferredLanguage`
         * does the job too.
         *
         * @param {string} langKey A language key.
         */
        this.use = function (langKey) {
            if (langKey) {
                if (!$translationTable[langKey] && (!$loaderFactory)) {
                    // only throw an error, when not loading translation data asynchronously
                    throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + langKey + '\'');
                }
                $uses = langKey;
                return this;
            }
            return $uses;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#resolveClientLocale
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * This returns the current browser/client's language key. The result is processed with the configured uniform tag resolver.
         *
         * @returns {string} the current client/browser language key
         */
        this.resolveClientLocale = function () {
            return getLocale();
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#storageKey
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells the module which key must represent the choosed language by a user in the storage.
         *
         * @param {string} key A key for the storage.
         */
        var storageKey = function (key) {
            if (!key) {
                if ($storagePrefix) {
                    return $storagePrefix + $storageKey;
                }
                return $storageKey;
            }
            $storageKey = key;
            return this;
        };

        this.storageKey = storageKey;

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useUrlLoader
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use `$translateUrlLoader` extension service as loader.
         *
         * @param {string} url Url
         * @param {Object=} options Optional configuration object
         */
        this.useUrlLoader = function (url, options) {
            return this.useLoader('$translateUrlLoader', angular.extend({ url: url }, options));
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useStaticFilesLoader
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use `$translateStaticFilesLoader` extension service as loader.
         *
         * @param {Object=} options Optional configuration object
         */
        this.useStaticFilesLoader = function (options) {
            return this.useLoader('$translateStaticFilesLoader', options);
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useLoader
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use any other service as loader.
         *
         * @param {string} loaderFactory Factory name to use
         * @param {Object=} options Optional configuration object
         */
        this.useLoader = function (loaderFactory, options) {
            $loaderFactory = loaderFactory;
            $loaderOptions = options || {};
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useLocalStorage
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use `$translateLocalStorage` service as storage layer.
         *
         */
        this.useLocalStorage = function () {
            return this.useStorage('$translateLocalStorage');
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useCookieStorage
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use `$translateCookieStorage` service as storage layer.
         */
        this.useCookieStorage = function () {
            return this.useStorage('$translateCookieStorage');
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useStorage
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use custom service as storage layer.
         */
        this.useStorage = function (storageFactory) {
            $storageFactory = storageFactory;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#storagePrefix
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Sets prefix for storage key.
         *
         * @param {string} prefix Storage key prefix
         */
        this.storagePrefix = function (prefix) {
            if (!prefix) {
                return prefix;
            }
            $storagePrefix = prefix;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandlerLog
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to use built-in log handler when trying to translate
         * a translation Id which doesn't exist.
         *
         * This is actually a shortcut method for `useMissingTranslationHandler()`.
         *
         */
        this.useMissingTranslationHandlerLog = function () {
            return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandler
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Expects a factory name which later gets instantiated with `$injector`.
         * This method can be used to tell angular-translate to use a custom
         * missingTranslationHandler. Just build a factory which returns a function
         * and expects a translation id as argument.
         *
         * Example:
         * <pre>
         *  app.config(function ($translateProvider) {
         *    $translateProvider.useMissingTranslationHandler('customHandler');
         *  });
         *
         *  app.factory('customHandler', function (dep1, dep2) {
         *    return function (translationId) {
         *      // something with translationId and dep1 and dep2
         *    };
         *  });
         * </pre>
         *
         * @param {string} factory Factory name
         */
        this.useMissingTranslationHandler = function (factory) {
            $missingTranslationHandlerFactory = factory;
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#usePostCompiling
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * If post compiling is enabled, all translated values will be processed
         * again with AngularJS' $compile.
         *
         * Example:
         * <pre>
         *  app.config(function ($translateProvider) {
         *    $translateProvider.usePostCompiling(true);
         *  });
         * </pre>
         *
         * @param {string} factory Factory name
         */
        this.usePostCompiling = function (value) {
            $postCompilingEnabled = !(!value);
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#forceAsyncReload
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * If force async reload is enabled, async loader will always be called
         * even if $translationTable already contains the language key, adding
         * possible new entries to the $translationTable.
         *
         * Example:
         * <pre>
         *  app.config(function ($translateProvider) {
         *    $translateProvider.forceAsyncReload(true);
         *  });
         * </pre>
         *
         * @param {boolean} value - valid values are true or false
         */
        this.forceAsyncReload = function (value) {
            $forceAsyncReloadEnabled = !(!value);
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#uniformLanguageTag
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate which language tag should be used as a result when determining
         * the current browser language.
         *
         * This setting must be set before invoking {@link pascalprecht.translate.$translateProvider#methods_determinePreferredLanguage determinePreferredLanguage()}.
         *
         * <pre>
         * $translateProvider
         *   .uniformLanguageTag('bcp47')
         *   .determinePreferredLanguage()
         * </pre>
         *
         * The resolver currently supports:
         * * default
         *     (traditionally: hyphens will be converted into underscores, i.e. en-US => en_US)
         *     en-US => en_US
         *     en_US => en_US
         *     en-us => en_us
         * * java
         *     like default, but the second part will be always in uppercase
         *     en-US => en_US
         *     en_US => en_US
         *     en-us => en_US
         * * BCP 47 (RFC 4646 & 4647)
         *     EN => en
         *     en-US => en-US
         *     en_US => en-US
         *     en-us => en-US
         *     sr-latn => sr-Latn
         *     sr-latn-rs => sr-Latn-RS
         *
         * See also:
         * * http://en.wikipedia.org/wiki/IETF_language_tag
         * * http://www.w3.org/International/core/langtags/
         * * http://tools.ietf.org/html/bcp47
         *
         * @param {string|object} options - options (or standard)
         * @param {string} options.standard - valid values are 'default', 'bcp47', 'java'
         */
        this.uniformLanguageTag = function (options) {

            if (!options) {
                options = {};
            } else if (angular.isString(options)) {
                options = {
                    standard: options
                };
            }

            uniformLanguageTagResolver = options.standard;

            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#determinePreferredLanguage
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Tells angular-translate to try to determine on its own which language key
         * to set as preferred language. When `fn` is given, angular-translate uses it
         * to determine a language key, otherwise it uses the built-in `getLocale()`
         * method.
         *
         * The `getLocale()` returns a language key in the format `[lang]_[country]` or
         * `[lang]` depending on what the browser provides.
         *
         * Use this method at your own risk, since not all browsers return a valid
         * locale (see {@link pascalprecht.translate.$translateProvider#methods_uniformLanguageTag uniformLanguageTag()}).
         *
         * @param {Function=} fn Function to determine a browser's locale
         */
        this.determinePreferredLanguage = function (fn) {

            var locale = (fn && angular.isFunction(fn)) ? fn() : getLocale();

            if (!$availableLanguageKeys.length) {
                $preferredLanguage = locale;
            } else {
                $preferredLanguage = negotiateLocale(locale) || locale;
            }

            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#registerAvailableLanguageKeys
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Registers a set of language keys the app will work with. Use this method in
         * combination with
         * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
         * When available languages keys are registered, angular-translate
         * tries to find the best fitting language key depending on the browsers locale,
         * considering your language key convention.
         *
         * @param {object} languageKeys Array of language keys the your app will use
         * @param {object=} aliases Alias map.
         */
        this.registerAvailableLanguageKeys = function (languageKeys, aliases) {
            if (languageKeys) {
                $availableLanguageKeys = languageKeys;
                if (aliases) {
                    $languageKeyAliases = aliases;
                }
                return this;
            }
            return $availableLanguageKeys;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#useLoaderCache
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Registers a cache for internal $http based loaders.
         * {@link pascalprecht.translate.$translationCache $translationCache}.
         * When false the cache will be disabled (default). When true or undefined
         * the cache will be a default (see $cacheFactory). When an object it will
         * be treat as a cache object itself: the usage is $http({cache: cache})
         *
         * @param {object} cache boolean, string or cache-object
         */
        this.useLoaderCache = function (cache) {
            if (cache === false) {
                // disable cache
                loaderCache = undefined;
            } else if (cache === true) {
                // enable cache using AJS defaults
                loaderCache = true;
            } else if (typeof (cache) === 'undefined') {
                // enable cache using default
                loaderCache = '$translationCache';
            } else if (cache) {
                // enable cache using given one (see $cacheFactory)
                loaderCache = cache;
            }
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#directivePriority
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Sets the default priority of the translate directive. The standard value is `0`.
         * Calling this function without an argument will return the current value.
         *
         * @param {number} priority for the translate-directive
         */
        this.directivePriority = function (priority) {
            if (priority === undefined) {
                // getter
                return directivePriority;
            } else {
                // setter with chaining
                directivePriority = priority;
                return this;
            }
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#statefulFilter
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * Since AngularJS 1.3, filters which are not stateless (depending at the scope)
         * have to explicit define this behavior.
         * Sets whether the translate filter should be stateful or stateless. The standard value is `true`
         * meaning being stateful.
         * Calling this function without an argument will return the current value.
         *
         * @param {boolean} state - defines the state of the filter
         */
        this.statefulFilter = function (state) {
            if (state === undefined) {
                // getter
                return statefulFilter;
            } else {
                // setter with chaining
                statefulFilter = state;
                return this;
            }
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#postProcess
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * The post processor will be intercept right after the translation result. It can modify the result.
         *
         * @param {object} fn Function or service name (string) to be called after the translation value has been set / resolved. The function itself will enrich every value being processed and then continue the normal resolver process
         */
        this.postProcess = function (fn) {
            if (fn) {
                postProcessFn = fn;
            } else {
                postProcessFn = undefined;
            }
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateProvider#keepContent
         * @methodOf pascalprecht.translate.$translateProvider
         *
         * @description
         * If keepContent is set to true than translate directive will always use innerHTML
         * as a default translation
         *
         * Example:
         * <pre>
         *  app.config(function ($translateProvider) {
         *    $translateProvider.keepContent(true);
         *  });
         * </pre>
         *
         * @param {boolean} value - valid values are true or false
         */
        this.keepContent = function (value) {
            $keepContent = !(!value);
            return this;
        };

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translate
         * @requires $interpolate
         * @requires $log
         * @requires $rootScope
         * @requires $q
         *
         * @description
         * The `$translate` service is the actual core of angular-translate. It expects a translation id
         * and optional interpolate parameters to translate contents.
         *
         * <pre>
         *  $translate('HEADLINE_TEXT').then(function (translation) {
         *    $scope.translatedText = translation;
         *  });
         * </pre>
         *
         * @param {string|array} translationId A token which represents a translation id
         *                                     This can be optionally an array of translation ids which
         *                                     results that the function returns an object where each key
         *                                     is the translation id and the value the translation.
         * @param {object=} [interpolateParams={}] An object hash for dynamic values
         * @param {string=} [interpolationId=undefined] The id of the interpolation to use (use default unless set via useInterpolation())
         * @param {string=} [defaultTranslationText=undefined] the optional default translation text that is written as
         *                                        as default text in case it is not found in any configured language
         * @param {string=} [forceLanguage=false] A language to be used instead of the current language
         * @param {string=} [sanitizeStrategy=undefined] force sanitize strategy for this call instead of using the configured one (use default unless set)
         * @returns {object} promise
         */
        this.$get = ['$log', '$injector', '$rootScope', '$q', function ($log, $injector, $rootScope, $q) {

            var Storage,
                defaultInterpolator = $injector.get($interpolationFactory || '$translateDefaultInterpolation'),
                pendingLoader = false,
                interpolatorHashMap = {},
                langPromises = {},
                fallbackIndex,
                startFallbackIteration;

            var $translate = function (translationId, interpolateParams, interpolationId, defaultTranslationText, forceLanguage, sanitizeStrategy) {
                if (!$uses && $preferredLanguage) {
                    $uses = $preferredLanguage;
                }
                var uses = (forceLanguage && forceLanguage !== $uses) ? // we don't want to re-negotiate $uses
                    (negotiateLocale(forceLanguage) || forceLanguage) : $uses;

                // Check forceLanguage is present
                if (forceLanguage) {
                    loadTranslationsIfMissing(forceLanguage);
                }

                // Duck detection: If the first argument is an array, a bunch of translations was requested.
                // The result is an object.
                if (angular.isArray(translationId)) {
                    // Inspired by Q.allSettled by Kris Kowal
                    // https://github.com/kriskowal/q/blob/b0fa72980717dc202ffc3cbf03b936e10ebbb9d7/q.js#L1553-1563
                    // This transforms all promises regardless resolved or rejected
                    var translateAll = function (translationIds) {
                        var results = {}; // storing the actual results
                        var promises = []; // promises to wait for
                        // Wraps the promise a) being always resolved and b) storing the link id->value
                        var translate = function (translationId) {
                            var deferred = $q.defer();
                            var regardless = function (value) {
                                results[translationId] = value;
                                deferred.resolve([translationId, value]);
                            };
                            // we don't care whether the promise was resolved or rejected; just store the values
                            $translate(translationId, interpolateParams, interpolationId, defaultTranslationText, forceLanguage, sanitizeStrategy).then(regardless, regardless);
                            return deferred.promise;
                        };
                        for (var i = 0, c = translationIds.length; i < c; i++) {
                            promises.push(translate(translationIds[i]));
                        }
                        // wait for all (including storing to results)
                        return $q.all(promises).then(function () {
                            // return the results
                            return results;
                        });
                    };
                    return translateAll(translationId);
                }

                var deferred = $q.defer();

                // trim off any whitespace
                if (translationId) {
                    translationId = trim.apply(translationId);
                }

                var promiseToWaitFor = (function () {
                    var promise = langPromises[uses] || langPromises[$preferredLanguage];

                    fallbackIndex = 0;

                    if ($storageFactory && !promise) {
                        // looks like there's no pending promise for $preferredLanguage or
                        // $uses. Maybe there's one pending for a language that comes from
                        // storage.
                        var langKey = Storage.get($storageKey);
                        promise = langPromises[langKey];

                        if ($fallbackLanguage && $fallbackLanguage.length) {
                            var index = indexOf($fallbackLanguage, langKey);
                            // maybe the language from storage is also defined as fallback language
                            // we increase the fallback language index to not search in that language
                            // as fallback, since it's probably the first used language
                            // in that case the index starts after the first element
                            fallbackIndex = (index === 0) ? 1 : 0;

                            // but we can make sure to ALWAYS fallback to preferred language at least
                            if (indexOf($fallbackLanguage, $preferredLanguage) < 0) {
                                $fallbackLanguage.push($preferredLanguage);
                            }
                        }
                    }
                    return promise;
                }());

                if (!promiseToWaitFor) {
                    // no promise to wait for? okay. Then there's no loader registered
                    // nor is a one pending for language that comes from storage.
                    // We can just translate.
                    determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy).then(deferred.resolve, deferred.reject);
                } else {
                    var promiseResolved = function () {
                        // $uses may have changed while waiting
                        if (!forceLanguage) {
                            uses = $uses;
                        }
                        determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy).then(deferred.resolve, deferred.reject);
                    };
                    promiseResolved.displayName = 'promiseResolved';

                    promiseToWaitFor['finally'](promiseResolved)['catch'](angular.noop); // we don't care about errors here, already handled
                }
                return deferred.promise;
            };

            /**
             * @name applyNotFoundIndicators
             * @private
             *
             * @description
             * Applies not fount indicators to given translation id, if needed.
             * This function gets only executed, if a translation id doesn't exist,
             * which is why a translation id is expected as argument.
             *
             * @param {string} translationId Translation id.
             * @returns {string} Same as given translation id but applied with not found
             * indicators.
             */
            var applyNotFoundIndicators = function (translationId) {
                // applying notFoundIndicators
                if ($notFoundIndicatorLeft) {
                    translationId = [$notFoundIndicatorLeft, translationId].join(' ');
                }
                if ($notFoundIndicatorRight) {
                    translationId = [translationId, $notFoundIndicatorRight].join(' ');
                }
                return translationId;
            };

            /**
             * @name useLanguage
             * @private
             *
             * @description
             * Makes actual use of a language by setting a given language key as used
             * language and informs registered interpolators to also use the given
             * key as locale.
             *
             * @param {string} key Locale key.
             */
            var useLanguage = function (key) {
                $uses = key;

                // make sure to store new language key before triggering success event
                if ($storageFactory) {
                    Storage.put($translate.storageKey(), $uses);
                }

                $rootScope.$emit('$translateChangeSuccess', { language: key });

                // inform default interpolator
                defaultInterpolator.setLocale($uses);

                var eachInterpolator = function (interpolator, id) {
                    interpolatorHashMap[id].setLocale($uses);
                };
                eachInterpolator.displayName = 'eachInterpolatorLocaleSetter';

                // inform all others too!
                angular.forEach(interpolatorHashMap, eachInterpolator);
                $rootScope.$emit('$translateChangeEnd', { language: key });
            };

            /**
             * @name loadAsync
             * @private
             *
             * @description
             * Kicks off registered async loader using `$injector` and applies existing
             * loader options. When resolved, it updates translation tables accordingly
             * or rejects with given language key.
             *
             * @param {string} key Language key.
             * @return {Promise} A promise.
             */
            var loadAsync = function (key) {
                if (!key) {
                    throw 'No language key specified for loading.';
                }

                var deferred = $q.defer();

                $rootScope.$emit('$translateLoadingStart', { language: key });
                pendingLoader = true;

                var cache = loaderCache;
                if (typeof (cache) === 'string') {
                    // getting on-demand instance of loader
                    cache = $injector.get(cache);
                }

                var loaderOptions = angular.extend({}, $loaderOptions, {
                    key: key,
                    $http: angular.extend({}, {
                        cache: cache
                    }, $loaderOptions.$http)
                });

                var onLoaderSuccess = function (data) {
                    var translationTable = {};
                    $rootScope.$emit('$translateLoadingSuccess', { language: key });

                    if (angular.isArray(data)) {
                        angular.forEach(data, function (table) {
                            angular.extend(translationTable, flatObject(table));
                        });
                    } else {
                        angular.extend(translationTable, flatObject(data));
                    }
                    pendingLoader = false;
                    deferred.resolve({
                        key: key,
                        table: translationTable
                    });
                    $rootScope.$emit('$translateLoadingEnd', { language: key });
                };
                onLoaderSuccess.displayName = 'onLoaderSuccess';

                var onLoaderError = function (key) {
                    $rootScope.$emit('$translateLoadingError', { language: key });
                    deferred.reject(key);
                    $rootScope.$emit('$translateLoadingEnd', { language: key });
                };
                onLoaderError.displayName = 'onLoaderError';

                $injector.get($loaderFactory)(loaderOptions)
                    .then(onLoaderSuccess, onLoaderError);

                return deferred.promise;
            };

            if ($storageFactory) {
                Storage = $injector.get($storageFactory);

                if (!Storage.get || !Storage.put) {
                    throw new Error('Couldn\'t use storage \'' + $storageFactory + '\', missing get() or put() method!');
                }
            }

            // if we have additional interpolations that were added via
            // $translateProvider.addInterpolation(), we have to map'em
            if ($interpolatorFactories.length) {
                var eachInterpolationFactory = function (interpolatorFactory) {
                    var interpolator = $injector.get(interpolatorFactory);
                    // setting initial locale for each interpolation service
                    interpolator.setLocale($preferredLanguage || $uses);
                    // make'em recognizable through id
                    interpolatorHashMap[interpolator.getInterpolationIdentifier()] = interpolator;
                };
                eachInterpolationFactory.displayName = 'interpolationFactoryAdder';

                angular.forEach($interpolatorFactories, eachInterpolationFactory);
            }

            /**
             * @name getTranslationTable
             * @private
             *
             * @description
             * Returns a promise that resolves to the translation table
             * or is rejected if an error occurred.
             *
             * @param langKey
             * @returns {Q.promise}
             */
            var getTranslationTable = function (langKey) {
                var deferred = $q.defer();
                if (Object.prototype.hasOwnProperty.call($translationTable, langKey)) {
                    deferred.resolve($translationTable[langKey]);
                } else if (langPromises[langKey]) {
                    var onResolve = function (data) {
                        translations(data.key, data.table);
                        deferred.resolve(data.table);
                    };
                    onResolve.displayName = 'translationTableResolver';
                    langPromises[langKey].then(onResolve, deferred.reject);
                } else {
                    deferred.reject();
                }
                return deferred.promise;
            };

            /**
             * @name getFallbackTranslation
             * @private
             *
             * @description
             * Returns a promise that will resolve to the translation
             * or be rejected if no translation was found for the language.
             * This function is currently only used for fallback language translation.
             *
             * @param langKey The language to translate to.
             * @param translationId
             * @param interpolateParams
             * @param Interpolator
             * @param sanitizeStrategy
             * @returns {Q.promise}
             */
            var getFallbackTranslation = function (langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy) {
                var deferred = $q.defer();

                var onResolve = function (translationTable) {
                    if (Object.prototype.hasOwnProperty.call(translationTable, translationId) && translationTable[translationId] !== null) {
                        Interpolator.setLocale(langKey);
                        var translation = translationTable[translationId];
                        if (translation.substr(0, 2) === '@:') {
                            getFallbackTranslation(langKey, translation.substr(2), interpolateParams, Interpolator, sanitizeStrategy)
                                .then(deferred.resolve, deferred.reject);
                        } else {
                            var interpolatedValue = Interpolator.interpolate(translationTable[translationId], interpolateParams, 'service', sanitizeStrategy, translationId);
                            interpolatedValue = applyPostProcessing(translationId, translationTable[translationId], interpolatedValue, interpolateParams, langKey);

                            deferred.resolve(interpolatedValue);

                        }
                        Interpolator.setLocale($uses);
                    } else {
                        deferred.reject();
                    }
                };
                onResolve.displayName = 'fallbackTranslationResolver';

                getTranslationTable(langKey).then(onResolve, deferred.reject);

                return deferred.promise;
            };

            /**
             * @name getFallbackTranslationInstant
             * @private
             *
             * @description
             * Returns a translation
             * This function is currently only used for fallback language translation.
             *
             * @param langKey The language to translate to.
             * @param translationId
             * @param interpolateParams
             * @param Interpolator
             * @param sanitizeStrategy sanitize strategy override
             *
             * @returns {string} translation
             */
            var getFallbackTranslationInstant = function (langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy) {
                var result, translationTable = $translationTable[langKey];

                if (translationTable && Object.prototype.hasOwnProperty.call(translationTable, translationId) && translationTable[translationId] !== null) {
                    Interpolator.setLocale(langKey);
                    result = Interpolator.interpolate(translationTable[translationId], interpolateParams, 'filter', sanitizeStrategy, translationId);
                    result = applyPostProcessing(translationId, translationTable[translationId], result, interpolateParams, langKey, sanitizeStrategy);
                    // workaround for TrustedValueHolderType
                    if (!angular.isString(result) && angular.isFunction(result.$$unwrapTrustedValue)) {
                        var result2 = result.$$unwrapTrustedValue();
                        if (result2.substr(0, 2) === '@:') {
                            return getFallbackTranslationInstant(langKey, result2.substr(2), interpolateParams, Interpolator, sanitizeStrategy);
                        }
                    } else if (result.substr(0, 2) === '@:') {
                        return getFallbackTranslationInstant(langKey, result.substr(2), interpolateParams, Interpolator, sanitizeStrategy);
                    }
                    Interpolator.setLocale($uses);
                }

                return result;
            };


            /**
             * @name translateByHandler
             * @private
             *
             * Translate by missing translation handler.
             *
             * @param translationId
             * @param interpolateParams
             * @param defaultTranslationText
             * @param sanitizeStrategy sanitize strategy override
             *
             * @returns translation created by $missingTranslationHandler or translationId is $missingTranslationHandler is
             * absent
             */
            var translateByHandler = function (translationId, interpolateParams, defaultTranslationText, sanitizeStrategy) {
                // If we have a handler factory - we might also call it here to determine if it provides
                // a default text for a translationid that can't be found anywhere in our tables
                if ($missingTranslationHandlerFactory) {
                    return $injector.get($missingTranslationHandlerFactory)(translationId, $uses, interpolateParams, defaultTranslationText, sanitizeStrategy);
                } else {
                    return translationId;
                }
            };

            /**
             * @name resolveForFallbackLanguage
             * @private
             *
             * Recursive helper function for fallbackTranslation that will sequentially look
             * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
             *
             * @param fallbackLanguageIndex
             * @param translationId
             * @param interpolateParams
             * @param Interpolator
             * @param defaultTranslationText
             * @param sanitizeStrategy
             * @returns {Q.promise} Promise that will resolve to the translation.
             */
            var resolveForFallbackLanguage = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy) {
                var deferred = $q.defer();

                if (fallbackLanguageIndex < $fallbackLanguage.length) {
                    var langKey = $fallbackLanguage[fallbackLanguageIndex];
                    getFallbackTranslation(langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy).then(
                        function (data) {
                            deferred.resolve(data);
                        },
                        function () {
                            // Look in the next fallback language for a translation.
                            // It delays the resolving by passing another promise to resolve.
                            return resolveForFallbackLanguage(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy).then(deferred.resolve, deferred.reject);
                        }
                    );
                } else {
                    // No translation found in any fallback language
                    // if a default translation text is set in the directive, then return this as a result
                    if (defaultTranslationText) {
                        deferred.resolve(defaultTranslationText);
                    } else {
                        var missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, defaultTranslationText);

                        // if no default translation is set and an error handler is defined, send it to the handler
                        // and then return the result if it isn't undefined
                        if ($missingTranslationHandlerFactory && missingTranslationHandlerTranslation) {
                            deferred.resolve(missingTranslationHandlerTranslation);
                        } else {
                            deferred.reject(applyNotFoundIndicators(translationId));
                        }
                    }
                }
                return deferred.promise;
            };

            /**
             * @name resolveForFallbackLanguageInstant
             * @private
             *
             * Recursive helper function for fallbackTranslation that will sequentially look
             * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
             *
             * @param fallbackLanguageIndex
             * @param translationId
             * @param interpolateParams
             * @param Interpolator
             * @param sanitizeStrategy
             * @returns {string} translation
             */
            var resolveForFallbackLanguageInstant = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, sanitizeStrategy) {
                var result;

                if (fallbackLanguageIndex < $fallbackLanguage.length) {
                    var langKey = $fallbackLanguage[fallbackLanguageIndex];
                    result = getFallbackTranslationInstant(langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy);
                    if (!result && result !== '') {
                        result = resolveForFallbackLanguageInstant(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator);
                    }
                }
                return result;
            };

            /**
             * Translates with the usage of the fallback languages.
             *
             * @param translationId
             * @param interpolateParams
             * @param Interpolator
             * @param defaultTranslationText
             * @param sanitizeStrategy
             * @returns {Q.promise} Promise, that resolves to the translation.
             */
            var fallbackTranslation = function (translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy) {
                // Start with the fallbackLanguage with index 0
                return resolveForFallbackLanguage((startFallbackIteration > 0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy);
            };

            /**
             * Translates with the usage of the fallback languages.
             *
             * @param translationId
             * @param interpolateParams
             * @param Interpolator
             * @param sanitizeStrategy
             * @returns {String} translation
             */
            var fallbackTranslationInstant = function (translationId, interpolateParams, Interpolator, sanitizeStrategy) {
                // Start with the fallbackLanguage with index 0
                return resolveForFallbackLanguageInstant((startFallbackIteration > 0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, sanitizeStrategy);
            };

            var determineTranslation = function (translationId, interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy) {

                var deferred = $q.defer();

                var table = uses ? $translationTable[uses] : $translationTable,
                    Interpolator = (interpolationId) ? interpolatorHashMap[interpolationId] : defaultInterpolator;

                // if the translation id exists, we can just interpolate it
                if (table && Object.prototype.hasOwnProperty.call(table, translationId) && table[translationId] !== null) {
                    var translation = table[translationId];

                    // If using link, rerun $translate with linked translationId and return it
                    if (translation.substr(0, 2) === '@:') {

                        $translate(translation.substr(2), interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy)
                            .then(deferred.resolve, deferred.reject);
                    } else {
                        //
                        var resolvedTranslation = Interpolator.interpolate(translation, interpolateParams, 'service', sanitizeStrategy, translationId);
                        resolvedTranslation = applyPostProcessing(translationId, translation, resolvedTranslation, interpolateParams, uses);
                        deferred.resolve(resolvedTranslation);
                    }
                } else {
                    var missingTranslationHandlerTranslation;
                    // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
                    if ($missingTranslationHandlerFactory && !pendingLoader) {
                        missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, defaultTranslationText);
                    }

                    // since we couldn't translate the inital requested translation id,
                    // we try it now with one or more fallback languages, if fallback language(s) is
                    // configured.
                    if (uses && $fallbackLanguage && $fallbackLanguage.length) {
                        fallbackTranslation(translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy)
                            .then(function (translation) {
                                deferred.resolve(translation);
                            }, function (_translationId) {
                                deferred.reject(applyNotFoundIndicators(_translationId));
                            });
                    } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
                        // looks like the requested translation id doesn't exists.
                        // Now, if there is a registered handler for missing translations and no
                        // asyncLoader is pending, we execute the handler
                        if (defaultTranslationText) {
                            deferred.resolve(defaultTranslationText);
                        } else {
                            deferred.resolve(missingTranslationHandlerTranslation);
                        }
                    } else {
                        if (defaultTranslationText) {
                            deferred.resolve(defaultTranslationText);
                        } else {
                            deferred.reject(applyNotFoundIndicators(translationId));
                        }
                    }
                }
                return deferred.promise;
            };

            var determineTranslationInstant = function (translationId, interpolateParams, interpolationId, uses, sanitizeStrategy) {

                var result, table = uses ? $translationTable[uses] : $translationTable,
                    Interpolator = defaultInterpolator;

                // if the interpolation id exists use custom interpolator
                if (interpolatorHashMap && Object.prototype.hasOwnProperty.call(interpolatorHashMap, interpolationId)) {
                    Interpolator = interpolatorHashMap[interpolationId];
                }

                // if the translation id exists, we can just interpolate it
                if (table && Object.prototype.hasOwnProperty.call(table, translationId) && table[translationId] !== null) {
                    var translation = table[translationId];

                    // If using link, rerun $translate with linked translationId and return it
                    if (translation.substr(0, 2) === '@:') {
                        result = determineTranslationInstant(translation.substr(2), interpolateParams, interpolationId, uses, sanitizeStrategy);
                    } else {
                        result = Interpolator.interpolate(translation, interpolateParams, 'filter', sanitizeStrategy, translationId);
                        result = applyPostProcessing(translationId, translation, result, interpolateParams, uses, sanitizeStrategy);
                    }
                } else {
                    var missingTranslationHandlerTranslation;
                    // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
                    if ($missingTranslationHandlerFactory && !pendingLoader) {
                        missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, sanitizeStrategy);
                    }

                    // since we couldn't translate the inital requested translation id,
                    // we try it now with one or more fallback languages, if fallback language(s) is
                    // configured.
                    if (uses && $fallbackLanguage && $fallbackLanguage.length) {
                        fallbackIndex = 0;
                        result = fallbackTranslationInstant(translationId, interpolateParams, Interpolator, sanitizeStrategy);
                    } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
                        // looks like the requested translation id doesn't exists.
                        // Now, if there is a registered handler for missing translations and no
                        // asyncLoader is pending, we execute the handler
                        result = missingTranslationHandlerTranslation;
                    } else {
                        result = applyNotFoundIndicators(translationId);
                    }
                }

                return result;
            };

            var clearNextLangAndPromise = function (key) {
                if ($nextLang === key) {
                    $nextLang = undefined;
                }
                langPromises[key] = undefined;
            };

            var applyPostProcessing = function (translationId, translation, resolvedTranslation, interpolateParams, uses, sanitizeStrategy) {
                var fn = postProcessFn;

                if (fn) {

                    if (typeof (fn) === 'string') {
                        // getting on-demand instance
                        fn = $injector.get(fn);
                    }
                    if (fn) {
                        return fn(translationId, translation, resolvedTranslation, interpolateParams, uses, sanitizeStrategy);
                    }
                }

                return resolvedTranslation;
            };

            var loadTranslationsIfMissing = function (key) {
                if (!$translationTable[key] && $loaderFactory && !langPromises[key]) {
                    langPromises[key] = loadAsync(key).then(function (translation) {
                        translations(translation.key, translation.table);
                        return translation;
                    });
                }
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#preferredLanguage
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the language key for the preferred language.
             *
             * @param {string} langKey language String or Array to be used as preferredLanguage (changing at runtime)
             *
             * @return {string} preferred language key
             */
            $translate.preferredLanguage = function (langKey) {
                if (langKey) {
                    setupPreferredLanguage(langKey);
                }
                return $preferredLanguage;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#cloakClassName
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the configured class name for `translate-cloak` directive.
             *
             * @return {string} cloakClassName
             */
            $translate.cloakClassName = function () {
                return $cloakClassName;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#nestedObjectDelimeter
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the configured delimiter for nested namespaces.
             *
             * @return {string} nestedObjectDelimeter
             */
            $translate.nestedObjectDelimeter = function () {
                return $nestedObjectDelimeter;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#fallbackLanguage
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the language key for the fallback languages or sets a new fallback stack.
             * It is recommended to call this before {@link pascalprecht.translate.$translateProvider#preferredLanguage preferredLanguage()}.
             *
             * @param {string=} langKey language String or Array of fallback languages to be used (to change stack at runtime)
             *
             * @return {string||array} fallback language key
             */
            $translate.fallbackLanguage = function (langKey) {
                if (langKey !== undefined && langKey !== null) {
                    fallbackStack(langKey);

                    // as we might have an async loader initiated and a new translation language might have been defined
                    // we need to add the promise to the stack also. So - iterate.
                    if ($loaderFactory) {
                        if ($fallbackLanguage && $fallbackLanguage.length) {
                            for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
                                if (!langPromises[$fallbackLanguage[i]]) {
                                    langPromises[$fallbackLanguage[i]] = loadAsync($fallbackLanguage[i]);
                                }
                            }
                        }
                    }
                    $translate.use($translate.use());
                }
                if ($fallbackWasString) {
                    return $fallbackLanguage[0];
                } else {
                    return $fallbackLanguage;
                }

            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#useFallbackLanguage
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Sets the first key of the fallback language stack to be used for translation.
             * Therefore all languages in the fallback array BEFORE this key will be skipped!
             *
             * @param {string=} langKey Contains the langKey the iteration shall start with. Set to false if you want to
             * get back to the whole stack
             */
            $translate.useFallbackLanguage = function (langKey) {
                if (langKey !== undefined && langKey !== null) {
                    if (!langKey) {
                        startFallbackIteration = 0;
                    } else {
                        var langKeyPosition = indexOf($fallbackLanguage, langKey);
                        if (langKeyPosition > -1) {
                            startFallbackIteration = langKeyPosition;
                        }
                    }

                }

            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#proposedLanguage
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the language key of language that is currently loaded asynchronously.
             *
             * @return {string} language key
             */
            $translate.proposedLanguage = function () {
                return $nextLang;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#storage
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns registered storage.
             *
             * @return {object} Storage
             */
            $translate.storage = function () {
                return Storage;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#negotiateLocale
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns a language key based on available languages and language aliases. If a
             * language key cannot be resolved, returns undefined.
             *
             * If no or a falsy key is given, returns undefined.
             *
             * @param {string} [key] Language key
             * @return {string|undefined} Language key or undefined if no language key is found.
             */
            $translate.negotiateLocale = negotiateLocale;

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#use
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Tells angular-translate which language to use by given language key. This method is
             * used to change language at runtime. It also takes care of storing the language
             * key in a configured store to let your app remember the choosed language.
             *
             * When trying to 'use' a language which isn't available it tries to load it
             * asynchronously with registered loaders.
             *
             * Returns promise object with loaded language file data or string of the currently used language.
             *
             * If no or a falsy key is given it returns the currently used language key.
             * The returned string will be ```undefined``` if setting up $translate hasn't finished.
             * @example
             * $translate.use("en_US").then(function(data){
               *   $scope.text = $translate("HELLO");
               * });
             *
             * @param {string=} key Language key
             * @return {object|string} Promise with loaded language data or the language key if a falsy param was given.
             */
            $translate.use = function (key) {
                if (!key) {
                    return $uses;
                }

                var deferred = $q.defer();
                deferred.promise.then(null, angular.noop); // AJS "Possibly unhandled rejection"

                $rootScope.$emit('$translateChangeStart', { language: key });

                // Try to get the aliased language key
                var aliasedKey = negotiateLocale(key);
                // Ensure only registered language keys will be loaded
                if ($availableLanguageKeys.length > 0 && !aliasedKey) {
                    return $q.reject(key);
                }

                if (aliasedKey) {
                    key = aliasedKey;
                }

                // if there isn't a translation table for the language we've requested,
                // we load it asynchronously
                $nextLang = key;
                if (($forceAsyncReloadEnabled || !$translationTable[key]) && $loaderFactory && !langPromises[key]) {
                    langPromises[key] = loadAsync(key).then(function (translation) {
                        translations(translation.key, translation.table);
                        deferred.resolve(translation.key);
                        if ($nextLang === key) {
                            useLanguage(translation.key);
                        }
                        return translation;
                    }, function (key) {
                        $rootScope.$emit('$translateChangeError', { language: key });
                        deferred.reject(key);
                        $rootScope.$emit('$translateChangeEnd', { language: key });
                        return $q.reject(key);
                    });
                    langPromises[key]['finally'](function () {
                        clearNextLangAndPromise(key);
                    })['catch'](angular.noop); // we don't care about errors (clearing)
                } else if (langPromises[key]) {
                    // we are already loading this asynchronously
                    // resolve our new deferred when the old langPromise is resolved
                    langPromises[key].then(function (translation) {
                        if ($nextLang === translation.key) {
                            useLanguage(translation.key);
                        }
                        deferred.resolve(translation.key);
                        return translation;
                    }, function (key) {
                        // find first available fallback language if that request has failed
                        if (!$uses && $fallbackLanguage && $fallbackLanguage.length > 0 && $fallbackLanguage[0] !== key) {
                            return $translate.use($fallbackLanguage[0]).then(deferred.resolve, deferred.reject);
                        } else {
                            return deferred.reject(key);
                        }
                    });
                } else {
                    deferred.resolve(key);
                    useLanguage(key);
                }

                return deferred.promise;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#resolveClientLocale
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * This returns the current browser/client's language key. The result is processed with the configured uniform tag resolver.
             *
             * @returns {string} the current client/browser language key
             */
            $translate.resolveClientLocale = function () {
                return getLocale();
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#storageKey
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the key for the storage.
             *
             * @return {string} storage key
             */
            $translate.storageKey = function () {
                return storageKey();
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#isPostCompilingEnabled
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns whether post compiling is enabled or not
             *
             * @return {bool} storage key
             */
            $translate.isPostCompilingEnabled = function () {
                return $postCompilingEnabled;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#isForceAsyncReloadEnabled
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns whether force async reload is enabled or not
             *
             * @return {boolean} forceAsyncReload value
             */
            $translate.isForceAsyncReloadEnabled = function () {
                return $forceAsyncReloadEnabled;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#isKeepContent
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns whether keepContent or not
             *
             * @return {boolean} keepContent value
             */
            $translate.isKeepContent = function () {
                return $keepContent;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#refresh
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Refreshes a translation table pointed by the given langKey. If langKey is not specified,
             * the module will drop all existent translation tables and load new version of those which
             * are currently in use.
             *
             * Refresh means that the module will drop target translation table and try to load it again.
             *
             * In case there are no loaders registered the refresh() method will throw an Error.
             *
             * If the module is able to refresh translation tables refresh() method will broadcast
             * $translateRefreshStart and $translateRefreshEnd events.
             *
             * @example
             * // this will drop all currently existent translation tables and reload those which are
             * // currently in use
             * $translate.refresh();
             * // this will refresh a translation table for the en_US language
             * $translate.refresh('en_US');
             *
             * @param {string} langKey A language key of the table, which has to be refreshed
             *
             * @return {promise} Promise, which will be resolved in case a translation tables refreshing
             * process is finished successfully, and reject if not.
             */
            $translate.refresh = function (langKey) {
                if (!$loaderFactory) {
                    throw new Error('Couldn\'t refresh translation table, no loader registered!');
                }

                $rootScope.$emit('$translateRefreshStart', { language: langKey });

                var deferred = $q.defer(), updatedLanguages = {};

                //private helper
                function loadNewData(languageKey) {
                    var promise = loadAsync(languageKey);
                    //update the load promise cache for this language
                    langPromises[languageKey] = promise;
                    //register a data handler for the promise
                    promise.then(function (data) {
                        //clear the cache for this language
                        $translationTable[languageKey] = {};
                        //add the new data for this language
                        translations(languageKey, data.table);
                        //track that we updated this language
                        updatedLanguages[languageKey] = true;
                    },
                        //handle rejection to appease the $q validation
                        angular.noop);
                    return promise;
                }

                //set up post-processing
                deferred.promise.then(
                    function () {
                        for (var key in $translationTable) {
                            if ($translationTable.hasOwnProperty(key)) {
                                //delete cache entries that were not updated
                                if (!(key in updatedLanguages)) {
                                    delete $translationTable[key];
                                }
                            }
                        }
                        if ($uses) {
                            useLanguage($uses);
                        }
                    },
                    //handle rejection to appease the $q validation
                    angular.noop
                )['finally'](
                    function () {
                        $rootScope.$emit('$translateRefreshEnd', { language: langKey });
                    }
                    );

                if (!langKey) {
                    // if there's no language key specified we refresh ALL THE THINGS!
                    var languagesToReload = $fallbackLanguage && $fallbackLanguage.slice() || [];
                    if ($uses && languagesToReload.indexOf($uses) === -1) {
                        languagesToReload.push($uses);
                    }
                    $q.all(languagesToReload.map(loadNewData)).then(deferred.resolve, deferred.reject);

                } else if ($translationTable[langKey]) {
                    //just refresh the specified language cache
                    loadNewData(langKey).then(deferred.resolve, deferred.reject);

                } else {
                    deferred.reject();
                }

                return deferred.promise;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#instant
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns a translation instantly from the internal state of loaded translation. All rules
             * regarding the current language, the preferred language of even fallback languages will be
             * used except any promise handling. If a language was not found, an asynchronous loading
             * will be invoked in the background.
             *
             * @param {string|array} translationId A token which represents a translation id
             *                                     This can be optionally an array of translation ids which
             *                                     results that the function's promise returns an object where
             *                                     each key is the translation id and the value the translation.
             * @param {object=} [interpolateParams={}] Params
             * @param {string=} [interpolationId=undefined] The id of the interpolation to use (use default unless set via useInterpolation())
             * @param {string=} [forceLanguage=false] A language to be used instead of the current language
             * @param {string=} [sanitizeStrategy=undefined] force sanitize strategy for this call instead of using the configured one (use default unless set)
             *
             * @return {string|object} translation
             */
            $translate.instant = function (translationId, interpolateParams, interpolationId, forceLanguage, sanitizeStrategy) {

                // we don't want to re-negotiate $uses
                var uses = (forceLanguage && forceLanguage !== $uses) ? // we don't want to re-negotiate $uses
                    (negotiateLocale(forceLanguage) || forceLanguage) : $uses;

                // Detect undefined and null values to shorten the execution and prevent exceptions
                if (translationId === null || angular.isUndefined(translationId)) {
                    return translationId;
                }

                // Check forceLanguage is present
                if (forceLanguage) {
                    loadTranslationsIfMissing(forceLanguage);
                }

                // Duck detection: If the first argument is an array, a bunch of translations was requested.
                // The result is an object.
                if (angular.isArray(translationId)) {
                    var results = {};
                    for (var i = 0, c = translationId.length; i < c; i++) {
                        results[translationId[i]] = $translate.instant(translationId[i], interpolateParams, interpolationId, forceLanguage, sanitizeStrategy);
                    }
                    return results;
                }

                // We discarded unacceptable values. So we just need to verify if translationId is empty String
                if (angular.isString(translationId) && translationId.length < 1) {
                    return translationId;
                }

                // trim off any whitespace
                if (translationId) {
                    translationId = trim.apply(translationId);
                }

                var result, possibleLangKeys = [];
                if ($preferredLanguage) {
                    possibleLangKeys.push($preferredLanguage);
                }
                if (uses) {
                    possibleLangKeys.push(uses);
                }
                if ($fallbackLanguage && $fallbackLanguage.length) {
                    possibleLangKeys = possibleLangKeys.concat($fallbackLanguage);
                }
                for (var j = 0, d = possibleLangKeys.length; j < d; j++) {
                    var possibleLangKey = possibleLangKeys[j];
                    if ($translationTable[possibleLangKey]) {
                        if (typeof $translationTable[possibleLangKey][translationId] !== 'undefined') {
                            result = determineTranslationInstant(translationId, interpolateParams, interpolationId, uses, sanitizeStrategy);
                        }
                    }
                    if (typeof result !== 'undefined') {
                        break;
                    }
                }

                if (!result && result !== '') {
                    if ($notFoundIndicatorLeft || $notFoundIndicatorRight) {
                        result = applyNotFoundIndicators(translationId);
                    } else {
                        // Return translation of default interpolator if not found anything.
                        result = defaultInterpolator.interpolate(translationId, interpolateParams, 'filter', sanitizeStrategy);

                        // looks like the requested translation id doesn't exists.
                        // Now, if there is a registered handler for missing translations and no
                        // asyncLoader is pending, we execute the handler
                        var missingTranslationHandlerTranslation;
                        if ($missingTranslationHandlerFactory && !pendingLoader) {
                            missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, sanitizeStrategy);
                        }

                        if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
                            result = missingTranslationHandlerTranslation;
                        }
                    }
                }

                return result;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#versionInfo
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the current version information for the angular-translate library
             *
             * @return {string} angular-translate version
             */
            $translate.versionInfo = function () {
                return version;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#loaderCache
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns the defined loaderCache.
             *
             * @return {boolean|string|object} current value of loaderCache
             */
            $translate.loaderCache = function () {
                return loaderCache;
            };

            // internal purpose only
            $translate.directivePriority = function () {
                return directivePriority;
            };

            // internal purpose only
            $translate.statefulFilter = function () {
                return statefulFilter;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#isReady
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns whether the service is "ready" to translate (i.e. loading 1st language).
             *
             * See also {@link pascalprecht.translate.$translate#methods_onReady onReady()}.
             *
             * @return {boolean} current value of ready
             */
            $translate.isReady = function () {
                return $isReady;
            };

            var $onReadyDeferred = $q.defer();
            $onReadyDeferred.promise.then(function () {
                $isReady = true;
            });

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#onReady
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Calls the function provided or resolved the returned promise after the service is "ready" to translate (i.e. loading 1st language).
             *
             * See also {@link pascalprecht.translate.$translate#methods_isReady isReady()}.
             *
             * @param {Function=} fn Function to invoke when service is ready
             * @return {object} Promise resolved when service is ready
             */
            $translate.onReady = function (fn) {
                var deferred = $q.defer();
                if (angular.isFunction(fn)) {
                    deferred.promise.then(fn);
                }
                if ($isReady) {
                    deferred.resolve();
                } else {
                    $onReadyDeferred.promise.then(deferred.resolve);
                }
                return deferred.promise;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#getAvailableLanguageKeys
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * This function simply returns the registered language keys being defined before in the config phase
             * With this, an application can use the array to provide a language selection dropdown or similar
             * without any additional effort
             *
             * @returns {object} returns the list of possibly registered language keys and mapping or null if not defined
             */
            $translate.getAvailableLanguageKeys = function () {
                if ($availableLanguageKeys.length > 0) {
                    return $availableLanguageKeys;
                }
                return null;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translate#getTranslationTable
             * @methodOf pascalprecht.translate.$translate
             *
             * @description
             * Returns translation table by the given language key.
             *
             * Unless a language is provided it returns a translation table of the current one.
             * Note: If translation dictionary is currently downloading or in progress
             * it will return null.
             *
             * @param {string} langKey A token which represents a translation id
             *
             * @return {object} a copy of angular-translate $translationTable
             */
            $translate.getTranslationTable = function (langKey) {
                langKey = langKey || $translate.use();
                if (langKey && $translationTable[langKey]) {
                    return angular.copy($translationTable[langKey]);
                }
                return null;
            };

            // Whenever $translateReady is being fired, this will ensure the state of $isReady
            var globalOnReadyListener = $rootScope.$on('$translateReady', function () {
                $onReadyDeferred.resolve();
                globalOnReadyListener(); // one time only
                globalOnReadyListener = null;
            });
            var globalOnChangeListener = $rootScope.$on('$translateChangeEnd', function () {
                $onReadyDeferred.resolve();
                globalOnChangeListener(); // one time only
                globalOnChangeListener = null;
            });

            if ($loaderFactory) {

                // If at least one async loader is defined and there are no
                // (default) translations available we should try to load them.
                if (angular.equals($translationTable, {})) {
                    if ($translate.use()) {
                        $translate.use($translate.use());
                    }
                }

                // Also, if there are any fallback language registered, we start
                // loading them asynchronously as soon as we can.
                if ($fallbackLanguage && $fallbackLanguage.length) {
                    var processAsyncResult = function (translation) {
                        translations(translation.key, translation.table);
                        $rootScope.$emit('$translateChangeEnd', { language: translation.key });
                        return translation;
                    };
                    for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
                        var fallbackLanguageId = $fallbackLanguage[i];
                        if ($forceAsyncReloadEnabled || !$translationTable[fallbackLanguageId]) {
                            langPromises[fallbackLanguageId] = loadAsync(fallbackLanguageId).then(processAsyncResult);
                        }
                    }
                }
            } else {
                $rootScope.$emit('$translateReady', { language: $translate.use() });
            }

            return $translate;
        }];
    }

    $translate.displayName = 'displayName';

    /**
     * @ngdoc object
     * @name pascalprecht.translate.$translateDefaultInterpolation
     * @requires $interpolate
     *
     * @description
     * Uses angular's `$interpolate` services to interpolate strings against some values.
     *
     * Be aware to configure a proper sanitization strategy.
     *
     * See also:
     * * {@link pascalprecht.translate.$translateSanitization}
     *
     * @return {object} $translateDefaultInterpolation Interpolator service
     */
    angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', $translateDefaultInterpolation);

    function $translateDefaultInterpolation($interpolate, $translateSanitization) {

        'use strict';

        var $translateInterpolator = {},
            $locale,
            $identifier = 'default';

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateDefaultInterpolation#setLocale
         * @methodOf pascalprecht.translate.$translateDefaultInterpolation
         *
         * @description
         * Sets current locale (this is currently not use in this interpolation).
         *
         * @param {string} locale Language key or locale.
         */
        $translateInterpolator.setLocale = function (locale) {
            $locale = locale;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateDefaultInterpolation#getInterpolationIdentifier
         * @methodOf pascalprecht.translate.$translateDefaultInterpolation
         *
         * @description
         * Returns an identifier for this interpolation service.
         *
         * @returns {string} $identifier
         */
        $translateInterpolator.getInterpolationIdentifier = function () {
            return $identifier;
        };

        /**
         * @deprecated will be removed in 3.0
         * @see {@link pascalprecht.translate.$translateSanitization}
         */
        $translateInterpolator.useSanitizeValueStrategy = function (value) {
            $translateSanitization.useStrategy(value);
            return this;
        };

        /**
         * @ngdoc function
         * @name pascalprecht.translate.$translateDefaultInterpolation#interpolate
         * @methodOf pascalprecht.translate.$translateDefaultInterpolation
         *
         * @description
         * Interpolates given value agains given interpolate params using angulars
         * `$interpolate` service.
         *
         * Since AngularJS 1.5, `value` must not be a string but can be anything input.
         *
         * @param {string} value translation
         * @param {object} [interpolationParams={}] interpolation params
         * @param {string} [context=undefined] current context (filter, directive, service)
         * @param {string} [sanitizeStrategy=undefined] sanitize strategy (use default unless set)
         * @param {string} translationId current translationId
         *
         * @returns {string} interpolated string
         */
        $translateInterpolator.interpolate = function (value, interpolationParams, context, sanitizeStrategy, translationId) { // jshint ignore:line
            interpolationParams = interpolationParams || {};
            interpolationParams = $translateSanitization.sanitize(interpolationParams, 'params', sanitizeStrategy, context);

            var interpolatedText;
            if (angular.isNumber(value)) {
                // numbers are safe
                interpolatedText = '' + value;
            } else if (angular.isString(value)) {
                // strings must be interpolated (that's the job here)
                interpolatedText = $interpolate(value)(interpolationParams);
                interpolatedText = $translateSanitization.sanitize(interpolatedText, 'text', sanitizeStrategy, context);
            } else {
                // neither a number or a string, cant interpolate => empty string
                interpolatedText = '';
            }

            return interpolatedText;
        };

        return $translateInterpolator;
    }

    $translateDefaultInterpolation.displayName = '$translateDefaultInterpolation';

    angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY');

    angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translate
         * @requires $interpolate,
         * @requires $compile,
         * @requires $parse,
         * @requires $rootScope
         * @restrict AE
         *
         * @description
         * Translates given translation id either through attribute or DOM content.
         * Internally it uses $translate service to translate the translation id. It possible to
         * pass an optional `translate-values` object literal as string into translation id.
         *
         * @param {string=} translate Translation id which could be either string or interpolated string.
         * @param {string=} translate-values Values to pass into translation id. Can be passed as object literal string or interpolated object.
         * @param {string=} translate-attr-ATTR translate Translation id and put it into ATTR attribute.
         * @param {string=} translate-default will be used unless translation was successful
         * @param {string=} translate-sanitize-strategy defines locally sanitize strategy
         * @param {boolean=} translate-compile (default true if present) defines locally activation of {@link pascalprecht.translate.$translateProvider#methods_usePostCompiling}
         * @param {boolean=} translate-keep-content (default true if present) defines that in case a KEY could not be translated, that the existing content is left in the innerHTML}
         *
         * @example
           <example module="ngView">
            <file name="index.html">
              <div ng-controller="TranslateCtrl">
                <pre translate="TRANSLATION_ID"></pre>
                <pre translate>TRANSLATION_ID</pre>
                <pre translate translate-attr-title="TRANSLATION_ID"></pre>
                <pre translate="{{translationId}}"></pre>
                <pre translate>{{translationId}}</pre>
                <pre translate="WITH_VALUES" translate-values="{value: 5}"></pre>
                <pre translate translate-values="{value: 5}">WITH_VALUES</pre>
                <pre translate="WITH_VALUES" translate-values="{{values}}"></pre>
                <pre translate translate-values="{{values}}">WITH_VALUES</pre>
                <pre translate translate-attr-title="WITH_VALUES" translate-values="{{values}}"></pre>
                <pre translate="WITH_CAMEL_CASE_KEY" translate-value-camel-case-key="Hi"></pre>
              </div>
            </file>
            <file name="script.js">
              angular.module('ngView', ['pascalprecht.translate'])
              .config(function ($translateProvider) {
                $translateProvider.translations('en',{
                  'TRANSLATION_ID': 'Hello there!',
                  'WITH_VALUES': 'The following value is dynamic: {{value}}',
                  'WITH_CAMEL_CASE_KEY': 'The interpolation key is camel cased: {{camelCaseKey}}'
                }).preferredLanguage('en');
              });
              angular.module('ngView').controller('TranslateCtrl', function ($scope) {
                $scope.translationId = 'TRANSLATION_ID';
                $scope.values = {
                  value: 78
                };
              });
            </file>
            <file name="scenario.js">
              it('should translate', function () {
                inject(function ($rootScope, $compile) {
                  $rootScope.translationId = 'TRANSLATION_ID';
                  element = $compile('<p translate="TRANSLATION_ID"></p>')($rootScope);
                  $rootScope.$digest();
                  expect(element.text()).toBe('Hello there!');
                  element = $compile('<p translate="{{translationId}}"></p>')($rootScope);
                  $rootScope.$digest();
                  expect(element.text()).toBe('Hello there!');
                  element = $compile('<p translate>TRANSLATION_ID</p>')($rootScope);
                  $rootScope.$digest();
                  expect(element.text()).toBe('Hello there!');
                  element = $compile('<p translate>{{translationId}}</p>')($rootScope);
                  $rootScope.$digest();
                  expect(element.text()).toBe('Hello there!');
                  element = $compile('<p translate translate-attr-title="TRANSLATION_ID"></p>')($rootScope);
                  $rootScope.$digest();
                  expect(element.attr('title')).toBe('Hello there!');
                  element = $compile('<p translate="WITH_CAMEL_CASE_KEY" translate-value-camel-case-key="Hello"></p>')($rootScope);
                  $rootScope.$digest();
                  expect(element.text()).toBe('The interpolation key is camel cased: Hello');
                });
              });
            </file>
           </example>
         */
        .directive('translate', translateDirective);
    function translateDirective($translate, $interpolate, $compile, $parse, $rootScope) {

        'use strict';

        /**
         * @name trim
         * @private
         *
         * @description
         * trim polyfill
         *
         * @returns {string} The string stripped of whitespace from both ends
         */
        var trim = function () {
            return this.toString().replace(/^\s+|\s+$/g, '');
        };

        /**
         * @name lowercase
         * @private
         *
         * @description
         * Return the lowercase string only if the type is string
         *
         * @returns {string} The string all in lowercase
         */
        var lowercase = function (string) {
            return angular.isString(string) ? string.toLowerCase() : string;
        };

        return {
            restrict: 'AE',
            scope: true,
            priority: $translate.directivePriority(),
            compile: function (tElement, tAttr) {

                var translateValuesExist = (tAttr.translateValues) ?
                    tAttr.translateValues : undefined;

                var translateInterpolation = (tAttr.translateInterpolation) ?
                    tAttr.translateInterpolation : undefined;

                var translateSanitizeStrategyExist = (tAttr.translateSanitizeStrategy) ?
                    tAttr.translateSanitizeStrategy : undefined;

                var translateValueExist = tElement[0].outerHTML.match(/translate-value-+/i);

                var interpolateRegExp = '^(.*)(' + $interpolate.startSymbol() + '.*' + $interpolate.endSymbol() + ')(.*)',
                    watcherRegExp = '^(.*)' + $interpolate.startSymbol() + '(.*)' + $interpolate.endSymbol() + '(.*)';

                return function linkFn(scope, iElement, iAttr) {

                    scope.interpolateParams = {};
                    scope.preText = '';
                    scope.postText = '';
                    scope.translateNamespace = getTranslateNamespace(scope);
                    var translationIds = {};

                    var initInterpolationParams = function (interpolateParams, iAttr, tAttr) {
                        // initial setup
                        if (iAttr.translateValues) {
                            angular.extend(interpolateParams, $parse(iAttr.translateValues)(scope.$parent));
                        }
                        // initially fetch all attributes if existing and fill the params
                        if (translateValueExist) {
                            for (var attr in tAttr) {
                                if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
                                    var attributeName = lowercase(attr.substr(14, 1)) + attr.substr(15);
                                    interpolateParams[attributeName] = tAttr[attr];
                                }
                            }
                        }
                    };

                    // Ensures any change of the attribute "translate" containing the id will
                    // be re-stored to the scope's "translationId".
                    // If the attribute has no content, the element's text value (white spaces trimmed off) will be used.
                    var observeElementTranslation = function (translationId) {

                        // Remove any old watcher
                        if (angular.isFunction(observeElementTranslation._unwatchOld)) {
                            observeElementTranslation._unwatchOld();
                            observeElementTranslation._unwatchOld = undefined;
                        }

                        if (angular.equals(translationId, '') || !angular.isDefined(translationId)) {
                            var iElementText = trim.apply(iElement.text());

                            // Resolve translation id by inner html if required
                            var interpolateMatches = iElementText.match(interpolateRegExp);
                            // Interpolate translation id if required
                            if (angular.isArray(interpolateMatches)) {
                                scope.preText = interpolateMatches[1];
                                scope.postText = interpolateMatches[3];
                                translationIds.translate = $interpolate(interpolateMatches[2])(scope.$parent);
                                var watcherMatches = iElementText.match(watcherRegExp);
                                if (angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length) {
                                    observeElementTranslation._unwatchOld = scope.$watch(watcherMatches[2], function (newValue) {
                                        translationIds.translate = newValue;
                                        updateTranslations();
                                    });
                                }
                            } else {
                                // do not assigne the translation id if it is empty.
                                translationIds.translate = !iElementText ? undefined : iElementText;
                            }
                        } else {
                            translationIds.translate = translationId;
                        }
                        updateTranslations();
                    };

                    var observeAttributeTranslation = function (translateAttr) {
                        iAttr.$observe(translateAttr, function (translationId) {
                            translationIds[translateAttr] = translationId;
                            updateTranslations();
                        });
                    };

                    // initial setup with values
                    initInterpolationParams(scope.interpolateParams, iAttr, tAttr);

                    var firstAttributeChangedEvent = true;
                    iAttr.$observe('translate', function (translationId) {
                        if (typeof translationId === 'undefined') {
                            // case of element "<translate>xyz</translate>"
                            observeElementTranslation('');
                        } else {
                            // case of regular attribute
                            if (translationId !== '' || !firstAttributeChangedEvent) {
                                translationIds.translate = translationId;
                                updateTranslations();
                            }
                        }
                        firstAttributeChangedEvent = false;
                    });

                    for (var translateAttr in iAttr) {
                        if (iAttr.hasOwnProperty(translateAttr) && translateAttr.substr(0, 13) === 'translateAttr' && translateAttr.length > 13) {
                            observeAttributeTranslation(translateAttr);
                        }
                    }

                    iAttr.$observe('translateDefault', function (value) {
                        scope.defaultText = value;
                        updateTranslations();
                    });

                    if (translateSanitizeStrategyExist) {
                        iAttr.$observe('translateSanitizeStrategy', function (value) {
                            scope.sanitizeStrategy = $parse(value)(scope.$parent);
                            updateTranslations();
                        });
                    }

                    if (translateValuesExist) {
                        iAttr.$observe('translateValues', function (interpolateParams) {
                            if (interpolateParams) {
                                scope.$parent.$watch(function () {
                                    angular.extend(scope.interpolateParams, $parse(interpolateParams)(scope.$parent));
                                });
                            }
                        });
                    }

                    if (translateValueExist) {
                        var observeValueAttribute = function (attrName) {
                            iAttr.$observe(attrName, function (value) {
                                var attributeName = lowercase(attrName.substr(14, 1)) + attrName.substr(15);
                                scope.interpolateParams[attributeName] = value;
                            });
                        };
                        for (var attr in iAttr) {
                            if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
                                observeValueAttribute(attr);
                            }
                        }
                    }

                    // Master update function
                    var updateTranslations = function () {
                        for (var key in translationIds) {
                            if (translationIds.hasOwnProperty(key) && translationIds[key] !== undefined) {
                                updateTranslation(key, translationIds[key], scope, scope.interpolateParams, scope.defaultText, scope.translateNamespace);
                            }
                        }
                    };

                    // Put translation processing function outside loop
                    var updateTranslation = function (translateAttr, translationId, scope, interpolateParams, defaultTranslationText, translateNamespace) {
                        if (translationId) {
                            // if translation id starts with '.' and translateNamespace given, prepend namespace
                            if (translateNamespace && translationId.charAt(0) === '.') {
                                translationId = translateNamespace + translationId;
                            }

                            $translate(translationId, interpolateParams, translateInterpolation, defaultTranslationText, scope.translateLanguage, scope.sanitizeStrategy)
                                .then(function (translation) {
                                    applyTranslation(translation, scope, true, translateAttr);
                                }, function (translationId) {
                                    applyTranslation(translationId, scope, false, translateAttr);
                                });
                        } else {
                            // as an empty string cannot be translated, we can solve this using successful=false
                            applyTranslation(translationId, scope, false, translateAttr);
                        }
                    };

                    var applyTranslation = function (value, scope, successful, translateAttr) {
                        if (!successful) {
                            if (typeof scope.defaultText !== 'undefined') {
                                value = scope.defaultText;
                            }
                        }
                        if (translateAttr === 'translate') {
                            // default translate into innerHTML
                            if (successful || (!successful && !$translate.isKeepContent() && typeof iAttr.translateKeepContent === 'undefined')) {
                                iElement.empty().append(scope.preText + value + scope.postText);
                            }
                            var globallyEnabled = $translate.isPostCompilingEnabled();
                            var locallyDefined = typeof tAttr.translateCompile !== 'undefined';
                            var locallyEnabled = locallyDefined && tAttr.translateCompile !== 'false';
                            if ((globallyEnabled && !locallyDefined) || locallyEnabled) {
                                $compile(iElement.contents())(scope);
                            }
                        } else {
                            // translate attribute
                            var attributeName = iAttr.$attr[translateAttr];
                            if (attributeName.substr(0, 5) === 'data-') {
                                // ensure html5 data prefix is stripped
                                attributeName = attributeName.substr(5);
                            }
                            attributeName = attributeName.substr(15);
                            iElement.attr(attributeName, value);
                        }
                    };

                    if (translateValuesExist || translateValueExist || iAttr.translateDefault) {
                        scope.$watch('interpolateParams', updateTranslations, true);
                    }

                    // Replaced watcher on translateLanguage with event listener
                    scope.$on('translateLanguageChanged', updateTranslations);

                    // Ensures the text will be refreshed after the current language was changed
                    // w/ $translate.use(...)
                    var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);

                    // ensure translation will be looked up at least one
                    if (iElement.text().length) {
                        if (iAttr.translate) {
                            observeElementTranslation(iAttr.translate);
                        } else {
                            observeElementTranslation('');
                        }
                    } else if (iAttr.translate) {
                        // ensure attribute will be not skipped
                        observeElementTranslation(iAttr.translate);
                    }
                    updateTranslations();
                    scope.$on('$destroy', unbind);
                };
            }
        };
    }

    /**
     * Returns the scope's namespace.
     * @private
     * @param scope
     * @returns {string}
     */
    function getTranslateNamespace(scope) {
        'use strict';
        if (scope.translateNamespace) {
            return scope.translateNamespace;
        }
        if (scope.$parent) {
            return getTranslateNamespace(scope.$parent);
        }
    }

    translateDirective.displayName = 'translateDirective';

    angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translate-attr
         * @restrict A
         *
         * @description
         * Translates attributes like translate-attr-ATTR, but with an object like ng-class.
         * Internally it uses `translate` service to translate translation id. It possible to
         * pass an optional `translate-values` object literal as string into translation id.
         *
         * @param {string=} translate-attr Object literal mapping attributes to translation ids.
         * @param {string=} translate-values Values to pass into the translation ids. Can be passed as object literal string.
         * @param {string=} translate-sanitize-strategy defines locally sanitize strategy
         *
         * @example
           <example module="ngView">
            <file name="index.html">
              <div ng-controller="TranslateCtrl">
                <input translate-attr="{ placeholder: translationId, title: 'WITH_VALUES' }" translate-values="{value: 5}" />
              </div>
            </file>
            <file name="script.js">
              angular.module('ngView', ['pascalprecht.translate'])
              .config(function ($translateProvider) {
                $translateProvider.translations('en',{
                  'TRANSLATION_ID': 'Hello there!',
                  'WITH_VALUES': 'The following value is dynamic: {{value}}',
                }).preferredLanguage('en');
              });
              angular.module('ngView').controller('TranslateCtrl', function ($scope) {
                $scope.translationId = 'TRANSLATION_ID';
                $scope.values = {
                  value: 78
                };
              });
            </file>
            <file name="scenario.js">
              it('should translate', function () {
                inject(function ($rootScope, $compile) {
                  $rootScope.translationId = 'TRANSLATION_ID';
                  element = $compile('<input translate-attr="{ placeholder: translationId, title: 'WITH_VALUES' }" translate-values="{ value: 5 }" />')($rootScope);
                  $rootScope.$digest();
                  expect(element.attr('placeholder)).toBe('Hello there!');
                  expect(element.attr('title)).toBe('The following value is dynamic: 5');
                });
              });
            </file>
           </example>
         */
        .directive('translateAttr', translateAttrDirective);
    function translateAttrDirective($translate, $rootScope) {

        'use strict';

        return {
            restrict: 'A',
            priority: $translate.directivePriority(),
            link: function linkFn(scope, element, attr) {

                var translateAttr,
                    translateValues,
                    translateSanitizeStrategy,
                    previousAttributes = {};

                // Main update translations function
                var updateTranslations = function () {
                    angular.forEach(translateAttr, function (translationId, attributeName) {
                        if (!translationId) {
                            return;
                        }
                        previousAttributes[attributeName] = true;

                        // if translation id starts with '.' and translateNamespace given, prepend namespace
                        if (scope.translateNamespace && translationId.charAt(0) === '.') {
                            translationId = scope.translateNamespace + translationId;
                        }
                        $translate(translationId, translateValues, attr.translateInterpolation, undefined, scope.translateLanguage, translateSanitizeStrategy)
                            .then(function (translation) {
                                element.attr(attributeName, translation);
                            }, function (translationId) {
                                element.attr(attributeName, translationId);
                            });
                    });

                    // Removing unused attributes that were previously used
                    angular.forEach(previousAttributes, function (flag, attributeName) {
                        if (!translateAttr[attributeName]) {
                            element.removeAttr(attributeName);
                            delete previousAttributes[attributeName];
                        }
                    });
                };

                // Watch for attribute changes
                watchAttribute(
                    scope,
                    attr.translateAttr,
                    function (newValue) { translateAttr = newValue; },
                    updateTranslations
                );
                // Watch for value changes
                watchAttribute(
                    scope,
                    attr.translateValues,
                    function (newValue) { translateValues = newValue; },
                    updateTranslations
                );
                // Watch for sanitize strategy changes
                watchAttribute(
                    scope,
                    attr.translateSanitizeStrategy,
                    function (newValue) { translateSanitizeStrategy = newValue; },
                    updateTranslations
                );

                if (attr.translateValues) {
                    scope.$watch(attr.translateValues, updateTranslations, true);
                }

                // Replaced watcher on translateLanguage with event listener
                scope.$on('translateLanguageChanged', updateTranslations);

                // Ensures the text will be refreshed after the current language was changed
                // w/ $translate.use(...)
                var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);

                updateTranslations();
                scope.$on('$destroy', unbind);
            }
        };
    }

    function watchAttribute(scope, attribute, valueCallback, changeCallback) {
        'use strict';
        if (!attribute) {
            return;
        }
        if (attribute.substr(0, 2) === '::') {
            attribute = attribute.substr(2);
        } else {
            scope.$watch(attribute, function (newValue) {
                valueCallback(newValue);
                changeCallback();
            }, true);
        }
        valueCallback(scope.$eval(attribute));
    }

    translateAttrDirective.displayName = 'translateAttrDirective';

    angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translateCloak
         * @requires $translate
         * @restrict A
         *
         * $description
         * Adds a `translate-cloak` class name to the given element where this directive
         * is applied initially and removes it, once a loader has finished loading.
         *
         * This directive can be used to prevent initial flickering when loading translation
         * data asynchronously.
         *
         * The class name is defined in
         * {@link pascalprecht.translate.$translateProvider#cloakClassName $translate.cloakClassName()}.
         *
         * @param {string=} translate-cloak If a translationId is provided, it will be used for showing
         *                                  or hiding the cloak. Basically it relies on the translation
         *                                  resolve.
         */
        .directive('translateCloak', translateCloakDirective);

    function translateCloakDirective($translate, $rootScope) {

        'use strict';

        return {
            compile: function (tElement) {
                var applyCloak = function (element) {
                    element.addClass($translate.cloakClassName());
                },
                    removeCloak = function (element) {
                        element.removeClass($translate.cloakClassName());
                    };
                applyCloak(tElement);

                return function linkFn(scope, iElement, iAttr) {
                    //Create bound functions that incorporate the active DOM element.
                    var iRemoveCloak = removeCloak.bind(this, iElement), iApplyCloak = applyCloak.bind(this, iElement);
                    if (iAttr.translateCloak && iAttr.translateCloak.length) {
                        // Register a watcher for the defined translation allowing a fine tuned cloak
                        iAttr.$observe('translateCloak', function (translationId) {
                            $translate(translationId).then(iRemoveCloak, iApplyCloak);
                        });
                        $rootScope.$on('$translateChangeSuccess', function () {
                            $translate(iAttr.translateCloak).then(iRemoveCloak, iApplyCloak);
                        });
                    } else {
                        $translate.onReady(iRemoveCloak);
                    }
                };
            }
        };
    }

    translateCloakDirective.displayName = 'translateCloakDirective';

    angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translateNamespace
         * @restrict A
         *
         * @description
         * Translates given translation id either through attribute or DOM content.
         * Internally it uses `translate` filter to translate translation id. It is possible to
         * pass an optional `translate-values` object literal as string into translation id.
         *
         * @param {string=} translate namespace name which could be either string or interpolated string.
         *
         * @example
           <example module="ngView">
            <file name="index.html">
              <div translate-namespace="CONTENT">
                <div>
                    <h1 translate>.HEADERS.TITLE</h1>
                    <h1 translate>.HEADERS.WELCOME</h1>
                </div>
                <div translate-namespace=".HEADERS">
                    <h1 translate>.TITLE</h1>
                    <h1 translate>.WELCOME</h1>
                </div>
              </div>
            </file>
            <file name="script.js">
              angular.module('ngView', ['pascalprecht.translate'])
              .config(function ($translateProvider) {
                $translateProvider.translations('en',{
                  'TRANSLATION_ID': 'Hello there!',
                  'CONTENT': {
                    'HEADERS': {
                        TITLE: 'Title'
                    }
                  },
                  'CONTENT.HEADERS.WELCOME': 'Welcome'
                }).preferredLanguage('en');
              });
            </file>
           </example>
         */
        .directive('translateNamespace', translateNamespaceDirective);

    function translateNamespaceDirective() {

        'use strict';

        return {
            restrict: 'A',
            scope: true,
            compile: function () {
                return {
                    pre: function (scope, iElement, iAttrs) {
                        scope.translateNamespace = _getTranslateNamespace(scope);

                        if (scope.translateNamespace && iAttrs.translateNamespace.charAt(0) === '.') {
                            scope.translateNamespace += iAttrs.translateNamespace;
                        } else {
                            scope.translateNamespace = iAttrs.translateNamespace;
                        }
                    }
                };
            }
        };
    }

    /**
     * Returns the scope's namespace.
     * @private
     * @param scope
     * @returns {string}
     */
    function _getTranslateNamespace(scope) {
        'use strict';
        if (scope.translateNamespace) {
            return scope.translateNamespace;
        }
        if (scope.$parent) {
            return _getTranslateNamespace(scope.$parent);
        }
    }

    translateNamespaceDirective.displayName = 'translateNamespaceDirective';

    angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translateLanguage
         * @restrict A
         *
         * @description
         * Forces the language to the directives in the underlying scope.
         *
         * @param {string=} translate language that will be negotiated.
         *
         * @example
           <example module="ngView">
            <file name="index.html">
              <div>
                <div>
                    <h1 translate>HELLO</h1>
                </div>
                <div translate-language="de">
                    <h1 translate>HELLO</h1>
                </div>
              </div>
            </file>
            <file name="script.js">
              angular.module('ngView', ['pascalprecht.translate'])
              .config(function ($translateProvider) {
                $translateProvider
                  .translations('en',{
                    'HELLO': 'Hello world!'
                  })
                  .translations('de',{
                    'HELLO': 'Hallo Welt!'
                  })
                  .preferredLanguage('en');
              });
            </file>
           </example>
         */
        .directive('translateLanguage', translateLanguageDirective);

    function translateLanguageDirective() {

        'use strict';

        return {
            restrict: 'A',
            scope: true,
            compile: function () {
                return function linkFn(scope, iElement, iAttrs) {

                    iAttrs.$observe('translateLanguage', function (newTranslateLanguage) {
                        scope.translateLanguage = newTranslateLanguage;
                    });

                    scope.$watch('translateLanguage', function () {
                        scope.$broadcast('translateLanguageChanged');
                    });
                };
            }
        };
    }

    translateLanguageDirective.displayName = 'translateLanguageDirective';

    angular.module('pascalprecht.translate')
        /**
         * @ngdoc filter
         * @name pascalprecht.translate.filter:translate
         * @requires $parse
         * @requires pascalprecht.translate.$translate
         * @function
         *
         * @description
         * Uses `$translate` service to translate contents. Accepts interpolate parameters
         * to pass dynamized values though translation.
         *
         * @param {string} translationId A translation id to be translated.
         * @param {*=} interpolateParams Optional object literal (as hash or string) to pass values into translation.
         *
         * @returns {string} Translated text.
         *
         * @example
           <example module="ngView">
            <file name="index.html">
              <div ng-controller="TranslateCtrl">
                <pre>{{ 'TRANSLATION_ID' | translate }}</pre>
                <pre>{{ translationId | translate }}</pre>
                <pre>{{ 'WITH_VALUES' | translate:'{value: 5}' }}</pre>
                <pre>{{ 'WITH_VALUES' | translate:values }}</pre>
              </div>
            </file>
            <file name="script.js">
              angular.module('ngView', ['pascalprecht.translate'])
              .config(function ($translateProvider) {
                $translateProvider.translations('en', {
                  'TRANSLATION_ID': 'Hello there!',
                  'WITH_VALUES': 'The following value is dynamic: {{value}}'
                });
                $translateProvider.preferredLanguage('en');
              });
              angular.module('ngView').controller('TranslateCtrl', function ($scope) {
                $scope.translationId = 'TRANSLATION_ID';
                $scope.values = {
                  value: 78
                };
              });
            </file>
           </example>
         */
        .filter('translate', translateFilterFactory);

    function translateFilterFactory($parse, $translate) {

        'use strict';

        var translateFilter = function (translationId, interpolateParams, interpolation, forceLanguage) {
            if (!angular.isObject(interpolateParams)) {
                var ctx = this || {
                    '__SCOPE_IS_NOT_AVAILABLE': 'More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f'
                };
                interpolateParams = $parse(interpolateParams)(ctx);
            }

            return $translate.instant(translationId, interpolateParams, interpolation, forceLanguage);
        };

        if ($translate.statefulFilter()) {
            translateFilter.$stateful = true;
        }

        return translateFilter;
    }

    translateFilterFactory.displayName = 'translateFilterFactory';

    angular.module('pascalprecht.translate')

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translationCache
         * @requires $cacheFactory
         *
         * @description
         * The first time a translation table is used, it is loaded in the translation cache for quick retrieval. You
         * can load translation tables directly into the cache by consuming the
         * `$translationCache` service directly.
         *
         * @return {object} $cacheFactory object.
         */
        .factory('$translationCache', $translationCache);

    function $translationCache($cacheFactory) {

        'use strict';

        return $cacheFactory('translations');
    }

    $translationCache.displayName = '$translationCache';
    return 'pascalprecht.translate';

}));
/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

$translateCookieStorageFactory.$inject = ['$injector'];
angular.module('pascalprecht.translate')

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateCookieStorage
 * @requires $cookieStore
 *
 * @description
 * Abstraction layer for cookieStore. This service is used when telling angular-translate
 * to use cookieStore as storage.
 *
 */
  .factory('$translateCookieStorage', $translateCookieStorageFactory);

function $translateCookieStorageFactory($injector) {

  'use strict';

  // Since AngularJS 1.4, $cookieStore is deprecated
  var delegate;
  if (angular.version.major === 1 && angular.version.minor >= 4) {
    var $cookies = $injector.get('$cookies');
    delegate = {
      get : function (key) {
        return $cookies.get(key);
      },
      put : function (key, value) {
        $cookies.put(key, value);
      }
    };
  } else {
    var $cookieStore = $injector.get('$cookieStore');
    delegate = {
      get : function (key) {
        return $cookieStore.get(key);
      },
      put : function (key, value) {
        $cookieStore.put(key, value);
      }
    };
  }

  var $translateCookieStorage = {

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translateCookieStorage#get
     * @methodOf pascalprecht.translate.$translateCookieStorage
     *
     * @description
     * Returns an item from cookieStorage by given name.
     *
     * @param {string} name Item name
     * @return {string} Value of item name
     */
    get : function (name) {
      return delegate.get(name);
    },

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translateCookieStorage#set
     * @methodOf pascalprecht.translate.$translateCookieStorage
     *
     * @description
     * Sets an item in cookieStorage by given name.
     *
     * @deprecated use #put
     *
     * @param {string} name Item name
     * @param {string} value Item value
     */
    set : function (name, value) {
      delegate.put(name, value);
    },

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translateCookieStorage#put
     * @methodOf pascalprecht.translate.$translateCookieStorage
     *
     * @description
     * Sets an item in cookieStorage by given name.
     *
     * @param {string} name Item name
     * @param {string} value Item value
     */
    put : function (name, value) {
      delegate.put(name, value);
    }
  };

  return $translateCookieStorage;
}

$translateCookieStorageFactory.displayName = '$translateCookieStorage';
return 'pascalprecht.translate';

}));

/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

$translateStaticFilesLoader.$inject = ['$q', '$http'];
angular.module('pascalprecht.translate')
/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateStaticFilesLoader
 * @requires $q
 * @requires $http
 *
 * @description
 * Creates a loading function for a typical static file url pattern:
 * "lang-en_US.json", "lang-de_DE.json", etc. Using this builder,
 * the response of these urls must be an object of key-value pairs.
 *
 * @param {object} options Options object, which gets prefix, suffix, key, and fileMap
 */
.factory('$translateStaticFilesLoader', $translateStaticFilesLoader);

function $translateStaticFilesLoader($q, $http) {

  'use strict';

  return function (options) {

    if (!options || (!angular.isArray(options.files) && (!angular.isString(options.prefix) || !angular.isString(options.suffix)))) {
      throw new Error('Couldn\'t load static files, no files and prefix or suffix specified!');
    }

    if (!options.files) {
      options.files = [{
        prefix: options.prefix,
        suffix: options.suffix
      }];
    }

    var load = function (file) {
      if (!file || (!angular.isString(file.prefix) || !angular.isString(file.suffix))) {
        throw new Error('Couldn\'t load static file, no prefix or suffix specified!');
      }

      var fileUrl = [
        file.prefix,
        options.key,
        file.suffix
      ].join('');

      if (angular.isObject(options.fileMap) && options.fileMap[fileUrl]) {
        fileUrl = options.fileMap[fileUrl];
      }

      return $http(angular.extend({
        url: fileUrl,
        method: 'GET'
      }, options.$http))
        .then(function(result) {
          return result.data;
        }, function () {
          return $q.reject(options.key);
        });
    };

    var promises = [],
        length = options.files.length;

    for (var i = 0; i < length; i++) {
      promises.push(load({
        prefix: options.files[i].prefix,
        key: options.key,
        suffix: options.files[i].suffix
      }));
    }

    return $q.all(promises)
      .then(function (data) {
        var length = data.length,
            mergedData = {};

        for (var i = 0; i < length; i++) {
          for (var key in data[i]) {
            mergedData[key] = data[i][key];
          }
        }

        return mergedData;
      });
  };
}

$translateStaticFilesLoader.displayName = '$translateStaticFilesLoader';
return 'pascalprecht.translate';

}));

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,c){'use strict';function P(c){var h=[];C(h,E).chars(c);return h.join("")}var D=c.$$minErr("$sanitize"),F,h,G,H,I,q,E,J,K,C;c.module("ngSanitize",[]).provider("$sanitize",function(){function f(a,e){return B(a.split(","),e)}function B(a,e){var d={},b;for(b=0;b<a.length;b++)d[e?q(a[b]):a[b]]=!0;return d}function t(a,e){e&&e.length&&h(a,B(e))}function Q(a){for(var e={},d=0,b=a.length;d<b;d++){var k=a[d];e[k.name]=k.value}return e}function L(a){return a.replace(/&/g,"&amp;").replace(z,function(a){var d=
a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,d=0,b=e.length;d<b;d++){var k=e[d],g=k.name.toLowerCase();if("xmlns:ns1"===g||0===g.lastIndexOf("ns1:",0))a.removeAttributeNode(k),d--,b--}(e=a.firstChild)&&A(e);a=v("nextSibling",a)}}function v(a,e){var d=e[a];if(d&&J.call(e,d))throw D("elclob",
e.outerHTML||e.outerText);return d}var y=!1,g=!1;this.$get=["$$sanitizeUri",function(a){y=!0;g&&h(m,l);return function(e){var d=[];K(e,C(d,function(b,d){return!/^unsafe:/.test(a(b,d))}));return d.join("")}}];this.enableSvg=function(a){return I(a)?(g=a,this):g};this.addValidElements=function(a){y||(H(a)&&(a={htmlElements:a}),t(l,a.svgElements),t(r,a.htmlVoidElements),t(m,a.htmlVoidElements),t(m,a.htmlElements));return this};this.addValidAttrs=function(a){y||h(M,B(a,!0));return this};F=c.bind;h=c.extend;
G=c.forEach;H=c.isArray;I=c.isDefined;q=c.$$lowercase;E=c.noop;K=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);var d=N(a);if(!d)return"";var b=5;do{if(0===b)throw D("uinput");b--;a=d.innerHTML;d=N(a)}while(a!==d.innerHTML);for(b=d.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),Q(b.attributes));break;case 3:e.chars(b.textContent)}var k;if(!(k=b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),k=v("nextSibling",b),!k))for(;null==k;){b=
v("parentNode",b);if(b===d)break;k=v("nextSibling",b);1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=k}for(;b=d.firstChild;)d.removeChild(b)};C=function(a,e){var d=!1,b=F(a,a.push);return{start:function(a,g){a=q(a);!d&&w[a]&&(d=a);d||!0!==m[a]||(b("<"),b(a),G(g,function(d,g){var c=q(g),f="img"===a&&"src"===c||"background"===c;!0!==M[c]||!0===O[c]&&!e(d,f)||(b(" "),b(g),b('="'),b(L(d)),b('"'))}),b(">"))},end:function(a){a=q(a);d||!0!==m[a]||!0===r[a]||(b("</"),b(a),b(">"));a==d&&(d=!1)},chars:function(a){d||
b(L(a))}}};J=s.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)};var z=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^#-~ |!])/g,r=f("area,br,col,hr,img,wbr"),x=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),p=f("rp,rt"),n=h({},p,x),x=h({},x,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),p=h({},p,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
l=f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),w=f("script,style"),m=h({},r,x,p,n),O=f("background,cite,href,longdesc,src,xlink:href,xml:base"),n=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
p=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),M=h({},O,p,n),N=function(a,e){function d(b){b="<remove></remove>"+b;try{var d=(new a.DOMParser).parseFromString(b,"text/html").body;d.firstChild.remove();return d}catch(e){}}function b(a){c.innerHTML=a;e.documentMode&&A(c);return c}var g;if(e&&e.implementation)g=e.implementation.createHTMLDocument("inert");else throw D("noinert");var c=(g.documentElement||g.getDocumentElement()).querySelector("body");c.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';return c.querySelector("svg")?
(c.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',c.querySelector("svg img")?d:b):function(b){b="<remove></remove>"+b;try{b=encodeURI(b)}catch(d){return}var e=new a.XMLHttpRequest;e.responseType="document";e.open("GET","data:text/html;charset=utf-8,"+b,!1);e.send(null);b=e.response.body;b.firstChild.remove();return b}}(s,s.document)}).info({angularVersion:"1.7.8"});c.module("ngSanitize").filter("linky",["$sanitize",function(f){var h=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
t=/^mailto:/i,q=c.$$minErr("linky"),s=c.isDefined,A=c.isFunction,v=c.isObject,y=c.isString;return function(c,z,u){function r(c){c&&l.push(P(c))}function x(c,g){var f,a=p(c);l.push("<a ");for(f in a)l.push(f+'="'+a[f]+'" ');!s(z)||"target"in a||l.push('target="',z,'" ');l.push('href="',c.replace(/"/g,"&quot;"),'">');r(g);l.push("</a>")}if(null==c||""===c)return c;if(!y(c))throw q("notstring",c);for(var p=A(u)?u:v(u)?function(){return u}:function(){return{}},n=c,l=[],w,m;c=n.match(h);)w=c[0],c[2]||
c[4]||(w=(c[3]?"http://":"mailto:")+w),m=c.index,r(n.substr(0,m)),x(w,c[0].replace(t,"")),n=n.substring(m+c[0].length);r(n);return f(l.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof exports === 'object') {
    factory(require('angular'));
    module.exports = 'ngStorage';
  } else {
    // Browser globals (root is window), we don't register it.
    factory(root.angular);
  }
}(this , function (angular) {
    'use strict';

    // In cases where Angular does not get passed or angular is a truthy value
    // but misses .module we can fall back to using window.
    angular = (angular && angular.module ) ? angular : window.angular;


    function isStorageSupported($window, storageType) {

      // Some installations of IE, for an unknown reason, throw "SCRIPT5: Error: Access is denied"
      // when accessing window.localStorage. This happens before you try to do anything with it. Catch
      // that error and allow execution to continue.

      // fix 'SecurityError: DOM Exception 18' exception in Desktop Safari, Mobile Safari
      // when "Block cookies": "Always block" is turned on
      var supported;
      try {
        supported = $window[storageType];
      }
      catch(err) {
        supported = false;
      }

      // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage and sessionStorage
      // is available, but trying to call .setItem throws an exception below:
      // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage that exceeded the quota."
      if(supported) {
        var key = '__' + Math.round(Math.random() * 1e7);
        try {
          $window[storageType].setItem(key, key);
          $window[storageType].removeItem(key, key);
        }
        catch(err) {
          supported = false;
        }
      }

      return supported;
    }

    /**
     * @ngdoc overview
     * @name ngStorage
     */

    return angular.module('ngStorage', [])

    /**
     * @ngdoc object
     * @name ngStorage.$localStorage
     * @requires $rootScope
     * @requires $window
     */

    .provider('$localStorage', _storageProvider('localStorage'))

    /**
     * @ngdoc object
     * @name ngStorage.$sessionStorage
     * @requires $rootScope
     * @requires $window
     */

    .provider('$sessionStorage', _storageProvider('sessionStorage'));

    function _storageProvider(storageType) {
        var providerWebStorage = isStorageSupported(window, storageType);

        return function () {
          var storageKeyPrefix = 'ngStorage-';

          this.setKeyPrefix = function (prefix) {
            if (typeof prefix !== 'string') {
              throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setKeyPrefix() expects a String.');
            }
            storageKeyPrefix = prefix;
          };

          var serializer = angular.toJson;
          var deserializer = angular.fromJson;

          this.setSerializer = function (s) {
            if (typeof s !== 'function') {
              throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setSerializer expects a function.');
            }

            serializer = s;
          };

          this.setDeserializer = function (d) {
            if (typeof d !== 'function') {
              throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setDeserializer expects a function.');
            }

            deserializer = d;
          };

          this.supported = function() {
            return !!providerWebStorage;
          };

          // Note: This is not very elegant at all.
          this.get = function (key) {
            return providerWebStorage && deserializer(providerWebStorage.getItem(storageKeyPrefix + key));
          };

          // Note: This is not very elegant at all.
          this.set = function (key, value) {
            return providerWebStorage && providerWebStorage.setItem(storageKeyPrefix + key, serializer(value));
          };

          this.remove = function (key) {
            providerWebStorage && providerWebStorage.removeItem(storageKeyPrefix + key);
          }

          this.$get = [
              '$rootScope',
              '$window',
              '$log',
              '$timeout',
              '$document',

              function(
                  $rootScope,
                  $window,
                  $log,
                  $timeout,
                  $document
              ){

                // The magic number 10 is used which only works for some keyPrefixes...
                // See https://github.com/gsklee/ngStorage/issues/137
                var prefixLength = storageKeyPrefix.length;

                // #9: Assign a placeholder object if Web Storage is unavailable to prevent breaking the entire AngularJS app
                // Note: recheck mainly for testing (so we can use $window[storageType] rather than window[storageType])
                var isSupported = isStorageSupported($window, storageType),
                    webStorage = isSupported || ($log.warn('This browser does not support Web Storage!'), {setItem: angular.noop, getItem: angular.noop, removeItem: angular.noop}),
                    $storage = {
                        $default: function(items) {
                            for (var k in items) {
                                angular.isDefined($storage[k]) || ($storage[k] = angular.copy(items[k]) );
                            }

                            $storage.$sync();
                            return $storage;
                        },
                        $reset: function(items) {
                            for (var k in $storage) {
                                '$' === k[0] || (delete $storage[k] && webStorage.removeItem(storageKeyPrefix + k));
                            }

                            return $storage.$default(items);
                        },
                        $sync: function () {
                            for (var i = 0, l = webStorage.length, k; i < l; i++) {
                                // #8, #10: `webStorage.key(i)` may be an empty string (or throw an exception in IE9 if `webStorage` is empty)
                                (k = webStorage.key(i)) && storageKeyPrefix === k.slice(0, prefixLength) && ($storage[k.slice(prefixLength)] = deserializer(webStorage.getItem(k)));
                            }
                        },
                        $apply: function() {
                            var temp$storage;

                            _debounce = null;

                            if (!angular.equals($storage, _last$storage)) {
                                temp$storage = angular.copy(_last$storage);
                                angular.forEach($storage, function(v, k) {
                                    if (angular.isDefined(v) && '$' !== k[0]) {
                                        webStorage.setItem(storageKeyPrefix + k, serializer(v));
                                        delete temp$storage[k];
                                    }
                                });

                                for (var k in temp$storage) {
                                    webStorage.removeItem(storageKeyPrefix + k);
                                }

                                _last$storage = angular.copy($storage);
                            }
                        },
                        $supported: function() {
                            return !!isSupported;
                        }
                    },
                    _last$storage,
                    _debounce;

                $storage.$sync();

                _last$storage = angular.copy($storage);

                $rootScope.$watch(function() {
                    _debounce || (_debounce = $timeout($storage.$apply, 100, false));
                });

                // #6: Use `$window.addEventListener` instead of `angular.element` to avoid the jQuery-specific `event.originalEvent`
                $window.addEventListener && $window.addEventListener('storage', function(event) {
                    if (!event.key) {
                      return;
                    }

                    // Reference doc.
                    var doc = $document[0];

                    if ( (!doc.hasFocus || !doc.hasFocus()) && storageKeyPrefix === event.key.slice(0, prefixLength) ) {
                        event.newValue ? $storage[event.key.slice(prefixLength)] = deserializer(event.newValue) : delete $storage[event.key.slice(prefixLength)];

                        _last$storage = angular.copy($storage);

                        $rootScope.$apply();
                    }
                });

                $window.addEventListener && $window.addEventListener('beforeunload', function() {
                    $storage.$apply();
                });

                return $storage;
              }
          ];
      };
    }

}));

/**
 * Bunch of useful filters for angularJS(with no external dependencies!)
 * @version v0.5.17 - 2017-09-22 * @link https://github.com/a8m/angular-filter
 * @author Ariel Mashraki <ariel@mashraki.co.il>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function ( window, angular, undefined ) {
/*jshint globalstrict:true*/
'use strict';

var isDefined = angular.isDefined,
    isUndefined = angular.isUndefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isNumber = angular.isNumber,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy,
    equals = angular.equals;


/**
 * @description
 * get an object and return array of values
 * @param object
 * @returns {Array}
 */
function toArray(object) {
  return isArray(object) 
    ? object 
    : Object.keys(object).map(function(key) {
      return object[key];
    });
}

/**
 * @param value
 * @returns {boolean}
 */
function isNull(value) {
    return value === null;
}

/**
 * @description
 * return if object contains partial object
 * @param partial{object}
 * @param object{object}
 * @returns {boolean}
 */
function objectContains(partial, object) {
  var keys = Object.keys(partial);

  return keys.map(function(el) {
    return (object[el] !== undefined) && (object[el] == partial[el]);
  }).indexOf(false) == -1;

}

/**
 * @description
 * search for approximate pattern in string
 * @param word
 * @param pattern
 * @returns {*}
 */
function hasApproxPattern(word, pattern) {
  // cheaper version of indexOf; instead of creating each
  // iteration new str.
  function indexOf(word, p, c) {
    var j = 0;
    while ((p + j) <= word.length) {
      if (word.charAt(p + j) == c) return j;
      j++;
    }
    return -1;
  }
  var p = 0;
  for (var i = 0; i <= pattern.length; i++) {
    var index = indexOf(word, p, pattern.charAt(i));
    if (index == -1) return false;
    p += index + 1;
  }
  return true
}

/**
 * @description
 * return the first n element of an array,
 * if expression provided, is returns as long the expression return truthy
 * @param array
 * @param n {number}
 * @param expression {$parse}
 * @return array or single object
 */
function getFirstMatches(array, n, expression) {
  var count = 0;

  return array.filter(function(elm) {
    var rest = isDefined(expression) ? (count < n && expression(elm)) : count < n;
    count = rest ? count+1 : count;

    return rest;
  });
}
/**
 * Polyfill to ECMA6 String.prototype.contains
 */
if (!String.prototype.contains) {
  String.prototype.contains = function() {
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

/**
 * @param num {Number}
 * @param decimal {Number}
 * @returns {Number}
 */
function convertToDecimal(num, decimal){
  return Math.round(num * Math.pow(10,decimal)) / (Math.pow(10, decimal));
}

/**
 * @description
 * Get an object, and return an array composed of it's properties names(nested too).
 * @param obj {Object}
 * @param stack {Array}
 * @param parent {String}
 * @returns {Array}
 * @example
 * parseKeys({ a:1, b: { c:2, d: { e: 3 } } }) ==> ["a", "b.c", "b.d.e"]
 */
function deepKeys(obj, stack, parent) {
  stack = stack || [];
  var keys = Object.keys(obj);

  keys.forEach(function(el) {
    //if it's a nested object
    if(isObject(obj[el]) && !isArray(obj[el])) {
      //concatenate the new parent if exist
      var p = parent ? parent + '.' + el : parent;
      deepKeys(obj[el], stack, p || el);
    } else {
      //create and save the key
      var key = parent ? parent + '.' + el : el;
      stack.push(key)
    }
  });
  return stack
}

/**
 * @description
 * Test if given object is a Scope instance
 * @param obj
 * @returns {Boolean}
 */
function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}

/**
 * @ngdoc filter
 * @name a8m.angular
 * @kind function
 *
 * @description
 * reference to angular function
 */

angular.module('a8m.angular', [])

    .filter('isUndefined', function () {
      return function (input) {
        return angular.isUndefined(input);
      }
    })
    .filter('isDefined', function() {
      return function (input) {
        return angular.isDefined(input);
      }
    })
    .filter('isFunction', function() {
      return function (input) {
        return angular.isFunction(input);
      }
    })
    .filter('isString', function() {
      return function (input) {
        return angular.isString(input)
      }
    })
    .filter('isNumber', function() {
      return function (input) {
        return angular.isNumber(input);
      }
    })
    .filter('isArray', function() {
      return function (input) {
        return angular.isArray(input);
      }
    })
    .filter('isObject', function() {
      return function (input) {
        return angular.isObject(input);
      }
    })
    .filter('isEqual', function() {
      return function (o1, o2) {
        return angular.equals(o1, o2);
      }
    });

/**
 * @ngdoc filter
 * @name a8m.conditions
 * @kind function
 *
 * @description
 * reference to math conditions
 */
 angular.module('a8m.conditions', [])

  .filter({
    isGreaterThan  : isGreaterThanFilter,
    '>'            : isGreaterThanFilter,

    isGreaterThanOrEqualTo  : isGreaterThanOrEqualToFilter,
    '>='                    : isGreaterThanOrEqualToFilter,

    isLessThan  : isLessThanFilter,
    '<'         : isLessThanFilter,

    isLessThanOrEqualTo  : isLessThanOrEqualToFilter,
    '<='                 : isLessThanOrEqualToFilter,

    isEqualTo  : isEqualToFilter,
    '=='       : isEqualToFilter,

    isNotEqualTo  : isNotEqualToFilter,
    '!='          : isNotEqualToFilter,

    isIdenticalTo  : isIdenticalToFilter,
    '==='          : isIdenticalToFilter,

    isNotIdenticalTo  : isNotIdenticalToFilter,
    '!=='             : isNotIdenticalToFilter
  });

  function isGreaterThanFilter() {
    return function (input, check) {
      return input > check;
    };
  }

  function isGreaterThanOrEqualToFilter() {
    return function (input, check) {
      return input >= check;
    };
  }

  function isLessThanFilter() {
    return function (input, check) {
      return input < check;
    };
  }

  function isLessThanOrEqualToFilter() {
    return function (input, check) {
      return input <= check;
    };
  }

  function isEqualToFilter() {
    return function (input, check) {
      return input == check;
    };
  }

  function isNotEqualToFilter() {
    return function (input, check) {
      return input != check;
    };
  }

  function isIdenticalToFilter() {
    return function (input, check) {
      return input === check;
    };
  }

  function isNotIdenticalToFilter() {
    return function (input, check) {
      return input !== check;
    };
  }
/**
 * @ngdoc filter
 * @name isNull
 * @kind function
 *
 * @description
 * checks if value is null or not
 * @return Boolean
 */
angular.module('a8m.is-null', [])
    .filter('isNull', function () {
      return function(input) {
        return isNull(input);
      }
    });

/**
 * @ngdoc filter
 * @name after-where
 * @kind function
 *
 * @description
 * get a collection and properties object, and returns all of the items
 * in the collection after the first that found with the given properties.
 *
 */
angular.module('a8m.after-where', [])
    .filter('afterWhere', function() {
      return function (collection, object) {

        collection = isObject(collection)
          ? toArray(collection)
          : collection;

        if(!isArray(collection) || isUndefined(object)) return collection;

        var index = collection.map( function( elm ) {
          return objectContains(object, elm);
        }).indexOf( true );

        return collection.slice((index === -1) ? 0 : index);
      }
    });

/**
 * @ngdoc filter
 * @name after
 * @kind function
 *
 * @description
 * get a collection and specified count, and returns all of the items
 * in the collection after the specified count.
 *
 */

angular.module('a8m.after', [])
    .filter('after', function() {
      return function (collection, count) {
        collection = isObject(collection)
          ? toArray(collection)
          : collection;

        return (isArray(collection))
          ? collection.slice(count)
          : collection;
      }
    });

/**
 * @ngdoc filter
 * @name before-where
 * @kind function
 *
 * @description
 * get a collection and properties object, and returns all of the items
 * in the collection before the first that found with the given properties.
 */
angular.module('a8m.before-where', [])
  .filter('beforeWhere', function() {
    return function (collection, object) {

      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      if(!isArray(collection) || isUndefined(object)) return collection;

      var index = collection.map( function( elm ) {
        return objectContains(object, elm);
      }).indexOf( true );

      return collection.slice(0, (index === -1) ? collection.length : ++index);
    }
  });

/**
 * @ngdoc filter
 * @name before
 * @kind function
 *
 * @description
 * get a collection and specified count, and returns all of the items
 * in the collection before the specified count.
 */
angular.module('a8m.before', [])
    .filter('before', function() {
      return function (collection, count) {
        collection = isObject(collection)
          ? toArray(collection)
          : collection;

        return (isArray(collection))
          ? collection.slice(0, (!count) ? count : --count)
          : collection;
      }
    });

/**
 * @ngdoc filter
 * @name chunkBy
 * @kind function
 *
 * @description
 * Collect data into fixed-length chunks or blocks
 */

angular.module('a8m.chunk-by', ['a8m.filter-watcher'])
    .filter('chunkBy', ['filterWatcher', function (filterWatcher) {
      return function (array, n, fillVal) {

        return filterWatcher.isMemoized('chunkBy', arguments) ||
            filterWatcher.memoize('chunkBy', arguments, this,
                _chunkBy(array, n, fillVal));
        /**
         * @description
         * Get array with size `n` in `val` inside it.
         * @param n
         * @param val
         * @returns {Array}
         */
        function fill(n, val) {
          var ret = [];
          while (n--) ret[n] = val;
          return ret;
        }

        function _chunkBy(array, n, fillVal) {
          if (!isArray(array)) return array;
          return array.map(function (el, i, self) {
            i = i * n;
            el = self.slice(i, i + n);
            return !isUndefined(fillVal) && el.length < n
                ? el.concat(fill(n - el.length, fillVal))
                : el;
          }).slice(0, Math.ceil(array.length / n));
        }
      }
    }]);

/**
 * @ngdoc filter
 * @name concat
 * @kind function
 *
 * @description
 * get (array/object, object/array) and return merged collection
 */
angular.module('a8m.concat', [])
  .filter('concat', [function () {
    return function (collection, joined) {

      if (isUndefined(joined)) return collection;

      if (isArray(collection)) {
        return isObject(joined)
          ? collection.concat(toArray(joined))
          : collection.concat(joined);
      }

      if (isObject(collection)) {
        var array = toArray(collection);
        return (isObject(joined))
          ? array.concat(toArray(joined))
          : array.concat(joined);
      }
      return collection;
    };
  }
]);

/**
 * @ngdoc filter
 * @name contains
 * @kind function
 *
 * @description
 * Checks if given expression is present in one or more object in the collection
 */
angular.module('a8m.contains', [])
  .filter({
    contains: ['$parse', containsFilter],
    some: ['$parse', containsFilter]
  });

function containsFilter($parse) {
    return function (collection, expression) {

      collection = isObject(collection) ? toArray(collection) : collection;

      if(!isArray(collection) || isUndefined(expression)) {
        return false;
      }

      return collection.some(function(elm) {
        return ((isString(expression) && isObject(elm)) || isFunction(expression))
          ? $parse(expression)(elm)
          : elm === expression;
      });

    }
 }

/**
 * @ngdoc filter
 * @name countBy
 * @kind function
 *
 * @description
 * Sorts a list into groups and returns a count for the number of objects in each group.
 */

angular.module('a8m.count-by', [])

  .filter('countBy', [ '$parse', function ( $parse ) {
    return function (collection, property) {

      var result = {},
        get = $parse(property),
        prop;

      collection = (isObject(collection)) ? toArray(collection) : collection;

      if(!isArray(collection) || isUndefined(property)) {
        return collection;
      }

      collection.forEach( function( elm ) {
        prop = get(elm);

        if(!result[prop]) {
          result[prop] = 0;
        }

        result[prop]++;
      });

      return result;
    }
  }]);

/**
 * @ngdoc filter
 * @name defaults
 * @kind function
 *
 * @description
 * defaultsFilter allows to specify a default fallback value for properties that resolve to undefined.
 */
angular.module('a8m.defaults', [])
  .filter('defaults', ['$parse', function( $parse ) {
    return function(collection, defaults) {

      collection = isObject(collection) ? toArray(collection) : collection;

      if(!isArray(collection) || !isObject(defaults)) {
        return collection;
      }

      var keys = deepKeys(defaults);

      collection.forEach(function(elm) {
        //loop through all the keys
        keys.forEach(function(key) {
          var getter = $parse(key);
          var setter = getter.assign;
          //if it's not exist
          if(isUndefined(getter(elm))) {
            //get from defaults, and set to the returned object
            setter(elm, getter(defaults))
          }
        });
      });

      return collection;
    }
  }]);
/**
 * @ngdoc filter
 * @name every
 * @kind function
 *
 * @description
 * Checks if given expression is present in all members in the collection
 *
 */
angular.module('a8m.every', [])
  .filter('every', ['$parse', function($parse) {
    return function (collection, expression) {
      collection = isObject(collection) ? toArray(collection) : collection;

      if(!isArray(collection) || isUndefined(expression)) {
        return true;
      }

      return collection.every( function(elm) {
        return (isObject(elm) || isFunction(expression))
          ? $parse(expression)(elm)
          : elm === expression;
      });
    }
  }]);

/**
 * @ngdoc filter
 * @name filterBy
 * @kind function
 *
 * @description
 * filter by specific properties, avoid the rest
 */
angular.module('a8m.filter-by', [])
  .filter('filterBy', ['$parse', function( $parse ) {
    return function(collection, properties, search, strict) {
      var comparator;

      search = (isString(search) || isNumber(search)) ?
        String(search).toLowerCase() : undefined;

      collection = isObject(collection) ? toArray(collection) : collection;

      if(!isArray(collection) || isUndefined(search)) {
        return collection;
      }

      return collection.filter(function(elm) {
        return properties.some(function(prop) {

          /**
           * check if there is concatenate properties
           * example:
           * object: { first: 'foo', last:'bar' }
           * filterBy: ['first + last'] => search by full name(i.e 'foo bar')
           */
          if(!~prop.indexOf('+')) {
            comparator = $parse(prop)(elm)
          } else {
            var propList = prop.replace(/\s+/g, '').split('+');
            comparator = propList
              .map(function(prop) { return $parse(prop)(elm); })
              .join(' ');
          }

          if (!isString(comparator) && !isNumber(comparator)) {
            return false;
          }

          comparator = String(comparator).toLowerCase();

          return strict ? comparator === search : comparator.contains(search);
        });
      });
    }
  }]);

/**
 * @ngdoc filter
 * @name first
 * @kind function
 *
 * @description
 * Gets the first element or first n elements of an array
 * if callback is provided, is returns as long the callback return truthy
 */
angular.module('a8m.first', [])
  .filter('first', ['$parse', function( $parse ) {
    return function(collection) {
      var n
        , getter
        , args;

      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      if(!isArray(collection)) {
        return collection;
      }

      args = Array.prototype.slice.call(arguments, 1);
      n = (isNumber(args[0])) ? args[0] : 1;
      getter = (!isNumber(args[0]))  ? args[0] : (!isNumber(args[1])) ? args[1] : undefined;

      return (args.length) ? getFirstMatches(collection, n,(getter) ? $parse(getter) : getter) :
        collection[0];
    }
  }]);

/**
 * @ngdoc filter
 * @name flatten
 * @kind function
 *
 * @description
 * Flattens a nested array (the nesting can be to any depth).
 * If you pass shallow, the array will only be flattened a single level
 */
angular.module('a8m.flatten', [])
  .filter('flatten', function () {
    return function(collection, shallow) {

      shallow = shallow || false;
      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      if(!isArray(collection)) {
        return collection;
      }

      return !shallow
        ? flatten(collection, 0)
        : [].concat.apply([], collection);
    }
  });

/**
 * flatten nested array (the nesting can be to any depth).
 * @param array {Array}
 * @param i {int}
 * @returns {Array}
 * @private
 */
function flatten(array, i) {
  i = i || 0;

  if(i >= array.length)
    return array;

  if(isArray(array[i])) {
    return flatten(array.slice(0,i)
      .concat(array[i], array.slice(i+1)), i);
  }
  return flatten(array, i+1);
}

/**
 * @ngdoc filter
 * @name fuzzyByKey
 * @kind function
 *
 * @description
 * fuzzy string searching by key
 */
angular.module('a8m.fuzzy-by', [])
  .filter('fuzzyBy', ['$parse', function ( $parse ) {
    return function (collection, property, search, csensitive) {

      var sensitive = csensitive || false,
        prop, getter;

      collection = isObject(collection) ? toArray(collection) : collection;

      if(!isArray(collection) || isUndefined(property)
        || isUndefined(search)) {
        return collection;
      }

      getter = $parse(property);

      return collection.filter(function(elm) {

        prop = getter(elm);
        if(!isString(prop)) {
          return false;
        }

        prop = (sensitive) ? prop : prop.toLowerCase();
        search = (sensitive) ? search : search.toLowerCase();

        return hasApproxPattern(prop, search) !== false
      })
    }

 }]);
/**
 * @ngdoc filter
 * @name fuzzy
 * @kind function
 *
 * @description
 * fuzzy string searching for array of strings, objects
 */
angular.module('a8m.fuzzy', [])
  .filter('fuzzy', function () {
    return function (collection, search, csensitive) {
      var sensitive = csensitive || false;
      collection = isObject(collection) ? toArray(collection) : collection;

      if(!isArray(collection) || isUndefined(search)) {
        return collection;
      }

      search = (sensitive) ? search : search.toLowerCase();

      return collection.filter(function(elm) {
        if(isString(elm)) {
          elm = (sensitive) ? elm : elm.toLowerCase();
          return hasApproxPattern(elm, search) !== false
        }
        return (isObject(elm)) ? _hasApproximateKey(elm, search) : false;
      });

      /**
       * checks if object has key{string} that match
       * to fuzzy search pattern
       * @param object
       * @param search
       * @returns {boolean}
       * @private
       */
      function _hasApproximateKey(object, search) {
        var properties = Object.keys(object),
          prop, flag;
        return 0 < properties.filter(function (elm) {
          prop = object[elm];

          //avoid iteration if we found some key that equal[performance]
          if(flag) return true;

          if (isString(prop)) {
            prop = (sensitive) ? prop : prop.toLowerCase();
            return flag = (hasApproxPattern(prop, search) !== false);
          }

          return false;

        }).length;
      }
    }
  });

/**
 * @ngdoc filter
 * @name groupBy
 * @kind function
 *
 * @description
 * Create an object composed of keys generated from the result of running each element of a collection,
 * each key is an array of the elements.
 */

angular.module('a8m.group-by', [ 'a8m.filter-watcher' ])
  .filter('groupBy', [ '$parse', 'filterWatcher', function ( $parse, filterWatcher ) {
    return function (collection, property) {

      if(!isObject(collection) || isUndefined(property)) {
        return collection;
      }

      return filterWatcher.isMemoized('groupBy', arguments) ||
        filterWatcher.memoize('groupBy', arguments, this,
          _groupBy(collection, $parse(property)));

      /**
       * groupBy function
       * @param collection
       * @param getter
       * @returns {{}}
       */
      function _groupBy(collection, getter) {
        var result = {};
        var prop;

        forEach( collection, function( elm ) {
          prop = getter(elm);

          if(!result[prop]) {
            result[prop] = [];
          }
          result[prop].push(elm);
        });
        return result;
      }
    }
 }]);

/**
 * @ngdoc filter
 * @name isEmpty
 * @kind function
 *
 * @description
 * get collection or string and return if it empty
 */
angular.module('a8m.is-empty', [])
  .filter('isEmpty', function () {
    return function(collection) {
      return isObject(collection)
        ? !toArray(collection).length
        : !collection.length;
    }
  });

/**
 * @ngdoc filter
 * @name join
 * @kind function
 *
 * @description
 * join a collection by a provided delimiter (space by default)
 */
angular.module('a8m.join', [])
  .filter('join', function () {
    return function (input, delimiter) {
      if (isUndefined(input) || !isArray(input)) {
        return input;
      }
      if (isUndefined(delimiter)) delimiter = ' ';

      return input.join(delimiter);
    };
  })
;

/**
 * @ngdoc filter
 * @name last
 * @kind function
 *
 * @description
 * Gets the last element or last n elements of an array
 * if callback is provided, is returns as long the callback return truthy
 */
angular.module('a8m.last', [])
  .filter('last', ['$parse', function( $parse ) {
    return function(collection) {
      var n
        , getter
        , args
        //cuz reverse change our src collection
        //and we don't want side effects
        , reversed = copy(collection);

      reversed = isObject(reversed)
        ? toArray(reversed)
        : reversed;

      if(!isArray(reversed)) {
        return reversed;
      }

      args = Array.prototype.slice.call(arguments, 1);
      n = (isNumber(args[0])) ? args[0] : 1;
      getter = (!isNumber(args[0]))  ? args[0] : (!isNumber(args[1])) ? args[1] : undefined;

      return (args.length)
        //send reversed collection as arguments, and reverse it back as result
        ? getFirstMatches(reversed.reverse(), n,(getter) ? $parse(getter) : getter).reverse()
        //get the last element
        : reversed[reversed.length-1];
    }
  }]);

/**
 * @ngdoc filter
 * @name map
 * @kind function
 *
 * @description
 * Returns a new collection of the results of each expression execution.
 */
angular.module('a8m.map', [])
  .filter('map', ['$parse', function($parse) {
    return function (collection, expression) {

      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      if(!isArray(collection) || isUndefined(expression)) {
        return collection;
      }

      return collection.map(function (elm) {
        return $parse(expression)(elm);
      });
    }
  }]);

/**
 * @ngdoc filter
 * @name omit
 * @kind function
 *
 * @description
 * filter collection by expression
 */

angular.module('a8m.omit', [])

  .filter('omit', ['$parse', function($parse) {
    return function (collection, expression) {

      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      if(!isArray(collection) || isUndefined(expression)) {
        return collection;
      }

      return collection.filter(function (elm) {
        return !($parse(expression)(elm));
      });
    }
  }]);

/**
 * @ngdoc filter
 * @name pick
 * @kind function
 *
 * @description
 * filter collection by expression
 */

angular.module('a8m.pick', [])

  .filter('pick', ['$parse', function($parse) {
    return function (collection, expression) {

      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      if(!isArray(collection) || isUndefined(expression)) {
        return collection;
      }

      return collection.filter(function (elm) {
        return $parse(expression)(elm);
      });
    }
  }]);

/**
 * @ngdoc filter
 * @name range
 * @kind function
 *
 * @description
 * rangeFilter provides some support for a for loop using numbers
 */
angular.module('a8m.range', [])
  .filter('range', function () {
    return function (input, total, start, increment, cb) {
      start = start || 0;
      increment = increment || 1;
      for (var i = 0; i < parseInt(total); i++) {
        var j = start + i * increment;
        input.push(isFunction(cb) ? cb(j) : j);
      }
      return input;
    };
  });
/**
 * @ngdoc filter
 * @name removeWith
 * @kind function
 *
 * @description
 * get collection and properties object, and removed elements
 * with this properties
 */

angular.module('a8m.remove-with', [])
  .filter('removeWith', function() {
    return function (collection, object) {

      if(isUndefined(object)) {
        return collection;
      }
      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      return collection.filter(function (elm) {
        return !objectContains(object, elm);
      });
    }
  });


/**
 * @ngdoc filter
 * @name remove
 * @kind function
 *
 * @description
 * remove specific members from collection
 */

angular.module('a8m.remove', [])

  .filter('remove', function () {
    return function (collection) {
      collection = isObject(collection) ? toArray(collection) : collection;
      var args = Array.prototype.slice.call(arguments, 1);

      if(!isArray(collection)) {
        return collection;
      }

      return collection.filter( function( member ) {
        return !args.some(function(nest) {
          return equals(nest, member);
        })
      });
    }
  });

/**
 * @ngdoc filter
 * @name reverse
 * @kind function
 *
 * @description
 * Reverses a string or collection
 */
angular.module('a8m.reverse', [])
    .filter('reverse',[ function () {
      return function (input) {
        input = isObject(input) ? toArray(input) : input;

        if(isString(input)) {
          return input.split('').reverse().join('');
        }

        return isArray(input)
          ? input.slice().reverse()
          : input;
      }
    }]);

/**
 * @ngdoc filter
 * @name searchField
 * @kind function
 *
 * @description
 * for each member, join several strings field and add them to
 * new field called 'searchField' (use for search filtering)
 */
angular.module('a8m.search-field', [])
  .filter('searchField', ['$parse', function ($parse) {
    return function (collection) {

      var get, field;

      collection = isObject(collection) ? toArray(collection) : collection;

      var args = Array.prototype.slice.call(arguments, 1);

      if(!isArray(collection) || !args.length) {
        return collection;
      }

      return collection.map(function(member) {

        field = args.map(function(field) {
          get = $parse(field);
          return get(member);
        }).join(' ');

        return extend(member, { searchField: field });
      });
    }
  }]);

/**
 * @ngdoc filter
 * @name toArray
 * @kind function
 *
 * @description
 * Convert objects into stable arrays.
 * if addKey set to true,the filter also attaches a new property
 * $key to the value containing the original key that was used in
 * the object we are iterating over to reference the property
 */
angular.module('a8m.to-array', [])
  .filter('toArray', function() {
    return function (collection, addKey) {

      if(!isObject(collection)) {
        return collection;
      }

      return !addKey
        ? toArray(collection)
        : Object.keys(collection).map(function (key) {
            return extend(collection[key], { $key: key });
          });
    }
  });

/**
 * @ngdoc filter
 * @name unique/uniq
 * @kind function
 *
 * @description
 * get collection and filter duplicate members
 * if uniqueFilter get a property(nested to) as argument it's
 * filter by this property as unique identifier
 */

angular.module('a8m.unique', [])
  .filter({
      unique: ['$parse', uniqFilter],
      uniq: ['$parse', uniqFilter]
    });

function uniqFilter($parse) {
    return function (collection, property) {

      collection = isObject(collection) ? toArray(collection) : collection;

      if (!isArray(collection)) {
        return collection;
      }

      //store all unique identifiers
      var uniqueItems = [],
          get = $parse(property);

      return (isUndefined(property))
        //if it's kind of primitive array
        ? collection.filter(function (elm, pos, self) {
          return self.indexOf(elm) === pos;
        })
        //else compare with equals
        : collection.filter(function (elm) {
          var prop = get(elm);
          if(some(uniqueItems, prop)) {
            return false;
          }
          uniqueItems.push(prop);
          return true;
      });

      //checked if the unique identifier is already exist
      function some(array, member) {
        if(isUndefined(member)) {
          return false;
        }
        return array.some(function(el) {
          return equals(el, member);
        });
      }
    }
}

/**
 * @ngdoc filter
 * @name where
 * @kind function
 *
 * @description
 * of each element in a collection to the given properties object,
 * returning an array of all elements that have equivalent property values.
 *
 */
angular.module('a8m.where', [])
  .filter('where', function() {
    return function (collection, object) {
      if(isUndefined(object)) return collection;
      collection = isObject(collection)
        ? toArray(collection)
        : collection;

      return collection.filter(function (elm) {
        return objectContains(object, elm);
      });
    }
  });

/**
 * @ngdoc filter
 * @name xor
 * @kind function
 *
 * @description
 * Exclusive or filter by expression
 */

angular.module('a8m.xor', [])

  .filter('xor', ['$parse', function($parse) {
    return function (col1, col2, expression) {

      expression = expression || false;

      col1 = isObject(col1) ? toArray(col1) : col1;
      col2 = isObject(col2) ? toArray(col2) : col2;

      if(!isArray(col1) || !isArray(col2)) return col1;

      return col1.concat(col2)
        .filter(function(elm) {
          return !(some(elm, col1) && some(elm, col2));
        });

      function some(el, col) {
        var getter = $parse(expression);
        return col.some(function(dElm) {
          return expression
            ? equals(getter(dElm), getter(el))
            : equals(dElm, el);
        });
      }
    }
  }]);

/**
 * @ngdoc filter
 * @name abs
 * @kind function
 *
 * @description
 * Will return the absolute value of a number
 */
angular.module('a8m.math.abs', [])
  .filter('abs', function () {
    return function (input) {
      return Math.abs(input);
    }
  });

/**
 * @ngdoc filter
 * @name formatBytes
 * @kind function
 *
 * @description
 * Convert bytes into appropriate display 
 * 1024 bytes => 1 KB
 */
angular.module('a8m.math.byteFmt', [])
  .filter('byteFmt', function () {
    var compared = [{str: 'B', val: 1024}];
    ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function(el, i) {
      compared.push({str: el, val: compared[i].val * 1024 });
    });
    return function (bytes, decimal) {
      if(isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(bytes) && isFinite(bytes)) {
        var i = 0;
        while (i < compared.length-1 && bytes >= compared[i].val) i++;
        bytes /= i > 0 ? compared[i-1].val : 1;
        return convertToDecimal(bytes, decimal) + ' ' + compared[i].str;
      }
      return 'NaN';
    }
  });

/**
 * @ngdoc filter
 * @name degrees
 * @kind function
 *
 * @description
 * Convert angle from radians to degrees
 */
angular.module('a8m.math.degrees', [])
  .filter('degrees', function () {
    return function (radians, decimal) {
      // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
      // if degrees is not a real number, we cannot do also. quit with error "NaN"
      if(isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(radians) && isFinite(radians)) {
        var degrees = (radians * 180) / Math.PI;
        return Math.round(degrees * Math.pow(10,decimal)) / (Math.pow(10,decimal));
      } else {
        return 'NaN';
      }
    }
  });

 
 
/**
 * @ngdoc filter
 * @name formatBytes
 * @kind function
 *
 * @description
 * Convert bytes into appropriate display 
 * 1024 kilobytes => 1 MB
 */
angular.module('a8m.math.kbFmt', [])
  .filter('kbFmt', function () {
    var compared = [{str: 'KB', val: 1024}];
    ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function(el, i) {
      compared.push({str: el, val: compared[i].val * 1024 });
    });
    return function (bytes, decimal) {
      if(isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(bytes) && isFinite(bytes)) {
        var i = 0;
        while (i < compared.length-1 && bytes >= compared[i].val) i++;
        bytes /= i > 0 ? compared[i-1].val : 1;
        return convertToDecimal(bytes, decimal) + ' ' + compared[i].str;
      }
      return 'NaN';
    }
  });
/**
 * @ngdoc filter
 * @name max
 * @kind function
 *
 * @description
 * Math.max will get an array and return the max value. if an expression
 * is provided, will return max value by expression.
 */
angular.module('a8m.math.max', [])
  .filter('max', ['$parse', function ($parse) {
    return function (input, expression) {

      if(!isArray(input)) {
        return input;
      }
      return isUndefined(expression)
        ? Math.max.apply(Math, input)
        : input[indexByMax(input, expression)];
    };

    /**
     * @private
     * @param array
     * @param exp
     * @returns {number|*|Number}
     */
    function indexByMax(array, exp) {
      var mappedArray = array.map(function(elm){
        return $parse(exp)(elm);
      });
      return mappedArray.indexOf(Math.max.apply(Math, mappedArray));
    }
  }]);
/**
 * @ngdoc filter
 * @name min
 * @kind function
 *
 * @description
 * Math.min will get an array and return the min value. if an expression
 * is provided, will return min value by expression.
 */
angular.module('a8m.math.min', [])
  .filter('min', ['$parse', function ($parse) {
    return function (input, expression) {

      if(!isArray(input)) {
        return input;
      }
      return isUndefined(expression)
        ? Math.min.apply(Math, input)
        : input[indexByMin(input, expression)];
    };

    /**
     * @private
     * @param array
     * @param exp
     * @returns {number|*|Number}
     */
    function indexByMin(array, exp) {
      var mappedArray = array.map(function(elm){
        return $parse(exp)(elm);
      });
      return mappedArray.indexOf(Math.min.apply(Math, mappedArray));
    }
  }]);
/**
 * @ngdoc filter
 * @name Percent
 * @kind function
 *
 * @description
 * percentage between two numbers
 */
angular.module('a8m.math.percent', [])
  .filter('percent', function () {
    return function (input, divided, round) {

      var divider = isString(input) ? Number(input) : input;
      divided = divided || 100;
      round = round || false;

      if (!isNumber(divider) || isNaN(divider)) return input;

      return round
        ? Math.round((divider / divided) * 100)
        : (divider / divided) * 100;
    }
  });

/**
 * @ngdoc filter
 * @name toRadians
 * @kind function
 *
 * @description
 * Convert angle from degrees to radians
 */
angular.module('a8m.math.radians', [])
  .filter('radians', function() {
    return function (degrees, decimal) {
      // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
      // if degrees is not a real number, we cannot do also. quit with error "NaN"
      if(isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(degrees) && isFinite(degrees)) {
        var radians = (degrees * 3.14159265359) / 180;
        return Math.round(radians * Math.pow(10,decimal)) / (Math.pow(10,decimal));
      }
      return 'NaN';
    }
  });

 
 
/**
 * @ngdoc filter
 * @name Radix
 * @kind function
 *
 * @description
 * converting decimal numbers to different bases(radix)
 */
angular.module('a8m.math.radix', [])
  .filter('radix', function () {
    return function (input, radix) {
      var RANGE = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;

      if(!isNumber(input) || !RANGE.test(radix)) {
        return input;
      }

      return input.toString(radix).toUpperCase();
    }
  });

/**
 * @ngdoc filter
 * @name formatBytes
 * @kind function
 *
 * @description
 * Convert number into abbreviations.
 * i.e: K for one thousand, M for Million, B for billion
 * e.g: number of users:235,221, decimal:1 => 235.2 K
 */
angular.module('a8m.math.shortFmt', [])
  .filter('shortFmt', function () {
    return function (number, decimal) {
      if(isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(number) && isFinite(number)){
        if(number < 1e3) {
          return '' + number;  // Coerce to string
        } else if(number < 1e6) {
          return convertToDecimal((number / 1e3), decimal) + ' K';
        } else if(number < 1e9){
          return convertToDecimal((number / 1e6), decimal) + ' M';
        } else {
          return convertToDecimal((number / 1e9), decimal) + ' B';
        }

      }
      return 'NaN';
    }
  });
/**
 * @ngdoc filter
 * @name sum
 * @kind function
 *
 * @description
 * Sum up all values within an array
 */
angular.module('a8m.math.sum', [])
  .filter('sum', function () {
    return function (input, initial) {
      return !isArray(input)
        ? input
        : input.reduce(function(prev, curr) {
          return prev + curr;
        }, initial || 0);
    }
  });

/**
 * @ngdoc filter
 * @name endsWith
 * @kind function
 *
 * @description
 * checks whether string ends with the ends parameter.
 */
angular.module('a8m.ends-with', [])

  .filter('endsWith', function () {
    return function (input, ends, csensitive) {

      var sensitive = csensitive || false,
        position;

      if(!isString(input) || isUndefined(ends)) {
        return input;
      }

      input = (sensitive) ? input : input.toLowerCase();
      position = input.length - ends.length;

      return input.indexOf((sensitive) ? ends : ends.toLowerCase(), position) !== -1;
    }
  });

/**
 * @ngdoc filter
 * @name latinize
 * @kind function
 *
 * @description
 * remove accents/diacritics from a string
 */
angular.module('a8m.latinize', [])
  .filter('latinize',[ function () {
    var defaultDiacriticsRemovalap = [
      {'base':'A', 'letters':'\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},
      {'base':'AA','letters':'\uA732'},
      {'base':'AE','letters':'\u00C6\u01FC\u01E2'},
      {'base':'AO','letters':'\uA734'},
      {'base':'AU','letters':'\uA736'},
      {'base':'AV','letters':'\uA738\uA73A'},
      {'base':'AY','letters':'\uA73C'},
      {'base':'B', 'letters':'\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'},
      {'base':'C', 'letters':'\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'},
      {'base':'D', 'letters':'\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'},
      {'base':'DZ','letters':'\u01F1\u01C4'},
      {'base':'Dz','letters':'\u01F2\u01C5'},
      {'base':'E', 'letters':'\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},
      {'base':'F', 'letters':'\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'},
      {'base':'G', 'letters':'\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'},
      {'base':'H', 'letters':'\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'},
      {'base':'I', 'letters':'\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},
      {'base':'J', 'letters':'\u004A\u24BF\uFF2A\u0134\u0248'},
      {'base':'K', 'letters':'\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'},
      {'base':'L', 'letters':'\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'},
      {'base':'LJ','letters':'\u01C7'},
      {'base':'Lj','letters':'\u01C8'},
      {'base':'M', 'letters':'\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'},
      {'base':'N', 'letters':'\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'},
      {'base':'NJ','letters':'\u01CA'},
      {'base':'Nj','letters':'\u01CB'},
      {'base':'O', 'letters':'\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'},
      {'base':'OI','letters':'\u01A2'},
      {'base':'OO','letters':'\uA74E'},
      {'base':'OU','letters':'\u0222'},
      {'base':'OE','letters':'\u008C\u0152'},
      {'base':'oe','letters':'\u009C\u0153'},
      {'base':'P', 'letters':'\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'},
      {'base':'Q', 'letters':'\u0051\u24C6\uFF31\uA756\uA758\u024A'},
      {'base':'R', 'letters':'\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'},
      {'base':'S', 'letters':'\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'},
      {'base':'T', 'letters':'\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'},
      {'base':'TZ','letters':'\uA728'},
      {'base':'U', 'letters':'\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},
      {'base':'V', 'letters':'\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'},
      {'base':'VY','letters':'\uA760'},
      {'base':'W', 'letters':'\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'},
      {'base':'X', 'letters':'\u0058\u24CD\uFF38\u1E8A\u1E8C'},
      {'base':'Y', 'letters':'\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'},
      {'base':'Z', 'letters':'\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'},
      {'base':'a', 'letters':'\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'},
      {'base':'aa','letters':'\uA733'},
      {'base':'ae','letters':'\u00E6\u01FD\u01E3'},
      {'base':'ao','letters':'\uA735'},
      {'base':'au','letters':'\uA737'},
      {'base':'av','letters':'\uA739\uA73B'},
      {'base':'ay','letters':'\uA73D'},
      {'base':'b', 'letters':'\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'},
      {'base':'c', 'letters':'\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'},
      {'base':'d', 'letters':'\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'},
      {'base':'dz','letters':'\u01F3\u01C6'},
      {'base':'e', 'letters':'\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},
      {'base':'f', 'letters':'\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'},
      {'base':'g', 'letters':'\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'},
      {'base':'h', 'letters':'\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'},
      {'base':'hv','letters':'\u0195'},
      {'base':'i', 'letters':'\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},
      {'base':'j', 'letters':'\u006A\u24D9\uFF4A\u0135\u01F0\u0249'},
      {'base':'k', 'letters':'\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'},
      {'base':'l', 'letters':'\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'},
      {'base':'lj','letters':'\u01C9'},
      {'base':'m', 'letters':'\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'},
      {'base':'n', 'letters':'\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'},
      {'base':'nj','letters':'\u01CC'},
      {'base':'o', 'letters':'\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'},
      {'base':'oi','letters':'\u01A3'},
      {'base':'ou','letters':'\u0223'},
      {'base':'oo','letters':'\uA74F'},
      {'base':'p','letters':'\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'},
      {'base':'q','letters':'\u0071\u24E0\uFF51\u024B\uA757\uA759'},
      {'base':'r','letters':'\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'},
      {'base':'s','letters':'\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'},
      {'base':'t','letters':'\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'},
      {'base':'tz','letters':'\uA729'},
      {'base':'u','letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'},
      {'base':'v','letters':'\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'},
      {'base':'vy','letters':'\uA761'},
      {'base':'w','letters':'\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'},
      {'base':'x','letters':'\u0078\u24E7\uFF58\u1E8B\u1E8D'},
      {'base':'y','letters':'\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'},
      {'base':'z','letters':'\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'}
    ];

    var diacriticsMap = {};
    for (var i = 0; i < defaultDiacriticsRemovalap.length; i++) {
      var letters = defaultDiacriticsRemovalap[i].letters.split("");
      for (var j = 0; j < letters.length ; j++){
        diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
      }
    }

    // "what?" version ... http://jsperf.com/diacritics/12
    function removeDiacritics (str) {
      return str.replace(/[^\u0000-\u007E]/g, function(a){
        return diacriticsMap[a] || a;
      });
    }

    return function (input) {

      return isString(input)
        ? removeDiacritics(input)
        : input;
    }
  }]);

/**
 * @ngdoc filter
 * @name ltrim
 * @kind function
 *
 * @description
 * Left trim. Similar to trimFilter, but only for left side.
 */
angular.module('a8m.ltrim', [])
  .filter('ltrim', function () {
    return function(input, chars) {

      var trim = chars || '\\s';

      return isString(input)
        ? input.replace(new RegExp('^' + trim + '+'), '')
        : input;
    }
  });

/**
 * @ngdoc filter
 * @name match
 * @kind function
 *
 * @description
 * Return the matched pattern in a string.
 */
angular.module('a8m.match', [])
  .filter('match', function () {
    return function (input, pattern, flag) {

      var reg = new RegExp(pattern, flag);

      return isString(input)
        ? input.match(reg)
        : null;
    }
  });

/**
 * @ngdoc filter
 * @name phone-us
 * @kind function
 *
 * @description
 * format a string or a number into a us-style
 * phone number in the form (***) ***-****
 */
angular.module('a8m.phoneUS', [])
  .filter('phoneUS', function () {
    return function(num) {
      num += '';
      return '(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6);
    }
  });

/**
 * @ngdoc filter
 * @name repeat
 * @kind function
 *
 * @description
 * Repeats a string n times
 */
angular.module('a8m.repeat', [])
  .filter('repeat',[ function () {
    return function (input, n, separator) {

      var times = ~~n;

      if(!isString(input)) {
        return input;
      }

      return !times
        ? input
        : strRepeat(input, --n, separator || '');
    }
  }]);

/**
 * Repeats a string n times with given separator
 * @param str string to repeat
 * @param n number of times
 * @param sep separator
 * @returns {*}
 */
function strRepeat(str, n, sep) {
  if(!n) {
    return str;
  }
  return str + sep + strRepeat(str, --n, sep);
}
/**
* @ngdoc filter
* @name rtrim
* @kind function
*
* @description
* Right trim. Similar to trimFilter, but only for right side.
*/
angular.module('a8m.rtrim', [])
  .filter('rtrim', function () {
    return function(input, chars) {

      var trim = chars || '\\s';

      return isString(input)
        ? input.replace(new RegExp(trim + '+$'), '')
        : input;
    }
  });

/**
 * @ngdoc filter
 * @name slugify
 * @kind function
 *
 * @description
 * remove spaces from string, replace with "-" or given argument
 */
angular.module('a8m.slugify', [])
  .filter('slugify',[ function () {
    return function (input, sub) {

      var replace = (isUndefined(sub)) ? '-' : sub;

      return isString(input)
        ? input.toLowerCase().replace(/\s+/g, replace)
        : input;
    }
  }]);

/**
 * @ngdoc filter
 * @name split
 * @kind function
 *
 * @description
 * split a string by a provided delimiter (none '' by default) and skip first n-delimiters
 */
angular.module('a8m.split', [])
  .filter('split', function () {
    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    return function (input, delimiter, skip) {
      var _regexp, _matches, _splitted, _temp;

      if (isUndefined(input) || !isString(input)) {
        return null;
      }
      if (isUndefined(delimiter)) delimiter = '';
      if (isNaN(skip)) skip = 0;

      _regexp = new RegExp(escapeRegExp(delimiter), 'g');
      _matches = input.match(_regexp);
      
      if (isNull(_matches) || skip >= _matches.length) {
        return [input];
      }

      if (skip === 0) return input.split(delimiter);
      
      _splitted = input.split(delimiter);
      _temp = _splitted.splice(0, skip + 1);
      _splitted.unshift(_temp.join(delimiter));
    
      return _splitted;
    };
  })
;

/**
 * @ngdoc filter
 * @name startWith
 * @kind function
 *
 * @description
 * checks whether string starts with the starts parameter.
 */
angular.module('a8m.starts-with', [])
  .filter('startsWith', function () {
    return function (input, start, csensitive) {

      var sensitive = csensitive || false;

      if(!isString(input) || isUndefined(start)) {
        return input;
      }

      input = (sensitive) ? input : input.toLowerCase();

      return !input.indexOf((sensitive) ? start : start.toLowerCase());
    }
  });

/**
 * @ngdoc filter
 * @name stringular
 * @kind function
 *
 * @description
 * get string with {n} and replace match with enumeration values
 */
angular.module('a8m.stringular', [])
  .filter('stringular', function () {
    return function(input) {

      var args = Array.prototype.slice.call(arguments, 1);

      return input.replace(/{(\d+)}/g, function (match, number) {
        return isUndefined(args[number]) ? match : args[number];
      });
    }
  });

/**
 * @ngdoc filter
 * @name stripTags
 * @kind function
 *
 * @description
 * strip html tags from string
 */
angular.module('a8m.strip-tags', [])
  .filter('stripTags', function () {
    return function(input) {
      return isString(input)
        ? input.replace(/<\S[^><]*>/g, '')
        : input;
    }
  });

/**
 * @ngdoc filter
 * @name test
 * @kind function
 *
 * @description
 * test if a string match a pattern.
 */
angular.module('a8m.test', [])
  .filter('test', function () {
    return function (input, pattern, flag) {

      var reg = new RegExp(pattern, flag);

      return isString(input)
        ? reg.test(input)
        : input;
    }
  });

/**
 * @ngdoc filter
 * @name trim
 * @kind function
 *
 * @description
 *  Strip whitespace (or other characters) from the beginning and end of a string
 */
angular.module('a8m.trim', [])
  .filter('trim', function () {
    return function(input, chars) {

      var trim = chars || '\\s';

      return isString(input)
        ? input.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '')
        : input;
    }
  });

/**
 * @ngdoc filter
 * @name truncate
 * @kind function
 *
 * @description
 * truncates a string given a specified length, providing a custom string to denote an omission.
 */
angular.module('a8m.truncate', [])
  .filter('truncate', function () {
    return function(input, length, suffix, preserve) {

      length = isUndefined(length) ? input.length : length;
      preserve = preserve || false;
      suffix = suffix || '';

      if(!isString(input) || (input.length <= length)) return input;

      return input.substring(0, (preserve)
        ? ((input.indexOf(' ', length) === -1) ? input.length : input.indexOf(' ', length))
        : length) + suffix;
    };
  });

/**
 * @ngdoc filter
 * @name ucfirst
 * @kind function
 *
 * @description
 * ucfirst
 */
angular.module('a8m.ucfirst', [])
  .filter({
    ucfirst: ucfirstFilter,
    titleize: ucfirstFilter
  });

function ucfirstFilter() {
  return function (input) {
    return isString(input)
      ? input
      .split(' ')
      .map(function (ch) {
        return ch.charAt(0).toUpperCase() + ch.substring(1);
      })
      .join(' ')
      : input;
  }
}

/**
 * @ngdoc filter
 * @name uriComponentEncode
 * @kind function
 *
 * @description
 * get string as parameter and return encoded string
 */
angular.module('a8m.uri-component-encode', [])
  .filter('uriComponentEncode',['$window', function ($window) {
      return function (input) {
        return isString(input)
          ? $window.encodeURIComponent(input)
          : input;
      }
    }]);

/**
 * @ngdoc filter
 * @name uriEncode
 * @kind function
 *
 * @description
 * get string as parameter and return encoded string
 */
angular.module('a8m.uri-encode', [])
  .filter('uriEncode',['$window', function ($window) {
      return function (input) {
        return isString(input)
          ? $window.encodeURI(input)
          : input;
      }
    }]);

/**
 * @ngdoc filter
 * @name wrap
 * @kind function
 *
 * @description
 * Wrap a string with another string
 */
angular.module('a8m.wrap', [])
  .filter('wrap', function () {
    return function(input, wrap, ends) {
      return isString(input) && isDefined(wrap)
        ? [wrap, input, ends || wrap].join('')
        : input;
    }
  });

/**
 * @ngdoc provider
 * @name filterWatcher
 * @kind function
 *
 * @description
 * store specific filters result in $$cache, based on scope life time(avoid memory leak).
 * on scope.$destroy remove it's cache from $$cache container
 */

angular.module('a8m.filter-watcher', [])
  .provider('filterWatcher', function() {

    this.$get = ['$window', '$rootScope', function($window, $rootScope) {

      /**
       * Cache storing
       * @type {Object}
       */
      var $$cache = {};

      /**
       * Scope listeners container
       * scope.$destroy => remove all cache keys
       * bind to current scope.
       * @type {Object}
       */
      var $$listeners = {};

      /**
       * $timeout without triggering the digest cycle
       * @type {function}
       */
      var $$timeout = $window.setTimeout;

      /**
       * @description
       * get `HashKey` string based on the given arguments.
       * @param fName
       * @param args
       * @returns {string}
       */
      function getHashKey(fName, args) {
        function replacerFactory() {
          var cache = [];
          return function(key, val) {
            if(isObject(val) && !isNull(val)) {
              if (~cache.indexOf(val)) return '[Circular]';
              cache.push(val)
            }
            if($window == val) return '$WINDOW';
            if($window.document == val) return '$DOCUMENT';
            if(isScope(val)) return '$SCOPE';
            return val;
          }
        }
        return [fName, JSON.stringify(args, replacerFactory())]
          .join('#')
          .replace(/"/g,'');
      }

      /**
       * @description
       * fir on $scope.$destroy,
       * remove cache based scope from `$$cache`,
       * and remove itself from `$$listeners`
       * @param event
       */
      function removeCache(event) {
        var id = event.targetScope.$id;
        forEach($$listeners[id], function(key) {
          delete $$cache[key];
        });
        delete $$listeners[id];
      }

      /**
       * @description
       * for angular version that greater than v.1.3.0
       * it clear cache when the digest cycle is end.
       */
      function cleanStateless() {
        $$timeout(function() {
          if(!$rootScope.$$phase)
            $$cache = {};
        }, 2000);
      }

      /**
       * @description
       * Store hashKeys in $$listeners container
       * on scope.$destroy, remove them all(bind an event).
       * @param scope
       * @param hashKey
       * @returns {*}
       */
      function addListener(scope, hashKey) {
        var id = scope.$id;
        if(isUndefined($$listeners[id])) {
          scope.$on('$destroy', removeCache);
          $$listeners[id] = [];
        }
        return $$listeners[id].push(hashKey);
      }

      /**
       * @description
       * return the `cacheKey` or undefined.
       * @param filterName
       * @param args
       * @returns {*}
       */
      function $$isMemoized(filterName, args) {
        var hashKey = getHashKey(filterName, args);
        return $$cache[hashKey];
      }

      /**
       * @description
       * store `result` in `$$cache` container, based on the hashKey.
       * add $destroy listener and return result
       * @param filterName
       * @param args
       * @param scope
       * @param result
       * @returns {*}
       */
      function $$memoize(filterName, args, scope, result) {
        var hashKey = getHashKey(filterName, args);
        //store result in `$$cache` container
        $$cache[hashKey] = result;
        // for angular versions that less than 1.3
        // add to `$destroy` listener, a cleaner callback
        if(isScope(scope)) {
          addListener(scope, hashKey);
        } else {
          cleanStateless();
        }
        return result;
      }

      return {
        isMemoized: $$isMemoized,
        memoize: $$memoize
      }
    }];
  });
  

/**
 * @ngdoc module
 * @name angular.filters
 * @description
 * Bunch of useful filters for angularJS
 */

angular.module('angular.filter', [

  'a8m.ucfirst',
  'a8m.uri-encode',
  'a8m.uri-component-encode',
  'a8m.slugify',
  'a8m.latinize',
  'a8m.strip-tags',
  'a8m.stringular',
  'a8m.truncate',
  'a8m.starts-with',
  'a8m.ends-with',
  'a8m.wrap',
  'a8m.trim',
  'a8m.ltrim',
  'a8m.rtrim',
  'a8m.repeat',
  'a8m.test',
  'a8m.match',
  'a8m.split',
  'a8m.phoneUS',

  'a8m.to-array',
  'a8m.concat',
  'a8m.contains',
  'a8m.unique',
  'a8m.is-empty',
  'a8m.after',
  'a8m.after-where',
  'a8m.before',
  'a8m.before-where',
  'a8m.defaults',
  'a8m.where',
  'a8m.reverse',
  'a8m.remove',
  'a8m.remove-with',
  'a8m.group-by',
  'a8m.count-by',
  'a8m.chunk-by',
  'a8m.search-field',
  'a8m.fuzzy-by',
  'a8m.fuzzy',
  'a8m.omit',
  'a8m.pick',
  'a8m.every',
  'a8m.filter-by',
  'a8m.xor',
  'a8m.map',
  'a8m.first',
  'a8m.last',
  'a8m.flatten',
  'a8m.join',
  'a8m.range',

  'a8m.math.max',
  'a8m.math.min',
  'a8m.math.abs',
  'a8m.math.percent',
  'a8m.math.radix',
  'a8m.math.sum',
  'a8m.math.degrees',
  'a8m.math.radians',
  'a8m.math.byteFmt',
  'a8m.math.kbFmt',
  'a8m.math.shortFmt',

  'a8m.angular',
  'a8m.conditions',
  'a8m.is-null',

  'a8m.filter-watcher'
]);
})( window, window.angular );