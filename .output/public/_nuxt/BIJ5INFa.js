import{P as X,Q,t as y,v as $,R as Y,S as k,T as ie,U as z,V as E,x as p,y as U,Z as ae,W as Xe,X as Qe,Y as Je,_ as et,$ as tt,I as ye,a0 as nt,a1 as at,g as me,a2 as ot,A as u,z as i,a3 as rt,a4 as it,a5 as lt,a6 as ke,a7 as st,d as ct,u as dt,r as f,E as ut,i as he,a8 as oe,o as pt,a9 as B,aa as ft,F as h,G as C,ab as re,m as mt,ac as ht,B as j,ad as vt,ae as ve,af as gt,ag as bt,ah as yt,ai as kt,aj as wt,ak as _t,H as xt,al as $t,am as Ct,an as St,ao as It}from"./Df35IH5J.js";import{u as Lt}from"./CbuP1aCz.js";import{u as Dt}from"./qx1eRyJV.js";import{u as Vt}from"./kf_VOWTY.js";const ge=e=>e.toLocaleString("id-ID",{minimumFractionDigits:0,maximumFractionDigits:0,style:"currency",currency:"IDR"}),be=e=>{try{return new URL(e),!0}catch{return!1}},zt=e=>{const o=new URL(e);return o.search="",o.toString()},Mt=e=>{const o=new Date(e*1e3),t=new Date,v=t.getFullYear()-o.getFullYear(),w=t.getMonth()-o.getMonth();return v*12+w},Bt=e=>!isNaN(parseFloat(e))&&isFinite(e);var Rt=function(o){var t=o.dt;return`
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
`)},Pt={root:function(o){var t=o.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Tt=X.extend({name:"tag",theme:Rt,classes:Pt}),At={name:"BaseTag",extends:Q,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Tt,provide:function(){return{$pcTag:this,$parentInstance:this}}},we={name:"Tag",extends:At,inheritAttrs:!1};function Et(e,o,t,v,w,s){return y(),$("span",k({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(y(),Y(ie(e.$slots.icon),k({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(y(),$("span",k({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):z("",!0),e.value!=null||e.$slots.default?E(e.$slots,"default",{key:2},function(){return[p("span",k({class:e.cx("label")},e.ptm("label")),U(e.value),17)]}):z("",!0)],16)}we.render=Et;var Ut=function(o){var t=o.dt;return`
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
`)},Nt={mask:function(o){var t=o.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},Ft={mask:function(o){var t=o.instance,v=o.props,w=["left","right","top","bottom"],s=w.find(function(m){return m===v.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":v.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},s?"p-drawer-".concat(s):""]},root:function(o){var t=o.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ot=X.extend({name:"drawer",theme:Ut,classes:Ft,inlineStyles:Nt}),Kt={name:"BaseDrawer",extends:Q,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Ot,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},_e={name:"Drawer",extends:Kt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(o){o?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&ae.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&ae.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Xe(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&ae.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(o){this.dismissable&&this.modal&&this.mask===o.target&&this.hide()},focus:function(){var o=function(w){return w&&w.querySelector("[autofocus]")},t=this.$slots.header&&o(this.headerContainer);t||(t=this.$slots.default&&o(this.container),t||(t=this.$slots.footer&&o(this.footerContainer),t||(t=this.closeButton))),t&&Qe(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&Je()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&et()},onKeydown:function(o){o.code==="Escape"&&this.hide()},containerRef:function(o){this.container=o},maskRef:function(o){this.mask=o},contentRef:function(o){this.content=o},headerContainerRef:function(o){this.headerContainer=o},footerContainerRef:function(o){this.footerContainer=o},closeButtonRef:function(o){this.closeButton=o?o.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var o=this;this.outsideClickListener||(this.outsideClickListener=function(t){o.isOutsideClicked(t)&&o.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(o){return this.container&&!this.container.contains(o.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:tt},components:{Button:ye,Portal:nt,TimesIcon:at}},jt=["aria-modal"];function Yt(e,o,t,v,w,s){var m=me("Button"),S=me("Portal"),L=ot("focustrap");return y(),Y(S,null,{default:u(function(){return[w.containerVisible?(y(),$("div",k({key:0,ref:s.maskRef,onMousedown:o[0]||(o[0]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[i(rt,k({name:"p-drawer",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:u(function(){return[e.visible?it((y(),$("div",k({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?E(e.$slots,"container",{key:0,closeCallback:s.hide}):(y(),$(lt,{key:1},[p("div",k({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[E(e.$slots,"header",{class:ke(e.cx("title"))},function(){return[e.header?(y(),$("div",k({key:0,class:e.cx("title")},e.ptm("title")),U(e.header),17)):z("",!0)]}),e.showCloseIcon?(y(),Y(m,k({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":s.closeAriaLabel,unstyled:e.unstyled,onClick:s.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:u(function(M){return[E(e.$slots,"closeicon",{},function(){return[(y(),Y(ie(e.closeIcon?"span":"TimesIcon"),k({class:[e.closeIcon,M.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):z("",!0)],16),p("div",k({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[E(e.$slots,"default")],16),e.$slots.footer?(y(),$("div",k({key:0,ref:s.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[E(e.$slots,"footer")],16)):z("",!0)],64))],16,jt)),[[L]]):z("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):z("",!0)]}),_:3})}_e.render=Yt;var Ht=function(o){var t=o.dt;return`
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
`)},Zt={root:function(o){var t=o.instance,v=o.props;return["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":v.autoResize,"p-invalid":v.invalid,"p-variant-filled":v.variant?v.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-textarea-fluid":t.hasFluid}]}},qt=X.extend({name:"textarea",theme:Ht,classes:Zt}),Gt={name:"BaseTextarea",extends:Q,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:qt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},xe={name:"Textarea",extends:Gt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(o){this.autoResize&&this.resize(),this.$emit("update:modelValue",o.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return st(this.fluid)?!!this.$pcFluid:this.fluid}}},Wt=["value","aria-invalid"];function Xt(e,o,t,v,w,s){return y(),$("textarea",k({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:o[0]||(o[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},e.ptmi("root",s.ptmParams)),null,16,Wt)}xe.render=Xt;var Qt=function(o){var t=o.dt;return`
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
`)},Jt={root:function(o){var t=o.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},en=X.extend({name:"avatar",theme:Qt,classes:Jt}),tn={name:"BaseAvatar",extends:Q,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:en,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},$e={name:"Avatar",extends:tn,inheritAttrs:!1,emits:["error"],methods:{onError:function(o){this.$emit("error",o)}}},nn=["aria-labelledby","aria-label"],an=["src","alt"];function on(e,o,t,v,w,s){return y(),$("div",k({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[E(e.$slots,"default",{},function(){return[e.label?(y(),$("span",k({key:0,class:e.cx("label")},e.ptm("label")),U(e.label),17)):e.$slots.icon?(y(),Y(ie(e.$slots.icon),{key:1,class:ke(e.cx("icon"))},null,8,["class"])):e.icon?(y(),$("span",k({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(y(),$("img",k({key:3,src:e.image,alt:e.ariaLabel,onError:o[0]||(o[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},e.ptm("image")),null,16,an)):z("",!0)]})],16,nn)}$e.render=on;const rn={class:""},ln={class:"inline-flex items-center justify-center gap-2"},sn=p("span",{class:"font-bold whitespace-nowrap"},"Pengaturan Aplikasi",-1),cn=p("span",{class:"text-surface-500 dark:text-surface-400 block mb-3"},"Affiliate Cookie",-1),dn={class:"flex items-center gap-4 mb-4 w-full"},un={class:"flex flex-col gap-2"},pn=p("label",{for:"username"},"Minimal Komisi %",-1),fn={class:"flex flex-col gap-2"},mn=p("label",{for:"username"},"Minimal View Perbulan",-1),hn={class:"flex flex-col gap-2"},vn=p("label",{for:"username"},"Max Request / Aksi",-1),gn={class:"flex flex-col gap-2"},bn=p("label",{for:"username"},"Minimal Harga",-1),yn={class:"flex flex-col gap-2"},kn=p("label",{for:"username"},"Minimal Rating",-1),wn=p("p",{class:"m-1"},null,-1),_n=p("div",null,null,-1),xn={class:"flex w-full"},$n={class:"flex space-x-1"},Cn={style:{"text-align":"left"},class:"flex"},Sn={style:{"text-align":"left"}},In={class:"text-xl font-bold"},Ln={class:"ml-auto"},Dn=p("i",{class:"pi pi-search"},null,-1),Vn=["href"],zn={class:"flex items-center gap-4"},Mn=p("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),Bn={key:0},En=ct({__name:"index",setup(e){dt();const o=f({global:{value:null,matchMode:re.CONTAINS},name:{value:null,matchMode:re.STARTS_WITH},link:{value:null,matchMode:re.STARTS_WITH}}),t=f(),v=Dt(),w=f(),s=ut(),m=f(),S=f(),L=f(),M=f(),J=Vt();J.autoCancellation(!1);const R=f(),P=f(),H=f(10),Ce=f([{field:"name",header:"ITEMID"},{field:"category",header:"NAME"},{field:"quantity",header:"OFFICIAL"}]),le=f({itemId:!1,name:!0,isOfficial:!0,com_total:!0,com_net:!0,price:!0,sold_total:!0,stock:!0,added:!0,monthly:!0,link:!0});f(Ce.value);const se=he(()=>t.value?t.value.split(`
`).filter(r=>be(r)||typeof parseInt(r)=="number"):[]),ee=f([]),Se=oe(),Ie=()=>{var n;(n=x.value)!=null&&n.length&&Se.require({message:`Hapus ${x.value.length} data?`,header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{var r;for(let a=0;a<((r=x.value)==null?void 0:r.length);a++){const c=x.value[a];m.value=m.value.filter(g=>g.itemId!==c.itemId),s.add({severity:"success",summary:"Confirmed",detail:"Data berhasil dihapus",life:3e3})}},reject:()=>{s.add({severity:"error",summary:"Rejected",detail:"Tidak jadi hapus",life:3e3})}})},ce=()=>{const{userCookie:n,userInfo:r,risetData:a,comMins:c,monthlyMins:g,priceMins:d,ratingMins:b}=v;S.value=n,w.value=r,m.value=a,L.value=d,M.value=b,P.value=g,R.value=c},Z=f(),Le=async()=>{J.authStore.isValid!==!0&&mt("/auth/login")};pt(async()=>{await Le(),ce()}),B(P,()=>{v.$patch({monthlyMins:P.value})}),B(R,()=>{v.$patch({comMins:R.value})}),B(m,()=>{v.$patch({risetData:m.value})}),B(S,()=>{v.$patch({userCookie:S.value})}),B(w,()=>{v.$patch({userInfo:w.value})}),B(L,()=>{v.$patch({priceMins:L.value})}),B(M,()=>{v.$patch({ratingMins:M.value})}),B(Z,()=>{Z.value===100&&s.add({severity:"success",summary:"Selesai",detail:"Task berhasil dijalankan",life:3e3,group:"bc"})}),f(),f([]);const de=async(n,r=!1)=>{try{if(n&&(n.popup==="-"&&n.name===""||r===!0)){const a=await $fetch(`/api/product-info/${n.itemId}`,{method:"post",body:{cookies:S.value}});if(a.details){n.name=a.details.name,console.log(n),n.link=a.details.link,n.com_extra=a.details.com_extra,n.com_shopee=a.details.com_shopee,n.com_total=a.details.com_total,n.com_net=a.details.com_net,n.stock=a.details.stock,n.sold_total=a.details.sold_total,n.sold=a.details.sold,n.isOfficial=a.details.isOfficial,n.added=a.details.added,n.rating=a.details.rating;let c=Math.round(a.details.sold_total/a.details.added);n.monthly=isNaN(c)===!0?0:c,n.price=a.details.price,console.log(a.details.popup.length),n.popup=a.popup===null?0:a.popup.length}else s.add({severity:"error",summary:"Error",detail:a.msg,life:3e3})}}catch(a){console.error(a)}},De=async()=>{let n=0;for(;n<=m.value.length;){const r=[];for(let a=0;a<=H.value&&n<=m.value.length;a++,n++){const c=m.value[n];console.log(c),Z.value=Math.round((n+1)*(100/m.value.length)),r.push(de(c,!0).then(g=>{console.log(`Berhasil ${g}`)}).catch(g=>{console.log(`error : ${g}`),s.add({severity:"error",summary:"Error",detail:`Produk gagal ${c.itemId}`,life:3e3})}))}await Promise.all(r).then(a=>{s.add({severity:"success",summary:"Yihaaaa",detail:"Task selesai",life:3e3})})}for(let r=0;r<ee.value.length;r++){const a=ee.value[r];m.value=m.value.filter(c=>c.itemId!==a)}ee.value=[]},N=f(),ue=f(),q=f(),K=f(!1),Ve=async()=>{ue.value=await $fetch(`/api/google-suggest?kw=${N.value}`)},pe=async()=>{K.value=!0;try{q.value=await $fetch("/api/affSearch",{method:"POST",body:{cookies:S.value,kw:N.value}}),t.value="";let n=0;for(let r=0;r<q.value.length;r++){const a=q.value[r],c=Mt(a.batch_item_for_item_card_full.ctime);let g=Math.round(a.batch_item_for_item_card_full.historical_sold/c);const d=Number(String(a.seller_commission_rate).replace("%","")),b=Number(String(a.default_commission_rate).replace("%",""))-d,D=Number(a.batch_item_for_item_card_full.price.slice(0,-5));let O=isNaN(g)===!0?0:g;const te=b/100*D>=1e4?1e4:b/100*D,G=Number(d)/100*D+te,V=Number(a.batch_item_for_item_card_full.item_rating.rating_star);b+d>=R.value&&Number.isFinite(g)&&D>=L.value&&(g>=P.value&&V>0?m.value.some(A=>A.itemId===a.item_id)||(n++,m.value.push({itemId:a.item_id,isOfficial:a.batch_item_for_item_card_full.is_official_shop,shopId:a.batch_item_for_item_card_full.shop_id,name:a.batch_item_for_item_card_full.name,link:a.product_link,com_extra:String(a.seller_commission_rate).replace("%",""),rating:Number(V).toFixed(2),com_shopee:0,com_total:b+d,com_net:G,price:D,sold:a.batch_item_for_item_card_full.sold,stock:a.batch_item_for_item_card_full.stock,added:c,sold_total:a.batch_item_for_item_card_full.historical_sold,monthly:O,popup:"-"})):c<=2&&g>=100&&V>0&&(m.value.some(A=>A.itemId===a.item_id)||(n++,m.value.push({itemId:a.item_id,isOfficial:a.batch_item_for_item_card_full.is_official_shop,shopId:a.batch_item_for_item_card_full.shop_id,name:a.batch_item_for_item_card_full.name,link:a.product_link,rating:Number(V).toFixed(2),com_extra:String(a.seller_commission_rate).replace("%",""),com_shopee:0,com_total:b,com_net:G,price:D,sold:a.batch_item_for_item_card_full.sold,stock:a.batch_item_for_item_card_full.stock,added:c,sold_total:a.batch_item_for_item_card_full.historical_sold,monthly:O,popup:"-"}))))}q.value=null,K.value=!1,n>0?s.add({severity:"success",summary:"Success",detail:`Ditemukan ${n} produk`,life:3e3}):s.add({severity:"error",summary:"Error",detail:`Tidak ada produk dengan kata kunci ${N.value}`,life:3e3})}catch(n){K.value=!1,console.log(n),s.add({severity:"error",summary:"Error",detail:n,life:3e3})}},ze=async()=>{for(let n=0;n<se.value.length;n++){const r=se.value[n].trim();let a=null,c=null;if(r.includes("contents href"))continue;if(be(r)){const d=zt(r);if(d.includes("-i.")){const b=d.split("-i.")[1].split(".");b[0]+b[1],a=b[1],c=b[0]}else if(d.includes("https://shopee.co.id/product/")){const b=d.split("https://shopee.co.id/product/")[1].split("/");b[0]+b[1],a=b[1],c=b[0]}}else Bt(r)&&(a=r,c=111111);const g=m.value.some(d=>d.itemId===a);if(console.log(`Status ${g}`),g)console.log(`Skipped item with id ${a}`);else{const d=`https://shopee.co.id/product/${c}/${a}`;m.value.push({itemId:a,shopId:c,name:"",link:d,com_extra:0,com_shopee:0,com_total:0,com_net:0,price:0,sold:0,stock:0,added:0,sold_total:0,monthly:0,popup:"-"})}}t.value=""},F=f(!1);f([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]);const Me=async()=>{J.authStore.clear(),v.$reset(),ce()},Be=async()=>{const n=await $fetch("/api/getAffiliateUserInfo",{method:"post",body:{cookies:S.value}});n.data&&(s.add({severity:"success",summary:"Berhasil",detail:`Cookie berhasil di masukkan dengan nama ${n.data.name}`,life:3e3}),w.value=n.data)};oe();const Re=n=>{let{data:r,newValue:a,field:c}=n;r[c]=a},x=f();f(!1);const T=f(!1),Pe=n=>{x.value=n,T.value=!0},Te=n=>{if(n===5)return"success";if(n===4)return"info";if(n===3)return"warning";if(n<=2)return"danger"},Ae=()=>{m.value=m.value.filter(n=>n.itemId!==x.value.itemId),T.value=!1,x.value=null,s.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},fe=f(),Ee=()=>{fe.value.exportCSV()},Ue=oe(),Ne=async()=>{await Me(),window.location.reload()},{toClipboard:Fe}=ft(),Oe=async()=>{try{if(x.value){const n=x.value.map(c=>`https://affiliate.shopee.co.id/offer/product_offer/${c.itemId}`),r=x.value.map(c=>`https://shopee.co.id/product/${c.shopId}/${c.itemId}`),a=n.concat(r);await Fe(String(a.join(`
`))),s.add({severity:"success",summary:"Success",detail:`${x.value.length} Links Copied To Clipboard`,life:2e3,group:"bc"})}}catch(n){console.error(n)}},Ke=()=>{Ue.require({message:"Yakin akan menghapus hasil?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{m.value=[],s.add({severity:"info",summary:"Confirmed",detail:"Data result berhasil dihapus",life:3e3})},reject:()=>{s.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})};Lt({title:"BGS Riset - Tools Riset Produk Shopee Affiliate"});const je=()=>{const n=new Date,r=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),c=String(n.getDate()).padStart(2,"0"),g=String(n.getHours()).padStart(2,"0"),d=String(n.getMinutes()).padStart(2,"0"),b=String(n.getSeconds()).padStart(2,"0");return`${r}${a}${c}_${g}${d}${b}`},Ye=he(()=>"riset-data-"+je()),He=n=>{window.open(`${n.link}`,"_blank")};return(n,r)=>{const a=$e,c=xe,g=gt,d=ye,b=_e,D=bt,O=yt,te=kt,G=wt,V=we,ne=_t,A=xt,Ze=$t,_=Ct,qe=St,Ge=It,We=ht;return y(),$("div",rn,[i(b,{visible:h(F),"onUpdate:visible":r[8]||(r[8]=l=>C(F)?F.value=l:null),header:"Drawer",position:"full"},{header:u(()=>[p("div",ln,[i(a,{image:"/android-chrome-512x512.png",shape:"circle"}),sn])]),footer:u(()=>[i(d,{label:"Check",outlined:"",text:"",severity:"success",onClick:Be,autofocus:"",size:"small"}),i(d,{label:"Cancel",outlined:"",text:"",severity:"danger",onClick:r[6]||(r[6]=l=>F.value=!1),autofocussize:"small"}),i(d,{label:"Save",outlined:"",severity:"info",onClick:r[7]||(r[7]=l=>F.value=!1),autofocus:"",size:"small"})]),default:u(()=>[cn,p("div",dn,[i(c,{modelValue:h(S),"onUpdate:modelValue":r[0]||(r[0]=l=>C(S)?S.value=l:null),rows:"10",cols:"30",class:"w-full"},null,8,["modelValue"])]),p("div",un,[pn,i(g,{modelValue:h(R),"onUpdate:modelValue":r[1]||(r[1]=l=>C(R)?R.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",fn,[mn,i(g,{modelValue:h(P),"onUpdate:modelValue":r[2]||(r[2]=l=>C(P)?P.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",hn,[vn,i(g,{modelValue:h(H),"onUpdate:modelValue":r[3]||(r[3]=l=>C(H)?H.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",gn,[bn,i(g,{modelValue:h(L),"onUpdate:modelValue":r[4]||(r[4]=l=>C(L)?L.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),p("div",yn,[kn,i(g,{modelValue:h(M),"onUpdate:modelValue":r[5]||(r[5]=l=>C(M)?M.value=l:null),inputId:"integeronly",fluid:""},null,8,["modelValue"])]),wn]),_:1},8,["visible"]),i(We,null,{title:u(()=>[j("Riset Produk")]),content:u(()=>[i(D,null,{start:u(()=>[i(d,{icon:"pi pi-pencil",class:"mr-2",severity:"success",label:"Cookies",onClick:r[9]||(r[9]=l=>F.value=!0),size:"small"}),i(d,{severity:"warn",label:"Clear Data",icon:"pi pi-times",iconPos:"left",onClick:Ke,size:"small",class:"mr-2"}),i(d,{severity:"contrast",label:"Copy Link",icon:"pi pi-times",iconPos:"left",onClick:Oe,size:"small",class:"mr-2"})]),center:u(()=>[]),end:u(()=>[i(d,{severity:"warn",label:"Logout",icon:"pi pi-sign-out",iconPos:"left",onClick:Ne,class:"mr-2",size:"small"})]),_:1}),i(O),_n,p("div",xn,[i(te,{modelValue:h(N),"onUpdate:modelValue":r[10]||(r[10]=l=>C(N)?N.value=l:null),dropdown:"",suggestions:h(ue),onComplete:Ve,placeholder:"Masukkan keyword",class:"w-full mr-3",onKeyup:vt(pe,["enter"]),fluid:""},null,8,["modelValue","suggestions"]),i(d,{class:"mr-2",severity:"success",label:"Cari Barang",onClick:pe,icon:"pi pi-search",loading:h(K),style:{"min-width":"10rem"}},null,8,["loading"])]),i(O),i(c,{modelValue:h(t),"onUpdate:modelValue":r[11]||(r[11]=l=>C(t)?t.value=l:null),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"]),i(d,{icon:"pi pi-plus",class:"mr-2",severity:"success",label:"Process URL",onClick:ze,fluid:"",size:"small"}),i(O),i(G,{value:h(Z),showValue:"",class:"mb-3"},null,8,["value"]),i(D,{class:"mb-6"},{start:u(()=>[]),end:u(()=>[p("div",$n,[i(d,{label:"Delete",icon:"pi pi-times",severity:"warn",onClick:Ie,size:"small"}),i(d,{label:"Export",icon:"pi pi-upload",severity:"help",onClick:r[12]||(r[12]=l=>Ee(l)),size:"small"}),i(d,{icon:"pi pi-refresh",label:"Refresh",raised:"",onClick:De,size:"small"})])]),_:1}),i(qe,{filters:h(o),"onUpdate:filters":r[14]||(r[14]=l=>C(o)?o.value=l:null),value:h(m),loading:h(K),size:"small",exportFilename:h(Ye),selection:h(x),"onUpdate:selection":r[15]||(r[15]=l=>C(x)?x.value=l:null),ref_key:"dt",ref:fe,editMode:"cell",class:"text-sm",dataKey:"itemId",globalFilterFields:["name","link"],onCellEditComplete:Re,sele:"",pt:{table:{style:"min-width: 50rem"},column:{bodycell:({state:l})=>({class:[{"pt-0 pb-0":l.d_editing}]})}}},{header:u(()=>{var l;return[p("div",Cn,[p("div",Sn,[p("span",In,[j("List Produk "),i(V,{value:`Total: ${(l=h(m))==null?void 0:l.length}`,severity:"warn",class:"text-xl font bold"},null,8,["value"])])]),p("div",Ln,[i(Ze,null,{default:u(()=>[i(ne,null,{default:u(()=>[Dn]),_:1}),i(A,{modelValue:h(o).global.value,"onUpdate:modelValue":r[13]||(r[13]=I=>h(o).global.value=I),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])])]}),default:u(()=>[i(_,{selectionMode:"multiple",headerStyle:"width: 3rem"}),i(_,{field:"itemId",header:"ITEMID"},{body:u(({data:l})=>[p("a",{href:`https://affiliate.shopee.co.id/offer/product_offer/${l.itemId}`,target:"_blank"},U(l.itemId),9,Vn)]),_:1}),i(_,{field:"name",header:"NAME",sortable:"",style:ve([{width:"25%"},{display:h(le).name?"":"none"}])},null,8,["style"]),i(_,{field:"isOfficial",header:"MALL",sortable:""},{body:u(({data:l})=>[i(V,{value:l.isOfficial?"Y":"N",severity:l.isOfficial?"warn":"success"},null,8,["value","severity"])]),_:1}),i(_,{field:"com_total",header:"COM%",sortable:"",style:ve({display:h(le).com_total?"":"none"})},null,8,["style"]),i(_,{field:"com_net",header:"COMRP",sortable:""},{body:u(({data:l})=>[j(U(("formatCurrency"in n?n.formatCurrency:h(ge))(l.com_net||0)),1)]),_:1}),i(_,{field:"price",header:"PRICE",sortable:""},{body:u(({data:l})=>[j(U(("formatCurrency"in n?n.formatCurrency:h(ge))(Number(l.price)||0)),1)]),_:1}),i(_,{field:"sold_total",header:"SOLD",sortable:""}),i(_,{field:"stock",header:"STOCK",sortable:""}),i(_,{field:"added",header:"ADDED",sortable:""}),i(_,{field:"monthly",header:"V/M",sortable:""}),i(_,{field:"rating",header:"RATING",sortable:""},{body:u(({data:l})=>[i(V,{severity:Te(l.rating)},{default:u(()=>[j(U(Number(l.rating).toFixed(2)),1)]),_:2},1032,["severity"])]),_:1}),i(_,{field:"link",header:"LINK",class:"text-wrap",sortable:""},{body:u(({data:l,field:I})=>[i(V,{severity:"warn",class:"cursor-pointer",value:"OPEN",onClick:W=>He(l)},null,8,["onClick"])]),_:1}),i(_,{field:"popup",header:"POPUP",sortable:""},{body:u(({data:l,field:I})=>[i(A,{modelValue:l[I],"onUpdate:modelValue":W=>l[I]=W},null,8,["modelValue","onUpdate:modelValue"])]),editor:u(({data:l,field:I})=>[i(A,{modelValue:l[I],"onUpdate:modelValue":W=>l[I]=W},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(_,{exportable:!1,style:{}},{body:u(({data:l})=>[i(d,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:I=>Pe(l),size:"small"},null,8,["onClick"])]),_:1}),i(_,{exportable:!1,style:{}},{body:u(l=>[i(d,{icon:"pi pi-sync",outlined:"",rounded:"",severity:"success",size:"small",onClick:I=>de(l.data,!0)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value","loading","exportFilename","selection","pt"]),i(Ge,{visible:h(T),"onUpdate:visible":r[17]||(r[17]=l=>C(T)?T.value=l:null),header:"Confirm",modal:!0},{footer:u(()=>[i(d,{label:"No",icon:"pi pi-times",text:"",onClick:r[16]||(r[16]=l=>T.value=!1),size:"small"}),i(d,{label:"Yes",icon:"pi pi-check",text:"",onClick:Ae,size:"small"})]),default:u(()=>[p("div",zn,[Mn,h(T)?(y(),$("span",Bn,"Are you sure you want to delete the selected products?")):z("",!0)])]),_:1},8,["visible"])]),_:1})])}}});export{En as default};
