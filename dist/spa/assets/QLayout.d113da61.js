var Lt=Object.defineProperty,zt=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var Ve=Object.getOwnPropertySymbols;var $t=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var De=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))$t.call(t,n)&&De(e,n,t[n]);if(Ve)for(var n of Ve(t))Pt.call(t,n)&&De(e,n,t[n]);return e},X=(e,t)=>zt(e,Et(t));import{w as x,o as N,f as j,J as ze,g as W,K as B,c as v,r as T,L as Bt,h as q,q as rt,n as I,M as Ot,s as Ee,P as Mt,N as $,O as Rt,Q as te,R as me,t as Qe,x as he,S as Te,U as ge,V as Xe,W as _t,z as At,a as at,y as $e,X as lt,Y as Ft,Z as oe,b as Wt}from"./index.bcf7515b.js";import{g as Ht,c as Ye,Q as Vt,u as Dt,b as Qt,v as Xt}from"./QBtn.985bc149.js";import{c as O,u as Yt,a as Nt,b as jt,h as Pe,d as It,f as Ut,g as Ne,e as Kt}from"./QSpinner.ec669266.js";const Zt=[null,document,document.body,document.scrollingElement,document.documentElement];function Jt(e,t){let n=Ht(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Zt.includes(n)?window:n}function Be(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Oe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function st(e,t,n=0){const a=arguments[3]===void 0?performance.now():arguments[3],o=Be(e);if(n<=0){o!==t&&ke(e,t);return}requestAnimationFrame(i=>{const l=i-a,c=o+(t-o)/Math.max(l,n)*l;ke(e,c),c!==t&&st(e,t,n-l,i)})}function ut(e,t,n=0){const a=arguments[3]===void 0?performance.now():arguments[3],o=Oe(e);if(n<=0){o!==t&&Le(e,t);return}requestAnimationFrame(i=>{const l=i-a,c=o+(t-o)/Math.max(l,n)*l;Le(e,c),c!==t&&ut(e,t,n-l,i)})}function ke(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function Le(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function To(e,t,n){if(n){st(e,t,n);return}ke(e,t)}function ko(e,t,n){if(n){ut(e,t,n);return}Le(e,t)}let ne;function ye(){if(ne!==void 0)return ne;const e=document.createElement("p"),t=document.createElement("div");Ye(e,{width:"100%",height:"200px"}),Ye(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=t.clientWidth),t.remove(),ne=n-a,ne}function Gt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:je}=B,eo=["both","horizontal","vertical"];var to=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>eo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,o,i;x(()=>e.scrollTarget,()=>{u(),c()});function l(){a!==null&&a();const y=Math.max(0,Be(o)),p=Oe(o),f={top:y-n.position.top,left:p-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const w=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:y,left:p},n.directionChanged=n.direction!==w,n.delta=f,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),t("scroll",R({},n))}function c(){o=Jt(i,e.scrollTarget),o.addEventListener("scroll",r,je),r(!0)}function u(){o!==void 0&&(o.removeEventListener("scroll",r,je),o=void 0)}function r(y){if(y===!0||e.debounce===0||e.debounce==="0")l();else if(a===null){const[p,f]=e.debounce?[setTimeout(l,e.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];a=()=>{f(p),a=null}}}const g=W();return N(()=>{i=g.proxy.$el.parentNode,c()}),j(()=>{a!==null&&a(),u()}),Object.assign(g.proxy,{trigger:r,getPosition:()=>n}),ze}});const Me={dark:{type:Boolean,default:null}};function Re(e,t){return v(()=>e.dark===null?t.dark.isActive:e.dark)}const oo=Object.prototype.toString,pe=Object.prototype.hasOwnProperty,ct={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{ct["[object "+e+"]"]=e.toLowerCase()});function ae(e){return e===null?String(e):ct[oo.call(e)]||"object"}function Ie(e){if(!e||ae(e)!=="object"||e.constructor&&!pe.call(e,"constructor")&&!pe.call(e.constructor.prototype,"isPrototypeOf"))return!1;let t;for(t in e);return t===void 0||pe.call(e,t)}function no(){let e,t,n,a,o,i,l=arguments[0]||{},c=1,u=!1;const r=arguments.length;for(typeof l=="boolean"&&(u=l,l=arguments[1]||{},c=2),Object(l)!==l&&ae(l)!=="function"&&(l={}),r===c&&(l=this,c--);c<r;c++)if((e=arguments[c])!==null)for(t in e)n=l[t],a=e[t],l!==a&&(u&&a&&(Ie(a)||(o=ae(a)==="array"))?(o?(o=!1,i=n&&ae(n)==="array"?n:[]):i=n&&Ie(n)?n:{},l[t]=no(u,i,a)):a!==void 0&&(l[t]=a));return l}function ie(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}const Ue=/^on[A-Z]/;function Lo(e,t){const n={listeners:T({}),attributes:T({})};function a(){const o={},i={};for(const l in e)l!=="class"&&l!=="style"&&Ue.test(l)===!1&&(o[l]=e[l]);for(const l in t.props)Ue.test(l)===!0&&(i[l]=t.props[l]);n.attributes.value=o,n.listeners.value=i}return Bt(a),a(),n}let V=[],J=[];function dt(e){J=J.filter(t=>t!==e)}function zo(e){dt(e),J.push(e)}function Eo(e){dt(e),J.length===0&&V.length>0&&(V[V.length-1](),V=[])}function $o(e){J.length===0?e():V.push(e)}function Po(e){V=V.filter(t=>t!==e)}var Bo=O({name:"QAvatar",props:X(R({},Yt),{fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean}),setup(e,{slots:t}){const n=Nt(e),a=v(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),o=v(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const i=e.icon!==void 0?[q(Vt,{name:e.icon})]:void 0;return q("div",{class:a.value,style:n.value},[q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:o.value},jt(t.default,i))])}}});function io(){const e=T(!rt.value);return e.value===!1&&N(()=>{e.value=!0}),e}const ft=typeof ResizeObserver!="undefined",Ke=ft===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ze=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n=null,a,o={width:-1,height:-1};function i(u){u===!0||e.debounce===0||e.debounce==="0"?l():n===null&&(n=setTimeout(l,e.debounce))}function l(){if(clearTimeout(n),n=null,a){const{offsetWidth:u,offsetHeight:r}=a;(u!==o.width||r!==o.height)&&(o={width:u,height:r},t("resize",o))}}const c=W();if(Object.assign(c.proxy,{trigger:i}),ft===!0){let u;return N(()=>{I(()=>{a=c.proxy.$el.parentNode,a&&(u=new ResizeObserver(i),u.observe(a),l())})}),j(()=>{clearTimeout(n),u!==void 0&&(u.disconnect!==void 0?u.disconnect():a&&u.unobserve(a))}),ze}else{let g=function(){clearTimeout(n),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",i,B.passive),r=void 0)},y=function(){g(),a&&a.contentDocument&&(r=a.contentDocument.defaultView,r.addEventListener("resize",i,B.passive),l())};const u=io();let r;return N(()=>{I(()=>{a=c.proxy.$el,a&&y()})}),j(g),()=>{if(u.value===!0)return q("object",{style:Ke.style,tabindex:-1,type:"text/html",data:Ke.url,"aria-hidden":"true",onLoad:y})}}}}),Oo=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:n.value},Pe(t.default))}}),Mo=O({name:"QItem",props:X(R(R({},Me),Dt),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=W(),o=Re(e,a),{hasRouterLink:i,hasLink:l,linkProps:c,linkClass:u,linkTag:r,navigateToRouterLink:g}=Qt(),y=T(null),p=T(null),f=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),w=v(()=>e.disable!==!0&&f.value===!0),C=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(l.value===!0?u.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(w.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),b=v(()=>{if(e.insetLevel===void 0)return null;const d=a.lang.rtl===!0?"Right":"Left";return{["padding"+d]:16+e.insetLevel*56+"px"}});function P(d){w.value===!0&&(p.value!==null&&(d.qKeyEvent!==!0&&document.activeElement===y.value?p.value.focus():document.activeElement===p.value&&y.value.focus()),i.value===!0&&g(d),n("click",d))}function m(d){if(w.value===!0&&Ot(d,13)===!0){Ee(d),d.qKeyEvent=!0;const S=new MouseEvent("click",d);S.qKeyEvent=!0,y.value.dispatchEvent(S)}n("keyup",d)}function k(){const d=It(t.default,[]);return w.value===!0&&d.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:p})),d}return()=>{const d={ref:y,class:C.value,style:b.value,onClick:P,onKeyup:m};return w.value===!0?(d.tabindex=e.tabindex||"0",Object.assign(d,c.value)):f.value===!0&&(d["aria-disabled"]="true"),q(r.value,d,k())}}});const ro=q("div",{class:"q-space"});var Ro=O({name:"QSpace",setup(){return()=>ro}});const ao={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},be={xs:2,sm:4,md:8,lg:16,xl:24};var _o=O({name:"QSeparator",props:X(R({},Me),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const t=W(),n=Re(e,t.proxy.$q),a=v(()=>e.vertical===!0?"vertical":"horizontal"),o=v(()=>` q-separator--${a.value}`),i=v(()=>e.inset!==!1?`${o.value}-${ao[e.inset]}`:""),l=v(()=>`q-separator${o.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),c=v(()=>{const u={};if(e.size!==void 0&&(u[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const r=e.spaced===!0?`${be.md}px`:e.spaced in be?`${be[e.spaced]}px`:e.spaced,g=e.vertical===!0?["Left","Right"]:["Top","Bottom"];u[`margin${g[0]}`]=u[`margin${g[1]}`]=r}return u});return()=>q("hr",{class:l.value,style:c.value,"aria-orientation":a.value})}});const _e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},lo=Object.keys(_e);_e.all=!0;function Je(e){const t={};for(const n of lo)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?_e:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function Ge(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function so(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function we(e,t,n){const a=Te(e);let o,i=a.left-t.event.x,l=a.top-t.event.y,c=Math.abs(i),u=Math.abs(l);const r=t.direction;r.horizontal===!0&&r.vertical!==!0?o=i<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?o=l<0?"up":"down":r.up===!0&&l<0?(o="up",c>u&&(r.left===!0&&i<0?o="left":r.right===!0&&i>0&&(o="right"))):r.down===!0&&l>0?(o="down",c>u&&(r.left===!0&&i<0?o="left":r.right===!0&&i>0&&(o="right"))):r.left===!0&&i<0?(o="left",c<u&&(r.up===!0&&l<0?o="up":r.down===!0&&l>0&&(o="down"))):r.right===!0&&i>0&&(o="right",c<u&&(r.up===!0&&l<0?o="up":r.down===!0&&l>0&&(o="down")));let g=!1;if(o===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};o=t.event.lastDir,g=!0,o==="left"||o==="right"?(a.left-=i,c=0,i=0):(a.top-=l,u=0,l=0)}return{synthetic:g,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:a,direction:o,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:c,y:u},offset:{x:i,y:l},delta:{x:a.left-t.event.lastX,y:a.top-t.event.lastY}}}}let uo=0;var Se=Ut({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(n.mouse!==!0&&$.has.touch!==!0)return;function a(i,l){n.mouse===!0&&l===!0?Ee(i):(n.stop===!0&&he(i),n.prevent===!0&&Qe(i))}const o={uid:"qvtp_"+uo++,handler:t,modifiers:n,direction:Je(n),noop:ze,mouseStart(i){Ge(i,o)&&Rt(i)&&(te(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(i,!0))},touchStart(i){if(Ge(i,o)){const l=i.target;te(o,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),o.start(i)}},start(i,l){if($.is.firefox===!0&&me(e,!0),o.lastEvt=i,l===!0||n.stop===!0){if(o.direction.all!==!0&&(l!==!0||o.modifiers.mouseAllDir!==!0)){const r=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Qe(r),i.cancelBubble===!0&&he(r),Object.assign(r,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[o.uid]:i.qClonedBy.concat(o.uid)}),o.initialEvent={target:i.target,event:r}}he(i)}const{left:c,top:u}=Te(i);o.event={x:c,y:u,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:u}},move(i){if(o.event===void 0)return;const l=Te(i),c=l.left-o.event.x,u=l.top-o.event.y;if(c===0&&u===0)return;o.lastEvt=i;const r=o.event.mouse===!0,g=()=>{a(i,r),n.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),so(),o.styleCleanup=f=>{if(o.styleCleanup=void 0,n.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),r===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{w(),f()},50):w()}else f!==void 0&&f()}};if(o.event.detected===!0){o.event.isFirst!==!0&&a(i,o.event.mouse);const{payload:f,synthetic:w}=we(i,o,!1);f!==void 0&&(o.handler(f)===!1?o.end(i):(o.styleCleanup===void 0&&o.event.isFirst===!0&&g(),o.event.lastX=f.position.left,o.event.lastY=f.position.top,o.event.lastDir=w===!0?void 0:f.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||r===!0&&o.modifiers.mouseAllDir===!0){g(),o.event.detected=!0,o.move(i);return}const y=Math.abs(c),p=Math.abs(u);y!==p&&(o.direction.horizontal===!0&&y>p||o.direction.vertical===!0&&y<p||o.direction.up===!0&&y<p&&u<0||o.direction.down===!0&&y<p&&u>0||o.direction.left===!0&&y>p&&c<0||o.direction.right===!0&&y>p&&c>0?(o.event.detected=!0,o.move(i)):o.end(i,!0))},end(i,l){if(o.event!==void 0){if(ge(o,"temp"),$.is.firefox===!0&&me(e,!1),l===!0)o.styleCleanup!==void 0&&o.styleCleanup(),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(we(i===void 0?o.lastEvt:i,o).payload);const{payload:c}=we(i===void 0?o.lastEvt:i,o,!0),u=()=>{o.handler(c)};o.styleCleanup!==void 0?o.styleCleanup(u):u()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};e.__qtouchpan=o,n.mouse===!0&&te(o,"main",[[e,"mousedown","mouseStart",`passive${n.mouseCapture===!0?"Capture":""}`]]),$.has.touch===!0&&te(o,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=Je(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),ge(t,"main"),ge(t,"temp"),$.is.firefox===!0&&me(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchpan)}});function co(e,t,n){let a;function o(){a!==void 0&&(Xe.remove(a),a=void 0)}return j(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){a={condition:()=>n.value===!0,handler:t},Xe.add(a)}}}const fo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},vo=["before-show","show","before-hide","hide"];function mo({showing:e,canShow:t,hideOnRouteChange:n,handleShow:a,handleHide:o,processOnMount:i}){const l=W(),{props:c,emit:u,proxy:r}=l;let g;function y(m){e.value===!0?w(m):p(m)}function p(m){if(c.disable===!0||m!==void 0&&m.qAnchorHandled===!0||t!==void 0&&t(m)!==!0)return;const k=c["onUpdate:modelValue"]!==void 0;k===!0&&(u("update:modelValue",!0),g=m,I(()=>{g===m&&(g=void 0)})),(c.modelValue===null||k===!1)&&f(m)}function f(m){e.value!==!0&&(e.value=!0,u("before-show",m),a!==void 0?a(m):u("show",m))}function w(m){if(c.disable===!0)return;const k=c["onUpdate:modelValue"]!==void 0;k===!0&&(u("update:modelValue",!1),g=m,I(()=>{g===m&&(g=void 0)})),(c.modelValue===null||k===!1)&&C(m)}function C(m){e.value!==!1&&(e.value=!1,u("before-hide",m),o!==void 0?o(m):u("hide",m))}function b(m){c.disable===!0&&m===!0?c["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):m===!0!==e.value&&(m===!0?f:C)(g)}x(()=>c.modelValue,b),n!==void 0&&Xt(l)===!0&&x(()=>r.$route.fullPath,()=>{n.value===!0&&e.value===!0&&w()}),i===!0&&N(()=>{b(c.modelValue)});const P={show:p,hide:w,toggle:y};return Object.assign(r,P),P}let K=0,qe,Ce,Z,xe=!1,et,tt,Y;function ho(e){go(e)&&Ee(e)}function go(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=_t(e),n=e.shiftKey&&!e.deltaX,a=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||a?e.deltaY:e.deltaX;for(let i=0;i<t.length;i++){const l=t[i];if(Gt(l,a))return a?o<0&&l.scrollTop===0?!0:o>0&&l.scrollTop+l.clientHeight===l.scrollHeight:o<0&&l.scrollLeft===0?!0:o>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function ot(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){xe!==!0&&(xe=!0,requestAnimationFrame(()=>{xe=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:a}=document.scrollingElement;(Z===void 0||t!==window.innerHeight)&&(Z=n-t,document.scrollingElement.scrollTop=a),a>Z&&(document.scrollingElement.scrollTop-=Math.ceil((a-Z)/8))}))}function nt(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:o}=window.getComputedStyle(t);qe=Oe(window),Ce=Be(window),et=t.style.left,tt=t.style.top,t.style.left=`-${qe}px`,t.style.top=`-${Ce}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,B.passiveCapture),window.visualViewport.addEventListener("scroll",re,B.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ot,B.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",ho,B.notPassive),e==="remove"&&($.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",re,B.passiveCapture),window.visualViewport.removeEventListener("scroll",re,B.passiveCapture)):window.removeEventListener("scroll",ot,B.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=et,t.style.top=tt,window.scrollTo(qe,Ce),Z=void 0)}function yo(e){let t="add";if(e===!0){if(K++,Y!==void 0){clearTimeout(Y),Y=void 0;return}if(K>1)return}else{if(K===0||(K--,K>0))return;if(t="remove",$.is.ios===!0&&$.is.nativeMobile===!0){clearTimeout(Y),Y=setTimeout(()=>{nt(t),Y=void 0},100);return}}nt(t)}function po(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,yo(t))}}}function bo(){let e;return j(()=>{clearTimeout(e)}),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}const it=150;var Ao=O({name:"QDrawer",inheritAttrs:!1,props:X(R(R({},fo),Me),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...vo,"on-layout","mini-state"],setup(e,{slots:t,emit:n,attrs:a}){const o=W(),{proxy:{$q:i}}=o,l=Re(e,i),{preventBodyScroll:c}=po(),{registerTimeout:u}=bo(),r=at($e,()=>{console.error("QDrawer needs to be child of QLayout")});let g,y,p;const f=T(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),w=v(()=>e.mini===!0&&f.value!==!0),C=v(()=>w.value===!0?e.miniWidth:e.width),b=T(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),P=v(()=>e.persistent!==!0&&(f.value===!0||vt.value===!0));function m(s,h){if(M(),s!==!1&&r.animate(),E(0),f.value===!0){const L=r.instances[G.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),A(1),r.isContainer.value!==!0&&c(!0)}else A(0),s!==!1&&de(!1);u(()=>{s!==!1&&de(!0),h!==!0&&n("show",s)},it)}function k(s,h){H(),s!==!1&&r.animate(),A(0),E(D.value*C.value),fe(),h!==!0&&u(()=>{n("hide",s)},it)}const{show:d,hide:S}=mo({showing:b,hideOnRouteChange:P,handleShow:m,handleHide:k}),{addToHistory:M,removeFromHistory:H}=co(b,S,P),_={belowBreakpoint:f,hide:S},z=v(()=>e.side==="right"),D=v(()=>(i.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),Ae=T(0),Q=T(!1),le=T(!1),Fe=T(C.value*D.value),G=v(()=>z.value===!0?"left":"right"),se=v(()=>b.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),ue=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(z.value?"R":"L")>-1||i.platform.is.ios===!0&&r.isContainer.value===!0),U=v(()=>e.overlay===!1&&b.value===!0&&f.value===!1),vt=v(()=>e.overlay===!0&&b.value===!0&&f.value===!1),mt=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&Q.value===!1?" hidden":"")),ht=v(()=>({backgroundColor:`rgba(0,0,0,${Ae.value*.4})`})),We=v(()=>z.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),gt=v(()=>z.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),yt=v(()=>{const s={};return r.header.space===!0&&We.value===!1&&(ue.value===!0?s.top=`${r.header.offset}px`:r.header.space===!0&&(s.top=`${r.header.size}px`)),r.footer.space===!0&&gt.value===!1&&(ue.value===!0?s.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(s.bottom=`${r.footer.size}px`)),s}),pt=v(()=>{const s={width:`${C.value}px`,transform:`translateX(${Fe.value}px)`};return f.value===!0?s:Object.assign(s,yt.value)}),bt=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),wt=v(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${w.value===!0?"mini":"standard"}`+(ue.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(We.value===!0?" q-drawer--top-padding":""))),St=v(()=>{const s=i.lang.rtl===!0?e.side:G.value;return[[Se,Tt,void 0,{[s]:!0,mouse:!0}]]}),qt=v(()=>{const s=i.lang.rtl===!0?G.value:e.side;return[[Se,He,void 0,{[s]:!0,mouse:!0}]]}),Ct=v(()=>{const s=i.lang.rtl===!0?G.value:e.side;return[[Se,He,void 0,{[s]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){kt(f,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}x(f,s=>{s===!0?(g=b.value,b.value===!0&&S(!1)):e.overlay===!1&&e.behavior!=="mobile"&&g!==!1&&(b.value===!0?(E(0),A(0),fe()):d(!1))}),x(()=>e.side,(s,h)=>{r.instances[h]===_&&(r.instances[h]=void 0,r[h].space=!1,r[h].offset=0),r.instances[s]=_,r[s].size=C.value,r[s].space=U.value,r[s].offset=se.value}),x(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),x(()=>e.behavior+e.breakpoint,ce),x(r.isContainer,s=>{b.value===!0&&c(s!==!0),s===!0&&ce()}),x(r.scrollbarWidth,()=>{E(b.value===!0?0:void 0)}),x(se,s=>{F("offset",s)}),x(U,s=>{n("on-layout",s),F("space",s)}),x(z,()=>{E()}),x(C,s=>{E(),ve(e.miniToOverlay,s)}),x(()=>e.miniToOverlay,s=>{ve(s,C.value)}),x(()=>i.lang.rtl,()=>{E()}),x(()=>e.mini,()=>{e.modelValue===!0&&(xt(),r.animate())}),x(w,s=>{n("mini-state",s)});function E(s){s===void 0?I(()=>{s=b.value===!0?0:C.value,E(D.value*s)}):(r.isContainer.value===!0&&z.value===!0&&(f.value===!0||Math.abs(s)===C.value)&&(s+=D.value*r.scrollbarWidth.value),Fe.value=s)}function A(s){Ae.value=s}function de(s){const h=s===!0?"remove":r.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function xt(){clearTimeout(y),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,y=setTimeout(()=>{le.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Tt(s){if(b.value!==!1)return;const h=C.value,L=ie(s.distance.x,0,h);if(s.isFinal===!0){L>=Math.min(75,h)===!0?d():(r.animate(),A(0),E(D.value*h)),Q.value=!1;return}E((i.lang.rtl===!0?z.value!==!0:z.value)?Math.max(h-L,0):Math.min(0,L-h)),A(ie(L/h,0,1)),s.isFirst===!0&&(Q.value=!0)}function He(s){if(b.value!==!0)return;const h=C.value,L=s.direction===e.side,ee=(i.lang.rtl===!0?L!==!0:L)?ie(s.distance.x,0,h):0;if(s.isFinal===!0){Math.abs(ee)<Math.min(75,h)===!0?(r.animate(),A(1),E(0)):S(),Q.value=!1;return}E(D.value*ee),A(ie(1-ee/h,0,1)),s.isFirst===!0&&(Q.value=!0)}function fe(){c(!1),de(!0)}function F(s,h){r.update(e.side,s,h)}function kt(s,h){s.value!==h&&(s.value=h)}function ve(s,h){F("size",s===!0?e.miniWidth:h)}return r.instances[e.side]=_,ve(e.miniToOverlay,C.value),F("space",U.value),F("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),N(()=>{n("on-layout",U.value),n("mini-state",w.value),g=e.showIfAbove===!0;const s=()=>{(b.value===!0?m:k)(!1,!0)};if(r.totalWidth.value!==0){I(s);return}p=x(r.totalWidth,()=>{p(),p=void 0,b.value===!1&&e.showIfAbove===!0&&f.value===!1?d(!1):s()})}),j(()=>{p!==void 0&&p(),clearTimeout(y),b.value===!0&&fe(),r.instances[e.side]===_&&(r.instances[e.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const s=[];f.value===!0&&(e.noSwipeOpen===!1&&s.push(At(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),St.value)),s.push(Ne("div",{ref:"backdrop",class:mt.value,style:ht.value,"aria-hidden":"true",onClick:S},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ct.value)));const h=w.value===!0&&t.mini!==void 0,L=[q("div",X(R({},a),{key:""+h,class:[bt.value,a.class]}),h===!0?t.mini():Pe(t.default))];return e.elevated===!0&&b.value===!0&&L.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(Ne("aside",{ref:"content",class:wt.value,style:pt.value},L,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>qt.value)),q("div",{class:"q-drawer-container"},s)}}}),Fo=O({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=W(),a=at($e,()=>{console.error("QPageContainer needs to be child of QLayout")});lt(Ft,!0);const o=v(()=>{const i={};return a.header.space===!0&&(i.paddingTop=`${a.header.size}px`),a.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(i.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),i});return()=>q("div",{class:"q-page-container",style:o.value},Pe(t.default))}}),Wo=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=W(),o=T(null),i=T(a.screen.height),l=T(e.container===!0?0:a.screen.width),c=T({position:0,direction:"down",inflectionPoint:0}),u=T(0),r=T(rt.value===!0?0:ye()),g=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=v(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),p=v(()=>r.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),f=v(()=>r.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function w(d){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};c.value=S,e.onScroll!==void 0&&n("scroll",S)}}function C(d){const{height:S,width:M}=d;let H=!1;i.value!==S&&(H=!0,i.value=S,e.onScrollHeight!==void 0&&n("scroll-height",S),P()),l.value!==M&&(H=!0,l.value=M),H===!0&&e.onResize!==void 0&&n("resize",d)}function b({height:d}){u.value!==d&&(u.value=d,P())}function P(){if(e.container===!0){const d=i.value>u.value?ye():0;r.value!==d&&(r.value=d)}}let m;const k={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:o,height:i,containerHeight:u,scrollbarWidth:r,totalWidth:v(()=>l.value+r.value),rows:v(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:c,animate(){m!==void 0?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),m=void 0},155)},update(d,S,M){k[d][S]=M}};if(lt($e,k),ye()>0){let M=function(){d=null,S.classList.remove("hide-scrollbar")},H=function(){if(d===null){if(S.scrollHeight>a.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(M,300)},_=function(z){d!==null&&z==="remove"&&(clearTimeout(d),M()),window[`${z}EventListener`]("resize",H)},d=null;const S=document.body;x(()=>e.container!==!0?"add":"remove",_),e.container!==!0&&_("add"),Wt(()=>{_("remove")})}return()=>{const d=Kt(t.default,[q(to,{onScroll:w}),q(Ze,{onResize:C})]),S=q("div",{class:g.value,style:y.value,ref:e.container===!0?void 0:o},d);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:o},[q(Ze,{onResize:b}),q("div",{class:"absolute-full",style:p.value},[q("div",{class:"scroll",style:f.value},[S])])]):S}}});export{no as A,Ze as Q,Se as T,$o as a,ie as b,Me as c,Re as d,to as e,ko as f,Wo as g,Bo as h,Mo as i,Oo as j,Ro as k,_o as l,Ao as m,Fo as n,so as o,Eo as p,zo as q,Po as r,To as s,ye as t,Lo as u,fo as v,vo as w,bo as x,mo as y,Jt as z};