import{r as t,d as a,c as e,m as s,s as l,G as o,n as r,H as i,g as n,h as c,y as d,v as u,x as m,I as p,F as g,q as f,o as b,i as v,j as y}from"./index.c52661b0.js";import{g as h}from"./getArticle.186090aa.js";var T=a({name:"EditArticlePage",setup(){const a=r(),n=i(),c=e((()=>a.params.slug)),d=s({title:"",description:"",body:"",tagList:[]}),u=l("");o((()=>{c.value&&async function(t){const a=await h(t);d.title=a.title,d.description=a.description,d.body=a.body,d.tagList=a.tagList}(c.value)}));return{form:d,onSubmit:async()=>{let a;return a=c.value?await function(a,e){return t.put(`/articles/${a}`,{article:e}).then((t=>t.article))}(c.value,d):await function(a){return t.post("/articles",{article:a}).then((t=>t.article))}(d),n.push({name:"article",params:{slug:a.slug}})},newTag:u,addTag:()=>{d.tagList.push(u.value.trim()),u.value=""},removeTag:t=>{d.tagList=d.tagList.filter((a=>a!==t))}}}});const w={class:"editor-page"},x={class:"container page"},L={class:"row"},k={class:"col-md-10 offset-md-1 col-xs-12"},A={class:"form-group"},S={class:"form-group"},U={class:"form-group"},V={class:"form-group"},j={class:"tag-list"};T.render=function(t,a,e,s,l,o){return b(),n("div",w,[c("div",x,[c("div",L,[c("div",k,[c("form",{onSubmit:a[7]||(a[7]=d(((...a)=>t.onSubmit&&t.onSubmit(...a)),["prevent"]))},[c("fieldset",A,[u(c("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>t.form.title=a),type:"text",class:"form-control form-control-lg",placeholder:"Article Title"},null,512),[[m,t.form.title]])]),c("fieldset",S,[u(c("input",{"onUpdate:modelValue":a[2]||(a[2]=a=>t.form.description=a),type:"text",class:"form-control form-control-lg",placeholder:"What's this article about?"},null,512),[[m,t.form.description]])]),c("fieldset",U,[u(c("textarea",{"onUpdate:modelValue":a[3]||(a[3]=a=>t.form.body=a),rows:8,class:"form-control",placeholder:"Write your article (in markdown)"},null,512),[[m,t.form.body]])]),c("fieldset",V,[u(c("input",{"onUpdate:modelValue":a[4]||(a[4]=a=>t.newTag=a),type:"text",class:"form-control",placeholder:"Enter tags",onChange:a[5]||(a[5]=(...a)=>t.addTag&&t.addTag(...a)),onKeypress:a[6]||(a[6]=p(d(((...a)=>t.addTag&&t.addTag(...a)),["prevent"]),["enter"]))},null,544),[[m,t.newTag]]),c("div",j,[(b(!0),n(g,null,f(t.form.tagList,(a=>(b(),n("span",{key:a,class:"tag-default tag-pill"},[c("i",{class:"ion-close-round",onClick:e=>t.removeTag(a)},null,8,["onClick"]),v(" "+y(a),1)])))),128))])]),c("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit",disabled:!(t.form.title&&t.form.description&&t.form.body)}," Publish Article ",8,["disabled"])],32)])])])])};export default T;
