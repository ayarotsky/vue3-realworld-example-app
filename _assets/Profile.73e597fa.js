let e=document.createElement("style");e.innerHTML=".space[data-v-7a2b6835]{margin-right:4px}",document.head.appendChild(e);import{m as a,n as s,e as t,E as n,l as o,d as l,G as i,H as r,I as c,f as u,q as f,h as p,r as d,c as v,a as g,t as m,i as w,b as y,F as b,x as P,j as h,o as C,p as k,k as A}from"./index.5236e93e.js";const x=e=>{const o=a([]),l=a(0),i=a(1);return s(async()=>{const a=await async function(e,a=1){const s={limit:n,offset:(a-1)*n,favorited:e};return t.get("/articles",{params:s})}(e,i.value);o.value=a.articles,l.value=a.articlesCount}),{articles:o,articlesCount:l,page:i}};const F=e=>{const o=a([]),l=a(0),i=a(1);return s(async()=>{const a=await async function(e,a=1){const s={limit:n,offset:(a-1)*n,author:e};return t.get("/articles",{params:s})}(e,i.value);o.value=a.articles,l.value=a.articlesCount}),{articles:o,articlesCount:l,page:i}};function G(e){const a=o({});async function n(){l(await async function(e){return t.get("/profiles/"+e).then(e=>e.profile)}(e))}async function l(e){Object.assign(a,e)}return s(()=>{n()}),{profile:a,updateProfile:l}}function M({username:e,following:s}){const{active:n,run:o}=function(e){const s=a(!1);return{active:s,run:async function(){s.value=!0;const a=await e();return s.value=!1,a}}}((async function(){let a=null;return a=!0===s.value?await async function(e){return t.delete(`/profiles/${e}/follow`).then(e=>e.profile)}(e):await async function(e){return t.post(`/profiles/${e}/follow`).then(e=>e.profile)}(e),a}));return{followProcessGoing:n,toggleFollow:o}}var N=l({name:"Profile",components:{ArticlePreview:i,ArticlesNavigation:r,Pagination:c},setup(){const e=p(),a=f(),s=u(()=>a.params.username),t=u(()=>e.state.user),{profile:n,updateProfile:o}=G(s.value),{followProcessGoing:l,toggleFollow:i}=M({following:u(()=>n.following),username:s.value}),r=u(()=>null!==e.state.user),c=u(()=>r.value&&t.value.username===s.value),d=u(()=>r.value&&t.value.username!==s.value),v="profile"===a.name?F:x,{articles:g,articlesCount:m,page:w}=v(s.value);return{username:s,profile:n,articles:g,articlesCount:m,page:w,onArticleUpdate:(e,a)=>{g.value[e]=a},isMyProfile:c,isNotMyProfile:d,routeName:u(()=>a.name),followProcessGoing:l,toggleFollow:async function(){const e=await i();o(e)}}}});const U=h("data-v-7a2b6835");k("data-v-7a2b6835");const _={class:"profile-page"},j={class:"user-info"},E={class:"container"},H={class:"row"},I={class:"col-xs-12 col-md-10 offset-md-1"},L={key:0},$=g("i",{class:"ion-gear-a space"},null,-1),q=y(" Edit profile settings "),O=g("i",{class:"ion-plus-round space"},null,-1),T={class:"container"},z={class:"row"},B={class:"col-xs-12 col-md-10 offset-md-1"},D={class:"articles-toggle"};A();const J=U((function(e,a,s,t,n,o){const l=d("AppLink"),i=d("ArticlesNavigation"),r=d("ArticlePreview"),c=d("Pagination");return C(),v("div",_,[g("div",j,[g("div",E,[g("div",H,[g("div",I,[g("img",{src:e.profile.image,class:"user-img"},null,8,["src"]),g("h4",null,m(e.profile.username),1),e.profile.bio?(C(),v("p",L,m(e.profile.bio),1)):w("v-if",!0),e.isMyProfile?(C(),v(l,{key:1,class:"btn btn-sm btn-outline-secondary action-btn",name:"settings"},{default:U(()=>[$,q]),_:1})):w("v-if",!0),e.isNotMyProfile?(C(),v("button",{key:2,class:"btn btn-sm btn-outline-secondary action-btn",disabled:e.followProcessGoing,onClick:a[1]||(a[1]=(...a)=>e.toggleFollow(...a))},[O,y(" "+m(e.profile.following?"Unfollow":"Follow")+" "+m(e.profile.username),1)],8,["disabled"])):w("v-if",!0)])])])]),g("div",T,[g("div",z,[g("div",B,[g("div",D,[g(i,{"use-author":e.username,"use-favorited":e.username},null,8,["use-author","use-favorited"])]),(C(!0),v(b,null,P(e.articles,(a,s)=>(C(),v(r,{key:a.slug,article:a,onUpdate:a=>e.onArticleUpdate(s,a)},null,8,["article","onUpdate"]))),128)),g(c,{count:e.articlesCount,page:e.page},null,8,["count","page"])])])])])}));N.render=J,N.__scopeId="data-v-7a2b6835",N.__file="src/pages/Profile.vue";export default N;