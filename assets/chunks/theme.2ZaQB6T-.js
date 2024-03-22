import{d as S,o as c,c as f,r as y,a as ne,t as H,n as U,b as x,w as k,e as L,T as Ke,_ as P,u as lt,i as oa,l as ra,f as Qe,g as C,h as T,j as be,k as h,m as d,p as de,q as he,s as Pe,v as Ve,x as ct,y as G,z as $e,A as wt,B as mn,C as ia,D as Se,F as J,E as ee,G as $t,H as Ze,I as $,J as vn,K as Me,L as Be,M as je,N as Xe,O as la,P as ca,Q as ua,R as pe,S as gn,U as _n,V as St,W as ge,X as Ct,Y as Lt,Z as da,$ as yn,a0 as bn,a1 as ha,a2 as We,a3 as kn,a4 as wn,a5 as pa,a6 as fa,a7 as ma,a8 as va,a9 as ga,aa as $n,ab as _a,ac as ya,ad as ba,ae as ka}from"./framework.BybONTeF.js";const wa=S({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),f("span",{class:U(["VPBadge",e.type])},[y(e.$slots,"default",{},()=>[ne(H(e.text),1)])],2))}}),$a={key:0,class:"VPBackdrop"},Sa=S({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),x(Ke,{name:"fade"},{default:k(()=>[e.show?(c(),f("div",$a)):L("",!0)]),_:1}))}}),Ca=P(Sa,[["__scopeId","data-v-48087306"]]),j=lt;function La(t,e){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(t,e):(t(),(a=!0)&&setTimeout(()=>a=!1,e))}}function ut(t){return/^\//.test(t)?t:`/${t}`}function Mt(t){const{pathname:e,search:n,hash:a,protocol:s}=new URL(t,"http://a.com");if(oa(t)||t.startsWith("#")||!s.startsWith("http")||/\.(?!html|md)\w+($|\?)/i.test(t)&&ra(t))return t;const{site:o}=j(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${a}`);return Qe(r)}function He({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:a,page:s,theme:o}=j(),r=C(()=>{var l,u;return{label:(l=n.value.locales[a.value])==null?void 0:l.label,link:((u=n.value.locales[a.value])==null?void 0:u.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:C(()=>Object.entries(n.value.locales).flatMap(([l,u])=>t&&r.value.label===u.label?[]:{text:u.label,link:Ma(u.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,s.value.relativePath.slice(r.value.link.length-1),!n.value.cleanUrls)})),currentLang:r}}function Ma(t,e,n,a){return e?t.replace(/\/$/,"")+ut(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):t}const Pa=t=>(de("data-v-6c11b13a"),t=t(),he(),t),Ia={class:"NotFound"},Ta={class:"code"},Aa={class:"title"},Va=Pa(()=>h("div",{class:"divider"},null,-1)),Oa={class:"quote"},Ea={class:"action"},xa=["href","aria-label"],Na=S({__name:"NotFound",setup(t){const{site:e,theme:n}=j(),{localeLinks:a}=He({removeCurrent:!1}),s=T("/");return be(()=>{var r;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");a.value.length&&(s.value=((r=a.value.find(({link:i})=>i.startsWith(o)))==null?void 0:r.link)||a.value[0].link)}),(o,r)=>{var i,l,u,p,m;return c(),f("div",Ia,[h("p",Ta,H(((i=d(n).notFound)==null?void 0:i.code)??"404"),1),h("h1",Aa,H(((l=d(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Va,h("blockquote",Oa,H(((u=d(n).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",Ea,[h("a",{class:"link",href:d(Qe)(s.value),"aria-label":((p=d(n).notFound)==null?void 0:p.linkLabel)??"go to home"},H(((m=d(n).notFound)==null?void 0:m.linkText)??"Take me home"),9,xa)])])}}}),Ba=P(Na,[["__scopeId","data-v-6c11b13a"]]);function Sn(t,e){if(Array.isArray(t))return ze(t);if(t==null)return[];e=ut(e);const n=Object.keys(t).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(ut(s))),a=n?t[n]:[];return Array.isArray(a)?ze(a):ze(a.items,a.base)}function Ha(t){const e=[];let n=0;for(const a in t){const s=t[a];if(s.items){n=e.push(s);continue}e[n]||e.push({items:[]}),e[n].items.push(s)}return e}function Fa(t){const e=[];function n(a){for(const s of a)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(t),e}function dt(t,e){return Array.isArray(e)?e.some(n=>dt(t,n)):Pe(t,e.link)?!0:e.items?dt(t,e.items):!1}function ze(t,e){return[...t].map(n=>{const a={...n},s=a.base||e;return s&&a.link&&(a.link=s+a.link),a.items&&(a.items=ze(a.items,s)),a})}function ke(){const{frontmatter:t,page:e,theme:n}=j(),a=ct("(min-width: 960px)"),s=T(!1),o=C(()=>{const g=n.value.sidebar,_=e.value.relativePath;return g?Sn(g,_):[]}),r=T(o.value);G(o,(g,_)=>{JSON.stringify(g)!==JSON.stringify(_)&&(r.value=o.value)});const i=C(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=C(()=>u?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),u=C(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),p=C(()=>i.value&&a.value),m=C(()=>i.value?Ha(r.value):[]);function v(){s.value=!0}function b(){s.value=!1}function w(){s.value?b():v()}return{isOpen:s,sidebar:r,sidebarGroups:m,hasSidebar:i,hasAside:u,leftAside:l,isSidebarEnabled:p,open:v,close:b,toggle:w}}function Da(t,e){let n;$e(()=>{n=t.value?document.activeElement:void 0}),be(()=>{window.addEventListener("keyup",a)}),wt(()=>{window.removeEventListener("keyup",a)});function a(s){s.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}const Cn=T(Ve?location.hash:"");Ve&&window.addEventListener("hashchange",()=>{Cn.value=location.hash});function Ra(t){const{page:e}=j(),n=T(!1),a=C(()=>t.value.collapsed!=null),s=C(()=>!!t.value.link),o=T(!1),r=()=>{o.value=Pe(e.value.relativePath,t.value.link)};G([e,t,Cn],r),be(r);const i=C(()=>o.value?!0:t.value.items?dt(e.value.relativePath,t.value.items):!1),l=C(()=>!!(t.value.items&&t.value.items.length));$e(()=>{n.value=!!(a.value&&t.value.collapsed)}),mn(()=>{(o.value||i.value)&&(n.value=!1)});function u(){a.value&&(n.value=!n.value)}return{collapsed:n,collapsible:a,isLink:s,isActiveLink:o,hasActiveLink:i,hasChildren:l,toggle:u}}function ja(){const{hasSidebar:t}=ke(),e=ct("(min-width: 960px)"),n=ct("(min-width: 1280px)");return{isAsideEnabled:C(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const za=71;function Ln(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Pt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{title:Ua(n),link:"#"+n.id,level:a}});return Wa(e,t)}function Ua(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Wa(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[a,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=a&&r.level<=s);const o=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)o.push(i);else{for(let l=r-1;l>=0;l--){const u=t[l];if(u.level<i.level){(u.children||(u.children=[])).push(i);continue e}}o.push(i)}}return o}function qa(t,e){const{isAsideEnabled:n}=ja(),a=La(o,100);let s=null;be(()=>{requestAnimationFrame(o),window.addEventListener("scroll",a)}),ia(()=>{r(location.hash)}),wt(()=>{window.removeEventListener("scroll",a)});function o(){if(!n.value)return;const i=[].slice.call(t.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(b=>i.some(w=>w.hash===b.hash&&b.offsetParent!==null)),u=window.scrollY,p=window.innerHeight,m=document.body.offsetHeight,v=Math.abs(u+p-m)<1;if(l.length&&v){r(l[l.length-1].hash);return}for(let b=0;b<l.length;b++){const w=l[b],g=l[b+1],[_,I]=Ga(b,w,g);if(_){r(I);return}}}function r(i){s&&s.classList.remove("active"),i==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Bt(t){return t.parentElement.offsetTop-za}function Ga(t,e,n){const a=window.scrollY;return t===0&&a===0?[!0,null]:a<Bt(e)?[!1,null]:!n||a<Bt(n)?[!0,e.hash]:[!1,null]}const Ja=["href","title"],Ka=S({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const a=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(a));s==null||s.focus({preventScroll:!0})}return(n,a)=>{const s=Se("VPDocOutlineItem",!0);return c(),f("ul",{class:U(["VPDocOutlineItem",n.root?"root":"nested"])},[(c(!0),f(J,null,ee(n.headers,({children:o,link:r,title:i})=>(c(),f("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:i},H(i),9,Ja),o!=null&&o.length?(c(),x(s,{key:0,headers:o},null,8,["headers"])):L("",!0)]))),256))],2)}}}),Mn=P(Ka,[["__scopeId","data-v-8eff4c6c"]]),Qa=t=>(de("data-v-4f1ac336"),t=t(),he(),t),Za={class:"content"},Xa={class:"outline-title",role:"heading","aria-level":"2"},Ya={"aria-labelledby":"doc-outline-aria-label"},es=Qa(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),ts=S({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=j(),a=$t([]);Ze(()=>{a.value=Pt(e.value.outline??n.value.outline)});const s=T(),o=T();return qa(s,o),(r,i)=>(c(),f("div",{class:U(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[h("div",Za,[h("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),h("div",Xa,H(d(Ln)(d(n))),1),h("nav",Ya,[es,$(Mn,{headers:a.value,root:!0},null,8,["headers"])])])],2))}}),ns=P(ts,[["__scopeId","data-v-4f1ac336"]]),as={class:"VPDocAsideCarbonAds"},ss=S({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,a)=>(c(),f("div",as,[$(d(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),os=t=>(de("data-v-40d6128d"),t=t(),he(),t),rs={class:"VPDocAside"},is=os(()=>h("div",{class:"spacer"},null,-1)),ls=S({__name:"VPDocAside",setup(t){const{theme:e}=j();return(n,a)=>(c(),f("div",rs,[y(n.$slots,"aside-top",{},void 0,!0),y(n.$slots,"aside-outline-before",{},void 0,!0),$(ns),y(n.$slots,"aside-outline-after",{},void 0,!0),is,y(n.$slots,"aside-ads-before",{},void 0,!0),d(e).carbonAds?(c(),x(ss,{key:0,"carbon-ads":d(e).carbonAds},null,8,["carbon-ads"])):L("",!0),y(n.$slots,"aside-ads-after",{},void 0,!0),y(n.$slots,"aside-bottom",{},void 0,!0)]))}}),cs=P(ls,[["__scopeId","data-v-40d6128d"]]);function us(){const{theme:t,page:e}=j();return C(()=>{const{text:n="Edit this page",pattern:a=""}=t.value.editLink||{};let s;return typeof a=="function"?s=a(e.value):s=a.replace(/:path/g,e.value.filePath),{url:s,text:n}})}function ds(){const{page:t,theme:e,frontmatter:n}=j();return C(()=>{var l,u,p,m,v,b,w,g;const a=Sn(e.value.sidebar,t.value.relativePath),s=Fa(a),o=s.findIndex(_=>Pe(t.value.relativePath,_.link)),r=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((u=e.value.docFooter)==null?void 0:u.next)===!1&&!n.value.next||n.value.next===!1;return{prev:r?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((p=s[o-1])==null?void 0:p.docFooterText)??((m=s[o-1])==null?void 0:m.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((v=s[o-1])==null?void 0:v.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((b=s[o+1])==null?void 0:b.docFooterText)??((w=s[o+1])==null?void 0:w.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((g=s[o+1])==null?void 0:g.link)}}})}const hs={},ps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},fs=h("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),ms=h("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),vs=[fs,ms];function gs(t,e){return c(),f("svg",ps,vs)}const _s=P(hs,[["render",gs]]),ce=S({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=C(()=>e.tag??(e.href?"a":"span")),a=C(()=>e.href&&vn.test(e.href));return(s,o)=>(c(),x(Me(n.value),{class:U(["VPLink",{link:s.href,"vp-external-link-icon":a.value,"no-icon":s.noIcon}]),href:s.href?d(Mt)(s.href):void 0,target:s.target??(a.value?"_blank":void 0),rel:s.rel??(a.value?"noreferrer":void 0)},{default:k(()=>[y(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),ys={class:"VPLastUpdated"},bs=["datetime"],ks=S({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:a,lang:s}=j(),o=C(()=>new Date(a.value.lastUpdated??n.value.lastUpdated)),r=C(()=>o.value.toISOString()),i=T("");return be(()=>{$e(()=>{var l,u,p;i.value=new Intl.DateTimeFormat((u=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&u.forceLocale?s.value:void 0,((p=e.value.lastUpdated)==null?void 0:p.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,u)=>{var p;return c(),f("p",ys,[ne(H(((p=d(e).lastUpdated)==null?void 0:p.text)||d(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},H(i.value),9,bs)])}}}),ws=P(ks,[["__scopeId","data-v-a7c1a21a"]]),$s={key:0,class:"VPDocFooter"},Ss={key:0,class:"edit-info"},Cs={key:0,class:"edit-link"},Ls={key:1,class:"last-updated"},Ms={key:1,class:"prev-next"},Ps={class:"pager"},Is=["innerHTML"],Ts=["innerHTML"],As={class:"pager"},Vs=["innerHTML"],Os=["innerHTML"],Es=S({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:a}=j(),s=us(),o=ds(),r=C(()=>e.value.editLink&&a.value.editLink!==!1),i=C(()=>n.value.lastUpdated&&a.value.lastUpdated!==!1),l=C(()=>r.value||i.value||o.value.prev||o.value.next);return(u,p)=>{var m,v,b,w;return l.value?(c(),f("footer",$s,[y(u.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),f("div",Ss,[r.value?(c(),f("div",Cs,[$(ce,{class:"edit-link-button",href:d(s).url,"no-icon":!0},{default:k(()=>[$(_s,{class:"edit-link-icon","aria-label":"edit icon"}),ne(" "+H(d(s).text),1)]),_:1},8,["href"])])):L("",!0),i.value?(c(),f("div",Ls,[$(ws)])):L("",!0)])):L("",!0),(m=d(o).prev)!=null&&m.link||(v=d(o).next)!=null&&v.link?(c(),f("nav",Ms,[h("div",Ps,[(b=d(o).prev)!=null&&b.link?(c(),x(ce,{key:0,class:"pager-link prev",href:d(o).prev.link},{default:k(()=>{var g;return[h("span",{class:"desc",innerHTML:((g=d(e).docFooter)==null?void 0:g.prev)||"Previous page"},null,8,Is),h("span",{class:"title",innerHTML:d(o).prev.text},null,8,Ts)]}),_:1},8,["href"])):L("",!0)]),h("div",As,[(w=d(o).next)!=null&&w.link?(c(),x(ce,{key:0,class:"pager-link next",href:d(o).next.link},{default:k(()=>{var g;return[h("span",{class:"desc",innerHTML:((g=d(e).docFooter)==null?void 0:g.next)||"Next page"},null,8,Vs),h("span",{class:"title",innerHTML:d(o).next.text},null,8,Os)]}),_:1},8,["href"])):L("",!0)])])):L("",!0)])):L("",!0)}}}),xs=P(Es,[["__scopeId","data-v-bd1ce403"]]),Ns=t=>(de("data-v-805ad211"),t=t(),he(),t),Bs={class:"container"},Hs=Ns(()=>h("div",{class:"aside-curtain"},null,-1)),Fs={class:"aside-container"},Ds={class:"aside-content"},Rs={class:"content"},js={class:"content-container"},zs={class:"main"},Us=S({__name:"VPDoc",setup(t){const{theme:e}=j(),n=Be(),{hasSidebar:a,hasAside:s,leftAside:o}=ke(),r=C(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const u=Se("Content");return c(),f("div",{class:U(["VPDoc",{"has-sidebar":d(a),"has-aside":d(s)}])},[y(i.$slots,"doc-top",{},void 0,!0),h("div",Bs,[d(s)?(c(),f("div",{key:0,class:U(["aside",{"left-aside":d(o)}])},[Hs,h("div",Fs,[h("div",Ds,[$(cs,null,{"aside-top":k(()=>[y(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[y(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[y(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[y(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[y(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[y(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):L("",!0),h("div",Rs,[h("div",js,[y(i.$slots,"doc-before",{},void 0,!0),h("main",zs,[$(u,{class:U(["vp-doc",[r.value,d(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),$(xs,null,{"doc-footer-before":k(()=>[y(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),y(i.$slots,"doc-after",{},void 0,!0)])])]),y(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Ws=P(Us,[["__scopeId","data-v-805ad211"]]),qs=S({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(t){const e=t,n=C(()=>e.href&&vn.test(e.href)),a=C(()=>e.tag||e.href?"a":"button");return(s,o)=>(c(),x(Me(a.value),{class:U(["VPButton",[s.size,s.theme]]),href:s.href?d(Mt)(s.href):void 0,target:n.value?"_blank":void 0,rel:n.value?"noreferrer":void 0},{default:k(()=>[ne(H(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),Gs=P(qs,[["__scopeId","data-v-511169fa"]]),Js=["src","alt"],Ks=S({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const a=Se("VPImage",!0);return e.image?(c(),f(J,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),f("img",je({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:d(Qe)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Js)):(c(),f(J,{key:1},[$(a,je({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),$(a,je({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):L("",!0)}}}),qe=P(Ks,[["__scopeId","data-v-08610b86"]]),Qs=t=>(de("data-v-8879e0cb"),t=t(),he(),t),Zs={class:"container"},Xs={class:"main"},Ys={key:0,class:"name"},eo=["innerHTML"],to=["innerHTML"],no=["innerHTML"],ao={key:0,class:"actions"},so={key:0,class:"image"},oo={class:"image-container"},ro=Qs(()=>h("div",{class:"image-bg"},null,-1)),io=S({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Xe("hero-image-slot-exists");return(n,a)=>(c(),f("div",{class:U(["VPHero",{"has-image":n.image||d(e)}])},[h("div",Zs,[h("div",Xs,[y(n.$slots,"home-hero-info",{},()=>[n.name?(c(),f("h1",Ys,[h("span",{innerHTML:n.name,class:"clip"},null,8,eo)])):L("",!0),n.text?(c(),f("p",{key:1,innerHTML:n.text,class:"text"},null,8,to)):L("",!0),n.tagline?(c(),f("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,no)):L("",!0)],!0),n.actions?(c(),f("div",ao,[(c(!0),f(J,null,ee(n.actions,s=>(c(),f("div",{key:s.link,class:"action"},[$(Gs,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link},null,8,["theme","text","href"])]))),128))])):L("",!0)]),n.image||d(e)?(c(),f("div",so,[h("div",oo,[ro,y(n.$slots,"home-hero-image",{},()=>[n.image?(c(),x(qe,{key:0,class:"image-src",image:n.image},null,8,["image"])):L("",!0)],!0)])])):L("",!0)])],2))}}),lo=P(io,[["__scopeId","data-v-8879e0cb"]]),co=S({__name:"VPHomeHero",setup(t){const{frontmatter:e}=j();return(n,a)=>d(e).hero?(c(),x(lo,{key:0,class:"VPHomeHero",name:d(e).hero.name,text:d(e).hero.text,tagline:d(e).hero.tagline,image:d(e).hero.image,actions:d(e).hero.actions},{"home-hero-info":k(()=>[y(n.$slots,"home-hero-info")]),"home-hero-image":k(()=>[y(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):L("",!0)}}),uo={},ho={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},po=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),fo=[po];function mo(t,e){return c(),f("svg",ho,fo)}const vo=P(uo,[["render",mo]]),go={class:"box"},_o={key:0,class:"icon"},yo=["innerHTML"],bo=["innerHTML"],ko=["innerHTML"],wo={key:4,class:"link-text"},$o={class:"link-text-value"},So=S({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),x(ce,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:k(()=>[h("article",go,[typeof e.icon=="object"&&e.icon.wrap?(c(),f("div",_o,[$(qe,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),x(qe,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),f("div",{key:2,class:"icon",innerHTML:e.icon},null,8,yo)):L("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,bo),e.details?(c(),f("p",{key:3,class:"details",innerHTML:e.details},null,8,ko)):L("",!0),e.linkText?(c(),f("div",wo,[h("p",$o,[ne(H(e.linkText)+" ",1),$(vo,{class:"link-text-icon"})])])):L("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Co=P(So,[["__scopeId","data-v-18e79dbe"]]),Lo={key:0,class:"VPFeatures"},Mo={class:"container"},Po={class:"items"},Io=S({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=C(()=>{const a=e.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,s)=>a.features?(c(),f("div",Lo,[h("div",Mo,[h("div",Po,[(c(!0),f(J,null,ee(a.features,o=>(c(),f("div",{key:o.title,class:U(["item",[n.value]])},[$(Co,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):L("",!0)}}),To=P(Io,[["__scopeId","data-v-fbca9f92"]]),Ao=S({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=j();return(n,a)=>d(e).features?(c(),x(To,{key:0,class:"VPHomeFeatures",features:d(e).features},null,8,["features"])):L("",!0)}}),Vo={class:"VPHome"},Oo=S({__name:"VPHome",setup(t){return(e,n)=>{const a=Se("Content");return c(),f("div",Vo,[y(e.$slots,"home-hero-before",{},void 0,!0),$(co,null,{"home-hero-info":k(()=>[y(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[y(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),y(e.$slots,"home-hero-after",{},void 0,!0),y(e.$slots,"home-features-before",{},void 0,!0),$(Ao),y(e.$slots,"home-features-after",{},void 0,!0),$(a)])}}}),Eo=P(Oo,[["__scopeId","data-v-7b87b369"]]),xo={},No={class:"VPPage"};function Bo(t,e){const n=Se("Content");return c(),f("div",No,[y(t.$slots,"page-top"),$(n),y(t.$slots,"page-bottom")])}const Ho=P(xo,[["render",Bo]]),Fo=S({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=j(),{hasSidebar:a}=ke();return(s,o)=>(c(),f("div",{class:U(["VPContent",{"has-sidebar":d(a),"is-home":d(n).layout==="home"}]),id:"VPContent"},[d(e).isNotFound?y(s.$slots,"not-found",{key:0},()=>[$(Ba)],!0):d(n).layout==="page"?(c(),x(Ho,{key:1},{"page-top":k(()=>[y(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[y(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(n).layout==="home"?(c(),x(Eo,{key:2},{"home-hero-before":k(()=>[y(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[y(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[y(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[y(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[y(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[y(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(n).layout&&d(n).layout!=="doc"?(c(),x(Me(d(n).layout),{key:3})):(c(),x(Ws,{key:4},{"doc-top":k(()=>[y(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[y(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[y(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[y(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[y(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[y(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[y(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[y(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[y(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[y(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[y(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Do=P(Fo,[["__scopeId","data-v-147c4aea"]]),Ro={class:"container"},jo=["innerHTML"],zo=["innerHTML"],Uo=S({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=j(),{hasSidebar:a}=ke();return(s,o)=>d(e).footer&&d(n).footer!==!1?(c(),f("footer",{key:0,class:U(["VPFooter",{"has-sidebar":d(a)}])},[h("div",Ro,[d(e).footer.message?(c(),f("p",{key:0,class:"message",innerHTML:d(e).footer.message},null,8,jo)):L("",!0),d(e).footer.copyright?(c(),f("p",{key:1,class:"copyright",innerHTML:d(e).footer.copyright},null,8,zo)):L("",!0)])],2)):L("",!0)}}),Wo=P(Uo,[["__scopeId","data-v-91ecba22"]]);function Pn(){const{theme:t,frontmatter:e}=j(),n=$t([]),a=C(()=>n.value.length>0);return Ze(()=>{n.value=Pt(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:a}}const qo={},Go={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Jo=h("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Ko=[Jo];function Qo(t,e){return c(),f("svg",Go,Ko)}const In=P(qo,[["render",Qo]]),Zo={class:"header"},Xo={class:"outline"},Yo=S({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=j(),a=T(!1),s=T(0),o=T(),r=T();la(o,()=>{a.value=!1}),ca("Escape",()=>{a.value=!1}),Ze(()=>{a.value=!1});function i(){a.value=!a.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(p){p.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),pe(()=>{a.value=!1}))}function u(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,m)=>(c(),f("div",{class:"VPLocalNavOutlineDropdown",style:ua({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[p.headers.length>0?(c(),f("button",{key:0,onClick:i,class:U({open:a.value})},[ne(H(d(Ln)(d(n)))+" ",1),$(In,{class:"icon"})],2)):(c(),f("button",{key:1,onClick:u},H(d(n).returnToTopLabel||"Return to top"),1)),$(Ke,{name:"flyout"},{default:k(()=>[a.value?(c(),f("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:l},[h("div",Zo,[h("a",{class:"top-link",href:"#",onClick:u},H(d(n).returnToTopLabel||"Return to top"),1)]),h("div",Xo,[$(Mn,{headers:p.headers},null,8,["headers"])])],512)):L("",!0)]),_:1})],4))}}),er=P(Yo,[["__scopeId","data-v-2abddedc"]]),tr={},nr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ar=h("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),sr=h("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),or=h("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),rr=h("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),ir=[ar,sr,or,rr];function lr(t,e){return c(),f("svg",nr,ir)}const cr=P(tr,[["render",lr]]),ur={class:"container"},dr=["aria-expanded"],hr={class:"menu-text"},pr=S({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=j(),{hasSidebar:a}=ke(),{headers:s}=Pn(),{y:o}=gn(),r=T(0);be(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ze(()=>{s.value=Pt(n.value.outline??e.value.outline)});const i=C(()=>s.value.length===0),l=C(()=>i.value&&!a.value),u=C(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:i.value,fixed:l.value}));return(p,m)=>d(n).layout!=="home"&&(!l.value||d(o)>=r.value)?(c(),f("div",{key:0,class:U(u.value)},[h("div",ur,[d(a)?(c(),f("button",{key:0,class:"menu","aria-expanded":p.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=v=>p.$emit("open-menu"))},[$(cr,{class:"menu-icon"}),h("span",hr,H(d(e).sidebarMenuLabel||"Menu"),1)],8,dr)):L("",!0),$(er,{headers:d(s),navHeight:r.value},null,8,["headers","navHeight"])])],2)):L("",!0)}}),fr=P(pr,[["__scopeId","data-v-9884144b"]]);function mr(){const t=T(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function n(){t.value=!1,window.removeEventListener("resize",s)}function a(){t.value?n():e()}function s(){window.outerWidth>=768&&n()}const o=Be();return G(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:a}}const vr={},gr={class:"VPSwitch",type:"button",role:"switch"},_r={class:"check"},yr={key:0,class:"icon"};function br(t,e){return c(),f("button",gr,[h("span",_r,[t.$slots.default?(c(),f("span",yr,[y(t.$slots,"default",{},void 0,!0)])):L("",!0)])])}const kr=P(vr,[["render",br],["__scopeId","data-v-3b4b1002"]]),wr={},$r={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Sr=h("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),Cr=[Sr];function Lr(t,e){return c(),f("svg",$r,Cr)}const Mr=P(wr,[["render",Lr]]),Pr={},Ir={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Tr=_n('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Ar=[Tr];function Vr(t,e){return c(),f("svg",Ir,Ar)}const Or=P(Pr,[["render",Vr]]),Er=S({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=j(),a=Xe("toggle-appearance",()=>{e.value=!e.value}),s=C(()=>e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(o,r)=>(c(),x(kr,{title:s.value,class:"VPSwitchAppearance","aria-checked":d(e),onClick:d(a)},{default:k(()=>[$(Or,{class:"sun"}),$(Mr,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),It=P(Er,[["__scopeId","data-v-dd311332"]]),xr={key:0,class:"VPNavBarAppearance"},Nr=S({__name:"VPNavBarAppearance",setup(t){const{site:e}=j();return(n,a)=>d(e).appearance&&d(e).appearance!=="force-dark"?(c(),f("div",xr,[$(It)])):L("",!0)}}),Br=P(Nr,[["__scopeId","data-v-66891ca8"]]),Tt=T();let Tn=!1,st=0;function Hr(t){const e=T(!1);if(Ve){!Tn&&Fr(),st++;const n=G(Tt,a=>{var s,o,r;a===t.el.value||(s=t.el.value)!=null&&s.contains(a)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});wt(()=>{n(),st--,st||Dr()})}return St(e)}function Fr(){document.addEventListener("focusin",An),Tn=!0,Tt.value=document.activeElement}function Dr(){document.removeEventListener("focusin",An)}function An(){Tt.value=document.activeElement}const Rr={},jr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},zr=h("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),Ur=[zr];function Wr(t,e){return c(),f("svg",jr,Ur)}const Vn=P(Rr,[["render",Wr]]),qr={},Gr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Jr=h("circle",{cx:"12",cy:"12",r:"2"},null,-1),Kr=h("circle",{cx:"19",cy:"12",r:"2"},null,-1),Qr=h("circle",{cx:"5",cy:"12",r:"2"},null,-1),Zr=[Jr,Kr,Qr];function Xr(t,e){return c(),f("svg",Gr,Zr)}const Yr=P(qr,[["render",Xr]]),ei={class:"VPMenuLink"},ti=S({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=j();return(n,a)=>(c(),f("div",ei,[$(ce,{class:U({active:d(Pe)(d(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:k(()=>[ne(H(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ye=P(ti,[["__scopeId","data-v-4ca9c8da"]]),ni={class:"VPMenuGroup"},ai={key:0,class:"title"},si=S({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",ni,[e.text?(c(),f("p",ai,H(e.text),1)):L("",!0),(c(!0),f(J,null,ee(e.items,a=>(c(),f(J,null,["link"in a?(c(),x(Ye,{key:0,item:a},null,8,["item"])):L("",!0)],64))),256))]))}}),oi=P(si,[["__scopeId","data-v-3e219792"]]),ri={class:"VPMenu"},ii={key:0,class:"items"},li=S({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),f("div",ri,[e.items?(c(),f("div",ii,[(c(!0),f(J,null,ee(e.items,a=>(c(),f(J,{key:a.text},["link"in a?(c(),x(Ye,{key:0,item:a},null,8,["item"])):(c(),x(oi,{key:1,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):L("",!0),y(e.$slots,"default",{},void 0,!0)]))}}),ci=P(li,[["__scopeId","data-v-2d661e80"]]),ui=["aria-expanded","aria-label"],di={key:0,class:"text"},hi=["innerHTML"],pi={class:"menu"},fi=S({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=T(!1),n=T();Hr({el:n,onBlur:a});function a(){e.value=!1}return(s,o)=>(c(),f("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=r=>e.value=!0),onMouseleave:o[2]||(o[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=r=>e.value=!e.value)},[s.button||s.icon?(c(),f("span",di,[s.icon?(c(),x(Me(s.icon),{key:0,class:"option-icon"})):L("",!0),s.button?(c(),f("span",{key:1,innerHTML:s.button},null,8,hi)):L("",!0),$(Vn,{class:"text-icon"})])):(c(),x(Yr,{key:1,class:"icon"}))],8,ui),h("div",pi,[$(ci,{items:s.items},{default:k(()=>[y(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),At=P(fi,[["__scopeId","data-v-b477a5c5"]]),mi={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},vi=["href","aria-label","innerHTML"],gi=S({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=C(()=>typeof e.icon=="object"?e.icon.svg:mi[e.icon]);return(a,s)=>(c(),f("a",{class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,vi))}}),_i=P(gi,[["__scopeId","data-v-deafc10d"]]),yi={class:"VPSocialLinks"},bi=S({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),f("div",yi,[(c(!0),f(J,null,ee(e.links,({link:a,icon:s,ariaLabel:o})=>(c(),x(_i,{key:a,icon:s,link:a,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),et=P(bi,[["__scopeId","data-v-19dfbef1"]]),ki={key:0,class:"group translations"},wi={class:"trans-title"},$i={key:1,class:"group"},Si={class:"item appearance"},Ci={class:"label"},Li={class:"appearance-action"},Mi={key:2,class:"group"},Pi={class:"item social-links"},Ii=S({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=j(),{localeLinks:a,currentLang:s}=He({correspondingLink:!0}),o=C(()=>a.value.length&&s.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>o.value?(c(),x(At,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[d(a).length&&d(s).label?(c(),f("div",ki,[h("p",wi,H(d(s).label),1),(c(!0),f(J,null,ee(d(a),l=>(c(),x(Ye,{key:l.link,item:l},null,8,["item"]))),128))])):L("",!0),d(e).appearance&&d(e).appearance!=="force-dark"?(c(),f("div",$i,[h("div",Si,[h("p",Ci,H(d(n).darkModeSwitchLabel||"Appearance"),1),h("div",Li,[$(It)])])])):L("",!0),d(n).socialLinks?(c(),f("div",Mi,[h("div",Pi,[$(et,{class:"social-links-list",links:d(n).socialLinks},null,8,["links"])])])):L("",!0)]),_:1})):L("",!0)}}),Ti=P(Ii,[["__scopeId","data-v-bf54a8ff"]]),Ai=t=>(de("data-v-c903cbbf"),t=t(),he(),t),Vi=["aria-expanded"],Oi=Ai(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),Ei=[Oi],xi=S({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),f("button",{type:"button",class:U(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>e.$emit("click"))},Ei,10,Vi))}}),Ni=P(xi,[["__scopeId","data-v-c903cbbf"]]),Bi=["innerHTML"],Hi=S({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=j();return(n,a)=>(c(),x(ce,{class:U({VPNavBarMenuLink:!0,active:d(Pe)(d(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:k(()=>[h("span",{innerHTML:n.item.text},null,8,Bi)]),_:1},8,["class","href","target","rel"]))}}),Fi=P(Hi,[["__scopeId","data-v-3159a9d2"]]),Di=S({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=j(),a=o=>"link"in o?Pe(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(a),s=C(()=>a(e.item));return(o,r)=>(c(),x(At,{class:U({VPNavBarMenuGroup:!0,active:d(Pe)(d(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Ri=t=>(de("data-v-b2275c45"),t=t(),he(),t),ji={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},zi=Ri(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Ui=S({__name:"VPNavBarMenu",setup(t){const{theme:e}=j();return(n,a)=>d(e).nav?(c(),f("nav",ji,[zi,(c(!0),f(J,null,ee(d(e).nav,s=>(c(),f(J,{key:s.text},["link"in s?(c(),x(Fi,{key:0,item:s},null,8,["item"])):(c(),x(Di,{key:1,item:s},null,8,["item"]))],64))),128))])):L("",!0)}}),Wi=P(Ui,[["__scopeId","data-v-b2275c45"]]);var Ht;const On=typeof window<"u",qi=t=>typeof t=="string",Ue=()=>{};On&&((Ht=window==null?void 0:window.navigator)!=null&&Ht.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ht(t){return typeof t=="function"?t():d(t)}function Gi(t,e){function n(...a){t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})}return n}function Ji(t,e={}){let n,a;return s=>{const o=ht(t),r=ht(e.maxWait);if(n&&clearTimeout(n),o<=0||r!==void 0&&r<=0)return a&&(clearTimeout(a),a=null),s();r&&!a&&(a=setTimeout(()=>{n&&clearTimeout(n),a=null,s()},r)),n=setTimeout(()=>{a&&clearTimeout(a),a=null,s()},o)}}function Ki(t){return t}function Qi(t){return kn()?(wn(t),!0):!1}function En(t,e=200,n={}){return Gi(Ji(e,n),t)}function ot(t,e=200,n={}){if(e<=0)return t;const a=T(t.value),s=En(()=>{a.value=t.value},e,n);return G(t,()=>s()),a}function xn(t,e,n){return G(t,(a,s,o)=>{a&&e(a,s,o)},n)}function Zi(t){var e;const n=ht(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Nn=On?window:void 0;function De(...t){let e,n,a,s;if(qi(t[0])?([n,a,s]=t,e=Nn):[e,n,a,s]=t,!e)return Ue;let o=Ue;const r=G(()=>Zi(e),l=>{o(),l&&(l.addEventListener(n,a,s),o=()=>{l.removeEventListener(n,a,s),o=Ue})},{immediate:!0,flush:"post"}),i=()=>{r(),o()};return Qi(i),i}const Ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dt="__vueuse_ssr_handlers__";Ft[Dt]=Ft[Dt]||{};const Xi={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Yi(t={}){const{reactive:e=!1,target:n=Nn,aliasMap:a=Xi,passive:s=!0,onEventFired:o=Ue}=t,r=ge(new Set),i={toJSON(){return{}},current:r},l=e?ge(i):i,u=new Set,p=new Set;function m(g,_){g in l&&(e?l[g]=_:l[g].value=_)}function v(){for(const g of p)m(g,!1)}function b(g,_){var I,M;const A=(I=g.key)==null?void 0:I.toLowerCase(),E=[(M=g.code)==null?void 0:M.toLowerCase(),A].filter(Boolean);A&&(_?r.add(A):r.delete(A));for(const D of E)p.add(D),m(D,_);A==="meta"&&!_?(u.forEach(D=>{r.delete(D),m(D,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...r,...E].forEach(D=>u.add(D))}De(n,"keydown",g=>(b(g,!0),o(g)),{passive:s}),De(n,"keyup",g=>(b(g,!1),o(g)),{passive:s}),De("blur",v,{passive:!0}),De("focus",v,{passive:!0});const w=new Proxy(l,{get(g,_,I){if(typeof _!="string")return Reflect.get(g,_,I);if(_=_.toLowerCase(),_ in a&&(_=a[_]),!(_ in l))if(/[+_-]/.test(_)){const A=_.split(/[+_-]/g).map(E=>E.trim());l[_]=C(()=>A.every(E=>d(w[E])))}else l[_]=T(!1);const M=Reflect.get(g,_,I);return e?d(M):M}});return w}var Rt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Rt||(Rt={}));var el=Object.defineProperty,jt=Object.getOwnPropertySymbols,tl=Object.prototype.hasOwnProperty,nl=Object.prototype.propertyIsEnumerable,zt=(t,e,n)=>e in t?el(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,al=(t,e)=>{for(var n in e||(e={}))tl.call(e,n)&&zt(t,n,e[n]);if(jt)for(var n of jt(e))nl.call(e,n)&&zt(t,n,e[n]);return t};const sl={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};al({linear:Ki},sl);function _e(t){return Array.isArray?Array.isArray(t):Fn(t)==="[object Array]"}const ol=1/0;function rl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-ol?"-0":e}function il(t){return t==null?"":rl(t)}function fe(t){return typeof t=="string"}function Bn(t){return typeof t=="number"}function ll(t){return t===!0||t===!1||cl(t)&&Fn(t)=="[object Boolean]"}function Hn(t){return typeof t=="object"}function cl(t){return Hn(t)&&t!==null}function re(t){return t!=null}function rt(t){return!t.trim().length}function Fn(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ul="Incorrect 'index' type",dl=t=>`Invalid value for key ${t}`,hl=t=>`Pattern length exceeds max of ${t}.`,pl=t=>`Missing ${t} property in key`,fl=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ut=Object.prototype.hasOwnProperty;class ml{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(a=>{let s=Dn(a);n+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(a=>{a.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Dn(t){let e=null,n=null,a=null,s=1,o=null;if(fe(t)||_e(t))a=t,e=Wt(t),n=pt(t);else{if(!Ut.call(t,"name"))throw new Error(pl("name"));const r=t.name;if(a=r,Ut.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(fl(r));e=Wt(r),n=pt(r),o=t.getFn}return{path:e,id:n,weight:s,src:a,getFn:o}}function Wt(t){return _e(t)?t:t.split(".")}function pt(t){return _e(t)?t.join("."):t}function vl(t,e){let n=[],a=!1;const s=(o,r,i)=>{if(re(o))if(!r[i])n.push(o);else{let l=r[i];const u=o[l];if(!re(u))return;if(i===r.length-1&&(fe(u)||Bn(u)||ll(u)))n.push(il(u));else if(_e(u)){a=!0;for(let p=0,m=u.length;p<m;p+=1)s(u[p],r,i+1)}else r.length&&s(u,r,i+1)}};return s(t,fe(e)?e.split("."):e,0),a?n:n[0]}const gl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_l={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},yl={location:0,threshold:.6,distance:100},bl={useExtendedSearch:!1,getFn:vl,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var N={..._l,...gl,...yl,...bl};const kl=/[^ ]+/g;function wl(t=1,e=3){const n=new Map,a=Math.pow(10,e);return{get(s){const o=s.match(kl).length;if(n.has(o))return n.get(o);const r=1/Math.pow(o,.5*t),i=parseFloat(Math.round(r*a)/a);return n.set(o,i),i},clear(){n.clear()}}}class Vt{constructor({getFn:e=N.getFn,fieldNormWeight:n=N.fieldNormWeight}={}){this.norm=wl(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,a)=>{this._keysMap[n.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fe(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fe(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,a=this.size();n<a;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!re(e)||rt(e))return;let a={v:e,i:n,n:this.norm.get(e)};this.records.push(a)}_addObject(e,n){let a={i:n,$:{}};this.keys.forEach((s,o)=>{let r=s.getFn?s.getFn(e):this.getFn(e,s.path);if(re(r)){if(_e(r)){let i=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:u,value:p}=l.pop();if(re(p))if(fe(p)&&!rt(p)){let m={v:p,i:u,n:this.norm.get(p)};i.push(m)}else _e(p)&&p.forEach((m,v)=>{l.push({nestedArrIndex:v,value:m})})}a.$[o]=i}else if(fe(r)&&!rt(r)){let i={v:r,n:this.norm.get(r)};a.$[o]=i}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function Rn(t,e,{getFn:n=N.getFn,fieldNormWeight:a=N.fieldNormWeight}={}){const s=new Vt({getFn:n,fieldNormWeight:a});return s.setKeys(t.map(Dn)),s.setSources(e),s.create(),s}function $l(t,{getFn:e=N.getFn,fieldNormWeight:n=N.fieldNormWeight}={}){const{keys:a,records:s}=t,o=new Vt({getFn:e,fieldNormWeight:n});return o.setKeys(a),o.setIndexRecords(s),o}function Re(t,{errors:e=0,currentLocation:n=0,expectedLocation:a=0,distance:s=N.distance,ignoreLocation:o=N.ignoreLocation}={}){const r=e/t.length;if(o)return r;const i=Math.abs(a-n);return s?r+i/s:i?1:r}function Sl(t=[],e=N.minMatchCharLength){let n=[],a=-1,s=-1,o=0;for(let r=t.length;o<r;o+=1){let i=t[o];i&&a===-1?a=o:!i&&a!==-1&&(s=o-1,s-a+1>=e&&n.push([a,s]),a=-1)}return t[o-1]&&o-a>=e&&n.push([a,o-1]),n}const Le=32;function Cl(t,e,n,{location:a=N.location,distance:s=N.distance,threshold:o=N.threshold,findAllMatches:r=N.findAllMatches,minMatchCharLength:i=N.minMatchCharLength,includeMatches:l=N.includeMatches,ignoreLocation:u=N.ignoreLocation}={}){if(e.length>Le)throw new Error(hl(Le));const p=e.length,m=t.length,v=Math.max(0,Math.min(a,m));let b=o,w=v;const g=i>1||l,_=g?Array(m):[];let I;for(;(I=t.indexOf(e,w))>-1;){let F=Re(e,{currentLocation:I,expectedLocation:v,distance:s,ignoreLocation:u});if(b=Math.min(F,b),w=I+p,g){let B=0;for(;B<p;)_[I+B]=1,B+=1}}w=-1;let M=[],A=1,E=p+m;const D=1<<p-1;for(let F=0;F<p;F+=1){let B=0,R=E;for(;B<R;)Re(e,{errors:F,currentLocation:v+R,expectedLocation:v,distance:s,ignoreLocation:u})<=b?B=R:E=R,R=Math.floor((E-B)/2+B);E=R;let se=Math.max(1,v-R+1),me=r?m:Math.min(v+R,m)+p,oe=Array(me+2);oe[me+1]=(1<<F)-1;for(let V=me;V>=se;V-=1){let q=V-1,te=n[t.charAt(q)];if(g&&(_[q]=+!!te),oe[V]=(oe[V+1]<<1|1)&te,F&&(oe[V]|=(M[V+1]|M[V])<<1|1|M[V+1]),oe[V]&D&&(A=Re(e,{errors:F,currentLocation:q,expectedLocation:v,distance:s,ignoreLocation:u}),A<=b)){if(b=A,w=q,w<=v)break;se=Math.max(1,2*v-w)}}if(Re(e,{errors:F+1,currentLocation:v,expectedLocation:v,distance:s,ignoreLocation:u})>b)break;M=oe}const W={isMatch:w>=0,score:Math.max(.001,A)};if(g){const F=Sl(_,i);F.length?l&&(W.indices=F):W.isMatch=!1}return W}function Ll(t){let e={};for(let n=0,a=t.length;n<a;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<a-n-1}return e}class jn{constructor(e,{location:n=N.location,threshold:a=N.threshold,distance:s=N.distance,includeMatches:o=N.includeMatches,findAllMatches:r=N.findAllMatches,minMatchCharLength:i=N.minMatchCharLength,isCaseSensitive:l=N.isCaseSensitive,ignoreLocation:u=N.ignoreLocation}={}){if(this.options={location:n,threshold:a,distance:s,includeMatches:o,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(v,b)=>{this.chunks.push({pattern:v,alphabet:Ll(v),startIndex:b})},m=this.pattern.length;if(m>Le){let v=0;const b=m%Le,w=m-b;for(;v<w;)p(this.pattern.substr(v,Le),v),v+=Le;if(b){const g=m-Le;p(this.pattern.substr(g),g)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:a}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let w={isMatch:!0,score:0};return a&&(w.indices=[[0,e.length-1]]),w}const{location:s,distance:o,threshold:r,findAllMatches:i,minMatchCharLength:l,ignoreLocation:u}=this.options;let p=[],m=0,v=!1;this.chunks.forEach(({pattern:w,alphabet:g,startIndex:_})=>{const{isMatch:I,score:M,indices:A}=Cl(e,w,g,{location:s+_,distance:o,threshold:r,findAllMatches:i,minMatchCharLength:l,includeMatches:a,ignoreLocation:u});I&&(v=!0),m+=M,I&&A&&(p=[...p,...A])});let b={isMatch:v,score:v?m/this.chunks.length:1};return v&&a&&(b.indices=p),b}}class Ce{constructor(e){this.pattern=e}static isMultiMatch(e){return qt(e,this.multiRegex)}static isSingleMatch(e){return qt(e,this.singleRegex)}search(){}}function qt(t,e){const n=t.match(e);return n?n[1]:null}class Ml extends Ce{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Pl extends Ce{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Il extends Ce{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Tl extends Ce{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Al extends Ce{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Vl extends Ce{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zn extends Ce{constructor(e,{location:n=N.location,threshold:a=N.threshold,distance:s=N.distance,includeMatches:o=N.includeMatches,findAllMatches:r=N.findAllMatches,minMatchCharLength:i=N.minMatchCharLength,isCaseSensitive:l=N.isCaseSensitive,ignoreLocation:u=N.ignoreLocation}={}){super(e),this._bitapSearch=new jn(e,{location:n,threshold:a,distance:s,includeMatches:o,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Un extends Ce{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,a;const s=[],o=this.pattern.length;for(;(a=e.indexOf(this.pattern,n))>-1;)n=a+o,s.push([a,n-1]);const r=!!s.length;return{isMatch:r,score:r?0:1,indices:s}}}const ft=[Ml,Un,Il,Tl,Vl,Al,Pl,zn],Gt=ft.length,Ol=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,El="|";function xl(t,e={}){return t.split(El).map(n=>{let a=n.trim().split(Ol).filter(o=>o&&!!o.trim()),s=[];for(let o=0,r=a.length;o<r;o+=1){const i=a[o];let l=!1,u=-1;for(;!l&&++u<Gt;){const p=ft[u];let m=p.isMultiMatch(i);m&&(s.push(new p(m,e)),l=!0)}if(!l)for(u=-1;++u<Gt;){const p=ft[u];let m=p.isSingleMatch(i);if(m){s.push(new p(m,e));break}}}return s})}const Nl=new Set([zn.type,Un.type]);class Bl{constructor(e,{isCaseSensitive:n=N.isCaseSensitive,includeMatches:a=N.includeMatches,minMatchCharLength:s=N.minMatchCharLength,ignoreLocation:o=N.ignoreLocation,findAllMatches:r=N.findAllMatches,location:i=N.location,threshold:l=N.threshold,distance:u=N.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:a,minMatchCharLength:s,findAllMatches:r,ignoreLocation:o,location:i,threshold:l,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=xl(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let o=0,r=[],i=0;for(let l=0,u=n.length;l<u;l+=1){const p=n[l];r.length=0,o=0;for(let m=0,v=p.length;m<v;m+=1){const b=p[m],{isMatch:w,indices:g,score:_}=b.search(e);if(w){if(o+=1,i+=_,a){const I=b.constructor.type;Nl.has(I)?r=[...r,...g]:r.push(g)}}else{i=0,o=0,r.length=0;break}}if(o){let m={isMatch:!0,score:i/o};return a&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const mt=[];function Hl(...t){mt.push(...t)}function vt(t,e){for(let n=0,a=mt.length;n<a;n+=1){let s=mt[n];if(s.condition(t,e))return new s(t,e)}return new jn(t,e)}const Ge={AND:"$and",OR:"$or"},gt={PATH:"$path",PATTERN:"$val"},_t=t=>!!(t[Ge.AND]||t[Ge.OR]),Fl=t=>!!t[gt.PATH],Dl=t=>!_e(t)&&Hn(t)&&!_t(t),Jt=t=>({[Ge.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Wn(t,e,{auto:n=!0}={}){const a=s=>{let o=Object.keys(s);const r=Fl(s);if(!r&&o.length>1&&!_t(s))return a(Jt(s));if(Dl(s)){const l=r?s[gt.PATH]:o[0],u=r?s[gt.PATTERN]:s[l];if(!fe(u))throw new Error(dl(l));const p={keyId:pt(l),pattern:u};return n&&(p.searcher=vt(u,e)),p}let i={children:[],operator:o[0]};return o.forEach(l=>{const u=s[l];_e(u)&&u.forEach(p=>{i.children.push(a(p))})}),i};return _t(t)||(t=Jt(t)),a(t)}function Rl(t,{ignoreFieldNorm:e=N.ignoreFieldNorm}){t.forEach(n=>{let a=1;n.matches.forEach(({key:s,norm:o,score:r})=>{const i=s?s.weight:null;a*=Math.pow(r===0&&i?Number.EPSILON:r,(i||1)*(e?1:o))}),n.score=a})}function jl(t,e){const n=t.matches;e.matches=[],re(n)&&n.forEach(a=>{if(!re(a.indices)||!a.indices.length)return;const{indices:s,value:o}=a;let r={indices:s,value:o};a.key&&(r.key=a.key.src),a.idx>-1&&(r.refIndex=a.idx),e.matches.push(r)})}function zl(t,e){e.score=t.score}function Ul(t,e,{includeMatches:n=N.includeMatches,includeScore:a=N.includeScore}={}){const s=[];return n&&s.push(jl),a&&s.push(zl),t.map(o=>{const{idx:r}=o,i={item:e[r],refIndex:r};return s.length&&s.forEach(l=>{l(o,i)}),i})}class Ie{constructor(e,n={},a){this.options={...N,...n},this.options.useExtendedSearch,this._keyStore=new ml(this.options.keys),this.setCollection(e,a)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Vt))throw new Error(ul);this._myIndex=n||Rn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!re(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let a=0,s=this._docs.length;a<s;a+=1){const o=this._docs[a];e(o,a)&&(this.removeAt(a),a-=1,s-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:a,includeScore:s,shouldSort:o,sortFn:r,ignoreFieldNorm:i}=this.options;let l=fe(e)?fe(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Rl(l,{ignoreFieldNorm:i}),o&&l.sort(r),Bn(n)&&n>-1&&(l=l.slice(0,n)),Ul(l,this._docs,{includeMatches:a,includeScore:s})}_searchStringList(e){const n=vt(e,this.options),{records:a}=this._myIndex,s=[];return a.forEach(({v:o,i:r,n:i})=>{if(!re(o))return;const{isMatch:l,score:u,indices:p}=n.searchIn(o);l&&s.push({item:o,idx:r,matches:[{score:u,value:o,norm:i,indices:p}]})}),s}_searchLogical(e){const n=Wn(e,this.options),a=(i,l,u)=>{if(!i.children){const{keyId:m,searcher:v}=i,b=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(l,m),searcher:v});return b&&b.length?[{idx:u,item:l,matches:b}]:[]}const p=[];for(let m=0,v=i.children.length;m<v;m+=1){const b=i.children[m],w=a(b,l,u);if(w.length)p.push(...w);else if(i.operator===Ge.AND)return[]}return p},s=this._myIndex.records,o={},r=[];return s.forEach(({$:i,i:l})=>{if(re(i)){let u=a(n,i,l);u.length&&(o[l]||(o[l]={idx:l,item:i,matches:[]},r.push(o[l])),u.forEach(({matches:p})=>{o[l].matches.push(...p)}))}}),r}_searchObjectList(e){const n=vt(e,this.options),{keys:a,records:s}=this._myIndex,o=[];return s.forEach(({$:r,i})=>{if(!re(r))return;let l=[];a.forEach((u,p)=>{l.push(...this._findMatches({key:u,value:r[p],searcher:n}))}),l.length&&o.push({idx:i,item:r,matches:l})}),o}_findMatches({key:e,value:n,searcher:a}){if(!re(n))return[];let s=[];if(_e(n))n.forEach(({v:o,i:r,n:i})=>{if(!re(o))return;const{isMatch:l,score:u,indices:p}=a.searchIn(o);l&&s.push({score:u,key:e,value:o,idx:r,norm:i,indices:p})});else{const{v:o,n:r}=n,{isMatch:i,score:l,indices:u}=a.searchIn(o);i&&s.push({score:l,key:e,value:o,norm:r,indices:u})}return s}}Ie.version="6.6.2";Ie.createIndex=Rn;Ie.parseIndex=$l;Ie.config=N;Ie.parseQuery=Wn;Hl(Bl);const Kt=ge({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Oe=()=>({isSearching:C(()=>Kt.search!==""),...ha(Kt)});function Wl(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map(function(s){s(n)}),(a=t.get("*"))&&a.slice().map(function(s){s(e,n)})}}}const ql=Wl(),tt=()=>({emitter:ql});function Gl(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function Jl(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}const Kl=["command-theme"],Ql={"command-root":""},Zl=S({name:"Command"}),Xl=S({...Zl,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(t,{emit:e}){const n=t,a='[command-item=""]',s="command-item-key",o='[command-group=""]',r="command-group-key",i='[command-group-heading=""]',l=`${a}:not([aria-disabled="true"])`,u=`${a}[aria-selected="true"]`,p="command-item-select",m="data-value";Ct("theme",n.theme||"default");const{selectedNode:v,search:b,dataValue:w,filtered:g}=Oe(),{emitter:_}=tt(),I=T(),M=ot(T(new Map),333),A=ot(T(new Set),333),E=ot(T(new Map)),D=C(()=>{const O=[];for(const[K,z]of M.value.entries())O.push({key:K,label:z});return O}),W=C(()=>{const O=Ie.createIndex(n.fuseOptions.keys,D.value);return new Ie(D.value,n.fuseOptions,O)}),F=()=>{var O,K,z;const Q=B();Q&&(((O=Q.parentElement)==null?void 0:O.firstElementChild)===Q&&((z=(K=Q.closest(o))==null?void 0:K.querySelector(i))==null||z.scrollIntoView({block:"nearest"})),Q.scrollIntoView({block:"nearest"}))},B=()=>{var O;return(O=I.value)==null?void 0:O.querySelector(u)},R=(O=I.value)=>{const K=O==null?void 0:O.querySelectorAll(l);return K?Array.from(K):[]},se=()=>{var O;const K=(O=I.value)==null?void 0:O.querySelectorAll(o);return K?Array.from(K):[]},me=()=>{const[O]=R();O&&O.getAttribute(s)&&(v.value=O.getAttribute(s)||"")},oe=O=>{const K=R()[O];K&&(v.value=K.getAttribute(s)||"")},V=O=>{const K=B(),z=R(),Q=z.findIndex(Fe=>Fe===K),we=z[Q+O];we?v.value=we.getAttribute(s)||"":O>0?oe(0):oe(z.length-1)},q=O=>{const K=B();let z=K==null?void 0:K.closest(o),Q=null;for(;z&&!Q;)z=O>0?Gl(z,o):Jl(z,o),Q=z==null?void 0:z.querySelector(l);Q?v.value=Q.getAttribute(s)||"":V(O)},te=()=>oe(0),ve=()=>oe(R().length-1),Z=O=>{O.preventDefault(),O.metaKey?ve():O.altKey?q(1):V(1)},xe=O=>{O.preventDefault(),O.metaKey?te():O.altKey?q(-1):V(-1)},nt=O=>{switch(O.key){case"n":case"j":{O.ctrlKey&&Z(O);break}case"ArrowDown":{Z(O);break}case"p":case"k":{O.ctrlKey&&xe(O);break}case"ArrowUp":{xe(O);break}case"Home":{te();break}case"End":{ve();break}case"Enter":{const K=B();if(K){const z=new Event(p);K.dispatchEvent(z)}}}},X=()=>{if(!b.value){g.value.count=A.value.size;return}g.value.groups=new Set("");const O=new Map,K=W.value.search(b.value).map(z=>z.item);for(const{key:z,label:Q}of K)O.set(z,Q);for(const[z,Q]of E.value)for(const we of Q)O.get(we)&&g.value.groups.add(z);pe(()=>{g.value.count=O.size,g.value.items=O})},ue=()=>{const O=R(),K=se();for(const z of O){const Q=z.getAttribute(s)||"",we=z.getAttribute(m)||"";A.value.add(Q),M.value.set(Q,we),g.value.count=M.value.size}for(const z of K){const Q=R(z),we=z.getAttribute(r)||"",Fe=new Set("");for(const aa of Q){const sa=aa.getAttribute(s)||"";Fe.add(sa)}E.value.set(we,Fe)}};G(()=>v.value,O=>{O&&pe(F)},{deep:!0}),G(()=>b.value,O=>{X(),pe(me)}),_.on("selectItem",O=>{e("select-item",O)});const at=En(O=>{O&&(ue(),pe(me))},100);return _.on("rerenderList",at),be(()=>{ue(),me()}),(O,K)=>(c(),f("div",{class:U(t.theme),onKeydown:nt,ref_key:"commandRef",ref:I,"command-theme":t.theme},[h("div",Ql,[y(O.$slots,"default")])],42,Kl))}}),Ee=(t,e)=>{const n=t.__vccOpts||t;for(const[a,s]of e)n[a]=s;return n},yt=Ee(Xl,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Yl={"command-dialog":""},ec={"command-dialog-mask":""},tc={"command-dialog-wrapper":""},nc={"command-dialog-header":""},ac={"command-dialog-body":""},sc={key:0,"command-dialog-footer":""},oc=S({name:"Command.Dialog"}),rc=S({...oc,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(t,{emit:e}){const n=t,{search:a,filtered:s}=Oe(),{emitter:o}=tt(),r=T();o.on("selectItem",l=>{e("select-item",l)});const i=()=>{a.value="",s.value.count=0,s.value.items=new Map,s.value.groups=new Set};return xn(()=>n.visible,i),Lt(i),(l,u)=>(c(),x(da,{to:"body",ref_key:"dialogRef",ref:r},[$(Ke,{name:"command-dialog",appear:""},{default:k(()=>[t.visible?(c(),x(yt,{key:0,theme:t.theme},{default:k(()=>[h("div",Yl,[h("div",ec,[h("div",tc,[h("div",nc,[y(l.$slots,"header")]),h("div",ac,[y(l.$slots,"body")]),l.$slots.footer?(c(),f("div",sc,[y(l.$slots,"footer")])):L("v-if",!0)])])])]),_:3},8,["theme"])):L("v-if",!0)]),_:3})],512))}}),ic=Ee(rc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let qn=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const lc=["command-group-key","data-value"],cc={key:0,"command-group-heading":""},uc={"command-group-items":"",role:"group"},dc=S({name:"Command.Group"}),hc=S({...dc,props:{heading:{type:String,required:!0}},setup(t){const e=C(()=>`command-group-${qn()}`),{filtered:n,isSearching:a}=Oe(),s=C(()=>a.value?n.value.groups.has(e.value):!0);return(o,r)=>yn((c(),f("div",{"command-group":"",role:"presentation",key:d(e),"command-group-key":d(e),"data-value":t.heading},[t.heading?(c(),f("div",cc,H(t.heading),1)):L("v-if",!0),h("div",uc,[y(o.$slots,"default")])],8,lc)),[[bn,d(s)]])}}),pc=Ee(hc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),fc=["placeholder","value"],mc=S({name:"Command.Input"}),vc=S({...mc,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(t,{emit:e}){const n=T(null),{search:a}=Oe(),s=C(()=>a.value),o=r=>{const i=r,l=r.target;a.value=l==null?void 0:l.value,e("input",i),e("update:value",a.value)};return $e(()=>{var r;(r=n.value)==null||r.focus()}),(r,i)=>(c(),f("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:t.placeholder,value:d(s),onInput:o},null,40,fc))}}),gc=Ee(vc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),_c=["aria-selected","aria-disabled","command-item-key"],yc=S({name:"Command.Item"}),bc=S({...yc,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(t,{emit:e}){const n=t,a="command-item-select",s="data-value",{current:o}=Yi(),{selectedNode:r,filtered:i,isSearching:l}=Oe(),{emitter:u}=tt(),p=T(),m=C(()=>`command-item-${qn()}`),v=C(()=>{const g=i.value.items.get(m.value);return l.value?g!==void 0:!0}),b=C(()=>Array.from(o)),w=()=>{var g;const _={key:m.value,value:((g=p.value)==null?void 0:g.getAttribute(s))||""};e("select",_),u.emit("selectItem",_)};return xn(b,g=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(_=>o.has(_.toLowerCase()))&&n.perform&&n.perform()}),$e(()=>{var g;(g=p.value)==null||g.addEventListener(a,w)}),Lt(()=>{var g;(g=p.value)==null||g.removeEventListener(a,w)}),(g,_)=>yn((c(),f("div",{ref_key:"itemRef",ref:p,"command-item":"",role:"option","aria-selected":d(r)===d(m),"aria-disabled":!d(v),key:d(m),"command-item-key":d(m),onClick:w},[y(g.$slots,"default")],8,_c)),[[bn,d(v)]])}}),kc=Ee(bc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),wc=S({name:"Command.List"}),$c=S({...wc,setup(t){const{emitter:e}=tt(),n=T(),a=T();let s=null,o;return $e(()=>{o=a.value;const r=n.value;o&&r&&(s=new ResizeObserver(i=>{pe(()=>{const l=o==null?void 0:o.offsetHeight;r==null||r.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),e.emit("rerenderList",!0)})}),s.observe(o))}),Lt(()=>{s!==null&&o&&s.unobserve(o)}),(r,i)=>(c(),f("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[h("div",{"command-list-sizer":"",ref_key:"heightRef",ref:a},[y(r.$slots,"default")],512)],512))}}),Sc=Ee($c,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),Cc=S({name:"Command.Empty",setup(t,{attrs:e,slots:n}){const{filtered:a}=Oe(),s=C(()=>a.value.count===0);return()=>s.value?We("div",{"command-empty":"",role:"presentation",...e},n):We("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),Lc=S({name:"Command.Loading",setup(t,{attrs:e,slots:n}){return()=>We("div",{"command-loading":"",role:"progressbar",...e},n)}}),Mc=S({name:"Command.Separator",setup(t,{attrs:e,slots:n}){return()=>We("div",{"command-separator":"",role:"separator",...e})}}),Ae=Object.assign(yt,{Dialog:ic,Empty:Cc,Group:pc,Input:gc,Item:kc,List:Sc,Loading:Lc,Separator:Mc,Root:yt});var Qt;const Ne=typeof window<"u",Gn=t=>typeof t=="function",Pc=t=>typeof t=="string",ye=()=>{},Ic=Ne&&((Qt=window==null?void 0:window.navigator)==null?void 0:Qt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ie(t){return typeof t=="function"?t():d(t)}function Ot(t,e){function n(...a){return new Promise((s,o)=>{Promise.resolve(t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(s).catch(o)})}return n}const Jn=t=>t();function Tc(t,e={}){let n,a,s=ye;const o=i=>{clearTimeout(i),s(),s=ye};return i=>{const l=ie(t),u=ie(e.maxWait);return n&&o(n),l<=0||u!==void 0&&u<=0?(a&&(o(a),a=null),Promise.resolve(i())):new Promise((p,m)=>{s=e.rejectOnCancel?m:p,u&&!a&&(a=setTimeout(()=>{n&&o(n),a=null,p(i())},u)),n=setTimeout(()=>{a&&o(a),a=null,p(i())},l)})}}function Ac(t,e=!0,n=!0,a=!1){let s=0,o,r=!0,i=ye,l;const u=()=>{o&&(clearTimeout(o),o=void 0,i(),i=ye)};return m=>{const v=ie(t),b=Date.now()-s,w=()=>l=m();return u(),v<=0?(s=Date.now(),w()):(b>v&&(n||!r)?(s=Date.now(),w()):e&&(l=new Promise((g,_)=>{i=a?_:g,o=setTimeout(()=>{s=Date.now(),r=!0,g(w()),u()},Math.max(0,v-b))})),!n&&!o&&(o=setTimeout(()=>r=!0,v)),r=!1,l)}}function Vc(t=Jn){const e=T(!0);function n(){e.value=!1}function a(){e.value=!0}const s=(...o)=>{e.value&&t(...o)};return{isActive:St(e),pause:n,resume:a,eventFilter:s}}function Oc(t){return t}function Te(t){return kn()?(wn(t),!0):!1}function Ec(t,e=200,n={}){return Ot(Tc(e,n),t)}function xc(t,e=200,n=!1,a=!0,s=!1){return Ot(Ac(e,n,a,s),t)}function Nc(t){return typeof t=="function"?C(t):T(t)}function Et(t,e=!0){pa()?be(t):e?t():pe(t)}function F1(t,e=1e3,n={}){const{immediate:a=!0,immediateCallback:s=!1}=n;let o=null;const r=T(!1);function i(){o&&(clearInterval(o),o=null)}function l(){r.value=!1,i()}function u(){const p=ie(e);p<=0||(r.value=!0,s&&t(),i(),o=setInterval(t,p))}if(a&&Ne&&u(),fa(e)||Gn(e)){const p=G(e,()=>{r.value&&Ne&&u()});Te(p)}return Te(l),{isActive:r,pause:l,resume:u}}function D1(t,e,n={}){const{immediate:a=!0}=n,s=T(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function i(){s.value=!1,r()}function l(...u){r(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=null,t(...u)},ie(e))}return a&&(s.value=!0,Ne&&l()),Te(i),{isPending:St(s),start:l,stop:i}}var Zt=Object.getOwnPropertySymbols,Bc=Object.prototype.hasOwnProperty,Hc=Object.prototype.propertyIsEnumerable,Fc=(t,e)=>{var n={};for(var a in t)Bc.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Zt)for(var a of Zt(t))e.indexOf(a)<0&&Hc.call(t,a)&&(n[a]=t[a]);return n};function Dc(t,e,n={}){const a=n,{eventFilter:s=Jn}=a,o=Fc(a,["eventFilter"]);return G(t,Ot(s,e),o)}var Rc=Object.defineProperty,jc=Object.defineProperties,zc=Object.getOwnPropertyDescriptors,Je=Object.getOwnPropertySymbols,Kn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable,Xt=(t,e,n)=>e in t?Rc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Uc=(t,e)=>{for(var n in e||(e={}))Kn.call(e,n)&&Xt(t,n,e[n]);if(Je)for(var n of Je(e))Qn.call(e,n)&&Xt(t,n,e[n]);return t},Wc=(t,e)=>jc(t,zc(e)),qc=(t,e)=>{var n={};for(var a in t)Kn.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Je)for(var a of Je(t))e.indexOf(a)<0&&Qn.call(t,a)&&(n[a]=t[a]);return n};function Zn(t,e,n={}){const a=n,{eventFilter:s}=a,o=qc(a,["eventFilter"]),{eventFilter:r,pause:i,resume:l,isActive:u}=Vc(s);return{stop:Dc(t,e,Wc(Uc({},o),{eventFilter:r})),pause:i,resume:l,isActive:u}}function le(t){var e;const n=ie(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ae=Ne?window:void 0;function Y(...t){let e,n,a,s;if(Pc(t[0])||Array.isArray(t[0])?([n,a,s]=t,e=ae):[e,n,a,s]=t,!e)return ye;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],r=()=>{o.forEach(p=>p()),o.length=0},i=(p,m,v,b)=>(p.addEventListener(m,v,b),()=>p.removeEventListener(m,v,b)),l=G(()=>[le(e),ie(s)],([p,m])=>{r(),p&&o.push(...n.flatMap(v=>a.map(b=>i(p,v,b,m))))},{immediate:!0,flush:"post"}),u=()=>{l(),r()};return Te(u),u}let Yt=!1;function R1(t,e,n={}){const{window:a=ae,ignore:s=[],capture:o=!0,detectIframe:r=!1}=n;if(!a)return;Ic&&!Yt&&(Yt=!0,Array.from(a.document.body.children).forEach(v=>v.addEventListener("click",ye)));let i=!0;const l=v=>s.some(b=>{if(typeof b=="string")return Array.from(a.document.querySelectorAll(b)).some(w=>w===v.target||v.composedPath().includes(w));{const w=le(b);return w&&(v.target===w||v.composedPath().includes(w))}}),p=[Y(a,"click",v=>{const b=le(t);if(!(!b||b===v.target||v.composedPath().includes(b))){if(v.detail===0&&(i=!l(v)),!i){i=!0;return}e(v)}},{passive:!0,capture:o}),Y(a,"pointerdown",v=>{const b=le(t);b&&(i=!v.composedPath().includes(b)&&!l(v))},{passive:!0}),r&&Y(a,"blur",v=>{var b;const w=le(t);((b=a.document.activeElement)==null?void 0:b.tagName)==="IFRAME"&&!(w!=null&&w.contains(a.document.activeElement))&&e(v)})].filter(Boolean);return()=>p.forEach(v=>v())}function xt(t,e=!1){const n=T(),a=()=>n.value=!!t();return a(),Et(a,e),n}function Gc(t,e={}){const{window:n=ae}=e,a=xt(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const o=T(!1),r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",i):s.removeListener(i))},i=()=>{a.value&&(r(),s=n.matchMedia(Nc(t).value),o.value=s.matches,"addEventListener"in s?s.addEventListener("change",i):s.addListener(i))};return $e(i),Te(()=>r()),o}function j1({window:t=ae}={}){const e=a=>{const{state:s,length:o}=(t==null?void 0:t.history)||{},{hash:r,host:i,hostname:l,href:u,origin:p,pathname:m,port:v,protocol:b,search:w}=(t==null?void 0:t.location)||{};return{trigger:a,state:s,length:o,hash:r,host:i,hostname:l,href:u,origin:p,pathname:m,port:v,protocol:b,search:w}},n=T(e("load"));return t&&(Y(t,"popstate",()=>n.value=e("popstate"),{passive:!0}),Y(t,"hashchange",()=>n.value=e("hashchange"),{passive:!0})),n}const bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kt="__vueuse_ssr_handlers__";bt[kt]=bt[kt]||{};const Jc=bt[kt];function Xn(t,e){return Jc[t]||e}function Kc(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Qc=Object.defineProperty,en=Object.getOwnPropertySymbols,Zc=Object.prototype.hasOwnProperty,Xc=Object.prototype.propertyIsEnumerable,tn=(t,e,n)=>e in t?Qc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nn=(t,e)=>{for(var n in e||(e={}))Zc.call(e,n)&&tn(t,n,e[n]);if(en)for(var n of en(e))Xc.call(e,n)&&tn(t,n,e[n]);return t};const Yc={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},an="vueuse-storage";function eu(t,e,n,a={}){var s;const{flush:o="pre",deep:r=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:p,window:m=ae,eventFilter:v,onError:b=B=>{console.error(B)}}=a,w=(p?$t:T)(e);if(!n)try{n=Xn("getDefaultStorage",()=>{var B;return(B=ae)==null?void 0:B.localStorage})()}catch(B){b(B)}if(!n)return w;const g=ie(e),_=Kc(g),I=(s=a.serializer)!=null?s:Yc[_],{pause:M,resume:A}=Zn(w,()=>E(w.value),{flush:o,deep:r,eventFilter:v});return m&&i&&(Y(m,"storage",F),Y(m,an,W)),F(),w;function E(B){try{if(B==null)n.removeItem(t);else{const R=I.write(B),se=n.getItem(t);se!==R&&(n.setItem(t,R),m&&m.dispatchEvent(new CustomEvent(an,{detail:{key:t,oldValue:se,newValue:R,storageArea:n}})))}}catch(R){b(R)}}function D(B){const R=B?B.newValue:n.getItem(t);if(R==null)return l&&g!==null&&n.setItem(t,I.write(g)),g;if(!B&&u){const se=I.read(R);return Gn(u)?u(se,g):_==="object"&&!Array.isArray(se)?nn(nn({},g),se):se}else return typeof R!="string"?R:I.read(R)}function W(B){F(B.detail)}function F(B){if(!(B&&B.storageArea!==n)){if(B&&B.key==null){w.value=g;return}if(!(B&&B.key!==t)){M();try{w.value=D(B)}catch(R){b(R)}finally{B?pe(A):A()}}}}}function Yn(t){return Gc("(prefers-color-scheme: dark)",t)}var tu=Object.defineProperty,sn=Object.getOwnPropertySymbols,nu=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,on=(t,e,n)=>e in t?tu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,su=(t,e)=>{for(var n in e||(e={}))nu.call(e,n)&&on(t,n,e[n]);if(sn)for(var n of sn(e))au.call(e,n)&&on(t,n,e[n]);return t};function ou(t={}){const{selector:e="html",attribute:n="class",initialValue:a="auto",window:s=ae,storage:o,storageKey:r="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:u}=t,p=su({auto:"",light:"light",dark:"dark"},t.modes||{}),m=Yn({window:s}),v=C(()=>m.value?"dark":"light"),b=l||(r==null?T(a):eu(r,a,o,{window:s,listenToStorageChanges:i})),w=C({get(){return b.value==="auto"&&!u?v.value:b.value},set(M){b.value=M}}),g=Xn("updateHTMLAttrs",(M,A,E)=>{const D=s==null?void 0:s.document.querySelector(M);if(D)if(A==="class"){const W=E.split(/\s/g);Object.values(p).flatMap(F=>(F||"").split(/\s/g)).filter(Boolean).forEach(F=>{W.includes(F)?D.classList.add(F):D.classList.remove(F)})}else D.setAttribute(A,E)});function _(M){var A;const E=M==="auto"?v.value:M;g(e,n,(A=p[E])!=null?A:E)}function I(M){t.onChanged?t.onChanged(M,_):_(M)}return G(w,I,{flush:"post",immediate:!0}),u&&G(v,()=>I(w.value),{flush:"post"}),Et(()=>I(w.value)),w}var ru=Object.defineProperty,iu=Object.defineProperties,lu=Object.getOwnPropertyDescriptors,rn=Object.getOwnPropertySymbols,cu=Object.prototype.hasOwnProperty,uu=Object.prototype.propertyIsEnumerable,ln=(t,e,n)=>e in t?ru(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,du=(t,e)=>{for(var n in e||(e={}))cu.call(e,n)&&ln(t,n,e[n]);if(rn)for(var n of rn(e))uu.call(e,n)&&ln(t,n,e[n]);return t},hu=(t,e)=>iu(t,lu(e));function z1(t={}){const{valueDark:e="dark",valueLight:n="",window:a=ae}=t,s=ou(hu(du({},t),{onChanged:(i,l)=>{var u;t.onChanged?(u=t.onChanged)==null||u.call(t,i==="dark"):l(i)},modes:{dark:e,light:n}})),o=Yn({window:a});return C({get(){return s.value==="dark"},set(i){i===o.value?s.value="auto":s.value=i?"dark":"light"}})}var cn=Object.getOwnPropertySymbols,pu=Object.prototype.hasOwnProperty,fu=Object.prototype.propertyIsEnumerable,mu=(t,e)=>{var n={};for(var a in t)pu.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&cn)for(var a of cn(t))e.indexOf(a)<0&&fu.call(t,a)&&(n[a]=t[a]);return n};function vu(t,e,n={}){const a=n,{window:s=ae}=a,o=mu(a,["window"]);let r;const i=xt(()=>s&&"ResizeObserver"in s),l=()=>{r&&(r.disconnect(),r=void 0)},u=G(()=>le(t),m=>{l(),i.value&&s&&m&&(r=new ResizeObserver(e),r.observe(m,o))},{immediate:!0,flush:"post"}),p=()=>{l(),u()};return Te(p),{isSupported:i,stop:p}}function U1(t,e={width:0,height:0},n={}){const{window:a=ae,box:s="content-box"}=n,o=C(()=>{var l,u;return(u=(l=le(t))==null?void 0:l.namespaceURI)==null?void 0:u.includes("svg")}),r=T(e.width),i=T(e.height);return vu(t,([l])=>{const u=s==="border-box"?l.borderBoxSize:s==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(a&&o.value){const p=le(t);if(p){const m=a.getComputedStyle(p);r.value=parseFloat(m.width),i.value=parseFloat(m.height)}}else if(u){const p=Array.isArray(u)?u:[u];r.value=p.reduce((m,{inlineSize:v})=>m+v,0),i.value=p.reduce((m,{blockSize:v})=>m+v,0)}else r.value=l.contentRect.width,i.value=l.contentRect.height},n),G(()=>le(t),l=>{r.value=l?e.width:0,i.value=l?e.height:0}),{width:r,height:i}}function W1(t,{window:e=ae,scrollTarget:n}={}){const a=T(!1),s=()=>{if(!e)return;const o=e.document,r=le(t);if(!r)a.value=!1;else{const i=r.getBoundingClientRect();a.value=i.top<=(e.innerHeight||o.documentElement.clientHeight)&&i.left<=(e.innerWidth||o.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return G(()=>le(t),()=>s(),{immediate:!0,flush:"post"}),e&&Y(n||e,"scroll",s,{capture:!1,passive:!0}),a}const un=1;function q1(t,e={}){const{throttle:n=0,idle:a=200,onStop:s=ye,onScroll:o=ye,offset:r={left:0,right:0,top:0,bottom:0},eventListenerOptions:i={capture:!1,passive:!0},behavior:l="auto"}=e,u=T(0),p=T(0),m=C({get(){return u.value},set(E){b(E,void 0)}}),v=C({get(){return p.value},set(E){b(void 0,E)}});function b(E,D){var W,F,B;const R=ie(t);R&&((B=R instanceof Document?document.body:R)==null||B.scrollTo({top:(W=ie(D))!=null?W:v.value,left:(F=ie(E))!=null?F:m.value,behavior:ie(l)}))}const w=T(!1),g=ge({left:!0,right:!1,top:!0,bottom:!1}),_=ge({left:!1,right:!1,top:!1,bottom:!1}),I=E=>{w.value&&(w.value=!1,_.left=!1,_.right=!1,_.top=!1,_.bottom=!1,s(E))},M=Ec(I,n+a),A=E=>{const D=E.target===document?E.target.documentElement:E.target,W=D.scrollLeft;_.left=W<u.value,_.right=W>p.value,g.left=W<=0+(r.left||0),g.right=W+D.clientWidth>=D.scrollWidth-(r.right||0)-un,u.value=W;let F=D.scrollTop;E.target===document&&!F&&(F=document.body.scrollTop),_.top=F<p.value,_.bottom=F>p.value,g.top=F<=0+(r.top||0),g.bottom=F+D.clientHeight>=D.scrollHeight-(r.bottom||0)-un,p.value=F,w.value=!0,M(E),o(E)};return Y(t,"scroll",n?xc(A,n,!0,!1):A,i),Y(t,"scrollend",I,i),{x:m,y:v,isScrolling:w,arrivedState:g,directions:_}}const gu={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function _u(t={}){const{reactive:e=!1,target:n=ae,aliasMap:a=gu,passive:s=!0,onEventFired:o=ye}=t,r=ge(new Set),i={toJSON(){return{}},current:r},l=e?ge(i):i,u=new Set,p=new Set;function m(g,_){g in l&&(e?l[g]=_:l[g].value=_)}function v(){r.clear();for(const g of p)m(g,!1)}function b(g,_){var I,M;const A=(I=g.key)==null?void 0:I.toLowerCase(),D=[(M=g.code)==null?void 0:M.toLowerCase(),A].filter(Boolean);A&&(_?r.add(A):r.delete(A));for(const W of D)p.add(W),m(W,_);A==="meta"&&!_?(u.forEach(W=>{r.delete(W),m(W,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...r,...D].forEach(W=>u.add(W))}Y(n,"keydown",g=>(b(g,!0),o(g)),{passive:s}),Y(n,"keyup",g=>(b(g,!1),o(g)),{passive:s}),Y("blur",v,{passive:!0}),Y("focus",v,{passive:!0});const w=new Proxy(l,{get(g,_,I){if(typeof _!="string")return Reflect.get(g,_,I);if(_=_.toLowerCase(),_ in a&&(_=a[_]),!(_ in l))if(/[+_-]/.test(_)){const A=_.split(/[+_-]/g).map(E=>E.trim());l[_]=C(()=>A.every(E=>d(w[E])))}else l[_]=T(!1);const M=Reflect.get(g,_,I);return e?d(M):M}});return w}var dn=Object.getOwnPropertySymbols,yu=Object.prototype.hasOwnProperty,bu=Object.prototype.propertyIsEnumerable,ku=(t,e)=>{var n={};for(var a in t)yu.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&dn)for(var a of dn(t))e.indexOf(a)<0&&bu.call(t,a)&&(n[a]=t[a]);return n};function G1(t,e,n={}){const a=n,{window:s=ae}=a,o=ku(a,["window"]);let r;const i=xt(()=>s&&"MutationObserver"in s),l=()=>{r&&(r.disconnect(),r=void 0)},u=G(()=>le(t),m=>{l(),i.value&&s&&m&&(r=new MutationObserver(e),r.observe(m,o))},{immediate:!0}),p=()=>{l(),u()};return Te(p),{isSupported:i,stop:p}}var hn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(hn||(hn={}));var wu=Object.defineProperty,pn=Object.getOwnPropertySymbols,$u=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable,fn=(t,e,n)=>e in t?wu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Cu=(t,e)=>{for(var n in e||(e={}))$u.call(e,n)&&fn(t,n,e[n]);if(pn)for(var n of pn(e))Su.call(e,n)&&fn(t,n,e[n]);return t};const Lu={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Cu({linear:Oc},Lu);function J1(t="history",e={}){const{initialValue:n={},removeNullishValues:a=!0,removeFalsyValues:s=!1,write:o=!0,window:r=ae}=e;if(!r)return ge(n);const i=ge({});function l(){if(t==="history")return r.location.search||"";if(t==="hash"){const I=r.location.hash||"",M=I.indexOf("?");return M>0?I.slice(M):""}else return(r.location.hash||"").replace(/^#/,"")}function u(I){const M=I.toString();if(t==="history")return`${M?`?${M}`:""}${r.location.hash||""}`;if(t==="hash-params")return`${r.location.search||""}${M?`#${M}`:""}`;const A=r.location.hash||"#",E=A.indexOf("?");return E>0?`${A.slice(0,E)}${M?`?${M}`:""}`:`${A}${M?`?${M}`:""}`}function p(){return new URLSearchParams(l())}function m(I){const M=new Set(Object.keys(i));for(const A of I.keys()){const E=I.getAll(A);i[A]=E.length>1?E:I.get(A)||"",M.delete(A)}Array.from(M).forEach(A=>delete i[A])}const{pause:v,resume:b}=Zn(i,()=>{const I=new URLSearchParams("");Object.keys(i).forEach(M=>{const A=i[M];Array.isArray(A)?A.forEach(E=>I.append(M,E)):a&&A==null||s&&!A?I.delete(M):I.set(M,A)}),w(I)},{deep:!0});function w(I,M){v(),M&&m(I),r.history.replaceState(r.history.state,r.document.title,r.location.pathname+u(I)),b()}function g(){o&&w(p(),!0)}Y(r,"popstate",g,!1),t!=="history"&&Y(r,"hashchange",g,!1);const _=p();return _.keys().next().value?m(_):Object.assign(i,n),i}function Mu(t={}){const{window:e=ae,initialWidth:n=1/0,initialHeight:a=1/0,listenOrientation:s=!0,includeScrollbar:o=!0}=t,r=T(n),i=T(a),l=()=>{e&&(o?(r.value=e.innerWidth,i.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};return l(),Et(l),Y("resize",l,{passive:!0}),s&&Y("orientationchange",l,{passive:!0}),{width:r,height:i}}const it=T([{route:"/about/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2023-10-09 17:31:50",author:!1,sidebar:!1,title:"关于本站"}},{route:"/friend-link-list/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,sidebar:!1,title:""}},{route:"/full-stack/",meta:{description:"",hidden:!0,readingTime:!1,date:"2023-10-11 18:42:02",author:!1,common:!1,title:""}},{route:"/computer-basics/data-structure/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"算法和数据结构"}},{route:"/computer-basics/network/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"计算机网络"}},{route:"/computer-basics/operating-system/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"操作系统"}},{route:"/full-stack/database/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"数据库"}},{route:"/full-stack/front-end/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"前端笔记"}},{route:"/full-stack/java/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,common:!1,title:"Java"}},{route:"/full-stack/other/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-19 17:14:12",author:!1,title:"其他"}},{route:"/full-stack/other/redis.html",meta:{description:"Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。",categories:["技术笔记分享"],tags:["Redis"],title:"Redis自学笔记",date:"2024-03-19 17:14:12"}},{route:"/full-stack/other/xpath.html",meta:{description:"XPath 是一门在 XML 文档中查找信息的语言，用于在 XML 文档中通过元素和属性进行导航。",categories:["技术笔记分享"],tags:["Xpath","爬虫"],title:"XPATH自学笔记",date:"2024-03-15 15:48:47"}},{route:"/full-stack/rust/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"Rust"}},{route:"/interview/question-by-day/",meta:{description:"每天至少一道全栈题目分享，范围不限。",readingTime:!1,hidden:!0,author:!1,title:"每日一题",date:"2024-03-15 16:14:35"}},{route:"/interview/skills/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:""}},{route:"/notes/life-notes/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"生活随笔"}},{route:"/notes/reading-notes/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"读书笔记"}},{route:"/notes/technology-weekly/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"科技周报"}},{route:"/training/linux/acme-sh.html",meta:{description:"使用 acme.sh 部署 Let's Encrypt 泛域名证书。",categories:["工具分享"],tags:["Linux","运维"],sticky:1,title:"泛域名证书申请以及部署",date:"2024-03-15 15:48:47"}},{route:"/training/linux/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"Linux企业级运维"}},{route:"/training/linux/wordpress-by-docker-compose.html",meta:{description:"本文将带你快速了解 docker compose 安装部署 WordPress。",categories:["建站笔记"],tags:["Linux","Docker","WordPress"],title:"基于DockerCompose的WordPress环境部署（附配置优化）",date:"2024-03-15 15:48:47"}},{route:"/training/software/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"软件工具分享"}},{route:"/training/software/mysql-for-win-install.html",meta:{description:"Mysql for Windows 安装及初始化。",categories:["教程分享"],tags:["mysql","windows"],sticky:2,title:"MysqlforWindows安装及初始化",date:"2024-03-15 15:48:47"}},{route:"/full-stack/java/characteristic/functional.html",meta:{description:"Lambda 表达式、Stream 流、Optional 类操作分享。",tags:["Java"],category:"JAVA 学习笔记",cover:!1,sticky:3,head:[["meta",{name:"keywords",content:"java,lambda,stream流,Optional,JAVA8新特性"}]],title:"Java8新特性详解",date:"2024-03-22 16:07:57"}},{route:"/full-stack/java/oop/abstract.html",meta:{description:"在一个较为复杂的继承链中，祖先类更具有一般性，作为派生其他类的基类而不糊将其作为用来构造实例。",categories:["Java 学习笔记"],tags:["Java","OOP"],title:"抽象类和抽象方法",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2023/10.html",meta:{description:`

## 10-31

### 什么是原子操作？

原子操作（atomic operation）意为”不可被中断的一个或一系列操作” 。处理器使用基于对缓存加锁或总线加锁的方式来实现多处理器之间的原子操作。
在Java中可以通过锁和循环CAS的方式来实现原子操作。CAS操作—— \`Compare & Set\`，或是 \`Compare & Swap\`，现在几乎所有的CPU指令都支持CAS的原子操作。

原子操作是指一个不受其他操作影响的操作任务单元。原子操作是在多线程环境下避免数据不一致必须的手段。
int++并不是一个原子操作，所以当一个线程读取它的值并加1时，另外一个线程有可能会读到之前的值，这就会引发错误。

为了解决这个问题，必须保证增加操作是原子的，在JDK1.5之前我们可以使用同步技术来做到这一点。
到JDK1.5，\`java.util.concurrent.atomic\` 包提供了 int 和 long 类型的原子包装类，它们可以自动的保证对于他们的操作是原子的并且不需要使用同步。


## 10-30

### 为什么使用Executor框架？

1. 能复用已存在并空闲的线程从而减少线程对象的创建从而减少了消亡线程的开销。
2. 可有效控制最大并发线程数，提高系统资源使用率，同时避免过多资源竞争。
3. 框架中已经有定时、定期、单线程、并发数控制等功能。


> 综上所述使用线程池框架 Executor 能更好的管理线程、提供系统资源使用率。



## 10-29

### 什么是 Executor 框架？

线程池就是线程的集合，线程池集中管理线程，以实现线程的重用，降低资源消耗，提高响应速度等。线程用于执行异步任务，
单个的线程既是工作单元也是执行机制，从JDK1.5开始，为了把工作单元与执行机制分离开，Executor框架诞生了，他是一个用于统一创建与运行的接口。
Executor框架实现的就是线程池的功能。

Executor框架包括3大部分：

- 任务。也就是工作单元，包括被执行任务需要实现的接口：Runnable接口或者Callable接口；
- 任务的执行。也就是把任务分派给多个线程的执行机制，包括Executor接口及继承自Executor接口的ExecutorService接口。
- 异步计算的结果。包括Future接口及实现了Future接口的FutureTask类。

## 10-28

### 什么是线程组？

线程组，顾名思义，就是线程的组，逻辑类似项目组，用于管理项目成员，线程组就是用来管理线程的。线程组中可以有线程对象，
也可以有线程组，组中还可以有线程，这样的组织结构有点类似于树的形式。 每个线程都会有一个线程组，如果没有设置将会有些默认的初始化设置。

虽然线程组看上去很有用处，实际上现在的程序开发中已经不推荐使用它了，主要有两个原因：

1. 线程组ThreadGroup对象中比较有用的方法是stop、resume、suspend等方法，由于这几个方法会导致线程的安全问题（主要是死锁问题），
已经被官方废弃掉了，所以线程组本身的应用价值就大打折扣了。

2. 线程组ThreadGroup不是线程安全的，这在使用过程中获取的信息并不全是及时有效的，这就降低了它的统计使用价值。

> 虽然线程组现在已经不被推荐使用了（推荐使用线程池），但是它在线程的异常处理方面还是做出了一定的贡献。当线程运行过程中出现异常情况时，
在某些情况下JVM会把线程的控制权交到线程关联的线程组对象上来进行处理。所以对线程组的了解还是有一定必要的。

 
## 10-27

### 产生死锁的必要条件。

- 互斥条件：共享资源被一个线程占用
- 请求与保持条件（占有且等待）：一个进程因请求资源而阻塞时，对已获得的资源保持不释放
- 不剥夺条件：进程已获得资源，在未使用完之前，不能强行剥夺
- 循环等待条件：多个线程之前循环等待资源，必须是循环的互相等待

## 10-26

### 什么是上下文切换？

由于时分复用的存在，CPU 为每个线程分配时间片并轮转，从一个线程切换到另一个线程，这个过程需要先保存当前线程的状态，
然后加载新线程的状态，这就是上下文切换。

上下文切换通常是计算密集型的，会消耗大量 CPU 的时间。而 Linux 的一个特性就是上下文切换和模式切换的消耗非常少。

## 10-25

### 如何停止一个正在运行的线程？

要停止一个正在运行的线程，可以使用 \`Thread.interrupt()\` 方法来中断线程，或者使用 \`Thread.stop()\` 方法来停止线程。

## 10-24

### 线程不安全的本质什么?

由于各个硬件设备的数据处理速度有极大差异，为了处理 CPU、内存、I/O 设备之间的速度差异，计算机体系结构、操作系统以及程序编译过程都做出了相应的优化。

- CPU 增加了缓存，以均衡与内存之间的速度差异，这导致了 \`可见性问题\`。
- 操作系统增加了进程、线程，以分时复用 CPU，这导致了 \`原子性问题\`。
- 编译器优化指令执行次序，使得缓存能够得到更加合理的利用，这导致了 \`有序性问题\`。


## 10-23

### AOP 的实现方式？

- **静态代理：** 代理类在编译阶段生成，在编译阶段将通知织入Java字节码中，也称编译时增强。AspectJ使用的是静态代理。
- **动态代理：** 代理类在程序运行时创建，AOP框架不会去修改字节码，而是在内存中临时生成一个代理对象，在运行期间对业务方法进行增强，不会生成新类。

## 10-22

### 什么是 AOP？

AOP （Aspect oriented programming）区别于OOP （面向对象编程），是对 OOP 的一种补充。
它会将事务管理、日志记录等公共业务逻辑封装为切面单独处理，与业务代码分割。减少重复性代码，降低系统耦合性。

## 10-21

### 什么是 IOC？
IOC （Inversion of Control）控制反转。指对象的生命周期控制通过反射由 \`Spring 容器\` 处理，包括对象的初始化、创建、销毁等。 
能够降低类之间的耦合。

IOC 又称为 DI（依赖注入），是指在 Spring 创建对象的过程中，把对象依赖的属性注入到对象中。有两种方式：构造器注入和属性注入。

## 10-20

### 请简单介绍JAVA8新特性？

> JAVA8 已经名义上停止维护了，但是 JAVA8 新特性还是面试经常会问到的点。就是为了考察 \`函数式编程\` 以及 \`stream 流\` 的掌握情况。

- **Lambda 表达式：**
JAVA8 之后允许使用更简洁的箭头函数创建函数式接口的实例，在功能上与匿名内部类类似，但是更加简洁。

- **Stream 流操作：**
Stream 流允许开发者对集合或数组进行链状流式操作，基于函数式编程模型。分为中间操作及终结操作。

- **Optional 类：**
使用 Optional 可以写出更优雅的代码来避免空指针异常。
Optional 类似于包装类，将具体的数据封装到Optional对象内部。我们可以使用 Optional 中封装好的方法操作封装的数据。优雅的避免空指针异常。

## 10-19

 ### Integer和int的区别？

Java 虽然宣称一切都是对象，但原始数据类型是例外。
int 是整形数字，是 java 的8个原始数据类型（Primitive Types）（char、boolean、byte、short、int、long、float、double）之一。
在 java API 中有对应的包装类，分别是Character、Boolean、Byte、Short、Integer、Long、Float、Double。

Integer 是 int 对应的包装类，它有一个int类型的字段存储数据，并且提供了基本操作，比如数学运算、int和字符串之间转换等。
在 java 5 中引入了自动装箱和自动拆箱功能（boxing/unboxing），java 可以根据上下文，自动进行转换，极大地简化了相关编程。
javac自动把装箱转换为Integer.valueOf(),把拆箱替换为Integer.intValue()。

自动装箱实际上算是一种语法糖。什么是语法糖？可以简单理解为java平台为我们自动进行了一些转换，保证不同的写法在运行时等价，
他们发生在编译阶段，也就是生产的字节码是一致的。

原始数据类型和 java 泛型并不能配合使用。因为 java 的泛型某种程度上可以算作伪泛型，它完全是一种编译期的技巧，
java 编译期会自动将类型转换为对应的特定类型。这就决定了使用泛型，必须保证相应类型可以转换为 Object。

## 10-18

### 抽象类和接口的区别？

1. 一个类可以实现多个接口，但只能继承一个抽象类。接口本身可以通过 extends 关键字扩展多个接口。

2. 抽象类可以有构造方法，接口中不能有构造方法。

3. 抽象类中不一定都是抽象方法，也可以全是具体方法（非抽象方法）。在 Java8 之前，接口中的所有方法必须是抽象的。但Java8的时候，接口可以有默认方法和静态方法。

4. 接口中只能有 static、final 变量，不能有其他变量，而抽象类中不一定。

5. 接口中的方法和变量默认修饰符为 public（写不写都是public），
而抽象类中的方法可以是 public，protected 和默认类型（抽象方法就是为了被重写所以不能是 private 修饰）

## 10-17

### 构造器是否可被重写？


重写是子类覆盖父类的方法，而构造器名称与类名相同，不可能存在重写的概念。

但是在一个类中，是可以存在多个参数不同的构造器的，这是构造器的重载。


## 10-16

### 请描述 & 和 && 的区别。

**相同点：**\`&\` 和 \`&&\` 都可以用作逻辑与的运算符，表示逻辑与（and）。

**不同点：**

1、\`&&\` 具有短路的功能，而 \`&\` 不具备短路功能。

2、当 \`&\` 运算符两边的表达式的结果都为 true 时，整个运算结果才为 true。而&&运算符第一个表达式为 false 时，则结果为 false，不再计算第二个表达式。 

3、\`&\` 还可以用作位运算符，当 \`&\` 操作符两边的表达式不是boolean类型时，\`&\` 表示按位与操作，
我们通常使用 0x0f 来与一个整数进行&运算，来获取该整数的最低4个 bit 位，例如：0x31 & 0x0f 的结果为 0x01。

## 10-15

### 请描述面向对象的特征。

面向对象有三大特征：\`继承\`、\`封装\`、\`多态\`

如果是四大特征：\`继承\`、\`封装\`、\`多态\`、\`抽象\`

**继承：**
在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，
并可以加入若干新的内容，或修改原来的方法使之更适合特殊的需要，这就是继承。比如，遗产的继承。
**封装：**
面向对象的封装性指的是将对象封装成一个高度自治和相对封闭的个体，对象状态（属性）由这个对象自己的行为（方法）来读取和改变
**多态：**
多态指的是程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在编程时并不确定，而是在程序运行期间才确定，
即一个引用变量到底会指向哪个类的实例对象，该引用变量发出的方法调用到底在哪个类中实现的方法，必须在由程序运营期间才能决定。
**抽象：**
抽象就是找出一些事物的相似和共性之处，然后将这些事物归为一个类，这个类只考虑这些事物的相似和共性之处，
并且会忽略与当前主题和目标无关的那些方面，将注意力集中在与当前目标有关的方面。就是把现实生活的对象，抽象为类。

## 10-14

### Java 中 throw 和 throws 区别？

- \`throw\` 是语句抛出的一个异常。
- \`throws\` 是方法可能抛出异常的声明。

两者都是“消极处理异常”的方式（指抛出或可能抛出异常）。

## 10-13

### 运行时异常与受检异常有何异同？

所有异常都继承自 \`java.lang.Throwable\`，它有两个直接的子类 Error 与 Exception。

Java Compiler 要求所有的 Exception 要么被 catch ，要么被 throw，除非这是一个 RuntimeExeption。

**受检异常（Checked Exception）**是在编译时期有编译器检测的异常，该异常必须要被处理。受检异常继承于Exception。

**非受检异常（Unchecked Exception）**是在运行时期的异常，即编译器不会检测异常，需要时也可以捕获异常。非受检异常继承于RuntimeException。


## 10-12

### 是否可以继承String类？

String 类是不能被继承的，因为他是被final关键字修饰的。

\`\`\`java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence,
               Constable, ConstantDesc {
  ......
}

\`\`\`

## 10-11

### String 类的长度有限制吗？

String 是由一个字符数组 \`char[]\` 来存储的，由于数组的长度及索引是整数且 String 类中返回字符串长度的方法 \`length()\` 的返回值也是 int ，
所以通过查看 java 源码中的类 Integer 我们可以看到 Integer 的最大范围是\`2^31 -1\`,
由于数组是从0开始的，所以数组的最大长度可以使【0~2^31】通过计算是大概4GB。

但是通过翻阅 java 虚拟机手册对 class 文件格式的定义以及常量池中对 String 类型的结构体定义我们可以知道对于索引定义了 u2，就是无符号占2个字节，
2个字节可以表示的最大范围是 \`2^16 -1 = 65535\`。 但是由于JVM需要1个字节表示结束指令，所以这个范围就为65534了。
超出这个范围在编译时期是会报错的，但是运行时拼接或者赋值的话范围是在整形的最大范围。

## 10-10

### 什么是节流和防抖？应用场景有哪些？

在前端开发过程中，当函数绑定到某些可能会持续触发的事件中时，
可能会造成性能和资源的浪费。如鼠标的移动、提交按钮可能被用户快速重复的点击等。
**节流**和**防抖**就是为了解决这一问题。

- **防抖（debounce）：**
防抖指事件触发时，它将在指定时间后执行，如果这段时间内再次被调用，则重新计算执行时间。
通常用于滚动事件、调整窗口大小、鼠标移动、窗口搜索建议等。
\`\`\`javascript
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// 使用防抖函数
const debouncedFunction = debounce(() => {
    console.log('Debounced function called.');
}, 1000);

// 模拟事件触发
setInterval(() => {
    debouncedFunction();
}, 200);  // 防抖后，该函数触发后会等待1秒，如果1秒内再次触发，则重新计时

\`\`\`
- **节流（throttle）：** 
节流指连续触发多次的事件在指定时间范围内只执行一次，进而限制函数的执行频率。
通常用于自动保存、延时执行等。
\`\`\`javascript
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
}

// 使用节流函数
const throttledFunction = throttle(() => {
  console.log('Throttled function called.');
}, 1000);

// 模拟事件触发
setInterval(throttledFunction, 200);  // 节流后，该函数每秒最多执行一次

\`\`\`

> 总的来说，节流和防抖都是为了限制函数执行的频率，以优化性能、减少不必要的计算或请求，提高用户体验。选择使用哪种取决于具体的需求和事件特性。

## 10-9

### 请描述 static 修饰符。

\`static\` 关键字可以用于类、方法、属性等。

**静态字段**

如果将一个字段定义为static，那么这个字段并不会出现在每个类的对象中。每个静态字段只有一个副本。可以认为静态字段属于类，而不属于单个对象。

**静态常量**

JAVA中没有用于修饰常量的关键字，所以常量的修饰通常使用 \`public static final\` 三个关键字共同修饰。使其静态加载且不允许修改。

**静态方法**

静态方法是不操作对象的方法。例如 \`Math.pow(x,a)\`会计算 x 的 a 次幂。它不会使用任何 Math 对象来完成该方法调用。它没有隐式参数。

**工厂方法**

类似于 \`LocalDate\` 和 \`NumberFormat\` 的类使用静态工厂方法来构造对象，就是静态方法：

\`\`\`Java
LocalDate localdate = LocalDate.now(); 
LocalDate localdate = LocalDate.of(2020, 5, 13);  
System.out.println(NumberFormat.format(0.1));
\`\`\`

**main 方法**

调用静态方法不需要任何对象，与 \`Math.pow\` 同理，main 方法也是一个静态方法，启动程序时没有任何对象，将执行 main 方法并构造程序所需要的对象。

## 10-8

### 请描述修饰符、访问修饰符，非访问修饰符。

- **修饰符**（Modifiers）：指用于修饰类、方法。变量等的关键字，用于置顶元素的访问类型。作用域、权限、继承性、抽象性等。修饰符分为访问修饰符和非访问修饰符。

- **访问修饰符（Access Modifiers）**: 访问修饰符控制类、方法、变量等的访问权限，共有以下四中：

  | Name      | Description     |
  |`,readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2023/11.html",meta:{description:`## 11-30 

### 依赖注入的方法有哪些？

1. 构造器注入
2. Setter 方法注入
3. 接口注入
4. 注解注入
5. 工厂方法注入

## 11-29

### BeanFactory 和 FactoryBean 的区别？

- **BeanFactory**：管理 Bean 的容器，Spring 中生成的 Bean 都是由这个接口的实现来管理的。
- **FactoryBean**：通常是用来创建比较复杂的 bean，一般的 bean 直接用 xml 配置即可，但如果一个 bean 的创建过程中涉及到很多其他的 bean 和复杂的逻辑，
直接用 xml 配置比较麻烦，这时可以考虑用 FactoryBean，可以隐藏实例化复杂 Bean 的细节。

## 11-28

### 描述 Bean 的生命周期。

> 以下内容使用 \`Github Copilot\` 生成。

1. 实例化 Bean：Spring 通过反射机制利用 \`<bean>\` 的 class 属性指定实现类实例化 Bean。
2. 设置对象属性：Spring 利用 \`<bean>\` 的 \`<property>\` 子元素设置 Bean 的属性。
3. 调用 Bean 的初始化方法：如果 \`<bean>\` 的 init-method 属性指定了初始化方法，则 Spring 通过反射机制调用初始化方法。
4. Bean 可以使用了：Bean 对象已经可以使用了，它是一个可用的 Bean 实例。
5. 当容器关闭时，调用 Bean 的销毁方法：如果 \`<bean>\` 的 destory-method 属性指定了销毁方法，则 Spring 会通过反射机制调用销毁方法。

## 11-27

### 什么是 BeanDefinition？

\`BeanDefinition\` 用于管理 Spring 应用的对象和对象之间的依赖关系，是对象依赖关系的数据抽象。

## 11-26

### 描述 Spring 的两种 IOC 容器。

Spring 有两种 IOC 容器：\`BeanFactory\` 和 \`ApplicationContext\`。

- \`BeanFactory\` ：延迟注入(使用到某个 bean 的时候才会注入)，相比于BeanFactory 来说会占用更少的内存，程序启动速度更快。
BeanFactory 提供了最基本的 ioc 容器的功能（最基本的依赖注入支持）。

- \`ApplicationContext\` ：容器启动的时候，一次性创建所有 bean。ApplicationContext 扩展了 BeanFactory ， 
除了有BeanFactory的功能还有额外更多功能，所以一般开发人员使用 ApplicationContext 会更多。

## 11-25

### 请描述 Spring AOP 的动态代理。

Spring AOP中的动态代理主要有两种方式：JDK动态代理和CGLIB动态代理。

#### JDK动态代理

如果目标类实现了接口，Spring AOP 会选择使用 JDK 动态代理目标类。代理类根据目标类实现的接口动态生成，不需要自己编写，
生成的动态代理类和目标类都实现相同的接口。JDK动态代理的核心是InvocationHandler接口和Proxy类。

> 缺点：目标类必须有实现的接口。如果某个类没有实现接口，那么这个类就不能用JDK动态代理。

#### CGLIB动态代理

如果目标类没有实现接口，那么Spring AOP会选择使用CGLIB来动态代理目标类。CGLIB（Code Generation Library）可以在运行时动态生成类的字节码，
动态创建目标类的子类对象，在子类对象中增强目标类。

CGLIB是通过继承的方式做的动态代理，因此如果某个类被标记为final，那么它是无法使用CGLIB做动态代理的。

> 优点：目标类不需要实现特定的接口，更加灵活。

## 11-24

### 描述AOP的两种实现方式。

AOP 有两种实现方式：**静态代理** 和 **动态代理**。

#### 静态代理

代理类在编译阶段生成，在编译阶段将通知织入Java字节码中，也称编译时增强。AspectJ使用的是静态代理。

> 缺点： 代理对象需要与目标对象实现一样的接口，并且实现接口的方法，会有冗余代码。同时，一旦接口增加方法，目标对象与代理对象都要维护。

#### 动态代理

代理类在程序运行时创建，AOP框架不会去修改字节码，而是在内存中临时生成一个代理对象，在运行期间对业务方法进行增强，不会生成新类。

1.2 动态代理

## 11-23

### CountDownLatch 和 CyclicBarrier 的区别。

- CountDownLatch 的计数器只能使用一次。而 CyclicBarrier 的计数器可以使用 \`reset()\` 方法重置。
- CyclicBarrier 能处理更为复杂的业务场景，比如计算发生错误，可以结束阻塞，重置计数器，重新执行程序
- CyclicBarrier 提供 \`getNumberWaiting()\` 方法，可以获得 CyclicBarrier 阻塞的线程数量，还提供 \`isBroken()\` 方法，可以判断阻塞的线程是否被中断，等等。
- CountDownLatch 会阻塞主线程，CyclicBarrier 不会阻塞主线程，只会阻塞子线程。

## 11-22

### 什么是 CyclicBarrier？

\`CyclicBarrier\` 是一个同步工具类，它允许一组线程互相等待，直到到达某个公共屏障点（common barrier point）。因为该 barrier 在释放等待线程后可以重用，

\`\`\`java
import java.util.concurrent.CyclicBarrier;

class Scratch {
    public static void main(String[] args) {
        // CyclicBarrier 示例程序
        CyclicBarrier cyclicBarrier = new CyclicBarrier(2, () -> {
            System.out.println("所有线程执行完毕");
        });
        // 测试运行
        new Thread(() -> {
            try {
                System.out.println("线程1开始执行");
                Thread.sleep(1000);
                System.out.println("线程1执行完毕");
                cyclicBarrier.await();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        new Thread(() -> {
            try {
                System.out.println("线程2开始执行");
                Thread.sleep(2000);
                System.out.println("线程2执行完毕");
                cyclicBarrier.await();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        System.out.println("主线程执行完毕");
    }
}
\`\`\`

## 11-21

### 什么是 CountdownLatch？

\`CountDownLatch\` 是一个同步工具类，用来协调多个线程之间的同步。这个工具通常用来控制线程等待，它可以让某一个线程等待直到倒计时结束，再开始执行。

\`\`\`java
import java.util.concurrent.CyclicBarrier;

class Scratch {
    public static void main(String[] args) {
        // CountDownLatch 示例程序
        CyclicBarrier barrier = new CyclicBarrier(2, () -> {
            System.out.println("barrier end");
        });
        new Thread(() -> {
            try {
                System.out.println("thread 1");
                barrier.await();
                System.out.println("thread 1 end");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        new Thread(() -> {
            try {
                System.out.println("thread 2");
                barrier.await();
                System.out.println("thread 2 end");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
    }
}
\`\`\`

## 11-20

### 线程池都有哪些状态？

> 可以通过 \`Thread.State\` 枚举类来表示线程的状态。
这个枚举包括 NEW（新建）、RUNNABLE（可运行）、BLOCKED（被阻塞）、WAITING（等待）、TIMED_WAITING（定时等待）和 TERMINATED（终止）等状态。
通过 \`Thread.getState()\` 方法可以获取线程的状态。

1. **RUNNING**：接受新任务并且处理阻塞队列中的任务
2. **SHUTDOWN**：不接受新任务，但是处理阻塞队列中的任务
3. **STOP**：不接受新任务，不处理阻塞队列中的任务，并且中断正在处理的任务
4. **TIDYING**：所有任务都终止了，\`workerCount\` 为 0，线程池的状态在转换为 TIDYING 状态时会执行钩子函数 \`terminated()\`
5. **TERMINATED**：\`terminated()\` 执行完成

## 11-19

### notify() 和 notifyAll() 有什么区别？

\`notify()\` 方法会随机唤醒等待队列中的一个线程，而 \`notifyAll()\` 方法会唤醒等待队列中的所有线程。

## 11-18

### sleep() 和 wait() 有什么区别？

- \`sleep()\` 方法是 Thread 类的静态方法，调用该方法会让当前线程进入休眠状态，不会释放锁，休眠时间到了之后会自动恢复运行状态。
- \`wait()\` 方法是 Object 类的方法，调用该方法会让当前线程进入等待状态，会释放锁，直到其他线程调用 notify() 或 notifyAll() 方法之后才会重新进入运行状态。

## 11-17

### ThreadLocal 内存泄漏原因，如何避免？

如果在线程池中使用 ThreadLocal 会造成内存泄漏，因为当 ThreadLocal 对象使用完之后，应该要把设置的key，value 也就是 Entry 对象进行回收，
但线程池中的线程不会回收，而线程对象是通过强引用指向 ThreadLocalMap，
ThreadLocalMap 也是通过强引用指向 Entry 对象，线程不被回收，Entry 对象也就不会被回收，从而出现内存泄漏。

#### 解决方法：

- 在使用了 ThreadLocal 对象之后，手动调用 ThreadLocal 的 remove 方法，手动清除 Entry 对象。
- 将 ThreadLocal 变量定义成 private static，这样就一直存在ThreadLocal的强引用，也就能保证任何时候都能将通过 ThreadLocal 的弱引用访问到 Entry 的 value 值，进而清除掉。

## 11-16

### 线程之间如何进行通信？

- 通过共享内存或基于网络通信
- 如果是基于共享内存进行通信，则需要考虑并发问题，什么时候阻塞，什么时候唤醒
- 想 Java 中的 wait()、notify() 就是阻塞唤醒
- 通过网络就比较简单，通过网络连接将数据发送给对方，当然也要考虑到并发问题，处理方式就是加锁等方式。

## 11-15

### 什么是 ThreadLocal？

ThreadLocal 是 Java 中所提供的线程本地存储机制，可以利用该机制将数据缓存在某个线程内部，该线程可以在任意时刻、任意方法中获取缓存的数据。

ThreadLocal 底层是通过 TreadLocalMap 来实现的，每个 Thread 对象中都存在一个 ThreadLocalMap，Map 的 key 为 ThreadLocal 对象，Ma p的 value 为需要缓存的值 。

## 11-14

### synchronized 关键字的作用？

synchronized 关键字可以用于修饰一段代码或一个方法，用于实现现成的同步，表示该段代码不能被多个线程同时执行。

当一个线程进入被 synchronized 关键字修饰的代码块或方法时，其他试图访问的线程将被阻塞。

synchronized 关键字的作用体现在两个方面：

1. 确保方法或代码块的互斥访问。（加锁与解锁）
2. 确保内存可见性。（强制从缓存加载数据）

## 11-13

### 线程池有几种创建方式？

1. newCachedThreadPool 创建一个可缓存线程池
2. newFixedThreadPool 创建一个定长线程池，可控制线程最大并发数 
3. newScheduledThreadPool 创建一个定长线程池，支持定时及周期性任务执行。 
4. newSingleThreadExecutor 创建一个单线程化的线程池，它只会用唯一的工作线程来执行任务

## 11-12

### 线程的 run()和 start()有什么区别？

每个线程都是通过某个特定 Thread 对象所对应的方法 run()来完成其操作的，run()方法称为线程体。通过调用 Thread 类的 start()方法来启动一个线程。

start() 方法用于启动线程，run() 方法用于执行线程的运行时代码。run() 可以重复调用，而 start()只能调用一次。

start() 方法来启动一个线程，真正实现了多线程运行。调用start()方法无需等待run方法体代码执行完毕，可以直接继续执行其他的代码；
此时线程是处于就绪状态，并没有运行。 然后通过此Thread类调用方法run()来完成其运行状态， run()方法运行结束， 此线程终止。然后CPU再调度其它线程。

run()方法是在本线程里的，只是线程里的一个函数，而不是多线程的。 如果直接调用 run()，其实就相当于是调用了一个普通函数而已，直接待用run()方法必须等待run()方法执行完毕才能执行下面的代码，
所以执行路径还是只有一条，根本就没有线程的特征，所以在多线程执行时要使用 start()方法而不是 run()方法。


## 11-11

### 守护线程与用户线程有什么区别？

- 守护线程：运行在后台，为其他前台线程服务。一旦所有用户线程都结束运行，守护线程会随 JVM 一起结束工作。
- 用户线程：运行在前台，执行具体的任务，如程序的主线程、连接网络的子线程等都是用户线程。

## 11-10

### 主线程是不是守护线程？

主线程不是守护线程，它是一个用户线程，它的优先级是普通优先级，当所有的用户线程都结束了，主线程才会结束，如果主线程结束了，其他用户线程还在运行，那么程序也会继续运行。

## 11-9

### 什么是守护线程？

守护线程是一种特殊的线程，它的优先级很低，通常用来做后台作业，比如垃圾回收线程就是一个很称职的守护者，并且它**不能持有任何资源**，
因为它会在任何时候被停止，如果它持有资源，那么其他线程就无法访问这些资源了。

## 11-8

### 线程的状态有哪些？

1. 新建状态（New）：当线程对象对创建后，即进入了新建状态; 
2. 就绪状态（Runnable）：当调用线程对象的 \`start()\` 方法，线程即进入就绪状态。
3. 运行状态（Running）：当CPU开始调度处于就绪状态的线程时，此时线程才得以真正执行，即进入到运行状态。
4. 阻塞状态（Blocked）：处于运行状态中的线程由于某种原因，暂时放弃对 CPU 的使用权，停止执行，此时进入阻塞状态，直到其进入到就绪状态，才 有机会再次被 CPU 调用以进入到运行状态。
根据阻塞产生的原因不同，阻塞状态又可以分为三种： 
    - 等待阻塞：运行状态中的线程执行 \`wait()\` 方法，使本线程进入到等待阻塞状态； 
    - 同步阻塞 — 线程在获取 synchronized 同步锁失败（因为锁被其它线程所占用），它会进入同步阻塞状态； 
    - 其他阻塞 — 通过调用线程的 \`sleep()\` 或 \`join()\` 或发出了I/O请求时，线程会进入到阻塞状态。当 \`sleep()\` 状态超时. \`join()\` 等待线程终止或者超时. 或者 I/O 处理完毕时，线程重新转入就绪状态。 
5. 死亡状态（Dead）：线程执行完了或者因异常退出了 \`run()\` 方法，该线程结束生命周期。

## 11-7

### 创建线程有哪几种方式？

1. 继承 Thread 类，重写 run() 方法，调用 start() 方法启动线程。
2. 实现 Runnable 接口，重写 run() 方法，创建 Thread 对象，调用 start() 方法启动线程。
3. 实现 Callable 接口，重写 call() 方法，创建 FutureTask 对象，创建 Thread 对象，调用 start() 方法启动线程。
4. 使用线程池创建线程。

> 使用线程池的方式创建是最优解，因为线程池可以有效的控制线程的数量，避免因为创建线程过多导致的内存溢出，提高了系统资源的利用率，同时线程池提供了更多更强大的功能。

## 11-6

### 都有哪些原子类？请举例说明。

\`java.util.concurrent \`这个包里面提供了一组原子类。其基本的特性就是在多线程环境下，当有多个线程同时执行这些类的实例包含的方法时，具有排他性。

- 原子类：AtomicBoolean，AtomicInteger，AtomicLong，AtomicReference
- 原子数组：AtomicIntegerArray，AtomicLongArray，AtomicReferenceArray
- 原子属性更新器：AtomicLongFieldUpdater，AtomicIntegerFieldUpdater，AtomicReferenceFieldUpdater
- 解决ABA问题的原子类：AtomicMarkableReference（通过引入一个boolean来反映中间有没有变过），AtomicStampedReference（通过引入一个int来累加来反映中间有没有变过）


## 11-5

### 什么是原子操作?

原子操作（atomic operation）意为”不可被中断的一个或一系列操作” 。处理器使用基于对缓存加锁或总线加锁的方式来实现多处理器之间的原子操作。
在Java中可以通过锁和循环CAS的方式来实现原子操作。CAS操作——Compare & Set，或是 Compare & Swap，现在几乎所有的CPU指令都支持CAS的原子操作。

原子操作是指一个不受其他操作影响的操作任务单元。原子操作是在多线程环境下避免数据不一致必须的手段。
\`int++\` 并不是一个原子操作，所以当一个线程读取它的值并加1时，另外一个线程有可能会读到之前的值，这就会引发错误。

为了解决这个问题，必须保证增加操作是原子的，在JDK1.5之前我们可以使用同步技术来做到这一点。
到JDK1.5，java.util.concurrent.atomic包提供了int和long类型的原子包装类，它们可以自动的保证对于他们的操作是原子的并且不需要使用同步。

## 11-4

### execute 与 submit 的用法与区别。

execute 执行后**没有返回结果**，只有1种用法

| 方法                               | 描述                                          |
|`,readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2023/12.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2023/9.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2023/",meta:{description:"每天至少一道面试题，范围不限。",readingTime:!1,date:"2024-03-15 16:14:35",author:!1,title:"每日一题 - 2023",hidden:!0}},{route:"/interview/question-by-day/2024/1.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/10.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/11.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/12.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/2.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/3.html",meta:{description:"",readingTime:!1,hidden:!0,title:"每日一题",date:"2024-03-22 16:08:20"}},{route:"/interview/question-by-day/2024/4.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/5.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/6.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/7.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/8.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/9.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/",meta:{description:"每天至少一道面试题，范围不限，欢迎留言监督。",readingTime:!1,date:"2024-03-22 16:08:20",top:1,author:!1,title:"每日一题 - 2024"}},{route:"/training/linux/linux-lamp/first.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第一步编译安装httpd服务器",date:"2024-03-15 15:48:47"}},{route:"/training/linux/linux-lamp/",meta:{description:"",tags:["Linux","架构","运维","LAMP"],category:"Linux 运维",title:"LAMP编译安装三部曲",date:"2024-03-15 15:48:47"}},{route:"/training/linux/linux-lamp/second.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第二步编译安装mariadb数据库环境",date:"2024-03-15 15:48:47"}},{route:"/training/linux/linux-lamp/third.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第三步编译安装PHP",date:"2024-03-15 15:48:47"}}]),Pu={customSearchQuery:function(e){return e.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()},filter(t){return t.meta.publish!==!1}};function Iu(t,e="yyyy-MM-dd hh:mm:ss"){t instanceof Date||(t=new Date(t));const n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${t.getFullYear()}`.substr(4-RegExp.$1.length)));for(const a in n)new RegExp(`(${a})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?n[a]:`00${n[a]}`.substr(`${n[a]}`.length)));return e}const Tu={},Au={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Vu=_n('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Ou=[Vu];function Eu(t,e){return c(),f("svg",Au,Ou)}const xu=P(Tu,[["render",Eu]]),Nt=t=>(de("data-v-12d05c09"),t=t(),he(),t),Nu={class:"blog-search","data-pagefind-ignore":"all"},Bu=Nt(()=>h("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[h("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Hu={key:0,class:"search-tip"},Fu={key:1,class:"metaKey"},Du={class:"search-dialog"},Ru={class:"link"},ju={class:"title"},zu={key:0,class:"date"},Uu=["innerHTML"],Wu={class:"command-palette-logo"},qu={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Gu=Nt(()=>h("span",{class:"command-palette-Label"},"Search by",-1)),Ju=Nt(()=>h("ul",{class:"command-palette-commands"},[h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),h("span",{class:"command-palette-Label"},"to select")]),h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),h("span",{class:"command-palette-Label"},"to navigate")]),h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),h("span",{class:"command-palette-Label"},"to close")])],-1)),Ku=S({__name:"Search",setup(t){ma(V=>({db9a1184:u.value}));const e=T([]),n=Pu,{localeIndex:a,site:s}=lt(),o=C(()=>{var V;return{...n,...((V=n==null?void 0:n.locales)==null?void 0:V[a.value])||{}}}),r=C(()=>{var V;return((V=o.value)==null?void 0:V.showDate)??!0}),i=Mu(),l=C(()=>i.width.value<760),u=C(()=>l.value?0:1),p=C(()=>{var V;return(V=o.value)!=null&&V.heading?o.value.heading.replace(/\{\{searchResult\}\}/,e.value.length):`Total: ${e.value.length} search results.`}),m=T("");be(()=>{m.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const v=T(!1),b=T(""),w=_u({passive:!1,onEventFired(V){V.ctrlKey&&V.key==="k"&&V.type==="keydown"&&V.preventDefault()}}),g=w["Meta+K"],_=w["Ctrl+K"],I=w.Escape;G(g,V=>{V&&(v.value=!0)}),G(_,V=>{V&&(v.value=!0)}),G(I,V=>{V&&(v.value=!1)});function M(){if(!b.value){e.value=[];return}e.value=it.value.filter(V=>`${V.meta.description}${V.meta.title}`.includes(b.value)).map(V=>{var q,te;return{...V,meta:{...V.meta,description:((te=(q=V.meta)==null?void 0:q.description)==null?void 0:te.replace(new RegExp(`(${b.value})`,"g"),"<mark>$1</mark>"))||""}}}),e.value.sort((V,q)=>+new Date(q.meta.date)-+new Date(V.meta.date))}const A=C(()=>{var V;return((V=o.value)==null?void 0:V.resultOptimization)??!0});G(()=>b.value,async()=>{var V,q,te;if(!((V=window==null?void 0:window.__pagefind__)!=null&&V.search))M();else{const ve=typeof o.value.customSearchQuery=="function"?o.value.customSearchQuery(b.value):b.value;await((te=(q=window==null?void 0:window.__pagefind__)==null?void 0:q.search)==null?void 0:te.call(q,ve).then(async Z=>{const nt=(await Promise.all(Z.results.map(X=>X.data()))).map(X=>{var ue;return{route:X.url.startsWith(s.value.base)?X.url:Qe(X.url),meta:{title:X.meta.title,description:X.excerpt,date:(ue=X==null?void 0:X.meta)==null?void 0:ue.date}}}).map(X=>{const ue=it.value.find(at=>at.route===X.route);return{...X,meta:{...X.meta,...ue==null?void 0:ue.meta}}}).filter(X=>!A.value||it.value.some(ue=>ue.route===X.route));e.value=nt.filter(o.value.filter??(()=>!0))}))}pe(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(ve=>{ve.setAttribute("aria-disabled","false")})})});function E(V){V.target===V.currentTarget&&(v.value=!1)}G(()=>v.value,V=>{var q;V?pe(()=>{var te;(te=document.querySelector("div[command-dialog-mask]"))==null||te.addEventListener("click",E)}):(q=document.querySelector("div[command-dialog-mask]"))==null||q.removeEventListener("click",E)});const D=T(999),W=T(0),F=C(()=>{const q=W.value%Math.ceil(e.value.length/D.value)*D.value;return e.value.slice(q,q+D.value)}),B=va(),R=Be();function se(V){v.value=!1,R.path!==V.value&&B.go(V.value)}const{lang:me}=lt(),oe=C(()=>o.value.langReload??!0);return G(()=>me.value,()=>{oe.value&&window.location.reload()}),(V,q)=>{var ve;const te=Se("ClientOnly");return c(),f("div",Nu,[h("div",{class:"nav-search-btn-wait",onClick:q[0]||(q[0]=Z=>v.value=!0)},[Bu,l.value?L("",!0):(c(),f("span",Hu,H(((ve=o.value)==null?void 0:ve.btnPlaceholder)||"Search"),1)),l.value?L("",!0):(c(),f("span",Fu,H(m.value)+" K ",1))]),$(te,null,{default:k(()=>[$(d(Ae).Dialog,{visible:v.value,theme:"algolia"},ga({header:k(()=>{var Z;return[$(d(Ae).Input,{value:b.value,"onUpdate:value":q[1]||(q[1]=xe=>b.value=xe),placeholder:((Z=o.value)==null?void 0:Z.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:k(()=>[h("div",Du,[$(d(Ae).List,null,{default:k(()=>[e.value.length?(c(),x(d(Ae).Group,{key:1,heading:p.value},{default:k(()=>[(c(!0),f(J,null,ee(F.value,Z=>(c(),x(d(Ae).Item,{key:Z.route,"data-value":Z.route,onSelect:se},{default:k(()=>[h("div",Ru,[h("div",ju,[h("span",null,H(Z.meta.title),1),r.value&&Z.meta.date?(c(),f("span",zu,H(d(Iu)(Z.meta.date,"yyyy-MM-dd")),1)):L("",!0)]),h("div",{class:"des",innerHTML:Z.meta.description},null,8,Uu)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),x(d(Ae).Empty,{key:0},{default:k(()=>{var Z;return[ne(H(((Z=o.value)==null?void 0:Z.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[e.value.length?{name:"footer",fn:k(()=>[h("div",Wu,[h("a",qu,[Gu,$(xu,{style:{width:"77px"}})])]),Ju]),key:"0"}:void 0]),1032,["visible"])]),_:1})])}}}),Qu=P(Ku,[["__scopeId","data-v-12d05c09"]]),Zu=S({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=j();return(n,a)=>d(e).socialLinks?(c(),x(et,{key:0,class:"VPNavBarSocialLinks",links:d(e).socialLinks},null,8,["links"])):L("",!0)}}),Xu=P(Zu,[["__scopeId","data-v-c7f4fbcd"]]),Yu=["href"],ed=S({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=j(),{hasSidebar:a}=ke(),{currentLang:s}=He();return(o,r)=>(c(),f("div",{class:U(["VPNavBarTitle",{"has-sidebar":d(a)}])},[h("a",{class:"title",href:d(n).logoLink??d(Mt)(d(s).link)},[y(o.$slots,"nav-bar-title-before",{},void 0,!0),d(n).logo?(c(),x(qe,{key:0,class:"logo",image:d(n).logo},null,8,["image"])):L("",!0),d(n).siteTitle?(c(),f(J,{key:1},[ne(H(d(n).siteTitle),1)],64)):d(n).siteTitle===void 0?(c(),f(J,{key:2},[ne(H(d(e).title),1)],64)):L("",!0),y(o.$slots,"nav-bar-title-after",{},void 0,!0)],8,Yu)],2))}}),td=P(ed,[["__scopeId","data-v-4ec8ecad"]]),nd={},ad={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},sd=h("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),od=h("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),rd=[sd,od];function id(t,e){return c(),f("svg",ad,rd)}const ea=P(nd,[["render",id]]),ld={class:"items"},cd={class:"title"},ud=S({__name:"VPNavBarTranslations",setup(t){const{theme:e}=j(),{localeLinks:n,currentLang:a}=He({correspondingLink:!0});return(s,o)=>d(n).length&&d(a).label?(c(),x(At,{key:0,class:"VPNavBarTranslations",icon:ea,label:d(e).langMenuLabel||"Change language"},{default:k(()=>[h("div",ld,[h("p",cd,H(d(a).label),1),(c(!0),f(J,null,ee(d(n),r=>(c(),x(Ye,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):L("",!0)}}),dd=P(ud,[["__scopeId","data-v-6acb6e45"]]),hd=t=>(de("data-v-a8a84df8"),t=t(),he(),t),pd={class:"wrapper"},fd={class:"container"},md={class:"title"},vd={class:"content"},gd={class:"content-body"},_d=hd(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),yd=S({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=gn(),{hasSidebar:n}=ke(),{hasLocalNav:a}=Pn(),{frontmatter:s}=j(),o=T({});return mn(()=>{o.value={"has-sidebar":n.value,"has-local-nav":a.value,top:s.value.layout==="home"&&e.value===0}}),(r,i)=>(c(),f("div",{class:U(["VPNavBar",o.value])},[h("div",pd,[h("div",fd,[h("div",md,[$(td,null,{"nav-bar-title-before":k(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",vd,[h("div",gd,[y(r.$slots,"nav-bar-content-before",{},void 0,!0),$(Qu,{class:"search"}),$(Wi,{class:"menu"}),$(dd,{class:"translations"}),$(Br,{class:"appearance"}),$(Xu,{class:"social-links"}),$(Ti,{class:"extra"}),y(r.$slots,"nav-bar-content-after",{},void 0,!0),$(Ni,{class:"hamburger",active:r.isScreenOpen,onClick:i[0]||(i[0]=l=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),_d],2))}}),bd=P(yd,[["__scopeId","data-v-a8a84df8"]]),kd={key:0,class:"VPNavScreenAppearance"},wd={class:"text"},$d=S({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=j();return(a,s)=>d(e).appearance&&d(e).appearance!=="force-dark"?(c(),f("div",kd,[h("p",wd,H(d(n).darkModeSwitchLabel||"Appearance"),1),$(It)])):L("",!0)}}),Sd=P($d,[["__scopeId","data-v-a4e1021e"]]),Cd=S({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Xe("close-screen");return(n,a)=>(c(),x(ce,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:d(e)},{default:k(()=>[ne(H(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Ld=P(Cd,[["__scopeId","data-v-4bbc7d8d"]]),Md={},Pd={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Id=h("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),Td=[Id];function Ad(t,e){return c(),f("svg",Pd,Td)}const Vd=P(Md,[["render",Ad]]),Od=S({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Xe("close-screen");return(n,a)=>(c(),x(ce,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:d(e)},{default:k(()=>[ne(H(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),ta=P(Od,[["__scopeId","data-v-70e8e6d6"]]),Ed={class:"VPNavScreenMenuGroupSection"},xd={key:0,class:"title"},Nd=S({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",Ed,[e.text?(c(),f("p",xd,H(e.text),1)):L("",!0),(c(!0),f(J,null,ee(e.items,a=>(c(),x(ta,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Bd=P(Nd,[["__scopeId","data-v-046d8b52"]]),Hd=["aria-controls","aria-expanded"],Fd=["innerHTML"],Dd=["id"],Rd={key:1,class:"group"},jd=S({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=T(!1),a=C(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(o,r)=>(c(),f("div",{class:U(["VPNavScreenMenuGroup",{open:n.value}])},[h("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:s},[h("span",{class:"button-text",innerHTML:o.text},null,8,Fd),$(Vd,{class:"button-icon"})],8,Hd),h("div",{id:a.value,class:"items"},[(c(!0),f(J,null,ee(o.items,i=>(c(),f(J,{key:i.text},["link"in i?(c(),f("div",{key:i.text,class:"item"},[$(ta,{item:i},null,8,["item"])])):(c(),f("div",Rd,[$(Bd,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Dd)],2))}}),zd=P(jd,[["__scopeId","data-v-492f1ca1"]]),Ud={key:0,class:"VPNavScreenMenu"},Wd=S({__name:"VPNavScreenMenu",setup(t){const{theme:e}=j();return(n,a)=>d(e).nav?(c(),f("nav",Ud,[(c(!0),f(J,null,ee(d(e).nav,s=>(c(),f(J,{key:s.text},["link"in s?(c(),x(Ld,{key:0,item:s},null,8,["item"])):(c(),x(zd,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):L("",!0)}}),qd=S({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=j();return(n,a)=>d(e).socialLinks?(c(),x(et,{key:0,class:"VPNavScreenSocialLinks",links:d(e).socialLinks},null,8,["links"])):L("",!0)}}),Gd={class:"list"},Jd=S({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=He({correspondingLink:!0}),a=T(!1);function s(){a.value=!a.value}return(o,r)=>d(e).length&&d(n).label?(c(),f("div",{key:0,class:U(["VPNavScreenTranslations",{open:a.value}])},[h("button",{class:"title",onClick:s},[$(ea,{class:"icon lang"}),ne(" "+H(d(n).label)+" ",1),$(Vn,{class:"icon chevron"})]),h("ul",Gd,[(c(!0),f(J,null,ee(d(e),i=>(c(),f("li",{key:i.link,class:"item"},[$(ce,{class:"link",href:i.link},{default:k(()=>[ne(H(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):L("",!0)}}),Kd=P(Jd,[["__scopeId","data-v-caba1357"]]),Qd={class:"container"},Zd=S({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=T(null),n=$n(Ve?document.body:null);return(a,s)=>(c(),x(Ke,{name:"fade",onEnter:s[0]||(s[0]=o=>n.value=!0),onAfterLeave:s[1]||(s[1]=o=>n.value=!1)},{default:k(()=>[a.open?(c(),f("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",Qd,[y(a.$slots,"nav-screen-content-before",{},void 0,!0),$(Wd,{class:"menu"}),$(Kd,{class:"translations"}),$(Sd,{class:"appearance"}),$(qd,{class:"social-links"}),y(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):L("",!0)]),_:3}))}}),Xd=P(Zd,[["__scopeId","data-v-3806754f"]]),Yd={key:0,class:"VPNav"},e1=S({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:a}=mr(),{frontmatter:s}=j(),o=C(()=>s.value.navbar!==!1);return Ct("close-screen",n),$e(()=>{Ve&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(r,i)=>o.value?(c(),f("header",Yd,[$(bd,{"is-screen-open":d(e),onToggleScreen:d(a)},{"nav-bar-title-before":k(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[y(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[y(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),$(Xd,{open:d(e)},{"nav-screen-content-before":k(()=>[y(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[y(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):L("",!0)}}),t1=P(e1,[["__scopeId","data-v-70d7cf73"]]),n1=t=>(de("data-v-64e3f64d"),t=t(),he(),t),a1=["role","tabindex"],s1=n1(()=>h("div",{class:"indicator"},null,-1)),o1={key:1,class:"items"},r1=S({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:a,isLink:s,isActiveLink:o,hasActiveLink:r,hasChildren:i,toggle:l}=Ra(C(()=>e.item)),u=C(()=>i.value?"section":"div"),p=C(()=>s.value?"a":"div"),m=C(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),v=C(()=>s.value?void 0:"button"),b=C(()=>[[`level-${e.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":s.value},{"is-active":o.value},{"has-active":r.value}]);function w(_){"key"in _&&_.key!=="Enter"||!e.item.link&&l()}function g(){e.item.link&&l()}return(_,I)=>{const M=Se("VPSidebarItem",!0);return c(),x(Me(u.value),{class:U(["VPSidebarItem",b.value])},{default:k(()=>[_.item.text?(c(),f("div",je({key:0,class:"item",role:v.value},_a(_.item.items?{click:w,keydown:w}:{},!0),{tabindex:_.item.items&&0}),[s1,_.item.link?(c(),x(ce,{key:0,tag:p.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:k(()=>[(c(),x(Me(m.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),x(Me(m.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null?(c(),f("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:g,onKeydown:ya(g,["enter"]),tabindex:"0"},[$(In,{class:"caret-icon"})],32)):L("",!0)],16,a1)):L("",!0),_.item.items&&_.item.items.length?(c(),f("div",o1,[_.depth<5?(c(!0),f(J,{key:0},ee(_.item.items,A=>(c(),x(M,{key:A.text,item:A,depth:_.depth+1},null,8,["item","depth"]))),128)):L("",!0)])):L("",!0)]),_:1},8,["class"])}}}),i1=P(r1,[["__scopeId","data-v-64e3f64d"]]),na=t=>(de("data-v-213d12bc"),t=t(),he(),t),l1=na(()=>h("div",{class:"curtain"},null,-1)),c1={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},u1=na(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),d1=S({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=ke(),a=t,s=T(null),o=$n(Ve?document.body:null);return G([a,s],()=>{var r;a.open?(o.value=!0,(r=s.value)==null||r.focus()):o.value=!1},{immediate:!0,flush:"post"}),(r,i)=>d(n)?(c(),f("aside",{key:0,class:U(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:s,onClick:i[0]||(i[0]=ba(()=>{},["stop"]))},[l1,h("nav",c1,[u1,y(r.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),f(J,null,ee(d(e),l=>(c(),f("div",{key:l.text,class:"group"},[$(i1,{item:l,depth:0},null,8,["item"])]))),128)),y(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):L("",!0)}}),h1=P(d1,[["__scopeId","data-v-213d12bc"]]),p1=S({__name:"VPSkipLink",setup(t){const e=Be(),n=T();G(()=>e.path,()=>n.value.focus());function a({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const r=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",r)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",r),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(c(),f(J,null,[h("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a}," Skip to content ")],64))}}),f1=P(p1,[["__scopeId","data-v-1baae4fb"]]),m1=S({__name:"Layout",setup(t){const{isOpen:e,open:n,close:a}=ke(),s=Be();G(()=>s.path,a),Da(e,a);const{frontmatter:o}=j(),r=ka(),i=C(()=>!!r["home-hero-image"]);return Ct("hero-image-slot-exists",i),(l,u)=>{const p=Se("Content");return d(o).layout!==!1?(c(),f("div",{key:0,class:U(["Layout",d(o).pageClass])},[y(l.$slots,"layout-top",{},void 0,!0),$(f1),$(Ca,{class:"backdrop",show:d(e),onClick:d(a)},null,8,["show","onClick"]),$(t1,null,{"nav-bar-title-before":k(()=>[y(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[y(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[y(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[y(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[y(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[y(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),$(fr,{open:d(e),onOpenMenu:d(n)},null,8,["open","onOpenMenu"]),$(h1,{open:d(e)},{"sidebar-nav-before":k(()=>[y(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[y(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),$(Do,{"data-pagefind-body":""},{"page-top":k(()=>[y(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[y(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[y(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[y(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[y(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[y(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[y(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[y(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[y(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[y(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[y(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[y(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[y(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[y(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[y(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[y(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[y(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[y(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[y(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[y(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),$(Wo),y(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),x(p,{key:1}))}}}),v1=P(m1,[["__scopeId","data-v-041063bf"]]),g1={},_1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},y1=h("path",{d:"M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"},null,-1),b1=[y1];function k1(t,e){return c(),f("svg",_1,b1)}const w1=P(g1,[["render",k1]]),$1={class:"profile"},S1={class:"avatar"},C1=["src","alt"],L1={class:"data"},M1={class:"name"},P1={key:0,class:"affiliation"},I1={key:0,class:"title"},T1={key:1,class:"at"},A1=["innerHTML"],V1={key:2,class:"links"},O1={key:0,class:"sp"},E1=S({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(t){return(e,n)=>(c(),f("article",{class:U(["VPTeamMembersItem",[e.size]])},[h("div",$1,[h("figure",S1,[h("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,C1)]),h("div",L1,[h("h1",M1,H(e.member.name),1),e.member.title||e.member.org?(c(),f("p",P1,[e.member.title?(c(),f("span",I1,H(e.member.title),1)):L("",!0),e.member.title&&e.member.org?(c(),f("span",T1," @ ")):L("",!0),e.member.org?(c(),x(ce,{key:2,class:U(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:k(()=>[ne(H(e.member.org),1)]),_:1},8,["class","href"])):L("",!0)])):L("",!0),e.member.desc?(c(),f("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,A1)):L("",!0),e.member.links?(c(),f("div",V1,[$(et,{links:e.member.links},null,8,["links"])])):L("",!0)])]),e.member.sponsor?(c(),f("div",O1,[$(ce,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:k(()=>[$(w1,{class:"sp-icon"}),ne(" "+H(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):L("",!0)],2))}}),x1=P(E1,[["__scopeId","data-v-9ef5cf8c"]]),N1={class:"container"},B1=S({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(t){const e=t,n=C(()=>[e.size,`count-${e.members.length}`]);return(a,s)=>(c(),f("div",{class:U(["VPTeamMembers",n.value])},[h("div",N1,[(c(!0),f(J,null,ee(a.members,o=>(c(),f("div",{key:o.name,class:"item"},[$(x1,{size:a.size,member:o},null,8,["size","member"])]))),128))])],2))}}),K1=P(B1,[["__scopeId","data-v-e80abd34"]]),Q1={Layout:v1,enhanceApp:({app:t})=>{t.component("Badge",wa)}};export{K1 as V,Y as a,vu as b,le as c,xc as d,G1 as e,D1 as f,z1 as g,j1 as h,Ne as i,J1 as j,F1 as k,Mu as l,W1 as m,U1 as n,R1 as o,q1 as p,Q1 as q,ns as r,Te as t,ou as u};
