var I=Object.defineProperty,E=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var B=(e,i,a)=>i in e?I(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,m=(e,i)=>{for(var a in i||(i={}))P.call(i,a)&&B(e,a,i[a]);if(w)for(var a of w(i))M.call(i,a)&&B(e,a,i[a]);return e},S=(e,i)=>E(e,L(i));import{c as d,r as u,w as O,f as V,h as r,u as A,_ as D,A as q,B as G,C as k,d as U,a1 as W,a2 as J,F as K,G as N,a3 as X}from"./index.bcf7515b.js";import{c as Y,h as Z,Q as p}from"./QSpinner.ec669266.js";import{Q as ee}from"./QPage.95350f17.js";const te={ratio:[String,Number]};function ie(e,i){return d(()=>{const a=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const ae=16/9;var ne=Y({name:"QImg",props:S(m({},te),{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ae},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup(e,{slots:i,emit:a}){const v=u(e.initialRatio),h=ie(e,v);let l;const n=[u(null),u(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],s=u(0),c=u(!1),g=u(!1),T=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=d(()=>({width:e.width,height:e.height})),$=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),x=d(()=>S(m({},e.imgStyle),{objectFit:e.fit,objectPosition:e.position}));O(()=>_(),y);function _(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function y(t){if(clearTimeout(l),g.value=!1,t===null){c.value=!1,n[0].value=null,n[1].value=null;return}c.value=!0,n[s.value].value=t}function Q({target:t}){l!==null&&(clearTimeout(l),v.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,b(t,1))}function b(t,o){l===null||o===1e3||(t.complete===!0?R(t):l=setTimeout(()=>{b(t,o+1)},50))}function R(t){l!==null&&(s.value=s.value===1?0:1,n[s.value].value=null,c.value=!1,g.value=!1,a("load",t.currentSrc||t.src))}function j(t){clearTimeout(l),c.value=!1,g.value=!0,n[0].value=null,n[1].value=null,a("error",t)}function F(t,o){return r("div",{class:"q-img__container absolute-full",key:t},o)}function C(t){const o=n[t].value,f=m({key:"img_"+t,class:$.value,style:x.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable},o);return s.value===t?(f.class+=" q-img__image--waiting",Object.assign(f,{onLoad:Q,onError:j})):f.class+=" q-img__image--loaded",F("img"+t,r("img",f))}function H(){return c.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Z(i[g.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[r(p,{color:e.spinnerColor,size:e.spinnerSize})])}return y(_()),V(()=>{clearTimeout(l),l=null}),()=>{const t=[];return h.value!==null&&t.push(r("div",{key:"filler",style:h.value})),g.value!==!0&&(n[0].value!==null&&t.push(C(0)),n[1].value!==null&&t.push(C(1))),t.push(r(A,{name:"q-transition--fade"},H)),r("div",{class:T.value,style:z.value,role:"img","aria-label":e.alt},t)}}}),le="/assets/bg.423cdf1e.jpg";const re={name:"HomePage"},oe=N("h1",{class:"text-white"},"Basic",-1);function ue(e,i,a,v,h,l){return q(),G(ee,{class:"flex flex-center"},{default:k(()=>[U(ne,{src:le,style:{margin:"50px"}},{default:k(()=>[oe]),_:1}),(q(),W(K,null,J(50,n=>N("div",{key:n},X(n),1)),64))]),_:1})}var fe=D(re,[["render",ue]]);export{fe as default};