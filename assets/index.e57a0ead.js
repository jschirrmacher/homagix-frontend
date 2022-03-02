var B=Object.defineProperty,V=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var w=(t,e,s)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,E=(t,e)=>{for(var s in e||(e={}))U.call(e,s)&&w(t,s,e[s]);if(L)for(var s of L(e))q.call(e,s)&&w(t,s,e[s]);return t},v=(t,e)=>V(t,G(e));import{c as M,u as z,d as S,a as y,r as N,o as u,b as l,e as _,f as c,g as $,t as m,h as O,i as C,F as h,j as x,k as b,p as K,l as Z,m as J,w as W,n as Q,q as X,s as Y}from"./vendor.f5519ebe.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};ee();var A={SET_ERROR(t,e){t.error=e},LOADED_DISHES(t,e){t.dishes=e.dishes},LOADED_INGREDIENTS(t,e){t.ingredients=e.ingredients}};const T=localStorage.getItem("basePath")||"https://homagix-server.dilab.co";function te(t){return T+"/images/"+t}async function j(t,e,s={},o={}){var a;["post","put","patch"].includes(t.toLowerCase())&&Object.keys(s).length?(o.data=JSON.stringify(s),o.headers=v(E({},o.headers||{}),{["Content Type"]:"application/json"})):Object.keys(s).length&&(e+=`?${new URLSearchParams(s).toString()}`),o.method=t;const n=await fetch(T+e,o),r=((a=n.headers.get("content-type"))==null?void 0:a.match(/json/))?await n.json():await n.text();if(!n.ok){const i={message:`${t} ${e} -> ${n.status}`,details:{request:`${t} ${e}`,status:n.status,content:r}};throw console.error(i),i}return r}async function ne(){return await j("get","/dishes")}async function se(){return await j("get","/ingredients")}function I(t,e){return async(s,...o)=>{try{await t(s,...o)}catch(n){s.dispatch(g.ERROR_OCCURED,{message:e,details:n})}}}var H={ERROR_OCCURED(t,e){t.commit(f.SET_ERROR,e)},CLEAR_ERROR(t){t.commit(f.SET_ERROR,null)},LOAD_DISHES:I(async t=>t.commit(f.LOADED_DISHES,await ne()),"Rezepte konnten nicht geladen werden"),LOAD_INGREDIENTS:I(async t=>t.commit(f.LOADED_INGREDIENTS,await se()),"Zutaten konnten nicht geladen werden")},re={};const oe={error:null,dishes:[],ingredients:[]},ce=M({strict:{}.NODE_ENV!=="production",state:oe,mutations:A,actions:H,getters:re});function F(t){return Object.assign({},...Object.keys(t).map(e=>({[e]:e})))}const f=F(A),g=F(H);function D(){return z()}const ae=c("div",{class:"title"},[c("h1",null,"Homagix")],-1),ie={key:0,class:"error-container"},ue={class:"content"},le=S({setup(t){const e=D(),s=y(()=>e==null?void 0:e.state.error);e.dispatch(g.LOAD_DISHES),e.dispatch(g.LOAD_INGREDIENTS);function o(){e.dispatch(g.CLEAR_ERROR)}return(n,r)=>{const a=N("router-view");return u(),l(h,null,[ae,_(s)?(u(),l("div",ie,[c("span",{onClick:o},"\xD7"),$(" "+m(_(s).message),1)])):O("",!0),c("div",ue,[C(a)])],64)}}});var k=(t,e)=>{const s=t.__vccOpts||t;for(const[o,n]of e)s[o]=n;return s};const de=t=>(K("data-v-4c630fe6"),t=t(),Z(),t),_e=de(()=>c("h2",null,"Rezepte",-1)),pe={id:"recipes-list"},me=["onClick"],he=S({setup(t){const e=D();y(()=>e.state.dishes);const s=x(),o=y(()=>{var a;const r=(a=e.state.dishes)==null?void 0:a.filter(i=>!i.alwaysOnList);return r==null?void 0:r.sort((i,d)=>i.name.localeCompare(d.name))});function n(r){s.push({name:"recipe",params:{id:r}})}return(r,a)=>(u(),l(h,null,[_e,c("ul",pe,[(u(!0),l(h,null,b(_(o),i=>(u(),l("li",{key:i.id,onClick:()=>n(i.id)},m(i.name),9,me))),128))])],64))}});var fe=k(he,[["__scopeId","data-v-4c630fe6"]]);const ge={key:0},ye=["src"],Re={class:"wrapper",id:"ingredient-list"},Ee={class:"number"},ve=S({setup(t){const e=D(),s=J(),o=x(),n=y(()=>e.state.dishes.find(d=>d.id===s.params.id));function r(){var d;return(d=n.value)==null?void 0:d.items.map(R=>{var p;return v(E({},(p=e.state.ingredients)==null?void 0:p.find(P=>P.id===R.id)),{amount:R.amount})})}function a(){o.push({name:"recipes"})}function i(d){return te(d.image)}return(d,R)=>_(n)?(u(),l("section",ge,[c("h2",null,m(_(n).name),1),_(n).image?(u(),l("img",{key:0,src:i(_(n))},null,8,ye)):O("",!0),c("div",Re,[(u(!0),l(h,null,b(r(),p=>(u(),l(h,{key:p.id},[c("span",Ee,m(p.amount),1),c("span",null,m(p.unit),1),c("span",null,m(p.name),1)],64))),128))]),c("p",null,m(_(n).recipe),1),c("button",{onClick:a},"Zur\xFCck")])):O("",!0)}});var Oe=k(ve,[["__scopeId","data-v-acf19428"]]);const Se={},De=c("h2",null,"Hast du dich verirrt?",-1),ke=c("p",null," Die angeforderte Seite existiert leider nicht. ",-1),Le=$("Bring mich in Sicherheit!");function we(t,e){const s=N("router-link");return u(),l(h,null,[De,ke,C(s,{to:"/"},{default:W(()=>[Le]),_:1})],64)}var Ie=k(Se,[["render",we]]),Ne=Q({history:X("/homagix-frontend/"),routes:[{name:"home",path:"/",redirect:"/recipes"},{name:"recipes",path:"/recipes",component:fe},{name:"recipe",path:"/recipes/:id",component:Oe},{path:"/:pathMatch(.*)*",component:Ie}]});Y(le).use(ce).use(Ne).mount("#app");
