import{au as c,a as s,av as l}from"./DKo1xP24.js";function u(t){if(t===null||typeof t!="object")return!1;const o=Object.getPrototypeOf(t);return o!==null&&o!==Object.prototype&&Object.getPrototypeOf(o)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function p(t,o,i=".",e){if(!u(o))return p(t,{},i,e);const r=Object.assign({},o);for(const n in t){if(n==="__proto__"||n==="constructor")continue;const f=t[n];f!=null&&(e&&e(r,n,f,i)||(Array.isArray(f)&&Array.isArray(r[n])?r[n]=[...f,...r[n]]:u(f)&&u(r[n])?r[n]=p(f,r[n],(i?`${i}.`:"")+n.toString(),e):r[n]=f))}return r}function a(t){return(...o)=>o.reduce((i,e)=>p(i,e,"",t),{})}const g=a((t,o,i)=>{if(t[o]!==void 0&&typeof i=="function")return t[o]=i(t[o]),!0}),y=c({pocketbase:{url:"http://localhost:8090",prod:"https://bgs-studio-db.crunchymediadigital.id"}}),d={nuxt:{}},_=g(y,d);function A(){const t=s();return t._appConfig||(t._appConfig=l(_)),t._appConfig}export{A as u};
