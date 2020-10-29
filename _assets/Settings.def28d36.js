import{r as e,d as o,k as l,B as s,D as a,c as r,s as t,e as n,f as u,x as i,q as m,v as c,o as d}from"./index.0bed9f75.js";var f=o({name:"Settings",setup(){const{user:o,isAuthorized:n,updateUser:u}=t.user,i=l({});s((()=>{if(!n(o))return a("login");i.image=o.value.image,i.username=o.value.username,i.bio=o.value.bio,i.email=o.value.email}));const m=r((()=>i.image===o.value?.image&&i.username===o.value?.username&&i.bio===o.value?.bio&&i.email===o.value?.email&&!i.password));return{form:i,onSubmit:async()=>{const o=Object.entries(i).reduce(((e,[o,l])=>null===l?e:{...e,[o]:l}),{}),l=await async function(o){return e.put("/user",o).then((e=>e.user))}(o);u(l)},isButtonDisabled:m,onLogout:()=>{u(null),a("global-feed")}}}});const p={class:"settings-page"},g={class:"container page"},b={class:"row"},v={class:"col-md-6 offset-md-3 col-xs-12"},h=u("h1",{class:"text-xs-center"}," Your Settings ",-1),x={class:"form-group"},w={class:"form-group"},y={class:"form-group"},U={class:"form-group"},S={class:"form-group"},V=u("hr",null,null,-1);f.render=function(e,o,l,s,a,r){return d(),n("div",p,[u("div",g,[u("div",b,[u("div",v,[h,u("form",{onSubmit:o[6]||(o[6]=i(((...o)=>e.onSubmit(...o)),["prevent"]))},[u("fieldset",null,[u("fieldset",x,[m(u("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>e.form.image=o),type:"text",class:"form-control",placeholder:"URL of profile picture"},null,512),[[c,e.form.image]])]),u("fieldset",w,[m(u("input",{"onUpdate:modelValue":o[2]||(o[2]=o=>e.form.username=o),type:"text",class:"form-control form-control-lg",placeholder:"Your name"},null,512),[[c,e.form.username]])]),u("fieldset",y,[m(u("textarea",{"onUpdate:modelValue":o[3]||(o[3]=o=>e.form.bio=o),class:"form-control form-control-lg",rows:8,placeholder:"Short bio about you"},null,512),[[c,e.form.bio]])]),u("fieldset",U,[m(u("input",{"onUpdate:modelValue":o[4]||(o[4]=o=>e.form.email=o),type:"email",class:"form-control form-control-lg",placeholder:"Email"},null,512),[[c,e.form.email]])]),u("fieldset",S,[m(u("input",{"onUpdate:modelValue":o[5]||(o[5]=o=>e.form.password=o),type:"password",class:"form-control form-control-lg",placeholder:"New Password"},null,512),[[c,e.form.password]])]),u("button",{class:"btn btn-lg btn-primary pull-xs-right",disabled:e.isButtonDisabled,type:"submit"}," Update Settings ",8,["disabled"])])],32),V,u("button",{class:"btn btn-outline-danger",onClick:o[7]||(o[7]=(...o)=>e.onLogout(...o))}," Or click here to logout. ")])])])])};export default f;