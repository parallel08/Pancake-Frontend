"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9391],{16519:function(n,r,t){t.d(r,{Zj:function(){return d},yp:function(){return N},sA:function(){return P},AQ:function(){return k},dU:function(){return O}});var e=t(34051),o=t.n(e),u=t(2593);function a(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function i(n,r,t,e,o,u,a){try{var i=n[u](a),c=i.value}catch(s){return void t(s)}i.done?r(c):Promise.resolve(c).then(e,o)}function c(n){return function(){var r=this,t=arguments;return new Promise((function(e,o){var u=n.apply(r,t);function a(n){i(u,e,o,a,c,"next",n)}function c(n){i(u,e,o,a,c,"throw",n)}a(void 0)}))}}function s(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function f(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},e=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),e.forEach((function(r){s(n,r,t[r])}))}return n}function l(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,r){if(!n)return;if("string"===typeof n)return a(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(n,r)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(){var n=c(o().mark((function n(r,t,e,a){var i,c,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r[t]){n.next=3;break}throw new Error("Method ".concat(t," doesn't exist on ").concat(r.address));case 3:return n.next=5,(i=r.estimateGas)[t].apply(i,l(e));case 5:return c=n.sent,s=c.mul(u.O$.from(1e4).add(u.O$.from(a))).div(u.O$.from(1e4)),n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)})));return function(r,t,e,o){return n.apply(this,arguments)}}(),d=function(){var n=c(o().mark((function n(r,t){var e,u,a,i,c,s,d=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=d.length>2&&void 0!==d[2]?d[2]:[],u=d.length>3&&void 0!==d[3]?d[3]:{},a=d.length>4&&void 0!==d[4]?d[4]:1e3,c=p(r,t,e,a),n.next=5,(i=r)[t].apply(i,l(e).concat([f({gasLimit:c},u)]));case 5:return s=n.sent,n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),m=t(44431),v=t.n(m),b=t(37519),h=t(76582);function x(n,r,t,e,o,u,a){try{var i=n[u](a),c=i.value}catch(s){return void t(s)}i.done?r(c):Promise.resolve(c).then(e,o)}function y(n){return function(){var r=this,t=arguments;return new Promise((function(e,o){var u=n.apply(r,t);function a(n){x(u,e,o,a,i,"next",n)}function i(n){x(u,e,o,a,i,"throw",n)}a(void 0)}))}}function w(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function g(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},e=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),e.forEach((function(r){w(n,r,t[r])}))}return n}var j={gasLimit:b.QL},k=function(){var n=y(o().mark((function n(r,t,e){var u,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=(0,h.Z)(),a=new(v())(e).times(b.o3).toString(),0!==t){n.next=4;break}return n.abrupt("return",r.enterStaking(a,g({},j,{gasPrice:u})));case 4:return n.abrupt("return",r.deposit(t,a,g({},j,{gasPrice:u})));case 5:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),O=function(){var n=y(o().mark((function n(r,t,e){var u,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=(0,h.Z)(),a=new(v())(e).times(b.o3).toString(),0!==t){n.next=4;break}return n.abrupt("return",r.leaveStaking(a,g({},j,{gasPrice:u})));case 4:return n.abrupt("return",r.withdraw(t,a,g({},j,{gasPrice:u})));case 5:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),P=function(){var n=y(o().mark((function n(r,t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=(0,h.Z)(),0!==t){n.next=3;break}return n.abrupt("return",r.leaveStaking("0",g({},j,{gasPrice:e})));case 3:return n.abrupt("return",r.deposit(t,"0",g({},j,{gasPrice:e})));case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),S=t(9070),A=t(9022),T=t(41144),E=t(65684),C=t(55878);function Z(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function I(n,r,t,e,o,u,a){try{var i=n[u](a),c=i.value}catch(s){return void t(s)}i.done?r(c):Promise.resolve(c).then(e,o)}function B(n){return function(n){if(Array.isArray(n))return Z(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,r){if(!n)return;if("string"===typeof n)return Z(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(n,r)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(){var n,r=(n=o().mark((function n(r){var t,e,u,a,i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=S.Z.filter((function(n){return 0!==n.sousId})).filter((function(n){return!1===n.isFinished||void 0===n.isFinished})),n.t0=r,n.t0){n.next=6;break}return n.next=5,E.J.getBlockNumber();case 5:n.t0=n.sent;case 6:return e=n.t0,u=t.map((function(n){var r=n.contractAddress;return{address:(0,C.Kn)(r),name:"startBlock"}})),a=t.map((function(n){var r=n.contractAddress;return{address:(0,C.Kn)(r),name:"bonusEndBlock"}})),n.next=11,(0,T.Z)(A,u);case 11:return i=n.sent,n.next=14,(0,T.Z)(A,a);case 14:return c=n.sent,n.abrupt("return",t.reduce((function(n,r,t){var o=i[t]?new(v())(i[t]):null,u=c[t]?new(v())(c[t]):null;return o&&u?o.gte(e)||u.lte(e)?n:B(n).concat([r]):n}),[]));case 16:case"end":return n.stop()}}),n)})),function(){var r=this,t=arguments;return new Promise((function(e,o){var u=n.apply(r,t);function a(n){I(u,e,o,a,i,"next",n)}function i(n){I(u,e,o,a,i,"throw",n)}a(void 0)}))});return function(n){return r.apply(this,arguments)}}()},76582:function(n,r,t){var e=t(5765),o=t(70457),u=t(9640),a=t(45101);r.Z=function(){var n=o.K,r=u.ZP.getState().user.gasPrice||a.j4.default;return n===e.a_.MAINNET.toString()?r:a.j4.testnet}},44331:function(n,r,t){var e=t(85893),o=t(186),u=t(87761),a=t(87388),i=t(99150);function c(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function s(){var n=c(["\n  ","\n  div:last-of-type {\n    margin-right: 0;\n  }\n"]);return s=function(){return n},n}function f(){var n=c(["\n  background: ",";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]);return f=function(){return n},n}var l=(0,o.ZP)(u.Z)(s(),(function(n){var r=n.theme;return n.showTooltip?" border-bottom: 1px dashed ".concat(r.colors.textSubtle,";"):""})),p=(0,o.ZP)(a.Z)(f(),(function(n){return n.theme.colors.gradients.gold}));r.Z=function(n){var r=n.minutes,t=n.hours,o=n.days,u=n.seconds,a=n.wrapperClassName,c=(0,i.$G)().t;return(0,e.jsxs)(l,{alignItems:"flex-end",className:a,children:[Boolean(o)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{mb:"-4px",scale:"xl",mr:"4px",children:o}),(0,e.jsx)(p,{mr:"12px",children:c("d")})]}),Boolean(t)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{mb:"-4px",scale:"xl",mr:"4px",children:t}),(0,e.jsx)(p,{mr:"12px",children:c("h")})]}),Boolean(r)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{mb:"-4px",scale:"xl",mr:"4px",children:r}),(0,e.jsx)(p,{mr:"12px",children:c("m")})]}),Boolean(u)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{mb:"-4px",scale:"xl",mr:"4px",children:u}),(0,e.jsx)(p,{mr:"12px",children:c("s")})]})]})}},79940:function(n,r,t){var e=t(97971),o=t(99150),u=t(67294);r.Z=function(n,r){var t=(0,o.$G)().t;return(0,u.useMemo)((function(){return r===e.p3.OPEN?{nextEventTime:n+30,preCountdownText:null,postCountdownText:t("until the draw")}:r===e.p3.CLOSE?{nextEventTime:n+30+180,preCountdownText:t("Winners announced in"),postCountdownText:null}:r===e.p3.CLAIMABLE?{nextEventTime:n+30+300,preCountdownText:t("Tickets on sale in"),postCountdownText:null}:{nextEventTime:null,preCountdownText:null,postCountdownText:null}}),[n,r,t])}}}]);