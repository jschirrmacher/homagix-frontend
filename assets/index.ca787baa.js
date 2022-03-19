var K=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var A=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))X.call(e,n)&&A(t,n,e[n]);if(U)for(var n of U(e))Y.call(e,n)&&A(t,n,e[n]);return t},z=(t,e)=>J(t,Q(e));var B=(t,e,n)=>(A(t,typeof e!="symbol"?e+"":e,n),n);import{o as ee,a as u,c as _,r as te,d as E,u as S,b as F,e as o,w as ne,v as se,f as l,i as oe,g as h,h as m,F as v,j as p,k as $,l as re,m as ie,n as x,p as N,q as ae,t as k,s as L,x as ce,y as H,z as ue,A as le,B as _e,C as de,D as pe,E as he,O as me,G as fe}from"./vendor.0e239747.js";const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};ge();function ve(t=7200){return e=>{document.cookie=`token=${e};path=/homagix-frontend/;max-age=${e?t:-1}`}}function ye(t){return e=>t(e?`Bearer ${e}`:void 0)}function ke(t){return e=>{if(e){const{sub:n,firstName:r,accessCode:s}=ee(e);t.commit(g.SET_USER,{id:n,name:r,accessCode:s})}else t.commit(g.SET_USER,null)}}var D=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const Ee={};function be(t,e){return u(),_("button",null,[te(t.$slots,"default",{},void 0,!0)])}var R=D(Ee,[["render",be],["__scopeId","data-v-4e04e4f1"]]);const $e=o("h2",null,"Neu registrieren",-1),Re=o("p",null," Hier kannst du deinem Zugang einen Namen (z.B. deinen Vornamen oder auch einen Phantasienamen) geben. Wir sprechen dich dann k\xFCnftig damit an. ",-1),Se=p(" Name "),Ce={class:"button-list"},we=p("Registrieren"),xe=p("Abbrechen"),De=E({setup(t){const e=S(),n=C();let r=F("");async function s(){await n.dispatch(w.REGISTER_USER,r.value),e.push("/my")}function i(){e.back()}return(c,d)=>(u(),_(v,null,[$e,Re,o("label",null,[Se,ne(o("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=a=>oe(r)?r.value=a:r=a)},null,512),[[se,l(r)]])]),o("div",Ce,[h(R,{id:"register-button",onClick:s},{default:m(()=>[we]),_:1}),h(R,{id:"cancel-button",onClick:i},{default:m(()=>[xe]),_:1})])],64))}});const Oe=o("h2",null,"Willkommen!",-1),Ie=o("p",null," Du bist bereits registriert? Um deine Daten zu sch\xFCtzen, musst du den Bookmark verwenden, den du nach der Registrierung erhalten hast. ",-1),Le=p("Du willst dich neu registrieren? Dann geht's "),Ae=p("hier entlang"),Ne={class:"button-list"},Te=p("Abbrechen"),Ue=E({setup(t){const e=S();return(n,r)=>{const s=$("router-link");return u(),_(v,null,[Oe,Ie,o("p",null,[Le,h(s,{to:"/register"},{default:m(()=>[Ae]),_:1})]),o("div",Ne,[h(R,{onClick:l(e).back},{default:m(()=>[Te]),_:1},8,["onClick"])])],64)}}});const ze=o("h2",null,"Ciao!",-1),Be=o("p",null,"Wir hoffen, Dich bald wiederzusehen!",-1),Pe={class:"button-list"},Fe=p("Zu den Rezepten"),He=E({setup(t){const e=S();return(n,r)=>(u(),_(v,null,[ze,Be,o("div",Pe,[h(R,{id:"recipes-button",onClick:r[0]||(r[0]=s=>l(e).push("/recipes"))},{default:m(()=>[Fe]),_:1})])],64))}}),je=o("h2",null,"Dein Zugang",-1),Me=o("p",null," Speichere diese Seite als Bookmark oder Favorit, dann kommst du einfach wieder hierher zur\xFCck, ohne dich einloggen zu m\xFCssen. ",-1),Ge=o("p",null,"Da jede:r mit dem Bookmark hierher kommt, solltest du diesen Link nicht an andere weiter geben.",-1),Ve={class:"button-list"},Ze=p("Zu den Rezepten"),We=E({setup(t){const e=S();function n(){e.push("/recipes")}return(r,s)=>(u(),_(v,null,[je,Me,Ge,o("div",Ve,[h(R,{id:"recipes-button",onClick:n},{default:m(()=>[Ze]),_:1})])],64))}}),j=localStorage.getItem("basePath")||"https://homagix-server.dilab.co";class M extends Error{constructor(e,n){super(e);B(this,"details");this.details=n}}class G extends M{constructor(){super("Missing authentication token",{status:401})}}function qe(t){return j+"/images/"+t}const T={"Content-Type":"application/json"};function Ke(t){t?T.Authorization=t:delete T.Authorization}async function O(t,e,n={},r={}){var c;r.headers=b(b({},T),r.headers||{}),["post","put","patch"].includes(t.toLowerCase())&&Object.keys(n).length?r.body=JSON.stringify(n):Object.keys(n).length&&(e+=`?${new URLSearchParams(n).toString()}`),r.method=t;const s=await fetch(j+e,r),i=(c=s.headers.get("content-type"))!=null&&c.match(/json/)?await s.json():await s.text();if(!s.ok){if(s.status===401)throw new G;const d=new M(`${t} ${e} -> ${s.status}`,{status:s.status,content:i});throw console.error(d),d}return i}async function Je(t){return await O("post","/accounts",{firstName:t})}async function Qe(t,e){return await O("get","/accounts/"+t+"/access-codes/"+e)}async function Xe(){return await O("delete","/session")}function Ye(t,e=[]){function n(){const a=document.cookie.match(/token=([\w.]+)/);e.forEach(f=>f(a?a[1]:void 0))}function r(){e.forEach(a=>a())}async function s(a){try{const{token:f}=await Qe(a.params.id,a.params.code);if(f)return e.forEach(y=>y(f)),!0}catch(f){console.error(f)}return"/login"}function i(){const a=t();return a?"/user/"+a.id+"/"+a.accessCode:"/login"}const c=[{path:"/register",component:De},{path:"/login",component:Ue},{path:"/logout",component:He,beforeEnter:r},{path:"/user/:id/:code",component:We,beforeEnter:s},{path:"/my",redirect:i}];function d(){t()||n()}return{routes:c,beforeEach:d}}const et={user:null},tt={SET_USER(t,e){t.user=e}};var V=b({SET_ERROR(t,e){t.error=e},LOADED_DISHES(t,e){t.dishes=e.dishes},LOADED_INGREDIENTS(t,e){t.ingredients=e.ingredients}},tt);async function nt(){return await O("get","/dishes")}async function st(){return await O("get","/ingredients")}function I(t,e){return async(n,...r)=>{try{await t(n,...r)}catch(s){s instanceof G?(n.commit(g.SET_USER,null),n.commit(g.SET_ERROR,{message:"Bitte melde dich zun\xE4chst an!",link:"/login"})):n.dispatch(w.ERROR_OCCURED,{message:e,details:s})}}}var Z={ERROR_OCCURED(t,e){t.commit(g.SET_ERROR,e)},CLEAR_ERROR(t){t.commit(g.SET_ERROR,null)},LOAD_DISHES:I(async t=>t.commit(g.LOADED_DISHES,await nt()),"Rezepte konnten nicht geladen werden"),LOAD_INGREDIENTS:I(async t=>t.commit(g.LOADED_INGREDIENTS,await st()),"Zutaten konnten nicht geladen werden"),REGISTER_USER:I(async(t,e)=>t.commit(g.SET_USER,await Je(e)),"Die Registrierung war leider nicht erfolgreich. Bitte noch einmal probieren!"),LOGOUT:I(async t=>{await Xe(),t.commit(g.SET_USER,null)},"Logout fehlgeschlagen")},ot={};const rt=b({error:null,dishes:[],ingredients:[]},et),P=re({strict:{}.NODE_ENV!=="production",state:rt,mutations:V,actions:Z,getters:ot});function W(t){return Object.assign({},...Object.keys(t).map(e=>({[e]:e})))}const g=W(V),w=W(Z);function C(){return ie()}const it={class:"navbar-start"},at=p(" Recipes "),ct={class:"navbar-end"},ut={class:"navbar-item"},lt={class:"buttons"},_t=p(" Registrieren "),dt=p("Abmelden"),pt=E({props:{open:null},setup(t){const e=t,n=C(),r=x(()=>"navbar-menu"+(e.open?" is-active":""));return(s,i)=>{const c=$("router-link");return u(),_("div",{id:"navbar",class:ae(l(r))},[o("div",it,[h(c,{class:"navbar-item",to:"/recipes"},{default:m(()=>[at]),_:1})]),o("div",ct,[o("div",ut,[o("div",lt,[l(n).state.user?(u(),N(c,{key:1,to:"/logout",class:"button is-light"},{default:m(()=>[dt]),_:1})):(u(),N(c,{key:0,to:"/register",class:"button is-primary"},{default:m(()=>[_t]),_:1}))])])])],2)}}});var ht=D(pt,[["__scopeId","data-v-40eac8f2"]]);const mt={key:0,class:"error-container"},ft={key:1},gt=E({setup(t){const e=C(),n=x(()=>e.state.error);function r(){e.dispatch(w.CLEAR_ERROR)}return(s,i)=>{const c=$("router-link");return l(n)?(u(),_("div",mt,[o("span",{onClick:r},"\xD7"),l(n).link?(u(),N(c,{key:0,to:l(n).link},{default:m(()=>[p(k(l(n).message),1)]),_:1},8,["to"])):(u(),_("span",ft,k(l(n).message),1))])):L("",!0)}}});const vt={class:"navbar-brand"},yt=o("h1",{class:"title"},"Homagix",-1),kt={key:0,class:"username"},Et=["onClick"],bt=o("span",{"aria-hidden":"true"},null,-1),$t=o("span",{"aria-hidden":"true"},null,-1),Rt=o("span",{"aria-hidden":"true"},null,-1),St=[bt,$t,Rt],Ct=E({setup(t){const e=C();x(()=>e==null?void 0:e.state.error);const n=F(!1);e.dispatch(w.LOAD_DISHES),e.dispatch(w.LOAD_INGREDIENTS);function r(i){i.target&&(n.value=!n.value)}function s(){n.value=!1}return(i,c)=>{const d=$("router-link"),a=$("router-view");return u(),_(v,null,[o("nav",{class:"navbar is-warning",role:"navigation","aria-label":"main navigation",onClick:s},[o("div",vt,[h(d,{to:"/",class:"navbar-item"},{default:m(()=>[yt]),_:1}),l(e).state.user?(u(),_("div",kt,k(l(e).state.user.name),1)):L("",!0),o("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false",onClick:ce(r,["stop"])},St,8,Et)]),h(ht,{open:n.value},null,8,["open"])]),h(gt),o("section",{class:"section",onClick:s},[h(a)])],64)}}});const wt=t=>(ue("data-v-71246241"),t=t(),le(),t),xt=wt(()=>o("div",{class:"title is-4"},"Rezepte",-1)),Dt={id:"recipes-list"},Ot=["onClick"],It=E({setup(t){const e=C(),n=S(),r=x(()=>{var c;const i=(c=e.state.dishes)==null?void 0:c.filter(d=>!d.alwaysOnList);return i==null?void 0:i.sort((d,a)=>d.name.localeCompare(a.name))});function s(i){n.push({name:"recipe",params:{id:i}})}return(i,c)=>{const d=$("o-icon");return u(),_(v,null,[xt,o("ul",Dt,[(u(!0),_(v,null,H(l(r),a=>(u(),_("li",{key:a.id,onClick:()=>s(a.id)},[h(d,{icon:"utensils"}),p(" "+k(a.name),1)],8,Ot))),128))])],64)}}});var Lt=D(It,[["__scopeId","data-v-71246241"]]);const At={key:0},Nt={class:"title is-4"},Tt=["src"],Ut={class:"wrapper",id:"ingredient-list"},zt={class:"number"},Bt=p("Zur\xFCck"),Pt=E({setup(t){const e=C(),n=_e(),r=S(),s=x(()=>e.state.dishes.find(a=>a.id===n.params.id));function i(){var a;return(a=s.value)==null?void 0:a.items.map(f=>{var y;return z(b({},(y=e.state.ingredients)==null?void 0:y.find(q=>q.id===f.id)),{amount:f.amount})})}function c(){r.push({name:"recipes"})}function d(a){return qe(a.image)}return(a,f)=>l(s)?(u(),_("section",At,[o("div",Nt,k(l(s).name),1),l(s).image?(u(),_("img",{key:0,src:d(l(s))},null,8,Tt)):L("",!0),o("div",Ut,[(u(!0),_(v,null,H(i(),y=>(u(),_(v,{key:y.id},[o("span",zt,k(y.amount),1),o("span",null,k(y.unit),1),o("span",null,k(y.name),1)],64))),128))]),o("p",null,k(l(s).recipe),1),h(R,{onClick:c},{default:m(()=>[Bt]),_:1})])):L("",!0)}});var Ft=D(Pt,[["__scopeId","data-v-43dbb0a0"]]);const Ht={},jt=o("div",{class:"title is-4"},"Hast du dich verirrt?",-1),Mt=o("p",null,"Die angeforderte Seite existiert leider nicht.",-1),Gt=p("Bring mich in Sicherheit!");function Vt(t,e){const n=$("router-link");return u(),_(v,null,[jt,Mt,h(n,{to:"/"},{default:m(()=>[Gt]),_:1})],64)}var Zt=D(Ht,[["render",Vt]]),Wt=t=>{const e=Ye(()=>t.state.user,[ve(7200),ye(Ke),ke(t)]),n=de({history:pe("/homagix-frontend/"),routes:[{name:"home",path:"/",redirect:"/recipes"},{name:"recipes",path:"/recipes",component:Lt},{name:"recipe",path:"/recipes/:id",component:Ft},...e.routes,{path:"/:pathMatch(.*)*",component:Zt}]});return n.beforeEach(e.beforeEach),n};he(Ct).use(P).use(Wt(P)).use(me,b({customIconPacks:{fas:{sizes:{default:"",small:"fa-sm",medium:"fa-lg",large:"fa-2x"}}},iconPack:"fas"},fe.exports.bulmaConfig)).mount("#app");
