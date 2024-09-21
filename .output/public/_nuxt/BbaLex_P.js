import{d as ne,r as B,L as re,u as se,v as ie,x as M,Q as ae,z as F,M as P,N as R,O as oe,R as ue,P as le,t as ce}from"./C_FuJZJW.js";import{u as de}from"./D-W9-VVg.js";import{u as fe}from"./CgRXQ3JJ.js";var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function me(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var G={exports:{}};(function(D,C){(function(_,g){D.exports=g()})(he,function(){var _=1e3,g=6e4,j=36e5,O="millisecond",b="second",S="minute",x="hour",$="day",f="week",h="month",H="quarter",w="year",y="date",Z="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],e=s%100;return"["+s+(n[(e-20)%10]||n[e]||n[0])+"]"}},z=function(s,n,e){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(e)+s},te={s:z,z:function(s){var n=-s.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+z(r,2,"0")+":"+z(t,2,"0")},m:function s(n,e){if(n.date()<e.date())return-s(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(r,h),i=e-t<0,a=n.clone().add(r+(i?-1:1),h);return+(-(r+(e-t)/(i?t-a:a-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:h,y:w,w:f,d:$,D:y,h:x,m:S,s:b,ms:O,Q:H}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},W="en",T={};T[W]=ee;var Q="$isDayjsObject",J=function(s){return s instanceof U||!(!s||!s[Q])},N=function s(n,e,r){var t;if(!n)return W;if(typeof n=="string"){var i=n.toLowerCase();T[i]&&(t=i),e&&(T[i]=e,t=i);var a=n.split("-");if(!t&&a.length>1)return s(a[0])}else{var u=n.name;T[u]=n,t=u}return!r&&t&&(W=t),t||!r&&W},c=function(s,n){if(J(s))return s.clone();var e=typeof n=="object"?n:{};return e.date=s,e.args=arguments,new U(e)},o=te;o.l=N,o.i=J,o.w=function(s,n){return c(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var U=function(){function s(e){this.$L=N(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[Q]=!0}var n=s.prototype;return n.parse=function(e){this.$d=function(r){var t=r.date,i=r.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(K);if(a){var u=a[2]-1||0,l=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(e,r){var t=c(e);return this.startOf(r)<=t&&t<=this.endOf(r)},n.isAfter=function(e,r){return c(e)<this.startOf(r)},n.isBefore=function(e,r){return this.endOf(r)<c(e)},n.$g=function(e,r,t){return o.u(e)?this[r]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,r){var t=this,i=!!o.u(r)||r,a=o.p(e),u=function(V,p){var k=o.w(t.$u?Date.UTC(t.$y,p,V):new Date(t.$y,p,V),t);return i?k:k.endOf($)},l=function(V,p){return o.w(t.toDate()[V].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(p)),t)},d=this.$W,m=this.$M,v=this.$D,Y="set"+(this.$u?"UTC":"");switch(a){case w:return i?u(1,0):u(31,11);case h:return i?u(1,m):u(0,m+1);case f:var L=this.$locale().weekStart||0,I=(d<L?d+7:d)-L;return u(i?v-I:v+(6-I),m);case $:case y:return l(Y+"Hours",0);case x:return l(Y+"Minutes",1);case S:return l(Y+"Seconds",2);case b:return l(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,r){var t,i=o.p(e),a="set"+(this.$u?"UTC":""),u=(t={},t[$]=a+"Date",t[y]=a+"Date",t[h]=a+"Month",t[w]=a+"FullYear",t[x]=a+"Hours",t[S]=a+"Minutes",t[b]=a+"Seconds",t[O]=a+"Milliseconds",t)[i],l=i===$?this.$D+(r-this.$W):r;if(i===h||i===w){var d=this.clone().set(y,1);d.$d[u](l),d.init(),this.$d=d.set(y,Math.min(this.$D,d.daysInMonth())).$d}else u&&this.$d[u](l);return this.init(),this},n.set=function(e,r){return this.clone().$set(e,r)},n.get=function(e){return this[o.p(e)]()},n.add=function(e,r){var t,i=this;e=Number(e);var a=o.p(r),u=function(m){var v=c(i);return o.w(v.date(v.date()+Math.round(m*e)),i)};if(a===h)return this.set(h,this.$M+e);if(a===w)return this.set(w,this.$y+e);if(a===$)return u(1);if(a===f)return u(7);var l=(t={},t[S]=g,t[x]=j,t[b]=_,t)[a]||1,d=this.$d.getTime()+e*l;return o.w(d,this)},n.subtract=function(e,r){return this.add(-1*e,r)},n.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||Z;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),u=this.$H,l=this.$m,d=this.$M,m=t.weekdays,v=t.months,Y=t.meridiem,L=function(p,k,E,A){return p&&(p[k]||p(r,i))||E[k].slice(0,A)},I=function(p){return o.s(u%12||12,p,"0")},V=Y||function(p,k,E){var A=p<12?"AM":"PM";return E?A.toLowerCase():A};return i.replace(X,function(p,k){return k||function(E){switch(E){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return d+1;case"MM":return o.s(d+1,2,"0");case"MMM":return L(t.monthsShort,d,v,3);case"MMMM":return L(v,d);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return L(t.weekdaysMin,r.$W,m,2);case"ddd":return L(t.weekdaysShort,r.$W,m,3);case"dddd":return m[r.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return V(u,l,!0);case"A":return V(u,l,!1);case"m":return String(l);case"mm":return o.s(l,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return a}return null}(p)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,r,t){var i,a=this,u=o.p(r),l=c(e),d=(l.utcOffset()-this.utcOffset())*g,m=this-l,v=function(){return o.m(a,l)};switch(u){case w:i=v()/12;break;case h:i=v();break;case H:i=v()/3;break;case f:i=(m-d)/6048e5;break;case $:i=(m-d)/864e5;break;case x:i=m/j;break;case S:i=m/g;break;case b:i=m/_;break;default:i=m}return t?i:o.a(i)},n.daysInMonth=function(){return this.endOf(h).$D},n.$locale=function(){return T[this.$L]},n.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),i=N(e,r,!0);return i&&(t.$L=i),t},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),q=U.prototype;return c.prototype=q,[["$ms",O],["$s",b],["$m",S],["$H",x],["$W",$],["$M",h],["$y",w],["$D",y]].forEach(function(s){q[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),c.extend=function(s,n){return s.$i||(s(n,U,c),s.$i=!0),c},c.locale=N,c.isDayjs=J,c.unix=function(s){return c(1e3*s)},c.en=T[W],c.Ls=T,c.p={},c})})(G);var $e=G.exports;const pe=me($e),ye={class:"justify-content-center align-content-center display: flex flex-wrap fill-height mt-8 w-full"},ve={class:"surface-card p-4 shadow-2 border-round w-2/3 m-auto"},ge=M("div",{class:"text-center mb-5"},[M("div",{class:"text-900 text-3xl font-medium mb-3"},"Welcome Back")],-1),be=M("label",{for:"email",class:"block text-900 font-medium mb-2"},"Email",-1),we=M("label",{for:"password",class:"block text-900 font-medium mb-2"},"Password",-1),Me={class:"flex align-items-center justify-content-between mb-6"},_e={class:"flex align-items-center"},De=M("label",{for:"rememberme1"},"Remember me",-1),Oe=ne({__name:"login",setup(D){de();const C=fe(),_=B(null),g=B(null),j=B(!1),O=B(!1),b=re(),S=se(),x=async()=>{O.value=!0,_&&g&&await C.collection("users").authWithPassword(_.value,g.value).then(async $=>{await C.collection("riset_license").getFirstListItem(`user.id='${$.record.id}'`).then(async f=>{const h=f.expired;pe().isBefore(h)?(b.add({severity:"success",summary:"Welcome",detail:"Selamat Datang",life:3e3}),S.push("/")):(b.add({severity:"error",summary:"Error",detail:"Lisensi tidak valid / expired hubungi admin",life:3e3}),C.authStore.clear()),console.log(f)}).catch(f=>{C.authStore.clear(),b.add({severity:"error",summary:"Error",detail:"Lisensi tidak valid / expired",life:3e3})}),console.log("checking license"),console.log($)}).catch($=>{console.log($),b.add({severity:"error",summary:"Error",detail:"Invalid email or password",life:3e3})}),O.value=!1};return($,f)=>{const h=oe,H=ue,w=le;return ce(),ie("div",ye,[M("div",ve,[ge,M("div",null,[M("form",{onSubmit:f[3]||(f[3]=ae(()=>{},["prevent"]))},[be,F(h,{id:"email",type:"text",class:"w-full mb-3",modelValue:P(_),"onUpdate:modelValue":f[0]||(f[0]=y=>R(_)?_.value=y:null)},null,8,["modelValue"]),we,F(h,{id:"password",type:"password",class:"w-full mb-3",modelValue:P(g),"onUpdate:modelValue":f[1]||(f[1]=y=>R(g)?g.value=y:null)},null,8,["modelValue"]),M("div",Me,[M("div",_e,[F(H,{id:"rememberme1",binary:!0,modelValue:P(j),"onUpdate:modelValue":f[2]||(f[2]=y=>R(j)?j.value=y:null),class:"mr-2"},null,8,["modelValue"]),De])]),F(w,{label:"Sign In",icon:"pi pi-user",class:"w-full",onClick:x,loading:P(O),type:"submit"},null,8,["loading"])],32)])])])}}});export{Oe as default};
