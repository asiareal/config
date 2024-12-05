"use strict";(self.webpackChunk_asiareal_config=self.webpackChunk_asiareal_config||[]).push([[775],{452:(e,t,n)=>{function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(n(758));function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.default.createContext({}),u=function(e){var t=i.default.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.default.createElement(i.default.Fragment,{},t)}},d=i.default.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(a,".").concat(d)]||s[d]||p[d]||o;return n?i.default.createElement(g,l(l({ref:t},c),{},{components:n})):i.default.createElement(g,l({ref:t},c))}));d.displayName="MDXCreateElement",t.xA=function(e){var t=u(e.components);return i.default.createElement(s.Provider,{value:t},e.children)},t.yg=function(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var f=2;f<o;f++)a[f]=n[f];return i.default.createElement.apply(null,a)}return i.default.createElement.apply(null,n)}},2834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>f,toc:()=>u});var r=n(5890),i=n(5045),o=(n(758),n(452)),a=["components"],c={sidebar_label:"\u8bf4\u660e",sidebar_position:0},l="@asiareal/config-editorconfig",f={unversionedId:"editorconfig/docs/index",id:"editorconfig/docs/index",title:"@asiareal/config-editorconfig",description:".editorconfig \u914d\u7f6e\u6587\u4ef6",source:"@site/packages/editorconfig/docs/index.md",sourceDirName:"editorconfig/docs",slug:"/editorconfig/docs/",permalink:"/config/editorconfig/docs/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"\u8bf4\u660e",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"\u8bf4\u660e",permalink:"/config/prettier/docs/"}},s={},u=[],p={toc:u},d="wrapper";function g(e){var t=e.components,n=(0,i.A)(e,a);return(0,o.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"asiarealconfig-editorconfig"},"@asiareal/config-editorconfig"),(0,o.yg)("p",null,".editorconfig \u914d\u7f6e\u6587\u4ef6"),(0,o.yg)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.yg)("p",null,"\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",(0,o.yg)("inlineCode",{parentName:"p"},".editorconfig")," \u6587\u4ef6\uff0c\u6dfb\u52a0\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ini"},"root = true\n\n[*]\nindent_style = space\nindent_size = 2\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false\n\n[*.mdx]\ntrim_trailing_whitespace = false\n")))}g.isMDXComponent=!0}}]);