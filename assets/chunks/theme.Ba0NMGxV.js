import{d as S,o as c,c as f,r as b,a as ne,t as N,n as W,b as E,w as k,e as L,T as Ze,_ as P,u as ut,i as sa,l as ra,f as Ye,g as C,h as T,j as ye,k as h,m as d,p as de,q as he,s as Pe,v as Ae,x as dt,y as q,z as $e,A as St,B as gn,C as ia,D as Se,F as G,E as ee,G as Ct,H as Xe,I as $,J as _n,K as Me,L as je,M as Re,N as et,O as la,P as ca,Q as ua,R as pe,S as bn,U as yn,V as Lt,W as ge,X as Mt,Y as Pt,Z as da,$ as Je,a0 as Ue,a1 as ha,a2 as qe,a3 as kn,a4 as wn,a5 as pa,a6 as fa,a7 as ma,a8 as va,a9 as ga,aa as $n,ab as _a,ac as ba,ad as ya,ae as ka}from"./framework.GEUfU7f1.js";const wa=S({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),f("span",{class:W(["VPBadge",e.type])},[b(e.$slots,"default",{},()=>[ne(N(e.text),1)])],2))}}),$a={key:0,class:"VPBackdrop"},Sa=S({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),E(Ze,{name:"fade"},{default:k(()=>[e.show?(c(),f("div",$a)):L("",!0)]),_:1}))}}),Ca=P(Sa,[["__scopeId","data-v-15469501"]]),R=ut;function La(t,e){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(t,e):(t(),(a=!0)&&setTimeout(()=>a=!1,e))}}function ht(t){return/^\//.test(t)?t:`/${t}`}function xt(t){const{pathname:e,search:n,hash:a,protocol:o}=new URL(t,"http://a.com");if(sa(t)||t.startsWith("#")||!o.startsWith("http")||/\.(?!html|md)\w+($|\?)/i.test(t)&&ra(t))return t;const{site:s}=R(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${n}${a}`);return Ye(r)}function Ne({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:a,page:o,theme:s}=R(),r=C(()=>{var l,u;return{label:(l=n.value.locales[a.value])==null?void 0:l.label,link:((u=n.value.locales[a.value])==null?void 0:u.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:C(()=>Object.entries(n.value.locales).flatMap(([l,u])=>t&&r.value.label===u.label?[]:{text:u.label,link:Ma(u.link||(l==="root"?"/":`/${l}/`),s.value.i18nRouting!==!1&&e,o.value.relativePath.slice(r.value.link.length-1),!n.value.cleanUrls)})),currentLang:r}}function Ma(t,e,n,a){return e?t.replace(/\/$/,"")+ht(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):t}const Pa=t=>(de("data-v-c9d20f1d"),t=t(),he(),t),xa={class:"NotFound"},Ta={class:"code"},Ia={class:"title"},Aa=Pa(()=>h("div",{class:"divider"},null,-1)),Va={class:"quote"},Oa={class:"action"},Ea=["href","aria-label"],Ba=S({__name:"NotFound",setup(t){const{site:e,theme:n}=R(),{localeLinks:a}=Ne({removeCurrent:!1}),o=T("/");return ye(()=>{var r;const s=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");a.value.length&&(o.value=((r=a.value.find(({link:i})=>i.startsWith(s)))==null?void 0:r.link)||a.value[0].link)}),(s,r)=>{var i,l,u,p,m;return c(),f("div",xa,[h("p",Ta,N(((i=d(n).notFound)==null?void 0:i.code)??"404"),1),h("h1",Ia,N(((l=d(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Aa,h("blockquote",Va,N(((u=d(n).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",Oa,[h("a",{class:"link",href:d(Ye)(o.value),"aria-label":((p=d(n).notFound)==null?void 0:p.linkLabel)??"go to home"},N(((m=d(n).notFound)==null?void 0:m.linkText)??"Take me home"),9,Ea)])])}}}),ja=P(Ba,[["__scopeId","data-v-c9d20f1d"]]);function Sn(t,e){if(Array.isArray(t))return ze(t);if(t==null)return[];e=ht(e);const n=Object.keys(t).sort((o,s)=>s.split("/").length-o.split("/").length).find(o=>e.startsWith(ht(o))),a=n?t[n]:[];return Array.isArray(a)?ze(a):ze(a.items,a.base)}function Na(t){const e=[];let n=0;for(const a in t){const o=t[a];if(o.items){n=e.push(o);continue}e[n]||e.push({items:[]}),e[n].items.push(o)}return e}function Fa(t){const e=[];function n(a){for(const o of a)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&n(o.items)}return n(t),e}function pt(t,e){return Array.isArray(e)?e.some(n=>pt(t,n)):Pe(t,e.link)?!0:e.items?pt(t,e.items):!1}function ze(t,e){return[...t].map(n=>{const a={...n},o=a.base||e;return o&&a.link&&(a.link=o+a.link),a.items&&(a.items=ze(a.items,o)),a})}function ke(){const{frontmatter:t,page:e,theme:n}=R(),a=dt("(min-width: 960px)"),o=T(!1),s=C(()=>{const g=n.value.sidebar,_=e.value.relativePath;return g?Sn(g,_):[]}),r=T(s.value);q(s,(g,_)=>{JSON.stringify(g)!==JSON.stringify(_)&&(r.value=s.value)});const i=C(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=C(()=>u?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),u=C(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),p=C(()=>i.value&&a.value),m=C(()=>i.value?Na(r.value):[]);function v(){o.value=!0}function y(){o.value=!1}function w(){o.value?y():v()}return{isOpen:o,sidebar:r,sidebarGroups:m,hasSidebar:i,hasAside:u,leftAside:l,isSidebarEnabled:p,open:v,close:y,toggle:w}}function Ha(t,e){let n;$e(()=>{n=t.value?document.activeElement:void 0}),ye(()=>{window.addEventListener("keyup",a)}),St(()=>{window.removeEventListener("keyup",a)});function a(o){o.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}const Cn=T(Ae?location.hash:"");Ae&&window.addEventListener("hashchange",()=>{Cn.value=location.hash});function Da(t){const{page:e}=R(),n=T(!1),a=C(()=>t.value.collapsed!=null),o=C(()=>!!t.value.link),s=T(!1),r=()=>{s.value=Pe(e.value.relativePath,t.value.link)};q([e,t,Cn],r),ye(r);const i=C(()=>s.value?!0:t.value.items?pt(e.value.relativePath,t.value.items):!1),l=C(()=>!!(t.value.items&&t.value.items.length));$e(()=>{n.value=!!(a.value&&t.value.collapsed)}),gn(()=>{(s.value||i.value)&&(n.value=!1)});function u(){a.value&&(n.value=!n.value)}return{collapsed:n,collapsible:a,isLink:o,isActiveLink:s,hasActiveLink:i,hasChildren:l,toggle:u}}function Ra(){const{hasSidebar:t}=ke(),e=dt("(min-width: 960px)"),n=dt("(min-width: 1280px)");return{isAsideEnabled:C(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const za=71;function Ln(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Tt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{title:Wa(n),link:"#"+n.id,level:a}});return Ja(e,t)}function Wa(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Ja(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[a,o]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=a&&r.level<=o);const s=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)s.push(i);else{for(let l=r-1;l>=0;l--){const u=t[l];if(u.level<i.level){(u.children||(u.children=[])).push(i);continue e}}s.push(i)}}return s}function Ua(t,e){const{isAsideEnabled:n}=Ra(),a=La(s,100);let o=null;ye(()=>{requestAnimationFrame(s),window.addEventListener("scroll",a)}),ia(()=>{r(location.hash)}),St(()=>{window.removeEventListener("scroll",a)});function s(){if(!n.value)return;const i=[].slice.call(t.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(y=>i.some(w=>w.hash===y.hash&&y.offsetParent!==null)),u=window.scrollY,p=window.innerHeight,m=document.body.offsetHeight,v=Math.abs(u+p-m)<1;if(l.length&&v){r(l[l.length-1].hash);return}for(let y=0;y<l.length;y++){const w=l[y],g=l[y+1],[_,x]=qa(y,w,g);if(_){r(x);return}}}function r(i){o&&o.classList.remove("active"),i==null?o=null:o=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=o;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Ft(t){return t.parentElement.offsetTop-za}function qa(t,e,n){const a=window.scrollY;return t===0&&a===0?[!0,null]:a<Ft(e)?[!1,null]:!n||a<Ft(n)?[!0,e.hash]:[!1,null]}const Ga=["href","title"],Ka=S({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const a=n.href.split("#")[1],o=document.getElementById(decodeURIComponent(a));o==null||o.focus({preventScroll:!0})}return(n,a)=>{const o=Se("VPDocOutlineItem",!0);return c(),f("ul",{class:W(["VPDocOutlineItem",n.root?"root":"nested"])},[(c(!0),f(G,null,ee(n.headers,({children:s,link:r,title:i})=>(c(),f("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:i},N(i),9,Ga),s!=null&&s.length?(c(),E(o,{key:0,headers:s},null,8,["headers"])):L("",!0)]))),256))],2)}}}),Mn=P(Ka,[["__scopeId","data-v-92fd34d5"]]),Qa=t=>(de("data-v-59f15b0a"),t=t(),he(),t),Za={class:"content"},Ya={class:"outline-title",role:"heading","aria-level":"2"},Xa={"aria-labelledby":"doc-outline-aria-label"},eo=Qa(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),to=S({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=R(),a=Ct([]);Xe(()=>{a.value=Tt(e.value.outline??n.value.outline)});const o=T(),s=T();return Ua(o,s),(r,i)=>(c(),f("div",{class:W(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[h("div",Za,[h("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),h("div",Ya,N(d(Ln)(d(n))),1),h("nav",Xa,[eo,$(Mn,{headers:a.value,root:!0},null,8,["headers"])])])],2))}}),no=P(to,[["__scopeId","data-v-59f15b0a"]]),ao={class:"VPDocAsideCarbonAds"},oo=S({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,a)=>(c(),f("div",ao,[$(d(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),so=t=>(de("data-v-1401b4cc"),t=t(),he(),t),ro={class:"VPDocAside"},io=so(()=>h("div",{class:"spacer"},null,-1)),lo=S({__name:"VPDocAside",setup(t){const{theme:e}=R();return(n,a)=>(c(),f("div",ro,[b(n.$slots,"aside-top",{},void 0,!0),b(n.$slots,"aside-outline-before",{},void 0,!0),$(no),b(n.$slots,"aside-outline-after",{},void 0,!0),io,b(n.$slots,"aside-ads-before",{},void 0,!0),d(e).carbonAds?(c(),E(oo,{key:0,"carbon-ads":d(e).carbonAds},null,8,["carbon-ads"])):L("",!0),b(n.$slots,"aside-ads-after",{},void 0,!0),b(n.$slots,"aside-bottom",{},void 0,!0)]))}}),co=P(lo,[["__scopeId","data-v-1401b4cc"]]);function uo(){const{theme:t,page:e}=R();return C(()=>{const{text:n="Edit this page",pattern:a=""}=t.value.editLink||{};let o;return typeof a=="function"?o=a(e.value):o=a.replace(/:path/g,e.value.filePath),{url:o,text:n}})}function ho(){const{page:t,theme:e,frontmatter:n}=R();return C(()=>{var l,u,p,m,v,y,w,g;const a=Sn(e.value.sidebar,t.value.relativePath),o=Fa(a),s=o.findIndex(_=>Pe(t.value.relativePath,_.link)),r=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((u=e.value.docFooter)==null?void 0:u.next)===!1&&!n.value.next||n.value.next===!1;return{prev:r?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((p=o[s-1])==null?void 0:p.docFooterText)??((m=o[s-1])==null?void 0:m.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((v=o[s-1])==null?void 0:v.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((y=o[s+1])==null?void 0:y.docFooterText)??((w=o[s+1])==null?void 0:w.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((g=o[s+1])==null?void 0:g.link)}}})}const po={},fo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},mo=h("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),vo=h("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),go=[mo,vo];function _o(t,e){return c(),f("svg",fo,go)}const bo=P(po,[["render",_o]]),ce=S({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=C(()=>e.tag??(e.href?"a":"span")),a=C(()=>e.href&&_n.test(e.href));return(o,s)=>(c(),E(Me(n.value),{class:W(["VPLink",{link:o.href,"vp-external-link-icon":a.value,"no-icon":o.noIcon}]),href:o.href?d(xt)(o.href):void 0,target:o.target??(a.value?"_blank":void 0),rel:o.rel??(a.value?"noreferrer":void 0)},{default:k(()=>[b(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),yo={class:"VPLastUpdated"},ko=["datetime"],wo=S({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:a,lang:o}=R(),s=C(()=>new Date(a.value.lastUpdated??n.value.lastUpdated)),r=C(()=>s.value.toISOString()),i=T("");return ye(()=>{$e(()=>{var l,u,p;i.value=new Intl.DateTimeFormat((u=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&u.forceLocale?o.value:void 0,((p=e.value.lastUpdated)==null?void 0:p.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(l,u)=>{var p;return c(),f("p",yo,[ne(N(((p=d(e).lastUpdated)==null?void 0:p.text)||d(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},N(i.value),9,ko)])}}}),$o=P(wo,[["__scopeId","data-v-777842fc"]]),So={key:0,class:"VPDocFooter"},Co={key:0,class:"edit-info"},Lo={key:0,class:"edit-link"},Mo={key:1,class:"last-updated"},Po={key:1,class:"prev-next"},xo={class:"pager"},To=["innerHTML"],Io=["innerHTML"],Ao={class:"pager"},Vo=["innerHTML"],Oo=["innerHTML"],Eo=S({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:a}=R(),o=uo(),s=ho(),r=C(()=>e.value.editLink&&a.value.editLink!==!1),i=C(()=>n.value.lastUpdated&&a.value.lastUpdated!==!1),l=C(()=>r.value||i.value||s.value.prev||s.value.next);return(u,p)=>{var m,v,y,w;return l.value?(c(),f("footer",So,[b(u.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),f("div",Co,[r.value?(c(),f("div",Lo,[$(ce,{class:"edit-link-button",href:d(o).url,"no-icon":!0},{default:k(()=>[$(bo,{class:"edit-link-icon","aria-label":"edit icon"}),ne(" "+N(d(o).text),1)]),_:1},8,["href"])])):L("",!0),i.value?(c(),f("div",Mo,[$($o)])):L("",!0)])):L("",!0),(m=d(s).prev)!=null&&m.link||(v=d(s).next)!=null&&v.link?(c(),f("nav",Po,[h("div",xo,[(y=d(s).prev)!=null&&y.link?(c(),E(ce,{key:0,class:"pager-link prev",href:d(s).prev.link},{default:k(()=>{var g;return[h("span",{class:"desc",innerHTML:((g=d(e).docFooter)==null?void 0:g.prev)||"Previous page"},null,8,To),h("span",{class:"title",innerHTML:d(s).prev.text},null,8,Io)]}),_:1},8,["href"])):L("",!0)]),h("div",Ao,[(w=d(s).next)!=null&&w.link?(c(),E(ce,{key:0,class:"pager-link next",href:d(s).next.link},{default:k(()=>{var g;return[h("span",{class:"desc",innerHTML:((g=d(e).docFooter)==null?void 0:g.next)||"Next page"},null,8,Vo),h("span",{class:"title",innerHTML:d(s).next.text},null,8,Oo)]}),_:1},8,["href"])):L("",!0)])])):L("",!0)])):L("",!0)}}}),Bo=P(Eo,[["__scopeId","data-v-b22f55cd"]]),jo=t=>(de("data-v-4da82c85"),t=t(),he(),t),No={class:"container"},Fo=jo(()=>h("div",{class:"aside-curtain"},null,-1)),Ho={class:"aside-container"},Do={class:"aside-content"},Ro={class:"content"},zo={class:"content-container"},Wo={class:"main"},Jo=S({__name:"VPDoc",setup(t){const{theme:e}=R(),n=je(),{hasSidebar:a,hasAside:o,leftAside:s}=ke(),r=C(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const u=Se("Content");return c(),f("div",{class:W(["VPDoc",{"has-sidebar":d(a),"has-aside":d(o)}])},[b(i.$slots,"doc-top",{},void 0,!0),h("div",No,[d(o)?(c(),f("div",{key:0,class:W(["aside",{"left-aside":d(s)}])},[Fo,h("div",Ho,[h("div",Do,[$(co,null,{"aside-top":k(()=>[b(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[b(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[b(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[b(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[b(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[b(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):L("",!0),h("div",Ro,[h("div",zo,[b(i.$slots,"doc-before",{},void 0,!0),h("main",Wo,[$(u,{class:W(["vp-doc",[r.value,d(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),$(Bo,null,{"doc-footer-before":k(()=>[b(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),b(i.$slots,"doc-after",{},void 0,!0)])])]),b(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Uo=P(Jo,[["__scopeId","data-v-4da82c85"]]),qo=S({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(t){const e=t,n=C(()=>e.href&&_n.test(e.href)),a=C(()=>e.tag||e.href?"a":"button");return(o,s)=>(c(),E(Me(a.value),{class:W(["VPButton",[o.size,o.theme]]),href:o.href?d(xt)(o.href):void 0,target:n.value?"_blank":void 0,rel:n.value?"noreferrer":void 0},{default:k(()=>[ne(N(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),Go=P(qo,[["__scopeId","data-v-0b4c0791"]]),Ko=["src","alt"],Qo=S({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const a=Se("VPImage",!0);return e.image?(c(),f(G,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),f("img",Re({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:d(Ye)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Ko)):(c(),f(G,{key:1},[$(a,Re({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),$(a,Re({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):L("",!0)}}}),Ge=P(Qo,[["__scopeId","data-v-05ca39e7"]]),Zo=t=>(de("data-v-73ed9675"),t=t(),he(),t),Yo={class:"container"},Xo={class:"main"},es={key:0,class:"name"},ts=["innerHTML"],ns=["innerHTML"],as=["innerHTML"],os={key:0,class:"actions"},ss={key:0,class:"image"},rs={class:"image-container"},is=Zo(()=>h("div",{class:"image-bg"},null,-1)),ls=S({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=et("hero-image-slot-exists");return(n,a)=>(c(),f("div",{class:W(["VPHero",{"has-image":n.image||d(e)}])},[h("div",Yo,[h("div",Xo,[b(n.$slots,"home-hero-info",{},()=>[n.name?(c(),f("h1",es,[h("span",{innerHTML:n.name,class:"clip"},null,8,ts)])):L("",!0),n.text?(c(),f("p",{key:1,innerHTML:n.text,class:"text"},null,8,ns)):L("",!0),n.tagline?(c(),f("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,as)):L("",!0)],!0),n.actions?(c(),f("div",os,[(c(!0),f(G,null,ee(n.actions,o=>(c(),f("div",{key:o.link,class:"action"},[$(Go,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link},null,8,["theme","text","href"])]))),128))])):L("",!0)]),n.image||d(e)?(c(),f("div",ss,[h("div",rs,[is,b(n.$slots,"home-hero-image",{},()=>[n.image?(c(),E(Ge,{key:0,class:"image-src",image:n.image},null,8,["image"])):L("",!0)],!0)])])):L("",!0)])],2))}}),cs=P(ls,[["__scopeId","data-v-73ed9675"]]),us=S({__name:"VPHomeHero",setup(t){const{frontmatter:e}=R();return(n,a)=>d(e).hero?(c(),E(cs,{key:0,class:"VPHomeHero",name:d(e).hero.name,text:d(e).hero.text,tagline:d(e).hero.tagline,image:d(e).hero.image,actions:d(e).hero.actions},{"home-hero-info":k(()=>[b(n.$slots,"home-hero-info")]),"home-hero-image":k(()=>[b(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):L("",!0)}}),ds={},hs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ps=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),fs=[ps];function ms(t,e){return c(),f("svg",hs,fs)}const vs=P(ds,[["render",ms]]),gs={class:"box"},_s={key:0,class:"icon"},bs=["innerHTML"],ys=["innerHTML"],ks=["innerHTML"],ws={key:4,class:"link-text"},$s={class:"link-text-value"},Ss=S({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),E(ce,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:k(()=>[h("article",gs,[typeof e.icon=="object"&&e.icon.wrap?(c(),f("div",_s,[$(Ge,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),E(Ge,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),f("div",{key:2,class:"icon",innerHTML:e.icon},null,8,bs)):L("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,ys),e.details?(c(),f("p",{key:3,class:"details",innerHTML:e.details},null,8,ks)):L("",!0),e.linkText?(c(),f("div",ws,[h("p",$s,[ne(N(e.linkText)+" ",1),$(vs,{class:"link-text-icon"})])])):L("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Cs=P(Ss,[["__scopeId","data-v-48a184f3"]]),Ls={key:0,class:"VPFeatures"},Ms={class:"container"},Ps={class:"items"},xs=S({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=C(()=>{const a=e.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,o)=>a.features?(c(),f("div",Ls,[h("div",Ms,[h("div",Ps,[(c(!0),f(G,null,ee(a.features,s=>(c(),f("div",{key:s.title,class:W(["item",[n.value]])},[$(Cs,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):L("",!0)}}),Ts=P(xs,[["__scopeId","data-v-4c14b233"]]),Is=S({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=R();return(n,a)=>d(e).features?(c(),E(Ts,{key:0,class:"VPHomeFeatures",features:d(e).features},null,8,["features"])):L("",!0)}}),As={class:"VPHome"},Vs=S({__name:"VPHome",setup(t){return(e,n)=>{const a=Se("Content");return c(),f("div",As,[b(e.$slots,"home-hero-before",{},void 0,!0),$(us,null,{"home-hero-info":k(()=>[b(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[b(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),b(e.$slots,"home-hero-after",{},void 0,!0),b(e.$slots,"home-features-before",{},void 0,!0),$(Is),b(e.$slots,"home-features-after",{},void 0,!0),$(a)])}}}),Os=P(Vs,[["__scopeId","data-v-b0e71816"]]),Es={},Bs={class:"VPPage"};function js(t,e){const n=Se("Content");return c(),f("div",Bs,[b(t.$slots,"page-top"),$(n),b(t.$slots,"page-bottom")])}const Ns=P(Es,[["render",js]]),Fs=S({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=R(),{hasSidebar:a}=ke();return(o,s)=>(c(),f("div",{class:W(["VPContent",{"has-sidebar":d(a),"is-home":d(n).layout==="home"}]),id:"VPContent"},[d(e).isNotFound?b(o.$slots,"not-found",{key:0},()=>[$(ja)],!0):d(n).layout==="page"?(c(),E(Ns,{key:1},{"page-top":k(()=>[b(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[b(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(n).layout==="home"?(c(),E(Os,{key:2},{"home-hero-before":k(()=>[b(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[b(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[b(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[b(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[b(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[b(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(n).layout&&d(n).layout!=="doc"?(c(),E(Me(d(n).layout),{key:3})):(c(),E(Uo,{key:4},{"doc-top":k(()=>[b(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[b(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[b(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[b(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[b(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[b(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[b(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[b(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[b(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[b(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[b(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Hs=P(Fs,[["__scopeId","data-v-272a84ec"]]),Ds={class:"container"},Rs=["innerHTML"],zs=["innerHTML"],Ws=S({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=R(),{hasSidebar:a}=ke();return(o,s)=>d(e).footer&&d(n).footer!==!1?(c(),f("footer",{key:0,class:W(["VPFooter",{"has-sidebar":d(a)}])},[h("div",Ds,[d(e).footer.message?(c(),f("p",{key:0,class:"message",innerHTML:d(e).footer.message},null,8,Rs)):L("",!0),d(e).footer.copyright?(c(),f("p",{key:1,class:"copyright",innerHTML:d(e).footer.copyright},null,8,zs)):L("",!0)])],2)):L("",!0)}}),Js=P(Ws,[["__scopeId","data-v-dfdb7eb6"]]);function Pn(){const{theme:t,frontmatter:e}=R(),n=Ct([]),a=C(()=>n.value.length>0);return Xe(()=>{n.value=Tt(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:a}}const Us={},qs={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Gs=h("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Ks=[Gs];function Qs(t,e){return c(),f("svg",qs,Ks)}const xn=P(Us,[["render",Qs]]),Zs={class:"header"},Ys={class:"outline"},Xs=S({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=R(),a=T(!1),o=T(0),s=T(),r=T();la(s,()=>{a.value=!1}),ca("Escape",()=>{a.value=!1}),Xe(()=>{a.value=!1});function i(){a.value=!a.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(p){p.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),pe(()=>{a.value=!1}))}function u(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,m)=>(c(),f("div",{class:"VPLocalNavOutlineDropdown",style:ua({"--vp-vh":o.value+"px"}),ref_key:"main",ref:s},[p.headers.length>0?(c(),f("button",{key:0,onClick:i,class:W({open:a.value})},[ne(N(d(Ln)(d(n)))+" ",1),$(xn,{class:"icon"})],2)):(c(),f("button",{key:1,onClick:u},N(d(n).returnToTopLabel||"Return to top"),1)),$(Ze,{name:"flyout"},{default:k(()=>[a.value?(c(),f("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:l},[h("div",Zs,[h("a",{class:"top-link",href:"#",onClick:u},N(d(n).returnToTopLabel||"Return to top"),1)]),h("div",Ys,[$(Mn,{headers:p.headers},null,8,["headers"])])],512)):L("",!0)]),_:1})],4))}}),er=P(Xs,[["__scopeId","data-v-866f2138"]]),tr={},nr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ar=h("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),or=h("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),sr=h("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),rr=h("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),ir=[ar,or,sr,rr];function lr(t,e){return c(),f("svg",nr,ir)}const cr=P(tr,[["render",lr]]),ur={class:"container"},dr=["aria-expanded"],hr={class:"menu-text"},pr=S({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=R(),{hasSidebar:a}=ke(),{headers:o}=Pn(),{y:s}=bn(),r=T(0);ye(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Xe(()=>{o.value=Tt(n.value.outline??e.value.outline)});const i=C(()=>o.value.length===0),l=C(()=>i.value&&!a.value),u=C(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:i.value,fixed:l.value}));return(p,m)=>d(n).layout!=="home"&&(!l.value||d(s)>=r.value)?(c(),f("div",{key:0,class:W(u.value)},[h("div",ur,[d(a)?(c(),f("button",{key:0,class:"menu","aria-expanded":p.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=v=>p.$emit("open-menu"))},[$(cr,{class:"menu-icon"}),h("span",hr,N(d(e).sidebarMenuLabel||"Menu"),1)],8,dr)):L("",!0),$(er,{headers:d(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):L("",!0)}}),fr=P(pr,[["__scopeId","data-v-d18cd058"]]);function mr(){const t=T(!1);function e(){t.value=!0,window.addEventListener("resize",o)}function n(){t.value=!1,window.removeEventListener("resize",o)}function a(){t.value?n():e()}function o(){window.outerWidth>=768&&n()}const s=je();return q(()=>s.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:a}}const vr={},gr={class:"VPSwitch",type:"button",role:"switch"},_r={class:"check"},br={key:0,class:"icon"};function yr(t,e){return c(),f("button",gr,[h("span",_r,[t.$slots.default?(c(),f("span",br,[b(t.$slots,"default",{},void 0,!0)])):L("",!0)])])}const kr=P(vr,[["render",yr],["__scopeId","data-v-60701fc9"]]),wr={},$r={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Sr=h("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),Cr=[Sr];function Lr(t,e){return c(),f("svg",$r,Cr)}const Mr=P(wr,[["render",Lr]]),Pr={},xr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Tr=yn('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Ir=[Tr];function Ar(t,e){return c(),f("svg",xr,Ir)}const Vr=P(Pr,[["render",Ar]]),Or=S({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=R(),a=et("toggle-appearance",()=>{e.value=!e.value}),o=C(()=>e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(s,r)=>(c(),E(kr,{title:o.value,class:"VPSwitchAppearance","aria-checked":d(e),onClick:d(a)},{default:k(()=>[$(Vr,{class:"sun"}),$(Mr,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),It=P(Or,[["__scopeId","data-v-10a3c4cf"]]),Er={key:0,class:"VPNavBarAppearance"},Br=S({__name:"VPNavBarAppearance",setup(t){const{site:e}=R();return(n,a)=>d(e).appearance&&d(e).appearance!=="force-dark"?(c(),f("div",Er,[$(It)])):L("",!0)}}),jr=P(Br,[["__scopeId","data-v-d7d70930"]]),At=T();let Tn=!1,rt=0;function Nr(t){const e=T(!1);if(Ae){!Tn&&Fr(),rt++;const n=q(At,a=>{var o,s,r;a===t.el.value||(o=t.el.value)!=null&&o.contains(a)?(e.value=!0,(s=t.onFocus)==null||s.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});St(()=>{n(),rt--,rt||Hr()})}return Lt(e)}function Fr(){document.addEventListener("focusin",In),Tn=!0,At.value=document.activeElement}function Hr(){document.removeEventListener("focusin",In)}function In(){At.value=document.activeElement}const Dr={},Rr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},zr=h("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),Wr=[zr];function Jr(t,e){return c(),f("svg",Rr,Wr)}const An=P(Dr,[["render",Jr]]),Ur={},qr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Gr=h("circle",{cx:"12",cy:"12",r:"2"},null,-1),Kr=h("circle",{cx:"19",cy:"12",r:"2"},null,-1),Qr=h("circle",{cx:"5",cy:"12",r:"2"},null,-1),Zr=[Gr,Kr,Qr];function Yr(t,e){return c(),f("svg",qr,Zr)}const Xr=P(Ur,[["render",Yr]]),ei={class:"VPMenuLink"},ti=S({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=R();return(n,a)=>(c(),f("div",ei,[$(ce,{class:W({active:d(Pe)(d(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:k(()=>[ne(N(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),tt=P(ti,[["__scopeId","data-v-faecea72"]]),ni={class:"VPMenuGroup"},ai={key:0,class:"title"},oi=S({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",ni,[e.text?(c(),f("p",ai,N(e.text),1)):L("",!0),(c(!0),f(G,null,ee(e.items,a=>(c(),f(G,null,["link"in a?(c(),E(tt,{key:0,item:a},null,8,["item"])):L("",!0)],64))),256))]))}}),si=P(oi,[["__scopeId","data-v-4932a7f1"]]),ri={class:"VPMenu"},ii={key:0,class:"items"},li=S({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),f("div",ri,[e.items?(c(),f("div",ii,[(c(!0),f(G,null,ee(e.items,a=>(c(),f(G,{key:a.text},["link"in a?(c(),E(tt,{key:0,item:a},null,8,["item"])):(c(),E(si,{key:1,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):L("",!0),b(e.$slots,"default",{},void 0,!0)]))}}),ci=P(li,[["__scopeId","data-v-24c1fc4a"]]),ui=["aria-expanded","aria-label"],di={key:0,class:"text"},hi=["innerHTML"],pi={class:"menu"},fi=S({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=T(!1),n=T();Nr({el:n,onBlur:a});function a(){e.value=!1}return(o,s)=>(c(),f("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:s[1]||(s[1]=r=>e.value=!0),onMouseleave:s[2]||(s[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:s[0]||(s[0]=r=>e.value=!e.value)},[o.button||o.icon?(c(),f("span",di,[o.icon?(c(),E(Me(o.icon),{key:0,class:"option-icon"})):L("",!0),o.button?(c(),f("span",{key:1,innerHTML:o.button},null,8,hi)):L("",!0),$(An,{class:"text-icon"})])):(c(),E(Xr,{key:1,class:"icon"}))],8,ui),h("div",pi,[$(ci,{items:o.items},{default:k(()=>[b(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Vt=P(fi,[["__scopeId","data-v-f6676626"]]),mi={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},vi=["href","aria-label","innerHTML"],gi=S({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=C(()=>typeof e.icon=="object"?e.icon.svg:mi[e.icon]);return(a,o)=>(c(),f("a",{class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,vi))}}),_i=P(gi,[["__scopeId","data-v-03d4b0b4"]]),bi={class:"VPSocialLinks"},yi=S({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),f("div",bi,[(c(!0),f(G,null,ee(e.links,({link:a,icon:o,ariaLabel:s})=>(c(),E(_i,{key:a,icon:o,link:a,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),nt=P(yi,[["__scopeId","data-v-c6dfe6cc"]]),ki={key:0,class:"group translations"},wi={class:"trans-title"},$i={key:1,class:"group"},Si={class:"item appearance"},Ci={class:"label"},Li={class:"appearance-action"},Mi={key:2,class:"group"},Pi={class:"item social-links"},xi=S({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=R(),{localeLinks:a,currentLang:o}=Ne({correspondingLink:!0}),s=C(()=>a.value.length&&o.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>s.value?(c(),E(Vt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[d(a).length&&d(o).label?(c(),f("div",ki,[h("p",wi,N(d(o).label),1),(c(!0),f(G,null,ee(d(a),l=>(c(),E(tt,{key:l.link,item:l},null,8,["item"]))),128))])):L("",!0),d(e).appearance&&d(e).appearance!=="force-dark"?(c(),f("div",$i,[h("div",Si,[h("p",Ci,N(d(n).darkModeSwitchLabel||"Appearance"),1),h("div",Li,[$(It)])])])):L("",!0),d(n).socialLinks?(c(),f("div",Mi,[h("div",Pi,[$(nt,{class:"social-links-list",links:d(n).socialLinks},null,8,["links"])])])):L("",!0)]),_:1})):L("",!0)}}),Ti=P(xi,[["__scopeId","data-v-fcdd2ea6"]]),Ii=t=>(de("data-v-22b73dbc"),t=t(),he(),t),Ai=["aria-expanded"],Vi=Ii(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),Oi=[Vi],Ei=S({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),f("button",{type:"button",class:W(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>e.$emit("click"))},Oi,10,Ai))}}),Bi=P(Ei,[["__scopeId","data-v-22b73dbc"]]),ji=["innerHTML"],Ni=S({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=R();return(n,a)=>(c(),E(ce,{class:W({VPNavBarMenuLink:!0,active:d(Pe)(d(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:k(()=>[h("span",{innerHTML:n.item.text},null,8,ji)]),_:1},8,["class","href","target","rel"]))}}),Fi=P(Ni,[["__scopeId","data-v-177c851d"]]),Hi=S({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=R(),a=s=>"link"in s?Pe(n.value.relativePath,s.link,!!e.item.activeMatch):s.items.some(a),o=C(()=>a(e.item));return(s,r)=>(c(),E(Vt,{class:W({VPNavBarMenuGroup:!0,active:d(Pe)(d(n).relativePath,s.item.activeMatch,!!s.item.activeMatch)||o.value}),button:s.item.text,items:s.item.items},null,8,["class","button","items"]))}}),Di=t=>(de("data-v-24e1d536"),t=t(),he(),t),Ri={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},zi=Di(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Wi=S({__name:"VPNavBarMenu",setup(t){const{theme:e}=R();return(n,a)=>d(e).nav?(c(),f("nav",Ri,[zi,(c(!0),f(G,null,ee(d(e).nav,o=>(c(),f(G,{key:o.text},["link"in o?(c(),E(Fi,{key:0,item:o},null,8,["item"])):(c(),E(Hi,{key:1,item:o},null,8,["item"]))],64))),128))])):L("",!0)}}),Ji=P(Wi,[["__scopeId","data-v-24e1d536"]]);var Ht;const Vn=typeof window<"u",Ui=t=>typeof t=="string",We=()=>{};Vn&&((Ht=window==null?void 0:window.navigator)!=null&&Ht.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ft(t){return typeof t=="function"?t():d(t)}function qi(t,e){function n(...a){t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})}return n}function Gi(t,e={}){let n,a;return o=>{const s=ft(t),r=ft(e.maxWait);if(n&&clearTimeout(n),s<=0||r!==void 0&&r<=0)return a&&(clearTimeout(a),a=null),o();r&&!a&&(a=setTimeout(()=>{n&&clearTimeout(n),a=null,o()},r)),n=setTimeout(()=>{a&&clearTimeout(a),a=null,o()},s)}}function Ki(t){return t}function Qi(t){return kn()?(wn(t),!0):!1}function On(t,e=200,n={}){return qi(Gi(e,n),t)}function it(t,e=200,n={}){if(e<=0)return t;const a=T(t.value),o=On(()=>{a.value=t.value},e,n);return q(t,()=>o()),a}function En(t,e,n){return q(t,(a,o,s)=>{a&&e(a,o,s)},n)}function Zi(t){var e;const n=ft(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Bn=Vn?window:void 0;function He(...t){let e,n,a,o;if(Ui(t[0])?([n,a,o]=t,e=Bn):[e,n,a,o]=t,!e)return We;let s=We;const r=q(()=>Zi(e),l=>{s(),l&&(l.addEventListener(n,a,o),s=()=>{l.removeEventListener(n,a,o),s=We})},{immediate:!0,flush:"post"}),i=()=>{r(),s()};return Qi(i),i}const Dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rt="__vueuse_ssr_handlers__";Dt[Rt]=Dt[Rt]||{};const Yi={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Xi(t={}){const{reactive:e=!1,target:n=Bn,aliasMap:a=Yi,passive:o=!0,onEventFired:s=We}=t,r=ge(new Set),i={toJSON(){return{}},current:r},l=e?ge(i):i,u=new Set,p=new Set;function m(g,_){g in l&&(e?l[g]=_:l[g].value=_)}function v(){for(const g of p)m(g,!1)}function y(g,_){var x,M;const I=(x=g.key)==null?void 0:x.toLowerCase(),O=[(M=g.code)==null?void 0:M.toLowerCase(),I].filter(Boolean);I&&(_?r.add(I):r.delete(I));for(const H of O)p.add(H),m(H,_);I==="meta"&&!_?(u.forEach(H=>{r.delete(H),m(H,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...r,...O].forEach(H=>u.add(H))}He(n,"keydown",g=>(y(g,!0),s(g)),{passive:o}),He(n,"keyup",g=>(y(g,!1),s(g)),{passive:o}),He("blur",v,{passive:!0}),He("focus",v,{passive:!0});const w=new Proxy(l,{get(g,_,x){if(typeof _!="string")return Reflect.get(g,_,x);if(_=_.toLowerCase(),_ in a&&(_=a[_]),!(_ in l))if(/[+_-]/.test(_)){const I=_.split(/[+_-]/g).map(O=>O.trim());l[_]=C(()=>I.every(O=>d(w[O])))}else l[_]=T(!1);const M=Reflect.get(g,_,x);return e?d(M):M}});return w}var zt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(zt||(zt={}));var el=Object.defineProperty,Wt=Object.getOwnPropertySymbols,tl=Object.prototype.hasOwnProperty,nl=Object.prototype.propertyIsEnumerable,Jt=(t,e,n)=>e in t?el(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,al=(t,e)=>{for(var n in e||(e={}))tl.call(e,n)&&Jt(t,n,e[n]);if(Wt)for(var n of Wt(e))nl.call(e,n)&&Jt(t,n,e[n]);return t};const ol={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};al({linear:Ki},ol);function _e(t){return Array.isArray?Array.isArray(t):Fn(t)==="[object Array]"}const sl=1/0;function rl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-sl?"-0":e}function il(t){return t==null?"":rl(t)}function fe(t){return typeof t=="string"}function jn(t){return typeof t=="number"}function ll(t){return t===!0||t===!1||cl(t)&&Fn(t)=="[object Boolean]"}function Nn(t){return typeof t=="object"}function cl(t){return Nn(t)&&t!==null}function re(t){return t!=null}function lt(t){return!t.trim().length}function Fn(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ul="Incorrect 'index' type",dl=t=>`Invalid value for key ${t}`,hl=t=>`Pattern length exceeds max of ${t}.`,pl=t=>`Missing ${t} property in key`,fl=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ut=Object.prototype.hasOwnProperty;class ml{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(a=>{let o=Hn(a);n+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(a=>{a.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Hn(t){let e=null,n=null,a=null,o=1,s=null;if(fe(t)||_e(t))a=t,e=qt(t),n=mt(t);else{if(!Ut.call(t,"name"))throw new Error(pl("name"));const r=t.name;if(a=r,Ut.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(fl(r));e=qt(r),n=mt(r),s=t.getFn}return{path:e,id:n,weight:o,src:a,getFn:s}}function qt(t){return _e(t)?t:t.split(".")}function mt(t){return _e(t)?t.join("."):t}function vl(t,e){let n=[],a=!1;const o=(s,r,i)=>{if(re(s))if(!r[i])n.push(s);else{let l=r[i];const u=s[l];if(!re(u))return;if(i===r.length-1&&(fe(u)||jn(u)||ll(u)))n.push(il(u));else if(_e(u)){a=!0;for(let p=0,m=u.length;p<m;p+=1)o(u[p],r,i+1)}else r.length&&o(u,r,i+1)}};return o(t,fe(e)?e.split("."):e,0),a?n:n[0]}const gl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_l={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},bl={location:0,threshold:.6,distance:100},yl={useExtendedSearch:!1,getFn:vl,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var B={..._l,...gl,...bl,...yl};const kl=/[^ ]+/g;function wl(t=1,e=3){const n=new Map,a=Math.pow(10,e);return{get(o){const s=o.match(kl).length;if(n.has(s))return n.get(s);const r=1/Math.pow(s,.5*t),i=parseFloat(Math.round(r*a)/a);return n.set(s,i),i},clear(){n.clear()}}}class Ot{constructor({getFn:e=B.getFn,fieldNormWeight:n=B.fieldNormWeight}={}){this.norm=wl(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,a)=>{this._keysMap[n.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fe(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fe(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,a=this.size();n<a;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!re(e)||lt(e))return;let a={v:e,i:n,n:this.norm.get(e)};this.records.push(a)}_addObject(e,n){let a={i:n,$:{}};this.keys.forEach((o,s)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(re(r)){if(_e(r)){let i=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:u,value:p}=l.pop();if(re(p))if(fe(p)&&!lt(p)){let m={v:p,i:u,n:this.norm.get(p)};i.push(m)}else _e(p)&&p.forEach((m,v)=>{l.push({nestedArrIndex:v,value:m})})}a.$[s]=i}else if(fe(r)&&!lt(r)){let i={v:r,n:this.norm.get(r)};a.$[s]=i}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function Dn(t,e,{getFn:n=B.getFn,fieldNormWeight:a=B.fieldNormWeight}={}){const o=new Ot({getFn:n,fieldNormWeight:a});return o.setKeys(t.map(Hn)),o.setSources(e),o.create(),o}function $l(t,{getFn:e=B.getFn,fieldNormWeight:n=B.fieldNormWeight}={}){const{keys:a,records:o}=t,s=new Ot({getFn:e,fieldNormWeight:n});return s.setKeys(a),s.setIndexRecords(o),s}function De(t,{errors:e=0,currentLocation:n=0,expectedLocation:a=0,distance:o=B.distance,ignoreLocation:s=B.ignoreLocation}={}){const r=e/t.length;if(s)return r;const i=Math.abs(a-n);return o?r+i/o:i?1:r}function Sl(t=[],e=B.minMatchCharLength){let n=[],a=-1,o=-1,s=0;for(let r=t.length;s<r;s+=1){let i=t[s];i&&a===-1?a=s:!i&&a!==-1&&(o=s-1,o-a+1>=e&&n.push([a,o]),a=-1)}return t[s-1]&&s-a>=e&&n.push([a,s-1]),n}const Le=32;function Cl(t,e,n,{location:a=B.location,distance:o=B.distance,threshold:s=B.threshold,findAllMatches:r=B.findAllMatches,minMatchCharLength:i=B.minMatchCharLength,includeMatches:l=B.includeMatches,ignoreLocation:u=B.ignoreLocation}={}){if(e.length>Le)throw new Error(hl(Le));const p=e.length,m=t.length,v=Math.max(0,Math.min(a,m));let y=s,w=v;const g=i>1||l,_=g?Array(m):[];let x;for(;(x=t.indexOf(e,w))>-1;){let F=De(e,{currentLocation:x,expectedLocation:v,distance:o,ignoreLocation:u});if(y=Math.min(F,y),w=x+p,g){let j=0;for(;j<p;)_[x+j]=1,j+=1}}w=-1;let M=[],I=1,O=p+m;const H=1<<p-1;for(let F=0;F<p;F+=1){let j=0,D=O;for(;j<D;)De(e,{errors:F,currentLocation:v+D,expectedLocation:v,distance:o,ignoreLocation:u})<=y?j=D:O=D,D=Math.floor((O-j)/2+j);O=D;let oe=Math.max(1,v-D+1),me=r?m:Math.min(v+D,m)+p,se=Array(me+2);se[me+1]=(1<<F)-1;for(let A=me;A>=oe;A-=1){let U=A-1,te=n[t.charAt(U)];if(g&&(_[U]=+!!te),se[A]=(se[A+1]<<1|1)&te,F&&(se[A]|=(M[A+1]|M[A])<<1|1|M[A+1]),se[A]&H&&(I=De(e,{errors:F,currentLocation:U,expectedLocation:v,distance:o,ignoreLocation:u}),I<=y)){if(y=I,w=U,w<=v)break;oe=Math.max(1,2*v-w)}}if(De(e,{errors:F+1,currentLocation:v,expectedLocation:v,distance:o,ignoreLocation:u})>y)break;M=se}const J={isMatch:w>=0,score:Math.max(.001,I)};if(g){const F=Sl(_,i);F.length?l&&(J.indices=F):J.isMatch=!1}return J}function Ll(t){let e={};for(let n=0,a=t.length;n<a;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<a-n-1}return e}class Rn{constructor(e,{location:n=B.location,threshold:a=B.threshold,distance:o=B.distance,includeMatches:s=B.includeMatches,findAllMatches:r=B.findAllMatches,minMatchCharLength:i=B.minMatchCharLength,isCaseSensitive:l=B.isCaseSensitive,ignoreLocation:u=B.ignoreLocation}={}){if(this.options={location:n,threshold:a,distance:o,includeMatches:s,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(v,y)=>{this.chunks.push({pattern:v,alphabet:Ll(v),startIndex:y})},m=this.pattern.length;if(m>Le){let v=0;const y=m%Le,w=m-y;for(;v<w;)p(this.pattern.substr(v,Le),v),v+=Le;if(y){const g=m-Le;p(this.pattern.substr(g),g)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:a}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let w={isMatch:!0,score:0};return a&&(w.indices=[[0,e.length-1]]),w}const{location:o,distance:s,threshold:r,findAllMatches:i,minMatchCharLength:l,ignoreLocation:u}=this.options;let p=[],m=0,v=!1;this.chunks.forEach(({pattern:w,alphabet:g,startIndex:_})=>{const{isMatch:x,score:M,indices:I}=Cl(e,w,g,{location:o+_,distance:s,threshold:r,findAllMatches:i,minMatchCharLength:l,includeMatches:a,ignoreLocation:u});x&&(v=!0),m+=M,x&&I&&(p=[...p,...I])});let y={isMatch:v,score:v?m/this.chunks.length:1};return v&&a&&(y.indices=p),y}}class Ce{constructor(e){this.pattern=e}static isMultiMatch(e){return Gt(e,this.multiRegex)}static isSingleMatch(e){return Gt(e,this.singleRegex)}search(){}}function Gt(t,e){const n=t.match(e);return n?n[1]:null}class Ml extends Ce{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Pl extends Ce{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class xl extends Ce{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Tl extends Ce{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Il extends Ce{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Al extends Ce{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zn extends Ce{constructor(e,{location:n=B.location,threshold:a=B.threshold,distance:o=B.distance,includeMatches:s=B.includeMatches,findAllMatches:r=B.findAllMatches,minMatchCharLength:i=B.minMatchCharLength,isCaseSensitive:l=B.isCaseSensitive,ignoreLocation:u=B.ignoreLocation}={}){super(e),this._bitapSearch=new Rn(e,{location:n,threshold:a,distance:o,includeMatches:s,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Wn extends Ce{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,a;const o=[],s=this.pattern.length;for(;(a=e.indexOf(this.pattern,n))>-1;)n=a+s,o.push([a,n-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const vt=[Ml,Wn,xl,Tl,Al,Il,Pl,zn],Kt=vt.length,Vl=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ol="|";function El(t,e={}){return t.split(Ol).map(n=>{let a=n.trim().split(Vl).filter(s=>s&&!!s.trim()),o=[];for(let s=0,r=a.length;s<r;s+=1){const i=a[s];let l=!1,u=-1;for(;!l&&++u<Kt;){const p=vt[u];let m=p.isMultiMatch(i);m&&(o.push(new p(m,e)),l=!0)}if(!l)for(u=-1;++u<Kt;){const p=vt[u];let m=p.isSingleMatch(i);if(m){o.push(new p(m,e));break}}}return o})}const Bl=new Set([zn.type,Wn.type]);class jl{constructor(e,{isCaseSensitive:n=B.isCaseSensitive,includeMatches:a=B.includeMatches,minMatchCharLength:o=B.minMatchCharLength,ignoreLocation:s=B.ignoreLocation,findAllMatches:r=B.findAllMatches,location:i=B.location,threshold:l=B.threshold,distance:u=B.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:a,minMatchCharLength:o,findAllMatches:r,ignoreLocation:s,location:i,threshold:l,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=El(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let s=0,r=[],i=0;for(let l=0,u=n.length;l<u;l+=1){const p=n[l];r.length=0,s=0;for(let m=0,v=p.length;m<v;m+=1){const y=p[m],{isMatch:w,indices:g,score:_}=y.search(e);if(w){if(s+=1,i+=_,a){const x=y.constructor.type;Bl.has(x)?r=[...r,...g]:r.push(g)}}else{i=0,s=0,r.length=0;break}}if(s){let m={isMatch:!0,score:i/s};return a&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const gt=[];function Nl(...t){gt.push(...t)}function _t(t,e){for(let n=0,a=gt.length;n<a;n+=1){let o=gt[n];if(o.condition(t,e))return new o(t,e)}return new Rn(t,e)}const Ke={AND:"$and",OR:"$or"},bt={PATH:"$path",PATTERN:"$val"},yt=t=>!!(t[Ke.AND]||t[Ke.OR]),Fl=t=>!!t[bt.PATH],Hl=t=>!_e(t)&&Nn(t)&&!yt(t),Qt=t=>({[Ke.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Jn(t,e,{auto:n=!0}={}){const a=o=>{let s=Object.keys(o);const r=Fl(o);if(!r&&s.length>1&&!yt(o))return a(Qt(o));if(Hl(o)){const l=r?o[bt.PATH]:s[0],u=r?o[bt.PATTERN]:o[l];if(!fe(u))throw new Error(dl(l));const p={keyId:mt(l),pattern:u};return n&&(p.searcher=_t(u,e)),p}let i={children:[],operator:s[0]};return s.forEach(l=>{const u=o[l];_e(u)&&u.forEach(p=>{i.children.push(a(p))})}),i};return yt(t)||(t=Qt(t)),a(t)}function Dl(t,{ignoreFieldNorm:e=B.ignoreFieldNorm}){t.forEach(n=>{let a=1;n.matches.forEach(({key:o,norm:s,score:r})=>{const i=o?o.weight:null;a*=Math.pow(r===0&&i?Number.EPSILON:r,(i||1)*(e?1:s))}),n.score=a})}function Rl(t,e){const n=t.matches;e.matches=[],re(n)&&n.forEach(a=>{if(!re(a.indices)||!a.indices.length)return;const{indices:o,value:s}=a;let r={indices:o,value:s};a.key&&(r.key=a.key.src),a.idx>-1&&(r.refIndex=a.idx),e.matches.push(r)})}function zl(t,e){e.score=t.score}function Wl(t,e,{includeMatches:n=B.includeMatches,includeScore:a=B.includeScore}={}){const o=[];return n&&o.push(Rl),a&&o.push(zl),t.map(s=>{const{idx:r}=s,i={item:e[r],refIndex:r};return o.length&&o.forEach(l=>{l(s,i)}),i})}class xe{constructor(e,n={},a){this.options={...B,...n},this.options.useExtendedSearch,this._keyStore=new ml(this.options.keys),this.setCollection(e,a)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Ot))throw new Error(ul);this._myIndex=n||Dn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!re(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let a=0,o=this._docs.length;a<o;a+=1){const s=this._docs[a];e(s,a)&&(this.removeAt(a),a-=1,o-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:a,includeScore:o,shouldSort:s,sortFn:r,ignoreFieldNorm:i}=this.options;let l=fe(e)?fe(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Dl(l,{ignoreFieldNorm:i}),s&&l.sort(r),jn(n)&&n>-1&&(l=l.slice(0,n)),Wl(l,this._docs,{includeMatches:a,includeScore:o})}_searchStringList(e){const n=_t(e,this.options),{records:a}=this._myIndex,o=[];return a.forEach(({v:s,i:r,n:i})=>{if(!re(s))return;const{isMatch:l,score:u,indices:p}=n.searchIn(s);l&&o.push({item:s,idx:r,matches:[{score:u,value:s,norm:i,indices:p}]})}),o}_searchLogical(e){const n=Jn(e,this.options),a=(i,l,u)=>{if(!i.children){const{keyId:m,searcher:v}=i,y=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(l,m),searcher:v});return y&&y.length?[{idx:u,item:l,matches:y}]:[]}const p=[];for(let m=0,v=i.children.length;m<v;m+=1){const y=i.children[m],w=a(y,l,u);if(w.length)p.push(...w);else if(i.operator===Ke.AND)return[]}return p},o=this._myIndex.records,s={},r=[];return o.forEach(({$:i,i:l})=>{if(re(i)){let u=a(n,i,l);u.length&&(s[l]||(s[l]={idx:l,item:i,matches:[]},r.push(s[l])),u.forEach(({matches:p})=>{s[l].matches.push(...p)}))}}),r}_searchObjectList(e){const n=_t(e,this.options),{keys:a,records:o}=this._myIndex,s=[];return o.forEach(({$:r,i})=>{if(!re(r))return;let l=[];a.forEach((u,p)=>{l.push(...this._findMatches({key:u,value:r[p],searcher:n}))}),l.length&&s.push({idx:i,item:r,matches:l})}),s}_findMatches({key:e,value:n,searcher:a}){if(!re(n))return[];let o=[];if(_e(n))n.forEach(({v:s,i:r,n:i})=>{if(!re(s))return;const{isMatch:l,score:u,indices:p}=a.searchIn(s);l&&o.push({score:u,key:e,value:s,idx:r,norm:i,indices:p})});else{const{v:s,n:r}=n,{isMatch:i,score:l,indices:u}=a.searchIn(s);i&&o.push({score:l,key:e,value:s,norm:r,indices:u})}return o}}xe.version="6.6.2";xe.createIndex=Dn;xe.parseIndex=$l;xe.config=B;xe.parseQuery=Jn;Nl(jl);const Zt=ge({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ve=()=>({isSearching:C(()=>Zt.search!==""),...ha(Zt)});function Jl(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map(function(o){o(n)}),(a=t.get("*"))&&a.slice().map(function(o){o(e,n)})}}}const Ul=Jl(),at=()=>({emitter:Ul});function ql(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function Gl(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}const Kl=["command-theme"],Ql={"command-root":""},Zl=S({name:"Command"}),Yl=S({...Zl,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(t,{emit:e}){const n=t,a='[command-item=""]',o="command-item-key",s='[command-group=""]',r="command-group-key",i='[command-group-heading=""]',l=`${a}:not([aria-disabled="true"])`,u=`${a}[aria-selected="true"]`,p="command-item-select",m="data-value";Mt("theme",n.theme||"default");const{selectedNode:v,search:y,dataValue:w,filtered:g}=Ve(),{emitter:_}=at(),x=T(),M=it(T(new Map),333),I=it(T(new Set),333),O=it(T(new Map)),H=C(()=>{const V=[];for(const[K,z]of M.value.entries())V.push({key:K,label:z});return V}),J=C(()=>{const V=xe.createIndex(n.fuseOptions.keys,H.value);return new xe(H.value,n.fuseOptions,V)}),F=()=>{var V,K,z;const Q=j();Q&&(((V=Q.parentElement)==null?void 0:V.firstElementChild)===Q&&((z=(K=Q.closest(s))==null?void 0:K.querySelector(i))==null||z.scrollIntoView({block:"nearest"})),Q.scrollIntoView({block:"nearest"}))},j=()=>{var V;return(V=x.value)==null?void 0:V.querySelector(u)},D=(V=x.value)=>{const K=V==null?void 0:V.querySelectorAll(l);return K?Array.from(K):[]},oe=()=>{var V;const K=(V=x.value)==null?void 0:V.querySelectorAll(s);return K?Array.from(K):[]},me=()=>{const[V]=D();V&&V.getAttribute(o)&&(v.value=V.getAttribute(o)||"")},se=V=>{const K=D()[V];K&&(v.value=K.getAttribute(o)||"")},A=V=>{const K=j(),z=D(),Q=z.findIndex(Fe=>Fe===K),we=z[Q+V];we?v.value=we.getAttribute(o)||"":V>0?se(0):se(z.length-1)},U=V=>{const K=j();let z=K==null?void 0:K.closest(s),Q=null;for(;z&&!Q;)z=V>0?ql(z,s):Gl(z,s),Q=z==null?void 0:z.querySelector(l);Q?v.value=Q.getAttribute(o)||"":A(V)},te=()=>se(0),ve=()=>se(D().length-1),Z=V=>{V.preventDefault(),V.metaKey?ve():V.altKey?U(1):A(1)},Ee=V=>{V.preventDefault(),V.metaKey?te():V.altKey?U(-1):A(-1)},ot=V=>{switch(V.key){case"n":case"j":{V.ctrlKey&&Z(V);break}case"ArrowDown":{Z(V);break}case"p":case"k":{V.ctrlKey&&Ee(V);break}case"ArrowUp":{Ee(V);break}case"Home":{te();break}case"End":{ve();break}case"Enter":{const K=j();if(K){const z=new Event(p);K.dispatchEvent(z)}}}},Y=()=>{if(!y.value){g.value.count=I.value.size;return}g.value.groups=new Set("");const V=new Map,K=J.value.search(y.value).map(z=>z.item);for(const{key:z,label:Q}of K)V.set(z,Q);for(const[z,Q]of O.value)for(const we of Q)V.get(we)&&g.value.groups.add(z);pe(()=>{g.value.count=V.size,g.value.items=V})},ue=()=>{const V=D(),K=oe();for(const z of V){const Q=z.getAttribute(o)||"",we=z.getAttribute(m)||"";I.value.add(Q),M.value.set(Q,we),g.value.count=M.value.size}for(const z of K){const Q=D(z),we=z.getAttribute(r)||"",Fe=new Set("");for(const aa of Q){const oa=aa.getAttribute(o)||"";Fe.add(oa)}O.value.set(we,Fe)}};q(()=>v.value,V=>{V&&pe(F)},{deep:!0}),q(()=>y.value,V=>{Y(),pe(me)}),_.on("selectItem",V=>{e("select-item",V)});const st=On(V=>{V&&(ue(),pe(me))},100);return _.on("rerenderList",st),ye(()=>{ue(),me()}),(V,K)=>(c(),f("div",{class:W(t.theme),onKeydown:ot,ref_key:"commandRef",ref:x,"command-theme":t.theme},[h("div",Ql,[b(V.$slots,"default")])],42,Kl))}}),Oe=(t,e)=>{const n=t.__vccOpts||t;for(const[a,o]of e)n[a]=o;return n},kt=Oe(Yl,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Xl={"command-dialog":""},ec={"command-dialog-mask":""},tc={"command-dialog-wrapper":""},nc={"command-dialog-header":""},ac={"command-dialog-body":""},oc={key:0,"command-dialog-footer":""},sc=S({name:"Command.Dialog"}),rc=S({...sc,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(t,{emit:e}){const n=t,{search:a,filtered:o}=Ve(),{emitter:s}=at(),r=T();s.on("selectItem",l=>{e("select-item",l)});const i=()=>{a.value="",o.value.count=0,o.value.items=new Map,o.value.groups=new Set};return En(()=>n.visible,i),Pt(i),(l,u)=>(c(),E(da,{to:"body",ref_key:"dialogRef",ref:r},[$(Ze,{name:"command-dialog",appear:""},{default:k(()=>[t.visible?(c(),E(kt,{key:0,theme:t.theme},{default:k(()=>[h("div",Xl,[h("div",ec,[h("div",tc,[h("div",nc,[b(l.$slots,"header")]),h("div",ac,[b(l.$slots,"body")]),l.$slots.footer?(c(),f("div",oc,[b(l.$slots,"footer")])):L("v-if",!0)])])])]),_:3},8,["theme"])):L("v-if",!0)]),_:3})],512))}}),ic=Oe(rc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let Un=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const lc=["command-group-key","data-value"],cc={key:0,"command-group-heading":""},uc={"command-group-items":"",role:"group"},dc=S({name:"Command.Group"}),hc=S({...dc,props:{heading:{type:String,required:!0}},setup(t){const e=C(()=>`command-group-${Un()}`),{filtered:n,isSearching:a}=Ve(),o=C(()=>a.value?n.value.groups.has(e.value):!0);return(s,r)=>Je((c(),f("div",{"command-group":"",role:"presentation",key:d(e),"command-group-key":d(e),"data-value":t.heading},[t.heading?(c(),f("div",cc,N(t.heading),1)):L("v-if",!0),h("div",uc,[b(s.$slots,"default")])],8,lc)),[[Ue,d(o)]])}}),pc=Oe(hc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),fc=["placeholder","value"],mc=S({name:"Command.Input"}),vc=S({...mc,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(t,{emit:e}){const n=T(null),{search:a}=Ve(),o=C(()=>a.value),s=r=>{const i=r,l=r.target;a.value=l==null?void 0:l.value,e("input",i),e("update:value",a.value)};return $e(()=>{var r;(r=n.value)==null||r.focus()}),(r,i)=>(c(),f("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:t.placeholder,value:d(o),onInput:s},null,40,fc))}}),gc=Oe(vc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),_c=["aria-selected","aria-disabled","command-item-key"],bc=S({name:"Command.Item"}),yc=S({...bc,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(t,{emit:e}){const n=t,a="command-item-select",o="data-value",{current:s}=Xi(),{selectedNode:r,filtered:i,isSearching:l}=Ve(),{emitter:u}=at(),p=T(),m=C(()=>`command-item-${Un()}`),v=C(()=>{const g=i.value.items.get(m.value);return l.value?g!==void 0:!0}),y=C(()=>Array.from(s)),w=()=>{var g;const _={key:m.value,value:((g=p.value)==null?void 0:g.getAttribute(o))||""};e("select",_),u.emit("selectItem",_)};return En(y,g=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(_=>s.has(_.toLowerCase()))&&n.perform&&n.perform()}),$e(()=>{var g;(g=p.value)==null||g.addEventListener(a,w)}),Pt(()=>{var g;(g=p.value)==null||g.removeEventListener(a,w)}),(g,_)=>Je((c(),f("div",{ref_key:"itemRef",ref:p,"command-item":"",role:"option","aria-selected":d(r)===d(m),"aria-disabled":!d(v),key:d(m),"command-item-key":d(m),onClick:w},[b(g.$slots,"default")],8,_c)),[[Ue,d(v)]])}}),kc=Oe(yc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),wc=S({name:"Command.List"}),$c=S({...wc,setup(t){const{emitter:e}=at(),n=T(),a=T();let o=null,s;return $e(()=>{s=a.value;const r=n.value;s&&r&&(o=new ResizeObserver(i=>{pe(()=>{const l=s==null?void 0:s.offsetHeight;r==null||r.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),e.emit("rerenderList",!0)})}),o.observe(s))}),Pt(()=>{o!==null&&s&&o.unobserve(s)}),(r,i)=>(c(),f("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[h("div",{"command-list-sizer":"",ref_key:"heightRef",ref:a},[b(r.$slots,"default")],512)],512))}}),Sc=Oe($c,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),Cc=S({name:"Command.Empty",setup(t,{attrs:e,slots:n}){const{filtered:a}=Ve(),o=C(()=>a.value.count===0);return()=>o.value?qe("div",{"command-empty":"",role:"presentation",...e},n):qe("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),Lc=S({name:"Command.Loading",setup(t,{attrs:e,slots:n}){return()=>qe("div",{"command-loading":"",role:"progressbar",...e},n)}}),Mc=S({name:"Command.Separator",setup(t,{attrs:e,slots:n}){return()=>qe("div",{"command-separator":"",role:"separator",...e})}}),Ie=Object.assign(kt,{Dialog:ic,Empty:Cc,Group:pc,Input:gc,Item:kc,List:Sc,Loading:Lc,Separator:Mc,Root:kt});var Yt;const Be=typeof window<"u",qn=t=>typeof t=="function",Pc=t=>typeof t=="string",be=()=>{},xc=Be&&((Yt=window==null?void 0:window.navigator)==null?void 0:Yt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ie(t){return typeof t=="function"?t():d(t)}function Et(t,e){function n(...a){return new Promise((o,s)=>{Promise.resolve(t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(o).catch(s)})}return n}const Gn=t=>t();function Tc(t,e={}){let n,a,o=be;const s=i=>{clearTimeout(i),o(),o=be};return i=>{const l=ie(t),u=ie(e.maxWait);return n&&s(n),l<=0||u!==void 0&&u<=0?(a&&(s(a),a=null),Promise.resolve(i())):new Promise((p,m)=>{o=e.rejectOnCancel?m:p,u&&!a&&(a=setTimeout(()=>{n&&s(n),a=null,p(i())},u)),n=setTimeout(()=>{a&&s(a),a=null,p(i())},l)})}}function Ic(t,e=!0,n=!0,a=!1){let o=0,s,r=!0,i=be,l;const u=()=>{s&&(clearTimeout(s),s=void 0,i(),i=be)};return m=>{const v=ie(t),y=Date.now()-o,w=()=>l=m();return u(),v<=0?(o=Date.now(),w()):(y>v&&(n||!r)?(o=Date.now(),w()):e&&(l=new Promise((g,_)=>{i=a?_:g,s=setTimeout(()=>{o=Date.now(),r=!0,g(w()),u()},Math.max(0,v-y))})),!n&&!s&&(s=setTimeout(()=>r=!0,v)),r=!1,l)}}function Ac(t=Gn){const e=T(!0);function n(){e.value=!1}function a(){e.value=!0}const o=(...s)=>{e.value&&t(...s)};return{isActive:Lt(e),pause:n,resume:a,eventFilter:o}}function Vc(t){return t}function Te(t){return kn()?(wn(t),!0):!1}function Oc(t,e=200,n={}){return Et(Tc(e,n),t)}function Ec(t,e=200,n=!1,a=!0,o=!1){return Et(Ic(e,n,a,o),t)}function Bc(t){return typeof t=="function"?C(t):T(t)}function Bt(t,e=!0){pa()?ye(t):e?t():pe(t)}function j1(t,e=1e3,n={}){const{immediate:a=!0,immediateCallback:o=!1}=n;let s=null;const r=T(!1);function i(){s&&(clearInterval(s),s=null)}function l(){r.value=!1,i()}function u(){const p=ie(e);p<=0||(r.value=!0,o&&t(),i(),s=setInterval(t,p))}if(a&&Be&&u(),fa(e)||qn(e)){const p=q(e,()=>{r.value&&Be&&u()});Te(p)}return Te(l),{isActive:r,pause:l,resume:u}}function N1(t,e,n={}){const{immediate:a=!0}=n,o=T(!1);let s=null;function r(){s&&(clearTimeout(s),s=null)}function i(){o.value=!1,r()}function l(...u){r(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,t(...u)},ie(e))}return a&&(o.value=!0,Be&&l()),Te(i),{isPending:Lt(o),start:l,stop:i}}var Xt=Object.getOwnPropertySymbols,jc=Object.prototype.hasOwnProperty,Nc=Object.prototype.propertyIsEnumerable,Fc=(t,e)=>{var n={};for(var a in t)jc.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Xt)for(var a of Xt(t))e.indexOf(a)<0&&Nc.call(t,a)&&(n[a]=t[a]);return n};function Hc(t,e,n={}){const a=n,{eventFilter:o=Gn}=a,s=Fc(a,["eventFilter"]);return q(t,Et(o,e),s)}var Dc=Object.defineProperty,Rc=Object.defineProperties,zc=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Kn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable,en=(t,e,n)=>e in t?Dc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Wc=(t,e)=>{for(var n in e||(e={}))Kn.call(e,n)&&en(t,n,e[n]);if(Qe)for(var n of Qe(e))Qn.call(e,n)&&en(t,n,e[n]);return t},Jc=(t,e)=>Rc(t,zc(e)),Uc=(t,e)=>{var n={};for(var a in t)Kn.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Qe)for(var a of Qe(t))e.indexOf(a)<0&&Qn.call(t,a)&&(n[a]=t[a]);return n};function Zn(t,e,n={}){const a=n,{eventFilter:o}=a,s=Uc(a,["eventFilter"]),{eventFilter:r,pause:i,resume:l,isActive:u}=Ac(o);return{stop:Hc(t,e,Jc(Wc({},s),{eventFilter:r})),pause:i,resume:l,isActive:u}}function le(t){var e;const n=ie(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ae=Be?window:void 0;function X(...t){let e,n,a,o;if(Pc(t[0])||Array.isArray(t[0])?([n,a,o]=t,e=ae):[e,n,a,o]=t,!e)return be;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const s=[],r=()=>{s.forEach(p=>p()),s.length=0},i=(p,m,v,y)=>(p.addEventListener(m,v,y),()=>p.removeEventListener(m,v,y)),l=q(()=>[le(e),ie(o)],([p,m])=>{r(),p&&s.push(...n.flatMap(v=>a.map(y=>i(p,v,y,m))))},{immediate:!0,flush:"post"}),u=()=>{l(),r()};return Te(u),u}let tn=!1;function F1(t,e,n={}){const{window:a=ae,ignore:o=[],capture:s=!0,detectIframe:r=!1}=n;if(!a)return;xc&&!tn&&(tn=!0,Array.from(a.document.body.children).forEach(v=>v.addEventListener("click",be)));let i=!0;const l=v=>o.some(y=>{if(typeof y=="string")return Array.from(a.document.querySelectorAll(y)).some(w=>w===v.target||v.composedPath().includes(w));{const w=le(y);return w&&(v.target===w||v.composedPath().includes(w))}}),p=[X(a,"click",v=>{const y=le(t);if(!(!y||y===v.target||v.composedPath().includes(y))){if(v.detail===0&&(i=!l(v)),!i){i=!0;return}e(v)}},{passive:!0,capture:s}),X(a,"pointerdown",v=>{const y=le(t);y&&(i=!v.composedPath().includes(y)&&!l(v))},{passive:!0}),r&&X(a,"blur",v=>{var y;const w=le(t);((y=a.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(w!=null&&w.contains(a.document.activeElement))&&e(v)})].filter(Boolean);return()=>p.forEach(v=>v())}function jt(t,e=!1){const n=T(),a=()=>n.value=!!t();return a(),Bt(a,e),n}function qc(t,e={}){const{window:n=ae}=e,a=jt(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=T(!1),r=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},i=()=>{a.value&&(r(),o=n.matchMedia(Bc(t).value),s.value=o.matches,"addEventListener"in o?o.addEventListener("change",i):o.addListener(i))};return $e(i),Te(()=>r()),s}function H1({window:t=ae}={}){const e=a=>{const{state:o,length:s}=(t==null?void 0:t.history)||{},{hash:r,host:i,hostname:l,href:u,origin:p,pathname:m,port:v,protocol:y,search:w}=(t==null?void 0:t.location)||{};return{trigger:a,state:o,length:s,hash:r,host:i,hostname:l,href:u,origin:p,pathname:m,port:v,protocol:y,search:w}},n=T(e("load"));return t&&(X(t,"popstate",()=>n.value=e("popstate"),{passive:!0}),X(t,"hashchange",()=>n.value=e("hashchange"),{passive:!0})),n}const wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$t="__vueuse_ssr_handlers__";wt[$t]=wt[$t]||{};const Gc=wt[$t];function Yn(t,e){return Gc[t]||e}function Kc(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Qc=Object.defineProperty,nn=Object.getOwnPropertySymbols,Zc=Object.prototype.hasOwnProperty,Yc=Object.prototype.propertyIsEnumerable,an=(t,e,n)=>e in t?Qc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,on=(t,e)=>{for(var n in e||(e={}))Zc.call(e,n)&&an(t,n,e[n]);if(nn)for(var n of nn(e))Yc.call(e,n)&&an(t,n,e[n]);return t};const Xc={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},sn="vueuse-storage";function eu(t,e,n,a={}){var o;const{flush:s="pre",deep:r=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:p,window:m=ae,eventFilter:v,onError:y=j=>{console.error(j)}}=a,w=(p?Ct:T)(e);if(!n)try{n=Yn("getDefaultStorage",()=>{var j;return(j=ae)==null?void 0:j.localStorage})()}catch(j){y(j)}if(!n)return w;const g=ie(e),_=Kc(g),x=(o=a.serializer)!=null?o:Xc[_],{pause:M,resume:I}=Zn(w,()=>O(w.value),{flush:s,deep:r,eventFilter:v});return m&&i&&(X(m,"storage",F),X(m,sn,J)),F(),w;function O(j){try{if(j==null)n.removeItem(t);else{const D=x.write(j),oe=n.getItem(t);oe!==D&&(n.setItem(t,D),m&&m.dispatchEvent(new CustomEvent(sn,{detail:{key:t,oldValue:oe,newValue:D,storageArea:n}})))}}catch(D){y(D)}}function H(j){const D=j?j.newValue:n.getItem(t);if(D==null)return l&&g!==null&&n.setItem(t,x.write(g)),g;if(!j&&u){const oe=x.read(D);return qn(u)?u(oe,g):_==="object"&&!Array.isArray(oe)?on(on({},g),oe):oe}else return typeof D!="string"?D:x.read(D)}function J(j){F(j.detail)}function F(j){if(!(j&&j.storageArea!==n)){if(j&&j.key==null){w.value=g;return}if(!(j&&j.key!==t)){M();try{w.value=H(j)}catch(D){y(D)}finally{j?pe(I):I()}}}}}function Xn(t){return qc("(prefers-color-scheme: dark)",t)}var tu=Object.defineProperty,rn=Object.getOwnPropertySymbols,nu=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,ln=(t,e,n)=>e in t?tu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ou=(t,e)=>{for(var n in e||(e={}))nu.call(e,n)&&ln(t,n,e[n]);if(rn)for(var n of rn(e))au.call(e,n)&&ln(t,n,e[n]);return t};function su(t={}){const{selector:e="html",attribute:n="class",initialValue:a="auto",window:o=ae,storage:s,storageKey:r="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:u}=t,p=ou({auto:"",light:"light",dark:"dark"},t.modes||{}),m=Xn({window:o}),v=C(()=>m.value?"dark":"light"),y=l||(r==null?T(a):eu(r,a,s,{window:o,listenToStorageChanges:i})),w=C({get(){return y.value==="auto"&&!u?v.value:y.value},set(M){y.value=M}}),g=Yn("updateHTMLAttrs",(M,I,O)=>{const H=o==null?void 0:o.document.querySelector(M);if(H)if(I==="class"){const J=O.split(/\s/g);Object.values(p).flatMap(F=>(F||"").split(/\s/g)).filter(Boolean).forEach(F=>{J.includes(F)?H.classList.add(F):H.classList.remove(F)})}else H.setAttribute(I,O)});function _(M){var I;const O=M==="auto"?v.value:M;g(e,n,(I=p[O])!=null?I:O)}function x(M){t.onChanged?t.onChanged(M,_):_(M)}return q(w,x,{flush:"post",immediate:!0}),u&&q(v,()=>x(w.value),{flush:"post"}),Bt(()=>x(w.value)),w}var ru=Object.defineProperty,iu=Object.defineProperties,lu=Object.getOwnPropertyDescriptors,cn=Object.getOwnPropertySymbols,cu=Object.prototype.hasOwnProperty,uu=Object.prototype.propertyIsEnumerable,un=(t,e,n)=>e in t?ru(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,du=(t,e)=>{for(var n in e||(e={}))cu.call(e,n)&&un(t,n,e[n]);if(cn)for(var n of cn(e))uu.call(e,n)&&un(t,n,e[n]);return t},hu=(t,e)=>iu(t,lu(e));function D1(t={}){const{valueDark:e="dark",valueLight:n="",window:a=ae}=t,o=su(hu(du({},t),{onChanged:(i,l)=>{var u;t.onChanged?(u=t.onChanged)==null||u.call(t,i==="dark"):l(i)},modes:{dark:e,light:n}})),s=Xn({window:a});return C({get(){return o.value==="dark"},set(i){i===s.value?o.value="auto":o.value=i?"dark":"light"}})}var dn=Object.getOwnPropertySymbols,pu=Object.prototype.hasOwnProperty,fu=Object.prototype.propertyIsEnumerable,mu=(t,e)=>{var n={};for(var a in t)pu.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&dn)for(var a of dn(t))e.indexOf(a)<0&&fu.call(t,a)&&(n[a]=t[a]);return n};function vu(t,e,n={}){const a=n,{window:o=ae}=a,s=mu(a,["window"]);let r;const i=jt(()=>o&&"ResizeObserver"in o),l=()=>{r&&(r.disconnect(),r=void 0)},u=q(()=>le(t),m=>{l(),i.value&&o&&m&&(r=new ResizeObserver(e),r.observe(m,s))},{immediate:!0,flush:"post"}),p=()=>{l(),u()};return Te(p),{isSupported:i,stop:p}}function R1(t,e={width:0,height:0},n={}){const{window:a=ae,box:o="content-box"}=n,s=C(()=>{var l,u;return(u=(l=le(t))==null?void 0:l.namespaceURI)==null?void 0:u.includes("svg")}),r=T(e.width),i=T(e.height);return vu(t,([l])=>{const u=o==="border-box"?l.borderBoxSize:o==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(a&&s.value){const p=le(t);if(p){const m=a.getComputedStyle(p);r.value=parseFloat(m.width),i.value=parseFloat(m.height)}}else if(u){const p=Array.isArray(u)?u:[u];r.value=p.reduce((m,{inlineSize:v})=>m+v,0),i.value=p.reduce((m,{blockSize:v})=>m+v,0)}else r.value=l.contentRect.width,i.value=l.contentRect.height},n),q(()=>le(t),l=>{r.value=l?e.width:0,i.value=l?e.height:0}),{width:r,height:i}}function z1(t,{window:e=ae,scrollTarget:n}={}){const a=T(!1),o=()=>{if(!e)return;const s=e.document,r=le(t);if(!r)a.value=!1;else{const i=r.getBoundingClientRect();a.value=i.top<=(e.innerHeight||s.documentElement.clientHeight)&&i.left<=(e.innerWidth||s.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return q(()=>le(t),()=>o(),{immediate:!0,flush:"post"}),e&&X(n||e,"scroll",o,{capture:!1,passive:!0}),a}const hn=1;function W1(t,e={}){const{throttle:n=0,idle:a=200,onStop:o=be,onScroll:s=be,offset:r={left:0,right:0,top:0,bottom:0},eventListenerOptions:i={capture:!1,passive:!0},behavior:l="auto"}=e,u=T(0),p=T(0),m=C({get(){return u.value},set(O){y(O,void 0)}}),v=C({get(){return p.value},set(O){y(void 0,O)}});function y(O,H){var J,F,j;const D=ie(t);D&&((j=D instanceof Document?document.body:D)==null||j.scrollTo({top:(J=ie(H))!=null?J:v.value,left:(F=ie(O))!=null?F:m.value,behavior:ie(l)}))}const w=T(!1),g=ge({left:!0,right:!1,top:!0,bottom:!1}),_=ge({left:!1,right:!1,top:!1,bottom:!1}),x=O=>{w.value&&(w.value=!1,_.left=!1,_.right=!1,_.top=!1,_.bottom=!1,o(O))},M=Oc(x,n+a),I=O=>{const H=O.target===document?O.target.documentElement:O.target,J=H.scrollLeft;_.left=J<u.value,_.right=J>p.value,g.left=J<=0+(r.left||0),g.right=J+H.clientWidth>=H.scrollWidth-(r.right||0)-hn,u.value=J;let F=H.scrollTop;O.target===document&&!F&&(F=document.body.scrollTop),_.top=F<p.value,_.bottom=F>p.value,g.top=F<=0+(r.top||0),g.bottom=F+H.clientHeight>=H.scrollHeight-(r.bottom||0)-hn,p.value=F,w.value=!0,M(O),s(O)};return X(t,"scroll",n?Ec(I,n,!0,!1):I,i),X(t,"scrollend",x,i),{x:m,y:v,isScrolling:w,arrivedState:g,directions:_}}const gu={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function _u(t={}){const{reactive:e=!1,target:n=ae,aliasMap:a=gu,passive:o=!0,onEventFired:s=be}=t,r=ge(new Set),i={toJSON(){return{}},current:r},l=e?ge(i):i,u=new Set,p=new Set;function m(g,_){g in l&&(e?l[g]=_:l[g].value=_)}function v(){r.clear();for(const g of p)m(g,!1)}function y(g,_){var x,M;const I=(x=g.key)==null?void 0:x.toLowerCase(),H=[(M=g.code)==null?void 0:M.toLowerCase(),I].filter(Boolean);I&&(_?r.add(I):r.delete(I));for(const J of H)p.add(J),m(J,_);I==="meta"&&!_?(u.forEach(J=>{r.delete(J),m(J,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...r,...H].forEach(J=>u.add(J))}X(n,"keydown",g=>(y(g,!0),s(g)),{passive:o}),X(n,"keyup",g=>(y(g,!1),s(g)),{passive:o}),X("blur",v,{passive:!0}),X("focus",v,{passive:!0});const w=new Proxy(l,{get(g,_,x){if(typeof _!="string")return Reflect.get(g,_,x);if(_=_.toLowerCase(),_ in a&&(_=a[_]),!(_ in l))if(/[+_-]/.test(_)){const I=_.split(/[+_-]/g).map(O=>O.trim());l[_]=C(()=>I.every(O=>d(w[O])))}else l[_]=T(!1);const M=Reflect.get(g,_,x);return e?d(M):M}});return w}var pn=Object.getOwnPropertySymbols,bu=Object.prototype.hasOwnProperty,yu=Object.prototype.propertyIsEnumerable,ku=(t,e)=>{var n={};for(var a in t)bu.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&pn)for(var a of pn(t))e.indexOf(a)<0&&yu.call(t,a)&&(n[a]=t[a]);return n};function J1(t,e,n={}){const a=n,{window:o=ae}=a,s=ku(a,["window"]);let r;const i=jt(()=>o&&"MutationObserver"in o),l=()=>{r&&(r.disconnect(),r=void 0)},u=q(()=>le(t),m=>{l(),i.value&&o&&m&&(r=new MutationObserver(e),r.observe(m,s))},{immediate:!0}),p=()=>{l(),u()};return Te(p),{isSupported:i,stop:p}}var fn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(fn||(fn={}));var wu=Object.defineProperty,mn=Object.getOwnPropertySymbols,$u=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable,vn=(t,e,n)=>e in t?wu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Cu=(t,e)=>{for(var n in e||(e={}))$u.call(e,n)&&vn(t,n,e[n]);if(mn)for(var n of mn(e))Su.call(e,n)&&vn(t,n,e[n]);return t};const Lu={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Cu({linear:Vc},Lu);function U1(t="history",e={}){const{initialValue:n={},removeNullishValues:a=!0,removeFalsyValues:o=!1,write:s=!0,window:r=ae}=e;if(!r)return ge(n);const i=ge({});function l(){if(t==="history")return r.location.search||"";if(t==="hash"){const x=r.location.hash||"",M=x.indexOf("?");return M>0?x.slice(M):""}else return(r.location.hash||"").replace(/^#/,"")}function u(x){const M=x.toString();if(t==="history")return`${M?`?${M}`:""}${r.location.hash||""}`;if(t==="hash-params")return`${r.location.search||""}${M?`#${M}`:""}`;const I=r.location.hash||"#",O=I.indexOf("?");return O>0?`${I.slice(0,O)}${M?`?${M}`:""}`:`${I}${M?`?${M}`:""}`}function p(){return new URLSearchParams(l())}function m(x){const M=new Set(Object.keys(i));for(const I of x.keys()){const O=x.getAll(I);i[I]=O.length>1?O:x.get(I)||"",M.delete(I)}Array.from(M).forEach(I=>delete i[I])}const{pause:v,resume:y}=Zn(i,()=>{const x=new URLSearchParams("");Object.keys(i).forEach(M=>{const I=i[M];Array.isArray(I)?I.forEach(O=>x.append(M,O)):a&&I==null||o&&!I?x.delete(M):x.set(M,I)}),w(x)},{deep:!0});function w(x,M){v(),M&&m(x),r.history.replaceState(r.history.state,r.document.title,r.location.pathname+u(x)),y()}function g(){s&&w(p(),!0)}X(r,"popstate",g,!1),t!=="history"&&X(r,"hashchange",g,!1);const _=p();return _.keys().next().value?m(_):Object.assign(i,n),i}function Mu(t={}){const{window:e=ae,initialWidth:n=1/0,initialHeight:a=1/0,listenOrientation:o=!0,includeScrollbar:s=!0}=t,r=T(n),i=T(a),l=()=>{e&&(s?(r.value=e.innerWidth,i.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};return l(),Bt(l),X("resize",l,{passive:!0}),o&&X("orientationchange",l,{passive:!0}),{width:r,height:i}}const ct=T([{route:"/about/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2023-10-09 17:31:50",author:!1,sidebar:!1,title:"关于本站"}},{route:"/friend-link-list/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2024-06-06 16:04:19",author:!1,sidebar:!1,title:""}},{route:"/full-stack/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,common:!1,recommend:!1,title:""}},{route:"/computer-basics/data-structure/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"算法和数据结构"}},{route:"/computer-basics/network/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"计算机网络"}},{route:"/computer-basics/operating-system/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"操作系统"}},{route:"/full-stack/database/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"数据库"}},{route:"/full-stack/front-end/flex.html",meta:{description:"Flex（Flexible Box）弹性布局，用于为盒装模型提供较大的灵活性。能够灵活，充分利用浏览器的空间，减少了多端适配的难度和成本。",cover:"https://cdn.imufeng.cn/mblog/6175e8bcd0a48acaa01a9b31ce7b0695.png",categories:["前端学习笔记"],outline:[2,3],tags:["CSS","布局"],head:[["meta",{name:"keywords",content:"前端开发, CSS, 布局, Flex, 流式布局"}]],title:"浅学Flex流式布局",date:"2024-03-26 15:36:51"}},{route:"/full-stack/front-end/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-06-17 17:04:33",author:!1,recommend:!1,title:"前端笔记"}},{route:"/full-stack/java/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,common:!1,recommend:!1,title:"Java"}},{route:"/full-stack/other/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"其他"}},{route:"/full-stack/other/redis.html",meta:{description:"Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。",categories:["技术笔记分享"],tags:["Redis"],outline:[2,3],title:"Redis自学笔记",date:"2024-04-08 17:32:40"}},{route:"/full-stack/other/xpath.html",meta:{description:"XPath 是一门在 XML 文档中查找信息的语言，用于在 XML 文档中通过元素和属性进行导航。",categories:["技术笔记分享"],tags:["Xpath","爬虫"],outline:[2,3],title:"XPATH自学笔记",date:"2024-03-25 16:19:18"}},{route:"/full-stack/rust/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"Rust"}},{route:"/interview/question-by-day/",meta:{description:"每天至少一道全栈题目分享，范围不限。",readingTime:!1,hidden:!0,author:!1,title:"每日一题",recommend:!1,date:"2024-03-25 16:25:06"}},{route:"/interview/skills/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-04-26 17:06:27",author:!1,recommend:!1,title:""}},{route:"/notes/life-notes/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"生活随笔"}},{route:"/notes/reading-notes/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"读书笔记"}},{route:"/notes/technology-weekly/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-25 16:25:06",author:!1,recommend:!1,title:"科技周报"}},{route:"/training/linux/acme-sh.html",meta:{description:"使用 acme.sh 部署 Let's Encrypt 泛域名证书。",categories:["工具分享"],tags:["Linux","运维"],sticky:1,outline:[2,3],title:"泛域名证书申请以及部署",date:"2024-03-25 16:19:18"}},{route:"/training/linux/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-06-13 15:57:11",author:!1,title:"Linux企业级运维"}},{route:"/training/linux/wordpress-by-docker-compose.html",meta:{description:"本文将带你快速了解 docker compose 安装部署 WordPress。",categories:["建站笔记"],tags:["Linux","Docker","WordPress"],outline:[2,3],title:"基于DockerCompose的WordPress环境部署（附配置优化）",date:"2024-03-25 16:19:18"}},{route:"/training/software/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-03-15 15:48:47",author:!1,title:"软件工具分享"}},{route:"/training/software/mysql-for-win-install.html",meta:{description:"Mysql for Windows 安装及初始化。",categories:["教程分享"],tags:["mysql","windows"],sticky:2,title:"MysqlforWindows安装及初始化",date:"2024-03-15 15:48:47"}},{route:"/full-stack/front-end/review/css.html",meta:{description:"CSS对于设计者来说是一种非常灵活的工具，它必再把烦杂的样式定义编写在文档中，可以将所有有关文档的样式指定内容全部脱离出来，在行定义、在标题中定义，甚至作为外部样式文件供HTML调用。本文主要是对css在开发过程中较为常用以及易混淆的知识的复习。",title:"CSS 复习",categories:["CSS 复习"],outline:[2,3],date:"2024-06-17 00:00:00",tags:["CSS"],head:[["meta",{name:"keywords",content:"CSS，前端，样式"}]]}},{route:"/full-stack/front-end/review/",meta:{description:"",hidden:!0,readingTime:!1,date:"2024-06-17 17:04:33",author:!1,title:"前端复习笔记"}},{route:"/full-stack/java/characteristic/functional.html",meta:{description:"Lambda 表达式、Stream 流、Optional 类操作分享。",tags:["Java"],category:"JAVA 学习笔记",cover:!1,sticky:3,outline:[2,3],head:[["meta",{name:"keywords",content:"java,lambda,stream流,Optional,JAVA8新特性"}]],title:"Java8新特性详解",date:"2024-03-25 16:19:18"}},{route:"/full-stack/java/design-patterns/",meta:{description:"设计模式（Design Patterns），是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。",categories:["Java 学习笔记"],date:"2024-03-26 00:00:00",tags:["Java","设计模式"],sticky:9,title:"重学JAVA设计模式"}},{route:"/full-stack/java/design-patterns/principle.html",meta:{description:"设计模式有七大原则，它体现的是开发过程中的优雅，是一种艺术。遵循这些原则，就能写出更加优雅、灵活的代码结构。",categories:["Java 学习笔记"],tags:["Java","设计模式"],outline:[2,3],cover:"https://cdn.imufeng.cn/mblog/0c82b8f471f9e4337d0131afb5a71515.png",head:[["meta",{name:"keywords",content:"java, 设计模式, 设计模式原则, 单一职责原则, 开放-封闭原则, 里氏替换原则, 依赖倒置原则, 接口隔离原则, 迪米特法则, 合成复用原则"}]],title:"设计模式七大原则",date:"2024-03-26 11:29:39"}},{route:"/full-stack/java/oop/abstract.html",meta:{description:"在一个较为复杂的继承链中，祖先类更具有一般性，作为派生其他类的基类而不糊将其作为用来构造实例。",categories:["Java 学习笔记"],tags:["Java","OOP"],outline:[2,3],title:"抽象类和抽象方法",date:"2024-03-25 16:19:18"}},{route:"/interview/question-by-day/2023/10.html",meta:{description:`

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

 ### Integer 和 int 的区别？

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
  |`,readingTime:!1,hidden:!0,outline:3,title:"",date:"2024-04-08 17:32:40"}},{route:"/interview/question-by-day/2023/11.html",meta:{description:`## 11-30 

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
|`,readingTime:!1,hidden:!0,outline:3,title:"",date:"2024-03-25 16:19:18"}},{route:"/interview/question-by-day/2023/12.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"",date:"2024-03-25 16:19:18"}},{route:"/interview/question-by-day/2023/9.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"",date:"2024-03-25 16:19:18"}},{route:"/interview/question-by-day/2023/",meta:{description:"每天至少一道面试题，范围不限。",readingTime:!1,date:"2024-03-15 16:14:35",author:!1,title:"每日一题 - 2023",hidden:!0}},{route:"/interview/question-by-day/2024/1.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"每日一题-202401",date:"2024-04-08 17:32:40"}},{route:"/interview/question-by-day/2024/10.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/11.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/12.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/2.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"每日一题-202402",date:"2024-04-08 17:32:40"}},{route:"/interview/question-by-day/2024/3.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"每日一题-202403",date:"2024-04-08 17:32:40"}},{route:"/interview/question-by-day/2024/4.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"每日一题-202404",date:"2024-06-18 22:31:57"}},{route:"/interview/question-by-day/2024/5.html",meta:{description:`
# 每日一题 - 202405

## 5-31

### 如何压缩前端项目中 JS 的体积

1. \`terser\` 或者 \`uglify\`，及流行的使用 Rust 编写的 \`swc\` 压缩混淆化 JS。
2. \`gzip\` 或者 \`brotli\` 压缩，在网关处(nginx)开启
3. 使用 \`webpack-bundle-analyzer\` 分析打包体积，替换占用较大体积的库，如 \`moment\` -> \`dayjs\`
4. 使用支持 Tree-Shaking 的库，对无引用的库或函数进行删除，如 \`lodash\` -> \`lodash/es\`
5. 对无法 Tree Shaking 的库，进行按需引入模块，如使用 \`import Button from 'antd/lib/Button'\`，此处可手写 \`babel-plugin\` 自动完成，但不推荐
6. 使用 babel (css 为 postcss) 时采用 \`browserlist\`，越先进的浏览器所需要的 polyfill 越少，体积更小
7. code spliting，路由懒加载，只加载当前路由的包，按需加载其余的 chunk，首页 JS 体积变小 (PS: 次条不减小总体积，但减小首页体积)
8. 使用 webpack 的 splitChunksPlugin，把运行时、被引用多次的库进行分包，在分包时要注意避免某一个库被多次引用多次打包。此时分为多个 chunk，虽不能把总体积变小，但可提高加载性能 (PS: 此条不减小总体积，但可提升加载性能)
9. 去除多余字符，eg：空格，换行、注释
10. 使用更简单的表达，eg：合并声明、布尔值简化


## 5-30

### prefetch 与 preload 的区别是什么

\`preload\` 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，在需要执行的时候再执行。提供的好处主要是

- 将加载和执行分离开，可不阻塞渲染和 document 的 onload 事件
- 提前加载指定资源，不再出现依赖的font字体隔了一段时间才刷出

\`\`\`html
<link rel="prefetch" href="style.css" as="style" />
<link rel="preload" href="main.js" as="script" />
\`\`\`

1. \`preload\` 优先级高，是告诉浏览器页面**必定**需要的资源，浏览器**一定会**加载这些资源。一般对于 Bundle Spliting 资源与 Code Spliting 资源做 preload
2. \`prefetch\` 优先级低，是告诉浏览器页面**可能**需要的资源，浏览器**不一定会**加载这些资源。一般用以加载其它路由资源，如当页面出现 Link，可 prefetch 当前 Link 的路由资源。（next.js 默认会对 link 做懒加载+prefetch，即当某条 Link 出现页面中，即自动 prefetch 该 Link 指向的路由资源

> 若不确定资源是必定会加载的，则不要错误使用 preload，以免本末倒置，给页面带来更沉重的负担。
>
> 当然，可以在 PC 中使用 preload 来刷新资源的缓存，但在移动端则需要特别慎重，因为可能会浪费用户的带宽。
>
> \`preload 和 prefetch\` 混用的话，并不会复用资源，而是会重复加载。
>
> 若 css 中有应用于已渲染到 DOM 树的元素的选择器，且设置了\` @font-face \`规则时，会触发字体文件的加载。 而字体文件加载中时，DOM 中的这些元素，是处于不可见的状态。对已知必加载的 font 文件进行预加载，除了有性能提升外，更有体验优化的效果。


## 5-29

### 简述 node/v8 中的垃圾回收机制

\`v8\` 中的垃圾回收机制分为三种

1. \`Scavenge\`，工作在新生代，把 \`from space\` 中的存活对象移至 \`to space\`
2. \`Mark-Sweep\`，标记清除。新生代的某些对象由于过度活跃会被移至老生代，此时对老生代中活对象进行标记，并清理死对象
3. \`Mark-Compact\`，标记整理。

> 当一个函数执行结束之后，JavaScript 引擎会通过向下移动 ESP 来销毁该函数保存在栈中的执行上下文。 要回收堆中的垃圾数据，就需要用到 JavaScript 中的垃圾回收器了。 代际假说（The Generational Hypothesis），是垃圾回收领域中一个重要的术语，后续垃圾回收的策略都是建立在该假说的基础之上的，所以很是重要。 代际假说有以下两个特点：
>
> 1. 大部分对象在内存中存在的时间很短，简单来说，就是很多对象一经分配内存，很快就变得不可访问；
>
> 2. 是不死的对象，会活得更久。 在 V8 中会把堆分为新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。
     >
     >    ● 副垃圾回收器，主要负责新生代的垃圾回收。
     >
     >    ● 主垃圾回收器，主要负责老生代的垃圾回收。
>
> **全停顿**![1620974853612-a480b43e-b3bb-452f-a502-3a0162548a7f](https://user-images.githubusercontent.com/19986739/153329224-c2120a5d-4f25-4659-9347-d6217d5a5ce8.png)
>
> **增量标记**![1620975019709-efc33748-fbfc-4fb5-a19d-97abadbf8f97](https://user-images.githubusercontent.com/19986739/153329251-e6a21086-f646-48d5-a23c-c2e3351497ef.png)
>
> 使用增量标记算法，可以把一个完整的垃圾回收任务拆分为很多小的任务，这些小的任务执行时间比较短，可以穿插在其他的 JavaScript 任务中间执行，增强用户体验。


## 5-28

### JS如何在url中传递数组

在 URL 中如何传递数组这种复杂的数据，完全**取决于项目中前后端成员关于复杂数据在 URL 中传输的约定**，一般情况下可以使用以下方式来传递数组：

\`\`\`javascript
a = 3 & a = 4 & a = 5;

a = 3, 4, 5;

a[] = 3 & a[] = 4 & a[] = 5;

a[0] = 3 & a[1] = 4 & a[2] = 5;
\`\`\`

> 但同样，需要后端开发者写一个 \`querystring.parse\` 来对指定的格式解析进行支持，同时也有对各种复杂 qs 支持较好的 package，如：[qs: 据说是对 querystring 复杂对象解析最好的库](https://github.com/ljharb/qs#parsing-arrays)


## 5-27

### Vue3中的ref、toRef和toRefs

\`ref\`:接收一个内部值，生成对应的响应式数据，该内部值挂载在ref对象的value属性上；该对象可以用于模版和reactive。使用ref是为了解决值类型在setup、computed、合成函数等情况下的响应式丢失问题。

\`toRef\`:为响应式对象（reactive）的一个属性创建对应的ref，且该方式创建的ref与源属性保持同步。

\`toRefs\`：将响应式对象转换成普通对象，对象的每个属性都是对应的ref，两者间保持同步。使用toRefs进行对象解构。

\`\`\`javascript
function ref(val) {
    const wrapper = {value: val}
    Object.defineProperty(wrapper, '__v_isRef', {value: true})
    return reactive(wrapper)
}

function toRef(obj, key) {
    const wrapper = {
        get value() {
            return obj[key]
        },
        set value(val) {
            obj[key] = val
        }
    }
    Object.defineProperty(wrapper, '__v_isRef', {value: true})
    return wrapper
}

function toRefs(obj) {
    const ret = {}
    for (const key in obj) {
        ret[key] = toRef(obj, key)
    }
    
    return ret
}

// 自动脱ref
function proxyRefs(target) {
    return new Proxy(target, {
        get(target, key, receiver) {
            const value = Reflect.get(target, key, receiver)
            return value.__v_isRef ? value.value : value
        },
        set(target, key, newValue, receiver) {
            const value = target[key]
            if(value.__v_isRef) {
                value.value = newValue
                return true
            }
            return Reflect.set(target, key, newValue, receiver)
        }
    })
}
\`\`\`


## 5-26

### TypeScript中any、unknown、never

\`any和unkonwn\`在TS类型中属于最顶层的Top Type，即所有的类型都是它俩的子类型。

\`never\`则相反，它作为Bottom Type是所有类型的子类型。


## 5-25

### 浏览器的事件循环机制

> JavaScript是单线程的（指的是js引擎在执行代码的时候只有一个主线程，每次只能干一件事），同时还是非阻塞运行的（执行异步任务的时候，会先挂起相应任务，待异步返回结果再执行回调）

在js代码执行时，会将对象存在\`堆（heap）\`中，在\`栈（stack）\`中存放一些基础类型变量和对象的指针。在执行方法时，会根据当前方法的执行上下文，来进行一个执行。对于普通函数就是正常的入栈出栈即可，涉及到异步任务的时候，js执行会将对应的任务放到事件队列中（微任务队列、宏任务队列）。

> - 常见微任务：queueMicrotask、Promise、MutationObserve等。
> - 常见宏任务：ajax、setTimeout、setInterval、script（js整体代码）、IO操作、UI交互、postMessage等。

故事件循环可以理解为是一个\`桥梁\`，连接着应用程序的js和系统调用之间的通道。其过程为：

1. 执行一个宏任务（一般为一段script），若没有可选的宏任务，就直接处理微任务。
2. 执行中遇到微任务，就将其添加到微任务的任务队列中。
3. 执行中遇到宏任务，就将其提交到宏任务队列中。
4. 执行完当前执行的宏任务后，去查询当前有无需要执行的微任务，有就执行
5. 检查渲染，若需要渲染，浏览器执行渲染任务
6. 渲染完毕后，Js线程会去执行下一个宏任务。。。（如此循环）

\`\`\`javascript
console.log("script start");

const promiseA = new Promise((resolve, reject) => {
  console.log("init promiseA");
  resolve("promiseA");
});

const promiseB = new Promise((resolve, reject) => {
  console.log("init promiseB");
  resolve("promiseB");
});

setTimeout(() => {
  console.log("setTimeout run");
  promiseB.then(res => {
    console.log("promiseB res :>> ", res);
  });
  console.log("setTimeout end");
}, 500);

promiseA.then(res => {
  console.log("promiseA res :>> ", res);
});

queueMicrotask(() => {
  console.log("queue Microtask run");
});

console.log("script end");

// script start
// init promiseA
// init promiseB
// script end
// promiseA res :>>  promiseA
// queue Microtask run
// setTimeout run
// setTimeout end
// promiseB res :>>  promiseB
\`\`\`


## 5-24

### 箭头函数和普通函数的区别

箭头函数不会创建自身的this，只会从上一级\`继承this\`，箭头函数的this在定义的时候就已经确认了，之后不会改变。同时箭头函数无法作为构造函数使用，**没有自身的prototype，也没有arguments**。

\`\`\`javascript
this.id = "global";

console.log("this.id :>> ", this.id); // this.id :>>  global

function normalFun() {
  return this.id;
}

const arrowFun = () => {
  return this.id;
};

const newNormal = new normalFun();
console.log("newNormal :>> ", newNormal); // newNormal :>>  normalFun {}
try {
  const newArrow = new arrowFun();
} catch (error) {
  console.log("error :>> ", error); // error :>>  TypeError: arrowFun is not a constructor
}

console.log("normalFun :>> ", normalFun()); // normalFun :>>  undefined
console.log("arrowFun() :>> ", arrowFun()); // arrowFun() :>>  global

const obj = {
  id: "obj",
  normalFun,
  arrowFun,
};

const normalFunBindObj = normalFun.bind(obj);
const arrowFunBindObj = arrowFun.bind(obj);
console.log("normalFun.call(obj) :>> ", normalFun.call(obj)); // normalFun.call(obj) :>>  obj
console.log("normalFunBindObj() :>> ", normalFunBindObj()); // normalFunBindObj() :>>  obj
console.log("arrowFun.call(obj) :>> :>> ", arrowFun.call(obj)); // arrowFun.call(obj) :>> :>>  global
console.log("arrowFunBindObj() :>> ", arrowFunBindObj()); // arrowFunBindObj() :>>  global
console.log("obj.normalFun() :>> ", obj.normalFun()); // obj.normalFun() :>>  obj
console.log("obj.arrowFun() :>> ", obj.arrowFun()); // obj.arrowFun() :>>  global
\`\`\`


## 5-23

### 实现一个类似关键字new功能的函数

在js中\`new\`关键字主要做了：首先创建一个空对象，这个对象会作为执行new构造函数之后返回的对象实例，将创建的空对象原型（\`__proto__\`）指向构造函数的prototype属性，同时将这个空对象赋值给构造函数内部的\`this\`，并执行构造函数逻辑，根据构造函数的执行逻辑，返回初始创建的对象或构造函数的显式返回值。

\`\`\`javascript
function newFn(...args) {
  const constructor = args.shift();
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, args);
  return typeof result === "object" && result !== null ? result : obj;
}

function Person(name) {
  this.name = name;
}

const p = newFn(Person, "Jerome");

console.log("p.name :>> ", p.name); // p.name :>>  Jerome
\`\`\`


## 5-22

### 数组的forEach和map方法的区别

\`forEach\`是对数组的每一个元素执行一次给定的函数。

\`map\`是创建一个新数组，该新数组由原数组的每个元素都调用一次提供的函数返回值。

\`\`\`javascript
const arr = [1,2,3,4,5,6];

arr.forEach(x =>{
    x = x + 1;
    console.log("x :>> ", x);
})
// x :>>  2
// x :>>  3
// x :>>  4
// x :>>  5
// x :>>  6
// x :>>  7
console.log("arr :>> ", arr); // arr :>>  [1,2,3,4,5,6]

const mapArr = arr.map(x =>{
    x = x * 2;
    return x;
})
console.log("mapArr :>> ", mapArr); // mapArr :>>  [2,4,6,8,10,12]
console.log("arr :>> ", arr);  // arr :>>  [1,2,3,4,5,6]
\`\`\`

> pop()：删除数组后面的最后一个元素，返回值为被删除的那个元素。
> 
> push()：将一个元素或多个元素添加到数组末尾，并返回新的长度。
> 
> shift()：删除数组中的第一个元素，并返回被删除元素的值。
> 
> unshift()：将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**。
> 
> splice()：通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。
> 
> reverse(): 反转数组。


## 5-21

### TS中type和interface的区别

\`interface\`可以重复声明，type不行，继承方式不一样，type使用交叉类型方式，\`interface使用extends实现\`。在对象扩展的情况下，使用接口继承要比交叉类型的性能更好。建议使用interface来描述对象对外暴露的借口，使用type将一组类型重命名（或对类型进行复杂编程）。

\`\`\`typescript
interface iMan {
  name: string;
  age: number;
}
// 接口可以进行声明合并
interface iMan {
  hobby: string;
}

type tMan = {
  name: string;
  age: number;
};
// type不能重复定义
// type tMan = {}

// 继承方式不同,接口继承使用extends
interface iManPlus extends iMan {
  height: string;
}
// type继承使用&，又称交叉类型
type tManPlus = { height: string } & tMan;

const aMan: iManPlus = {
  name: "aa",
  age: 15,
  height: "175cm",
  hobby: "eat",
};

const bMan: tManPlus = {
  name: "bb",
  age: 15,
  height: "150cm",
};
\`\`\`


## 5-20

### 理解provide与inject

> 1、provide和inject是一对新的API，用于在父组件中提供数据，然后在子组件中注入数据。
>
> 2、provide：是一个对象，或者是一个返回对象的函数。里面呢就包含要给子孙后代的东西，也就是属性和属性值。
>
> 3、inject：一个字符串数组，或者是一个对象。属性值可以是一个对象，包含from和default默认值。

\`\`\`vue
//在父组件中，使用provide提供数据：
//name：定义提供 property的 name。
//value ：property的值。
 setup(){
    provide('info',"值")
  }
//在子组件中，使用inject注入数据
//name：接收 provide提供的属性名。
//default：设置默认值，可以不写，是可选参数。
setup(){
    const info = inject("info")
    inject('info',"设置默认值")
    return {
        info
    }
  }
\`\`\`

> provide和inject只能在setup函数中使用，而且provide提供的数据只能在其子组件中使用。如果要在兄弟组件中共享数据，可以使用一个共享的对象或者使用Vuex等状态管理库。


## 5-19

### js-tool-big-box工具包

js-tool-big-box工具主要解决防抖（\`debounce\`）和节流（\`throttle\`）的公共方法

**防抖**：

\`\`\`javascript
<template>
  <div>
    <input @keyup="handleChange" v-model="inputVal" />
  </div>
</template>
<script>
import { eventBox } from 'js-tool-big-box';
export default {
  data() {
    return {
      inputVal: ''
    }
  },
    created() {
        this.myDebounce = eventBox.debounce((data) => {
          this.sendAjax(data);
        }, 2000);
      },
methods: {
    handleChange(event) {
      const val = event.target.value;
      this.myDebounce(val);
    },
    sendAjax(data) {
      console.log('发送时间：：', new Date().getTime());
      console.log('发送请求：', data);
    },
  }
}
<\/script>
\`\`\`

**节流**：

\`\`\`javascript
<script>
import { eventBox } from 'js-tool-big-box';
 
export default {
  name: 'dj',
  data () {
    return {
      inputVal: ''
    }
  },
  created() {
    this.myThrottle = eventBox.throttle((data) => {
      this.sendAjax(data);
    }, 2000);
  },
  methods: {
    handleChange(event) {
      const val = event.target.value;
      this.myThrottle(val);
    },
    sendAjax(data) {
      console.log('发送时间：：', new Date().getTime());
      console.log('发送请求：', data);
    },
  }
}
<\/script>
\`\`\`


## 5-18

### Flutter状态管理

以下是常用的状态管理框架：

**1、state状态管理**

\`\`\`dart
 @override
  InheritedWidget inheritFromWidgetOfExactType(Type targetType, { Object aspect }) {
    /// 在共享 map _inheritedWidgets 中查找
    final InheritedElement ancestor = _inheritedWidgets == null ? null : _inheritedWidgets[targetType];
    if (ancestor != null) {
      /// 返回找到的 InheritedWidget ，同时添加当前 element 处理
      return inheritFromElement(ancestor, aspect: aspect);
    }
    _hadUnsatisfiedDependencies = true;
    return null;
  }

  @override
  InheritedWidget inheritFromElement(InheritedElement ancestor, { Object aspect }) {
    _dependencies ??= HashSet<InheritedElement>();
    _dependencies.add(ancestor);
   /// 就是将当前 element（this） 添加到  _dependents 里
   /// 也就是 InheritedElement 的 _dependents
   /// _dependents[dependent] = value;
    ancestor.updateDependencies(this, aspect);
    return ancestor.widget;
  }

  @override
  void notifyClients(InheritedWidget oldWidget) {
    for (Element dependent in _dependents.keys) {
      notifyDependent(oldWidget, dependent);
    }
  }
\`\`\`

**2、Provider状态管理**

优点： \`不复杂，好理解，代码量不大的情况下，可以方便组合和控制刷新颗粒度\` ， 其实一开始官方也有一个 \`flutter-provide\` ，不过后来无了， \`Provider\`成了它的替代品。

缺点：\`相对依赖Flutter 和 Widget；需要依赖Context\`

\`\`\`dart
class _ProviderPageState extends State<ProviderPage> {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(builder: (_) => ProviderModel()),
      ],
      child: Scaffold(
        appBar: AppBar(
          title: LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {
              var counter =  Provider.of<ProviderModel>(context);
              return new Text("Provider \${counter.count.toString()}");
            },
          )
        ),
        body: CountWidget(),
      ),
    );
  }
}

class CountWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<ProviderModel>(builder: (context, counter, _) {
      return new Column(
        children: <Widget>[
          new Expanded(child: new Center(child: new Text(counter.count.toString()))),
          new Center(
            child: new FlatButton(
                onPressed: () {
                  counter.add();
                },
                color: Colors.blue,
                child: new Text("+")),
          )
        ],
      );
    });
  }
}

class ProviderModel extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void add() {
    _count++;
    notifyListeners();
  }
}
\`\`\`

**3、Bloc状态管理**

BLoC算是 Flutter 早期比较知名的状态管理框架，它同样是存在 \`bloc\` 和 \`flutter_bloc\` 这样的依赖关系，**它是基于事件驱动来实现的状态管理**。

优点：\`代码更加解耦，这是事件驱动的特性,把状态更新和事件绑定，可以灵活得实现状态拦截，重试甚至撤回\`

缺点：\`需要写更多的代码，开发节奏会有点影响,接收代码的新维护人员，缺乏有效文档时容易陷入对着事件和业务蒙圈,项目后期事件容易混乱交织\`

\`\`\`dart
BlocSelector<BlocA, BlocAState, SelectedState>(
  selector: (state) {
    // return selected state based on the provided state.
  },
  builder: (context, state) {
    // return widget here based on the selected state.
  },
)

MultiBlocListener(
  listeners: [
    BlocListener<BlocA, BlocAState>(
      listener: (context, state) {},
    ),
    BlocListener<BlocB, BlocBState>(
      listener: (context, state) {},
    ),
    BlocListener<BlocC, BlocCState>(
      listener: (context, state) {},
    ),
  ],
  child: ChildA(),
)
\`\`\`

**4、flutter_redux状态管理**

优点：\`解耦,对 redux 开发友好,适合中大型项目里协作开发\`

缺点：\`影响开发速度，要写一堆模版,不是很贴合 Flutter 开发思路\`

**5、GetX状态管理**

优点：\`瑞士军刀式护航；对新人友好；可以减少很多代码\`

缺点：\`全家桶，做的太多对于一些使用者来说是致命缺点，需要解决的 Bug 也多；“魔法”使用较多，脱离 Flutter 原本轨迹；入侵性极强\`


## 5-17

### 了解Flutter

\`Flutter\`是由Google推出的开源UI软件开发工具包，用于构建原生、精美的移动、web和桌面应用。它使用Dart语言作为开发语言，并通过自己的渲染引擎绘制UI。

> **Flutter的优势：**
>
> - 提高开发效率
    >   - 同一份代码开发iOS和Android
>   - 用更少的代码做更多的事情
>   - 轻松迭代
      >     - 在应用程序运行时更改代码并重新加载（通过热重载）
>     - 修复崩溃并继续从应用程序停止的地方进行调试
> - 创建美观，高度定制的用户体验
    >   - 受益于使用Flutter框架提供的丰富的Material Design和Cupertino（iOS风格）的widget
>   - 实现定制、美观、品牌驱动的设计，而不受原生控件的限制


## 5-16

### 理解keep-alive

\`keep-alive\` 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：

- 一般结合路由和动态组件一起使用，用于缓存组件；
- 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
- 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。


## 5-15

### Vue 的父组件和子组件生命周期钩子函数执行顺序

Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：

- **加载渲染过程**

  父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

- **子组件更新过程**

  父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

- **父组件更新过程**

  父 beforeUpdate -> 父 updated

- **销毁过程**

  父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed


## 5-14

### Vue 生命周期

Vue 实例有一个完整的生命周期，也就是从\`开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载\`等一系列过程，我们称这是 Vue 的生命周期。

| **生命周期**  | **描述**                                                     |
| `,readingTime:!1,hidden:!0,outline:3,title:"每日一题-202405",date:"2024-05-31 16:59:56"}},{route:"/interview/question-by-day/2024/6.html",meta:{description:"",readingTime:!1,hidden:!0,outline:3,title:"每日一题-202406",date:"2024-06-23 22:24:23"}},{route:"/interview/question-by-day/2024/7.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/8.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/9.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2024-03-15 16:14:35"}},{route:"/interview/question-by-day/2024/",meta:{description:"每天至少一道面试题，范围不限，欢迎留言监督。",readingTime:!1,date:"2024-06-23 22:20:22",top:1,author:!1,title:"每日一题 - 2024"}},{route:"/training/linux/linux-lamp/first.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第一步编译安装httpd服务器",date:"2024-03-15 15:48:47"}},{route:"/training/linux/linux-lamp/",meta:{description:"",tags:["Linux","架构","运维","LAMP"],category:"Linux 运维",title:"LAMP编译安装三部曲",date:"2024-06-13 15:57:11"}},{route:"/training/linux/linux-lamp/second.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第二步编译安装mariadb数据库环境",date:"2024-03-15 15:48:47"}},{route:"/training/linux/linux-lamp/third.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第三步编译安装PHP",date:"2024-03-15 15:48:47"}},{route:"/training/linux/springboot-app-launch/",meta:{description:"本系列将从 Linux 企业级运维的角度出发，详细介绍 Linux 操作系统下 Nginx + JAVA + MYSQL + Redis + Minio 的安装部署，主要使用编译安装。",top:2,title:"SpringBoot 企业级部署上线流程",sticky:10,categories:["Linux 企业级运维"],outline:[2,3],date:"2024-04-15 00:00:00",tags:["运维","编译安装","Linux"],head:[["meta",{name:"keywords",content:"Linux企业级运维, 编译安装, MYSQL, Linux, Nginx, Minio, SpringBoot, Redis"}]],cover:"https://cdn.imufeng.cn/mblog/eace45811a4b7ff825f1495aab72a2b0.png"}},{route:"/training/linux/springboot-app-launch/mysql.html",meta:{description:"MySQL是一款流行的开源关系型数据库管理系统（RDBMS），适用于从小型网站到大型企业级应用的各种场景。它以GNU通用公共许可证发行，实现成本效益。MySQL具备高性能、高可靠性和强大的可伸缩性，支持多线程、跨平台操作，及多种存储引擎，适应不同数据处理需求。其优势在于开源免费、社区活跃、易于学习与使用，且能有效处理大量并发连接，提供丰富的SQL功能及安全性保障，成为Web开发和数据存储领域的首选方案。",title:"Mysql 数据库编译安装",categories:["Linux 企业级运维"],outline:[2,3],date:"2024-05-05 00:00:00",tags:["Mysql","编译安装","运维"],head:[["meta",{name:"keywords",content:"Linux企业级运维, 编译安装, MYSQL, Linux, Nginx, Minio, SpringBoot, Redis"}]],cover:"https://cdn.imufeng.cn/mblog/de6d10ef17dcb6f1d9902dc612375980.png"}},{route:"/training/linux/springboot-app-launch/nginx.html",meta:{description:"Nginx 作为当下最强大的正向/反向代理服务器，以及应用最广泛的轻量级Web服务器，能够适用于多种场景，本文将描述 Nginx WEB 服务器从源码编译安装的流程。",title:"Nginx 服务器编译安装",categories:["Linux 企业级运维"],outline:[2,3],date:"2024-04-20 00:00:00",tags:["Linux","Nginx","编译安装"],head:[["meta",{name:"keywords",content:"Linux企业级运维, 编译安装, MYSQL, Linux, Nginx, Minio, SpringBoot, Redis"}]],cover:"https://cdn.imufeng.cn/mblog/006125ea4376a1e135b8a601c2418948.jpg"}},{route:"/full-stack/java/design-patterns/creation-mode/factory-pattern.html",meta:{description:"设计模式（Design Patterns），是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。",categories:["Java 学习笔记"],tags:["Java","设计模式","工厂方法"],title:"",date:"2024-03-26 11:29:39"}},{route:"/full-stack/java/design-patterns/creation-mode/singleton.html",meta:{description:"在一个较为复杂的继承链中，祖先类更具有一般性，作为派生其他类的基类而不糊将其作为用来构造实例。",categories:["Java 学习笔记"],tags:["Java","设计模式","单例模式"],title:"",date:"2024-03-25 15:49:17"}}]),Pu={customSearchQuery:function(e){return e.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()},btnPlaceholder:"搜索",placeholder:"搜索文档",emptyText:"空空如也",heading:"共: {{searchResult}} 条结果"};function xu(t,e="yyyy-MM-dd hh:mm:ss"){t instanceof Date||(t=new Date(t));const n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${t.getFullYear()}`.substr(4-RegExp.$1.length)));for(const a in n)new RegExp(`(${a})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?n[a]:`00${n[a]}`.substr(`${n[a]}`.length)));return e}const Tu={},Iu={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Au=yn('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Vu=[Au];function Ou(t,e){return c(),f("svg",Iu,Vu)}const Eu=P(Tu,[["render",Ou]]),Nt=t=>(de("data-v-1a8843d0"),t=t(),he(),t),Bu={class:"blog-search","data-pagefind-ignore":"all"},ju=Nt(()=>h("span",null,[h("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[h("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),Nu={class:"search-dialog"},Fu={class:"link"},Hu={class:"title"},Du={key:0,class:"date"},Ru=["innerHTML"],zu={class:"command-palette-logo"},Wu={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Ju=Nt(()=>h("span",{class:"command-palette-Label"},"Search by",-1)),Uu=Nt(()=>h("ul",{class:"command-palette-commands"},[h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),h("span",{class:"command-palette-Label"},"to select")]),h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),h("span",{class:"command-palette-Label"},"to navigate")]),h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),h("span",{class:"command-palette-Label"},"to close")])],-1)),qu=S({__name:"Search",setup(t){ma(A=>({"3d7fec72":u.value}));const e=T([]),n=Pu,{localeIndex:a,site:o}=ut(),s=C(()=>{var A;return{...n,...((A=n==null?void 0:n.locales)==null?void 0:A[a.value])||{}}}),r=C(()=>{var A;return((A=s.value)==null?void 0:A.showDate)??!0}),i=Mu(),l=C(()=>i.width.value<760),u=C(()=>l.value?0:1),p=C(()=>{var A;return(A=s.value)!=null&&A.heading?s.value.heading.replace(/\{\{searchResult\}\}/,e.value.length):`Total: ${e.value.length} search results.`}),m=T("");ye(()=>{m.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const v=T(!1),y=T(""),w=_u({passive:!1,onEventFired(A){A.ctrlKey&&A.key==="k"&&A.type==="keydown"&&A.preventDefault()}}),g=w["Meta+K"],_=w["Ctrl+K"],x=w.Escape;q(g,A=>{A&&(v.value=!0)}),q(_,A=>{A&&(v.value=!0)}),q(x,A=>{A&&(v.value=!1)});function M(){if(!y.value){e.value=[];return}e.value=ct.value.filter(A=>`${A.meta.description}${A.meta.title}`.includes(y.value)).map(A=>{var U,te;return{...A,meta:{...A.meta,description:((te=(U=A.meta)==null?void 0:U.description)==null?void 0:te.replace(new RegExp(`(${y.value})`,"g"),"<mark>$1</mark>"))||""}}}),e.value.sort((A,U)=>+new Date(U.meta.date)-+new Date(A.meta.date))}const I=C(()=>{var A;return((A=s.value)==null?void 0:A.resultOptimization)??!0});q(()=>y.value,async()=>{var A,U,te;if(!((A=window==null?void 0:window.__pagefind__)!=null&&A.search))M();else{const ve=typeof s.value.customSearchQuery=="function"?s.value.customSearchQuery(y.value):y.value;await((te=(U=window==null?void 0:window.__pagefind__)==null?void 0:U.search)==null?void 0:te.call(U,ve).then(async Z=>{const ot=(await Promise.all(Z.results.map(Y=>Y.data()))).map(Y=>{var ue;return{route:Y.url.startsWith(o.value.base)?Y.url:Ye(Y.url),meta:{title:Y.meta.title,description:Y.excerpt,date:(ue=Y==null?void 0:Y.meta)==null?void 0:ue.date}}}).map(Y=>{const ue=ct.value.find(st=>st.route===Y.route);return{...Y,meta:{...Y.meta,...ue==null?void 0:ue.meta}}}).filter(Y=>!I.value||ct.value.some(ue=>ue.route===Y.route));e.value=ot.filter(s.value.filter??(()=>!0))}))}pe(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(ve=>{ve.setAttribute("aria-disabled","false")})})});function O(A){A.target===A.currentTarget&&(v.value=!1)}q(()=>v.value,A=>{var U;A?pe(()=>{var te;(te=document.querySelector("div[command-dialog-mask]"))==null||te.addEventListener("click",O)}):(U=document.querySelector("div[command-dialog-mask]"))==null||U.removeEventListener("click",O)});const H=T(999),J=T(0),F=C(()=>{const U=J.value%Math.ceil(e.value.length/H.value)*H.value;return e.value.slice(U,U+H.value)}),j=va(),D=je();function oe(A){v.value=!1,D.path!==A.value&&j.go(A.value)}const{lang:me}=ut(),se=C(()=>s.value.langReload??!0);return q(()=>me.value,()=>{se.value&&window.location.reload()}),(A,U)=>{var ve;const te=Se("ClientOnly");return c(),f("div",Bu,[h("div",{class:"nav-search-btn-wait",onClick:U[0]||(U[0]=Z=>v.value=!0)},[ju,Je(h("span",{class:"search-tip"},N(((ve=s.value)==null?void 0:ve.btnPlaceholder)||"Search"),513),[[Ue,!l.value]]),Je(h("span",{class:"metaKey"},N(m.value)+" K ",513),[[Ue,!l.value]])]),$(te,null,{default:k(()=>[$(d(Ie).Dialog,{visible:v.value,theme:"algolia"},ga({header:k(()=>{var Z;return[$(d(Ie).Input,{value:y.value,"onUpdate:value":U[1]||(U[1]=Ee=>y.value=Ee),placeholder:((Z=s.value)==null?void 0:Z.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:k(()=>[h("div",Nu,[$(d(Ie).List,null,{default:k(()=>[e.value.length?(c(),E(d(Ie).Group,{key:1,heading:p.value},{default:k(()=>[(c(!0),f(G,null,ee(F.value,Z=>(c(),E(d(Ie).Item,{key:Z.route,"data-value":Z.route,onSelect:oe},{default:k(()=>[h("div",Fu,[h("div",Hu,[h("span",null,N(Z.meta.title),1),r.value&&Z.meta.date?(c(),f("span",Du,N(d(xu)(Z.meta.date,"yyyy-MM-dd")),1)):L("",!0)]),h("div",{class:"des",innerHTML:Z.meta.description},null,8,Ru)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),E(d(Ie).Empty,{key:0},{default:k(()=>{var Z;return[ne(N(((Z=s.value)==null?void 0:Z.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[e.value.length?{name:"footer",fn:k(()=>[h("div",zu,[h("a",Wu,[Ju,$(Eu,{style:{width:"77px"}})])]),Uu]),key:"0"}:void 0]),1032,["visible"])]),_:1})])}}}),Gu=P(qu,[["__scopeId","data-v-1a8843d0"]]),Ku=S({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=R();return(n,a)=>d(e).socialLinks?(c(),E(nt,{key:0,class:"VPNavBarSocialLinks",links:d(e).socialLinks},null,8,["links"])):L("",!0)}}),Qu=P(Ku,[["__scopeId","data-v-d6cca3d3"]]),Zu=["href"],Yu=S({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=R(),{hasSidebar:a}=ke(),{currentLang:o}=Ne();return(s,r)=>(c(),f("div",{class:W(["VPNavBarTitle",{"has-sidebar":d(a)}])},[h("a",{class:"title",href:d(n).logoLink??d(xt)(d(o).link)},[b(s.$slots,"nav-bar-title-before",{},void 0,!0),d(n).logo?(c(),E(Ge,{key:0,class:"logo",image:d(n).logo},null,8,["image"])):L("",!0),d(n).siteTitle?(c(),f(G,{key:1},[ne(N(d(n).siteTitle),1)],64)):d(n).siteTitle===void 0?(c(),f(G,{key:2},[ne(N(d(e).title),1)],64)):L("",!0),b(s.$slots,"nav-bar-title-after",{},void 0,!0)],8,Zu)],2))}}),Xu=P(Yu,[["__scopeId","data-v-2fd870ac"]]),ed={},td={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},nd=h("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),ad=h("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),od=[nd,ad];function sd(t,e){return c(),f("svg",td,od)}const ea=P(ed,[["render",sd]]),rd={class:"items"},id={class:"title"},ld=S({__name:"VPNavBarTranslations",setup(t){const{theme:e}=R(),{localeLinks:n,currentLang:a}=Ne({correspondingLink:!0});return(o,s)=>d(n).length&&d(a).label?(c(),E(Vt,{key:0,class:"VPNavBarTranslations",icon:ea,label:d(e).langMenuLabel||"Change language"},{default:k(()=>[h("div",rd,[h("p",id,N(d(a).label),1),(c(!0),f(G,null,ee(d(n),r=>(c(),E(tt,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):L("",!0)}}),cd=P(ld,[["__scopeId","data-v-96d12612"]]),ud=t=>(de("data-v-97617b87"),t=t(),he(),t),dd={class:"wrapper"},hd={class:"container"},pd={class:"title"},fd={class:"content"},md={class:"content-body"},vd=ud(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),gd=S({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=bn(),{hasSidebar:n}=ke(),{hasLocalNav:a}=Pn(),{frontmatter:o}=R(),s=T({});return gn(()=>{s.value={"has-sidebar":n.value,"has-local-nav":a.value,top:o.value.layout==="home"&&e.value===0}}),(r,i)=>(c(),f("div",{class:W(["VPNavBar",s.value])},[h("div",dd,[h("div",hd,[h("div",pd,[$(Xu,null,{"nav-bar-title-before":k(()=>[b(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[b(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",fd,[h("div",md,[b(r.$slots,"nav-bar-content-before",{},void 0,!0),$(Gu,{class:"search"}),$(Ji,{class:"menu"}),$(cd,{class:"translations"}),$(jr,{class:"appearance"}),$(Qu,{class:"social-links"}),$(Ti,{class:"extra"}),b(r.$slots,"nav-bar-content-after",{},void 0,!0),$(Bi,{class:"hamburger",active:r.isScreenOpen,onClick:i[0]||(i[0]=l=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),vd],2))}}),_d=P(gd,[["__scopeId","data-v-97617b87"]]),bd={key:0,class:"VPNavScreenAppearance"},yd={class:"text"},kd=S({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=R();return(a,o)=>d(e).appearance&&d(e).appearance!=="force-dark"?(c(),f("div",bd,[h("p",yd,N(d(n).darkModeSwitchLabel||"Appearance"),1),$(It)])):L("",!0)}}),wd=P(kd,[["__scopeId","data-v-a9bed6d3"]]),$d=S({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=et("close-screen");return(n,a)=>(c(),E(ce,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:d(e)},{default:k(()=>[ne(N(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Sd=P($d,[["__scopeId","data-v-da15c43f"]]),Cd={},Ld={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Md=h("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),Pd=[Md];function xd(t,e){return c(),f("svg",Ld,Pd)}const Td=P(Cd,[["render",xd]]),Id=S({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=et("close-screen");return(n,a)=>(c(),E(ce,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:d(e)},{default:k(()=>[ne(N(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),ta=P(Id,[["__scopeId","data-v-b5cfc49b"]]),Ad={class:"VPNavScreenMenuGroupSection"},Vd={key:0,class:"title"},Od=S({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",Ad,[e.text?(c(),f("p",Vd,N(e.text),1)):L("",!0),(c(!0),f(G,null,ee(e.items,a=>(c(),E(ta,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Ed=P(Od,[["__scopeId","data-v-b6d8c198"]]),Bd=["aria-controls","aria-expanded"],jd=["innerHTML"],Nd=["id"],Fd={key:1,class:"group"},Hd=S({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=T(!1),a=C(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(s,r)=>(c(),f("div",{class:W(["VPNavScreenMenuGroup",{open:n.value}])},[h("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:o},[h("span",{class:"button-text",innerHTML:s.text},null,8,jd),$(Td,{class:"button-icon"})],8,Bd),h("div",{id:a.value,class:"items"},[(c(!0),f(G,null,ee(s.items,i=>(c(),f(G,{key:i.text},["link"in i?(c(),f("div",{key:i.text,class:"item"},[$(ta,{item:i},null,8,["item"])])):(c(),f("div",Fd,[$(Ed,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Nd)],2))}}),Dd=P(Hd,[["__scopeId","data-v-85221601"]]),Rd={key:0,class:"VPNavScreenMenu"},zd=S({__name:"VPNavScreenMenu",setup(t){const{theme:e}=R();return(n,a)=>d(e).nav?(c(),f("nav",Rd,[(c(!0),f(G,null,ee(d(e).nav,o=>(c(),f(G,{key:o.text},["link"in o?(c(),E(Sd,{key:0,item:o},null,8,["item"])):(c(),E(Dd,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):L("",!0)}}),Wd=S({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=R();return(n,a)=>d(e).socialLinks?(c(),E(nt,{key:0,class:"VPNavScreenSocialLinks",links:d(e).socialLinks},null,8,["links"])):L("",!0)}}),Jd={class:"list"},Ud=S({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Ne({correspondingLink:!0}),a=T(!1);function o(){a.value=!a.value}return(s,r)=>d(e).length&&d(n).label?(c(),f("div",{key:0,class:W(["VPNavScreenTranslations",{open:a.value}])},[h("button",{class:"title",onClick:o},[$(ea,{class:"icon lang"}),ne(" "+N(d(n).label)+" ",1),$(An,{class:"icon chevron"})]),h("ul",Jd,[(c(!0),f(G,null,ee(d(e),i=>(c(),f("li",{key:i.link,class:"item"},[$(ce,{class:"link",href:i.link},{default:k(()=>[ne(N(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):L("",!0)}}),qd=P(Ud,[["__scopeId","data-v-3371983f"]]),Gd={class:"container"},Kd=S({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=T(null),n=$n(Ae?document.body:null);return(a,o)=>(c(),E(Ze,{name:"fade",onEnter:o[0]||(o[0]=s=>n.value=!0),onAfterLeave:o[1]||(o[1]=s=>n.value=!1)},{default:k(()=>[a.open?(c(),f("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",Gd,[b(a.$slots,"nav-screen-content-before",{},void 0,!0),$(zd,{class:"menu"}),$(qd,{class:"translations"}),$(wd,{class:"appearance"}),$(Wd,{class:"social-links"}),b(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):L("",!0)]),_:3}))}}),Qd=P(Kd,[["__scopeId","data-v-ec5eeca3"]]),Zd={key:0,class:"VPNav"},Yd=S({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:a}=mr(),{frontmatter:o}=R(),s=C(()=>o.value.navbar!==!1);return Mt("close-screen",n),$e(()=>{Ae&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(r,i)=>s.value?(c(),f("header",Zd,[$(_d,{"is-screen-open":d(e),onToggleScreen:d(a)},{"nav-bar-title-before":k(()=>[b(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[b(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[b(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[b(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),$(Qd,{open:d(e)},{"nav-screen-content-before":k(()=>[b(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[b(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):L("",!0)}}),Xd=P(Yd,[["__scopeId","data-v-5ed1a78c"]]),e1=t=>(de("data-v-dcf8eb03"),t=t(),he(),t),t1=["role","tabindex"],n1=e1(()=>h("div",{class:"indicator"},null,-1)),a1={key:1,class:"items"},o1=S({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:a,isLink:o,isActiveLink:s,hasActiveLink:r,hasChildren:i,toggle:l}=Da(C(()=>e.item)),u=C(()=>i.value?"section":"div"),p=C(()=>o.value?"a":"div"),m=C(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),v=C(()=>o.value?void 0:"button"),y=C(()=>[[`level-${e.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":o.value},{"is-active":s.value},{"has-active":r.value}]);function w(_){"key"in _&&_.key!=="Enter"||!e.item.link&&l()}function g(){e.item.link&&l()}return(_,x)=>{const M=Se("VPSidebarItem",!0);return c(),E(Me(u.value),{class:W(["VPSidebarItem",y.value])},{default:k(()=>[_.item.text?(c(),f("div",Re({key:0,class:"item",role:v.value},_a(_.item.items?{click:w,keydown:w}:{},!0),{tabindex:_.item.items&&0}),[n1,_.item.link?(c(),E(ce,{key:0,tag:p.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:k(()=>[(c(),E(Me(m.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),E(Me(m.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null?(c(),f("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:g,onKeydown:ba(g,["enter"]),tabindex:"0"},[$(xn,{class:"caret-icon"})],32)):L("",!0)],16,t1)):L("",!0),_.item.items&&_.item.items.length?(c(),f("div",a1,[_.depth<5?(c(!0),f(G,{key:0},ee(_.item.items,I=>(c(),E(M,{key:I.text,item:I,depth:_.depth+1},null,8,["item","depth"]))),128)):L("",!0)])):L("",!0)]),_:1},8,["class"])}}}),s1=P(o1,[["__scopeId","data-v-dcf8eb03"]]),na=t=>(de("data-v-cb0576bc"),t=t(),he(),t),r1=na(()=>h("div",{class:"curtain"},null,-1)),i1={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},l1=na(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),c1=S({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=ke(),a=t,o=T(null),s=$n(Ae?document.body:null);return q([a,o],()=>{var r;a.open?(s.value=!0,(r=o.value)==null||r.focus()):s.value=!1},{immediate:!0,flush:"post"}),(r,i)=>d(n)?(c(),f("aside",{key:0,class:W(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:o,onClick:i[0]||(i[0]=ya(()=>{},["stop"]))},[r1,h("nav",i1,[l1,b(r.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),f(G,null,ee(d(e),l=>(c(),f("div",{key:l.text,class:"group"},[$(s1,{item:l,depth:0},null,8,["item"])]))),128)),b(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):L("",!0)}}),u1=P(c1,[["__scopeId","data-v-cb0576bc"]]),d1=S({__name:"VPSkipLink",setup(t){const e=je(),n=T();q(()=>e.path,()=>n.value.focus());function a({target:o}){const s=document.getElementById(decodeURIComponent(o.hash).slice(1));if(s){const r=()=>{s.removeAttribute("tabindex"),s.removeEventListener("blur",r)};s.setAttribute("tabindex","-1"),s.addEventListener("blur",r),s.focus(),window.scrollTo(0,0)}}return(o,s)=>(c(),f(G,null,[h("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a}," Skip to content ")],64))}}),h1=P(d1,[["__scopeId","data-v-c45b04f1"]]),p1=S({__name:"Layout",setup(t){const{isOpen:e,open:n,close:a}=ke(),o=je();q(()=>o.path,a),Ha(e,a);const{frontmatter:s}=R(),r=ka(),i=C(()=>!!r["home-hero-image"]);return Mt("hero-image-slot-exists",i),(l,u)=>{const p=Se("Content");return d(s).layout!==!1?(c(),f("div",{key:0,class:W(["Layout",d(s).pageClass])},[b(l.$slots,"layout-top",{},void 0,!0),$(h1),$(Ca,{class:"backdrop",show:d(e),onClick:d(a)},null,8,["show","onClick"]),$(Xd,null,{"nav-bar-title-before":k(()=>[b(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[b(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[b(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[b(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[b(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[b(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),$(fr,{open:d(e),onOpenMenu:d(n)},null,8,["open","onOpenMenu"]),$(u1,{open:d(e)},{"sidebar-nav-before":k(()=>[b(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[b(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),$(Hs,{"data-pagefind-body":""},{"page-top":k(()=>[b(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[b(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[b(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[b(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[b(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[b(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[b(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[b(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[b(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[b(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[b(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[b(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[b(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[b(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[b(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[b(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[b(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[b(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[b(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[b(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),$(Js),b(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),E(p,{key:1}))}}}),f1=P(p1,[["__scopeId","data-v-1c99b162"]]),m1={},v1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},g1=h("path",{d:"M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"},null,-1),_1=[g1];function b1(t,e){return c(),f("svg",v1,_1)}const y1=P(m1,[["render",b1]]),k1={class:"profile"},w1={class:"avatar"},$1=["src","alt"],S1={class:"data"},C1={class:"name"},L1={key:0,class:"affiliation"},M1={key:0,class:"title"},P1={key:1,class:"at"},x1=["innerHTML"],T1={key:2,class:"links"},I1={key:0,class:"sp"},A1=S({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(t){return(e,n)=>(c(),f("article",{class:W(["VPTeamMembersItem",[e.size]])},[h("div",k1,[h("figure",w1,[h("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,$1)]),h("div",S1,[h("h1",C1,N(e.member.name),1),e.member.title||e.member.org?(c(),f("p",L1,[e.member.title?(c(),f("span",M1,N(e.member.title),1)):L("",!0),e.member.title&&e.member.org?(c(),f("span",P1," @ ")):L("",!0),e.member.org?(c(),E(ce,{key:2,class:W(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:k(()=>[ne(N(e.member.org),1)]),_:1},8,["class","href"])):L("",!0)])):L("",!0),e.member.desc?(c(),f("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,x1)):L("",!0),e.member.links?(c(),f("div",T1,[$(nt,{links:e.member.links},null,8,["links"])])):L("",!0)])]),e.member.sponsor?(c(),f("div",I1,[$(ce,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:k(()=>[$(y1,{class:"sp-icon"}),ne(" "+N(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):L("",!0)],2))}}),V1=P(A1,[["__scopeId","data-v-1f600331"]]),O1={class:"container"},E1=S({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(t){const e=t,n=C(()=>[e.size,`count-${e.members.length}`]);return(a,o)=>(c(),f("div",{class:W(["VPTeamMembers",n.value])},[h("div",O1,[(c(!0),f(G,null,ee(a.members,s=>(c(),f("div",{key:s.name,class:"item"},[$(V1,{size:a.size,member:s},null,8,["size","member"])]))),128))])],2))}}),q1=P(E1,[["__scopeId","data-v-041978c1"]]),G1={Layout:f1,enhanceApp:({app:t})=>{t.component("Badge",wa)}};export{q1 as V,X as a,vu as b,le as c,Ec as d,J1 as e,N1 as f,D1 as g,H1 as h,Be as i,U1 as j,j1 as k,Mu as l,Oc as m,R1 as n,F1 as o,W1 as p,z1 as q,G1 as r,no as s,Te as t,su as u};
