import{r as e,d as o,m as a,G as l,b as s,e as t,a as r,c as n,K as u,g as i,h as m,y as c,v as d,x as f,o as p}from"./index.6b07200a.js";var g=o({name:"SettingsPage",setup(){const o=a({});l((async()=>{if(!s(t))return await r("login");o.image=t.value.image,o.username=t.value.username,o.bio=t.value.bio,o.email=t.value.email}));const i=n((()=>o.image===t.value?.image&&o.username===t.value?.username&&o.bio===t.value?.bio&&o.email===t.value?.email&&!o.password));return{form:o,onSubmit:async()=>{const a=Object.entries(o).reduce(((e,[o,a])=>null===a?e:{...e,[o]:a}),{}),l=await function(o){return e.put("/user",o).then((e=>e.user))}(a);u(l)},isButtonDisabled:i,onLogout:async()=>{u(null),await r("global-feed")}}}});const b={class:"settings-page"},v={class:"container page"},h={class:"row"},w={class:"col-md-6 offset-md-3 col-xs-12"},y=m("h1",{class:"text-xs-center"}," Your Settings ",-1),x={class:"form-group"},S={class:"form-group"},U={class:"form-group"},V={class:"form-group"},L={class:"form-group"},j=m("hr",null,null,-1);g.render=function(e,o,a,l,s,t){return p(),i("div",b,[m("div",v,[m("div",h,[m("div",w,[y,m("form",{onSubmit:o[6]||(o[6]=c(((...o)=>e.onSubmit(...o)),["prevent"]))},[m("fieldset",null,[m("fieldset",x,[d(m("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>e.form.image=o),type:"text",class:"form-control",placeholder:"URL of profile picture"},null,512),[[f,e.form.image]])]),m("fieldset",S,[d(m("input",{"onUpdate:modelValue":o[2]||(o[2]=o=>e.form.username=o),type:"text",class:"form-control form-control-lg",placeholder:"Your name"},null,512),[[f,e.form.username]])]),m("fieldset",U,[d(m("textarea",{"onUpdate:modelValue":o[3]||(o[3]=o=>e.form.bio=o),class:"form-control form-control-lg",rows:8,placeholder:"Short bio about you"},null,512),[[f,e.form.bio]])]),m("fieldset",V,[d(m("input",{"onUpdate:modelValue":o[4]||(o[4]=o=>e.form.email=o),type:"email",class:"form-control form-control-lg",placeholder:"Email"},null,512),[[f,e.form.email]])]),m("fieldset",L,[d(m("input",{"onUpdate:modelValue":o[5]||(o[5]=o=>e.form.password=o),type:"password",class:"form-control form-control-lg",placeholder:"New Password"},null,512),[[f,e.form.password]])]),m("button",{class:"btn btn-lg btn-primary pull-xs-right",disabled:e.isButtonDisabled,type:"submit"}," Update Settings ",8,["disabled"])])],32),j,m("button",{class:"btn btn-outline-danger",onClick:o[7]||(o[7]=(...o)=>e.onLogout(...o))}," Or click here to logout. ")])])])])};export default g;
