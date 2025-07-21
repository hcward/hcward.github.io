(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Eh={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function wy(){if(s0)return Jo;s0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=t,Jo.jsx=n,Jo.jsxs=n,Jo}var o0;function Dy(){return o0||(o0=1,Eh.exports=wy()),Eh.exports}var Ft=Dy(),Th={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function Uy(){if(l0)return ye;l0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(z,q,rt){this.props=z,this.context=q,this.refs=M,this.updater=rt||y}x.prototype.isReactComponent={},x.prototype.setState=function(z,q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,q,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=x.prototype;function N(z,q,rt){this.props=z,this.context=q,this.refs=M,this.updater=rt||y}var R=N.prototype=new g;R.constructor=N,E(R,x.prototype),R.isPureReactComponent=!0;var C=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function I(z,q,rt,xt,Y,nt){return rt=nt.ref,{$$typeof:a,type:z,key:q,ref:rt!==void 0?rt:null,props:nt}}function H(z,q){return I(z.type,q,void 0,void 0,void 0,z.props)}function U(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function D(z){var q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(rt){return q[rt]})}var V=/\/+/g;function Q(z,q){return typeof z=="object"&&z!==null&&z.key!=null?D(""+z.key):q.toString(36)}function et(){}function pt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(et,et):(z.status="pending",z.then(function(q){z.status==="pending"&&(z.status="fulfilled",z.value=q)},function(q){z.status==="pending"&&(z.status="rejected",z.reason=q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ct(z,q,rt,xt,Y){var nt=typeof z;(nt==="undefined"||nt==="boolean")&&(z=null);var st=!1;if(z===null)st=!0;else switch(nt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(z.$$typeof){case a:case t:st=!0;break;case _:return st=z._init,ct(st(z._payload),q,rt,xt,Y)}}if(st)return Y=Y(z),st=xt===""?"."+Q(z,0):xt,C(Y)?(rt="",st!=null&&(rt=st.replace(V,"$&/")+"/"),ct(Y,q,rt,"",function(Jt){return Jt})):Y!=null&&(U(Y)&&(Y=H(Y,rt+(Y.key==null||z&&z.key===Y.key?"":(""+Y.key).replace(V,"$&/")+"/")+st)),q.push(Y)),1;st=0;var Et=xt===""?".":xt+":";if(C(z))for(var At=0;At<z.length;At++)xt=z[At],nt=Et+Q(xt,At),st+=ct(xt,q,rt,nt,Y);else if(At=S(z),typeof At=="function")for(z=At.call(z),At=0;!(xt=z.next()).done;)xt=xt.value,nt=Et+Q(xt,At++),st+=ct(xt,q,rt,nt,Y);else if(nt==="object"){if(typeof z.then=="function")return ct(pt(z),q,rt,xt,Y);throw q=String(z),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return st}function B(z,q,rt){if(z==null)return z;var xt=[],Y=0;return ct(z,xt,"","",function(nt){return q.call(rt,nt,Y++)}),xt}function Z(z){if(z._status===-1){var q=z._result;q=q(),q.then(function(rt){(z._status===0||z._status===-1)&&(z._status=1,z._result=rt)},function(rt){(z._status===0||z._status===-1)&&(z._status=2,z._result=rt)}),z._status===-1&&(z._status=0,z._result=q)}if(z._status===1)return z._result.default;throw z._result}var X=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function vt(){}return ye.Children={map:B,forEach:function(z,q,rt){B(z,function(){q.apply(this,arguments)},rt)},count:function(z){var q=0;return B(z,function(){q++}),q},toArray:function(z){return B(z,function(q){return q})||[]},only:function(z){if(!U(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ye.Component=x,ye.Fragment=n,ye.Profiler=l,ye.PureComponent=N,ye.StrictMode=r,ye.Suspense=p,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ye.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},ye.cache=function(z){return function(){return z.apply(null,arguments)}},ye.cloneElement=function(z,q,rt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var xt=E({},z.props),Y=z.key,nt=void 0;if(q!=null)for(st in q.ref!==void 0&&(nt=void 0),q.key!==void 0&&(Y=""+q.key),q)!O.call(q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&q.ref===void 0||(xt[st]=q[st]);var st=arguments.length-2;if(st===1)xt.children=rt;else if(1<st){for(var Et=Array(st),At=0;At<st;At++)Et[At]=arguments[At+2];xt.children=Et}return I(z.type,Y,void 0,void 0,nt,xt)},ye.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ye.createElement=function(z,q,rt){var xt,Y={},nt=null;if(q!=null)for(xt in q.key!==void 0&&(nt=""+q.key),q)O.call(q,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Y[xt]=q[xt]);var st=arguments.length-2;if(st===1)Y.children=rt;else if(1<st){for(var Et=Array(st),At=0;At<st;At++)Et[At]=arguments[At+2];Y.children=Et}if(z&&z.defaultProps)for(xt in st=z.defaultProps,st)Y[xt]===void 0&&(Y[xt]=st[xt]);return I(z,nt,void 0,void 0,null,Y)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(z){return{$$typeof:h,render:z}},ye.isValidElement=U,ye.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:Z}},ye.memo=function(z,q){return{$$typeof:d,type:z,compare:q===void 0?null:q}},ye.startTransition=function(z){var q=P.T,rt={};P.T=rt;try{var xt=z(),Y=P.S;Y!==null&&Y(rt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(vt,X)}catch(nt){X(nt)}finally{P.T=q}},ye.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ye.use=function(z){return P.H.use(z)},ye.useActionState=function(z,q,rt){return P.H.useActionState(z,q,rt)},ye.useCallback=function(z,q){return P.H.useCallback(z,q)},ye.useContext=function(z){return P.H.useContext(z)},ye.useDebugValue=function(){},ye.useDeferredValue=function(z,q){return P.H.useDeferredValue(z,q)},ye.useEffect=function(z,q,rt){var xt=P.H;if(typeof rt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(z,q)},ye.useId=function(){return P.H.useId()},ye.useImperativeHandle=function(z,q,rt){return P.H.useImperativeHandle(z,q,rt)},ye.useInsertionEffect=function(z,q){return P.H.useInsertionEffect(z,q)},ye.useLayoutEffect=function(z,q){return P.H.useLayoutEffect(z,q)},ye.useMemo=function(z,q){return P.H.useMemo(z,q)},ye.useOptimistic=function(z,q){return P.H.useOptimistic(z,q)},ye.useReducer=function(z,q,rt){return P.H.useReducer(z,q,rt)},ye.useRef=function(z){return P.H.useRef(z)},ye.useState=function(z){return P.H.useState(z)},ye.useSyncExternalStore=function(z,q,rt){return P.H.useSyncExternalStore(z,q,rt)},ye.useTransition=function(){return P.H.useTransition()},ye.version="19.1.0",ye}var c0;function lp(){return c0||(c0=1,Th.exports=Uy()),Th.exports}var mt=lp(),bh={exports:{}},$o={},Ah={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function Ly(){return u0||(u0=1,function(a){function t(B,Z){var X=B.length;B.push(Z);t:for(;0<X;){var vt=X-1>>>1,z=B[vt];if(0<l(z,Z))B[vt]=Z,B[X]=z,X=vt;else break t}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],X=B.pop();if(X!==Z){B[0]=X;t:for(var vt=0,z=B.length,q=z>>>1;vt<q;){var rt=2*(vt+1)-1,xt=B[rt],Y=rt+1,nt=B[Y];if(0>l(xt,X))Y<z&&0>l(nt,xt)?(B[vt]=nt,B[Y]=X,vt=Y):(B[vt]=xt,B[rt]=X,vt=rt);else if(Y<z&&0>l(nt,X))B[vt]=nt,B[Y]=X,vt=Y;else break t}}return Z}function l(B,Z){var X=B.sortIndex-Z.sortIndex;return X!==0?X:B.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],d=[],_=1,v=null,S=3,y=!1,E=!1,M=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Z=n(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=B)r(d),Z.sortIndex=Z.expirationTime,t(p,Z);else break;Z=n(d)}}function P(B){if(M=!1,C(B),!E)if(n(p)!==null)E=!0,O||(O=!0,Q());else{var Z=n(d);Z!==null&&ct(P,Z.startTime-B)}}var O=!1,I=-1,H=5,U=-1;function D(){return x?!0:!(a.unstable_now()-U<H)}function V(){if(x=!1,O){var B=a.unstable_now();U=B;var Z=!0;try{t:{E=!1,M&&(M=!1,N(I),I=-1),y=!0;var X=S;try{e:{for(C(B),v=n(p);v!==null&&!(v.expirationTime>B&&D());){var vt=v.callback;if(typeof vt=="function"){v.callback=null,S=v.priorityLevel;var z=vt(v.expirationTime<=B);if(B=a.unstable_now(),typeof z=="function"){v.callback=z,C(B),Z=!0;break e}v===n(p)&&r(p),C(B)}else r(p);v=n(p)}if(v!==null)Z=!0;else{var q=n(d);q!==null&&ct(P,q.startTime-B),Z=!1}}break t}finally{v=null,S=X,y=!1}Z=void 0}}finally{Z?Q():O=!1}}}var Q;if(typeof R=="function")Q=function(){R(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,pt=et.port2;et.port1.onmessage=V,Q=function(){pt.postMessage(null)}}else Q=function(){g(V,0)};function ct(B,Z){I=g(function(){B(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var X=S;S=Z;try{return B()}finally{S=X}},a.unstable_requestPaint=function(){x=!0},a.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=S;S=B;try{return Z()}finally{S=X}},a.unstable_scheduleCallback=function(B,Z,X){var vt=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?vt+X:vt):X=vt,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=X+z,B={id:_++,callback:Z,priorityLevel:B,startTime:X,expirationTime:z,sortIndex:-1},X>vt?(B.sortIndex=X,t(d,B),n(p)===null&&B===n(d)&&(M?(N(I),I=-1):M=!0,ct(P,X-vt))):(B.sortIndex=z,t(p,B),E||y||(E=!0,O||(O=!0,Q()))),B},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(B){var Z=S;return function(){var X=S;S=Z;try{return B.apply(this,arguments)}finally{S=X}}}}(Rh)),Rh}var f0;function Ny(){return f0||(f0=1,Ah.exports=Ly()),Ah.exports}var Ch={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function Oy(){if(h0)return kn;h0=1;var a=lp();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,_)},kn.flushSync=function(p){var d=f.T,_=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=d,r.p=_,r.d.f()}},kn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},kn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},kn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=h(_,d.crossOrigin),S=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},kn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},kn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=h(_,d.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},kn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},kn.requestFormReset=function(p){r.d.r(p)},kn.unstable_batchedUpdates=function(p,d){return p(d)},kn.useFormState=function(p,d,_){return f.H.useFormState(p,d,_)},kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},kn.version="19.1.0",kn}var d0;function Py(){if(d0)return Ch.exports;d0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Ch.exports=Oy(),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function zy(){if(p0)return $o;p0=1;var a=Ny(),t=lp(),n=Py();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var m=u.alternate;if(m===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===s)return h(u),e;if(m===o)return h(u),i;m=m.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=m;else{for(var T=!1,w=u.child;w;){if(w===s){T=!0,s=u,o=m;break}if(w===o){T=!0,o=u,s=m;break}w=w.sibling}if(!T){for(w=m.child;w;){if(w===s){T=!0,s=m,o=u;break}if(w===o){T=!0,o=m,s=u;break}w=w.sibling}if(!T)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),R=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case R:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:pt(e.type)||"Memo";case H:i=e._payload,e=e._init;try{return pt(e(i))}catch{}}return null}var ct=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},vt=[],z=-1;function q(e){return{current:e}}function rt(e){0>z||(e.current=vt[z],vt[z]=null,z--)}function xt(e,i){z++,vt[z]=e.current,e.current=i}var Y=q(null),nt=q(null),st=q(null),Et=q(null);function At(e,i){switch(xt(st,i),xt(nt,e),xt(Y,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?O_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=O_(i),e=P_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(Y),xt(Y,e)}function Jt(){rt(Y),rt(nt),rt(st)}function zt(e){e.memoizedState!==null&&xt(Et,e);var i=Y.current,s=P_(i,e.type);i!==s&&(xt(nt,e),xt(Y,s))}function $t(e){nt.current===e&&(rt(Y),rt(nt)),Et.current===e&&(rt(Et),Yo._currentValue=X)}var ee=Object.prototype.hasOwnProperty,ie=a.unstable_scheduleCallback,G=a.unstable_cancelCallback,he=a.unstable_shouldYield,re=a.unstable_requestPaint,Yt=a.unstable_now,Ut=a.unstable_getCurrentPriorityLevel,Qt=a.unstable_ImmediatePriority,Lt=a.unstable_UserBlockingPriority,Gt=a.unstable_NormalPriority,fe=a.unstable_LowPriority,F=a.unstable_IdlePriority,A=a.log,K=a.unstable_setDisableYieldValue,gt=null,_t=null;function lt(e){if(typeof A=="function"&&K(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(gt,e)}catch{}}var It=Math.clz32?Math.clz32:b,Ot=Math.log,Vt=Math.LN2;function b(e){return e>>>=0,e===0?32:31-(Ot(e)/Vt|0)|0}var St=256,Pt=4194304;function jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~m,o!==0?u=jt(o):(T&=w,T!==0?u=jt(T):s||(s=w&~e,s!==0&&(u=jt(s))))):(w=o&~m,w!==0?u=jt(w):T!==0?u=jt(T):s||(s=o&~e,s!==0&&(u=jt(s)))),u===0?0:i!==0&&i!==u&&(i&m)===0&&(m=u&-u,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:u}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function te(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Bt(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Tt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function kt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wt(e,i,s,o,u,m){var T=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,k=e.expirationTimes,ot=e.hiddenUpdates;for(s=T&~s;0<s;){var Mt=31-It(s),Rt=1<<Mt;w[Mt]=0,k[Mt]=-1;var ut=ot[Mt];if(ut!==null)for(ot[Mt]=null,Mt=0;Mt<ut.length;Mt++){var ht=ut[Mt];ht!==null&&(ht.lane&=-536870913)}s&=~Rt}o!==0&&yt(e,o,0),m!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~i))}function yt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-It(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Xt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-It(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _e(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pe(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:t0(e.type))}function an(e,i){var s=Z.p;try{return Z.p=e,i()}finally{Z.p=s}}var Ge=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Ge,Ve="__reactProps$"+Ge,Ze="__reactContainer$"+Ge,Yn="__reactEvents$"+Ge,Ue="__reactListeners$"+Ge,Ni="__reactHandles$"+Ge,oi="__reactResources$"+Ge,$n="__reactMarker$"+Ge;function Ln(e){delete e[Nt],delete e[Ve],delete e[Yn],delete e[Ue],delete e[Ni]}function mn(e){var i=e[Nt];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ze]||s[Nt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=F_(e);e!==null;){if(s=e[Nt])return s;e=F_(e)}return i}e=s,s=e.parentNode}return null}function Xe(e){if(e=e[Nt]||e[Ze]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function yn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function jn(e){var i=e[oi];return i||(i=e[oi]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function en(e){e[$n]=!0}var gn=new Set,_n={};function Ie(e,i){L(e,i),L(e+"Capture",i)}function L(e,i){for(_n[e]=i,e=0;e<i.length;e++)gn.add(i[e])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ft={},dt={};function tt(e){return ee.call(dt,e)?!0:ee.call(ft,e)?!1:J.test(e)?dt[e]=!0:(ft[e]=!0,!1)}function Dt(e,i,s){if(tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ht(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Wt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var Kt,le;function oe(e){if(Kt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Kt=i&&i[1]||"",le=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+le}var ae=!1;function xe(e,i){if(!e||ae)return"";ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(ht){var ut=ht}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(ht){ut=ht}e.call(Rt.prototype)}}else{try{throw Error()}catch(ht){ut=ht}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(ht){if(ht&&ut&&typeof ht.stack=="string")return[ht.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),T=m[0],w=m[1];if(T&&w){var k=T.split(`
`),ot=w.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ot.length)for(o=k.length-1,u=ot.length-1;1<=o&&0<=u&&k[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ot[u]){var Mt=`
`+k[o].replace(" at new "," at ");return e.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",e.displayName)),Mt}while(1<=o&&0<=u);break}}}finally{ae=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?oe(s):""}function Le(e){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return oe("Activity");default:return""}}function We(e){try{var i="";do i+=Le(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ce(e){var i=Ne(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(T){o=""+T,m.call(this,T)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(T){o=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Oe(e){e._valueTracker||(e._valueTracker=ce(e))}function Ee(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xi=/[\n"\\]/g;function ke(e){return e.replace(xi,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Oi(e,i,s,o,u,m,T,w){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ve(i)):e.value!==""+ve(i)&&(e.value=""+ve(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?Nn(e,T,ve(i)):s!=null?Nn(e,T,ve(s)):o!=null&&e.removeAttribute("value"),u==null&&m!=null&&(e.defaultChecked=!!m),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ve(w):e.removeAttribute("name")}function qe(e,i,s,o,u,m,T,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ve(s):"",i=i!=null?""+ve(i):s,w||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function Nn(e,i,s){i==="number"&&sn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function vn(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+ve(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Mn(e,i,s){if(i!=null&&(i=""+ve(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ve(s):""}function An(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=ve(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function Si(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ml(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Pi.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Pp(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&Ml(e,u,o)}else for(var m in i)i.hasOwnProperty(m)&&Ml(e,m,i[m])}function yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return Cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zr=null,Kr=null;function zp(e){var i=Xe(e);if(i&&(e=i.stateNode)){var s=e[Ve]||null;t:switch(e=i.stateNode,i.type){case"input":if(Oi(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ke(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[Ve]||null;if(!u)throw Error(r(90));Oi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Ee(o)}break t;case"textarea":Mn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&vn(e,!!s.multiple,i,!1)}}}var Tu=!1;function Ip(e,i,s){if(Tu)return e(i,s);Tu=!0;try{var o=e(i);return o}finally{if(Tu=!1,(Zr!==null||Kr!==null)&&(lc(),Zr&&(i=Zr,e=Kr,Kr=Zr=null,zp(i),e)))for(i=0;i<e.length;i++)zp(e[i])}}function ro(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Ve]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(sa)try{var so={};Object.defineProperty(so,"passive",{get:function(){bu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{bu=!1}var Na=null,Au=null,Tl=null;function Bp(){if(Tl)return Tl;var e,i=Au,s=i.length,o,u="value"in Na?Na.value:Na.textContent,m=u.length;for(e=0;e<s&&i[e]===u[e];e++);var T=s-e;for(o=1;o<=T&&i[s-o]===u[m-o];o++);return Tl=u.slice(e,1<o?1-o:void 0)}function bl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Al(){return!0}function Fp(){return!1}function ti(e){function i(s,o,u,m,T){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Al:Fp,this.isPropagationStopped=Fp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),i}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=ti(pr),oo=_({},pr,{view:0,detail:0}),wx=ti(oo),Ru,Cu,lo,Cl=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Ru=e.screenX-lo.screenX,Cu=e.screenY-lo.screenY):Cu=Ru=0,lo=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Hp=ti(Cl),Dx=_({},Cl,{dataTransfer:0}),Ux=ti(Dx),Lx=_({},oo,{relatedTarget:0}),wu=ti(Lx),Nx=_({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=ti(Nx),Px=_({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zx=ti(Px),Ix=_({},pr,{data:0}),Gp=ti(Ix),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Hx[e])?!!i[e]:!1}function Du(){return Gx}var Vx=_({},oo,{key:function(e){if(e.key){var i=Bx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kx=ti(Vx),Xx=_({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=ti(Xx),Wx=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),qx=ti(Wx),Yx=_({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=ti(Yx),Zx=_({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=ti(Zx),Qx=_({},pr,{newState:0,oldState:0}),Jx=ti(Qx),$x=[9,13,27,32],Uu=sa&&"CompositionEvent"in window,co=null;sa&&"documentMode"in document&&(co=document.documentMode);var tS=sa&&"TextEvent"in window&&!co,kp=sa&&(!Uu||co&&8<co&&11>=co),Xp=" ",Wp=!1;function qp(e,i){switch(e){case"keyup":return $x.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function eS(e,i){switch(e){case"compositionend":return Yp(i);case"keypress":return i.which!==32?null:(Wp=!0,Xp);case"textInput":return e=i.data,e===Xp&&Wp?null:e;default:return null}}function nS(e,i){if(Qr)return e==="compositionend"||!Uu&&qp(e,i)?(e=Bp(),Tl=Au=Na=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kp&&i.locale!=="ko"?null:i.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!iS[e.type]:i==="textarea"}function Zp(e,i,s,o){Zr?Kr?Kr.push(o):Kr=[o]:Zr=o,i=pc(i,"onChange"),0<i.length&&(s=new Rl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var uo=null,fo=null;function aS(e){w_(e,0)}function wl(e){var i=yn(e);if(Ee(i))return e}function Kp(e,i){if(e==="change")return i}var Qp=!1;if(sa){var Lu;if(sa){var Nu="oninput"in document;if(!Nu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Nu=typeof Jp.oninput=="function"}Lu=Nu}else Lu=!1;Qp=Lu&&(!document.documentMode||9<document.documentMode)}function $p(){uo&&(uo.detachEvent("onpropertychange",tm),fo=uo=null)}function tm(e){if(e.propertyName==="value"&&wl(fo)){var i=[];Zp(i,fo,e,Eu(e)),Ip(aS,i)}}function rS(e,i,s){e==="focusin"?($p(),uo=i,fo=s,uo.attachEvent("onpropertychange",tm)):e==="focusout"&&$p()}function sS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(fo)}function oS(e,i){if(e==="click")return wl(i)}function lS(e,i){if(e==="input"||e==="change")return wl(i)}function cS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var li=typeof Object.is=="function"?Object.is:cS;function ho(e,i){if(li(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!ee.call(i,u)||!li(e[u],i[u]))return!1}return!0}function em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nm(e,i){var s=em(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=em(s)}}function im(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?im(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=sn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=sn(e.document)}return i}function Ou(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var uS=sa&&"documentMode"in document&&11>=document.documentMode,Jr=null,Pu=null,po=null,zu=!1;function rm(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;zu||Jr==null||Jr!==sn(o)||(o=Jr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=pc(Pu,"onSelect"),0<o.length&&(i=new Rl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Jr)))}function mr(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var $r={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Iu={},sm={};sa&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function gr(e){if(Iu[e])return Iu[e];if(!$r[e])return e;var i=$r[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in sm)return Iu[e]=i[s];return e}var om=gr("animationend"),lm=gr("animationiteration"),cm=gr("animationstart"),fS=gr("transitionrun"),hS=gr("transitionstart"),dS=gr("transitioncancel"),um=gr("transitionend"),fm=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function zi(e,i){fm.set(e,i),Ie(i,[e])}var hm=new WeakMap;function yi(e,i){if(typeof e=="object"&&e!==null){var s=hm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:We(i)},hm.set(e,i),i)}return{value:e,source:i,stack:We(i)}}var Mi=[],ts=0,Fu=0;function Dl(){for(var e=ts,i=Fu=ts=0;i<e;){var s=Mi[i];Mi[i++]=null;var o=Mi[i];Mi[i++]=null;var u=Mi[i];Mi[i++]=null;var m=Mi[i];if(Mi[i++]=null,o!==null&&u!==null){var T=o.pending;T===null?u.next=u:(u.next=T.next,T.next=u),o.pending=u}m!==0&&dm(s,u,m)}}function Ul(e,i,s,o){Mi[ts++]=e,Mi[ts++]=i,Mi[ts++]=s,Mi[ts++]=o,Fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Hu(e,i,s,o){return Ul(e,i,s,o),Ll(e)}function es(e,i){return Ul(e,null,null,i),Ll(e)}function dm(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,m=e.return;m!==null;)m.childLanes|=s,o=m.alternate,o!==null&&(o.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(u=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,u&&i!==null&&(u=31-It(s),e=m.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),m):null}function Ll(e){if(50<Fo)throw Fo=0,Yf=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ns={};function pS(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,s,o){return new pS(e,i,s,o)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,i){var s=e.alternate;return s===null?(s=ci(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function pm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nl(e,i,s,o,u,m){var T=0;if(o=e,typeof e=="function")Gu(e)&&(T=1);else if(typeof e=="string")T=gy(e,s,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ci(31,s,i,u),e.elementType=U,e.lanes=m,e;case E:return _r(s.children,u,m,i);case M:T=8,u|=24;break;case x:return e=ci(12,s,i,u|2),e.elementType=x,e.lanes=m,e;case P:return e=ci(13,s,i,u),e.elementType=P,e.lanes=m,e;case O:return e=ci(19,s,i,u),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case R:T=10;break t;case N:T=9;break t;case C:T=11;break t;case I:T=14;break t;case H:T=16,o=null;break t}T=29,s=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=ci(T,s,i,u),i.elementType=e,i.type=o,i.lanes=m,i}function _r(e,i,s,o){return e=ci(7,e,o,i),e.lanes=s,e}function Vu(e,i,s){return e=ci(6,e,null,i),e.lanes=s,e}function ku(e,i,s){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var is=[],as=0,Ol=null,Pl=0,Ei=[],Ti=0,vr=null,la=1,ca="";function xr(e,i){is[as++]=Pl,is[as++]=Ol,Ol=e,Pl=i}function mm(e,i,s){Ei[Ti++]=la,Ei[Ti++]=ca,Ei[Ti++]=vr,vr=e;var o=la;e=ca;var u=32-It(o)-1;o&=~(1<<u),s+=1;var m=32-It(i)+u;if(30<m){var T=u-u%5;m=(o&(1<<T)-1).toString(32),o>>=T,u-=T,la=1<<32-It(i)+u|s<<u|o,ca=m+e}else la=1<<m|s<<u|o,ca=e}function Xu(e){e.return!==null&&(xr(e,1),mm(e,1,0))}function Wu(e){for(;e===Ol;)Ol=is[--as],is[as]=null,Pl=is[--as],is[as]=null;for(;e===vr;)vr=Ei[--Ti],Ei[Ti]=null,ca=Ei[--Ti],Ei[Ti]=null,la=Ei[--Ti],Ei[Ti]=null}var Zn=null,hn=null,He=!1,Sr=null,ji=!1,qu=Error(r(519));function yr(e){var i=Error(r(418,""));throw _o(yi(i,e)),qu}function gm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[Nt]=e,i[Ve]=o,s){case"dialog":we("cancel",i),we("close",i);break;case"iframe":case"object":case"embed":we("load",i);break;case"video":case"audio":for(s=0;s<Go.length;s++)we(Go[s],i);break;case"source":we("error",i);break;case"img":case"image":case"link":we("error",i),we("load",i);break;case"details":we("toggle",i);break;case"input":we("invalid",i),qe(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Oe(i);break;case"select":we("invalid",i);break;case"textarea":we("invalid",i),An(i,o.value,o.defaultValue,o.children),Oe(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||N_(i.textContent,s)?(o.popover!=null&&(we("beforetoggle",i),we("toggle",i)),o.onScroll!=null&&we("scroll",i),o.onScrollEnd!=null&&we("scrollend",i),o.onClick!=null&&(i.onclick=mc),i=!0):i=!1,i||yr(e)}function _m(e){for(Zn=e.return;Zn;)switch(Zn.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Zn=Zn.return}}function mo(e){if(e!==Zn)return!1;if(!He)return _m(e),He=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ch(e.type,e.memoizedProps)),s=!s),s&&hn&&yr(e),_m(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){hn=Bi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}hn=null}}else i===27?(i=hn,Za(e.type)?(e=dh,dh=null,hn=e):hn=i):hn=Zn?Bi(e.stateNode.nextSibling):null;return!0}function go(){hn=Zn=null,He=!1}function vm(){var e=Sr;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Sr=null),e}function _o(e){Sr===null?Sr=[e]:Sr.push(e)}var Yu=q(null),Mr=null,ua=null;function Oa(e,i,s){xt(Yu,i._currentValue),i._currentValue=s}function fa(e){e._currentValue=Yu.current,rt(Yu)}function ju(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Zu(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var m=u.dependencies;if(m!==null){var T=u.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=u;for(var k=0;k<i.length;k++)if(w.context===i[k]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),ju(m.return,s,e),o||(T=null);break t}m=w.next}}else if(u.tag===18){if(T=u.return,T===null)throw Error(r(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),ju(T,s,e),T=null}else T=u.child;if(T!==null)T.return=u;else for(T=u;T!==null;){if(T===e){T=null;break}if(u=T.sibling,u!==null){u.return=T.return,T=u;break}T=T.return}u=T}}function vo(e,i,s,o){e=null;for(var u=i,m=!1;u!==null;){if(!m){if((u.flags&524288)!==0)m=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var T=u.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var w=u.type;li(u.pendingProps.value,T.value)||(e!==null?e.push(w):e=[w])}}else if(u===Et.current){if(T=u.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Yo):e=[Yo])}u=u.return}e!==null&&Zu(i,e,s,o),i.flags|=262144}function zl(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){Mr=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vn(e){return xm(Mr,e)}function Il(e,i){return Mr===null&&Er(e),xm(e,i)}function xm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ua===null){if(e===null)throw Error(r(308));ua=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ua=ua.next=i;return s}var mS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},gS=a.unstable_scheduleCallback,_S=a.unstable_NormalPriority,Rn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new mS,data:new Map,refCount:0}}function xo(e){e.refCount--,e.refCount===0&&gS(_S,function(){e.controller.abort()})}var So=null,Qu=0,rs=0,ss=null;function vS(e,i){if(So===null){var s=So=[];Qu=0,rs=th(),ss={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Qu++,i.then(Sm,Sm),i}function Sm(){if(--Qu===0&&So!==null){ss!==null&&(ss.status="fulfilled");var e=So;So=null,rs=0,ss=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function xS(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var ym=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&vS(e,i),ym!==null&&ym(e,i)};var Tr=q(null);function Ju(){var e=Tr.current;return e!==null?e:rn.pooledCache}function Bl(e,i){i===null?xt(Tr,Tr.current):xt(Tr,i.pool)}function Mm(){var e=Ju();return e===null?null:{parent:Rn._currentValue,pool:e}}var yo=Error(r(460)),Em=Error(r(474)),Fl=Error(r(542)),$u={then:function(){}};function Tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hl(){}function bm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Hl,Hl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Rm(e),e;default:if(typeof i.status=="string")i.then(Hl,Hl);else{if(e=rn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Rm(e),e}throw Mo=i,yo}}var Mo=null;function Am(){if(Mo===null)throw Error(r(459));var e=Mo;return Mo=null,e}function Rm(e){if(e===yo||e===Fl)throw Error(r(483))}var Pa=!1;function tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Ll(e),dm(e,null,s),i}return Ul(e,o,i,s),Ll(e)}function Eo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Xt(e,s)}}function nf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?u=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?u=m=i:m=m.next=i}else u=m=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var af=!1;function To(){if(af){var e=ss;if(e!==null)throw e}}function bo(e,i,s,o){af=!1;var u=e.updateQueue;Pa=!1;var m=u.firstBaseUpdate,T=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,ot=k.next;k.next=null,T===null?m=ot:T.next=ot,T=k;var Mt=e.alternate;Mt!==null&&(Mt=Mt.updateQueue,w=Mt.lastBaseUpdate,w!==T&&(w===null?Mt.firstBaseUpdate=ot:w.next=ot,Mt.lastBaseUpdate=k))}if(m!==null){var Rt=u.baseState;T=0,Mt=ot=k=null,w=m;do{var ut=w.lane&-536870913,ht=ut!==w.lane;if(ht?(Pe&ut)===ut:(o&ut)===ut){ut!==0&&ut===rs&&(af=!0),Mt!==null&&(Mt=Mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ge=e,de=w;ut=i;var Je=s;switch(de.tag){case 1:if(ge=de.payload,typeof ge=="function"){Rt=ge.call(Je,Rt,ut);break t}Rt=ge;break t;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=de.payload,ut=typeof ge=="function"?ge.call(Je,Rt,ut):ge,ut==null)break t;Rt=_({},Rt,ut);break t;case 2:Pa=!0}}ut=w.callback,ut!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ut]:ht.push(ut))}else ht={lane:ut,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Mt===null?(ot=Mt=ht,k=Rt):Mt=Mt.next=ht,T|=ut;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ht=w,w=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);Mt===null&&(k=Rt),u.baseState=k,u.firstBaseUpdate=ot,u.lastBaseUpdate=Mt,m===null&&(u.shared.lanes=0),Wa|=T,e.lanes=T,e.memoizedState=Rt}}function Cm(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function wm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Cm(s[e],i)}var os=q(null),Gl=q(0);function Dm(e,i){e=va,xt(Gl,e),xt(os,i),va=e|i.baseLanes}function rf(){xt(Gl,va),xt(os,os.current)}function sf(){va=Gl.current,rt(os),rt(Gl)}var Ba=0,Ae=null,Ke=null,En=null,Vl=!1,ls=!1,br=!1,kl=0,Ao=0,cs=null,SS=0;function xn(){throw Error(r(321))}function of(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!li(e[s],i[s]))return!1;return!0}function lf(e,i,s,o,u,m){return Ba=m,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?dg:pg,br=!1,m=s(o,u),br=!1,ls&&(m=Lm(i,s,o,u)),Um(e),m}function Um(e){B.H=Zl;var i=Ke!==null&&Ke.next!==null;if(Ba=0,En=Ke=Ae=null,Vl=!1,Ao=0,cs=null,i)throw Error(r(300));e===null||On||(e=e.dependencies,e!==null&&zl(e)&&(On=!0))}function Lm(e,i,s,o){Ae=e;var u=0;do{if(ls&&(cs=null),Ao=0,ls=!1,25<=u)throw Error(r(301));if(u+=1,En=Ke=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=RS,m=i(s,o)}while(ls);return m}function yS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Ro(i):i,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(Ae.flags|=1024),i}function cf(){var e=kl!==0;return kl=0,e}function uf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function ff(e){if(Vl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Vl=!1}Ba=0,En=Ke=Ae=null,ls=!1,Ao=kl=0,cs=null}function ei(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?Ae.memoizedState=En=e:En=En.next=e,En}function Tn(){if(Ke===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var i=En===null?Ae.memoizedState:En.next;if(i!==null)En=i,Ke=e;else{if(e===null)throw Ae.alternate===null?Error(r(467)):Error(r(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},En===null?Ae.memoizedState=En=e:En=En.next=e}return En}function hf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var i=Ao;return Ao+=1,cs===null&&(cs=[]),e=bm(cs,e,i),i=Ae,(En===null?i.memoizedState:En.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?dg:pg),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===R)return Vn(e)}throw Error(r(438,String(e)))}function df(e){var i=null,s=Ae.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=Ae.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=hf(),Ae.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=D;return i.index++,s}function ha(e,i){return typeof i=="function"?i(e):i}function Wl(e){var i=Tn();return pf(i,Ke,e)}function pf(e,i,s){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=e.baseQueue,m=o.pending;if(m!==null){if(u!==null){var T=u.next;u.next=m.next,m.next=T}i.baseQueue=u=m,o.pending=null}if(m=e.baseState,u===null)e.memoizedState=m;else{i=u.next;var w=T=null,k=null,ot=i,Mt=!1;do{var Rt=ot.lane&-536870913;if(Rt!==ot.lane?(Pe&Rt)===Rt:(Ba&Rt)===Rt){var ut=ot.revertLane;if(ut===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Rt===rs&&(Mt=!0);else if((Ba&ut)===ut){ot=ot.next,ut===rs&&(Mt=!0);continue}else Rt={lane:0,revertLane:ot.revertLane,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(w=k=Rt,T=m):k=k.next=Rt,Ae.lanes|=ut,Wa|=ut;Rt=ot.action,br&&s(m,Rt),m=ot.hasEagerState?ot.eagerState:s(m,Rt)}else ut={lane:Rt,revertLane:ot.revertLane,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(w=k=ut,T=m):k=k.next=ut,Ae.lanes|=Rt,Wa|=Rt;ot=ot.next}while(ot!==null&&ot!==i);if(k===null?T=m:k.next=w,!li(m,e.memoizedState)&&(On=!0,Mt&&(s=ss,s!==null)))throw s;e.memoizedState=m,e.baseState=T,e.baseQueue=k,o.lastRenderedState=m}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function mf(e){var i=Tn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,m=i.memoizedState;if(u!==null){s.pending=null;var T=u=u.next;do m=e(m,T.action),T=T.next;while(T!==u);li(m,i.memoizedState)||(On=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,o]}function Nm(e,i,s){var o=Ae,u=Tn(),m=He;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var T=!li((Ke||u).memoizedState,s);T&&(u.memoizedState=s,On=!0),u=u.queue;var w=zm.bind(null,o,u,e);if(Co(2048,8,w,[e]),u.getSnapshot!==i||T||En!==null&&En.memoizedState.tag&1){if(o.flags|=2048,us(9,ql(),Pm.bind(null,o,u,s,i),null),rn===null)throw Error(r(349));m||(Ba&124)!==0||Om(o,i,s)}return s}function Om(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Ae.updateQueue,i===null?(i=hf(),Ae.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Pm(e,i,s,o){i.value=s,i.getSnapshot=o,Im(i)&&Bm(e)}function zm(e,i,s){return s(function(){Im(i)&&Bm(e)})}function Im(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!li(e,s)}catch{return!0}}function Bm(e){var i=es(e,2);i!==null&&pi(i,e,2)}function gf(e){var i=ei();if(typeof e=="function"){var s=e;if(e=s(),br){lt(!0);try{s()}finally{lt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},i}function Fm(e,i,s,o){return e.baseState=s,pf(e,Ke,typeof o=="function"?o:ha)}function MS(e,i,s,o,u){if(jl(e))throw Error(r(485));if(e=i.action,e!==null){var m={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};B.T!==null?s(!0):m.isTransition=!1,o(m),s=i.pending,s===null?(m.next=i.pending=m,Hm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Hm(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var m=B.T,T={};B.T=T;try{var w=s(u,o),k=B.S;k!==null&&k(T,w),Gm(e,i,w)}catch(ot){_f(e,i,ot)}finally{B.T=m}}else try{m=s(u,o),Gm(e,i,m)}catch(ot){_f(e,i,ot)}}function Gm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Vm(e,i,o)},function(o){return _f(e,i,o)}):Vm(e,i,s)}function Vm(e,i,s){i.status="fulfilled",i.value=s,km(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Hm(e,s)))}function _f(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,km(i),i=i.next;while(i!==o)}e.action=null}function km(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Xm(e,i){return i}function Wm(e,i){if(He){var s=rn.formState;if(s!==null){t:{var o=Ae;if(He){if(hn){e:{for(var u=hn,m=ji;u.nodeType!==8;){if(!m){u=null;break e}if(u=Bi(u.nextSibling),u===null){u=null;break e}}m=u.data,u=m==="F!"||m==="F"?u:null}if(u){hn=Bi(u.nextSibling),o=u.data==="F!";break t}}yr(o)}o=!1}o&&(i=s[0])}}return s=ei(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:i},s.queue=o,s=ug.bind(null,Ae,o),o.dispatch=s,o=gf(!1),m=Mf.bind(null,Ae,!1,o.queue),o=ei(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=MS.bind(null,Ae,u,m,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function qm(e){var i=Tn();return Ym(i,Ke,e)}function Ym(e,i,s){if(i=pf(e,i,Xm)[0],e=Wl(ha)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Ro(i)}catch(T){throw T===yo?Fl:T}else o=i;i=Tn();var u=i.queue,m=u.dispatch;return s!==i.memoizedState&&(Ae.flags|=2048,us(9,ql(),ES.bind(null,u,s),null)),[o,m,e]}function ES(e,i){e.action=i}function jm(e){var i=Tn(),s=Ke;if(s!==null)return Ym(i,s,e);Tn(),i=i.memoizedState,s=Tn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function us(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=Ae.updateQueue,i===null&&(i=hf(),Ae.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function ql(){return{destroy:void 0,resource:void 0}}function Zm(){return Tn().memoizedState}function Yl(e,i,s,o){var u=ei();o=o===void 0?null:o,Ae.flags|=e,u.memoizedState=us(1|i,ql(),s,o)}function Co(e,i,s,o){var u=Tn();o=o===void 0?null:o;var m=u.memoizedState.inst;Ke!==null&&o!==null&&of(o,Ke.memoizedState.deps)?u.memoizedState=us(i,m,s,o):(Ae.flags|=e,u.memoizedState=us(1|i,m,s,o))}function Km(e,i){Yl(8390656,8,e,i)}function Qm(e,i){Co(2048,8,e,i)}function Jm(e,i){return Co(4,2,e,i)}function $m(e,i){return Co(4,4,e,i)}function tg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function eg(e,i,s){s=s!=null?s.concat([e]):null,Co(4,4,tg.bind(null,i,e),s)}function vf(){}function ng(e,i){var s=Tn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&of(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function ig(e,i){var s=Tn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&of(i,o[1]))return o[0];if(o=e(),br){lt(!0);try{e()}finally{lt(!1)}}return s.memoizedState=[o,i],o}function xf(e,i,s){return s===void 0||(Ba&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=s_(),Ae.lanes|=e,Wa|=e,s)}function ag(e,i,s,o){return li(s,i)?s:os.current!==null?(e=xf(e,s,o),li(e,i)||(On=!0),e):(Ba&42)===0?(On=!0,e.memoizedState=s):(e=s_(),Ae.lanes|=e,Wa|=e,i)}function rg(e,i,s,o,u){var m=Z.p;Z.p=m!==0&&8>m?m:8;var T=B.T,w={};B.T=w,Mf(e,!1,i,s);try{var k=u(),ot=B.S;if(ot!==null&&ot(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Mt=xS(k,o);wo(e,i,Mt,di(e))}else wo(e,i,o,di(e))}catch(Rt){wo(e,i,{then:function(){},status:"rejected",reason:Rt},di())}finally{Z.p=m,B.T=T}}function TS(){}function Sf(e,i,s,o){if(e.tag!==5)throw Error(r(476));var u=sg(e).queue;rg(e,u,i,X,s===null?TS:function(){return og(e),s(o)})}function sg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:X},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function og(e){var i=sg(e).next.queue;wo(e,i,{},di())}function yf(){return Vn(Yo)}function lg(){return Tn().memoizedState}function cg(){return Tn().memoizedState}function bS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();e=za(s);var o=Ia(i,e,s);o!==null&&(pi(o,i,s),Eo(o,i,s)),i={cache:Ku()},e.payload=i;return}i=i.return}}function AS(e,i,s){var o=di();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},jl(e)?fg(i,s):(s=Hu(e,i,s,o),s!==null&&(pi(s,e,o),hg(s,i,o)))}function ug(e,i,s){var o=di();wo(e,i,s,o)}function wo(e,i,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(jl(e))fg(i,u);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,w=m(T,s);if(u.hasEagerState=!0,u.eagerState=w,li(w,T))return Ul(e,i,u,0),rn===null&&Dl(),!1}catch{}finally{}if(s=Hu(e,i,u,o),s!==null)return pi(s,e,o),hg(s,i,o),!0}return!1}function Mf(e,i,s,o){if(o={lane:2,revertLane:th(),action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(i)throw Error(r(479))}else i=Hu(e,s,o,2),i!==null&&pi(i,e,2)}function jl(e){var i=e.alternate;return e===Ae||i!==null&&i===Ae}function fg(e,i){ls=Vl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function hg(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Xt(e,s)}}var Zl={readContext:Vn,use:Xl,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn},dg={readContext:Vn,use:Xl,useCallback:function(e,i){return ei().memoizedState=[e,i===void 0?null:i],e},useContext:Vn,useEffect:Km,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Yl(4194308,4,tg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Yl(4194308,4,e,i)},useInsertionEffect:function(e,i){Yl(4,2,e,i)},useMemo:function(e,i){var s=ei();i=i===void 0?null:i;var o=e();if(br){lt(!0);try{e()}finally{lt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=ei();if(s!==void 0){var u=s(i);if(br){lt(!0);try{s(i)}finally{lt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=AS.bind(null,Ae,e),[o.memoizedState,e]},useRef:function(e){var i=ei();return e={current:e},i.memoizedState=e},useState:function(e){e=gf(e);var i=e.queue,s=ug.bind(null,Ae,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:vf,useDeferredValue:function(e,i){var s=ei();return xf(s,e,i)},useTransition:function(){var e=gf(!1);return e=rg.bind(null,Ae,e.queue,!0,!1),ei().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=Ae,u=ei();if(He){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),rn===null)throw Error(r(349));(Pe&124)!==0||Om(o,i,s)}u.memoizedState=s;var m={value:s,getSnapshot:i};return u.queue=m,Km(zm.bind(null,o,m,e),[e]),o.flags|=2048,us(9,ql(),Pm.bind(null,o,m,s,i),null),s},useId:function(){var e=ei(),i=rn.identifierPrefix;if(He){var s=ca,o=la;s=(o&~(1<<32-It(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=kl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=SS++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:yf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e){var i=ei();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Mf.bind(null,Ae,!0,s),s.dispatch=i,[e,i]},useMemoCache:df,useCacheRefresh:function(){return ei().memoizedState=bS.bind(null,Ae)}},pg={readContext:Vn,use:Xl,useCallback:ng,useContext:Vn,useEffect:Qm,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:Wl,useRef:Zm,useState:function(){return Wl(ha)},useDebugValue:vf,useDeferredValue:function(e,i){var s=Tn();return ag(s,Ke.memoizedState,e,i)},useTransition:function(){var e=Wl(ha)[0],i=Tn().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:Nm,useId:lg,useHostTransitionStatus:yf,useFormState:qm,useActionState:qm,useOptimistic:function(e,i){var s=Tn();return Fm(s,Ke,e,i)},useMemoCache:df,useCacheRefresh:cg},RS={readContext:Vn,use:Xl,useCallback:ng,useContext:Vn,useEffect:Qm,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:mf,useRef:Zm,useState:function(){return mf(ha)},useDebugValue:vf,useDeferredValue:function(e,i){var s=Tn();return Ke===null?xf(s,e,i):ag(s,Ke.memoizedState,e,i)},useTransition:function(){var e=mf(ha)[0],i=Tn().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:Nm,useId:lg,useHostTransitionStatus:yf,useFormState:jm,useActionState:jm,useOptimistic:function(e,i){var s=Tn();return Ke!==null?Fm(s,Ke,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:df,useCacheRefresh:cg},fs=null,Do=0;function Kl(e){var i=Do;return Do+=1,fs===null&&(fs=[]),bm(fs,e,i)}function Uo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ql(e,i){throw i.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function mg(e){var i=e._init;return i(e._payload)}function gg(e){function i($,j){if(e){var at=$.deletions;at===null?($.deletions=[j],$.flags|=16):at.push(j)}}function s($,j){if(!e)return null;for(;j!==null;)i($,j),j=j.sibling;return null}function o($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=oa($,j),$.index=0,$.sibling=null,$}function m($,j,at){return $.index=at,e?(at=$.alternate,at!==null?(at=at.index,at<j?($.flags|=67108866,j):at):($.flags|=67108866,j)):($.flags|=1048576,j)}function T($){return e&&$.alternate===null&&($.flags|=67108866),$}function w($,j,at,bt){return j===null||j.tag!==6?(j=Vu(at,$.mode,bt),j.return=$,j):(j=u(j,at),j.return=$,j)}function k($,j,at,bt){var ne=at.type;return ne===E?Mt($,j,at.props.children,bt,at.key):j!==null&&(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===H&&mg(ne)===j.type)?(j=u(j,at.props),Uo(j,at),j.return=$,j):(j=Nl(at.type,at.key,at.props,null,$.mode,bt),Uo(j,at),j.return=$,j)}function ot($,j,at,bt){return j===null||j.tag!==4||j.stateNode.containerInfo!==at.containerInfo||j.stateNode.implementation!==at.implementation?(j=ku(at,$.mode,bt),j.return=$,j):(j=u(j,at.children||[]),j.return=$,j)}function Mt($,j,at,bt,ne){return j===null||j.tag!==7?(j=_r(at,$.mode,bt,ne),j.return=$,j):(j=u(j,at),j.return=$,j)}function Rt($,j,at){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Vu(""+j,$.mode,at),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return at=Nl(j.type,j.key,j.props,null,$.mode,at),Uo(at,j),at.return=$,at;case y:return j=ku(j,$.mode,at),j.return=$,j;case H:var bt=j._init;return j=bt(j._payload),Rt($,j,at)}if(ct(j)||Q(j))return j=_r(j,$.mode,at,null),j.return=$,j;if(typeof j.then=="function")return Rt($,Kl(j),at);if(j.$$typeof===R)return Rt($,Il($,j),at);Ql($,j)}return null}function ut($,j,at,bt){var ne=j!==null?j.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ne!==null?null:w($,j,""+at,bt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===ne?k($,j,at,bt):null;case y:return at.key===ne?ot($,j,at,bt):null;case H:return ne=at._init,at=ne(at._payload),ut($,j,at,bt)}if(ct(at)||Q(at))return ne!==null?null:Mt($,j,at,bt,null);if(typeof at.then=="function")return ut($,j,Kl(at),bt);if(at.$$typeof===R)return ut($,j,Il($,at),bt);Ql($,at)}return null}function ht($,j,at,bt,ne){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return $=$.get(at)||null,w(j,$,""+bt,ne);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case S:return $=$.get(bt.key===null?at:bt.key)||null,k(j,$,bt,ne);case y:return $=$.get(bt.key===null?at:bt.key)||null,ot(j,$,bt,ne);case H:var Re=bt._init;return bt=Re(bt._payload),ht($,j,at,bt,ne)}if(ct(bt)||Q(bt))return $=$.get(at)||null,Mt(j,$,bt,ne,null);if(typeof bt.then=="function")return ht($,j,at,Kl(bt),ne);if(bt.$$typeof===R)return ht($,j,at,Il(j,bt),ne);Ql(j,bt)}return null}function ge($,j,at,bt){for(var ne=null,Re=null,ue=j,me=j=0,zn=null;ue!==null&&me<at.length;me++){ue.index>me?(zn=ue,ue=null):zn=ue.sibling;var Be=ut($,ue,at[me],bt);if(Be===null){ue===null&&(ue=zn);break}e&&ue&&Be.alternate===null&&i($,ue),j=m(Be,j,me),Re===null?ne=Be:Re.sibling=Be,Re=Be,ue=zn}if(me===at.length)return s($,ue),He&&xr($,me),ne;if(ue===null){for(;me<at.length;me++)ue=Rt($,at[me],bt),ue!==null&&(j=m(ue,j,me),Re===null?ne=ue:Re.sibling=ue,Re=ue);return He&&xr($,me),ne}for(ue=o(ue);me<at.length;me++)zn=ht(ue,$,me,at[me],bt),zn!==null&&(e&&zn.alternate!==null&&ue.delete(zn.key===null?me:zn.key),j=m(zn,j,me),Re===null?ne=zn:Re.sibling=zn,Re=zn);return e&&ue.forEach(function(tr){return i($,tr)}),He&&xr($,me),ne}function de($,j,at,bt){if(at==null)throw Error(r(151));for(var ne=null,Re=null,ue=j,me=j=0,zn=null,Be=at.next();ue!==null&&!Be.done;me++,Be=at.next()){ue.index>me?(zn=ue,ue=null):zn=ue.sibling;var tr=ut($,ue,Be.value,bt);if(tr===null){ue===null&&(ue=zn);break}e&&ue&&tr.alternate===null&&i($,ue),j=m(tr,j,me),Re===null?ne=tr:Re.sibling=tr,Re=tr,ue=zn}if(Be.done)return s($,ue),He&&xr($,me),ne;if(ue===null){for(;!Be.done;me++,Be=at.next())Be=Rt($,Be.value,bt),Be!==null&&(j=m(Be,j,me),Re===null?ne=Be:Re.sibling=Be,Re=Be);return He&&xr($,me),ne}for(ue=o(ue);!Be.done;me++,Be=at.next())Be=ht(ue,$,me,Be.value,bt),Be!==null&&(e&&Be.alternate!==null&&ue.delete(Be.key===null?me:Be.key),j=m(Be,j,me),Re===null?ne=Be:Re.sibling=Be,Re=Be);return e&&ue.forEach(function(Cy){return i($,Cy)}),He&&xr($,me),ne}function Je($,j,at,bt){if(typeof at=="object"&&at!==null&&at.type===E&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var ne=at.key;j!==null;){if(j.key===ne){if(ne=at.type,ne===E){if(j.tag===7){s($,j.sibling),bt=u(j,at.props.children),bt.return=$,$=bt;break t}}else if(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===H&&mg(ne)===j.type){s($,j.sibling),bt=u(j,at.props),Uo(bt,at),bt.return=$,$=bt;break t}s($,j);break}else i($,j);j=j.sibling}at.type===E?(bt=_r(at.props.children,$.mode,bt,at.key),bt.return=$,$=bt):(bt=Nl(at.type,at.key,at.props,null,$.mode,bt),Uo(bt,at),bt.return=$,$=bt)}return T($);case y:t:{for(ne=at.key;j!==null;){if(j.key===ne)if(j.tag===4&&j.stateNode.containerInfo===at.containerInfo&&j.stateNode.implementation===at.implementation){s($,j.sibling),bt=u(j,at.children||[]),bt.return=$,$=bt;break t}else{s($,j);break}else i($,j);j=j.sibling}bt=ku(at,$.mode,bt),bt.return=$,$=bt}return T($);case H:return ne=at._init,at=ne(at._payload),Je($,j,at,bt)}if(ct(at))return ge($,j,at,bt);if(Q(at)){if(ne=Q(at),typeof ne!="function")throw Error(r(150));return at=ne.call(at),de($,j,at,bt)}if(typeof at.then=="function")return Je($,j,Kl(at),bt);if(at.$$typeof===R)return Je($,j,Il($,at),bt);Ql($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,j!==null&&j.tag===6?(s($,j.sibling),bt=u(j,at),bt.return=$,$=bt):(s($,j),bt=Vu(at,$.mode,bt),bt.return=$,$=bt),T($)):s($,j)}return function($,j,at,bt){try{Do=0;var ne=Je($,j,at,bt);return fs=null,ne}catch(ue){if(ue===yo||ue===Fl)throw ue;var Re=ci(29,ue,null,$.mode);return Re.lanes=bt,Re.return=$,Re}finally{}}}var hs=gg(!0),_g=gg(!1),bi=q(null),Zi=null;function Fa(e){var i=e.alternate;xt(Cn,Cn.current&1),xt(bi,e),Zi===null&&(i===null||os.current!==null||i.memoizedState!==null)&&(Zi=e)}function vg(e){if(e.tag===22){if(xt(Cn,Cn.current),xt(bi,e),Zi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Zi=e)}}else Ha()}function Ha(){xt(Cn,Cn.current),xt(bi,bi.current)}function da(e){rt(bi),Zi===e&&(Zi=null),rt(Cn)}var Cn=q(0);function Jl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||hh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ef(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Tf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=di(),u=za(o);u.payload=i,s!=null&&(u.callback=s),i=Ia(e,u,o),i!==null&&(pi(i,e,o),Eo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=di(),u=za(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ia(e,u,o),i!==null&&(pi(i,e,o),Eo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=di(),o=za(s);o.tag=2,i!=null&&(o.callback=i),i=Ia(e,o,s),i!==null&&(pi(i,e,s),Eo(i,e,s))}};function xg(e,i,s,o,u,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,m,T):i.prototype&&i.prototype.isPureReactComponent?!ho(s,o)||!ho(u,m):!0}function Sg(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&Tf.enqueueReplaceState(i,i.state,null)}function Ar(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var $l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function yg(e){$l(e)}function Mg(e){console.error(e)}function Eg(e){$l(e)}function tc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Tg(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,i,s){return s=za(s),s.tag=3,s.payload={element:null},s.callback=function(){tc(e,i)},s}function bg(e){return e=za(e),e.tag=3,e}function Ag(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var m=o.value;e.payload=function(){return u(m)},e.callback=function(){Tg(i,s,o)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Tg(i,s,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function CS(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&vo(i,s,u,!0),s=bi.current,s!==null){switch(s.tag){case 13:return Zi===null?Zf():s.alternate===null&&dn===0&&(dn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===$u?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Qf(e,o,u)),!1;case 22:return s.flags|=65536,o===$u?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Qf(e,o,u)),!1}throw Error(r(435,s.tag))}return Qf(e,o,u),Zf(),!1}if(He)return i=bi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==qu&&(e=Error(r(422),{cause:o}),_o(yi(e,s)))):(o!==qu&&(i=Error(r(423),{cause:o}),_o(yi(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=yi(o,s),u=bf(e.stateNode,o,u),nf(e,u),dn!==4&&(dn=2)),!1;var m=Error(r(520),{cause:o});if(m=yi(m,s),Bo===null?Bo=[m]:Bo.push(m),dn!==4&&(dn=2),i===null)return!0;o=yi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=bf(s.stateNode,o,e),nf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qa===null||!qa.has(m))))return s.flags|=65536,u&=-u,s.lanes|=u,u=bg(u),Ag(u,e,s,o),nf(s,u),!1}s=s.return}while(s!==null);return!1}var Rg=Error(r(461)),On=!1;function Bn(e,i,s,o){i.child=e===null?_g(i,null,s,o):hs(i,e.child,s,o)}function Cg(e,i,s,o,u){s=s.render;var m=i.ref;if("ref"in o){var T={};for(var w in o)w!=="ref"&&(T[w]=o[w])}else T=o;return Er(i),o=lf(e,i,s,T,m,u),w=cf(),e!==null&&!On?(uf(e,i,u),pa(e,i,u)):(He&&w&&Xu(i),i.flags|=1,Bn(e,i,o,u),i.child)}function wg(e,i,s,o,u){if(e===null){var m=s.type;return typeof m=="function"&&!Gu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Dg(e,i,m,o,u)):(e=Nl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Nf(e,u)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:ho,s(T,o)&&e.ref===i.ref)return pa(e,i,u)}return i.flags|=1,e=oa(m,o),e.ref=i.ref,e.return=i,i.child=e}function Dg(e,i,s,o,u){if(e!==null){var m=e.memoizedProps;if(ho(m,o)&&e.ref===i.ref)if(On=!1,i.pendingProps=o=m,Nf(e,u))(e.flags&131072)!==0&&(On=!0);else return i.lanes=e.lanes,pa(e,i,u)}return Af(e,i,s,o,u)}function Ug(e,i,s){var o=i.pendingProps,u=o.children,m=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,m=0;u!==null;)m=m|u.lanes|u.childLanes,u=u.sibling;i.childLanes=m&~o}else i.childLanes=0,i.child=null;return Lg(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(i,m!==null?m.cachePool:null),m!==null?Dm(i,m):rf(),vg(i);else return i.lanes=i.childLanes=536870912,Lg(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Bl(i,m.cachePool),Dm(i,m),Ha(),i.memoizedState=null):(e!==null&&Bl(i,null),rf(),Ha());return Bn(e,i,u,s),i.child}function Lg(e,i,s,o){var u=Ju();return u=u===null?null:{parent:Rn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Bl(i,null),rf(),vg(i),e!==null&&vo(e,i,o,!0),null}function ec(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Af(e,i,s,o,u){return Er(i),s=lf(e,i,s,o,void 0,u),o=cf(),e!==null&&!On?(uf(e,i,u),pa(e,i,u)):(He&&o&&Xu(i),i.flags|=1,Bn(e,i,s,u),i.child)}function Ng(e,i,s,o,u,m){return Er(i),i.updateQueue=null,s=Lm(i,o,s,u),Um(e),o=cf(),e!==null&&!On?(uf(e,i,m),pa(e,i,m)):(He&&o&&Xu(i),i.flags|=1,Bn(e,i,s,m),i.child)}function Og(e,i,s,o,u){if(Er(i),i.stateNode===null){var m=ns,T=s.contextType;typeof T=="object"&&T!==null&&(m=Vn(T)),m=new s(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Tf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},tf(i),T=s.contextType,m.context=typeof T=="object"&&T!==null?Vn(T):ns,m.state=i.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Ef(i,s,T,o),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Tf.enqueueReplaceState(m,m.state,null),bo(i,o,m,u),To(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){m=i.stateNode;var w=i.memoizedProps,k=Ar(s,w);m.props=k;var ot=m.context,Mt=s.contextType;T=ns,typeof Mt=="object"&&Mt!==null&&(T=Vn(Mt));var Rt=s.getDerivedStateFromProps;Mt=typeof Rt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,Mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||ot!==T)&&Sg(i,m,o,T),Pa=!1;var ut=i.memoizedState;m.state=ut,bo(i,o,m,u),To(),ot=i.memoizedState,w||ut!==ot||Pa?(typeof Rt=="function"&&(Ef(i,s,Rt,o),ot=i.memoizedState),(k=Pa||xg(i,s,k,o,ut,ot,T))?(Mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ot),m.props=o,m.state=ot,m.context=T,o=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,ef(e,i),T=i.memoizedProps,Mt=Ar(s,T),m.props=Mt,Rt=i.pendingProps,ut=m.context,ot=s.contextType,k=ns,typeof ot=="object"&&ot!==null&&(k=Vn(ot)),w=s.getDerivedStateFromProps,(ot=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==Rt||ut!==k)&&Sg(i,m,o,k),Pa=!1,ut=i.memoizedState,m.state=ut,bo(i,o,m,u),To();var ht=i.memoizedState;T!==Rt||ut!==ht||Pa||e!==null&&e.dependencies!==null&&zl(e.dependencies)?(typeof w=="function"&&(Ef(i,s,w,o),ht=i.memoizedState),(Mt=Pa||xg(i,s,Mt,o,ut,ht,k)||e!==null&&e.dependencies!==null&&zl(e.dependencies))?(ot||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,ht,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,ht,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ht),m.props=o,m.state=ht,m.context=k,o=Mt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=1024),o=!1)}return m=o,ec(e,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&o?(i.child=hs(i,e.child,null,u),i.child=hs(i,null,s,u)):Bn(e,i,s,u),i.memoizedState=m.state,e=i.child):e=pa(e,i,u),e}function Pg(e,i,s,o){return go(),i.flags|=256,Bn(e,i,s,o),i.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:Mm()}}function wf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Ai),e}function zg(e,i,s){var o=i.pendingProps,u=!1,m=(i.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),T&&(u=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(He){if(u?Fa(i):Ha(),He){var w=hn,k;if(k=w){t:{for(k=w,w=ji;k.nodeType!==8;){if(!w){w=null;break t}if(k=Bi(k.nextSibling),k===null){w=null;break t}}w=k}w!==null?(i.memoizedState={dehydrated:w,treeContext:vr!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},k=ci(18,null,null,0),k.stateNode=w,k.return=i,i.child=k,Zn=i,hn=null,k=!0):k=!1}k||yr(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return hh(w)?i.lanes=32:i.lanes=536870912,null;da(i)}return w=o.children,o=o.fallback,u?(Ha(),u=i.mode,w=nc({mode:"hidden",children:w},u),o=_r(o,u,s,null),w.return=i,o.return=i,w.sibling=o,i.child=w,u=i.child,u.memoizedState=Cf(s),u.childLanes=wf(e,T,s),i.memoizedState=Rf,o):(Fa(i),Df(i,w))}if(k=e.memoizedState,k!==null&&(w=k.dehydrated,w!==null)){if(m)i.flags&256?(Fa(i),i.flags&=-257,i=Uf(e,i,s)):i.memoizedState!==null?(Ha(),i.child=e.child,i.flags|=128,i=null):(Ha(),u=o.fallback,w=i.mode,o=nc({mode:"visible",children:o.children},w),u=_r(u,w,s,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,hs(i,e.child,null,s),o=i.child,o.memoizedState=Cf(s),o.childLanes=wf(e,T,s),i.memoizedState=Rf,i=u);else if(Fa(i),hh(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var ot=T.dgst;T=ot,o=Error(r(419)),o.stack="",o.digest=T,_o({value:o,source:null,stack:null}),i=Uf(e,i,s)}else if(On||vo(e,i,s,!1),T=(s&e.childLanes)!==0,On||T){if(T=rn,T!==null&&(o=s&-s,o=(o&42)!==0?1:se(o),o=(o&(T.suspendedLanes|s))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,es(e,o),pi(T,e,o),Rg;w.data==="$?"||Zf(),i=Uf(e,i,s)}else w.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,hn=Bi(w.nextSibling),Zn=i,He=!0,Sr=null,ji=!1,e!==null&&(Ei[Ti++]=la,Ei[Ti++]=ca,Ei[Ti++]=vr,la=e.id,ca=e.overflow,vr=i),i=Df(i,o.children),i.flags|=4096);return i}return u?(Ha(),u=o.fallback,w=i.mode,k=e.child,ot=k.sibling,o=oa(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ot!==null?u=oa(ot,u):(u=_r(u,w,s,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,w=e.child.memoizedState,w===null?w=Cf(s):(k=w.cachePool,k!==null?(ot=Rn._currentValue,k=k.parent!==ot?{parent:ot,pool:ot}:k):k=Mm(),w={baseLanes:w.baseLanes|s,cachePool:k}),u.memoizedState=w,u.childLanes=wf(e,T,s),i.memoizedState=Rf,o):(Fa(i),s=e.child,e=s.sibling,s=oa(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=s,i.memoizedState=null,s)}function Df(e,i){return i=nc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function nc(e,i){return e=ci(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Uf(e,i,s){return hs(i,e.child,null,s),e=Df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ig(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ju(e.return,i,s)}function Lf(e,i,s,o,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=s,m.tailMode=u)}function Bg(e,i,s){var o=i.pendingProps,u=o.revealOrder,m=o.tail;if(Bn(e,i,o.children,s),o=Cn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ig(e,s,i);else if(e.tag===19)Ig(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(Cn,o),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Jl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Lf(i,!1,u,s,m);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Jl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Lf(i,!0,s,null,m);break;case"together":Lf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function pa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(vo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=oa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=oa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&zl(e)))}function wS(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),Oa(i,Rn,e.memoizedState.cache),go();break;case 27:case 5:zt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:Oa(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?zg(e,i,s):(Fa(i),e=pa(e,i,s),e!==null?e.sibling:null);Fa(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(vo(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return Bg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Cn,Cn.current),o)break;return null;case 22:case 23:return i.lanes=0,Ug(e,i,s);case 24:Oa(i,Rn,e.memoizedState.cache)}return pa(e,i,s)}function Fg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)On=!0;else{if(!Nf(e,s)&&(i.flags&128)===0)return On=!1,wS(e,i,s);On=(e.flags&131072)!==0}else On=!1,He&&(i.flags&1048576)!==0&&mm(i,Pl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Gu(o)?(e=Ar(o,e),i.tag=1,i=Og(null,i,o,e,s)):(i.tag=0,i=Af(null,i,o,e,s));else{if(o!=null){if(u=o.$$typeof,u===C){i.tag=11,i=Cg(null,i,o,e,s);break t}else if(u===I){i.tag=14,i=wg(null,i,o,e,s);break t}}throw i=pt(o)||o,Error(r(306,i,""))}}return i;case 0:return Af(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Ar(o,i.pendingProps),Og(e,i,o,u,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(r(387));o=i.pendingProps;var m=i.memoizedState;u=m.element,ef(e,i),bo(i,o,null,s);var T=i.memoizedState;if(o=T.cache,Oa(i,Rn,o),o!==m.cache&&Zu(i,[Rn],s,!0),To(),o=T.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Pg(e,i,o,s);break t}else if(o!==u){u=yi(Error(r(424)),i),_o(u),i=Pg(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hn=Bi(e.firstChild),Zn=i,He=!0,Sr=null,ji=!0,s=_g(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(go(),o===u){i=pa(e,i,s);break t}Bn(e,i,o,s)}i=i.child}return i;case 26:return ec(e,i),e===null?(s=k_(i.type,null,i.pendingProps,null))?i.memoizedState=s:He||(s=i.type,e=i.pendingProps,o=gc(st.current).createElement(s),o[Nt]=i,o[Ve]=e,Hn(o,s,e),en(o),i.stateNode=o):i.memoizedState=k_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return zt(i),e===null&&He&&(o=i.stateNode=H_(i.type,i.pendingProps,st.current),Zn=i,ji=!0,u=hn,Za(i.type)?(dh=u,hn=Bi(o.firstChild)):hn=u),Bn(e,i,i.pendingProps.children,s),ec(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&He&&((u=o=hn)&&(o=iy(o,i.type,i.pendingProps,ji),o!==null?(i.stateNode=o,Zn=i,hn=Bi(o.firstChild),ji=!1,u=!0):u=!1),u||yr(i)),zt(i),u=i.type,m=i.pendingProps,T=e!==null?e.memoizedProps:null,o=m.children,ch(u,m)?o=null:T!==null&&ch(u,T)&&(i.flags|=32),i.memoizedState!==null&&(u=lf(e,i,yS,null,null,s),Yo._currentValue=u),ec(e,i),Bn(e,i,o,s),i.child;case 6:return e===null&&He&&((e=s=hn)&&(s=ay(s,i.pendingProps,ji),s!==null?(i.stateNode=s,Zn=i,hn=null,e=!0):e=!1),e||yr(i)),null;case 13:return zg(e,i,s);case 4:return At(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=hs(i,null,o,s):Bn(e,i,o,s),i.child;case 11:return Cg(e,i,i.type,i.pendingProps,s);case 7:return Bn(e,i,i.pendingProps,s),i.child;case 8:return Bn(e,i,i.pendingProps.children,s),i.child;case 12:return Bn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Oa(i,i.type,o.value),Bn(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Er(i),u=Vn(u),o=o(u),i.flags|=1,Bn(e,i,o,s),i.child;case 14:return wg(e,i,i.type,i.pendingProps,s);case 15:return Dg(e,i,i.type,i.pendingProps,s);case 19:return Bg(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=nc(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=oa(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Ug(e,i,s);case 24:return Er(i),o=Vn(Rn),e===null?(u=Ju(),u===null&&(u=rn,m=Ku(),u.pooledCache=m,m.refCount++,m!==null&&(u.pooledCacheLanes|=s),u=m),i.memoizedState={parent:o,cache:u},tf(i),Oa(i,Rn,u)):((e.lanes&s)!==0&&(ef(e,i),bo(i,null,null,s),To()),u=e.memoizedState,m=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Oa(i,Rn,o)):(o=m.cache,Oa(i,Rn,o),o!==u.cache&&Zu(i,[Rn],s,!0))),Bn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ma(e){e.flags|=4}function Hg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!j_(i)){if(i=bi.current,i!==null&&((Pe&4194048)===Pe?Zi!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||i!==Zi))throw Mo=$u,Em;e.flags|=8192}}function ic(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Bt():536870912,e.lanes|=i,gs|=i)}function Lo(e,i){if(!He)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function fn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function DS(e,i,s){var o=i.pendingProps;switch(Wu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return fn(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),fa(Rn),Jt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(mo(i)?ma(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vm())),fn(i),null;case 26:return s=i.memoizedState,e===null?(ma(i),s!==null?(fn(i),Hg(i,s)):(fn(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ma(i),fn(i),Hg(i,s)):(fn(i),i.flags&=-16777217):(e.memoizedProps!==o&&ma(i),fn(i),i.flags&=-16777217),null;case 27:$t(i),s=st.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ma(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return fn(i),null}e=Y.current,mo(i)?gm(i):(e=H_(u,o,s),i.stateNode=e,ma(i))}return fn(i),null;case 5:if($t(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ma(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return fn(i),null}if(e=Y.current,mo(i))gm(i);else{switch(u=gc(st.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}e[Nt]=i,e[Ve]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(Hn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ma(i)}}return fn(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ma(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=st.current,mo(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=Zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Nt]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||N_(e.nodeValue,s)),e||yr(i)}else e=gc(e).createTextNode(o),e[Nt]=i,i.stateNode=e}return fn(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=mo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Nt]=i}else go(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),u=!1}else u=vm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(da(i),i):(da(i),null)}if(da(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==u&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),ic(i,i.updateQueue),fn(i),null;case 4:return Jt(),e===null&&ah(i.stateNode.containerInfo),fn(i),null;case 10:return fa(i.type),fn(i),null;case 19:if(rt(Cn),u=i.memoizedState,u===null)return fn(i),null;if(o=(i.flags&128)!==0,m=u.rendering,m===null)if(o)Lo(u,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Jl(e),m!==null){for(i.flags|=128,Lo(u,!1),e=m.updateQueue,i.updateQueue=e,ic(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)pm(s,e),s=s.sibling;return xt(Cn,Cn.current&1|2),i.child}e=e.sibling}u.tail!==null&&Yt()>sc&&(i.flags|=128,o=!0,Lo(u,!1),i.lanes=4194304)}else{if(!o)if(e=Jl(m),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,ic(i,e),Lo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!He)return fn(i),null}else 2*Yt()-u.renderingStartTime>sc&&s!==536870912&&(i.flags|=128,o=!0,Lo(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Yt(),i.sibling=null,e=Cn.current,xt(Cn,o?e&1|2:e&1),i):(fn(i),null);case 22:case 23:return da(i),sf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),s=i.updateQueue,s!==null&&ic(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&rt(Tr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),fa(Rn),fn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function US(e,i){switch(Wu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return fa(Rn),Jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return $t(i),null;case 13:if(da(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));go()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return rt(Cn),null;case 4:return Jt(),null;case 10:return fa(i.type),null;case 22:case 23:return da(i),sf(),e!==null&&rt(Tr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return fa(Rn),null;case 25:return null;default:return null}}function Gg(e,i){switch(Wu(i),i.tag){case 3:fa(Rn),Jt();break;case 26:case 27:case 5:$t(i);break;case 4:Jt();break;case 13:da(i);break;case 19:rt(Cn);break;case 10:fa(i.type);break;case 22:case 23:da(i),sf(),e!==null&&rt(Tr);break;case 24:fa(Rn)}}function No(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var m=s.create,T=s.inst;o=m(),T.destroy=o}s=s.next}while(s!==u)}}catch(w){nn(i,i.return,w)}}function Ga(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var m=u.next;o=m;do{if((o.tag&e)===e){var T=o.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,u=i;var k=s,ot=w;try{ot()}catch(Mt){nn(u,k,Mt)}}}o=o.next}while(o!==m)}}catch(Mt){nn(i,i.return,Mt)}}function Vg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{wm(i,s)}catch(o){nn(e,e.return,o)}}}function kg(e,i,s){s.props=Ar(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){nn(e,i,o)}}function Oo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){nn(e,i,u)}}function Ki(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){nn(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){nn(e,i,u)}else s.current=null}function Xg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){nn(e,e.return,u)}}function Of(e,i,s){try{var o=e.stateNode;JS(o,e.type,s,i),o[Ve]=i}catch(u){nn(e,e.return,u)}}function Wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=mc));else if(o!==4&&(o===27&&Za(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(zf(e,i,s),e=e.sibling;e!==null;)zf(e,i,s),e=e.sibling}function ac(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ac(e,i,s),e=e.sibling;e!==null;)ac(e,i,s),e=e.sibling}function qg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Hn(i,o,s),i[Nt]=e,i[Ve]=s}catch(m){nn(e,e.return,m)}}var ga=!1,Sn=!1,If=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,Pn=null;function LS(e,i){if(e=e.containerInfo,oh=Mc,e=am(e),Ou(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,w=-1,k=-1,ot=0,Mt=0,Rt=e,ut=null;e:for(;;){for(var ht;Rt!==s||u!==0&&Rt.nodeType!==3||(w=T+u),Rt!==m||o!==0&&Rt.nodeType!==3||(k=T+o),Rt.nodeType===3&&(T+=Rt.nodeValue.length),(ht=Rt.firstChild)!==null;)ut=Rt,Rt=ht;for(;;){if(Rt===e)break e;if(ut===s&&++ot===u&&(w=T),ut===m&&++Mt===o&&(k=T),(ht=Rt.nextSibling)!==null)break;Rt=ut,ut=Rt.parentNode}Rt=ht}s=w===-1||k===-1?null:{start:w,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(lh={focusedElem:e,selectionRange:s},Mc=!1,Pn=i;Pn!==null;)if(i=Pn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Pn=e;else for(;Pn!==null;){switch(i=Pn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,u=m.memoizedProps,m=m.memoizedState,o=s.stateNode;try{var ge=Ar(s.type,u,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(ge,m),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){nn(s,s.return,de)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)fh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Pn=e;break}Pn=i.return}}function jg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Va(e,s),o&4&&No(5,s);break;case 1:if(Va(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(T){nn(s,s.return,T)}else{var u=Ar(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){nn(s,s.return,T)}}o&64&&Vg(s),o&512&&Oo(s,s.return);break;case 3:if(Va(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{wm(e,i)}catch(T){nn(s,s.return,T)}}break;case 27:i===null&&o&4&&qg(s);case 26:case 5:Va(e,s),i===null&&o&4&&Xg(s),o&512&&Oo(s,s.return);break;case 12:Va(e,s);break;case 13:Va(e,s),o&4&&Qg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=GS.bind(null,s),ry(e,s))));break;case 22:if(o=s.memoizedState!==null||ga,!o){i=i!==null&&i.memoizedState!==null||Sn,u=ga;var m=Sn;ga=o,(Sn=i)&&!m?ka(e,s,(s.subtreeFlags&8772)!==0):Va(e,s),ga=u,Sn=m}break;case 30:break;default:Va(e,s)}}function Zg(e){var i=e.alternate;i!==null&&(e.alternate=null,Zg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ln(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,ni=!1;function _a(e,i,s){for(s=s.child;s!==null;)Kg(e,i,s),s=s.sibling}function Kg(e,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(gt,s)}catch{}switch(s.tag){case 26:Sn||Ki(s,i),_a(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||Ki(s,i);var o=on,u=ni;Za(s.type)&&(on=s.stateNode,ni=!1),_a(e,i,s),ko(s.stateNode),on=o,ni=u;break;case 5:Sn||Ki(s,i);case 6:if(o=on,u=ni,on=null,_a(e,i,s),on=o,ni=u,on!==null)if(ni)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(m){nn(s,i,m)}else try{on.removeChild(s.stateNode)}catch(m){nn(s,i,m)}break;case 18:on!==null&&(ni?(e=on,B_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Qo(e)):B_(on,s.stateNode));break;case 4:o=on,u=ni,on=s.stateNode.containerInfo,ni=!0,_a(e,i,s),on=o,ni=u;break;case 0:case 11:case 14:case 15:Sn||Ga(2,s,i),Sn||Ga(4,s,i),_a(e,i,s);break;case 1:Sn||(Ki(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&kg(s,i,o)),_a(e,i,s);break;case 21:_a(e,i,s);break;case 22:Sn=(o=Sn)||s.memoizedState!==null,_a(e,i,s),Sn=o;break;default:_a(e,i,s)}}function Qg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qo(e)}catch(s){nn(i,i.return,s)}}function NS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Yg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Yg),i;default:throw Error(r(435,e.tag))}}function Bf(e,i){var s=NS(e);i.forEach(function(o){var u=VS.bind(null,e,o);s.has(o)||(s.add(o),o.then(u,u))})}function ui(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],m=e,T=i,w=T;t:for(;w!==null;){switch(w.tag){case 27:if(Za(w.type)){on=w.stateNode,ni=!1;break t}break;case 5:on=w.stateNode,ni=!1;break t;case 3:case 4:on=w.stateNode.containerInfo,ni=!0;break t}w=w.return}if(on===null)throw Error(r(160));Kg(m,T,u),on=null,ni=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Jg(i,e),i=i.sibling}var Ii=null;function Jg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ui(i,e),fi(e),o&4&&(Ga(3,e,e.return),No(3,e),Ga(5,e,e.return));break;case 1:ui(i,e),fi(e),o&512&&(Sn||s===null||Ki(s,s.return)),o&64&&ga&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Ii;if(ui(i,e),fi(e),o&512&&(Sn||s===null||Ki(s,s.return)),o&4){var m=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":m=u.getElementsByTagName("title")[0],(!m||m[$n]||m[Nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=u.createElement(o),u.head.insertBefore(m,u.querySelector("head > title"))),Hn(m,o,s),m[Nt]=e,en(m),o=m;break t;case"link":var T=q_("link","href",u).get(o+(s.href||""));if(T){for(var w=0;w<T.length;w++)if(m=T[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(w,1);break e}}m=u.createElement(o),Hn(m,o,s),u.head.appendChild(m);break;case"meta":if(T=q_("meta","content",u).get(o+(s.content||""))){for(w=0;w<T.length;w++)if(m=T[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(w,1);break e}}m=u.createElement(o),Hn(m,o,s),u.head.appendChild(m);break;default:throw Error(r(468,o))}m[Nt]=e,en(m),o=m}e.stateNode=o}else Y_(u,e.type,e.stateNode);else e.stateNode=W_(u,o,e.memoizedProps);else m!==o?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,o===null?Y_(u,e.type,e.stateNode):W_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Of(e,e.memoizedProps,s.memoizedProps)}break;case 27:ui(i,e),fi(e),o&512&&(Sn||s===null||Ki(s,s.return)),s!==null&&o&4&&Of(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ui(i,e),fi(e),o&512&&(Sn||s===null||Ki(s,s.return)),e.flags&32){u=e.stateNode;try{Si(u,"")}catch(ht){nn(e,e.return,ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Of(e,u,s!==null?s.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(ui(i,e),fi(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(ht){nn(e,e.return,ht)}}break;case 3:if(xc=null,u=Ii,Ii=_c(i.containerInfo),ui(i,e),Ii=u,fi(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Qo(i.containerInfo)}catch(ht){nn(e,e.return,ht)}If&&(If=!1,$g(e));break;case 4:o=Ii,Ii=_c(e.stateNode.containerInfo),ui(i,e),fi(e),Ii=o;break;case 12:ui(i,e),fi(e);break;case 13:ui(i,e),fi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Xf=Yt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bf(e,o)));break;case 22:u=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,ot=ga,Mt=Sn;if(ga=ot||u,Sn=Mt||k,ui(i,e),Sn=Mt,ga=ot,fi(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||k||ga||Sn||Rr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,u)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=k.stateNode;var Rt=k.memoizedProps.style,ut=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;w.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(ht){nn(k,k.return,ht)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(ht){nn(k,k.return,ht)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Bf(e,s))));break;case 19:ui(i,e),fi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bf(e,o)));break;case 30:break;case 21:break;default:ui(i,e),fi(e)}}function fi(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(Wg(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,m=Pf(e);ac(e,m,u);break;case 5:var T=s.stateNode;s.flags&32&&(Si(T,""),s.flags&=-33);var w=Pf(e);ac(e,w,T);break;case 3:case 4:var k=s.stateNode.containerInfo,ot=Pf(e);zf(e,ot,k);break;default:throw Error(r(161))}}catch(Mt){nn(e,e.return,Mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;$g(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Va(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)jg(e,i.alternate,i),i=i.sibling}function Rr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ga(4,i,i.return),Rr(i);break;case 1:Ki(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&kg(i,i.return,s),Rr(i);break;case 27:ko(i.stateNode);case 26:case 5:Ki(i,i.return),Rr(i);break;case 22:i.memoizedState===null&&Rr(i);break;case 30:Rr(i);break;default:Rr(i)}e=e.sibling}}function ka(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,m=i,T=m.flags;switch(m.tag){case 0:case 11:case 15:ka(u,m,s),No(4,m);break;case 1:if(ka(u,m,s),o=m,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){nn(o,o.return,ot)}if(o=m,u=o.updateQueue,u!==null){var w=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Cm(k[u],w)}catch(ot){nn(o,o.return,ot)}}s&&T&64&&Vg(m),Oo(m,m.return);break;case 27:qg(m);case 26:case 5:ka(u,m,s),s&&o===null&&T&4&&Xg(m),Oo(m,m.return);break;case 12:ka(u,m,s);break;case 13:ka(u,m,s),s&&T&4&&Qg(u,m);break;case 22:m.memoizedState===null&&ka(u,m,s),Oo(m,m.return);break;case 30:break;default:ka(u,m,s)}i=i.sibling}}function Ff(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&xo(s))}function Hf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&xo(e))}function Qi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)t_(e,i,s,o),i=i.sibling}function t_(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Qi(e,i,s,o),u&2048&&No(9,i);break;case 1:Qi(e,i,s,o);break;case 3:Qi(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&xo(e)));break;case 12:if(u&2048){Qi(e,i,s,o),e=i.stateNode;try{var m=i.memoizedProps,T=m.id,w=m.onPostCommit;typeof w=="function"&&w(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){nn(i,i.return,k)}}else Qi(e,i,s,o);break;case 13:Qi(e,i,s,o);break;case 23:break;case 22:m=i.stateNode,T=i.alternate,i.memoizedState!==null?m._visibility&2?Qi(e,i,s,o):Po(e,i):m._visibility&2?Qi(e,i,s,o):(m._visibility|=2,ds(e,i,s,o,(i.subtreeFlags&10256)!==0)),u&2048&&Ff(T,i);break;case 24:Qi(e,i,s,o),u&2048&&Hf(i.alternate,i);break;default:Qi(e,i,s,o)}}function ds(e,i,s,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,T=i,w=s,k=o,ot=T.flags;switch(T.tag){case 0:case 11:case 15:ds(m,T,w,k,u),No(8,T);break;case 23:break;case 22:var Mt=T.stateNode;T.memoizedState!==null?Mt._visibility&2?ds(m,T,w,k,u):Po(m,T):(Mt._visibility|=2,ds(m,T,w,k,u)),u&&ot&2048&&Ff(T.alternate,T);break;case 24:ds(m,T,w,k,u),u&&ot&2048&&Hf(T.alternate,T);break;default:ds(m,T,w,k,u)}i=i.sibling}}function Po(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:Po(s,o),u&2048&&Ff(o.alternate,o);break;case 24:Po(s,o),u&2048&&Hf(o.alternate,o);break;default:Po(s,o)}i=i.sibling}}var zo=8192;function ps(e){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)e_(e),e=e.sibling}function e_(e){switch(e.tag){case 26:ps(e),e.flags&zo&&e.memoizedState!==null&&vy(Ii,e.memoizedState,e.memoizedProps);break;case 5:ps(e);break;case 3:case 4:var i=Ii;Ii=_c(e.stateNode.containerInfo),ps(e),Ii=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=zo,zo=16777216,ps(e),zo=i):ps(e));break;default:ps(e)}}function n_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Io(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Pn=o,a_(o,e)}n_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i_(e),e=e.sibling}function i_(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,rc(e)):Io(e);break;default:Io(e)}}function rc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Pn=o,a_(o,e)}n_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ga(8,i,i.return),rc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,rc(i));break;default:rc(i)}e=e.sibling}}function a_(e,i){for(;Pn!==null;){var s=Pn;switch(s.tag){case 0:case 11:case 15:Ga(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Pn=o;else t:for(s=e;Pn!==null;){o=Pn;var u=o.sibling,m=o.return;if(Zg(o),o===s){Pn=null;break t}if(u!==null){u.return=m,Pn=u;break t}Pn=m}}}var OS={getCacheForType:function(e){var i=Vn(Rn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},PS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,rn=null,Ce=null,Pe=0,je=0,hi=null,Xa=!1,ms=!1,Gf=!1,va=0,dn=0,Wa=0,Cr=0,Vf=0,Ai=0,gs=0,Bo=null,ii=null,kf=!1,Xf=0,sc=1/0,oc=null,qa=null,Fn=0,Ya=null,_s=null,vs=0,Wf=0,qf=null,r_=null,Fo=0,Yf=null;function di(){if((Ye&2)!==0&&Pe!==0)return Pe&-Pe;if(B.T!==null){var e=rs;return e!==0?e:th()}return pe()}function s_(){Ai===0&&(Ai=(Pe&536870912)===0||He?W():536870912);var e=bi.current;return e!==null&&(e.flags|=32),Ai}function pi(e,i,s){(e===rn&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(xs(e,0),ja(e,Pe,Ai,!1)),kt(e,s),((Ye&2)===0||e!==rn)&&(e===rn&&((Ye&2)===0&&(Cr|=s),dn===4&&ja(e,Pe,Ai,!1)),Ji(e))}function o_(e,i,s){if((Ye&6)!==0)throw Error(r(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),u=o?BS(e,i):Kf(e,i,!0),m=o;do{if(u===0){ms&&!o&&ja(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!zS(s)){u=Kf(e,i,!1),m=!1;continue}if(u===2){if(m=i,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var w=e;u=Bo;var k=w.current.memoizedState.isDehydrated;if(k&&(xs(w,T).flags|=256),T=Kf(w,T,!1),T!==2){if(Gf&&!k){w.errorRecoveryDisabledLanes|=m,Cr|=m,u=4;break t}m=ii,ii=u,m!==null&&(ii===null?ii=m:ii.push.apply(ii,m))}u=T}if(m=!1,u!==2)continue}}if(u===1){xs(e,0),ja(e,i,0,!0);break}t:{switch(o=e,m=u,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ja(o,i,Ai,!Xa);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Xf+300-Yt(),10<u)){if(ja(o,i,Ai,!Xa),Zt(o,0,!0)!==0)break t;o.timeoutHandle=z_(l_.bind(null,o,s,ii,oc,kf,i,Ai,Cr,gs,Xa,m,2,-0,0),u);break t}l_(o,s,ii,oc,kf,i,Ai,Cr,gs,Xa,m,0,-0,0)}}break}while(!0);Ji(e)}function l_(e,i,s,o,u,m,T,w,k,ot,Mt,Rt,ut,ht){if(e.timeoutHandle=-1,Rt=i.subtreeFlags,(Rt&8192||(Rt&16785408)===16785408)&&(qo={stylesheets:null,count:0,unsuspend:_y},e_(i),Rt=xy(),Rt!==null)){e.cancelPendingCommit=Rt(m_.bind(null,e,i,m,s,o,u,T,w,k,Mt,1,ut,ht)),ja(e,m,T,!ot);return}m_(e,i,m,s,o,u,T,w,k)}function zS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],m=u.getSnapshot;u=u.value;try{if(!li(m(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ja(e,i,s,o){i&=~Vf,i&=~Cr,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var m=31-It(u),T=1<<m;o[m]=-1,u&=~T}s!==0&&yt(e,s,i)}function lc(){return(Ye&6)===0?(Ho(0),!1):!0}function jf(){if(Ce!==null){if(je===0)var e=Ce.return;else e=Ce,ua=Mr=null,ff(e),fs=null,Do=0,e=Ce;for(;e!==null;)Gg(e.alternate,e),e=e.return;Ce=null}}function xs(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,ty(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),jf(),rn=e,Ce=s=oa(e.current,null),Pe=i,je=0,hi=null,Xa=!1,ms=Ct(e,i),Gf=!1,gs=Ai=Vf=Cr=Wa=dn=0,ii=Bo=null,kf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-It(o),m=1<<u;i|=e[u],o&=~m}return va=i,Dl(),s}function c_(e,i){Ae=null,B.H=Zl,i===yo||i===Fl?(i=Am(),je=3):i===Em?(i=Am(),je=4):je=i===Rg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hi=i,Ce===null&&(dn=1,tc(e,yi(i,e.current)))}function u_(){var e=B.H;return B.H=Zl,e===null?Zl:e}function f_(){var e=B.A;return B.A=OS,e}function Zf(){dn=4,Xa||(Pe&4194048)!==Pe&&bi.current!==null||(ms=!0),(Wa&134217727)===0&&(Cr&134217727)===0||rn===null||ja(rn,Pe,Ai,!1)}function Kf(e,i,s){var o=Ye;Ye|=2;var u=u_(),m=f_();(rn!==e||Pe!==i)&&(oc=null,xs(e,i)),i=!1;var T=dn;t:do try{if(je!==0&&Ce!==null){var w=Ce,k=hi;switch(je){case 8:jf(),T=6;break t;case 3:case 2:case 9:case 6:bi.current===null&&(i=!0);var ot=je;if(je=0,hi=null,Ss(e,w,k,ot),s&&ms){T=0;break t}break;default:ot=je,je=0,hi=null,Ss(e,w,k,ot)}}IS(),T=dn;break}catch(Mt){c_(e,Mt)}while(!0);return i&&e.shellSuspendCounter++,ua=Mr=null,Ye=o,B.H=u,B.A=m,Ce===null&&(rn=null,Pe=0,Dl()),T}function IS(){for(;Ce!==null;)h_(Ce)}function BS(e,i){var s=Ye;Ye|=2;var o=u_(),u=f_();rn!==e||Pe!==i?(oc=null,sc=Yt()+500,xs(e,i)):ms=Ct(e,i);t:do try{if(je!==0&&Ce!==null){i=Ce;var m=hi;e:switch(je){case 1:je=0,hi=null,Ss(e,i,m,1);break;case 2:case 9:if(Tm(m)){je=0,hi=null,d_(i);break}i=function(){je!==2&&je!==9||rn!==e||(je=7),Ji(e)},m.then(i,i);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:Tm(m)?(je=0,hi=null,d_(i)):(je=0,hi=null,Ss(e,i,m,7));break;case 5:var T=null;switch(Ce.tag){case 26:T=Ce.memoizedState;case 5:case 27:var w=Ce;if(!T||j_(T)){je=0,hi=null;var k=w.sibling;if(k!==null)Ce=k;else{var ot=w.return;ot!==null?(Ce=ot,cc(ot)):Ce=null}break e}}je=0,hi=null,Ss(e,i,m,5);break;case 6:je=0,hi=null,Ss(e,i,m,6);break;case 8:jf(),dn=6;break t;default:throw Error(r(462))}}FS();break}catch(Mt){c_(e,Mt)}while(!0);return ua=Mr=null,B.H=o,B.A=u,Ye=s,Ce!==null?0:(rn=null,Pe=0,Dl(),dn)}function FS(){for(;Ce!==null&&!he();)h_(Ce)}function h_(e){var i=Fg(e.alternate,e,va);e.memoizedProps=e.pendingProps,i===null?cc(e):Ce=i}function d_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Ng(s,i,i.pendingProps,i.type,void 0,Pe);break;case 11:i=Ng(s,i,i.pendingProps,i.type.render,i.ref,Pe);break;case 5:ff(i);default:Gg(s,i),i=Ce=pm(i,va),i=Fg(s,i,va)}e.memoizedProps=e.pendingProps,i===null?cc(e):Ce=i}function Ss(e,i,s,o){ua=Mr=null,ff(i),fs=null,Do=0;var u=i.return;try{if(CS(e,u,i,s,Pe)){dn=1,tc(e,yi(s,e.current)),Ce=null;return}}catch(m){if(u!==null)throw Ce=u,m;dn=1,tc(e,yi(s,e.current)),Ce=null;return}i.flags&32768?(He||o===1?e=!0:ms||(Pe&536870912)!==0?e=!1:(Xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=bi.current,o!==null&&o.tag===13&&(o.flags|=16384))),p_(i,e)):cc(i)}function cc(e){var i=e;do{if((i.flags&32768)!==0){p_(i,Xa);return}e=i.return;var s=DS(i.alternate,i,va);if(s!==null){Ce=s;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=e}while(i!==null);dn===0&&(dn=5)}function p_(e,i){do{var s=US(e.alternate,e);if(s!==null){s.flags&=32767,Ce=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=s}while(e!==null);dn=6,Ce=null}function m_(e,i,s,o,u,m,T,w,k){e.cancelPendingCommit=null;do uc();while(Fn!==0);if((Ye&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=Fu,wt(e,s,m,T,w,k),e===rn&&(Ce=rn=null,Pe=0),_s=i,Ya=e,vs=s,Wf=m,qf=u,r_=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kS(Gt,function(){return S_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=Z.p,Z.p=2,T=Ye,Ye|=4;try{LS(e,i,s)}finally{Ye=T,Z.p=u,B.T=o}}Fn=1,g_(),__(),v_()}}function g_(){if(Fn===1){Fn=0;var e=Ya,i=_s,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var o=Z.p;Z.p=2;var u=Ye;Ye|=4;try{Jg(i,e);var m=lh,T=am(e.containerInfo),w=m.focusedElem,k=m.selectionRange;if(T!==w&&w&&w.ownerDocument&&im(w.ownerDocument.documentElement,w)){if(k!==null&&Ou(w)){var ot=k.start,Mt=k.end;if(Mt===void 0&&(Mt=ot),"selectionStart"in w)w.selectionStart=ot,w.selectionEnd=Math.min(Mt,w.value.length);else{var Rt=w.ownerDocument||document,ut=Rt&&Rt.defaultView||window;if(ut.getSelection){var ht=ut.getSelection(),ge=w.textContent.length,de=Math.min(k.start,ge),Je=k.end===void 0?de:Math.min(k.end,ge);!ht.extend&&de>Je&&(T=Je,Je=de,de=T);var $=nm(w,de),j=nm(w,Je);if($&&j&&(ht.rangeCount!==1||ht.anchorNode!==$.node||ht.anchorOffset!==$.offset||ht.focusNode!==j.node||ht.focusOffset!==j.offset)){var at=Rt.createRange();at.setStart($.node,$.offset),ht.removeAllRanges(),de>Je?(ht.addRange(at),ht.extend(j.node,j.offset)):(at.setEnd(j.node,j.offset),ht.addRange(at))}}}}for(Rt=[],ht=w;ht=ht.parentNode;)ht.nodeType===1&&Rt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Rt.length;w++){var bt=Rt[w];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}Mc=!!oh,lh=oh=null}finally{Ye=u,Z.p=o,B.T=s}}e.current=i,Fn=2}}function __(){if(Fn===2){Fn=0;var e=Ya,i=_s,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var o=Z.p;Z.p=2;var u=Ye;Ye|=4;try{jg(e,i.alternate,i)}finally{Ye=u,Z.p=o,B.T=s}}Fn=3}}function v_(){if(Fn===4||Fn===3){Fn=0,re();var e=Ya,i=_s,s=vs,o=r_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Fn=5:(Fn=0,_s=Ya=null,x_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(qa=null),_e(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(gt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,u=Z.p,Z.p=2,B.T=null;try{for(var m=e.onRecoverableError,T=0;T<o.length;T++){var w=o[T];m(w.value,{componentStack:w.stack})}}finally{B.T=i,Z.p=u}}(vs&3)!==0&&uc(),Ji(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===Yf?Fo++:(Fo=0,Yf=e):Fo=0,Ho(0)}}function x_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,xo(i)))}function uc(e){return g_(),__(),v_(),S_()}function S_(){if(Fn!==5)return!1;var e=Ya,i=Wf;Wf=0;var s=_e(vs),o=B.T,u=Z.p;try{Z.p=32>s?32:s,B.T=null,s=qf,qf=null;var m=Ya,T=vs;if(Fn=0,_s=Ya=null,vs=0,(Ye&6)!==0)throw Error(r(331));var w=Ye;if(Ye|=4,i_(m.current),t_(m,m.current,T,s),Ye=w,Ho(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(gt,m)}catch{}return!0}finally{Z.p=u,B.T=o,x_(e,i)}}function y_(e,i,s){i=yi(s,i),i=bf(e.stateNode,i,2),e=Ia(e,i,2),e!==null&&(kt(e,2),Ji(e))}function nn(e,i,s){if(e.tag===3)y_(e,e,s);else for(;i!==null;){if(i.tag===3){y_(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=yi(s,e),s=bg(2),o=Ia(i,s,2),o!==null&&(Ag(s,o,i,e),kt(o,2),Ji(o));break}}i=i.return}}function Qf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new PS;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Gf=!0,u.add(s),e=HS.bind(null,e,i,s),i.then(e,e))}function HS(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,rn===e&&(Pe&s)===s&&(dn===4||dn===3&&(Pe&62914560)===Pe&&300>Yt()-Xf?(Ye&2)===0&&xs(e,0):Vf|=s,gs===Pe&&(gs=0)),Ji(e)}function M_(e,i){i===0&&(i=Bt()),e=es(e,i),e!==null&&(kt(e,i),Ji(e))}function GS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),M_(e,s)}function VS(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),M_(e,s)}function kS(e,i){return ie(e,i)}var fc=null,ys=null,Jf=!1,hc=!1,$f=!1,wr=0;function Ji(e){e!==ys&&e.next===null&&(ys===null?fc=ys=e:ys=ys.next=e),hc=!0,Jf||(Jf=!0,WS())}function Ho(e,i){if(!$f&&hc){$f=!0;do for(var s=!1,o=fc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var m=0;else{var T=o.suspendedLanes,w=o.pingedLanes;m=(1<<31-It(42|e)+1)-1,m&=u&~(T&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,A_(o,m))}else m=Pe,m=Zt(o,o===rn?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Ct(o,m)||(s=!0,A_(o,m));o=o.next}while(s);$f=!1}}function XS(){E_()}function E_(){hc=Jf=!1;var e=0;wr!==0&&($S()&&(e=wr),wr=0);for(var i=Yt(),s=null,o=fc;o!==null;){var u=o.next,m=T_(o,i);m===0?(o.next=null,s===null?fc=u:s.next=u,u===null&&(ys=s)):(s=o,(e!==0||(m&3)!==0)&&(hc=!0)),o=u}Ho(e)}function T_(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-It(m),w=1<<T,k=u[T];k===-1?((w&s)===0||(w&o)!==0)&&(u[T]=te(w,i)):k<=i&&(e.expiredLanes|=w),m&=~w}if(i=rn,s=Pe,s=Zt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(je===2||je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&G(o),_e(s)){case 2:case 8:s=Lt;break;case 32:s=Gt;break;case 268435456:s=F;break;default:s=Gt}return o=b_.bind(null,e),s=ie(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&G(o),e.callbackPriority=2,e.callbackNode=null,2}function b_(e,i){if(Fn!==0&&Fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(uc()&&e.callbackNode!==s)return null;var o=Pe;return o=Zt(e,e===rn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(o_(e,o,i),T_(e,Yt()),e.callbackNode!=null&&e.callbackNode===s?b_.bind(null,e):null)}function A_(e,i){if(uc())return null;o_(e,i,!0)}function WS(){ey(function(){(Ye&6)!==0?ie(Qt,XS):E_()})}function th(){return wr===0&&(wr=W()),wr}function R_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(""+e)}function C_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function qS(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var m=R_((u[Ve]||null).action),T=o.submitter;T&&(i=(i=T[Ve]||null)?R_(i.formAction):T.getAttribute("formAction"),i!==null&&(m=i,T=null));var w=new Rl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wr!==0){var k=T?C_(u,T):new FormData(u);Sf(s,{pending:!0,data:k,method:u.method,action:m},null,k)}}else typeof m=="function"&&(w.preventDefault(),k=T?C_(u,T):new FormData(u),Sf(s,{pending:!0,data:k,method:u.method,action:m},m,k))},currentTarget:u}]})}}for(var eh=0;eh<Bu.length;eh++){var nh=Bu[eh],YS=nh.toLowerCase(),jS=nh[0].toUpperCase()+nh.slice(1);zi(YS,"on"+jS)}zi(om,"onAnimationEnd"),zi(lm,"onAnimationIteration"),zi(cm,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(fS,"onTransitionRun"),zi(hS,"onTransitionStart"),zi(dS,"onTransitionCancel"),zi(um,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function w_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var m=void 0;if(i)for(var T=o.length-1;0<=T;T--){var w=o[T],k=w.instance,ot=w.currentTarget;if(w=w.listener,k!==m&&u.isPropagationStopped())break t;m=w,u.currentTarget=ot;try{m(u)}catch(Mt){$l(Mt)}u.currentTarget=null,m=k}else for(T=0;T<o.length;T++){if(w=o[T],k=w.instance,ot=w.currentTarget,w=w.listener,k!==m&&u.isPropagationStopped())break t;m=w,u.currentTarget=ot;try{m(u)}catch(Mt){$l(Mt)}u.currentTarget=null,m=k}}}}function we(e,i){var s=i[Yn];s===void 0&&(s=i[Yn]=new Set);var o=e+"__bubble";s.has(o)||(D_(i,e,2,!1),s.add(o))}function ih(e,i,s){var o=0;i&&(o|=4),D_(s,e,o,i)}var dc="_reactListening"+Math.random().toString(36).slice(2);function ah(e){if(!e[dc]){e[dc]=!0,gn.forEach(function(s){s!=="selectionchange"&&(ZS.has(s)||ih(s,!1,e),ih(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[dc]||(i[dc]=!0,ih("selectionchange",!1,i))}}function D_(e,i,s,o){switch(t0(i)){case 2:var u=My;break;case 8:u=Ey;break;default:u=vh}s=u.bind(null,i,s,e),u=void 0,!bu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function rh(e,i,s,o,u){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var T=o.tag;if(T===3||T===4){var w=o.stateNode.containerInfo;if(w===u)break;if(T===4)for(T=o.return;T!==null;){var k=T.tag;if((k===3||k===4)&&T.stateNode.containerInfo===u)return;T=T.return}for(;w!==null;){if(T=mn(w),T===null)return;if(k=T.tag,k===5||k===6||k===26||k===27){o=m=T;continue t}w=w.parentNode}}o=o.return}Ip(function(){var ot=m,Mt=Eu(s),Rt=[];t:{var ut=fm.get(e);if(ut!==void 0){var ht=Rl,ge=e;switch(e){case"keypress":if(bl(s)===0)break t;case"keydown":case"keyup":ht=kx;break;case"focusin":ge="focus",ht=wu;break;case"focusout":ge="blur",ht=wu;break;case"beforeblur":case"afterblur":ht=wu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=qx;break;case om:case lm:case cm:ht=Ox;break;case um:ht=jx;break;case"scroll":case"scrollend":ht=wx;break;case"wheel":ht=Kx;break;case"copy":case"cut":case"paste":ht=zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Vp;break;case"toggle":case"beforetoggle":ht=Jx}var de=(i&4)!==0,Je=!de&&(e==="scroll"||e==="scrollend"),$=de?ut!==null?ut+"Capture":null:ut;de=[];for(var j=ot,at;j!==null;){var bt=j;if(at=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||at===null||$===null||(bt=ro(j,$),bt!=null&&de.push(Vo(j,bt,at))),Je)break;j=j.return}0<de.length&&(ut=new ht(ut,ge,null,s,Mt),Rt.push({event:ut,listeners:de}))}}if((i&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ut&&s!==Mu&&(ge=s.relatedTarget||s.fromElement)&&(mn(ge)||ge[Ze]))break t;if((ht||ut)&&(ut=Mt.window===Mt?Mt:(ut=Mt.ownerDocument)?ut.defaultView||ut.parentWindow:window,ht?(ge=s.relatedTarget||s.toElement,ht=ot,ge=ge?mn(ge):null,ge!==null&&(Je=c(ge),de=ge.tag,ge!==Je||de!==5&&de!==27&&de!==6)&&(ge=null)):(ht=null,ge=ot),ht!==ge)){if(de=Hp,bt="onMouseLeave",$="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(de=Vp,bt="onPointerLeave",$="onPointerEnter",j="pointer"),Je=ht==null?ut:yn(ht),at=ge==null?ut:yn(ge),ut=new de(bt,j+"leave",ht,s,Mt),ut.target=Je,ut.relatedTarget=at,bt=null,mn(Mt)===ot&&(de=new de($,j+"enter",ge,s,Mt),de.target=at,de.relatedTarget=Je,bt=de),Je=bt,ht&&ge)e:{for(de=ht,$=ge,j=0,at=de;at;at=Ms(at))j++;for(at=0,bt=$;bt;bt=Ms(bt))at++;for(;0<j-at;)de=Ms(de),j--;for(;0<at-j;)$=Ms($),at--;for(;j--;){if(de===$||$!==null&&de===$.alternate)break e;de=Ms(de),$=Ms($)}de=null}else de=null;ht!==null&&U_(Rt,ut,ht,de,!1),ge!==null&&Je!==null&&U_(Rt,Je,ge,de,!0)}}t:{if(ut=ot?yn(ot):window,ht=ut.nodeName&&ut.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ut.type==="file")var ne=Kp;else if(jp(ut))if(Qp)ne=lS;else{ne=sS;var Re=rS}else ht=ut.nodeName,!ht||ht.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?ot&&yu(ot.elementType)&&(ne=Kp):ne=oS;if(ne&&(ne=ne(e,ot))){Zp(Rt,ne,s,Mt);break t}Re&&Re(e,ut,ot),e==="focusout"&&ot&&ut.type==="number"&&ot.memoizedProps.value!=null&&Nn(ut,"number",ut.value)}switch(Re=ot?yn(ot):window,e){case"focusin":(jp(Re)||Re.contentEditable==="true")&&(Jr=Re,Pu=ot,po=null);break;case"focusout":po=Pu=Jr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,rm(Rt,s,Mt);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":rm(Rt,s,Mt)}var ue;if(Uu)t:{switch(e){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Qr?qp(e,s)&&(me="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(me="onCompositionStart");me&&(kp&&s.locale!=="ko"&&(Qr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Qr&&(ue=Bp()):(Na=Mt,Au="value"in Na?Na.value:Na.textContent,Qr=!0)),Re=pc(ot,me),0<Re.length&&(me=new Gp(me,e,null,s,Mt),Rt.push({event:me,listeners:Re}),ue?me.data=ue:(ue=Yp(s),ue!==null&&(me.data=ue)))),(ue=tS?eS(e,s):nS(e,s))&&(me=pc(ot,"onBeforeInput"),0<me.length&&(Re=new Gp("onBeforeInput","beforeinput",null,s,Mt),Rt.push({event:Re,listeners:me}),Re.data=ue)),qS(Rt,e,ot,s,Mt)}w_(Rt,i)})}function Vo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function pc(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,m=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||m===null||(u=ro(e,s),u!=null&&o.unshift(Vo(e,u,m)),u=ro(e,i),u!=null&&o.push(Vo(e,u,m))),e.tag===3)return o;e=e.return}return[]}function Ms(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U_(e,i,s,o,u){for(var m=i._reactName,T=[];s!==null&&s!==o;){var w=s,k=w.alternate,ot=w.stateNode;if(w=w.tag,k!==null&&k===o)break;w!==5&&w!==26&&w!==27||ot===null||(k=ot,u?(ot=ro(s,m),ot!=null&&T.unshift(Vo(s,ot,k))):u||(ot=ro(s,m),ot!=null&&T.push(Vo(s,ot,k)))),s=s.return}T.length!==0&&e.push({event:i,listeners:T})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function L_(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(QS,"")}function N_(e,i){return i=L_(i),L_(e)===i}function mc(){}function Qe(e,i,s,o,u,m){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Si(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Si(e,""+o);break;case"className":Ht(e,"class",o);break;case"tabIndex":Ht(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(e,s,o);break;case"style":Pp(e,o,m);break;case"data":if(i!=="object"){Ht(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=El(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Qe(e,i,"name",u.name,u,null),Qe(e,i,"formEncType",u.formEncType,u,null),Qe(e,i,"formMethod",u.formMethod,u,null),Qe(e,i,"formTarget",u.formTarget,u,null)):(Qe(e,i,"encType",u.encType,u,null),Qe(e,i,"method",u.method,u,null),Qe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=El(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=mc);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=El(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":we("beforetoggle",e),we("toggle",e),Dt(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Dt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Rx.get(s)||s,Dt(e,s,o))}}function sh(e,i,s,o,u,m){switch(s){case"style":Pp(e,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Si(e,o):(typeof o=="number"||typeof o=="bigint")&&Si(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_n.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),m=e[Ve]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,u),typeof o=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Dt(e,s,o)}}}function Hn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,u=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qe(e,i,m,T,s,null)}}u&&Qe(e,i,"srcSet",s.srcSet,s,null),o&&Qe(e,i,"src",s.src,s,null);return;case"input":we("invalid",e);var w=m=T=u=null,k=null,ot=null;for(o in s)if(s.hasOwnProperty(o)){var Mt=s[o];if(Mt!=null)switch(o){case"name":u=Mt;break;case"type":T=Mt;break;case"checked":k=Mt;break;case"defaultChecked":ot=Mt;break;case"value":m=Mt;break;case"defaultValue":w=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(r(137,i));break;default:Qe(e,i,o,Mt,s,null)}}qe(e,m,w,k,ot,T,u,!1),Oe(e);return;case"select":we("invalid",e),o=T=m=null;for(u in s)if(s.hasOwnProperty(u)&&(w=s[u],w!=null))switch(u){case"value":m=w;break;case"defaultValue":T=w;break;case"multiple":o=w;default:Qe(e,i,u,w,s,null)}i=m,s=T,e.multiple=!!o,i!=null?vn(e,!!o,i,!1):s!=null&&vn(e,!!o,s,!0);return;case"textarea":we("invalid",e),m=u=o=null;for(T in s)if(s.hasOwnProperty(T)&&(w=s[T],w!=null))switch(T){case"value":o=w;break;case"defaultValue":u=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Qe(e,i,T,w,s,null)}An(e,o,u,m),Oe(e);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(o=s[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(e,i,k,o,s,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Go.length;o++)we(Go[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in s)if(s.hasOwnProperty(ot)&&(o=s[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qe(e,i,ot,o,s,null)}return;default:if(yu(i)){for(Mt in s)s.hasOwnProperty(Mt)&&(o=s[Mt],o!==void 0&&sh(e,i,Mt,o,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(o=s[w],o!=null&&Qe(e,i,w,o,s,null))}function JS(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,m=null,T=null,w=null,k=null,ot=null,Mt=null;for(ht in s){var Rt=s[ht];if(s.hasOwnProperty(ht)&&Rt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":k=Rt;default:o.hasOwnProperty(ht)||Qe(e,i,ht,null,o,Rt)}}for(var ut in o){var ht=o[ut];if(Rt=s[ut],o.hasOwnProperty(ut)&&(ht!=null||Rt!=null))switch(ut){case"type":m=ht;break;case"name":u=ht;break;case"checked":ot=ht;break;case"defaultChecked":Mt=ht;break;case"value":T=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,i));break;default:ht!==Rt&&Qe(e,i,ut,ht,o,Rt)}}Oi(e,T,w,k,ot,Mt,m,u);return;case"select":ht=T=w=ut=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ht=k;default:o.hasOwnProperty(m)||Qe(e,i,m,null,o,k)}for(u in o)if(m=o[u],k=s[u],o.hasOwnProperty(u)&&(m!=null||k!=null))switch(u){case"value":ut=m;break;case"defaultValue":w=m;break;case"multiple":T=m;default:m!==k&&Qe(e,i,u,m,o,k)}i=w,s=T,o=ht,ut!=null?vn(e,!!s,ut,!1):!!o!=!!s&&(i!=null?vn(e,!!s,i,!0):vn(e,!!s,s?[]:"",!1));return;case"textarea":ht=ut=null;for(w in s)if(u=s[w],s.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Qe(e,i,w,null,o,u)}for(T in o)if(u=o[T],m=s[T],o.hasOwnProperty(T)&&(u!=null||m!=null))switch(T){case"value":ut=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==m&&Qe(e,i,T,u,o,m)}Mn(e,ut,ht);return;case"option":for(var ge in s)if(ut=s[ge],s.hasOwnProperty(ge)&&ut!=null&&!o.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:Qe(e,i,ge,null,o,ut)}for(k in o)if(ut=o[k],ht=s[k],o.hasOwnProperty(k)&&ut!==ht&&(ut!=null||ht!=null))switch(k){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Qe(e,i,k,ut,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in s)ut=s[de],s.hasOwnProperty(de)&&ut!=null&&!o.hasOwnProperty(de)&&Qe(e,i,de,null,o,ut);for(ot in o)if(ut=o[ot],ht=s[ot],o.hasOwnProperty(ot)&&ut!==ht&&(ut!=null||ht!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,i));break;default:Qe(e,i,ot,ut,o,ht)}return;default:if(yu(i)){for(var Je in s)ut=s[Je],s.hasOwnProperty(Je)&&ut!==void 0&&!o.hasOwnProperty(Je)&&sh(e,i,Je,void 0,o,ut);for(Mt in o)ut=o[Mt],ht=s[Mt],!o.hasOwnProperty(Mt)||ut===ht||ut===void 0&&ht===void 0||sh(e,i,Mt,ut,o,ht);return}}for(var $ in s)ut=s[$],s.hasOwnProperty($)&&ut!=null&&!o.hasOwnProperty($)&&Qe(e,i,$,null,o,ut);for(Rt in o)ut=o[Rt],ht=s[Rt],!o.hasOwnProperty(Rt)||ut===ht||ut==null&&ht==null||Qe(e,i,Rt,ut,o,ht)}var oh=null,lh=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function O_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ch(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uh=null;function $S(){var e=window.event;return e&&e.type==="popstate"?e===uh?!1:(uh=e,!0):(uh=null,!1)}var z_=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(e){return I_.resolve(null).then(e).catch(ny)}:z_;function ny(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function B_(e,i){var s=i,o=0,u=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<o&&8>o){s=o;var T=e.ownerDocument;if(s&1&&ko(T.documentElement),s&2&&ko(T.body),s&4)for(s=T.head,ko(s),T=s.firstChild;T;){var w=T.nextSibling,k=T.nodeName;T[$n]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=w}}if(u===0){e.removeChild(m),Qo(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:o=s.charCodeAt(0)-48;else o=0;s=m}while(s);Qo(i)}function fh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":fh(s),Ln(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function iy(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[$n])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function ay(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Bi(e.nextSibling),e===null))return null;return e}function hh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ry(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var dh=null;function F_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function H_(e,i,s){switch(i=gc(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ko(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ln(e)}var Ri=new Map,G_=new Set;function _c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=Z.d;Z.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:dy,S:hy,M:py};function sy(){var e=xa.f(),i=lc();return e||i}function oy(e){var i=Xe(e);i!==null&&i.tag===5&&i.type==="form"?og(i):xa.r(e)}var Es=typeof document>"u"?null:document;function V_(e,i,s){var o=Es;if(o&&typeof i=="string"&&i){var u=ke(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),G_.has(u)||(G_.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Hn(i,"link",e),en(i),o.head.appendChild(i)))}}function ly(e){xa.D(e),V_("dns-prefetch",e,null)}function cy(e,i){xa.C(e,i),V_("preconnect",e,i)}function uy(e,i,s){xa.L(e,i,s);var o=Es;if(o&&e&&i){var u='link[rel="preload"][as="'+ke(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+ke(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+ke(s.imageSizes)+'"]')):u+='[href="'+ke(e)+'"]';var m=u;switch(i){case"style":m=Ts(e);break;case"script":m=bs(e)}Ri.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ri.set(m,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Xo(m))||i==="script"&&o.querySelector(Wo(m))||(i=o.createElement("link"),Hn(i,"link",e),en(i),o.head.appendChild(i)))}}function fy(e,i){xa.m(e,i);var s=Es;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ke(o)+'"][href="'+ke(e)+'"]',m=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=bs(e)}if(!Ri.has(m)&&(e=_({rel:"modulepreload",href:e},i),Ri.set(m,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(m)))return}o=s.createElement("link"),Hn(o,"link",e),en(o),s.head.appendChild(o)}}}function hy(e,i,s){xa.S(e,i,s);var o=Es;if(o&&e){var u=jn(o).hoistableStyles,m=Ts(e);i=i||"default";var T=u.get(m);if(!T){var w={loading:0,preload:null};if(T=o.querySelector(Xo(m)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ri.get(m))&&ph(e,s);var k=T=o.createElement("link");en(k),Hn(k,"link",e),k._p=new Promise(function(ot,Mt){k.onload=ot,k.onerror=Mt}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,vc(T,i,o)}T={type:"stylesheet",instance:T,count:1,state:w},u.set(m,T)}}}function dy(e,i){xa.X(e,i);var s=Es;if(s&&e){var o=jn(s).hoistableScripts,u=bs(e),m=o.get(u);m||(m=s.querySelector(Wo(u)),m||(e=_({src:e,async:!0},i),(i=Ri.get(u))&&mh(e,i),m=s.createElement("script"),en(m),Hn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(u,m))}}function py(e,i){xa.M(e,i);var s=Es;if(s&&e){var o=jn(s).hoistableScripts,u=bs(e),m=o.get(u);m||(m=s.querySelector(Wo(u)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Ri.get(u))&&mh(e,i),m=s.createElement("script"),en(m),Hn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(u,m))}}function k_(e,i,s,o){var u=(u=st.current)?_c(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ts(s.href),s=jn(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ts(s.href);var m=jn(u).hoistableStyles,T=m.get(e);if(T||(u=u.ownerDocument||u,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=u.querySelector(Xo(e)))&&!m._p&&(T.instance=m,T.state.loading=5),Ri.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ri.set(e,s),m||my(u,e,s,T.state))),i&&o===null)throw Error(r(528,""));return T}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=bs(s),s=jn(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ts(e){return'href="'+ke(e)+'"'}function Xo(e){return'link[rel="stylesheet"]['+e+"]"}function X_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function my(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Hn(i,"link",s),en(i),e.head.appendChild(i))}function bs(e){return'[src="'+ke(e)+'"]'}function Wo(e){return"script[async]"+e}function W_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ke(s.href)+'"]');if(o)return i.instance=o,en(o),o;var u=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),Hn(o,"style",u),vc(o,s.precedence,e),i.instance=o;case"stylesheet":u=Ts(s.href);var m=e.querySelector(Xo(u));if(m)return i.state.loading|=4,i.instance=m,en(m),m;o=X_(s),(u=Ri.get(u))&&ph(o,u),m=(e.ownerDocument||e).createElement("link"),en(m);var T=m;return T._p=new Promise(function(w,k){T.onload=w,T.onerror=k}),Hn(m,"link",o),i.state.loading|=4,vc(m,s.precedence,e),i.instance=m;case"script":return m=bs(s.src),(u=e.querySelector(Wo(m)))?(i.instance=u,en(u),u):(o=s,(u=Ri.get(m))&&(o=_({},s),mh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),Hn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,vc(o,s.precedence,e));return i.instance}function vc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,m=u,T=0;T<o.length;T++){var w=o[T];if(w.dataset.precedence===i)m=w;else if(m!==u)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function mh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var xc=null;function q_(e,i,s){if(xc===null){var o=new Map,u=xc=new Map;u.set(s,o)}else u=xc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var m=s[u];if(!(m[$n]||m[Nt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(i)||"";T=e+T;var w=o.get(T);w?w.push(m):o.set(T,[m])}}return o}function Y_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function gy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function j_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var qo=null;function _y(){}function vy(e,i,s){if(qo===null)throw Error(r(475));var o=qo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Ts(s.href),m=e.querySelector(Xo(u));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Sc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=m,en(m);return}m=e.ownerDocument||e,s=X_(s),(u=Ri.get(u))&&ph(s,u),m=m.createElement("link"),en(m);var T=m;T._p=new Promise(function(w,k){T.onload=w,T.onerror=k}),Hn(m,"link",s),i.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Sc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function xy(){if(qo===null)throw Error(r(475));var e=qo;return e.stylesheets&&e.count===0&&gh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)gh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function gh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(Sy,e),yc=null,Sc.call(e))}function Sy(e,i){if(!(i.state.loading&4)){var s=yc.get(e);if(s)var o=s.get(null);else{s=new Map,yc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<u.length;m++){var T=u[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),o=T)}o&&s.set(null,o)}u=i.instance,T=u.getAttribute("data-precedence"),m=s.get(T)||o,m===o&&s.set(null,u),s.set(T,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),m?m.parentNode.insertBefore(u,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Yo={$$typeof:R,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function yy(e,i,s,o,u,m,T,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Z_(e,i,s,o,u,m,T,w,k,ot,Mt,Rt){return e=new yy(e,i,s,T,w,k,ot,Rt),i=1,m===!0&&(i|=24),m=ci(3,null,null,i),e.current=m,m.stateNode=e,i=Ku(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:s,cache:i},tf(m),e}function K_(e){return e?(e=ns,e):ns}function Q_(e,i,s,o,u,m){u=K_(u),o.context===null?o.context=u:o.pendingContext=u,o=za(i),o.payload={element:s},m=m===void 0?null:m,m!==null&&(o.callback=m),s=Ia(e,o,i),s!==null&&(pi(s,e,i),Eo(s,e,i))}function J_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function _h(e,i){J_(e,i),(e=e.alternate)&&J_(e,i)}function $_(e){if(e.tag===13){var i=es(e,67108864);i!==null&&pi(i,e,67108864),_h(e,67108864)}}var Mc=!0;function My(e,i,s,o){var u=B.T;B.T=null;var m=Z.p;try{Z.p=2,vh(e,i,s,o)}finally{Z.p=m,B.T=u}}function Ey(e,i,s,o){var u=B.T;B.T=null;var m=Z.p;try{Z.p=8,vh(e,i,s,o)}finally{Z.p=m,B.T=u}}function vh(e,i,s,o){if(Mc){var u=xh(o);if(u===null)rh(e,i,o,Ec,s),e0(e,o);else if(by(u,e,i,s,o))o.stopPropagation();else if(e0(e,o),i&4&&-1<Ty.indexOf(e)){for(;u!==null;){var m=Xe(u);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=jt(m.pendingLanes);if(T!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var k=1<<31-It(T);w.entanglements[1]|=k,T&=~k}Ji(m),(Ye&6)===0&&(sc=Yt()+500,Ho(0))}}break;case 13:w=es(m,2),w!==null&&pi(w,m,2),lc(),_h(m,2)}if(m=xh(o),m===null&&rh(e,i,o,Ec,s),m===u)break;u=m}u!==null&&o.stopPropagation()}else rh(e,i,o,null,s)}}function xh(e){return e=Eu(e),Sh(e)}var Ec=null;function Sh(e){if(Ec=null,e=mn(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ec=e,null}function t0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case Qt:return 2;case Lt:return 8;case Gt:case fe:return 32;case F:return 268435456;default:return 32}default:return 32}}var yh=!1,Ka=null,Qa=null,Ja=null,jo=new Map,Zo=new Map,$a=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e0(e,i){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(i.pointerId)}}function Ko(e,i,s,o,u,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:m,targetContainers:[u]},i!==null&&(i=Xe(i),i!==null&&$_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function by(e,i,s,o,u){switch(i){case"focusin":return Ka=Ko(Ka,e,i,s,o,u),!0;case"dragenter":return Qa=Ko(Qa,e,i,s,o,u),!0;case"mouseover":return Ja=Ko(Ja,e,i,s,o,u),!0;case"pointerover":var m=u.pointerId;return jo.set(m,Ko(jo.get(m)||null,e,i,s,o,u)),!0;case"gotpointercapture":return m=u.pointerId,Zo.set(m,Ko(Zo.get(m)||null,e,i,s,o,u)),!0}return!1}function n0(e){var i=mn(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,an(e.priority,function(){if(s.tag===13){var o=di();o=se(o);var u=es(s,o);u!==null&&pi(u,s,o),_h(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=xh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Mu=o,s.target.dispatchEvent(o),Mu=null}else return i=Xe(s),i!==null&&$_(i),e.blockedOn=s,!1;i.shift()}return!0}function i0(e,i,s){Tc(e)&&s.delete(i)}function Ay(){yh=!1,Ka!==null&&Tc(Ka)&&(Ka=null),Qa!==null&&Tc(Qa)&&(Qa=null),Ja!==null&&Tc(Ja)&&(Ja=null),jo.forEach(i0),Zo.forEach(i0)}function bc(e,i){e.blockedOn===i&&(e.blockedOn=null,yh||(yh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ay)))}var Ac=null;function a0(e){Ac!==e&&(Ac=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Sh(o||s)===null)continue;break}var m=Xe(s);m!==null&&(e.splice(i,3),i-=3,Sf(m,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Qo(e){function i(k){return bc(k,e)}Ka!==null&&bc(Ka,e),Qa!==null&&bc(Qa,e),Ja!==null&&bc(Ja,e),jo.forEach(i),Zo.forEach(i);for(var s=0;s<$a.length;s++){var o=$a[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(s=$a[0],s.blockedOn===null);)n0(s),s.blockedOn===null&&$a.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],m=s[o+1],T=u[Ve]||null;if(typeof m=="function")T||a0(s);else if(T){var w=null;if(m&&m.hasAttribute("formAction")){if(u=m,T=m[Ve]||null)w=T.formAction;else if(Sh(u)!==null)continue}else w=T.action;typeof w=="function"?s[o+1]=w:(s.splice(o,3),o-=3),a0(s)}}}function Mh(e){this._internalRoot=e}Rc.prototype.render=Mh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=di();Q_(s,o,e,i,null,null)},Rc.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Q_(e.current,2,null,e,null,null),lc(),i[Ze]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var i=pe();e={blockedOn:null,target:e,priority:i};for(var s=0;s<$a.length&&i!==0&&i<$a[s].priority;s++);$a.splice(s,0,e),s===0&&n0(e)}};var r0=t.version;if(r0!=="19.1.0")throw Error(r(527,r0,"19.1.0"));Z.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{gt=Cc.inject(Ry),_t=Cc}catch{}}return $o.createRoot=function(e,i){if(!l(e))throw Error(r(299));var s=!1,o="",u=yg,m=Mg,T=Eg,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=Z_(e,1,!1,null,null,s,o,u,m,T,w,null),e[Ze]=i.current,ah(e),new Mh(i)},$o.hydrateRoot=function(e,i,s){if(!l(e))throw Error(r(299));var o=!1,u="",m=yg,T=Mg,w=Eg,k=null,ot=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(k=s.unstable_transitionCallbacks),s.formState!==void 0&&(ot=s.formState)),i=Z_(e,1,!0,i,s??null,o,u,m,T,w,k,ot),i.context=K_(null),s=i.current,o=di(),o=se(o),u=za(o),u.callback=null,Ia(s,u,o),s=o,i.current.lanes=s,kt(i,s),Ji(i),e[Ze]=i.current,ah(e),new Rc(i)},$o.version="19.1.0",$o}var m0;function Iy(){if(m0)return bh.exports;m0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),bh.exports=zy(),bh.exports}var By=Iy();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g0="popstate";function Fy(a={}){function t(r,l){let{pathname:c,search:f,hash:h}=r.location;return dd("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:cl(l)}return Gy(t,n,null,a)}function cn(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function Li(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hy(){return Math.random().toString(36).substring(2,10)}function _0(a,t){return{usr:a.state,key:a.key,idx:t}}function dd(a,t,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof t=="string"?to(t):t,state:n,key:t&&t.key||r||Hy()}}function cl({pathname:a="/",search:t="",hash:n=""}){return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function to(a){let t={};if(a){let n=a.indexOf("#");n>=0&&(t.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(t.search=a.substring(r),a=a.substring(0,r)),a&&(t.pathname=a)}return t}function Gy(a,t,n,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",p=null,d=_();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function _(){return(f.state||{idx:null}).idx}function v(){h="POP";let x=_(),g=x==null?null:x-d;d=x,p&&p({action:h,location:M.location,delta:g})}function S(x,g){h="PUSH";let N=dd(M.location,x,g);d=_()+1;let R=_0(N,d),C=M.createHref(N);try{f.pushState(R,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(C)}c&&p&&p({action:h,location:M.location,delta:1})}function y(x,g){h="REPLACE";let N=dd(M.location,x,g);d=_();let R=_0(N,d),C=M.createHref(N);f.replaceState(R,"",C),c&&p&&p({action:h,location:M.location,delta:0})}function E(x){return Vy(x)}let M={get action(){return h},get location(){return a(l,f)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(g0,v),p=x,()=>{l.removeEventListener(g0,v),p=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let g=E(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:S,replace:y,go(x){return f.go(x)}};return M}function Vy(a,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),cn(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:cl(a);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Nv(a,t,n="/"){return ky(a,t,n,!1)}function ky(a,t,n,r){let l=typeof t=="string"?to(t):t,c=La(l.pathname||"/",n);if(c==null)return null;let f=Ov(a);Xy(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let d=eM(c);h=$y(f[p],d,r)}return h}function Ov(a,t=[],n=[],r=""){let l=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(cn(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let d=Da([r,p.relativePath]),_=n.concat(p);c.children&&c.children.length>0&&(cn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Ov(c.children,t,_,d)),!(c.path==null&&!c.index)&&t.push({path:d,score:Qy(d,c.index),routesMeta:_})};return a.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let h of Pv(c.path))l(c,f,h)}),t}function Pv(a){let t=a.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Pv(r.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function Xy(a){a.sort((t,n)=>t.score!==n.score?n.score-t.score:Jy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Wy=/^:[\w-]+$/,qy=3,Yy=2,jy=1,Zy=10,Ky=-2,v0=a=>a==="*";function Qy(a,t){let n=a.split("/"),r=n.length;return n.some(v0)&&(r+=Ky),t&&(r+=Yy),n.filter(l=>!v0(l)).reduce((l,c)=>l+(Wy.test(c)?qy:c===""?jy:Zy),r)}function Jy(a,t){return a.length===t.length&&a.slice(0,-1).every((r,l)=>r===t[l])?a[a.length-1]-t[t.length-1]:0}function $y(a,t,n=!1){let{routesMeta:r}=a,l={},c="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],d=h===r.length-1,_=c==="/"?t:t.slice(c.length)||"/",v=fu({path:p.relativePath,caseSensitive:p.caseSensitive,end:d},_),S=p.route;if(!v&&d&&n&&!r[r.length-1].route.index&&(v=fu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Da([c,v.pathname]),pathnameBase:rM(Da([c,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(c=Da([c,v.pathnameBase]))}return f}function fu(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=tM(a.path,a.caseSensitive,a.end),l=t.match(n);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((d,{paramName:_,isOptional:v},S)=>{if(_==="*"){let E=h[S]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const y=h[S];return v&&!y?d[_]=void 0:d[_]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:a}}function tM(a,t=!1,n=!0){Li(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function eM(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),a}}function La(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function nM(a,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof a=="string"?to(a):a;return{pathname:n?n.startsWith("/")?n:iM(n,t):t,search:sM(r),hash:oM(l)}}function iM(a,t){let n=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function wh(a,t,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function aM(a){return a.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cp(a){let t=aM(a);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function up(a,t,n,r=!1){let l;typeof a=="string"?l=to(a):(l={...a},cn(!l.pathname||!l.pathname.includes("?"),wh("?","pathname","search",l)),cn(!l.pathname||!l.pathname.includes("#"),wh("#","pathname","hash",l)),cn(!l.search||!l.search.includes("#"),wh("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=n;else{let v=t.length-1;if(!r&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),v-=1;l.pathname=S.join("/")}h=v>=0?t[v]:"/"}let p=nM(l,h),d=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(d||_)&&(p.pathname+="/"),p}var Da=a=>a.join("/").replace(/\/\/+/g,"/"),rM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),sM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,oM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function lM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var zv=["POST","PUT","PATCH","DELETE"];new Set(zv);var cM=["GET",...zv];new Set(cM);var eo=mt.createContext(null);eo.displayName="DataRouter";var pu=mt.createContext(null);pu.displayName="DataRouterState";mt.createContext(!1);var Iv=mt.createContext({isTransitioning:!1});Iv.displayName="ViewTransition";var uM=mt.createContext(new Map);uM.displayName="Fetchers";var fM=mt.createContext(null);fM.displayName="Await";var qi=mt.createContext(null);qi.displayName="Navigation";var gl=mt.createContext(null);gl.displayName="Location";var aa=mt.createContext({outlet:null,matches:[],isDataRoute:!1});aa.displayName="Route";var fp=mt.createContext(null);fp.displayName="RouteError";function hM(a,{relative:t}={}){cn(no(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=mt.useContext(qi),{hash:l,pathname:c,search:f}=_l(a,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:Da([n,c])),r.createHref({pathname:h,search:f,hash:l})}function no(){return mt.useContext(gl)!=null}function ra(){return cn(no(),"useLocation() may be used only in the context of a <Router> component."),mt.useContext(gl).location}var Bv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fv(a){mt.useContext(qi).static||mt.useLayoutEffect(a)}function hp(){let{isDataRoute:a}=mt.useContext(aa);return a?bM():dM()}function dM(){cn(no(),"useNavigate() may be used only in the context of a <Router> component.");let a=mt.useContext(eo),{basename:t,navigator:n}=mt.useContext(qi),{matches:r}=mt.useContext(aa),{pathname:l}=ra(),c=JSON.stringify(cp(r)),f=mt.useRef(!1);return Fv(()=>{f.current=!0}),mt.useCallback((p,d={})=>{if(Li(f.current,Bv),!f.current)return;if(typeof p=="number"){n.go(p);return}let _=up(p,JSON.parse(c),l,d.relative==="path");a==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:Da([t,_.pathname])),(d.replace?n.replace:n.push)(_,d.state,d)},[t,n,c,l,a])}mt.createContext(null);function _l(a,{relative:t}={}){let{matches:n}=mt.useContext(aa),{pathname:r}=ra(),l=JSON.stringify(cp(n));return mt.useMemo(()=>up(a,JSON.parse(l),r,t==="path"),[a,l,r,t])}function pM(a,t){return Hv(a,t)}function Hv(a,t,n,r){cn(no(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=mt.useContext(qi),{matches:c}=mt.useContext(aa),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",d=f?f.pathnameBase:"/",_=f&&f.route;{let g=_&&_.path||"";Gv(p,!_||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let v=ra(),S;if(t){let g=typeof t=="string"?to(t):t;cn(d==="/"||g.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${g.pathname}" was given in the \`location\` prop.`),S=g}else S=v;let y=S.pathname||"/",E=y;if(d!=="/"){let g=d.replace(/^\//,"").split("/");E="/"+y.replace(/^\//,"").split("/").slice(g.length).join("/")}let M=Nv(a,{pathname:E});Li(_||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Li(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=xM(M&&M.map(g=>Object.assign({},g,{params:Object.assign({},h,g.params),pathname:Da([d,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?d:Da([d,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),c,n,r);return t&&x?mt.createElement(gl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function mM(){let a=TM(),t=lM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=mt.createElement(mt.Fragment,null,mt.createElement("p",null,"💿 Hey developer 👋"),mt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",mt.createElement("code",{style:c},"ErrorBoundary")," or"," ",mt.createElement("code",{style:c},"errorElement")," prop on your route.")),mt.createElement(mt.Fragment,null,mt.createElement("h2",null,"Unexpected Application Error!"),mt.createElement("h3",{style:{fontStyle:"italic"}},t),n?mt.createElement("pre",{style:l},n):null,f)}var gM=mt.createElement(mM,null),_M=class extends mt.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,t){return t.location!==a.location||t.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:t.error,location:t.location,revalidation:a.revalidation||t.revalidation}}componentDidCatch(a,t){console.error("React Router caught the following error during render",a,t)}render(){return this.state.error!==void 0?mt.createElement(aa.Provider,{value:this.props.routeContext},mt.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vM({routeContext:a,match:t,children:n}){let r=mt.useContext(eo);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),mt.createElement(aa.Provider,{value:a},n)}function xM(a,t=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let l=a,c=n?.errors;if(c!=null){let p=l.findIndex(d=>d.route.id&&c?.[d.route.id]!==void 0);cn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let d=l[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=p),d.route.id){let{loaderData:_,errors:v}=n,S=d.route.loader&&!_.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||S){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,d,_)=>{let v,S=!1,y=null,E=null;n&&(v=c&&d.route.id?c[d.route.id]:void 0,y=d.route.errorElement||gM,f&&(h<0&&_===0?(Gv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):h===_&&(S=!0,E=d.route.hydrateFallbackElement||null)));let M=t.concat(l.slice(0,_+1)),x=()=>{let g;return v?g=y:S?g=E:d.route.Component?g=mt.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,mt.createElement(vM,{match:d,routeContext:{outlet:p,matches:M,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||_===0)?mt.createElement(_M,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:x(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):x()},null)}function dp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SM(a){let t=mt.useContext(eo);return cn(t,dp(a)),t}function yM(a){let t=mt.useContext(pu);return cn(t,dp(a)),t}function MM(a){let t=mt.useContext(aa);return cn(t,dp(a)),t}function pp(a){let t=MM(a),n=t.matches[t.matches.length-1];return cn(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function EM(){return pp("useRouteId")}function TM(){let a=mt.useContext(fp),t=yM("useRouteError"),n=pp("useRouteError");return a!==void 0?a:t.errors?.[n]}function bM(){let{router:a}=SM("useNavigate"),t=pp("useNavigate"),n=mt.useRef(!1);return Fv(()=>{n.current=!0}),mt.useCallback(async(l,c={})=>{Li(n.current,Bv),n.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:t,...c}))},[a,t])}var x0={};function Gv(a,t,n){!t&&!x0[a]&&(x0[a]=!0,Li(!1,n))}mt.memo(AM);function AM({routes:a,future:t,state:n}){return Hv(a,void 0,n,t)}function RM({to:a,replace:t,state:n,relative:r}){cn(no(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=mt.useContext(qi);Li(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=mt.useContext(aa),{pathname:f}=ra(),h=hp(),p=up(a,cp(c),f,r==="path"),d=JSON.stringify(p);return mt.useEffect(()=>{h(JSON.parse(d),{replace:t,state:n,relative:r})},[h,d,r,t,n]),null}function eu(a){cn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CM({basename:a="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:c=!1}){cn(!no(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=mt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof n=="string"&&(n=to(n));let{pathname:p="/",search:d="",hash:_="",state:v=null,key:S="default"}=n,y=mt.useMemo(()=>{let E=La(p,f);return E==null?null:{location:{pathname:E,search:d,hash:_,state:v,key:S},navigationType:r}},[f,p,d,_,v,S,r]);return Li(y!=null,`<Router basename="${f}"> is not able to match the URL "${p}${d}${_}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:mt.createElement(qi.Provider,{value:h},mt.createElement(gl.Provider,{children:t,value:y}))}function wM({children:a,location:t}){return pM(pd(a),t)}function pd(a,t=[]){let n=[];return mt.Children.forEach(a,(r,l)=>{if(!mt.isValidElement(r))return;let c=[...t,l];if(r.type===mt.Fragment){n.push.apply(n,pd(r.props.children,c));return}cn(r.type===eu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),cn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=pd(r.props.children,c)),n.push(f)}),n}var nu="get",iu="application/x-www-form-urlencoded";function mu(a){return a!=null&&typeof a.tagName=="string"}function DM(a){return mu(a)&&a.tagName.toLowerCase()==="button"}function UM(a){return mu(a)&&a.tagName.toLowerCase()==="form"}function LM(a){return mu(a)&&a.tagName.toLowerCase()==="input"}function NM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function OM(a,t){return a.button===0&&(!t||t==="_self")&&!NM(a)}function md(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((t,n)=>{let r=a[n];return t.concat(Array.isArray(r)?r.map(l=>[n,l]):[[n,r]])},[]))}function PM(a,t){let n=md(a);return t&&t.forEach((r,l)=>{n.has(l)||t.getAll(l).forEach(c=>{n.append(l,c)})}),n}var wc=null;function zM(){if(wc===null)try{new FormData(document.createElement("form"),0),wc=!1}catch{wc=!0}return wc}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dh(a){return a!=null&&!IM.has(a)?(Li(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):a}function BM(a,t){let n,r,l,c,f;if(UM(a)){let h=a.getAttribute("action");r=h?La(h,t):null,n=a.getAttribute("method")||nu,l=Dh(a.getAttribute("enctype"))||iu,c=new FormData(a)}else if(DM(a)||LM(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(r=p?La(p,t):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||nu,l=Dh(a.getAttribute("formenctype"))||Dh(h.getAttribute("enctype"))||iu,c=new FormData(h,a),!zM()){let{name:d,type:_,value:v}=a;if(_==="image"){let S=d?`${d}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else d&&c.append(d,v)}}else{if(mu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=nu,r=null,l=iu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mp(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function FM(a,t,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&La(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function HM(a,t){if(a.id in t)return t[a.id];try{let n=await import(a.module);return t[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function VM(a,t,n){let r=await Promise.all(a.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await HM(c,n);return f.links?f.links():[]}return[]}));return qM(r.flat(1).filter(GM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function S0(a,t,n,r,l,c){let f=(p,d)=>n[d]?p.route.id!==n[d].route.id:!0,h=(p,d)=>n[d].pathname!==p.pathname||n[d].route.path?.endsWith("*")&&n[d].params["*"]!==p.params["*"];return c==="assets"?t.filter((p,d)=>f(p,d)||h(p,d)):c==="data"?t.filter((p,d)=>{let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(f(p,d)||h(p,d))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function kM(a,t,{includeHydrateFallback:n}={}){return XM(a.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function XM(a){return[...new Set(a)]}function WM(a){let t={},n=Object.keys(a).sort();for(let r of n)t[r]=a[r];return t}function qM(a,t){let n=new Set;return new Set(t),a.reduce((r,l)=>{let c=JSON.stringify(WM(l));return n.has(c)||(n.add(c),r.push({key:c,link:l})),r},[])}function Vv(){let a=mt.useContext(eo);return mp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function YM(){let a=mt.useContext(pu);return mp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var gp=mt.createContext(void 0);gp.displayName="FrameworkContext";function kv(){let a=mt.useContext(gp);return mp(a,"You must render this element inside a <HydratedRouter> element"),a}function jM(a,t){let n=mt.useContext(gp),[r,l]=mt.useState(!1),[c,f]=mt.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:d,onMouseLeave:_,onTouchStart:v}=t,S=mt.useRef(null);mt.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let M=g=>{g.forEach(N=>{f(N.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return S.current&&x.observe(S.current),()=>{x.disconnect()}}},[a]),mt.useEffect(()=>{if(r){let M=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(M)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),f(!1)};return n?a!=="intent"?[c,S,{}]:[c,S,{onFocus:tl(h,y),onBlur:tl(p,E),onMouseEnter:tl(d,y),onMouseLeave:tl(_,E),onTouchStart:tl(v,y)}]:[!1,S,{}]}function tl(a,t){return n=>{a&&a(n),n.defaultPrevented||t(n)}}function ZM({page:a,...t}){let{router:n}=Vv(),r=mt.useMemo(()=>Nv(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?mt.createElement(QM,{page:a,matches:r,...t}):null}function KM(a){let{manifest:t,routeModules:n}=kv(),[r,l]=mt.useState([]);return mt.useEffect(()=>{let c=!1;return VM(a,t,n).then(f=>{c||l(f)}),()=>{c=!0}},[a,t,n]),r}function QM({page:a,matches:t,...n}){let r=ra(),{manifest:l,routeModules:c}=kv(),{basename:f}=Vv(),{loaderData:h,matches:p}=YM(),d=mt.useMemo(()=>S0(a,t,p,l,r,"data"),[a,t,p,l,r]),_=mt.useMemo(()=>S0(a,t,p,l,r,"assets"),[a,t,p,l,r]),v=mt.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let E=new Set,M=!1;if(t.forEach(g=>{let N=l.routes[g.route.id];!N||!N.hasLoader||(!d.some(R=>R.route.id===g.route.id)&&g.route.id in h&&c[g.route.id]?.shouldRevalidate||N.hasClientLoader?M=!0:E.add(g.route.id))}),E.size===0)return[];let x=FM(a,f,"data");return M&&E.size>0&&x.searchParams.set("_routes",t.filter(g=>E.has(g.route.id)).map(g=>g.route.id).join(",")),[x.pathname+x.search]},[f,h,r,l,d,t,a,c]),S=mt.useMemo(()=>kM(_,l),[_,l]),y=KM(_);return mt.createElement(mt.Fragment,null,v.map(E=>mt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),S.map(E=>mt.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),y.map(({key:E,link:M})=>mt.createElement("link",{key:E,...M})))}function JM(...a){return t=>{a.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xv&&(window.__reactRouterVersion="7.7.0")}catch{}function $M({basename:a,children:t,window:n}){let r=mt.useRef();r.current==null&&(r.current=Fy({window:n,v5Compat:!0}));let l=r.current,[c,f]=mt.useState({action:l.action,location:l.location}),h=mt.useCallback(p=>{mt.startTransition(()=>f(p))},[f]);return mt.useLayoutEffect(()=>l.listen(h),[l,h]),mt.createElement(CM,{basename:a,children:t,location:c.location,navigationType:c.action,navigator:l})}var Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ir=mt.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:p,to:d,preventScrollReset:_,viewTransition:v,...S},y){let{basename:E}=mt.useContext(qi),M=typeof d=="string"&&Wv.test(d),x,g=!1;if(typeof d=="string"&&M&&(x=d,Xv))try{let U=new URL(window.location.href),D=d.startsWith("//")?new URL(U.protocol+d):new URL(d),V=La(D.pathname,E);D.origin===U.origin&&V!=null?d=V+D.search+D.hash:g=!0}catch{Li(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=hM(d,{relative:l}),[R,C,P]=jM(r,S),O=iE(d,{replace:f,state:h,target:p,preventScrollReset:_,relative:l,viewTransition:v});function I(U){t&&t(U),U.defaultPrevented||O(U)}let H=mt.createElement("a",{...S,...P,href:x||N,onClick:g||c?t:I,ref:JM(y,C),target:p,"data-discover":!M&&n==="render"?"true":void 0});return R&&!M?mt.createElement(mt.Fragment,null,H,mt.createElement(ZM,{page:N})):H});Ir.displayName="Link";var tE=mt.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...d},_){let v=_l(f,{relative:d.relative}),S=ra(),y=mt.useContext(pu),{navigator:E,basename:M}=mt.useContext(qi),x=y!=null&&cE(v)&&h===!0,g=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,N=S.pathname,R=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(N=N.toLowerCase(),R=R?R.toLowerCase():null,g=g.toLowerCase()),R&&M&&(R=La(R,M)||R);const C=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let P=N===g||!l&&N.startsWith(g)&&N.charAt(C)==="/",O=R!=null&&(R===g||!l&&R.startsWith(g)&&R.charAt(g.length)==="/"),I={isActive:P,isPending:O,isTransitioning:x},H=P?t:void 0,U;typeof r=="function"?U=r(I):U=[r,P?"active":null,O?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(I):c;return mt.createElement(Ir,{...d,"aria-current":H,className:U,ref:_,style:D,to:f,viewTransition:h},typeof p=="function"?p(I):p)});tE.displayName="NavLink";var eE=mt.forwardRef(({discover:a="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:c,method:f=nu,action:h,onSubmit:p,relative:d,preventScrollReset:_,viewTransition:v,...S},y)=>{let E=oE(),M=lE(h,{relative:d}),x=f.toLowerCase()==="get"?"get":"post",g=typeof h=="string"&&Wv.test(h),N=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let C=R.nativeEvent.submitter,P=C?.getAttribute("formmethod")||f;E(C||R.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:l,state:c,relative:d,preventScrollReset:_,viewTransition:v})};return mt.createElement("form",{ref:y,method:x,action:M,onSubmit:r?p:N,...S,"data-discover":!g&&a==="render"?"true":void 0})});eE.displayName="Form";function nE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qv(a){let t=mt.useContext(eo);return cn(t,nE(a)),t}function iE(a,{target:t,replace:n,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=hp(),p=ra(),d=_l(a,{relative:c});return mt.useCallback(_=>{if(OM(_,t)){_.preventDefault();let v=n!==void 0?n:cl(p)===cl(d);h(a,{replace:v,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,d,n,r,t,a,l,c,f])}function aE(a){Li(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=mt.useRef(md(a)),n=mt.useRef(!1),r=ra(),l=mt.useMemo(()=>PM(r.search,n.current?null:t.current),[r.search]),c=hp(),f=mt.useCallback((h,p)=>{const d=md(typeof h=="function"?h(new URLSearchParams(l)):h);n.current=!0,c("?"+d,p)},[c,l]);return[l,f]}var rE=0,sE=()=>`__${String(++rE)}__`;function oE(){let{router:a}=qv("useSubmit"),{basename:t}=mt.useContext(qi),n=EM();return mt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:p,body:d}=BM(r,t);if(l.navigate===!1){let _=l.fetcherKey||sE();await a.fetch(_,n,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:d,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:d,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,t,n])}function lE(a,{relative:t}={}){let{basename:n}=mt.useContext(qi),r=mt.useContext(aa);cn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={..._l(a||".",{relative:t})},f=ra();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();c.search=_?`?${_}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Da([n,c.pathname])),cl(c)}function cE(a,t={}){let n=mt.useContext(Iv);cn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qv("useViewTransitionState"),l=_l(a,{relative:t.relative});if(!n.isTransitioning)return!1;let c=La(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=La(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fu(l.pathname,f)!=null||fu(l.pathname,c)!=null}const uE="_toolbar_1xgn6_1",fE="_topBar_1xgn6_8",hE="_viewTabs_1xgn6_15",dE="_viewTab_1xgn6_15",pE="_viewTabActive_1xgn6_34",mE="_logo_1xgn6_39",gE="_nav_1xgn6_47",_E="_navLink_1xgn6_53",vE="_navLinkActive_1xgn6_69",xE="_layout_1xgn6_74",SE="_main_1xgn6_81",Kn={toolbar:uE,topBar:fE,viewTabs:hE,viewTab:dE,viewTabActive:pE,logo:mE,nav:gE,navLink:_E,navLinkActive:vE,layout:xE,main:SE};function yE(){const a=ra();return Ft.jsxs("header",{className:Kn.toolbar,children:[Ft.jsxs("div",{className:Kn.topBar,children:[Ft.jsx(Ir,{to:"/",className:Kn.logo,children:"HCWARD"}),Ft.jsxs("nav",{className:Kn.nav,children:[Ft.jsx(Ir,{to:"/general-perturbation",className:`${Kn.navLink} ${a.pathname==="/general-perturbation"?Kn.navLinkActive:""}`,children:"Satellite"}),Ft.jsx(Ir,{to:"/about",className:`${Kn.navLink} ${a.pathname==="/about"?Kn.navLinkActive:""}`,children:"About"})]})]}),a.pathname==="/general-perturbation"&&Ft.jsxs("div",{className:Kn.viewTabs,children:[Ft.jsx(Ir,{to:"/general-perturbation?view=table",className:`${Kn.viewTab} ${a.search.includes("3d")?"":Kn.viewTabActive}`,children:"Table View"}),Ft.jsx(Ir,{to:"/general-perturbation?view=3d",className:`${Kn.viewTab} ${a.search.includes("3d")?Kn.viewTabActive:""}`,children:"3D View"})]})]})}function ME({children:a}){return Ft.jsxs("div",{className:Kn.layout,children:[Ft.jsx(yE,{}),Ft.jsx("main",{className:Kn.main,children:a})]})}function EE(){const[a,t]=mt.useState([]),[n,r]=mt.useState(!0),[l,c]=mt.useState(null);return mt.useEffect(()=>{r(!0),c(null),fetch("https://hcward-dashboard-cwdxfvdwe2e2b7ar.uksouth-01.azurewebsites.net/space-monitor/gp").then(h=>{if(!h.ok)throw new Error("Failed to fetch");return h.json()}).then(h=>{Array.isArray(h)?t(h):h&&Array.isArray(h.content)?t(h.content):t([])}).catch(h=>c(h.message)).finally(()=>r(!1))},[]),{data:a,loading:n,error:l}}function gd(){return gd=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},gd.apply(null,arguments)}function y0(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _d(a,t){return _d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},_d(a,t)}function TE(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,_d(a,t)}var M0=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function bE(a,t){return!!(a===t||M0(a)&&M0(t))}function AE(a,t){if(a.length!==t.length)return!1;for(var n=0;n<a.length;n++)if(!bE(a[n],t[n]))return!1;return!0}function Uh(a,t){t===void 0&&(t=AE);var n,r=[],l,c=!1;function f(){for(var h=[],p=0;p<arguments.length;p++)h[p]=arguments[p];return c&&n===this&&t(h,r)||(l=a.apply(this,h),c=!0,n=this,r=h),l}return f}var RE=typeof performance=="object"&&typeof performance.now=="function",E0=RE?function(){return performance.now()}:function(){return Date.now()};function T0(a){cancelAnimationFrame(a.id)}function CE(a,t){var n=E0();function r(){E0()-n>=t?a.call(null):l.id=requestAnimationFrame(r)}var l={id:requestAnimationFrame(r)};return l}var Lh=-1;function b0(a){if(a===void 0&&(a=!1),Lh===-1||a){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),Lh=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Lh}var As=null;function A0(a){if(a===void 0&&(a=!1),As===null||a){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),l=r.style;return l.width="100px",l.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?As="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?As="negative":As="positive-ascending"),document.body.removeChild(t),As}return As}var wE=150,DE=function(t,n){return t};function UE(a){var t,n=a.getItemOffset,r=a.getEstimatedTotalSize,l=a.getItemSize,c=a.getOffsetForIndexAndAlignment,f=a.getStartIndexForOffset,h=a.getStopIndexForStartIndex,p=a.initInstanceProps,d=a.shouldResetStyleCacheOnItemSizeChange,_=a.validateProps;return t=function(v){TE(S,v);function S(E){var M;return M=v.call(this,E)||this,M._instanceProps=p(M.props,y0(M)),M._outerRef=void 0,M._resetIsScrollingTimeoutId=null,M.state={instance:y0(M),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof M.props.initialScrollOffset=="number"?M.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},M._callOnItemsRendered=void 0,M._callOnItemsRendered=Uh(function(x,g,N,R){return M.props.onItemsRendered({overscanStartIndex:x,overscanStopIndex:g,visibleStartIndex:N,visibleStopIndex:R})}),M._callOnScroll=void 0,M._callOnScroll=Uh(function(x,g,N){return M.props.onScroll({scrollDirection:x,scrollOffset:g,scrollUpdateWasRequested:N})}),M._getItemStyle=void 0,M._getItemStyle=function(x){var g=M.props,N=g.direction,R=g.itemSize,C=g.layout,P=M._getItemStyleCache(d&&R,d&&C,d&&N),O;if(P.hasOwnProperty(x))O=P[x];else{var I=n(M.props,x,M._instanceProps),H=l(M.props,x,M._instanceProps),U=N==="horizontal"||C==="horizontal",D=N==="rtl",V=U?I:0;P[x]=O={position:"absolute",left:D?void 0:V,right:D?V:void 0,top:U?0:I,height:U?"100%":H,width:U?H:"100%"}}return O},M._getItemStyleCache=void 0,M._getItemStyleCache=Uh(function(x,g,N){return{}}),M._onScrollHorizontal=function(x){var g=x.currentTarget,N=g.clientWidth,R=g.scrollLeft,C=g.scrollWidth;M.setState(function(P){if(P.scrollOffset===R)return null;var O=M.props.direction,I=R;if(O==="rtl")switch(A0()){case"negative":I=-R;break;case"positive-descending":I=C-N-R;break}return I=Math.max(0,Math.min(I,C-N)),{isScrolling:!0,scrollDirection:P.scrollOffset<I?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},M._resetIsScrollingDebounced)},M._onScrollVertical=function(x){var g=x.currentTarget,N=g.clientHeight,R=g.scrollHeight,C=g.scrollTop;M.setState(function(P){if(P.scrollOffset===C)return null;var O=Math.max(0,Math.min(C,R-N));return{isScrolling:!0,scrollDirection:P.scrollOffset<O?"forward":"backward",scrollOffset:O,scrollUpdateWasRequested:!1}},M._resetIsScrollingDebounced)},M._outerRefSetter=function(x){var g=M.props.outerRef;M._outerRef=x,typeof g=="function"?g(x):g!=null&&typeof g=="object"&&g.hasOwnProperty("current")&&(g.current=x)},M._resetIsScrollingDebounced=function(){M._resetIsScrollingTimeoutId!==null&&T0(M._resetIsScrollingTimeoutId),M._resetIsScrollingTimeoutId=CE(M._resetIsScrolling,wE)},M._resetIsScrolling=function(){M._resetIsScrollingTimeoutId=null,M.setState({isScrolling:!1},function(){M._getItemStyleCache(-1,null)})},M}S.getDerivedStateFromProps=function(M,x){return LE(M,x),_(M),null};var y=S.prototype;return y.scrollTo=function(M){M=Math.max(0,M),this.setState(function(x){return x.scrollOffset===M?null:{scrollDirection:x.scrollOffset<M?"forward":"backward",scrollOffset:M,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},y.scrollToItem=function(M,x){x===void 0&&(x="auto");var g=this.props,N=g.itemCount,R=g.layout,C=this.state.scrollOffset;M=Math.max(0,Math.min(M,N-1));var P=0;if(this._outerRef){var O=this._outerRef;R==="vertical"?P=O.scrollWidth>O.clientWidth?b0():0:P=O.scrollHeight>O.clientHeight?b0():0}this.scrollTo(c(this.props,M,x,C,this._instanceProps,P))},y.componentDidMount=function(){var M=this.props,x=M.direction,g=M.initialScrollOffset,N=M.layout;if(typeof g=="number"&&this._outerRef!=null){var R=this._outerRef;x==="horizontal"||N==="horizontal"?R.scrollLeft=g:R.scrollTop=g}this._callPropsCallbacks()},y.componentDidUpdate=function(){var M=this.props,x=M.direction,g=M.layout,N=this.state,R=N.scrollOffset,C=N.scrollUpdateWasRequested;if(C&&this._outerRef!=null){var P=this._outerRef;if(x==="horizontal"||g==="horizontal")if(x==="rtl")switch(A0()){case"negative":P.scrollLeft=-R;break;case"positive-ascending":P.scrollLeft=R;break;default:var O=P.clientWidth,I=P.scrollWidth;P.scrollLeft=I-O-R;break}else P.scrollLeft=R;else P.scrollTop=R}this._callPropsCallbacks()},y.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&T0(this._resetIsScrollingTimeoutId)},y.render=function(){var M=this.props,x=M.children,g=M.className,N=M.direction,R=M.height,C=M.innerRef,P=M.innerElementType,O=M.innerTagName,I=M.itemCount,H=M.itemData,U=M.itemKey,D=U===void 0?DE:U,V=M.layout,Q=M.outerElementType,et=M.outerTagName,pt=M.style,ct=M.useIsScrolling,B=M.width,Z=this.state.isScrolling,X=N==="horizontal"||V==="horizontal",vt=X?this._onScrollHorizontal:this._onScrollVertical,z=this._getRangeToRender(),q=z[0],rt=z[1],xt=[];if(I>0)for(var Y=q;Y<=rt;Y++)xt.push(mt.createElement(x,{data:H,key:D(Y,H),index:Y,isScrolling:ct?Z:void 0,style:this._getItemStyle(Y)}));var nt=r(this.props,this._instanceProps);return mt.createElement(Q||et||"div",{className:g,onScroll:vt,ref:this._outerRefSetter,style:gd({position:"relative",height:R,width:B,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:N},pt)},mt.createElement(P||O||"div",{children:xt,ref:C,style:{height:X?"100%":nt,pointerEvents:Z?"none":void 0,width:X?nt:"100%"}}))},y._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var M=this.props.itemCount;if(M>0){var x=this._getRangeToRender(),g=x[0],N=x[1],R=x[2],C=x[3];this._callOnItemsRendered(g,N,R,C)}}if(typeof this.props.onScroll=="function"){var P=this.state,O=P.scrollDirection,I=P.scrollOffset,H=P.scrollUpdateWasRequested;this._callOnScroll(O,I,H)}},y._getRangeToRender=function(){var M=this.props,x=M.itemCount,g=M.overscanCount,N=this.state,R=N.isScrolling,C=N.scrollDirection,P=N.scrollOffset;if(x===0)return[0,0,0,0];var O=f(this.props,P,this._instanceProps),I=h(this.props,O,P,this._instanceProps),H=!R||C==="backward"?Math.max(1,g):1,U=!R||C==="forward"?Math.max(1,g):1;return[Math.max(0,O-H),Math.max(0,Math.min(x-1,I+U)),O,I]},S}(mt.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var LE=function(t,n){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,n.instance},NE=UE({getItemOffset:function(t,n){var r=t.itemSize;return n*r},getItemSize:function(t,n){var r=t.itemSize;return r},getEstimatedTotalSize:function(t){var n=t.itemCount,r=t.itemSize;return r*n},getOffsetForIndexAndAlignment:function(t,n,r,l,c,f){var h=t.direction,p=t.height,d=t.itemCount,_=t.itemSize,v=t.layout,S=t.width,y=h==="horizontal"||v==="horizontal",E=y?S:p,M=Math.max(0,d*_-E),x=Math.min(M,n*_),g=Math.max(0,n*_-E+_+f);switch(r==="smart"&&(l>=g-E&&l<=x+E?r="auto":r="center"),r){case"start":return x;case"end":return g;case"center":{var N=Math.round(g+(x-g)/2);return N<Math.ceil(E/2)?0:N>M+Math.floor(E/2)?M:N}case"auto":default:return l>=g&&l<=x?l:l<g?g:x}},getStartIndexForOffset:function(t,n){var r=t.itemCount,l=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(n/l)))},getStopIndexForStartIndex:function(t,n,r){var l=t.direction,c=t.height,f=t.itemCount,h=t.itemSize,p=t.layout,d=t.width,_=l==="horizontal"||p==="horizontal",v=n*h,S=_?d:c,y=Math.ceil((S+r-v)/h);return Math.max(0,Math.min(f-1,n+y-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const ll=180,Yv=["NORAD_CAT_ID","OBJECT_NAME","OBJECT_TYPE","COUNTRY_CODE","LAUNCH_DATE","SITE","CENTER_NAME","REF_FRAME","TIME_SYSTEM","MEAN_ELEMENT_THEORY","EPOCH","MEAN_MOTION","ECCENTRICITY","INCLINATION","RA_OF_ASC_NODE","ARG_OF_PERICENTER","MEAN_ANOMALY","EPHEMERIS_TYPE","CLASSIFICATION_TYPE","ELEMENT_SET_NO","REV_AT_EPOCH","BSTAR","MEAN_MOTION_DOT","MEAN_MOTION_DDOT","SEMIMAJOR_AXIS","PERIOD","APOAPSIS","PERIAPSIS","RCS_SIZE","DECAY_DATE","GP_ID","OBJECT_ID","TLE_LINE0","TLE_LINE1","TLE_LINE2","ORIGINATOR"],OE="_table_eiklz_1",PE="_th_eiklz_16",zE="_td_eiklz_16",IE="_row_eiklz_39",BE="_tableContainer_eiklz_48",FE="_tableScroll_eiklz_60",Hr={table:OE,th:PE,td:zE,row:IE,tableContainer:BE,tableScroll:FE};function HE(a){const{index:t,style:n,data:r}=a,{data:l,allKeys:c,onRowClick:f}=r,h=mt.useRef({isMoving:!1,startX:0,startY:0,isDragging:!1});if(!l[t])return console.error("No data for index:",t),null;const p=v=>{h.current={isMoving:!1,startX:v.clientX,startY:v.clientY,isDragging:!1}},d=()=>{h.current.isMoving=!0,h.current.isDragging=!0},_=v=>{const{startX:S,startY:y,isDragging:E}=h.current,M=Math.abs(v.clientX-S),x=Math.abs(v.clientY-y);!E&&M<5&&x<5&&f?.(l[t]),h.current.isDragging=!1};return Ft.jsx("div",{style:{...n,display:"flex"},className:`${Hr.row} ${Hr.clickable}`,onMouseDown:p,onMouseMove:d,onMouseUp:_,role:"row",tabIndex:0,onKeyPress:v=>{(v.key==="Enter"||v.key===" ")&&f?.(l[t])},children:c.map(v=>{const S=l[t][v],y=S!=null?String(S):"";return Ft.jsx("div",{className:Hr.td,title:y,style:{width:ll,minWidth:ll},children:y},String(v))})})}function GE({data:a,onRowClick:t}){const n=mt.useRef(null),[r,l]=mt.useState(500),c=[...Yv],f=c.length*ll;return mt.useEffect(()=>{const h=()=>{if(n.current){const p=n.current.clientHeight;l(Math.max(200,p-40))}};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),console.log("Table render:",{dataLength:a.length,allKeysLength:c.length}),Ft.jsx("div",{ref:n,className:Hr.tableContainer,children:Ft.jsx("div",{className:Hr.tableScroll,children:Ft.jsxs("div",{className:Hr.table,style:{width:f},children:[Ft.jsx("div",{style:{position:"sticky",top:0,zIndex:1,background:"#fff"},children:Ft.jsx("div",{style:{display:"flex"},children:c.map(h=>Ft.jsx("div",{className:Hr.th,style:{width:ll,minWidth:ll},children:String(h)},String(h)))})}),Ft.jsx("div",{children:Ft.jsx(NE,{height:r,itemCount:a.length,itemSize:35,width:f,itemData:{data:a,allKeys:c,onRowClick:t},children:HE})})]})})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="178",Ws={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VE=0,R0=1,kE=2,jv=1,XE=2,Aa=3,hr=0,si=1,ta=2,ur=0,qs=1,C0=2,w0=3,D0=4,WE=5,Br=100,qE=101,YE=102,jE=103,ZE=104,KE=200,QE=201,JE=202,$E=203,vd=204,xd=205,tT=206,eT=207,nT=208,iT=209,aT=210,rT=211,sT=212,oT=213,lT=214,Sd=0,yd=1,Md=2,Zs=3,Ed=4,Td=5,bd=6,Ad=7,vp=0,cT=1,uT=2,fr=0,fT=1,hT=2,dT=3,pT=4,mT=5,gT=6,_T=7,Zv=300,Ks=301,Qs=302,Rd=303,Cd=304,gu=306,wd=1e3,Gr=1001,Dd=1002,Wi=1003,vT=1004,Dc=1005,ea=1006,Nh=1007,Vr=1008,na=1009,Kv=1010,Qv=1011,ul=1012,xp=1013,Wr=1014,Ra=1015,vl=1016,Sp=1017,yp=1018,fl=1020,Jv=35902,$v=1021,tx=1022,ki=1023,hl=1026,dl=1027,ex=1028,Mp=1029,nx=1030,Ep=1031,Tp=1033,au=33776,ru=33777,su=33778,ou=33779,Ud=35840,Ld=35841,Nd=35842,Od=35843,Pd=36196,zd=37492,Id=37496,Bd=37808,Fd=37809,Hd=37810,Gd=37811,Vd=37812,kd=37813,Xd=37814,Wd=37815,qd=37816,Yd=37817,jd=37818,Zd=37819,Kd=37820,Qd=37821,lu=36492,Jd=36494,$d=36495,ix=36283,tp=36284,ep=36285,np=36286,xT=3200,ST=3201,ax=0,yT=1,cr="",wi="srgb",Js="srgb-linear",hu="linear",$e="srgb",Rs=7680,U0=519,MT=512,ET=513,TT=514,rx=515,bT=516,AT=517,RT=518,CT=519,L0=35044,N0="300 es",Ca=2e3,du=2001;class jr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,ip=180/Math.PI;function xl(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function De(a,t,n){return Math.max(t,Math.min(n,a))}function wT(a,t){return(a%t+t)%t}function Oh(a,t,n){return(1-n)*a+n*t}function el(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ai(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const DT={DEG2RAD:cu};class Se{constructor(t=0,n=0){Se.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=De(this.x,t.x,n.x),this.y=De(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=De(this.x,t,n),this.y=De(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(De(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(t=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=l}static slerpFlat(t,n,r,l,c,f,h){let p=r[l+0],d=r[l+1],_=r[l+2],v=r[l+3];const S=c[f+0],y=c[f+1],E=c[f+2],M=c[f+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v;return}if(h===1){t[n+0]=S,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(v!==M||p!==S||d!==y||_!==E){let x=1-h;const g=p*S+d*y+_*E+v*M,N=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const P=Math.sqrt(R),O=Math.atan2(P,g*N);x=Math.sin(x*O)/P,h=Math.sin(h*O)/P}const C=h*N;if(p=p*x+S*C,d=d*x+y*C,_=_*x+E*C,v=v*x+M*C,x===1-h){const P=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=P,d*=P,_*=P,v*=P}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,l,c,f){const h=r[l],p=r[l+1],d=r[l+2],_=r[l+3],v=c[f],S=c[f+1],y=c[f+2],E=c[f+3];return t[n]=h*E+_*v+p*y-d*S,t[n+1]=p*E+_*S+d*v-h*y,t[n+2]=d*E+_*y+h*S-p*v,t[n+3]=_*E-h*v-p*S-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,l){return this._x=t,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,d=h(r/2),_=h(l/2),v=h(c/2),S=p(r/2),y=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=S*_*v+d*y*E,this._y=d*y*v-S*_*E,this._z=d*_*E+S*y*v,this._w=d*_*v-S*y*E;break;case"YXZ":this._x=S*_*v+d*y*E,this._y=d*y*v-S*_*E,this._z=d*_*E-S*y*v,this._w=d*_*v+S*y*E;break;case"ZXY":this._x=S*_*v-d*y*E,this._y=d*y*v+S*_*E,this._z=d*_*E+S*y*v,this._w=d*_*v-S*y*E;break;case"ZYX":this._x=S*_*v-d*y*E,this._y=d*y*v+S*_*E,this._z=d*_*E-S*y*v,this._w=d*_*v+S*y*E;break;case"YZX":this._x=S*_*v+d*y*E,this._y=d*y*v+S*_*E,this._z=d*_*E-S*y*v,this._w=d*_*v-S*y*E;break;case"XZY":this._x=S*_*v-d*y*E,this._y=d*y*v-S*_*E,this._z=d*_*E+S*y*v,this._w=d*_*v+S*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],d=n[2],_=n[6],v=n[10],S=r+h+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,d=n._z,_=n._w;return this._x=r*_+f*h+l*d-c*p,this._y=l*_+f*p+c*h-r*d,this._z=c*_+f*d+r*p-l*h,this._w=f*_-r*h-l*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*l+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,h),v=Math.sin((1-n)*_)/d,S=Math.sin(n*_)/d;return this._w=f*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,n=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(O0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(O0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,d=2*(f*l-h*r),_=2*(h*n-c*l),v=2*(c*r-f*n);return this.x=n+p*d+f*v-h*_,this.y=r+p*_+h*d-c*v,this.z=l+p*v+c*_-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=De(this.x,t.x,n.x),this.y=De(this.y,t.y,n.y),this.z=De(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=De(this.x,t,n),this.y=De(this.y,t,n),this.z=De(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(De(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return n*n+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const l=Math.sin(n)*t;return this.x=l*Math.sin(r),this.y=Math.cos(n)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new it,O0=new qr;class Me{constructor(t,n,r,l,c,f,h,p,d){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,p,d)}set(t,n,r,l,c,f,h,p,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=f,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],p=r[6],d=r[1],_=r[4],v=r[7],S=r[2],y=r[5],E=r[8],M=l[0],x=l[3],g=l[6],N=l[1],R=l[4],C=l[7],P=l[2],O=l[5],I=l[8];return c[0]=f*M+h*N+p*P,c[3]=f*x+h*R+p*O,c[6]=f*g+h*C+p*I,c[1]=d*M+_*N+v*P,c[4]=d*x+_*R+v*O,c[7]=d*g+_*C+v*I,c[2]=S*M+y*N+E*P,c[5]=S*x+y*R+E*O,c[8]=S*g+y*C+E*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],_=t[8];return n*f*_-n*h*d-r*c*_+r*h*p+l*c*d-l*f*p}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],_=t[8],v=_*f-h*d,S=h*p-_*c,y=d*c-f*p,E=n*v+r*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=v*M,t[1]=(l*d-_*r)*M,t[2]=(h*r-l*f)*M,t[3]=S*M,t[4]=(_*n-l*p)*M,t[5]=(l*c-h*n)*M,t[6]=y*M,t[7]=(r*p-d*n)*M,t[8]=(f*n-r*c)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,l,c,f,h){const p=Math.cos(c),d=Math.sin(c);return this.set(r*p,r*d,-r*(p*f+d*h)+f+t,-l*d,l*p,-l*(-d*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(zh.makeScale(t,n)),this}rotate(t){return this.premultiply(zh.makeRotation(-t)),this}translate(t,n){return this.premultiply(zh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new Me;function sx(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function pl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function UT(){const a=pl("canvas");return a.style.display="block",a}const P0={};function Ys(a){a in P0||(P0[a]=!0,console.warn(a))}function LT(a,t,n){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function NT(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function OT(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const z0=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const a={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$e&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$e&&(l.r=js(l.r),l.g=js(l.g),l.b=js(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cr?hu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Js]:{primaries:t,whitePoint:r,transfer:hu,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),a}const Fe=PT();function Ua(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function js(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Cs;class zT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Cs===void 0&&(Cs=pl("canvas")),Cs.width=t.width,Cs.height=t.height;const l=Cs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=pl("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ua(n[r]/255)*255):n[r]=Ua(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IT=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ih(l[f].image)):c.push(Ih(l[f]))}else c=Ih(l);r.url=c}return n||(t.images[this.uuid]=r),r}}function Ih(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?zT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BT=0;const Bh=new it;class Jn extends jr{constructor(t=Jn.DEFAULT_IMAGE,n=Jn.DEFAULT_MAPPING,r=Gr,l=Gr,c=ea,f=Vr,h=ki,p=na,d=Jn.DEFAULT_ANISOTROPY,_=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=xl(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wd:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wd:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Zv;Jn.DEFAULT_ANISOTROPY=1;class pn{constructor(t=0,n=0,r=0,l=1){pn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,l){return this.x=t,this.y=n,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,l,c;const p=t.elements,d=p[0],_=p[4],v=p[8],S=p[1],y=p[5],E=p[9],M=p[2],x=p[6],g=p[10];if(Math.abs(_-S)<.01&&Math.abs(v-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+M)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(d+1)/2,C=(y+1)/2,P=(g+1)/2,O=(_+S)/4,I=(v+M)/4,H=(E+x)/4;return R>C&&R>P?R<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(R),l=O/r,c=I/r):C>P?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=O/l,c=H/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=I/c,l=H/c),this.set(r,l,c,n),this}let N=Math.sqrt((x-E)*(x-E)+(v-M)*(v-M)+(S-_)*(S-_));return Math.abs(N)<.001&&(N=1),this.x=(x-E)/N,this.y=(v-M)/N,this.z=(S-_)/N,this.w=Math.acos((d+y+g-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=De(this.x,t.x,n.x),this.y=De(this.y,t.y,n.y),this.z=De(this.z,t.z,n.z),this.w=De(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=De(this.x,t,n),this.y=De(this.y,t,n),this.z=De(this.z,t,n),this.w=De(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FT extends jr{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ea,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new pn(0,0,t,n),this.scissorTest=!1,this.viewport=new pn(0,0,t,n);const l={width:t,height:n,depth:r.depth},c=new Jn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:ea,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new bp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends FT{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class ox extends Jn{constructor(t=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HT extends Jn{constructor(t=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Fi):Fi.fromBufferAttribute(c,f),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Uc.copy(r.boundingBox)),Uc.applyMatrix4(t.matrixWorld),this.union(Uc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Lc.subVectors(this.max,nl),ws.subVectors(t.a,nl),Ds.subVectors(t.b,nl),Us.subVectors(t.c,nl),er.subVectors(Ds,ws),nr.subVectors(Us,Ds),Dr.subVectors(ws,Us);let n=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Dr.z,Dr.y,er.z,0,-er.x,nr.z,0,-nr.x,Dr.z,0,-Dr.x,-er.y,er.x,0,-nr.y,nr.x,0,-Dr.y,Dr.x,0];return!Fh(n,ws,Ds,Us,Lc)||(n=[1,0,0,0,1,0,0,0,1],!Fh(n,ws,Ds,Us,Lc))?!1:(Nc.crossVectors(er,nr),n=[Nc.x,Nc.y,Nc.z],Fh(n,ws,Ds,Us,Lc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new it,new it,new it,new it,new it,new it,new it,new it],Fi=new it,Uc=new Sl,ws=new it,Ds=new it,Us=new it,er=new it,nr=new it,Dr=new it,nl=new it,Lc=new it,Nc=new it,Ur=new it;function Fh(a,t,n,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){Ur.fromArray(a,c);const h=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),p=t.dot(Ur),d=n.dot(Ur),_=r.dot(Ur);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>h)return!1}return!0}const GT=new Sl,il=new it,Hh=new it;class _u{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):GT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const n=il.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(il,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(Hh)),this.expandByPoint(il.copy(t.center).sub(Hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ya=new it,Gh=new it,Oc=new it,ir=new it,Vh=new it,Pc=new it,kh=new it;class vu{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ya.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,n),ya.distanceToSquared(t))}distanceSqToSegment(t,n,r,l){Gh.copy(t).add(n).multiplyScalar(.5),Oc.copy(n).sub(t).normalize(),ir.copy(this.origin).sub(Gh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Oc),h=ir.dot(this.direction),p=-ir.dot(Oc),d=ir.lengthSq(),_=Math.abs(1-f*f);let v,S,y,E;if(_>0)if(v=f*p-h,S=f*h-p,E=c*_,v>=0)if(S>=-E)if(S<=E){const M=1/_;v*=M,S*=M,y=v*(v+f*S+2*h)+S*(f*v+S+2*p)+d}else S=c,v=Math.max(0,-(f*S+h)),y=-v*v+S*(S+2*p)+d;else S=-c,v=Math.max(0,-(f*S+h)),y=-v*v+S*(S+2*p)+d;else S<=-E?(v=Math.max(0,-(-f*c+h)),S=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+d):S<=E?(v=0,S=Math.min(Math.max(-c,-p),c),y=S*(S+2*p)+d):(v=Math.max(0,-(f*c+h)),S=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+d);else S=f>0?-c:c,v=Math.max(0,-(f*S+h)),y=-v*v+S*(S+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Gh).addScaledVector(Oc,S),y}intersectSphere(t,n){ya.subVectors(t.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,l,c,f,h,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return d>=0?(r=(t.min.x-S.x)*d,l=(t.max.x-S.x)*d):(r=(t.max.x-S.x)*d,l=(t.min.x-S.x)*d),_>=0?(c=(t.min.y-S.y)*_,f=(t.max.y-S.y)*_):(c=(t.max.y-S.y)*_,f=(t.min.y-S.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-S.z)*v,p=(t.max.z-S.z)*v):(h=(t.max.z-S.z)*v,p=(t.min.z-S.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,n,r,l,c){Vh.subVectors(n,t),Pc.subVectors(r,t),kh.crossVectors(Vh,Pc);let f=this.direction.dot(kh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ir.subVectors(this.origin,t);const p=h*this.direction.dot(Pc.crossVectors(ir,Pc));if(p<0)return null;const d=h*this.direction.dot(Vh.cross(ir));if(d<0||p+d>f)return null;const _=-h*ir.dot(kh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,n,r,l,c,f,h,p,d,_,v,S,y,E,M,x){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,p,d,_,v,S,y,E,M,x)}set(t,n,r,l,c,f,h,p,d,_,v,S,y,E,M,x){const g=this.elements;return g[0]=t,g[4]=n,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=p,g[2]=d,g[6]=_,g[10]=v,g[14]=S,g[3]=y,g[7]=E,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,l=1/Ls.setFromMatrixColumn(t,0).length(),c=1/Ls.setFromMatrixColumn(t,1).length(),f=1/Ls.setFromMatrixColumn(t,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),d=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const S=f*_,y=f*v,E=h*_,M=h*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=y+E*d,n[5]=S-M*d,n[9]=-h*p,n[2]=M-S*d,n[6]=E+y*d,n[10]=f*p}else if(t.order==="YXZ"){const S=p*_,y=p*v,E=d*_,M=d*v;n[0]=S+M*h,n[4]=E*h-y,n[8]=f*d,n[1]=f*v,n[5]=f*_,n[9]=-h,n[2]=y*h-E,n[6]=M+S*h,n[10]=f*p}else if(t.order==="ZXY"){const S=p*_,y=p*v,E=d*_,M=d*v;n[0]=S-M*h,n[4]=-f*v,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*_,n[9]=M-S*h,n[2]=-f*d,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const S=f*_,y=f*v,E=h*_,M=h*v;n[0]=p*_,n[4]=E*d-y,n[8]=S*d+M,n[1]=p*v,n[5]=M*d+S,n[9]=y*d-E,n[2]=-d,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const S=f*p,y=f*d,E=h*p,M=h*d;n[0]=p*_,n[4]=M-S*v,n[8]=E*v+y,n[1]=v,n[5]=f*_,n[9]=-h*_,n[2]=-d*_,n[6]=y*v+E,n[10]=S-M*v}else if(t.order==="XZY"){const S=f*p,y=f*d,E=h*p,M=h*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=S*v+M,n[5]=f*_,n[9]=y*v-E,n[2]=E*v-y,n[6]=h*_,n[10]=M*v+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VT,t,kT)}lookAt(t,n,r){const l=this.elements;return mi.subVectors(t,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),ar.crossVectors(r,mi),ar.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),ar.crossVectors(r,mi)),ar.normalize(),zc.crossVectors(mi,ar),l[0]=ar.x,l[4]=zc.x,l[8]=mi.x,l[1]=ar.y,l[5]=zc.y,l[9]=mi.y,l[2]=ar.z,l[6]=zc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],p=r[8],d=r[12],_=r[1],v=r[5],S=r[9],y=r[13],E=r[2],M=r[6],x=r[10],g=r[14],N=r[3],R=r[7],C=r[11],P=r[15],O=l[0],I=l[4],H=l[8],U=l[12],D=l[1],V=l[5],Q=l[9],et=l[13],pt=l[2],ct=l[6],B=l[10],Z=l[14],X=l[3],vt=l[7],z=l[11],q=l[15];return c[0]=f*O+h*D+p*pt+d*X,c[4]=f*I+h*V+p*ct+d*vt,c[8]=f*H+h*Q+p*B+d*z,c[12]=f*U+h*et+p*Z+d*q,c[1]=_*O+v*D+S*pt+y*X,c[5]=_*I+v*V+S*ct+y*vt,c[9]=_*H+v*Q+S*B+y*z,c[13]=_*U+v*et+S*Z+y*q,c[2]=E*O+M*D+x*pt+g*X,c[6]=E*I+M*V+x*ct+g*vt,c[10]=E*H+M*Q+x*B+g*z,c[14]=E*U+M*et+x*Z+g*q,c[3]=N*O+R*D+C*pt+P*X,c[7]=N*I+R*V+C*ct+P*vt,c[11]=N*H+R*Q+C*B+P*z,c[15]=N*U+R*et+C*Z+P*q,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],d=t[13],_=t[2],v=t[6],S=t[10],y=t[14],E=t[3],M=t[7],x=t[11],g=t[15];return E*(+c*p*v-l*d*v-c*h*S+r*d*S+l*h*y-r*p*y)+M*(+n*p*y-n*d*S+c*f*S-l*f*y+l*d*_-c*p*_)+x*(+n*d*v-n*h*y-c*f*v+r*f*y+c*h*_-r*d*_)+g*(-l*h*_-n*p*v+n*h*S+l*f*v-r*f*S+r*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],_=t[8],v=t[9],S=t[10],y=t[11],E=t[12],M=t[13],x=t[14],g=t[15],N=v*x*d-M*S*d+M*p*y-h*x*y-v*p*g+h*S*g,R=E*S*d-_*x*d-E*p*y+f*x*y+_*p*g-f*S*g,C=_*M*d-E*v*d+E*h*y-f*M*y-_*h*g+f*v*g,P=E*v*p-_*M*p-E*h*S+f*M*S+_*h*x-f*v*x,O=n*N+r*R+l*C+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return t[0]=N*I,t[1]=(M*S*c-v*x*c-M*l*y+r*x*y+v*l*g-r*S*g)*I,t[2]=(h*x*c-M*p*c+M*l*d-r*x*d-h*l*g+r*p*g)*I,t[3]=(v*p*c-h*S*c-v*l*d+r*S*d+h*l*y-r*p*y)*I,t[4]=R*I,t[5]=(_*x*c-E*S*c+E*l*y-n*x*y-_*l*g+n*S*g)*I,t[6]=(E*p*c-f*x*c-E*l*d+n*x*d+f*l*g-n*p*g)*I,t[7]=(f*S*c-_*p*c+_*l*d-n*S*d-f*l*y+n*p*y)*I,t[8]=C*I,t[9]=(E*v*c-_*M*c-E*r*y+n*M*y+_*r*g-n*v*g)*I,t[10]=(f*M*c-E*h*c+E*r*d-n*M*d-f*r*g+n*h*g)*I,t[11]=(_*h*c-f*v*c-_*r*d+n*v*d+f*r*y-n*h*y)*I,t[12]=P*I,t[13]=(_*M*l-E*v*l+E*r*S-n*M*S-_*r*x+n*v*x)*I,t[14]=(E*h*l-f*M*l-E*r*p+n*M*p+f*r*x-n*h*x)*I,t[15]=(f*v*l-_*h*l+_*r*p-n*v*p-f*r*S+n*h*S)*I,this}scale(t){const n=this.elements,r=t.x,l=t.y,c=t.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=t.x,h=t.y,p=t.z,d=c*f,_=c*h;return this.set(d*f+r,d*h-l*p,d*p+l*h,0,d*h+l*p,_*h+r,_*p-l*f,0,d*p-l*h,_*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,d=c+c,_=f+f,v=h+h,S=c*d,y=c*_,E=c*v,M=f*_,x=f*v,g=h*v,N=p*d,R=p*_,C=p*v,P=r.x,O=r.y,I=r.z;return l[0]=(1-(M+g))*P,l[1]=(y+C)*P,l[2]=(E-R)*P,l[3]=0,l[4]=(y-C)*O,l[5]=(1-(S+g))*O,l[6]=(x+N)*O,l[7]=0,l[8]=(E+R)*I,l[9]=(x-N)*I,l[10]=(1-(S+M))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,r){const l=this.elements;let c=Ls.set(l[0],l[1],l[2]).length();const f=Ls.set(l[4],l[5],l[6]).length(),h=Ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Hi.copy(this);const d=1/c,_=1/f,v=1/h;return Hi.elements[0]*=d,Hi.elements[1]*=d,Hi.elements[2]*=d,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=v,Hi.elements[9]*=v,Hi.elements[10]*=v,n.setFromRotationMatrix(Hi),r.x=c,r.y=f,r.z=h,this}makePerspective(t,n,r,l,c,f,h=Ca){const p=this.elements,d=2*c/(n-t),_=2*c/(r-l),v=(n+t)/(n-t),S=(r+l)/(r-l);let y,E;if(h===Ca)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===du)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,l,c,f,h=Ca){const p=this.elements,d=1/(n-t),_=1/(r-l),v=1/(f-c),S=(n+t)*d,y=(r+l)*_;let E,M;if(h===Ca)E=(f+c)*v,M=-2*v;else if(h===du)E=c*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=M,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Ls=new it,Hi=new un,VT=new it(0,0,0),kT=new it(1,1,1),ar=new it,zc=new it,mi=new it,B0=new un,F0=new qr;class ia{constructor(t=0,n=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,l=this._order){return this._x=t,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],d=l[5],_=l[9],v=l[2],S=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,d),this._z=0);break;case"YXZ":this._x=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return B0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B0,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return F0.setFromEuler(this),this.setFromQuaternion(F0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XT=0;const H0=new it,Ns=new qr,Ma=new un,Ic=new it,al=new it,WT=new it,qT=new qr,G0=new it(1,0,0),V0=new it(0,1,0),k0=new it(0,0,1),X0={type:"added"},YT={type:"removed"},Os={type:"childadded",child:null},Xh={type:"childremoved",child:null};class Gn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new it,n=new ia,r=new qr,l=new it(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new Me}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(G0,t)}rotateY(t){return this.rotateOnAxis(V0,t)}rotateZ(t){return this.rotateOnAxis(k0,t)}translateOnAxis(t,n){return H0.copy(t).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(G0,t)}translateY(t){return this.translateOnAxis(V0,t)}translateZ(t){return this.translateOnAxis(k0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Ic.copy(t):Ic.set(t,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(al,Ic,this.up):Ma.lookAt(Ic,al,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(Ma),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X0),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(YT),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X0),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,WT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,qT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),d=f(t.textures),_=f(t.images),v=f(t.shapes),S=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const d in h){const _=h[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new it(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new it,Ea=new it,Wh=new it,Ta=new it,Ps=new it,zs=new it,W0=new it,qh=new it,Yh=new it,jh=new it,Zh=new pn,Kh=new pn,Qh=new pn;class Vi{constructor(t=new it,n=new it,r=new it){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,l){l.subVectors(r,n),Gi.subVectors(t,n),l.cross(Gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,r,l,c){Gi.subVectors(l,n),Ea.subVectors(r,n),Wh.subVectors(t,n);const f=Gi.dot(Gi),h=Gi.dot(Ea),p=Gi.dot(Wh),d=Ea.dot(Ea),_=Ea.dot(Wh),v=f*d-h*h;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(d*p-h*_)*S,E=(f*_-h*p)*S;return c.set(1-y-E,E,y)}static containsPoint(t,n,r,l){return this.getBarycoord(t,n,r,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,n,r,l,c,f,h,p){return this.getBarycoord(t,n,r,l,Ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ta.x),p.addScaledVector(f,Ta.y),p.addScaledVector(h,Ta.z),p)}static getInterpolatedAttribute(t,n,r,l,c,f){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(t,n),Kh.fromBufferAttribute(t,r),Qh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Zh,c.x),f.addScaledVector(Kh,c.y),f.addScaledVector(Qh,c.z),f}static isFrontFacing(t,n,r,l){return Gi.subVectors(r,n),Ea.subVectors(t,n),Gi.cross(Ea).dot(l)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,l){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,r,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Gi.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,l,c){return Vi.getInterpolation(t,this.a,this.b,this.c,n,r,l,c)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,l=this.b,c=this.c;let f,h;Ps.subVectors(l,r),zs.subVectors(c,r),qh.subVectors(t,r);const p=Ps.dot(qh),d=zs.dot(qh);if(p<=0&&d<=0)return n.copy(r);Yh.subVectors(t,l);const _=Ps.dot(Yh),v=zs.dot(Yh);if(_>=0&&v<=_)return n.copy(l);const S=p*v-_*d;if(S<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Ps,f);jh.subVectors(t,c);const y=Ps.dot(jh),E=zs.dot(jh);if(E>=0&&y<=E)return n.copy(c);const M=y*d-p*E;if(M<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(r).addScaledVector(zs,h);const x=_*E-y*v;if(x<=0&&v-_>=0&&y-E>=0)return W0.subVectors(c,l),h=(v-_)/(v-_+(y-E)),n.copy(l).addScaledVector(W0,h);const g=1/(x+M+S);return f=M*g,h=S*g,n.copy(r).addScaledVector(Ps,f).addScaledVector(zs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Jh(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class ze{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,n),this}setRGB(t,n,r,l=Fe.workingColorSpace){return this.r=t,this.g=n,this.b=r,Fe.colorSpaceToWorking(this,l),this}setHSL(t,n,r,l=Fe.workingColorSpace){if(t=wT(t,1),n=De(n,0,1),r=De(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Jh(f,c,t+1/3),this.g=Jh(f,c,t),this.b=Jh(f,c,t-1/3)}return Fe.colorSpaceToWorking(this,l),this}setStyle(t,n=wi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wi){const r=lx[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return Fe.workingToColorSpace(Wn.copy(this),t),Math.round(De(Wn.r*255,0,255))*65536+Math.round(De(Wn.g*255,0,255))*256+Math.round(De(Wn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Fe.workingColorSpace){Fe.workingToColorSpace(Wn.copy(this),n);const r=Wn.r,l=Wn.g,c=Wn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,d;const _=(h+f)/2;if(h===f)p=0,d=0;else{const v=f-h;switch(d=_<=.5?v/(f+h):v/(2-f-h),f){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Fe.workingColorSpace){return Fe.workingToColorSpace(Wn.copy(this),n),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=wi){Fe.workingToColorSpace(Wn.copy(this),t);const n=Wn.r,r=Wn.g,l=Wn.b;return t!==wi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,n,r){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+n,rr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(rr),t.getHSL(Bc);const r=Oh(rr.h,Bc.h,n),l=Oh(rr.s,Bc.s,n),c=Oh(rr.l,Bc.l,n);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new ze;ze.NAMES=lx;let jT=0;class io extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=qs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==xd&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rp extends io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const bn=new it,Fc=new Se;let ZT=0;class Ui{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=L0,this.updateRanges=[],this.gpuType=Ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Fc.fromBufferAttribute(this,n),Fc.applyMatrix3(t),this.setXY(n,Fc.x,Fc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=el(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=ai(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=el(n,this.array)),n}setX(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=el(n,this.array)),n}setY(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=el(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=el(n,this.array)),n}setW(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),r=ai(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,l){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),r=ai(r,this.array),l=ai(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,n,r,l,c){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),r=ai(r,this.array),l=ai(l,this.array),c=ai(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==L0&&(t.usage=this.usage),t}}class cx extends Ui{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class ux extends Ui{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class vi extends Ui{constructor(t,n,r){super(new Float32Array(t),n,r)}}let KT=0;const Ci=new un,$h=new Gn,Is=new it,gi=new Sl,rl=new Sl,In=new it;class Yi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sx(t)?ux:cx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,n,r){return Ci.makeTranslation(t,n,r),this.applyMatrix4(Ci),this}scale(t,n,r){return Ci.makeScale(t,n,r),this.applyMatrix4(Ci),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(t.length,n.count);for(let l=0;l<r;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];rl.setFromBufferAttribute(h),this.morphTargetsRelative?(In.addVectors(gi.min,rl.min),gi.expandByPoint(In),In.addVectors(gi.max,rl.max),gi.expandByPoint(In)):(gi.expandByPoint(rl.min),gi.expandByPoint(rl.max))}gi.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)In.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(In));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,_=h.count;d<_;d++)In.fromBufferAttribute(h,d),p&&(Is.fromBufferAttribute(t,d),In.add(Is)),l=Math.max(l,r.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let H=0;H<r.count;H++)h[H]=new it,p[H]=new it;const d=new it,_=new it,v=new it,S=new Se,y=new Se,E=new Se,M=new it,x=new it;function g(H,U,D){d.fromBufferAttribute(r,H),_.fromBufferAttribute(r,U),v.fromBufferAttribute(r,D),S.fromBufferAttribute(c,H),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,D),_.sub(d),v.sub(d),y.sub(S),E.sub(S);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),x.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(V),h[H].add(M),h[U].add(M),h[D].add(M),p[H].add(x),p[U].add(x),p[D].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let H=0,U=N.length;H<U;++H){const D=N[H],V=D.start,Q=D.count;for(let et=V,pt=V+Q;et<pt;et+=3)g(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const R=new it,C=new it,P=new it,O=new it;function I(H){P.fromBufferAttribute(l,H),O.copy(P);const U=h[H];R.copy(U),R.sub(P.multiplyScalar(P.dot(U))).normalize(),C.crossVectors(O,U);const V=C.dot(p[H])<0?-1:1;f.setXYZW(H,R.x,R.y,R.z,V)}for(let H=0,U=N.length;H<U;++H){const D=N[H],V=D.start,Q=D.count;for(let et=V,pt=V+Q;et<pt;et+=3)I(t.getX(et+0)),I(t.getX(et+1)),I(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new it,c=new it,f=new it,h=new it,p=new it,d=new it,_=new it,v=new it;if(t)for(let S=0,y=t.count;S<y;S+=3){const E=t.getX(S+0),M=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),d.fromBufferAttribute(r,x),h.add(_),p.add(_),d.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(M,p.x,p.y,p.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let S=0,y=n.count;S<y;S+=3)l.fromBufferAttribute(n,S+0),c.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)In.fromBufferAttribute(t,n),In.normalize(),t.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function t(h,p){const d=h.array,_=h.itemSize,v=h.normalized,S=new d.constructor(p.length*_);let y=0,E=0;for(let M=0,x=p.length;M<x;M++){h.isInterleavedBufferAttribute?y=p[M]*h.data.stride+h.offset:y=p[M]*_;for(let g=0;g<_;g++)S[E++]=d[y++]}return new Ui(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],d=t(p,r);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let _=0,v=d.length;_<v;_++){const S=d[_],y=t(S,r);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const d=f[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,S=d.length;v<S;v++){const y=d[v];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(n))}const c=t.morphAttributes;for(const d in c){const _=[],v=c[d];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,_=f.length;d<_;d++){const v=f[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q0=new un,Lr=new vu,Hc=new _u,Y0=new it,Gc=new it,Vc=new it,kc=new it,td=new it,Xc=new it,j0=new it,Wc=new it;class Xi extends Gn{constructor(t=new Yi,n=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Xc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const _=h[p],v=c[p];_!==0&&(td.fromBufferAttribute(v,t),f?Xc.addScaledVector(td,_):Xc.addScaledVector(td.sub(n),_))}n.add(Xc)}return n}raycast(t,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Hc.copy(r.boundingSphere),Hc.applyMatrix4(c),Lr.copy(t.ray).recast(t.near),!(Hc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Hc,Y0)===null||Lr.origin.distanceToSquared(Y0)>(t.far-t.near)**2))&&(q0.copy(c).invert(),Lr.copy(t.ray).applyMatrix4(q0),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Lr)))}_computeIntersections(t,n,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,M=S.length;E<M;E++){const x=S[E],g=f[x.materialIndex],N=Math.max(x.start,y.start),R=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let C=N,P=R;C<P;C+=3){const O=h.getX(C),I=h.getX(C+1),H=h.getX(C+2);l=qc(this,g,t,r,d,_,v,O,I,H),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let x=E,g=M;x<g;x+=3){const N=h.getX(x),R=h.getX(x+1),C=h.getX(x+2);l=qc(this,f,t,r,d,_,v,N,R,C),l&&(l.faceIndex=Math.floor(x/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,M=S.length;E<M;E++){const x=S[E],g=f[x.materialIndex],N=Math.max(x.start,y.start),R=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));for(let C=N,P=R;C<P;C+=3){const O=C,I=C+1,H=C+2;l=qc(this,g,t,r,d,_,v,O,I,H),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),M=Math.min(p.count,y.start+y.count);for(let x=E,g=M;x<g;x+=3){const N=x,R=x+1,C=x+2;l=qc(this,f,t,r,d,_,v,N,R,C),l&&(l.faceIndex=Math.floor(x/3),n.push(l))}}}}function QT(a,t,n,r,l,c,f,h){let p;if(t.side===si?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===hr,h),p===null)return null;Wc.copy(h),Wc.applyMatrix4(a.matrixWorld);const d=n.ray.origin.distanceTo(Wc);return d<n.near||d>n.far?null:{distance:d,point:Wc.clone(),object:a}}function qc(a,t,n,r,l,c,f,h,p,d){a.getVertexPosition(h,Gc),a.getVertexPosition(p,Vc),a.getVertexPosition(d,kc);const _=QT(a,t,n,r,Gc,Vc,kc,j0);if(_){const v=new it;Vi.getBarycoord(j0,Gc,Vc,kc,v),l&&(_.uv=Vi.getInterpolatedAttribute(l,h,p,d,v,new Se)),c&&(_.uv1=Vi.getInterpolatedAttribute(c,h,p,d,v,new Se)),f&&(_.normal=Vi.getInterpolatedAttribute(f,h,p,d,v,new it),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:p,c:d,normal:new it,materialIndex:0};Vi.getNormal(Gc,Vc,kc,S.normal),_.face=S,_.barycoord=v}return _}class yl extends Yi{constructor(t=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],d=[],_=[],v=[];let S=0,y=0;E("z","y","x",-1,-1,r,n,t,f,c,0),E("z","y","x",1,-1,r,n,-t,f,c,1),E("x","z","y",1,1,t,r,n,l,f,2),E("x","z","y",1,-1,t,r,-n,l,f,3),E("x","y","z",1,-1,t,n,r,l,c,4),E("x","y","z",-1,-1,t,n,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new vi(d,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(v,2));function E(M,x,g,N,R,C,P,O,I,H,U){const D=C/I,V=P/H,Q=C/2,et=P/2,pt=O/2,ct=I+1,B=H+1;let Z=0,X=0;const vt=new it;for(let z=0;z<B;z++){const q=z*V-et;for(let rt=0;rt<ct;rt++){const xt=rt*D-Q;vt[M]=xt*N,vt[x]=q*R,vt[g]=pt,d.push(vt.x,vt.y,vt.z),vt[M]=0,vt[x]=0,vt[g]=O>0?1:-1,_.push(vt.x,vt.y,vt.z),v.push(rt/I),v.push(1-z/H),Z+=1}}for(let z=0;z<H;z++)for(let q=0;q<I;q++){const rt=S+q+ct*z,xt=S+q+ct*(z+1),Y=S+(q+1)+ct*(z+1),nt=S+(q+1)+ct*z;p.push(rt,xt,nt),p.push(xt,Y,nt),X+=6}h.addGroup(y,X,U),y+=X,S+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const l=a[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=l.clone():Array.isArray(l)?t[n][r]=l.slice():t[n][r]=l}}return t}function Qn(a){const t={};for(let n=0;n<a.length;n++){const r=$s(a[n]);for(const l in r)t[l]=r[l]}return t}function JT(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function fx(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}const $T={clone:$s,merge:Qn};var t1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t1,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=JT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class hx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ca}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new it,Z0=new Se,K0=new Se;class Di extends hx{constructor(t=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ip*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,n){return this.getViewBounds(t,Z0,K0),n.subVectors(K0,Z0)}setViewOffset(t,n,r,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(cu*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*r/d,l*=f.width/p,r*=f.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Fs=1;class n1 extends Gn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Bs,Fs,t,n);l.layers=this.layers,this.add(l);const c=new Di(Bs,Fs,t,n);c.layers=this.layers,this.add(c);const f=new Di(Bs,Fs,t,n);f.layers=this.layers,this.add(f);const h=new Di(Bs,Fs,t,n);h.layers=this.layers,this.add(h);const p=new Di(Bs,Fs,t,n);p.layers=this.layers,this.add(p);const d=new Di(Bs,Fs,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,p]=n;for(const d of n)this.remove(d);if(t===Ca)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===du)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,d,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(n,c),t.setRenderTarget(r,1,l),t.render(n,f),t.setRenderTarget(r,2,l),t.render(n,h),t.setRenderTarget(r,3,l),t.render(n,p),t.setRenderTarget(r,4,l),t.render(n,d),r.texture.generateMipmaps=M,t.setRenderTarget(r,5,l),t.render(n,_),t.setRenderTarget(v,S,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class dx extends Jn{constructor(t=[],n=Ks,r,l,c,f,h,p,d,_){super(t,n,r,l,c,f,h,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class i1 extends Yr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new dx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new yl(5,5,5),c=new dr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:ur});c.uniforms.tEquirect.value=n;const f=new Xi(l,c),h=n.minFilter;return n.minFilter===Vr&&(n.minFilter=ea),new n1(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,l);t.setRenderTarget(c)}}class Yc extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a1={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const M of t.hand.values()){const x=n.getJointPose(M,r),g=this._getHandJoint(d,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,E=.005;d.inputState.pinching&&S>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&S<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(a1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Yc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class r1 extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nd=new it,s1=new it,o1=new Me;class or{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,l){return this.normal.set(t,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const l=nd.subVectors(r,n).cross(s1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||o1.getNormalMatrix(t),l=this.coplanarPoint(nd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new _u,l1=new Se(.5,.5),jc=new it;class Cp{constructor(t=new or,n=new or,r=new or,l=new or,c=new or,f=new or){this.planes=[t,n,r,l,c,f]}set(t,n,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=Ca){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],d=l[4],_=l[5],v=l[6],S=l[7],y=l[8],E=l[9],M=l[10],x=l[11],g=l[12],N=l[13],R=l[14],C=l[15];if(r[0].setComponents(p-c,S-d,x-y,C-g).normalize(),r[1].setComponents(p+c,S+d,x+y,C+g).normalize(),r[2].setComponents(p+f,S+_,x+E,C+N).normalize(),r[3].setComponents(p-f,S-_,x-E,C-N).normalize(),r[4].setComponents(p-h,S-v,x-M,C-R).normalize(),n===Ca)r[5].setComponents(p+h,S+v,x+M,C+R).normalize();else if(n===du)r[5].setComponents(h,v,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);const n=l1.distanceTo(t.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){const n=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(jc.x=l.normal.x>0?t.max.x:t.min.x,jc.y=l.normal.y>0?t.max.y:t.min.y,jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class px extends io{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Q0=new un,ap=new vu,Zc=new _u,Kc=new it;class c1 extends Gn{constructor(t=new Yi,n=new px){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zc.copy(r.boundingSphere),Zc.applyMatrix4(l),Zc.radius+=c,t.ray.intersectsSphere(Zc)===!1)return;Q0.copy(l).invert(),ap.copy(t.ray).applyMatrix4(Q0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=r.index,v=r.attributes.position;if(d!==null){const S=Math.max(0,f.start),y=Math.min(d.count,f.start+f.count);for(let E=S,M=y;E<M;E++){const x=d.getX(E);Kc.fromBufferAttribute(v,x),J0(Kc,x,p,l,t,n,this)}}else{const S=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let E=S,M=y;E<M;E++)Kc.fromBufferAttribute(v,E),J0(Kc,E,p,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function J0(a,t,n,r,l,c,f){const h=ap.distanceSqToPoint(a);if(h<n){const p=new it;ap.closestPointToPoint(a,p),p.applyMatrix4(r);const d=l.ray.origin.distanceTo(p);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class mx extends Jn{constructor(t,n,r=Wr,l,c,f,h=Wi,p=Wi,d,_=hl,v=1){if(_!==hl&&_!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:n,depth:v};super(S,l,c,f,h,p,_,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xu extends Yi{constructor(t=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(r),p=Math.floor(l),d=h+1,_=p+1,v=t/h,S=n/p,y=[],E=[],M=[],x=[];for(let g=0;g<_;g++){const N=g*S-f;for(let R=0;R<d;R++){const C=R*v-c;E.push(C,-N,0),M.push(0,0,1),x.push(R/h),x.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<h;N++){const R=N+d*g,C=N+d*(g+1),P=N+1+d*(g+1),O=N+1+d*g;y.push(R,C,O),y.push(C,P,O)}this.setIndex(y),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(M,3)),this.setAttribute("uv",new vi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.width,t.height,t.widthSegments,t.heightSegments)}}class wp extends Yi{constructor(t=.5,n=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],p=[],d=[],_=[];let v=t;const S=(n-t)/l,y=new it,E=new Se;for(let M=0;M<=l;M++){for(let x=0;x<=r;x++){const g=c+x/r*f;y.x=v*Math.cos(g),y.y=v*Math.sin(g),p.push(y.x,y.y,y.z),d.push(0,0,1),E.x=(y.x/n+1)/2,E.y=(y.y/n+1)/2,_.push(E.x,E.y)}v+=S}for(let M=0;M<l;M++){const x=M*(r+1);for(let g=0;g<r;g++){const N=g+x,R=N,C=N+r+1,P=N+r+2,O=N+1;h.push(R,C,O),h.push(C,P,O)}}this.setIndex(h),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(d,3)),this.setAttribute("uv",new vi(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dp extends Yi{constructor(t=1,n=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+h,Math.PI);let d=0;const _=[],v=new it,S=new it,y=[],E=[],M=[],x=[];for(let g=0;g<=r;g++){const N=[],R=g/r;let C=0;g===0&&f===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let P=0;P<=n;P++){const O=P/n;v.x=-t*Math.cos(l+O*c)*Math.sin(f+R*h),v.y=t*Math.cos(f+R*h),v.z=t*Math.sin(l+O*c)*Math.sin(f+R*h),E.push(v.x,v.y,v.z),S.copy(v).normalize(),M.push(S.x,S.y,S.z),x.push(O+C,1-R),N.push(d++)}_.push(N)}for(let g=0;g<r;g++)for(let N=0;N<n;N++){const R=_[g][N+1],C=_[g][N],P=_[g+1][N],O=_[g+1][N+1];(g!==0||f>0)&&y.push(R,C,O),(g!==r-1||p<Math.PI)&&y.push(C,P,O)}this.setIndex(y),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(M,3)),this.setAttribute("uv",new vi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class u1 extends io{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ax,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class f1 extends io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h1 extends io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const id={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class d1{constructor(t,n,r){const l=this;let c=!1,f=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){const v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,S=d.length;v<S;v+=2){const y=d[v],E=d[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return E}return null}}}const p1=new d1;class Up{constructor(t){this.manager=t!==void 0?t:p1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const r=this;return new Promise(function(l,c){r.load(t,l,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Up.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hs=new WeakMap;class m1 extends Up{constructor(t){super(t)}load(t,n,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=id.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0);else{let v=Hs.get(f);v===void 0&&(v=[],Hs.set(f,v)),v.push({onLoad:n,onError:l})}return f}const h=pl("img");function p(){_(),n&&n(this);const v=Hs.get(this)||[];for(let S=0;S<v.length;S++){const y=v[S];y.onLoad&&y.onLoad(this)}Hs.delete(this),c.manager.itemEnd(t)}function d(v){_(),l&&l(v),id.remove(`image:${t}`);const S=Hs.get(this)||[];for(let y=0;y<S.length;y++){const E=S[y];E.onError&&E.onError(v)}Hs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),id.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class g1 extends Up{constructor(t){super(t)}load(t,n,r,l){const c=new Jn,f=new m1(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},r,l),c}}class gx extends Gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ad=new un,$0=new it,tv=new it;class _1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=na,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;$0.setFromMatrixPosition(t.matrixWorld),n.position.copy($0),tv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(tv),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _x extends hx{constructor(t=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class v1 extends _1{constructor(){super(new _x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x1 extends gx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new v1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S1 extends gx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class y1 extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ev=new un;class M1{constructor(t,n,r=0,l=1/0){this.ray=new vu(t,n),this.near=r,this.far=l,this.camera=null,this.layers=new Ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return ev.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ev),this}intersectObject(t,n=!0,r=[]){return rp(t,this,r,n),r.sort(nv),r}intersectObjects(t,n=!0,r=[]){for(let l=0,c=t.length;l<c;l++)rp(t[l],this,r,n);return r.sort(nv),r}}function nv(a,t){return a.distance-t.distance}function rp(a,t,n,r){let l=!0;if(a.layers.test(t.layers)&&a.raycast(t,n)===!1&&(l=!1),l===!0&&r===!0){const c=a.children;for(let f=0,h=c.length;f<h;f++)rp(c[f],t,n,!0)}}class iv{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=De(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(De(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E1 extends jr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function av(a,t,n,r){const l=T1(r);switch(n){case $v:return a*t;case ex:return a*t/l.components*l.byteLength;case Mp:return a*t/l.components*l.byteLength;case nx:return a*t*2/l.components*l.byteLength;case Ep:return a*t*2/l.components*l.byteLength;case tx:return a*t*3/l.components*l.byteLength;case ki:return a*t*4/l.components*l.byteLength;case Tp:return a*t*4/l.components*l.byteLength;case au:case ru:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case su:case ou:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ld:case Od:return Math.max(a,16)*Math.max(t,8)/4;case Ud:case Nd:return Math.max(a,8)*Math.max(t,8)/2;case Pd:case zd:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Id:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case kd:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case qd:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case jd:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case lu:case Jd:case $d:return Math.ceil(a/4)*Math.ceil(t/4)*16;case ix:case tp:return Math.ceil(a/4)*Math.ceil(t/4)*8;case ep:case np:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function T1(a){switch(a){case na:case Kv:return{byteLength:1,components:1};case ul:case Qv:case vl:return{byteLength:2,components:1};case Sp:case yp:return{byteLength:2,components:4};case Wr:case xp:case Ra:return{byteLength:4,components:1};case Jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vx(){let a=null,t=!1,n=null,r=null;function l(c,f){n(c,f),r=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function b1(a){const t=new WeakMap;function n(h,p){const d=h.array,_=h.usage,v=d.byteLength,S=a.createBuffer();a.bindBuffer(p,S),a.bufferData(p,d,_),h.onUploadCallback();let y;if(d instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:S,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,d){const _=p.array,v=p.updateRanges;if(a.bindBuffer(d,h),v.length===0)a.bufferSubData(d,0,_);else{v.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<v.length;y++){const E=v[S],M=v[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++S,v[S]=M)}v.length=S+1;for(let y=0,E=v.length;y<E;y++){const M=v[y];a.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(a.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:l,remove:c,update:f}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,be={alphahash_fragment:A1,alphahash_pars_fragment:R1,alphamap_fragment:C1,alphamap_pars_fragment:w1,alphatest_fragment:D1,alphatest_pars_fragment:U1,aomap_fragment:L1,aomap_pars_fragment:N1,batching_pars_vertex:O1,batching_vertex:P1,begin_vertex:z1,beginnormal_vertex:I1,bsdfs:B1,iridescence_fragment:F1,bumpmap_pars_fragment:H1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:X1,color_fragment:W1,color_pars_fragment:q1,color_pars_vertex:Y1,color_vertex:j1,common:Z1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:J1,displacementmap_vertex:$1,emissivemap_fragment:tb,emissivemap_pars_fragment:eb,colorspace_fragment:nb,colorspace_pars_fragment:ib,envmap_fragment:ab,envmap_common_pars_fragment:rb,envmap_pars_fragment:sb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:vb,envmap_vertex:lb,fog_vertex:cb,fog_pars_vertex:ub,fog_fragment:fb,fog_pars_fragment:hb,gradientmap_pars_fragment:db,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:gb,lights_pars_begin:_b,lights_toon_fragment:xb,lights_toon_pars_fragment:Sb,lights_phong_fragment:yb,lights_phong_pars_fragment:Mb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Tb,lights_fragment_begin:bb,lights_fragment_maps:Ab,lights_fragment_end:Rb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Ub,map_fragment:Lb,map_pars_fragment:Nb,map_particle_fragment:Ob,map_particle_pars_fragment:Pb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Bb,morphcolor_vertex:Fb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Vb,normal_fragment_begin:kb,normal_fragment_maps:Xb,normal_pars_fragment:Wb,normal_pars_vertex:qb,normal_vertex:Yb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Qb,iridescence_pars_fragment:Jb,opaque_fragment:$b,packing:tA,premultiplied_alpha_fragment:eA,project_vertex:nA,dithering_fragment:iA,dithering_pars_fragment:aA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:oA,shadowmap_pars_vertex:lA,shadowmap_vertex:cA,shadowmask_pars_fragment:uA,skinbase_vertex:fA,skinning_pars_vertex:hA,skinning_vertex:dA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:_A,tonemapping_pars_fragment:vA,transmission_fragment:xA,transmission_pars_fragment:SA,uv_pars_fragment:yA,uv_pars_vertex:MA,uv_vertex:EA,worldpos_vertex:TA,background_vert:bA,background_frag:AA,backgroundCube_vert:RA,backgroundCube_frag:CA,cube_vert:wA,cube_frag:DA,depth_vert:UA,depth_frag:LA,distanceRGBA_vert:NA,distanceRGBA_frag:OA,equirect_vert:PA,equirect_frag:zA,linedashed_vert:IA,linedashed_frag:BA,meshbasic_vert:FA,meshbasic_frag:HA,meshlambert_vert:GA,meshlambert_frag:VA,meshmatcap_vert:kA,meshmatcap_frag:XA,meshnormal_vert:WA,meshnormal_frag:qA,meshphong_vert:YA,meshphong_frag:jA,meshphysical_vert:ZA,meshphysical_frag:KA,meshtoon_vert:QA,meshtoon_frag:JA,points_vert:$A,points_frag:t2,shadow_vert:e2,shadow_frag:n2,sprite_vert:i2,sprite_frag:a2},qt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},$i={basic:{uniforms:Qn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Qn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Qn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Qn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Qn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Qn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Qn([qt.points,qt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Qn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Qn([qt.common,qt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Qn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Qn([qt.sprite,qt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Qn([qt.common,qt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Qn([qt.lights,qt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};$i.physical={uniforms:Qn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Qc={r:0,b:0,g:0},Or=new ia,r2=new un;function s2(a,t,n,r,l,c,f){const h=new ze(0);let p=c===!0?0:1,d,_,v=null,S=0,y=null;function E(R){let C=R.isScene===!0?R.background:null;return C&&C.isTexture&&(C=(R.backgroundBlurriness>0?n:t).get(C)),C}function M(R){let C=!1;const P=E(R);P===null?g(h,p):P&&P.isColor&&(g(P,1),C=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(R,C){const P=E(C);P&&(P.isCubeTexture||P.mapping===gu)?(_===void 0&&(_=new Xi(new yl(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:$s($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Or.copy(C.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Or)),_.material.toneMapped=Fe.getTransfer(P.colorSpace)!==$e,(v!==P||S!==P.version||y!==a.toneMapping)&&(_.material.needsUpdate=!0,v=P,S=P.version,y=a.toneMapping),_.layers.enableAll(),R.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Xi(new xu(2,2),new dr({name:"BackgroundMaterial",uniforms:$s($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Fe.getTransfer(P.colorSpace)!==$e,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||y!==a.toneMapping)&&(d.material.needsUpdate=!0,v=P,S=P.version,y=a.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function g(R,C){R.getRGB(Qc,fx(a)),r.buffers.color.setClear(Qc.r,Qc.g,Qc.b,C,f)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(R,C=1){h.set(R),p=C,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,g(h,p)},render:M,addToRenderList:x,dispose:N}}function o2(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,f=!1;function h(D,V,Q,et,pt){let ct=!1;const B=v(et,Q,V);c!==B&&(c=B,d(c.object)),ct=y(D,et,Q,pt),ct&&E(D,et,Q,pt),pt!==null&&t.update(pt,a.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,C(D,V,Q,et),pt!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function p(){return a.createVertexArray()}function d(D){return a.bindVertexArray(D)}function _(D){return a.deleteVertexArray(D)}function v(D,V,Q){const et=Q.wireframe===!0;let pt=r[D.id];pt===void 0&&(pt={},r[D.id]=pt);let ct=pt[V.id];ct===void 0&&(ct={},pt[V.id]=ct);let B=ct[et];return B===void 0&&(B=S(p()),ct[et]=B),B}function S(D){const V=[],Q=[],et=[];for(let pt=0;pt<n;pt++)V[pt]=0,Q[pt]=0,et[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:et,object:D,attributes:{},index:null}}function y(D,V,Q,et){const pt=c.attributes,ct=V.attributes;let B=0;const Z=Q.getAttributes();for(const X in Z)if(Z[X].location>=0){const z=pt[X];let q=ct[X];if(q===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),z===void 0||z.attribute!==q||q&&z.data!==q.data)return!0;B++}return c.attributesNum!==B||c.index!==et}function E(D,V,Q,et){const pt={},ct=V.attributes;let B=0;const Z=Q.getAttributes();for(const X in Z)if(Z[X].location>=0){let z=ct[X];z===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(z=D.instanceColor));const q={};q.attribute=z,z&&z.data&&(q.data=z.data),pt[X]=q,B++}c.attributes=pt,c.attributesNum=B,c.index=et}function M(){const D=c.newAttributes;for(let V=0,Q=D.length;V<Q;V++)D[V]=0}function x(D){g(D,0)}function g(D,V){const Q=c.newAttributes,et=c.enabledAttributes,pt=c.attributeDivisors;Q[D]=1,et[D]===0&&(a.enableVertexAttribArray(D),et[D]=1),pt[D]!==V&&(a.vertexAttribDivisor(D,V),pt[D]=V)}function N(){const D=c.newAttributes,V=c.enabledAttributes;for(let Q=0,et=V.length;Q<et;Q++)V[Q]!==D[Q]&&(a.disableVertexAttribArray(Q),V[Q]=0)}function R(D,V,Q,et,pt,ct,B){B===!0?a.vertexAttribIPointer(D,V,Q,pt,ct):a.vertexAttribPointer(D,V,Q,et,pt,ct)}function C(D,V,Q,et){M();const pt=et.attributes,ct=Q.getAttributes(),B=V.defaultAttributeValues;for(const Z in ct){const X=ct[Z];if(X.location>=0){let vt=pt[Z];if(vt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),vt!==void 0){const z=vt.normalized,q=vt.itemSize,rt=t.get(vt);if(rt===void 0)continue;const xt=rt.buffer,Y=rt.type,nt=rt.bytesPerElement,st=Y===a.INT||Y===a.UNSIGNED_INT||vt.gpuType===xp;if(vt.isInterleavedBufferAttribute){const Et=vt.data,At=Et.stride,Jt=vt.offset;if(Et.isInstancedInterleavedBuffer){for(let zt=0;zt<X.locationSize;zt++)g(X.location+zt,Et.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let zt=0;zt<X.locationSize;zt++)x(X.location+zt);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let zt=0;zt<X.locationSize;zt++)R(X.location+zt,q/X.locationSize,Y,z,At*nt,(Jt+q/X.locationSize*zt)*nt,st)}else{if(vt.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)g(X.location+Et,vt.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Et=0;Et<X.locationSize;Et++)x(X.location+Et);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let Et=0;Et<X.locationSize;Et++)R(X.location+Et,q/X.locationSize,Y,z,q*nt,q/X.locationSize*Et*nt,st)}}else if(B!==void 0){const z=B[Z];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv(X.location,z);break;case 3:a.vertexAttrib3fv(X.location,z);break;case 4:a.vertexAttrib4fv(X.location,z);break;default:a.vertexAttrib1fv(X.location,z)}}}}N()}function P(){H();for(const D in r){const V=r[D];for(const Q in V){const et=V[Q];for(const pt in et)_(et[pt].object),delete et[pt];delete V[Q]}delete r[D]}}function O(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const Q in V){const et=V[Q];for(const pt in et)_(et[pt].object),delete et[pt];delete V[Q]}delete r[D.id]}function I(D){for(const V in r){const Q=r[V];if(Q[D.id]===void 0)continue;const et=Q[D.id];for(const pt in et)_(et[pt].object),delete et[pt];delete Q[D.id]}}function H(){U(),f=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:N}}function l2(a,t,n){let r;function l(d){r=d}function c(d,_){a.drawArrays(r,d,_),n.update(_,r,1)}function f(d,_,v){v!==0&&(a.drawArraysInstanced(r,d,_,v),n.update(_,r,v))}function h(d,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,_,0,v);let y=0;for(let E=0;E<v;E++)y+=_[E];n.update(y,r,1)}function p(d,_,v,S){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)f(d[E],_[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,_,0,S,0,v);let E=0;for(let M=0;M<v;M++)E+=_[M]*S[M];n.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function c2(a,t,n,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==ki&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const H=I===vl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==na&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ra&&!H)}function p(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),N=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,O=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:N,maxVaryings:R,maxFragmentUniforms:C,vertexTextures:P,maxSamples:O}}function u2(a){const t=this;let n=null,r=0,l=!1,c=!1;const f=new or,h=new Me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){n=_(v,S,0)},this.setState=function(v,S,y){const E=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,g=a.get(v);if(!l||E===null||E.length===0||c&&!x)c?_(null):d();else{const N=c?0:r,R=N*4;let C=g.clippingState||null;p.value=C,C=_(E,S,R,y);for(let P=0;P!==R;++P)C[P]=n[P];g.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,S,y,E){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=p.value,E!==!0||x===null){const g=y+M*4,N=S.matrixWorldInverse;h.getNormalMatrix(N),(x===null||x.length<g)&&(x=new Float32Array(g));for(let R=0,C=y;R!==M;++R,C+=4)f.copy(v[R]).applyMatrix4(N,h),f.normal.toArray(x,C),x[C+3]=f.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function f2(a){let t=new WeakMap;function n(f,h){return h===Rd?f.mapping=Ks:h===Cd&&(f.mapping=Qs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Rd||h===Cd)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const d=new i1(p.height);return d.fromEquirectangularTexture(a,f),t.set(f,d),f.addEventListener("dispose",l),n(d.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Xs=4,rv=[.125,.215,.35,.446,.526,.582],Fr=20,rd=new _x,sv=new ze;let sd=null,od=0,ld=0,cd=!1;const zr=(1+Math.sqrt(5))/2,Gs=1/zr,ov=[new it(-zr,Gs,0),new it(zr,Gs,0),new it(-Gs,0,zr),new it(Gs,0,zr),new it(0,zr,-Gs),new it(0,zr,Gs),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],h2=new it;class lv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,l=100,c={}){const{size:f=256,position:h=h2}=c;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,t.scissorTest=!1,Jc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ks||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ea,minFilter:ea,generateMipmaps:!1,type:vl,format:ki,colorSpace:Js,depthBuffer:!1},l=cv(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d2(c)),this._blurMaterial=p2(c,t,n)}return l}_compileMaterial(t){const n=new Xi(this._lodPlanes[0],t);this._renderer.compile(n,rd)}_sceneToCubeUV(t,n,r,l,c){const p=new Di(90,1,n,r),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(sv),v.toneMapping=fr,v.autoClear=!1;const E=new Rp({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),M=new Xi(new yl,E);let x=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,x=!0):(E.color.copy(sv),x=!0);for(let N=0;N<6;N++){const R=N%3;R===0?(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):R===1?(p.up.set(0,0,d[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const C=this._cubeSize;Jc(l,R*C,N>2?C:0,C,C),v.setRenderTarget(l),x&&v.render(M,p),v.render(t,p)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=S,t.background=g}_textureToCubeUV(t,n){const r=this._renderer,l=t.mapping===Ks||t.mapping===Qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Xi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Jc(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,rd)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=ov[(l-c-1)%ov.length];this._blur(t,c-1,c,f,h)}n.autoClear=r}_blur(t,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,n,r,l,c,f,h){const p=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Xi(this._lodPlanes[l],d),S=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Fr-1),M=c/E,x=isFinite(c)?1+Math.floor(_*M):Fr;x>Fr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fr}`);const g=[];let N=0;for(let I=0;I<Fr;++I){const H=I/M,U=Math.exp(-H*H/2);g.push(U),I===0?N+=U:I<x&&(N+=2*U)}for(let I=0;I<g.length;I++)g[I]=g[I]/N;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:R}=this;S.dTheta.value=E,S.mipInt.value=R-r;const C=this._sizeLods[l],P=3*C*(l>R-Xs?l-R+Xs:0),O=4*(this._cubeSize-C);Jc(n,P,O,3*C,2*C),p.setRenderTarget(n),p.render(v,rd)}}function d2(a){const t=[],n=[],r=[];let l=a;const c=a-Xs+1+rv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>a-Xs?p=rv[f-a+Xs-1]:f===0&&(p=0),r.push(p);const d=1/(h-2),_=-d,v=1+d,S=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,M=3,x=2,g=1,N=new Float32Array(M*E*y),R=new Float32Array(x*E*y),C=new Float32Array(g*E*y);for(let O=0;O<y;O++){const I=O%3*2/3-1,H=O>2?0:-1,U=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];N.set(U,M*E*O),R.set(S,x*E*O);const D=[O,O,O,O,O,O];C.set(D,g*E*O)}const P=new Yi;P.setAttribute("position",new Ui(N,M)),P.setAttribute("uv",new Ui(R,x)),P.setAttribute("faceIndex",new Ui(C,g)),t.push(P),l>Xs&&l--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function cv(a,t,n){const r=new Yr(a,t,n);return r.texture.mapping=gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Jc(a,t,n,r,l){a.viewport.set(t,n,r,l),a.scissor.set(t,n,r,l)}function p2(a,t,n){const r=new Float32Array(Fr),l=new it(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function uv(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function fv(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m2(a){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===Rd||p===Cd,_=p===Ks||p===Qs;if(d||_){let v=t.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return n===null&&(n=new lv(a)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return d&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new lv(a)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let p=0;const d=6;for(let _=0;_<d;_++)h[_]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function g2(a){const t={};function n(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return t[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function _2(a,t,n,r){const l={},c=new WeakMap;function f(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,n.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)t.update(S[y],a.ARRAY_BUFFER)}function d(v){const S=[],y=v.index,E=v.attributes.position;let M=0;if(y!==null){const N=y.array;M=y.version;for(let R=0,C=N.length;R<C;R+=3){const P=N[R+0],O=N[R+1],I=N[R+2];S.push(P,O,O,I,I,P)}}else if(E!==void 0){const N=E.array;M=E.version;for(let R=0,C=N.length/3-1;R<C;R+=3){const P=R+0,O=R+1,I=R+2;S.push(P,O,O,I,I,P)}}else return;const x=new(sx(S)?ux:cx)(S,1);x.version=M;const g=c.get(v);g&&t.remove(g),c.set(v,x)}function _(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function v2(a,t,n){let r;function l(S){r=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function p(S,y){a.drawElements(r,y,c,S*f),n.update(y,r,1)}function d(S,y,E){E!==0&&(a.drawElementsInstanced(r,y,c,S*f,E),n.update(y,r,E))}function _(S,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,E);let x=0;for(let g=0;g<E;g++)x+=y[g];n.update(x,r,1)}function v(S,y,E,M){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)d(S[g]/f,y[g],M[g]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,M,0,E);let g=0;for(let N=0;N<E;N++)g+=y[N]*M[N];n.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function x2(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:r}}function S2(a,t,n){const r=new WeakMap,l=new pn;function c(f,h,p){const d=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==v){let D=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var y=D;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),x===!0&&(C=3);let P=h.attributes.position.count*C,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const I=new Float32Array(P*O*4*v),H=new ox(I,P,O,v);H.type=Ra,H.needsUpdate=!0;const U=C*4;for(let V=0;V<v;V++){const Q=g[V],et=N[V],pt=R[V],ct=P*O*4*V;for(let B=0;B<Q.count;B++){const Z=B*U;E===!0&&(l.fromBufferAttribute(Q,B),I[ct+Z+0]=l.x,I[ct+Z+1]=l.y,I[ct+Z+2]=l.z,I[ct+Z+3]=0),M===!0&&(l.fromBufferAttribute(et,B),I[ct+Z+4]=l.x,I[ct+Z+5]=l.y,I[ct+Z+6]=l.z,I[ct+Z+7]=0),x===!0&&(l.fromBufferAttribute(pt,B),I[ct+Z+8]=l.x,I[ct+Z+9]=l.y,I[ct+Z+10]=l.z,I[ct+Z+11]=pt.itemSize===4?l.w:1)}}S={count:v,texture:H,size:new Se(P,O)},r.set(h,S),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const M=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",M),p.getUniforms().setValue(a,"morphTargetInfluences",d)}p.getUniforms().setValue(a,"morphTargetsTexture",S.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",S.size)}return{update:c}}function y2(a,t,n,r){let l=new WeakMap;function c(p){const d=r.render.frame,_=p.geometry,v=t.get(p,_);if(l.get(v)!==d&&(t.update(v),l.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==d&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,d))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==d&&(S.update(),l.set(S,d))}return v}function f(){l=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:f}}const xx=new Jn,hv=new mx(1,1),Sx=new ox,yx=new HT,Mx=new dx,dv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function ao(a,t,n){const r=a[0];if(r<=0||r>0)return a;const l=t*n;let c=dv[l];if(c===void 0&&(c=new Float32Array(l),dv[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function Dn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function Un(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function Su(a,t){let n=pv[t];n===void 0&&(n=new Int32Array(t),pv[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function M2(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function E2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dn(n,t))return;a.uniform2fv(this.addr,t),Un(n,t)}}function T2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Dn(n,t))return;a.uniform3fv(this.addr,t),Un(n,t)}}function b2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dn(n,t))return;a.uniform4fv(this.addr,t),Un(n,t)}}function A2(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(Dn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),Un(n,t)}else{if(Dn(n,r))return;_v.set(r),a.uniformMatrix2fv(this.addr,!1,_v),Un(n,r)}}function R2(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(Dn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),Un(n,t)}else{if(Dn(n,r))return;gv.set(r),a.uniformMatrix3fv(this.addr,!1,gv),Un(n,r)}}function C2(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(Dn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),Un(n,t)}else{if(Dn(n,r))return;mv.set(r),a.uniformMatrix4fv(this.addr,!1,mv),Un(n,r)}}function w2(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function D2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dn(n,t))return;a.uniform2iv(this.addr,t),Un(n,t)}}function U2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dn(n,t))return;a.uniform3iv(this.addr,t),Un(n,t)}}function L2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dn(n,t))return;a.uniform4iv(this.addr,t),Un(n,t)}}function N2(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function O2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dn(n,t))return;a.uniform2uiv(this.addr,t),Un(n,t)}}function P2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dn(n,t))return;a.uniform3uiv(this.addr,t),Un(n,t)}}function z2(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dn(n,t))return;a.uniform4uiv(this.addr,t),Un(n,t)}}function I2(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(hv.compareFunction=rx,c=hv):c=xx,n.setTexture2D(t||c,l)}function B2(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(t||yx,l)}function F2(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(t||Mx,l)}function H2(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(t||Sx,l)}function G2(a){switch(a){case 5126:return M2;case 35664:return E2;case 35665:return T2;case 35666:return b2;case 35674:return A2;case 35675:return R2;case 35676:return C2;case 5124:case 35670:return w2;case 35667:case 35671:return D2;case 35668:case 35672:return U2;case 35669:case 35673:return L2;case 5125:return N2;case 36294:return O2;case 36295:return P2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return H2}}function V2(a,t){a.uniform1fv(this.addr,t)}function k2(a,t){const n=ao(t,this.size,2);a.uniform2fv(this.addr,n)}function X2(a,t){const n=ao(t,this.size,3);a.uniform3fv(this.addr,n)}function W2(a,t){const n=ao(t,this.size,4);a.uniform4fv(this.addr,n)}function q2(a,t){const n=ao(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function Y2(a,t){const n=ao(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function j2(a,t){const n=ao(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function Z2(a,t){a.uniform1iv(this.addr,t)}function K2(a,t){a.uniform2iv(this.addr,t)}function Q2(a,t){a.uniform3iv(this.addr,t)}function J2(a,t){a.uniform4iv(this.addr,t)}function $2(a,t){a.uniform1uiv(this.addr,t)}function tR(a,t){a.uniform2uiv(this.addr,t)}function eR(a,t){a.uniform3uiv(this.addr,t)}function nR(a,t){a.uniform4uiv(this.addr,t)}function iR(a,t,n){const r=this.cache,l=t.length,c=Su(n,l);Dn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||xx,c[f])}function aR(a,t,n){const r=this.cache,l=t.length,c=Su(n,l);Dn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||yx,c[f])}function rR(a,t,n){const r=this.cache,l=t.length,c=Su(n,l);Dn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||Mx,c[f])}function sR(a,t,n){const r=this.cache,l=t.length,c=Su(n,l);Dn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||Sx,c[f])}function oR(a){switch(a){case 5126:return V2;case 35664:return k2;case 35665:return X2;case 35666:return W2;case 35674:return q2;case 35675:return Y2;case 35676:return j2;case 5124:case 35670:return Z2;case 35667:case 35671:return K2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return $2;case 36294:return tR;case 36295:return eR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return sR}}class lR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=G2(n.type)}}class cR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oR(n.type)}}class uR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function vv(a,t){a.seq.push(t),a.map[t.id]=t}function fR(a,t,n){const r=a.name,l=r.length;for(ud.lastIndex=0;;){const c=ud.exec(r),f=ud.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&f+2===l){vv(n,d===void 0?new lR(h,a,t):new cR(h,a,t));break}else{let v=n.map[h];v===void 0&&(v=new uR(h),vv(n,v)),n=v}}}class uu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);fR(c,f,this)}}setValue(t,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(t,r,l)}setOptional(t,n,r){const l=n[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&r.push(f)}return r}}function xv(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const hR=37297;let dR=0;function pR(a,t){const n=a.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const Sv=new Me;function mR(a){Fe._getMatrix(Sv,Fe.workingColorSpace,a);const t=`mat3( ${Sv.elements.map(n=>n.toFixed(4))} )`;switch(Fe.getTransfer(a)){case hu:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function yv(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),l=a.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+pR(a.getShaderSource(t),f)}else return l}function gR(a,t){const n=mR(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function _R(a,t){let n;switch(t){case fT:n="Linear";break;case hT:n="Reinhard";break;case dT:n="Cineon";break;case pT:n="ACESFilmic";break;case gT:n="AgX";break;case _T:n="Neutral";break;case mT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $c=new it;function vR(){Fe.getLuminanceCoefficients($c);const a=$c.x.toFixed(4),t=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function SR(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function yR(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(t,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function sl(a){return a!==""}function Mv(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ev(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(a){return a.replace(MR,TR)}const ER=new Map;function TR(a,t){let n=be[t];if(n===void 0){const r=ER.get(t);if(r!==void 0)n=be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return sp(n)}const bR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(a){return a.replace(bR,AR)}function AR(a,t,n,r){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function bv(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RR(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===jv?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===XE?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Aa&&(t="SHADOWMAP_TYPE_VSM"),t}function CR(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ks:case Qs:t="ENVMAP_TYPE_CUBE";break;case gu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wR(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function DR(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case vp:t="ENVMAP_BLENDING_MULTIPLY";break;case cT:t="ENVMAP_BLENDING_MIX";break;case uT:t="ENVMAP_BLENDING_ADD";break}return t}function UR(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function LR(a,t,n,r){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=RR(n),d=CR(n),_=wR(n),v=DR(n),S=UR(n),y=xR(n),E=SR(c),M=l.createProgram();let x,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(sl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(sl).join(`
`),g.length>0&&(g+=`
`)):(x=[bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),g=[bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?be.tonemapping_pars_fragment:"",n.toneMapping!==fr?_R("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,gR("linearToOutputTexel",n.outputColorSpace),vR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sl).join(`
`)),f=sp(f),f=Mv(f,n),f=Ev(f,n),h=sp(h),h=Mv(h,n),h=Ev(h,n),f=Tv(f),h=Tv(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=N+x+f,C=N+g+h,P=xv(l,l.VERTEX_SHADER,R),O=xv(l,l.FRAGMENT_SHADER,C);l.attachShader(M,P),l.attachShader(M,O),n.index0AttributeName!==void 0?l.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(M,0,"position"),l.linkProgram(M);function I(V){if(a.debug.checkShaderErrors){const Q=l.getProgramInfoLog(M).trim(),et=l.getShaderInfoLog(P).trim(),pt=l.getShaderInfoLog(O).trim();let ct=!0,B=!0;if(l.getProgramParameter(M,l.LINK_STATUS)===!1)if(ct=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,M,P,O);else{const Z=yv(l,P,"vertex"),X=yv(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(M,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+Z+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(et===""||pt==="")&&(B=!1);B&&(V.diagnostics={runnable:ct,programLog:Q,vertexShader:{log:et,prefix:x},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(P),l.deleteShader(O),H=new uu(l,M),U=yR(l,M)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(M,hR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=O,this}let NR=0;class OR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new PR(t),n.set(t,r)),r}}class PR{constructor(t){this.id=NR++,this.code=t,this.usedTimes=0}}function zR(a,t,n,r,l,c,f){const h=new Ap,p=new OR,d=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(U){return d.add(U),U===0?"uv":`uv${U}`}function x(U,D,V,Q,et){const pt=Q.fog,ct=et.geometry,B=U.isMeshStandardMaterial?Q.environment:null,Z=(U.isMeshStandardMaterial?n:t).get(U.envMap||B),X=Z&&Z.mapping===gu?Z.image.height:null,vt=E[U.type];U.precision!==null&&(y=l.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const z=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,q=z!==void 0?z.length:0;let rt=0;ct.morphAttributes.position!==void 0&&(rt=1),ct.morphAttributes.normal!==void 0&&(rt=2),ct.morphAttributes.color!==void 0&&(rt=3);let xt,Y,nt,st;if(vt){const pe=$i[vt];xt=pe.vertexShader,Y=pe.fragmentShader}else xt=U.vertexShader,Y=U.fragmentShader,p.update(U),nt=p.getVertexShaderID(U),st=p.getFragmentShaderID(U);const Et=a.getRenderTarget(),At=a.state.buffers.depth.getReversed(),Jt=et.isInstancedMesh===!0,zt=et.isBatchedMesh===!0,$t=!!U.map,ee=!!U.matcap,ie=!!Z,G=!!U.aoMap,he=!!U.lightMap,re=!!U.bumpMap,Yt=!!U.normalMap,Ut=!!U.displacementMap,Qt=!!U.emissiveMap,Lt=!!U.metalnessMap,Gt=!!U.roughnessMap,fe=U.anisotropy>0,F=U.clearcoat>0,A=U.dispersion>0,K=U.iridescence>0,gt=U.sheen>0,_t=U.transmission>0,lt=fe&&!!U.anisotropyMap,It=F&&!!U.clearcoatMap,Ot=F&&!!U.clearcoatNormalMap,Vt=F&&!!U.clearcoatRoughnessMap,b=K&&!!U.iridescenceMap,St=K&&!!U.iridescenceThicknessMap,Pt=gt&&!!U.sheenColorMap,jt=gt&&!!U.sheenRoughnessMap,Zt=!!U.specularMap,Ct=!!U.specularColorMap,te=!!U.specularIntensityMap,W=_t&&!!U.transmissionMap,Bt=_t&&!!U.thicknessMap,Tt=!!U.gradientMap,kt=!!U.alphaMap,wt=U.alphaTest>0,yt=!!U.alphaHash,Xt=!!U.extensions;let se=fr;U.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(se=a.toneMapping);const _e={shaderID:vt,shaderType:U.type,shaderName:U.name,vertexShader:xt,fragmentShader:Y,defines:U.defines,customVertexShaderID:nt,customFragmentShaderID:st,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:zt,batchingColor:zt&&et._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&et.instanceColor!==null,instancingMorph:Jt&&et.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Et===null?a.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Js,alphaToCoverage:!!U.alphaToCoverage,map:$t,matcap:ee,envMap:ie,envMapMode:ie&&Z.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:he,bumpMap:re,normalMap:Yt,displacementMap:S&&Ut,emissiveMap:Qt,normalMapObjectSpace:Yt&&U.normalMapType===yT,normalMapTangentSpace:Yt&&U.normalMapType===ax,metalnessMap:Lt,roughnessMap:Gt,anisotropy:fe,anisotropyMap:lt,clearcoat:F,clearcoatMap:It,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Vt,dispersion:A,iridescence:K,iridescenceMap:b,iridescenceThicknessMap:St,sheen:gt,sheenColorMap:Pt,sheenRoughnessMap:jt,specularMap:Zt,specularColorMap:Ct,specularIntensityMap:te,transmission:_t,transmissionMap:W,thicknessMap:Bt,gradientMap:Tt,opaque:U.transparent===!1&&U.blending===qs&&U.alphaToCoverage===!1,alphaMap:kt,alphaTest:wt,alphaHash:yt,combine:U.combine,mapUv:$t&&M(U.map.channel),aoMapUv:G&&M(U.aoMap.channel),lightMapUv:he&&M(U.lightMap.channel),bumpMapUv:re&&M(U.bumpMap.channel),normalMapUv:Yt&&M(U.normalMap.channel),displacementMapUv:Ut&&M(U.displacementMap.channel),emissiveMapUv:Qt&&M(U.emissiveMap.channel),metalnessMapUv:Lt&&M(U.metalnessMap.channel),roughnessMapUv:Gt&&M(U.roughnessMap.channel),anisotropyMapUv:lt&&M(U.anisotropyMap.channel),clearcoatMapUv:It&&M(U.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&M(U.clearcoatRoughnessMap.channel),iridescenceMapUv:b&&M(U.iridescenceMap.channel),iridescenceThicknessMapUv:St&&M(U.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&M(U.sheenColorMap.channel),sheenRoughnessMapUv:jt&&M(U.sheenRoughnessMap.channel),specularMapUv:Zt&&M(U.specularMap.channel),specularColorMapUv:Ct&&M(U.specularColorMap.channel),specularIntensityMapUv:te&&M(U.specularIntensityMap.channel),transmissionMapUv:W&&M(U.transmissionMap.channel),thicknessMapUv:Bt&&M(U.thicknessMap.channel),alphaMapUv:kt&&M(U.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Yt||fe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ct.attributes.uv&&($t||kt),fog:!!pt,useFog:U.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:At,skinning:et.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:rt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:se,decodeVideoTexture:$t&&U.map.isVideoTexture===!0&&Fe.getTransfer(U.map.colorSpace)===$e,decodeVideoTextureEmissive:Qt&&U.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(U.emissiveMap.colorSpace)===$e,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ta,flipSided:U.side===si,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Xt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&U.extensions.multiDraw===!0||zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return _e.vertexUv1s=d.has(1),_e.vertexUv2s=d.has(2),_e.vertexUv3s=d.has(3),d.clear(),_e}function g(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)D.push(V),D.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(N(D,U),R(D,U),D.push(a.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function N(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function R(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reverseDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const D=E[U.type];let V;if(D){const Q=$i[D];V=$T.clone(Q.uniforms)}else V=U.uniforms;return V}function P(U,D){let V;for(let Q=0,et=_.length;Q<et;Q++){const pt=_[Q];if(pt.cacheKey===D){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new LR(a,D,U,c),_.push(V)),V}function O(U){if(--U.usedTimes===0){const D=_.indexOf(U);_[D]=_[_.length-1],_.pop(),U.destroy()}}function I(U){p.remove(U)}function H(){p.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:P,releaseProgram:O,releaseShaderCache:I,programs:_,dispose:H}}function IR(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:t,get:n,remove:r,update:l,dispose:c}}function BR(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Av(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Rv(){const a=[];let t=0;const n=[],r=[],l=[];function c(){t=0,n.length=0,r.length=0,l.length=0}function f(v,S,y,E,M,x){let g=a[t];return g===void 0?(g={id:v.id,object:v,geometry:S,material:y,groupOrder:E,renderOrder:v.renderOrder,z:M,group:x},a[t]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=y,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=M,g.group=x),t++,g}function h(v,S,y,E,M,x){const g=f(v,S,y,E,M,x);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):n.push(g)}function p(v,S,y,E,M,x){const g=f(v,S,y,E,M,x);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):n.unshift(g)}function d(v,S){n.length>1&&n.sort(v||BR),r.length>1&&r.sort(S||Av),l.length>1&&l.sort(S||Av)}function _(){for(let v=t,S=a.length;v<S;v++){const y=a[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:_,sort:d}}function FR(){let a=new WeakMap;function t(r,l){const c=a.get(r);let f;return c===void 0?(f=new Rv,a.set(r,[f])):l>=c.length?(f=new Rv,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function HR(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new ze};break;case"SpotLight":n={position:new it,direction:new it,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new it,halfWidth:new it,halfHeight:new it};break}return a[t.id]=n,n}}}function GR(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let VR=0;function kR(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function XR(a){const t=new HR,n=GR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new it);const l=new it,c=new un,f=new un;function h(d){let _=0,v=0,S=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,E=0,M=0,x=0,g=0,N=0,R=0,C=0,P=0,O=0,I=0;d.sort(kR);for(let U=0,D=d.length;U<D;U++){const V=d[U],Q=V.color,et=V.intensity,pt=V.distance,ct=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=Q.r*et,v+=Q.g*et,S+=Q.b*et;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],et);I++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,X=n.get(V);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,r.directionalShadow[y]=X,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=V.shadow.matrix,N++}r.directional[y]=B,y++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Q).multiplyScalar(et),B.distance=pt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[M]=B;const Z=V.shadow;if(V.map&&(r.spotLightMap[P]=V.map,P++,Z.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[M]=Z.matrix,V.castShadow){const X=n.get(V);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,r.spotShadow[M]=X,r.spotShadowMap[M]=ct,C++}M++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(Q).multiplyScalar(et),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=B,x++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const Z=V.shadow,X=n.get(V);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=ct,r.pointShadowMatrix[E]=V.shadow.matrix,R++}r.point[E]=B,E++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(et),B.groundColor.copy(V.groundColor).multiplyScalar(et),r.hemi[g]=B,g++}}x>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qt.LTC_FLOAT_1,r.rectAreaLTC2=qt.LTC_FLOAT_2):(r.rectAreaLTC1=qt.LTC_HALF_1,r.rectAreaLTC2=qt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const H=r.hash;(H.directionalLength!==y||H.pointLength!==E||H.spotLength!==M||H.rectAreaLength!==x||H.hemiLength!==g||H.numDirectionalShadows!==N||H.numPointShadows!==R||H.numSpotShadows!==C||H.numSpotMaps!==P||H.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+P-O,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,H.directionalLength=y,H.pointLength=E,H.spotLength=M,H.rectAreaLength=x,H.hemiLength=g,H.numDirectionalShadows=N,H.numPointShadows=R,H.numSpotShadows=C,H.numSpotMaps=P,H.numLightProbes=I,r.version=VR++)}function p(d,_){let v=0,S=0,y=0,E=0,M=0;const x=_.matrixWorldInverse;for(let g=0,N=d.length;g<N;g++){const R=d[g];if(R.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),v++}else if(R.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),y++}else if(R.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(x),f.identity(),c.copy(R.matrixWorld),c.premultiply(x),f.extractRotation(c),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(R.isPointLight){const C=r.point[S];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(x),S++}else if(R.isHemisphereLight){const C=r.hemi[M];C.direction.setFromMatrixPosition(R.matrixWorld),C.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function Cv(a){const t=new XR(a),n=[],r=[];function l(_){d.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function f(_){r.push(_)}function h(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function WR(a){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Cv(a),t.set(l,[h])):c>=f.length?(h=new Cv(a),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const qR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jR(a,t,n){let r=new Cp;const l=new Se,c=new Se,f=new pn,h=new f1({depthPacking:ST}),p=new h1,d={},_=n.maxTextureSize,v={[hr]:si,[si]:hr,[ta]:ta},S=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:qR,fragmentShader:YR}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new Yi;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Xi(E,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let g=this.type;this.render=function(O,I,H){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const U=a.getRenderTarget(),D=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),Q=a.state;Q.setBlending(ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const et=g!==Aa&&this.type===Aa,pt=g===Aa&&this.type!==Aa;for(let ct=0,B=O.length;ct<B;ct++){const Z=O[ct],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const vt=X.getFrameExtents();if(l.multiply(vt),c.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/vt.x),l.x=c.x*vt.x,X.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/vt.y),l.y=c.y*vt.y,X.mapSize.y=c.y)),X.map===null||et===!0||pt===!0){const q=this.type!==Aa?{minFilter:Wi,magFilter:Wi}:{};X.map!==null&&X.map.dispose(),X.map=new Yr(l.x,l.y,q),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const z=X.getViewportCount();for(let q=0;q<z;q++){const rt=X.getViewport(q);f.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),Q.viewport(f),X.updateMatrices(Z,q),r=X.getFrustum(),C(I,H,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Aa&&N(X,H),X.needsUpdate=!1}g=this.type,x.needsUpdate=!1,a.setRenderTarget(U,D,V)};function N(O,I){const H=t.update(M);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Yr(l.x,l.y)),S.uniforms.shadow_pass.value=O.map.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(I,null,H,S,M,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(I,null,H,y,M,null)}function R(O,I,H,U){let D=null;const V=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)D=V;else if(D=H.isPointLight===!0?p:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=D.uuid,et=I.uuid;let pt=d[Q];pt===void 0&&(pt={},d[Q]=pt);let ct=pt[et];ct===void 0&&(ct=D.clone(),pt[et]=ct,I.addEventListener("dispose",P)),D=ct}if(D.visible=I.visible,D.wireframe=I.wireframe,U===Aa?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:v[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Q=a.properties.get(D);Q.light=H}return D}function C(O,I,H,U,D){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===Aa)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const et=t.update(O),pt=O.material;if(Array.isArray(pt)){const ct=et.groups;for(let B=0,Z=ct.length;B<Z;B++){const X=ct[B],vt=pt[X.materialIndex];if(vt&&vt.visible){const z=R(O,vt,U,D);O.onBeforeShadow(a,O,I,H,et,z,X),a.renderBufferDirect(H,null,et,z,O,X),O.onAfterShadow(a,O,I,H,et,z,X)}}}else if(pt.visible){const ct=R(O,pt,U,D);O.onBeforeShadow(a,O,I,H,et,ct,null),a.renderBufferDirect(H,null,et,ct,O,null),O.onAfterShadow(a,O,I,H,et,ct,null)}}const Q=O.children;for(let et=0,pt=Q.length;et<pt;et++)C(Q[et],I,H,U,D)}function P(O){O.target.removeEventListener("dispose",P);for(const H in d){const U=d[H],D=O.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const ZR={[Sd]:yd,[Md]:bd,[Ed]:Ad,[Zs]:Td,[yd]:Sd,[bd]:Md,[Ad]:Ed,[Td]:Zs};function KR(a,t){function n(){let W=!1;const Bt=new pn;let Tt=null;const kt=new pn(0,0,0,0);return{setMask:function(wt){Tt!==wt&&!W&&(a.colorMask(wt,wt,wt,wt),Tt=wt)},setLocked:function(wt){W=wt},setClear:function(wt,yt,Xt,se,_e){_e===!0&&(wt*=se,yt*=se,Xt*=se),Bt.set(wt,yt,Xt,se),kt.equals(Bt)===!1&&(a.clearColor(wt,yt,Xt,se),kt.copy(Bt))},reset:function(){W=!1,Tt=null,kt.set(-1,0,0,0)}}}function r(){let W=!1,Bt=!1,Tt=null,kt=null,wt=null;return{setReversed:function(yt){if(Bt!==yt){const Xt=t.get("EXT_clip_control");yt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Bt=yt;const se=wt;wt=null,this.setClear(se)}},getReversed:function(){return Bt},setTest:function(yt){yt?Et(a.DEPTH_TEST):At(a.DEPTH_TEST)},setMask:function(yt){Tt!==yt&&!W&&(a.depthMask(yt),Tt=yt)},setFunc:function(yt){if(Bt&&(yt=ZR[yt]),kt!==yt){switch(yt){case Sd:a.depthFunc(a.NEVER);break;case yd:a.depthFunc(a.ALWAYS);break;case Md:a.depthFunc(a.LESS);break;case Zs:a.depthFunc(a.LEQUAL);break;case Ed:a.depthFunc(a.EQUAL);break;case Td:a.depthFunc(a.GEQUAL);break;case bd:a.depthFunc(a.GREATER);break;case Ad:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}kt=yt}},setLocked:function(yt){W=yt},setClear:function(yt){wt!==yt&&(Bt&&(yt=1-yt),a.clearDepth(yt),wt=yt)},reset:function(){W=!1,Tt=null,kt=null,wt=null,Bt=!1}}}function l(){let W=!1,Bt=null,Tt=null,kt=null,wt=null,yt=null,Xt=null,se=null,_e=null;return{setTest:function(pe){W||(pe?Et(a.STENCIL_TEST):At(a.STENCIL_TEST))},setMask:function(pe){Bt!==pe&&!W&&(a.stencilMask(pe),Bt=pe)},setFunc:function(pe,an,Ge){(Tt!==pe||kt!==an||wt!==Ge)&&(a.stencilFunc(pe,an,Ge),Tt=pe,kt=an,wt=Ge)},setOp:function(pe,an,Ge){(yt!==pe||Xt!==an||se!==Ge)&&(a.stencilOp(pe,an,Ge),yt=pe,Xt=an,se=Ge)},setLocked:function(pe){W=pe},setClear:function(pe){_e!==pe&&(a.clearStencil(pe),_e=pe)},reset:function(){W=!1,Bt=null,Tt=null,kt=null,wt=null,yt=null,Xt=null,se=null,_e=null}}}const c=new n,f=new r,h=new l,p=new WeakMap,d=new WeakMap;let _={},v={},S=new WeakMap,y=[],E=null,M=!1,x=null,g=null,N=null,R=null,C=null,P=null,O=null,I=new ze(0,0,0),H=0,U=!1,D=null,V=null,Q=null,et=null,pt=null;const ct=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=Z>=2);let vt=null,z={};const q=a.getParameter(a.SCISSOR_BOX),rt=a.getParameter(a.VIEWPORT),xt=new pn().fromArray(q),Y=new pn().fromArray(rt);function nt(W,Bt,Tt,kt){const wt=new Uint8Array(4),yt=a.createTexture();a.bindTexture(W,yt),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xt=0;Xt<Tt;Xt++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Bt,0,a.RGBA,1,1,kt,0,a.RGBA,a.UNSIGNED_BYTE,wt):a.texImage2D(Bt+Xt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,wt);return yt}const st={};st[a.TEXTURE_2D]=nt(a.TEXTURE_2D,a.TEXTURE_2D,1),st[a.TEXTURE_CUBE_MAP]=nt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[a.TEXTURE_2D_ARRAY]=nt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),st[a.TEXTURE_3D]=nt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Et(a.DEPTH_TEST),f.setFunc(Zs),re(!1),Yt(R0),Et(a.CULL_FACE),G(ur);function Et(W){_[W]!==!0&&(a.enable(W),_[W]=!0)}function At(W){_[W]!==!1&&(a.disable(W),_[W]=!1)}function Jt(W,Bt){return v[W]!==Bt?(a.bindFramebuffer(W,Bt),v[W]=Bt,W===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Bt),W===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Bt),!0):!1}function zt(W,Bt){let Tt=y,kt=!1;if(W){Tt=S.get(Bt),Tt===void 0&&(Tt=[],S.set(Bt,Tt));const wt=W.textures;if(Tt.length!==wt.length||Tt[0]!==a.COLOR_ATTACHMENT0){for(let yt=0,Xt=wt.length;yt<Xt;yt++)Tt[yt]=a.COLOR_ATTACHMENT0+yt;Tt.length=wt.length,kt=!0}}else Tt[0]!==a.BACK&&(Tt[0]=a.BACK,kt=!0);kt&&a.drawBuffers(Tt)}function $t(W){return E!==W?(a.useProgram(W),E=W,!0):!1}const ee={[Br]:a.FUNC_ADD,[qE]:a.FUNC_SUBTRACT,[YE]:a.FUNC_REVERSE_SUBTRACT};ee[jE]=a.MIN,ee[ZE]=a.MAX;const ie={[KE]:a.ZERO,[QE]:a.ONE,[JE]:a.SRC_COLOR,[vd]:a.SRC_ALPHA,[aT]:a.SRC_ALPHA_SATURATE,[nT]:a.DST_COLOR,[tT]:a.DST_ALPHA,[$E]:a.ONE_MINUS_SRC_COLOR,[xd]:a.ONE_MINUS_SRC_ALPHA,[iT]:a.ONE_MINUS_DST_COLOR,[eT]:a.ONE_MINUS_DST_ALPHA,[rT]:a.CONSTANT_COLOR,[sT]:a.ONE_MINUS_CONSTANT_COLOR,[oT]:a.CONSTANT_ALPHA,[lT]:a.ONE_MINUS_CONSTANT_ALPHA};function G(W,Bt,Tt,kt,wt,yt,Xt,se,_e,pe){if(W===ur){M===!0&&(At(a.BLEND),M=!1);return}if(M===!1&&(Et(a.BLEND),M=!0),W!==WE){if(W!==x||pe!==U){if((g!==Br||C!==Br)&&(a.blendEquation(a.FUNC_ADD),g=Br,C=Br),pe)switch(W){case qs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case C0:a.blendFunc(a.ONE,a.ONE);break;case w0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case D0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case C0:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case w0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,R=null,P=null,O=null,I.set(0,0,0),H=0,x=W,U=pe}return}wt=wt||Bt,yt=yt||Tt,Xt=Xt||kt,(Bt!==g||wt!==C)&&(a.blendEquationSeparate(ee[Bt],ee[wt]),g=Bt,C=wt),(Tt!==N||kt!==R||yt!==P||Xt!==O)&&(a.blendFuncSeparate(ie[Tt],ie[kt],ie[yt],ie[Xt]),N=Tt,R=kt,P=yt,O=Xt),(se.equals(I)===!1||_e!==H)&&(a.blendColor(se.r,se.g,se.b,_e),I.copy(se),H=_e),x=W,U=!1}function he(W,Bt){W.side===ta?At(a.CULL_FACE):Et(a.CULL_FACE);let Tt=W.side===si;Bt&&(Tt=!Tt),re(Tt),W.blending===qs&&W.transparent===!1?G(ur):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const kt=W.stencilWrite;h.setTest(kt),kt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Et(a.SAMPLE_ALPHA_TO_COVERAGE):At(a.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){D!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),D=W)}function Yt(W){W!==VE?(Et(a.CULL_FACE),W!==V&&(W===R0?a.cullFace(a.BACK):W===kE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):At(a.CULL_FACE),V=W}function Ut(W){W!==Q&&(B&&a.lineWidth(W),Q=W)}function Qt(W,Bt,Tt){W?(Et(a.POLYGON_OFFSET_FILL),(et!==Bt||pt!==Tt)&&(a.polygonOffset(Bt,Tt),et=Bt,pt=Tt)):At(a.POLYGON_OFFSET_FILL)}function Lt(W){W?Et(a.SCISSOR_TEST):At(a.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=a.TEXTURE0+ct-1),vt!==W&&(a.activeTexture(W),vt=W)}function fe(W,Bt,Tt){Tt===void 0&&(vt===null?Tt=a.TEXTURE0+ct-1:Tt=vt);let kt=z[Tt];kt===void 0&&(kt={type:void 0,texture:void 0},z[Tt]=kt),(kt.type!==W||kt.texture!==Bt)&&(vt!==Tt&&(a.activeTexture(Tt),vt=Tt),a.bindTexture(W,Bt||st[W]),kt.type=W,kt.texture=Bt)}function F(){const W=z[vt];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{a.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{a.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{a.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{a.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{a.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{a.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{a.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(){try{a.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function b(){try{a.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{a.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(W){xt.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function jt(W){Y.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Y.copy(W))}function Zt(W,Bt){let Tt=d.get(Bt);Tt===void 0&&(Tt=new WeakMap,d.set(Bt,Tt));let kt=Tt.get(W);kt===void 0&&(kt=a.getUniformBlockIndex(Bt,W.name),Tt.set(W,kt))}function Ct(W,Bt){const kt=d.get(Bt).get(W);p.get(Bt)!==kt&&(a.uniformBlockBinding(Bt,kt,W.__bindingPointIndex),p.set(Bt,kt))}function te(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},vt=null,z={},v={},S=new WeakMap,y=[],E=null,M=!1,x=null,g=null,N=null,R=null,C=null,P=null,O=null,I=new ze(0,0,0),H=0,U=!1,D=null,V=null,Q=null,et=null,pt=null,xt.set(0,0,a.canvas.width,a.canvas.height),Y.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Et,disable:At,bindFramebuffer:Jt,drawBuffers:zt,useProgram:$t,setBlending:G,setMaterial:he,setFlipSided:re,setCullFace:Yt,setLineWidth:Ut,setPolygonOffset:Qt,setScissorTest:Lt,activeTexture:Gt,bindTexture:fe,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:K,texImage2D:b,texImage3D:St,updateUBOMapping:Zt,uniformBlockBinding:Ct,texStorage2D:Ot,texStorage3D:Vt,texSubImage2D:gt,texSubImage3D:_t,compressedTexSubImage2D:lt,compressedTexSubImage3D:It,scissor:Pt,viewport:jt,reset:te}}function QR(a,t,n,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Se,_=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,A){return y?new OffscreenCanvas(F,A):pl("canvas")}function M(F,A,K){let gt=1;const _t=fe(F);if((_t.width>K||_t.height>K)&&(gt=K/Math.max(_t.width,_t.height)),gt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const lt=Math.floor(gt*_t.width),It=Math.floor(gt*_t.height);v===void 0&&(v=E(lt,It));const Ot=A?E(lt,It):v;return Ot.width=lt,Ot.height=It,Ot.getContext("2d").drawImage(F,0,0,lt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+lt+"x"+It+")."),Ot}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),F;return F}function x(F){return F.generateMipmaps}function g(F){a.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(F,A,K,gt,_t=!1){if(F!==null){if(a[F]!==void 0)return a[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let lt=A;if(A===a.RED&&(K===a.FLOAT&&(lt=a.R32F),K===a.HALF_FLOAT&&(lt=a.R16F),K===a.UNSIGNED_BYTE&&(lt=a.R8)),A===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(lt=a.R8UI),K===a.UNSIGNED_SHORT&&(lt=a.R16UI),K===a.UNSIGNED_INT&&(lt=a.R32UI),K===a.BYTE&&(lt=a.R8I),K===a.SHORT&&(lt=a.R16I),K===a.INT&&(lt=a.R32I)),A===a.RG&&(K===a.FLOAT&&(lt=a.RG32F),K===a.HALF_FLOAT&&(lt=a.RG16F),K===a.UNSIGNED_BYTE&&(lt=a.RG8)),A===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(lt=a.RG8UI),K===a.UNSIGNED_SHORT&&(lt=a.RG16UI),K===a.UNSIGNED_INT&&(lt=a.RG32UI),K===a.BYTE&&(lt=a.RG8I),K===a.SHORT&&(lt=a.RG16I),K===a.INT&&(lt=a.RG32I)),A===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(lt=a.RGB8UI),K===a.UNSIGNED_SHORT&&(lt=a.RGB16UI),K===a.UNSIGNED_INT&&(lt=a.RGB32UI),K===a.BYTE&&(lt=a.RGB8I),K===a.SHORT&&(lt=a.RGB16I),K===a.INT&&(lt=a.RGB32I)),A===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(lt=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(lt=a.RGBA16UI),K===a.UNSIGNED_INT&&(lt=a.RGBA32UI),K===a.BYTE&&(lt=a.RGBA8I),K===a.SHORT&&(lt=a.RGBA16I),K===a.INT&&(lt=a.RGBA32I)),A===a.RGB&&K===a.UNSIGNED_INT_5_9_9_9_REV&&(lt=a.RGB9_E5),A===a.RGBA){const It=_t?hu:Fe.getTransfer(gt);K===a.FLOAT&&(lt=a.RGBA32F),K===a.HALF_FLOAT&&(lt=a.RGBA16F),K===a.UNSIGNED_BYTE&&(lt=It===$e?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT_4_4_4_4&&(lt=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(lt=a.RGB5_A1)}return(lt===a.R16F||lt===a.R32F||lt===a.RG16F||lt===a.RG32F||lt===a.RGBA16F||lt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(F,A){let K;return F?A===null||A===Wr||A===fl?K=a.DEPTH24_STENCIL8:A===Ra?K=a.DEPTH32F_STENCIL8:A===ul&&(K=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wr||A===fl?K=a.DEPTH_COMPONENT24:A===Ra?K=a.DEPTH_COMPONENT32F:A===ul&&(K=a.DEPTH_COMPONENT16),K}function P(F,A){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==Wi&&F.minFilter!==ea?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function O(F){const A=F.target;A.removeEventListener("dispose",O),H(A),A.isVideoTexture&&_.delete(A)}function I(F){const A=F.target;A.removeEventListener("dispose",I),D(A)}function H(F){const A=r.get(F);if(A.__webglInit===void 0)return;const K=F.source,gt=S.get(K);if(gt){const _t=gt[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&U(F),Object.keys(gt).length===0&&S.delete(K)}r.remove(F)}function U(F){const A=r.get(F);a.deleteTexture(A.__webglTexture);const K=F.source,gt=S.get(K);delete gt[A.__cacheKey],f.memory.textures--}function D(F){const A=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let _t=0;_t<A.__webglFramebuffer[gt].length;_t++)a.deleteFramebuffer(A.__webglFramebuffer[gt][_t]);else a.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)a.deleteFramebuffer(A.__webglFramebuffer[gt]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=F.textures;for(let gt=0,_t=K.length;gt<_t;gt++){const lt=r.get(K[gt]);lt.__webglTexture&&(a.deleteTexture(lt.__webglTexture),f.memory.textures--),r.remove(K[gt])}r.remove(F)}let V=0;function Q(){V=0}function et(){const F=V;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),V+=1,F}function pt(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ct(F,A){const K=r.get(F);if(F.isVideoTexture&&Lt(F),F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){const gt=F.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(K,F,A);return}}n.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+A)}function B(F,A){const K=r.get(F);if(F.version>0&&K.__version!==F.version){st(K,F,A);return}n.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+A)}function Z(F,A){const K=r.get(F);if(F.version>0&&K.__version!==F.version){st(K,F,A);return}n.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+A)}function X(F,A){const K=r.get(F);if(F.version>0&&K.__version!==F.version){Et(K,F,A);return}n.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+A)}const vt={[wd]:a.REPEAT,[Gr]:a.CLAMP_TO_EDGE,[Dd]:a.MIRRORED_REPEAT},z={[Wi]:a.NEAREST,[vT]:a.NEAREST_MIPMAP_NEAREST,[Dc]:a.NEAREST_MIPMAP_LINEAR,[ea]:a.LINEAR,[Nh]:a.LINEAR_MIPMAP_NEAREST,[Vr]:a.LINEAR_MIPMAP_LINEAR},q={[MT]:a.NEVER,[CT]:a.ALWAYS,[ET]:a.LESS,[rx]:a.LEQUAL,[TT]:a.EQUAL,[RT]:a.GEQUAL,[bT]:a.GREATER,[AT]:a.NOTEQUAL};function rt(F,A){if(A.type===Ra&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ea||A.magFilter===Nh||A.magFilter===Dc||A.magFilter===Vr||A.minFilter===ea||A.minFilter===Nh||A.minFilter===Dc||A.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,vt[A.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,vt[A.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,vt[A.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,z[A.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,z[A.minFilter]),A.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,q[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Wi||A.minFilter!==Dc&&A.minFilter!==Vr||A.type===Ra&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");a.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function xt(F,A){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",O));const gt=A.source;let _t=S.get(gt);_t===void 0&&(_t={},S.set(gt,_t));const lt=pt(A);if(lt!==F.__cacheKey){_t[lt]===void 0&&(_t[lt]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,K=!0),_t[lt].usedTimes++;const It=_t[F.__cacheKey];It!==void 0&&(_t[F.__cacheKey].usedTimes--,It.usedTimes===0&&U(A)),F.__cacheKey=lt,F.__webglTexture=_t[lt].texture}return K}function Y(F,A,K){return Math.floor(Math.floor(F/K)/A)}function nt(F,A,K,gt){const lt=F.updateRanges;if(lt.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,K,gt,A.data);else{lt.sort((St,Pt)=>St.start-Pt.start);let It=0;for(let St=1;St<lt.length;St++){const Pt=lt[It],jt=lt[St],Zt=Pt.start+Pt.count,Ct=Y(jt.start,A.width,4),te=Y(Pt.start,A.width,4);jt.start<=Zt+1&&Ct===te&&Y(jt.start+jt.count-1,A.width,4)===Ct?Pt.count=Math.max(Pt.count,jt.start+jt.count-Pt.start):(++It,lt[It]=jt)}lt.length=It+1;const Ot=a.getParameter(a.UNPACK_ROW_LENGTH),Vt=a.getParameter(a.UNPACK_SKIP_PIXELS),b=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let St=0,Pt=lt.length;St<Pt;St++){const jt=lt[St],Zt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),te=Zt%A.width,W=Math.floor(Zt/A.width),Bt=Ct,Tt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,te),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,te,W,Bt,Tt,K,gt,A.data)}F.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ot),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Vt),a.pixelStorei(a.UNPACK_SKIP_ROWS,b)}}function st(F,A,K){let gt=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=a.TEXTURE_3D);const _t=xt(F,A),lt=A.source;n.bindTexture(gt,F.__webglTexture,a.TEXTURE0+K);const It=r.get(lt);if(lt.version!==It.__version||_t===!0){n.activeTexture(a.TEXTURE0+K);const Ot=Fe.getPrimaries(Fe.workingColorSpace),Vt=A.colorSpace===cr?null:Fe.getPrimaries(A.colorSpace),b=A.colorSpace===cr||Ot===Vt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let St=M(A.image,!1,l.maxTextureSize);St=Gt(A,St);const Pt=c.convert(A.format,A.colorSpace),jt=c.convert(A.type);let Zt=R(A.internalFormat,Pt,jt,A.colorSpace,A.isVideoTexture);rt(gt,A);let Ct;const te=A.mipmaps,W=A.isVideoTexture!==!0,Bt=It.__version===void 0||_t===!0,Tt=lt.dataReady,kt=P(A,St);if(A.isDepthTexture)Zt=C(A.format===dl,A.type),Bt&&(W?n.texStorage2D(a.TEXTURE_2D,1,Zt,St.width,St.height):n.texImage2D(a.TEXTURE_2D,0,Zt,St.width,St.height,0,Pt,jt,null));else if(A.isDataTexture)if(te.length>0){W&&Bt&&n.texStorage2D(a.TEXTURE_2D,kt,Zt,te[0].width,te[0].height);for(let wt=0,yt=te.length;wt<yt;wt++)Ct=te[wt],W?Tt&&n.texSubImage2D(a.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,Pt,jt,Ct.data):n.texImage2D(a.TEXTURE_2D,wt,Zt,Ct.width,Ct.height,0,Pt,jt,Ct.data);A.generateMipmaps=!1}else W?(Bt&&n.texStorage2D(a.TEXTURE_2D,kt,Zt,St.width,St.height),Tt&&nt(A,St,Pt,jt)):n.texImage2D(a.TEXTURE_2D,0,Zt,St.width,St.height,0,Pt,jt,St.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Bt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,kt,Zt,te[0].width,te[0].height,St.depth);for(let wt=0,yt=te.length;wt<yt;wt++)if(Ct=te[wt],A.format!==ki)if(Pt!==null)if(W){if(Tt)if(A.layerUpdates.size>0){const Xt=av(Ct.width,Ct.height,A.format,A.type);for(const se of A.layerUpdates){const _e=Ct.data.subarray(se*Xt/Ct.data.BYTES_PER_ELEMENT,(se+1)*Xt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,wt,0,0,se,Ct.width,Ct.height,1,Pt,_e)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,wt,0,0,0,Ct.width,Ct.height,St.depth,Pt,Ct.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,wt,Zt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,wt,0,0,0,Ct.width,Ct.height,St.depth,Pt,jt,Ct.data):n.texImage3D(a.TEXTURE_2D_ARRAY,wt,Zt,Ct.width,Ct.height,St.depth,0,Pt,jt,Ct.data)}else{W&&Bt&&n.texStorage2D(a.TEXTURE_2D,kt,Zt,te[0].width,te[0].height);for(let wt=0,yt=te.length;wt<yt;wt++)Ct=te[wt],A.format!==ki?Pt!==null?W?Tt&&n.compressedTexSubImage2D(a.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,Pt,Ct.data):n.compressedTexImage2D(a.TEXTURE_2D,wt,Zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&n.texSubImage2D(a.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,Pt,jt,Ct.data):n.texImage2D(a.TEXTURE_2D,wt,Zt,Ct.width,Ct.height,0,Pt,jt,Ct.data)}else if(A.isDataArrayTexture)if(W){if(Bt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,kt,Zt,St.width,St.height,St.depth),Tt)if(A.layerUpdates.size>0){const wt=av(St.width,St.height,A.format,A.type);for(const yt of A.layerUpdates){const Xt=St.data.subarray(yt*wt/St.data.BYTES_PER_ELEMENT,(yt+1)*wt/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,yt,St.width,St.height,1,Pt,jt,Xt)}A.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Pt,jt,St.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Zt,St.width,St.height,St.depth,0,Pt,jt,St.data);else if(A.isData3DTexture)W?(Bt&&n.texStorage3D(a.TEXTURE_3D,kt,Zt,St.width,St.height,St.depth),Tt&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Pt,jt,St.data)):n.texImage3D(a.TEXTURE_3D,0,Zt,St.width,St.height,St.depth,0,Pt,jt,St.data);else if(A.isFramebufferTexture){if(Bt)if(W)n.texStorage2D(a.TEXTURE_2D,kt,Zt,St.width,St.height);else{let wt=St.width,yt=St.height;for(let Xt=0;Xt<kt;Xt++)n.texImage2D(a.TEXTURE_2D,Xt,Zt,wt,yt,0,Pt,jt,null),wt>>=1,yt>>=1}}else if(te.length>0){if(W&&Bt){const wt=fe(te[0]);n.texStorage2D(a.TEXTURE_2D,kt,Zt,wt.width,wt.height)}for(let wt=0,yt=te.length;wt<yt;wt++)Ct=te[wt],W?Tt&&n.texSubImage2D(a.TEXTURE_2D,wt,0,0,Pt,jt,Ct):n.texImage2D(a.TEXTURE_2D,wt,Zt,Pt,jt,Ct);A.generateMipmaps=!1}else if(W){if(Bt){const wt=fe(St);n.texStorage2D(a.TEXTURE_2D,kt,Zt,wt.width,wt.height)}Tt&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Pt,jt,St)}else n.texImage2D(a.TEXTURE_2D,0,Zt,Pt,jt,St);x(A)&&g(gt),It.__version=lt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Et(F,A,K){if(A.image.length!==6)return;const gt=xt(F,A),_t=A.source;n.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+K);const lt=r.get(_t);if(_t.version!==lt.__version||gt===!0){n.activeTexture(a.TEXTURE0+K);const It=Fe.getPrimaries(Fe.workingColorSpace),Ot=A.colorSpace===cr?null:Fe.getPrimaries(A.colorSpace),Vt=A.colorSpace===cr||It===Ot?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const b=A.isCompressedTexture||A.image[0].isCompressedTexture,St=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let yt=0;yt<6;yt++)!b&&!St?Pt[yt]=M(A.image[yt],!0,l.maxCubemapSize):Pt[yt]=St?A.image[yt].image:A.image[yt],Pt[yt]=Gt(A,Pt[yt]);const jt=Pt[0],Zt=c.convert(A.format,A.colorSpace),Ct=c.convert(A.type),te=R(A.internalFormat,Zt,Ct,A.colorSpace),W=A.isVideoTexture!==!0,Bt=lt.__version===void 0||gt===!0,Tt=_t.dataReady;let kt=P(A,jt);rt(a.TEXTURE_CUBE_MAP,A);let wt;if(b){W&&Bt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,kt,te,jt.width,jt.height);for(let yt=0;yt<6;yt++){wt=Pt[yt].mipmaps;for(let Xt=0;Xt<wt.length;Xt++){const se=wt[Xt];A.format!==ki?Zt!==null?W?Tt&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,0,0,se.width,se.height,Zt,se.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,te,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,0,0,se.width,se.height,Zt,Ct,se.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,te,se.width,se.height,0,Zt,Ct,se.data)}}}else{if(wt=A.mipmaps,W&&Bt){wt.length>0&&kt++;const yt=fe(Pt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,kt,te,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(St){W?Tt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Pt[yt].width,Pt[yt].height,Zt,Ct,Pt[yt].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,te,Pt[yt].width,Pt[yt].height,0,Zt,Ct,Pt[yt].data);for(let Xt=0;Xt<wt.length;Xt++){const _e=wt[Xt].image[yt].image;W?Tt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,0,0,_e.width,_e.height,Zt,Ct,_e.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,te,_e.width,_e.height,0,Zt,Ct,_e.data)}}else{W?Tt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Zt,Ct,Pt[yt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,te,Zt,Ct,Pt[yt]);for(let Xt=0;Xt<wt.length;Xt++){const se=wt[Xt];W?Tt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,0,0,Zt,Ct,se.image[yt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,te,Zt,Ct,se.image[yt])}}}x(A)&&g(a.TEXTURE_CUBE_MAP),lt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function At(F,A,K,gt,_t,lt){const It=c.convert(K.format,K.colorSpace),Ot=c.convert(K.type),Vt=R(K.internalFormat,It,Ot,K.colorSpace),b=r.get(A),St=r.get(K);if(St.__renderTarget=A,!b.__hasExternalTextures){const Pt=Math.max(1,A.width>>lt),jt=Math.max(1,A.height>>lt);_t===a.TEXTURE_3D||_t===a.TEXTURE_2D_ARRAY?n.texImage3D(_t,lt,Vt,Pt,jt,A.depth,0,It,Ot,null):n.texImage2D(_t,lt,Vt,Pt,jt,0,It,Ot,null)}n.bindFramebuffer(a.FRAMEBUFFER,F),Qt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,gt,_t,St.__webglTexture,0,Ut(A)):(_t===a.TEXTURE_2D||_t>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,gt,_t,St.__webglTexture,lt),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Jt(F,A,K){if(a.bindRenderbuffer(a.RENDERBUFFER,F),A.depthBuffer){const gt=A.depthTexture,_t=gt&&gt.isDepthTexture?gt.type:null,lt=C(A.stencilBuffer,_t),It=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ot=Ut(A);Qt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot,lt,A.width,A.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot,lt,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,lt,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,It,a.RENDERBUFFER,F)}else{const gt=A.textures;for(let _t=0;_t<gt.length;_t++){const lt=gt[_t],It=c.convert(lt.format,lt.colorSpace),Ot=c.convert(lt.type),Vt=R(lt.internalFormat,It,Ot,lt.colorSpace),b=Ut(A);K&&Qt(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,b,Vt,A.width,A.height):Qt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,b,Vt,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Vt,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function zt(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct(A.depthTexture,0);const _t=gt.__webglTexture,lt=Ut(A);if(A.depthTexture.format===hl)Qt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_t,0,lt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_t,0);else if(A.depthTexture.format===dl)Qt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_t,0,lt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function $t(F){const A=r.get(F),K=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const gt=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const _t=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",_t)};gt.addEventListener("dispose",_t),A.__depthDisposeCallback=_t}A.__boundDepthTexture=gt}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const gt=F.texture.mipmaps;gt&&gt.length>0?zt(A.__webglFramebuffer[0],F):zt(A.__webglFramebuffer,F)}else if(K){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=a.createRenderbuffer(),Jt(A.__webglDepthbuffer[gt],F,!1);else{const _t=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer[gt];a.bindRenderbuffer(a.RENDERBUFFER,lt),a.framebufferRenderbuffer(a.FRAMEBUFFER,_t,a.RENDERBUFFER,lt)}}else{const gt=F.texture.mipmaps;if(gt&&gt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),Jt(A.__webglDepthbuffer,F,!1);else{const _t=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,lt),a.framebufferRenderbuffer(a.FRAMEBUFFER,_t,a.RENDERBUFFER,lt)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function ee(F,A,K){const gt=r.get(F);A!==void 0&&At(gt.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&$t(F)}function ie(F){const A=F.texture,K=r.get(F),gt=r.get(A);F.addEventListener("dispose",I);const _t=F.textures,lt=F.isWebGLCubeRenderTarget===!0,It=_t.length>1;if(It||(gt.__webglTexture===void 0&&(gt.__webglTexture=a.createTexture()),gt.__version=A.version,f.memory.textures++),lt){K.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Ot]=[];for(let Vt=0;Vt<A.mipmaps.length;Vt++)K.__webglFramebuffer[Ot][Vt]=a.createFramebuffer()}else K.__webglFramebuffer[Ot]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ot=0;Ot<A.mipmaps.length;Ot++)K.__webglFramebuffer[Ot]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(It)for(let Ot=0,Vt=_t.length;Ot<Vt;Ot++){const b=r.get(_t[Ot]);b.__webglTexture===void 0&&(b.__webglTexture=a.createTexture(),f.memory.textures++)}if(F.samples>0&&Qt(F)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ot=0;Ot<_t.length;Ot++){const Vt=_t[Ot];K.__webglColorRenderbuffer[Ot]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[Ot]);const b=c.convert(Vt.format,Vt.colorSpace),St=c.convert(Vt.type),Pt=R(Vt.internalFormat,b,St,Vt.colorSpace,F.isXRRenderTarget===!0),jt=Ut(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,jt,Pt,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ot,a.RENDERBUFFER,K.__webglColorRenderbuffer[Ot])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),Jt(K.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(lt){n.bindTexture(a.TEXTURE_CUBE_MAP,gt.__webglTexture),rt(a.TEXTURE_CUBE_MAP,A);for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)At(K.__webglFramebuffer[Ot][Vt],F,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Vt);else At(K.__webglFramebuffer[Ot],F,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);x(A)&&g(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(It){for(let Ot=0,Vt=_t.length;Ot<Vt;Ot++){const b=_t[Ot],St=r.get(b);n.bindTexture(a.TEXTURE_2D,St.__webglTexture),rt(a.TEXTURE_2D,b),At(K.__webglFramebuffer,F,b,a.COLOR_ATTACHMENT0+Ot,a.TEXTURE_2D,0),x(b)&&g(a.TEXTURE_2D)}n.unbindTexture()}else{let Ot=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ot=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ot,gt.__webglTexture),rt(Ot,A),A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)At(K.__webglFramebuffer[Vt],F,A,a.COLOR_ATTACHMENT0,Ot,Vt);else At(K.__webglFramebuffer,F,A,a.COLOR_ATTACHMENT0,Ot,0);x(A)&&g(Ot),n.unbindTexture()}F.depthBuffer&&$t(F)}function G(F){const A=F.textures;for(let K=0,gt=A.length;K<gt;K++){const _t=A[K];if(x(_t)){const lt=N(F),It=r.get(_t).__webglTexture;n.bindTexture(lt,It),g(lt),n.unbindTexture()}}}const he=[],re=[];function Yt(F){if(F.samples>0){if(Qt(F)===!1){const A=F.textures,K=F.width,gt=F.height;let _t=a.COLOR_BUFFER_BIT;const lt=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,It=r.get(F),Ot=A.length>1;if(Ot)for(let b=0;b<A.length;b++)n.bindFramebuffer(a.FRAMEBUFFER,It.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+b,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,It.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+b,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Vt=F.texture.mipmaps;Vt&&Vt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let b=0;b<A.length;b++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_t|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_t|=a.STENCIL_BUFFER_BIT)),Ot){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,It.__webglColorRenderbuffer[b]);const St=r.get(A[b]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,St,0)}a.blitFramebuffer(0,0,K,gt,0,0,K,gt,_t,a.NEAREST),p===!0&&(he.length=0,re.length=0,he.push(a.COLOR_ATTACHMENT0+b),F.depthBuffer&&F.resolveDepthBuffer===!1&&(he.push(lt),re.push(lt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,re)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ot)for(let b=0;b<A.length;b++){n.bindFramebuffer(a.FRAMEBUFFER,It.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+b,a.RENDERBUFFER,It.__webglColorRenderbuffer[b]);const St=r.get(A[b]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,It.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+b,a.TEXTURE_2D,St,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function Ut(F){return Math.min(l.maxSamples,F.samples)}function Qt(F){const A=r.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(F){const A=f.render.frame;_.get(F)!==A&&(_.set(F,A),F.update())}function Gt(F,A){const K=F.colorSpace,gt=F.format,_t=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Js&&K!==cr&&(Fe.getTransfer(K)===$e?(gt!==ki||_t!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=Q,this.setTexture2D=ct,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=ee,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Qt}function JR(a,t){function n(r,l=cr){let c;const f=Fe.getTransfer(l);if(r===na)return a.UNSIGNED_BYTE;if(r===Sp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===yp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Jv)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Kv)return a.BYTE;if(r===Qv)return a.SHORT;if(r===ul)return a.UNSIGNED_SHORT;if(r===xp)return a.INT;if(r===Wr)return a.UNSIGNED_INT;if(r===Ra)return a.FLOAT;if(r===vl)return a.HALF_FLOAT;if(r===$v)return a.ALPHA;if(r===tx)return a.RGB;if(r===ki)return a.RGBA;if(r===hl)return a.DEPTH_COMPONENT;if(r===dl)return a.DEPTH_STENCIL;if(r===ex)return a.RED;if(r===Mp)return a.RED_INTEGER;if(r===nx)return a.RG;if(r===Ep)return a.RG_INTEGER;if(r===Tp)return a.RGBA_INTEGER;if(r===au||r===ru||r===su||r===ou)if(f===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ud||r===Ld||r===Nd||r===Od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===zd||r===Id)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Pd||r===zd)return f===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Id)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bd||r===Fd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lu||r===Jd||r===$d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===lu)return f===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ix||r===tp||r===ep||r===np)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===lu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const $R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const l=new Jn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new dr({vertexShader:$R,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xi(new xu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nC extends jr{constructor(t,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,d=null,_=null,v=null,S=null,y=null,E=null;const M=new eC,x=n.getContextAttributes();let g=null,N=null;const R=[],C=[],P=new Se;let O=null;const I=new Di;I.viewport=new pn;const H=new Di;H.viewport=new pn;const U=[I,H],D=new y1;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=R[Y];return nt===void 0&&(nt=new ed,R[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=R[Y];return nt===void 0&&(nt=new ed,R[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=R[Y];return nt===void 0&&(nt=new ed,R[Y]=nt),nt.getHandSpace()};function et(Y){const nt=C.indexOf(Y.inputSource);if(nt===-1)return;const st=R[nt];st!==void 0&&(st.update(Y.inputSource,Y.frame,d||f),st.dispatchEvent({type:Y.type,data:Y.inputSource}))}function pt(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ct);for(let Y=0;Y<R.length;Y++){const nt=C[Y];nt!==null&&(C[Y]=null,R[Y].disconnect(nt))}V=null,Q=null,M.reset(),t.setRenderTarget(g),y=null,S=null,v=null,l=null,N=null,xt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(Y){d=Y},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ct),x.xrCompatible!==!0&&await n.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Et=null,At=null;x.depth&&(At=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,st=x.stencil?dl:hl,Et=x.stencil?fl:Wr);const Jt={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:c};v=new XRWebGLBinding(l,n),S=v.createProjectionLayer(Jt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new Yr(S.textureWidth,S.textureHeight,{format:ki,type:na,depthTexture:new mx(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const st={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,st),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Yr(y.framebufferWidth,y.framebufferHeight,{format:ki,type:na,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),d=null,f=await l.requestReferenceSpace(h),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ct(Y){for(let nt=0;nt<Y.removed.length;nt++){const st=Y.removed[nt],Et=C.indexOf(st);Et>=0&&(C[Et]=null,R[Et].disconnect(st))}for(let nt=0;nt<Y.added.length;nt++){const st=Y.added[nt];let Et=C.indexOf(st);if(Et===-1){for(let Jt=0;Jt<R.length;Jt++)if(Jt>=C.length){C.push(st),Et=Jt;break}else if(C[Jt]===null){C[Jt]=st,Et=Jt;break}if(Et===-1)break}const At=R[Et];At&&At.connect(st)}}const B=new it,Z=new it;function X(Y,nt,st){B.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(st.matrixWorld);const Et=B.distanceTo(Z),At=nt.projectionMatrix.elements,Jt=st.projectionMatrix.elements,zt=At[14]/(At[10]-1),$t=At[14]/(At[10]+1),ee=(At[9]+1)/At[5],ie=(At[9]-1)/At[5],G=(At[8]-1)/At[0],he=(Jt[8]+1)/Jt[0],re=zt*G,Yt=zt*he,Ut=Et/(-G+he),Qt=Ut*-G;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Qt),Y.translateZ(Ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Lt=zt+Ut,Gt=$t+Ut,fe=re-Qt,F=Yt+(Et-Qt),A=ee*$t/Gt*Lt,K=ie*$t/Gt*Lt;Y.projectionMatrix.makePerspective(fe,F,A,K,Lt,Gt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function vt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let nt=Y.near,st=Y.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(st=M.depthFar)),D.near=H.near=I.near=nt,D.far=H.far=I.far=st,(V!==D.near||Q!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),V=D.near,Q=D.far),I.layers.mask=Y.layers.mask|2,H.layers.mask=Y.layers.mask|4,D.layers.mask=I.layers.mask|H.layers.mask;const Et=Y.parent,At=D.cameras;vt(D,Et);for(let Jt=0;Jt<At.length;Jt++)vt(At[Jt],Et);At.length===2?X(D,I,H):D.projectionMatrix.copy(I.projectionMatrix),z(Y,D,Et)};function z(Y,nt,st){st===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ip*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(Y){p=Y,S!==null&&(S.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(D)};let q=null;function rt(Y,nt){if(_=nt.getViewerPose(d||f),E=nt,_!==null){const st=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Et=!1;st.length!==D.cameras.length&&(D.cameras.length=0,Et=!0);for(let zt=0;zt<st.length;zt++){const $t=st[zt];let ee=null;if(y!==null)ee=y.getViewport($t);else{const G=v.getViewSubImage(S,$t);ee=G.viewport,zt===0&&(t.setRenderTargetTextures(N,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(N))}let ie=U[zt];ie===void 0&&(ie=new Di,ie.layers.enable(zt),ie.viewport=new pn,U[zt]=ie),ie.matrix.fromArray($t.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray($t.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ee.x,ee.y,ee.width,ee.height),zt===0&&(D.matrix.copy(ie.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Et===!0&&D.cameras.push(ie)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const zt=v.getDepthInformation(st[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,l.renderState)}}for(let st=0;st<R.length;st++){const Et=C[st],At=R[st];Et!==null&&At!==void 0&&At.update(Et,nt,d||f)}q&&q(Y,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),E=null}const xt=new vx;xt.setAnimationLoop(rt),this.setAnimationLoop=function(Y){q=Y},this.dispose=function(){}}}const Pr=new ia,iC=new un;function aC(a,t){function n(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,fx(a)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,N,R,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),v(x,g)):g.isMeshPhongMaterial?(c(x,g),_(x,g)):g.isMeshStandardMaterial?(c(x,g),S(x,g),g.isMeshPhysicalMaterial&&y(x,g,C)):g.isMeshMatcapMaterial?(c(x,g),E(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),M(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(f(x,g),g.isLineDashedMaterial&&h(x,g)):g.isPointsMaterial?p(x,g,N,R):g.isSpriteMaterial?d(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,n(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===si&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,n(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===si&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,n(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,n(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const N=t.get(g),R=N.envMap,C=N.envMapRotation;R&&(x.envMap.value=R,Pr.copy(C),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),x.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(Pr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,x.aoMapTransform))}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform))}function h(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function p(x,g,N,R){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*N,x.scale.value=R*.5,g.map&&(x.map.value=g.map,n(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,N){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===si&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){const N=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function rC(a,t,n,r){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,R){const C=R.program;r.uniformBlockBinding(N,C)}function d(N,R){let C=l[N.id];C===void 0&&(E(N),C=_(N),l[N.id]=C,N.addEventListener("dispose",x));const P=R.program;r.updateUBOMapping(N,P);const O=t.render.frame;c[N.id]!==O&&(S(N),c[N.id]=O)}function _(N){const R=v();N.__bindingPointIndex=R;const C=a.createBuffer(),P=N.__size,O=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,P,O),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,C),C}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const R=l[N.id],C=N.uniforms,P=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let O=0,I=C.length;O<I;O++){const H=Array.isArray(C[O])?C[O]:[C[O]];for(let U=0,D=H.length;U<D;U++){const V=H[U];if(y(V,O,U,P)===!0){const Q=V.__offset,et=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let ct=0;ct<et.length;ct++){const B=et[ct],Z=M(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,Q+pt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,pt),pt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Q,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(N,R,C,P){const O=N.value,I=R+"_"+C;if(P[I]===void 0)return typeof O=="number"||typeof O=="boolean"?P[I]=O:P[I]=O.clone(),!0;{const H=P[I];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return P[I]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function E(N){const R=N.uniforms;let C=0;const P=16;for(let I=0,H=R.length;I<H;I++){const U=Array.isArray(R[I])?R[I]:[R[I]];for(let D=0,V=U.length;D<V;D++){const Q=U[D],et=Array.isArray(Q.value)?Q.value:[Q.value];for(let pt=0,ct=et.length;pt<ct;pt++){const B=et[pt],Z=M(B),X=C%P,vt=X%Z.boundary,z=X+vt;C+=vt,z!==0&&P-z<Z.storage&&(C+=P-z),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=C,C+=Z.storage}}}const O=C%P;return O>0&&(C+=P-O),N.__size=C,N.__cache={},this}function M(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function x(N){const R=N.target;R.removeEventListener("dispose",x);const C=f.indexOf(R.__bindingPointIndex);f.splice(C,1),a.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function g(){for(const N in l)a.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:p,update:d,dispose:g}}class sC{constructor(t={}){const{canvas:n=UT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,g=null;const N=[],R=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1;this._outputColorSpace=wi;let O=0,I=0,H=null,U=-1,D=null;const V=new pn,Q=new pn;let et=null;const pt=new ze(0);let ct=0,B=n.width,Z=n.height,X=1,vt=null,z=null;const q=new pn(0,0,B,Z),rt=new pn(0,0,B,Z);let xt=!1;const Y=new Cp;let nt=!1,st=!1;const Et=new un,At=new un,Jt=new it,zt=new pn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ie(){return H===null?X:1}let G=r;function he(L,J){return n.getContext(L,J)}try{const L={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",kt,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),G===null){const J="webgl2";if(G=he(J,L),G===null)throw he(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let re,Yt,Ut,Qt,Lt,Gt,fe,F,A,K,gt,_t,lt,It,Ot,Vt,b,St,Pt,jt,Zt,Ct,te,W;function Bt(){re=new g2(G),re.init(),Ct=new JR(G,re),Yt=new c2(G,re,t,Ct),Ut=new KR(G,re),Yt.reverseDepthBuffer&&S&&Ut.buffers.depth.setReversed(!0),Qt=new x2(G),Lt=new IR,Gt=new QR(G,re,Ut,Lt,Yt,Ct,Qt),fe=new f2(C),F=new m2(C),A=new b1(G),te=new o2(G,A),K=new _2(G,A,Qt,te),gt=new y2(G,K,A,Qt),Pt=new S2(G,Yt,Gt),Vt=new u2(Lt),_t=new zR(C,fe,F,re,Yt,te,Vt),lt=new aC(C,Lt),It=new FR,Ot=new WR(re),St=new s2(C,fe,F,Ut,gt,y,p),b=new jR(C,gt,Yt),W=new rC(G,Qt,Yt,Ut),jt=new l2(G,re,Qt),Zt=new v2(G,re,Qt),Qt.programs=_t.programs,C.capabilities=Yt,C.extensions=re,C.properties=Lt,C.renderLists=It,C.shadowMap=b,C.state=Ut,C.info=Qt}Bt();const Tt=new nC(C,G);this.xr=Tt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(B,Z,!1))},this.getSize=function(L){return L.set(B,Z)},this.setSize=function(L,J,ft=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,Z=J,n.width=Math.floor(L*X),n.height=Math.floor(J*X),ft===!0&&(n.style.width=L+"px",n.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(B*X,Z*X).floor()},this.setDrawingBufferSize=function(L,J,ft){B=L,Z=J,X=ft,n.width=Math.floor(L*ft),n.height=Math.floor(J*ft),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(q)},this.setViewport=function(L,J,ft,dt){L.isVector4?q.set(L.x,L.y,L.z,L.w):q.set(L,J,ft,dt),Ut.viewport(V.copy(q).multiplyScalar(X).round())},this.getScissor=function(L){return L.copy(rt)},this.setScissor=function(L,J,ft,dt){L.isVector4?rt.set(L.x,L.y,L.z,L.w):rt.set(L,J,ft,dt),Ut.scissor(Q.copy(rt).multiplyScalar(X).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(L){Ut.setScissorTest(xt=L)},this.setOpaqueSort=function(L){vt=L},this.setTransparentSort=function(L){z=L},this.getClearColor=function(L){return L.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,ft=!0){let dt=0;if(L){let tt=!1;if(H!==null){const Dt=H.texture.format;tt=Dt===Tp||Dt===Ep||Dt===Mp}if(tt){const Dt=H.texture.type,Ht=Dt===na||Dt===Wr||Dt===ul||Dt===fl||Dt===Sp||Dt===yp,Wt=St.getClearColor(),Kt=St.getClearAlpha(),le=Wt.r,oe=Wt.g,ae=Wt.b;Ht?(E[0]=le,E[1]=oe,E[2]=ae,E[3]=Kt,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=le,M[1]=oe,M[2]=ae,M[3]=Kt,G.clearBufferiv(G.COLOR,0,M))}else dt|=G.COLOR_BUFFER_BIT}J&&(dt|=G.DEPTH_BUFFER_BIT),ft&&(dt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",kt,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),St.dispose(),It.dispose(),Ot.dispose(),Lt.dispose(),fe.dispose(),F.dispose(),gt.dispose(),te.dispose(),W.dispose(),_t.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Nt),Tt.removeEventListener("sessionend",Ve),Ze.stop()};function kt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=Qt.autoReset,J=b.enabled,ft=b.autoUpdate,dt=b.needsUpdate,tt=b.type;Bt(),Qt.autoReset=L,b.enabled=J,b.autoUpdate=ft,b.needsUpdate=dt,b.type=tt}function yt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Xt(L){const J=L.target;J.removeEventListener("dispose",Xt),se(J)}function se(L){_e(L),Lt.remove(L)}function _e(L){const J=Lt.get(L).programs;J!==void 0&&(J.forEach(function(ft){_t.releaseProgram(ft)}),L.isShaderMaterial&&_t.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,ft,dt,tt,Dt){J===null&&(J=$t);const Ht=tt.isMesh&&tt.matrixWorld.determinant()<0,Wt=yn(L,J,ft,dt,tt);Ut.setMaterial(dt,Ht);let Kt=ft.index,le=1;if(dt.wireframe===!0){if(Kt=K.getWireframeAttribute(ft),Kt===void 0)return;le=2}const oe=ft.drawRange,ae=ft.attributes.position;let xe=oe.start*le,Le=(oe.start+oe.count)*le;Dt!==null&&(xe=Math.max(xe,Dt.start*le),Le=Math.min(Le,(Dt.start+Dt.count)*le)),Kt!==null?(xe=Math.max(xe,0),Le=Math.min(Le,Kt.count)):ae!=null&&(xe=Math.max(xe,0),Le=Math.min(Le,ae.count));const We=Le-xe;if(We<0||We===1/0)return;te.setup(tt,dt,Wt,ft,Kt);let ve,Ne=jt;if(Kt!==null&&(ve=A.get(Kt),Ne=Zt,Ne.setIndex(ve)),tt.isMesh)dt.wireframe===!0?(Ut.setLineWidth(dt.wireframeLinewidth*ie()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(tt.isLine){let ce=dt.linewidth;ce===void 0&&(ce=1),Ut.setLineWidth(ce*ie()),tt.isLineSegments?Ne.setMode(G.LINES):tt.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else tt.isPoints?Ne.setMode(G.POINTS):tt.isSprite&&Ne.setMode(G.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Ne.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ce=tt._multiDrawStarts,Oe=tt._multiDrawCounts,Ee=tt._multiDrawCount,sn=Kt?A.get(Kt).bytesPerElement:1,xi=Lt.get(dt).currentProgram.getUniforms();for(let ke=0;ke<Ee;ke++)xi.setValue(G,"_gl_DrawID",ke),Ne.render(ce[ke]/sn,Oe[ke])}else if(tt.isInstancedMesh)Ne.renderInstances(xe,We,tt.count);else if(ft.isInstancedBufferGeometry){const ce=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Oe=Math.min(ft.instanceCount,ce);Ne.renderInstances(xe,We,Oe)}else Ne.render(xe,We)};function pe(L,J,ft){L.transparent===!0&&L.side===ta&&L.forceSinglePass===!1?(L.side=si,L.needsUpdate=!0,Ln(L,J,ft),L.side=hr,L.needsUpdate=!0,Ln(L,J,ft),L.side=ta):Ln(L,J,ft)}this.compile=function(L,J,ft=null){ft===null&&(ft=L),g=Ot.get(ft),g.init(J),R.push(g),ft.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(g.pushLight(tt),tt.castShadow&&g.pushShadow(tt))}),L!==ft&&L.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(g.pushLight(tt),tt.castShadow&&g.pushShadow(tt))}),g.setupLights();const dt=new Set;return L.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let Ht=0;Ht<Dt.length;Ht++){const Wt=Dt[Ht];pe(Wt,ft,tt),dt.add(Wt)}else pe(Dt,ft,tt),dt.add(Dt)}),g=R.pop(),dt},this.compileAsync=function(L,J,ft=null){const dt=this.compile(L,J,ft);return new Promise(tt=>{function Dt(){if(dt.forEach(function(Ht){Lt.get(Ht).currentProgram.isReady()&&dt.delete(Ht)}),dt.size===0){tt(L);return}setTimeout(Dt,10)}re.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let an=null;function Ge(L){an&&an(L)}function Nt(){Ze.stop()}function Ve(){Ze.start()}const Ze=new vx;Ze.setAnimationLoop(Ge),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(L){an=L,Tt.setAnimationLoop(L),L===null?Ze.stop():Ze.start()},Tt.addEventListener("sessionstart",Nt),Tt.addEventListener("sessionend",Ve),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(J),J=Tt.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,J,H),g=Ot.get(L,R.length),g.init(J),R.push(g),At.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Y.setFromProjectionMatrix(At),st=this.localClippingEnabled,nt=Vt.init(this.clippingPlanes,st),x=It.get(L,N.length),x.init(),N.push(x),Tt.enabled===!0&&Tt.isPresenting===!0){const Dt=C.xr.getDepthSensingMesh();Dt!==null&&Yn(Dt,J,-1/0,C.sortObjects)}Yn(L,J,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(vt,z),ee=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ee&&St.addToRenderList(x,L),this.info.render.frame++,nt===!0&&Vt.beginShadows();const ft=g.state.shadowsArray;b.render(ft,L,J),nt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=x.opaque,tt=x.transmissive;if(g.setupLights(),J.isArrayCamera){const Dt=J.cameras;if(tt.length>0)for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const Kt=Dt[Ht];Ni(dt,tt,L,Kt)}ee&&St.render(L);for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const Kt=Dt[Ht];Ue(x,L,Kt,Kt.viewport)}}else tt.length>0&&Ni(dt,tt,L,J),ee&&St.render(L),Ue(x,L,J);H!==null&&I===0&&(Gt.updateMultisampleRenderTarget(H),Gt.updateRenderTargetMipmap(H)),L.isScene===!0&&L.onAfterRender(C,L,J),te.resetDefaultState(),U=-1,D=null,R.pop(),R.length>0?(g=R[R.length-1],nt===!0&&Vt.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Yn(L,J,ft,dt){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)ft=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){dt&&zt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(At);const Ht=gt.update(L),Wt=L.material;Wt.visible&&x.push(L,Ht,Wt,ft,zt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){const Ht=gt.update(L),Wt=L.material;if(dt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),zt.copy(L.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),zt.copy(Ht.boundingSphere.center)),zt.applyMatrix4(L.matrixWorld).applyMatrix4(At)),Array.isArray(Wt)){const Kt=Ht.groups;for(let le=0,oe=Kt.length;le<oe;le++){const ae=Kt[le],xe=Wt[ae.materialIndex];xe&&xe.visible&&x.push(L,Ht,xe,ft,zt.z,ae)}}else Wt.visible&&x.push(L,Ht,Wt,ft,zt.z,null)}}const Dt=L.children;for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++)Yn(Dt[Ht],J,ft,dt)}function Ue(L,J,ft,dt){const tt=L.opaque,Dt=L.transmissive,Ht=L.transparent;g.setupLightsView(ft),nt===!0&&Vt.setGlobalState(C.clippingPlanes,ft),dt&&Ut.viewport(V.copy(dt)),tt.length>0&&oi(tt,J,ft),Dt.length>0&&oi(Dt,J,ft),Ht.length>0&&oi(Ht,J,ft),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Ni(L,J,ft,dt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[dt.id]===void 0&&(g.state.transmissionRenderTarget[dt.id]=new Yr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?vl:na,minFilter:Vr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Fe.workingColorSpace}));const Dt=g.state.transmissionRenderTarget[dt.id],Ht=dt.viewport||V;Dt.setSize(Ht.z*C.transmissionResolutionScale,Ht.w*C.transmissionResolutionScale);const Wt=C.getRenderTarget(),Kt=C.getActiveCubeFace(),le=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(pt),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),ee&&St.render(ft);const oe=C.toneMapping;C.toneMapping=fr;const ae=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),g.setupLightsView(dt),nt===!0&&Vt.setGlobalState(C.clippingPlanes,dt),oi(L,ft,dt),Gt.updateMultisampleRenderTarget(Dt),Gt.updateRenderTargetMipmap(Dt),re.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Le=0,We=J.length;Le<We;Le++){const ve=J[Le],Ne=ve.object,ce=ve.geometry,Oe=ve.material,Ee=ve.group;if(Oe.side===ta&&Ne.layers.test(dt.layers)){const sn=Oe.side;Oe.side=si,Oe.needsUpdate=!0,$n(Ne,ft,dt,ce,Oe,Ee),Oe.side=sn,Oe.needsUpdate=!0,xe=!0}}xe===!0&&(Gt.updateMultisampleRenderTarget(Dt),Gt.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Wt,Kt,le),C.setClearColor(pt,ct),ae!==void 0&&(dt.viewport=ae),C.toneMapping=oe}function oi(L,J,ft){const dt=J.isScene===!0?J.overrideMaterial:null;for(let tt=0,Dt=L.length;tt<Dt;tt++){const Ht=L[tt],Wt=Ht.object,Kt=Ht.geometry,le=Ht.group;let oe=Ht.material;oe.allowOverride===!0&&dt!==null&&(oe=dt),Wt.layers.test(ft.layers)&&$n(Wt,J,ft,Kt,oe,le)}}function $n(L,J,ft,dt,tt,Dt){L.onBeforeRender(C,J,ft,dt,tt,Dt),L.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(C,J,ft,dt,L,Dt),tt.transparent===!0&&tt.side===ta&&tt.forceSinglePass===!1?(tt.side=si,tt.needsUpdate=!0,C.renderBufferDirect(ft,J,dt,tt,L,Dt),tt.side=hr,tt.needsUpdate=!0,C.renderBufferDirect(ft,J,dt,tt,L,Dt),tt.side=ta):C.renderBufferDirect(ft,J,dt,tt,L,Dt),L.onAfterRender(C,J,ft,dt,tt,Dt)}function Ln(L,J,ft){J.isScene!==!0&&(J=$t);const dt=Lt.get(L),tt=g.state.lights,Dt=g.state.shadowsArray,Ht=tt.state.version,Wt=_t.getParameters(L,tt.state,Dt,J,ft),Kt=_t.getProgramCacheKey(Wt);let le=dt.programs;dt.environment=L.isMeshStandardMaterial?J.environment:null,dt.fog=J.fog,dt.envMap=(L.isMeshStandardMaterial?F:fe).get(L.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,le===void 0&&(L.addEventListener("dispose",Xt),le=new Map,dt.programs=le);let oe=le.get(Kt);if(oe!==void 0){if(dt.currentProgram===oe&&dt.lightsStateVersion===Ht)return Xe(L,Wt),oe}else Wt.uniforms=_t.getUniforms(L),L.onBeforeCompile(Wt,C),oe=_t.acquireProgram(Wt,Kt),le.set(Kt,oe),dt.uniforms=Wt.uniforms;const ae=dt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ae.clippingPlanes=Vt.uniform),Xe(L,Wt),dt.needsLights=en(L),dt.lightsStateVersion=Ht,dt.needsLights&&(ae.ambientLightColor.value=tt.state.ambient,ae.lightProbe.value=tt.state.probe,ae.directionalLights.value=tt.state.directional,ae.directionalLightShadows.value=tt.state.directionalShadow,ae.spotLights.value=tt.state.spot,ae.spotLightShadows.value=tt.state.spotShadow,ae.rectAreaLights.value=tt.state.rectArea,ae.ltc_1.value=tt.state.rectAreaLTC1,ae.ltc_2.value=tt.state.rectAreaLTC2,ae.pointLights.value=tt.state.point,ae.pointLightShadows.value=tt.state.pointShadow,ae.hemisphereLights.value=tt.state.hemi,ae.directionalShadowMap.value=tt.state.directionalShadowMap,ae.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ae.spotShadowMap.value=tt.state.spotShadowMap,ae.spotLightMatrix.value=tt.state.spotLightMatrix,ae.spotLightMap.value=tt.state.spotLightMap,ae.pointShadowMap.value=tt.state.pointShadowMap,ae.pointShadowMatrix.value=tt.state.pointShadowMatrix),dt.currentProgram=oe,dt.uniformsList=null,oe}function mn(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=uu.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Xe(L,J){const ft=Lt.get(L);ft.outputColorSpace=J.outputColorSpace,ft.batching=J.batching,ft.batchingColor=J.batchingColor,ft.instancing=J.instancing,ft.instancingColor=J.instancingColor,ft.instancingMorph=J.instancingMorph,ft.skinning=J.skinning,ft.morphTargets=J.morphTargets,ft.morphNormals=J.morphNormals,ft.morphColors=J.morphColors,ft.morphTargetsCount=J.morphTargetsCount,ft.numClippingPlanes=J.numClippingPlanes,ft.numIntersection=J.numClipIntersection,ft.vertexAlphas=J.vertexAlphas,ft.vertexTangents=J.vertexTangents,ft.toneMapping=J.toneMapping}function yn(L,J,ft,dt,tt){J.isScene!==!0&&(J=$t),Gt.resetTextureUnits();const Dt=J.fog,Ht=dt.isMeshStandardMaterial?J.environment:null,Wt=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Js,Kt=(dt.isMeshStandardMaterial?F:fe).get(dt.envMap||Ht),le=dt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,oe=!!ft.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),ae=!!ft.morphAttributes.position,xe=!!ft.morphAttributes.normal,Le=!!ft.morphAttributes.color;let We=fr;dt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(We=C.toneMapping);const ve=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ne=ve!==void 0?ve.length:0,ce=Lt.get(dt),Oe=g.state.lights;if(nt===!0&&(st===!0||L!==D)){const Mn=L===D&&dt.id===U;Vt.setState(dt,L,Mn)}let Ee=!1;dt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Oe.state.version||ce.outputColorSpace!==Wt||tt.isBatchedMesh&&ce.batching===!1||!tt.isBatchedMesh&&ce.batching===!0||tt.isBatchedMesh&&ce.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ce.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ce.instancing===!1||!tt.isInstancedMesh&&ce.instancing===!0||tt.isSkinnedMesh&&ce.skinning===!1||!tt.isSkinnedMesh&&ce.skinning===!0||tt.isInstancedMesh&&ce.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ce.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ce.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ce.instancingMorph===!1&&tt.morphTexture!==null||ce.envMap!==Kt||dt.fog===!0&&ce.fog!==Dt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Vt.numPlanes||ce.numIntersection!==Vt.numIntersection)||ce.vertexAlphas!==le||ce.vertexTangents!==oe||ce.morphTargets!==ae||ce.morphNormals!==xe||ce.morphColors!==Le||ce.toneMapping!==We||ce.morphTargetsCount!==Ne)&&(Ee=!0):(Ee=!0,ce.__version=dt.version);let sn=ce.currentProgram;Ee===!0&&(sn=Ln(dt,J,tt));let xi=!1,ke=!1,Oi=!1;const qe=sn.getUniforms(),Nn=ce.uniforms;if(Ut.useProgram(sn.program)&&(xi=!0,ke=!0,Oi=!0),dt.id!==U&&(U=dt.id,ke=!0),xi||D!==L){Ut.buffers.depth.getReversed()?(Et.copy(L.projectionMatrix),NT(Et),OT(Et),qe.setValue(G,"projectionMatrix",Et)):qe.setValue(G,"projectionMatrix",L.projectionMatrix),qe.setValue(G,"viewMatrix",L.matrixWorldInverse);const An=qe.map.cameraPosition;An!==void 0&&An.setValue(G,Jt.setFromMatrixPosition(L.matrixWorld)),Yt.logarithmicDepthBuffer&&qe.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&qe.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),D!==L&&(D=L,ke=!0,Oi=!0)}if(tt.isSkinnedMesh){qe.setOptional(G,tt,"bindMatrix"),qe.setOptional(G,tt,"bindMatrixInverse");const Mn=tt.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),qe.setValue(G,"boneTexture",Mn.boneTexture,Gt))}tt.isBatchedMesh&&(qe.setOptional(G,tt,"batchingTexture"),qe.setValue(G,"batchingTexture",tt._matricesTexture,Gt),qe.setOptional(G,tt,"batchingIdTexture"),qe.setValue(G,"batchingIdTexture",tt._indirectTexture,Gt),qe.setOptional(G,tt,"batchingColorTexture"),tt._colorsTexture!==null&&qe.setValue(G,"batchingColorTexture",tt._colorsTexture,Gt));const vn=ft.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Pt.update(tt,ft,sn),(ke||ce.receiveShadow!==tt.receiveShadow)&&(ce.receiveShadow=tt.receiveShadow,qe.setValue(G,"receiveShadow",tt.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Nn.envMap.value=Kt,Nn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&J.environment!==null&&(Nn.envMapIntensity.value=J.environmentIntensity),ke&&(qe.setValue(G,"toneMappingExposure",C.toneMappingExposure),ce.needsLights&&jn(Nn,Oi),Dt&&dt.fog===!0&&lt.refreshFogUniforms(Nn,Dt),lt.refreshMaterialUniforms(Nn,dt,X,Z,g.state.transmissionRenderTarget[L.id]),uu.upload(G,mn(ce),Nn,Gt)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(uu.upload(G,mn(ce),Nn,Gt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&qe.setValue(G,"center",tt.center),qe.setValue(G,"modelViewMatrix",tt.modelViewMatrix),qe.setValue(G,"normalMatrix",tt.normalMatrix),qe.setValue(G,"modelMatrix",tt.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const Mn=dt.uniformsGroups;for(let An=0,Si=Mn.length;An<Si;An++){const Pi=Mn[An];W.update(Pi,sn),W.bind(Pi,sn)}}return sn}function jn(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function en(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(L,J,ft){const dt=Lt.get(L);dt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Lt.get(L.texture).__webglTexture=J,Lt.get(L.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ft,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const ft=Lt.get(L);ft.__webglFramebuffer=J,ft.__useDefaultFramebuffer=J===void 0};const gn=G.createFramebuffer();this.setRenderTarget=function(L,J=0,ft=0){H=L,O=J,I=ft;let dt=!0,tt=null,Dt=!1,Ht=!1;if(L){const Kt=Lt.get(L);if(Kt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(G.FRAMEBUFFER,null),dt=!1;else if(Kt.__webglFramebuffer===void 0)Gt.setupRenderTarget(L);else if(Kt.__hasExternalTextures)Gt.rebindTextures(L,Lt.get(L.texture).__webglTexture,Lt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ae=L.depthTexture;if(Kt.__boundDepthTexture!==ae){if(ae!==null&&Lt.has(ae)&&(L.width!==ae.image.width||L.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(L)}}const le=L.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Ht=!0);const oe=Lt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(oe[J])?tt=oe[J][ft]:tt=oe[J],Dt=!0):L.samples>0&&Gt.useMultisampledRTT(L)===!1?tt=Lt.get(L).__webglMultisampledFramebuffer:Array.isArray(oe)?tt=oe[ft]:tt=oe,V.copy(L.viewport),Q.copy(L.scissor),et=L.scissorTest}else V.copy(q).multiplyScalar(X).floor(),Q.copy(rt).multiplyScalar(X).floor(),et=xt;if(ft!==0&&(tt=gn),Ut.bindFramebuffer(G.FRAMEBUFFER,tt)&&dt&&Ut.drawBuffers(L,tt),Ut.viewport(V),Ut.scissor(Q),Ut.setScissorTest(et),Dt){const Kt=Lt.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+J,Kt.__webglTexture,ft)}else if(Ht){const Kt=Lt.get(L.texture),le=J;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Kt.__webglTexture,ft,le)}else if(L!==null&&ft!==0){const Kt=Lt.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Kt.__webglTexture,ft)}U=-1},this.readRenderTargetPixels=function(L,J,ft,dt,tt,Dt,Ht,Wt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt){Ut.bindFramebuffer(G.FRAMEBUFFER,Kt);try{const le=L.textures[Wt],oe=le.format,ae=le.type;if(!Yt.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-dt&&ft>=0&&ft<=L.height-tt&&(L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Wt),G.readPixels(J,ft,dt,tt,Ct.convert(oe),Ct.convert(ae),Dt))}finally{const le=H!==null?Lt.get(H).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(L,J,ft,dt,tt,Dt,Ht,Wt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=Lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt)if(J>=0&&J<=L.width-dt&&ft>=0&&ft<=L.height-tt){Ut.bindFramebuffer(G.FRAMEBUFFER,Kt);const le=L.textures[Wt],oe=le.format,ae=le.type;if(!Yt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,xe),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Wt),G.readPixels(J,ft,dt,tt,Ct.convert(oe),Ct.convert(ae),0);const Le=H!==null?Lt.get(H).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,Le);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await LT(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,xe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(xe),G.deleteSync(We),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,ft=0){const dt=Math.pow(2,-ft),tt=Math.floor(L.image.width*dt),Dt=Math.floor(L.image.height*dt),Ht=J!==null?J.x:0,Wt=J!==null?J.y:0;Gt.setTexture2D(L,0),G.copyTexSubImage2D(G.TEXTURE_2D,ft,0,0,Ht,Wt,tt,Dt),Ut.unbindTexture()};const _n=G.createFramebuffer(),Ie=G.createFramebuffer();this.copyTextureToTexture=function(L,J,ft=null,dt=null,tt=0,Dt=null){Dt===null&&(tt!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=tt,tt=0):Dt=0);let Ht,Wt,Kt,le,oe,ae,xe,Le,We;const ve=L.isCompressedTexture?L.mipmaps[Dt]:L.image;if(ft!==null)Ht=ft.max.x-ft.min.x,Wt=ft.max.y-ft.min.y,Kt=ft.isBox3?ft.max.z-ft.min.z:1,le=ft.min.x,oe=ft.min.y,ae=ft.isBox3?ft.min.z:0;else{const vn=Math.pow(2,-tt);Ht=Math.floor(ve.width*vn),Wt=Math.floor(ve.height*vn),L.isDataArrayTexture?Kt=ve.depth:L.isData3DTexture?Kt=Math.floor(ve.depth*vn):Kt=1,le=0,oe=0,ae=0}dt!==null?(xe=dt.x,Le=dt.y,We=dt.z):(xe=0,Le=0,We=0);const Ne=Ct.convert(J.format),ce=Ct.convert(J.type);let Oe;J.isData3DTexture?(Gt.setTexture3D(J,0),Oe=G.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Gt.setTexture2DArray(J,0),Oe=G.TEXTURE_2D_ARRAY):(Gt.setTexture2D(J,0),Oe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);const Ee=G.getParameter(G.UNPACK_ROW_LENGTH),sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),xi=G.getParameter(G.UNPACK_SKIP_PIXELS),ke=G.getParameter(G.UNPACK_SKIP_ROWS),Oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ve.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ve.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,le),G.pixelStorei(G.UNPACK_SKIP_ROWS,oe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ae);const qe=L.isDataArrayTexture||L.isData3DTexture,Nn=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const vn=Lt.get(L),Mn=Lt.get(J),An=Lt.get(vn.__renderTarget),Si=Lt.get(Mn.__renderTarget);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Pi=0;Pi<Kt;Pi++)qe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(L).__webglTexture,tt,ae+Pi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(J).__webglTexture,Dt,We+Pi)),G.blitFramebuffer(le,oe,Ht,Wt,xe,Le,Ht,Wt,G.DEPTH_BUFFER_BIT,G.NEAREST);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(tt!==0||L.isRenderTargetTexture||Lt.has(L)){const vn=Lt.get(L),Mn=Lt.get(J);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,_n),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ie);for(let An=0;An<Kt;An++)qe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vn.__webglTexture,tt,ae+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vn.__webglTexture,tt),Nn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Dt,We+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Dt),tt!==0?G.blitFramebuffer(le,oe,Ht,Wt,xe,Le,Ht,Wt,G.COLOR_BUFFER_BIT,G.NEAREST):Nn?G.copyTexSubImage3D(Oe,Dt,xe,Le,We+An,le,oe,Ht,Wt):G.copyTexSubImage2D(Oe,Dt,xe,Le,le,oe,Ht,Wt);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Nn?L.isDataTexture||L.isData3DTexture?G.texSubImage3D(Oe,Dt,xe,Le,We,Ht,Wt,Kt,Ne,ce,ve.data):J.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,Dt,xe,Le,We,Ht,Wt,Kt,Ne,ve.data):G.texSubImage3D(Oe,Dt,xe,Le,We,Ht,Wt,Kt,Ne,ce,ve):L.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,xe,Le,Ht,Wt,Ne,ce,ve.data):L.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,xe,Le,ve.width,ve.height,Ne,ve.data):G.texSubImage2D(G.TEXTURE_2D,Dt,xe,Le,Ht,Wt,Ne,ce,ve);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,xi),G.pixelStorei(G.UNPACK_SKIP_ROWS,ke),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Oi),Dt===0&&J.generateMipmaps&&G.generateMipmap(Oe),Ut.unbindTexture()},this.copyTextureToTexture3D=function(L,J,ft=null,dt=null,tt=0){return Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,J,ft,dt,tt)},this.initRenderTarget=function(L){Lt.get(L).__webglFramebuffer===void 0&&Gt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Gt.setTextureCube(L,0):L.isData3DTexture?Gt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Gt.setTexture2DArray(L,0):Gt.setTexture2D(L,0),Ut.unbindTexture()},this.resetState=function(){O=0,I=0,H=null,Ut.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Fe._getUnpackColorSpace()}}const wv={type:"change"},Np={type:"start"},Ex={type:"end"},tu=new vu,Dv=new or,oC=Math.cos(70*DT.DEG2RAD),wn=new it,ri=2*Math.PI,tn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fd=1e-6;class lC extends E1{constructor(t,n=null){super(t,n),this.state=tn.NONE,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new it,this._lastQuaternion=new qr,this._lastTargetPosition=new it,this._quat=new qr().setFromUnitVectors(t.up,new it(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iv,this._sphericalDelta=new iv,this._scale=1,this._panOffset=new it,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new it,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uC.bind(this),this._onPointerDown=cC.bind(this),this._onPointerUp=fC.bind(this),this._onContextMenu=vC.bind(this),this._onMouseWheel=pC.bind(this),this._onKeyDown=mC.bind(this),this._onTouchStart=gC.bind(this),this._onTouchMove=_C.bind(this),this._onMouseDown=hC.bind(this),this._onMouseMove=dC.bind(this),this._interceptControlDown=xC.bind(this),this._interceptControlUp=SC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wv),this.update(),this.state=tn.NONE}update(t=null){const n=this.object.position;wn.copy(n).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===tn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=ri:r>Math.PI&&(r-=ri),l<-Math.PI?l+=ri:l>Math.PI&&(l-=ri),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),n.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=wn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new it(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new it(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(tu.origin.copy(this.object.position),tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tu.direction))<oC?this.object.lookAt(this.target):(Dv.setFromNormalAndCoplanarPoint(this.object.up,this.target),tu.intersectPlane(Dv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fd||this._lastTargetPosition.distanceToSquared(this.target)>fd?(this.dispatchEvent(wv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ri/60*this.autoRotateSpeed*t:ri/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){wn.setFromMatrixColumn(n,0),wn.multiplyScalar(-t),this._panOffset.add(wn)}_panUp(t,n){this.screenSpacePanning===!0?wn.setFromMatrixColumn(n,1):(wn.setFromMatrixColumn(n,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(t),this._panOffset.add(wn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;wn.copy(l).sub(this.target);let c=wn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=n-r.top,f=r.width,h=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/n.clientHeight),this._rotateUp(ri*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/n.clientHeight),this._rotateUp(ri*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Se,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function cC(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function uC(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function fC(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ex),this.state=tn.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function hC(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=tn.DOLLY;break;case Ws.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tn.ROTATE}break;case Ws.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tn.PAN}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(Np)}function dC(a){switch(this.state){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case tn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function pC(a){this.enabled===!1||this.enableZoom===!1||this.state!==tn.NONE||(a.preventDefault(),this.dispatchEvent(Np),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Ex))}function mC(a){this.enabled!==!1&&this._handleKeyDown(a)}function gC(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=tn.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=tn.TOUCH_PAN;break;default:this.state=tn.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=tn.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=tn.TOUCH_DOLLY_ROTATE;break;default:this.state=tn.NONE}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(Np)}function _C(a){switch(this._trackPointer(a),this.state){case tn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case tn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case tn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case tn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=tn.NONE}}function vC(a){this.enabled!==!1&&a.preventDefault()}function xC(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SC(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qn=Math.PI,ln=qn*2,ol=qn/180,yC=180/qn,MC=1440,EC=398600.8,_i=6378.135,wa=60/Math.sqrt(_i*_i*_i/EC),hd=_i*wa/60,TC=1/wa,kr=.001082616,bC=-253881e-11,AC=-165597e-11,Xr=bC/kr,ml=2/3,RC=1440/(2*qn);function CC(a,t){for(var n=[31,a%4===0?29:28,31,30,31,30,31,31,30,31,30,31],r=Math.floor(t),l=1,c=0;r>c+n[l-1]&&l<12;)c+=n[l-1],l+=1;var f=l,h=r-c,p=(t-r)*24,d=Math.floor(p);p=(p-d)*60;var _=Math.floor(p),v=(p-_)*60;return{mon:f,day:h,hr:d,minute:_,sec:v}}function Uv(a,t,n,r,l,c){var f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*a-Math.floor(7*(a+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+17210135e-1+((f/6e4+c/60+l)/60+r)/24}function Op(a,t,n,r,l,c){var f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(a instanceof Date){var h=a;return Uv(h.getUTCFullYear(),h.getUTCMonth()+1,h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds())}return Uv(a,t,n,r,l,c,f)}function Tx(a,t){var n=a.e3,r=a.ee2,l=a.peo,c=a.pgho,f=a.pho,h=a.pinco,p=a.plo,d=a.se2,_=a.se3,v=a.sgh2,S=a.sgh3,y=a.sgh4,E=a.sh2,M=a.sh3,x=a.si2,g=a.si3,N=a.sl2,R=a.sl3,C=a.sl4,P=a.t,O=a.xgh2,I=a.xgh3,H=a.xgh4,U=a.xh2,D=a.xh3,V=a.xi2,Q=a.xi3,et=a.xl2,pt=a.xl3,ct=a.xl4,B=a.zmol,Z=a.zmos,X=t.init,vt=t.opsmode,z=t.ep,q=t.inclp,rt=t.nodep,xt=t.argpp,Y=t.mp,nt,st,Et,At,Jt,zt,$t,ee,ie,G,he,re,Yt,Ut,Qt,Lt,Gt,fe,F,A,K,gt=119459e-10,_t=.01675,lt=.00015835218,It=.0549;K=Z+gt*P,X==="y"&&(K=Z),A=K+2*_t*Math.sin(K),Gt=Math.sin(A),G=.5*Gt*Gt-.25,he=-.5*Gt*Math.cos(A);var Ot=d*G+_*he,Vt=x*G+g*he,b=N*G+R*he+C*Gt,St=v*G+S*he+y*Gt,Pt=E*G+M*he;K=B+lt*P,X==="y"&&(K=B),A=K+2*It*Math.sin(K),Gt=Math.sin(A),G=.5*Gt*Gt-.25,he=-.5*Gt*Math.cos(A);var jt=r*G+n*he,Zt=V*G+Q*he,Ct=et*G+pt*he+ct*Gt,te=O*G+I*he+H*Gt,W=U*G+D*he;return re=Ot+jt,Qt=Vt+Zt,Lt=b+Ct,Yt=St+te,Ut=Pt+W,X==="n"&&(re-=l,Qt-=h,Lt-=p,Yt-=c,Ut-=f,q+=Qt,z+=re,At=Math.sin(q),Et=Math.cos(q),q>=.2?(Ut/=At,Yt-=Et*Ut,xt+=Yt,rt+=Ut,Y+=Lt):(zt=Math.sin(rt),Jt=Math.cos(rt),nt=At*zt,st=At*Jt,$t=Ut*Jt+Qt*Et*zt,ee=-Ut*zt+Qt*Et*Jt,nt+=$t,st+=ee,rt%=ln,rt<0&&vt==="a"&&(rt+=ln),fe=Y+xt+Et*rt,ie=Lt+Yt-Qt*rt*At,fe+=ie,F=rt,rt=Math.atan2(nt,st),rt<0&&vt==="a"&&(rt+=ln),Math.abs(F-rt)>qn&&(rt<F?rt+=ln:rt-=ln),Y+=Lt,xt=fe-Y-Et*rt)),{ep:z,inclp:q,nodep:rt,argpp:xt,mp:Y}}function wC(a){var t=a.epoch,n=a.ep,r=a.argpp,l=a.tc,c=a.inclp,f=a.nodep,h=a.np,p,d,_,v,S,y,E,M,x,g,N,R,C,P,O,I,H,U,D,V,Q,et,pt,ct,B,Z,X,vt,z,q,rt,xt,Y,nt,st,Et,At,Jt,zt,$t,ee,ie,G,he,re,Yt,Ut,Qt,Lt,Gt,fe,F,A,K,gt,_t,lt,It,Ot,Vt,b,St,Pt,jt=.01675,Zt=.0549,Ct=29864797e-13,te=47968065e-14,W=.39785416,Bt=.91744867,Tt=.1945905,kt=-.98088458,wt=h,yt=n,Xt=Math.sin(f),se=Math.cos(f),_e=Math.sin(r),pe=Math.cos(r),an=Math.sin(c),Ge=Math.cos(c),Nt=yt*yt,Ve=1-Nt,Ze=Math.sqrt(Ve),Yn=0,Ue=0,Ni=0,oi=0,$n=0,Ln=t+18261.5+l/1440,mn=(4.523602-.00092422029*Ln)%ln,Xe=Math.sin(mn),yn=Math.cos(mn),jn=.91375164-.03568096*yn,en=Math.sqrt(1-jn*jn),gn=.089683511*Xe/en,_n=Math.sqrt(1-gn*gn),Ie=5.8351514+.001944368*Ln,L=.39785416*Xe/en,J=_n*yn+.91744867*gn*Xe;L=Math.atan2(L,J),L+=Ie-mn;var ft=Math.cos(L),dt=Math.sin(L);V=Tt,Q=kt,ct=Bt,B=W,et=se,pt=Xt,N=Ct;for(var tt=1/wt,Dt=0;Dt<2;)Dt+=1,p=V*et+Q*ct*pt,_=-Q*et+V*ct*pt,E=-V*pt+Q*ct*et,M=Q*B,x=Q*pt+V*ct*et,g=V*B,d=Ge*E+an*M,v=Ge*x+an*g,S=-an*E+Ge*M,y=-an*x+Ge*g,R=p*pe+d*_e,C=_*pe+v*_e,P=-p*_e+d*pe,O=-_*_e+v*pe,I=S*_e,H=y*_e,U=S*pe,D=y*pe,b=12*R*R-3*P*P,St=24*R*C-6*P*O,Pt=12*C*C-3*O*O,F=3*(p*p+d*d)+b*Nt,A=6*(p*_+d*v)+St*Nt,K=3*(_*_+v*v)+Pt*Nt,gt=-6*p*S+Nt*(-24*R*U-6*P*I),_t=-6*(p*y+_*S)+Nt*(-24*(C*U+R*D)+-6*(P*H+O*I)),lt=-6*_*y+Nt*(-24*C*D-6*O*H),It=6*d*S+Nt*(24*R*I-6*P*U),Ot=6*(v*S+d*y)+Nt*(24*(C*I+R*H)-6*(O*U+P*D)),Vt=6*v*y+Nt*(24*C*H-6*O*D),F=F+F+Ve*b,A=A+A+Ve*St,K=K+K+Ve*Pt,Ut=N*tt,Yt=-.5*Ut/Ze,Qt=Ut*Ze,re=-15*yt*Qt,Lt=R*P+C*O,Gt=C*P+R*O,fe=C*O-R*P,Dt===1&&(Z=re,X=Yt,vt=Ut,z=Qt,q=Lt,rt=Gt,xt=fe,Y=F,nt=A,st=K,Et=gt,At=_t,Jt=lt,zt=It,$t=Ot,ee=Vt,ie=b,G=St,he=Pt,V=ft,Q=dt,ct=jn,B=en,et=_n*se+gn*Xt,pt=Xt*_n-se*gn,N=te);var Ht=(4.7199672+(.2299715*Ln-Ie))%ln,Wt=(6.2565837+.017201977*Ln)%ln,Kt=2*Z*rt,le=2*Z*xt,oe=2*X*At,ae=2*X*(Jt-Et),xe=-2*vt*nt,Le=-2*vt*(st-Y),We=-2*vt*(-21-9*Nt)*jt,ve=2*z*G,Ne=2*z*(he-ie),ce=-18*z*jt,Oe=-2*X*$t,Ee=-2*X*(ee-zt),sn=2*re*Gt,xi=2*re*fe,ke=2*Yt*_t,Oi=2*Yt*(lt-gt),qe=-2*Ut*A,Nn=-2*Ut*(K-F),vn=-2*Ut*(-21-9*Nt)*Zt,Mn=2*Qt*St,An=2*Qt*(Pt-b),Si=-18*Qt*Zt,Pi=-2*Yt*Ot,Ml=-2*Yt*(Vt-It);return{snodm:Xt,cnodm:se,sinim:an,cosim:Ge,sinomm:_e,cosomm:pe,day:Ln,e3:xi,ee2:sn,em:yt,emsq:Nt,gam:Ie,peo:Yn,pgho:oi,pho:$n,pinco:Ue,plo:Ni,rtemsq:Ze,se2:Kt,se3:le,sgh2:ve,sgh3:Ne,sgh4:ce,sh2:Oe,sh3:Ee,si2:oe,si3:ae,sl2:xe,sl3:Le,sl4:We,s1:re,s2:Yt,s3:Ut,s4:Qt,s5:Lt,s6:Gt,s7:fe,ss1:Z,ss2:X,ss3:vt,ss4:z,ss5:q,ss6:rt,ss7:xt,sz1:Y,sz2:nt,sz3:st,sz11:Et,sz12:At,sz13:Jt,sz21:zt,sz22:$t,sz23:ee,sz31:ie,sz32:G,sz33:he,xgh2:Mn,xgh3:An,xgh4:Si,xh2:Pi,xh3:Ml,xi2:ke,xi3:Oi,xl2:qe,xl3:Nn,xl4:vn,nm:wt,z1:F,z2:A,z3:K,z11:gt,z12:_t,z13:lt,z21:It,z22:Ot,z23:Vt,z31:b,z32:St,z33:Pt,zmol:Ht,zmos:Wt}}function DC(a){var t=a.cosim,n=a.argpo,r=a.s1,l=a.s2,c=a.s3,f=a.s4,h=a.s5,p=a.sinim,d=a.ss1,_=a.ss2,v=a.ss3,S=a.ss4,y=a.ss5,E=a.sz1,M=a.sz3,x=a.sz11,g=a.sz13,N=a.sz21,R=a.sz23,C=a.sz31,P=a.sz33,O=a.t,I=a.tc,H=a.gsto,U=a.mo,D=a.mdot,V=a.no,Q=a.nodeo,et=a.nodedot,pt=a.xpidot,ct=a.z1,B=a.z3,Z=a.z11,X=a.z13,vt=a.z21,z=a.z23,q=a.z31,rt=a.z33,xt=a.ecco,Y=a.eccsq,nt=a.emsq,st=a.em,Et=a.argpm,At=a.inclm,Jt=a.mm,zt=a.nm,$t=a.nodem,ee=a.irez,ie=a.atime,G=a.d2201,he=a.d2211,re=a.d3210,Yt=a.d3222,Ut=a.d4410,Qt=a.d4422,Lt=a.d5220,Gt=a.d5232,fe=a.d5421,F=a.d5433,A=a.dedt,K=a.didt,gt=a.dmdt,_t=a.dnodt,lt=a.domdt,It=a.del1,Ot=a.del2,Vt=a.del3,b=a.xfact,St=a.xlamo,Pt=a.xli,jt=a.xni,Zt,Ct,te,W,Bt,Tt,kt,wt,yt,Xt,se,_e,pe,an,Ge,Nt,Ve,Ze,Yn,Ue,Ni,oi,$n,Ln,mn,Xe,yn,jn,en,gn,_n,Ie,L=17891679e-13,J=21460748e-13,ft=22123015e-14,dt=17891679e-13,tt=73636953e-16,Dt=21765803e-16,Ht=.0043752690880113,Wt=37393792e-14,Kt=11428639e-14,le=.00015835218,oe=119459e-10;ee=0,zt<.0052359877&&zt>.0034906585&&(ee=1),zt>=.00826&&zt<=.00924&&st>=.5&&(ee=2);var ae=d*oe*y,xe=_*oe*(x+g),Le=-oe*v*(E+M-14-6*nt),We=S*oe*(C+P-6),ve=-oe*_*(N+R);(At<.052359877||At>qn-.052359877)&&(ve=0),p!==0&&(ve/=p);var Ne=We-t*ve;A=ae+r*le*h,K=xe+l*le*(Z+X),gt=Le-le*c*(ct+B-14-6*nt);var ce=f*le*(q+rt-6),Oe=-le*l*(vt+z);(At<.052359877||At>qn-.052359877)&&(Oe=0),lt=Ne+ce,_t=ve,p!==0&&(lt-=t/p*Oe,_t+=Oe/p);var Ee=0,sn=(H+I*Ht)%ln;if(st+=A*O,At+=K*O,Et+=lt*O,$t+=_t*O,Jt+=gt*O,ee!==0){if(gn=Math.pow(zt/wa,ml),ee===2){_n=t*t;var xi=st;st=xt;var ke=nt;nt=Y,Ie=st*nt,an=-.306-(st-.64)*.44,st<=.65?(Ge=3.616-13.247*st+16.29*nt,Ve=-19.302+117.39*st-228.419*nt+156.591*Ie,Ze=-18.9068+109.7927*st-214.6334*nt+146.5816*Ie,Yn=-41.122+242.694*st-471.094*nt+313.953*Ie,Ue=-146.407+841.88*st-1629.014*nt+1083.435*Ie,Ni=-532.114+3017.977*st-5740.032*nt+3708.276*Ie):(Ge=-72.099+331.819*st-508.738*nt+266.724*Ie,Ve=-346.844+1582.851*st-2415.925*nt+1246.113*Ie,Ze=-342.585+1554.908*st-2366.899*nt+1215.972*Ie,Yn=-1052.797+4758.686*st-7193.992*nt+3651.957*Ie,Ue=-3581.69+16178.11*st-24462.77*nt+12422.52*Ie,st>.715?Ni=-5149.66+29936.92*st-54087.36*nt+31324.56*Ie:Ni=1464.74-4664.75*st+3763.64*nt),st<.7?(Ln=-919.2277+4988.61*st-9064.77*nt+5542.21*Ie,oi=-822.71072+4568.6173*st-8491.4146*nt+5337.524*Ie,$n=-853.666+4690.25*st-8624.77*nt+5341.4*Ie):(Ln=-37995.78+161616.52*st-229838.2*nt+109377.94*Ie,oi=-51752.104+218913.95*st-309468.16*nt+146349.42*Ie,$n=-40023.88+170470.89*st-242699.48*nt+115605.82*Ie),mn=p*p,Zt=.75*(1+2*t+_n),Ct=1.5*mn,W=1.875*p*(1-2*t-3*_n),Bt=-1.875*p*(1+2*t-3*_n),kt=35*mn*Zt,wt=39.375*mn*mn,yt=9.84375*p*(mn*(1-2*t-5*_n)+.33333333*(-2+4*t+6*_n)),Xt=p*(4.92187512*mn*(-2-4*t+10*_n)+6.56250012*(1+2*t-3*_n)),se=29.53125*p*(2-8*t+_n*(-12+8*t+10*_n)),_e=29.53125*p*(-2-8*t+_n*(12+8*t-10*_n)),jn=zt*zt,en=gn*gn,yn=3*jn*en,Xe=yn*dt,G=Xe*Zt*an,he=Xe*Ct*Ge,yn*=gn,Xe=yn*Wt,re=Xe*W*Ve,Yt=Xe*Bt*Ze,yn*=gn,Xe=2*yn*tt,Ut=Xe*kt*Yn,Qt=Xe*wt*Ue,yn*=gn,Xe=yn*Kt,Lt=Xe*yt*Ni,Gt=Xe*Xt*$n,Xe=2*yn*Dt,fe=Xe*se*oi,F=Xe*_e*Ln,St=(U+Q+Q-(sn+sn))%ln,b=D+gt+2*(et+_t-Ht)-V,st=xi,nt=ke}ee===1&&(pe=1+nt*(-2.5+.8125*nt),Ve=1+2*nt,Nt=1+nt*(-6+6.60937*nt),Zt=.75*(1+t)*(1+t),te=.9375*p*p*(1+3*t)-.75*(1+t),Tt=1+t,Tt*=1.875*Tt*Tt,It=3*zt*zt*gn*gn,Ot=2*It*Zt*pe*L,Vt=3*It*Tt*Nt*ft*gn,It=It*te*Ve*J*gn,St=(U+Q+n-sn)%ln,b=D+pt+gt+lt+_t-(V+Ht)),Pt=St,jt=V,ie=0,zt=V+Ee}return{em:st,argpm:Et,inclm:At,mm:Jt,nm:zt,nodem:$t,irez:ee,atime:ie,d2201:G,d2211:he,d3210:re,d3222:Yt,d4410:Ut,d4422:Qt,d5220:Lt,d5232:Gt,d5421:fe,d5433:F,dedt:A,didt:K,dmdt:gt,dndt:Ee,dnodt:_t,domdt:lt,del1:It,del2:Ot,del3:Vt,xfact:b,xlamo:St,xli:Pt,xni:jt}}function Lv(a){var t=(a-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return n=n*ol/240%ln,n<0&&(n+=ln),n}function op(a,t,n,r,l,c,f){return a instanceof Date?Lv(Op(a)):Lv(a)}function UC(a){var t=a.ecco,n=a.epoch,r=a.inclo,l=a.opsmode,c=a.no,f=t*t,h=1-f,p=Math.sqrt(h),d=Math.cos(r),_=d*d,v=Math.pow(wa/c,ml),S=.75*kr*(3*_-1)/(p*h),y=S/(v*v),E=v*(1-y*y-y*(1/3+134*y*y/81));y=S/(E*E),c/=1+y;var M=Math.pow(wa/c,ml),x=Math.sin(r),g=M*h,N=1-5*_,R=-N-_-_,C=1/M,P=g*g,O=M*(1-t),I="n",H;if(l==="a"){var U=n-7305,D=Math.floor(U+1e-8),V=U-D,Q=.017202791694070362,et=1.7321343856509375,pt=5075514194322695e-30,ct=Q+ln;H=(et+Q*D+ct*V+U*U*pt)%ln,H<0&&(H+=ln)}else H=op(n+24332815e-1);return{no:c,method:I,ainv:C,ao:M,con41:R,con42:N,cosio:d,cosio2:_,eccsq:f,omeosq:h,posq:P,rp:O,rteosq:p,sinio:x,gsto:H}}function LC(a){var t=a.irez,n=a.d2201,r=a.d2211,l=a.d3210,c=a.d3222,f=a.d4410,h=a.d4422,p=a.d5220,d=a.d5232,_=a.d5421,v=a.d5433,S=a.dedt,y=a.del1,E=a.del2,M=a.del3,x=a.didt,g=a.dmdt,N=a.dnodt,R=a.domdt,C=a.argpo,P=a.argpdot,O=a.t,I=a.tc,H=a.gsto,U=a.xfact,D=a.xlamo,V=a.no,Q=a.atime,et=a.em,pt=a.argpm,ct=a.inclm,B=a.xli,Z=a.mm,X=a.xni,vt=a.nodem,z=a.nm,q=.13130908,rt=2.8843198,xt=.37448087,Y=5.7686396,nt=.95240898,st=1.8014998,Et=1.050833,At=4.4108898,Jt=.0043752690880113,zt=720,$t=-720,ee=259200,ie,G,he,re,Yt,Ut,Qt,Lt,Gt=0,fe=0,F=(H+I*Jt)%ln;if(et+=S*O,ct+=x*O,pt+=R*O,vt+=N*O,Z+=g*O,t!==0){(Q===0||O*Q<=0||Math.abs(O)<Math.abs(Q))&&(Q=0,X=V,B=D),O>0?ie=zt:ie=$t;for(var A=381;A===381;)t!==2?(Qt=y*Math.sin(B-q)+E*Math.sin(2*(B-rt))+M*Math.sin(3*(B-xt)),Yt=X+U,Ut=y*Math.cos(B-q)+2*E*Math.cos(2*(B-rt))+3*M*Math.cos(3*(B-xt)),Ut*=Yt):(Lt=C+P*Q,he=Lt+Lt,G=B+B,Qt=n*Math.sin(he+B-Y)+r*Math.sin(B-Y)+l*Math.sin(Lt+B-nt)+c*Math.sin(-Lt+B-nt)+f*Math.sin(he+G-st)+h*Math.sin(G-st)+p*Math.sin(Lt+B-Et)+d*Math.sin(-Lt+B-Et)+_*Math.sin(Lt+G-At)+v*Math.sin(-Lt+G-At),Yt=X+U,Ut=n*Math.cos(he+B-Y)+r*Math.cos(B-Y)+l*Math.cos(Lt+B-nt)+c*Math.cos(-Lt+B-nt)+p*Math.cos(Lt+B-Et)+d*Math.cos(-Lt+B-Et)+2*(f*Math.cos(he+G-st)+h*Math.cos(G-st)+_*Math.cos(Lt+G-At)+v*Math.cos(-Lt+G-At)),Ut*=Yt),Math.abs(O-Q)>=zt?A=381:(fe=O-Q,A=0),A===381&&(B+=Yt*ie+Qt*ee,X+=Qt*ie+Ut*ee,Q+=ie);z=X+Qt*fe+Ut*fe*fe*.5,re=B+Yt*fe+Qt*fe*fe*.5,t!==1?(Z=re-2*vt+2*F,Gt=z-V):(Z=re-vt-pt+F,Gt=z-V),z=V+Gt}return{atime:Q,em:et,argpm:pt,inclm:ct,xli:B,mm:Z,xni:X,nodem:vt,dndt:Gt,nm:z}}var lr;(function(a){a[a.None=0]="None",a[a.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",a[a.MeanMotionBelowZero=2]="MeanMotionBelowZero",a[a.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",a[a.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",a[a.Decayed=6]="Decayed"})(lr||(lr={}));function bx(a,t){var n,r,l,c,f,h,p,d,_,v,S,y,E,M,x,g,N,R,C,P,O,I,H,U,D,V,Q,et=15e-13;a.t=t,a.error=lr.None;var pt=a.mo+a.mdot*a.t,ct=a.argpo+a.argpdot*a.t,B=a.nodeo+a.nodedot*a.t;_=ct,O=pt;var Z=a.t*a.t;if(H=B+a.nodecf*Z,N=1-a.cc1*a.t,R=a.bstar*a.cc4*a.t,C=a.t2cof*Z,a.isimp!==1){p=a.omgcof*a.t;var X=1+a.eta*Math.cos(pt);h=a.xmcof*(X*X*X-a.delmo),g=p+h,O=pt+g,_=ct-g,y=Z*a.t,E=y*a.t,N=N-a.d2*Z-a.d3*y-a.d4*E,R+=a.bstar*a.cc5*(Math.sin(O)-a.sinmao),C=C+a.t3cof*y+E*(a.t4cof+a.t*a.t5cof)}I=a.no;var vt=a.ecco;if(P=a.inclo,a.method==="d"){M=a.t;var z={irez:a.irez,d2201:a.d2201,d2211:a.d2211,d3210:a.d3210,d3222:a.d3222,d4410:a.d4410,d4422:a.d4422,d5220:a.d5220,d5232:a.d5232,d5421:a.d5421,d5433:a.d5433,dedt:a.dedt,del1:a.del1,del2:a.del2,del3:a.del3,didt:a.didt,dmdt:a.dmdt,dnodt:a.dnodt,domdt:a.domdt,argpo:a.argpo,argpdot:a.argpdot,t:a.t,tc:M,gsto:a.gsto,xfact:a.xfact,xlamo:a.xlamo,no:a.no,atime:a.atime,em:vt,argpm:_,inclm:P,xli:a.xli,mm:O,xni:a.xni,nodem:H,nm:I},q=LC(z);vt=q.em,_=q.argpm,P=q.inclm,O=q.mm,H=q.nodem,I=q.nm}if(I<=0)return a.error=lr.MeanMotionBelowZero,null;var rt=Math.pow(wa/I,ml)*N*N;if(I=wa/Math.pow(rt,1.5),vt-=R,vt>=1||vt<-.001)return a.error=lr.MeanEccentricityOutOfRange,null;vt<1e-6&&(vt=1e-6),O+=a.no*C,D=O+_+H,H%=ln,_%=ln,D%=ln,O=(D-_-H)%ln;var xt={am:rt,em:vt,im:P,Om:H,om:_,mm:O,nm:I},Y=Math.sin(P),nt=Math.cos(P),st=vt;if(U=P,v=_,Q=H,V=O,c=Y,l=nt,a.method==="d"){var Et={inclo:a.inclo,init:"n",ep:st,inclp:U,nodep:Q,argpp:v,mp:V,opsmode:a.operationmode},At=Tx(a,Et);if(st=At.ep,Q=At.nodep,v=At.argpp,V=At.mp,U=At.inclp,U<0&&(U=-U,Q+=qn,v-=qn),st<0||st>1)return a.error=lr.PerturbedEccentricityOutOfRange,null}a.method==="d"&&(c=Math.sin(U),l=Math.cos(U),a.aycof=-.5*Xr*c,Math.abs(l+1)>15e-13?a.xlcof=-.25*Xr*c*(3+5*l)/(1+l):a.xlcof=-.25*Xr*c*(3+5*l)/et);var Jt=st*Math.cos(v);g=1/(rt*(1-st*st));var zt=st*Math.sin(v)+g*a.aycof,$t=V+v+Q+g*a.xlcof*Jt,ee=($t-Q)%ln;d=ee,x=9999.9;for(var ie=1;Math.abs(x)>=1e-12&&ie<=10;)r=Math.sin(d),n=Math.cos(d),x=1-n*Jt-r*zt,x=(ee-zt*n+Jt*r-d)/x,Math.abs(x)>=.95&&(x>0?x=.95:x=-.95),d+=x,ie+=1;var G=Jt*n+zt*r,he=Jt*r-zt*n,re=Jt*Jt+zt*zt,Yt=rt*(1-re);if(Yt<0)return a.error=lr.SemiLatusRectumBelowZero,null;var Ut=rt*(1-G),Qt=Math.sqrt(rt)*he/Ut,Lt=Math.sqrt(Yt)/Ut,Gt=Math.sqrt(1-re);g=he/(1+Gt);var fe=rt/Ut*(r-zt-Jt*g),F=rt/Ut*(n-Jt+zt*g);S=Math.atan2(fe,F);var A=(F+F)*fe,K=1-2*fe*fe;g=1/Yt;var gt=.5*kr*g,_t=gt*g;a.method==="d"&&(f=l*l,a.con41=3*f-1,a.x1mth2=1-f,a.x7thm1=7*f-1);var lt=Ut*(1-1.5*_t*Gt*a.con41)+.5*gt*a.x1mth2*K;if(lt<1)return a.error=lr.Decayed,null;S-=.25*_t*a.x7thm1*A;var It=Q+1.5*_t*l*A,Ot=U+1.5*_t*l*c*K,Vt=Qt-I*gt*a.x1mth2*A/wa,b=Lt+I*gt*(a.x1mth2*K+1.5*a.con41)/wa,St=Math.sin(S),Pt=Math.cos(S),jt=Math.sin(It),Zt=Math.cos(It),Ct=Math.sin(Ot),te=Math.cos(Ot),W=-jt*te,Bt=Zt*te,Tt=W*St+Zt*Pt,kt=Bt*St+jt*Pt,wt=Ct*St,yt=W*Pt-Zt*St,Xt=Bt*Pt-jt*St,se=Ct*Pt,_e={x:lt*Tt*_i,y:lt*kt*_i,z:lt*wt*_i},pe={x:(Vt*Tt+b*yt)*hd,y:(Vt*kt+b*Xt)*hd,z:(Vt*wt+b*se)*hd};return{position:_e,velocity:pe,meanElements:xt}}function NC(a,t){var n=t.opsmode,r=t.epoch,l=t.xbstar,c=t.xecco,f=t.xargpo,h=t.xinclo,p=t.xmo,d=t.xno,_=t.xnodeo,v,S,y,E,M,x,g,N,R,C,P,O,I,H,U,D,V,Q,et,pt,ct,B,Z,X,vt,z,q,rt,xt,Y,nt,st,Et,At,Jt,zt,$t,ee,ie,G,he,re,Yt,Ut,Qt,Lt,Gt,fe,F,A,K,gt,_t,lt,It,Ot,Vt=15e-13,b=a;b.isimp=0,b.method="n",b.aycof=0,b.con41=0,b.cc1=0,b.cc4=0,b.cc5=0,b.d2=0,b.d3=0,b.d4=0,b.delmo=0,b.eta=0,b.argpdot=0,b.omgcof=0,b.sinmao=0,b.t=0,b.t2cof=0,b.t3cof=0,b.t4cof=0,b.t5cof=0,b.x1mth2=0,b.x7thm1=0,b.mdot=0,b.nodedot=0,b.xlcof=0,b.xmcof=0,b.nodecf=0,b.irez=0,b.d2201=0,b.d2211=0,b.d3210=0,b.d3222=0,b.d4410=0,b.d4422=0,b.d5220=0,b.d5232=0,b.d5421=0,b.d5433=0,b.dedt=0,b.del1=0,b.del2=0,b.del3=0,b.didt=0,b.dmdt=0,b.dnodt=0,b.domdt=0,b.e3=0,b.ee2=0,b.peo=0,b.pgho=0,b.pho=0,b.pinco=0,b.plo=0,b.se2=0,b.se3=0,b.sgh2=0,b.sgh3=0,b.sgh4=0,b.sh2=0,b.sh3=0,b.si2=0,b.si3=0,b.sl2=0,b.sl3=0,b.sl4=0,b.gsto=0,b.xfact=0,b.xgh2=0,b.xgh3=0,b.xgh4=0,b.xh2=0,b.xh3=0,b.xi2=0,b.xi3=0,b.xl2=0,b.xl3=0,b.xl4=0,b.xlamo=0,b.zmol=0,b.zmos=0,b.atime=0,b.xli=0,b.xni=0,b.bstar=l,b.ecco=c,b.argpo=f,b.inclo=h,b.mo=p,b.no=d,b.nodeo=_,b.operationmode=n;var St=78/_i+1,Pt=42/_i,jt=Pt*Pt*Pt*Pt;b.init="y",b.t=0;var Zt={ecco:b.ecco,epoch:r,inclo:b.inclo,no:b.no,method:b.method,opsmode:b.operationmode},Ct=UC(Zt),te=Ct.ao,W=Ct.con42,Bt=Ct.cosio,Tt=Ct.cosio2,kt=Ct.eccsq,wt=Ct.omeosq,yt=Ct.posq,Xt=Ct.rp,se=Ct.rteosq,_e=Ct.sinio;if(b.no=Ct.no,b.con41=Ct.con41,b.gsto=Ct.gsto,b.a=Math.pow(b.no*TC,-2/3),b.alta=b.a*(1+b.ecco)-1,b.altp=b.a*(1-b.ecco)-1,b.error=0,wt>=0||b.no>=0){if(b.isimp=0,Xt<220/_i+1&&(b.isimp=1),q=St,ct=jt,Q=(Xt-1)*_i,Q<156){q=Q-78,Q<98&&(q=20);var pe=(120-q)/_i;ct=pe*pe*pe*pe,q=q/_i+1}et=1/yt,Lt=1/(te-q),b.eta=te*b.ecco*Lt,O=b.eta*b.eta,P=b.ecco*b.eta,pt=Math.abs(1-O),x=ct*Math.pow(Lt,4),g=x/Math.pow(pt,3.5),E=g*b.no*(te*(1+1.5*O+P*(4+O))+.375*kr*Lt/pt*b.con41*(8+3*O*(8+O))),b.cc1=b.bstar*E,M=0,b.ecco>1e-4&&(M=-2*x*Lt*Xr*b.no*_e/b.ecco),b.x1mth2=1-Tt,b.cc4=2*b.no*g*te*wt*(b.eta*(2+.5*O)+b.ecco*(.5+2*O)-kr*Lt/(te*pt)*(-3*b.con41*(1-2*P+O*(1.5-.5*P))+.75*b.x1mth2*(2*O-P*(1+O))*Math.cos(2*b.argpo))),b.cc5=2*g*te*wt*(1+2.75*(O+P)+P*O),N=Tt*Tt,Yt=1.5*kr*et*b.no,Ut=.5*Yt*kr*et,Qt=-.46875*AC*et*et*b.no,b.mdot=b.no+.5*Yt*se*b.con41+.0625*Ut*se*(13-78*Tt+137*N),b.argpdot=-.5*Yt*W+.0625*Ut*(7-114*Tt+395*N)+Qt*(3-36*Tt+49*N),fe=-Yt*Bt,b.nodedot=fe+(.5*Ut*(4-19*Tt)+2*Qt*(3-7*Tt))*Bt,Gt=b.argpdot+b.nodedot,b.omgcof=b.bstar*M*Math.cos(b.argpo),b.xmcof=0,b.ecco>1e-4&&(b.xmcof=-ml*x*b.bstar/P),b.nodecf=3.5*wt*fe*b.cc1,b.t2cof=1.5*b.cc1,Math.abs(Bt+1)>15e-13?b.xlcof=-.25*Xr*_e*(3+5*Bt)/(1+Bt):b.xlcof=-.25*Xr*_e*(3+5*Bt)/Vt,b.aycof=-.5*Xr*_e;var an=1+b.eta*Math.cos(b.mo);if(b.delmo=an*an*an,b.sinmao=Math.sin(b.mo),b.x7thm1=7*Tt-1,2*qn/b.no>=225){b.method="d",b.isimp=1,he=0,U=b.inclo;var Ge={epoch:r,ep:b.ecco,argpp:b.argpo,tc:he,inclp:b.inclo,nodep:b.nodeo,np:b.no,e3:b.e3,ee2:b.ee2,peo:b.peo,pgho:b.pgho,pho:b.pho,pinco:b.pinco,plo:b.plo,se2:b.se2,se3:b.se3,sgh2:b.sgh2,sgh3:b.sgh3,sgh4:b.sgh4,sh2:b.sh2,sh3:b.sh3,si2:b.si2,si3:b.si3,sl2:b.sl2,sl3:b.sl3,sl4:b.sl4,xgh2:b.xgh2,xgh3:b.xgh3,xgh4:b.xgh4,xh2:b.xh2,xh3:b.xh3,xi2:b.xi2,xi3:b.xi3,xl2:b.xl2,xl3:b.xl3,xl4:b.xl4,zmol:b.zmol,zmos:b.zmos},Nt=wC(Ge);b.e3=Nt.e3,b.ee2=Nt.ee2,b.peo=Nt.peo,b.pgho=Nt.pgho,b.pho=Nt.pho,b.pinco=Nt.pinco,b.plo=Nt.plo,b.se2=Nt.se2,b.se3=Nt.se3,b.sgh2=Nt.sgh2,b.sgh3=Nt.sgh3,b.sgh4=Nt.sgh4,b.sh2=Nt.sh2,b.sh3=Nt.sh3,b.si2=Nt.si2,b.si3=Nt.si3,b.sl2=Nt.sl2,b.sl3=Nt.sl3,b.sl4=Nt.sl4,S=Nt.sinim,v=Nt.cosim,R=Nt.em,C=Nt.emsq,B=Nt.s1,Z=Nt.s2,X=Nt.s3,vt=Nt.s4,z=Nt.s5,rt=Nt.ss1,xt=Nt.ss2,Y=Nt.ss3,nt=Nt.ss4,st=Nt.ss5,Et=Nt.sz1,At=Nt.sz3,Jt=Nt.sz11,zt=Nt.sz13,$t=Nt.sz21,ee=Nt.sz23,ie=Nt.sz31,G=Nt.sz33,b.xgh2=Nt.xgh2,b.xgh3=Nt.xgh3,b.xgh4=Nt.xgh4,b.xh2=Nt.xh2,b.xh3=Nt.xh3,b.xi2=Nt.xi2,b.xi3=Nt.xi3,b.xl2=Nt.xl2,b.xl3=Nt.xl3,b.xl4=Nt.xl4,b.zmol=Nt.zmol,b.zmos=Nt.zmos,V=Nt.nm,F=Nt.z1,A=Nt.z3,K=Nt.z11,gt=Nt.z13,_t=Nt.z21,lt=Nt.z23,It=Nt.z31,Ot=Nt.z33;var Ve={inclo:U,init:b.init,ep:b.ecco,inclp:b.inclo,nodep:b.nodeo,argpp:b.argpo,mp:b.mo,opsmode:b.operationmode},Ze=Tx(b,Ve);b.ecco=Ze.ep,b.inclo=Ze.inclp,b.nodeo=Ze.nodep,b.argpo=Ze.argpp,b.mo=Ze.mp,I=0,H=0,D=0;var Yn={cosim:v,emsq:C,argpo:b.argpo,s1:B,s2:Z,s3:X,s4:vt,s5:z,sinim:S,ss1:rt,ss2:xt,ss3:Y,ss4:nt,ss5:st,sz1:Et,sz3:At,sz11:Jt,sz13:zt,sz21:$t,sz23:ee,sz31:ie,sz33:G,t:b.t,tc:he,gsto:b.gsto,mo:b.mo,mdot:b.mdot,no:b.no,nodeo:b.nodeo,nodedot:b.nodedot,xpidot:Gt,z1:F,z3:A,z11:K,z13:gt,z21:_t,z23:lt,z31:It,z33:Ot,ecco:b.ecco,eccsq:kt,em:R,argpm:I,inclm:U,mm:D,nm:V,nodem:H,irez:b.irez,atime:b.atime,d2201:b.d2201,d2211:b.d2211,d3210:b.d3210,d3222:b.d3222,d4410:b.d4410,d4422:b.d4422,d5220:b.d5220,d5232:b.d5232,d5421:b.d5421,d5433:b.d5433,dedt:b.dedt,didt:b.didt,dmdt:b.dmdt,dnodt:b.dnodt,domdt:b.domdt,del1:b.del1,del2:b.del2,del3:b.del3,xfact:b.xfact,xlamo:b.xlamo,xli:b.xli,xni:b.xni},Ue=DC(Yn);b.irez=Ue.irez,b.atime=Ue.atime,b.d2201=Ue.d2201,b.d2211=Ue.d2211,b.d3210=Ue.d3210,b.d3222=Ue.d3222,b.d4410=Ue.d4410,b.d4422=Ue.d4422,b.d5220=Ue.d5220,b.d5232=Ue.d5232,b.d5421=Ue.d5421,b.d5433=Ue.d5433,b.dedt=Ue.dedt,b.didt=Ue.didt,b.dmdt=Ue.dmdt,b.dnodt=Ue.dnodt,b.domdt=Ue.domdt,b.del1=Ue.del1,b.del2=Ue.del2,b.del3=Ue.del3,b.xfact=Ue.xfact,b.xlamo=Ue.xlamo,b.xli=Ue.xli,b.xni=Ue.xni}b.isimp!==1&&(y=b.cc1*b.cc1,b.d2=4*te*Lt*y,re=b.d2*Lt*b.cc1/3,b.d3=(17*te+q)*re,b.d4=.5*re*te*Lt*(221*te+31*q)*b.cc1,b.t3cof=b.d2+2*y,b.t4cof=.25*(3*b.d3+b.cc1*(12*b.d2+10*y)),b.t5cof=.2*(3*b.d4+12*b.cc1*b.d3+6*b.d2*b.d2+15*y*(2*b.d2+y)))}bx(b,0),b.init="n"}function OC(a,t){var n="i",r=0,l=a.substring(2,7),c=parseInt(a.substring(18,20),10),f=parseFloat(a.substring(20,32)),h=parseFloat(a.substring(33,43)),p=parseFloat("".concat(a.substring(44,45),".").concat(a.substring(45,50),"E").concat(a.substring(50,52))),d=parseFloat("".concat(a.substring(53,54),".").concat(a.substring(54,59),"E").concat(a.substring(59,61))),_=parseFloat(t.substring(8,16))*ol,v=parseFloat(t.substring(17,25))*ol,S=parseFloat(".".concat(t.substring(26,33))),y=parseFloat(t.substring(34,42))*ol,E=parseFloat(t.substring(43,51))*ol,M=parseFloat(t.substring(52,63))/RC,x=c<57?c+2e3:c+1900,g=CC(x,f),N=g.mon,R=g.day,C=g.hr,P=g.minute,O=g.sec,I=Op(x,N,R,C,P,O),H={error:r,satnum:l,epochyr:c,epochdays:f,ndot:h,nddot:p,bstar:d,inclo:_,nodeo:v,ecco:S,argpo:y,mo:E,no:M,jdsatepoch:I};return NC(H,{opsmode:n,satn:H.satnum,epoch:H.jdsatepoch-24332815e-1,xbstar:H.bstar,xecco:H.ecco,xargpo:H.argpo,xinclo:H.inclo,xmo:H.mo,xno:H.no,xnodeo:H.nodeo}),H}function PC(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l=Op.apply(void 0,n),c=(l-a.jdsatepoch)*MC;return bx(a,c)}function Ax(a){return a*yC}function zC(a){if(a<-qn/2||a>qn/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return Ax(a)}function IC(a){if(a<-qn||a>qn)throw new RangeError("Longitude radians must be in range [-pi; pi].");return Ax(a)}function BC(a,t){for(var n=6378.137,r=6356.7523142,l=Math.sqrt(a.x*a.x+a.y*a.y),c=(n-r)/n,f=2*c-c*c,h=Math.atan2(a.y,a.x)-t;h<-qn;)h+=ln;for(;h>qn;)h-=ln;for(var p=20,d=0,_=Math.atan2(a.z,Math.sqrt(a.x*a.x+a.y*a.y)),v;d++<p;)v=1/Math.sqrt(1-f*(Math.sin(_)*Math.sin(_))),_=Math.atan2(a.z+n*v*f*Math.sin(_),l);var S=l/Math.cos(_)-n*v;return{longitude:h,latitude:_,height:S}}const FC="_container_norhl_1",HC="_satelliteLabel_norhl_22",GC="_satelliteName_norhl_39",VC="_satelliteDetails_norhl_46",kC="_satelliteType_norhl_54",XC="_satelliteNorad_norhl_59",Vs={container:FC,satelliteLabel:HC,satelliteName:GC,satelliteDetails:VC,satelliteType:kC,satelliteNorad:XC},WC="/assets/earth-blue-marble-d1pdJ3jg.jpg",qC="/assets/earth-bump-BD2vMuPH.jpg",YC="/assets/earth-specular-6aAFN27D.jpg";function jC(a,t){try{const n=new Date(a.EPOCH),r=(t.getTime()-n.getTime())/(1e3*60),l=a.SEMIMAJOR_AXIS,c=parseFloat(a.ECCENTRICITY),f=parseFloat(a.INCLINATION)*Math.PI/180,h=parseFloat(a.RA_OF_ASC_NODE)*Math.PI/180,p=parseFloat(a.ARG_OF_PERICENTER)*Math.PI/180,d=parseFloat(a.MEAN_MOTION)*2*Math.PI/1440,v=parseFloat(a.MEAN_ANOMALY)*Math.PI/180+d*r;let S=v;for(let B=0;B<5;B++)S=v+c*Math.sin(S);const y=2*Math.atan2(Math.sqrt(1+c)*Math.sin(S/2),Math.sqrt(1-c)*Math.cos(S/2)),E=l*(1-c*Math.cos(S)),M=E*Math.cos(y),x=E*Math.sin(y),g=Math.cos(h),N=Math.sin(h),R=Math.cos(f),C=Math.sin(f),P=Math.cos(p),O=Math.sin(p),I=g*P-N*O*R,H=-g*O-N*P*R,U=N*P+g*O*R,D=-N*O+g*P*R,V=O*C,Q=P*C,et=I*M+H*x,pt=U*M+D*x,ct=V*M+Q*x;return{x:et,y:pt,z:ct}}catch(n){return console.error("Error simulating orbit from elements:",n),null}}function ZC({data:a,onSatelliteClick:t}){const n=mt.useRef(null),[r,l]=mt.useState(null),c=mt.useRef(new M1);c.current.params.Points={threshold:.25};const f=mt.useRef(new Se),h=mt.useRef([]),p=mt.useRef({isDragging:!1,startX:0,startY:0}),d=mt.useRef(null);return mt.useEffect(()=>{if(!n.current)return;for(;n.current.firstChild;)n.current.removeChild(n.current.firstChild);const _=new r1,v=n.current.clientWidth,S=n.current.clientHeight,y=new Di(75,v/S,.1,2e3);y.position.z=40;const E=new sC({antialias:!0});E.setSize(v,S),E.setClearColor(0,1),n.current.appendChild(E.domElement);const M=new lC(y,E.domElement);M.enableDamping=!0,M.dampingFactor=.05,M.screenSpacePanning=!1,M.minDistance=10,M.maxDistance=800;const x=new g1,g=new Dp(15,64,64),N=new u1({map:x.load(WC,void 0,void 0,q=>{console.error("Error loading earth texture:",q)}),bumpMap:x.load(qC,void 0,void 0,q=>{console.error("Error loading earth bump texture:",q)}),bumpScale:.1,specularMap:x.load(YC,void 0,void 0,q=>{console.error("Error loading earth specular texture:",q)}),specular:new ze(3355443),shininess:25}),R=new Xi(g,N);R.rotation.x=0,R.rotation.y=0,R.rotation.z=0,_.add(R);const C=new S1(16777215,1.2);_.add(C);const P=new x1(16777215,.3);P.position.set(0,0,10),_.add(P);const O=new px({vertexColors:!0,size:.5,sizeAttenuation:!0,transparent:!1,opacity:1,alphaTest:.5}),I=new c1(new Yi,O);_.add(I);const H=new wp(.2,.5,8),U=new Rp({color:16776960,transparent:!0,opacity:.8,side:ta}),D=new Xi(H,U);D.visible=!1,_.add(D),d.current={scene:_,camera:y,renderer:E,earth:R,satellites:I,controls:M,hoverIndicator:D};const V=()=>{if(!d.current)return;const q=[],rt=15/6371,xt=new Date,Y=a.filter($t=>$t.TLE_LINE1&&$t.TLE_LINE2||$t.SEMIMAJOR_AXIS&&$t.PERIOD&&$t.EPOCH);console.log("Update satellites - input data:",a.length,"valid satellites:",Y.length),h.current=Y;const nt=new Float32Array(Y.length*3),st=new Float32Array(Y.length*3);let Et=0;Y.forEach($t=>{try{let ee=null;if($t.TLE_LINE1&&$t.TLE_LINE2){const K=OC($t.TLE_LINE1,$t.TLE_LINE2);if(K){const gt=PC(K,xt);if(gt?.position&&typeof gt.position=="object"&&(ee=gt.position,$t.OBJECT_NAME.includes("ISS")||$t.NORAD_CAT_ID===25544)){console.log("ISS Position (ECI):",ee);const _t=op(xt),lt=BC(ee,_t),It=zC(lt.latitude),Ot=IC(lt.longitude);console.log("ISS Lat/Lon:",{latitude:It,longitude:Ot,altitude:lt.height,gmst:_t*180/Math.PI});const Vt=It*Math.PI/180,b=Ot*Math.PI/180,St=15,Pt=lt.height*rt,jt=St+Pt,Zt=jt*Math.cos(Vt)*Math.cos(b),Ct=jt*Math.sin(Vt),te=-jt*Math.cos(Vt)*Math.sin(b);console.log("Expected Three.js coords (from lat/lon):",{x:Zt,y:Ct,z:te})}}}if(!ee&&$t.SEMIMAJOR_AXIS&&$t.PERIOD&&$t.EPOCH&&(ee=jC($t,xt)),!ee)return;const ie=op(xt),G=Math.cos(-ie),he=Math.sin(-ie),re=G*ee.x-he*ee.y,Yt=he*ee.x+G*ee.y,Ut=ee.z;($t.OBJECT_NAME.includes("ISS")||$t.NORAD_CAT_ID===25544)&&console.log("ISS Coordinate Transformation:",{eci:ee,gmst_degrees:ie*180/Math.PI,ecef:{x:re,y:Yt,z:Ut}});const Qt=re*rt,Lt=Ut*rt,Gt=-Yt*rt;($t.OBJECT_NAME.includes("ISS")||$t.NORAD_CAT_ID===25544)&&console.log("ISS Three.js coords (after ECEF transform):",{x:Qt,y:Lt,z:Gt}),nt[Et*3]=Qt,nt[Et*3+1]=Lt,nt[Et*3+2]=Gt;let fe,F,A;switch($t.OBJECT_TYPE){case"PAYLOAD":fe=0,F=.5,A=1;break;case"ROCKET BODY":fe=1,F=.5,A=0;break;case"DEBRIS":fe=1,F=0,A=0;break;case"OTHER":default:fe=0,F=1,A=0}st[Et*3]=fe,st[Et*3+1]=F,st[Et*3+2]=A,q.push({pos:new it(Qt,Lt,Gt),name:$t.OBJECT_NAME,type:$t.OBJECT_TYPE}),Et++}catch(ee){console.error("Error calculating satellite position:",ee)}});const At=nt.slice(0,Et*3),Jt=st.slice(0,Et*3),zt=d.current.satellites.geometry;zt.setAttribute("position",new Ui(At,3)),zt.setAttribute("color",new Ui(Jt,3)),zt.attributes.position.needsUpdate=!0,zt.attributes.color.needsUpdate=!0,zt.computeBoundingSphere(),console.log("Satellites rendered:",Et,"positions length:",At.length/3,"satelliteDataRef length:",h.current.length)};let Q,et=0,pt=0;const ct=750,B=1e3,Z=()=>{Q=requestAnimationFrame(Z),M.update();const q=performance.now();if(q-pt>B){if(n.current){const rt=n.current.clientWidth,xt=n.current.clientHeight,Y=E.domElement;(Y.width!==rt||Y.height!==xt)&&(y.aspect=rt/xt,y.updateProjectionMatrix(),E.setSize(rt,xt))}pt=q}if(q-et>ct&&(V(),et=q),d.current?.satellites){const rt=y.position.distanceTo(new it(0,0,0)),xt=.3,Y=2,nt=.01,st=Math.max(.02,Math.min(4,Math.pow(rt/35,2))),Et=Math.max(nt,Math.min(Y,xt*st)),At=d.current.satellites.material;At.size=Et,At.needsUpdate=!0}E.render(_,y)};V(),Z();const X=()=>{if(!n.current||!d.current)return;const q=n.current.clientWidth,rt=n.current.clientHeight;d.current.camera.aspect=q/rt,d.current.camera.updateProjectionMatrix(),d.current.renderer.setSize(q,rt)};window.addEventListener("resize",X);let vt=null;n.current&&"ResizeObserver"in window&&(vt=new ResizeObserver(X),vt.observe(n.current));const z=setTimeout(X,100);return()=>{window.removeEventListener("resize",X),vt&&vt.disconnect(),clearTimeout(z),cancelAnimationFrame(Q),E.dispose()}},[a]),mt.useEffect(()=>{(()=>{!n.current||!d.current||setTimeout(()=>{const S=n.current.clientWidth,y=n.current.clientHeight;S>0&&y>0&&(d.current.camera.aspect=S/y,d.current.camera.updateProjectionMatrix(),d.current.renderer.setSize(S,y))},50)})();const v=setInterval(()=>{if(!n.current||!d.current)return;const S=n.current.clientWidth,y=n.current.clientHeight,E=d.current.renderer;(E.domElement.width!==S||E.domElement.height!==y)&&(d.current.camera.aspect=S/y,d.current.camera.updateProjectionMatrix(),E.setSize(S,y))},500);return()=>{clearInterval(v)}},[a]),mt.useEffect(()=>{const _=n.current?.querySelector("canvas");if(!_||!d.current)return;const v=E=>{console.log("Mouse down event"),p.current.isDragging=!1,p.current.startX=E.clientX,p.current.startY=E.clientY},S=E=>{const M=n.current?.getBoundingClientRect();if(M){if(E.buttons===1){const x=Math.abs(E.clientX-p.current.startX),g=Math.abs(E.clientY-p.current.startY);(x>5||g>5)&&(p.current.isDragging=!0)}if(p.current.isDragging){d.current?.hoverIndicator&&(d.current.hoverIndicator.visible=!1),l(null);return}if(f.current.x=(E.clientX-M.left)/M.width*2-1,f.current.y=-((E.clientY-M.top)/M.height)*2+1,d.current){const{camera:x,satellites:g}=d.current,N=x.position.distanceTo(new it(0,0,0)),R=Math.max(.02,Math.min(4,Math.pow(N/35,2))),C=Math.max(.01,Math.min(2,.3*R)),P=C*.8;c.current.params.Points={threshold:P},c.current.setFromCamera(f.current,x);const O=c.current.intersectObject(g),I=O.filter(H=>{if(H.index===void 0)return!1;const U=g.geometry.attributes.position,D=new it(U.getX(H.index),U.getY(H.index),U.getZ(H.index)),V=new it(0,0,-1).applyQuaternion(x.quaternion),Q=new it().subVectors(D,x.position).normalize();return V.dot(Q)>0});if(I.length>0&&console.log("Hover detection:",{distance:N,scaleFactor:R,currentSize:C,hoverThreshold:P,totalIntersects:O.length,visibleIntersects:I.length}),I.length>0){const H=I[0].index;if(H!==void 0&&H<h.current.length){const U=h.current[H];if(d.current?.hoverIndicator){const pt=g.geometry.attributes.position,ct=new it(pt.getX(H),pt.getY(H),pt.getZ(H));d.current.hoverIndicator.position.copy(ct);const B=new it().subVectors(x.position,ct).normalize();d.current.hoverIndicator.lookAt(ct.x+B.x,ct.y+B.y,ct.z+B.z);const Z=x.position.distanceTo(ct),X=x.position.distanceTo(new it(0,0,0)),vt=Math.max(.02,Math.min(4,Math.pow(X/35,2))),q=Math.max(.01,Math.min(2,.3*vt))*2,rt=Math.max(.2,Math.min(1.5,20/Z)),xt=q*rt;d.current.hoverIndicator.scale.setScalar(xt),d.current.hoverIndicator.visible=!0}const D=E.clientX-M.left+15,V=E.clientY-M.top-10,Q=Math.max(10,Math.min(D,M.width-200)),et=Math.max(10,Math.min(V,M.height-80));console.log("Setting hover satellite:",U.OBJECT_NAME,"at position:",{x:Q,y:et}),l({x:Q,y:et,name:U.OBJECT_NAME,type:U.OBJECT_TYPE,noradId:U.NORAD_CAT_ID});return}}d.current?.hoverIndicator&&(d.current.hoverIndicator.visible=!1),l(null)}}},y=E=>{if(console.log("Mouse up event",{isDragging:p.current.isDragging,mousePos:{x:E.clientX,y:E.clientY}}),!p.current.isDragging&&d.current&&t){const M=n.current?.getBoundingClientRect();if(!M)return;f.current.x=(E.clientX-M.left)/M.width*2-1,f.current.y=-((E.clientY-M.top)/M.height)*2+1;const{camera:x,satellites:g}=d.current,N=x.position.distanceTo(new it(0,0,0)),R=Math.max(.02,Math.min(4,Math.pow(N/35,2))),P=Math.max(.01,Math.min(2,.3*R))*.8;c.current.params.Points={threshold:P},c.current.setFromCamera(f.current,x);const O=c.current.intersectObject(g);if(console.log("Intersection check:",{mousePos:{x:f.current.x,y:f.current.y},intersectCount:O.length,isDragging:p.current.isDragging,hasClickHandler:!!t}),O.length>0){const I=O[0].index;if(I!==void 0&&I<h.current.length){const H=h.current[I];console.log("Clicking satellite:",{name:H.OBJECT_NAME,type:H.OBJECT_TYPE,index:I,dataLength:h.current.length}),setTimeout(()=>t(H),0)}}}p.current.isDragging=!1};return _.addEventListener("mousedown",v),_.addEventListener("mousemove",S),_.addEventListener("mouseup",y),_.addEventListener("mouseleave",()=>{d.current?.hoverIndicator&&(d.current.hoverIndicator.visible=!1),l(null)}),_.addEventListener("click",E=>{if(!p.current.isDragging&&d.current&&t){const M=_.getBoundingClientRect();f.current.x=(E.clientX-M.left)/M.width*2-1,f.current.y=-((E.clientY-M.top)/M.height)*2+1;const{camera:x,satellites:g}=d.current,N=x.position.distanceTo(new it(0,0,0)),R=Math.max(.02,Math.min(4,Math.pow(N/35,2))),P=Math.max(.01,Math.min(2,.3*R))*.8;c.current.params.Points={threshold:P},console.log("Satellites geometry:",{vertexCount:g.geometry.attributes.position.count,hasPositions:!!g.geometry.attributes.position,hasColors:!!g.geometry.attributes.color,boundingSphere:g.geometry.boundingSphere}),c.current.setFromCamera(f.current,x),console.log("Click detection:",{clientX:E.clientX,clientY:E.clientY,rect:{left:M.left,top:M.top,width:M.width,height:M.height},normalized:{x:f.current.x,y:f.current.y},cameraPosition:x.position.toArray(),raycasterThreshold:c.current.params.Points?.threshold});const O=c.current.intersectObject(g),I=c.current.intersectObjects([g,d.current.earth]);if(console.log("Intersections:",{points:O.length,all:I.length}),O.length>0){const H=O[0].index;if(H!==void 0&&H<h.current.length){const U=h.current[H];console.log("Selected satellite:",{name:U.OBJECT_NAME,type:U.OBJECT_TYPE,index:H}),t(U)}}}}),()=>{_.removeEventListener("mousedown",v),_.removeEventListener("mousemove",S),_.removeEventListener("mouseup",y);const E=()=>{d.current?.hoverIndicator&&(d.current.hoverIndicator.visible=!1),l(null)};_.removeEventListener("mouseleave",E)}},[t]),Ft.jsx("div",{ref:n,className:Vs.container,children:r&&Ft.jsxs("div",{className:Vs.satelliteLabel,style:{left:`${r.x}px`,top:`${r.y}px`,position:"absolute",zIndex:1e3,pointerEvents:"none",transform:"translate(-50%, -100%)"},children:[Ft.jsx("div",{className:Vs.satelliteName,children:r.name}),Ft.jsxs("div",{className:Vs.satelliteDetails,children:[Ft.jsx("span",{className:Vs.satelliteType,children:r.type}),Ft.jsxs("span",{className:Vs.satelliteNorad,children:["NORAD: ",r.noradId]})]})]})})}const KC="_modal_2or8e_1",QC="_modalContent_2or8e_15",JC="_modalHeader_2or8e_44",$C="_modalTitle_2or8e_51",tw="_closeButton_2or8e_58",ew="_detailGrid_2or8e_71",nw="_detailItem_2or8e_77",iw="_detailLabel_2or8e_82",aw="_detailValue_2or8e_89",ba={modal:KC,modalContent:QC,modalHeader:JC,modalTitle:$C,closeButton:tw,detailGrid:ew,detailItem:nw,detailLabel:iw,detailValue:aw};function rw({data:a,onClose:t}){mt.useEffect(()=>{const r=l=>{l.key==="Escape"&&t()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t]);const n=r=>{r.target===r.currentTarget&&t()};return Ft.jsx("div",{className:ba.modal,onClick:n,children:Ft.jsxs("div",{className:ba.modalContent,children:[Ft.jsxs("div",{className:ba.modalHeader,children:[Ft.jsx("h2",{className:ba.modalTitle,children:a.OBJECT_NAME||"Satellite Details"}),Ft.jsx("button",{className:ba.closeButton,onClick:t,children:"×"})]}),Ft.jsx("div",{className:ba.detailGrid,children:Yv.map(r=>Ft.jsxs("div",{className:ba.detailItem,children:[Ft.jsx("div",{className:ba.detailLabel,children:r}),Ft.jsx("div",{className:ba.detailValue,children:a[r]!==null&&a[r]!==void 0?String(a[r]):"N/A"})]},r))})]})})}const sw="_pageContainer_c3z3o_1",ow="_pageContainerFullscreen_c3z3o_11",lw="_title_c3z3o_26",cw="_titleFullscreen_c3z3o_31",uw="_fullscreenHeader_c3z3o_52",fw="_fullscreenToggle_c3z3o_66",hw="_headerRight_c3z3o_80",dw="_subtitle_c3z3o_98",pw="_headerRow_c3z3o_105",mw="_headerLeft_c3z3o_113",gw="_legend_c3z3o_126",_w="_legendItem_c3z3o_132",vw="_disabled_c3z3o_150",xw="_legendColor_c3z3o_160",Sw="_subtitleFullscreen_c3z3o_167",yw="_fullscreenLeft_c3z3o_173",Mw="_fullscreenRight_c3z3o_179",Ew="_searchInputFullscreen_c3z3o_197",Tw="_error_c3z3o_217",bw="_contentContainer_c3z3o_222",Aw="_contentContainer3D_c3z3o_234",Rw="_contentContainerFullscreen_c3z3o_245",Cw="_searchContainer_c3z3o_256",ww="_searchInput_c3z3o_197",Te={pageContainer:sw,pageContainerFullscreen:ow,title:lw,titleFullscreen:cw,fullscreenHeader:uw,fullscreenToggle:fw,headerRight:hw,subtitle:dw,headerRow:pw,headerLeft:mw,legend:gw,legendItem:_w,disabled:vw,legendColor:xw,subtitleFullscreen:Sw,fullscreenLeft:yw,fullscreenRight:Mw,searchInputFullscreen:Ew,error:Tw,contentContainer:bw,contentContainer3D:Aw,contentContainerFullscreen:Rw,searchContainer:Cw,searchInput:ww};function Dw(){const{data:a,loading:t,error:n}=EE(),[r,l]=aE(),[c,f]=mt.useState(null),[h,p]=mt.useState(""),[d,_]=mt.useState([]),[v,S]=mt.useState({PAYLOAD:!0,"ROCKET BODY":!0,DEBRIS:!0,UNKNOWN:!0}),y=r.get("view")==="3d",E=r.get("fullscreen")==="true",M=(R,C,P)=>{let O=R;if(C.trim()){const I=C.toLowerCase();O=O.filter(H=>H.OBJECT_NAME.toLowerCase().includes(I)||H.NORAD_CAT_ID.toString().includes(C))}return O=O.filter(I=>{const H=I.OBJECT_TYPE==="OTHER"?"UNKNOWN":I.OBJECT_TYPE;return P[H]!==!1}),O};mt.useEffect(()=>{a&&_(M(a,h,v))},[a,h,v]);const x=R=>{S(C=>({...C,[R]:!C[R]}))},g=R=>{switch(R){case"PAYLOAD":return"#007fff";case"ROCKET BODY":return"#ff7f00";case"DEBRIS":return"#ff0000";case"UNKNOWN":return"#00ff00";default:return"#00ff00"}},N=()=>{const R=new URLSearchParams(r);E?R.delete("fullscreen"):R.set("fullscreen","true"),l(R)};return t?Ft.jsx("div",{children:"Loading..."}):n?Ft.jsxs("div",{className:Te.error,children:["Error: ",n]}):!a||a.length===0?Ft.jsx("div",{children:"No data found."}):Ft.jsxs("div",{className:E?Te.pageContainerFullscreen:Te.pageContainer,children:[y&&E&&Ft.jsxs("div",{className:Te.fullscreenHeader,children:[Ft.jsxs("div",{className:Te.fullscreenLeft,children:[Ft.jsx("div",{className:Te.searchContainer,children:Ft.jsx("input",{type:"text",placeholder:"Search by satellite name or NORAD ID...",value:h,onChange:R=>p(R.target.value),className:Te.searchInputFullscreen})}),Ft.jsxs("div",{className:Te.subtitleFullscreen,children:["Total Satellites: ",d.length," ",h&&`(filtered from ${a?.length||0})`]})]}),Ft.jsxs("div",{className:Te.fullscreenRight,children:[Ft.jsx("div",{className:Te.legend,children:["PAYLOAD","ROCKET BODY","DEBRIS","UNKNOWN"].map(R=>Ft.jsxs("div",{className:`${Te.legendItem} ${v[R]?"":Te.disabled}`,onClick:()=>x(R),title:`Click to ${v[R]?"hide":"show"} ${R.toLowerCase()} satellites`,children:[Ft.jsx("div",{className:Te.legendColor,style:{background:g(R)}}),Ft.jsx("span",{children:R==="UNKNOWN"?"Unknown":R.charAt(0)+R.slice(1).toLowerCase()})]},R))}),Ft.jsx("button",{className:Te.fullscreenToggle,onClick:N,children:E?"← Exit Fullscreen":"⛶ Fullscreen"})]})]}),Ft.jsx("div",{className:E?Te.titleFullscreen:Te.title,children:!E&&Ft.jsx("h1",{children:"Satellite Monitor"})}),y&&!E&&Ft.jsxs("div",{className:Te.headerRow,children:[Ft.jsxs("div",{className:Te.headerLeft,children:[Ft.jsx("div",{className:Te.searchContainer,children:Ft.jsx("input",{type:"text",placeholder:"Search by satellite name or NORAD ID...",value:h,onChange:R=>p(R.target.value),className:Te.searchInput})}),Ft.jsxs("div",{className:Te.subtitle,children:["Total Satellites: ",d.length," ",h&&`(filtered from ${a?.length||0})`]})]}),Ft.jsxs("div",{className:Te.headerRight,children:[Ft.jsx("div",{className:Te.legend,children:["PAYLOAD","ROCKET BODY","DEBRIS","UNKNOWN"].map(R=>Ft.jsxs("div",{className:`${Te.legendItem} ${v[R]?"":Te.disabled}`,onClick:()=>x(R),title:`Click to ${v[R]?"hide":"show"} ${R.toLowerCase()} satellites`,children:[Ft.jsx("div",{className:Te.legendColor,style:{background:g(R)}}),Ft.jsx("span",{children:R==="UNKNOWN"?"Unknown":R.charAt(0)+R.slice(1).toLowerCase()})]},R))}),Ft.jsx("button",{className:Te.fullscreenToggle,onClick:N,children:"⛶ Fullscreen"})]})]}),!y&&Ft.jsxs("div",{className:Te.headerRow,children:[Ft.jsxs("div",{className:Te.headerLeft,children:[Ft.jsx("div",{className:Te.searchContainer,children:Ft.jsx("input",{type:"text",placeholder:"Search by satellite name or NORAD ID...",value:h,onChange:R=>p(R.target.value),className:Te.searchInput})}),Ft.jsxs("div",{className:Te.subtitle,children:["Total Satellites: ",d.length," ",h&&`(filtered from ${a?.length||0})`]})]}),Ft.jsx("div",{className:Te.headerRight,children:Ft.jsx("div",{className:Te.legend,children:["PAYLOAD","ROCKET BODY","DEBRIS","UNKNOWN"].map(R=>Ft.jsxs("div",{className:`${Te.legendItem} ${v[R]?"":Te.disabled}`,onClick:()=>x(R),title:`Click to ${v[R]?"hide":"show"} ${R.toLowerCase()} satellites`,children:[Ft.jsx("div",{className:Te.legendColor,style:{background:g(R)}}),Ft.jsx("span",{children:R==="UNKNOWN"?"Unknown":R.charAt(0)+R.slice(1).toLowerCase()})]},R))})})]}),Ft.jsx("div",{className:E?Te.contentContainerFullscreen:y?Te.contentContainer3D:Te.contentContainer,children:y?Ft.jsx(ZC,{data:d,onSatelliteClick:R=>f(R)},`earth-viz-${E?"fullscreen":"normal"}`):Ft.jsx(GE,{data:d,onRowClick:R=>f(R)})}),c&&Ft.jsx(rw,{data:c,onClose:()=>f(null)})]})}function Uw(){return Ft.jsx($M,{children:Ft.jsx(ME,{children:Ft.jsxs(wM,{children:[Ft.jsx(eu,{path:"/",element:Ft.jsx(RM,{to:"/general-perturbation",replace:!0})}),Ft.jsx(eu,{path:"/general-perturbation",element:Ft.jsx(Dw,{})}),Ft.jsx(eu,{path:"/about",element:Ft.jsx("div",{children:"About Page Coming Soon"})})]})})})}By.createRoot(document.getElementById("root")).render(Ft.jsx(mt.StrictMode,{children:Ft.jsx(Uw,{})}));
