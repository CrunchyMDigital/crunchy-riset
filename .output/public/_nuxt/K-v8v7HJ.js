import{E as u,r as c,F as f,G as v,H as d,e as l,I as i,J as h,K as p}from"./C1yy7yOu.js";function I(t,a={}){const e=a.head||u();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:v(a)});const r=t.push(n.value,e);return d(n,o=>{r.patch(o)}),p()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}const U=(t,a)=>{const e=t.__vccOpts||t;for(const[s,n]of a)e[s]=n;return e};export{U as _,I as u};
