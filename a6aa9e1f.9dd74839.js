(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{289:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(297),c=t(306),o=t(295);var i=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(o.a,{className:"pagination-nav__link",to:t},n.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(o.a,{className:"pagination-nav__link",to:r},n.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items;return n.a.createElement(l.a,{title:"Blog",description:"Blog"},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})),n.a.createElement(i,{metadata:a})))))}},292:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var r=t(0),n=t.n(r);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=n.a.createContext({}),s=function(e){var a=n.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o({},a,{},e)),t},u=function(e){var a=s(e.components);return n.a.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},f=Object(r.forwardRef)((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return t?n.a.createElement(d,o({ref:a},m,{components:t})):n.a.createElement(d,o({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=f;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var m=2;m<l;m++)c[m]=t[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},303:function(e,a,t){"use strict";var r=t(1),n=t(0),l=t.n(n),c=t(295),o=t(305),i=t(9),m=(t(123),function(e){return function(a){var t=a.id,r=Object(i.a)(a,["id"]);return t?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#"),r.children):l.a.createElement(e,r)}}),s=t(124),u=t.n(s);a.a={code:function(e){var a=e.children;return"string"==typeof a?l.a.createElement(o.a,e):a},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e)},pre:function(e){return l.a.createElement("pre",Object(r.a)({className:u.a.mdxCodeBlock},e))},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")}},306:function(e,a,t){"use strict";t(67);var r=t(0),n=t.n(r),l=t(293),c=t.n(l),o=t(292),i=t(295),m=t(303),s=t(126),u=t.n(s),p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,s,f=e.children,d=e.frontMatter,v=e.metadata,g=e.truncated,E=e.isBlogPostPage,h=void 0!==E&&E,b=v.date,y=v.permalink,N=v.tags,O=d.author,_=d.title,w=d.author_url||d.authorURL,k=d.author_title||d.authorTitle,j=d.author_image_url||d.authorImageURL;return n.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=b.substring(0,10).split("-"),r=t[0],l=p[parseInt(t[1],10)-1],s=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},h?_:n.a.createElement(i.a,{to:y},_)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},l," ",s,", ",r)),n.a.createElement("div",{className:"avatar margin-bottom--md"},j&&n.a.createElement("a",{className:"avatar__photo-link",href:w,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:j,alt:O})),n.a.createElement("div",{className:"avatar__intro"},O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},O)),n.a.createElement("small",{className:"avatar__subtitle"},k)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:m.a},f)),(N.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:v.permalink,"aria-label":"Read more about "+_},n.a.createElement("strong",null,"Read More")))))}}}]);