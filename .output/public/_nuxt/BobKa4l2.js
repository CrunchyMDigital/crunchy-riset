import{u as C,d as O,r as R,a as P,o as E,b as I,c as T,e as U,f as V,h as q,g as A,p as D,n as F,i as y,j as L,k as z,l as H,m as $,q as M,w as G,s as Q,t as W,v as J,x as w,y as S,z as K,A as X,B as Y,C as Z,D as ee}from"./7OCU8Z49.js";import{_ as te,u as ae}from"./CVXs9pLw.js";async function B(t,a=C()){const{path:l,matched:g}=a.resolve(t);if(!g.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const e=a._preloadPromises=a._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>B(t,a));a._routePreloaded.add(l);const n=g.map(u=>{var r;return(r=u.components)==null?void 0:r.default}).filter(u=>typeof u=="function");for(const u of n){const r=Promise.resolve(u()).catch(()=>{}).finally(()=>e.splice(e.indexOf(r)));e.push(r)}await Promise.all(e)}const ne=(...t)=>t.find(a=>a!==void 0);function re(t){const a=t.componentName||"NuxtLink";function l(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return j(e,t.trailingSlash);const u="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:j(u,t.trailingSlash)}}function g(e){const n=C(),u=M(),r=y(()=>!!e.target&&e.target!=="_self"),d=y(()=>{const h=e.to||e.href||"";return typeof h=="string"&&L(h,{acceptRelative:!0})}),x=A("RouterLink"),m=x&&typeof x!="string"?x.useLink:void 0,v=y(()=>{if(e.external)return!0;const h=e.to||e.href||"";return typeof h=="object"?!1:h===""||d.value}),i=y(()=>{const h=e.to||e.href||"";return v.value?h:l(h,n.resolve)}),c=v.value||m==null?void 0:m({...e,to:i}),b=y(()=>{var h;if(!i.value||d.value)return i.value;if(v.value){const _=typeof i.value=="object"&&"path"in i.value?z(i.value):i.value,k=typeof _=="object"?n.resolve(_).href:_;return l(k,n.resolve)}return typeof i.value=="object"?((h=n.resolve(i.value))==null?void 0:h.href)??null:l(H(u.app.baseURL,i.value),n.resolve)});return{to:i,hasTarget:r,isAbsoluteUrl:d,isExternal:v,href:b,isActive:(c==null?void 0:c.isActive)??y(()=>i.value===n.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??y(()=>i.value===n.currentRoute.value.path),route:(c==null?void 0:c.route)??y(()=>n.resolve(i.value)),async navigate(){await $(b.value,{replace:e.replace,external:v.value||r.value})}}}return O({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:n}){const u=C(),{to:r,href:d,navigate:x,isExternal:m,hasTarget:v,isAbsoluteUrl:i}=g(e),c=R(!1),b=R(null),h=o=>{var f;b.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};function _(o){var f,s;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===o:((f=e.prefetchOn)==null?void 0:f[o])??((s=t.prefetchOn)==null?void 0:s[o]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!se()}async function k(o=P()){if(c.value)return;c.value=!0;const f=typeof r.value=="string"?r.value:m.value?z(r.value):u.resolve(r.value).fullPath;await Promise.all([o.hooks.callHook("link:prefetch",f).catch(()=>{}),!m.value&&!v.value&&B(r.value,u).catch(()=>{})])}if(_("visibility")){const o=P();let f,s=null;E(()=>{const p=ie();I(()=>{f=T(()=>{var N;(N=b==null?void 0:b.value)!=null&&N.tagName&&(s=p.observe(b.value,async()=>{s==null||s(),s=null,await k(o)}))})})}),U(()=>{f&&V(f),s==null||s(),s=null})}return()=>{var s;if(!m.value&&!v.value){const p={ref:h,to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom,onPointerenter:_("interaction")?k.bind(null,void 0):void 0,onFocus:_("interaction")?k.bind(null,void 0):void 0};return e.custom||(c.value&&(p.class=e.prefetchedClass||t.prefetchedClass),p.rel=e.rel||void 0),q(A("RouterLink"),p,n.default)}const o=e.target||null,f=ne(e.noRel?"":e.rel,t.externalRelAttribute,i.value||v.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:d.value,navigate:x,get route(){if(!d.value)return;const p=new URL(d.value,window.location.href);return{path:p.pathname,fullPath:p.pathname,get query(){return D(p.search)},hash:p.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d.value}},rel:f,target:o,isExternal:m.value||v.value,isActive:!1,isExactActive:!1}):null:q("a",{ref:b,href:d.value||null,rel:f,target:o},(s=n.default)==null?void 0:s.call(n))}}})}const oe=re(F);function j(t,a){const l=a==="append"?G:Q;return L(t)&&!t.startsWith("http")?t:l(t,!0)}function ie(){const t=P();if(t._observer)return t._observer;let a=null;const l=new Map,g=(n,u)=>(a||(a=new IntersectionObserver(r=>{for(const d of r){const x=l.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&x&&x()}})),l.set(n,u),a.observe(n),()=>{l.delete(n),a.unobserve(n),l.size===0&&(a.disconnect(),a=null)});return t._observer={observe:g}}function se(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const le=t=>(Z("data-v-8cc3a643"),t=t(),ee(),t),ue={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ce=le(()=>w("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),fe={class:"max-w-520px text-center z-20"},de=["textContent"],he=["textContent"],ve={class:"w-full flex items-center justify-center"},pe={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return ae({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(l,g)=>{const e=oe;return W(),J("div",ue,[ce,w("div",fe,[w("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:S(t.statusCode)},null,8,de),w("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:S(t.description)},null,8,he),w("div",ve,[K(e,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:X(()=>[Y(S(t.backHome),1)]),_:1})])])])}}},be=te(pe,[["__scopeId","data-v-8cc3a643"]]);export{be as default};
