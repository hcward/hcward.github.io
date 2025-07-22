(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var dh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function _y(){if(j_)return Go;j_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Go.Fragment=t,Go.jsx=n,Go.jsxs=n,Go}var Z_;function vy(){return Z_||(Z_=1,dh.exports=_y()),dh.exports}var Rt=vy(),ph={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function Sy(){if(K_)return fe;K_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function S(N,$,_t){this.props=N,this.context=$,this.refs=M,this.updater=_t||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=S.prototype;function U(N,$,_t){this.props=N,this.context=$,this.refs=M,this.updater=_t||y}var b=U.prototype=new g;b.constructor=U,T(b,S.prototype),b.isPureReactComponent=!0;var D=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function F(N,$,_t,Mt,j,dt){return _t=dt.ref,{$$typeof:s,type:N,key:$,ref:_t!==void 0?_t:null,props:dt}}function X(N,$){return F(N.type,$,void 0,void 0,void 0,N.props)}function L(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function C(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_t){return $[_t]})}var G=/\/+/g;function lt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):$.toString(36)}function it(){}function ct(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(it,it):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function pt(N,$,_t,Mt,j){var dt=typeof N;(dt==="undefined"||dt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(dt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case s:case t:yt=!0;break;case v:return yt=N._init,pt(yt(N._payload),$,_t,Mt,j)}}if(yt)return j=j(N),yt=Mt===""?"."+lt(N,0):Mt,D(j)?(_t="",yt!=null&&(_t=yt.replace(G,"$&/")+"/"),pt(j,$,_t,"",function(kt){return kt})):j!=null&&(L(j)&&(j=X(j,_t+(j.key==null||N&&N.key===j.key?"":(""+j.key).replace(G,"$&/")+"/")+yt)),$.push(j)),1;yt=0;var Ct=Mt===""?".":Mt+":";if(D(N))for(var Dt=0;Dt<N.length;Dt++)Mt=N[Dt],dt=Ct+lt(Mt,Dt),yt+=pt(Mt,$,_t,dt,j);else if(Dt=x(N),typeof Dt=="function")for(N=Dt.call(N),Dt=0;!(Mt=N.next()).done;)Mt=Mt.value,dt=Ct+lt(Mt,Dt++),yt+=pt(Mt,$,_t,dt,j);else if(dt==="object"){if(typeof N.then=="function")return pt(ct(N),$,_t,Mt,j);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function z(N,$,_t){if(N==null)return N;var Mt=[],j=0;return pt(N,Mt,"","",function(dt){return $.call(_t,dt,j++)}),Mt}function Q(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(_t){(N._status===0||N._status===-1)&&(N._status=1,N._result=_t)},function(_t){(N._status===0||N._status===-1)&&(N._status=2,N._result=_t)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var W=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function xt(){}return fe.Children={map:z,forEach:function(N,$,_t){z(N,function(){$.apply(this,arguments)},_t)},count:function(N){var $=0;return z(N,function(){$++}),$},toArray:function(N){return z(N,function($){return $})||[]},only:function(N){if(!L(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},fe.Component=S,fe.Fragment=n,fe.Profiler=l,fe.PureComponent=U,fe.StrictMode=r,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,fe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},fe.cache=function(N){return function(){return N.apply(null,arguments)}},fe.cloneElement=function(N,$,_t){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Mt=T({},N.props),j=N.key,dt=void 0;if($!=null)for(yt in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(j=""+$.key),$)!O.call($,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&$.ref===void 0||(Mt[yt]=$[yt]);var yt=arguments.length-2;if(yt===1)Mt.children=_t;else if(1<yt){for(var Ct=Array(yt),Dt=0;Dt<yt;Dt++)Ct[Dt]=arguments[Dt+2];Mt.children=Ct}return F(N.type,j,void 0,void 0,dt,Mt)},fe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},fe.createElement=function(N,$,_t){var Mt,j={},dt=null;if($!=null)for(Mt in $.key!==void 0&&(dt=""+$.key),$)O.call($,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(j[Mt]=$[Mt]);var yt=arguments.length-2;if(yt===1)j.children=_t;else if(1<yt){for(var Ct=Array(yt),Dt=0;Dt<yt;Dt++)Ct[Dt]=arguments[Dt+2];j.children=Ct}if(N&&N.defaultProps)for(Mt in yt=N.defaultProps,yt)j[Mt]===void 0&&(j[Mt]=yt[Mt]);return F(N,dt,void 0,void 0,null,j)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:h,render:N}},fe.isValidElement=L,fe.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:Q}},fe.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},fe.startTransition=function(N){var $=P.T,_t={};P.T=_t;try{var Mt=N(),j=P.S;j!==null&&j(_t,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(xt,W)}catch(dt){W(dt)}finally{P.T=$}},fe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},fe.use=function(N){return P.H.use(N)},fe.useActionState=function(N,$,_t){return P.H.useActionState(N,$,_t)},fe.useCallback=function(N,$){return P.H.useCallback(N,$)},fe.useContext=function(N){return P.H.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N,$){return P.H.useDeferredValue(N,$)},fe.useEffect=function(N,$,_t){var Mt=P.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(N,$)},fe.useId=function(){return P.H.useId()},fe.useImperativeHandle=function(N,$,_t){return P.H.useImperativeHandle(N,$,_t)},fe.useInsertionEffect=function(N,$){return P.H.useInsertionEffect(N,$)},fe.useLayoutEffect=function(N,$){return P.H.useLayoutEffect(N,$)},fe.useMemo=function(N,$){return P.H.useMemo(N,$)},fe.useOptimistic=function(N,$){return P.H.useOptimistic(N,$)},fe.useReducer=function(N,$,_t){return P.H.useReducer(N,$,_t)},fe.useRef=function(N){return P.H.useRef(N)},fe.useState=function(N){return P.H.useState(N)},fe.useSyncExternalStore=function(N,$,_t){return P.H.useSyncExternalStore(N,$,_t)},fe.useTransition=function(){return P.H.useTransition()},fe.version="19.1.0",fe}var Q_;function Kd(){return Q_||(Q_=1,ph.exports=Sy()),ph.exports}var rt=Kd(),mh={exports:{}},Vo={},gh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function xy(){return J_||(J_=1,function(s){function t(z,Q){var W=z.length;z.push(Q);t:for(;0<W;){var xt=W-1>>>1,N=z[xt];if(0<l(N,Q))z[xt]=Q,z[W]=N,W=xt;else break t}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],W=z.pop();if(W!==Q){z[0]=W;t:for(var xt=0,N=z.length,$=N>>>1;xt<$;){var _t=2*(xt+1)-1,Mt=z[_t],j=_t+1,dt=z[j];if(0>l(Mt,W))j<N&&0>l(dt,Mt)?(z[xt]=dt,z[j]=W,xt=j):(z[xt]=Mt,z[_t]=W,xt=_t);else if(j<N&&0>l(dt,W))z[xt]=dt,z[j]=W,xt=j;else break t}}return Q}function l(z,Q){var W=z.sortIndex-Q.sortIndex;return W!==0?W:z.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,_=null,x=3,y=!1,T=!1,M=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var Q=n(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=z)r(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=n(p)}}function P(z){if(M=!1,D(z),!T)if(n(m)!==null)T=!0,O||(O=!0,lt());else{var Q=n(p);Q!==null&&pt(P,Q.startTime-z)}}var O=!1,F=-1,X=5,L=-1;function C(){return S?!0:!(s.unstable_now()-L<X)}function G(){if(S=!1,O){var z=s.unstable_now();L=z;var Q=!0;try{t:{T=!1,M&&(M=!1,U(F),F=-1),y=!0;var W=x;try{e:{for(D(z),_=n(m);_!==null&&!(_.expirationTime>z&&C());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,x=_.priorityLevel;var N=xt(_.expirationTime<=z);if(z=s.unstable_now(),typeof N=="function"){_.callback=N,D(z),Q=!0;break e}_===n(m)&&r(m),D(z)}else r(m);_=n(m)}if(_!==null)Q=!0;else{var $=n(p);$!==null&&pt(P,$.startTime-z),Q=!1}}break t}finally{_=null,x=W,y=!1}Q=void 0}}finally{Q?lt():O=!1}}}var lt;if(typeof b=="function")lt=function(){b(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=G,lt=function(){ct.postMessage(null)}}else lt=function(){g(G,0)};function pt(z,Q){F=g(function(){z(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var W=x;x=Q;try{return z()}finally{x=W}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=x;x=z;try{return Q()}finally{x=W}},s.unstable_scheduleCallback=function(z,Q,W){var xt=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xt+W:xt):W=xt,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,z={id:v++,callback:Q,priorityLevel:z,startTime:W,expirationTime:N,sortIndex:-1},W>xt?(z.sortIndex=W,t(p,z),n(m)===null&&z===n(p)&&(M?(U(F),F=-1):M=!0,pt(P,W-xt))):(z.sortIndex=N,t(m,z),T||y||(T=!0,O||(O=!0,lt()))),z},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(z){var Q=x;return function(){var W=x;x=Q;try{return z.apply(this,arguments)}finally{x=W}}}}(_h)),_h}var $_;function yy(){return $_||($_=1,gh.exports=xy()),gh.exports}var vh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function My(){if(tv)return Ln;tv=1;var s=Kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Ln.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var ev;function Ey(){if(ev)return vh.exports;ev=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vh.exports=My(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function Ty(){if(nv)return Vo;nv=1;var s=yy(),t=Kd(),n=Ey();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),i;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,R=u.child;R;){if(R===a){E=!0,a=u,o=d;break}if(R===o){E=!0,o=u,a=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===a){E=!0,a=d,o=u;break}if(R===o){E=!0,o=d,a=u;break}R=R.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),b=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case b:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var pt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xt=[],N=-1;function $(e){return{current:e}}function _t(e){0>N||(e.current=xt[N],xt[N]=null,N--)}function Mt(e,i){N++,xt[N]=e.current,e.current=i}var j=$(null),dt=$(null),yt=$(null),Ct=$(null);function Dt(e,i){switch(Mt(yt,i),Mt(dt,e),Mt(j,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?M_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=M_(i),e=E_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(j),Mt(j,e)}function kt(){_t(j),_t(dt),_t(yt)}function Gt(e){e.memoizedState!==null&&Mt(Ct,e);var i=j.current,a=E_(i,e.type);i!==a&&(Mt(dt,e),Mt(j,a))}function ue(e){dt.current===e&&(_t(j),_t(dt)),Ct.current===e&&(_t(Ct),Io._currentValue=W)}var qt=Object.prototype.hasOwnProperty,ie=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,$e=s.unstable_shouldYield,Te=s.unstable_requestPaint,de=s.unstable_now,Vt=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,Xt=s.unstable_UserBlockingPriority,Jt=s.unstable_NormalPriority,Qe=s.unstable_LowPriority,I=s.unstable_IdlePriority,A=s.log,et=s.unstable_setDisableYieldValue,ht=null,mt=null;function ut(e){if(typeof A=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var Nt=Math.clz32?Math.clz32:jt,wt=Math.log,Ht=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(wt(e)/Ht|0)|0}var Et=256,zt=4194304;function Qt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $t(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Qt(o):(E&=R,E!==0?u=Qt(E):a||(a=R&~e,a!==0&&(u=Qt(a))))):(R=o&~d,R!==0?u=Qt(R):E!==0?u=Qt(E):a||(a=o&~e,a!==0&&(u=Qt(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function Ut(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function le(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Ot(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Tt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,i,a,o,u,d){var E=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(a=E&~a;0<a;){var ft=31-Nt(a),vt=1<<ft;R[ft]=0,B[ft]=-1;var nt=tt[ft];if(nt!==null)for(tt[ft]=null,ft=0;ft<nt.length;ft++){var at=nt[ft];at!==null&&(at.lane&=-536870913)}a&=~vt}o!==0&&St(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~i))}function St(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Nt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Wt(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function jn(e,i){var a=Q.p;try{return Q.p=e,i()}finally{Q.p=a}}var _n=Math.random().toString(36).slice(2),un="__reactFiber$"+_n,Tn="__reactProps$"+_n,Hn="__reactContainer$"+_n,nr="__reactEvents$"+_n,cl="__reactListeners$"+_n,ul="__reactHandles$"+_n,ir="__reactResources$"+_n,va="__reactMarker$"+_n;function Sa(e){delete e[un],delete e[Tn],delete e[nr],delete e[cl],delete e[ul]}function Gi(e){var i=e[un];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Hn]||a[un]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=R_(e);e!==null;){if(a=e[un])return a;e=R_(e)}return i}e=a,a=e.parentNode}return null}function Vi(e){if(e=e[un]||e[Hn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ar(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function xa(e){var i=e[ir];return i||(i=e[ir]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function sn(e){e[va]=!0}var fl=new Set,hl={};function ki(e,i){w(e,i),w(e+"Capture",i)}function w(e,i){for(hl[e]=i,e=0;e<i.length;e++)fl.add(i[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ot={};function Z(e){return qt.call(ot,e)?!0:qt.call(st,e)?!1:q.test(e)?ot[e]=!0:(st[e]=!0,!1)}function bt(e,i,a){if(Z(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Lt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function It(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var Ft,re;function ee(e){if(Ft===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+re}var Zt=!1;function me(e,i){if(!e||Zt)return"";Zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(at){var nt=at}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(at){nt=at}e.call(vt.prototype)}}else{try{throw Error()}catch(at){nt=at}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var B=E.split(`
`),tt=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===tt.length)for(o=B.length-1,u=tt.length-1;1<=o&&0<=u&&B[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==tt[u]){var ft=`
`+B[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Zt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ee(a):""}function Le(e){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return ee("Activity");default:return""}}function qe(e){try{var i="";do i+=Le(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function te(e){var i=Ne(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ze(e){e._valueTracker||(e._valueTracker=te(e))}function be(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function We(e){return e.replace(ya,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xi(e,i,a,o,u,d,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Se(i)):e.value!==""+Se(i)&&(e.value=""+Se(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,E,Se(i)):a!=null?Dn(e,E,Se(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Se(R):e.removeAttribute("name")}function ke(e,i,a,o,u,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Se(a):"",i=i!=null?""+Se(i):a,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Dn(e,i,a){i==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fn(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Sn(e,i,a){if(i!=null&&(i=""+Se(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Se(a):""}function bn(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(r(92));if(pt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Se(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ci(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mp(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Wi.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ep(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Mp(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Mp(e,d,i[d])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return gS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fr=null,Hr=null;function Tp(e){var i=Vi(e);if(i&&(e=i.stateNode)){var a=e[Tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Xi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[Tn]||null;if(!u)throw Error(r(90));Xi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&be(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&fn(e,!!a.multiple,i,!1)}}}var pu=!1;function bp(e,i,a){if(pu)return e(i,a);pu=!0;try{var o=e(i);return o}finally{if(pu=!1,(Fr!==null||Hr!==null)&&(Jl(),Fr&&(i=Fr,e=Hr,Hr=Fr=null,Tp(i),e)))for(i=0;i<e.length;i++)Tp(e[i])}}function js(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Yi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{mu=!1}var Ma=null,gu=null,pl=null;function Ap(){if(pl)return pl;var e,i=gu,a=i.length,o,u="value"in Ma?Ma.value:Ma.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var E=a-e;for(o=1;o<=E&&i[a-o]===u[d-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Rp(){return!1}function Gn(e){function i(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Rp,this.isPropagationStopped=Rp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),i}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Gn(rr),Ks=v({},rr,{view:0,detail:0}),_S=Gn(Ks),_u,vu,Qs,vl=v({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(_u=e.screenX-Qs.screenX,vu=e.screenY-Qs.screenY):vu=_u=0,Qs=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Cp=Gn(vl),vS=v({},vl,{dataTransfer:0}),SS=Gn(vS),xS=v({},Ks,{relatedTarget:0}),Su=Gn(xS),yS=v({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Gn(yS),ES=v({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),TS=Gn(ES),bS=v({},rr,{data:0}),wp=Gn(bS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=CS[e])?!!i[e]:!1}function xu(){return wS}var DS=v({},Ks,{key:function(e){if(e.key){var i=AS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?RS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),US=Gn(DS),LS=v({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Gn(LS),NS=v({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),OS=Gn(NS),PS=v({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=Gn(PS),zS=v({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BS=Gn(zS),FS=v({},rr,{newState:0,oldState:0}),HS=Gn(FS),GS=[9,13,27,32],yu=Yi&&"CompositionEvent"in window,Js=null;Yi&&"documentMode"in document&&(Js=document.documentMode);var VS=Yi&&"TextEvent"in window&&!Js,Up=Yi&&(!yu||Js&&8<Js&&11>=Js),Lp=" ",Np=!1;function Op(e,i){switch(e){case"keyup":return GS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function kS(e,i){switch(e){case"compositionend":return Pp(i);case"keypress":return i.which!==32?null:(Np=!0,Lp);case"textInput":return e=i.data,e===Lp&&Np?null:e;default:return null}}function XS(e,i){if(Gr)return e==="compositionend"||!yu&&Op(e,i)?(e=Ap(),pl=gu=Ma=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Up&&i.locale!=="ko"?null:i.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!WS[e.type]:i==="textarea"}function zp(e,i,a,o){Fr?Hr?Hr.push(o):Hr=[o]:Fr=o,i=ac(i,"onChange"),0<i.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var $s=null,to=null;function YS(e){__(e,0)}function Sl(e){var i=ar(e);if(be(i))return e}function Bp(e,i){if(e==="change")return i}var Fp=!1;if(Yi){var Mu;if(Yi){var Eu="oninput"in document;if(!Eu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Eu=typeof Hp.oninput=="function"}Mu=Eu}else Mu=!1;Fp=Mu&&(!document.documentMode||9<document.documentMode)}function Gp(){$s&&($s.detachEvent("onpropertychange",Vp),to=$s=null)}function Vp(e){if(e.propertyName==="value"&&Sl(to)){var i=[];zp(i,to,e,du(e)),bp(YS,i)}}function qS(e,i,a){e==="focusin"?(Gp(),$s=i,to=a,$s.attachEvent("onpropertychange",Vp)):e==="focusout"&&Gp()}function jS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(to)}function ZS(e,i){if(e==="click")return Sl(i)}function KS(e,i){if(e==="input"||e==="change")return Sl(i)}function QS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Zn=typeof Object.is=="function"?Object.is:QS;function eo(e,i){if(Zn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(i,u)||!Zn(e[u],i[u]))return!1}return!0}function kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,i){var a=kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kp(a)}}function Wp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Wp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=vn(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=vn(e.document)}return i}function Tu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var JS=Yi&&"documentMode"in document&&11>=document.documentMode,Vr=null,bu=null,no=null,Au=!1;function qp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Vr==null||Vr!==vn(o)||(o=Vr,"selectionStart"in o&&Tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=ac(bu,"onSelect"),0<o.length&&(i=new _l("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Vr)))}function sr(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var kr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Ru={},jp={};Yi&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function or(e){if(Ru[e])return Ru[e];if(!kr[e])return e;var i=kr[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in jp)return Ru[e]=i[a];return e}var Zp=or("animationend"),Kp=or("animationiteration"),Qp=or("animationstart"),$S=or("transitionrun"),tx=or("transitionstart"),ex=or("transitioncancel"),Jp=or("transitionend"),$p=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function gi(e,i){$p.set(e,i),ki(i,[e])}var tm=new WeakMap;function si(e,i){if(typeof e=="object"&&e!==null){var a=tm.get(e);return a!==void 0?a:(i={value:e,source:i,stack:qe(i)},tm.set(e,i),i)}return{value:e,source:i,stack:qe(i)}}var oi=[],Xr=0,wu=0;function xl(){for(var e=Xr,i=wu=Xr=0;i<e;){var a=oi[i];oi[i++]=null;var o=oi[i];oi[i++]=null;var u=oi[i];oi[i++]=null;var d=oi[i];if(oi[i++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&em(a,u,d)}}function yl(e,i,a,o){oi[Xr++]=e,oi[Xr++]=i,oi[Xr++]=a,oi[Xr++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,i,a,o){return yl(e,i,a,o),Ml(e)}function Wr(e,i){return yl(e,null,null,i),Ml(e)}function em(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Nt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),d):null}function Ml(e){if(50<Co)throw Co=0,zf=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Yr={};function nx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,i,a,o){return new nx(e,i,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var a=e.alternate;return a===null?(a=Kn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function nm(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function El(e,i,a,o,u,d){var E=0;if(o=e,typeof e=="function")Uu(e)&&(E=1);else if(typeof e=="string")E=ay(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Kn(31,a,i,u),e.elementType=L,e.lanes=d,e;case T:return lr(a.children,u,d,i);case M:E=8,u|=24;break;case S:return e=Kn(12,a,i,u|2),e.elementType=S,e.lanes=d,e;case P:return e=Kn(13,a,i,u),e.elementType=P,e.lanes=d,e;case O:return e=Kn(19,a,i,u),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case b:E=10;break t;case U:E=9;break t;case D:E=11;break t;case F:E=14;break t;case X:E=16,o=null;break t}E=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=Kn(E,a,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function lr(e,i,a,o){return e=Kn(7,e,o,i),e.lanes=a,e}function Lu(e,i,a){return e=Kn(6,e,null,i),e.lanes=a,e}function Nu(e,i,a){return i=Kn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var qr=[],jr=0,Tl=null,bl=0,li=[],ci=0,cr=null,ji=1,Zi="";function ur(e,i){qr[jr++]=bl,qr[jr++]=Tl,Tl=e,bl=i}function im(e,i,a){li[ci++]=ji,li[ci++]=Zi,li[ci++]=cr,cr=e;var o=ji;e=Zi;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var d=32-Nt(i)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,ji=1<<32-Nt(i)+u|a<<u|o,Zi=d+e}else ji=1<<d|a<<u|o,Zi=e}function Ou(e){e.return!==null&&(ur(e,1),im(e,1,0))}function Pu(e){for(;e===Tl;)Tl=qr[--jr],qr[jr]=null,bl=qr[--jr],qr[jr]=null;for(;e===cr;)cr=li[--ci],li[ci]=null,Zi=li[--ci],li[ci]=null,ji=li[--ci],li[ci]=null}var In=null,tn=null,Ue=!1,fr=null,wi=!1,Iu=Error(r(519));function hr(e){var i=Error(r(418,""));throw ro(si(i,e)),Iu}function am(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[un]=e,i[Tn]=o,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<Do.length;a++)Me(Do[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),ke(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ze(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),bn(i,o.value,o.defaultValue,o.children),ze(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||y_(i.textContent,a)?(o.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),o.onScroll!=null&&Me("scroll",i),o.onScrollEnd!=null&&Me("scrollend",i),o.onClick!=null&&(i.onclick=rc),i=!0):i=!1,i||hr(e)}function rm(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function io(e){if(e!==In)return!1;if(!Ue)return rm(e),Ue=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$f(e.type,e.memoizedProps)),a=!a),a&&tn&&hr(e),rm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){tn=vi(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}tn=null}}else i===27?(i=tn,Ba(e.type)?(e=ih,ih=null,tn=e):tn=i):tn=In?vi(e.stateNode.nextSibling):null;return!0}function ao(){tn=In=null,Ue=!1}function sm(){var e=fr;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),fr=null),e}function ro(e){fr===null?fr=[e]:fr.push(e)}var zu=$(null),dr=null,Ki=null;function Ea(e,i,a){Mt(zu,i._currentValue),i._currentValue=a}function Qi(e){e._currentValue=zu.current,_t(zu)}function Bu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Fu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var B=0;B<i.length;B++)if(R.context===i[B]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Bu(d.return,a,e),o||(E=null);break t}d=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Bu(E,a,e),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===e){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function so(e,i,a,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=u.type;Zn(u.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(u===Ct.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Fu(i,e,a,o),i.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){dr=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return om(dr,e)}function Rl(e,i){return dr===null&&pr(e),om(e,i)}function om(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ki===null){if(e===null)throw Error(r(308));Ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ki=Ki.next=i;return a}var ix=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},ax=s.unstable_scheduleCallback,rx=s.unstable_NormalPriority,hn={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new ix,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&ax(rx,function(){e.controller.abort()})}var lo=null,Gu=0,Zr=0,Kr=null;function sx(e,i){if(lo===null){var a=lo=[];Gu=0,Zr=Xf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,i.then(lm,lm),i}function lm(){if(--Gu===0&&lo!==null){Kr!==null&&(Kr.status="fulfilled");var e=lo;lo=null,Zr=0,Kr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ox(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var cm=z.S;z.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&sx(e,i),cm!==null&&cm(e,i)};var mr=$(null);function Vu(){var e=mr.current;return e!==null?e:Ye.pooledCache}function Cl(e,i){i===null?Mt(mr,mr.current):Mt(mr,i.pool)}function um(){var e=Vu();return e===null?null:{parent:hn._currentValue,pool:e}}var co=Error(r(460)),fm=Error(r(474)),wl=Error(r(542)),ku={then:function(){}};function hm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dl(){}function dm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Dl,Dl),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,mm(e),e;default:if(typeof i.status=="string")i.then(Dl,Dl);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,mm(e),e}throw uo=i,co}}var uo=null;function pm(){if(uo===null)throw Error(r(459));var e=uo;return uo=null,e}function mm(e){if(e===co||e===wl)throw Error(r(483))}var Ta=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Ml(e),em(e,null,a),i}return yl(e,o,i,a),Ml(e)}function fo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Wt(e,a)}}function Yu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var qu=!1;function ho(){if(qu){var e=Kr;if(e!==null)throw e}}function po(e,i,a,o){qu=!1;var u=e.updateQueue;Ta=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,tt=B.next;B.next=null,E===null?d=tt:E.next=tt,E=B;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,R=ft.lastBaseUpdate,R!==E&&(R===null?ft.firstBaseUpdate=tt:R.next=tt,ft.lastBaseUpdate=B))}if(d!==null){var vt=u.baseState;E=0,ft=tt=B=null,R=d;do{var nt=R.lane&-536870913,at=nt!==R.lane;if(at?(Ae&nt)===nt:(o&nt)===nt){nt!==0&&nt===Zr&&(qu=!0),ft!==null&&(ft=ft.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var se=e,ne=R;nt=i;var He=a;switch(ne.tag){case 1:if(se=ne.payload,typeof se=="function"){vt=se.call(He,vt,nt);break t}vt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ne.payload,nt=typeof se=="function"?se.call(He,vt,nt):se,nt==null)break t;vt=v({},vt,nt);break t;case 2:Ta=!0}}nt=R.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ft===null?(tt=ft=at,B=vt):ft=ft.next=at,E|=nt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;at=R,R=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ft===null&&(B=vt),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=ft,d===null&&(u.shared.lanes=0),Oa|=E,e.lanes=E,e.memoizedState=vt}}function gm(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function _m(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],i)}var Qr=$(null),Ul=$(0);function vm(e,i){e=aa,Mt(Ul,e),Mt(Qr,i),aa=e|i.baseLanes}function ju(){Mt(Ul,aa),Mt(Qr,Qr.current)}function Zu(){aa=Ul.current,_t(Qr),_t(Ul)}var Ra=0,ve=null,Be=null,on=null,Ll=!1,Jr=!1,gr=!1,Nl=0,mo=0,$r=null,lx=0;function an(){throw Error(r(321))}function Ku(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Zn(e[a],i[a]))return!1;return!0}function Qu(e,i,a,o,u,d){return Ra=d,ve=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?eg:ng,gr=!1,d=a(o,u),gr=!1,Jr&&(d=xm(i,a,o,u)),Sm(e),d}function Sm(e){z.H=Fl;var i=Be!==null&&Be.next!==null;if(Ra=0,on=Be=ve=null,Ll=!1,mo=0,$r=null,i)throw Error(r(300));e===null||xn||(e=e.dependencies,e!==null&&Al(e)&&(xn=!0))}function xm(e,i,a,o){ve=e;var u=0;do{if(Jr&&($r=null),mo=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,on=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=mx,d=i(a,o)}while(Jr);return d}function cx(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?go(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ve.flags|=1024),i}function Ju(){var e=Nl!==0;return Nl=0,e}function $u(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function tf(e){if(Ll){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ll=!1}Ra=0,on=Be=ve=null,Jr=!1,mo=Nl=0,$r=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ve.memoizedState=on=e:on=on.next=e,on}function ln(){if(Be===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=on===null?ve.memoizedState:on.next;if(i!==null)on=i,Be=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},on===null?ve.memoizedState=on=e:on=on.next=e}return on}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var i=mo;return mo+=1,$r===null&&($r=[]),e=dm($r,e,i),i=ve,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?eg:ng),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===b)return Un(e)}throw Error(r(438,String(e)))}function nf(e){var i=null,a=ve.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ef(),ve.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=C;return i.index++,a}function Ji(e,i){return typeof i=="function"?i(e):i}function Pl(e){var i=ln();return af(i,Be,e)}function af(e,i,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var R=E=null,B=null,tt=i,ft=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(Ae&vt)===vt:(Ra&vt)===vt){var nt=tt.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Zr&&(ft=!0);else if((Ra&nt)===nt){tt=tt.next,nt===Zr&&(ft=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(R=B=vt,E=d):B=B.next=vt,ve.lanes|=nt,Oa|=nt;vt=tt.action,gr&&a(d,vt),d=tt.hasEagerState?tt.eagerState:a(d,vt)}else nt={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(R=B=nt,E=d):B=B.next=nt,ve.lanes|=vt,Oa|=vt;tt=tt.next}while(tt!==null&&tt!==i);if(B===null?E=d:B.next=R,!Zn(d,e.memoizedState)&&(xn=!0,ft&&(a=Kr,a!==null)))throw a;e.memoizedState=d,e.baseState=E,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var i=ln(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=e(d,E.action),E=E.next;while(E!==u);Zn(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function ym(e,i,a){var o=ve,u=ln(),d=Ue;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var E=!Zn((Be||u).memoizedState,a);E&&(u.memoizedState=a,xn=!0),u=u.queue;var R=Tm.bind(null,o,u,e);if(_o(2048,8,R,[e]),u.getSnapshot!==i||E||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,ts(9,Il(),Em.bind(null,o,u,a,i),null),Ye===null)throw Error(r(349));d||(Ra&124)!==0||Mm(o,i,a)}return a}function Mm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ve.updateQueue,i===null?(i=ef(),ve.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Em(e,i,a,o){i.value=a,i.getSnapshot=o,bm(i)&&Am(e)}function Tm(e,i,a){return a(function(){bm(i)&&Am(e)})}function bm(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Zn(e,a)}catch{return!0}}function Am(e){var i=Wr(e,2);i!==null&&ei(i,e,2)}function sf(e){var i=Vn();if(typeof e=="function"){var a=e;if(e=a(),gr){ut(!0);try{a()}finally{ut(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},i}function Rm(e,i,a,o){return e.baseState=a,af(e,Be,typeof o=="function"?o:Ji)}function ux(e,i,a,o,u){if(Bl(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Cm(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Cm(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=z.T,E={};z.T=E;try{var R=a(u,o),B=z.S;B!==null&&B(E,R),wm(e,i,R)}catch(tt){of(e,i,tt)}finally{z.T=d}}else try{d=a(u,o),wm(e,i,d)}catch(tt){of(e,i,tt)}}function wm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(e,i,o)},function(o){return of(e,i,o)}):Dm(e,i,a)}function Dm(e,i,a){i.status="fulfilled",i.value=a,Um(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Cm(e,a)))}function of(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Um(i),i=i.next;while(i!==o)}e.action=null}function Um(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Lm(e,i){return i}function Nm(e,i){if(Ue){var a=Ye.formState;if(a!==null){t:{var o=ve;if(Ue){if(tn){e:{for(var u=tn,d=wi;u.nodeType!==8;){if(!d){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){tn=vi(u.nextSibling),o=u.data==="F!";break t}}hr(o)}o=!1}o&&(i=a[0])}}return a=Vn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:i},a.queue=o,a=Jm.bind(null,ve,o),o.dispatch=a,o=sf(!1),d=hf.bind(null,ve,!1,o.queue),o=Vn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=ux.bind(null,ve,u,d,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function Om(e){var i=ln();return Pm(i,Be,e)}function Pm(e,i,a){if(i=af(e,i,Lm)[0],e=Pl(Ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=go(i)}catch(E){throw E===co?wl:E}else o=i;i=ln();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(ve.flags|=2048,ts(9,Il(),fx.bind(null,u,a),null)),[o,d,e]}function fx(e,i){e.action=i}function Im(e){var i=ln(),a=Be;if(a!==null)return Pm(i,a,e);ln(),i=i.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function ts(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ve.updateQueue,i===null&&(i=ef(),ve.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Il(){return{destroy:void 0,resource:void 0}}function zm(){return ln().memoizedState}function zl(e,i,a,o){var u=Vn();o=o===void 0?null:o,ve.flags|=e,u.memoizedState=ts(1|i,Il(),a,o)}function _o(e,i,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;Be!==null&&o!==null&&Ku(o,Be.memoizedState.deps)?u.memoizedState=ts(i,d,a,o):(ve.flags|=e,u.memoizedState=ts(1|i,d,a,o))}function Bm(e,i){zl(8390656,8,e,i)}function Fm(e,i){_o(2048,8,e,i)}function Hm(e,i){return _o(4,2,e,i)}function Gm(e,i){return _o(4,4,e,i)}function Vm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function km(e,i,a){a=a!=null?a.concat([e]):null,_o(4,4,Vm.bind(null,i,e),a)}function lf(){}function Xm(e,i){var a=ln();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Ku(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Wm(e,i){var a=ln();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Ku(i,o[1]))return o[0];if(o=e(),gr){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,i],o}function cf(e,i,a){return a===void 0||(Ra&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=jg(),ve.lanes|=e,Oa|=e,a)}function Ym(e,i,a,o){return Zn(a,i)?a:Qr.current!==null?(e=cf(e,a,o),Zn(e,i)||(xn=!0),e):(Ra&42)===0?(xn=!0,e.memoizedState=a):(e=jg(),ve.lanes|=e,Oa|=e,i)}function qm(e,i,a,o,u){var d=Q.p;Q.p=d!==0&&8>d?d:8;var E=z.T,R={};z.T=R,hf(e,!1,i,a);try{var B=u(),tt=z.S;if(tt!==null&&tt(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=ox(B,o);vo(e,i,ft,ti(e))}else vo(e,i,o,ti(e))}catch(vt){vo(e,i,{then:function(){},status:"rejected",reason:vt},ti())}finally{Q.p=d,z.T=E}}function hx(){}function uf(e,i,a,o){if(e.tag!==5)throw Error(r(476));var u=jm(e).queue;qm(e,u,i,W,a===null?hx:function(){return Zm(e),a(o)})}function jm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:W},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Zm(e){var i=jm(e).next.queue;vo(e,i,{},ti())}function ff(){return Un(Io)}function Km(){return ln().memoizedState}function Qm(){return ln().memoizedState}function dx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=ti();e=ba(a);var o=Aa(i,e,a);o!==null&&(ei(o,i,a),fo(o,i,a)),i={cache:Hu()},e.payload=i;return}i=i.return}}function px(e,i,a){var o=ti();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(e)?$m(i,a):(a=Du(e,i,a,o),a!==null&&(ei(a,e,o),tg(a,i,o)))}function Jm(e,i,a){var o=ti();vo(e,i,a,o)}function vo(e,i,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))$m(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,R=d(E,a);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,E))return yl(e,i,u,0),Ye===null&&xl(),!1}catch{}finally{}if(a=Du(e,i,u,o),a!==null)return ei(a,e,o),tg(a,i,o),!0}return!1}function hf(e,i,a,o){if(o={lane:2,revertLane:Xf(),action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(i)throw Error(r(479))}else i=Du(e,a,o,2),i!==null&&ei(i,e,2)}function Bl(e){var i=e.alternate;return e===ve||i!==null&&i===ve}function $m(e,i){Jr=Ll=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function tg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Wt(e,a)}}var Fl={readContext:Un,use:Ol,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},eg={readContext:Un,use:Ol,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:Bm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Vm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return zl(4194308,4,e,i)},useInsertionEffect:function(e,i){zl(4,2,e,i)},useMemo:function(e,i){var a=Vn();i=i===void 0?null:i;var o=e();if(gr){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Vn();if(a!==void 0){var u=a(i);if(gr){ut(!0);try{a(i)}finally{ut(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=px.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=sf(e);var i=e.queue,a=Jm.bind(null,ve,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(e,i){var a=Vn();return cf(a,e,i)},useTransition:function(){var e=sf(!1);return e=qm.bind(null,ve,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ve,u=Vn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),Ye===null)throw Error(r(349));(Ae&124)!==0||Mm(o,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,Bm(Tm.bind(null,o,d,e),[e]),o.flags|=2048,ts(9,Il(),Em.bind(null,o,d,a,i),null),a},useId:function(){var e=Vn(),i=Ye.identifierPrefix;if(Ue){var a=Zi,o=ji;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Nl++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=lx++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:ff,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=hf.bind(null,ve,!0,a),a.dispatch=i,[e,i]},useMemoCache:nf,useCacheRefresh:function(){return Vn().memoizedState=dx.bind(null,ve)}},ng={readContext:Un,use:Ol,useCallback:Xm,useContext:Un,useEffect:Fm,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Pl,useRef:zm,useState:function(){return Pl(Ji)},useDebugValue:lf,useDeferredValue:function(e,i){var a=ln();return Ym(a,Be.memoizedState,e,i)},useTransition:function(){var e=Pl(Ji)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:ym,useId:Km,useHostTransitionStatus:ff,useFormState:Om,useActionState:Om,useOptimistic:function(e,i){var a=ln();return Rm(a,Be,e,i)},useMemoCache:nf,useCacheRefresh:Qm},mx={readContext:Un,use:Ol,useCallback:Xm,useContext:Un,useEffect:Fm,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:rf,useRef:zm,useState:function(){return rf(Ji)},useDebugValue:lf,useDeferredValue:function(e,i){var a=ln();return Be===null?cf(a,e,i):Ym(a,Be.memoizedState,e,i)},useTransition:function(){var e=rf(Ji)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:ym,useId:Km,useHostTransitionStatus:ff,useFormState:Im,useActionState:Im,useOptimistic:function(e,i){var a=ln();return Be!==null?Rm(a,Be,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Qm},es=null,So=0;function Hl(e){var i=So;return So+=1,es===null&&(es=[]),dm(es,e,i)}function xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Gl(e,i){throw i.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ig(e){var i=e._init;return i(e._payload)}function ag(e){function i(Y,V){if(e){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=qi(Y,V),Y.index=0,Y.sibling=null,Y}function d(Y,V,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function E(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,V,J,gt){return V===null||V.tag!==6?(V=Lu(J,Y.mode,gt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function B(Y,V,J,gt){var Yt=J.type;return Yt===T?ft(Y,V,J.props.children,gt,J.key):V!==null&&(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===X&&ig(Yt)===V.type)?(V=u(V,J.props),xo(V,J),V.return=Y,V):(V=El(J.type,J.key,J.props,null,Y.mode,gt),xo(V,J),V.return=Y,V)}function tt(Y,V,J,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Nu(J,Y.mode,gt),V.return=Y,V):(V=u(V,J.children||[]),V.return=Y,V)}function ft(Y,V,J,gt,Yt){return V===null||V.tag!==7?(V=lr(J,Y.mode,gt,Yt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function vt(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Lu(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return J=El(V.type,V.key,V.props,null,Y.mode,J),xo(J,V),J.return=Y,J;case y:return V=Nu(V,Y.mode,J),V.return=Y,V;case X:var gt=V._init;return V=gt(V._payload),vt(Y,V,J)}if(pt(V)||lt(V))return V=lr(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return vt(Y,Hl(V),J);if(V.$$typeof===b)return vt(Y,Rl(Y,V),J);Gl(Y,V)}return null}function nt(Y,V,J,gt){var Yt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Yt!==null?null:R(Y,V,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===Yt?B(Y,V,J,gt):null;case y:return J.key===Yt?tt(Y,V,J,gt):null;case X:return Yt=J._init,J=Yt(J._payload),nt(Y,V,J,gt)}if(pt(J)||lt(J))return Yt!==null?null:ft(Y,V,J,gt,null);if(typeof J.then=="function")return nt(Y,V,Hl(J),gt);if(J.$$typeof===b)return nt(Y,V,Rl(Y,J),gt);Gl(Y,J)}return null}function at(Y,V,J,gt,Yt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(J)||null,R(V,Y,""+gt,Yt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case x:return Y=Y.get(gt.key===null?J:gt.key)||null,B(V,Y,gt,Yt);case y:return Y=Y.get(gt.key===null?J:gt.key)||null,tt(V,Y,gt,Yt);case X:var xe=gt._init;return gt=xe(gt._payload),at(Y,V,J,gt,Yt)}if(pt(gt)||lt(gt))return Y=Y.get(J)||null,ft(V,Y,gt,Yt,null);if(typeof gt.then=="function")return at(Y,V,J,Hl(gt),Yt);if(gt.$$typeof===b)return at(Y,V,J,Rl(V,gt),Yt);Gl(V,gt)}return null}function se(Y,V,J,gt){for(var Yt=null,xe=null,Kt=V,ae=V=0,Mn=null;Kt!==null&&ae<J.length;ae++){Kt.index>ae?(Mn=Kt,Kt=null):Mn=Kt.sibling;var we=nt(Y,Kt,J[ae],gt);if(we===null){Kt===null&&(Kt=Mn);break}e&&Kt&&we.alternate===null&&i(Y,Kt),V=d(we,V,ae),xe===null?Yt=we:xe.sibling=we,xe=we,Kt=Mn}if(ae===J.length)return a(Y,Kt),Ue&&ur(Y,ae),Yt;if(Kt===null){for(;ae<J.length;ae++)Kt=vt(Y,J[ae],gt),Kt!==null&&(V=d(Kt,V,ae),xe===null?Yt=Kt:xe.sibling=Kt,xe=Kt);return Ue&&ur(Y,ae),Yt}for(Kt=o(Kt);ae<J.length;ae++)Mn=at(Kt,Y,ae,J[ae],gt),Mn!==null&&(e&&Mn.alternate!==null&&Kt.delete(Mn.key===null?ae:Mn.key),V=d(Mn,V,ae),xe===null?Yt=Mn:xe.sibling=Mn,xe=Mn);return e&&Kt.forEach(function(ka){return i(Y,ka)}),Ue&&ur(Y,ae),Yt}function ne(Y,V,J,gt){if(J==null)throw Error(r(151));for(var Yt=null,xe=null,Kt=V,ae=V=0,Mn=null,we=J.next();Kt!==null&&!we.done;ae++,we=J.next()){Kt.index>ae?(Mn=Kt,Kt=null):Mn=Kt.sibling;var ka=nt(Y,Kt,we.value,gt);if(ka===null){Kt===null&&(Kt=Mn);break}e&&Kt&&ka.alternate===null&&i(Y,Kt),V=d(ka,V,ae),xe===null?Yt=ka:xe.sibling=ka,xe=ka,Kt=Mn}if(we.done)return a(Y,Kt),Ue&&ur(Y,ae),Yt;if(Kt===null){for(;!we.done;ae++,we=J.next())we=vt(Y,we.value,gt),we!==null&&(V=d(we,V,ae),xe===null?Yt=we:xe.sibling=we,xe=we);return Ue&&ur(Y,ae),Yt}for(Kt=o(Kt);!we.done;ae++,we=J.next())we=at(Kt,Y,ae,we.value,gt),we!==null&&(e&&we.alternate!==null&&Kt.delete(we.key===null?ae:we.key),V=d(we,V,ae),xe===null?Yt=we:xe.sibling=we,xe=we);return e&&Kt.forEach(function(gy){return i(Y,gy)}),Ue&&ur(Y,ae),Yt}function He(Y,V,J,gt){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:t:{for(var Yt=J.key;V!==null;){if(V.key===Yt){if(Yt=J.type,Yt===T){if(V.tag===7){a(Y,V.sibling),gt=u(V,J.props.children),gt.return=Y,Y=gt;break t}}else if(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===X&&ig(Yt)===V.type){a(Y,V.sibling),gt=u(V,J.props),xo(gt,J),gt.return=Y,Y=gt;break t}a(Y,V);break}else i(Y,V);V=V.sibling}J.type===T?(gt=lr(J.props.children,Y.mode,gt,J.key),gt.return=Y,Y=gt):(gt=El(J.type,J.key,J.props,null,Y.mode,gt),xo(gt,J),gt.return=Y,Y=gt)}return E(Y);case y:t:{for(Yt=J.key;V!==null;){if(V.key===Yt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),gt=u(V,J.children||[]),gt.return=Y,Y=gt;break t}else{a(Y,V);break}else i(Y,V);V=V.sibling}gt=Nu(J,Y.mode,gt),gt.return=Y,Y=gt}return E(Y);case X:return Yt=J._init,J=Yt(J._payload),He(Y,V,J,gt)}if(pt(J))return se(Y,V,J,gt);if(lt(J)){if(Yt=lt(J),typeof Yt!="function")throw Error(r(150));return J=Yt.call(J),ne(Y,V,J,gt)}if(typeof J.then=="function")return He(Y,V,Hl(J),gt);if(J.$$typeof===b)return He(Y,V,Rl(Y,J),gt);Gl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),gt=u(V,J),gt.return=Y,Y=gt):(a(Y,V),gt=Lu(J,Y.mode,gt),gt.return=Y,Y=gt),E(Y)):a(Y,V)}return function(Y,V,J,gt){try{So=0;var Yt=He(Y,V,J,gt);return es=null,Yt}catch(Kt){if(Kt===co||Kt===wl)throw Kt;var xe=Kn(29,Kt,null,Y.mode);return xe.lanes=gt,xe.return=Y,xe}finally{}}}var ns=ag(!0),rg=ag(!1),ui=$(null),Di=null;function Ca(e){var i=e.alternate;Mt(dn,dn.current&1),Mt(ui,e),Di===null&&(i===null||Qr.current!==null||i.memoizedState!==null)&&(Di=e)}function sg(e){if(e.tag===22){if(Mt(dn,dn.current),Mt(ui,e),Di===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Di=e)}}else wa()}function wa(){Mt(dn,dn.current),Mt(ui,ui.current)}function $i(e){_t(ui),Di===e&&(Di=null),_t(dn)}var dn=$(0);function Vl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||nh(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function df(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=ti(),u=ba(o);u.payload=i,a!=null&&(u.callback=a),i=Aa(e,u,o),i!==null&&(ei(i,e,o),fo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=ti(),u=ba(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Aa(e,u,o),i!==null&&(ei(i,e,o),fo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=ti(),o=ba(a);o.tag=2,i!=null&&(o.callback=i),i=Aa(e,o,a),i!==null&&(ei(i,e,a),fo(i,e,a))}};function og(e,i,a,o,u,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,E):i.prototype&&i.prototype.isPureReactComponent?!eo(a,o)||!eo(u,d):!0}function lg(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&pf.enqueueReplaceState(i,i.state,null)}function _r(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function cg(e){kl(e)}function ug(e){console.error(e)}function fg(e){kl(e)}function Xl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function hg(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(e,i,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(e,i)},a}function dg(e){return e=ba(e),e.tag=3,e}function pg(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){hg(i,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){hg(i,a,o),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function gx(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&so(i,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 13:return Di===null?Ff():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ku?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Gf(e,o,u)),!1;case 22:return a.flags|=65536,o===ku?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Gf(e,o,u)),!1}throw Error(r(435,a.tag))}return Gf(e,o,u),Ff(),!1}if(Ue)return i=ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Iu&&(e=Error(r(422),{cause:o}),ro(si(e,a)))):(o!==Iu&&(i=Error(r(423),{cause:o}),ro(si(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=mf(e.stateNode,o,u),Yu(e,u),en!==4&&(en=2)),!1;var d=Error(r(520),{cause:o});if(d=si(d,a),Ro===null?Ro=[d]:Ro.push(d),en!==4&&(en=2),i===null)return!0;o=si(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=mf(a.stateNode,o,e),Yu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Pa===null||!Pa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),pg(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var mg=Error(r(461)),xn=!1;function An(e,i,a,o){i.child=e===null?rg(i,null,a,o):ns(i,e.child,a,o)}function gg(e,i,a,o,u){a=a.render;var d=i.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return pr(i),o=Qu(e,i,a,E,d,u),R=Ju(),e!==null&&!xn?($u(e,i,u),ta(e,i,u)):(Ue&&R&&Ou(i),i.flags|=1,An(e,i,o,u),i.child)}function _g(e,i,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Uu(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,vg(e,i,d,o,u)):(e=El(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Ef(e,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(E,o)&&e.ref===i.ref)return ta(e,i,u)}return i.flags|=1,e=qi(d,o),e.ref=i.ref,e.return=i,i.child=e}function vg(e,i,a,o,u){if(e!==null){var d=e.memoizedProps;if(eo(d,o)&&e.ref===i.ref)if(xn=!1,i.pendingProps=o=d,Ef(e,u))(e.flags&131072)!==0&&(xn=!0);else return i.lanes=e.lanes,ta(e,i,u)}return gf(e,i,a,o,u)}function Sg(e,i,a){var o=i.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return xg(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(i,d!==null?d.cachePool:null),d!==null?vm(i,d):ju(),sg(i);else return i.lanes=i.childLanes=536870912,xg(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Cl(i,d.cachePool),vm(i,d),wa(),i.memoizedState=null):(e!==null&&Cl(i,null),ju(),wa());return An(e,i,u,a),i.child}function xg(e,i,a,o){var u=Vu();return u=u===null?null:{parent:hn._currentValue,pool:u},i.memoizedState={baseLanes:a,cachePool:u},e!==null&&Cl(i,null),ju(),sg(i),e!==null&&so(e,i,o,!0),null}function Wl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function gf(e,i,a,o,u){return pr(i),a=Qu(e,i,a,o,void 0,u),o=Ju(),e!==null&&!xn?($u(e,i,u),ta(e,i,u)):(Ue&&o&&Ou(i),i.flags|=1,An(e,i,a,u),i.child)}function yg(e,i,a,o,u,d){return pr(i),i.updateQueue=null,a=xm(i,o,a,u),Sm(e),o=Ju(),e!==null&&!xn?($u(e,i,d),ta(e,i,d)):(Ue&&o&&Ou(i),i.flags|=1,An(e,i,a,d),i.child)}function Mg(e,i,a,o,u){if(pr(i),i.stateNode===null){var d=Yr,E=a.contextType;typeof E=="object"&&E!==null&&(d=Un(E)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Xu(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?Un(E):Yr,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(df(i,a,E,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&pf.enqueueReplaceState(d,d.state,null),po(i,o,d,u),ho(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,B=_r(a,R);d.props=B;var tt=d.context,ft=a.contextType;E=Yr,typeof ft=="object"&&ft!==null&&(E=Un(ft));var vt=a.getDerivedStateFromProps;ft=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ft||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||tt!==E)&&lg(i,d,o,E),Ta=!1;var nt=i.memoizedState;d.state=nt,po(i,o,d,u),ho(),tt=i.memoizedState,R||nt!==tt||Ta?(typeof vt=="function"&&(df(i,a,vt,o),tt=i.memoizedState),(B=Ta||og(i,a,B,o,nt,tt,E))?(ft||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=tt),d.props=o,d.state=tt,d.context=E,o=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Wu(e,i),E=i.memoizedProps,ft=_r(a,E),d.props=ft,vt=i.pendingProps,nt=d.context,tt=a.contextType,B=Yr,typeof tt=="object"&&tt!==null&&(B=Un(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==vt||nt!==B)&&lg(i,d,o,B),Ta=!1,nt=i.memoizedState,d.state=nt,po(i,o,d,u),ho();var at=i.memoizedState;E!==vt||nt!==at||Ta||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof R=="function"&&(df(i,a,R,o),at=i.memoizedState),(ft=Ta||og(i,a,ft,o,nt,at,B)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,at,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,at,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=at),d.props=o,d.state=at,d.context=B,o=ft):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Wl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=ns(i,e.child,null,u),i.child=ns(i,null,a,u)):An(e,i,a,u),i.memoizedState=d.state,e=i.child):e=ta(e,i,u),e}function Eg(e,i,a,o){return ao(),i.flags|=256,An(e,i,a,o),i.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:um()}}function Sf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=fi),e}function Tg(e,i,a){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(u?Ca(i):wa(),Ue){var R=tn,B;if(B=R){t:{for(B=R,R=wi;B.nodeType!==8;){if(!R){R=null;break t}if(B=vi(B.nextSibling),B===null){R=null;break t}}R=B}R!==null?(i.memoizedState={dehydrated:R,treeContext:cr!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},B=Kn(18,null,null,0),B.stateNode=R,B.return=i,i.child=B,In=i,tn=null,B=!0):B=!1}B||hr(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return nh(R)?i.lanes=32:i.lanes=536870912,null;$i(i)}return R=o.children,o=o.fallback,u?(wa(),u=i.mode,R=Yl({mode:"hidden",children:R},u),o=lr(o,u,a,null),R.return=i,o.return=i,R.sibling=o,i.child=R,u=i.child,u.memoizedState=vf(a),u.childLanes=Sf(e,E,a),i.memoizedState=_f,o):(Ca(i),xf(i,R))}if(B=e.memoizedState,B!==null&&(R=B.dehydrated,R!==null)){if(d)i.flags&256?(Ca(i),i.flags&=-257,i=yf(e,i,a)):i.memoizedState!==null?(wa(),i.child=e.child,i.flags|=128,i=null):(wa(),u=o.fallback,R=i.mode,o=Yl({mode:"visible",children:o.children},R),u=lr(u,R,a,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,ns(i,e.child,null,a),o=i.child,o.memoizedState=vf(a),o.childLanes=Sf(e,E,a),i.memoizedState=_f,i=u);else if(Ca(i),nh(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var tt=E.dgst;E=tt,o=Error(r(419)),o.stack="",o.digest=E,ro({value:o,source:null,stack:null}),i=yf(e,i,a)}else if(xn||so(e,i,a,!1),E=(a&e.childLanes)!==0,xn||E){if(E=Ye,E!==null&&(o=a&-a,o=(o&42)!==0?1:oe(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Wr(e,o),ei(E,e,o),mg;R.data==="$?"||Ff(),i=yf(e,i,a)}else R.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,tn=vi(R.nextSibling),In=i,Ue=!0,fr=null,wi=!1,e!==null&&(li[ci++]=ji,li[ci++]=Zi,li[ci++]=cr,ji=e.id,Zi=e.overflow,cr=i),i=xf(i,o.children),i.flags|=4096);return i}return u?(wa(),u=o.fallback,R=i.mode,B=e.child,tt=B.sibling,o=qi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?u=qi(tt,u):(u=lr(u,R,a,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,R=e.child.memoizedState,R===null?R=vf(a):(B=R.cachePool,B!==null?(tt=hn._currentValue,B=B.parent!==tt?{parent:tt,pool:tt}:B):B=um(),R={baseLanes:R.baseLanes|a,cachePool:B}),u.memoizedState=R,u.childLanes=Sf(e,E,a),i.memoizedState=_f,o):(Ca(i),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=a,i.memoizedState=null,a)}function xf(e,i){return i=Yl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Yl(e,i){return e=Kn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function yf(e,i,a){return ns(i,e.child,null,a),e=xf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function bg(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Bu(e.return,i,a)}function Mf(e,i,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Ag(e,i,a){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(An(e,i,o.children,a),o=dn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,a,i);else if(e.tag===19)bg(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(dn,o),u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Mf(i,!1,u,a,d);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Vl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(i,!0,a,null,d);break;case"together":Mf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ta(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Oa|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(so(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=qi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Ef(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function _x(e,i,a){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Ea(i,hn,e.memoizedState.cache),ao();break;case 27:case 5:Gt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ca(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Tg(e,i,a):(Ca(i),e=ta(e,i,a),e!==null?e.sibling:null);Ca(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(so(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return Ag(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(dn,dn.current),o)break;return null;case 22:case 23:return i.lanes=0,Sg(e,i,a);case 24:Ea(i,hn,e.memoizedState.cache)}return ta(e,i,a)}function Rg(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)xn=!0;else{if(!Ef(e,a)&&(i.flags&128)===0)return xn=!1,_x(e,i,a);xn=(e.flags&131072)!==0}else xn=!1,Ue&&(i.flags&1048576)!==0&&im(i,bl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Uu(o)?(e=_r(o,e),i.tag=1,i=Mg(null,i,o,e,a)):(i.tag=0,i=gf(null,i,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){i.tag=11,i=gg(null,i,o,e,a);break t}else if(u===F){i.tag=14,i=_g(null,i,o,e,a);break t}}throw i=ct(o)||o,Error(r(306,i,""))}}return i;case 0:return gf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=_r(o,i.pendingProps),Mg(e,i,o,u,a);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Wu(e,i),po(i,o,null,a);var E=i.memoizedState;if(o=E.cache,Ea(i,hn,o),o!==d.cache&&Fu(i,[hn],a,!0),ho(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Eg(e,i,o,a);break t}else if(o!==u){u=si(Error(r(424)),i),ro(u),i=Eg(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=vi(e.firstChild),In=i,Ue=!0,fr=null,wi=!0,a=rg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ao(),o===u){i=ta(e,i,a);break t}An(e,i,o,a)}i=i.child}return i;case 26:return Wl(e,i),e===null?(a=U_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ue||(a=i.type,e=i.pendingProps,o=sc(yt.current).createElement(a),o[un]=i,o[Tn]=e,Cn(o,a,e),sn(o),i.stateNode=o):i.memoizedState=U_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Gt(i),e===null&&Ue&&(o=i.stateNode=C_(i.type,i.pendingProps,yt.current),In=i,wi=!0,u=tn,Ba(i.type)?(ih=u,tn=vi(o.firstChild)):tn=u),An(e,i,i.pendingProps.children,a),Wl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((u=o=tn)&&(o=Wx(o,i.type,i.pendingProps,wi),o!==null?(i.stateNode=o,In=i,tn=vi(o.firstChild),wi=!1,u=!0):u=!1),u||hr(i)),Gt(i),u=i.type,d=i.pendingProps,E=e!==null?e.memoizedProps:null,o=d.children,$f(u,d)?o=null:E!==null&&$f(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=Qu(e,i,cx,null,null,a),Io._currentValue=u),Wl(e,i),An(e,i,o,a),i.child;case 6:return e===null&&Ue&&((e=a=tn)&&(a=Yx(a,i.pendingProps,wi),a!==null?(i.stateNode=a,In=i,tn=null,e=!0):e=!1),e||hr(i)),null;case 13:return Tg(e,i,a);case 4:return Dt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ns(i,null,o,a):An(e,i,o,a),i.child;case 11:return gg(e,i,i.type,i.pendingProps,a);case 7:return An(e,i,i.pendingProps,a),i.child;case 8:return An(e,i,i.pendingProps.children,a),i.child;case 12:return An(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Ea(i,i.type,o.value),An(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,pr(i),u=Un(u),o=o(u),i.flags|=1,An(e,i,o,a),i.child;case 14:return _g(e,i,i.type,i.pendingProps,a);case 15:return vg(e,i,i.type,i.pendingProps,a);case 19:return Ag(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Yl(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=qi(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Sg(e,i,a);case 24:return pr(i),o=Un(hn),e===null?(u=Vu(),u===null&&(u=Ye,d=Hu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:o,cache:u},Xu(i),Ea(i,hn,u)):((e.lanes&a)!==0&&(Wu(e,i),po(i,null,null,a),ho()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ea(i,hn,o)):(o=d.cache,Ea(i,hn,o),o!==u.cache&&Fu(i,[hn],a,!0))),An(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ea(e){e.flags|=4}function Cg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I_(i)){if(i=ui.current,i!==null&&((Ae&4194048)===Ae?Di!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||i!==Di))throw uo=ku,fm;e.flags|=8192}}function ql(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ot():536870912,e.lanes|=i,ss|=i)}function yo(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function vx(e,i,a){var o=i.pendingProps;switch(Pu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Qi(hn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(io(i)?ea(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sm())),Je(i),null;case 26:return a=i.memoizedState,e===null?(ea(i),a!==null?(Je(i),Cg(i,a)):(Je(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ea(i),Je(i),Cg(i,a)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==o&&ea(i),Je(i),i.flags&=-16777217),null;case 27:ue(i),a=yt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ea(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Je(i),null}e=j.current,io(i)?am(i):(e=C_(u,o,a),i.stateNode=e,ea(i))}return Je(i),null;case 5:if(ue(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ea(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Je(i),null}if(e=j.current,io(i))am(i);else{switch(u=sc(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[un]=i,e[Tn]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(Cn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ea(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ea(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=yt.current,io(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y_(e.nodeValue,a)),e||hr(i)}else e=sc(e).createTextNode(o),e[un]=i,i.stateNode=e}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=io(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[un]=i}else ao(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=sm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?($i(i),i):($i(i),null)}if($i(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),ql(i,i.updateQueue),Je(i),null;case 4:return kt(),e===null&&jf(i.stateNode.containerInfo),Je(i),null;case 10:return Qi(i.type),Je(i),null;case 19:if(_t(dn),u=i.memoizedState,u===null)return Je(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)yo(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Vl(e),d!==null){for(i.flags|=128,yo(u,!1),e=d.updateQueue,i.updateQueue=e,ql(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)nm(a,e),a=a.sibling;return Mt(dn,dn.current&1|2),i.child}e=e.sibling}u.tail!==null&&de()>Kl&&(i.flags|=128,o=!0,yo(u,!1),i.lanes=4194304)}else{if(!o)if(e=Vl(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,ql(i,e),yo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ue)return Je(i),null}else 2*de()-u.renderingStartTime>Kl&&a!==536870912&&(i.flags|=128,o=!0,yo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=de(),i.sibling=null,e=dn.current,Mt(dn,o?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return $i(i),Zu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),a=i.updateQueue,a!==null&&ql(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&_t(mr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Qi(hn),Je(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Sx(e,i){switch(Pu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Qi(hn),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ue(i),null;case 13:if($i(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));ao()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return _t(dn),null;case 4:return kt(),null;case 10:return Qi(i.type),null;case 22:case 23:return $i(i),Zu(),e!==null&&_t(mr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Qi(hn),null;case 25:return null;default:return null}}function wg(e,i){switch(Pu(i),i.tag){case 3:Qi(hn),kt();break;case 26:case 27:case 5:ue(i);break;case 4:kt();break;case 13:$i(i);break;case 19:_t(dn);break;case 10:Qi(i.type);break;case 22:case 23:$i(i),Zu(),e!==null&&_t(mr);break;case 24:Qi(hn)}}function Mo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(R){Xe(i,i.return,R)}}function Da(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=i;var B=a,tt=R;try{tt()}catch(ft){Xe(u,B,ft)}}}o=o.next}while(o!==d)}}catch(ft){Xe(i,i.return,ft)}}function Dg(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{_m(i,a)}catch(o){Xe(e,e.return,o)}}}function Ug(e,i,a){a.props=_r(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xe(e,i,o)}}function Eo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Xe(e,i,u)}}function Ui(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Xe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xe(e,i,u)}else a.current=null}function Lg(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Xe(e,e.return,u)}}function Tf(e,i,a){try{var o=e.stateNode;Hx(o,e.type,a,i),o[Tn]=i}catch(u){Xe(e,e.return,u)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=rc));else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Af(e,i,a),e=e.sibling;e!==null;)Af(e,i,a),e=e.sibling}function jl(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,i,a),e=e.sibling;e!==null;)jl(e,i,a),e=e.sibling}function Og(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Cn(i,o,a),i[un]=e,i[Tn]=a}catch(d){Xe(e,e.return,d)}}var na=!1,rn=!1,Rf=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function xx(e,i){if(e=e.containerInfo,Qf=hc,e=Yp(e),Tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var E=0,R=-1,B=-1,tt=0,ft=0,vt=e,nt=null;e:for(;;){for(var at;vt!==a||u!==0&&vt.nodeType!==3||(R=E+u),vt!==d||o!==0&&vt.nodeType!==3||(B=E+o),vt.nodeType===3&&(E+=vt.nodeValue.length),(at=vt.firstChild)!==null;)nt=vt,vt=at;for(;;){if(vt===e)break e;if(nt===a&&++tt===u&&(R=E),nt===d&&++ft===o&&(B=E),(at=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=at}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},hc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var se=_r(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(se,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Xe(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function Ig(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(e,a),o&4&&Mo(5,a);break;case 1:if(Ua(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(E){Xe(a,a.return,E)}else{var u=_r(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xe(a,a.return,E)}}o&64&&Dg(a),o&512&&Eo(a,a.return);break;case 3:if(Ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{_m(e,i)}catch(E){Xe(a,a.return,E)}}break;case 27:i===null&&o&4&&Og(a);case 26:case 5:Ua(e,a),i===null&&o&4&&Lg(a),o&512&&Eo(a,a.return);break;case 12:Ua(e,a);break;case 13:Ua(e,a),o&4&&Fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wx.bind(null,a),qx(e,a))));break;case 22:if(o=a.memoizedState!==null||na,!o){i=i!==null&&i.memoizedState!==null||rn,u=na;var d=rn;na=o,(rn=i)&&!d?La(e,a,(a.subtreeFlags&8772)!==0):Ua(e,a),na=u,rn=d}break;case 30:break;default:Ua(e,a)}}function zg(e){var i=e.alternate;i!==null&&(e.alternate=null,zg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Sa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,kn=!1;function ia(e,i,a){for(a=a.child;a!==null;)Bg(e,i,a),a=a.sibling}function Bg(e,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:rn||Ui(a,i),ia(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ui(a,i);var o=je,u=kn;Ba(a.type)&&(je=a.stateNode,kn=!1),ia(e,i,a),Lo(a.stateNode),je=o,kn=u;break;case 5:rn||Ui(a,i);case 6:if(o=je,u=kn,je=null,ia(e,i,a),je=o,kn=u,je!==null)if(kn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(d){Xe(a,i,d)}else try{je.removeChild(a.stateNode)}catch(d){Xe(a,i,d)}break;case 18:je!==null&&(kn?(e=je,A_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ho(e)):A_(je,a.stateNode));break;case 4:o=je,u=kn,je=a.stateNode.containerInfo,kn=!0,ia(e,i,a),je=o,kn=u;break;case 0:case 11:case 14:case 15:rn||Da(2,a,i),rn||Da(4,a,i),ia(e,i,a);break;case 1:rn||(Ui(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,i,o)),ia(e,i,a);break;case 21:ia(e,i,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,ia(e,i,a),rn=o;break;default:ia(e,i,a)}}function Fg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ho(e)}catch(a){Xe(i,i.return,a)}}function yx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Pg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Pg),i;default:throw Error(r(435,e.tag))}}function Cf(e,i){var a=yx(e);i.forEach(function(o){var u=Dx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Qn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:if(Ba(R.type)){je=R.stateNode,kn=!1;break t}break;case 5:je=R.stateNode,kn=!1;break t;case 3:case 4:je=R.stateNode.containerInfo,kn=!0;break t}R=R.return}if(je===null)throw Error(r(160));Bg(d,E,u),je=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Hg(i,e),i=i.sibling}var _i=null;function Hg(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(i,e),Jn(e),o&4&&(Da(3,e,e.return),Mo(3,e),Da(5,e,e.return));break;case 1:Qn(i,e),Jn(e),o&512&&(rn||a===null||Ui(a,a.return)),o&64&&na&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Qn(i,e),Jn(e),o&512&&(rn||a===null||Ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[va]||d[un]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[un]=e,sn(d),o=d;break t;case"link":var E=O_("link","href",u).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(E=O_("meta","content",u).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[un]=e,sn(d),o=d}e.stateNode=o}else P_(u,e.type,e.stateNode);else e.stateNode=N_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?P_(u,e.type,e.stateNode):N_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qn(i,e),Jn(e),o&512&&(rn||a===null||Ui(a,a.return)),a!==null&&o&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qn(i,e),Jn(e),o&512&&(rn||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{Ci(u,"")}catch(at){Xe(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Rf=!0);break;case 6:if(Qn(i,e),Jn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Xe(e,e.return,at)}}break;case 3:if(cc=null,u=_i,_i=oc(i.containerInfo),Qn(i,e),_i=u,Jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ho(i.containerInfo)}catch(at){Xe(e,e.return,at)}Rf&&(Rf=!1,Gg(e));break;case 4:o=_i,_i=oc(e.stateNode.containerInfo),Qn(i,e),Jn(e),_i=o;break;case 12:Qn(i,e),Jn(e);break;case 13:Qn(i,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Of=de()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=na,ft=rn;if(na=tt||u,rn=ft||B,Qn(i,e),rn=ft,na=tt,Jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||B||na||rn||vr(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){B=a=i;try{if(d=B.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=B.stateNode;var vt=B.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){Xe(B,B.return,at)}}}else if(i.tag===6){if(a===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(at){Xe(B,B.return,at)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Cf(e,a))));break;case 19:Qn(i,e),Jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 30:break;case 21:break;default:Qn(i,e),Jn(e)}}function Jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=bf(e);jl(e,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(Ci(E,""),a.flags&=-33);var R=bf(e);jl(e,R,E);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=bf(e);Af(e,tt,B);break;default:throw Error(r(161))}}catch(ft){Xe(e,e.return,ft)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Gg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(e,i.alternate,i),i=i.sibling}function vr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Da(4,i,i.return),vr(i);break;case 1:Ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ug(i,i.return,a),vr(i);break;case 27:Lo(i.stateNode);case 26:case 5:Ui(i,i.return),vr(i);break;case 22:i.memoizedState===null&&vr(i);break;case 30:vr(i);break;default:vr(i)}e=e.sibling}}function La(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:La(u,d,a),Mo(4,d);break;case 1:if(La(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Xe(o,o.return,tt)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)gm(B[u],R)}catch(tt){Xe(o,o.return,tt)}}a&&E&64&&Dg(d),Eo(d,d.return);break;case 27:Og(d);case 26:case 5:La(u,d,a),a&&o===null&&E&4&&Lg(d),Eo(d,d.return);break;case 12:La(u,d,a);break;case 13:La(u,d,a),a&&E&4&&Fg(u,d);break;case 22:d.memoizedState===null&&La(u,d,a),Eo(d,d.return);break;case 30:break;default:La(u,d,a)}i=i.sibling}}function wf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Df(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&oo(e))}function Li(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vg(e,i,a,o),i=i.sibling}function Vg(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,a,o),u&2048&&Mo(9,i);break;case 1:Li(e,i,a,o);break;case 3:Li(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Li(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Xe(i,i.return,B)}}else Li(e,i,a,o);break;case 13:Li(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Li(e,i,a,o):To(e,i):d._visibility&2?Li(e,i,a,o):(d._visibility|=2,is(e,i,a,o,(i.subtreeFlags&10256)!==0)),u&2048&&wf(E,i);break;case 24:Li(e,i,a,o),u&2048&&Df(i.alternate,i);break;default:Li(e,i,a,o)}}function is(e,i,a,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,E=i,R=a,B=o,tt=E.flags;switch(E.tag){case 0:case 11:case 15:is(d,E,R,B,u),Mo(8,E);break;case 23:break;case 22:var ft=E.stateNode;E.memoizedState!==null?ft._visibility&2?is(d,E,R,B,u):To(d,E):(ft._visibility|=2,is(d,E,R,B,u)),u&&tt&2048&&wf(E.alternate,E);break;case 24:is(d,E,R,B,u),u&&tt&2048&&Df(E.alternate,E);break;default:is(d,E,R,B,u)}i=i.sibling}}function To(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&wf(o.alternate,o);break;case 24:To(a,o),u&2048&&Df(o.alternate,o);break;default:To(a,o)}i=i.sibling}}var bo=8192;function as(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)kg(e),e=e.sibling}function kg(e){switch(e.tag){case 26:as(e),e.flags&bo&&e.memoizedState!==null&&sy(_i,e.memoizedState,e.memoizedProps);break;case 5:as(e);break;case 3:case 4:var i=_i;_i=oc(e.stateNode.containerInfo),as(e),_i=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=bo,bo=16777216,as(e),bo=i):as(e));break;default:as(e)}}function Xg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ao(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,Yg(o,e)}Xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&Da(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zl(e)):Ao(e);break;default:Ao(e)}}function Zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,Yg(o,e)}Xg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Da(8,i,i.return),Zl(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(i));break;default:Zl(i)}e=e.sibling}}function Yg(e,i){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Da(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(zg(o),o===a){yn=null;break t}if(u!==null){u.return=d,yn=u;break t}yn=d}}}var Mx={getCacheForType:function(e){var i=Un(hn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},Ex=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,ye=null,Ae=0,Ie=0,$n=null,Na=!1,rs=!1,Uf=!1,aa=0,en=0,Oa=0,Sr=0,Lf=0,fi=0,ss=0,Ro=null,Xn=null,Nf=!1,Of=0,Kl=1/0,Ql=null,Pa=null,Rn=0,Ia=null,os=null,ls=0,Pf=0,If=null,qg=null,Co=0,zf=null;function ti(){if((Pe&2)!==0&&Ae!==0)return Ae&-Ae;if(z.T!==null){var e=Zr;return e!==0?e:Xf()}return Ce()}function jg(){fi===0&&(fi=(Ae&536870912)===0||Ue?k():536870912);var e=ui.current;return e!==null&&(e.flags|=32),fi}function ei(e,i,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(cs(e,0),za(e,Ae,fi,!1)),Bt(e,a),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(Sr|=a),en===4&&za(e,Ae,fi,!1)),Ni(e))}function Zg(e,i,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Ut(e,i),u=o?Ax(e,i):Hf(e,i,!0),d=o;do{if(u===0){rs&&!o&&za(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!Tx(a)){u=Hf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;u=Ro;var B=R.current.memoizedState.isDehydrated;if(B&&(cs(R,E).flags|=256),E=Hf(R,E,!1),E!==2){if(Uf&&!B){R.errorRecoveryDisabledLanes|=d,Sr|=d,u=4;break t}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){cs(e,0),za(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:za(o,i,fi,!Na);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Of+300-de(),10<u)){if(za(o,i,fi,!Na),$t(o,0,!0)!==0)break t;o.timeoutHandle=T_(Kg.bind(null,o,a,Xn,Ql,Nf,i,fi,Sr,ss,Na,d,2,-0,0),u);break t}Kg(o,a,Xn,Ql,Nf,i,fi,Sr,ss,Na,d,0,-0,0)}}break}while(!0);Ni(e)}function Kg(e,i,a,o,u,d,E,R,B,tt,ft,vt,nt,at){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Po={stylesheets:null,count:0,unsuspend:ry},kg(i),vt=oy(),vt!==null)){e.cancelPendingCommit=vt(i_.bind(null,e,i,d,a,o,u,E,R,B,ft,1,nt,at)),za(e,d,E,!tt);return}i_(e,i,d,a,o,u,E,R,B)}function Tx(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function za(e,i,a,o){i&=~Lf,i&=~Sr,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Nt(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&St(e,a,i)}function Jl(){return(Pe&6)===0?(wo(0),!1):!0}function Bf(){if(ye!==null){if(Ie===0)var e=ye.return;else e=ye,Ki=dr=null,tf(e),es=null,So=0,e=ye;for(;e!==null;)wg(e.alternate,e),e=e.return;ye=null}}function cs(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Bf(),Ye=e,ye=a=qi(e.current,null),Ae=i,Ie=0,$n=null,Na=!1,rs=Ut(e,i),Uf=!1,ss=fi=Lf=Sr=Oa=en=0,Xn=Ro=null,Nf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Nt(o),d=1<<u;i|=e[u],o&=~d}return aa=i,xl(),a}function Qg(e,i){ve=null,z.H=Fl,i===co||i===wl?(i=pm(),Ie=3):i===fm?(i=pm(),Ie=4):Ie=i===mg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,ye===null&&(en=1,Xl(e,si(i,e.current)))}function Jg(){var e=z.H;return z.H=Fl,e===null?Fl:e}function $g(){var e=z.A;return z.A=Mx,e}function Ff(){en=4,Na||(Ae&4194048)!==Ae&&ui.current!==null||(rs=!0),(Oa&134217727)===0&&(Sr&134217727)===0||Ye===null||za(Ye,Ae,fi,!1)}function Hf(e,i,a){var o=Pe;Pe|=2;var u=Jg(),d=$g();(Ye!==e||Ae!==i)&&(Ql=null,cs(e,i)),i=!1;var E=en;t:do try{if(Ie!==0&&ye!==null){var R=ye,B=$n;switch(Ie){case 8:Bf(),E=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(i=!0);var tt=Ie;if(Ie=0,$n=null,us(e,R,B,tt),a&&rs){E=0;break t}break;default:tt=Ie,Ie=0,$n=null,us(e,R,B,tt)}}bx(),E=en;break}catch(ft){Qg(e,ft)}while(!0);return i&&e.shellSuspendCounter++,Ki=dr=null,Pe=o,z.H=u,z.A=d,ye===null&&(Ye=null,Ae=0,xl()),E}function bx(){for(;ye!==null;)t_(ye)}function Ax(e,i){var a=Pe;Pe|=2;var o=Jg(),u=$g();Ye!==e||Ae!==i?(Ql=null,Kl=de()+500,cs(e,i)):rs=Ut(e,i);t:do try{if(Ie!==0&&ye!==null){i=ye;var d=$n;e:switch(Ie){case 1:Ie=0,$n=null,us(e,i,d,1);break;case 2:case 9:if(hm(d)){Ie=0,$n=null,e_(i);break}i=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),Ni(e)},d.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:hm(d)?(Ie=0,$n=null,e_(i)):(Ie=0,$n=null,us(e,i,d,7));break;case 5:var E=null;switch(ye.tag){case 26:E=ye.memoizedState;case 5:case 27:var R=ye;if(!E||I_(E)){Ie=0,$n=null;var B=R.sibling;if(B!==null)ye=B;else{var tt=R.return;tt!==null?(ye=tt,$l(tt)):ye=null}break e}}Ie=0,$n=null,us(e,i,d,5);break;case 6:Ie=0,$n=null,us(e,i,d,6);break;case 8:Bf(),en=6;break t;default:throw Error(r(462))}}Rx();break}catch(ft){Qg(e,ft)}while(!0);return Ki=dr=null,z.H=o,z.A=u,Pe=a,ye!==null?0:(Ye=null,Ae=0,xl(),en)}function Rx(){for(;ye!==null&&!$e();)t_(ye)}function t_(e){var i=Rg(e.alternate,e,aa);e.memoizedProps=e.pendingProps,i===null?$l(e):ye=i}function e_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=yg(a,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=yg(a,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:tf(i);default:wg(a,i),i=ye=nm(i,aa),i=Rg(a,i,aa)}e.memoizedProps=e.pendingProps,i===null?$l(e):ye=i}function us(e,i,a,o){Ki=dr=null,tf(i),es=null,So=0;var u=i.return;try{if(gx(e,u,i,a,Ae)){en=1,Xl(e,si(a,e.current)),ye=null;return}}catch(d){if(u!==null)throw ye=u,d;en=1,Xl(e,si(a,e.current)),ye=null;return}i.flags&32768?(Ue||o===1?e=!0:rs||(Ae&536870912)!==0?e=!1:(Na=e=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),n_(i,e)):$l(i)}function $l(e){var i=e;do{if((i.flags&32768)!==0){n_(i,Na);return}e=i.return;var a=vx(i.alternate,i,aa);if(a!==null){ye=a;return}if(i=i.sibling,i!==null){ye=i;return}ye=i=e}while(i!==null);en===0&&(en=5)}function n_(e,i){do{var a=Sx(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);en=6,ye=null}function i_(e,i,a,o,u,d,E,R,B){e.cancelPendingCommit=null;do tc();while(Rn!==0);if((Pe&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=wu,At(e,a,d,E,R,B),e===Ye&&(ye=Ye=null,Ae=0),os=i,Ia=e,ls=a,Pf=d,If=u,qg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ux(Jt,function(){return l_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=Q.p,Q.p=2,E=Pe,Pe|=4;try{xx(e,i,a)}finally{Pe=E,Q.p=u,z.T=o}}Rn=1,a_(),r_(),s_()}}function a_(){if(Rn===1){Rn=0;var e=Ia,i=os,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Q.p;Q.p=2;var u=Pe;Pe|=4;try{Hg(i,e);var d=Jf,E=Yp(e.containerInfo),R=d.focusedElem,B=d.selectionRange;if(E!==R&&R&&R.ownerDocument&&Wp(R.ownerDocument.documentElement,R)){if(B!==null&&Tu(R)){var tt=B.start,ft=B.end;if(ft===void 0&&(ft=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(ft,R.value.length);else{var vt=R.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),se=R.textContent.length,ne=Math.min(B.start,se),He=B.end===void 0?ne:Math.min(B.end,se);!at.extend&&ne>He&&(E=He,He=ne,ne=E);var Y=Xp(R,ne),V=Xp(R,He);if(Y&&V&&(at.rangeCount!==1||at.anchorNode!==Y.node||at.anchorOffset!==Y.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var J=vt.createRange();J.setStart(Y.node,Y.offset),at.removeAllRanges(),ne>He?(at.addRange(J),at.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),at.addRange(J))}}}}for(vt=[],at=R;at=at.parentNode;)at.nodeType===1&&vt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}hc=!!Qf,Jf=Qf=null}finally{Pe=u,Q.p=o,z.T=a}}e.current=i,Rn=2}}function r_(){if(Rn===2){Rn=0;var e=Ia,i=os,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Q.p;Q.p=2;var u=Pe;Pe|=4;try{Ig(e,i.alternate,i)}finally{Pe=u,Q.p=o,z.T=a}}Rn=3}}function s_(){if(Rn===4||Rn===3){Rn=0,Te();var e=Ia,i=os,a=ls,o=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,os=Ia=null,o_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Pa=null),Oe(a),i=i.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,u=Q.p,Q.p=2,z.T=null;try{for(var d=e.onRecoverableError,E=0;E<o.length;E++){var R=o[E];d(R.value,{componentStack:R.stack})}}finally{z.T=i,Q.p=u}}(ls&3)!==0&&tc(),Ni(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===zf?Co++:(Co=0,zf=e):Co=0,wo(0)}}function o_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,oo(i)))}function tc(e){return a_(),r_(),s_(),l_()}function l_(){if(Rn!==5)return!1;var e=Ia,i=Pf;Pf=0;var a=Oe(ls),o=z.T,u=Q.p;try{Q.p=32>a?32:a,z.T=null,a=If,If=null;var d=Ia,E=ls;if(Rn=0,os=Ia=null,ls=0,(Pe&6)!==0)throw Error(r(331));var R=Pe;if(Pe|=4,Wg(d.current),Vg(d,d.current,E,a),Pe=R,wo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,d)}catch{}return!0}finally{Q.p=u,z.T=o,o_(e,i)}}function c_(e,i,a){i=si(a,i),i=mf(e.stateNode,i,2),e=Aa(e,i,2),e!==null&&(Bt(e,2),Ni(e))}function Xe(e,i,a){if(e.tag===3)c_(e,e,a);else for(;i!==null;){if(i.tag===3){c_(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){e=si(a,e),a=dg(2),o=Aa(i,a,2),o!==null&&(pg(a,o,i,e),Bt(o,2),Ni(o));break}}i=i.return}}function Gf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ex;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(Uf=!0,u.add(a),e=Cx.bind(null,e,i,a),i.then(e,e))}function Cx(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ae&a)===a&&(en===4||en===3&&(Ae&62914560)===Ae&&300>de()-Of?(Pe&2)===0&&cs(e,0):Lf|=a,ss===Ae&&(ss=0)),Ni(e)}function u_(e,i){i===0&&(i=Ot()),e=Wr(e,i),e!==null&&(Bt(e,i),Ni(e))}function wx(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),u_(e,a)}function Dx(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),u_(e,a)}function Ux(e,i){return ie(e,i)}var ec=null,fs=null,Vf=!1,nc=!1,kf=!1,xr=0;function Ni(e){e!==fs&&e.next===null&&(fs===null?ec=fs=e:fs=fs.next=e),nc=!0,Vf||(Vf=!0,Nx())}function wo(e,i){if(!kf&&nc){kf=!0;do for(var a=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Nt(42|e)+1)-1,d&=u&~(E&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,p_(o,d))}else d=Ae,d=$t(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ut(o,d)||(a=!0,p_(o,d));o=o.next}while(a);kf=!1}}function Lx(){f_()}function f_(){nc=Vf=!1;var e=0;xr!==0&&(Gx()&&(e=xr),xr=0);for(var i=de(),a=null,o=ec;o!==null;){var u=o.next,d=h_(o,i);d===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(fs=a)):(a=o,(e!==0||(d&3)!==0)&&(nc=!0)),o=u}wo(e)}function h_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-Nt(d),R=1<<E,B=u[E];B===-1?((R&a)===0||(R&o)!==0)&&(u[E]=le(R,i)):B<=i&&(e.expiredLanes|=R),d&=~R}if(i=Ye,a=Ae,a=$t(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&H(o),Oe(a)){case 2:case 8:a=Xt;break;case 32:a=Jt;break;case 268435456:a=I;break;default:a=Jt}return o=d_.bind(null,e),a=ie(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function d_(e,i){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var o=Ae;return o=$t(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Zg(e,o,i),h_(e,de()),e.callbackNode!=null&&e.callbackNode===a?d_.bind(null,e):null)}function p_(e,i){if(tc())return null;Zg(e,i,!0)}function Nx(){kx(function(){(Pe&6)!==0?ie(pe,Lx):f_()})}function Xf(){return xr===0&&(xr=k()),xr}function m_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function g_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Ox(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var d=m_((u[Tn]||null).action),E=o.submitter;E&&(i=(i=E[Tn]||null)?m_(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var R=new _l("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(xr!==0){var B=E?g_(u,E):new FormData(u);uf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=E?g_(u,E):new FormData(u),uf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Wf=0;Wf<Cu.length;Wf++){var Yf=Cu[Wf],Px=Yf.toLowerCase(),Ix=Yf[0].toUpperCase()+Yf.slice(1);gi(Px,"on"+Ix)}gi(Zp,"onAnimationEnd"),gi(Kp,"onAnimationIteration"),gi(Qp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi($S,"onTransitionRun"),gi(tx,"onTransitionStart"),gi(ex,"onTransitionCancel"),gi(Jp,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function __(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var E=o.length-1;0<=E;E--){var R=o[E],B=R.instance,tt=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=tt;try{d(u)}catch(ft){kl(ft)}u.currentTarget=null,d=B}else for(E=0;E<o.length;E++){if(R=o[E],B=R.instance,tt=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=tt;try{d(u)}catch(ft){kl(ft)}u.currentTarget=null,d=B}}}}function Me(e,i){var a=i[nr];a===void 0&&(a=i[nr]=new Set);var o=e+"__bubble";a.has(o)||(v_(i,e,2,!1),a.add(o))}function qf(e,i,a){var o=0;i&&(o|=4),v_(a,e,o,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[ic]){e[ic]=!0,fl.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||qf(a,!1,e),qf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,qf("selectionchange",!1,i))}}function v_(e,i,a,o){switch(V_(i)){case 2:var u=uy;break;case 8:u=fy;break;default:u=lh}a=u.bind(null,i,a,e),u=void 0,!mu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function Zf(e,i,a,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u)break;if(E===4)for(E=o.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;R!==null;){if(E=Gi(R),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){o=d=E;continue t}R=R.parentNode}}o=o.return}bp(function(){var tt=d,ft=du(a),vt=[];t:{var nt=$p.get(e);if(nt!==void 0){var at=_l,se=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":at=US;break;case"focusin":se="focus",at=Su;break;case"focusout":se="blur",at=Su;break;case"beforeblur":case"afterblur":at=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=SS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=OS;break;case Zp:case Kp:case Qp:at=MS;break;case Jp:at=IS;break;case"scroll":case"scrollend":at=_S;break;case"wheel":at=BS;break;case"copy":case"cut":case"paste":at=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Dp;break;case"toggle":case"beforetoggle":at=HS}var ne=(i&4)!==0,He=!ne&&(e==="scroll"||e==="scrollend"),Y=ne?nt!==null?nt+"Capture":null:nt;ne=[];for(var V=tt,J;V!==null;){var gt=V;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||Y===null||(gt=js(V,Y),gt!=null&&ne.push(Uo(V,gt,J))),He)break;V=V.return}0<ne.length&&(nt=new at(nt,se,null,a,ft),vt.push({event:nt,listeners:ne}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&a!==hu&&(se=a.relatedTarget||a.fromElement)&&(Gi(se)||se[Hn]))break t;if((at||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(se=a.relatedTarget||a.toElement,at=tt,se=se?Gi(se):null,se!==null&&(He=c(se),ne=se.tag,se!==He||ne!==5&&ne!==27&&ne!==6)&&(se=null)):(at=null,se=tt),at!==se)){if(ne=Cp,gt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Dp,gt="onPointerLeave",Y="onPointerEnter",V="pointer"),He=at==null?nt:ar(at),J=se==null?nt:ar(se),nt=new ne(gt,V+"leave",at,a,ft),nt.target=He,nt.relatedTarget=J,gt=null,Gi(ft)===tt&&(ne=new ne(Y,V+"enter",se,a,ft),ne.target=J,ne.relatedTarget=He,gt=ne),He=gt,at&&se)e:{for(ne=at,Y=se,V=0,J=ne;J;J=hs(J))V++;for(J=0,gt=Y;gt;gt=hs(gt))J++;for(;0<V-J;)ne=hs(ne),V--;for(;0<J-V;)Y=hs(Y),J--;for(;V--;){if(ne===Y||Y!==null&&ne===Y.alternate)break e;ne=hs(ne),Y=hs(Y)}ne=null}else ne=null;at!==null&&S_(vt,nt,at,ne,!1),se!==null&&He!==null&&S_(vt,He,se,ne,!0)}}t:{if(nt=tt?ar(tt):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Yt=Bp;else if(Ip(nt))if(Fp)Yt=KS;else{Yt=jS;var xe=qS}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&fu(tt.elementType)&&(Yt=Bp):Yt=ZS;if(Yt&&(Yt=Yt(e,tt))){zp(vt,Yt,a,ft);break t}xe&&xe(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Dn(nt,"number",nt.value)}switch(xe=tt?ar(tt):window,e){case"focusin":(Ip(xe)||xe.contentEditable==="true")&&(Vr=xe,bu=tt,no=null);break;case"focusout":no=bu=Vr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,qp(vt,a,ft);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":qp(vt,a,ft)}var Kt;if(yu)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else Gr?Op(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Up&&a.locale!=="ko"&&(Gr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Gr&&(Kt=Ap()):(Ma=ft,gu="value"in Ma?Ma.value:Ma.textContent,Gr=!0)),xe=ac(tt,ae),0<xe.length&&(ae=new wp(ae,e,null,a,ft),vt.push({event:ae,listeners:xe}),Kt?ae.data=Kt:(Kt=Pp(a),Kt!==null&&(ae.data=Kt)))),(Kt=VS?kS(e,a):XS(e,a))&&(ae=ac(tt,"onBeforeInput"),0<ae.length&&(xe=new wp("onBeforeInput","beforeinput",null,a,ft),vt.push({event:xe,listeners:ae}),xe.data=Kt)),Ox(vt,e,tt,a,ft)}__(vt,i)})}function Uo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ac(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=js(e,a),u!=null&&o.unshift(Uo(e,u,d)),u=js(e,i),u!=null&&o.push(Uo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,i,a,o,u){for(var d=i._reactName,E=[];a!==null&&a!==o;){var R=a,B=R.alternate,tt=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||tt===null||(B=tt,u?(tt=js(a,d),tt!=null&&E.unshift(Uo(a,tt,B))):u||(tt=js(a,d),tt!=null&&E.push(Uo(a,tt,B)))),a=a.return}E.length!==0&&e.push({event:i,listeners:E})}var Bx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function x_(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Fx,"")}function y_(e,i){return i=x_(i),x_(e)===i}function rc(){}function Fe(e,i,a,o,u,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Ci(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Ci(e,""+o);break;case"className":Lt(e,"class",o);break;case"tabIndex":Lt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Lt(e,a,o);break;case"style":Ep(e,o,d);break;case"data":if(i!=="object"){Lt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Fe(e,i,"name",u.name,u,null),Fe(e,i,"formEncType",u.formEncType,u,null),Fe(e,i,"formMethod",u.formMethod,u,null),Fe(e,i,"formTarget",u.formTarget,u,null)):(Fe(e,i,"encType",u.encType,u,null),Fe(e,i,"method",u.method,u,null),Fe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=rc);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mS.get(a)||a,bt(e,a,o))}}function Kf(e,i,a,o,u,d){switch(a){case"style":Ep(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ci(e,o):(typeof o=="number"||typeof o=="bigint")&&Ci(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[Tn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):bt(e,a,o)}}}function Cn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Fe(e,i,d,E,a,null)}}u&&Fe(e,i,"srcSet",a.srcSet,a,null),o&&Fe(e,i,"src",a.src,a,null);return;case"input":Me("invalid",e);var R=d=E=u=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":E=ft;break;case"checked":B=ft;break;case"defaultChecked":tt=ft;break;case"value":d=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,i));break;default:Fe(e,i,o,ft,a,null)}}ke(e,d,R,B,tt,E,u,!1),ze(e);return;case"select":Me("invalid",e),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Fe(e,i,u,R,a,null)}i=d,a=E,e.multiple=!!o,i!=null?fn(e,!!o,i,!1):a!=null&&fn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Fe(e,i,E,R,a,null)}bn(e,o,u,d),ze(e);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,i,B,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)Me(Do[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Fe(e,i,tt,o,a,null)}return;default:if(fu(i)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Kf(e,i,ft,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Fe(e,i,R,o,a,null))}function Hx(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,R=null,B=null,tt=null,ft=null;for(at in a){var vt=a[at];if(a.hasOwnProperty(at)&&vt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":B=vt;default:o.hasOwnProperty(at)||Fe(e,i,at,null,o,vt)}}for(var nt in o){var at=o[nt];if(vt=a[nt],o.hasOwnProperty(nt)&&(at!=null||vt!=null))switch(nt){case"type":d=at;break;case"name":u=at;break;case"checked":tt=at;break;case"defaultChecked":ft=at;break;case"value":E=at;break;case"defaultValue":R=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,i));break;default:at!==vt&&Fe(e,i,nt,at,o,vt)}}Xi(e,E,R,B,tt,ft,d,u);return;case"select":at=E=R=nt=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":at=B;default:o.hasOwnProperty(d)||Fe(e,i,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":nt=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==B&&Fe(e,i,u,d,o,B)}i=R,a=E,o=at,nt!=null?fn(e,!!a,nt,!1):!!o!=!!a&&(i!=null?fn(e,!!a,i,!0):fn(e,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Fe(e,i,R,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":nt=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Fe(e,i,E,u,o,d)}Sn(e,nt,at);return;case"option":for(var se in a)if(nt=a[se],a.hasOwnProperty(se)&&nt!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Fe(e,i,se,null,o,nt)}for(B in o)if(nt=o[B],at=a[B],o.hasOwnProperty(B)&&nt!==at&&(nt!=null||at!=null))switch(B){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Fe(e,i,B,nt,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!o.hasOwnProperty(ne)&&Fe(e,i,ne,null,o,nt);for(tt in o)if(nt=o[tt],at=a[tt],o.hasOwnProperty(tt)&&nt!==at&&(nt!=null||at!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,i));break;default:Fe(e,i,tt,nt,o,at)}return;default:if(fu(i)){for(var He in a)nt=a[He],a.hasOwnProperty(He)&&nt!==void 0&&!o.hasOwnProperty(He)&&Kf(e,i,He,void 0,o,nt);for(ft in o)nt=o[ft],at=a[ft],!o.hasOwnProperty(ft)||nt===at||nt===void 0&&at===void 0||Kf(e,i,ft,nt,o,at);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!o.hasOwnProperty(Y)&&Fe(e,i,Y,null,o,nt);for(vt in o)nt=o[vt],at=a[vt],!o.hasOwnProperty(vt)||nt===at||nt==null&&at==null||Fe(e,i,vt,nt,o,at)}var Qf=null,Jf=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function M_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function $f(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var th=null;function Gx(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var T_=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(e){return b_.resolve(null).then(e).catch(Xx)}:T_;function Xx(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function A_(e,i){var a=i,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=e.ownerDocument;if(a&1&&Lo(E.documentElement),a&2&&Lo(E.body),a&4)for(a=E.head,Lo(a),E=a.firstChild;E;){var R=E.nextSibling,B=E.nodeName;E[va]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(u===0){e.removeChild(d),Ho(i);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Ho(i)}function eh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),Sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wx(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[va])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function Yx(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qx(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ih=null;function R_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function C_(e,i,a){switch(i=sc(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Lo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Sa(e)}var hi=new Map,w_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=Q.d;Q.d={f:jx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:ey,S:ty,M:ny};function jx(){var e=ra.f(),i=Jl();return e||i}function Zx(e){var i=Vi(e);i!==null&&i.tag===5&&i.type==="form"?Zm(i):ra.r(e)}var ds=typeof document>"u"?null:document;function D_(e,i,a){var o=ds;if(o&&typeof i=="string"&&i){var u=We(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),w_.has(u)||(w_.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Cn(i,"link",e),sn(i),o.head.appendChild(i)))}}function Kx(e){ra.D(e),D_("dns-prefetch",e,null)}function Qx(e,i){ra.C(e,i),D_("preconnect",e,i)}function Jx(e,i,a){ra.L(e,i,a);var o=ds;if(o&&e&&i){var u='link[rel="preload"][as="'+We(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+We(a.imageSizes)+'"]')):u+='[href="'+We(e)+'"]';var d=u;switch(i){case"style":d=ps(e);break;case"script":d=ms(e)}hi.has(d)||(e=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),hi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(No(d))||i==="script"&&o.querySelector(Oo(d))||(i=o.createElement("link"),Cn(i,"link",e),sn(i),o.head.appendChild(i)))}}function $x(e,i){ra.m(e,i);var a=ds;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+We(o)+'"][href="'+We(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ms(e)}if(!hi.has(d)&&(e=v({rel:"modulepreload",href:e},i),hi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(d)))return}o=a.createElement("link"),Cn(o,"link",e),sn(o),a.head.appendChild(o)}}}function ty(e,i,a){ra.S(e,i,a);var o=ds;if(o&&e){var u=xa(o).hoistableStyles,d=ps(e);i=i||"default";var E=u.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(No(d)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},a),(a=hi.get(d))&&ah(e,a);var B=E=o.createElement("link");sn(B),Cn(B,"link",e),B._p=new Promise(function(tt,ft){B.onload=tt,B.onerror=ft}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(d,E)}}}function ey(e,i){ra.X(e,i);var a=ds;if(a&&e){var o=xa(a).hoistableScripts,u=ms(e),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(e=v({src:e,async:!0},i),(i=hi.get(u))&&rh(e,i),d=a.createElement("script"),sn(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ny(e,i){ra.M(e,i);var a=ds;if(a&&e){var o=xa(a).hoistableScripts,u=ms(e),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(e=v({src:e,async:!0,type:"module"},i),(i=hi.get(u))&&rh(e,i),d=a.createElement("script"),sn(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function U_(e,i,a,o){var u=(u=yt.current)?oc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=ps(a.href),a=xa(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var d=xa(u).hoistableStyles,E=d.get(e);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=u.querySelector(No(e)))&&!d._p&&(E.instance=d,E.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),d||iy(u,e,a,E.state))),i&&o===null)throw Error(r(528,""));return E}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ms(a),a=xa(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+We(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function iy(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",a),sn(i),e.head.appendChild(i))}function ms(e){return'[src="'+We(e)+'"]'}function Oo(e){return"script[async]"+e}function N_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+We(a.href)+'"]');if(o)return i.instance=o,sn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),sn(o),Cn(o,"style",u),lc(o,a.precedence,e),i.instance=o;case"stylesheet":u=ps(a.href);var d=e.querySelector(No(u));if(d)return i.state.loading|=4,i.instance=d,sn(d),d;o=L_(a),(u=hi.get(u))&&ah(o,u),d=(e.ownerDocument||e).createElement("link"),sn(d);var E=d;return E._p=new Promise(function(R,B){E.onload=R,E.onerror=B}),Cn(d,"link",o),i.state.loading|=4,lc(d,a.precedence,e),i.instance=d;case"script":return d=ms(a.src),(u=e.querySelector(Oo(d)))?(i.instance=u,sn(u),u):(o=a,(u=hi.get(d))&&(o=v({},a),rh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),sn(u),Cn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,lc(o,a.precedence,e));return i.instance}function lc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===i)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function rh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var cc=null;function O_(e,i,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[va]||d[un]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=e+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function P_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function ay(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Po=null;function ry(){}function sy(e,i,a){if(Po===null)throw Error(r(475));var o=Po;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ps(a.href),d=e.querySelector(No(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=uc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,sn(d);return}d=e.ownerDocument||e,a=L_(a),(u=hi.get(u))&&ah(a,u),d=d.createElement("link"),sn(d);var E=d;E._p=new Promise(function(R,B){E.onload=R,E.onerror=B}),Cn(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=uc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function oy(){if(Po===null)throw Error(r(475));var e=Po;return e.stylesheets&&e.count===0&&sh(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)sh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function sh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(ly,e),fc=null,uc.call(e))}function ly(e,i){if(!(i.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=i.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Io={$$typeof:b,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function cy(e,i,a,o,u,d,E,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function z_(e,i,a,o,u,d,E,R,B,tt,ft,vt){return e=new cy(e,i,a,E,R,B,tt,vt),i=1,d===!0&&(i|=24),d=Kn(3,null,null,i),e.current=d,d.stateNode=e,i=Hu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Xu(d),e}function B_(e){return e?(e=Yr,e):Yr}function F_(e,i,a,o,u,d){u=B_(u),o.context===null?o.context=u:o.pendingContext=u,o=ba(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Aa(e,o,i),a!==null&&(ei(a,e,i),fo(a,e,i))}function H_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function oh(e,i){H_(e,i),(e=e.alternate)&&H_(e,i)}function G_(e){if(e.tag===13){var i=Wr(e,67108864);i!==null&&ei(i,e,67108864),oh(e,67108864)}}var hc=!0;function uy(e,i,a,o){var u=z.T;z.T=null;var d=Q.p;try{Q.p=2,lh(e,i,a,o)}finally{Q.p=d,z.T=u}}function fy(e,i,a,o){var u=z.T;z.T=null;var d=Q.p;try{Q.p=8,lh(e,i,a,o)}finally{Q.p=d,z.T=u}}function lh(e,i,a,o){if(hc){var u=ch(o);if(u===null)Zf(e,i,o,dc,a),k_(e,o);else if(dy(u,e,i,a,o))o.stopPropagation();else if(k_(e,o),i&4&&-1<hy.indexOf(e)){for(;u!==null;){var d=Vi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Qt(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var B=1<<31-Nt(E);R.entanglements[1]|=B,E&=~B}Ni(d),(Pe&6)===0&&(Kl=de()+500,wo(0))}}break;case 13:R=Wr(d,2),R!==null&&ei(R,d,2),Jl(),oh(d,2)}if(d=ch(o),d===null&&Zf(e,i,o,dc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Zf(e,i,o,null,a)}}function ch(e){return e=du(e),uh(e)}var dc=null;function uh(e){if(dc=null,e=Gi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case pe:return 2;case Xt:return 8;case Jt:case Qe:return 32;case I:return 268435456;default:return 32}default:return 32}}var fh=!1,Fa=null,Ha=null,Ga=null,zo=new Map,Bo=new Map,Va=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,i){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(i.pointerId)}}function Fo(e,i,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Vi(i),i!==null&&G_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function dy(e,i,a,o,u){switch(i){case"focusin":return Fa=Fo(Fa,e,i,a,o,u),!0;case"dragenter":return Ha=Fo(Ha,e,i,a,o,u),!0;case"mouseover":return Ga=Fo(Ga,e,i,a,o,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Fo(zo.get(d)||null,e,i,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Bo.set(d,Fo(Bo.get(d)||null,e,i,a,o,u)),!0}return!1}function X_(e){var i=Gi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,jn(e.priority,function(){if(a.tag===13){var o=ti();o=oe(o);var u=Wr(a,o);u!==null&&ei(u,a,o),oh(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=ch(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return i=Vi(a),i!==null&&G_(i),e.blockedOn=a,!1;i.shift()}return!0}function W_(e,i,a){pc(e)&&a.delete(i)}function py(){fh=!1,Fa!==null&&pc(Fa)&&(Fa=null),Ha!==null&&pc(Ha)&&(Ha=null),Ga!==null&&pc(Ga)&&(Ga=null),zo.forEach(W_),Bo.forEach(W_)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,fh||(fh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,py)))}var gc=null;function Y_(e){gc!==e&&(gc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(uh(o||a)===null)continue;break}var d=Vi(a);d!==null&&(e.splice(i,3),i-=3,uf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ho(e){function i(B){return mc(B,e)}Fa!==null&&mc(Fa,e),Ha!==null&&mc(Ha,e),Ga!==null&&mc(Ga,e),zo.forEach(i),Bo.forEach(i);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[Tn]||null;if(typeof d=="function")E||Y_(a);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[Tn]||null)R=E.formAction;else if(uh(u)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Y_(a)}}}function hh(e){this._internalRoot=e}_c.prototype.render=hh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,o=ti();F_(a,o,e,i,null,null)},_c.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;F_(e.current,2,null,e,null,null),Jl(),i[Hn]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ce();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Va.length&&i!==0&&i<Va[a].priority;a++);Va.splice(a,0,e),a===0&&X_(e)}};var q_=t.version;if(q_!=="19.1.0")throw Error(r(527,q_,"19.1.0"));Q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var my={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ht=vc.inject(my),mt=vc}catch{}}return Vo.createRoot=function(e,i){if(!l(e))throw Error(r(299));var a=!1,o="",u=cg,d=ug,E=fg,R=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=z_(e,1,!1,null,null,a,o,u,d,E,R,null),e[Hn]=i.current,jf(e),new hh(i)},Vo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=cg,E=ug,R=fg,B=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),i=z_(e,1,!0,i,a??null,o,u,d,E,R,B,tt),i.context=B_(null),a=i.current,o=ti(),o=oe(o),u=ba(o),u.callback=null,Aa(a,u,o),a=o,i.current.lanes=a,Bt(i,a),Ni(i),e[Hn]=i.current,jf(e),new _c(i)},Vo.version="19.1.0",Vo}var iv;function by(){if(iv)return mh.exports;iv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),mh.exports=Ty(),mh.exports}var Ay=by();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var av="popstate";function Ry(s={}){function t(l,c){let{pathname:f="/",search:h="",hash:m=""}=zr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),nd("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:Qo(c))}function r(l,c){ri(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return wy(t,n,r,s)}function Ze(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function ri(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cy(){return Math.random().toString(36).substring(2,10)}function rv(s,t){return{usr:s.state,key:s.key,idx:t}}function nd(s,t,n=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?zr(t):t,state:n,key:t&&t.key||r||Cy()}}function Qo({pathname:s="/",search:t="",hash:n=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function zr(s){let t={};if(s){let n=s.indexOf("#");n>=0&&(t.hash=s.substring(n),s=s.substring(0,n));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function wy(s,t,n,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function _(){h="POP";let S=v(),g=S==null?null:S-p;p=S,m&&m({action:h,location:M.location,delta:g})}function x(S,g){h="PUSH";let U=nd(M.location,S,g);n&&n(U,S),p=v()+1;let b=rv(U,p),D=M.createHref(U);try{f.pushState(b,"",D)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(D)}c&&m&&m({action:h,location:M.location,delta:1})}function y(S,g){h="REPLACE";let U=nd(M.location,S,g);n&&n(U,S),p=v();let b=rv(U,p),D=M.createHref(U);f.replaceState(b,"",D),c&&m&&m({action:h,location:M.location,delta:0})}function T(S){return Dy(S)}let M={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(av,_),m=S,()=>{l.removeEventListener(av,_),m=null}},createHref(S){return t(l,S)},createURL:T,encodeLocation(S){let g=T(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:y,go(S){return f.go(S)}};return M}function Dy(s,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(n,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Qo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function E0(s,t,n="/"){return Uy(s,t,n,!1)}function Uy(s,t,n,r){let l=typeof t=="string"?zr(t):t,c=_a(l.pathname||"/",n);if(c==null)return null;let f=T0(s);Ly(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=ky(c);h=Gy(f[m],p,r)}return h}function T0(s,t=[],n=[],r=""){let l=(c,f,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Ze(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ma([r,m.relativePath]),v=n.concat(m);c.children&&c.children.length>0&&(Ze(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),T0(c.children,t,v,p)),!(c.path==null&&!c.index)&&t.push({path:p,score:Fy(p,c.index),routesMeta:v})};return s.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let h of b0(c.path))l(c,f,h)}),t}function b0(s){let t=s.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=b0(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ly(s){s.sort((t,n)=>t.score!==n.score?n.score-t.score:Hy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Ny=/^:[\w-]+$/,Oy=3,Py=2,Iy=1,zy=10,By=-2,sv=s=>s==="*";function Fy(s,t){let n=s.split("/"),r=n.length;return n.some(sv)&&(r+=By),t&&(r+=Py),n.filter(l=>!sv(l)).reduce((l,c)=>l+(Ny.test(c)?Oy:c===""?Iy:zy),r)}function Hy(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function Gy(s,t,n=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?t:t.slice(c.length)||"/",_=eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!_&&p&&n&&!r[r.length-1].route.index&&(_=eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:ma([c,_.pathname]),pathnameBase:qy(ma([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=ma([c,_.pathnameBase]))}return f}function eu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,r]=Vy(s.path,s.caseSensitive,s.end),l=t.match(n);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:_},x)=>{if(v==="*"){let T=h[x]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const y=h[x];return _&&!y?p[v]=void 0:p[v]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function Vy(s,t=!1,n=!0){ri(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ky(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function _a(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=s.charAt(n);return r&&r!=="/"?null:s.slice(n)||"/"}function Xy(s,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof s=="string"?zr(s):s;return{pathname:n?n.startsWith("/")?n:Wy(n,t):t,search:jy(r),hash:Zy(l)}}function Wy(s,t){let n=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Sh(s,t,n,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Yy(s){return s.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qd(s){let t=Yy(s);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Jd(s,t,n,r=!1){let l;typeof s=="string"?l=zr(s):(l={...s},Ze(!l.pathname||!l.pathname.includes("?"),Sh("?","pathname","search",l)),Ze(!l.pathname||!l.pathname.includes("#"),Sh("#","pathname","hash",l)),Ze(!l.search||!l.search.includes("#"),Sh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=n;else{let _=t.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}h=_>=0?t[_]:"/"}let m=Xy(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ma=s=>s.join("/").replace(/\/\/+/g,"/"),qy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Zy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ky(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var A0=["POST","PUT","PATCH","DELETE"];new Set(A0);var Qy=["GET",...A0];new Set(Qy);var Xs=rt.createContext(null);Xs.displayName="DataRouter";var au=rt.createContext(null);au.displayName="DataRouterState";rt.createContext(!1);var R0=rt.createContext({isTransitioning:!1});R0.displayName="ViewTransition";var Jy=rt.createContext(new Map);Jy.displayName="Fetchers";var $y=rt.createContext(null);$y.displayName="Await";var Ai=rt.createContext(null);Ai.displayName="Navigation";var il=rt.createContext(null);il.displayName="Location";var Fi=rt.createContext({outlet:null,matches:[],isDataRoute:!1});Fi.displayName="Route";var $d=rt.createContext(null);$d.displayName="RouteError";function tM(s,{relative:t}={}){Ze(Ws(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=rt.useContext(Ai),{hash:l,pathname:c,search:f}=al(s,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:ma([n,c])),r.createHref({pathname:h,search:f,hash:l})}function Ws(){return rt.useContext(il)!=null}function Hi(){return Ze(Ws(),"useLocation() may be used only in the context of a <Router> component."),rt.useContext(il).location}var C0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function w0(s){rt.useContext(Ai).static||rt.useLayoutEffect(s)}function tp(){let{isDataRoute:s}=rt.useContext(Fi);return s?dM():eM()}function eM(){Ze(Ws(),"useNavigate() may be used only in the context of a <Router> component.");let s=rt.useContext(Xs),{basename:t,navigator:n}=rt.useContext(Ai),{matches:r}=rt.useContext(Fi),{pathname:l}=Hi(),c=JSON.stringify(Qd(r)),f=rt.useRef(!1);return w0(()=>{f.current=!0}),rt.useCallback((m,p={})=>{if(ri(f.current,C0),!f.current)return;if(typeof m=="number"){n.go(m);return}let v=Jd(m,JSON.parse(c),l,p.relative==="path");s==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:ma([t,v.pathname])),(p.replace?n.replace:n.push)(v,p.state,p)},[t,n,c,l,s])}rt.createContext(null);function al(s,{relative:t}={}){let{matches:n}=rt.useContext(Fi),{pathname:r}=Hi(),l=JSON.stringify(Qd(n));return rt.useMemo(()=>Jd(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function nM(s,t){return D0(s,t)}function D0(s,t,n,r){Ze(Ws(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=rt.useContext(Ai),{matches:c}=rt.useContext(Fi),f=c[c.length-1],h=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",v=f&&f.route;{let g=v&&v.path||"";U0(m,!v||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let _=Hi(),x;if(t){let g=typeof t=="string"?zr(t):t;Ze(p==="/"||g.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${g.pathname}" was given in the \`location\` prop.`),x=g}else x=_;let y=x.pathname||"/",T=y;if(p!=="/"){let g=p.replace(/^\//,"").split("/");T="/"+y.replace(/^\//,"").split("/").slice(g.length).join("/")}let M=E0(s,{pathname:T});ri(v||M!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ri(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=oM(M&&M.map(g=>Object.assign({},g,{params:Object.assign({},h,g.params),pathname:ma([p,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?p:ma([p,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),c,n,r);return t&&S?rt.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},S):S}function iM(){let s=hM(),t=Ky(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=rt.createElement(rt.Fragment,null,rt.createElement("p",null,"💿 Hey developer 👋"),rt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",rt.createElement("code",{style:c},"ErrorBoundary")," or"," ",rt.createElement("code",{style:c},"errorElement")," prop on your route.")),rt.createElement(rt.Fragment,null,rt.createElement("h2",null,"Unexpected Application Error!"),rt.createElement("h3",{style:{fontStyle:"italic"}},t),n?rt.createElement("pre",{style:l},n):null,f)}var aM=rt.createElement(iM,null),rM=class extends rt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?rt.createElement(Fi.Provider,{value:this.props.routeContext},rt.createElement($d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sM({routeContext:s,match:t,children:n}){let r=rt.useContext(Xs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),rt.createElement(Fi.Provider,{value:s},n)}function oM(s,t=[],n=null,r=null){if(s==null){if(!n)return null;if(n.errors)s=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let l=s,c=n?.errors;if(c!=null){let m=l.findIndex(p=>p.route.id&&c?.[p.route.id]!==void 0);Ze(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,h=-1;if(n)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:v,errors:_}=n,x=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||x){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((m,p,v)=>{let _,x=!1,y=null,T=null;n&&(_=c&&p.route.id?c[p.route.id]:void 0,y=p.route.errorElement||aM,f&&(h<0&&v===0?(U0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,T=null):h===v&&(x=!0,T=p.route.hydrateFallbackElement||null)));let M=t.concat(l.slice(0,v+1)),S=()=>{let g;return _?g=y:x?g=T:p.route.Component?g=rt.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,rt.createElement(sM,{match:p,routeContext:{outlet:m,matches:M,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?rt.createElement(rM,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:S(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):S()},null)}function ep(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lM(s){let t=rt.useContext(Xs);return Ze(t,ep(s)),t}function cM(s){let t=rt.useContext(au);return Ze(t,ep(s)),t}function uM(s){let t=rt.useContext(Fi);return Ze(t,ep(s)),t}function np(s){let t=uM(s),n=t.matches[t.matches.length-1];return Ze(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function fM(){return np("useRouteId")}function hM(){let s=rt.useContext($d),t=cM("useRouteError"),n=np("useRouteError");return s!==void 0?s:t.errors?.[n]}function dM(){let{router:s}=lM("useNavigate"),t=np("useNavigate"),n=rt.useRef(!1);return w0(()=>{n.current=!0}),rt.useCallback(async(l,c={})=>{ri(n.current,C0),n.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var ov={};function U0(s,t,n){!t&&!ov[s]&&(ov[s]=!0,ri(!1,n))}rt.memo(pM);function pM({routes:s,future:t,state:n}){return D0(s,void 0,n,t)}function mM({to:s,replace:t,state:n,relative:r}){Ze(Ws(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=rt.useContext(Ai);ri(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=rt.useContext(Fi),{pathname:f}=Hi(),h=tp(),m=Jd(s,Qd(c),f,r==="path"),p=JSON.stringify(m);return rt.useEffect(()=>{h(JSON.parse(p),{replace:t,state:n,relative:r})},[h,p,r,t,n]),null}function Wc(s){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gM({basename:s="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:c=!1}){Ze(!Ws(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=rt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof n=="string"&&(n=zr(n));let{pathname:m="/",search:p="",hash:v="",state:_=null,key:x="default"}=n,y=rt.useMemo(()=>{let T=_a(m,f);return T==null?null:{location:{pathname:T,search:p,hash:v,state:_,key:x},navigationType:r}},[f,m,p,v,_,x,r]);return ri(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:rt.createElement(Ai.Provider,{value:h},rt.createElement(il.Provider,{children:t,value:y}))}function _M({children:s,location:t}){return nM(id(s),t)}function id(s,t=[]){let n=[];return rt.Children.forEach(s,(r,l)=>{if(!rt.isValidElement(r))return;let c=[...t,l];if(r.type===rt.Fragment){n.push.apply(n,id(r.props.children,c));return}Ze(r.type===Wc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=id(r.props.children,c)),n.push(f)}),n}var Yc="get",qc="application/x-www-form-urlencoded";function ru(s){return s!=null&&typeof s.tagName=="string"}function vM(s){return ru(s)&&s.tagName.toLowerCase()==="button"}function SM(s){return ru(s)&&s.tagName.toLowerCase()==="form"}function xM(s){return ru(s)&&s.tagName.toLowerCase()==="input"}function yM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function MM(s,t){return s.button===0&&(!t||t==="_self")&&!yM(s)}function ad(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((t,n)=>{let r=s[n];return t.concat(Array.isArray(r)?r.map(l=>[n,l]):[[n,r]])},[]))}function EM(s,t){let n=ad(s);return t&&t.forEach((r,l)=>{n.has(l)||t.getAll(l).forEach(c=>{n.append(l,c)})}),n}var Sc=null;function TM(){if(Sc===null)try{new FormData(document.createElement("form"),0),Sc=!1}catch{Sc=!0}return Sc}var bM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xh(s){return s!=null&&!bM.has(s)?(ri(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):s}function AM(s,t){let n,r,l,c,f;if(SM(s)){let h=s.getAttribute("action");r=h?_a(h,t):null,n=s.getAttribute("method")||Yc,l=xh(s.getAttribute("enctype"))||qc,c=new FormData(s)}else if(vM(s)||xM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?_a(m,t):null,n=s.getAttribute("formmethod")||h.getAttribute("method")||Yc,l=xh(s.getAttribute("formenctype"))||xh(h.getAttribute("enctype"))||qc,c=new FormData(h,s),!TM()){let{name:p,type:v,value:_}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,_)}}else{if(ru(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Yc,r=null,l=qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ip(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function RM(s,t,n){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&_a(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function CM(s,t){if(s.id in t)return t[s.id];try{let n=await import(s.module);return t[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function DM(s,t,n){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await CM(c,n);return f.links?f.links():[]}return[]}));return OM(r.flat(1).filter(wM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function lv(s,t,n,r,l,c){let f=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>n[p].pathname!==m.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function UM(s,t,{includeHydrateFallback:n}={}){return LM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function LM(s){return[...new Set(s)]}function NM(s){let t={},n=Object.keys(s).sort();for(let r of n)t[r]=s[r];return t}function OM(s,t){let n=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(NM(l));return n.has(c)||(n.add(c),r.push({key:c,link:l})),r},[])}function L0(){let s=rt.useContext(Xs);return ip(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function PM(){let s=rt.useContext(au);return ip(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ap=rt.createContext(void 0);ap.displayName="FrameworkContext";function N0(){let s=rt.useContext(ap);return ip(s,"You must render this element inside a <HydratedRouter> element"),s}function IM(s,t){let n=rt.useContext(ap),[r,l]=rt.useState(!1),[c,f]=rt.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:_}=t,x=rt.useRef(null);rt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let M=g=>{g.forEach(U=>{f(U.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),rt.useEffect(()=>{if(r){let M=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(M)}}},[r]);let y=()=>{l(!0)},T=()=>{l(!1),f(!1)};return n?s!=="intent"?[c,x,{}]:[c,x,{onFocus:ko(h,y),onBlur:ko(m,T),onMouseEnter:ko(p,y),onMouseLeave:ko(v,T),onTouchStart:ko(_,y)}]:[!1,x,{}]}function ko(s,t){return n=>{s&&s(n),n.defaultPrevented||t(n)}}function zM({page:s,...t}){let{router:n}=L0(),r=rt.useMemo(()=>E0(n.routes,s,n.basename),[n.routes,s,n.basename]);return r?rt.createElement(FM,{page:s,matches:r,...t}):null}function BM(s){let{manifest:t,routeModules:n}=N0(),[r,l]=rt.useState([]);return rt.useEffect(()=>{let c=!1;return DM(s,t,n).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,n]),r}function FM({page:s,matches:t,...n}){let r=Hi(),{manifest:l,routeModules:c}=N0(),{basename:f}=L0(),{loaderData:h,matches:m}=PM(),p=rt.useMemo(()=>lv(s,t,m,l,r,"data"),[s,t,m,l,r]),v=rt.useMemo(()=>lv(s,t,m,l,r,"assets"),[s,t,m,l,r]),_=rt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,M=!1;if(t.forEach(g=>{let U=l.routes[g.route.id];!U||!U.hasLoader||(!p.some(b=>b.route.id===g.route.id)&&g.route.id in h&&c[g.route.id]?.shouldRevalidate||U.hasClientLoader?M=!0:T.add(g.route.id))}),T.size===0)return[];let S=RM(s,f,"data");return M&&T.size>0&&S.searchParams.set("_routes",t.filter(g=>T.has(g.route.id)).map(g=>g.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,t,s,c]),x=rt.useMemo(()=>UM(v,l),[v,l]),y=BM(v);return rt.createElement(rt.Fragment,null,_.map(T=>rt.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),x.map(T=>rt.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),y.map(({key:T,link:M})=>rt.createElement("link",{key:T,...M})))}function HM(...s){return t=>{s.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var O0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{O0&&(window.__reactRouterVersion="7.7.0")}catch{}function GM({basename:s,children:t,window:n}){let r=rt.useRef();r.current==null&&(r.current=Ry({window:n,v5Compat:!0}));let l=r.current,[c,f]=rt.useState({action:l.action,location:l.location}),h=rt.useCallback(m=>{rt.startTransition(()=>f(m))},[f]);return rt.useLayoutEffect(()=>l.listen(h),[l,h]),rt.createElement(gM,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cr=rt.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:_,...x},y){let{basename:T}=rt.useContext(Ai),M=typeof p=="string"&&P0.test(p),S,g=!1;if(typeof p=="string"&&M&&(S=p,O0))try{let L=new URL(window.location.href),C=p.startsWith("//")?new URL(L.protocol+p):new URL(p),G=_a(C.pathname,T);C.origin===L.origin&&G!=null?p=G+C.search+C.hash:g=!0}catch{ri(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=tM(p,{relative:l}),[b,D,P]=IM(r,x),O=WM(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:_});function F(L){t&&t(L),L.defaultPrevented||O(L)}let X=rt.createElement("a",{...x,...P,href:S||U,onClick:g||c?t:F,ref:HM(y,D),target:m,"data-discover":!M&&n==="render"?"true":void 0});return b&&!M?rt.createElement(rt.Fragment,null,X,rt.createElement(zM,{page:U})):X});Cr.displayName="Link";var VM=rt.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let _=al(f,{relative:p.relative}),x=Hi(),y=rt.useContext(au),{navigator:T,basename:M}=rt.useContext(Ai),S=y!=null&&QM(_)&&h===!0,g=T.encodeLocation?T.encodeLocation(_).pathname:_.pathname,U=x.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(U=U.toLowerCase(),b=b?b.toLowerCase():null,g=g.toLowerCase()),b&&M&&(b=_a(b,M)||b);const D=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let P=U===g||!l&&U.startsWith(g)&&U.charAt(D)==="/",O=b!=null&&(b===g||!l&&b.startsWith(g)&&b.charAt(g.length)==="/"),F={isActive:P,isPending:O,isTransitioning:S},X=P?t:void 0,L;typeof r=="function"?L=r(F):L=[r,P?"active":null,O?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(F):c;return rt.createElement(Cr,{...p,"aria-current":X,className:L,ref:v,style:C,to:f,viewTransition:h},typeof m=="function"?m(F):m)});VM.displayName="NavLink";var kM=rt.forwardRef(({discover:s="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:c,method:f=Yc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:_,...x},y)=>{let T=ZM(),M=KM(h,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",g=typeof h=="string"&&P0.test(h),U=b=>{if(m&&m(b),b.defaultPrevented)return;b.preventDefault();let D=b.nativeEvent.submitter,P=D?.getAttribute("formmethod")||f;T(D||b.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:_})};return rt.createElement("form",{ref:y,method:S,action:M,onSubmit:r?m:U,...x,"data-discover":!g&&s==="render"?"true":void 0})});kM.displayName="Form";function XM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I0(s){let t=rt.useContext(Xs);return Ze(t,XM(s)),t}function WM(s,{target:t,replace:n,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=tp(),m=Hi(),p=al(s,{relative:c});return rt.useCallback(v=>{if(MM(v,t)){v.preventDefault();let _=n!==void 0?n:Qo(m)===Qo(p);h(s,{replace:_,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,n,r,t,s,l,c,f])}function YM(s){ri(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=rt.useRef(ad(s)),n=rt.useRef(!1),r=Hi(),l=rt.useMemo(()=>EM(r.search,n.current?null:t.current),[r.search]),c=tp(),f=rt.useCallback((h,m)=>{const p=ad(typeof h=="function"?h(new URLSearchParams(l)):h);n.current=!0,c("?"+p,m)},[c,l]);return[l,f]}var qM=0,jM=()=>`__${String(++qM)}__`;function ZM(){let{router:s}=I0("useSubmit"),{basename:t}=rt.useContext(Ai),n=fM();return rt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=AM(r,t);if(l.navigate===!1){let v=l.fetcherKey||jM();await s.fetch(v,n,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,n])}function KM(s,{relative:t}={}){let{basename:n}=rt.useContext(Ai),r=rt.useContext(Fi);Ze(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...al(s||".",{relative:t})},f=Hi();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:ma([n,c.pathname])),Qo(c)}function QM(s,t={}){let n=rt.useContext(R0);Ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=I0("useViewTransitionState"),l=al(s,{relative:t.relative});if(!n.isTransitioning)return!1;let c=_a(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=_a(n.nextLocation.pathname,r)||n.nextLocation.pathname;return eu(l.pathname,f)!=null||eu(l.pathname,c)!=null}const JM="_toolbar_1xgn6_1",$M="_topBar_1xgn6_8",tE="_viewTabs_1xgn6_15",eE="_viewTab_1xgn6_15",nE="_viewTabActive_1xgn6_34",iE="_logo_1xgn6_39",aE="_nav_1xgn6_47",rE="_navLink_1xgn6_53",sE="_navLinkActive_1xgn6_69",oE="_layout_1xgn6_74",lE="_main_1xgn6_81",zn={toolbar:JM,topBar:$M,viewTabs:tE,viewTab:eE,viewTabActive:nE,logo:iE,nav:aE,navLink:rE,navLinkActive:sE,layout:oE,main:lE};function cE(){const s=Hi();return Rt.jsxs("header",{className:zn.toolbar,children:[Rt.jsxs("div",{className:zn.topBar,children:[Rt.jsx(Cr,{to:"/",className:zn.logo,children:"HCWARD"}),Rt.jsxs("nav",{className:zn.nav,children:[Rt.jsx(Cr,{to:"/general-perturbation",className:`${zn.navLink} ${s.pathname==="/general-perturbation"?zn.navLinkActive:""}`,children:"Satellite"}),Rt.jsx(Cr,{to:"/about",className:`${zn.navLink} ${s.pathname==="/about"?zn.navLinkActive:""}`,children:"About"})]})]}),s.pathname==="/general-perturbation"&&Rt.jsxs("div",{className:zn.viewTabs,children:[Rt.jsx(Cr,{to:"/general-perturbation?view=3d",className:`${zn.viewTab} ${s.search.includes("table")?"":zn.viewTabActive}`,children:"3D View"}),Rt.jsx(Cr,{to:"/general-perturbation?view=table",className:`${zn.viewTab} ${s.search.includes("table")?zn.viewTabActive:""}`,children:"Table View"})]})]})}function uE({children:s}){return Rt.jsxs("div",{className:zn.layout,children:[Rt.jsx(cE,{}),Rt.jsx("main",{className:zn.main,children:s})]})}function fE(){const[s,t]=rt.useState([]),[n,r]=rt.useState(!0),[l,c]=rt.useState(null);return rt.useEffect(()=>{r(!0),c(null),fetch("https://hcward-dashboard-cwdxfvdwe2e2b7ar.uksouth-01.azurewebsites.net/space-monitor/gp").then(h=>{if(!h.ok)throw new Error("Failed to fetch");return h.json()}).then(h=>{Array.isArray(h)?t(h):h&&Array.isArray(h.content)?t(h.content):t([])}).catch(h=>c(h.message)).finally(()=>r(!1))},[]),{data:s,loading:n,error:l}}function rd(){return rd=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},rd.apply(null,arguments)}function cv(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sd(s,t){return sd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},sd(s,t)}function hE(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,sd(s,t)}var uv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function dE(s,t){return!!(s===t||uv(s)&&uv(t))}function pE(s,t){if(s.length!==t.length)return!1;for(var n=0;n<s.length;n++)if(!dE(s[n],t[n]))return!1;return!0}function yh(s,t){t===void 0&&(t=pE);var n,r=[],l,c=!1;function f(){for(var h=[],m=0;m<arguments.length;m++)h[m]=arguments[m];return c&&n===this&&t(h,r)||(l=s.apply(this,h),c=!0,n=this,r=h),l}return f}var mE=typeof performance=="object"&&typeof performance.now=="function",fv=mE?function(){return performance.now()}:function(){return Date.now()};function hv(s){cancelAnimationFrame(s.id)}function gE(s,t){var n=fv();function r(){fv()-n>=t?s.call(null):l.id=requestAnimationFrame(r)}var l={id:requestAnimationFrame(r)};return l}var Mh=-1;function dv(s){if(s===void 0&&(s=!1),Mh===-1||s){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),Mh=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Mh}var gs=null;function pv(s){if(s===void 0&&(s=!1),gs===null||s){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),l=r.style;return l.width="100px",l.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?gs="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?gs="negative":gs="positive-ascending"),document.body.removeChild(t),gs}return gs}var _E=150,vE=function(t,n){return t};function SE(s){var t,n=s.getItemOffset,r=s.getEstimatedTotalSize,l=s.getItemSize,c=s.getOffsetForIndexAndAlignment,f=s.getStartIndexForOffset,h=s.getStopIndexForStartIndex,m=s.initInstanceProps,p=s.shouldResetStyleCacheOnItemSizeChange,v=s.validateProps;return t=function(_){hE(x,_);function x(T){var M;return M=_.call(this,T)||this,M._instanceProps=m(M.props,cv(M)),M._outerRef=void 0,M._resetIsScrollingTimeoutId=null,M.state={instance:cv(M),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof M.props.initialScrollOffset=="number"?M.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},M._callOnItemsRendered=void 0,M._callOnItemsRendered=yh(function(S,g,U,b){return M.props.onItemsRendered({overscanStartIndex:S,overscanStopIndex:g,visibleStartIndex:U,visibleStopIndex:b})}),M._callOnScroll=void 0,M._callOnScroll=yh(function(S,g,U){return M.props.onScroll({scrollDirection:S,scrollOffset:g,scrollUpdateWasRequested:U})}),M._getItemStyle=void 0,M._getItemStyle=function(S){var g=M.props,U=g.direction,b=g.itemSize,D=g.layout,P=M._getItemStyleCache(p&&b,p&&D,p&&U),O;if(P.hasOwnProperty(S))O=P[S];else{var F=n(M.props,S,M._instanceProps),X=l(M.props,S,M._instanceProps),L=U==="horizontal"||D==="horizontal",C=U==="rtl",G=L?F:0;P[S]=O={position:"absolute",left:C?void 0:G,right:C?G:void 0,top:L?0:F,height:L?"100%":X,width:L?X:"100%"}}return O},M._getItemStyleCache=void 0,M._getItemStyleCache=yh(function(S,g,U){return{}}),M._onScrollHorizontal=function(S){var g=S.currentTarget,U=g.clientWidth,b=g.scrollLeft,D=g.scrollWidth;M.setState(function(P){if(P.scrollOffset===b)return null;var O=M.props.direction,F=b;if(O==="rtl")switch(pv()){case"negative":F=-b;break;case"positive-descending":F=D-U-b;break}return F=Math.max(0,Math.min(F,D-U)),{isScrolling:!0,scrollDirection:P.scrollOffset<F?"forward":"backward",scrollOffset:F,scrollUpdateWasRequested:!1}},M._resetIsScrollingDebounced)},M._onScrollVertical=function(S){var g=S.currentTarget,U=g.clientHeight,b=g.scrollHeight,D=g.scrollTop;M.setState(function(P){if(P.scrollOffset===D)return null;var O=Math.max(0,Math.min(D,b-U));return{isScrolling:!0,scrollDirection:P.scrollOffset<O?"forward":"backward",scrollOffset:O,scrollUpdateWasRequested:!1}},M._resetIsScrollingDebounced)},M._outerRefSetter=function(S){var g=M.props.outerRef;M._outerRef=S,typeof g=="function"?g(S):g!=null&&typeof g=="object"&&g.hasOwnProperty("current")&&(g.current=S)},M._resetIsScrollingDebounced=function(){M._resetIsScrollingTimeoutId!==null&&hv(M._resetIsScrollingTimeoutId),M._resetIsScrollingTimeoutId=gE(M._resetIsScrolling,_E)},M._resetIsScrolling=function(){M._resetIsScrollingTimeoutId=null,M.setState({isScrolling:!1},function(){M._getItemStyleCache(-1,null)})},M}x.getDerivedStateFromProps=function(M,S){return xE(M,S),v(M),null};var y=x.prototype;return y.scrollTo=function(M){M=Math.max(0,M),this.setState(function(S){return S.scrollOffset===M?null:{scrollDirection:S.scrollOffset<M?"forward":"backward",scrollOffset:M,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},y.scrollToItem=function(M,S){S===void 0&&(S="auto");var g=this.props,U=g.itemCount,b=g.layout,D=this.state.scrollOffset;M=Math.max(0,Math.min(M,U-1));var P=0;if(this._outerRef){var O=this._outerRef;b==="vertical"?P=O.scrollWidth>O.clientWidth?dv():0:P=O.scrollHeight>O.clientHeight?dv():0}this.scrollTo(c(this.props,M,S,D,this._instanceProps,P))},y.componentDidMount=function(){var M=this.props,S=M.direction,g=M.initialScrollOffset,U=M.layout;if(typeof g=="number"&&this._outerRef!=null){var b=this._outerRef;S==="horizontal"||U==="horizontal"?b.scrollLeft=g:b.scrollTop=g}this._callPropsCallbacks()},y.componentDidUpdate=function(){var M=this.props,S=M.direction,g=M.layout,U=this.state,b=U.scrollOffset,D=U.scrollUpdateWasRequested;if(D&&this._outerRef!=null){var P=this._outerRef;if(S==="horizontal"||g==="horizontal")if(S==="rtl")switch(pv()){case"negative":P.scrollLeft=-b;break;case"positive-ascending":P.scrollLeft=b;break;default:var O=P.clientWidth,F=P.scrollWidth;P.scrollLeft=F-O-b;break}else P.scrollLeft=b;else P.scrollTop=b}this._callPropsCallbacks()},y.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&hv(this._resetIsScrollingTimeoutId)},y.render=function(){var M=this.props,S=M.children,g=M.className,U=M.direction,b=M.height,D=M.innerRef,P=M.innerElementType,O=M.innerTagName,F=M.itemCount,X=M.itemData,L=M.itemKey,C=L===void 0?vE:L,G=M.layout,lt=M.outerElementType,it=M.outerTagName,ct=M.style,pt=M.useIsScrolling,z=M.width,Q=this.state.isScrolling,W=U==="horizontal"||G==="horizontal",xt=W?this._onScrollHorizontal:this._onScrollVertical,N=this._getRangeToRender(),$=N[0],_t=N[1],Mt=[];if(F>0)for(var j=$;j<=_t;j++)Mt.push(rt.createElement(S,{data:X,key:C(j,X),index:j,isScrolling:pt?Q:void 0,style:this._getItemStyle(j)}));var dt=r(this.props,this._instanceProps);return rt.createElement(lt||it||"div",{className:g,onScroll:xt,ref:this._outerRefSetter,style:rd({position:"relative",height:b,width:z,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:U},ct)},rt.createElement(P||O||"div",{children:Mt,ref:D,style:{height:W?"100%":dt,pointerEvents:Q?"none":void 0,width:W?dt:"100%"}}))},y._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var M=this.props.itemCount;if(M>0){var S=this._getRangeToRender(),g=S[0],U=S[1],b=S[2],D=S[3];this._callOnItemsRendered(g,U,b,D)}}if(typeof this.props.onScroll=="function"){var P=this.state,O=P.scrollDirection,F=P.scrollOffset,X=P.scrollUpdateWasRequested;this._callOnScroll(O,F,X)}},y._getRangeToRender=function(){var M=this.props,S=M.itemCount,g=M.overscanCount,U=this.state,b=U.isScrolling,D=U.scrollDirection,P=U.scrollOffset;if(S===0)return[0,0,0,0];var O=f(this.props,P,this._instanceProps),F=h(this.props,O,P,this._instanceProps),X=!b||D==="backward"?Math.max(1,g):1,L=!b||D==="forward"?Math.max(1,g):1;return[Math.max(0,O-X),Math.max(0,Math.min(S-1,F+L)),O,F]},x}(rt.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var xE=function(t,n){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,n.instance},yE=SE({getItemOffset:function(t,n){var r=t.itemSize;return n*r},getItemSize:function(t,n){var r=t.itemSize;return r},getEstimatedTotalSize:function(t){var n=t.itemCount,r=t.itemSize;return r*n},getOffsetForIndexAndAlignment:function(t,n,r,l,c,f){var h=t.direction,m=t.height,p=t.itemCount,v=t.itemSize,_=t.layout,x=t.width,y=h==="horizontal"||_==="horizontal",T=y?x:m,M=Math.max(0,p*v-T),S=Math.min(M,n*v),g=Math.max(0,n*v-T+v+f);switch(r==="smart"&&(l>=g-T&&l<=S+T?r="auto":r="center"),r){case"start":return S;case"end":return g;case"center":{var U=Math.round(g+(S-g)/2);return U<Math.ceil(T/2)?0:U>M+Math.floor(T/2)?M:U}case"auto":default:return l>=g&&l<=S?l:l<g?g:S}},getStartIndexForOffset:function(t,n){var r=t.itemCount,l=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(n/l)))},getStopIndexForStartIndex:function(t,n,r){var l=t.direction,c=t.height,f=t.itemCount,h=t.itemSize,m=t.layout,p=t.width,v=l==="horizontal"||m==="horizontal",_=n*h,x=v?p:c,y=Math.ceil((x+r-_)/h);return Math.max(0,Math.min(f-1,n+y-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});const Ko=180,z0=["NORAD_CAT_ID","OBJECT_NAME","OBJECT_TYPE","COUNTRY_CODE","LAUNCH_DATE","SITE","CENTER_NAME","REF_FRAME","TIME_SYSTEM","MEAN_ELEMENT_THEORY","EPOCH","MEAN_MOTION","ECCENTRICITY","INCLINATION","RA_OF_ASC_NODE","ARG_OF_PERICENTER","MEAN_ANOMALY","EPHEMERIS_TYPE","CLASSIFICATION_TYPE","ELEMENT_SET_NO","REV_AT_EPOCH","BSTAR","MEAN_MOTION_DOT","MEAN_MOTION_DDOT","SEMIMAJOR_AXIS","PERIOD","APOAPSIS","PERIAPSIS","RCS_SIZE","DECAY_DATE","GP_ID","OBJECT_ID","TLE_LINE0","TLE_LINE1","TLE_LINE2","ORIGINATOR"],ME="_table_eiklz_1",EE="_th_eiklz_16",TE="_td_eiklz_16",bE="_row_eiklz_39",AE="_tableContainer_eiklz_48",RE="_tableScroll_eiklz_60",Ur={table:ME,th:EE,td:TE,row:bE,tableContainer:AE,tableScroll:RE};function CE(s){const{index:t,style:n,data:r}=s,{data:l,allKeys:c,onRowClick:f}=r,h=rt.useRef({isMoving:!1,startX:0,startY:0,isDragging:!1});if(!l[t])return console.error("No data for index:",t),null;const m=_=>{h.current={isMoving:!1,startX:_.clientX,startY:_.clientY,isDragging:!1}},p=()=>{h.current.isMoving=!0,h.current.isDragging=!0},v=_=>{const{startX:x,startY:y,isDragging:T}=h.current,M=Math.abs(_.clientX-x),S=Math.abs(_.clientY-y);!T&&M<5&&S<5&&f?.(l[t]),h.current.isDragging=!1};return Rt.jsx("div",{style:{...n,display:"flex"},className:`${Ur.row} ${Ur.clickable}`,onMouseDown:m,onMouseMove:p,onMouseUp:v,role:"row",tabIndex:0,onKeyPress:_=>{(_.key==="Enter"||_.key===" ")&&f?.(l[t])},children:c.map(_=>{const x=l[t][_],y=x!=null?String(x):"";return Rt.jsx("div",{className:Ur.td,title:y,style:{width:Ko,minWidth:Ko},children:y},String(_))})})}function wE({data:s,onRowClick:t}){const n=rt.useRef(null),[r,l]=rt.useState(500),c=[...z0],f=c.length*Ko;return rt.useEffect(()=>{const h=()=>{if(n.current){const m=n.current.clientHeight;l(Math.max(200,m-40))}};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),Rt.jsx("div",{ref:n,className:Ur.tableContainer,children:Rt.jsx("div",{className:Ur.tableScroll,children:Rt.jsxs("div",{className:Ur.table,style:{width:f},children:[Rt.jsx("div",{style:{position:"sticky",top:0,zIndex:1,background:"#fff"},children:Rt.jsx("div",{style:{display:"flex"},children:c.map(h=>Rt.jsx("div",{className:Ur.th,style:{width:Ko,minWidth:Ko},children:String(h)},String(h)))})}),Rt.jsx("div",{children:Rt.jsx(yE,{height:r,itemCount:s.length,itemSize:35,width:f,itemData:{data:s,allKeys:c,onRowClick:t},children:CE})})]})})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="178",Ps={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DE=0,mv=1,UE=2,B0=1,LE=2,ha=3,tr=0,qn=1,Pi=2,Ja=0,Is=1,gv=2,_v=3,vv=4,NE=5,wr=100,OE=101,PE=102,IE=103,zE=104,BE=200,FE=201,HE=202,GE=203,od=204,ld=205,VE=206,kE=207,XE=208,WE=209,YE=210,qE=211,jE=212,ZE=213,KE=214,cd=0,ud=1,fd=2,Fs=3,hd=4,dd=5,pd=6,md=7,sp=0,QE=1,JE=2,$a=0,$E=1,tT=2,eT=3,nT=4,iT=5,aT=6,rT=7,F0=300,Hs=301,Gs=302,gd=303,_d=304,su=306,vd=1e3,Lr=1001,Sd=1002,bi=1003,sT=1004,xc=1005,Ii=1006,Eh=1007,Nr=1008,zi=1009,H0=1010,G0=1011,Jo=1012,op=1013,Or=1014,da=1015,rl=1016,lp=1017,cp=1018,$o=1020,V0=35902,k0=1021,X0=1022,Ei=1023,tl=1026,el=1027,W0=1028,up=1029,Y0=1030,fp=1031,hp=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,xd=35840,yd=35841,Md=35842,Ed=35843,Td=36196,bd=37492,Ad=37496,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,Id=37817,zd=37818,Bd=37819,Fd=37820,Hd=37821,Jc=36492,Gd=36494,Vd=36495,q0=36283,kd=36284,Xd=36285,Wd=36286,oT=3200,lT=3201,j0=0,cT=1,Qa="",pi="srgb",Vs="srgb-linear",nu="linear",Ge="srgb",_s=7680,Sv=519,uT=512,fT=513,hT=514,Z0=515,dT=516,pT=517,mT=518,gT=519,xv=35044,yv="300 es",pa=2e3,iu=2001;class Br{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,Yd=180/Math.PI;function sl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Ee(s,t,n){return Math.max(t,Math.min(n,s))}function _T(s,t){return(s%t+t)%t}function Th(s,t,n){return(1-n)*s+n*t}function Xo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vT={DEG2RAD:$c};class ce{constructor(t=0,n=0){ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pr{constructor(t=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=l}static slerpFlat(t,n,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3];const x=c[f+0],y=c[f+1],T=c[f+2],M=c[f+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=v,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=y,t[n+2]=T,t[n+3]=M;return}if(_!==M||m!==x||p!==y||v!==T){let S=1-h;const g=m*x+p*y+v*T+_*M,U=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const P=Math.sqrt(b),O=Math.atan2(P,g*U);S=Math.sin(S*O)/P,h=Math.sin(h*O)/P}const D=h*U;if(m=m*S+x*D,p=p*S+y*D,v=v*S+T*D,_=_*S+M*D,S===1-h){const P=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=P,p*=P,v*=P,_*=P}}t[n]=m,t[n+1]=p,t[n+2]=v,t[n+3]=_}static multiplyQuaternionsFlat(t,n,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=c[f],x=c[f+1],y=c[f+2],T=c[f+3];return t[n]=h*T+v*_+m*y-p*x,t[n+1]=m*T+v*x+p*_-h*y,t[n+2]=p*T+v*y+h*x-m*_,t[n+3]=v*T-h*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,l){return this._x=t,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(c/2),x=m(r/2),y=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*v*_+p*y*T,this._y=p*y*_-x*v*T,this._z=p*v*T+x*y*_,this._w=p*v*_-x*y*T;break;case"YXZ":this._x=x*v*_+p*y*T,this._y=p*y*_-x*v*T,this._z=p*v*T-x*y*_,this._w=p*v*_+x*y*T;break;case"ZXY":this._x=x*v*_-p*y*T,this._y=p*y*_+x*v*T,this._z=p*v*T+x*y*_,this._w=p*v*_-x*y*T;break;case"ZYX":this._x=x*v*_-p*y*T,this._y=p*y*_+x*v*T,this._z=p*v*T-x*y*_,this._w=p*v*_+x*y*T;break;case"YZX":this._x=x*v*_+p*y*T,this._y=p*y*_+x*v*T,this._z=p*v*T-x*y*_,this._w=p*v*_-x*y*T;break;case"XZY":this._x=x*v*_-p*y*T,this._y=p*y*_-x*v*T,this._z=p*v*T+x*y*_,this._w=p*v*_+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],v=n[6],_=n[10],x=r+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>h&&r>_){const y=2*Math.sqrt(1+r-h-_);this._w=(v-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-r-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+_-r-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,l=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*l+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),_=Math.sin((1-n)*v)/p,x=Math.sin(n*v)/p;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,n=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Mv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Mv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),v=2*(h*n-c*l),_=2*(c*r-f*n);return this.x=n+m*p+f*_-h*v,this.y=r+m*v+h*p-c*_,this.z=l+m*_+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,l=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return n*n+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const l=Math.sin(n)*t;return this.x=l*Math.sin(r),this.y=Math.cos(n)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new K,Mv=new Pr;class he{constructor(t,n,r,l,c,f,h,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,m,p)}set(t,n,r,l,c,f,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=n,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],x=r[2],y=r[5],T=r[8],M=l[0],S=l[3],g=l[6],U=l[1],b=l[4],D=l[7],P=l[2],O=l[5],F=l[8];return c[0]=f*M+h*U+m*P,c[3]=f*S+h*b+m*O,c[6]=f*g+h*D+m*F,c[1]=p*M+v*U+_*P,c[4]=p*S+v*b+_*O,c[7]=p*g+v*D+_*F,c[2]=x*M+y*U+T*P,c[5]=x*S+y*b+T*O,c[8]=x*g+y*D+T*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return n*f*v-n*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=v*f-h*p,x=h*m-v*c,y=p*c-f*m,T=n*_+r*x+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=_*M,t[1]=(l*p-v*r)*M,t[2]=(h*r-l*f)*M,t[3]=x*M,t[4]=(v*n-l*m)*M,t[5]=(l*c-h*n)*M,t[6]=y*M,t[7]=(r*m-p*n)*M,t[8]=(f*n-r*c)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ah.makeScale(t,n)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ah.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new he;function K0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ST(){const s=nl("canvas");return s.style.display="block",s}const Ev={};function zs(s){s in Ev||(Ev[s]=!0,console.warn(s))}function xT(s,t,n){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function yT(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function MT(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Tv=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ET(){const s={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?nu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vs]:{primaries:t,whitePoint:r,transfer:nu,toXYZ:Tv,fromXYZ:bv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Tv,fromXYZ:bv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const De=ET();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class TT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=nl("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=nl("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ga(n[r]/255)*255):n[r]=ga(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bT=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Rh(l[f].image)):c.push(Rh(l[f]))}else c=Rh(l);r.url=c}return n||(t.images[this.uuid]=r),r}}function Rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?TT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AT=0;const Ch=new K;class Fn extends Br{constructor(t=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=Lr,l=Lr,c=Ii,f=Nr,h=Ei,m=zi,p=Fn.DEFAULT_ANISOTROPY,v=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=sl(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vd:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vd:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=F0;Fn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,n=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,l){return this.x=t,this.y=n,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],x=m[1],y=m[5],T=m[9],M=m[2],S=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(_-M)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+M)<.1&&Math.abs(T+S)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(p+1)/2,D=(y+1)/2,P=(g+1)/2,O=(v+x)/4,F=(_+M)/4,X=(T+S)/4;return b>D&&b>P?b<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(b),l=O/r,c=F/r):D>P?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=O/l,c=X/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=F/c,l=X/c),this.set(r,l,c,n),this}let U=Math.sqrt((S-T)*(S-T)+(_-M)*(_-M)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(S-T)/U,this.y=(_-M)/U,this.z=(x-v)/U,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RT extends Br{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n);const l={width:t,height:n,depth:r.depth},c=new Fn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends RT{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Q0 extends Fn{constructor(t=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CT extends Fn{constructor(t=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Mc.subVectors(this.max,Wo),Ss.subVectors(t.a,Wo),xs.subVectors(t.b,Wo),ys.subVectors(t.c,Wo),Xa.subVectors(xs,Ss),Wa.subVectors(ys,xs),yr.subVectors(Ss,ys);let n=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-yr.z,yr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,yr.z,0,-yr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-yr.y,yr.x,0];return!wh(n,Ss,xs,ys,Mc)||(n=[1,0,0,0,1,0,0,0,1],!wh(n,Ss,xs,ys,Mc))?!1:(Ec.crossVectors(Xa,Wa),n=[Ec.x,Ec.y,Ec.z],wh(n,Ss,xs,ys,Mc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,yc=new ol,Ss=new K,xs=new K,ys=new K,Xa=new K,Wa=new K,yr=new K,Wo=new K,Mc=new K,Ec=new K,Mr=new K;function wh(s,t,n,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Mr.fromArray(s,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),p=n.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const wT=new ol,Yo=new K,Dh=new K;class ou{constructor(t=new K,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):wT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(Yo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Dh)),this.expandByPoint(Yo.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new K,Uh=new K,Tc=new K,Ya=new K,Lh=new K,bc=new K,Nh=new K;class lu{constructor(t=new K,n=new K(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=oa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,n),oa.distanceToSquared(t))}distanceSqToSegment(t,n,r,l){Uh.copy(t).add(n).multiplyScalar(.5),Tc.copy(n).sub(t).normalize(),Ya.copy(this.origin).sub(Uh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Tc),h=Ya.dot(this.direction),m=-Ya.dot(Tc),p=Ya.lengthSq(),v=Math.abs(1-f*f);let _,x,y,T;if(v>0)if(_=f*m-h,x=f*h-m,T=c*v,_>=0)if(x>=-T)if(x<=T){const M=1/v;_*=M,x*=M,y=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Uh).addScaledVector(Tc,x),y}intersectSphere(t,n){oa.subVectors(t.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,f=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,f=(t.min.y-x.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,n,r,l,c){Lh.subVectors(n,t),bc.subVectors(r,t),Nh.crossVectors(Lh,bc);let f=this.direction.dot(Nh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(bc.crossVectors(Ya,bc));if(m<0)return null;const p=h*this.direction.dot(Lh.cross(Ya));if(p<0||m+p>f)return null;const v=-h*Ya.dot(Nh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,n,r,l,c,f,h,m,p,v,_,x,y,T,M,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,m,p,v,_,x,y,T,M,S)}set(t,n,r,l,c,f,h,m,p,v,_,x,y,T,M,S){const g=this.elements;return g[0]=t,g[4]=n,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=m,g[2]=p,g[6]=v,g[10]=_,g[14]=x,g[3]=y,g[7]=T,g[11]=M,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),c=1/Ms.setFromMatrixColumn(t,1).length(),f=1/Ms.setFromMatrixColumn(t,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*v,y=f*_,T=h*v,M=h*_;n[0]=m*v,n[4]=-m*_,n[8]=p,n[1]=y+T*p,n[5]=x-M*p,n[9]=-h*m,n[2]=M-x*p,n[6]=T+y*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*v,y=m*_,T=p*v,M=p*_;n[0]=x+M*h,n[4]=T*h-y,n[8]=f*p,n[1]=f*_,n[5]=f*v,n[9]=-h,n[2]=y*h-T,n[6]=M+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*v,y=m*_,T=p*v,M=p*_;n[0]=x-M*h,n[4]=-f*_,n[8]=T+y*h,n[1]=y+T*h,n[5]=f*v,n[9]=M-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*v,y=f*_,T=h*v,M=h*_;n[0]=m*v,n[4]=T*p-y,n[8]=x*p+M,n[1]=m*_,n[5]=M*p+x,n[9]=y*p-T,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,T=h*m,M=h*p;n[0]=m*v,n[4]=M-x*_,n[8]=T*_+y,n[1]=_,n[5]=f*v,n[9]=-h*v,n[2]=-p*v,n[6]=y*_+T,n[10]=x-M*_}else if(t.order==="XZY"){const x=f*m,y=f*p,T=h*m,M=h*p;n[0]=m*v,n[4]=-_,n[8]=p*v,n[1]=x*_+M,n[5]=f*v,n[9]=y*_-T,n[2]=T*_-y,n[6]=h*v,n[10]=M*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DT,t,UT)}lookAt(t,n,r){const l=this.elements;return ni.subVectors(t,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),qa.crossVectors(r,ni),qa.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),qa.crossVectors(r,ni)),qa.normalize(),Ac.crossVectors(ni,qa),l[0]=qa.x,l[4]=Ac.x,l[8]=ni.x,l[1]=qa.y,l[5]=Ac.y,l[9]=ni.y,l[2]=qa.z,l[6]=Ac.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],x=r[9],y=r[13],T=r[2],M=r[6],S=r[10],g=r[14],U=r[3],b=r[7],D=r[11],P=r[15],O=l[0],F=l[4],X=l[8],L=l[12],C=l[1],G=l[5],lt=l[9],it=l[13],ct=l[2],pt=l[6],z=l[10],Q=l[14],W=l[3],xt=l[7],N=l[11],$=l[15];return c[0]=f*O+h*C+m*ct+p*W,c[4]=f*F+h*G+m*pt+p*xt,c[8]=f*X+h*lt+m*z+p*N,c[12]=f*L+h*it+m*Q+p*$,c[1]=v*O+_*C+x*ct+y*W,c[5]=v*F+_*G+x*pt+y*xt,c[9]=v*X+_*lt+x*z+y*N,c[13]=v*L+_*it+x*Q+y*$,c[2]=T*O+M*C+S*ct+g*W,c[6]=T*F+M*G+S*pt+g*xt,c[10]=T*X+M*lt+S*z+g*N,c[14]=T*L+M*it+S*Q+g*$,c[3]=U*O+b*C+D*ct+P*W,c[7]=U*F+b*G+D*pt+P*xt,c[11]=U*X+b*lt+D*z+P*N,c[15]=U*L+b*it+D*Q+P*$,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],v=t[2],_=t[6],x=t[10],y=t[14],T=t[3],M=t[7],S=t[11],g=t[15];return T*(+c*m*_-l*p*_-c*h*x+r*p*x+l*h*y-r*m*y)+M*(+n*m*y-n*p*x+c*f*x-l*f*y+l*p*v-c*m*v)+S*(+n*p*_-n*h*y-c*f*_+r*f*y+c*h*v-r*p*v)+g*(-l*h*v-n*m*_+n*h*x+l*f*_-r*f*x+r*m*v)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=t[9],x=t[10],y=t[11],T=t[12],M=t[13],S=t[14],g=t[15],U=_*S*p-M*x*p+M*m*y-h*S*y-_*m*g+h*x*g,b=T*x*p-v*S*p-T*m*y+f*S*y+v*m*g-f*x*g,D=v*M*p-T*_*p+T*h*y-f*M*y-v*h*g+f*_*g,P=T*_*m-v*M*m-T*h*x+f*M*x+v*h*S-f*_*S,O=n*U+r*b+l*D+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=U*F,t[1]=(M*x*c-_*S*c-M*l*y+r*S*y+_*l*g-r*x*g)*F,t[2]=(h*S*c-M*m*c+M*l*p-r*S*p-h*l*g+r*m*g)*F,t[3]=(_*m*c-h*x*c-_*l*p+r*x*p+h*l*y-r*m*y)*F,t[4]=b*F,t[5]=(v*S*c-T*x*c+T*l*y-n*S*y-v*l*g+n*x*g)*F,t[6]=(T*m*c-f*S*c-T*l*p+n*S*p+f*l*g-n*m*g)*F,t[7]=(f*x*c-v*m*c+v*l*p-n*x*p-f*l*y+n*m*y)*F,t[8]=D*F,t[9]=(T*_*c-v*M*c-T*r*y+n*M*y+v*r*g-n*_*g)*F,t[10]=(f*M*c-T*h*c+T*r*p-n*M*p-f*r*g+n*h*g)*F,t[11]=(v*h*c-f*_*c-v*r*p+n*_*p+f*r*y-n*h*y)*F,t[12]=P*F,t[13]=(v*M*l-T*_*l+T*r*x-n*M*x-v*r*S+n*_*S)*F,t[14]=(T*h*l-f*M*l-T*r*m+n*M*m+f*r*S-n*h*S)*F,t[15]=(f*_*l-v*h*l+v*r*m-n*_*m-f*r*x+n*h*x)*F,this}scale(t){const n=this.elements,r=t.x,l=t.y,c=t.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=t.x,h=t.y,m=t.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,v=f+f,_=h+h,x=c*p,y=c*v,T=c*_,M=f*v,S=f*_,g=h*_,U=m*p,b=m*v,D=m*_,P=r.x,O=r.y,F=r.z;return l[0]=(1-(M+g))*P,l[1]=(y+D)*P,l[2]=(T-b)*P,l[3]=0,l[4]=(y-D)*O,l[5]=(1-(x+g))*O,l[6]=(S+U)*O,l[7]=0,l[8]=(T+b)*F,l[9]=(S-U)*F,l[10]=(1-(x+M))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,r){const l=this.elements;let c=Ms.set(l[0],l[1],l[2]).length();const f=Ms.set(l[4],l[5],l[6]).length(),h=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,v=1/f,_=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),r.x=c,r.y=f,r.z=h,this}makePerspective(t,n,r,l,c,f,h=pa){const m=this.elements,p=2*c/(n-t),v=2*c/(r-l),_=(n+t)/(n-t),x=(r+l)/(r-l);let y,T;if(h===pa)y=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===iu)y=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,r,l,c,f,h=pa){const m=this.elements,p=1/(n-t),v=1/(r-l),_=1/(f-c),x=(n+t)*p,y=(r+l)*v;let T,M;if(h===pa)T=(f+c)*_,M=-2*_;else if(h===iu)T=c*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=M,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Ms=new K,xi=new Ke,DT=new K(0,0,0),UT=new K(1,1,1),qa=new K,Ac=new K,ni=new K,Av=new Ke,Rv=new Pr;class Bi{constructor(t=0,n=0,r=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,l=this._order){return this._x=t,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],x=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Av.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Av,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Rv.setFromEuler(this),this.setFromQuaternion(Rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LT=0;const Cv=new K,Es=new Pr,la=new Ke,Rc=new K,qo=new K,NT=new K,OT=new Pr,wv=new K(1,0,0),Dv=new K(0,1,0),Uv=new K(0,0,1),Lv={type:"added"},PT={type:"removed"},Ts={type:"childadded",child:null},Oh={type:"childremoved",child:null};class wn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new K,n=new Bi,r=new Pr,l=new K(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Es.setFromAxisAngle(t,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,n){return Es.setFromAxisAngle(t,n),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(wv,t)}rotateY(t){return this.rotateOnAxis(Dv,t)}rotateZ(t){return this.rotateOnAxis(Uv,t)}translateOnAxis(t,n){return Cv.copy(t).applyQuaternion(this.quaternion),this.position.add(Cv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(wv,t)}translateY(t){return this.translateOnAxis(Dv,t)}translateZ(t){return this.translateOnAxis(Uv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Rc.copy(t):Rc.set(t,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(qo,Rc,this.up):la.lookAt(Rc,qo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(la),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lv),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(PT),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lv),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,NT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,OT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),T=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new K(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new K,ca=new K,Ph=new K,ua=new K,bs=new K,As=new K,Nv=new K,Ih=new K,zh=new K,Bh=new K,Fh=new nn,Hh=new nn,Gh=new nn;class Mi{constructor(t=new K,n=new K,r=new K){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,l){l.subVectors(r,n),yi.subVectors(t,n),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,r,l,c){yi.subVectors(l,n),ca.subVectors(r,n),Ph.subVectors(t,n);const f=yi.dot(yi),h=yi.dot(ca),m=yi.dot(Ph),p=ca.dot(ca),v=ca.dot(Ph),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-h*v)*x,T=(f*v-h*m)*x;return c.set(1-y-T,T,y)}static containsPoint(t,n,r,l){return this.getBarycoord(t,n,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,n,r,l,c,f,h,m){return this.getBarycoord(t,n,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,n,r,l,c,f){return Fh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Fh.fromBufferAttribute(t,n),Hh.fromBufferAttribute(t,r),Gh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Fh,c.x),f.addScaledVector(Hh,c.y),f.addScaledVector(Gh,c.z),f}static isFrontFacing(t,n,r,l){return yi.subVectors(r,n),ca.subVectors(t,n),yi.cross(ca).dot(l)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,l){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,r,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),yi.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Mi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,n,r,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,l=this.b,c=this.c;let f,h;bs.subVectors(l,r),As.subVectors(c,r),Ih.subVectors(t,r);const m=bs.dot(Ih),p=As.dot(Ih);if(m<=0&&p<=0)return n.copy(r);zh.subVectors(t,l);const v=bs.dot(zh),_=As.dot(zh);if(v>=0&&_<=v)return n.copy(l);const x=m*_-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(bs,f);Bh.subVectors(t,c);const y=bs.dot(Bh),T=As.dot(Bh);if(T>=0&&y<=T)return n.copy(c);const M=y*p-m*T;if(M<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector(As,h);const S=v*T-y*_;if(S<=0&&_-v>=0&&y-T>=0)return Nv.subVectors(c,l),h=(_-v)/(_-v+(y-T)),n.copy(l).addScaledVector(Nv,h);const g=1/(S+M+x);return f=M*g,h=x*g,n.copy(r).addScaledVector(bs,f).addScaledVector(As,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Vh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Re{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,r,l=De.workingColorSpace){return this.r=t,this.g=n,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,n,r,l=De.workingColorSpace){if(t=_T(t,1),n=Ee(n,0,1),r=Ee(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Vh(f,c,t+1/3),this.g=Vh(f,c,t),this.b=Vh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,n=pi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pi){const r=J0[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return De.workingToColorSpace(On.copy(this),t),Math.round(Ee(On.r*255,0,255))*65536+Math.round(Ee(On.g*255,0,255))*256+Math.round(Ee(On.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(On.copy(this),n);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=v<=.5?_/(f+h):_/(2-f-h),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=pi){De.workingToColorSpace(On.copy(this),t);const n=On.r,r=On.g,l=On.b;return t!==pi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,n,r){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+n,ja.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(ja),t.getHSL(Cc);const r=Th(ja.h,Cc.h,n),l=Th(ja.s,Cc.s,n),c=Th(ja.l,Cc.l,n);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Re;Re.NAMES=J0;let IT=0;class Ys extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Is,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==od&&(r.blendSrc=this.blendSrc),this.blendDst!==ld&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mp extends Ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new K,wc=new ce;let zT=0;class Pn{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=xv,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(t),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Xo(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Wn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),r=Wn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,l){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,n,r,l,c){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xv&&(t.usage=this.usage),t}}class $0 extends Pn{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class tS extends Pn{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class ai extends Pn{constructor(t,n,r){super(new Float32Array(t),n,r)}}let BT=0;const di=new Ke,kh=new wn,Rs=new K,ii=new ol,jo=new ol,En=new K;class Ri extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K0(t)?tS:$0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new he().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,n,r){return di.makeTranslation(t,n,r),this.applyMatrix4(di),this}scale(t,n,r){return di.makeScale(t,n,r),this.applyMatrix4(di),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ai(r,3))}else{const r=Math.min(t.length,n.count);for(let l=0;l<r;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ii.min,jo.min),ii.expandByPoint(En),En.addVectors(ii.max,jo.max),ii.expandByPoint(En)):(ii.expandByPoint(jo.min),ii.expandByPoint(jo.max))}ii.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)En.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(En));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(Rs.fromBufferAttribute(t,p),En.add(Rs)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<r.count;X++)h[X]=new K,m[X]=new K;const p=new K,v=new K,_=new K,x=new ce,y=new ce,T=new ce,M=new K,S=new K;function g(X,L,C){p.fromBufferAttribute(r,X),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,C),x.fromBufferAttribute(c,X),y.fromBufferAttribute(c,L),T.fromBufferAttribute(c,C),v.sub(p),_.sub(p),y.sub(x),T.sub(x);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(M.copy(v).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(G),h[X].add(M),h[L].add(M),h[C].add(M),m[X].add(S),m[L].add(S),m[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let X=0,L=U.length;X<L;++X){const C=U[X],G=C.start,lt=C.count;for(let it=G,ct=G+lt;it<ct;it+=3)g(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const b=new K,D=new K,P=new K,O=new K;function F(X){P.fromBufferAttribute(l,X),O.copy(P);const L=h[X];b.copy(L),b.sub(P.multiplyScalar(P.dot(L))).normalize(),D.crossVectors(O,L);const G=D.dot(m[X])<0?-1:1;f.setXYZW(X,b.x,b.y,b.z,G)}for(let X=0,L=U.length;X<L;++X){const C=U[X],G=C.start,lt=C.count;for(let it=G,ct=G+lt;it<ct;it+=3)F(t.getX(it+0)),F(t.getX(it+1)),F(t.getX(it+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new K,c=new K,f=new K,h=new K,m=new K,p=new K,v=new K,_=new K;if(t)for(let x=0,y=t.count;x<y;x+=3){const T=t.getX(x+0),M=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(M,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,_=h.normalized,x=new p.constructor(m.length*v);let y=0,T=0;for(let M=0,S=m.length;M<S;M++){h.isInterleavedBufferAttribute?y=m[M]*h.data.stride+h.offset:y=m[M]*v;for(let g=0;g<v;g++)x[T++]=p[y++]}return new Pn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const x=p[v],y=t(x,r);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];v.push(y.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(n))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let x=0,y=_.length;x<y;x++)v.push(_[x].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new Ke,Er=new lu,Dc=new ou,Pv=new K,Uc=new K,Lc=new K,Nc=new K,Xh=new K,Oc=new K,Iv=new K,Pc=new K;class Ti extends wn{constructor(t=new Ri,n=new mp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&(Xh.fromBufferAttribute(_,t),f?Oc.addScaledVector(Xh,v):Oc.addScaledVector(Xh.sub(n),v))}n.add(Oc)}return n}raycast(t,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(c),Er.copy(t.ray).recast(t.near),!(Dc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Dc,Pv)===null||Er.origin.distanceToSquared(Pv)>(t.far-t.near)**2))&&(Ov.copy(c).invert(),Er.copy(t.ray).applyMatrix4(Ov),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Er)))}_computeIntersections(t,n,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,M=x.length;T<M;T++){const S=x[T],g=f[S.materialIndex],U=Math.max(S.start,y.start),b=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=U,P=b;D<P;D+=3){const O=h.getX(D),F=h.getX(D+1),X=h.getX(D+2);l=Ic(this,g,t,r,p,v,_,O,F,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const T=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let S=T,g=M;S<g;S+=3){const U=h.getX(S),b=h.getX(S+1),D=h.getX(S+2);l=Ic(this,f,t,r,p,v,_,U,b,D),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,M=x.length;T<M;T++){const S=x[T],g=f[S.materialIndex],U=Math.max(S.start,y.start),b=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=U,P=b;D<P;D+=3){const O=D,F=D+1,X=D+2;l=Ic(this,g,t,r,p,v,_,O,F,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const T=Math.max(0,y.start),M=Math.min(m.count,y.start+y.count);for(let S=T,g=M;S<g;S+=3){const U=S,b=S+1,D=S+2;l=Ic(this,f,t,r,p,v,_,U,b,D),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function FT(s,t,n,r,l,c,f,h){let m;if(t.side===qn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,t.side===tr,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Pc);return p<n.near||p>n.far?null:{distance:p,point:Pc.clone(),object:s}}function Ic(s,t,n,r,l,c,f,h,m,p){s.getVertexPosition(h,Uc),s.getVertexPosition(m,Lc),s.getVertexPosition(p,Nc);const v=FT(s,t,n,r,Uc,Lc,Nc,Iv);if(v){const _=new K;Mi.getBarycoord(Iv,Uc,Lc,Nc,_),l&&(v.uv=Mi.getInterpolatedAttribute(l,h,m,p,_,new ce)),c&&(v.uv1=Mi.getInterpolatedAttribute(c,h,m,p,_,new ce)),f&&(v.normal=Mi.getInterpolatedAttribute(f,h,m,p,_,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new K,materialIndex:0};Mi.getNormal(Uc,Lc,Nc,x.normal),v.face=x,v.barycoord=_}return v}class ll extends Ri{constructor(t=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,t,f,c,0),T("z","y","x",1,-1,r,n,-t,f,c,1),T("x","z","y",1,1,t,r,n,l,f,2),T("x","z","y",1,-1,t,r,-n,l,f,3),T("x","y","z",1,-1,t,n,r,l,c,4),T("x","y","z",-1,-1,t,n,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ai(p,3)),this.setAttribute("normal",new ai(v,3)),this.setAttribute("uv",new ai(_,2));function T(M,S,g,U,b,D,P,O,F,X,L){const C=D/F,G=P/X,lt=D/2,it=P/2,ct=O/2,pt=F+1,z=X+1;let Q=0,W=0;const xt=new K;for(let N=0;N<z;N++){const $=N*G-it;for(let _t=0;_t<pt;_t++){const Mt=_t*C-lt;xt[M]=Mt*U,xt[S]=$*b,xt[g]=ct,p.push(xt.x,xt.y,xt.z),xt[M]=0,xt[S]=0,xt[g]=O>0?1:-1,v.push(xt.x,xt.y,xt.z),_.push(_t/F),_.push(1-N/X),Q+=1}}for(let N=0;N<X;N++)for(let $=0;$<F;$++){const _t=x+$+pt*N,Mt=x+$+pt*(N+1),j=x+($+1)+pt*(N+1),dt=x+($+1)+pt*N;m.push(_t,Mt,dt),m.push(Mt,j,dt),W+=6}h.addGroup(y,W,L),y+=W,x+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(s){const t={};for(const n in s){t[n]={};for(const r in s[n]){const l=s[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=l.clone():Array.isArray(l)?t[n][r]=l.slice():t[n][r]=l}}return t}function Bn(s){const t={};for(let n=0;n<s.length;n++){const r=ks(s[n]);for(const l in r)t[l]=r[l]}return t}function HT(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function eS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const GT={clone:ks,merge:Bn};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=kT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=HT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class nS extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=pa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new K,zv=new ce,Bv=new ce;class mi extends nS{constructor(t=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,n){return this.getViewBounds(t,zv,Bv),n.subVectors(Bv,zv)}setViewOffset(t,n,r,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan($c*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,ws=1;class XT extends wn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Cs,ws,t,n);l.layers=this.layers,this.add(l);const c=new mi(Cs,ws,t,n);c.layers=this.layers,this.add(c);const f=new mi(Cs,ws,t,n);f.layers=this.layers,this.add(f);const h=new mi(Cs,ws,t,n);h.layers=this.layers,this.add(h);const m=new mi(Cs,ws,t,n);m.layers=this.layers,this.add(m);const p=new mi(Cs,ws,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(n,c),t.setRenderTarget(r,1,l),t.render(n,f),t.setRenderTarget(r,2,l),t.render(n,h),t.setRenderTarget(r,3,l),t.render(n,m),t.setRenderTarget(r,4,l),t.render(n,p),r.texture.generateMipmaps=M,t.setRenderTarget(r,5,l),t.render(n,v),t.setRenderTarget(_,x,y),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class iS extends Fn{constructor(t=[],n=Hs,r,l,c,f,h,m,p,v){super(t,n,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class WT extends Ir{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new iS(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new er({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ja});c.uniforms.tEquirect.value=n;const f=new Ti(l,c),h=n.minFilter;return n.minFilter===Nr&&(n.minFilter=Ii),new XT(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,l);t.setRenderTarget(c)}}class zc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,r),g=this._getHandJoint(p,M);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=v.position.distanceTo(_.position),y=.02,T=.005;p.inputState.pinching&&x>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new zc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class qT extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yh=new K,jT=new K,ZT=new he;class Ka{constructor(t=new K(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,l){return this.normal.set(t,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const l=Yh.subVectors(r,n).cross(jT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Yh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||ZT.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new ou,KT=new ce(.5,.5),Bc=new K;class gp{constructor(t=new Ka,n=new Ka,r=new Ka,l=new Ka,c=new Ka,f=new Ka){this.planes=[t,n,r,l,c,f]}set(t,n,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=pa){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],m=l[3],p=l[4],v=l[5],_=l[6],x=l[7],y=l[8],T=l[9],M=l[10],S=l[11],g=l[12],U=l[13],b=l[14],D=l[15];if(r[0].setComponents(m-c,x-p,S-y,D-g).normalize(),r[1].setComponents(m+c,x+p,S+y,D+g).normalize(),r[2].setComponents(m+f,x+v,S+T,D+U).normalize(),r[3].setComponents(m-f,x-v,S-T,D-U).normalize(),r[4].setComponents(m-h,x-_,S-M,D-b).normalize(),n===pa)r[5].setComponents(m+h,x+_,S+M,D+b).normalize();else if(n===iu)r[5].setComponents(h,_,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);const n=KT.distanceTo(t.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const n=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class aS extends Ys{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fv=new Ke,qd=new lu,Fc=new ou,Hc=new K;class QT extends wn{constructor(t=new Ri,n=new aS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;Fv.copy(l).invert(),qd.copy(t.ray).applyMatrix4(Fv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,_=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let T=x,M=y;T<M;T++){const S=p.getX(T);Hc.fromBufferAttribute(_,S),Hv(Hc,S,m,l,t,n,this)}}else{const x=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let T=x,M=y;T<M;T++)Hc.fromBufferAttribute(_,T),Hv(Hc,T,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Hv(s,t,n,r,l,c,f){const h=qd.distanceSqToPoint(s);if(h<n){const m=new K;qd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class rS extends Fn{constructor(t,n,r=Or,l,c,f,h=bi,m=bi,p,v=tl,_=1){if(v!==tl&&v!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:_};super(x,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cu extends Ri{constructor(t=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=t/h,x=n/m,y=[],T=[],M=[],S=[];for(let g=0;g<v;g++){const U=g*x-f;for(let b=0;b<p;b++){const D=b*_-c;T.push(D,-U,0),M.push(0,0,1),S.push(b/h),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let U=0;U<h;U++){const b=U+p*g,D=U+p*(g+1),P=U+1+p*(g+1),O=U+1+p*g;y.push(b,D,O),y.push(D,P,O)}this.setIndex(y),this.setAttribute("position",new ai(T,3)),this.setAttribute("normal",new ai(M,3)),this.setAttribute("uv",new ai(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.widthSegments,t.heightSegments)}}class _p extends Ri{constructor(t=.5,n=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],v=[];let _=t;const x=(n-t)/l,y=new K,T=new ce;for(let M=0;M<=l;M++){for(let S=0;S<=r;S++){const g=c+S/r*f;y.x=_*Math.cos(g),y.y=_*Math.sin(g),m.push(y.x,y.y,y.z),p.push(0,0,1),T.x=(y.x/n+1)/2,T.y=(y.y/n+1)/2,v.push(T.x,T.y)}_+=x}for(let M=0;M<l;M++){const S=M*(r+1);for(let g=0;g<r;g++){const U=g+S,b=U,D=U+r+1,P=U+r+2,O=U+1;h.push(b,D,O),h.push(D,P,O)}}this.setIndex(h),this.setAttribute("position",new ai(m,3)),this.setAttribute("normal",new ai(p,3)),this.setAttribute("uv",new ai(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _p(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vp extends Ri{constructor(t=1,n=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const v=[],_=new K,x=new K,y=[],T=[],M=[],S=[];for(let g=0;g<=r;g++){const U=[],b=g/r;let D=0;g===0&&f===0?D=.5/n:g===r&&m===Math.PI&&(D=-.5/n);for(let P=0;P<=n;P++){const O=P/n;_.x=-t*Math.cos(l+O*c)*Math.sin(f+b*h),_.y=t*Math.cos(f+b*h),_.z=t*Math.sin(l+O*c)*Math.sin(f+b*h),T.push(_.x,_.y,_.z),x.copy(_).normalize(),M.push(x.x,x.y,x.z),S.push(O+D,1-b),U.push(p++)}v.push(U)}for(let g=0;g<r;g++)for(let U=0;U<n;U++){const b=v[g][U+1],D=v[g][U],P=v[g+1][U],O=v[g+1][U+1];(g!==0||f>0)&&y.push(b,D,O),(g!==r-1||m<Math.PI)&&y.push(D,P,O)}this.setIndex(y),this.setAttribute("position",new ai(T,3)),this.setAttribute("normal",new ai(M,3)),this.setAttribute("uv",new ai(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class JT extends Ys{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $T extends Ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tb extends Ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class eb{constructor(t,n,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this.itemStart=function(v){h++,c===!1&&l.onStart!==void 0&&l.onStart(v,f,h),c=!0},this.itemEnd=function(v){f++,l.onProgress!==void 0&&l.onProgress(v,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,_){return p.push(v,_),this},this.removeHandler=function(v){const _=p.indexOf(v);return _!==-1&&p.splice(_,2),this},this.getHandler=function(v){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],T=p[_+1];if(y.global&&(y.lastIndex=0),y.test(v))return T}return null}}}const nb=new eb;class Sp{constructor(t){this.manager=t!==void 0?t:nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const r=this;return new Promise(function(l,c){r.load(t,l,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class ib extends Sp{constructor(t){super(t)}load(t,n,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=qh.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0);else{let _=Ds.get(f);_===void 0&&(_=[],Ds.set(f,_)),_.push({onLoad:n,onError:l})}return f}const h=nl("img");function m(){v(),n&&n(this);const _=Ds.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onLoad&&y.onLoad(this)}Ds.delete(this),c.manager.itemEnd(t)}function p(_){v(),l&&l(_),qh.remove(`image:${t}`);const x=Ds.get(this)||[];for(let y=0;y<x.length;y++){const T=x[y];T.onError&&T.onError(_)}Ds.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function v(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),qh.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class ab extends Sp{constructor(t){super(t)}load(t,n,r,l){const c=new Fn,f=new ib(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},r,l),c}}class sS extends wn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const jh=new Ke,Gv=new K,Vv=new K;class rb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;Gv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gv),Vv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oS extends nS{constructor(t=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sb extends rb{constructor(){super(new oS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ob extends sS{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lb extends sS{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cb extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kv=new Ke;class ub{constructor(t,n,r=0,l=1/0){this.ray=new lu(t,n),this.near=r,this.far=l,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return kv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kv),this}intersectObject(t,n=!0,r=[]){return jd(t,this,r,n),r.sort(Xv),r}intersectObjects(t,n=!0,r=[]){for(let l=0,c=t.length;l<c;l++)jd(t[l],this,r,n);return r.sort(Xv),r}}function Xv(s,t){return s.distance-t.distance}function jd(s,t,n,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)jd(c[f],t,n,!0)}}class Wv{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Ee(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fb extends Br{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Yv(s,t,n,r){const l=hb(r);switch(n){case k0:return s*t;case W0:return s*t/l.components*l.byteLength;case up:return s*t/l.components*l.byteLength;case Y0:return s*t*2/l.components*l.byteLength;case fp:return s*t*2/l.components*l.byteLength;case X0:return s*t*3/l.components*l.byteLength;case Ei:return s*t*4/l.components*l.byteLength;case hp:return s*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yd:case Ed:return Math.max(s,16)*Math.max(t,8)/4;case xd:case Md:return Math.max(s,8)*Math.max(t,8)/2;case Td:case bd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Jc:case Gd:case Vd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case q0:case kd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xd:case Wd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hb(s){switch(s){case zi:case H0:return{byteLength:1,components:1};case Jo:case G0:case rl:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Or:case op:case da:return{byteLength:4,components:1};case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lS(){let s=null,t=!1,n=null,r=null;function l(c,f){n(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function db(s){const t=new WeakMap;function n(h,m){const p=h.array,v=h.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,v);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],M=_[y];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++x,_[x]=M)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const M=_[y];s.bufferSubData(p,M.start*v.BYTES_PER_ELEMENT,v,M.start,M.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
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
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xb=`#ifdef USE_AOMAP
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
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
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
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eA=`#ifdef USE_GRADIENTMAP
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
}`,nA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rA=`uniform bool receiveShadow;
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
#endif`,sA=`#ifdef USE_ENVMAP
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
#endif`,oA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fA=`PhysicalMaterial material;
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
#endif`,hA=`struct PhysicalMaterial {
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
}`,dA=`
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
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
#endif`,mA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_A=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EA=`#if defined( USE_POINTS_UV )
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
#endif`,TA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
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
#endif`,DA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IA=`#ifdef USE_NORMALMAP
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
#endif`,zA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JA=`float getShadowMask() {
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
}`,$A=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p1=`uniform sampler2D t2D;
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,x1=`#if DEPTH_PACKING == 3200
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
}`,y1=`#define DISTANCE
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
}`,M1=`#define DISTANCE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,D1=`#define LAMBERT
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
}`,U1=`#define MATCAP
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
}`,L1=`#define MATCAP
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
}`,N1=`#define NORMAL
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
}`,O1=`#define NORMAL
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
}`,P1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,z1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,H1=`#define TOON
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
}`,G1=`uniform float size;
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
}`,V1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,X1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:_b,alphatest_fragment:vb,alphatest_pars_fragment:Sb,aomap_fragment:xb,aomap_pars_fragment:yb,batching_pars_vertex:Mb,batching_vertex:Eb,begin_vertex:Tb,beginnormal_vertex:bb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:Ib,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:Yb,envmap_common_pars_fragment:qb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:sA,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:tA,gradientmap_pars_fragment:eA,lightmap_pars_fragment:nA,lights_lambert_fragment:iA,lights_lambert_pars_fragment:aA,lights_pars_begin:rA,lights_toon_fragment:oA,lights_toon_pars_fragment:lA,lights_phong_fragment:cA,lights_phong_pars_fragment:uA,lights_physical_fragment:fA,lights_physical_pars_fragment:hA,lights_fragment_begin:dA,lights_fragment_maps:pA,lights_fragment_end:mA,logdepthbuf_fragment:gA,logdepthbuf_pars_fragment:_A,logdepthbuf_pars_vertex:vA,logdepthbuf_vertex:SA,map_fragment:xA,map_pars_fragment:yA,map_particle_fragment:MA,map_particle_pars_fragment:EA,metalnessmap_fragment:TA,metalnessmap_pars_fragment:bA,morphinstance_vertex:AA,morphcolor_vertex:RA,morphnormal_vertex:CA,morphtarget_pars_vertex:wA,morphtarget_vertex:DA,normal_fragment_begin:UA,normal_fragment_maps:LA,normal_pars_fragment:NA,normal_pars_vertex:OA,normal_vertex:PA,normalmap_pars_fragment:IA,clearcoat_normal_fragment_begin:zA,clearcoat_normal_fragment_maps:BA,clearcoat_pars_fragment:FA,iridescence_pars_fragment:HA,opaque_fragment:GA,packing:VA,premultiplied_alpha_fragment:kA,project_vertex:XA,dithering_fragment:WA,dithering_pars_fragment:YA,roughnessmap_fragment:qA,roughnessmap_pars_fragment:jA,shadowmap_pars_fragment:ZA,shadowmap_pars_vertex:KA,shadowmap_vertex:QA,shadowmask_pars_fragment:JA,skinbase_vertex:$A,skinning_pars_vertex:t1,skinning_vertex:e1,skinnormal_vertex:n1,specularmap_fragment:i1,specularmap_pars_fragment:a1,tonemapping_fragment:r1,tonemapping_pars_fragment:s1,transmission_fragment:o1,transmission_pars_fragment:l1,uv_pars_fragment:c1,uv_pars_vertex:u1,uv_vertex:f1,worldpos_vertex:h1,background_vert:d1,background_frag:p1,backgroundCube_vert:m1,backgroundCube_frag:g1,cube_vert:_1,cube_frag:v1,depth_vert:S1,depth_frag:x1,distanceRGBA_vert:y1,distanceRGBA_frag:M1,equirect_vert:E1,equirect_frag:T1,linedashed_vert:b1,linedashed_frag:A1,meshbasic_vert:R1,meshbasic_frag:C1,meshlambert_vert:w1,meshlambert_frag:D1,meshmatcap_vert:U1,meshmatcap_frag:L1,meshnormal_vert:N1,meshnormal_frag:O1,meshphong_vert:P1,meshphong_frag:I1,meshphysical_vert:z1,meshphysical_frag:B1,meshtoon_vert:F1,meshtoon_frag:H1,points_vert:G1,points_frag:V1,shadow_vert:k1,shadow_frag:X1,sprite_vert:W1,sprite_frag:Y1},Pt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Oi={basic:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Bn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Bn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Bn([Pt.points,Pt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Bn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Bn([Pt.common,Pt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Bn([Pt.sprite,Pt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Bn([Pt.common,Pt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Bn([Pt.lights,Pt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Oi.physical={uniforms:Bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Gc={r:0,b:0,g:0},br=new Bi,q1=new Ke;function j1(s,t,n,r,l,c,f){const h=new Re(0);let m=c===!0?0:1,p,v,_=null,x=0,y=null;function T(b){let D=b.isScene===!0?b.background:null;return D&&D.isTexture&&(D=(b.backgroundBlurriness>0?n:t).get(D)),D}function M(b){let D=!1;const P=T(b);P===null?g(h,m):P&&P.isColor&&(g(P,1),D=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(b,D){const P=T(D);P&&(P.isCubeTexture||P.mapping===su)?(v===void 0&&(v=new Ti(new ll(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:ks(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),br.copy(D.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(br)),v.material.toneMapped=De.getTransfer(P.colorSpace)!==Ge,(_!==P||x!==P.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,_=P,x=P.version,y=s.toneMapping),v.layers.enableAll(),b.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ti(new cu(2,2),new er({name:"BackgroundMaterial",uniforms:ks(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=De.getTransfer(P.colorSpace)!==Ge,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,y=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function g(b,D){b.getRGB(Gc,eS(s)),r.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,f)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(b,D=1){h.set(b),m=D,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(b){m=b,g(h,m)},render:M,addToRenderList:S,dispose:U}}function Z1(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(C,G,lt,it,ct){let pt=!1;const z=_(it,lt,G);c!==z&&(c=z,p(c.object)),pt=y(C,it,lt,ct),pt&&T(C,it,lt,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(pt||f)&&(f=!1,D(C,G,lt,it),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function _(C,G,lt){const it=lt.wireframe===!0;let ct=r[C.id];ct===void 0&&(ct={},r[C.id]=ct);let pt=ct[G.id];pt===void 0&&(pt={},ct[G.id]=pt);let z=pt[it];return z===void 0&&(z=x(m()),pt[it]=z),z}function x(C){const G=[],lt=[],it=[];for(let ct=0;ct<n;ct++)G[ct]=0,lt[ct]=0,it[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:it,object:C,attributes:{},index:null}}function y(C,G,lt,it){const ct=c.attributes,pt=G.attributes;let z=0;const Q=lt.getAttributes();for(const W in Q)if(Q[W].location>=0){const N=ct[W];let $=pt[W];if($===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;z++}return c.attributesNum!==z||c.index!==it}function T(C,G,lt,it){const ct={},pt=G.attributes;let z=0;const Q=lt.getAttributes();for(const W in Q)if(Q[W].location>=0){let N=pt[W];N===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),ct[W]=$,z++}c.attributes=ct,c.attributesNum=z,c.index=it}function M(){const C=c.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function S(C){g(C,0)}function g(C,G){const lt=c.newAttributes,it=c.enabledAttributes,ct=c.attributeDivisors;lt[C]=1,it[C]===0&&(s.enableVertexAttribArray(C),it[C]=1),ct[C]!==G&&(s.vertexAttribDivisor(C,G),ct[C]=G)}function U(){const C=c.newAttributes,G=c.enabledAttributes;for(let lt=0,it=G.length;lt<it;lt++)G[lt]!==C[lt]&&(s.disableVertexAttribArray(lt),G[lt]=0)}function b(C,G,lt,it,ct,pt,z){z===!0?s.vertexAttribIPointer(C,G,lt,ct,pt):s.vertexAttribPointer(C,G,lt,it,ct,pt)}function D(C,G,lt,it){M();const ct=it.attributes,pt=lt.getAttributes(),z=G.defaultAttributeValues;for(const Q in pt){const W=pt[Q];if(W.location>=0){let xt=ct[Q];if(xt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const N=xt.normalized,$=xt.itemSize,_t=t.get(xt);if(_t===void 0)continue;const Mt=_t.buffer,j=_t.type,dt=_t.bytesPerElement,yt=j===s.INT||j===s.UNSIGNED_INT||xt.gpuType===op;if(xt.isInterleavedBufferAttribute){const Ct=xt.data,Dt=Ct.stride,kt=xt.offset;if(Ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)g(W.location+Gt,Ct.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)S(W.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Gt=0;Gt<W.locationSize;Gt++)b(W.location+Gt,$/W.locationSize,j,N,Dt*dt,(kt+$/W.locationSize*Gt)*dt,yt)}else{if(xt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct,xt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)S(W.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<W.locationSize;Ct++)b(W.location+Ct,$/W.locationSize,j,N,$*dt,$/W.locationSize*Ct*dt,yt)}}else if(z!==void 0){const N=z[Q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(W.location,N);break;case 3:s.vertexAttrib3fv(W.location,N);break;case 4:s.vertexAttrib4fv(W.location,N);break;default:s.vertexAttrib1fv(W.location,N)}}}}U()}function P(){X();for(const C in r){const G=r[C];for(const lt in G){const it=G[lt];for(const ct in it)v(it[ct].object),delete it[ct];delete G[lt]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const lt in G){const it=G[lt];for(const ct in it)v(it[ct].object),delete it[ct];delete G[lt]}delete r[C.id]}function F(C){for(const G in r){const lt=r[G];if(lt[C.id]===void 0)continue;const it=lt[C.id];for(const ct in it)v(it[ct].object),delete it[ct];delete lt[C.id]}}function X(){L(),f=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:U}}function K1(s,t,n){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),n.update(v,r,1)}function f(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),n.update(v,r,_))}function h(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let y=0;for(let T=0;T<_;T++)y+=v[T];n.update(y,r,1)}function m(p,v,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)f(p[T],v[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,_);let T=0;for(let M=0;M<_;M++)T+=v[M]*x[M];n.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Q1(s,t,n,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Ei&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const X=F===rl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==zi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==da&&!X)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:U,maxVaryings:b,maxFragmentUniforms:D,vertexTextures:P,maxSamples:O}}function J1(s){const t=this;let n=null,r=0,l=!1,c=!1;const f=new Ka,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||l;return l=x,r=_.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!l||T===null||T.length===0||c&&!S)c?v(null):p();else{const U=c?0:r,b=U*4;let D=g.clippingState||null;m.value=D,D=v(T,x,b,y);for(let P=0;P!==b;++P)D[P]=n[P];g.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,x,y,T){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=m.value,T!==!0||S===null){const g=y+M*4,U=x.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<g)&&(S=new Float32Array(g));for(let b=0,D=y;b!==M;++b,D+=4)f.copy(_[b]).applyMatrix4(U,h),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function $1(s){let t=new WeakMap;function n(f,h){return h===gd?f.mapping=Hs:h===_d&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===gd||h===_d)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new WT(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Os=4,qv=[.125,.215,.35,.446,.526,.582],Dr=20,Zh=new oS,jv=new Re;let Kh=null,Qh=0,Jh=0,$h=!1;const Rr=(1+Math.sqrt(5))/2,Us=1/Rr,Zv=[new K(-Rr,Us,0),new K(Rr,Us,0),new K(-Us,0,Rr),new K(Us,0,Rr),new K(0,Rr,-Us),new K(0,Rr,Us),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],tR=new K;class Kv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,l=100,c={}){const{size:f=256,position:h=tR}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:rl,format:Ei,colorSpace:Vs,depthBuffer:!1},l=Qv(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qv(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eR(c)),this._blurMaterial=nR(c,t,n)}return l}_compileMaterial(t){const n=new Ti(this._lodPlanes[0],t);this._renderer.compile(n,Zh)}_sceneToCubeUV(t,n,r,l,c){const m=new mi(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(jv),_.toneMapping=$a,_.autoClear=!1;const T=new mp({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new Ti(new ll,T);let S=!1;const g=t.background;g?g.isColor&&(T.color.copy(g),t.background=null,S=!0):(T.color.copy(jv),S=!0);for(let U=0;U<6;U++){const b=U%3;b===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):b===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const D=this._cubeSize;Vc(l,b*D,U>2?D:0,D,D),_.setRenderTarget(l),S&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=x,t.background=g}_textureToCubeUV(t,n){const r=this._renderer,l=t.mapping===Hs||t.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ti(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Vc(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,Zh)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Zv[(l-c-1)%Zv.length];this._blur(t,c-1,c,f,h)}n.autoClear=r}_blur(t,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,n,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Ti(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Dr-1),M=c/T,S=isFinite(c)?1+Math.floor(v*M):Dr;S>Dr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Dr}`);const g=[];let U=0;for(let F=0;F<Dr;++F){const X=F/M,L=Math.exp(-X*X/2);g.push(L),F===0?U+=L:F<S&&(U+=2*L)}for(let F=0;F<g.length;F++)g[F]=g[F]/U;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:b}=this;x.dTheta.value=T,x.mipInt.value=b-r;const D=this._sizeLods[l],P=3*D*(l>b-Os?l-b+Os:0),O=4*(this._cubeSize-D);Vc(n,P,O,3*D,2*D),m.setRenderTarget(n),m.render(_,Zh)}}function eR(s){const t=[],n=[],r=[];let l=s;const c=s-Os+1+qv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let m=1/h;f>s-Os?m=qv[f-s+Os-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,_=1+p,x=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,T=6,M=3,S=2,g=1,U=new Float32Array(M*T*y),b=new Float32Array(S*T*y),D=new Float32Array(g*T*y);for(let O=0;O<y;O++){const F=O%3*2/3-1,X=O>2?0:-1,L=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];U.set(L,M*T*O),b.set(x,S*T*O);const C=[O,O,O,O,O,O];D.set(C,g*T*O)}const P=new Ri;P.setAttribute("position",new Pn(U,M)),P.setAttribute("uv",new Pn(b,S)),P.setAttribute("faceIndex",new Pn(D,g)),t.push(P),l>Os&&l--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Qv(s,t,n){const r=new Ir(s,t,n);return r.texture.mapping=su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vc(s,t,n,r,l){s.viewport.set(t,n,r,l),s.scissor.set(t,n,r,l)}function nR(s,t,n){const r=new Float32Array(Dr),l=new K(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Jv(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function $v(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function iR(s){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===gd||m===_d,v=m===Hs||m===Gs;if(p||v){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new Kv(s)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Kv(s)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function aR(s){const t={};function n(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&zs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function rR(s,t,n,r){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,T=_.attributes.position;let M=0;if(y!==null){const U=y.array;M=y.version;for(let b=0,D=U.length;b<D;b+=3){const P=U[b+0],O=U[b+1],F=U[b+2];x.push(P,O,O,F,F,P)}}else if(T!==void 0){const U=T.array;M=T.version;for(let b=0,D=U.length/3-1;b<D;b+=3){const P=b+0,O=b+1,F=b+2;x.push(P,O,O,F,F,P)}}else return;const S=new(K0(x)?tS:$0)(x,1);S.version=M;const g=c.get(_);g&&t.remove(g),c.set(_,S)}function v(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function sR(s,t,n){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){s.drawElements(r,y,c,x*f),n.update(y,r,1)}function p(x,y,T){T!==0&&(s.drawElementsInstanced(r,y,c,x*f,T),n.update(y,r,T))}function v(x,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,T);let S=0;for(let g=0;g<T;g++)S+=y[g];n.update(S,r,1)}function _(x,y,T,M){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)p(x[g]/f,y[g],M[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,M,0,T);let g=0;for(let U=0;U<T;U++)g+=y[U]*M[U];n.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function oR(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:r}}function lR(s,t,n){const r=new WeakMap,l=new nn;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let L=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],g=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let b=0;y===!0&&(b=1),T===!0&&(b=2),M===!0&&(b=3);let D=h.attributes.position.count*b,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const O=new Float32Array(D*P*4*_),F=new Q0(O,D,P,_);F.type=da,F.needsUpdate=!0;const X=b*4;for(let C=0;C<_;C++){const G=S[C],lt=g[C],it=U[C],ct=D*P*4*C;for(let pt=0;pt<G.count;pt++){const z=pt*X;y===!0&&(l.fromBufferAttribute(G,pt),O[ct+z+0]=l.x,O[ct+z+1]=l.y,O[ct+z+2]=l.z,O[ct+z+3]=0),T===!0&&(l.fromBufferAttribute(lt,pt),O[ct+z+4]=l.x,O[ct+z+5]=l.y,O[ct+z+6]=l.z,O[ct+z+7]=0),M===!0&&(l.fromBufferAttribute(it,pt),O[ct+z+8]=l.x,O[ct+z+9]=l.y,O[ct+z+10]=l.z,O[ct+z+11]=it.itemSize===4?l.w:1)}}x={count:_,texture:F,size:new ce(D,P)},r.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let y=0;for(let M=0;M<p.length;M++)y+=p[M];const T=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function cR(s,t,n,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const cS=new Fn,t0=new rS(1,1),uS=new Q0,fS=new CT,hS=new iS,e0=[],n0=[],i0=new Float32Array(16),a0=new Float32Array(9),r0=new Float32Array(4);function qs(s,t,n){const r=s[0];if(r<=0||r>0)return s;const l=t*n;let c=e0[l];if(c===void 0&&(c=new Float32Array(l),e0[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,s[f].toArray(c,h)}return c}function mn(s,t){if(s.length!==t.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==t[n])return!1;return!0}function gn(s,t){for(let n=0,r=t.length;n<r;n++)s[n]=t[n]}function uu(s,t){let n=n0[t];n===void 0&&(n=new Int32Array(t),n0[t]=n);for(let r=0;r!==t;++r)n[r]=s.allocateTextureUnit();return n}function uR(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function fR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2fv(this.addr,t),gn(n,t)}}function hR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;s.uniform3fv(this.addr,t),gn(n,t)}}function dR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4fv(this.addr,t),gn(n,t)}}function pR(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,r))return;r0.set(r),s.uniformMatrix2fv(this.addr,!1,r0),gn(n,r)}}function mR(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,r))return;a0.set(r),s.uniformMatrix3fv(this.addr,!1,a0),gn(n,r)}}function gR(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,r))return;i0.set(r),s.uniformMatrix4fv(this.addr,!1,i0),gn(n,r)}}function _R(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function vR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2iv(this.addr,t),gn(n,t)}}function SR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;s.uniform3iv(this.addr,t),gn(n,t)}}function xR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4iv(this.addr,t),gn(n,t)}}function yR(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function MR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2uiv(this.addr,t),gn(n,t)}}function ER(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;s.uniform3uiv(this.addr,t),gn(n,t)}}function TR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4uiv(this.addr,t),gn(n,t)}}function bR(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(t0.compareFunction=Z0,c=t0):c=cS,n.setTexture2D(t||c,l)}function AR(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(t||fS,l)}function RR(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(t||hS,l)}function CR(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(t||uS,l)}function wR(s){switch(s){case 5126:return uR;case 35664:return fR;case 35665:return hR;case 35666:return dR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return _R;case 35667:case 35671:return vR;case 35668:case 35672:return SR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return MR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}function DR(s,t){s.uniform1fv(this.addr,t)}function UR(s,t){const n=qs(t,this.size,2);s.uniform2fv(this.addr,n)}function LR(s,t){const n=qs(t,this.size,3);s.uniform3fv(this.addr,n)}function NR(s,t){const n=qs(t,this.size,4);s.uniform4fv(this.addr,n)}function OR(s,t){const n=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function PR(s,t){const n=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function IR(s,t){const n=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function zR(s,t){s.uniform1iv(this.addr,t)}function BR(s,t){s.uniform2iv(this.addr,t)}function FR(s,t){s.uniform3iv(this.addr,t)}function HR(s,t){s.uniform4iv(this.addr,t)}function GR(s,t){s.uniform1uiv(this.addr,t)}function VR(s,t){s.uniform2uiv(this.addr,t)}function kR(s,t){s.uniform3uiv(this.addr,t)}function XR(s,t){s.uniform4uiv(this.addr,t)}function WR(s,t,n){const r=this.cache,l=t.length,c=uu(n,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||cS,c[f])}function YR(s,t,n){const r=this.cache,l=t.length,c=uu(n,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||fS,c[f])}function qR(s,t,n){const r=this.cache,l=t.length,c=uu(n,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||hS,c[f])}function jR(s,t,n){const r=this.cache,l=t.length,c=uu(n,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||uS,c[f])}function ZR(s){switch(s){case 5126:return DR;case 35664:return UR;case 35665:return LR;case 35666:return NR;case 35674:return OR;case 35675:return PR;case 35676:return IR;case 5124:case 35670:return zR;case 35667:case 35671:return BR;case 35668:case 35672:return FR;case 35669:case 35673:return HR;case 5125:return GR;case 36294:return VR;case 36295:return kR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return jR}}class KR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wR(n.type)}}class QR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZR(n.type)}}class JR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],r)}}}const td=/(\w+)(\])?(\[|\.)?/g;function s0(s,t){s.seq.push(t),s.map[t.id]=t}function $R(s,t,n){const r=s.name,l=r.length;for(td.lastIndex=0;;){const c=td.exec(r),f=td.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){s0(n,p===void 0?new KR(h,s,t):new QR(h,s,t));break}else{let _=n.map[h];_===void 0&&(_=new JR(h),s0(n,_)),n=_}}}class tu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);$R(c,f,this)}}setValue(t,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(t,r,l)}setOptional(t,n,r){const l=n[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&r.push(f)}return r}}function o0(s,t,n){const r=s.createShader(t);return s.shaderSource(r,n),s.compileShader(r),r}const tC=37297;let eC=0;function nC(s,t){const n=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const l0=new he;function iC(s){De._getMatrix(l0,De.workingColorSpace,s);const t=`mat3( ${l0.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(s)){case nu:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function c0(s,t,n){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+nC(s.getShaderSource(t),f)}else return l}function aC(s,t){const n=iC(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rC(s,t){let n;switch(t){case $E:n="Linear";break;case tT:n="Reinhard";break;case eT:n="Cineon";break;case nT:n="ACESFilmic";break;case aT:n="AgX";break;case rT:n="Neutral";break;case iT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kc=new K;function sC(){De.getLuminanceCoefficients(kc);const s=kc.x.toFixed(4),t=kc.y.toFixed(4),n=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function lC(s){const t=[];for(const n in s){const r=s[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function cC(s,t){const n={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return n}function Zo(s){return s!==""}function u0(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function f0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(s){return s.replace(uC,hC)}const fC=new Map;function hC(s,t){let n=_e[t];if(n===void 0){const r=fC.get(t);if(r!==void 0)n=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Zd(n)}const dC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(s){return s.replace(dC,pC)}function pC(s,t,n,r){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function d0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===LE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function gC(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _C(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function vC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sp:t="ENVMAP_BLENDING_MULTIPLY";break;case QE:t="ENVMAP_BLENDING_MIX";break;case JE:t="ENVMAP_BLENDING_ADD";break}return t}function SC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function xC(s,t,n,r){const l=s.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=mC(n),p=gC(n),v=_C(n),_=vC(n),x=SC(n),y=oC(n),T=lC(c),M=l.createProgram();let S,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Zo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Zo).join(`
`),g.length>0&&(g+=`
`)):(S=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),g=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$a?"#define TONE_MAPPING":"",n.toneMapping!==$a?_e.tonemapping_pars_fragment:"",n.toneMapping!==$a?rC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,aC("linearToOutputTexel",n.outputColorSpace),sC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),f=Zd(f),f=u0(f,n),f=f0(f,n),h=Zd(h),h=u0(h,n),h=f0(h,n),f=h0(f),h=h0(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=U+S+f,D=U+g+h,P=o0(l,l.VERTEX_SHADER,b),O=o0(l,l.FRAGMENT_SHADER,D);l.attachShader(M,P),l.attachShader(M,O),n.index0AttributeName!==void 0?l.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(M,0,"position"),l.linkProgram(M);function F(G){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(M).trim(),it=l.getShaderInfoLog(P).trim(),ct=l.getShaderInfoLog(O).trim();let pt=!0,z=!0;if(l.getProgramParameter(M,l.LINK_STATUS)===!1)if(pt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,M,P,O);else{const Q=c0(l,P,"vertex"),W=c0(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(M,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Q+`
`+W)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(it===""||ct==="")&&(z=!1);z&&(G.diagnostics={runnable:pt,programLog:lt,vertexShader:{log:it,prefix:S},fragmentShader:{log:ct,prefix:g}})}l.deleteShader(P),l.deleteShader(O),X=new tu(l,M),L=cC(l,M)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(M,tC)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eC++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=O,this}let yC=0;class MC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new EC(t),n.set(t,r)),r}}class EC{constructor(t){this.id=yC++,this.code=t,this.usedTimes=0}}function TC(s,t,n,r,l,c,f){const h=new pp,m=new MC,p=new Set,v=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,C,G,lt,it){const ct=lt.fog,pt=it.geometry,z=L.isMeshStandardMaterial?lt.environment:null,Q=(L.isMeshStandardMaterial?n:t).get(L.envMap||z),W=Q&&Q.mapping===su?Q.image.height:null,xt=T[L.type];L.precision!==null&&(y=l.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const N=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,$=N!==void 0?N.length:0;let _t=0;pt.morphAttributes.position!==void 0&&(_t=1),pt.morphAttributes.normal!==void 0&&(_t=2),pt.morphAttributes.color!==void 0&&(_t=3);let Mt,j,dt,yt;if(xt){const Ce=Oi[xt];Mt=Ce.vertexShader,j=Ce.fragmentShader}else Mt=L.vertexShader,j=L.fragmentShader,m.update(L),dt=m.getVertexShaderID(L),yt=m.getFragmentShaderID(L);const Ct=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),kt=it.isInstancedMesh===!0,Gt=it.isBatchedMesh===!0,ue=!!L.map,qt=!!L.matcap,ie=!!Q,H=!!L.aoMap,$e=!!L.lightMap,Te=!!L.bumpMap,de=!!L.normalMap,Vt=!!L.displacementMap,pe=!!L.emissiveMap,Xt=!!L.metalnessMap,Jt=!!L.roughnessMap,Qe=L.anisotropy>0,I=L.clearcoat>0,A=L.dispersion>0,et=L.iridescence>0,ht=L.sheen>0,mt=L.transmission>0,ut=Qe&&!!L.anisotropyMap,Nt=I&&!!L.clearcoatMap,wt=I&&!!L.clearcoatNormalMap,Ht=I&&!!L.clearcoatRoughnessMap,jt=et&&!!L.iridescenceMap,Et=et&&!!L.iridescenceThicknessMap,zt=ht&&!!L.sheenColorMap,Qt=ht&&!!L.sheenRoughnessMap,$t=!!L.specularMap,Ut=!!L.specularColorMap,le=!!L.specularIntensityMap,k=mt&&!!L.transmissionMap,Ot=mt&&!!L.thicknessMap,Tt=!!L.gradientMap,Bt=!!L.alphaMap,At=L.alphaTest>0,St=!!L.alphaHash,Wt=!!L.extensions;let oe=$a;L.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(oe=s.toneMapping);const Oe={shaderID:xt,shaderType:L.type,shaderName:L.name,vertexShader:Mt,fragmentShader:j,defines:L.defines,customVertexShaderID:dt,customFragmentShaderID:yt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Gt,batchingColor:Gt&&it._colorsTexture!==null,instancing:kt,instancingColor:kt&&it.instanceColor!==null,instancingMorph:kt&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ct===null?s.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Vs,alphaToCoverage:!!L.alphaToCoverage,map:ue,matcap:qt,envMap:ie,envMapMode:ie&&Q.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:$e,bumpMap:Te,normalMap:de,displacementMap:x&&Vt,emissiveMap:pe,normalMapObjectSpace:de&&L.normalMapType===cT,normalMapTangentSpace:de&&L.normalMapType===j0,metalnessMap:Xt,roughnessMap:Jt,anisotropy:Qe,anisotropyMap:ut,clearcoat:I,clearcoatMap:Nt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Ht,dispersion:A,iridescence:et,iridescenceMap:jt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:zt,sheenRoughnessMap:Qt,specularMap:$t,specularColorMap:Ut,specularIntensityMap:le,transmission:mt,transmissionMap:k,thicknessMap:Ot,gradientMap:Tt,opaque:L.transparent===!1&&L.blending===Is&&L.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:St,combine:L.combine,mapUv:ue&&M(L.map.channel),aoMapUv:H&&M(L.aoMap.channel),lightMapUv:$e&&M(L.lightMap.channel),bumpMapUv:Te&&M(L.bumpMap.channel),normalMapUv:de&&M(L.normalMap.channel),displacementMapUv:Vt&&M(L.displacementMap.channel),emissiveMapUv:pe&&M(L.emissiveMap.channel),metalnessMapUv:Xt&&M(L.metalnessMap.channel),roughnessMapUv:Jt&&M(L.roughnessMap.channel),anisotropyMapUv:ut&&M(L.anisotropyMap.channel),clearcoatMapUv:Nt&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&M(L.sheenRoughnessMap.channel),specularMapUv:$t&&M(L.specularMap.channel),specularColorMapUv:Ut&&M(L.specularColorMap.channel),specularIntensityMapUv:le&&M(L.specularIntensityMap.channel),transmissionMapUv:k&&M(L.transmissionMap.channel),thicknessMapUv:Ot&&M(L.thicknessMap.channel),alphaMapUv:Bt&&M(L.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(de||Qe),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!pt.attributes.uv&&(ue||Bt),fog:!!ct,useFog:L.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Dt,skinning:it.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:_t,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:ue&&L.map.isVideoTexture===!0&&De.getTransfer(L.map.colorSpace)===Ge,decodeVideoTextureEmissive:pe&&L.emissiveMap.isVideoTexture===!0&&De.getTransfer(L.emissiveMap.colorSpace)===Ge,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Pi,flipSided:L.side===qn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Wt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&L.extensions.multiDraw===!0||Gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function g(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const G in L.defines)C.push(G),C.push(L.defines[G]);return L.isRawShaderMaterial===!1&&(U(C,L),b(C,L),C.push(s.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function U(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function b(L,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),L.push(h.mask)}function D(L){const C=T[L.type];let G;if(C){const lt=Oi[C];G=GT.clone(lt.uniforms)}else G=L.uniforms;return G}function P(L,C){let G;for(let lt=0,it=v.length;lt<it;lt++){const ct=v[lt];if(ct.cacheKey===C){G=ct,++G.usedTimes;break}}return G===void 0&&(G=new xC(s,C,L,c),v.push(G)),G}function O(L){if(--L.usedTimes===0){const C=v.indexOf(L);v[C]=v[v.length-1],v.pop(),L.destroy()}}function F(L){m.remove(L)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:P,releaseProgram:O,releaseShaderCache:F,programs:v,dispose:X}}function bC(){let s=new WeakMap;function t(f){return s.has(f)}function n(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:t,get:n,remove:r,update:l,dispose:c}}function AC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function p0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function m0(){const s=[];let t=0;const n=[],r=[],l=[];function c(){t=0,n.length=0,r.length=0,l.length=0}function f(_,x,y,T,M,S){let g=s[t];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:M,group:S},s[t]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=M,g.group=S),t++,g}function h(_,x,y,T,M,S){const g=f(_,x,y,T,M,S);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):n.push(g)}function m(_,x,y,T,M,S){const g=f(_,x,y,T,M,S);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):n.unshift(g)}function p(_,x){n.length>1&&n.sort(_||AC),r.length>1&&r.sort(x||p0),l.length>1&&l.sort(x||p0)}function v(){for(let _=t,x=s.length;_<x;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function RC(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new m0,s.set(r,[f])):l>=c.length?(f=new m0,c.push(f)):f=c[l],f}function n(){s=new WeakMap}return{get:t,dispose:n}}function CC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new K,color:new Re};break;case"SpotLight":n={position:new K,direction:new K,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=n,n}}}function wC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let DC=0;function UC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function LC(s){const t=new CC,n=wC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new Ke,f=new Ke;function h(p){let v=0,_=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,T=0,M=0,S=0,g=0,U=0,b=0,D=0,P=0,O=0,F=0;p.sort(UC);for(let L=0,C=p.length;L<C;L++){const G=p[L],lt=G.color,it=G.intensity,ct=G.distance,pt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=lt.r*it,_+=lt.g*it,x+=lt.b*it;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],it);F++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Q=G.shadow,W=n.get(G);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=pt,r.directionalShadowMatrix[y]=G.shadow.matrix,U++}r.directional[y]=z,y++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(lt).multiplyScalar(it),z.distance=ct,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[M]=z;const Q=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,Q.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[M]=Q.matrix,G.castShadow){const W=n.get(G);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.spotShadow[M]=W,r.spotShadowMap[M]=pt,D++}M++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(lt).multiplyScalar(it),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=z,S++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const Q=G.shadow,W=n.get(G);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,r.pointShadow[T]=W,r.pointShadowMap[T]=pt,r.pointShadowMatrix[T]=G.shadow.matrix,b++}r.point[T]=z,T++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(it),z.groundColor.copy(G.groundColor).multiplyScalar(it),r.hemi[g]=z,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==M||X.rectAreaLength!==S||X.hemiLength!==g||X.numDirectionalShadows!==U||X.numPointShadows!==b||X.numSpotShadows!==D||X.numSpotMaps!==P||X.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=S,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=D+P-O,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,X.directionalLength=y,X.pointLength=T,X.spotLength=M,X.rectAreaLength=S,X.hemiLength=g,X.numDirectionalShadows=U,X.numPointShadows=b,X.numSpotShadows=D,X.numSpotMaps=P,X.numLightProbes=F,r.version=DC++)}function m(p,v){let _=0,x=0,y=0,T=0,M=0;const S=v.matrixWorldInverse;for(let g=0,U=p.length;g<U;g++){const b=p[g];if(b.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(b.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(b.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),T++}else if(b.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(S),x++}else if(b.isHemisphereLight){const D=r.hemi[M];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(S),M++}}}return{setup:h,setupView:m,state:r}}function g0(s){const t=new LC(s),n=[],r=[];function l(v){p.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function f(v){r.push(v)}function h(){t.setup(n)}function m(v){t.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function NC(s){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new g0(s),t.set(l,[h])):c>=f.length?(h=new g0(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const OC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PC=`uniform sampler2D shadow_pass;
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
}`;function IC(s,t,n){let r=new gp;const l=new ce,c=new ce,f=new nn,h=new $T({depthPacking:lT}),m=new tb,p={},v=n.maxTextureSize,_={[tr]:qn,[qn]:tr,[Pi]:Pi},x=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:OC,fragmentShader:PC}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ri;T.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ti(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let g=this.type;this.render=function(O,F,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const L=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Ja),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const it=g!==ha&&this.type===ha,ct=g===ha&&this.type!==ha;for(let pt=0,z=O.length;pt<z;pt++){const Q=O[pt],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const xt=W.getFrameExtents();if(l.multiply(xt),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/xt.x),l.x=c.x*xt.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/xt.y),l.y=c.y*xt.y,W.mapSize.y=c.y)),W.map===null||it===!0||ct===!0){const $=this.type!==ha?{minFilter:bi,magFilter:bi}:{};W.map!==null&&W.map.dispose(),W.map=new Ir(l.x,l.y,$),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const N=W.getViewportCount();for(let $=0;$<N;$++){const _t=W.getViewport($);f.set(c.x*_t.x,c.y*_t.y,c.x*_t.z,c.y*_t.w),lt.viewport(f),W.updateMatrices(Q,$),r=W.getFrustum(),D(F,X,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===ha&&U(W,X),W.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(L,C,G)};function U(O,F){const X=t.update(M);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ir(l.x,l.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,X,x,M,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,X,y,M,null)}function b(O,F,X,L){let C=null;const G=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)C=G;else if(C=X.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const lt=C.uuid,it=F.uuid;let ct=p[lt];ct===void 0&&(ct={},p[lt]=ct);let pt=ct[it];pt===void 0&&(pt=C.clone(),ct[it]=pt,F.addEventListener("dispose",P)),C=pt}if(C.visible=F.visible,C.wireframe=F.wireframe,L===ha?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=s.properties.get(C);lt.light=X}return C}function D(O,F,X,L,C){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ha)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const it=t.update(O),ct=O.material;if(Array.isArray(ct)){const pt=it.groups;for(let z=0,Q=pt.length;z<Q;z++){const W=pt[z],xt=ct[W.materialIndex];if(xt&&xt.visible){const N=b(O,xt,L,C);O.onBeforeShadow(s,O,F,X,it,N,W),s.renderBufferDirect(X,null,it,N,O,W),O.onAfterShadow(s,O,F,X,it,N,W)}}}else if(ct.visible){const pt=b(O,ct,L,C);O.onBeforeShadow(s,O,F,X,it,pt,null),s.renderBufferDirect(X,null,it,pt,O,null),O.onAfterShadow(s,O,F,X,it,pt,null)}}const lt=O.children;for(let it=0,ct=lt.length;it<ct;it++)D(lt[it],F,X,L,C)}function P(O){O.target.removeEventListener("dispose",P);for(const X in p){const L=p[X],C=O.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const zC={[cd]:ud,[fd]:pd,[hd]:md,[Fs]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:Fs};function BC(s,t){function n(){let k=!1;const Ot=new nn;let Tt=null;const Bt=new nn(0,0,0,0);return{setMask:function(At){Tt!==At&&!k&&(s.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){k=At},setClear:function(At,St,Wt,oe,Oe){Oe===!0&&(At*=oe,St*=oe,Wt*=oe),Ot.set(At,St,Wt,oe),Bt.equals(Ot)===!1&&(s.clearColor(At,St,Wt,oe),Bt.copy(Ot))},reset:function(){k=!1,Tt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Ot=!1,Tt=null,Bt=null,At=null;return{setReversed:function(St){if(Ot!==St){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Ot=St;const oe=At;At=null,this.setClear(oe)}},getReversed:function(){return Ot},setTest:function(St){St?Ct(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(St){Tt!==St&&!k&&(s.depthMask(St),Tt=St)},setFunc:function(St){if(Ot&&(St=zC[St]),Bt!==St){switch(St){case cd:s.depthFunc(s.NEVER);break;case ud:s.depthFunc(s.ALWAYS);break;case fd:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case hd:s.depthFunc(s.EQUAL);break;case dd:s.depthFunc(s.GEQUAL);break;case pd:s.depthFunc(s.GREATER);break;case md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=St}},setLocked:function(St){k=St},setClear:function(St){At!==St&&(Ot&&(St=1-St),s.clearDepth(St),At=St)},reset:function(){k=!1,Tt=null,Bt=null,At=null,Ot=!1}}}function l(){let k=!1,Ot=null,Tt=null,Bt=null,At=null,St=null,Wt=null,oe=null,Oe=null;return{setTest:function(Ce){k||(Ce?Ct(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Ce){Ot!==Ce&&!k&&(s.stencilMask(Ce),Ot=Ce)},setFunc:function(Ce,jn,_n){(Tt!==Ce||Bt!==jn||At!==_n)&&(s.stencilFunc(Ce,jn,_n),Tt=Ce,Bt=jn,At=_n)},setOp:function(Ce,jn,_n){(St!==Ce||Wt!==jn||oe!==_n)&&(s.stencilOp(Ce,jn,_n),St=Ce,Wt=jn,oe=_n)},setLocked:function(Ce){k=Ce},setClear:function(Ce){Oe!==Ce&&(s.clearStencil(Ce),Oe=Ce)},reset:function(){k=!1,Ot=null,Tt=null,Bt=null,At=null,St=null,Wt=null,oe=null,Oe=null}}}const c=new n,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},x=new WeakMap,y=[],T=null,M=!1,S=null,g=null,U=null,b=null,D=null,P=null,O=null,F=new Re(0,0,0),X=0,L=!1,C=null,G=null,lt=null,it=null,ct=null;const pt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Q>=2);let xt=null,N={};const $=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Mt=new nn().fromArray($),j=new nn().fromArray(_t);function dt(k,Ot,Tt,Bt){const At=new Uint8Array(4),St=s.createTexture();s.bindTexture(k,St),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Tt;Wt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Ot+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return St}const yt={};yt[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ct(s.DEPTH_TEST),f.setFunc(Fs),Te(!1),de(mv),Ct(s.CULL_FACE),H(Ja);function Ct(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function Dt(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function kt(k,Ot){return _[k]!==Ot?(s.bindFramebuffer(k,Ot),_[k]=Ot,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ot),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Gt(k,Ot){let Tt=y,Bt=!1;if(k){Tt=x.get(Ot),Tt===void 0&&(Tt=[],x.set(Ot,Tt));const At=k.textures;if(Tt.length!==At.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Wt=At.length;St<Wt;St++)Tt[St]=s.COLOR_ATTACHMENT0+St;Tt.length=At.length,Bt=!0}}else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(Tt)}function ue(k){return T!==k?(s.useProgram(k),T=k,!0):!1}const qt={[wr]:s.FUNC_ADD,[OE]:s.FUNC_SUBTRACT,[PE]:s.FUNC_REVERSE_SUBTRACT};qt[IE]=s.MIN,qt[zE]=s.MAX;const ie={[BE]:s.ZERO,[FE]:s.ONE,[HE]:s.SRC_COLOR,[od]:s.SRC_ALPHA,[YE]:s.SRC_ALPHA_SATURATE,[XE]:s.DST_COLOR,[VE]:s.DST_ALPHA,[GE]:s.ONE_MINUS_SRC_COLOR,[ld]:s.ONE_MINUS_SRC_ALPHA,[WE]:s.ONE_MINUS_DST_COLOR,[kE]:s.ONE_MINUS_DST_ALPHA,[qE]:s.CONSTANT_COLOR,[jE]:s.ONE_MINUS_CONSTANT_COLOR,[ZE]:s.CONSTANT_ALPHA,[KE]:s.ONE_MINUS_CONSTANT_ALPHA};function H(k,Ot,Tt,Bt,At,St,Wt,oe,Oe,Ce){if(k===Ja){M===!0&&(Dt(s.BLEND),M=!1);return}if(M===!1&&(Ct(s.BLEND),M=!0),k!==NE){if(k!==S||Ce!==L){if((g!==wr||D!==wr)&&(s.blendEquation(s.FUNC_ADD),g=wr,D=wr),Ce)switch(k){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gv:s.blendFunc(s.ONE,s.ONE);break;case _v:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _v:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,b=null,P=null,O=null,F.set(0,0,0),X=0,S=k,L=Ce}return}At=At||Ot,St=St||Tt,Wt=Wt||Bt,(Ot!==g||At!==D)&&(s.blendEquationSeparate(qt[Ot],qt[At]),g=Ot,D=At),(Tt!==U||Bt!==b||St!==P||Wt!==O)&&(s.blendFuncSeparate(ie[Tt],ie[Bt],ie[St],ie[Wt]),U=Tt,b=Bt,P=St,O=Wt),(oe.equals(F)===!1||Oe!==X)&&(s.blendColor(oe.r,oe.g,oe.b,Oe),F.copy(oe),X=Oe),S=k,L=!1}function $e(k,Ot){k.side===Pi?Dt(s.CULL_FACE):Ct(s.CULL_FACE);let Tt=k.side===qn;Ot&&(Tt=!Tt),Te(Tt),k.blending===Is&&k.transparent===!1?H(Ja):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ct(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function de(k){k!==DE?(Ct(s.CULL_FACE),k!==G&&(k===mv?s.cullFace(s.BACK):k===UE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),G=k}function Vt(k){k!==lt&&(z&&s.lineWidth(k),lt=k)}function pe(k,Ot,Tt){k?(Ct(s.POLYGON_OFFSET_FILL),(it!==Ot||ct!==Tt)&&(s.polygonOffset(Ot,Tt),it=Ot,ct=Tt)):Dt(s.POLYGON_OFFSET_FILL)}function Xt(k){k?Ct(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function Jt(k){k===void 0&&(k=s.TEXTURE0+pt-1),xt!==k&&(s.activeTexture(k),xt=k)}function Qe(k,Ot,Tt){Tt===void 0&&(xt===null?Tt=s.TEXTURE0+pt-1:Tt=xt);let Bt=N[Tt];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[Tt]=Bt),(Bt.type!==k||Bt.texture!==Ot)&&(xt!==Tt&&(s.activeTexture(Tt),xt=Tt),s.bindTexture(k,Ot||yt[k]),Bt.type=k,Bt.texture=Ot)}function I(){const k=N[xt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function Qt(k){j.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function $t(k,Ot){let Tt=p.get(Ot);Tt===void 0&&(Tt=new WeakMap,p.set(Ot,Tt));let Bt=Tt.get(k);Bt===void 0&&(Bt=s.getUniformBlockIndex(Ot,k.name),Tt.set(k,Bt))}function Ut(k,Ot){const Bt=p.get(Ot).get(k);m.get(Ot)!==Bt&&(s.uniformBlockBinding(Ot,Bt,k.__bindingPointIndex),m.set(Ot,Bt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},xt=null,N={},_={},x=new WeakMap,y=[],T=null,M=!1,S=null,g=null,U=null,b=null,D=null,P=null,O=null,F=new Re(0,0,0),X=0,L=!1,C=null,G=null,lt=null,it=null,ct=null,Mt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ct,disable:Dt,bindFramebuffer:kt,drawBuffers:Gt,useProgram:ue,setBlending:H,setMaterial:$e,setFlipSided:Te,setCullFace:de,setLineWidth:Vt,setPolygonOffset:pe,setScissorTest:Xt,activeTexture:Jt,bindTexture:Qe,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:et,texImage2D:jt,texImage3D:Et,updateUBOMapping:$t,uniformBlockBinding:Ut,texStorage2D:wt,texStorage3D:Ht,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Nt,scissor:zt,viewport:Qt,reset:le}}function FC(s,t,n,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,v=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,A){return y?new OffscreenCanvas(I,A):nl("canvas")}function M(I,A,et){let ht=1;const mt=Qe(I);if((mt.width>et||mt.height>et)&&(ht=et/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ut=Math.floor(ht*mt.width),Nt=Math.floor(ht*mt.height);_===void 0&&(_=T(ut,Nt));const wt=A?T(ut,Nt):_;return wt.width=ut,wt.height=Nt,wt.getContext("2d").drawImage(I,0,0,ut,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+Nt+")."),wt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),I;return I}function S(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,A,et,ht,mt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ut=A;if(A===s.RED&&(et===s.FLOAT&&(ut=s.R32F),et===s.HALF_FLOAT&&(ut=s.R16F),et===s.UNSIGNED_BYTE&&(ut=s.R8)),A===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.R8UI),et===s.UNSIGNED_SHORT&&(ut=s.R16UI),et===s.UNSIGNED_INT&&(ut=s.R32UI),et===s.BYTE&&(ut=s.R8I),et===s.SHORT&&(ut=s.R16I),et===s.INT&&(ut=s.R32I)),A===s.RG&&(et===s.FLOAT&&(ut=s.RG32F),et===s.HALF_FLOAT&&(ut=s.RG16F),et===s.UNSIGNED_BYTE&&(ut=s.RG8)),A===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RG8UI),et===s.UNSIGNED_SHORT&&(ut=s.RG16UI),et===s.UNSIGNED_INT&&(ut=s.RG32UI),et===s.BYTE&&(ut=s.RG8I),et===s.SHORT&&(ut=s.RG16I),et===s.INT&&(ut=s.RG32I)),A===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),et===s.UNSIGNED_INT&&(ut=s.RGB32UI),et===s.BYTE&&(ut=s.RGB8I),et===s.SHORT&&(ut=s.RGB16I),et===s.INT&&(ut=s.RGB32I)),A===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),et===s.UNSIGNED_INT&&(ut=s.RGBA32UI),et===s.BYTE&&(ut=s.RGBA8I),et===s.SHORT&&(ut=s.RGBA16I),et===s.INT&&(ut=s.RGBA32I)),A===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),A===s.RGBA){const Nt=mt?nu:De.getTransfer(ht);et===s.FLOAT&&(ut=s.RGBA32F),et===s.HALF_FLOAT&&(ut=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ut=Nt===Ge?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(I,A){let et;return I?A===null||A===Or||A===$o?et=s.DEPTH24_STENCIL8:A===da?et=s.DEPTH32F_STENCIL8:A===Jo&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Or||A===$o?et=s.DEPTH_COMPONENT24:A===da?et=s.DEPTH_COMPONENT32F:A===Jo&&(et=s.DEPTH_COMPONENT16),et}function P(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==bi&&I.minFilter!==Ii?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function O(I){const A=I.target;A.removeEventListener("dispose",O),X(A),A.isVideoTexture&&v.delete(A)}function F(I){const A=I.target;A.removeEventListener("dispose",F),C(A)}function X(I){const A=r.get(I);if(A.__webglInit===void 0)return;const et=I.source,ht=x.get(et);if(ht){const mt=ht[A.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&L(I),Object.keys(ht).length===0&&x.delete(et)}r.remove(I)}function L(I){const A=r.get(I);s.deleteTexture(A.__webglTexture);const et=I.source,ht=x.get(et);delete ht[A.__cacheKey],f.memory.textures--}function C(I){const A=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(A.__webglFramebuffer[ht]))for(let mt=0;mt<A.__webglFramebuffer[ht].length;mt++)s.deleteFramebuffer(A.__webglFramebuffer[ht][mt]);else s.deleteFramebuffer(A.__webglFramebuffer[ht]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ht])}else{if(Array.isArray(A.__webglFramebuffer))for(let ht=0;ht<A.__webglFramebuffer.length;ht++)s.deleteFramebuffer(A.__webglFramebuffer[ht]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ht=0;ht<A.__webglColorRenderbuffer.length;ht++)A.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ht]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=I.textures;for(let ht=0,mt=et.length;ht<mt;ht++){const ut=r.get(et[ht]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),f.memory.textures--),r.remove(et[ht])}r.remove(I)}let G=0;function lt(){G=0}function it(){const I=G;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),G+=1,I}function ct(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function pt(I,A){const et=r.get(I);if(I.isVideoTexture&&Xt(I),I.isRenderTargetTexture===!1&&I.version>0&&et.__version!==I.version){const ht=I.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(et,I,A);return}}n.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+A)}function z(I,A){const et=r.get(I);if(I.version>0&&et.__version!==I.version){yt(et,I,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+A)}function Q(I,A){const et=r.get(I);if(I.version>0&&et.__version!==I.version){yt(et,I,A);return}n.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+A)}function W(I,A){const et=r.get(I);if(I.version>0&&et.__version!==I.version){Ct(et,I,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+A)}const xt={[vd]:s.REPEAT,[Lr]:s.CLAMP_TO_EDGE,[Sd]:s.MIRRORED_REPEAT},N={[bi]:s.NEAREST,[sT]:s.NEAREST_MIPMAP_NEAREST,[xc]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[Eh]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},$={[uT]:s.NEVER,[gT]:s.ALWAYS,[fT]:s.LESS,[Z0]:s.LEQUAL,[hT]:s.EQUAL,[mT]:s.GEQUAL,[dT]:s.GREATER,[pT]:s.NOTEQUAL};function _t(I,A){if(A.type===da&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ii||A.magFilter===Eh||A.magFilter===xc||A.magFilter===Nr||A.minFilter===Ii||A.minFilter===Eh||A.minFilter===xc||A.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,xt[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,xt[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,xt[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,N[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bi||A.minFilter!==xc&&A.minFilter!==Nr||A.type===da&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(I,A){let et=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",O));const ht=A.source;let mt=x.get(ht);mt===void 0&&(mt={},x.set(ht,mt));const ut=ct(A);if(ut!==I.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,et=!0),mt[ut].usedTimes++;const Nt=mt[I.__cacheKey];Nt!==void 0&&(mt[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&L(A)),I.__cacheKey=ut,I.__webglTexture=mt[ut].texture}return et}function j(I,A,et){return Math.floor(Math.floor(I/et)/A)}function dt(I,A,et,ht){const ut=I.updateRanges;if(ut.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,et,ht,A.data);else{ut.sort((Et,zt)=>Et.start-zt.start);let Nt=0;for(let Et=1;Et<ut.length;Et++){const zt=ut[Nt],Qt=ut[Et],$t=zt.start+zt.count,Ut=j(Qt.start,A.width,4),le=j(zt.start,A.width,4);Qt.start<=$t+1&&Ut===le&&j(Qt.start+Qt.count-1,A.width,4)===Ut?zt.count=Math.max(zt.count,Qt.start+Qt.count-zt.start):(++Nt,ut[Nt]=Qt)}ut.length=Nt+1;const wt=s.getParameter(s.UNPACK_ROW_LENGTH),Ht=s.getParameter(s.UNPACK_SKIP_PIXELS),jt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Et=0,zt=ut.length;Et<zt;Et++){const Qt=ut[Et],$t=Math.floor(Qt.start/4),Ut=Math.ceil(Qt.count/4),le=$t%A.width,k=Math.floor($t/A.width),Ot=Ut,Tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),n.texSubImage2D(s.TEXTURE_2D,0,le,k,Ot,Tt,et,ht,A.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,wt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,jt)}}function yt(I,A,et){let ht=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ht=s.TEXTURE_3D);const mt=Mt(I,A),ut=A.source;n.bindTexture(ht,I.__webglTexture,s.TEXTURE0+et);const Nt=r.get(ut);if(ut.version!==Nt.__version||mt===!0){n.activeTexture(s.TEXTURE0+et);const wt=De.getPrimaries(De.workingColorSpace),Ht=A.colorSpace===Qa?null:De.getPrimaries(A.colorSpace),jt=A.colorSpace===Qa||wt===Ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Et=M(A.image,!1,l.maxTextureSize);Et=Jt(A,Et);const zt=c.convert(A.format,A.colorSpace),Qt=c.convert(A.type);let $t=b(A.internalFormat,zt,Qt,A.colorSpace,A.isVideoTexture);_t(ht,A);let Ut;const le=A.mipmaps,k=A.isVideoTexture!==!0,Ot=Nt.__version===void 0||mt===!0,Tt=ut.dataReady,Bt=P(A,Et);if(A.isDepthTexture)$t=D(A.format===el,A.type),Ot&&(k?n.texStorage2D(s.TEXTURE_2D,1,$t,Et.width,Et.height):n.texImage2D(s.TEXTURE_2D,0,$t,Et.width,Et.height,0,zt,Qt,null));else if(A.isDataTexture)if(le.length>0){k&&Ot&&n.texStorage2D(s.TEXTURE_2D,Bt,$t,le[0].width,le[0].height);for(let At=0,St=le.length;At<St;At++)Ut=le[At],k?Tt&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,Ut.width,Ut.height,zt,Qt,Ut.data):n.texImage2D(s.TEXTURE_2D,At,$t,Ut.width,Ut.height,0,zt,Qt,Ut.data);A.generateMipmaps=!1}else k?(Ot&&n.texStorage2D(s.TEXTURE_2D,Bt,$t,Et.width,Et.height),Tt&&dt(A,Et,zt,Qt)):n.texImage2D(s.TEXTURE_2D,0,$t,Et.width,Et.height,0,zt,Qt,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){k&&Ot&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,$t,le[0].width,le[0].height,Et.depth);for(let At=0,St=le.length;At<St;At++)if(Ut=le[At],A.format!==Ei)if(zt!==null)if(k){if(Tt)if(A.layerUpdates.size>0){const Wt=Yv(Ut.width,Ut.height,A.format,A.type);for(const oe of A.layerUpdates){const Oe=Ut.data.subarray(oe*Wt/Ut.data.BYTES_PER_ELEMENT,(oe+1)*Wt/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,oe,Ut.width,Ut.height,1,zt,Oe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,Et.depth,zt,Ut.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,$t,Ut.width,Ut.height,Et.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,Et.depth,zt,Qt,Ut.data):n.texImage3D(s.TEXTURE_2D_ARRAY,At,$t,Ut.width,Ut.height,Et.depth,0,zt,Qt,Ut.data)}else{k&&Ot&&n.texStorage2D(s.TEXTURE_2D,Bt,$t,le[0].width,le[0].height);for(let At=0,St=le.length;At<St;At++)Ut=le[At],A.format!==Ei?zt!==null?k?Tt&&n.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Ut.width,Ut.height,zt,Ut.data):n.compressedTexImage2D(s.TEXTURE_2D,At,$t,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,Ut.width,Ut.height,zt,Qt,Ut.data):n.texImage2D(s.TEXTURE_2D,At,$t,Ut.width,Ut.height,0,zt,Qt,Ut.data)}else if(A.isDataArrayTexture)if(k){if(Ot&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,$t,Et.width,Et.height,Et.depth),Tt)if(A.layerUpdates.size>0){const At=Yv(Et.width,Et.height,A.format,A.type);for(const St of A.layerUpdates){const Wt=Et.data.subarray(St*At/Et.data.BYTES_PER_ELEMENT,(St+1)*At/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,zt,Qt,Wt)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,zt,Qt,Et.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,$t,Et.width,Et.height,Et.depth,0,zt,Qt,Et.data);else if(A.isData3DTexture)k?(Ot&&n.texStorage3D(s.TEXTURE_3D,Bt,$t,Et.width,Et.height,Et.depth),Tt&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,zt,Qt,Et.data)):n.texImage3D(s.TEXTURE_3D,0,$t,Et.width,Et.height,Et.depth,0,zt,Qt,Et.data);else if(A.isFramebufferTexture){if(Ot)if(k)n.texStorage2D(s.TEXTURE_2D,Bt,$t,Et.width,Et.height);else{let At=Et.width,St=Et.height;for(let Wt=0;Wt<Bt;Wt++)n.texImage2D(s.TEXTURE_2D,Wt,$t,At,St,0,zt,Qt,null),At>>=1,St>>=1}}else if(le.length>0){if(k&&Ot){const At=Qe(le[0]);n.texStorage2D(s.TEXTURE_2D,Bt,$t,At.width,At.height)}for(let At=0,St=le.length;At<St;At++)Ut=le[At],k?Tt&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,zt,Qt,Ut):n.texImage2D(s.TEXTURE_2D,At,$t,zt,Qt,Ut);A.generateMipmaps=!1}else if(k){if(Ot){const At=Qe(Et);n.texStorage2D(s.TEXTURE_2D,Bt,$t,At.width,At.height)}Tt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,Qt,Et)}else n.texImage2D(s.TEXTURE_2D,0,$t,zt,Qt,Et);S(A)&&g(ht),Nt.__version=ut.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ct(I,A,et){if(A.image.length!==6)return;const ht=Mt(I,A),mt=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+et);const ut=r.get(mt);if(mt.version!==ut.__version||ht===!0){n.activeTexture(s.TEXTURE0+et);const Nt=De.getPrimaries(De.workingColorSpace),wt=A.colorSpace===Qa?null:De.getPrimaries(A.colorSpace),Ht=A.colorSpace===Qa||Nt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const jt=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!jt&&!Et?zt[St]=M(A.image[St],!0,l.maxCubemapSize):zt[St]=Et?A.image[St].image:A.image[St],zt[St]=Jt(A,zt[St]);const Qt=zt[0],$t=c.convert(A.format,A.colorSpace),Ut=c.convert(A.type),le=b(A.internalFormat,$t,Ut,A.colorSpace),k=A.isVideoTexture!==!0,Ot=ut.__version===void 0||ht===!0,Tt=mt.dataReady;let Bt=P(A,Qt);_t(s.TEXTURE_CUBE_MAP,A);let At;if(jt){k&&Ot&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,le,Qt.width,Qt.height);for(let St=0;St<6;St++){At=zt[St].mipmaps;for(let Wt=0;Wt<At.length;Wt++){const oe=At[Wt];A.format!==Ei?$t!==null?k?Tt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,oe.width,oe.height,$t,oe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,le,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,oe.width,oe.height,$t,Ut,oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,le,oe.width,oe.height,0,$t,Ut,oe.data)}}}else{if(At=A.mipmaps,k&&Ot){At.length>0&&Bt++;const St=Qe(zt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,le,St.width,St.height)}for(let St=0;St<6;St++)if(Et){k?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,$t,Ut,zt[St].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,zt[St].width,zt[St].height,0,$t,Ut,zt[St].data);for(let Wt=0;Wt<At.length;Wt++){const Oe=At[Wt].image[St].image;k?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Oe.width,Oe.height,$t,Ut,Oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,le,Oe.width,Oe.height,0,$t,Ut,Oe.data)}}else{k?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,$t,Ut,zt[St]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,$t,Ut,zt[St]);for(let Wt=0;Wt<At.length;Wt++){const oe=At[Wt];k?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,$t,Ut,oe.image[St]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,le,$t,Ut,oe.image[St])}}}S(A)&&g(s.TEXTURE_CUBE_MAP),ut.__version=mt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Dt(I,A,et,ht,mt,ut){const Nt=c.convert(et.format,et.colorSpace),wt=c.convert(et.type),Ht=b(et.internalFormat,Nt,wt,et.colorSpace),jt=r.get(A),Et=r.get(et);if(Et.__renderTarget=A,!jt.__hasExternalTextures){const zt=Math.max(1,A.width>>ut),Qt=Math.max(1,A.height>>ut);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?n.texImage3D(mt,ut,Ht,zt,Qt,A.depth,0,Nt,wt,null):n.texImage2D(mt,ut,Ht,zt,Qt,0,Nt,wt,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,mt,Et.__webglTexture,0,Vt(A)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,mt,Et.__webglTexture,ut),n.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(I,A,et){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){const ht=A.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ut=D(A.stencilBuffer,mt),Nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=Vt(A);pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ut,A.width,A.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ut,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ut,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,I)}else{const ht=A.textures;for(let mt=0;mt<ht.length;mt++){const ut=ht[mt],Nt=c.convert(ut.format,ut.colorSpace),wt=c.convert(ut.type),Ht=b(ut.internalFormat,Nt,wt,ut.colorSpace),jt=Vt(A);et&&pe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Ht,A.width,A.height):pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,Ht,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ht,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(A.depthTexture);ht.__renderTarget=A,(!ht.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt(A.depthTexture,0);const mt=ht.__webglTexture,ut=Vt(A);if(A.depthTexture.format===tl)pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(A.depthTexture.format===el)pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ue(I){const A=r.get(I),et=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ht=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ht){const mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),A.__depthDisposeCallback=mt}A.__boundDepthTexture=ht}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=I.texture.mipmaps;ht&&ht.length>0?Gt(A.__webglFramebuffer[0],I):Gt(A.__webglFramebuffer,I)}else if(et){A.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ht]),A.__webglDepthbuffer[ht]===void 0)A.__webglDepthbuffer[ht]=s.createRenderbuffer(),kt(A.__webglDepthbuffer[ht],I,!1);else{const mt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}else{const ht=I.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),kt(A.__webglDepthbuffer,I,!1);else{const mt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(I,A,et){const ht=r.get(I);A!==void 0&&Dt(ht.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&ue(I)}function ie(I){const A=I.texture,et=r.get(I),ht=r.get(A);I.addEventListener("dispose",F);const mt=I.textures,ut=I.isWebGLCubeRenderTarget===!0,Nt=mt.length>1;if(Nt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=A.version,f.memory.textures++),ut){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let Ht=0;Ht<A.mipmaps.length;Ht++)et.__webglFramebuffer[wt][Ht]=s.createFramebuffer()}else et.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)et.__webglFramebuffer[wt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let wt=0,Ht=mt.length;wt<Ht;wt++){const jt=r.get(mt[wt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),f.memory.textures++)}if(I.samples>0&&pe(I)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<mt.length;wt++){const Ht=mt[wt];et.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const jt=c.convert(Ht.format,Ht.colorSpace),Et=c.convert(Ht.type),zt=b(Ht.internalFormat,jt,Et,Ht.colorSpace,I.isXRRenderTarget===!0),Qt=Vt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,zt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(et.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){n.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),_t(s.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ht=0;Ht<A.mipmaps.length;Ht++)Dt(et.__webglFramebuffer[wt][Ht],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht);else Dt(et.__webglFramebuffer[wt],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(A)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Nt){for(let wt=0,Ht=mt.length;wt<Ht;wt++){const jt=mt[wt],Et=r.get(jt);n.bindTexture(s.TEXTURE_2D,Et.__webglTexture),_t(s.TEXTURE_2D,jt),Dt(et.__webglFramebuffer,I,jt,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),S(jt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let wt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(wt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(wt,ht.__webglTexture),_t(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Ht=0;Ht<A.mipmaps.length;Ht++)Dt(et.__webglFramebuffer[Ht],I,A,s.COLOR_ATTACHMENT0,wt,Ht);else Dt(et.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,wt,0);S(A)&&g(wt),n.unbindTexture()}I.depthBuffer&&ue(I)}function H(I){const A=I.textures;for(let et=0,ht=A.length;et<ht;et++){const mt=A[et];if(S(mt)){const ut=U(I),Nt=r.get(mt).__webglTexture;n.bindTexture(ut,Nt),g(ut),n.unbindTexture()}}}const $e=[],Te=[];function de(I){if(I.samples>0){if(pe(I)===!1){const A=I.textures,et=I.width,ht=I.height;let mt=s.COLOR_BUFFER_BIT;const ut=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=r.get(I),wt=A.length>1;if(wt)for(let jt=0;jt<A.length;jt++)n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ht=I.texture.mipmaps;Ht&&Ht.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let jt=0;jt<A.length;jt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[jt]);const Et=r.get(A[jt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,et,ht,0,0,et,ht,mt,s.NEAREST),m===!0&&($e.length=0,Te.length=0,$e.push(s.COLOR_ATTACHMENT0+jt),I.depthBuffer&&I.resolveDepthBuffer===!1&&($e.push(ut),Te.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let jt=0;jt<A.length;jt++){n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[jt]);const Et=r.get(A[jt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.TEXTURE_2D,Et,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Vt(I){return Math.min(l.maxSamples,I.samples)}function pe(I){const A=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(I){const A=f.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function Jt(I,A){const et=I.colorSpace,ht=I.format,mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||et!==Vs&&et!==Qa&&(De.getTransfer(et)===Ge?(ht!==Ei||mt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=lt,this.setTexture2D=pt,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=qt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=pe}function HC(s,t){function n(r,l=Qa){let c;const f=De.getTransfer(l);if(r===zi)return s.UNSIGNED_BYTE;if(r===lp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===V0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===H0)return s.BYTE;if(r===G0)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===op)return s.INT;if(r===Or)return s.UNSIGNED_INT;if(r===da)return s.FLOAT;if(r===rl)return s.HALF_FLOAT;if(r===k0)return s.ALPHA;if(r===X0)return s.RGB;if(r===Ei)return s.RGBA;if(r===tl)return s.DEPTH_COMPONENT;if(r===el)return s.DEPTH_STENCIL;if(r===W0)return s.RED;if(r===up)return s.RED_INTEGER;if(r===Y0)return s.RG;if(r===fp)return s.RG_INTEGER;if(r===hp)return s.RGBA_INTEGER;if(r===jc||r===Zc||r===Kc||r===Qc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xd||r===yd||r===Md||r===Ed)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td||r===bd||r===Ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Td||r===bd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ad)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===Id||r===zd||r===Bd||r===Fd||r===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Rd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jc||r===Gd||r===Vd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Jc)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===q0||r===kd||r===Xd||r===Wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Jc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VC=`
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

}`;class kC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const l=new Fn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new er({vertexShader:GC,fragmentShader:VC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ti(new cu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XC extends Br{constructor(t,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,_=null,x=null,y=null,T=null;const M=new kC,S=n.getContextAttributes();let g=null,U=null;const b=[],D=[],P=new ce;let O=null;const F=new mi;F.viewport=new nn;const X=new mi;X.viewport=new nn;const L=[F,X],C=new cb;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=b[j];return dt===void 0&&(dt=new Wh,b[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=b[j];return dt===void 0&&(dt=new Wh,b[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=b[j];return dt===void 0&&(dt=new Wh,b[j]=dt),dt.getHandSpace()};function it(j){const dt=D.indexOf(j.inputSource);if(dt===-1)return;const yt=b[dt];yt!==void 0&&(yt.update(j.inputSource,j.frame,p||f),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function ct(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",pt);for(let j=0;j<b.length;j++){const dt=D[j];dt!==null&&(D[j]=null,b[j].disconnect(dt))}G=null,lt=null,M.reset(),t.setRenderTarget(g),y=null,x=null,_=null,l=null,U=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",pt),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ct=null,Dt=null;S.depth&&(Dt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=S.stencil?el:tl,Ct=S.stencil?$o:Or);const kt={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:c};_=new XRWebGLBinding(l,n),x=_.createProjectionLayer(kt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Ir(x.textureWidth,x.textureHeight,{format:Ei,type:zi,depthTexture:new rS(x.textureWidth,x.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Ir(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function pt(j){for(let dt=0;dt<j.removed.length;dt++){const yt=j.removed[dt],Ct=D.indexOf(yt);Ct>=0&&(D[Ct]=null,b[Ct].disconnect(yt))}for(let dt=0;dt<j.added.length;dt++){const yt=j.added[dt];let Ct=D.indexOf(yt);if(Ct===-1){for(let kt=0;kt<b.length;kt++)if(kt>=D.length){D.push(yt),Ct=kt;break}else if(D[kt]===null){D[kt]=yt,Ct=kt;break}if(Ct===-1)break}const Dt=b[Ct];Dt&&Dt.connect(yt)}}const z=new K,Q=new K;function W(j,dt,yt){z.setFromMatrixPosition(dt.matrixWorld),Q.setFromMatrixPosition(yt.matrixWorld);const Ct=z.distanceTo(Q),Dt=dt.projectionMatrix.elements,kt=yt.projectionMatrix.elements,Gt=Dt[14]/(Dt[10]-1),ue=Dt[14]/(Dt[10]+1),qt=(Dt[9]+1)/Dt[5],ie=(Dt[9]-1)/Dt[5],H=(Dt[8]-1)/Dt[0],$e=(kt[8]+1)/kt[0],Te=Gt*H,de=Gt*$e,Vt=Ct/(-H+$e),pe=Vt*-H;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pe),j.translateZ(Vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Dt[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xt=Gt+Vt,Jt=ue+Vt,Qe=Te-pe,I=de+(Ct-pe),A=qt*ue/Jt*Xt,et=ie*ue/Jt*Xt;j.projectionMatrix.makePerspective(Qe,I,A,et,Xt,Jt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let dt=j.near,yt=j.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),C.near=X.near=F.near=dt,C.far=X.far=F.far=yt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),F.layers.mask=j.layers.mask|2,X.layers.mask=j.layers.mask|4,C.layers.mask=F.layers.mask|X.layers.mask;const Ct=j.parent,Dt=C.cameras;xt(C,Ct);for(let kt=0;kt<Dt.length;kt++)xt(Dt[kt],Ct);Dt.length===2?W(C,F,X):C.projectionMatrix.copy(F.projectionMatrix),N(j,C,Ct)};function N(j,dt,yt){yt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Yd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(j){m=j,x!==null&&(x.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let $=null;function _t(j,dt){if(v=dt.getViewerPose(p||f),T=dt,v!==null){const yt=v.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ct=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,Ct=!0);for(let Gt=0;Gt<yt.length;Gt++){const ue=yt[Gt];let qt=null;if(y!==null)qt=y.getViewport(ue);else{const H=_.getViewSubImage(x,ue);qt=H.viewport,Gt===0&&(t.setRenderTargetTextures(U,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(U))}let ie=L[Gt];ie===void 0&&(ie=new mi,ie.layers.enable(Gt),ie.viewport=new nn,L[Gt]=ie),ie.matrix.fromArray(ue.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(qt.x,qt.y,qt.width,qt.height),Gt===0&&(C.matrix.copy(ie.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ct===!0&&C.cameras.push(ie)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Gt=_.getDepthInformation(yt[0]);Gt&&Gt.isValid&&Gt.texture&&M.init(t,Gt,l.renderState)}}for(let yt=0;yt<b.length;yt++){const Ct=D[yt],Dt=b[yt];Ct!==null&&Dt!==void 0&&Dt.update(Ct,dt,p||f)}$&&$(j,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),T=null}const Mt=new lS;Mt.setAnimationLoop(_t),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}const Ar=new Bi,WC=new Ke;function YC(s,t){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,eS(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,U,b,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),v(S,g)):g.isMeshStandardMaterial?(c(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,D)):g.isMeshMatcapMaterial?(c(S,g),T(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),M(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?m(S,g,U,b):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===qn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===qn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const U=t.get(g),b=U.envMap,D=U.envMapRotation;b&&(S.envMap.value=b,Ar.copy(D),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(WC.makeRotationFromEuler(Ar)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,U,b){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*U,S.scale.value=b*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,U){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,g){g.matcap&&(S.matcap.value=g.matcap)}function M(S,g){const U=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qC(s,t,n,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,b){const D=b.program;r.uniformBlockBinding(U,D)}function p(U,b){let D=l[U.id];D===void 0&&(T(U),D=v(U),l[U.id]=D,U.addEventListener("dispose",S));const P=b.program;r.updateUBOMapping(U,P);const O=t.render.frame;c[U.id]!==O&&(x(U),c[U.id]=O)}function v(U){const b=_();U.__bindingPointIndex=b;const D=s.createBuffer(),P=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,P,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,D),D}function _(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const b=l[U.id],D=U.uniforms,P=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let O=0,F=D.length;O<F;O++){const X=Array.isArray(D[O])?D[O]:[D[O]];for(let L=0,C=X.length;L<C;L++){const G=X[L];if(y(G,O,L,P)===!0){const lt=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let ct=0;for(let pt=0;pt<it.length;pt++){const z=it[pt],Q=M(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,lt+ct,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,ct),ct+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,b,D,P){const O=U.value,F=b+"_"+D;if(P[F]===void 0)return typeof O=="number"||typeof O=="boolean"?P[F]=O:P[F]=O.clone(),!0;{const X=P[F];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return P[F]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function T(U){const b=U.uniforms;let D=0;const P=16;for(let F=0,X=b.length;F<X;F++){const L=Array.isArray(b[F])?b[F]:[b[F]];for(let C=0,G=L.length;C<G;C++){const lt=L[C],it=Array.isArray(lt.value)?lt.value:[lt.value];for(let ct=0,pt=it.length;ct<pt;ct++){const z=it[ct],Q=M(z),W=D%P,xt=W%Q.boundary,N=W+xt;D+=xt,N!==0&&P-N<Q.storage&&(D+=P-N),lt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=Q.storage}}}const O=D%P;return O>0&&(D+=P-O),U.__size=D,U.__cache={},this}function M(U){const b={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(b.boundary=4,b.storage=4):U.isVector2?(b.boundary=8,b.storage=8):U.isVector3||U.isColor?(b.boundary=16,b.storage=12):U.isVector4?(b.boundary=16,b.storage=16):U.isMatrix3?(b.boundary=48,b.storage=48):U.isMatrix4?(b.boundary=64,b.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),b}function S(U){const b=U.target;b.removeEventListener("dispose",S);const D=f.indexOf(b.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[b.id]),delete l[b.id],delete c[b.id]}function g(){for(const U in l)s.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:g}}class jC{constructor(t={}){const{canvas:n=ST(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),M=new Int32Array(4);let S=null,g=null;const U=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1;this._outputColorSpace=pi;let O=0,F=0,X=null,L=-1,C=null;const G=new nn,lt=new nn;let it=null;const ct=new Re(0);let pt=0,z=n.width,Q=n.height,W=1,xt=null,N=null;const $=new nn(0,0,z,Q),_t=new nn(0,0,z,Q);let Mt=!1;const j=new gp;let dt=!1,yt=!1;const Ct=new Ke,Dt=new Ke,kt=new K,Gt=new nn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function ie(){return X===null?W:1}let H=r;function $e(w,q){return n.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",At,!1),n.addEventListener("webglcontextcreationerror",St,!1),H===null){const q="webgl2";if(H=$e(q,w),H===null)throw $e(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,de,Vt,pe,Xt,Jt,Qe,I,A,et,ht,mt,ut,Nt,wt,Ht,jt,Et,zt,Qt,$t,Ut,le,k;function Ot(){Te=new aR(H),Te.init(),Ut=new HC(H,Te),de=new Q1(H,Te,t,Ut),Vt=new BC(H,Te),de.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),pe=new oR(H),Xt=new bC,Jt=new FC(H,Te,Vt,Xt,de,Ut,pe),Qe=new $1(D),I=new iR(D),A=new db(H),le=new Z1(H,A),et=new rR(H,A,pe,le),ht=new cR(H,et,A,pe),zt=new lR(H,de,Jt),Ht=new J1(Xt),mt=new TC(D,Qe,I,Te,de,le,Ht),ut=new YC(D,Xt),Nt=new RC,wt=new NC(Te),Et=new j1(D,Qe,I,Vt,ht,y,m),jt=new IC(D,ht,de),k=new qC(H,pe,de,Vt),Qt=new K1(H,Te,pe),$t=new sR(H,Te,pe),pe.programs=mt.programs,D.capabilities=de,D.extensions=Te,D.properties=Xt,D.renderLists=Nt,D.shadowMap=jt,D.state=Vt,D.info=pe}Ot();const Tt=new XC(D,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(z,Q,!1))},this.getSize=function(w){return w.set(z,Q)},this.setSize=function(w,q,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Q=q,n.width=Math.floor(w*W),n.height=Math.floor(q*W),st===!0&&(n.style.width=w+"px",n.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(z*W,Q*W).floor()},this.setDrawingBufferSize=function(w,q,st){z=w,Q=q,W=st,n.width=Math.floor(w*st),n.height=Math.floor(q*st),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,st,ot){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,st,ot),Vt.viewport(G.copy($).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(_t)},this.setScissor=function(w,q,st,ot){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,q,st,ot),Vt.scissor(lt.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){Vt.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,st=!0){let ot=0;if(w){let Z=!1;if(X!==null){const bt=X.texture.format;Z=bt===hp||bt===fp||bt===up}if(Z){const bt=X.texture.type,Lt=bt===zi||bt===Or||bt===Jo||bt===$o||bt===lp||bt===cp,It=Et.getClearColor(),Ft=Et.getClearAlpha(),re=It.r,ee=It.g,Zt=It.b;Lt?(T[0]=re,T[1]=ee,T[2]=Zt,T[3]=Ft,H.clearBufferuiv(H.COLOR,0,T)):(M[0]=re,M[1]=ee,M[2]=Zt,M[3]=Ft,H.clearBufferiv(H.COLOR,0,M))}else ot|=H.COLOR_BUFFER_BIT}q&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",At,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),Nt.dispose(),wt.dispose(),Xt.dispose(),Qe.dispose(),I.dispose(),ht.dispose(),le.dispose(),k.dispose(),mt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",un),Tt.removeEventListener("sessionend",Tn),Hn.stop()};function Bt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=pe.autoReset,q=jt.enabled,st=jt.autoUpdate,ot=jt.needsUpdate,Z=jt.type;Ot(),pe.autoReset=w,jt.enabled=q,jt.autoUpdate=st,jt.needsUpdate=ot,jt.type=Z}function St(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wt(w){const q=w.target;q.removeEventListener("dispose",Wt),oe(q)}function oe(w){Oe(w),Xt.remove(w)}function Oe(w){const q=Xt.get(w).programs;q!==void 0&&(q.forEach(function(st){mt.releaseProgram(st)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,st,ot,Z,bt){q===null&&(q=ue);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,It=ar(w,q,st,ot,Z);Vt.setMaterial(ot,Lt);let Ft=st.index,re=1;if(ot.wireframe===!0){if(Ft=et.getWireframeAttribute(st),Ft===void 0)return;re=2}const ee=st.drawRange,Zt=st.attributes.position;let me=ee.start*re,Le=(ee.start+ee.count)*re;bt!==null&&(me=Math.max(me,bt.start*re),Le=Math.min(Le,(bt.start+bt.count)*re)),Ft!==null?(me=Math.max(me,0),Le=Math.min(Le,Ft.count)):Zt!=null&&(me=Math.max(me,0),Le=Math.min(Le,Zt.count));const qe=Le-me;if(qe<0||qe===1/0)return;le.setup(Z,ot,It,st,Ft);let Se,Ne=Qt;if(Ft!==null&&(Se=A.get(Ft),Ne=$t,Ne.setIndex(Se)),Z.isMesh)ot.wireframe===!0?(Vt.setLineWidth(ot.wireframeLinewidth*ie()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(Z.isLine){let te=ot.linewidth;te===void 0&&(te=1),Vt.setLineWidth(te*ie()),Z.isLineSegments?Ne.setMode(H.LINES):Z.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else Z.isPoints?Ne.setMode(H.POINTS):Z.isSprite&&Ne.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const te=Z._multiDrawStarts,ze=Z._multiDrawCounts,be=Z._multiDrawCount,vn=Ft?A.get(Ft).bytesPerElement:1,ya=Xt.get(ot).currentProgram.getUniforms();for(let We=0;We<be;We++)ya.setValue(H,"_gl_DrawID",We),Ne.render(te[We]/vn,ze[We])}else if(Z.isInstancedMesh)Ne.renderInstances(me,qe,Z.count);else if(st.isInstancedBufferGeometry){const te=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ze=Math.min(st.instanceCount,te);Ne.renderInstances(me,qe,ze)}else Ne.render(me,qe)};function Ce(w,q,st){w.transparent===!0&&w.side===Pi&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,Sa(w,q,st),w.side=tr,w.needsUpdate=!0,Sa(w,q,st),w.side=Pi):Sa(w,q,st)}this.compile=function(w,q,st=null){st===null&&(st=w),g=wt.get(st),g.init(q),b.push(g),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),w!==st&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const ot=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const It=bt[Lt];Ce(It,st,Z),ot.add(It)}else Ce(bt,st,Z),ot.add(bt)}),g=b.pop(),ot},this.compileAsync=function(w,q,st=null){const ot=this.compile(w,q,st);return new Promise(Z=>{function bt(){if(ot.forEach(function(Lt){Xt.get(Lt).currentProgram.isReady()&&ot.delete(Lt)}),ot.size===0){Z(w);return}setTimeout(bt,10)}Te.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let jn=null;function _n(w){jn&&jn(w)}function un(){Hn.stop()}function Tn(){Hn.start()}const Hn=new lS;Hn.setAnimationLoop(_n),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){jn=w,Tt.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},Tt.addEventListener("sessionstart",un),Tt.addEventListener("sessionend",Tn),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,q,X),g=wt.get(w,b.length),g.init(q),b.push(g),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),j.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,dt=Ht.init(this.clippingPlanes,yt),S=Nt.get(w,U.length),S.init(),U.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&nr(bt,q,-1/0,D.sortObjects)}nr(w,q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(xt,N),qt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,qt&&Et.addToRenderList(S,w),this.info.render.frame++,dt===!0&&Ht.beginShadows();const st=g.state.shadowsArray;jt.render(st,w,q),dt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,Z=S.transmissive;if(g.setupLights(),q.isArrayCamera){const bt=q.cameras;if(Z.length>0)for(let Lt=0,It=bt.length;Lt<It;Lt++){const Ft=bt[Lt];ul(ot,Z,w,Ft)}qt&&Et.render(w);for(let Lt=0,It=bt.length;Lt<It;Lt++){const Ft=bt[Lt];cl(S,w,Ft,Ft.viewport)}}else Z.length>0&&ul(ot,Z,w,q),qt&&Et.render(w),cl(S,w,q);X!==null&&F===0&&(Jt.updateMultisampleRenderTarget(X),Jt.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(D,w,q),le.resetDefaultState(),L=-1,C=null,b.pop(),b.length>0?(g=b[b.length-1],dt===!0&&Ht.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function nr(w,q,st,ot){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){ot&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const Lt=ht.update(w),It=w.material;It.visible&&S.push(w,Lt,It,st,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Lt=ht.update(w),It=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Gt.copy(Lt.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(It)){const Ft=Lt.groups;for(let re=0,ee=Ft.length;re<ee;re++){const Zt=Ft[re],me=It[Zt.materialIndex];me&&me.visible&&S.push(w,Lt,me,st,Gt.z,Zt)}}else It.visible&&S.push(w,Lt,It,st,Gt.z,null)}}const bt=w.children;for(let Lt=0,It=bt.length;Lt<It;Lt++)nr(bt[Lt],q,st,ot)}function cl(w,q,st,ot){const Z=w.opaque,bt=w.transmissive,Lt=w.transparent;g.setupLightsView(st),dt===!0&&Ht.setGlobalState(D.clippingPlanes,st),ot&&Vt.viewport(G.copy(ot)),Z.length>0&&ir(Z,q,st),bt.length>0&&ir(bt,q,st),Lt.length>0&&ir(Lt,q,st),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function ul(w,q,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new Ir(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?rl:zi,minFilter:Nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=g.state.transmissionRenderTarget[ot.id],Lt=ot.viewport||G;bt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const It=D.getRenderTarget(),Ft=D.getActiveCubeFace(),re=D.getActiveMipmapLevel();D.setRenderTarget(bt),D.getClearColor(ct),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),qt&&Et.render(st);const ee=D.toneMapping;D.toneMapping=$a;const Zt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),dt===!0&&Ht.setGlobalState(D.clippingPlanes,ot),ir(w,st,ot),Jt.updateMultisampleRenderTarget(bt),Jt.updateRenderTargetMipmap(bt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Le=0,qe=q.length;Le<qe;Le++){const Se=q[Le],Ne=Se.object,te=Se.geometry,ze=Se.material,be=Se.group;if(ze.side===Pi&&Ne.layers.test(ot.layers)){const vn=ze.side;ze.side=qn,ze.needsUpdate=!0,va(Ne,st,ot,te,ze,be),ze.side=vn,ze.needsUpdate=!0,me=!0}}me===!0&&(Jt.updateMultisampleRenderTarget(bt),Jt.updateRenderTargetMipmap(bt))}D.setRenderTarget(It,Ft,re),D.setClearColor(ct,pt),Zt!==void 0&&(ot.viewport=Zt),D.toneMapping=ee}function ir(w,q,st){const ot=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,bt=w.length;Z<bt;Z++){const Lt=w[Z],It=Lt.object,Ft=Lt.geometry,re=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),It.layers.test(st.layers)&&va(It,q,st,Ft,ee,re)}}function va(w,q,st,ot,Z,bt){w.onBeforeRender(D,q,st,ot,Z,bt),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(D,q,st,ot,w,bt),Z.transparent===!0&&Z.side===Pi&&Z.forceSinglePass===!1?(Z.side=qn,Z.needsUpdate=!0,D.renderBufferDirect(st,q,ot,Z,w,bt),Z.side=tr,Z.needsUpdate=!0,D.renderBufferDirect(st,q,ot,Z,w,bt),Z.side=Pi):D.renderBufferDirect(st,q,ot,Z,w,bt),w.onAfterRender(D,q,st,ot,Z,bt)}function Sa(w,q,st){q.isScene!==!0&&(q=ue);const ot=Xt.get(w),Z=g.state.lights,bt=g.state.shadowsArray,Lt=Z.state.version,It=mt.getParameters(w,Z.state,bt,q,st),Ft=mt.getProgramCacheKey(It);let re=ot.programs;ot.environment=w.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(w.isMeshStandardMaterial?I:Qe).get(w.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,re===void 0&&(w.addEventListener("dispose",Wt),re=new Map,ot.programs=re);let ee=re.get(Ft);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Lt)return Vi(w,It),ee}else It.uniforms=mt.getUniforms(w),w.onBeforeCompile(It,D),ee=mt.acquireProgram(It,Ft),re.set(Ft,ee),ot.uniforms=It.uniforms;const Zt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Ht.uniform),Vi(w,It),ot.needsLights=sn(w),ot.lightsStateVersion=Lt,ot.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Gi(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=tu.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Vi(w,q){const st=Xt.get(w);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function ar(w,q,st,ot,Z){q.isScene!==!0&&(q=ue),Jt.resetTextureUnits();const bt=q.fog,Lt=ot.isMeshStandardMaterial?q.environment:null,It=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vs,Ft=(ot.isMeshStandardMaterial?I:Qe).get(ot.envMap||Lt),re=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Zt=!!st.morphAttributes.position,me=!!st.morphAttributes.normal,Le=!!st.morphAttributes.color;let qe=$a;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=Se!==void 0?Se.length:0,te=Xt.get(ot),ze=g.state.lights;if(dt===!0&&(yt===!0||w!==C)){const Sn=w===C&&ot.id===L;Ht.setState(ot,w,Sn)}let be=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==ze.state.version||te.outputColorSpace!==It||Z.isBatchedMesh&&te.batching===!1||!Z.isBatchedMesh&&te.batching===!0||Z.isBatchedMesh&&te.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&te.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&te.instancing===!1||!Z.isInstancedMesh&&te.instancing===!0||Z.isSkinnedMesh&&te.skinning===!1||!Z.isSkinnedMesh&&te.skinning===!0||Z.isInstancedMesh&&te.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&te.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&te.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&te.instancingMorph===!1&&Z.morphTexture!==null||te.envMap!==Ft||ot.fog===!0&&te.fog!==bt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ht.numPlanes||te.numIntersection!==Ht.numIntersection)||te.vertexAlphas!==re||te.vertexTangents!==ee||te.morphTargets!==Zt||te.morphNormals!==me||te.morphColors!==Le||te.toneMapping!==qe||te.morphTargetsCount!==Ne)&&(be=!0):(be=!0,te.__version=ot.version);let vn=te.currentProgram;be===!0&&(vn=Sa(ot,q,Z));let ya=!1,We=!1,Xi=!1;const ke=vn.getUniforms(),Dn=te.uniforms;if(Vt.useProgram(vn.program)&&(ya=!0,We=!0,Xi=!0),ot.id!==L&&(L=ot.id,We=!0),ya||C!==w){Vt.buffers.depth.getReversed()?(Ct.copy(w.projectionMatrix),yT(Ct),MT(Ct),ke.setValue(H,"projectionMatrix",Ct)):ke.setValue(H,"projectionMatrix",w.projectionMatrix),ke.setValue(H,"viewMatrix",w.matrixWorldInverse);const bn=ke.map.cameraPosition;bn!==void 0&&bn.setValue(H,kt.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ke.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,We=!0,Xi=!0)}if(Z.isSkinnedMesh){ke.setOptional(H,Z,"bindMatrix"),ke.setOptional(H,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ke.setValue(H,"boneTexture",Sn.boneTexture,Jt))}Z.isBatchedMesh&&(ke.setOptional(H,Z,"batchingTexture"),ke.setValue(H,"batchingTexture",Z._matricesTexture,Jt),ke.setOptional(H,Z,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",Z._indirectTexture,Jt),ke.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",Z._colorsTexture,Jt));const fn=st.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&zt.update(Z,st,vn),(We||te.receiveShadow!==Z.receiveShadow)&&(te.receiveShadow=Z.receiveShadow,ke.setValue(H,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Dn.envMap.value=Ft,Dn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),We&&(ke.setValue(H,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&xa(Dn,Xi),bt&&ot.fog===!0&&ut.refreshFogUniforms(Dn,bt),ut.refreshMaterialUniforms(Dn,ot,W,Q,g.state.transmissionRenderTarget[w.id]),tu.upload(H,Gi(te),Dn,Jt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(tu.upload(H,Gi(te),Dn,Jt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ke.setValue(H,"center",Z.center),ke.setValue(H,"modelViewMatrix",Z.modelViewMatrix),ke.setValue(H,"normalMatrix",Z.normalMatrix),ke.setValue(H,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Sn=ot.uniformsGroups;for(let bn=0,Ci=Sn.length;bn<Ci;bn++){const Wi=Sn[bn];k.update(Wi,vn),k.bind(Wi,vn)}}return vn}function xa(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function sn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,q,st){const ot=Xt.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Xt.get(w.texture).__webglTexture=q,Xt.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const st=Xt.get(w);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const fl=H.createFramebuffer();this.setRenderTarget=function(w,q=0,st=0){X=w,O=q,F=st;let ot=!0,Z=null,bt=!1,Lt=!1;if(w){const Ft=Xt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Ft.__webglFramebuffer===void 0)Jt.setupRenderTarget(w);else if(Ft.__hasExternalTextures)Jt.rebindTextures(w,Xt.get(w.texture).__webglTexture,Xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Zt=w.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&Xt.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(w)}}const re=w.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Lt=!0);const ee=Xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?Z=ee[q][st]:Z=ee[q],bt=!0):w.samples>0&&Jt.useMultisampledRTT(w)===!1?Z=Xt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[st]:Z=ee,G.copy(w.viewport),lt.copy(w.scissor),it=w.scissorTest}else G.copy($).multiplyScalar(W).floor(),lt.copy(_t).multiplyScalar(W).floor(),it=Mt;if(st!==0&&(Z=fl),Vt.bindFramebuffer(H.FRAMEBUFFER,Z)&&ot&&Vt.drawBuffers(w,Z),Vt.viewport(G),Vt.scissor(lt),Vt.setScissorTest(it),bt){const Ft=Xt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,st)}else if(Lt){const Ft=Xt.get(w.texture),re=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,st,re)}else if(w!==null&&st!==0){const Ft=Xt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,st)}L=-1},this.readRenderTargetPixels=function(w,q,st,ot,Z,bt,Lt,It=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){Vt.bindFramebuffer(H.FRAMEBUFFER,Ft);try{const re=w.textures[It],ee=re.format,Zt=re.type;if(!de.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ot&&st>=0&&st<=w.height-Z&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(q,st,ot,Z,Ut.convert(ee),Ut.convert(Zt),bt))}finally{const re=X!==null?Xt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(w,q,st,ot,Z,bt,Lt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft)if(q>=0&&q<=w.width-ot&&st>=0&&st<=w.height-Z){Vt.bindFramebuffer(H.FRAMEBUFFER,Ft);const re=w.textures[It],ee=re.format,Zt=re.type;if(!de.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(q,st,ot,Z,Ut.convert(ee),Ut.convert(Zt),0);const Le=X!==null?Xt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Le);const qe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await xT(H,qe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(me),H.deleteSync(qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,st=0){const ot=Math.pow(2,-st),Z=Math.floor(w.image.width*ot),bt=Math.floor(w.image.height*ot),Lt=q!==null?q.x:0,It=q!==null?q.y:0;Jt.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Lt,It,Z,bt),Vt.unbindTexture()};const hl=H.createFramebuffer(),ki=H.createFramebuffer();this.copyTextureToTexture=function(w,q,st=null,ot=null,Z=0,bt=null){bt===null&&(Z!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Lt,It,Ft,re,ee,Zt,me,Le,qe;const Se=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(st!==null)Lt=st.max.x-st.min.x,It=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,re=st.min.x,ee=st.min.y,Zt=st.isBox3?st.min.z:0;else{const fn=Math.pow(2,-Z);Lt=Math.floor(Se.width*fn),It=Math.floor(Se.height*fn),w.isDataArrayTexture?Ft=Se.depth:w.isData3DTexture?Ft=Math.floor(Se.depth*fn):Ft=1,re=0,ee=0,Zt=0}ot!==null?(me=ot.x,Le=ot.y,qe=ot.z):(me=0,Le=0,qe=0);const Ne=Ut.convert(q.format),te=Ut.convert(q.type);let ze;q.isData3DTexture?(Jt.setTexture3D(q,0),ze=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Jt.setTexture2DArray(q,0),ze=H.TEXTURE_2D_ARRAY):(Jt.setTexture2D(q,0),ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const be=H.getParameter(H.UNPACK_ROW_LENGTH),vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ya=H.getParameter(H.UNPACK_SKIP_PIXELS),We=H.getParameter(H.UNPACK_SKIP_ROWS),Xi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,re),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);const ke=w.isDataArrayTexture||w.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const fn=Xt.get(w),Sn=Xt.get(q),bn=Xt.get(fn.__renderTarget),Ci=Xt.get(Sn.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Wi=0;Wi<Ft;Wi++)ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(w).__webglTexture,Z,Zt+Wi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(q).__webglTexture,bt,qe+Wi)),H.blitFramebuffer(re,ee,Lt,It,me,Le,Lt,It,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Xt.has(w)){const fn=Xt.get(w),Sn=Xt.get(q);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,hl),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ki);for(let bn=0;bn<Ft;bn++)ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,Z,Zt+bn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,Z),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Sn.__webglTexture,bt,qe+bn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Sn.__webglTexture,bt),Z!==0?H.blitFramebuffer(re,ee,Lt,It,me,Le,Lt,It,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(ze,bt,me,Le,qe+bn,re,ee,Lt,It):H.copyTexSubImage2D(ze,bt,me,Le,re,ee,Lt,It);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(ze,bt,me,Le,qe,Lt,It,Ft,Ne,te,Se.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,bt,me,Le,qe,Lt,It,Ft,Ne,Se.data):H.texSubImage3D(ze,bt,me,Le,qe,Lt,It,Ft,Ne,te,Se):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,me,Le,Lt,It,Ne,te,Se.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,me,Le,Se.width,Se.height,Ne,Se.data):H.texSubImage2D(H.TEXTURE_2D,bt,me,Le,Lt,It,Ne,te,Se);H.pixelStorei(H.UNPACK_ROW_LENGTH,be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ya),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xi),bt===0&&q.generateMipmaps&&H.generateMipmap(ze),Vt.unbindTexture()},this.copyTextureToTexture3D=function(w,q,st=null,ot=null,Z=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,st,ot,Z)},this.initRenderTarget=function(w){Xt.get(w).__webglFramebuffer===void 0&&Jt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Jt.setTextureCube(w,0):w.isData3DTexture?Jt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Jt.setTexture2DArray(w,0):Jt.setTexture2D(w,0),Vt.unbindTexture()},this.resetState=function(){O=0,F=0,X=null,Vt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}const _0={type:"change"},yp={type:"start"},dS={type:"end"},Xc=new lu,v0=new Ka,ZC=Math.cos(70*vT.DEG2RAD),pn=new K,Yn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6;class KC extends fb{constructor(t,n=null){super(t,n),this.state=Ve.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Pr,this._lastTargetPosition=new K,this._quat=new Pr().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wv,this._sphericalDelta=new Wv,this._scale=1,this._panOffset=new K,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new K,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JC.bind(this),this._onPointerDown=QC.bind(this),this._onPointerUp=$C.bind(this),this._onContextMenu=sw.bind(this),this._onMouseWheel=nw.bind(this),this._onKeyDown=iw.bind(this),this._onTouchStart=aw.bind(this),this._onTouchMove=rw.bind(this),this._onMouseDown=tw.bind(this),this._onMouseMove=ew.bind(this),this._interceptControlDown=ow.bind(this),this._interceptControlUp=lw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_0),this.update(),this.state=Ve.NONE}update(t=null){const n=this.object.position;pn.copy(n).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Yn:r>Math.PI&&(r-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),n.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=pn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new K(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Xc.origin.copy(this.object.position),Xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xc.direction))<ZC?this.object.lookAt(this.target):(v0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xc.intersectPlane(v0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(_0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){pn.setFromMatrixColumn(n,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,n){this.screenSpacePanning===!0?pn.setFromMatrixColumn(n,1):(pn.setFromMatrixColumn(n,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let c=pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=n-r.top,f=r.width,h=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new ce,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function QC(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function JC(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function $C(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dS),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function tw(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ve.DOLLY;break;case Ps.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ve.ROTATE}break;case Ps.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(yp)}function ew(s){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function nw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(s.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(dS))}function iw(s){this.enabled!==!1&&this._handleKeyDown(s)}function aw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ve.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ve.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(yp)}function rw(s){switch(this._trackPointer(s),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ve.NONE}}function sw(s){this.enabled!==!1&&s.preventDefault()}function ow(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var pS=Math.PI,S0=pS*2,cw=pS/180;function x0(s,t,n,r,l,c){var f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*s-Math.floor(7*(s+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+17210135e-1+((f/6e4+c/60+l)/60+r)/24}function uw(s,t,n,r,l,c){var f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(s instanceof Date){var h=s;return x0(h.getUTCFullYear(),h.getUTCMonth()+1,h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds())}return x0(s,t,n,r,l,c,f)}function y0(s){var t=(s-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return n=n*cw/240%S0,n<0&&(n+=S0),n}function fw(s,t,n,r,l,c,f){return s instanceof Date?y0(uw(s)):y0(s)}var M0;(function(s){s[s.None=0]="None",s[s.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",s[s.MeanMotionBelowZero=2]="MeanMotionBelowZero",s[s.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",s[s.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",s[s.Decayed=6]="Decayed"})(M0||(M0={}));const hw="_container_norhl_1",dw="_satelliteLabel_norhl_22",pw="_satelliteName_norhl_39",mw="_satelliteDetails_norhl_46",gw="_satelliteType_norhl_54",_w="_satelliteNorad_norhl_59",Ls={container:hw,satelliteLabel:dw,satelliteName:pw,satelliteDetails:mw,satelliteType:gw,satelliteNorad:_w},vw="/assets/earth-blue-marble-d1pdJ3jg.jpg",Sw="/assets/earth-bump-BD2vMuPH.jpg",xw="/assets/earth-specular-6aAFN27D.jpg";function yw({data:s,onSatelliteClick:t}){const n=rt.useRef(null),[r,l]=rt.useState(null),c=rt.useRef(new ub);c.current.params.Points={threshold:.25};const f=rt.useRef(new ce),h=rt.useRef([]),m=rt.useRef({isDragging:!1,startX:0,startY:0}),p=rt.useRef(null),v=rt.useRef(new Set),_=rt.useRef(null);return rt.useEffect(()=>{if(!n.current)return;const x=v.current;try{p.current=new Worker(new URL("/assets/satelliteCalculations-DdPlzE6B.js",import.meta.url),{type:"module"})}catch(kt){console.warn("Failed to create Web Worker, falling back to main thread calculations:",kt)}for(;n.current.firstChild;)n.current.removeChild(n.current.firstChild);const y=new qT,T=n.current.clientWidth,M=n.current.clientHeight,S=new mi(75,T/M,.1,2e3);S.position.z=40;const g=new jC({antialias:!0});g.setSize(T,M),g.setClearColor(0,1),n.current.appendChild(g.domElement);const U=new KC(S,g.domElement);U.enableDamping=!0,U.dampingFactor=.05,U.screenSpacePanning=!1,U.minDistance=10,U.maxDistance=800;const b=new ab,D=new vp(15,64,64),P=new JT({map:b.load(vw,void 0,void 0,kt=>{console.error("Error loading earth texture:",kt)}),bumpMap:b.load(Sw,void 0,void 0,kt=>{console.error("Error loading earth bump texture:",kt)}),bumpScale:.1,specularMap:b.load(xw,void 0,void 0,kt=>{console.error("Error loading earth specular texture:",kt)}),specular:new Re(3355443),shininess:25}),O=new Ti(D,P);O.rotation.x=0,O.rotation.y=0,O.rotation.z=0,y.add(O);const F=new lb(16777215,1.2);y.add(F);const X=new ob(16777215,.3);X.position.set(0,0,10),y.add(X);const L=new aS({vertexColors:!0,size:.5,sizeAttenuation:!0,transparent:!1,opacity:1,alphaTest:.5}),C=new QT(new Ri,L);y.add(C);const G=new _p(.2,.5,8),lt=new mp({color:16776960,transparent:!0,opacity:.8,side:Pi}),it=new Ti(G,lt);it.visible=!1,y.add(it),_.current={scene:y,camera:S,renderer:g,earth:O,satellites:C,controls:U,hoverIndicator:it};let ct=null,pt=0,z="";const Q=()=>{if(!_.current)return;const kt=new Date,Gt=kt.toISOString(),ue=s.map(qt=>qt.NORAD_CAT_ID).join(",");if((!ct||s.length!==pt||ue!==z)&&(ct=s.filter(qt=>qt.TLE_LINE1&&qt.TLE_LINE2||qt.SEMIMAJOR_AXIS&&qt.PERIOD&&qt.EPOCH),pt=s.length,z=ue),h.current=ct,ct.length===0){const qt=_.current.satellites.geometry;qt.attributes.position&&(qt.setAttribute("position",new Pn(new Float32Array(0),3)),qt.setAttribute("color",new Pn(new Float32Array(0),3)),qt.computeBoundingSphere());return}if(p.current&&!v.current.has(Gt)){v.current.add(Gt),p.current.postMessage({type:"CALCULATE_POSITIONS",satellites:ct,currentTime:Gt});const qt=ie=>{const{type:H,results:$e}=ie.data;H==="POSITIONS_CALCULATED"&&(v.current.delete(Gt),p.current?.removeEventListener("message",qt),W($e,kt))};p.current.addEventListener("message",qt)}else xt(ct)},W=(kt,Gt)=>{if(!_.current)return;const ue=15/6371,qt=kt.filter(pe=>pe.position!==null),ie=new Float32Array(qt.length*3),H=new Float32Array(qt.length*3),$e=fw(Gt),Te=Math.cos(-$e),de=Math.sin(-$e);qt.forEach((pe,Xt)=>{const{position:Jt,satellite:Qe}=pe;if(!Jt)return;const I=Te*Jt.x-de*Jt.y,A=de*Jt.x+Te*Jt.y,et=Jt.z,ht=I*ue,mt=et*ue,ut=-A*ue;ie[Xt*3]=ht,ie[Xt*3+1]=mt,ie[Xt*3+2]=ut;let Nt,wt,Ht;switch(Qe.OBJECT_TYPE){case"PAYLOAD":Nt=0,wt=.5,Ht=1;break;case"ROCKET BODY":Nt=1,wt=.5,Ht=0;break;case"DEBRIS":Nt=1,wt=0,Ht=0;break;case"OTHER":default:Nt=0,wt=1,Ht=0}H[Xt*3]=Nt,H[Xt*3+1]=wt,H[Xt*3+2]=Ht});const Vt=_.current.satellites.geometry;if(qt.length>0){if((Vt.attributes.position?.count||0)!==qt.length)Vt.setAttribute("position",new Pn(ie,3)),Vt.setAttribute("color",new Pn(H,3));else{const Xt=Vt.attributes.position,Jt=Vt.attributes.color;Xt.array.set(ie),Jt.array.set(H),Xt.needsUpdate=!0,Jt.needsUpdate=!0}Vt.computeBoundingSphere()}},xt=kt=>{const ue=kt.slice(0,1e3);if(console.warn(`Web Worker unavailable, processing only ${ue.length} of ${kt.length} satellites on main thread`),_.current){const qt=_.current.satellites.geometry;qt.setAttribute("position",new Pn(new Float32Array(0),3)),qt.setAttribute("color",new Pn(new Float32Array(0),3))}};let N,$=0,_t=0;const Mt=750,j=1e3,dt=()=>{N=requestAnimationFrame(dt),U.update();const kt=performance.now();if(kt-_t>j){if(n.current&&_.current){const Gt=n.current,ue=g.domElement,qt=Gt.clientWidth,ie=Gt.clientHeight;(ue.width!==qt||ue.height!==ie)&&(S.aspect=qt/ie,S.updateProjectionMatrix(),g.setSize(qt,ie))}_t=kt}if(kt-$>Mt&&(Q(),$=kt),_.current?.satellites){const ue=S.position.distanceTo(new K(0,0,0))/35,qt=Math.max(.02,Math.min(4,ue*ue)),ie=Math.max(.01,Math.min(2,.3*qt)),H=_.current.satellites.material;H.size!==ie&&(H.size=ie,H.needsUpdate=!0)}g.render(y,S)};Q(),dt();const yt=()=>{if(!n.current||!_.current)return;const kt=n.current.clientWidth,Gt=n.current.clientHeight;_.current.camera.aspect=kt/Gt,_.current.camera.updateProjectionMatrix(),_.current.renderer.setSize(kt,Gt)};window.addEventListener("resize",yt);let Ct=null;n.current&&"ResizeObserver"in window&&(Ct=new ResizeObserver(yt),Ct.observe(n.current));const Dt=setTimeout(yt,100);return()=>{window.removeEventListener("resize",yt),Ct&&Ct.disconnect(),clearTimeout(Dt),cancelAnimationFrame(N),g.dispose(),p.current&&(p.current.terminate(),p.current=null),x&&x.clear()}},[s]),rt.useEffect(()=>{(()=>{!n.current||!_.current||setTimeout(()=>{const T=n.current.clientWidth,M=n.current.clientHeight;T>0&&M>0&&(_.current.camera.aspect=T/M,_.current.camera.updateProjectionMatrix(),_.current.renderer.setSize(T,M))},50)})();const y=setInterval(()=>{if(!n.current||!_.current)return;const T=n.current.clientWidth,M=n.current.clientHeight,S=_.current.renderer;(S.domElement.width!==T||S.domElement.height!==M)&&(_.current.camera.aspect=T/M,_.current.camera.updateProjectionMatrix(),S.setSize(T,M))},500);return()=>{clearInterval(y)}},[s]),rt.useEffect(()=>{const x=n.current?.querySelector("canvas");if(!x||!_.current)return;const y=S=>{m.current.isDragging=!1,m.current.startX=S.clientX,m.current.startY=S.clientY},T=S=>{const g=n.current?.getBoundingClientRect();if(g){if(S.buttons===1){const U=Math.abs(S.clientX-m.current.startX),b=Math.abs(S.clientY-m.current.startY);(U>5||b>5)&&(m.current.isDragging=!0)}if(m.current.isDragging){_.current?.hoverIndicator&&(_.current.hoverIndicator.visible=!1),l(null);return}if(f.current.x=(S.clientX-g.left)/g.width*2-1,f.current.y=-((S.clientY-g.top)/g.height)*2+1,_.current){const{camera:U,satellites:b}=_.current,P=U.position.distanceTo(new K(0,0,0))/35,O=Math.max(.02,Math.min(4,P*P)),X=Math.max(.01,Math.min(2,.3*O))*.8;c.current.params.Points={threshold:X},c.current.setFromCamera(f.current,U);const C=c.current.intersectObject(b).filter(G=>{if(G.index===void 0)return!1;const lt=b.geometry.attributes.position,it=new K(lt.getX(G.index),lt.getY(G.index),lt.getZ(G.index)),ct=new K(0,0,-1).applyQuaternion(U.quaternion),pt=new K().subVectors(it,U.position).normalize();return ct.dot(pt)>0});if(C.length>0){const G=C[0].index;if(G!==void 0&&G<h.current.length){const lt=h.current[G];if(_.current?.hoverIndicator){const Q=b.geometry.attributes.position,W=new K(Q.getX(G),Q.getY(G),Q.getZ(G));_.current.hoverIndicator.position.copy(W);const xt=new K().subVectors(U.position,W).normalize();_.current.hoverIndicator.lookAt(W.x+xt.x,W.y+xt.y,W.z+xt.z);const N=U.position.distanceTo(W),$=U.position.distanceTo(new K(0,0,0)),_t=Math.max(.02,Math.min(4,Math.pow($/35,2))),j=Math.max(.01,Math.min(2,.3*_t))*2,dt=Math.max(.2,Math.min(1.5,20/N)),yt=j*dt;_.current.hoverIndicator.scale.setScalar(yt),_.current.hoverIndicator.visible=!0}const it=S.clientX-g.left+15,ct=S.clientY-g.top-10,pt=Math.max(10,Math.min(it,g.width-200)),z=Math.max(10,Math.min(ct,g.height-80));l({x:pt,y:z,name:lt.OBJECT_NAME,type:lt.OBJECT_TYPE,noradId:lt.NORAD_CAT_ID});return}}_.current?.hoverIndicator&&(_.current.hoverIndicator.visible=!1),l(null)}}},M=S=>{if(!m.current.isDragging&&_.current&&t){const g=n.current?.getBoundingClientRect();if(!g)return;f.current.x=(S.clientX-g.left)/g.width*2-1,f.current.y=-((S.clientY-g.top)/g.height)*2+1;const{camera:U,satellites:b}=_.current,P=U.position.distanceTo(new K(0,0,0))/35,O=Math.max(.02,Math.min(4,P*P)),X=Math.max(.01,Math.min(2,.3*O))*.8;c.current.params.Points={threshold:X},c.current.setFromCamera(f.current,U);const L=c.current.intersectObject(b);if(L.length>0){const C=L[0].index;if(C!==void 0&&C<h.current.length){const G=h.current[C];setTimeout(()=>t(G),0)}}}m.current.isDragging=!1};return x.addEventListener("mousedown",y),x.addEventListener("mousemove",T),x.addEventListener("mouseup",M),x.addEventListener("mouseleave",()=>{_.current?.hoverIndicator&&(_.current.hoverIndicator.visible=!1),l(null)}),x.addEventListener("click",S=>{if(!m.current.isDragging&&_.current&&t){const g=x.getBoundingClientRect();f.current.x=(S.clientX-g.left)/g.width*2-1,f.current.y=-((S.clientY-g.top)/g.height)*2+1;const{camera:U,satellites:b}=_.current,P=U.position.distanceTo(new K(0,0,0))/35,O=Math.max(.02,Math.min(4,P*P)),X=Math.max(.01,Math.min(2,.3*O))*.8;c.current.params.Points={threshold:X},c.current.setFromCamera(f.current,U);const L=c.current.intersectObject(b);if(L.length>0){const C=L[0].index;if(C!==void 0&&C<h.current.length){const G=h.current[C];t(G)}}}}),()=>{x.removeEventListener("mousedown",y),x.removeEventListener("mousemove",T),x.removeEventListener("mouseup",M);const S=()=>{_.current?.hoverIndicator&&(_.current.hoverIndicator.visible=!1),l(null)};x.removeEventListener("mouseleave",S)}},[t]),Rt.jsx("div",{ref:n,className:Ls.container,children:r&&Rt.jsxs("div",{className:Ls.satelliteLabel,style:{left:`${r.x}px`,top:`${r.y}px`,position:"absolute",zIndex:1e3,pointerEvents:"none",transform:"translate(-50%, -100%)"},children:[Rt.jsx("div",{className:Ls.satelliteName,children:r.name}),Rt.jsxs("div",{className:Ls.satelliteDetails,children:[Rt.jsx("span",{className:Ls.satelliteType,children:r.type}),Rt.jsxs("span",{className:Ls.satelliteNorad,children:["NORAD: ",r.noradId]})]})]})})}const Mw="_modal_2or8e_1",Ew="_modalContent_2or8e_15",Tw="_modalHeader_2or8e_44",bw="_modalTitle_2or8e_51",Aw="_closeButton_2or8e_58",Rw="_detailGrid_2or8e_71",Cw="_detailItem_2or8e_77",ww="_detailLabel_2or8e_82",Dw="_detailValue_2or8e_89",fa={modal:Mw,modalContent:Ew,modalHeader:Tw,modalTitle:bw,closeButton:Aw,detailGrid:Rw,detailItem:Cw,detailLabel:ww,detailValue:Dw};function Uw({data:s,onClose:t}){rt.useEffect(()=>{const r=l=>{l.key==="Escape"&&t()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t]);const n=r=>{r.target===r.currentTarget&&t()};return Rt.jsx("div",{className:fa.modal,onClick:n,children:Rt.jsxs("div",{className:fa.modalContent,children:[Rt.jsxs("div",{className:fa.modalHeader,children:[Rt.jsx("h2",{className:fa.modalTitle,children:s.OBJECT_NAME||"Satellite Details"}),Rt.jsx("button",{className:fa.closeButton,onClick:t,children:"×"})]}),Rt.jsx("div",{className:fa.detailGrid,children:z0.map(r=>Rt.jsxs("div",{className:fa.detailItem,children:[Rt.jsx("div",{className:fa.detailLabel,children:r}),Rt.jsx("div",{className:fa.detailValue,children:s[r]!==null&&s[r]!==void 0?String(s[r]):"N/A"})]},r))})]})})}const Lw="_pageContainer_qojti_1",Nw="_pageContainerFullscreen_qojti_11",Ow="_title_qojti_26",Pw="_titleFullscreen_qojti_31",Iw="_fullscreenHeader_qojti_52",zw="_fullscreenToggle_qojti_66",Bw="_headerRight_qojti_80",Fw="_subtitle_qojti_98",Hw="_headerRow_qojti_105",Gw="_headerLeft_qojti_113",Vw="_legend_qojti_126",kw="_legendItem_qojti_132",Xw="_disabled_qojti_150",Ww="_legendColor_qojti_160",Yw="_subtitleFullscreen_qojti_167",qw="_fullscreenLeft_qojti_173",jw="_fullscreenRight_qojti_179",Zw="_searchInputFullscreen_qojti_197",Kw="_error_qojti_217",Qw="_contentContainer_qojti_222",Jw="_contentContainer3D_qojti_234",$w="_contentContainerFullscreen_qojti_245",tD="_searchContainer_qojti_256",eD="_searchInput_qojti_197",ge={pageContainer:Lw,pageContainerFullscreen:Nw,title:Ow,titleFullscreen:Pw,fullscreenHeader:Iw,fullscreenToggle:zw,headerRight:Bw,subtitle:Fw,headerRow:Hw,headerLeft:Gw,legend:Vw,legendItem:kw,disabled:Xw,legendColor:Ww,subtitleFullscreen:Yw,fullscreenLeft:qw,fullscreenRight:jw,searchInputFullscreen:Zw,error:Kw,contentContainer:Qw,contentContainer3D:Jw,contentContainerFullscreen:$w,searchContainer:tD,searchInput:eD};function nD(){const{data:s,loading:t,error:n}=fE(),[r,l]=YM(),[c,f]=rt.useState(null),[h,m]=rt.useState(""),[p,v]=rt.useState([]),[_,x]=rt.useState({PAYLOAD:!0,"ROCKET BODY":!0,DEBRIS:!0,UNKNOWN:!0}),y=r.get("view")!=="table",T=r.get("fullscreen")==="true",M=(b,D,P)=>{let O=b;if(D.trim()){const F=D.toLowerCase();O=O.filter(X=>X.OBJECT_NAME.toLowerCase().includes(F)||X.NORAD_CAT_ID.toString().includes(D))}return O=O.filter(F=>{const X=F.OBJECT_TYPE==="OTHER"?"UNKNOWN":F.OBJECT_TYPE;return P[X]!==!1}),O};rt.useEffect(()=>{s&&v(M(s,h,_))},[s,h,_]);const S=b=>{x(D=>({...D,[b]:!D[b]}))},g=b=>{switch(b){case"PAYLOAD":return"#007fff";case"ROCKET BODY":return"#ff7f00";case"DEBRIS":return"#ff0000";case"UNKNOWN":return"#00ff00";default:return"#00ff00"}},U=()=>{const b=new URLSearchParams(r);T?b.delete("fullscreen"):b.set("fullscreen","true"),l(b)};return t?Rt.jsx("div",{children:"Loading..."}):n?Rt.jsxs("div",{className:ge.error,children:["Error: ",n]}):!s||s.length===0?Rt.jsx("div",{children:"No data found."}):Rt.jsxs("div",{className:T?ge.pageContainerFullscreen:ge.pageContainer,children:[y&&T&&Rt.jsxs("div",{className:ge.fullscreenHeader,children:[Rt.jsxs("div",{className:ge.fullscreenLeft,children:[Rt.jsx("div",{className:ge.searchContainer,children:Rt.jsx("input",{type:"text",placeholder:"Search by satellite name or NORAD ID...",value:h,onChange:b=>m(b.target.value),className:ge.searchInputFullscreen})}),Rt.jsxs("div",{className:ge.subtitleFullscreen,children:["Total Satellites: ",p.length," ",h&&`(filtered from ${s?.length||0})`]})]}),Rt.jsxs("div",{className:ge.fullscreenRight,children:[Rt.jsx("div",{className:ge.legend,children:["PAYLOAD","ROCKET BODY","DEBRIS","UNKNOWN"].map(b=>Rt.jsxs("div",{className:`${ge.legendItem} ${_[b]?"":ge.disabled}`,onClick:()=>S(b),title:`Click to ${_[b]?"hide":"show"} ${b.toLowerCase()} satellites`,children:[Rt.jsx("div",{className:ge.legendColor,style:{background:g(b)}}),Rt.jsx("span",{children:b==="UNKNOWN"?"Unknown":b.charAt(0)+b.slice(1).toLowerCase()})]},b))}),Rt.jsx("button",{className:ge.fullscreenToggle,onClick:U,children:T?"← Exit Fullscreen":"⛶ Fullscreen"})]})]}),Rt.jsx("div",{className:T?ge.titleFullscreen:ge.title,children:!T&&Rt.jsx("h1",{children:"Satellite Monitor"})}),y&&!T&&Rt.jsxs("div",{className:ge.headerRow,children:[Rt.jsxs("div",{className:ge.headerLeft,children:[Rt.jsx("div",{className:ge.searchContainer,children:Rt.jsx("input",{type:"text",placeholder:"Search by satellite name or NORAD ID...",value:h,onChange:b=>m(b.target.value),className:ge.searchInput})}),Rt.jsxs("div",{className:ge.subtitle,children:["Total Satellites: ",p.length," ",h&&`(filtered from ${s?.length||0})`]})]}),Rt.jsxs("div",{className:ge.headerRight,children:[Rt.jsx("div",{className:ge.legend,children:["PAYLOAD","ROCKET BODY","DEBRIS","UNKNOWN"].map(b=>Rt.jsxs("div",{className:`${ge.legendItem} ${_[b]?"":ge.disabled}`,onClick:()=>S(b),title:`Click to ${_[b]?"hide":"show"} ${b.toLowerCase()} satellites`,children:[Rt.jsx("div",{className:ge.legendColor,style:{background:g(b)}}),Rt.jsx("span",{children:b==="UNKNOWN"?"Unknown":b.charAt(0)+b.slice(1).toLowerCase()})]},b))}),Rt.jsx("button",{className:ge.fullscreenToggle,onClick:U,children:"⛶ Fullscreen"})]})]}),!y&&Rt.jsxs("div",{className:ge.headerRow,children:[Rt.jsxs("div",{className:ge.headerLeft,children:[Rt.jsx("div",{className:ge.searchContainer,children:Rt.jsx("input",{type:"text",placeholder:"Search by satellite name or NORAD ID...",value:h,onChange:b=>m(b.target.value),className:ge.searchInput})}),Rt.jsxs("div",{className:ge.subtitle,children:["Total Satellites: ",p.length," ",h&&`(filtered from ${s?.length||0})`]})]}),Rt.jsx("div",{className:ge.headerRight,children:Rt.jsx("div",{className:ge.legend,children:["PAYLOAD","ROCKET BODY","DEBRIS","UNKNOWN"].map(b=>Rt.jsxs("div",{className:`${ge.legendItem} ${_[b]?"":ge.disabled}`,onClick:()=>S(b),title:`Click to ${_[b]?"hide":"show"} ${b.toLowerCase()} satellites`,children:[Rt.jsx("div",{className:ge.legendColor,style:{background:g(b)}}),Rt.jsx("span",{children:b==="UNKNOWN"?"Unknown":b.charAt(0)+b.slice(1).toLowerCase()})]},b))})})]}),Rt.jsx("div",{className:T?ge.contentContainerFullscreen:y?ge.contentContainer3D:ge.contentContainer,children:y?Rt.jsx(yw,{data:p,onSatelliteClick:b=>f(b)},`earth-viz-${T?"fullscreen":"normal"}`):Rt.jsx(wE,{data:p,onRowClick:b=>f(b)})}),c&&Rt.jsx(Uw,{data:c,onClose:()=>f(null)})]})}function iD(){return Rt.jsx(GM,{children:Rt.jsx(uE,{children:Rt.jsxs(_M,{children:[Rt.jsx(Wc,{path:"/",element:Rt.jsx(mM,{to:"/general-perturbation?view=3d",replace:!0})}),Rt.jsx(Wc,{path:"/general-perturbation",element:Rt.jsx(nD,{})}),Rt.jsx(Wc,{path:"/about",element:Rt.jsx("div",{children:"About Page Coming Soon"})})]})})})}Ay.createRoot(document.getElementById("root")).render(Rt.jsx(rt.StrictMode,{children:Rt.jsx(iD,{})}));
