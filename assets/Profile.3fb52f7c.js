import{d as s,_ as l,c as o,n as e,b as a,e as i,f as n,g as r,h as t,F as c,j as d,k as u,i as f,S as p,w as g,p as m,l as v,o as w}from"./index.5f2bac69.js";import{a as b,u as k}from"./useProfile.04c3fc60.js";var F=s({name:"ProfilePage",components:{ArticlesList:l},setup(){const s=e(),l=o((()=>s.params.username)),{profile:n,updateProfile:r}=b({username:l}),{followProcessGoing:t,toggleFollow:c}=k({following:o((()=>{var s,l;return null!=(l=null==(s=n.value)?void 0:s.following)&&l})),username:l,onUpdate:s=>r(s)}),d=o((()=>a(i)&&i.value.username===l.value)),u=o((()=>{var s;return(null==(s=i.value)?void 0:s.username)!==l.value}));return{profile:n,showEdit:d,showFollow:u,followProcessGoing:t,toggleFollow:c}}});const P=g("data-v-26ab2996");m("data-v-26ab2996");const y={class:"profile-page"},h={class:"user-info"},_={class:"container"},x={class:"row"},A={class:"col-xs-12 col-md-10 offset-md-1"},j={key:0,class:"align-left"},E={key:0},G=t("i",{class:"ion-gear-a space"},null,-1),L=f(" Edit profile settings "),U=t("i",{class:"ion-plus-round space"},null,-1),C={class:"container"},I={class:"row"},S={class:"col-xs-12 col-md-10 offset-md-1"},q=f(" Articles are downloading... ");v();const z=P(((s,l,o,e,a,i)=>{const g=n("AppLink"),m=n("ArticlesList");return w(),r("div",y,[t("div",h,[t("div",_,[t("div",x,[t("div",A,[s.profile?(w(),r(c,{key:1},[t("img",{src:s.profile.image,class:"user-img"},null,8,["src"]),t("h4",null,d(s.profile.username),1),s.profile.bio?(w(),r("p",E,d(s.profile.bio),1)):u("",!0),s.showEdit?(w(),r(g,{key:1,class:"btn btn-sm btn-outline-secondary action-btn",name:"settings"},{default:P((()=>[G,L])),_:1})):u("",!0),s.showFollow?(w(),r("button",{key:2,class:"btn btn-sm btn-outline-secondary action-btn",disabled:s.followProcessGoing,onClick:l[1]||(l[1]=(...l)=>s.toggleFollow&&s.toggleFollow(...l))},[U,f(" "+d(s.profile.following?"Unfollow":"Follow")+" "+d(s.profile.username),1)],8,["disabled"])):u("",!0)],64)):(w(),r("div",j," Profile is downloading... "))])])])]),t("div",C,[t("div",I,[t("div",S,[(w(),r(p,null,{default:P((()=>[t(m,{"use-user-feed":"","use-user-favorited":""})])),fallback:P((()=>[q])),_:1}))])])])])}));F.render=z,F.__scopeId="data-v-26ab2996";export default F;