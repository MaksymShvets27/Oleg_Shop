var YS=Object.defineProperty;var XS=(t,e,n)=>e in t?YS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var mo=(t,e,n)=>(XS(t,typeof e!="symbol"?e+"":e,n),n);function JS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Yp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ew={exports:{}},Rc={},Iw={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),ek=Symbol.for("react.fragment"),tk=Symbol.for("react.strict_mode"),nk=Symbol.for("react.profiler"),rk=Symbol.for("react.provider"),ik=Symbol.for("react.context"),sk=Symbol.for("react.forward_ref"),ok=Symbol.for("react.suspense"),ak=Symbol.for("react.memo"),lk=Symbol.for("react.lazy"),Gy=Symbol.iterator;function uk(t){return t===null||typeof t!="object"?null:(t=Gy&&t[Gy]||t["@@iterator"],typeof t=="function"?t:null)}var xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tw=Object.assign,Sw={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Sw,this.updater=n||xw}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kw(){}kw.prototype=Xs.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=Sw,this.updater=n||xw}var Jp=Xp.prototype=new kw;Jp.constructor=Xp;Tw(Jp,Xs.prototype);Jp.isPureReactComponent=!0;var Ky=Array.isArray,Cw=Object.prototype.hasOwnProperty,Zp={current:null},Aw={key:!0,ref:!0,__self:!0,__source:!0};function Rw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cw.call(e,r)&&!Aw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ua,type:t,key:s,ref:o,props:i,_owner:Zp.current}}function ck(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function hk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qy=/\/+/g;function ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hk(""+t.key):e.toString(36)}function eu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ed(o,0):r,Ky(i)?(n="",t!=null&&(n=t.replace(Qy,"$&/")+"/"),eu(i,e,n,"",function(u){return u})):i!=null&&(em(i)&&(i=ck(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ky(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ed(s,a);o+=eu(s,e,n,l,i)}else if(l=uk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ed(s,a++),o+=eu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(t,e,n){if(t==null)return t;var r=[],i=0;return eu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},tu={transition:null},fk={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:tu,ReactCurrentOwner:Zp};se.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Xs;se.Fragment=ek;se.Profiler=nk;se.PureComponent=Xp;se.StrictMode=tk;se.Suspense=ok;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fk;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cw.call(e,l)&&!Aw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ua,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:ik,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rk,_context:t},t.Consumer=t};se.createElement=Rw;se.createFactory=function(t){var e=Rw.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:sk,render:t}};se.isValidElement=em;se.lazy=function(t){return{$$typeof:lk,_payload:{_status:-1,_result:t},_init:dk}};se.memo=function(t,e){return{$$typeof:ak,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=tu.transition;tu.transition={};try{t()}finally{tu.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return Nt.current.useCallback(t,e)};se.useContext=function(t){return Nt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Nt.current.useEffect(t,e)};se.useId=function(){return Nt.current.useId()};se.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Nt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};se.useRef=function(t){return Nt.current.useRef(t)};se.useState=function(t){return Nt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Nt.current.useTransition()};se.version="18.2.0";Iw.exports=se;var I=Iw.exports;const Pt=Yp(I),Yy=JS({__proto__:null,default:Pt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pk=I,mk=Symbol.for("react.element"),gk=Symbol.for("react.fragment"),yk=Object.prototype.hasOwnProperty,vk=pk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_k={key:!0,ref:!0,__self:!0,__source:!0};function Pw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yk.call(e,r)&&!_k.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mk,type:t,key:s,ref:o,props:i,_owner:vk.current}}Rc.Fragment=gk;Rc.jsx=Pw;Rc.jsxs=Pw;Ew.exports=Rc;var m=Ew.exports,uf={},bw={exports:{}},Kt={},Nw={exports:{}},Ow={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,W){var K=N.length;N.push(W);e:for(;0<K;){var pe=K-1>>>1,L=N[pe];if(0<i(L,W))N[pe]=W,N[K]=L,K=pe;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var W=N[0],K=N.pop();if(K!==W){N[0]=K;e:for(var pe=0,L=N.length,$=L>>>1;pe<$;){var j=2*(pe+1)-1,Q=N[j],x=j+1,re=N[x];if(0>i(Q,K))x<L&&0>i(re,Q)?(N[pe]=re,N[x]=K,pe=x):(N[pe]=Q,N[j]=K,pe=j);else if(x<L&&0>i(re,K))N[pe]=re,N[x]=K,pe=x;else break e}}return W}function i(N,W){var K=N.sortIndex-W.sortIndex;return K!==0?K:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=N)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(N){if(_=!1,y(N),!v)if(n(l)!==null)v=!0,Xt(T);else{var W=n(u);W!==null&&rt(E,W.startTime-N)}}function T(N,W){v=!1,_&&(_=!1,g(P),P=-1),p=!0;var K=d;try{for(y(W),h=n(l);h!==null&&(!(h.expirationTime>W)||N&&!z());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var L=pe(h.expirationTime<=W);W=t.unstable_now(),typeof L=="function"?h.callback=L:h===n(l)&&r(l),y(W)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var j=n(u);j!==null&&rt(E,j.startTime-W),$=!1}return $}finally{h=null,d=K,p=!1}}var S=!1,b=null,P=-1,q=5,V=-1;function z(){return!(t.unstable_now()-V<q)}function he(){if(b!==null){var N=t.unstable_now();V=N;var W=!0;try{W=b(!0,N)}finally{W?Se():(S=!1,b=null)}}else S=!1}var Se;if(typeof f=="function")Se=function(){f(he)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ce=ke.port2;ke.port1.onmessage=he,Se=function(){Ce.postMessage(null)}}else Se=function(){w(he,0)};function Xt(N){b=N,S||(S=!0,Se())}function rt(N,W){P=w(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Xt(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return N()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=d;d=N;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(N,W,K){var pe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?pe+K:pe):K=pe,N){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=K+L,N={id:c++,callback:W,priorityLevel:N,startTime:K,expirationTime:L,sortIndex:-1},K>pe?(N.sortIndex=K,e(u,N),n(l)===null&&N===n(u)&&(_?(g(P),P=-1):_=!0,rt(E,K-pe))):(N.sortIndex=L,e(l,N),v||p||(v=!0,Xt(T))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var W=d;return function(){var K=d;d=W;try{return N.apply(this,arguments)}finally{d=K}}}})(Ow);Nw.exports=Ow;var wk=Nw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=I,Ht=wk;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lw=new Set,ta={};function ji(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(ta[t]=e,t=0;t<e.length;t++)Lw.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,Ek=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xy={},Jy={};function Ik(t){return cf.call(Jy,t)?!0:cf.call(Xy,t)?!1:Ek.test(t)?Jy[t]=!0:(Xy[t]=!0,!1)}function xk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tk(t,e,n,r){if(e===null||typeof e>"u"||xk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);ht[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tk(e,n,i,r)&&(n=null),r||i===null?Ik(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),Vw=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),$w=Symbol.for("react.offscreen"),Zy=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Zy&&t[Zy]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,td;function Co(t){if(td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);td=e&&e[1]||""}return`
`+td+t}var nd=!1;function rd(t,e){if(!t||nd)return"";nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function Sk(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=rd(t.type,!1),t;case 11:return t=rd(t.type.render,!1),t;case 1:return t=rd(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case hf:return"Profiler";case im:return"StrictMode";case df:return"Suspense";case ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vw:return(t.displayName||"Context")+".Consumer";case Mw:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function kk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ck(t){var e=jw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=Ck(t))}function Fw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ev(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uw(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function gf(t,e){Uw(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&yf(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yf(t,e,n){(e!=="number"||Iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Ao(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function zw(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,Ww=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ak=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){Ak.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function Hw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function qw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Rk=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wf(t,e){if(e){if(Rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,ys=null,vs=null;function iv(t){if(t=Wa(t)){if(typeof xf!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Dc(e),xf(t.stateNode,t.type,e))}}function Gw(t){ys?vs?vs.push(t):vs=[t]:ys=t}function Kw(){if(ys){var t=ys,e=vs;if(vs=ys=null,iv(t),e)for(t=0;t<e.length;t++)iv(e[t])}}function Qw(t,e){return t(e)}function Yw(){}var id=!1;function Xw(t,e,n){if(id)return t(e,n);id=!0;try{return Qw(t,e,n)}finally{id=!1,(ys!==null||vs!==null)&&(Yw(),Kw())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Tf=!1;if(tr)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Tf=!1}function Pk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,xu=null,Tu=!1,Sf=null,bk={onError:function(t){Fo=!0,xu=t}};function Nk(t,e,n,r,i,s,o,a,l){Fo=!1,xu=null,Pk.apply(bk,arguments)}function Ok(t,e,n,r,i,s,o,a,l){if(Nk.apply(this,arguments),Fo){if(Fo){var u=xu;Fo=!1,xu=null}else throw Error(A(198));Tu||(Tu=!0,Sf=u)}}function Fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sv(t){if(Fi(t)!==t)throw Error(A(188))}function Dk(t){var e=t.alternate;if(!e){if(e=Fi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sv(i),t;if(s===r)return sv(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Zw(t){return t=Dk(t),t!==null?e1(t):null}function e1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e1(t);if(e!==null)return e;t=t.sibling}return null}var t1=Ht.unstable_scheduleCallback,ov=Ht.unstable_cancelCallback,Lk=Ht.unstable_shouldYield,Mk=Ht.unstable_requestPaint,je=Ht.unstable_now,Vk=Ht.unstable_getCurrentPriorityLevel,lm=Ht.unstable_ImmediatePriority,n1=Ht.unstable_UserBlockingPriority,Su=Ht.unstable_NormalPriority,$k=Ht.unstable_LowPriority,r1=Ht.unstable_IdlePriority,Pc=null,Pn=null;function jk(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:zk,Fk=Math.log,Uk=Math.LN2;function zk(t){return t>>>=0,t===0?32:31-(Fk(t)/Uk|0)|0}var El=64,Il=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ku(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ro(a):(s&=o,s!==0&&(r=Ro(s)))}else o=n&~i,o!==0?r=Ro(o):s!==0&&(r=Ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function Bk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Bk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i1(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function Hk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function s1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var o1,cm,a1,l1,u1,Cf=!1,xl=[],Dr=null,Lr=null,Mr=null,ia=new Map,sa=new Map,Ir=[],qk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function av(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function vo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wa(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gk(t,e,n,r,i){switch(e){case"focusin":return Dr=vo(Dr,t,e,n,r,i),!0;case"dragenter":return Lr=vo(Lr,t,e,n,r,i),!0;case"mouseover":return Mr=vo(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ia.set(s,vo(ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sa.set(s,vo(sa.get(s)||null,t,e,n,r,i)),!0}return!1}function c1(t){var e=pi(t.target);if(e!==null){var n=Fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Jw(n),e!==null){t.blockedOn=e,u1(t.priority,function(){a1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);If=r,n.target.dispatchEvent(r),If=null}else return e=Wa(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function lv(t,e,n){nu(t)&&n.delete(e)}function Kk(){Cf=!1,Dr!==null&&nu(Dr)&&(Dr=null),Lr!==null&&nu(Lr)&&(Lr=null),Mr!==null&&nu(Mr)&&(Mr=null),ia.forEach(lv),sa.forEach(lv)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Cf||(Cf=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,Kk)))}function oa(t){function e(i){return _o(i,t)}if(0<xl.length){_o(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&_o(Dr,t),Lr!==null&&_o(Lr,t),Mr!==null&&_o(Mr,t),ia.forEach(e),sa.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)c1(n),n.blockedOn===null&&Ir.shift()}var _s=dr.ReactCurrentBatchConfig,Cu=!0;function Qk(t,e,n,r){var i=me,s=_s.transition;_s.transition=null;try{me=1,hm(t,e,n,r)}finally{me=i,_s.transition=s}}function Yk(t,e,n,r){var i=me,s=_s.transition;_s.transition=null;try{me=4,hm(t,e,n,r)}finally{me=i,_s.transition=s}}function hm(t,e,n,r){if(Cu){var i=Af(t,e,n,r);if(i===null)md(t,e,r,Au,n),av(t,r);else if(Gk(i,t,e,n,r))r.stopPropagation();else if(av(t,r),e&4&&-1<qk.indexOf(t)){for(;i!==null;){var s=Wa(i);if(s!==null&&o1(s),s=Af(t,e,n,r),s===null&&md(t,e,r,Au,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else md(t,e,r,null,n)}}var Au=null;function Af(t,e,n,r){if(Au=null,t=am(r),t=pi(t),t!==null)if(e=Fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Au=t,null}function h1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vk()){case lm:return 1;case n1:return 4;case Su:case $k:return 16;case r1:return 536870912;default:return 16}default:return 16}}var Rr=null,dm=null,ru=null;function d1(){if(ru)return ru;var t,e=dm,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ru=i.slice(t,1<r?1-r:void 0)}function iu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function uv(){return!1}function Qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:uv,this.isPropagationStopped=uv,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=Qt(Js),Ba=Oe({},Js,{view:0,detail:0}),Xk=Qt(Ba),od,ad,wo,bc=Oe({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(od=t.screenX-wo.screenX,ad=t.screenY-wo.screenY):ad=od=0,wo=t),od)},movementY:function(t){return"movementY"in t?t.movementY:ad}}),cv=Qt(bc),Jk=Oe({},bc,{dataTransfer:0}),Zk=Qt(Jk),eC=Oe({},Ba,{relatedTarget:0}),ld=Qt(eC),tC=Oe({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),nC=Qt(tC),rC=Oe({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iC=Qt(rC),sC=Oe({},Js,{data:0}),hv=Qt(sC),oC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lC[t])?!!e[t]:!1}function pm(){return uC}var cC=Oe({},Ba,{key:function(t){if(t.key){var e=oC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hC=Qt(cC),dC=Oe({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dv=Qt(dC),fC=Oe({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),pC=Qt(fC),mC=Oe({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),gC=Qt(mC),yC=Oe({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vC=Qt(yC),_C=[9,13,27,32],mm=tr&&"CompositionEvent"in window,Uo=null;tr&&"documentMode"in document&&(Uo=document.documentMode);var wC=tr&&"TextEvent"in window&&!Uo,f1=tr&&(!mm||Uo&&8<Uo&&11>=Uo),fv=String.fromCharCode(32),pv=!1;function p1(t,e){switch(t){case"keyup":return _C.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function EC(t,e){switch(t){case"compositionend":return m1(e);case"keypress":return e.which!==32?null:(pv=!0,fv);case"textInput":return t=e.data,t===fv&&pv?null:t;default:return null}}function IC(t,e){if(rs)return t==="compositionend"||!mm&&p1(t,e)?(t=d1(),ru=dm=Rr=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f1&&e.locale!=="ko"?null:e.data;default:return null}}var xC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xC[t.type]:e==="textarea"}function g1(t,e,n,r){Gw(r),e=Ru(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zo=null,aa=null;function TC(t){C1(t,0)}function Nc(t){var e=os(t);if(Fw(e))return t}function SC(t,e){if(t==="change")return e}var y1=!1;if(tr){var ud;if(tr){var cd="oninput"in document;if(!cd){var gv=document.createElement("div");gv.setAttribute("oninput","return;"),cd=typeof gv.oninput=="function"}ud=cd}else ud=!1;y1=ud&&(!document.documentMode||9<document.documentMode)}function yv(){zo&&(zo.detachEvent("onpropertychange",v1),aa=zo=null)}function v1(t){if(t.propertyName==="value"&&Nc(aa)){var e=[];g1(e,aa,t,am(t)),Xw(TC,e)}}function kC(t,e,n){t==="focusin"?(yv(),zo=e,aa=n,zo.attachEvent("onpropertychange",v1)):t==="focusout"&&yv()}function CC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(aa)}function AC(t,e){if(t==="click")return Nc(e)}function RC(t,e){if(t==="input"||t==="change")return Nc(e)}function PC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:PC;function la(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cf.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function vv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _v(t,e){var n=vv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vv(n)}}function _1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w1(){for(var t=window,e=Iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Iu(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bC(t){var e=w1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_1(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_v(n,s);var o=_v(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NC=tr&&"documentMode"in document&&11>=document.documentMode,is=null,Rf=null,Bo=null,Pf=!1;function wv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||is==null||is!==Iu(r)||(r=is,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&la(Bo,r)||(Bo=r,r=Ru(Rf,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},hd={},E1={};tr&&(E1=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Oc(t){if(hd[t])return hd[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E1)return hd[t]=e[n];return t}var I1=Oc("animationend"),x1=Oc("animationiteration"),T1=Oc("animationstart"),S1=Oc("transitionend"),k1=new Map,Ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){k1.set(t,e),ji(e,[t])}for(var dd=0;dd<Ev.length;dd++){var fd=Ev[dd],OC=fd.toLowerCase(),DC=fd[0].toUpperCase()+fd.slice(1);ii(OC,"on"+DC)}ii(I1,"onAnimationEnd");ii(x1,"onAnimationIteration");ii(T1,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(S1,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Iv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ok(r,e,void 0,t),t.currentTarget=null}function C1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Iv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Iv(i,a,u),s=l}}}if(Tu)throw t=Sf,Tu=!1,Sf=null,t}function we(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var r=t+"__bubble";n.has(r)||(A1(e,t,2,!1),n.add(r))}function pd(t,e,n){var r=0;e&&(r|=4),A1(n,t,r,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[kl]){t[kl]=!0,Lw.forEach(function(n){n!=="selectionchange"&&(LC.has(n)||pd(n,!1,t),pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kl]||(e[kl]=!0,pd("selectionchange",!1,e))}}function A1(t,e,n,r){switch(h1(e)){case 1:var i=Qk;break;case 4:i=Yk;break;default:i=hm}n=i.bind(null,e,n,t),i=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function md(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xw(function(){var u=s,c=am(n),h=[];e:{var d=k1.get(t);if(d!==void 0){var p=fm,v=t;switch(t){case"keypress":if(iu(n)===0)break e;case"keydown":case"keyup":p=hC;break;case"focusin":v="focus",p=ld;break;case"focusout":v="blur",p=ld;break;case"beforeblur":case"afterblur":p=ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pC;break;case I1:case x1:case T1:p=nC;break;case S1:p=gC;break;case"scroll":p=Xk;break;case"wheel":p=vC;break;case"copy":case"cut":case"paste":p=iC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dv}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=ra(f,g),E!=null&&_.push(ca(f,E,y)))),w)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==If&&(v=n.relatedTarget||n.fromElement)&&(pi(v)||v[nr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?pi(v):null,v!==null&&(w=Fi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=cv,E="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=dv,E="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?d:os(p),y=v==null?d:os(v),d=new _(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,E=null,pi(c)===u&&(_=new _(g,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,E=_),w=E,p&&v)t:{for(_=p,g=v,f=0,y=_;y;y=Qi(y))f++;for(y=0,E=g;E;E=Qi(E))y++;for(;0<f-y;)_=Qi(_),f--;for(;0<y-f;)g=Qi(g),y--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=Qi(_),g=Qi(g)}_=null}else _=null;p!==null&&xv(h,d,p,_,!1),v!==null&&w!==null&&xv(h,w,v,_,!0)}}e:{if(d=u?os(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=SC;else if(mv(d))if(y1)T=RC;else{T=CC;var S=kC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=AC);if(T&&(T=T(t,u))){g1(h,T,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&yf(d,"number",d.value)}switch(S=u?os(u):window,t){case"focusin":(mv(S)||S.contentEditable==="true")&&(is=S,Rf=u,Bo=null);break;case"focusout":Bo=Rf=is=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,wv(h,n,c);break;case"selectionchange":if(NC)break;case"keydown":case"keyup":wv(h,n,c)}var b;if(mm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else rs?p1(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(f1&&n.locale!=="ko"&&(rs||P!=="onCompositionStart"?P==="onCompositionEnd"&&rs&&(b=d1()):(Rr=c,dm="value"in Rr?Rr.value:Rr.textContent,rs=!0)),S=Ru(u,P),0<S.length&&(P=new hv(P,t,null,n,c),h.push({event:P,listeners:S}),b?P.data=b:(b=m1(n),b!==null&&(P.data=b)))),(b=wC?EC(t,n):IC(t,n))&&(u=Ru(u,"onBeforeInput"),0<u.length&&(c=new hv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}C1(h,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ra(t,n),s!=null&&r.unshift(ca(t,s,i)),s=ra(t,e),s!=null&&r.push(ca(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ra(n,s),l!=null&&o.unshift(ca(n,l,a))):i||(l=ra(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MC=/\r\n?/g,VC=/\u0000|\uFFFD/g;function Tv(t){return(typeof t=="string"?t:""+t).replace(MC,`
`).replace(VC,"")}function Cl(t,e,n){if(e=Tv(e),Tv(t)!==e&&n)throw Error(A(425))}function Pu(){}var bf=null,Nf=null;function Of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,$C=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,jC=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(t){return Sv.resolve(null).then(t).catch(FC)}:Df;function FC(t){setTimeout(function(){throw t})}function gd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oa(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),kn="__reactFiber$"+Zs,ha="__reactProps$"+Zs,nr="__reactContainer$"+Zs,Lf="__reactEvents$"+Zs,UC="__reactListeners$"+Zs,zC="__reactHandles$"+Zs;function pi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kv(t);t!==null;){if(n=t[kn])return n;t=kv(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[kn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Dc(t){return t[ha]||null}var Mf=[],as=-1;function si(t){return{current:t}}function xe(t){0>as||(t.current=Mf[as],Mf[as]=null,as--)}function _e(t,e){as++,Mf[as]=t.current,t.current=e}var Xr={},St=si(Xr),Vt=si(!1),ki=Xr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function bu(){xe(Vt),xe(St)}function Cv(t,e,n){if(St.current!==Xr)throw Error(A(168));_e(St,e),_e(Vt,n)}function R1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,kk(t)||"Unknown",i));return Oe({},n,r)}function Nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,ki=St.current,_e(St,t),_e(Vt,Vt.current),!0}function Av(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=R1(t,e,ki),r.__reactInternalMemoizedMergedChildContext=t,xe(Vt),xe(St),_e(St,t)):xe(Vt),_e(Vt,n)}var Hn=null,Lc=!1,yd=!1;function P1(t){Hn===null?Hn=[t]:Hn.push(t)}function BC(t){Lc=!0,P1(t)}function oi(){if(!yd&&Hn!==null){yd=!0;var t=0,e=me;try{var n=Hn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,Lc=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),t1(lm,oi),i}finally{me=e,yd=!1}}return null}var ls=[],us=0,Ou=null,Du=0,Jt=[],Zt=0,Ci=null,Gn=1,Kn="";function ci(t,e){ls[us++]=Du,ls[us++]=Ou,Ou=t,Du=e}function b1(t,e,n){Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Ci,Ci=t;var r=Gn;t=Kn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-yn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function ym(t){t.return!==null&&(ci(t,1),b1(t,1,0))}function vm(t){for(;t===Ou;)Ou=ls[--us],ls[us]=null,Du=ls[--us],ls[us]=null;for(;t===Ci;)Ci=Jt[--Zt],Jt[Zt]=null,Kn=Jt[--Zt],Jt[Zt]=null,Gn=Jt[--Zt],Jt[Zt]=null}var Wt=null,zt=null,Pe=!1,pn=null;function N1(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function Vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $f(t){if(Pe){var e=zt;if(e){var n=e;if(!Rv(t,e)){if(Vf(t))throw Error(A(418));e=Vr(n.nextSibling);var r=Wt;e&&Rv(t,e)?N1(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Wt=t)}}else{if(Vf(t))throw Error(A(418));t.flags=t.flags&-4097|2,Pe=!1,Wt=t}}}function Pv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Al(t){if(t!==Wt)return!1;if(!Pe)return Pv(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Of(t.type,t.memoizedProps)),e&&(e=zt)){if(Vf(t))throw O1(),Error(A(418));for(;e;)N1(t,e),e=Vr(e.nextSibling)}if(Pv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?Vr(t.stateNode.nextSibling):null;return!0}function O1(){for(var t=zt;t;)t=Vr(t.nextSibling)}function Os(){zt=Wt=null,Pe=!1}function _m(t){pn===null?pn=[t]:pn.push(t)}var WC=dr.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Lu=si(null),Mu=null,cs=null,wm=null;function Em(){wm=cs=Mu=null}function Im(t){var e=Lu.current;xe(Lu),t._currentValue=e}function jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Mu=t,wm=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Mu===null)throw Error(A(308));cs=t,Mu.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var mi=null;function xm(t){mi===null?mi=[t]:mi.push(t)}function D1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xm(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,xm(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}function bv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vu(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=Oe({},h,d);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ri|=o,t.lanes=o,t.memoizedState=h}}function Nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var M1=new Dw.Component().refs;function Ff(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Fr(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(vn(e,t,i,r),su(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Fr(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(vn(e,t,i,r),su(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Fr(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(vn(e,t,r,n),su(e,t,r))}};function Ov(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,r)||!la(i,s):!0}function V1(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=$t(e)?ki:St.current,r=e.contextTypes,s=(r=r!=null)?Ns(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=M1,Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=$t(e)?ki:St.current,i.context=Ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ff(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===M1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Rl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lv(t){var e=t._init;return e(t._payload)}function $1(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Ur(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,E){return f===null||f.tag!==6?(f=Td(y,g.mode,E),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,E){var T=y.type;return T===ns?c(g,f,y.props.children,E,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===wr&&Lv(T)===f.type)?(E=i(f,y.props),E.ref=Eo(g,f,y),E.return=g,E):(E=hu(y.type,y.key,y.props,null,g.mode,E),E.ref=Eo(g,f,y),E.return=g,E)}function u(g,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Sd(y,g.mode,E),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,E,T){return f===null||f.tag!==7?(f=Ii(y,g.mode,E,T),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Td(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vl:return y=hu(f.type,f.key,f.props,null,g.mode,y),y.ref=Eo(g,null,f),y.return=g,y;case ts:return f=Sd(f,g.mode,y),f.return=g,f;case wr:var E=f._init;return h(g,E(f._payload),y)}if(Ao(f)||go(f))return f=Ii(f,g.mode,y,null),f.return=g,f;Rl(g,f)}return null}function d(g,f,y,E){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vl:return y.key===T?l(g,f,y,E):null;case ts:return y.key===T?u(g,f,y,E):null;case wr:return T=y._init,d(g,f,T(y._payload),E)}if(Ao(y)||go(y))return T!==null?null:c(g,f,y,E,null);Rl(g,y)}return null}function p(g,f,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(f,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case vl:return g=g.get(E.key===null?y:E.key)||null,l(f,g,E,T);case ts:return g=g.get(E.key===null?y:E.key)||null,u(f,g,E,T);case wr:var S=E._init;return p(g,f,y,S(E._payload),T)}if(Ao(E)||go(E))return g=g.get(y)||null,c(f,g,E,T,null);Rl(f,E)}return null}function v(g,f,y,E){for(var T=null,S=null,b=f,P=f=0,q=null;b!==null&&P<y.length;P++){b.index>P?(q=b,b=null):q=b.sibling;var V=d(g,b,y[P],E);if(V===null){b===null&&(b=q);break}t&&b&&V.alternate===null&&e(g,b),f=s(V,f,P),S===null?T=V:S.sibling=V,S=V,b=q}if(P===y.length)return n(g,b),Pe&&ci(g,P),T;if(b===null){for(;P<y.length;P++)b=h(g,y[P],E),b!==null&&(f=s(b,f,P),S===null?T=b:S.sibling=b,S=b);return Pe&&ci(g,P),T}for(b=r(g,b);P<y.length;P++)q=p(b,g,P,y[P],E),q!==null&&(t&&q.alternate!==null&&b.delete(q.key===null?P:q.key),f=s(q,f,P),S===null?T=q:S.sibling=q,S=q);return t&&b.forEach(function(z){return e(g,z)}),Pe&&ci(g,P),T}function _(g,f,y,E){var T=go(y);if(typeof T!="function")throw Error(A(150));if(y=T.call(y),y==null)throw Error(A(151));for(var S=T=null,b=f,P=f=0,q=null,V=y.next();b!==null&&!V.done;P++,V=y.next()){b.index>P?(q=b,b=null):q=b.sibling;var z=d(g,b,V.value,E);if(z===null){b===null&&(b=q);break}t&&b&&z.alternate===null&&e(g,b),f=s(z,f,P),S===null?T=z:S.sibling=z,S=z,b=q}if(V.done)return n(g,b),Pe&&ci(g,P),T;if(b===null){for(;!V.done;P++,V=y.next())V=h(g,V.value,E),V!==null&&(f=s(V,f,P),S===null?T=V:S.sibling=V,S=V);return Pe&&ci(g,P),T}for(b=r(g,b);!V.done;P++,V=y.next())V=p(b,g,P,V.value,E),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?P:V.key),f=s(V,f,P),S===null?T=V:S.sibling=V,S=V);return t&&b.forEach(function(he){return e(g,he)}),Pe&&ci(g,P),T}function w(g,f,y,E){if(typeof y=="object"&&y!==null&&y.type===ns&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vl:e:{for(var T=y.key,S=f;S!==null;){if(S.key===T){if(T=y.type,T===ns){if(S.tag===7){n(g,S.sibling),f=i(S,y.props.children),f.return=g,g=f;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===wr&&Lv(T)===S.type){n(g,S.sibling),f=i(S,y.props),f.ref=Eo(g,S,y),f.return=g,g=f;break e}n(g,S);break}else e(g,S);S=S.sibling}y.type===ns?(f=Ii(y.props.children,g.mode,E,y.key),f.return=g,g=f):(E=hu(y.type,y.key,y.props,null,g.mode,E),E.ref=Eo(g,f,y),E.return=g,g=E)}return o(g);case ts:e:{for(S=y.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Sd(y,g.mode,E),f.return=g,g=f}return o(g);case wr:return S=y._init,w(g,f,S(y._payload),E)}if(Ao(y))return v(g,f,y,E);if(go(y))return _(g,f,y,E);Rl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=Td(y,g.mode,E),f.return=g,g=f),o(g)):n(g,f)}return w}var Ds=$1(!0),j1=$1(!1),Ha={},bn=si(Ha),da=si(Ha),fa=si(Ha);function gi(t){if(t===Ha)throw Error(A(174));return t}function Sm(t,e){switch(_e(fa,e),_e(da,t),_e(bn,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_f(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_f(e,t)}xe(bn),_e(bn,e)}function Ls(){xe(bn),xe(da),xe(fa)}function F1(t){gi(fa.current);var e=gi(bn.current),n=_f(e,t.type);e!==n&&(_e(da,t),_e(bn,n))}function km(t){da.current===t&&(xe(bn),xe(da))}var be=si(0);function $u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function Cm(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var ou=dr.ReactCurrentDispatcher,_d=dr.ReactCurrentBatchConfig,Ai=0,Ne=null,Ke=null,Je=null,ju=!1,Wo=!1,pa=0,HC=0;function dt(){throw Error(A(321))}function Am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function Rm(t,e,n,r,i,s){if(Ai=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ou.current=t===null||t.memoizedState===null?QC:YC,t=n(r,i),Wo){s=0;do{if(Wo=!1,pa=0,25<=s)throw Error(A(301));s+=1,Je=Ke=null,e.updateQueue=null,ou.current=XC,t=n(r,i)}while(Wo)}if(ou.current=Fu,e=Ke!==null&&Ke.next!==null,Ai=0,Je=Ke=Ne=null,ju=!1,e)throw Error(A(300));return t}function Pm(){var t=pa!==0;return pa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ne.memoizedState=Je=t:Je=Je.next=t,Je}function on(){if(Ke===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Je===null?Ne.memoizedState:Je.next;if(e!==null)Je=e,Ke=t;else{if(t===null)throw Error(A(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Ne.memoizedState=Je=t:Je=Je.next=t}return Je}function ma(t,e){return typeof e=="function"?e(t):e}function wd(t){var e=on(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ne.lanes|=c,Ri|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_n(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ed(t){var e=on(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function U1(){}function z1(t,e){var n=Ne,r=on(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Mt=!0),r=r.queue,bm(H1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ga(9,W1.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(A(349));Ai&30||B1(n,e,i)}return i}function B1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W1(t,e,n,r){e.value=n,e.getSnapshot=r,q1(e)&&G1(t)}function H1(t,e,n){return n(function(){q1(e)&&G1(t)})}function q1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function G1(t){var e=rr(t,1);e!==null&&vn(e,t,1,-1)}function Mv(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=KC.bind(null,Ne,t),[e.memoizedState,t]}function ga(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function K1(){return on().memoizedState}function au(t,e,n,r){var i=Sn();Ne.flags|=t,i.memoizedState=ga(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&Am(r,o.deps)){i.memoizedState=ga(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ga(1|e,n,s,r)}function Vv(t,e){return au(8390656,8,t,e)}function bm(t,e){return Vc(2048,8,t,e)}function Q1(t,e){return Vc(4,2,t,e)}function Y1(t,e){return Vc(4,4,t,e)}function X1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J1(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,X1.bind(null,e,t),n)}function Nm(){}function Z1(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eE(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tE(t,e,n){return Ai&21?(_n(n,e)||(n=i1(),Ne.lanes|=n,Ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function qC(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=_d.transition;_d.transition={};try{t(!1),e()}finally{me=n,_d.transition=r}}function nE(){return on().memoizedState}function GC(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rE(t))iE(e,n);else if(n=D1(t,e,n,r),n!==null){var i=bt();vn(n,t,r,i),sE(n,e,r)}}function KC(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rE(t))iE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var l=e.interleaved;l===null?(i.next=i,xm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=D1(t,e,i,r),n!==null&&(i=bt(),vn(n,t,r,i),sE(n,e,r))}}function rE(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function iE(t,e){Wo=ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}var Fu={readContext:sn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},QC={readContext:sn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Vv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,au(4194308,4,X1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return au(4194308,4,t,e)},useInsertionEffect:function(t,e){return au(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GC.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Mv,useDebugValue:Nm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Mv(!1),e=t[0];return t=qC.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Sn();if(Pe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ze===null)throw Error(A(349));Ai&30||B1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vv(H1.bind(null,r,s,t),[t]),r.flags|=2048,ga(9,W1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ze.identifierPrefix;if(Pe){var n=Kn,r=Gn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YC={readContext:sn,useCallback:Z1,useContext:sn,useEffect:bm,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:Y1,useMemo:eE,useReducer:wd,useRef:K1,useState:function(){return wd(ma)},useDebugValue:Nm,useDeferredValue:function(t){var e=on();return tE(e,Ke.memoizedState,t)},useTransition:function(){var t=wd(ma)[0],e=on().memoizedState;return[t,e]},useMutableSource:U1,useSyncExternalStore:z1,useId:nE,unstable_isNewReconciler:!1},XC={readContext:sn,useCallback:Z1,useContext:sn,useEffect:bm,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:Y1,useMemo:eE,useReducer:Ed,useRef:K1,useState:function(){return Ed(ma)},useDebugValue:Nm,useDeferredValue:function(t){var e=on();return Ke===null?e.memoizedState=t:tE(e,Ke.memoizedState,t)},useTransition:function(){var t=Ed(ma)[0],e=on().memoizedState;return[t,e]},useMutableSource:U1,useSyncExternalStore:z1,useId:nE,unstable_isNewReconciler:!1};function Ms(t,e){try{var n="",r=e;do n+=Sk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JC=typeof WeakMap=="function"?WeakMap:Map;function oE(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zu||(zu=!0,Jf=r),zf(t,e)},n}function aE(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $v(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dA.bind(null,t,e,n),e.then(t,t))}function jv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var ZC=dr.ReactCurrentOwner,Mt=!1;function At(t,e,n,r){e.child=t===null?j1(e,null,n,r):Ds(e,t.child,n,r)}function Uv(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=Rm(t,e,n,r,s,i),n=Pm(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Pe&&n&&ym(e),e.flags|=1,At(t,e,r,i),e.child)}function zv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lE(t,e,s,r,i)):(t=hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function lE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(la(s,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Bf(t,e,n,r,i)}function uE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ds,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(ds,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(ds,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(ds,Ut),Ut|=r;return At(t,e,i,n),e.child}function cE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,r,i){var s=$t(n)?ki:St.current;return s=Ns(e,s),ws(e,i),n=Rm(t,e,n,r,s,i),r=Pm(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Pe&&r&&ym(e),e.flags|=1,At(t,e,n,i),e.child)}function Bv(t,e,n,r,i){if($t(n)){var s=!0;Nu(e)}else s=!1;if(ws(e,i),e.stateNode===null)lu(t,e),V1(e,n,r),Uf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=$t(n)?ki:St.current,u=Ns(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dv(e,o,r,u),Er=!1;var d=e.memoizedState;o.state=d,Vu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Vt.current||Er?(typeof c=="function"&&(Ff(e,n,c,r),l=e.memoizedState),(a=Er||Ov(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,L1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=$t(n)?ki:St.current,l=Ns(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Dv(e,o,r,l),Er=!1,d=e.memoizedState,o.state=d,Vu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Vt.current||Er?(typeof p=="function"&&(Ff(e,n,p,r),v=e.memoizedState),(u=Er||Ov(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){cE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Av(e,n,!1),ir(t,e,s);r=e.stateNode,ZC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&Av(e,n,!0),e.child}function hE(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),Sm(t,e.containerInfo)}function Wv(t,e,n,r,i){return Os(),_m(i),e.flags|=256,At(t,e,n,r),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function dE(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(be,i&1),t===null)return $f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Hf,t):Om(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,r){return r!==null&&_m(r),Ds(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Id(Error(A(422))),Pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return Pl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Id(s,r,void 0),Pl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Mt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),vn(r,t,i,-1))}return jm(),r=Id(Error(A(421))),Pl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Vr(i.nextSibling),Wt=e,Pe=!0,pn=null,t!==null&&(Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Ci,Gn=t.id,Kn=t.overflow,Ci=e),e=Om(e,r.children),e.flags|=4096,e)}function Hv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jf(t.return,e,n)}function xd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hv(t,n,e);else if(t.tag===19)Hv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$u(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$u(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tA(t,e,n){switch(e.tag){case 3:hE(e),Os();break;case 5:F1(e);break;case 1:$t(e.type)&&Nu(e);break;case 4:Sm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?dE(t,e,n):(_e(be,be.current&1),t=ir(t,e,n),t!==null?t.sibling:null);_e(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,uE(t,e,n)}return ir(t,e,n)}var pE,Gf,mE,gE;pE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};mE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(bn.current);var s=null;switch(n){case"input":i=mf(t,i),r=mf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=vf(t,i),r=vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pu)}wf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Io(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nA(t,e,n){var r=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return $t(e.type)&&bu(),ft(e),null;case 3:return r=e.stateNode,Ls(),xe(Vt),xe(St),Cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(tp(pn),pn=null))),Gf(t,e),ft(e),null;case 5:km(e);var i=gi(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)mE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return ft(e),null}if(t=gi(bn.current),Al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[ha]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)we(Po[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":ev(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":nv(r,s),we("invalid",r)}wf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,a,t),i=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":_l(r),tv(r,s,!0);break;case"textarea":_l(r),rv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[ha]=r,pE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)we(Po[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":ev(t,r),i=mf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),we("invalid",t);break;case"textarea":nv(t,r),i=vf(t,r),we("invalid",t);break;default:i=r}wf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ww(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&rm(t,s,l,o))}switch(n){case"input":_l(t),tv(t,r,!1);break;case"textarea":_l(t),rv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)gE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=gi(fa.current),gi(bn.current),Al(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return ft(e),null;case 13:if(xe(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&zt!==null&&e.mode&1&&!(e.flags&128))O1(),Os(),e.flags|=98560,s=!1;else if(s=Al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[kn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else pn!==null&&(tp(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Qe===0&&(Qe=3):jm())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Ls(),Gf(t,e),t===null&&ua(e.stateNode.containerInfo),ft(e),null;case 10:return Im(e.type._context),ft(e),null;case 17:return $t(e.type)&&bu(),ft(e),null;case 19:if(xe(be),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Io(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$u(t),o!==null){for(e.flags|=128,Io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>Vs&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304)}else{if(!r)if(t=$u(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return ft(e),null}else 2*je()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=be.current,_e(be,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return $m(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function rA(t,e){switch(vm(e),e.tag){case 1:return $t(e.type)&&bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),xe(Vt),xe(St),Cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return km(e),null;case 13:if(xe(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(be),null;case 4:return Ls(),null;case 10:return Im(e.type._context),null;case 22:case 23:return $m(),null;case 24:return null;default:return null}}var bl=!1,yt=!1,iA=typeof WeakSet=="function"?WeakSet:Set,U=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Kf(t,e,n){try{n()}catch(r){Me(t,e,r)}}var qv=!1;function sA(t,e){if(bf=Cu,t=w1(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Cu=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:dn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Me(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return v=qv,qv=!1,v}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kf(e,n,s)}i=i.next}while(i!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yE(t){var e=t.alternate;e!==null&&(t.alternate=null,yE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[ha],delete e[Lf],delete e[UC],delete e[zC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vE(t){return t.tag===5||t.tag===3||t.tag===4}function Gv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pu));else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var ot=null,fn=!1;function vr(t,e,n){for(n=n.child;n!==null;)_E(t,e,n),n=n.sibling}function _E(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:yt||hs(n,e);case 6:var r=ot,i=fn;ot=null,vr(t,e,n),ot=r,fn=i,ot!==null&&(fn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(fn?(t=ot,n=n.stateNode,t.nodeType===8?gd(t.parentNode,n):t.nodeType===1&&gd(t,n),oa(t)):gd(ot,n.stateNode));break;case 4:r=ot,i=fn,ot=n.stateNode.containerInfo,fn=!0,vr(t,e,n),ot=r,fn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!yt&&(hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,vr(t,e,n),yt=r):vr(t,e,n);break;default:vr(t,e,n)}}function Kv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iA),e.forEach(function(r){var i=pA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,fn=!1;break e;case 3:ot=a.stateNode.containerInfo,fn=!0;break e;case 4:ot=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(ot===null)throw Error(A(160));_E(s,o,i),ot=null,fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wE(e,t),e=e.sibling}function wE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),xn(t),r&4){try{Ho(3,t,t.return),$c(3,t)}catch(_){Me(t,t.return,_)}try{Ho(5,t,t.return)}catch(_){Me(t,t.return,_)}}break;case 1:hn(e,t),xn(t),r&512&&n!==null&&hs(n,n.return);break;case 5:if(hn(e,t),xn(t),r&512&&n!==null&&hs(n,n.return),t.flags&32){var i=t.stateNode;try{na(i,"")}catch(_){Me(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uw(i,s),Ef(a,o);var u=Ef(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?qw(i,h):c==="dangerouslySetInnerHTML"?Ww(i,h):c==="children"?na(i,h):rm(i,c,h,u)}switch(a){case"input":gf(i,s);break;case"textarea":zw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?gs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(i,!!s.multiple,s.defaultValue,!0):gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ha]=s}catch(_){Me(t,t.return,_)}}break;case 6:if(hn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Me(t,t.return,_)}}break;case 3:if(hn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(_){Me(t,t.return,_)}break;case 4:hn(e,t),xn(t);break;case 13:hn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=je())),r&4&&Kv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||c,hn(e,t),yt=u):hn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ho(4,d,d.return);break;case 1:hs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Me(r,n,_)}}break;case 5:hs(d,d.return);break;case 22:if(d.memoizedState!==null){Yv(h);continue}}p!==null?(p.return=d,U=p):Yv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hw("display",o))}catch(_){Me(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Me(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:hn(e,t),xn(t),r&4&&Kv(t);break;case 21:break;default:hn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vE(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(na(i,""),r.flags&=-33);var s=Gv(t);Xf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Gv(t);Yf(t,a,o);break;default:throw Error(A(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oA(t,e,n){U=t,EE(t)}function EE(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=bl;var u=yt;if(bl=o,(yt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?Xv(i):l!==null?(l.return=o,U=l):Xv(i);for(;s!==null;)U=s,EE(s),s=s.sibling;U=i,bl=a,yt=u}Qv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):Qv(t)}}function Qv(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&oa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}yt||e.flags&512&&Qf(e)}catch(d){Me(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function Yv(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function Xv(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(l){Me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Me(e,i,l)}}var s=e.return;try{Qf(e)}catch(l){Me(e,s,l)}break;case 5:var o=e.return;try{Qf(e)}catch(l){Me(e,o,l)}}}catch(l){Me(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var aA=Math.ceil,Uu=dr.ReactCurrentDispatcher,Dm=dr.ReactCurrentOwner,nn=dr.ReactCurrentBatchConfig,le=0,Ze=null,We=null,ut=0,Ut=0,ds=si(0),Qe=0,ya=null,Ri=0,jc=0,Lm=0,qo=null,Dt=null,Mm=0,Vs=1/0,Wn=null,zu=!1,Jf=null,jr=null,Nl=!1,Pr=null,Bu=0,Go=0,Zf=null,uu=-1,cu=0;function bt(){return le&6?je():uu!==-1?uu:uu=je()}function Fr(t){return t.mode&1?le&2&&ut!==0?ut&-ut:WC.transition!==null?(cu===0&&(cu=i1()),cu):(t=me,t!==0||(t=window.event,t=t===void 0?16:h1(t.type)),t):1}function vn(t,e,n,r){if(50<Go)throw Go=0,Zf=null,Error(A(185));za(t,n,r),(!(le&2)||t!==Ze)&&(t===Ze&&(!(le&2)&&(jc|=n),Qe===4&&xr(t,ut)),jt(t,r),n===1&&le===0&&!(e.mode&1)&&(Vs=je()+500,Lc&&oi()))}function jt(t,e){var n=t.callbackNode;Wk(t,e);var r=ku(t,t===Ze?ut:0);if(r===0)n!==null&&ov(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ov(n),e===1)t.tag===0?BC(Jv.bind(null,t)):P1(Jv.bind(null,t)),jC(function(){!(le&6)&&oi()}),n=null;else{switch(s1(r)){case 1:n=lm;break;case 4:n=n1;break;case 16:n=Su;break;case 536870912:n=r1;break;default:n=Su}n=RE(n,IE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function IE(t,e){if(uu=-1,cu=0,le&6)throw Error(A(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=ku(t,t===Ze?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wu(t,r);else{e=r;var i=le;le|=2;var s=TE();(Ze!==t||ut!==e)&&(Wn=null,Vs=je()+500,Ei(t,e));do try{cA();break}catch(a){xE(t,a)}while(1);Em(),Uu.current=s,le=i,We!==null?e=0:(Ze=null,ut=0,e=Qe)}if(e!==0){if(e===2&&(i=kf(t),i!==0&&(r=i,e=ep(t,i))),e===1)throw n=ya,Ei(t,0),xr(t,r),jt(t,je()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!lA(i)&&(e=Wu(t,r),e===2&&(s=kf(t),s!==0&&(r=s,e=ep(t,s))),e===1))throw n=ya,Ei(t,0),xr(t,r),jt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:hi(t,Dt,Wn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=Mm+500-je(),10<e)){if(ku(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Df(hi.bind(null,t,Dt,Wn),e);break}hi(t,Dt,Wn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aA(r/1960))-r,10<r){t.timeoutHandle=Df(hi.bind(null,t,Dt,Wn),r);break}hi(t,Dt,Wn);break;case 5:hi(t,Dt,Wn);break;default:throw Error(A(329))}}}return jt(t,je()),t.callbackNode===n?IE.bind(null,t):null}function ep(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=Wu(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&tp(e)),t}function tp(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function lA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~Lm,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Jv(t){if(le&6)throw Error(A(327));Es();var e=ku(t,0);if(!(e&1))return jt(t,je()),null;var n=Wu(t,e);if(t.tag!==0&&n===2){var r=kf(t);r!==0&&(e=r,n=ep(t,r))}if(n===1)throw n=ya,Ei(t,0),xr(t,e),jt(t,je()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Dt,Wn),jt(t,je()),null}function Vm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Vs=je()+500,Lc&&oi())}}function Pi(t){Pr!==null&&Pr.tag===0&&!(le&6)&&Es();var e=le;le|=1;var n=nn.transition,r=me;try{if(nn.transition=null,me=1,t)return t()}finally{me=r,nn.transition=n,le=e,!(le&6)&&oi()}}function $m(){Ut=ds.current,xe(ds)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$C(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bu();break;case 3:Ls(),xe(Vt),xe(St),Cm();break;case 5:km(r);break;case 4:Ls();break;case 13:xe(be);break;case 19:xe(be);break;case 10:Im(r.type._context);break;case 22:case 23:$m()}n=n.return}if(Ze=t,We=t=Ur(t.current,null),ut=Ut=e,Qe=0,ya=null,Lm=jc=Ri=0,Dt=qo=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function xE(t,e){do{var n=We;try{if(Em(),ou.current=Fu,ju){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ju=!1}if(Ai=0,Je=Ke=Ne=null,Wo=!1,pa=0,Dm.current=null,n===null||n.return===null){Qe=1,ya=e,We=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=jv(o);if(p!==null){p.flags&=-257,Fv(p,o,a,s,e),p.mode&1&&$v(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){$v(s,u,e),jm();break e}l=Error(A(426))}}else if(Pe&&a.mode&1){var w=jv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Fv(w,o,a,s,e),_m(Ms(l,a));break e}}s=l=Ms(l,a),Qe!==4&&(Qe=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=oE(s,l,e);bv(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jr===null||!jr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=aE(s,a,e);bv(s,E);break e}}s=s.return}while(s!==null)}kE(n)}catch(T){e=T,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function TE(){var t=Uu.current;return Uu.current=Fu,t===null?Fu:t}function jm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Ze===null||!(Ri&268435455)&&!(jc&268435455)||xr(Ze,ut)}function Wu(t,e){var n=le;le|=2;var r=TE();(Ze!==t||ut!==e)&&(Wn=null,Ei(t,e));do try{uA();break}catch(i){xE(t,i)}while(1);if(Em(),le=n,Uu.current=r,We!==null)throw Error(A(261));return Ze=null,ut=0,Qe}function uA(){for(;We!==null;)SE(We)}function cA(){for(;We!==null&&!Lk();)SE(We)}function SE(t){var e=AE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?kE(t):We=e,Dm.current=null}function kE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rA(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,We=null;return}}else if(n=nA(n,e,Ut),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Qe===0&&(Qe=5)}function hi(t,e,n){var r=me,i=nn.transition;try{nn.transition=null,me=1,hA(t,e,n,r)}finally{nn.transition=i,me=r}return null}function hA(t,e,n,r){do Es();while(Pr!==null);if(le&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hk(t,s),t===Ze&&(We=Ze=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,RE(Su,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=me;me=1;var a=le;le|=4,Dm.current=null,sA(t,n),wE(n,t),bC(Nf),Cu=!!bf,Nf=bf=null,t.current=n,oA(n),Mk(),le=a,me=o,nn.transition=s}else t.current=n;if(Nl&&(Nl=!1,Pr=t,Bu=i),s=t.pendingLanes,s===0&&(jr=null),jk(n.stateNode),jt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zu)throw zu=!1,t=Jf,Jf=null,t;return Bu&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===Zf?Go++:(Go=0,Zf=t):Go=0,oi(),null}function Es(){if(Pr!==null){var t=s1(Bu),e=nn.transition,n=me;try{if(nn.transition=null,me=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Bu=0,le&6)throw Error(A(331));var i=le;for(le|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Ho(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(yE(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,U=y;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(T){Me(a,a.return,T)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(le=i,oi(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{me=n,nn.transition=e}}return!1}function Zv(t,e,n){e=Ms(n,e),e=oE(t,e,1),t=$r(t,e,1),e=bt(),t!==null&&(za(t,1,e),jt(t,e))}function Me(t,e,n){if(t.tag===3)Zv(t,t,n);else for(;e!==null;){if(e.tag===3){Zv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Ms(n,t),t=aE(e,t,1),e=$r(e,t,1),t=bt(),e!==null&&(za(e,1,t),jt(e,t));break}}e=e.return}}function dA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(ut&n)===n&&(Qe===4||Qe===3&&(ut&130023424)===ut&&500>je()-Mm?Ei(t,0):Lm|=n),jt(t,e)}function CE(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var n=bt();t=rr(t,e),t!==null&&(za(t,e,n),jt(t,n))}function fA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),CE(t,n)}function pA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),CE(t,n)}var AE;AE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,tA(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,Pe&&e.flags&1048576&&b1(e,Du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;lu(t,e),t=e.pendingProps;var i=Ns(e,St.current);ws(e,n),i=Rm(null,e,r,t,i,n);var s=Pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Nu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,Uf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&ym(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gA(r),t=dn(r,t),i){case 0:e=Bf(null,e,r,t,n);break e;case 1:e=Bv(null,e,r,t,n);break e;case 11:e=Uv(null,e,r,t,n);break e;case 14:e=zv(null,e,r,dn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Bv(t,e,r,i,n);case 3:e:{if(hE(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,L1(t,e),Vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ms(Error(A(423)),e),e=Wv(t,e,r,n,i);break e}else if(r!==i){i=Ms(Error(A(424)),e),e=Wv(t,e,r,n,i);break e}else for(zt=Vr(e.stateNode.containerInfo.firstChild),Wt=e,Pe=!0,pn=null,n=j1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),r===i){e=ir(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return F1(e),t===null&&$f(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Of(r,i)?o=null:s!==null&&Of(r,s)&&(e.flags|=32),cE(t,e),At(t,e,o,n),e.child;case 6:return t===null&&$f(e),null;case 13:return dE(t,e,n);case 4:return Sm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Uv(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Lu,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Vt.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Zn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=sn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),zv(t,e,r,i,n);case 15:return lE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),lu(t,e),e.tag=1,$t(r)?(t=!0,Nu(e)):t=!1,ws(e,n),V1(e,r,i),Uf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return fE(t,e,n);case 22:return uE(t,e,n)}throw Error(A(156,e.tag))};function RE(t,e){return t1(t,e)}function mA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new mA(t,e,n,r)}function Fm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gA(t){if(typeof t=="function")return Fm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return Ii(n.children,i,s,e);case im:o=8,i|=8;break;case hf:return t=tn(12,n,e,i|2),t.elementType=hf,t.lanes=s,t;case df:return t=tn(13,n,e,i),t.elementType=df,t.lanes=s,t;case ff:return t=tn(19,n,e,i),t.elementType=ff,t.lanes=s,t;case $w:return Fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mw:o=10;break e;case Vw:o=9;break e;case sm:o=11;break e;case om:o=14;break e;case wr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=tn(22,t,r,e),t.elementType=$w,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Um(t,e,n,r,i,s,o,a,l){return t=new yA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function vA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function PE(t){if(!t)return Xr;t=t._reactInternals;e:{if(Fi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if($t(n))return R1(t,n,e)}return e}function bE(t,e,n,r,i,s,o,a,l){return t=Um(n,r,!0,t,i,s,o,a,l),t.context=PE(null),n=t.current,r=bt(),i=Fr(n),s=Zn(r,i),s.callback=e??null,$r(n,s,i),t.current.lanes=i,za(t,i,r),jt(t,r),t}function Uc(t,e,n,r){var i=e.current,s=bt(),o=Fr(i);return n=PE(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(vn(t,i,o,s),su(t,i,o)),o}function Hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function _A(){return null}var NE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}zc.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Uc(t,e,null,null)};zc.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){Uc(null,t,null,null)}),e[nr]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=l1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&c1(t)}};function Wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t0(){}function wA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Hu(o);s.call(u)}}var o=bE(e,r,t,0,null,!1,!1,"",t0);return t._reactRootContainer=o,t[nr]=o.current,ua(t.nodeType===8?t.parentNode:t),Pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Hu(l);a.call(u)}}var l=Um(t,0,!1,null,null,!1,!1,"",t0);return t._reactRootContainer=l,t[nr]=l.current,ua(t.nodeType===8?t.parentNode:t),Pi(function(){Uc(e,l,n,r)}),l}function Wc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Hu(o);a.call(l)}}Uc(e,o,t,i)}else o=wA(n,e,t,i,r);return Hu(o)}o1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(um(e,n|1),jt(e,je()),!(le&6)&&(Vs=je()+500,oi()))}break;case 13:Pi(function(){var r=rr(t,1);if(r!==null){var i=bt();vn(r,t,1,i)}}),zm(t,1)}};cm=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=bt();vn(e,t,134217728,n)}zm(t,134217728)}};a1=function(t){if(t.tag===13){var e=Fr(t),n=rr(t,e);if(n!==null){var r=bt();vn(n,t,e,r)}zm(t,e)}};l1=function(){return me};u1=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};xf=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dc(r);if(!i)throw Error(A(90));Fw(r),gf(r,i)}}}break;case"textarea":zw(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Qw=Vm;Yw=Pi;var EA={usingClientEntryPoint:!1,Events:[Wa,os,Dc,Gw,Kw,Vm]},xo={findFiberByHostInstance:pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},IA={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zw(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Pc=Ol.inject(IA),Pn=Ol}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EA;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wm(e))throw Error(A(200));return vA(t,e,null,n)};Kt.createRoot=function(t,e){if(!Wm(t))throw Error(A(299));var n=!1,r="",i=NE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Um(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,ua(t.nodeType===8?t.parentNode:t),new Bm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Zw(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Pi(t)};Kt.hydrate=function(t,e,n){if(!Bc(e))throw Error(A(200));return Wc(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Wm(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=NE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bE(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};Kt.render=function(t,e,n){if(!Bc(e))throw Error(A(200));return Wc(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(A(40));return t._reactRootContainer?(Pi(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Vm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Wc(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";function OE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OE)}catch(t){console.error(t)}}OE(),bw.exports=Kt;var DE=bw.exports,n0=DE;uf.createRoot=n0.createRoot,uf.hydrateRoot=n0.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const r0="popstate";function xA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return np("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qu(i)}return SA(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TA(){return Math.random().toString(36).substr(2,8)}function i0(t,e){return{usr:t.state,key:t.key,idx:e}}function np(t,e,n,r){return n===void 0&&(n=null),va({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?eo(e):e,{state:n,key:e&&e.key||r||TA()})}function qu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=br.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(va({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=br.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function d(w,g){a=br.Push;let f=np(_.location,w,g);n&&n(f,w),u=c()+1;let y=i0(f,u),E=_.createHref(f);try{o.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=br.Replace;let f=np(_.location,w,g);n&&n(f,w),u=c();let y=i0(f,u),E=_.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:qu(w);return Ue(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(r0,h),l=w,()=>{i.removeEventListener(r0,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return o.go(w)}};return _}var s0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(s0||(s0={}));function kA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?eo(e):e,i=qm(r.pathname||"/",n);if(i==null)return null;let s=LE(t);CA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=MA(s[a],jA(i));return o}function LE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=zr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),LE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ME(s.path))i(s,o,l)}),e}function ME(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ME(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function CA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AA=/^:\w+$/,RA=3,PA=2,bA=1,NA=10,OA=-2,o0=t=>t==="*";function DA(t,e){let n=t.split("/"),r=n.length;return n.some(o0)&&(r+=OA),e&&(r+=PA),n.filter(i=>!o0(i)).reduce((i,s)=>i+(AA.test(s)?RA:s===""?bA:NA),r)}function LA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:zr([i,c.pathname]),pathnameBase:BA(zr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=zr([i,c.pathnameBase]))}return s}function VA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$A(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=FA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jA(t){try{return decodeURI(t)}catch(e){return Hm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function FA(t,e){try{return decodeURIComponent(t)}catch(n){return Hm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function qm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function UA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?eo(t):t;return{pathname:n?n.startsWith("/")?n:zA(n,e):e,search:WA(r),hash:HA(i)}}function zA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Km(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=eo(t):(i=va({},t),Ue(!i.pathname||!i.pathname.includes("?"),kd("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),kd("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=UA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),BA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const VE=["post","put","patch","delete"];new Set(VE);const GA=["get",...VE];new Set(GA);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gu.apply(this,arguments)}const Qm=I.createContext(null),$E=I.createContext(null),Ui=I.createContext(null),Hc=I.createContext(null),fr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),jE=I.createContext(null);function KA(t,e){let{relative:n}=e===void 0?{}:e;to()||Ue(!1);let{basename:r,navigator:i}=I.useContext(Ui),{hash:s,pathname:o,search:a}=Ym(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:zr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function to(){return I.useContext(Hc)!=null}function pr(){return to()||Ue(!1),I.useContext(Hc).location}function FE(t){I.useContext(Ui).static||I.useLayoutEffect(t)}function mr(){let{isDataRoute:t}=I.useContext(fr);return t?uR():QA()}function QA(){to()||Ue(!1);let t=I.useContext(Qm),{basename:e,navigator:n}=I.useContext(Ui),{matches:r}=I.useContext(fr),{pathname:i}=pr(),s=JSON.stringify(Gm(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return FE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Km(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:zr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const YA=I.createContext(null);function XA(t){let e=I.useContext(fr).outlet;return e&&I.createElement(YA.Provider,{value:t},e)}function Ym(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(fr),{pathname:i}=pr(),s=JSON.stringify(Gm(r).map(o=>o.pathnameBase));return I.useMemo(()=>Km(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function JA(t,e){return ZA(t,e)}function ZA(t,e,n){to()||Ue(!1);let{navigator:r}=I.useContext(Ui),{matches:i}=I.useContext(fr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=pr(),u;if(e){var c;let _=typeof e=="string"?eo(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Ue(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=kA(t,{pathname:d}),v=iR(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:zr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:zr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?I.createElement(Hc.Provider,{value:{location:Gu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:br.Pop}},v):v}function eR(){let t=lR(),e=qA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const tR=I.createElement(eR,null);class nR extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(fr.Provider,{value:this.props.routeContext},I.createElement(jE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rR(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(fr.Provider,{value:e},r)}function iR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||tR);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=I.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,I.createElement(rR,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(nR,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var rp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(rp||(rp={}));var _a;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(_a||(_a={}));function sR(t){let e=I.useContext(Qm);return e||Ue(!1),e}function oR(t){let e=I.useContext($E);return e||Ue(!1),e}function aR(t){let e=I.useContext(fr);return e||Ue(!1),e}function UE(t){let e=aR(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function lR(){var t;let e=I.useContext(jE),n=oR(_a.UseRouteError),r=UE(_a.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function uR(){let{router:t}=sR(rp.UseNavigateStable),e=UE(_a.UseNavigateStable),n=I.useRef(!1);return FE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Gu({fromRouteId:e},s)))},[t,e])}function cR(t){let{to:e,replace:n,state:r,relative:i}=t;to()||Ue(!1);let{matches:s}=I.useContext(fr),{pathname:o}=pr(),a=mr(),l=Km(e,Gm(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function hR(t){return XA(t.context)}function Bn(t){Ue(!1)}function dR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1}=t;to()&&Ue(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=eo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=I.useMemo(()=>{let _=qm(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:I.createElement(Ui.Provider,{value:l},I.createElement(Hc.Provider,{children:n,value:v}))}function fR(t){let{children:e,location:n}=t;return JA(ip(e),n)}var a0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(a0||(a0={}));new Promise(()=>{});function ip(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,ip(r.props.children,s));return}r.type!==Bn&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ip(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ku(){return Ku=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ku.apply(this,arguments)}function zE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mR(t,e){return t.button===0&&(!e||e==="_self")&&!pR(t)}const gR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],yR=["aria-current","caseSensitive","className","end","style","to","children"],l0="startTransition";function vR(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=xA({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location}),l=I.useCallback(u=>{l0 in Yy?Yy[l0](()=>a(u)):a(u)},[a]);return I.useLayoutEffect(()=>s.listen(l),[s,l]),I.createElement(dR,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const _R=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ER=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=zE(e,gR),{basename:d}=I.useContext(Ui),p,v=!1;if(typeof u=="string"&&wR.test(u)&&(p=u,_R))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=qm(y.pathname,d);y.origin===f.origin&&E!=null?u=E+y.search+y.hash:v=!0}catch{}let _=KA(u,{relative:i}),w=xR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||w(f)}return I.createElement("a",Ku({},h,{href:p||_,onClick:v||s?r:g,ref:n,target:l}))}),IR=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=zE(e,yR),h=Ym(l,{relative:c.relative}),d=pr(),p=I.useContext($E),{navigator:v}=I.useContext(Ui),_=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,w=d.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),g=g?g.toLowerCase():null,_=_.toLowerCase());let f=w===_||!o&&w.startsWith(_)&&w.charAt(_.length)==="/",y=g!=null&&(g===_||!o&&g.startsWith(_)&&g.charAt(_.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:y}):T=[s,f?"active":null,y?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:f,isPending:y}):a;return I.createElement(ER,Ku({},c,{"aria-current":E,className:T,ref:n,style:S,to:l}),typeof u=="function"?u({isActive:f,isPending:y}):u)});var u0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(u0||(u0={}));var c0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(c0||(c0={}));function xR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=mr(),l=pr(),u=Ym(t,{relative:o});return I.useCallback(c=>{if(mR(c,n)){c.preventDefault();let h=r!==void 0?r:qu(l)===qu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var BE={exports:{}},WE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=I;function TR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var SR=typeof Object.is=="function"?Object.is:TR,kR=$s.useState,CR=$s.useEffect,AR=$s.useLayoutEffect,RR=$s.useDebugValue;function PR(t,e){var n=e(),r=kR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return AR(function(){i.value=n,i.getSnapshot=e,Cd(i)&&s({inst:i})},[t,n,e]),CR(function(){return Cd(i)&&s({inst:i}),t(function(){Cd(i)&&s({inst:i})})},[t]),RR(n),n}function Cd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!SR(t,n)}catch{return!0}}function bR(t,e){return e()}var NR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?bR:PR;WE.useSyncExternalStore=$s.useSyncExternalStore!==void 0?$s.useSyncExternalStore:NR;BE.exports=WE;var OR=BE.exports,HE={exports:{}},qE={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=I,DR=OR;function LR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var MR=typeof Object.is=="function"?Object.is:LR,VR=DR.useSyncExternalStore,$R=qc.useRef,jR=qc.useEffect,FR=qc.useMemo,UR=qc.useDebugValue;qE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=$R(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=FR(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return h=v}return h=p}if(v=h,MR(c,p))return v;var _=r(p);return i!==void 0&&i(v,_)?v:(c=p,h=_)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=VR(t,s[0],s[1]);return jR(function(){o.hasValue=!0,o.value=a},[a]),UR(a),a};HE.exports=qE;var zR=HE.exports;function BR(t){t()}let GE=BR;const WR=t=>GE=t,HR=()=>GE;let Ad=null;function qR(){return Ad||(Ad=I.createContext(null)),Ad}const Jr=new Proxy({},new Proxy({},{get(t,e){const n=qR();return(r,...i)=>Reflect[e](n,...i)}}));function Xm(t=Jr){return function(){return I.useContext(t)}}const KE=Xm(),GR=()=>{throw new Error("uSES not initialized!")};let QE=GR;const KR=t=>{QE=t},QR=(t,e)=>t===e;function YR(t=Jr){const e=t===Jr?KE:Xm(t);return function(r,i={}){const{equalityFn:s=QR,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();I.useRef(!0);const p=I.useCallback({[r.name](_){return r(_)}}[r.name],[r,h,o]),v=QE(u.addNestedSub,l.getState,c||l.getState,p,s);return I.useDebugValue(v),v}}const an=YR();var YE={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tt=typeof Symbol=="function"&&Symbol.for,Jm=tt?Symbol.for("react.element"):60103,Zm=tt?Symbol.for("react.portal"):60106,Gc=tt?Symbol.for("react.fragment"):60107,Kc=tt?Symbol.for("react.strict_mode"):60108,Qc=tt?Symbol.for("react.profiler"):60114,Yc=tt?Symbol.for("react.provider"):60109,Xc=tt?Symbol.for("react.context"):60110,eg=tt?Symbol.for("react.async_mode"):60111,Jc=tt?Symbol.for("react.concurrent_mode"):60111,Zc=tt?Symbol.for("react.forward_ref"):60112,eh=tt?Symbol.for("react.suspense"):60113,XR=tt?Symbol.for("react.suspense_list"):60120,th=tt?Symbol.for("react.memo"):60115,nh=tt?Symbol.for("react.lazy"):60116,JR=tt?Symbol.for("react.block"):60121,ZR=tt?Symbol.for("react.fundamental"):60117,eP=tt?Symbol.for("react.responder"):60118,tP=tt?Symbol.for("react.scope"):60119;function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Jm:switch(t=t.type,t){case eg:case Jc:case Gc:case Qc:case Kc:case eh:return t;default:switch(t=t&&t.$$typeof,t){case Xc:case Zc:case nh:case th:case Yc:return t;default:return e}}case Zm:return e}}}function XE(t){return Yt(t)===Jc}ye.AsyncMode=eg;ye.ConcurrentMode=Jc;ye.ContextConsumer=Xc;ye.ContextProvider=Yc;ye.Element=Jm;ye.ForwardRef=Zc;ye.Fragment=Gc;ye.Lazy=nh;ye.Memo=th;ye.Portal=Zm;ye.Profiler=Qc;ye.StrictMode=Kc;ye.Suspense=eh;ye.isAsyncMode=function(t){return XE(t)||Yt(t)===eg};ye.isConcurrentMode=XE;ye.isContextConsumer=function(t){return Yt(t)===Xc};ye.isContextProvider=function(t){return Yt(t)===Yc};ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jm};ye.isForwardRef=function(t){return Yt(t)===Zc};ye.isFragment=function(t){return Yt(t)===Gc};ye.isLazy=function(t){return Yt(t)===nh};ye.isMemo=function(t){return Yt(t)===th};ye.isPortal=function(t){return Yt(t)===Zm};ye.isProfiler=function(t){return Yt(t)===Qc};ye.isStrictMode=function(t){return Yt(t)===Kc};ye.isSuspense=function(t){return Yt(t)===eh};ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Gc||t===Jc||t===Qc||t===Kc||t===eh||t===XR||typeof t=="object"&&t!==null&&(t.$$typeof===nh||t.$$typeof===th||t.$$typeof===Yc||t.$$typeof===Xc||t.$$typeof===Zc||t.$$typeof===ZR||t.$$typeof===eP||t.$$typeof===tP||t.$$typeof===JR)};ye.typeOf=Yt;YE.exports=ye;var tg=YE.exports,ng=tg,nP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},JE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rg={};rg[ng.ForwardRef]=iP;rg[ng.Memo]=JE;function h0(t){return ng.isMemo(t)?JE:rg[t.$$typeof]||nP}var sP=Object.defineProperty,oP=Object.getOwnPropertyNames,d0=Object.getOwnPropertySymbols,aP=Object.getOwnPropertyDescriptor,lP=Object.getPrototypeOf,f0=Object.prototype;function ZE(t,e,n){if(typeof e!="string"){if(f0){var r=lP(e);r&&r!==f0&&ZE(t,r,n)}var i=oP(e);d0&&(i=i.concat(d0(e)));for(var s=h0(t),o=h0(e),a=0;a<i.length;++a){var l=i[a];if(!rP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=aP(e,l);try{sP(t,l,u)}catch{}}}}return t}var uP=ZE;const cP=Yp(uP);var ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=Symbol.for("react.element"),sg=Symbol.for("react.portal"),rh=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),ah=Symbol.for("react.context"),hP=Symbol.for("react.server_context"),lh=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),ch=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),dh=Symbol.for("react.lazy"),dP=Symbol.for("react.offscreen"),eI;eI=Symbol.for("react.module.reference");function ln(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ig:switch(t=t.type,t){case rh:case sh:case ih:case uh:case ch:return t;default:switch(t=t&&t.$$typeof,t){case hP:case ah:case lh:case dh:case hh:case oh:return t;default:return e}}case sg:return e}}}ve.ContextConsumer=ah;ve.ContextProvider=oh;ve.Element=ig;ve.ForwardRef=lh;ve.Fragment=rh;ve.Lazy=dh;ve.Memo=hh;ve.Portal=sg;ve.Profiler=sh;ve.StrictMode=ih;ve.Suspense=uh;ve.SuspenseList=ch;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(t){return ln(t)===ah};ve.isContextProvider=function(t){return ln(t)===oh};ve.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ig};ve.isForwardRef=function(t){return ln(t)===lh};ve.isFragment=function(t){return ln(t)===rh};ve.isLazy=function(t){return ln(t)===dh};ve.isMemo=function(t){return ln(t)===hh};ve.isPortal=function(t){return ln(t)===sg};ve.isProfiler=function(t){return ln(t)===sh};ve.isStrictMode=function(t){return ln(t)===ih};ve.isSuspense=function(t){return ln(t)===uh};ve.isSuspenseList=function(t){return ln(t)===ch};ve.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rh||t===sh||t===ih||t===uh||t===ch||t===dP||typeof t=="object"&&t!==null&&(t.$$typeof===dh||t.$$typeof===hh||t.$$typeof===oh||t.$$typeof===ah||t.$$typeof===lh||t.$$typeof===eI||t.getModuleId!==void 0)};ve.typeOf=ln;function fP(){const t=HR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const p0={notify(){},get:()=>[]};function pP(t,e){let n,r=p0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=fP())}function u(){n&&(n(),n=void 0,r.clear(),r=p0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const mP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gP=mP?I.useLayoutEffect:I.useEffect;function yP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=I.useMemo(()=>{const u=pP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=I.useMemo(()=>t.getState(),[t]);gP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Jr;return Pt.createElement(l.Provider,{value:o},n)}function tI(t=Jr){const e=t===Jr?KE:Xm(t);return function(){const{store:r}=e();return r}}const vP=tI();function _P(t=Jr){const e=t===Jr?vP:tI(t);return function(){return e().dispatch}}const zi=_P();KR(zR.useSyncExternalStoreWithSelector);WR(DE.unstable_batchedUpdates);const un=t=>t.auth;function wP(t){function e(L,$,j,Q,x){for(var re=0,D=0,Ae=0,ue=0,de,te,Ge=0,O=0,G,Le=G=de=0,oe=0,it=0,fo=0,st=0,gl=j.length,po=gl-1,cn,Z="",$e="",Jh="",Zh="",yr;oe<gl;){if(te=j.charCodeAt(oe),oe===po&&D+ue+Ae+re!==0&&(D!==0&&(te=D===47?10:47),ue=Ae=re=0,gl++,po++),D+ue+Ae+re===0){if(oe===po&&(0<it&&(Z=Z.replace(d,"")),0<Z.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:Z+=j.charAt(oe)}te=59}switch(te){case 123:for(Z=Z.trim(),de=Z.charCodeAt(0),G=1,st=++oe;oe<gl;){switch(te=j.charCodeAt(oe)){case 123:G++;break;case 125:G--;break;case 47:switch(te=j.charCodeAt(oe+1)){case 42:case 47:e:{for(Le=oe+1;Le<po;++Le)switch(j.charCodeAt(Le)){case 47:if(te===42&&j.charCodeAt(Le-1)===42&&oe+2!==Le){oe=Le+1;break e}break;case 10:if(te===47){oe=Le+1;break e}}oe=Le}}break;case 91:te++;case 40:te++;case 34:case 39:for(;oe++<po&&j.charCodeAt(oe)!==te;);}if(G===0)break;oe++}switch(G=j.substring(st,oe),de===0&&(de=(Z=Z.replace(h,"").trim()).charCodeAt(0)),de){case 64:switch(0<it&&(Z=Z.replace(d,"")),te=Z.charCodeAt(1),te){case 100:case 109:case 115:case 45:it=$;break;default:it=Xt}if(G=e($,it,G,te,x+1),st=G.length,0<N&&(it=n(Xt,Z,fo),yr=a(3,G,it,$,Se,he,st,te,x,Q),Z=it.join(""),yr!==void 0&&(st=(G=yr.trim()).length)===0&&(te=0,G="")),0<st)switch(te){case 115:Z=Z.replace(S,o);case 100:case 109:case 45:G=Z+"{"+G+"}";break;case 107:Z=Z.replace(f,"$1 $2"),G=Z+"{"+G+"}",G=Ce===1||Ce===2&&s("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=Z+G,Q===112&&(G=($e+=G,""))}else G="";break;default:G=e($,n($,Z,fo),G,Q,x+1)}Jh+=G,G=fo=it=Le=de=0,Z="",te=j.charCodeAt(++oe);break;case 125:case 59:if(Z=(0<it?Z.replace(d,""):Z).trim(),1<(st=Z.length))switch(Le===0&&(de=Z.charCodeAt(0),de===45||96<de&&123>de)&&(st=(Z=Z.replace(" ",":")).length),0<N&&(yr=a(1,Z,$,L,Se,he,$e.length,Q,x,Q))!==void 0&&(st=(Z=yr.trim()).length)===0&&(Z="\0\0"),de=Z.charCodeAt(0),te=Z.charCodeAt(1),de){case 0:break;case 64:if(te===105||te===99){Zh+=Z+j.charAt(oe);break}default:Z.charCodeAt(st-1)!==58&&($e+=i(Z,de,te,Z.charCodeAt(2)))}fo=it=Le=de=0,Z="",te=j.charCodeAt(++oe)}}switch(te){case 13:case 10:D===47?D=0:1+de===0&&Q!==107&&0<Z.length&&(it=1,Z+="\0"),0<N*K&&a(0,Z,$,L,Se,he,$e.length,Q,x,Q),he=1,Se++;break;case 59:case 125:if(D+ue+Ae+re===0){he++;break}default:switch(he++,cn=j.charAt(oe),te){case 9:case 32:if(ue+re+D===0)switch(Ge){case 44:case 58:case 9:case 32:cn="";break;default:te!==32&&(cn=" ")}break;case 0:cn="\\0";break;case 12:cn="\\f";break;case 11:cn="\\v";break;case 38:ue+D+re===0&&(it=fo=1,cn="\f"+cn);break;case 108:if(ue+D+re+ke===0&&0<Le)switch(oe-Le){case 2:Ge===112&&j.charCodeAt(oe-3)===58&&(ke=Ge);case 8:O===111&&(ke=O)}break;case 58:ue+D+re===0&&(Le=oe);break;case 44:D+Ae+ue+re===0&&(it=1,cn+="\r");break;case 34:case 39:D===0&&(ue=ue===te?0:ue===0?te:ue);break;case 91:ue+D+Ae===0&&re++;break;case 93:ue+D+Ae===0&&re--;break;case 41:ue+D+re===0&&Ae--;break;case 40:if(ue+D+re===0){if(de===0)switch(2*Ge+3*O){case 533:break;default:de=1}Ae++}break;case 64:D+Ae+ue+re+Le+G===0&&(G=1);break;case 42:case 47:if(!(0<ue+re+Ae))switch(D){case 0:switch(2*te+3*j.charCodeAt(oe+1)){case 235:D=47;break;case 220:st=oe,D=42}break;case 42:te===47&&Ge===42&&st+2!==oe&&(j.charCodeAt(st+2)===33&&($e+=j.substring(st,oe+1)),cn="",D=0)}}D===0&&(Z+=cn)}O=Ge,Ge=te,oe++}if(st=$e.length,0<st){if(it=$,0<N&&(yr=a(2,$e,it,L,Se,he,st,Q,x,Q),yr!==void 0&&($e=yr).length===0))return Zh+$e+Jh;if($e=it.join(",")+"{"+$e+"}",Ce*ke!==0){switch(Ce!==2||s($e,2)||(ke=0),ke){case 111:$e=$e.replace(E,":-moz-$1")+$e;break;case 112:$e=$e.replace(y,"::-webkit-input-$1")+$e.replace(y,"::-moz-$1")+$e.replace(y,":-ms-input-$1")+$e}ke=0}}return Zh+$e+Jh}function n(L,$,j){var Q=$.trim().split(w);$=Q;var x=Q.length,re=L.length;switch(re){case 0:case 1:var D=0;for(L=re===0?"":L[0]+" ";D<x;++D)$[D]=r(L,$[D],j).trim();break;default:var Ae=D=0;for($=[];D<x;++D)for(var ue=0;ue<re;++ue)$[Ae++]=r(L[ue]+" ",Q[D],j).trim()}return $}function r(L,$,j){var Q=$.charCodeAt(0);switch(33>Q&&(Q=($=$.trim()).charCodeAt(0)),Q){case 38:return $.replace(g,"$1"+L.trim());case 58:return L.trim()+$.replace(g,"$1"+L.trim());default:if(0<1*j&&0<$.indexOf("\f"))return $.replace(g,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+$}function i(L,$,j,Q){var x=L+";",re=2*$+3*j+4*Q;if(re===944){L=x.indexOf(":",9)+1;var D=x.substring(L,x.length-1).trim();return D=x.substring(0,L).trim()+D+";",Ce===1||Ce===2&&s(D,1)?"-webkit-"+D+D:D}if(Ce===0||Ce===2&&!s(x,1))return x;switch(re){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(z,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return D=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+x+"-ms-flex-pack"+D+x;case 1005:return v.test(x)?x.replace(p,":-webkit-")+x.replace(p,":-moz-")+x:x;case 1e3:switch(D=x.substring(13).trim(),$=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt($)){case 226:D=x.replace(T,"tb");break;case 232:D=x.replace(T,"tb-rl");break;case 220:D=x.replace(T,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+D+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch($=(x=L).length-10,D=(x.charCodeAt($)===33?x.substring(0,$):x).substring(L.indexOf(":",7)+1).trim(),re=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:x=x.replace(D,"-webkit-"+D)+";"+x;break;case 207:case 102:x=x.replace(D,"-webkit-"+(102<re?"inline-":"")+"box")+";"+x.replace(D,"-webkit-"+D)+";"+x.replace(D,"-ms-"+D+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return D=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+D+"-ms-flex-"+D+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(P,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(P,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(V.test(L)===!0)return(D=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),$,j,Q).replace(":fill-available",":stretch"):x.replace(D,"-webkit-"+D)+x.replace(D,"-moz-"+D.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,j+Q===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+x}return x}function s(L,$){var j=L.indexOf($===1?":":"{"),Q=L.substring(0,$!==3?j:10);return j=L.substring(j+1,L.length-1),W($!==2?Q:Q.replace(q,"$1"),j,$)}function o(L,$){var j=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return j!==$+";"?j.replace(b," or ($1)").substring(4):"("+$+")"}function a(L,$,j,Q,x,re,D,Ae,ue,de){for(var te=0,Ge=$,O;te<N;++te)switch(O=rt[te].call(c,L,Ge,j,Q,x,re,D,Ae,ue,de)){case void 0:case!1:case!0:case null:break;default:Ge=O}if(Ge!==$)return Ge}function l(L){switch(L){case void 0:case null:N=rt.length=0;break;default:if(typeof L=="function")rt[N++]=L;else if(typeof L=="object")for(var $=0,j=L.length;$<j;++$)l(L[$]);else K=!!L|0}return l}function u(L){return L=L.prefix,L!==void 0&&(W=null,L?typeof L!="function"?Ce=1:(Ce=2,W=L):Ce=0),u}function c(L,$){var j=L;if(33>j.charCodeAt(0)&&(j=j.trim()),pe=j,j=[pe],0<N){var Q=a(-1,$,j,j,Se,he,0,0,0,0);Q!==void 0&&typeof Q=="string"&&($=Q)}var x=e(Xt,j,$,0,0);return 0<N&&(Q=a(-2,x,j,j,Se,he,x.length,0,0,0),Q!==void 0&&(x=Q)),pe="",ke=0,he=Se=1,x}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,v=/zoo|gra/,_=/([,: ])(transform)/g,w=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,P=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,he=1,Se=1,ke=0,Ce=1,Xt=[],rt=[],N=0,W=null,K=0,pe="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var EP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function IP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var xP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,m0=IP(function(t){return xP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Qn(){return(Qn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var g0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},sp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!tg.typeOf(t)},Qu=Object.freeze([]),Br=Object.freeze({});function wa(t){return typeof t=="function"}function y0(t){return t.displayName||t.name||"Component"}function og(t){return t&&typeof t.styledComponentId=="string"}var js=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ag=typeof window<"u"&&"HTMLElement"in window,TP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function qa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var SP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&qa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),du=new Map,Yu=new Map,Ko=1,Dl=function(t){if(du.has(t))return du.get(t);for(;Yu.has(Ko);)Ko++;var e=Ko++;return du.set(t,e),Yu.set(e,t),e},kP=function(t){return Yu.get(t)},CP=function(t,e){e>=Ko&&(Ko=e+1),du.set(t,e),Yu.set(e,t)},AP="style["+js+'][data-styled-version="5.3.11"]',RP=new RegExp("^"+js+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),PP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},bP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(RP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(CP(u,l),PP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},NP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},nI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(js))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(js,"active"),r.setAttribute("data-styled-version","5.3.11");var o=NP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},OP=function(){function t(n){var r=this.element=nI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}qa(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),DP=function(){function t(n){var r=this.element=nI(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),LP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),v0=ag,MP={isServer:!ag,useCSSOMInjection:!TP},rI=function(){function t(n,r,i){n===void 0&&(n=Br),r===void 0&&(r={}),this.options=Qn({},MP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ag&&v0&&(v0=!1,function(s){for(var o=document.querySelectorAll(AP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(js)!=="active"&&(bP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Dl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Qn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new LP(o):s?new OP(o):new DP(o),new SP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Dl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Dl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Dl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=kP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=js+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),VP=/(a)(d)/gi,_0=function(t){return String.fromCharCode(t+(t>25?39:97))};function op(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=_0(e%52)+n;return(_0(e%52)+n).replace(VP,"$1-$2")}var fs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},iI=function(t){return fs(5381,t)};function $P(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(wa(n)&&!og(n))return!1}return!0}var jP=iI("5.3.11"),FP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$P(e),this.componentId=n,this.baseHash=fs(jP,n),this.baseStyle=r,rI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Fs(this.rules,e,n,r).join(""),a=op(fs(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=fs(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var v=Fs(p,e,n,r),_=Array.isArray(v)?v.join(""):v;c=fs(c,_+d),h+=_}}if(h){var w=op(c>>>0);if(!n.hasNameForId(i,w)){var g=r(h,"."+w,void 0,i);n.insertRules(i,w,g)}s.push(w)}}return s.join(" ")},t}(),UP=/^\s*\/\/.*$/gm,zP=[":","[",".","#"];function BP(t){var e,n,r,i,s=t===void 0?Br:t,o=s.options,a=o===void 0?Br:o,l=s.plugins,u=l===void 0?Qu:l,c=new wP(a),h=[],d=function(_){function w(g){if(g)try{_(g+"}")}catch{}}return function(g,f,y,E,T,S,b,P,q,V){switch(g){case 1:if(q===0&&f.charCodeAt(0)===64)return _(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return _(y[0]+f),"";default:return f+(V===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(_){h.push(_)}),p=function(_,w,g){return w===0&&zP.indexOf(g[n.length])!==-1||g.match(i)?_:"."+e};function v(_,w,g,f){f===void 0&&(f="&");var y=_.replace(UP,""),E=w&&g?g+" "+w+" { "+y+" }":y;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!w?"":w,E)}return c.use([].concat(u,[function(_,w,g){_===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,p))},d,function(_){if(_===-2){var w=h;return h=[],w}}])),v.hash=u.length?u.reduce(function(_,w){return w.name||qa(15),fs(_,w.name)},5381).toString():"",v}var sI=Pt.createContext();sI.Consumer;var oI=Pt.createContext(),WP=(oI.Consumer,new rI),ap=BP();function HP(){return I.useContext(sI)||WP}function qP(){return I.useContext(oI)||ap}var GP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ap);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return qa(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=ap),this.name+e.hash},t}(),KP=/([A-Z])/,QP=/([A-Z])/g,YP=/^ms-/,XP=function(t){return"-"+t.toLowerCase()};function w0(t){return KP.test(t)?t.replace(QP,XP).replace(YP,"-ms-"):t}var E0=function(t){return t==null||t===!1||t===""};function Fs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Fs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(E0(t))return"";if(og(t))return"."+t.styledComponentId;if(wa(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Fs(l,e,n,r)}var u;return t instanceof GP?n?(t.inject(n,r),t.getName(r)):t:sp(t)?function c(h,d){var p,v,_=[];for(var w in h)h.hasOwnProperty(w)&&!E0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||wa(h[w])?_.push(w0(w)+":",h[w],";"):sp(h[w])?_.push.apply(_,c(h[w],w)):_.push(w0(w)+": "+(p=w,(v=h[w])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||p in EP||p.startsWith("--")?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var I0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function JP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return wa(t)||sp(t)?I0(Fs(g0(Qu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:I0(Fs(g0(t,n)))}var ZP=function(t,e,n){return n===void 0&&(n=Br),t.theme!==n.theme&&t.theme||e||n.theme},e2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,t2=/(^-|-$)/g;function Rd(t){return t.replace(e2,"-").replace(t2,"")}var n2=function(t){return op(iI(t)>>>0)};function Ll(t){return typeof t=="string"&&!0}var lp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},r2=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function i2(t,e,n){var r=t[n];lp(e)&&lp(r)?aI(r,e):t[n]=e}function aI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(lp(o))for(var a in o)r2(a)&&i2(t,o[a],a)}return t}var lI=Pt.createContext();lI.Consumer;var Pd={};function uI(t,e,n){var r=og(t),i=!Ll(t),s=e.attrs,o=s===void 0?Qu:s,a=e.componentId,l=a===void 0?function(f,y){var E=typeof f!="string"?"sc":Rd(f);Pd[E]=(Pd[E]||0)+1;var T=E+"-"+n2("5.3.11"+E+Pd[E]);return y?y+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ll(f)?"styled."+f:"Styled("+y0(f)+")"}(t):u,h=e.displayName&&e.componentId?Rd(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,E){return t.shouldForwardProp(f,y,E)&&e.shouldForwardProp(f,y,E)}:t.shouldForwardProp);var v,_=new FP(n,h,r?t.componentStyle:void 0),w=_.isStatic&&o.length===0,g=function(f,y){return function(E,T,S,b){var P=E.attrs,q=E.componentStyle,V=E.defaultProps,z=E.foldedComponentIds,he=E.shouldForwardProp,Se=E.styledComponentId,ke=E.target,Ce=function(Q,x,re){Q===void 0&&(Q=Br);var D=Qn({},x,{theme:Q}),Ae={};return re.forEach(function(ue){var de,te,Ge,O=ue;for(de in wa(O)&&(O=O(D)),O)D[de]=Ae[de]=de==="className"?(te=Ae[de],Ge=O[de],te&&Ge?te+" "+Ge:te||Ge):O[de]}),[D,Ae]}(ZP(T,I.useContext(lI),V)||Br,T,P),Xt=Ce[0],rt=Ce[1],N=function(Q,x,re,D){var Ae=HP(),ue=qP(),de=x?Q.generateAndInjectStyles(Br,Ae,ue):Q.generateAndInjectStyles(re,Ae,ue);return de}(q,b,Xt),W=S,K=rt.$as||T.$as||rt.as||T.as||ke,pe=Ll(K),L=rt!==T?Qn({},T,{},rt):T,$={};for(var j in L)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?$.as=L[j]:(he?he(j,m0,K):!pe||m0(j))&&($[j]=L[j]));return T.style&&rt.style!==T.style&&($.style=Qn({},T.style,{},rt.style)),$.className=Array.prototype.concat(z,Se,N!==Se?N:null,T.className,rt.className).filter(Boolean).join(" "),$.ref=W,I.createElement(K,$)}(v,f,y,w)};return g.displayName=c,(v=Pt.forwardRef(g)).attrs=d,v.componentStyle=_,v.displayName=c,v.shouldForwardProp=p,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Qu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var y=e.componentId,E=function(S,b){if(S==null)return{};var P,q,V={},z=Object.keys(S);for(q=0;q<z.length;q++)P=z[q],b.indexOf(P)>=0||(V[P]=S[P]);return V}(e,["componentId"]),T=y&&y+"-"+(Ll(f)?f:Rd(y0(f)));return uI(f,Qn({},E,{attrs:d,componentId:T}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?aI({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&cP(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var up=function(t){return function e(n,r,i){if(i===void 0&&(i=Br),!tg.isValidElementType(r))return qa(1,String(r));var s=function(){return n(r,i,JP.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Qn({},i,{},o))},s.attrs=function(o){return e(n,r,Qn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(uI,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){up[t]=up(t)});const C=up;var cI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x0=Pt.createContext&&Pt.createContext(cI),Wr=globalThis&&globalThis.__assign||function(){return Wr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Wr.apply(this,arguments)},s2=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function hI(t){return t&&t.map(function(e,n){return Pt.createElement(e.tag,Wr({key:n},e.attr),hI(e.child))})}function gr(t){return function(e){return Pt.createElement(o2,Wr({attr:Wr({},t.attr)},e),hI(t.child))}}function o2(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=s2(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Pt.createElement("svg",Wr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Wr(Wr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Pt.createElement("title",null,s),t.children)};return x0!==void 0?Pt.createElement(x0.Consumer,null,function(n){return e(n)}):e(cI)}function a2(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const l2=C.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,u2=C.div`
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
`,c2=C(a2)`
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
`,h2=C.div`
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
`,d2=C.div`
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
`,f2=C.div`
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
`,p2=()=>{const t=mr();return m.jsx(f2,{onClick:()=>{t("/")}})},m2=C.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,T0=C(IR)`
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
`,g2=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],y2=()=>{const t=an(un);return m.jsxs(m2,{children:[g2.map((e,n)=>m.jsx(T0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&m.jsx(T0,{to:"/admin",children:"Адмін"},"admin")]})},bd=C.p`
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

    font-size: 38px;`,v2=C.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,_2=C.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,w2=C.div`
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
`,E2=C.div`
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
`,I2=C.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,Ml=C.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Vl=C.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,x2=C.div`
  display: flex;
  flex-direction: column;
`,$l=C.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,T2=C.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,S0=C.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,S2=C.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,k2=C.div`
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
`,jl=C.div`
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
`,Yi=C.h3`
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
`,Tn=C.input`
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
`,Fl=C.button`
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
`,zn=C.div`
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
`,C2=C.div`
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
`,A2=C.ul`
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
`,R2=C.li`
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
 */const dI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},P2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new b2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class b2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N2=function(t){const e=dI(t);return fI.encodeByteArray(e,!0)},Xu=function(t){return N2(t).replace(/\./g,"")},pI=function(t){try{return fI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function O2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const D2=()=>O2().__FIREBASE_DEFAULTS__,L2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},M2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pI(t[1]);return e&&JSON.parse(e)},lg=()=>{try{return D2()||L2()||M2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mI=t=>{var e,n;return(n=(e=lg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gI=t=>{const e=mI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yI=()=>{var t;return(t=lg())===null||t===void 0?void 0:t.config},vI=t=>{var e;return(e=lg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class V2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xu(JSON.stringify(n)),Xu(JSON.stringify(o)),a].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function j2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U2(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z2(){try{return typeof indexedDB=="object"}catch{return!1}}function B2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const W2="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W2,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?H2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,r)}}function H2(t,e){return t.replace(q2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const q2=/\{\$([^}]+)}/g;function G2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ju(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(k0(s)&&k0(o)){if(!Ju(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function K2(t,e){const n=new Q2(t,e);return n.subscribe.bind(n)}class Q2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nd),i.error===void 0&&(i.error=Nd),i.complete===void 0&&(i.complete=Nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nd(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const di="[DEFAULT]";/**
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
 */class X2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new V2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z2(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J2(t){return t===di?void 0:t}function Z2(t){return t.instantiationMode==="EAGER"}/**
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
 */class eb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const tb={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},nb=ce.INFO,rb={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ib=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ug{constructor(e){this.name=e,this._logLevel=nb,this._logHandler=ib,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const sb=(t,e)=>e.some(n=>t instanceof n);let C0,A0;function ob(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ab(){return A0||(A0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wI=new WeakMap,cp=new WeakMap,EI=new WeakMap,Od=new WeakMap,cg=new WeakMap;function lb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wI.set(n,t)}).catch(()=>{}),cg.set(e,t),e}function ub(t){if(cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let hp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||EI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cb(t){hp=t(hp)}function hb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dd(this),e,...n);return EI.set(r,e.sort?e.sort():[e]),Hr(r)}:ab().includes(t)?function(...e){return t.apply(Dd(this),e),Hr(wI.get(this))}:function(...e){return Hr(t.apply(Dd(this),e))}}function db(t){return typeof t=="function"?hb(t):(t instanceof IDBTransaction&&ub(t),sb(t,ob())?new Proxy(t,hp):t)}function Hr(t){if(t instanceof IDBRequest)return lb(t);if(Od.has(t))return Od.get(t);const e=db(t);return e!==t&&(Od.set(t,e),cg.set(e,t)),e}const Dd=t=>cg.get(t);function fb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pb=["get","getKey","getAll","getAllKeys","count"],mb=["put","add","delete","clear"],Ld=new Map;function R0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ld.get(e))return Ld.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ld.set(e,s),s}cb(t=>({...t,get:(e,n,r)=>R0(e,n)||t.get(e,n,r),has:(e,n)=>!!R0(e,n)||t.has(e,n)}));/**
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
 */class gb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dp="@firebase/app",P0="0.9.15";/**
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
 */const bi=new ug("@firebase/app"),vb="@firebase/app-compat",_b="@firebase/analytics-compat",wb="@firebase/analytics",Eb="@firebase/app-check-compat",Ib="@firebase/app-check",xb="@firebase/auth",Tb="@firebase/auth-compat",Sb="@firebase/database",kb="@firebase/database-compat",Cb="@firebase/functions",Ab="@firebase/functions-compat",Rb="@firebase/installations",Pb="@firebase/installations-compat",bb="@firebase/messaging",Nb="@firebase/messaging-compat",Ob="@firebase/performance",Db="@firebase/performance-compat",Lb="@firebase/remote-config",Mb="@firebase/remote-config-compat",Vb="@firebase/storage",$b="@firebase/storage-compat",jb="@firebase/firestore",Fb="@firebase/firestore-compat",Ub="firebase",zb="10.1.0";/**
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
 */const fp="[DEFAULT]",Bb={[dp]:"fire-core",[vb]:"fire-core-compat",[wb]:"fire-analytics",[_b]:"fire-analytics-compat",[Ib]:"fire-app-check",[Eb]:"fire-app-check-compat",[xb]:"fire-auth",[Tb]:"fire-auth-compat",[Sb]:"fire-rtdb",[kb]:"fire-rtdb-compat",[Cb]:"fire-fn",[Ab]:"fire-fn-compat",[Rb]:"fire-iid",[Pb]:"fire-iid-compat",[bb]:"fire-fcm",[Nb]:"fire-fcm-compat",[Ob]:"fire-perf",[Db]:"fire-perf-compat",[Lb]:"fire-rc",[Mb]:"fire-rc-compat",[Vb]:"fire-gcs",[$b]:"fire-gcs-compat",[jb]:"fire-fst",[Fb]:"fire-fst-compat","fire-js":"fire-js",[Ub]:"fire-js-all"};/**
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
 */const Zu=new Map,pp=new Map;function Wb(t,e){try{t.container.addComponent(e)}catch(n){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ni(t){const e=t.name;if(pp.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;pp.set(e,t);for(const n of Zu.values())Wb(n,t);return!0}function fh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qr=new Ga("app","Firebase",Hb);/**
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
 */class qb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=zb;function II(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=yI()),!n)throw qr.create("no-options");const s=Zu.get(i);if(s){if(Ju(n,s.options)&&Ju(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new eb(i);for(const l of pp.values())o.addComponent(l);const a=new qb(n,r,o);return Zu.set(i,a),a}function hg(t=fp){const e=Zu.get(t);if(!e&&t===fp&&yI())return II();if(!e)throw qr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=Bb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(a.join(" "));return}Ni(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gb="firebase-heartbeat-database",Kb=1,Ea="firebase-heartbeat-store";let Md=null;function xI(){return Md||(Md=fb(Gb,Kb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ea)}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Md}async function Qb(t){try{return await(await xI()).transaction(Ea).objectStore(Ea).get(TI(t))}catch(e){if(e instanceof jn)bi.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(n.message)}}}async function b0(t,e){try{const r=(await xI()).transaction(Ea,"readwrite");await r.objectStore(Ea).put(e,TI(t)),await r.done}catch(n){if(n instanceof jn)bi.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bi.warn(r.message)}}}function TI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yb=1024,Xb=30*24*60*60*1e3;class Jb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=N0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Xb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=N0(),{heartbeatsToSend:n,unsentEntries:r}=Zb(this._heartbeatsCache.heartbeats),i=Xu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function N0(){return new Date().toISOString().substring(0,10)}function Zb(t,e=Yb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),O0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),O0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z2()?B2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function O0(t){return Xu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tN(t){Ni(new Zr("platform-logger",e=>new gb(e),"PRIVATE")),Ni(new Zr("heartbeat",e=>new Jb(e),"PRIVATE")),Nn(dp,P0,t),Nn(dp,P0,"esm2017"),Nn("fire-js","")}tN("");function dg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function SI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nN=SI,kI=new Ga("auth","Firebase",SI());/**
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
 */const ec=new ug("@firebase/auth");function rN(t,...e){ec.logLevel<=ce.WARN&&ec.warn(`Auth (${Bi}): ${t}`,...e)}function fu(t,...e){ec.logLevel<=ce.ERROR&&ec.error(`Auth (${Bi}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw fg(t,...e)}function On(t,...e){return fg(t,...e)}function iN(t,e,n){const r=Object.assign(Object.assign({},nN()),{[e]:n});return new Ga("auth","Firebase",r).create(e,{appName:t.name})}function fg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kI.create(t,...e)}function Y(t,e,...n){if(!t)throw fg(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fu(e),new Error(e)}function sr(t,e){t||Yn(e)}/**
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
 */function mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sN(){return D0()==="http:"||D0()==="https:"}function D0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sN()||j2()||"connection"in navigator)?navigator.onLine:!0}function aN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=$2()||F2()}get(){return oN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pg(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const lN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uN=new Qa(3e4,6e4);function no(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wi(t,e,n,r,i={}){return AI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ka(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),CI.fetch()(RI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function AI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lN),e);try{const i=new cN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ul(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ul(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iN(t,c,u);wn(t,c)}}catch(i){if(i instanceof jn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Ya(t,e,n,r,i={}){const s=await Wi(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pg(t.config,i):`${t.config.apiScheme}://${i}`}class cN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),uN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function hN(t,e){return Wi(t,"POST","/v1/accounts:delete",e)}async function dN(t,e){return Wi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=mg(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qo(Vd(i.auth_time)),issuedAtTime:Qo(Vd(i.iat)),expirationTime:Qo(Vd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vd(t){return Number(t)*1e3}function mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const i=pI(n);return i?JSON.parse(i):(fu("Failed to decode base64 JWT payload"),null)}catch(i){return fu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pN(t){const e=mg(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&mN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class PI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Us(t,dN(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_N(s.providerUserInfo):[],a=vN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yN(t){const e=qe(t);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _N(t){return t.map(e=>{var{providerId:n}=e,r=dg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wN(t,e){const n=await AI(t,{},async()=>{const r=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ia;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ia,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function _r(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fN(this,e)}reload(){return yN(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Us(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:S,stsTokenManager:b}=n;Y(y&&b,e,"internal-error");const P=Ia.fromJSON(this.name,b);Y(typeof y=="string",e,"internal-error"),_r(h,e.name),_r(d,e.name),Y(typeof E=="boolean",e,"internal-error"),Y(typeof T=="boolean",e,"internal-error"),_r(p,e.name),_r(v,e.name),_r(_,e.name),_r(w,e.name),_r(g,e.name),_r(f,e.name);const q=new xi({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:P,createdAt:g,lastLoginAt:f});return S&&Array.isArray(S)&&(q.providerData=S.map(V=>Object.assign({},V))),w&&(q._redirectEventId=w),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ia;i.updateFromServerResponse(n);const s=new xi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tc(s),s}}/**
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
 */const L0=new Map;function Xn(t){sr(t instanceof Function,"Expected a class definition");let e=L0.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,L0.set(t,e),e)}/**
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
 */class bI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bI.type="NONE";const M0=bI;/**
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
 */function pu(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Xn(M0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xn(M0);const o=pu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=xi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Is(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Is(s,e,r))}}/**
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
 */function V0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(MI(e))return"Blackberry";if(VI(e))return"Webos";if(gg(e))return"Safari";if((e.includes("chrome/")||OI(e))&&!e.includes("edge/"))return"Chrome";if(LI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NI(t=kt()){return/firefox\//i.test(t)}function gg(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OI(t=kt()){return/crios\//i.test(t)}function DI(t=kt()){return/iemobile/i.test(t)}function LI(t=kt()){return/android/i.test(t)}function MI(t=kt()){return/blackberry/i.test(t)}function VI(t=kt()){return/webos/i.test(t)}function ph(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EN(t=kt()){var e;return ph(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IN(){return U2()&&document.documentMode===10}function $I(t=kt()){return ph(t)||LI(t)||VI(t)||MI(t)||/windows phone/i.test(t)||DI(t)}function xN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jI(t,e=[]){let n;switch(t){case"Browser":n=V0(kt());break;case"Worker":n=`${V0(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}async function FI(t,e){return Wi(t,"GET","/v2/recaptchaConfig",no(t,e))}function $0(t){return t!==void 0&&t.enterprise!==void 0}class UI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function TN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TN().appendChild(r)})}function SN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kN="https://www.google.com/recaptcha/enterprise.js?render=",CN="recaptcha-enterprise",AN="NO_RECAPTCHA";class BI{constructor(e){this.type=CN,this.auth=ro(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{FI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new UI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(AN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}zI(kN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function nc(t,e,n,r=!1){const i=new BI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class RN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class PN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j0(this),this.idTokenSubscription=new j0(this),this.beforeStateQueue=new RN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}async initializeRecaptchaConfig(){const e=await FI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new UI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new BI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ro(t){return qe(t)}class j0{constructor(e){this.auth=e,this.observer=null,this.addObserver=K2(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function bN(t,e){const n=fh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ju(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function NN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ON(t,e,n){const r=ro(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=WI(e),{host:o,port:a}=DN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LN()}function WI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DN(t){const e=WI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:F0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:F0(o)}}}function F0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function MN(t,e){return Wi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $d(t,e){return Ya(t,"POST","/v1/accounts:signInWithPassword",no(t,e))}/**
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
 */async function VN(t,e){return Ya(t,"POST","/v1/accounts:signInWithEmailLink",no(t,e))}async function $N(t,e){return Ya(t,"POST","/v1/accounts:signInWithEmailLink",no(t,e))}/**
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
 */class xa extends yg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await nc(e,r,"signInWithPassword");return $d(e,i)}else return $d(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await nc(e,r,"signInWithPassword");return $d(e,s)}else return Promise.reject(i)});case"emailLink":return VN(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return MN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $N(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return Ya(t,"POST","/v1/accounts:signInWithIdp",no(t,e))}/**
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
 */const jN="http://localhost";class Oi extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:jN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ka(n)}return e}}/**
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
 */function FN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UN(t){const e=bo(No(t)).link,n=e?bo(No(e)).deep_link_id:null,r=bo(No(t)).deep_link_id;return(r?bo(No(r)).link:null)||r||n||e||t}class vg{constructor(e){var n,r,i,s,o,a;const l=bo(No(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=FN((i=l.mode)!==null&&i!==void 0?i:null);Y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UN(e);try{return new vg(n)}catch{return null}}}/**
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
 */class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(e,n){return xa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vg.parseLink(n);return Y(r,"argument-error"),xa._fromEmailAndCode(e,r.code,r.tenantId)}}io.PROVIDER_ID="password";io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class HI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xa extends HI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends Xa{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class Sr extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
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
 */class kr extends Xa{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Cr extends Xa{constructor(){super("twitter.com")}static credential(e,n){return Oi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function jd(t,e){return Ya(t,"POST","/v1/accounts:signUp",no(t,e))}/**
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
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xi._fromIdTokenResponse(e,r,i),o=U0(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=U0(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function U0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rc extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rc(e,n,r,i)}}function qI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rc._fromErrorAndOperation(t,s,e,r):s})}async function zN(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
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
 */async function BN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Us(t,qI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=mg(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
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
 */async function GI(t,e,n=!1){const r="signIn",i=await qI(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function WN(t,e){return GI(ro(t),e)}async function HN(t,e,n){var r;const i=ro(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await nc(i,s,"signUpPassword");o=jd(i,u)}else o=jd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await nc(i,s,"signUpPassword");return jd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Di._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function qN(t,e,n){return WN(qe(t),io.credential(e,n))}/**
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
 */async function GN(t,e){return Wi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function KN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(r,GN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function QN(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function YN(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function XN(t){return qe(t).signOut()}const ic="__sak";/**
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
 */class KI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function JN(){const t=kt();return gg(t)||ph(t)}const ZN=1e3,eO=10;class QI extends KI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JN()&&xN(),this.fallbackToPolling=$I(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QI.type="LOCAL";const tO=QI;/**
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
 */class YI extends KI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YI.type="SESSION";const XI=YI;/**
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
 */function nO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await nO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
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
 */function _g(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_g("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function iO(t){Dn().location.href=t}/**
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
 */function JI(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function sO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aO(){return JI()?self:null}/**
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
 */const ZI="firebaseLocalStorageDb",lO=1,sc="firebaseLocalStorage",ex="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(t,e){return t.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function uO(){const t=indexedDB.deleteDatabase(ZI);return new Ja(t).toPromise()}function gp(){const t=indexedDB.open(ZI,lO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sc,{keyPath:ex})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sc)?e(r):(r.close(),await uO(),e(await gp()))})})}async function z0(t,e,n){const r=gh(t,!0).put({[ex]:e,value:n});return new Ja(r).toPromise()}async function cO(t,e){const n=gh(t,!1).get(e),r=await new Ja(n).toPromise();return r===void 0?null:r.value}function B0(t,e){const n=gh(t,!0).delete(e);return new Ja(n).toPromise()}const hO=800,dO=3;class tx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(aO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sO(),!this.activeServiceWorker)return;this.sender=new rO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gp();return await z0(e,ic,"1"),await B0(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>z0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>B0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gh(i,!1).getAll();return new Ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tx.type="LOCAL";const fO=tx;new Qa(3e4,6e4);/**
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
 */function pO(t,e){return e?Xn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mO(t){return GI(t.auth,new wg(t),t.bypassAuthState)}function gO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),BN(n,new wg(t),t.bypassAuthState)}async function yO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),zN(n,new wg(t),t.bypassAuthState)}/**
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
 */class nx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mO;case"linkViaPopup":case"linkViaRedirect":return yO;case"reauthViaPopup":case"reauthViaRedirect":return gO;default:wn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vO=new Qa(2e3,1e4);class ps extends nx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=_g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vO.get())};e()}}ps.currentPopupAction=null;/**
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
 */const _O="pendingRedirect",mu=new Map;class wO extends nx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const r=await EO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EO(t,e){const n=TO(e),r=xO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IO(t,e){mu.set(t._key(),e)}function xO(t){return Xn(t._redirectPersistence)}function TO(t){return pu(_O,t.config.apiKey,t.name)}async function SO(t,e,n=!1){const r=ro(t),i=pO(r,e),o=await new wO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kO=10*60*1e3;class CO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kO&&this.cachedEventUids.clear(),this.cachedEventUids.has(W0(e))}saveEventToCache(e){this.cachedEventUids.add(W0(e)),this.lastProcessedEventTime=Date.now()}}function W0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rx(t);default:return!1}}/**
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
 */async function RO(t,e={}){return Wi(t,"GET","/v1/projects",e)}/**
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
 */const PO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bO=/^https?/;async function NO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RO(t);for(const n of e)try{if(OO(n))return}catch{}wn(t,"unauthorized-domain")}function OO(t){const e=mp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bO.test(n))return!1;if(PO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DO=new Qa(3e4,6e4);function H0(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LO(t){return new Promise((e,n)=>{var r,i,s;function o(){H0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H0(),n(On(t,"network-request-failed"))},timeout:DO.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const a=SN("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},zI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gu=null,e})}let gu=null;function MO(t){return gu=gu||LO(t),gu}/**
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
 */const VO=new Qa(5e3,15e3),$O="__/auth/iframe",jO="emulator/auth/iframe",FO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zO(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pg(e,jO):`https://${t.config.authDomain}/${$O}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=UO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ka(r).slice(1)}`}async function BO(t){const e=await MO(t),n=Dn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:zO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Dn().setTimeout(()=>{s(o)},VO.get());function l(){Dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const WO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HO=500,qO=600,GO="_blank",KO="http://localhost";class q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QO(t,e,n,r=HO,i=qO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=kt().toLowerCase();n&&(a=OI(u)?GO:n),NI(u)&&(e=e||KO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(EN(u)&&a!=="_self")return YO(e||"",a),new q0(null);const h=window.open(e||"",a,c);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new q0(h)}function YO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XO="__/auth/handler",JO="emulator/auth/handler",ZO=encodeURIComponent("fac");async function G0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof HI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",G2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Xa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${ZO}=${encodeURIComponent(l)}`:"";return`${eD(t)}?${Ka(a).slice(1)}${u}`}function eD({config:t}){return t.emulator?pg(t,JO):`https://${t.authDomain}/${XO}`}/**
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
 */const Fd="webStorageSupport";class tD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XI,this._completeRedirectFn=SO,this._overrideRedirectResult=IO}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await G0(e,n,r,mp(),i);return QO(e,o,_g())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await G0(e,n,r,mp(),i);return iO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BO(e),r=new CO(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fd,{type:Fd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fd];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $I()||gg()||ph()}}const nD=tD;var K0="@firebase/auth",Q0="1.1.0";/**
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
 */class rD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sD(t){Ni(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jI(t)},u=new PN(r,i,s,l);return NN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ni(new Zr("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(r=>new rD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(K0,Q0,iD(t)),Nn(K0,Q0,"esm2017")}/**
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
 */const oD=5*60,aD=vI("authIdTokenMaxAge")||oD;let Y0=null;const lD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aD)return;const i=n==null?void 0:n.token;Y0!==i&&(Y0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uD(t=hg()){const e=fh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bN(t,{popupRedirectResolver:nD,persistence:[fO,tO,XI]}),r=vI("authTokenSyncURL");if(r){const s=lD(r);YN(n,s,()=>s(n.currentUser)),QN(n,o=>s(o))}const i=mI("auth");return i&&ON(n,`http://${i}`),n}sD("Browser");var cD="firebase",hD="10.1.0";/**
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
 */Nn(cD,hD,"app");/**
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
 */const ix="firebasestorage.googleapis.com",dD="storageBucket",fD=2*60*1e3,pD=10*60*1e3;/**
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
 */class Fn extends jn{constructor(e,n,r=0){super(Ud(e),`Firebase Storage: ${n} (${Ud(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ud(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function Ud(t){return"storage/"+t}function mD(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Vn.UNKNOWN,t)}function gD(){return new Fn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yD(){return new Fn(Vn.CANCELED,"User canceled the upload/download.")}function vD(t){return new Fn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function _D(t){return new Fn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function X0(t){return new Fn(Vn.INVALID_ARGUMENT,t)}function sx(){return new Fn(Vn.APP_DELETED,"The Firebase app was deleted.")}function wD(t){return new Fn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw _D(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===ix?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const T=y[E],S=T.regex.exec(e);if(S){const b=S[T.indices.bucket];let P=S[T.indices.path];P||(P=""),r=new gn(b,P),T.postModify(r);break}}if(r==null)throw vD(e);return r}}class ED{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ID(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function xD(t){t(!1)}/**
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
 */function TD(t){return t!==void 0}function J0(t,e,n,r){if(r<e)throw X0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw X0(`Invalid value for '${t}'. Expected ${n} or less.`)}function SD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var oc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oc||(oc={}));/**
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
 */function kD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class CD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oc.NO_ERROR,l=s.getStatus();if(!a||kD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===oc.ABORT;r(!1,new zl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new zl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());TD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=mD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?sx():yD();o(l)}else{const l=gD();o(l)}};this.canceled_?n(!1,new zl(!1,null,!0)):this.backoffId_=ID(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function PD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ND(t,e,n,r,i,s,o=!0){const a=SD(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return PD(u,e),AD(u,n),RD(u,s),bD(u,r),new CD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function OD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ac{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ac(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DD(this._location.path)}get storage(){return this._service}get parent(){const e=OD(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new ac(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wD(e)}}function Z0(t,e){const n=e==null?void 0:e[dD];return n==null?null:gn.makeFromBucketSpec(n,t)}function LD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_I(i,t.app.options.projectId))}class MD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ix,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fD,this._maxUploadRetryTime=pD,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=Z0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=Z0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ac(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new ED(sx());{const o=ND(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const e_="@firebase/storage",t_="0.11.2";/**
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
 */const ox="storage";function VD(t=hg(),e){t=qe(t);const r=fh(t,ox).getImmediate({identifier:e}),i=gI("storage");return i&&$D(r,...i),r}function $D(t,e,n,r={}){LD(t,e,n,r)}function jD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new MD(n,r,i,e,Bi)}function FD(){Ni(new Zr(ox,jD,"PUBLIC").setMultipleInstances(!0)),Nn(e_,t_,""),Nn(e_,t_,"esm2017")}FD();var UD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Eg=Eg||{},J=UD||self;function yh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Za(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zD(t){return Object.prototype.hasOwnProperty.call(t,zd)&&t[zd]||(t[zd]=++BD)}var zd="closure_uid_"+(1e9*Math.random()>>>0),BD=0;function WD(t,e,n){return t.call.apply(t.bind,arguments)}function HD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=WD:Et=HD,Et.apply(null,arguments)}function Bl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ai(){this.s=this.s,this.o=this.o}var qD=0;ai.prototype.s=!1;ai.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qD!=0)&&zD(this)};ai.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ax=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ig(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function n_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var GD=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Ta(t){return/^[\s\xa0]*$/.test(t)}function vh(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Cn(t){return vh().indexOf(t)!=-1}function xg(t){return xg[" "](t),t}xg[" "]=function(){};function KD(t,e){var n=FL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var QD=Cn("Opera"),zs=Cn("Trident")||Cn("MSIE"),lx=Cn("Edge"),yp=lx||zs,ux=Cn("Gecko")&&!(vh().toLowerCase().indexOf("webkit")!=-1&&!Cn("Edge"))&&!(Cn("Trident")||Cn("MSIE"))&&!Cn("Edge"),YD=vh().toLowerCase().indexOf("webkit")!=-1&&!Cn("Edge");function cx(){var t=J.document;return t?t.documentMode:void 0}var vp;e:{var Bd="",Wd=function(){var t=vh();if(ux)return/rv:([^\);]+)(\)|;)/.exec(t);if(lx)return/Edge\/([\d\.]+)/.exec(t);if(zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YD)return/WebKit\/(\S+)/.exec(t);if(QD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wd&&(Bd=Wd?Wd[1]:""),zs){var Hd=cx();if(Hd!=null&&Hd>parseFloat(Bd)){vp=String(Hd);break e}}vp=Bd}var _p;if(J.document&&zs){var r_=cx();_p=r_||parseInt(vp,10)||void 0}else _p=void 0;var XD=_p;function Sa(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ux){e:{try{xg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sa.$.h.call(this)}}nt(Sa,It);var JD={2:"touch",3:"pen",4:"mouse"};Sa.prototype.h=function(){Sa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var el="closure_listenable_"+(1e6*Math.random()|0),ZD=0;function eL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++ZD,this.fa=this.ia=!1}function _h(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function tL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function hx(t){const e={};for(const n in t)e[n]=t[n];return e}const i_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dx(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<i_.length;s++)n=i_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wh(t){this.src=t,this.g={},this.h=0}wh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ep(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new eL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function wp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ax(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ep(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Sg="closure_lm_"+(1e6*Math.random()|0),qd={};function fx(t,e,n,r,i){if(r&&r.once)return mx(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fx(t,e[s],n,r,i);return null}return n=Ag(n),t&&t[el]?t.O(e,n,Za(r)?!!r.capture:!!r,i):px(t,e,n,!1,r,i)}function px(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Za(i)?!!i.capture:!!i,a=Cg(t);if(a||(t[Sg]=a=new wh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=nL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)GD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(yx(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nL(){function t(n){return e.call(t.src,t.listener,n)}const e=rL;return t}function mx(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mx(t,e[s],n,r,i);return null}return n=Ag(n),t&&t[el]?t.P(e,n,Za(r)?!!r.capture:!!r,i):px(t,e,n,!0,r,i)}function gx(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gx(t,e[s],n,r,i);else r=Za(r)?!!r.capture:!!r,n=Ag(n),t&&t[el]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ep(s,n,r,i),-1<n&&(_h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ep(e,n,r,i)),(n=-1<t?e[t]:null)&&kg(n))}function kg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[el])wp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yx(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cg(e))?(wp(n,t),n.h==0&&(n.src=null,e[Sg]=null)):_h(t)}}}function yx(t){return t in qd?qd[t]:qd[t]="on"+t}function rL(t,e){if(t.fa)t=!0;else{e=new Sa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&kg(t),t=n.call(r,e)}return t}function Cg(t){return t=t[Sg],t instanceof wh?t:null}var Gd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ag(t){return typeof t=="function"?t:(t[Gd]||(t[Gd]=function(e){return t.handleEvent(e)}),t[Gd])}function et(){ai.call(this),this.i=new wh(this),this.S=this,this.J=null}nt(et,ai);et.prototype[el]=!0;et.prototype.removeEventListener=function(t,e,n,r){gx(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),dx(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Wl(o,r,!0,e)&&i}if(o=e.g=t,i=Wl(o,r,!0,e)&&i,i=Wl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Wl(o,r,!1,e)&&i}et.prototype.N=function(){if(et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_h(n[r]);delete t.g[e],t.h--}}this.J=null};et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Wl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&wp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Rg=J.JSON.stringify;class iL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sL(){var t=Pg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oL{constructor(){this.h=this.g=null}add(e,n){const r=vx.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vx=new iL(()=>new aL,t=>t.reset());class aL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uL(t){J.setTimeout(()=>{throw t},0)}let ka,Ca=!1,Pg=new oL,_x=()=>{const t=J.Promise.resolve(void 0);ka=()=>{t.then(cL)}};var cL=()=>{for(var t;t=sL();){try{t.h.call(t.g)}catch(n){uL(n)}var e=vx;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ca=!1};function Eh(t,e){et.call(this),this.h=t||1,this.g=e||J,this.j=Et(this.qb,this),this.l=Date.now()}nt(Eh,et);M=Eh.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(bg(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Eh.$.N.call(this),bg(this),delete this.g};function Ng(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function wx(t){t.g=Ng(()=>{t.g=null,t.i&&(t.i=!1,wx(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hL extends ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wx(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(t){ai.call(this),this.h=t,this.g={}}nt(Aa,ai);var s_=[];function Ex(t,e,n,r){Array.isArray(n)||(n&&(s_[0]=n.toString()),n=s_);for(var i=0;i<n.length;i++){var s=fx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ix(t){Tg(t.g,function(e,n){this.g.hasOwnProperty(n)&&kg(e)},t),t.g={}}Aa.prototype.N=function(){Aa.$.N.call(this),Ix(this)};Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ih(){this.g=!0}Ih.prototype.Ea=function(){this.g=!1};function dL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ms(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mL(t,n)+(r?" "+r:"")})}function pL(t,e){t.info(function(){return"TIMEOUT: "+e})}Ih.prototype.info=function(){};function mL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Rg(n)}catch{return e}}var Hi={},o_=null;function xh(){return o_=o_||new et}Hi.Ta="serverreachability";function xx(t){It.call(this,Hi.Ta,t)}nt(xx,It);function Ra(t){const e=xh();ct(e,new xx(e))}Hi.STAT_EVENT="statevent";function Tx(t,e){It.call(this,Hi.STAT_EVENT,t),this.stat=e}nt(Tx,It);function Rt(t){const e=xh();ct(e,new Tx(e,t))}Hi.Ua="timingevent";function Sx(t,e){It.call(this,Hi.Ua,t),this.size=e}nt(Sx,It);function tl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Th={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kx={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Og(){}Og.prototype.h=null;function a_(t){return t.h||(t.h=t.i())}function Cx(){}var nl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Dg(){It.call(this,"d")}nt(Dg,It);function Lg(){It.call(this,"c")}nt(Lg,It);var Ip;function Sh(){}nt(Sh,Og);Sh.prototype.g=function(){return new XMLHttpRequest};Sh.prototype.i=function(){return{}};Ip=new Sh;function rl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Aa(this),this.P=gL,t=yp?125:void 0,this.V=new Eh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ax}function Ax(){this.i=null,this.g="",this.h=!1}var gL=45e3,xp={},lc={};M=rl.prototype;M.setTimeout=function(t){this.P=t};function Tp(t,e,n){t.L=1,t.v=Ch(or(e)),t.s=n,t.S=!0,Rx(t,null)}function Rx(t,e){t.G=Date.now(),il(t),t.A=or(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Vx(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ax,t.g=iT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new hL(Et(t.Pa,t,t.g),t.O)),Ex(t.U,t.g,"readystatechange",t.nb),e=t.I?hx(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ra(),dL(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||yp||this.g&&(this.h.h||this.g.ja()||h_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ra(3):Ra(2)),kh(this);var n=this.g.da();this.ca=n;t:if(Px(this)){var r=h_(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),Yo(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ta(a)){var u=a;break t}}u=null}if(n=u)ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sp(this,n);else{this.i=!1,this.o=3,Rt(12),yi(this),Yo(this);break e}}this.S?(bx(this,c,o),yp&&this.i&&c==3&&(Ex(this.U,this.V,"tick",this.mb),this.V.start())):(ms(this.j,this.m,o,null),Sp(this,o)),c==4&&yi(this),this.i&&!this.J&&(c==4?eT(this.l,this):(this.i=!1,il(this)))}else VL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),yi(this),Yo(this)}}}catch{}finally{}};function Px(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function bx(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=yL(t,n),i==lc){e==4&&(t.o=4,Rt(14),r=!1),ms(t.j,t.m,null,"[Incomplete Response]");break}else if(i==xp){t.o=4,Rt(15),ms(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ms(t.j,t.m,i,null),Sp(t,i);Px(t)&&i!=lc&&i!=xp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ug(e),e.M=!0,Rt(11))):(ms(t.j,t.m,n,"[Invalid Chunked Response]"),yi(t),Yo(t))}M.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.C<e.length&&(kh(this),bx(this,t,e),this.i&&t!=4&&il(this))}};function yL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lc:(n=Number(e.substring(n,r)),isNaN(n)?xp:(r+=1,r+n>e.length?lc:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,yi(this)};function il(t){t.Y=Date.now()+t.P,Nx(t,t.P)}function Nx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tl(Et(t.lb,t),e)}function kh(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pL(this.j,this.A),this.L!=2&&(Ra(),Rt(17)),yi(this),this.o=2,Yo(this)):Nx(this,this.Y-t)};function Yo(t){t.l.H==0||t.J||eT(t.l,t)}function yi(t){kh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bg(t.V),Ix(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||kp(n.i,t))){if(!t.K&&kp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)hc(n),Ph(n);else break e;Fg(n),Rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=tl(Et(n.ib,n),6e3));if(1>=Fx(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vi(n,11)}else if((t.K||n.g==t)&&hc(n),!Ta(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Mg(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ee(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=rT(r,r.J?r.pa:null,r.Y),o.K){Ux(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(kh(a),il(a)),r.g=o}else Jx(r);0<n.j.length&&bh(n)}else u[0]!="stop"&&u[0]!="close"||vi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vi(n,7):jg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ra(4)}catch{}}function vL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function _L(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ox(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_L(t),r=vL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Dx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ti(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ti){this.h=t.h,uc(this,t.j),this.s=t.s,this.g=t.g,cc(this,t.m),this.l=t.l;var e=t.i,n=new Pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),l_(this,n),this.o=t.o}else t&&(e=String(t).match(Dx))?(this.h=!1,uc(this,e[1]||"",!0),this.s=Oo(e[2]||""),this.g=Oo(e[3]||"",!0),cc(this,e[4]),this.l=Oo(e[5]||"",!0),l_(this,e[6]||"",!0),this.o=Oo(e[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}Ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Do(e,u_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Do(e,u_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Do(n,n.charAt(0)=="/"?xL:IL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Do(n,SL)),t.join("")};function or(t){return new Ti(t)}function uc(t,e,n){t.j=n?Oo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function cc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function l_(t,e,n){e instanceof Pa?(t.i=e,kL(t.i,t.h)):(n||(e=Do(e,TL)),t.i=new Pa(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Ch(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Do(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,EL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function EL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var u_=/[#\/\?@]/g,IL=/[#\?:]/g,xL=/[#\?]/g,TL=/[#\?@]/g,SL=/#/g;function Pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function li(t){t.g||(t.g=new Map,t.h=0,t.i&&wL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Pa.prototype;M.add=function(t,e){li(this),this.i=null,t=so(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lx(t,e){li(t),e=so(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mx(t,e){return li(t),e=so(t,e),t.g.has(e)}M.forEach=function(t,e){li(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.ta=function(){li(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.Z=function(t){li(this);let e=[];if(typeof t=="string")Mx(this,t)&&(e=e.concat(this.g.get(so(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return li(this),this.i=null,t=so(this,t),Mx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Vx(t,e,n){Lx(t,e),0<n.length&&(t.i=null,t.g.set(so(t,e),Ig(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function so(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kL(t,e){e&&!t.j&&(li(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Lx(this,r),Vx(this,i,n))},t)),t.j=e}var CL=class{constructor(t,e){this.g=t,this.map=e}};function $x(t){this.l=t||AL,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AL=10;function jx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fx(t){return t.h?1:t.g?t.g.size:0}function kp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mg(t,e){t.g?t.g.add(e):t.h=e}function Ux(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$x.prototype.cancel=function(){if(this.i=zx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zx(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ig(t.i)}var RL=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function PL(){this.g=new RL}function bL(t,e,n){const r=n||"";try{Ox(t,function(i,s){let o=i;Za(i)&&(o=Rg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function NL(t,e){const n=new Ih;if(J.Image){const r=new Image;r.onload=Bl(Hl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bl(Hl,n,r,"TestLoadImage: error",!1,e),r.onabort=Bl(Hl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bl(Hl,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Hl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function sl(t){this.l=t.fc||null,this.j=t.ob||!1}nt(sl,Og);sl.prototype.g=function(){return new Ah(this.l,this.j)};sl.prototype.i=function(t){return function(){return t}}({});function Ah(t,e){et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Ah,et);var Vg=0;M=Ah.prototype;M.open=function(t,e){if(this.readyState!=Vg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ba(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ol(this)),this.readyState=Vg};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ba(this)),this.g&&(this.readyState=3,ba(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bx(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Bx(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ol(this):ba(this),this.readyState==3&&Bx(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,ol(this))};M.Ya=function(t){this.g&&(this.response=t,ol(this))};M.ka=function(){this.g&&ol(this)};function ol(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ba(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ba(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ah.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OL=J.JSON.parse;function Ve(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wx,this.L=this.M=!1}nt(Ve,et);var Wx="",DL=/^https?$/i,LL=["POST","PUT"];M=Ve.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ip.g(),this.C=this.u?a_(this.u):a_(Ip),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){c_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=ax(LL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gx(this),0<this.B&&((this.L=ML(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Ng(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){c_(this,s)}};function ML(t){return zs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Eg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function c_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hx(t),Rh(t)}function Hx(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Rh(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rh(this,!0)),Ve.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?qx(this):this.kb())};M.kb=function(){qx(this)};function qx(t){if(t.h&&typeof Eg<"u"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)Ng(t.La,0,t);else if(ct(t,"readystatechange"),An(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Dx)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),r=!DL.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<An(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Hx(t)}}finally{Rh(t)}}}}function Rh(t,e){if(t.g){Gx(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function Gx(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function An(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OL(e)}};function h_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Wx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function VL(t){const e={};t=(t.g&&2<=An(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ta(t[r]))continue;var n=lL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}tL(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kx(t){let e="";return Tg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $g(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Kx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function To(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qx(t){this.Ga=0,this.j=[],this.l=new Ih,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=To("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=To("baseRetryDelayMs",5e3,t),this.hb=To("retryDelaySeedMs",1e4,t),this.eb=To("forwardChannelMaxRetries",2,t),this.xa=To("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $x(t&&t.concurrentRequestLimit),this.Ja=new PL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=Qx.prototype;M.ra=8;M.H=1;function jg(t){if(Yx(t),t.H==3){var e=t.W++,n=or(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),al(t,n),e=new rl(t,t.l,e),e.L=2,e.v=Ch(or(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=iT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),il(e)}nT(t)}function Ph(t){t.g&&(Ug(t),t.g.cancel(),t.g=null)}function Yx(t){Ph(t),t.u&&(J.clearTimeout(t.u),t.u=null),hc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function bh(t){if(!jx(t.i)&&!t.m){t.m=!0;var e=t.Na;ka||_x(),Ca||(ka(),Ca=!0),Pg.add(e,t),t.C=0}}function $L(t,e){return Fx(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=tl(Et(t.Na,t,e),tT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new rl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=hx(s),dx(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xx(this,i,e),n=or(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),al(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Kx(s)))+"&"+e:this.o&&$g(n,this.o,s)),Mg(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,Tp(i,n,null)):Tp(i,n,e),this.H=2}}else this.H==3&&(t?d_(this,t):this.j.length==0||jx(this.i)||d_(this))};function d_(t,e){var n;e?n=e.m:n=t.W++;const r=or(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),al(t,r),t.o&&t.s&&$g(r,t.o,t.s),n=new rl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xx(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mg(t.i,n),Tp(n,r,e)}function al(t,e){t.na&&Tg(t.na,function(n,r){Ee(e,r,n)}),t.h&&Ox({},function(n,r){Ee(e,r,n)})}function Xx(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{bL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Jx(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ka||_x(),Ca||(ka(),Ca=!0),Pg.add(e,t),t.A=0}}function Fg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=tl(Et(t.Ma,t),tT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Zx(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=tl(Et(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),Ph(this),Zx(this))};function Ug(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Zx(t){t.g=new rl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=or(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),al(t,e),t.o&&t.s&&$g(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ch(or(e)),n.s=null,n.S=!0,Rx(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Ph(this),Fg(this),Rt(19))};function hc(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function eT(t,e){var n=null;if(t.g==e){hc(t),Ug(t),t.g=null;var r=2}else if(kp(t.i,e))n=e.F,Ux(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=xh(),ct(r,new Sx(r,n)),bh(t)}else Jx(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&$L(t,e)||r==2&&Fg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vi(t,5);break;case 4:vi(t,10);break;case 3:vi(t,6);break;default:vi(t,2)}}}function tT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new Ti("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||uc(n,"https"),Ch(n)),NL(n.toString(),r)}else Rt(2);t.H=0,t.h&&t.h.za(e),nT(t),Yx(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function nT(t){if(t.H=0,t.ma=[],t.h){const e=zx(t.i);(e.length!=0||t.j.length!=0)&&(n_(t.ma,e),n_(t.ma,t.j),t.i.i.length=0,Ig(t.j),t.j.length=0),t.h.ya()}}function rT(t,e,n){var r=n instanceof Ti?or(n):new Ti(n);if(r.g!="")e&&(r.g=e+"."+r.g),cc(r,r.m);else{var i=J.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ti(null);r&&uc(s,r),e&&(s.g=e),i&&cc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),al(t,r),r}function iT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new sl({ob:!0})):new Ve(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function sT(){}M=sT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function dc(){if(zs&&!(10<=Number(XD)))throw Error("Environmental error: no available transport.")}dc.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){et.call(this),this.g=new Qx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ta(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ta(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oo(this)}nt(qt,et);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=rT(t,null,t.Y),bh(t)};qt.prototype.close=function(){jg(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Rg(t),t=n);e.j.push(new CL(e.fb++,t)),e.H==3&&bh(e)};qt.prototype.N=function(){this.g.h=null,delete this.j,jg(this.g),delete this.g,qt.$.N.call(this)};function oT(t){Dg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(oT,Dg);function aT(){Lg.call(this),this.status=1}nt(aT,Lg);function oo(t){this.g=t}nt(oo,sT);oo.prototype.Ba=function(){ct(this.g,"a")};oo.prototype.Aa=function(t){ct(this.g,new oT(t))};oo.prototype.za=function(t){ct(this.g,new aT)};oo.prototype.ya=function(){ct(this.g,"b")};function jL(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(En,jL);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Kd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Kd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Kd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Kd(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var FL={};function zg(t){return-128<=t&&128>t?KD(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return Ts;if(0>t)return lt(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cp;return new ge(e,0)}function lT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(lT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=Ts,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Rn(Math.pow(e,s)),r=r.R(s).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var Cp=4294967296,Ts=zg(0),Ap=zg(1),f_=zg(16777216);M=ge.prototype;M.ea=function(){if(en(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cp+r)*e,e*=Cp}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jn(this))return"0";if(en(this))return"-"+lt(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var i=pc(n,e).g;n=fc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Jn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}M.X=function(t){return t=fc(this,t),en(t)?-1:Jn(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Ap)}M.abs=function(){return en(this)?lt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function fc(t,e){return t.add(lt(e))}M.R=function(t){if(Jn(this)||Jn(t))return Ts;if(en(this))return en(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(en(t))return lt(this.R(lt(t)));if(0>this.X(f_)&&0>t.X(f_))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ql(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ql(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ql(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ql(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function ql(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function So(t,e){this.g=t,this.h=e}function pc(t,e){if(Jn(e))throw Error("division by zero");if(Jn(t))return new So(Ts,Ts);if(en(t))return e=pc(lt(t),e),new So(lt(e.g),lt(e.h));if(en(e))return e=pc(t,lt(e)),new So(lt(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ap,r=e;0>=r.X(t);)n=p_(n),r=p_(r);var i=Xi(n,1),s=Xi(r,1);for(r=Xi(r,2),n=Xi(n,2);!Jn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xi(r,1),n=Xi(n,1)}return e=fc(t,i.R(e)),new So(i,e)}for(i=Ts;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rn(n),o=s.R(e);en(o)||0<o.X(t);)n-=r,s=Rn(n),o=s.R(e);Jn(s)&&(s=Ap),i=i.add(s),t=fc(t,o)}return new So(i,t)}M.gb=function(t){return pc(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function p_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function Xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ge(i,t.h)}dc.prototype.createWebChannel=dc.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;Th.NO_ERROR=0;Th.TIMEOUT=8;Th.HTTP_ERROR=6;kx.COMPLETE="complete";Cx.EventType=nl;nl.OPEN="a";nl.CLOSE="b";nl.ERROR="c";nl.MESSAGE="d";et.prototype.listen=et.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Rn;ge.fromString=lT;var UL=function(){return new dc},zL=function(){return xh()},Qd=Th,BL=kx,WL=Hi,m_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},HL=sl,Gl=Cx,qL=Ve,GL=En,Ss=ge;const g_="@firebase/firestore";/**
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
 */let ao="10.1.0";/**
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
 */const Li=new ug("@firebase/firestore");function y_(){return Li.logLevel}function B(t,...e){if(Li.logLevel<=ce.DEBUG){const n=e.map(Bg);Li.debug(`Firestore (${ao}): ${t}`,...n)}}function ar(t,...e){if(Li.logLevel<=ce.ERROR){const n=e.map(Bg);Li.error(`Firestore (${ao}): ${t}`,...n)}}function Bs(t,...e){if(Li.logLevel<=ce.WARN){const n=e.map(Bg);Li.warn(`Firestore (${ao}): ${t}`,...n)}}function Bg(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function Te(t,e){t||X()}function ne(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class uT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class QL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YL{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new uT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new gt(e)}}class XL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new ZL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function tM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Na{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Na{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const nM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Na{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return nM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ie.fromString(e))}static fromName(e){return new H(Ie.fromString(e).popFirst(5))}static empty(){return new H(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ie(e.slice()))}}function rM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new ei(i,H.empty(),e)}function iM(t){return new ei(t.readTime,t.key,-1)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(ee.min(),H.empty(),-1)}static max(){return new ei(ee.max(),H.empty(),-1)}}function sM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const oM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ll(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==oM)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wg.ae=-1;function Nh(t){return t==null}function mc(t){return t===0&&1/t==-1/0}function lM(t){return typeof t=="number"&&Number.isInteger(t)&&!mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function v_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kl(this.root,e,this.comparator,!0)}}class Kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new __(this.data.getIterator())}getIteratorFrom(e){return new __(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class __{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new xt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dT("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const uM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(Te(!!t),typeof t=="string"){let e=0;const n=uM.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */function Hg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qg(t){const e=t.mapValue.fields.__previous_value__;return Hg(e)?qg(e):e}function Oa(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class cM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Da{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Da&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ql={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hg(t)?4:hM(t)?9007199254740991:10:X()}function $n(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oa(t).isEqual(Oa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),a=ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mi(i.bytesValue).isEqual(Mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?mc(o)===mc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(v_(o)!==v_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function La(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return w_(t.timestampValue,e.timestampValue);case 4:return w_(Oa(t),Oa(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mi(s),l=Mi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=fe(a[u],l[u]);if(c!==0)return c}return fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe(Be(s.latitude),Be(o.latitude));return a!==0?a:fe(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Hs(a[u],l[u]);if(c)return c}return fe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ql.mapValue&&o===Ql.mapValue)return 0;if(s===Ql.mapValue)return 1;if(o===Ql.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=fe(l[h],c[h]);if(d!==0)return d;const p=Hs(a[l[h]],u[c[h]]);if(p!==0)return p}return fe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw X()}}function w_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=ti(t),r=ti(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function qs(t){return Rp(t)}function Rp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rp(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function E_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pp(t){return!!t&&"integerValue"in t}function Gg(t){return!!t&&"arrayValue"in t}function I_(t){return!!t&&"nullValue"in t}function x_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yu(t){return!!t&&"mapValue"in t}function Xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xo(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(Xo(this.value))}}function fT(t){const e=[];return qi(t.fields,(n,r)=>{const i=new _t([n]);if(yu(r)){const s=fT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class gc{constructor(e,n){this.position=e,this.inclusive=n}}function T_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function S_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function dM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pT{}class He extends pT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pM(e,n,r):n==="array-contains"?new yM(e,r):n==="in"?new vM(e,r):n==="not-in"?new _M(e,r):n==="array-contains-any"?new wM(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mM(e,r):new gM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class In extends pT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new In(e,n)}matches(e){return mT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mT(t){return t.op==="and"}function gT(t){return fM(t)&&mT(t)}function fM(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function bp(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+qs(t.value);if(gT(t))return t.filters.map(e=>bp(e)).join(",");{const e=t.filters.map(n=>bp(n)).join(",");return`${t.op}(${e})`}}function yT(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yT(o,i.filters[a]),!0):!1}(t,e):void X()}function vT(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(vT).join(" ,")+"}"}(t):"Filter"}class pM extends He{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class mM extends He{constructor(e,n){super(e,"in",n),this.keys=_T("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gM extends He{constructor(e,n){super(e,"not-in",n),this.keys=_T("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _T(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class yM extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gg(n)&&La(n.arrayValue,this.value)}}class vM extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&La(this.value.arrayValue,n)}}class _M extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!La(this.value.arrayValue,n)}}class wM extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>La(this.value.arrayValue,r))}}/**
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
 */class EM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function k_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EM(t,e,n,r,i,s,o)}function Kg(t){const e=ne(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qs(r)).join(",")),e.he=n}return e.he}function Qg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!S_(t.startAt,e.startAt)&&S_(t.endAt,e.endAt)}function Np(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function IM(t,e,n,r,i,s,o,a){return new cl(t,e,n,r,i,s,o,a)}function Oh(t){return new cl(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ET(t){return t.collectionGroup!==null}function ks(t){const e=ne(t);if(e.Pe===null){e.Pe=[];const n=Yg(e),r=wT(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Jo(n)),e.Pe.push(new Jo(_t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Jo(_t.keyField(),s))}}}return e.Pe}function lr(t){const e=ne(t);if(!e.Ie)if(e.limitType==="F")e.Ie=k_(e.path,e.collectionGroup,ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Jo(s.field,o))}const r=e.endAt?new gc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new gc(e.startAt.position,e.startAt.inclusive):null;e.Ie=k_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Op(t,e){e.getFirstInequalityField(),Yg(t);const n=t.filters.concat([e]);return new cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dp(t,e,n){return new cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dh(t,e){return Qg(lr(t),lr(e))&&t.limitType===e.limitType}function IT(t){return`${Kg(lr(t))}|lt:${t.limitType}`}function Lp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vT(i)).join(", ")}]`),Nh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qs(i)).join(",")),`Target(${r})`}(lr(t))}; limitType=${t.limitType})`}function Lh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=T_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ks(r),i)||r.endAt&&!function(o,a,l){const u=T_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ks(r),i))}(t,e)}function xM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xT(t){return(e,n)=>{let r=!1;for(const i of ks(t)){const s=TM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TM(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Hs(l,u):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hT(this.inner)}size(){return this.innerSize}}/**
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
 */const SM=new De(H.comparator);function ur(){return SM}const TT=new De(H.comparator);function Lo(...t){let e=TT;for(const n of t)e=e.insert(n.key,n);return e}function ST(t){let e=TT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _i(){return Zo()}function kT(){return Zo()}function Zo(){return new lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const kM=new De(H.comparator),CM=new xt(H.comparator);function ie(...t){let e=CM;for(const n of t)e=e.add(n);return e}const AM=new xt(fe);function RM(){return AM}/**
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
 */function CT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function AT(t){return{integerValue:""+t}}function PM(t,e){return lM(e)?AT(e):CT(t,e)}/**
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
 */class Mh{constructor(){this._=void 0}}function bM(t,e,n){return t instanceof yc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hg(s)&&(s=qg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ma?PT(t,e):t instanceof Va?bT(t,e):function(i,s){const o=RT(i,s),a=A_(o)+A_(i.Te);return Pp(o)&&Pp(i.Te)?AT(a):CT(i.serializer,a)}(t,e)}function NM(t,e,n){return t instanceof Ma?PT(t,e):t instanceof Va?bT(t,e):n}function RT(t,e){return t instanceof vc?function(r){return Pp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yc extends Mh{}class Ma extends Mh{constructor(e){super(),this.elements=e}}function PT(t,e){const n=NT(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Va extends Mh{constructor(e){super(),this.elements=e}}function bT(t,e){let n=NT(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class vc extends Mh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function A_(t){return Be(t.integerValue||t.doubleValue)}function NT(t){return Gg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ma&&i instanceof Ma||r instanceof Va&&i instanceof Va?Ws(r.elements,i.elements,$n):r instanceof vc&&i instanceof vc?$n(r.Te,i.Te):r instanceof yc&&i instanceof yc}(t.transform,e.transform)}class DM{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vh{}function OT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xg(t.key,rn.none()):new hl(t.key,t.data,rn.none());{const n=t.data,r=Lt.empty();let i=new xt(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Bt(i.toArray()),rn.none())}}function LM(t,e,n){t instanceof hl?function(i,s,o){const a=i.value.clone(),l=P_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!vu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=P_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(DT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ea(t,e,n,r){return t instanceof hl?function(s,o,a,l){if(!vu(s.precondition,o))return a;const u=s.value.clone(),c=b_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,a,l){if(!vu(s.precondition,o))return a;const u=b_(s.fieldTransforms,l,o),c=o.data;return c.setAll(DT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return vu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function MM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RT(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function R_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ws(r,i,(s,o)=>OM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hl extends Vh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends Vh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function P_(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NM(o,a,n[i]))}return r}function b_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bM(s,o,e))}return r}class Xg extends Vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VM extends Vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $M{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&LM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=OT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>R_(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>R_(n,r))}}class Jg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return kM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jg(e,n,r,i)}}/**
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
 */class jM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ae;function UM(t){switch(t){default:return X();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function LT(t){if(t===void 0)return ar("GRPC error has no .code"),k.UNKNOWN;switch(t){case ze.OK:return k.OK;case ze.CANCELLED:return k.CANCELLED;case ze.UNKNOWN:return k.UNKNOWN;case ze.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ze.INTERNAL:return k.INTERNAL;case ze.UNAVAILABLE:return k.UNAVAILABLE;case ze.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ze.NOT_FOUND:return k.NOT_FOUND;case ze.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ze.ABORTED:return k.ABORTED;case ze.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ze.DATA_LOSS:return k.DATA_LOSS;default:return X()}}(ae=ze||(ze={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Zg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Yl}static getOrCreateInstance(){return Yl===null&&(Yl=new Zg),Yl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Yl=null;/**
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
 */function zM(){return new TextEncoder}/**
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
 */const BM=new Ss([4294967295,4294967295],0);function N_(t){const e=zM().encode(t),n=new GL;return n.update(e),new Uint8Array(n.digest())}function O_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ss([n,r],0),new Ss([i,s],0)]}class ey{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ss.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ss.fromNumber(r)));return i.compare(BM)===1&&(i=new Ss([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=N_(e),[r,i]=O_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ey(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=N_(e),[r,i]=O_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $h{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $h(ee.min(),i,new De(fe),ur(),ie())}}class dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dl(r,n,ie(),ie(),ie())}}/**
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
 */class _u{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class MT{constructor(e,n){this.targetId=e,this.pe=n}}class VT{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class D_{constructor(){this.ye=0,this.we=M_(),this.Se=Ct.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new dl(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=M_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class WM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ur(),this.$e=L_(),this.Ue=new De(fe)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Np(a))if(s===0){const l=new H(a.path);this.ze(i,l,vt.newNoDocument(l,ee.min()))}else Te(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Zg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,v){var _,w,g,f,y,E;const T={localCacheCount:p,existenceFilterCount:v.count},S=v.unchangedNames;return S&&(T.bloomFilter={applied:h===0,hashCount:(_=S==null?void 0:S.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(g=(w=S==null?void 0:S.bits)===null||w===void 0?void 0:w.bitmap)===null||g===void 0?void 0:g.length)!==null&&f!==void 0?f:0,padding:(E=(y=S==null?void 0:S.bits)===null||y===void 0?void 0:y.padding)!==null&&E!==void 0?E:0},d&&(T.bloomFilter.mightContain=d)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Mi(s).toUint8Array()}catch(h){if(h instanceof dT)return Bs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new ey(l,o,a)}catch(h){return Bs(h instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Np(a.target)){const l=new H(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,vt.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ie();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new $h(e,n,this.Ue,this.Ke,r);return this.Ke=ur(),this.$e=L_(),this.Ue=new De(fe),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new D_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new xt(fe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new D_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function L_(){return new De(H.comparator)}function M_(){return new De(H.comparator)}const HM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GM=(()=>({and:"AND",or:"OR"}))();class KM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mp(t,e){return t.useProto3Json||Nh(e)?e:{value:e}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $T(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QM(t,e){return _c(t,e.toTimestamp())}function Ln(t){return Te(!!t),ee.fromTimestamp(function(n){const r=ti(n);return new Ye(r.seconds,r.nanos)}(t))}function ty(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function jT(t){const e=Ie.fromString(t);return Te(BT(e)),e}function Vp(t,e){return ty(t.databaseId,e.path)}function Yd(t,e){const n=jT(e);if(n.get(1)!==t.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(FT(n))}function $p(t,e){return ty(t.databaseId,e)}function YM(t){const e=jT(t);return e.length===4?Ie.emptyPath():FT(e)}function jp(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FT(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function V_(t,e,n){return{name:Vp(t,e),fields:n.value.mapValue.fields}}function XM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Te(c===void 0||typeof c=="string"),Ct.fromBase64String(c||"")):(Te(c===void 0||c instanceof Uint8Array),Ct.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:LT(u.code);return new F(c,u.message||"")}(o);n=new VT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):ee.min(),a=new Lt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new _u(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yd(t,r.document),s=r.readTime?Ln(r.readTime):ee.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yd(t,r.document),s=r.removedTargetIds||[];n=new _u([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FM(i,s),a=r.targetId;n=new MT(a,o)}}return n}function JM(t,e){let n;if(e instanceof hl)n={update:V_(t,e.key,e.value)};else if(e instanceof Xg)n={delete:Vp(t,e.key)};else if(e instanceof ui)n={update:V_(t,e.key,e.data),updateMask:aV(e.fieldMask)};else{if(!(e instanceof VM))return X();n={verify:Vp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Va)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:QM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function ZM(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(ee.min())&&(o=Ln(s)),new DM(o,i.transformResults||[])}(n,e))):[]}function eV(t,e){return{documents:[$p(t,e.path)]}}function tV(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$p(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$p(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return zT(In.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Zi(h.field),direction:iV(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Mp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function nV(t){let e=YM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=UT(h);return d instanceof In&&gT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Jo(es(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Nh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new gc(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new gc(p,d)}(n.endAt)),IM(e,i,o,s,a,"F",l,u)}function rV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>UT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function iV(t){return HM[t]}function sV(t){return qM[t]}function oV(t){return GM[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return _t.fromServerFormat(t.fieldPath)}function zT(t){return t instanceof He?function(n){if(n.op==="=="){if(x_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(I_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(I_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:sV(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>zT(i));return r.length===1?r[0]:{compositeFilter:{op:oV(n.op),filters:r}}}(t):X()}function aV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lV{constructor(e){this.ct=e}}function uV(t){const e=nV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dp(e,e.limit,"L"):e}/**
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
 */class cV{constructor(){this.sn=new hV}addToCollectionParentIndex(e,n){return this.sn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(ei.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class hV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new xt(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xt(Ie.comparator)).toArray()}}/**
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
 */class Gs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Gs(0)}static On(){return new Gs(-1)}}/**
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
 */class dV{constructor(){this.changes=new lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ea(r.mutation,i,Bt.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=_i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=Zo(),a=function(){return Zo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ui)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ea(c.mutation,u,c.mutation.getFieldMask(),Ye.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new fV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zo();let i=new De((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=kT();c.forEach(d=>{if(!s.has(d)){const p=OT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ET(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(_i());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:ST(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Lo();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,h){return new cl(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,vt.newInvalidDocument(u)))});let o=Lo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ea(u.mutation,l,Bt.empty(),Ye.now()),Lh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class mV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return R.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:uV(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),R.resolve()}}/**
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
 */class gV{constructor(){this.overlays=new De(H.comparator),this.cr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_i();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=_i(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=_i(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=_i(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jM(n,r));let s=this.cr.get(n);s===void 0&&(s=ie(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class ny{constructor(){this.lr=new xt(Xe.hr),this.Pr=new xt(Xe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Xe(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new H(new Ie([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new H(new Ie([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ie();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return H.comparator(e.key,n.key)||fe(e.mr,n.mr)}static Ir(e,n){return fe(e.mr,n.mr)||H.comparator(e.key,n.key)}}/**
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
 */class yV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new xt(Xe.hr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $M(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(fe);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),R.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new H(s),0);let a=new xt(fe);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),R.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return R.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Xe(n,0),i=this.pr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vV{constructor(e){this.Dr=e,this.docs=function(){return new De(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sM(iM(c),r)<=0||(i.has(c.key)||Lh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _V(this)}getSize(e){return R.resolve(this.size)}}class _V extends dV{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class wV{constructor(e){this.persistence=e,this.Cr=new lo(n=>Kg(n),Qg),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ny,this.targetCount=0,this.Or=Gs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),R.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Ln(n),R.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Mr.containsKey(n))}}/**
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
 */class EV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Wg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new wV(this),this.indexManager=new cV,this.remoteDocumentCache=function(i){return new vV(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new lV(n),this.Qr=new mV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new yV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new IV(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return R.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class IV extends aM{constructor(e){super(),this.currentSequenceNumber=e}}class ry{constructor(e){this.persistence=e,this.Wr=new ny,this.Gr=null}static zr(e){return new ry(e)}get jr(){if(this.Gr)return this.Gr;throw X()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.jr,r=>{const i=H.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return R.or([()=>R.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class iy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new iy(e,n.fromCache,r,i)}}/**
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
 */class xV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(C_(n))return R.resolve(null);let r=lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dp(n,null,"F"),r=lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Dp(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return C_(n)||i.isEqual(ee.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(y_()<=ce.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lp(n)),this.ji(e,o,n,rM(i,-1)))})}Gi(e,n){let r=new xt(xT(e));return n.forEach((i,s)=>{Lh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return y_()<=ce.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Lp(n)),this.Ki.getDocumentsMatchingQuery(e,n,ei.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class TV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new De(fe),this.Yi=new lo(s=>Kg(s),Qg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function SV(t,e,n,r){return new TV(t,e,n,r)}async function WT(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function kV(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=R.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);Te(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HT(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function CV(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ct.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=ur(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(AV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(ee.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function AV(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function RV(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PV(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Fp(t,e,n){const r=ne(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ul(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function $_(t,e,n){const r=ne(t);let i=ee.min(),s=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=ne(l),d=h.Yi.get(c);return d!==void 0?R.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ie())).next(a=>(bV(r,xM(e),a),{documents:a,ss:s})))}function bV(t,e,n){let r=t.Zi.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class j_{constructor(){this.activeTargetIds=RM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NV{constructor(){this.Hs=new j_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new j_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OV{Ys(e){}shutdown(){}}/**
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
 */class F_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xl=null;function Xd(){return Xl===null?Xl=function(){return 268435456+Math.round(2147483648*Math.random())}():Xl++,"0x"+Xl.toString(16)}/**
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
 */const DV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const pt="WebChannelConnection";class MV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Xd(),l=this.mo(n,r);B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(B("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Bs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=DV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Xd();return new Promise((o,a)=>{const l=new qL;l.setWithCredentials(!0),l.listenOnce(BL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qd.NO_ERROR:const c=l.getResponseJson();B(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Qd.TIMEOUT:B(pt,`RPC '${e}' ${s} timed out`),a(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case Qd.HTTP_ERROR:const h=l.getStatus();if(B(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(g)>=0?g:k.UNKNOWN}(p.status);a(new F(v,p.message))}else a(new F(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(k.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{B(pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);B(pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Xd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UL(),a=zL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new HL({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");B(pt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new LV({so:w=>{p?B(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(B(pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),B(pt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,g,f)=>{w.listen(g,y=>{try{f(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,Gl.EventType.OPEN,()=>{p||B(pt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Gl.EventType.CLOSE,()=>{p||(p=!0,B(pt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,Gl.EventType.ERROR,w=>{p||(p=!0,Bs(pt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new F(k.UNAVAILABLE,"The operation could not be completed")))}),_(h,Gl.EventType.MESSAGE,w=>{var g;if(!p){const f=w.data[0];Te(!!f);const y=f,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){B(pt,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let S=function(q){const V=ze[q];if(V!==void 0)return LT(V)}(T),b=E.message;S===void 0&&(S=k.INTERNAL,b="Unknown error status: "+T+" with message "+E.message),p=!0,v.Po(new F(S,b)),h.close()}else B(pt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,WL.STAT_EVENT,w=>{w.stat===m_.PROXY?B(pt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===m_.NOPROXY&&B(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function Jd(){return typeof document<"u"?document:null}/**
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
 */function jh(t){return new KM(t,!0)}/**
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
 */class qT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class GT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new qT(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new F(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VV extends GT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=XM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Ln(o.readTime):ee.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=jp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Np(l)?{documents:eV(s,l)}:{query:tV(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$T(s,o.resumeToken);const u=Mp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=_c(s,o.snapshotVersion.toTimestamp());const u=Mp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=rV(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=jp(this.serializer),n.removeTarget=e,this.Ho(n)}}class $V extends GT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=ZM(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.u_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=jp(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JM(this.serializer,r))};this.Ho(n)}}/**
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
 */class jV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(k.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(k.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class FV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class UV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ne(l);u.y_.add(4),await fl(u),u.b_.set("Unknown"),u.y_.delete(4),await Fh(u)}(this))})}),this.b_=new FV(r,i)}}async function Fh(t){if(Gi(t))for(const e of t.w_)await e(!0)}async function fl(t){for(const e of t.w_)await e(!1)}function KT(t,e){const n=ne(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),ay(n)?oy(n):uo(n).Uo()&&sy(n,e))}function QT(t,e){const n=ne(t),r=uo(n);n.p_.delete(e),r.Uo()&&YT(n,e),n.p_.size===0&&(r.Uo()?r.zo():Gi(n)&&n.b_.set("Unknown"))}function sy(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}uo(t).i_(e)}function YT(t,e){t.D_.Be(e),uo(t).s_(e)}function oy(t){t.D_=new WM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),uo(t).start(),t.b_.A_()}function ay(t){return Gi(t)&&!uo(t).$o()&&t.p_.size>0}function Gi(t){return ne(t).y_.size===0}function XT(t){t.D_=void 0}async function zV(t){t.p_.forEach((e,n)=>{sy(t,e)})}async function BV(t,e){XT(t),ay(t)?(t.b_.m_(e),oy(t)):t.b_.set("Unknown")}async function WV(t,e,n){if(t.b_.set("Online"),e instanceof VT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof _u?t.D_.We(e):e instanceof MT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(ee.min()))try{const r=await HT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Ct.EMPTY_BYTE_STRING,c.snapshotVersion)),YT(s,l);const h=new Nr(c.target,l,u,c.sequenceNumber);sy(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!ul(e))throw e;t.y_.add(1),await fl(t),t.b_.set("Offline"),n||(n=()=>HT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Fh(t)})}function JT(t,e){return e().catch(n=>wc(t,n,e))}async function Uh(t){const e=ne(t),n=ni(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;HV(e);)try{const i=await RV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,qV(e,i)}catch(i){await wc(e,i)}ZT(e)&&eS(e)}function HV(t){return Gi(t)&&t.g_.length<10}function qV(t,e){t.g_.push(e);const n=ni(t);n.Uo()&&n.__&&n.a_(e.mutations)}function ZT(t){return Gi(t)&&!ni(t).$o()&&t.g_.length>0}function eS(t){ni(t).start()}async function GV(t){ni(t).l_()}async function KV(t){const e=ni(t);for(const n of t.g_)e.a_(n.mutations)}async function QV(t,e,n){const r=t.g_.shift(),i=Jg.from(r,e,n);await JT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uh(t)}async function YV(t,e){e&&ni(t).__&&await async function(r,i){if(function(o){return UM(o)&&o!==k.ABORTED}(i.code)){const s=r.g_.shift();ni(r).Go(),await JT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uh(r)}}(t,e),ZT(t)&&eS(t)}async function U_(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n.y_.add(3),await fl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Fh(n)}async function XV(t,e){const n=ne(t);e?(n.y_.delete(2),await Fh(n)):e||(n.y_.add(2),await fl(n),n.b_.set("Unknown"))}function uo(t){return t.v_||(t.v_=function(n,r,i){const s=ne(n);return s.P_(),new VV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:zV.bind(null,t),uo:BV.bind(null,t),r_:WV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),ay(t)?oy(t):t.b_.set("Unknown")):(await t.v_.stop(),XT(t))})),t.v_}function ni(t){return t.C_||(t.C_=function(n,r,i){const s=ne(n);return s.P_(),new $V(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:GV.bind(null,t),uo:YV.bind(null,t),c_:KV.bind(null,t),u_:QV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Uh(t)):(await t.C_.stop(),t.g_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class ly{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ly(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uy(t,e){if(ar("AsyncQueue",`${e}: ${t}`),ul(t))return new F(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class z_{constructor(){this.F_=new De(H.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):X():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ks(e,n,Cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class JV{constructor(){this.x_=void 0,this.listeners=[]}}class ZV{constructor(){this.queries=new lo(e=>IT(e),Dh),this.onlineState="Unknown",this.O_=new Set}}async function cy(t,e){const n=ne(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new JV),i)try{s.x_=await n.onListen(r)}catch(o){const a=uy(o,`Initialization of query '${Lp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&dy(n)}async function hy(t,e){const n=ne(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function e4(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&dy(n)}function t4(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dy(t){t.O_.forEach(e=>{e.next()})}class fy{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class tS{constructor(e){this.key=e}}class nS{constructor(e){this.key=e}}class n4{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ie(),this.mutatedKeys=ie(),this.na=xT(e),this.ra=new Cs(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new z_,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Lh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return v(d)-v(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Ks(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new z_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ie(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new nS(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new tS(r))}),n}ha(e){this.X_=e.ss,this.ta=ie();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Ks.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class r4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class i4{constructor(e){this.key=e,this.Ia=!1}}class s4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new lo(a=>IT(a),Dh),this.da=new Map,this.Aa=new Set,this.Ra=new De(H.comparator),this.Va=new Map,this.ma=new ny,this.fa={},this.ga=new Map,this.pa=Gs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function o4(t,e){const n=g4(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await PV(n.localStore,lr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await a4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&KT(n.remoteStore,o)}return i}async function a4(t,e,n,r,i){t.wa=(h,d,p)=>async function(_,w,g,f){let y=w.view.sa(g);y.zi&&(y=await $_(_.localStore,w.query,!1).then(({documents:S})=>w.view.sa(S,y)));const E=f&&f.targetChanges.get(w.targetId),T=w.view.applyChanges(y,_.isPrimaryClient,E);return W_(_,w.targetId,T.ca),T.snapshot}(t,h,d,p);const s=await $_(t.localStore,e,!0),o=new n4(e,s.ss),a=o.sa(s.documents),l=dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);W_(t,n,u.ca);const c=new r4(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function l4(t,e){const n=ne(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Dh(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),QT(n.remoteStore,r.targetId),Up(n,r.targetId)}).catch(ll)):(Up(n,r.targetId),await Fp(n.localStore,r.targetId,!0))}async function u4(t,e,n){const r=y4(t);try{const i=await function(o,a){const l=ne(o),u=Ye.now(),c=a.reduce((p,v)=>p.add(v.key),ie());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=ur(),_=ie();return l.Xi.getEntries(p,c).next(w=>{v=w,v.forEach((g,f)=>{f.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const g=[];for(const f of a){const y=MM(f,h.get(f.key).overlayedDocument);y!=null&&g.push(new ui(f.key,y,fT(y.value.mapValue),rn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{d=w;const g=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:d.batchId,changes:ST(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new De(fe)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await pl(r,i.changes),await Uh(r.remoteStore)}catch(i){const s=uy(i,"Failed to persist write");n.reject(s)}}async function rS(t,e){const n=ne(t);try{const r=await CV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Te(o.Ia):i.removedDocuments.size>0&&(Te(o.Ia),o.Ia=!1))}),await pl(n,r,e)}catch(r){await ll(r)}}function B_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&dy(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c4(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new De(H.comparator);o=o.insert(s,vt.newNoDocument(s,ee.min()));const a=ie().add(s),l=new $h(ee.min(),new Map,new De(fe),o,a);await rS(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),py(r)}else await Fp(r.localStore,e,!1).then(()=>Up(r,e,n)).catch(ll)}async function h4(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await kV(n.localStore,e);sS(n,r,null),iS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pl(n,i)}catch(i){await ll(i)}}async function d4(t,e,n){const r=ne(t);try{const i=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Te(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);sS(r,e,n),iS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pl(r,i)}catch(i){await ll(i)}}function iS(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function sS(t,e,n){const r=ne(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Up(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||oS(t,r)})}function oS(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(QT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),py(t))}function W_(t,e,n){for(const r of n)r instanceof tS?(t.ma.addReference(r.key,e),f4(t,r)):r instanceof nS?(B("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||oS(t,r.key)):X()}function f4(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Aa.add(r),py(t))}function py(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new H(Ie.fromString(e)),r=t.pa.next();t.Va.set(r,new i4(n)),t.Ra=t.Ra.insert(n,r),KT(t.remoteStore,new Nr(lr(Oh(n.path)),r,"TargetPurposeLimboResolution",Wg.ae))}}async function pl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=iy.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=ne(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,d=>R.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ul(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function p4(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await WT(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new F(k.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pl(n,r.ts)}}function m4(t,e){const n=ne(t),r=n.Va.get(e);if(r&&r.Ia)return ie().add(r.key);{let i=ie();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function g4(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c4.bind(null,e),e.Ta.r_=e4.bind(null,e.eventManager),e.Ta.Sa=t4.bind(null,e.eventManager),e}function y4(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d4.bind(null,e),e}class H_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SV(this.persistence,new xV,e.initialUser,this.serializer)}createPersistence(e){return new EV(ry.zr,this.serializer)}createSharedClientState(e){return new NV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class v4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=p4.bind(null,this.syncEngine),await XV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZV}()}createDatastore(e){const n=jh(e.databaseInfo.databaseId),r=function(s){return new MV(s)}(e.databaseInfo);return function(s,o,a,l){return new jV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new UV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>B_(this.syncEngine,n,0),function(){return F_.v()?new F_:new OV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new s4(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ne(n);B("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await fl(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class my{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=cT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function q_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await E4(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>U_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>U_(e.remoteStore,s)),t._onlineComponents=e}function w4(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function E4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!w4(n))throw n;Bs("Error using user provided cache. Falling back to memory cache: "+n),await Zd(t,new H_)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Zd(t,new H_);return t._offlineComponents}async function aS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await q_(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await q_(t,new v4))),t._onlineComponents}function I4(t){return aS(t).then(e=>e.syncEngine)}async function Ec(t){const e=await aS(t),n=e.eventManager;return n.onListen=o4.bind(null,e.syncEngine),n.onUnlisten=l4.bind(null,e.syncEngine),n}function x4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new my({next:d=>{o.enqueueAndForget(()=>hy(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new F(k.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new F(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new fy(Oh(a.path),c,{includeMetadataChanges:!0,W_:!0});return cy(s,h)}(await Ec(t),t.asyncQueue,e,n,r)),r.promise}function T4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new my({next:d=>{o.enqueueAndForget(()=>hy(s,h)),d.fromCache&&l.source==="server"?u.reject(new F(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new fy(a,c,{includeMetadataChanges:!0,W_:!0});return cy(s,h)}(await Ec(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const G_=new Map;/**
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
 */function uS(t,e,n){if(!n)throw new F(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function S4(t,e,n,r){if(e===!0&&r===!0)throw new F(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function K_(t){if(!H.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Q_(t){if(H.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zh(t);throw new F(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Y_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}S4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Y_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Y_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KL;switch(r.type){case"firstParty":return new JL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=G_.get(n);r&&(B("ComponentProvider","Removing Datastore"),G_.delete(n),r.terminate())}(this),Promise.resolve()}}function k4(t,e,n,r={}){var i;const s=(t=Ft(t,Bh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=gt.MOCK_USER;else{a=_I(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(u)}t._authCredentials=new QL(new uT(a,l))}}/**
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
 */class Ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ki(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Gr extends Ki{constructor(e,n,r){super(e,n,Oh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new H(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function co(t,e,...n){if(t=qe(t),uS("collection","path",e),t instanceof Bh){const r=Ie.fromString(e,...n);return Q_(r),new Gr(t,null,r)}{if(!(t instanceof Tt||t instanceof Gr))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Q_(r),new Gr(t.firestore,null,r)}}function wt(t,e,...n){if(t=qe(t),arguments.length===1&&(e=cT.V()),uS("doc","path",e),t instanceof Bh){const r=Ie.fromString(e,...n);return K_(r),new Tt(t,null,new H(r))}{if(!(t instanceof Tt||t instanceof Gr))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return K_(r),new Tt(t.firestore,t instanceof Gr?t.converter:null,new H(r))}}/**
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
 */class C4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new qT(this,"async_queue_retry"),this.Xa=()=>{const n=Jd();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Jd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new er;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ul(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=ly.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&X()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function X_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class cr extends Bh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new C4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cS(this),this._firestoreClient.terminate()}}function A4(t,e){const n=typeof t=="object"?t:hg(),r=typeof t=="string"?t:e||"(default)",i=fh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gI("firestore");s&&k4(i,...s)}return i}function Wh(t){return t._firestoreClient||cS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new cM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,lS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new _4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(Ct.fromBase64String(e))}catch(n){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gy{constructor(e){this._methodName=e}}/**
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
 */class yy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */const R4=/^__.*__$/;class P4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new hl(e,this.data,n,this.fieldTransforms)}}class hS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class vy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new vy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Ic(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(dS(this.uu)&&R4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class b4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jh(e)}Ru(e,n,r,i=!1){return new vy({uu:e,methodName:n,Au:r,path:_t.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qh(t){const e=t._freezeSettings(),n=jh(t._databaseId);return new b4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fS(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);_y("Data must be an object, but it was:",o,r);const a=pS(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=zp(e,h,n);if(!o.contains(d))throw new F(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gS(c,d)||c.push(d)}l=new Bt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new P4(new Lt(a),l,u)}class Gh extends gy{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gh}}function N4(t,e,n,r){const i=t.Ru(1,e,n);_y("Data must be an object, but it was:",i,r);const s=[],o=Lt.empty();qi(r,(l,u)=>{const c=wy(e,l,n);u=qe(u);const h=i.Iu(c);if(u instanceof Gh)s.push(c);else{const d=ml(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Bt(s);return new hS(o,a,i.fieldTransforms)}function O4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[zp(e,r,n)],l=[i];if(s.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(zp(e,s[d])),l.push(s[d+1]);const u=[],c=Lt.empty();for(let d=a.length-1;d>=0;--d)if(!gS(u,a[d])){const p=a[d];let v=l[d];v=qe(v);const _=o.Iu(p);if(v instanceof Gh)u.push(p);else{const w=ml(v,_);w!=null&&(u.push(p),c.set(p,w))}}const h=new Bt(u);return new hS(c,h,o.fieldTransforms)}function D4(t,e,n,r=!1){return ml(n,t.Ru(r?4:3,e))}function ml(t,e){if(mS(t=qe(t)))return _y("Unsupported field value:",e,t),pS(t,e);if(t instanceof gy)return function(r,i){if(!dS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ml(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:_c(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_c(i.serializer,s)}}if(r instanceof yy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:$T(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ty(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${zh(r)}`)}(t,e)}function pS(t,e){const n={};return hT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(t,(r,i)=>{const s=ml(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof yy||t instanceof Qs||t instanceof Tt||t instanceof gy)}function _y(t,e,n){if(!mS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=zh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function zp(t,e,n){if((e=qe(e))instanceof Hh)return e._internalPath;if(typeof e=="string")return wy(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const L4=new RegExp("[~\\*/\\[\\]]");function wy(t,e,n){if(e.search(L4)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hh(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(k.INVALID_ARGUMENT,a+t+l)}function gS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ey("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M4 extends yS{data(){return super.data()}}function Ey(t,e){return typeof e=="string"?wy(t,e):e instanceof Hh?e._internalPath:e._delegate._internalPath}/**
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
 */function vS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iy{}class V4 extends Iy{}function $4(t,e,...n){let r=[];e instanceof Iy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof xy).length,a=s.filter(l=>l instanceof Kh).length;if(o>1||o>0&&a>0)throw new F(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Kh extends V4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){const n=this._parse(e);return _S(e._query,n),new Ki(e.firestore,e.converter,Op(e._query,n))}_parse(e){const n=qh(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Z_(h,c);const p=[];for(const v of h)p.push(J_(l,s,v));d={arrayValue:{values:p}}}else d=J_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Z_(h,c),d=D4(a,o,h,c==="in"||c==="not-in");return He.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function j4(t,e,n){const r=e,i=Ey("where",t);return Kh._create(i,r,n)}class xy extends Iy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)_S(o,l),o=Op(o,l)}(e._query,n),new Ki(e.firestore,e.converter,Op(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function J_(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ET(e)&&n.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!H.isDocumentKey(r))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return E_(t,new H(r))}if(n instanceof Tt)return E_(t,n._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zh(n)}.`)}function Z_(t,e){if(!Array.isArray(t)||t.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _S(t,e){if(e.isInequality()){const r=Yg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new F(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=wT(t);s!==null&&F4(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function F4(t,e,n){if(!n.isEqual(e))throw new F(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class U4{convertValue(e,n="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yy(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const n=ti(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Te(BT(r));const i=new Da(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ES extends yS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ey("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wu extends ES{data(e={}){return super.data(e)}}class IS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wu(this._firestore,this._userDataWriter,r.key,r,new Vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new wu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new wu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:z4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function z4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Ty(t){t=Ft(t,Tt);const e=Ft(t.firestore,cr);return x4(Wh(e),t._key).then(n=>TS(e,t,n))}class Sy extends U4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function B4(t){t=Ft(t,Ki);const e=Ft(t.firestore,cr),n=Wh(e),r=new Sy(e);return vS(t._query),T4(n,t._query).then(i=>new IS(e,r,t,i))}function ky(t,e,n){t=Ft(t,Tt);const r=Ft(t.firestore,cr),i=wS(t.converter,e,n);return Yh(r,[fS(qh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function Si(t,e,n,...r){t=Ft(t,Tt);const i=Ft(t.firestore,cr),s=qh(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Hh?O4(s,"updateDoc",t._key,e,n,r):N4(s,"updateDoc",t._key,e),Yh(i,[o.toMutation(t._key,rn.exists(!0))])}function xS(t){return Yh(Ft(t.firestore,cr),[new Xg(t._key,rn.none())])}function W4(t,e){const n=Ft(t.firestore,cr),r=wt(t),i=wS(t.converter,e);return Yh(n,[fS(qh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function Qh(t,...e){var n,r,i;t=qe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||X_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(X_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Tt)u=Ft(t.firestore,cr),c=Oh(t._key.path),l={next:h=>{e[o]&&e[o](TS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ft(t,Ki);u=Ft(h.firestore,cr),c=h._query;const d=new Sy(u);l={next:p=>{e[o]&&e[o](new IS(u,d,h,p))},error:e[o+1],complete:e[o+2]},vS(t._query)}return function(d,p,v,_){const w=new my(_),g=new fy(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>cy(await Ec(d),g)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>hy(await Ec(d),g))}}(Wh(u),c,a,l)}function Yh(t,e){return function(r,i){const s=new er;return r.asyncQueue.enqueueAndForget(async()=>u4(await I4(r),i,s)),s.promise}(Wh(t),e)}function TS(t,e,n){const r=n.docs.get(e._key),i=new Sy(t);return new ES(t,i,e._key,r,new Vo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ao=i})(Bi),Ni(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new cr(new YL(r.getProvider("auth-internal")),new eM(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Da(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nn(g_,"4.1.0",e),Nn(g_,"4.1.0","esm2017")})();const H4={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},Cy=II(H4);VD(Cy);const As=uD(Cy),Fe=A4(Cy);function mn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ri(t){return!!t&&!!t[Re]}function hr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===e$}(t)||Array.isArray(t)||!!t[ow]||!!(!((e=t.constructor)===null||e===void 0)&&e[ow])||Ay(t)||Ry(t))}function $i(t,e,n){n===void 0&&(n=!1),ho(t)===0?(n?Object.keys:Ps)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function ho(t){var e=t[Re];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Ay(t)?2:Ry(t)?3:0}function Rs(t,e){return ho(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function q4(t,e){return ho(t)===2?t.get(e):t[e]}function SS(t,e,n){var r=ho(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function kS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Ay(t){return J4&&t instanceof Map}function Ry(t){return Z4&&t instanceof Set}function fi(t){return t.o||t.t}function Py(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=AS(t);delete e[Re];for(var n=Ps(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function by(t,e){return e===void 0&&(e=!1),Ny(t)||ri(t)||!hr(t)||(ho(t)>1&&(t.set=t.add=t.clear=t.delete=G4),Object.freeze(t),e&&$i(t,function(n,r){return by(r,!0)},!0)),t}function G4(){mn(2)}function Ny(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Mn(t){var e=qp[t];return e||mn(18,t),e}function K4(t,e){qp[t]||(qp[t]=e)}function Bp(){return $a}function ef(t,e){e&&(Mn("Patches"),t.u=[],t.s=[],t.v=e)}function xc(t){Wp(t),t.p.forEach(Q4),t.p=null}function Wp(t){t===$a&&($a=t.l)}function ew(t){return $a={p:[],l:$a,h:t,m:!0,_:0}}function Q4(t){var e=t[Re];e.i===0||e.i===1?e.j():e.g=!0}function tf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Mn("ES5").S(e,t,r),r?(n[Re].P&&(xc(e),mn(4)),hr(t)&&(t=Tc(e,t),e.l||Sc(e,t)),e.u&&Mn("Patches").M(n[Re].t,t,e.u,e.s)):t=Tc(e,n,[]),xc(e),e.u&&e.v(e.u,e.s),t!==CS?t:void 0}function Tc(t,e,n){if(Ny(e))return e;var r=e[Re];if(!r)return $i(e,function(a,l){return tw(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Sc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Py(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),$i(s,function(a,l){return tw(t,r,i,a,l,n,o)}),Sc(t,i,!1),n&&t.u&&Mn("Patches").N(r,n,t.u,t.s)}return r.o}function tw(t,e,n,r,i,s,o){if(ri(i)){var a=Tc(t,i,s&&e&&e.i!==3&&!Rs(e.R,r)?s.concat(r):void 0);if(SS(n,r,a),!ri(a))return;t.m=!1}else o&&n.add(i);if(hr(i)&&!Ny(i)){if(!t.h.D&&t._<1)return;Tc(t,i),e&&e.A.l||Sc(t,i)}}function Sc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&by(e,n)}function nf(t,e){var n=t[Re];return(n?fi(n):t)[e]}function nw(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Ar(t){t.P||(t.P=!0,t.l&&Ar(t.l))}function rf(t){t.o||(t.o=Py(t.t))}function Hp(t,e,n){var r=Ay(e)?Mn("MapSet").F(e,n):Ry(e)?Mn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Bp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=ja;o&&(l=[a],u=$o);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Mn("ES5").J(e,n);return(n?n.A:Bp()).p.push(r),r}function Y4(t){return ri(t)||mn(22,t),function e(n){if(!hr(n))return n;var r,i=n[Re],s=ho(n);if(i){if(!i.P&&(i.i<4||!Mn("ES5").K(i)))return i.t;i.I=!0,r=rw(n,s),i.I=!1}else r=rw(n,s);return $i(r,function(o,a){i&&q4(i.t,o)===a||SS(r,o,e(a))}),s===3?new Set(r):r}(t)}function rw(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Py(t)}function X4(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Re];return ja.get(l,s)},set:function(l){var u=this[Re];ja.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Re];if(!a.P)switch(a.i){case 5:r(a)&&Ar(a);break;case 4:n(a)&&Ar(a)}}}function n(s){for(var o=s.t,a=s.k,l=Ps(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Re){var h=o[c];if(h===void 0&&!Rs(o,c))return!0;var d=a[c],p=d&&d[Re];if(p?p.t!==h:!kS(d,h))return!0}}var v=!!o[Re];return l.length!==Ps(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};K4("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var v=AS(h);delete v[Re];for(var _=Ps(v),w=0;w<_.length;w++){var g=_[w];v[g]=t(g,c||!!v[g].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(a,s),u={i:a?5:4,A:o?o.A:Bp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Re,{value:u,writable:!0}),l},S:function(s,o,a){a?ri(o)&&o[Re].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Re];if(c){var h=c.t,d=c.k,p=c.R,v=c.i;if(v===4)$i(d,function(y){y!==Re&&(h[y]!==void 0||Rs(h,y)?p[y]||l(d[y]):(p[y]=!0,Ar(c)))}),$i(h,function(y){d[y]!==void 0||Rs(d,y)||(p[y]=!1,Ar(c))});else if(v===5){if(r(c)&&(Ar(c),p.length=!0),d.length<h.length)for(var _=d.length;_<h.length;_++)p[_]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var g=Math.min(d.length,h.length),f=0;f<g;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var iw,$a,Oy=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",J4=typeof Map<"u",Z4=typeof Set<"u",sw=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",CS=Oy?Symbol.for("immer-nothing"):((iw={})["immer-nothing"]=!0,iw),ow=Oy?Symbol.for("immer-draftable"):"__$immer_draftable",Re=Oy?Symbol.for("immer-state"):"__$immer_state",e$=""+Object.prototype.constructor,Ps=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,AS=Object.getOwnPropertyDescriptors||function(t){var e={};return Ps(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},qp={},ja={get:function(t,e){if(e===Re)return t;var n=fi(t);if(!Rs(n,e))return function(i,s,o){var a,l=nw(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!hr(r)?r:r===nf(t.t,e)?(rf(t),t.o[e]=Hp(t.A.h,r,t)):r},has:function(t,e){return e in fi(t)},ownKeys:function(t){return Reflect.ownKeys(fi(t))},set:function(t,e,n){var r=nw(fi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=nf(fi(t),e),s=i==null?void 0:i[Re];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(kS(n,i)&&(n!==void 0||Rs(t.t,e)))return!0;rf(t),Ar(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return nf(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,rf(t),Ar(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=fi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){mn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){mn(12)}},$o={};$i(ja,function(t,e){$o[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),$o.deleteProperty=function(t,e){return $o.set.call(this,t,e,void 0)},$o.set=function(t,e,n){return ja.set.call(this,t[0],e,n,t[0])};var t$=function(){function t(n){var r=this;this.O=sw,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(_){var w=this;_===void 0&&(_=a);for(var g=arguments.length,f=Array(g>1?g-1:0),y=1;y<g;y++)f[y-1]=arguments[y];return l.produce(_,function(E){var T;return(T=s).call.apply(T,[w,E].concat(f))})}}var u;if(typeof s!="function"&&mn(6),o!==void 0&&typeof o!="function"&&mn(7),hr(i)){var c=ew(r),h=Hp(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?xc(c):Wp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(_){return ef(c,o),tf(_,c)},function(_){throw xc(c),_}):(ef(c,o),tf(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===CS&&(u=void 0),r.D&&by(u,!0),o){var p=[],v=[];Mn("Patches").M(i,u,p,v),o(p,v)}return u}mn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){hr(n)||mn(8),ri(n)&&(n=Y4(n));var r=ew(this),i=Hp(this,n,void 0);return i[Re].C=!0,Wp(r),i},e.finishDraft=function(n,r){var i=n&&n[Re],s=i.A;return ef(s,r),tf(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!sw&&mn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Mn("Patches").$;return ri(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Gt=new t$,RS=Gt.produce;Gt.produceWithPatches.bind(Gt);Gt.setAutoFreeze.bind(Gt);Gt.setUseProxies.bind(Gt);Gt.applyPatches.bind(Gt);Gt.createDraft.bind(Gt);Gt.finishDraft.bind(Gt);function Fa(t){"@babel/helpers - typeof";return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fa(t)}function n$(t,e){if(Fa(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Fa(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function r$(t){var e=n$(t,"string");return Fa(e)==="symbol"?e:String(e)}function i$(t,e,n){return e=r$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function lw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?aw(Object(n),!0).forEach(function(r){i$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):aw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var uw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sf=function(){return Math.random().toString(36).substring(7).split("").join(".")},kc={INIT:"@@redux/INIT"+sf(),REPLACE:"@@redux/REPLACE"+sf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sf()}};function s$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Dy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(mt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(mt(1));return n(Dy)(t,e)}if(typeof t!="function")throw new Error(mt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(mt(3));return s}function h(_){if(typeof _!="function")throw new Error(mt(4));if(l)throw new Error(mt(5));var w=!0;return u(),a.push(_),function(){if(w){if(l)throw new Error(mt(6));w=!1,u();var f=a.indexOf(_);a.splice(f,1),o=null}}}function d(_){if(!s$(_))throw new Error(mt(7));if(typeof _.type>"u")throw new Error(mt(8));if(l)throw new Error(mt(9));try{l=!0,s=i(s,_)}finally{l=!1}for(var w=o=a,g=0;g<w.length;g++){var f=w[g];f()}return _}function p(_){if(typeof _!="function")throw new Error(mt(10));i=_,d({type:kc.REPLACE})}function v(){var _,w=h;return _={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(mt(11));function y(){f.next&&f.next(c())}y();var E=w(y);return{unsubscribe:E}}},_[uw]=function(){return this},_}return d({type:kc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[uw]=v,r}function o$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:kc.INIT});if(typeof r>"u")throw new Error(mt(12));if(typeof n(void 0,{type:kc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(mt(13))})}function PS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{o$(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],v=n[p],_=l[p],w=v(_,u);if(typeof w>"u")throw u&&u.type,new Error(mt(14));h[p]=w,c=c||w!==_}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Cc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function a$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(mt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Cc.apply(void 0,a)(i.dispatch),lw(lw({},i),{},{dispatch:s})}}}function bS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var NS=bS();NS.withExtraArgument=bS;const cw=NS;var OS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),l$=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Ys=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},u$=Object.defineProperty,c$=Object.defineProperties,h$=Object.getOwnPropertyDescriptors,hw=Object.getOwnPropertySymbols,d$=Object.prototype.hasOwnProperty,f$=Object.prototype.propertyIsEnumerable,dw=function(t,e,n){return e in t?u$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Kr=function(t,e){for(var n in e||(e={}))d$.call(e,n)&&dw(t,n,e[n]);if(hw)for(var r=0,i=hw(e);r<i.length;r++){var n=i[r];f$.call(e,n)&&dw(t,n,e[n])}return t},of=function(t,e){return c$(t,h$(e))},p$=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},m$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Cc:Cc.apply(null,arguments)};function g$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var y$=function(t){OS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Ys([void 0],n[0].concat(this)))):new(e.bind.apply(e,Ys([void 0],n.concat(this))))},e}(Array),v$=function(t){OS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Ys([void 0],n[0].concat(this)))):new(e.bind.apply(e,Ys([void 0],n.concat(this))))},e}(Array);function Gp(t){return hr(t)?RS(t,function(){}):t}function _$(t){return typeof t=="boolean"}function w$(){return function(e){return E$(e)}}function E$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new y$;return n&&(_$(n)?r.push(cw):r.push(cw.withExtraArgument(n.extraArgument))),r}var I$=!0;function x$(t){var e=w$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(g$(i))p=PS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(e));var _=a$.apply(void 0,v),w=Cc;l&&(w=m$(Kr({trace:!I$},typeof l=="object"&&l)));var g=new v$(_),f=g;Array.isArray(d)?f=Ys([_],d):typeof d=="function"&&(f=d(g));var y=w.apply(void 0,f);return Dy(p,c,y)}function Qr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Kr(Kr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function DS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function T$(t){return typeof t=="function"}function S$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?DS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(T$(t))l=function(){return Gp(t())};else{var u=Gp(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=Ys([s[d.type]],o.filter(function(v){var _=v.matcher;return _(d)}).map(function(v){var _=v.reducer;return _}));return p.filter(function(v){return!!v}).length===0&&(p=[a]),p.reduce(function(v,_){if(_)if(ri(v)){var w=v,g=_(w,d);return g===void 0?v:g}else{if(hr(v))return RS(v,function(f){return _(f,d)});var g=_(v,d);if(g===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return v},h)}return c.getInitialState=l,c}function k$(t,e){return t+"/"+e}function C$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Gp(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=k$(e,c),p,v;"reducer"in h?(p=h.reducer,v=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=v?Qr(d,v):Qr(d)});function l(){var c=typeof t.extraReducers=="function"?DS(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],v=p===void 0?[]:p,_=c[2],w=_===void 0?void 0:_,g=Kr(Kr({},d),o);return S$(n,function(f){for(var y in g)f.addCase(y,g[y]);for(var E=0,T=v;E<T.length;E++){var S=T[E];f.addMatcher(S.matcher,S.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var A$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",R$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=A$[Math.random()*64|0];return e},P$=["name","message","stack","code"],af=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),fw=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),b$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=P$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=Qr(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:of(Kr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=Qr(e+"/pending",function(u,c,h){return{payload:void 0,meta:of(Kr({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=Qr(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||b$)(u||"Rejected"),meta:of(Kr({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):R$(),v=new a,_;function w(f){_=f,v.abort()}var g=function(){return p$(this,null,function(){var f,y,E,T,S,b,P;return l$(this,function(q){switch(q.label){case 0:return q.trys.push([0,4,,5]),T=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),O$(T)?[4,T]:[3,2];case 1:T=q.sent(),q.label=2;case 2:if(T===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return S=new Promise(function(V,z){return v.signal.addEventListener("abort",function(){return z({name:"AbortError",message:_||"Aborted"})})}),c(s(p,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([S,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:v.signal,abort:w,rejectWithValue:function(V,z){return new af(V,z)},fulfillWithValue:function(V,z){return new fw(V,z)}})).then(function(V){if(V instanceof af)throw V;return V instanceof fw?i(V.payload,p,u,V.meta):i(V,p,u)})])];case 3:return E=q.sent(),[3,5];case 4:return b=q.sent(),E=b instanceof af?o(null,p,u,b.payload,b.meta):o(b,p,u),[3,5];case 5:return P=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,P||c(E),[2,E]}})})}();return Object.assign(g,{abort:w,requestId:p,arg:u,unwrap:function(){return g.then(N$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function N$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function O$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Ly="listenerMiddleware";Qr(Ly+"/add");Qr(Ly+"/removeAll");Qr(Ly+"/remove");var pw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);X4();const mw={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Ac=C$({name:"auth",initialState:mw,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>mw,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:LS,authStateChange:NF,authSignOut:D$,adminRole:L$,clearCashList:M$,addToFavoriteList:V$,setFavoriteList:$$,deleteFromFavoriteList:j$}=Ac.actions,F$=({email:t,password:e,userName:n})=>async(r,i)=>{await HN(As,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await KN(As.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=As.currentUser;r(LS({userId:s,userName:o}))},My=({email:t,password:e})=>async(n,r)=>{qN(As,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=As.currentUser;n(LS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(L$())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},U$=()=>async(t,e)=>{XN(As).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(D$())},z$=()=>(t,e)=>{t(M$())},B$=t=>(e,n)=>{e(V$(t))},Vy=t=>async(e,n)=>{const r=await Ty(wt(Fe,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e($$(i))}else console.log("No such document!")},W$=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o.name!==t.name)return o});e(j$(s))};function H$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22"}}]})(t)}function q$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22",transform:"matrix(-1 0 0 1 24 0)"}}]})(t)}function G$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function K$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function Q$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function $y(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function Y$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function X$(t){return gr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const J$=C.ul`
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
`,Z$=C.li`
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
`,ej=C.div`
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
`,tj=C.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,nj=C($y)`
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
`,rj=C(G$)`
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
`,ij=C(Y$)`
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
`,sj=C.ul`
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
`,oj=C.li`
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
`,aj=C.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,lj=C.p`
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
`;const uj=C.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,cj=C.div`
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
`,hj=C.div`
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
`,dj=C.h3``,fj=C.div`
  position: relative;
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
`,MS=C(H$)`
 background: black;
border:1px solid black;
border-radius: 50%;
padding:5px;
 position: absolute;
  top: 60px;
    left: 94px;
    width: 10px;
    height: 10px;
  cursor: pointer;
  z-index:5;
  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }
 
  }

   @media (min-width: 768px) {
    top: 115px;
  left: 175px;
padding:10px;
  width: 30px;
  height: 30px;
  }
    @media (min-width: 1440px) {
    top: 205px;
    left: 345px;
    padding: 15px;
  width: 50px;
  height: 50px;
  }`,VS=C(q$)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 60px;
  left: 13px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 5;
  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }

  @media (min-width: 768px) {
    top: 115px;
    left: 25px;
    padding: 10px;
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1440px) {
    top: 205px;
    left: 25px;
    padding: 15px;
    width: 50px;
    height: 50px;
  }
`,pj=C.div`
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
`,gw=C.button`
  width: 100%;
  background: black;
  color: white;
  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`,mj=C.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,gj=C.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,yj=C.div`
  display: flex;
`,vj=C(K$)`
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
`,_j=C($y)`
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
`,wj=C(Q$)`
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
`,Ej=C.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 9px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`,{addGoodToCashList:Ij,removeGoodFromCashList:xj}=Ac.actions,Tj=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(Ij({id:t,name:e,image:n,price:r}))},Sj=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(xj(s))};var $S={exports:{}},kj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Cj=kj,Aj=Cj;function jS(){}function FS(){}FS.resetWarningCache=jS;var Rj=function(){function t(r,i,s,o,a,l){if(l!==Aj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:FS,resetWarningCache:jS};return n.PropTypes=n,n};$S.exports=Rj();var Pj=$S.exports;const Ji=Yp(Pj),bj=C.div`
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
`,Nj=C.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  border: 2px solid black;
  cursor: pointer;
  background-position: 50% 50%;
  background-size: cover;
  @media (min-width: 768px) {
    width: 40%;
  }
`,Oj=C(MS)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 35%;
  right: 5%;
  left: auto;
  width: 55px;
  height: 55px;
  cursor: pointer;
  z-index: 1300;
  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }

  @media (min-width: 768px) {
    padding: 15px;
    width: 75px;
    height: 75px;
    right: 20%;
  }

  @media (min-width: 1440px) {
    padding: 15px;
    width: 105px;
    height: 105px;
  }
`,Dj=C(VS)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 35%;
  left: 10%;
  width: 55px;
  height: 55px;
  cursor: pointer;
  z-index: 1300;
  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }

  @media (min-width: 768px) {
    padding: 15px;
    width: 75px;
    height: 75px;
    left: 20%;
  }
  @media (min-width: 1440px) {
    padding: 15px;
    width: 105px;
    height: 105px;
  }
`;class US extends Pt.Component{constructor(){super(...arguments);mo(this,"nextImage",()=>{this.props.nextImage()});mo(this,"previousImage",()=>{this.props.previousImage()});mo(this,"keydown",n=>{n.keyCode===27&&this.props.onCloseModal()})}componentDidMount(){document.addEventListener("keydown",this.keydown)}componentWillUnmount(){document.removeEventListener("keydown",this.keydown)}render(){return m.jsxs(m.Fragment,{children:[this.props.currentImageIndex!==this.props.currentImageUrl.length-1&&typeof this.props.currentImageUrl!="string"&&m.jsx(Oj,{onClick:this.nextImage}),m.jsx(bj,{onClick:this.props.onCloseModal,children:m.jsx(Nj,{style:{backgroundImage:`url(${typeof this.props.currentImageUrl=="string"?this.props.currentImageUrl:this.props.currentImageUrl[this.props.currentImageIndex]})`}})}),this.props.currentImageIndex!==0&&typeof this.props.currentImageUrl!="string"&&m.jsx(Dj,{onClick:this.previousImage})]})}}mo(US,"propTypes",{onCloseModal:Ji.func.isRequired,currentImageUrl:Ji.string.isRequired||Ji.array.isRequired,nextImage:Ji.func.isRequired,previousImage:Ji.func.isRequired,currentImageIndex:Ji.number.isRequired});const Xh=({card:t,closeModal:e})=>{const n=mr(),r=zi(),[i,s]=I.useState(!1),o=an(un),[a,l]=I.useState(0);let u=o.favoriteList,c=u.length>0?o.favoriteList.map(S=>S.name):[];const h=S=>{S.currentTarget===S.target&&e()},d=S=>{(S.charCode||S.keyCode)===27&&e()},p=async()=>{await xS(wt(Fe,"goods",`${t.id}`)),e()},v=()=>{r(Tj(t))},_=async()=>{try{await Si(wt(Fe,"users",`${o.email}`),{favoriteList:[...u,t]})}catch(S){console.log(S)}},w=()=>{r(B$(t)),_()},g=async()=>{try{const S=u.filter(b=>{if(b.name!==t.name)return b});await Si(wt(Fe,"users",`${o.email}`),{favoriteList:S})}catch(S){console.log(S)}},f=()=>{g(),r(W$(t))};I.useEffect(()=>(document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}),[]);const y=()=>{l(S=>S+1)},E=()=>{l(S=>S-1)},T=()=>{s(!1)};return m.jsx(uj,{onClick:h,children:m.jsxs(cj,{onClick:h,children:[m.jsxs(hj,{children:[m.jsxs(yj,{children:[m.jsxs(gj,{children:[a!==0&&typeof t.image!="string"&&m.jsx(VS,{onClick:E}),m.jsx(fj,{style:{backgroundImage:`url(${typeof t.image=="string"?t.image:t.image[a]})`},onClick:()=>{s(!0)}}),a!==t.image.length-1&&typeof t.image!="string"&&m.jsx(MS,{onClick:y}),m.jsx(gw,{onClick:v,children:"Добавити до покупок"}),o.isLogIn&&(c.includes(t.name)?m.jsx(mj,{onClick:f,children:"Видалити з обранного"}):m.jsx(gw,{onClick:w,children:"Добавити до обранного"}))]}),m.jsxs(pj,{children:[m.jsx(dj,{children:t.name}),m.jsx(m.Fragment,{children:m.jsxs("p",{children:[m.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),m.jsx(m.Fragment,{children:m.jsxs("p",{children:[m.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&m.jsx(m.Fragment,{children:m.jsxs("p",{children:[m.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&m.jsx(m.Fragment,{children:m.jsxs("p",{children:[m.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&m.jsx(m.Fragment,{children:m.jsxs("p",{children:[m.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),m.jsxs("div",{children:[m.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),m.jsx(Ej,{children:t.otherInfo})]})]})]}),m.jsx(vj,{onClick:()=>e()}),o.role==="admin"&&m.jsxs(m.Fragment,{children:[m.jsx(_j,{onClick:()=>{p()}}),m.jsx(wj,{onClick:()=>{n("/admin",{state:t})}})]})]}),i&&m.jsx(US,{onCloseModal:T,currentImageIndex:a,currentImageUrl:t.image,nextImage:y,previousImage:E})]})})},Lj=()=>{const t=an(un),[e,n]=I.useState(!1),[r,i]=I.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return m.jsxs(m.Fragment,{children:[m.jsx(sj,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>m.jsx(m.Fragment,{children:m.jsx(oj,{onClick:()=>s(a),style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`},children:m.jsxs(aj,{children:[m.jsx(lj,{children:a.name}),m.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):m.jsx("div",{children:"Список обранного пустий"})}),e&&m.jsx(Xh,{card:r,closeModal:o})]})};function Eu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Eu=function(n){return typeof n}:Eu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Eu(t)}function lf(){}var Mj={getItem:lf,setItem:lf,removeItem:lf};function Vj(t){if((typeof self>"u"?"undefined":Eu(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function $j(t){var e="".concat(t,"Storage");return Vj(e)?self[e]:Mj}function jj(t){var e=$j(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const Or=jj("local"),Fj=({closeUserModal:t,typeModal:e})=>{const[n,r]=I.useState(e),[i,s]=I.useState(!1),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(""),[d,p]=I.useState(""),[v,_]=I.useState(""),[w,g]=I.useState(""),[f,y]=I.useState(""),[E,T]=I.useState(""),[S,b]=I.useState(""),[P,q]=I.useState(""),[V,z]=I.useState(""),[he,Se]=I.useState([]),[ke,Ce]=I.useState("info"),[Xt,rt]=I.useState(""),N=an(un),W=zi(),K=O=>{O.currentTarget===O.target&&t()},pe=O=>{(O.charCode||O.keyCode)===27&&t()};I.useEffect(()=>(document.body.addEventListener("keydown",pe),function(){document.body.removeEventListener("keydown",pe)}),[]);const L=O=>{a(O.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(O.target.value).toLowerCase())?u(""):u("Введіть повнe призвіще, ім'я, побатькові")},$=O=>{h(O.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(O.target.value).toLowerCase())?p(""):p("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},j=O=>{_(O.target.value),O.target.value.length<6?y("Довжина пароля повина бути від 6 символів"):y("")},Q=O=>{g(O.target.value),O.target.value!==v?T("Введені паролі нe співпадають"):T("")},x=O=>{b(O.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(O.target.value))?q(""):q("Номер невірного формату (наприклад '043*******')")},re=()=>{!l&&!d&&!f&&!E&&!P&&w&&o&&c&&v&&S&&V?(W(F$({email:c,password:v,userName:o})),D({name:o,email:c,password:v,userNumber:S,userPostAdress:V,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},D=async O=>{try{await ky(wt(Fe,"users",`${O.email}`),O)}catch(G){console.error("Error adding user: ",G)}},Ae=async()=>{try{W(My({email:c,password:v})),W(Vy(c)),await Si(wt(Fe,"users",`${c}`),{isLogIn:!0}),Or.setItem("userEmail",c),Or.setItem("userPassword",v),t()}catch(O){rt("Email не зареестрований або невіний пароль"),console.error("Error adding user: ",O)}},ue=async()=>{t(),W(U$()),Or.removeItem("userEmail"),Or.removeItem("userPassword");try{await Si(wt(Fe,"users",`${N.email}`),{isLogIn:!1})}catch(O){console.error("Error adding user: ",O)}},de=async()=>{const O=await Ty(wt(Fe,"users",`${N.email}`));if(O.exists()){const{name:G,userPostAdress:Le,userNumber:oe}=O.data();a(G),b(oe),z(Le)}};I.useEffect(()=>{N.email&&(de(),q(""))},[ke,W]);const te=async()=>{if(!P)try{await Si(wt(Fe,"users",`${N.email}`),{userNumber:S,userPostAdress:V}),Ce("info")}catch(O){console.error("Error change user: ",O)}},Ge=async()=>{try{(await B4($4(co(Fe,"orders"),j4("userEmail","==",`${N.email}`)))).forEach(G=>{Se(Le=>[...Le,{id:G.id,...G.data()}])}),Se(G=>G.sort((Le,oe)=>Le.postDate>oe.postDate?-1:1))}catch(O){console.error("Error take orders: ",O)}};return I.useEffect(()=>{Ge()},[W]),m.jsx(_2,{onClick:K,children:m.jsx(w2,{onClick:K,children:m.jsxs(E2,{children:[n==="SignIn"&&m.jsxs(jl,{id:"userFormSignIn",children:[m.jsx(Yi,{children:"Контактні дані"}),m.jsx(Tn,{required:!0,name:"name",value:o,onChange:O=>{L(O)},placeholder:"Введіть ПІБ",style:l?{borderColor:"red"}:{}}),l&&m.jsx(zn,{children:l}),m.jsx(Tn,{required:!0,name:"email",value:c,onChange:O=>{$(O)},placeholder:"Введіть контактну електронну адресу",style:d?{borderColor:"red"}:{}}),d&&m.jsx(zn,{children:d}),m.jsx(Tn,{required:!0,name:"password",value:v,onChange:O=>{j(O)},placeholder:"Введіть пароль",autoComplete:"on",minlength:"5",style:f?{borderColor:"red"}:{}}),f&&m.jsx(zn,{children:f}),m.jsx(Tn,{required:!0,name:"passwordDublicate",value:w,onChange:O=>{Q(O)},placeholder:"Повторіть пароль",style:E?{borderColor:"red"}:{}}),E&&m.jsx(zn,{children:E}),m.jsx(Tn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:P?{borderColor:"red"}:{}}),P&&m.jsx(zn,{children:P}),m.jsx(Tn,{value:V,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),m.jsx(zn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),m.jsx(Fl,{style:i?{backgroundColor:"red"}:{},onClick:re,children:"Зареєструватись"})]}),n==="LogIn"&&m.jsxs(jl,{id:"userFormLogIn",children:[m.jsx(Yi,{children:"E-mail:"}),m.jsx(Tn,{required:!0,name:"email",value:c,onChange:O=>{h(O.target.value)}}),m.jsx(Yi,{children:"Пароль:"}),m.jsx(Tn,{required:!0,name:"password",value:v,onChange:O=>{_(O.target.value)}}),Xt&&m.jsx(zn,{children:Xt}),m.jsx(Fl,{onClick:Ae,children:"Увійти"})]}),n==="Config"&&m.jsxs(m.Fragment,{children:[m.jsxs(I2,{children:[m.jsx(Ml,{onClick:()=>{Ce("info")},children:"Користувач"}),m.jsx(Ml,{onClick:()=>{Ce("change")},children:"Зміна данних"}),m.jsx(Ml,{onClick:()=>{Ce("favorite")},children:"Обране"}),m.jsx(Ml,{onClick:()=>{Ce("history")},children:"Історія покупок"})]}),ke==="info"&&m.jsxs(jl,{id:"userFormConfig",children:[m.jsx(Yi,{children:"Інформація користувача"}),m.jsxs(x2,{children:[m.jsx(Vl,{children:"Призвіще, ім'я, по батькові:"}),m.jsx($l,{children:o}),m.jsx(Vl,{children:"E-mail:"}),m.jsx($l,{children:N.email}),m.jsx(Vl,{children:"Номер телефону:"}),m.jsxs($l,{children:[" ",S]}),m.jsx(Vl,{children:'Відділення "Нова пошти":'}),m.jsx($l,{children:V})]}),m.jsx(Fl,{onClick:ue,children:"Вийти з аккаунта"})]}),ke==="change"&&m.jsxs(jl,{id:"userFormConfig",children:[m.jsx(Yi,{children:"Зміна данних"}),m.jsx(Tn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:P?{borderColor:"red"}:{}}),P&&m.jsx(zn,{children:P}),m.jsx(Tn,{value:V,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),m.jsx(zn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),m.jsx(Fl,{onClick:te,children:"Змінити дані"})]}),ke==="favorite"&&m.jsx(Lj,{}),ke==="history"&&m.jsxs(S2,{children:[m.jsx(Yi,{children:"Історія покупок"}),m.jsx(S0,{children:"Для додаткової інформації чи відказу від замовлення"}),m.jsx(S0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),m.jsx(A2,{children:he.map(O=>m.jsxs(R2,{children:[m.jsx(T2,{style:O.status==="take"?{backgroundColor:"yellow"}:O.status==="send"?{backgroundColor:"green"}:{}}),m.jsxs(Un,{children:[m.jsxs(Un,{children:["Статус:",O.status==="create"&&" Замовлення оформлене",O.status==="take"&&" Прийняте",O.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(O.postDate.seconds)]}),m.jsxs(Un,{children:["ФІП: ",O.userFullName]}),m.jsxs(Un,{children:["Email: ",O.userEmail]}),m.jsxs(Un,{children:["Номер телефону: ",O.userNumber]}),m.jsxs(Un,{children:["Адрес Нової почти: ",O.userPostAdress]}),m.jsx(Un,{children:"Список замовлення:"}),O.cashList.map(G=>m.jsxs(k2,{children:[m.jsx(C2,{style:{backgroundImage:`url(${typeof G.image=="string"?G.image:G.image[0]})`}}),m.jsxs(Un,{children:["Назва: ",G.name]}),m.jsxs(Un,{children:["Ціна: ",G.price]})]}))]}))})]})]})]})})})},Uj=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(""),s=an(un).isLogIn,o=()=>{e(!1)};return m.jsxs(m.Fragment,{children:[s?m.jsx(m.Fragment,{children:m.jsx(bd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):m.jsxs(v2,{children:[m.jsx(bd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),m.jsx(bd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&m.jsx(Fj,{closeUserModal:o,typeModal:n})]})},zj=()=>{const{cashList:t}=an(un),e=mr(),n=pr().pathname,r=zi();I.useEffect(()=>{localStorage.getItem("userEmail")&&localStorage.getItem("userPassword")&&i()},[]);const i=async()=>{const s=await localStorage.getItem("userEmail"),o=await localStorage.getItem("userPassword");r(My({email:s,password:o})),r(Vy(s))};return m.jsxs(l2,{children:[m.jsxs(u2,{children:[m.jsx(p2,{}),n!=="/checkout"&&m.jsxs(m.Fragment,{children:[m.jsx(y2,{}),m.jsx(Uj,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&m.jsxs(h2,{children:[m.jsx(c2,{onClick:()=>{e("/cashList")}}),m.jsx(d2,{children:t.length})]})]})},Bj=()=>m.jsxs(m.Fragment,{children:[m.jsx(zj,{}),m.jsx(I.Suspense,{fallback:m.jsx("div",{children:"Loading..."}),children:m.jsx(hR,{})})]}),jy=C.ul`
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
`,Fy=C.li`
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
`,Uy=C.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,zy=C.p`
  width: 90%;
`,By=C.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,Wy=C(X$)`
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
`,Wj=C.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,Kp=C.select`
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
`,qn=C.option``,Jl=C.input`
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
`,yw=C.textarea`
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
`,zS=C.button`
  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,Hj=C(jy)`
  flex-direction: column;
`,qj=C.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,Gj=C.li`
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
`,Kj=C.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,Qj=C(zS)`
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
`,Yj=()=>{const[t,e]=I.useState([]),n=an(un),r=[],i=mr(),[s,o]=I.useState(!1),[a,l]=I.useState();let u=new Date().getTime()/1e3;const c=p=>{l(p),o(!0)},h=()=>{o(!1)},d=async()=>{Qh(co(Fe,"goods"),p=>{e(p.docs.map(v=>({...v.data(),id:v.id})).sort((v,_)=>v.createTime.seconds>_.createTime.seconds?-1:1))})};return I.useEffect(()=>{d()},[]),t.map(p=>{r.includes(p.category)||r.push(p.category)}),r.sort(),m.jsxs(m.Fragment,{children:[m.jsx(Hj,{children:r.map(p=>m.jsxs(Gj,{children:[m.jsx(qj,{children:p}),m.jsx(Kj,{children:t.map((v,_)=>{if(v.category===p)return m.jsxs(Fy,{onClick:()=>c(v),style:{backgroundImage:`url(${typeof v.image=="string"?v.image:v.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(w=>{if(w.name===v.name)return m.jsx(Wy,{})}),u-v.createTime.seconds<259200&&m.jsx(By,{children:"Новинка!"}),m.jsxs(Uy,{children:[m.jsx(zy,{children:v.name}),m.jsxs("p",{children:[v.price," грн."]})]})]},_)})}),m.jsx(Qj,{onClick:()=>i("/search",{state:{category:p}}),children:"Побачити більше"})]}))}),s&&m.jsx(Xh,{card:a,closeModal:h})]})},Xj=C.div`
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
`,Jj=C.input`
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
`,Zj=C(Kp)`
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
`,eF=C.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,BS=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let wi=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const tF=()=>{const e=pr().state,n=an(un),[r,i]=I.useState([]),[s,o]=I.useState(r),[a,l]=I.useState(!1),[u,c]=I.useState(),[h,d]=I.useState(""),[p,v]=I.useState(e&&e.category?e.category:"");let _=new Date().getTime()/1e3;const w=y=>{c(y),l(!0)},g=()=>{l(!1)},f=()=>{Qh(co(Fe,"goods"),y=>{i(y.docs.map(E=>({...E.data(),id:E.id})).sort((E,T)=>E.createTime.seconds>T.createTime.seconds?-1:1))})};return I.useEffect(()=>{f()},[]),I.useEffect(()=>{if(h.length>0){let y=r.filter(E=>E.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())&&E.category.toLocaleLowerCase().includes(p.toLocaleLowerCase()));o(y)}else{let y=r.filter(E=>E.category.toLocaleLowerCase().includes(p.toLocaleLowerCase()));o(y)}},[h,p,r]),m.jsxs(Xj,{children:[m.jsx(Jj,{placeholder:"Назва товару",onChange:y=>{d(y.target.value)}}),m.jsxs(Zj,{id:"category",name:"category",value:p,onChange:y=>{v(y.target.value)},children:[m.jsx(qn,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},wi()),BS.map((y,E)=>y.category?m.jsx("optgroup",{label:`${y.name}`,children:y.category&&y.category.map(T=>m.jsx(qn,{value:`${T}`,selected:p===T&&"selected"||null,children:T},wi()))},wi()):m.jsx(qn,{value:`${y.name}`,style:{fontWeight:"bolder"},selected:p===y.name&&"selected"||null,children:y.name},wi()))]}),m.jsx(jy,{children:s.length>0?s.map((y,E)=>m.jsx(m.Fragment,{children:m.jsxs(Fy,{onClick:()=>w(y),style:{backgroundImage:`url(${typeof y.image=="string"?y.image:y.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(T=>{if(T.name===y.name)return m.jsx(Wy,{})}),_-y.createTime.seconds<259200&&m.jsx(By,{children:"Новинка!"}),m.jsxs(Uy,{children:[m.jsx(zy,{children:y.name}),m.jsxs("p",{children:[y.price," грн."]})]})]},E)})):m.jsxs(eF,{children:[m.jsx("p",{children:"Нічого не знайдено"}),m.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),a&&m.jsx(Xh,{card:u,closeModal:g})]})},nF=()=>{const[t,e]=I.useState([]),n=()=>{Qh(co(Fe,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})).sort((a,l)=>a.postDate.seconds>l.postDate.seconds?-1:1))})},r=async o=>{await xS(wt(Fe,"orders",`${o}`))},i=async o=>{await Si(wt(Fe,"orders",`${o}`),{status:"take"})},s=async o=>{await Si(wt(Fe,"orders",`${o}`),{status:"send"})};return I.useEffect(()=>{n()}),m.jsx(J$,{children:t.map(o=>m.jsxs(Z$,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[m.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),m.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(o.postDate.seconds)]}),m.jsxs("p",{children:["ФІП: ",o.userFullName]}),m.jsxs("p",{children:["Email: ",o.userEmail]}),m.jsxs("p",{children:["Номер телефону:",o.userNumber]}),m.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),m.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>m.jsxs(m.Fragment,{children:[m.jsx(ej,{style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`}}),m.jsxs("p",{children:["Id товару: ",a.id]}),m.jsxs("p",{children:["Назва: ",a.name]}),m.jsxs("p",{children:["Ціна: ",a.price]})]})),m.jsxs(tj,{children:[m.jsx(nj,{onClick:()=>r(o.id)}),m.jsx(rj,{onClick:()=>i(o.id)}),m.jsx(ij,{onClick:()=>s(o.id)})]})]}))})},rF=()=>{const{role:t}=an(un),e=mr(),r=pr().state,i=zi(),[s,o]=I.useState(r?r.image:""),[a,l]=I.useState(r?r.name:""),[u,c]=I.useState(r?r.price:""),[h,d]=I.useState(r?r.producent:""),[p,v]=I.useState(r?r.size:""),[_,w]=I.useState(r?r.otherInfo:""),g=async f=>{try{r?(await ky(wt(Fe,"goods",`${f.id}`),f),alert("Change success")):(await W4(co(Fe,"goods"),f),alert("Add success"))}catch(y){console.error("Error adding document: ",y)}};return I.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(y){y.preventDefault();const{image:E,name:T,price:S,sex:b,producent:P,category:q,size:V,otherInfo:z}=this.elements,Se={image:E.value.split(" ").filter(ke=>{if(ke)return ke}),name:T.value,price:S.value,sex:b.value||"",producent:P.value||"",category:q.value,size:V.value||"",otherInfo:z.value||"",createTime:new Date};g(Se),this.reset()})},[i]),I.useEffect(()=>{t!="admin"&&e("/")}),m.jsxs(m.Fragment,{children:[m.jsxs(Wj,{id:"form",children:[m.jsx("p",{children:"Малюнок"}),m.jsx(yw,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:s,onChange:f=>o(f.target.value)}),m.jsx("p",{children:"Назва"}),m.jsx(Jl,{required:!0,name:"name",placeholder:"Додати назву",value:a,onChange:f=>l(f.target.value)}),m.jsx("p",{children:"Ціна в гривнях"}),m.jsx(Jl,{required:!0,name:"price",placeholder:"Додати ціну",value:u,onChange:f=>c(f.target.value)}),m.jsx("p",{children:"Категорія"}),m.jsxs(Kp,{id:"category",name:"category",children:[m.jsx(qn,{value:"",children:"Вкажіть категорію"}),BS.map((f,y)=>f.category?m.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>m.jsx(qn,{value:`${E}`,selected:r&&r.category===E&&"selected"||null,children:E},wi()))},wi()):m.jsx(qn,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===f.name&&"selected"||null,children:f.name},wi()))]}),m.jsx("p",{children:"Рід"}),m.jsxs(Kp,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[m.jsx(qn,{value:"",children:"Без роду"}),m.jsx(qn,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),m.jsx(qn,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),m.jsx("p",{children:"Розмір"}),m.jsx(Jl,{name:"size",placeholder:"Додати розмір",value:p,onChange:f=>v(f.target.value)}),m.jsx("p",{children:"Виробник"}),m.jsx(Jl,{name:"producent",placeholder:"Додати виробника",value:h,onChange:f=>d(f.target.value)}),m.jsx("p",{children:"Додаткова інформація"}),m.jsx(yw,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:_,onChange:f=>w(f.target.value)}),m.jsx(zS,{children:r?"Зілити зміни":"Залити новий товар"})]}),m.jsx("h3",{children:"Замовлення"}),m.jsx(nF,{})]})},iF=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState(),o=an(un),a=zi();let l=new Date().getTime()/1e3;I.useEffect(()=>{Or.getItem("userEmail")&&Or.getItem("userPassword")&&u()},[]);const u=async()=>{const p=await Or.getItem("userEmail"),v=await Or.getItem("userPassword");a(My({email:p,password:v})),a(Vy(p))},c=p=>{s(p),r(!0)},h=()=>{r(!1)},d=()=>{Qh(co(Fe,"goods"),p=>{e(p.docs.map(v=>({...v.data(),id:v.id})).sort((v,_)=>v.createTime.seconds>_.createTime.seconds?-1:1))})};return I.useEffect(()=>{d()},[]),m.jsxs(m.Fragment,{children:[m.jsx(jy,{id:"cardList",children:t.length>0&&t.map((p,v)=>m.jsx(m.Fragment,{children:m.jsxs(Fy,{onClick:()=>c(p),style:{backgroundImage:`url(${typeof p.image=="string"?p.image:p.image[0]})`},children:[o.favoriteList&&o.favoriteList.map(_=>{if(_.name===p.name)return m.jsx(Wy,{})}),l-p.createTime.seconds<259200&&m.jsx(By,{children:"Новинка!"}),m.jsxs(Uy,{children:[m.jsx(zy,{children:p.name}),m.jsxs("p",{children:[p.price," грн."]})]})]},p.id)}))}),n&&m.jsx(Xh,{card:i,closeModal:h})]})},sF=C.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,oF=C.div`
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
`,aF=C.div`
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
`,lF=C.li`
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
`,uF=C.div`
  width: 50%;
`,cF=C.h3``,hF=C.p``,dF=C.button`
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
`,fF=C($y)`
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
`,pF=C.button`
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
`,mF=()=>{const{cashList:t}=an(un),e=zi(),n=mr();return m.jsxs(oF,{children:[m.jsx(sF,{children:"Список товарів"}),t.length>0?m.jsxs(m.Fragment,{children:[t.map((r,i)=>m.jsxs(lF,{children:[m.jsx(aF,{style:{backgroundImage:`url(${typeof r.image=="string"?r.image:r.image[0]})`}}),m.jsxs(uF,{children:[m.jsx(cF,{children:r.name}),m.jsxs(hF,{children:[r.price," грн."]})]}),m.jsx(dF,{onClick:()=>e(Sj(i)),children:m.jsx(fF,{})})]})),m.jsx(pF,{onClick:()=>n("/checkout"),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},gF=C.div`
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
`,yF=C.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,Zl=C.input`
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
`,ko=C.div`
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
`,vF=C.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,vw=C.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,_F=()=>{const t=an(un),[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(""),[h,d]=I.useState(""),[p,v]=I.useState(""),[_,w]=I.useState(""),[g,f]=I.useState(!1),y=zi(),E=mr(),T=async()=>{const z=await Ty(wt(Fe,"users",`${t.email}`));if(z.exists()){const{name:he,userPostAdress:Se,userNumber:ke,email:Ce}=z.data();o(Ce),n(he),i(ke),l(Se)}else console.log("No such document!")};I.useEffect(()=>{t.email&&T()},[t]);const S=z=>{n(z.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(z.target.value).toLowerCase())?c(""):c("Введіть повнe призвіще, ім'я, побатькові")},b=z=>{o(z.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(z.target.value).toLowerCase())?d(""):d("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},P=z=>{i(z.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(z.target.value))?v(""):v("Номер невірного формату (наприклад: '043*******')")},q=z=>{l(z.target.value),z.target.value.length>0?w(""):w("Адрес відділення пошти пустий")},V=async()=>{if(s&&e&&r&&a&&!h&&!p&&!u&&!_)try{const z=new Date,he=z.getFullYear()+"-"+(z.getMonth()+1)+"-"+z.getDate()+" "+z.getHours()+":"+z.getMinutes()+":"+z.getSeconds();await ky(wt(Fe,"orders",`${he}`),{userFullName:e,userNumber:r,userEmail:s,userPostAdress:a,postDate:he,id:`${s}${he}`,status:"create",cashList:t.cashList}),y(z$()),E("/")}catch(z){console.log(z)}else f(!0)};return I.useEffect(()=>{!h&&!p&&!u&&!_&&f(!1)}),m.jsxs(gF,{id:"CheckoutForm",children:[m.jsx(yF,{children:"Контактні дані"}),m.jsx(Zl,{required:!0,name:"name",value:e,onChange:z=>{S(z)},placeholder:"Введіть ПІБ",style:u?{borderColor:"red"}:{}}),u&&m.jsx(ko,{children:u}),m.jsx(Zl,{value:r,onChange:z=>{P(z)},placeholder:"Введіть контактний номер телефону",style:p?{borderColor:"red"}:{}}),p&&m.jsx(ko,{children:p}),m.jsx(Zl,{required:!0,name:"email",value:s,onChange:z=>{b(z)},placeholder:"Введіть контактну електронну адресу",style:h?{borderColor:"red"}:{}}),h&&m.jsx(ko,{children:h}),m.jsx(Zl,{value:a,onChange:z=>{q(z)},placeholder:"Введіть адресу відділення пошти",style:_?{borderColor:"red"}:{}}),_&&m.jsx(ko,{children:_}),m.jsx(ko,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),m.jsx(vw,{children:"Для додаткової інформації чи відказу від замовлення"}),m.jsx(vw,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),m.jsx(vF,{onClick:V,style:g?{background:"red"}:{},children:g?"Невірно заповнена форма":"Завершити оформлення замовлення"})]})};function wF(){return m.jsxs(fR,{children:[m.jsxs(Bn,{path:"/",element:m.jsx(Bj,{}),children:[m.jsx(Bn,{index:!0,element:m.jsx(iF,{})}),m.jsx(Bn,{path:"category",element:m.jsx(Yj,{})}),m.jsx(Bn,{path:"search",element:m.jsx(tF,{})}),m.jsx(Bn,{path:"admin",element:m.jsx(rF,{})}),m.jsx(Bn,{path:"cashList",element:m.jsx(mF,{})}),m.jsx(Bn,{path:"checkout",element:m.jsx(_F,{})})]}),m.jsx(Bn,{path:"*",element:m.jsx(cR,{to:"/"})})]})}var WS="persist/FLUSH",Hy="persist/REHYDRATE",HS="persist/PAUSE",qS="persist/PERSIST",GS="persist/PURGE",qy="persist/REGISTER";function _w(t){return xF(t)||IF(t)||EF()}function EF(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function IF(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function xF(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function ww(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ww(n,!0).forEach(function(r){TF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ww(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function TF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var KS={registry:[],bootstrapped:!1},SF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:KS,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case qy:return Qp({},e,{registry:[].concat(_w(e.registry),[n.key])});case Hy:var r=e.registry.indexOf(n.key),i=_w(e.registry);return i.splice(r,1),Qp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function kF(t,e,n){var r=n||!1,i=Dy(SF,KS,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:qy,key:u})},o=function(u,c,h){var d={type:Hy,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Qp({},i,{purge:function(){var u=[];return t.dispatch({type:GS,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:WS,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:HS})},persist:function(){t.dispatch({type:qS,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const CF=PS({[Ac.name]:Ac.reducer}),QS=x$({reducer:CF,middleware:t=>t({serializableCheck:{ignoredActions:[WS,Hy,HS,qS,GS,qy]}})});kF(QS);uf.createRoot(document.getElementById("root")).render(m.jsx(Pt.StrictMode,{children:m.jsx(vR,{basename:"Oleg_Shop",children:m.jsx(yP,{store:QS,children:m.jsx(wF,{})})})}));
