import{r as a,A as e,B as n,C as o,D as l,a as t,s as i,E as s}from"./index.6b07200a.js";function u({username:i,following:s,onUpdate:u}){const{active:r,run:c}=l((async function(){let l;l=s.value?await async function(l){const t=await a.checkableDelete(`/profiles/${l}/follow`),i=e(t);return i.isOk()?n(i.value.profile):o(i.value)}(i.value):await async function(l){const t=await a.checkablePost(`/profiles/${l}/follow`),i=e(t);return i.isOk()?n(i.value.profile):o(i.value)}(i.value),l.isOk()?u(l.value):await t("login")}));return{followProcessGoing:r,toggleFollow:c}}function r({username:e}){const n=i(null);function o(a){n.value=a}return s(e,(async function(){o(null),o(await function(e){return a.get("/profiles/"+e).then((a=>a.profile))}(e.value))}),{immediate:!0}),{profile:n,updateProfile:o}}export{r as a,u};
