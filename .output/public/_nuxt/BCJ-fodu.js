import{U as Ke,M as m,r as f,F as Ye,H as A,e as We,I as qe,J as Qe,K as Ge,V as le,W as re,t as S,v as C,X as _e,Y as T,Z as be,_ as X,$ as ye,x as v,y as j,a0 as Je,a1 as Xe,d as Ze,u as et,L as tt,i as pe,a2 as ae,o as at,z as l,A as p,N as w,m as nt,a3 as ot,a4 as lt,B as G,a5 as rt,a6 as it,P as st,a7 as ct,a8 as dt,a9 as ut,aa as pt,ab as mt,O as ft,ac as ht,ad as vt,ae as gt}from"./BO6p3Pst.js";import{u as _t}from"./Hd0fJG5U.js";import{u as bt}from"./C2scLdHq.js";let yt;function kt(){return yt}function xt(t){return typeof t=="function"?t():m(t)}function oe(t){if(t instanceof Promise)return t;const r=xt(t);if(!t||!r)return r;if(Array.isArray(r))return r.map(e=>oe(e));if(typeof r=="object"){const e={};for(const d in r)if(Object.prototype.hasOwnProperty.call(r,d)){if(d==="titleTemplate"||d[0]==="o"&&d[1]==="n"){e[d]=m(r[d]);continue}e[d]=oe(r[d])}return e}return r}const $t="usehead",me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe="__unhead_injection_handler__";function St(){if(fe in me)return me[fe]();const t=Ke($t);return t||kt()}function wt(t,r={}){const e=r.head||St();if(e)return e.ssr?e.push(t,r):It(e,t,r)}function It(t,r,e={}){const d=f(!1),y=f({});Ye(()=>{y.value=d.value?{}:oe(r)});const c=t.push(y.value,e);return A(y,$=>{c.patch($)}),Ge()&&(We(()=>{c.dispose()}),qe(()=>{d.value=!0}),Qe(()=>{d.value=!1})),c}const he=t=>t.toLocaleString("id-ID",{minimumFractionDigits:0,maximumFractionDigits:0,style:"currency",currency:"IDR"}),ve=t=>{try{return new URL(t),!0}catch{return!1}},Ct=t=>{const r=new URL(t);return r.search="",r.toString()},J=t=>t.replace("%",""),L=t=>t.replace("Rp","").replace(".","").replace(" ",""),ge=t=>{const r=new Date(t*1e3),e=new Date,d=e.getFullYear()-r.getFullYear(),y=e.getMonth()-r.getMonth();return d*12+y},Tt=t=>!isNaN(parseFloat(t))&&isFinite(t);var Dt=function(r){var e=r.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(e("tag.primary.background"),`;
    color: `).concat(e("tag.primary.color"),`;
    font-size: `).concat(e("tag.font.size"),`;
    font-weight: `).concat(e("tag.font.weight"),`;
    padding: `).concat(e("tag.padding"),`;
    border-radius: `).concat(e("tag.border.radius"),`;
    gap: `).concat(e("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(e("tag.icon.size"),`;
    width: `).concat(e("tag.icon.size"),`;
    height:`).concat(e("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(e("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(e("tag.success.background"),`;
    color: `).concat(e("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(e("tag.info.background"),`;
    color: `).concat(e("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(e("tag.warn.background"),`;
    color: `).concat(e("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(e("tag.danger.background"),`;
    color: `).concat(e("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(e("tag.secondary.background"),`;
    color: `).concat(e("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(e("tag.contrast.background"),`;
    color: `).concat(e("tag.contrast.color"),`;
}
`)},Vt={root:function(r){var e=r.props;return["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Et=le.extend({name:"tag",theme:Dt,classes:Vt}),Nt={name:"BaseTag",extends:re,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Et,provide:function(){return{$pcTag:this,$parentInstance:this}}},ke={name:"Tag",extends:Nt,inheritAttrs:!1};function At(t,r,e,d,y,c){return S(),C("span",T({class:t.cx("root")},t.ptmi("root")),[t.$slots.icon?(S(),_e(be(t.$slots.icon),T({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(S(),C("span",T({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):X("",!0),t.value!=null||t.$slots.default?ye(t.$slots,"default",{key:2},function(){return[v("span",T({class:t.cx("label")},t.ptm("label")),j(t.value),17)]}):X("",!0)],16)}ke.render=At;var Pt=function(r){var e=r.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding: `).concat(e("textarea.padding.y")," ").concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},Rt={root:function(r){var e=r.instance,d=r.props;return["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":d.autoResize,"p-invalid":d.invalid,"p-variant-filled":d.variant?d.variant==="filled":e.$primevue.config.inputStyle==="filled"||e.$primevue.config.inputVariant==="filled","p-textarea-fluid":e.hasFluid}]}},Ut=le.extend({name:"textarea",theme:Pt,classes:Rt}),Mt={name:"BaseTextarea",extends:re,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Ut,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},xe={name:"Textarea",extends:Mt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(r){this.autoResize&&this.resize(),this.$emit("update:modelValue",r.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return Je(this.fluid)?!!this.$pcFluid:this.fluid}}},zt=["value","aria-invalid"];function Ot(t,r,e,d,y,c){return S(),C("textarea",T({class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:r[0]||(r[0]=function(){return c.onInput&&c.onInput.apply(c,arguments)})},t.ptmi("root",c.ptmParams)),null,16,zt)}xe.render=Ot;var Ft=function(r){var e=r.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(e("avatar.width"),`;
    height: `).concat(e("avatar.height"),`;
    font-size: `).concat(e("avatar.font.size"),`;
    background: `).concat(e("avatar.background"),`;
    border-radius: `).concat(e("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(e("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(e("avatar.lg.width"),`;
    height: `).concat(e("avatar.lg.width"),`;
    font-size: `).concat(e("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(e("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(e("avatar.xl.width"),`;
    height: `).concat(e("avatar.xl.width"),`;
    font-size: `).concat(e("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(e("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(e("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(e("avatar.group.border.color"),`;
}
`)},Lt={root:function(r){var e=r.props;return["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},jt=le.extend({name:"avatar",theme:Ft,classes:Lt}),Bt={name:"BaseAvatar",extends:re,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:jt,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},$e={name:"Avatar",extends:Bt,inheritAttrs:!1,emits:["error"],methods:{onError:function(r){this.$emit("error",r)}}},Ht=["aria-labelledby","aria-label"],Kt=["src","alt"];function Yt(t,r,e,d,y,c){return S(),C("div",T({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[ye(t.$slots,"default",{},function(){return[t.label?(S(),C("span",T({key:0,class:t.cx("label")},t.ptm("label")),j(t.label),17)):t.$slots.icon?(S(),_e(be(t.$slots.icon),{key:1,class:Xe(t.cx("icon"))},null,8,["class"])):t.icon?(S(),C("span",T({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(S(),C("img",T({key:3,src:t.image,alt:t.ariaLabel,onError:r[0]||(r[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},t.ptm("image")),null,16,Kt)):X("",!0)]})],16,Ht)}$e.render=Yt;var ne={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};const Wt={class:""},qt={class:"inline-flex items-center justify-center gap-2"},Qt=v("span",{class:"font-bold whitespace-nowrap"},"Edit Cookie",-1),Gt=v("span",{class:"text-surface-500 dark:text-surface-400 block mb-8"},"Update shopee affiliate cookie",-1),Jt={class:"flex items-center gap-4 mb-4 w-full"},Xt={class:"flex flex-col gap-2"},Zt=v("label",{for:"username"},"Minimal Komisi %",-1),ea={class:"flex flex-col gap-2"},ta=v("label",{for:"username"},"Minimal View Perbulan %",-1),aa={class:"flex flex-col gap-2"},na=v("label",{for:"username"},"Max Concurrent",-1),oa=v("div",null,null,-1),la={class:"flex"},ra={class:"flex flex-wrap items-center justify-between gap-2"},ia={class:"text-xl font-bold"},sa={style:{"text-align":"left"}},ca={class:"flex justify-end"},da=v("i",{class:"pi pi-search"},null,-1),ua=["href"],pa=["href"],ma={class:"flex items-center gap-4"},fa=v("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),ha={key:0},ba=Ze({__name:"index",setup(t){et();const r=f({global:{value:null,matchMode:ne.CONTAINS},name:{value:null,matchMode:ne.STARTS_WITH},link:{value:null,matchMode:ne.STARTS_WITH}}),e=f(),d=_t(),y=f(),c=tt(),g=f(),$=f(),P=bt();P.autoCancellation(!1);const D=f(),V=f(),B=f(10),ie=pe(()=>e.value?e.value.split(`
`).filter(n=>ve(n)||typeof parseInt(n)=="number"):[]),H=f([]),Se=ae(),we=()=>{var a;(a=k.value)!=null&&a.length&&Se.require({message:`Hapus ${k.value.length} data?`,header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{var n;for(let o=0;o<((n=k.value)==null?void 0:n.length);o++){const s=k.value[o];g.value=g.value.filter(_=>_.itemId!==s.itemId),c.add({severity:"success",summary:"Confirmed",detail:"Data berhasil dihapus",life:3e3})}},reject:()=>{c.add({severity:"error",summary:"Rejected",detail:"Tidak jadi hapus",life:3e3})}})},Z=()=>{const{userCookie:a,userInfo:n,risetData:o,comMins:s,monthlyMins:_}=d;$.value=a,y.value=n,g.value=o,V.value=_,D.value=s},K=f(),Ie=async()=>{P.authStore.isValid!==!0&&nt("/auth/login")};at(async()=>{await Ie(),Z()}),A(V,()=>{d.$patch({monthlyMins:V.value})}),A(D,()=>{d.$patch({comMins:D.value})}),A(g,()=>{d.$patch({risetData:g.value})}),A($,()=>{d.$patch({userCookie:$.value})}),A(y,()=>{d.$patch({userInfo:y.value})}),A(K,()=>{K.value===100&&c.add({severity:"success",summary:"Selesai",detail:"Task berhasil dijalankan",life:3e3,group:"bc"})}),f(),f([]);const se=async(a,n=!1)=>{try{if(a&&(a.popup==="-"&&a.name===""||n===!0)){const o=await $fetch(`/api/product-info/${a.itemId}`,{method:"post",body:{cookies:$.value}});if(o.data){const s=o.data,_=s.commission_rate.is_capped,u=L(s.commission_rate.commission_cap);a.name=s.batch_item_for_item_card_full.name,a.link=s.product_link,a.shopid=parseInt(String(s.product_link).split("/")[4]);const h=s.commission_rate.app_exist_commission_rate,E=s.commission_rate.app_exist_commission,I=s.commission_rate.shopee_commission_rate,z=s.commission_rate.shopee_commission;a.com_extra=h,a.com_shopee=I;const O=parseInt(J(h)),q=parseInt(J(I)),Q=o.data.commission_rate_detail.default_commission_rate/1e3;a.com_total=Q;const F=_==!0?parseInt(L(E))+parseInt(L(u)):parseInt(L(E))+parseInt(L(z));a.com_net=Number(String(o.data.commission_rate.default_commission).replace("Rp","").replace(".","")),a.stock=s.batch_item_for_item_card_full.stock;const ee=s.batch_item_for_item_card_full.price/1e5;a.sold_total=s.batch_item_for_item_card_full.historical_sold,a.sold=s.batch_item_for_item_card_full.sold,a.isOfficial=s.batch_item_for_item_card_full.is_official_shop;const b=ge(s.batch_item_for_item_card_full.ctime);a.added=b;let M=Math.round(s.batch_item_for_item_card_full.historical_sold/b);a.monthly=isNaN(M)===!0?0:M,a.price=ee,a.popup="-",(F===0||Q<D.value||M<V.value||!isFinite(M))&&H.value.push(a.itemId)}else c.add({severity:"error",summary:"Error",detail:o.msg,life:3e3})}}catch(o){console.error(o)}},Ce=async()=>{let a=0;for(;a<=g.value.length;){const n=[];for(let o=0;o<=B.value&&a<=g.value.length;o++,a++){const s=g.value[a];K.value=Math.round((a+1)*(100/g.value.length)),n.push(se(s,!1).then(_=>{}).catch(_=>{console.log(`error : ${_}`),c.add({severity:"error",summary:"Error",detail:`Produk gagal ${s.itemId}`,life:3e3})}))}await Promise.all(n).then(o=>{c.add({severity:"success",summary:"Yihaaaa",detail:"Task selesai",life:3e3})})}for(let n=0;n<H.value.length;n++){const o=H.value[n];g.value=g.value.filter(s=>s.itemId!==o)}H.value=[]},R=f(),ce=f(),Y=f(),W=f(!1),Te=async()=>{ce.value=await $fetch(`/api/google-suggest?kw=${R.value}`)},de=async()=>{W.value=!0,Y.value=await $fetch("/api/affSearch",{method:"POST",body:{cookies:$.value,kw:R.value}}),e.value="";let a=0;for(let n=0;n<Y.value.length;n++){const o=Y.value[n],s=ge(o.batch_item_for_item_card_full.ctime);let _=Math.round(o.batch_item_for_item_card_full.historical_sold/s);const u=Number(String(o.seller_commission_rate).replace("%","")),h=Number(String(o.default_commission_rate).replace("%","")),E=Number(o.batch_item_for_item_card_full.price.slice(0,-5));let I=isNaN(_)===!0?0:_;const z=h/100*Number(o.batch_item_for_item_card_full.price.slice(0,-5))>=1e4?1e4:h/100*Number(o.batch_item_for_item_card_full.price.slice(0,-5)),O=Number(u)/100*E+z;h>=D.value&&Number.isFinite(_)&&(_>=V.value?(a++,g.value.push({itemId:o.item_id,isOfficial:o.batch_item_for_item_card_full.is_official_shop,shopId:o.batch_item_for_item_card_full.shop_id,name:o.batch_item_for_item_card_full.name,link:o.product_link,com_extra:String(o.seller_commission_rate).replace("%",""),com_shopee:0,com_total:h,com_net:O,price:E,sold:o.batch_item_for_item_card_full.sold,stock:o.batch_item_for_item_card_full.stock,added:s,sold_total:o.batch_item_for_item_card_full.historical_sold,monthly:I,popup:"-"})):s<=2&&(a++,g.value.push({itemId:o.item_id,isOfficial:o.batch_item_for_item_card_full.is_official_shop,shopId:o.batch_item_for_item_card_full.shop_id,name:o.batch_item_for_item_card_full.name,link:o.product_link,com_extra:String(o.seller_commission_rate).replace("%",""),com_shopee:0,com_total:h,com_net:O,price:E,sold:o.batch_item_for_item_card_full.sold,stock:o.batch_item_for_item_card_full.stock,added:s,sold_total:o.batch_item_for_item_card_full.historical_sold,monthly:I,popup:"-"})))}Y.value=null,W.value=!1,a>0?c.add({severity:"success",summary:"Success",detail:`Ditemukan ${a} produk`,life:3e3}):c.add({severity:"error",summary:"Error",detail:`Tidak ada produk dengan kata kunci ${R.value}`,life:3e3})},De=async()=>{for(let a=0;a<ie.value.length;a++){const n=ie.value[a];let o=null,s=null;if(n.includes("contents href"))continue;if(ve(n)){const u=Ct(n);if(u.includes("-i.")){const h=u.split("-i.")[1].split(".");h[0]+h[1],o=h[1],s=h[0]}else if(u.includes("https://shopee.co.id/product/")){const h=u.split("https://shopee.co.id/product/")[1].split("/");h[0]+h[1],o=h[1],s=h[0]}}else Tt(n)&&(o=n,s=111111);g.value.find(u=>u.itemId===o)?console.log(`Skipped item with id ${o}`):g.value.push({itemId:o,shopId:s,name:"",link:"",com_extra:0,com_shopee:0,com_total:0,com_net:0,price:0,sold:0,stock:0,added:0,sold_total:0,monthly:0,popup:"-"})}e.value=""},U=f(!1);f([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]);const Ve=async()=>{P.authStore.clear(),d.$reset(),Z()},Ee=async()=>{const a=await $fetch("/api/getAffiliateUserInfo",{method:"post",body:{cookies:$.value}});a.data&&(c.add({severity:"success",summary:"Berhasil",detail:`Cookie berhasil di masukkan dengan nama ${a.data.name}`,life:3e3}),y.value=a.data)},Ne=ae(),Ae=()=>{Ne.require({message:"Yakin akan mereset data, anda perlu memasukkan cookies lagi",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{d.$patch({risetData:[]}),Z(),c.add({severity:"info",summary:"Confirmed",detail:"Data cookies telah di bersihkan",life:3e3})},reject:()=>{c.add({severity:"error",summary:"Rejected",detail:"Tidak jadi reset",life:3e3})}})},Pe=a=>{let{data:n,newValue:o,field:s}=a;n[s]=o},k=f();f(!1);const N=f(!1),Re=a=>{k.value=a,N.value=!0},Ue=()=>{g.value=g.value.filter(a=>a.itemId!==k.value.itemId),N.value=!1,k.value=null,c.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},ue=f(),Me=()=>{ue.value.exportCSV()},ze=ae(),Oe=async()=>{await Ve(),window.location.reload()},Fe=()=>{ze.require({message:"Yakin akan menghapus hasil?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{g.value=[],c.add({severity:"info",summary:"Confirmed",detail:"Data result berhasil dihapus",life:3e3})},reject:()=>{c.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},Le=async()=>{k.value!==void 0?k.value.map(async a=>{if(a.popup!=="-")try{a.com_extra=J(a.com_extra),a.com_shopee=J(a.com_shopee);const n=a.price;a.price=String(n).replace("Rp ","").replace(".",""),a.last_checked=Date.now();const o=await P.collection("products").getFullList({filter:`itemId="${a.itemId}"`});if(o.length)a.last_checked=new Date,await P.collection("products").update(o[0].id,a),c.add({severity:"success",summary:"OK",detail:`Item ${a.itemId} telah diUpdate`,life:3e3});else return await P.collection("products").create(a);c.add({severity:"success",summary:"OK",detail:`Item ${a.itemId} telah diinput`,life:3e3})}catch(n){console.log(n)}else c.add({severity:"error",summary:"Rejected",detail:`Item ${a.itemId} popup tidak boleh kosong`,life:3e3})}):c.add({severity:"error",summary:"Opps",detail:"Silahan pilh produk terlebih dahulu",life:3e3,group:"bc"})};wt({title:"BGS Riset - Tools Riset Produk Shopee Affiliate"});const je=()=>{const a=new Date,n=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0"),_=String(a.getHours()).padStart(2,"0"),u=String(a.getMinutes()).padStart(2,"0"),h=String(a.getSeconds()).padStart(2,"0");return`${n}${o}${s}_${_}${u}${h}`},Be=pe(()=>"riset-data-"+je());return(a,n)=>{const o=$e,s=xe,_=it,u=st,h=ot,E=ct,I=dt,z=ut,O=pt,q=ke,Q=mt,F=ft,ee=ht,b=vt,M=gt,He=lt;return S(),C("div",Wt,[l(h,{visible:m(U),"onUpdate:visible":n[6]||(n[6]=i=>w(U)?U.value=i:null),modal:"",header:"Edit Profile",style:{width:"25rem"}},{header:p(()=>[v("div",qt,[l(o,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",shape:"circle"}),Qt])]),footer:p(()=>[l(u,{label:"Check",outlined:"",text:"",severity:"success",onClick:Ee,autofocus:""}),l(u,{label:"Cancel",outlined:"",text:"",severity:"danger",onClick:n[4]||(n[4]=i=>U.value=!1),autofocus:""}),l(u,{label:"Save",outlined:"",severity:"info",onClick:n[5]||(n[5]=i=>U.value=!1),autofocus:""})]),default:p(()=>[Gt,v("div",Jt,[l(s,{modelValue:m($),"onUpdate:modelValue":n[0]||(n[0]=i=>w($)?$.value=i:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"])]),v("div",Xt,[Zt,l(_,{modelValue:m(D),"onUpdate:modelValue":n[1]||(n[1]=i=>w(D)?D.value=i:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),v("div",ea,[ta,l(_,{modelValue:m(V),"onUpdate:modelValue":n[2]||(n[2]=i=>w(V)?V.value=i:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),v("div",aa,[na,l(_,{modelValue:m(B),"onUpdate:modelValue":n[3]||(n[3]=i=>w(B)?B.value=i:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])])]),_:1},8,["visible"]),l(He,null,{title:p(()=>[G("Riset Produk")]),content:p(()=>[l(E,null,{start:p(()=>[l(u,{icon:"pi pi-pencil",class:"mr-2",severity:"success",label:"Cookies",onClick:n[7]||(n[7]=i=>U.value=!0)}),l(u,{severity:"warn",label:"Data",icon:"pi pi-times-circle",iconPos:"left",onClick:Ae,class:"mr-2"}),l(u,{severity:"danger",label:"Results",icon:"pi pi-times",iconPos:"left",onClick:Fe,class:"mr-2"}),l(u,{severity:"danger",label:"Logout",icon:"pi-sign-out",iconPos:"left",onClick:Oe})]),center:p(()=>[]),end:p(()=>[]),_:1}),l(I),oa,v("div",la,[l(z,{modelValue:m(R),"onUpdate:modelValue":n[8]||(n[8]=i=>w(R)?R.value=i:null),dropdown:"",suggestions:m(ce),onComplete:Te,class:"mr-3",style:{"min-width":"50rem"},onKeyup:rt(de,["enter"]),fluid:""},null,8,["modelValue","suggestions"]),l(u,{class:"mr-2",severity:"success",label:"Cari Barang",onClick:de,icon:"pi pi-search",loading:m(W),style:{"min-width":"10rem"}},null,8,["loading"])]),l(I),l(s,{modelValue:m(e),"onUpdate:modelValue":n[9]||(n[9]=i=>w(e)?e.value=i:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"]),l(u,{icon:"pi pi-plus",class:"mr-2",severity:"success",label:"Process URL",onClick:De}),l(I),l(O,{value:m(K),showValue:""},null,8,["value"]),l(M,{filters:m(r),"onUpdate:filters":n[12]||(n[12]=i=>w(r)?r.value=i:null),value:m(g),loading:m(W),exportFilename:m(Be),selection:m(k),"onUpdate:selection":n[13]||(n[13]=i=>w(k)?k.value=i:null),ref_key:"dt",ref:ue,editMode:"cell",dataKey:"itemId",globalFilterFields:["name","link"],onCellEditComplete:Pe,sele:"",pt:{table:{style:"min-width: 50rem"},column:{bodycell:({state:i})=>({class:[{"pt-0 pb-0":i.d_editing}]})}}},{header:p(()=>{var i;return[v("div",ra,[v("span",ia,[G("List Produk "),l(q,{value:`Total: ${(i=m(g))==null?void 0:i.length}`,severity:"warn"},null,8,["value"])]),l(u,{icon:"pi pi-refresh",rounded:"",raised:"",onClick:Ce})]),v("div",sa,[l(u,{icon:"pi pi-external-link",label:"Export",onClick:n[10]||(n[10]=x=>Me(x)),class:"mr-2"}),l(u,{icon:"pi pi-external-link",label:"Save DB",onClick:Le,class:"mr-2"}),l(u,{icon:"pi pi-external-link",label:"Delete Selected",onClick:we}),v("div",ca,[l(ee,null,{default:p(()=>[l(Q,null,{default:p(()=>[da]),_:1}),l(F,{modelValue:m(r).global.value,"onUpdate:modelValue":n[11]||(n[11]=x=>m(r).global.value=x),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])])]}),default:p(()=>[l(b,{selectionMode:"multiple",headerStyle:"width: 3rem"}),l(b,{field:"itemId",header:"ITEMID"},{body:p(({data:i})=>[v("a",{href:`https://affiliate.shopee.co.id/offer/product_offer/${i.itemId}`,target:"_blank"},j(i.itemId),9,ua)]),_:1}),l(b,{field:"name",header:"NAME",sortable:"",style:{width:"25%"}}),l(b,{field:"isOfficial",header:"OFFICIAL",sortable:""},{body:p(({data:i})=>[l(q,{value:i.isOfficial?"official":"biasa",severity:i.isOfficial?"warn":"success"},null,8,["value","severity"])]),_:1}),l(b,{field:"com_total",header:"TOTAL COM",sortable:""}),l(b,{field:"com_net",header:"NET COM",sortable:""},{body:p(({data:i})=>[G(j(("formatCurrency"in a?a.formatCurrency:m(he))(i.com_net)),1)]),_:1}),l(b,{field:"price",header:"PRICE",sortable:""},{body:p(({data:i})=>[G(j(("formatCurrency"in a?a.formatCurrency:m(he))(Number(i.price))),1)]),_:1}),l(b,{field:"sold_total",header:"SOLD",sortable:""}),l(b,{field:"stock",header:"STOCK",sortable:""}),l(b,{field:"added",header:"ADDED",sortable:""}),l(b,{field:"monthly",header:"MONTHLY",sortable:""}),l(b,{field:"link",header:"LINK",class:"text-wrap",sortable:"",style:{width:"25%"}},{body:p(({data:i,field:x})=>[l(q,{severity:"warn"},{default:p(()=>[v("a",{href:i.link,target:"_blank",rel:"noopener"},"OPEN",8,pa)]),_:2},1024)]),_:1}),l(b,{field:"popup",header:"POPUP",sortable:""},{body:p(({data:i,field:x})=>[l(F,{modelValue:i[x],"onUpdate:modelValue":te=>i[x]=te,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),editor:p(({data:i,field:x})=>[l(F,{modelValue:i[x],"onUpdate:modelValue":te=>i[x]=te,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(b,{exportable:!1,style:{}},{body:p(({data:i})=>[l(u,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:x=>Re(i)},null,8,["onClick"])]),_:1}),l(b,{exportable:!1,style:{}},{body:p(i=>[l(u,{icon:"pi pi-sync",outlined:"",rounded:"",severity:"success",onClick:x=>se(i.data,!0)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value","loading","exportFilename","selection","pt"]),l(h,{visible:m(N),"onUpdate:visible":n[15]||(n[15]=i=>w(N)?N.value=i:null),header:"Confirm",modal:!0},{footer:p(()=>[l(u,{label:"No",icon:"pi pi-times",text:"",onClick:n[14]||(n[14]=i=>N.value=!1)}),l(u,{label:"Yes",icon:"pi pi-check",text:"",onClick:Ue})]),default:p(()=>[v("div",ma,[fa,m(N)?(S(),C("span",ha,"Are you sure you want to delete the selected products?")):X("",!0)])]),_:1},8,["visible"])]),_:1})])}}});export{ba as default};
