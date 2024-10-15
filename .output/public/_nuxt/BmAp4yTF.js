import{P as ne,Q as ae,t as _,v as x,R as G,S as k,T as ce,U as R,V as F,x as p,y as U,Z as ie,W as Je,X as et,Y as tt,_ as nt,$ as at,I as Ce,a0 as ot,a1 as rt,g as ge,a2 as it,A as u,z as r,a3 as lt,a4 as st,a5 as ct,a6 as $e,a7 as dt,d as ut,u as pt,r as m,E as mt,i as be,a8 as le,o as ft,a9 as A,aa as ht,F as h,G as S,ab as se,m as vt,ac as gt,B as Z,ad as bt,ae as ye,af as yt,ag as _t,ah as kt,ai as wt,aj as xt,ak as Ct,H as $t,al as St,am as It,an as Lt,ao as Dt}from"./CDUQJvRv.js";import{u as Vt}from"./-0gp3bjV.js";import{u as zt}from"./DFmtffx1.js";import{u as Mt}from"./CzvCUEDC.js";const _e=e=>e.toLocaleString("id-ID",{minimumFractionDigits:0,maximumFractionDigits:0,style:"currency",currency:"IDR"}),ke=e=>{try{return new URL(e),!0}catch{return!1}},Rt=e=>{const n=new URL(e);return n.search="",n.toString()},we=e=>e.replace("%",""),q=e=>e.replace("Rp","").replace(".","").replace(" ",""),xe=e=>{const n=new Date(e*1e3),t=new Date,g=t.getFullYear()-n.getFullYear(),w=t.getMonth()-n.getMonth();return g*12+w},Bt=e=>!isNaN(parseFloat(e))&&isFinite(e);var Pt=function(n){var t=n.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(t("tag.primary.background"),`;
    color: `).concat(t("tag.primary.color"),`;
    font-size: `).concat(t("tag.font.size"),`;
    font-weight: `).concat(t("tag.font.weight"),`;
    padding: `).concat(t("tag.padding"),`;
    border-radius: `).concat(t("tag.border.radius"),`;
    gap: `).concat(t("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(t("tag.icon.size"),`;
    width: `).concat(t("tag.icon.size"),`;
    height:`).concat(t("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(t("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(t("tag.success.background"),`;
    color: `).concat(t("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(t("tag.info.background"),`;
    color: `).concat(t("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(t("tag.warn.background"),`;
    color: `).concat(t("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(t("tag.danger.background"),`;
    color: `).concat(t("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(t("tag.secondary.background"),`;
    color: `).concat(t("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(t("tag.contrast.background"),`;
    color: `).concat(t("tag.contrast.color"),`;
}
`)},Tt={root:function(n){var t=n.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},At=ne.extend({name:"tag",theme:Pt,classes:Tt}),Et={name:"BaseTag",extends:ae,props:{value:null,severity:null,rounded:Boolean,icon:String},style:At,provide:function(){return{$pcTag:this,$parentInstance:this}}},Se={name:"Tag",extends:Et,inheritAttrs:!1};function Nt(e,n,t,g,w,s){return _(),x("span",k({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(_(),G(ce(e.$slots.icon),k({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(_(),x("span",k({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):R("",!0),e.value!=null||e.$slots.default?F(e.$slots,"default",{key:2},function(){return[p("span",k({class:e.cx("label")},e.ptm("label")),U(e.value),17)]}):R("",!0)],16)}Se.render=Nt;var Ft=function(n){var t=n.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(t("drawer.background"),`;
    color: `).concat(t("drawer.color"),`;
    border: 1px solid `).concat(t("drawer.border.color"),`;
    box-shadow: `).concat(t("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(t("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(t("drawer.title.font.weight"),`;
    font-size: `).concat(t("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}
`)},Ut={mask:function(n){var t=n.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},Ot={mask:function(n){var t=n.instance,g=n.props,w=["left","right","top","bottom"],s=w.find(function(f){return f===g.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":g.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},s?"p-drawer-".concat(s):""]},root:function(n){var t=n.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Kt=ne.extend({name:"drawer",theme:Ft,classes:Ot,inlineStyles:Ut}),jt={name:"BaseDrawer",extends:ae,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Kt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},Ie={name:"Drawer",extends:jt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(n){n?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&ie.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&ie.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Je(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&ie.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(w){return w&&w.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.$slots.footer&&n(this.footerContainer),t||(t=this.closeButton))),t&&et(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&tt()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&nt()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},footerContainerRef:function(n){this.footerContainer=n},closeButtonRef:function(n){this.closeButton=n?n.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:at},components:{Button:Ce,Portal:ot,TimesIcon:rt}},Yt=["aria-modal"];function Ht(e,n,t,g,w,s){var f=ge("Button"),I=ge("Portal"),L=it("focustrap");return _(),G(I,null,{default:u(function(){return[w.containerVisible?(_(),x("div",k({key:0,ref:s.maskRef,onMousedown:n[0]||(n[0]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[r(lt,k({name:"p-drawer",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:u(function(){return[e.visible?st((_(),x("div",k({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?F(e.$slots,"container",{key:0,closeCallback:s.hide}):(_(),x(ct,{key:1},[p("div",k({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[F(e.$slots,"header",{class:$e(e.cx("title"))},function(){return[e.header?(_(),x("div",k({key:0,class:e.cx("title")},e.ptm("title")),U(e.header),17)):R("",!0)]}),e.showCloseIcon?(_(),G(f,k({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":s.closeAriaLabel,unstyled:e.unstyled,onClick:s.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:u(function(B){return[F(e.$slots,"closeicon",{},function(){return[(_(),G(ce(e.closeIcon?"span":"TimesIcon"),k({class:[e.closeIcon,B.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):R("",!0)],16),p("div",k({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[F(e.$slots,"default")],16),e.$slots.footer?(_(),x("div",k({key:0,ref:s.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[F(e.$slots,"footer")],16)):R("",!0)],64))],16,Yt)),[[L]]):R("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):R("",!0)]}),_:3})}Ie.render=Ht;var Zt=function(n){var t=n.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("textarea.color"),`;
    background: `).concat(t("textarea.background"),`;
    padding: `).concat(t("textarea.padding.y")," ").concat(t("textarea.padding.x"),`;
    border: 1px solid `).concat(t("textarea.border.color"),`;
    transition: background `).concat(t("textarea.transition.duration"),", color ").concat(t("textarea.transition.duration"),", border-color ").concat(t("textarea.transition.duration"),", outline-color ").concat(t("textarea.transition.duration"),", box-shadow ").concat(t("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(t("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(t("textarea.focus.border.color"),`;
    box-shadow: `).concat(t("textarea.focus.ring.shadow"),`;
    outline: `).concat(t("textarea.focus.ring.width")," ").concat(t("textarea.focus.ring.style")," ").concat(t("textarea.focus.ring.color"),`;
    outline-offset: `).concat(t("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(t("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(t("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(t("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(t("textarea.disabled.background"),`;
    color: `).concat(t("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(t("textarea.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},qt={root:function(n){var t=n.instance,g=n.props;return["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":g.autoResize,"p-invalid":g.invalid,"p-variant-filled":g.variant?g.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-textarea-fluid":t.hasFluid}]}},Gt=ne.extend({name:"textarea",theme:Zt,classes:qt}),Wt={name:"BaseTextarea",extends:ae,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Gt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Le={name:"Textarea",extends:Wt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(n){this.autoResize&&this.resize(),this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return dt(this.fluid)?!!this.$pcFluid:this.fluid}}},Xt=["value","aria-invalid"];function Qt(e,n,t,g,w,s){return _(),x("textarea",k({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},e.ptmi("root",s.ptmParams)),null,16,Xt)}Le.render=Qt;var Jt=function(n){var t=n.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(t("avatar.width"),`;
    height: `).concat(t("avatar.height"),`;
    font-size: `).concat(t("avatar.font.size"),`;
    background: `).concat(t("avatar.background"),`;
    border-radius: `).concat(t("avatar.border.radius"),`;
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
    font-size: `).concat(t("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(t("avatar.lg.width"),`;
    height: `).concat(t("avatar.lg.width"),`;
    font-size: `).concat(t("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(t("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(t("avatar.xl.width"),`;
    height: `).concat(t("avatar.xl.width"),`;
    font-size: `).concat(t("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(t("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(t("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(t("avatar.group.border.color"),`;
}
`)},en={root:function(n){var t=n.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},tn=ne.extend({name:"avatar",theme:Jt,classes:en}),nn={name:"BaseAvatar",extends:ae,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:tn,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},De={name:"Avatar",extends:nn,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},an=["aria-labelledby","aria-label"],on=["src","alt"];function rn(e,n,t,g,w,s){return _(),x("div",k({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[F(e.$slots,"default",{},function(){return[e.label?(_(),x("span",k({key:0,class:e.cx("label")},e.ptm("label")),U(e.label),17)):e.$slots.icon?(_(),G(ce(e.$slots.icon),{key:1,class:$e(e.cx("icon"))},null,8,["class"])):e.icon?(_(),x("span",k({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(_(),x("img",k({key:3,src:e.image,alt:e.ariaLabel,onError:n[0]||(n[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},e.ptm("image")),null,16,on)):R("",!0)]})],16,an)}De.render=rn;const ln={class:""},sn={class:"inline-flex items-center justify-center gap-2"},cn=p("span",{class:"font-bold whitespace-nowrap"},"Pengaturan Aplikasi",-1),dn=p("span",{class:"text-surface-500 dark:text-surface-400 block mb-3"},"Affiliate Cookie",-1),un={class:"flex items-center gap-4 mb-4 w-full"},pn={class:"flex flex-col gap-2"},mn=p("label",{for:"username"},"Minimal Komisi %",-1),fn={class:"flex flex-col gap-2"},hn=p("label",{for:"username"},"Minimal View Perbulan",-1),vn={class:"flex flex-col gap-2"},gn=p("label",{for:"username"},"Max Request / Aksi",-1),bn={class:"flex flex-col gap-2"},yn=p("label",{for:"username"},"Minimal Harga",-1),_n={class:"flex flex-col gap-2"},kn=p("label",{for:"username"},"Minimal Rating",-1),wn=p("p",{class:"m-1"},null,-1),xn=p("div",null,null,-1),Cn={class:"flex w-full"},$n={class:"flex space-x-1"},Sn={style:{"text-align":"left"},class:"flex"},In={style:{"text-align":"left"}},Ln={class:"text-xl font-bold"},Dn={class:"ml-auto"},Vn=p("i",{class:"pi pi-search"},null,-1),zn=["href"],Mn=["href"],Rn={class:"flex items-center gap-4"},Bn=p("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),Pn={key:0},Fn=ut({__name:"index",setup(e){pt();const n=m({global:{value:null,matchMode:se.CONTAINS},name:{value:null,matchMode:se.STARTS_WITH},link:{value:null,matchMode:se.STARTS_WITH}}),t=m(),g=zt(),w=m(),s=mt(),f=m(),I=m(),L=m(),B=m(),oe=Mt();oe.autoCancellation(!1);const P=m(),T=m(),W=m(10),Ve=m([{field:"name",header:"ITEMID"},{field:"category",header:"NAME"},{field:"quantity",header:"OFFICIAL"}]),de=m({itemId:!1,name:!0,isOfficial:!0,com_total:!0,com_net:!0,price:!0,sold_total:!0,stock:!0,added:!0,monthly:!0,link:!0});m(Ve.value);const ue=be(()=>t.value?t.value.split(`
`).filter(o=>ke(o)||typeof parseInt(o)=="number"):[]),X=m([]),ze=le(),Me=()=>{var a;(a=C.value)!=null&&a.length&&ze.require({message:`Hapus ${C.value.length} data?`,header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{var o;for(let i=0;i<((o=C.value)==null?void 0:o.length);i++){const c=C.value[i];f.value=f.value.filter(v=>v.itemId!==c.itemId),s.add({severity:"success",summary:"Confirmed",detail:"Data berhasil dihapus",life:3e3})}},reject:()=>{s.add({severity:"error",summary:"Rejected",detail:"Tidak jadi hapus",life:3e3})}})},pe=()=>{const{userCookie:a,userInfo:o,risetData:i,comMins:c,monthlyMins:v,priceMins:d,ratingMins:b}=g;I.value=a,w.value=o,f.value=i,L.value=d,B.value=b,T.value=v,P.value=c},Q=m(),Re=async()=>{oe.authStore.isValid!==!0&&vt("/auth/login")};ft(async()=>{await Re(),pe()}),A(T,()=>{g.$patch({monthlyMins:T.value})}),A(P,()=>{g.$patch({comMins:P.value})}),A(f,()=>{g.$patch({risetData:f.value})}),A(I,()=>{g.$patch({userCookie:I.value})}),A(w,()=>{g.$patch({userInfo:w.value})}),A(L,()=>{g.$patch({priceMins:L.value})}),A(B,()=>{g.$patch({ratingMins:B.value})}),A(Q,()=>{Q.value===100&&s.add({severity:"success",summary:"Selesai",detail:"Task berhasil dijalankan",life:3e3,group:"bc"})}),m(),m([]);const me=async(a,o=!1)=>{try{if(a&&(a.popup==="-"&&a.name===""||o===!0)){const i=await $fetch(`/api/product-info/${a.itemId}`,{method:"post",body:{cookies:I.value}});if(i.data){const c=i.data,v=c.commission_rate.is_capped,d=q(c.commission_rate.commission_cap);a.name=c.batch_item_for_item_card_full.name,a.link=c.product_link,a.shopid=parseInt(String(c.product_link).split("/")[4]);const b=c.commission_rate.app_exist_commission_rate,$=c.commission_rate.app_exist_commission,z=c.commission_rate.shopee_commission_rate,Y=c.commission_rate.shopee_commission;a.com_extra=b,a.com_shopee=z;const H=parseInt(we(b)),D=parseInt(we(z)),j=i.data.commission_rate_detail.default_commission_rate/1e3;a.com_total=j;const M=v==!0?parseInt(q($))+parseInt(q(d)):parseInt(q($))+parseInt(q(Y));a.com_net=Number(String(i.data.commission_rate.default_commission).replace("Rp","").replace(".","")),a.stock=c.batch_item_for_item_card_full.stock;const te=c.batch_item_for_item_card_full.price/1e5;a.sold_total=c.batch_item_for_item_card_full.historical_sold,a.sold=c.batch_item_for_item_card_full.sold,a.isOfficial=c.batch_item_for_item_card_full.is_official_shop;const y=xe(c.batch_item_for_item_card_full.ctime);a.added=y,a.rating=Number(c.batch_item_for_item_card_full.item_rating.rating_star).toFixed(2);let N=Math.round(c.batch_item_for_item_card_full.historical_sold/y);a.monthly=isNaN(N)===!0?0:N,a.price=te,a.popup="-",(M===0||j<P.value||N<T.value||!isFinite(N)||te<L.value)&&(y<=2&&N>=100||X.value.push(a.itemId))}else s.add({severity:"error",summary:"Error",detail:i.msg,life:3e3})}}catch(i){console.error(i)}},Be=async()=>{let a=0;for(;a<=f.value.length;){const o=[];for(let i=0;i<=W.value&&a<=f.value.length;i++,a++){const c=f.value[a];Q.value=Math.round((a+1)*(100/f.value.length)),o.push(me(c,!1).then(v=>{}).catch(v=>{console.log(`error : ${v}`),s.add({severity:"error",summary:"Error",detail:`Produk gagal ${c.itemId}`,life:3e3})}))}await Promise.all(o).then(i=>{s.add({severity:"success",summary:"Yihaaaa",detail:"Task selesai",life:3e3})})}for(let o=0;o<X.value.length;o++){const i=X.value[o];f.value=f.value.filter(c=>c.itemId!==i)}X.value=[]},O=m(),fe=m(),J=m(),ee=m(!1),Pe=async()=>{fe.value=await $fetch(`/api/google-suggest?kw=${O.value}`)},he=async()=>{ee.value=!0,J.value=await $fetch("/api/affSearch",{method:"POST",body:{cookies:I.value,kw:O.value}}),t.value="";let a=0;for(let o=0;o<J.value.length;o++){const i=J.value[o],c=xe(i.batch_item_for_item_card_full.ctime);let v=Math.round(i.batch_item_for_item_card_full.historical_sold/c);const d=Number(String(i.seller_commission_rate).replace("%","")),b=Number(String(i.default_commission_rate).replace("%",""))-d,$=Number(i.batch_item_for_item_card_full.price.slice(0,-5));let z=isNaN(v)===!0?0:v;const Y=b/100*$>=1e4?1e4:b/100*$,H=Number(d)/100*$+Y,D=Number(i.batch_item_for_item_card_full.item_rating.rating_star);b+d>=P.value&&Number.isFinite(v)&&$>=L.value&&(v>=T.value&&D>0?f.value.some(M=>M.itemId===i.item_id)||(a++,f.value.push({itemId:i.item_id,isOfficial:i.batch_item_for_item_card_full.is_official_shop,shopId:i.batch_item_for_item_card_full.shop_id,name:i.batch_item_for_item_card_full.name,link:i.product_link,com_extra:String(i.seller_commission_rate).replace("%",""),rating:Number(D).toFixed(2),com_shopee:0,com_total:b+d,com_net:H,price:$,sold:i.batch_item_for_item_card_full.sold,stock:i.batch_item_for_item_card_full.stock,added:c,sold_total:i.batch_item_for_item_card_full.historical_sold,monthly:z,popup:"-"})):c<=2&&v>=100&&D>0&&(f.value.some(M=>M.itemId===i.item_id)||(a++,f.value.push({itemId:i.item_id,isOfficial:i.batch_item_for_item_card_full.is_official_shop,shopId:i.batch_item_for_item_card_full.shop_id,name:i.batch_item_for_item_card_full.name,link:i.product_link,rating:Number(D).toFixed(2),com_extra:String(i.seller_commission_rate).replace("%",""),com_shopee:0,com_total:b,com_net:H,price:$,sold:i.batch_item_for_item_card_full.sold,stock:i.batch_item_for_item_card_full.stock,added:c,sold_total:i.batch_item_for_item_card_full.historical_sold,monthly:z,popup:"-"}))))}J.value=null,ee.value=!1,a>0?s.add({severity:"success",summary:"Success",detail:`Ditemukan ${a} produk`,life:3e3}):s.add({severity:"error",summary:"Error",detail:`Tidak ada produk dengan kata kunci ${O.value}`,life:3e3})},Te=async()=>{for(let a=0;a<ue.value.length;a++){const o=ue.value[a].trim();let i=null,c=null;if(o.includes("contents href"))continue;if(ke(o)){const d=Rt(o);if(d.includes("-i.")){const b=d.split("-i.")[1].split(".");b[0]+b[1],i=b[1],c=b[0]}else if(d.includes("https://shopee.co.id/product/")){const b=d.split("https://shopee.co.id/product/")[1].split("/");b[0]+b[1],i=b[1],c=b[0]}}else Bt(o)&&(i=o,c=111111);const v=f.value.some(d=>d.itemId===i);console.log(`Status ${v}`),v?console.log(`Skipped item with id ${i}`):f.value.push({itemId:i,shopId:c,name:"",link:"",com_extra:0,com_shopee:0,com_total:0,com_net:0,price:0,sold:0,stock:0,added:0,sold_total:0,monthly:0,popup:"-"})}t.value=""},K=m(!1);m([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]);const Ae=async()=>{oe.authStore.clear(),g.$reset(),pe()},Ee=async()=>{const a=await $fetch("/api/getAffiliateUserInfo",{method:"post",body:{cookies:I.value}});a.data&&(s.add({severity:"success",summary:"Berhasil",detail:`Cookie berhasil di masukkan dengan nama ${a.data.name}`,life:3e3}),w.value=a.data)};le();const Ne=a=>{let{data:o,newValue:i,field:c}=a;o[c]=i},C=m();m(!1);const E=m(!1),Fe=a=>{C.value=a,E.value=!0},Ue=a=>{if(a===5)return"success";if(a===4)return"info";if(a===3)return"warning";if(a<=2)return"danger"},Oe=()=>{f.value=f.value.filter(a=>a.itemId!==C.value.itemId),E.value=!1,C.value=null,s.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},ve=m(),Ke=()=>{ve.value.exportCSV()},je=le(),Ye=async()=>{await Ae(),window.location.reload()},{toClipboard:He}=ht(),Ze=async()=>{try{if(C.value){const a=C.value.map(o=>o.link);await He(String(a.join(`
`))),s.add({severity:"success",summary:"Success",detail:`${C.value.length} Links Copied To Clipboard`,life:2e3,group:"bc"})}}catch(a){console.error(a)}},qe=()=>{je.require({message:"Yakin akan menghapus hasil?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{f.value=[],s.add({severity:"info",summary:"Confirmed",detail:"Data result berhasil dihapus",life:3e3})},reject:()=>{s.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})};Vt({title:"BGS Riset - Tools Riset Produk Shopee Affiliate"});const Ge=()=>{const a=new Date,o=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),c=String(a.getDate()).padStart(2,"0"),v=String(a.getHours()).padStart(2,"0"),d=String(a.getMinutes()).padStart(2,"0"),b=String(a.getSeconds()).padStart(2,"0");return`${o}${i}${c}_${v}${d}${b}`},We=be(()=>"riset-data-"+Ge());return(a,o)=>{const i=De,c=Le,v=yt,d=Ce,b=Ie,$=_t,z=kt,Y=wt,H=xt,D=Se,j=Ct,M=$t,te=St,y=It,N=Lt,Xe=Dt,Qe=gt;return _(),x("div",ln,[r(b,{visible:h(K),"onUpdate:visible":o[8]||(o[8]=l=>S(K)?K.value=l:null),header:"Drawer",position:"full"},{header:u(()=>[p("div",sn,[r(i,{image:"/android-chrome-512x512.png",shape:"circle"}),cn])]),footer:u(()=>[r(d,{label:"Check",outlined:"",text:"",severity:"success",onClick:Ee,autofocus:"",size:"small"}),r(d,{label:"Cancel",outlined:"",text:"",severity:"danger",onClick:o[6]||(o[6]=l=>K.value=!1),autofocussize:"small"}),r(d,{label:"Save",outlined:"",severity:"info",onClick:o[7]||(o[7]=l=>K.value=!1),autofocus:"",size:"small"})]),default:u(()=>[dn,p("div",un,[r(c,{modelValue:h(I),"onUpdate:modelValue":o[0]||(o[0]=l=>S(I)?I.value=l:null),rows:"10",cols:"30",class:"w-full"},null,8,["modelValue"])]),p("div",pn,[mn,r(v,{modelValue:h(P),"onUpdate:modelValue":o[1]||(o[1]=l=>S(P)?P.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",fn,[hn,r(v,{modelValue:h(T),"onUpdate:modelValue":o[2]||(o[2]=l=>S(T)?T.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",vn,[gn,r(v,{modelValue:h(W),"onUpdate:modelValue":o[3]||(o[3]=l=>S(W)?W.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",bn,[yn,r(v,{modelValue:h(L),"onUpdate:modelValue":o[4]||(o[4]=l=>S(L)?L.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",_n,[kn,r(v,{modelValue:h(B),"onUpdate:modelValue":o[5]||(o[5]=l=>S(B)?B.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),wn]),_:1},8,["visible"]),r(Qe,null,{title:u(()=>[Z("Riset Produk")]),content:u(()=>[r($,null,{start:u(()=>[r(d,{icon:"pi pi-pencil",class:"mr-2",severity:"success",label:"Cookies",onClick:o[9]||(o[9]=l=>K.value=!0),size:"small"}),r(d,{severity:"warn",label:"Clear Data",icon:"pi pi-times",iconPos:"left",onClick:qe,size:"small",class:"mr-2"}),r(d,{severity:"contrast",label:"Copy Link",icon:"pi pi-times",iconPos:"left",onClick:Ze,size:"small",class:"mr-2"})]),center:u(()=>[]),end:u(()=>[r(d,{severity:"warn",label:"Logout",icon:"pi pi-sign-out",iconPos:"left",onClick:Ye,class:"mr-2",size:"small"})]),_:1}),r(z),xn,p("div",Cn,[r(Y,{modelValue:h(O),"onUpdate:modelValue":o[10]||(o[10]=l=>S(O)?O.value=l:null),dropdown:"",suggestions:h(fe),onComplete:Pe,placeholder:"Masukkan keyword",class:"w-full mr-3",onKeyup:bt(he,["enter"]),fluid:""},null,8,["modelValue","suggestions"]),r(d,{class:"mr-2",severity:"success",label:"Cari Barang",onClick:he,icon:"pi pi-search",loading:h(ee),style:{"min-width":"10rem"}},null,8,["loading"])]),r(z),r(c,{modelValue:h(t),"onUpdate:modelValue":o[11]||(o[11]=l=>S(t)?t.value=l:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"]),r(d,{icon:"pi pi-plus",class:"mr-2",severity:"success",label:"Process URL",onClick:Te,fluid:"",size:"small"}),r(z),r(H,{value:h(Q),showValue:"",class:"mb-3"},null,8,["value"]),r($,{class:"mb-6"},{start:u(()=>[]),end:u(()=>[p("div",$n,[r(d,{label:"Delete",icon:"pi pi-times",severity:"warn",onClick:Me,size:"small"}),r(d,{label:"Export",icon:"pi pi-upload",severity:"help",onClick:o[12]||(o[12]=l=>Ke(l)),size:"small"}),r(d,{icon:"pi pi-refresh",label:"Refresh",raised:"",onClick:Be,size:"small"})])]),_:1}),r(N,{filters:h(n),"onUpdate:filters":o[14]||(o[14]=l=>S(n)?n.value=l:null),value:h(f),loading:h(ee),size:"small",exportFilename:h(We),selection:h(C),"onUpdate:selection":o[15]||(o[15]=l=>S(C)?C.value=l:null),ref_key:"dt",ref:ve,editMode:"cell",class:"text-sm",dataKey:"itemId",globalFilterFields:["name","link"],onCellEditComplete:Ne,sele:"",pt:{table:{style:"min-width: 50rem"},column:{bodycell:({state:l})=>({class:[{"pt-0 pb-0":l.d_editing}]})}}},{header:u(()=>{var l;return[p("div",Sn,[p("div",In,[p("span",Ln,[Z("List Produk "),r(D,{value:`Total: ${(l=h(f))==null?void 0:l.length}`,severity:"warn",class:"text-xl font bold"},null,8,["value"])])]),p("div",Dn,[r(te,null,{default:u(()=>[r(j,null,{default:u(()=>[Vn]),_:1}),r(M,{modelValue:h(n).global.value,"onUpdate:modelValue":o[13]||(o[13]=V=>h(n).global.value=V),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])])]}),default:u(()=>[r(y,{selectionMode:"multiple",headerStyle:"width: 3rem"}),r(y,{field:"itemId",header:"ITEMID"},{body:u(({data:l})=>[p("a",{href:`https://affiliate.shopee.co.id/offer/product_offer/${l.itemId}`,target:"_blank"},U(l.itemId),9,zn)]),_:1}),r(y,{field:"name",header:"NAME",sortable:"",style:ye([{width:"25%"},{display:h(de).name?"":"none"}])},null,8,["style"]),r(y,{field:"isOfficial",header:"MALL",sortable:""},{body:u(({data:l})=>[r(D,{value:l.isOfficial?"Y":"N",severity:l.isOfficial?"warn":"success"},null,8,["value","severity"])]),_:1}),r(y,{field:"com_total",header:"COM%",sortable:"",style:ye({display:h(de).com_total?"":"none"})},null,8,["style"]),r(y,{field:"com_net",header:"COMRP",sortable:""},{body:u(({data:l})=>[Z(U(("formatCurrency"in a?a.formatCurrency:h(_e))(l.com_net)),1)]),_:1}),r(y,{field:"price",header:"PRICE",sortable:""},{body:u(({data:l})=>[Z(U(("formatCurrency"in a?a.formatCurrency:h(_e))(Number(l.price))),1)]),_:1}),r(y,{field:"sold_total",header:"SOLD",sortable:""}),r(y,{field:"stock",header:"STOCK",sortable:""}),r(y,{field:"added",header:"ADDED",sortable:""}),r(y,{field:"monthly",header:"V/M",sortable:""}),r(y,{field:"rating",header:"RATING",sortable:""},{body:u(({data:l})=>[r(D,{severity:Ue(l.rating)},{default:u(()=>[Z(U(Number(l.rating).toFixed(2)),1)]),_:2},1032,["severity"])]),_:1}),r(y,{field:"link",header:"LINK",class:"text-wrap",sortable:""},{body:u(({data:l,field:V})=>[r(D,{severity:"warn"},{default:u(()=>[p("a",{href:l.link,target:"_blank",rel:"noopener"},"OPEN",8,Mn)]),_:2},1024)]),_:1}),r(y,{field:"popup",header:"POPUP",sortable:""},{body:u(({data:l,field:V})=>[r(M,{modelValue:l[V],"onUpdate:modelValue":re=>l[V]=re},null,8,["modelValue","onUpdate:modelValue"])]),editor:u(({data:l,field:V})=>[r(M,{modelValue:l[V],"onUpdate:modelValue":re=>l[V]=re},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),r(y,{exportable:!1,style:{}},{body:u(({data:l})=>[r(d,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:V=>Fe(l),size:"small"},null,8,["onClick"])]),_:1}),r(y,{exportable:!1,style:{}},{body:u(l=>[r(d,{icon:"pi pi-sync",outlined:"",rounded:"",severity:"success",size:"small",onClick:V=>me(l.data,!0)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value","loading","exportFilename","selection","pt"]),r(Xe,{visible:h(E),"onUpdate:visible":o[17]||(o[17]=l=>S(E)?E.value=l:null),header:"Confirm",modal:!0},{footer:u(()=>[r(d,{label:"No",icon:"pi pi-times",text:"",onClick:o[16]||(o[16]=l=>E.value=!1),size:"small"}),r(d,{label:"Yes",icon:"pi pi-check",text:"",onClick:Oe,size:"small"})]),default:u(()=>[p("div",Rn,[Bn,h(E)?(_(),x("span",Pn,"Are you sure you want to delete the selected products?")):R("",!0)])]),_:1},8,["visible"])]),_:1})])}}});export{Fn as default};
