var uA=Object.defineProperty;var cA=(t,e,n)=>e in t?uA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Io=(t,e,n)=>(cA(t,typeof e!="symbol"?e+"":e,n),n);function hA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function om(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ow={exports:{}},$c={},Dw={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),dA=Symbol.for("react.portal"),fA=Symbol.for("react.fragment"),pA=Symbol.for("react.strict_mode"),mA=Symbol.for("react.profiler"),gA=Symbol.for("react.provider"),yA=Symbol.for("react.context"),vA=Symbol.for("react.forward_ref"),_A=Symbol.for("react.suspense"),wA=Symbol.for("react.memo"),EA=Symbol.for("react.lazy"),ov=Symbol.iterator;function IA(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var Lw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mw=Object.assign,Vw={};function so(t,e,n){this.props=t,this.context=e,this.refs=Vw,this.updater=n||Lw}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $w(){}$w.prototype=so.prototype;function am(t,e,n){this.props=t,this.context=e,this.refs=Vw,this.updater=n||Lw}var lm=am.prototype=new $w;lm.constructor=am;Mw(lm,so.prototype);lm.isPureReactComponent=!0;var av=Array.isArray,Fw=Object.prototype.hasOwnProperty,um={current:null},jw={key:!0,ref:!0,__self:!0,__source:!0};function Uw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fw.call(e,r)&&!jw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qa,type:t,key:s,ref:o,props:i,_owner:um.current}}function xA(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function TA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TA(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qa:case dA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hd(o,0):r,av(i)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),lu(i,e,n,"",function(u){return u})):i!=null&&(cm(i)&&(i=xA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hd(s,a);o+=lu(s,e,n,l,i)}else if(l=IA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hd(s,a++),o+=lu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sl(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},uu={transition:null},AA={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:uu,ReactCurrentOwner:um};ue.Children={map:Sl,forEach:function(t,e,n){Sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sl(t,function(){e++}),e},toArray:function(t){return Sl(t,function(e){return e})||[]},only:function(t){if(!cm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=so;ue.Fragment=fA;ue.Profiler=mA;ue.PureComponent=am;ue.StrictMode=pA;ue.Suspense=_A;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AA;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=um.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fw.call(e,l)&&!jw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qa,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:yA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gA,_context:t},t.Consumer=t};ue.createElement=Uw;ue.createFactory=function(t){var e=Uw.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:vA,render:t}};ue.isValidElement=cm;ue.lazy=function(t){return{$$typeof:EA,_payload:{_status:-1,_result:t},_init:SA}};ue.memo=function(t,e){return{$$typeof:wA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return Ot.current.useCallback(t,e)};ue.useContext=function(t){return Ot.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Ot.current.useEffect(t,e)};ue.useId=function(){return Ot.current.useId()};ue.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Ot.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};ue.useRef=function(t){return Ot.current.useRef(t)};ue.useState=function(t){return Ot.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Ot.current.useTransition()};ue.version="18.2.0";Dw.exports=ue;var I=Dw.exports;const bt=om(I),uv=hA({__proto__:null,default:bt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kA=I,CA=Symbol.for("react.element"),RA=Symbol.for("react.fragment"),PA=Object.prototype.hasOwnProperty,bA=kA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NA={key:!0,ref:!0,__self:!0,__source:!0};function zw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PA.call(e,r)&&!NA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CA,type:t,key:s,ref:o,props:i,_owner:bA.current}}$c.Fragment=RA;$c.jsx=zw;$c.jsxs=zw;Ow.exports=$c;var g=Ow.exports,wf={},Bw={exports:{}},Yt={},Ww={exports:{}},Hw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var Y=N.length;N.push(K);e:for(;0<Y;){var _e=Y-1>>>1,L=N[_e];if(0<i(L,K))N[_e]=K,N[Y]=L,Y=_e;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var K=N[0],Y=N.pop();if(Y!==K){N[0]=Y;e:for(var _e=0,L=N.length,F=L>>>1;_e<F;){var j=2*(_e+1)-1,X=N[j],x=j+1,ae=N[x];if(0>i(X,Y))x<L&&0>i(ae,X)?(N[_e]=ae,N[x]=Y,_e=x):(N[_e]=X,N[j]=Y,_e=j);else if(x<L&&0>i(ae,Y))N[_e]=ae,N[x]=Y,_e=x;else break e}}return K}function i(N,K){var Y=N.sortIndex-K.sortIndex;return Y!==0?Y:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,_=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=N)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(N){if(y=!1,v(N),!_)if(n(l)!==null)_=!0,oe(T);else{var K=n(u);K!==null&&ce(E,K.startTime-N)}}function T(N,K){_=!1,y&&(y=!1,m(R),R=-1),p=!0;var Y=d;try{for(v(K),h=n(l);h!==null&&(!(h.expirationTime>K)||N&&!z());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var L=_e(h.expirationTime<=K);K=t.unstable_now(),typeof L=="function"?h.callback=L:h===n(l)&&r(l),v(K)}else r(l);h=n(l)}if(h!==null)var F=!0;else{var j=n(u);j!==null&&ce(E,j.startTime-K),F=!1}return F}finally{h=null,d=Y,p=!1}}var S=!1,b=null,R=-1,G=5,$=-1;function z(){return!(t.unstable_now()-$<G)}function fe(){if(b!==null){var N=t.unstable_now();$=N;var K=!0;try{K=b(!0,N)}finally{K?B():(S=!1,b=null)}}else S=!1}var B;if(typeof f=="function")B=function(){f(fe)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=fe,B=function(){J.postMessage(null)}}else B=function(){w(fe,0)};function oe(N){b=N,S||(S=!0,B())}function ce(N,K){R=w(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,oe(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Y=d;d=K;try{return N()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=d;d=N;try{return K()}finally{d=Y}},t.unstable_scheduleCallback=function(N,K,Y){var _e=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,N){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,N={id:c++,callback:K,priorityLevel:N,startTime:Y,expirationTime:L,sortIndex:-1},Y>_e?(N.sortIndex=Y,e(u,N),n(l)===null&&N===n(u)&&(y?(m(R),R=-1):y=!0,ce(E,Y-_e))):(N.sortIndex=L,e(l,N),_||p||(_=!0,oe(T))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var K=d;return function(){var Y=d;d=K;try{return N.apply(this,arguments)}finally{d=Y}}}})(Hw);Ww.exports=Hw;var OA=Ww.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw=I,Gt=OA;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gw=new Set,ua={};function qi(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(ua[t]=e,t=0;t<e.length;t++)Gw.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=Object.prototype.hasOwnProperty,DA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv={},hv={};function LA(t){return Ef.call(hv,t)?!0:Ef.call(cv,t)?!1:DA.test(t)?hv[t]=!0:(cv[t]=!0,!1)}function MA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VA(t,e,n,r){if(e===null||typeof e>"u"||MA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hm=/[\-:]([a-z])/g;function dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hm,dm);dt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hm,dm);dt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hm,dm);dt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fm(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VA(e,n,i,r)&&(n=null),r||i===null?LA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),pm=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),Kw=Symbol.for("react.provider"),Qw=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),gm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Yw=Symbol.for("react.offscreen"),dv=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,dd;function Do(t){if(dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dd=e&&e[1]||""}return`
`+dd+t}var fd=!1;function pd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function $A(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function Sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case If:return"Profiler";case pm:return"StrictMode";case xf:return"Suspense";case Tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qw:return(t.displayName||"Context")+".Consumer";case Kw:return(t._context.displayName||"Context")+".Provider";case mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gm:return e=t.displayName||null,e!==null?e:Sf(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return Sf(t(e))}catch{}}return null}function FA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sf(e);case 8:return e===pm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jA(t){var e=Xw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kl(t){t._valueTracker||(t._valueTracker=jA(t))}function Jw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Af(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zw(t,e){e=e.checked,e!=null&&fm(t,"checked",e,!1)}function kf(t,e){Zw(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Lo(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function e1(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cl,n1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UA=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){UA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function r1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function i1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zA=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(zA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Of=null;function ym(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Df=null,Ts=null,Ss=null;function yv(t){if(t=Ja(t)){if(typeof Df!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Bc(e),Df(t.stateNode,t.type,e))}}function s1(t){Ts?Ss?Ss.push(t):Ss=[t]:Ts=t}function o1(){if(Ts){var t=Ts,e=Ss;if(Ss=Ts=null,yv(t),e)for(t=0;t<e.length;t++)yv(e[t])}}function a1(t,e){return t(e)}function l1(){}var md=!1;function u1(t,e,n){if(md)return t(e,n);md=!0;try{return a1(t,e,n)}finally{md=!1,(Ts!==null||Ss!==null)&&(l1(),o1())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Lf=!1;if(ar)try{var To={};Object.defineProperty(To,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Lf=!1}function BA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,bu=null,Nu=!1,Mf=null,WA={onError:function(t){Qo=!0,bu=t}};function HA(t,e,n,r,i,s,o,a,l){Qo=!1,bu=null,BA.apply(WA,arguments)}function qA(t,e,n,r,i,s,o,a,l){if(HA.apply(this,arguments),Qo){if(Qo){var u=bu;Qo=!1,bu=null}else throw Error(C(198));Nu||(Nu=!0,Mf=u)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vv(t){if(Gi(t)!==t)throw Error(C(188))}function GA(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vv(i),t;if(s===r)return vv(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function h1(t){return t=GA(t),t!==null?d1(t):null}function d1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d1(t);if(e!==null)return e;t=t.sibling}return null}var f1=Gt.unstable_scheduleCallback,_v=Gt.unstable_cancelCallback,KA=Gt.unstable_shouldYield,QA=Gt.unstable_requestPaint,ze=Gt.unstable_now,YA=Gt.unstable_getCurrentPriorityLevel,vm=Gt.unstable_ImmediatePriority,p1=Gt.unstable_UserBlockingPriority,Ou=Gt.unstable_NormalPriority,XA=Gt.unstable_LowPriority,m1=Gt.unstable_IdlePriority,Fc=null,Ln=null;function JA(t){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:tk,ZA=Math.log,ek=Math.LN2;function tk(t){return t>>>=0,t===0?32:31-(ZA(t)/ek|0)|0}var Rl=64,Pl=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Du(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mo(a):(s&=o,s!==0&&(r=Mo(s)))}else o=n&~i,o!==0?r=Mo(o):s!==0&&(r=Mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function nk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=nk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g1(){var t=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function ik(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function y1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v1,wm,_1,w1,E1,$f=!1,bl=[],jr=null,Ur=null,zr=null,da=new Map,fa=new Map,Cr=[],sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wv(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function So(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ja(e),e!==null&&wm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ok(t,e,n,r,i){switch(e){case"focusin":return jr=So(jr,t,e,n,r,i),!0;case"dragenter":return Ur=So(Ur,t,e,n,r,i),!0;case"mouseover":return zr=So(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,So(da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,So(fa.get(s)||null,t,e,n,r,i)),!0}return!1}function I1(t){var e=wi(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=c1(n),e!==null){t.blockedOn=e,E1(t.priority,function(){_1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Of=r,n.target.dispatchEvent(r),Of=null}else return e=Ja(n),e!==null&&wm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ev(t,e,n){cu(t)&&n.delete(e)}function ak(){$f=!1,jr!==null&&cu(jr)&&(jr=null),Ur!==null&&cu(Ur)&&(Ur=null),zr!==null&&cu(zr)&&(zr=null),da.forEach(Ev),fa.forEach(Ev)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,$f||($f=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,ak)))}function pa(t){function e(i){return Ao(i,t)}if(0<bl.length){Ao(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Ao(jr,t),Ur!==null&&Ao(Ur,t),zr!==null&&Ao(zr,t),da.forEach(e),fa.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)I1(n),n.blockedOn===null&&Cr.shift()}var As=vr.ReactCurrentBatchConfig,Lu=!0;function lk(t,e,n,r){var i=Ee,s=As.transition;As.transition=null;try{Ee=1,Em(t,e,n,r)}finally{Ee=i,As.transition=s}}function uk(t,e,n,r){var i=Ee,s=As.transition;As.transition=null;try{Ee=4,Em(t,e,n,r)}finally{Ee=i,As.transition=s}}function Em(t,e,n,r){if(Lu){var i=Ff(t,e,n,r);if(i===null)Ad(t,e,r,Mu,n),wv(t,r);else if(ok(i,t,e,n,r))r.stopPropagation();else if(wv(t,r),e&4&&-1<sk.indexOf(t)){for(;i!==null;){var s=Ja(i);if(s!==null&&v1(s),s=Ff(t,e,n,r),s===null&&Ad(t,e,r,Mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ad(t,e,r,null,n)}}var Mu=null;function Ff(t,e,n,r){if(Mu=null,t=ym(r),t=wi(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function x1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YA()){case vm:return 1;case p1:return 4;case Ou:case XA:return 16;case m1:return 536870912;default:return 16}default:return 16}}var Lr=null,Im=null,hu=null;function T1(){if(hu)return hu;var t,e=Im,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function Iv(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nl:Iv,this.isPropagationStopped=Iv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xm=Xt(oo),Xa=Me({},oo,{view:0,detail:0}),ck=Xt(Xa),yd,vd,ko,jc=Me({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ko&&(ko&&t.type==="mousemove"?(yd=t.screenX-ko.screenX,vd=t.screenY-ko.screenY):vd=yd=0,ko=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),xv=Xt(jc),hk=Me({},jc,{dataTransfer:0}),dk=Xt(hk),fk=Me({},Xa,{relatedTarget:0}),_d=Xt(fk),pk=Me({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),mk=Xt(pk),gk=Me({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yk=Xt(gk),vk=Me({},oo,{data:0}),Tv=Xt(vk),_k={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ek[t])?!!e[t]:!1}function Tm(){return Ik}var xk=Me({},Xa,{key:function(t){if(t.key){var e=_k[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tm,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tk=Xt(xk),Sk=Me({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=Xt(Sk),Ak=Me({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tm}),kk=Xt(Ak),Ck=Me({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rk=Xt(Ck),Pk=Me({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=Xt(Pk),Nk=[9,13,27,32],Sm=ar&&"CompositionEvent"in window,Yo=null;ar&&"documentMode"in document&&(Yo=document.documentMode);var Ok=ar&&"TextEvent"in window&&!Yo,S1=ar&&(!Sm||Yo&&8<Yo&&11>=Yo),Av=String.fromCharCode(32),kv=!1;function A1(t,e){switch(t){case"keyup":return Nk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Dk(t,e){switch(t){case"compositionend":return k1(e);case"keypress":return e.which!==32?null:(kv=!0,Av);case"textInput":return t=e.data,t===Av&&kv?null:t;default:return null}}function Lk(t,e){if(cs)return t==="compositionend"||!Sm&&A1(t,e)?(t=T1(),hu=Im=Lr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return S1&&e.locale!=="ko"?null:e.data;default:return null}}var Mk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mk[t.type]:e==="textarea"}function C1(t,e,n,r){s1(r),e=Vu(e,"onChange"),0<e.length&&(n=new xm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,ma=null;function Vk(t){F1(t,0)}function Uc(t){var e=fs(t);if(Jw(e))return t}function $k(t,e){if(t==="change")return e}var R1=!1;if(ar){var wd;if(ar){var Ed="oninput"in document;if(!Ed){var Rv=document.createElement("div");Rv.setAttribute("oninput","return;"),Ed=typeof Rv.oninput=="function"}wd=Ed}else wd=!1;R1=wd&&(!document.documentMode||9<document.documentMode)}function Pv(){Xo&&(Xo.detachEvent("onpropertychange",P1),ma=Xo=null)}function P1(t){if(t.propertyName==="value"&&Uc(ma)){var e=[];C1(e,ma,t,ym(t)),u1(Vk,e)}}function Fk(t,e,n){t==="focusin"?(Pv(),Xo=e,ma=n,Xo.attachEvent("onpropertychange",P1)):t==="focusout"&&Pv()}function jk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(ma)}function Uk(t,e){if(t==="click")return Uc(e)}function zk(t,e){if(t==="input"||t==="change")return Uc(e)}function Bk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:Bk;function ga(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ef.call(e,i)||!In(t[i],e[i]))return!1}return!0}function bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nv(t,e){var n=bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function b1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N1(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wk(t){var e=N1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b1(n.ownerDocument.documentElement,n)){if(r!==null&&Am(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nv(n,s);var o=Nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hk=ar&&"documentMode"in document&&11>=document.documentMode,hs=null,jf=null,Jo=null,Uf=!1;function Ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uf||hs==null||hs!==Pu(r)||(r=hs,"selectionStart"in r&&Am(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&ga(Jo,r)||(Jo=r,r=Vu(jf,"onSelect"),0<r.length&&(e=new xm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function Ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Id={},O1={};ar&&(O1=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function zc(t){if(Id[t])return Id[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O1)return Id[t]=e[n];return t}var D1=zc("animationend"),L1=zc("animationiteration"),M1=zc("animationstart"),V1=zc("transitionend"),$1=new Map,Dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){$1.set(t,e),qi(e,[t])}for(var xd=0;xd<Dv.length;xd++){var Td=Dv[xd],qk=Td.toLowerCase(),Gk=Td[0].toUpperCase()+Td.slice(1);ci(qk,"on"+Gk)}ci(D1,"onAnimationEnd");ci(L1,"onAnimationIteration");ci(M1,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(V1,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qA(r,e,void 0,t),t.currentTarget=null}function F1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}}}if(Nu)throw t=Mf,Nu=!1,Mf=null,t}function ke(t,e){var n=e[qf];n===void 0&&(n=e[qf]=new Set);var r=t+"__bubble";n.has(r)||(j1(e,t,2,!1),n.add(r))}function Sd(t,e,n){var r=0;e&&(r|=4),j1(n,t,r,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Dl]){t[Dl]=!0,Gw.forEach(function(n){n!=="selectionchange"&&(Kk.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,Sd("selectionchange",!1,e))}}function j1(t,e,n,r){switch(x1(e)){case 1:var i=lk;break;case 4:i=uk;break;default:i=Em}n=i.bind(null,e,n,t),i=void 0,!Lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u1(function(){var u=s,c=ym(n),h=[];e:{var d=$1.get(t);if(d!==void 0){var p=xm,_=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":p=Tk;break;case"focusin":_="focus",p=_d;break;case"focusout":_="blur",p=_d;break;case"beforeblur":case"afterblur":p=_d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kk;break;case D1:case L1:case M1:p=mk;break;case V1:p=Rk;break;case"scroll":p=ck;break;case"wheel":p=bk;break;case"copy":case"cut":case"paste":p=yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sv}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=ha(f,m),E!=null&&y.push(va(f,E,v)))),w)break;f=f.return}0<y.length&&(d=new p(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Of&&(_=n.relatedTarget||n.fromElement)&&(wi(_)||_[lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?wi(_):null,_!==null&&(w=Gi(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=xv,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Sv,E="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:fs(p),v=_==null?d:fs(_),d=new y(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=v,E=null,wi(c)===u&&(y=new y(m,f+"enter",_,n,c),y.target=v,y.relatedTarget=w,E=y),w=E,p&&_)t:{for(y=p,m=_,f=0,v=y;v;v=ns(v))f++;for(v=0,E=m;E;E=ns(E))v++;for(;0<f-v;)y=ns(y),f--;for(;0<v-f;)m=ns(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=ns(y),m=ns(m)}y=null}else y=null;p!==null&&Mv(h,d,p,y,!1),_!==null&&w!==null&&Mv(h,w,_,y,!0)}}e:{if(d=u?fs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=$k;else if(Cv(d))if(R1)T=zk;else{T=jk;var S=Fk}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Uk);if(T&&(T=T(t,u))){C1(h,T,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Cf(d,"number",d.value)}switch(S=u?fs(u):window,t){case"focusin":(Cv(S)||S.contentEditable==="true")&&(hs=S,jf=u,Jo=null);break;case"focusout":Jo=jf=hs=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,Ov(h,n,c);break;case"selectionchange":if(Hk)break;case"keydown":case"keyup":Ov(h,n,c)}var b;if(Sm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else cs?A1(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(S1&&n.locale!=="ko"&&(cs||R!=="onCompositionStart"?R==="onCompositionEnd"&&cs&&(b=T1()):(Lr=c,Im="value"in Lr?Lr.value:Lr.textContent,cs=!0)),S=Vu(u,R),0<S.length&&(R=new Tv(R,t,null,n,c),h.push({event:R,listeners:S}),b?R.data=b:(b=k1(n),b!==null&&(R.data=b)))),(b=Ok?Dk(t,n):Lk(t,n))&&(u=Vu(u,"onBeforeInput"),0<u.length&&(c=new Tv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}F1(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(va(t,s,i)),s=ha(t,e),s!=null&&r.push(va(t,s,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ha(n,s),l!=null&&o.unshift(va(n,l,a))):i||(l=ha(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qk=/\r\n?/g,Yk=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(Qk,`
`).replace(Yk,"")}function Ll(t,e,n){if(e=Vv(e),Vv(t)!==e&&n)throw Error(C(425))}function $u(){}var zf=null,Bf=null;function Wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hf=typeof setTimeout=="function"?setTimeout:void 0,Xk=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,Jk=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(Zk)}:Hf;function Zk(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),bn="__reactFiber$"+ao,_a="__reactProps$"+ao,lr="__reactContainer$"+ao,qf="__reactEvents$"+ao,eC="__reactListeners$"+ao,tC="__reactHandles$"+ao;function wi(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fv(t);t!==null;){if(n=t[bn])return n;t=Fv(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[bn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Bc(t){return t[_a]||null}var Gf=[],ps=-1;function hi(t){return{current:t}}function Re(t){0>ps||(t.current=Gf[ps],Gf[ps]=null,ps--)}function Ae(t,e){ps++,Gf[ps]=t.current,t.current=e}var ri={},At=hi(ri),Ft=hi(!1),Oi=ri;function Fs(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Fu(){Re(Ft),Re(At)}function jv(t,e,n){if(At.current!==ri)throw Error(C(168));Ae(At,e),Ae(Ft,n)}function U1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,FA(t)||"Unknown",i));return Me({},n,r)}function ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,Oi=At.current,Ae(At,t),Ae(Ft,Ft.current),!0}function Uv(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=U1(t,e,Oi),r.__reactInternalMemoizedMergedChildContext=t,Re(Ft),Re(At),Ae(At,t)):Re(Ft),Ae(Ft,n)}var Xn=null,Wc=!1,Cd=!1;function z1(t){Xn===null?Xn=[t]:Xn.push(t)}function nC(t){Wc=!0,z1(t)}function di(){if(!Cd&&Xn!==null){Cd=!0;var t=0,e=Ee;try{var n=Xn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,Wc=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),f1(vm,di),i}finally{Ee=e,Cd=!1}}return null}var ms=[],gs=0,Uu=null,zu=0,Zt=[],en=0,Di=null,Zn=1,er="";function gi(t,e){ms[gs++]=zu,ms[gs++]=Uu,Uu=t,zu=e}function B1(t,e,n){Zt[en++]=Zn,Zt[en++]=er,Zt[en++]=Di,Di=t;var r=Zn;t=er;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-wn(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function km(t){t.return!==null&&(gi(t,1),B1(t,1,0))}function Cm(t){for(;t===Uu;)Uu=ms[--gs],ms[gs]=null,zu=ms[--gs],ms[gs]=null;for(;t===Di;)Di=Zt[--en],Zt[en]=null,er=Zt[--en],Zt[en]=null,Zn=Zt[--en],Zt[en]=null}var qt=null,Wt=null,Oe=!1,yn=null;function W1(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qt=t,Wt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qt=t,Wt=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qf(t){if(Oe){var e=Wt;if(e){var n=e;if(!zv(t,e)){if(Kf(t))throw Error(C(418));e=Br(n.nextSibling);var r=qt;e&&zv(t,e)?W1(r,n):(t.flags=t.flags&-4097|2,Oe=!1,qt=t)}}else{if(Kf(t))throw Error(C(418));t.flags=t.flags&-4097|2,Oe=!1,qt=t}}}function Bv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function Ml(t){if(t!==qt)return!1;if(!Oe)return Bv(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wf(t.type,t.memoizedProps)),e&&(e=Wt)){if(Kf(t))throw H1(),Error(C(418));for(;e;)W1(t,e),e=Br(e.nextSibling)}if(Bv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=qt?Br(t.stateNode.nextSibling):null;return!0}function H1(){for(var t=Wt;t;)t=Br(t.nextSibling)}function js(){Wt=qt=null,Oe=!1}function Rm(t){yn===null?yn=[t]:yn.push(t)}var rC=vr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bu=hi(null),Wu=null,ys=null,Pm=null;function bm(){Pm=ys=Wu=null}function Nm(t){var e=Bu.current;Re(Bu),t._currentValue=e}function Yf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Wu=t,Pm=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Pm!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Wu===null)throw Error(C(308));ys=t,Wu.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Ei=null;function Om(t){Ei===null?Ei=[t]:Ei.push(t)}function q1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Om(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,Om(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_m(t,n)}}function Wv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hu(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Me({},h,d);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=h}}function Hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var K1=new qw.Component().refs;function Xf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=qr(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(En(e,t,i,r),fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=qr(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(En(e,t,i,r),fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=qr(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(En(e,t,r,n),fu(e,t,r))}};function qv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function Q1(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=jt(e)?Oi:At.current,r=e.contextTypes,s=(r=r!=null)?Fs(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function Jf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=K1,Dm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=jt(e)?Oi:At.current,i.context=Fs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hc.enqueueReplaceState(i,i.state,null),Hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===K1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Vl(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kv(t){var e=t._init;return e(t._payload)}function Y1(t){function e(m,f){if(t){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Gr(m,f),m.index=0,m.sibling=null,m}function s(m,f,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,E){return f===null||f.tag!==6?(f=Ld(v,m.mode,E),f.return=m,f):(f=i(f,v),f.return=m,f)}function l(m,f,v,E){var T=v.type;return T===us?c(m,f,v.props.children,E,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&Kv(T)===f.type)?(E=i(f,v.props),E.ref=Co(m,f,v),E.return=m,E):(E=_u(v.type,v.key,v.props,null,m.mode,E),E.ref=Co(m,f,v),E.return=m,E)}function u(m,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Md(v,m.mode,E),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function c(m,f,v,E,T){return f===null||f.tag!==7?(f=Ci(v,m.mode,E,T),f.return=m,f):(f=i(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ld(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Al:return v=_u(f.type,f.key,f.props,null,m.mode,v),v.ref=Co(m,null,f),v.return=m,v;case ls:return f=Md(f,m.mode,v),f.return=m,f;case Ar:var E=f._init;return h(m,E(f._payload),v)}if(Lo(f)||xo(f))return f=Ci(f,m.mode,v,null),f.return=m,f;Vl(m,f)}return null}function d(m,f,v,E){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(m,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Al:return v.key===T?l(m,f,v,E):null;case ls:return v.key===T?u(m,f,v,E):null;case Ar:return T=v._init,d(m,f,T(v._payload),E)}if(Lo(v)||xo(v))return T!==null?null:c(m,f,v,E,null);Vl(m,v)}return null}function p(m,f,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Al:return m=m.get(E.key===null?v:E.key)||null,l(f,m,E,T);case ls:return m=m.get(E.key===null?v:E.key)||null,u(f,m,E,T);case Ar:var S=E._init;return p(m,f,v,S(E._payload),T)}if(Lo(E)||xo(E))return m=m.get(v)||null,c(f,m,E,T,null);Vl(f,E)}return null}function _(m,f,v,E){for(var T=null,S=null,b=f,R=f=0,G=null;b!==null&&R<v.length;R++){b.index>R?(G=b,b=null):G=b.sibling;var $=d(m,b,v[R],E);if($===null){b===null&&(b=G);break}t&&b&&$.alternate===null&&e(m,b),f=s($,f,R),S===null?T=$:S.sibling=$,S=$,b=G}if(R===v.length)return n(m,b),Oe&&gi(m,R),T;if(b===null){for(;R<v.length;R++)b=h(m,v[R],E),b!==null&&(f=s(b,f,R),S===null?T=b:S.sibling=b,S=b);return Oe&&gi(m,R),T}for(b=r(m,b);R<v.length;R++)G=p(b,m,R,v[R],E),G!==null&&(t&&G.alternate!==null&&b.delete(G.key===null?R:G.key),f=s(G,f,R),S===null?T=G:S.sibling=G,S=G);return t&&b.forEach(function(z){return e(m,z)}),Oe&&gi(m,R),T}function y(m,f,v,E){var T=xo(v);if(typeof T!="function")throw Error(C(150));if(v=T.call(v),v==null)throw Error(C(151));for(var S=T=null,b=f,R=f=0,G=null,$=v.next();b!==null&&!$.done;R++,$=v.next()){b.index>R?(G=b,b=null):G=b.sibling;var z=d(m,b,$.value,E);if(z===null){b===null&&(b=G);break}t&&b&&z.alternate===null&&e(m,b),f=s(z,f,R),S===null?T=z:S.sibling=z,S=z,b=G}if($.done)return n(m,b),Oe&&gi(m,R),T;if(b===null){for(;!$.done;R++,$=v.next())$=h(m,$.value,E),$!==null&&(f=s($,f,R),S===null?T=$:S.sibling=$,S=$);return Oe&&gi(m,R),T}for(b=r(m,b);!$.done;R++,$=v.next())$=p(b,m,R,$.value,E),$!==null&&(t&&$.alternate!==null&&b.delete($.key===null?R:$.key),f=s($,f,R),S===null?T=$:S.sibling=$,S=$);return t&&b.forEach(function(fe){return e(m,fe)}),Oe&&gi(m,R),T}function w(m,f,v,E){if(typeof v=="object"&&v!==null&&v.type===us&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Al:e:{for(var T=v.key,S=f;S!==null;){if(S.key===T){if(T=v.type,T===us){if(S.tag===7){n(m,S.sibling),f=i(S,v.props.children),f.return=m,m=f;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&Kv(T)===S.type){n(m,S.sibling),f=i(S,v.props),f.ref=Co(m,S,v),f.return=m,m=f;break e}n(m,S);break}else e(m,S);S=S.sibling}v.type===us?(f=Ci(v.props.children,m.mode,E,v.key),f.return=m,m=f):(E=_u(v.type,v.key,v.props,null,m.mode,E),E.ref=Co(m,f,v),E.return=m,m=E)}return o(m);case ls:e:{for(S=v.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Md(v,m.mode,E),f.return=m,m=f}return o(m);case Ar:return S=v._init,w(m,f,S(v._payload),E)}if(Lo(v))return _(m,f,v,E);if(xo(v))return y(m,f,v,E);Vl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=Ld(v,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return w}var Us=Y1(!0),X1=Y1(!1),Za={},Mn=hi(Za),wa=hi(Za),Ea=hi(Za);function Ii(t){if(t===Za)throw Error(C(174));return t}function Lm(t,e){switch(Ae(Ea,e),Ae(wa,t),Ae(Mn,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pf(e,t)}Re(Mn),Ae(Mn,e)}function zs(){Re(Mn),Re(wa),Re(Ea)}function J1(t){Ii(Ea.current);var e=Ii(Mn.current),n=Pf(e,t.type);e!==n&&(Ae(wa,t),Ae(Mn,n))}function Mm(t){wa.current===t&&(Re(Mn),Re(wa))}var De=hi(0);function qu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rd=[];function Vm(){for(var t=0;t<Rd.length;t++)Rd[t]._workInProgressVersionPrimary=null;Rd.length=0}var pu=vr.ReactCurrentDispatcher,Pd=vr.ReactCurrentBatchConfig,Li=0,Le=null,Ye=null,et=null,Gu=!1,Zo=!1,Ia=0,iC=0;function ft(){throw Error(C(321))}function $m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Fm(t,e,n,r,i,s){if(Li=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?lC:uC,t=n(r,i),Zo){s=0;do{if(Zo=!1,Ia=0,25<=s)throw Error(C(301));s+=1,et=Ye=null,e.updateQueue=null,pu.current=cC,t=n(r,i)}while(Zo)}if(pu.current=Ku,e=Ye!==null&&Ye.next!==null,Li=0,et=Ye=Le=null,Gu=!1,e)throw Error(C(300));return t}function jm(){var t=Ia!==0;return Ia=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Le.memoizedState=et=t:et=et.next=t,et}function an(){if(Ye===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=et===null?Le.memoizedState:et.next;if(e!==null)et=e,Ye=t;else{if(t===null)throw Error(C(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Le.memoizedState=et=t:et=et.next=t}return et}function xa(t,e){return typeof e=="function"?e(t):e}function bd(t){var e=an(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Li&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Le.lanes|=c,Mi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,In(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nd(t){var e=an(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z1(){}function eE(t,e){var n=Le,r=an(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,$t=!0),r=r.queue,Um(rE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ta(9,nE.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(C(349));Li&30||tE(n,e,i)}return i}function tE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nE(t,e,n,r){e.value=n,e.getSnapshot=r,iE(e)&&sE(t)}function rE(t,e,n){return n(function(){iE(e)&&sE(t)})}function iE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function sE(t){var e=ur(t,1);e!==null&&En(e,t,1,-1)}function Qv(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=aC.bind(null,Le,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function oE(){return an().memoizedState}function mu(t,e,n,r){var i=Cn();Le.flags|=t,i.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&$m(r,o.deps)){i.memoizedState=Ta(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ta(1|e,n,s,r)}function Yv(t,e){return mu(8390656,8,t,e)}function Um(t,e){return qc(2048,8,t,e)}function aE(t,e){return qc(4,2,t,e)}function lE(t,e){return qc(4,4,t,e)}function uE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cE(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,uE.bind(null,e,t),n)}function zm(){}function hE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$m(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$m(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fE(t,e,n){return Li&21?(In(n,e)||(n=g1(),Le.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function sC(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{Ee=n,Pd.transition=r}}function pE(){return an().memoizedState}function oC(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mE(t))gE(e,n);else if(n=q1(t,e,n,r),n!==null){var i=Nt();En(n,t,r,i),yE(n,e,r)}}function aC(t,e,n){var r=qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mE(t))gE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(i.next=i,Om(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=q1(t,e,i,r),n!==null&&(i=Nt(),En(n,t,r,i),yE(n,e,r))}}function mE(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function gE(t,e){Zo=Gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_m(t,n)}}var Ku={readContext:on,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},lC={readContext:on,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:Yv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,uE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oC.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Qv,useDebugValue:zm,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Qv(!1),e=t[0];return t=sC.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=Cn();if(Oe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),tt===null)throw Error(C(349));Li&30||tE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yv(rE.bind(null,r,s,t),[t]),r.flags|=2048,Ta(9,nE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=tt.identifierPrefix;if(Oe){var n=er,r=Zn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uC={readContext:on,useCallback:hE,useContext:on,useEffect:Um,useImperativeHandle:cE,useInsertionEffect:aE,useLayoutEffect:lE,useMemo:dE,useReducer:bd,useRef:oE,useState:function(){return bd(xa)},useDebugValue:zm,useDeferredValue:function(t){var e=an();return fE(e,Ye.memoizedState,t)},useTransition:function(){var t=bd(xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:Z1,useSyncExternalStore:eE,useId:pE,unstable_isNewReconciler:!1},cC={readContext:on,useCallback:hE,useContext:on,useEffect:Um,useImperativeHandle:cE,useInsertionEffect:aE,useLayoutEffect:lE,useMemo:dE,useReducer:Nd,useRef:oE,useState:function(){return Nd(xa)},useDebugValue:zm,useDeferredValue:function(t){var e=an();return Ye===null?e.memoizedState=t:fE(e,Ye.memoizedState,t)},useTransition:function(){var t=Nd(xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:Z1,useSyncExternalStore:eE,useId:pE,unstable_isNewReconciler:!1};function Bs(t,e){try{var n="",r=e;do n+=$A(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hC=typeof WeakMap=="function"?WeakMap:Map;function vE(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yu||(Yu=!0,up=r),Zf(t,e)},n}function _E(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zf(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SC.bind(null,t,e,n),e.then(t,t))}function Jv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var dC=vr.ReactCurrentOwner,$t=!1;function Rt(t,e,n,r){e.child=t===null?X1(e,null,n,r):Us(e,t.child,n,r)}function e0(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=Fm(t,e,n,r,s,i),n=jm(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Oe&&n&&km(e),e.flags|=1,Rt(t,e,r,i),e.child)}function t0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ym(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wE(t,e,s,r,i)):(t=_u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function wE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,cr(t,e,i)}return ep(t,e,n,r,i)}function EE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(_s,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(_s,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(_s,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(_s,Bt),Bt|=r;return Rt(t,e,i,n),e.child}function IE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ep(t,e,n,r,i){var s=jt(n)?Oi:At.current;return s=Fs(e,s),ks(e,i),n=Fm(t,e,n,r,s,i),r=jm(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Oe&&r&&km(e),e.flags|=1,Rt(t,e,n,i),e.child)}function n0(t,e,n,r,i){if(jt(n)){var s=!0;ju(e)}else s=!1;if(ks(e,i),e.stateNode===null)gu(t,e),Q1(e,n,r),Jf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=jt(n)?Oi:At.current,u=Fs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gv(e,o,r,u),kr=!1;var d=e.memoizedState;o.state=d,Hu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ft.current||kr?(typeof c=="function"&&(Xf(e,n,c,r),l=e.memoizedState),(a=kr||qv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,G1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=jt(n)?Oi:At.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Gv(e,o,r,l),kr=!1,d=e.memoizedState,o.state=d,Hu(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||Ft.current||kr?(typeof p=="function"&&(Xf(e,n,p,r),_=e.memoizedState),(u=kr||qv(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return tp(t,e,n,r,s,i)}function tp(t,e,n,r,i,s){IE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uv(e,n,!1),cr(t,e,s);r=e.stateNode,dC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&Uv(e,n,!0),e.child}function xE(t){var e=t.stateNode;e.pendingContext?jv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jv(t,e.context,!1),Lm(t,e.containerInfo)}function r0(t,e,n,r,i){return js(),Rm(i),e.flags|=256,Rt(t,e,n,r),e.child}var np={dehydrated:null,treeContext:null,retryLane:0};function rp(t){return{baseLanes:t,cachePool:null,transitions:null}}function TE(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(De,i&1),t===null)return Qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rp(n),e.memoizedState=np,t):Bm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=np,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bm(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $l(t,e,n,r){return r!==null&&Rm(r),Us(e,t.child,null,n),t=Bm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Od(Error(C(422))),$l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qc({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=rp(o),e.memoizedState=np,s);if(!(e.mode&1))return $l(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Od(s,r,void 0),$l(t,e,o,r)}if(a=(o&t.childLanes)!==0,$t||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),En(r,t,i,-1))}return Qm(),r=Od(Error(C(421))),$l(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Br(i.nextSibling),qt=e,Oe=!0,yn=null,t!==null&&(Zt[en++]=Zn,Zt[en++]=er,Zt[en++]=Di,Zn=t.id,er=t.overflow,Di=e),e=Bm(e,r.children),e.flags|=4096,e)}function i0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yf(t.return,e,n)}function Dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function SE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i0(t,n,e);else if(t.tag===19)i0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dd(e,!0,n,null,s);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pC(t,e,n){switch(e.tag){case 3:xE(e),js();break;case 5:J1(e);break;case 1:jt(e.type)&&ju(e);break;case 4:Lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(Bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?TE(t,e,n):(Ae(De,De.current&1),t=cr(t,e,n),t!==null?t.sibling:null);Ae(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return SE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,EE(t,e,n)}return cr(t,e,n)}var AE,ip,kE,CE;AE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};kE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(Mn.current);var s=null;switch(n){case"input":i=Af(t,i),r=Af(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Rf(t,i),r=Rf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$u)}bf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};CE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ro(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mC(t,e,n){var r=e.pendingProps;switch(Cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return jt(e.type)&&Fu(),pt(e),null;case 3:return r=e.stateNode,zs(),Re(Ft),Re(At),Vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(dp(yn),yn=null))),ip(t,e),pt(e),null;case 5:Mm(e);var i=Ii(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)kE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return pt(e),null}if(t=Ii(Mn.current),Ml(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bn]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)ke(Vo[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":fv(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":mv(r,s),ke("invalid",r)}bf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,a,t),i=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":kl(r),pv(r,s,!0);break;case"textarea":kl(r),gv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$u)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[_a]=r,AE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)ke(Vo[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":fv(t,r),i=Af(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),ke("invalid",t);break;case"textarea":mv(t,r),i=Rf(t,r),ke("invalid",t);break;default:i=r}bf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?i1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&fm(t,s,l,o))}switch(n){case"input":kl(t),pv(t,r,!1);break;case"textarea":kl(t),gv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$u)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)CE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Ii(Ea.current),Ii(Mn.current),Ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(s=r.nodeValue!==n)&&(t=qt,t!==null))switch(t.tag){case 3:Ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return pt(e),null;case 13:if(Re(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Wt!==null&&e.mode&1&&!(e.flags&128))H1(),js(),e.flags|=98560,s=!1;else if(s=Ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[bn]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else yn!==null&&(dp(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Xe===0&&(Xe=3):Qm())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return zs(),ip(t,e),t===null&&ya(e.stateNode.containerInfo),pt(e),null;case 10:return Nm(e.type._context),pt(e),null;case 17:return jt(e.type)&&Fu(),pt(e),null;case 19:if(Re(De),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ro(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qu(t),o!==null){for(e.flags|=128,Ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Ws&&(e.flags|=128,r=!0,Ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=qu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return pt(e),null}else 2*ze()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=De.current,Ae(De,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Km(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function gC(t,e){switch(Cm(e),e.tag){case 1:return jt(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),Re(Ft),Re(At),Vm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(Re(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(De),null;case 4:return zs(),null;case 10:return Nm(e.type._context),null;case 22:case 23:return Km(),null;case 24:return null;default:return null}}var Fl=!1,vt=!1,yC=typeof WeakSet=="function"?WeakSet:Set,U=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function sp(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var s0=!1;function vC(t,e){if(zf=Lu,t=N1(),Am(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bf={focusedElem:t,selectionRange:n},Lu=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,w=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:fn(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){Fe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return _=s0,s0=!1,_}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sp(e,n,s)}i=i.next}while(i!==r)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function op(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RE(t){var e=t.alternate;e!==null&&(t.alternate=null,RE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[_a],delete e[qf],delete e[eC],delete e[tC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function PE(t){return t.tag===5||t.tag===3||t.tag===4}function o0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||PE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$u));else if(r!==4&&(t=t.child,t!==null))for(ap(t,e,n),t=t.sibling;t!==null;)ap(t,e,n),t=t.sibling}function lp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lp(t,e,n),t=t.sibling;t!==null;)lp(t,e,n),t=t.sibling}var at=null,gn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)bE(t,e,n),n=n.sibling}function bE(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:vt||vs(n,e);case 6:var r=at,i=gn;at=null,Tr(t,e,n),at=r,gn=i,at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),pa(t)):kd(at,n.stateNode));break;case 4:r=at,i=gn,at=n.stateNode.containerInfo,gn=!0,Tr(t,e,n),at=r,gn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sp(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!vt&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Tr(t,e,n),vt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function a0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yC),e.forEach(function(r){var i=kC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,gn=!1;break e;case 3:at=a.stateNode.containerInfo,gn=!0;break e;case 4:at=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(at===null)throw Error(C(160));bE(s,o,i),at=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)NE(e,t),e=e.sibling}function NE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),An(t),r&4){try{ea(3,t,t.return),Gc(3,t)}catch(y){Fe(t,t.return,y)}try{ea(5,t,t.return)}catch(y){Fe(t,t.return,y)}}break;case 1:dn(e,t),An(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(dn(e,t),An(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(y){Fe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zw(i,s),Nf(a,o);var u=Nf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?i1(i,h):c==="dangerouslySetInnerHTML"?n1(i,h):c==="children"?ca(i,h):fm(i,c,h,u)}switch(a){case"input":kf(i,s);break;case"textarea":e1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(i,!!s.multiple,s.defaultValue,!0):xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(y){Fe(t,t.return,y)}}break;case 6:if(dn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Fe(t,t.return,y)}}break;case 3:if(dn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){Fe(t,t.return,y)}break;case 4:dn(e,t),An(t);break;case 13:dn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qm=ze())),r&4&&a0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,dn(e,t),vt=u):dn(e,t),An(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:vs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Fe(r,n,y)}}break;case 5:vs(d,d.return);break;case 22:if(d.memoizedState!==null){u0(h);continue}}p!==null?(p.return=d,U=p):u0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r1("display",o))}catch(y){Fe(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Fe(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dn(e,t),An(t),r&4&&a0(t);break;case 21:break;default:dn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(PE(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ca(i,""),r.flags&=-33);var s=o0(t);lp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=o0(t);ap(t,a,o);break;default:throw Error(C(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _C(t,e,n){U=t,OE(t)}function OE(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Fl;var u=vt;if(Fl=o,(vt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?c0(i):l!==null?(l.return=o,U=l):c0(i);for(;s!==null;)U=s,OE(s),s=s.sibling;U=i,Fl=a,vt=u}l0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):l0(t)}}function l0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}vt||e.flags&512&&op(e)}catch(d){Fe(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function u0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function c0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Fe(e,i,l)}}var s=e.return;try{op(e)}catch(l){Fe(e,s,l)}break;case 5:var o=e.return;try{op(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var wC=Math.ceil,Qu=vr.ReactCurrentDispatcher,Wm=vr.ReactCurrentOwner,rn=vr.ReactCurrentBatchConfig,pe=0,tt=null,Ge=null,ct=0,Bt=0,_s=hi(0),Xe=0,Sa=null,Mi=0,Kc=0,Hm=0,ta=null,Mt=null,qm=0,Ws=1/0,Yn=null,Yu=!1,up=null,Hr=null,jl=!1,Mr=null,Xu=0,na=0,cp=null,yu=-1,vu=0;function Nt(){return pe&6?ze():yu!==-1?yu:yu=ze()}function qr(t){return t.mode&1?pe&2&&ct!==0?ct&-ct:rC.transition!==null?(vu===0&&(vu=g1()),vu):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:x1(t.type)),t):1}function En(t,e,n,r){if(50<na)throw na=0,cp=null,Error(C(185));Ya(t,n,r),(!(pe&2)||t!==tt)&&(t===tt&&(!(pe&2)&&(Kc|=n),Xe===4&&Rr(t,ct)),Ut(t,r),n===1&&pe===0&&!(e.mode&1)&&(Ws=ze()+500,Wc&&di()))}function Ut(t,e){var n=t.callbackNode;rk(t,e);var r=Du(t,t===tt?ct:0);if(r===0)n!==null&&_v(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_v(n),e===1)t.tag===0?nC(h0.bind(null,t)):z1(h0.bind(null,t)),Jk(function(){!(pe&6)&&di()}),n=null;else{switch(y1(r)){case 1:n=vm;break;case 4:n=p1;break;case 16:n=Ou;break;case 536870912:n=m1;break;default:n=Ou}n=UE(n,DE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DE(t,e){if(yu=-1,vu=0,pe&6)throw Error(C(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Du(t,t===tt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ju(t,r);else{e=r;var i=pe;pe|=2;var s=ME();(tt!==t||ct!==e)&&(Yn=null,Ws=ze()+500,ki(t,e));do try{xC();break}catch(a){LE(t,a)}while(1);bm(),Qu.current=s,pe=i,Ge!==null?e=0:(tt=null,ct=0,e=Xe)}if(e!==0){if(e===2&&(i=Vf(t),i!==0&&(r=i,e=hp(t,i))),e===1)throw n=Sa,ki(t,0),Rr(t,r),Ut(t,ze()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!EC(i)&&(e=Ju(t,r),e===2&&(s=Vf(t),s!==0&&(r=s,e=hp(t,s))),e===1))throw n=Sa,ki(t,0),Rr(t,r),Ut(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:yi(t,Mt,Yn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=qm+500-ze(),10<e)){if(Du(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hf(yi.bind(null,t,Mt,Yn),e);break}yi(t,Mt,Yn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wC(r/1960))-r,10<r){t.timeoutHandle=Hf(yi.bind(null,t,Mt,Yn),r);break}yi(t,Mt,Yn);break;case 5:yi(t,Mt,Yn);break;default:throw Error(C(329))}}}return Ut(t,ze()),t.callbackNode===n?DE.bind(null,t):null}function hp(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Ju(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&dp(e)),t}function dp(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function EC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Hm,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function h0(t){if(pe&6)throw Error(C(327));Cs();var e=Du(t,0);if(!(e&1))return Ut(t,ze()),null;var n=Ju(t,e);if(t.tag!==0&&n===2){var r=Vf(t);r!==0&&(e=r,n=hp(t,r))}if(n===1)throw n=Sa,ki(t,0),Rr(t,e),Ut(t,ze()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,Mt,Yn),Ut(t,ze()),null}function Gm(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Ws=ze()+500,Wc&&di())}}function Vi(t){Mr!==null&&Mr.tag===0&&!(pe&6)&&Cs();var e=pe;pe|=1;var n=rn.transition,r=Ee;try{if(rn.transition=null,Ee=1,t)return t()}finally{Ee=r,rn.transition=n,pe=e,!(pe&6)&&di()}}function Km(){Bt=_s.current,Re(_s)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xk(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:zs(),Re(Ft),Re(At),Vm();break;case 5:Mm(r);break;case 4:zs();break;case 13:Re(De);break;case 19:Re(De);break;case 10:Nm(r.type._context);break;case 22:case 23:Km()}n=n.return}if(tt=t,Ge=t=Gr(t.current,null),ct=Bt=e,Xe=0,Sa=null,Hm=Kc=Mi=0,Mt=ta=null,Ei!==null){for(e=0;e<Ei.length;e++)if(n=Ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ei=null}return t}function LE(t,e){do{var n=Ge;try{if(bm(),pu.current=Ku,Gu){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gu=!1}if(Li=0,et=Ye=Le=null,Zo=!1,Ia=0,Wm.current=null,n===null||n.return===null){Xe=1,Sa=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Jv(o);if(p!==null){p.flags&=-257,Zv(p,o,a,s,e),p.mode&1&&Xv(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Xv(s,u,e),Qm();break e}l=Error(C(426))}}else if(Oe&&a.mode&1){var w=Jv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Zv(w,o,a,s,e),Rm(Bs(l,a));break e}}s=l=Bs(l,a),Xe!==4&&(Xe=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=vE(s,l,e);Wv(s,m);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hr===null||!Hr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=_E(s,a,e);Wv(s,E);break e}}s=s.return}while(s!==null)}$E(n)}catch(T){e=T,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function ME(){var t=Qu.current;return Qu.current=Ku,t===null?Ku:t}function Qm(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(Mi&268435455)&&!(Kc&268435455)||Rr(tt,ct)}function Ju(t,e){var n=pe;pe|=2;var r=ME();(tt!==t||ct!==e)&&(Yn=null,ki(t,e));do try{IC();break}catch(i){LE(t,i)}while(1);if(bm(),pe=n,Qu.current=r,Ge!==null)throw Error(C(261));return tt=null,ct=0,Xe}function IC(){for(;Ge!==null;)VE(Ge)}function xC(){for(;Ge!==null&&!KA();)VE(Ge)}function VE(t){var e=jE(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?$E(t):Ge=e,Wm.current=null}function $E(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gC(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Ge=null;return}}else if(n=mC(n,e,Bt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Xe===0&&(Xe=5)}function yi(t,e,n){var r=Ee,i=rn.transition;try{rn.transition=null,Ee=1,TC(t,e,n,r)}finally{rn.transition=i,Ee=r}return null}function TC(t,e,n,r){do Cs();while(Mr!==null);if(pe&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ik(t,s),t===tt&&(Ge=tt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,UE(Ou,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=Ee;Ee=1;var a=pe;pe|=4,Wm.current=null,vC(t,n),NE(n,t),Wk(Bf),Lu=!!zf,Bf=zf=null,t.current=n,_C(n),QA(),pe=a,Ee=o,rn.transition=s}else t.current=n;if(jl&&(jl=!1,Mr=t,Xu=i),s=t.pendingLanes,s===0&&(Hr=null),JA(n.stateNode),Ut(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yu)throw Yu=!1,t=up,up=null,t;return Xu&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===cp?na++:(na=0,cp=t):na=0,di(),null}function Cs(){if(Mr!==null){var t=y1(Xu),e=rn.transition,n=Ee;try{if(rn.transition=null,Ee=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Xu=0,pe&6)throw Error(C(331));var i=pe;for(pe|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(RE(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,U=v;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(T){Fe(a,a.return,T)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(pe=i,di(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Fc,t)}catch{}r=!0}return r}finally{Ee=n,rn.transition=e}}return!1}function d0(t,e,n){e=Bs(n,e),e=vE(t,e,1),t=Wr(t,e,1),e=Nt(),t!==null&&(Ya(t,1,e),Ut(t,e))}function Fe(t,e,n){if(t.tag===3)d0(t,t,n);else for(;e!==null;){if(e.tag===3){d0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=Bs(n,t),t=_E(e,t,1),e=Wr(e,t,1),t=Nt(),e!==null&&(Ya(e,1,t),Ut(e,t));break}}e=e.return}}function SC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ct&n)===n&&(Xe===4||Xe===3&&(ct&130023424)===ct&&500>ze()-qm?ki(t,0):Hm|=n),Ut(t,e)}function FE(t,e){e===0&&(t.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var n=Nt();t=ur(t,e),t!==null&&(Ya(t,e,n),Ut(t,n))}function AC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FE(t,n)}function kC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),FE(t,n)}var jE;jE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,pC(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Oe&&e.flags&1048576&&B1(e,zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=Fs(e,At.current);ks(e,n),i=Fm(null,e,r,t,i,n);var s=jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,ju(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dm(e),i.updater=Hc,e.stateNode=i,i._reactInternals=e,Jf(e,r,t,n),e=tp(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&km(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RC(r),t=fn(r,t),i){case 0:e=ep(null,e,r,t,n);break e;case 1:e=n0(null,e,r,t,n);break e;case 11:e=e0(null,e,r,t,n);break e;case 14:e=t0(null,e,r,fn(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),ep(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),n0(t,e,r,i,n);case 3:e:{if(xE(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,G1(t,e),Hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(C(423)),e),e=r0(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(C(424)),e),e=r0(t,e,r,n,i);break e}else for(Wt=Br(e.stateNode.containerInfo.firstChild),qt=e,Oe=!0,yn=null,n=X1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),r===i){e=cr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return J1(e),t===null&&Qf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wf(r,i)?o=null:s!==null&&Wf(r,s)&&(e.flags|=32),IE(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Qf(e),null;case 13:return TE(t,e,n);case 4:return Lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),e0(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(Bu,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!Ft.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=on(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),t0(t,e,r,i,n);case 15:return wE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),gu(t,e),e.tag=1,jt(r)?(t=!0,ju(e)):t=!1,ks(e,n),Q1(e,r,i),Jf(e,r,i,n),tp(null,e,r,!0,t,n);case 19:return SE(t,e,n);case 22:return EE(t,e,n)}throw Error(C(156,e.tag))};function UE(t,e){return f1(t,e)}function CC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new CC(t,e,n,r)}function Ym(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RC(t){if(typeof t=="function")return Ym(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mm)return 11;if(t===gm)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ym(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Ci(n.children,i,s,e);case pm:o=8,i|=8;break;case If:return t=nn(12,n,e,i|2),t.elementType=If,t.lanes=s,t;case xf:return t=nn(13,n,e,i),t.elementType=xf,t.lanes=s,t;case Tf:return t=nn(19,n,e,i),t.elementType=Tf,t.lanes=s,t;case Yw:return Qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kw:o=10;break e;case Qw:o=9;break e;case mm:o=11;break e;case gm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=nn(22,t,r,e),t.elementType=Yw,t.lanes=n,t.stateNode={isHidden:!1},t}function Ld(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xm(t,e,n,r,i,s,o,a,l){return t=new PC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dm(s),t}function bC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zE(t){if(!t)return ri;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(jt(n))return U1(t,n,e)}return e}function BE(t,e,n,r,i,s,o,a,l){return t=Xm(n,r,!0,t,i,s,o,a,l),t.context=zE(null),n=t.current,r=Nt(),i=qr(n),s=sr(r,i),s.callback=e??null,Wr(n,s,i),t.current.lanes=i,Ya(t,i,r),Ut(t,r),t}function Yc(t,e,n,r){var i=e.current,s=Nt(),o=qr(i);return n=zE(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(En(t,i,o,s),fu(t,i,o)),o}function Zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function f0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jm(t,e){f0(t,e),(t=t.alternate)&&f0(t,e)}function NC(){return null}var WE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zm(t){this._internalRoot=t}Xc.prototype.render=Zm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Yc(t,e,null,null)};Xc.prototype.unmount=Zm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Yc(null,t,null,null)}),e[lr]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&I1(t)}};function eg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function p0(){}function OC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zu(o);s.call(u)}}var o=BE(e,r,t,0,null,!1,!1,"",p0);return t._reactRootContainer=o,t[lr]=o.current,ya(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zu(l);a.call(u)}}var l=Xm(t,0,!1,null,null,!1,!1,"",p0);return t._reactRootContainer=l,t[lr]=l.current,ya(t.nodeType===8?t.parentNode:t),Vi(function(){Yc(e,l,n,r)}),l}function Zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zu(o);a.call(l)}}Yc(e,o,t,i)}else o=OC(n,e,t,i,r);return Zu(o)}v1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(_m(e,n|1),Ut(e,ze()),!(pe&6)&&(Ws=ze()+500,di()))}break;case 13:Vi(function(){var r=ur(t,1);if(r!==null){var i=Nt();En(r,t,1,i)}}),Jm(t,1)}};wm=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Nt();En(e,t,134217728,n)}Jm(t,134217728)}};_1=function(t){if(t.tag===13){var e=qr(t),n=ur(t,e);if(n!==null){var r=Nt();En(n,t,e,r)}Jm(t,e)}};w1=function(){return Ee};E1=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Df=function(t,e,n){switch(e){case"input":if(kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(C(90));Jw(r),kf(r,i)}}}break;case"textarea":e1(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};a1=Gm;l1=Vi;var DC={usingClientEntryPoint:!1,Events:[Ja,fs,Bc,s1,o1,Gm]},Po={findFiberByHostInstance:wi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LC={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h1(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||NC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{Fc=Ul.inject(LC),Ln=Ul}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DC;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eg(e))throw Error(C(200));return bC(t,e,null,n)};Yt.createRoot=function(t,e){if(!eg(t))throw Error(C(299));var n=!1,r="",i=WE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xm(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,ya(t.nodeType===8?t.parentNode:t),new Zm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=h1(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Vi(t)};Yt.hydrate=function(t,e,n){if(!Jc(e))throw Error(C(200));return Zc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!eg(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=WE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=BE(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xc(e)};Yt.render=function(t,e,n){if(!Jc(e))throw Error(C(200));return Zc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(C(40));return t._reactRootContainer?(Vi(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Gm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Zc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function HE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HE)}catch(t){console.error(t)}}HE(),Bw.exports=Yt;var qE=Bw.exports,m0=qE;wf.createRoot=m0.createRoot,wf.hydrateRoot=m0.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Aa.apply(this,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const g0="popstate";function MC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ec(i)}return $C(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VC(){return Math.random().toString(36).substr(2,8)}function y0(t,e){return{usr:t.state,key:t.key,idx:e}}function fp(t,e,n,r){return n===void 0&&(n=null),Aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?lo(e):e,{state:n,key:e&&e.key||r||VC()})}function ec(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function lo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $C(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Aa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Vr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function d(w,m){a=Vr.Push;let f=fp(y.location,w,m);n&&n(f,w),u=c()+1;let v=y0(f,u),E=y.createHref(f);try{o.pushState(v,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function p(w,m){a=Vr.Replace;let f=fp(y.location,w,m);n&&n(f,w),u=c();let v=y0(f,u),E=y.createHref(f);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function _(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:ec(w);return Be(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(g0,h),l=w,()=>{i.removeEventListener(g0,h),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let m=_(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(w){return o.go(w)}};return y}var v0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(v0||(v0={}));function FC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?lo(e):e,i=ng(r.pathname||"/",n);if(i==null)return null;let s=GE(t);jC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=QC(s[a],JC(i));return o}function GE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),GE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:GC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of KE(s.path))i(s,o,l)}),e}function KE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=KE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UC=/^:\w+$/,zC=3,BC=2,WC=1,HC=10,qC=-2,_0=t=>t==="*";function GC(t,e){let n=t.split("/"),r=n.length;return n.some(_0)&&(r+=qC),e&&(r+=BC),n.filter(i=>!_0(i)).reduce((i,s)=>i+(UC.test(s)?zC:s===""?WC:HC),r)}function KC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=YC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kr([i,c.pathname]),pathnameBase:nR(Kr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kr([i,c.pathnameBase]))}return s}function YC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ZC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function XC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JC(t){try{return decodeURI(t)}catch(e){return tg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ZC(t,e){try{return decodeURIComponent(t)}catch(n){return tg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ng(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function eR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?lo(t):t;return{pathname:n?n.startsWith("/")?n:tR(n,e):e,search:rR(r),hash:iR(i)}}function tR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ig(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=lo(t):(i=Aa({},t),Be(!i.pathname||!i.pathname.includes("?"),Vd("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Vd("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Vd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=eR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kr=t=>t.join("/").replace(/\/\/+/g,"/"),nR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QE=["post","put","patch","delete"];new Set(QE);const oR=["get",...QE];new Set(oR);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}const sg=I.createContext(null),YE=I.createContext(null),Ki=I.createContext(null),eh=I.createContext(null),_r=I.createContext({outlet:null,matches:[],isDataRoute:!1}),XE=I.createContext(null);function aR(t,e){let{relative:n}=e===void 0?{}:e;uo()||Be(!1);let{basename:r,navigator:i}=I.useContext(Ki),{hash:s,pathname:o,search:a}=og(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function uo(){return I.useContext(eh)!=null}function wr(){return uo()||Be(!1),I.useContext(eh).location}function JE(t){I.useContext(Ki).static||I.useLayoutEffect(t)}function Er(){let{isDataRoute:t}=I.useContext(_r);return t?IR():lR()}function lR(){uo()||Be(!1);let t=I.useContext(sg),{basename:e,navigator:n}=I.useContext(Ki),{matches:r}=I.useContext(_r),{pathname:i}=wr(),s=JSON.stringify(rg(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return JE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=ig(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const uR=I.createContext(null);function cR(t){let e=I.useContext(_r).outlet;return e&&I.createElement(uR.Provider,{value:t},e)}function og(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(_r),{pathname:i}=wr(),s=JSON.stringify(rg(r).map(o=>o.pathnameBase));return I.useMemo(()=>ig(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function hR(t,e){return dR(t,e)}function dR(t,e,n){uo()||Be(!1);let{navigator:r}=I.useContext(Ki),{matches:i}=I.useContext(_r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=wr(),u;if(e){var c;let y=typeof e=="string"?lo(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Be(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=FC(t,{pathname:d}),_=yR(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Kr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Kr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?I.createElement(eh.Provider,{value:{location:tc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Vr.Pop}},_):_}function fR(){let t=ER(),e=sR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const pR=I.createElement(fR,null);class mR extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(_r.Provider,{value:this.props.routeContext},I.createElement(XE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gR(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(sg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(_r.Provider,{value:e},r)}function yR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Be(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||pR);let d=e.concat(s.slice(0,u+1)),p=()=>{let _;return c?_=h:l.route.Component?_=I.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,I.createElement(gR,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(mR,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var pp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(pp||(pp={}));var ka;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ka||(ka={}));function vR(t){let e=I.useContext(sg);return e||Be(!1),e}function _R(t){let e=I.useContext(YE);return e||Be(!1),e}function wR(t){let e=I.useContext(_r);return e||Be(!1),e}function ZE(t){let e=wR(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function ER(){var t;let e=I.useContext(XE),n=_R(ka.UseRouteError),r=ZE(ka.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function IR(){let{router:t}=vR(pp.UseNavigateStable),e=ZE(ka.UseNavigateStable),n=I.useRef(!1);return JE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,tc({fromRouteId:e},s)))},[t,e])}function xR(t){let{to:e,replace:n,state:r,relative:i}=t;uo()||Be(!1);let{matches:s}=I.useContext(_r),{pathname:o}=wr(),a=Er(),l=ig(e,rg(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function TR(t){return cR(t.context)}function Qn(t){Be(!1)}function SR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:s,static:o=!1}=t;uo()&&Be(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=lo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,_=I.useMemo(()=>{let y=ng(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return _==null?null:I.createElement(Ki.Provider,{value:l},I.createElement(eh.Provider,{children:n,value:_}))}function AR(t){let{children:e,location:n}=t;return hR(mp(e),n)}var w0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(w0||(w0={}));new Promise(()=>{});function mp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,mp(r.props.children,s));return}r.type!==Qn&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nc.apply(this,arguments)}function eI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CR(t,e){return t.button===0&&(!e||e==="_self")&&!kR(t)}const RR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],PR=["aria-current","caseSensitive","className","end","style","to","children"],E0="startTransition";function bR(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=MC({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location}),l=I.useCallback(u=>{E0 in uv?uv[E0](()=>a(u)):a(u)},[a]);return I.useLayoutEffect(()=>s.listen(l),[s,l]),I.createElement(SR,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const NR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DR=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=eI(e,RR),{basename:d}=I.useContext(Ki),p,_=!1;if(typeof u=="string"&&OR.test(u)&&(p=u,NR))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=ng(v.pathname,d);v.origin===f.origin&&E!=null?u=E+v.search+v.hash:_=!0}catch{}let y=aR(u,{relative:i}),w=MR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||w(f)}return I.createElement("a",nc({},h,{href:p||y,onClick:_||s?r:m,ref:n,target:l}))}),LR=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=eI(e,PR),h=og(l,{relative:c.relative}),d=wr(),p=I.useContext(YE),{navigator:_}=I.useContext(Ki),y=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,w=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase());let f=w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/",v=m!=null&&(m===y||!o&&m.startsWith(y)&&m.charAt(y.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:v}):T=[s,f?"active":null,v?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:f,isPending:v}):a;return I.createElement(DR,nc({},c,{"aria-current":E,className:T,ref:n,style:S,to:l}),typeof u=="function"?u({isActive:f,isPending:v}):u)});var I0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(I0||(I0={}));var x0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(x0||(x0={}));function MR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Er(),l=wr(),u=og(t,{relative:o});return I.useCallback(c=>{if(CR(c,n)){c.preventDefault();let h=r!==void 0?r:ec(l)===ec(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var tI={exports:{}},nI={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=I;function VR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $R=typeof Object.is=="function"?Object.is:VR,FR=Hs.useState,jR=Hs.useEffect,UR=Hs.useLayoutEffect,zR=Hs.useDebugValue;function BR(t,e){var n=e(),r=FR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return UR(function(){i.value=n,i.getSnapshot=e,$d(i)&&s({inst:i})},[t,n,e]),jR(function(){return $d(i)&&s({inst:i}),t(function(){$d(i)&&s({inst:i})})},[t]),zR(n),n}function $d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$R(t,n)}catch{return!0}}function WR(t,e){return e()}var HR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?WR:BR;nI.useSyncExternalStore=Hs.useSyncExternalStore!==void 0?Hs.useSyncExternalStore:HR;tI.exports=nI;var qR=tI.exports,rI={exports:{}},iI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=I,GR=qR;function KR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var QR=typeof Object.is=="function"?Object.is:KR,YR=GR.useSyncExternalStore,XR=th.useRef,JR=th.useEffect,ZR=th.useMemo,eP=th.useDebugValue;iI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=XR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=ZR(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var _=o.value;if(i(_,p))return h=_}return h=p}if(_=h,QR(c,p))return _;var y=r(p);return i!==void 0&&i(_,y)?_:(c=p,h=y)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=YR(t,s[0],s[1]);return JR(function(){o.hasValue=!0,o.value=a},[a]),eP(a),a};rI.exports=iI;var tP=rI.exports;function nP(t){t()}let sI=nP;const rP=t=>sI=t,iP=()=>sI;let Fd=null;function sP(){return Fd||(Fd=I.createContext(null)),Fd}const ii=new Proxy({},new Proxy({},{get(t,e){const n=sP();return(r,...i)=>Reflect[e](n,...i)}}));function ag(t=ii){return function(){return I.useContext(t)}}const oI=ag(),oP=()=>{throw new Error("uSES not initialized!")};let aI=oP;const aP=t=>{aI=t},lP=(t,e)=>t===e;function uP(t=ii){const e=t===ii?oI:ag(t);return function(r,i={}){const{equalityFn:s=lP,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();I.useRef(!0);const p=I.useCallback({[r.name](y){return r(y)}}[r.name],[r,h,o]),_=aI(u.addNestedSub,l.getState,c||l.getState,p,s);return I.useDebugValue(_),_}}const ln=uP();var lI={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,lg=rt?Symbol.for("react.element"):60103,ug=rt?Symbol.for("react.portal"):60106,nh=rt?Symbol.for("react.fragment"):60107,rh=rt?Symbol.for("react.strict_mode"):60108,ih=rt?Symbol.for("react.profiler"):60114,sh=rt?Symbol.for("react.provider"):60109,oh=rt?Symbol.for("react.context"):60110,cg=rt?Symbol.for("react.async_mode"):60111,ah=rt?Symbol.for("react.concurrent_mode"):60111,lh=rt?Symbol.for("react.forward_ref"):60112,uh=rt?Symbol.for("react.suspense"):60113,cP=rt?Symbol.for("react.suspense_list"):60120,ch=rt?Symbol.for("react.memo"):60115,hh=rt?Symbol.for("react.lazy"):60116,hP=rt?Symbol.for("react.block"):60121,dP=rt?Symbol.for("react.fundamental"):60117,fP=rt?Symbol.for("react.responder"):60118,pP=rt?Symbol.for("react.scope"):60119;function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case lg:switch(t=t.type,t){case cg:case ah:case nh:case ih:case rh:case uh:return t;default:switch(t=t&&t.$$typeof,t){case oh:case lh:case hh:case ch:case sh:return t;default:return e}}case ug:return e}}}function uI(t){return Jt(t)===ah}xe.AsyncMode=cg;xe.ConcurrentMode=ah;xe.ContextConsumer=oh;xe.ContextProvider=sh;xe.Element=lg;xe.ForwardRef=lh;xe.Fragment=nh;xe.Lazy=hh;xe.Memo=ch;xe.Portal=ug;xe.Profiler=ih;xe.StrictMode=rh;xe.Suspense=uh;xe.isAsyncMode=function(t){return uI(t)||Jt(t)===cg};xe.isConcurrentMode=uI;xe.isContextConsumer=function(t){return Jt(t)===oh};xe.isContextProvider=function(t){return Jt(t)===sh};xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===lg};xe.isForwardRef=function(t){return Jt(t)===lh};xe.isFragment=function(t){return Jt(t)===nh};xe.isLazy=function(t){return Jt(t)===hh};xe.isMemo=function(t){return Jt(t)===ch};xe.isPortal=function(t){return Jt(t)===ug};xe.isProfiler=function(t){return Jt(t)===ih};xe.isStrictMode=function(t){return Jt(t)===rh};xe.isSuspense=function(t){return Jt(t)===uh};xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===nh||t===ah||t===ih||t===rh||t===uh||t===cP||typeof t=="object"&&t!==null&&(t.$$typeof===hh||t.$$typeof===ch||t.$$typeof===sh||t.$$typeof===oh||t.$$typeof===lh||t.$$typeof===dP||t.$$typeof===fP||t.$$typeof===pP||t.$$typeof===hP)};xe.typeOf=Jt;lI.exports=xe;var hg=lI.exports,dg=hg,mP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fg={};fg[dg.ForwardRef]=yP;fg[dg.Memo]=cI;function T0(t){return dg.isMemo(t)?cI:fg[t.$$typeof]||mP}var vP=Object.defineProperty,_P=Object.getOwnPropertyNames,S0=Object.getOwnPropertySymbols,wP=Object.getOwnPropertyDescriptor,EP=Object.getPrototypeOf,A0=Object.prototype;function hI(t,e,n){if(typeof e!="string"){if(A0){var r=EP(e);r&&r!==A0&&hI(t,r,n)}var i=_P(e);S0&&(i=i.concat(S0(e)));for(var s=T0(t),o=T0(e),a=0;a<i.length;++a){var l=i[a];if(!gP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=wP(e,l);try{vP(t,l,u)}catch{}}}}return t}var IP=hI;const xP=om(IP);var Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=Symbol.for("react.element"),mg=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),TP=Symbol.for("react.server_context"),yh=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),Eh=Symbol.for("react.lazy"),SP=Symbol.for("react.offscreen"),dI;dI=Symbol.for("react.module.reference");function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case pg:switch(t=t.type,t){case dh:case ph:case fh:case vh:case _h:return t;default:switch(t=t&&t.$$typeof,t){case TP:case gh:case yh:case Eh:case wh:case mh:return t;default:return e}}case mg:return e}}}Te.ContextConsumer=gh;Te.ContextProvider=mh;Te.Element=pg;Te.ForwardRef=yh;Te.Fragment=dh;Te.Lazy=Eh;Te.Memo=wh;Te.Portal=mg;Te.Profiler=ph;Te.StrictMode=fh;Te.Suspense=vh;Te.SuspenseList=_h;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(t){return un(t)===gh};Te.isContextProvider=function(t){return un(t)===mh};Te.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===pg};Te.isForwardRef=function(t){return un(t)===yh};Te.isFragment=function(t){return un(t)===dh};Te.isLazy=function(t){return un(t)===Eh};Te.isMemo=function(t){return un(t)===wh};Te.isPortal=function(t){return un(t)===mg};Te.isProfiler=function(t){return un(t)===ph};Te.isStrictMode=function(t){return un(t)===fh};Te.isSuspense=function(t){return un(t)===vh};Te.isSuspenseList=function(t){return un(t)===_h};Te.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===dh||t===ph||t===fh||t===vh||t===_h||t===SP||typeof t=="object"&&t!==null&&(t.$$typeof===Eh||t.$$typeof===wh||t.$$typeof===mh||t.$$typeof===gh||t.$$typeof===yh||t.$$typeof===dI||t.getModuleId!==void 0)};Te.typeOf=un;function AP(){const t=iP();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const k0={notify(){},get:()=>[]};function kP(t,e){let n,r=k0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=AP())}function u(){n&&(n(),n=void 0,r.clear(),r=k0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const CP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RP=CP?I.useLayoutEffect:I.useEffect;function PP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=I.useMemo(()=>{const u=kP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=I.useMemo(()=>t.getState(),[t]);RP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||ii;return bt.createElement(l.Provider,{value:o},n)}function fI(t=ii){const e=t===ii?oI:ag(t);return function(){const{store:r}=e();return r}}const bP=fI();function NP(t=ii){const e=t===ii?bP:fI(t);return function(){return e().dispatch}}const Qi=NP();aP(tP.useSyncExternalStoreWithSelector);rP(qE.unstable_batchedUpdates);const cn=t=>t.auth;function OP(t){function e(L,F,j,X,x){for(var ae=0,D=0,be=0,me=0,ye,ie,Qe=0,O=0,Q,$e=Q=ye=0,he=0,st=0,wo=0,ot=0,Tl=j.length,Eo=Tl-1,hn,ne="",Ue="",ud="",cd="",xr;he<Tl;){if(ie=j.charCodeAt(he),he===Eo&&D+me+be+ae!==0&&(D!==0&&(ie=D===47?10:47),me=be=ae=0,Tl++,Eo++),D+me+be+ae===0){if(he===Eo&&(0<st&&(ne=ne.replace(d,"")),0<ne.trim().length)){switch(ie){case 32:case 9:case 59:case 13:case 10:break;default:ne+=j.charAt(he)}ie=59}switch(ie){case 123:for(ne=ne.trim(),ye=ne.charCodeAt(0),Q=1,ot=++he;he<Tl;){switch(ie=j.charCodeAt(he)){case 123:Q++;break;case 125:Q--;break;case 47:switch(ie=j.charCodeAt(he+1)){case 42:case 47:e:{for($e=he+1;$e<Eo;++$e)switch(j.charCodeAt($e)){case 47:if(ie===42&&j.charCodeAt($e-1)===42&&he+2!==$e){he=$e+1;break e}break;case 10:if(ie===47){he=$e+1;break e}}he=$e}}break;case 91:ie++;case 40:ie++;case 34:case 39:for(;he++<Eo&&j.charCodeAt(he)!==ie;);}if(Q===0)break;he++}switch(Q=j.substring(ot,he),ye===0&&(ye=(ne=ne.replace(h,"").trim()).charCodeAt(0)),ye){case 64:switch(0<st&&(ne=ne.replace(d,"")),ie=ne.charCodeAt(1),ie){case 100:case 109:case 115:case 45:st=F;break;default:st=oe}if(Q=e(F,st,Q,ie,x+1),ot=Q.length,0<N&&(st=n(oe,ne,wo),xr=a(3,Q,st,F,B,fe,ot,ie,x,X),ne=st.join(""),xr!==void 0&&(ot=(Q=xr.trim()).length)===0&&(ie=0,Q="")),0<ot)switch(ie){case 115:ne=ne.replace(S,o);case 100:case 109:case 45:Q=ne+"{"+Q+"}";break;case 107:ne=ne.replace(f,"$1 $2"),Q=ne+"{"+Q+"}",Q=J===1||J===2&&s("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=ne+Q,X===112&&(Q=(Ue+=Q,""))}else Q="";break;default:Q=e(F,n(F,ne,wo),Q,X,x+1)}ud+=Q,Q=wo=st=$e=ye=0,ne="",ie=j.charCodeAt(++he);break;case 125:case 59:if(ne=(0<st?ne.replace(d,""):ne).trim(),1<(ot=ne.length))switch($e===0&&(ye=ne.charCodeAt(0),ye===45||96<ye&&123>ye)&&(ot=(ne=ne.replace(" ",":")).length),0<N&&(xr=a(1,ne,F,L,B,fe,Ue.length,X,x,X))!==void 0&&(ot=(ne=xr.trim()).length)===0&&(ne="\0\0"),ye=ne.charCodeAt(0),ie=ne.charCodeAt(1),ye){case 0:break;case 64:if(ie===105||ie===99){cd+=ne+j.charAt(he);break}default:ne.charCodeAt(ot-1)!==58&&(Ue+=i(ne,ye,ie,ne.charCodeAt(2)))}wo=st=$e=ye=0,ne="",ie=j.charCodeAt(++he)}}switch(ie){case 13:case 10:D===47?D=0:1+ye===0&&X!==107&&0<ne.length&&(st=1,ne+="\0"),0<N*Y&&a(0,ne,F,L,B,fe,Ue.length,X,x,X),fe=1,B++;break;case 59:case 125:if(D+me+be+ae===0){fe++;break}default:switch(fe++,hn=j.charAt(he),ie){case 9:case 32:if(me+ae+D===0)switch(Qe){case 44:case 58:case 9:case 32:hn="";break;default:ie!==32&&(hn=" ")}break;case 0:hn="\\0";break;case 12:hn="\\f";break;case 11:hn="\\v";break;case 38:me+D+ae===0&&(st=wo=1,hn="\f"+hn);break;case 108:if(me+D+ae+W===0&&0<$e)switch(he-$e){case 2:Qe===112&&j.charCodeAt(he-3)===58&&(W=Qe);case 8:O===111&&(W=O)}break;case 58:me+D+ae===0&&($e=he);break;case 44:D+be+me+ae===0&&(st=1,hn+="\r");break;case 34:case 39:D===0&&(me=me===ie?0:me===0?ie:me);break;case 91:me+D+be===0&&ae++;break;case 93:me+D+be===0&&ae--;break;case 41:me+D+ae===0&&be--;break;case 40:if(me+D+ae===0){if(ye===0)switch(2*Qe+3*O){case 533:break;default:ye=1}be++}break;case 64:D+be+me+ae+$e+Q===0&&(Q=1);break;case 42:case 47:if(!(0<me+ae+be))switch(D){case 0:switch(2*ie+3*j.charCodeAt(he+1)){case 235:D=47;break;case 220:ot=he,D=42}break;case 42:ie===47&&Qe===42&&ot+2!==he&&(j.charCodeAt(ot+2)===33&&(Ue+=j.substring(ot,he+1)),hn="",D=0)}}D===0&&(ne+=hn)}O=Qe,Qe=ie,he++}if(ot=Ue.length,0<ot){if(st=F,0<N&&(xr=a(2,Ue,st,L,B,fe,ot,X,x,X),xr!==void 0&&(Ue=xr).length===0))return cd+Ue+ud;if(Ue=st.join(",")+"{"+Ue+"}",J*W!==0){switch(J!==2||s(Ue,2)||(W=0),W){case 111:Ue=Ue.replace(E,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(v,"::-webkit-input-$1")+Ue.replace(v,"::-moz-$1")+Ue.replace(v,":-ms-input-$1")+Ue}W=0}}return cd+Ue+ud}function n(L,F,j){var X=F.trim().split(w);F=X;var x=X.length,ae=L.length;switch(ae){case 0:case 1:var D=0;for(L=ae===0?"":L[0]+" ";D<x;++D)F[D]=r(L,F[D],j).trim();break;default:var be=D=0;for(F=[];D<x;++D)for(var me=0;me<ae;++me)F[be++]=r(L[me]+" ",X[D],j).trim()}return F}function r(L,F,j){var X=F.charCodeAt(0);switch(33>X&&(X=(F=F.trim()).charCodeAt(0)),X){case 38:return F.replace(m,"$1"+L.trim());case 58:return L.trim()+F.replace(m,"$1"+L.trim());default:if(0<1*j&&0<F.indexOf("\f"))return F.replace(m,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+F}function i(L,F,j,X){var x=L+";",ae=2*F+3*j+4*X;if(ae===944){L=x.indexOf(":",9)+1;var D=x.substring(L,x.length-1).trim();return D=x.substring(0,L).trim()+D+";",J===1||J===2&&s(D,1)?"-webkit-"+D+D:D}if(J===0||J===2&&!s(x,1))return x;switch(ae){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(z,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return D=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+x+"-ms-flex-pack"+D+x;case 1005:return _.test(x)?x.replace(p,":-webkit-")+x.replace(p,":-moz-")+x:x;case 1e3:switch(D=x.substring(13).trim(),F=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(F)){case 226:D=x.replace(T,"tb");break;case 232:D=x.replace(T,"tb-rl");break;case 220:D=x.replace(T,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+D+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(F=(x=L).length-10,D=(x.charCodeAt(F)===33?x.substring(0,F):x).substring(L.indexOf(":",7)+1).trim(),ae=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:x=x.replace(D,"-webkit-"+D)+";"+x;break;case 207:case 102:x=x.replace(D,"-webkit-"+(102<ae?"inline-":"")+"box")+";"+x.replace(D,"-webkit-"+D)+";"+x.replace(D,"-ms-"+D+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return D=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+D+"-ms-flex-"+D+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(R,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(R,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if($.test(L)===!0)return(D=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),F,j,X).replace(":fill-available",":stretch"):x.replace(D,"-webkit-"+D)+x.replace(D,"-moz-"+D.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,j+X===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+x}return x}function s(L,F){var j=L.indexOf(F===1?":":"{"),X=L.substring(0,F!==3?j:10);return j=L.substring(j+1,L.length-1),K(F!==2?X:X.replace(G,"$1"),j,F)}function o(L,F){var j=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return j!==F+";"?j.replace(b," or ($1)").substring(4):"("+F+")"}function a(L,F,j,X,x,ae,D,be,me,ye){for(var ie=0,Qe=F,O;ie<N;++ie)switch(O=ce[ie].call(c,L,Qe,j,X,x,ae,D,be,me,ye)){case void 0:case!1:case!0:case null:break;default:Qe=O}if(Qe!==F)return Qe}function l(L){switch(L){case void 0:case null:N=ce.length=0;break;default:if(typeof L=="function")ce[N++]=L;else if(typeof L=="object")for(var F=0,j=L.length;F<j;++F)l(L[F]);else Y=!!L|0}return l}function u(L){return L=L.prefix,L!==void 0&&(K=null,L?typeof L!="function"?J=1:(J=2,K=L):J=0),u}function c(L,F){var j=L;if(33>j.charCodeAt(0)&&(j=j.trim()),_e=j,j=[_e],0<N){var X=a(-1,F,j,j,B,fe,0,0,0,0);X!==void 0&&typeof X=="string"&&(F=X)}var x=e(oe,j,F,0,0);return 0<N&&(X=a(-2,x,j,j,B,fe,x.length,0,0,0),X!==void 0&&(x=X)),_e="",W=0,fe=B=1,x}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,_=/zoo|gra/,y=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,R=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,fe=1,B=1,W=0,J=1,oe=[],ce=[],N=0,K=null,Y=0,_e="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var DP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function LP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var MP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,C0=LP(function(t){return MP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function tr(){return(tr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var R0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},gp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!hg.typeOf(t)},rc=Object.freeze([]),Qr=Object.freeze({});function Ca(t){return typeof t=="function"}function P0(t){return t.displayName||t.name||"Component"}function gg(t){return t&&typeof t.styledComponentId=="string"}var qs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yg=typeof window<"u"&&"HTMLElement"in window,VP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function el(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $P=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&el(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),wu=new Map,ic=new Map,ra=1,zl=function(t){if(wu.has(t))return wu.get(t);for(;ic.has(ra);)ra++;var e=ra++;return wu.set(t,e),ic.set(e,t),e},FP=function(t){return ic.get(t)},jP=function(t,e){e>=ra&&(ra=e+1),wu.set(t,e),ic.set(e,t)},UP="style["+qs+'][data-styled-version="5.3.11"]',zP=new RegExp("^"+qs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),BP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},WP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(zP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(jP(u,l),BP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},HP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},pI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(qs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(qs,"active"),r.setAttribute("data-styled-version","5.3.11");var o=HP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},qP=function(){function t(n){var r=this.element=pI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}el(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),GP=function(){function t(n){var r=this.element=pI(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),KP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),b0=yg,QP={isServer:!yg,useCSSOMInjection:!VP},mI=function(){function t(n,r,i){n===void 0&&(n=Qr),r===void 0&&(r={}),this.options=tr({},QP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&yg&&b0&&(b0=!1,function(s){for(var o=document.querySelectorAll(UP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(qs)!=="active"&&(WP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return zl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(tr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new KP(o):s?new qP(o):new GP(o),new $P(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(zl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(zl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(zl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=FP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=qs+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),YP=/(a)(d)/gi,N0=function(t){return String.fromCharCode(t+(t>25?39:97))};function yp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=N0(e%52)+n;return(N0(e%52)+n).replace(YP,"$1-$2")}var ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},gI=function(t){return ws(5381,t)};function XP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ca(n)&&!gg(n))return!1}return!0}var JP=gI("5.3.11"),ZP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XP(e),this.componentId=n,this.baseHash=ws(JP,n),this.baseStyle=r,mI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Gs(this.rules,e,n,r).join(""),a=yp(ws(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ws(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var _=Gs(p,e,n,r),y=Array.isArray(_)?_.join(""):_;c=ws(c,y+d),h+=y}}if(h){var w=yp(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),e2=/^\s*\/\/.*$/gm,t2=[":","[",".","#"];function n2(t){var e,n,r,i,s=t===void 0?Qr:t,o=s.options,a=o===void 0?Qr:o,l=s.plugins,u=l===void 0?rc:l,c=new OP(a),h=[],d=function(y){function w(m){if(m)try{y(m+"}")}catch{}}return function(m,f,v,E,T,S,b,R,G,$){switch(m){case 1:if(G===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(R===0)return f+"/*|*/";break;case 3:switch(R){case 102:case 112:return y(v[0]+f),"";default:return f+($===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(y){h.push(y)}),p=function(y,w,m){return w===0&&t2.indexOf(m[n.length])!==-1||m.match(i)?y:"."+e};function _(y,w,m,f){f===void 0&&(f="&");var v=y.replace(e2,""),E=w&&m?m+" "+w+" { "+v+" }":v;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,E)}return c.use([].concat(u,[function(y,w,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(y){if(y===-2){var w=h;return h=[],w}}])),_.hash=u.length?u.reduce(function(y,w){return w.name||el(15),ws(y,w.name)},5381).toString():"",_}var yI=bt.createContext();yI.Consumer;var vI=bt.createContext(),r2=(vI.Consumer,new mI),vp=n2();function i2(){return I.useContext(yI)||r2}function s2(){return I.useContext(vI)||vp}var o2=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=vp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return el(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=vp),this.name+e.hash},t}(),a2=/([A-Z])/,l2=/([A-Z])/g,u2=/^ms-/,c2=function(t){return"-"+t.toLowerCase()};function O0(t){return a2.test(t)?t.replace(l2,c2).replace(u2,"-ms-"):t}var D0=function(t){return t==null||t===!1||t===""};function Gs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Gs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(D0(t))return"";if(gg(t))return"."+t.styledComponentId;if(Ca(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Gs(l,e,n,r)}var u;return t instanceof o2?n?(t.inject(n,r),t.getName(r)):t:gp(t)?function c(h,d){var p,_,y=[];for(var w in h)h.hasOwnProperty(w)&&!D0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||Ca(h[w])?y.push(O0(w)+":",h[w],";"):gp(h[w])?y.push.apply(y,c(h[w],w)):y.push(O0(w)+": "+(p=w,(_=h[w])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||p in DP||p.startsWith("--")?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var L0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function h2(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ca(t)||gp(t)?L0(Gs(R0(rc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:L0(Gs(R0(t,n)))}var d2=function(t,e,n){return n===void 0&&(n=Qr),t.theme!==n.theme&&t.theme||e||n.theme},f2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p2=/(^-|-$)/g;function jd(t){return t.replace(f2,"-").replace(p2,"")}var m2=function(t){return yp(gI(t)>>>0)};function Bl(t){return typeof t=="string"&&!0}var _p=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},g2=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function y2(t,e,n){var r=t[n];_p(e)&&_p(r)?_I(r,e):t[n]=e}function _I(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(_p(o))for(var a in o)g2(a)&&y2(t,o[a],a)}return t}var wI=bt.createContext();wI.Consumer;var Ud={};function EI(t,e,n){var r=gg(t),i=!Bl(t),s=e.attrs,o=s===void 0?rc:s,a=e.componentId,l=a===void 0?function(f,v){var E=typeof f!="string"?"sc":jd(f);Ud[E]=(Ud[E]||0)+1;var T=E+"-"+m2("5.3.11"+E+Ud[E]);return v?v+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Bl(f)?"styled."+f:"Styled("+P0(f)+")"}(t):u,h=e.displayName&&e.componentId?jd(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,v,E){return t.shouldForwardProp(f,v,E)&&e.shouldForwardProp(f,v,E)}:t.shouldForwardProp);var _,y=new ZP(n,h,r?t.componentStyle:void 0),w=y.isStatic&&o.length===0,m=function(f,v){return function(E,T,S,b){var R=E.attrs,G=E.componentStyle,$=E.defaultProps,z=E.foldedComponentIds,fe=E.shouldForwardProp,B=E.styledComponentId,W=E.target,J=function(X,x,ae){X===void 0&&(X=Qr);var D=tr({},x,{theme:X}),be={};return ae.forEach(function(me){var ye,ie,Qe,O=me;for(ye in Ca(O)&&(O=O(D)),O)D[ye]=be[ye]=ye==="className"?(ie=be[ye],Qe=O[ye],ie&&Qe?ie+" "+Qe:ie||Qe):O[ye]}),[D,be]}(d2(T,I.useContext(wI),$)||Qr,T,R),oe=J[0],ce=J[1],N=function(X,x,ae,D){var be=i2(),me=s2(),ye=x?X.generateAndInjectStyles(Qr,be,me):X.generateAndInjectStyles(ae,be,me);return ye}(G,b,oe),K=S,Y=ce.$as||T.$as||ce.as||T.as||W,_e=Bl(Y),L=ce!==T?tr({},T,{},ce):T,F={};for(var j in L)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?F.as=L[j]:(fe?fe(j,C0,Y):!_e||C0(j))&&(F[j]=L[j]));return T.style&&ce.style!==T.style&&(F.style=tr({},T.style,{},ce.style)),F.className=Array.prototype.concat(z,B,N!==B?N:null,T.className,ce.className).filter(Boolean).join(" "),F.ref=K,I.createElement(Y,F)}(_,f,v,w)};return m.displayName=c,(_=bt.forwardRef(m)).attrs=d,_.componentStyle=y,_.displayName=c,_.shouldForwardProp=p,_.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):rc,_.styledComponentId=h,_.target=r?t.target:t,_.withComponent=function(f){var v=e.componentId,E=function(S,b){if(S==null)return{};var R,G,$={},z=Object.keys(S);for(G=0;G<z.length;G++)R=z[G],b.indexOf(R)>=0||($[R]=S[R]);return $}(e,["componentId"]),T=v&&v+"-"+(Bl(f)?f:jd(P0(f)));return EI(f,tr({},E,{attrs:d,componentId:T}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?_I({},t.defaultProps,f):f}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),i&&xP(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var wp=function(t){return function e(n,r,i){if(i===void 0&&(i=Qr),!hg.isValidElementType(r))return el(1,String(r));var s=function(){return n(r,i,h2.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,tr({},i,{},o))},s.attrs=function(o){return e(n,r,tr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(EI,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){wp[t]=wp(t)});const k=wp;var II={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},M0=bt.createContext&&bt.createContext(II),Yr=globalThis&&globalThis.__assign||function(){return Yr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Yr.apply(this,arguments)},v2=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function xI(t){return t&&t.map(function(e,n){return bt.createElement(e.tag,Yr({key:n},e.attr),xI(e.child))})}function Ir(t){return function(e){return bt.createElement(_2,Yr({attr:Yr({},t.attr)},e),xI(t.child))}}function _2(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=v2(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),bt.createElement("svg",Yr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Yr(Yr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&bt.createElement("title",null,s),t.children)};return M0!==void 0?bt.createElement(M0.Consumer,null,function(n){return e(n)}):e(II)}function w2(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const E2=k.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,I2=k.div`
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
`,x2=k(w2)`
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
`,T2=k.div`
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
`,S2=k.div`
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
`,A2=k.div`
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
`,k2=()=>{const t=Er();return g.jsx(A2,{onClick:()=>{t("/")}})},C2=k.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,V0=k(LR)`
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

  transition: color 0.25s, border-color 0.25s;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

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
`,R2=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],P2=()=>{const t=ln(cn);return g.jsxs(C2,{children:[R2.map((e,n)=>g.jsx(V0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&g.jsx(V0,{to:"/admin",children:"Адмін"},"admin")]})},zd=k.p`
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

    font-size: 38px;`,b2=k.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,N2=k.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,O2=k.div`
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
`,D2=k.div`
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
`,L2=k.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,Wl=k.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Hl=k.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,M2=k.div`
  display: flex;
  flex-direction: column;
`,ql=k.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,V2=k.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,$0=k.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,$2=k.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,F2=k.div`
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
`,Gn=k.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,Gl=k.div`
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
`,rs=k.h3`
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
`,kn=k.input`
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
`,Kl=k.button`
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
`,Kn=k.div`
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
`,j2=k.div`
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
`,U2=k.ul`
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
`,z2=k.li`
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
 */const TI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},B2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},SI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(TI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):B2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new W2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H2=function(t){const e=TI(t);return SI.encodeByteArray(e,!0)},sc=function(t){return H2(t).replace(/\./g,"")},AI=function(t){try{return SI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function q2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const G2=()=>q2().__FIREBASE_DEFAULTS__,K2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Q2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AI(t[1]);return e&&JSON.parse(e)},vg=()=>{try{return G2()||K2()||Q2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kI=t=>{var e,n;return(n=(e=vg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CI=t=>{const e=kI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RI=()=>{var t;return(t=vg())===null||t===void 0?void 0:t.config},PI=t=>{var e;return(e=vg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function J2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eb(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tb(){try{return typeof indexedDB=="object"}catch{return!1}}function nb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rb,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ib(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,a,r)}}function ib(t,e){return t.replace(sb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sb=/\{\$([^}]+)}/g;function ob(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(F0(s)&&F0(o)){if(!oc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ab(t,e){const n=new lb(t,e);return n.subscribe.bind(n)}class lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ub(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bd),i.error===void 0&&(i.error=Bd),i.complete===void 0&&(i.complete=Bd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bd(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vi="[DEFAULT]";/**
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
 */class cb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Y2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(db(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(t){return t===vi?void 0:t}function db(t){return t.instantiationMode==="EAGER"}/**
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
 */class fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const pb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},mb=ge.INFO,gb={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _g{constructor(e){this.name=e,this._logLevel=mb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let j0,U0;function _b(){return j0||(j0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return U0||(U0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NI=new WeakMap,Ep=new WeakMap,OI=new WeakMap,Wd=new WeakMap,wg=new WeakMap;function Eb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NI.set(n,t)}).catch(()=>{}),wg.set(e,t),e}function Ib(t){if(Ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ep.set(t,e)}let Ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||OI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xb(t){Ip=t(Ip)}function Tb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hd(this),e,...n);return OI.set(r,e.sort?e.sort():[e]),Xr(r)}:wb().includes(t)?function(...e){return t.apply(Hd(this),e),Xr(NI.get(this))}:function(...e){return Xr(t.apply(Hd(this),e))}}function Sb(t){return typeof t=="function"?Tb(t):(t instanceof IDBTransaction&&Ib(t),vb(t,_b())?new Proxy(t,Ip):t)}function Xr(t){if(t instanceof IDBRequest)return Eb(t);if(Wd.has(t))return Wd.get(t);const e=Sb(t);return e!==t&&(Wd.set(t,e),wg.set(e,t)),e}const Hd=t=>wg.get(t);function Ab(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xr(o.result),l.oldVersion,l.newVersion,Xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const kb=["get","getKey","getAll","getAllKeys","count"],Cb=["put","add","delete","clear"],qd=new Map;function z0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qd.get(e))return qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Cb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qd.set(e,s),s}xb(t=>({...t,get:(e,n,r)=>z0(e,n)||t.get(e,n,r),has:(e,n)=>!!z0(e,n)||t.has(e,n)}));/**
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
 */class Rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",B0="0.9.15";/**
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
 */const $i=new _g("@firebase/app"),bb="@firebase/app-compat",Nb="@firebase/analytics-compat",Ob="@firebase/analytics",Db="@firebase/app-check-compat",Lb="@firebase/app-check",Mb="@firebase/auth",Vb="@firebase/auth-compat",$b="@firebase/database",Fb="@firebase/database-compat",jb="@firebase/functions",Ub="@firebase/functions-compat",zb="@firebase/installations",Bb="@firebase/installations-compat",Wb="@firebase/messaging",Hb="@firebase/messaging-compat",qb="@firebase/performance",Gb="@firebase/performance-compat",Kb="@firebase/remote-config",Qb="@firebase/remote-config-compat",Yb="@firebase/storage",Xb="@firebase/storage-compat",Jb="@firebase/firestore",Zb="@firebase/firestore-compat",eN="firebase",tN="10.1.0";/**
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
 */const Tp="[DEFAULT]",nN={[xp]:"fire-core",[bb]:"fire-core-compat",[Ob]:"fire-analytics",[Nb]:"fire-analytics-compat",[Lb]:"fire-app-check",[Db]:"fire-app-check-compat",[Mb]:"fire-auth",[Vb]:"fire-auth-compat",[$b]:"fire-rtdb",[Fb]:"fire-rtdb-compat",[jb]:"fire-fn",[Ub]:"fire-fn-compat",[zb]:"fire-iid",[Bb]:"fire-iid-compat",[Wb]:"fire-fcm",[Hb]:"fire-fcm-compat",[qb]:"fire-perf",[Gb]:"fire-perf-compat",[Kb]:"fire-rc",[Qb]:"fire-rc-compat",[Yb]:"fire-gcs",[Xb]:"fire-gcs-compat",[Jb]:"fire-fst",[Zb]:"fire-fst-compat","fire-js":"fire-js",[eN]:"fire-js-all"};/**
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
 */const ac=new Map,Sp=new Map;function rN(t,e){try{t.container.addComponent(e)}catch(n){$i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fi(t){const e=t.name;if(Sp.has(e))return $i.debug(`There were multiple attempts to register component ${e}.`),!1;Sp.set(e,t);for(const n of ac.values())rN(n,t);return!0}function Ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const iN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jr=new tl("app","Firebase",iN);/**
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
 */class sN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=tN;function DI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=RI()),!n)throw Jr.create("no-options");const s=ac.get(i);if(s){if(oc(n,s.options)&&oc(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new fb(i);for(const l of Sp.values())o.addComponent(l);const a=new sN(n,r,o);return ac.set(i,a),a}function Eg(t=Tp){const e=ac.get(t);if(!e&&t===Tp&&RI())return DI();if(!e)throw Jr.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let i=(r=nN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$i.warn(a.join(" "));return}Fi(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const oN="firebase-heartbeat-database",aN=1,Ra="firebase-heartbeat-store";let Gd=null;function LI(){return Gd||(Gd=Ab(oN,aN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ra)}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),Gd}async function lN(t){try{return await(await LI()).transaction(Ra).objectStore(Ra).get(MI(t))}catch(e){if(e instanceof Wn)$i.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$i.warn(n.message)}}}async function W0(t,e){try{const r=(await LI()).transaction(Ra,"readwrite");await r.objectStore(Ra).put(e,MI(t)),await r.done}catch(n){if(n instanceof Wn)$i.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(r.message)}}}function MI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uN=1024,cN=30*24*60*60*1e3;class hN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=H0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=H0(),{heartbeatsToSend:n,unsentEntries:r}=dN(this._heartbeatsCache.heartbeats),i=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function H0(){return new Date().toISOString().substring(0,10)}function dN(t,e=uN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),q0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),q0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tb()?nb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return W0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return W0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function q0(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pN(t){Fi(new si("platform-logger",e=>new Rb(e),"PRIVATE")),Fi(new si("heartbeat",e=>new hN(e),"PRIVATE")),Vn(xp,B0,t),Vn(xp,B0,"esm2017"),Vn("fire-js","")}pN("");function Ig(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function VI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mN=VI,$I=new tl("auth","Firebase",VI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new _g("@firebase/auth");function gN(t,...e){lc.logLevel<=ge.WARN&&lc.warn(`Auth (${Yi}): ${t}`,...e)}function Eu(t,...e){lc.logLevel<=ge.ERROR&&lc.error(`Auth (${Yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,...e){throw xg(t,...e)}function $n(t,...e){return xg(t,...e)}function yN(t,e,n){const r=Object.assign(Object.assign({},mN()),{[e]:n});return new tl("auth","Firebase",r).create(e,{appName:t.name})}function xg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $I.create(t,...e)}function Z(t,e,...n){if(!t)throw xg(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eu(e),new Error(e)}function hr(t,e){t||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vN(){return G0()==="http:"||G0()==="https:"}function G0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vN()||J2()||"connection"in navigator)?navigator.onLine:!0}function wN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=X2()||Z2()}get(){return _N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new rl(3e4,6e4);function co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xi(t,e,n,r,i={}){return jI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=nl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),FI.fetch()(UI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EN),e);try{const i=new xN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ql(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ql(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ql(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ql(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yN(t,c,u);xn(t,c)}}catch(i){if(i instanceof Wn)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function il(t,e,n,r,i={}){const s=await Xi(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function UI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tg(t.config,i):`${t.config.apiScheme}://${i}`}class xN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),IN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){return Xi(t,"POST","/v1/accounts:delete",e)}async function SN(t,e){return Xi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Sg(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ia(Kd(i.auth_time)),issuedAtTime:ia(Kd(i.iat)),expirationTime:ia(Kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kd(t){return Number(t)*1e3}function Sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=AI(n);return i?JSON.parse(i):(Eu("Failed to decode base64 JWT payload"),null)}catch(i){return Eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kN(t){const e=Sg(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&CN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ia(this.lastLoginAt),this.creationTime=ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ks(t,SN(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NN(s.providerUserInfo):[],a=bN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function PN(t){const e=We(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NN(t){return t.map(e=>{var{providerId:n}=e,r=Ig(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e){const n=await jI(t,{},async()=>{const r=nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=UI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",FI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ON(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pa;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return PN(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ks(this,TN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:S,stsTokenManager:b}=n;Z(v&&b,e,"internal-error");const R=Pa.fromJSON(this.name,b);Z(typeof v=="string",e,"internal-error"),Sr(h,e.name),Sr(d,e.name),Z(typeof E=="boolean",e,"internal-error"),Z(typeof T=="boolean",e,"internal-error"),Sr(p,e.name),Sr(_,e.name),Sr(y,e.name),Sr(w,e.name),Sr(m,e.name),Sr(f,e.name);const G=new Ri({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:f});return S&&Array.isArray(S)&&(G.providerData=S.map($=>Object.assign({},$))),w&&(G._redirectEventId=w),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pa;i.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Map;function rr(t){hr(t instanceof Function,"Expected a class definition");let e=K0.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,K0.set(t,e),e)}/**
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
 */class BI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BI.type="NONE";const Q0=BI;/**
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
 */function Iu(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(rr(Q0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rr(Q0);const o=Iu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KI(e))return"Blackberry";if(QI(e))return"Webos";if(Ag(e))return"Safari";if((e.includes("chrome/")||HI(e))&&!e.includes("edge/"))return"Chrome";if(GI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WI(t=kt()){return/firefox\//i.test(t)}function Ag(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HI(t=kt()){return/crios\//i.test(t)}function qI(t=kt()){return/iemobile/i.test(t)}function GI(t=kt()){return/android/i.test(t)}function KI(t=kt()){return/blackberry/i.test(t)}function QI(t=kt()){return/webos/i.test(t)}function xh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DN(t=kt()){var e;return xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LN(){return eb()&&document.documentMode===10}function YI(t=kt()){return xh(t)||GI(t)||QI(t)||KI(t)||/windows phone/i.test(t)||qI(t)}function MN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e=[]){let n;switch(t){case"Browser":n=Y0(kt());break;case"Worker":n=`${Y0(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}async function JI(t,e){return Xi(t,"GET","/v2/recaptchaConfig",co(t,e))}function X0(t){return t!==void 0&&t.enterprise!==void 0}class ZI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ex(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VN().appendChild(r)})}function $N(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FN="https://www.google.com/recaptcha/enterprise.js?render=",jN="recaptcha-enterprise",UN="NO_RECAPTCHA";class tx{constructor(e){this.type=jN,this.auth=ho(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{JI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;X0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(UN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&X0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ex(FN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cc(t,e,n,r=!1){const i=new tx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class zN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new J0(this),this.idTokenSubscription=new J0(this),this.beforeStateQueue=new zN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$I,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}async initializeRecaptchaConfig(){const e=await JI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ZI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new tx(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ho(t){return We(t)}class J0{constructor(e){this.auth=e,this.observer=null,this.addObserver=ab(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t,e){const n=Ih(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(oc(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function HN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qN(t,e,n){const r=ho(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nx(e),{host:o,port:a}=GN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||KN()}function nx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GN(t){const e=nx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Z0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Z0(o)}}}function Z0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function QN(t,e){return Xi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e){return il(t,"POST","/v1/accounts:signInWithPassword",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,e){return il(t,"POST","/v1/accounts:signInWithEmailLink",co(t,e))}async function XN(t,e){return il(t,"POST","/v1/accounts:signInWithEmailLink",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends kg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ba(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ba(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await cc(e,r,"signInWithPassword");return Qd(e,i)}else return Qd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await cc(e,r,"signInWithPassword");return Qd(e,s)}else return Promise.reject(i)});case"emailLink":return YN(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return QN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XN(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return il(t,"POST","/v1/accounts:signInWithIdp",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="http://localhost";class ji extends kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ig(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:JN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eO(t){const e=$o(Fo(t)).link,n=e?$o(Fo(e)).deep_link_id:null,r=$o(Fo(t)).deep_link_id;return(r?$o(Fo(r)).link:null)||r||n||e||t}class Cg{constructor(e){var n,r,i,s,o,a;const l=$o(Fo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=ZN((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eO(e);try{return new Cg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return ba._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cg.parseLink(n);return Z(r,"argument-error"),ba._fromEmailAndCode(e,r.code,r.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sl extends rx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends sl{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends sl{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends sl{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(t,e){return il(t,"POST","/v1/accounts:signUp",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ri._fromIdTokenResponse(e,r,i),o=e_(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=e_(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function ix(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function tO(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function nO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ks(t,ix(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Sg(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e,n=!1){const r="signIn",i=await ix(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rO(t,e){return sx(ho(t),e)}async function iO(t,e,n){var r;const i=ho(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await cc(i,s,"signUpPassword");o=Yd(i,u)}else o=Yd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await cc(i,s,"signUpPassword");return Yd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ui._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function sO(t,e,n){return rO(We(t),fo.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(t,e){return Xi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ks(r,oO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function lO(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function uO(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function cO(t){return We(t).signOut()}const dc="__sak";/**
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
 */class ox{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(){const t=kt();return Ag(t)||xh(t)}const dO=1e3,fO=10;class ax extends ox{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hO()&&MN(),this.fallbackToPolling=YI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ax.type="LOCAL";const pO=ax;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx extends ox{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lx.type="SESSION";const ux=lx;/**
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
 */function mO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Th(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await mO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function yO(t){Fn().location.href=t}/**
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
 */function cx(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function vO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _O(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wO(){return cx()?self:null}/**
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
 */const hx="firebaseLocalStorageDb",EO=1,fc="firebaseLocalStorage",dx="fbase_key";class ol{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sh(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function IO(){const t=indexedDB.deleteDatabase(hx);return new ol(t).toPromise()}function kp(){const t=indexedDB.open(hx,EO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:dx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await IO(),e(await kp()))})})}async function t_(t,e,n){const r=Sh(t,!0).put({[dx]:e,value:n});return new ol(r).toPromise()}async function xO(t,e){const n=Sh(t,!1).get(e),r=await new ol(n).toPromise();return r===void 0?null:r.value}function n_(t,e){const n=Sh(t,!0).delete(e);return new ol(n).toPromise()}const TO=800,SO=3;class fx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Th._getInstance(wO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vO(),!this.activeServiceWorker)return;this.sender=new gO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_O()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kp();return await t_(e,dc,"1"),await n_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sh(i,!1).getAll();return new ol(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fx.type="LOCAL";const AO=fx;new rl(3e4,6e4);/**
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
 */function kO(t,e){return e?rr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pg extends kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CO(t){return sx(t.auth,new Pg(t),t.bypassAuthState)}function RO(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),nO(n,new Pg(t),t.bypassAuthState)}async function PO(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),tO(n,new Pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CO;case"linkViaPopup":case"linkViaRedirect":return PO;case"reauthViaPopup":case"reauthViaRedirect":return RO;default:xn(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=new rl(2e3,1e4);class Es extends px{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bO.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO="pendingRedirect",xu=new Map;class OO extends px{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const r=await DO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DO(t,e){const n=VO(e),r=MO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LO(t,e){xu.set(t._key(),e)}function MO(t){return rr(t._redirectPersistence)}function VO(t){return Iu(NO,t.config.apiKey,t.name)}async function $O(t,e,n=!1){const r=ho(t),i=kO(r,e),o=await new OO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=10*60*1e3;class jO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FO&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mx(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(t,e={}){return Xi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WO=/^https?/;async function HO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zO(t);for(const n of e)try{if(qO(n))return}catch{}xn(t,"unauthorized-domain")}function qO(t){const e=Ap(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WO.test(n))return!1;if(BO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GO=new rl(3e4,6e4);function i_(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KO(t){return new Promise((e,n)=>{var r,i,s;function o(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),n($n(t,"network-request-failed"))},timeout:GO.get()})}if(!((i=(r=Fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Fn().gapi)===null||s===void 0)&&s.load)o();else{const a=$N("iframefcb");return Fn()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},ex(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function QO(t){return Tu=Tu||KO(t),Tu}/**
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
 */const YO=new rl(5e3,15e3),XO="__/auth/iframe",JO="emulator/auth/iframe",ZO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tD(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tg(e,JO):`https://${t.config.authDomain}/${XO}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=eD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${nl(r).slice(1)}`}async function nD(t){const e=await QO(t),n=Fn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:tD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=Fn().setTimeout(()=>{s(o)},YO.get());function l(){Fn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const rD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iD=500,sD=600,oD="_blank",aD="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lD(t,e,n,r=iD,i=sD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=kt().toLowerCase();n&&(a=HI(u)?oD:n),WI(u)&&(e=e||aD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(DN(u)&&a!=="_self")return uD(e||"",a),new s_(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new s_(h)}function uD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cD="__/auth/handler",hD="emulator/auth/handler",dD=encodeURIComponent("fac");async function o_(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof rx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ob(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof sl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${dD}=${encodeURIComponent(l)}`:"";return`${fD(t)}?${nl(a).slice(1)}${u}`}function fD({config:t}){return t.emulator?Tg(t,hD):`https://${t.authDomain}/${cD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class pD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ux,this._completeRedirectFn=$O,this._overrideRedirectResult=LO}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await o_(e,n,r,Ap(),i);return lD(e,o,Rg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await o_(e,n,r,Ap(),i);return yO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nD(e),r=new jO(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return YI()||Ag()||xh()}}const mD=pD;var a_="@firebase/auth",l_="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vD(t){Fi(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XI(t)},u=new BN(r,i,s,l);return HN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fi(new si("auth-internal",e=>{const n=ho(e.getProvider("auth").getImmediate());return(r=>new gD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(a_,l_,yD(t)),Vn(a_,l_,"esm2017")}/**
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
 */const _D=5*60,wD=PI("authIdTokenMaxAge")||_D;let u_=null;const ED=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wD)return;const i=n==null?void 0:n.token;u_!==i&&(u_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ID(t=Eg()){const e=Ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WN(t,{popupRedirectResolver:mD,persistence:[AO,pO,ux]}),r=PI("authTokenSyncURL");if(r){const s=ED(r);uO(n,s,()=>s(n.currentUser)),lO(n,o=>s(o))}const i=kI("auth");return i&&qN(n,`http://${i}`),n}vD("Browser");var xD="firebase",TD="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(xD,TD,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="firebasestorage.googleapis.com",SD="storageBucket",AD=2*60*1e3,kD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Wn{constructor(e,n,r=0){super(Jd(e),`Firebase Storage: ${n} (${Jd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zn||(zn={}));function Jd(t){return"storage/"+t}function CD(){const t="An unknown error occurred, please check the error payload for server response.";return new Hn(zn.UNKNOWN,t)}function RD(){return new Hn(zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PD(){return new Hn(zn.CANCELED,"User canceled the upload/download.")}function bD(t){return new Hn(zn.INVALID_URL,"Invalid URL '"+t+"'.")}function ND(t){return new Hn(zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function c_(t){return new Hn(zn.INVALID_ARGUMENT,t)}function yx(){return new Hn(zn.APP_DELETED,"The Firebase app was deleted.")}function OD(t){return new Hn(zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw ND(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},y=n===gx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],S=T.regex.exec(e);if(S){const b=S[T.indices.bucket];let R=S[T.indices.path];R||(R=""),r=new _n(b,R),T.postModify(r);break}}if(r==null)throw bD(e);return r}}class DD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let _=!1;function y(w){_||(_=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function MD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t){return t!==void 0}function h_(t,e,n,r){if(r<e)throw c_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw c_(`Invalid value for '${t}'. Expected ${n} or less.`)}function $D(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pc||(pc={}));/**
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
 */function FD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Yl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===pc.NO_ERROR,l=s.getStatus();if(!a||FD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===pc.ABORT;r(!1,new Yl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Yl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());VD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=CD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?yx():PD();o(l)}else{const l=RD();o(l)}};this.canceled_?n(!1,new Yl(!1,null,!0)):this.backoffId_=LD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function WD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function HD(t,e,n,r,i,s,o=!0){const a=$D(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return BD(u,e),UD(u,n),zD(u,s),WD(u,r),new jD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class mc{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mc(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GD(this._location.path)}get storage(){return this._service}get parent(){const e=qD(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new mc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OD(e)}}function d_(t,e){const n=e==null?void 0:e[SD];return n==null?null:_n.makeFromBucketSpec(n,t)}function KD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bI(i,t.app.options.projectId))}class QD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AD,this._maxUploadRetryTime=kD,this._requests=new Set,i!=null?this._bucket=_n.makeFromBucketSpec(i,this._host):this._bucket=d_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=d_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){h_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){h_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new DD(yx());{const o=HD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const f_="@firebase/storage",p_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="storage";function YD(t=Eg(),e){t=We(t);const r=Ih(t,vx).getImmediate({identifier:e}),i=CI("storage");return i&&XD(r,...i),r}function XD(t,e,n,r={}){KD(t,e,n,r)}function JD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new QD(n,r,i,e,Yi)}function ZD(){Fi(new si(vx,JD,"PUBLIC").setMultipleInstances(!0)),Vn(f_,p_,""),Vn(f_,p_,"esm2017")}ZD();var eL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,bg=bg||{},te=eL||self;function Ah(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function al(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tL(t){return Object.prototype.hasOwnProperty.call(t,Zd)&&t[Zd]||(t[Zd]=++nL)}var Zd="closure_uid_"+(1e9*Math.random()>>>0),nL=0;function rL(t,e,n){return t.call.apply(t.bind,arguments)}function iL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=rL:It=iL,It.apply(null,arguments)}function Xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function fi(){this.s=this.s,this.o=this.o}var sL=0;fi.prototype.s=!1;fi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sL!=0)&&tL(this)};fi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ng(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function m_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ah(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var oL=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Na(t){return/^[\s\xa0]*$/.test(t)}function kh(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return kh().indexOf(t)!=-1}function Og(t){return Og[" "](t),t}Og[" "]=function(){};function aL(t,e){var n=ZL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var lL=Nn("Opera"),Qs=Nn("Trident")||Nn("MSIE"),wx=Nn("Edge"),Cp=wx||Qs,Ex=Nn("Gecko")&&!(kh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),uL=kh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function Ix(){var t=te.document;return t?t.documentMode:void 0}var Rp;e:{var ef="",tf=function(){var t=kh();if(Ex)return/rv:([^\);]+)(\)|;)/.exec(t);if(wx)return/Edge\/([\d\.]+)/.exec(t);if(Qs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uL)return/WebKit\/(\S+)/.exec(t);if(lL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tf&&(ef=tf?tf[1]:""),Qs){var nf=Ix();if(nf!=null&&nf>parseFloat(ef)){Rp=String(nf);break e}}Rp=ef}var Pp;if(te.document&&Qs){var g_=Ix();Pp=g_||parseInt(Rp,10)||void 0}else Pp=void 0;var cL=Pp;function Oa(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ex){e:{try{Og(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oa.$.h.call(this)}}it(Oa,xt);var hL={2:"touch",3:"pen",4:"mouse"};Oa.prototype.h=function(){Oa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ll="closure_listenable_"+(1e6*Math.random()|0),dL=0;function fL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++dL,this.fa=this.ia=!1}function Ch(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Dg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xx(t){const e={};for(const n in t)e[n]=t[n];return e}const y_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tx(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<y_.length;s++)n=y_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rh(t){this.src=t,this.g={},this.h=0}Rh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Np(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function bp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=_x(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ch(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Np(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Lg="closure_lm_"+(1e6*Math.random()|0),rf={};function Sx(t,e,n,r,i){if(r&&r.once)return kx(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Sx(t,e[s],n,r,i);return null}return n=$g(n),t&&t[ll]?t.O(e,n,al(r)?!!r.capture:!!r,i):Ax(t,e,n,!1,r,i)}function Ax(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=al(i)?!!i.capture:!!i,a=Vg(t);if(a||(t[Lg]=a=new Rh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=mL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)oL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Rx(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mL(){function t(n){return e.call(t.src,t.listener,n)}const e=gL;return t}function kx(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kx(t,e[s],n,r,i);return null}return n=$g(n),t&&t[ll]?t.P(e,n,al(r)?!!r.capture:!!r,i):Ax(t,e,n,!0,r,i)}function Cx(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Cx(t,e[s],n,r,i);else r=al(r)?!!r.capture:!!r,n=$g(n),t&&t[ll]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Np(s,n,r,i),-1<n&&(Ch(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Np(e,n,r,i)),(n=-1<t?e[t]:null)&&Mg(n))}function Mg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ll])bp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Rx(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vg(e))?(bp(n,t),n.h==0&&(n.src=null,e[Lg]=null)):Ch(t)}}}function Rx(t){return t in rf?rf[t]:rf[t]="on"+t}function gL(t,e){if(t.fa)t=!0;else{e=new Oa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Mg(t),t=n.call(r,e)}return t}function Vg(t){return t=t[Lg],t instanceof Rh?t:null}var sf="__closure_events_fn_"+(1e9*Math.random()>>>0);function $g(t){return typeof t=="function"?t:(t[sf]||(t[sf]=function(e){return t.handleEvent(e)}),t[sf])}function nt(){fi.call(this),this.i=new Rh(this),this.S=this,this.J=null}it(nt,fi);nt.prototype[ll]=!0;nt.prototype.removeEventListener=function(t,e,n,r){Cx(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),Tx(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Jl(o,r,!0,e)&&i}if(o=e.g=t,i=Jl(o,r,!0,e)&&i,i=Jl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Jl(o,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ch(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Jl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&bp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fg=te.JSON.stringify;class yL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function vL(){var t=jg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _L{constructor(){this.h=this.g=null}add(e,n){const r=Px.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Px=new yL(()=>new wL,t=>t.reset());class wL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function IL(t){te.setTimeout(()=>{throw t},0)}let Da,La=!1,jg=new _L,bx=()=>{const t=te.Promise.resolve(void 0);Da=()=>{t.then(xL)}};var xL=()=>{for(var t;t=vL();){try{t.h.call(t.g)}catch(n){IL(n)}var e=Px;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}La=!1};function Ph(t,e){nt.call(this),this.h=t||1,this.g=e||te,this.j=It(this.qb,this),this.l=Date.now()}it(Ph,nt);V=Ph.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Ug(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ug(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ph.$.N.call(this),Ug(this),delete this.g};function zg(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Nx(t){t.g=zg(()=>{t.g=null,t.i&&(t.i=!1,Nx(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class TL extends fi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nx(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ma(t){fi.call(this),this.h=t,this.g={}}it(Ma,fi);var v_=[];function Ox(t,e,n,r){Array.isArray(n)||(n&&(v_[0]=n.toString()),n=v_);for(var i=0;i<n.length;i++){var s=Sx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Dx(t){Dg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mg(e)},t),t.g={}}Ma.prototype.N=function(){Ma.$.N.call(this),Dx(this)};Ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bh(){this.g=!0}bh.prototype.Ea=function(){this.g=!1};function SL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function AL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Is(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CL(t,n)+(r?" "+r:"")})}function kL(t,e){t.info(function(){return"TIMEOUT: "+e})}bh.prototype.info=function(){};function CL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fg(n)}catch{return e}}var Ji={},__=null;function Nh(){return __=__||new nt}Ji.Ta="serverreachability";function Lx(t){xt.call(this,Ji.Ta,t)}it(Lx,xt);function Va(t){const e=Nh();ht(e,new Lx(e))}Ji.STAT_EVENT="statevent";function Mx(t,e){xt.call(this,Ji.STAT_EVENT,t),this.stat=e}it(Mx,xt);function Pt(t){const e=Nh();ht(e,new Mx(e,t))}Ji.Ua="timingevent";function Vx(t,e){xt.call(this,Ji.Ua,t),this.size=e}it(Vx,xt);function ul(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Oh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$x={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bg(){}Bg.prototype.h=null;function w_(t){return t.h||(t.h=t.i())}function Fx(){}var cl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wg(){xt.call(this,"d")}it(Wg,xt);function Hg(){xt.call(this,"c")}it(Hg,xt);var Op;function Dh(){}it(Dh,Bg);Dh.prototype.g=function(){return new XMLHttpRequest};Dh.prototype.i=function(){return{}};Op=new Dh;function hl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ma(this),this.P=RL,t=Cp?125:void 0,this.V=new Ph(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jx}function jx(){this.i=null,this.g="",this.h=!1}var RL=45e3,Dp={},gc={};V=hl.prototype;V.setTimeout=function(t){this.P=t};function Lp(t,e,n){t.L=1,t.v=Mh(dr(e)),t.s=n,t.S=!0,Ux(t,null)}function Ux(t,e){t.G=Date.now(),dl(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Qx(n.i,"t",r),t.C=0,n=t.l.J,t.h=new jx,t.g=gT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new TL(It(t.Pa,t,t.g),t.O)),Ox(t.U,t.g,"readystatechange",t.nb),e=t.I?xx(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Va(),SL(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&On(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=On(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Cp||this.g&&(this.h.h||this.g.ja()||T_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Va(3):Va(2)),Lh(this);var n=this.g.da();this.ca=n;t:if(zx(this)){var r=T_(this.g);t="";var i=r.length,s=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xi(this),sa(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,AL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Na(a)){var u=a;break t}}u=null}if(n=u)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mp(this,n);else{this.i=!1,this.o=3,Pt(12),xi(this),sa(this);break e}}this.S?(Bx(this,c,o),Cp&&this.i&&c==3&&(Ox(this.U,this.V,"tick",this.mb),this.V.start())):(Is(this.j,this.m,o,null),Mp(this,o)),c==4&&xi(this),this.i&&!this.J&&(c==4?dT(this.l,this):(this.i=!1,dl(this)))}else YL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),xi(this),sa(this)}}}catch{}finally{}};function zx(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Bx(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=PL(t,n),i==gc){e==4&&(t.o=4,Pt(14),r=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Dp){t.o=4,Pt(15),Is(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Is(t.j,t.m,i,null),Mp(t,i);zx(t)&&i!=gc&&i!=Dp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xg(e),e.M=!0,Pt(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),xi(t),sa(t))}V.mb=function(){if(this.g){var t=On(this.g),e=this.g.ja();this.C<e.length&&(Lh(this),Bx(this,t,e),this.i&&t!=4&&dl(this))}};function PL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?gc:(n=Number(e.substring(n,r)),isNaN(n)?Dp:(r+=1,r+n>e.length?gc:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,xi(this)};function dl(t){t.Y=Date.now()+t.P,Wx(t,t.P)}function Wx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ul(It(t.lb,t),e)}function Lh(t){t.B&&(te.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kL(this.j,this.A),this.L!=2&&(Va(),Pt(17)),xi(this),this.o=2,sa(this)):Wx(this,this.Y-t)};function sa(t){t.l.H==0||t.J||dT(t.l,t)}function xi(t){Lh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ug(t.V),Dx(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Mp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vp(n.i,t))){if(!t.K&&Vp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)_c(n),Fh(n);else break e;Yg(n),Pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ul(It(n.ib,n),6e3));if(1>=Jx(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ti(n,11)}else if((t.K||n.g==t)&&_c(n),!Na(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qg(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ce(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=mT(r,r.J?r.pa:null,r.Y),o.K){Zx(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Lh(a),dl(a)),r.g=o}else cT(r);0<n.j.length&&jh(n)}else u[0]!="stop"&&u[0]!="close"||Ti(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ti(n,7):Qg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Va(4)}catch{}}function bL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ah(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function NL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ah(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Hx(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ah(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=NL(t),r=bL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pi){this.h=t.h,yc(this,t.j),this.s=t.s,this.g=t.g,vc(this,t.m),this.l=t.l;var e=t.i,n=new $a;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),E_(this,n),this.o=t.o}else t&&(e=String(t).match(qx))?(this.h=!1,yc(this,e[1]||"",!0),this.s=jo(e[2]||""),this.g=jo(e[3]||"",!0),vc(this,e[4]),this.l=jo(e[5]||"",!0),E_(this,e[6]||"",!0),this.o=jo(e[7]||"")):(this.h=!1,this.i=new $a(null,this.h))}Pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Uo(e,I_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Uo(e,I_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Uo(n,n.charAt(0)=="/"?ML:LL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Uo(n,$L)),t.join("")};function dr(t){return new Pi(t)}function yc(t,e,n){t.j=n?jo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function E_(t,e,n){e instanceof $a?(t.i=e,FL(t.i,t.h)):(n||(e=Uo(e,VL)),t.i=new $a(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Mh(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var I_=/[#\/\?@]/g,LL=/[#\?:]/g,ML=/[#\?]/g,VL=/[#\?@]/g,$L=/#/g;function $a(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pi(t){t.g||(t.g=new Map,t.h=0,t.i&&OL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=$a.prototype;V.add=function(t,e){pi(this),this.i=null,t=po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Gx(t,e){pi(t),e=po(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Kx(t,e){return pi(t),e=po(t,e),t.g.has(e)}V.forEach=function(t,e){pi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){pi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){pi(this);let e=[];if(typeof t=="string")Kx(this,t)&&(e=e.concat(this.g.get(po(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return pi(this),this.i=null,t=po(this,t),Kx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Qx(t,e,n){Gx(t,e),0<n.length&&(t.i=null,t.g.set(po(t,e),Ng(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function FL(t,e){e&&!t.j&&(pi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Gx(this,r),Qx(this,i,n))},t)),t.j=e}var jL=class{constructor(t,e){this.g=t,this.map=e}};function Yx(t){this.l=t||UL,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UL=10;function Xx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jx(t){return t.h?1:t.g?t.g.size:0}function Vp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qg(t,e){t.g?t.g.add(e):t.h=e}function Zx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yx.prototype.cancel=function(){if(this.i=eT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function eT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ng(t.i)}var zL=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function BL(){this.g=new zL}function WL(t,e,n){const r=n||"";try{Hx(t,function(i,s){let o=i;al(i)&&(o=Fg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function HL(t,e){const n=new bh;if(te.Image){const r=new Image;r.onload=Xl(Zl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xl(Zl,n,r,"TestLoadImage: error",!1,e),r.onabort=Xl(Zl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xl(Zl,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function fl(t){this.l=t.fc||null,this.j=t.ob||!1}it(fl,Bg);fl.prototype.g=function(){return new Vh(this.l,this.j)};fl.prototype.i=function(t){return function(){return t}}({});function Vh(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Vh,nt);var Gg=0;V=Vh.prototype;V.open=function(t,e){if(this.readyState!=Gg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fa(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pl(this)),this.readyState=Gg};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fa(this)),this.g&&(this.readyState=3,Fa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function tT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pl(this):Fa(this),this.readyState==3&&tT(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,pl(this))};V.Ya=function(t){this.g&&(this.response=t,pl(this))};V.ka=function(){this.g&&pl(this)};function pl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fa(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qL=te.JSON.parse;function je(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nT,this.L=this.M=!1}it(je,nt);var nT="",GL=/^https?$/i,KL=["POST","PUT"];V=je.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Op.g(),this.C=this.u?w_(this.u):w_(Op),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){x_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=_x(KL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sT(this),0<this.B&&((this.L=QL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=zg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){x_(this,s)}};function QL(t){return Qs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof bg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function x_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rT(t),$h(t)}function rT(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),$h(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$h(this,!0)),je.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?iT(this):this.kb())};V.kb=function(){iT(this)};function iT(t){if(t.h&&typeof bg<"u"&&(!t.C[1]||On(t)!=4||t.da()!=2)){if(t.v&&On(t)==4)zg(t.La,0,t);else if(ht(t,"readystatechange"),On(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(qx)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!GL.test(i?i.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var s=2<On(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",rT(t)}}finally{$h(t)}}}}function $h(t,e){if(t.g){sT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function sT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function On(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qL(e)}};function T_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case nT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function YL(t){const e={};t=(t.g&&2<=On(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Na(t[r]))continue;var n=EL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}pL(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function oT(t){let e="";return Dg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=oT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function aT(t){this.Ga=0,this.j=[],this.l=new bh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Yx(t&&t.concurrentRequestLimit),this.Ja=new BL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=aT.prototype;V.ra=8;V.H=1;function Qg(t){if(lT(t),t.H==3){var e=t.W++,n=dr(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),ml(t,n),e=new hl(t,t.l,e),e.L=2,e.v=Mh(dr(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=gT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),dl(e)}pT(t)}function Fh(t){t.g&&(Xg(t),t.g.cancel(),t.g=null)}function lT(t){Fh(t),t.u&&(te.clearTimeout(t.u),t.u=null),_c(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function jh(t){if(!Xx(t.i)&&!t.m){t.m=!0;var e=t.Na;Da||bx(),La||(Da(),La=!0),jg.add(e,t),t.C=0}}function XL(t,e){return Jx(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ul(It(t.Na,t,e),fT(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new hl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xx(s),Tx(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=uT(this,i,e),n=dr(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),ml(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(oT(s)))+"&"+e:this.o&&Kg(n,this.o,s)),qg(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.aa=!0,Lp(i,n,null)):Lp(i,n,e),this.H=2}}else this.H==3&&(t?S_(this,t):this.j.length==0||Xx(this.i)||S_(this))};function S_(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),ml(t,r),t.o&&t.s&&Kg(r,t.o,t.s),n=new hl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=uT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qg(t.i,n),Lp(n,r,e)}function ml(t,e){t.na&&Dg(t.na,function(n,r){Ce(e,r,n)}),t.h&&Hx({},function(n,r){Ce(e,r,n)})}function uT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{WL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function cT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Da||bx(),La||(Da(),La=!0),jg.add(e,t),t.A=0}}function Yg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ul(It(t.Ma,t),fT(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,hT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ul(It(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Fh(this),hT(this))};function Xg(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function hT(t){t.g=new hl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),ml(t,e),t.o&&t.s&&Kg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Mh(dr(e)),n.s=null,n.S=!0,Ux(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Fh(this),Yg(this),Pt(19))};function _c(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function dT(t,e){var n=null;if(t.g==e){_c(t),Xg(t),t.g=null;var r=2}else if(Vp(t.i,e))n=e.F,Zx(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Nh(),ht(r,new Vx(r,n)),jh(t)}else cT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&XL(t,e)||r==2&&Yg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ti(t,5);break;case 4:Ti(t,10);break;case 3:Ti(t,6);break;default:Ti(t,2)}}}function fT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ti(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new Pi("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||yc(n,"https"),Mh(n)),HL(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),pT(t),lT(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function pT(t){if(t.H=0,t.ma=[],t.h){const e=eT(t.i);(e.length!=0||t.j.length!=0)&&(m_(t.ma,e),m_(t.ma,t.j),t.i.i.length=0,Ng(t.j),t.j.length=0),t.h.ya()}}function mT(t,e,n){var r=n instanceof Pi?dr(n):new Pi(n);if(r.g!="")e&&(r.g=e+"."+r.g),vc(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pi(null);r&&yc(s,r),e&&(s.g=e),i&&vc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),ml(t,r),r}function gT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new fl({ob:!0})):new je(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function yT(){}V=yT.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function wc(){if(Qs&&!(10<=Number(cL)))throw Error("Environmental error: no available transport.")}wc.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){nt.call(this),this.g=new aT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Na(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Na(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}it(Kt,nt);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=mT(t,null,t.Y),jh(t)};Kt.prototype.close=function(){Qg(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fg(t),t=n);e.j.push(new jL(e.fb++,t)),e.H==3&&jh(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,Qg(this.g),delete this.g,Kt.$.N.call(this)};function vT(t){Wg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(vT,Wg);function _T(){Hg.call(this),this.status=1}it(_T,Hg);function mo(t){this.g=t}it(mo,yT);mo.prototype.Ba=function(){ht(this.g,"a")};mo.prototype.Aa=function(t){ht(this.g,new vT(t))};mo.prototype.za=function(t){ht(this.g,new _T)};mo.prototype.ya=function(){ht(this.g,"b")};function JL(){this.blockSize=-1}function Tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Tn,JL);Tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function of(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)of(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){of(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){of(this,r),i=0;break}}this.h=i,this.i+=e};Tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ZL={};function Jg(t){return-128<=t&&128>t?aL(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function Dn(t){if(isNaN(t)||!isFinite(t))return bs;if(0>t)return ut(Dn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$p;return new Ie(e,0)}function wT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(wT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Dn(Math.pow(e,8)),r=bs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Dn(Math.pow(e,s)),r=r.R(s).add(Dn(o))):(r=r.R(n),r=r.add(Dn(o)))}return r}var $p=4294967296,bs=Jg(0),Fp=Jg(1),A_=Jg(16777216);V=Ie.prototype;V.ea=function(){if(tn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$p+r)*e,e*=$p}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(tn(this))return"-"+ut(this).toString(t);for(var e=Dn(Math.pow(t,6)),n=this,r="";;){var i=Ic(n,e).g;n=Ec(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}V.X=function(t){return t=Ec(this,t),tn(t)?-1:ir(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(Fp)}V.abs=function(){return tn(this)?ut(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Ec(t,e){return t.add(ut(e))}V.R=function(t){if(ir(this)||ir(t))return bs;if(tn(this))return tn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(tn(t))return ut(this.R(ut(t)));if(0>this.X(A_)&&0>t.X(A_))return Dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,eu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,eu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,eu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,eu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function eu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function No(t,e){this.g=t,this.h=e}function Ic(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new No(bs,bs);if(tn(t))return e=Ic(ut(t),e),new No(ut(e.g),ut(e.h));if(tn(e))return e=Ic(t,ut(e)),new No(ut(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fp,r=e;0>=r.X(t);)n=k_(n),r=k_(r);var i=is(n,1),s=is(r,1);for(r=is(r,2),n=is(n,2);!ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=is(r,1),n=is(n,1)}return e=Ec(t,i.R(e)),new No(i,e)}for(i=bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Dn(n),o=s.R(e);tn(o)||0<o.X(t);)n-=r,s=Dn(n),o=s.R(e);ir(s)&&(s=Fp),i=i.add(s),t=Ec(t,o)}return new No(i,t)}V.gb=function(t){return Ic(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function k_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function is(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ie(i,t.h)}wc.prototype.createWebChannel=wc.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;Oh.NO_ERROR=0;Oh.TIMEOUT=8;Oh.HTTP_ERROR=6;$x.COMPLETE="complete";Fx.EventType=cl;cl.OPEN="a";cl.CLOSE="b";cl.ERROR="c";cl.MESSAGE="d";nt.prototype.listen=nt.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;Tn.prototype.digest=Tn.prototype.l;Tn.prototype.reset=Tn.prototype.reset;Tn.prototype.update=Tn.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=Dn;Ie.fromString=wT;var eM=function(){return new wc},tM=function(){return Nh()},af=Oh,nM=$x,rM=Ji,C_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},iM=fl,tu=Fx,sM=je,oM=Tn,Ns=Ie;const R_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new _g("@firebase/firestore");function P_(){return zi.logLevel}function H(t,...e){if(zi.logLevel<=ge.DEBUG){const n=e.map(Zg);zi.debug(`Firestore (${go}): ${t}`,...n)}}function fr(t,...e){if(zi.logLevel<=ge.ERROR){const n=e.map(Zg);zi.error(`Firestore (${go}): ${t}`,...n)}}function Ys(t,...e){if(zi.logLevel<=ge.WARN){const n=e.map(Zg);zi.warn(`Firestore (${go}): ${t}`,...n)}}function Zg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Pe(t,e){t||ee()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class lM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uM{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new ET(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new yt(e)}}class cM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new dM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Je(0,0))}static max(){return new re(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ja{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const mM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends ja{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return mM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Se.fromString(e))}static fromName(e){return new q(Se.fromString(e).popFirst(5))}static empty(){return new q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Se(e.slice()))}}function gM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new oi(i,q.empty(),e)}function yM(t){return new oi(t.readTime,t.key,-1)}class oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new oi(re.min(),q.empty(),-1)}static max(){return new oi(re.max(),q.empty(),-1)}}function vM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==_M)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ey{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ey.ae=-1;function Uh(t){return t==null}function xc(t){return t===0&&1/t==-1/0}function EM(t){return typeof t=="number"&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new N_(this.data.getIterator())}getIteratorFrom(e){return new N_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class N_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Tt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class TT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TT("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const IM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=IM.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ty(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?ty(e):e}function Ua(t){const e=ai(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:TM(t)?9007199254740991:10:ee()}function Bn(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ua(t).isEqual(Ua(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ai(i.timestampValue),a=ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?xc(o)===xc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(b_(o)!==b_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bn(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function Ba(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return O_(t.timestampValue,e.timestampValue);case 4:return O_(Ua(t),Ua(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),l=Bi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ve(a[u],l[u]);if(c!==0)return c}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ve(qe(s.latitude),qe(o.latitude));return a!==0?a:ve(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Js(a[u],l[u]);if(c)return c}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ru.mapValue&&o===ru.mapValue)return 0;if(s===ru.mapValue)return 1;if(o===ru.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ve(l[h],c[h]);if(d!==0)return d;const p=Js(a[l[h]],u[c[h]]);if(p!==0)return p}return ve(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ee()}}function O_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=ai(t),r=ai(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function Zs(t){return jp(t)}function jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${jp(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function Tc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Up(t){return!!t&&"integerValue"in t}function ny(t){return!!t&&"arrayValue"in t}function D_(t){return!!t&&"nullValue"in t}function L_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(oa(this.value))}}function ST(t){const e=[];return Zi(t.fields,(n,r)=>{const i=new wt([n]);if(Su(r)){const s=ST(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,re.min(),re.min(),re.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,re.min(),re.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,re.min(),re.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eo{constructor(e,n){this.position=e,this.inclusive=n}}function M_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function V_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function SM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class AT{}class Ke extends AT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kM(e,n,r):n==="array-contains"?new PM(e,r):n==="in"?new bM(e,r):n==="not-in"?new NM(e,r):n==="array-contains-any"?new OM(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CM(e,r):new RM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Js(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sn extends AT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Sn(e,n)}matches(e){return kT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function kT(t){return t.op==="and"}function CT(t){return AM(t)&&kT(t)}function AM(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function zp(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(CT(t))return t.filters.map(e=>zp(e)).join(",");{const e=t.filters.map(n=>zp(n)).join(",");return`${t.op}(${e})`}}function RT(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Bn(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&RT(o,i.filters[a]),!0):!1}(t,e):void ee()}function PT(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(PT).join(" ,")+"}"}(t):"Filter"}class kM extends Ke{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class CM extends Ke{constructor(e,n){super(e,"in",n),this.keys=bT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RM extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=bT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class PM extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ny(n)&&Ba(n.arrayValue,this.value)}}class bM extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ba(this.value.arrayValue,n)}}class NM extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ba(this.value.arrayValue,n)}}class OM extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ny(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ba(this.value.arrayValue,r))}}/**
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
 */class DM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function $_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DM(t,e,n,r,i,s,o)}function ry(t){const e=se(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.he=n}return e.he}function iy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V_(t.startAt,e.startAt)&&V_(t.endAt,e.endAt)}function Bp(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function LM(t,e,n,r,i,s,o,a){return new es(t,e,n,r,i,s,o,a)}function Bh(t){return new es(t)}function F_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function oy(t){return t.collectionGroup!==null}function bi(t){const e=se(t);if(e.Pe===null){e.Pe=[];const n=Wh(e),r=sy(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Os(n)),e.Pe.push(new Os(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Os(wt.keyField(),s))}}}return e.Pe}function pr(t){const e=se(t);if(!e.Ie)if(e.limitType==="F")e.Ie=$_(e.path,e.collectionGroup,bi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of bi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Os(s.field,o))}const r=e.endAt?new eo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new eo(e.startAt.position,e.startAt.inclusive):null;e.Ie=$_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Wp(t,e){e.getFirstInequalityField(),Wh(t);const n=t.filters.concat([e]);return new es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hh(t,e){return iy(pr(t),pr(e))&&t.limitType===e.limitType}function NT(t){return`${ry(pr(t))}|lt:${t.limitType}`}function Hp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PT(i)).join(", ")}]`),Uh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zs(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function qh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=M_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,bi(r),i)||r.endAt&&!function(o,a,l){const u=M_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,bi(r),i))}(t,e)}function MM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function OT(t){return(e,n)=>{let r=!1;for(const i of bi(t)){const s=VM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VM(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Js(l,u):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=new Ve(q.comparator);function mr(){return $M}const DT=new Ve(q.comparator);function zo(...t){let e=DT;for(const n of t)e=e.insert(n.key,n);return e}function LT(t){let e=DT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return aa()}function MT(){return aa()}function aa(){return new yo(t=>t.toString(),(t,e)=>t.isEqual(e))}const FM=new Ve(q.comparator),jM=new Tt(q.comparator);function le(...t){let e=jM;for(const n of t)e=e.add(n);return e}const UM=new Tt(ve);function zM(){return UM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function $T(t){return{integerValue:""+t}}function BM(t,e){return EM(e)?$T(e):VT(t,e)}/**
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
 */class Gh{constructor(){this._=void 0}}function WM(t,e,n){return t instanceof Ac?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zh(s)&&(s=ty(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Wa?jT(t,e):t instanceof Ha?UT(t,e):function(i,s){const o=FT(i,s),a=j_(o)+j_(i.Te);return Up(o)&&Up(i.Te)?$T(a):VT(i.serializer,a)}(t,e)}function HM(t,e,n){return t instanceof Wa?jT(t,e):t instanceof Ha?UT(t,e):n}function FT(t,e){return t instanceof kc?function(r){return Up(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ac extends Gh{}class Wa extends Gh{constructor(e){super(),this.elements=e}}function jT(t,e){const n=zT(e);for(const r of t.elements)n.some(i=>Bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ha extends Gh{constructor(e){super(),this.elements=e}}function UT(t,e){let n=zT(e);for(const r of t.elements)n=n.filter(i=>!Bn(i,r));return{arrayValue:{values:n}}}class kc extends Gh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function j_(t){return qe(t.integerValue||t.doubleValue)}function zT(t){return ny(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Wa&&i instanceof Wa||r instanceof Ha&&i instanceof Ha?Xs(r.elements,i.elements,Bn):r instanceof kc&&i instanceof kc?Bn(r.Te,i.Te):r instanceof Ac&&i instanceof Ac}(t.transform,e.transform)}class GM{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kh{}function BT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ay(t.key,sn.none()):new vl(t.key,t.data,sn.none());{const n=t.data,r=Vt.empty();let i=new Tt(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mi(t.key,r,new Ht(i.toArray()),sn.none())}}function KM(t,e,n){t instanceof vl?function(i,s,o){const a=i.value.clone(),l=z_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mi?function(i,s,o){if(!Au(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=z_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(WT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function la(t,e,n,r){return t instanceof vl?function(s,o,a,l){if(!Au(s.precondition,o))return a;const u=s.value.clone(),c=B_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof mi?function(s,o,a,l){if(!Au(s.precondition,o))return a;const u=B_(s.fieldTransforms,l,o),c=o.data;return c.setAll(WT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Au(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FT(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function U_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xs(r,i,(s,o)=>qM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vl extends Kh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mi extends Kh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function WT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function z_(t,e,n){const r=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HM(o,a,n[i]))}return r}function B_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WM(s,o,e))}return r}class ay extends Kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YM extends Kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=MT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=BT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>U_(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>U_(n,r))}}class ly{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Pe(e.mutations.length===r.length);let i=function(){return FM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ly(e,n,r,i)}}/**
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
 */class JM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,de;function eV(t){switch(t){default:return ee();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function HT(t){if(t===void 0)return fr("GRPC error has no .code"),A.UNKNOWN;switch(t){case He.OK:return A.OK;case He.CANCELLED:return A.CANCELLED;case He.UNKNOWN:return A.UNKNOWN;case He.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case He.INTERNAL:return A.INTERNAL;case He.UNAVAILABLE:return A.UNAVAILABLE;case He.UNAUTHENTICATED:return A.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case He.NOT_FOUND:return A.NOT_FOUND;case He.ALREADY_EXISTS:return A.ALREADY_EXISTS;case He.PERMISSION_DENIED:return A.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case He.ABORTED:return A.ABORTED;case He.OUT_OF_RANGE:return A.OUT_OF_RANGE;case He.UNIMPLEMENTED:return A.UNIMPLEMENTED;case He.DATA_LOSS:return A.DATA_LOSS;default:return ee()}}(de=He||(He={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class uy{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return iu}static getOrCreateInstance(){return iu===null&&(iu=new uy),iu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let iu=null;/**
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
 */function tV(){return new TextEncoder}/**
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
 */const nV=new Ns([4294967295,4294967295],0);function W_(t){const e=tV().encode(t),n=new oM;return n.update(e),new Uint8Array(n.digest())}function H_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ns([n,r],0),new Ns([i,s],0)]}class cy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bo(`Invalid padding: ${n}`);if(r<0)throw new Bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ns.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ns.fromNumber(r)));return i.compare(nV)===1&&(i=new Ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=W_(e),[r,i]=H_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=W_(e),[r,i]=H_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qh(re.min(),i,new Ve(ve),mr(),le())}}class _l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _l(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class qT{constructor(e,n){this.targetId=e,this.pe=n}}class GT{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class q_{constructor(){this.ye=0,this.we=K_(),this.Se=Ct.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=le(),n=le(),r=le();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new _l(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=K_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class rV{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=mr(),this.$e=G_(),this.Ue=new Ve(ve)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Bp(a))if(s===0){const l=new q(a.path);this.ze(i,l,_t.newNoDocument(l,re.min()))}else Pe(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=uy.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,_){var y,w,m,f,v,E;const T={localCacheCount:p,existenceFilterCount:_.count},S=_.unchangedNames;return S&&(T.bloomFilter={applied:h===0,hashCount:(y=S==null?void 0:S.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(f=(m=(w=S==null?void 0:S.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&f!==void 0?f:0,padding:(E=(v=S==null?void 0:S.bits)===null||v===void 0?void 0:v.padding)!==null&&E!==void 0?E:0},d&&(T.bloomFilter.mightContain=d)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Bi(s).toUint8Array()}catch(h){if(h instanceof TT)return Ys("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new cy(l,o,a)}catch(h){return Ys(h instanceof Bo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Bp(a.target)){const l=new q(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,_t.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=le();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Qh(e,n,this.Ue,this.Ke,r);return this.Ke=mr(),this.$e=G_(),this.Ue=new Ve(ve),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new q_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Tt(ve),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new q_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function G_(){return new Ve(q.comparator)}function K_(){return new Ve(q.comparator)}const iV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),oV=(()=>({and:"AND",or:"OR"}))();class aV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qp(t,e){return t.useProto3Json||Uh(e)?e:{value:e}}function Cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lV(t,e){return Cc(t,e.toTimestamp())}function jn(t){return Pe(!!t),re.fromTimestamp(function(n){const r=ai(n);return new Je(r.seconds,r.nanos)}(t))}function hy(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function QT(t){const e=Se.fromString(t);return Pe(ZT(e)),e}function Gp(t,e){return hy(t.databaseId,e.path)}function lf(t,e){const n=QT(e);if(n.get(1)!==t.databaseId.projectId)throw new M(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(YT(n))}function Kp(t,e){return hy(t.databaseId,e)}function uV(t){const e=QT(t);return e.length===4?Se.emptyPath():YT(e)}function Qp(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YT(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q_(t,e,n){return{name:Gp(t,e),fields:n.value.mapValue.fields}}function cV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Pe(c===void 0||typeof c=="string"),Ct.fromBase64String(c||"")):(Pe(c===void 0||c instanceof Uint8Array),Ct.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:HT(u.code);return new M(c,u.message||"")}(o);n=new GT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lf(t,r.document.name),s=jn(r.document.updateTime),o=r.document.createTime?jn(r.document.createTime):re.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ku(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lf(t,r.document),s=r.readTime?jn(r.readTime):re.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ku([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lf(t,r.document),s=r.removedTargetIds||[];n=new ku([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZM(i,s),a=r.targetId;n=new qT(a,o)}}return n}function hV(t,e){let n;if(e instanceof vl)n={update:Q_(t,e.key,e.value)};else if(e instanceof ay)n={delete:Gp(t,e.key)};else if(e instanceof mi)n={update:Q_(t,e.key,e.data),updateMask:wV(e.fieldMask)};else{if(!(e instanceof YM))return ee();n={verify:Gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof kc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function dV(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?jn(i.updateTime):jn(s);return o.isEqual(re.min())&&(o=jn(s)),new GM(o,i.transformResults||[])}(n,e))):[]}function fV(t,e){return{documents:[Kp(t,e.path)]}}function pV(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return JT(Sn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:os(h.field),direction:yV(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function mV(t){let e=uV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Pe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=XT(h);return d instanceof Sn&&CT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Os(as(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Uh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new eo(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new eo(p,d)}(n.endAt)),LM(e,i,o,s,a,"F",l,u)}function gV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>XT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function yV(t){return iV[t]}function vV(t){return sV[t]}function _V(t){return oV[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return wt.fromServerFormat(t.fieldPath)}function JT(t){return t instanceof Ke?function(n){if(n.op==="=="){if(L_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(D_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(L_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(D_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:vV(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>JT(i));return r.length===1?r[0]:{compositeFilter:{op:_V(n.op),filters:r}}}(t):ee()}function wV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r,i,s=re.min(),o=re.min(),a=Ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e){this.ct=e}}function IV(t){const e=mV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class xV{constructor(){this.sn=new TV}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(oi.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(oi.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class TV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new to(0)}static On(){return new to(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(){this.changes=new yo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&la(r.mutation,i,Ht.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=mr();const o=aa(),a=function(){return aa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof mi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),la(c.mutation,u,c.mutation.getFieldMask(),Je.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new AV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=aa();let i=new Ve((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ht.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=MT();c.forEach(d=>{if(!s.has(d)){const p=BT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(Si());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,le())).next(c=>({batchId:a,changes:LT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zo();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(c,h){return new es(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=zo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&la(u.mutation,l,Ht.empty(),Je.now()),qh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:jn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:IV(i.bundledQuery),readTime:jn(i.readTime)}}(n)),P.resolve()}}/**
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
 */class RV{constructor(){this.overlays=new Ve(q.comparator),this.cr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Si(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JM(n,r));let s=this.cr.get(n);s===void 0&&(s=le(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.lr=new Tt(Ze.hr),this.Pr=new Tt(Ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ze(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new q(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new q(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=le();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return q.comparator(e.key,n.key)||ve(e.mr,n.mr)}static Ir(e,n){return ve(e.mr,n.mr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Tt(Ze.hr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ve);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),P.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new q(s),0);let a=new Tt(ve);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return P.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.pr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.Dr=e,this.docs=function(){return new Ve(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=mr();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vM(yM(c),r)<=0||(i.has(c.key)||qh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NV(this)}getSize(e){return P.resolve(this.size)}}class NV extends SV{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e){this.persistence=e,this.Cr=new yo(n=>ry(n),iy),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new dy,this.targetCount=0,this.Or=to.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new to(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Ln(n),P.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new ey(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new OV(this),this.indexManager=new xV,this.remoteDocumentCache=function(i){return new bV(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new EV(n),this.Qr=new CV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new PV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new LV(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return P.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class LV extends wM{constructor(e){super(),this.currentSequenceNumber=e}}class fy{constructor(e){this.persistence=e,this.Wr=new dy,this.Gr=null}static zr(e){return new fy(e)}get jr(){if(this.Gr)return this.Gr;throw ee()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,r=>{const i=q.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new py(e,n.fromCache,r,i)}}/**
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
 */class MV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(F_(n))return P.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sc(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Sc(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return F_(n)||i.isEqual(re.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(P_()<=ge.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hp(n)),this.ji(e,o,n,gM(i,-1)))})}Gi(e,n){let r=new Tt(OT(e));return n.forEach((i,s)=>{qh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return P_()<=ge.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Hp(n)),this.Ki.getDocumentsMatchingQuery(e,n,oi.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ve(ve),this.Yi=new yo(s=>ry(s),iy),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function $V(t,e,n,r){return new VV(t,e,n,r)}async function eS(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=le();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function FV(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=P.resolve();return d.forEach(_=>{p=p.next(()=>c.getEntry(l,_)).next(y=>{const w=u.docVersions.get(_);Pe(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tS(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function jV(t,e){const n=se(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ct.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=mr(),u=le();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(UV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(re.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function UV(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function zV(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BV(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Yp(t,e,n){const r=se(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Y_(t,e,n){const r=se(t);let i=re.min(),s=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=se(l),d=h.Yi.get(c);return d!==void 0?P.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:le())).next(a=>(WV(r,MM(e),a),{documents:a,ss:s})))}function WV(t,e,n){let r=t.Zi.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class X_{constructor(){this.activeTargetIds=zM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HV{constructor(){this.Hs=new X_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new X_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qV{Ys(e){}shutdown(){}}/**
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
 */class J_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let su=null;function uf(){return su===null?su=function(){return 268435456+Math.round(2147483648*Math.random())}():su++,"0x"+su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class QV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=uf(),l=this.mo(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(H("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ys("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=GV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=uf();return new Promise((o,a)=>{const l=new sM;l.setWithCredentials(!0),l.listenOnce(nM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case af.NO_ERROR:const c=l.getResponseJson();H(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case af.TIMEOUT:H(mt,`RPC '${e}' ${s} timed out`),a(new M(A.DEADLINE_EXCEEDED,"Request time out"));break;case af.HTTP_ERROR:const h=l.getStatus();if(H(mt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(m)>=0?m:A.UNKNOWN}(p.status);a(new M(_,p.message))}else a(new M(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(A.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);H(mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=uf(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eM(),a=tM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new iM({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");H(mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const _=new KV({so:w=>{p?H(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(H(mt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),H(mt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),y=(w,m,f)=>{w.listen(m,v=>{try{f(v)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,tu.EventType.OPEN,()=>{p||H(mt,`RPC '${e}' stream ${i} transport opened.`)}),y(h,tu.EventType.CLOSE,()=>{p||(p=!0,H(mt,`RPC '${e}' stream ${i} transport closed`),_.Po())}),y(h,tu.EventType.ERROR,w=>{p||(p=!0,Ys(mt,`RPC '${e}' stream ${i} transport errored:`,w),_.Po(new M(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,tu.EventType.MESSAGE,w=>{var m;if(!p){const f=w.data[0];Pe(!!f);const v=f,E=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(E){H(mt,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let S=function(G){const $=He[G];if($!==void 0)return HT($)}(T),b=E.message;S===void 0&&(S=A.INTERNAL,b="Unknown error status: "+T+" with message "+E.message),p=!0,_.Po(new M(S,b)),h.close()}else H(mt,`RPC '${e}' stream ${i} received:`,f),_.Io(f)}}),y(a,rM.STAT_EVENT,w=>{w.stat===C_.PROXY?H(mt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===C_.NOPROXY&&H(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function cf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){return new aV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new nS(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new M(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YV extends rS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=cV(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?jn(o.readTime):re.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Qp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Bp(l)?{documents:fV(s,l)}:{query:pV(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KT(s,o.resumeToken);const u=qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=Cc(s,o.snapshotVersion.toTimestamp());const u=qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=gV(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Qp(this.serializer),n.removeTarget=e,this.Ho(n)}}class XV extends rS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=dV(e.writeResults,e.commitTime),r=jn(e.commitTime);return this.listener.u_(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Qp(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hV(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new M(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(A.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(A.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class ZV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(fr(n),this.d_=!1):H("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ts(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=se(l);u.y_.add(4),await wl(u),u.b_.set("Unknown"),u.y_.delete(4),await Xh(u)}(this))})}),this.b_=new ZV(r,i)}}async function Xh(t){if(ts(t))for(const e of t.w_)await e(!0)}async function wl(t){for(const e of t.w_)await e(!1)}function iS(t,e){const n=se(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),yy(n)?gy(n):vo(n).Uo()&&my(n,e))}function sS(t,e){const n=se(t),r=vo(n);n.p_.delete(e),r.Uo()&&oS(n,e),n.p_.size===0&&(r.Uo()?r.zo():ts(n)&&n.b_.set("Unknown"))}function my(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).i_(e)}function oS(t,e){t.D_.Be(e),vo(t).s_(e)}function gy(t){t.D_=new rV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.b_.A_()}function yy(t){return ts(t)&&!vo(t).$o()&&t.p_.size>0}function ts(t){return se(t).y_.size===0}function aS(t){t.D_=void 0}async function t4(t){t.p_.forEach((e,n)=>{my(t,e)})}async function n4(t,e){aS(t),yy(t)?(t.b_.m_(e),gy(t)):t.b_.set("Unknown")}async function r4(t,e,n){if(t.b_.set("Online"),e instanceof GT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof ku?t.D_.We(e):e instanceof qT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(re.min()))try{const r=await tS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Ct.EMPTY_BYTE_STRING,c.snapshotVersion)),oS(s,l);const h=new $r(c.target,l,u,c.sequenceNumber);my(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!yl(e))throw e;t.y_.add(1),await wl(t),t.b_.set("Offline"),n||(n=()=>tS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Xh(t)})}function lS(t,e){return e().catch(n=>Rc(t,n,e))}async function Jh(t){const e=se(t),n=li(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;i4(e);)try{const i=await zV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,s4(e,i)}catch(i){await Rc(e,i)}uS(e)&&cS(e)}function i4(t){return ts(t)&&t.g_.length<10}function s4(t,e){t.g_.push(e);const n=li(t);n.Uo()&&n.__&&n.a_(e.mutations)}function uS(t){return ts(t)&&!li(t).$o()&&t.g_.length>0}function cS(t){li(t).start()}async function o4(t){li(t).l_()}async function a4(t){const e=li(t);for(const n of t.g_)e.a_(n.mutations)}async function l4(t,e,n){const r=t.g_.shift(),i=ly.from(r,e,n);await lS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Jh(t)}async function u4(t,e){e&&li(t).__&&await async function(r,i){if(function(o){return eV(o)&&o!==A.ABORTED}(i.code)){const s=r.g_.shift();li(r).Go(),await lS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jh(r)}}(t,e),uS(t)&&cS(t)}async function Z_(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.y_.add(3),await wl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Xh(n)}async function c4(t,e){const n=se(t);e?(n.y_.delete(2),await Xh(n)):e||(n.y_.add(2),await wl(n),n.b_.set("Unknown"))}function vo(t){return t.v_||(t.v_=function(n,r,i){const s=se(n);return s.P_(),new YV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:t4.bind(null,t),uo:n4.bind(null,t),r_:r4.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),yy(t)?gy(t):t.b_.set("Unknown")):(await t.v_.stop(),aS(t))})),t.v_}function li(t){return t.C_||(t.C_=function(n,r,i){const s=se(n);return s.P_(),new XV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:o4.bind(null,t),uo:u4.bind(null,t),c_:a4.bind(null,t),u_:l4.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Jh(t)):(await t.C_.stop(),t.g_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _y(t,e){if(fr("AsyncQueue",`${e}: ${t}`),yl(t))return new M(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=zo(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.F_=new Ve(q.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ee():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class no{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new no(e,n,Ds.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(){this.x_=void 0,this.listeners=[]}}class d4{constructor(){this.queries=new yo(e=>NT(e),Hh),this.onlineState="Unknown",this.O_=new Set}}async function wy(t,e){const n=se(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new h4),i)try{s.x_=await n.onListen(r)}catch(o){const a=_y(o,`Initialization of query '${Hp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Iy(n)}async function Ey(t,e){const n=se(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function f4(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Iy(n)}function p4(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Iy(t){t.O_.forEach(e=>{e.next()})}class xy{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new no(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.key=e}}class dS{constructor(e){this.key=e}}class m4{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=le(),this.mutatedKeys=le(),this.na=OT(e),this.ra=new Ds(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new ew,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=qh(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?_!==y&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return _(d)-_(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new no(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new ew,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=le(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new dS(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new hS(r))}),n}ha(e){this.X_=e.ss,this.ta=le();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return no.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class g4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class y4{constructor(e){this.key=e,this.Ia=!1}}class v4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new yo(a=>NT(a),Hh),this.da=new Map,this.Aa=new Set,this.Ra=new Ve(q.comparator),this.Va=new Map,this.ma=new dy,this.fa={},this.ga=new Map,this.pa=to.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function _4(t,e){const n=R4(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await BV(n.localStore,pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await w4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&iS(n.remoteStore,o)}return i}async function w4(t,e,n,r,i){t.wa=(h,d,p)=>async function(y,w,m,f){let v=w.view.sa(m);v.zi&&(v=await Y_(y.localStore,w.query,!1).then(({documents:S})=>w.view.sa(S,v)));const E=f&&f.targetChanges.get(w.targetId),T=w.view.applyChanges(v,y.isPrimaryClient,E);return nw(y,w.targetId,T.ca),T.snapshot}(t,h,d,p);const s=await Y_(t.localStore,e,!0),o=new m4(e,s.ss),a=o.sa(s.documents),l=_l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);nw(t,n,u.ca);const c=new g4(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function E4(t,e){const n=se(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Hh(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sS(n.remoteStore,r.targetId),Xp(n,r.targetId)}).catch(gl)):(Xp(n,r.targetId),await Yp(n.localStore,r.targetId,!0))}async function I4(t,e,n){const r=P4(t);try{const i=await function(o,a){const l=se(o),u=Je.now(),c=a.reduce((p,_)=>p.add(_.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=mr(),y=le();return l.Xi.getEntries(p,c).next(w=>{_=w,_.forEach((m,f)=>{f.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const m=[];for(const f of a){const v=QM(f,h.get(f.key).overlayedDocument);v!=null&&m.push(new mi(f.key,v,ST(v.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:LT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Ve(ve)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await El(r,i.changes),await Jh(r.remoteStore)}catch(i){const s=_y(i,"Failed to persist write");n.reject(s)}}async function fS(t,e){const n=se(t);try{const r=await jV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Pe(o.Ia):i.removedDocuments.size>0&&(Pe(o.Ia),o.Ia=!1))}),await El(n,r,e)}catch(r){await gl(r)}}function tw(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Iy(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x4(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Ve(q.comparator);o=o.insert(s,_t.newNoDocument(s,re.min()));const a=le().add(s),l=new Qh(re.min(),new Map,new Ve(ve),o,a);await fS(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),Ty(r)}else await Yp(r.localStore,e,!1).then(()=>Xp(r,e,n)).catch(gl)}async function T4(t,e){const n=se(t),r=e.batch.batchId;try{const i=await FV(n.localStore,e);mS(n,r,null),pS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await El(n,i)}catch(i){await gl(i)}}async function S4(t,e,n){const r=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Pe(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);mS(r,e,n),pS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await El(r,i)}catch(i){await gl(i)}}function pS(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function mS(t,e,n){const r=se(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Xp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||gS(t,r)})}function gS(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(sS(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Ty(t))}function nw(t,e,n){for(const r of n)r instanceof hS?(t.ma.addReference(r.key,e),A4(t,r)):r instanceof dS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||gS(t,r.key)):ee()}function A4(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Ty(t))}function Ty(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new q(Se.fromString(e)),r=t.pa.next();t.Va.set(r,new y4(n)),t.Ra=t.Ra.insert(n,r),iS(t.remoteStore,new $r(pr(Bh(n.path)),r,"TargetPurposeLimboResolution",ey.ae))}}async function El(t,e,n){const r=se(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=py.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=se(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(u,d=>P.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>P.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!yl(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),_=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(_);c.Ji=c.Ji.insert(d,y)}}}(r.localStore,s))}async function k4(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await eS(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new M(A.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await El(n,r.ts)}}function C4(t,e){const n=se(t),r=n.Va.get(e);if(r&&r.Ia)return le().add(r.key);{let i=le();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function R4(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x4.bind(null,e),e.Ta.r_=f4.bind(null,e.eventManager),e.Ta.Sa=p4.bind(null,e.eventManager),e}function P4(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S4.bind(null,e),e}class rw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Yh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $V(this.persistence,new MV,e.initialUser,this.serializer)}createPersistence(e){return new DV(fy.zr,this.serializer)}createSharedClientState(e){return new HV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class b4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=k4.bind(null,this.syncEngine),await c4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new d4}()}createDatastore(e){const n=Yh(e.databaseInfo.databaseId),r=function(s){return new QV(s)}(e.databaseInfo);return function(s,o,a,l){return new JV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new e4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tw(this.syncEngine,n,0),function(){return J_.v()?new J_:new qV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new v4(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=se(n);H("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await wl(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=IT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_y(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D4(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Z_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Z_(e.remoteStore,s)),t._onlineComponents=e}function O4(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function D4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await hf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!O4(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await hf(t,new rw)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await hf(t,new rw);return t._offlineComponents}async function yS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await iw(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await iw(t,new b4))),t._onlineComponents}function L4(t){return yS(t).then(e=>e.syncEngine)}async function Pc(t){const e=await yS(t),n=e.eventManager;return n.onListen=_4.bind(null,e.syncEngine),n.onUnlisten=E4.bind(null,e.syncEngine),n}function M4(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Sy({next:d=>{o.enqueueAndForget(()=>Ey(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new M(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new M(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new xy(Bh(a.path),c,{includeMetadataChanges:!0,W_:!0});return wy(s,h)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}function V4(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Sy({next:d=>{o.enqueueAndForget(()=>Ey(s,h)),d.fromCache&&l.source==="server"?u.reject(new M(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new xy(a,c,{includeMetadataChanges:!0,W_:!0});return wy(s,h)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function vS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t,e,n){if(!n)throw new M(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $4(t,e,n,r){if(e===!0&&r===!0)throw new M(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ow(t){if(!q.isDocumentKey(t))throw new M(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aw(t){if(q.isDocumentKey(t))throw new M(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zh(t);throw new M(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function F4(t,e){if(e<=0)throw new M(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aM;switch(r.type){case"firstParty":return new hM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sw.get(n);r&&(H("ComponentProvider","Removing Datastore"),sw.delete(n),r.terminate())}(this),Promise.resolve()}}function j4(t,e,n,r={}){var i;const s=(t=zt(t,ed))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=bI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new lM(new ET(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qn(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Zr extends qn{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new q(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function Lt(t,e,...n){if(t=We(t),_S("collection","path",e),t instanceof ed){const r=Se.fromString(e,...n);return aw(r),new Zr(t,null,r)}{if(!(t instanceof St||t instanceof Zr))throw new M(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return aw(r),new Zr(t.firestore,null,r)}}function Et(t,e,...n){if(t=We(t),arguments.length===1&&(e=IT.V()),_S("doc","path",e),t instanceof ed){const r=Se.fromString(e,...n);return ow(r),new St(t,null,new q(r))}{if(!(t instanceof St||t instanceof Zr))throw new M(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return ow(r),new St(t.firestore,t instanceof Zr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new nS(this,"async_queue_retry"),this.Xa=()=>{const n=cf();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=cf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=cf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new or;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!yl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=vy.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&ee()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function uw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class gr extends ed{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new U4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wS(this),this._firestoreClient.terminate()}}function z4(t,e){const n=typeof t=="object"?t:Eg(),r=typeof t=="string"?t:e||"(default)",i=Ih(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CI("firestore");s&&j4(i,...s)}return i}function td(t){return t._firestoreClient||wS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new xM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,vS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new N4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ro(Ct.fromBase64String(e))}catch(n){throw new M(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ro(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=/^__.*__$/;class W4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new vl(e,this.data,n,this.fieldTransforms)}}class ES{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Cy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Cy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return bc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(IS(this.uu)&&B4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class H4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yh(e)}Ru(e,n,r,i=!1){return new Cy({uu:e,methodName:n,Au:r,path:wt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Il(t){const e=t._freezeSettings(),n=Yh(t._databaseId);return new H4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xS(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);Ry("Data must be an object, but it was:",o,r);const a=SS(r,o);let l,u;if(s.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Jp(e,h,n);if(!o.contains(d))throw new M(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kS(c,d)||c.push(d)}l=new Ht(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new W4(new Vt(a),l,u)}class rd extends Ay{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rd}}function q4(t,e,n,r){const i=t.Ru(1,e,n);Ry("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();Zi(r,(l,u)=>{const c=Py(e,l,n);u=We(u);const h=i.Iu(c);if(u instanceof rd)s.push(c);else{const d=xl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ht(s);return new ES(o,a,i.fieldTransforms)}function G4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Jp(e,r,n)],l=[i];if(s.length%2!=0)throw new M(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Jp(e,s[d])),l.push(s[d+1]);const u=[],c=Vt.empty();for(let d=a.length-1;d>=0;--d)if(!kS(u,a[d])){const p=a[d];let _=l[d];_=We(_);const y=o.Iu(p);if(_ instanceof rd)u.push(p);else{const w=xl(_,y);w!=null&&(u.push(p),c.set(p,w))}}const h=new Ht(u);return new ES(c,h,o.fieldTransforms)}function TS(t,e,n,r=!1){return xl(n,t.Ru(r?4:3,e))}function xl(t,e){if(AS(t=We(t)))return Ry("Unsupported field value:",e,t),SS(t,e);if(t instanceof Ay)return function(r,i){if(!IS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=xl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:Cc(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cc(i.serializer,s)}}if(r instanceof ky)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ro)return{bytesValue:KT(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Zh(r)}`)}(t,e)}function SS(t,e){const n={};return xT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,(r,i)=>{const s=xl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof ky||t instanceof ro||t instanceof St||t instanceof Ay)}function Ry(t,e,n){if(!AS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Jp(t,e,n){if((e=We(e))instanceof nd)return e._internalPath;if(typeof e=="string")return Py(t,e);throw bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const K4=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(K4)>=0)throw bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nd(...e.split("."))._internalPath}catch{throw bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(A.INVALID_ARGUMENT,a+t+l)}function kS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(id("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q4 extends by{data(){return super.data()}}function id(t,e){return typeof e=="string"?Py(t,e):e instanceof nd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ny{}class sd extends Ny{}function pn(t,e,...n){let r=[];e instanceof Ny&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Oy).length,a=s.filter(l=>l instanceof od).length;if(o>1||o>0&&a>0)throw new M(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class od extends sd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new od(e,n,r)}_apply(e){const n=this._parse(e);return RS(e._query,n),new qn(e.firestore,e.converter,Wp(e._query,n))}_parse(e){const n=Il(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new M(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){hw(h,c);const p=[];for(const _ of h)p.push(cw(l,s,_));d={arrayValue:{values:p}}}else d=cw(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||hw(h,c),d=TS(a,o,h,c==="in"||c==="not-in");return Ke.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wo(t,e,n){const r=e,i=id("where",t);return od._create(i,r,n)}class Oy extends Ny{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Oy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)RS(o,l),o=Wp(o,l)}(e._query,n),new qn(e.firestore,e.converter,Wp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dy extends sd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new M(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Os(s,o);return function(u,c){if(sy(u)===null){const h=Wh(u);h!==null&&PS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new qn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new es(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Rn(t,e="asc"){const n=e,r=id("orderBy",t);return Dy._create(r,n)}class Ly extends sd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ly(e,n,r)}_apply(e){return new qn(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function Pn(t){return F4("limit",t),Ly._create("limit",t,"F")}class My extends sd{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new My(e,n,r)}_apply(e){const n=Y4(e,this.type,this._docOrFields,this._inclusive);return new qn(e.firestore,e.converter,function(i,s){return new es(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Ho(...t){return My._create("startAfter",t,!1)}function Y4(t,e,n,r){if(n[0]=We(n[0]),n[0]instanceof by)return function(s,o,a,l,u){if(!l)throw new M(A.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of bi(s))if(h.field.isKeyField())c.push(Tc(o,l.key));else{const d=l.data.field(h.field);if(zh(d))throw new M(A.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const p=h.field.canonicalString();throw new M(A.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}c.push(d)}return new eo(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Il(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new M(A.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let _=0;_<c.length;_++){const y=c[_];if(d[_].field.isKeyField()){if(typeof y!="string")throw new M(A.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!oy(o)&&y.indexOf("/")!==-1)throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(Se.fromString(y));if(!q.isDocumentKey(w))throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new q(w);p.push(Tc(a,m))}else{const w=TS(l,u,y);p.push(w)}}return new eo(p,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function cw(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new M(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oy(e)&&n.indexOf("/")!==-1)throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!q.isDocumentKey(r))throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tc(t,new q(r))}if(n instanceof St)return Tc(t,n._key);throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zh(n)}.`)}function hw(t,e){if(!Array.isArray(t)||t.length===0)throw new M(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RS(t,e){if(e.isInequality()){const r=Wh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=sy(t);s!==null&&PS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PS(t,e,n){if(!n.isEqual(e))throw new M(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class X4{convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ky(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ty(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const n=ai(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Pe(ZT(r));const i=new za(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NS extends by{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(id("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cu extends NS{data(e={}){return super.data(e)}}class OS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:J4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function J4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){t=zt(t,St);const e=zt(t.firestore,gr);return M4(td(e),t._key).then(n=>MS(e,t,n))}class $y extends X4{constructor(e){super(),this.firestore=e}convertBytes(e){return new ro(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function mn(t){t=zt(t,qn);const e=zt(t.firestore,gr),n=td(e),r=new $y(e);return CS(t._query),V4(n,t._query).then(i=>new OS(e,r,t,i))}function Fy(t,e,n){t=zt(t,St);const r=zt(t.firestore,gr),i=bS(t.converter,e,n);return ad(r,[xS(Il(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Ni(t,e,n,...r){t=zt(t,St);const i=zt(t.firestore,gr),s=Il(i);let o;return o=typeof(e=We(e))=="string"||e instanceof nd?G4(s,"updateDoc",t._key,e,n,r):q4(s,"updateDoc",t._key,e),ad(i,[o.toMutation(t._key,sn.exists(!0))])}function DS(t){return ad(zt(t.firestore,gr),[new ay(t._key,sn.none())])}function Z4(t,e){const n=zt(t.firestore,gr),r=Et(t),i=bS(t.converter,e);return ad(n,[xS(Il(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function LS(t,...e){var n,r,i;t=We(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||uw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(uw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof St)u=zt(t.firestore,gr),c=Bh(t._key.path),l={next:h=>{e[o]&&e[o](MS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zt(t,qn);u=zt(h.firestore,gr),c=h._query;const d=new $y(u);l={next:p=>{e[o]&&e[o](new OS(u,d,h,p))},error:e[o+1],complete:e[o+2]},CS(t._query)}return function(d,p,_,y){const w=new Sy(y),m=new xy(p,w,_);return d.asyncQueue.enqueueAndForget(async()=>wy(await Pc(d),m)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>Ey(await Pc(d),m))}}(td(u),c,a,l)}function ad(t,e){return function(r,i){const s=new or;return r.asyncQueue.enqueueAndForget(async()=>I4(await L4(r),i,s)),s.promise}(td(t),e)}function MS(t,e,n){const r=n.docs.get(e._key),i=new $y(t);return new NS(t,i,e._key,r,new qo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){go=i})(Yi),Fi(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new gr(new uM(r.getProvider("auth-internal")),new fM(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new M(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vn(R_,"4.1.0",e),Vn(R_,"4.1.0","esm2017")})();const e$={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},jy=DI(e$);YD(jy);const Ls=ID(jy),we=z4(jy);function vn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ui(t){return!!t&&!!t[Ne]}function yr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===u$}(t)||Array.isArray(t)||!!t[vw]||!!(!((e=t.constructor)===null||e===void 0)&&e[vw])||Uy(t)||zy(t))}function Hi(t,e,n){n===void 0&&(n=!1),_o(t)===0?(n?Object.keys:Vs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function _o(t){var e=t[Ne];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Uy(t)?2:zy(t)?3:0}function Ms(t,e){return _o(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function t$(t,e){return _o(t)===2?t.get(e):t[e]}function VS(t,e,n){var r=_o(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function $S(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Uy(t){return a$&&t instanceof Map}function zy(t){return l$&&t instanceof Set}function _i(t){return t.o||t.t}function By(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=jS(t);delete e[Ne];for(var n=Vs(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Wy(t,e){return e===void 0&&(e=!1),Hy(t)||ui(t)||!yr(t)||(_o(t)>1&&(t.set=t.add=t.clear=t.delete=n$),Object.freeze(t),e&&Hi(t,function(n,r){return Wy(r,!0)},!0)),t}function n$(){vn(2)}function Hy(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Un(t){var e=nm[t];return e||vn(18,t),e}function r$(t,e){nm[t]||(nm[t]=e)}function Zp(){return qa}function df(t,e){e&&(Un("Patches"),t.u=[],t.s=[],t.v=e)}function Nc(t){em(t),t.p.forEach(i$),t.p=null}function em(t){t===qa&&(qa=t.l)}function dw(t){return qa={p:[],l:qa,h:t,m:!0,_:0}}function i$(t){var e=t[Ne];e.i===0||e.i===1?e.j():e.g=!0}function ff(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Un("ES5").S(e,t,r),r?(n[Ne].P&&(Nc(e),vn(4)),yr(t)&&(t=Oc(e,t),e.l||Dc(e,t)),e.u&&Un("Patches").M(n[Ne].t,t,e.u,e.s)):t=Oc(e,n,[]),Nc(e),e.u&&e.v(e.u,e.s),t!==FS?t:void 0}function Oc(t,e,n){if(Hy(e))return e;var r=e[Ne];if(!r)return Hi(e,function(a,l){return fw(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Dc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=By(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Hi(s,function(a,l){return fw(t,r,i,a,l,n,o)}),Dc(t,i,!1),n&&t.u&&Un("Patches").N(r,n,t.u,t.s)}return r.o}function fw(t,e,n,r,i,s,o){if(ui(i)){var a=Oc(t,i,s&&e&&e.i!==3&&!Ms(e.R,r)?s.concat(r):void 0);if(VS(n,r,a),!ui(a))return;t.m=!1}else o&&n.add(i);if(yr(i)&&!Hy(i)){if(!t.h.D&&t._<1)return;Oc(t,i),e&&e.A.l||Dc(t,i)}}function Dc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Wy(e,n)}function pf(t,e){var n=t[Ne];return(n?_i(n):t)[e]}function pw(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(t){t.P||(t.P=!0,t.l&&Dr(t.l))}function mf(t){t.o||(t.o=By(t.t))}function tm(t,e,n){var r=Uy(e)?Un("MapSet").F(e,n):zy(e)?Un("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Zp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Ga;o&&(l=[a],u=Go);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Un("ES5").J(e,n);return(n?n.A:Zp()).p.push(r),r}function s$(t){return ui(t)||vn(22,t),function e(n){if(!yr(n))return n;var r,i=n[Ne],s=_o(n);if(i){if(!i.P&&(i.i<4||!Un("ES5").K(i)))return i.t;i.I=!0,r=mw(n,s),i.I=!1}else r=mw(n,s);return Hi(r,function(o,a){i&&t$(i.t,o)===a||VS(r,o,e(a))}),s===3?new Set(r):r}(t)}function mw(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return By(t)}function o$(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Ne];return Ga.get(l,s)},set:function(l){var u=this[Ne];Ga.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Ne];if(!a.P)switch(a.i){case 5:r(a)&&Dr(a);break;case 4:n(a)&&Dr(a)}}}function n(s){for(var o=s.t,a=s.k,l=Vs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ne){var h=o[c];if(h===void 0&&!Ms(o,c))return!0;var d=a[c],p=d&&d[Ne];if(p?p.t!==h:!$S(d,h))return!0}}var _=!!o[Ne];return l.length!==Vs(o).length+(_?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};r$("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var _=jS(h);delete _[Ne];for(var y=Vs(_),w=0;w<y.length;w++){var m=y[w];_[m]=t(m,c||!!_[m].enumerable)}return Object.create(Object.getPrototypeOf(h),_)}(a,s),u={i:a?5:4,A:o?o.A:Zp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ne,{value:u,writable:!0}),l},S:function(s,o,a){a?ui(o)&&o[Ne].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ne];if(c){var h=c.t,d=c.k,p=c.R,_=c.i;if(_===4)Hi(d,function(v){v!==Ne&&(h[v]!==void 0||Ms(h,v)?p[v]||l(d[v]):(p[v]=!0,Dr(c)))}),Hi(h,function(v){d[v]!==void 0||Ms(d,v)||(p[v]=!1,Dr(c))});else if(_===5){if(r(c)&&(Dr(c),p.length=!0),d.length<h.length)for(var y=d.length;y<h.length;y++)p[y]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var gw,qa,qy=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",a$=typeof Map<"u",l$=typeof Set<"u",yw=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",FS=qy?Symbol.for("immer-nothing"):((gw={})["immer-nothing"]=!0,gw),vw=qy?Symbol.for("immer-draftable"):"__$immer_draftable",Ne=qy?Symbol.for("immer-state"):"__$immer_state",u$=""+Object.prototype.constructor,Vs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,jS=Object.getOwnPropertyDescriptors||function(t){var e={};return Vs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},nm={},Ga={get:function(t,e){if(e===Ne)return t;var n=_i(t);if(!Ms(n,e))return function(i,s,o){var a,l=pw(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!yr(r)?r:r===pf(t.t,e)?(mf(t),t.o[e]=tm(t.A.h,r,t)):r},has:function(t,e){return e in _i(t)},ownKeys:function(t){return Reflect.ownKeys(_i(t))},set:function(t,e,n){var r=pw(_i(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=pf(_i(t),e),s=i==null?void 0:i[Ne];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if($S(n,i)&&(n!==void 0||Ms(t.t,e)))return!0;mf(t),Dr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return pf(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,mf(t),Dr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=_i(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){vn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){vn(12)}},Go={};Hi(Ga,function(t,e){Go[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Go.deleteProperty=function(t,e){return Go.set.call(this,t,e,void 0)},Go.set=function(t,e,n){return Ga.set.call(this,t[0],e,n,t[0])};var c$=function(){function t(n){var r=this;this.O=yw,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(y){var w=this;y===void 0&&(y=a);for(var m=arguments.length,f=Array(m>1?m-1:0),v=1;v<m;v++)f[v-1]=arguments[v];return l.produce(y,function(E){var T;return(T=s).call.apply(T,[w,E].concat(f))})}}var u;if(typeof s!="function"&&vn(6),o!==void 0&&typeof o!="function"&&vn(7),yr(i)){var c=dw(r),h=tm(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?Nc(c):em(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return df(c,o),ff(y,c)},function(y){throw Nc(c),y}):(df(c,o),ff(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===FS&&(u=void 0),r.D&&Wy(u,!0),o){var p=[],_=[];Un("Patches").M(i,u,p,_),o(p,_)}return u}vn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){yr(n)||vn(8),ui(n)&&(n=s$(n));var r=dw(this),i=tm(this,n,void 0);return i[Ne].C=!0,em(r),i},e.finishDraft=function(n,r){var i=n&&n[Ne],s=i.A;return df(s,r),ff(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!yw&&vn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Un("Patches").$;return ui(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Qt=new c$,US=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseProxies.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function Ka(t){"@babel/helpers - typeof";return Ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ka(t)}function h$(t,e){if(Ka(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ka(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function d$(t){var e=h$(t,"string");return Ka(e)==="symbol"?e:String(e)}function f$(t,e,n){return e=d$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ww(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_w(Object(n),!0).forEach(function(r){f$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_w(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Ew=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),gf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Lc={INIT:"@@redux/INIT"+gf(),REPLACE:"@@redux/REPLACE"+gf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+gf()}};function p$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Gy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(gt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(gt(1));return n(Gy)(t,e)}if(typeof t!="function")throw new Error(gt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(gt(3));return s}function h(y){if(typeof y!="function")throw new Error(gt(4));if(l)throw new Error(gt(5));var w=!0;return u(),a.push(y),function(){if(w){if(l)throw new Error(gt(6));w=!1,u();var f=a.indexOf(y);a.splice(f,1),o=null}}}function d(y){if(!p$(y))throw new Error(gt(7));if(typeof y.type>"u")throw new Error(gt(8));if(l)throw new Error(gt(9));try{l=!0,s=i(s,y)}finally{l=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return y}function p(y){if(typeof y!="function")throw new Error(gt(10));i=y,d({type:Lc.REPLACE})}function _(){var y,w=h;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(gt(11));function v(){f.next&&f.next(c())}v();var E=w(v);return{unsubscribe:E}}},y[Ew]=function(){return this},y}return d({type:Lc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[Ew]=_,r}function m$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Lc.INIT});if(typeof r>"u")throw new Error(gt(12));if(typeof n(void 0,{type:Lc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(gt(13))})}function zS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{m$(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],_=n[p],y=l[p],w=_(y,u);if(typeof w>"u")throw u&&u.type,new Error(gt(14));h[p]=w,c=c||w!==y}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Mc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function g$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(gt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Mc.apply(void 0,a)(i.dispatch),ww(ww({},i),{},{dispatch:s})}}}function BS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var WS=BS();WS.withExtraArgument=BS;const Iw=WS;var HS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),y$=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},io=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},v$=Object.defineProperty,_$=Object.defineProperties,w$=Object.getOwnPropertyDescriptors,xw=Object.getOwnPropertySymbols,E$=Object.prototype.hasOwnProperty,I$=Object.prototype.propertyIsEnumerable,Tw=function(t,e,n){return e in t?v$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ei=function(t,e){for(var n in e||(e={}))E$.call(e,n)&&Tw(t,n,e[n]);if(xw)for(var r=0,i=xw(e);r<i.length;r++){var n=i[r];I$.call(e,n)&&Tw(t,n,e[n])}return t},yf=function(t,e){return _$(t,w$(e))},x$=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},T$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Mc:Mc.apply(null,arguments)};function S$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var A$=function(t){HS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,io([void 0],n[0].concat(this)))):new(e.bind.apply(e,io([void 0],n.concat(this))))},e}(Array),k$=function(t){HS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,io([void 0],n[0].concat(this)))):new(e.bind.apply(e,io([void 0],n.concat(this))))},e}(Array);function rm(t){return yr(t)?US(t,function(){}):t}function C$(t){return typeof t=="boolean"}function R$(){return function(e){return P$(e)}}function P$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new A$;return n&&(C$(n)?r.push(Iw):r.push(Iw.withExtraArgument(n.extraArgument))),r}var b$=!0;function N$(t){var e=R$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(S$(i))p=zS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var y=g$.apply(void 0,_),w=Mc;l&&(w=T$(ei({trace:!b$},typeof l=="object"&&l)));var m=new k$(y),f=m;Array.isArray(d)?f=io([y],d):typeof d=="function"&&(f=d(m));var v=w.apply(void 0,f);return Gy(p,c,v)}function ti(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return ei(ei({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function qS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function O$(t){return typeof t=="function"}function D$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?qS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(O$(t))l=function(){return rm(t())};else{var u=rm(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=io([s[d.type]],o.filter(function(_){var y=_.matcher;return y(d)}).map(function(_){var y=_.reducer;return y}));return p.filter(function(_){return!!_}).length===0&&(p=[a]),p.reduce(function(_,y){if(y)if(ui(_)){var w=_,m=y(w,d);return m===void 0?_:m}else{if(yr(_))return US(_,function(f){return y(f,d)});var m=y(_,d);if(m===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return _},h)}return c.getInitialState=l,c}function L$(t,e){return t+"/"+e}function M$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:rm(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=L$(e,c),p,_;"reducer"in h?(p=h.reducer,_=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=_?ti(d,_):ti(d)});function l(){var c=typeof t.extraReducers=="function"?qS(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],_=p===void 0?[]:p,y=c[2],w=y===void 0?void 0:y,m=ei(ei({},d),o);return D$(n,function(f){for(var v in m)f.addCase(v,m[v]);for(var E=0,T=_;E<T.length;E++){var S=T[E];f.addMatcher(S.matcher,S.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var V$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",$$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=V$[Math.random()*64|0];return e},F$=["name","message","stack","code"],vf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),Sw=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),j$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=F$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=ti(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:yf(ei({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=ti(e+"/pending",function(u,c,h){return{payload:void 0,meta:yf(ei({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ti(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||j$)(u||"Rejected"),meta:yf(ei({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):$$(),_=new a,y;function w(f){y=f,_.abort()}var m=function(){return x$(this,null,function(){var f,v,E,T,S,b,R;return y$(this,function(G){switch(G.label){case 0:return G.trys.push([0,4,,5]),T=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),z$(T)?[4,T]:[3,2];case 1:T=G.sent(),G.label=2;case 2:if(T===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return S=new Promise(function($,z){return _.signal.addEventListener("abort",function(){return z({name:"AbortError",message:y||"Aborted"})})}),c(s(p,u,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([S,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:_.signal,abort:w,rejectWithValue:function($,z){return new vf($,z)},fulfillWithValue:function($,z){return new Sw($,z)}})).then(function($){if($ instanceof vf)throw $;return $ instanceof Sw?i($.payload,p,u,$.meta):i($,p,u)})])];case 3:return E=G.sent(),[3,5];case 4:return b=G.sent(),E=b instanceof vf?o(null,p,u,b.payload,b.meta):o(b,p,u),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,R||c(E),[2,E]}})})}();return Object.assign(m,{abort:w,requestId:p,arg:u,unwrap:function(){return m.then(U$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function U$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function z$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Ky="listenerMiddleware";ti(Ky+"/add");ti(Ky+"/removeAll");ti(Ky+"/remove");var Aw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);o$();const kw={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Vc=M$({name:"auth",initialState:kw,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>kw,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:GS,authStateChange:Uj,authSignOut:B$,adminRole:W$,clearCashList:H$,addToFavoriteList:q$,setFavoriteList:G$,deleteFromFavoriteList:K$}=Vc.actions,Q$=({email:t,password:e,userName:n})=>async(r,i)=>{await iO(Ls,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await aO(Ls.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=Ls.currentUser;r(GS({userId:s,userName:o}))},Qy=({email:t,password:e})=>async(n,r)=>{sO(Ls,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=Ls.currentUser;n(GS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(W$())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},Y$=()=>async(t,e)=>{cO(Ls).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(B$())},X$=()=>(t,e)=>{t(H$())},J$=t=>(e,n)=>{e(q$(t))},Yy=t=>async(e,n)=>{const r=await Vy(Et(we,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e(G$(i))}else console.log("No such document!")},Z$=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o.name!==t.name)return o});e(K$(s))};function eF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22"}}]})(t)}function tF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22",transform:"matrix(-1 0 0 1 24 0)"}}]})(t)}function nF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function rF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function iF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function Xy(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function sF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function oF(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const aF=k.ul`
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
`,lF=k.li`
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
`,uF=k.div`
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
`,cF=k.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,hF=k(Xy)`
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
`,dF=k(nF)`
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
`,fF=k(sF)`
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
`,pF=k.ul`
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
`,mF=k.li`
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
`,gF=k.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,yF=k.p`
  width: 90%;
`;k.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const vF=k.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,_F=k.div`
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
`,wF=k.div`
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
`,EF=k.h3``,IF=k.div`
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
`,KS=k(eF)`
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

  transition: background 0.5s, border-color 0.5s;

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
  }`,QS=k(tF)`
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
  transition: background 0.5s, border-color 0.5s;

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
`,xF=k.div`
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
`,Cw=k.button`
  width: 100%;
  background: black;
  color: white;
  transition: background 0.5s;

  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`,TF=k.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,SF=k.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,AF=k.div`
  display: flex;
`,kF=k(rF)`
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
`,CF=k(Xy)`
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
`,RF=k(iF)`
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
`,PF=k.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,{addGoodToCashList:bF,removeGoodFromCashList:NF}=Vc.actions,OF=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(bF({id:t,name:e,image:n,price:r}))},DF=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(NF(s))};var YS={exports:{}},LF="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MF=LF,VF=MF;function XS(){}function JS(){}JS.resetWarningCache=XS;var $F=function(){function t(r,i,s,o,a,l){if(l!==VF){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:JS,resetWarningCache:XS};return n.PropTypes=n,n};YS.exports=$F();var FF=YS.exports;const ss=om(FF),jF=k.div`
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
`,UF=k.div`
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
`,zF=k(KS)`
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
`,BF=k(QS)`
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
`;class ZS extends bt.Component{constructor(){super(...arguments);Io(this,"nextImage",()=>{this.props.nextImage()});Io(this,"previousImage",()=>{this.props.previousImage()});Io(this,"keydown",n=>{n.keyCode===27&&this.props.onCloseModal()})}componentDidMount(){document.addEventListener("keydown",this.keydown)}componentWillUnmount(){document.removeEventListener("keydown",this.keydown)}render(){return g.jsxs(g.Fragment,{children:[this.props.currentImageIndex!==this.props.currentImageUrl.length-1&&typeof this.props.currentImageUrl!="string"&&g.jsx(zF,{onClick:this.nextImage}),g.jsx(jF,{onClick:this.props.onCloseModal,children:g.jsx(UF,{style:{backgroundImage:`url(${typeof this.props.currentImageUrl=="string"?this.props.currentImageUrl:this.props.currentImageUrl[this.props.currentImageIndex]})`}})}),this.props.currentImageIndex!==0&&typeof this.props.currentImageUrl!="string"&&g.jsx(BF,{onClick:this.previousImage})]})}}Io(ZS,"propTypes",{onCloseModal:ss.func.isRequired,currentImageUrl:ss.string.isRequired||ss.array.isRequired,nextImage:ss.func.isRequired,previousImage:ss.func.isRequired,currentImageIndex:ss.number.isRequired});const ld=({card:t,closeModal:e})=>{const n=Er(),r=Qi(),[i,s]=I.useState(!1),o=ln(cn),[a,l]=I.useState(0);let u=o.favoriteList,c=u.length>0?o.favoriteList.map(S=>S.name):[];const h=S=>{S.currentTarget===S.target&&e()},d=S=>{(S.charCode||S.keyCode)===27&&e()},p=async()=>{await DS(Et(we,"goods",`${t.id}`)),e()},_=()=>{r(OF(t))},y=async()=>{try{await Ni(Et(we,"users",`${o.email}`),{favoriteList:[...u,t]})}catch(S){console.log(S)}},w=()=>{r(J$(t)),y()},m=async()=>{try{const S=u.filter(b=>{if(b.name!==t.name)return b});await Ni(Et(we,"users",`${o.email}`),{favoriteList:S})}catch(S){console.log(S)}},f=()=>{m(),r(Z$(t))};I.useEffect(()=>(document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}),[]);const v=()=>{l(S=>S+1)},E=()=>{l(S=>S-1)},T=()=>{s(!1)};return g.jsx(vF,{onClick:h,children:g.jsxs(_F,{onClick:h,children:[g.jsxs(wF,{children:[g.jsxs(AF,{children:[g.jsxs(SF,{children:[a!==0&&typeof t.image!="string"&&g.jsx(QS,{onClick:E}),g.jsx(IF,{style:{backgroundImage:`url(${typeof t.image=="string"?t.image:t.image[a]})`},onClick:()=>{s(!0)}}),a!==t.image.length-1&&typeof t.image!="string"&&g.jsx(KS,{onClick:v}),g.jsx(Cw,{onClick:_,children:"Добавити до покупок"}),o.isLogIn&&(c.includes(t.name)?g.jsx(TF,{onClick:f,children:"Видалити з обранного"}):g.jsx(Cw,{onClick:w,children:"Добавити до обранного"}))]}),g.jsxs(xF,{children:[g.jsx(EF,{children:t.name}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),g.jsx(PF,{children:t.otherInfo})]})]})]}),g.jsx(kF,{onClick:()=>e()}),o.role==="admin"&&g.jsxs(g.Fragment,{children:[g.jsx(CF,{onClick:()=>{p()}}),g.jsx(RF,{onClick:()=>{n("/admin",{state:t})}})]})]}),i&&g.jsx(ZS,{onCloseModal:T,currentImageIndex:a,currentImageUrl:t.image,nextImage:v,previousImage:E})]})})},WF=()=>{const t=ln(cn),[e,n]=I.useState(!1),[r,i]=I.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return g.jsxs(g.Fragment,{children:[g.jsx(pF,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>g.jsx(g.Fragment,{children:g.jsx(mF,{onClick:()=>s(a),style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`},children:g.jsxs(gF,{children:[g.jsx(yF,{children:a.name}),g.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):g.jsx("div",{children:"Список обранного пустий"})}),e&&g.jsx(ld,{card:r,closeModal:o})]})};function Ru(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ru=function(n){return typeof n}:Ru=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ru(t)}function _f(){}var HF={getItem:_f,setItem:_f,removeItem:_f};function qF(t){if((typeof self>"u"?"undefined":Ru(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function GF(t){var e="".concat(t,"Storage");return qF(e)?self[e]:HF}function KF(t){var e=GF(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const Fr=KF("local"),QF=({closeUserModal:t,typeModal:e})=>{const[n,r]=I.useState(e),[i,s]=I.useState(!1),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(""),[d,p]=I.useState(""),[_,y]=I.useState(""),[w,m]=I.useState(""),[f,v]=I.useState(""),[E,T]=I.useState(""),[S,b]=I.useState(""),[R,G]=I.useState(""),[$,z]=I.useState(""),[fe,B]=I.useState([]),[W,J]=I.useState("info"),[oe,ce]=I.useState(""),N=ln(cn),K=Qi(),Y=O=>{O.currentTarget===O.target&&t()},_e=O=>{(O.charCode||O.keyCode)===27&&t()};I.useEffect(()=>(document.body.addEventListener("keydown",_e),function(){document.body.removeEventListener("keydown",_e)}),[]);const L=O=>{a(O.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(O.target.value).toLowerCase())?u(""):u("Введіть повнe призвіще, ім'я, побатькові")},F=O=>{h(O.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(O.target.value).toLowerCase())?p(""):p("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},j=O=>{y(O.target.value),O.target.value.length<6?v("Довжина пароля повина бути від 6 символів"):v("")},X=O=>{m(O.target.value),O.target.value!==_?T("Введені паролі нe співпадають"):T("")},x=O=>{b(O.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(O.target.value))?G(""):G("Номер невірного формату (наприклад '043*******')")},ae=()=>{!l&&!d&&!f&&!E&&!R&&w&&o&&c&&_&&S&&$?(K(Q$({email:c,password:_,userName:o})),D({name:o,email:c,password:_,userNumber:S,userPostAdress:$,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},D=async O=>{try{await Fy(Et(we,"users",`${O.email}`),O)}catch(Q){console.error("Error adding user: ",Q)}},be=async()=>{try{K(Qy({email:c,password:_})),K(Yy(c)),await Ni(Et(we,"users",`${c}`),{isLogIn:!0}),Fr.setItem("userEmail",c),Fr.setItem("userPassword",_),t()}catch(O){ce("Email не зареестрований або невіний пароль"),console.error("Error adding user: ",O)}},me=async()=>{t(),K(Y$()),Fr.removeItem("userEmail"),Fr.removeItem("userPassword");try{await Ni(Et(we,"users",`${N.email}`),{isLogIn:!1})}catch(O){console.error("Error adding user: ",O)}},ye=async()=>{const O=await Vy(Et(we,"users",`${N.email}`));if(O.exists()){const{name:Q,userPostAdress:$e,userNumber:he}=O.data();a(Q),b(he),z($e)}};I.useEffect(()=>{N.email&&(ye(),G(""))},[W,K]);const ie=async()=>{if(!R)try{await Ni(Et(we,"users",`${N.email}`),{userNumber:S,userPostAdress:$}),J("info")}catch(O){console.error("Error change user: ",O)}},Qe=async()=>{try{(await mn(pn(Lt(we,"orders"),Wo("userEmail","==",`${N.email}`)))).forEach(Q=>{B($e=>[...$e,{id:Q.id,...Q.data()}])}),B(Q=>Q.sort(($e,he)=>$e.postDate>he.postDate?-1:1))}catch(O){console.error("Error take orders: ",O)}};return I.useEffect(()=>{Qe()},[K]),g.jsx(N2,{onClick:Y,children:g.jsx(O2,{onClick:Y,children:g.jsxs(D2,{children:[n==="SignIn"&&g.jsxs(Gl,{id:"userFormSignIn",children:[g.jsx(rs,{children:"Контактні дані"}),g.jsx(kn,{required:!0,name:"name",value:o,onChange:O=>{L(O)},placeholder:"Введіть ПІБ",style:l?{borderColor:"red"}:{}}),l&&g.jsx(Kn,{children:l}),g.jsx(kn,{required:!0,name:"email",value:c,onChange:O=>{F(O)},placeholder:"Введіть контактну електронну адресу",style:d?{borderColor:"red"}:{}}),d&&g.jsx(Kn,{children:d}),g.jsx(kn,{required:!0,name:"password",value:_,onChange:O=>{j(O)},placeholder:"Введіть пароль",autoComplete:"on",minlength:"5",style:f?{borderColor:"red"}:{}}),f&&g.jsx(Kn,{children:f}),g.jsx(kn,{required:!0,name:"passwordDublicate",value:w,onChange:O=>{X(O)},placeholder:"Повторіть пароль",style:E?{borderColor:"red"}:{}}),E&&g.jsx(Kn,{children:E}),g.jsx(kn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:R?{borderColor:"red"}:{}}),R&&g.jsx(Kn,{children:R}),g.jsx(kn,{value:$,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(Kn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Kl,{style:i?{backgroundColor:"red"}:{},onClick:ae,children:"Зареєструватись"})]}),n==="LogIn"&&g.jsxs(Gl,{id:"userFormLogIn",children:[g.jsx(rs,{children:"E-mail:"}),g.jsx(kn,{required:!0,name:"email",value:c,onChange:O=>{h(O.target.value)}}),g.jsx(rs,{children:"Пароль:"}),g.jsx(kn,{required:!0,name:"password",value:_,onChange:O=>{y(O.target.value)}}),oe&&g.jsx(Kn,{children:oe}),g.jsx(Kl,{onClick:be,children:"Увійти"})]}),n==="Config"&&g.jsxs(g.Fragment,{children:[g.jsxs(L2,{children:[g.jsx(Wl,{onClick:()=>{J("info")},children:"Користувач"}),g.jsx(Wl,{onClick:()=>{J("change")},children:"Зміна данних"}),g.jsx(Wl,{onClick:()=>{J("favorite")},children:"Обране"}),g.jsx(Wl,{onClick:()=>{J("history")},children:"Історія покупок"})]}),W==="info"&&g.jsxs(Gl,{id:"userFormConfig",children:[g.jsx(rs,{children:"Інформація користувача"}),g.jsxs(M2,{children:[g.jsx(Hl,{children:"Призвіще, ім'я, по батькові:"}),g.jsx(ql,{children:o}),g.jsx(Hl,{children:"E-mail:"}),g.jsx(ql,{children:N.email}),g.jsx(Hl,{children:"Номер телефону:"}),g.jsxs(ql,{children:[" ",S]}),g.jsx(Hl,{children:'Відділення "Нова пошти":'}),g.jsx(ql,{children:$})]}),g.jsx(Kl,{onClick:me,children:"Вийти з аккаунта"})]}),W==="change"&&g.jsxs(Gl,{id:"userFormConfig",children:[g.jsx(rs,{children:"Зміна данних"}),g.jsx(kn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:R?{borderColor:"red"}:{}}),R&&g.jsx(Kn,{children:R}),g.jsx(kn,{value:$,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(Kn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Kl,{onClick:ie,children:"Змінити дані"})]}),W==="favorite"&&g.jsx(WF,{}),W==="history"&&g.jsxs($2,{children:[g.jsx(rs,{children:"Історія покупок"}),g.jsx($0,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx($0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(U2,{children:fe.map(O=>g.jsxs(z2,{children:[g.jsx(V2,{style:O.status==="take"?{backgroundColor:"yellow"}:O.status==="send"?{backgroundColor:"green"}:{}}),g.jsxs(Gn,{children:[g.jsxs(Gn,{children:["Статус:",O.status==="create"&&" Замовлення оформлене",O.status==="take"&&" Прийняте",O.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(O.postDate.seconds)]}),g.jsxs(Gn,{children:["ФІП: ",O.userFullName]}),g.jsxs(Gn,{children:["Email: ",O.userEmail]}),g.jsxs(Gn,{children:["Номер телефону: ",O.userNumber]}),g.jsxs(Gn,{children:["Адрес Нової почти: ",O.userPostAdress]}),g.jsx(Gn,{children:"Список замовлення:"}),O.cashList.map(Q=>g.jsxs(F2,{children:[g.jsx(j2,{style:{backgroundImage:`url(${typeof Q.image=="string"?Q.image:Q.image[0]})`}}),g.jsxs(Gn,{children:["Назва: ",Q.name]}),g.jsxs(Gn,{children:["Ціна: ",Q.price]})]}))]}))})]})]})]})})})},YF=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(""),s=ln(cn).isLogIn,o=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[s?g.jsx(g.Fragment,{children:g.jsx(zd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):g.jsxs(b2,{children:[g.jsx(zd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),g.jsx(zd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&g.jsx(QF,{closeUserModal:o,typeModal:n})]})},XF=()=>{const{cashList:t}=ln(cn),e=Er(),n=wr().pathname,r=Qi();I.useEffect(()=>{localStorage.getItem("userEmail")&&localStorage.getItem("userPassword")&&i()},[]);const i=async()=>{const s=await localStorage.getItem("userEmail"),o=await localStorage.getItem("userPassword");r(Qy({email:s,password:o})),r(Yy(s))};return g.jsxs(E2,{children:[g.jsxs(I2,{children:[g.jsx(k2,{}),n!=="/checkout"&&g.jsxs(g.Fragment,{children:[g.jsx(P2,{}),g.jsx(YF,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&g.jsxs(T2,{children:[g.jsx(x2,{onClick:()=>{e("/cashList")}}),g.jsx(S2,{children:t.length})]})]})},JF=()=>g.jsxs(g.Fragment,{children:[g.jsx(XF,{}),g.jsx(I.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(TR,{})})]}),Jy=k.ul`
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
`,Zy=k.li`
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
`,ev=k.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,tv=k.p`
  width: 90%;
`,nv=k.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,rv=k(oF)`
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
`,eA=k.button`
  color: white;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  transition: background-color 0.5s, border-color 0.5s;

  &:hover {
    background: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 35px;
    margin-bottom: 25px;
  }
`,ZF=k.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,im=k.select`
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
`,Jn=k.option``,ou=k.input`
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
`,Rw=k.textarea`
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
`,tA=k.button`
  transition: background 0.5s;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,ej=k(Jy)`
  flex-direction: column;
`,tj=k.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,nj=k.li`
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
`,rj=k.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,ij=k(tA)`
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
`,sj=()=>{const[t,e]=I.useState([]),n=ln(cn),r=[],i=Er(),[s,o]=I.useState(!1),[a,l]=I.useState(),[u,c]=I.useState("");let h=new Date().getTime()/1e3;const d=y=>{l(y),o(!0)},p=()=>{o(!1)},_=async()=>{LS(Lt(we,"goods"),y=>{e(y.docs.map(w=>({...w.data(),id:w.id})).sort((w,m)=>w.createTime.seconds>m.createTime.seconds?-1:1))})};return I.useEffect(()=>{_()},[]),t.map(y=>{r.includes(y.category)||r.push(y.category)}),r.sort(),I.useEffect(()=>{function y(){console.log(window.innerWidth),c(window.innerWidth)}return window.addEventListener("resize",y),y(),()=>{window.removeEventListener("resize",y)}},[c]),g.jsxs(g.Fragment,{children:[g.jsx(ej,{children:r.map(y=>{let w=0;return g.jsxs(nj,{children:[g.jsx(tj,{children:y}),g.jsx(rj,{children:t.map((m,f)=>{if(m.category===y)return w++,window.innerWidth===2160&&w>8||window.innerWidth===1152&&w>6||window.innerWidth===480&&w>4?void 0:g.jsxs(Zy,{onClick:()=>d(m),style:{backgroundImage:`url(${typeof m.image=="string"?m.image:m.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(v=>{if(v.name===m.name)return g.jsx(rv,{})}),h-m.createTime.seconds<259200&&g.jsx(nv,{children:"Новинка!"}),g.jsxs(ev,{children:[g.jsx(tv,{children:m.name}),g.jsxs("p",{children:[m.price," грн."]})]})]},f)})}),g.jsx(ij,{onClick:()=>i("/search",{state:{category:y}}),children:"Побачити більше"})]})})}),s&&g.jsx(ld,{card:a,closeModal:p})]})},oj=k.div`
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
`,aj=k.input`
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
`,lj=k(im)`
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
`,uj=k.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,nA=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let Ai=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const cj=()=>{const e=wr().state,n=ln(cn),[r,i]=I.useState([]),[s,o]=I.useState(r),[a,l]=I.useState(!1),[u,c]=I.useState(),[h,d]=I.useState(""),[p,_]=I.useState(""),[y,w]=I.useState(e&&e.category?e.category:"");let m=new Date().getTime()/1e3;const f=B=>{c(B),l(!0)},v=()=>{l(!1)},E=async()=>{o([]);const B=pn(Lt(we,"goods"),Rn("createTime","desc"),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},T=async()=>{const B=pn(Lt(we,"goods"),Rn("createTime","desc"),Ho(h),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},S=async()=>{o([]);const B=pn(Lt(we,"goods"),Wo("category","==",y),Rn("createTime","desc"),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},b=async()=>{const B=pn(Lt(we,"goods"),Wo("category","==",y),Rn("createTime","desc"),Ho(h),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},R=async()=>{o([]);const B=pn(Lt(we,"goods"),Rn("name"),Pn(25)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&o(ce=>[...ce,{...oe.data(),id:oe.id}])})},G=async()=>{const B=pn(Lt(we,"goods"),Rn("name"),Ho(h),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&o(ce=>[...ce,{...oe.data(),id:oe.id}])})},$=async()=>{o([]);const B=pn(Lt(we,"goods"),Wo("category","==",y),Rn("createTime","desc"),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J);let oe=[];W.docs.map(ce=>{ce.data().name.toLowerCase().includes(p.toLowerCase())&&oe.push({...ce.data(),id:ce.id})}),o(oe)},z=async()=>{const B=pn(Lt(we,"goods"),Wo("category","==",y),Rn("createTime","desc"),Ho(h),Pn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&o(ce=>[...ce,{...oe.data(),id:oe.id}])})};I.useEffect(()=>{!(p.length>0)&&!y?E():!(p.length>0)&&y?S():p.length>0&&!y?R():$()},[p,y]);const fe=()=>{!(p.length>0)&&!y?T():!(p.length>0)&&y?b():p.length>0&&!y?G():z()};return g.jsxs(oj,{children:[g.jsx(aj,{placeholder:"Назва товару",onChange:B=>{_(B.target.value)}}),g.jsxs(lj,{id:"category",name:"category",value:y,onChange:B=>{w(B.target.value)},children:[g.jsx(Jn,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},Ai()),nA.map((B,W)=>B.category?g.jsx("optgroup",{label:`${B.name}`,children:B.category&&B.category.map(J=>g.jsx(Jn,{value:`${J}`,selected:y===J&&"selected"||null,children:J},Ai()))},Ai()):g.jsx(Jn,{value:`${B.name}`,style:{fontWeight:"bolder"},selected:y===B.name&&"selected"||null,children:B.name},Ai()))]}),g.jsx(Jy,{children:s.length>0?s.map((B,W)=>g.jsx(g.Fragment,{children:g.jsxs(Zy,{onClick:()=>f(B),style:{backgroundImage:`url(${typeof B.image=="string"?B.image:B.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(J=>{if(J.name===B.name)return g.jsx(rv,{})}),m-B.createTime.seconds<259200&&g.jsx(nv,{children:"Новинка!"}),g.jsxs(ev,{children:[g.jsx(tv,{children:B.name}),g.jsxs("p",{children:[B.price," грн."]})]})]},W)})):g.jsxs(uj,{children:[g.jsx("p",{children:"Нічого не знайдено"}),g.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),g.jsx(eA,{onClick:fe,children:"Побачити більше"}),a&&g.jsx(ld,{card:u,closeModal:v})]})},hj=()=>{const[t,e]=I.useState([]),n=()=>{LS(Lt(we,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})).sort((a,l)=>a.postDate.seconds>l.postDate.seconds?-1:1))})},r=async o=>{await DS(Et(we,"orders",`${o}`))},i=async o=>{await Ni(Et(we,"orders",`${o}`),{status:"take"})},s=async o=>{await Ni(Et(we,"orders",`${o}`),{status:"send"})};return I.useEffect(()=>{n()}),g.jsx(aF,{children:t.map(o=>g.jsxs(lF,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),g.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(o.postDate.seconds)]}),g.jsxs("p",{children:["ФІП: ",o.userFullName]}),g.jsxs("p",{children:["Email: ",o.userEmail]}),g.jsxs("p",{children:["Номер телефону:",o.userNumber]}),g.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),g.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>g.jsxs(g.Fragment,{children:[g.jsx(uF,{style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`}}),g.jsxs("p",{children:["Id товару: ",a.id]}),g.jsxs("p",{children:["Назва: ",a.name]}),g.jsxs("p",{children:["Ціна: ",a.price]})]})),g.jsxs(cF,{children:[g.jsx(hF,{onClick:()=>r(o.id)}),g.jsx(dF,{onClick:()=>i(o.id)}),g.jsx(fF,{onClick:()=>s(o.id)})]})]}))})},dj=()=>{const{role:t}=ln(cn),e=Er(),r=wr().state,i=Qi(),[s,o]=I.useState(r?r.image:""),[a,l]=I.useState(r?r.name:""),[u,c]=I.useState(r?r.price:""),[h,d]=I.useState(r?r.producent:""),[p,_]=I.useState(r?r.size:""),[y,w]=I.useState(r?r.otherInfo:""),m=async f=>{try{r?(await Fy(Et(we,"goods",`${f.id}`),f),alert("Change success")):(await Z4(Lt(we,"goods"),f),alert("Add success"))}catch(v){console.error("Error adding document: ",v)}};return I.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(v){v.preventDefault();const{image:E,name:T,price:S,sex:b,producent:R,category:G,size:$,otherInfo:z}=this.elements,B={image:E.value.split(" ").filter(W=>{if(W)return W}),name:T.value,price:S.value,sex:b.value||"",producent:R.value||"",category:G.value,size:$.value||"",otherInfo:z.value||"",createTime:new Date};m(B),this.reset()})},[i]),I.useEffect(()=>{t!="admin"&&e("/")}),g.jsxs(g.Fragment,{children:[g.jsxs(ZF,{id:"form",children:[g.jsx("p",{children:"Малюнок"}),g.jsx(Rw,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:s,onChange:f=>o(f.target.value)}),g.jsx("p",{children:"Назва"}),g.jsx(ou,{required:!0,name:"name",placeholder:"Додати назву",value:a,onChange:f=>l(f.target.value)}),g.jsx("p",{children:"Ціна в гривнях"}),g.jsx(ou,{required:!0,name:"price",placeholder:"Додати ціну",value:u,onChange:f=>c(f.target.value)}),g.jsx("p",{children:"Категорія"}),g.jsxs(im,{id:"category",name:"category",children:[g.jsx(Jn,{value:"",children:"Вкажіть категорію"}),nA.map((f,v)=>f.category?g.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>g.jsx(Jn,{value:`${E}`,selected:r&&r.category===E&&"selected"||null,children:E},Ai()))},Ai()):g.jsx(Jn,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===f.name&&"selected"||null,children:f.name},Ai()))]}),g.jsx("p",{children:"Рід"}),g.jsxs(im,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[g.jsx(Jn,{value:"",children:"Без роду"}),g.jsx(Jn,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),g.jsx(Jn,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),g.jsx("p",{children:"Розмір"}),g.jsx(ou,{name:"size",placeholder:"Додати розмір",value:p,onChange:f=>_(f.target.value)}),g.jsx("p",{children:"Виробник"}),g.jsx(ou,{name:"producent",placeholder:"Додати виробника",value:h,onChange:f=>d(f.target.value)}),g.jsx("p",{children:"Додаткова інформація"}),g.jsx(Rw,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:y,onChange:f=>w(f.target.value)}),g.jsx(tA,{children:r?"Зілити зміни":"Залити новий товар"})]}),g.jsx("h3",{children:"Замовлення"}),g.jsx(hj,{})]})},fj=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState(),[o,a]=I.useState(""),l=ln(cn),u=Qi();let c=new Date().getTime()/1e3;I.useEffect(()=>{Fr.getItem("userEmail")&&Fr.getItem("userPassword")&&h()},[]);const h=async()=>{const w=await Fr.getItem("userEmail"),m=await Fr.getItem("userPassword");u(Qy({email:w,password:m})),u(Yy(w))},d=w=>{s(w),r(!0)},p=()=>{r(!1)},_=async()=>{const w=pn(Lt(we,"goods"),Rn("createTime","desc"),Pn(24)),m=await mn(w);console.log(m.docs.map(v=>console.log(v.data())));const f=m.docs[m.docs.length-1];a(f),m.docs.map(v=>{e(E=>[...E,{...v.data(),id:v.id}])})},y=async()=>{const w=pn(Lt(we,"goods"),Rn("createTime","desc"),Ho(o),Pn(24)),m=await mn(w),f=m.docs[m.docs.length-1];a(f),m.docs.map(v=>{e(E=>[...E,{...v.data(),id:v.id}])})};return I.useEffect(()=>{_()},[]),g.jsxs(g.Fragment,{children:[g.jsx(Jy,{id:"cardList",children:t.length>0&&t.map((w,m)=>g.jsx(g.Fragment,{children:g.jsxs(Zy,{onClick:()=>d(w),style:{backgroundImage:`url(${typeof w.image=="string"?w.image:w.image[0]})`},children:[l.favoriteList&&l.favoriteList.map(f=>{if(f.name===w.name)return g.jsx(rv,{})}),c-w.createTime.seconds<259200&&g.jsx(nv,{children:"Новинка!"}),g.jsxs(ev,{children:[g.jsx(tv,{children:w.name}),g.jsxs("p",{children:[w.price," грн."]})]})]},w.id)}))}),g.jsx(eA,{onClick:y,children:"Завантажити більше"}),n&&g.jsx(ld,{card:i,closeModal:p})]})},pj=k.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,mj=k.div`
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
`,gj=k.div`
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
`,yj=k.li`
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
`,vj=k.div`
  width: 50%;
`,_j=k.h3``,wj=k.p``,Ej=k.button`
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
`,Ij=k(Xy)`
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
`,xj=k.button`
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
`,Tj=()=>{const{cashList:t}=ln(cn),e=Qi(),n=Er();return g.jsxs(mj,{children:[g.jsx(pj,{children:"Список товарів"}),t.length>0?g.jsxs(g.Fragment,{children:[t.map((r,i)=>g.jsxs(yj,{children:[g.jsx(gj,{style:{backgroundImage:`url(${typeof r.image=="string"?r.image:r.image[0]})`}}),g.jsxs(vj,{children:[g.jsx(_j,{children:r.name}),g.jsxs(wj,{children:[r.price," грн."]})]}),g.jsx(Ej,{onClick:()=>e(DF(i)),children:g.jsx(Ij,{})})]})),g.jsx(xj,{onClick:()=>n("/checkout"),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},Sj=k.div`
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
`,Aj=k.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,au=k.input`
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
`,Oo=k.div`
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
`,kj=k.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,Pw=k.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Cj=()=>{const t=ln(cn),[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(""),[h,d]=I.useState(""),[p,_]=I.useState(""),[y,w]=I.useState(""),[m,f]=I.useState(!1),v=Qi(),E=Er(),T=async()=>{const z=await Vy(Et(we,"users",`${t.email}`));if(z.exists()){const{name:fe,userPostAdress:B,userNumber:W,email:J}=z.data();o(J),n(fe),i(W),l(B)}else console.log("No such document!")};I.useEffect(()=>{t.email&&T()},[t]);const S=z=>{n(z.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(z.target.value).toLowerCase())?c(""):c("Введіть повнe призвіще, ім'я, побатькові")},b=z=>{o(z.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(z.target.value).toLowerCase())?d(""):d("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},R=z=>{i(z.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(z.target.value))?_(""):_("Номер невірного формату (наприклад: '043*******')")},G=z=>{l(z.target.value),z.target.value.length>0?w(""):w("Адрес відділення пошти пустий")},$=async()=>{if(s&&e&&r&&a&&!h&&!p&&!u&&!y)try{const z=new Date,fe=z.getFullYear()+"-"+(z.getMonth()+1)+"-"+z.getDate()+" "+z.getHours()+":"+z.getMinutes()+":"+z.getSeconds();await Fy(Et(we,"orders",`${fe}`),{userFullName:e,userNumber:r,userEmail:s,userPostAdress:a,postDate:fe,id:`${s}${fe}`,status:"create",cashList:t.cashList}),v(X$()),E("/")}catch(z){console.log(z)}else f(!0)};return I.useEffect(()=>{!h&&!p&&!u&&!y&&f(!1)}),g.jsxs(Sj,{id:"CheckoutForm",children:[g.jsx(Aj,{children:"Контактні дані"}),g.jsx(au,{required:!0,name:"name",value:e,onChange:z=>{S(z)},placeholder:"Введіть ПІБ",style:u?{borderColor:"red"}:{}}),u&&g.jsx(Oo,{children:u}),g.jsx(au,{value:r,onChange:z=>{R(z)},placeholder:"Введіть контактний номер телефону",style:p?{borderColor:"red"}:{}}),p&&g.jsx(Oo,{children:p}),g.jsx(au,{required:!0,name:"email",value:s,onChange:z=>{b(z)},placeholder:"Введіть контактну електронну адресу",style:h?{borderColor:"red"}:{}}),h&&g.jsx(Oo,{children:h}),g.jsx(au,{value:a,onChange:z=>{G(z)},placeholder:"Введіть адресу відділення пошти",style:y?{borderColor:"red"}:{}}),y&&g.jsx(Oo,{children:y}),g.jsx(Oo,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Pw,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(Pw,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(kj,{onClick:$,style:m?{background:"red"}:{},children:m?"Невірно заповнена форма":"Завершити оформлення замовлення"})]})};function Rj(){return g.jsxs(AR,{children:[g.jsxs(Qn,{path:"/",element:g.jsx(JF,{}),children:[g.jsx(Qn,{index:!0,element:g.jsx(fj,{})}),g.jsx(Qn,{path:"category",element:g.jsx(sj,{})}),g.jsx(Qn,{path:"search",element:g.jsx(cj,{})}),g.jsx(Qn,{path:"admin",element:g.jsx(dj,{})}),g.jsx(Qn,{path:"cashList",element:g.jsx(Tj,{})}),g.jsx(Qn,{path:"checkout",element:g.jsx(Cj,{})})]}),g.jsx(Qn,{path:"*",element:g.jsx(xR,{to:"/"})})]})}var rA="persist/FLUSH",iv="persist/REHYDRATE",iA="persist/PAUSE",sA="persist/PERSIST",oA="persist/PURGE",sv="persist/REGISTER";function bw(t){return Nj(t)||bj(t)||Pj()}function Pj(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function bj(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function Nj(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function Nw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function sm(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nw(n,!0).forEach(function(r){Oj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Oj(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var aA={registry:[],bootstrapped:!1},Dj=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:aA,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case sv:return sm({},e,{registry:[].concat(bw(e.registry),[n.key])});case iv:var r=e.registry.indexOf(n.key),i=bw(e.registry);return i.splice(r,1),sm({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function Lj(t,e,n){var r=n||!1,i=Gy(Dj,aA,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:sv,key:u})},o=function(u,c,h){var d={type:iv,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=sm({},i,{purge:function(){var u=[];return t.dispatch({type:oA,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:rA,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:iA})},persist:function(){t.dispatch({type:sA,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const Mj=zS({[Vc.name]:Vc.reducer}),lA=N$({reducer:Mj,middleware:t=>t({serializableCheck:{ignoredActions:[rA,iv,iA,sA,oA,sv]}})});Lj(lA);wf.createRoot(document.getElementById("root")).render(g.jsx(bt.StrictMode,{children:g.jsx(bR,{basename:"Oleg_Shop",children:g.jsx(PP,{store:lA,children:g.jsx(Rj,{})})})}));
