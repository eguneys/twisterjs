var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return u(this.context.count)},getNextContextId(){return u(this.context.count++)}};function u(e){let t=String(e),n=t.length-1;return l.context.id+(n?String.fromCharCode(96+n):``)+t}function d(e){l.context=e}function f(){return{...l.context,id:l.getNextContextId(),count:0}}var p=(e,t)=>e===t,m=Symbol(`solid-proxy`),h=Symbol(`solid-track`),g={equals:p},_=null,v=fe,y=1,b=2,x={owned:null,cleanups:null,context:null,owner:null},S=null,C=null,w=null,T=null,E=null,D=null,O=null,k=0;function A(e,t){let n=E,r=S,i=e.length===0,a=t===void 0?r:t,o=i?x:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=i?e:()=>e(()=>F(()=>z(o)));S=o,E=null;try{return R(s,!0)}finally{E=n,S=r}}function j(e,t){t=t?Object.assign({},g,t):g;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0};return[ae.bind(n),e=>(typeof e==`function`&&(e=C&&C.running&&C.sources.has(n)?e(n.tValue):e(n.value)),oe(n,e))]}function M(e,t,n){let r=le(e,t,!1,y);w&&C&&C.running?D.push(r):se(r)}function N(e,t,n){v=me;let r=le(e,t,!1,y),i=ie&&re(ie);i&&(r.suspense=i),(!n||!n.render)&&(r.user=!0),O?O.push(r):se(r)}function P(e,t,n){n=n?Object.assign({},g,n):g;let r=le(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,w&&C&&C.running?(r.tState=y,D.push(r)):se(r),ae.bind(r)}function F(e){if(!T&&E===null)return e();let t=E;E=null;try{return T?T.untrack(e):e()}finally{E=t}}function I(e){N(()=>F(e))}function L(e){return S===null||(S.cleanups===null?S.cleanups=[e]:S.cleanups.push(e)),e}function ee(e){if(C&&C.running)return e(),C.done;let t=E,n=S;return Promise.resolve().then(()=>{E=t,S=n;let r;return(w||ie)&&(r=C||={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0},r.done||=new Promise(e=>r.resolve=e),r.running=!0),R(e,!1),E=S=null,r?r.done:void 0})}var[te,ne]=j(!1);function re(e){let t;return S&&S.context&&(t=S.context[e.id])!==void 0?t:e.defaultValue}var ie;function ae(){let e=C&&C.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===y)se(this);else{let e=D;D=null,R(()=>he(this),!1),D=e}if(E){let e=this.observers?this.observers.length:0;E.sources?(E.sources.push(this),E.sourceSlots.push(e)):(E.sources=[this],E.sourceSlots=[e]),this.observers?(this.observers.push(E),this.observerSlots.push(E.sources.length-1)):(this.observers=[E],this.observerSlots=[E.sources.length-1])}return e&&C.sources.has(this)?this.tValue:this.value}function oe(e,t,n){let r=C&&C.running&&C.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(C){let r=C.running;(r||!n&&C.sources.has(e))&&(C.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&R(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t],r=C&&C.running;r&&C.disposed.has(n)||((r?!n.tState:!n.state)&&(n.pure?D.push(n):O.push(n),n.observers&&ge(n)),r?n.tState=y:n.state=y)}if(D.length>1e6)throw D=[],Error()},!1)}return t}function se(e){if(!e.fn)return;z(e);let t=k;ce(e,C&&C.running&&C.sources.has(e)?e.tValue:e.value,t),C&&!C.running&&C.sources.has(e)&&queueMicrotask(()=>{R(()=>{C&&(C.running=!0),E=S=e,ce(e,e.tValue,t),E=S=null},!1)})}function ce(e,t,n){let r,i=S,a=E;E=S=e;try{r=e.fn(t)}catch(t){return e.pure&&(C&&C.running?(e.tState=y,e.tOwned&&e.tOwned.forEach(z),e.tOwned=void 0):(e.state=y,e.owned&&e.owned.forEach(z),e.owned=null)),e.updatedAt=n+1,be(t)}finally{E=a,S=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&`observers`in e?oe(e,r,!0):C&&C.running&&e.pure?(C.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function le(e,t,n,r=y,i){let a={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:S,context:S?S.context:null,pure:n};if(C&&C.running&&(a.state=0,a.tState=r),S===null||S!==x&&(C&&C.running&&S.pure?S.tOwned?S.tOwned.push(a):S.tOwned=[a]:S.owned?S.owned.push(a):S.owned=[a]),T&&a.fn){let[e,t]=j(void 0,{equals:!1}),n=T.factory(a.fn,t);L(()=>n.dispose());let r=T.factory(a.fn,()=>ee(t).then(()=>r.dispose()));a.fn=t=>(e(),C&&C.running?r.track(t):n.track(t))}return a}function ue(e){let t=C&&C.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===b)return he(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);let n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<k);){if(t&&C.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,i=n[r+1];for(;(t=t.owner)&&t!==i;)if(C.disposed.has(t))return}if((t?e.tState:e.state)===y)se(e);else if((t?e.tState:e.state)===b){let t=D;D=null,R(()=>he(e,n[0]),!1),D=t}}}function R(e,t){if(D)return e();let n=!1;t||(D=[]),O?n=!0:O=[],k++;try{let t=e();return de(n),t}catch(e){n||(O=null),D=null,be(e)}}function de(e){if(D&&=(w&&C&&C.running?pe(D):fe(D),null),e)return;let t;if(C){if(!C.promises.size&&!C.queue.size){let e=C.sources,n=C.disposed;O.push.apply(O,C.effects),t=C.resolve;for(let e of O)`tState`in e&&(e.state=e.tState),delete e.tState;C=null,R(()=>{for(let e of n)z(e);for(let t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)z(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}ne(!1)},!1)}else if(C.running){C.running=!1,C.effects.push.apply(C.effects,O),O=null,ne(!0);return}}let n=O;O=null,n.length&&R(()=>v(n),!1),t&&t()}function fe(e){for(let t=0;t<e.length;t++)ue(e[t])}function pe(e){for(let t=0;t<e.length;t++){let n=e[t],r=C.queue;r.has(n)||(r.add(n),w(()=>{r.delete(n),R(()=>{C.running=!0,ue(n)},!1),C&&(C.running=!1)}))}}function me(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:ue(r)}if(l.context){if(l.count){l.effects||=[],l.effects.push(...e.slice(0,n));return}d()}for(l.effects&&(l.done||!l.count)&&(e=[...l.effects,...e],n+=l.effects.length,delete l.effects),t=0;t<n;t++)ue(e[t])}function he(e,t){let n=C&&C.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){let i=e.sources[r];if(i.sources){let e=n?i.tState:i.state;e===y?i!==t&&(!i.updatedAt||i.updatedAt<k)&&ue(i):e===b&&he(i,t)}}}function ge(e){let t=C&&C.running;for(let n=0;n<e.observers.length;n+=1){let r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=b:r.state=b,r.pure?D.push(r):O.push(r),r.observers&&ge(r))}}function z(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),i=t.observerSlots.pop();n<r.length&&(e.sourceSlots[i]=n,r[n]=e,t.observerSlots[n]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)z(e.tOwned[t]);delete e.tOwned}if(C&&C.running&&e.pure)_e(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}C&&C.running?e.tState=0:e.state=0}function _e(e,t){if(t||(e.tState=0,C.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)_e(e.owned[t])}function ve(e){return e instanceof Error?e:Error(typeof e==`string`?e:`Unknown error`,{cause:e})}function ye(e,t,n){try{for(let n of t)n(e)}catch(e){be(e,n&&n.owner||null)}}function be(e,t=S){let n=_&&t&&t.context&&t.context[_],r=ve(e);if(!n)throw r;O?O.push({fn(){ye(r,n,t)},state:y}):ye(r,n,t)}var B=Symbol(`fallback`);function xe(e){for(let t=0;t<e.length;t++)e[t]()}function Se(e,t,n={}){let r=[],i=[],a=[],o=0,s=t.length>1?[]:null;return L(()=>xe(a)),()=>{let c=e()||[],l=c.length,u,d;return c[h],F(()=>{let e,t,p,m,h,g,_,v,y;if(l===0)o!==0&&(xe(a),a=[],r=[],i=[],o=0,s&&=[]),n.fallback&&(r=[B],i[0]=A(e=>(a[0]=e,n.fallback())),o=1);else if(o===0){for(i=Array(l),d=0;d<l;d++)r[d]=c[d],i[d]=A(f);o=l}else{for(p=Array(l),m=Array(l),s&&(h=Array(l)),g=0,_=Math.min(o,l);g<_&&r[g]===c[g];g++);for(_=o-1,v=l-1;_>=g&&v>=g&&r[_]===c[v];_--,v--)p[v]=i[_],m[v]=a[_],s&&(h[v]=s[_]);for(e=new Map,t=Array(v+1),d=v;d>=g;d--)y=c[d],u=e.get(y),t[d]=u===void 0?-1:u,e.set(y,d);for(u=g;u<=_;u++)y=r[u],d=e.get(y),d!==void 0&&d!==-1?(p[d]=i[u],m[d]=a[u],s&&(h[d]=s[u]),d=t[d],e.set(y,d)):a[u]();for(d=g;d<l;d++)d in p?(i[d]=p[d],a[d]=m[d],s&&(s[d]=h[d],s[d](d))):i[d]=A(f);i=i.slice(0,o=l),r=c.slice(0)}return i});function f(e){if(a[d]=e,s){let[e,n]=j(d);return s[d]=n,t(c[d],e)}return t(c[d])}}}var Ce=!1;function V(e,t){if(Ce&&l.context){let n=l.context;d(f());let r=F(()=>e(t||{}));return d(n),r}return F(()=>e(t||{}))}var we=0;function Te(){return l.context?l.getNextContextId():`cl-${we++}`}var Ee=e=>`Stale read from <${e}>.`;function H(e){let t=`fallback`in e&&{fallback:()=>e.fallback};return P(Se(()=>e.each,e.children,t||void 0))}function De(e){let t=e.keyed,n=P(()=>e.when,void 0,void 0),r=t?n:P(n,void 0,{equals:(e,t)=>!e==!t});return P(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?F(()=>a(t?i:()=>{if(!F(r))throw Ee(`Show`);return n()})):a}return e.fallback},void 0,void 0)}function Oe(e,t,n){let r=n.length,i=t.length,a=r,o=0,s=0,c=t[i-1].nextSibling,l=null;for(;o<i||s<a;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[a-1];)i--,a--;if(i===o){let t=a<r?s?n[s-1].nextSibling:n[a-s]:c;for(;s<a;)e.insertBefore(n[s++],t)}else if(a===s)for(;o<i;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[a-1]&&n[s]===t[i-1]){let r=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--a],r),t[i]=n[a]}else{if(!l){l=new Map;let e=s;for(;e<a;)l.set(n[e],e++)}let r=l.get(t[o]);if(r!=null)if(s<r&&r<a){let c=o,u=1,d;for(;++c<i&&c<a&&!((d=l.get(t[c]))==null||d!==r+u);)u++;if(u>r-s){let i=t[o];for(;s<r;)e.insertBefore(n[s++],i)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}var ke=`_$DX_DELEGATE`;function Ae(e,t,n,r={}){let i;return A(r=>{i=r,t===document?e():G(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=``}}function U(e,t,n,r){let i,a=()=>{let t=r?document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`template`):document.createElement(`template`);return t.innerHTML=e,n?t.content.firstChild.firstChild:r?t.firstChild:t.content.firstChild},o=t?()=>F(()=>document.importNode(i||=a(),!0)):()=>(i||=a()).cloneNode(!0);return o.cloneNode=o,o}function je(e,t=window.document){let n=t[ke]||(t[ke]=new Set);for(let r=0,i=e.length;r<i;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Ie))}}function Me(e,t,n){Fe(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function W(e,t){Fe(e)||(t==null?e.removeAttribute(`class`):e.className=t)}function Ne(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n,typeof n!=`function`&&n)}function Pe(e,t,n){return F(()=>e(t,n))}function G(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!=`function`)return Le(e,t,r,n);M(r=>Le(e,t(),r,n),r)}function Fe(e){return!!l.context&&!l.done&&(!e||e.isConnected)}function Ie(e){if(l.registry&&l.events&&l.events.find(([t,n])=>n===e))return;let t=e.target,n=`$$${e.type}`,r=e.target,i=e.currentTarget,a=t=>Object.defineProperty(e,`target`,{configurable:!0,value:t}),o=()=>{let r=t[n];if(r&&!t.disabled){let i=t[`${n}Data`];if(i===void 0?r.call(t,e):r.call(t,i,e),e.cancelBubble)return}return t.host&&typeof t.host!=`string`&&!t.host._$host&&t.contains(e.target)&&a(t.host),!0},s=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,`currentTarget`,{configurable:!0,get(){return t||document}}),l.registry&&!l.done&&(l.done=_$HY.done=!0),e.composedPath){let n=e.composedPath();a(n[0]);for(let e=0;e<n.length-2&&(t=n[e],o());e++){if(t._$host){t=t._$host,s();break}if(t.parentNode===i)break}}else s();a(r)}function Le(e,t,n,r,i){let a=Fe(e);if(a){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){let r=n[e];r.nodeType===8&&r.data.slice(0,2)===`!$`?r.remove():t.push(r)}n=t}for(;typeof n==`function`;)n=n();if(t===n)return n;let o=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o===`string`||o===`number`){if(a||o===`number`&&(t=t.toString(),t===n))return n;if(s){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=Be(e,n,r,i)}else n=n!==``&&typeof n==`string`?e.firstChild.data=t:e.textContent=t}else if(t==null||o===`boolean`){if(a)return n;n=Be(e,n,r)}else if(o===`function`)return M(()=>{let i=t();for(;typeof i==`function`;)i=i();n=Le(e,i,n,r)}),()=>n;else if(Array.isArray(t)){let o=[],c=n&&Array.isArray(n);if(Re(o,t,n,i))return M(()=>n=Le(e,o,n,r,!0)),()=>n;if(a){if(!o.length)return n;if(r===void 0)return n=[...e.childNodes];let t=o[0];if(t.parentNode!==e)return n;let i=[t];for(;(t=t.nextSibling)!==r;)i.push(t);return n=i}if(o.length===0){if(n=Be(e,n,r),s)return n}else c?n.length===0?ze(e,o,r):Oe(e,n,o):(n&&Be(e),ze(e,o));n=o}else if(t.nodeType){if(a&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=Be(e,n,r,t);Be(e,n,null,t)}else n==null||n===``||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}return n}function Re(e,t,n,r){let i=!1;for(let a=0,o=t.length;a<o;a++){let o=t[a],s=n&&n[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)==`object`&&o.nodeType)e.push(o);else if(Array.isArray(o))i=Re(e,o,s)||i;else if(c===`function`)if(r){for(;typeof o==`function`;)o=o();i=Re(e,Array.isArray(o)?o:[o],Array.isArray(s)?s:[s])||i}else e.push(o),i=!0;else{let t=String(o);s&&s.nodeType===3&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return i}function ze(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function Be(e,t,n,r){if(n===void 0)return e.textContent=``;let i=r||document.createTextNode(``);if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(i!==o){let t=o.parentNode===e;!r&&!a?t?e.replaceChild(i,o):e.insertBefore(i,n):t&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Ve(e){return e.x*e.x+e.y*e.y}function He(e){return Math.hypot(e.x,e.y)}function Ue(e){let t=He(e);return{x:e.x/t,y:e.y/t}}function We(e){return K(Math.cos(e),Math.sin(e))}function K(e=0,t=0){return{x:e,y:t}}function q(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ge(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ke(e,t){return{x:e.x*t,y:e.y*t}}function qe(e,t){return e.x*t.x+e.y*t.y}function Je(e,t,n=0){n<0&&(n=0),t<n&&(t=n);let r=He(e);return r===0?K():Ke(e,r<n?n/r:r>t?t/r:1)}function Ye(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.y*r,y:e.x*r+e.y*n}}var Xe={duration:.2,easing:e=>e},Ze={stiffness:150,damping:18},Qe={speed:1},$e={amplitude:0,frequency:3,bias:0},et=class{value;velocity=0;baseValue=0;mode=`hold`;time=0;timeInMode=0;tweenStart=0;tweenTarget=0;tweenConfig=Xe;springTarget=0;springConfig=Ze;followTarget=0;followConfig=Qe;swayEnabled=!1;swayConfig={...$e};lastSwayValue=0;swayFade=0;constructor(e=0){this.baseValue=e,this.value=this.baseValue}hold(){return this.mode=`hold`,this.timeInMode=0,this.velocity=0,this}tweenTo(e,t){return this.mode=`tween`,this.tweenConfig={...Xe,...t},this.tweenStart=this.value,this.tweenTarget=e,this.timeInMode=0,this}springTo(e,t){return this.mode=`spring`,this.springConfig={...Ze,...t},this.springTarget=e,this.timeInMode=0,this}followTo(e,t){return this.mode=`follow`,this.followConfig={...Qe,...t},this.followTarget=e,this}swayTo(e){return this.swayConfig={...this.swayConfig,...e},this.swayEnabled=!0,this}disableSway(){return this.swayEnabled=!1,this}update(e){switch(this.time+=e,this.timeInMode+=e,this.mode){case`hold`:break;case`tween`:{let e=Math.min(this.timeInMode/this.tweenConfig.duration,1),t=this.tweenConfig.easing(e);this.baseValue=this.tweenStart+(this.tweenTarget-this.tweenStart)*t;break}case`spring`:{let{stiffness:t,damping:n}=this.springConfig,r=-t*(this.baseValue-this.springTarget)-n*this.velocity;this.velocity+=r*e,this.baseValue+=this.velocity*e;break}case`follow`:{let{speed:t}=this.followConfig,n=1-(1-t)**e;this.baseValue+=(this.followTarget-this.baseValue)*n;break}}if(this.swayEnabled&&this.swayConfig){this.swayFade=Math.min(this.swayFade+e*8,1);let t=(Math.sin(this.time*this.swayConfig.frequency+0)*this.swayConfig.amplitude+this.swayConfig.bias-this.lastSwayValue)*this.swayFade;this.baseValue+=t,this.lastSwayValue+=t}else this.swayFade=0;this.value=this.baseValue}},tt=class{time=0;next_pop=1/0;line=[];_action=``;set_line(e){return this.line=e.split(` `),this.next_pop=this.time,this}get action(){return this._action}update(e){if(this.time+=e,this.line.length===0){this.time>=this.next_pop?(this.next_pop=1/0,this._action=`end`):this.next_pop<1/0?this._action=`delay`:this._action=``;return}if(this.time>=this.next_pop){let e=this.line.shift(),t=parseInt(e);isNaN(t)?(this._action=e,this.next_pop=this.time):(this.next_pop+=t,this._action=`delay`)}else this._action=`delay`}};function nt(e){return Math.atan2(Math.sin(e),Math.cos(e))}function rt(e,t,n){return Math.min(Math.max(e,t),n)}function it(e,t){return{position:e,velocity:K(),rotation:0,angularVelocity:0,...t,accumulatedForce:K()}}var at=class{weight;speedFactor;target;constructor(e,t,n){this.weight=e,this.speedFactor=t,this.target=n}compute(e){let t=this.target();if(!t)return K();let n=Ge(t,e.position);return He(n)<8?K():Ke(Ge(Ke(Ue(n),e.maxSpeed*this.speedFactor),e.velocity),this.weight)}};function ot(e,t,n){let r=K();for(let i of t)r=q(r,i.compute(e,n));return Je(r,e.maxForce)}function st(e,t){if(qe(e.velocity,e.velocity)<1e-6)return;let n=nt(Math.atan2(e.velocity.y,e.velocity.x)-e.rotation),r=e.turnRate*t;e.rotation+=rt(n,-r,r)}function ct(e,t,n,r){let i=K();i=q(i,e.accumulatedForce),e.accumulatedForce=K(),i=q(i,ot(e,t,r));let a=K();for(let t of n)a=q(a,lt(t,e,500,10));i=q(i,a),Ve(a)>.01?e.bounds_force=a:delete e.bounds_force,e.velocity=q(e.velocity,Ke(i,r/e.mass)),He(e.velocity)<.1&&(e.velocity=K()),e.velocity=Je(e.velocity,e.maxSpeed),e.position=q(e.position,Ke(e.velocity,r)),st(e,r)}function lt(e,t,n,r){let i=e.penetration(t.position),a=-(i.signedDistance-t.radius);if(a>0){let e=i.normal,o=Ke(e,a*n),s=qe(t.velocity,e);return q(o,s<0?Ke(e,-s*r):K())}return K()}var ut=class{weight;interval;timer=0;wanderAngle=0;constructor(e,t=.25){this.interval=t,this.weight=e,this.wanderAngle=Math.random()*Math.PI*2}compute(e,t){if(this.timer-=t,this.timer<=0){let e=Math.PI;this.wanderAngle+=(Math.random()*2-1)*e,this.timer=this.interval}return Ke(We(this.wanderAngle),e.maxForce*this.weight)}},dt=class e{renderer;static INSTANCE_STRIDE=15;maxInstances;buffer;cursor=0;constructor(t,n=8192){this.renderer=t,this.maxInstances=n,this.buffer=new Float32Array(n*e.INSTANCE_STRIDE)}beginFrame(){this.cursor=0}endFrame(){this.flush()}pushMask(){this.flush(),this.renderer.pushMask()}popMask(){this.flush(),this.renderer.popMask()}endMask(){this.flush(),this.renderer.endMask()}ensureCapacity(e){if(this.cursor+e>this.maxInstances&&(this.flush(),e>this.maxInstances))throw Error(`Requested instance count exceeds maxInstances`)}pushInstance(t){let n=this.cursor*e.INSTANCE_STRIDE;for(let r=0;r<e.INSTANCE_STRIDE;r++)this.buffer[n+r]=t[r]??0;this.cursor++}fillRect(e,t,n,r,i,a=0){this.ensureCapacity(1),this.pushInstance([e,t,n,r,a,i.r,i.g,i.b,i.a,0,0,0,0,0,0])}fillRoundRect(e,t,n,r,i,a,o=0){this.ensureCapacity(1),this.pushInstance([e,t,n,r,o,a.r,a.g,a.b,a.a,1,i,0,0,0,0])}strokeRoundRect(e,t,n,r,i,a,o,s=[0,0],c=0){this.ensureCapacity(1),this.pushInstance([e,t,n+a,r+a,c,o.r,o.g,o.b,o.a,1,i,a,s[0],s[1],0])}strokeRect(e,t,n,r,i,a,o=[0,0],s=0){this.ensureCapacity(1),this.pushInstance([e,t,n+i,r+i,s,a.r,a.g,a.b,a.a,0,0,i,o[0],o[1],0])}fillCircle(e,t,n,r,i=[0,0]){this.ensureCapacity(1);let a=n*2,o=n*2;this.pushInstance([e,t,a,o,0,r.r,r.g,r.b,r.a,3,n,0,i[0],i[1],0])}strokeCircle(e,t,n,r,i,a=[0,0]){this.ensureCapacity(1);let o=n*2,s=n*2;this.pushInstance([e,t,o+r*2,s+r*2,0,i.r,i.g,i.b,i.a,3,n,r,a[0],a[1],0])}strokeLine(e,t,n,r,i,a,o=[0,0]){this.ensureCapacity(1);let s=n-e,c=r-t,l=Math.hypot(s,c),u=Math.atan2(c,s),d=l+i+8,f=i+8,p=(e+n)*.5,m=(t+r)*.5,h=i*.5;this.pushInstance([p,m,d,f,u,a.r,a.g,a.b,a.a,2,h,0,o[0],o[1],l])}flush(){if(this.cursor===0)return;let t=this.cursor*e.INSTANCE_STRIDE,n=this.buffer.subarray(0,t);this.renderer.instanceData.length>=t?this.renderer.instanceData.set(n,0):this.renderer.instanceData=new Float32Array(n),this.renderer.instanceCount=this.cursor,this.renderer.flush(),this.cursor=0}};function ft(e,t,n,r){let i=new Float32Array(16);return i[0]=2/(t-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(r-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-1,i[11]=0,i[12]=-(t+e)/(t-e),i[13]=-(r+n)/(r-n),i[14]=0,i[15]=1,i}ft(0,1920,1080,0);var pt=class{gl;program;vao;quadVBO;instanceVBO;maxInstances;instanceStride;instanceData;instanceCount=0;uProjectionMatrix;maskDepth=0;projectionMatrix;constructor(e,t,n,r=1e4){let i=n.getContext(`webgl2`,{antialias:!0,stencil:!0});if(!i)throw Error(`WebGL2 not supported`);this.gl=i,this.projectionMatrix=ft(0,e,t,0),this.maxInstances=r,this.quadVBO=i.createBuffer(),this.instanceVBO=i.createBuffer(),this.program=this.createProgram(`#version 300 es
precision highp float;

layout(location = 0) in vec2 a_pos;            // quad vertex (0-1 space)
layout(location = 1) in vec2 a_translation;    // world position
layout(location = 2) in vec2 a_size;           // width, height
layout(location = 3) in float a_rotation;      // radians
layout(location = 4) in vec4 a_color;          // RGBA
layout(location = 5) in float a_type;          // shape type
layout(location = 6) in float a_radius;        // roundRect radius or line thickness*0.5
layout(location = 7) in float a_stroke;        // stroke width (0 = fill)
layout(location = 8) in vec2 a_dash;           // (dashLength, gapLength)
layout(location = 9) in float a_length;        // shape length for lines (distance between A→B)

out vec2 v_local;
out vec2 v_size;
out vec4 v_color;
out float v_type;
out float v_radius;
out float v_stroke;
out vec2 v_dash;
out float v_length;

uniform mat4 u_projection; // 1920x1080 Orto Matrix

void main() {
    // Convert quad coordinates (0..1) to local space (-0.5..0.5)
    vec2 local = (a_pos - 0.5) * a_size;
    v_local = local;
    v_size = a_size;

    // Pass instance data to fragment shader
    v_color = a_color;
    v_type = a_type;
    v_radius = a_radius;
    v_stroke = a_stroke;
    v_dash = a_dash;
    v_length = a_length;

    // Rotation
    float s = sin(a_rotation);
    float c = cos(a_rotation);
    vec2 rotated = vec2(
        local.x * c - local.y * s,
        local.x * s + local.y * c
    );

    // Final world position
    vec2 world = rotated + a_translation;

    // convert pixel pos to NDC
    //vec2 ndc = (world / u_resolution) * 2.0 - 1.0;
    vec4 ndc = u_projection * vec4(world, 0.0, 1.0);
    //gl_Position = vec4(ndc * vec2(1, -1), 0.0, 1.0);
    gl_Position = ndc;
}`,`#version 300 es
precision highp float;

in vec2 v_local;
in vec2 v_size;
in vec4 v_color;
in float v_type;
in float v_radius;
in float v_stroke;
in vec2 v_dash;
in float v_length;

out vec4 fragColor;

// ************** SDF UTILITIES ************** //

float sdRect(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return max(d.x, d.y);
}

float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + vec2(r);
    return length(max(d, 0.0)) - r;
}

float sdCapsule(vec2 p, float len, float r) {
    // Capsule along +X axis centered at origin
    vec2 a = vec2(-len * 0.5, 0.0);
    vec2 b = vec2( len * 0.5, 0.0);
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h) - r;
}

float sdCircle(vec2 p, float r) {
    return length(p) - r;
}

float applyDash(float distAlongLine, float dash, float gap) {
    float total = dash + gap;
    float m = mod(distAlongLine, total);
    return (m < dash) ? 1.0 : 0.0;
}


void main() {

    // Normalize local coords to center
    vec2 p = v_local;

    float d = 0.0;

    //--------------------------------------------------
    // RECTANGLE
    //--------------------------------------------------
    if (v_type == 0.0) {
        d = sdRect(p, v_size * 0.5);
    }

    //--------------------------------------------------
    // ROUND RECTANGLE
    //--------------------------------------------------
    if (v_type == 1.0) {
        d = sdRoundRect(p, v_size * 0.5 - vec2(v_radius), v_radius);
    }

    //--------------------------------------------------
    // CAPSULE LINE (round caps)
    //--------------------------------------------------
    if (v_type == 2.0) {
        // line thickness = v_radius*2
        d = sdCapsule(p, v_length, v_radius);
    }

    if (v_type == 3.0) {
        d = sdCircle(p, v_radius);
    }

    //--------------------------------------------------
    // STROKE / FILL HANDLING
    //--------------------------------------------------
    float alpha = 0.0;

    if (v_stroke == 0.0) {
        // FILL SHAPE
        float edge = fwidth(d) * 1.2;
        edge = max(edge, 1.0);
        alpha = 1.0 - smoothstep(0.0, edge, d);
    } else {
        // STROKE SHAPE
        float halfStroke = v_stroke * 0.5;
        float distToStroke = abs(d) - halfStroke;
    
        float edge = fwidth(distToStroke) * 1.2;
        edge = max(edge, 1.0);
        alpha = 1.0 - smoothstep(0.0, edge, distToStroke);
    
        //--------------------------------------------------
        // DASHING (ANTI-ALIASED, STABLE)
        //--------------------------------------------------
        if (v_dash.x > 0.0 && alpha > 0.0) {
    
            // ---------------------------------------------
            // Arc-length approximation
            // ---------------------------------------------
            float s;
    
            if (v_type == 2.0) {
                // line / rect-like shapes: project along x
                s = p.x + v_length * 0.5;
            } else {
                // fallback: radial distance (better than Manhattan)
                s = length(p);
            }
    
            // ---------------------------------------------
            // Dash pattern
            // ---------------------------------------------
            float period = v_dash.x + v_dash.y;
            float phase  = mod(s, period);
    
            // derivative-aware AA for dash edges
            float dashEdge = fwidth(s);
    
            float dashMask =
                1.0 - smoothstep(
                    v_dash.x - dashEdge,
                    v_dash.x + dashEdge,
                    phase
                );
    
            alpha *= dashMask;
        }
    }

    float a= v_color.a * alpha;
    fragColor = vec4(v_color.rgb * a, a);
}`),this.uProjectionMatrix=i.getUniformLocation(this.program,`u_projection`),this.instanceStride=15,this.instanceData=new Float32Array(this.maxInstances*this.instanceStride),this.vao=this.createVAO(),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA)}set_viewport(e,t){this.gl.viewport(0,0,e,t)}pushMask(){let e=this.gl;e.enable(e.STENCIL_TEST),e.colorMask(!1,!1,!1,!1),e.stencilFunc(e.ALWAYS,this.maskDepth+1,255),e.stencilOp(e.KEEP,e.KEEP,e.REPLACE)}endMask(){let e=this.gl;e.colorMask(!0,!0,!0,!0),this.maskDepth++,e.stencilFunc(e.EQUAL,this.maskDepth,255),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}popMask(){this.maskDepth--;let e=this.gl;this.maskDepth>0?e.stencilFunc(e.EQUAL,this.maskDepth,255):e.disable(e.STENCIL_TEST)}createVAO(){let e=this.gl,t=e.createVertexArray();e.bindVertexArray(t);let n=new Float32Array([0,0,1,0,0,1,1,1]);return e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceVBO),e.bufferData(e.ARRAY_BUFFER,this.instanceData.byteLength,e.DYNAMIC_DRAW),t}setupInstancing(){let e=this.gl;e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.instanceVBO);let t=this.instanceStride*4,n=0,r=1,i=i=>{e.enableVertexAttribArray(r),e.vertexAttribPointer(r,i,e.FLOAT,!1,t,n),e.vertexAttribDivisor(r,1),n+=i*4,r++};i(2),i(2),i(1),i(4),i(1),i(1),i(1),i(2),i(1)}addInstance(e){let t=this.instanceCount*this.instanceStride;this.instanceData.set(e,t),this.instanceCount++,this.instanceCount>=this.maxInstances&&console.warn(`Instance buffer full`)}flush(){let e=this.gl;this.instanceCount!==0&&(e.useProgram(this.program),e.bindVertexArray(this.vao),e.uniformMatrix4fv(this.uProjectionMatrix,!1,this.projectionMatrix),e.bindBuffer(e.ARRAY_BUFFER,this.instanceVBO),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceData.subarray(0,this.instanceCount*this.instanceStride)),e.drawArraysInstanced(e.TRIANGLE_STRIP,0,4,this.instanceCount),this.instanceCount=0)}createProgram(e,t){let n=this.gl,r=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(r,e),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(r));let i=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(i));let a=n.createProgram();if(n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw Error(n.getProgramInfoLog(a));return n.deleteShader(r),n.deleteShader(i),a}cleanup(){let e=this.gl;e.bindVertexArray(null),this.vao&&e.deleteVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),this.quadVBO&&e.deleteBuffer(this.quadVBO),this.instanceVBO&&e.deleteBuffer(this.instanceVBO),this.program&&(e.useProgram(null),e.deleteProgram(this.program)),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}};function mt(e,t,n,r){let i=document.createElement(`canvas`);i.classList.add(`twisterjs-responsive-full`);let a=()=>{let e=window.devicePixelRatio||1,t=n.getBoundingClientRect(),a=Math.floor(t.width*e),s=Math.floor(t.height*e);(i.width!==a||i.height!==s)&&(i.width=a,i.height=s,o.set_viewport(i.width,i.height),r())},o=new pt(e,t,i,32768);o.setupInstancing();let s=new dt(o,16384),c=new ResizeObserver(()=>{a()});return c.observe(n),n.appendChild(i),{canvas:i,batch:s,cleanup(){o.cleanup(),c.unobserve(n)}}}var J=class e{r;g;b;a;constructor(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a=r}static fromRgba255(t,n,r,i=255){return new e(t/255,n/255,r/255,i/255)}static fromHex(t){return e.fromRgba255((t&16711680)>>16,(t&65280)>>8,t&255,255)}static fromHexString(t){let n=t.startsWith(`#`)?t.slice(1):t;n=n.startsWith(`0x`)?n.slice(2):n,n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return isNaN(r)?(console.error(`Invalid color hex string: ${t}`),null):n.length===6?e.fromRgba255(r>>16&255,r>>8&255,r&255,255):n.length===8?e.fromRgba255(r>>24&255,r>>16&255,r>>8&255,r&255):(console.error(`Unsupported hex string length: ${t}`),null)}static white=e.fromRgba255(255,255,255,255);static black=e.fromRgba255(0,0,0,255);static red=e.fromRgba255(255,0,0,255);static lerp(t,n,r){return r=Math.max(0,Math.min(1,r)),new e(t.r+(n.r-t.r)*r,t.g+(n.g-t.g)*r,t.b+(n.b-t.b)*r,t.a+(n.a-t.a)*r)}get rgb24(){let e=Math.round(this.r*255),t=Math.round(this.g*255),n=Math.round(this.b*255);return e<<16|t<<8|n}get rgbaNormalized(){return{r:this.r,g:this.g,b:this.b,a:this.a}}get rgba255(){return{r:Math.round(this.r*255),g:Math.round(this.g*255),b:Math.round(this.b*255),a:Math.round(this.a*255)}}};function ht(e,t,n){let r=!0,i,a=1e3/60,o=performance.now(),s=0;function c(l){if(!r)return;i=requestAnimationFrame(c);let u=Math.min(l-o,25);for(o=l,s+=u;s>=a;)e(a),s-=a;t(s/a),n?.()}return i=requestAnimationFrame(c),()=>{r=!1,cancelAnimationFrame(i)}}function gt(e,t){let n=e.getBoundingClientRect(),r=e=>[e.clientX,e.clientY],i=e=>{let[t,i]=r(e);return[(t-n.left)/(n.width+1),(i-n.top)/(n.height+1)]};function a(n){e.setPointerCapture(n.pointerId),t.on_down(i(n))}function o(n){try{e.releasePointerCapture(n.pointerId)}catch{}t.on_up(i(n))}function s(e){t.on_move(i(e))}function c(){n=e.getBoundingClientRect()}e.addEventListener(`pointerdown`,a),e.addEventListener(`pointermove`,s),document.addEventListener(`pointerup`,o);let l=new ResizeObserver(()=>c());return l.observe(e),document.addEventListener(`scroll`,c,{passive:!0,capture:!0}),window.addEventListener(`resize`,c,{passive:!0}),()=>{e.removeEventListener(`pointerdown`,a),e.removeEventListener(`pointermove`,s),document.removeEventListener(`pointerup`,o),l.disconnect(),document.removeEventListener(`scroll`,c),window.removeEventListener(`resize`,c)}}function _t(e,t,n){let r=[500,500],i,a,o,s,c=!1,l=0;function u(n){return[n[0]*e,n[1]*t]}let d=gt(n,{on_down(e){e=u(e),a=void 0,i=e,o=e,r=e,c=!1},on_up(e){e=u(e),i=void 0,a=e},on_move(e){if(e=u(e),r=e,i){let t=i[0]-e[0],n=i[1]-e[1];t*t+n*n>64&&(c=!0)}}});return{get is_hovering(){return r},get is_down(){return i},get is_up(){return a},get is_just_down(){return o},get is_double_click(){return s},get has_moved_after_last_down(){return c},update(e){s=void 0,o&&l>0&&(s=o,l=0),l-=e,o=void 0,a=void 0},cleanup(){d()}}}const Y={black:`#000000`,darkblue:`#1D2B53`,darkred:`#7E2553`,darkgreen:`#008751`,brown:`#AB5236`,gray:`#5F574F`,lightgray:`#C2C3C7`,white:`#FFF1E8`,red:`#FF004D`,orange:`#FFA300`,yellow:`#FFEC27`,green:`#00E436`,blue:`#29ADFF`,purple:`#83769C`,pink:`#FF77A8`,sand:`#FFCCAA`},X={white:`#fbf8fd`,light:`#a1a9d1`,blue:`#007fff`,darkblue:`#24256f`,black:`#141218`,purple:`#5f0e52`,red:`#fd1a43`,pink:`#ffb16c`,yellow:`#fede5b`,green:`#74ead6`},Z={sand1:`#fff2b9`,sand2:`#ffda80`,sand3:`#feb746`,sand4:`#d16318`,sand5:`#89240d`,orange1:`#fe9f5d`,orange2:`#fd6c09`,orange3:`#db4422`,red1:`#fe6a7d`,red2:`#f01e5b`,red3:`#930d3d`,red4:`#5b0d27`,purple1:`#e8acfd`,purple2:`#c453d4`,purple3:`#8e2082`,purple4:`#640e55`,blue1:`#56dfcf`,blue2:`#35c0c6`,blue3:`#1c6e82`,blue4:`#16416e`,green1:`#8beec0`,green2:`#38be97`,green3:`#228f66`,green4:`#126144`,green5:`#083523`,lime1:`#e2d753`,lime2:`#b3a71c`,lime3:`#777211`,mor1:`#b29ca6`,mor2:`#795670`,mor3:`#4e2140`,mor4:`#290e0f`},Q={black:J.fromHexString(Y.black),darkblue:J.fromHexString(Y.darkblue),darkred:J.fromHexString(Y.darkred),darkgreen:J.fromHexString(Y.darkgreen),brown:J.fromHexString(Y.brown),gray:J.fromHexString(Y.gray),lightgray:J.fromHexString(Y.lightgray),white:J.fromHexString(Y.white),red:J.fromHexString(Y.red),orange:J.fromHexString(Y.orange),yellow:J.fromHexString(Y.yellow),green:J.fromHexString(Y.green),blue:J.fromHexString(Y.blue),purple:J.fromHexString(Y.purple),pink:J.fromHexString(Y.pink),sand:J.fromHexString(Y.sand)},vt={white:J.fromHexString(X.white),light:J.fromHexString(X.light),blue:J.fromHexString(X.blue),darkblue:J.fromHexString(X.darkblue),black:J.fromHexString(X.black),purple:J.fromHexString(X.purple),red:J.fromHexString(X.red),pink:J.fromHexString(X.pink),yellow:J.fromHexString(X.yellow),green:J.fromHexString(X.green)};J.fromHexString(Z.sand1),J.fromHexString(Z.sand2),J.fromHexString(Z.sand3),J.fromHexString(Z.sand4),J.fromHexString(Z.sand5),J.fromHexString(Z.orange1),J.fromHexString(Z.orange2),J.fromHexString(Z.orange3),J.fromHexString(Z.red1),J.fromHexString(Z.red2),J.fromHexString(Z.red3),J.fromHexString(Z.red4),J.fromHexString(Z.purple1),J.fromHexString(Z.purple2),J.fromHexString(Z.purple3),J.fromHexString(Z.purple4),J.fromHexString(Z.blue1),J.fromHexString(Z.blue2),J.fromHexString(Z.blue3),J.fromHexString(Z.blue4),J.fromHexString(Z.green1),J.fromHexString(Z.green2),J.fromHexString(Z.green3),J.fromHexString(Z.green4),J.fromHexString(Z.green5),J.fromHexString(Z.lime1),J.fromHexString(Z.lime2),J.fromHexString(Z.lime3),J.fromHexString(Z.mor1),J.fromHexString(Z.mor2),J.fromHexString(Z.mor3),J.fromHexString(Z.mor4);function yt(e){let t={on_new_renderFn:e=>{o(e)},on_destroy:()=>{a&&=(e.removeChild(a.canvas),a.cleanup(),void 0),n=!0}},n=!1,r,i=!1,a,o=async t=>{if(r=t,i)return;a&&=(e.removeChild(a.canvas),a.cleanup(),void 0),i=!0;let s=r;if(a=await s(e),n){a.cleanup(),a=void 0;return}i=!1,r!==s&&o(r)};return t}var bt=U(`<div class="w-full h-full flex justify-content items-center">`);const xt=e=>{I(()=>{let{on_new_renderFn:n,on_destroy:r}=yt(t);N(()=>{n(e.renderFn)}),L(()=>{r()})});let t;return(()=>{var e=bt(),n=t;return typeof n==`function`?Pe(n,e):t=e,e})()};var St,Ct,wt,Tt,Et;function Dt(){St=new et().springTo(300,{stiffness:200,damping:10}),Ct=new et().springTo(500,{stiffness:100,damping:5}),wt=new et(300),Tt=new et(300),wt.springTo(0),Tt.springTo(100,{stiffness:1e3,damping:10}),Et=new tt().set_line(`2000 pong`)}var Ot=()=>{St.springTo(300,{stiffness:200,damping:10}),Ct.springTo(500,{stiffness:100,damping:5}),wt.springTo(0),Tt.springTo(0,{stiffness:1e3,damping:10})},kt=()=>{St.springTo(0,{stiffness:200,damping:10}),Ct.springTo(0,{stiffness:100,damping:5}),wt.springTo(300),Tt.springTo(300,{stiffness:1e3,damping:10})};function At(e){St.update(e/1e3),Ct.update(e/1e3),wt.update(e/1e3),Tt.update(e/1e3),Et.update(e),Et.action===`ping`?(Et.set_line(`2000 pong`),Ot()):Et.action===`pong`&&(Et.set_line(`2000 ping`),kt())}var jt=()=>{Mt.beginFrame(),Mt.strokeRect(1024/2,1024/2,1023,1023,1,Q.white),Mt.fillRect(1024/2+Ct.value,200,1024,1024,Q.green),Mt.fillRect(1024/2+St.value,0,1024,1024,Q.blue),Mt.fillRect(1024/2-256,812+wt.value,512,512,Q.orange),Mt.fillRect(1024/2-256,512+Tt.value,256,256,vt.white),Mt.endFrame()},Mt,Nt=e=>{Mt=e};async function Pt(e){let t=mt(1024,1024,e,jt);Nt(t.batch),Dt();let n=ht(At,jt);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const Ft={id:`Spring`,title:`Spring`,description:`Using springs instead of tweening adds life and removes stiffness.`,code:`
import { AnimChannel, 
         colors } from 'twisterjs';

let x: AnimChannel

function _init() {
  
    x = new AnimChannel()
                 .springTo(300, { 
                       stiffness: 200, 
                       damping: 10 
                    })
}

function _update(delta: number) {
    x.update(delta / 1000)
}


const _render = () => {
    batch.beginFrame()

    batch.fillRect(x.value, 
        0, 
        1024, 1024, 
        colors.blue)

    batch.endFrame()
}
`,demo:Pt};var It,Lt=()=>{It=0},Rt=e=>{It+=e/1e3},zt=()=>{Bt.beginFrame(),Bt.strokeRect(1024/2,1024/2,1024,1024,1,Q.white),Bt.fillRect(1024/2,1024/2,1023,1023,Q.darkblue);let e=K(500,500),t=K(900,900),n=Math.sin(It)*Math.PI*2;t=Ye(t,n),Bt.strokeLine(e.x,e.y,t.x,t.y,1,Q.pink),Bt.endFrame()},Bt,Vt=e=>{Bt=e};async function Ht(e){let t=mt(1024,1024,e,zt);Vt(t.batch),Lt();let n=ht(Rt,zt);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const Ut={id:`Welcome`,title:`Import as esnext module`,description:`Hey fellow indie, TwisterJS is only available as an esnext module.`,code:`
import { TwisterJS, Loop } from 'twisterjs'

function _update(delta: number) {
   console.log(TwisterJS, delta) // logs TwisterJS
}

function _render() {
}

// starts a game loop using requestAnimationFrame
let loop_cleanup = Loop(_update, _render)
`,demo:Ht};var Wt,Gt,Kt=()=>{Wt=new et,Gt=new tt().set_line(`1000 jump 200 land 80`)},qt=e=>{Gt.update(e),Gt.action===`jump`&&Wt.springTo(1e3),Gt.action===`land`&&Wt.springTo(900),Gt.action===`end`&&(Wt.springTo(0),Gt.set_line(`1000 jump 200 land 80`)),Wt.update(e/1e3)},Jt=()=>{Yt.beginFrame(),Yt.fillRect(Wt.value,0,100,100,vt.blue),Yt.endFrame()},Yt,Xt=e=>{Yt=e};async function Zt(e){let t=mt(1024,1024,e,Jt);Xt(t.batch),Kt();let n=ht(qt,Jt);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const Qt={id:`Delay`,title:`Delay`,description:`Delay`,code:`
import { AnimChannel, Delay } from 'twisterjs'

let x: AnimChannel

let delay: Delay

const _init = () => {

    x = new AnimChannel()
    delay = new Delay()
             .set_line('1000 jump 200 land 80')
}

const _update = (delta: number) => {
    delay.update(delta)

    if (delay.action === 'jump') {
        x.springTo(1000)
    }
    if (delay.action === 'land') {
        x.springTo(900)
    }
    if (delay.action === 'end') {
        x.springTo(0)
        delay.set_line('1000 jump 200 land 80')
    }

    x.update(delta / 1000)
}

function _render() {

   batch.beginFrame()
   batch.fillRect(x.value, 0, 100, 100, vibrant.blue)
   batch.endFrame()
}
`,demo:Zt};var $t,en,tn,nn,rn,an=()=>{nn=new et,tn=new et,$t=it(K(512,512),{radius:1,mass:1,maxSpeed:1e3,maxForce:2500,turnRate:Math.PI*2}),en=[new at(3,1,()=>K(nn.value,500)),new ut(1,.25)],rn=new tt().set_line(`3000 right`)},on=e=>{ct($t,en,[],e/1e3),tn.springTo($t.rotation+Math.PI*.5,{stiffness:1e3,damping:10}),tn.update(e/1e3),nn.update(e/1e3),rn.update(e),rn.action===`left`?(nn.springTo(0),rn.set_line(`3000 right`)):rn.action===`right`&&(nn.springTo(1024),rn.set_line(`3000 left`))},sn=()=>{cn.beginFrame(),cn.fillRect(512,512,1024,1024,vt.darkblue),cn.strokeRect(512,512,1020,1020,4,Q.darkblue),cn.fillRoundRect($t.position.x,$t.position.y,80,140,16,vt.yellow,tn.value),cn.fillRect(nn.value,500,30,30,Q.black),cn.endFrame()},cn,ln=e=>{cn=e};async function un(e){let t=mt(1024,1024,e,sn);ln(t.batch),an();let n=ht(on,sn);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const dn={id:`Steering`,title:`Steering Behaviors`,description:`Control a moving agent steer according to some Steering Behaviors`,code:`
import { AnimChannel, vec2, vibrant } from 'twisterjs'
import { type Agent, agent, update_agent, type SteeringBehavior,  Seek, WanderJitter, } from 'twisterjs'

let agent1: Agent

let behaviors: SteeringBehavior[]

let theta: AnimChannel

let seek_x: AnimChannel

let delay: Delay

const _init = () => {

    seek_x = new AnimChannel()

    theta = new AnimChannel()

    agent1 = agent(vec2(512, 512), {
        radius: 1,
        mass: 1,
        maxSpeed: 1000,
        maxForce: 2500,
        turnRate: Math.PI * 2
    })

    const seek_target = () => {
        return vec2(seek_x.value, 500)
    }

    behaviors = [
        new Seek(3, 1, seek_target),
        new WanderJitter(1, .25)
    ]

    delay = new Delay().set_line('3000 right')
}

const _update = (delta: number) => {
    update_agent(agent1, behaviors, [], delta / 1000)

    theta.springTo(agent1.rotation + Math.PI * 0.5, {
        stiffness: 1000,
        damping: 10
    })

    theta.update(delta / 1000)

    seek_x.update(delta / 1000)

    delay.update(delta)

    if (delay.action === 'left') {
        seek_x.springTo(0)
        delay.set_line('3000 right')
    } else if (delay.action === 'right') {
        seek_x.springTo(1024)
        delay.set_line('3000 left')
    }
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, vibrant.darkblue)
    batch.strokeRect(512, 512, 1020, 1020, 4, colors.darkblue)

    batch.fillRoundRect(agent1.position.x, agent1.position.y, 80, 140, 16, vibrant.yellow, theta.value)

    batch.fillRect(seek_x.value, 500, 30, 30, colors.black)

    batch.endFrame()
}


`,demo:un};var fn=e=>{},pn=()=>{$.beginFrame(),$.fillRect(512,512,1024,1024,Q.red),$.fillRoundRect(500,100,300,80,10,Q.green),$.strokeRect(500,200,300,80,8,Q.orange),$.fillCircle(300,400,60,Q.blue),$.strokeCircle(800,400,60,8,Q.blue),$.strokeLine(100,600,900,600,2,Q.white),$.strokeLine(200,700,900,700,8,Q.white),$.strokeLine(300,800,900,800,16,Q.white),$.strokeLine(400,900,800,900,32,Q.white),$.endFrame()},$,mn=e=>{$=e};async function hn(e){let t=mt(1024,1024,e,pn);mn(t.batch);let n=ht(fn,pn);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const gn={id:`Shapes`,title:`Shapes`,description:`Shapes`,code:`
import { BatchRenderer, colors, Init_canvas, Loop } from "twisterjs"

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.red)

    batch.fillRoundRect(500, 100, 300, 80, 10, colors.green)

    batch.strokeRect(500, 200, 300, 80, 8, colors.orange)


    batch.fillCircle(300, 400, 60, colors.blue)
    batch.strokeCircle(800, 400, 60, 8, colors.blue)

    batch.strokeLine(100, 600, 900, 600, 2, colors.white)
    batch.strokeLine(200, 700, 900, 700, 8, colors.white)
    batch.strokeLine(300, 800, 900, 800, 16, colors.white)
    batch.strokeLine(400, 900, 800, 900, 32, colors.white)

    batch.endFrame()
}

let batch: BatchRenderer
async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    batch = res.batch
}

`,demo:hn};var _n=e=>{},vn=()=>{yn.beginFrame(),yn.fillRect(512,512,1024,1024,Q.blue),yn.fillRect(0,0,1024,1024,Q.red),yn.endFrame()},yn,bn=e=>{yn=e};async function xn(e){let t=mt(1024,1024,e,vn);bn(t.batch);let n=ht(_n,vn);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const Sn={id:`Webpage Integration`,title:`Add to a Webpage`,description:`A manager to add your game into your webpage and cleanup after it.`,code:`
/**
 * This example uses Solid.JS Integration on how to append your game canvas to a webpage
 * safely so it cleans up after leaving or replacing the page
 */

import { createEffect, onCleanup, onMount } from "solid-js"
import { AppendAsyncGameToDomManager, type RenderFn } from "twisterjs"


export const PreviewCanvas = (props: { renderFn: RenderFn }) => {


  onMount(() => {
    let { on_new_renderFn, on_destroy }= AppendAsyncGameToDomManager(el)

    createEffect(() => {
      on_new_renderFn(props.renderFn)
    })

    onCleanup(() => {
      on_destroy()
    })
  })

  let el!: HTMLDivElement

  return (<>
    <div ref={el} class='w-full h-full flex justify-content items-center'></div>
  </>)
}


// Usage of PreviewCanvas

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    _set_ctx(res.batch)
    
    let loop_cleanup = Loop(_update, _render)

    return {
        canvas: res.canvas,
        cleanup: () => {
            res.cleanup()
            loop_cleanup()
        }
    }
}

const MyGamePage = () => {

   return (<>
     <PreviewCanvas renderFn={demo}/>
   </>)
}


// Note: If you are using the Init_canvas to obtain the canvas;
// The Canvas is always automatically resized to parent element's bounds
// So you should style the canvas as such

/*
canvas.twisterjs-responsive-full {
  width: 100%;
  height: 100%;
  background-color: transparent;
  touch-action: none;
  pointer-events: all;
  display: block;
  cursor: none;
}
*/
`,demo:xn};var Cn,wn,Tn=()=>{Cn=K(500,500),wn=new et},En=e=>{Cn=K(On.is_hovering[0],On.is_hovering[1]),wn.update(e/1e3),On.is_just_down&&wn.springTo(0),On.is_up&&wn.springTo(1),On.update(e)},Dn=()=>{kn.beginFrame(),kn.fillRect(512,512,1024,1024,Q.red);let e=J.lerp(Q.white,Q.blue,wn.value);kn.fillRect(Cn.x,Cn.y,100,100,e),kn.endFrame()},On,kn,An=(e,t)=>{kn=e,On=t};async function jn(e){let t=mt(1024,1024,e,Dn),n=_t(1024,1024,t.canvas);An(t.batch,n),Tn();let r=ht(En,Dn);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),r()}}}const Mn=[Ut,Ft,Qt,dn,gn,Sn,{id:`Drag`,title:`Mouse Controls`,description:`Listen to Mouse events`,code:`
import { AnimChannel, BatchRenderer, Color, colors, DragHandler, Init_canvas, Loop, vec2, type Vec2 } from "twisterjs"


let cursor_xy: Vec2
let color_lerp_t: AnimChannel

const _init = () => {
    cursor_xy = vec2(500, 500)
    color_lerp_t = new AnimChannel()
}

const _update = (delta: number) => {

    cursor_xy = vec2(drag.is_hovering[0], drag.is_hovering[1])

    color_lerp_t.update(delta / 1000)

    if (drag.is_just_down) {
        color_lerp_t.springTo(0)
    }
    
    if (drag.is_up) {
        color_lerp_t.springTo(1)
    }

    drag.update(delta)
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.red)

    let color = Color.lerp(colors.white, colors.blue, color_lerp_t.value)
    batch.fillRect(cursor_xy.x, cursor_xy.y, 100, 100, color)

    batch.endFrame()
}

let drag: DragHandler
let batch: BatchRenderer
const _set_ctx = (b: BatchRenderer, d: DragHandler) => {
    batch = b
    drag = d
}

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    let drag = DragHandler(1024, 1024, res.canvas)

    _set_ctx(res.batch, drag)

    _init()
    
    let loop_cleanup = Loop(_update, _render)

    return {
        canvas: res.canvas,
        cleanup: () => {
            res.cleanup()
            loop_cleanup()
        }
    }
}


`,demo:jn}];var Nn=c(o(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;(i===`object`||i===`function`)&&!Object.isFrozen(r)&&n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var S=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function C(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=S.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],e[0]===`(`&&n++)}return i}).map(e=>`(${e})`).join(t)}var w=/\b\B/,T=`[a-zA-Z]\\w*`,E=`[a-zA-Z_]\\w*`,D=`\\b\\d+(\\.\\d+)?`,O=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,k=`\\b(0b[01]+)`,A=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,j=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},M={begin:`\\\\[\\s\\S]`,relevance:0},N={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[M]},P={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[M]},F={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},I=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},L=I(`//`,`$`),ee=I(`/\\*`,`\\*/`),te=I(`#`,`$`),ne={scope:`number`,begin:D,relevance:0},re={scope:`number`,begin:O,relevance:0},ie={scope:`number`,begin:k,relevance:0},ae={scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[M,{begin:/\[/,end:/\]/,relevance:0,contains:[M]}]},oe={scope:`title`,begin:T,relevance:0},se={scope:`title`,begin:E,relevance:0},ce={begin:`\\.\\s*`+E,relevance:0},le=Object.freeze({__proto__:null,APOS_STRING_MODE:N,BACKSLASH_ESCAPE:M,BINARY_NUMBER_MODE:ie,BINARY_NUMBER_RE:k,COMMENT:I,C_BLOCK_COMMENT_MODE:ee,C_LINE_COMMENT_MODE:L,C_NUMBER_MODE:re,C_NUMBER_RE:O,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:te,IDENT_RE:T,MATCH_NOTHING_RE:w,METHOD_GUARD:ce,NUMBER_MODE:ne,NUMBER_RE:D,PHRASAL_WORDS_MODE:F,QUOTE_STRING_MODE:P,REGEXP_MODE:ae,RE_STARTERS_RE:A,SHEBANG:j,TITLE_MODE:oe,UNDERSCORE_IDENT_RE:E,UNDERSCORE_TITLE_MODE:se});function ue(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function R(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function de(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=ue,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function fe(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function pe(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function me(e,t){e.relevance===void 0&&(e.relevance=1)}var he=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},ge=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],z=`keyword`;function _e(e,t,n=z){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,_e(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,ve(n[0],n[1])]})}}function ve(e,t){return t?Number(t):ye(e)?0:1}function ye(e){return ge.includes(e.toLowerCase())}var be={},B=e=>{console.error(e)},xe=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Se=(e,t)=>{be[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),be[`${e}/${t}`]=!0)},Ce=Error();function V(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function we(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw B(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),Ce;if(typeof e.beginScope!=`object`||e.beginScope===null)throw B(`beginScope must be object`),Ce;V(e,e.begin,{key:`beginScope`}),e.begin=C(e.begin,{joinWith:``})}}function Te(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw B(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),Ce;if(typeof e.endScope!=`object`||e.endScope===null)throw B(`endScope must be object`),Ce;V(e,e.end,{key:`endScope`}),e.end=C(e.end,{joinWith:``})}}function Ee(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function H(e){Ee(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),we(e),Te(e)}function De(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null),this.matcherRe=t(C(this.regexes.map(e=>e[1]),{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[R,pe,H,he].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[de,fe,me].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=_e(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return ke(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function Oe(e){return e?e.endsWithParent||Oe(e.starts):!1}function ke(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Oe(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Ae=`11.11.1`,U=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},je=i,Me=a,W=Symbol(`nomatch`),Ne=7,Pe=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=N(n[1]);return t||(xe(s.replace(`{}`,n[1])),xe(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||N(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(Se(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),Se(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};te(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,te(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!A.keywords){M.addText(P);return}let e=0;A.keywordPatternRe.lastIndex=0;let t=A.keywordPatternRe.exec(P),n=``;for(;t;){n+=P.substring(e,t.index);let r=D.case_insensitive?t[0].toLowerCase():t[0],i=u(A,r);if(i){let[e,a]=i;if(M.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=Ne&&(F+=a),e.startsWith(`_`))n+=t[0];else{let n=D.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=A.keywordPatternRe.lastIndex,t=A.keywordPatternRe.exec(P)}n+=P.substring(e),M.addText(n)}function f(){if(P===``)return;let e=null;if(typeof A.subLanguage==`string`){if(!t[A.subLanguage]){M.addText(P);return}e=v(A.subLanguage,P,!0,j[A.subLanguage]),j[A.subLanguage]=e._top}else e=S(P,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(F+=e.relevance),M.__addSublanguage(e._emitter,e.language)}function p(){A.subLanguage==null?d():f(),P=``}function m(e,t){e!==``&&(M.startScope(t),M.addText(e),M.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=D.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(P=i,d(),P=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&M.openNode(D.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(P,D.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),P=``):e.beginScope._multi&&(h(e.beginScope,t),P=``)),A=Object.create(e,{parent:{value:A}}),A}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return A.matcher.regexIndex===0?(P+=e[0],1):(ee=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?P+=t:(n.excludeBegin&&(P+=t),p(),!n.returnBegin&&!n.excludeBegin&&(P=t)),g(n,e),n.returnBegin?0:t.length}function C(e){let t=e[0],r=n.substring(e.index),i=_(A,e,r);if(!i)return W;let a=A;A.endScope&&A.endScope._wrap?(p(),m(t,A.endScope._wrap)):A.endScope&&A.endScope._multi?(p(),h(A.endScope,e)):a.skip?P+=t:(a.returnEnd||a.excludeEnd||(P+=t),p(),a.excludeEnd&&(P=t));do A.scope&&M.closeNode(),!A.skip&&!A.subLanguage&&(F+=A.relevance),A=A.parent;while(A!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function w(){let e=[];for(let t=A;t!==D;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>M.openNode(e))}let T={};function E(t,r){let a=r&&r[0];if(P+=t,a==null)return p(),0;if(T.type===`begin`&&r.type===`end`&&T.index===r.index&&a===``){if(P+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=T.rule,t}return 1}if(T=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(A.scope||`<unnamed>`)+`"`);throw e.mode=A,e}else if(r.type===`end`){let e=C(r);if(e!==W)return e}if(r.type===`illegal`&&a===``)return P+=`
`,1;if(L>1e5&&L>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return P+=a,a.length}let D=N(e);if(!D)throw B(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let O=De(D),k=``,A=a||O,j={},M=new l.__emitter(l);w();let P=``,F=0,I=0,L=0,ee=!1;try{if(D.__emitTokens)D.__emitTokens(n,M);else{for(A.matcher.considerAll();;){L++,ee?ee=!1:A.matcher.considerAll(),A.matcher.lastIndex=I;let e=A.matcher.exec(n);if(!e)break;let t=E(n.substring(I,e.index),e);I=e.index+t}E(n.substring(I))}return M.finalize(),k=M.toHTML(),{language:e,value:k,relevance:F,illegal:!1,_emitter:M,_top:A}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:je(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:I,context:n.slice(I-100,I+100),mode:t.mode,resultSoFar:k},_emitter:M};if(o)return{language:e,value:je(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:A};throw t}}function b(e){let t={value:je(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function S(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(N).filter(F).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function C(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function w(e){let t=null,n=d(e);if(u(n))return;if(te(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new U(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):S(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,C(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),te(`after:highlightElement`,{el:e,result:i,text:r})}function T(e){l=Me(l,e)}let E=()=>{k(),Se(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function D(){k(),Se(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let O=!1;function k(){function e(){k()}if(document.readyState===`loading`){O||window.addEventListener(`DOMContentLoaded`,e,!1),O=!0;return}document.querySelectorAll(l.cssSelector).forEach(w)}function A(n,r){let i=null;try{i=r(e)}catch(e){if(B(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)B(e);else throw e;i=c}i.name||=n,t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&P(i.aliases,{languageName:n})}function j(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function M(){return Object.keys(t)}function N(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function P(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function F(e){let t=N(e);return t&&!t.disableAutodetect}function I(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function L(e){I(e),a.push(e)}function ee(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function te(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function ne(e){return Se(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),Se(`10.7.0`,`Please use highlightElement now.`),w(e)}for(let t in Object.assign(e,{highlight:p,highlightAuto:S,highlightAll:k,highlightElement:w,highlightBlock:ne,configure:T,initHighlighting:E,initHighlightingOnLoad:D,registerLanguage:A,unregisterLanguage:j,listLanguages:M,getLanguage:N,registerAliases:P,autoDetection:F,inherit:Me,addPlugin:L,removePlugin:ee}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Ae,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h},le)typeof le[t]==`object`&&n(le[t]);return Object.assign(e,le),e},G=Pe({});G.newInstance=()=>Pe({}),t.exports=G,G.HighlightJS=G,G.default=G}))()).default,Pn=`[A-Za-z$_][0-9A-Za-z$_]*`,Fn=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),In=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],Ln=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),Rn=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],zn=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],Bn=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`global`],Vn=[].concat(zn,Ln,Rn);function Hn(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=Pn,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:Pn,keyword:Fn,literal:In,built_in:Vn,"variable.language":Bn},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},C={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...Ln,...Rn]}},w={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},T={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},E={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function D(e){return t.concat(`(?!`,e.join(`|`),`)`)}let O={match:t.concat(/\b/,D([...zn,`super`,`import`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},k={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},A={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},j=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,M={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(j)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:C},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),w,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,C,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},M,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:j,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},T,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},k,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},O,E,S,A,{match:/\$[(.]/}]}}function Un(e){let t=e.regex,n=Hn(e),r=Pn,i=[`any`,`void`,`number`,`boolean`,`string`,`object`,`never`,`symbol`,`bigint`,`unknown`],a={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:`keyword`,3:`title.class`}},o={beginKeywords:`interface`,end:/\{/,excludeEnd:!0,keywords:{keyword:`interface extends`,built_in:i},contains:[n.exports.CLASS_REFERENCE]},s={className:`meta`,relevance:10,begin:/^\s*['"]use strict['"]/},c={$pattern:Pn,keyword:Fn.concat([`type`,`interface`,`public`,`private`,`protected`,`implements`,`declare`,`abstract`,`readonly`,`enum`,`override`,`satisfies`]),literal:In,built_in:Vn.concat(i),"variable.language":Bn},l={className:`meta`,begin:`@`+r},u=(e,t,n)=>{let r=e.contains.findIndex(e=>e.label===t);if(r===-1)throw Error(`can not find mode to replace`);e.contains.splice(r,1,n)};Object.assign(n.keywords,c),n.exports.PARAMS_CONTAINS.push(l);let d=n.contains.find(e=>e.scope===`attr`),f=Object.assign({},d,{match:t.concat(r,t.lookahead(/\s*\?:/))});n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,d,f]),n.contains=n.contains.concat([l,a,o,f]),u(n,`shebang`,e.SHEBANG()),u(n,`use_strict`,s);let p=n.contains.find(e=>e.label===`func.def`);return p.relevance=0,Object.assign(n,{name:`TypeScript`,aliases:[`ts`,`tsx`,`mts`,`cts`]}),n}var Wn=U(`<code>`);Nn.registerLanguage(`typescript`,Un);const Gn=e=>(()=>{var t=Wn();return M(n=>{var r=e.class,i=Nn.highlight(e.code,{language:`ts`}).value;return r!==n.e&&W(t,n.e=r),i!==n.t&&(t.innerHTML=n.t=i),n},{e:void 0,t:void 0}),t})();var Kn=Symbol(`store-raw`),qn=Symbol(`store-node`),Jn=Symbol(`store-has`),Yn=Symbol(`store-self`);function Xn(e){let t;return typeof e==`object`&&!!e&&(e[m]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Zn(e,t=new Set){let n,r,i,a;if(n=e!=null&&e[Kn])return n;if(!Xn(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,a=e.length;n<a;n++)i=e[n],(r=Zn(i,t))!==i&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);let n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let s=0,c=n.length;s<c;s++)a=n[s],!o[a].get&&(i=e[a],(r=Zn(i,t))!==i&&(e[a]=r))}return e}function Qn(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function $n(e,t,n){if(e[t])return e[t];let[r,i]=j(n,{equals:!1,internal:!0});return r.$=i,e[t]=r}function er(e,t,n,r=!1){if(!r&&e[t]===n)return;let i=e[t],a=e.length;n===void 0?(delete e[t],e[Jn]&&e[Jn][t]&&i!==void 0&&e[Jn][t].$()):(e[t]=n,e[Jn]&&e[Jn][t]&&i===void 0&&e[Jn][t].$());let o=Qn(e,qn),s;if((s=$n(o,t,i))&&s.$(()=>n),Array.isArray(e)&&e.length!==a){for(let t=e.length;t<a;t++)(s=o[t])&&s.$();(s=$n(o,`length`,a))&&s.$(e.length)}(s=o[Yn])&&s.$()}var tr=Symbol(`store-root`);function nr(e,t,n,r,i){let a=t[n];if(e===a)return;let o=Array.isArray(e);if(n!==tr&&(!Xn(e)||!Xn(a)||o!==Array.isArray(a)||i&&e[i]!==a[i])){er(t,n,e);return}if(o){if(e.length&&a.length&&(!r||i&&e[0]&&e[0][i]!=null)){let t,n,o,s,c,l,u,d;for(o=0,s=Math.min(a.length,e.length);o<s&&(a[o]===e[o]||i&&a[o]&&e[o]&&a[o][i]&&a[o][i]===e[o][i]);o++)nr(e[o],a,o,r,i);let f=Array(e.length),p=new Map;for(s=a.length-1,c=e.length-1;s>=o&&c>=o&&(a[s]===e[c]||i&&a[s]&&e[c]&&a[s][i]&&a[s][i]===e[c][i]);s--,c--)f[c]=a[s];if(o>c||o>s){for(n=o;n<=c;n++)er(a,n,e[n]);for(;n<e.length;n++)er(a,n,f[n]),nr(e[n],a,n,r,i);a.length>e.length&&er(a,`length`,e.length);return}for(u=Array(c+1),n=c;n>=o;n--)l=e[n],d=i&&l?l[i]:l,t=p.get(d),u[n]=t===void 0?-1:t,p.set(d,n);for(t=o;t<=s;t++)l=a[t],d=i&&l?l[i]:l,n=p.get(d),n!==void 0&&n!==-1&&(f[n]=a[t],n=u[n],p.set(d,n));for(n=o;n<e.length;n++)n in f?(er(a,n,f[n]),nr(e[n],a,n,r,i)):er(a,n,e[n])}else for(let t=0,n=e.length;t<n;t++)nr(e[t],a,t,r,i);a.length>e.length&&er(a,`length`,e.length);return}let s=Object.keys(e);for(let t=0,n=s.length;t<n;t++)nr(e[s[t]],a,s[t],r,i);let c=Object.keys(a);for(let t=0,n=c.length;t<n;t++)e[c[t]]===void 0&&er(a,c[t],void 0)}function rr(e,t={}){let{merge:n,key:r=`id`}=t,i=Zn(e);return e=>{if(!Xn(e)||!Xn(i))return i;let t=nr(i,{[tr]:e},tr,n,r);return t===void 0?e:t}}function ir(e,t={}){let n=t.storage||globalThis.localStorage,r=t.name||`storage-${Te()}`;if(!n)return[e[0],e[1],null];let i=t.storageOptions,a=t.serialize||JSON.stringify.bind(JSON),o=t.deserialize||JSON.parse.bind(JSON),s=n.getItem(r,i),c=typeof e[0]==`function`?t=>{try{let n=o(t);e[1](()=>n)}catch{}}:t=>{try{let n=o(t);e[1](rr(n))}catch{}},l=!0;if(s instanceof Promise?s.then(e=>l&&e&&c(e)):s&&c(s),typeof t.sync?.[0]==`function`){let n=typeof e[0]==`function`?e[0]:()=>e[0];t.sync[0](e=>{e.key!==r||(e.url||globalThis.location.href)!==globalThis.location.href||e.newValue===a(F(n))||c(e.newValue)})}return[e[0],typeof e[0]==`function`?o=>{let s=e[1](o),c=o==null?o:a(s);return t.sync?.[1](r,c),c==null?n.removeItem(r,i):n.setItem(r,c,i),l=!1,s}:(...o)=>{e[1](...o);let s=a(F(()=>e[0]));t.sync?.[1](r,s),n.setItem(r,s,i),l=!1},s]}var ar=U(`<div class="pt-24 pb-12 px-4 max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-3 lg:sticky lg:top-24"><h1 class="text-4xl font-bold tracking-tighter leading-node mb-3 dark:text-white">TwisterJS<span class=text-accent-500>.</span></h1><p class="text-xs text-zinc-500 dark:text-zinc-400 mb-8 font-medium leading-relaxed max-w-50">The subatomic modules for JS13k. Tiny Modules for Indie Game Developers.</p><div class="mb-8 space-y-4"><div class=group><div class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-2 flex items-center gap-2"><span class="w-1 h-1 bg-brand-500 rounded-xs"></span>Quick Start:</div><div class="relative group/code cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xs p-3 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 hover:border-brand-500/30 transition-all shadow-xs"><code class="block whitespace-nowrap overflow-hidden text-ellipsis">pnpm add twisterjs</code><div class="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity"><svg class="w-3.5 h-3.5 text-brand-500"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div></div></div><div class=group><div class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-2 flex items-center gap-2"><span class="w-1 h-1 bg-brand-500 rounded-xs"></span>Usage:</div><div class="relative group/code cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xs p-3 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 hover:border-brand-500/30 transition-all shadow-xs"><div class="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity"><svg class="w-3.5 h-3.5 text-brand-500"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div></div></div></div><div class="flex flex-col gap-3"><button class="w-full px-5 py-3 bg-[#1a1a1a] dark:bg-zinc-100 dark:text-zinc-900 text-white rounded-xs font-bold text-[11px] uppercase tracking-widest hover:bg-black dark:hover:bg-white transition-all shadow-xs active:scale-95">API Reference</button><div class="flex gap-2"><button class="flex-1 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xs font-bold text-[10px] uppercase tracking-widest hover:border-brand-500 transition-all">GitHub`),or=U(`<div class=lg:col-span-9><div class="flex items-center justify-between px-2 mb-4"><div class="flex items-center gap-3"><span class="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500">Example Library</span><span class="px-2 py-0.5 bg-brand-500/10 text-brand-500 rounded-xs text-[8px] font-bold uppercase"> examples</span></div></div><div><div><div class="p-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50"><div class="text-[9px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Select an Example</div></div><div class="flex-1 overflow-y-auto scrollbar-hide py-1"></div></div><div class="flex-1 flex flex-col bg-[#0d0d0d] min-w-0"><div class="p-4 border-b border-white/5 flex items-center justify-between bg-black/40"><div class="flex flex-col"><span class="text-[10px] font-bold text-white uppercase tracking-widest"></span><span class="text-[9px] text-brand-500 font-mono opacity-80"></span></div><button class="flex gap-1.5 group/controls p-1.5 hover:bg-white/5 rounded-xs transition-colors"><div class="w-2.5 h-2.5 rounded-xs bg-red-500/40 group-hover/controls:bg-red-500 transition-colors"></div><div class="w-2.5 h-2.5 rounded-xs bg-yellow-500/40 group-hover/controls:bg-yellow-500 transition-colors"></div><div class="w-2.5 h-2.5 rounded-xs bg-green-500/40 group-hover/controls:bg-green-500 transition-colors"></div></button></div><div class="flex-1 overflow-hidden grid grid-cols-2"><div class="relative border-r border-white/5 bg-[#0a0a0a] flex flex-col min-h-0 max-md:h-100"><div class="flex-1 overflow-y-auto p-3 custom-scrollbar-minimal"><pre class="mono text-[11px] text-zinc-400 leading-relaxed selection:bg-brand-500/40"></pre></div><div class="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-black to-transparent pointer-events-none opacity-40"></div></div><div class="bg-black flex items-center justify-center p-1"><div><div class="absolute inset-0 bg-brand-500/20 blur-xs rounded-xs opacity-50 -z-10 animate-pulse"></div><div class="relative w-full h-full aspect-square bg-black roundex-xs overflow-hidden flex items-center justify-center"></div><div class="mt-4 flex flex-col items-center gap-1"><div class="text-[8px] font-mono text-white/30 uppercase tracking-[0.4em]">Rendering Loop</div><div class="h-px w-8 bg-brand-500/30">`),sr=U(`<button><div></div><div class=min-w-0><div></div><div class="text-[9px] text-zinc-300 dark:text-zinc-700 font-mono truncate">`);const cr=e=>{let t=e=>{console.log(e),navigator.clipboard.writeText(e)},n=`import { TwisterJS, add, vec2 } from 'twisterjs'

console.log(TwisterJS, add(vec2(0, 0), vec2(0, 0)))`;return(()=>{var r=ar(),i=r.firstChild,a=i.firstChild.firstChild.nextSibling.nextSibling,o=a.firstChild,s=o.firstChild.nextSibling,c=o.nextSibling.firstChild.nextSibling,l=c.firstChild,u=a.nextSibling.firstChild,d=u.nextSibling.firstChild;return s.$$click=()=>t(`pnpm add twisterjs`),c.$$click=()=>t(n),G(c,V(Gn,{class:`block leading-relaxed whitespace-pre-wrap`,code:n}),l),Ne(u,`click`,e.onExplore,!0),d.$$click=()=>window.open(`https://github.com/eguneys/twisterjs`,`_blank`),G(i,V(lr,{}),null),r})()};var lr=()=>{let e,[t,n]=j(!1);N(()=>{let e=()=>{n(!!document.fullscreenElement)};document.addEventListener(`fullscreenchange`,e),L(()=>document.removeEventListener(`fullscreenchange`,e))});let r=()=>{e&&(document.fullscreenElement?document.exitFullscreen():e.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)}))},[i,a]=ir(j(Mn[0].id),{name:`.twisterjs.active-snippet-id`}),o=P(()=>Mn.find(e=>e.id===i()));return(()=>{var n=or(),s=n.firstChild,c=s.firstChild.firstChild.nextSibling,l=c.firstChild,u=s.nextSibling,d=u.firstChild,f=d.firstChild.nextSibling,p=d.nextSibling.firstChild,m=p.firstChild,h=m.firstChild,g=h.nextSibling,_=m.nextSibling;_.firstChild.nextSibling.nextSibling;var v=p.nextSibling.firstChild,y=v.firstChild.firstChild,b=v.nextSibling.firstChild,x=b.firstChild.nextSibling;G(c,()=>Mn.length,l);var S=e;return typeof S==`function`?Pe(S,u):e=u,G(f,V(H,{each:Mn,children:e=>(()=>{var t=sr(),n=t.firstChild,r=n.nextSibling.firstChild,o=r.nextSibling;return t.$$click=()=>a(e.id),G(r,()=>e.title),G(o,()=>e.id),M(a=>{var o=`w-full text-left px-4 py-3.5 transition-all group flex items-start gap-3 border-b border-zinc-50/50 dark:border-zinc-900/50 ${i()===e.id?`bg-white dark:bg-zinc-900 shadow-xs z-10`:`hover:bg-zinc-100/30 dark:hover:bg-zinc-800/30`}`,s=`mt-1.5 w-1.5 h-1.5 rounded-xs shrink-0 transition-all ${i()===e.id?`bg-brand-500 scale-125`:`bg-zinc-200 dark:bg-zinc-800`}`,c=`text-[10px] font-bold uppercase tracking-wide truncate ${i()===e.id?`text-zinc-900 dark:text-zinc-100`:`text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400`}`;return o!==a.e&&W(t,a.e=o),s!==a.t&&W(n,a.t=s),c!==a.a&&W(r,a.a=c),a},{e:void 0,t:void 0,a:void 0}),t})()})),G(h,()=>o().title),G(g,()=>o().description),_.$$click=r,G(y,V(Gn,{get code(){return o().code.trim()}})),G(x,V(xt,{get renderFn(){return o().demo}})),M(e=>{var n=`bg-white dark:bg-zinc-900 rounded-xs border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-xs flex flex-col md:flex-row min-h-140 md:h-125 transition-all ${t()?`h-screen w-screen rounded-none border-none`:``}`,r=`w-full md:w-56 bg-zinc-50/30 dark:bg-zinc-950/30 border-r border-zinc-100 dark:border-zinc-800 flex flex-col overflow-hidden shrink-0 ${t()?`max-md:max-h-40`:`max-h-60 md:max-h-none`}`,i=t()?`Exit Fullscreen`:`Enter Fullscreen`,a=`w-full relative ${t()?`max-w-125`:`max-w-60`}`;return n!==e.e&&W(u,e.e=n),r!==e.t&&W(d,e.t=r),i!==e.a&&Me(_,`title`,e.a=i),a!==e.o&&W(b,e.o=a),e},{e:void 0,t:void 0,a:void 0,o:void 0}),n})()};je([`click`]);const ur=[{id:`AnimChannel`,name:`new AnimChannel(startValue: number)`,category:`Animation`,group:`AnimChannel`,description:`A class for animating a value`,example:`
let x = new AnimChannel()

/* Animate 'x.value' to 100 in a Spring Motion
x.springTo(100, { stiffness: 100, damping: 10 })

/* call update with passed seconds on each frame */
x.update(delta / 1000)

console.log(x.value) // x.value animates on each render
`}],dr=[{id:`Delay`,name:`new Delay()`,category:`Timing`,group:`Delay`,description:`A class for timing events`,example:`
let d = new Delay()
d.set_line('20 spawn 800 die 100')

/* in your update loop */
d.update(delta)

if (d.action === 'spawn') {
  // this will fire once after 20 ms after 'set_line' is called
}
if (d.action === 'die') {
  // die event after 820 ms
}

if (d.action === 'end') {
 // finally end event after 920 ms
}

/* set_line can be re-used multiple times, but it will reset the previous one */
`}],fr=[{id:`BatchRenderer`,name:`BatchRenderer`,category:`Graphics`,group:`Renderer`,description:`A class for drawing simple shapes using WebGL with Batched Rendering`,example:`
// BatchRenderer is obtained through an Init_canvas
let  { batch } = Init_canvas(/* */)


/* draw each frame in your render function */

    batch.beginFrame()

    /* draw your shapes here */
    batch.fillRect(/* */)
     
    batch.endFrame()
`},{id:`Init_canvas`,name:`Init_canvas(game_width: number, game_height: number, el: HTMLElement, _render: () => void): void`,category:`Graphics`,group:`Renderer`,description:`A function to create a canvas, append to the DOM, and enable drawing with BatchRenderer`,example:`
import { Init_canvas } from 'twisterjs'

let el: HTMLElement = document.getElementById('app')!

let { batch, canvas, cleanup } = Init_canvas(1920, 1080, el, _render)

function _render() {
  // draw using batch
}

function _on_cleanup() {
  // call cleanup to destroy the WebGL context
  cleanup()
}


// canvas is already appended to el and canvas gets resized automatically to el bounds.

// style your canvas to fit within your el bounds
/*
canvas.twisterjs-responsive-full {
  width: 100%;
  height: 100%;
  background-color: transparent;
  touch-action: none;
  pointer-events: all;
  display: block;
}
*

`},{id:`AppendAsyncGameToDomManager`,name:`AppendAsyncGameToDomManager`,category:`Graphics`,group:`Integration`,description:`A manager to append your game canvas to DOM safely with cleanup`,example:`
  const renderFn = async () => {
    let { canvas, cleanup } = Init_canvas(...)

    // load your game

    const _on_cleanup = () => {
       // your cleanup logic here
       cleanup()
    }

    return {
      canvas,
      cleanup: _on_cleanup
    }
  }

  /** Sample demonstration through SolidJS API **/
  onMount(() => {
      let { on_new_renderFn, on_destroy }= AppendAsyncGameToDomManager(el)

      createEffect(() => {
        // renderFn could be a reactive property
        // so that on_new_renderFn gets called on every change
        // it's safe because cleanup will happen accordingly
        on_new_renderFn(renderFn)
      })

      onCleanup(() => {
        on_destroy()
      })
  })
`}],pr=[{id:`Loop`,name:`Loop(update: (dt: number) => void, render: (alpha: number) => void, after_render?: () => void)`,category:`Utils`,group:`General`,description:`Starts a game loop`,example:`
function _update(delta: number) {
   // gets called every frame for updating the game
}

function _render() {
   // gets called once every frame for rendering the game
}

let loop_cleanup = Loop(_update, _render)

// call loop_cleanup to stop the loop and cleanup
function _on_cleanup() {
  loop_cleanup()
}

`},{id:`Mouse Input`,name:`new DragHandler(game_width: number, game_height: number, canvas: HTMLCanvasElement): DragHandler`,category:`Utils`,group:`Mouse Input`,description:`An object to listen for mouse events, focused on drag drop functionality.`,example:`
 let drag = DragHandler(1920, 1080, el)
 
function _update() {
  // call update in update loop
  drag.update(delta)
  // query the mouse input
  console.log(drag.is_hovering[0], drag.is_hovering[1]) 
}
`}],mr=[{id:`rect`,name:`rect(x, y, w, h)`,category:`Math`,group:`Rectangle`,description:`A simple Rectangle object`,example:`
let r = rect(0, 0, 100, 100)
console.log(r.xy.x, r.xy.y, r.wh.x, r.wh.y) // logs 0, 0, 100, 100
`},{id:`rect_left`,name:`rect_left(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns left of the rectangle`,example:`rect_left(rect(10, 0, 100, 100)) // Returns 10`},{id:`rect_right`,name:`rect_right(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns right of the rectangle`,example:`rect_right(rect_a)`},{id:`rect_top`,name:`rect_top(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns top of the rectangle`,example:`rect_top(rect_a)`},{id:`rect_bottom`,name:`rect_bottom(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns bottom of the rectangle`,example:`rect_bottom(rect_a)`},{id:`rect_abcd`,name:`rect_abcd(r: Rect): [Vec2, Vec2, Vec2, Vec2]`,category:`Math`,group:`Rectangle`,description:`Returns corners of the Rectangle`,example:`rect_abcd(rect_a)`},{id:`box_intersect`,name:`box_intersect(a: Rect, b: Rect): boolean`,category:`Math`,group:`Rectangle`,description:`Returns whether two boxes intersect`,example:`box_intersect(rect_a, rect_b)`},{id:`box_intersect_ratio`,name:`box_intersect_ratio(a: Rect, b: Rect): number`,category:`Math`,group:`Rectangle`,description:`Returns the ratio of intersection of box a to box b`,example:`box_intersect_ratio(rect_a, rect_b)`}],hr=[{id:`Agent`,name:`agent(position: Vec2, params: AgentParams): Agent`,category:`AI`,group:`Steering Behaviors`,description:`Creates a moving Agent to apply Steering Behaviors on`,example:`
let a = agent(vec2(0, 0), {
  radius: 8, // may be used in some behaviors
  mass: 1, // influences the amount of force applied
  maxSpeed: 100, // controls the maximum speed Agent can reach
  maxForce: 100, // controls the maximum amount of force Agent can be applied
  turnRate: Math.PI * 8 // controls the maximum rate of turn per second that can be applied
})

  // list of behaviors that affects the movement, can be dynamic
  // each behavior in the list contributes to the forces scaled by their weights
  let behaviors = [
     new Seek(1, /* ... */), // seek behavior with a weight of 1
     new FlightAvoidance(3, /* ... */), // flight behavior with a weight of 3
     new WanderJitter(2, /* ... */) // add some jitter with a weight of 2
  ]

  // list of bounds that applies collision detection
  // can be left empty for now
  let bounds = []

  /* within update loop call each frame with time delta in seconds */
  update_agent(a, behaviors, bounds, delta)

  /* use the moving agent's position and velocity */
  console.log(a.position, a.velocity)
`},{id:`Seek`,name:`new Seek(weight: number, speedFactor: number, target: TargetProvider)`,category:`AI`,group:`Steering Behaviors`,description:`Creates a new Seek Steering Behavior`,example:`

/* target provider is a function that returns the position of the target
const target: () => {
  /* can dynamically control the target position */

  /* follow the cursor */
  /* return cursor.xy */

  /* or disable the behavior temporarily */
  return undefined
}

/* pass to update_agent behaviors */
let seek = new Seek(1, 2, target)

`},{id:`Arrive`,name:`new Arrive(weight: number, speedFactor: number, slowRadius: number, target: TargetProvider)`,category:`AI`,group:`Steering Behaviors`,description:`Creates a new Arrive Steering Behavior`,example:`
/* pass to update_agent behaviors */
let arrive = new Arrive(1, 1, 100, () => cursor.xy)
`},{id:`WanderJitter`,name:`new WanderJitter(weight: number, interval = 0.25)`,category:`AI`,group:`Steering Behaviors`,description:`Creates a new Wandering with Jitter Steering Behavior`,example:`
let interval = 0.25 // interval of time in seconds to apply the jitter at (periodic)
new WanderJitter(1, interval)
`},{id:`Wander`,name:`new Wander(weight: number, circleDistance: number, circleRadius: number, jitter: number)`,category:`AI`,group:`Steering Behaviors`,description:`Creates a new Wander Steering Behavior`,example:`
let circleDistance = 100 // distance ahead of agent
let circleRadius = 100 // radius of the wander circle
let jitter = Math.PI // angular change per second (radians)
new Wander(1, circleDistance, circleRadius, jitter)
`},{id:`FlightAvoidance`,name:`new FlightAvoidance(weight: number, obstacles: () => Obstacle[], radius: number, falloff: number, forwardBias: number)`,category:`AI`,group:`Steering Behaviors`,description:`Creates a new Flight Avoidance Steering Behavior`,example:`
/* An obstacle is an object with a position and a radius */
let obstacle_a = {
  position: vec2(10, 10),
  radius: 10
}

let obstacles = () => [obstacle_a] // list of obstacles to flight away from
let radius = 100 // the distance of radius to keep away
let falloff = 10 // smoothing factor (best to keep close to [1-2])
let forwardBias = 0.8 // smoothing factor (best to keep between [0, 1])
new FlightAvoidance(1, obstacles, radius, fallof, forwardBias)
`}],gr=[...[{id:`vec2`,name:`vec2(x, y)`,category:`Math`,group:`Vector 2`,description:`A simple object for a 2D Vector`,example:`
let v = vec2(100, 100)
console.log(v.x, v.y) // logs 100 100
`},{id:`len2`,name:`len2(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns Vector's length squared`,example:`len(vec2(10, 10))`},{id:`length`,name:`length(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns Vector's length`,example:`length(vec_a)`},{id:`distance`,name:`distance(a: Vec2, b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the distance between 2 Vectors`,example:`distance(vec_a, vec_b)`},{id:`distance2`,name:`distance2(a: Vec2, b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the distance squared between 2 Vectors`,example:`distance2(vec_a, vec_b)`},{id:`normalize`,name:`normalize(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the Vector normalized`,example:`normalize(vec2(10, 10))`},{id:`normalizeSafe`,name:`normalizeSafe(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the Vector normalized but zero Vector when length is zero`,example:`normalizeSafe(vec_a)`},{id:`fromAngle`,name:`fromAngle(theta: number)`,category:`Math`,group:`Vector 2`,description:`Creates a vector directed towards angle theta (in radians)`,example:`fromAngle(Math.PI * 0.25)`},{id:`add`,name:`add(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Adds two vectors`,example:`add(vec_a, vec_b)`},{id:`sub`,name:`sub(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Subtracts two vectors`,example:`sub(vec_a, vec_b)`},{id:`mulScalar`,name:`mulScalar(v: Vec2,s: number)`,category:`Math`,group:`Vector 2`,description:`Multiplies vector by a scalar`,example:`mulScalar(vec_a, 10)`},{id:`dot`,name:`dot(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Dot product of two vectors`,example:`dot(vec_a, vec_b)`},{id:`mul`,name:`mul(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Multiplies two vectors`,example:`mul(vec_a, vec_b)`},{id:`perp`,name:`perp(a: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the perpendicular Vector of the Vector`,example:`perp(vec_a)`},{id:`project`,name:`project(a: Vec2, target: Vec2)`,category:`Math`,group:`Vector 2`,description:`Projects Vector a onto Vector b`,example:`project(vec_a, vec_b)`},{id:`clampLength`,name:`clampLength(a: Vec2, max: number, min = 0)`,category:`Math`,group:`Vector 2`,description:`Clamps the Vector between max and min values`,example:`clampLength(vec(100, 50), 75, 10)`},{id:`rotateVec2`,name:`rotateVec2(v: Vec2, theta: number)`,category:`Math`,group:`Vector 2`,description:`Rotate the Vector by theta amount (theta in radians)`,example:`rotateVec2(vec2(100, 0), Math.PI * 0.5)`}],...mr,...dr,...ur,...hr,...fr,...pr],_r=[`Math`,`Timing`,`Animation`,`AI`,`Graphics`,`Utils`];var vr=U(`<div class="max-w-6xl mx-auto pt-20 pb-8 px-4"><div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4"><h2 class="text-xl font-bold tracking-tight dark:text-zinc-100">API Reference</h2><div class="flex gap-1 overflow-x-auto pb-1 scrollbar-hide"></div></div><div class=mb-6><input type=text placeholder="Filter API Surface..."class="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xs px-3 py-2 text-xs outline-none focus:border-brand-500 transition-all dark:text-zinc-100 dark:placeholder:text-zinc-600"></div><div class=space-y-8>`),yr=U(`<button>`),br=U(`<div class="text-center py-12 text-zinc-400 dark:text-zinc-700 text-xs italic">No functions found matching your criteria.`),xr=U(`<div class="animate-in fade-in duration-300"><h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-4 border-b border-brand-500/10 pb-1"></h3><div class=space-y-4>`),Sr=U(`<div class="text-center py-12 text-gray-400 text-xs italic">No functions found matching your criteria.`),Cr=U(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 animate-in slide-in-from-top-1 duration-200">`),wr=U(`<div class="pl-2 border-l border-zinc-100 dark:border-zinc-800 transition-all"><button class="group/header w-full flex items-center justify-between py-1 px-2 rounded-md hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors mb-2 text-left"><div class="flex items-center gap-2"><span></span><h4></h4></div><svg fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=3 d="M19 9l-7 7-7-7">`),Tr=U(`<div class="group p-3 bg-white dark:bg-zinc-900 border border-zinc-50 dark:border-zinc-800 rounded-xs hover:border-brand-500/30 transition-all hover:shadow-xs"><div class="flex justify-between items-center mb-1"><span class="text-[8px] font-black text-brand-500 dark:text-zinc-100 uppercase tracking-tighter"></span></div><div class="relative group/name mb-0.5"><h3 class="whitespace-pre-wrap text-xs font-bold mb-0.5 mono group-hover:text-brand-500 truncate dark:text-zinc-100"></h3><div class="whitespace-pre-wrap absolute bottom-full left-0 mb-2 invisible group-hover/name:visible opacity-0 group-hover/name:opacity-100 transition-all bg-[#1a1a1a] dark:bg-white dark:text-black text-white text-[10px] py-1 px-1 rounded-xs shadow-2xl z-60 pointer-events-none transform translate-y-1 group-hover/name:translate-y-0"></div></div><p class="text-zinc-400 dark:text-zinc-500 text-[10px] mb-2 leading-tight h-6 overflow-hidden"></p><div class="bg-zinc-50/50 dark:bg-zinc-950/50 p-1.5 rounded-xs border border-zinc-50/50 dark:border-zinc-800/50">`);const Er=()=>{let[e,t]=j(`All`),[n,r]=j(``),i=P(()=>{let t={};return gr.filter(t=>{let r=t.name.toLowerCase().includes(n().toLowerCase())||t.description.toLowerCase().includes(n().toLowerCase())||t.group.toLowerCase().includes(n().toLowerCase()),i=e()===`All`||t.category===e();return r&&i}).forEach(e=>{t[e.category]||(t[e.category]={});let n=t[e.category];n[e.group]||(n[e.group]=[]),n[e.group].push(e)}),t}),[a,o]=j(new Set,{equals:!1}),s=(e,t)=>{let n=a(),r=`${e}-${t}`;n.has(r)?n.delete(r):n.add(r),o(n)},c=(e,t)=>a().has(`${e}-${t}`),l=P(()=>Object.keys(i()));return(()=>{var a=vr(),o=a.firstChild,u=o.firstChild.nextSibling,d=o.nextSibling,f=d.firstChild,p=d.nextSibling;return G(u,V(H,{get each(){return[`All`,..._r]},children:n=>(()=>{var r=yr();return r.$$click=()=>t(n),G(r,n),M(()=>W(r,`px-3 py-1 rounded-xs text-[9px] font-bold uppercase tracking-wider transition-all border ${e()===n?`bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100`:`bg-white text-zinc-400 border-zinc-100 dark:bg-zinc-900 dark:text-zinc-500 dark:border-zinc-800`}`)),r})()})),f.addEventListener(`change`,e=>r(e.target.value)),G(p,V(H,{get each(){return l()},get fallback(){return br()},children:e=>(()=>{var t=xr(),n=t.firstChild,r=n.nextSibling;return G(n,e),G(r,V(H,{get each(){return Object.entries(i()[e])},get fallback(){return Sr()},children:([t,n])=>(()=>{var r=wr(),i=r.firstChild,a=i.firstChild,o=a.firstChild,l=o.nextSibling,u=a.nextSibling;return i.$$click=()=>s(e,t),G(l,t),G(r,V(De,{get when(){return!c(e,t)},get children(){var e=Cr();return G(e,V(H,{each:n,children:e=>(()=>{var t=Tr(),n=t.firstChild,r=n.firstChild,i=n.nextSibling,a=i.firstChild,o=a.nextSibling,s=i.nextSibling,c=s.nextSibling;return G(r,()=>e.category),G(a,()=>e.name),G(o,()=>e.name),G(s,()=>e.description),G(c,V(Gn,{class:`text-[10px] mono text-zinc-500 dark:text-zinc-600 block truncate whitespace-pre-wrap`,get code(){return e.example.trim()}})),t})()})),e}}),null),M(n=>{var r=`w-1.5 h-1.5 rounded-full transition-colors ${c(e,t)?`bg-zinc-300 dark:bg-zinc-700`:`bg-brand-500`}`,i=`text-[11px] font-bold transition-colors ${c(e,t)?`text-zinc-400 dark:text-zinc-600`:`text-zinc-600 dark:text-zinc-300`}`,a=`w-3 h-3 text-zinc-300 dark:text-zinc-700 group-hover/header:text-brand-500 transition-transform duration-200 ${c(e,t)?`-rotate-90`:`rotate-0`}`;return r!==n.e&&W(o,n.e=r),i!==n.t&&W(l,n.t=i),a!==n.a&&Me(u,`class`,n.a=a),n},{e:void 0,t:void 0,a:void 0}),r})()})),t})()})),M(()=>f.value=n()),a})()};je([`click`]);var Dr=U(`<div class="text-center md:text-left"><span class="block text-[8px] font-black text-brand-500 uppercase tracking[0.2em] mb-1"></span><span class="block text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter">`),Or=[{label:`Language`,val:`Typescript / esnext`},{label:`Payload`,val:`Tiny Modular`},{label:`Design`,val:`Indie / AI`},{label:`Animation`,val:`Spring`},{label:`Timing`,val:`Delay`},{label:`AI`,val:`Steering Behaviors`},{label:`Math`,val:`Vec2 / Rect`},{label:`Rendering`,val:`Shapes with Batched WebGL`},{label:`Utils`,val:`Loop / Mouse Input`}];const kr=()=>V(H,{each:Or,children:e=>(()=>{var t=Dr(),n=t.firstChild,r=n.nextSibling;return G(n,()=>e.label),G(r,()=>e.val),t})()});var Ar=U(`<svg xmlns=http://www.w3.org/2000/svg class="w-4 h-4"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z">`),jr=U(`<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 px-6 py-4 flex justify-between items-center transition-colors"><div class="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 text-zinc-900 dark:text-white"><div class="w-4 h-4 bg-brand-500 rounded-[1px]"></div>TwisterJS</div><div class="flex items-center gap-8"><div class="flex gap-8 text-sm font-medium uppercase tracking-widest"></div><button class="p-2 roundex-xs hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors text-zinc-400 dark:text-zinc-500 hover:text-brand"aria-label="Toggle theme">`),Mr=U(`<button>`),Nr=U(`<svg xmlns=http://www.w3.org/2000/svg class="w-4 h-4"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">`);const Pr=e=>{let t=[{id:`landing`,label:`Start`},{id:`cheatsheet`,label:`Docs`}];return(()=>{var n=jr(),r=n.firstChild,i=r.nextSibling.firstChild,a=i.nextSibling;return r.$$click=()=>e.onNavigate(`landing`),G(i,V(H,{each:t,children:t=>(()=>{var n=Mr();return n.$$click=()=>e.onNavigate(t.id),G(n,()=>t.label),M(()=>W(n,`transition-colors hover:text-[#5f6fff]' ${e.currentSection===t.id?`text-brand-500`:`text-zinc-400 dark:text-zinc-500`}`)),n})()})),Ne(a,`click`,e.onToggleTheme,!0),G(a,V(De,{get when(){return e.isDark},get fallback(){return Nr()},get children(){return Ar()}})),n})()};je([`click`]);var Fr=U(`<div class="max-w-6xl mx-auto py-20 px-4"><div class="flex items-center gap-4 mb-10"><div class="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div><div class=text-center><h2 class="text-xl font-bold tracking-tight dark:text-zinc-100">Community Showreel</h2><p class="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] mt-1">Real projects built with TwisterJS</p></div><div class="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`),Ir=U(`<a target=_blank rel="noopener noreferrer"class="group relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 roundex-xs transition-all hover:border-brand/40 hover:shadow-xs hover:-translate-y-1"><div class="flex justify-between items-start mb-4"><span class="text-[9px] font-mono text-zinc-500 dark:text-zinc-700"></span><div class="flex gap-1"></div></div><h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors"></h3><p class="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-1">by </p><div class="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">See Game<svg xmlns=http://www.w3.org/2000/svg class="w-3 h-3"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=3 d="M14 5l7 7m0 0l-7 7m7-7H3">`),Lr=U(`<span class="text-[8px] px-1.5 py-0.5 bg-zinc-50 dark:bg-zinc-950 text-zinc-400 dark:text-zinc-500 rounded-xs border border-zinc-200 dark:bordre-zinc-800 font-bold uppercase tracking-wider">`);const Rr=[{author:`twitch.tv/gsoutz`,title:`Mor Chess 3`,tags:[`puzzle`,`chess`,`minimalist`,`daily`],year:2026,url:`https://morchess.com/`}],zr=()=>(()=>{var e=Fr(),t=e.firstChild.nextSibling;return G(t,V(H,{each:Rr,children:e=>(()=>{var t=Ir(),n=t.firstChild,r=n.firstChild,i=r.nextSibling,a=n.nextSibling,o=a.nextSibling;return o.firstChild,G(r,()=>e.year),G(i,V(H,{get each(){return e.tags},children:e=>(()=>{var t=Lr();return G(t,e),t})()})),G(a,()=>e.title),G(o,()=>e.author,null),M(()=>Me(t,`href`,e.url)),t})()})),e})();var Br=U(`<section class="bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 py-12 transition-colors"><div class="max-w-6xl mx-auto px-4"><div class="grid grid-cols-2 md:grid-cols-4 gap-6">`),Vr=U(`<section class=transition-colors>`),Hr=U(`<section class="bg-zinc-50/50 dark:bg-zinc-950/50 border-t border-zinc-100 dark:border-zinc-800 transition-colors">`),Ur=U(`<div><main class="transition-all duration-300"></main><footer class="py-10 border-t border-zinc-50 dark:border-zinc-900 text-center bg-white dark:bg-zinc-950 transition-colors"><p class="text-[9px] font-bold tracking-[0.3em] text-zinc-300 dark:text-zinc-700 uppercase">TwisterJS &bull; Tailored for the Indie &bull; 2026`);function Wr(){let[e,t]=j(`landing`),n=e=>{t(e)},[r,i]=ir(j(window.matchMedia(`(prefers-color-scheme: dark)`).matches),{name:`.twisterjs.theme.is-dark`});return N(()=>{r()?document.documentElement.setAttribute(`data-theme`,`dark`):document.documentElement.removeAttribute(`data-theme`)}),(()=>{var t=Ur(),a=t.firstChild;return G(t,V(Pr,{get currentSection(){return e()},onNavigate:n,get isDark(){return r()},onToggleTheme:()=>i(!r())}),a),G(a,V(De,{get when(){return e()===`landing`},get children(){return[V(cr,{onExplore:()=>n(`cheatsheet`)}),(()=>{var e=Br(),t=e.firstChild.firstChild;return G(t,V(kr,{})),e})(),(()=>{var e=Vr();return G(e,V(zr,{})),e})(),(()=>{var e=Hr();return G(e,V(Er,{})),e})()]}}),null),G(a,V(De,{get when(){return e()===`cheatsheet`},get children(){return V(Er,{})}}),null),M(()=>W(t,`min-h-screen transition-colors duration-300 ${r()?`dark`:``} `)),t})()}Ae(()=>V(Wr,{}),document.getElementById(`root`));