var GS=Object.defineProperty;var KS=(t,e,n)=>e in t?GS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Jh=(t,e,n)=>(KS(t,typeof e!="symbol"?e+"":e,n),n);function QS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Qp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ww={exports:{}},Ac={},Ew={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),YS=Symbol.for("react.portal"),XS=Symbol.for("react.fragment"),JS=Symbol.for("react.strict_mode"),ZS=Symbol.for("react.profiler"),eC=Symbol.for("react.provider"),tC=Symbol.for("react.context"),nC=Symbol.for("react.forward_ref"),rC=Symbol.for("react.suspense"),iC=Symbol.for("react.memo"),sC=Symbol.for("react.lazy"),qy=Symbol.iterator;function oC(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var Iw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tw=Object.assign,xw={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=xw,this.updater=n||Iw}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sw(){}Sw.prototype=Ys.prototype;function Yp(t,e,n){this.props=t,this.context=e,this.refs=xw,this.updater=n||Iw}var Xp=Yp.prototype=new Sw;Xp.constructor=Yp;Tw(Xp,Ys.prototype);Xp.isPureReactComponent=!0;var Gy=Array.isArray,Cw=Object.prototype.hasOwnProperty,Jp={current:null},Aw={key:!0,ref:!0,__self:!0,__source:!0};function kw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cw.call(e,r)&&!Aw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:Jp.current}}function aC(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function lC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ky=/\/+/g;function Zh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lC(""+t.key):e.toString(36)}function Jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case YS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zh(o,0):r,Gy(i)?(n="",t!=null&&(n=t.replace(Ky,"$&/")+"/"),Jl(i,e,n,"",function(u){return u})):i!=null&&(Zp(i)&&(i=aC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ky,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zh(s,a);o+=Jl(s,e,n,l,i)}else if(l=oC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zh(s,a++),o+=Jl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gl(t,e,n){if(t==null)return t;var r=[],i=0;return Jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Zl={transition:null},cC={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Jp};se.Children={map:gl,forEach:function(t,e,n){gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gl(t,function(){e++}),e},toArray:function(t){return gl(t,function(e){return e})||[]},only:function(t){if(!Zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ys;se.Fragment=XS;se.Profiler=ZS;se.PureComponent=Yp;se.StrictMode=JS;se.Suspense=rC;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cC;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cw.call(e,l)&&!Aw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:tC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eC,_context:t},t.Consumer=t};se.createElement=kw;se.createFactory=function(t){var e=kw.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:nC,render:t}};se.isValidElement=Zp;se.lazy=function(t){return{$$typeof:sC,_payload:{_status:-1,_result:t},_init:uC}};se.memo=function(t,e){return{$$typeof:iC,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return Nt.current.useCallback(t,e)};se.useContext=function(t){return Nt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Nt.current.useEffect(t,e)};se.useId=function(){return Nt.current.useId()};se.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Nt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};se.useRef=function(t){return Nt.current.useRef(t)};se.useState=function(t){return Nt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Nt.current.useTransition()};se.version="18.2.0";Ew.exports=se;var I=Ew.exports;const Pt=Qp(I),Qy=QS({__proto__:null,default:Pt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hC=I,dC=Symbol.for("react.element"),fC=Symbol.for("react.fragment"),pC=Object.prototype.hasOwnProperty,mC=hC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gC={key:!0,ref:!0,__self:!0,__source:!0};function Rw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pC.call(e,r)&&!gC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dC,type:t,key:s,ref:o,props:i,_owner:mC.current}}Ac.Fragment=fC;Ac.jsx=Rw;Ac.jsxs=Rw;ww.exports=Ac;var g=ww.exports,lf={},Pw={exports:{}},Kt={},bw={exports:{}},Nw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,W){var G=N.length;N.push(W);e:for(;0<G;){var pe=G-1>>>1,L=N[pe];if(0<i(L,W))N[pe]=W,N[G]=L,G=pe;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var W=N[0],G=N.pop();if(G!==W){N[0]=G;e:for(var pe=0,L=N.length,$=L>>>1;pe<$;){var j=2*(pe+1)-1,Q=N[j],T=j+1,re=N[T];if(0>i(Q,G))T<L&&0>i(re,Q)?(N[pe]=re,N[T]=G,pe=T):(N[pe]=Q,N[j]=G,pe=j);else if(T<L&&0>i(re,G))N[pe]=re,N[T]=G,pe=T;else break e}}return W}function i(N,W){var G=N.sortIndex-W.sortIndex;return G!==0?G:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=N)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(N){if(_=!1,y(N),!v)if(n(l)!==null)v=!0,Xt(x);else{var W=n(u);W!==null&&rt(E,W.startTime-N)}}function x(N,W){v=!1,_&&(_=!1,m(P),P=-1),p=!0;var G=d;try{for(y(W),h=n(l);h!==null&&(!(h.expirationTime>W)||N&&!z());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var L=pe(h.expirationTime<=W);W=t.unstable_now(),typeof L=="function"?h.callback=L:h===n(l)&&r(l),y(W)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var j=n(u);j!==null&&rt(E,j.startTime-W),$=!1}return $}finally{h=null,d=G,p=!1}}var C=!1,b=null,P=-1,q=5,V=-1;function z(){return!(t.unstable_now()-V<q)}function fe(){if(b!==null){var N=t.unstable_now();V=N;var W=!0;try{W=b(!0,N)}finally{W?Oe():(C=!1,b=null)}}else C=!1}var Oe;if(typeof f=="function")Oe=function(){f(fe)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Se=Ve.port2;Ve.port1.onmessage=fe,Oe=function(){Se.postMessage(null)}}else Oe=function(){w(fe,0)};function Xt(N){b=N,C||(C=!0,Oe())}function rt(N,W){P=w(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Xt(x))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var G=d;d=W;try{return N()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=d;d=N;try{return W()}finally{d=G}},t.unstable_scheduleCallback=function(N,W,G){var pe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?pe+G:pe):G=pe,N){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=G+L,N={id:c++,callback:W,priorityLevel:N,startTime:G,expirationTime:L,sortIndex:-1},G>pe?(N.sortIndex=G,e(u,N),n(l)===null&&N===n(u)&&(_?(m(P),P=-1):_=!0,rt(E,G-pe))):(N.sortIndex=L,e(l,N),v||p||(v=!0,Xt(x))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var W=d;return function(){var G=d;d=W;try{return N.apply(this,arguments)}finally{d=G}}}})(Nw);bw.exports=Nw;var yC=bw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow=I,Ht=yC;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dw=new Set,ea={};function $i(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(ea[t]=e,t=0;t<e.length;t++)Dw.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,vC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yy={},Xy={};function _C(t){return uf.call(Xy,t)?!0:uf.call(Yy,t)?!1:vC.test(t)?Xy[t]=!0:(Yy[t]=!0,!1)}function wC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EC(t,e,n,r){if(e===null||typeof e>"u"||wC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var em=/[\-:]([a-z])/g;function tm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(em,tm);ht[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(em,tm);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(em,tm);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function nm(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EC(e,n,i,r)&&(n=null),r||i===null?_C(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),Lw=Symbol.for("react.provider"),Mw=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),sm=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),Vw=Symbol.for("react.offscreen"),Jy=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Jy&&t[Jy]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,ed;function Co(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function IC(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case cf:return"Profiler";case rm:return"StrictMode";case hf:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mw:return(t.displayName||"Context")+".Consumer";case Lw:return(t._context.displayName||"Context")+".Provider";case im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sm:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function TC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===rm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xC(t){var e=$w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=xC(t))}function jw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fw(t,e){e=e.checked,e!=null&&nm(t,"checked",e,!1)}function mf(t,e){Fw(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&gf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ev(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gf(t,e,n){(e!=="number"||wu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Ao(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function Uw(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,Bw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SC=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(t){SC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$o[e]=$o[t]})});function Ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$o.hasOwnProperty(t)&&$o[t]?(""+e).trim():e+"px"}function Hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CC=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(CC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,gs=null,ys=null;function rv(t){if(t=Ba(t)){if(typeof If!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Nc(e),If(t.stateNode,t.type,e))}}function qw(t){gs?ys?ys.push(t):ys=[t]:gs=t}function Gw(){if(gs){var t=gs,e=ys;if(ys=gs=null,rv(t),e)for(t=0;t<e.length;t++)rv(e[t])}}function Kw(t,e){return t(e)}function Qw(){}var rd=!1;function Yw(t,e,n){if(rd)return t(e,n);rd=!0;try{return Kw(t,e,n)}finally{rd=!1,(gs!==null||ys!==null)&&(Qw(),Gw())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Tf=!1;if(tr)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Tf=!1}function AC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var jo=!1,Eu=null,Iu=!1,xf=null,kC={onError:function(t){jo=!0,Eu=t}};function RC(t,e,n,r,i,s,o,a,l){jo=!1,Eu=null,AC.apply(kC,arguments)}function PC(t,e,n,r,i,s,o,a,l){if(RC.apply(this,arguments),jo){if(jo){var u=Eu;jo=!1,Eu=null}else throw Error(k(198));Iu||(Iu=!0,xf=u)}}function ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function iv(t){if(ji(t)!==t)throw Error(k(188))}function bC(t){var e=t.alternate;if(!e){if(e=ji(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return iv(i),t;if(s===r)return iv(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Jw(t){return t=bC(t),t!==null?Zw(t):null}function Zw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zw(t);if(e!==null)return e;t=t.sibling}return null}var e1=Ht.unstable_scheduleCallback,sv=Ht.unstable_cancelCallback,NC=Ht.unstable_shouldYield,OC=Ht.unstable_requestPaint,je=Ht.unstable_now,DC=Ht.unstable_getCurrentPriorityLevel,am=Ht.unstable_ImmediatePriority,t1=Ht.unstable_UserBlockingPriority,Tu=Ht.unstable_NormalPriority,LC=Ht.unstable_LowPriority,n1=Ht.unstable_IdlePriority,kc=null,Pn=null;function MC(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:jC,VC=Math.log,$C=Math.LN2;function jC(t){return t>>>=0,t===0?32:31-(VC(t)/$C|0)|0}var wl=64,El=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ko(a):(s&=o,s!==0&&(r=ko(s)))}else o=n&~i,o!==0?r=ko(o):s!==0&&(r=ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function FC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r1(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function zC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function i1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s1,um,o1,a1,l1,Cf=!1,Il=[],Or=null,Dr=null,Lr=null,ra=new Map,ia=new Map,Er=[],BC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ov(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ba(e),e!==null&&um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WC(t,e,n,r,i){switch(e){case"focusin":return Or=go(Or,t,e,n,r,i),!0;case"dragenter":return Dr=go(Dr,t,e,n,r,i),!0;case"mouseover":return Lr=go(Lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ra.set(s,go(ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ia.set(s,go(ia.get(s)||null,t,e,n,r,i)),!0}return!1}function u1(t){var e=fi(t.target);if(e!==null){var n=ji(e);if(n!==null){if(e=n.tag,e===13){if(e=Xw(n),e!==null){t.blockedOn=e,l1(t.priority,function(){o1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ef=r,n.target.dispatchEvent(r),Ef=null}else return e=Ba(n),e!==null&&um(e),t.blockedOn=n,!1;e.shift()}return!0}function av(t,e,n){eu(t)&&n.delete(e)}function HC(){Cf=!1,Or!==null&&eu(Or)&&(Or=null),Dr!==null&&eu(Dr)&&(Dr=null),Lr!==null&&eu(Lr)&&(Lr=null),ra.forEach(av),ia.forEach(av)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Cf||(Cf=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,HC)))}function sa(t){function e(i){return yo(i,t)}if(0<Il.length){yo(Il[0],t);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&yo(Or,t),Dr!==null&&yo(Dr,t),Lr!==null&&yo(Lr,t),ra.forEach(e),ia.forEach(e),n=0;n<Er.length;n++)r=Er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Er.length&&(n=Er[0],n.blockedOn===null);)u1(n),n.blockedOn===null&&Er.shift()}var vs=dr.ReactCurrentBatchConfig,Su=!0;function qC(t,e,n,r){var i=me,s=vs.transition;vs.transition=null;try{me=1,cm(t,e,n,r)}finally{me=i,vs.transition=s}}function GC(t,e,n,r){var i=me,s=vs.transition;vs.transition=null;try{me=4,cm(t,e,n,r)}finally{me=i,vs.transition=s}}function cm(t,e,n,r){if(Su){var i=Af(t,e,n,r);if(i===null)pd(t,e,r,Cu,n),ov(t,r);else if(WC(i,t,e,n,r))r.stopPropagation();else if(ov(t,r),e&4&&-1<BC.indexOf(t)){for(;i!==null;){var s=Ba(i);if(s!==null&&s1(s),s=Af(t,e,n,r),s===null&&pd(t,e,r,Cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pd(t,e,r,null,n)}}var Cu=null;function Af(t,e,n,r){if(Cu=null,t=om(r),t=fi(t),t!==null)if(e=ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cu=t,null}function c1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DC()){case am:return 1;case t1:return 4;case Tu:case LC:return 16;case n1:return 536870912;default:return 16}default:return 16}}var kr=null,hm=null,tu=null;function h1(){if(tu)return tu;var t,e=hm,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tu=i.slice(t,1<r?1-r:void 0)}function nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function lv(){return!1}function Qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:lv,this.isPropagationStopped=lv,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dm=Qt(Xs),za=be({},Xs,{view:0,detail:0}),KC=Qt(za),sd,od,vo,Rc=be({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(sd=t.screenX-vo.screenX,od=t.screenY-vo.screenY):od=sd=0,vo=t),sd)},movementY:function(t){return"movementY"in t?t.movementY:od}}),uv=Qt(Rc),QC=be({},Rc,{dataTransfer:0}),YC=Qt(QC),XC=be({},za,{relatedTarget:0}),ad=Qt(XC),JC=be({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),ZC=Qt(JC),eA=be({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tA=Qt(eA),nA=be({},Xs,{data:0}),cv=Qt(nA),rA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sA[t])?!!e[t]:!1}function fm(){return oA}var aA=be({},za,{key:function(t){if(t.key){var e=rA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fm,charCode:function(t){return t.type==="keypress"?nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lA=Qt(aA),uA=be({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hv=Qt(uA),cA=be({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fm}),hA=Qt(cA),dA=be({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fA=Qt(dA),pA=be({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mA=Qt(pA),gA=[9,13,27,32],pm=tr&&"CompositionEvent"in window,Fo=null;tr&&"documentMode"in document&&(Fo=document.documentMode);var yA=tr&&"TextEvent"in window&&!Fo,d1=tr&&(!pm||Fo&&8<Fo&&11>=Fo),dv=String.fromCharCode(32),fv=!1;function f1(t,e){switch(t){case"keyup":return gA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function vA(t,e){switch(t){case"compositionend":return p1(e);case"keypress":return e.which!==32?null:(fv=!0,dv);case"textInput":return t=e.data,t===dv&&fv?null:t;default:return null}}function _A(t,e){if(ns)return t==="compositionend"||!pm&&f1(t,e)?(t=h1(),tu=hm=kr=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d1&&e.locale!=="ko"?null:e.data;default:return null}}var wA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wA[t.type]:e==="textarea"}function m1(t,e,n,r){qw(r),e=Au(e,"onChange"),0<e.length&&(n=new dm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Uo=null,oa=null;function EA(t){C1(t,0)}function Pc(t){var e=ss(t);if(jw(e))return t}function IA(t,e){if(t==="change")return e}var g1=!1;if(tr){var ld;if(tr){var ud="oninput"in document;if(!ud){var mv=document.createElement("div");mv.setAttribute("oninput","return;"),ud=typeof mv.oninput=="function"}ld=ud}else ld=!1;g1=ld&&(!document.documentMode||9<document.documentMode)}function gv(){Uo&&(Uo.detachEvent("onpropertychange",y1),oa=Uo=null)}function y1(t){if(t.propertyName==="value"&&Pc(oa)){var e=[];m1(e,oa,t,om(t)),Yw(EA,e)}}function TA(t,e,n){t==="focusin"?(gv(),Uo=e,oa=n,Uo.attachEvent("onpropertychange",y1)):t==="focusout"&&gv()}function xA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(oa)}function SA(t,e){if(t==="click")return Pc(e)}function CA(t,e){if(t==="input"||t==="change")return Pc(e)}function AA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:AA;function aa(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uf.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function yv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vv(t,e){var n=yv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yv(n)}}function v1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _1(){for(var t=window,e=wu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wu(t.document)}return e}function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kA(t){var e=_1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v1(n.ownerDocument.documentElement,n)){if(r!==null&&mm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vv(n,s);var o=vv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RA=tr&&"documentMode"in document&&11>=document.documentMode,rs=null,kf=null,zo=null,Rf=!1;function _v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||rs==null||rs!==wu(r)||(r=rs,"selectionStart"in r&&mm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&aa(zo,r)||(zo=r,r=Au(kf,"onSelect"),0<r.length&&(e=new dm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},cd={},w1={};tr&&(w1=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function bc(t){if(cd[t])return cd[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w1)return cd[t]=e[n];return t}var E1=bc("animationend"),I1=bc("animationiteration"),T1=bc("animationstart"),x1=bc("transitionend"),S1=new Map,wv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(t,e){S1.set(t,e),$i(e,[t])}for(var hd=0;hd<wv.length;hd++){var dd=wv[hd],PA=dd.toLowerCase(),bA=dd[0].toUpperCase()+dd.slice(1);ri(PA,"on"+bA)}ri(E1,"onAnimationEnd");ri(I1,"onAnimationIteration");ri(T1,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(x1,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Ev(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PC(r,e,void 0,t),t.currentTarget=null}function C1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ev(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ev(i,a,u),s=l}}}if(Iu)throw t=xf,Iu=!1,xf=null,t}function we(t,e){var n=e[Df];n===void 0&&(n=e[Df]=new Set);var r=t+"__bubble";n.has(r)||(A1(e,t,2,!1),n.add(r))}function fd(t,e,n){var r=0;e&&(r|=4),A1(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[Sl]){t[Sl]=!0,Dw.forEach(function(n){n!=="selectionchange"&&(NA.has(n)||fd(n,!1,t),fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,fd("selectionchange",!1,e))}}function A1(t,e,n,r){switch(c1(e)){case 1:var i=qC;break;case 4:i=GC;break;default:i=cm}n=i.bind(null,e,n,t),i=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Yw(function(){var u=s,c=om(n),h=[];e:{var d=S1.get(t);if(d!==void 0){var p=dm,v=t;switch(t){case"keypress":if(nu(n)===0)break e;case"keydown":case"keyup":p=lA;break;case"focusin":v="focus",p=ad;break;case"focusout":v="blur",p=ad;break;case"beforeblur":case"afterblur":p=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hA;break;case E1:case I1:case T1:p=ZC;break;case x1:p=fA;break;case"scroll":p=KC;break;case"wheel":p=mA;break;case"copy":case"cut":case"paste":p=tA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hv}var _=(e&4)!==0,w=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=na(f,m),E!=null&&_.push(ua(f,E,y)))),w)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ef&&(v=n.relatedTarget||n.fromElement)&&(fi(v)||v[nr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?fi(v):null,v!==null&&(w=ji(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=uv,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=hv,E="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:ss(p),y=v==null?d:ss(v),d=new _(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,E=null,fi(c)===u&&(_=new _(m,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,E=_),w=E,p&&v)t:{for(_=p,m=v,f=0,y=_;y;y=Qi(y))f++;for(y=0,E=m;E;E=Qi(E))y++;for(;0<f-y;)_=Qi(_),f--;for(;0<y-f;)m=Qi(m),y--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=Qi(_),m=Qi(m)}_=null}else _=null;p!==null&&Iv(h,d,p,_,!1),v!==null&&w!==null&&Iv(h,w,v,_,!0)}}e:{if(d=u?ss(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var x=IA;else if(pv(d))if(g1)x=CA;else{x=xA;var C=TA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=SA);if(x&&(x=x(t,u))){m1(h,x,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&gf(d,"number",d.value)}switch(C=u?ss(u):window,t){case"focusin":(pv(C)||C.contentEditable==="true")&&(rs=C,kf=u,zo=null);break;case"focusout":zo=kf=rs=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,_v(h,n,c);break;case"selectionchange":if(RA)break;case"keydown":case"keyup":_v(h,n,c)}var b;if(pm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ns?f1(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(d1&&n.locale!=="ko"&&(ns||P!=="onCompositionStart"?P==="onCompositionEnd"&&ns&&(b=h1()):(kr=c,hm="value"in kr?kr.value:kr.textContent,ns=!0)),C=Au(u,P),0<C.length&&(P=new cv(P,t,null,n,c),h.push({event:P,listeners:C}),b?P.data=b:(b=p1(n),b!==null&&(P.data=b)))),(b=yA?vA(t,n):_A(t,n))&&(u=Au(u,"onBeforeInput"),0<u.length&&(c=new cv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}C1(h,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Au(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=na(t,n),s!=null&&r.unshift(ua(t,s,i)),s=na(t,e),s!=null&&r.push(ua(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Iv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=na(n,s),l!=null&&o.unshift(ua(n,l,a))):i||(l=na(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OA=/\r\n?/g,DA=/\u0000|\uFFFD/g;function Tv(t){return(typeof t=="string"?t:""+t).replace(OA,`
`).replace(DA,"")}function Cl(t,e,n){if(e=Tv(e),Tv(t)!==e&&n)throw Error(k(425))}function ku(){}var Pf=null,bf=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,LA=typeof clearTimeout=="function"?clearTimeout:void 0,xv=typeof Promise=="function"?Promise:void 0,MA=typeof queueMicrotask=="function"?queueMicrotask:typeof xv<"u"?function(t){return xv.resolve(null).then(t).catch(VA)}:Of;function VA(t){setTimeout(function(){throw t})}function md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Js,ca="__reactProps$"+Js,nr="__reactContainer$"+Js,Df="__reactEvents$"+Js,$A="__reactListeners$"+Js,jA="__reactHandles$"+Js;function fi(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sv(t);t!==null;){if(n=t[Cn])return n;t=Sv(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[Cn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Nc(t){return t[ca]||null}var Lf=[],os=-1;function ii(t){return{current:t}}function Te(t){0>os||(t.current=Lf[os],Lf[os]=null,os--)}function _e(t,e){os++,Lf[os]=t.current,t.current=e}var Yr={},St=ii(Yr),Vt=ii(!1),Si=Yr;function bs(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Ru(){Te(Vt),Te(St)}function Cv(t,e,n){if(St.current!==Yr)throw Error(k(168));_e(St,e),_e(Vt,n)}function k1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,TC(t)||"Unknown",i));return be({},n,r)}function Pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Si=St.current,_e(St,t),_e(Vt,Vt.current),!0}function Av(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=k1(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,Te(Vt),Te(St),_e(St,t)):Te(Vt),_e(Vt,n)}var Hn=null,Oc=!1,gd=!1;function R1(t){Hn===null?Hn=[t]:Hn.push(t)}function FA(t){Oc=!0,R1(t)}function si(){if(!gd&&Hn!==null){gd=!0;var t=0,e=me;try{var n=Hn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,Oc=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),e1(am,si),i}finally{me=e,gd=!1}}return null}var as=[],ls=0,bu=null,Nu=0,Jt=[],Zt=0,Ci=null,Gn=1,Kn="";function ui(t,e){as[ls++]=Nu,as[ls++]=bu,bu=t,Nu=e}function P1(t,e,n){Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Ci,Ci=t;var r=Gn;t=Kn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-yn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function gm(t){t.return!==null&&(ui(t,1),P1(t,1,0))}function ym(t){for(;t===bu;)bu=as[--ls],as[ls]=null,Nu=as[--ls],as[ls]=null;for(;t===Ci;)Ci=Jt[--Zt],Jt[Zt]=null,Kn=Jt[--Zt],Jt[Zt]=null,Gn=Jt[--Zt],Jt[Zt]=null}var Wt=null,zt=null,ke=!1,pn=null;function b1(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function Mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(ke){var e=zt;if(e){var n=e;if(!kv(t,e)){if(Mf(t))throw Error(k(418));e=Mr(n.nextSibling);var r=Wt;e&&kv(t,e)?b1(r,n):(t.flags=t.flags&-4097|2,ke=!1,Wt=t)}}else{if(Mf(t))throw Error(k(418));t.flags=t.flags&-4097|2,ke=!1,Wt=t}}}function Rv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Al(t){if(t!==Wt)return!1;if(!ke)return Rv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=zt)){if(Mf(t))throw N1(),Error(k(418));for(;e;)b1(t,e),e=Mr(e.nextSibling)}if(Rv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?Mr(t.stateNode.nextSibling):null;return!0}function N1(){for(var t=zt;t;)t=Mr(t.nextSibling)}function Ns(){zt=Wt=null,ke=!1}function vm(t){pn===null?pn=[t]:pn.push(t)}var UA=dr.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ou=ii(null),Du=null,us=null,_m=null;function wm(){_m=us=Du=null}function Em(t){var e=Ou.current;Te(Ou),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Du=t,_m=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(_m!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Du===null)throw Error(k(308));us=t,Du.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var pi=null;function Im(t){pi===null?pi=[t]:pi.push(t)}function O1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Im(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,Im(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lm(t,n)}}function Pv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lu(t,e,n,r){var i=t.updateQueue;wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=be({},h,d);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ki|=o,t.lanes=o,t.memoizedState=h}}function bv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var L1=new Ow.Component().refs;function jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=jr(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(vn(e,t,i,r),ru(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=jr(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(vn(e,t,i,r),ru(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=jr(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(vn(e,t,r,n),ru(e,t,r))}};function Nv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,r)||!aa(i,s):!0}function M1(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=$t(e)?Si:St.current,r=e.contextTypes,s=(r=r!=null)?bs(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ov(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=L1,Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=$t(e)?Si:St.current,i.context=bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dc.enqueueReplaceState(i,i.state,null),Lu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===L1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dv(t){var e=t._init;return e(t._payload)}function V1(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Fr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,E){return f===null||f.tag!==6?(f=Td(y,m.mode,E),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,E){var x=y.type;return x===ts?c(m,f,y.props.children,E,y.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===_r&&Dv(x)===f.type)?(E=i(f,y.props),E.ref=_o(m,f,y),E.return=m,E):(E=uu(y.type,y.key,y.props,null,m.mode,E),E.ref=_o(m,f,y),E.return=m,E)}function u(m,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=xd(y,m.mode,E),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,E,x){return f===null||f.tag!==7?(f=Ei(y,m.mode,E,x),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Td(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case yl:return y=uu(f.type,f.key,f.props,null,m.mode,y),y.ref=_o(m,null,f),y.return=m,y;case es:return f=xd(f,m.mode,y),f.return=m,f;case _r:var E=f._init;return h(m,E(f._payload),y)}if(Ao(f)||po(f))return f=Ei(f,m.mode,y,null),f.return=m,f;kl(m,f)}return null}function d(m,f,y,E){var x=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(m,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return y.key===x?l(m,f,y,E):null;case es:return y.key===x?u(m,f,y,E):null;case _r:return x=y._init,d(m,f,x(y._payload),E)}if(Ao(y)||po(y))return x!==null?null:c(m,f,y,E,null);kl(m,y)}return null}function p(m,f,y,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(f,m,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case yl:return m=m.get(E.key===null?y:E.key)||null,l(f,m,E,x);case es:return m=m.get(E.key===null?y:E.key)||null,u(f,m,E,x);case _r:var C=E._init;return p(m,f,y,C(E._payload),x)}if(Ao(E)||po(E))return m=m.get(y)||null,c(f,m,E,x,null);kl(f,E)}return null}function v(m,f,y,E){for(var x=null,C=null,b=f,P=f=0,q=null;b!==null&&P<y.length;P++){b.index>P?(q=b,b=null):q=b.sibling;var V=d(m,b,y[P],E);if(V===null){b===null&&(b=q);break}t&&b&&V.alternate===null&&e(m,b),f=s(V,f,P),C===null?x=V:C.sibling=V,C=V,b=q}if(P===y.length)return n(m,b),ke&&ui(m,P),x;if(b===null){for(;P<y.length;P++)b=h(m,y[P],E),b!==null&&(f=s(b,f,P),C===null?x=b:C.sibling=b,C=b);return ke&&ui(m,P),x}for(b=r(m,b);P<y.length;P++)q=p(b,m,P,y[P],E),q!==null&&(t&&q.alternate!==null&&b.delete(q.key===null?P:q.key),f=s(q,f,P),C===null?x=q:C.sibling=q,C=q);return t&&b.forEach(function(z){return e(m,z)}),ke&&ui(m,P),x}function _(m,f,y,E){var x=po(y);if(typeof x!="function")throw Error(k(150));if(y=x.call(y),y==null)throw Error(k(151));for(var C=x=null,b=f,P=f=0,q=null,V=y.next();b!==null&&!V.done;P++,V=y.next()){b.index>P?(q=b,b=null):q=b.sibling;var z=d(m,b,V.value,E);if(z===null){b===null&&(b=q);break}t&&b&&z.alternate===null&&e(m,b),f=s(z,f,P),C===null?x=z:C.sibling=z,C=z,b=q}if(V.done)return n(m,b),ke&&ui(m,P),x;if(b===null){for(;!V.done;P++,V=y.next())V=h(m,V.value,E),V!==null&&(f=s(V,f,P),C===null?x=V:C.sibling=V,C=V);return ke&&ui(m,P),x}for(b=r(m,b);!V.done;P++,V=y.next())V=p(b,m,P,V.value,E),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?P:V.key),f=s(V,f,P),C===null?x=V:C.sibling=V,C=V);return t&&b.forEach(function(fe){return e(m,fe)}),ke&&ui(m,P),x}function w(m,f,y,E){if(typeof y=="object"&&y!==null&&y.type===ts&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:e:{for(var x=y.key,C=f;C!==null;){if(C.key===x){if(x=y.type,x===ts){if(C.tag===7){n(m,C.sibling),f=i(C,y.props.children),f.return=m,m=f;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===_r&&Dv(x)===C.type){n(m,C.sibling),f=i(C,y.props),f.ref=_o(m,C,y),f.return=m,m=f;break e}n(m,C);break}else e(m,C);C=C.sibling}y.type===ts?(f=Ei(y.props.children,m.mode,E,y.key),f.return=m,m=f):(E=uu(y.type,y.key,y.props,null,m.mode,E),E.ref=_o(m,f,y),E.return=m,m=E)}return o(m);case es:e:{for(C=y.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=xd(y,m.mode,E),f.return=m,m=f}return o(m);case _r:return C=y._init,w(m,f,C(y._payload),E)}if(Ao(y))return v(m,f,y,E);if(po(y))return _(m,f,y,E);kl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Td(y,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return w}var Os=V1(!0),$1=V1(!1),Wa={},bn=ii(Wa),ha=ii(Wa),da=ii(Wa);function mi(t){if(t===Wa)throw Error(k(174));return t}function xm(t,e){switch(_e(da,e),_e(ha,t),_e(bn,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}Te(bn),_e(bn,e)}function Ds(){Te(bn),Te(ha),Te(da)}function j1(t){mi(da.current);var e=mi(bn.current),n=vf(e,t.type);e!==n&&(_e(ha,t),_e(bn,n))}function Sm(t){ha.current===t&&(Te(bn),Te(ha))}var Re=ii(0);function Mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yd=[];function Cm(){for(var t=0;t<yd.length;t++)yd[t]._workInProgressVersionPrimary=null;yd.length=0}var iu=dr.ReactCurrentDispatcher,vd=dr.ReactCurrentBatchConfig,Ai=0,Pe=null,Ke=null,Je=null,Vu=!1,Bo=!1,fa=0,zA=0;function dt(){throw Error(k(321))}function Am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function km(t,e,n,r,i,s){if(Ai=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,iu.current=t===null||t.memoizedState===null?qA:GA,t=n(r,i),Bo){s=0;do{if(Bo=!1,fa=0,25<=s)throw Error(k(301));s+=1,Je=Ke=null,e.updateQueue=null,iu.current=KA,t=n(r,i)}while(Bo)}if(iu.current=$u,e=Ke!==null&&Ke.next!==null,Ai=0,Je=Ke=Pe=null,Vu=!1,e)throw Error(k(300));return t}function Rm(){var t=fa!==0;return fa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Pe.memoizedState=Je=t:Je=Je.next=t,Je}function on(){if(Ke===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Je===null?Pe.memoizedState:Je.next;if(e!==null)Je=e,Ke=t;else{if(t===null)throw Error(k(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Pe.memoizedState=Je=t:Je=Je.next=t}return Je}function pa(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=on(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Pe.lanes|=c,ki|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_n(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=on(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F1(){}function U1(t,e){var n=Pe,r=on(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Mt=!0),r=r.queue,Pm(W1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ma(9,B1.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(k(349));Ai&30||z1(n,e,i)}return i}function z1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B1(t,e,n,r){e.value=n,e.getSnapshot=r,H1(e)&&q1(t)}function W1(t,e,n){return n(function(){H1(e)&&q1(t)})}function H1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function q1(t){var e=rr(t,1);e!==null&&vn(e,t,1,-1)}function Lv(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=HA.bind(null,Pe,t),[e.memoizedState,t]}function ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G1(){return on().memoizedState}function su(t,e,n,r){var i=Sn();Pe.flags|=t,i.memoizedState=ma(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&Am(r,o.deps)){i.memoizedState=ma(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=ma(1|e,n,s,r)}function Mv(t,e){return su(8390656,8,t,e)}function Pm(t,e){return Lc(2048,8,t,e)}function K1(t,e){return Lc(4,2,t,e)}function Q1(t,e){return Lc(4,4,t,e)}function Y1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X1(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,Y1.bind(null,e,t),n)}function bm(){}function J1(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z1(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function eE(t,e,n){return Ai&21?(_n(n,e)||(n=r1(),Pe.lanes|=n,ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function BA(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=vd.transition;vd.transition={};try{t(!1),e()}finally{me=n,vd.transition=r}}function tE(){return on().memoizedState}function WA(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nE(t))rE(e,n);else if(n=O1(t,e,n,r),n!==null){var i=bt();vn(n,t,r,i),iE(n,e,r)}}function HA(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nE(t))rE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var l=e.interleaved;l===null?(i.next=i,Im(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=O1(t,e,i,r),n!==null&&(i=bt(),vn(n,t,r,i),iE(n,e,r))}}function nE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function rE(t,e){Bo=Vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lm(t,n)}}var $u={readContext:sn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},qA={readContext:sn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Mv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,su(4194308,4,Y1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return su(4194308,4,t,e)},useInsertionEffect:function(t,e){return su(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WA.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Lv,useDebugValue:bm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Lv(!1),e=t[0];return t=BA.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Sn();if(ke){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ze===null)throw Error(k(349));Ai&30||z1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mv(W1.bind(null,r,s,t),[t]),r.flags|=2048,ma(9,B1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ze.identifierPrefix;if(ke){var n=Kn,r=Gn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GA={readContext:sn,useCallback:J1,useContext:sn,useEffect:Pm,useImperativeHandle:X1,useInsertionEffect:K1,useLayoutEffect:Q1,useMemo:Z1,useReducer:_d,useRef:G1,useState:function(){return _d(pa)},useDebugValue:bm,useDeferredValue:function(t){var e=on();return eE(e,Ke.memoizedState,t)},useTransition:function(){var t=_d(pa)[0],e=on().memoizedState;return[t,e]},useMutableSource:F1,useSyncExternalStore:U1,useId:tE,unstable_isNewReconciler:!1},KA={readContext:sn,useCallback:J1,useContext:sn,useEffect:Pm,useImperativeHandle:X1,useInsertionEffect:K1,useLayoutEffect:Q1,useMemo:Z1,useReducer:wd,useRef:G1,useState:function(){return wd(pa)},useDebugValue:bm,useDeferredValue:function(t){var e=on();return Ke===null?e.memoizedState=t:eE(e,Ke.memoizedState,t)},useTransition:function(){var t=wd(pa)[0],e=on().memoizedState;return[t,e]},useMutableSource:F1,useSyncExternalStore:U1,useId:tE,unstable_isNewReconciler:!1};function Ls(t,e){try{var n="",r=e;do n+=IC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QA=typeof WeakMap=="function"?WeakMap:Map;function sE(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fu||(Fu=!0,Xf=r),Uf(t,e)},n}function oE(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uk.bind(null,t,e,n),e.then(t,t))}function $v(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var YA=dr.ReactCurrentOwner,Mt=!1;function kt(t,e,n,r){e.child=t===null?$1(e,null,n,r):Os(e,t.child,n,r)}function Fv(t,e,n,r,i){n=n.render;var s=e.ref;return _s(e,i),r=km(t,e,n,r,s,i),n=Rm(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(ke&&n&&gm(e),e.flags|=1,kt(t,e,r,i),e.child)}function Uv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,aE(t,e,s,r,i)):(t=uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=Fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function aE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(aa(s,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return zf(t,e,n,r,i)}function lE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(hs,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(hs,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(hs,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(hs,Ut),Ut|=r;return kt(t,e,i,n),e.child}function uE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,r,i){var s=$t(n)?Si:St.current;return s=bs(e,s),_s(e,i),n=km(t,e,n,r,s,i),r=Rm(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(ke&&r&&gm(e),e.flags|=1,kt(t,e,n,i),e.child)}function zv(t,e,n,r,i){if($t(n)){var s=!0;Pu(e)}else s=!1;if(_s(e,i),e.stateNode===null)ou(t,e),M1(e,n,r),Ff(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=$t(n)?Si:St.current,u=bs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ov(e,o,r,u),wr=!1;var d=e.memoizedState;o.state=d,Lu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Vt.current||wr?(typeof c=="function"&&(jf(e,n,c,r),l=e.memoizedState),(a=wr||Nv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=$t(n)?Si:St.current,l=bs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ov(e,o,r,l),wr=!1,d=e.memoizedState,o.state=d,Lu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Vt.current||wr?(typeof p=="function"&&(jf(e,n,p,r),v=e.memoizedState),(u=wr||Nv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Bf(t,e,n,r,s,i)}function Bf(t,e,n,r,i,s){uE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Av(e,n,!1),ir(t,e,s);r=e.stateNode,YA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Av(e,n,!0),e.child}function cE(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),xm(t,e.containerInfo)}function Bv(t,e,n,r,i){return Ns(),vm(i),e.flags|=256,kt(t,e,n,r),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function hE(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Re,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=Wf,t):Nm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return XA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,r}return s=t.child,t=s.sibling,r=Fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nm(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rl(t,e,n,r){return r!==null&&vm(r),Os(e,t.child,null,n),t=Nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ed(Error(k(422))),Rl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return Rl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Ed(s,r,void 0),Rl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Mt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),vn(r,t,i,-1))}return $m(),r=Ed(Error(k(421))),Rl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ck.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Mr(i.nextSibling),Wt=e,ke=!0,pn=null,t!==null&&(Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Ci,Gn=t.id,Kn=t.overflow,Ci=e),e=Nm(e,r.children),e.flags|=4096,e)}function Wv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$f(t.return,e,n)}function Id(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wv(t,n,e);else if(t.tag===19)Wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Id(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Id(e,!0,n,null,s);break;case"together":Id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ou(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JA(t,e,n){switch(e.tag){case 3:cE(e),Ns();break;case 5:j1(e);break;case 1:$t(e.type)&&Pu(e);break;case 4:xm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?hE(t,e,n):(_e(Re,Re.current&1),t=ir(t,e,n),t!==null?t.sibling:null);_e(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,lE(t,e,n)}return ir(t,e,n)}var fE,qf,pE,mE;fE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qf=function(){};pE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(bn.current);var s=null;switch(n){case"input":i=pf(t,i),r=pf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=yf(t,i),r=yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ku)}_f(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mE=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZA(t,e,n){var r=e.pendingProps;switch(ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return $t(e.type)&&Ru(),ft(e),null;case 3:return r=e.stateNode,Ds(),Te(Vt),Te(St),Cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(ep(pn),pn=null))),qf(t,e),ft(e),null;case 5:Sm(e);var i=mi(da.current);if(n=e.type,t!==null&&e.stateNode!=null)pE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ft(e),null}if(t=mi(bn.current),Al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[ca]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)we(Ro[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Zy(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":tv(r,s),we("invalid",r)}_f(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,a,t),i=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":vl(r),ev(r,s,!0);break;case"textarea":vl(r),nv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[ca]=r,fE(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)we(Ro[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Zy(t,r),i=pf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),we("invalid",t);break;case"textarea":tv(t,r),i=yf(t,r),we("invalid",t);break;default:i=r}_f(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&nm(t,s,l,o))}switch(n){case"input":vl(t),ev(t,r,!1);break;case"textarea":vl(t),nv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)mE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=mi(da.current),mi(bn.current),Al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return ft(e),null;case 13:if(Te(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&zt!==null&&e.mode&1&&!(e.flags&128))N1(),Ns(),e.flags|=98560,s=!1;else if(s=Al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Cn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else pn!==null&&(ep(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Qe===0&&(Qe=3):$m())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Ds(),qf(t,e),t===null&&la(e.stateNode.containerInfo),ft(e),null;case 10:return Em(e.type._context),ft(e),null;case 17:return $t(e.type)&&Ru(),ft(e),null;case 19:if(Te(Re),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wo(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mu(t),o!==null){for(e.flags|=128,wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>Ms&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return ft(e),null}else 2*je()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Re.current,_e(Re,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function ek(t,e){switch(ym(e),e.tag){case 1:return $t(e.type)&&Ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),Te(Vt),Te(St),Cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sm(e),null;case 13:if(Te(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Re),null;case 4:return Ds(),null;case 10:return Em(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var Pl=!1,yt=!1,tk=typeof WeakSet=="function"?WeakSet:Set,U=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Gf(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Hv=!1;function nk(t,e){if(Pf=Su,t=_1(),mm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:t,selectionRange:n},Su=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:dn(e.type,_),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){Le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return v=Hv,Hv=!1,v}function Wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gf(e,n,s)}i=i.next}while(i!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gE(t){var e=t.alternate;e!==null&&(t.alternate=null,gE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[ca],delete e[Df],delete e[$A],delete e[jA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yE(t){return t.tag===5||t.tag===3||t.tag===4}function qv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var ot=null,fn=!1;function yr(t,e,n){for(n=n.child;n!==null;)vE(t,e,n),n=n.sibling}function vE(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:yt||cs(n,e);case 6:var r=ot,i=fn;ot=null,yr(t,e,n),ot=r,fn=i,ot!==null&&(fn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(fn?(t=ot,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),sa(t)):md(ot,n.stateNode));break;case 4:r=ot,i=fn,ot=n.stateNode.containerInfo,fn=!0,yr(t,e,n),ot=r,fn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gf(n,e,o),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!yt&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,yr(t,e,n),yt=r):yr(t,e,n);break;default:yr(t,e,n)}}function Gv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tk),e.forEach(function(r){var i=hk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,fn=!1;break e;case 3:ot=a.stateNode.containerInfo,fn=!0;break e;case 4:ot=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(ot===null)throw Error(k(160));vE(s,o,i),ot=null,fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_E(e,t),e=e.sibling}function _E(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Tn(t),r&4){try{Wo(3,t,t.return),Mc(3,t)}catch(_){Le(t,t.return,_)}try{Wo(5,t,t.return)}catch(_){Le(t,t.return,_)}}break;case 1:hn(e,t),Tn(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(hn(e,t),Tn(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{ta(i,"")}catch(_){Le(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fw(i,s),wf(a,o);var u=wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Hw(i,h):c==="dangerouslySetInnerHTML"?Bw(i,h):c==="children"?ta(i,h):nm(i,c,h,u)}switch(a){case"input":mf(i,s);break;case"textarea":Uw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ms(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ms(i,!!s.multiple,s.defaultValue,!0):ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[ca]=s}catch(_){Le(t,t.return,_)}}break;case 6:if(hn(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Le(t,t.return,_)}}break;case 3:if(hn(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(_){Le(t,t.return,_)}break;case 4:hn(e,t),Tn(t);break;case 13:hn(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lm=je())),r&4&&Gv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||c,hn(e,t),yt=u):hn(e,t),Tn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:Wo(4,d,d.return);break;case 1:cs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Le(r,n,_)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){Qv(h);continue}}p!==null?(p.return=d,U=p):Qv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ww("display",o))}catch(_){Le(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Le(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:hn(e,t),Tn(t),r&4&&Gv(t);break;case 21:break;default:hn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var s=qv(t);Yf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qv(t);Qf(t,a,o);break;default:throw Error(k(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rk(t,e,n){U=t,wE(t)}function wE(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=Pl;var u=yt;if(Pl=o,(yt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?Yv(i):l!==null?(l.return=o,U=l):Yv(i);for(;s!==null;)U=s,wE(s),s=s.sibling;U=i,Pl=a,yt=u}Kv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):Kv(t)}}function Kv(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}yt||e.flags&512&&Kf(e)}catch(d){Le(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function Qv(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function Yv(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Kf(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var ik=Math.ceil,ju=dr.ReactCurrentDispatcher,Om=dr.ReactCurrentOwner,nn=dr.ReactCurrentBatchConfig,le=0,Ze=null,We=null,ut=0,Ut=0,hs=ii(0),Qe=0,ga=null,ki=0,Vc=0,Dm=0,Ho=null,Dt=null,Lm=0,Ms=1/0,Wn=null,Fu=!1,Xf=null,$r=null,bl=!1,Rr=null,Uu=0,qo=0,Jf=null,au=-1,lu=0;function bt(){return le&6?je():au!==-1?au:au=je()}function jr(t){return t.mode&1?le&2&&ut!==0?ut&-ut:UA.transition!==null?(lu===0&&(lu=r1()),lu):(t=me,t!==0||(t=window.event,t=t===void 0?16:c1(t.type)),t):1}function vn(t,e,n,r){if(50<qo)throw qo=0,Jf=null,Error(k(185));Ua(t,n,r),(!(le&2)||t!==Ze)&&(t===Ze&&(!(le&2)&&(Vc|=n),Qe===4&&Ir(t,ut)),jt(t,r),n===1&&le===0&&!(e.mode&1)&&(Ms=je()+500,Oc&&si()))}function jt(t,e){var n=t.callbackNode;UC(t,e);var r=xu(t,t===Ze?ut:0);if(r===0)n!==null&&sv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sv(n),e===1)t.tag===0?FA(Xv.bind(null,t)):R1(Xv.bind(null,t)),MA(function(){!(le&6)&&si()}),n=null;else{switch(i1(r)){case 1:n=am;break;case 4:n=t1;break;case 16:n=Tu;break;case 536870912:n=n1;break;default:n=Tu}n=kE(n,EE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function EE(t,e){if(au=-1,lu=0,le&6)throw Error(k(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var r=xu(t,t===Ze?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zu(t,r);else{e=r;var i=le;le|=2;var s=TE();(Ze!==t||ut!==e)&&(Wn=null,Ms=je()+500,wi(t,e));do try{ak();break}catch(a){IE(t,a)}while(1);wm(),ju.current=s,le=i,We!==null?e=0:(Ze=null,ut=0,e=Qe)}if(e!==0){if(e===2&&(i=Sf(t),i!==0&&(r=i,e=Zf(t,i))),e===1)throw n=ga,wi(t,0),Ir(t,r),jt(t,je()),n;if(e===6)Ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!sk(i)&&(e=zu(t,r),e===2&&(s=Sf(t),s!==0&&(r=s,e=Zf(t,s))),e===1))throw n=ga,wi(t,0),Ir(t,r),jt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ci(t,Dt,Wn);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=Lm+500-je(),10<e)){if(xu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(ci.bind(null,t,Dt,Wn),e);break}ci(t,Dt,Wn);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){t.timeoutHandle=Of(ci.bind(null,t,Dt,Wn),r);break}ci(t,Dt,Wn);break;case 5:ci(t,Dt,Wn);break;default:throw Error(k(329))}}}return jt(t,je()),t.callbackNode===n?EE.bind(null,t):null}function Zf(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=zu(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&ep(e)),t}function ep(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function sk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~Dm,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Xv(t){if(le&6)throw Error(k(327));ws();var e=xu(t,0);if(!(e&1))return jt(t,je()),null;var n=zu(t,e);if(t.tag!==0&&n===2){var r=Sf(t);r!==0&&(e=r,n=Zf(t,r))}if(n===1)throw n=ga,wi(t,0),Ir(t,e),jt(t,je()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ci(t,Dt,Wn),jt(t,je()),null}function Mm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ms=je()+500,Oc&&si())}}function Ri(t){Rr!==null&&Rr.tag===0&&!(le&6)&&ws();var e=le;le|=1;var n=nn.transition,r=me;try{if(nn.transition=null,me=1,t)return t()}finally{me=r,nn.transition=n,le=e,!(le&6)&&si()}}function Vm(){Ut=hs.current,Te(hs)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LA(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ru();break;case 3:Ds(),Te(Vt),Te(St),Cm();break;case 5:Sm(r);break;case 4:Ds();break;case 13:Te(Re);break;case 19:Te(Re);break;case 10:Em(r.type._context);break;case 22:case 23:Vm()}n=n.return}if(Ze=t,We=t=Fr(t.current,null),ut=Ut=e,Qe=0,ga=null,Dm=Vc=ki=0,Dt=Ho=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function IE(t,e){do{var n=We;try{if(wm(),iu.current=$u,Vu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vu=!1}if(Ai=0,Je=Ke=Pe=null,Bo=!1,fa=0,Om.current=null,n===null||n.return===null){Qe=1,ga=e,We=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=$v(o);if(p!==null){p.flags&=-257,jv(p,o,a,s,e),p.mode&1&&Vv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Vv(s,u,e),$m();break e}l=Error(k(426))}}else if(ke&&a.mode&1){var w=$v(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),jv(w,o,a,s,e),vm(Ls(l,a));break e}}s=l=Ls(l,a),Qe!==4&&(Qe=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=sE(s,l,e);Pv(s,m);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($r===null||!$r.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=oE(s,a,e);Pv(s,E);break e}}s=s.return}while(s!==null)}SE(n)}catch(x){e=x,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function TE(){var t=ju.current;return ju.current=$u,t===null?$u:t}function $m(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Ze===null||!(ki&268435455)&&!(Vc&268435455)||Ir(Ze,ut)}function zu(t,e){var n=le;le|=2;var r=TE();(Ze!==t||ut!==e)&&(Wn=null,wi(t,e));do try{ok();break}catch(i){IE(t,i)}while(1);if(wm(),le=n,ju.current=r,We!==null)throw Error(k(261));return Ze=null,ut=0,Qe}function ok(){for(;We!==null;)xE(We)}function ak(){for(;We!==null&&!NC();)xE(We)}function xE(t){var e=AE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?SE(t):We=e,Om.current=null}function SE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ek(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,We=null;return}}else if(n=ZA(n,e,Ut),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Qe===0&&(Qe=5)}function ci(t,e,n){var r=me,i=nn.transition;try{nn.transition=null,me=1,lk(t,e,n,r)}finally{nn.transition=i,me=r}return null}function lk(t,e,n,r){do ws();while(Rr!==null);if(le&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zC(t,s),t===Ze&&(We=Ze=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,kE(Tu,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=me;me=1;var a=le;le|=4,Om.current=null,nk(t,n),_E(n,t),kA(bf),Su=!!Pf,bf=Pf=null,t.current=n,rk(n),OC(),le=a,me=o,nn.transition=s}else t.current=n;if(bl&&(bl=!1,Rr=t,Uu=i),s=t.pendingLanes,s===0&&($r=null),MC(n.stateNode),jt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fu)throw Fu=!1,t=Xf,Xf=null,t;return Uu&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===Jf?qo++:(qo=0,Jf=t):qo=0,si(),null}function ws(){if(Rr!==null){var t=i1(Uu),e=nn.transition,n=me;try{if(nn.transition=null,me=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,Uu=0,le&6)throw Error(k(331));var i=le;for(le|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Wo(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(gE(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,U=y;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(x){Le(a,a.return,x)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(le=i,si(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(kc,t)}catch{}r=!0}return r}finally{me=n,nn.transition=e}}return!1}function Jv(t,e,n){e=Ls(n,e),e=sE(t,e,1),t=Vr(t,e,1),e=bt(),t!==null&&(Ua(t,1,e),jt(t,e))}function Le(t,e,n){if(t.tag===3)Jv(t,t,n);else for(;e!==null;){if(e.tag===3){Jv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Ls(n,t),t=oE(e,t,1),e=Vr(e,t,1),t=bt(),e!==null&&(Ua(e,1,t),jt(e,t));break}}e=e.return}}function uk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(ut&n)===n&&(Qe===4||Qe===3&&(ut&130023424)===ut&&500>je()-Lm?wi(t,0):Dm|=n),jt(t,e)}function CE(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var n=bt();t=rr(t,e),t!==null&&(Ua(t,e,n),jt(t,n))}function ck(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),CE(t,n)}function hk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),CE(t,n)}var AE;AE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,JA(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,ke&&e.flags&1048576&&P1(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ou(t,e),t=e.pendingProps;var i=bs(e,St.current);_s(e,n),i=km(null,e,r,t,i,n);var s=Rm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=Dc,e.stateNode=i,i._reactInternals=e,Ff(e,r,t,n),e=Bf(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&gm(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ou(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fk(r),t=dn(r,t),i){case 0:e=zf(null,e,r,t,n);break e;case 1:e=zv(null,e,r,t,n);break e;case 11:e=Fv(null,e,r,t,n);break e;case 14:e=Uv(null,e,r,dn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),zf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),zv(t,e,r,i,n);case 3:e:{if(cE(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D1(t,e),Lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ls(Error(k(423)),e),e=Bv(t,e,r,n,i);break e}else if(r!==i){i=Ls(Error(k(424)),e),e=Bv(t,e,r,n,i);break e}else for(zt=Mr(e.stateNode.containerInfo.firstChild),Wt=e,ke=!0,pn=null,n=$1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),r===i){e=ir(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return j1(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nf(r,i)?o=null:s!==null&&Nf(r,s)&&(e.flags|=32),uE(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return hE(t,e,n);case 4:return xm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Fv(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Ou,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Vt.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Zn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_s(e,n),i=sn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),Uv(t,e,r,i,n);case 15:return aE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),ou(t,e),e.tag=1,$t(r)?(t=!0,Pu(e)):t=!1,_s(e,n),M1(e,r,i),Ff(e,r,i,n),Bf(null,e,r,!0,t,n);case 19:return dE(t,e,n);case 22:return lE(t,e,n)}throw Error(k(156,e.tag))};function kE(t,e){return e1(t,e)}function dk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new dk(t,e,n,r)}function jm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fk(t){if(typeof t=="function")return jm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===im)return 11;if(t===sm)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Ei(n.children,i,s,e);case rm:o=8,i|=8;break;case cf:return t=tn(12,n,e,i|2),t.elementType=cf,t.lanes=s,t;case hf:return t=tn(13,n,e,i),t.elementType=hf,t.lanes=s,t;case df:return t=tn(19,n,e,i),t.elementType=df,t.lanes=s,t;case Vw:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lw:o=10;break e;case Mw:o=9;break e;case im:o=11;break e;case sm:o=14;break e;case _r:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=tn(22,t,r,e),t.elementType=Vw,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fm(t,e,n,r,i,s,o,a,l){return t=new pk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function mk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function RE(t){if(!t)return Yr;t=t._reactInternals;e:{if(ji(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if($t(n))return k1(t,n,e)}return e}function PE(t,e,n,r,i,s,o,a,l){return t=Fm(n,r,!0,t,i,s,o,a,l),t.context=RE(null),n=t.current,r=bt(),i=jr(n),s=Zn(r,i),s.callback=e??null,Vr(n,s,i),t.current.lanes=i,Ua(t,i,r),jt(t,r),t}function jc(t,e,n,r){var i=e.current,s=bt(),o=jr(i);return n=RE(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,o),t!==null&&(vn(t,i,o,s),ru(t,i,o)),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Um(t,e){Zv(t,e),(t=t.alternate)&&Zv(t,e)}function gk(){return null}var bE=typeof reportError=="function"?reportError:function(t){console.error(t)};function zm(t){this._internalRoot=t}Fc.prototype.render=zm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));jc(t,e,null,null)};Fc.prototype.unmount=zm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){jc(null,t,null,null)}),e[nr]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=a1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Er.length&&e!==0&&e<Er[n].priority;n++);Er.splice(n,0,t),n===0&&u1(t)}};function Bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function e0(){}function yk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bu(o);s.call(u)}}var o=PE(e,r,t,0,null,!1,!1,"",e0);return t._reactRootContainer=o,t[nr]=o.current,la(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bu(l);a.call(u)}}var l=Fm(t,0,!1,null,null,!1,!1,"",e0);return t._reactRootContainer=l,t[nr]=l.current,la(t.nodeType===8?t.parentNode:t),Ri(function(){jc(e,l,n,r)}),l}function zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bu(o);a.call(l)}}jc(e,o,t,i)}else o=yk(n,e,t,i,r);return Bu(o)}s1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(lm(e,n|1),jt(e,je()),!(le&6)&&(Ms=je()+500,si()))}break;case 13:Ri(function(){var r=rr(t,1);if(r!==null){var i=bt();vn(r,t,1,i)}}),Um(t,1)}};um=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=bt();vn(e,t,134217728,n)}Um(t,134217728)}};o1=function(t){if(t.tag===13){var e=jr(t),n=rr(t,e);if(n!==null){var r=bt();vn(n,t,e,r)}Um(t,e)}};a1=function(){return me};l1=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};If=function(t,e,n){switch(e){case"input":if(mf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(k(90));jw(r),mf(r,i)}}}break;case"textarea":Uw(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};Kw=Mm;Qw=Ri;var vk={usingClientEntryPoint:!1,Events:[Ba,ss,Nc,qw,Gw,Mm]},Eo={findFiberByHostInstance:fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_k={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jw(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{kc=Nl.inject(_k),Pn=Nl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bm(e))throw Error(k(200));return mk(t,e,null,n)};Kt.createRoot=function(t,e){if(!Bm(t))throw Error(k(299));var n=!1,r="",i=bE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fm(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,la(t.nodeType===8?t.parentNode:t),new zm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Jw(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Ri(t)};Kt.hydrate=function(t,e,n){if(!Uc(e))throw Error(k(200));return zc(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Bm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=PE(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,la(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fc(e)};Kt.render=function(t,e,n){if(!Uc(e))throw Error(k(200));return zc(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Uc(t))throw Error(k(40));return t._reactRootContainer?(Ri(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Mm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return zc(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";function NE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NE)}catch(t){console.error(t)}}NE(),Pw.exports=Kt;var OE=Pw.exports,t0=OE;lf.createRoot=t0.createRoot,lf.hydrateRoot=t0.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}var Pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pr||(Pr={}));const n0="popstate";function wk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return tp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wu(i)}return Ik(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ek(){return Math.random().toString(36).substr(2,8)}function r0(t,e){return{usr:t.state,key:t.key,idx:e}}function tp(t,e,n,r){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||Ek()})}function Wu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ik(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ya({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Pr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:m})}function d(w,m){a=Pr.Push;let f=tp(_.location,w,m);n&&n(f,w),u=c()+1;let y=r0(f,u),E=_.createHref(f);try{o.pushState(y,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,m){a=Pr.Replace;let f=tp(_.location,w,m);n&&n(f,w),u=c();let y=r0(f,u),E=_.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Wu(w);return Ue(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(n0,h),l=w,()=>{i.removeEventListener(n0,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(w){return o.go(w)}};return _}var i0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(i0||(i0={}));function Tk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zs(e):e,i=Hm(r.pathname||"/",n);if(i==null)return null;let s=DE(t);xk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ok(s[a],Mk(i));return o}function DE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ur([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),DE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:bk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of LE(s.path))i(s,o,l)}),e}function LE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=LE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Nk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sk=/^:\w+$/,Ck=3,Ak=2,kk=1,Rk=10,Pk=-2,s0=t=>t==="*";function bk(t,e){let n=t.split("/"),r=n.length;return n.some(s0)&&(r+=Pk),e&&(r+=Ak),n.filter(i=>!s0(i)).reduce((i,s)=>i+(Sk.test(s)?Ck:s===""?kk:Rk),r)}function Nk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ok(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Dk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Ur([i,c.pathname]),pathnameBase:Fk(Ur([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Ur([i,c.pathnameBase]))}return s}function Dk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Lk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Vk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Lk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Mk(t){try{return decodeURI(t)}catch(e){return Wm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vk(t,e){try{return decodeURIComponent(t)}catch(n){return Wm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Hm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $k(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t;return{pathname:n?n.startsWith("/")?n:jk(n,e):e,search:Uk(r),hash:zk(i)}}function jk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=ya({},t),Ue(!i.pathname||!i.pathname.includes("?"),Sd("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),Sd("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),Sd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=$k(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ur=t=>t.join("/").replace(/\/\/+/g,"/"),Fk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Uk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Bk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ME=["post","put","patch","delete"];new Set(ME);const Wk=["get",...ME];new Set(Wk);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hu.apply(this,arguments)}const Km=I.createContext(null),VE=I.createContext(null),Fi=I.createContext(null),Bc=I.createContext(null),fr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),$E=I.createContext(null);function Hk(t,e){let{relative:n}=e===void 0?{}:e;eo()||Ue(!1);let{basename:r,navigator:i}=I.useContext(Fi),{hash:s,pathname:o,search:a}=Qm(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ur([r,o])),i.createHref({pathname:l,search:a,hash:s})}function eo(){return I.useContext(Bc)!=null}function pr(){return eo()||Ue(!1),I.useContext(Bc).location}function jE(t){I.useContext(Fi).static||I.useLayoutEffect(t)}function mr(){let{isDataRoute:t}=I.useContext(fr);return t?oR():qk()}function qk(){eo()||Ue(!1);let t=I.useContext(Km),{basename:e,navigator:n}=I.useContext(Fi),{matches:r}=I.useContext(fr),{pathname:i}=pr(),s=JSON.stringify(qm(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return jE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Gm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ur([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Gk=I.createContext(null);function Kk(t){let e=I.useContext(fr).outlet;return e&&I.createElement(Gk.Provider,{value:t},e)}function Qm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(fr),{pathname:i}=pr(),s=JSON.stringify(qm(r).map(o=>o.pathnameBase));return I.useMemo(()=>Gm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Qk(t,e){return Yk(t,e)}function Yk(t,e,n){eo()||Ue(!1);let{navigator:r}=I.useContext(Fi),{matches:i}=I.useContext(fr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=pr(),u;if(e){var c;let _=typeof e=="string"?Zs(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Ue(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=Tk(t,{pathname:d}),v=tR(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Ur([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Ur([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?I.createElement(Bc.Provider,{value:{location:Hu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pr.Pop}},v):v}function Xk(){let t=sR(),e=Bk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const Jk=I.createElement(Xk,null);class Zk extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(fr.Provider,{value:this.props.routeContext},I.createElement($E.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eR(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Km);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(fr.Provider,{value:e},r)}function tR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Jk);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=I.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,I.createElement(eR,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(Zk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var np;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(np||(np={}));var va;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(va||(va={}));function nR(t){let e=I.useContext(Km);return e||Ue(!1),e}function rR(t){let e=I.useContext(VE);return e||Ue(!1),e}function iR(t){let e=I.useContext(fr);return e||Ue(!1),e}function FE(t){let e=iR(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function sR(){var t;let e=I.useContext($E),n=rR(va.UseRouteError),r=FE(va.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function oR(){let{router:t}=nR(np.UseNavigateStable),e=FE(va.UseNavigateStable),n=I.useRef(!1);return jE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Hu({fromRouteId:e},s)))},[t,e])}function aR(t){let{to:e,replace:n,state:r,relative:i}=t;eo()||Ue(!1);let{matches:s}=I.useContext(fr),{pathname:o}=pr(),a=mr(),l=Gm(e,qm(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function lR(t){return Kk(t.context)}function Bn(t){Ue(!1)}function uR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pr.Pop,navigator:s,static:o=!1}=t;eo()&&Ue(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=I.useMemo(()=>{let _=Hm(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:I.createElement(Fi.Provider,{value:l},I.createElement(Bc.Provider,{children:n,value:v}))}function cR(t){let{children:e,location:n}=t;return Qk(rp(e),n)}var o0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(o0||(o0={}));new Promise(()=>{});function rp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,rp(r.props.children,s));return}r.type!==Bn&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qu.apply(this,arguments)}function UE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dR(t,e){return t.button===0&&(!e||e==="_self")&&!hR(t)}const fR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],pR=["aria-current","caseSensitive","className","end","style","to","children"],a0="startTransition";function mR(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=wk({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location}),l=I.useCallback(u=>{a0 in Qy?Qy[a0](()=>a(u)):a(u)},[a]);return I.useLayoutEffect(()=>s.listen(l),[s,l]),I.createElement(uR,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const gR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vR=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=UE(e,fR),{basename:d}=I.useContext(Fi),p,v=!1;if(typeof u=="string"&&yR.test(u)&&(p=u,gR))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Hm(y.pathname,d);y.origin===f.origin&&E!=null?u=E+y.search+y.hash:v=!0}catch{}let _=Hk(u,{relative:i}),w=wR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||w(f)}return I.createElement("a",qu({},h,{href:p||_,onClick:v||s?r:m,ref:n,target:l}))}),_R=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=UE(e,pR),h=Qm(l,{relative:c.relative}),d=pr(),p=I.useContext(VE),{navigator:v}=I.useContext(Fi),_=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,w=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,_=_.toLowerCase());let f=w===_||!o&&w.startsWith(_)&&w.charAt(_.length)==="/",y=m!=null&&(m===_||!o&&m.startsWith(_)&&m.charAt(_.length)==="/"),E=f?r:void 0,x;typeof s=="function"?x=s({isActive:f,isPending:y}):x=[s,f?"active":null,y?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:f,isPending:y}):a;return I.createElement(vR,qu({},c,{"aria-current":E,className:x,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:f,isPending:y}):u)});var l0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(l0||(l0={}));var u0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(u0||(u0={}));function wR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=mr(),l=pr(),u=Qm(t,{relative:o});return I.useCallback(c=>{if(dR(c,n)){c.preventDefault();let h=r!==void 0?r:Wu(l)===Wu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var zE={exports:{}},BE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=I;function ER(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var IR=typeof Object.is=="function"?Object.is:ER,TR=Vs.useState,xR=Vs.useEffect,SR=Vs.useLayoutEffect,CR=Vs.useDebugValue;function AR(t,e){var n=e(),r=TR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return SR(function(){i.value=n,i.getSnapshot=e,Cd(i)&&s({inst:i})},[t,n,e]),xR(function(){return Cd(i)&&s({inst:i}),t(function(){Cd(i)&&s({inst:i})})},[t]),CR(n),n}function Cd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!IR(t,n)}catch{return!0}}function kR(t,e){return e()}var RR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kR:AR;BE.useSyncExternalStore=Vs.useSyncExternalStore!==void 0?Vs.useSyncExternalStore:RR;zE.exports=BE;var PR=zE.exports,WE={exports:{}},HE={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=I,bR=PR;function NR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var OR=typeof Object.is=="function"?Object.is:NR,DR=bR.useSyncExternalStore,LR=Wc.useRef,MR=Wc.useEffect,VR=Wc.useMemo,$R=Wc.useDebugValue;HE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=LR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=VR(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return h=v}return h=p}if(v=h,OR(c,p))return v;var _=r(p);return i!==void 0&&i(v,_)?v:(c=p,h=_)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=DR(t,s[0],s[1]);return MR(function(){o.hasValue=!0,o.value=a},[a]),$R(a),a};WE.exports=HE;var jR=WE.exports;function FR(t){t()}let qE=FR;const UR=t=>qE=t,zR=()=>qE;let Ad=null;function BR(){return Ad||(Ad=I.createContext(null)),Ad}const Xr=new Proxy({},new Proxy({},{get(t,e){const n=BR();return(r,...i)=>Reflect[e](n,...i)}}));function Ym(t=Xr){return function(){return I.useContext(t)}}const GE=Ym(),WR=()=>{throw new Error("uSES not initialized!")};let KE=WR;const HR=t=>{KE=t},qR=(t,e)=>t===e;function GR(t=Xr){const e=t===Xr?GE:Ym(t);return function(r,i={}){const{equalityFn:s=qR,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();I.useRef(!0);const p=I.useCallback({[r.name](_){return r(_)}}[r.name],[r,h,o]),v=KE(u.addNestedSub,l.getState,c||l.getState,p,s);return I.useDebugValue(v),v}}const an=GR();var QE={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tt=typeof Symbol=="function"&&Symbol.for,Xm=tt?Symbol.for("react.element"):60103,Jm=tt?Symbol.for("react.portal"):60106,Hc=tt?Symbol.for("react.fragment"):60107,qc=tt?Symbol.for("react.strict_mode"):60108,Gc=tt?Symbol.for("react.profiler"):60114,Kc=tt?Symbol.for("react.provider"):60109,Qc=tt?Symbol.for("react.context"):60110,Zm=tt?Symbol.for("react.async_mode"):60111,Yc=tt?Symbol.for("react.concurrent_mode"):60111,Xc=tt?Symbol.for("react.forward_ref"):60112,Jc=tt?Symbol.for("react.suspense"):60113,KR=tt?Symbol.for("react.suspense_list"):60120,Zc=tt?Symbol.for("react.memo"):60115,eh=tt?Symbol.for("react.lazy"):60116,QR=tt?Symbol.for("react.block"):60121,YR=tt?Symbol.for("react.fundamental"):60117,XR=tt?Symbol.for("react.responder"):60118,JR=tt?Symbol.for("react.scope"):60119;function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Xm:switch(t=t.type,t){case Zm:case Yc:case Hc:case Gc:case qc:case Jc:return t;default:switch(t=t&&t.$$typeof,t){case Qc:case Xc:case eh:case Zc:case Kc:return t;default:return e}}case Jm:return e}}}function YE(t){return Yt(t)===Yc}ye.AsyncMode=Zm;ye.ConcurrentMode=Yc;ye.ContextConsumer=Qc;ye.ContextProvider=Kc;ye.Element=Xm;ye.ForwardRef=Xc;ye.Fragment=Hc;ye.Lazy=eh;ye.Memo=Zc;ye.Portal=Jm;ye.Profiler=Gc;ye.StrictMode=qc;ye.Suspense=Jc;ye.isAsyncMode=function(t){return YE(t)||Yt(t)===Zm};ye.isConcurrentMode=YE;ye.isContextConsumer=function(t){return Yt(t)===Qc};ye.isContextProvider=function(t){return Yt(t)===Kc};ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xm};ye.isForwardRef=function(t){return Yt(t)===Xc};ye.isFragment=function(t){return Yt(t)===Hc};ye.isLazy=function(t){return Yt(t)===eh};ye.isMemo=function(t){return Yt(t)===Zc};ye.isPortal=function(t){return Yt(t)===Jm};ye.isProfiler=function(t){return Yt(t)===Gc};ye.isStrictMode=function(t){return Yt(t)===qc};ye.isSuspense=function(t){return Yt(t)===Jc};ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Hc||t===Yc||t===Gc||t===qc||t===Jc||t===KR||typeof t=="object"&&t!==null&&(t.$$typeof===eh||t.$$typeof===Zc||t.$$typeof===Kc||t.$$typeof===Qc||t.$$typeof===Xc||t.$$typeof===YR||t.$$typeof===XR||t.$$typeof===JR||t.$$typeof===QR)};ye.typeOf=Yt;QE.exports=ye;var eg=QE.exports,tg=eg,ZR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},XE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ng={};ng[tg.ForwardRef]=tP;ng[tg.Memo]=XE;function c0(t){return tg.isMemo(t)?XE:ng[t.$$typeof]||ZR}var nP=Object.defineProperty,rP=Object.getOwnPropertyNames,h0=Object.getOwnPropertySymbols,iP=Object.getOwnPropertyDescriptor,sP=Object.getPrototypeOf,d0=Object.prototype;function JE(t,e,n){if(typeof e!="string"){if(d0){var r=sP(e);r&&r!==d0&&JE(t,r,n)}var i=rP(e);h0&&(i=i.concat(h0(e)));for(var s=c0(t),o=c0(e),a=0;a<i.length;++a){var l=i[a];if(!eP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=iP(e,l);try{nP(t,l,u)}catch{}}}}return t}var oP=JE;const aP=Qp(oP);var ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=Symbol.for("react.element"),ig=Symbol.for("react.portal"),th=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),sh=Symbol.for("react.context"),lP=Symbol.for("react.server_context"),oh=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),uh=Symbol.for("react.memo"),ch=Symbol.for("react.lazy"),uP=Symbol.for("react.offscreen"),ZE;ZE=Symbol.for("react.module.reference");function ln(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case rg:switch(t=t.type,t){case th:case rh:case nh:case ah:case lh:return t;default:switch(t=t&&t.$$typeof,t){case lP:case sh:case oh:case ch:case uh:case ih:return t;default:return e}}case ig:return e}}}ve.ContextConsumer=sh;ve.ContextProvider=ih;ve.Element=rg;ve.ForwardRef=oh;ve.Fragment=th;ve.Lazy=ch;ve.Memo=uh;ve.Portal=ig;ve.Profiler=rh;ve.StrictMode=nh;ve.Suspense=ah;ve.SuspenseList=lh;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(t){return ln(t)===sh};ve.isContextProvider=function(t){return ln(t)===ih};ve.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===rg};ve.isForwardRef=function(t){return ln(t)===oh};ve.isFragment=function(t){return ln(t)===th};ve.isLazy=function(t){return ln(t)===ch};ve.isMemo=function(t){return ln(t)===uh};ve.isPortal=function(t){return ln(t)===ig};ve.isProfiler=function(t){return ln(t)===rh};ve.isStrictMode=function(t){return ln(t)===nh};ve.isSuspense=function(t){return ln(t)===ah};ve.isSuspenseList=function(t){return ln(t)===lh};ve.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===th||t===rh||t===nh||t===ah||t===lh||t===uP||typeof t=="object"&&t!==null&&(t.$$typeof===ch||t.$$typeof===uh||t.$$typeof===ih||t.$$typeof===sh||t.$$typeof===oh||t.$$typeof===ZE||t.getModuleId!==void 0)};ve.typeOf=ln;function cP(){const t=zR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const f0={notify(){},get:()=>[]};function hP(t,e){let n,r=f0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=cP())}function u(){n&&(n(),n=void 0,r.clear(),r=f0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const dP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fP=dP?I.useLayoutEffect:I.useEffect;function pP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=I.useMemo(()=>{const u=hP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=I.useMemo(()=>t.getState(),[t]);fP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Xr;return Pt.createElement(l.Provider,{value:o},n)}function eI(t=Xr){const e=t===Xr?GE:Ym(t);return function(){const{store:r}=e();return r}}const mP=eI();function gP(t=Xr){const e=t===Xr?mP:eI(t);return function(){return e().dispatch}}const Ui=gP();HR(jR.useSyncExternalStoreWithSelector);UR(OE.unstable_batchedUpdates);const un=t=>t.auth;function yP(t){function e(L,$,j,Q,T){for(var re=0,D=0,Ce=0,ue=0,he,te,Ge=0,O=0,K,De=K=he=0,oe=0,it=0,ho=0,st=0,ml=j.length,fo=ml-1,cn,Z="",$e="",Yh="",Xh="",gr;oe<ml;){if(te=j.charCodeAt(oe),oe===fo&&D+ue+Ce+re!==0&&(D!==0&&(te=D===47?10:47),ue=Ce=re=0,ml++,fo++),D+ue+Ce+re===0){if(oe===fo&&(0<it&&(Z=Z.replace(d,"")),0<Z.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:Z+=j.charAt(oe)}te=59}switch(te){case 123:for(Z=Z.trim(),he=Z.charCodeAt(0),K=1,st=++oe;oe<ml;){switch(te=j.charCodeAt(oe)){case 123:K++;break;case 125:K--;break;case 47:switch(te=j.charCodeAt(oe+1)){case 42:case 47:e:{for(De=oe+1;De<fo;++De)switch(j.charCodeAt(De)){case 47:if(te===42&&j.charCodeAt(De-1)===42&&oe+2!==De){oe=De+1;break e}break;case 10:if(te===47){oe=De+1;break e}}oe=De}}break;case 91:te++;case 40:te++;case 34:case 39:for(;oe++<fo&&j.charCodeAt(oe)!==te;);}if(K===0)break;oe++}switch(K=j.substring(st,oe),he===0&&(he=(Z=Z.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<it&&(Z=Z.replace(d,"")),te=Z.charCodeAt(1),te){case 100:case 109:case 115:case 45:it=$;break;default:it=Xt}if(K=e($,it,K,te,T+1),st=K.length,0<N&&(it=n(Xt,Z,ho),gr=a(3,K,it,$,Oe,fe,st,te,T,Q),Z=it.join(""),gr!==void 0&&(st=(K=gr.trim()).length)===0&&(te=0,K="")),0<st)switch(te){case 115:Z=Z.replace(C,o);case 100:case 109:case 45:K=Z+"{"+K+"}";break;case 107:Z=Z.replace(f,"$1 $2"),K=Z+"{"+K+"}",K=Se===1||Se===2&&s("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=Z+K,Q===112&&(K=($e+=K,""))}else K="";break;default:K=e($,n($,Z,ho),K,Q,T+1)}Yh+=K,K=ho=it=De=he=0,Z="",te=j.charCodeAt(++oe);break;case 125:case 59:if(Z=(0<it?Z.replace(d,""):Z).trim(),1<(st=Z.length))switch(De===0&&(he=Z.charCodeAt(0),he===45||96<he&&123>he)&&(st=(Z=Z.replace(" ",":")).length),0<N&&(gr=a(1,Z,$,L,Oe,fe,$e.length,Q,T,Q))!==void 0&&(st=(Z=gr.trim()).length)===0&&(Z="\0\0"),he=Z.charCodeAt(0),te=Z.charCodeAt(1),he){case 0:break;case 64:if(te===105||te===99){Xh+=Z+j.charAt(oe);break}default:Z.charCodeAt(st-1)!==58&&($e+=i(Z,he,te,Z.charCodeAt(2)))}ho=it=De=he=0,Z="",te=j.charCodeAt(++oe)}}switch(te){case 13:case 10:D===47?D=0:1+he===0&&Q!==107&&0<Z.length&&(it=1,Z+="\0"),0<N*G&&a(0,Z,$,L,Oe,fe,$e.length,Q,T,Q),fe=1,Oe++;break;case 59:case 125:if(D+ue+Ce+re===0){fe++;break}default:switch(fe++,cn=j.charAt(oe),te){case 9:case 32:if(ue+re+D===0)switch(Ge){case 44:case 58:case 9:case 32:cn="";break;default:te!==32&&(cn=" ")}break;case 0:cn="\\0";break;case 12:cn="\\f";break;case 11:cn="\\v";break;case 38:ue+D+re===0&&(it=ho=1,cn="\f"+cn);break;case 108:if(ue+D+re+Ve===0&&0<De)switch(oe-De){case 2:Ge===112&&j.charCodeAt(oe-3)===58&&(Ve=Ge);case 8:O===111&&(Ve=O)}break;case 58:ue+D+re===0&&(De=oe);break;case 44:D+Ce+ue+re===0&&(it=1,cn+="\r");break;case 34:case 39:D===0&&(ue=ue===te?0:ue===0?te:ue);break;case 91:ue+D+Ce===0&&re++;break;case 93:ue+D+Ce===0&&re--;break;case 41:ue+D+re===0&&Ce--;break;case 40:if(ue+D+re===0){if(he===0)switch(2*Ge+3*O){case 533:break;default:he=1}Ce++}break;case 64:D+Ce+ue+re+De+K===0&&(K=1);break;case 42:case 47:if(!(0<ue+re+Ce))switch(D){case 0:switch(2*te+3*j.charCodeAt(oe+1)){case 235:D=47;break;case 220:st=oe,D=42}break;case 42:te===47&&Ge===42&&st+2!==oe&&(j.charCodeAt(st+2)===33&&($e+=j.substring(st,oe+1)),cn="",D=0)}}D===0&&(Z+=cn)}O=Ge,Ge=te,oe++}if(st=$e.length,0<st){if(it=$,0<N&&(gr=a(2,$e,it,L,Oe,fe,st,Q,T,Q),gr!==void 0&&($e=gr).length===0))return Xh+$e+Yh;if($e=it.join(",")+"{"+$e+"}",Se*Ve!==0){switch(Se!==2||s($e,2)||(Ve=0),Ve){case 111:$e=$e.replace(E,":-moz-$1")+$e;break;case 112:$e=$e.replace(y,"::-webkit-input-$1")+$e.replace(y,"::-moz-$1")+$e.replace(y,":-ms-input-$1")+$e}Ve=0}}return Xh+$e+Yh}function n(L,$,j){var Q=$.trim().split(w);$=Q;var T=Q.length,re=L.length;switch(re){case 0:case 1:var D=0;for(L=re===0?"":L[0]+" ";D<T;++D)$[D]=r(L,$[D],j).trim();break;default:var Ce=D=0;for($=[];D<T;++D)for(var ue=0;ue<re;++ue)$[Ce++]=r(L[ue]+" ",Q[D],j).trim()}return $}function r(L,$,j){var Q=$.charCodeAt(0);switch(33>Q&&(Q=($=$.trim()).charCodeAt(0)),Q){case 38:return $.replace(m,"$1"+L.trim());case 58:return L.trim()+$.replace(m,"$1"+L.trim());default:if(0<1*j&&0<$.indexOf("\f"))return $.replace(m,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+$}function i(L,$,j,Q){var T=L+";",re=2*$+3*j+4*Q;if(re===944){L=T.indexOf(":",9)+1;var D=T.substring(L,T.length-1).trim();return D=T.substring(0,L).trim()+D+";",Se===1||Se===2&&s(D,1)?"-webkit-"+D+D:D}if(Se===0||Se===2&&!s(T,1))return T;switch(re){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(z,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return D=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+T+"-ms-flex-pack"+D+T;case 1005:return v.test(T)?T.replace(p,":-webkit-")+T.replace(p,":-moz-")+T:T;case 1e3:switch(D=T.substring(13).trim(),$=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt($)){case 226:D=T.replace(x,"tb");break;case 232:D=T.replace(x,"tb-rl");break;case 220:D=T.replace(x,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+D+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch($=(T=L).length-10,D=(T.charCodeAt($)===33?T.substring(0,$):T).substring(L.indexOf(":",7)+1).trim(),re=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:T=T.replace(D,"-webkit-"+D)+";"+T;break;case 207:case 102:T=T.replace(D,"-webkit-"+(102<re?"inline-":"")+"box")+";"+T.replace(D,"-webkit-"+D)+";"+T.replace(D,"-ms-"+D+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return D=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+D+"-ms-flex-"+D+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(P,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(P,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(V.test(L)===!0)return(D=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),$,j,Q).replace(":fill-available",":stretch"):T.replace(D,"-webkit-"+D)+T.replace(D,"-moz-"+D.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,j+Q===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+T}return T}function s(L,$){var j=L.indexOf($===1?":":"{"),Q=L.substring(0,$!==3?j:10);return j=L.substring(j+1,L.length-1),W($!==2?Q:Q.replace(q,"$1"),j,$)}function o(L,$){var j=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return j!==$+";"?j.replace(b," or ($1)").substring(4):"("+$+")"}function a(L,$,j,Q,T,re,D,Ce,ue,he){for(var te=0,Ge=$,O;te<N;++te)switch(O=rt[te].call(c,L,Ge,j,Q,T,re,D,Ce,ue,he)){case void 0:case!1:case!0:case null:break;default:Ge=O}if(Ge!==$)return Ge}function l(L){switch(L){case void 0:case null:N=rt.length=0;break;default:if(typeof L=="function")rt[N++]=L;else if(typeof L=="object")for(var $=0,j=L.length;$<j;++$)l(L[$]);else G=!!L|0}return l}function u(L){return L=L.prefix,L!==void 0&&(W=null,L?typeof L!="function"?Se=1:(Se=2,W=L):Se=0),u}function c(L,$){var j=L;if(33>j.charCodeAt(0)&&(j=j.trim()),pe=j,j=[pe],0<N){var Q=a(-1,$,j,j,Oe,fe,0,0,0,0);Q!==void 0&&typeof Q=="string"&&($=Q)}var T=e(Xt,j,$,0,0);return 0<N&&(Q=a(-2,T,j,j,Oe,fe,T.length,0,0,0),Q!==void 0&&(T=Q)),pe="",Ve=0,fe=Oe=1,T}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,v=/zoo|gra/,_=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,P=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,fe=1,Oe=1,Ve=0,Se=1,Xt=[],rt=[],N=0,W=null,G=0,pe="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var vP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _P(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var wP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p0=_P(function(t){return wP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Qn(){return(Qn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var m0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},ip=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!eg.typeOf(t)},Gu=Object.freeze([]),zr=Object.freeze({});function _a(t){return typeof t=="function"}function g0(t){return t.displayName||t.name||"Component"}function sg(t){return t&&typeof t.styledComponentId=="string"}var $s=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",og=typeof window<"u"&&"HTMLElement"in window,EP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ha(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var IP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ha(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),cu=new Map,Ku=new Map,Go=1,Ol=function(t){if(cu.has(t))return cu.get(t);for(;Ku.has(Go);)Go++;var e=Go++;return cu.set(t,e),Ku.set(e,t),e},TP=function(t){return Ku.get(t)},xP=function(t,e){e>=Go&&(Go=e+1),cu.set(t,e),Ku.set(e,t)},SP="style["+$s+'][data-styled-version="5.3.11"]',CP=new RegExp("^"+$s+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),AP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},kP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(CP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(xP(u,l),AP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},RP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},tI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute($s))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute($s,"active"),r.setAttribute("data-styled-version","5.3.11");var o=RP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},PP=function(){function t(n){var r=this.element=tI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Ha(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),bP=function(){function t(n){var r=this.element=tI(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),NP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),y0=og,OP={isServer:!og,useCSSOMInjection:!EP},nI=function(){function t(n,r,i){n===void 0&&(n=zr),r===void 0&&(r={}),this.options=Qn({},OP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&og&&y0&&(y0=!1,function(s){for(var o=document.querySelectorAll(SP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute($s)!=="active"&&(kP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ol(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Qn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new NP(o):s?new PP(o):new bP(o),new IP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ol(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ol(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ol(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=TP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=$s+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),DP=/(a)(d)/gi,v0=function(t){return String.fromCharCode(t+(t>25?39:97))};function sp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=v0(e%52)+n;return(v0(e%52)+n).replace(DP,"$1-$2")}var ds=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},rI=function(t){return ds(5381,t)};function LP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(_a(n)&&!sg(n))return!1}return!0}var MP=rI("5.3.11"),VP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&LP(e),this.componentId=n,this.baseHash=ds(MP,n),this.baseStyle=r,nI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=js(this.rules,e,n,r).join(""),a=sp(ds(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ds(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var v=js(p,e,n,r),_=Array.isArray(v)?v.join(""):v;c=ds(c,_+d),h+=_}}if(h){var w=sp(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),$P=/^\s*\/\/.*$/gm,jP=[":","[",".","#"];function FP(t){var e,n,r,i,s=t===void 0?zr:t,o=s.options,a=o===void 0?zr:o,l=s.plugins,u=l===void 0?Gu:l,c=new yP(a),h=[],d=function(_){function w(m){if(m)try{_(m+"}")}catch{}}return function(m,f,y,E,x,C,b,P,q,V){switch(m){case 1:if(q===0&&f.charCodeAt(0)===64)return _(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return _(y[0]+f),"";default:return f+(V===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(_){h.push(_)}),p=function(_,w,m){return w===0&&jP.indexOf(m[n.length])!==-1||m.match(i)?_:"."+e};function v(_,w,m,f){f===void 0&&(f="&");var y=_.replace($P,""),E=w&&m?m+" "+w+" { "+y+" }":y;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,E)}return c.use([].concat(u,[function(_,w,m){_===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(_){if(_===-2){var w=h;return h=[],w}}])),v.hash=u.length?u.reduce(function(_,w){return w.name||Ha(15),ds(_,w.name)},5381).toString():"",v}var iI=Pt.createContext();iI.Consumer;var sI=Pt.createContext(),UP=(sI.Consumer,new nI),op=FP();function zP(){return I.useContext(iI)||UP}function BP(){return I.useContext(sI)||op}var WP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=op);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ha(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=op),this.name+e.hash},t}(),HP=/([A-Z])/,qP=/([A-Z])/g,GP=/^ms-/,KP=function(t){return"-"+t.toLowerCase()};function _0(t){return HP.test(t)?t.replace(qP,KP).replace(GP,"-ms-"):t}var w0=function(t){return t==null||t===!1||t===""};function js(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=js(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(w0(t))return"";if(sg(t))return"."+t.styledComponentId;if(_a(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return js(l,e,n,r)}var u;return t instanceof WP?n?(t.inject(n,r),t.getName(r)):t:ip(t)?function c(h,d){var p,v,_=[];for(var w in h)h.hasOwnProperty(w)&&!w0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||_a(h[w])?_.push(_0(w)+":",h[w],";"):ip(h[w])?_.push.apply(_,c(h[w],w)):_.push(_0(w)+": "+(p=w,(v=h[w])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||p in vP||p.startsWith("--")?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var E0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function QP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return _a(t)||ip(t)?E0(js(m0(Gu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:E0(js(m0(t,n)))}var YP=function(t,e,n){return n===void 0&&(n=zr),t.theme!==n.theme&&t.theme||e||n.theme},XP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,JP=/(^-|-$)/g;function kd(t){return t.replace(XP,"-").replace(JP,"")}var ZP=function(t){return sp(rI(t)>>>0)};function Dl(t){return typeof t=="string"&&!0}var ap=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},e2=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function t2(t,e,n){var r=t[n];ap(e)&&ap(r)?oI(r,e):t[n]=e}function oI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(ap(o))for(var a in o)e2(a)&&t2(t,o[a],a)}return t}var aI=Pt.createContext();aI.Consumer;var Rd={};function lI(t,e,n){var r=sg(t),i=!Dl(t),s=e.attrs,o=s===void 0?Gu:s,a=e.componentId,l=a===void 0?function(f,y){var E=typeof f!="string"?"sc":kd(f);Rd[E]=(Rd[E]||0)+1;var x=E+"-"+ZP("5.3.11"+E+Rd[E]);return y?y+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Dl(f)?"styled."+f:"Styled("+g0(f)+")"}(t):u,h=e.displayName&&e.componentId?kd(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,E){return t.shouldForwardProp(f,y,E)&&e.shouldForwardProp(f,y,E)}:t.shouldForwardProp);var v,_=new VP(n,h,r?t.componentStyle:void 0),w=_.isStatic&&o.length===0,m=function(f,y){return function(E,x,C,b){var P=E.attrs,q=E.componentStyle,V=E.defaultProps,z=E.foldedComponentIds,fe=E.shouldForwardProp,Oe=E.styledComponentId,Ve=E.target,Se=function(Q,T,re){Q===void 0&&(Q=zr);var D=Qn({},T,{theme:Q}),Ce={};return re.forEach(function(ue){var he,te,Ge,O=ue;for(he in _a(O)&&(O=O(D)),O)D[he]=Ce[he]=he==="className"?(te=Ce[he],Ge=O[he],te&&Ge?te+" "+Ge:te||Ge):O[he]}),[D,Ce]}(YP(x,I.useContext(aI),V)||zr,x,P),Xt=Se[0],rt=Se[1],N=function(Q,T,re,D){var Ce=zP(),ue=BP(),he=T?Q.generateAndInjectStyles(zr,Ce,ue):Q.generateAndInjectStyles(re,Ce,ue);return he}(q,b,Xt),W=C,G=rt.$as||x.$as||rt.as||x.as||Ve,pe=Dl(G),L=rt!==x?Qn({},x,{},rt):x,$={};for(var j in L)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?$.as=L[j]:(fe?fe(j,p0,G):!pe||p0(j))&&($[j]=L[j]));return x.style&&rt.style!==x.style&&($.style=Qn({},x.style,{},rt.style)),$.className=Array.prototype.concat(z,Oe,N!==Oe?N:null,x.className,rt.className).filter(Boolean).join(" "),$.ref=W,I.createElement(G,$)}(v,f,y,w)};return m.displayName=c,(v=Pt.forwardRef(m)).attrs=d,v.componentStyle=_,v.displayName=c,v.shouldForwardProp=p,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Gu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var y=e.componentId,E=function(C,b){if(C==null)return{};var P,q,V={},z=Object.keys(C);for(q=0;q<z.length;q++)P=z[q],b.indexOf(P)>=0||(V[P]=C[P]);return V}(e,["componentId"]),x=y&&y+"-"+(Dl(f)?f:kd(g0(f)));return lI(f,Qn({},E,{attrs:d,componentId:x}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?oI({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&aP(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var lp=function(t){return function e(n,r,i){if(i===void 0&&(i=zr),!eg.isValidElementType(r))return Ha(1,String(r));var s=function(){return n(r,i,QP.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Qn({},i,{},o))},s.attrs=function(o){return e(n,r,Qn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(lI,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){lp[t]=lp(t)});const A=lp;var uI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I0=Pt.createContext&&Pt.createContext(uI),Br=globalThis&&globalThis.__assign||function(){return Br=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Br.apply(this,arguments)},n2=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function cI(t){return t&&t.map(function(e,n){return Pt.createElement(e.tag,Br({key:n},e.attr),cI(e.child))})}function zi(t){return function(e){return Pt.createElement(r2,Br({attr:Br({},t.attr)},e),cI(t.child))}}function r2(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=n2(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Pt.createElement("svg",Br({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Br(Br({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Pt.createElement("title",null,s),t.children)};return I0!==void 0?Pt.createElement(I0.Consumer,null,function(n){return e(n)}):e(uI)}function i2(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const s2=A.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,o2=A.div`
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
`,a2=A(i2)`
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
`,l2=A.div`
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
`,u2=A.div`
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
`,c2=A.div`
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
`,h2=()=>{const t=mr();return g.jsx(c2,{onClick:()=>{t("/")}})},d2=A.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,T0=A(_R)`
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
`,f2=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],p2=()=>{const t=an(un);return g.jsxs(d2,{children:[f2.map((e,n)=>g.jsx(T0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&g.jsx(T0,{to:"/admin",children:"Адмін"},"admin")]})},Pd=A.p`
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

    font-size: 38px;`,m2=A.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,g2=A.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,y2=A.div`
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
`,v2=A.div`
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
`,_2=A.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,Ll=A.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Ml=A.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,w2=A.div`
  display: flex;
  flex-direction: column;
`,Vl=A.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,E2=A.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,x0=A.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,I2=A.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,T2=A.div`
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
`,Un=A.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,$l=A.div`
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
`,Yi=A.h3`
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
`,xn=A.input`
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
`,jl=A.button`
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
`,zn=A.div`
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
`,x2=A.div`
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
`,S2=A.ul`
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
`,C2=A.li`
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
 */const hI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},A2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new k2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class k2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R2=function(t){const e=hI(t);return dI.encodeByteArray(e,!0)},Qu=function(t){return R2(t).replace(/\./g,"")},fI=function(t){try{return dI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b2=()=>P2().__FIREBASE_DEFAULTS__,N2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fI(t[1]);return e&&JSON.parse(e)},ag=()=>{try{return b2()||N2()||O2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pI=t=>{var e,n;return(n=(e=ag())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mI=t=>{const e=pI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gI=()=>{var t;return(t=ag())===null||t===void 0?void 0:t.config},yI=t=>{var e;return(e=ag())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class D2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qu(JSON.stringify(n)),Qu(JSON.stringify(o)),a].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function M2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function V2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $2(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j2(){try{return typeof indexedDB=="object"}catch{return!1}}function F2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const U2="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=U2,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?z2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,r)}}function z2(t,e){return t.replace(B2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const B2=/\{\$([^}]+)}/g;function W2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(S0(s)&&S0(o)){if(!Yu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function H2(t,e){const n=new q2(t,e);return n.subscribe.bind(n)}class q2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");G2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bd),i.error===void 0&&(i.error=bd),i.complete===void 0&&(i.complete=bd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bd(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class K2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new D2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y2(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q2(t){return t===hi?void 0:t}function Y2(t){return t.instantiationMode==="EAGER"}/**
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
 */class X2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new K2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const J2={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Z2=ce.INFO,eb={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},tb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lg{constructor(e){this.name=e,this._logLevel=Z2,this._logHandler=tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const nb=(t,e)=>e.some(n=>t instanceof n);let C0,A0;function rb(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ib(){return A0||(A0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _I=new WeakMap,up=new WeakMap,wI=new WeakMap,Nd=new WeakMap,ug=new WeakMap;function sb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_I.set(n,t)}).catch(()=>{}),ug.set(e,t),e}function ob(t){if(up.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});up.set(t,e)}let cp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return up.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ab(t){cp=t(cp)}function lb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Od(this),e,...n);return wI.set(r,e.sort?e.sort():[e]),Wr(r)}:ib().includes(t)?function(...e){return t.apply(Od(this),e),Wr(_I.get(this))}:function(...e){return Wr(t.apply(Od(this),e))}}function ub(t){return typeof t=="function"?lb(t):(t instanceof IDBTransaction&&ob(t),nb(t,rb())?new Proxy(t,cp):t)}function Wr(t){if(t instanceof IDBRequest)return sb(t);if(Nd.has(t))return Nd.get(t);const e=ub(t);return e!==t&&(Nd.set(t,e),ug.set(e,t)),e}const Od=t=>ug.get(t);function cb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const hb=["get","getKey","getAll","getAllKeys","count"],db=["put","add","delete","clear"],Dd=new Map;function k0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=db.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Dd.set(e,s),s}ab(t=>({...t,get:(e,n,r)=>k0(e,n)||t.get(e,n,r),has:(e,n)=>!!k0(e,n)||t.has(e,n)}));/**
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
 */class fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",R0="0.9.15";/**
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
 */const Pi=new lg("@firebase/app"),mb="@firebase/app-compat",gb="@firebase/analytics-compat",yb="@firebase/analytics",vb="@firebase/app-check-compat",_b="@firebase/app-check",wb="@firebase/auth",Eb="@firebase/auth-compat",Ib="@firebase/database",Tb="@firebase/database-compat",xb="@firebase/functions",Sb="@firebase/functions-compat",Cb="@firebase/installations",Ab="@firebase/installations-compat",kb="@firebase/messaging",Rb="@firebase/messaging-compat",Pb="@firebase/performance",bb="@firebase/performance-compat",Nb="@firebase/remote-config",Ob="@firebase/remote-config-compat",Db="@firebase/storage",Lb="@firebase/storage-compat",Mb="@firebase/firestore",Vb="@firebase/firestore-compat",$b="firebase",jb="10.1.0";/**
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
 */const dp="[DEFAULT]",Fb={[hp]:"fire-core",[mb]:"fire-core-compat",[yb]:"fire-analytics",[gb]:"fire-analytics-compat",[_b]:"fire-app-check",[vb]:"fire-app-check-compat",[wb]:"fire-auth",[Eb]:"fire-auth-compat",[Ib]:"fire-rtdb",[Tb]:"fire-rtdb-compat",[xb]:"fire-fn",[Sb]:"fire-fn-compat",[Cb]:"fire-iid",[Ab]:"fire-iid-compat",[kb]:"fire-fcm",[Rb]:"fire-fcm-compat",[Pb]:"fire-perf",[bb]:"fire-perf-compat",[Nb]:"fire-rc",[Ob]:"fire-rc-compat",[Db]:"fire-gcs",[Lb]:"fire-gcs-compat",[Mb]:"fire-fst",[Vb]:"fire-fst-compat","fire-js":"fire-js",[$b]:"fire-js-all"};/**
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
 */const Xu=new Map,fp=new Map;function Ub(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(fp.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;fp.set(e,t);for(const n of Xu.values())Ub(n,t);return!0}function hh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hr=new qa("app","Firebase",zb);/**
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
 */class Bb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=jb;function EI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Hr.create("bad-app-name",{appName:String(i)});if(n||(n=gI()),!n)throw Hr.create("no-options");const s=Xu.get(i);if(s){if(Yu(n,s.options)&&Yu(r,s.config))return s;throw Hr.create("duplicate-app",{appName:i})}const o=new X2(i);for(const l of fp.values())o.addComponent(l);const a=new Bb(n,r,o);return Xu.set(i,a),a}function cg(t=dp){const e=Xu.get(t);if(!e&&t===dp&&gI())return EI();if(!e)throw Hr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=Fb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}bi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wb="firebase-heartbeat-database",Hb=1,wa="firebase-heartbeat-store";let Ld=null;function II(){return Ld||(Ld=cb(Wb,Hb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wa)}}}).catch(t=>{throw Hr.create("idb-open",{originalErrorMessage:t.message})})),Ld}async function qb(t){try{return await(await II()).transaction(wa).objectStore(wa).get(TI(t))}catch(e){if(e instanceof jn)Pi.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function P0(t,e){try{const r=(await II()).transaction(wa,"readwrite");await r.objectStore(wa).put(e,TI(t)),await r.done}catch(n){if(n instanceof jn)Pi.warn(n.message);else{const r=Hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function TI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Gb=1024,Kb=30*24*60*60*1e3;class Qb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=b0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Kb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=b0(),{heartbeatsToSend:n,unsentEntries:r}=Yb(this._heartbeatsCache.heartbeats),i=Qu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function b0(){return new Date().toISOString().substring(0,10)}function Yb(t,e=Gb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j2()?F2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N0(t){return Qu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Jb(t){bi(new Jr("platform-logger",e=>new fb(e),"PRIVATE")),bi(new Jr("heartbeat",e=>new Qb(e),"PRIVATE")),Nn(hp,R0,t),Nn(hp,R0,"esm2017"),Nn("fire-js","")}Jb("");function hg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zb=xI,SI=new qa("auth","Firebase",xI());/**
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
 */const Ju=new lg("@firebase/auth");function eN(t,...e){Ju.logLevel<=ce.WARN&&Ju.warn(`Auth (${Bi}): ${t}`,...e)}function hu(t,...e){Ju.logLevel<=ce.ERROR&&Ju.error(`Auth (${Bi}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw dg(t,...e)}function On(t,...e){return dg(t,...e)}function tN(t,e,n){const r=Object.assign(Object.assign({},Zb()),{[e]:n});return new qa("auth","Firebase",r).create(e,{appName:t.name})}function dg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return SI.create(t,...e)}function Y(t,e,...n){if(!t)throw dg(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hu(e),new Error(e)}function sr(t,e){t||Yn(e)}/**
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
 */function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nN(){return O0()==="http:"||O0()==="https:"}function O0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nN()||M2()||"connection"in navigator)?navigator.onLine:!0}function iN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=L2()||V2()}get(){return rN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fg(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class CI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oN=new Ka(3e4,6e4);function to(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wi(t,e,n,r,i={}){return AI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ga(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),CI.fetch()(kI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function AI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sN),e);try{const i=new aN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tN(t,c,u);wn(t,c)}}catch(i){if(i instanceof jn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Qa(t,e,n,r,i={}){const s=await Wi(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fg(t.config,i):`${t.config.apiScheme}://${i}`}class aN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),oN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function lN(t,e){return Wi(t,"POST","/v1/accounts:delete",e)}async function uN(t,e){return Wi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=pg(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ko(Md(i.auth_time)),issuedAtTime:Ko(Md(i.iat)),expirationTime:Ko(Md(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Md(t){return Number(t)*1e3}function pg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=fI(n);return i?JSON.parse(i):(hu("Failed to decode base64 JWT payload"),null)}catch(i){return hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hN(t){const e=pg(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class RI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fs(t,uN(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gN(s.providerUserInfo):[],a=mN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new RI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function pN(t){const e=qe(t);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gN(t){return t.map(e=>{var{providerId:n}=e,r=hg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yN(t,e){const n=await AI(t,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ea;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ea,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function vr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new RI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fs(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:x,providerData:C,stsTokenManager:b}=n;Y(y&&b,e,"internal-error");const P=Ea.fromJSON(this.name,b);Y(typeof y=="string",e,"internal-error"),vr(h,e.name),vr(d,e.name),Y(typeof E=="boolean",e,"internal-error"),Y(typeof x=="boolean",e,"internal-error"),vr(p,e.name),vr(v,e.name),vr(_,e.name),vr(w,e.name),vr(m,e.name),vr(f,e.name);const q=new Ii({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:x,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:P,createdAt:m,lastLoginAt:f});return C&&Array.isArray(C)&&(q.providerData=C.map(V=>Object.assign({},V))),w&&(q._redirectEventId=w),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ea;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zu(s),s}}/**
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
 */const D0=new Map;function Xn(t){sr(t instanceof Function,"Expected a class definition");let e=D0.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,D0.set(t,e),e)}/**
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
 */class PI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PI.type="NONE";const L0=PI;/**
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
 */function du(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=du(this.userKey,i.apiKey,s),this.fullPersistenceKey=du("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Xn(L0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xn(L0);const o=du(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ii._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Es(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Es(s,e,r))}}/**
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
 */function M0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LI(e))return"Blackberry";if(MI(e))return"Webos";if(mg(e))return"Safari";if((e.includes("chrome/")||NI(e))&&!e.includes("edge/"))return"Chrome";if(DI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bI(t=Ct()){return/firefox\//i.test(t)}function mg(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NI(t=Ct()){return/crios\//i.test(t)}function OI(t=Ct()){return/iemobile/i.test(t)}function DI(t=Ct()){return/android/i.test(t)}function LI(t=Ct()){return/blackberry/i.test(t)}function MI(t=Ct()){return/webos/i.test(t)}function dh(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vN(t=Ct()){var e;return dh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _N(){return $2()&&document.documentMode===10}function VI(t=Ct()){return dh(t)||DI(t)||MI(t)||LI(t)||/windows phone/i.test(t)||OI(t)}function wN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $I(t,e=[]){let n;switch(t){case"Browser":n=M0(Ct());break;case"Worker":n=`${M0(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}async function jI(t,e){return Wi(t,"GET","/v2/recaptchaConfig",to(t,e))}function V0(t){return t!==void 0&&t.enterprise!==void 0}class FI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function EN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})}function IN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TN="https://www.google.com/recaptcha/enterprise.js?render=",xN="recaptcha-enterprise",SN="NO_RECAPTCHA";class zI{constructor(e){this.type=xN,this.auth=no(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new FI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;V0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(SN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&V0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}UI(TN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ec(t,e,n,r=!1){const i=new zI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class CN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class AN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $0(this),this.idTokenSubscription=new $0(this),this.beforeStateQueue=new CN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}async initializeRecaptchaConfig(){const e=await jI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new FI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new zI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$I(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function no(t){return qe(t)}class $0{constructor(e){this.auth=e,this.observer=null,this.addObserver=H2(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function kN(t,e){const n=hh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yu(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function RN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PN(t,e,n){const r=no(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=BI(e),{host:o,port:a}=bN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NN()}function BI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bN(t){const e=BI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:j0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:j0(o)}}}function j0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function ON(t,e){return Wi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Vd(t,e){return Qa(t,"POST","/v1/accounts:signInWithPassword",to(t,e))}/**
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
 */async function DN(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",to(t,e))}async function LN(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",to(t,e))}/**
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
 */class Ia extends gg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ec(e,r,"signInWithPassword");return Vd(e,i)}else return Vd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ec(e,r,"signInWithPassword");return Vd(e,s)}else return Promise.reject(i)});case"emailLink":return DN(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ON(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LN(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Is(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",to(t,e))}/**
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
 */const MN="http://localhost";class Ni extends gg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:MN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ga(n)}return e}}/**
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
 */function VN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $N(t){const e=Po(bo(t)).link,n=e?Po(bo(e)).deep_link_id:null,r=Po(bo(t)).deep_link_id;return(r?Po(bo(r)).link:null)||r||n||e||t}class yg{constructor(e){var n,r,i,s,o,a;const l=Po(bo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=VN((i=l.mode)!==null&&i!==void 0?i:null);Y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$N(e);try{return new yg(n)}catch{return null}}}/**
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
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(e,n){return Ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yg.parseLink(n);return Y(r,"argument-error"),Ia._fromEmailAndCode(e,r.code,r.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class WI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ya extends WI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends Ya{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class xr extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
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
 */class Sr extends Ya{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
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
 */class Cr extends Ya{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function $d(t,e){return Qa(t,"POST","/v1/accounts:signUp",to(t,e))}/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=F0(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=F0(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function F0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tc extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tc(e,n,r,i)}}function HI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,s,e,r):s})}async function jN(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function FN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Fs(t,HI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=pg(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
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
 */async function qI(t,e,n=!1){const r="signIn",i=await HI(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function UN(t,e){return qI(no(t),e)}async function zN(t,e,n){var r;const i=no(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ec(i,s,"signUpPassword");o=$d(i,u)}else o=$d(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ec(i,s,"signUpPassword");return $d(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Oi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function BN(t,e,n){return UN(qe(t),ro.credential(e,n))}/**
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
 */async function WN(t,e){return Wi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fs(r,WN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qN(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function GN(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function KN(t){return qe(t).signOut()}const nc="__sak";/**
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
 */class GI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function QN(){const t=Ct();return mg(t)||dh(t)}const YN=1e3,XN=10;class KI extends GI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QN()&&wN(),this.fallbackToPolling=VI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_N()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KI.type="LOCAL";const JN=KI;/**
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
 */class QI extends GI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}QI.type="SESSION";const YI=QI;/**
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
 */function ZN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fh.receivers=[];/**
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
 */function vg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=vg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function tO(t){Dn().location.href=t}/**
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
 */function XI(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function nO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iO(){return XI()?self:null}/**
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
 */const JI="firebaseLocalStorageDb",sO=1,rc="firebaseLocalStorage",ZI="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ph(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function oO(){const t=indexedDB.deleteDatabase(JI);return new Xa(t).toPromise()}function mp(){const t=indexedDB.open(JI,sO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rc,{keyPath:ZI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rc)?e(r):(r.close(),await oO(),e(await mp()))})})}async function U0(t,e,n){const r=ph(t,!0).put({[ZI]:e,value:n});return new Xa(r).toPromise()}async function aO(t,e){const n=ph(t,!1).get(e),r=await new Xa(n).toPromise();return r===void 0?null:r.value}function z0(t,e){const n=ph(t,!0).delete(e);return new Xa(n).toPromise()}const lO=800,uO=3;class eT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fh._getInstance(iO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nO(),!this.activeServiceWorker)return;this.sender=new eO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mp();return await U0(e,nc,"1"),await z0(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>U0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>z0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ph(i,!1).getAll();return new Xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eT.type="LOCAL";const cO=eT;new Ka(3e4,6e4);/**
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
 */function hO(t,e){return e?Xn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _g extends gg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dO(t){return qI(t.auth,new _g(t),t.bypassAuthState)}function fO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),FN(n,new _g(t),t.bypassAuthState)}async function pO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),jN(n,new _g(t),t.bypassAuthState)}/**
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
 */class tT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dO;case"linkViaPopup":case"linkViaRedirect":return pO;case"reauthViaPopup":case"reauthViaRedirect":return fO;default:wn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mO=new Ka(2e3,1e4);class fs extends tT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mO.get())};e()}}fs.currentPopupAction=null;/**
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
 */const gO="pendingRedirect",fu=new Map;class yO extends tT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await vO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vO(t,e){const n=EO(e),r=wO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _O(t,e){fu.set(t._key(),e)}function wO(t){return Xn(t._redirectPersistence)}function EO(t){return du(gO,t.config.apiKey,t.name)}async function IO(t,e,n=!1){const r=no(t),i=hO(r,e),o=await new yO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const TO=10*60*1e3;class xO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TO&&this.cachedEventUids.clear(),this.cachedEventUids.has(B0(e))}saveEventToCache(e){this.cachedEventUids.add(B0(e)),this.lastProcessedEventTime=Date.now()}}function B0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nT(t);default:return!1}}/**
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
 */async function CO(t,e={}){return Wi(t,"GET","/v1/projects",e)}/**
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
 */const AO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kO=/^https?/;async function RO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CO(t);for(const n of e)try{if(PO(n))return}catch{}wn(t,"unauthorized-domain")}function PO(t){const e=pp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kO.test(n))return!1;if(AO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bO=new Ka(3e4,6e4);function W0(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NO(t){return new Promise((e,n)=>{var r,i,s;function o(){W0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W0(),n(On(t,"network-request-failed"))},timeout:bO.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const a=IN("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},UI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pu=null,e})}let pu=null;function OO(t){return pu=pu||NO(t),pu}/**
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
 */const DO=new Ka(5e3,15e3),LO="__/auth/iframe",MO="emulator/auth/iframe",VO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$O=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jO(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fg(e,MO):`https://${t.config.authDomain}/${LO}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=$O.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ga(r).slice(1)}`}async function FO(t){const e=await OO(t),n=Dn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:jO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Dn().setTimeout(()=>{s(o)},DO.get());function l(){Dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const UO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zO=500,BO=600,WO="_blank",HO="http://localhost";class H0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qO(t,e,n,r=zO,i=BO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},UO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=NI(u)?WO:n),bI(u)&&(e=e||HO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(vN(u)&&a!=="_self")return GO(e||"",a),new H0(null);const h=window.open(e||"",a,c);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new H0(h)}function GO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KO="__/auth/handler",QO="emulator/auth/handler",YO=encodeURIComponent("fac");async function q0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof WI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",W2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ya){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${YO}=${encodeURIComponent(l)}`:"";return`${XO(t)}?${Ga(a).slice(1)}${u}`}function XO({config:t}){return t.emulator?fg(t,QO):`https://${t.authDomain}/${KO}`}/**
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
 */const jd="webStorageSupport";class JO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YI,this._completeRedirectFn=IO,this._overrideRedirectResult=_O}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await q0(e,n,r,pp(),i);return qO(e,o,vg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await q0(e,n,r,pp(),i);return tO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FO(e),r=new xO(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jd,{type:jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jd];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VI()||mg()||dh()}}const ZO=JO;var G0="@firebase/auth",K0="1.1.0";/**
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
 */class eD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nD(t){bi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$I(t)},u=new AN(r,i,s,l);return RN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bi(new Jr("auth-internal",e=>{const n=no(e.getProvider("auth").getImmediate());return(r=>new eD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(G0,K0,tD(t)),Nn(G0,K0,"esm2017")}/**
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
 */const rD=5*60,iD=yI("authIdTokenMaxAge")||rD;let Q0=null;const sD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iD)return;const i=n==null?void 0:n.token;Q0!==i&&(Q0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oD(t=cg()){const e=hh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kN(t,{popupRedirectResolver:ZO,persistence:[cO,JN,YI]}),r=yI("authTokenSyncURL");if(r){const s=sD(r);GN(n,s,()=>s(n.currentUser)),qN(n,o=>s(o))}const i=pI("auth");return i&&PN(n,`http://${i}`),n}nD("Browser");var aD="firebase",lD="10.1.0";/**
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
 */Nn(aD,lD,"app");/**
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
 */const rT="firebasestorage.googleapis.com",uD="storageBucket",cD=2*60*1e3,hD=10*60*1e3;/**
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
 */class Fn extends jn{constructor(e,n,r=0){super(Fd(e),`Firebase Storage: ${n} (${Fd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function Fd(t){return"storage/"+t}function dD(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Vn.UNKNOWN,t)}function fD(){return new Fn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pD(){return new Fn(Vn.CANCELED,"User canceled the upload/download.")}function mD(t){return new Fn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function gD(t){return new Fn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Y0(t){return new Fn(Vn.INVALID_ARGUMENT,t)}function iT(){return new Fn(Vn.APP_DELETED,"The Firebase app was deleted.")}function yD(t){return new Fn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw gD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===rT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const x=y[E],C=x.regex.exec(e);if(C){const b=C[x.indices.bucket];let P=C[x.indices.path];P||(P=""),r=new gn(b,P),x.postModify(r);break}}if(r==null)throw mD(e);return r}}class vD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _D(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function wD(t){t(!1)}/**
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
 */function ED(t){return t!==void 0}function X0(t,e,n,r){if(r<e)throw Y0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Y0(`Invalid value for '${t}'. Expected ${n} or less.`)}function ID(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ic;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ic||(ic={}));/**
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
 */function TD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class xD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ic.NO_ERROR,l=s.getStatus();if(!a||TD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ic.ABORT;r(!1,new Ul(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ul(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ED(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=dD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?iT():pD();o(l)}else{const l=fD();o(l)}};this.canceled_?n(!1,new Ul(!1,null,!0)):this.backoffId_=_D(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function SD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RD(t,e,n,r,i,s,o=!0){const a=ID(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return AD(u,e),SD(u,n),CD(u,s),kD(u,r),new xD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function PD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class sc{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sc(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bD(this._location.path)}get storage(){return this._service}get parent(){const e=PD(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new sc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yD(e)}}function J0(t,e){const n=e==null?void 0:e[uD];return n==null?null:gn.makeFromBucketSpec(n,t)}function ND(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:vI(i,t.app.options.projectId))}class OD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=rT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cD,this._maxUploadRetryTime=hD,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=J0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=J0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){X0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){X0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new vD(iT());{const o=RD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Z0="@firebase/storage",e_="0.11.2";/**
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
 */const sT="storage";function DD(t=cg(),e){t=qe(t);const r=hh(t,sT).getImmediate({identifier:e}),i=mI("storage");return i&&LD(r,...i),r}function LD(t,e,n,r={}){ND(t,e,n,r)}function MD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new OD(n,r,i,e,Bi)}function VD(){bi(new Jr(sT,MD,"PUBLIC").setMultipleInstances(!0)),Nn(Z0,e_,""),Nn(Z0,e_,"esm2017")}VD();var $D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,wg=wg||{},J=$D||self;function mh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ja(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jD(t){return Object.prototype.hasOwnProperty.call(t,Ud)&&t[Ud]||(t[Ud]=++FD)}var Ud="closure_uid_"+(1e9*Math.random()>>>0),FD=0;function UD(t,e,n){return t.call.apply(t.bind,arguments)}function zD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=UD:Et=zD,Et.apply(null,arguments)}function zl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function oi(){this.s=this.s,this.o=this.o}var BD=0;oi.prototype.s=!1;oi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),BD!=0)&&jD(this)};oi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Eg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function t_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(mh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var WD=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Ta(t){return/^[\s\xa0]*$/.test(t)}function gh(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return gh().indexOf(t)!=-1}function Ig(t){return Ig[" "](t),t}Ig[" "]=function(){};function HD(t,e){var n=VL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var qD=An("Opera"),Us=An("Trident")||An("MSIE"),aT=An("Edge"),gp=aT||Us,lT=An("Gecko")&&!(gh().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),GD=gh().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function uT(){var t=J.document;return t?t.documentMode:void 0}var yp;e:{var zd="",Bd=function(){var t=gh();if(lT)return/rv:([^\);]+)(\)|;)/.exec(t);if(aT)return/Edge\/([\d\.]+)/.exec(t);if(Us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GD)return/WebKit\/(\S+)/.exec(t);if(qD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bd&&(zd=Bd?Bd[1]:""),Us){var Wd=uT();if(Wd!=null&&Wd>parseFloat(zd)){yp=String(Wd);break e}}yp=zd}var vp;if(J.document&&Us){var n_=uT();vp=n_||parseInt(yp,10)||void 0}else vp=void 0;var KD=vp;function xa(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lT){e:{try{Ig(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xa.$.h.call(this)}}nt(xa,It);var QD={2:"touch",3:"pen",4:"mouse"};xa.prototype.h=function(){xa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Za="closure_listenable_"+(1e6*Math.random()|0),YD=0;function XD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++YD,this.fa=this.ia=!1}function yh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function JD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function cT(t){const e={};for(const n in t)e[n]=t[n];return e}const r_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<r_.length;s++)n=r_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function vh(t){this.src=t,this.g={},this.h=0}vh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=wp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new XD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function _p(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=oT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var xg="closure_lm_"+(1e6*Math.random()|0),Hd={};function dT(t,e,n,r,i){if(r&&r.once)return pT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dT(t,e[s],n,r,i);return null}return n=Ag(n),t&&t[Za]?t.O(e,n,Ja(r)?!!r.capture:!!r,i):fT(t,e,n,!1,r,i)}function fT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ja(i)?!!i.capture:!!i,a=Cg(t);if(a||(t[xg]=a=new vh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)WD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZD(){function t(n){return e.call(t.src,t.listener,n)}const e=eL;return t}function pT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pT(t,e[s],n,r,i);return null}return n=Ag(n),t&&t[Za]?t.P(e,n,Ja(r)?!!r.capture:!!r,i):fT(t,e,n,!0,r,i)}function mT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mT(t,e[s],n,r,i);else r=Ja(r)?!!r.capture:!!r,n=Ag(n),t&&t[Za]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=wp(s,n,r,i),-1<n&&(yh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wp(e,n,r,i)),(n=-1<t?e[t]:null)&&Sg(n))}function Sg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Za])_p(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cg(e))?(_p(n,t),n.h==0&&(n.src=null,e[xg]=null)):yh(t)}}}function gT(t){return t in Hd?Hd[t]:Hd[t]="on"+t}function eL(t,e){if(t.fa)t=!0;else{e=new xa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Sg(t),t=n.call(r,e)}return t}function Cg(t){return t=t[xg],t instanceof vh?t:null}var qd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ag(t){return typeof t=="function"?t:(t[qd]||(t[qd]=function(e){return t.handleEvent(e)}),t[qd])}function et(){oi.call(this),this.i=new vh(this),this.S=this,this.J=null}nt(et,oi);et.prototype[Za]=!0;et.prototype.removeEventListener=function(t,e,n,r){mT(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),hT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bl(o,r,!0,e)&&i}if(o=e.g=t,i=Bl(o,r,!0,e)&&i,i=Bl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bl(o,r,!1,e)&&i}et.prototype.N=function(){if(et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yh(n[r]);delete t.g[e],t.h--}}this.J=null};et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_p(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var kg=J.JSON.stringify;class tL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function nL(){var t=Rg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rL{constructor(){this.h=this.g=null}add(e,n){const r=yT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yT=new tL(()=>new iL,t=>t.reset());class iL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function oL(t){J.setTimeout(()=>{throw t},0)}let Sa,Ca=!1,Rg=new rL,vT=()=>{const t=J.Promise.resolve(void 0);Sa=()=>{t.then(aL)}};var aL=()=>{for(var t;t=nL();){try{t.h.call(t.g)}catch(n){oL(n)}var e=yT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ca=!1};function _h(t,e){et.call(this),this.h=t||1,this.g=e||J,this.j=Et(this.qb,this),this.l=Date.now()}nt(_h,et);M=_h.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Pg(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){_h.$.N.call(this),Pg(this),delete this.g};function bg(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function _T(t){t.g=bg(()=>{t.g=null,t.i&&(t.i=!1,_T(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lL extends oi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_T(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(t){oi.call(this),this.h=t,this.g={}}nt(Aa,oi);var i_=[];function wT(t,e,n,r){Array.isArray(n)||(n&&(i_[0]=n.toString()),n=i_);for(var i=0;i<n.length;i++){var s=dT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ET(t){Tg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sg(e)},t),t.g={}}Aa.prototype.N=function(){Aa.$.N.call(this),ET(this)};Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wh(){this.g=!0}wh.prototype.Ea=function(){this.g=!1};function uL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ps(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dL(t,n)+(r?" "+r:"")})}function hL(t,e){t.info(function(){return"TIMEOUT: "+e})}wh.prototype.info=function(){};function dL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kg(n)}catch{return e}}var Hi={},s_=null;function Eh(){return s_=s_||new et}Hi.Ta="serverreachability";function IT(t){It.call(this,Hi.Ta,t)}nt(IT,It);function ka(t){const e=Eh();ct(e,new IT(e))}Hi.STAT_EVENT="statevent";function TT(t,e){It.call(this,Hi.STAT_EVENT,t),this.stat=e}nt(TT,It);function Rt(t){const e=Eh();ct(e,new TT(e,t))}Hi.Ua="timingevent";function xT(t,e){It.call(this,Hi.Ua,t),this.size=e}nt(xT,It);function el(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Ih={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ST={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ng(){}Ng.prototype.h=null;function o_(t){return t.h||(t.h=t.i())}function CT(){}var tl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Og(){It.call(this,"d")}nt(Og,It);function Dg(){It.call(this,"c")}nt(Dg,It);var Ep;function Th(){}nt(Th,Ng);Th.prototype.g=function(){return new XMLHttpRequest};Th.prototype.i=function(){return{}};Ep=new Th;function nl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Aa(this),this.P=fL,t=gp?125:void 0,this.V=new _h(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new AT}function AT(){this.i=null,this.g="",this.h=!1}var fL=45e3,Ip={},oc={};M=nl.prototype;M.setTimeout=function(t){this.P=t};function Tp(t,e,n){t.L=1,t.v=Sh(or(e)),t.s=n,t.S=!0,kT(t,null)}function kT(t,e){t.G=Date.now(),rl(t),t.A=or(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),MT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new AT,t.g=rx(t.l,n?e:null,!t.s),0<t.O&&(t.M=new lL(Et(t.Pa,t,t.g),t.O)),wT(t.U,t.g,"readystatechange",t.nb),e=t.I?cT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ka(),uL(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&kn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const c=kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||gp||this.g&&(this.h.h||this.g.ja()||c_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ka(3):ka(2)),xh(this);var n=this.g.da();this.ca=n;t:if(RT(this)){var r=c_(this.g);t="";var i=r.length,s=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),Qo(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ta(a)){var u=a;break t}}u=null}if(n=u)ps(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xp(this,n);else{this.i=!1,this.o=3,Rt(12),gi(this),Qo(this);break e}}this.S?(PT(this,c,o),gp&&this.i&&c==3&&(wT(this.U,this.V,"tick",this.mb),this.V.start())):(ps(this.j,this.m,o,null),xp(this,o)),c==4&&gi(this),this.i&&!this.J&&(c==4?ZT(this.l,this):(this.i=!1,rl(this)))}else DL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),gi(this),Qo(this)}}}catch{}finally{}};function RT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function PT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=pL(t,n),i==oc){e==4&&(t.o=4,Rt(14),r=!1),ps(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ip){t.o=4,Rt(15),ps(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ps(t.j,t.m,i,null),xp(t,i);RT(t)&&i!=oc&&i!=Ip&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fg(e),e.M=!0,Rt(11))):(ps(t.j,t.m,n,"[Invalid Chunked Response]"),gi(t),Qo(t))}M.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.C<e.length&&(xh(this),PT(this,t,e),this.i&&t!=4&&rl(this))}};function pL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?oc:(n=Number(e.substring(n,r)),isNaN(n)?Ip:(r+=1,r+n>e.length?oc:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,gi(this)};function rl(t){t.Y=Date.now()+t.P,bT(t,t.P)}function bT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=el(Et(t.lb,t),e)}function xh(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hL(this.j,this.A),this.L!=2&&(ka(),Rt(17)),gi(this),this.o=2,Qo(this)):bT(this,this.Y-t)};function Qo(t){t.l.H==0||t.J||ZT(t.l,t)}function gi(t){xh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Pg(t.V),ET(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function xp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sp(n.i,t))){if(!t.K&&Sp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)uc(n),kh(n);else break e;jg(n),Rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=el(Et(n.ib,n),6e3));if(1>=jT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else yi(n,11)}else if((t.K||n.g==t)&&uc(n),!Ta(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Lg(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ee(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=nx(r,r.J?r.pa:null,r.Y),o.K){FT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(xh(a),rl(a)),r.g=o}else XT(r);0<n.j.length&&Rh(n)}else u[0]!="stop"&&u[0]!="close"||yi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?yi(n,7):$g(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ka(4)}catch{}}function mL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(mh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function gL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(mh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function NT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(mh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gL(t),r=mL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var OT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ti(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ti){this.h=t.h,ac(this,t.j),this.s=t.s,this.g=t.g,lc(this,t.m),this.l=t.l;var e=t.i,n=new Ra;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),a_(this,n),this.o=t.o}else t&&(e=String(t).match(OT))?(this.h=!1,ac(this,e[1]||"",!0),this.s=No(e[2]||""),this.g=No(e[3]||"",!0),lc(this,e[4]),this.l=No(e[5]||"",!0),a_(this,e[6]||"",!0),this.o=No(e[7]||"")):(this.h=!1,this.i=new Ra(null,this.h))}Ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oo(e,l_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Oo(e,l_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Oo(n,n.charAt(0)=="/"?wL:_L,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oo(n,IL)),t.join("")};function or(t){return new Ti(t)}function ac(t,e,n){t.j=n?No(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function a_(t,e,n){e instanceof Ra?(t.i=e,TL(t.i,t.h)):(n||(e=Oo(e,EL)),t.i=new Ra(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Sh(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function No(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var l_=/[#\/\?@]/g,_L=/[#\?:]/g,wL=/[#\?]/g,EL=/[#\?@]/g,IL=/#/g;function Ra(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ai(t){t.g||(t.g=new Map,t.h=0,t.i&&yL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ra.prototype;M.add=function(t,e){ai(this),this.i=null,t=io(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function DT(t,e){ai(t),e=io(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function LT(t,e){return ai(t),e=io(t,e),t.g.has(e)}M.forEach=function(t,e){ai(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.ta=function(){ai(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.Z=function(t){ai(this);let e=[];if(typeof t=="string")LT(this,t)&&(e=e.concat(this.g.get(io(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return ai(this),this.i=null,t=io(this,t),LT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function MT(t,e,n){DT(t,e),0<n.length&&(t.i=null,t.g.set(io(t,e),Eg(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function io(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TL(t,e){e&&!t.j&&(ai(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(DT(this,r),MT(this,i,n))},t)),t.j=e}var xL=class{constructor(t,e){this.g=t,this.map=e}};function VT(t){this.l=t||SL,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SL=10;function $T(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jT(t){return t.h?1:t.g?t.g.size:0}function Sp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lg(t,e){t.g?t.g.add(e):t.h=e}function FT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}VT.prototype.cancel=function(){if(this.i=UT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function UT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Eg(t.i)}var CL=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function AL(){this.g=new CL}function kL(t,e,n){const r=n||"";try{NT(t,function(i,s){let o=i;Ja(i)&&(o=kg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function RL(t,e){const n=new wh;if(J.Image){const r=new Image;r.onload=zl(Wl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=zl(Wl,n,r,"TestLoadImage: error",!1,e),r.onabort=zl(Wl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=zl(Wl,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function il(t){this.l=t.fc||null,this.j=t.ob||!1}nt(il,Ng);il.prototype.g=function(){return new Ch(this.l,this.j)};il.prototype.i=function(t){return function(){return t}}({});function Ch(t,e){et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Mg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Ch,et);var Mg=0;M=Ch.prototype;M.open=function(t,e){if(this.readyState!=Mg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pa(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sl(this)),this.readyState=Mg};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pa(this)),this.g&&(this.readyState=3,Pa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sl(this):Pa(this),this.readyState==3&&zT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,sl(this))};M.Ya=function(t){this.g&&(this.response=t,sl(this))};M.ka=function(){this.g&&sl(this)};function sl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pa(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ch.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PL=J.JSON.parse;function Me(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=BT,this.L=this.M=!1}nt(Me,et);var BT="",bL=/^https?$/i,NL=["POST","PUT"];M=Me.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ep.g(),this.C=this.u?o_(this.u):o_(Ep),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){u_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=oT(NL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{qT(this),0<this.B&&((this.L=OL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=bg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){u_(this,s)}};function OL(t){return Us&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof wg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function u_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,WT(t),Ah(t)}function WT(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Ah(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ah(this,!0)),Me.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?HT(this):this.kb())};M.kb=function(){HT(this)};function HT(t){if(t.h&&typeof wg<"u"&&(!t.C[1]||kn(t)!=4||t.da()!=2)){if(t.v&&kn(t)==4)bg(t.La,0,t);else if(ct(t,"readystatechange"),kn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(OT)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),r=!bL.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<kn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",WT(t)}}finally{Ah(t)}}}}function Ah(t,e){if(t.g){qT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function qT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function kn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PL(e)}};function c_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case BT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function DL(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ta(t[r]))continue;var n=sL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}JD(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function GT(t){let e="";return Tg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Vg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=GT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Io(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function KT(t){this.Ga=0,this.j=[],this.l=new wh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Io("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Io("baseRetryDelayMs",5e3,t),this.hb=Io("retryDelaySeedMs",1e4,t),this.eb=Io("forwardChannelMaxRetries",2,t),this.xa=Io("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new VT(t&&t.concurrentRequestLimit),this.Ja=new AL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=KT.prototype;M.ra=8;M.H=1;function $g(t){if(QT(t),t.H==3){var e=t.W++,n=or(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),ol(t,n),e=new nl(t,t.l,e),e.L=2,e.v=Sh(or(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=rx(e.l,null),e.g.ha(e.v)),e.G=Date.now(),rl(e)}tx(t)}function kh(t){t.g&&(Fg(t),t.g.cancel(),t.g=null)}function QT(t){kh(t),t.u&&(J.clearTimeout(t.u),t.u=null),uc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Rh(t){if(!$T(t.i)&&!t.m){t.m=!0;var e=t.Na;Sa||vT(),Ca||(Sa(),Ca=!0),Rg.add(e,t),t.C=0}}function LL(t,e){return jT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=el(Et(t.Na,t,e),ex(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new nl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=cT(s),hT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YT(this,i,e),n=or(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),ol(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(GT(s)))+"&"+e:this.o&&Vg(n,this.o,s)),Lg(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,Tp(i,n,null)):Tp(i,n,e),this.H=2}}else this.H==3&&(t?h_(this,t):this.j.length==0||$T(this.i)||h_(this))};function h_(t,e){var n;e?n=e.m:n=t.W++;const r=or(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),ol(t,r),t.o&&t.s&&Vg(r,t.o,t.s),n=new nl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=YT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Lg(t.i,n),Tp(n,r,e)}function ol(t,e){t.na&&Tg(t.na,function(n,r){Ee(e,r,n)}),t.h&&NT({},function(n,r){Ee(e,r,n)})}function YT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{kL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function XT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Sa||vT(),Ca||(Sa(),Ca=!0),Rg.add(e,t),t.A=0}}function jg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=el(Et(t.Ma,t),ex(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,JT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=el(Et(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),kh(this),JT(this))};function Fg(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function JT(t){t.g=new nl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=or(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),ol(t,e),t.o&&t.s&&Vg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Sh(or(e)),n.s=null,n.S=!0,kT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,kh(this),jg(this),Rt(19))};function uc(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function ZT(t,e){var n=null;if(t.g==e){uc(t),Fg(t),t.g=null;var r=2}else if(Sp(t.i,e))n=e.F,FT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Eh(),ct(r,new xT(r,n)),Rh(t)}else XT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&LL(t,e)||r==2&&jg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yi(t,5);break;case 4:yi(t,10);break;case 3:yi(t,6);break;default:yi(t,2)}}}function ex(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function yi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new Ti("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||ac(n,"https"),Sh(n)),RL(n.toString(),r)}else Rt(2);t.H=0,t.h&&t.h.za(e),tx(t),QT(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function tx(t){if(t.H=0,t.ma=[],t.h){const e=UT(t.i);(e.length!=0||t.j.length!=0)&&(t_(t.ma,e),t_(t.ma,t.j),t.i.i.length=0,Eg(t.j),t.j.length=0),t.h.ya()}}function nx(t,e,n){var r=n instanceof Ti?or(n):new Ti(n);if(r.g!="")e&&(r.g=e+"."+r.g),lc(r,r.m);else{var i=J.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ti(null);r&&ac(s,r),e&&(s.g=e),i&&lc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),ol(t,r),r}function rx(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Me(new il({ob:!0})):new Me(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function ix(){}M=ix.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function cc(){if(Us&&!(10<=Number(KD)))throw Error("Environmental error: no available transport.")}cc.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){et.call(this),this.g=new KT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ta(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ta(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new so(this)}nt(qt,et);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=nx(t,null,t.Y),Rh(t)};qt.prototype.close=function(){$g(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kg(t),t=n);e.j.push(new xL(e.fb++,t)),e.H==3&&Rh(e)};qt.prototype.N=function(){this.g.h=null,delete this.j,$g(this.g),delete this.g,qt.$.N.call(this)};function sx(t){Og.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(sx,Og);function ox(){Dg.call(this),this.status=1}nt(ox,Dg);function so(t){this.g=t}nt(so,ix);so.prototype.Ba=function(){ct(this.g,"a")};so.prototype.Aa=function(t){ct(this.g,new sx(t))};so.prototype.za=function(t){ct(this.g,new ox)};so.prototype.ya=function(){ct(this.g,"b")};function ML(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(En,ML);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Gd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Gd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Gd(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var VL={};function Ug(t){return-128<=t&&128>t?HD(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return Ts;if(0>t)return lt(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cp;return new ge(e,0)}function ax(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(ax(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=Ts,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Rn(Math.pow(e,s)),r=r.R(s).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var Cp=4294967296,Ts=Ug(0),Ap=Ug(1),d_=Ug(16777216);M=ge.prototype;M.ea=function(){if(en(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cp+r)*e,e*=Cp}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jn(this))return"0";if(en(this))return"-"+lt(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var i=dc(n,e).g;n=hc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Jn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}M.X=function(t){return t=hc(this,t),en(t)?-1:Jn(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Ap)}M.abs=function(){return en(this)?lt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function hc(t,e){return t.add(lt(e))}M.R=function(t){if(Jn(this)||Jn(t))return Ts;if(en(this))return en(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(en(t))return lt(this.R(lt(t)));if(0>this.X(d_)&&0>t.X(d_))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Hl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Hl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Hl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Hl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Hl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function To(t,e){this.g=t,this.h=e}function dc(t,e){if(Jn(e))throw Error("division by zero");if(Jn(t))return new To(Ts,Ts);if(en(t))return e=dc(lt(t),e),new To(lt(e.g),lt(e.h));if(en(e))return e=dc(t,lt(e)),new To(lt(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ap,r=e;0>=r.X(t);)n=f_(n),r=f_(r);var i=Xi(n,1),s=Xi(r,1);for(r=Xi(r,2),n=Xi(n,2);!Jn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xi(r,1),n=Xi(n,1)}return e=hc(t,i.R(e)),new To(i,e)}for(i=Ts;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rn(n),o=s.R(e);en(o)||0<o.X(t);)n-=r,s=Rn(n),o=s.R(e);Jn(s)&&(s=Ap),i=i.add(s),t=hc(t,o)}return new To(i,t)}M.gb=function(t){return dc(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function f_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function Xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ge(i,t.h)}cc.prototype.createWebChannel=cc.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;Ih.NO_ERROR=0;Ih.TIMEOUT=8;Ih.HTTP_ERROR=6;ST.COMPLETE="complete";CT.EventType=tl;tl.OPEN="a";tl.CLOSE="b";tl.ERROR="c";tl.MESSAGE="d";et.prototype.listen=et.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Rn;ge.fromString=ax;var $L=function(){return new cc},jL=function(){return Eh()},Kd=Ih,FL=ST,UL=Hi,p_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zL=il,ql=CT,BL=Me,WL=En,xs=ge;const m_="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let oo="10.1.0";/**
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
 */const Di=new lg("@firebase/firestore");function g_(){return Di.logLevel}function B(t,...e){if(Di.logLevel<=ce.DEBUG){const n=e.map(zg);Di.debug(`Firestore (${oo}): ${t}`,...n)}}function ar(t,...e){if(Di.logLevel<=ce.ERROR){const n=e.map(zg);Di.error(`Firestore (${oo}): ${t}`,...n)}}function zs(t,...e){if(Di.logLevel<=ce.WARN){const n=e.map(zg);Di.warn(`Firestore (${oo}): ${t}`,...n)}}function zg(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function xe(t,e){t||X()}function ne(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class lx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class qL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GL{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new lx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new gt(e)}}class KL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new YL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ux{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ye(0,0))}static max(){return new ee(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ba{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ba?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends ba{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const ZL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends ba{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return ZL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ie.fromString(e))}static fromName(e){return new H(Ie.fromString(e).popFirst(5))}static empty(){return new H(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ie(e.slice()))}}function eM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Zr(i,H.empty(),e)}function tM(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(ee.min(),H.empty(),-1)}static max(){return new Zr(ee.max(),H.empty(),-1)}}function nM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const rM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function al(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==rM)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ll(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Bg.ae=-1;function Ph(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function sM(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gl(this.root,e,this.comparator,!0)}}class Gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Tt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v_(this.data.getIterator())}getIteratorFrom(e){return new v_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class v_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Tt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class hx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hx("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const oM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(xe(!!t),typeof t=="string"){let e=0;const n=oM.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
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
 */function Wg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hg(t){const e=t.mapValue.fields.__previous_value__;return Wg(e)?Hg(e):e}function Na(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class aM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wg(t)?4:lM(t)?9007199254740991:10:X()}function $n(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Na(t).isEqual(Na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),a=ei(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Li(i.bytesValue).isEqual(Li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?fc(o)===fc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(y_(o)!==y_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function Da(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return __(t.timestampValue,e.timestampValue);case 4:return __(Na(t),Na(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Li(s),l=Li(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=de(a[u],l[u]);if(c!==0)return c}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(Be(s.latitude),Be(o.latitude));return a!==0?a:de(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ws(a[u],l[u]);if(c)return c}return de(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Kl.mapValue&&o===Kl.mapValue)return 0;if(s===Kl.mapValue)return 1;if(o===Kl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=de(l[h],c[h]);if(d!==0)return d;const p=Ws(a[l[h]],u[c[h]]);if(p!==0)return p}return de(l.length,c.length)}(t.mapValue,e.mapValue);default:throw X()}}function __(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=ei(t),r=ei(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function Hs(t){return kp(t)}function kp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kp(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function w_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rp(t){return!!t&&"integerValue"in t}function qg(t){return!!t&&"arrayValue"in t}function E_(t){return!!t&&"nullValue"in t}function I_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mu(t){return!!t&&"mapValue"in t}function Yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!mu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yo(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Yo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());mu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];mu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(Yo(this.value))}}function dx(t){const e=[];return qi(t.fields,(n,r)=>{const i=new _t([n]);if(mu(r)){const s=dx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class vt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,ee.min(),ee.min(),ee.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,i){return new vt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new vt(e,2,n,ee.min(),ee.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ee.min(),ee.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pc{constructor(e,n){this.position=e,this.inclusive=n}}function T_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function x_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function uM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fx{}class He extends fx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hM(e,n,r):n==="array-contains"?new pM(e,r):n==="in"?new mM(e,r):n==="not-in"?new gM(e,r):n==="array-contains-any"?new yM(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dM(e,r):new fM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ws(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class In extends fx{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new In(e,n)}matches(e){return px(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function px(t){return t.op==="and"}function mx(t){return cM(t)&&px(t)}function cM(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function Pp(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(mx(t))return t.filters.map(e=>Pp(e)).join(",");{const e=t.filters.map(n=>Pp(n)).join(",");return`${t.op}(${e})`}}function gx(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gx(o,i.filters[a]),!0):!1}(t,e):void X()}function yx(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(yx).join(" ,")+"}"}(t):"Filter"}class hM extends He{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class dM extends He{constructor(e,n){super(e,"in",n),this.keys=vx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fM extends He{constructor(e,n){super(e,"not-in",n),this.keys=vx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class pM extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qg(n)&&Da(n.arrayValue,this.value)}}class mM extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class gM extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Da(this.value.arrayValue,n)}}class yM extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
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
 */class vM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function S_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vM(t,e,n,r,i,s,o)}function Gg(t){const e=ne(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ph(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.he=n}return e.he}function Kg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!x_(t.startAt,e.startAt)&&x_(t.endAt,e.endAt)}function bp(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ul{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function _M(t,e,n,r,i,s,o,a){return new ul(t,e,n,r,i,s,o,a)}function bh(t){return new ul(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _x(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function wx(t){return t.collectionGroup!==null}function Ss(t){const e=ne(t);if(e.Pe===null){e.Pe=[];const n=Qg(e),r=_x(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Xo(n)),e.Pe.push(new Xo(_t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Xo(_t.keyField(),s))}}}return e.Pe}function lr(t){const e=ne(t);if(!e.Ie)if(e.limitType==="F")e.Ie=S_(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ss(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xo(s.field,o))}const r=e.endAt?new pc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new pc(e.startAt.position,e.startAt.inclusive):null;e.Ie=S_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Np(t,e){e.getFirstInequalityField(),Qg(t);const n=t.filters.concat([e]);return new ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Op(t,e,n){return new ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nh(t,e){return Kg(lr(t),lr(e))&&t.limitType===e.limitType}function Ex(t){return`${Gg(lr(t))}|lt:${t.limitType}`}function Dp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yx(i)).join(", ")}]`),Ph(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hs(i)).join(",")),`Target(${r})`}(lr(t))}; limitType=${t.limitType})`}function Oh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ss(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=T_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ss(r),i)||r.endAt&&!function(o,a,l){const u=T_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ss(r),i))}(t,e)}function wM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ix(t){return(e,n)=>{let r=!1;for(const i of Ss(t)){const s=EM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EM(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ws(l,u):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return cx(this.inner)}size(){return this.innerSize}}/**
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
 */const IM=new Ne(H.comparator);function ur(){return IM}const Tx=new Ne(H.comparator);function Do(...t){let e=Tx;for(const n of t)e=e.insert(n.key,n);return e}function xx(t){let e=Tx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vi(){return Jo()}function Sx(){return Jo()}function Jo(){return new ao(t=>t.toString(),(t,e)=>t.isEqual(e))}const TM=new Ne(H.comparator),xM=new Tt(H.comparator);function ie(...t){let e=xM;for(const n of t)e=e.add(n);return e}const SM=new Tt(de);function CM(){return SM}/**
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
 */function Cx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function Ax(t){return{integerValue:""+t}}function AM(t,e){return sM(e)?Ax(e):Cx(t,e)}/**
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
 */class Dh{constructor(){this._=void 0}}function kM(t,e,n){return t instanceof mc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wg(s)&&(s=Hg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof La?Rx(t,e):t instanceof Ma?Px(t,e):function(i,s){const o=kx(i,s),a=A_(o)+A_(i.Te);return Rp(o)&&Rp(i.Te)?Ax(a):Cx(i.serializer,a)}(t,e)}function RM(t,e,n){return t instanceof La?Rx(t,e):t instanceof Ma?Px(t,e):n}function kx(t,e){return t instanceof gc?function(r){return Rp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class mc extends Dh{}class La extends Dh{constructor(e){super(),this.elements=e}}function Rx(t,e){const n=bx(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ma extends Dh{constructor(e){super(),this.elements=e}}function Px(t,e){let n=bx(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class gc extends Dh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function A_(t){return Be(t.integerValue||t.doubleValue)}function bx(t){return qg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof La&&i instanceof La||r instanceof Ma&&i instanceof Ma?Bs(r.elements,i.elements,$n):r instanceof gc&&i instanceof gc?$n(r.Te,i.Te):r instanceof mc&&i instanceof mc}(t.transform,e.transform)}class bM{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lh{}function Nx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yg(t.key,rn.none()):new cl(t.key,t.data,rn.none());{const n=t.data,r=Lt.empty();let i=new Tt(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new li(t.key,r,new Bt(i.toArray()),rn.none())}}function NM(t,e,n){t instanceof cl?function(i,s,o){const a=i.value.clone(),l=R_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof li?function(i,s,o){if(!gu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=R_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ox(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zo(t,e,n,r){return t instanceof cl?function(s,o,a,l){if(!gu(s.precondition,o))return a;const u=s.value.clone(),c=P_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(s,o,a,l){if(!gu(s.precondition,o))return a;const u=P_(s.fieldTransforms,l,o),c=o.data;return c.setAll(Ox(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return gu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function OM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kx(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function k_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bs(r,i,(s,o)=>PM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cl extends Lh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends Lh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ox(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function R_(t,e,n){const r=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RM(o,a,n[i]))}return r}function P_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,kM(s,o,e))}return r}class Yg extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DM extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sx();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Nx(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>k_(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>k_(n,r))}}class Xg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){xe(e.mutations.length===r.length);let i=function(){return TM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xg(e,n,r,i)}}/**
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
 */class MM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ae;function $M(t){switch(t){default:return X();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Dx(t){if(t===void 0)return ar("GRPC error has no .code"),S.UNKNOWN;switch(t){case ze.OK:return S.OK;case ze.CANCELLED:return S.CANCELLED;case ze.UNKNOWN:return S.UNKNOWN;case ze.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ze.INTERNAL:return S.INTERNAL;case ze.UNAVAILABLE:return S.UNAVAILABLE;case ze.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ze.NOT_FOUND:return S.NOT_FOUND;case ze.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ze.ABORTED:return S.ABORTED;case ze.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ze.DATA_LOSS:return S.DATA_LOSS;default:return X()}}(ae=ze||(ze={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Jg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ql}static getOrCreateInstance(){return Ql===null&&(Ql=new Jg),Ql}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ql=null;/**
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
 */function jM(){return new TextEncoder}/**
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
 */const FM=new xs([4294967295,4294967295],0);function b_(t){const e=jM().encode(t),n=new WL;return n.update(e),new Uint8Array(n.digest())}function N_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xs([n,r],0),new xs([i,s],0)]}class Zg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lo(`Invalid padding: ${n}`);if(r<0)throw new Lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=xs.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(xs.fromNumber(r)));return i.compare(FM)===1&&(i=new xs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=b_(e),[r,i]=N_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=b_(e),[r,i]=N_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mh(ee.min(),i,new Ne(de),ur(),ie())}}class hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hl(r,n,ie(),ie(),ie())}}/**
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
 */class yu{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class Lx{constructor(e,n){this.targetId=e,this.pe=n}}class Mx{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class O_{constructor(){this.ye=0,this.we=L_(),this.Se=At.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new hl(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=L_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class UM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ur(),this.$e=D_(),this.Ue=new Ne(de)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(bp(a))if(s===0){const l=new H(a.path);this.ze(i,l,vt.newNoDocument(l,ee.min()))}else xe(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Jg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,v){var _,w,m,f,y,E;const x={localCacheCount:p,existenceFilterCount:v.count},C=v.unchangedNames;return C&&(x.bloomFilter={applied:h===0,hashCount:(_=C==null?void 0:C.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(m=(w=C==null?void 0:C.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&f!==void 0?f:0,padding:(E=(y=C==null?void 0:C.bits)===null||y===void 0?void 0:y.padding)!==null&&E!==void 0?E:0},d&&(x.bloomFilter.mightContain=d)),x}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Li(s).toUint8Array()}catch(h){if(h instanceof hx)return zs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Zg(l,o,a)}catch(h){return zs(h instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&bp(a.target)){const l=new H(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,vt.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ie();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Mh(e,n,this.Ue,this.Ke,r);return this.Ke=ur(),this.$e=D_(),this.Ue=new Ne(de),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new O_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Tt(de),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new O_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function D_(){return new Ne(H.comparator)}function L_(){return new Ne(H.comparator)}const zM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),WM=(()=>({and:"AND",or:"OR"}))();class HM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lp(t,e){return t.useProto3Json||Ph(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qM(t,e){return yc(t,e.toTimestamp())}function Ln(t){return xe(!!t),ee.fromTimestamp(function(n){const r=ei(n);return new Ye(r.seconds,r.nanos)}(t))}function ey(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function $x(t){const e=Ie.fromString(t);return xe(zx(e)),e}function Mp(t,e){return ey(t.databaseId,e.path)}function Qd(t,e){const n=$x(e);if(n.get(1)!==t.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(jx(n))}function Vp(t,e){return ey(t.databaseId,e)}function GM(t){const e=$x(t);return e.length===4?Ie.emptyPath():jx(e)}function $p(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jx(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function M_(t,e,n){return{name:Mp(t,e),fields:n.value.mapValue.fields}}function KM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(xe(c===void 0||typeof c=="string"),At.fromBase64String(c||"")):(xe(c===void 0||c instanceof Uint8Array),At.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:Dx(u.code);return new F(c,u.message||"")}(o);n=new Mx(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):ee.min(),a=new Lt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new yu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qd(t,r.document),s=r.readTime?Ln(r.readTime):ee.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new yu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qd(t,r.document),s=r.removedTargetIds||[];n=new yu([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VM(i,s),a=r.targetId;n=new Lx(a,o)}}return n}function QM(t,e){let n;if(e instanceof cl)n={update:M_(t,e.key,e.value)};else if(e instanceof Yg)n={delete:Mp(t,e.key)};else if(e instanceof li)n={update:M_(t,e.key,e.data),updateMask:iV(e.fieldMask)};else{if(!(e instanceof DM))return X();n={verify:Mp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof mc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof La)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function YM(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(ee.min())&&(o=Ln(s)),new bM(o,i.transformResults||[])}(n,e))):[]}function XM(t,e){return{documents:[Vp(t,e.path)]}}function JM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Ux(In.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Ji(h.field),direction:tV(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Lp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ZM(t){let e=GM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Fx(h);return d instanceof In&&mx(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Xo(Zi(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ph(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new pc(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new pc(p,d)}(n.endAt)),_M(e,i,o,s,a,"F",l,u)}function eV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zi(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zi(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zi(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zi(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>Fx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function tV(t){return zM[t]}function nV(t){return BM[t]}function rV(t){return WM[t]}function Ji(t){return{fieldPath:t.canonicalString()}}function Zi(t){return _t.fromServerFormat(t.fieldPath)}function Ux(t){return t instanceof He?function(n){if(n.op==="=="){if(I_(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NAN"}};if(E_(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(I_(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NOT_NAN"}};if(E_(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ji(n.field),op:nV(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>Ux(i));return r.length===1?r[0]:{compositeFilter:{op:rV(n.op),filters:r}}}(t):X()}function iV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class br{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sV{constructor(e){this.ct=e}}function oV(t){const e=ZM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Op(e,e.limit,"L"):e}/**
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
 */class aV{constructor(){this.sn=new lV}addToCollectionParentIndex(e,n){return this.sn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Zr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class lV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Ie.comparator)).toArray()}}/**
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
 */class qs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new qs(0)}static On(){return new qs(-1)}}/**
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
 */class uV{constructor(){this.changes=new ao(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zo(r.mutation,i,Bt.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Do();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=Jo(),a=function(){return Jo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof li)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Zo(c.mutation,u,c.mutation.getFieldMask(),Ye.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new cV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Jo();let i=new Ne((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Sx();c.forEach(d=>{if(!s.has(d)){const p=Nx(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(vi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:xx(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Do();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Do();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,h){return new ul(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,vt.newInvalidDocument(u)))});let o=Do();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Zo(u.mutation,l,Bt.empty(),Ye.now()),Oh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class dV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return R.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:oV(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),R.resolve()}}/**
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
 */class fV{constructor(){this.overlays=new Ne(H.comparator),this.cr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=vi(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=vi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=vi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MM(n,r));let s=this.cr.get(n);s===void 0&&(s=ie(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class ty{constructor(){this.lr=new Tt(Xe.hr),this.Pr=new Tt(Xe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Xe(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new H(new Ie([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new H(new Ie([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ie();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return H.comparator(e.key,n.key)||de(e.mr,n.mr)}static Ir(e,n){return de(e.mr,n.mr)||H.comparator(e.key,n.key)}}/**
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
 */class pV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Tt(Xe.hr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(de);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),R.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new H(s),0);let a=new Tt(de);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),R.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return R.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Xe(n,0),i=this.pr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mV{constructor(e){this.Dr=e,this.docs=function(){return new Ne(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nM(tM(c),r)<=0||(i.has(c.key)||Oh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gV(this)}getSize(e){return R.resolve(this.size)}}class gV extends uV{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class yV{constructor(e){this.persistence=e,this.Cr=new ao(n=>Gg(n),Kg),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ty,this.targetCount=0,this.Or=qs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),R.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Ln(n),R.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Mr.containsKey(n))}}/**
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
 */class vV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Bg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new yV(this),this.indexManager=new aV,this.remoteDocumentCache=function(i){return new mV(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new sV(n),this.Qr=new dV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new pV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new _V(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return R.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class _V extends iM{constructor(e){super(),this.currentSequenceNumber=e}}class ny{constructor(e){this.persistence=e,this.Wr=new ty,this.Gr=null}static zr(e){return new ny(e)}get jr(){if(this.Gr)return this.Gr;throw X()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.jr,r=>{const i=H.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return R.or([()=>R.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class ry{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ry(e,n.fromCache,r,i)}}/**
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
 */class wV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(C_(n))return R.resolve(null);let r=lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Op(n,null,"F"),r=lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Op(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return C_(n)||i.isEqual(ee.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(g_()<=ce.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dp(n)),this.ji(e,o,n,eM(i,-1)))})}Gi(e,n){let r=new Tt(Ix(e));return n.forEach((i,s)=>{Oh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return g_()<=ce.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Dp(n)),this.Ki.getDocumentsMatchingQuery(e,n,Zr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class EV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ne(de),this.Yi=new ao(s=>Gg(s),Kg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function IV(t,e,n,r){return new EV(t,e,n,r)}async function Bx(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function TV(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=R.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);xe(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Wx(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function xV(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(At.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,w,m){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=ur(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(SV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(ee.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function SV(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function CV(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AV(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function jp(t,e,n){const r=ne(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ll(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function V_(t,e,n){const r=ne(t);let i=ee.min(),s=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=ne(l),d=h.Yi.get(c);return d!==void 0?R.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ie())).next(a=>(kV(r,wM(e),a),{documents:a,ss:s})))}function kV(t,e,n){let r=t.Zi.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class $_{constructor(){this.activeTargetIds=CM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RV{constructor(){this.Hs=new $_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new $_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PV{Ys(e){}shutdown(){}}/**
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
 */class j_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yl=null;function Yd(){return Yl===null?Yl=function(){return 268435456+Math.round(2147483648*Math.random())}():Yl++,"0x"+Yl.toString(16)}/**
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
 */const bV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class NV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const pt="WebChannelConnection";class OV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Yd(),l=this.mo(n,r);B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(B("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw zs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=bV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Yd();return new Promise((o,a)=>{const l=new BL;l.setWithCredentials(!0),l.listenOnce(FL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Kd.NO_ERROR:const c=l.getResponseJson();B(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Kd.TIMEOUT:B(pt,`RPC '${e}' ${s} timed out`),a(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case Kd.HTTP_ERROR:const h=l.getStatus();if(B(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(p.status);a(new F(v,p.message))}else a(new F(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(S.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{B(pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);B(pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Yd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$L(),a=jL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new zL({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");B(pt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new NV({so:w=>{p?B(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(B(pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),B(pt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,m,f)=>{w.listen(m,y=>{try{f(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,ql.EventType.OPEN,()=>{p||B(pt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ql.EventType.CLOSE,()=>{p||(p=!0,B(pt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,ql.EventType.ERROR,w=>{p||(p=!0,zs(pt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new F(S.UNAVAILABLE,"The operation could not be completed")))}),_(h,ql.EventType.MESSAGE,w=>{var m;if(!p){const f=w.data[0];xe(!!f);const y=f,E=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(E){B(pt,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let C=function(q){const V=ze[q];if(V!==void 0)return Dx(V)}(x),b=E.message;C===void 0&&(C=S.INTERNAL,b="Unknown error status: "+x+" with message "+E.message),p=!0,v.Po(new F(C,b)),h.close()}else B(pt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,UL.STAT_EVENT,w=>{w.stat===p_.PROXY?B(pt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===p_.NOPROXY&&B(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function Xd(){return typeof document<"u"?document:null}/**
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
 */function Vh(t){return new HM(t,!0)}/**
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
 */class Hx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class qx{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Hx(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new F(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DV extends qx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=KM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Ln(o.readTime):ee.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=$p(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=bp(l)?{documents:XM(s,l)}:{query:JM(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vx(s,o.resumeToken);const u=Lp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=yc(s,o.snapshotVersion.toTimestamp());const u=Lp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=eV(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=$p(this.serializer),n.removeTarget=e,this.Ho(n)}}class LV extends qx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=YM(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.u_(r,n)}return xe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=$p(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QM(this.serializer,r))};this.Ho(n)}}/**
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
 */class MV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(S.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(S.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class VV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ar(n),this.d_=!1):B("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class $V{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ne(l);u.y_.add(4),await dl(u),u.b_.set("Unknown"),u.y_.delete(4),await $h(u)}(this))})}),this.b_=new VV(r,i)}}async function $h(t){if(Gi(t))for(const e of t.w_)await e(!0)}async function dl(t){for(const e of t.w_)await e(!1)}function Gx(t,e){const n=ne(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),oy(n)?sy(n):lo(n).Uo()&&iy(n,e))}function Kx(t,e){const n=ne(t),r=lo(n);n.p_.delete(e),r.Uo()&&Qx(n,e),n.p_.size===0&&(r.Uo()?r.zo():Gi(n)&&n.b_.set("Unknown"))}function iy(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).i_(e)}function Qx(t,e){t.D_.Be(e),lo(t).s_(e)}function sy(t){t.D_=new UM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.b_.A_()}function oy(t){return Gi(t)&&!lo(t).$o()&&t.p_.size>0}function Gi(t){return ne(t).y_.size===0}function Yx(t){t.D_=void 0}async function jV(t){t.p_.forEach((e,n)=>{iy(t,e)})}async function FV(t,e){Yx(t),oy(t)?(t.b_.m_(e),sy(t)):t.b_.set("Unknown")}async function UV(t,e,n){if(t.b_.set("Online"),e instanceof Mx&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vc(t,r)}else if(e instanceof yu?t.D_.We(e):e instanceof Lx?t.D_.Ze(e):t.D_.je(e),!n.isEqual(ee.min()))try{const r=await Wx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(At.EMPTY_BYTE_STRING,c.snapshotVersion)),Qx(s,l);const h=new br(c.target,l,u,c.sequenceNumber);iy(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await vc(t,r)}}async function vc(t,e,n){if(!ll(e))throw e;t.y_.add(1),await dl(t),t.b_.set("Offline"),n||(n=()=>Wx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await $h(t)})}function Xx(t,e){return e().catch(n=>vc(t,n,e))}async function jh(t){const e=ne(t),n=ti(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;zV(e);)try{const i=await CV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,BV(e,i)}catch(i){await vc(e,i)}Jx(e)&&Zx(e)}function zV(t){return Gi(t)&&t.g_.length<10}function BV(t,e){t.g_.push(e);const n=ti(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Jx(t){return Gi(t)&&!ti(t).$o()&&t.g_.length>0}function Zx(t){ti(t).start()}async function WV(t){ti(t).l_()}async function HV(t){const e=ti(t);for(const n of t.g_)e.a_(n.mutations)}async function qV(t,e,n){const r=t.g_.shift(),i=Xg.from(r,e,n);await Xx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jh(t)}async function GV(t,e){e&&ti(t).__&&await async function(r,i){if(function(o){return $M(o)&&o!==S.ABORTED}(i.code)){const s=r.g_.shift();ti(r).Go(),await Xx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jh(r)}}(t,e),Jx(t)&&Zx(t)}async function F_(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n.y_.add(3),await dl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await $h(n)}async function KV(t,e){const n=ne(t);e?(n.y_.delete(2),await $h(n)):e||(n.y_.add(2),await dl(n),n.b_.set("Unknown"))}function lo(t){return t.v_||(t.v_=function(n,r,i){const s=ne(n);return s.P_(),new DV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:jV.bind(null,t),uo:FV.bind(null,t),r_:UV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),oy(t)?sy(t):t.b_.set("Unknown")):(await t.v_.stop(),Yx(t))})),t.v_}function ti(t){return t.C_||(t.C_=function(n,r,i){const s=ne(n);return s.P_(),new LV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:WV.bind(null,t),uo:GV.bind(null,t),c_:HV.bind(null,t),u_:qV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await jh(t)):(await t.C_.stop(),t.g_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class ay{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ay(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ly(t,e){if(ar("AsyncQueue",`${e}: ${t}`),ll(t))return new F(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Do(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U_{constructor(){this.F_=new Ne(H.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):X():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gs(e,n,Cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class QV{constructor(){this.x_=void 0,this.listeners=[]}}class YV{constructor(){this.queries=new ao(e=>Ex(e),Nh),this.onlineState="Unknown",this.O_=new Set}}async function uy(t,e){const n=ne(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new QV),i)try{s.x_=await n.onListen(r)}catch(o){const a=ly(o,`Initialization of query '${Dp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&hy(n)}async function cy(t,e){const n=ne(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function XV(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&hy(n)}function JV(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function hy(t){t.O_.forEach(e=>{e.next()})}class dy{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class eS{constructor(e){this.key=e}}class tS{constructor(e){this.key=e}}class ZV{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ie(),this.mutatedKeys=ie(),this.na=Ix(e),this.ra=new Cs(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new U_,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Oh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return v(d)-v(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Gs(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new U_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ie(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new tS(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new eS(r))}),n}ha(e){this.X_=e.ss,this.ta=ie();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Gs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class e4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t4{constructor(e){this.key=e,this.Ia=!1}}class n4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ao(a=>Ex(a),Nh),this.da=new Map,this.Aa=new Set,this.Ra=new Ne(H.comparator),this.Va=new Map,this.ma=new ty,this.fa={},this.ga=new Map,this.pa=qs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function r4(t,e){const n=f4(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await AV(n.localStore,lr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await i4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Gx(n.remoteStore,o)}return i}async function i4(t,e,n,r,i){t.wa=(h,d,p)=>async function(_,w,m,f){let y=w.view.sa(m);y.zi&&(y=await V_(_.localStore,w.query,!1).then(({documents:C})=>w.view.sa(C,y)));const E=f&&f.targetChanges.get(w.targetId),x=w.view.applyChanges(y,_.isPrimaryClient,E);return B_(_,w.targetId,x.ca),x.snapshot}(t,h,d,p);const s=await V_(t.localStore,e,!0),o=new ZV(e,s.ss),a=o.sa(s.documents),l=hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);B_(t,n,u.ca);const c=new e4(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function s4(t,e){const n=ne(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Nh(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await jp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Kx(n.remoteStore,r.targetId),Fp(n,r.targetId)}).catch(al)):(Fp(n,r.targetId),await jp(n.localStore,r.targetId,!0))}async function o4(t,e,n){const r=p4(t);try{const i=await function(o,a){const l=ne(o),u=Ye.now(),c=a.reduce((p,v)=>p.add(v.key),ie());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=ur(),_=ie();return l.Xi.getEntries(p,c).next(w=>{v=w,v.forEach((m,f)=>{f.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const m=[];for(const f of a){const y=OM(f,h.get(f.key).overlayedDocument);y!=null&&m.push(new li(f.key,y,dx(y.value.mapValue),rn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:xx(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Ne(de)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await fl(r,i.changes),await jh(r.remoteStore)}catch(i){const s=ly(i,"Failed to persist write");n.reject(s)}}async function nS(t,e){const n=ne(t);try{const r=await xV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?xe(o.Ia):i.removedDocuments.size>0&&(xe(o.Ia),o.Ia=!1))}),await fl(n,r,e)}catch(r){await al(r)}}function z_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&hy(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function a4(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Ne(H.comparator);o=o.insert(s,vt.newNoDocument(s,ee.min()));const a=ie().add(s),l=new Mh(ee.min(),new Map,new Ne(de),o,a);await nS(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),fy(r)}else await jp(r.localStore,e,!1).then(()=>Fp(r,e,n)).catch(al)}async function l4(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await TV(n.localStore,e);iS(n,r,null),rS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fl(n,i)}catch(i){await al(i)}}async function u4(t,e,n){const r=ne(t);try{const i=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(xe(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);iS(r,e,n),rS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fl(r,i)}catch(i){await al(i)}}function rS(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function iS(t,e,n){const r=ne(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Fp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||sS(t,r)})}function sS(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(Kx(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),fy(t))}function B_(t,e,n){for(const r of n)r instanceof eS?(t.ma.addReference(r.key,e),c4(t,r)):r instanceof tS?(B("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||sS(t,r.key)):X()}function c4(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Aa.add(r),fy(t))}function fy(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new H(Ie.fromString(e)),r=t.pa.next();t.Va.set(r,new t4(n)),t.Ra=t.Ra.insert(n,r),Gx(t.remoteStore,new br(lr(bh(n.path)),r,"TargetPurposeLimboResolution",Bg.ae))}}async function fl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ry.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=ne(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,d=>R.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ll(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function h4(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Bx(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new F(S.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fl(n,r.ts)}}function d4(t,e){const n=ne(t),r=n.Va.get(e);if(r&&r.Ia)return ie().add(r.key);{let i=ie();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function f4(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=d4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a4.bind(null,e),e.Ta.r_=XV.bind(null,e.eventManager),e.Ta.Sa=JV.bind(null,e.eventManager),e}function p4(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=l4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u4.bind(null,e),e}class W_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IV(this.persistence,new wV,e.initialUser,this.serializer)}createPersistence(e){return new vV(ny.zr,this.serializer)}createSharedClientState(e){return new RV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class m4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>z_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h4.bind(null,this.syncEngine),await KV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YV}()}createDatastore(e){const n=Vh(e.databaseInfo.databaseId),r=function(s){return new OV(s)}(e.databaseInfo);return function(s,o,a,l){return new MV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new $V(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>z_(this.syncEngine,n,0),function(){return j_.v()?new j_:new PV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new n4(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ne(n);B("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await dl(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class py{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class g4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=ux.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ly(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function H_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v4(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>F_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>F_(e.remoteStore,s)),t._onlineComponents=e}function y4(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function v4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!y4(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await Jd(t,new W_)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Jd(t,new W_);return t._offlineComponents}async function oS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await H_(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await H_(t,new m4))),t._onlineComponents}function _4(t){return oS(t).then(e=>e.syncEngine)}async function _c(t){const e=await oS(t),n=e.eventManager;return n.onListen=r4.bind(null,e.syncEngine),n.onUnlisten=s4.bind(null,e.syncEngine),n}function w4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new py({next:d=>{o.enqueueAndForget(()=>cy(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new F(S.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new F(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new dy(bh(a.path),c,{includeMetadataChanges:!0,W_:!0});return uy(s,h)}(await _c(t),t.asyncQueue,e,n,r)),r.promise}function E4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new py({next:d=>{o.enqueueAndForget(()=>cy(s,h)),d.fromCache&&l.source==="server"?u.reject(new F(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new dy(a,c,{includeMetadataChanges:!0,W_:!0});return uy(s,h)}(await _c(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function aS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const q_=new Map;/**
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
 */function lS(t,e,n){if(!n)throw new F(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function I4(t,e,n,r){if(e===!0&&r===!0)throw new F(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function G_(t){if(!H.isDocumentKey(t))throw new F(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function K_(t){if(H.isDocumentKey(t))throw new F(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fh(t);throw new F(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Q_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Q_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Q_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HL;switch(r.type){case"firstParty":return new QL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=q_.get(n);r&&(B("ComponentProvider","Removing Datastore"),q_.delete(n),r.terminate())}(this),Promise.resolve()}}function T4(t,e,n,r={}){var i;const s=(t=Ft(t,Uh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=gt.MOCK_USER;else{a=vI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(u)}t._authCredentials=new qL(new lx(a,l))}}/**
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
 */class Ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ki(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class qr extends Ki{constructor(e,n,r){super(e,n,bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new H(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function uo(t,e,...n){if(t=qe(t),lS("collection","path",e),t instanceof Uh){const r=Ie.fromString(e,...n);return K_(r),new qr(t,null,r)}{if(!(t instanceof xt||t instanceof qr))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return K_(r),new qr(t.firestore,null,r)}}function wt(t,e,...n){if(t=qe(t),arguments.length===1&&(e=ux.V()),lS("doc","path",e),t instanceof Uh){const r=Ie.fromString(e,...n);return G_(r),new xt(t,null,new H(r))}{if(!(t instanceof xt||t instanceof qr))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return G_(r),new xt(t.firestore,t instanceof qr?t.converter:null,new H(r))}}/**
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
 */class x4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Hx(this,"async_queue_retry"),this.Xa=()=>{const n=Xd();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Xd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new er;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ll(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=ay.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&X()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Y_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class cr extends Uh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new x4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uS(this),this._firestoreClient.terminate()}}function S4(t,e){const n=typeof t=="object"?t:cg(),r=typeof t=="string"?t:e||"(default)",i=hh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=mI("firestore");s&&T4(i,...s)}return i}function zh(t){return t._firestoreClient||uS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new aM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,aS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new g4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(At.fromBase64String(e))}catch(n){throw new F(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class my{constructor(e){this._methodName=e}}/**
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
 */class gy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const C4=/^__.*__$/;class A4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new cl(e,this.data,n,this.fieldTransforms)}}class cS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new li(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class yy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new yy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return wc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(hS(this.uu)&&C4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class k4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vh(e)}Ru(e,n,r,i=!1){return new yy({uu:e,methodName:n,Au:r,path:_t.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wh(t){const e=t._freezeSettings(),n=Vh(t._databaseId);return new k4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dS(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);vy("Data must be an object, but it was:",o,r);const a=fS(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Up(e,h,n);if(!o.contains(d))throw new F(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mS(c,d)||c.push(d)}l=new Bt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new A4(new Lt(a),l,u)}class Hh extends my{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hh}}function R4(t,e,n,r){const i=t.Ru(1,e,n);vy("Data must be an object, but it was:",i,r);const s=[],o=Lt.empty();qi(r,(l,u)=>{const c=_y(e,l,n);u=qe(u);const h=i.Iu(c);if(u instanceof Hh)s.push(c);else{const d=pl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Bt(s);return new cS(o,a,i.fieldTransforms)}function P4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Up(e,r,n)],l=[i];if(s.length%2!=0)throw new F(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Up(e,s[d])),l.push(s[d+1]);const u=[],c=Lt.empty();for(let d=a.length-1;d>=0;--d)if(!mS(u,a[d])){const p=a[d];let v=l[d];v=qe(v);const _=o.Iu(p);if(v instanceof Hh)u.push(p);else{const w=pl(v,_);w!=null&&(u.push(p),c.set(p,w))}}const h=new Bt(u);return new cS(c,h,o.fieldTransforms)}function b4(t,e,n,r=!1){return pl(n,t.Ru(r?4:3,e))}function pl(t,e){if(pS(t=qe(t)))return vy("Unsupported field value:",e,t),fS(t,e);if(t instanceof my)return function(r,i){if(!hS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=pl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:yc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yc(i.serializer,s)}}if(r instanceof gy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:Vx(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ey(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Fh(r)}`)}(t,e)}function fS(t,e){const n={};return cx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(t,(r,i)=>{const s=pl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof gy||t instanceof Ks||t instanceof xt||t instanceof my)}function vy(t,e,n){if(!pS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Fh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Up(t,e,n){if((e=qe(e))instanceof Bh)return e._internalPath;if(typeof e=="string")return _y(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const N4=new RegExp("[~\\*/\\[\\]]");function _y(t,e,n){if(e.search(N4)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bh(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(S.INVALID_ARGUMENT,a+t+l)}function mS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class gS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O4 extends gS{data(){return super.data()}}function wy(t,e){return typeof e=="string"?_y(t,e):e instanceof Bh?e._internalPath:e._delegate._internalPath}/**
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
 */function yS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ey{}class D4 extends Ey{}function L4(t,e,...n){let r=[];e instanceof Ey&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Iy).length,a=s.filter(l=>l instanceof qh).length;if(o>1||o>0&&a>0)throw new F(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qh extends D4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qh(e,n,r)}_apply(e){const n=this._parse(e);return vS(e._query,n),new Ki(e.firestore,e.converter,Np(e._query,n))}_parse(e){const n=Wh(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){J_(h,c);const p=[];for(const v of h)p.push(X_(l,s,v));d={arrayValue:{values:p}}}else d=X_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||J_(h,c),d=b4(a,o,h,c==="in"||c==="not-in");return He.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function M4(t,e,n){const r=e,i=wy("where",t);return qh._create(i,r,n)}class Iy extends Ey{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Iy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)vS(o,l),o=Np(o,l)}(e._query,n),new Ki(e.firestore,e.converter,Np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function X_(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new F(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wx(e)&&n.indexOf("/")!==-1)throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!H.isDocumentKey(r))throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return w_(t,new H(r))}if(n instanceof xt)return w_(t,n._key);throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fh(n)}.`)}function J_(t,e){if(!Array.isArray(t)||t.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vS(t,e){if(e.isInequality()){const r=Qg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new F(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=_x(t);s!==null&&V4(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function V4(t,e,n){if(!n.isEqual(e))throw new F(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class $4{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gy(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const n=ei(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);xe(zx(r));const i=new Oa(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function _S(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wS extends gS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vu extends wS{data(e={}){return super.data(e)}}class ES{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vu(this._firestore,this._userDataWriter,r.key,r,new Mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new vu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new vu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:j4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function j4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Ty(t){t=Ft(t,xt);const e=Ft(t.firestore,cr);return w4(zh(e),t._key).then(n=>TS(e,t,n))}class xy extends $4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function F4(t){t=Ft(t,Ki);const e=Ft(t.firestore,cr),n=zh(e),r=new xy(e);return yS(t._query),E4(n,t._query).then(i=>new ES(e,r,t,i))}function Sy(t,e,n){t=Ft(t,xt);const r=Ft(t.firestore,cr),i=_S(t.converter,e,n);return Kh(r,[dS(Wh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function xi(t,e,n,...r){t=Ft(t,xt);const i=Ft(t.firestore,cr),s=Wh(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Bh?P4(s,"updateDoc",t._key,e,n,r):R4(s,"updateDoc",t._key,e),Kh(i,[o.toMutation(t._key,rn.exists(!0))])}function IS(t){return Kh(Ft(t.firestore,cr),[new Yg(t._key,rn.none())])}function U4(t,e){const n=Ft(t.firestore,cr),r=wt(t),i=_S(t.converter,e);return Kh(n,[dS(Wh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function Gh(t,...e){var n,r,i;t=qe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Y_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Y_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof xt)u=Ft(t.firestore,cr),c=bh(t._key.path),l={next:h=>{e[o]&&e[o](TS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ft(t,Ki);u=Ft(h.firestore,cr),c=h._query;const d=new xy(u);l={next:p=>{e[o]&&e[o](new ES(u,d,h,p))},error:e[o+1],complete:e[o+2]},yS(t._query)}return function(d,p,v,_){const w=new py(_),m=new dy(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>uy(await _c(d),m)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>cy(await _c(d),m))}}(zh(u),c,a,l)}function Kh(t,e){return function(r,i){const s=new er;return r.asyncQueue.enqueueAndForget(async()=>o4(await _4(r),i,s)),s.promise}(zh(t),e)}function TS(t,e,n){const r=n.docs.get(e._key),i=new xy(t);return new wS(t,i,e._key,r,new Mo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){oo=i})(Bi),bi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new cr(new GL(r.getProvider("auth-internal")),new XL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nn(m_,"4.1.0",e),Nn(m_,"4.1.0","esm2017")})();const z4={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},Cy=EI(z4);DD(Cy);const As=oD(Cy),Fe=S4(Cy);function mn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ni(t){return!!t&&!!t[Ae]}function hr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===X4}(t)||Array.isArray(t)||!!t[sw]||!!(!((e=t.constructor)===null||e===void 0)&&e[sw])||Ay(t)||ky(t))}function Vi(t,e,n){n===void 0&&(n=!1),co(t)===0?(n?Object.keys:Rs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function co(t){var e=t[Ae];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Ay(t)?2:ky(t)?3:0}function ks(t,e){return co(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function B4(t,e){return co(t)===2?t.get(e):t[e]}function xS(t,e,n){var r=co(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function SS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Ay(t){return Q4&&t instanceof Map}function ky(t){return Y4&&t instanceof Set}function di(t){return t.o||t.t}function Ry(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=AS(t);delete e[Ae];for(var n=Rs(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Py(t,e){return e===void 0&&(e=!1),by(t)||ni(t)||!hr(t)||(co(t)>1&&(t.set=t.add=t.clear=t.delete=W4),Object.freeze(t),e&&Vi(t,function(n,r){return Py(r,!0)},!0)),t}function W4(){mn(2)}function by(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Mn(t){var e=Hp[t];return e||mn(18,t),e}function H4(t,e){Hp[t]||(Hp[t]=e)}function zp(){return Va}function Zd(t,e){e&&(Mn("Patches"),t.u=[],t.s=[],t.v=e)}function Ec(t){Bp(t),t.p.forEach(q4),t.p=null}function Bp(t){t===Va&&(Va=t.l)}function Z_(t){return Va={p:[],l:Va,h:t,m:!0,_:0}}function q4(t){var e=t[Ae];e.i===0||e.i===1?e.j():e.g=!0}function ef(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Mn("ES5").S(e,t,r),r?(n[Ae].P&&(Ec(e),mn(4)),hr(t)&&(t=Ic(e,t),e.l||Tc(e,t)),e.u&&Mn("Patches").M(n[Ae].t,t,e.u,e.s)):t=Ic(e,n,[]),Ec(e),e.u&&e.v(e.u,e.s),t!==CS?t:void 0}function Ic(t,e,n){if(by(e))return e;var r=e[Ae];if(!r)return Vi(e,function(a,l){return ew(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Tc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Ry(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Vi(s,function(a,l){return ew(t,r,i,a,l,n,o)}),Tc(t,i,!1),n&&t.u&&Mn("Patches").N(r,n,t.u,t.s)}return r.o}function ew(t,e,n,r,i,s,o){if(ni(i)){var a=Ic(t,i,s&&e&&e.i!==3&&!ks(e.R,r)?s.concat(r):void 0);if(xS(n,r,a),!ni(a))return;t.m=!1}else o&&n.add(i);if(hr(i)&&!by(i)){if(!t.h.D&&t._<1)return;Ic(t,i),e&&e.A.l||Tc(t,i)}}function Tc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Py(e,n)}function tf(t,e){var n=t[Ae];return(n?di(n):t)[e]}function tw(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Ar(t){t.P||(t.P=!0,t.l&&Ar(t.l))}function nf(t){t.o||(t.o=Ry(t.t))}function Wp(t,e,n){var r=Ay(e)?Mn("MapSet").F(e,n):ky(e)?Mn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:zp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=$a;o&&(l=[a],u=Vo);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Mn("ES5").J(e,n);return(n?n.A:zp()).p.push(r),r}function G4(t){return ni(t)||mn(22,t),function e(n){if(!hr(n))return n;var r,i=n[Ae],s=co(n);if(i){if(!i.P&&(i.i<4||!Mn("ES5").K(i)))return i.t;i.I=!0,r=nw(n,s),i.I=!1}else r=nw(n,s);return Vi(r,function(o,a){i&&B4(i.t,o)===a||xS(r,o,e(a))}),s===3?new Set(r):r}(t)}function nw(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Ry(t)}function K4(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Ae];return $a.get(l,s)},set:function(l){var u=this[Ae];$a.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Ae];if(!a.P)switch(a.i){case 5:r(a)&&Ar(a);break;case 4:n(a)&&Ar(a)}}}function n(s){for(var o=s.t,a=s.k,l=Rs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ae){var h=o[c];if(h===void 0&&!ks(o,c))return!0;var d=a[c],p=d&&d[Ae];if(p?p.t!==h:!SS(d,h))return!0}}var v=!!o[Ae];return l.length!==Rs(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};H4("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var v=AS(h);delete v[Ae];for(var _=Rs(v),w=0;w<_.length;w++){var m=_[w];v[m]=t(m,c||!!v[m].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(a,s),u={i:a?5:4,A:o?o.A:zp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ae,{value:u,writable:!0}),l},S:function(s,o,a){a?ni(o)&&o[Ae].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ae];if(c){var h=c.t,d=c.k,p=c.R,v=c.i;if(v===4)Vi(d,function(y){y!==Ae&&(h[y]!==void 0||ks(h,y)?p[y]||l(d[y]):(p[y]=!0,Ar(c)))}),Vi(h,function(y){d[y]!==void 0||ks(d,y)||(p[y]=!1,Ar(c))});else if(v===5){if(r(c)&&(Ar(c),p.length=!0),d.length<h.length)for(var _=d.length;_<h.length;_++)p[_]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var rw,Va,Ny=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Q4=typeof Map<"u",Y4=typeof Set<"u",iw=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",CS=Ny?Symbol.for("immer-nothing"):((rw={})["immer-nothing"]=!0,rw),sw=Ny?Symbol.for("immer-draftable"):"__$immer_draftable",Ae=Ny?Symbol.for("immer-state"):"__$immer_state",X4=""+Object.prototype.constructor,Rs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,AS=Object.getOwnPropertyDescriptors||function(t){var e={};return Rs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Hp={},$a={get:function(t,e){if(e===Ae)return t;var n=di(t);if(!ks(n,e))return function(i,s,o){var a,l=tw(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!hr(r)?r:r===tf(t.t,e)?(nf(t),t.o[e]=Wp(t.A.h,r,t)):r},has:function(t,e){return e in di(t)},ownKeys:function(t){return Reflect.ownKeys(di(t))},set:function(t,e,n){var r=tw(di(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=tf(di(t),e),s=i==null?void 0:i[Ae];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(SS(n,i)&&(n!==void 0||ks(t.t,e)))return!0;nf(t),Ar(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return tf(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,nf(t),Ar(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=di(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){mn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){mn(12)}},Vo={};Vi($a,function(t,e){Vo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Vo.deleteProperty=function(t,e){return Vo.set.call(this,t,e,void 0)},Vo.set=function(t,e,n){return $a.set.call(this,t[0],e,n,t[0])};var J4=function(){function t(n){var r=this;this.O=iw,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(_){var w=this;_===void 0&&(_=a);for(var m=arguments.length,f=Array(m>1?m-1:0),y=1;y<m;y++)f[y-1]=arguments[y];return l.produce(_,function(E){var x;return(x=s).call.apply(x,[w,E].concat(f))})}}var u;if(typeof s!="function"&&mn(6),o!==void 0&&typeof o!="function"&&mn(7),hr(i)){var c=Z_(r),h=Wp(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?Ec(c):Bp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(_){return Zd(c,o),ef(_,c)},function(_){throw Ec(c),_}):(Zd(c,o),ef(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===CS&&(u=void 0),r.D&&Py(u,!0),o){var p=[],v=[];Mn("Patches").M(i,u,p,v),o(p,v)}return u}mn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){hr(n)||mn(8),ni(n)&&(n=G4(n));var r=Z_(this),i=Wp(this,n,void 0);return i[Ae].C=!0,Bp(r),i},e.finishDraft=function(n,r){var i=n&&n[Ae],s=i.A;return Zd(s,r),ef(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!iw&&mn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Mn("Patches").$;return ni(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Gt=new J4,kS=Gt.produce;Gt.produceWithPatches.bind(Gt);Gt.setAutoFreeze.bind(Gt);Gt.setUseProxies.bind(Gt);Gt.applyPatches.bind(Gt);Gt.createDraft.bind(Gt);Gt.finishDraft.bind(Gt);function ja(t){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ja(t)}function Z4(t,e){if(ja(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ja(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function e$(t){var e=Z4(t,"string");return ja(e)==="symbol"?e:String(e)}function t$(t,e,n){return e=e$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ow(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function aw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ow(Object(n),!0).forEach(function(r){t$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ow(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var lw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),rf=function(){return Math.random().toString(36).substring(7).split("").join(".")},xc={INIT:"@@redux/INIT"+rf(),REPLACE:"@@redux/REPLACE"+rf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+rf()}};function n$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Oy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(mt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(mt(1));return n(Oy)(t,e)}if(typeof t!="function")throw new Error(mt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(mt(3));return s}function h(_){if(typeof _!="function")throw new Error(mt(4));if(l)throw new Error(mt(5));var w=!0;return u(),a.push(_),function(){if(w){if(l)throw new Error(mt(6));w=!1,u();var f=a.indexOf(_);a.splice(f,1),o=null}}}function d(_){if(!n$(_))throw new Error(mt(7));if(typeof _.type>"u")throw new Error(mt(8));if(l)throw new Error(mt(9));try{l=!0,s=i(s,_)}finally{l=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return _}function p(_){if(typeof _!="function")throw new Error(mt(10));i=_,d({type:xc.REPLACE})}function v(){var _,w=h;return _={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(mt(11));function y(){f.next&&f.next(c())}y();var E=w(y);return{unsubscribe:E}}},_[lw]=function(){return this},_}return d({type:xc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[lw]=v,r}function r$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:xc.INIT});if(typeof r>"u")throw new Error(mt(12));if(typeof n(void 0,{type:xc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(mt(13))})}function RS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{r$(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],v=n[p],_=l[p],w=v(_,u);if(typeof w>"u")throw u&&u.type,new Error(mt(14));h[p]=w,c=c||w!==_}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Sc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function i$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(mt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Sc.apply(void 0,a)(i.dispatch),aw(aw({},i),{},{dispatch:s})}}}function PS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var bS=PS();bS.withExtraArgument=PS;const uw=bS;var NS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),s$=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Qs=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},o$=Object.defineProperty,a$=Object.defineProperties,l$=Object.getOwnPropertyDescriptors,cw=Object.getOwnPropertySymbols,u$=Object.prototype.hasOwnProperty,c$=Object.prototype.propertyIsEnumerable,hw=function(t,e,n){return e in t?o$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Gr=function(t,e){for(var n in e||(e={}))u$.call(e,n)&&hw(t,n,e[n]);if(cw)for(var r=0,i=cw(e);r<i.length;r++){var n=i[r];c$.call(e,n)&&hw(t,n,e[n])}return t},sf=function(t,e){return a$(t,l$(e))},h$=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},d$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Sc:Sc.apply(null,arguments)};function f$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var p$=function(t){NS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Qs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Qs([void 0],n.concat(this))))},e}(Array),m$=function(t){NS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Qs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Qs([void 0],n.concat(this))))},e}(Array);function qp(t){return hr(t)?kS(t,function(){}):t}function g$(t){return typeof t=="boolean"}function y$(){return function(e){return v$(e)}}function v$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new p$;return n&&(g$(n)?r.push(uw):r.push(uw.withExtraArgument(n.extraArgument))),r}var _$=!0;function w$(t){var e=y$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(f$(i))p=RS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(e));var _=i$.apply(void 0,v),w=Sc;l&&(w=d$(Gr({trace:!_$},typeof l=="object"&&l)));var m=new m$(_),f=m;Array.isArray(d)?f=Qs([_],d):typeof d=="function"&&(f=d(m));var y=w.apply(void 0,f);return Oy(p,c,y)}function Kr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Gr(Gr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function OS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function E$(t){return typeof t=="function"}function I$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?OS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(E$(t))l=function(){return qp(t())};else{var u=qp(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=Qs([s[d.type]],o.filter(function(v){var _=v.matcher;return _(d)}).map(function(v){var _=v.reducer;return _}));return p.filter(function(v){return!!v}).length===0&&(p=[a]),p.reduce(function(v,_){if(_)if(ni(v)){var w=v,m=_(w,d);return m===void 0?v:m}else{if(hr(v))return kS(v,function(f){return _(f,d)});var m=_(v,d);if(m===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return v},h)}return c.getInitialState=l,c}function T$(t,e){return t+"/"+e}function x$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:qp(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=T$(e,c),p,v;"reducer"in h?(p=h.reducer,v=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=v?Kr(d,v):Kr(d)});function l(){var c=typeof t.extraReducers=="function"?OS(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],v=p===void 0?[]:p,_=c[2],w=_===void 0?void 0:_,m=Gr(Gr({},d),o);return I$(n,function(f){for(var y in m)f.addCase(y,m[y]);for(var E=0,x=v;E<x.length;E++){var C=x[E];f.addMatcher(C.matcher,C.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var S$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",C$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=S$[Math.random()*64|0];return e},A$=["name","message","stack","code"],of=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),dw=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),k$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=A$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=Kr(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:sf(Gr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=Kr(e+"/pending",function(u,c,h){return{payload:void 0,meta:sf(Gr({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=Kr(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||k$)(u||"Rejected"),meta:sf(Gr({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):C$(),v=new a,_;function w(f){_=f,v.abort()}var m=function(){return h$(this,null,function(){var f,y,E,x,C,b,P;return s$(this,function(q){switch(q.label){case 0:return q.trys.push([0,4,,5]),x=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),P$(x)?[4,x]:[3,2];case 1:x=q.sent(),q.label=2;case 2:if(x===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(V,z){return v.signal.addEventListener("abort",function(){return z({name:"AbortError",message:_||"Aborted"})})}),c(s(p,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:v.signal,abort:w,rejectWithValue:function(V,z){return new of(V,z)},fulfillWithValue:function(V,z){return new dw(V,z)}})).then(function(V){if(V instanceof of)throw V;return V instanceof dw?i(V.payload,p,u,V.meta):i(V,p,u)})])];case 3:return E=q.sent(),[3,5];case 4:return b=q.sent(),E=b instanceof of?o(null,p,u,b.payload,b.meta):o(b,p,u),[3,5];case 5:return P=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,P||c(E),[2,E]}})})}();return Object.assign(m,{abort:w,requestId:p,arg:u,unwrap:function(){return m.then(R$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function R$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function P$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Dy="listenerMiddleware";Kr(Dy+"/add");Kr(Dy+"/removeAll");Kr(Dy+"/remove");var fw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);K4();const pw={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Cc=x$({name:"auth",initialState:pw,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>pw,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:DS,authStateChange:CF,authSignOut:b$,adminRole:N$,clearCashList:O$,addToFavoriteList:D$,setFavoriteList:L$,deleteFromFavoriteList:M$}=Cc.actions,V$=({email:t,password:e,userName:n})=>async(r,i)=>{await zN(As,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await HN(As.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=As.currentUser;r(DS({userId:s,userName:o}))},Ly=({email:t,password:e})=>async(n,r)=>{BN(As,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=As.currentUser;n(DS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(N$())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},$$=()=>async(t,e)=>{KN(As).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(b$())},j$=()=>(t,e)=>{t(O$())},F$=t=>(e,n)=>{e(D$(t))},My=t=>async(e,n)=>{const r=await Ty(wt(Fe,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e(L$(i))}else console.log("No such document!")},U$=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o.name!==t.name)return o});e(M$(s))};function z$(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function B$(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function W$(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function Vy(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function H$(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function q$(t){return zi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const G$=A.ul`
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
`,K$=A.li`
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
`,Q$=A.div`
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
`,Y$=A.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,X$=A(Vy)`
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
`,J$=A(z$)`
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
`,Z$=A(H$)`
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
`,ej=A.ul`
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
`,tj=A.li`
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
`,nj=A.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,rj=A.p`
  width: 90%;
`;A.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const ij=A.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,sj=A.div`
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
`,oj=A.div`
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
`,aj=A.h3``,lj=A.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid black;
  cursor: pointer;
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
`,uj=A.div`
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
`,mw=A.button`
  width: 100%;
  background: black;
  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`,cj=A.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,hj=A.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,dj=A.div`
  display: flex;
`,fj=A(B$)`
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
`,pj=A(Vy)`
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
`,mj=A(W$)`
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
`,gj=A.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 9px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`,{addGoodToCashList:yj,removeGoodFromCashList:vj}=Cc.actions,_j=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(yj({id:t,name:e,image:n,price:r}))},wj=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(vj(s))};var LS={exports:{}},Ej="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ij=Ej,Tj=Ij;function MS(){}function VS(){}VS.resetWarningCache=MS;var xj=function(){function t(r,i,s,o,a,l){if(l!==Tj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:VS,resetWarningCache:MS};return n.PropTypes=n,n};LS.exports=xj();var Sj=LS.exports;const gw=Qp(Sj),Cj=A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`,Aj=A.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;class $S extends Pt.Component{constructor(){super(...arguments);Jh(this,"keydown",n=>{n.keyCode===27&&this.props.onCloseModal()})}componentDidMount(){document.addEventListener("keydown",this.keydown)}componentWillUnmount(){document.removeEventListener("keydown",this.keydown)}render(){return g.jsx(Cj,{onClick:this.props.onCloseModal,children:g.jsx(Aj,{children:g.jsx("img",{src:this.props.currentImageUrl,alt:""})})})}}Jh($S,"propTypes",{onCloseModal:gw.func.isRequired,currentImageUrl:gw.string.isRequired});const Qh=({card:t,closeModal:e})=>{const n=mr(),r=Ui(),[i,s]=I.useState(!1),o=an(un);let a=o.favoriteList,l=a.length>0?o.favoriteList.map(f=>f.name):[];const u=f=>{f.currentTarget===f.target&&e()},c=f=>{(f.charCode||f.keyCode)===27&&e()},h=async()=>{await IS(wt(Fe,"goods",`${t.id}`)),e()},d=()=>{r(_j(t))},p=async()=>{try{await xi(wt(Fe,"users",`${o.email}`),{favoriteList:[...a,t]})}catch(f){console.log(f)}},v=()=>{r(F$(t)),p()},_=async()=>{try{const f=a.filter(y=>{if(y.name!==t.name)return y});await xi(wt(Fe,"users",`${o.email}`),{favoriteList:f})}catch(f){console.log(f)}},w=()=>{_(),r(U$(t))};I.useEffect(()=>(document.body.addEventListener("keydown",c),function(){document.body.removeEventListener("keydown",c)}),[]);const m=()=>{s(!1)};return g.jsx(ij,{onClick:u,children:g.jsxs(sj,{onClick:u,children:[g.jsxs(oj,{children:[g.jsxs(dj,{children:[g.jsxs(hj,{children:[g.jsx(lj,{style:{backgroundImage:`url(${t.image})`},onClick:()=>{s(!0)}}),g.jsx(mw,{onClick:d,children:"Добавити до покупок"}),o.isLogIn&&(l.includes(t.name)?g.jsx(cj,{onClick:w,children:"Видалити з обранного"}):g.jsx(mw,{onClick:v,children:"Добавити до обранного"}))]}),g.jsxs(uj,{children:[g.jsx(aj,{children:t.name}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),g.jsx(gj,{children:t.otherInfo})]})]})]}),g.jsx(fj,{onClick:()=>e()}),o.role==="admin"&&g.jsxs(g.Fragment,{children:[g.jsx(pj,{onClick:()=>{h()}}),g.jsx(mj,{onClick:()=>{n("/admin",{state:t})}})]})]}),i&&g.jsx($S,{onCloseModal:m,currentImageUrl:t.image})]})})},kj=()=>{const t=an(un),[e,n]=I.useState(!1),[r,i]=I.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return g.jsxs(g.Fragment,{children:[g.jsx(ej,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>g.jsx(g.Fragment,{children:g.jsx(tj,{onClick:()=>s(a),style:{backgroundImage:`url(${a.image})`},children:g.jsxs(nj,{children:[g.jsx(rj,{children:a.name}),g.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):g.jsx("div",{children:"Список обранного пустий"})}),e&&g.jsx(Qh,{card:r,closeModal:o})]})};function _u(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_u=function(n){return typeof n}:_u=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_u(t)}function af(){}var Rj={getItem:af,setItem:af,removeItem:af};function Pj(t){if((typeof self>"u"?"undefined":_u(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function bj(t){var e="".concat(t,"Storage");return Pj(e)?self[e]:Rj}function Nj(t){var e=bj(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const Nr=Nj("local"),Oj=({closeUserModal:t,typeModal:e})=>{const[n,r]=I.useState(e),[i,s]=I.useState(!1),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(""),[d,p]=I.useState(""),[v,_]=I.useState(""),[w,m]=I.useState(""),[f,y]=I.useState(""),[E,x]=I.useState(""),[C,b]=I.useState(""),[P,q]=I.useState(""),[V,z]=I.useState(""),[fe,Oe]=I.useState([]),[Ve,Se]=I.useState("info"),[Xt,rt]=I.useState(""),N=an(un),W=Ui(),G=O=>{O.currentTarget===O.target&&t()},pe=O=>{(O.charCode||O.keyCode)===27&&t()};I.useEffect(()=>(document.body.addEventListener("keydown",pe),function(){document.body.removeEventListener("keydown",pe)}),[]);const L=O=>{a(O.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(O.target.value).toLowerCase())?u(""):u("Введіть повнe призвіще, ім'я, побатькові")},$=O=>{h(O.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(O.target.value).toLowerCase())?p(""):p("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},j=O=>{_(O.target.value),O.target.value.length<6?y("Довжина пароля повина бути від 6 символів"):y("")},Q=O=>{m(O.target.value),O.target.value!==v?x("Введені паролі нe співпадають"):x("")},T=O=>{b(O.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(O.target.value))?q(""):q("Номер невірного формату (наприклад '043*******')")},re=()=>{!l&&!d&&!f&&!E&&!P&&w&&o&&c&&v&&C&&V?(W(V$({email:c,password:v,userName:o})),D({name:o,email:c,password:v,userNumber:C,userPostAdress:V,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},D=async O=>{try{await Sy(wt(Fe,"users",`${O.email}`),O)}catch(K){console.error("Error adding user: ",K)}},Ce=async()=>{try{W(Ly({email:c,password:v})),W(My(c)),await xi(wt(Fe,"users",`${c}`),{isLogIn:!0}),Nr.setItem("userEmail",c),Nr.setItem("userPassword",v),t()}catch(O){rt("Email не зареестрований або невіний пароль"),console.error("Error adding user: ",O)}},ue=async()=>{t(),W($$()),Nr.removeItem("userEmail"),Nr.removeItem("userPassword");try{await xi(wt(Fe,"users",`${N.email}`),{isLogIn:!1})}catch(O){console.error("Error adding user: ",O)}},he=async()=>{const O=await Ty(wt(Fe,"users",`${N.email}`));if(O.exists()){const{name:K,userPostAdress:De,userNumber:oe}=O.data();a(K),b(oe),z(De)}};I.useEffect(()=>{N.email&&(he(),q(""))},[Ve,W]);const te=async()=>{if(!P)try{await xi(wt(Fe,"users",`${N.email}`),{userNumber:C,userPostAdress:V}),Se("info")}catch(O){console.error("Error change user: ",O)}},Ge=async()=>{try{(await F4(L4(uo(Fe,"orders"),M4("userEmail","==",`${N.email}`)))).forEach(K=>{Oe(De=>[...De,{id:K.id,...K.data()}])}),Oe(K=>K.sort((De,oe)=>De.postDate>oe.postDate?-1:1))}catch(O){console.error("Error take orders: ",O)}};return I.useEffect(()=>{Ge()},[W]),g.jsx(g2,{onClick:G,children:g.jsx(y2,{onClick:G,children:g.jsxs(v2,{children:[n==="SignIn"&&g.jsxs($l,{id:"userFormSignIn",children:[g.jsx(Yi,{children:"Контактні дані"}),g.jsx(xn,{required:!0,name:"name",value:o,onChange:O=>{L(O)},placeholder:"Введіть ПІБ",style:l?{borderColor:"red"}:{}}),l&&g.jsx(zn,{children:l}),g.jsx(xn,{required:!0,name:"email",value:c,onChange:O=>{$(O)},placeholder:"Введіть контактну електронну адресу",style:d?{borderColor:"red"}:{}}),d&&g.jsx(zn,{children:d}),g.jsx(xn,{required:!0,name:"password",value:v,onChange:O=>{j(O)},placeholder:"Введіть пароль",autoComplete:"on",minlength:"5",style:f?{borderColor:"red"}:{}}),f&&g.jsx(zn,{children:f}),g.jsx(xn,{required:!0,name:"passwordDublicate",value:w,onChange:O=>{Q(O)},placeholder:"Повторіть пароль",style:E?{borderColor:"red"}:{}}),E&&g.jsx(zn,{children:E}),g.jsx(xn,{value:C,type:"number",onChange:O=>{T(O)},placeholder:"Введіть контактний номер телефону",style:P?{borderColor:"red"}:{}}),P&&g.jsx(zn,{children:P}),g.jsx(xn,{value:V,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(zn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(jl,{style:i?{backgroundColor:"red"}:{},onClick:re,children:"Зареєструватись"})]}),n==="LogIn"&&g.jsxs($l,{id:"userFormLogIn",children:[g.jsx(Yi,{children:"E-mail:"}),g.jsx(xn,{required:!0,name:"email",value:c,onChange:O=>{h(O.target.value)}}),g.jsx(Yi,{children:"Пароль:"}),g.jsx(xn,{required:!0,name:"password",value:v,onChange:O=>{_(O.target.value)}}),Xt&&g.jsx(zn,{children:Xt}),g.jsx(jl,{onClick:Ce,children:"Увійти"})]}),n==="Config"&&g.jsxs(g.Fragment,{children:[g.jsxs(_2,{children:[g.jsx(Ll,{onClick:()=>{Se("info")},children:"Користувач"}),g.jsx(Ll,{onClick:()=>{Se("change")},children:"Зміна данних"}),g.jsx(Ll,{onClick:()=>{Se("favorite")},children:"Обране"}),g.jsx(Ll,{onClick:()=>{Se("history")},children:"Історія покупок"})]}),Ve==="info"&&g.jsxs($l,{id:"userFormConfig",children:[g.jsx(Yi,{children:"Інформація користувача"}),g.jsxs(w2,{children:[g.jsx(Ml,{children:"Призвіще, ім'я, по батькові:"}),g.jsx(Vl,{children:o}),g.jsx(Ml,{children:"E-mail:"}),g.jsx(Vl,{children:N.email}),g.jsx(Ml,{children:"Номер телефону:"}),g.jsxs(Vl,{children:[" ",C]}),g.jsx(Ml,{children:'Відділення "Нова пошти":'}),g.jsx(Vl,{children:V})]}),g.jsx(jl,{onClick:ue,children:"Вийти з аккаунта"})]}),Ve==="change"&&g.jsxs($l,{id:"userFormConfig",children:[g.jsx(Yi,{children:"Зміна данних"}),g.jsx(xn,{value:C,type:"number",onChange:O=>{T(O)},placeholder:"Введіть контактний номер телефону",style:P?{borderColor:"red"}:{}}),P&&g.jsx(zn,{children:P}),g.jsx(xn,{value:V,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(zn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(jl,{onClick:te,children:"Змінити дані"})]}),Ve==="favorite"&&g.jsx(kj,{}),Ve==="history"&&g.jsxs(I2,{children:[g.jsx(Yi,{children:"Історія покупок"}),g.jsx(x0,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(x0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(S2,{children:fe.map(O=>g.jsxs(C2,{children:[g.jsx(E2,{style:O.status==="take"?{backgroundColor:"yellow"}:O.status==="send"?{backgroundColor:"green"}:{}}),g.jsxs(Un,{children:[g.jsxs(Un,{children:["Статус:",O.status==="create"&&" Замовлення оформлене",O.status==="take"&&" Прийняте",O.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(O.postDate.seconds)]}),g.jsxs(Un,{children:["ФІП: ",O.userFullName]}),g.jsxs(Un,{children:["Email: ",O.userEmail]}),g.jsxs(Un,{children:["Номер телефону: ",O.userNumber]}),g.jsxs(Un,{children:["Адрес Нової почти: ",O.userPostAdress]}),g.jsx(Un,{children:"Список замовлення:"}),O.cashList.map(K=>g.jsxs(T2,{children:[g.jsx(x2,{style:{backgroundImage:`url(${K.image})`}}),g.jsxs(Un,{children:["Назва: ",K.name]}),g.jsxs(Un,{children:["Ціна: ",K.price]})]}))]}))})]})]})]})})})},Dj=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(""),s=an(un).isLogIn,o=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[s?g.jsx(g.Fragment,{children:g.jsx(Pd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):g.jsxs(m2,{children:[g.jsx(Pd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),g.jsx(Pd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&g.jsx(Oj,{closeUserModal:o,typeModal:n})]})},Lj=()=>{const{cashList:t}=an(un),e=mr(),n=pr().pathname,r=Ui();I.useEffect(()=>{localStorage.getItem("userEmail")&&localStorage.getItem("userPassword")&&i()},[]);const i=async()=>{const s=await localStorage.getItem("userEmail"),o=await localStorage.getItem("userPassword");r(Ly({email:s,password:o})),r(My(s))};return g.jsxs(s2,{children:[g.jsxs(o2,{children:[g.jsx(h2,{}),n!=="/checkout"&&g.jsxs(g.Fragment,{children:[g.jsx(p2,{}),g.jsx(Dj,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&g.jsxs(l2,{children:[g.jsx(a2,{onClick:()=>{e("/cashList")}}),g.jsx(u2,{children:t.length})]})]})},Mj=()=>g.jsxs(g.Fragment,{children:[g.jsx(Lj,{}),g.jsx(I.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(lR,{})})]}),$y=A.ul`
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
`,jy=A.li`
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
`,Fy=A.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Uy=A.p`
  width: 90%;
`,zy=A.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,By=A(q$)`
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
`,Vj=A.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,Gp=A.select`
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
`,qn=A.option``,xo=A.input`
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
`,$j=A.textarea`
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
`,jS=A.button`
  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,jj=A($y)`
  flex-direction: column;
`,Fj=A.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,Uj=A.li`
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
`,zj=A.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,Bj=A(jS)`
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
`,Wj=()=>{const[t,e]=I.useState([]),n=an(un),r=[],i=mr(),[s,o]=I.useState(!1),[a,l]=I.useState();let u=new Date().getTime()/1e3;const c=p=>{l(p),o(!0)},h=()=>{o(!1)},d=async()=>{Gh(uo(Fe,"goods"),p=>{e(p.docs.map(v=>({...v.data(),id:v.id})).sort((v,_)=>v.createTime.seconds>_.createTime.seconds?-1:1))})};return I.useEffect(()=>{d()},[]),t.map(p=>{r.includes(p.category)||r.push(p.category)}),r.sort(),g.jsxs(g.Fragment,{children:[g.jsx(jj,{children:r.map(p=>g.jsxs(Uj,{children:[g.jsx(Fj,{children:p}),g.jsx(zj,{children:t.map((v,_)=>{if(v.category===p)return g.jsxs(jy,{onClick:()=>c(v),style:{backgroundImage:`url(${v.image})`},children:[n.favoriteList&&n.favoriteList.map(w=>{if(w.name===v.name)return g.jsx(By,{})}),u-v.createTime.seconds<259200&&g.jsx(zy,{children:"Новинка!"}),g.jsxs(Fy,{children:[g.jsx(Uy,{children:v.name}),g.jsxs("p",{children:[v.price," грн."]})]})]},_)})}),g.jsx(Bj,{onClick:()=>i("/search",{state:{category:p}}),children:"Побачити більше"})]}))}),s&&g.jsx(Qh,{card:a,closeModal:h})]})},Hj=A.div`
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
`,qj=A.input`
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
`,Gj=A(Gp)`
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
`,Kj=A.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,FS=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let _i=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const Qj=()=>{const e=pr().state,n=an(un),[r,i]=I.useState([]),[s,o]=I.useState(r),[a,l]=I.useState(!1),[u,c]=I.useState(),[h,d]=I.useState(""),[p,v]=I.useState(e&&e.category?e.category:"");let _=new Date().getTime()/1e3;const w=y=>{c(y),l(!0)},m=()=>{l(!1)},f=()=>{Gh(uo(Fe,"goods"),y=>{i(y.docs.map(E=>({...E.data(),id:E.id})).sort((E,x)=>E.createTime.seconds>x.createTime.seconds?-1:1))})};return I.useEffect(()=>{f()},[]),I.useEffect(()=>{if(h.length>0){let y=r.filter(E=>E.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())&&E.category.toLocaleLowerCase().includes(p.toLocaleLowerCase()));o(y)}else{let y=r.filter(E=>E.category.toLocaleLowerCase().includes(p.toLocaleLowerCase()));o(y)}},[h,p,r]),g.jsxs(Hj,{children:[g.jsx(qj,{placeholder:"Назва товару",onChange:y=>{d(y.target.value)}}),g.jsxs(Gj,{id:"category",name:"category",value:p,onChange:y=>{v(y.target.value)},children:[g.jsx(qn,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},_i()),FS.map((y,E)=>y.category?g.jsx("optgroup",{label:`${y.name}`,children:y.category&&y.category.map(x=>g.jsx(qn,{value:`${x}`,selected:p===x&&"selected"||null,children:x},_i()))},_i()):g.jsx(qn,{value:`${y.name}`,style:{fontWeight:"bolder"},selected:p===y.name&&"selected"||null,children:y.name},_i()))]}),g.jsx($y,{children:s.length>0?s.map((y,E)=>g.jsx(g.Fragment,{children:g.jsxs(jy,{onClick:()=>w(y),style:{backgroundImage:`url(${y.image})`},children:[n.favoriteList&&n.favoriteList.map(x=>{if(x.name===y.name)return g.jsx(By,{})}),_-y.createTime.seconds<259200&&g.jsx(zy,{children:"Новинка!"}),g.jsxs(Fy,{children:[g.jsx(Uy,{children:y.name}),g.jsxs("p",{children:[y.price," грн."]})]})]},E)})):g.jsxs(Kj,{children:[g.jsx("p",{children:"Нічого не знайдено"}),g.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),a&&g.jsx(Qh,{card:u,closeModal:m})]})},Yj=()=>{const[t,e]=I.useState([]),n=()=>{Gh(uo(Fe,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})).sort((a,l)=>a.postDate.seconds>l.postDate.seconds?-1:1))})},r=async o=>{await IS(wt(Fe,"orders",`${o}`))},i=async o=>{await xi(wt(Fe,"orders",`${o}`),{status:"take"})},s=async o=>{await xi(wt(Fe,"orders",`${o}`),{status:"send"})};return I.useEffect(()=>{n()}),g.jsx(G$,{children:t.map(o=>g.jsxs(K$,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),g.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(o.postDate.seconds)]}),g.jsxs("p",{children:["ФІП: ",o.userFullName]}),g.jsxs("p",{children:["Email: ",o.userEmail]}),g.jsxs("p",{children:["Номер телефону:",o.userNumber]}),g.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),g.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>g.jsxs(g.Fragment,{children:[g.jsx(Q$,{style:{backgroundImage:`url(${a.image})`}}),g.jsxs("p",{children:["Id товару: ",a.id]}),g.jsxs("p",{children:["Назва: ",a.name]}),g.jsxs("p",{children:["Ціна: ",a.price]})]})),g.jsxs(Y$,{children:[g.jsx(X$,{onClick:()=>r(o.id)}),g.jsx(J$,{onClick:()=>i(o.id)}),g.jsx(Z$,{onClick:()=>s(o.id)})]})]}))})},Xj=()=>{an(un),mr();const e=pr().state,n=Ui(),[r,i]=I.useState(e?e.image:""),[s,o]=I.useState(e?e.name:""),[a,l]=I.useState(e?e.price:""),[u,c]=I.useState(e?e.producent:""),[h,d]=I.useState(e?e.size:""),[p,v]=I.useState(e?e.otherInfo:""),_=async w=>{try{e?(await Sy(wt(Fe,"goods",`${w.id}`),w),alert("Change success")):(await U4(uo(Fe,"goods"),w),alert("Add success"))}catch(m){console.error("Error adding document: ",m)}};return I.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(m){m.preventDefault();const{image:f,name:y,price:E,sex:x,producent:C,category:b,size:P,otherInfo:q}=this.elements,V={image:f.value,name:y.value,price:E.value,sex:x.value||"",producent:C.value||"",category:b.value,size:P.value||"",otherInfo:q.value||"",createTime:new Date};_(V),this.reset()})},[n]),g.jsxs(g.Fragment,{children:[g.jsxs(Vj,{id:"form",children:[g.jsx("p",{children:"Малюнок"}),g.jsx(xo,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:r,onChange:w=>i(w.target.value)}),g.jsx("p",{children:"Назва"}),g.jsx(xo,{required:!0,name:"name",placeholder:"Додати назву",value:s,onChange:w=>o(w.target.value)}),g.jsx("p",{children:"Ціна в гривнях"}),g.jsx(xo,{required:!0,name:"price",placeholder:"Додати ціну",value:a,onChange:w=>l(w.target.value)}),g.jsx("p",{children:"Категорія"}),g.jsxs(Gp,{id:"category",name:"category",children:[g.jsx(qn,{value:"",children:"Вкажіть категорію"}),FS.map((w,m)=>w.category?g.jsx("optgroup",{label:`${w.name}`,children:w.category&&w.category.map(f=>g.jsx(qn,{value:`${f}`,selected:e&&e.category===f&&"selected"||null,children:f},_i()))},_i()):g.jsx(qn,{value:`${w.name}`,style:{fontWeight:"bolder"},selected:e&&e.category===w.name&&"selected"||null,children:w.name},_i()))]}),g.jsx("p",{children:"Рід"}),g.jsxs(Gp,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[g.jsx(qn,{value:"",children:"Без роду"}),g.jsx(qn,{value:"Чоловік",selected:e&&e.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),g.jsx(qn,{value:"Жінка",selected:e&&e.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),g.jsx("p",{children:"Розмір"}),g.jsx(xo,{name:"size",placeholder:"Додати розмір",value:h,onChange:w=>d(w.target.value)}),g.jsx("p",{children:"Виробник"}),g.jsx(xo,{name:"producent",placeholder:"Додати виробника",value:u,onChange:w=>c(w.target.value)}),g.jsx("p",{children:"Додаткова інформація"}),g.jsx($j,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:p,onChange:w=>v(w.target.value)}),g.jsx(jS,{children:e?"Зілити зміни":"Залити новий товар"})]}),g.jsx("h3",{children:"Замовлення"}),g.jsx(Yj,{})]})},Jj=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState(),o=an(un),a=Ui();let l=new Date().getTime()/1e3;I.useEffect(()=>{Nr.getItem("userEmail")&&Nr.getItem("userPassword")&&u()},[]);const u=async()=>{const p=await Nr.getItem("userEmail"),v=await Nr.getItem("userPassword");a(Ly({email:p,password:v})),a(My(p))},c=p=>{s(p),r(!0)},h=()=>{r(!1)},d=()=>{Gh(uo(Fe,"goods"),p=>{e(p.docs.map(v=>({...v.data(),id:v.id})).sort((v,_)=>v.createTime.seconds>_.createTime.seconds?-1:1))})};return I.useEffect(()=>{d()},[]),g.jsxs(g.Fragment,{children:[g.jsx($y,{id:"cardList",children:t.length>0&&t.map((p,v)=>g.jsx(g.Fragment,{children:g.jsxs(jy,{onClick:()=>c(p),style:{backgroundImage:`url(${p.image})`},children:[o.favoriteList&&o.favoriteList.map(_=>{if(_.name===p.name)return g.jsx(By,{})}),l-p.createTime.seconds<259200&&g.jsx(zy,{children:"Новинка!"}),g.jsxs(Fy,{children:[g.jsx(Uy,{children:p.name}),g.jsxs("p",{children:[p.price," грн."]})]})]},p.id)}))}),n&&g.jsx(Qh,{card:i,closeModal:h})]})},Zj=A.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,eF=A.div`
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
`,tF=A.div`
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
`,nF=A.li`
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
`,rF=A.div`
  width: 50%;
`,iF=A.h3``,sF=A.p``,oF=A.button`
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
`,aF=A(Vy)`
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
`,lF=A.button`
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
`,uF=()=>{const{cashList:t}=an(un),e=Ui(),n=mr();return g.jsxs(eF,{children:[g.jsx(Zj,{children:"Список товарів"}),t.length>0?g.jsxs(g.Fragment,{children:[t.map((r,i)=>g.jsxs(nF,{children:[g.jsx(tF,{style:{backgroundImage:`url(${r.image})`}}),g.jsxs(rF,{children:[g.jsx(iF,{children:r.name}),g.jsxs(sF,{children:[r.price," грн."]})]}),g.jsx(oF,{onClick:()=>e(wj(i)),children:g.jsx(aF,{})})]})),g.jsx(lF,{onClick:()=>n("/checkout"),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},cF=A.div`
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
`,hF=A.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,Xl=A.input`
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
`,So=A.div`
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
`,dF=A.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,yw=A.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,fF=()=>{const t=an(un),[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(""),[h,d]=I.useState(""),[p,v]=I.useState(""),[_,w]=I.useState(""),[m,f]=I.useState(!1),y=Ui(),E=mr(),x=async()=>{const z=await Ty(wt(Fe,"users",`${t.email}`));if(z.exists()){const{name:fe,userPostAdress:Oe,userNumber:Ve,email:Se}=z.data();o(Se),n(fe),i(Ve),l(Oe)}else console.log("No such document!")};I.useEffect(()=>{t.email&&x()},[t]);const C=z=>{n(z.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(z.target.value).toLowerCase())?c(""):c("Введіть повнe призвіще, ім'я, побатькові")},b=z=>{o(z.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(z.target.value).toLowerCase())?d(""):d("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},P=z=>{i(z.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(z.target.value))?v(""):v("Номер невірного формату (наприклад: '043*******')")},q=z=>{l(z.target.value),z.target.value.length>0?w(""):w("Адрес відділення пошти пустий")},V=async()=>{if(s&&e&&r&&a&&!h&&!p&&!u&&!_)try{const z=new Date,fe=z.getFullYear()+"-"+(z.getMonth()+1)+"-"+z.getDate()+" "+z.getHours()+":"+z.getMinutes()+":"+z.getSeconds();await Sy(wt(Fe,"orders",`${fe}`),{userFullName:e,userNumber:r,userEmail:s,userPostAdress:a,postDate:fe,id:`${s}${fe}`,status:"create",cashList:t.cashList}),y(j$()),E("/")}catch(z){console.log(z)}else f(!0)};return I.useEffect(()=>{!h&&!p&&!u&&!_&&f(!1)}),g.jsxs(cF,{id:"CheckoutForm",children:[g.jsx(hF,{children:"Контактні дані"}),g.jsx(Xl,{required:!0,name:"name",value:e,onChange:z=>{C(z)},placeholder:"Введіть ПІБ",style:u?{borderColor:"red"}:{}}),u&&g.jsx(So,{children:u}),g.jsx(Xl,{value:r,onChange:z=>{P(z)},placeholder:"Введіть контактний номер телефону",style:p?{borderColor:"red"}:{}}),p&&g.jsx(So,{children:p}),g.jsx(Xl,{required:!0,name:"email",value:s,onChange:z=>{b(z)},placeholder:"Введіть контактну електронну адресу",style:h?{borderColor:"red"}:{}}),h&&g.jsx(So,{children:h}),g.jsx(Xl,{value:a,onChange:z=>{q(z)},placeholder:"Введіть адресу відділення пошти",style:_?{borderColor:"red"}:{}}),_&&g.jsx(So,{children:_}),g.jsx(So,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(yw,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(yw,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(dF,{onClick:V,style:m?{background:"red"}:{},children:m?"Невірно заповнена форма":"Завершити оформлення замовлення"})]})};function pF(){return g.jsxs(cR,{children:[g.jsxs(Bn,{path:"/",element:g.jsx(Mj,{}),children:[g.jsx(Bn,{index:!0,element:g.jsx(Jj,{})}),g.jsx(Bn,{path:"category",element:g.jsx(Wj,{})}),g.jsx(Bn,{path:"search",element:g.jsx(Qj,{})}),g.jsx(Bn,{path:"admin",element:g.jsx(Xj,{})}),g.jsx(Bn,{path:"cashList",element:g.jsx(uF,{})}),g.jsx(Bn,{path:"checkout",element:g.jsx(fF,{})})]}),g.jsx(Bn,{path:"*",element:g.jsx(aR,{to:"/"})})]})}var US="persist/FLUSH",Wy="persist/REHYDRATE",zS="persist/PAUSE",BS="persist/PERSIST",WS="persist/PURGE",Hy="persist/REGISTER";function vw(t){return yF(t)||gF(t)||mF()}function mF(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function gF(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function yF(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_w(n,!0).forEach(function(r){vF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_w(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var HS={registry:[],bootstrapped:!1},_F=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:HS,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Hy:return Kp({},e,{registry:[].concat(vw(e.registry),[n.key])});case Wy:var r=e.registry.indexOf(n.key),i=vw(e.registry);return i.splice(r,1),Kp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function wF(t,e,n){var r=n||!1,i=Oy(_F,HS,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:Hy,key:u})},o=function(u,c,h){var d={type:Wy,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Kp({},i,{purge:function(){var u=[];return t.dispatch({type:WS,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:US,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:zS})},persist:function(){t.dispatch({type:BS,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const EF=RS({[Cc.name]:Cc.reducer}),qS=w$({reducer:EF,middleware:t=>t({serializableCheck:{ignoredActions:[US,Wy,zS,BS,WS,Hy]}})});wF(qS);lf.createRoot(document.getElementById("root")).render(g.jsx(Pt.StrictMode,{children:g.jsx(mR,{basename:"Oleg_Shop",children:g.jsx(pP,{store:qS,children:g.jsx(pF,{})})})}));
