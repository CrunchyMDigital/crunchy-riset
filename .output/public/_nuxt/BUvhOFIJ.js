import{u as b}from"./DTROnf7C.js";import{d as g,r,L as h,v as x,x as n,z as i,M as d,N as p,S as y,m as V,O as k,P,t as E}from"./DL0z-5tx.js";import{_ as U}from"./DNbFz74o.js";const B={class:"justify-content-center align-content-center display: flex flex-wrap fill-height mt-8"},N={class:"surface-card p-4 shadow-2 border-round md:w-6 lg:w-3"},C=y('<div class="text-center mb-5"><img src="'+U+'" alt="Image" height="50" class="mb-3"><div class="text-900 text-3xl font-medium mb-3">Join Now!</div><span class="text-600 font-medium line-height-3">Already have an account?</span><a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/auth/login">Back to login</a></div>',1),I=n("label",{for:"email",class:"block text-900 font-medium mb-2"},"Email",-1),S=n("label",{for:"password",class:"block text-900 font-medium mb-2"},"Password",-1),T=n("label",{for:"password",class:"block text-900 font-medium mb-2"},"Confirm Password",-1),J=g({__name:"signup",setup(L){const f=b(),a=r(null),e=r(null),l=r(null),u=r(!1),c=h();async function w(){u.value=!0,a&&e&&e.value===l.value?await f.collection("users").create({email:a.value,password:e.value,passwordConfirm:l.value}).then(s=>{v()}).catch(s=>{console.log(s),c.add({severity:"error",summary:"Error",detail:s.data||"Unknown Error",life:3e3})}):c.add({severity:"error",summary:"Error",detail:"Password confirmation does not match",life:3e3}),u.value=!1}async function v(){await f.collection("users").authWithPassword(a.value,e.value).then(s=>{V("/")}).catch(s=>{console.log(s),c.add({severity:"error",summary:"Error",detail:"Invalid email or password",life:3e3})})}return(s,o)=>{const m=k,_=P;return E(),x("div",B,[n("div",N,[C,n("div",null,[I,i(m,{id:"email",type:"text",class:"w-full mb-3",modelValue:d(a),"onUpdate:modelValue":o[0]||(o[0]=t=>p(a)?a.value=t:null)},null,8,["modelValue"]),S,i(m,{id:"password",type:"password",class:"w-full mb-3",modelValue:d(e),"onUpdate:modelValue":o[1]||(o[1]=t=>p(e)?e.value=t:null)},null,8,["modelValue"]),T,i(m,{id:"confirmPassword",type:"password",class:"w-full mb-3",modelValue:d(l),"onUpdate:modelValue":o[2]||(o[2]=t=>p(l)?l.value=t:null)},null,8,["modelValue"]),i(_,{label:"Sign In",icon:"pi pi-user",class:"w-full",onClick:w,loading:d(u)},null,8,["loading"])])])])}}});export{J as default};
