(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=(n(0),n(627)),r=n(631),i=n(632);const l={id:"style-orientation",title:"Orientation",sidebar_label:"Orientation"},c={unversionedId:"docs/style-orientation",id:"version-7.25.4/docs/style-orientation",isDocsHomePage:!1,title:"Orientation",description:"Locking orientation",source:"@site/versioned_docs/version-7.25.4/docs/style-orientation.mdx",slug:"/docs/style-orientation",permalink:"/react-native-navigation/7.25.4/docs/style-orientation",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.25.4/docs/style-orientation.mdx",version:"7.25.4",sidebar_label:"Orientation",sidebar:"version-7.25.4/docs",previous:{title:"StatusBar",permalink:"/react-native-navigation/7.25.4/docs/style-statusBar"},next:{title:"Animations",permalink:"/react-native-navigation/7.25.4/docs/style-animations"}},s=[{value:"Locking orientation",id:"locking-orientation",children:[]},{value:"Changing orientation dynamically",id:"changing-orientation-dynamically",children:[]}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return Object(o.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"locking-orientation"},"Locking orientation"),Object(o.b)("p",null,"Orientation can be locked either in the layout level, or across the app via default options. You can declare orientations you'd like your app to support in default options."),Object(o.b)(r.a,{defaultValue:"defaultOptions",values:[{label:"Locking orientation in default options",value:"defaultOptions"},{label:"Locking root layout orientation",value:"root"},{label:"Showing landscape modal",value:"modal"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"defaultOptions",mdxType:"TabItem"},Object(o.b)("p",null,"Setting orientation in default options will affect all screens in all hierarchy levels. It's still possible to override orientation for specific screens."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setDefaultOptions({\n  layout: {\n    orientation: ['portrait'],\n  },\n});\n"))),Object(o.b)(i.a,{value:"root",mdxType:"TabItem"},Object(o.b)("p",null,"Applying orientation in the root level will affect all screens in the root hierarchy level. It ",Object(o.b)("strong",{parentName:"p"},"will not")," apply to modals."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      options: {\n        layout: {\n          orientation: ['portrait']\n        }\n      },\n      children: [\n        ...\n      ]\n    }\n  }\n});\n"))),Object(o.b)(i.a,{value:"modal",mdxType:"TabItem"},Object(o.b)("p",null,"The following example demonstrates how to show a modal in landscape orientation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.showModal({\n  component: {\n    name: 'VideoPlayer'\n    options: {\n      layout: {\n        orientation: ['landscape']\n      }\n    }\n  }\n});\n")))),Object(o.b)("h2",{id:"changing-orientation-dynamically"},"Changing orientation dynamically"),Object(o.b)("p",null,"Changing orientation dynamically through ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.mergeOption()")," is supported only on Android."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  layout: {\n    orientation: ['landscape'],\n  },\n});\n")))}d.isMDXComponent=!0},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},628:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},629:function(e,t,n){"use strict";var a=n(0),o=n(630);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},630:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},631:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(629),i=n(628),l=n(55),c=n.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:d,className:b}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(r.a)(),[y,v]=Object(a.useState)(l),g=a.Children.toArray(e.children),O=[];if(null!=d){const e=m[d];null!=e&&e!==y&&p.some((t=>t.value===e))&&v(e)}const h=e=>{const t=e.target,n=O.indexOf(t),a=g[n].props.value;v(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&o<=i&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},j=e=>{var t;let n;switch(e.keyCode){case u:{const t=O.indexOf(e.target)+1;n=O[t]||O[0];break}case s:{const t=O.indexOf(e.target)-1;n=O[t]||O[O.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},p.map((e=>{let{value:t,label:n}=e;return o.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:h,onClick:h},n)}))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},632:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){let{children:t,hidden:n,className:a}=e;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);