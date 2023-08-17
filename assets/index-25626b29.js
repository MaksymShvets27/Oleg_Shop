function FS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pw={exports:{}},Sc={},mw={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),jS=Symbol.for("react.portal"),US=Symbol.for("react.fragment"),zS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),qS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),KS=Symbol.for("react.memo"),QS=Symbol.for("react.lazy"),Fy=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var gw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yw=Object.assign,vw={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=vw,this.updater=n||gw}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _w(){}_w.prototype=Ks.prototype;function qp(t,e,n){this.props=t,this.context=e,this.refs=vw,this.updater=n||gw}var Gp=qp.prototype=new _w;Gp.constructor=qp;yw(Gp,Ks.prototype);Gp.isPureReactComponent=!0;var jy=Array.isArray,ww=Object.prototype.hasOwnProperty,Kp={current:null},Ew={key:!0,ref:!0,__self:!0,__source:!0};function Iw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ww.call(e,r)&&!Ew.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$a,type:t,key:s,ref:o,props:i,_owner:Kp.current}}function XS(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function JS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uy=/\/+/g;function Yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JS(""+t.key):e.toString(36)}function Yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $a:case jS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yh(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace(Uy,"$&/")+"/"),Yl(i,e,n,"",function(u){return u})):i!=null&&(Qp(i)&&(i=XS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Yh(s,a);o+=Yl(s,e,n,l,i)}else if(l=YS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Yh(s,a++),o+=Yl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var r=[],i=0;return Yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},Xl={transition:null},eA={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Xl,ReactCurrentOwner:Kp};ne.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ks;ne.Fragment=US;ne.Profiler=BS;ne.PureComponent=qp;ne.StrictMode=zS;ne.Suspense=GS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eA;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ww.call(e,l)&&!Ew.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$a,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WS,_context:t},t.Consumer=t};ne.createElement=Iw;ne.createFactory=function(t){var e=Iw.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:qS,render:t}};ne.isValidElement=Qp;ne.lazy=function(t){return{$$typeof:QS,_payload:{_status:-1,_result:t},_init:ZS}};ne.memo=function(t,e){return{$$typeof:KS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Xl.transition;Xl.transition={};try{t()}finally{Xl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return Pt.current.useCallback(t,e)};ne.useContext=function(t){return Pt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Pt.current.useEffect(t,e)};ne.useId=function(){return Pt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Pt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};ne.useRef=function(t){return Pt.current.useRef(t)};ne.useState=function(t){return Pt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Pt.current.useTransition()};ne.version="18.2.0";mw.exports=ne;var T=mw.exports;const Mt=fw(T),zy=FS({__proto__:null,default:Mt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA=T,nA=Symbol.for("react.element"),rA=Symbol.for("react.fragment"),iA=Object.prototype.hasOwnProperty,sA=tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oA={key:!0,ref:!0,__self:!0,__source:!0};function Tw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iA.call(e,r)&&!oA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nA,type:t,key:s,ref:o,props:i,_owner:sA.current}}Sc.Fragment=rA;Sc.jsx=Tw;Sc.jsxs=Tw;pw.exports=Sc;var g=pw.exports,sf={},xw={exports:{}},Kt={},Sw={exports:{}},Aw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,W){var q=P.length;P.push(W);e:for(;0<q;){var ye=q-1>>>1,D=P[ye];if(0<i(D,W))P[ye]=W,P[q]=D,q=ye;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],q=P.pop();if(q!==W){P[0]=q;e:for(var ye=0,D=P.length,V=D>>>1;ye<V;){var F=2*(ye+1)-1,Q=P[F],I=F+1,re=P[I];if(0>i(Q,q))I<D&&0>i(re,Q)?(P[ye]=re,P[I]=q,ye=I):(P[ye]=Q,P[F]=q,ye=F);else if(I<D&&0>i(re,q))P[ye]=re,P[I]=q,ye=I;else break e}}return W}function i(P,W){var q=P.sortIndex-W.sortIndex;return q!==0?q:P.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=P)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(P){if(v=!1,_(P),!y)if(n(l)!==null)y=!0,un(x);else{var W=n(u);W!==null&&M(E,W.startTime-P)}}function x(P,W){y=!1,v&&(v=!1,m(N),N=-1),p=!0;var q=d;try{for(_(W),h=n(l);h!==null&&(!(h.expirationTime>W)||P&&!me());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var D=ye(h.expirationTime<=W);W=t.unstable_now(),typeof D=="function"?h.callback=D:h===n(l)&&r(l),_(W)}else r(l);h=n(l)}if(h!==null)var V=!0;else{var F=n(u);F!==null&&M(E,F.startTime-W),V=!1}return V}finally{h=null,d=q,p=!1}}var A=!1,b=null,N=-1,H=5,U=-1;function me(){return!(t.unstable_now()-U<H)}function Ae(){if(b!==null){var P=t.unstable_now();U=P;var W=!0;try{W=b(!0,P)}finally{W?Be():(A=!1,b=null)}}else A=!1}var Be;if(typeof f=="function")Be=function(){f(Ae)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Ge=At.port2;At.port1.onmessage=Ae,Be=function(){Ge.postMessage(null)}}else Be=function(){w(Ae,0)};function un(P){b=P,A||(A=!0,Be())}function M(P,W){N=w(function(){P(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,un(x))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var q=d;d=W;try{return P()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=d;d=P;try{return W()}finally{d=q}},t.unstable_scheduleCallback=function(P,W,q){var ye=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ye+q:ye):q=ye,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=q+D,P={id:c++,callback:W,priorityLevel:P,startTime:q,expirationTime:D,sortIndex:-1},q>ye?(P.sortIndex=q,e(u,P),n(l)===null&&P===n(u)&&(v?(m(N),N=-1):v=!0,M(E,q-ye))):(P.sortIndex=D,e(l,P),y||p||(y=!0,un(x))),P},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(P){var W=d;return function(){var q=d;d=W;try{return P.apply(this,arguments)}finally{d=q}}}})(Aw);Sw.exports=Aw;var aA=Sw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=T,Ht=aA;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kw=new Set,Jo={};function Vi(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Jo[t]=e,t=0;t<e.length;t++)kw.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,lA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},Wy={};function uA(t){return of.call(Wy,t)?!0:of.call(By,t)?!1:lA.test(t)?Wy[t]=!0:(By[t]=!0,!1)}function cA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hA(t,e,n,r){if(e===null||typeof e>"u"||cA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yp=/[\-:]([a-z])/g;function Xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yp,Xp);lt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yp,Xp);lt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yp,Xp);lt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jp(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hA(e,n,i,r)&&(n=null),r||i===null?uA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hr=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),Rw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),tm=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),bw=Symbol.for("react.offscreen"),Hy=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Xh;function xo(t){if(Xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xh=e&&e[1]||""}return`
`+Xh+t}var Jh=!1;function Zh(t,e){if(!t||Jh)return"";Jh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function dA(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Zh(t.type,!1),t;case 11:return t=Zh(t.type.render,!1),t;case 1:return t=Zh(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case Ji:return"Portal";case af:return"Profiler";case Zp:return"StrictMode";case lf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pw:return(t.displayName||"Context")+".Consumer";case Rw:return(t._context.displayName||"Context")+".Provider";case em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tm:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function fA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pA(t){var e=Nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=pA(t))}function Ow(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dw(t,e){e=e.checked,e!=null&&Jp(t,"checked",e,!1)}function df(t,e){Dw(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ff(t,e.type,n):e.hasOwnProperty("defaultValue")&&ff(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ff(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(So(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function Lw(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,Vw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mA=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){mA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function $w(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function Fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$w(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gA=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(gA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,ps=null,ms=null;function Yy(t){if(t=Ua(t)){if(typeof _f!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Pc(e),_f(t.stateNode,t.type,e))}}function jw(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Uw(){if(ps){var t=ps,e=ms;if(ms=ps=null,Yy(t),e)for(t=0;t<e.length;t++)Yy(e[t])}}function zw(t,e){return t(e)}function Bw(){}var ed=!1;function Ww(t,e,n){if(ed)return t(e,n);ed=!0;try{return zw(t,e,n)}finally{ed=!1,(ps!==null||ms!==null)&&(Bw(),Uw())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var wf=!1;if(er)try{var po={};Object.defineProperty(po,"passive",{get:function(){wf=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{wf=!1}function yA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vo=!1,_u=null,wu=!1,Ef=null,vA={onError:function(t){Vo=!0,_u=t}};function _A(t,e,n,r,i,s,o,a,l){Vo=!1,_u=null,yA.apply(vA,arguments)}function wA(t,e,n,r,i,s,o,a,l){if(_A.apply(this,arguments),Vo){if(Vo){var u=_u;Vo=!1,_u=null}else throw Error(k(198));wu||(wu=!0,Ef=u)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xy(t){if($i(t)!==t)throw Error(k(188))}function EA(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xy(i),t;if(s===r)return Xy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function qw(t){return t=EA(t),t!==null?Gw(t):null}function Gw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gw(t);if(e!==null)return e;t=t.sibling}return null}var Kw=Ht.unstable_scheduleCallback,Jy=Ht.unstable_cancelCallback,IA=Ht.unstable_shouldYield,TA=Ht.unstable_requestPaint,Le=Ht.unstable_now,xA=Ht.unstable_getCurrentPriorityLevel,rm=Ht.unstable_ImmediatePriority,Qw=Ht.unstable_UserBlockingPriority,Eu=Ht.unstable_NormalPriority,SA=Ht.unstable_LowPriority,Yw=Ht.unstable_IdlePriority,Ac=null,Pn=null;function AA(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:RA,CA=Math.log,kA=Math.LN2;function RA(t){return t>>>=0,t===0?32:31-(CA(t)/kA|0)|0}var vl=64,_l=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ao(a):(s&=o,s!==0&&(r=Ao(s)))}else o=n&~i,o!==0?r=Ao(o):s!==0&&(r=Ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function PA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=PA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function If(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xw(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function NA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function im(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Jw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zw,sm,e1,t1,n1,Tf=!1,wl=[],Nr=null,Or=null,Dr=null,ta=new Map,na=new Map,wr=[],OA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zy(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ua(e),e!==null&&sm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DA(t,e,n,r,i){switch(e){case"focusin":return Nr=mo(Nr,t,e,n,r,i),!0;case"dragenter":return Or=mo(Or,t,e,n,r,i),!0;case"mouseover":return Dr=mo(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,mo(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,mo(na.get(s)||null,t,e,n,r,i)),!0}return!1}function r1(t){var e=di(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=Hw(n),e!==null){t.blockedOn=e,n1(t.priority,function(){e1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return e=Ua(n),e!==null&&sm(e),t.blockedOn=n,!1;e.shift()}return!0}function ev(t,e,n){Jl(t)&&n.delete(e)}function LA(){Tf=!1,Nr!==null&&Jl(Nr)&&(Nr=null),Or!==null&&Jl(Or)&&(Or=null),Dr!==null&&Jl(Dr)&&(Dr=null),ta.forEach(ev),na.forEach(ev)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,LA)))}function ra(t){function e(i){return go(i,t)}if(0<wl.length){go(wl[0],t);for(var n=1;n<wl.length;n++){var r=wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&go(Nr,t),Or!==null&&go(Or,t),Dr!==null&&go(Dr,t),ta.forEach(e),na.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)r1(n),n.blockedOn===null&&wr.shift()}var gs=hr.ReactCurrentBatchConfig,Tu=!0;function MA(t,e,n,r){var i=de,s=gs.transition;gs.transition=null;try{de=1,om(t,e,n,r)}finally{de=i,gs.transition=s}}function VA(t,e,n,r){var i=de,s=gs.transition;gs.transition=null;try{de=4,om(t,e,n,r)}finally{de=i,gs.transition=s}}function om(t,e,n,r){if(Tu){var i=xf(t,e,n,r);if(i===null)hd(t,e,r,xu,n),Zy(t,r);else if(DA(i,t,e,n,r))r.stopPropagation();else if(Zy(t,r),e&4&&-1<OA.indexOf(t)){for(;i!==null;){var s=Ua(i);if(s!==null&&Zw(s),s=xf(t,e,n,r),s===null&&hd(t,e,r,xu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hd(t,e,r,null,n)}}var xu=null;function xf(t,e,n,r){if(xu=null,t=nm(r),t=di(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xu=t,null}function i1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xA()){case rm:return 1;case Qw:return 4;case Eu:case SA:return 16;case Yw:return 536870912;default:return 16}default:return 16}}var Cr=null,am=null,Zl=null;function s1(){if(Zl)return Zl;var t,e=am,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zl=i.slice(t,1<r?1-r:void 0)}function eu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function tv(){return!1}function Qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:tv,this.isPropagationStopped=tv,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lm=Qt(Qs),ja=Re({},Qs,{view:0,detail:0}),$A=Qt(ja),nd,rd,yo,Cc=Re({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(nd=t.screenX-yo.screenX,rd=t.screenY-yo.screenY):rd=nd=0,yo=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:rd}}),nv=Qt(Cc),FA=Re({},Cc,{dataTransfer:0}),jA=Qt(FA),UA=Re({},ja,{relatedTarget:0}),id=Qt(UA),zA=Re({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),BA=Qt(zA),WA=Re({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HA=Qt(WA),qA=Re({},Qs,{data:0}),rv=Qt(qA),GA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QA[t])?!!e[t]:!1}function um(){return YA}var XA=Re({},ja,{key:function(t){if(t.key){var e=GA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:um,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JA=Qt(XA),ZA=Re({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iv=Qt(ZA),eC=Re({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:um}),tC=Qt(eC),nC=Re({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rC=Qt(nC),iC=Re({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sC=Qt(iC),oC=[9,13,27,32],cm=er&&"CompositionEvent"in window,$o=null;er&&"documentMode"in document&&($o=document.documentMode);var aC=er&&"TextEvent"in window&&!$o,o1=er&&(!cm||$o&&8<$o&&11>=$o),sv=String.fromCharCode(32),ov=!1;function a1(t,e){switch(t){case"keyup":return oC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function lC(t,e){switch(t){case"compositionend":return l1(e);case"keypress":return e.which!==32?null:(ov=!0,sv);case"textInput":return t=e.data,t===sv&&ov?null:t;default:return null}}function uC(t,e){if(es)return t==="compositionend"||!cm&&a1(t,e)?(t=s1(),Zl=am=Cr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o1&&e.locale!=="ko"?null:e.data;default:return null}}var cC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cC[t.type]:e==="textarea"}function u1(t,e,n,r){jw(r),e=Su(e,"onChange"),0<e.length&&(n=new lm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fo=null,ia=null;function hC(t){w1(t,0)}function kc(t){var e=rs(t);if(Ow(e))return t}function dC(t,e){if(t==="change")return e}var c1=!1;if(er){var sd;if(er){var od="oninput"in document;if(!od){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),od=typeof lv.oninput=="function"}sd=od}else sd=!1;c1=sd&&(!document.documentMode||9<document.documentMode)}function uv(){Fo&&(Fo.detachEvent("onpropertychange",h1),ia=Fo=null)}function h1(t){if(t.propertyName==="value"&&kc(ia)){var e=[];u1(e,ia,t,nm(t)),Ww(hC,e)}}function fC(t,e,n){t==="focusin"?(uv(),Fo=e,ia=n,Fo.attachEvent("onpropertychange",h1)):t==="focusout"&&uv()}function pC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(ia)}function mC(t,e){if(t==="click")return kc(e)}function gC(t,e){if(t==="input"||t==="change")return kc(e)}function yC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:yC;function sa(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!of.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,e){var n=cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cv(n)}}function d1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f1(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vC(t){var e=f1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d1(n.ownerDocument.documentElement,n)){if(r!==null&&hm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hv(n,s);var o=hv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _C=er&&"documentMode"in document&&11>=document.documentMode,ts=null,Sf=null,jo=null,Af=!1;function dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||ts==null||ts!==vu(r)||(r=ts,"selectionStart"in r&&hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&sa(jo,r)||(jo=r,r=Su(Sf,"onSelect"),0<r.length&&(e=new lm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function Il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},ad={},p1={};er&&(p1=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Rc(t){if(ad[t])return ad[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p1)return ad[t]=e[n];return t}var m1=Rc("animationend"),g1=Rc("animationiteration"),y1=Rc("animationstart"),v1=Rc("transitionend"),_1=new Map,fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){_1.set(t,e),Vi(e,[t])}for(var ld=0;ld<fv.length;ld++){var ud=fv[ld],wC=ud.toLowerCase(),EC=ud[0].toUpperCase()+ud.slice(1);ni(wC,"on"+EC)}ni(m1,"onAnimationEnd");ni(g1,"onAnimationIteration");ni(y1,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(v1,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wA(r,e,void 0,t),t.currentTarget=null}function w1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pv(i,a,u),s=l}}}if(wu)throw t=Ef,wu=!1,Ef=null,t}function _e(t,e){var n=e[bf];n===void 0&&(n=e[bf]=new Set);var r=t+"__bubble";n.has(r)||(E1(e,t,2,!1),n.add(r))}function cd(t,e,n){var r=0;e&&(r|=4),E1(n,t,r,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Tl]){t[Tl]=!0,kw.forEach(function(n){n!=="selectionchange"&&(IC.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,cd("selectionchange",!1,e))}}function E1(t,e,n,r){switch(i1(e)){case 1:var i=MA;break;case 4:i=VA;break;default:i=om}n=i.bind(null,e,n,t),i=void 0,!wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=di(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ww(function(){var u=s,c=nm(n),h=[];e:{var d=_1.get(t);if(d!==void 0){var p=lm,y=t;switch(t){case"keypress":if(eu(n)===0)break e;case"keydown":case"keyup":p=JA;break;case"focusin":y="focus",p=id;break;case"focusout":y="blur",p=id;break;case"beforeblur":case"afterblur":p=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tC;break;case m1:case g1:case y1:p=BA;break;case v1:p=rC;break;case"scroll":p=$A;break;case"wheel":p=sC;break;case"copy":case"cut":case"paste":p=HA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=iv}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,_;f!==null;){_=f;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,m!==null&&(E=ea(f,m),E!=null&&v.push(aa(f,E,_)))),w)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==vf&&(y=n.relatedTarget||n.fromElement)&&(di(y)||y[tr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?di(y):null,y!==null&&(w=$i(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=nv,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=iv,E="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:rs(p),_=y==null?d:rs(y),d=new v(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=_,E=null,di(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=_,v.relatedTarget=w,E=v),w=E,p&&y)t:{for(v=p,m=y,f=0,_=v;_;_=Gi(_))f++;for(_=0,E=m;E;E=Gi(E))_++;for(;0<f-_;)v=Gi(v),f--;for(;0<_-f;)m=Gi(m),_--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Gi(v),m=Gi(m)}v=null}else v=null;p!==null&&mv(h,d,p,v,!1),y!==null&&w!==null&&mv(h,w,y,v,!0)}}e:{if(d=u?rs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var x=dC;else if(av(d))if(c1)x=gC;else{x=pC;var A=fC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=mC);if(x&&(x=x(t,u))){u1(h,x,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&ff(d,"number",d.value)}switch(A=u?rs(u):window,t){case"focusin":(av(A)||A.contentEditable==="true")&&(ts=A,Sf=u,jo=null);break;case"focusout":jo=Sf=ts=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,dv(h,n,c);break;case"selectionchange":if(_C)break;case"keydown":case"keyup":dv(h,n,c)}var b;if(cm)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else es?a1(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(o1&&n.locale!=="ko"&&(es||N!=="onCompositionStart"?N==="onCompositionEnd"&&es&&(b=s1()):(Cr=c,am="value"in Cr?Cr.value:Cr.textContent,es=!0)),A=Su(u,N),0<A.length&&(N=new rv(N,t,null,n,c),h.push({event:N,listeners:A}),b?N.data=b:(b=l1(n),b!==null&&(N.data=b)))),(b=aC?lC(t,n):uC(t,n))&&(u=Su(u,"onBeforeInput"),0<u.length&&(c=new rv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}w1(h,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):i||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TC=/\r\n?/g,xC=/\u0000|\uFFFD/g;function gv(t){return(typeof t=="string"?t:""+t).replace(TC,`
`).replace(xC,"")}function xl(t,e,n){if(e=gv(e),gv(t)!==e&&n)throw Error(k(425))}function Au(){}var Cf=null,kf=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pf=typeof setTimeout=="function"?setTimeout:void 0,SC=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,AC=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(t){return yv.resolve(null).then(t).catch(CC)}:Pf;function CC(t){setTimeout(function(){throw t})}function dd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),An="__reactFiber$"+Ys,la="__reactProps$"+Ys,tr="__reactContainer$"+Ys,bf="__reactEvents$"+Ys,kC="__reactListeners$"+Ys,RC="__reactHandles$"+Ys;function di(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vv(t);t!==null;){if(n=t[An])return n;t=vv(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[An]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Pc(t){return t[la]||null}var Nf=[],is=-1;function ri(t){return{current:t}}function Ie(t){0>is||(t.current=Nf[is],Nf[is]=null,is--)}function ve(t,e){is++,Nf[is]=t.current,t.current=e}var Qr={},Tt=ri(Qr),Vt=ri(!1),xi=Qr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Cu(){Ie(Vt),Ie(Tt)}function _v(t,e,n){if(Tt.current!==Qr)throw Error(k(168));ve(Tt,e),ve(Vt,n)}function I1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,fA(t)||"Unknown",i));return Re({},n,r)}function ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,xi=Tt.current,ve(Tt,t),ve(Vt,Vt.current),!0}function wv(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=I1(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Vt),Ie(Tt),ve(Tt,t)):Ie(Vt),ve(Vt,n)}var Wn=null,bc=!1,fd=!1;function T1(t){Wn===null?Wn=[t]:Wn.push(t)}function PC(t){bc=!0,T1(t)}function ii(){if(!fd&&Wn!==null){fd=!0;var t=0,e=de;try{var n=Wn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,bc=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),Kw(rm,ii),i}finally{de=e,fd=!1}}return null}var ss=[],os=0,Ru=null,Pu=0,Xt=[],Jt=0,Si=null,qn=1,Gn="";function li(t,e){ss[os++]=Pu,ss[os++]=Ru,Ru=t,Pu=e}function x1(t,e,n){Xt[Jt++]=qn,Xt[Jt++]=Gn,Xt[Jt++]=Si,Si=t;var r=qn;t=Gn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-yn(e)+i|n<<i|r,Gn=s+t}else qn=1<<s|n<<i|r,Gn=t}function dm(t){t.return!==null&&(li(t,1),x1(t,1,0))}function fm(t){for(;t===Ru;)Ru=ss[--os],ss[os]=null,Pu=ss[--os],ss[os]=null;for(;t===Si;)Si=Xt[--Jt],Xt[Jt]=null,Gn=Xt[--Jt],Xt[Jt]=null,qn=Xt[--Jt],Xt[Jt]=null}var Wt=null,zt=null,Se=!1,pn=null;function S1(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ev(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:qn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function Of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Df(t){if(Se){var e=zt;if(e){var n=e;if(!Ev(t,e)){if(Of(t))throw Error(k(418));e=Lr(n.nextSibling);var r=Wt;e&&Ev(t,e)?S1(r,n):(t.flags=t.flags&-4097|2,Se=!1,Wt=t)}}else{if(Of(t))throw Error(k(418));t.flags=t.flags&-4097|2,Se=!1,Wt=t}}}function Iv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Sl(t){if(t!==Wt)return!1;if(!Se)return Iv(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=zt)){if(Of(t))throw A1(),Error(k(418));for(;e;)S1(t,e),e=Lr(e.nextSibling)}if(Iv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?Lr(t.stateNode.nextSibling):null;return!0}function A1(){for(var t=zt;t;)t=Lr(t.nextSibling)}function Ps(){zt=Wt=null,Se=!1}function pm(t){pn===null?pn=[t]:pn.push(t)}var bC=hr.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bu=ri(null),Nu=null,as=null,mm=null;function gm(){mm=as=Nu=null}function ym(t){var e=bu.current;Ie(bu),t._currentValue=e}function Lf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Nu=t,mm=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(mm!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(Nu===null)throw Error(k(308));as=t,Nu.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var fi=null;function vm(t){fi===null?fi=[t]:fi.push(t)}function C1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vm(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function _m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,vm(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function tu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,im(t,n)}}function Tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ou(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=Re({},h,d);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=h}}function xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var R1=new Cw.Component().refs;function Mf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=$r(t),s=Jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(vn(e,t,i,r),tu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=$r(t),s=Jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(vn(e,t,i,r),tu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=$r(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(vn(e,t,r,n),tu(e,t,r))}};function Sv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function P1(t,e,n){var r=!1,i=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=$t(e)?xi:Tt.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):Qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Av(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=R1,_m(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=$t(e)?xi:Tt.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nc.enqueueReplaceState(i,i.state,null),Ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===R1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cv(t){var e=t._init;return e(t._payload)}function b1(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Fr(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,E){return f===null||f.tag!==6?(f=wd(_,m.mode,E),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,E){var x=_.type;return x===Zi?c(m,f,_.props.children,E,_.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vr&&Cv(x)===f.type)?(E=i(f,_.props),E.ref=vo(m,f,_),E.return=m,E):(E=au(_.type,_.key,_.props,null,m.mode,E),E.ref=vo(m,f,_),E.return=m,E)}function u(m,f,_,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Ed(_,m.mode,E),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function c(m,f,_,E,x){return f===null||f.tag!==7?(f=wi(_,m.mode,E,x),f.return=m,f):(f=i(f,_),f.return=m,f)}function h(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wd(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ml:return _=au(f.type,f.key,f.props,null,m.mode,_),_.ref=vo(m,null,f),_.return=m,_;case Ji:return f=Ed(f,m.mode,_),f.return=m,f;case vr:var E=f._init;return h(m,E(f._payload),_)}if(So(f)||fo(f))return f=wi(f,m.mode,_,null),f.return=m,f;Al(m,f)}return null}function d(m,f,_,E){var x=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(m,f,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:return _.key===x?l(m,f,_,E):null;case Ji:return _.key===x?u(m,f,_,E):null;case vr:return x=_._init,d(m,f,x(_._payload),E)}if(So(_)||fo(_))return x!==null?null:c(m,f,_,E,null);Al(m,_)}return null}function p(m,f,_,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(_)||null,a(f,m,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ml:return m=m.get(E.key===null?_:E.key)||null,l(f,m,E,x);case Ji:return m=m.get(E.key===null?_:E.key)||null,u(f,m,E,x);case vr:var A=E._init;return p(m,f,_,A(E._payload),x)}if(So(E)||fo(E))return m=m.get(_)||null,c(f,m,E,x,null);Al(f,E)}return null}function y(m,f,_,E){for(var x=null,A=null,b=f,N=f=0,H=null;b!==null&&N<_.length;N++){b.index>N?(H=b,b=null):H=b.sibling;var U=d(m,b,_[N],E);if(U===null){b===null&&(b=H);break}t&&b&&U.alternate===null&&e(m,b),f=s(U,f,N),A===null?x=U:A.sibling=U,A=U,b=H}if(N===_.length)return n(m,b),Se&&li(m,N),x;if(b===null){for(;N<_.length;N++)b=h(m,_[N],E),b!==null&&(f=s(b,f,N),A===null?x=b:A.sibling=b,A=b);return Se&&li(m,N),x}for(b=r(m,b);N<_.length;N++)H=p(b,m,N,_[N],E),H!==null&&(t&&H.alternate!==null&&b.delete(H.key===null?N:H.key),f=s(H,f,N),A===null?x=H:A.sibling=H,A=H);return t&&b.forEach(function(me){return e(m,me)}),Se&&li(m,N),x}function v(m,f,_,E){var x=fo(_);if(typeof x!="function")throw Error(k(150));if(_=x.call(_),_==null)throw Error(k(151));for(var A=x=null,b=f,N=f=0,H=null,U=_.next();b!==null&&!U.done;N++,U=_.next()){b.index>N?(H=b,b=null):H=b.sibling;var me=d(m,b,U.value,E);if(me===null){b===null&&(b=H);break}t&&b&&me.alternate===null&&e(m,b),f=s(me,f,N),A===null?x=me:A.sibling=me,A=me,b=H}if(U.done)return n(m,b),Se&&li(m,N),x;if(b===null){for(;!U.done;N++,U=_.next())U=h(m,U.value,E),U!==null&&(f=s(U,f,N),A===null?x=U:A.sibling=U,A=U);return Se&&li(m,N),x}for(b=r(m,b);!U.done;N++,U=_.next())U=p(b,m,N,U.value,E),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?N:U.key),f=s(U,f,N),A===null?x=U:A.sibling=U,A=U);return t&&b.forEach(function(Ae){return e(m,Ae)}),Se&&li(m,N),x}function w(m,f,_,E){if(typeof _=="object"&&_!==null&&_.type===Zi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:e:{for(var x=_.key,A=f;A!==null;){if(A.key===x){if(x=_.type,x===Zi){if(A.tag===7){n(m,A.sibling),f=i(A,_.props.children),f.return=m,m=f;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vr&&Cv(x)===A.type){n(m,A.sibling),f=i(A,_.props),f.ref=vo(m,A,_),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}_.type===Zi?(f=wi(_.props.children,m.mode,E,_.key),f.return=m,m=f):(E=au(_.type,_.key,_.props,null,m.mode,E),E.ref=vo(m,f,_),E.return=m,m=E)}return o(m);case Ji:e:{for(A=_.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Ed(_,m.mode,E),f.return=m,m=f}return o(m);case vr:return A=_._init,w(m,f,A(_._payload),E)}if(So(_))return y(m,f,_,E);if(fo(_))return v(m,f,_,E);Al(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=wd(_,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return w}var bs=b1(!0),N1=b1(!1),za={},bn=ri(za),ua=ri(za),ca=ri(za);function pi(t){if(t===za)throw Error(k(174));return t}function wm(t,e){switch(ve(ca,e),ve(ua,t),ve(bn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}Ie(bn),ve(bn,e)}function Ns(){Ie(bn),Ie(ua),Ie(ca)}function O1(t){pi(ca.current);var e=pi(bn.current),n=mf(e,t.type);e!==n&&(ve(ua,t),ve(bn,n))}function Em(t){ua.current===t&&(Ie(bn),Ie(ua))}var Ce=ri(0);function Du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function Im(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var nu=hr.ReactCurrentDispatcher,md=hr.ReactCurrentBatchConfig,Ai=0,ke=null,We=null,Qe=null,Lu=!1,Uo=!1,ha=0,NC=0;function ct(){throw Error(k(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function xm(t,e,n,r,i,s){if(Ai=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nu.current=t===null||t.memoizedState===null?MC:VC,t=n(r,i),Uo){s=0;do{if(Uo=!1,ha=0,25<=s)throw Error(k(301));s+=1,Qe=We=null,e.updateQueue=null,nu.current=$C,t=n(r,i)}while(Uo)}if(nu.current=Mu,e=We!==null&&We.next!==null,Ai=0,Qe=We=ke=null,Lu=!1,e)throw Error(k(300));return t}function Sm(){var t=ha!==0;return ha=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ke.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function sn(){if(We===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Qe===null?ke.memoizedState:Qe.next;if(e!==null)Qe=e,We=t;else{if(t===null)throw Error(k(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?ke.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function da(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=sn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ke.lanes|=c,Ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_n(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yd(t){var e=sn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function D1(){}function L1(t,e){var n=ke,r=sn(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Am($1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,fa(9,V1.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(k(349));Ai&30||M1(n,e,i)}return i}function M1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V1(t,e,n,r){e.value=n,e.getSnapshot=r,F1(e)&&j1(t)}function $1(t,e,n){return n(function(){F1(e)&&j1(t)})}function F1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function j1(t){var e=nr(t,1);e!==null&&vn(e,t,1,-1)}function kv(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=LC.bind(null,ke,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U1(){return sn().memoizedState}function ru(t,e,n,r){var i=Sn();ke.flags|=t,i.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function Oc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&Tm(r,o.deps)){i.memoizedState=fa(e,n,s,r);return}}ke.flags|=t,i.memoizedState=fa(1|e,n,s,r)}function Rv(t,e){return ru(8390656,8,t,e)}function Am(t,e){return Oc(2048,8,t,e)}function z1(t,e){return Oc(4,2,t,e)}function B1(t,e){return Oc(4,4,t,e)}function W1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H1(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,W1.bind(null,e,t),n)}function Cm(){}function q1(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G1(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K1(t,e,n){return Ai&21?(_n(n,e)||(n=Xw(),ke.lanes|=n,Ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function OC(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=md.transition;md.transition={};try{t(!1),e()}finally{de=n,md.transition=r}}function Q1(){return sn().memoizedState}function DC(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y1(t))X1(e,n);else if(n=C1(t,e,n,r),n!==null){var i=Rt();vn(n,t,r,i),J1(n,e,r)}}function LC(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y1(t))X1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var l=e.interleaved;l===null?(i.next=i,vm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=C1(t,e,i,r),n!==null&&(i=Rt(),vn(n,t,r,i),J1(n,e,r))}}function Y1(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function X1(t,e){Uo=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,im(t,n)}}var Mu={readContext:rn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},MC={readContext:rn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Rv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ru(4194308,4,W1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return ru(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DC.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:kv,useDebugValue:Cm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=kv(!1),e=t[0];return t=OC.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=Sn();if(Se){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ye===null)throw Error(k(349));Ai&30||M1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rv($1.bind(null,r,s,t),[t]),r.flags|=2048,fa(9,V1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ye.identifierPrefix;if(Se){var n=Gn,r=qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VC={readContext:rn,useCallback:q1,useContext:rn,useEffect:Am,useImperativeHandle:H1,useInsertionEffect:z1,useLayoutEffect:B1,useMemo:G1,useReducer:gd,useRef:U1,useState:function(){return gd(da)},useDebugValue:Cm,useDeferredValue:function(t){var e=sn();return K1(e,We.memoizedState,t)},useTransition:function(){var t=gd(da)[0],e=sn().memoizedState;return[t,e]},useMutableSource:D1,useSyncExternalStore:L1,useId:Q1,unstable_isNewReconciler:!1},$C={readContext:rn,useCallback:q1,useContext:rn,useEffect:Am,useImperativeHandle:H1,useInsertionEffect:z1,useLayoutEffect:B1,useMemo:G1,useReducer:yd,useRef:U1,useState:function(){return yd(da)},useDebugValue:Cm,useDeferredValue:function(t){var e=sn();return We===null?e.memoizedState=t:K1(e,We.memoizedState,t)},useTransition:function(){var t=yd(da)[0],e=sn().memoizedState;return[t,e]},useMutableSource:D1,useSyncExternalStore:L1,useId:Q1,unstable_isNewReconciler:!1};function Os(t,e){try{var n="",r=e;do n+=dA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FC=typeof WeakMap=="function"?WeakMap:Map;function Z1(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$u||($u=!0,Kf=r),$f(t,e)},n}function eE(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$f(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZC.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var jC=hr.ReactCurrentOwner,Lt=!1;function Ct(t,e,n,r){e.child=t===null?N1(e,null,n,r):bs(e,t.child,n,r)}function Ov(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=xm(t,e,n,r,s,i),n=Sm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Se&&n&&dm(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tE(t,e,s,r,i)):(t=au(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function tE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,rr(t,e,i)}return Ff(t,e,n,r,i)}function nE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(us,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(us,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(us,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(us,Ut),Ut|=r;return Ct(t,e,i,n),e.child}function rE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ff(t,e,n,r,i){var s=$t(n)?xi:Tt.current;return s=Rs(e,s),ys(e,i),n=xm(t,e,n,r,s,i),r=Sm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Se&&r&&dm(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Lv(t,e,n,r,i){if($t(n)){var s=!0;ku(e)}else s=!1;if(ys(e,i),e.stateNode===null)iu(t,e),P1(e,n,r),Vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=$t(n)?xi:Tt.current,u=Rs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Av(e,o,r,u),_r=!1;var d=e.memoizedState;o.state=d,Ou(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Vt.current||_r?(typeof c=="function"&&(Mf(e,n,c,r),l=e.memoizedState),(a=_r||Sv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,k1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=$t(n)?xi:Tt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Av(e,o,r,l),_r=!1,d=e.memoizedState,o.state=d,Ou(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Vt.current||_r?(typeof p=="function"&&(Mf(e,n,p,r),y=e.memoizedState),(u=_r||Sv(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return jf(t,e,n,r,s,i)}function jf(t,e,n,r,i,s){rE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wv(e,n,!1),rr(t,e,s);r=e.stateNode,jC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&wv(e,n,!0),e.child}function iE(t){var e=t.stateNode;e.pendingContext?_v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_v(t,e.context,!1),wm(t,e.containerInfo)}function Mv(t,e,n,r,i){return Ps(),pm(i),e.flags|=256,Ct(t,e,n,r),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function sE(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ce,i&1),t===null)return Df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,r,0,null),t=wi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zf(n),e.memoizedState=Uf,t):km(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=wi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uf,r}return s=t.child,t=s.sibling,r=Fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function km(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&pm(r),bs(e,t.child,null,n),t=km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=vd(Error(k(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mc({mode:"visible",children:r.children},i,0,null),s=wi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=Uf,s);if(!(e.mode&1))return Cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=vd(s,r,void 0),Cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),vn(r,t,i,-1))}return Dm(),r=vd(Error(k(421))),Cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ek.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Lr(i.nextSibling),Wt=e,Se=!0,pn=null,t!==null&&(Xt[Jt++]=qn,Xt[Jt++]=Gn,Xt[Jt++]=Si,qn=t.id,Gn=t.overflow,Si=e),e=km(e,r.children),e.flags|=4096,e)}function Vv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lf(t.return,e,n)}function _d(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function oE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vv(t,n,e);else if(t.tag===19)Vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_d(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_d(e,!0,n,null,s);break;case"together":_d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zC(t,e,n){switch(e.tag){case 3:iE(e),Ps();break;case 5:O1(e);break;case 1:$t(e.type)&&ku(e);break;case 4:wm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?sE(t,e,n):(ve(Ce,Ce.current&1),t=rr(t,e,n),t!==null?t.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,nE(t,e,n)}return rr(t,e,n)}var aE,Bf,lE,uE;aE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};lE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi(bn.current);var s=null;switch(n){case"input":i=hf(t,i),r=hf(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=pf(t,i),r=pf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Au)}gf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uE=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BC(t,e,n){var r=e.pendingProps;switch(fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return $t(e.type)&&Cu(),ht(e),null;case 3:return r=e.stateNode,Ns(),Ie(Vt),Ie(Tt),Im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(Xf(pn),pn=null))),Bf(t,e),ht(e),null;case 5:Em(e);var i=pi(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)lE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ht(e),null}if(t=pi(bn.current),Sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[An]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Co.length;i++)_e(Co[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":qy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Ky(r,s),_e("invalid",r)}gf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,a,t),i=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":gl(r),Gy(r,s,!0);break;case"textarea":gl(r),Qy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[la]=r,aE(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Co.length;i++)_e(Co[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":qy(t,r),i=hf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Ky(t,r),i=pf(t,r),_e("invalid",t);break;default:i=r}gf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Jp(t,s,l,o))}switch(n){case"input":gl(t),Gy(t,r,!1);break;case"textarea":gl(t),Qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)uE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=pi(ca.current),pi(bn.current),Sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return ht(e),null;case 13:if(Ie(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&zt!==null&&e.mode&1&&!(e.flags&128))A1(),Ps(),e.flags|=98560,s=!1;else if(s=Sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[An]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else pn!==null&&(Xf(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?He===0&&(He=3):Dm())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Ns(),Bf(t,e),t===null&&oa(e.stateNode.containerInfo),ht(e),null;case 10:return ym(e.type._context),ht(e),null;case 17:return $t(e.type)&&Cu(),ht(e),null;case 19:if(Ie(Ce),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_o(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Du(t),o!==null){for(e.flags|=128,_o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Ds&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304)}else{if(!r)if(t=Du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ht(e),null}else 2*Le()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return Om(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function WC(t,e){switch(fm(e),e.tag){case 1:return $t(e.type)&&Cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),Ie(Vt),Ie(Tt),Im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Em(e),null;case 13:if(Ie(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ce),null;case 4:return Ns(),null;case 10:return ym(e.type._context),null;case 22:case 23:return Om(),null;case 24:return null;default:return null}}var kl=!1,mt=!1,HC=typeof WeakSet=="function"?WeakSet:Set,j=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Wf(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var $v=!1;function qC(t,e){if(Cf=Tu,t=f1(),hm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kf={focusedElem:t,selectionRange:n},Tu=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:dn(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){Ne(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return y=$v,$v=!1,y}function zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wf(e,n,s)}i=i.next}while(i!==r)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cE(t){var e=t.alternate;e!==null&&(t.alternate=null,cE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[la],delete e[bf],delete e[kC],delete e[RC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hE(t){return t.tag===5||t.tag===3||t.tag===4}function Fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Au));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var rt=null,fn=!1;function gr(t,e,n){for(n=n.child;n!==null;)dE(t,e,n),n=n.sibling}function dE(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:mt||ls(n,e);case 6:var r=rt,i=fn;rt=null,gr(t,e,n),rt=r,fn=i,rt!==null&&(fn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(fn?(t=rt,n=n.stateNode,t.nodeType===8?dd(t.parentNode,n):t.nodeType===1&&dd(t,n),ra(t)):dd(rt,n.stateNode));break;case 4:r=rt,i=fn,rt=n.stateNode.containerInfo,fn=!0,gr(t,e,n),rt=r,fn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wf(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!mt&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,gr(t,e,n),mt=r):gr(t,e,n);break;default:gr(t,e,n)}}function jv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HC),e.forEach(function(r){var i=tk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,fn=!1;break e;case 3:rt=a.stateNode.containerInfo,fn=!0;break e;case 4:rt=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(rt===null)throw Error(k(160));dE(s,o,i),rt=null,fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fE(e,t),e=e.sibling}function fE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Tn(t),r&4){try{zo(3,t,t.return),Dc(3,t)}catch(v){Ne(t,t.return,v)}try{zo(5,t,t.return)}catch(v){Ne(t,t.return,v)}}break;case 1:hn(e,t),Tn(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(hn(e,t),Tn(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(v){Ne(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dw(i,s),yf(a,o);var u=yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Fw(i,h):c==="dangerouslySetInnerHTML"?Vw(i,h):c==="children"?Zo(i,h):Jp(i,c,h,u)}switch(a){case"input":df(i,s);break;case"textarea":Lw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?fs(i,!!s.multiple,s.defaultValue,!0):fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(v){Ne(t,t.return,v)}}break;case 6:if(hn(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ne(t,t.return,v)}}break;case 3:if(hn(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(v){Ne(t,t.return,v)}break;case 4:hn(e,t),Tn(t);break;case 13:hn(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=Le())),r&4&&jv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||c,hn(e,t),mt=u):hn(e,t),Tn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(h=j=c;j!==null;){switch(d=j,p=d.child,d.tag){case 0:case 11:case 14:case 15:zo(4,d,d.return);break;case 1:ls(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ne(r,n,v)}}break;case 5:ls(d,d.return);break;case 22:if(d.memoizedState!==null){zv(h);continue}}p!==null?(p.return=d,j=p):zv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$w("display",o))}catch(v){Ne(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ne(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:hn(e,t),Tn(t),r&4&&jv(t);break;case 21:break;default:hn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=Fv(t);Gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fv(t);qf(t,a,o);break;default:throw Error(k(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GC(t,e,n){j=t,pE(t)}function pE(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||kl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=kl;var u=mt;if(kl=o,(mt=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Bv(i):l!==null?(l.return=o,j=l):Bv(i);for(;s!==null;)j=s,pE(s),s=s.sibling;j=i,kl=a,mt=u}Uv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Uv(t)}}function Uv(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}mt||e.flags&512&&Hf(e)}catch(d){Ne(e,e.return,d)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function zv(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Bv(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Hf(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Hf(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var KC=Math.ceil,Vu=hr.ReactCurrentDispatcher,Rm=hr.ReactCurrentOwner,tn=hr.ReactCurrentBatchConfig,se=0,Ye=null,je=null,ot=0,Ut=0,us=ri(0),He=0,pa=null,Ci=0,Lc=0,Pm=0,Bo=null,Ot=null,bm=0,Ds=1/0,Bn=null,$u=!1,Kf=null,Vr=null,Rl=!1,kr=null,Fu=0,Wo=0,Qf=null,su=-1,ou=0;function Rt(){return se&6?Le():su!==-1?su:su=Le()}function $r(t){return t.mode&1?se&2&&ot!==0?ot&-ot:bC.transition!==null?(ou===0&&(ou=Xw()),ou):(t=de,t!==0||(t=window.event,t=t===void 0?16:i1(t.type)),t):1}function vn(t,e,n,r){if(50<Wo)throw Wo=0,Qf=null,Error(k(185));Fa(t,n,r),(!(se&2)||t!==Ye)&&(t===Ye&&(!(se&2)&&(Lc|=n),He===4&&Er(t,ot)),Ft(t,r),n===1&&se===0&&!(e.mode&1)&&(Ds=Le()+500,bc&&ii()))}function Ft(t,e){var n=t.callbackNode;bA(t,e);var r=Iu(t,t===Ye?ot:0);if(r===0)n!==null&&Jy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jy(n),e===1)t.tag===0?PC(Wv.bind(null,t)):T1(Wv.bind(null,t)),AC(function(){!(se&6)&&ii()}),n=null;else{switch(Jw(r)){case 1:n=rm;break;case 4:n=Qw;break;case 16:n=Eu;break;case 536870912:n=Yw;break;default:n=Eu}n=IE(n,mE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mE(t,e){if(su=-1,ou=0,se&6)throw Error(k(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=Iu(t,t===Ye?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ju(t,r);else{e=r;var i=se;se|=2;var s=yE();(Ye!==t||ot!==e)&&(Bn=null,Ds=Le()+500,_i(t,e));do try{XC();break}catch(a){gE(t,a)}while(1);gm(),Vu.current=s,se=i,je!==null?e=0:(Ye=null,ot=0,e=He)}if(e!==0){if(e===2&&(i=If(t),i!==0&&(r=i,e=Yf(t,i))),e===1)throw n=pa,_i(t,0),Er(t,r),Ft(t,Le()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!QC(i)&&(e=ju(t,r),e===2&&(s=If(t),s!==0&&(r=s,e=Yf(t,s))),e===1))throw n=pa,_i(t,0),Er(t,r),Ft(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ui(t,Ot,Bn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=bm+500-Le(),10<e)){if(Iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pf(ui.bind(null,t,Ot,Bn),e);break}ui(t,Ot,Bn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KC(r/1960))-r,10<r){t.timeoutHandle=Pf(ui.bind(null,t,Ot,Bn),r);break}ui(t,Ot,Bn);break;case 5:ui(t,Ot,Bn);break;default:throw Error(k(329))}}}return Ft(t,Le()),t.callbackNode===n?mE.bind(null,t):null}function Yf(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=ju(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&Xf(e)),t}function Xf(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function QC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Pm,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Wv(t){if(se&6)throw Error(k(327));vs();var e=Iu(t,0);if(!(e&1))return Ft(t,Le()),null;var n=ju(t,e);if(t.tag!==0&&n===2){var r=If(t);r!==0&&(e=r,n=Yf(t,r))}if(n===1)throw n=pa,_i(t,0),Er(t,e),Ft(t,Le()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Ot,Bn),Ft(t,Le()),null}function Nm(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ds=Le()+500,bc&&ii())}}function ki(t){kr!==null&&kr.tag===0&&!(se&6)&&vs();var e=se;se|=1;var n=tn.transition,r=de;try{if(tn.transition=null,de=1,t)return t()}finally{de=r,tn.transition=n,se=e,!(se&6)&&ii()}}function Om(){Ut=us.current,Ie(us)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SC(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(fm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cu();break;case 3:Ns(),Ie(Vt),Ie(Tt),Im();break;case 5:Em(r);break;case 4:Ns();break;case 13:Ie(Ce);break;case 19:Ie(Ce);break;case 10:ym(r.type._context);break;case 22:case 23:Om()}n=n.return}if(Ye=t,je=t=Fr(t.current,null),ot=Ut=e,He=0,pa=null,Pm=Lc=Ci=0,Ot=Bo=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function gE(t,e){do{var n=je;try{if(gm(),nu.current=Mu,Lu){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lu=!1}if(Ai=0,Qe=We=ke=null,Uo=!1,ha=0,Rm.current=null,n===null||n.return===null){He=1,pa=e,je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bv(o);if(p!==null){p.flags&=-257,Nv(p,o,a,s,e),p.mode&1&&Pv(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Pv(s,u,e),Dm();break e}l=Error(k(426))}}else if(Se&&a.mode&1){var w=bv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Nv(w,o,a,s,e),pm(Os(l,a));break e}}s=l=Os(l,a),He!==4&&(He=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Z1(s,l,e);Tv(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vr===null||!Vr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=eE(s,a,e);Tv(s,E);break e}}s=s.return}while(s!==null)}_E(n)}catch(x){e=x,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function yE(){var t=Vu.current;return Vu.current=Mu,t===null?Mu:t}function Dm(){(He===0||He===3||He===2)&&(He=4),Ye===null||!(Ci&268435455)&&!(Lc&268435455)||Er(Ye,ot)}function ju(t,e){var n=se;se|=2;var r=yE();(Ye!==t||ot!==e)&&(Bn=null,_i(t,e));do try{YC();break}catch(i){gE(t,i)}while(1);if(gm(),se=n,Vu.current=r,je!==null)throw Error(k(261));return Ye=null,ot=0,He}function YC(){for(;je!==null;)vE(je)}function XC(){for(;je!==null&&!IA();)vE(je)}function vE(t){var e=EE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?_E(t):je=e,Rm.current=null}function _E(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WC(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,je=null;return}}else if(n=BC(n,e,Ut),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);He===0&&(He=5)}function ui(t,e,n){var r=de,i=tn.transition;try{tn.transition=null,de=1,JC(t,e,n,r)}finally{tn.transition=i,de=r}return null}function JC(t,e,n,r){do vs();while(kr!==null);if(se&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NA(t,s),t===Ye&&(je=Ye=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,IE(Eu,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=de;de=1;var a=se;se|=4,Rm.current=null,qC(t,n),fE(n,t),vC(kf),Tu=!!Cf,kf=Cf=null,t.current=n,GC(n),TA(),se=a,de=o,tn.transition=s}else t.current=n;if(Rl&&(Rl=!1,kr=t,Fu=i),s=t.pendingLanes,s===0&&(Vr=null),AA(n.stateNode),Ft(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($u)throw $u=!1,t=Kf,Kf=null,t;return Fu&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Qf?Wo++:(Wo=0,Qf=t):Wo=0,ii(),null}function vs(){if(kr!==null){var t=Jw(Fu),e=tn.transition,n=de;try{if(tn.transition=null,de=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,Fu=0,se&6)throw Error(k(331));var i=se;for(se|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:zo(8,c,s)}var h=c.child;if(h!==null)h.return=c,j=h;else for(;j!==null;){c=j;var d=c.sibling,p=c.return;if(cE(c),c===u){j=null;break}if(d!==null){d.return=p,j=d;break}j=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,j=m;break e}j=s.return}}var f=t.current;for(j=f;j!==null;){o=j;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,j=_;else e:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(x){Ne(a,a.return,x)}if(a===o){j=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,j=E;break e}j=a.return}}if(se=i,ii(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Ac,t)}catch{}r=!0}return r}finally{de=n,tn.transition=e}}return!1}function Hv(t,e,n){e=Os(n,e),e=Z1(t,e,1),t=Mr(t,e,1),e=Rt(),t!==null&&(Fa(t,1,e),Ft(t,e))}function Ne(t,e,n){if(t.tag===3)Hv(t,t,n);else for(;e!==null;){if(e.tag===3){Hv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=Os(n,t),t=eE(e,t,1),e=Mr(e,t,1),t=Rt(),e!==null&&(Fa(e,1,t),Ft(e,t));break}}e=e.return}}function ZC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(ot&n)===n&&(He===4||He===3&&(ot&130023424)===ot&&500>Le()-bm?_i(t,0):Pm|=n),Ft(t,e)}function wE(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=Rt();t=nr(t,e),t!==null&&(Fa(t,e,n),Ft(t,n))}function ek(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wE(t,n)}function tk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),wE(t,n)}var EE;EE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,zC(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Se&&e.flags&1048576&&x1(e,Pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;iu(t,e),t=e.pendingProps;var i=Rs(e,Tt.current);ys(e,n),i=xm(null,e,r,t,i,n);var s=Sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_m(e),i.updater=Nc,e.stateNode=i,i._reactInternals=e,Vf(e,r,t,n),e=jf(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&dm(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(iu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rk(r),t=dn(r,t),i){case 0:e=Ff(null,e,r,t,n);break e;case 1:e=Lv(null,e,r,t,n);break e;case 11:e=Ov(null,e,r,t,n);break e;case 14:e=Dv(null,e,r,dn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Ff(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Lv(t,e,r,i,n);case 3:e:{if(iE(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,k1(t,e),Ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Os(Error(k(423)),e),e=Mv(t,e,r,n,i);break e}else if(r!==i){i=Os(Error(k(424)),e),e=Mv(t,e,r,n,i);break e}else for(zt=Lr(e.stateNode.containerInfo.firstChild),Wt=e,Se=!0,pn=null,n=N1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),r===i){e=rr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return O1(e),t===null&&Df(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rf(r,i)?o=null:s!==null&&Rf(r,s)&&(e.flags|=32),rE(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&Df(e),null;case 13:return sE(t,e,n);case 4:return wm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Ov(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(bu,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Vt.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=rn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),Dv(t,e,r,i,n);case 15:return tE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),iu(t,e),e.tag=1,$t(r)?(t=!0,ku(e)):t=!1,ys(e,n),P1(e,r,i),Vf(e,r,i,n),jf(null,e,r,!0,t,n);case 19:return oE(t,e,n);case 22:return nE(t,e,n)}throw Error(k(156,e.tag))};function IE(t,e){return Kw(t,e)}function nk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new nk(t,e,n,r)}function Lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rk(t){if(typeof t=="function")return Lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===em)return 11;if(t===tm)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function au(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zi:return wi(n.children,i,s,e);case Zp:o=8,i|=8;break;case af:return t=en(12,n,e,i|2),t.elementType=af,t.lanes=s,t;case lf:return t=en(13,n,e,i),t.elementType=lf,t.lanes=s,t;case uf:return t=en(19,n,e,i),t.elementType=uf,t.lanes=s,t;case bw:return Mc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rw:o=10;break e;case Pw:o=9;break e;case em:o=11;break e;case tm:o=14;break e;case vr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function wi(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Mc(t,e,n,r){return t=en(22,t,r,e),t.elementType=bw,t.lanes=n,t.stateNode={isHidden:!1},t}function wd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Ed(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,r,i,s,o,a,l){return t=new ik(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_m(s),t}function sk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function TE(t){if(!t)return Qr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if($t(n))return I1(t,n,e)}return e}function xE(t,e,n,r,i,s,o,a,l){return t=Mm(n,r,!0,t,i,s,o,a,l),t.context=TE(null),n=t.current,r=Rt(),i=$r(n),s=Jn(r,i),s.callback=e??null,Mr(n,s,i),t.current.lanes=i,Fa(t,i,r),Ft(t,r),t}function Vc(t,e,n,r){var i=e.current,s=Rt(),o=$r(i);return n=TE(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(vn(t,i,o,s),tu(t,i,o)),o}function Uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vm(t,e){qv(t,e),(t=t.alternate)&&qv(t,e)}function ok(){return null}var SE=typeof reportError=="function"?reportError:function(t){console.error(t)};function $m(t){this._internalRoot=t}$c.prototype.render=$m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Vc(t,e,null,null)};$c.prototype.unmount=$m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){Vc(null,t,null,null)}),e[tr]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var e=t1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&r1(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gv(){}function ak(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Uu(o);s.call(u)}}var o=xE(e,r,t,0,null,!1,!1,"",Gv);return t._reactRootContainer=o,t[tr]=o.current,oa(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Uu(l);a.call(u)}}var l=Mm(t,0,!1,null,null,!1,!1,"",Gv);return t._reactRootContainer=l,t[tr]=l.current,oa(t.nodeType===8?t.parentNode:t),ki(function(){Vc(e,l,n,r)}),l}function jc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Uu(o);a.call(l)}}Vc(e,o,t,i)}else o=ak(n,e,t,i,r);return Uu(o)}Zw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(im(e,n|1),Ft(e,Le()),!(se&6)&&(Ds=Le()+500,ii()))}break;case 13:ki(function(){var r=nr(t,1);if(r!==null){var i=Rt();vn(r,t,1,i)}}),Vm(t,1)}};sm=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=Rt();vn(e,t,134217728,n)}Vm(t,134217728)}};e1=function(t){if(t.tag===13){var e=$r(t),n=nr(t,e);if(n!==null){var r=Rt();vn(n,t,e,r)}Vm(t,e)}};t1=function(){return de};n1=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};_f=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pc(r);if(!i)throw Error(k(90));Ow(r),df(r,i)}}}break;case"textarea":Lw(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};zw=Nm;Bw=ki;var lk={usingClientEntryPoint:!1,Events:[Ua,rs,Pc,jw,Uw,Nm]},wo={findFiberByHostInstance:di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uk={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qw(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||ok,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Ac=Pl.inject(uk),Pn=Pl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(k(200));return sk(t,e,null,n)};Kt.createRoot=function(t,e){if(!Fm(t))throw Error(k(299));var n=!1,r="",i=SE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,oa(t.nodeType===8?t.parentNode:t),new $m(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=qw(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return ki(t)};Kt.hydrate=function(t,e,n){if(!Fc(e))throw Error(k(200));return jc(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=SE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xE(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $c(e)};Kt.render=function(t,e,n){if(!Fc(e))throw Error(k(200));return jc(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(k(40));return t._reactRootContainer?(ki(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Nm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return jc(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";function AE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(AE)}catch(t){console.error(t)}}AE(),xw.exports=Kt;var CE=xw.exports,Kv=CE;sf.createRoot=Kv.createRoot,sf.hydrateRoot=Kv.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}var Rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rr||(Rr={}));const Qv="popstate";function ck(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zu(i)}return dk(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hk(){return Math.random().toString(36).substr(2,8)}function Yv(t,e){return{usr:t.state,key:t.key,idx:e}}function Jf(t,e,n,r){return n===void 0&&(n=null),ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xs(e):e,{state:n,key:e&&e.key||r||hk()})}function zu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Rr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ma({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Rr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function d(w,m){a=Rr.Push;let f=Jf(v.location,w,m);n&&n(f,w),u=c()+1;let _=Yv(f,u),E=v.createHref(f);try{o.pushState(_,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,m){a=Rr.Replace;let f=Jf(v.location,w,m);n&&n(f,w),u=c();let _=Yv(f,u),E=v.createHref(f);o.replaceState(_,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:zu(w);return Ve(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,h),l=w,()=>{i.removeEventListener(Qv,h),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let m=y(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(w){return o.go(w)}};return v}var Xv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xv||(Xv={}));function fk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Xs(e):e,i=Um(r.pathname||"/",n);if(i==null)return null;let s=kE(t);pk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Tk(s[a],Ak(i));return o}function kE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ek(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of RE(s.path))i(s,o,l)}),e}function RE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ik(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mk=/^:\w+$/,gk=3,yk=2,vk=1,_k=10,wk=-2,Jv=t=>t==="*";function Ek(t,e){let n=t.split("/"),r=n.length;return n.some(Jv)&&(r+=wk),e&&(r+=yk),n.filter(i=>!Jv(i)).reduce((i,s)=>i+(mk.test(s)?gk:s===""?vk:_k),r)}function Ik(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Tk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=xk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:jr([i,c.pathname]),pathnameBase:Pk(jr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=jr([i,c.pathnameBase]))}return s}function xk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Sk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Ck(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Sk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ak(t){try{return decodeURI(t)}catch(e){return jm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ck(t,e){try{return decodeURIComponent(t)}catch(n){return jm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Um(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function kk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xs(t):t;return{pathname:n?n.startsWith("/")?n:Rk(n,e):e,search:bk(r),hash:Nk(i)}}function Rk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Id(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xs(t):(i=ma({},t),Ve(!i.pathname||!i.pathname.includes("?"),Id("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Id("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Id("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=kk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),Pk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Nk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ok(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const PE=["post","put","patch","delete"];new Set(PE);const Dk=["get",...PE];new Set(Dk);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}const Wm=T.createContext(null),bE=T.createContext(null),Fi=T.createContext(null),Uc=T.createContext(null),dr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),NE=T.createContext(null);function Lk(t,e){let{relative:n}=e===void 0?{}:e;Js()||Ve(!1);let{basename:r,navigator:i}=T.useContext(Fi),{hash:s,pathname:o,search:a}=Hm(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:jr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Js(){return T.useContext(Uc)!=null}function fr(){return Js()||Ve(!1),T.useContext(Uc).location}function OE(t){T.useContext(Fi).static||T.useLayoutEffect(t)}function pr(){let{isDataRoute:t}=T.useContext(dr);return t?Yk():Mk()}function Mk(){Js()||Ve(!1);let t=T.useContext(Wm),{basename:e,navigator:n}=T.useContext(Fi),{matches:r}=T.useContext(dr),{pathname:i}=fr(),s=JSON.stringify(zm(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return OE(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Bm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:jr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Vk=T.createContext(null);function $k(t){let e=T.useContext(dr).outlet;return e&&T.createElement(Vk.Provider,{value:t},e)}function Hm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(dr),{pathname:i}=fr(),s=JSON.stringify(zm(r).map(o=>o.pathnameBase));return T.useMemo(()=>Bm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Fk(t,e){return jk(t,e)}function jk(t,e,n){Js()||Ve(!1);let{navigator:r}=T.useContext(Fi),{matches:i}=T.useContext(dr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=fr(),u;if(e){var c;let v=typeof e=="string"?Xs(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ve(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=fk(t,{pathname:d}),y=Hk(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:jr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:jr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?T.createElement(Uc.Provider,{value:{location:Bu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rr.Pop}},y):y}function Uk(){let t=Qk(),e=Ok(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const zk=T.createElement(Uk,null);class Bk extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(dr.Provider,{value:this.props.routeContext},T.createElement(NE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wk(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Wm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(dr.Provider,{value:e},r)}function Hk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ve(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||zk);let d=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(Wk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(Bk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Zf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Zf||(Zf={}));var ga;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ga||(ga={}));function qk(t){let e=T.useContext(Wm);return e||Ve(!1),e}function Gk(t){let e=T.useContext(bE);return e||Ve(!1),e}function Kk(t){let e=T.useContext(dr);return e||Ve(!1),e}function DE(t){let e=Kk(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Qk(){var t;let e=T.useContext(NE),n=Gk(ga.UseRouteError),r=DE(ga.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Yk(){let{router:t}=qk(Zf.UseNavigateStable),e=DE(ga.UseNavigateStable),n=T.useRef(!1);return OE(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bu({fromRouteId:e},s)))},[t,e])}function Xk(t){let{to:e,replace:n,state:r,relative:i}=t;Js()||Ve(!1);let{matches:s}=T.useContext(dr),{pathname:o}=fr(),a=pr(),l=Bm(e,zm(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Jk(t){return $k(t.context)}function zn(t){Ve(!1)}function Zk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Rr.Pop,navigator:s,static:o=!1}=t;Js()&&Ve(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Xs(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=T.useMemo(()=>{let v=Um(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return y==null?null:T.createElement(Fi.Provider,{value:l},T.createElement(Uc.Provider,{children:n,value:y}))}function eR(t){let{children:e,location:n}=t;return Fk(ep(e),n)}var Zv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Zv||(Zv={}));new Promise(()=>{});function ep(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,ep(r.props.children,s));return}r.type!==zn&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ep(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wu.apply(this,arguments)}function LE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nR(t,e){return t.button===0&&(!e||e==="_self")&&!tR(t)}const rR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],iR=["aria-current","caseSensitive","className","end","style","to","children"],e0="startTransition";function sR(t){let{basename:e,children:n,window:r}=t,i=T.useRef();i.current==null&&(i.current=ck({window:r,v5Compat:!0}));let s=i.current,[o,a]=T.useState({action:s.action,location:s.location}),l=T.useCallback(u=>{e0 in zy?zy[e0](()=>a(u)):a(u)},[a]);return T.useLayoutEffect(()=>s.listen(l),[s,l]),T.createElement(Zk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const oR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lR=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=LE(e,rR),{basename:d}=T.useContext(Fi),p,y=!1;if(typeof u=="string"&&aR.test(u)&&(p=u,oR))try{let f=new URL(window.location.href),_=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Um(_.pathname,d);_.origin===f.origin&&E!=null?u=E+_.search+_.hash:y=!0}catch{}let v=Lk(u,{relative:i}),w=cR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||w(f)}return T.createElement("a",Wu({},h,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))}),uR=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=LE(e,iR),h=Hm(l,{relative:c.relative}),d=fr(),p=T.useContext(bE),{navigator:y}=T.useContext(Fi),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,w=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let f=w===v||!o&&w.startsWith(v)&&w.charAt(v.length)==="/",_=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),E=f?r:void 0,x;typeof s=="function"?x=s({isActive:f,isPending:_}):x=[s,f?"active":null,_?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:f,isPending:_}):a;return T.createElement(lR,Wu({},c,{"aria-current":E,className:x,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:f,isPending:_}):u)});var t0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(t0||(t0={}));var n0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(n0||(n0={}));function cR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=pr(),l=fr(),u=Hm(t,{relative:o});return T.useCallback(c=>{if(nR(c,n)){c.preventDefault();let h=r!==void 0?r:zu(l)===zu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var ME={exports:{}},VE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=T;function hR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dR=typeof Object.is=="function"?Object.is:hR,fR=Ls.useState,pR=Ls.useEffect,mR=Ls.useLayoutEffect,gR=Ls.useDebugValue;function yR(t,e){var n=e(),r=fR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return mR(function(){i.value=n,i.getSnapshot=e,Td(i)&&s({inst:i})},[t,n,e]),pR(function(){return Td(i)&&s({inst:i}),t(function(){Td(i)&&s({inst:i})})},[t]),gR(n),n}function Td(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dR(t,n)}catch{return!0}}function vR(t,e){return e()}var _R=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vR:yR;VE.useSyncExternalStore=Ls.useSyncExternalStore!==void 0?Ls.useSyncExternalStore:_R;ME.exports=VE;var wR=ME.exports,$E={exports:{}},FE={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=T,ER=wR;function IR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var TR=typeof Object.is=="function"?Object.is:IR,xR=ER.useSyncExternalStore,SR=zc.useRef,AR=zc.useEffect,CR=zc.useMemo,kR=zc.useDebugValue;FE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=SR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=CR(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var y=o.value;if(i(y,p))return h=y}return h=p}if(y=h,TR(c,p))return y;var v=r(p);return i!==void 0&&i(y,v)?y:(c=p,h=v)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=xR(t,s[0],s[1]);return AR(function(){o.hasValue=!0,o.value=a},[a]),kR(a),a};$E.exports=FE;var RR=$E.exports;function PR(t){t()}let jE=PR;const bR=t=>jE=t,NR=()=>jE;let xd=null;function OR(){return xd||(xd=T.createContext(null)),xd}const Yr=new Proxy({},new Proxy({},{get(t,e){const n=OR();return(r,...i)=>Reflect[e](n,...i)}}));function qm(t=Yr){return function(){return T.useContext(t)}}const UE=qm(),DR=()=>{throw new Error("uSES not initialized!")};let zE=DR;const LR=t=>{zE=t},MR=(t,e)=>t===e;function VR(t=Yr){const e=t===Yr?UE:qm(t);return function(r,i={}){const{equalityFn:s=MR,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();T.useRef(!0);const p=T.useCallback({[r.name](v){return r(v)}}[r.name],[r,h,o]),y=zE(u.addNestedSub,l.getState,c||l.getState,p,s);return T.useDebugValue(y),y}}const on=VR();var BE={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,Gm=Je?Symbol.for("react.element"):60103,Km=Je?Symbol.for("react.portal"):60106,Bc=Je?Symbol.for("react.fragment"):60107,Wc=Je?Symbol.for("react.strict_mode"):60108,Hc=Je?Symbol.for("react.profiler"):60114,qc=Je?Symbol.for("react.provider"):60109,Gc=Je?Symbol.for("react.context"):60110,Qm=Je?Symbol.for("react.async_mode"):60111,Kc=Je?Symbol.for("react.concurrent_mode"):60111,Qc=Je?Symbol.for("react.forward_ref"):60112,Yc=Je?Symbol.for("react.suspense"):60113,$R=Je?Symbol.for("react.suspense_list"):60120,Xc=Je?Symbol.for("react.memo"):60115,Jc=Je?Symbol.for("react.lazy"):60116,FR=Je?Symbol.for("react.block"):60121,jR=Je?Symbol.for("react.fundamental"):60117,UR=Je?Symbol.for("react.responder"):60118,zR=Je?Symbol.for("react.scope"):60119;function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Gm:switch(t=t.type,t){case Qm:case Kc:case Bc:case Hc:case Wc:case Yc:return t;default:switch(t=t&&t.$$typeof,t){case Gc:case Qc:case Jc:case Xc:case qc:return t;default:return e}}case Km:return e}}}function WE(t){return Yt(t)===Kc}pe.AsyncMode=Qm;pe.ConcurrentMode=Kc;pe.ContextConsumer=Gc;pe.ContextProvider=qc;pe.Element=Gm;pe.ForwardRef=Qc;pe.Fragment=Bc;pe.Lazy=Jc;pe.Memo=Xc;pe.Portal=Km;pe.Profiler=Hc;pe.StrictMode=Wc;pe.Suspense=Yc;pe.isAsyncMode=function(t){return WE(t)||Yt(t)===Qm};pe.isConcurrentMode=WE;pe.isContextConsumer=function(t){return Yt(t)===Gc};pe.isContextProvider=function(t){return Yt(t)===qc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gm};pe.isForwardRef=function(t){return Yt(t)===Qc};pe.isFragment=function(t){return Yt(t)===Bc};pe.isLazy=function(t){return Yt(t)===Jc};pe.isMemo=function(t){return Yt(t)===Xc};pe.isPortal=function(t){return Yt(t)===Km};pe.isProfiler=function(t){return Yt(t)===Hc};pe.isStrictMode=function(t){return Yt(t)===Wc};pe.isSuspense=function(t){return Yt(t)===Yc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Bc||t===Kc||t===Hc||t===Wc||t===Yc||t===$R||typeof t=="object"&&t!==null&&(t.$$typeof===Jc||t.$$typeof===Xc||t.$$typeof===qc||t.$$typeof===Gc||t.$$typeof===Qc||t.$$typeof===jR||t.$$typeof===UR||t.$$typeof===zR||t.$$typeof===FR)};pe.typeOf=Yt;BE.exports=pe;var Ym=BE.exports,Xm=Ym,BR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},HE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jm={};Jm[Xm.ForwardRef]=HR;Jm[Xm.Memo]=HE;function r0(t){return Xm.isMemo(t)?HE:Jm[t.$$typeof]||BR}var qR=Object.defineProperty,GR=Object.getOwnPropertyNames,i0=Object.getOwnPropertySymbols,KR=Object.getOwnPropertyDescriptor,QR=Object.getPrototypeOf,s0=Object.prototype;function qE(t,e,n){if(typeof e!="string"){if(s0){var r=QR(e);r&&r!==s0&&qE(t,r,n)}var i=GR(e);i0&&(i=i.concat(i0(e)));for(var s=r0(t),o=r0(e),a=0;a<i.length;++a){var l=i[a];if(!WR[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=KR(e,l);try{qR(t,l,u)}catch{}}}}return t}var YR=qE;const XR=fw(YR);var ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=Symbol.for("react.element"),eg=Symbol.for("react.portal"),Zc=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),nh=Symbol.for("react.provider"),rh=Symbol.for("react.context"),JR=Symbol.for("react.server_context"),ih=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),lh=Symbol.for("react.lazy"),ZR=Symbol.for("react.offscreen"),GE;GE=Symbol.for("react.module.reference");function an(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Zm:switch(t=t.type,t){case Zc:case th:case eh:case sh:case oh:return t;default:switch(t=t&&t.$$typeof,t){case JR:case rh:case ih:case lh:case ah:case nh:return t;default:return e}}case eg:return e}}}ge.ContextConsumer=rh;ge.ContextProvider=nh;ge.Element=Zm;ge.ForwardRef=ih;ge.Fragment=Zc;ge.Lazy=lh;ge.Memo=ah;ge.Portal=eg;ge.Profiler=th;ge.StrictMode=eh;ge.Suspense=sh;ge.SuspenseList=oh;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(t){return an(t)===rh};ge.isContextProvider=function(t){return an(t)===nh};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zm};ge.isForwardRef=function(t){return an(t)===ih};ge.isFragment=function(t){return an(t)===Zc};ge.isLazy=function(t){return an(t)===lh};ge.isMemo=function(t){return an(t)===ah};ge.isPortal=function(t){return an(t)===eg};ge.isProfiler=function(t){return an(t)===th};ge.isStrictMode=function(t){return an(t)===eh};ge.isSuspense=function(t){return an(t)===sh};ge.isSuspenseList=function(t){return an(t)===oh};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Zc||t===th||t===eh||t===sh||t===oh||t===ZR||typeof t=="object"&&t!==null&&(t.$$typeof===lh||t.$$typeof===ah||t.$$typeof===nh||t.$$typeof===rh||t.$$typeof===ih||t.$$typeof===GE||t.getModuleId!==void 0)};ge.typeOf=an;function eP(){const t=NR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const o0={notify(){},get:()=>[]};function tP(t,e){let n,r=o0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=eP())}function u(){n&&(n(),n=void 0,r.clear(),r=o0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const nP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rP=nP?T.useLayoutEffect:T.useEffect;function iP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=T.useMemo(()=>{const u=tP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=T.useMemo(()=>t.getState(),[t]);rP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Yr;return Mt.createElement(l.Provider,{value:o},n)}function KE(t=Yr){const e=t===Yr?UE:qm(t);return function(){const{store:r}=e();return r}}const sP=KE();function oP(t=Yr){const e=t===Yr?sP:KE(t);return function(){return e().dispatch}}const Zs=oP();LR(RR.useSyncExternalStoreWithSelector);bR(CE.unstable_batchedUpdates);const ln=t=>t.auth;function aP(t){function e(D,V,F,Q,I){for(var re=0,O=0,be=0,ue=0,he,ee,et=0,Nt=0,oe,ut=oe=he=0,ce=0,tt=0,co=0,nt=0,fl=F.length,ho=fl-1,cn,X="",De="",Kh="",Qh="",mr;ce<fl;){if(ee=F.charCodeAt(ce),ce===ho&&O+ue+be+re!==0&&(O!==0&&(ee=O===47?10:47),ue=be=re=0,fl++,ho++),O+ue+be+re===0){if(ce===ho&&(0<tt&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=F.charAt(ce)}ee=59}switch(ee){case 123:for(X=X.trim(),he=X.charCodeAt(0),oe=1,nt=++ce;ce<fl;){switch(ee=F.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ee=F.charCodeAt(ce+1)){case 42:case 47:e:{for(ut=ce+1;ut<ho;++ut)switch(F.charCodeAt(ut)){case 47:if(ee===42&&F.charCodeAt(ut-1)===42&&ce+2!==ut){ce=ut+1;break e}break;case 10:if(ee===47){ce=ut+1;break e}}ce=ut}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;ce++<ho&&F.charCodeAt(ce)!==ee;);}if(oe===0)break;ce++}switch(oe=F.substring(nt,ce),he===0&&(he=(X=X.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<tt&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:tt=V;break;default:tt=un}if(oe=e(V,tt,oe,ee,I+1),nt=oe.length,0<P&&(tt=n(un,X,co),mr=a(3,oe,tt,V,Be,Ae,nt,ee,I,Q),X=tt.join(""),mr!==void 0&&(nt=(oe=mr.trim()).length)===0&&(ee=0,oe="")),0<nt)switch(ee){case 115:X=X.replace(A,o);case 100:case 109:case 45:oe=X+"{"+oe+"}";break;case 107:X=X.replace(f,"$1 $2"),oe=X+"{"+oe+"}",oe=Ge===1||Ge===2&&s("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=X+oe,Q===112&&(oe=(De+=oe,""))}else oe="";break;default:oe=e(V,n(V,X,co),oe,Q,I+1)}Kh+=oe,oe=co=tt=ut=he=0,X="",ee=F.charCodeAt(++ce);break;case 125:case 59:if(X=(0<tt?X.replace(d,""):X).trim(),1<(nt=X.length))switch(ut===0&&(he=X.charCodeAt(0),he===45||96<he&&123>he)&&(nt=(X=X.replace(" ",":")).length),0<P&&(mr=a(1,X,V,D,Be,Ae,De.length,Q,I,Q))!==void 0&&(nt=(X=mr.trim()).length)===0&&(X="\0\0"),he=X.charCodeAt(0),ee=X.charCodeAt(1),he){case 0:break;case 64:if(ee===105||ee===99){Qh+=X+F.charAt(ce);break}default:X.charCodeAt(nt-1)!==58&&(De+=i(X,he,ee,X.charCodeAt(2)))}co=tt=ut=he=0,X="",ee=F.charCodeAt(++ce)}}switch(ee){case 13:case 10:O===47?O=0:1+he===0&&Q!==107&&0<X.length&&(tt=1,X+="\0"),0<P*q&&a(0,X,V,D,Be,Ae,De.length,Q,I,Q),Ae=1,Be++;break;case 59:case 125:if(O+ue+be+re===0){Ae++;break}default:switch(Ae++,cn=F.charAt(ce),ee){case 9:case 32:if(ue+re+O===0)switch(et){case 44:case 58:case 9:case 32:cn="";break;default:ee!==32&&(cn=" ")}break;case 0:cn="\\0";break;case 12:cn="\\f";break;case 11:cn="\\v";break;case 38:ue+O+re===0&&(tt=co=1,cn="\f"+cn);break;case 108:if(ue+O+re+At===0&&0<ut)switch(ce-ut){case 2:et===112&&F.charCodeAt(ce-3)===58&&(At=et);case 8:Nt===111&&(At=Nt)}break;case 58:ue+O+re===0&&(ut=ce);break;case 44:O+be+ue+re===0&&(tt=1,cn+="\r");break;case 34:case 39:O===0&&(ue=ue===ee?0:ue===0?ee:ue);break;case 91:ue+O+be===0&&re++;break;case 93:ue+O+be===0&&re--;break;case 41:ue+O+re===0&&be--;break;case 40:if(ue+O+re===0){if(he===0)switch(2*et+3*Nt){case 533:break;default:he=1}be++}break;case 64:O+be+ue+re+ut+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ue+re+be))switch(O){case 0:switch(2*ee+3*F.charCodeAt(ce+1)){case 235:O=47;break;case 220:nt=ce,O=42}break;case 42:ee===47&&et===42&&nt+2!==ce&&(F.charCodeAt(nt+2)===33&&(De+=F.substring(nt,ce+1)),cn="",O=0)}}O===0&&(X+=cn)}Nt=et,et=ee,ce++}if(nt=De.length,0<nt){if(tt=V,0<P&&(mr=a(2,De,tt,D,Be,Ae,nt,Q,I,Q),mr!==void 0&&(De=mr).length===0))return Qh+De+Kh;if(De=tt.join(",")+"{"+De+"}",Ge*At!==0){switch(Ge!==2||s(De,2)||(At=0),At){case 111:De=De.replace(E,":-moz-$1")+De;break;case 112:De=De.replace(_,"::-webkit-input-$1")+De.replace(_,"::-moz-$1")+De.replace(_,":-ms-input-$1")+De}At=0}}return Qh+De+Kh}function n(D,V,F){var Q=V.trim().split(w);V=Q;var I=Q.length,re=D.length;switch(re){case 0:case 1:var O=0;for(D=re===0?"":D[0]+" ";O<I;++O)V[O]=r(D,V[O],F).trim();break;default:var be=O=0;for(V=[];O<I;++O)for(var ue=0;ue<re;++ue)V[be++]=r(D[ue]+" ",Q[O],F).trim()}return V}function r(D,V,F){var Q=V.charCodeAt(0);switch(33>Q&&(Q=(V=V.trim()).charCodeAt(0)),Q){case 38:return V.replace(m,"$1"+D.trim());case 58:return D.trim()+V.replace(m,"$1"+D.trim());default:if(0<1*F&&0<V.indexOf("\f"))return V.replace(m,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+V}function i(D,V,F,Q){var I=D+";",re=2*V+3*F+4*Q;if(re===944){D=I.indexOf(":",9)+1;var O=I.substring(D,I.length-1).trim();return O=I.substring(0,D).trim()+O+";",Ge===1||Ge===2&&s(O,1)?"-webkit-"+O+O:O}if(Ge===0||Ge===2&&!s(I,1))return I;switch(re){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(me,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return O=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+I+"-ms-flex-pack"+O+I;case 1005:return y.test(I)?I.replace(p,":-webkit-")+I.replace(p,":-moz-")+I:I;case 1e3:switch(O=I.substring(13).trim(),V=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(V)){case 226:O=I.replace(x,"tb");break;case 232:O=I.replace(x,"tb-rl");break;case 220:O=I.replace(x,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+O+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(V=(I=D).length-10,O=(I.charCodeAt(V)===33?I.substring(0,V):I).substring(D.indexOf(":",7)+1).trim(),re=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:I=I.replace(O,"-webkit-"+O)+";"+I;break;case 207:case 102:I=I.replace(O,"-webkit-"+(102<re?"inline-":"")+"box")+";"+I.replace(O,"-webkit-"+O)+";"+I.replace(O,"-ms-"+O+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return O=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+O+"-ms-flex-"+O+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(N,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(N,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(U.test(D)===!0)return(O=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),V,F,Q).replace(":fill-available",":stretch"):I.replace(O,"-webkit-"+O)+I.replace(O,"-moz-"+O.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,F+Q===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+I}return I}function s(D,V){var F=D.indexOf(V===1?":":"{"),Q=D.substring(0,V!==3?F:10);return F=D.substring(F+1,D.length-1),W(V!==2?Q:Q.replace(H,"$1"),F,V)}function o(D,V){var F=i(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return F!==V+";"?F.replace(b," or ($1)").substring(4):"("+V+")"}function a(D,V,F,Q,I,re,O,be,ue,he){for(var ee=0,et=V,Nt;ee<P;++ee)switch(Nt=M[ee].call(c,D,et,F,Q,I,re,O,be,ue,he)){case void 0:case!1:case!0:case null:break;default:et=Nt}if(et!==V)return et}function l(D){switch(D){case void 0:case null:P=M.length=0;break;default:if(typeof D=="function")M[P++]=D;else if(typeof D=="object")for(var V=0,F=D.length;V<F;++V)l(D[V]);else q=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(W=null,D?typeof D!="function"?Ge=1:(Ge=2,W=D):Ge=0),u}function c(D,V){var F=D;if(33>F.charCodeAt(0)&&(F=F.trim()),ye=F,F=[ye],0<P){var Q=a(-1,V,F,F,Be,Ae,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(V=Q)}var I=e(un,F,V,0,0);return 0<P&&(Q=a(-2,I,F,F,Be,Ae,I.length,0,0,0),Q!==void 0&&(I=Q)),ye="",At=0,Ae=Be=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,E=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,N=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,Ae=1,Be=1,At=0,Ge=1,un=[],M=[],P=0,W=null,q=0,ye="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var lP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function uP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var cP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a0=uP(function(t){return cP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Kn(){return(Kn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var l0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},tp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ym.typeOf(t)},Hu=Object.freeze([]),Ur=Object.freeze({});function ya(t){return typeof t=="function"}function u0(t){return t.displayName||t.name||"Component"}function tg(t){return t&&typeof t.styledComponentId=="string"}var Ms=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ng=typeof window<"u"&&"HTMLElement"in window,hP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ba(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var dP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ba(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),lu=new Map,qu=new Map,Ho=1,bl=function(t){if(lu.has(t))return lu.get(t);for(;qu.has(Ho);)Ho++;var e=Ho++;return lu.set(t,e),qu.set(e,t),e},fP=function(t){return qu.get(t)},pP=function(t,e){e>=Ho&&(Ho=e+1),lu.set(t,e),qu.set(e,t)},mP="style["+Ms+'][data-styled-version="5.3.11"]',gP=new RegExp("^"+Ms+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),yP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},vP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(gP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(pP(u,l),yP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},_P=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},QE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ms))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ms,"active"),r.setAttribute("data-styled-version","5.3.11");var o=_P();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},wP=function(){function t(n){var r=this.element=QE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Ba(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),EP=function(){function t(n){var r=this.element=QE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),IP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),c0=ng,TP={isServer:!ng,useCSSOMInjection:!hP},YE=function(){function t(n,r,i){n===void 0&&(n=Ur),r===void 0&&(r={}),this.options=Kn({},TP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ng&&c0&&(c0=!1,function(s){for(var o=document.querySelectorAll(mP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ms)!=="active"&&(vP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return bl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Kn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new IP(o):s?new wP(o):new EP(o),new dP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(bl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(bl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(bl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=fP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ms+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),xP=/(a)(d)/gi,h0=function(t){return String.fromCharCode(t+(t>25?39:97))};function np(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=h0(e%52)+n;return(h0(e%52)+n).replace(xP,"$1-$2")}var cs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},XE=function(t){return cs(5381,t)};function SP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ya(n)&&!tg(n))return!1}return!0}var AP=XE("5.3.11"),CP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&SP(e),this.componentId=n,this.baseHash=cs(AP,n),this.baseStyle=r,YE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Vs(this.rules,e,n,r).join(""),a=np(cs(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=cs(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var y=Vs(p,e,n,r),v=Array.isArray(y)?y.join(""):y;c=cs(c,v+d),h+=v}}if(h){var w=np(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),kP=/^\s*\/\/.*$/gm,RP=[":","[",".","#"];function PP(t){var e,n,r,i,s=t===void 0?Ur:t,o=s.options,a=o===void 0?Ur:o,l=s.plugins,u=l===void 0?Hu:l,c=new aP(a),h=[],d=function(v){function w(m){if(m)try{v(m+"}")}catch{}}return function(m,f,_,E,x,A,b,N,H,U){switch(m){case 1:if(H===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(N===0)return f+"/*|*/";break;case 3:switch(N){case 102:case 112:return v(_[0]+f),"";default:return f+(U===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(v){h.push(v)}),p=function(v,w,m){return w===0&&RP.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function y(v,w,m,f){f===void 0&&(f="&");var _=v.replace(kP,""),E=w&&m?m+" "+w+" { "+_+" }":_;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,E)}return c.use([].concat(u,[function(v,w,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var w=h;return h=[],w}}])),y.hash=u.length?u.reduce(function(v,w){return w.name||Ba(15),cs(v,w.name)},5381).toString():"",y}var JE=Mt.createContext();JE.Consumer;var ZE=Mt.createContext(),bP=(ZE.Consumer,new YE),rp=PP();function NP(){return T.useContext(JE)||bP}function OP(){return T.useContext(ZE)||rp}var DP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=rp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ba(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=rp),this.name+e.hash},t}(),LP=/([A-Z])/,MP=/([A-Z])/g,VP=/^ms-/,$P=function(t){return"-"+t.toLowerCase()};function d0(t){return LP.test(t)?t.replace(MP,$P).replace(VP,"-ms-"):t}var f0=function(t){return t==null||t===!1||t===""};function Vs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Vs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(f0(t))return"";if(tg(t))return"."+t.styledComponentId;if(ya(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Vs(l,e,n,r)}var u;return t instanceof DP?n?(t.inject(n,r),t.getName(r)):t:tp(t)?function c(h,d){var p,y,v=[];for(var w in h)h.hasOwnProperty(w)&&!f0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||ya(h[w])?v.push(d0(w)+":",h[w],";"):tp(h[w])?v.push.apply(v,c(h[w],w)):v.push(d0(w)+": "+(p=w,(y=h[w])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||p in lP||p.startsWith("--")?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var p0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function FP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ya(t)||tp(t)?p0(Vs(l0(Hu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:p0(Vs(l0(t,n)))}var jP=function(t,e,n){return n===void 0&&(n=Ur),t.theme!==n.theme&&t.theme||e||n.theme},UP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zP=/(^-|-$)/g;function Sd(t){return t.replace(UP,"-").replace(zP,"")}var BP=function(t){return np(XE(t)>>>0)};function Nl(t){return typeof t=="string"&&!0}var ip=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},WP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function HP(t,e,n){var r=t[n];ip(e)&&ip(r)?eI(r,e):t[n]=e}function eI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(ip(o))for(var a in o)WP(a)&&HP(t,o[a],a)}return t}var tI=Mt.createContext();tI.Consumer;var Ad={};function nI(t,e,n){var r=tg(t),i=!Nl(t),s=e.attrs,o=s===void 0?Hu:s,a=e.componentId,l=a===void 0?function(f,_){var E=typeof f!="string"?"sc":Sd(f);Ad[E]=(Ad[E]||0)+1;var x=E+"-"+BP("5.3.11"+E+Ad[E]);return _?_+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Nl(f)?"styled."+f:"Styled("+u0(f)+")"}(t):u,h=e.displayName&&e.componentId?Sd(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,_,E){return t.shouldForwardProp(f,_,E)&&e.shouldForwardProp(f,_,E)}:t.shouldForwardProp);var y,v=new CP(n,h,r?t.componentStyle:void 0),w=v.isStatic&&o.length===0,m=function(f,_){return function(E,x,A,b){var N=E.attrs,H=E.componentStyle,U=E.defaultProps,me=E.foldedComponentIds,Ae=E.shouldForwardProp,Be=E.styledComponentId,At=E.target,Ge=function(Q,I,re){Q===void 0&&(Q=Ur);var O=Kn({},I,{theme:Q}),be={};return re.forEach(function(ue){var he,ee,et,Nt=ue;for(he in ya(Nt)&&(Nt=Nt(O)),Nt)O[he]=be[he]=he==="className"?(ee=be[he],et=Nt[he],ee&&et?ee+" "+et:ee||et):Nt[he]}),[O,be]}(jP(x,T.useContext(tI),U)||Ur,x,N),un=Ge[0],M=Ge[1],P=function(Q,I,re,O){var be=NP(),ue=OP(),he=I?Q.generateAndInjectStyles(Ur,be,ue):Q.generateAndInjectStyles(re,be,ue);return he}(H,b,un),W=A,q=M.$as||x.$as||M.as||x.as||At,ye=Nl(q),D=M!==x?Kn({},x,{},M):x,V={};for(var F in D)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?V.as=D[F]:(Ae?Ae(F,a0,q):!ye||a0(F))&&(V[F]=D[F]));return x.style&&M.style!==x.style&&(V.style=Kn({},x.style,{},M.style)),V.className=Array.prototype.concat(me,Be,P!==Be?P:null,x.className,M.className).filter(Boolean).join(" "),V.ref=W,T.createElement(q,V)}(y,f,_,w)};return m.displayName=c,(y=Mt.forwardRef(m)).attrs=d,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=p,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Hu,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(f){var _=e.componentId,E=function(A,b){if(A==null)return{};var N,H,U={},me=Object.keys(A);for(H=0;H<me.length;H++)N=me[H],b.indexOf(N)>=0||(U[N]=A[N]);return U}(e,["componentId"]),x=_&&_+"-"+(Nl(f)?f:Sd(u0(f)));return nI(f,Kn({},E,{attrs:d,componentId:x}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?eI({},t.defaultProps,f):f}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&XR(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var sp=function(t){return function e(n,r,i){if(i===void 0&&(i=Ur),!Ym.isValidElementType(r))return Ba(1,String(r));var s=function(){return n(r,i,FP.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Kn({},i,{},o))},s.attrs=function(o){return e(n,r,Kn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(nI,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){sp[t]=sp(t)});const C=sp;var rI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m0=Mt.createContext&&Mt.createContext(rI),zr=globalThis&&globalThis.__assign||function(){return zr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},zr.apply(this,arguments)},qP=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function iI(t){return t&&t.map(function(e,n){return Mt.createElement(e.tag,zr({key:n},e.attr),iI(e.child))})}function ji(t){return function(e){return Mt.createElement(GP,zr({attr:zr({},t.attr)},e),iI(t.child))}}function GP(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=qP(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Mt.createElement("svg",zr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:zr(zr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Mt.createElement("title",null,s),t.children)};return m0!==void 0?Mt.createElement(m0.Consumer,null,function(n){return e(n)}):e(rI)}function KP(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const QP=C.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,YP=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-direction: column;
  margin-top: 18px;
  padding: 0px 16px;
  gap: 20px;
  @media (min-width: 686px) {
    flex-direction: row;
  }
`,XP=C(KP)`
  width: 35px;
  height: 35px;
  color: white;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,JP=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  background: green;

  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    width: 120px;
    height: 120px;
  }
`,ZP=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40%;
  min-height: 40%;

  font-size: 12px;
  padding: 1px;

  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  cursor: pointer;
  background: green;

  position: absolute;
  right: -3px;
  bottom: -3px;
  z-index: 1;

  background: black;
  color: white;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,e2=C.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  background-image: url("MS_SHOP_LOGO.jpg");
  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`,t2=()=>{const t=pr();return g.jsx(e2,{onClick:()=>{t("/")}})},n2=C.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,g0=C(uR)`
  color: black;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  transition: border-color 0.25s;
  transition: color 0.25s;

  &.active {
    color: green;
    border-color: green;
  }

  &:hover {
    color: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 15px 15px;
  }
`,r2=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],i2=()=>{const t=on(ln);return g.jsxs(n2,{children:[r2.map((e,n)=>g.jsx(g0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&g.jsx(g0,{to:"/admin",children:"Адмін"},"admin")]})},Cd=C.p`
 color: black;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;

  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;
  
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  transition: border-color 0.25s;
  transition: color 0.25s;
  
  &:hover {
    color: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    padding: 15px 15px;

    font-size: 38px;`,s2=C.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,o2=C.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,a2=C.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 10%;

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`,l2=C.div`
  z-index: 100;
  display: flex;
  position: relative;
  border-radius: 15px;
  background: #f9f9f9;
  padding: 12px 12px;
  font-size: 9px;
  width: 50%;
  border: 2px solid #1a1a1a;
  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 12px;
    min-height: 340px;
    border-radius: 30px;
    padding: 24px 24px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,u2=C.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,Ol=C.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Dl=C.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,c2=C.div`
  display: flex;
  flex-direction: column;
`,Ll=C.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,h2=C.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,y0=C.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,d2=C.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,f2=C.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;

  @media (min-width: 768px) {
    padding: 5px 0;
    gap: 5px;
  }
  @media (min-width: 1440px) {
    gap: 10px;
    padding: 10px 20px;
  }
`,Un=C.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,Ml=C.div`
  padding: 20px 22px;
  background: #f9f9f9;
  color: #1a1a1a;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 24px;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 30px;
    gap: 30px;
  }
`,Ki=C.h3`
  font-family: Poppins;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`,xn=C.input`
  padding: 10px 10px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 10px;
  text-align: left;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`,Vl=C.button`
  width: 100%;
  font-size: 15px;

  &.active {
    background: green;
  }
  &:hover {
    background: green;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`,v0=C.div`
  width: 80%;
  display: flex;
  font-size: 10px;
  color: red;

  align-self: center;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 18px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    font-size: 32px;
    line-height: 40px;
  }
`,p2=C.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,m2=C.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,g2=C.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 6px;
  font-weight: bolder;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 100px;
    border-radius: 20px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    width: 150px;
    border-radius: 20px;
    padding: 20px;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},y2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):y2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new v2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class v2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _2=function(t){const e=sI(t);return oI.encodeByteArray(e,!0)},Gu=function(t){return _2(t).replace(/\./g,"")},aI=function(t){try{return oI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=()=>w2().__FIREBASE_DEFAULTS__,I2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},T2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aI(t[1]);return e&&JSON.parse(e)},rg=()=>{try{return E2()||I2()||T2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lI=t=>{var e,n;return(n=(e=rg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uI=t=>{const e=lI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cI=()=>{var t;return(t=rg())===null||t===void 0?void 0:t.config},hI=t=>{var e;return(e=rg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gu(JSON.stringify(n)),Gu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function A2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function k2(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R2(){try{return typeof indexedDB=="object"}catch{return!1}}function P2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=b2,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?N2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function N2(t,e){return t.replace(O2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const O2=/\{\$([^}]+)}/g;function D2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ku(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_0(s)&&_0(o)){if(!Ku(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function L2(t,e){const n=new M2(t,e);return n.subscribe.bind(n)}class M2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");V2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kd),i.error===void 0&&(i.error=kd),i.complete===void 0&&(i.complete=kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new x2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j2(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:F2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F2(t){return t===ci?void 0:t}function j2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const z2={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},B2=ae.INFO,W2={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},H2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=W2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ig{constructor(e){this.name=e,this._logLevel=B2,this._logHandler=H2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const q2=(t,e)=>e.some(n=>t instanceof n);let w0,E0;function G2(){return w0||(w0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K2(){return E0||(E0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fI=new WeakMap,op=new WeakMap,pI=new WeakMap,Rd=new WeakMap,sg=new WeakMap;function Q2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fI.set(n,t)}).catch(()=>{}),sg.set(e,t),e}function Y2(t){if(op.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});op.set(t,e)}let ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X2(t){ap=t(ap)}function J2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return pI.set(r,e.sort?e.sort():[e]),Br(r)}:K2().includes(t)?function(...e){return t.apply(Pd(this),e),Br(fI.get(this))}:function(...e){return Br(t.apply(Pd(this),e))}}function Z2(t){return typeof t=="function"?J2(t):(t instanceof IDBTransaction&&Y2(t),q2(t,G2())?new Proxy(t,ap):t)}function Br(t){if(t instanceof IDBRequest)return Q2(t);if(Rd.has(t))return Rd.get(t);const e=Z2(t);return e!==t&&(Rd.set(t,e),sg.set(e,t)),e}const Pd=t=>sg.get(t);function eb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const tb=["get","getKey","getAll","getAllKeys","count"],nb=["put","add","delete","clear"],bd=new Map;function I0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return bd.set(e,s),s}X2(t=>({...t,get:(e,n,r)=>I0(e,n)||t.get(e,n,r),has:(e,n)=>!!I0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ib(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ib(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lp="@firebase/app",T0="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new ig("@firebase/app"),sb="@firebase/app-compat",ob="@firebase/analytics-compat",ab="@firebase/analytics",lb="@firebase/app-check-compat",ub="@firebase/app-check",cb="@firebase/auth",hb="@firebase/auth-compat",db="@firebase/database",fb="@firebase/database-compat",pb="@firebase/functions",mb="@firebase/functions-compat",gb="@firebase/installations",yb="@firebase/installations-compat",vb="@firebase/messaging",_b="@firebase/messaging-compat",wb="@firebase/performance",Eb="@firebase/performance-compat",Ib="@firebase/remote-config",Tb="@firebase/remote-config-compat",xb="@firebase/storage",Sb="@firebase/storage-compat",Ab="@firebase/firestore",Cb="@firebase/firestore-compat",kb="firebase",Rb="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="[DEFAULT]",Pb={[lp]:"fire-core",[sb]:"fire-core-compat",[ab]:"fire-analytics",[ob]:"fire-analytics-compat",[ub]:"fire-app-check",[lb]:"fire-app-check-compat",[cb]:"fire-auth",[hb]:"fire-auth-compat",[db]:"fire-rtdb",[fb]:"fire-rtdb-compat",[pb]:"fire-fn",[mb]:"fire-fn-compat",[gb]:"fire-iid",[yb]:"fire-iid-compat",[vb]:"fire-fcm",[_b]:"fire-fcm-compat",[wb]:"fire-perf",[Eb]:"fire-perf-compat",[Ib]:"fire-rc",[Tb]:"fire-rc-compat",[xb]:"fire-gcs",[Sb]:"fire-gcs-compat",[Ab]:"fire-fst",[Cb]:"fire-fst-compat","fire-js":"fire-js",[kb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,cp=new Map;function bb(t,e){try{t.container.addComponent(e)}catch(n){Ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(cp.has(e))return Ri.debug(`There were multiple attempts to register component ${e}.`),!1;cp.set(e,t);for(const n of Qu.values())bb(n,t);return!0}function uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new Wa("app","Firebase",Nb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=Rb;function mI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:up,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=cI()),!n)throw Wr.create("no-options");const s=Qu.get(i);if(s){if(Ku(n,s.options)&&Ku(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new U2(i);for(const l of cp.values())o.addComponent(l);const a=new Ob(n,r,o);return Qu.set(i,a),a}function og(t=up){const e=Qu.get(t);if(!e&&t===up&&cI())return mI();if(!e)throw Wr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=Pb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ri.warn(a.join(" "));return}Pi(new Xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="firebase-heartbeat-database",Lb=1,va="firebase-heartbeat-store";let Nd=null;function gI(){return Nd||(Nd=eb(Db,Lb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(va)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Nd}async function Mb(t){try{return await(await gI()).transaction(va).objectStore(va).get(yI(t))}catch(e){if(e instanceof Fn)Ri.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ri.warn(n.message)}}}async function x0(t,e){try{const r=(await gI()).transaction(va,"readwrite");await r.objectStore(va).put(e,yI(t)),await r.done}catch(n){if(n instanceof Fn)Ri.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ri.warn(r.message)}}}function yI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=1024,$b=30*24*60*60*1e3;class Fb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ub(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=S0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$b}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=S0(),{heartbeatsToSend:n,unsentEntries:r}=jb(this._heartbeatsCache.heartbeats),i=Gu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function S0(){return new Date().toISOString().substring(0,10)}function jb(t,e=Vb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),A0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),A0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ub{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R2()?P2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function A0(t){return Gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){Pi(new Xr("platform-logger",e=>new rb(e),"PRIVATE")),Pi(new Xr("heartbeat",e=>new Fb(e),"PRIVATE")),Nn(lp,T0,t),Nn(lp,T0,"esm2017"),Nn("fire-js","")}zb("");function ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bb=vI,_I=new Wa("auth","Firebase",vI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new ig("@firebase/auth");function Wb(t,...e){Yu.logLevel<=ae.WARN&&Yu.warn(`Auth (${Ui}): ${t}`,...e)}function uu(t,...e){Yu.logLevel<=ae.ERROR&&Yu.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw lg(t,...e)}function On(t,...e){return lg(t,...e)}function Hb(t,e,n){const r=Object.assign(Object.assign({},Bb()),{[e]:n});return new Wa("auth","Firebase",r).create(e,{appName:t.name})}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _I.create(t,...e)}function G(t,e,...n){if(!t)throw lg(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uu(e),new Error(e)}function ir(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qb(){return C0()==="http:"||C0()==="https:"}function C0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qb()||A2()||"connection"in navigator)?navigator.onLine:!0}function Kb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=S2()||C2()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new qa(3e4,6e4);function eo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zi(t,e,n,r,i={}){return EI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ha(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wI.fetch()(II(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function EI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qb),e);try{const i=new Xb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $l(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $l(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hb(t,c,u);wn(t,c)}}catch(i){if(i instanceof Fn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Ga(t,e,n,r,i={}){const s=await zi(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function II(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ug(t.config,i):`${t.config.apiScheme}://${i}`}class Xb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),Yb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return zi(t,"POST","/v1/accounts:delete",e)}async function Zb(t,e){return zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eN(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=cg(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qo(Od(i.auth_time)),issuedAtTime:qo(Od(i.iat)),expirationTime:qo(Od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const i=aI(n);return i?JSON.parse(i):(uu("Failed to decode base64 JWT payload"),null)}catch(i){return uu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tN(t){const e=cg(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&nN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qo(this.lastLoginAt),this.creationTime=qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $s(t,Zb(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oN(s.providerUserInfo):[],a=sN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new TI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function iN(t){const e=ze(t);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oN(t){return t.map(e=>{var{providerId:n}=e,r=ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){const n=await EI(t,{},async()=>{const r=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=II(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _a;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new TI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eN(this,e)}reload(){return iN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,Jb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:x,providerData:A,stsTokenManager:b}=n;G(_&&b,e,"internal-error");const N=_a.fromJSON(this.name,b);G(typeof _=="string",e,"internal-error"),yr(h,e.name),yr(d,e.name),G(typeof E=="boolean",e,"internal-error"),G(typeof x=="boolean",e,"internal-error"),yr(p,e.name),yr(y,e.name),yr(v,e.name),yr(w,e.name),yr(m,e.name),yr(f,e.name);const H=new Ei({uid:_,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:x,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:N,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(H.providerData=A.map(U=>Object.assign({},U))),w&&(H._redirectEventId=w),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new _a;i.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Map;function Yn(t){ir(t instanceof Function,"Expected a class definition");let e=k0.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xI.type="NONE";const R0=xI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(Yn(R0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yn(R0);const o=cu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ei._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _s(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new _s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RI(e))return"Blackberry";if(PI(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||AI(e))&&!e.includes("edge/"))return"Chrome";if(kI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SI(t=xt()){return/firefox\//i.test(t)}function hg(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AI(t=xt()){return/crios\//i.test(t)}function CI(t=xt()){return/iemobile/i.test(t)}function kI(t=xt()){return/android/i.test(t)}function RI(t=xt()){return/blackberry/i.test(t)}function PI(t=xt()){return/webos/i.test(t)}function ch(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lN(t=xt()){var e;return ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uN(){return k2()&&document.documentMode===10}function bI(t=xt()){return ch(t)||kI(t)||PI(t)||RI(t)||/windows phone/i.test(t)||CI(t)}function cN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t,e=[]){let n;switch(t){case"Browser":n=P0(xt());break;case"Worker":n=`${P0(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}async function OI(t,e){return zi(t,"GET","/v2/recaptchaConfig",eo(t,e))}function b0(t){return t!==void 0&&t.enterprise!==void 0}class DI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hN().appendChild(r)})}function dN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fN="https://www.google.com/recaptcha/enterprise.js?render=",pN="recaptcha-enterprise",mN="NO_RECAPTCHA";class MI{constructor(e){this.type=pN,this.auth=to(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{OI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;b0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&b0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}LI(fN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ju(t,e,n,r=!1){const i=new MI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N0(this),this.idTokenSubscription=new N0(this),this.beforeStateQueue=new gN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_I,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}async initializeRecaptchaConfig(){const e=await OI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new DI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new MI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function to(t){return ze(t)}class N0{constructor(e){this.auth=e,this.observer=null,this.addObserver=L2(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t,e){const n=uh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ku(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function _N(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wN(t,e,n){const r=to(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=VI(e),{host:o,port:a}=EN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IN()}function VI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EN(t){const e=VI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:O0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:O0(o)}}}function O0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function TN(t,e){return zi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",eo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",eo(t,e))}async function SN(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",eo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends dg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ju(e,r,"signInWithPassword");return Dd(e,i)}else return Dd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ju(e,r,"signInWithPassword");return Dd(e,s)}else return Promise.reject(i)});case"emailLink":return xN(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return TN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SN(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",eo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="http://localhost";class bi extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:AN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ha(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kN(t){const e=ko(Ro(t)).link,n=e?ko(Ro(e)).deep_link_id:null,r=ko(Ro(t)).deep_link_id;return(r?ko(Ro(r)).link:null)||r||n||e||t}class fg{constructor(e){var n,r,i,s,o,a;const l=ko(Ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=CN((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kN(e);try{return new fg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fg.parseLink(n);return G(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends $I{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ka{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Ka{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ka{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ld(t,e){return Ga(t,"POST","/v1/accounts:signUp",eo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ei._fromIdTokenResponse(e,r,i),o=D0(r);return new Ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=D0(r);return new Ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function D0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zu(e,n,r,i)}}function FI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(t,s,e,r):s})}async function RN(t,e,n=!1){const r=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $s(t,FI(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=cg(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e,n=!1){const r="signIn",i=await FI(t,r,e),s=await Ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bN(t,e){return jI(to(t),e)}async function NN(t,e,n){var r;const i=to(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ju(i,s,"signUpPassword");o=Ld(i,u)}else o=Ld(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ju(i,s,"signUpPassword");return Ld(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ni._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function ON(t,e,n){return bN(ze(t),no.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){return zi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ze(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $s(r,DN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MN(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function VN(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function $N(t){return ze(t).signOut()}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(){const t=xt();return hg(t)||ch(t)}const jN=1e3,UN=10;class zI extends UI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FN()&&cN(),this.fallbackToPolling=bI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zI.type="LOCAL";const zN=zI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI extends UI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BI.type="SESSION";const WI=BI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await BN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=pg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function HN(t){Dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function qN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KN(){return HI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebaseLocalStorageDb",QN=1,tc="firebaseLocalStorage",GI="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dh(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function YN(){const t=indexedDB.deleteDatabase(qI);return new Qa(t).toPromise()}function dp(){const t=indexedDB.open(qI,QN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:GI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await YN(),e(await dp()))})})}async function L0(t,e,n){const r=dh(t,!0).put({[GI]:e,value:n});return new Qa(r).toPromise()}async function XN(t,e){const n=dh(t,!1).get(e),r=await new Qa(n).toPromise();return r===void 0?null:r.value}function M0(t,e){const n=dh(t,!0).delete(e);return new Qa(n).toPromise()}const JN=800,ZN=3;class KI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(KN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qN(),!this.activeServiceWorker)return;this.sender=new WN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await L0(e,ec,"1"),await M0(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>M0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dh(i,!1).getAll();return new Qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KI.type="LOCAL";const eO=KI;new qa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t,e){return e?Yn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nO(t){return jI(t.auth,new mg(t),t.bypassAuthState)}function rO(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),PN(n,new mg(t),t.bypassAuthState)}async function iO(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),RN(n,new mg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nO;case"linkViaPopup":case"linkViaRedirect":return iO;case"reauthViaPopup":case"reauthViaRedirect":return rO;default:wn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new qa(2e3,1e4);class hs extends QI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sO.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="pendingRedirect",hu=new Map;class aO extends QI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hu.get(this.auth._key());if(!e){try{const r=await lO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hu.set(this.auth._key(),e)}return this.bypassAuthState||hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lO(t,e){const n=hO(e),r=cO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uO(t,e){hu.set(t._key(),e)}function cO(t){return Yn(t._redirectPersistence)}function hO(t){return cu(oO,t.config.apiKey,t.name)}async function dO(t,e,n=!1){const r=to(t),i=tO(r,e),o=await new aO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=10*60*1e3;class pO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fO&&this.cachedEventUids.clear(),this.cachedEventUids.has(V0(e))}saveEventToCache(e){this.cachedEventUids.add(V0(e)),this.lastProcessedEventTime=Date.now()}}function V0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e={}){return zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vO=/^https?/;async function _O(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gO(t);for(const n of e)try{if(wO(n))return}catch{}wn(t,"unauthorized-domain")}function wO(t){const e=hp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vO.test(n))return!1;if(yO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=new qa(3e4,6e4);function $0(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IO(t){return new Promise((e,n)=>{var r,i,s;function o(){$0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$0(),n(On(t,"network-request-failed"))},timeout:EO.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const a=dN("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},LI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw du=null,e})}let du=null;function TO(t){return du=du||IO(t),du}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new qa(5e3,15e3),SO="__/auth/iframe",AO="emulator/auth/iframe",CO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RO(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ug(e,AO):`https://${t.config.authDomain}/${SO}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=kO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ha(r).slice(1)}`}async function PO(t){const e=await TO(t),n=Dn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:RO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Dn().setTimeout(()=>{s(o)},xO.get());function l(){Dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NO=500,OO=600,DO="_blank",LO="http://localhost";class F0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MO(t,e,n,r=NO,i=OO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xt().toLowerCase();n&&(a=AI(u)?DO:n),SI(u)&&(e=e||LO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(lN(u)&&a!=="_self")return VO(e||"",a),new F0(null);const h=window.open(e||"",a,c);G(h,t,"popup-blocked");try{h.focus()}catch{}return new F0(h)}function VO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="__/auth/handler",FO="emulator/auth/handler",jO=encodeURIComponent("fac");async function j0(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof $I){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",D2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ka){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${jO}=${encodeURIComponent(l)}`:"";return`${UO(t)}?${Ha(a).slice(1)}${u}`}function UO({config:t}){return t.emulator?ug(t,FO):`https://${t.authDomain}/${$O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class zO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WI,this._completeRedirectFn=dO,this._overrideRedirectResult=uO}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await j0(e,n,r,hp(),i);return MO(e,o,pg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await j0(e,n,r,hp(),i);return HN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PO(e),r=new pO(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Md];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_O(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bI()||hg()||ch()}}const BO=zO;var U0="@firebase/auth",z0="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qO(t){Pi(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NI(t)},u=new yN(r,i,s,l);return _N(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new Xr("auth-internal",e=>{const n=to(e.getProvider("auth").getImmediate());return(r=>new WO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(U0,z0,HO(t)),Nn(U0,z0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=5*60,KO=hI("authIdTokenMaxAge")||GO;let B0=null;const QO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KO)return;const i=n==null?void 0:n.token;B0!==i&&(B0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YO(t=og()){const e=uh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vN(t,{popupRedirectResolver:BO,persistence:[eO,zN,WI]}),r=hI("authTokenSyncURL");if(r){const s=QO(r);VN(n,s,()=>s(n.currentUser)),MN(n,o=>s(o))}const i=lI("auth");return i&&wN(n,`http://${i}`),n}qO("Browser");var XO="firebase",JO="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(XO,JO,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="firebasestorage.googleapis.com",ZO="storageBucket",eD=2*60*1e3,tD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Fn{constructor(e,n,r=0){super(Vd(e),`Firebase Storage: ${n} (${Vd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function Vd(t){return"storage/"+t}function nD(){const t="An unknown error occurred, please check the error payload for server response.";return new jn(Vn.UNKNOWN,t)}function rD(){return new jn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iD(){return new jn(Vn.CANCELED,"User canceled the upload/download.")}function sD(t){return new jn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function oD(t){return new jn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function W0(t){return new jn(Vn.INVALID_ARGUMENT,t)}function JI(){return new jn(Vn.APP_DELETED,"The Firebase app was deleted.")}function aD(t){return new jn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw oD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===XI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${w}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<_.length;E++){const x=_[E],A=x.regex.exec(e);if(A){const b=A[x.indices.bucket];let N=A[x.indices.path];N||(N=""),r=new gn(b,N),x.postModify(r);break}}if(r==null)throw sD(e);return r}}class lD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let y=!1;function v(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function cD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){return t!==void 0}function H0(t,e,n,r){if(r<e)throw W0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw W0(`Invalid value for '${t}'. Expected ${n} or less.`)}function dD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nc||(nc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===nc.NO_ERROR,l=s.getStatus();if(!a||fD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===nc.ABORT;r(!1,new Fl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Fl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=nD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?JI():iD();o(l)}else{const l=rD();o(l)}};this.canceled_?n(!1,new Fl(!1,null,!0)):this.backoffId_=uD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _D(t,e,n,r,i,s,o=!0){const a=dD(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return yD(u,e),mD(u,n),gD(u,s),vD(u,r),new pD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ED(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rc(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ED(this._location.path)}get storage(){return this._service}get parent(){const e=wD(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new rc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aD(e)}}function q0(t,e){const n=e==null?void 0:e[ZO];return n==null?null:gn.makeFromBucketSpec(n,t)}function ID(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:dI(i,t.app.options.projectId))}class TD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=XI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eD,this._maxUploadRetryTime=tD,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=q0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=q0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lD(JI());{const o=_D(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const G0="@firebase/storage",K0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="storage";function xD(t=og(),e){t=ze(t);const r=uh(t,ZI).getImmediate({identifier:e}),i=uI("storage");return i&&SD(r,...i),r}function SD(t,e,n,r={}){ID(t,e,n,r)}function AD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new TD(n,r,i,e,Ui)}function CD(){Pi(new Xr(ZI,AD,"PUBLIC").setMultipleInstances(!0)),Nn(G0,K0,""),Nn(G0,K0,"esm2017")}CD();var kD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,gg=gg||{},Y=kD||self;function fh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RD(t){return Object.prototype.hasOwnProperty.call(t,$d)&&t[$d]||(t[$d]=++PD)}var $d="closure_uid_"+(1e9*Math.random()>>>0),PD=0;function bD(t,e,n){return t.call.apply(t.bind,arguments)}function ND(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=bD:_t=ND,_t.apply(null,arguments)}function jl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function si(){this.s=this.s,this.o=this.o}var OD=0;si.prototype.s=!1;si.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OD!=0)&&RD(this)};si.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Q0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var DD=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function Ea(t){return/^[\s\xa0]*$/.test(t)}function ph(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Cn(t){return ph().indexOf(t)!=-1}function vg(t){return vg[" "](t),t}vg[" "]=function(){};function LD(t,e){var n=CL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var MD=Cn("Opera"),Fs=Cn("Trident")||Cn("MSIE"),tT=Cn("Edge"),fp=tT||Fs,nT=Cn("Gecko")&&!(ph().toLowerCase().indexOf("webkit")!=-1&&!Cn("Edge"))&&!(Cn("Trident")||Cn("MSIE"))&&!Cn("Edge"),VD=ph().toLowerCase().indexOf("webkit")!=-1&&!Cn("Edge");function rT(){var t=Y.document;return t?t.documentMode:void 0}var pp;e:{var Fd="",jd=function(){var t=ph();if(nT)return/rv:([^\);]+)(\)|;)/.exec(t);if(tT)return/Edge\/([\d\.]+)/.exec(t);if(Fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VD)return/WebKit\/(\S+)/.exec(t);if(MD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jd&&(Fd=jd?jd[1]:""),Fs){var Ud=rT();if(Ud!=null&&Ud>parseFloat(Fd)){pp=String(Ud);break e}}pp=Fd}var mp;if(Y.document&&Fs){var Y0=rT();mp=Y0||parseInt(pp,10)||void 0}else mp=void 0;var $D=mp;function Ia(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nT){e:{try{vg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ia.$.h.call(this)}}Ze(Ia,wt);var FD={2:"touch",3:"pen",4:"mouse"};Ia.prototype.h=function(){Ia.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xa="closure_listenable_"+(1e6*Math.random()|0),jD=0;function UD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jD,this.fa=this.ia=!1}function mh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _g(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iT(t){const e={};for(const n in t)e[n]=t[n];return e}const X0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<X0.length;s++)n=X0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gh(t){this.src=t,this.g={},this.h=0}gh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=yp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function gp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=eT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var wg="closure_lm_"+(1e6*Math.random()|0),zd={};function oT(t,e,n,r,i){if(r&&r.once)return lT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)oT(t,e[s],n,r,i);return null}return n=Tg(n),t&&t[Xa]?t.O(e,n,Ya(r)?!!r.capture:!!r,i):aT(t,e,n,!1,r,i)}function aT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ya(i)?!!i.capture:!!i,a=Ig(t);if(a||(t[wg]=a=new gh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(cT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BD(){function t(n){return e.call(t.src,t.listener,n)}const e=WD;return t}function lT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lT(t,e[s],n,r,i);return null}return n=Tg(n),t&&t[Xa]?t.P(e,n,Ya(r)?!!r.capture:!!r,i):aT(t,e,n,!0,r,i)}function uT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)uT(t,e[s],n,r,i);else r=Ya(r)?!!r.capture:!!r,n=Tg(n),t&&t[Xa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=yp(s,n,r,i),-1<n&&(mh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ig(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yp(e,n,r,i)),(n=-1<t?e[t]:null)&&Eg(n))}function Eg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xa])gp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ig(e))?(gp(n,t),n.h==0&&(n.src=null,e[wg]=null)):mh(t)}}}function cT(t){return t in zd?zd[t]:zd[t]="on"+t}function WD(t,e){if(t.fa)t=!0;else{e=new Ia(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Eg(t),t=n.call(r,e)}return t}function Ig(t){return t=t[wg],t instanceof gh?t:null}var Bd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tg(t){return typeof t=="function"?t:(t[Bd]||(t[Bd]=function(e){return t.handleEvent(e)}),t[Bd])}function Xe(){si.call(this),this.i=new gh(this),this.S=this,this.J=null}Ze(Xe,si);Xe.prototype[Xa]=!0;Xe.prototype.removeEventListener=function(t,e,n,r){uT(this,t,e,n,r)};function at(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var i=e;e=new wt(r,t),sT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ul(o,r,!0,e)&&i}if(o=e.g=t,i=Ul(o,r,!0,e)&&i,i=Ul(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ul(o,r,!1,e)&&i}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mh(n[r]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ul(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&gp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xg=Y.JSON.stringify;class HD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qD(){var t=Sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GD{constructor(){this.h=this.g=null}add(e,n){const r=hT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hT=new HD(()=>new KD,t=>t.reset());class KD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function YD(t){Y.setTimeout(()=>{throw t},0)}let Ta,xa=!1,Sg=new GD,dT=()=>{const t=Y.Promise.resolve(void 0);Ta=()=>{t.then(XD)}};var XD=()=>{for(var t;t=qD();){try{t.h.call(t.g)}catch(n){YD(n)}var e=hT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xa=!1};function yh(t,e){Xe.call(this),this.h=t||1,this.g=e||Y,this.j=_t(this.qb,this),this.l=Date.now()}Ze(yh,Xe);L=yh.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(Ag(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ag(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){yh.$.N.call(this),Ag(this),delete this.g};function Cg(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function fT(t){t.g=Cg(()=>{t.g=null,t.i&&(t.i=!1,fT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JD extends si{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fT(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(t){si.call(this),this.h=t,this.g={}}Ze(Sa,si);var J0=[];function pT(t,e,n,r){Array.isArray(n)||(n&&(J0[0]=n.toString()),n=J0);for(var i=0;i<n.length;i++){var s=oT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function mT(t){_g(t.g,function(e,n){this.g.hasOwnProperty(n)&&Eg(e)},t),t.g={}}Sa.prototype.N=function(){Sa.$.N.call(this),mT(this)};Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vh(){this.g=!0}vh.prototype.Ea=function(){this.g=!1};function ZD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nL(t,n)+(r?" "+r:"")})}function tL(t,e){t.info(function(){return"TIMEOUT: "+e})}vh.prototype.info=function(){};function nL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xg(n)}catch{return e}}var Bi={},Z0=null;function _h(){return Z0=Z0||new Xe}Bi.Ta="serverreachability";function gT(t){wt.call(this,Bi.Ta,t)}Ze(gT,wt);function Aa(t){const e=_h();at(e,new gT(e))}Bi.STAT_EVENT="statevent";function yT(t,e){wt.call(this,Bi.STAT_EVENT,t),this.stat=e}Ze(yT,wt);function kt(t){const e=_h();at(e,new yT(e,t))}Bi.Ua="timingevent";function vT(t,e){wt.call(this,Bi.Ua,t),this.size=e}Ze(vT,wt);function Ja(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var wh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_T={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kg(){}kg.prototype.h=null;function e_(t){return t.h||(t.h=t.i())}function wT(){}var Za={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rg(){wt.call(this,"d")}Ze(Rg,wt);function Pg(){wt.call(this,"c")}Ze(Pg,wt);var vp;function Eh(){}Ze(Eh,kg);Eh.prototype.g=function(){return new XMLHttpRequest};Eh.prototype.i=function(){return{}};vp=new Eh;function el(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Sa(this),this.P=rL,t=fp?125:void 0,this.V=new yh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ET}function ET(){this.i=null,this.g="",this.h=!1}var rL=45e3,_p={},ic={};L=el.prototype;L.setTimeout=function(t){this.P=t};function wp(t,e,n){t.L=1,t.v=Th(sr(e)),t.s=n,t.S=!0,IT(t,null)}function IT(t,e){t.G=Date.now(),tl(t),t.A=sr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),PT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ET,t.g=XT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JD(_t(t.Pa,t,t.g),t.O)),pT(t.U,t.g,"readystatechange",t.nb),e=t.I?iT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Aa(),ZD(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&kn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||fp||this.g&&(this.h.h||this.g.ja()||i_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Aa(3):Aa(2)),Ih(this);var n=this.g.da();this.ca=n;t:if(TT(this)){var r=i_(this.g);t="";var i=r.length,s=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mi(this),Go(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ea(a)){var u=a;break t}}u=null}if(n=u)ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ep(this,n);else{this.i=!1,this.o=3,kt(12),mi(this),Go(this);break e}}this.S?(xT(this,c,o),fp&&this.i&&c==3&&(pT(this.U,this.V,"tick",this.mb),this.V.start())):(ds(this.j,this.m,o,null),Ep(this,o)),c==4&&mi(this),this.i&&!this.J&&(c==4?GT(this.l,this):(this.i=!1,tl(this)))}else xL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,kt(12)):(this.o=0,kt(13)),mi(this),Go(this)}}}catch{}finally{}};function TT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function xT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=iL(t,n),i==ic){e==4&&(t.o=4,kt(14),r=!1),ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_p){t.o=4,kt(15),ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ds(t.j,t.m,i,null),Ep(t,i);TT(t)&&i!=ic&&i!=_p&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mg(e),e.M=!0,kt(11))):(ds(t.j,t.m,n,"[Invalid Chunked Response]"),mi(t),Go(t))}L.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.C<e.length&&(Ih(this),xT(this,t,e),this.i&&t!=4&&tl(this))}};function iL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ic:(n=Number(e.substring(n,r)),isNaN(n)?_p:(r+=1,r+n>e.length?ic:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,mi(this)};function tl(t){t.Y=Date.now()+t.P,ST(t,t.P)}function ST(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ja(_t(t.lb,t),e)}function Ih(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tL(this.j,this.A),this.L!=2&&(Aa(),kt(17)),mi(this),this.o=2,Go(this)):ST(this,this.Y-t)};function Go(t){t.l.H==0||t.J||GT(t.l,t)}function mi(t){Ih(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ag(t.V),mT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ep(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ip(n.i,t))){if(!t.K&&Ip(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ac(n),Ah(n);else break e;Lg(n),kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ja(_t(n.ib,n),6e3));if(1>=OT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else gi(n,11)}else if((t.K||n.g==t)&&ac(n),!Ea(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bg(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,we(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=YT(r,r.J?r.pa:null,r.Y),o.K){DT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ih(a),tl(a)),r.g=o}else HT(r);0<n.j.length&&Ch(n)}else u[0]!="stop"&&u[0]!="close"||gi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gi(n,7):Dg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Aa(4)}catch{}}function sL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function AT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oL(t),r=sL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var CT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ii(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ii){this.h=t.h,sc(this,t.j),this.s=t.s,this.g=t.g,oc(this,t.m),this.l=t.l;var e=t.i,n=new Ca;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),t_(this,n),this.o=t.o}else t&&(e=String(t).match(CT))?(this.h=!1,sc(this,e[1]||"",!0),this.s=Po(e[2]||""),this.g=Po(e[3]||"",!0),oc(this,e[4]),this.l=Po(e[5]||"",!0),t_(this,e[6]||"",!0),this.o=Po(e[7]||"")):(this.h=!1,this.i=new Ca(null,this.h))}Ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bo(e,n_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bo(e,n_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bo(n,n.charAt(0)=="/"?cL:uL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bo(n,dL)),t.join("")};function sr(t){return new Ii(t)}function sc(t,e,n){t.j=n?Po(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function t_(t,e,n){e instanceof Ca?(t.i=e,fL(t.i,t.h)):(n||(e=bo(e,hL)),t.i=new Ca(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Th(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Po(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var n_=/[#\/\?@]/g,uL=/[#\?:]/g,cL=/[#\?]/g,hL=/[#\?@]/g,dL=/#/g;function Ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function oi(t){t.g||(t.g=new Map,t.h=0,t.i&&aL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Ca.prototype;L.add=function(t,e){oi(this),this.i=null,t=ro(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kT(t,e){oi(t),e=ro(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function RT(t,e){return oi(t),e=ro(t,e),t.g.has(e)}L.forEach=function(t,e){oi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){oi(this);let e=[];if(typeof t=="string")RT(this,t)&&(e=e.concat(this.g.get(ro(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return oi(this),this.i=null,t=ro(this,t),RT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function PT(t,e,n){kT(t,e),0<n.length&&(t.i=null,t.g.set(ro(t,e),yg(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ro(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fL(t,e){e&&!t.j&&(oi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(kT(this,r),PT(this,i,n))},t)),t.j=e}var pL=class{constructor(t,e){this.g=t,this.map=e}};function bT(t){this.l=t||mL,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mL=10;function NT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function OT(t){return t.h?1:t.g?t.g.size:0}function Ip(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bg(t,e){t.g?t.g.add(e):t.h=e}function DT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bT.prototype.cancel=function(){if(this.i=LT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function LT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yg(t.i)}var gL=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function yL(){this.g=new gL}function vL(t,e,n){const r=n||"";try{AT(t,function(i,s){let o=i;Ya(i)&&(o=xg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _L(t,e){const n=new vh;if(Y.Image){const r=new Image;r.onload=jl(zl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=jl(zl,n,r,"TestLoadImage: error",!1,e),r.onabort=jl(zl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=jl(zl,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function nl(t){this.l=t.fc||null,this.j=t.ob||!1}Ze(nl,kg);nl.prototype.g=function(){return new xh(this.l,this.j)};nl.prototype.i=function(t){return function(){return t}}({});function xh(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ng,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(xh,Xe);var Ng=0;L=xh.prototype;L.open=function(t,e){if(this.readyState!=Ng)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ka(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rl(this)),this.readyState=Ng};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;MT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function MT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rl(this):ka(this),this.readyState==3&&MT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,rl(this))};L.Ya=function(t){this.g&&(this.response=t,rl(this))};L.ka=function(){this.g&&rl(this)};function rl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ka(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ka(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wL=Y.JSON.parse;function Oe(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VT,this.L=this.M=!1}Ze(Oe,Xe);var VT="",EL=/^https?$/i,IL=["POST","PUT"];L=Oe.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vp.g(),this.C=this.u?e_(this.u):e_(vp),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){r_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=eT(IL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jT(this),0<this.B&&((this.L=TL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=Cg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){r_(this,s)}};function TL(t){return Fs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof gg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function r_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$T(t),Sh(t)}function $T(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),Sh(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sh(this,!0)),Oe.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?FT(this):this.kb())};L.kb=function(){FT(this)};function FT(t){if(t.h&&typeof gg<"u"&&(!t.C[1]||kn(t)!=4||t.da()!=2)){if(t.v&&kn(t)==4)Cg(t.La,0,t);else if(at(t,"readystatechange"),kn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(CT)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!EL.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var s=2<kn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",$T(t)}}finally{Sh(t)}}}}function Sh(t,e){if(t.g){jT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function jT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function kn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wL(e)}};function i_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case VT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xL(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ea(t[r]))continue;var n=QD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}zD(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function UT(t){let e="";return _g(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Og(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=UT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Eo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zT(t){this.Ga=0,this.j=[],this.l=new vh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Eo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Eo("baseRetryDelayMs",5e3,t),this.hb=Eo("retryDelaySeedMs",1e4,t),this.eb=Eo("forwardChannelMaxRetries",2,t),this.xa=Eo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bT(t&&t.concurrentRequestLimit),this.Ja=new yL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=zT.prototype;L.ra=8;L.H=1;function Dg(t){if(BT(t),t.H==3){var e=t.W++,n=sr(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),il(t,n),e=new el(t,t.l,e),e.L=2,e.v=Th(sr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=XT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),tl(e)}QT(t)}function Ah(t){t.g&&(Mg(t),t.g.cancel(),t.g=null)}function BT(t){Ah(t),t.u&&(Y.clearTimeout(t.u),t.u=null),ac(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ch(t){if(!NT(t.i)&&!t.m){t.m=!0;var e=t.Na;Ta||dT(),xa||(Ta(),xa=!0),Sg.add(e,t),t.C=0}}function SL(t,e){return OT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ja(_t(t.Na,t,e),KT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new el(this,this.l,t);let s=this.s;if(this.U&&(s?(s=iT(s),sT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=WT(this,i,e),n=sr(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),il(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(UT(s)))+"&"+e:this.o&&Og(n,this.o,s)),bg(this.i,i),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),i.aa=!0,wp(i,n,null)):wp(i,n,e),this.H=2}}else this.H==3&&(t?s_(this,t):this.j.length==0||NT(this.i)||s_(this))};function s_(t,e){var n;e?n=e.m:n=t.W++;const r=sr(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),il(t,r),t.o&&t.s&&Og(r,t.o,t.s),n=new el(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=WT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),bg(t.i,n),wp(n,r,e)}function il(t,e){t.na&&_g(t.na,function(n,r){we(e,r,n)}),t.h&&AT({},function(n,r){we(e,r,n)})}function WT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_t(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{vL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function HT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ta||dT(),xa||(Ta(),xa=!0),Sg.add(e,t),t.A=0}}function Lg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ja(_t(t.Ma,t),KT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,qT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ja(_t(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,kt(10),Ah(this),qT(this))};function Mg(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function qT(t){t.g=new el(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sr(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),il(t,e),t.o&&t.s&&Og(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Th(sr(e)),n.s=null,n.S=!0,IT(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Ah(this),Lg(this),kt(19))};function ac(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function GT(t,e){var n=null;if(t.g==e){ac(t),Mg(t),t.g=null;var r=2}else if(Ip(t.i,e))n=e.F,DT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=_h(),at(r,new vT(r,n)),Ch(t)}else HT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&SL(t,e)||r==2&&Lg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gi(t,5);break;case 4:gi(t,10);break;case 3:gi(t,6);break;default:gi(t,2)}}}function KT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function gi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=_t(t.pb,t);n||(n=new Ii("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||sc(n,"https"),Th(n)),_L(n.toString(),r)}else kt(2);t.H=0,t.h&&t.h.za(e),QT(t),BT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),kt(2)):(this.l.info("Failed to ping google.com"),kt(1))};function QT(t){if(t.H=0,t.ma=[],t.h){const e=LT(t.i);(e.length!=0||t.j.length!=0)&&(Q0(t.ma,e),Q0(t.ma,t.j),t.i.i.length=0,yg(t.j),t.j.length=0),t.h.ya()}}function YT(t,e,n){var r=n instanceof Ii?sr(n):new Ii(n);if(r.g!="")e&&(r.g=e+"."+r.g),oc(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ii(null);r&&sc(s,r),e&&(s.g=e),i&&oc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),il(t,r),r}function XT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new nl({ob:!0})):new Oe(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function JT(){}L=JT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function lc(){if(Fs&&!(10<=Number($D)))throw Error("Environmental error: no available transport.")}lc.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){Xe.call(this),this.g=new zT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ea(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new io(this)}Ze(qt,Xe);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=YT(t,null,t.Y),Ch(t)};qt.prototype.close=function(){Dg(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xg(t),t=n);e.j.push(new pL(e.fb++,t)),e.H==3&&Ch(e)};qt.prototype.N=function(){this.g.h=null,delete this.j,Dg(this.g),delete this.g,qt.$.N.call(this)};function ZT(t){Rg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(ZT,Rg);function ex(){Pg.call(this),this.status=1}Ze(ex,Pg);function io(t){this.g=t}Ze(io,JT);io.prototype.Ba=function(){at(this.g,"a")};io.prototype.Aa=function(t){at(this.g,new ZT(t))};io.prototype.za=function(t){at(this.g,new ex)};io.prototype.ya=function(){at(this.g,"b")};function AL(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(En,AL);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Wd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Wd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Wd(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var CL={};function Vg(t){return-128<=t&&128>t?LD(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return Es;if(0>t)return st(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tp;return new fe(e,0)}function tx(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(tx(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=Es,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Rn(Math.pow(e,s)),r=r.R(s).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var Tp=4294967296,Es=Vg(0),xp=Vg(1),o_=Vg(16777216);L=fe.prototype;L.ea=function(){if(Zt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tp+r)*e,e*=Tp}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xn(this))return"0";if(Zt(this))return"-"+st(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var i=cc(n,e).g;n=uc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Xn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Zt(t){return t.h==-1}L.X=function(t){return t=uc(this,t),Zt(t)?-1:Xn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(xp)}L.abs=function(){return Zt(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function uc(t,e){return t.add(st(e))}L.R=function(t){if(Xn(this)||Xn(t))return Es;if(Zt(this))return Zt(t)?st(this).R(st(t)):st(st(this).R(t));if(Zt(t))return st(this.R(st(t)));if(0>this.X(o_)&&0>t.X(o_))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Bl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Bl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Bl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Bl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function Bl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Io(t,e){this.g=t,this.h=e}function cc(t,e){if(Xn(e))throw Error("division by zero");if(Xn(t))return new Io(Es,Es);if(Zt(t))return e=cc(st(t),e),new Io(st(e.g),st(e.h));if(Zt(e))return e=cc(t,st(e)),new Io(st(e.g),e.h);if(30<t.g.length){if(Zt(t)||Zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xp,r=e;0>=r.X(t);)n=a_(n),r=a_(r);var i=Qi(n,1),s=Qi(r,1);for(r=Qi(r,2),n=Qi(n,2);!Xn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Qi(r,1),n=Qi(n,1)}return e=uc(t,i.R(e)),new Io(i,e)}for(i=Es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rn(n),o=s.R(e);Zt(o)||0<o.X(t);)n-=r,s=Rn(n),o=s.R(e);Xn(s)&&(s=xp),i=i.add(s),t=uc(t,o)}return new Io(i,t)}L.gb=function(t){return cc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function a_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Qi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new fe(i,t.h)}lc.prototype.createWebChannel=lc.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;wh.NO_ERROR=0;wh.TIMEOUT=8;wh.HTTP_ERROR=6;_T.COMPLETE="complete";wT.EventType=Za;Za.OPEN="a";Za.CLOSE="b";Za.ERROR="c";Za.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Rn;fe.fromString=tx;var kL=function(){return new lc},RL=function(){return _h()},Hd=wh,PL=_T,bL=Bi,l_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},NL=nl,Wl=wT,OL=Oe,DL=En,Is=fe;const u_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new ig("@firebase/firestore");function c_(){return Oi.logLevel}function z(t,...e){if(Oi.logLevel<=ae.DEBUG){const n=e.map($g);Oi.debug(`Firestore (${so}): ${t}`,...n)}}function or(t,...e){if(Oi.logLevel<=ae.ERROR){const n=e.map($g);Oi.error(`Firestore (${so}): ${t}`,...n)}}function js(t,...e){if(Oi.logLevel<=ae.WARN){const n=e.map($g);Oi.warn(`Firestore (${so}): ${t}`,...n)}}function $g(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${so}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function Te(t,e){t||K()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class ML{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VL{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new nx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new pt(e)}}class $L{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $L(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new jL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new qe(0,0))}static max(){return new J(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ra.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ra?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Ra{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const BL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Ra{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return BL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ee.fromString(e))}static fromName(e){return new B(Ee.fromString(e).popFirst(5))}static empty(){return new B(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ee(e.slice()))}}function WL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Jr(i,B.empty(),e)}function HL(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(J.min(),B.empty(),-1)}static max(){return new Jr(J.max(),B.empty(),-1)}}function qL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==GL)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ol(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fg.ae=-1;function kh(t){return t==null}function hc(t){return t===0&&1/t==-1/0}function QL(t){return typeof t=="number"&&Number.isInteger(t)&&!hc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ix(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hl(this.root,e,this.comparator,!0)}}class Hl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Et(this.comparator);return n.data=e,n}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Et(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sx("Invalid base64 string: "+s):s}}(e);return new St(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const YL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(Te(!!t),typeof t=="string"){let e=0;const n=YL.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ug(t){const e=t.mapValue.fields.__previous_value__;return jg(e)?Ug(e):e}function Pa(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ba&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jg(t)?4:JL(t)?9007199254740991:10:K()}function $n(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pa(t).isEqual(Pa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zr(i.timestampValue),a=Zr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Di(i.bytesValue).isEqual(Di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),a=Fe(s.doubleValue);return o===a?hc(o)===hc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(h_(o)!==h_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Na(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=Li(t),r=Li(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Fe(s.integerValue||s.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return f_(t.timestampValue,e.timestampValue);case 4:return f_(Pa(t),Pa(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Di(s),l=Di(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=le(a[u],l[u]);if(c!==0)return c}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(Fe(s.latitude),Fe(o.latitude));return a!==0?a:le(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=zs(a[u],l[u]);if(c)return c}return le(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ql.mapValue&&o===ql.mapValue)return 0;if(s===ql.mapValue)return 1;if(o===ql.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=le(l[h],c[h]);if(d!==0)return d;const p=zs(a[l[h]],u[c[h]]);if(p!==0)return p}return le(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function f_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Zr(t),r=Zr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Bs(t){return Sp(t)}function Sp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return B.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sp(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function p_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ap(t){return!!t&&"integerValue"in t}function zg(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fu(t){return!!t&&"mapValue"in t}function Ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ko(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ko(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ko(this.value))}}function ox(t){const e=[];return Wi(t.fields,(n,r)=>{const i=new yt([n]);if(fu(r)){const s=ox(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,J.min(),J.min(),J.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,J.min(),J.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,J.min(),J.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.position=e,this.inclusive=n}}function y_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=zs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function v_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{}class Ue extends ax{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tM(e,n,r):n==="array-contains"?new iM(e,r):n==="in"?new sM(e,r):n==="not-in"?new oM(e,r):n==="array-contains-any"?new aM(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nM(e,r):new rM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zs(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class In extends ax{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new In(e,n)}matches(e){return lx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lx(t){return t.op==="and"}function ux(t){return eM(t)&&lx(t)}function eM(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function Cp(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(ux(t))return t.filters.map(e=>Cp(e)).join(",");{const e=t.filters.map(n=>Cp(n)).join(",");return`${t.op}(${e})`}}function cx(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cx(o,i.filters[a]),!0):!1}(t,e):void K()}function hx(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(hx).join(" ,")+"}"}(t):"Filter"}class tM extends Ue{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class nM extends Ue{constructor(e,n){super(e,"in",n),this.keys=dx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rM extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=dx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class iM extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zg(n)&&Na(n.arrayValue,this.value)}}class sM extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Na(this.value.arrayValue,n)}}class oM extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Na(this.value.arrayValue,n)}}class aM extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Na(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function __(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lM(t,e,n,r,i,s,o)}function Bg(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.he=n}return e.he}function Wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!v_(t.startAt,e.startAt)&&v_(t.endAt,e.endAt)}function kp(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function uM(t,e,n,r,i,s,o,a){return new al(t,e,n,r,i,s,o,a)}function Rh(t){return new al(t)}function w_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Hg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function px(t){return t.collectionGroup!==null}function Ts(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=Hg(e),r=fx(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Qo(n)),e.Pe.push(new Qo(yt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Qo(yt.keyField(),s))}}}return e.Pe}function ar(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=__(e.path,e.collectionGroup,Ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ts(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qo(s.field,o))}const r=e.endAt?new dc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new dc(e.startAt.position,e.startAt.inclusive):null;e.Ie=__(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Rp(t,e){e.getFirstInequalityField(),Hg(t);const n=t.filters.concat([e]);return new al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pp(t,e,n){return new al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ph(t,e){return Wg(ar(t),ar(e))&&t.limitType===e.limitType}function mx(t){return`${Bg(ar(t))}|lt:${t.limitType}`}function bp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hx(i)).join(", ")}]`),kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bs(i)).join(",")),`Target(${r})`}(ar(t))}; limitType=${t.limitType})`}function bh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ts(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=y_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ts(r),i)||r.endAt&&!function(o,a,l){const u=y_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ts(r),i))}(t,e)}function cM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gx(t){return(e,n)=>{let r=!1;for(const i of Ts(t)){const s=hM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hM(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?zs(l,u):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ix(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=new Pe(B.comparator);function lr(){return dM}const yx=new Pe(B.comparator);function No(...t){let e=yx;for(const n of t)e=e.insert(n.key,n);return e}function vx(t){let e=yx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yi(){return Yo()}function _x(){return Yo()}function Yo(){return new oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const fM=new Pe(B.comparator),pM=new Et(B.comparator);function te(...t){let e=pM;for(const n of t)e=e.add(n);return e}const mM=new Et(le);function gM(){return mM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function Ex(t){return{integerValue:""+t}}function yM(t,e){return QL(e)?Ex(e):wx(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this._=void 0}}function vM(t,e,n){return t instanceof fc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jg(s)&&(s=Ug(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Oa?Tx(t,e):t instanceof Da?xx(t,e):function(i,s){const o=Ix(i,s),a=E_(o)+E_(i.Te);return Ap(o)&&Ap(i.Te)?Ex(a):wx(i.serializer,a)}(t,e)}function _M(t,e,n){return t instanceof Oa?Tx(t,e):t instanceof Da?xx(t,e):n}function Ix(t,e){return t instanceof pc?function(r){return Ap(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fc extends Nh{}class Oa extends Nh{constructor(e){super(),this.elements=e}}function Tx(t,e){const n=Sx(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Da extends Nh{constructor(e){super(),this.elements=e}}function xx(t,e){let n=Sx(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class pc extends Nh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function E_(t){return Fe(t.integerValue||t.doubleValue)}function Sx(t){return zg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Oa&&i instanceof Oa||r instanceof Da&&i instanceof Da?Us(r.elements,i.elements,$n):r instanceof pc&&i instanceof pc?$n(r.Te,i.Te):r instanceof fc&&i instanceof fc}(t.transform,e.transform)}class EM{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oh{}function Ax(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qg(t.key,nn.none()):new ll(t.key,t.data,nn.none());{const n=t.data,r=Dt.empty();let i=new Et(yt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Bt(i.toArray()),nn.none())}}function IM(t,e,n){t instanceof ll?function(i,s,o){const a=i.value.clone(),l=T_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!pu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=T_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Cx(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof ll?function(s,o,a,l){if(!pu(s.precondition,o))return a;const u=s.value.clone(),c=x_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,a,l){if(!pu(s.precondition,o))return a;const u=x_(s.fieldTransforms,l,o),c=o.data;return c.setAll(Cx(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return pu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Ix(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function I_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Us(r,i,(s,o)=>wM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ll extends Oh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends Oh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_M(o,a,n[i]))}return r}function x_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vM(s,o,e))}return r}class qg extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xM extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_x();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ax(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>I_(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>I_(n,r))}}class Gg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return fM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ie;function kM(t){switch(t){default:return K();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function kx(t){if(t===void 0)return or("GRPC error has no .code"),S.UNKNOWN;switch(t){case $e.OK:return S.OK;case $e.CANCELLED:return S.CANCELLED;case $e.UNKNOWN:return S.UNKNOWN;case $e.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case $e.INTERNAL:return S.INTERNAL;case $e.UNAVAILABLE:return S.UNAVAILABLE;case $e.UNAUTHENTICATED:return S.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case $e.NOT_FOUND:return S.NOT_FOUND;case $e.ALREADY_EXISTS:return S.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return S.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case $e.ABORTED:return S.ABORTED;case $e.OUT_OF_RANGE:return S.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return S.UNIMPLEMENTED;case $e.DATA_LOSS:return S.DATA_LOSS;default:return K()}}(ie=$e||($e={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Gl}static getOrCreateInstance(){return Gl===null&&(Gl=new Kg),Gl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Gl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=new Is([4294967295,4294967295],0);function S_(t){const e=RM().encode(t),n=new DL;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Is([n,r],0),new Is([i,s],0)]}class Qg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oo(`Invalid padding: ${n}`);if(r<0)throw new Oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Is.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Is.fromNumber(r)));return i.compare(PM)===1&&(i=new Is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=S_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=S_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ul.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(J.min(),i,new Pe(le),lr(),te())}}class ul{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ul(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class Rx{constructor(e,n){this.targetId=e,this.pe=n}}class Px{constructor(e,n,r=St.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class C_{constructor(){this.ye=0,this.we=R_(),this.Se=St.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=te(),n=te(),r=te();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new ul(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=R_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class bM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=lr(),this.$e=k_(),this.Ue=new Pe(le)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(kp(a))if(s===0){const l=new B(a.path);this.ze(i,l,gt.newNoDocument(l,J.min()))}else Te(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Kg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,y){var v,w,m,f,_,E;const x={localCacheCount:p,existenceFilterCount:y.count},A=y.unchangedNames;return A&&(x.bloomFilter={applied:h===0,hashCount:(v=A==null?void 0:A.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(f=(m=(w=A==null?void 0:A.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&f!==void 0?f:0,padding:(E=(_=A==null?void 0:A.bits)===null||_===void 0?void 0:_.padding)!==null&&E!==void 0?E:0},d&&(x.bloomFilter.mightContain=d)),x}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Di(s).toUint8Array()}catch(h){if(h instanceof sx)return js("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Qg(l,o,a)}catch(h){return js(h instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&kp(a.target)){const l=new B(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,gt.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=te();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Dh(e,n,this.Ue,this.Ke,r);return this.Ke=lr(),this.$e=k_(),this.Ue=new Pe(le),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new C_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Et(le),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new C_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function k_(){return new Pe(B.comparator)}function R_(){return new Pe(B.comparator)}const NM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),DM=(()=>({and:"AND",or:"OR"}))();class LM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Np(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MM(t,e){return mc(t,e.toTimestamp())}function Ln(t){return Te(!!t),J.fromTimestamp(function(n){const r=Zr(n);return new qe(r.seconds,r.nanos)}(t))}function Yg(t,e){return function(r){return new Ee(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Nx(t){const e=Ee.fromString(t);return Te(Mx(e)),e}function Op(t,e){return Yg(t.databaseId,e.path)}function qd(t,e){const n=Nx(e);if(n.get(1)!==t.databaseId.projectId)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Ox(n))}function Dp(t,e){return Yg(t.databaseId,e)}function VM(t){const e=Nx(t);return e.length===4?Ee.emptyPath():Ox(e)}function Lp(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ox(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P_(t,e,n){return{name:Op(t,e),fields:n.value.mapValue.fields}}function $M(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Te(c===void 0||typeof c=="string"),St.fromBase64String(c||"")):(Te(c===void 0||c instanceof Uint8Array),St.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:kx(u.code);return new $(c,u.message||"")}(o);n=new Px(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):J.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new mu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qd(t,r.document),s=r.readTime?Ln(r.readTime):J.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new mu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qd(t,r.document),s=r.removedTargetIds||[];n=new mu([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CM(i,s),a=r.targetId;n=new Rx(a,o)}}return n}function FM(t,e){let n;if(e instanceof ll)n={update:P_(t,e.key,e.value)};else if(e instanceof qg)n={delete:Op(t,e.key)};else if(e instanceof ai)n={update:P_(t,e.key,e.data),updateMask:KM(e.fieldMask)};else{if(!(e instanceof xM))return K();n={verify:Op(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function jM(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(J.min())&&(o=Ln(s)),new EM(o,i.transformResults||[])}(n,e))):[]}function UM(t,e){return{documents:[Dp(t,e.path)]}}function zM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Dp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Lx(In.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Yi(h.field),direction:HM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Np(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function BM(t){let e=VM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Dx(h);return d instanceof In&&ux(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Qo(Xi(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,kh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new dc(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new dc(p,d)}(n.endAt)),uM(e,i,o,s,a,"F",l,u)}function WM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>Dx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function HM(t){return NM[t]}function qM(t){return OM[t]}function GM(t){return DM[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return yt.fromServerFormat(t.fieldPath)}function Lx(t){return t instanceof Ue?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(n.field),op:qM(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>Lx(i));return r.length===1?r[0]:{compositeFilter:{op:GM(n.op),filters:r}}}(t):K()}function KM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Mx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.ct=e}}function YM(t){const e=BM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(){this.sn=new JM}addToCollectionParentIndex(e,n){return this.sn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Jr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class JM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Et(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Et(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ws(0)}static On(){return new Ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.changes=new oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xo(r.mutation,i,Bt.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=yi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=No();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=lr();const o=Yo(),a=function(){return Yo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ai)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Xo(c.mutation,u,c.mutation.getFieldMask(),qe.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new eV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Yo();let i=new Pe((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=_x();c.forEach(d=>{if(!s.has(d)){const p=Ax(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):px(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(yi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:vx(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=No();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=No();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,h){return new al(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,gt.newInvalidDocument(u)))});let o=No();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Xo(u.mutation,l,Bt.empty(),qe.now()),bh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return R.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:YM(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.overlays=new Pe(B.comparator),this.cr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=yi(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=yi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AM(n,r));let s=this.cr.get(n);s===void 0&&(s=te(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.lr=new Et(Ke.hr),this.Pr=new Et(Ke.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ke(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new B(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new B(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=te();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return B.comparator(e.key,n.key)||le(e.mr,n.mr)}static Ir(e,n){return le(e.mr,n.mr)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Et(Ke.hr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Et(le);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),R.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new B(s),0);let a=new Et(le);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),R.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return R.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ke(n,0),i=this.pr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e){this.Dr=e,this.docs=function(){return new Pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=lr();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qL(HL(c),r)<=0||(i.has(c.key)||bh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oV(this)}getSize(e){return R.resolve(this.size)}}class oV extends ZM{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.persistence=e,this.Cr=new oo(n=>Bg(n),Wg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Xg,this.targetCount=0,this.Or=Ws.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),R.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Ln(n),R.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Fg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new aV(this),this.indexManager=new XM,this.remoteDocumentCache=function(i){return new sV(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new QM(n),this.Qr=new nV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new iV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new uV(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return R.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class uV extends KL{constructor(e){super(),this.currentSequenceNumber=e}}class Jg{constructor(e){this.persistence=e,this.Wr=new Xg,this.Gr=null}static zr(e){return new Jg(e)}get jr(){if(this.Gr)return this.Gr;throw K()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.jr,r=>{const i=B.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return R.or([()=>R.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(w_(n))return R.resolve(null);let r=ar(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pp(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Pp(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return w_(n)||i.isEqual(J.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(c_()<=ae.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bp(n)),this.ji(e,o,n,WL(i,-1)))})}Gi(e,n){let r=new Et(gx(e));return n.forEach((i,s)=>{bh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return c_()<=ae.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",bp(n)),this.Ki.getDocumentsMatchingQuery(e,n,Jr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Pe(le),this.Yi=new oo(s=>Bg(s),Wg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function dV(t,e,n,r){return new hV(t,e,n,r)}async function Vx(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function fV(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=R.resolve();return d.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const w=u.docVersions.get(y);Te(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $x(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function pV(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(St.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(v,w,m){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=lr(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(J.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function mV(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=lr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function gV(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yV(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Mp(t,e,n){const r=Z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ol(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function b_(t,e,n){const r=Z(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=Z(l),d=h.Yi.get(c);return d!==void 0?R.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(a=>(vV(r,cM(e),a),{documents:a,ss:s})))}function vV(t,e,n){let r=t.Zi.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class N_{constructor(){this.activeTargetIds=gM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _V{constructor(){this.Hs=new N_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new N_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl=null;function Gd(){return Kl===null?Kl=function(){return 268435456+Math.round(2147483648*Math.random())}():Kl++,"0x"+Kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class TV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Gd(),l=this.mo(n,r);z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(z("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw js("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+so}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=EV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Gd();return new Promise((o,a)=>{const l=new OL;l.setWithCredentials(!0),l.listenOnce(PL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hd.NO_ERROR:const c=l.getResponseJson();z(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Hd.TIMEOUT:z(dt,`RPC '${e}' ${s} timed out`),a(new $(S.DEADLINE_EXCEEDED,"Request time out"));break;case Hd.HTTP_ERROR:const h=l.getStatus();if(z(dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(p.status);a(new $(y,p.message))}else a(new $(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(S.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{z(dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);z(dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Gd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kL(),a=RL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new NL({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");z(dt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const y=new IV({so:w=>{p?z(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(z(dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),z(dt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),v=(w,m,f)=>{w.listen(m,_=>{try{f(_)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Wl.EventType.OPEN,()=>{p||z(dt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Wl.EventType.CLOSE,()=>{p||(p=!0,z(dt,`RPC '${e}' stream ${i} transport closed`),y.Po())}),v(h,Wl.EventType.ERROR,w=>{p||(p=!0,js(dt,`RPC '${e}' stream ${i} transport errored:`,w),y.Po(new $(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,Wl.EventType.MESSAGE,w=>{var m;if(!p){const f=w.data[0];Te(!!f);const _=f,E=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(E){z(dt,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let A=function(H){const U=$e[H];if(U!==void 0)return kx(U)}(x),b=E.message;A===void 0&&(A=S.INTERNAL,b="Unknown error status: "+x+" with message "+E.message),p=!0,y.Po(new $(A,b)),h.close()}else z(dt,`RPC '${e}' stream ${i} received:`,f),y.Io(f)}}),v(a,bL.STAT_EVENT,w=>{w.stat===l_.PROXY?z(dt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===l_.NOPROXY&&z(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){return new LM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Fx(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new $(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xV extends jx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=$M(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ln(o.readTime):J.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Lp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kp(l)?{documents:UM(s,l)}:{query:zM(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bx(s,o.resumeToken);const u=Np(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=mc(s,o.snapshotVersion.toTimestamp());const u=Np(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=WM(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Lp(this.serializer),n.removeTarget=e,this.Ho(n)}}class SV extends jx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=jM(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.u_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Lp(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FM(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(S.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(S.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class CV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(or(n),this.d_=!1):z("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Hi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.y_.add(4),await cl(u),u.b_.set("Unknown"),u.y_.delete(4),await Mh(u)}(this))})}),this.b_=new CV(r,i)}}async function Mh(t){if(Hi(t))for(const e of t.w_)await e(!0)}async function cl(t){for(const e of t.w_)await e(!1)}function Ux(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),ny(n)?ty(n):ao(n).Uo()&&ey(n,e))}function zx(t,e){const n=Z(t),r=ao(n);n.p_.delete(e),r.Uo()&&Bx(n,e),n.p_.size===0&&(r.Uo()?r.zo():Hi(n)&&n.b_.set("Unknown"))}function ey(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ao(t).i_(e)}function Bx(t,e){t.D_.Be(e),ao(t).s_(e)}function ty(t){t.D_=new bM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ao(t).start(),t.b_.A_()}function ny(t){return Hi(t)&&!ao(t).$o()&&t.p_.size>0}function Hi(t){return Z(t).y_.size===0}function Wx(t){t.D_=void 0}async function RV(t){t.p_.forEach((e,n)=>{ey(t,e)})}async function PV(t,e){Wx(t),ny(t)?(t.b_.m_(e),ty(t)):t.b_.set("Unknown")}async function bV(t,e,n){if(t.b_.set("Online"),e instanceof Px&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(t,r)}else if(e instanceof mu?t.D_.We(e):e instanceof Rx?t.D_.Ze(e):t.D_.je(e),!n.isEqual(J.min()))try{const r=await $x(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(St.EMPTY_BYTE_STRING,c.snapshotVersion)),Bx(s,l);const h=new Pr(c.target,l,u,c.sequenceNumber);ey(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await gc(t,r)}}async function gc(t,e,n){if(!ol(e))throw e;t.y_.add(1),await cl(t),t.b_.set("Offline"),n||(n=()=>$x(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Mh(t)})}function Hx(t,e){return e().catch(n=>gc(t,n,e))}async function Vh(t){const e=Z(t),n=ei(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;NV(e);)try{const i=await gV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,OV(e,i)}catch(i){await gc(e,i)}qx(e)&&Gx(e)}function NV(t){return Hi(t)&&t.g_.length<10}function OV(t,e){t.g_.push(e);const n=ei(t);n.Uo()&&n.__&&n.a_(e.mutations)}function qx(t){return Hi(t)&&!ei(t).$o()&&t.g_.length>0}function Gx(t){ei(t).start()}async function DV(t){ei(t).l_()}async function LV(t){const e=ei(t);for(const n of t.g_)e.a_(n.mutations)}async function MV(t,e,n){const r=t.g_.shift(),i=Gg.from(r,e,n);await Hx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vh(t)}async function VV(t,e){e&&ei(t).__&&await async function(r,i){if(function(o){return kM(o)&&o!==S.ABORTED}(i.code)){const s=r.g_.shift();ei(r).Go(),await Hx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vh(r)}}(t,e),qx(t)&&Gx(t)}async function D_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Hi(n);n.y_.add(3),await cl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Mh(n)}async function $V(t,e){const n=Z(t);e?(n.y_.delete(2),await Mh(n)):e||(n.y_.add(2),await cl(n),n.b_.set("Unknown"))}function ao(t){return t.v_||(t.v_=function(n,r,i){const s=Z(n);return s.P_(),new xV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:RV.bind(null,t),uo:PV.bind(null,t),r_:bV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),ny(t)?ty(t):t.b_.set("Unknown")):(await t.v_.stop(),Wx(t))})),t.v_}function ei(t){return t.C_||(t.C_=function(n,r,i){const s=Z(n);return s.P_(),new SV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:DV.bind(null,t),uo:VV.bind(null,t),c_:LV.bind(null,t),u_:MV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Vh(t)):(await t.C_.stop(),t.g_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ry(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(t,e){if(or("AsyncQueue",`${e}: ${t}`),ol(t))return new $(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=No(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.F_=new Pe(B.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):K():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,n,xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ph(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(){this.x_=void 0,this.listeners=[]}}class jV{constructor(){this.queries=new oo(e=>mx(e),Ph),this.onlineState="Unknown",this.O_=new Set}}async function sy(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new FV),i)try{s.x_=await n.onListen(r)}catch(o){const a=iy(o,`Initialization of query '${bp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&ay(n)}async function oy(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function UV(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ay(n)}function zV(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ay(t){t.O_.forEach(e=>{e.next()})}class ly{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.key=e}}class Qx{constructor(e){this.key=e}}class BV{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=te(),this.mutatedKeys=te(),this.na=gx(e),this.ra=new xs(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new L_,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=bh(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return y(d)-y(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Hs(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new L_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=te(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Qx(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Kx(r))}),n}ha(e){this.X_=e.ss,this.ta=te();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Hs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class WV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HV{constructor(e){this.key=e,this.Ia=!1}}class qV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new oo(a=>mx(a),Ph),this.da=new Map,this.Aa=new Set,this.Ra=new Pe(B.comparator),this.Va=new Map,this.ma=new Xg,this.fa={},this.ga=new Map,this.pa=Ws.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function GV(t,e){const n=r4(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await yV(n.localStore,ar(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await KV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ux(n.remoteStore,o)}return i}async function KV(t,e,n,r,i){t.wa=(h,d,p)=>async function(v,w,m,f){let _=w.view.sa(m);_.zi&&(_=await b_(v.localStore,w.query,!1).then(({documents:A})=>w.view.sa(A,_)));const E=f&&f.targetChanges.get(w.targetId),x=w.view.applyChanges(_,v.isPrimaryClient,E);return V_(v,w.targetId,x.ca),x.snapshot}(t,h,d,p);const s=await b_(t.localStore,e,!0),o=new BV(e,s.ss),a=o.sa(s.documents),l=ul.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);V_(t,n,u.ca);const c=new WV(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function QV(t,e){const n=Z(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Ph(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zx(n.remoteStore,r.targetId),Vp(n,r.targetId)}).catch(sl)):(Vp(n,r.targetId),await Mp(n.localStore,r.targetId,!0))}async function YV(t,e,n){const r=i4(t);try{const i=await function(o,a){const l=Z(o),u=qe.now(),c=a.reduce((p,y)=>p.add(y.key),te());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=lr(),v=te();return l.Xi.getEntries(p,c).next(w=>{y=w,y.forEach((m,f)=>{f.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(w=>{h=w;const m=[];for(const f of a){const _=TM(f,h.get(f.key).overlayedDocument);_!=null&&m.push(new ai(f.key,_,ox(_.value.mapValue),nn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:vx(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Pe(le)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await hl(r,i.changes),await Vh(r.remoteStore)}catch(i){const s=iy(i,"Failed to persist write");n.reject(s)}}async function Yx(t,e){const n=Z(t);try{const r=await pV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Te(o.Ia):i.removedDocuments.size>0&&(Te(o.Ia),o.Ia=!1))}),await hl(n,r,e)}catch(r){await sl(r)}}function M_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&ay(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XV(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Pe(B.comparator);o=o.insert(s,gt.newNoDocument(s,J.min()));const a=te().add(s),l=new Dh(J.min(),new Map,new Pe(le),o,a);await Yx(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),uy(r)}else await Mp(r.localStore,e,!1).then(()=>Vp(r,e,n)).catch(sl)}async function JV(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await fV(n.localStore,e);Jx(n,r,null),Xx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hl(n,i)}catch(i){await sl(i)}}async function ZV(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Te(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Jx(r,e,n),Xx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hl(r,i)}catch(i){await sl(i)}}function Xx(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function Jx(t,e,n){const r=Z(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Vp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Zx(t,r)})}function Zx(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(zx(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),uy(t))}function V_(t,e,n){for(const r of n)r instanceof Kx?(t.ma.addReference(r.key,e),e4(t,r)):r instanceof Qx?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Zx(t,r.key)):K()}function e4(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Aa.add(r),uy(t))}function uy(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new B(Ee.fromString(e)),r=t.pa.next();t.Va.set(r,new HV(n)),t.Ra=t.Ra.insert(n,r),Ux(t.remoteStore,new Pr(ar(Rh(n.path)),r,"TargetPurposeLimboResolution",Fg.ae))}}async function hl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Zg.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,d=>R.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ol(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(d,v)}}}(r.localStore,s))}async function t4(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await Vx(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new $(S.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hl(n,r.ts)}}function n4(t,e){const n=Z(t),r=n.Va.get(e);if(r&&r.Ia)return te().add(r.key);{let i=te();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function r4(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XV.bind(null,e),e.Ta.r_=UV.bind(null,e.eventManager),e.Ta.Sa=zV.bind(null,e.eventManager),e}function i4(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZV.bind(null,e),e}class $_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dV(this.persistence,new cV,e.initialUser,this.serializer)}createPersistence(e){return new lV(Jg.zr,this.serializer)}createSharedClientState(e){return new _V}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class s4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t4.bind(null,this.syncEngine),await $V(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jV}()}createDatastore(e){const n=Lh(e.databaseInfo.databaseId),r=function(s){return new TV(s)}(e.databaseInfo);return function(s,o,a,l){return new AV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new kV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>M_(this.syncEngine,n,0),function(){return O_.v()?new O_:new wV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new qV(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);z("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await cl(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=rx.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=iy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qd(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l4(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>D_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>D_(e.remoteStore,s)),t._onlineComponents=e}function a4(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function l4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!a4(n))throw n;js("Error using user provided cache. Falling back to memory cache: "+n),await Qd(t,new $_)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Qd(t,new $_);return t._offlineComponents}async function eS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await F_(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await F_(t,new s4))),t._onlineComponents}function u4(t){return eS(t).then(e=>e.syncEngine)}async function yc(t){const e=await eS(t),n=e.eventManager;return n.onListen=GV.bind(null,e.syncEngine),n.onUnlisten=QV.bind(null,e.syncEngine),n}function c4(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new cy({next:d=>{o.enqueueAndForget(()=>oy(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new $(S.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new $(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new ly(Rh(a.path),c,{includeMetadataChanges:!0,W_:!0});return sy(s,h)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}function h4(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new cy({next:d=>{o.enqueueAndForget(()=>oy(s,h)),d.fromCache&&l.source==="server"?u.reject(new $(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new ly(a,c,{includeMetadataChanges:!0,W_:!0});return sy(s,h)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e,n){if(!n)throw new $(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function d4(t,e,n,r){if(e===!0&&r===!0)throw new $(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function U_(t){if(!B.isDocumentKey(t))throw new $(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z_(t){if(B.isDocumentKey(t))throw new $(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(t);throw new $(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LL;switch(r.type){case"firstParty":return new FL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j_.get(n);r&&(z("ComponentProvider","Removing Datastore"),j_.delete(n),r.terminate())}(this),Promise.resolve()}}function f4(t,e,n,r={}){var i;const s=(t=jt(t,Fh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=pt.MOCK_USER;else{a=dI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new $(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(u)}t._authCredentials=new ML(new nx(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qi(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Hr extends qi{constructor(e,n,r){super(e,n,Rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new B(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function lo(t,e,...n){if(t=ze(t),nS("collection","path",e),t instanceof Fh){const r=Ee.fromString(e,...n);return z_(r),new Hr(t,null,r)}{if(!(t instanceof It||t instanceof Hr))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return z_(r),new Hr(t.firestore,null,r)}}function vt(t,e,...n){if(t=ze(t),arguments.length===1&&(e=rx.V()),nS("doc","path",e),t instanceof Fh){const r=Ee.fromString(e,...n);return U_(r),new It(t,null,new B(r))}{if(!(t instanceof It||t instanceof Hr))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return U_(r),new It(t.firestore,t instanceof Hr?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Fx(this,"async_queue_retry"),this.Xa=()=>{const n=Kd();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Kd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Zn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ol(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=ry.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&K()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function W_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ur extends Fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new p4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rS(this),this._firestoreClient.terminate()}}function m4(t,e){const n=typeof t=="object"?t:og(),r=typeof t=="string"?t:e||"(default)",i=uh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uI("firestore");s&&f4(i,...s)}return i}function jh(t){return t._firestoreClient||rS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new XL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,tS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new o4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qs(St.fromBase64String(e))}catch(n){throw new $(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qs(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=/^__.*__$/;class y4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new ll(e,this.data,n,this.fieldTransforms)}}class iS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class fy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new fy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return vc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(sS(this.uu)&&g4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class v4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lh(e)}Ru(e,n,r,i=!1){return new fy({uu:e,methodName:n,Au:r,path:yt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zh(t){const e=t._freezeSettings(),n=Lh(t._databaseId);return new v4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oS(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);py("Data must be an object, but it was:",o,r);const a=aS(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=$p(e,h,n);if(!o.contains(d))throw new $(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);uS(c,d)||c.push(d)}l=new Bt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new y4(new Dt(a),l,u)}class Bh extends hy{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bh}}function _4(t,e,n,r){const i=t.Ru(1,e,n);py("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();Wi(r,(l,u)=>{const c=my(e,l,n);u=ze(u);const h=i.Iu(c);if(u instanceof Bh)s.push(c);else{const d=dl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Bt(s);return new iS(o,a,i.fieldTransforms)}function w4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[$p(e,r,n)],l=[i];if(s.length%2!=0)throw new $(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push($p(e,s[d])),l.push(s[d+1]);const u=[],c=Dt.empty();for(let d=a.length-1;d>=0;--d)if(!uS(u,a[d])){const p=a[d];let y=l[d];y=ze(y);const v=o.Iu(p);if(y instanceof Bh)u.push(p);else{const w=dl(y,v);w!=null&&(u.push(p),c.set(p,w))}}const h=new Bt(u);return new iS(c,h,o.fieldTransforms)}function E4(t,e,n,r=!1){return dl(n,t.Ru(r?4:3,e))}function dl(t,e){if(lS(t=ze(t)))return py("Unsupported field value:",e,t),aS(t,e);if(t instanceof hy)return function(r,i){if(!sS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=dl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:mc(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(i.serializer,s)}}if(r instanceof dy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qs)return{bytesValue:bx(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${$h(r)}`)}(t,e)}function aS(t,e){const n={};return ix(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(r,i)=>{const s=dl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof dy||t instanceof qs||t instanceof It||t instanceof hy)}function py(t,e,n){if(!lS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$h(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function $p(t,e,n){if((e=ze(e))instanceof Uh)return e._internalPath;if(typeof e=="string")return my(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const I4=new RegExp("[~\\*/\\[\\]]");function my(t,e,n){if(e.search(I4)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uh(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(S.INVALID_ARGUMENT,a+t+l)}function uS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new T4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class T4 extends cS{data(){return super.data()}}function gy(t,e){return typeof e=="string"?my(t,e):e instanceof Uh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yy{}class x4 extends yy{}function S4(t,e,...n){let r=[];e instanceof yy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof vy).length,a=s.filter(l=>l instanceof Wh).length;if(o>1||o>0&&a>0)throw new $(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Wh extends x4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wh(e,n,r)}_apply(e){const n=this._parse(e);return dS(e._query,n),new qi(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=zh(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new $(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){q_(h,c);const p=[];for(const y of h)p.push(H_(l,s,y));d={arrayValue:{values:p}}}else d=H_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||q_(h,c),d=E4(a,o,h,c==="in"||c==="not-in");return Ue.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function A4(t,e,n){const r=e,i=gy("where",t);return Wh._create(i,r,n)}class vy extends yy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)dS(o,l),o=Rp(o,l)}(e._query,n),new qi(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function H_(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new $(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!px(e)&&n.indexOf("/")!==-1)throw new $(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!B.isDocumentKey(r))throw new $(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return p_(t,new B(r))}if(n instanceof It)return p_(t,n._key);throw new $(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$h(n)}.`)}function q_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dS(t,e){if(e.isInequality()){const r=Hg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new $(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=fx(t);s!==null&&C4(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function C4(t,e,n){if(!n.isEqual(e))throw new $(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class k4{convertValue(e,n="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dy(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ug(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pa(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);Te(Mx(r));const i=new ba(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pS extends cS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gu extends pS{data(e={}){return super.data(e)}}class mS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Do(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gu(this._firestore,this._userDataWriter,r.key,r,new Do(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new gu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Do(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new gu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Do(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:R4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function R4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){t=jt(t,It);const e=jt(t.firestore,ur);return c4(jh(e),t._key).then(n=>yS(e,t,n))}class wy extends k4{constructor(e){super(),this.firestore=e}convertBytes(e){return new qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function P4(t){t=jt(t,qi);const e=jt(t.firestore,ur),n=jh(e),r=new wy(e);return hS(t._query),h4(n,t._query).then(i=>new mS(e,r,t,i))}function Ey(t,e,n){t=jt(t,It);const r=jt(t.firestore,ur),i=fS(t.converter,e,n);return qh(r,[oS(zh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function Ti(t,e,n,...r){t=jt(t,It);const i=jt(t.firestore,ur),s=zh(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof Uh?w4(s,"updateDoc",t._key,e,n,r):_4(s,"updateDoc",t._key,e),qh(i,[o.toMutation(t._key,nn.exists(!0))])}function gS(t){return qh(jt(t.firestore,ur),[new qg(t._key,nn.none())])}function b4(t,e){const n=jt(t.firestore,ur),r=vt(t),i=fS(t.converter,e);return qh(n,[oS(zh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Hh(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||W_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(W_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof It)u=jt(t.firestore,ur),c=Rh(t._key.path),l={next:h=>{e[o]&&e[o](yS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,qi);u=jt(h.firestore,ur),c=h._query;const d=new wy(u);l={next:p=>{e[o]&&e[o](new mS(u,d,h,p))},error:e[o+1],complete:e[o+2]},hS(t._query)}return function(d,p,y,v){const w=new cy(v),m=new ly(p,w,y);return d.asyncQueue.enqueueAndForget(async()=>sy(await yc(d),m)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>oy(await yc(d),m))}}(jh(u),c,a,l)}function qh(t,e){return function(r,i){const s=new Zn;return r.asyncQueue.enqueueAndForget(async()=>YV(await u4(r),i,s)),s.promise}(jh(t),e)}function yS(t,e,n){const r=n.docs.get(e._key),i=new wy(t);return new pS(t,i,e._key,r,new Do(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){so=i})(Ui),Pi(new Xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ur(new VL(r.getProvider("auth-internal")),new UL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ba(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nn(u_,"4.1.0",e),Nn(u_,"4.1.0","esm2017")})();const N4={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},Iy=mI(N4);xD(Iy);const Ss=YO(Iy),Me=m4(Iy);function mn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ti(t){return!!t&&!!t[xe]}function cr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===U4}(t)||Array.isArray(t)||!!t[Z_]||!!(!((e=t.constructor)===null||e===void 0)&&e[Z_])||Ty(t)||xy(t))}function Mi(t,e,n){n===void 0&&(n=!1),uo(t)===0?(n?Object.keys:Cs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function uo(t){var e=t[xe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Ty(t)?2:xy(t)?3:0}function As(t,e){return uo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function O4(t,e){return uo(t)===2?t.get(e):t[e]}function vS(t,e,n){var r=uo(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function _S(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Ty(t){return F4&&t instanceof Map}function xy(t){return j4&&t instanceof Set}function hi(t){return t.o||t.t}function Sy(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=ES(t);delete e[xe];for(var n=Cs(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Ay(t,e){return e===void 0&&(e=!1),Cy(t)||ti(t)||!cr(t)||(uo(t)>1&&(t.set=t.add=t.clear=t.delete=D4),Object.freeze(t),e&&Mi(t,function(n,r){return Ay(r,!0)},!0)),t}function D4(){mn(2)}function Cy(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Mn(t){var e=zp[t];return e||mn(18,t),e}function L4(t,e){zp[t]||(zp[t]=e)}function Fp(){return La}function Yd(t,e){e&&(Mn("Patches"),t.u=[],t.s=[],t.v=e)}function _c(t){jp(t),t.p.forEach(M4),t.p=null}function jp(t){t===La&&(La=t.l)}function G_(t){return La={p:[],l:La,h:t,m:!0,_:0}}function M4(t){var e=t[xe];e.i===0||e.i===1?e.j():e.g=!0}function Xd(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Mn("ES5").S(e,t,r),r?(n[xe].P&&(_c(e),mn(4)),cr(t)&&(t=wc(e,t),e.l||Ec(e,t)),e.u&&Mn("Patches").M(n[xe].t,t,e.u,e.s)):t=wc(e,n,[]),_c(e),e.u&&e.v(e.u,e.s),t!==wS?t:void 0}function wc(t,e,n){if(Cy(e))return e;var r=e[xe];if(!r)return Mi(e,function(a,l){return K_(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Ec(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Sy(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Mi(s,function(a,l){return K_(t,r,i,a,l,n,o)}),Ec(t,i,!1),n&&t.u&&Mn("Patches").N(r,n,t.u,t.s)}return r.o}function K_(t,e,n,r,i,s,o){if(ti(i)){var a=wc(t,i,s&&e&&e.i!==3&&!As(e.R,r)?s.concat(r):void 0);if(vS(n,r,a),!ti(a))return;t.m=!1}else o&&n.add(i);if(cr(i)&&!Cy(i)){if(!t.h.D&&t._<1)return;wc(t,i),e&&e.A.l||Ec(t,i)}}function Ec(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Ay(e,n)}function Jd(t,e){var n=t[xe];return(n?hi(n):t)[e]}function Q_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Ar(t){t.P||(t.P=!0,t.l&&Ar(t.l))}function Zd(t){t.o||(t.o=Sy(t.t))}function Up(t,e,n){var r=Ty(e)?Mn("MapSet").F(e,n):xy(e)?Mn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Fp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Ma;o&&(l=[a],u=Lo);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Mn("ES5").J(e,n);return(n?n.A:Fp()).p.push(r),r}function V4(t){return ti(t)||mn(22,t),function e(n){if(!cr(n))return n;var r,i=n[xe],s=uo(n);if(i){if(!i.P&&(i.i<4||!Mn("ES5").K(i)))return i.t;i.I=!0,r=Y_(n,s),i.I=!1}else r=Y_(n,s);return Mi(r,function(o,a){i&&O4(i.t,o)===a||vS(r,o,e(a))}),s===3?new Set(r):r}(t)}function Y_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Sy(t)}function $4(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[xe];return Ma.get(l,s)},set:function(l){var u=this[xe];Ma.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][xe];if(!a.P)switch(a.i){case 5:r(a)&&Ar(a);break;case 4:n(a)&&Ar(a)}}}function n(s){for(var o=s.t,a=s.k,l=Cs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==xe){var h=o[c];if(h===void 0&&!As(o,c))return!0;var d=a[c],p=d&&d[xe];if(p?p.t!==h:!_S(d,h))return!0}}var y=!!o[xe];return l.length!==Cs(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};L4("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var y=ES(h);delete y[xe];for(var v=Cs(y),w=0;w<v.length;w++){var m=v[w];y[m]=t(m,c||!!y[m].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(a,s),u={i:a?5:4,A:o?o.A:Fp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,xe,{value:u,writable:!0}),l},S:function(s,o,a){a?ti(o)&&o[xe].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[xe];if(c){var h=c.t,d=c.k,p=c.R,y=c.i;if(y===4)Mi(d,function(_){_!==xe&&(h[_]!==void 0||As(h,_)?p[_]||l(d[_]):(p[_]=!0,Ar(c)))}),Mi(h,function(_){d[_]!==void 0||As(d,_)||(p[_]=!1,Ar(c))});else if(y===5){if(r(c)&&(Ar(c),p.length=!0),d.length<h.length)for(var v=d.length;v<h.length;v++)p[v]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var X_,La,ky=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",F4=typeof Map<"u",j4=typeof Set<"u",J_=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",wS=ky?Symbol.for("immer-nothing"):((X_={})["immer-nothing"]=!0,X_),Z_=ky?Symbol.for("immer-draftable"):"__$immer_draftable",xe=ky?Symbol.for("immer-state"):"__$immer_state",U4=""+Object.prototype.constructor,Cs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,ES=Object.getOwnPropertyDescriptors||function(t){var e={};return Cs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},zp={},Ma={get:function(t,e){if(e===xe)return t;var n=hi(t);if(!As(n,e))return function(i,s,o){var a,l=Q_(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!cr(r)?r:r===Jd(t.t,e)?(Zd(t),t.o[e]=Up(t.A.h,r,t)):r},has:function(t,e){return e in hi(t)},ownKeys:function(t){return Reflect.ownKeys(hi(t))},set:function(t,e,n){var r=Q_(hi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Jd(hi(t),e),s=i==null?void 0:i[xe];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(_S(n,i)&&(n!==void 0||As(t.t,e)))return!0;Zd(t),Ar(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Jd(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Zd(t),Ar(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=hi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){mn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){mn(12)}},Lo={};Mi(Ma,function(t,e){Lo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Lo.deleteProperty=function(t,e){return Lo.set.call(this,t,e,void 0)},Lo.set=function(t,e,n){return Ma.set.call(this,t[0],e,n,t[0])};var z4=function(){function t(n){var r=this;this.O=J_,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(v){var w=this;v===void 0&&(v=a);for(var m=arguments.length,f=Array(m>1?m-1:0),_=1;_<m;_++)f[_-1]=arguments[_];return l.produce(v,function(E){var x;return(x=s).call.apply(x,[w,E].concat(f))})}}var u;if(typeof s!="function"&&mn(6),o!==void 0&&typeof o!="function"&&mn(7),cr(i)){var c=G_(r),h=Up(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?_c(c):jp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Yd(c,o),Xd(v,c)},function(v){throw _c(c),v}):(Yd(c,o),Xd(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===wS&&(u=void 0),r.D&&Ay(u,!0),o){var p=[],y=[];Mn("Patches").M(i,u,p,y),o(p,y)}return u}mn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){cr(n)||mn(8),ti(n)&&(n=V4(n));var r=G_(this),i=Up(this,n,void 0);return i[xe].C=!0,jp(r),i},e.finishDraft=function(n,r){var i=n&&n[xe],s=i.A;return Yd(s,r),Xd(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!J_&&mn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Mn("Patches").$;return ti(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Gt=new z4,IS=Gt.produce;Gt.produceWithPatches.bind(Gt);Gt.setAutoFreeze.bind(Gt);Gt.setUseProxies.bind(Gt);Gt.applyPatches.bind(Gt);Gt.createDraft.bind(Gt);Gt.finishDraft.bind(Gt);function Va(t){"@babel/helpers - typeof";return Va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Va(t)}function B4(t,e){if(Va(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Va(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function W4(t){var e=B4(t,"string");return Va(e)==="symbol"?e:String(e)}function H4(t,e,n){return e=W4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ew(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ew(Object(n),!0).forEach(function(r){H4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ew(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ft(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var nw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ef=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ic={INIT:"@@redux/INIT"+ef(),REPLACE:"@@redux/REPLACE"+ef(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ef()}};function q4(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Ry(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ft(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ft(1));return n(Ry)(t,e)}if(typeof t!="function")throw new Error(ft(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(ft(3));return s}function h(v){if(typeof v!="function")throw new Error(ft(4));if(l)throw new Error(ft(5));var w=!0;return u(),a.push(v),function(){if(w){if(l)throw new Error(ft(6));w=!1,u();var f=a.indexOf(v);a.splice(f,1),o=null}}}function d(v){if(!q4(v))throw new Error(ft(7));if(typeof v.type>"u")throw new Error(ft(8));if(l)throw new Error(ft(9));try{l=!0,s=i(s,v)}finally{l=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return v}function p(v){if(typeof v!="function")throw new Error(ft(10));i=v,d({type:Ic.REPLACE})}function y(){var v,w=h;return v={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(ft(11));function _(){f.next&&f.next(c())}_();var E=w(_);return{unsubscribe:E}}},v[nw]=function(){return this},v}return d({type:Ic.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[nw]=y,r}function G4(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Ic.INIT});if(typeof r>"u")throw new Error(ft(12));if(typeof n(void 0,{type:Ic.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ft(13))})}function TS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{G4(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],y=n[p],v=l[p],w=y(v,u);if(typeof w>"u")throw u&&u.type,new Error(ft(14));h[p]=w,c=c||w!==v}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Tc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function K4(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(ft(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Tc.apply(void 0,a)(i.dispatch),tw(tw({},i),{},{dispatch:s})}}}function xS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var SS=xS();SS.withExtraArgument=xS;const rw=SS;var AS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Q4=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Gs=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},Y4=Object.defineProperty,X4=Object.defineProperties,J4=Object.getOwnPropertyDescriptors,iw=Object.getOwnPropertySymbols,Z4=Object.prototype.hasOwnProperty,e$=Object.prototype.propertyIsEnumerable,sw=function(t,e,n){return e in t?Y4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},qr=function(t,e){for(var n in e||(e={}))Z4.call(e,n)&&sw(t,n,e[n]);if(iw)for(var r=0,i=iw(e);r<i.length;r++){var n=i[r];e$.call(e,n)&&sw(t,n,e[n])}return t},tf=function(t,e){return X4(t,J4(e))},t$=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},n$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Tc:Tc.apply(null,arguments)};function r$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var i$=function(t){AS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Gs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Gs([void 0],n.concat(this))))},e}(Array),s$=function(t){AS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Gs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Gs([void 0],n.concat(this))))},e}(Array);function Bp(t){return cr(t)?IS(t,function(){}):t}function o$(t){return typeof t=="boolean"}function a$(){return function(e){return l$(e)}}function l$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new i$;return n&&(o$(n)?r.push(rw):r.push(rw.withExtraArgument(n.extraArgument))),r}var u$=!0;function c$(t){var e=a$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(r$(i))p=TS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(e));var v=K4.apply(void 0,y),w=Tc;l&&(w=n$(qr({trace:!u$},typeof l=="object"&&l)));var m=new s$(v),f=m;Array.isArray(d)?f=Gs([v],d):typeof d=="function"&&(f=d(m));var _=w.apply(void 0,f);return Ry(p,c,_)}function Gr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return qr(qr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function CS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function h$(t){return typeof t=="function"}function d$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?CS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(h$(t))l=function(){return Bp(t())};else{var u=Bp(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=Gs([s[d.type]],o.filter(function(y){var v=y.matcher;return v(d)}).map(function(y){var v=y.reducer;return v}));return p.filter(function(y){return!!y}).length===0&&(p=[a]),p.reduce(function(y,v){if(v)if(ti(y)){var w=y,m=v(w,d);return m===void 0?y:m}else{if(cr(y))return IS(y,function(f){return v(f,d)});var m=v(y,d);if(m===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return y},h)}return c.getInitialState=l,c}function f$(t,e){return t+"/"+e}function p$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Bp(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=f$(e,c),p,y;"reducer"in h?(p=h.reducer,y=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=y?Gr(d,y):Gr(d)});function l(){var c=typeof t.extraReducers=="function"?CS(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],y=p===void 0?[]:p,v=c[2],w=v===void 0?void 0:v,m=qr(qr({},d),o);return d$(n,function(f){for(var _ in m)f.addCase(_,m[_]);for(var E=0,x=y;E<x.length;E++){var A=x[E];f.addMatcher(A.matcher,A.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var m$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",g$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=m$[Math.random()*64|0];return e},y$=["name","message","stack","code"],nf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),ow=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),v$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=y$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=Gr(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:tf(qr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=Gr(e+"/pending",function(u,c,h){return{payload:void 0,meta:tf(qr({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=Gr(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||v$)(u||"Rejected"),meta:tf(qr({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):g$(),y=new a,v;function w(f){v=f,y.abort()}var m=function(){return t$(this,null,function(){var f,_,E,x,A,b,N;return Q4(this,function(H){switch(H.label){case 0:return H.trys.push([0,4,,5]),x=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),w$(x)?[4,x]:[3,2];case 1:x=H.sent(),H.label=2;case 2:if(x===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(U,me){return y.signal.addEventListener("abort",function(){return me({name:"AbortError",message:v||"Aborted"})})}),c(s(p,u,(_=r==null?void 0:r.getPendingMeta)==null?void 0:_.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([A,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:y.signal,abort:w,rejectWithValue:function(U,me){return new nf(U,me)},fulfillWithValue:function(U,me){return new ow(U,me)}})).then(function(U){if(U instanceof nf)throw U;return U instanceof ow?i(U.payload,p,u,U.meta):i(U,p,u)})])];case 3:return E=H.sent(),[3,5];case 4:return b=H.sent(),E=b instanceof nf?o(null,p,u,b.payload,b.meta):o(b,p,u),[3,5];case 5:return N=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,N||c(E),[2,E]}})})}();return Object.assign(m,{abort:w,requestId:p,arg:u,unwrap:function(){return m.then(_$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function _$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function w$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Py="listenerMiddleware";Gr(Py+"/add");Gr(Py+"/removeAll");Gr(Py+"/remove");var aw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);$4();const lw={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},xc=p$({name:"auth",initialState:lw,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>lw,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:kS,authStateChange:cj,authSignOut:E$,adminRole:I$,clearCashList:T$,addToFavoriteList:x$,setFavoriteList:S$,deleteFromFavoriteList:A$}=xc.actions,C$=({email:t,password:e,userName:n})=>async(r,i)=>{await NN(Ss,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await LN(Ss.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=Ss.currentUser;r(kS({userId:s,userName:o}))},RS=({email:t,password:e})=>async(n,r)=>{ON(Ss,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=Ss.currentUser;n(kS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(I$())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},k$=()=>async(t,e)=>{$N(Ss).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(E$())},R$=()=>(t,e)=>{t(T$())},P$=t=>(e,n)=>{e(x$(t))},PS=t=>async(e,n)=>{const r=await _y(vt(Me,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e(S$(i))}else console.log("No such document!")},b$=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o!==t)return o});e(A$(s))};function N$(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function O$(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function D$(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function by(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function L$(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function M$(t){return ji({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const V$=C.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,$$=C.li`
  width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 6px;
  font-weight: bolder;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 8px;
    border-radius: 20px;
    padding: 20px;
  }
`,F$=C.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,j$=C.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,U$=C(by)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  & path {
    stroke: black;
  }
  &:hover path {
    stroke: green !important;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`,z$=C(N$)`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover polyline {
    stroke: green !important;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`,B$=C(L$)`
    width: 15px;
    height: 15px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }
   @media (min-width: 768px) {
  width: 20px;
  height: 20px;
  }
`,W$=C.ul`
  min-width: 260px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,H$=C.li`
  display: flex;
  justify-content: center;
  width: 110px;
  min-height: 110px;
  font-size: 6px;
  font-weight: bolder;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 13px;
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 23px;
    width: 400px;
    height: 400px;
  }
`,q$=C.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,G$=C.p`
  width: 90%;
`;C.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const K$=C.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,Q$=C.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 10%;

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`,Y$=C.div`
  z-index: 100;
  display: flex;
  position: relative;
  border-radius: 15px;
  background: #f9f9f9;
  padding: 12px 12px;
  font-size: 9px;
  width: 300px;

  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 12px;
    width: 700px;
    min-height: 340px;
    border-radius: 30px;
    padding: 24px 24px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    width: 1400px;
    min-height: 600px;
  }
`,X$=C.h3``,J$=C.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,Z$=C.div`
  padding: 15px;
  cursor: default;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`,uw=C.button`
  width: 100%;
  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`,eF=C.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,tF=C.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,nF=C.div`
  display: flex;
`,rF=C(O$)`
  position: absolute;
  top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }

   @media (min-width: 768px) {
    top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  }
`,iF=C(by)`
  position: absolute;
  top: 5px;
    right: 25px;
    width: 25px;
    height: 25px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }

   @media (min-width: 768px) {
    top: 10px;
  right: 50px;
  width: 50px;
  height: 50px;
  }
`,sF=C(D$)`
  position: absolute;
  top: 5px;
    right: 45px;
    width: 25px;
    height: 25px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }

   @media (min-width: 768px) {
    top: 10px;
  right: 90px;
  width: 50px;
  height: 50px;
  }
`,oF=C.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 9px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`,{addGoodToCashList:aF,removeGoodFromCashList:lF}=xc.actions,uF=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(aF({id:t,name:e,image:n,price:r}))},cF=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(lF(s))},Gh=({card:t,closeModal:e})=>{const n=pr(),r=Zs(),i=on(ln);let s=i.favoriteList,o=s.length>0?i.favoriteList.map(v=>v.name):[];const a=v=>{v.currentTarget===v.target&&e()},l=v=>{(v.charCode||v.keyCode)===27&&e()},u=async()=>{await gS(vt(Me,"goods",`${t.id}`)),e()},c=()=>{r(uF(t))},h=async()=>{try{await Ti(vt(Me,"users",`${i.email}`),{favoriteList:[...s,t]}),alert("Товар добавлено до обраного")}catch(v){console.log(v)}},d=()=>{r(P$(t)),h()},p=async()=>{try{const v=s.filter(w=>{if(w!==t)return w});console.log(v),await Ti(vt(Me,"users",`${i.email}`),{favoriteList:v}),alert("Товар добавлено до обраного")}catch(v){console.log(v)}},y=()=>{p(),r(b$(t))};return T.useEffect(()=>(document.body.addEventListener("keydown",l),function(){document.body.removeEventListener("keydown",l)}),[]),g.jsx(K$,{onClick:a,children:g.jsx(Q$,{onClick:a,children:g.jsxs(Y$,{children:[g.jsxs(nF,{children:[g.jsxs(tF,{children:[g.jsx(J$,{style:{backgroundImage:`url(${t.image})`}}),g.jsx(uw,{onClick:c,children:"Добавити до покупок"}),i.isLogIn&&(o.includes(t.name)?g.jsx(eF,{onClick:y,children:"Видалити з обранного"}):g.jsx(uw,{onClick:d,children:"Добавити до обранного"}))]}),g.jsxs(Z$,{children:[g.jsx(X$,{children:t.name}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),g.jsx(oF,{children:t.otherInfo})]})]})]}),g.jsx(rF,{onClick:()=>e()}),i.role==="admin"&&g.jsxs(g.Fragment,{children:[g.jsx(iF,{onClick:()=>{u()}}),g.jsx(sF,{onClick:()=>{n("/admin",{state:t})}})]})]})})})},hF=()=>{const t=on(ln),[e,n]=T.useState(!1),[r,i]=T.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return g.jsxs(g.Fragment,{children:[g.jsx(W$,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>g.jsx(g.Fragment,{children:g.jsx(H$,{onClick:()=>s(a),style:{backgroundImage:`url(${a.image})`},children:g.jsxs(q$,{children:[g.jsx(G$,{children:a.name}),g.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):g.jsx("div",{children:"Список обранного пустий"})}),e&&g.jsx(Gh,{card:r,closeModal:o})]})};function yu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yu=function(n){return typeof n}:yu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yu(t)}function rf(){}var dF={getItem:rf,setItem:rf,removeItem:rf};function fF(t){if((typeof self>"u"?"undefined":yu(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function pF(t){var e="".concat(t,"Storage");return fF(e)?self[e]:dF}function mF(t){var e=pF(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const br=mF("local"),gF=({closeUserModal:t,typeModal:e})=>{const[n,r]=T.useState(e),[i,s]=T.useState(!1),[o,a]=T.useState(""),[l,u]=T.useState(""),[c,h]=T.useState(""),[d,p]=T.useState(""),[y,v]=T.useState(""),[w,m]=T.useState(""),[f,_]=T.useState([]),[E,x]=T.useState("info"),A=on(ln),b=Zs(),N=M=>{M.currentTarget===M.target&&t()},H=M=>{(M.charCode||M.keyCode)===27&&t()};T.useEffect(()=>(document.body.addEventListener("keydown",H),function(){document.body.removeEventListener("keydown",H)}),[]);const U=()=>{c===d&&o&&l&&c&&y&&w?(b(C$({email:l,password:c,userName:o})),me({name:o,email:l,password:c,userNumber:y,userPostAdress:w,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},me=async M=>{try{await Ey(vt(Me,"users",`${M.email}`),M),alert("Add user success")}catch(P){console.error("Error adding user: ",P)}},Ae=async()=>{b(RS({email:l,password:c})),b(PS(l));try{await Ti(vt(Me,"users",`${l}`),{isLogIn:!0})}catch(M){console.error("Error adding user: ",M)}br.setItem("userEmail",l),br.setItem("userPassword",c),t()},Be=async()=>{t(),b(k$()),br.removeItem("userEmail"),br.removeItem("userPassword");try{await Ti(vt(Me,"users",`${A.email}`),{isLogIn:!1})}catch(M){console.error("Error adding user: ",M)}},At=async()=>{const M=await _y(vt(Me,"users",`${A.email}`));if(M.exists()){const{name:P,userPostAdress:W,userNumber:q}=M.data();a(P),v(q),m(W)}else console.log("No such document!")};T.useEffect(()=>{A.email&&At()},[]);const Ge=async()=>{try{console.log(y,w),await Ti(vt(Me,"users",`${A.email}`),{userNumber:y,userPostAdress:w}),alert("Change user success"),x("info")}catch(M){console.error("Error change user: ",M)}},un=async()=>{try{(await P4(S4(lo(Me,"orders"),A4("userEmail","==",`${A.email}`)))).forEach(P=>{_(W=>[...W,{id:P.id,...P.data()}])}),_(P=>P.sort((W,q)=>W.postDate>q.postDate?-1:1))}catch(M){console.error("Error take orders: ",M)}};return T.useEffect(()=>{un()},[b]),g.jsx(o2,{onClick:N,children:g.jsx(a2,{onClick:N,children:g.jsxs(l2,{children:[n==="SignIn"&&g.jsxs(Ml,{id:"userFormSignIn",children:[g.jsx(Ki,{children:"Контактні дані"}),g.jsx(xn,{required:!0,name:"name",value:o,onChange:M=>{a(M.target.value)},placeholder:"Введіть ФІБ"}),g.jsx(xn,{required:!0,name:"email",value:l,onChange:M=>{u(M.target.value)},placeholder:"Введіть контактну електронну адресу"}),g.jsx(xn,{required:!0,name:"password",value:c,onChange:M=>{h(M.target.value)},placeholder:"Введіть пароль"}),g.jsx(xn,{required:!0,name:"passwordDublicate",value:d,onChange:M=>{p(M.target.value)},placeholder:"Повторіть пароль"}),g.jsx(xn,{value:y,onChange:M=>{v(M.target.value)},placeholder:"Введіть контактний номер телефону"}),g.jsx(xn,{value:w,onChange:M=>{m(M.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(v0,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Vl,{style:i?{backgroundColor:"red"}:{},onClick:U,children:i?"Невірний пароль або e-mail":"Зареєструватись"})]}),n==="LogIn"&&g.jsxs(Ml,{id:"userFormLogIn",children:[g.jsx(Ki,{children:"E-mail:"}),g.jsx(xn,{required:!0,name:"email",value:l,onChange:M=>{u(M.target.value)}}),g.jsx(Ki,{children:"Пароль:"}),g.jsx(xn,{required:!0,name:"password",value:c,onChange:M=>{h(M.target.value)}}),g.jsx(Vl,{onClick:Ae,children:"Увійти"})]}),n==="Config"&&g.jsxs(g.Fragment,{children:[g.jsxs(u2,{children:[g.jsx(Ol,{onClick:()=>{x("info")},children:"Користувач"}),g.jsx(Ol,{onClick:()=>{x("change")},children:"Зміна данних"}),g.jsx(Ol,{onClick:()=>{x("favorite")},children:"Обране"}),g.jsx(Ol,{onClick:()=>{x("history")},children:"Історія покупок"})]}),E==="info"&&g.jsxs(Ml,{id:"userFormConfig",children:[g.jsx(Ki,{children:"Інформація користувача"}),g.jsxs(c2,{children:[g.jsx(Dl,{children:"Призвіще, ім'я, по батькові:"}),g.jsx(Ll,{children:o}),g.jsx(Dl,{children:"E-mail:"}),g.jsx(Ll,{children:A.email}),g.jsx(Dl,{children:"Номер телефону:"}),g.jsxs(Ll,{children:[" ",y]}),g.jsx(Dl,{children:'Відділення "Нова пошти":'}),g.jsx(Ll,{children:w})]}),g.jsx(Vl,{onClick:Be,children:"Вийти з аккаунта"})]}),E==="change"&&g.jsxs(Ml,{id:"userFormConfig",children:[g.jsx(Ki,{children:"Зміна данних"}),g.jsx(xn,{onChange:M=>{v(M.target.value)},placeholder:"Введіть новий номер телефону"}),g.jsx(xn,{onChange:M=>{m(M.target.value)},placeholder:"Введіть нову адресу відділення пошти"}),g.jsx(v0,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Vl,{onClick:Ge,children:"Змінити дані"})]}),E==="favorite"&&g.jsx(hF,{}),E==="history"&&g.jsxs(d2,{children:[g.jsx(Ki,{children:"Історія покупок"}),g.jsx(y0,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(y0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(m2,{children:f.map(M=>g.jsxs(g2,{children:[g.jsx(h2,{style:M.status==="take"?{backgroundColor:"yellow"}:M.status==="send"?{backgroundColor:"green"}:{}}),g.jsxs(Un,{children:[g.jsxs(Un,{children:["Статус:",M.status==="create"&&" Замовлення оформлене",M.status==="take"&&" Прийняте",M.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("ua-Ua",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(M.postDate)]}),g.jsxs(Un,{children:["ФІП: ",M.userFullName]}),g.jsxs(Un,{children:["Email: ",M.userEmail]}),g.jsxs(Un,{children:["Номер телефону: ",M.userNumber]}),g.jsxs(Un,{children:["Адрес Нової почти: ",M.userPostAdress]}),g.jsx(Un,{children:"Список замовлення:"}),M.cashList.map(P=>g.jsxs(f2,{children:[g.jsx(p2,{style:{backgroundImage:`url(${P.image})`}}),g.jsxs(Un,{children:["Назва: ",P.name]}),g.jsxs(Un,{children:["Ціна: ",P.price]})]}))]}))})]})]})]})})})},yF=()=>{const[t,e]=T.useState(!1),[n,r]=T.useState(""),s=on(ln).isLogIn,o=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[s?g.jsx(g.Fragment,{children:g.jsx(Cd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):g.jsxs(s2,{children:[g.jsx(Cd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),g.jsx(Cd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&g.jsx(gF,{closeUserModal:o,typeModal:n})]})},vF=()=>{const{cashList:t}=on(ln),e=pr(),n=fr().pathname;return g.jsxs(QP,{children:[g.jsxs(YP,{children:[g.jsx(t2,{}),n!=="/checkout"&&g.jsxs(g.Fragment,{children:[g.jsx(i2,{}),g.jsx(yF,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&g.jsxs(JP,{children:[g.jsx(XP,{onClick:()=>{e("/cashList")}}),g.jsx(ZP,{children:t.length})]})]})},_F=()=>g.jsxs(g.Fragment,{children:[g.jsx(vF,{}),g.jsx(T.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(Jk,{})})]}),Ny=C.ul`
  min-width: 260px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,Oy=C.li`
  display: flex;
  justify-content: center;
  width: 110px;
  min-height: 110px;
  font-size: 6px;
  font-weight: bolder;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 13px;
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 23px;
    width: 400px;
    height: 400px;
  }
`,Dy=C.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Ly=C.p`
  width: 90%;
`,wF=C.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,My=C(M$)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  color: yellow;
  border: 1px solid black;
  border-radius: 50%;
  background: black;

  @media (min-width: 768px) {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`,EF=C.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,Wp=C.select`
  width: 230px;
  min-height: 60px;
  padding: 20px 22px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  outline: none;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 330px;
    font-size: 15px;
  }
`,Hn=C.option``,To=C.input`
  width: 182px;
  max-height: 60px;
  padding: 20px 22px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 282px;
    font-size: 24px;
  }
`,IF=C.textarea`
  width: 182px;
  min-height: 60px;
  margin-bottom: 32px;
  padding: 20px 22px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  outline: none;
  resize: vertical;
  scrollbar-width: thin;
  scrollbar-color: red green;

  &::-webkit-scrollbar {
    border-radius: 15px;
    width: 15px;
    background-color: #f5f5f5;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: green;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
  }

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }

  @media (min-width: 768px) {
    width: 282px;
    font-size: 24px;
  }
`,bS=C.button`
  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,TF=C(Ny)`
  flex-direction: column;
`,xF=C.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,SF=C.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 30px;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
    gap: 50px;
  }
`,AF=C.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,CF=C(bS)`
  font-size: 10px;
  display: flex;
  justify-content: center;
  width: 100px;
  padding: 5px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 240px;
    font-size: 24px;
    padding: 10px;
  }

  @media (min-width: 1440px) {
    width: 400px;
    font-size: 32px;
    padding: 15px;
  }
`,kF=()=>{const[t,e]=T.useState([]),n=on(ln),r=[],i=pr(),[s,o]=T.useState(!1),[a,l]=T.useState(),u=d=>{l(d),o(!0)},c=()=>{o(!1)},h=async()=>{Hh(lo(Me,"goods"),d=>{e(d.docs.map(p=>({...p.data(),id:p.id})))})};return T.useEffect(()=>{h()},[]),t.map(d=>{r.includes(d.category)||r.push(d.category)}),r.sort(),g.jsxs(g.Fragment,{children:[g.jsx(TF,{children:r.map(d=>g.jsxs(SF,{children:[g.jsx(xF,{children:d}),g.jsx(AF,{children:t.map((p,y)=>{if(p.category===d)return g.jsxs(Oy,{onClick:()=>u(p),style:{backgroundImage:`url(${p.image})`},children:[n.favoriteList&&n.favoriteList.map(v=>{if(v.name===p.name)return g.jsx(My,{})}),g.jsxs(Dy,{children:[g.jsx(Ly,{children:p.name}),g.jsxs("p",{children:[p.price," грн."]})]})]},y)})}),g.jsx(CF,{onClick:()=>i("/search",{state:{category:d}}),children:"Побачити більше"})]}))}),s&&g.jsx(Gh,{card:a,closeModal:c})]})},RF=C.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;
  padding: 10px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px 0;
    gap: 30px;
  }
`,PF=C.input`
  display: flex;
  background: inherit;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 330px;
    font-size: 15px;
  }
`,bF=C(Wp)`
  width: 180px;
  min-height: auto;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 340px;
    font-size: 15px;
  }
`,NF=C.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,NS=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let vi=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const OF=()=>{const e=fr().state,n=on(ln),[r,i]=T.useState([]),[s,o]=T.useState(r),[a,l]=T.useState(!1),[u,c]=T.useState(),[h,d]=T.useState(""),[p,y]=T.useState(e&&e.category?e.category:""),v=f=>{c(f),l(!0)},w=()=>{l(!1)},m=()=>{Hh(lo(Me,"goods"),f=>{i(f.docs.map(_=>({..._.data(),id:_.id})))})};return T.useEffect(()=>{m()},[]),T.useEffect(()=>{if(h.length>0){let f=r.filter(_=>_.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())&&_.category.toLocaleLowerCase().includes(p.toLocaleLowerCase()));o(f)}else{let f=r.filter(_=>_.category.toLocaleLowerCase().includes(p.toLocaleLowerCase()));o(f)}},[h,p,r]),g.jsxs(RF,{children:[g.jsx(PF,{placeholder:"Назва товару",onChange:f=>{d(f.target.value)}}),g.jsxs(bF,{id:"category",name:"category",value:p,onChange:f=>{y(f.target.value)},children:[g.jsx(Hn,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},vi()),NS.map((f,_)=>f.category?g.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>g.jsx(Hn,{value:`${E}`,selected:p===E&&"selected"||null,children:E},vi()))},vi()):g.jsx(Hn,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:p===f.name&&"selected"||null,children:f.name},vi()))]}),g.jsx(Ny,{children:s.length>0?s.map((f,_)=>g.jsx(g.Fragment,{children:g.jsxs(Oy,{onClick:()=>v(f),style:{backgroundImage:`url(${f.image})`},children:[n.favoriteList&&n.favoriteList.map(E=>{if(E.name===f.name)return g.jsx(My,{})}),g.jsxs(Dy,{children:[g.jsx(Ly,{children:f.name}),g.jsxs("p",{children:[f.price," грн."]})]})]},_)})):g.jsxs(NF,{children:[g.jsx("p",{children:"Нічого не знайдено"}),g.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),a&&g.jsx(Gh,{card:u,closeModal:w})]})},DF=()=>{const[t,e]=T.useState([]),n=()=>{Hh(lo(Me,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})))}),e(t==null?void 0:t.sort((o,a)=>o.postDate>a.postDate?-1:1))},r=async o=>{await gS(vt(Me,"orders",`${o}`))},i=async o=>{await Ti(vt(Me,"orders",`${o}`),{status:"take"})},s=async o=>{await Ti(vt(Me,"orders",`${o}`),{status:"send"})};return T.useEffect(()=>{n()},[]),g.jsx(V$,{children:t.map(o=>g.jsxs($$,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),g.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("ua-Ua",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(o.postDate)]}),g.jsxs("p",{children:["ФІП: ",o.userFullName]}),g.jsxs("p",{children:["Email: ",o.userEmail]}),g.jsxs("p",{children:["Номер телефону:",o.userNumber]}),g.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),g.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>g.jsxs(g.Fragment,{children:[g.jsx(F$,{style:{backgroundImage:`url(${a.image})`}}),g.jsxs("p",{children:["Id товару: ",a.id]}),g.jsxs("p",{children:["Назва: ",a.name]}),g.jsxs("p",{children:["Ціна: ",a.price]})]})),g.jsxs(j$,{children:[g.jsx(U$,{onClick:()=>r(o.id)}),g.jsx(z$,{onClick:()=>i(o.id)}),g.jsx(B$,{onClick:()=>s(o.id)})]})]}))})},LF=()=>{const{role:t}=on(ln),e=pr(),r=fr().state,i=Zs(),[s,o]=T.useState(r?r.image:""),[a,l]=T.useState(r?r.name:""),[u,c]=T.useState(r?r.price:""),[h,d]=T.useState(r?r.producent:""),[p,y]=T.useState(r?r.size:""),[v,w]=T.useState(r?r.otherInfo:""),m=async f=>{try{r?(await Ey(vt(Me,"goods",`${f.id}`),f),alert("Change success")):(await b4(lo(Me,"goods"),f),alert("Add success"))}catch(_){console.error("Error adding document: ",_)}};return T.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(_){_.preventDefault();const{image:E,name:x,price:A,sex:b,producent:N,category:H,size:U,otherInfo:me}=this.elements,Ae={image:E.value,name:x.value,price:A.value,sex:b.value||"",producent:N.value||"",category:H.value,size:U.value||"",otherInfo:me.value||"",createTime:new Date};m(Ae),this.reset()})},[i]),T.useEffect(()=>{t!="admin"&&e("/")}),g.jsxs(g.Fragment,{children:[g.jsxs(EF,{id:"form",children:[g.jsx("p",{children:"Малюнок"}),g.jsx(To,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:s,onChange:f=>o(f.target.value)}),g.jsx("p",{children:"Назва"}),g.jsx(To,{required:!0,name:"name",placeholder:"Додати назву",value:a,onChange:f=>l(f.target.value)}),g.jsx("p",{children:"Ціна в гривнях"}),g.jsx(To,{required:!0,name:"price",placeholder:"Додати ціну",value:u,onChange:f=>c(f.target.value)}),g.jsx("p",{children:"Категорія"}),g.jsxs(Wp,{id:"category",name:"category",children:[g.jsx(Hn,{value:"",children:"Вкажіть категорію"}),NS.map((f,_)=>f.category?g.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>g.jsx(Hn,{value:`${E}`,selected:r&&r.category===E&&"selected"||null,children:E},vi()))},vi()):g.jsx(Hn,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===f.name&&"selected"||null,children:f.name},vi()))]}),g.jsx("p",{children:"Рід"}),g.jsxs(Wp,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[g.jsx(Hn,{value:"",children:"Без роду"}),g.jsx(Hn,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),g.jsx(Hn,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),g.jsx("p",{children:"Розмір"}),g.jsx(To,{name:"size",placeholder:"Додати розмір",value:p,onChange:f=>y(f.target.value)}),g.jsx("p",{children:"Виробник"}),g.jsx(To,{name:"producent",placeholder:"Додати виробника",value:h,onChange:f=>d(f.target.value)}),g.jsx("p",{children:"Додаткова інформація"}),g.jsx(IF,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:v,onChange:f=>w(f.target.value)}),g.jsx(bS,{children:r?"Зілити зміни":"Залити новий товар"})]}),g.jsx("h3",{children:"Замовлення"}),g.jsx(DF,{})]})},MF=()=>{const[t,e]=T.useState([]),[n,r]=T.useState(!1),[i,s]=T.useState(),o=on(ln),a=Zs();let l=new Date().getTime()/1e3;T.useEffect(()=>{br.getItem("userEmail")&&br.getItem("userPassword")&&u()},[]);const u=async()=>{const p=await br.getItem("userEmail"),y=await br.getItem("userPassword");console.log(p,y),a(RS({email:p,password:y})),a(PS(p))},c=p=>{s(p),r(!0)},h=()=>{r(!1)},d=()=>{Hh(lo(Me,"goods"),p=>{e(p.docs.map(y=>({...y.data(),id:y.id})))}),e(t==null?void 0:t.sort((p,y)=>p.createTime>y.createTime?-1:1))};return T.useEffect(()=>{d()},[]),g.jsxs(g.Fragment,{children:[g.jsx(Ny,{id:"cardList",children:t.length>0&&t.map((p,y)=>g.jsx(g.Fragment,{children:g.jsxs(Oy,{onClick:()=>c(p),style:{backgroundImage:`url(${p.image})`},children:[o.favoriteList&&o.favoriteList.map(v=>{if(v.name===p.name)return g.jsx(My,{})}),l-p.createTime.seconds<259200&&g.jsx(wF,{children:"Новинка!"}),g.jsxs(Dy,{children:[g.jsx(Ly,{children:p.name}),g.jsxs("p",{children:[p.price," грн."]})]})]},p.id)}))}),n&&g.jsx(Gh,{card:i,closeModal:h})]})},VF=C.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,$F=C.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,FF=C.div`
  width: 20%;
  height: 90%;
  border-radius: 20px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 360px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,jF=C.li`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 50px;
  font-size: 8px;
  font-weight: bolder;
  justify-content: space-around;
  align-items: center;

  padding: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    font-size: 12px;
    width: 50%;
    height: 100px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,UF=C.div`
  width: 50%;
`,zF=C.h3``,BF=C.p``,WF=C.button`
  height: 90%;
  width: 10%;
  background: black;
  border-radius: 28px;
  padding: 0;

  transition: background 0.25s;

  &:hover {
    background: red;
  }
  &:focus {
    background: red;
  }
`,HF=C(by)`
  width: 15px;
  height: 15px;
  cursor: pointer;
  & path {
    stroke: white;
  }
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,qF=C.button`
  display: flex;
  padding: 10px;
  transition: background 0.25s;
  font-size: 10px;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,GF=()=>{const{cashList:t}=on(ln),e=Zs(),n=pr();return g.jsxs($F,{children:[g.jsx(VF,{children:"Список товарів"}),t.length>0?g.jsxs(g.Fragment,{children:[t.map((r,i)=>g.jsxs(jF,{children:[g.jsx(FF,{style:{backgroundImage:`url(${r.image})`}}),g.jsxs(UF,{children:[g.jsx(zF,{children:r.name}),g.jsxs(BF,{children:[r.price," грн."]})]}),g.jsx(WF,{onClick:()=>e(cF(i)),children:g.jsx(HF,{})})]})),g.jsx(qF,{onClick:()=>n("/checkout"),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},KF=C.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    gap: 15px;
    margin-top: 15px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    margin-top: 15px;
  }
`,QF=C.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,Ql=C.input`
  display: flex;
  width: 70%;
  max-height: 60px;
  padding: 5px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;
  padding: 10px;

  font-size: 10px;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    width: 50%;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    width: 50%;
  }
`,YF=C.div`
  width: 80%;
  display: flex;
  font-size: 10px;
  color: red;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    font-size: 32px;
  }
`,XF=C.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,cw=C.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,JF=()=>{const t=on(ln),[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),u=Zs(),c=pr(),h=async()=>{const p=await _y(vt(Me,"users",`${t.email}`));if(p.exists()){const{name:y,userPostAdress:v,userNumber:w,email:m}=p.data();o(m),n(y),i(w),l(v)}else console.log("No such document!")};T.useEffect(()=>{t.email&&h()},[t]);const d=async()=>{try{await Ey(vt(Me,"orders",`${new Date}`),{userFullName:e,userNumber:r,userEmail:s,userPostAdress:a,postDate:new Date,id:`${s}${new Date}`,status:"create",cashList:t.cashList}),u(R$()),alert("Замовлення відправлене, з вами звяжуться"),c("/")}catch(p){console.log(p)}};return g.jsxs(KF,{id:"CheckoutForm",children:[g.jsx(QF,{children:"Контактні дані"}),g.jsx(Ql,{value:e,onChange:p=>{n(p.target.value)},placeholder:"Введіть ФІБ"}),g.jsx(Ql,{value:r,onChange:p=>{i(p.target.value)},placeholder:"Введіть контактний номер телефону"}),g.jsx(Ql,{value:s,onChange:p=>{o(p.target.value)},placeholder:"Введіть контактну електронну адресу"}),g.jsx(Ql,{value:a,onChange:p=>{l(p.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(YF,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(cw,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(cw,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(XF,{onClick:d,children:"Завершити оформлення замовлення"})]})};function ZF(){return g.jsxs(eR,{children:[g.jsxs(zn,{path:"/",element:g.jsx(_F,{}),children:[g.jsx(zn,{index:!0,element:g.jsx(MF,{})}),g.jsx(zn,{path:"category",element:g.jsx(kF,{})}),g.jsx(zn,{path:"search",element:g.jsx(OF,{})}),g.jsx(zn,{path:"admin",element:g.jsx(LF,{})}),g.jsx(zn,{path:"cashList",element:g.jsx(GF,{})}),g.jsx(zn,{path:"checkout",element:g.jsx(JF,{})})]}),g.jsx(zn,{path:"*",element:g.jsx(Xk,{to:"/"})})]})}var OS="persist/FLUSH",Vy="persist/REHYDRATE",DS="persist/PAUSE",LS="persist/PERSIST",MS="persist/PURGE",$y="persist/REGISTER";function hw(t){return nj(t)||tj(t)||ej()}function ej(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function tj(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function nj(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function dw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Hp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dw(n,!0).forEach(function(r){rj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rj(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var VS={registry:[],bootstrapped:!1},ij=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:VS,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $y:return Hp({},e,{registry:[].concat(hw(e.registry),[n.key])});case Vy:var r=e.registry.indexOf(n.key),i=hw(e.registry);return i.splice(r,1),Hp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function sj(t,e,n){var r=n||!1,i=Ry(ij,VS,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:$y,key:u})},o=function(u,c,h){var d={type:Vy,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Hp({},i,{purge:function(){var u=[];return t.dispatch({type:MS,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:OS,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:DS})},persist:function(){t.dispatch({type:LS,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const oj=TS({[xc.name]:xc.reducer}),$S=c$({reducer:oj,middleware:t=>t({serializableCheck:{ignoredActions:[OS,Vy,DS,LS,MS,$y]}})});sj($S);sf.createRoot(document.getElementById("root")).render(g.jsx(Mt.StrictMode,{children:g.jsx(sR,{basename:"Oleg_Shop",children:g.jsx(iP,{store:$S,children:g.jsx(ZF,{})})})}));
