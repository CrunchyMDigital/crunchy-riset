import{U as Ke,M as p,r as m,F as Ye,H as N,e as We,I as qe,J as Qe,K as Ge,V as le,W as re,t as S,v as I,X as _e,Y as C,Z as be,_ as J,$ as ye,x as v,y as z,a0 as Je,a1 as Xe,d as Ze,u as et,L as tt,i as pe,a2 as ae,o as at,z as o,A as f,N as w,m as nt,a3 as ot,a4 as lt,B as Q,a5 as rt,a6 as it,P as st,a7 as ct,a8 as dt,a9 as ut,aa as pt,ab as mt,O as ft,ac as ht,ad as vt,ae as gt}from"./C8YR8hZe.js";import{u as _t}from"./Dac2RepM.js";import{u as bt}from"./CZl4icEW.js";let yt;function kt(){return yt}function xt(t){return typeof t=="function"?t():p(t)}function oe(t){if(t instanceof Promise)return t;const l=xt(t);if(!t||!l)return l;if(Array.isArray(l))return l.map(e=>oe(e));if(typeof l=="object"){const e={};for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d)){if(d==="titleTemplate"||d[0]==="o"&&d[1]==="n"){e[d]=p(l[d]);continue}e[d]=oe(l[d])}return e}return l}const $t="usehead",me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe="__unhead_injection_handler__";function St(){if(fe in me)return me[fe]();const t=Ke($t);return t||kt()}function wt(t,l={}){const e=l.head||St();if(e)return e.ssr?e.push(t,l):It(e,t,l)}function It(t,l,e={}){const d=m(!1),y=m({});Ye(()=>{y.value=d.value?{}:oe(l)});const c=t.push(y.value,e);return N(y,$=>{c.patch($)}),Ge()&&(We(()=>{c.dispose()}),qe(()=>{d.value=!0}),Qe(()=>{d.value=!1})),c}const he=t=>t.toLocaleString("id-ID",{minimumFractionDigits:0,maximumFractionDigits:0,style:"currency",currency:"IDR"}),ve=t=>{try{return new URL(t),!0}catch{return!1}},Ct=t=>{const l=new URL(t);return l.search="",l.toString()},G=t=>t.replace("%",""),L=t=>t.replace("Rp","").replace(".","").replace(" ",""),ge=t=>{const l=new Date(t*1e3),e=new Date,d=e.getFullYear()-l.getFullYear(),y=e.getMonth()-l.getMonth();return d*12+y},Tt=t=>!isNaN(parseFloat(t))&&isFinite(t);var Dt=function(l){var e=l.dt;return`
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
`)},Vt={root:function(l){var e=l.props;return["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},At=le.extend({name:"tag",theme:Dt,classes:Vt}),Et={name:"BaseTag",extends:re,props:{value:null,severity:null,rounded:Boolean,icon:String},style:At,provide:function(){return{$pcTag:this,$parentInstance:this}}},ke={name:"Tag",extends:Et,inheritAttrs:!1};function Nt(t,l,e,d,y,c){return S(),I("span",C({class:t.cx("root")},t.ptmi("root")),[t.$slots.icon?(S(),_e(be(t.$slots.icon),C({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(S(),I("span",C({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):J("",!0),t.value!=null||t.$slots.default?ye(t.$slots,"default",{key:2},function(){return[v("span",C({class:t.cx("label")},t.ptm("label")),z(t.value),17)]}):J("",!0)],16)}ke.render=Nt;var Pt=function(l){var e=l.dt;return`
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
`)},Rt={root:function(l){var e=l.instance,d=l.props;return["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":d.autoResize,"p-invalid":d.invalid,"p-variant-filled":d.variant?d.variant==="filled":e.$primevue.config.inputStyle==="filled"||e.$primevue.config.inputVariant==="filled","p-textarea-fluid":e.hasFluid}]}},Ut=le.extend({name:"textarea",theme:Pt,classes:Rt}),Mt={name:"BaseTextarea",extends:re,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Ut,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},xe={name:"Textarea",extends:Mt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(l){this.autoResize&&this.resize(),this.$emit("update:modelValue",l.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return Je(this.fluid)?!!this.$pcFluid:this.fluid}}},zt=["value","aria-invalid"];function Ot(t,l,e,d,y,c){return S(),I("textarea",C({class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:l[0]||(l[0]=function(){return c.onInput&&c.onInput.apply(c,arguments)})},t.ptmi("root",c.ptmParams)),null,16,zt)}xe.render=Ot;var Ft=function(l){var e=l.dt;return`
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
`)},Lt={root:function(l){var e=l.props;return["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},jt=le.extend({name:"avatar",theme:Ft,classes:Lt}),Bt={name:"BaseAvatar",extends:re,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:jt,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},$e={name:"Avatar",extends:Bt,inheritAttrs:!1,emits:["error"],methods:{onError:function(l){this.$emit("error",l)}}},Ht=["aria-labelledby","aria-label"],Kt=["src","alt"];function Yt(t,l,e,d,y,c){return S(),I("div",C({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[ye(t.$slots,"default",{},function(){return[t.label?(S(),I("span",C({key:0,class:t.cx("label")},t.ptm("label")),z(t.label),17)):t.$slots.icon?(S(),_e(be(t.$slots.icon),{key:1,class:Xe(t.cx("icon"))},null,8,["class"])):t.icon?(S(),I("span",C({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(S(),I("img",C({key:3,src:t.image,alt:t.ariaLabel,onError:l[0]||(l[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},t.ptm("image")),null,16,Kt)):J("",!0)]})],16,Ht)}$e.render=Yt;var ne={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};const Wt={class:""},qt={class:"inline-flex items-center justify-center gap-2"},Qt=v("span",{class:"font-bold whitespace-nowrap"},"Edit Cookie",-1),Gt=v("span",{class:"text-surface-500 dark:text-surface-400 block mb-8"},"Update shopee affiliate cookie",-1),Jt={class:"flex items-center gap-4 mb-4 w-full"},Xt={class:"flex flex-col gap-2"},Zt=v("label",{for:"username"},"Minimal Komisi %",-1),ea={class:"flex flex-col gap-2"},ta=v("label",{for:"username"},"Minimal View Perbulan %",-1),aa={class:"flex flex-col gap-2"},na=v("label",{for:"username"},"Max Concurrent",-1),oa=v("div",null,null,-1),la={class:"flex"},ra={class:"flex flex-wrap items-center justify-between gap-2"},ia={class:"text-xl font-bold"},sa={style:{"text-align":"left"}},ca={class:"flex justify-end"},da=v("i",{class:"pi pi-search"},null,-1),ua=["href"],pa=["href"],ma={class:"flex items-center gap-4"},fa=v("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),ha={key:0},ba=Ze({__name:"index",setup(t){et();const l=m({global:{value:null,matchMode:ne.CONTAINS},name:{value:null,matchMode:ne.STARTS_WITH},link:{value:null,matchMode:ne.STARTS_WITH}}),e=m(),d=_t(),y=m(),c=tt(),g=m(),$=m(),P=bt();P.autoCancellation(!1);const T=m(),D=m(),j=m(10),ie=pe(()=>e.value?e.value.split(`
`).filter(n=>ve(n)||typeof parseInt(n)=="number"):[]),B=m([]),Se=ae(),we=()=>{var a;(a=k.value)!=null&&a.length&&Se.require({message:`Hapus ${k.value.length} data?`,header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{var n;for(let r=0;r<((n=k.value)==null?void 0:n.length);r++){const s=k.value[r];g.value=g.value.filter(_=>_.itemId!==s.itemId),c.add({severity:"success",summary:"Confirmed",detail:"Data berhasil dihapus",life:3e3})}},reject:()=>{c.add({severity:"error",summary:"Rejected",detail:"Tidak jadi hapus",life:3e3})}})},X=()=>{const{userCookie:a,userInfo:n,risetData:r,comMins:s,monthlyMins:_}=d;$.value=a,y.value=n,g.value=r,D.value=_,T.value=s},H=m(),Ie=async()=>{P.authStore.isValid!==!0&&nt("/auth/login")};at(async()=>{await Ie(),X()}),N(D,()=>{d.$patch({monthlyMins:D.value})}),N(T,()=>{d.$patch({comMins:T.value})}),N(g,()=>{d.$patch({risetData:g.value})}),N($,()=>{d.$patch({userCookie:$.value})}),N(y,()=>{d.$patch({userInfo:y.value})}),N(H,()=>{H.value===100&&c.add({severity:"success",summary:"Selesai",detail:"Task berhasil dijalankan",life:3e3,group:"bc"})}),m(),m([]);const se=async(a,n=!1)=>{try{if(a&&(a.popup==="-"&&a.name===""||n===!0)){const r=await $fetch(`/api/product-info/${a.itemId}`,{method:"post",body:{cookies:$.value}});if(r.data){const s=r.data,_=s.commission_rate.is_capped,u=L(s.commission_rate.commission_cap);a.name=s.batch_item_for_item_card_full.name,a.link=s.product_link,a.shopid=parseInt(String(s.product_link).split("/")[4]);const h=s.commission_rate.app_exist_commission_rate,E=s.commission_rate.app_exist_commission,V=s.commission_rate.shopee_commission_rate,O=s.commission_rate.shopee_commission;a.com_extra=h,a.com_shopee=V;const W=parseInt(G(h)),Z=parseInt(G(V)),q=r.data.commission_rate_detail.default_commission_rate/1e3;a.com_total=q;const F=_==!0?parseInt(L(E))+parseInt(L(u)):parseInt(L(E))+parseInt(L(O));a.com_net=Number(String(r.data.commission_rate.default_commission).replace("Rp","").replace(".","")),a.stock=s.batch_item_for_item_card_full.stock;const ee=s.batch_item_for_item_card_full.price/1e5;a.sold_total=s.batch_item_for_item_card_full.historical_sold,a.sold=s.batch_item_for_item_card_full.sold,a.isOfficial=s.batch_item_for_item_card_full.is_official_shop;const b=ge(s.batch_item_for_item_card_full.ctime);a.added=b;let M=Math.round(s.batch_item_for_item_card_full.historical_sold/b);a.monthly=isNaN(M)===!0?0:M,a.price=ee,a.popup="-",(F===0||q<T.value||M<D.value||!isFinite(M))&&B.value.push(a.itemId)}else c.add({severity:"error",summary:"Error",detail:r.msg,life:3e3})}}catch(r){console.error(r)}},Ce=async()=>{let a=0;for(;a<=g.value.length;){const n=[];for(let r=0;r<=j.value&&a<=g.value.length;r++,a++){const s=g.value[a];H.value=Math.round((a+1)*(100/g.value.length)),n.push(se(s,!1).then(_=>{}).catch(_=>{console.log(`error : ${_}`),c.add({severity:"error",summary:"Error",detail:`Produk gagal ${s.itemId}`,life:3e3})}))}await Promise.all(n).then(r=>{c.add({severity:"success",summary:"Yihaaaa",detail:"Task selesai",life:3e3})})}for(let n=0;n<B.value.length;n++){const r=B.value[n];g.value=g.value.filter(s=>s.itemId!==r)}B.value=[]},R=m(),ce=m(),K=m(),Y=m(!1),Te=async()=>{ce.value=await $fetch(`/api/google-suggest?kw=${R.value}`)},de=async()=>{Y.value=!0,K.value=await $fetch("/api/affSearch",{method:"POST",body:{cookies:$.value,kw:R.value}}),e.value="";let a=0;for(let n=0;n<K.value.length;n++){const r=K.value[n],s=ge(r.batch_item_for_item_card_full.ctime);let _=Math.round(r.batch_item_for_item_card_full.historical_sold/s);const u=Number(String(r.seller_commission_rate).replace("%","")),h=Number(String(r.default_commission_rate).replace("%","")),E=Number(r.batch_item_for_item_card_full.price.slice(0,-5));let V=isNaN(_)===!0?0:_;const O=h/100*Number(r.batch_item_for_item_card_full.price.slice(0,-5))>=1e4?1e4:h/100*Number(r.batch_item_for_item_card_full.price.slice(0,-5)),W=Number(u)/100*E+O;_>=D.value&&h>=T.value&&Number.isFinite(_)&&(a++,g.value.push({itemId:r.item_id,isOfficial:r.batch_item_for_item_card_full.is_official_shop,shopId:r.batch_item_for_item_card_full.shop_id,name:r.batch_item_for_item_card_full.name,link:r.product_link,com_extra:String(r.seller_commission_rate).replace("%",""),com_shopee:0,com_total:h,com_net:W,price:E,sold:r.batch_item_for_item_card_full.sold,stock:r.batch_item_for_item_card_full.stock,added:s,sold_total:r.batch_item_for_item_card_full.historical_sold,monthly:V,popup:"-"}))}K.value=null,Y.value=!1,a>0?c.add({severity:"success",summary:"Success",detail:`Ditemukan ${a} produk`,life:3e3}):c.add({severity:"error",summary:"Error",detail:`Tidak ada produk dengan kata kunci ${R.value}`,life:3e3})},De=async()=>{for(let a=0;a<ie.value.length;a++){const n=ie.value[a];let r=null,s=null;if(n.includes("contents href"))continue;if(ve(n)){const u=Ct(n);if(u.includes("-i.")){const h=u.split("-i.")[1].split(".");h[0]+h[1],r=h[1],s=h[0]}else if(u.includes("https://shopee.co.id/product/")){const h=u.split("https://shopee.co.id/product/")[1].split("/");h[0]+h[1],r=h[1],s=h[0]}}else Tt(n)&&(r=n,s=111111);g.value.find(u=>u.itemId===r)?console.log(`Skipped item with id ${r}`):g.value.push({itemId:r,shopId:s,name:"",link:"",com_extra:0,com_shopee:0,com_total:0,com_net:0,price:0,sold:0,stock:0,added:0,sold_total:0,monthly:0,popup:"-"})}e.value=""},U=m(!1);m([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]);const Ve=async()=>{P.authStore.clear(),d.$reset(),X()},Ae=async()=>{const a=await $fetch("/api/getAffiliateUserInfo",{method:"post",body:{cookies:$.value}});a.data&&(c.add({severity:"success",summary:"Berhasil",detail:`Cookie berhasil di masukkan dengan nama ${a.data.name}`,life:3e3}),y.value=a.data)},Ee=ae(),Ne=()=>{Ee.require({message:"Yakin akan mereset data, anda perlu memasukkan cookies lagi",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{d.$patch({risetData:[]}),X(),c.add({severity:"info",summary:"Confirmed",detail:"Data cookies telah di bersihkan",life:3e3})},reject:()=>{c.add({severity:"error",summary:"Rejected",detail:"Tidak jadi reset",life:3e3})}})},Pe=a=>{let{data:n,newValue:r,field:s}=a;n[s]=r},k=m();m(!1);const A=m(!1),Re=a=>{k.value=a,A.value=!0},Ue=()=>{g.value=g.value.filter(a=>a.itemId!==k.value.itemId),A.value=!1,k.value=null,c.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},ue=m(),Me=()=>{ue.value.exportCSV()},ze=ae(),Oe=async()=>{await Ve(),window.location.reload()},Fe=()=>{ze.require({message:"Yakin akan menghapus hasil?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{g.value=[],c.add({severity:"info",summary:"Confirmed",detail:"Data result berhasil dihapus",life:3e3})},reject:()=>{c.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},Le=async()=>{k.value!==void 0?k.value.map(async a=>{if(a.popup!=="-")try{a.com_extra=G(a.com_extra),a.com_shopee=G(a.com_shopee);const n=a.price;a.price=String(n).replace("Rp ","").replace(".",""),a.last_checked=Date.now();const r=await P.collection("products").getFullList({filter:`itemId="${a.itemId}"`});if(r.length)a.last_checked=new Date,await P.collection("products").update(r[0].id,a),c.add({severity:"success",summary:"OK",detail:`Item ${a.itemId} telah diUpdate`,life:3e3});else return await P.collection("products").create(a);c.add({severity:"success",summary:"OK",detail:`Item ${a.itemId} telah diinput`,life:3e3})}catch(n){console.log(n)}else c.add({severity:"error",summary:"Rejected",detail:`Item ${a.itemId} popup tidak boleh kosong`,life:3e3})}):c.add({severity:"error",summary:"Opps",detail:"Silahan pilh produk terlebih dahulu",life:3e3,group:"bc"})};wt({title:"BGS Riset - Tools Riset Produk Shopee Affiliate"});const je=()=>{const a=new Date,n=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0"),_=String(a.getHours()).padStart(2,"0"),u=String(a.getMinutes()).padStart(2,"0"),h=String(a.getSeconds()).padStart(2,"0");return`${n}${r}${s}_${_}${u}${h}`},Be=pe(()=>"riset-data-"+je());return(a,n)=>{const r=$e,s=xe,_=it,u=st,h=ot,E=ct,V=dt,O=ut,W=pt,Z=ke,q=mt,F=ft,ee=ht,b=vt,M=gt,He=lt;return S(),I("div",Wt,[o(h,{visible:p(U),"onUpdate:visible":n[6]||(n[6]=i=>w(U)?U.value=i:null),modal:"",header:"Edit Profile",style:{width:"25rem"}},{header:f(()=>[v("div",qt,[o(r,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",shape:"circle"}),Qt])]),footer:f(()=>[o(u,{label:"Check",outlined:"",text:"",severity:"success",onClick:Ae,autofocus:""}),o(u,{label:"Cancel",outlined:"",text:"",severity:"danger",onClick:n[4]||(n[4]=i=>U.value=!1),autofocus:""}),o(u,{label:"Save",outlined:"",severity:"info",onClick:n[5]||(n[5]=i=>U.value=!1),autofocus:""})]),default:f(()=>[Gt,v("div",Jt,[o(s,{modelValue:p($),"onUpdate:modelValue":n[0]||(n[0]=i=>w($)?$.value=i:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"])]),v("div",Xt,[Zt,o(_,{modelValue:p(T),"onUpdate:modelValue":n[1]||(n[1]=i=>w(T)?T.value=i:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),v("div",ea,[ta,o(_,{modelValue:p(D),"onUpdate:modelValue":n[2]||(n[2]=i=>w(D)?D.value=i:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),v("div",aa,[na,o(_,{modelValue:p(j),"onUpdate:modelValue":n[3]||(n[3]=i=>w(j)?j.value=i:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])])]),_:1},8,["visible"]),o(He,null,{title:f(()=>[Q("Riset Produk")]),content:f(()=>[o(E,null,{start:f(()=>[o(u,{icon:"pi pi-pencil",class:"mr-2",severity:"success",label:"Cookies",onClick:n[7]||(n[7]=i=>U.value=!0)}),o(u,{severity:"warn",label:"Data",icon:"pi pi-times-circle",iconPos:"left",onClick:Ne,class:"mr-2"}),o(u,{severity:"danger",label:"Results",icon:"pi pi-times",iconPos:"left",onClick:Fe,class:"mr-2"}),o(u,{severity:"danger",label:"Logout",icon:"pi-sign-out",iconPos:"left",onClick:Oe})]),center:f(()=>[]),end:f(()=>[]),_:1}),o(V),oa,v("div",la,[o(O,{modelValue:p(R),"onUpdate:modelValue":n[8]||(n[8]=i=>w(R)?R.value=i:null),dropdown:"",suggestions:p(ce),onComplete:Te,class:"mr-3",style:{"min-width":"50rem"},onKeyup:rt(de,["enter"]),fluid:""},null,8,["modelValue","suggestions"]),o(u,{class:"mr-2",severity:"success",label:"Cari Barang",onClick:de,icon:"pi pi-search",loading:p(Y),style:{"min-width":"10rem"}},null,8,["loading"])]),o(V),o(s,{modelValue:p(e),"onUpdate:modelValue":n[9]||(n[9]=i=>w(e)?e.value=i:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"]),o(u,{icon:"pi pi-plus",class:"mr-2",severity:"success",label:"Process URL",onClick:De}),o(V),o(W,{value:p(H),showValue:""},null,8,["value"]),o(M,{filters:p(l),"onUpdate:filters":n[12]||(n[12]=i=>w(l)?l.value=i:null),value:p(g),loading:p(Y),exportFilename:p(Be),selection:p(k),"onUpdate:selection":n[13]||(n[13]=i=>w(k)?k.value=i:null),ref_key:"dt",ref:ue,editMode:"cell",dataKey:"itemId",globalFilterFields:["name","link"],onCellEditComplete:Pe,sele:"",pt:{table:{style:"min-width: 50rem"},column:{bodycell:({state:i})=>({class:[{"pt-0 pb-0":i.d_editing}]})}}},{header:f(()=>{var i;return[v("div",ra,[v("span",ia,[Q("List Produk "),o(Z,{value:`Total: ${(i=p(g))==null?void 0:i.length}`,severity:"warn"},null,8,["value"])]),o(u,{icon:"pi pi-refresh",rounded:"",raised:"",onClick:Ce})]),v("div",sa,[o(u,{icon:"pi pi-external-link",label:"Export",onClick:n[10]||(n[10]=x=>Me(x)),class:"mr-2"}),o(u,{icon:"pi pi-external-link",label:"Save DB",onClick:Le,class:"mr-2"}),o(u,{icon:"pi pi-external-link",label:"Delete Selected",onClick:we}),v("div",ca,[o(ee,null,{default:f(()=>[o(q,null,{default:f(()=>[da]),_:1}),o(F,{modelValue:p(l).global.value,"onUpdate:modelValue":n[11]||(n[11]=x=>p(l).global.value=x),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])])]}),default:f(()=>[o(b,{selectionMode:"multiple",headerStyle:"width: 3rem"}),o(b,{field:"itemId",header:"ITEMID"},{body:f(({data:i})=>[v("a",{href:`https://affiliate.shopee.co.id/offer/product_offer/${i.itemId}`,target:"_blank"},z(i.itemId),9,ua)]),_:1}),o(b,{field:"name",header:"NAME",sortable:"",style:{width:"25%"}}),o(b,{field:"isOfficial",header:"OFFICIAL",sortable:""},{body:f(({data:i})=>[o(Z,{value:i.isOfficial?"official":"biasa",severity:i.isOfficial?"warn":"success"},null,8,["value","severity"])]),_:1}),o(b,{field:"com_total",header:"TOTAL COM",sortable:""}),o(b,{field:"com_net",header:"NET COM",sortable:""},{body:f(({data:i})=>[Q(z(("formatCurrency"in a?a.formatCurrency:p(he))(i.com_net)),1)]),_:1}),o(b,{field:"price",header:"PRICE",sortable:""},{body:f(({data:i})=>[Q(z(("formatCurrency"in a?a.formatCurrency:p(he))(Number(i.price))),1)]),_:1}),o(b,{field:"sold",header:"SOLD",sortable:""}),o(b,{field:"stock",header:"STOCK",sortable:""}),o(b,{field:"added",header:"ADDED",sortable:""}),o(b,{field:"monthly",header:"MONTHLY",sortable:""}),o(b,{field:"link",header:"LINK",class:"text-wrap",sortable:""},{body:f(({data:i,field:x})=>[v("a",{href:i.link,target:"_blank",rel:"noopener"},z(i.link),9,pa)]),_:1}),o(b,{field:"popup",header:"POPUP",sortable:""},{body:f(({data:i,field:x})=>[o(F,{modelValue:i[x],"onUpdate:modelValue":te=>i[x]=te,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),editor:f(({data:i,field:x})=>[o(F,{modelValue:i[x],"onUpdate:modelValue":te=>i[x]=te,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(b,{exportable:!1,style:{}},{body:f(({data:i})=>[o(u,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:x=>Re(i)},null,8,["onClick"])]),_:1}),o(b,{exportable:!1,style:{}},{body:f(i=>[o(u,{icon:"pi pi-sync",outlined:"",rounded:"",severity:"success",onClick:x=>se(i.data,!0)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value","loading","exportFilename","selection","pt"]),o(h,{visible:p(A),"onUpdate:visible":n[15]||(n[15]=i=>w(A)?A.value=i:null),header:"Confirm",modal:!0},{footer:f(()=>[o(u,{label:"No",icon:"pi pi-times",text:"",onClick:n[14]||(n[14]=i=>A.value=!1)}),o(u,{label:"Yes",icon:"pi pi-check",text:"",onClick:Ue})]),default:f(()=>[v("div",ma,[fa,p(A)?(S(),I("span",ha,"Are you sure you want to delete the selected products?")):J("",!0)])]),_:1},8,["visible"])]),_:1})])}}});export{ba as default};
