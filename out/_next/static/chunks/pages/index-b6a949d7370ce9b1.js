(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(i.AmpStateContext))};var a,r=(a=n(7294))&&a.__esModule?a:{default:a},i=n(8e3);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,s=void 0!==i&&i;return n||r&&s}},2717:function(e,t,n){"use strict";n(930);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294)),i=(a=n(1585))&&a.__esModule?a:{default:a},s=n(8e3),o=n(5850),c=n(5646);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var d=f[c];if(r.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var u=r.props[d],h=a[d]||new Set;"name"===d&&s||!h.has(u)?(h.add(u),a[d]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var h=function(e){var t=e.children,n=r.useContext(s.AmpStateContext),a=r.useContext(o.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:u,headManager:a,inAmpMode:c.isInAmpMode(n)},t)};t.default=h},1585:function(e,t,n){"use strict";var a=n(7980),r=n(3227),i=n(8361),s=(n(2191),n(5971)),o=n(2715),c=n(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294));var f=function(e){s(n,e);var t=l(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},9222:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(9008),r=n(5893);function i(e){var t=e.children,n=e.icon,a=e.title;return(0,r.jsxs)("div",{className:"container mx-auto flex sm:flex-row flex-col sm:py-6 py-4 px-4 border-b",children:[(0,r.jsxs)("div",{className:"font-medium flex-none text-orange-500 sm:w-48 md:w-56 lg:w-64 mb-2 sm:mb-0 sm:self-center",children:[(0,r.jsx)("i",{className:n}),"\xa0 ",a]}),(0,r.jsx)("div",{className:"font-light text-base",children:t})]})}var s=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Dao An CV"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{className:"bg-blue-600 text-white",children:(0,r.jsxs)("div",{className:"container mx-auto sm:py-10 py-6 flex sm:flex-row flex-col justify-around sm:space-y-0 space-y-3",children:[(0,r.jsx)("img",{className:"rounded-full sm:w-24 w-20 self-center",src:"/av1.jpg"}),(0,r.jsxs)("div",{className:"self-center",children:[(0,r.jsx)("div",{className:"font-semibold text-2xl",children:"Dao An"}),(0,r.jsx)("div",{className:"font-medium",children:"Mobile Developer"}),(0,r.jsx)("div",{className:"font-medium",children:"Ha Noi, Viet Nam"})]}),(0,r.jsxs)("div",{className:"self-center space-y-1 text-sm flex flex-col",children:[(0,r.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"mailto:daoan1412@gmail.com",children:[(0,r.jsx)("i",{className:"fas fa-envelope"}),"\xa0  daoan1412@gmail.com"]}),(0,r.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"tel:+84967670265",children:[(0,r.jsx)("i",{className:"fas fa-phone"}),"\xa0  0967670265"]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("i",{className:"fas fa-birthday-cake"}),"\xa0  14-12-1994"]})]})]})}),(0,r.jsxs)(i,{title:"Career Profile",icon:"fas fa-user",children:[(0,r.jsx)("div",{children:"Mobile developer with 2 year 7 months experience. I work with iOS, Android and Flutter."}),(0,r.jsx)("div",{children:"Having ability to build the backend with common functions, full basic flow to communicate between backend and client"}),(0,r.jsx)("div",{children:"Learning new languages or platforms quickly with a positive attitude. Can join in all process of product development from initialize to store release"})]}),(0,r.jsxs)(i,{title:"Experience",icon:"fas fa-briefcase",children:[(0,r.jsx)("div",{className:"font-semibold",children:"Developer at Techmaster"}),(0,r.jsx)("div",{className:"italic font-light",children:"March 2019 - May 2020"}),(0,r.jsx)("div",{className:"font-semibold",children:"Developer at CMC CIST"}),(0,r.jsx)("div",{className:"italic font-light",children:"July 2020 - Present"})]}),(0,r.jsxs)(i,{title:"My Product",icon:"fas fa-th",children:[(0,r.jsx)("div",{className:"mb-2",children:"My own product with Full-Stack operations"}),(0,r.jsx)("div",{className:"font-semibold",children:"Click & See"}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:"https://clickandsee.net/",children:"https://clickandsee.net/"})]}),(0,r.jsxs)(i,{title:"Repository",icon:"fas fa-code-branch",children:[(0,r.jsx)("div",{className:"font-semibold",children:"Github"}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline mb-2",href:"https://github.com/daoan1412",children:"https://github.com/daoan1412"}),(0,r.jsx)("div",{className:"font-semibold mt-2",children:"NPM"}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:"https://www.npmjs.com/package/redis-trie-vi",children:"https://www.npmjs.com/package/redis-trie-vi"})]}),(0,r.jsxs)(i,{title:"Key Skills",icon:"fas fa-key",children:[(0,r.jsx)("div",{children:"Flutter - good"}),(0,r.jsx)("div",{children:"Android - good"}),(0,r.jsx)("div",{children:"iOS - good"}),(0,r.jsx)("div",{children:"Rust - good"}),(0,r.jsx)("div",{children:"Git - good"}),(0,r.jsx)("div",{children:".NET (back end) - good"}),(0,r.jsx)("div",{children:"React Native, ReactJS, NextJS - intermediate"}),(0,r.jsx)("div",{children:"English - intermediate"}),(0,r.jsxs)("div",{className:"mt-4",children:["NodeJS (Auth, RESTful API, SocketIO, GraphQL)",(0,r.jsx)("br",{}),"Firebase (Authentication, Database, Functions, Storage, Hosting, Cloud Messaging) ",(0,r.jsx)("br",{}),"Database (Realm, Couchbase, PostgreSQL) ",(0,r.jsx)("br",{}),"DevOps: linux, nginx, docker, bashscript, python ... ",(0,r.jsx)("br",{})]})]}),(0,r.jsxs)(i,{title:"Projects",icon:"fas fa-project-diagram",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-semibold",children:"Click & See"}),(0,r.jsx)("span",{children:"\xa0 (my product, contribution rate 100%) The app makes learning new words fun (Rust - 20%; Kotlin, Swift - 80%, .NET - Backend, Offline Sync, firebase crashlytics, authentication)"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("span",{className:"font-semibold",children:"CIVAMS Face Admin"}),(0,r.jsx)("span",{children:"\xa0 (contribution rate 100%) The app manages employee information, photo data of facial angles for CIVAMS Face timekeeping system"})," \xa0",(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline mt-4",href:"https://youtu.be/9P2tSm4tupY",children:"(Video demo)"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("span",{className:"font-semibold",children:"CMC ID Card Reader"}),(0,r.jsx)("span",{children:"\xa0 (contribution rate 90%) The mobile SDK for reading and validating citizen identity information CMC CCCD SDK"})," \xa0",(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline mt-4",href:"https://drive.google.com/file/d/1xzCaN6eX1xe2ihkV1n2jcAwxPmSPUDDG/view?usp=sharing",children:"(Video demo)"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("span",{className:"font-semibold",children:"S-OTP"}),(0,r.jsx)("span",{children:"\xa0 (contribution rate 100%) The app for generates a 2-Step Verification code on your phone."})," \xa0"]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("span",{className:"font-semibold",children:"Livechat"}),(0,r.jsx)("span",{children:"\xa0 (contribution rate 100%) A website that connects users with chatbots and agents."})," \xa0"]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("span",{className:"font-semibold",children:"CIVAMS Face Terminal"}),(0,r.jsx)("span",{children:"\xa0 (contribution rate 100%) The app for access control, online and offline facial recognition combined with time attendance."})," \xa0"]})]}),(0,r.jsxs)(i,{title:"Awards",icon:"fas fa-award",children:[(0,r.jsx)("div",{children:"Best Performer of the Year 2020 - CMC CIST"}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline mt-4",href:"https://drive.google.com/drive/folders/1J0CkqNbmYpPF2xw6PjQ9yKs43t_8ExG0?usp=sharing",children:"My certificates"})]}),(0,r.jsxs)(i,{title:"Education",icon:"fas fa-graduation-cap",children:[(0,r.jsx)("div",{className:"font-semibold",children:"Hanoi University of Pharmacy"}),(0,r.jsx)("div",{className:"font-light italic",children:"2012 - 2017"}),(0,r.jsx)("div",{className:"mt-4 font-light",children:"Good graduation"})]}),(0,r.jsx)("div",{className:"pt-8"})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9222)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);