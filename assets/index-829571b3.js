function LS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function lw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uw={exports:{}},xc={},cw={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),MS=Symbol.for("react.portal"),VS=Symbol.for("react.fragment"),$S=Symbol.for("react.strict_mode"),FS=Symbol.for("react.profiler"),jS=Symbol.for("react.provider"),US=Symbol.for("react.context"),zS=Symbol.for("react.forward_ref"),BS=Symbol.for("react.suspense"),WS=Symbol.for("react.memo"),HS=Symbol.for("react.lazy"),Oy=Symbol.iterator;function qS(t){return t===null||typeof t!="object"?null:(t=Oy&&t[Oy]||t["@@iterator"],typeof t=="function"?t:null)}var hw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dw=Object.assign,fw={};function qs(t,e,n){this.props=t,this.context=e,this.refs=fw,this.updater=n||hw}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pw(){}pw.prototype=qs.prototype;function Bp(t,e,n){this.props=t,this.context=e,this.refs=fw,this.updater=n||hw}var Wp=Bp.prototype=new pw;Wp.constructor=Bp;dw(Wp,qs.prototype);Wp.isPureReactComponent=!0;var Dy=Array.isArray,mw=Object.prototype.hasOwnProperty,Hp={current:null},gw={key:!0,ref:!0,__self:!0,__source:!0};function yw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)mw.call(e,r)&&!gw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:La,type:t,key:s,ref:o,props:i,_owner:Hp.current}}function GS(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function KS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ly=/\/+/g;function Kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KS(""+t.key):e.toString(36)}function Ql(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case MS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kh(o,0):r,Dy(i)?(n="",t!=null&&(n=t.replace(Ly,"$&/")+"/"),Ql(i,e,n,"",function(u){return u})):i!=null&&(qp(i)&&(i=GS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ly,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Kh(s,a);o+=Ql(s,e,n,l,i)}else if(l=qS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Kh(s,a++),o+=Ql(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],i=0;return Ql(t,r,"","",function(s){return e.call(n,s,i++)}),r}function QS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Yl={transition:null},YS={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Hp};te.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=qs;te.Fragment=VS;te.Profiler=FS;te.PureComponent=Bp;te.StrictMode=$S;te.Suspense=BS;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)mw.call(e,l)&&!gw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:La,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jS,_context:t},t.Consumer=t};te.createElement=yw;te.createFactory=function(t){var e=yw.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:zS,render:t}};te.isValidElement=qp;te.lazy=function(t){return{$$typeof:HS,_payload:{_status:-1,_result:t},_init:QS}};te.memo=function(t,e){return{$$typeof:WS,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return Rt.current.useCallback(t,e)};te.useContext=function(t){return Rt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};te.useEffect=function(t,e){return Rt.current.useEffect(t,e)};te.useId=function(){return Rt.current.useId()};te.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Rt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};te.useRef=function(t){return Rt.current.useRef(t)};te.useState=function(t){return Rt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Rt.current.useTransition()};te.version="18.2.0";cw.exports=te;var T=cw.exports;const Lt=lw(T),My=LS({__proto__:null,default:Lt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XS=T,JS=Symbol.for("react.element"),ZS=Symbol.for("react.fragment"),eA=Object.prototype.hasOwnProperty,tA=XS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nA={key:!0,ref:!0,__self:!0,__source:!0};function vw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eA.call(e,r)&&!nA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JS,type:t,key:s,ref:o,props:i,_owner:tA.current}}xc.Fragment=ZS;xc.jsx=vw;xc.jsxs=vw;uw.exports=xc;var g=uw.exports,tf={},_w={exports:{}},Gt={},ww={exports:{}},Ew={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,U){var W=S.length;S.push(U);e:for(;0<W;){var ae=W-1>>>1,D=S[ae];if(0<i(D,U))S[ae]=U,S[W]=D,W=ae;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var U=S[0],W=S.pop();if(W!==U){S[0]=W;e:for(var ae=0,D=S.length,M=D>>>1;ae<M;){var $=2*(ae+1)-1,K=S[$],I=$+1,ne=S[I];if(0>i(K,W))I<D&&0>i(ne,K)?(S[ae]=ne,S[I]=W,ae=I):(S[ae]=K,S[$]=W,ae=$);else if(I<D&&0>i(ne,W))S[ae]=ne,S[I]=W,ae=I;else break e}}return U}function i(S,U){var W=S.sortIndex-U.sortIndex;return W!==0?W:S.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(S){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=S)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function E(S){if(_=!1,y(S),!v)if(n(l)!==null)v=!0,on(x);else{var U=n(u);U!==null&&Ze(E,U.startTime-S)}}function x(S,U){v=!1,_&&(_=!1,p(N),N=-1),m=!0;var W=d;try{for(y(U),h=n(l);h!==null&&(!(h.expirationTime>U)||S&&!me());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var D=ae(h.expirationTime<=U);U=t.unstable_now(),typeof D=="function"?h.callback=D:h===n(l)&&r(l),y(U)}else r(l);h=n(l)}if(h!==null)var M=!0;else{var $=n(u);$!==null&&Ze(E,$.startTime-U),M=!1}return M}finally{h=null,d=W,m=!1}}var C=!1,b=null,N=-1,H=5,j=-1;function me(){return!(t.unstable_now()-j<H)}function Se(){if(b!==null){var S=t.unstable_now();j=S;var U=!0;try{U=b(!0,S)}finally{U?Ue():(C=!1,b=null)}}else C=!1}var Ue;if(typeof f=="function")Ue=function(){f(Se)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,He=St.port2;St.port1.onmessage=Se,Ue=function(){He.postMessage(null)}}else Ue=function(){w(Se,0)};function on(S){b=S,C||(C=!0,Ue())}function Ze(S,U){N=w(function(){S(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,on(x))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(S){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var W=d;d=U;try{return S()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,U){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var W=d;d=S;try{return U()}finally{d=W}},t.unstable_scheduleCallback=function(S,U,W){var ae=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,S){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,S={id:c++,callback:U,priorityLevel:S,startTime:W,expirationTime:D,sortIndex:-1},W>ae?(S.sortIndex=W,e(u,S),n(l)===null&&S===n(u)&&(_?(p(N),N=-1):_=!0,Ze(E,W-ae))):(S.sortIndex=D,e(l,S),v||m||(v=!0,on(x))),S},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(S){var U=d;return function(){var W=d;d=U;try{return S.apply(this,arguments)}finally{d=W}}}})(Ew);ww.exports=Ew;var rA=ww.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=T,Wt=rA;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tw=new Set,Qo={};function Mi(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Qo[t]=e,t=0;t<e.length;t++)Tw.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,iA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vy={},$y={};function sA(t){return nf.call($y,t)?!0:nf.call(Vy,t)?!1:iA.test(t)?$y[t]=!0:(Vy[t]=!0,!1)}function oA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aA(t,e,n,r){if(e===null||typeof e>"u"||oA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Kp);lt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Kp);lt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Kp);lt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aA(e,n,i,r)&&(n=null),r||i===null?sA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),Sw=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Aw=Symbol.for("react.offscreen"),Fy=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Qh;function Eo(t){if(Qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qh=e&&e[1]||""}return`
`+Qh+t}var Yh=!1;function Xh(t,e){if(!t||Yh)return"";Yh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function lA(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Xh(t.type,!1),t;case 11:return t=Xh(t.type.render,!1),t;case 1:return t=Xh(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Yi:return"Portal";case rf:return"Profiler";case Yp:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sw:return(t.displayName||"Context")+".Consumer";case xw:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jp:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function uA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cA(t){var e=Cw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=cA(t))}function kw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rw(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function uf(t,e){Rw(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Io(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function Pw(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function By(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,Nw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hA=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){hA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function Ow(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function Dw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ow(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dA=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(dA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function Zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,ds=null,fs=null;function Wy(t){if(t=$a(t)){if(typeof gf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Rc(e),gf(t.stateNode,t.type,e))}}function Lw(t){ds?fs?fs.push(t):fs=[t]:ds=t}function Mw(){if(ds){var t=ds,e=fs;if(fs=ds=null,Wy(t),e)for(t=0;t<e.length;t++)Wy(e[t])}}function Vw(t,e){return t(e)}function $w(){}var Jh=!1;function Fw(t,e,n){if(Jh)return t(e,n);Jh=!0;try{return Vw(t,e,n)}finally{Jh=!1,(ds!==null||fs!==null)&&($w(),Mw())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Rc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var yf=!1;if(Jn)try{var co={};Object.defineProperty(co,"passive",{get:function(){yf=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{yf=!1}function fA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Do=!1,yu=null,vu=!1,vf=null,pA={onError:function(t){Do=!0,yu=t}};function mA(t,e,n,r,i,s,o,a,l){Do=!1,yu=null,fA.apply(pA,arguments)}function gA(t,e,n,r,i,s,o,a,l){if(mA.apply(this,arguments),Do){if(Do){var u=yu;Do=!1,yu=null}else throw Error(k(198));vu||(vu=!0,vf=u)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hy(t){if(Vi(t)!==t)throw Error(k(188))}function yA(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hy(i),t;if(s===r)return Hy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Uw(t){return t=yA(t),t!==null?zw(t):null}function zw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zw(t);if(e!==null)return e;t=t.sibling}return null}var Bw=Wt.unstable_scheduleCallback,qy=Wt.unstable_cancelCallback,vA=Wt.unstable_shouldYield,_A=Wt.unstable_requestPaint,De=Wt.unstable_now,wA=Wt.unstable_getCurrentPriorityLevel,em=Wt.unstable_ImmediatePriority,Ww=Wt.unstable_UserBlockingPriority,_u=Wt.unstable_NormalPriority,EA=Wt.unstable_LowPriority,Hw=Wt.unstable_IdlePriority,Sc=null,kn=null;function IA(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:SA,TA=Math.log,xA=Math.LN2;function SA(t){return t>>>=0,t===0?32:31-(TA(t)/xA|0)|0}var yl=64,vl=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=To(a):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function AA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qw(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function Zh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function kA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Gw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kw,nm,Qw,Yw,Xw,wf=!1,_l=[],br=null,Nr=null,Or=null,Jo=new Map,Zo=new Map,wr=[],RA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gy(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&nm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PA(t,e,n,r,i){switch(e){case"focusin":return br=ho(br,t,e,n,r,i),!0;case"dragenter":return Nr=ho(Nr,t,e,n,r,i),!0;case"mouseover":return Or=ho(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Jo.set(s,ho(Jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zo.set(s,ho(Zo.get(s)||null,t,e,n,r,i)),!0}return!1}function Jw(t){var e=di(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=jw(n),e!==null){t.blockedOn=e,Xw(t.priority,function(){Qw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mf=r,n.target.dispatchEvent(r),mf=null}else return e=$a(n),e!==null&&nm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ky(t,e,n){Xl(t)&&n.delete(e)}function bA(){wf=!1,br!==null&&Xl(br)&&(br=null),Nr!==null&&Xl(Nr)&&(Nr=null),Or!==null&&Xl(Or)&&(Or=null),Jo.forEach(Ky),Zo.forEach(Ky)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,bA)))}function ea(t){function e(i){return fo(i,t)}if(0<_l.length){fo(_l[0],t);for(var n=1;n<_l.length;n++){var r=_l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&fo(br,t),Nr!==null&&fo(Nr,t),Or!==null&&fo(Or,t),Jo.forEach(e),Zo.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)Jw(n),n.blockedOn===null&&wr.shift()}var ps=ur.ReactCurrentBatchConfig,Eu=!0;function NA(t,e,n,r){var i=de,s=ps.transition;ps.transition=null;try{de=1,rm(t,e,n,r)}finally{de=i,ps.transition=s}}function OA(t,e,n,r){var i=de,s=ps.transition;ps.transition=null;try{de=4,rm(t,e,n,r)}finally{de=i,ps.transition=s}}function rm(t,e,n,r){if(Eu){var i=Ef(t,e,n,r);if(i===null)ud(t,e,r,Iu,n),Gy(t,r);else if(PA(i,t,e,n,r))r.stopPropagation();else if(Gy(t,r),e&4&&-1<RA.indexOf(t)){for(;i!==null;){var s=$a(i);if(s!==null&&Kw(s),s=Ef(t,e,n,r),s===null&&ud(t,e,r,Iu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ud(t,e,r,null,n)}}var Iu=null;function Ef(t,e,n,r){if(Iu=null,t=Zp(r),t=di(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Iu=t,null}function Zw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wA()){case em:return 1;case Ww:return 4;case _u:case EA:return 16;case Hw:return 536870912;default:return 16}default:return 16}}var Cr=null,im=null,Jl=null;function e1(){if(Jl)return Jl;var t,e=im,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jl=i.slice(t,1<r?1-r:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Qy(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wl:Qy,this.isPropagationStopped=Qy,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sm=Kt(Gs),Va=ke({},Gs,{view:0,detail:0}),DA=Kt(Va),ed,td,po,Ac=ke({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(ed=t.screenX-po.screenX,td=t.screenY-po.screenY):td=ed=0,po=t),ed)},movementY:function(t){return"movementY"in t?t.movementY:td}}),Yy=Kt(Ac),LA=ke({},Ac,{dataTransfer:0}),MA=Kt(LA),VA=ke({},Va,{relatedTarget:0}),nd=Kt(VA),$A=ke({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),FA=Kt($A),jA=ke({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UA=Kt(jA),zA=ke({},Gs,{data:0}),Xy=Kt(zA),BA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HA[t])?!!e[t]:!1}function om(){return qA}var GA=ke({},Va,{key:function(t){if(t.key){var e=BA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:om,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KA=Kt(GA),QA=ke({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jy=Kt(QA),YA=ke({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:om}),XA=Kt(YA),JA=ke({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZA=Kt(JA),eC=ke({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tC=Kt(eC),nC=[9,13,27,32],am=Jn&&"CompositionEvent"in window,Lo=null;Jn&&"documentMode"in document&&(Lo=document.documentMode);var rC=Jn&&"TextEvent"in window&&!Lo,t1=Jn&&(!am||Lo&&8<Lo&&11>=Lo),Zy=String.fromCharCode(32),ev=!1;function n1(t,e){switch(t){case"keyup":return nC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function iC(t,e){switch(t){case"compositionend":return r1(e);case"keypress":return e.which!==32?null:(ev=!0,Zy);case"textInput":return t=e.data,t===Zy&&ev?null:t;default:return null}}function sC(t,e){if(Ji)return t==="compositionend"||!am&&n1(t,e)?(t=e1(),Jl=im=Cr=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return t1&&e.locale!=="ko"?null:e.data;default:return null}}var oC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oC[t.type]:e==="textarea"}function i1(t,e,n,r){Lw(r),e=Tu(e,"onChange"),0<e.length&&(n=new sm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,ta=null;function aC(t){m1(t,0)}function Cc(t){var e=ts(t);if(kw(e))return t}function lC(t,e){if(t==="change")return e}var s1=!1;if(Jn){var rd;if(Jn){var id="oninput"in document;if(!id){var nv=document.createElement("div");nv.setAttribute("oninput","return;"),id=typeof nv.oninput=="function"}rd=id}else rd=!1;s1=rd&&(!document.documentMode||9<document.documentMode)}function rv(){Mo&&(Mo.detachEvent("onpropertychange",o1),ta=Mo=null)}function o1(t){if(t.propertyName==="value"&&Cc(ta)){var e=[];i1(e,ta,t,Zp(t)),Fw(aC,e)}}function uC(t,e,n){t==="focusin"?(rv(),Mo=e,ta=n,Mo.attachEvent("onpropertychange",o1)):t==="focusout"&&rv()}function cC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(ta)}function hC(t,e){if(t==="click")return Cc(e)}function dC(t,e){if(t==="input"||t==="change")return Cc(e)}function fC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:fC;function na(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nf.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function iv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sv(t,e){var n=iv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iv(n)}}function a1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?a1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function l1(){for(var t=window,e=gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gu(t.document)}return e}function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pC(t){var e=l1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&a1(n.ownerDocument.documentElement,n)){if(r!==null&&lm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sv(n,s);var o=sv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mC=Jn&&"documentMode"in document&&11>=document.documentMode,Zi=null,If=null,Vo=null,Tf=!1;function ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||Zi==null||Zi!==gu(r)||(r=Zi,"selectionStart"in r&&lm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&na(Vo,r)||(Vo=r,r=Tu(If,"onSelect"),0<r.length&&(e=new sm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function El(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},sd={},u1={};Jn&&(u1=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function kc(t){if(sd[t])return sd[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u1)return sd[t]=e[n];return t}var c1=kc("animationend"),h1=kc("animationiteration"),d1=kc("animationstart"),f1=kc("transitionend"),p1=new Map,av="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){p1.set(t,e),Mi(e,[t])}for(var od=0;od<av.length;od++){var ad=av[od],gC=ad.toLowerCase(),yC=ad[0].toUpperCase()+ad.slice(1);ti(gC,"on"+yC)}ti(c1,"onAnimationEnd");ti(h1,"onAnimationIteration");ti(d1,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(f1,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gA(r,e,void 0,t),t.currentTarget=null}function m1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lv(i,a,u),s=l}}}if(vu)throw t=vf,vu=!1,vf=null,t}function ve(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(g1(e,t,2,!1),n.add(r))}function ld(t,e,n){var r=0;e&&(r|=4),g1(n,t,r,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[Il]){t[Il]=!0,Tw.forEach(function(n){n!=="selectionchange"&&(vC.has(n)||ld(n,!1,t),ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,ld("selectionchange",!1,e))}}function g1(t,e,n,r){switch(Zw(e)){case 1:var i=NA;break;case 4:i=OA;break;default:i=rm}n=i.bind(null,e,n,t),i=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ud(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=di(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fw(function(){var u=s,c=Zp(n),h=[];e:{var d=p1.get(t);if(d!==void 0){var m=sm,v=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":m=KA;break;case"focusin":v="focus",m=nd;break;case"focusout":v="blur",m=nd;break;case"beforeblur":case"afterblur":m=nd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=MA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=XA;break;case c1:case h1:case d1:m=FA;break;case f1:m=ZA;break;case"scroll":m=DA;break;case"wheel":m=tC;break;case"copy":case"cut":case"paste":m=UA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jy}var _=(e&4)!==0,w=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=Xo(f,p),E!=null&&_.push(ia(f,E,y)))),w)break;f=f.return}0<_.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==mf&&(v=n.relatedTarget||n.fromElement)&&(di(v)||v[Zn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?di(v):null,v!==null&&(w=Vi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Yy,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Jy,E="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?d:ts(m),y=v==null?d:ts(v),d=new _(E,f+"leave",m,n,c),d.target=w,d.relatedTarget=y,E=null,di(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,E=_),w=E,m&&v)t:{for(_=m,p=v,f=0,y=_;y;y=Hi(y))f++;for(y=0,E=p;E;E=Hi(E))y++;for(;0<f-y;)_=Hi(_),f--;for(;0<y-f;)p=Hi(p),y--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Hi(_),p=Hi(p)}_=null}else _=null;m!==null&&uv(h,d,m,_,!1),v!==null&&w!==null&&uv(h,w,v,_,!0)}}e:{if(d=u?ts(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var x=lC;else if(tv(d))if(s1)x=dC;else{x=cC;var C=uC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=hC);if(x&&(x=x(t,u))){i1(h,x,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&cf(d,"number",d.value)}switch(C=u?ts(u):window,t){case"focusin":(tv(C)||C.contentEditable==="true")&&(Zi=C,If=u,Vo=null);break;case"focusout":Vo=If=Zi=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,ov(h,n,c);break;case"selectionchange":if(mC)break;case"keydown":case"keyup":ov(h,n,c)}var b;if(am)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ji?n1(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(t1&&n.locale!=="ko"&&(Ji||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ji&&(b=e1()):(Cr=c,im="value"in Cr?Cr.value:Cr.textContent,Ji=!0)),C=Tu(u,N),0<C.length&&(N=new Xy(N,t,null,n,c),h.push({event:N,listeners:C}),b?N.data=b:(b=r1(n),b!==null&&(N.data=b)))),(b=rC?iC(t,n):sC(t,n))&&(u=Tu(u,"onBeforeInput"),0<u.length&&(c=new Xy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}m1(h,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xo(t,n),s!=null&&r.unshift(ia(t,s,i)),s=Xo(t,e),s!=null&&r.push(ia(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xo(n,s),l!=null&&o.unshift(ia(n,l,a))):i||(l=Xo(n,s),l!=null&&o.push(ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _C=/\r\n?/g,wC=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(_C,`
`).replace(wC,"")}function Tl(t,e,n){if(e=cv(e),cv(t)!==e&&n)throw Error(k(425))}function xu(){}var xf=null,Sf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,EC=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,IC=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(TC)}:Cf;function TC(t){setTimeout(function(){throw t})}function cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ea(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),xn="__reactFiber$"+Ks,sa="__reactProps$"+Ks,Zn="__reactContainer$"+Ks,kf="__reactEvents$"+Ks,xC="__reactListeners$"+Ks,SC="__reactHandles$"+Ks;function di(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dv(t);t!==null;){if(n=t[xn])return n;t=dv(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[xn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Rc(t){return t[sa]||null}var Rf=[],ns=-1;function ni(t){return{current:t}}function Ee(t){0>ns||(t.current=Rf[ns],Rf[ns]=null,ns--)}function ye(t,e){ns++,Rf[ns]=t.current,t.current=e}var Kr={},It=ni(Kr),Mt=ni(!1),Ti=Kr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function Su(){Ee(Mt),Ee(It)}function fv(t,e,n){if(It.current!==Kr)throw Error(k(168));ye(It,e),ye(Mt,n)}function y1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,uA(t)||"Unknown",i));return ke({},n,r)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Ti=It.current,ye(It,t),ye(Mt,Mt.current),!0}function pv(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=y1(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,Ee(Mt),Ee(It),ye(It,t)):Ee(Mt),ye(Mt,n)}var zn=null,Pc=!1,hd=!1;function v1(t){zn===null?zn=[t]:zn.push(t)}function AC(t){Pc=!0,v1(t)}function ri(){if(!hd&&zn!==null){hd=!0;var t=0,e=de;try{var n=zn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,Pc=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),Bw(em,ri),i}finally{de=e,hd=!1}}return null}var rs=[],is=0,Cu=null,ku=0,Yt=[],Xt=0,xi=null,Wn=1,Hn="";function li(t,e){rs[is++]=ku,rs[is++]=Cu,Cu=t,ku=e}function _1(t,e,n){Yt[Xt++]=Wn,Yt[Xt++]=Hn,Yt[Xt++]=xi,xi=t;var r=Wn;t=Hn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-pn(e)+i|n<<i|r,Hn=s+t}else Wn=1<<s|n<<i|r,Hn=t}function um(t){t.return!==null&&(li(t,1),_1(t,1,0))}function cm(t){for(;t===Cu;)Cu=rs[--is],rs[is]=null,ku=rs[--is],rs[is]=null;for(;t===xi;)xi=Yt[--Xt],Yt[Xt]=null,Hn=Yt[--Xt],Yt[Xt]=null,Wn=Yt[--Xt],Yt[Xt]=null}var Bt=null,Ut=null,xe=!1,hn=null;function w1(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xi!==null?{id:Wn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ut=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(xe){var e=Ut;if(e){var n=e;if(!mv(t,e)){if(Pf(t))throw Error(k(418));e=Dr(n.nextSibling);var r=Bt;e&&mv(t,e)?w1(r,n):(t.flags=t.flags&-4097|2,xe=!1,Bt=t)}}else{if(Pf(t))throw Error(k(418));t.flags=t.flags&-4097|2,xe=!1,Bt=t}}}function gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function xl(t){if(t!==Bt)return!1;if(!xe)return gv(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Ut)){if(Pf(t))throw E1(),Error(k(418));for(;e;)w1(t,e),e=Dr(e.nextSibling)}if(gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Bt?Dr(t.stateNode.nextSibling):null;return!0}function E1(){for(var t=Ut;t;)t=Dr(t.nextSibling)}function ks(){Ut=Bt=null,xe=!1}function hm(t){hn===null?hn=[t]:hn.push(t)}var CC=ur.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ru=ni(null),Pu=null,ss=null,dm=null;function fm(){dm=ss=Pu=null}function pm(t){var e=Ru.current;Ee(Ru),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){Pu=t,dm=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(dm!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(Pu===null)throw Error(k(308));ss=t,Pu.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var fi=null;function mm(t){fi===null?fi=[t]:fi.push(t)}function I1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mm(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,mm(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}function yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bu(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=ke({},h,d);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=h}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var x1=new Iw.Component().refs;function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Vr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(mn(e,t,i,r),eu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Vr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(mn(e,t,i,r),eu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Vr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(mn(e,t,r,n),eu(e,t,r))}};function _v(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,r)||!na(i,s):!0}function S1(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Vt(e)?Ti:It.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function Df(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=x1,gm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Vt(e)?Ti:It.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bc.enqueueReplaceState(i,i.state,null),bu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===x1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ev(t){var e=t._init;return e(t._payload)}function A1(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=$r(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,E){return f===null||f.tag!==6?(f=vd(y,p.mode,E),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,E){var x=y.type;return x===Xi?c(p,f,y.props.children,E,y.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vr&&Ev(x)===f.type)?(E=i(f,y.props),E.ref=mo(p,f,y),E.return=p,E):(E=ou(y.type,y.key,y.props,null,p.mode,E),E.ref=mo(p,f,y),E.return=p,E)}function u(p,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=_d(y,p.mode,E),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,E,x){return f===null||f.tag!==7?(f=wi(y,p.mode,E,x),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vd(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pl:return y=ou(f.type,f.key,f.props,null,p.mode,y),y.ref=mo(p,null,f),y.return=p,y;case Yi:return f=_d(f,p.mode,y),f.return=p,f;case vr:var E=f._init;return h(p,E(f._payload),y)}if(Io(f)||uo(f))return f=wi(f,p.mode,y,null),f.return=p,f;Sl(p,f)}return null}function d(p,f,y,E){var x=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(p,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return y.key===x?l(p,f,y,E):null;case Yi:return y.key===x?u(p,f,y,E):null;case vr:return x=y._init,d(p,f,x(y._payload),E)}if(Io(y)||uo(y))return x!==null?null:c(p,f,y,E,null);Sl(p,y)}return null}function m(p,f,y,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,a(f,p,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case pl:return p=p.get(E.key===null?y:E.key)||null,l(f,p,E,x);case Yi:return p=p.get(E.key===null?y:E.key)||null,u(f,p,E,x);case vr:var C=E._init;return m(p,f,y,C(E._payload),x)}if(Io(E)||uo(E))return p=p.get(y)||null,c(f,p,E,x,null);Sl(f,E)}return null}function v(p,f,y,E){for(var x=null,C=null,b=f,N=f=0,H=null;b!==null&&N<y.length;N++){b.index>N?(H=b,b=null):H=b.sibling;var j=d(p,b,y[N],E);if(j===null){b===null&&(b=H);break}t&&b&&j.alternate===null&&e(p,b),f=s(j,f,N),C===null?x=j:C.sibling=j,C=j,b=H}if(N===y.length)return n(p,b),xe&&li(p,N),x;if(b===null){for(;N<y.length;N++)b=h(p,y[N],E),b!==null&&(f=s(b,f,N),C===null?x=b:C.sibling=b,C=b);return xe&&li(p,N),x}for(b=r(p,b);N<y.length;N++)H=m(b,p,N,y[N],E),H!==null&&(t&&H.alternate!==null&&b.delete(H.key===null?N:H.key),f=s(H,f,N),C===null?x=H:C.sibling=H,C=H);return t&&b.forEach(function(me){return e(p,me)}),xe&&li(p,N),x}function _(p,f,y,E){var x=uo(y);if(typeof x!="function")throw Error(k(150));if(y=x.call(y),y==null)throw Error(k(151));for(var C=x=null,b=f,N=f=0,H=null,j=y.next();b!==null&&!j.done;N++,j=y.next()){b.index>N?(H=b,b=null):H=b.sibling;var me=d(p,b,j.value,E);if(me===null){b===null&&(b=H);break}t&&b&&me.alternate===null&&e(p,b),f=s(me,f,N),C===null?x=me:C.sibling=me,C=me,b=H}if(j.done)return n(p,b),xe&&li(p,N),x;if(b===null){for(;!j.done;N++,j=y.next())j=h(p,j.value,E),j!==null&&(f=s(j,f,N),C===null?x=j:C.sibling=j,C=j);return xe&&li(p,N),x}for(b=r(p,b);!j.done;N++,j=y.next())j=m(b,p,N,j.value,E),j!==null&&(t&&j.alternate!==null&&b.delete(j.key===null?N:j.key),f=s(j,f,N),C===null?x=j:C.sibling=j,C=j);return t&&b.forEach(function(Se){return e(p,Se)}),xe&&li(p,N),x}function w(p,f,y,E){if(typeof y=="object"&&y!==null&&y.type===Xi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:e:{for(var x=y.key,C=f;C!==null;){if(C.key===x){if(x=y.type,x===Xi){if(C.tag===7){n(p,C.sibling),f=i(C,y.props.children),f.return=p,p=f;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vr&&Ev(x)===C.type){n(p,C.sibling),f=i(C,y.props),f.ref=mo(p,C,y),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}y.type===Xi?(f=wi(y.props.children,p.mode,E,y.key),f.return=p,p=f):(E=ou(y.type,y.key,y.props,null,p.mode,E),E.ref=mo(p,f,y),E.return=p,p=E)}return o(p);case Yi:e:{for(C=y.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=_d(y,p.mode,E),f.return=p,p=f}return o(p);case vr:return C=y._init,w(p,f,C(y._payload),E)}if(Io(y))return v(p,f,y,E);if(uo(y))return _(p,f,y,E);Sl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=vd(y,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return w}var Rs=A1(!0),C1=A1(!1),Fa={},Rn=ni(Fa),oa=ni(Fa),aa=ni(Fa);function pi(t){if(t===Fa)throw Error(k(174));return t}function ym(t,e){switch(ye(aa,e),ye(oa,t),ye(Rn,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}Ee(Rn),ye(Rn,e)}function Ps(){Ee(Rn),Ee(oa),Ee(aa)}function k1(t){pi(aa.current);var e=pi(Rn.current),n=df(e,t.type);e!==n&&(ye(oa,t),ye(Rn,n))}function vm(t){oa.current===t&&(Ee(Rn),Ee(oa))}var Ae=ni(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dd=[];function _m(){for(var t=0;t<dd.length;t++)dd[t]._workInProgressVersionPrimary=null;dd.length=0}var tu=ur.ReactCurrentDispatcher,fd=ur.ReactCurrentBatchConfig,Si=0,Ce=null,ze=null,Ge=null,Ou=!1,$o=!1,la=0,kC=0;function ct(){throw Error(k(321))}function wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Em(t,e,n,r,i,s){if(Si=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tu.current=t===null||t.memoizedState===null?NC:OC,t=n(r,i),$o){s=0;do{if($o=!1,la=0,25<=s)throw Error(k(301));s+=1,Ge=ze=null,e.updateQueue=null,tu.current=DC,t=n(r,i)}while($o)}if(tu.current=Du,e=ze!==null&&ze.next!==null,Si=0,Ge=ze=Ce=null,Ou=!1,e)throw Error(k(300));return t}function Im(){var t=la!==0;return la=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ce.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function rn(){if(ze===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Ge===null?Ce.memoizedState:Ge.next;if(e!==null)Ge=e,ze=t;else{if(t===null)throw Error(k(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?Ce.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function ua(t,e){return typeof e=="function"?e(t):e}function pd(t){var e=rn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ce.lanes|=c,Ai|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function md(t){var e=rn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function R1(){}function P1(t,e){var n=Ce,r=rn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Tm(O1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,ca(9,N1.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(k(349));Si&30||b1(n,e,i)}return i}function b1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N1(t,e,n,r){e.value=n,e.getSnapshot=r,D1(e)&&L1(t)}function O1(t,e,n){return n(function(){D1(e)&&L1(t)})}function D1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function L1(t){var e=er(t,1);e!==null&&mn(e,t,1,-1)}function Iv(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=bC.bind(null,Ce,t),[e.memoizedState,t]}function ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function M1(){return rn().memoizedState}function nu(t,e,n,r){var i=Tn();Ce.flags|=t,i.memoizedState=ca(1|e,n,void 0,r===void 0?null:r)}function Nc(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&wm(r,o.deps)){i.memoizedState=ca(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=ca(1|e,n,s,r)}function Tv(t,e){return nu(8390656,8,t,e)}function Tm(t,e){return Nc(2048,8,t,e)}function V1(t,e){return Nc(4,2,t,e)}function $1(t,e){return Nc(4,4,t,e)}function F1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j1(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,F1.bind(null,e,t),n)}function xm(){}function U1(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function z1(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function B1(t,e,n){return Si&21?(yn(n,e)||(n=qw(),Ce.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function RC(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=fd.transition;fd.transition={};try{t(!1),e()}finally{de=n,fd.transition=r}}function W1(){return rn().memoizedState}function PC(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H1(t))q1(e,n);else if(n=I1(t,e,n,r),n!==null){var i=kt();mn(n,t,r,i),G1(n,e,r)}}function bC(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H1(t))q1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=e.interleaved;l===null?(i.next=i,mm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=I1(t,e,i,r),n!==null&&(i=kt(),mn(n,t,r,i),G1(n,e,r))}}function H1(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function q1(t,e){$o=Ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}var Du={readContext:nn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},NC={readContext:nn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:Tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nu(4194308,4,F1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return nu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PC.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:Iv,useDebugValue:xm,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=Iv(!1),e=t[0];return t=RC.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=Tn();if(xe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Qe===null)throw Error(k(349));Si&30||b1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tv(O1.bind(null,r,s,t),[t]),r.flags|=2048,ca(9,N1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Qe.identifierPrefix;if(xe){var n=Hn,r=Wn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OC={readContext:nn,useCallback:U1,useContext:nn,useEffect:Tm,useImperativeHandle:j1,useInsertionEffect:V1,useLayoutEffect:$1,useMemo:z1,useReducer:pd,useRef:M1,useState:function(){return pd(ua)},useDebugValue:xm,useDeferredValue:function(t){var e=rn();return B1(e,ze.memoizedState,t)},useTransition:function(){var t=pd(ua)[0],e=rn().memoizedState;return[t,e]},useMutableSource:R1,useSyncExternalStore:P1,useId:W1,unstable_isNewReconciler:!1},DC={readContext:nn,useCallback:U1,useContext:nn,useEffect:Tm,useImperativeHandle:j1,useInsertionEffect:V1,useLayoutEffect:$1,useMemo:z1,useReducer:md,useRef:M1,useState:function(){return md(ua)},useDebugValue:xm,useDeferredValue:function(t){var e=rn();return ze===null?e.memoizedState=t:B1(e,ze.memoizedState,t)},useTransition:function(){var t=md(ua)[0],e=rn().memoizedState;return[t,e]},useMutableSource:R1,useSyncExternalStore:P1,useId:W1,unstable_isNewReconciler:!1};function bs(t,e){try{var n="",r=e;do n+=lA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LC=typeof WeakMap=="function"?WeakMap:Map;function K1(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,Hf=r),Lf(t,e)},n}function Q1(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lf(t,e),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QC.bind(null,t,e,n),e.then(t,t))}function Sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Av(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var MC=ur.ReactCurrentOwner,Dt=!1;function At(t,e,n,r){e.child=t===null?C1(e,null,n,r):Rs(e,t.child,n,r)}function Cv(t,e,n,r,i){n=n.render;var s=e.ref;return ms(e,i),r=Em(t,e,n,r,s,i),n=Im(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(xe&&n&&um(e),e.flags|=1,At(t,e,r,i),e.child)}function kv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Y1(t,e,s,r,i)):(t=ou(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=$r(s,r),t.ref=e.ref,t.return=e,e.child=t}function Y1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(na(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Mf(t,e,n,r,i)}function X1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(as,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(as,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(as,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(as,jt),jt|=r;return At(t,e,i,n),e.child}function J1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,i){var s=Vt(n)?Ti:It.current;return s=Cs(e,s),ms(e,i),n=Em(t,e,n,r,s,i),r=Im(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(xe&&r&&um(e),e.flags|=1,At(t,e,n,i),e.child)}function Rv(t,e,n,r,i){if(Vt(n)){var s=!0;Au(e)}else s=!1;if(ms(e,i),e.stateNode===null)ru(t,e),S1(e,n,r),Df(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Vt(n)?Ti:It.current,u=Cs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wv(e,o,r,u),_r=!1;var d=e.memoizedState;o.state=d,bu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Mt.current||_r?(typeof c=="function"&&(Of(e,n,c,r),l=e.memoizedState),(a=_r||_v(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,T1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nn(l):(l=Vt(n)?Ti:It.current,l=Cs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&wv(e,o,r,l),_r=!1,d=e.memoizedState,o.state=d,bu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Mt.current||_r?(typeof m=="function"&&(Of(e,n,m,r),v=e.memoizedState),(u=_r||_v(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vf(t,e,n,r,s,i)}function Vf(t,e,n,r,i,s){J1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pv(e,n,!1),tr(t,e,s);r=e.stateNode,MC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&pv(e,n,!0),e.child}function Z1(t){var e=t.stateNode;e.pendingContext?fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(t,e.context,!1),ym(t,e.containerInfo)}function Pv(t,e,n,r,i){return ks(),hm(i),e.flags|=256,At(t,e,n,r),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function eE(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ae,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,r,0,null),t=wi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ff(n),e.memoizedState=$f,t):Sm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$r(a,s):(s=wi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$f,r}return s=t.child,t=s.sibling,r=$r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sm(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,r){return r!==null&&hm(r),Rs(e,t.child,null,n),t=Sm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gd(Error(k(422))),Al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Lc({mode:"visible",children:r.children},i,0,null),s=wi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=Ff(o),e.memoizedState=$f,s);if(!(e.mode&1))return Al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=gd(s,r,void 0),Al(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),mn(r,t,i,-1))}return bm(),r=gd(Error(k(421))),Al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Dr(i.nextSibling),Bt=e,xe=!0,hn=null,t!==null&&(Yt[Xt++]=Wn,Yt[Xt++]=Hn,Yt[Xt++]=xi,Wn=t.id,Hn=t.overflow,xi=e),e=Sm(e,r.children),e.flags|=4096,e)}function bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nf(t.return,e,n)}function yd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bv(t,n,e);else if(t.tag===19)bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yd(e,!0,n,null,s);break;case"together":yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ru(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $C(t,e,n){switch(e.tag){case 3:Z1(e),ks();break;case 5:k1(e);break;case 1:Vt(e.type)&&Au(e);break;case 4:ym(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?eE(t,e,n):(ye(Ae,Ae.current&1),t=tr(t,e,n),t!==null?t.sibling:null);ye(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,X1(t,e,n)}return tr(t,e,n)}var nE,jf,rE,iE;nE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};rE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi(Rn.current);var s=null;switch(n){case"input":i=lf(t,i),r=lf(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=hf(t,i),r=hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xu)}ff(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iE=function(t,e,n,r){n!==r&&(e.flags|=4)};function go(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FC(t,e,n){var r=e.pendingProps;switch(cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Vt(e.type)&&Su(),ht(e),null;case 3:return r=e.stateNode,Ps(),Ee(Mt),Ee(It),_m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Kf(hn),hn=null))),jf(t,e),ht(e),null;case 5:vm(e);var i=pi(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)rE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ht(e),null}if(t=pi(Rn.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[sa]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)ve(xo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":jy(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":zy(r,s),ve("invalid",r)}ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":ml(r),Uy(r,s,!0);break;case"textarea":ml(r),By(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[sa]=r,nE(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<xo.length;i++)ve(xo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":jy(t,r),i=lf(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",t);break;case"textarea":zy(t,r),i=hf(t,r),ve("invalid",t);break;default:i=r}ff(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yo(t,l):typeof l=="number"&&Yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&Qp(t,s,l,o))}switch(n){case"input":ml(t),Uy(t,r,!1);break;case"textarea":ml(t),By(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)iE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=pi(aa.current),pi(Rn.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return ht(e),null;case 13:if(Ee(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Ut!==null&&e.mode&1&&!(e.flags&128))E1(),ks(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[xn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else hn!==null&&(Kf(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Be===0&&(Be=3):bm())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Ps(),jf(t,e),t===null&&ra(e.stateNode.containerInfo),ht(e),null;case 10:return pm(e.type._context),ht(e),null;case 17:return Vt(e.type)&&Su(),ht(e),null;case 19:if(Ee(Ae),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)go(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Ns&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return ht(e),null}else 2*De()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ae.current,ye(Ae,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return Pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function jC(t,e){switch(cm(e),e.tag){case 1:return Vt(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),Ee(Mt),Ee(It),_m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vm(e),null;case 13:if(Ee(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ae),null;case 4:return Ps(),null;case 10:return pm(e.type._context),null;case 22:case 23:return Pm(),null;case 24:return null;default:return null}}var Cl=!1,mt=!1,UC=typeof WeakSet=="function"?WeakSet:Set,F=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Uf(t,e,n){try{n()}catch(r){be(t,e,r)}}var Nv=!1;function zC(t,e){if(xf=Eu,t=l1(),lm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Eu=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:un(e.type,_),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){be(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return v=Nv,Nv=!1,v}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uf(e,n,s)}i=i.next}while(i!==r)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sE(t){var e=t.alternate;e!==null&&(t.alternate=null,sE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[sa],delete e[kf],delete e[xC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oE(t){return t.tag===5||t.tag===3||t.tag===4}function Ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xu));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function Wf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var rt=null,cn=!1;function gr(t,e,n){for(n=n.child;n!==null;)aE(t,e,n),n=n.sibling}function aE(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:mt||os(n,e);case 6:var r=rt,i=cn;rt=null,gr(t,e,n),rt=r,cn=i,rt!==null&&(cn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(cn?(t=rt,n=n.stateNode,t.nodeType===8?cd(t.parentNode,n):t.nodeType===1&&cd(t,n),ea(t)):cd(rt,n.stateNode));break;case 4:r=rt,i=cn,rt=n.stateNode.containerInfo,cn=!0,gr(t,e,n),rt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!mt&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,gr(t,e,n),mt=r):gr(t,e,n);break;default:gr(t,e,n)}}function Dv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UC),e.forEach(function(r){var i=XC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,cn=!1;break e;case 3:rt=a.stateNode.containerInfo,cn=!0;break e;case 4:rt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(rt===null)throw Error(k(160));aE(s,o,i),rt=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lE(e,t),e=e.sibling}function lE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),En(t),r&4){try{Fo(3,t,t.return),Oc(3,t)}catch(_){be(t,t.return,_)}try{Fo(5,t,t.return)}catch(_){be(t,t.return,_)}}break;case 1:ln(e,t),En(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(ln(e,t),En(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{Yo(i,"")}catch(_){be(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rw(i,s),pf(a,o);var u=pf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Dw(i,h):c==="dangerouslySetInnerHTML"?Nw(i,h):c==="children"?Yo(i,h):Qp(i,c,h,u)}switch(a){case"input":uf(i,s);break;case"textarea":Pw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hs(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[sa]=s}catch(_){be(t,t.return,_)}}break;case 6:if(ln(e,t),En(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){be(t,t.return,_)}}break;case 3:if(ln(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(_){be(t,t.return,_)}break;case 4:ln(e,t),En(t);break;case 13:ln(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(km=De())),r&4&&Dv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||c,ln(e,t),mt=u):ln(e,t),En(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(h=F=c;F!==null;){switch(d=F,m=d.child,d.tag){case 0:case 11:case 14:case 15:Fo(4,d,d.return);break;case 1:os(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){be(r,n,_)}}break;case 5:os(d,d.return);break;case 22:if(d.memoizedState!==null){Mv(h);continue}}m!==null?(m.return=d,F=m):Mv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ow("display",o))}catch(_){be(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){be(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(e,t),En(t),r&4&&Dv(t);break;case 21:break;default:ln(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yo(i,""),r.flags&=-33);var s=Ov(t);Wf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ov(t);Bf(t,a,o);break;default:throw Error(k(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BC(t,e,n){F=t,uE(t)}function uE(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=Cl;var u=mt;if(Cl=o,(mt=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?Vv(i):l!==null?(l.return=o,F=l):Vv(i);for(;s!==null;)F=s,uE(s),s=s.sibling;F=i,Cl=a,mt=u}Lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Lv(t)}}function Lv(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}mt||e.flags&512&&zf(e)}catch(d){be(e,e.return,d)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function Mv(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Vv(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{zf(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{zf(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var WC=Math.ceil,Lu=ur.ReactCurrentDispatcher,Am=ur.ReactCurrentOwner,en=ur.ReactCurrentBatchConfig,ie=0,Qe=null,$e=null,ot=0,jt=0,as=ni(0),Be=0,ha=null,Ai=0,Dc=0,Cm=0,jo=null,Nt=null,km=0,Ns=1/0,Un=null,Mu=!1,Hf=null,Mr=null,kl=!1,kr=null,Vu=0,Uo=0,qf=null,iu=-1,su=0;function kt(){return ie&6?De():iu!==-1?iu:iu=De()}function Vr(t){return t.mode&1?ie&2&&ot!==0?ot&-ot:CC.transition!==null?(su===0&&(su=qw()),su):(t=de,t!==0||(t=window.event,t=t===void 0?16:Zw(t.type)),t):1}function mn(t,e,n,r){if(50<Uo)throw Uo=0,qf=null,Error(k(185));Ma(t,n,r),(!(ie&2)||t!==Qe)&&(t===Qe&&(!(ie&2)&&(Dc|=n),Be===4&&Er(t,ot)),$t(t,r),n===1&&ie===0&&!(e.mode&1)&&(Ns=De()+500,Pc&&ri()))}function $t(t,e){var n=t.callbackNode;CA(t,e);var r=wu(t,t===Qe?ot:0);if(r===0)n!==null&&qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qy(n),e===1)t.tag===0?AC($v.bind(null,t)):v1($v.bind(null,t)),IC(function(){!(ie&6)&&ri()}),n=null;else{switch(Gw(r)){case 1:n=em;break;case 4:n=Ww;break;case 16:n=_u;break;case 536870912:n=Hw;break;default:n=_u}n=yE(n,cE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cE(t,e){if(iu=-1,su=0,ie&6)throw Error(k(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var r=wu(t,t===Qe?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$u(t,r);else{e=r;var i=ie;ie|=2;var s=dE();(Qe!==t||ot!==e)&&(Un=null,Ns=De()+500,_i(t,e));do try{GC();break}catch(a){hE(t,a)}while(1);fm(),Lu.current=s,ie=i,$e!==null?e=0:(Qe=null,ot=0,e=Be)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=Gf(t,i))),e===1)throw n=ha,_i(t,0),Er(t,r),$t(t,De()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!HC(i)&&(e=$u(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=Gf(t,s))),e===1))throw n=ha,_i(t,0),Er(t,r),$t(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ui(t,Nt,Un);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=km+500-De(),10<e)){if(wu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cf(ui.bind(null,t,Nt,Un),e);break}ui(t,Nt,Un);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WC(r/1960))-r,10<r){t.timeoutHandle=Cf(ui.bind(null,t,Nt,Un),r);break}ui(t,Nt,Un);break;case 5:ui(t,Nt,Un);break;default:throw Error(k(329))}}}return $t(t,De()),t.callbackNode===n?cE.bind(null,t):null}function Gf(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=$u(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Kf(e)),t}function Kf(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function HC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Cm,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function $v(t){if(ie&6)throw Error(k(327));gs();var e=wu(t,0);if(!(e&1))return $t(t,De()),null;var n=$u(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=Gf(t,r))}if(n===1)throw n=ha,_i(t,0),Er(t,e),$t(t,De()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Nt,Un),$t(t,De()),null}function Rm(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Ns=De()+500,Pc&&ri())}}function Ci(t){kr!==null&&kr.tag===0&&!(ie&6)&&gs();var e=ie;ie|=1;var n=en.transition,r=de;try{if(en.transition=null,de=1,t)return t()}finally{de=r,en.transition=n,ie=e,!(ie&6)&&ri()}}function Pm(){jt=as.current,Ee(as)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,EC(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Su();break;case 3:Ps(),Ee(Mt),Ee(It),_m();break;case 5:vm(r);break;case 4:Ps();break;case 13:Ee(Ae);break;case 19:Ee(Ae);break;case 10:pm(r.type._context);break;case 22:case 23:Pm()}n=n.return}if(Qe=t,$e=t=$r(t.current,null),ot=jt=e,Be=0,ha=null,Cm=Dc=Ai=0,Nt=jo=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function hE(t,e){do{var n=$e;try{if(fm(),tu.current=Du,Ou){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ou=!1}if(Si=0,Ge=ze=Ce=null,$o=!1,la=0,Am.current=null,n===null||n.return===null){Be=1,ha=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Sv(o);if(m!==null){m.flags&=-257,Av(m,o,a,s,e),m.mode&1&&xv(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){xv(s,u,e),bm();break e}l=Error(k(426))}}else if(xe&&a.mode&1){var w=Sv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Av(w,o,a,s,e),hm(bs(l,a));break e}}s=l=bs(l,a),Be!==4&&(Be=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=K1(s,l,e);yv(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mr===null||!Mr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Q1(s,a,e);yv(s,E);break e}}s=s.return}while(s!==null)}pE(n)}catch(x){e=x,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function dE(){var t=Lu.current;return Lu.current=Du,t===null?Du:t}function bm(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(Ai&268435455)&&!(Dc&268435455)||Er(Qe,ot)}function $u(t,e){var n=ie;ie|=2;var r=dE();(Qe!==t||ot!==e)&&(Un=null,_i(t,e));do try{qC();break}catch(i){hE(t,i)}while(1);if(fm(),ie=n,Lu.current=r,$e!==null)throw Error(k(261));return Qe=null,ot=0,Be}function qC(){for(;$e!==null;)fE($e)}function GC(){for(;$e!==null&&!vA();)fE($e)}function fE(t){var e=gE(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?pE(t):$e=e,Am.current=null}function pE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jC(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,$e=null;return}}else if(n=FC(n,e,jt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Be===0&&(Be=5)}function ui(t,e,n){var r=de,i=en.transition;try{en.transition=null,de=1,KC(t,e,n,r)}finally{en.transition=i,de=r}return null}function KC(t,e,n,r){do gs();while(kr!==null);if(ie&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kA(t,s),t===Qe&&($e=Qe=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,yE(_u,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=de;de=1;var a=ie;ie|=4,Am.current=null,zC(t,n),lE(n,t),pC(Sf),Eu=!!xf,Sf=xf=null,t.current=n,BC(n),_A(),ie=a,de=o,en.transition=s}else t.current=n;if(kl&&(kl=!1,kr=t,Vu=i),s=t.pendingLanes,s===0&&(Mr=null),IA(n.stateNode),$t(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=Hf,Hf=null,t;return Vu&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===qf?Uo++:(Uo=0,qf=t):Uo=0,ri(),null}function gs(){if(kr!==null){var t=Gw(Vu),e=en.transition,n=de;try{if(en.transition=null,de=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,Vu=0,ie&6)throw Error(k(331));var i=ie;for(ie|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Fo(8,c,s)}var h=c.child;if(h!==null)h.return=c,F=h;else for(;F!==null;){c=F;var d=c.sibling,m=c.return;if(sE(c),c===u){F=null;break}if(d!==null){d.return=m,F=d;break}F=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,F=p;break e}F=s.return}}var f=t.current;for(F=f;F!==null;){o=F;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,F=y;else e:for(o=f;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oc(9,a)}}catch(x){be(a,a.return,x)}if(a===o){F=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,F=E;break e}F=a.return}}if(ie=i,ri(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Sc,t)}catch{}r=!0}return r}finally{de=n,en.transition=e}}return!1}function Fv(t,e,n){e=bs(n,e),e=K1(t,e,1),t=Lr(t,e,1),e=kt(),t!==null&&(Ma(t,1,e),$t(t,e))}function be(t,e,n){if(t.tag===3)Fv(t,t,n);else for(;e!==null;){if(e.tag===3){Fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){t=bs(n,t),t=Q1(e,t,1),e=Lr(e,t,1),t=kt(),e!==null&&(Ma(e,1,t),$t(e,t));break}}e=e.return}}function QC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(ot&n)===n&&(Be===4||Be===3&&(ot&130023424)===ot&&500>De()-km?_i(t,0):Cm|=n),$t(t,e)}function mE(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=kt();t=er(t,e),t!==null&&(Ma(t,e,n),$t(t,n))}function YC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mE(t,n)}function XC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),mE(t,n)}var gE;gE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,$C(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,xe&&e.flags&1048576&&_1(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ru(t,e),t=e.pendingProps;var i=Cs(e,It.current);ms(e,n),i=Em(null,e,r,t,i,n);var s=Im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,Au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gm(e),i.updater=bc,e.stateNode=i,i._reactInternals=e,Df(e,r,t,n),e=Vf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&um(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ru(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZC(r),t=un(r,t),i){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Rv(null,e,r,t,n);break e;case 11:e=Cv(null,e,r,t,n);break e;case 14:e=kv(null,e,r,un(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Mf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Rv(t,e,r,i,n);case 3:e:{if(Z1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,T1(t,e),bu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bs(Error(k(423)),e),e=Pv(t,e,r,n,i);break e}else if(r!==i){i=bs(Error(k(424)),e),e=Pv(t,e,r,n,i);break e}else for(Ut=Dr(e.stateNode.containerInfo.firstChild),Bt=e,xe=!0,hn=null,n=C1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=tr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return k1(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),J1(t,e),At(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return eE(t,e,n);case 4:return ym(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Cv(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Ru,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Mt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ms(e,n),i=nn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),kv(t,e,r,i,n);case 15:return Y1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),ru(t,e),e.tag=1,Vt(r)?(t=!0,Au(e)):t=!1,ms(e,n),S1(e,r,i),Df(e,r,i,n),Vf(null,e,r,!0,t,n);case 19:return tE(t,e,n);case 22:return X1(t,e,n)}throw Error(k(156,e.tag))};function yE(t,e){return Bw(t,e)}function JC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new JC(t,e,n,r)}function Nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZC(t){if(typeof t=="function")return Nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===Jp)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ou(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return wi(n.children,i,s,e);case Yp:o=8,i|=8;break;case rf:return t=Zt(12,n,e,i|2),t.elementType=rf,t.lanes=s,t;case sf:return t=Zt(13,n,e,i),t.elementType=sf,t.lanes=s,t;case of:return t=Zt(19,n,e,i),t.elementType=of,t.lanes=s,t;case Aw:return Lc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xw:o=10;break e;case Sw:o=9;break e;case Xp:o=11;break e;case Jp:o=14;break e;case vr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function wi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Lc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=Aw,t.lanes=n,t.stateNode={isHidden:!1},t}function vd(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function _d(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ek(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zh(0),this.expirationTimes=Zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,r,i,s,o,a,l){return t=new ek(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gm(s),t}function tk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vE(t){if(!t)return Kr;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Vt(n))return y1(t,n,e)}return e}function _E(t,e,n,r,i,s,o,a,l){return t=Om(n,r,!0,t,i,s,o,a,l),t.context=vE(null),n=t.current,r=kt(),i=Vr(n),s=Yn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,Ma(t,i,r),$t(t,r),t}function Mc(t,e,n,r){var i=e.current,s=kt(),o=Vr(i);return n=vE(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(mn(t,i,o,s),eu(t,i,o)),o}function Fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dm(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function nk(){return null}var wE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lm(t){this._internalRoot=t}Vc.prototype.render=Lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Mc(t,e,null,null)};Vc.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){Mc(null,t,null,null)}),e[Zn]=null}};function Vc(t){this._internalRoot=t}Vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&Jw(t)}};function Mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function rk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fu(o);s.call(u)}}var o=_E(e,r,t,0,null,!1,!1,"",Uv);return t._reactRootContainer=o,t[Zn]=o.current,ra(t.nodeType===8?t.parentNode:t),Ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fu(l);a.call(u)}}var l=Om(t,0,!1,null,null,!1,!1,"",Uv);return t._reactRootContainer=l,t[Zn]=l.current,ra(t.nodeType===8?t.parentNode:t),Ci(function(){Mc(e,l,n,r)}),l}function Fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fu(o);a.call(l)}}Mc(e,o,t,i)}else o=rk(n,e,t,i,r);return Fu(o)}Kw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(tm(e,n|1),$t(e,De()),!(ie&6)&&(Ns=De()+500,ri()))}break;case 13:Ci(function(){var r=er(t,1);if(r!==null){var i=kt();mn(r,t,1,i)}}),Dm(t,1)}};nm=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=kt();mn(e,t,134217728,n)}Dm(t,134217728)}};Qw=function(t){if(t.tag===13){var e=Vr(t),n=er(t,e);if(n!==null){var r=kt();mn(n,t,e,r)}Dm(t,e)}};Yw=function(){return de};Xw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rc(r);if(!i)throw Error(k(90));kw(r),uf(r,i)}}}break;case"textarea":Pw(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};Vw=Rm;$w=Ci;var ik={usingClientEntryPoint:!1,Events:[$a,ts,Rc,Lw,Mw,Rm]},yo={findFiberByHostInstance:di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sk={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uw(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Sc=Rl.inject(sk),kn=Rl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ik;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(e))throw Error(k(200));return tk(t,e,null,n)};Gt.createRoot=function(t,e){if(!Mm(t))throw Error(k(299));var n=!1,r="",i=wE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,ra(t.nodeType===8?t.parentNode:t),new Lm(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Uw(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Ci(t)};Gt.hydrate=function(t,e,n){if(!$c(e))throw Error(k(200));return Fc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Mm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_E(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,ra(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vc(e)};Gt.render=function(t,e,n){if(!$c(e))throw Error(k(200));return Fc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!$c(t))throw Error(k(40));return t._reactRootContainer?(Ci(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Gt.unstable_batchedUpdates=Rm;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Fc(t,e,n,!1,r)};Gt.version="18.2.0-next-9e3b772b8-20220608";function EE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(EE)}catch(t){console.error(t)}}EE(),_w.exports=Gt;var IE=_w.exports,zv=IE;tf.createRoot=zv.createRoot,tf.hydrateRoot=zv.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},da.apply(this,arguments)}var Rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rr||(Rr={}));const Bv="popstate";function ok(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Qf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ju(i)}return lk(e,n,null,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ak(){return Math.random().toString(36).substr(2,8)}function Wv(t,e){return{usr:t.state,key:t.key,idx:e}}function Qf(t,e,n,r){return n===void 0&&(n=null),da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qs(e):e,{state:n,key:e&&e.key||r||ak()})}function ju(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Rr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(da({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Rr.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function d(w,p){a=Rr.Push;let f=Qf(_.location,w,p);n&&n(f,w),u=c()+1;let y=Wv(f,u),E=_.createHref(f);try{o.pushState(y,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,p){a=Rr.Replace;let f=Qf(_.location,w,p);n&&n(f,w),u=c();let y=Wv(f,u),E=_.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:ju(w);return Le(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Bv,h),l=w,()=>{i.removeEventListener(Bv,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(w){return o.go(w)}};return _}var Hv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hv||(Hv={}));function uk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qs(e):e,i=$m(r.pathname||"/",n);if(i==null)return null;let s=TE(t);ck(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_k(s[a],Ik(i));return o}function TE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Fr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),TE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of xE(s.path))i(s,o,l)}),e}function xE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=xE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ck(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hk=/^:\w+$/,dk=3,fk=2,pk=1,mk=10,gk=-2,qv=t=>t==="*";function yk(t,e){let n=t.split("/"),r=n.length;return n.some(qv)&&(r+=gk),e&&(r+=fk),n.filter(i=>!qv(i)).reduce((i,s)=>i+(hk.test(s)?dk:s===""?pk:mk),r)}function vk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _k(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Fr([i,c.pathname]),pathnameBase:Ak(Fr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Fr([i,c.pathnameBase]))}return s}function wk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ek(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Tk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ek(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ik(t){try{return decodeURI(t)}catch(e){return Vm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tk(t,e){try{return decodeURIComponent(t)}catch(n){return Vm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function $m(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qs(t):t;return{pathname:n?n.startsWith("/")?n:Sk(n,e):e,search:Ck(r),hash:kk(i)}}function Sk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qs(t):(i=da({},t),Le(!i.pathname||!i.pathname.includes("?"),wd("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),wd("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),wd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=xk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Fr=t=>t.join("/").replace(/\/\/+/g,"/"),Ak=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ck=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Rk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const SE=["post","put","patch","delete"];new Set(SE);const Pk=["get",...SE];new Set(Pk);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uu.apply(this,arguments)}const Um=T.createContext(null),AE=T.createContext(null),$i=T.createContext(null),jc=T.createContext(null),cr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),CE=T.createContext(null);function bk(t,e){let{relative:n}=e===void 0?{}:e;Ys()||Le(!1);let{basename:r,navigator:i}=T.useContext($i),{hash:s,pathname:o,search:a}=zm(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Fr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ys(){return T.useContext(jc)!=null}function hr(){return Ys()||Le(!1),T.useContext(jc).location}function kE(t){T.useContext($i).static||T.useLayoutEffect(t)}function dr(){let{isDataRoute:t}=T.useContext(cr);return t?qk():Nk()}function Nk(){Ys()||Le(!1);let t=T.useContext(Um),{basename:e,navigator:n}=T.useContext($i),{matches:r}=T.useContext(cr),{pathname:i}=hr(),s=JSON.stringify(Fm(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return kE(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=jm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Fr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Ok=T.createContext(null);function Dk(t){let e=T.useContext(cr).outlet;return e&&T.createElement(Ok.Provider,{value:t},e)}function zm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(cr),{pathname:i}=hr(),s=JSON.stringify(Fm(r).map(o=>o.pathnameBase));return T.useMemo(()=>jm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Lk(t,e){return Mk(t,e)}function Mk(t,e,n){Ys()||Le(!1);let{navigator:r}=T.useContext($i),{matches:i}=T.useContext(cr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=hr(),u;if(e){var c;let _=typeof e=="string"?Qs(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Le(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=uk(t,{pathname:d}),v=Uk(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Fr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Fr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?T.createElement(jc.Provider,{value:{location:Uu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rr.Pop}},v):v}function Vk(){let t=Hk(),e=Rk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const $k=T.createElement(Vk,null);class Fk extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(cr.Provider,{value:this.props.routeContext},T.createElement(CE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jk(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Um);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(cr.Provider,{value:e},r)}function Uk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Le(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||$k);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=T.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,T.createElement(jk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(Fk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Yf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Yf||(Yf={}));var fa;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(fa||(fa={}));function zk(t){let e=T.useContext(Um);return e||Le(!1),e}function Bk(t){let e=T.useContext(AE);return e||Le(!1),e}function Wk(t){let e=T.useContext(cr);return e||Le(!1),e}function RE(t){let e=Wk(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function Hk(){var t;let e=T.useContext(CE),n=Bk(fa.UseRouteError),r=RE(fa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function qk(){let{router:t}=zk(Yf.UseNavigateStable),e=RE(fa.UseNavigateStable),n=T.useRef(!1);return kE(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Uu({fromRouteId:e},s)))},[t,e])}function Gk(t){let{to:e,replace:n,state:r,relative:i}=t;Ys()||Le(!1);let{matches:s}=T.useContext(cr),{pathname:o}=hr(),a=dr(),l=jm(e,Fm(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Kk(t){return Dk(t.context)}function jn(t){Le(!1)}function Qk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Rr.Pop,navigator:s,static:o=!1}=t;Ys()&&Le(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Qs(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=T.useMemo(()=>{let _=$m(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:T.createElement($i.Provider,{value:l},T.createElement(jc.Provider,{children:n,value:v}))}function Yk(t){let{children:e,location:n}=t;return Lk(Xf(e),n)}var Gv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Gv||(Gv={}));new Promise(()=>{});function Xf(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Xf(r.props.children,s));return}r.type!==jn&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}function PE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Xk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jk(t,e){return t.button===0&&(!e||e==="_self")&&!Xk(t)}const Zk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],eR=["aria-current","caseSensitive","className","end","style","to","children"],Kv="startTransition";function tR(t){let{basename:e,children:n,window:r}=t,i=T.useRef();i.current==null&&(i.current=ok({window:r,v5Compat:!0}));let s=i.current,[o,a]=T.useState({action:s.action,location:s.location}),l=T.useCallback(u=>{Kv in My?My[Kv](()=>a(u)):a(u)},[a]);return T.useLayoutEffect(()=>s.listen(l),[s,l]),T.createElement(Qk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const nR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iR=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=PE(e,Zk),{basename:d}=T.useContext($i),m,v=!1;if(typeof u=="string"&&rR.test(u)&&(m=u,nR))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=$m(y.pathname,d);y.origin===f.origin&&E!=null?u=E+y.search+y.hash:v=!0}catch{}let _=bk(u,{relative:i}),w=oR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return T.createElement("a",zu({},h,{href:m||_,onClick:v||s?r:p,ref:n,target:l}))}),sR=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=PE(e,eR),h=zm(l,{relative:c.relative}),d=hr(),m=T.useContext(AE),{navigator:v}=T.useContext($i),_=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,w=d.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,_=_.toLowerCase());let f=w===_||!o&&w.startsWith(_)&&w.charAt(_.length)==="/",y=p!=null&&(p===_||!o&&p.startsWith(_)&&p.charAt(_.length)==="/"),E=f?r:void 0,x;typeof s=="function"?x=s({isActive:f,isPending:y}):x=[s,f?"active":null,y?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:f,isPending:y}):a;return T.createElement(iR,zu({},c,{"aria-current":E,className:x,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:f,isPending:y}):u)});var Qv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Qv||(Qv={}));var Yv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yv||(Yv={}));function oR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=dr(),l=hr(),u=zm(t,{relative:o});return T.useCallback(c=>{if(Jk(c,n)){c.preventDefault();let h=r!==void 0?r:ju(l)===ju(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var bE={exports:{}},NE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=T;function aR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lR=typeof Object.is=="function"?Object.is:aR,uR=Os.useState,cR=Os.useEffect,hR=Os.useLayoutEffect,dR=Os.useDebugValue;function fR(t,e){var n=e(),r=uR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return hR(function(){i.value=n,i.getSnapshot=e,Ed(i)&&s({inst:i})},[t,n,e]),cR(function(){return Ed(i)&&s({inst:i}),t(function(){Ed(i)&&s({inst:i})})},[t]),dR(n),n}function Ed(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!lR(t,n)}catch{return!0}}function pR(t,e){return e()}var mR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?pR:fR;NE.useSyncExternalStore=Os.useSyncExternalStore!==void 0?Os.useSyncExternalStore:mR;bE.exports=NE;var gR=bE.exports,OE={exports:{}},DE={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=T,yR=gR;function vR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _R=typeof Object.is=="function"?Object.is:vR,wR=yR.useSyncExternalStore,ER=Uc.useRef,IR=Uc.useEffect,TR=Uc.useMemo,xR=Uc.useDebugValue;DE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=ER(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=TR(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var v=o.value;if(i(v,m))return h=v}return h=m}if(v=h,_R(c,m))return v;var _=r(m);return i!==void 0&&i(v,_)?v:(c=m,h=_)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=wR(t,s[0],s[1]);return IR(function(){o.hasValue=!0,o.value=a},[a]),xR(a),a};OE.exports=DE;var SR=OE.exports;function AR(t){t()}let LE=AR;const CR=t=>LE=t,kR=()=>LE;let Id=null;function RR(){return Id||(Id=T.createContext(null)),Id}const Qr=new Proxy({},new Proxy({},{get(t,e){const n=RR();return(r,...i)=>Reflect[e](n,...i)}}));function Bm(t=Qr){return function(){return T.useContext(t)}}const ME=Bm(),PR=()=>{throw new Error("uSES not initialized!")};let VE=PR;const bR=t=>{VE=t},NR=(t,e)=>t===e;function OR(t=Qr){const e=t===Qr?ME:Bm(t);return function(r,i={}){const{equalityFn:s=NR,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();T.useRef(!0);const m=T.useCallback({[r.name](_){return r(_)}}[r.name],[r,h,o]),v=VE(u.addNestedSub,l.getState,c||l.getState,m,s);return T.useDebugValue(v),v}}const fr=OR();var $E={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=typeof Symbol=="function"&&Symbol.for,Wm=Xe?Symbol.for("react.element"):60103,Hm=Xe?Symbol.for("react.portal"):60106,zc=Xe?Symbol.for("react.fragment"):60107,Bc=Xe?Symbol.for("react.strict_mode"):60108,Wc=Xe?Symbol.for("react.profiler"):60114,Hc=Xe?Symbol.for("react.provider"):60109,qc=Xe?Symbol.for("react.context"):60110,qm=Xe?Symbol.for("react.async_mode"):60111,Gc=Xe?Symbol.for("react.concurrent_mode"):60111,Kc=Xe?Symbol.for("react.forward_ref"):60112,Qc=Xe?Symbol.for("react.suspense"):60113,DR=Xe?Symbol.for("react.suspense_list"):60120,Yc=Xe?Symbol.for("react.memo"):60115,Xc=Xe?Symbol.for("react.lazy"):60116,LR=Xe?Symbol.for("react.block"):60121,MR=Xe?Symbol.for("react.fundamental"):60117,VR=Xe?Symbol.for("react.responder"):60118,$R=Xe?Symbol.for("react.scope"):60119;function Qt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Wm:switch(t=t.type,t){case qm:case Gc:case zc:case Wc:case Bc:case Qc:return t;default:switch(t=t&&t.$$typeof,t){case qc:case Kc:case Xc:case Yc:case Hc:return t;default:return e}}case Hm:return e}}}function FE(t){return Qt(t)===Gc}pe.AsyncMode=qm;pe.ConcurrentMode=Gc;pe.ContextConsumer=qc;pe.ContextProvider=Hc;pe.Element=Wm;pe.ForwardRef=Kc;pe.Fragment=zc;pe.Lazy=Xc;pe.Memo=Yc;pe.Portal=Hm;pe.Profiler=Wc;pe.StrictMode=Bc;pe.Suspense=Qc;pe.isAsyncMode=function(t){return FE(t)||Qt(t)===qm};pe.isConcurrentMode=FE;pe.isContextConsumer=function(t){return Qt(t)===qc};pe.isContextProvider=function(t){return Qt(t)===Hc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wm};pe.isForwardRef=function(t){return Qt(t)===Kc};pe.isFragment=function(t){return Qt(t)===zc};pe.isLazy=function(t){return Qt(t)===Xc};pe.isMemo=function(t){return Qt(t)===Yc};pe.isPortal=function(t){return Qt(t)===Hm};pe.isProfiler=function(t){return Qt(t)===Wc};pe.isStrictMode=function(t){return Qt(t)===Bc};pe.isSuspense=function(t){return Qt(t)===Qc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===zc||t===Gc||t===Wc||t===Bc||t===Qc||t===DR||typeof t=="object"&&t!==null&&(t.$$typeof===Xc||t.$$typeof===Yc||t.$$typeof===Hc||t.$$typeof===qc||t.$$typeof===Kc||t.$$typeof===MR||t.$$typeof===VR||t.$$typeof===$R||t.$$typeof===LR)};pe.typeOf=Qt;$E.exports=pe;var Gm=$E.exports,Km=Gm,FR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qm={};Qm[Km.ForwardRef]=UR;Qm[Km.Memo]=jE;function Xv(t){return Km.isMemo(t)?jE:Qm[t.$$typeof]||FR}var zR=Object.defineProperty,BR=Object.getOwnPropertyNames,Jv=Object.getOwnPropertySymbols,WR=Object.getOwnPropertyDescriptor,HR=Object.getPrototypeOf,Zv=Object.prototype;function UE(t,e,n){if(typeof e!="string"){if(Zv){var r=HR(e);r&&r!==Zv&&UE(t,r,n)}var i=BR(e);Jv&&(i=i.concat(Jv(e)));for(var s=Xv(t),o=Xv(e),a=0;a<i.length;++a){var l=i[a];if(!jR[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=WR(e,l);try{zR(t,l,u)}catch{}}}}return t}var qR=UE;const GR=lw(qR);var ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=Symbol.for("react.element"),Xm=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),th=Symbol.for("react.provider"),nh=Symbol.for("react.context"),KR=Symbol.for("react.server_context"),rh=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),ah=Symbol.for("react.lazy"),QR=Symbol.for("react.offscreen"),zE;zE=Symbol.for("react.module.reference");function sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ym:switch(t=t.type,t){case Jc:case eh:case Zc:case ih:case sh:return t;default:switch(t=t&&t.$$typeof,t){case KR:case nh:case rh:case ah:case oh:case th:return t;default:return e}}case Xm:return e}}}ge.ContextConsumer=nh;ge.ContextProvider=th;ge.Element=Ym;ge.ForwardRef=rh;ge.Fragment=Jc;ge.Lazy=ah;ge.Memo=oh;ge.Portal=Xm;ge.Profiler=eh;ge.StrictMode=Zc;ge.Suspense=ih;ge.SuspenseList=sh;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(t){return sn(t)===nh};ge.isContextProvider=function(t){return sn(t)===th};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ym};ge.isForwardRef=function(t){return sn(t)===rh};ge.isFragment=function(t){return sn(t)===Jc};ge.isLazy=function(t){return sn(t)===ah};ge.isMemo=function(t){return sn(t)===oh};ge.isPortal=function(t){return sn(t)===Xm};ge.isProfiler=function(t){return sn(t)===eh};ge.isStrictMode=function(t){return sn(t)===Zc};ge.isSuspense=function(t){return sn(t)===ih};ge.isSuspenseList=function(t){return sn(t)===sh};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Jc||t===eh||t===Zc||t===ih||t===sh||t===QR||typeof t=="object"&&t!==null&&(t.$$typeof===ah||t.$$typeof===oh||t.$$typeof===th||t.$$typeof===nh||t.$$typeof===rh||t.$$typeof===zE||t.getModuleId!==void 0)};ge.typeOf=sn;function YR(){const t=kR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const e0={notify(){},get:()=>[]};function XR(t,e){let n,r=e0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=YR())}function u(){n&&(n(),n=void 0,r.clear(),r=e0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const JR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZR=JR?T.useLayoutEffect:T.useEffect;function eP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=T.useMemo(()=>{const u=XR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=T.useMemo(()=>t.getState(),[t]);ZR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Qr;return Lt.createElement(l.Provider,{value:o},n)}function BE(t=Qr){const e=t===Qr?ME:Bm(t);return function(){const{store:r}=e();return r}}const tP=BE();function nP(t=Qr){const e=t===Qr?tP:BE(t);return function(){return e().dispatch}}const ja=nP();bR(SR.useSyncExternalStoreWithSelector);CR(IE.unstable_batchedUpdates);const pr=t=>t.auth;function rP(t){function e(D,M,$,K,I){for(var ne=0,O=0,Pe=0,ue=0,he,Z,et=0,bt=0,se,ut=se=he=0,ce=0,tt=0,ao=0,nt=0,dl=$.length,lo=dl-1,an,Y="",Oe="",qh="",Gh="",mr;ce<dl;){if(Z=$.charCodeAt(ce),ce===lo&&O+ue+Pe+ne!==0&&(O!==0&&(Z=O===47?10:47),ue=Pe=ne=0,dl++,lo++),O+ue+Pe+ne===0){if(ce===lo&&(0<tt&&(Y=Y.replace(d,"")),0<Y.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:Y+=$.charAt(ce)}Z=59}switch(Z){case 123:for(Y=Y.trim(),he=Y.charCodeAt(0),se=1,nt=++ce;ce<dl;){switch(Z=$.charCodeAt(ce)){case 123:se++;break;case 125:se--;break;case 47:switch(Z=$.charCodeAt(ce+1)){case 42:case 47:e:{for(ut=ce+1;ut<lo;++ut)switch($.charCodeAt(ut)){case 47:if(Z===42&&$.charCodeAt(ut-1)===42&&ce+2!==ut){ce=ut+1;break e}break;case 10:if(Z===47){ce=ut+1;break e}}ce=ut}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;ce++<lo&&$.charCodeAt(ce)!==Z;);}if(se===0)break;ce++}switch(se=$.substring(nt,ce),he===0&&(he=(Y=Y.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<tt&&(Y=Y.replace(d,"")),Z=Y.charCodeAt(1),Z){case 100:case 109:case 115:case 45:tt=M;break;default:tt=on}if(se=e(M,tt,se,Z,I+1),nt=se.length,0<S&&(tt=n(on,Y,ao),mr=a(3,se,tt,M,Ue,Se,nt,Z,I,K),Y=tt.join(""),mr!==void 0&&(nt=(se=mr.trim()).length)===0&&(Z=0,se="")),0<nt)switch(Z){case 115:Y=Y.replace(C,o);case 100:case 109:case 45:se=Y+"{"+se+"}";break;case 107:Y=Y.replace(f,"$1 $2"),se=Y+"{"+se+"}",se=He===1||He===2&&s("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=Y+se,K===112&&(se=(Oe+=se,""))}else se="";break;default:se=e(M,n(M,Y,ao),se,K,I+1)}qh+=se,se=ao=tt=ut=he=0,Y="",Z=$.charCodeAt(++ce);break;case 125:case 59:if(Y=(0<tt?Y.replace(d,""):Y).trim(),1<(nt=Y.length))switch(ut===0&&(he=Y.charCodeAt(0),he===45||96<he&&123>he)&&(nt=(Y=Y.replace(" ",":")).length),0<S&&(mr=a(1,Y,M,D,Ue,Se,Oe.length,K,I,K))!==void 0&&(nt=(Y=mr.trim()).length)===0&&(Y="\0\0"),he=Y.charCodeAt(0),Z=Y.charCodeAt(1),he){case 0:break;case 64:if(Z===105||Z===99){Gh+=Y+$.charAt(ce);break}default:Y.charCodeAt(nt-1)!==58&&(Oe+=i(Y,he,Z,Y.charCodeAt(2)))}ao=tt=ut=he=0,Y="",Z=$.charCodeAt(++ce)}}switch(Z){case 13:case 10:O===47?O=0:1+he===0&&K!==107&&0<Y.length&&(tt=1,Y+="\0"),0<S*W&&a(0,Y,M,D,Ue,Se,Oe.length,K,I,K),Se=1,Ue++;break;case 59:case 125:if(O+ue+Pe+ne===0){Se++;break}default:switch(Se++,an=$.charAt(ce),Z){case 9:case 32:if(ue+ne+O===0)switch(et){case 44:case 58:case 9:case 32:an="";break;default:Z!==32&&(an=" ")}break;case 0:an="\\0";break;case 12:an="\\f";break;case 11:an="\\v";break;case 38:ue+O+ne===0&&(tt=ao=1,an="\f"+an);break;case 108:if(ue+O+ne+St===0&&0<ut)switch(ce-ut){case 2:et===112&&$.charCodeAt(ce-3)===58&&(St=et);case 8:bt===111&&(St=bt)}break;case 58:ue+O+ne===0&&(ut=ce);break;case 44:O+Pe+ue+ne===0&&(tt=1,an+="\r");break;case 34:case 39:O===0&&(ue=ue===Z?0:ue===0?Z:ue);break;case 91:ue+O+Pe===0&&ne++;break;case 93:ue+O+Pe===0&&ne--;break;case 41:ue+O+ne===0&&Pe--;break;case 40:if(ue+O+ne===0){if(he===0)switch(2*et+3*bt){case 533:break;default:he=1}Pe++}break;case 64:O+Pe+ue+ne+ut+se===0&&(se=1);break;case 42:case 47:if(!(0<ue+ne+Pe))switch(O){case 0:switch(2*Z+3*$.charCodeAt(ce+1)){case 235:O=47;break;case 220:nt=ce,O=42}break;case 42:Z===47&&et===42&&nt+2!==ce&&($.charCodeAt(nt+2)===33&&(Oe+=$.substring(nt,ce+1)),an="",O=0)}}O===0&&(Y+=an)}bt=et,et=Z,ce++}if(nt=Oe.length,0<nt){if(tt=M,0<S&&(mr=a(2,Oe,tt,D,Ue,Se,nt,K,I,K),mr!==void 0&&(Oe=mr).length===0))return Gh+Oe+qh;if(Oe=tt.join(",")+"{"+Oe+"}",He*St!==0){switch(He!==2||s(Oe,2)||(St=0),St){case 111:Oe=Oe.replace(E,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(y,"::-webkit-input-$1")+Oe.replace(y,"::-moz-$1")+Oe.replace(y,":-ms-input-$1")+Oe}St=0}}return Gh+Oe+qh}function n(D,M,$){var K=M.trim().split(w);M=K;var I=K.length,ne=D.length;switch(ne){case 0:case 1:var O=0;for(D=ne===0?"":D[0]+" ";O<I;++O)M[O]=r(D,M[O],$).trim();break;default:var Pe=O=0;for(M=[];O<I;++O)for(var ue=0;ue<ne;++ue)M[Pe++]=r(D[ue]+" ",K[O],$).trim()}return M}function r(D,M,$){var K=M.charCodeAt(0);switch(33>K&&(K=(M=M.trim()).charCodeAt(0)),K){case 38:return M.replace(p,"$1"+D.trim());case 58:return D.trim()+M.replace(p,"$1"+D.trim());default:if(0<1*$&&0<M.indexOf("\f"))return M.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+M}function i(D,M,$,K){var I=D+";",ne=2*M+3*$+4*K;if(ne===944){D=I.indexOf(":",9)+1;var O=I.substring(D,I.length-1).trim();return O=I.substring(0,D).trim()+O+";",He===1||He===2&&s(O,1)?"-webkit-"+O+O:O}if(He===0||He===2&&!s(I,1))return I;switch(ne){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(me,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return O=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+I+"-ms-flex-pack"+O+I;case 1005:return v.test(I)?I.replace(m,":-webkit-")+I.replace(m,":-moz-")+I:I;case 1e3:switch(O=I.substring(13).trim(),M=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(M)){case 226:O=I.replace(x,"tb");break;case 232:O=I.replace(x,"tb-rl");break;case 220:O=I.replace(x,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+O+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(M=(I=D).length-10,O=(I.charCodeAt(M)===33?I.substring(0,M):I).substring(D.indexOf(":",7)+1).trim(),ne=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:I=I.replace(O,"-webkit-"+O)+";"+I;break;case 207:case 102:I=I.replace(O,"-webkit-"+(102<ne?"inline-":"")+"box")+";"+I.replace(O,"-webkit-"+O)+";"+I.replace(O,"-ms-"+O+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return O=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+O+"-ms-flex-"+O+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(N,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(N,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(j.test(D)===!0)return(O=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),M,$,K).replace(":fill-available",":stretch"):I.replace(O,"-webkit-"+O)+I.replace(O,"-moz-"+O.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,$+K===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+I}return I}function s(D,M){var $=D.indexOf(M===1?":":"{"),K=D.substring(0,M!==3?$:10);return $=D.substring($+1,D.length-1),U(M!==2?K:K.replace(H,"$1"),$,M)}function o(D,M){var $=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return $!==M+";"?$.replace(b," or ($1)").substring(4):"("+M+")"}function a(D,M,$,K,I,ne,O,Pe,ue,he){for(var Z=0,et=M,bt;Z<S;++Z)switch(bt=Ze[Z].call(c,D,et,$,K,I,ne,O,Pe,ue,he)){case void 0:case!1:case!0:case null:break;default:et=bt}if(et!==M)return et}function l(D){switch(D){case void 0:case null:S=Ze.length=0;break;default:if(typeof D=="function")Ze[S++]=D;else if(typeof D=="object")for(var M=0,$=D.length;M<$;++M)l(D[M]);else W=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(U=null,D?typeof D!="function"?He=1:(He=2,U=D):He=0),u}function c(D,M){var $=D;if(33>$.charCodeAt(0)&&($=$.trim()),ae=$,$=[ae],0<S){var K=a(-1,M,$,$,Ue,Se,0,0,0,0);K!==void 0&&typeof K=="string"&&(M=K)}var I=e(on,$,M,0,0);return 0<S&&(K=a(-2,I,$,$,Ue,Se,I.length,0,0,0),K!==void 0&&(I=K)),ae="",St=0,Se=Ue=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,v=/zoo|gra/,_=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,N=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,Se=1,Ue=1,St=0,He=1,on=[],Ze=[],S=0,U=null,W=0,ae="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var iP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function sP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var oP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,t0=sP(function(t){return oP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function qn(){return(qn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var n0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Jf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Gm.typeOf(t)},Bu=Object.freeze([]),jr=Object.freeze({});function pa(t){return typeof t=="function"}function r0(t){return t.displayName||t.name||"Component"}function Jm(t){return t&&typeof t.styledComponentId=="string"}var Ds=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zm=typeof window<"u"&&"HTMLElement"in window,aP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ua(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var lP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ua(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),au=new Map,Wu=new Map,zo=1,Pl=function(t){if(au.has(t))return au.get(t);for(;Wu.has(zo);)zo++;var e=zo++;return au.set(t,e),Wu.set(e,t),e},uP=function(t){return Wu.get(t)},cP=function(t,e){e>=zo&&(zo=e+1),au.set(t,e),Wu.set(e,t)},hP="style["+Ds+'][data-styled-version="5.3.11"]',dP=new RegExp("^"+Ds+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},pP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(dP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(cP(u,l),fP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},mP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},WE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ds))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ds,"active"),r.setAttribute("data-styled-version","5.3.11");var o=mP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},gP=function(){function t(n){var r=this.element=WE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Ua(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),yP=function(){function t(n){var r=this.element=WE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),vP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),i0=Zm,_P={isServer:!Zm,useCSSOMInjection:!aP},HE=function(){function t(n,r,i){n===void 0&&(n=jr),r===void 0&&(r={}),this.options=qn({},_P,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Zm&&i0&&(i0=!1,function(s){for(var o=document.querySelectorAll(hP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ds)!=="active"&&(pP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Pl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(qn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new vP(o):s?new gP(o):new yP(o),new lP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Pl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Pl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Pl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=uP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ds+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),wP=/(a)(d)/gi,s0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Zf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=s0(e%52)+n;return(s0(e%52)+n).replace(wP,"$1-$2")}var ls=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},qE=function(t){return ls(5381,t)};function EP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(pa(n)&&!Jm(n))return!1}return!0}var IP=qE("5.3.11"),TP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&EP(e),this.componentId=n,this.baseHash=ls(IP,n),this.baseStyle=r,HE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ls(this.rules,e,n,r).join(""),a=Zf(ls(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ls(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var v=Ls(m,e,n,r),_=Array.isArray(v)?v.join(""):v;c=ls(c,_+d),h+=_}}if(h){var w=Zf(c>>>0);if(!n.hasNameForId(i,w)){var p=r(h,"."+w,void 0,i);n.insertRules(i,w,p)}s.push(w)}}return s.join(" ")},t}(),xP=/^\s*\/\/.*$/gm,SP=[":","[",".","#"];function AP(t){var e,n,r,i,s=t===void 0?jr:t,o=s.options,a=o===void 0?jr:o,l=s.plugins,u=l===void 0?Bu:l,c=new rP(a),h=[],d=function(_){function w(p){if(p)try{_(p+"}")}catch{}}return function(p,f,y,E,x,C,b,N,H,j){switch(p){case 1:if(H===0&&f.charCodeAt(0)===64)return _(f+";"),"";break;case 2:if(N===0)return f+"/*|*/";break;case 3:switch(N){case 102:case 112:return _(y[0]+f),"";default:return f+(j===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(_){h.push(_)}),m=function(_,w,p){return w===0&&SP.indexOf(p[n.length])!==-1||p.match(i)?_:"."+e};function v(_,w,p,f){f===void 0&&(f="&");var y=_.replace(xP,""),E=w&&p?p+" "+w+" { "+y+" }":y;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!w?"":w,E)}return c.use([].concat(u,[function(_,w,p){_===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(_){if(_===-2){var w=h;return h=[],w}}])),v.hash=u.length?u.reduce(function(_,w){return w.name||Ua(15),ls(_,w.name)},5381).toString():"",v}var GE=Lt.createContext();GE.Consumer;var KE=Lt.createContext(),CP=(KE.Consumer,new HE),ep=AP();function kP(){return T.useContext(GE)||CP}function RP(){return T.useContext(KE)||ep}var PP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ep);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ua(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=ep),this.name+e.hash},t}(),bP=/([A-Z])/,NP=/([A-Z])/g,OP=/^ms-/,DP=function(t){return"-"+t.toLowerCase()};function o0(t){return bP.test(t)?t.replace(NP,DP).replace(OP,"-ms-"):t}var a0=function(t){return t==null||t===!1||t===""};function Ls(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ls(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(a0(t))return"";if(Jm(t))return"."+t.styledComponentId;if(pa(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Ls(l,e,n,r)}var u;return t instanceof PP?n?(t.inject(n,r),t.getName(r)):t:Jf(t)?function c(h,d){var m,v,_=[];for(var w in h)h.hasOwnProperty(w)&&!a0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||pa(h[w])?_.push(o0(w)+":",h[w],";"):Jf(h[w])?_.push.apply(_,c(h[w],w)):_.push(o0(w)+": "+(m=w,(v=h[w])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||m in iP||m.startsWith("--")?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var l0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function LP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return pa(t)||Jf(t)?l0(Ls(n0(Bu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:l0(Ls(n0(t,n)))}var MP=function(t,e,n){return n===void 0&&(n=jr),t.theme!==n.theme&&t.theme||e||n.theme},VP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$P=/(^-|-$)/g;function Td(t){return t.replace(VP,"-").replace($P,"")}var FP=function(t){return Zf(qE(t)>>>0)};function bl(t){return typeof t=="string"&&!0}var tp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},jP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function UP(t,e,n){var r=t[n];tp(e)&&tp(r)?QE(r,e):t[n]=e}function QE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(tp(o))for(var a in o)jP(a)&&UP(t,o[a],a)}return t}var YE=Lt.createContext();YE.Consumer;var xd={};function XE(t,e,n){var r=Jm(t),i=!bl(t),s=e.attrs,o=s===void 0?Bu:s,a=e.componentId,l=a===void 0?function(f,y){var E=typeof f!="string"?"sc":Td(f);xd[E]=(xd[E]||0)+1;var x=E+"-"+FP("5.3.11"+E+xd[E]);return y?y+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return bl(f)?"styled."+f:"Styled("+r0(f)+")"}(t):u,h=e.displayName&&e.componentId?Td(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,y,E){return t.shouldForwardProp(f,y,E)&&e.shouldForwardProp(f,y,E)}:t.shouldForwardProp);var v,_=new TP(n,h,r?t.componentStyle:void 0),w=_.isStatic&&o.length===0,p=function(f,y){return function(E,x,C,b){var N=E.attrs,H=E.componentStyle,j=E.defaultProps,me=E.foldedComponentIds,Se=E.shouldForwardProp,Ue=E.styledComponentId,St=E.target,He=function(K,I,ne){K===void 0&&(K=jr);var O=qn({},I,{theme:K}),Pe={};return ne.forEach(function(ue){var he,Z,et,bt=ue;for(he in pa(bt)&&(bt=bt(O)),bt)O[he]=Pe[he]=he==="className"?(Z=Pe[he],et=bt[he],Z&&et?Z+" "+et:Z||et):bt[he]}),[O,Pe]}(MP(x,T.useContext(YE),j)||jr,x,N),on=He[0],Ze=He[1],S=function(K,I,ne,O){var Pe=kP(),ue=RP(),he=I?K.generateAndInjectStyles(jr,Pe,ue):K.generateAndInjectStyles(ne,Pe,ue);return he}(H,b,on),U=C,W=Ze.$as||x.$as||Ze.as||x.as||St,ae=bl(W),D=Ze!==x?qn({},x,{},Ze):x,M={};for(var $ in D)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?M.as=D[$]:(Se?Se($,t0,W):!ae||t0($))&&(M[$]=D[$]));return x.style&&Ze.style!==x.style&&(M.style=qn({},x.style,{},Ze.style)),M.className=Array.prototype.concat(me,Ue,S!==Ue?S:null,x.className,Ze.className).filter(Boolean).join(" "),M.ref=U,T.createElement(W,M)}(v,f,y,w)};return p.displayName=c,(v=Lt.forwardRef(p)).attrs=d,v.componentStyle=_,v.displayName=c,v.shouldForwardProp=m,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Bu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var y=e.componentId,E=function(C,b){if(C==null)return{};var N,H,j={},me=Object.keys(C);for(H=0;H<me.length;H++)N=me[H],b.indexOf(N)>=0||(j[N]=C[N]);return j}(e,["componentId"]),x=y&&y+"-"+(bl(f)?f:Td(r0(f)));return XE(f,qn({},E,{attrs:d,componentId:x}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?QE({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&GR(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var np=function(t){return function e(n,r,i){if(i===void 0&&(i=jr),!Gm.isValidElementType(r))return Ua(1,String(r));var s=function(){return n(r,i,LP.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,qn({},i,{},o))},s.attrs=function(o){return e(n,r,qn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(XE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){np[t]=np(t)});const R=np;var JE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u0=Lt.createContext&&Lt.createContext(JE),Ur=globalThis&&globalThis.__assign||function(){return Ur=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ur.apply(this,arguments)},zP=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function ZE(t){return t&&t.map(function(e,n){return Lt.createElement(e.tag,Ur({key:n},e.attr),ZE(e.child))})}function Xs(t){return function(e){return Lt.createElement(BP,Ur({attr:Ur({},t.attr)},e),ZE(t.child))}}function BP(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=zP(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Lt.createElement("svg",Ur({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ur(Ur({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Lt.createElement("title",null,s),t.children)};return u0!==void 0?Lt.createElement(u0.Consumer,null,function(n){return e(n)}):e(JE)}function WP(t){return Xs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const HP=R.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,qP=R.div`
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
`,GP=R(WP)`
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
`,KP=R.div`
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
`,QP=R.div`
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
`,YP=R.div`
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
`,XP=()=>{const t=dr();return g.jsx(YP,{onClick:()=>{t("/")}})},JP=R.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,c0=R(sR)`
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
`,ZP=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],e2=()=>{const t=fr(pr);return g.jsxs(JP,{children:[ZP.map((e,n)=>g.jsx(c0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&g.jsx(c0,{to:"/admin",children:"Адмін"},"admin")]})},Sd=R.p`
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

    font-size: 38px;`,t2=R.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,n2=R.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,r2=R.div`
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
`,i2=R.div`
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
`,s2=R.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,Nl=R.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Ol=R.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,o2=R.div`
  display: flex;
  flex-direction: column;
`,Dl=R.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,h0=R.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,a2=R.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,l2=R.div`
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
`,Fn=R.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,Ll=R.div`
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
`,qi=R.h3`
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
`,In=R.input`
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
`,Ml=R.button`
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
`,d0=R.div`
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
`,u2=R.div`
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
`,c2=R.ul`
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
`,h2=R.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
 */const eI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},d2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):d2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new f2;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class f2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p2=function(t){const e=eI(t);return tI.encodeByteArray(e,!0)},Hu=function(t){return p2(t).replace(/\./g,"")},nI=function(t){try{return tI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function m2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const g2=()=>m2().__FIREBASE_DEFAULTS__,y2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nI(t[1]);return e&&JSON.parse(e)},eg=()=>{try{return g2()||y2()||v2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rI=t=>{var e,n;return(n=(e=eg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iI=t=>{const e=rI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sI=()=>{var t;return(t=eg())===null||t===void 0?void 0:t.config},oI=t=>{var e;return(e=eg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hu(JSON.stringify(n)),Hu(JSON.stringify(o)),a].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function E2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T2(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x2(){try{return typeof indexedDB=="object"}catch{return!1}}function S2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const A2="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=A2,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?C2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,r)}}function C2(t,e){return t.replace(k2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const k2=/\{\$([^}]+)}/g;function R2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(f0(s)&&f0(o)){if(!qu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function f0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ba(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function So(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function P2(t,e){const n=new b2(t,e);return n.subscribe.bind(n)}class b2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ad),i.error===void 0&&(i.error=Ad),i.complete===void 0&&(i.complete=Ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ad(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class O2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L2(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D2(t){return t===ci?void 0:t}function L2(t){return t.instantiationMode==="EAGER"}/**
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
 */class M2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new O2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const V2={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},$2=oe.INFO,F2={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},j2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=F2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tg{constructor(e){this.name=e,this._logLevel=$2,this._logHandler=j2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const U2=(t,e)=>e.some(n=>t instanceof n);let p0,m0;function z2(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B2(){return m0||(m0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lI=new WeakMap,rp=new WeakMap,uI=new WeakMap,Cd=new WeakMap,ng=new WeakMap;function W2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lI.set(n,t)}).catch(()=>{}),ng.set(e,t),e}function H2(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q2(t){ip=t(ip)}function G2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kd(this),e,...n);return uI.set(r,e.sort?e.sort():[e]),zr(r)}:B2().includes(t)?function(...e){return t.apply(kd(this),e),zr(lI.get(this))}:function(...e){return zr(t.apply(kd(this),e))}}function K2(t){return typeof t=="function"?G2(t):(t instanceof IDBTransaction&&H2(t),U2(t,z2())?new Proxy(t,ip):t)}function zr(t){if(t instanceof IDBRequest)return W2(t);if(Cd.has(t))return Cd.get(t);const e=K2(t);return e!==t&&(Cd.set(t,e),ng.set(e,t)),e}const kd=t=>ng.get(t);function Q2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zr(o.result),l.oldVersion,l.newVersion,zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Y2=["get","getKey","getAll","getAllKeys","count"],X2=["put","add","delete","clear"],Rd=new Map;function g0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=X2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Y2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rd.set(e,s),s}q2(t=>({...t,get:(e,n,r)=>g0(e,n)||t.get(e,n,r),has:(e,n)=>!!g0(e,n)||t.has(e,n)}));/**
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
 */class J2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Z2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Z2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sp="@firebase/app",y0="0.9.15";/**
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
 */const ki=new tg("@firebase/app"),eb="@firebase/app-compat",tb="@firebase/analytics-compat",nb="@firebase/analytics",rb="@firebase/app-check-compat",ib="@firebase/app-check",sb="@firebase/auth",ob="@firebase/auth-compat",ab="@firebase/database",lb="@firebase/database-compat",ub="@firebase/functions",cb="@firebase/functions-compat",hb="@firebase/installations",db="@firebase/installations-compat",fb="@firebase/messaging",pb="@firebase/messaging-compat",mb="@firebase/performance",gb="@firebase/performance-compat",yb="@firebase/remote-config",vb="@firebase/remote-config-compat",_b="@firebase/storage",wb="@firebase/storage-compat",Eb="@firebase/firestore",Ib="@firebase/firestore-compat",Tb="firebase",xb="10.1.0";/**
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
 */const op="[DEFAULT]",Sb={[sp]:"fire-core",[eb]:"fire-core-compat",[nb]:"fire-analytics",[tb]:"fire-analytics-compat",[ib]:"fire-app-check",[rb]:"fire-app-check-compat",[sb]:"fire-auth",[ob]:"fire-auth-compat",[ab]:"fire-rtdb",[lb]:"fire-rtdb-compat",[ub]:"fire-fn",[cb]:"fire-fn-compat",[hb]:"fire-iid",[db]:"fire-iid-compat",[fb]:"fire-fcm",[pb]:"fire-fcm-compat",[mb]:"fire-perf",[gb]:"fire-perf-compat",[yb]:"fire-rc",[vb]:"fire-rc-compat",[_b]:"fire-gcs",[wb]:"fire-gcs-compat",[Eb]:"fire-fst",[Ib]:"fire-fst-compat","fire-js":"fire-js",[Tb]:"fire-js-all"};/**
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
 */const Gu=new Map,ap=new Map;function Ab(t,e){try{t.container.addComponent(e)}catch(n){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(ap.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,t);for(const n of Gu.values())Ab(n,t);return!0}function lh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Br=new za("app","Firebase",Cb);/**
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
 */class kb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=xb;function cI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:op,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Br.create("bad-app-name",{appName:String(i)});if(n||(n=sI()),!n)throw Br.create("no-options");const s=Gu.get(i);if(s){if(qu(n,s.options)&&qu(r,s.config))return s;throw Br.create("duplicate-app",{appName:i})}const o=new M2(i);for(const l of ap.values())o.addComponent(l);const a=new kb(n,r,o);return Gu.set(i,a),a}function rg(t=op){const e=Gu.get(t);if(!e&&t===op&&sI())return cI();if(!e)throw Br.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=Sb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(a.join(" "));return}Ri(new Yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rb="firebase-heartbeat-database",Pb=1,ma="firebase-heartbeat-store";let Pd=null;function hI(){return Pd||(Pd=Q2(Rb,Pb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ma)}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),Pd}async function bb(t){try{return await(await hI()).transaction(ma).objectStore(ma).get(dI(t))}catch(e){if(e instanceof Vn)ki.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ki.warn(n.message)}}}async function v0(t,e){try{const r=(await hI()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,dI(t)),await r.done}catch(n){if(n instanceof Vn)ki.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ki.warn(r.message)}}}function dI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nb=1024,Ob=30*24*60*60*1e3;class Db{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ob}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_0(),{heartbeatsToSend:n,unsentEntries:r}=Lb(this._heartbeatsCache.heartbeats),i=Hu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _0(){return new Date().toISOString().substring(0,10)}function Lb(t,e=Nb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),w0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),w0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x2()?S2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function w0(t){return Hu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Vb(t){Ri(new Yr("platform-logger",e=>new J2(e),"PRIVATE")),Ri(new Yr("heartbeat",e=>new Db(e),"PRIVATE")),Pn(sp,y0,t),Pn(sp,y0,"esm2017"),Pn("fire-js","")}Vb("");function ig(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=fI,pI=new za("auth","Firebase",fI());/**
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
 */const Ku=new tg("@firebase/auth");function Fb(t,...e){Ku.logLevel<=oe.WARN&&Ku.warn(`Auth (${Fi}): ${t}`,...e)}function lu(t,...e){Ku.logLevel<=oe.ERROR&&Ku.error(`Auth (${Fi}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw sg(t,...e)}function bn(t,...e){return sg(t,...e)}function jb(t,e,n){const r=Object.assign(Object.assign({},$b()),{[e]:n});return new za("auth","Firebase",r).create(e,{appName:t.name})}function sg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pI.create(t,...e)}function q(t,e,...n){if(!t)throw sg(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lu(e),new Error(e)}function nr(t,e){t||Gn(e)}/**
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
 */function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ub(){return E0()==="http:"||E0()==="https:"}function E0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ub()||E2()||"connection"in navigator)?navigator.onLine:!0}function Bb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=w2()||I2()}get(){return zb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function og(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hb=new Wa(3e4,6e4);function Js(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ji(t,e,n,r,i={}){return gI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ba(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mI.fetch()(yI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function gI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wb),e);try{const i=new qb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jb(t,c,u);vn(t,c)}}catch(i){if(i instanceof Vn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function Ha(t,e,n,r,i={}){const s=await ji(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?og(t.config,i):`${t.config.apiScheme}://${i}`}class qb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),Hb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Gb(t,e){return ji(t,"POST","/v1/accounts:delete",e)}async function Kb(t,e){return ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=ag(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bo(bd(i.auth_time)),issuedAtTime:Bo(bd(i.iat)),expirationTime:Bo(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function ag(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lu("JWT malformed, contained fewer than 3 sections"),null;try{const i=nI(n);return i?JSON.parse(i):(lu("Failed to decode base64 JWT payload"),null)}catch(i){return lu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yb(t){const e=ag(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&Xb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Jb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bo(this.lastLoginAt),this.creationTime=Bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ms(t,Kb(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tN(s.providerUserInfo):[],a=eN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Zb(t){const e=je(t);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tN(t){return t.map(e=>{var{providerId:n}=e,r=ig(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nN(t,e){const n=await gI(t,{},async()=>{const r=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function yr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qb(this,e)}reload(){return Zb(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ms(this,Gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:x,providerData:C,stsTokenManager:b}=n;q(y&&b,e,"internal-error");const N=ga.fromJSON(this.name,b);q(typeof y=="string",e,"internal-error"),yr(h,e.name),yr(d,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof x=="boolean",e,"internal-error"),yr(m,e.name),yr(v,e.name),yr(_,e.name),yr(w,e.name),yr(p,e.name),yr(f,e.name);const H=new Ei({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:x,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:N,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(H.providerData=C.map(j=>Object.assign({},j))),w&&(H._redirectEventId=w),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qu(s),s}}/**
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
 */const I0=new Map;function Kn(t){nr(t instanceof Function,"Expected a class definition");let e=I0.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I0.set(t,e),e)}/**
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
 */class _I{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_I.type="NONE";const T0=_I;/**
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
 */function uu(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uu(this.userKey,i.apiKey,s),this.fullPersistenceKey=uu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(Kn(T0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kn(T0);const o=uu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ei._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ys(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ys(s,e,r))}}/**
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
 */function x0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(II(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xI(e))return"Blackberry";if(SI(e))return"Webos";if(lg(e))return"Safari";if((e.includes("chrome/")||EI(e))&&!e.includes("edge/"))return"Chrome";if(TI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wI(t=Tt()){return/firefox\//i.test(t)}function lg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EI(t=Tt()){return/crios\//i.test(t)}function II(t=Tt()){return/iemobile/i.test(t)}function TI(t=Tt()){return/android/i.test(t)}function xI(t=Tt()){return/blackberry/i.test(t)}function SI(t=Tt()){return/webos/i.test(t)}function uh(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rN(t=Tt()){var e;return uh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iN(){return T2()&&document.documentMode===10}function AI(t=Tt()){return uh(t)||TI(t)||SI(t)||xI(t)||/windows phone/i.test(t)||II(t)}function sN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function CI(t,e=[]){let n;switch(t){case"Browser":n=x0(Tt());break;case"Worker":n=`${x0(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}async function kI(t,e){return ji(t,"GET","/v2/recaptchaConfig",Js(t,e))}function S0(t){return t!==void 0&&t.enterprise!==void 0}class RI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function oN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oN().appendChild(r)})}function aN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lN="https://www.google.com/recaptcha/enterprise.js?render=",uN="recaptcha-enterprise",cN="NO_RECAPTCHA";class bI{constructor(e){this.type=uN,this.auth=Zs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{kI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;S0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(cN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&S0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}PI(lN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Yu(t,e,n,r=!1){const i=new bI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class hN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class dN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A0(this),this.idTokenSubscription=new A0(this),this.beforeStateQueue=new hN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}async initializeRecaptchaConfig(){const e=await kI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new RI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new bI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zs(t){return je(t)}class A0{constructor(e){this.auth=e,this.observer=null,this.addObserver=P2(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function fN(t,e){const n=lh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qu(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function pN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mN(t,e,n){const r=Zs(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=NI(e),{host:o,port:a}=gN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yN()}function NI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gN(t){const e=NI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:C0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:C0(o)}}}function C0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function vN(t,e){return ji(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Nd(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",Js(t,e))}/**
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
 */async function _N(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",Js(t,e))}async function wN(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",Js(t,e))}/**
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
 */class ya extends ug{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Yu(e,r,"signInWithPassword");return Nd(e,i)}else return Nd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yu(e,r,"signInWithPassword");return Nd(e,s)}else return Promise.reject(i)});case"emailLink":return _N(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wN(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vs(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",Js(t,e))}/**
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
 */const EN="http://localhost";class Pi extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ig(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:EN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ba(n)}return e}}/**
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
 */function IN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TN(t){const e=So(Ao(t)).link,n=e?So(Ao(e)).deep_link_id:null,r=So(Ao(t)).deep_link_id;return(r?So(Ao(r)).link:null)||r||n||e||t}class cg{constructor(e){var n,r,i,s,o,a;const l=So(Ao(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=IN((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TN(e);try{return new cg(n)}catch{return null}}}/**
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
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cg.parseLink(n);return q(r,"argument-error"),ya._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qa extends OI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ir extends qa{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
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
 */class Tr extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
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
 */class xr extends qa{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */class Sr extends qa{constructor(){super("twitter.com")}static credential(e,n){return Pi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
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
 */async function Od(t,e){return Ha(t,"POST","/v1/accounts:signUp",Js(t,e))}/**
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
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ei._fromIdTokenResponse(e,r,i),o=k0(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=k0(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function k0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xu extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xu(e,n,r,i)}}function DI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(t,s,e,r):s})}async function xN(t,e,n=!1){const r=await Ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function SN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ms(t,DI(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=ag(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
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
 */async function LI(t,e,n=!1){const r="signIn",i=await DI(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AN(t,e){return LI(Zs(t),e)}async function CN(t,e,n){var r;const i=Zs(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Yu(i,s,"signUpPassword");o=Od(i,u)}else o=Od(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Yu(i,s,"signUpPassword");return Od(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await bi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function kN(t,e,n){return AN(je(t),eo.credential(e,n))}/**
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
 */async function RN(t,e){return ji(t,"POST","/v1/accounts:update",e)}/**
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
 */async function PN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=je(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ms(r,RN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bN(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function NN(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function ON(t){return je(t).signOut()}const Ju="__sak";/**
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
 */class MI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ju,"1"),this.storage.removeItem(Ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function DN(){const t=Tt();return lg(t)||uh(t)}const LN=1e3,MN=10;class VI extends MI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DN()&&sN(),this.fallbackToPolling=AI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VI.type="LOCAL";const VN=VI;/**
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
 */class $I extends MI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$I.type="SESSION";const FI=$I;/**
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
 */function $N(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ch(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await $N(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ch.receivers=[];/**
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
 */function hg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class FN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function jN(t){Nn().location.href=t}/**
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
 */function jI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function UN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BN(){return jI()?self:null}/**
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
 */const UI="firebaseLocalStorageDb",WN=1,Zu="firebaseLocalStorage",zI="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([Zu],e?"readwrite":"readonly").objectStore(Zu)}function HN(){const t=indexedDB.deleteDatabase(UI);return new Ga(t).toPromise()}function up(){const t=indexedDB.open(UI,WN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zu,{keyPath:zI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zu)?e(r):(r.close(),await HN(),e(await up()))})})}async function R0(t,e,n){const r=hh(t,!0).put({[zI]:e,value:n});return new Ga(r).toPromise()}async function qN(t,e){const n=hh(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function P0(t,e){const n=hh(t,!0).delete(e);return new Ga(n).toPromise()}const GN=800,KN=3;class BI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ch._getInstance(BN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UN(),!this.activeServiceWorker)return;this.sender=new FN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await R0(e,Ju,"1"),await P0(e,Ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>R0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>P0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hh(i,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BI.type="LOCAL";const QN=BI;new Wa(3e4,6e4);/**
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
 */function YN(t,e){return e?Kn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dg extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XN(t){return LI(t.auth,new dg(t),t.bypassAuthState)}function JN(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),SN(n,new dg(t),t.bypassAuthState)}async function ZN(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),xN(n,new dg(t),t.bypassAuthState)}/**
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
 */class WI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XN;case"linkViaPopup":case"linkViaRedirect":return ZN;case"reauthViaPopup":case"reauthViaRedirect":return JN;default:vn(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eO=new Wa(2e3,1e4);class us extends WI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eO.get())};e()}}us.currentPopupAction=null;/**
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
 */const tO="pendingRedirect",cu=new Map;class nO extends WI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cu.get(this.auth._key());if(!e){try{const r=await rO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cu.set(this.auth._key(),e)}return this.bypassAuthState||cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rO(t,e){const n=oO(e),r=sO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iO(t,e){cu.set(t._key(),e)}function sO(t){return Kn(t._redirectPersistence)}function oO(t){return uu(tO,t.config.apiKey,t.name)}async function aO(t,e,n=!1){const r=Zs(t),i=YN(r,e),o=await new nO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lO=10*60*1e3;class uO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!HI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lO&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function HI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HI(t);default:return!1}}/**
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
 */async function hO(t,e={}){return ji(t,"GET","/v1/projects",e)}/**
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
 */const dO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fO=/^https?/;async function pO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hO(t);for(const n of e)try{if(mO(n))return}catch{}vn(t,"unauthorized-domain")}function mO(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fO.test(n))return!1;if(dO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gO=new Wa(3e4,6e4);function N0(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yO(t){return new Promise((e,n)=>{var r,i,s;function o(){N0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{N0(),n(bn(t,"network-request-failed"))},timeout:gO.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=aN("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},PI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hu=null,e})}let hu=null;function vO(t){return hu=hu||yO(t),hu}/**
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
 */const _O=new Wa(5e3,15e3),wO="__/auth/iframe",EO="emulator/auth/iframe",IO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xO(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?og(e,EO):`https://${t.config.authDomain}/${wO}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=TO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ba(r).slice(1)}`}async function SO(t){const e=await vO(t),n=Nn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:xO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},_O.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const AO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CO=500,kO=600,RO="_blank",PO="http://localhost";class O0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bO(t,e,n,r=CO,i=kO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},AO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=EI(u)?RO:n),wI(u)&&(e=e||PO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(rN(u)&&a!=="_self")return NO(e||"",a),new O0(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new O0(h)}function NO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OO="__/auth/handler",DO="emulator/auth/handler",LO=encodeURIComponent("fac");async function D0(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof OI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",R2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof qa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${LO}=${encodeURIComponent(l)}`:"";return`${MO(t)}?${Ba(a).slice(1)}${u}`}function MO({config:t}){return t.emulator?og(t,DO):`https://${t.authDomain}/${OO}`}/**
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
 */const Dd="webStorageSupport";class VO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FI,this._completeRedirectFn=aO,this._overrideRedirectResult=iO}async _openPopup(e,n,r,i){var s;nr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await D0(e,n,r,lp(),i);return bO(e,o,hg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await D0(e,n,r,lp(),i);return jN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SO(e),r=new uO(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dd,{type:Dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dd];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AI()||lg()||uh()}}const $O=VO;var L0="@firebase/auth",M0="1.1.0";/**
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
 */class FO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UO(t){Ri(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CI(t)},u=new dN(r,i,s,l);return pN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Yr("auth-internal",e=>{const n=Zs(e.getProvider("auth").getImmediate());return(r=>new FO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(L0,M0,jO(t)),Pn(L0,M0,"esm2017")}/**
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
 */const zO=5*60,BO=oI("authIdTokenMaxAge")||zO;let V0=null;const WO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BO)return;const i=n==null?void 0:n.token;V0!==i&&(V0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HO(t=rg()){const e=lh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fN(t,{popupRedirectResolver:$O,persistence:[QN,VN,FI]}),r=oI("authTokenSyncURL");if(r){const s=WO(r);NN(n,s,()=>s(n.currentUser)),bN(n,o=>s(o))}const i=rI("auth");return i&&mN(n,`http://${i}`),n}UO("Browser");var qO="firebase",GO="10.1.0";/**
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
 */Pn(qO,GO,"app");/**
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
 */const qI="firebasestorage.googleapis.com",KO="storageBucket",QO=2*60*1e3,YO=10*60*1e3;/**
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
 */class $n extends Vn{constructor(e,n,r=0){super(Ld(e),`Firebase Storage: ${n} (${Ld(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function Ld(t){return"storage/"+t}function XO(){const t="An unknown error occurred, please check the error payload for server response.";return new $n(Ln.UNKNOWN,t)}function JO(){return new $n(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZO(){return new $n(Ln.CANCELED,"User canceled the upload/download.")}function eD(t){return new $n(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function tD(t){return new $n(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $0(t){return new $n(Ln.INVALID_ARGUMENT,t)}function GI(){return new $n(Ln.APP_DELETED,"The Firebase app was deleted.")}function nD(t){return new $n(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=fn.makeFromUrl(e,n)}catch{return new fn(e,"")}if(r.path==="")return r;throw tD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===qI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const x=y[E],C=x.regex.exec(e);if(C){const b=C[x.indices.bucket];let N=C[x.indices.path];N||(N=""),r=new fn(b,N),x.postModify(r);break}}if(r==null)throw eD(e);return r}}class rD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(m,l())},w)}function d(){s&&clearTimeout(s)}function m(w,...p){if(u){d();return}if(w){d(),c.call(null,w,...p);return}if(l()||o){d(),c.call(null,w,...p);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function sD(t){t(!1)}/**
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
 */function oD(t){return t!==void 0}function F0(t,e,n,r){if(r<e)throw $0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $0(`Invalid value for '${t}'. Expected ${n} or less.`)}function aD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ec;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ec||(ec={}));/**
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
 */function lD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class uD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $l(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ec.NO_ERROR,l=s.getStatus();if(!a||lD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ec.ABORT;r(!1,new $l(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new $l(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=XO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?GI():ZO();o(l)}else{const l=JO();o(l)}};this.canceled_?n(!1,new $l(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pD(t,e,n,r,i,s,o=!0){const a=aD(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return dD(u,e),cD(u,n),hD(u,s),fD(u,r),new uD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function mD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class tc{constructor(e,n){this._service=e,n instanceof fn?this._location=n:this._location=fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new tc(e,n)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gD(this._location.path)}get storage(){return this._service}get parent(){const e=mD(this._location.path);if(e===null)return null;const n=new fn(this._location.bucket,e);return new tc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nD(e)}}function j0(t,e){const n=e==null?void 0:e[KO];return n==null?null:fn.makeFromBucketSpec(n,t)}function yD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:aI(i,t.app.options.projectId))}class vD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=qI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QO,this._maxUploadRetryTime=YO,this._requests=new Set,i!=null?this._bucket=fn.makeFromBucketSpec(i,this._host):this._bucket=j0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=j0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){F0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){F0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rD(GI());{const o=pD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const U0="@firebase/storage",z0="0.11.2";/**
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
 */const KI="storage";function _D(t=rg(),e){t=je(t);const r=lh(t,KI).getImmediate({identifier:e}),i=iI("storage");return i&&wD(r,...i),r}function wD(t,e,n,r={}){yD(t,e,n,r)}function ED(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vD(n,r,i,e,Fi)}function ID(){Ri(new Yr(KI,ED,"PUBLIC").setMultipleInstances(!0)),Pn(U0,z0,""),Pn(U0,z0,"esm2017")}ID();var TD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,fg=fg||{},Q=TD||self;function dh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xD(t){return Object.prototype.hasOwnProperty.call(t,Md)&&t[Md]||(t[Md]=++SD)}var Md="closure_uid_"+(1e9*Math.random()>>>0),SD=0;function AD(t,e,n){return t.call.apply(t.bind,arguments)}function CD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=AD:vt=CD,vt.apply(null,arguments)}function Fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ii(){this.s=this.s,this.o=this.o}var kD=0;ii.prototype.s=!1;ii.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kD!=0)&&xD(this)};ii.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const QI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function B0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var RD=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function va(t){return/^[\s\xa0]*$/.test(t)}function fh(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return fh().indexOf(t)!=-1}function mg(t){return mg[" "](t),t}mg[" "]=function(){};function PD(t,e){var n=IL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bD=Sn("Opera"),Vs=Sn("Trident")||Sn("MSIE"),YI=Sn("Edge"),cp=YI||Vs,XI=Sn("Gecko")&&!(fh().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),ND=fh().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function JI(){var t=Q.document;return t?t.documentMode:void 0}var hp;e:{var Vd="",$d=function(){var t=fh();if(XI)return/rv:([^\);]+)(\)|;)/.exec(t);if(YI)return/Edge\/([\d\.]+)/.exec(t);if(Vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ND)return/WebKit\/(\S+)/.exec(t);if(bD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($d&&(Vd=$d?$d[1]:""),Vs){var Fd=JI();if(Fd!=null&&Fd>parseFloat(Vd)){hp=String(Fd);break e}}hp=Vd}var dp;if(Q.document&&Vs){var W0=JI();dp=W0||parseInt(hp,10)||void 0}else dp=void 0;var OD=dp;function _a(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(XI){e:{try{mg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_a.$.h.call(this)}}Je(_a,_t);var DD={2:"touch",3:"pen",4:"mouse"};_a.prototype.h=function(){_a.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qa="closure_listenable_"+(1e6*Math.random()|0),LD=0;function MD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++LD,this.fa=this.ia=!1}function ph(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ZI(t){const e={};for(const n in t)e[n]=t[n];return e}const H0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<H0.length;s++)n=H0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function mh(t){this.src=t,this.g={},this.h=0}mh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=pp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function fp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=QI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ph(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var yg="closure_lm_"+(1e6*Math.random()|0),jd={};function tT(t,e,n,r,i){if(r&&r.once)return rT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tT(t,e[s],n,r,i);return null}return n=wg(n),t&&t[Qa]?t.O(e,n,Ka(r)?!!r.capture:!!r,i):nT(t,e,n,!1,r,i)}function nT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ka(i)?!!i.capture:!!i,a=_g(t);if(a||(t[yg]=a=new mh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=$D(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $D(){function t(n){return e.call(t.src,t.listener,n)}const e=FD;return t}function rT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rT(t,e[s],n,r,i);return null}return n=wg(n),t&&t[Qa]?t.P(e,n,Ka(r)?!!r.capture:!!r,i):nT(t,e,n,!0,r,i)}function iT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iT(t,e[s],n,r,i);else r=Ka(r)?!!r.capture:!!r,n=wg(n),t&&t[Qa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=pp(s,n,r,i),-1<n&&(ph(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=_g(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pp(e,n,r,i)),(n=-1<t?e[t]:null)&&vg(n))}function vg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qa])fp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_g(e))?(fp(n,t),n.h==0&&(n.src=null,e[yg]=null)):ph(t)}}}function sT(t){return t in jd?jd[t]:jd[t]="on"+t}function FD(t,e){if(t.fa)t=!0;else{e=new _a(e,this);var n=t.listener,r=t.la||t.src;t.ia&&vg(t),t=n.call(r,e)}return t}function _g(t){return t=t[yg],t instanceof mh?t:null}var Ud="__closure_events_fn_"+(1e9*Math.random()>>>0);function wg(t){return typeof t=="function"?t:(t[Ud]||(t[Ud]=function(e){return t.handleEvent(e)}),t[Ud])}function Ye(){ii.call(this),this.i=new mh(this),this.S=this,this.J=null}Je(Ye,ii);Ye.prototype[Qa]=!0;Ye.prototype.removeEventListener=function(t,e,n,r){iT(this,t,e,n,r)};function at(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(r,t),eT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=jl(o,r,!0,e)&&i}if(o=e.g=t,i=jl(o,r,!0,e)&&i,i=jl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=jl(o,r,!1,e)&&i}Ye.prototype.N=function(){if(Ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ph(n[r]);delete t.g[e],t.h--}}this.J=null};Ye.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ye.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function jl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&fp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Eg=Q.JSON.stringify;class jD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UD(){var t=Ig;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zD{constructor(){this.h=this.g=null}add(e,n){const r=oT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oT=new jD(()=>new BD,t=>t.reset());class BD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function HD(t){Q.setTimeout(()=>{throw t},0)}let wa,Ea=!1,Ig=new zD,aT=()=>{const t=Q.Promise.resolve(void 0);wa=()=>{t.then(qD)}};var qD=()=>{for(var t;t=UD();){try{t.h.call(t.g)}catch(n){HD(n)}var e=oT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ea=!1};function gh(t,e){Ye.call(this),this.h=t||1,this.g=e||Q,this.j=vt(this.qb,this),this.l=Date.now()}Je(gh,Ye);L=gh.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(Tg(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){gh.$.N.call(this),Tg(this),delete this.g};function xg(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function lT(t){t.g=xg(()=>{t.g=null,t.i&&(t.i=!1,lT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GD extends ii{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lT(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ia(t){ii.call(this),this.h=t,this.g={}}Je(Ia,ii);var q0=[];function uT(t,e,n,r){Array.isArray(n)||(n&&(q0[0]=n.toString()),n=q0);for(var i=0;i<n.length;i++){var s=tT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function cT(t){gg(t.g,function(e,n){this.g.hasOwnProperty(n)&&vg(e)},t),t.g={}}Ia.prototype.N=function(){Ia.$.N.call(this),cT(this)};Ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yh(){this.g=!0}yh.prototype.Ea=function(){this.g=!1};function KD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XD(t,n)+(r?" "+r:"")})}function YD(t,e){t.info(function(){return"TIMEOUT: "+e})}yh.prototype.info=function(){};function XD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Eg(n)}catch{return e}}var Ui={},G0=null;function vh(){return G0=G0||new Ye}Ui.Ta="serverreachability";function hT(t){_t.call(this,Ui.Ta,t)}Je(hT,_t);function Ta(t){const e=vh();at(e,new hT(e))}Ui.STAT_EVENT="statevent";function dT(t,e){_t.call(this,Ui.STAT_EVENT,t),this.stat=e}Je(dT,_t);function Ct(t){const e=vh();at(e,new dT(e,t))}Ui.Ua="timingevent";function fT(t,e){_t.call(this,Ui.Ua,t),this.size=e}Je(fT,_t);function Ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var _h={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sg(){}Sg.prototype.h=null;function K0(t){return t.h||(t.h=t.i())}function mT(){}var Xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ag(){_t.call(this,"d")}Je(Ag,_t);function Cg(){_t.call(this,"c")}Je(Cg,_t);var mp;function wh(){}Je(wh,Sg);wh.prototype.g=function(){return new XMLHttpRequest};wh.prototype.i=function(){return{}};mp=new wh;function Ja(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ia(this),this.P=JD,t=cp?125:void 0,this.V=new gh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gT}function gT(){this.i=null,this.g="",this.h=!1}var JD=45e3,gp={},nc={};L=Ja.prototype;L.setTimeout=function(t){this.P=t};function yp(t,e,n){t.L=1,t.v=Ih(rr(e)),t.s=n,t.S=!0,yT(t,null)}function yT(t,e){t.G=Date.now(),Za(t),t.A=rr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ST(n.i,"t",r),t.C=0,n=t.l.J,t.h=new gT,t.g=qT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new GD(vt(t.Pa,t,t.g),t.O)),uT(t.U,t.g,"readystatechange",t.nb),e=t.I?ZI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ta(),KD(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||cp||this.g&&(this.h.h||this.g.ja()||J0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ta(3):Ta(2)),Eh(this);var n=this.g.da();this.ca=n;t:if(vT(this)){var r=J0(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mi(this),Wo(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,QD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!va(a)){var u=a;break t}}u=null}if(n=u)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vp(this,n);else{this.i=!1,this.o=3,Ct(12),mi(this),Wo(this);break e}}this.S?(_T(this,c,o),cp&&this.i&&c==3&&(uT(this.U,this.V,"tick",this.mb),this.V.start())):(cs(this.j,this.m,o,null),vp(this,o)),c==4&&mi(this),this.i&&!this.J&&(c==4?zT(this.l,this):(this.i=!1,Za(this)))}else _L(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),mi(this),Wo(this)}}}catch{}finally{}};function vT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function _T(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ZD(t,n),i==nc){e==4&&(t.o=4,Ct(14),r=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==gp){t.o=4,Ct(15),cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cs(t.j,t.m,i,null),vp(t,i);vT(t)&&i!=nc&&i!=gp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Og(e),e.M=!0,Ct(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),mi(t),Wo(t))}L.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.C<e.length&&(Eh(this),_T(this,t,e),this.i&&t!=4&&Za(this))}};function ZD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?nc:(n=Number(e.substring(n,r)),isNaN(n)?gp:(r+=1,r+n>e.length?nc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,mi(this)};function Za(t){t.Y=Date.now()+t.P,wT(t,t.P)}function wT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ya(vt(t.lb,t),e)}function Eh(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YD(this.j,this.A),this.L!=2&&(Ta(),Ct(17)),mi(this),this.o=2,Wo(this)):wT(this,this.Y-t)};function Wo(t){t.l.H==0||t.J||zT(t.l,t)}function mi(t){Eh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Tg(t.V),cT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function vp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_p(n.i,t))){if(!t.K&&_p(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sc(n),Sh(n);else break e;Ng(n),Ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ya(vt(n.ib,n),6e3));if(1>=kT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else gi(n,11)}else if((t.K||n.g==t)&&sc(n),!va(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kg(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,_e(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=HT(r,r.J?r.pa:null,r.Y),o.K){RT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Eh(a),Za(a)),r.g=o}else jT(r);0<n.j.length&&Ah(n)}else u[0]!="stop"&&u[0]!="close"||gi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gi(n,7):bg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ta(4)}catch{}}function eL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ET(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tL(t),r=eL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var IT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ii(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ii){this.h=t.h,rc(this,t.j),this.s=t.s,this.g=t.g,ic(this,t.m),this.l=t.l;var e=t.i,n=new xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Q0(this,n),this.o=t.o}else t&&(e=String(t).match(IT))?(this.h=!1,rc(this,e[1]||"",!0),this.s=Co(e[2]||""),this.g=Co(e[3]||"",!0),ic(this,e[4]),this.l=Co(e[5]||"",!0),Q0(this,e[6]||"",!0),this.o=Co(e[7]||"")):(this.h=!1,this.i=new xa(null,this.h))}Ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ko(e,Y0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ko(e,Y0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ko(n,n.charAt(0)=="/"?sL:iL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ko(n,aL)),t.join("")};function rr(t){return new Ii(t)}function rc(t,e,n){t.j=n?Co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ic(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Q0(t,e,n){e instanceof xa?(t.i=e,lL(t.i,t.h)):(n||(e=ko(e,oL)),t.i=new xa(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Ih(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ko(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Y0=/[#\/\?@]/g,iL=/[#\?:]/g,sL=/[#\?]/g,oL=/[#\?@]/g,aL=/#/g;function xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function si(t){t.g||(t.g=new Map,t.h=0,t.i&&nL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=xa.prototype;L.add=function(t,e){si(this),this.i=null,t=to(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function TT(t,e){si(t),e=to(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xT(t,e){return si(t),e=to(t,e),t.g.has(e)}L.forEach=function(t,e){si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){si(this);let e=[];if(typeof t=="string")xT(this,t)&&(e=e.concat(this.g.get(to(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return si(this),this.i=null,t=to(this,t),xT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ST(t,e,n){TT(t,e),0<n.length&&(t.i=null,t.g.set(to(t,e),pg(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function to(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lL(t,e){e&&!t.j&&(si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(TT(this,r),ST(this,i,n))},t)),t.j=e}var uL=class{constructor(t,e){this.g=t,this.map=e}};function AT(t){this.l=t||cL,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cL=10;function CT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kT(t){return t.h?1:t.g?t.g.size:0}function _p(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kg(t,e){t.g?t.g.add(e):t.h=e}function RT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}AT.prototype.cancel=function(){if(this.i=PT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function PT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return pg(t.i)}var hL=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function dL(){this.g=new hL}function fL(t,e,n){const r=n||"";try{ET(t,function(i,s){let o=i;Ka(i)&&(o=Eg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pL(t,e){const n=new yh;if(Q.Image){const r=new Image;r.onload=Fl(Ul,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fl(Ul,n,r,"TestLoadImage: error",!1,e),r.onabort=Fl(Ul,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fl(Ul,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ul(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function el(t){this.l=t.fc||null,this.j=t.ob||!1}Je(el,Sg);el.prototype.g=function(){return new Th(this.l,this.j)};el.prototype.i=function(t){return function(){return t}}({});function Th(t,e){Ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Rg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Th,Ye);var Rg=0;L=Th.prototype;L.open=function(t,e){if(this.readyState!=Rg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sa(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tl(this)),this.readyState=Rg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sa(this)),this.g&&(this.readyState=3,Sa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tl(this):Sa(this),this.readyState==3&&bT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,tl(this))};L.Ya=function(t){this.g&&(this.response=t,tl(this))};L.ka=function(){this.g&&tl(this)};function tl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sa(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Th.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mL=Q.JSON.parse;function Ne(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=NT,this.L=this.M=!1}Je(Ne,Ye);var NT="",gL=/^https?$/i,yL=["POST","PUT"];L=Ne.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mp.g(),this.C=this.u?K0(this.u):K0(mp),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){X0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=QI(yL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LT(this),0<this.B&&((this.L=vL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=xg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){X0(this,s)}};function vL(t){return Vs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof fg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function X0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,OT(t),xh(t)}function OT(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),xh(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xh(this,!0)),Ne.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?DT(this):this.kb())};L.kb=function(){DT(this)};function DT(t){if(t.h&&typeof fg<"u"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)xg(t.La,0,t);else if(at(t,"readystatechange"),An(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(IT)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!gL.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var s=2<An(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",OT(t)}}finally{xh(t)}}}}function xh(t,e){if(t.g){LT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function LT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function An(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mL(e)}};function J0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case NT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _L(t){const e={};t=(t.g&&2<=An(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(va(t[r]))continue;var n=WD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}VD(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function MT(t){let e="";return gg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Pg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=MT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function vo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function VT(t){this.Ga=0,this.j=[],this.l=new yh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=vo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=vo("baseRetryDelayMs",5e3,t),this.hb=vo("retryDelaySeedMs",1e4,t),this.eb=vo("forwardChannelMaxRetries",2,t),this.xa=vo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new AT(t&&t.concurrentRequestLimit),this.Ja=new dL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=VT.prototype;L.ra=8;L.H=1;function bg(t){if($T(t),t.H==3){var e=t.W++,n=rr(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),nl(t,n),e=new Ja(t,t.l,e),e.L=2,e.v=Ih(rr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=qT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Za(e)}WT(t)}function Sh(t){t.g&&(Og(t),t.g.cancel(),t.g=null)}function $T(t){Sh(t),t.u&&(Q.clearTimeout(t.u),t.u=null),sc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Ah(t){if(!CT(t.i)&&!t.m){t.m=!0;var e=t.Na;wa||aT(),Ea||(wa(),Ea=!0),Ig.add(e,t),t.C=0}}function wL(t,e){return kT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ya(vt(t.Na,t,e),BT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ja(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ZI(s),eT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=FT(this,i,e),n=rr(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),nl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(MT(s)))+"&"+e:this.o&&Pg(n,this.o,s)),kg(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,yp(i,n,null)):yp(i,n,e),this.H=2}}else this.H==3&&(t?Z0(this,t):this.j.length==0||CT(this.i)||Z0(this))};function Z0(t,e){var n;e?n=e.m:n=t.W++;const r=rr(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),nl(t,r),t.o&&t.s&&Pg(r,t.o,t.s),n=new Ja(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=FT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),kg(t.i,n),yp(n,r,e)}function nl(t,e){t.na&&gg(t.na,function(n,r){_e(e,r,n)}),t.h&&ET({},function(n,r){_e(e,r,n)})}function FT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{fL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function jT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wa||aT(),Ea||(wa(),Ea=!0),Ig.add(e,t),t.A=0}}function Ng(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ya(vt(t.Ma,t),BT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,UT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ya(vt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),Sh(this),UT(this))};function Og(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function UT(t){t.g=new Ja(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rr(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),nl(t,e),t.o&&t.s&&Pg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ih(rr(e)),n.s=null,n.S=!0,yT(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Sh(this),Ng(this),Ct(19))};function sc(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function zT(t,e){var n=null;if(t.g==e){sc(t),Og(t),t.g=null;var r=2}else if(_p(t.i,e))n=e.F,RT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=vh(),at(r,new fT(r,n)),Ah(t)}else jT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&wL(t,e)||r==2&&Ng(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gi(t,5);break;case 4:gi(t,10);break;case 3:gi(t,6);break;default:gi(t,2)}}}function BT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function gi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new Ii("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||rc(n,"https"),Ih(n)),pL(n.toString(),r)}else Ct(2);t.H=0,t.h&&t.h.za(e),WT(t),$T(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function WT(t){if(t.H=0,t.ma=[],t.h){const e=PT(t.i);(e.length!=0||t.j.length!=0)&&(B0(t.ma,e),B0(t.ma,t.j),t.i.i.length=0,pg(t.j),t.j.length=0),t.h.ya()}}function HT(t,e,n){var r=n instanceof Ii?rr(n):new Ii(n);if(r.g!="")e&&(r.g=e+"."+r.g),ic(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ii(null);r&&rc(s,r),e&&(s.g=e),i&&ic(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),nl(t,r),r}function qT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new el({ob:!0})):new Ne(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function GT(){}L=GT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function oc(){if(Vs&&!(10<=Number(OD)))throw Error("Environmental error: no available transport.")}oc.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){Ye.call(this),this.g=new VT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!va(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!va(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new no(this)}Je(Ht,Ye);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=HT(t,null,t.Y),Ah(t)};Ht.prototype.close=function(){bg(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eg(t),t=n);e.j.push(new uL(e.fb++,t)),e.H==3&&Ah(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,bg(this.g),delete this.g,Ht.$.N.call(this)};function KT(t){Ag.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(KT,Ag);function QT(){Cg.call(this),this.status=1}Je(QT,Cg);function no(t){this.g=t}Je(no,GT);no.prototype.Ba=function(){at(this.g,"a")};no.prototype.Aa=function(t){at(this.g,new KT(t))};no.prototype.za=function(t){at(this.g,new QT)};no.prototype.ya=function(){at(this.g,"b")};function EL(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(_n,EL);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)zd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){zd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){zd(this,r),i=0;break}}this.h=i,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var IL={};function Dg(t){return-128<=t&&128>t?PD(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return _s;if(0>t)return st(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wp;return new fe(e,0)}function YT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(YT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=_s,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Cn(Math.pow(e,s)),r=r.R(s).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var wp=4294967296,_s=Dg(0),Ep=Dg(1),e_=Dg(16777216);L=fe.prototype;L.ea=function(){if(Jt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wp+r)*e,e*=wp}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qn(this))return"0";if(Jt(this))return"-"+st(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var i=lc(n,e).g;n=ac(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Qn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Jt(t){return t.h==-1}L.X=function(t){return t=ac(this,t),Jt(t)?-1:Qn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Ep)}L.abs=function(){return Jt(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function ac(t,e){return t.add(st(e))}L.R=function(t){if(Qn(this)||Qn(t))return _s;if(Jt(this))return Jt(t)?st(this).R(st(t)):st(st(this).R(t));if(Jt(t))return st(this.R(st(t)));if(0>this.X(e_)&&0>t.X(e_))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,zl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,zl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,zl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,zl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function zl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function _o(t,e){this.g=t,this.h=e}function lc(t,e){if(Qn(e))throw Error("division by zero");if(Qn(t))return new _o(_s,_s);if(Jt(t))return e=lc(st(t),e),new _o(st(e.g),st(e.h));if(Jt(e))return e=lc(t,st(e)),new _o(st(e.g),e.h);if(30<t.g.length){if(Jt(t)||Jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ep,r=e;0>=r.X(t);)n=t_(n),r=t_(r);var i=Gi(n,1),s=Gi(r,1);for(r=Gi(r,2),n=Gi(n,2);!Qn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Gi(r,1),n=Gi(n,1)}return e=ac(t,i.R(e)),new _o(i,e)}for(i=_s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Cn(n),o=s.R(e);Jt(o)||0<o.X(t);)n-=r,s=Cn(n),o=s.R(e);Qn(s)&&(s=Ep),i=i.add(s),t=ac(t,o)}return new _o(i,t)}L.gb=function(t){return lc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function t_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Gi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new fe(i,t.h)}oc.prototype.createWebChannel=oc.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;_h.NO_ERROR=0;_h.TIMEOUT=8;_h.HTTP_ERROR=6;pT.COMPLETE="complete";mT.EventType=Xa;Xa.OPEN="a";Xa.CLOSE="b";Xa.ERROR="c";Xa.MESSAGE="d";Ye.prototype.listen=Ye.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Cn;fe.fromString=YT;var TL=function(){return new oc},xL=function(){return vh()},Bd=_h,SL=pT,AL=Ui,n_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},CL=el,Bl=mT,kL=Ne,RL=_n,ws=fe;const r_="@firebase/firestore";/**
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
 */let ro="10.1.0";/**
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
 */const Ni=new tg("@firebase/firestore");function i_(){return Ni.logLevel}function z(t,...e){if(Ni.logLevel<=oe.DEBUG){const n=e.map(Lg);Ni.debug(`Firestore (${ro}): ${t}`,...n)}}function ir(t,...e){if(Ni.logLevel<=oe.ERROR){const n=e.map(Lg);Ni.error(`Firestore (${ro}): ${t}`,...n)}}function $s(t,...e){if(Ni.logLevel<=oe.WARN){const n=e.map(Lg);Ni.warn(`Firestore (${ro}): ${t}`,...n)}}function Lg(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw ir(e),new Error(e)}function Ie(t,e){t||G()}function J(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class XT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class bL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NL{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new XT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new pt(e)}}class OL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ML{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new LL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class JT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new We(0,0))}static max(){return new X(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Aa{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Aa{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const $L=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Aa{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return $L.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(we.fromString(e))}static fromName(e){return new B(we.fromString(e).popFirst(5))}static empty(){return new B(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new we(e.slice()))}}function FL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Xr(i,B.empty(),e)}function jL(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(X.min(),B.empty(),-1)}static max(){return new Xr(X.max(),B.empty(),-1)}}function UL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const zL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==zL)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function il(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Mg.ae=-1;function Ch(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function WL(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function s_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wl(this.root,e,this.comparator,!0)}}class Wl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new o_(this.data.getIterator())}getIteratorFrom(e){return new o_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class o_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new wt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ex extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ex("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const HL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=HL.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */function Vg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $g(t){const e=t.mapValue.fields.__previous_value__;return Vg(e)?$g(e):e}function Ca(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class qL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ka{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ka&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Di(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vg(t)?4:GL(t)?9007199254740991:10:G()}function Mn(t,e){if(t===e)return!0;const n=Di(t);if(n!==Di(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jr(i.timestampValue),a=Jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Oi(i.bytesValue).isEqual(Oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?uc(o)===uc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(s_(o)!==s_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function Ra(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Di(t),r=Di(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return a_(t.timestampValue,e.timestampValue);case 4:return a_(Ca(t),Ca(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Oi(s),l=Oi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=le(a[u],l[u]);if(c!==0)return c}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(Ve(s.latitude),Ve(o.latitude));return a!==0?a:le(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=js(a[u],l[u]);if(c)return c}return le(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Hl.mapValue&&o===Hl.mapValue)return 0;if(s===Hl.mapValue)return 1;if(o===Hl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=le(l[h],c[h]);if(d!==0)return d;const m=js(a[l[h]],u[c[h]]);if(m!==0)return m}return le(l.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function a_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Jr(t),r=Jr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Us(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return B.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ip(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function l_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tp(t){return!!t&&"integerValue"in t}function Fg(t){return!!t&&"arrayValue"in t}function u_(t){return!!t&&"nullValue"in t}function c_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function du(t){return!!t&&"mapValue"in t}function Ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ho(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ho(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(Ho(this.value))}}function tx(t){const e=[];return zi(t.fields,(n,r)=>{const i=new yt([n]);if(du(r)){const s=tx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
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
 */class gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,X.min(),X.min(),X.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,X.min(),X.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,X.min(),X.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cc{constructor(e,n){this.position=e,this.inclusive=n}}function h_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function d_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function KL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nx{}class Fe extends nx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YL(e,n,r):n==="array-contains"?new ZL(e,r):n==="in"?new eM(e,r):n==="not-in"?new tM(e,r):n==="array-contains-any"?new nM(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XL(e,r):new JL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&Di(this.value)===Di(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends nx{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new wn(e,n)}matches(e){return rx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function rx(t){return t.op==="and"}function ix(t){return QL(t)&&rx(t)}function QL(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function xp(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(ix(t))return t.filters.map(e=>xp(e)).join(",");{const e=t.filters.map(n=>xp(n)).join(",");return`${t.op}(${e})`}}function sx(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&sx(o,i.filters[a]),!0):!1}(t,e):void G()}function ox(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(ox).join(" ,")+"}"}(t):"Filter"}class YL extends Fe{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class XL extends Fe{constructor(e,n){super(e,"in",n),this.keys=ax("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JL extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=ax("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ax(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class ZL extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fg(n)&&Ra(n.arrayValue,this.value)}}class eM extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ra(this.value.arrayValue,n)}}class tM extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ra(this.value.arrayValue,n)}}class nM extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ra(this.value.arrayValue,r))}}/**
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
 */class rM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function f_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rM(t,e,n,r,i,s,o)}function jg(t){const e=J(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.he=n}return e.he}function Ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!d_(t.startAt,e.startAt)&&d_(t.endAt,e.endAt)}function Sp(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class sl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function iM(t,e,n,r,i,s,o,a){return new sl(t,e,n,r,i,s,o,a)}function kh(t){return new sl(t)}function p_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ux(t){return t.collectionGroup!==null}function Es(t){const e=J(t);if(e.Pe===null){e.Pe=[];const n=zg(e),r=lx(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new qo(n)),e.Pe.push(new qo(yt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new qo(yt.keyField(),s))}}}return e.Pe}function sr(t){const e=J(t);if(!e.Ie)if(e.limitType==="F")e.Ie=f_(e.path,e.collectionGroup,Es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Es(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new qo(s.field,o))}const r=e.endAt?new cc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cc(e.startAt.position,e.startAt.inclusive):null;e.Ie=f_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Ap(t,e){e.getFirstInequalityField(),zg(t);const n=t.filters.concat([e]);return new sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cp(t,e,n){return new sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rh(t,e){return Ug(sr(t),sr(e))&&t.limitType===e.limitType}function cx(t){return`${jg(sr(t))}|lt:${t.limitType}`}function kp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ox(i)).join(", ")}]`),Ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Us(i)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function Ph(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Es(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=h_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Es(r),i)||r.endAt&&!function(o,a,l){const u=h_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Es(r),i))}(t,e)}function sM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hx(t){return(e,n)=>{let r=!1;for(const i of Es(t)){const s=oM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oM(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?js(l,u):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class io{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZT(this.inner)}size(){return this.innerSize}}/**
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
 */const aM=new Re(B.comparator);function or(){return aM}const dx=new Re(B.comparator);function Ro(...t){let e=dx;for(const n of t)e=e.insert(n.key,n);return e}function fx(t){let e=dx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yi(){return Go()}function px(){return Go()}function Go(){return new io(t=>t.toString(),(t,e)=>t.isEqual(e))}const lM=new Re(B.comparator),uM=new wt(B.comparator);function ee(...t){let e=uM;for(const n of t)e=e.add(n);return e}const cM=new wt(le);function hM(){return cM}/**
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
 */function mx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function gx(t){return{integerValue:""+t}}function dM(t,e){return WL(e)?gx(e):mx(t,e)}/**
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
 */class bh{constructor(){this._=void 0}}function fM(t,e,n){return t instanceof hc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vg(s)&&(s=$g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Pa?vx(t,e):t instanceof ba?_x(t,e):function(i,s){const o=yx(i,s),a=m_(o)+m_(i.Te);return Tp(o)&&Tp(i.Te)?gx(a):mx(i.serializer,a)}(t,e)}function pM(t,e,n){return t instanceof Pa?vx(t,e):t instanceof ba?_x(t,e):n}function yx(t,e){return t instanceof dc?function(r){return Tp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class hc extends bh{}class Pa extends bh{constructor(e){super(),this.elements=e}}function vx(t,e){const n=wx(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ba extends bh{constructor(e){super(),this.elements=e}}function _x(t,e){let n=wx(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class dc extends bh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function m_(t){return Ve(t.integerValue||t.doubleValue)}function wx(t){return Fg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pa&&i instanceof Pa||r instanceof ba&&i instanceof ba?Fs(r.elements,i.elements,Mn):r instanceof dc&&i instanceof dc?Mn(r.Te,i.Te):r instanceof hc&&i instanceof hc}(t.transform,e.transform)}class gM{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nh{}function Ex(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bg(t.key,tn.none()):new ol(t.key,t.data,tn.none());{const n=t.data,r=Ot.empty();let i=new wt(yt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new oi(t.key,r,new zt(i.toArray()),tn.none())}}function yM(t,e,n){t instanceof ol?function(i,s,o){const a=i.value.clone(),l=y_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(i,s,o){if(!fu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=y_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ix(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof ol?function(s,o,a,l){if(!fu(s.precondition,o))return a;const u=s.value.clone(),c=v_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(s,o,a,l){if(!fu(s.precondition,o))return a;const u=v_(s.fieldTransforms,l,o),c=o.data;return c.setAll(Ix(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return fu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yx(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function g_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fs(r,i,(s,o)=>mM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends Nh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oi extends Nh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ix(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function y_(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pM(o,a,n[i]))}return r}function v_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fM(s,o,e))}return r}class Bg extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _M extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=px();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ex(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>g_(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>g_(n,r))}}class Wg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=function(){return lM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wg(e,n,r,i)}}/**
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
 */class EM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,re;function TM(t){switch(t){default:return G();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Tx(t){if(t===void 0)return ir("GRPC error has no .code"),A.UNKNOWN;switch(t){case Me.OK:return A.OK;case Me.CANCELLED:return A.CANCELLED;case Me.UNKNOWN:return A.UNKNOWN;case Me.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Me.INTERNAL:return A.INTERNAL;case Me.UNAVAILABLE:return A.UNAVAILABLE;case Me.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Me.NOT_FOUND:return A.NOT_FOUND;case Me.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Me.ABORTED:return A.ABORTED;case Me.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Me.DATA_LOSS:return A.DATA_LOSS;default:return G()}}(re=Me||(Me={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ql}static getOrCreateInstance(){return ql===null&&(ql=new Hg),ql}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ql=null;/**
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
 */function xM(){return new TextEncoder}/**
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
 */const SM=new ws([4294967295,4294967295],0);function __(t){const e=xM().encode(t),n=new RL;return n.update(e),new Uint8Array(n.digest())}function w_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ws([n,r],0),new ws([i,s],0)]}class qg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Po(`Invalid padding: ${n}`);if(r<0)throw new Po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Po(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=ws.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(ws.fromNumber(r)));return i.compare(SM)===1&&(i=new ws([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=__(e),[r,i]=w_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=__(e),[r,i]=w_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oh(X.min(),i,new Re(le),or(),ee())}}class al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new al(r,n,ee(),ee(),ee())}}/**
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
 */class pu{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class xx{constructor(e,n){this.targetId=e,this.pe=n}}class Sx{constructor(e,n,r=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class E_{constructor(){this.ye=0,this.we=T_(),this.Se=xt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ee(),n=ee(),r=ee();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new al(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=T_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class AM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=or(),this.$e=I_(),this.Ue=new Re(le)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Sp(a))if(s===0){const l=new B(a.path);this.ze(i,l,gt.newNoDocument(l,X.min()))}else Ie(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Hg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,v){var _,w,p,f,y,E;const x={localCacheCount:m,existenceFilterCount:v.count},C=v.unchangedNames;return C&&(x.bloomFilter={applied:h===0,hashCount:(_=C==null?void 0:C.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(p=(w=C==null?void 0:C.bits)===null||w===void 0?void 0:w.bitmap)===null||p===void 0?void 0:p.length)!==null&&f!==void 0?f:0,padding:(E=(y=C==null?void 0:C.bits)===null||y===void 0?void 0:y.padding)!==null&&E!==void 0?E:0},d&&(x.bloomFilter.mightContain=d)),x}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Oi(s).toUint8Array()}catch(h){if(h instanceof ex)return $s("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new qg(l,o,a)}catch(h){return $s(h instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Sp(a.target)){const l=new B(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,gt.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ee();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Oh(e,n,this.Ue,this.Ke,r);return this.Ke=or(),this.$e=I_(),this.Ue=new Re(le),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new E_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new wt(le),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new E_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function I_(){return new Re(B.comparator)}function T_(){return new Re(B.comparator)}const CM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RM=(()=>({and:"AND",or:"OR"}))();class PM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rp(t,e){return t.useProto3Json||Ch(e)?e:{value:e}}function fc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ax(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bM(t,e){return fc(t,e.toTimestamp())}function On(t){return Ie(!!t),X.fromTimestamp(function(n){const r=Jr(n);return new We(r.seconds,r.nanos)}(t))}function Gg(t,e){return function(r){return new we(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Cx(t){const e=we.fromString(t);return Ie(bx(e)),e}function Pp(t,e){return Gg(t.databaseId,e.path)}function Wd(t,e){const n=Cx(e);if(n.get(1)!==t.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(kx(n))}function bp(t,e){return Gg(t.databaseId,e)}function NM(t){const e=Cx(t);return e.length===4?we.emptyPath():kx(e)}function Np(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kx(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function x_(t,e,n){return{name:Pp(t,e),fields:n.value.mapValue.fields}}function OM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ie(c===void 0||typeof c=="string"),xt.fromBase64String(c||"")):(Ie(c===void 0||c instanceof Uint8Array),xt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:Tx(u.code);return new V(c,u.message||"")}(o);n=new Sx(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wd(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):X.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new pu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wd(t,r.document),s=r.readTime?On(r.readTime):X.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wd(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IM(i,s),a=r.targetId;n=new xx(a,o)}}return n}function DM(t,e){let n;if(e instanceof ol)n={update:x_(t,e.key,e.value)};else if(e instanceof Bg)n={delete:Pp(t,e.key)};else if(e instanceof oi)n={update:x_(t,e.key,e.data),updateMask:BM(e.fieldMask)};else{if(!(e instanceof _M))return G();n={verify:Pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof hc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ba)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof dc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function LM(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(X.min())&&(o=On(s)),new gM(o,i.transformResults||[])}(n,e))):[]}function MM(t,e){return{documents:[bp(t,e.path)]}}function VM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=bp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Px(wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Ki(h.field),direction:jM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Rp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $M(t){let e=NM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Rx(h);return d instanceof wn&&ix(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new qo(Qi(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ch(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new cc(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new cc(m,d)}(n.endAt)),iM(e,i,o,s,a,"F",l,u)}function FM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>Rx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function jM(t){return CM[t]}function UM(t){return kM[t]}function zM(t){return RM[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Qi(t){return yt.fromServerFormat(t.fieldPath)}function Px(t){return t instanceof Fe?function(n){if(n.op==="=="){if(c_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(u_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(c_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(u_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:UM(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>Px(i));return r.length===1?r[0]:{compositeFilter:{op:zM(n.op),filters:r}}}(t):G()}function BM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Pr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=xt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class WM{constructor(e){this.ct=e}}function HM(t){const e=$M({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cp(e,e.limit,"L"):e}/**
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
 */class qM{constructor(){this.sn=new GM}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Xr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class GM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new wt(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new wt(we.comparator)).toArray()}}/**
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
 */class zs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new zs(0)}static On(){return new zs(-1)}}/**
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
 */class KM{constructor(){this.changes=new io(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ko(r.mutation,i,zt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=yi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ro();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=or();const o=Go(),a=function(){return Go()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof oi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ko(c.mutation,u,c.mutation.getFieldMask(),We.now())):o.set(u.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new QM(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Go();let i=new Re((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||zt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ee()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=px();c.forEach(d=>{if(!s.has(d)){const m=Ex(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ux(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(yi());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ee())).next(c=>({batchId:a,changes:fx(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=Ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ro();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(c,h){return new sl(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,gt.newInvalidDocument(u)))});let o=Ro();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ko(u.mutation,l,zt.empty(),We.now()),Ph(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class XM{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:HM(i.bundledQuery),readTime:On(i.readTime)}}(n)),P.resolve()}}/**
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
 */class JM{constructor(){this.overlays=new Re(B.comparator),this.cr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yi();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=yi(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=yi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EM(n,r));let s=this.cr.get(n);s===void 0&&(s=ee(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class Kg{constructor(){this.lr=new wt(qe.hr),this.Pr=new wt(qe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new qe(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new B(new we([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new B(new we([])),r=new qe(n,e),i=new qe(n,e+1);let s=ee();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return B.comparator(e.key,n.key)||le(e.mr,n.mr)}static Ir(e,n){return le(e.mr,n.mr)||B.comparator(e.key,n.key)}}/**
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
 */class ZM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new wt(qe.hr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(le);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),P.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new qe(new B(s),0);let a=new wt(le);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return P.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new qe(n,0),i=this.pr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eV{constructor(e){this.Dr=e,this.docs=function(){return new Re(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||UL(jL(c),r)<=0||(i.has(c.key)||Ph(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tV(this)}getSize(e){return P.resolve(this.size)}}class tV extends KM{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class nV{constructor(e){this.persistence=e,this.Cr=new io(n=>jg(n),Ug),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Kg,this.targetCount=0,this.Or=zs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Ln(n),P.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Mr.containsKey(n))}}/**
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
 */class rV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Mg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new nV(this),this.indexManager=new qM,this.remoteDocumentCache=function(i){return new eV(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new WM(n),this.Qr=new XM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new ZM(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new iV(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return P.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class iV extends BL{constructor(e){super(),this.currentSequenceNumber=e}}class Qg{constructor(e){this.persistence=e,this.Wr=new Kg,this.Gr=null}static zr(e){return new Qg(e)}get jr(){if(this.Gr)return this.Gr;throw G()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,r=>{const i=B.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Yg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yg(e,n.fromCache,r,i)}}/**
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
 */class sV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(p_(n))return P.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cp(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Cp(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return p_(n)||i.isEqual(X.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(i_()<=oe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kp(n)),this.ji(e,o,n,FL(i,-1)))})}Gi(e,n){let r=new wt(hx(e));return n.forEach((i,s)=>{Ph(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return i_()<=oe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",kp(n)),this.Ki.getDocumentsMatchingQuery(e,n,Xr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class oV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Re(le),this.Yi=new io(s=>jg(s),Ug),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YM(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function aV(t,e,n,r){return new oV(t,e,n,r)}async function Nx(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ee();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function lV(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=P.resolve();return d.forEach(v=>{m=m.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);Ie(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ox(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function uV(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(xt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,w,p){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.kr.updateTargetData(s,m))});let l=or(),u=ee();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(cV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(X.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function cV(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function hV(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dV(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Op(t,e,n){const r=J(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!il(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function S_(t,e,n){const r=J(t);let i=X.min(),s=ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=J(l),d=h.Yi.get(c);return d!==void 0?P.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ee())).next(a=>(fV(r,sM(e),a),{documents:a,ss:s})))}function fV(t,e,n){let r=t.Zi.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class A_{constructor(){this.activeTargetIds=hM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pV{constructor(){this.Hs=new A_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new A_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mV{Ys(e){}shutdown(){}}/**
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
 */class C_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gl=null;function Hd(){return Gl===null?Gl=function(){return 268435456+Math.round(2147483648*Math.random())}():Gl++,"0x"+Gl.toString(16)}/**
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
 */const gV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const dt="WebChannelConnection";class vV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Hd(),l=this.mo(n,r);z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(z("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw $s("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=gV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Hd();return new Promise((o,a)=>{const l=new kL;l.setWithCredentials(!0),l.listenOnce(SL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bd.NO_ERROR:const c=l.getResponseJson();z(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Bd.TIMEOUT:z(dt,`RPC '${e}' ${s} timed out`),a(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case Bd.HTTP_ERROR:const h=l.getStatus();if(z(dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(p)>=0?p:A.UNKNOWN}(m.status);a(new V(v,m.message))}else a(new V(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(A.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{z(dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);z(dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Hd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TL(),a=xL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new CL({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");z(dt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new yV({so:w=>{m?z(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(z(dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),z(dt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,p,f)=>{w.listen(p,y=>{try{f(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,Bl.EventType.OPEN,()=>{m||z(dt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Bl.EventType.CLOSE,()=>{m||(m=!0,z(dt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,Bl.EventType.ERROR,w=>{m||(m=!0,$s(dt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new V(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,Bl.EventType.MESSAGE,w=>{var p;if(!m){const f=w.data[0];Ie(!!f);const y=f,E=y.error||((p=y[0])===null||p===void 0?void 0:p.error);if(E){z(dt,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let C=function(H){const j=Me[H];if(j!==void 0)return Tx(j)}(x),b=E.message;C===void 0&&(C=A.INTERNAL,b="Unknown error status: "+x+" with message "+E.message),m=!0,v.Po(new V(C,b)),h.close()}else z(dt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,AL.STAT_EVENT,w=>{w.stat===n_.PROXY?z(dt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===n_.NOPROXY&&z(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function qd(){return typeof document<"u"?document:null}/**
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
 */function Dh(t){return new PM(t,!0)}/**
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
 */class Dx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Lx{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Dx(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _V extends Lx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=OM(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?On(o.readTime):X.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Np(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Sp(l)?{documents:MM(s,l)}:{query:VM(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ax(s,o.resumeToken);const u=Rp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=fc(s,o.snapshotVersion.toTimestamp());const u=Rp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=FM(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Np(this.serializer),n.removeTarget=e,this.Ho(n)}}class wV extends Lx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=LM(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.u_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Np(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DM(this.serializer,r))};this.Ho(n)}}/**
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
 */class EV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(A.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class IV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ir(n),this.d_=!1):z("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class TV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=J(l);u.y_.add(4),await ll(u),u.b_.set("Unknown"),u.y_.delete(4),await Lh(u)}(this))})}),this.b_=new IV(r,i)}}async function Lh(t){if(Bi(t))for(const e of t.w_)await e(!0)}async function ll(t){for(const e of t.w_)await e(!1)}function Mx(t,e){const n=J(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Zg(n)?Jg(n):so(n).Uo()&&Xg(n,e))}function Vx(t,e){const n=J(t),r=so(n);n.p_.delete(e),r.Uo()&&$x(n,e),n.p_.size===0&&(r.Uo()?r.zo():Bi(n)&&n.b_.set("Unknown"))}function Xg(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}so(t).i_(e)}function $x(t,e){t.D_.Be(e),so(t).s_(e)}function Jg(t){t.D_=new AM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),so(t).start(),t.b_.A_()}function Zg(t){return Bi(t)&&!so(t).$o()&&t.p_.size>0}function Bi(t){return J(t).y_.size===0}function Fx(t){t.D_=void 0}async function xV(t){t.p_.forEach((e,n)=>{Xg(t,e)})}async function SV(t,e){Fx(t),Zg(t)?(t.b_.m_(e),Jg(t)):t.b_.set("Unknown")}async function AV(t,e,n){if(t.b_.set("Online"),e instanceof Sx&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pc(t,r)}else if(e instanceof pu?t.D_.We(e):e instanceof xx?t.D_.Ze(e):t.D_.je(e),!n.isEqual(X.min()))try{const r=await Ox(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(xt.EMPTY_BYTE_STRING,c.snapshotVersion)),$x(s,l);const h=new Pr(c.target,l,u,c.sequenceNumber);Xg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await pc(t,r)}}async function pc(t,e,n){if(!il(e))throw e;t.y_.add(1),await ll(t),t.b_.set("Offline"),n||(n=()=>Ox(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Lh(t)})}function jx(t,e){return e().catch(n=>pc(t,n,e))}async function Mh(t){const e=J(t),n=Zr(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;CV(e);)try{const i=await hV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,kV(e,i)}catch(i){await pc(e,i)}Ux(e)&&zx(e)}function CV(t){return Bi(t)&&t.g_.length<10}function kV(t,e){t.g_.push(e);const n=Zr(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Ux(t){return Bi(t)&&!Zr(t).$o()&&t.g_.length>0}function zx(t){Zr(t).start()}async function RV(t){Zr(t).l_()}async function PV(t){const e=Zr(t);for(const n of t.g_)e.a_(n.mutations)}async function bV(t,e,n){const r=t.g_.shift(),i=Wg.from(r,e,n);await jx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mh(t)}async function NV(t,e){e&&Zr(t).__&&await async function(r,i){if(function(o){return TM(o)&&o!==A.ABORTED}(i.code)){const s=r.g_.shift();Zr(r).Go(),await jx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mh(r)}}(t,e),Ux(t)&&zx(t)}async function k_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Bi(n);n.y_.add(3),await ll(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Lh(n)}async function OV(t,e){const n=J(t);e?(n.y_.delete(2),await Lh(n)):e||(n.y_.add(2),await ll(n),n.b_.set("Unknown"))}function so(t){return t.v_||(t.v_=function(n,r,i){const s=J(n);return s.P_(),new _V(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:xV.bind(null,t),uo:SV.bind(null,t),r_:AV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Zg(t)?Jg(t):t.b_.set("Unknown")):(await t.v_.stop(),Fx(t))})),t.v_}function Zr(t){return t.C_||(t.C_=function(n,r,i){const s=J(n);return s.P_(),new wV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:RV.bind(null,t),uo:NV.bind(null,t),c_:PV.bind(null,t),u_:bV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Mh(t)):(await t.C_.stop(),t.g_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class ey{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ey(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ty(t,e){if(ir("AsyncQueue",`${e}: ${t}`),il(t))return new V(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class R_{constructor(){this.F_=new Re(B.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):G():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(e,n,Is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class DV{constructor(){this.x_=void 0,this.listeners=[]}}class LV{constructor(){this.queries=new io(e=>cx(e),Rh),this.onlineState="Unknown",this.O_=new Set}}async function ny(t,e){const n=J(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new DV),i)try{s.x_=await n.onListen(r)}catch(o){const a=ty(o,`Initialization of query '${kp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&iy(n)}async function ry(t,e){const n=J(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function MV(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&iy(n)}function VV(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function iy(t){t.O_.forEach(e=>{e.next()})}class sy{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Bx{constructor(e){this.key=e}}class Wx{constructor(e){this.key=e}}class $V{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ee(),this.mutatedKeys=ee(),this.na=hx(e),this.ra=new Is(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new R_,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Ph(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),w=!0):this._a(d,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.na(m,l)>0||u&&this.na(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,m){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return v(d)-v(m)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Bs(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new R_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ee(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Wx(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Bx(r))}),n}ha(e){this.X_=e.ss,this.ta=ee();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Bs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class FV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jV{constructor(e){this.key=e,this.Ia=!1}}class UV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new io(a=>cx(a),Rh),this.da=new Map,this.Aa=new Set,this.Ra=new Re(B.comparator),this.Va=new Map,this.ma=new Kg,this.fa={},this.ga=new Map,this.pa=zs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function zV(t,e){const n=JV(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await dV(n.localStore,sr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await BV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Mx(n.remoteStore,o)}return i}async function BV(t,e,n,r,i){t.wa=(h,d,m)=>async function(_,w,p,f){let y=w.view.sa(p);y.zi&&(y=await S_(_.localStore,w.query,!1).then(({documents:C})=>w.view.sa(C,y)));const E=f&&f.targetChanges.get(w.targetId),x=w.view.applyChanges(y,_.isPrimaryClient,E);return b_(_,w.targetId,x.ca),x.snapshot}(t,h,d,m);const s=await S_(t.localStore,e,!0),o=new $V(e,s.ss),a=o.sa(s.documents),l=al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);b_(t,n,u.ca);const c=new FV(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function WV(t,e){const n=J(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Rh(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Op(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Vx(n.remoteStore,r.targetId),Dp(n,r.targetId)}).catch(rl)):(Dp(n,r.targetId),await Op(n.localStore,r.targetId,!0))}async function HV(t,e,n){const r=ZV(t);try{const i=await function(o,a){const l=J(o),u=We.now(),c=a.reduce((m,v)=>m.add(v.key),ee());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=or(),_=ee();return l.Xi.getEntries(m,c).next(w=>{v=w,v.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,v)).next(w=>{h=w;const p=[];for(const f of a){const y=vM(f,h.get(f.key).overlayedDocument);y!=null&&p.push(new oi(f.key,y,tx(y.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(w=>{d=w;const p=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,w.batchId,p)})}).then(()=>({batchId:d.batchId,changes:fx(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Re(le)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ul(r,i.changes),await Mh(r.remoteStore)}catch(i){const s=ty(i,"Failed to persist write");n.reject(s)}}async function Hx(t,e){const n=J(t);try{const r=await uV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Ie(o.Ia):i.removedDocuments.size>0&&(Ie(o.Ia),o.Ia=!1))}),await ul(n,r,e)}catch(r){await rl(r)}}function P_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=J(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&iy(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qV(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Re(B.comparator);o=o.insert(s,gt.newNoDocument(s,X.min()));const a=ee().add(s),l=new Oh(X.min(),new Map,new Re(le),o,a);await Hx(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),oy(r)}else await Op(r.localStore,e,!1).then(()=>Dp(r,e,n)).catch(rl)}async function GV(t,e){const n=J(t),r=e.batch.batchId;try{const i=await lV(n.localStore,e);Gx(n,r,null),qx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ul(n,i)}catch(i){await rl(i)}}async function KV(t,e,n){const r=J(t);try{const i=await function(o,a){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Ie(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Gx(r,e,n),qx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ul(r,i)}catch(i){await rl(i)}}function qx(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function Gx(t,e,n){const r=J(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Dp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Kx(t,r)})}function Kx(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(Vx(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),oy(t))}function b_(t,e,n){for(const r of n)r instanceof Bx?(t.ma.addReference(r.key,e),QV(t,r)):r instanceof Wx?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Kx(t,r.key)):G()}function QV(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Aa.add(r),oy(t))}function oy(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new B(we.fromString(e)),r=t.pa.next();t.Va.set(r,new jV(n)),t.Ra=t.Ra.insert(n,r),Mx(t.remoteStore,new Pr(sr(kh(n.path)),r,"TargetPurposeLimboResolution",Mg.ae))}}async function ul(t,e,n){const r=J(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Yg.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=J(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(u,d=>P.forEach(d.Li,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>P.forEach(d.ki,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!il(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Ji.get(d),v=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function YV(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await Nx(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new V(A.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ul(n,r.ts)}}function XV(t,e){const n=J(t),r=n.Va.get(e);if(r&&r.Ia)return ee().add(r.key);{let i=ee();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function JV(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qV.bind(null,e),e.Ta.r_=MV.bind(null,e.eventManager),e.Ta.Sa=VV.bind(null,e.eventManager),e}function ZV(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KV.bind(null,e),e}class N_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return aV(this.persistence,new sV,e.initialUser,this.serializer)}createPersistence(e){return new rV(Qg.zr,this.serializer)}createSharedClientState(e){return new pV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>P_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YV.bind(null,this.syncEngine),await OV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LV}()}createDatastore(e){const n=Dh(e.databaseInfo.databaseId),r=function(s){return new vV(s)}(e.databaseInfo);return function(s,o,a,l){return new EV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new TV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>P_(this.syncEngine,n,0),function(){return C_.v()?new C_:new mV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new UV(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);z("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await ll(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class t4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=JT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ty(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Nx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function O_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await r4(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>k_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>k_(e.remoteStore,s)),t._onlineComponents=e}function n4(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function r4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!n4(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new N_)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new N_);return t._offlineComponents}async function Qx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await O_(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await O_(t,new e4))),t._onlineComponents}function i4(t){return Qx(t).then(e=>e.syncEngine)}async function mc(t){const e=await Qx(t),n=e.eventManager;return n.onListen=zV.bind(null,e.syncEngine),n.onUnlisten=WV.bind(null,e.syncEngine),n}function s4(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ay({next:d=>{o.enqueueAndForget(()=>ry(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new V(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new V(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new sy(kh(a.path),c,{includeMetadataChanges:!0,W_:!0});return ny(s,h)}(await mc(t),t.asyncQueue,e,n,r)),r.promise}function o4(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ay({next:d=>{o.enqueueAndForget(()=>ry(s,h)),d.fromCache&&l.source==="server"?u.reject(new V(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new sy(a,c,{includeMetadataChanges:!0,W_:!0});return ny(s,h)}(await mc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Yx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const D_=new Map;/**
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
 */function Xx(t,e,n){if(!n)throw new V(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function a4(t,e,n,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function L_(t){if(!B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function M_(t){if(B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vh(t);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class V_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $h{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PL;switch(r.type){case"firstParty":return new DL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=D_.get(n);r&&(z("ComponentProvider","Removing Datastore"),D_.delete(n),r.terminate())}(this),Promise.resolve()}}function l4(t,e,n,r={}){var i;const s=(t=Ft(t,$h))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=pt.MOCK_USER;else{a=aI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(u)}t._authCredentials=new bL(new XT(a,l))}}/**
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
 */class Wi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wi(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Wr extends Wi{constructor(e,n,r){super(e,n,kh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new B(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function ai(t,e,...n){if(t=je(t),Xx("collection","path",e),t instanceof $h){const r=we.fromString(e,...n);return M_(r),new Wr(t,null,r)}{if(!(t instanceof Et||t instanceof Wr))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return M_(r),new Wr(t.firestore,null,r)}}function gn(t,e,...n){if(t=je(t),arguments.length===1&&(e=JT.V()),Xx("doc","path",e),t instanceof $h){const r=we.fromString(e,...n);return L_(r),new Et(t,null,new B(r))}{if(!(t instanceof Et||t instanceof Wr))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return L_(r),new Et(t.firestore,t instanceof Wr?t.converter:null,new B(r))}}/**
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
 */class u4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Dx(this,"async_queue_retry"),this.Xa=()=>{const n=qd();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=qd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Xn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!il(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=ey.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&G()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function $_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ar extends $h{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new u4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jx(this),this._firestoreClient.terminate()}}function c4(t,e){const n=typeof t=="object"?t:rg(),r=typeof t=="string"?t:e||"(default)",i=lh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iI("firestore");s&&l4(i,...s)}return i}function Fh(t){return t._firestoreClient||Jx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jx(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new qL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Yx(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new t4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(xt.fromBase64String(e))}catch(n){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ly{constructor(e){this._methodName=e}}/**
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
 */class uy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const h4=/^__.*__$/;class d4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}class Zx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new oi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class cy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new cy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return gc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(eS(this.uu)&&h4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class f4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dh(e)}Ru(e,n,r,i=!1){return new cy({uu:e,methodName:n,Au:r,path:yt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uh(t){const e=t._freezeSettings(),n=Dh(t._databaseId);return new f4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tS(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);hy("Data must be an object, but it was:",o,r);const a=nS(r,o);let l,u;if(s.merge)l=new zt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Lp(e,h,n);if(!o.contains(d))throw new V(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iS(c,d)||c.push(d)}l=new zt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new d4(new Ot(a),l,u)}class zh extends ly{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zh}}function p4(t,e,n,r){const i=t.Ru(1,e,n);hy("Data must be an object, but it was:",i,r);const s=[],o=Ot.empty();zi(r,(l,u)=>{const c=dy(e,l,n);u=je(u);const h=i.Iu(c);if(u instanceof zh)s.push(c);else{const d=cl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new zt(s);return new Zx(o,a,i.fieldTransforms)}function m4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Lp(e,r,n)],l=[i];if(s.length%2!=0)throw new V(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Lp(e,s[d])),l.push(s[d+1]);const u=[],c=Ot.empty();for(let d=a.length-1;d>=0;--d)if(!iS(u,a[d])){const m=a[d];let v=l[d];v=je(v);const _=o.Iu(m);if(v instanceof zh)u.push(m);else{const w=cl(v,_);w!=null&&(u.push(m),c.set(m,w))}}const h=new zt(u);return new Zx(c,h,o.fieldTransforms)}function g4(t,e,n,r=!1){return cl(n,t.Ru(r?4:3,e))}function cl(t,e){if(rS(t=je(t)))return hy("Unsupported field value:",e,t),nS(t,e);if(t instanceof ly)return function(r,i){if(!eS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=cl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:fc(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fc(i.serializer,s)}}if(r instanceof uy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ws)return{bytesValue:Ax(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Vh(r)}`)}(t,e)}function nS(t,e){const n={};return ZT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(t,(r,i)=>{const s=cl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof uy||t instanceof Ws||t instanceof Et||t instanceof ly)}function hy(t,e,n){if(!rS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Lp(t,e,n){if((e=je(e))instanceof jh)return e._internalPath;if(typeof e=="string")return dy(t,e);throw gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const y4=new RegExp("[~\\*/\\[\\]]");function dy(t,e,n){if(e.search(y4)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jh(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(A.INVALID_ARGUMENT,a+t+l)}function iS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v4 extends sS{data(){return super.data()}}function fy(t,e){return typeof e=="string"?dy(t,e):e instanceof jh?e._internalPath:e._delegate._internalPath}/**
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
 */function oS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class py{}class _4 extends py{}function aS(t,e,...n){let r=[];e instanceof py&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof my).length,a=s.filter(l=>l instanceof Bh).length;if(o>1||o>0&&a>0)throw new V(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bh extends _4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bh(e,n,r)}_apply(e){const n=this._parse(e);return lS(e._query,n),new Wi(e.firestore,e.converter,Ap(e._query,n))}_parse(e){const n=Uh(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new V(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){j_(h,c);const m=[];for(const v of h)m.push(F_(l,s,v));d={arrayValue:{values:m}}}else d=F_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||j_(h,c),d=g4(a,o,h,c==="in"||c==="not-in");return Fe.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function w4(t,e,n){const r=e,i=fy("where",t);return Bh._create(i,r,n)}class my extends py{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new my(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)lS(o,l),o=Ap(o,l)}(e._query,n),new Wi(e.firestore,e.converter,Ap(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function F_(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new V(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ux(e)&&n.indexOf("/")!==-1)throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!B.isDocumentKey(r))throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return l_(t,new B(r))}if(n instanceof Et)return l_(t,n._key);throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(n)}.`)}function j_(t,e){if(!Array.isArray(t)||t.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lS(t,e){if(e.isInequality()){const r=zg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new V(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=lx(t);s!==null&&E4(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function E4(t,e,n){if(!n.isEqual(e))throw new V(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class I4{convertValue(e,n="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new uy(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$g(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);Ie(bx(r));const i=new ka(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function uS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cS extends sS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mu extends cS{data(e={}){return super.data(e)}}class hS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mu(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:T4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function T4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function dS(t){t=Ft(t,Et);const e=Ft(t.firestore,ar);return s4(Fh(e),t._key).then(n=>mS(e,t,n))}class gy extends I4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function x4(t){t=Ft(t,Wi);const e=Ft(t.firestore,ar),n=Fh(e),r=new gy(e);return oS(t._query),o4(n,t._query).then(i=>new hS(e,r,t,i))}function yc(t,e,n){t=Ft(t,Et);const r=Ft(t.firestore,ar),i=uS(t.converter,e,n);return Wh(r,[tS(Uh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function U_(t,e,n,...r){t=Ft(t,Et);const i=Ft(t.firestore,ar),s=Uh(i);let o;return o=typeof(e=je(e))=="string"||e instanceof jh?m4(s,"updateDoc",t._key,e,n,r):p4(s,"updateDoc",t._key,e),Wh(i,[o.toMutation(t._key,tn.exists(!0))])}function fS(t){return Wh(Ft(t.firestore,ar),[new Bg(t._key,tn.none())])}function pS(t,e){const n=Ft(t.firestore,ar),r=gn(t),i=uS(t.converter,e);return Wh(n,[tS(Uh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function hl(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if($_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Et)u=Ft(t.firestore,ar),c=kh(t._key.path),l={next:h=>{e[o]&&e[o](mS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ft(t,Wi);u=Ft(h.firestore,ar),c=h._query;const d=new gy(u);l={next:m=>{e[o]&&e[o](new hS(u,d,h,m))},error:e[o+1],complete:e[o+2]},oS(t._query)}return function(d,m,v,_){const w=new ay(_),p=new sy(m,w,v);return d.asyncQueue.enqueueAndForget(async()=>ny(await mc(d),p)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>ry(await mc(d),p))}}(Fh(u),c,a,l)}function Wh(t,e){return function(r,i){const s=new Xn;return r.asyncQueue.enqueueAndForget(async()=>HV(await i4(r),i,s)),s.promise}(Fh(t),e)}function mS(t,e,n){const r=n.docs.get(e._key),i=new gy(t);return new cS(t,i,e._key,r,new bo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ro=i})(Fi),Ri(new Yr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ar(new NL(r.getProvider("auth-internal")),new ML(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ka(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Pn(r_,"4.1.0",e),Pn(r_,"4.1.0","esm2017")})();const S4={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},yy=cI(S4);_D(yy);const Ts=HO(yy),Ke=c4(yy);function dn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ei(t){return!!t&&!!t[Te]}function lr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===D4}(t)||Array.isArray(t)||!!t[K_]||!!(!((e=t.constructor)===null||e===void 0)&&e[K_])||vy(t)||_y(t))}function Li(t,e,n){n===void 0&&(n=!1),oo(t)===0?(n?Object.keys:Ss)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function oo(t){var e=t[Te];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:vy(t)?2:_y(t)?3:0}function xs(t,e){return oo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function A4(t,e){return oo(t)===2?t.get(e):t[e]}function gS(t,e,n){var r=oo(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function yS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function vy(t){return N4&&t instanceof Map}function _y(t){return O4&&t instanceof Set}function hi(t){return t.o||t.t}function wy(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=_S(t);delete e[Te];for(var n=Ss(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Ey(t,e){return e===void 0&&(e=!1),Iy(t)||ei(t)||!lr(t)||(oo(t)>1&&(t.set=t.add=t.clear=t.delete=C4),Object.freeze(t),e&&Li(t,function(n,r){return Ey(r,!0)},!0)),t}function C4(){dn(2)}function Iy(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Dn(t){var e=Fp[t];return e||dn(18,t),e}function k4(t,e){Fp[t]||(Fp[t]=e)}function Mp(){return Na}function Kd(t,e){e&&(Dn("Patches"),t.u=[],t.s=[],t.v=e)}function vc(t){Vp(t),t.p.forEach(R4),t.p=null}function Vp(t){t===Na&&(Na=t.l)}function z_(t){return Na={p:[],l:Na,h:t,m:!0,_:0}}function R4(t){var e=t[Te];e.i===0||e.i===1?e.j():e.g=!0}function Qd(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Dn("ES5").S(e,t,r),r?(n[Te].P&&(vc(e),dn(4)),lr(t)&&(t=_c(e,t),e.l||wc(e,t)),e.u&&Dn("Patches").M(n[Te].t,t,e.u,e.s)):t=_c(e,n,[]),vc(e),e.u&&e.v(e.u,e.s),t!==vS?t:void 0}function _c(t,e,n){if(Iy(e))return e;var r=e[Te];if(!r)return Li(e,function(a,l){return B_(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return wc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=wy(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Li(s,function(a,l){return B_(t,r,i,a,l,n,o)}),wc(t,i,!1),n&&t.u&&Dn("Patches").N(r,n,t.u,t.s)}return r.o}function B_(t,e,n,r,i,s,o){if(ei(i)){var a=_c(t,i,s&&e&&e.i!==3&&!xs(e.R,r)?s.concat(r):void 0);if(gS(n,r,a),!ei(a))return;t.m=!1}else o&&n.add(i);if(lr(i)&&!Iy(i)){if(!t.h.D&&t._<1)return;_c(t,i),e&&e.A.l||wc(t,i)}}function wc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Ey(e,n)}function Yd(t,e){var n=t[Te];return(n?hi(n):t)[e]}function W_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Ar(t){t.P||(t.P=!0,t.l&&Ar(t.l))}function Xd(t){t.o||(t.o=wy(t.t))}function $p(t,e,n){var r=vy(e)?Dn("MapSet").F(e,n):_y(e)?Dn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Mp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Oa;o&&(l=[a],u=No);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Dn("ES5").J(e,n);return(n?n.A:Mp()).p.push(r),r}function P4(t){return ei(t)||dn(22,t),function e(n){if(!lr(n))return n;var r,i=n[Te],s=oo(n);if(i){if(!i.P&&(i.i<4||!Dn("ES5").K(i)))return i.t;i.I=!0,r=H_(n,s),i.I=!1}else r=H_(n,s);return Li(r,function(o,a){i&&A4(i.t,o)===a||gS(r,o,e(a))}),s===3?new Set(r):r}(t)}function H_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return wy(t)}function b4(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Te];return Oa.get(l,s)},set:function(l){var u=this[Te];Oa.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Te];if(!a.P)switch(a.i){case 5:r(a)&&Ar(a);break;case 4:n(a)&&Ar(a)}}}function n(s){for(var o=s.t,a=s.k,l=Ss(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Te){var h=o[c];if(h===void 0&&!xs(o,c))return!0;var d=a[c],m=d&&d[Te];if(m?m.t!==h:!yS(d,h))return!0}}var v=!!o[Te];return l.length!==Ss(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};k4("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),m=0;m<h.length;m++)Object.defineProperty(d,""+m,t(m,!0));return d}var v=_S(h);delete v[Te];for(var _=Ss(v),w=0;w<_.length;w++){var p=_[w];v[p]=t(p,c||!!v[p].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(a,s),u={i:a?5:4,A:o?o.A:Mp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Te,{value:u,writable:!0}),l},S:function(s,o,a){a?ei(o)&&o[Te].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Te];if(c){var h=c.t,d=c.k,m=c.R,v=c.i;if(v===4)Li(d,function(y){y!==Te&&(h[y]!==void 0||xs(h,y)?m[y]||l(d[y]):(m[y]=!0,Ar(c)))}),Li(h,function(y){d[y]!==void 0||xs(d,y)||(m[y]=!1,Ar(c))});else if(v===5){if(r(c)&&(Ar(c),m.length=!0),d.length<h.length)for(var _=d.length;_<h.length;_++)m[_]=!1;else for(var w=h.length;w<d.length;w++)m[w]=!0;for(var p=Math.min(d.length,h.length),f=0;f<p;f++)d.hasOwnProperty(f)||(m[f]=!0),m[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var q_,Na,Ty=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",N4=typeof Map<"u",O4=typeof Set<"u",G_=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",vS=Ty?Symbol.for("immer-nothing"):((q_={})["immer-nothing"]=!0,q_),K_=Ty?Symbol.for("immer-draftable"):"__$immer_draftable",Te=Ty?Symbol.for("immer-state"):"__$immer_state",D4=""+Object.prototype.constructor,Ss=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,_S=Object.getOwnPropertyDescriptors||function(t){var e={};return Ss(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Fp={},Oa={get:function(t,e){if(e===Te)return t;var n=hi(t);if(!xs(n,e))return function(i,s,o){var a,l=W_(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!lr(r)?r:r===Yd(t.t,e)?(Xd(t),t.o[e]=$p(t.A.h,r,t)):r},has:function(t,e){return e in hi(t)},ownKeys:function(t){return Reflect.ownKeys(hi(t))},set:function(t,e,n){var r=W_(hi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Yd(hi(t),e),s=i==null?void 0:i[Te];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(yS(n,i)&&(n!==void 0||xs(t.t,e)))return!0;Xd(t),Ar(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Yd(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Xd(t),Ar(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=hi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){dn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){dn(12)}},No={};Li(Oa,function(t,e){No[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),No.deleteProperty=function(t,e){return No.set.call(this,t,e,void 0)},No.set=function(t,e,n){return Oa.set.call(this,t[0],e,n,t[0])};var L4=function(){function t(n){var r=this;this.O=G_,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(_){var w=this;_===void 0&&(_=a);for(var p=arguments.length,f=Array(p>1?p-1:0),y=1;y<p;y++)f[y-1]=arguments[y];return l.produce(_,function(E){var x;return(x=s).call.apply(x,[w,E].concat(f))})}}var u;if(typeof s!="function"&&dn(6),o!==void 0&&typeof o!="function"&&dn(7),lr(i)){var c=z_(r),h=$p(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?vc(c):Vp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(_){return Kd(c,o),Qd(_,c)},function(_){throw vc(c),_}):(Kd(c,o),Qd(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===vS&&(u=void 0),r.D&&Ey(u,!0),o){var m=[],v=[];Dn("Patches").M(i,u,m,v),o(m,v)}return u}dn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(m){return i.apply(void 0,[m].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){lr(n)||dn(8),ei(n)&&(n=P4(n));var r=z_(this),i=$p(this,n,void 0);return i[Te].C=!0,Vp(r),i},e.finishDraft=function(n,r){var i=n&&n[Te],s=i.A;return Kd(s,r),Qd(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!G_&&dn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Dn("Patches").$;return ei(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),qt=new L4,wS=qt.produce;qt.produceWithPatches.bind(qt);qt.setAutoFreeze.bind(qt);qt.setUseProxies.bind(qt);qt.applyPatches.bind(qt);qt.createDraft.bind(qt);qt.finishDraft.bind(qt);function Da(t){"@babel/helpers - typeof";return Da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Da(t)}function M4(t,e){if(Da(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Da(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function V4(t){var e=M4(t,"string");return Da(e)==="symbol"?e:String(e)}function $4(t,e,n){return e=V4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Y_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q_(Object(n),!0).forEach(function(r){$4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ft(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var X_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Jd=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ec={INIT:"@@redux/INIT"+Jd(),REPLACE:"@@redux/REPLACE"+Jd(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Jd()}};function F4(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function xy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ft(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ft(1));return n(xy)(t,e)}if(typeof t!="function")throw new Error(ft(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(ft(3));return s}function h(_){if(typeof _!="function")throw new Error(ft(4));if(l)throw new Error(ft(5));var w=!0;return u(),a.push(_),function(){if(w){if(l)throw new Error(ft(6));w=!1,u();var f=a.indexOf(_);a.splice(f,1),o=null}}}function d(_){if(!F4(_))throw new Error(ft(7));if(typeof _.type>"u")throw new Error(ft(8));if(l)throw new Error(ft(9));try{l=!0,s=i(s,_)}finally{l=!1}for(var w=o=a,p=0;p<w.length;p++){var f=w[p];f()}return _}function m(_){if(typeof _!="function")throw new Error(ft(10));i=_,d({type:Ec.REPLACE})}function v(){var _,w=h;return _={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(ft(11));function y(){f.next&&f.next(c())}y();var E=w(y);return{unsubscribe:E}}},_[X_]=function(){return this},_}return d({type:Ec.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:m},r[X_]=v,r}function j4(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Ec.INIT});if(typeof r>"u")throw new Error(ft(12));if(typeof n(void 0,{type:Ec.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ft(13))})}function ES(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{j4(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var m=s[d],v=n[m],_=l[m],w=v(_,u);if(typeof w>"u")throw u&&u.type,new Error(ft(14));h[m]=w,c=c||w!==_}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Ic(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function U4(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(ft(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Ic.apply(void 0,a)(i.dispatch),Y_(Y_({},i),{},{dispatch:s})}}}function IS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var TS=IS();TS.withExtraArgument=IS;const J_=TS;var xS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),z4=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Hs=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},B4=Object.defineProperty,W4=Object.defineProperties,H4=Object.getOwnPropertyDescriptors,Z_=Object.getOwnPropertySymbols,q4=Object.prototype.hasOwnProperty,G4=Object.prototype.propertyIsEnumerable,ew=function(t,e,n){return e in t?B4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Hr=function(t,e){for(var n in e||(e={}))q4.call(e,n)&&ew(t,n,e[n]);if(Z_)for(var r=0,i=Z_(e);r<i.length;r++){var n=i[r];G4.call(e,n)&&ew(t,n,e[n])}return t},Zd=function(t,e){return W4(t,H4(e))},K4=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},Q4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ic:Ic.apply(null,arguments)};function Y4(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var X4=function(t){xS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Hs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Hs([void 0],n.concat(this))))},e}(Array),J4=function(t){xS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Hs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Hs([void 0],n.concat(this))))},e}(Array);function jp(t){return lr(t)?wS(t,function(){}):t}function Z4(t){return typeof t=="boolean"}function e$(){return function(e){return t$(e)}}function t$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new X4;return n&&(Z4(n)?r.push(J_):r.push(J_.withExtraArgument(n.extraArgument))),r}var n$=!0;function r$(t){var e=e$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,m;if(typeof i=="function")m=i;else if(Y4(i))m=ES(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(e));var _=U4.apply(void 0,v),w=Ic;l&&(w=Q4(Hr({trace:!n$},typeof l=="object"&&l)));var p=new J4(_),f=p;Array.isArray(d)?f=Hs([_],d):typeof d=="function"&&(f=d(p));var y=w.apply(void 0,f);return xy(m,c,y)}function qr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Hr(Hr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function SS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function i$(t){return typeof t=="function"}function s$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?SS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(i$(t))l=function(){return jp(t())};else{var u=jp(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var m=Hs([s[d.type]],o.filter(function(v){var _=v.matcher;return _(d)}).map(function(v){var _=v.reducer;return _}));return m.filter(function(v){return!!v}).length===0&&(m=[a]),m.reduce(function(v,_){if(_)if(ei(v)){var w=v,p=_(w,d);return p===void 0?v:p}else{if(lr(v))return wS(v,function(f){return _(f,d)});var p=_(v,d);if(p===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return v},h)}return c.getInitialState=l,c}function o$(t,e){return t+"/"+e}function a$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:jp(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=o$(e,c),m,v;"reducer"in h?(m=h.reducer,v=h.prepare):m=h,s[c]=m,o[d]=m,a[c]=v?qr(d,v):qr(d)});function l(){var c=typeof t.extraReducers=="function"?SS(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,m=c[1],v=m===void 0?[]:m,_=c[2],w=_===void 0?void 0:_,p=Hr(Hr({},d),o);return s$(n,function(f){for(var y in p)f.addCase(y,p[y]);for(var E=0,x=v;E<x.length;E++){var C=x[E];f.addMatcher(C.matcher,C.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var l$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",u$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=l$[Math.random()*64|0];return e},c$=["name","message","stack","code"],ef=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),tw=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),h$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=c$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=qr(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:Zd(Hr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=qr(e+"/pending",function(u,c,h){return{payload:void 0,meta:Zd(Hr({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=qr(e+"/rejected",function(u,c,h,d,m){return{payload:d,error:(r&&r.serializeError||h$)(u||"Rejected"),meta:Zd(Hr({},m||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var m=r!=null&&r.idGenerator?r.idGenerator(u):u$(),v=new a,_;function w(f){_=f,v.abort()}var p=function(){return K4(this,null,function(){var f,y,E,x,C,b,N;return z4(this,function(H){switch(H.label){case 0:return H.trys.push([0,4,,5]),x=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),f$(x)?[4,x]:[3,2];case 1:x=H.sent(),H.label=2;case 2:if(x===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(j,me){return v.signal.addEventListener("abort",function(){return me({name:"AbortError",message:_||"Aborted"})})}),c(s(m,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:m,arg:u},{getState:h,extra:d}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:m,signal:v.signal,abort:w,rejectWithValue:function(j,me){return new ef(j,me)},fulfillWithValue:function(j,me){return new tw(j,me)}})).then(function(j){if(j instanceof ef)throw j;return j instanceof tw?i(j.payload,m,u,j.meta):i(j,m,u)})])];case 3:return E=H.sent(),[3,5];case 4:return b=H.sent(),E=b instanceof ef?o(null,m,u,b.payload,b.meta):o(b,m,u),[3,5];case 5:return N=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,N||c(E),[2,E]}})})}();return Object.assign(p,{abort:w,requestId:m,arg:u,unwrap:function(){return p.then(d$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function d$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function f$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Sy="listenerMiddleware";qr(Sy+"/add");qr(Sy+"/removeAll");qr(Sy+"/remove");var nw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);b4();const rw={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Tc=a$({name:"auth",initialState:rw,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>rw,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:AS,authStateChange:ej,authSignOut:p$,adminRole:m$,clearCashList:g$,addToFavoriteList:y$,setFavoriteList:v$,deleteFromFavoriteList:_$}=Tc.actions,w$=({email:t,password:e,userName:n})=>async(r,i)=>{await CN(Ts,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await PN(Ts.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=Ts.currentUser;r(AS({userId:s,userName:o}))},E$=({email:t,password:e})=>async(n,r)=>{kN(Ts,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=Ts.currentUser;n(AS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(m$())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},I$=()=>async(t,e)=>{ON(Ts).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(p$())},T$=()=>(t,e)=>{t(g$())},x$=t=>(e,n)=>{e(y$(t))},S$=t=>async(e,n)=>{const r=aS(ai(Ke,"users",`${t}`,"favoriteList"));hl(r,i=>{const s=[];i.forEach(o=>{s.push({...o.data(),id:o.id})}),e(v$(s))})},A$=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o!==t)return o});e(_$(s))};function C$(t){return Xs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function k$(t){return Xs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function R$(t){return Xs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function Ay(t){return Xs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function P$(t){return Xs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}const b$=R.ul`
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
`,N$=R.li`
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
`,O$=R.div`
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
`,D$=R.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,L$=R(Ay)`
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
`,M$=R(C$)`
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
`,V$=R(P$)`
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
`,$$=R.ul`
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
`,F$=R.li`
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
`,j$=R.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,U$=R.p`
  width: 90%;
`;R.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const z$=R.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,B$=R.div`
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
`,W$=R.div`
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
`,H$=R.h3``,q$=R.div`
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
`,G$=R.div`
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
`,iw=R.button`
  width: 100%;
  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`,K$=R.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,Q$=R.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,Y$=R.div`
  display: flex;
`,X$=R(k$)`
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
`,J$=R(Ay)`
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
`,Z$=R(R$)`
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
`,eF=R.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 9px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`,{addGoodToCashList:tF,removeGoodFromCashList:nF}=Tc.actions,rF=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(tF({id:t,name:e,image:n,price:r}))},iF=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(nF(s))},Hh=({card:t,closeModal:e})=>{const n=dr(),r=ja(),i=fr(pr),s=d=>{d.currentTarget===d.target&&e()},o=d=>{(d.charCode||d.keyCode)===27&&e()},a=async()=>{await fS(gn(Ke,"goods",`${t.id}`)),e()},l=()=>{r(rF(t))},u=async()=>{try{await pS(ai(Ke,"users",`${i.email}`,"favoriteList"),t),alert("Товар добавлено до обраного")}catch(d){console.log(d)}},c=()=>{r(x$(t)),u()},h=()=>{r(A$(t))};return T.useEffect(()=>(document.body.addEventListener("keydown",o),function(){document.body.removeEventListener("keydown",o)}),[]),g.jsx(z$,{onClick:s,children:g.jsx(B$,{onClick:s,children:g.jsxs(W$,{children:[g.jsxs(Y$,{children:[g.jsxs(Q$,{children:[g.jsx(q$,{style:{backgroundImage:`url(${t.image})`}}),g.jsx(iw,{onClick:l,children:"Добавити до покупок"}),i.isLogIn&&(i.favoriteList.includes(t)?g.jsx(K$,{onClick:h,children:"Видалити з обранного"}):g.jsx(iw,{onClick:c,children:"Добавити до обранного"}))]}),g.jsxs(G$,{children:[g.jsx(H$,{children:t.name}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),g.jsx(eF,{children:t.otherInfo})]})]})]}),g.jsx(X$,{onClick:()=>e()}),i.role==="admin"&&g.jsxs(g.Fragment,{children:[g.jsx(J$,{onClick:()=>{a()}}),g.jsx(Z$,{onClick:()=>{n("/admin",{state:t})}})]})]})})})},sF=()=>{const t=fr(pr),[e,n]=T.useState(!1),[r,i]=T.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return g.jsxs(g.Fragment,{children:[g.jsx($$,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>g.jsx(g.Fragment,{children:g.jsx(F$,{onClick:()=>s(a),style:{backgroundImage:`url(${a.image})`},children:g.jsxs(j$,{children:[g.jsx(U$,{children:a.name}),g.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):g.jsx("div",{children:"Список обранного пустий"})}),e&&g.jsx(Hh,{card:r,closeModal:o})]})},oF=({closeUserModal:t,typeModal:e})=>{const[n,r]=T.useState(e),[i,s]=T.useState(!1),[o,a]=T.useState(""),[l,u]=T.useState(""),[c,h]=T.useState(""),[d,m]=T.useState(""),[v,_]=T.useState(""),[w,p]=T.useState(""),[f,y]=T.useState([]),[E,x]=T.useState("info"),C=fr(pr),b=ja(),N=S=>{S.currentTarget===S.target&&t()},H=S=>{(S.charCode||S.keyCode)===27&&t()};T.useEffect(()=>(document.body.addEventListener("keydown",H),function(){document.body.removeEventListener("keydown",H)}),[]);const j=()=>{c===d&&o&&l&&c&&v&&w?(b(w$({email:l,password:c,userName:o})),me({name:o,email:l,password:c,userNumber:v,userPostAdress:w,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},me=async S=>{try{await yc(gn(Ke,"users",`${S.email}`),S),alert("Add user success")}catch(U){console.error("Error adding user: ",U)}},Se=()=>{b(E$({email:l,password:c})),b(S$(l)),t()},Ue=()=>{b(I$()),t()},St=async()=>{const S=await dS(gn(Ke,"users",`${C.email}`));if(S.exists()){const{name:U,userPostAdress:W,userNumber:ae}=S.data();a(U),_(ae),p(W)}else console.log("No such document!")};T.useEffect(()=>{C.email&&St()});const He=()=>{on({name:o,email:C.email,password:c,userNumber:v,userPostAdress:w}),x("info")},on=async S=>{try{await yc(gn(Ke,"users",`${S.email}`),S),alert("Change user success")}catch(U){console.error("Error change user: ",U)}},Ze=async()=>{try{(await x4(aS(ai(Ke,"orders"),w4("userEmail","==",`${C.email}`)))).forEach(U=>{y(W=>[...W,{id:U.id,...U.data()}])}),y(U=>U.sort((W,ae)=>W.postDate>ae.postDate?-1:1)),console.log(f)}catch(S){console.error("Error take orders: ",S)}};return T.useEffect(()=>{Ze()},[b]),g.jsx(n2,{onClick:N,children:g.jsx(r2,{onClick:N,children:g.jsxs(i2,{children:[n==="SignIn"&&g.jsxs(Ll,{id:"userFormSignIn",children:[g.jsx(qi,{children:"Контактні дані"}),g.jsx(In,{required:!0,name:"name",value:o,onChange:S=>{a(S.target.value)},placeholder:"Введіть ФІБ"}),g.jsx(In,{required:!0,name:"email",value:l,onChange:S=>{u(S.target.value)},placeholder:"Введіть контактну електронну адресу"}),g.jsx(In,{required:!0,name:"password",value:c,onChange:S=>{h(S.target.value)},placeholder:"Введіть пароль"}),g.jsx(In,{required:!0,name:"passwordDublicate",value:d,onChange:S=>{m(S.target.value)},placeholder:"Повторіть пароль"}),g.jsx(In,{value:v,onChange:S=>{_(S.target.value)},placeholder:"Введіть контактний номер телефону"}),g.jsx(In,{value:w,onChange:S=>{p(S.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(d0,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Ml,{style:i?{backgroundColor:"red"}:{},onClick:j,children:i?"Невірний пароль або e-mail":"Зареєструватись"})]}),n==="LogIn"&&g.jsxs(Ll,{id:"userFormLogIn",children:[g.jsx(qi,{children:"E-mail:"}),g.jsx(In,{required:!0,name:"email",value:l,onChange:S=>{u(S.target.value)}}),g.jsx(qi,{children:"Пароль:"}),g.jsx(In,{required:!0,name:"password",value:c,onChange:S=>{h(S.target.value)}}),g.jsx(Ml,{onClick:Se,children:"Увійти"})]}),n==="Config"&&g.jsxs(g.Fragment,{children:[g.jsxs(s2,{children:[g.jsx(Nl,{onClick:()=>{x("info")},children:"Користувач"}),g.jsx(Nl,{onClick:()=>{x("change")},children:"Зміна данних"}),g.jsx(Nl,{onClick:()=>{x("favorite")},children:"Обране"}),g.jsx(Nl,{onClick:()=>{x("history")},children:"Історія покупок"})]}),E==="info"&&g.jsxs(Ll,{id:"userFormConfig",children:[g.jsx(qi,{children:"Інформація користувача"}),g.jsxs(o2,{children:[g.jsx(Ol,{children:"Призвіще, ім'я, по батькові:"}),g.jsx(Dl,{children:o}),g.jsx(Ol,{children:"E-mail:"}),g.jsx(Dl,{children:C.email}),g.jsx(Ol,{children:"Номер телефону:"}),g.jsxs(Dl,{children:[" ",v]}),g.jsx(Ol,{children:'Відділення "Нова пошти":'}),g.jsx(Dl,{children:w})]}),g.jsx(Ml,{onClick:Ue,children:"Вийти з аккаунта"})]}),E==="change"&&g.jsxs(Ll,{id:"userFormConfig",children:[g.jsx(qi,{children:"Зміна данних"}),g.jsx(In,{onChange:S=>{_(S.target.value)},placeholder:"Введіть новий номер телефону"}),g.jsx(In,{onChange:S=>{p(S.target.value)},placeholder:"Введіть нову адресу відділення пошти"}),g.jsx(d0,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Ml,{onClick:He,style:i?{backgroundColor:"red"}:{},children:i?"Невірний пароль або e-mail":"Змінити дані"})]}),E==="favorite"&&g.jsx(sF,{}),E==="history"&&g.jsxs(a2,{children:[g.jsx(qi,{children:"Історія покупок"}),g.jsx(h0,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(h0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(c2,{children:f.map(S=>g.jsxs(h2,{style:S.status==="take"?{backgroundColor:"yellow"}:S.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs(Fn,{children:[g.jsxs(Fn,{children:["Статус:",S.status==="create"&&" Замовлення оформлене",S.status==="take"&&" Прийняте",S.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("ua-Ua",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(S.postDate)]}),g.jsxs(Fn,{children:["ФІП: ",S.userFullName]}),g.jsxs(Fn,{children:["Email: ",S.userEmail]}),g.jsxs(Fn,{children:["Номер телефону: ",S.userNumber]}),g.jsxs(Fn,{children:["Адрес Нової почти: ",S.userPostAdress]}),g.jsx(Fn,{children:"Список замовлення:"}),S.cashList.map(U=>g.jsxs(l2,{children:[g.jsx(u2,{style:{backgroundImage:`url(${U.image})`}}),g.jsxs(Fn,{children:["Назва: ",U.name]}),g.jsxs(Fn,{children:["Ціна: ",U.price]})]}))]}))})]})]})]})})})},aF=()=>{const[t,e]=T.useState(!1),[n,r]=T.useState(""),s=fr(pr).isLogIn,o=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[s?g.jsx(g.Fragment,{children:g.jsx(Sd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):g.jsxs(t2,{children:[g.jsx(Sd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),g.jsx(Sd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&g.jsx(oF,{closeUserModal:o,typeModal:n})]})},lF=()=>{const{cashList:t}=fr(pr),e=dr(),n=hr().pathname;return g.jsxs(HP,{children:[g.jsxs(qP,{children:[g.jsx(XP,{}),n!=="/checkout"&&g.jsxs(g.Fragment,{children:[g.jsx(e2,{}),g.jsx(aF,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&g.jsxs(KP,{children:[g.jsx(GP,{onClick:()=>{e("/cashList")}}),g.jsx(QP,{children:t.length})]})]})},uF=()=>g.jsxs(g.Fragment,{children:[g.jsx(lF,{}),g.jsx(T.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(Kk,{})})]}),Cy=R.ul`
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
`,ky=R.li`
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
`,Ry=R.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Py=R.p`
  width: 90%;
`,cF=R.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,hF=R.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,Up=R.select`
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
`,Bn=R.option``,wo=R.input`
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
`,dF=R.textarea`
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
`,CS=R.button`
  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,fF=R(Cy)`
  flex-direction: column;
`,pF=R.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,mF=R.li`
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
`,gF=R.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,yF=R(CS)`
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
`,vF=()=>{const[t,e]=T.useState([]),n=[],r=dr(),[i,s]=T.useState(!1),[o,a]=T.useState(),l=h=>{a(h),s(!0)},u=()=>{s(!1)},c=async()=>{hl(ai(Ke,"goods"),h=>{e(h.docs.map(d=>({...d.data(),id:d.id})))})};return T.useEffect(()=>{c()},[]),t.map(h=>{n.includes(h.category)||n.push(h.category)}),n.sort(),g.jsxs(g.Fragment,{children:[g.jsx(fF,{children:n.map(h=>g.jsxs(mF,{children:[g.jsx(pF,{children:h}),g.jsx(gF,{children:t.map((d,m)=>{if(d.category===h)return g.jsx(ky,{onClick:()=>l(d),style:{backgroundImage:`url(${d.image})`},children:g.jsxs(Ry,{children:[g.jsx(Py,{children:d.name}),g.jsxs("p",{children:[d.price," грн."]})]})},m)})}),g.jsx(yF,{onClick:()=>r("/search",{state:{category:h}}),children:"Побачити більше"})]}))}),i&&g.jsx(Hh,{card:o,closeModal:u})]})},_F=R.div`
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
`,wF=R.input`
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
`,EF=R(Up)`
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
`,IF=R.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,kS=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let vi=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const TF=()=>{const e=hr().state,[n,r]=T.useState([]),[i,s]=T.useState(n),[o,a]=T.useState(!1),[l,u]=T.useState(),[c,h]=T.useState(""),[d,m]=T.useState(e&&e.category?e.category:""),v=p=>{u(p),a(!0)},_=()=>{a(!1)},w=async()=>{hl(ai(Ke,"goods"),p=>{r(p.docs.map(f=>({...f.data(),id:f.id})))})};return T.useEffect(()=>{w()},[]),T.useEffect(()=>{if(c.length>0){let p=n.filter(f=>f.name.toLocaleLowerCase().includes(c.toLocaleLowerCase())&&f.category.toLocaleLowerCase().includes(d.toLocaleLowerCase()));s(p)}else{let p=n.filter(f=>f.category.toLocaleLowerCase().includes(d.toLocaleLowerCase()));s(p)}},[c,d]),g.jsxs(_F,{children:[g.jsx(wF,{placeholder:"Назва товару",onChange:p=>{h(p.target.value)}}),g.jsxs(EF,{id:"category",name:"category",value:d,onChange:p=>{m(p.target.value),console.log(d)},children:[g.jsx(Bn,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},vi()),kS.map((p,f)=>p.category?g.jsx("optgroup",{label:`${p.name}`,children:p.category&&p.category.map(y=>g.jsx(Bn,{value:`${y}`,selected:d===y&&"selected"||null,children:y},vi()))},vi()):g.jsx(Bn,{value:`${p.name}`,style:{fontWeight:"bolder"},selected:d===p.name&&"selected"||null,children:p.name},vi()))]}),g.jsx(Cy,{children:i.length>0?i.map((p,f)=>g.jsx(g.Fragment,{children:g.jsx(ky,{onClick:()=>v(p),style:{backgroundImage:`url(${p.image})`},children:g.jsxs(Ry,{children:[g.jsx(Py,{children:p.name}),g.jsxs("p",{children:[p.price," грн."]})]})},f)})):g.jsx(IF,{children:"Оберіть категорію чи назву товару"})}),o&&g.jsx(Hh,{card:l,closeModal:_})]})},xF=()=>{const[t,e]=T.useState([]),n=()=>{hl(ai(Ke,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})))}),e(t==null?void 0:t.sort((o,a)=>o.postDate>a.postDate?-1:1))},r=async o=>{await fS(gn(Ke,"orders",`${o}`))},i=async o=>{await U_(gn(Ke,"orders",`${o}`),{status:"take"})},s=async o=>{await U_(gn(Ke,"orders",`${o}`),{status:"send"})};return T.useEffect(()=>{n()},[]),g.jsx(b$,{children:t.map(o=>g.jsxs(N$,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),g.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("ua-Ua",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(o.postDate)]}),g.jsxs("p",{children:["ФІП: ",o.userFullName]}),g.jsxs("p",{children:["Email: ",o.userEmail]}),g.jsxs("p",{children:["Номер телефону:",o.userNumber]}),g.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),g.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>g.jsxs(g.Fragment,{children:[g.jsx(O$,{style:{backgroundImage:`url(${a.image})`}}),g.jsxs("p",{children:["Id товару: ",a.id]}),g.jsxs("p",{children:["Назва: ",a.name]}),g.jsxs("p",{children:["Ціна: ",a.price]})]})),g.jsxs(D$,{children:[g.jsx(L$,{onClick:()=>r(o.id)}),g.jsx(M$,{onClick:()=>i(o.id)}),g.jsx(V$,{onClick:()=>s(o.id)})]})]}))})},SF=()=>{const{role:t}=fr(pr),e=dr(),r=hr().state,i=ja(),[s,o]=T.useState(r?r.image:""),[a,l]=T.useState(r?r.name:""),[u,c]=T.useState(r?r.price:""),[h,d]=T.useState(r?r.producent:""),[m,v]=T.useState(r?r.size:""),[_,w]=T.useState(r?r.otherInfo:""),p=async f=>{try{r?(await yc(gn(Ke,"goods",`${f.id}`),f),alert("Change success")):(await pS(ai(Ke,"goods"),f),alert("Add success"))}catch(y){console.error("Error adding document: ",y)}};return T.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(y){y.preventDefault();const{image:E,name:x,price:C,sex:b,producent:N,category:H,size:j,otherInfo:me}=this.elements,Se={image:E.value,name:x.value,price:C.value,sex:b.value||"",producent:N.value||"",category:H.value,size:j.value||"",otherInfo:me.value||"",createTime:new Date};p(Se),this.reset()})},[i]),T.useEffect(()=>{t!="admin"&&e("/")}),g.jsxs(g.Fragment,{children:[g.jsxs(hF,{id:"form",children:[g.jsx("p",{children:"Малюнок"}),g.jsx(wo,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:s,onChange:f=>o(f.target.value)}),g.jsx("p",{children:"Назва"}),g.jsx(wo,{required:!0,name:"name",placeholder:"Додати назву",value:a,onChange:f=>l(f.target.value)}),g.jsx("p",{children:"Ціна в гривнях"}),g.jsx(wo,{required:!0,name:"price",placeholder:"Додати ціну",value:u,onChange:f=>c(f.target.value)}),g.jsx("p",{children:"Категорія"}),g.jsxs(Up,{id:"category",name:"category",children:[g.jsx(Bn,{value:"",children:"Вкажіть категорію"}),kS.map((f,y)=>f.category?g.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>g.jsx(Bn,{value:`${E}`,selected:r&&r.category===E&&"selected"||null,children:E},vi()))},vi()):g.jsx(Bn,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===f.name&&"selected"||null,children:f.name},vi()))]}),g.jsx("p",{children:"Рід"}),g.jsxs(Up,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[g.jsx(Bn,{value:"",children:"Без роду"}),g.jsx(Bn,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),g.jsx(Bn,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),g.jsx("p",{children:"Розмір"}),g.jsx(wo,{name:"size",placeholder:"Додати розмір",value:m,onChange:f=>v(f.target.value)}),g.jsx("p",{children:"Виробник"}),g.jsx(wo,{name:"producent",placeholder:"Додати виробника",value:h,onChange:f=>d(f.target.value)}),g.jsx("p",{children:"Додаткова інформація"}),g.jsx(dF,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:_,onChange:f=>w(f.target.value)}),g.jsx(CS,{children:r?"Зілити зміни":"Залити новий товар"})]}),g.jsx("h3",{children:"Замовлення"}),g.jsx(xF,{})]})},AF=()=>{const[t,e]=T.useState([]),[n,r]=T.useState(!1),[i,s]=T.useState();let o=new Date().getTime()/1e3;const a=c=>{s(c),r(!0)},l=()=>{r(!1)},u=()=>{hl(ai(Ke,"goods"),c=>{e(c.docs.map(h=>({...h.data(),id:h.id})))}),e(t==null?void 0:t.sort((c,h)=>c.createTime>h.createTime?-1:1))};return T.useEffect(()=>{u()},[]),g.jsxs(g.Fragment,{children:[g.jsx(Cy,{id:"card",children:t.length>0&&t.map((c,h)=>g.jsx(g.Fragment,{children:g.jsxs(ky,{onClick:()=>a(c),style:{backgroundImage:`url(${c.image})`},children:[o-c.createTime.seconds<259200&&g.jsx(cF,{children:"Новинка!"}),g.jsxs(Ry,{children:[g.jsx(Py,{children:c.name}),g.jsxs("p",{children:[c.price," грн."]})]})]},c.id)}))}),n&&g.jsx(Hh,{card:i,closeModal:l})]})},CF=R.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,kF=R.div`
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
`,RF=R.div`
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
`,PF=R.li`
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
`,bF=R.div`
  width: 50%;
`,NF=R.h3``,OF=R.p``,DF=R.button`
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
`,LF=R(Ay)`
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
`,MF=R.button`
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
`,VF=()=>{const{cashList:t}=fr(pr),e=ja(),n=dr();return g.jsxs(kF,{children:[g.jsx(CF,{children:"Список товарів"}),t.length>0?g.jsxs(g.Fragment,{children:[t.map((r,i)=>g.jsxs(PF,{children:[g.jsx(RF,{style:{backgroundImage:`url(${r.image})`}}),g.jsxs(bF,{children:[g.jsx(NF,{children:r.name}),g.jsxs(OF,{children:[r.price," грн."]})]}),g.jsx(DF,{onClick:()=>e(iF(i)),children:g.jsx(LF,{})})]})),g.jsx(MF,{onClick:()=>n("/checkout"),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},$F=R.div`
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
`,FF=R.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,Kl=R.input`
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
`,jF=R.div`
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
`,UF=R.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,sw=R.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,zF=()=>{const t=fr(pr),[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),u=ja(),c=dr(),h=async()=>{const m=await dS(gn(Ke,"users",`${t.email}`));if(m.exists()){const{name:v,userPostAdress:_,userNumber:w,email:p}=m.data();o(p),n(v),i(w),l(_)}else console.log("No such document!")};T.useEffect(()=>{t.email&&h()},[t]);const d=async()=>{try{await yc(gn(Ke,"orders",`${new Date}`),{userFullName:e,userNumber:r,userEmail:s,userPostAdress:a,postDate:new Date,id:`${s}${new Date}`,status:"create",cashList:t.cashList}),u(T$()),alert("Замовлення відправлене, з вами звяжуться"),c("/")}catch(m){console.log(m)}};return g.jsxs($F,{id:"CheckoutForm",children:[g.jsx(FF,{children:"Контактні дані"}),g.jsx(Kl,{value:e,onChange:m=>{n(m.target.value)},placeholder:"Введіть ФІБ"}),g.jsx(Kl,{value:r,onChange:m=>{i(m.target.value)},placeholder:"Введіть контактний номер телефону"}),g.jsx(Kl,{value:s,onChange:m=>{o(m.target.value)},placeholder:"Введіть контактну електронну адресу"}),g.jsx(Kl,{value:a,onChange:m=>{l(m.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(jF,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(sw,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(sw,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(UF,{onClick:d,children:"Завершити оформлення замовлення"})]})};function BF(){return g.jsxs(Yk,{children:[g.jsxs(jn,{path:"/",element:g.jsx(uF,{}),children:[g.jsx(jn,{index:!0,element:g.jsx(AF,{})}),g.jsx(jn,{path:"category",element:g.jsx(vF,{})}),g.jsx(jn,{path:"search",element:g.jsx(TF,{})}),g.jsx(jn,{path:"admin",element:g.jsx(SF,{})}),g.jsx(jn,{path:"cashList",element:g.jsx(VF,{})}),g.jsx(jn,{path:"checkout",element:g.jsx(zF,{})})]}),g.jsx(jn,{path:"*",element:g.jsx(Gk,{to:"/"})})]})}var RS="persist/FLUSH",by="persist/REHYDRATE",PS="persist/PAUSE",bS="persist/PERSIST",NS="persist/PURGE",Ny="persist/REGISTER";function ow(t){return qF(t)||HF(t)||WF()}function WF(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function HF(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function qF(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function aw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function zp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?aw(n,!0).forEach(function(r){GF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):aw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function GF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var OS={registry:[],bootstrapped:!1},KF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:OS,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ny:return zp({},e,{registry:[].concat(ow(e.registry),[n.key])});case by:var r=e.registry.indexOf(n.key),i=ow(e.registry);return i.splice(r,1),zp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function QF(t,e,n){var r=n||!1,i=xy(KF,OS,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:Ny,key:u})},o=function(u,c,h){var d={type:by,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=zp({},i,{purge:function(){var u=[];return t.dispatch({type:NS,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:RS,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:PS})},persist:function(){t.dispatch({type:bS,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const YF=ES({[Tc.name]:Tc.reducer}),DS=r$({reducer:YF,middleware:t=>t({serializableCheck:{ignoredActions:[RS,by,PS,bS,NS,Ny]}})});QF(DS);tf.createRoot(document.getElementById("root")).render(g.jsx(Lt.StrictMode,{children:g.jsx(tR,{basename:"Oleg_Shop",children:g.jsx(eP,{store:DS,children:g.jsx(BF,{})})})}));
