import{d as P,o as c,c as p,r as g,a as ee,t as B,n as z,_ as L,b as O,w as k,e as S,T as Je,u as lt,i as ta,f as Ke,g as C,h as M,j as fe,k as d,l as u,p as ie,m as le,q as we,s as Ve,v as ct,x as J,y as ge,z as $t,A as pn,B as na,C as Ce,F as U,D as te,E as Qe,G as Ae,H as w,I as vn,J as $e,K as Ee,L as ze,M as Ze,N as aa,O as ce,P as fn,Q as _n,R as wt,S as Se,U as St,V as Pt,W as sa,X as mn,Y as gn,Z as oa,$ as Ue,a0 as yn,a1 as bn,a2 as ra,a3 as ia,a4 as la,a5 as ca,a6 as kn,a7 as ua,a8 as da,a9 as ha,aa as pa}from"./framework.22684875.js";const va=P({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),p("span",{class:z(["VPBadge",e.type])},[g(e.$slots,"default",{},()=>[ee(B(e.text),1)],!0)],2))}});const fa=L(va,[["__scopeId","data-v-4242cd26"]]),_a={key:0,class:"VPBackdrop"},ma=P({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),O(Je,{name:"fade"},{default:k(()=>[e.show?(c(),p("div",_a)):S("",!0)]),_:1}))}});const ga=L(ma,[["__scopeId","data-v-1289c922"]]),D=lt;function ya(t,e){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(t,e):(t(),(a=!0)&&setTimeout(()=>a=!1,e))}}function ut(t){return/^\//.test(t)?t:`/${t}`}function Te(t){if(ta(t))return t;const{site:e}=D(),{pathname:n,search:a,hash:s}=new URL(t,"http://a.com"),o=n.endsWith("/")||n.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,e.value.cleanUrls?"":".html")}${a}${s}`);return Ke(o)}function Ne({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:a,page:s,theme:o}=D(),r=C(()=>{var l,h;return{label:(l=n.value.locales[a.value])==null?void 0:l.label,link:((h=n.value.locales[a.value])==null?void 0:h.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:C(()=>Object.entries(n.value.locales).flatMap(([l,h])=>t&&r.value.label===h.label?[]:{text:h.label,link:ba(h.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,s.value.relativePath.slice(r.value.link.length-1),!n.value.cleanUrls)})),currentLang:r}}function ba(t,e,n,a){return e?t.replace(/\/$/,"")+ut(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):t}const ka=t=>(ie("data-v-6593ca53"),t=t(),le(),t),$a={class:"NotFound"},wa={class:"code"},Sa={class:"title"},Pa=ka(()=>d("div",{class:"divider"},null,-1)),Ca={class:"quote"},La={class:"action"},Ma=["href","aria-label"],Va=P({__name:"NotFound",setup(t){const{site:e,theme:n}=D(),{localeLinks:a}=Ne({removeCurrent:!1}),s=M("/");return fe(()=>{var r;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");a.value.length&&(s.value=((r=a.value.find(({link:i})=>i.startsWith(o)))==null?void 0:r.link)||a.value[0].link)}),(o,r)=>{var i,l,h,v,y;return c(),p("div",$a,[d("p",wa,B(((i=u(n).notFound)==null?void 0:i.code)??"404"),1),d("h1",Sa,B(((l=u(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Pa,d("blockquote",Ca,B(((h=u(n).notFound)==null?void 0:h.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),d("div",La,[d("a",{class:"link",href:u(Ke)(s.value),"aria-label":((v=u(n).notFound)==null?void 0:v.linkLabel)??"go to home"},B(((y=u(n).notFound)==null?void 0:y.linkText)??"Take me home"),9,Ma)])])}}});const Ia=L(Va,[["__scopeId","data-v-6593ca53"]]);function $n(t,e){if(Array.isArray(t))return je(t);if(t==null)return[];e=ut(e);const n=Object.keys(t).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(ut(s))),a=n?t[n]:[];return Array.isArray(a)?je(a):je(a.items,a.base)}function xa(t){const e=[];let n=0;for(const a in t){const s=t[a];if(s.items){n=e.push(s);continue}e[n]||e.push({items:[]}),e[n].items.push(s)}return e}function Aa(t){const e=[];function n(a){for(const s of a)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(t),e}function dt(t,e){return Array.isArray(e)?e.some(n=>dt(t,n)):we(t,e.link)?!0:e.items?dt(t,e.items):!1}function je(t,e){return[...t].map(n=>{const a={...n},s=a.base||e;return s&&a.link&&(a.link=s+a.link),a.items&&(a.items=je(a.items,s)),a})}function _e(){const{frontmatter:t,page:e,theme:n}=D(),a=ct("(min-width: 960px)"),s=M(!1),o=C(()=>{const _=n.value.sidebar,m=e.value.relativePath;return _?$n(_,m):[]}),r=M(o.value);J(o,(_,m)=>{JSON.stringify(_)!==JSON.stringify(m)&&(r.value=o.value)});const i=C(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=C(()=>h?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),h=C(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),v=C(()=>i.value&&a.value),y=C(()=>i.value?xa(r.value):[]);function f(){s.value=!0}function b(){s.value=!1}function $(){s.value?b():f()}return{isOpen:s,sidebar:r,sidebarGroups:y,hasSidebar:i,hasAside:h,leftAside:l,isSidebarEnabled:v,open:f,close:b,toggle:$}}function Ta(t,e){let n;ge(()=>{n=t.value?document.activeElement:void 0}),fe(()=>{window.addEventListener("keyup",a)}),$t(()=>{window.removeEventListener("keyup",a)});function a(s){s.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}const wn=M(Ve?location.hash:"");Ve&&window.addEventListener("hashchange",()=>{wn.value=location.hash});function Oa(t){const{page:e}=D(),n=M(!1),a=C(()=>t.value.collapsed!=null),s=C(()=>!!t.value.link),o=M(!1),r=()=>{o.value=we(e.value.relativePath,t.value.link)};J([e,t,wn],r),fe(r);const i=C(()=>o.value?!0:t.value.items?dt(e.value.relativePath,t.value.items):!1),l=C(()=>!!(t.value.items&&t.value.items.length));ge(()=>{n.value=!!(a.value&&t.value.collapsed)}),pn(()=>{(o.value||i.value)&&(n.value=!1)});function h(){a.value&&(n.value=!n.value)}return{collapsed:n,collapsible:a,isLink:s,isActiveLink:o,hasActiveLink:i,hasChildren:l,toggle:h}}function Ea(){const{hasSidebar:t}=_e(),e=ct("(min-width: 960px)"),n=ct("(min-width: 1280px)");return{isAsideEnabled:C(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Na=71;function Ct(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Lt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{title:Ba(n),link:"#"+n.id,level:a}});return Ha(e,t)}function Ba(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Ha(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[a,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=a&&r.level<=s);const o=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)o.push(i);else{for(let l=r-1;l>=0;l--){const h=t[l];if(h.level<i.level){(h.children||(h.children=[])).push(i);continue e}}o.push(i)}}return o}function Da(t,e){const{isAsideEnabled:n}=Ea(),a=ya(o,100);let s=null;fe(()=>{requestAnimationFrame(o),window.addEventListener("scroll",a)}),na(()=>{r(location.hash)}),$t(()=>{window.removeEventListener("scroll",a)});function o(){if(!n.value)return;const i=[].slice.call(t.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(b=>i.some($=>$.hash===b.hash&&b.offsetParent!==null)),h=window.scrollY,v=window.innerHeight,y=document.body.offsetHeight,f=Math.abs(h+v-y)<1;if(l.length&&f){r(l[l.length-1].hash);return}for(let b=0;b<l.length;b++){const $=l[b],_=l[b+1],[m,A]=Fa(b,$,_);if(m){r(A);return}}}function r(i){s&&s.classList.remove("active"),i==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+33+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Nt(t){return t.parentElement.offsetTop-Na}function Fa(t,e,n){const a=window.scrollY;return t===0&&a===0?[!0,null]:a<Nt(e)?[!1,null]:!n||a<Nt(n)?[!0,e.hash]:[!1,null]}const za=["href","title"],ja=P({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const a=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(a));s==null||s.focus({preventScroll:!0})}return(n,a)=>{const s=Ce("VPDocOutlineItem",!0);return c(),p("ul",{class:z(n.root?"root":"nested")},[(c(!0),p(U,null,te(n.headers,({children:o,link:r,title:i})=>(c(),p("li",null,[d("a",{class:"outline-link",href:r,onClick:e,title:i},B(i),9,za),o!=null&&o.length?(c(),O(s,{key:0,headers:o},null,8,["headers"])):S("",!0)]))),256))],2)}}});const Mt=L(ja,[["__scopeId","data-v-8b50fcf0"]]),Ra=t=>(ie("data-v-37fbe0a0"),t=t(),le(),t),Ua={class:"content"},Ga={class:"outline-title",role:"heading","aria-level":"2"},qa={"aria-labelledby":"doc-outline-aria-label"},Wa=Ra(()=>d("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Ja=P({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=D(),a=Qe([]);Ae(()=>{a.value=Lt(e.value.outline??n.value.outline)});const s=M(),o=M();return Da(s,o),(r,i)=>(c(),p("div",{class:z(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[d("div",Ua,[d("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),d("div",Ga,B(u(Ct)(u(n))),1),d("nav",qa,[Wa,w(Mt,{headers:a.value,root:!0},null,8,["headers"])])])],2))}});const Ka=L(Ja,[["__scopeId","data-v-37fbe0a0"]]),Qa={class:"VPDocAsideCarbonAds"},Za=P({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,a)=>(c(),p("div",Qa,[w(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Ya=t=>(ie("data-v-dafc0fcb"),t=t(),le(),t),Xa={class:"VPDocAside"},es=Ya(()=>d("div",{class:"spacer"},null,-1)),ts=P({__name:"VPDocAside",setup(t){const{theme:e}=D();return(n,a)=>(c(),p("div",Xa,[g(n.$slots,"aside-top",{},void 0,!0),g(n.$slots,"aside-outline-before",{},void 0,!0),w(Ka),g(n.$slots,"aside-outline-after",{},void 0,!0),es,g(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),O(Za,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):S("",!0),g(n.$slots,"aside-ads-after",{},void 0,!0),g(n.$slots,"aside-bottom",{},void 0,!0)]))}});const ns=L(ts,[["__scopeId","data-v-dafc0fcb"]]);function as(){const{theme:t,page:e}=D();return C(()=>{const{text:n="Edit this page",pattern:a=""}=t.value.editLink||{};let s;return typeof a=="function"?s=a(e.value):s=a.replace(/:path/g,e.value.filePath),{url:s,text:n}})}function ss(){const{page:t,theme:e,frontmatter:n}=D();return C(()=>{var l,h,v,y,f,b,$,_;const a=$n(e.value.sidebar,t.value.relativePath),s=Aa(a),o=s.findIndex(m=>we(t.value.relativePath,m.link)),r=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((h=e.value.docFooter)==null?void 0:h.next)===!1&&!n.value.next||n.value.next===!1;return{prev:r?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((v=s[o-1])==null?void 0:v.docFooterText)??((y=s[o-1])==null?void 0:y.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((f=s[o-1])==null?void 0:f.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((b=s[o+1])==null?void 0:b.docFooterText)??(($=s[o+1])==null?void 0:$.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((_=s[o+1])==null?void 0:_.link)}}})}const os={},rs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},is=d("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),ls=d("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),cs=[is,ls];function us(t,e){return c(),p("svg",rs,cs)}const ds=L(os,[["render",us]]),he=P({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=C(()=>e.tag??(e.href?"a":"span")),a=C(()=>e.href&&vn.test(e.href));return(s,o)=>(c(),O($e(n.value),{class:z(["VPLink",{link:s.href,"vp-external-link-icon":a.value,"no-icon":s.noIcon}]),href:s.href?u(Te)(s.href):void 0,target:s.target??(a.value?"_blank":void 0),rel:s.rel??(a.value?"noreferrer":void 0)},{default:k(()=>[g(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),hs={class:"VPLastUpdated"},ps=["datetime"],vs=P({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:a,lang:s}=D(),o=C(()=>new Date(a.value.lastUpdated??n.value.lastUpdated)),r=C(()=>o.value.toISOString()),i=M("");return fe(()=>{ge(()=>{var l,h,v;i.value=new Intl.DateTimeFormat((h=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&h.forceLocale?s.value:void 0,((v=e.value.lastUpdated)==null?void 0:v.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,h)=>{var v;return c(),p("p",hs,[ee(B(((v=u(e).lastUpdated)==null?void 0:v.text)||u(e).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:r.value},B(i.value),9,ps)])}}});const fs=L(vs,[["__scopeId","data-v-3ece6dc0"]]),_s={key:0,class:"VPDocFooter"},ms={key:0,class:"edit-info"},gs={key:0,class:"edit-link"},ys={key:1,class:"last-updated"},bs={key:1,class:"prev-next"},ks={class:"pager"},$s=["href"],ws=["innerHTML"],Ss=["innerHTML"],Ps={class:"pager"},Cs=["href"],Ls=["innerHTML"],Ms=["innerHTML"],Vs=P({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:a}=D(),s=as(),o=ss(),r=C(()=>e.value.editLink&&a.value.editLink!==!1),i=C(()=>n.value.lastUpdated&&a.value.lastUpdated!==!1),l=C(()=>r.value||i.value||o.value.prev||o.value.next);return(h,v)=>{var y,f,b,$,_,m;return l.value?(c(),p("footer",_s,[g(h.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),p("div",ms,[r.value?(c(),p("div",gs,[w(he,{class:"edit-link-button",href:u(s).url,"no-icon":!0},{default:k(()=>[w(ds,{class:"edit-link-icon","aria-label":"edit icon"}),ee(" "+B(u(s).text),1)]),_:1},8,["href"])])):S("",!0),i.value?(c(),p("div",ys,[w(fs)])):S("",!0)])):S("",!0),(y=u(o).prev)!=null&&y.link||(f=u(o).next)!=null&&f.link?(c(),p("nav",bs,[d("div",ks,[(b=u(o).prev)!=null&&b.link?(c(),p("a",{key:0,class:"pager-link prev",href:u(Te)(u(o).prev.link)},[d("span",{class:"desc",innerHTML:(($=u(e).docFooter)==null?void 0:$.prev)||"Previous page"},null,8,ws),d("span",{class:"title",innerHTML:u(o).prev.text},null,8,Ss)],8,$s)):S("",!0)]),d("div",Ps,[(_=u(o).next)!=null&&_.link?(c(),p("a",{key:0,class:"pager-link next",href:u(Te)(u(o).next.link)},[d("span",{class:"desc",innerHTML:((m=u(e).docFooter)==null?void 0:m.next)||"Next page"},null,8,Ls),d("span",{class:"title",innerHTML:u(o).next.text},null,8,Ms)],8,Cs)):S("",!0)])])):S("",!0)])):S("",!0)}}});const Is=L(Vs,[["__scopeId","data-v-6e42904c"]]),xs={},As={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ts=d("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Os=[Ts];function Es(t,e){return c(),p("svg",As,Os)}const Vt=L(xs,[["render",Es]]),Ns={key:0,class:"VPDocOutlineDropdown"},Bs={key:0,class:"items"},Hs=P({__name:"VPDocOutlineDropdown",setup(t){const{frontmatter:e,theme:n}=D(),a=M(!1);Ae(()=>{a.value=!1});const s=Qe([]);return Ae(()=>{s.value=Lt(e.value.outline??n.value.outline)}),(o,r)=>s.value.length>0?(c(),p("div",Ns,[d("button",{onClick:r[0]||(r[0]=i=>a.value=!a.value),class:z({open:a.value})},[ee(B(u(Ct)(u(n)))+" ",1),w(Vt,{class:"icon"})],2),a.value?(c(),p("div",Bs,[w(Mt,{headers:s.value},null,8,["headers"])])):S("",!0)])):S("",!0)}});const Ds=L(Hs,[["__scopeId","data-v-04cb6866"]]),Fs=t=>(ie("data-v-045d80ca"),t=t(),le(),t),zs={class:"container"},js=Fs(()=>d("div",{class:"aside-curtain"},null,-1)),Rs={class:"aside-container"},Us={class:"aside-content"},Gs={class:"content"},qs={class:"content-container"},Ws={class:"main"},Js=P({__name:"VPDoc",setup(t){const{theme:e}=D(),n=Ee(),{hasSidebar:a,hasAside:s,leftAside:o}=_e(),r=C(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const h=Ce("Content");return c(),p("div",{class:z(["VPDoc",{"has-sidebar":u(a),"has-aside":u(s)}])},[g(i.$slots,"doc-top",{},void 0,!0),d("div",zs,[u(s)?(c(),p("div",{key:0,class:z(["aside",{"left-aside":u(o)}])},[js,d("div",Rs,[d("div",Us,[w(ns,null,{"aside-top":k(()=>[g(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[g(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[g(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[g(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[g(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[g(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):S("",!0),d("div",Gs,[d("div",qs,[g(i.$slots,"doc-before",{},void 0,!0),w(Ds),d("main",Ws,[w(h,{class:z(["vp-doc",[r.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),w(Is,null,{"doc-footer-before":k(()=>[g(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),g(i.$slots,"doc-after",{},void 0,!0)])])]),g(i.$slots,"doc-bottom",{},void 0,!0)],2)}}});const Ks=L(Js,[["__scopeId","data-v-045d80ca"]]),Qs=P({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(t){const e=t,n=C(()=>e.href&&vn.test(e.href)),a=C(()=>e.tag||e.href?"a":"button");return(s,o)=>(c(),O($e(a.value),{class:z(["VPButton",[s.size,s.theme]]),href:s.href?u(Te)(s.href):void 0,target:n.value?"_blank":void 0,rel:n.value?"noreferrer":void 0},{default:k(()=>[ee(B(s.text),1)]),_:1},8,["class","href","target","rel"]))}});const Zs=L(Qs,[["__scopeId","data-v-3df422c3"]]),Ys=["src","alt"],Xs=P({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const a=Ce("VPImage",!0);return e.image?(c(),p(U,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),p("img",ze({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(Ke)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Ys)):(c(),p(U,{key:1},[w(a,ze({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),w(a,ze({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):S("",!0)}}});const Ge=L(Xs,[["__scopeId","data-v-7df3dd10"]]),eo=t=>(ie("data-v-aac2f332"),t=t(),le(),t),to={class:"container"},no={class:"main"},ao={key:0,class:"name"},so=["innerHTML"],oo=["innerHTML"],ro=["innerHTML"],io={key:0,class:"actions"},lo={key:0,class:"image"},co={class:"image-container"},uo=eo(()=>d("div",{class:"image-bg"},null,-1)),ho=P({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Ze("hero-image-slot-exists");return(n,a)=>(c(),p("div",{class:z(["VPHero",{"has-image":n.image||u(e)}])},[d("div",to,[d("div",no,[g(n.$slots,"home-hero-info",{},()=>[n.name?(c(),p("h1",ao,[d("span",{innerHTML:n.name,class:"clip"},null,8,so)])):S("",!0),n.text?(c(),p("p",{key:1,innerHTML:n.text,class:"text"},null,8,oo)):S("",!0),n.tagline?(c(),p("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,ro)):S("",!0)],!0),n.actions?(c(),p("div",io,[(c(!0),p(U,null,te(n.actions,s=>(c(),p("div",{key:s.link,class:"action"},[w(Zs,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link},null,8,["theme","text","href"])]))),128))])):S("",!0)]),n.image||u(e)?(c(),p("div",lo,[d("div",co,[uo,g(n.$slots,"home-hero-image",{},()=>[n.image?(c(),O(Ge,{key:0,class:"image-src",image:n.image},null,8,["image"])):S("",!0)],!0)])])):S("",!0)])],2))}});const po=L(ho,[["__scopeId","data-v-aac2f332"]]),vo=P({__name:"VPHomeHero",setup(t){const{frontmatter:e}=D();return(n,a)=>u(e).hero?(c(),O(po,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info":k(()=>[g(n.$slots,"home-hero-info")]),"home-hero-image":k(()=>[g(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):S("",!0)}}),fo={},_o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},mo=d("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),go=[mo];function yo(t,e){return c(),p("svg",_o,go)}const bo=L(fo,[["render",yo]]),ko={class:"box"},$o={key:0,class:"icon"},wo=["innerHTML"],So=["innerHTML"],Po=["innerHTML"],Co={key:4,class:"link-text"},Lo={class:"link-text-value"},Mo=P({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),O(he,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:k(()=>[d("article",ko,[typeof e.icon=="object"&&e.icon.wrap?(c(),p("div",$o,[w(Ge,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),O(Ge,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,wo)):S("",!0),d("h2",{class:"title",innerHTML:e.title},null,8,So),e.details?(c(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,Po)):S("",!0),e.linkText?(c(),p("div",Co,[d("p",Lo,[ee(B(e.linkText)+" ",1),w(bo,{class:"link-text-icon"})])])):S("",!0)])]),_:1},8,["href","rel","target","tag"]))}});const Vo=L(Mo,[["__scopeId","data-v-f3072c92"]]),Io={key:0,class:"VPFeatures"},xo={class:"container"},Ao={class:"items"},To=P({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=C(()=>{const a=e.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,s)=>a.features?(c(),p("div",Io,[d("div",xo,[d("div",Ao,[(c(!0),p(U,null,te(a.features,o=>(c(),p("div",{key:o.title,class:z(["item",[n.value]])},[w(Vo,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):S("",!0)}});const Oo=L(To,[["__scopeId","data-v-45615492"]]),Eo=P({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=D();return(n,a)=>u(e).features?(c(),O(Oo,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):S("",!0)}}),No={class:"VPHome"},Bo=P({__name:"VPHome",setup(t){return(e,n)=>{const a=Ce("Content");return c(),p("div",No,[g(e.$slots,"home-hero-before",{},void 0,!0),w(vo,null,{"home-hero-info":k(()=>[g(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[g(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),g(e.$slots,"home-hero-after",{},void 0,!0),g(e.$slots,"home-features-before",{},void 0,!0),w(Eo),g(e.$slots,"home-features-after",{},void 0,!0),w(a)])}}});const Ho=L(Bo,[["__scopeId","data-v-24263799"]]),Do={},Fo={class:"VPPage"};function zo(t,e){const n=Ce("Content");return c(),p("div",Fo,[g(t.$slots,"page-top"),w(n),g(t.$slots,"page-bottom")])}const jo=L(Do,[["render",zo]]),Ro=P({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=D(),{hasSidebar:a}=_e();return(s,o)=>(c(),p("div",{class:z(["VPContent",{"has-sidebar":u(a),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?g(s.$slots,"not-found",{key:0},()=>[w(Ia)],!0):u(n).layout==="page"?(c(),O(jo,{key:1},{"page-top":k(()=>[g(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[g(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),O(Ho,{key:2},{"home-hero-before":k(()=>[g(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[g(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[g(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[g(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[g(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[g(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),O($e(u(n).layout),{key:3})):(c(),O(Ks,{key:4},{"doc-top":k(()=>[g(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[g(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[g(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[g(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[g(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[g(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[g(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[g(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[g(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[g(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[g(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}});const Uo=L(Ro,[["__scopeId","data-v-9f712455"]]),Go={class:"container"},qo=["innerHTML"],Wo=["innerHTML"],Jo=P({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=D(),{hasSidebar:a}=_e();return(s,o)=>u(e).footer&&u(n).footer!==!1?(c(),p("footer",{key:0,class:z(["VPFooter",{"has-sidebar":u(a)}])},[d("div",Go,[u(e).footer.message?(c(),p("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,qo)):S("",!0),u(e).footer.copyright?(c(),p("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Wo)):S("",!0)])],2)):S("",!0)}});const Ko=L(Jo,[["__scopeId","data-v-486c6243"]]),Qo={class:"header"},Zo={class:"outline"},Yo=P({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=D(),a=M(!1),s=M(0),o=M();Ae(()=>{a.value=!1});function r(){a.value=!a.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function i(h){h.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),ce(()=>{a.value=!1}))}function l(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(h,v)=>(c(),p("div",{class:"VPLocalNavOutlineDropdown",style:aa({"--vp-vh":s.value+"px"})},[h.headers.length>0?(c(),p("button",{key:0,onClick:r,class:z({open:a.value})},[ee(B(u(Ct)(u(n)))+" ",1),w(Vt,{class:"icon"})],2)):(c(),p("button",{key:1,onClick:l},B(u(n).returnToTopLabel||"Return to top"),1)),w(Je,{name:"flyout"},{default:k(()=>[a.value?(c(),p("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:i},[d("div",Qo,[d("a",{class:"top-link",href:"#",onClick:l},B(u(n).returnToTopLabel||"Return to top"),1)]),d("div",Zo,[w(Mt,{headers:h.headers},null,8,["headers"])])],512)):S("",!0)]),_:1})],4))}});const Xo=L(Yo,[["__scopeId","data-v-6d2891fc"]]),er={},tr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},nr=d("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),ar=d("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),sr=d("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),or=d("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),rr=[nr,ar,sr,or];function ir(t,e){return c(),p("svg",tr,rr)}const lr=L(er,[["render",ir]]),cr=["aria-expanded"],ur={class:"menu-text"},dr=P({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=D(),{hasSidebar:a}=_e(),{y:s}=fn(),o=Qe([]),r=M(0);fe(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ae(()=>{o.value=Lt(n.value.outline??e.value.outline)});const i=C(()=>o.value.length===0&&!a.value),l=C(()=>({VPLocalNav:!0,fixed:i.value,"reached-top":s.value>=r.value}));return(h,v)=>u(n).layout!=="home"&&(!i.value||u(s)>=r.value)?(c(),p("div",{key:0,class:z(l.value)},[u(a)?(c(),p("button",{key:0,class:"menu","aria-expanded":h.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=y=>h.$emit("open-menu"))},[w(lr,{class:"menu-icon"}),d("span",ur,B(u(e).sidebarMenuLabel||"Menu"),1)],8,cr)):S("",!0),w(Xo,{headers:o.value,navHeight:r.value},null,8,["headers","navHeight"])],2)):S("",!0)}});const hr=L(dr,[["__scopeId","data-v-87db4bdd"]]);function pr(){const t=M(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function n(){t.value=!1,window.removeEventListener("resize",s)}function a(){t.value?n():e()}function s(){window.outerWidth>=768&&n()}const o=Ee();return J(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:a}}const vr={},fr={class:"VPSwitch",type:"button",role:"switch"},_r={class:"check"},mr={key:0,class:"icon"};function gr(t,e){return c(),p("button",fr,[d("span",_r,[t.$slots.default?(c(),p("span",mr,[g(t.$slots,"default",{},void 0,!0)])):S("",!0)])])}const yr=L(vr,[["render",gr],["__scopeId","data-v-a559c4f8"]]),br={},kr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},$r=d("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),wr=[$r];function Sr(t,e){return c(),p("svg",kr,wr)}const Pr=L(br,[["render",Sr]]),Cr={},Lr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Mr=_n('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Vr=[Mr];function Ir(t,e){return c(),p("svg",Lr,Vr)}const xr=L(Cr,[["render",Ir]]),Ar=P({__name:"VPSwitchAppearance",setup(t){const{isDark:e}=D(),n=Ze("toggle-appearance",()=>{e.value=!e.value});return(a,s)=>(c(),O(yr,{title:"toggle dark mode",class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(n)},{default:k(()=>[w(xr,{class:"sun"}),w(Pr,{class:"moon"})]),_:1},8,["aria-checked","onClick"]))}});const It=L(Ar,[["__scopeId","data-v-c638e119"]]),Tr={key:0,class:"VPNavBarAppearance"},Or=P({__name:"VPNavBarAppearance",setup(t){const{site:e}=D();return(n,a)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",Tr,[w(It)])):S("",!0)}});const Er=L(Or,[["__scopeId","data-v-8f98cc68"]]),xt=M();let Sn=!1,ot=0;function Nr(t){const e=M(!1);if(Ve){!Sn&&Br(),ot++;const n=J(xt,a=>{var s,o,r;a===t.el.value||(s=t.el.value)!=null&&s.contains(a)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});$t(()=>{n(),ot--,ot||Hr()})}return wt(e)}function Br(){document.addEventListener("focusin",Pn),Sn=!0,xt.value=document.activeElement}function Hr(){document.removeEventListener("focusin",Pn)}function Pn(){xt.value=document.activeElement}const Dr={},Fr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},zr=d("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),jr=[zr];function Rr(t,e){return c(),p("svg",Fr,jr)}const Cn=L(Dr,[["render",Rr]]),Ur={},Gr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},qr=d("circle",{cx:"12",cy:"12",r:"2"},null,-1),Wr=d("circle",{cx:"19",cy:"12",r:"2"},null,-1),Jr=d("circle",{cx:"5",cy:"12",r:"2"},null,-1),Kr=[qr,Wr,Jr];function Qr(t,e){return c(),p("svg",Gr,Kr)}const Zr=L(Ur,[["render",Qr]]),Yr={class:"VPMenuLink"},Xr=P({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=D();return(n,a)=>(c(),p("div",Yr,[w(he,{class:z({active:u(we)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:k(()=>[ee(B(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}});const Ye=L(Xr,[["__scopeId","data-v-07a4e8fc"]]),ei={class:"VPMenuGroup"},ti={key:0,class:"title"},ni=P({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),p("div",ei,[e.text?(c(),p("p",ti,B(e.text),1)):S("",!0),(c(!0),p(U,null,te(e.items,a=>(c(),p(U,null,["link"in a?(c(),O(Ye,{key:0,item:a},null,8,["item"])):S("",!0)],64))),256))]))}});const ai=L(ni,[["__scopeId","data-v-4763a2ee"]]),si={class:"VPMenu"},oi={key:0,class:"items"},ri=P({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),p("div",si,[e.items?(c(),p("div",oi,[(c(!0),p(U,null,te(e.items,a=>(c(),p(U,{key:a.text},["link"in a?(c(),O(Ye,{key:0,item:a},null,8,["item"])):(c(),O(ai,{key:1,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):S("",!0),g(e.$slots,"default",{},void 0,!0)]))}});const ii=L(ri,[["__scopeId","data-v-62f6e983"]]),li=["aria-expanded","aria-label"],ci={key:0,class:"text"},ui=["innerHTML"],di={class:"menu"},hi=P({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=M(!1),n=M();Nr({el:n,onBlur:a});function a(){e.value=!1}return(s,o)=>(c(),p("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=r=>e.value=!0),onMouseleave:o[2]||(o[2]=r=>e.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=r=>e.value=!e.value)},[s.button||s.icon?(c(),p("span",ci,[s.icon?(c(),O($e(s.icon),{key:0,class:"option-icon"})):S("",!0),s.button?(c(),p("span",{key:1,innerHTML:s.button},null,8,ui)):S("",!0),w(Cn,{class:"text-icon"})])):(c(),O(Zr,{key:1,class:"icon"}))],8,li),d("div",di,[w(ii,{items:s.items},{default:k(()=>[g(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}});const At=L(hi,[["__scopeId","data-v-e36afdbe"]]),pi={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},vi=["href","aria-label","innerHTML"],fi=P({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=C(()=>typeof e.icon=="object"?e.icon.svg:pi[e.icon]);return(a,s)=>(c(),p("a",{class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,vi))}});const _i=L(fi,[["__scopeId","data-v-f146fb65"]]),mi={class:"VPSocialLinks"},gi=P({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),p("div",mi,[(c(!0),p(U,null,te(e.links,({link:a,icon:s,ariaLabel:o})=>(c(),O(_i,{key:a,icon:s,link:a,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}});const Xe=L(gi,[["__scopeId","data-v-aa9bd2af"]]),yi={key:0,class:"group translations"},bi={class:"trans-title"},ki={key:1,class:"group"},$i={class:"item appearance"},wi={class:"label"},Si={class:"appearance-action"},Pi={key:2,class:"group"},Ci={class:"item social-links"},Li=P({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=D(),{localeLinks:a,currentLang:s}=Ne({correspondingLink:!0}),o=C(()=>a.value.length&&s.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>o.value?(c(),O(At,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[u(a).length&&u(s).label?(c(),p("div",yi,[d("p",bi,B(u(s).label),1),(c(!0),p(U,null,te(u(a),l=>(c(),O(Ye,{key:l.link,item:l},null,8,["item"]))),128))])):S("",!0),u(e).appearance?(c(),p("div",ki,[d("div",$i,[d("p",wi,B(u(n).darkModeSwitchLabel||"Appearance"),1),d("div",Si,[w(It)])])])):S("",!0),u(n).socialLinks?(c(),p("div",Pi,[d("div",Ci,[w(Xe,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):S("",!0)]),_:1})):S("",!0)}});const Mi=L(Li,[["__scopeId","data-v-3a331163"]]),Vi=t=>(ie("data-v-b229cfd0"),t=t(),le(),t),Ii=["aria-expanded"],xi=Vi(()=>d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)),Ai=[xi],Ti=P({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),p("button",{type:"button",class:z(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>e.$emit("click"))},Ai,10,Ii))}});const Oi=L(Ti,[["__scopeId","data-v-b229cfd0"]]),Ei=["innerHTML"],Ni=P({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=D();return(n,a)=>(c(),O(he,{class:z({VPNavBarMenuLink:!0,active:u(we)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:k(()=>[d("span",{innerHTML:n.item.text},null,8,Ei)]),_:1},8,["class","href","target","rel"]))}});const Bi=L(Ni,[["__scopeId","data-v-937ec2d2"]]),Hi=P({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=D(),a=o=>"link"in o?we(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(a),s=C(()=>a(e.item));return(o,r)=>(c(),O(At,{class:z({VPNavBarMenuGroup:!0,active:u(we)(u(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Di=t=>(ie("data-v-1f3f5e13"),t=t(),le(),t),Fi={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},zi=Di(()=>d("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),ji=P({__name:"VPNavBarMenu",setup(t){const{theme:e}=D();return(n,a)=>u(e).nav?(c(),p("nav",Fi,[zi,(c(!0),p(U,null,te(u(e).nav,s=>(c(),p(U,{key:s.text},["link"in s?(c(),O(Bi,{key:0,item:s},null,8,["item"])):(c(),O(Hi,{key:1,item:s},null,8,["item"]))],64))),128))])):S("",!0)}});const Ri=L(ji,[["__scopeId","data-v-1f3f5e13"]]);var Bt;const Ln=typeof window<"u",Ui=t=>typeof t=="string",Re=()=>{};Ln&&((Bt=window==null?void 0:window.navigator)!=null&&Bt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ht(t){return typeof t=="function"?t():u(t)}function Gi(t,e){function n(...a){t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})}return n}function qi(t,e={}){let n,a;return s=>{const o=ht(t),r=ht(e.maxWait);if(n&&clearTimeout(n),o<=0||r!==void 0&&r<=0)return a&&(clearTimeout(a),a=null),s();r&&!a&&(a=setTimeout(()=>{n&&clearTimeout(n),a=null,s()},r)),n=setTimeout(()=>{a&&clearTimeout(a),a=null,s()},o)}}function Wi(t){return t}function Ji(t){return yn()?(bn(t),!0):!1}function Mn(t,e=200,n={}){return Gi(qi(e,n),t)}function rt(t,e=200,n={}){if(e<=0)return t;const a=M(t.value),s=Mn(()=>{a.value=t.value},e,n);return J(t,()=>s()),a}function Vn(t,e,n){return J(t,(a,s,o)=>{a&&e(a,s,o)},n)}function Ki(t){var e;const n=ht(t);return(e=n==null?void 0:n.$el)!=null?e:n}const In=Ln?window:void 0;function De(...t){let e,n,a,s;if(Ui(t[0])?([n,a,s]=t,e=In):[e,n,a,s]=t,!e)return Re;let o=Re;const r=J(()=>Ki(e),l=>{o(),l&&(l.addEventListener(n,a,s),o=()=>{l.removeEventListener(n,a,s),o=Re})},{immediate:!0,flush:"post"}),i=()=>{r(),o()};return Ji(i),i}const Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dt="__vueuse_ssr_handlers__";Ht[Dt]=Ht[Dt]||{};const Qi={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Zi(t={}){const{reactive:e=!1,target:n=In,aliasMap:a=Qi,passive:s=!0,onEventFired:o=Re}=t,r=Se(new Set),i={toJSON(){return{}},current:r},l=e?Se(i):i,h=new Set,v=new Set;function y(_,m){_ in l&&(e?l[_]=m:l[_].value=m)}function f(){for(const _ of v)y(_,!1)}function b(_,m){var A,V;const T=(A=_.key)==null?void 0:A.toLowerCase(),H=[(V=_.code)==null?void 0:V.toLowerCase(),T].filter(Boolean);T&&(m?r.add(T):r.delete(T));for(const G of H)v.add(G),y(G,m);T==="meta"&&!m?(h.forEach(G=>{r.delete(G),y(G,!1)}),h.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&m&&[...r,...H].forEach(G=>h.add(G))}De(n,"keydown",_=>(b(_,!0),o(_)),{passive:s}),De(n,"keyup",_=>(b(_,!1),o(_)),{passive:s}),De("blur",f,{passive:!0}),De("focus",f,{passive:!0});const $=new Proxy(l,{get(_,m,A){if(typeof m!="string")return Reflect.get(_,m,A);if(m=m.toLowerCase(),m in a&&(m=a[m]),!(m in l))if(/[+_-]/.test(m)){const T=m.split(/[+_-]/g).map(H=>H.trim());l[m]=C(()=>T.every(H=>u($[H])))}else l[m]=M(!1);const V=Reflect.get(_,m,A);return e?u(V):V}});return $}var Ft;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Ft||(Ft={}));var Yi=Object.defineProperty,zt=Object.getOwnPropertySymbols,Xi=Object.prototype.hasOwnProperty,el=Object.prototype.propertyIsEnumerable,jt=(t,e,n)=>e in t?Yi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tl=(t,e)=>{for(var n in e||(e={}))Xi.call(e,n)&&jt(t,n,e[n]);if(zt)for(var n of zt(e))el.call(e,n)&&jt(t,n,e[n]);return t};const nl={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};tl({linear:Wi},nl);function ve(t){return Array.isArray?Array.isArray(t):Tn(t)==="[object Array]"}const al=1/0;function sl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-al?"-0":e}function ol(t){return t==null?"":sl(t)}function ue(t){return typeof t=="string"}function xn(t){return typeof t=="number"}function rl(t){return t===!0||t===!1||il(t)&&Tn(t)=="[object Boolean]"}function An(t){return typeof t=="object"}function il(t){return An(t)&&t!==null}function oe(t){return t!=null}function it(t){return!t.trim().length}function Tn(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ll="Incorrect 'index' type",cl=t=>`Invalid value for key ${t}`,ul=t=>`Pattern length exceeds max of ${t}.`,dl=t=>`Missing ${t} property in key`,hl=t=>`Property 'weight' in key '${t}' must be a positive integer`,Rt=Object.prototype.hasOwnProperty;class pl{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(a=>{let s=On(a);n+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(a=>{a.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function On(t){let e=null,n=null,a=null,s=1,o=null;if(ue(t)||ve(t))a=t,e=Ut(t),n=pt(t);else{if(!Rt.call(t,"name"))throw new Error(dl("name"));const r=t.name;if(a=r,Rt.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(hl(r));e=Ut(r),n=pt(r),o=t.getFn}return{path:e,id:n,weight:s,src:a,getFn:o}}function Ut(t){return ve(t)?t:t.split(".")}function pt(t){return ve(t)?t.join("."):t}function vl(t,e){let n=[],a=!1;const s=(o,r,i)=>{if(oe(o))if(!r[i])n.push(o);else{let l=r[i];const h=o[l];if(!oe(h))return;if(i===r.length-1&&(ue(h)||xn(h)||rl(h)))n.push(ol(h));else if(ve(h)){a=!0;for(let v=0,y=h.length;v<y;v+=1)s(h[v],r,i+1)}else r.length&&s(h,r,i+1)}};return s(t,ue(e)?e.split("."):e,0),a?n:n[0]}const fl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_l={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ml={location:0,threshold:.6,distance:100},gl={useExtendedSearch:!1,getFn:vl,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var E={..._l,...fl,...ml,...gl};const yl=/[^ ]+/g;function bl(t=1,e=3){const n=new Map,a=Math.pow(10,e);return{get(s){const o=s.match(yl).length;if(n.has(o))return n.get(o);const r=1/Math.pow(o,.5*t),i=parseFloat(Math.round(r*a)/a);return n.set(o,i),i},clear(){n.clear()}}}class Tt{constructor({getFn:e=E.getFn,fieldNormWeight:n=E.fieldNormWeight}={}){this.norm=bl(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,a)=>{this._keysMap[n.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ue(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();ue(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,a=this.size();n<a;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!oe(e)||it(e))return;let a={v:e,i:n,n:this.norm.get(e)};this.records.push(a)}_addObject(e,n){let a={i:n,$:{}};this.keys.forEach((s,o)=>{let r=s.getFn?s.getFn(e):this.getFn(e,s.path);if(oe(r)){if(ve(r)){let i=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:h,value:v}=l.pop();if(oe(v))if(ue(v)&&!it(v)){let y={v,i:h,n:this.norm.get(v)};i.push(y)}else ve(v)&&v.forEach((y,f)=>{l.push({nestedArrIndex:f,value:y})})}a.$[o]=i}else if(ue(r)&&!it(r)){let i={v:r,n:this.norm.get(r)};a.$[o]=i}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function En(t,e,{getFn:n=E.getFn,fieldNormWeight:a=E.fieldNormWeight}={}){const s=new Tt({getFn:n,fieldNormWeight:a});return s.setKeys(t.map(On)),s.setSources(e),s.create(),s}function kl(t,{getFn:e=E.getFn,fieldNormWeight:n=E.fieldNormWeight}={}){const{keys:a,records:s}=t,o=new Tt({getFn:e,fieldNormWeight:n});return o.setKeys(a),o.setIndexRecords(s),o}function Fe(t,{errors:e=0,currentLocation:n=0,expectedLocation:a=0,distance:s=E.distance,ignoreLocation:o=E.ignoreLocation}={}){const r=e/t.length;if(o)return r;const i=Math.abs(a-n);return s?r+i/s:i?1:r}function $l(t=[],e=E.minMatchCharLength){let n=[],a=-1,s=-1,o=0;for(let r=t.length;o<r;o+=1){let i=t[o];i&&a===-1?a=o:!i&&a!==-1&&(s=o-1,s-a+1>=e&&n.push([a,s]),a=-1)}return t[o-1]&&o-a>=e&&n.push([a,o-1]),n}const ke=32;function wl(t,e,n,{location:a=E.location,distance:s=E.distance,threshold:o=E.threshold,findAllMatches:r=E.findAllMatches,minMatchCharLength:i=E.minMatchCharLength,includeMatches:l=E.includeMatches,ignoreLocation:h=E.ignoreLocation}={}){if(e.length>ke)throw new Error(ul(ke));const v=e.length,y=t.length,f=Math.max(0,Math.min(a,y));let b=o,$=f;const _=i>1||l,m=_?Array(y):[];let A;for(;(A=t.indexOf(e,$))>-1;){let q=Fe(e,{currentLocation:A,expectedLocation:f,distance:s,ignoreLocation:h});if(b=Math.min(q,b),$=A+v,_){let N=0;for(;N<v;)m[A+N]=1,N+=1}}$=-1;let V=[],T=1,H=v+y;const G=1<<v-1;for(let q=0;q<v;q+=1){let N=0,F=H;for(;N<F;)Fe(e,{errors:q,currentLocation:f+F,expectedLocation:f,distance:s,ignoreLocation:h})<=b?N=F:H=F,F=Math.floor((H-N)/2+N);H=F;let ne=Math.max(1,f-F+1),pe=r?y:Math.min(f+F,y)+v,se=Array(pe+2);se[pe+1]=(1<<q)-1;for(let I=pe;I>=ne;I-=1){let R=I-1,X=n[t.charAt(R)];if(_&&(m[R]=+!!X),se[I]=(se[I+1]<<1|1)&X,q&&(se[I]|=(V[I+1]|V[I])<<1|1|V[I+1]),se[I]&G&&(T=Fe(e,{errors:q,currentLocation:R,expectedLocation:f,distance:s,ignoreLocation:h}),T<=b)){if(b=T,$=R,$<=f)break;ne=Math.max(1,2*f-$)}}if(Fe(e,{errors:q+1,currentLocation:f,expectedLocation:f,distance:s,ignoreLocation:h})>b)break;V=se}const Z={isMatch:$>=0,score:Math.max(.001,T)};if(_){const q=$l(m,i);q.length?l&&(Z.indices=q):Z.isMatch=!1}return Z}function Sl(t){let e={};for(let n=0,a=t.length;n<a;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<a-n-1}return e}class Nn{constructor(e,{location:n=E.location,threshold:a=E.threshold,distance:s=E.distance,includeMatches:o=E.includeMatches,findAllMatches:r=E.findAllMatches,minMatchCharLength:i=E.minMatchCharLength,isCaseSensitive:l=E.isCaseSensitive,ignoreLocation:h=E.ignoreLocation}={}){if(this.options={location:n,threshold:a,distance:s,includeMatches:o,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:h},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(f,b)=>{this.chunks.push({pattern:f,alphabet:Sl(f),startIndex:b})},y=this.pattern.length;if(y>ke){let f=0;const b=y%ke,$=y-b;for(;f<$;)v(this.pattern.substr(f,ke),f),f+=ke;if(b){const _=y-ke;v(this.pattern.substr(_),_)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:a}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let $={isMatch:!0,score:0};return a&&($.indices=[[0,e.length-1]]),$}const{location:s,distance:o,threshold:r,findAllMatches:i,minMatchCharLength:l,ignoreLocation:h}=this.options;let v=[],y=0,f=!1;this.chunks.forEach(({pattern:$,alphabet:_,startIndex:m})=>{const{isMatch:A,score:V,indices:T}=wl(e,$,_,{location:s+m,distance:o,threshold:r,findAllMatches:i,minMatchCharLength:l,includeMatches:a,ignoreLocation:h});A&&(f=!0),y+=V,A&&T&&(v=[...v,...T])});let b={isMatch:f,score:f?y/this.chunks.length:1};return f&&a&&(b.indices=v),b}}class ye{constructor(e){this.pattern=e}static isMultiMatch(e){return Gt(e,this.multiRegex)}static isSingleMatch(e){return Gt(e,this.singleRegex)}search(){}}function Gt(t,e){const n=t.match(e);return n?n[1]:null}class Pl extends ye{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Cl extends ye{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ll extends ye{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ml extends ye{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Vl extends ye{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Il extends ye{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Bn extends ye{constructor(e,{location:n=E.location,threshold:a=E.threshold,distance:s=E.distance,includeMatches:o=E.includeMatches,findAllMatches:r=E.findAllMatches,minMatchCharLength:i=E.minMatchCharLength,isCaseSensitive:l=E.isCaseSensitive,ignoreLocation:h=E.ignoreLocation}={}){super(e),this._bitapSearch=new Nn(e,{location:n,threshold:a,distance:s,includeMatches:o,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Hn extends ye{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,a;const s=[],o=this.pattern.length;for(;(a=e.indexOf(this.pattern,n))>-1;)n=a+o,s.push([a,n-1]);const r=!!s.length;return{isMatch:r,score:r?0:1,indices:s}}}const vt=[Pl,Hn,Ll,Ml,Il,Vl,Cl,Bn],qt=vt.length,xl=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Al="|";function Tl(t,e={}){return t.split(Al).map(n=>{let a=n.trim().split(xl).filter(o=>o&&!!o.trim()),s=[];for(let o=0,r=a.length;o<r;o+=1){const i=a[o];let l=!1,h=-1;for(;!l&&++h<qt;){const v=vt[h];let y=v.isMultiMatch(i);y&&(s.push(new v(y,e)),l=!0)}if(!l)for(h=-1;++h<qt;){const v=vt[h];let y=v.isSingleMatch(i);if(y){s.push(new v(y,e));break}}}return s})}const Ol=new Set([Bn.type,Hn.type]);class El{constructor(e,{isCaseSensitive:n=E.isCaseSensitive,includeMatches:a=E.includeMatches,minMatchCharLength:s=E.minMatchCharLength,ignoreLocation:o=E.ignoreLocation,findAllMatches:r=E.findAllMatches,location:i=E.location,threshold:l=E.threshold,distance:h=E.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:a,minMatchCharLength:s,findAllMatches:r,ignoreLocation:o,location:i,threshold:l,distance:h},this.pattern=n?e:e.toLowerCase(),this.query=Tl(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let o=0,r=[],i=0;for(let l=0,h=n.length;l<h;l+=1){const v=n[l];r.length=0,o=0;for(let y=0,f=v.length;y<f;y+=1){const b=v[y],{isMatch:$,indices:_,score:m}=b.search(e);if($){if(o+=1,i+=m,a){const A=b.constructor.type;Ol.has(A)?r=[...r,..._]:r.push(_)}}else{i=0,o=0,r.length=0;break}}if(o){let y={isMatch:!0,score:i/o};return a&&(y.indices=r),y}}return{isMatch:!1,score:1}}}const ft=[];function Nl(...t){ft.push(...t)}function _t(t,e){for(let n=0,a=ft.length;n<a;n+=1){let s=ft[n];if(s.condition(t,e))return new s(t,e)}return new Nn(t,e)}const qe={AND:"$and",OR:"$or"},mt={PATH:"$path",PATTERN:"$val"},gt=t=>!!(t[qe.AND]||t[qe.OR]),Bl=t=>!!t[mt.PATH],Hl=t=>!ve(t)&&An(t)&&!gt(t),Wt=t=>({[qe.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Dn(t,e,{auto:n=!0}={}){const a=s=>{let o=Object.keys(s);const r=Bl(s);if(!r&&o.length>1&&!gt(s))return a(Wt(s));if(Hl(s)){const l=r?s[mt.PATH]:o[0],h=r?s[mt.PATTERN]:s[l];if(!ue(h))throw new Error(cl(l));const v={keyId:pt(l),pattern:h};return n&&(v.searcher=_t(h,e)),v}let i={children:[],operator:o[0]};return o.forEach(l=>{const h=s[l];ve(h)&&h.forEach(v=>{i.children.push(a(v))})}),i};return gt(t)||(t=Wt(t)),a(t)}function Dl(t,{ignoreFieldNorm:e=E.ignoreFieldNorm}){t.forEach(n=>{let a=1;n.matches.forEach(({key:s,norm:o,score:r})=>{const i=s?s.weight:null;a*=Math.pow(r===0&&i?Number.EPSILON:r,(i||1)*(e?1:o))}),n.score=a})}function Fl(t,e){const n=t.matches;e.matches=[],oe(n)&&n.forEach(a=>{if(!oe(a.indices)||!a.indices.length)return;const{indices:s,value:o}=a;let r={indices:s,value:o};a.key&&(r.key=a.key.src),a.idx>-1&&(r.refIndex=a.idx),e.matches.push(r)})}function zl(t,e){e.score=t.score}function jl(t,e,{includeMatches:n=E.includeMatches,includeScore:a=E.includeScore}={}){const s=[];return n&&s.push(Fl),a&&s.push(zl),t.map(o=>{const{idx:r}=o,i={item:e[r],refIndex:r};return s.length&&s.forEach(l=>{l(o,i)}),i})}class Pe{constructor(e,n={},a){this.options={...E,...n},this.options.useExtendedSearch,this._keyStore=new pl(this.options.keys),this.setCollection(e,a)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Tt))throw new Error(ll);this._myIndex=n||En(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!oe(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let a=0,s=this._docs.length;a<s;a+=1){const o=this._docs[a];e(o,a)&&(this.removeAt(a),a-=1,s-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:a,includeScore:s,shouldSort:o,sortFn:r,ignoreFieldNorm:i}=this.options;let l=ue(e)?ue(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Dl(l,{ignoreFieldNorm:i}),o&&l.sort(r),xn(n)&&n>-1&&(l=l.slice(0,n)),jl(l,this._docs,{includeMatches:a,includeScore:s})}_searchStringList(e){const n=_t(e,this.options),{records:a}=this._myIndex,s=[];return a.forEach(({v:o,i:r,n:i})=>{if(!oe(o))return;const{isMatch:l,score:h,indices:v}=n.searchIn(o);l&&s.push({item:o,idx:r,matches:[{score:h,value:o,norm:i,indices:v}]})}),s}_searchLogical(e){const n=Dn(e,this.options),a=(i,l,h)=>{if(!i.children){const{keyId:y,searcher:f}=i,b=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(l,y),searcher:f});return b&&b.length?[{idx:h,item:l,matches:b}]:[]}const v=[];for(let y=0,f=i.children.length;y<f;y+=1){const b=i.children[y],$=a(b,l,h);if($.length)v.push(...$);else if(i.operator===qe.AND)return[]}return v},s=this._myIndex.records,o={},r=[];return s.forEach(({$:i,i:l})=>{if(oe(i)){let h=a(n,i,l);h.length&&(o[l]||(o[l]={idx:l,item:i,matches:[]},r.push(o[l])),h.forEach(({matches:v})=>{o[l].matches.push(...v)}))}}),r}_searchObjectList(e){const n=_t(e,this.options),{keys:a,records:s}=this._myIndex,o=[];return s.forEach(({$:r,i})=>{if(!oe(r))return;let l=[];a.forEach((h,v)=>{l.push(...this._findMatches({key:h,value:r[v],searcher:n}))}),l.length&&o.push({idx:i,item:r,matches:l})}),o}_findMatches({key:e,value:n,searcher:a}){if(!oe(n))return[];let s=[];if(ve(n))n.forEach(({v:o,i:r,n:i})=>{if(!oe(o))return;const{isMatch:l,score:h,indices:v}=a.searchIn(o);l&&s.push({score:h,key:e,value:o,idx:r,norm:i,indices:v})});else{const{v:o,n:r}=n,{isMatch:i,score:l,indices:h}=a.searchIn(o);i&&s.push({score:l,key:e,value:o,norm:r,indices:h})}return s}}Pe.version="6.6.2";Pe.createIndex=En;Pe.parseIndex=kl;Pe.config=E;Pe.parseQuery=Dn;Nl(El);const Jt=Se({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ie=()=>({isSearching:C(()=>Jt.search!==""),...oa(Jt)});function Rl(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map(function(s){s(n)}),(a=t.get("*"))&&a.slice().map(function(s){s(e,n)})}}}const Ul=Rl(),et=()=>({emitter:Ul});function Gl(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function ql(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}const Wl=["command-theme"],Jl={"command-root":""},Kl=P({name:"Command"}),Ql=P({...Kl,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(t,{emit:e}){const n=t,a='[command-item=""]',s="command-item-key",o='[command-group=""]',r="command-group-key",i='[command-group-heading=""]',l=`${a}:not([aria-disabled="true"])`,h=`${a}[aria-selected="true"]`,v="command-item-select",y="data-value";St("theme",n.theme||"default");const{selectedNode:f,search:b,dataValue:$,filtered:_}=Ie(),{emitter:m}=et(),A=M(),V=rt(M(new Map),333),T=rt(M(new Set),333),H=rt(M(new Map)),G=C(()=>{const x=[];for(const[W,j]of V.value.entries())x.push({key:W,label:j});return x}),Z=C(()=>{const x=Pe.createIndex(n.fuseOptions.keys,G.value);return new Pe(G.value,n.fuseOptions,x)}),q=()=>{var x,W,j;const K=N();K&&(((x=K.parentElement)==null?void 0:x.firstElementChild)===K&&((j=(W=K.closest(o))==null?void 0:W.querySelector(i))==null||j.scrollIntoView({block:"nearest"})),K.scrollIntoView({block:"nearest"}))},N=()=>{var x;return(x=A.value)==null?void 0:x.querySelector(h)},F=(x=A.value)=>{const W=x==null?void 0:x.querySelectorAll(l);return W?Array.from(W):[]},ne=()=>{var x;const W=(x=A.value)==null?void 0:x.querySelectorAll(o);return W?Array.from(W):[]},pe=()=>{const[x]=F();x&&x.getAttribute(s)&&(f.value=x.getAttribute(s)||"")},se=x=>{const W=F()[x];W&&(f.value=W.getAttribute(s)||"")},I=x=>{const W=N(),j=F(),K=j.findIndex(He=>He===W),me=j[K+x];me?f.value=me.getAttribute(s)||"":x>0?se(0):se(j.length-1)},R=x=>{const W=N();let j=W==null?void 0:W.closest(o),K=null;for(;j&&!K;)j=x>0?Gl(j,o):ql(j,o),K=j==null?void 0:j.querySelector(l);K?f.value=K.getAttribute(s)||"":I(x)},X=()=>se(0),Q=()=>se(F().length-1),Le=x=>{x.preventDefault(),x.metaKey?Q():x.altKey?R(1):I(1)},at=x=>{x.preventDefault(),x.metaKey?X():x.altKey?R(-1):I(-1)},st=x=>{switch(x.key){case"n":case"j":{x.ctrlKey&&Le(x);break}case"ArrowDown":{Le(x);break}case"p":case"k":{x.ctrlKey&&at(x);break}case"ArrowUp":{at(x);break}case"Home":{X();break}case"End":{Q();break}case"Enter":{const W=N();if(W){const j=new Event(v);W.dispatchEvent(j)}}}},ae=()=>{if(!b.value){_.value.count=T.value.size;return}_.value.groups=new Set("");const x=new Map,W=Z.value.search(b.value).map(j=>j.item);for(const{key:j,label:K}of W)x.set(j,K);for(const[j,K]of H.value)for(const me of K)x.get(me)&&_.value.groups.add(j);ce(()=>{_.value.count=x.size,_.value.items=x})},be=()=>{const x=F(),W=ne();for(const j of x){const K=j.getAttribute(s)||"",me=j.getAttribute(y)||"";T.value.add(K),V.value.set(K,me),_.value.count=V.value.size}for(const j of W){const K=F(j),me=j.getAttribute(r)||"",He=new Set("");for(const Xn of K){const ea=Xn.getAttribute(s)||"";He.add(ea)}H.value.set(me,He)}};J(()=>f.value,x=>{x&&ce(q)},{deep:!0}),J(()=>b.value,x=>{ae(),ce(pe)}),m.on("selectItem",x=>{e("select-item",x)});const Yn=Mn(x=>{x&&(be(),ce(pe))},100);return m.on("rerenderList",Yn),fe(()=>{be(),pe()}),(x,W)=>(c(),p("div",{class:z(t.theme),onKeydown:st,ref_key:"commandRef",ref:A,"command-theme":t.theme},[d("div",Jl,[g(x.$slots,"default")])],42,Wl))}}),xe=(t,e)=>{const n=t.__vccOpts||t;for(const[a,s]of e)n[a]=s;return n},yt=xe(Ql,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Zl={"command-dialog":""},Yl={"command-dialog-mask":""},Xl={"command-dialog-wrapper":""},ec={"command-dialog-header":""},tc={"command-dialog-body":""},nc={key:0,"command-dialog-footer":""},ac=P({name:"Command.Dialog"}),sc=P({...ac,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(t,{emit:e}){const n=t,{search:a,filtered:s}=Ie(),{emitter:o}=et(),r=M();o.on("selectItem",l=>{e("select-item",l)});const i=()=>{a.value="",s.value.count=0,s.value.items=new Map,s.value.groups=new Set};return Vn(()=>n.visible,i),Pt(i),(l,h)=>(c(),O(sa,{to:"body",ref_key:"dialogRef",ref:r},[w(Je,{name:"command-dialog",appear:""},{default:k(()=>[t.visible?(c(),O(yt,{key:0,theme:t.theme},{default:k(()=>[d("div",Zl,[d("div",Yl,[d("div",Xl,[d("div",ec,[g(l.$slots,"header")]),d("div",tc,[g(l.$slots,"body")]),l.$slots.footer?(c(),p("div",nc,[g(l.$slots,"footer")])):S("v-if",!0)])])])]),_:3},8,["theme"])):S("v-if",!0)]),_:3})],512))}}),oc=xe(sc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let Fn=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const rc=["command-group-key","data-value"],ic={key:0,"command-group-heading":""},lc={"command-group-items":"",role:"group"},cc=P({name:"Command.Group"}),uc=P({...cc,props:{heading:{type:String,required:!0}},setup(t){const e=C(()=>`command-group-${Fn()}`),{filtered:n,isSearching:a}=Ie(),s=C(()=>a.value?n.value.groups.has(e.value):!0);return(o,r)=>mn((c(),p("div",{"command-group":"",role:"presentation",key:u(e),"command-group-key":u(e),"data-value":t.heading},[t.heading?(c(),p("div",ic,B(t.heading),1)):S("v-if",!0),d("div",lc,[g(o.$slots,"default")])],8,rc)),[[gn,u(s)]])}}),dc=xe(uc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),hc=["placeholder","value"],pc=P({name:"Command.Input"}),vc=P({...pc,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(t,{emit:e}){const n=M(null),{search:a}=Ie(),s=C(()=>a.value),o=r=>{const i=r,l=r.target;a.value=l==null?void 0:l.value,e("input",i),e("update:value",a.value)};return ge(()=>{var r;(r=n.value)==null||r.focus()}),(r,i)=>(c(),p("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:t.placeholder,value:u(s),onInput:o},null,40,hc))}}),fc=xe(vc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),_c=["aria-selected","aria-disabled","command-item-key"],mc=P({name:"Command.Item"}),gc=P({...mc,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(t,{emit:e}){const n=t,a="command-item-select",s="data-value",{current:o}=Zi(),{selectedNode:r,filtered:i,isSearching:l}=Ie(),{emitter:h}=et(),v=M(),y=C(()=>`command-item-${Fn()}`),f=C(()=>{const _=i.value.items.get(y.value);return l.value?_!==void 0:!0}),b=C(()=>Array.from(o)),$=()=>{var _;const m={key:y.value,value:((_=v.value)==null?void 0:_.getAttribute(s))||""};e("select",m),h.emit("selectItem",m)};return Vn(b,_=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(m=>o.has(m.toLowerCase()))&&n.perform&&n.perform()}),ge(()=>{var _;(_=v.value)==null||_.addEventListener(a,$)}),Pt(()=>{var _;(_=v.value)==null||_.removeEventListener(a,$)}),(_,m)=>mn((c(),p("div",{ref_key:"itemRef",ref:v,"command-item":"",role:"option","aria-selected":u(r)===u(y),"aria-disabled":!u(f),key:u(y),"command-item-key":u(y),onClick:$},[g(_.$slots,"default")],8,_c)),[[gn,u(f)]])}}),yc=xe(gc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),bc=P({name:"Command.List"}),kc=P({...bc,setup(t){const{emitter:e}=et(),n=M(),a=M();let s=null,o;return ge(()=>{o=a.value;const r=n.value;o&&r&&(s=new ResizeObserver(i=>{ce(()=>{const l=o==null?void 0:o.offsetHeight;r==null||r.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),e.emit("rerenderList",!0)})}),s.observe(o))}),Pt(()=>{s!==null&&o&&s.unobserve(o)}),(r,i)=>(c(),p("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[d("div",{"command-list-sizer":"",ref_key:"heightRef",ref:a},[g(r.$slots,"default")],512)],512))}}),$c=xe(kc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),wc=P({name:"Command.Empty",setup(t,{attrs:e,slots:n}){const{filtered:a}=Ie(),s=C(()=>a.value.count===0);return()=>s.value?Ue("div",{"command-empty":"",role:"presentation",...e},n):Ue("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),Sc=P({name:"Command.Loading",setup(t,{attrs:e,slots:n}){return()=>Ue("div",{"command-loading":"",role:"progressbar",...e},n)}}),Pc=P({name:"Command.Separator",setup(t,{attrs:e,slots:n}){return()=>Ue("div",{"command-separator":"",role:"separator",...e})}}),Me=Object.assign(yt,{Dialog:oc,Empty:wc,Group:dc,Input:fc,Item:yc,List:$c,Loading:Sc,Separator:Pc,Root:yt});var Kt;const Ot=typeof window<"u",Cc=t=>typeof t=="function",Lc=t=>typeof t=="string",Oe=()=>{},Mc=Ot&&((Kt=window==null?void 0:window.navigator)==null?void 0:Kt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Be(t){return typeof t=="function"?t():u(t)}function zn(t,e){function n(...a){return new Promise((s,o)=>{Promise.resolve(t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(s).catch(o)})}return n}const jn=t=>t();function Vc(t,e=!0,n=!0,a=!1){let s=0,o,r=!0,i=Oe,l;const h=()=>{o&&(clearTimeout(o),o=void 0,i(),i=Oe)};return y=>{const f=Be(t),b=Date.now()-s,$=()=>l=y();return h(),f<=0?(s=Date.now(),$()):(b>f&&(n||!r)?(s=Date.now(),$()):e&&(l=new Promise((_,m)=>{i=a?m:_,o=setTimeout(()=>{s=Date.now(),r=!0,_($()),h()},Math.max(0,f-b))})),!n&&!o&&(o=setTimeout(()=>r=!0,f)),r=!1,l)}}function Ic(t=jn){const e=M(!0);function n(){e.value=!1}function a(){e.value=!0}const s=(...o)=>{e.value&&t(...o)};return{isActive:wt(e),pause:n,resume:a,eventFilter:s}}function xc(t){return t}function tt(t){return yn()?(bn(t),!0):!1}function x1(t,e=200,n=!1,a=!0,s=!1){return zn(Vc(e,n,a,s),t)}function Ac(t){return typeof t=="function"?C(t):M(t)}function nt(t,e=!0){ra()?fe(t):e?t():ce(t)}function A1(t,e,n={}){const{immediate:a=!0}=n,s=M(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function i(){s.value=!1,r()}function l(...h){r(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=null,t(...h)},Be(e))}return a&&(s.value=!0,Ot&&l()),tt(i),{isPending:wt(s),start:l,stop:i}}var Qt=Object.getOwnPropertySymbols,Tc=Object.prototype.hasOwnProperty,Oc=Object.prototype.propertyIsEnumerable,Ec=(t,e)=>{var n={};for(var a in t)Tc.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Qt)for(var a of Qt(t))e.indexOf(a)<0&&Oc.call(t,a)&&(n[a]=t[a]);return n};function Nc(t,e,n={}){const a=n,{eventFilter:s=jn}=a,o=Ec(a,["eventFilter"]);return J(t,zn(s,e),o)}var Bc=Object.defineProperty,Hc=Object.defineProperties,Dc=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertySymbols,Rn=Object.prototype.hasOwnProperty,Un=Object.prototype.propertyIsEnumerable,Zt=(t,e,n)=>e in t?Bc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fc=(t,e)=>{for(var n in e||(e={}))Rn.call(e,n)&&Zt(t,n,e[n]);if(We)for(var n of We(e))Un.call(e,n)&&Zt(t,n,e[n]);return t},zc=(t,e)=>Hc(t,Dc(e)),jc=(t,e)=>{var n={};for(var a in t)Rn.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&We)for(var a of We(t))e.indexOf(a)<0&&Un.call(t,a)&&(n[a]=t[a]);return n};function Gn(t,e,n={}){const a=n,{eventFilter:s}=a,o=jc(a,["eventFilter"]),{eventFilter:r,pause:i,resume:l,isActive:h}=Ic(s);return{stop:Nc(t,e,zc(Fc({},o),{eventFilter:r})),pause:i,resume:l,isActive:h}}function de(t){var e;const n=Be(t);return(e=n==null?void 0:n.$el)!=null?e:n}const re=Ot?window:void 0;function Y(...t){let e,n,a,s;if(Lc(t[0])||Array.isArray(t[0])?([n,a,s]=t,e=re):[e,n,a,s]=t,!e)return Oe;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],r=()=>{o.forEach(v=>v()),o.length=0},i=(v,y,f,b)=>(v.addEventListener(y,f,b),()=>v.removeEventListener(y,f,b)),l=J(()=>[de(e),Be(s)],([v,y])=>{r(),v&&o.push(...n.flatMap(f=>a.map(b=>i(v,f,b,y))))},{immediate:!0,flush:"post"}),h=()=>{l(),r()};return tt(h),h}let Yt=!1;function T1(t,e,n={}){const{window:a=re,ignore:s=[],capture:o=!0,detectIframe:r=!1}=n;if(!a)return;Mc&&!Yt&&(Yt=!0,Array.from(a.document.body.children).forEach(f=>f.addEventListener("click",Oe)));let i=!0;const l=f=>s.some(b=>{if(typeof b=="string")return Array.from(a.document.querySelectorAll(b)).some($=>$===f.target||f.composedPath().includes($));{const $=de(b);return $&&(f.target===$||f.composedPath().includes($))}}),v=[Y(a,"click",f=>{const b=de(t);if(!(!b||b===f.target||f.composedPath().includes(b))){if(f.detail===0&&(i=!l(f)),!i){i=!0;return}e(f)}},{passive:!0,capture:o}),Y(a,"pointerdown",f=>{const b=de(t);b&&(i=!f.composedPath().includes(b)&&!l(f))},{passive:!0}),r&&Y(a,"blur",f=>{var b;const $=de(t);((b=a.document.activeElement)==null?void 0:b.tagName)==="IFRAME"&&!($!=null&&$.contains(a.document.activeElement))&&e(f)})].filter(Boolean);return()=>v.forEach(f=>f())}function qn(t,e=!1){const n=M(),a=()=>n.value=!!t();return a(),nt(a,e),n}function Rc(t,e={}){const{window:n=re}=e,a=qn(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const o=M(!1),r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",i):s.removeListener(i))},i=()=>{a.value&&(r(),s=n.matchMedia(Ac(t).value),o.value=s.matches,"addEventListener"in s?s.addEventListener("change",i):s.addListener(i))};return ge(i),tt(()=>r()),o}function O1({window:t=re}={}){const e=a=>{const{state:s,length:o}=(t==null?void 0:t.history)||{},{hash:r,host:i,hostname:l,href:h,origin:v,pathname:y,port:f,protocol:b,search:$}=(t==null?void 0:t.location)||{};return{trigger:a,state:s,length:o,hash:r,host:i,hostname:l,href:h,origin:v,pathname:y,port:f,protocol:b,search:$}},n=M(e("load"));return t&&(Y(t,"popstate",()=>n.value=e("popstate"),{passive:!0}),Y(t,"hashchange",()=>n.value=e("hashchange"),{passive:!0})),n}const bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kt="__vueuse_ssr_handlers__";bt[kt]=bt[kt]||{};const Uc=bt[kt];function Wn(t,e){return Uc[t]||e}function Gc(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var qc=Object.defineProperty,Xt=Object.getOwnPropertySymbols,Wc=Object.prototype.hasOwnProperty,Jc=Object.prototype.propertyIsEnumerable,en=(t,e,n)=>e in t?qc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tn=(t,e)=>{for(var n in e||(e={}))Wc.call(e,n)&&en(t,n,e[n]);if(Xt)for(var n of Xt(e))Jc.call(e,n)&&en(t,n,e[n]);return t};const Kc={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},nn="vueuse-storage";function Qc(t,e,n,a={}){var s;const{flush:o="pre",deep:r=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:h=!1,shallow:v,window:y=re,eventFilter:f,onError:b=N=>{console.error(N)}}=a,$=(v?Qe:M)(e);if(!n)try{n=Wn("getDefaultStorage",()=>{var N;return(N=re)==null?void 0:N.localStorage})()}catch(N){b(N)}if(!n)return $;const _=Be(e),m=Gc(_),A=(s=a.serializer)!=null?s:Kc[m],{pause:V,resume:T}=Gn($,()=>H($.value),{flush:o,deep:r,eventFilter:f});return y&&i&&(Y(y,"storage",q),Y(y,nn,Z)),q(),$;function H(N){try{if(N==null)n.removeItem(t);else{const F=A.write(N),ne=n.getItem(t);ne!==F&&(n.setItem(t,F),y&&y.dispatchEvent(new CustomEvent(nn,{detail:{key:t,oldValue:ne,newValue:F,storageArea:n}})))}}catch(F){b(F)}}function G(N){const F=N?N.newValue:n.getItem(t);if(F==null)return l&&_!==null&&n.setItem(t,A.write(_)),_;if(!N&&h){const ne=A.read(F);return Cc(h)?h(ne,_):m==="object"&&!Array.isArray(ne)?tn(tn({},_),ne):ne}else return typeof F!="string"?F:A.read(F)}function Z(N){q(N.detail)}function q(N){if(!(N&&N.storageArea!==n)){if(N&&N.key==null){$.value=_;return}if(!(N&&N.key!==t)){V();try{$.value=G(N)}catch(F){b(F)}finally{N?ce(T):T()}}}}}function Jn(t){return Rc("(prefers-color-scheme: dark)",t)}var Zc=Object.defineProperty,an=Object.getOwnPropertySymbols,Yc=Object.prototype.hasOwnProperty,Xc=Object.prototype.propertyIsEnumerable,sn=(t,e,n)=>e in t?Zc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,eu=(t,e)=>{for(var n in e||(e={}))Yc.call(e,n)&&sn(t,n,e[n]);if(an)for(var n of an(e))Xc.call(e,n)&&sn(t,n,e[n]);return t};function tu(t={}){const{selector:e="html",attribute:n="class",initialValue:a="auto",window:s=re,storage:o,storageKey:r="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:h}=t,v=eu({auto:"",light:"light",dark:"dark"},t.modes||{}),y=Jn({window:s}),f=C(()=>y.value?"dark":"light"),b=l||(r==null?M(a):Qc(r,a,o,{window:s,listenToStorageChanges:i})),$=C({get(){return b.value==="auto"&&!h?f.value:b.value},set(V){b.value=V}}),_=Wn("updateHTMLAttrs",(V,T,H)=>{const G=s==null?void 0:s.document.querySelector(V);if(G)if(T==="class"){const Z=H.split(/\s/g);Object.values(v).flatMap(q=>(q||"").split(/\s/g)).filter(Boolean).forEach(q=>{Z.includes(q)?G.classList.add(q):G.classList.remove(q)})}else G.setAttribute(T,H)});function m(V){var T;const H=V==="auto"?f.value:V;_(e,n,(T=v[H])!=null?T:H)}function A(V){t.onChanged?t.onChanged(V,m):m(V)}return J($,A,{flush:"post",immediate:!0}),h&&J(f,()=>A($.value),{flush:"post"}),nt(()=>A($.value)),$}var nu=Object.defineProperty,au=Object.defineProperties,su=Object.getOwnPropertyDescriptors,on=Object.getOwnPropertySymbols,ou=Object.prototype.hasOwnProperty,ru=Object.prototype.propertyIsEnumerable,rn=(t,e,n)=>e in t?nu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,iu=(t,e)=>{for(var n in e||(e={}))ou.call(e,n)&&rn(t,n,e[n]);if(on)for(var n of on(e))ru.call(e,n)&&rn(t,n,e[n]);return t},lu=(t,e)=>au(t,su(e));function E1(t={}){const{valueDark:e="dark",valueLight:n="",window:a=re}=t,s=tu(lu(iu({},t),{onChanged:(i,l)=>{var h;t.onChanged?(h=t.onChanged)==null||h.call(t,i==="dark"):l(i)},modes:{dark:e,light:n}})),o=Jn({window:a});return C({get(){return s.value==="dark"},set(i){i===o.value?s.value="auto":s.value=i?"dark":"light"}})}var ln=Object.getOwnPropertySymbols,cu=Object.prototype.hasOwnProperty,uu=Object.prototype.propertyIsEnumerable,du=(t,e)=>{var n={};for(var a in t)cu.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&ln)for(var a of ln(t))e.indexOf(a)<0&&uu.call(t,a)&&(n[a]=t[a]);return n};function hu(t,e,n={}){const a=n,{window:s=re}=a,o=du(a,["window"]);let r;const i=qn(()=>s&&"ResizeObserver"in s),l=()=>{r&&(r.disconnect(),r=void 0)},h=J(()=>de(t),y=>{l(),i.value&&s&&y&&(r=new ResizeObserver(e),r.observe(y,o))},{immediate:!0,flush:"post"}),v=()=>{l(),h()};return tt(v),{isSupported:i,stop:v}}function N1(t,e={}){const{reset:n=!0,windowResize:a=!0,windowScroll:s=!0,immediate:o=!0}=e,r=M(0),i=M(0),l=M(0),h=M(0),v=M(0),y=M(0),f=M(0),b=M(0);function $(){const _=de(t);if(!_){n&&(r.value=0,i.value=0,l.value=0,h.value=0,v.value=0,y.value=0,f.value=0,b.value=0);return}const m=_.getBoundingClientRect();r.value=m.height,i.value=m.bottom,l.value=m.left,h.value=m.right,v.value=m.top,y.value=m.width,f.value=m.x,b.value=m.y}return hu(t,$),J(()=>de(t),_=>!_&&$()),s&&Y("scroll",$,{capture:!0,passive:!0}),a&&Y("resize",$,{passive:!0}),nt(()=>{o&&$()}),{height:r,bottom:i,left:l,right:h,top:v,width:y,x:f,y:b,update:$}}function B1(t,{window:e=re,scrollTarget:n}={}){const a=M(!1),s=()=>{if(!e)return;const o=e.document,r=de(t);if(!r)a.value=!1;else{const i=r.getBoundingClientRect();a.value=i.top<=(e.innerHeight||o.documentElement.clientHeight)&&i.left<=(e.innerWidth||o.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return J(()=>de(t),()=>s(),{immediate:!0,flush:"post"}),e&&Y(n||e,"scroll",s,{capture:!1,passive:!0}),a}const pu={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function vu(t={}){const{reactive:e=!1,target:n=re,aliasMap:a=pu,passive:s=!0,onEventFired:o=Oe}=t,r=Se(new Set),i={toJSON(){return{}},current:r},l=e?Se(i):i,h=new Set,v=new Set;function y(_,m){_ in l&&(e?l[_]=m:l[_].value=m)}function f(){r.clear();for(const _ of v)y(_,!1)}function b(_,m){var A,V;const T=(A=_.key)==null?void 0:A.toLowerCase(),G=[(V=_.code)==null?void 0:V.toLowerCase(),T].filter(Boolean);T&&(m?r.add(T):r.delete(T));for(const Z of G)v.add(Z),y(Z,m);T==="meta"&&!m?(h.forEach(Z=>{r.delete(Z),y(Z,!1)}),h.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&m&&[...r,...G].forEach(Z=>h.add(Z))}Y(n,"keydown",_=>(b(_,!0),o(_)),{passive:s}),Y(n,"keyup",_=>(b(_,!1),o(_)),{passive:s}),Y("blur",f,{passive:!0}),Y("focus",f,{passive:!0});const $=new Proxy(l,{get(_,m,A){if(typeof m!="string")return Reflect.get(_,m,A);if(m=m.toLowerCase(),m in a&&(m=a[m]),!(m in l))if(/[+_-]/.test(m)){const T=m.split(/[+_-]/g).map(H=>H.trim());l[m]=C(()=>T.every(H=>u($[H])))}else l[m]=M(!1);const V=Reflect.get(_,m,A);return e?u(V):V}});return $}var cn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(cn||(cn={}));var fu=Object.defineProperty,un=Object.getOwnPropertySymbols,_u=Object.prototype.hasOwnProperty,mu=Object.prototype.propertyIsEnumerable,dn=(t,e,n)=>e in t?fu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gu=(t,e)=>{for(var n in e||(e={}))_u.call(e,n)&&dn(t,n,e[n]);if(un)for(var n of un(e))mu.call(e,n)&&dn(t,n,e[n]);return t};const yu={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};gu({linear:xc},yu);function H1(t="history",e={}){const{initialValue:n={},removeNullishValues:a=!0,removeFalsyValues:s=!1,write:o=!0,window:r=re}=e;if(!r)return Se(n);const i=Se({});function l(){if(t==="history")return r.location.search||"";if(t==="hash"){const A=r.location.hash||"",V=A.indexOf("?");return V>0?A.slice(V):""}else return(r.location.hash||"").replace(/^#/,"")}function h(A){const V=A.toString();if(t==="history")return`${V?`?${V}`:""}${r.location.hash||""}`;if(t==="hash-params")return`${r.location.search||""}${V?`#${V}`:""}`;const T=r.location.hash||"#",H=T.indexOf("?");return H>0?`${T.slice(0,H)}${V?`?${V}`:""}`:`${T}${V?`?${V}`:""}`}function v(){return new URLSearchParams(l())}function y(A){const V=new Set(Object.keys(i));for(const T of A.keys()){const H=A.getAll(T);i[T]=H.length>1?H:A.get(T)||"",V.delete(T)}Array.from(V).forEach(T=>delete i[T])}const{pause:f,resume:b}=Gn(i,()=>{const A=new URLSearchParams("");Object.keys(i).forEach(V=>{const T=i[V];Array.isArray(T)?T.forEach(H=>A.append(V,H)):a&&T==null||s&&!T?A.delete(V):A.set(V,T)}),$(A)},{deep:!0});function $(A,V){f(),V&&y(A),r.history.replaceState(r.history.state,r.document.title,r.location.pathname+h(A)),b()}function _(){o&&$(v(),!0)}Y(r,"popstate",_,!1),t!=="history"&&Y(r,"hashchange",_,!1);const m=v();return m.keys().next().value?y(m):Object.assign(i,n),i}function bu(t={}){const{window:e=re,initialWidth:n=1/0,initialHeight:a=1/0,listenOrientation:s=!0,includeScrollbar:o=!0}=t,r=M(n),i=M(a),l=()=>{e&&(o?(r.value=e.innerWidth,i.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};return l(),nt(l),Y("resize",l,{passive:!0}),s&&Y("orientationchange",l,{passive:!0}),{width:r,height:i}}const hn=M([{route:"/about/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2023-10-09 17:31:50",author:!1,sidebar:!1,title:"关于本站"}},{route:"/friend-link-list/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2023-10-20 17:49:21",author:!1,sidebar:!1,title:""}},{route:"/full-stack/",meta:{description:"",hidden:!0,readingTime:!1,date:"2023-10-11 18:42:02",author:!1,common:!1,title:""}},{route:"/question-by-day/",meta:{description:"每天至少一道全栈题目分享，范围不限。",readingTime:!1,hidden:!0,author:!1,title:"每日一题",date:"2023-10-11 18:42:02"}},{route:"/share/",meta:{description:"",aside:!1,hidden:!0,readingTime:!1,date:"2023-10-07 17:41:07",author:!1,sidebar:!1,title:"我的分享"}},{route:"/full-stack/java/",meta:{description:"",hidden:!0,readingTime:!1,date:"2023-10-20 15:55:50",author:!1,common:!1,title:"目录"}},{route:"/question-by-day/2023/10.html",meta:{description:`

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
  |`,readingTime:!1,hidden:!0,title:"",date:"2023-11-08 17:25:57"}},{route:"/question-by-day/2023/11.html",meta:{description:`## 11-30 

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
|`,readingTime:!1,hidden:!0,title:"",date:"2023-12-07 17:07:16"}},{route:"/question-by-day/2023/12.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-12-21 11:13:59"}},{route:"/question-by-day/2023/9.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:41:07"}},{route:"/question-by-day/2023/",meta:{description:"每天至少一道面试题，范围不限。",readingTime:!1,date:"2023-12-21 11:13:59",top:1,author:!1,title:"每日一题 - 2023"}},{route:"/question-by-day/2024/1.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/10.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/11.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/12.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/2.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/3.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/4.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/5.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/6.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/7.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/8.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/9.html",meta:{description:"",readingTime:!1,hidden:!0,title:"",date:"2023-10-07 17:47:18"}},{route:"/question-by-day/2024/",meta:{description:"",readingTime:!1,date:"2023-10-07 17:41:07",author:!1,title:"每日一题 - 2024",hidden:!0}},{route:"/technology/web/acme-sh.html",meta:{description:"使用 acme.sh 部署 Let's Encrypt 泛域名证书。",categories:["工具分享"],tags:["Linux","运维"],sticky:1,title:"泛域名证书申请以及部署",date:"2023-10-18 17:23:11"}},{route:"/technology/web/",meta:{description:"",hidden:!0,readingTime:!1,date:"2023-10-11 18:42:02",author:!1,title:""}},{route:"/technology/web/wordpress-by-docker-compose.html",meta:{description:"本文将带你快速了解 docker compose 安装部署 WordPress。",categories:["建站笔记"],tags:["Linux","Docker","WordPress"],sticky:2,title:"基于DockerCompose的WordPress环境部署（附配置优化）",date:"2023-10-11 18:42:02"}},{route:"/full-stack/java/characteristic/functional.html",meta:{description:"Lambda 表达式、Stream 流、Optional 类操作分享。",tags:["Java"],category:"JAVA 学习笔记",cover:!1,title:"Java8新特性详解",date:"2023-10-20 16:13:59"}},{route:"/full-stack/java/oop/abstract.html",meta:{description:"在一个较为复杂的继承链中，祖先类更具有一般性，作为派生其他类的基类而不糊将其作为用来构造实例。",categories:["Java 学习笔记"],tags:["Java","OOP"],title:"抽象类和抽象方法",date:"2023-10-19 17:02:42"}},{route:"/technology/web/linux-lamp/first.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第一步编译安装httpd服务器",date:"2023-10-11 18:42:02"}},{route:"/technology/web/linux-lamp/",meta:{description:"",tags:["Linux","架构","运维","LAMP"],category:"Linux 运维",title:"LAMP编译安装三部曲",date:"2023-10-11 18:42:02"}},{route:"/technology/web/linux-lamp/second.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第二步编译安装mariadb数据库环境",date:"2023-10-11 18:42:02"}},{route:"/technology/web/linux-lamp/third.html",meta:{description:"",tags:["Linux","架构","运维","LAMP"],hidden:!0,category:"Linux 运维",title:"第三步编译安装PHP",date:"2023-10-11 18:42:02"}}]),ku={customSearchQuery:function(e){return e.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()}};function $u(t,e="yyyy-MM-dd hh:mm:ss"){t instanceof Date||(t=new Date(t));const n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${t.getFullYear()}`.substr(4-RegExp.$1.length)));for(const a in n)new RegExp(`(${a})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?n[a]:`00${n[a]}`.substr(`${n[a]}`.length)));return e}const wu={},Su={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pu=_n('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Cu=[Pu];function Lu(t,e){return c(),p("svg",Su,Cu)}const Mu=L(wu,[["render",Lu]]),Et=t=>(ie("data-v-3e38d8c7"),t=t(),le(),t),Vu={class:"blog-search","data-pagefind-ignore":"all"},Iu=Et(()=>d("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[d("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),xu={key:0,class:"search-tip"},Au={key:1,class:"metaKey"},Tu={class:"search-dialog"},Ou={class:"link"},Eu={class:"title"},Nu={key:0,class:"date"},Bu=["innerHTML"],Hu={class:"command-palette-logo"},Du={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Fu=Et(()=>d("span",{class:"command-palette-Label"},"Search by",-1)),zu=Et(()=>d("ul",{class:"command-palette-commands"},[d("li",null,[d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),d("span",{class:"command-palette-Label"},"to select")]),d("li",null,[d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),d("span",{class:"command-palette-Label"},"to navigate")]),d("li",null,[d("kbd",{class:"command-palette-commands-key"},[d("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[d("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[d("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),d("span",{class:"command-palette-Label"},"to close")])],-1)),ju=P({__name:"Search",setup(t){ia(I=>({"3fb90223":h.value}));const e=M([]),n=ku,{localeIndex:a,site:s}=lt(),o=C(()=>{var I;return{...n,...((I=n==null?void 0:n.locales)==null?void 0:I[a.value])||{}}}),r=C(()=>{var I;return((I=o.value)==null?void 0:I.showDate)??!0}),i=bu(),l=C(()=>i.width.value<760),h=C(()=>l.value?0:1),v=C(()=>{var I;return(I=o.value)!=null&&I.heading?o.value.heading.replace(/\{\{searchResult\}\}/,e.value.length):`Total: ${e.value.length} search results.`}),y=M("");fe(()=>{y.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const f=M(!1),b=M(""),$=vu({passive:!1,onEventFired(I){I.ctrlKey&&I.key==="k"&&I.type==="keydown"&&I.preventDefault()}}),_=$["Meta+K"],m=$["Ctrl+K"],A=$.Escape;J(_,I=>{I&&(f.value=!0)}),J(m,I=>{I&&(f.value=!0)}),J(A,I=>{I&&(f.value=!1)});function V(){if(!b.value){e.value=[];return}e.value=hn.value.filter(I=>`${I.meta.description}${I.meta.title}`.includes(b.value)).map(I=>{var R,X;return{...I,meta:{...I.meta,description:((X=(R=I.meta)==null?void 0:R.description)==null?void 0:X.replace(new RegExp(`(${b.value})`,"g"),"<mark>$1</mark>"))||""}}}),e.value.sort((I,R)=>+new Date(R.meta.date)-+new Date(I.meta.date))}const T=C(()=>{var I;return((I=o.value)==null?void 0:I.resultOptimization)??!0});J(()=>b.value,async()=>{var I,R,X;if(!((I=window==null?void 0:window.__pagefind__)!=null&&I.search))V();else{const Q=typeof o.value.customSearchQuery=="function"?o.value.customSearchQuery(b.value):b.value;await((X=(R=window==null?void 0:window.__pagefind__)==null?void 0:R.search)==null?void 0:X.call(R,Q).then(async Le=>{const st=(await Promise.all(Le.results.map(ae=>ae.data()))).map(ae=>{var be;return{route:ae.url.startsWith(s.value.base)?ae.url:Ke(ae.url),meta:{title:ae.meta.title,description:ae.excerpt,date:(be=ae==null?void 0:ae.meta)==null?void 0:be.date}}}).filter(ae=>!T.value||hn.value.some(be=>be.route===ae.route));e.value=st.filter(o.value.filter??(()=>!0))}))}ce(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(Q=>{Q.setAttribute("aria-disabled","false")})})});function H(I){I.target===I.currentTarget&&(f.value=!1)}J(()=>f.value,I=>{var R;I?ce(()=>{var X;(X=document.querySelector("div[command-dialog-mask]"))==null||X.addEventListener("click",H)}):(R=document.querySelector("div[command-dialog-mask]"))==null||R.removeEventListener("click",H)});const G=M(999),Z=M(0),q=C(()=>{const R=Z.value%Math.ceil(e.value.length/G.value)*G.value;return e.value.slice(R,R+G.value)}),N=la(),F=Ee();function ne(I){f.value=!1,F.path!==I.value&&N.go(I.value)}const{lang:pe}=lt(),se=C(()=>o.value.langReload??!0);return J(()=>pe.value,()=>{se.value&&window.location.reload()}),(I,R)=>{var X;return c(),p("div",Vu,[d("div",{class:"nav-search-btn-wait",onClick:R[0]||(R[0]=Q=>f.value=!0)},[Iu,l.value?S("",!0):(c(),p("span",xu,B(((X=o.value)==null?void 0:X.btnPlaceholder)||"Search"),1)),l.value?S("",!0):(c(),p("span",Au,B(y.value)+" K ",1))]),w(u(Me).Dialog,{visible:f.value,theme:"algolia"},ca({header:k(()=>{var Q;return[w(u(Me).Input,{value:b.value,"onUpdate:value":R[1]||(R[1]=Le=>b.value=Le),placeholder:((Q=o.value)==null?void 0:Q.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:k(()=>[d("div",Tu,[w(u(Me).List,null,{default:k(()=>[e.value.length?(c(),O(u(Me).Group,{key:1,heading:v.value},{default:k(()=>[(c(!0),p(U,null,te(q.value,Q=>(c(),O(u(Me).Item,{key:Q.route,"data-value":Q.route,onSelect:ne},{default:k(()=>[d("div",Ou,[d("div",Eu,[d("span",null,B(Q.meta.title),1),r.value&&Q.meta.date?(c(),p("span",Nu,B(u($u)(Q.meta.date,"yyyy-MM-dd")),1)):S("",!0)]),d("div",{class:"des",innerHTML:Q.meta.description},null,8,Bu)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),O(u(Me).Empty,{key:0},{default:k(()=>{var Q;return[ee(B(((Q=o.value)==null?void 0:Q.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[e.value.length?{name:"footer",fn:k(()=>[d("div",Hu,[d("a",Du,[Fu,w(Mu,{style:{width:"77px"}})])]),zu]),key:"0"}:void 0]),1032,["visible"])])}}});const Ru=L(ju,[["__scopeId","data-v-3e38d8c7"]]),Uu=P({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=D();return(n,a)=>u(e).socialLinks?(c(),O(Xe,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):S("",!0)}});const Gu=L(Uu,[["__scopeId","data-v-0ab9fa5f"]]),qu=["href"],Wu=P({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=D(),{hasSidebar:a}=_e(),{currentLang:s}=Ne();return(o,r)=>(c(),p("div",{class:z(["VPNavBarTitle",{"has-sidebar":u(a)}])},[d("a",{class:"title",href:u(n).logoLink??u(Te)(u(s).link)},[g(o.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),O(Ge,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):S("",!0),u(n).siteTitle?(c(),p(U,{key:1},[ee(B(u(n).siteTitle),1)],64)):u(n).siteTitle===void 0?(c(),p(U,{key:2},[ee(B(u(e).title),1)],64)):S("",!0),g(o.$slots,"nav-bar-title-after",{},void 0,!0)],8,qu)],2))}});const Ju=L(Wu,[["__scopeId","data-v-40a9ff07"]]),Ku={},Qu={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Zu=d("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Yu=d("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Xu=[Zu,Yu];function ed(t,e){return c(),p("svg",Qu,Xu)}const Kn=L(Ku,[["render",ed]]),td={class:"items"},nd={class:"title"},ad=P({__name:"VPNavBarTranslations",setup(t){const{theme:e}=D(),{localeLinks:n,currentLang:a}=Ne({correspondingLink:!0});return(s,o)=>u(n).length&&u(a).label?(c(),O(At,{key:0,class:"VPNavBarTranslations",icon:Kn,label:u(e).langMenuLabel||"Change language"},{default:k(()=>[d("div",td,[d("p",nd,B(u(a).label),1),(c(!0),p(U,null,te(u(n),r=>(c(),O(Ye,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):S("",!0)}});const sd=L(ad,[["__scopeId","data-v-9076a8ee"]]),od=t=>(ie("data-v-663187d2"),t=t(),le(),t),rd={class:"container"},id={class:"title"},ld={class:"content"},cd=od(()=>d("div",{class:"curtain"},null,-1)),ud={class:"content-body"},dd=P({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=fn(),{hasSidebar:n}=_e(),{frontmatter:a}=D(),s=M({});return pn(()=>{s.value={"has-sidebar":n.value,top:a.value.layout==="home"&&e.value===0}}),(o,r)=>(c(),p("div",{class:z(["VPNavBar",s.value])},[d("div",rd,[d("div",id,[w(Ju,null,{"nav-bar-title-before":k(()=>[g(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[g(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",ld,[cd,d("div",ud,[g(o.$slots,"nav-bar-content-before",{},void 0,!0),w(Ru,{class:"search"}),w(Ri,{class:"menu"}),w(sd,{class:"translations"}),w(Er,{class:"appearance"}),w(Gu,{class:"social-links"}),w(Mi,{class:"extra"}),g(o.$slots,"nav-bar-content-after",{},void 0,!0),w(Oi,{class:"hamburger",active:o.isScreenOpen,onClick:r[0]||(r[0]=i=>o.$emit("toggle-screen"))},null,8,["active"])])])])],2))}});const hd=L(dd,[["__scopeId","data-v-663187d2"]]),pd={key:0,class:"VPNavScreenAppearance"},vd={class:"text"},fd=P({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=D();return(a,s)=>u(e).appearance?(c(),p("div",pd,[d("p",vd,B(u(n).darkModeSwitchLabel||"Appearance"),1),w(It)])):S("",!0)}});const _d=L(fd,[["__scopeId","data-v-cec90d50"]]),md=P({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Ze("close-screen");return(n,a)=>(c(),O(he,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:k(()=>[ee(B(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}});const gd=L(md,[["__scopeId","data-v-c092ea1b"]]),yd={},bd={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},kd=d("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),$d=[kd];function wd(t,e){return c(),p("svg",bd,$d)}const Sd=L(yd,[["render",wd]]),Pd=P({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Ze("close-screen");return(n,a)=>(c(),O(he,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:k(()=>[ee(B(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}});const Qn=L(Pd,[["__scopeId","data-v-73d4e1b1"]]),Cd={class:"VPNavScreenMenuGroupSection"},Ld={key:0,class:"title"},Md=P({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),p("div",Cd,[e.text?(c(),p("p",Ld,B(e.text),1)):S("",!0),(c(!0),p(U,null,te(e.items,a=>(c(),O(Qn,{key:a.text,item:a},null,8,["item"]))),128))]))}});const Vd=L(Md,[["__scopeId","data-v-692f0bd6"]]),Id=["aria-controls","aria-expanded"],xd={class:"button-text"},Ad=["id"],Td={key:1,class:"group"},Od=P({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=M(!1),a=C(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(o,r)=>(c(),p("div",{class:z(["VPNavScreenMenuGroup",{open:n.value}])},[d("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:s},[d("span",xd,B(o.text),1),w(Sd,{class:"button-icon"})],8,Id),d("div",{id:a.value,class:"items"},[(c(!0),p(U,null,te(o.items,i=>(c(),p(U,{key:i.text},["link"in i?(c(),p("div",{key:i.text,class:"item"},[w(Qn,{item:i},null,8,["item"])])):(c(),p("div",Td,[w(Vd,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Ad)],2))}});const Ed=L(Od,[["__scopeId","data-v-283416cd"]]),Nd={key:0,class:"VPNavScreenMenu"},Bd=P({__name:"VPNavScreenMenu",setup(t){const{theme:e}=D();return(n,a)=>u(e).nav?(c(),p("nav",Nd,[(c(!0),p(U,null,te(u(e).nav,s=>(c(),p(U,{key:s.text},["link"in s?(c(),O(gd,{key:0,item:s},null,8,["item"])):(c(),O(Ed,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):S("",!0)}}),Hd=P({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=D();return(n,a)=>u(e).socialLinks?(c(),O(Xe,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):S("",!0)}}),Dd={class:"list"},Fd=P({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Ne({correspondingLink:!0}),a=M(!1);function s(){a.value=!a.value}return(o,r)=>u(e).length&&u(n).label?(c(),p("div",{key:0,class:z(["VPNavScreenTranslations",{open:a.value}])},[d("button",{class:"title",onClick:s},[w(Kn,{class:"icon lang"}),ee(" "+B(u(n).label)+" ",1),w(Cn,{class:"icon chevron"})]),d("ul",Dd,[(c(!0),p(U,null,te(u(e),i=>(c(),p("li",{key:i.link,class:"item"},[w(he,{class:"link",href:i.link},{default:k(()=>[ee(B(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):S("",!0)}});const zd=L(Fd,[["__scopeId","data-v-a9da4c8b"]]),jd={class:"container"},Rd=P({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=M(null),n=kn(Ve?document.body:null);return(a,s)=>(c(),O(Je,{name:"fade",onEnter:s[0]||(s[0]=o=>n.value=!0),onAfterLeave:s[1]||(s[1]=o=>n.value=!1)},{default:k(()=>[a.open?(c(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[d("div",jd,[g(a.$slots,"nav-screen-content-before",{},void 0,!0),w(Bd,{class:"menu"}),w(zd,{class:"translations"}),w(_d,{class:"appearance"}),w(Hd,{class:"social-links"}),g(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):S("",!0)]),_:3}))}});const Ud=L(Rd,[["__scopeId","data-v-253d170e"]]),Gd={key:0,class:"VPNav"},qd=P({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:a}=pr(),{frontmatter:s}=D(),o=C(()=>s.value.navbar!==!1);return St("close-screen",n),ge(()=>{Ve&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(r,i)=>o.value?(c(),p("header",Gd,[w(hd,{"is-screen-open":u(e),onToggleScreen:u(a)},{"nav-bar-title-before":k(()=>[g(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[g(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[g(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[g(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),w(Ud,{open:u(e)},{"nav-screen-content-before":k(()=>[g(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[g(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):S("",!0)}});const Wd=L(qd,[["__scopeId","data-v-381a84df"]]),Jd=t=>(ie("data-v-8128444e"),t=t(),le(),t),Kd=["role","tabindex"],Qd=Jd(()=>d("div",{class:"indicator"},null,-1)),Zd={key:1,class:"items"},Yd=P({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:a,isLink:s,isActiveLink:o,hasActiveLink:r,hasChildren:i,toggle:l}=Oa(C(()=>e.item)),h=C(()=>i.value?"section":"div"),v=C(()=>s.value?"a":"div"),y=C(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),f=C(()=>s.value?void 0:"button"),b=C(()=>[[`level-${e.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":s.value},{"is-active":o.value},{"has-active":r.value}]);function $(m){"key"in m&&m.key!=="Enter"||!e.item.link&&l()}function _(){e.item.link&&l()}return(m,A)=>{const V=Ce("VPSidebarItem",!0);return c(),O($e(h.value),{class:z(["VPSidebarItem",b.value])},{default:k(()=>[m.item.text?(c(),p("div",ze({key:0,class:"item",role:f.value},ua(m.item.items?{click:$,keydown:$}:{},!0),{tabindex:m.item.items&&0}),[Qd,m.item.link?(c(),O(he,{key:0,tag:v.value,class:"link",href:m.item.link,rel:m.item.rel,target:m.item.target},{default:k(()=>[(c(),O($e(y.value),{class:"text",innerHTML:m.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),O($e(y.value),{key:1,class:"text",innerHTML:m.item.text},null,8,["innerHTML"])),m.item.collapsed!=null?(c(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:_,onKeydown:da(_,["enter"]),tabindex:"0"},[w(Vt,{class:"caret-icon"})],32)):S("",!0)],16,Kd)):S("",!0),m.item.items&&m.item.items.length?(c(),p("div",Zd,[m.depth<5?(c(!0),p(U,{key:0},te(m.item.items,T=>(c(),O(V,{key:T.text,item:T,depth:m.depth+1},null,8,["item","depth"]))),128)):S("",!0)])):S("",!0)]),_:1},8,["class"])}}});const Xd=L(Yd,[["__scopeId","data-v-8128444e"]]),Zn=t=>(ie("data-v-d5ea00eb"),t=t(),le(),t),e1=Zn(()=>d("div",{class:"curtain"},null,-1)),t1={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},n1=Zn(()=>d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),a1=P({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=_e(),a=t,s=M(null),o=kn(Ve?document.body:null);return J([a,s],()=>{var r;a.open?(o.value=!0,(r=s.value)==null||r.focus()):o.value=!1},{immediate:!0,flush:"post"}),(r,i)=>u(n)?(c(),p("aside",{key:0,class:z(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:s,onClick:i[0]||(i[0]=ha(()=>{},["stop"]))},[e1,d("nav",t1,[n1,g(r.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),p(U,null,te(u(e),l=>(c(),p("div",{key:l.text,class:"group"},[w(Xd,{item:l,depth:0},null,8,["item"])]))),128)),g(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):S("",!0)}});const s1=L(a1,[["__scopeId","data-v-d5ea00eb"]]),o1=P({__name:"VPSkipLink",setup(t){const e=Ee(),n=M();J(()=>e.path,()=>n.value.focus());function a({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const r=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",r)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",r),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(c(),p(U,null,[d("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a}," Skip to content ")],64))}});const r1=L(o1,[["__scopeId","data-v-fbd4671a"]]),i1=P({__name:"Layout",setup(t){const{isOpen:e,open:n,close:a}=_e(),s=Ee();J(()=>s.path,a),Ta(e,a);const{frontmatter:o}=D(),r=pa(),i=C(()=>!!r["home-hero-image"]);return St("hero-image-slot-exists",i),(l,h)=>{const v=Ce("Content");return u(o).layout!==!1?(c(),p("div",{key:0,class:z(["Layout",u(o).pageClass])},[g(l.$slots,"layout-top",{},void 0,!0),w(r1),w(ga,{class:"backdrop",show:u(e),onClick:u(a)},null,8,["show","onClick"]),w(Wd,null,{"nav-bar-title-before":k(()=>[g(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[g(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[g(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[g(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[g(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[g(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),w(hr,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),w(s1,{open:u(e)},{"sidebar-nav-before":k(()=>[g(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[g(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),w(Uo,{"data-pagefind-body":""},{"page-top":k(()=>[g(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[g(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[g(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[g(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[g(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[g(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[g(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[g(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[g(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[g(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[g(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[g(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[g(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[g(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[g(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[g(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[g(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[g(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[g(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[g(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),w(Ko),g(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),O(v,{key:1}))}}});const l1=L(i1,[["__scopeId","data-v-e1db2832"]]),c1={},u1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},d1=d("path",{d:"M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"},null,-1),h1=[d1];function p1(t,e){return c(),p("svg",u1,h1)}const v1=L(c1,[["render",p1]]);const f1={class:"profile"},_1={class:"avatar"},m1=["src","alt"],g1={class:"data"},y1={class:"name"},b1={key:0,class:"affiliation"},k1={key:0,class:"title"},$1={key:1,class:"at"},w1=["innerHTML"],S1={key:2,class:"links"},P1={key:0,class:"sp"},C1=P({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(t){return(e,n)=>(c(),p("article",{class:z(["VPTeamMembersItem",[e.size]])},[d("div",f1,[d("figure",_1,[d("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,m1)]),d("div",g1,[d("h1",y1,B(e.member.name),1),e.member.title||e.member.org?(c(),p("p",b1,[e.member.title?(c(),p("span",k1,B(e.member.title),1)):S("",!0),e.member.title&&e.member.org?(c(),p("span",$1," @ ")):S("",!0),e.member.org?(c(),O(he,{key:2,class:z(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:k(()=>[ee(B(e.member.org),1)]),_:1},8,["class","href"])):S("",!0)])):S("",!0),e.member.desc?(c(),p("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,w1)):S("",!0),e.member.links?(c(),p("div",S1,[w(Xe,{links:e.member.links},null,8,["links"])])):S("",!0)])]),e.member.sponsor?(c(),p("div",P1,[w(he,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:k(()=>[w(v1,{class:"sp-icon"}),ee(" Sponsor ")]),_:1},8,["href"])])):S("",!0)],2))}});const L1=L(C1,[["__scopeId","data-v-b701d506"]]),M1={class:"container"},V1=P({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(t){const e=t,n=C(()=>[e.size,`count-${e.members.length}`]);return(a,s)=>(c(),p("div",{class:z(["VPTeamMembers",n.value])},[d("div",M1,[(c(!0),p(U,null,te(a.members,o=>(c(),p("div",{key:o.name,class:"item"},[w(L1,{size:a.size,member:o},null,8,["size","member"])]))),128))])],2))}});const D1=L(V1,[["__scopeId","data-v-b612ab98"]]),F1={Layout:l1,enhanceApp:({app:t})=>{t.component("Badge",fa)}};export{D1 as V,Y as a,bu as b,N1 as c,hu as d,de as e,x1 as f,Mc as g,A1 as h,Ot as i,E1 as j,O1 as k,H1 as l,B1 as m,F1 as n,T1 as o,Ka as p,tt as t,tu as u};
