(self.webpackChunk_asiareal_config=self.webpackChunk_asiareal_config||[]).push([[420,714],{8884:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ke});var a=n(758),o=n(8835),i=n(8185),r=n(6750),l=n(6802),d=n(7957),s=n(4019),c=n(3803),u=n(7985),m=n(4191),b=n(5117),p=n(5211);var h=n(1155),v=n.n(h),f=n(5987).A;function A(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),o=n[0],i=n[1],r=(0,a.useRef)(!1),l=(0,b.gk)(),d=l.startScroll,s=l.cancelScroll;return(0,b.Mq)((function(e,n){var a=e.scrollY,o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(s(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,p.$)((function(e){e.location.hash&&(r.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return f("button",{"aria-label":(0,m.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",r.G.common.backToTopButton,v().backToTopButton,t&&v().backToTopButtonShow),type:"button",onClick:n})}var g=n(1270),_=n(5557),C=n(6880),k=n(8949),S=n(7191),x=n(5890),T=n(5987).A;function N(e){return T("svg",(0,x.A)({width:"20",height:"20","aria-hidden":"true"},e),T("g",{fill:"#7a7a7a"},T("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),T("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var I=n(7811),w=n.n(I),y=n(5987).A;function B(e){var t=e.onClick;return y("button",{type:"button",title:(0,m.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",w().collapseSidebarButton),onClick:t},y(N,{className:w().collapseSidebarButtonIcon}))}var L=n(4506),H=n(5045),M=n(7940),E=n(5987).A,P=Symbol("EmptyContext"),W=a.createContext(P);function G(e){var t=e.children,n=(0,a.useState)(null),o=n[0],i=n[1],r=(0,a.useMemo)((function(){return{expandedItem:o,setExpandedItem:i}}),[o]);return E(W.Provider,{value:r},t)}var F=n(9629),R=n(9516),V=n(3203),D=n(8687),z=n(5987).A,J=["item","onItemClick","activePath","level","index"];function Y(e){var t=e.categoryLabel,n=e.onClick;return z("button",{"aria-label":(0,m.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function Z(e){var t=e.item,n=e.onItemClick,i=e.activePath,l=e.level,s=e.index,c=(0,H.A)(e,J),u=t.items,m=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,k.p)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,D.A)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,d._o)(e):void 0}),[e,t])}(t),A=(0,d.w8)(t,i),g=(0,R.ys)(h,i),_=(0,F.u)({initialState:function(){return!!b&&(!A&&t.collapsed)}}),C=_.collapsed,S=_.setCollapsed,T=function(){var e=(0,a.useContext)(W);if(e===P)throw new M.dV("DocSidebarItemsExpandedStateProvider");return e}(),N=T.expandedItem,I=T.setExpandedItem,w=function(e){void 0===e&&(e=!C),I(e?null:s),S(e)};return function(e){var t=e.isActive,n=e.collapsed,o=e.updateCollapsed,i=(0,M.ZC)(t);(0,a.useEffect)((function(){t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:A,collapsed:C,updateCollapsed:w}),(0,a.useEffect)((function(){b&&null!=N&&N!==s&&v&&S(!0)}),[b,N,s,S,v]),z("li",{className:(0,o.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},p)},z("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},z(V.A,(0,x.A)({className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":A}),onClick:b?function(e){null==n||n(t),h?w(!1):(e.preventDefault(),w())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!C:void 0,href:b?null!=f?f:"#":f},c),m),h&&b&&z(Y,{categoryLabel:m,onClick:function(e){e.preventDefault(),w()}})),z(F.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},z(se,{items:u,tabIndex:C?-1:0,onItemClick:n,activePath:i,level:l+1})))}var U=n(1918),q=n(6081),j=n(9794),O=n.n(j),K=n(5987).A,X=["item","onItemClick","activePath","level","index"];function $(e){var t=e.item,n=e.onItemClick,a=e.activePath,i=e.level,l=(e.index,(0,H.A)(e,X)),s=t.href,c=t.label,u=t.className,m=t.autoAddBaseUrl,b=(0,d.w8)(t,a),p=(0,U.A)(s);return K("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:c},K(V.A,(0,x.A)({className:(0,o.A)("menu__link",!p&&O().menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:s},p&&{onClick:n?function(){return n(t)}:void 0},l),c,!p&&K(q.A,null)))}var Q=n(1293),ee=n.n(Q),te=n(5987).A;function ne(e){var t=e.item,n=e.level,a=e.index,i=t.value,l=t.defaultStyle,d=t.className;return te("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),l&&[ee().menuHtmlItem,"menu__list-item"],d),key:a,dangerouslySetInnerHTML:{__html:i}})}var ae=n(5987).A,oe=["item"];function ie(e){var t=e.item,n=(0,H.A)(e,oe);switch(t.type){case"category":return ae(Z,(0,x.A)({item:t},n));case"html":return ae(ne,(0,x.A)({item:t},n));default:return ae($,(0,x.A)({item:t},n))}}var re=n(5987).A,le=["items"];function de(e){var t=e.items,n=(0,H.A)(e,le);return re(G,null,t.map((function(e,t){return re(ie,(0,x.A)({key:t,item:e,index:t},n))})))}const se=(0,a.memo)(de);var ce=n(105),ue=n.n(ce),me=n(5987).A;function be(e){var t=e.path,n=e.sidebar,i=e.className,l=function(){var e=(0,L.Mj)().isActive,t=(0,a.useState)(e),n=t[0],o=t[1];return(0,b.Mq)((function(t){var n=t.scrollY;e&&o(0===n)}),[e]),e&&n}();return me("nav",{"aria-label":(0,m.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",ue().menu,l&&ue().menuWithAnnouncementBar,i)},me("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},me(se,{items:n,activePath:t,level:1})))}var pe=n(3187),he=n.n(pe),ve=n(5987).A;function fe(e){var t=e.path,n=e.sidebar,a=e.onCollapse,i=e.isHidden,r=(0,k.p)(),l=r.navbar.hideOnScroll,d=r.docs.sidebar.hideable;return ve("div",{className:(0,o.A)(he().sidebar,l&&he().sidebarWithHideableNavbar,i&&he().sidebarHidden)},l&&ve(S.A,{tabIndex:-1,className:he().sidebarLogo}),ve(be,{path:t,sidebar:n}),d&&ve(B,{onClick:a}))}const Ae=a.memo(fe);var ge=n(355),_e=n(9403),Ce=n(5987).A,ke=function(e){var t=e.sidebar,n=e.path,a=(0,_e.M)();return Ce("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},Ce(se,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function Se(e){return Ce(ge.GX,{component:ke,props:e})}const xe=a.memo(Se);var Te=n(5987).A,Ne=n(758).Fragment;function Ie(e){var t=(0,C.l)(),n="mobile"===t;return Te(Ne,null,("desktop"===t||"ssr"===t)&&Te(Ae,e),n&&Te(xe,e))}var we=n(6348),ye=n.n(we),Be=n(5987).A;function Le(e){var t=e.toggleSidebar;return Be("div",{className:ye().expandButton,title:(0,m.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},Be(N,{className:ye().expandButtonIcon}))}var He=n(2397),Me=n.n(He),Ee=n(5987).A;function Pe(e){var t,n=e.children,o=(0,c.t)();return Ee(a.Fragment,{key:null!=(t=null==o?void 0:o.name)?t:"noSidebar"},n)}function We(e){var t=e.sidebar,n=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,l=(0,_.zy)().pathname,d=(0,a.useState)(!1),s=d[0],c=d[1],u=(0,a.useCallback)((function(){s&&c(!1),!s&&(0,g.O)()&&c(!0),i((function(e){return!e}))}),[i,s]);return Ee("aside",{className:(0,o.A)(r.G.docs.docSidebarContainer,Me().docSidebarContainer,n&&Me().docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(Me().docSidebarContainer)&&n&&c(!0)}},Ee(Pe,null,Ee("div",{className:(0,o.A)(Me().sidebarViewport,s&&Me().sidebarViewportHidden)},Ee(Ie,{sidebar:t,path:l,onCollapse:u,isHidden:s}),s&&Ee(Le,{toggleSidebar:u}))))}var Ge=n(1076),Fe=n.n(Ge),Re=n(5987).A;function Ve(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,c.t)();return Re("main",{className:(0,o.A)(Fe().docMainContainer,(t||!a)&&Fe().docMainContainerEnhanced)},Re("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",Fe().docItemWrapper,t&&Fe().docItemWrapperEnhanced)},n))}var De=n(5592),ze=n.n(De),Je=n(5987).A;function Ye(e){var t=e.children,n=(0,c.t)(),o=(0,a.useState)(!1),i=o[0],r=o[1];return Je(u.A,{wrapperClassName:ze().docsWrapper},Je(A,null),Je("div",{className:ze().docPage},n&&Je(We,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:r}),Je(Ve,{hiddenSidebarContainer:i},t)))}var Ze=n(3420),Ue=n(3997),qe=n(5987).A,je=n(758).Fragment;function Oe(e){var t=e.versionMetadata;return qe(je,null,qe(Ue.A,{version:t.version,tag:(0,l.tU)(t.pluginId,t.version)}),qe(i.be,null,t.noIndex&&qe("meta",{name:"robots",content:"noindex, nofollow"})))}function Ke(e){var t=e.versionMetadata,n=(0,d.mz)(e);if(!n)return qe(Ze.default,null);var a=n.docElement,l=n.sidebarName,u=n.sidebarItems;return qe(je,null,qe(Oe,e),qe(i.e3,{className:(0,o.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},qe(s.n,{version:t},qe(c.V,{name:l,items:u},qe(Ye,null,a)))))}},3420:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});n(758);var a=n(4191),o=n(8185),i=n(7985),r=n(5987).A,l=n(758).Fragment;function d(){return r(l,null,r(o.be,{title:(0,a.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),r(i.A,null,r("main",{className:"container margin-vert--xl"},r("div",{className:"row"},r("div",{className:"col col--6 col--offset-3"},r("h1",{className:"hero__title"},r(a.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r("p",null,r(a.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r("p",null,r(a.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4019:(e,t,n)=>{"use strict";n.d(t,{n:()=>l,r:()=>d});var a=n(758),o=n(7940),i=n(5987).A,r=a.createContext(null);function l(e){var t=e.children,n=e.version;return i(r.Provider,{value:n},t)}function d(){var e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocsVersionProvider");return e}},1155:e=>{e.exports={backToTopButton:"backToTopButton__jwY",backToTopButtonShow:"backToTopButtonShow_ACZr"}},1076:e=>{e.exports={docMainContainer:"docMainContainer_rlJN",docMainContainerEnhanced:"docMainContainerEnhanced_VpWm",docItemWrapperEnhanced:"docItemWrapperEnhanced_JwSc"}},6348:e=>{e.exports={expandButton:"expandButton_nTzb",expandButtonIcon:"expandButtonIcon_T7Wh"}},2397:e=>{e.exports={docSidebarContainer:"docSidebarContainer_ATRg",docSidebarContainerHidden:"docSidebarContainerHidden_h45u",sidebarViewport:"sidebarViewport_t2rh"}},5592:e=>{e.exports={docPage:"docPage_ISI5",docsWrapper:"docsWrapper_raYg","themedComponent--light":"themedComponent--light_Jf9Z"}},7811:e=>{e.exports={collapseSidebarButton:"collapseSidebarButton__W6s",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_rHr0"}},105:e=>{e.exports={menu:"menu_iC79",menuWithAnnouncementBar:"menuWithAnnouncementBar_awsk"}},3187:e=>{e.exports={sidebar:"sidebar_rqfZ",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_xzk9",sidebarHidden:"sidebarHidden_wwZk",sidebarLogo:"sidebarLogo_Howb"}},1293:e=>{e.exports={menuHtmlItem:"menuHtmlItem_RJMC"}},9794:e=>{e.exports={menuExternalLink:"menuExternalLink_rrJy"}}}]);