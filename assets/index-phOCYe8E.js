(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return t(this.context.count)},getNextContextId(){return t(this.context.count++)}};function t(t){let n=String(t),r=n.length-1;return e.context.id+(r?String.fromCharCode(96+r):``)+n}function n(t){e.context=t}function r(){return{...e.context,id:e.getNextContextId(),count:0}}var i=(e,t)=>e===t,a=Symbol(`solid-track`),o={equals:i},s=null,c=ce,l=1,u=2,d={owned:null,cleanups:null,context:null,owner:null},f=null,p=null,m=null,h=null,g=null,_=null,v=null,y=0;function b(e,t){let n=g,r=f,i=e.length===0,a=t===void 0?r:t,o=i?d:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=i?e:()=>e(()=>T(()=>P(o)));f=o,g=null;try{return M(s,!0)}finally{g=n,f=r}}function x(e,t){t=t?Object.assign({},o,t):o;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0};return[ie.bind(n),e=>(typeof e==`function`&&(e=p&&p.running&&p.sources.has(n)?e(n.tValue):e(n.value)),ae(n,e))]}function S(e,t,n){let r=A(e,t,!1,l);m&&p&&p.running?_.push(r):k(r)}function C(e,t,n){c=ue;let r=A(e,t,!1,l),i=O&&re(O);i&&(r.suspense=i),(!n||!n.render)&&(r.user=!0),v?v.push(r):k(r)}function w(e,t,n){n=n?Object.assign({},o,n):o;let r=A(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,m&&p&&p.running?(r.tState=l,_.push(r)):k(r),ie.bind(r)}function T(e){if(!h&&g===null)return e();let t=g;g=null;try{return h?h.untrack(e):e()}finally{g=t}}function E(e){C(()=>T(e))}function D(e){return f===null||(f.cleanups===null?f.cleanups=[e]:f.cleanups.push(e)),e}function ee(e){if(p&&p.running)return e(),p.done;let t=g,n=f;return Promise.resolve().then(()=>{g=t,f=n;let r;return(m||O)&&(r=p||={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0},r.done||=new Promise(e=>r.resolve=e),r.running=!0),M(e,!1),g=f=null,r?r.done:void 0})}var[te,ne]=x(!1);function re(e){let t;return f&&f.context&&(t=f.context[e.id])!==void 0?t:e.defaultValue}var O;function ie(){let e=p&&p.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===l)k(this);else{let e=_;_=null,M(()=>N(this),!1),_=e}if(g){let e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return e&&p.sources.has(this)?this.tValue:this.value}function ae(e,t,n){let r=p&&p.running&&p.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(p){let r=p.running;(r||!n&&p.sources.has(e))&&(p.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&M(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t],r=p&&p.running;r&&p.disposed.has(n)||((r?!n.tState:!n.state)&&(n.pure?_.push(n):v.push(n),n.observers&&de(n)),r?n.tState=l:n.state=l)}if(_.length>1e6)throw _=[],Error()},!1)}return t}function k(e){if(!e.fn)return;P(e);let t=y;oe(e,p&&p.running&&p.sources.has(e)?e.tValue:e.value,t),p&&!p.running&&p.sources.has(e)&&queueMicrotask(()=>{M(()=>{p&&(p.running=!0),g=f=e,oe(e,e.tValue,t),g=f=null},!1)})}function oe(e,t,n){let r,i=f,a=g;g=f=e;try{r=e.fn(t)}catch(t){return e.pure&&(p&&p.running?(e.tState=l,e.tOwned&&e.tOwned.forEach(P),e.tOwned=void 0):(e.state=l,e.owned&&e.owned.forEach(P),e.owned=null)),e.updatedAt=n+1,F(t)}finally{g=a,f=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&`observers`in e?ae(e,r,!0):p&&p.running&&e.pure?(p.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function A(e,t,n,r=l,i){let a={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:f?f.context:null,pure:n};if(p&&p.running&&(a.state=0,a.tState=r),f===null||f!==d&&(p&&p.running&&f.pure?f.tOwned?f.tOwned.push(a):f.tOwned=[a]:f.owned?f.owned.push(a):f.owned=[a]),h&&a.fn){let[e,t]=x(void 0,{equals:!1}),n=h.factory(a.fn,t);D(()=>n.dispose());let r=h.factory(a.fn,()=>ee(t).then(()=>r.dispose()));a.fn=t=>(e(),p&&p.running?r.track(t):n.track(t))}return a}function j(e){let t=p&&p.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===u)return N(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);let n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<y);){if(t&&p.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,i=n[r+1];for(;(t=t.owner)&&t!==i;)if(p.disposed.has(t))return}if((t?e.tState:e.state)===l)k(e);else if((t?e.tState:e.state)===u){let t=_;_=null,M(()=>N(e,n[0]),!1),_=t}}}function M(e,t){if(_)return e();let n=!1;t||(_=[]),v?n=!0:v=[],y++;try{let t=e();return se(n),t}catch(e){n||(v=null),_=null,F(e)}}function se(e){if(_&&=(m&&p&&p.running?le(_):ce(_),null),e)return;let t;if(p){if(!p.promises.size&&!p.queue.size){let e=p.sources,n=p.disposed;v.push.apply(v,p.effects),t=p.resolve;for(let e of v)`tState`in e&&(e.state=e.tState),delete e.tState;p=null,M(()=>{for(let e of n)P(e);for(let t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)P(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}ne(!1)},!1)}else if(p.running){p.running=!1,p.effects.push.apply(p.effects,v),v=null,ne(!0);return}}let n=v;v=null,n.length&&M(()=>c(n),!1),t&&t()}function ce(e){for(let t=0;t<e.length;t++)j(e[t])}function le(e){for(let t=0;t<e.length;t++){let n=e[t],r=p.queue;r.has(n)||(r.add(n),m(()=>{r.delete(n),M(()=>{p.running=!0,j(n)},!1),p&&(p.running=!1)}))}}function ue(t){let r,i=0;for(r=0;r<t.length;r++){let e=t[r];e.user?t[i++]=e:j(e)}if(e.context){if(e.count){e.effects||=[],e.effects.push(...t.slice(0,i));return}n()}for(e.effects&&(e.done||!e.count)&&(t=[...e.effects,...t],i+=e.effects.length,delete e.effects),r=0;r<i;r++)j(t[r])}function N(e,t){let n=p&&p.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){let i=e.sources[r];if(i.sources){let e=n?i.tState:i.state;e===l?i!==t&&(!i.updatedAt||i.updatedAt<y)&&j(i):e===u&&N(i,t)}}}function de(e){let t=p&&p.running;for(let n=0;n<e.observers.length;n+=1){let r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=u:r.state=u,r.pure?_.push(r):v.push(r),r.observers&&de(r))}}function P(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),i=t.observerSlots.pop();n<r.length&&(e.sourceSlots[i]=n,r[n]=e,t.observerSlots[n]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)P(e.tOwned[t]);delete e.tOwned}if(p&&p.running&&e.pure)fe(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}p&&p.running?e.tState=0:e.state=0}function fe(e,t){if(t||(e.tState=0,p.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)fe(e.owned[t])}function pe(e){return e instanceof Error?e:Error(typeof e==`string`?e:`Unknown error`,{cause:e})}function me(e,t,n){try{for(let n of t)n(e)}catch(e){F(e,n&&n.owner||null)}}function F(e,t=f){let n=s&&t&&t.context&&t.context[s],r=pe(e);if(!n)throw r;v?v.push({fn(){me(r,n,t)},state:l}):me(r,n,t)}var he=Symbol(`fallback`);function ge(e){for(let t=0;t<e.length;t++)e[t]()}function _e(e,t,n={}){let r=[],i=[],o=[],s=0,c=t.length>1?[]:null;return D(()=>ge(o)),()=>{let l=e()||[],u=l.length,d,f;return l[a],T(()=>{let e,t,a,m,h,g,_,v,y;if(u===0)s!==0&&(ge(o),o=[],r=[],i=[],s=0,c&&=[]),n.fallback&&(r=[he],i[0]=b(e=>(o[0]=e,n.fallback())),s=1);else if(s===0){for(i=Array(u),f=0;f<u;f++)r[f]=l[f],i[f]=b(p);s=u}else{for(a=Array(u),m=Array(u),c&&(h=Array(u)),g=0,_=Math.min(s,u);g<_&&r[g]===l[g];g++);for(_=s-1,v=u-1;_>=g&&v>=g&&r[_]===l[v];_--,v--)a[v]=i[_],m[v]=o[_],c&&(h[v]=c[_]);for(e=new Map,t=Array(v+1),f=v;f>=g;f--)y=l[f],d=e.get(y),t[f]=d===void 0?-1:d,e.set(y,f);for(d=g;d<=_;d++)y=r[d],f=e.get(y),f!==void 0&&f!==-1?(a[f]=i[d],m[f]=o[d],c&&(h[f]=c[d]),f=t[f],e.set(y,f)):o[d]();for(f=g;f<u;f++)f in a?(i[f]=a[f],o[f]=m[f],c&&(c[f]=h[f],c[f](f))):i[f]=b(p);i=i.slice(0,s=u),r=l.slice(0)}return i});function p(e){if(o[f]=e,c){let[e,n]=x(f);return c[f]=n,t(l[f],e)}return t(l[f])}}}var ve=!1;function I(t,i){if(ve&&e.context){let a=e.context;n(r());let o=T(()=>t(i||{}));return n(a),o}return T(()=>t(i||{}))}var ye=e=>`Stale read from <${e}>.`;function L(e){let t=`fallback`in e&&{fallback:()=>e.fallback};return w(_e(()=>e.each,e.children,t||void 0))}function R(e){let t=e.keyed,n=w(()=>e.when,void 0,void 0),r=t?n:w(n,void 0,{equals:(e,t)=>!e==!t});return w(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?T(()=>a(t?i:()=>{if(!T(r))throw ye(`Show`);return n()})):a}return e.fallback},void 0,void 0)}function be(e,t,n){let r=n.length,i=t.length,a=r,o=0,s=0,c=t[i-1].nextSibling,l=null;for(;o<i||s<a;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[a-1];)i--,a--;if(i===o){let t=a<r?s?n[s-1].nextSibling:n[a-s]:c;for(;s<a;)e.insertBefore(n[s++],t)}else if(a===s)for(;o<i;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[a-1]&&n[s]===t[i-1]){let r=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--a],r),t[i]=n[a]}else{if(!l){l=new Map;let e=s;for(;e<a;)l.set(n[e],e++)}let r=l.get(t[o]);if(r!=null)if(s<r&&r<a){let c=o,u=1,d;for(;++c<i&&c<a&&!((d=l.get(t[c]))==null||d!==r+u);)u++;if(u>r-s){let i=t[o];for(;s<r;)e.insertBefore(n[s++],i)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}var xe=`_$DX_DELEGATE`;function Se(e,t,n,r={}){let i;return b(r=>{i=r,t===document?e():H(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=``}}function z(e,t,n,r){let i,a=()=>{let t=r?document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`template`):document.createElement(`template`);return t.innerHTML=e,n?t.content.firstChild.firstChild:r?t.firstChild:t.content.firstChild},o=t?()=>T(()=>document.importNode(i||=a(),!0)):()=>(i||=a()).cloneNode(!0);return o.cloneNode=o,o}function B(e,t=window.document){let n=t[xe]||(t[xe]=new Set);for(let r=0,i=e.length;r<i;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Ee))}}function Ce(e,t,n){U(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function V(e,t){U(e)||(t==null?e.removeAttribute(`class`):e.className=t)}function we(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n,typeof n!=`function`&&n)}function Te(e,t,n){return T(()=>e(t,n))}function H(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!=`function`)return W(e,t,r,n);S(r=>W(e,t(),r,n),r)}function U(t){return!!e.context&&!e.done&&(!t||t.isConnected)}function Ee(t){if(e.registry&&e.events&&e.events.find(([e,n])=>n===t))return;let n=t.target,r=`$$${t.type}`,i=t.target,a=t.currentTarget,o=e=>Object.defineProperty(t,`target`,{configurable:!0,value:e}),s=()=>{let e=n[r];if(e&&!n.disabled){let i=n[`${r}Data`];if(i===void 0?e.call(n,t):e.call(n,i,t),t.cancelBubble)return}return n.host&&typeof n.host!=`string`&&!n.host._$host&&n.contains(t.target)&&o(n.host),!0},c=()=>{for(;s()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(t,`currentTarget`,{configurable:!0,get(){return n||document}}),e.registry&&!e.done&&(e.done=_$HY.done=!0),t.composedPath){let e=t.composedPath();o(e[0]);for(let t=0;t<e.length-2&&(n=e[t],s());t++){if(n._$host){n=n._$host,c();break}if(n.parentNode===a)break}}else c();o(i)}function W(e,t,n,r,i){let a=U(e);if(a){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){let r=n[e];r.nodeType===8&&r.data.slice(0,2)===`!$`?r.remove():t.push(r)}n=t}for(;typeof n==`function`;)n=n();if(t===n)return n;let o=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o===`string`||o===`number`){if(a||o===`number`&&(t=t.toString(),t===n))return n;if(s){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=K(e,n,r,i)}else n=n!==``&&typeof n==`string`?e.firstChild.data=t:e.textContent=t}else if(t==null||o===`boolean`){if(a)return n;n=K(e,n,r)}else if(o===`function`)return S(()=>{let i=t();for(;typeof i==`function`;)i=i();n=W(e,i,n,r)}),()=>n;else if(Array.isArray(t)){let o=[],c=n&&Array.isArray(n);if(G(o,t,n,i))return S(()=>n=W(e,o,n,r,!0)),()=>n;if(a){if(!o.length)return n;if(r===void 0)return n=[...e.childNodes];let t=o[0];if(t.parentNode!==e)return n;let i=[t];for(;(t=t.nextSibling)!==r;)i.push(t);return n=i}if(o.length===0){if(n=K(e,n,r),s)return n}else c?n.length===0?De(e,o,r):be(e,n,o):(n&&K(e),De(e,o));n=o}else if(t.nodeType){if(a&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=K(e,n,r,t);K(e,n,null,t)}else n==null||n===``||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}return n}function G(e,t,n,r){let i=!1;for(let a=0,o=t.length;a<o;a++){let o=t[a],s=n&&n[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)==`object`&&o.nodeType)e.push(o);else if(Array.isArray(o))i=G(e,o,s)||i;else if(c===`function`)if(r){for(;typeof o==`function`;)o=o();i=G(e,Array.isArray(o)?o:[o],Array.isArray(s)?s:[s])||i}else e.push(o),i=!0;else{let t=String(o);s&&s.nodeType===3&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return i}function De(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function K(e,t,n,r){if(n===void 0)return e.textContent=``;let i=r||document.createTextNode(``);if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(i!==o){let t=o.parentNode===e;!r&&!a?t?e.replaceChild(i,o):e.insertBefore(i,n):t&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Oe(e=0,t=0){return{x:e,y:t}}function ke(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.y*r,y:e.x*r+e.y*n}}var Ae=class e{renderer;static INSTANCE_STRIDE=15;maxInstances;buffer;cursor=0;constructor(t,n=8192){this.renderer=t,this.maxInstances=n,this.buffer=new Float32Array(n*e.INSTANCE_STRIDE)}beginFrame(){this.cursor=0}endFrame(){this.flush()}pushMask(){this.flush(),this.renderer.pushMask()}popMask(){this.flush(),this.renderer.popMask()}endMask(){this.flush(),this.renderer.endMask()}ensureCapacity(e){if(this.cursor+e>this.maxInstances&&(this.flush(),e>this.maxInstances))throw Error(`Requested instance count exceeds maxInstances`)}pushInstance(t){let n=this.cursor*e.INSTANCE_STRIDE;for(let r=0;r<e.INSTANCE_STRIDE;r++)this.buffer[n+r]=t[r]??0;this.cursor++}fillRect(e,t,n,r,i,a=0){this.ensureCapacity(1),this.pushInstance([e,t,n,r,a,i.r,i.g,i.b,i.a,0,0,0,0,0,0])}fillRoundRect(e,t,n,r,i,a,o=0){this.ensureCapacity(1),this.pushInstance([e,t,n,r,o,a.r,a.g,a.b,a.a,1,i,0,0,0,0])}strokeRoundRect(e,t,n,r,i,a,o,s=[0,0],c=0){this.ensureCapacity(1),this.pushInstance([e,t,n+a,r+a,c,o.r,o.g,o.b,o.a,1,i,a,s[0],s[1],0])}strokeRect(e,t,n,r,i,a,o=[0,0],s=0){this.ensureCapacity(1),this.pushInstance([e,t,n+i,r+i,s,a.r,a.g,a.b,a.a,0,0,i,o[0],o[1],0])}fillCircle(e,t,n,r,i=[0,0]){this.ensureCapacity(1);let a=n*2,o=n*2;this.pushInstance([e,t,a,o,0,r.r,r.g,r.b,r.a,3,n,0,i[0],i[1],0])}strokeCircle(e,t,n,r,i,a=[0,0]){this.ensureCapacity(1);let o=n*2,s=n*2;this.pushInstance([e,t,o+r*2,s+r*2,0,i.r,i.g,i.b,i.a,3,n,r,a[0],a[1],0])}strokeLine(e,t,n,r,i,a,o=[0,0]){this.ensureCapacity(1);let s=n-e,c=r-t,l=Math.hypot(s,c),u=Math.atan2(c,s),d=l+i+8,f=i+8,p=(e+n)*.5,m=(t+r)*.5,h=i*.5;this.pushInstance([p,m,d,f,u,a.r,a.g,a.b,a.a,2,h,0,o[0],o[1],l])}flush(){if(this.cursor===0)return;let t=this.cursor*e.INSTANCE_STRIDE,n=this.buffer.subarray(0,t);this.renderer.instanceData.length>=t?this.renderer.instanceData.set(n,0):this.renderer.instanceData=new Float32Array(n),this.renderer.instanceCount=this.cursor,this.renderer.flush(),this.cursor=0}};function je(e,t,n,r){let i=new Float32Array(16);return i[0]=2/(t-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(r-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-1,i[11]=0,i[12]=-(t+e)/(t-e),i[13]=-(r+n)/(r-n),i[14]=0,i[15]=1,i}je(0,1920,1080,0);var Me=class{gl;program;vao;quadVBO;instanceVBO;maxInstances;instanceStride;instanceData;instanceCount=0;uProjectionMatrix;maskDepth=0;projectionMatrix;constructor(e,t,n,r=1e4){let i=n.getContext(`webgl2`,{antialias:!0,stencil:!0});if(!i)throw Error(`WebGL2 not supported`);this.gl=i,this.projectionMatrix=je(0,e,t,0),this.maxInstances=r,this.quadVBO=i.createBuffer(),this.instanceVBO=i.createBuffer(),this.program=this.createProgram(`#version 300 es
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
}`),this.uProjectionMatrix=i.getUniformLocation(this.program,`u_projection`),this.instanceStride=15,this.instanceData=new Float32Array(this.maxInstances*this.instanceStride),this.vao=this.createVAO(),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA)}set_viewport(e,t){this.gl.viewport(0,0,e,t)}pushMask(){let e=this.gl;e.enable(e.STENCIL_TEST),e.colorMask(!1,!1,!1,!1),e.stencilFunc(e.ALWAYS,this.maskDepth+1,255),e.stencilOp(e.KEEP,e.KEEP,e.REPLACE)}endMask(){let e=this.gl;e.colorMask(!0,!0,!0,!0),this.maskDepth++,e.stencilFunc(e.EQUAL,this.maskDepth,255),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}popMask(){this.maskDepth--;let e=this.gl;this.maskDepth>0?e.stencilFunc(e.EQUAL,this.maskDepth,255):e.disable(e.STENCIL_TEST)}createVAO(){let e=this.gl,t=e.createVertexArray();e.bindVertexArray(t);let n=new Float32Array([0,0,1,0,0,1,1,1]);return e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceVBO),e.bufferData(e.ARRAY_BUFFER,this.instanceData.byteLength,e.DYNAMIC_DRAW),t}setupInstancing(){let e=this.gl;e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.instanceVBO);let t=this.instanceStride*4,n=0,r=1,i=i=>{e.enableVertexAttribArray(r),e.vertexAttribPointer(r,i,e.FLOAT,!1,t,n),e.vertexAttribDivisor(r,1),n+=i*4,r++};i(2),i(2),i(1),i(4),i(1),i(1),i(1),i(2),i(1)}addInstance(e){let t=this.instanceCount*this.instanceStride;this.instanceData.set(e,t),this.instanceCount++,this.instanceCount>=this.maxInstances&&console.warn(`Instance buffer full`)}flush(){let e=this.gl;this.instanceCount!==0&&(e.useProgram(this.program),e.bindVertexArray(this.vao),e.uniformMatrix4fv(this.uProjectionMatrix,!1,this.projectionMatrix),e.bindBuffer(e.ARRAY_BUFFER,this.instanceVBO),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceData.subarray(0,this.instanceCount*this.instanceStride)),e.drawArraysInstanced(e.TRIANGLE_STRIP,0,4,this.instanceCount),this.instanceCount=0)}createProgram(e,t){let n=this.gl,r=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(r,e),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(r));let i=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(i));let a=n.createProgram();if(n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw Error(n.getProgramInfoLog(a));return n.deleteShader(r),n.deleteShader(i),a}cleanup(){let e=this.gl;e.bindVertexArray(null),this.vao&&e.deleteVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),this.quadVBO&&e.deleteBuffer(this.quadVBO),this.instanceVBO&&e.deleteBuffer(this.instanceVBO),this.program&&(e.useProgram(null),e.deleteProgram(this.program)),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}};function Ne(e,t,n,r){let i=document.createElement(`canvas`);i.classList.add(`twisterjs-responsive-full`);let a=()=>{let e=window.devicePixelRatio||1,t=n.getBoundingClientRect(),a=Math.floor(t.width*e),s=Math.floor(t.height*e);(i.width!==a||i.height!==s)&&(i.width=a,i.height=s,o.set_viewport(i.width,i.height),r())},o=new Me(e,t,i,32768);o.setupInstancing();let s=new Ae(o,16384),c=new ResizeObserver(()=>{a()});return c.observe(n),n.appendChild(i),{canvas:i,batch:s,cleanup(){o.cleanup(),c.unobserve(n)}}}var q=class e{r;g;b;a;constructor(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a=r}static fromRgba255(t,n,r,i=255){return new e(t/255,n/255,r/255,i/255)}static fromHex(t){return e.fromRgba255((t&16711680)>>16,(t&65280)>>8,t&255,255)}static fromHexString(t){let n=t.startsWith(`#`)?t.slice(1):t;n=n.startsWith(`0x`)?n.slice(2):n,n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return isNaN(r)?(console.error(`Invalid color hex string: ${t}`),null):n.length===6?e.fromRgba255(r>>16&255,r>>8&255,r&255,255):n.length===8?e.fromRgba255(r>>24&255,r>>16&255,r>>8&255,r&255):(console.error(`Unsupported hex string length: ${t}`),null)}static white=e.fromRgba255(255,255,255,255);static black=e.fromRgba255(0,0,0,255);static red=e.fromRgba255(255,0,0,255);static lerp(t,n,r){return r=Math.max(0,Math.min(1,r)),new e(t.r+(n.r-t.r)*r,t.g+(n.g-t.g)*r,t.b+(n.b-t.b)*r,t.a+(n.a-t.a)*r)}get rgb24(){let e=Math.round(this.r*255),t=Math.round(this.g*255),n=Math.round(this.b*255);return e<<16|t<<8|n}get rgbaNormalized(){return{r:this.r,g:this.g,b:this.b,a:this.a}}get rgba255(){return{r:Math.round(this.r*255),g:Math.round(this.g*255),b:Math.round(this.b*255),a:Math.round(this.a*255)}}};function Pe(e,t,n){let r=!0,i,a=1e3/60,o=performance.now(),s=0;function c(l){if(!r)return;i=requestAnimationFrame(c);let u=Math.min(l-o,25);for(o=l,s+=u;s>=a;)e(a),s-=a;t(s/a),n?.()}return i=requestAnimationFrame(c),()=>{r=!1,cancelAnimationFrame(i)}}const J={black:`#000000`,darkblue:`#1D2B53`,darkred:`#7E2553`,darkgreen:`#008751`,brown:`#AB5236`,gray:`#5F574F`,lightgray:`#C2C3C7`,white:`#FFF1E8`,red:`#FF004D`,orange:`#FFA300`,yellow:`#FFEC27`,green:`#00E436`,blue:`#29ADFF`,purple:`#83769C`,pink:`#FF77A8`,sand:`#FFCCAA`},Y={white:`#fbf8fd`,light:`#a1a9d1`,blue:`#007fff`,darkblue:`#24256f`,black:`#141218`,purple:`#5f0e52`,red:`#fd1a43`,pink:`#ffb16c`,yellow:`#fede5b`,green:`#74ead6`},X={sand1:`#fff2b9`,sand2:`#ffda80`,sand3:`#feb746`,sand4:`#d16318`,sand5:`#89240d`,orange1:`#fe9f5d`,orange2:`#fd6c09`,orange3:`#db4422`,red1:`#fe6a7d`,red2:`#f01e5b`,red3:`#930d3d`,red4:`#5b0d27`,purple1:`#e8acfd`,purple2:`#c453d4`,purple3:`#8e2082`,purple4:`#640e55`,blue1:`#56dfcf`,blue2:`#35c0c6`,blue3:`#1c6e82`,blue4:`#16416e`,green1:`#8beec0`,green2:`#38be97`,green3:`#228f66`,green4:`#126144`,green5:`#083523`,lime1:`#e2d753`,lime2:`#b3a71c`,lime3:`#777211`,mor1:`#b29ca6`,mor2:`#795670`,mor3:`#4e2140`,mor4:`#290e0f`},Fe={black:q.fromHexString(J.black),darkblue:q.fromHexString(J.darkblue),darkred:q.fromHexString(J.darkred),darkgreen:q.fromHexString(J.darkgreen),brown:q.fromHexString(J.brown),gray:q.fromHexString(J.gray),lightgray:q.fromHexString(J.lightgray),white:q.fromHexString(J.white),red:q.fromHexString(J.red),orange:q.fromHexString(J.orange),yellow:q.fromHexString(J.yellow),green:q.fromHexString(J.green),blue:q.fromHexString(J.blue),purple:q.fromHexString(J.purple),pink:q.fromHexString(J.pink),sand:q.fromHexString(J.sand)};q.fromHexString(Y.white),q.fromHexString(Y.light),q.fromHexString(Y.blue),q.fromHexString(Y.darkblue),q.fromHexString(Y.black),q.fromHexString(Y.purple),q.fromHexString(Y.red),q.fromHexString(Y.pink),q.fromHexString(Y.yellow),q.fromHexString(Y.green),q.fromHexString(X.sand1),q.fromHexString(X.sand2),q.fromHexString(X.sand3),q.fromHexString(X.sand4),q.fromHexString(X.sand5),q.fromHexString(X.orange1),q.fromHexString(X.orange2),q.fromHexString(X.orange3),q.fromHexString(X.red1),q.fromHexString(X.red2),q.fromHexString(X.red3),q.fromHexString(X.red4),q.fromHexString(X.purple1),q.fromHexString(X.purple2),q.fromHexString(X.purple3),q.fromHexString(X.purple4),q.fromHexString(X.blue1),q.fromHexString(X.blue2),q.fromHexString(X.blue3),q.fromHexString(X.blue4),q.fromHexString(X.green1),q.fromHexString(X.green2),q.fromHexString(X.green3),q.fromHexString(X.green4),q.fromHexString(X.green5),q.fromHexString(X.lime1),q.fromHexString(X.lime2),q.fromHexString(X.lime3),q.fromHexString(X.mor1),q.fromHexString(X.mor2),q.fromHexString(X.mor3),q.fromHexString(X.mor4);function Ie(e){let t={on_new_renderFn:e=>{o(e)},on_destroy:()=>{a&&=(e.removeChild(a.canvas),a.cleanup(),void 0),n=!0}},n=!1,r,i=!1,a,o=async t=>{if(r=t,i)return;a&&=(e.removeChild(a.canvas),a.cleanup(),void 0),i=!0;let s=r;if(a=await s(e),n){a.cleanup(),a=void 0;return}i=!1,r!==s&&o(r)};return t}var Le=z(`<div class="w-full h-full flex justify-content items-center">`);const Re=e=>{E(()=>{let{on_new_renderFn:n,on_destroy:r}=Ie(t);C(()=>{n(e.renderFn)}),D(()=>{r()})});let t;return(()=>{var e=Le(),n=t;return typeof n==`function`?Te(n,e):t=e,e})()};var ze=e=>{},Be=()=>{Z.beginFrame(),Z.fillRect(0,0,1920,1080,q.red),Z.endFrame()},Z,Ve=e=>{Z=e};async function He(e){let t=Ne(1024,1024,e,Be);Ve(t.batch);let n=Pe(ze,Be);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const Ue={id:`Springs`,title:`Springs`,description:`Springs`,code:`Springs`,demo:He};var We,Ge=()=>{We=0},Ke=e=>{We+=e/1e3},qe=()=>{Q.beginFrame(),Q.strokeRect(1024/2,1024/2,1024,1024,1,Fe.white),Q.fillRect(1024/2,1024/2,1023,1023,Fe.darkblue);let e=Oe(500,500),t=Oe(900,900),n=Math.sin(We)*Math.PI*2;t=ke(t,n),Q.strokeLine(e.x,e.y,t.x,t.y,1,Fe.pink),Q.endFrame()},Q,Je=e=>{Q=e};async function Ye(e){let t=Ne(1024,1024,e,qe);Je(t.batch),Ge();let n=Pe(Ke,qe);return{canvas:t.canvas,cleanup:()=>{t.cleanup(),n()}}}const $=[{id:`Welcome`,title:`Welcome`,description:`Welcome`,code:`Welcome`,demo:Ye},Ue];var Xe=z(`<div class="pt-24 pb-12 px-4 max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-3 lg:sticky lg:top-24"><h1 class="text-4xl font-bold tracking-tighter leading-node mb-3">TwisterJS<span class=text-[#ff5f5f]>.</span></h1><p class="text-xs text-gray-500 mb-8 font-medium leading-relaxed max-w-50">The subatomic modules for JS13k. Tiny Modules for Indie Game Developers.</p><div class="mb-8 space-y-4"><div class=group><div class="text-[9px] font-black uppercase tracking-[0.2em] text-[#5f6fff] mb-2 flex items-center gap-2"><span class="w-1 h-1 bg-[#5f6fff] rounded-xs"></span>Installation:</div><div class="relative group/code cursor-pointer bg-[#f3f4f6] border border-gray-200 rounded-xs p-3 font-mono text-[11px] text-gray-600 hover:border-[#5f6fff]/30 transition-all"><code class="block whitespace-nowrap overflow-hidden text-ellipsis">pnpm add twisterjs</code><div class="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity"><svg class="w-3.5 h-3.5 text-[#5f6fff]"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div></div></div><div class=group><div class="text-[9px] font-black uppercase tracking-[0.2em] text-[#5f6fff] mb-2 flex items-center gap-2"><span class="w-1 h-1 bg-[#5f6fff] rounded-xs"></span>Usage:</div><div class="relative group/code cursor-pointer bg-[#f3f4f6] border border-gray-200 rounded-xs p-3 font-mono text-[11px] text-gray-600 hover:border-[#5f6fff]/30 transition-all"><code class="block leading-relaxed whitespace-pre-wrap">
import { TwisterJS, add, vec2 } from 'twisterjs'

console.log(TwisterJS, add(vec2(0, 0), vec2(0, 0)))
</code><div class="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity"><svg class="w-3.5 h-3.5 text-[#5f6fff]"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div></div></div></div><div class="flex flex-col gap-3"><button class="w-full px-5 py-3 bg-[#1a1a1a] text-white rounded-xs font-bold text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-lg">Full Reference</button><div class="flex gap-2"><button class="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xs font-bold text-[10px] uppercase tracking-widest hover:border-[#5f6fff] transition-all">GitHub`),Ze=z(`<div class=lg:col-span-9><div class="flex items-center justify-between px-2 mb-4"><div class="flex items-center gap-3"><span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#5f6fff]">Example Library</span><span class="px-2 py-0.5 bg-[#bg6fff]/10 text-[#5f6fff] rounded-xs text-[8px] font-bold uppercase"> examples</span></div></div><div class="bg-white roundex-xs border border-gray-100 overflow-hidden shadow flex flex-col md:flex-row"><div><div class="p-3 border-b border-gray-100 bg-gray-50/50"><div class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Select an Example</div></div><div class="flex-1 overflow-y-auto scrollbar-hide py-1"></div></div><div class="flex-1 flex flex-col bg-[#0d0d0d] min-w-0"><div class="p-4 border-b border-white/5 flex items-center justify-between bg-black/40"><div class="flex flex-col"><span class="text-[10px] font-bold text-white uppercase tracking-widest"></span><span class="text-[9px] text-[#5f6fff] font-mono opacity-80"></span></div><button class="flex gap-1.5 group/controls p-1.5 hover:bg-white/5 rounded-xs transition-colors"><div class="w-2.5 h-2.5 rounded-xs bg-red-500/40 group-hover/controls:bg-red-500 transition-colors"></div><div class="w-2.5 h-2.5 rounded-xs bg-yellow-500/40 group-hover/controls:bg-yellow-500 transition-colors"></div><div class="w-2.5 h-2.5 rounded-xs bg-green-500/40 group-hover/controls:bg-green-500 transition-colors"></div></button></div><div class="flex-1 flex flex-col lg:flex-row min-h-0"><div class="flex-1 p-6 overflow-auto scrollbar-hide relative border-r border-white/5 min-h-50"><pre class="mono text-[11px] text-gray-400 leading-relaxed selection:bg-[#5f6fff]/40"><code class=text-[#5f6fff]/40>/* benchmark: <!> */</code><br></pre></div><div><div><div class="absolute inset-0 bg-[#5f6fff]/20 blur-xs rounded-xs opacity-50 -z-10 animate-pulse"></div><div class="relative w-full h-full aspect-square bg-black roundex-xs overflow-hidden flex items-center justify-center"></div><div class="mt-4 flex flex-col items-center gap-1"><div class="text-[8px] font-mono text-white/30 uppercase tracking-[0.4em]">Rendering Loop</div><div class="h-px w-8 bg-[#5f6fff]/30">`),Qe=z(`<button><div></div><div class=min-w-0><div></div><div class="text-[9px] text-gray-300 font-mono truncate">`);const $e=e=>{let t=e=>{console.log(e),navigator.clipboard.writeText(e)};return(()=>{var n=Xe(),r=n.firstChild,i=r.firstChild.firstChild.nextSibling.nextSibling,a=i.firstChild,o=a.firstChild.nextSibling,s=a.nextSibling.firstChild.nextSibling,c=i.nextSibling.firstChild,l=c.nextSibling.firstChild;return o.$$click=()=>t(`pnpm add twisterjs`),s.$$click=()=>t(`import { TwisterJS, add, vec2 } from 'twisterjs'

console.log(TwisterJS, add(vec2(0, 0), vec2(0, 0)))`),we(c,`click`,e.onExplore,!0),l.$$click=()=>window.open(`https://github.com/eguneys/twisterjs`,`_blank`),H(r,I(et,{}),null),n})()};var et=()=>{let e,[t,n]=x(!1);C(()=>{let e=()=>{n(!!document.fullscreenElement)};document.addEventListener(`fullscreenchange`,e),D(()=>document.removeEventListener(`fullscreenchange`,e))});let r=()=>{e&&(document.fullscreenElement?document.exitFullscreen():e.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)}))},[i,a]=x($[0].id),o=w(()=>$.find(e=>e.id===i()));return(()=>{var n=Ze(),s=n.firstChild,c=s.firstChild.firstChild.nextSibling,l=c.firstChild,u=s.nextSibling,d=u.firstChild,f=d.firstChild.nextSibling,p=d.nextSibling.firstChild,m=p.firstChild,h=m.firstChild,g=h.nextSibling,_=m.nextSibling;_.firstChild.nextSibling.nextSibling;var v=p.nextSibling.firstChild,y=v.firstChild,b=y.firstChild,x=b.firstChild.nextSibling;x.nextSibling,b.nextSibling;var C=v.nextSibling,w=C.firstChild,T=w.firstChild.nextSibling;H(c,()=>$.length,l);var E=e;return typeof E==`function`?Te(E,u):e=u,H(f,I(L,{each:$,children:e=>(()=>{var t=Qe(),n=t.firstChild,r=n.nextSibling.firstChild,o=r.nextSibling;return t.$$click=()=>a(e.id),H(r,()=>e.title),H(o,()=>e.id),S(a=>{var o=`w-full text-left px-4 py-3.5 transition-all group flex items-start gap-3 border-b border-gray-50/50 ${i()===e.id?`bg-white shadow z-10`:`hover:bg-gray-100/30`}`,s=`mt-1.5 w-1.5 h-1.5 rounded-xs shrink-0 transition-all ${i()===e.id?`bg-[#5f6fff] scale-125`:`bg-gray-200`}`,c=`text-[10px] font-bold uppercase tracking-wide truncate ${i()===e.id?`text-black`:`text-gray-400 group-hover:text-gray-600`}`;return o!==a.e&&V(t,a.e=o),s!==a.t&&V(n,a.t=s),c!==a.a&&V(r,a.a=c),a},{e:void 0,t:void 0,a:void 0}),t})()})),H(h,()=>o().title),H(g,()=>o().description),_.$$click=r,H(b,()=>o().id,x),H(y,()=>o().code,null),H(T,I(Re,{get renderFn(){return o().demo}})),S(e=>{var n=`w-full md:w-56 bg-gray-50/30 border-r border-gray-100 flex flex-col overflow-hidden shrink-0 ${t()?`md:max-h-none`:`max-h-50 md:max-h-none`}`,r=t()?`Exit Fullscreen`:`Enter Fullscreen`,i=`w-full bg-black shrink-0 flex items-center justify-center p-1 ${t()?`lg:w-[45%]`:`lg:w-[320px] `}`,a=`w-full relative ${t()?`max-w-125`:`max-w-60`}`;return n!==e.e&&V(d,e.e=n),r!==e.t&&Ce(_,`title`,e.t=r),i!==e.a&&V(C,e.a=i),a!==e.o&&V(w,e.o=a),e},{e:void 0,t:void 0,a:void 0,o:void 0}),n})()};B([`click`]);const tt=[{id:`AnimChannel`,name:`new AnimChannel(startValue: number)`,category:`Animation`,group:`AnimChannel`,description:`A class for animating a value`,example:`
let x = new AnimChannel()

/* Animate 'x.value' to 100 in a Spring Motion
x.springTo(100, { stiffness: 100, damping: 10 })

/* call update with passed seconds on each frame */
x.update(delta / 1000)

console.log(x.value) // x.value animates on each render
`}],nt=[{id:`Delay`,name:`new Delay()`,category:`Timing`,group:`Delay`,description:`A class for timing events`,example:`
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
`}],rt=[{id:`rect`,name:`rect(x, y, w, h)`,category:`Math`,group:`Rectangle`,description:`A simple Rectangle object`,example:`
let r = rect(0, 0, 100, 100)
console.log(r.xy.x, r.xy.y, r.wh.x, r.wh.y) // logs 0, 0, 100, 100
`},{id:`rect_left`,name:`rect_left(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns left of the rectangle`,example:`rect_left(rect(10, 0, 100, 100)) // Returns 10`},{id:`rect_right`,name:`rect_right(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns right of the rectangle`,example:`rect_right(rect_a)`},{id:`rect_top`,name:`rect_top(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns top of the rectangle`,example:`rect_top(rect_a)`},{id:`rect_bottom`,name:`rect_bottom(r: Rect)`,category:`Math`,group:`Rectangle`,description:`Returns bottom of the rectangle`,example:`rect_bottom(rect_a)`},{id:`rect_abcd`,name:`rect_abcd(r: Rect): [Vec2, Vec2, Vec2, Vec2]`,category:`Math`,group:`Rectangle`,description:`Returns corners of the Rectangle`,example:`rect_abcd(rect_a)`},{id:`box_intersect`,name:`box_intersect(a: Rect, b: Rect): boolean`,category:`Math`,group:`Rectangle`,description:`Returns whether two boxes intersect`,example:`box_intersect(rect_a, rect_b)`},{id:`box_intersect_ratio`,name:`box_intersect_ratio(a: Rect, b: Rect): number`,category:`Math`,group:`Rectangle`,description:`Returns the ratio of intersection of box a to box b`,example:`box_intersect_ratio(rect_a, rect_b)`}],it=[{id:`Agent`,name:`agent(position: Vec2, params: AgentParams): Agent`,category:`AI`,group:`Steering Behaviors`,description:`Creates a moving Agent to apply Steering Behaviors on`,example:`
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
`}],at=[...[{id:`vec2`,name:`vec2(x, y)`,category:`Math`,group:`Vector 2`,description:`A simple object for a 2D Vector`,example:`
let v = vec2(100, 100)
console.log(v.x, v.y) // logs 100 100
`},{id:`len2`,name:`len2(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns Vector's length squared`,example:`len(vec2(10, 10))`},{id:`length`,name:`length(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns Vector's length`,example:`length(vec_a)`},{id:`distance`,name:`distance(a: Vec2, b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the distance between 2 Vectors`,example:`distance(vec_a, vec_b)`},{id:`distance2`,name:`distance2(a: Vec2, b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the distance squared between 2 Vectors`,example:`distance2(vec_a, vec_b)`},{id:`normalize`,name:`normalize(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the Vector normalized`,example:`normalize(vec2(10, 10))`},{id:`normalizeSafe`,name:`normalizeSafe(v: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the Vector normalized but zero Vector when length is zero`,example:`normalizeSafe(vec_a)`},{id:`fromAngle`,name:`fromAngle(theta: number)`,category:`Math`,group:`Vector 2`,description:`Creates a vector directed towards angle theta (in radians)`,example:`fromAngle(Math.PI * 0.25)`},{id:`add`,name:`add(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Adds two vectors`,example:`add(vec_a, vec_b)`},{id:`sub`,name:`sub(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Subtracts two vectors`,example:`sub(vec_a, vec_b)`},{id:`mulScalar`,name:`mulScalar(v: Vec2,s: number)`,category:`Math`,group:`Vector 2`,description:`Multiplies vector by a scalar`,example:`mulScalar(vec_a, 10)`},{id:`dot`,name:`dot(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Dot product of two vectors`,example:`dot(vec_a, vec_b)`},{id:`mul`,name:`mul(a: Vec2,b: Vec2)`,category:`Math`,group:`Vector 2`,description:`Multiplies two vectors`,example:`mul(vec_a, vec_b)`},{id:`perp`,name:`perp(a: Vec2)`,category:`Math`,group:`Vector 2`,description:`Returns the perpendicular Vector of the Vector`,example:`perp(vec_a)`},{id:`project`,name:`project(a: Vec2, target: Vec2)`,category:`Math`,group:`Vector 2`,description:`Projects Vector a onto Vector b`,example:`project(vec_a, vec_b)`},{id:`clampLength`,name:`clampLength(a: Vec2, max: number, min = 0)`,category:`Math`,group:`Vector 2`,description:`Clamps the Vector between max and min values`,example:`clampLength(vec(100, 50), 75, 10)`},{id:`rotateVec2`,name:`rotateVec2(v: Vec2, theta: number)`,category:`Math`,group:`Vector 2`,description:`Rotate the Vector by theta amount (theta in radians)`,example:`rotateVec2(vec2(100, 0), Math.PI * 0.5)`}],...rt,...nt,...tt,...it],ot=[`Math`,`Timing`,`Animation`,`AI`,`Graphics`];var st=z(`<div class="max-w-6xl mx-auto pt-20 pb-8 px-4"><div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4"><h2 class="text-xl font-bold tracking-tight">API Reference</h2><div class="flex gap-1 overflow-x-auto pb-1 scrollbar-hide"></div></div><div class=mb-6><input type=text placeholder="Filter API Surface..."class="w-full bg-gray-50 border border-gray-100 rounded-xs px-3 py-2 text-xs outline-none focus:border-[#5f6fff] transition-all"></div><div class=space-y-8>`),ct=z(`<button>`),lt=z(`<div class="text-center py-12 text-gray-400 text-xs italic">No functions found matching your criteria.`),ut=z(`<div class="animate-in fade-in duration-300"><h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-[#5f6fff] mb-4 border-b border-[#5f6fff]/10 pb-1"></h3><div class=space-y-6>`),dt=z(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">`),ft=z(`<div class="pl-2 border-l border-gray-100 transition-all"><button class="group/header w-full flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-100/50 transition-colors mb-2 text-left"><div class="flex items-center gap-2"><span></span><h4>`),pt=z(`<div class="group p-3 bg-white border border-gray-100 rounded-xs hover:border-[#5f6fff] transition-all"><div class="flex justify-between items-center mb-1"><span class="text-[8px] font-black text-[#5f6fff] uppercase tracking-tighter"></span></div><div class="relative group/name mb-0.5"><h3 class="text-xs font-bold mb-0.5 mono group-hover:text-[#5f6fff] truncate"></h3><div class="absolute bottom-full left-0 mb-2 invisible group-hover/name:visible opacity-0 group-hover/name:opacity-100 transition-all bg-[#1a1a1a] text-white text-[10px] py-1 px-2 rounded-xs shadow-2xl whitespace-nowrap z-60 pointer-events-none transform translate-y-1 group-hover/name:translate-y-0"><div class="absolute top-full left-2 -mt-1 border-4 border-transparent border-t-[#1a1a1a]"></div></div></div><p class="text-gray-400 text-[10px] mb-2 leading-tight h-6 overflow-hidden line-clamp-2"></p><div class="bg-gray-50 p-2 rounded-xs border border-gray-50/50"><code class="text-[10px] mono text-gray-600 block truncate whitespace-pre-wrap">`);const mt=()=>{let[e,t]=x(`All`),[n,r]=x(``),i=w(()=>{let t={};return at.filter(t=>{let r=t.name.toLowerCase().includes(n().toLowerCase())||t.description.toLowerCase().includes(n().toLowerCase())||t.group.toLowerCase().includes(n().toLowerCase()),i=e()===`All`||t.category===e();return r&&i}).forEach(e=>{t[e.category]||(t[e.category]={});let n=t[e.category];n[e.group]||(n[e.group]=[]),n[e.group].push(e)}),t}),[a,o]=x(new Set,{equals:!1}),s=(e,t)=>{let n=a(),r=`${e}-${t}`;n.has(r)?n.delete(r):n.add(r),o(n)},c=(e,t)=>a().has(`${e}-${t}`),l=w(()=>Object.keys(i()));return(()=>{var a=st(),o=a.firstChild,u=o.firstChild.nextSibling,d=o.nextSibling,f=d.firstChild,p=d.nextSibling;return H(u,I(L,{get each(){return[`All`,...ot]},children:n=>(()=>{var r=ct();return r.$$click=()=>t(n),H(r,n),S(()=>V(r,`px-3 py-1 rounded-xs text-[9px] font-bold uppercase tracking-wider transition-all border ${e()===n?`bg-[#1a1a1a] text-white border-black`:`bg-white text-gray-400 border-gray-100`}`)),r})()})),f.addEventListener(`change`,e=>r(e.target.value)),H(p,I(L,{get each(){return l()},get fallback(){return lt()},children:e=>(()=>{var t=ut(),n=t.firstChild,r=n.nextSibling;return H(n,e),H(r,I(L,{get each(){return Object.entries(i()[e])},get fallback(){return lt()},children:([t,n])=>(()=>{var r=ft(),i=r.firstChild,a=i.firstChild.firstChild,o=a.nextSibling;return i.$$click=()=>s(e,t),H(o,t),H(r,I(R,{get when(){return!c(e,t)},get children(){var e=dt();return H(e,I(L,{each:n,children:e=>(()=>{var t=pt(),n=t.firstChild,r=n.firstChild,i=n.nextSibling,a=i.firstChild,o=a.nextSibling,s=o.firstChild,c=i.nextSibling,l=c.nextSibling.firstChild;return H(r,()=>e.category),H(a,()=>e.name),H(o,()=>e.name,s),H(c,()=>e.description),H(l,()=>e.example.trim()),t})()})),e}}),null),S(n=>{var r=`w-1.5 h-1.5 rounded-full transition-colors ${c(e,t)?`bg-gray-300`:`bg-[#5f6fff]`}`,i=`text-[11px] font-bold transition-colors ${c(e,t)?`text-gray-400`:`text-gray-600`}`;return r!==n.e&&V(a,n.e=r),i!==n.t&&V(o,n.t=i),n},{e:void 0,t:void 0}),r})()})),t})()})),S(()=>f.value=n()),a})()};B([`click`]);var ht=z(`<div class="text-center md:text-left"><span class="block text-[8px] font-black text-[#5f6fff] uppercase tracking[0.2em] mb-1"></span><span class="block text-xl font-bold text-gray-900 tracking-tighter">`),gt=[{label:`Payload`,val:`Tiny Modular`},{label:`Design`,val:`Indie / AI`},{label:`Animation`,val:`Spring`},{label:`Timing`,val:`Delay`},{label:`AI`,val:`Steering Behaviors`},{label:`Math`,val:`Vec2 / Polygon`},{label:`Rendering`,val:`Batched WebGL`}];const _t=()=>I(L,{each:gt,children:e=>(()=>{var t=ht(),n=t.firstChild,r=n.nextSibling;return H(n,()=>e.label),H(r,()=>e.val),t})()});var vt=z(`<section class="bg-white border-t border-gray-100 py-12"><div class="max-w-6xl mx-auto px-4"><div class="grid grid-cols-2 md:grid-cols-4 gap-6">`),yt=z(`<section class="bg-gray-50/50 border-t border-gray-100">`),bt=z(`<div class="min-h-screen selection:bg-[#5f6fff] selection:text-white bg-[#fcfcfc]"><main class="transition-all duration-300"></main><footer class="py-10 border-t border-gray-50 text-center bg-white"><p class="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">TwisterJS &bull; Tailored for the Indie &bull; 2026`),xt=z(`<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center"><div class="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"><div class="w-4 h-4 bg-[#5f6fff] rounded-[1px]"></div>TwisterJS</div><div class="flex gap-8 text-sm font-medium uppercase tracking-widest">`),St=z(`<button>`);function Ct(){let[e,t]=x(`landing`),n=e=>{t(e)};return(()=>{var t=bt(),r=t.firstChild;return H(t,I(wt,{get currentSection(){return e()},onNavigate:n}),r),H(r,I(R,{get when(){return e()===`landing`},get children(){return[I($e,{onExplore:()=>n(`cheatsheet`)}),(()=>{var e=vt(),t=e.firstChild.firstChild;return H(t,I(_t,{})),e})(),(()=>{var e=yt();return H(e,I(mt,{})),e})()]}}),null),H(r,I(R,{get when(){return e()===`cheatsheet`},get children(){return I(mt,{})}}),null),t})()}var wt=e=>{let t=[{id:`landing`,label:`Start`},{id:`cheatsheet`,label:`Docs`}];return(()=>{var n=xt(),r=n.firstChild,i=r.nextSibling;return r.$$click=()=>e.onNavigate(`landing`),H(i,I(L,{each:t,children:t=>(()=>{var n=St();return n.$$click=()=>e.onNavigate(t.id),H(n,()=>t.label),S(()=>V(n,`transition-colors hover:text-[#5f6fff]' ${e.currentSection===t.id?`text-[#5f6fff]`:`text-gray-400`}`)),n})()})),n})()};B([`click`]),Se(()=>I(Ct,{}),document.getElementById(`root`));