import{N as re,O as ie,t as _,v as $,P as Q,Q as w,R as me,S as R,T as F,x as f,y as U,Z as de,U as nt,V as at,W as ot,X as rt,Y as it,I as Le,_ as st,$ as lt,g as ke,a0 as ct,A as p,z as i,a1 as dt,a2 as ut,a3 as pt,a4 as De,a5 as mt,d as ft,u as ht,r as m,E as vt,i as we,a6 as ue,o as gt,a7 as E,F as v,G as I,a8 as pe,m as bt,a9 as yt,B as W,aa as _t,ab as xe,ac as kt,ad as wt,ae as xt,af as Ct,ag as $t,ah as St,H as It,ai as Lt,aj as Dt,ak as Vt,al as zt}from"./BqN5Y6l5.js";import{u as Mt}from"./DzW6lSnu.js";import{u as Rt}from"./Db8yNUVi.js";import{u as Bt}from"./D1u7w6TQ.js";const Ce=e=>e.toLocaleString("id-ID",{minimumFractionDigits:0,maximumFractionDigits:0,style:"currency",currency:"IDR"}),$e=e=>{try{return new URL(e),!0}catch{return!1}},Pt=e=>{const n=new URL(e);return n.search="",n.toString()},Se=e=>e.replace("%",""),X=e=>e.replace("Rp","").replace(".","").replace(" ",""),Ie=e=>{const n=new Date(e*1e3),t=new Date,g=t.getFullYear()-n.getFullYear(),C=t.getMonth()-n.getMonth();return g*12+C},At=e=>!isNaN(parseFloat(e))&&isFinite(e);var Et=function(n){var t=n.dt;return`
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
`)},Tt={root:function(n){var t=n.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Nt=re.extend({name:"tag",theme:Et,classes:Tt}),Ft={name:"BaseTag",extends:ie,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Nt,provide:function(){return{$pcTag:this,$parentInstance:this}}},Ve={name:"Tag",extends:Ft,inheritAttrs:!1};function Ut(e,n,t,g,C,d){return _(),$("span",w({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(_(),Q(me(e.$slots.icon),w({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(_(),$("span",w({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):R("",!0),e.value!=null||e.$slots.default?F(e.$slots,"default",{key:2},function(){return[f("span",w({class:e.cx("label")},e.ptm("label")),U(e.value),17)]}):R("",!0)],16)}Ve.render=Ut;var Ot=function(n){var t=n.dt;return`
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
`)},Kt={mask:function(n){var t=n.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},jt={mask:function(n){var t=n.instance,g=n.props,C=["left","right","top","bottom"],d=C.find(function(O){return O===g.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":g.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},d?"p-drawer-".concat(d):""]},root:function(n){var t=n.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Yt=re.extend({name:"drawer",theme:Ot,classes:jt,inlineStyles:Kt}),Ht={name:"BaseDrawer",extends:ie,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Yt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},ze={name:"Drawer",extends:Ht,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(n){n?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&de.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&de.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&nt(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&de.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(C){return C&&C.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.$slots.footer&&n(this.footerContainer),t||(t=this.closeButton))),t&&at(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ot()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&rt()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},footerContainerRef:function(n){this.footerContainer=n},closeButtonRef:function(n){this.closeButton=n?n.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:it},components:{Button:Le,Portal:st,TimesIcon:lt}},Zt=["aria-modal"];function qt(e,n,t,g,C,d){var O=ke("Button"),K=ke("Portal"),k=ct("focustrap");return _(),Q(K,null,{default:p(function(){return[C.containerVisible?(_(),$("div",w({key:0,ref:d.maskRef,onMousedown:n[0]||(n[0]=function(){return d.onMaskClick&&d.onMaskClick.apply(d,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[i(dt,w({name:"p-drawer",onEnter:d.onEnter,onAfterEnter:d.onAfterEnter,onBeforeLeave:d.onBeforeLeave,onLeave:d.onLeave,onAfterLeave:d.onAfterLeave,appear:""},e.ptm("transition")),{default:p(function(){return[e.visible?ut((_(),$("div",w({key:0,ref:d.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?F(e.$slots,"container",{key:0,closeCallback:d.hide}):(_(),$(pt,{key:1},[f("div",w({ref:d.headerContainerRef,class:e.cx("header")},e.ptm("header")),[F(e.$slots,"header",{class:De(e.cx("title"))},function(){return[e.header?(_(),$("div",w({key:0,class:e.cx("title")},e.ptm("title")),U(e.header),17)):R("",!0)]}),e.showCloseIcon?(_(),Q(O,w({key:0,ref:d.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":d.closeAriaLabel,unstyled:e.unstyled,onClick:d.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:p(function(b){return[F(e.$slots,"closeicon",{},function(){return[(_(),Q(me(e.closeIcon?"span":"TimesIcon"),w({class:[e.closeIcon,b.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):R("",!0)],16),f("div",w({ref:d.contentRef,class:e.cx("content")},e.ptm("content")),[F(e.$slots,"default")],16),e.$slots.footer?(_(),$("div",w({key:0,ref:d.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[F(e.$slots,"footer")],16)):R("",!0)],64))],16,Zt)),[[k]]):R("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):R("",!0)]}),_:3})}ze.render=qt;var Gt=function(n){var t=n.dt;return`
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
`)},Wt={root:function(n){var t=n.instance,g=n.props;return["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":g.autoResize,"p-invalid":g.invalid,"p-variant-filled":g.variant?g.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-textarea-fluid":t.hasFluid}]}},Xt=re.extend({name:"textarea",theme:Gt,classes:Wt}),Qt={name:"BaseTextarea",extends:ie,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Xt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Me={name:"Textarea",extends:Qt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(n){this.autoResize&&this.resize(),this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return mt(this.fluid)?!!this.$pcFluid:this.fluid}}},Jt=["value","aria-invalid"];function en(e,n,t,g,C,d){return _(),$("textarea",w({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return d.onInput&&d.onInput.apply(d,arguments)})},e.ptmi("root",d.ptmParams)),null,16,Jt)}Me.render=en;var tn=function(n){var t=n.dt;return`
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
`)},nn={root:function(n){var t=n.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},an=re.extend({name:"avatar",theme:tn,classes:nn}),on={name:"BaseAvatar",extends:ie,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:an,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},Re={name:"Avatar",extends:on,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},rn=["aria-labelledby","aria-label"],sn=["src","alt"];function ln(e,n,t,g,C,d){return _(),$("div",w({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[F(e.$slots,"default",{},function(){return[e.label?(_(),$("span",w({key:0,class:e.cx("label")},e.ptm("label")),U(e.label),17)):e.$slots.icon?(_(),Q(me(e.$slots.icon),{key:1,class:De(e.cx("icon"))},null,8,["class"])):e.icon?(_(),$("span",w({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(_(),$("img",w({key:3,src:e.image,alt:e.ariaLabel,onError:n[0]||(n[0]=function(){return d.onError&&d.onError.apply(d,arguments)})},e.ptm("image")),null,16,sn)):R("",!0)]})],16,rn)}Re.render=ln;const cn={class:""},dn={class:"inline-flex items-center justify-center gap-2"},un=f("span",{class:"font-bold whitespace-nowrap"},"Pengaturan Aplikasi",-1),pn=f("span",{class:"text-surface-500 dark:text-surface-400 block mb-3"},"Affiliate Cookie",-1),mn={class:"flex items-center gap-4 mb-4 w-full"},fn={class:"flex flex-col gap-2"},hn=f("label",{for:"username"},"Minimal Komisi %",-1),vn={class:"flex flex-col gap-2"},gn=f("label",{for:"username"},"Minimal View Perbulan",-1),bn={class:"flex flex-col gap-2"},yn=f("label",{for:"username"},"Max Request / Aksi",-1),_n={class:"flex flex-col gap-2"},kn=f("label",{for:"username"},"Minimal Harga",-1),wn={class:"flex flex-col gap-2"},xn=f("label",{for:"username"},"Minimal Rating",-1),Cn=f("p",{class:"m-1"},null,-1),$n=f("div",null,null,-1),Sn={class:"flex w-full"},In={class:"flex space-x-1"},Ln={style:{"text-align":"left"},class:"flex"},Dn={style:{"text-align":"left"}},Vn={class:"text-xl font-bold"},zn={class:"ml-auto"},Mn=f("i",{class:"pi pi-search"},null,-1),Rn=["href"],Bn=["href"],Pn={class:"flex items-center gap-4"},An=f("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),En={key:0},On=ft({__name:"index",setup(e){ht();const n=m({global:{value:null,matchMode:pe.CONTAINS},name:{value:null,matchMode:pe.STARTS_WITH},link:{value:null,matchMode:pe.STARTS_WITH}}),t=m(),g=Rt(),C=m([]),d=m([]),O=m([]),K=m(),k=vt(),b=m(),x=m(),B=m(),j=m(),se=Bt();se.autoCancellation(!1);const P=m(),A=m(),J=m(10),Be=m([{field:"name",header:"ITEMID"},{field:"category",header:"NAME"},{field:"quantity",header:"OFFICIAL"}]),fe=m({itemId:!1,name:!0,isOfficial:!0,com_total:!0,com_net:!0,price:!0,sold_total:!0,stock:!0,added:!0,monthly:!0,link:!0});m(Be.value);const he=we(()=>t.value?t.value.split(`
`).filter(o=>$e(o)||typeof parseInt(o)=="number"):[]),ee=m([]),Pe=ue(),Ae=()=>{var a;(a=L.value)!=null&&a.length&&Pe.require({message:`Hapus ${L.value.length} data?`,header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{var o;for(let r=0;r<((o=L.value)==null?void 0:o.length);r++){const l=L.value[r];b.value=b.value.filter(u=>u.itemId!==l.itemId),k.add({severity:"success",summary:"Confirmed",detail:"Data berhasil dihapus",life:3e3})}},reject:()=>{k.add({severity:"error",summary:"Rejected",detail:"Tidak jadi hapus",life:3e3})}})},ve=()=>{const{userCookie:a,userInfo:o,risetData:r,comMins:l,monthlyMins:u,priceMins:c,ratingMins:h}=g;x.value=a,K.value=o,b.value=r,B.value=c,j.value=h,A.value=u,P.value=l},te=m(),Ee=async()=>{se.authStore.isValid!==!0&&bt("/auth/login")};gt(async()=>{await Ee(),ve()}),E(A,()=>{g.$patch({monthlyMins:A.value})}),E(P,()=>{g.$patch({comMins:P.value})}),E(b,()=>{g.$patch({risetData:b.value})}),E(x,()=>{g.$patch({userCookie:x.value})}),E(K,()=>{g.$patch({userInfo:K.value})}),E(B,()=>{g.$patch({priceMins:B.value})}),E(j,()=>{g.$patch({ratingMins:j.value})}),E(te,()=>{te.value===100&&k.add({severity:"success",summary:"Selesai",detail:"Task berhasil dijalankan",life:3e3,group:"bc"})}),m(),m([]);const ge=async(a,o=!1)=>{try{if(a&&(a.popup==="-"&&a.name===""||o===!0)){const r=await $fetch(`/api/product-info/${a.itemId}`,{method:"post",body:{cookies:le()}});if(r.data){const l=r.data,u=l.commission_rate.is_capped,c=X(l.commission_rate.commission_cap);a.name=l.batch_item_for_item_card_full.name,a.link=l.product_link,a.shopid=parseInt(String(l.product_link).split("/")[4]);const h=l.commission_rate.app_exist_commission_rate,S=l.commission_rate.app_exist_commission,z=l.commission_rate.shopee_commission_rate,q=l.commission_rate.shopee_commission;a.com_extra=h,a.com_shopee=z;const G=parseInt(Se(h)),D=parseInt(Se(z)),Z=r.data.commission_rate_detail.default_commission_rate/1e3;a.com_total=Z;const M=u==!0?parseInt(X(S))+parseInt(X(c)):parseInt(X(S))+parseInt(X(q));a.com_net=Number(String(r.data.commission_rate.default_commission).replace("Rp","").replace(".","")),a.stock=l.batch_item_for_item_card_full.stock;const oe=l.batch_item_for_item_card_full.price/1e5;a.sold_total=l.batch_item_for_item_card_full.historical_sold,a.sold=l.batch_item_for_item_card_full.sold,a.isOfficial=l.batch_item_for_item_card_full.is_official_shop;const y=Ie(l.batch_item_for_item_card_full.ctime);a.added=y,a.rating=Number(l.batch_item_for_item_card_full.item_rating.rating_star).toFixed(2);let N=Math.round(l.batch_item_for_item_card_full.historical_sold/y);a.monthly=isNaN(N)===!0?0:N,a.price=oe,a.popup="-",(M===0||Z<P.value||N<A.value||!isFinite(N)||oe<B.value)&&(y<=2&&N>=100||ee.value.push(a.itemId))}else k.add({severity:"error",summary:"Error",detail:r.msg,life:3e3})}}catch(r){console.error(r)}},Te=async()=>{let a=0;for(;a<=b.value.length;){const o=[];for(let r=0;r<=J.value&&a<=b.value.length;r++,a++){const l=b.value[a];te.value=Math.round((a+1)*(100/b.value.length)),o.push(ge(l,!1).then(u=>{}).catch(u=>{console.log(`error : ${u}`),k.add({severity:"error",summary:"Error",detail:`Produk gagal ${l.itemId}`,life:3e3})}))}await Promise.all(o).then(r=>{k.add({severity:"success",summary:"Yihaaaa",detail:"Task selesai",life:3e3})})}for(let o=0;o<ee.value.length;o++){const r=ee.value[o];b.value=b.value.filter(l=>l.itemId!==r)}ee.value=[]},Y=m(),be=m(),ne=m(),ae=m(!1),Ne=async()=>{be.value=await $fetch(`/api/google-suggest?kw=${Y.value}`)},ye=async()=>{ae.value=!0,ne.value=await $fetch("/api/affSearch",{method:"POST",body:{cookies:le(),kw:Y.value}}),t.value="";let a=0;for(let o=0;o<ne.value.length;o++){const r=ne.value[o],l=Ie(r.batch_item_for_item_card_full.ctime);let u=Math.round(r.batch_item_for_item_card_full.historical_sold/l);const c=Number(String(r.seller_commission_rate).replace("%","")),h=Number(String(r.default_commission_rate).replace("%",""))-c,S=Number(r.batch_item_for_item_card_full.price.slice(0,-5));let z=isNaN(u)===!0?0:u;const q=h/100*S>=1e4?1e4:h/100*S,G=Number(c)/100*S+q,D=Number(r.batch_item_for_item_card_full.item_rating.rating_star);h+c>=P.value&&Number.isFinite(u)&&S>=B.value&&(u>=A.value&&D>0?b.value.some(M=>M.itemId===r.item_id)||(a++,b.value.push({itemId:r.item_id,isOfficial:r.batch_item_for_item_card_full.is_official_shop,shopId:r.batch_item_for_item_card_full.shop_id,name:r.batch_item_for_item_card_full.name,link:r.product_link,com_extra:String(r.seller_commission_rate).replace("%",""),rating:Number(D).toFixed(2),com_shopee:0,com_total:h+c,com_net:G,price:S,sold:r.batch_item_for_item_card_full.sold,stock:r.batch_item_for_item_card_full.stock,added:l,sold_total:r.batch_item_for_item_card_full.historical_sold,monthly:z,popup:"-"})):l<=2&&u>=100&&D>0&&(b.value.some(M=>M.itemId===r.item_id)||(a++,b.value.push({itemId:r.item_id,isOfficial:r.batch_item_for_item_card_full.is_official_shop,shopId:r.batch_item_for_item_card_full.shop_id,name:r.batch_item_for_item_card_full.name,link:r.product_link,rating:Number(D).toFixed(2),com_extra:String(r.seller_commission_rate).replace("%",""),com_shopee:0,com_total:h,com_net:G,price:S,sold:r.batch_item_for_item_card_full.sold,stock:r.batch_item_for_item_card_full.stock,added:l,sold_total:r.batch_item_for_item_card_full.historical_sold,monthly:z,popup:"-"}))))}ne.value=null,ae.value=!1,a>0?k.add({severity:"success",summary:"Success",detail:`Ditemukan ${a} produk`,life:3e3}):k.add({severity:"error",summary:"Error",detail:`Tidak ada produk dengan kata kunci ${Y.value}`,life:3e3})},Fe=async()=>{for(let a=0;a<he.value.length;a++){const o=he.value[a].trim();let r=null,l=null;if(o.includes("contents href"))continue;if($e(o)){const c=Pt(o);if(c.includes("-i.")){const h=c.split("-i.")[1].split(".");h[0]+h[1],r=h[1],l=h[0]}else if(c.includes("https://shopee.co.id/product/")){const h=c.split("https://shopee.co.id/product/")[1].split("/");h[0]+h[1],r=h[1],l=h[0]}}else At(o)&&(r=o,l=111111);const u=b.value.some(c=>c.itemId===r);console.log(`Status ${u}`),u?console.log(`Skipped item with id ${r}`):b.value.push({itemId:r,shopId:l,name:"",link:"",com_extra:0,com_shopee:0,com_total:0,com_net:0,price:0,sold:0,stock:0,added:0,sold_total:0,monthly:0,popup:"-"})}t.value=""},H=m(!1);m([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]);const Ue=async()=>{se.authStore.clear(),g.$reset(),ve()},le=()=>{if(!x.value)return"";const a=x.value.includes(`
`)?x.value.split(`
`).filter(o=>o.trim()!==""):[x.value];return a[Math.floor(Math.random()*a.length)]},Oe=async()=>{const a=await $fetch("/api/getAffiliateUserInfo",{method:"post",body:{cookies:le()}});a.data&&(k.add({severity:"success",summary:"Berhasil",detail:`Cookie berhasil di masukkan dengan nama ${a.data.name}`,life:3e3}),K.value=a.data)};ue();const Ke=a=>{let{data:o,newValue:r,field:l}=a;o[l]=r},L=m();m(!1);const T=m(!1),je=a=>{L.value=a,T.value=!0},Ye=a=>{if(a===5)return"success";if(a===4)return"info";if(a===3)return"warning";if(a<=2)return"danger"},He=()=>{b.value=b.value.filter(a=>a.itemId!==L.value.itemId),T.value=!1,L.value=null,k.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},_e=m(),Ze=()=>{_e.value.exportCSV()},qe=ue(),Ge=async()=>{await Ue(),window.location.reload()},We=async()=>{if(d.value=[],C.value=[],!x.value)return"";const a=x.value.includes(`
`)?x.value.split(`
`).filter(l=>l.trim()!==""):[x.value],o=5,r=async(l,u)=>{k.add({severity:"info",summary:"Checking",detail:`Checking cookie ${u+1}`,life:1e3});try{const c=await $fetch("/api/checkCookies",{method:"post",body:{cookies:l}});console.log(c),c.msg==="success"?(k.add({severity:"success",summary:"Cookie Result",detail:`cookie ${u+1} valid`,life:1e3}),O.value.push(l)):c.msg==="no affiliate"?(k.add({severity:"error",summary:"Cookie Result",detail:`cookie ${u+1} no affiliate`,life:1e3}),d.value.push(l)):c.msg==="no login"&&(k.add({severity:"error",summary:"Cookie Result",detail:`cookie ${u+1} no login`,life:1e3}),C.value.push(l))}catch(c){console.error(`Error processing cookie ${u+1}`,c)}};for(let l=0;l<a.length;l+=o){const u=a.slice(l,l+o);await Promise.all(u.map((c,h)=>r(c,l+h)))}x.value=O.value.join(`
`)},Xe=()=>{qe.require({message:"Yakin akan menghapus hasil?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{b.value=[],k.add({severity:"info",summary:"Confirmed",detail:"Data result berhasil dihapus",life:3e3})},reject:()=>{k.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})};Mt({title:"BGS Riset - Tools Riset Produk Shopee Affiliate"});const Qe=()=>{const a=new Date,o=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0"),u=String(a.getHours()).padStart(2,"0"),c=String(a.getMinutes()).padStart(2,"0"),h=String(a.getSeconds()).padStart(2,"0");return`${o}${r}${l}_${u}${c}${h}`},Je=we(()=>"riset-data-"+Qe());return(a,o)=>{const r=Re,l=Me,u=kt,c=Le,h=ze,S=wt,z=xt,q=Ct,G=$t,D=Ve,Z=St,M=It,oe=Lt,y=Dt,N=Vt,et=zt,tt=yt;return _(),$("div",cn,[i(h,{visible:v(H),"onUpdate:visible":o[8]||(o[8]=s=>I(H)?H.value=s:null),header:"Drawer",position:"full"},{header:p(()=>[f("div",dn,[i(r,{image:"/android-chrome-512x512.png",shape:"circle"}),un])]),footer:p(()=>[i(c,{label:"Check",outlined:"",text:"",severity:"success",onClick:Oe,autofocus:"",size:"small"}),i(c,{label:"Cancel",outlined:"",text:"",severity:"danger",onClick:o[6]||(o[6]=s=>H.value=!1),autofocussize:"small"}),i(c,{label:"Save",outlined:"",severity:"info",onClick:o[7]||(o[7]=s=>H.value=!1),autofocus:"",size:"small"})]),default:p(()=>[pn,f("div",mn,[i(l,{modelValue:v(x),"onUpdate:modelValue":o[0]||(o[0]=s=>I(x)?x.value=s:null),rows:"10",cols:"30",class:"w-full"},null,8,["modelValue"])]),f("div",fn,[hn,i(u,{modelValue:v(P),"onUpdate:modelValue":o[1]||(o[1]=s=>I(P)?P.value=s:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),f("div",vn,[gn,i(u,{modelValue:v(A),"onUpdate:modelValue":o[2]||(o[2]=s=>I(A)?A.value=s:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),f("div",bn,[yn,i(u,{modelValue:v(J),"onUpdate:modelValue":o[3]||(o[3]=s=>I(J)?J.value=s:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),f("div",_n,[kn,i(u,{modelValue:v(B),"onUpdate:modelValue":o[4]||(o[4]=s=>I(B)?B.value=s:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),f("div",wn,[xn,i(u,{modelValue:v(j),"onUpdate:modelValue":o[5]||(o[5]=s=>I(j)?j.value=s:null),inputId:"integeronly",fluid:"",class:"w-15"},null,8,["modelValue"])]),Cn]),_:1},8,["visible"]),i(tt,null,{title:p(()=>[W("Riset Produk")]),content:p(()=>[i(S,null,{start:p(()=>[i(c,{icon:"pi pi-pencil",class:"mr-2",severity:"success",label:"Cookies",onClick:o[9]||(o[9]=s=>H.value=!0),size:"small"}),i(c,{severity:"warn",label:"Clear Data",icon:"pi pi-times",iconPos:"left",onClick:Xe,size:"small",class:"mr-2"}),i(c,{severity:"warn",label:"Filter Cookies",icon:"pi pi-times",iconPos:"left",onClick:We,size:"small",class:"mr-2"})]),center:p(()=>[]),end:p(()=>[i(c,{severity:"warn",label:"Logout",icon:"pi pi-sign-out",iconPos:"left",onClick:Ge,class:"mr-2",size:"small"})]),_:1}),i(z),$n,f("div",Sn,[i(q,{modelValue:v(Y),"onUpdate:modelValue":o[10]||(o[10]=s=>I(Y)?Y.value=s:null),dropdown:"",suggestions:v(be),onComplete:Ne,placeholder:"Masukkan keyword",class:"w-full mr-3",onKeyup:_t(ye,["enter"]),fluid:""},null,8,["modelValue","suggestions"]),i(c,{class:"mr-2",severity:"success",label:"Cari Barang",onClick:ye,icon:"pi pi-search",loading:v(ae),style:{"min-width":"10rem"}},null,8,["loading"])]),i(z),i(l,{modelValue:v(t),"onUpdate:modelValue":o[11]||(o[11]=s=>I(t)?t.value=s:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"]),i(c,{icon:"pi pi-plus",class:"mr-2",severity:"success",label:"Process URL",onClick:Fe,fluid:"",size:"small"}),i(z),i(G,{value:v(te),showValue:"",class:"mb-3"},null,8,["value"]),i(S,{class:"mb-6"},{start:p(()=>[]),end:p(()=>[f("div",In,[i(c,{label:"Delete",icon:"pi pi-times",severity:"warn",onClick:Ae,size:"small"}),i(c,{label:"Export",icon:"pi pi-upload",severity:"help",onClick:o[12]||(o[12]=s=>Ze(s)),size:"small"}),i(c,{icon:"pi pi-refresh",label:"Refresh",raised:"",onClick:Te,size:"small"})])]),_:1}),i(N,{filters:v(n),"onUpdate:filters":o[14]||(o[14]=s=>I(n)?n.value=s:null),value:v(b),loading:v(ae),size:"small",exportFilename:v(Je),selection:v(L),"onUpdate:selection":o[15]||(o[15]=s=>I(L)?L.value=s:null),ref_key:"dt",ref:_e,editMode:"cell",class:"text-sm",dataKey:"itemId",globalFilterFields:["name","link"],onCellEditComplete:Ke,sele:"",pt:{table:{style:"min-width: 50rem"},column:{bodycell:({state:s})=>({class:[{"pt-0 pb-0":s.d_editing}]})}}},{header:p(()=>{var s;return[f("div",Ln,[f("div",Dn,[f("span",Vn,[W("List Produk "),i(D,{value:`Total: ${(s=v(b))==null?void 0:s.length}`,severity:"warn",class:"text-xl font bold"},null,8,["value"])])]),f("div",zn,[i(oe,null,{default:p(()=>[i(Z,null,{default:p(()=>[Mn]),_:1}),i(M,{modelValue:v(n).global.value,"onUpdate:modelValue":o[13]||(o[13]=V=>v(n).global.value=V),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])])]}),default:p(()=>[i(y,{selectionMode:"multiple",headerStyle:"width: 3rem"}),i(y,{field:"itemId",header:"ITEMID"},{body:p(({data:s})=>[f("a",{href:`https://affiliate.shopee.co.id/offer/product_offer/${s.itemId}`,target:"_blank"},U(s.itemId),9,Rn)]),_:1}),i(y,{field:"name",header:"NAME",sortable:"",style:xe([{width:"25%"},{display:v(fe).name?"":"none"}])},null,8,["style"]),i(y,{field:"isOfficial",header:"MALL",sortable:""},{body:p(({data:s})=>[i(D,{value:s.isOfficial?"Y":"N",severity:s.isOfficial?"warn":"success"},null,8,["value","severity"])]),_:1}),i(y,{field:"com_total",header:"COM%",sortable:"",style:xe({display:v(fe).com_total?"":"none"})},null,8,["style"]),i(y,{field:"com_net",header:"COMRP",sortable:""},{body:p(({data:s})=>[W(U(("formatCurrency"in a?a.formatCurrency:v(Ce))(s.com_net)),1)]),_:1}),i(y,{field:"price",header:"PRICE",sortable:""},{body:p(({data:s})=>[W(U(("formatCurrency"in a?a.formatCurrency:v(Ce))(Number(s.price))),1)]),_:1}),i(y,{field:"sold_total",header:"SOLD",sortable:""}),i(y,{field:"stock",header:"STOCK",sortable:""}),i(y,{field:"added",header:"ADDED",sortable:""}),i(y,{field:"monthly",header:"V/M",sortable:""}),i(y,{field:"rating",header:"RATING",sortable:""},{body:p(({data:s})=>[i(D,{severity:Ye(s.rating)},{default:p(()=>[W(U(Number(s.rating).toFixed(2)),1)]),_:2},1032,["severity"])]),_:1}),i(y,{field:"link",header:"LINK",class:"text-wrap",sortable:""},{body:p(({data:s,field:V})=>[i(D,{severity:"warn"},{default:p(()=>[f("a",{href:s.link,target:"_blank",rel:"noopener"},"OPEN",8,Bn)]),_:2},1024)]),_:1}),i(y,{field:"popup",header:"POPUP",sortable:""},{body:p(({data:s,field:V})=>[i(M,{modelValue:s[V],"onUpdate:modelValue":ce=>s[V]=ce,style:{width:"60px"}},null,8,["modelValue","onUpdate:modelValue"])]),editor:p(({data:s,field:V})=>[i(M,{modelValue:s[V],"onUpdate:modelValue":ce=>s[V]=ce,style:{width:"60px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(y,{exportable:!1,style:{}},{body:p(({data:s})=>[i(c,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:V=>je(s),size:"small"},null,8,["onClick"])]),_:1}),i(y,{exportable:!1,style:{}},{body:p(s=>[i(c,{icon:"pi pi-sync",outlined:"",rounded:"",severity:"success",size:"small",onClick:V=>ge(s.data,!0)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value","loading","exportFilename","selection","pt"]),i(et,{visible:v(T),"onUpdate:visible":o[17]||(o[17]=s=>I(T)?T.value=s:null),header:"Confirm",modal:!0},{footer:p(()=>[i(c,{label:"No",icon:"pi pi-times",text:"",onClick:o[16]||(o[16]=s=>T.value=!1),size:"small"}),i(c,{label:"Yes",icon:"pi pi-check",text:"",onClick:He,size:"small"})]),default:p(()=>[f("div",Pn,[An,v(T)?(_(),$("span",En,"Are you sure you want to delete the selected products?")):R("",!0)])]),_:1},8,["visible"])]),_:1})])}}});export{On as default};
