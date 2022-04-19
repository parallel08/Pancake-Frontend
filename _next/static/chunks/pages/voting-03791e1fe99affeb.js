(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6664],{35077:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},i=function(e,n,t){var i,a=r[e];return i="string"===typeof a?a:1===n?a.one:a.other.replace("{{count}}",n.toString()),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function a(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var o={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},s=function(e,n,t,r){return u[e]};function c(e){return function(n,t){var r,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var u=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(n):n]}}var l={ordinalNumber:function(e,n){var t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function d(e){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=n.match(i);if(!a)return null;var o,u=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?h(s,(function(e){return e.test(u)})):f(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(c):c,o=t.valueCallback?t.valueCallback(o):o;var l=n.slice(u.length);return{value:o,rest:l}}}function f(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function h(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}var m,p={ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.match(m.matchPattern);if(!t)return null;var r=t[0],i=e.match(m.parsePattern);if(!i)return null;var a=m.valueCallback?m.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;var o=e.slice(r.length);return{value:a,rest:o}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},b={code:"en-US",formatDistance:i,formatLong:o,formatRelative:s,localize:l,match:p,options:{weekStartsOn:0,firstWeekContainsDate:1}}},91227:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voting",function(){return t(73241)}])},57393:function(e,n,t){"use strict";var r=t(85893),i=t(67294),a=t(186),o=t(57247),u=t(12347);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var e=c(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return d=function(){return e},e}function f(){var e=c(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return f=function(){return e},e}var h=a.ZP.div(d(),(function(e){return e.theme.colors.textDisabled}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),m=a.ZP.ul(f(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primaryBright}),o.Dh),p=(0,r.jsx)(u.Z,{color:"currentColor",width:"24px"});n.Z=function(e){var n=e.separator,t=void 0===n?p:n,a=e.children,o=function(e,n){return e.reduce((function(e,t,i){return 0===i?l(e).concat([t]):l(e).concat([(0,r.jsx)(h,{"aria-hidden":!0,children:n},"seperator-".concat(i)),t])}),[])}(i.Children.toArray(a).filter((function(e){return(0,i.isValidElement)(e)})),t);return(0,r.jsx)(m,{children:o.map((function(e,n){return(0,r.jsx)("li",{children:e},"child-".concat(n))}))})}},89501:function(e,n,t){"use strict";var r=t(186),i=t(57247);function a(){var e,n,t=(e=["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ",";\n  border-radius: ",";\n  font-size: 16px;\n  font-weight: 600;\n\n  "," {\n    flex-grow: 0;\n  }\n\n  ","\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}var o=r.ZP.button(a(),(function(e){return"md"===e.scale?"8px":"16px"}),(function(e){return"md"===e.scale?"16px 16px 0 0":"24px 24px 0 0"}),(function(e){return e.theme.mediaQueries.md}),i.$_);o.defaultProps={scale:"md"},n.Z=o},27878:function(e,n,t){"use strict";var r=t(85893),i=t(67294),a=t(186),o=t(87761);function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function s(){var e=u(["\n  border-bottom: 2px solid ",";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"]);return s=function(){return e},e}function c(){var e=u(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  "," {\n    flex-grow: 0;\n  }\n"]);return c=function(){return e},e}var l=(0,a.ZP)(o.Z)(s(),(function(e){return e.theme.colors.input})),d=(0,a.ZP)(o.Z)(c(),(function(e){return e.theme.mediaQueries.md}));n.Z=function(e){var n=e.activeIndex,t=void 0===n?0:n,a=e.onItemClick,o=e.children;return(0,r.jsx)(l,{p:["0 4px","0 16px"],children:(0,r.jsx)(d,{children:i.Children.map(o,(function(e,n){var r=t===n;return(0,i.cloneElement)(e,{isActive:r,onClick:a?function(){return a(n)}:void 0,color:r?"backgroundAlt":"textSubtle",backgroundColor:r?"textSubtle":"input"})}))})})}},73241:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ie}});var r=t(85893),i=t(87761),a=t(83559),o=t(186),u=t(56934),s=t(87388),c=t(5545),l=t(99273),d=t(67294),f=t(17804);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function(e){return(0,r.jsx)(f.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z"})}))},p=t(99150),b=t(41664),g=t(55027),v=t(8413);function x(){var e,n,t=(e=["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return x=function(){return t},t}var y=(0,o.ZP)(v.Z)(x(),(function(e){return e.theme.mediaQueries.lg}));function j(){var e,n,t=(e=["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return j=function(){return t},t}var w=(0,o.ZP)(u.Z)(j(),(function(e){return e.theme.colors.gradients.bubblegum})),P=function(){var e=(0,p.$G)().t;return(0,r.jsx)(w,{children:(0,r.jsx)(g.Z,{children:(0,r.jsxs)(i.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(u.Z,{pr:"32px",children:[(0,r.jsx)(s.Z,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),(0,r.jsx)(c.Z,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),(0,r.jsx)(c.Z,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),(0,r.jsx)(b.default,{href:"/voting/proposal/create",passHref:!0,children:(0,r.jsx)(l.Z,{startIcon:(0,r.jsx)(m,{color:"currentColor",width:"24px"}),children:e("Make a Proposal")})})]}),(0,r.jsx)(y,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})};function Z(){var e,n,t=(e=["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return Z=function(){return t},t}var O=(0,o.ZP)(u.Z)(Z(),(function(e){return e.theme.colors.gradients.bubblegum})),C=function(){var e=(0,p.$G)().t;return(0,r.jsx)(O,{children:(0,r.jsx)(g.Z,{children:(0,r.jsxs)(i.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(u.Z,{pr:"32px",children:[(0,r.jsx)(s.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),(0,r.jsx)(s.Z,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the PancakeSwap Ecosystem")}),(0,r.jsx)(b.default,{href:"/voting/proposal/create",passHref:!0,children:(0,r.jsx)(l.Z,{startIcon:(0,r.jsx)(m,{color:"currentColor",width:"24px"}),children:e("Make a Proposal")})})]}),(0,r.jsx)(y,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},S=t(34051),M=t.n(S),k=t(57393),A=t(53503),W=t(8100),I=t(45101),E=t(65992),z=t(97971),T=t(97305),D=t(6741),N=t(98913),V=t.n(N),F=t(65398);function H(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function L(){var e=H(["\n  border-bottom: 1px solid ",";\n"]);return L=function(){return e},e}function J(){var e=H(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"]);return J=function(){return e},e}var _=(0,o.ZP)(i.Z)(L(),(function(e){return e.theme.colors.cardBorder})),X=o.ZP.div(J(),_),B=function(){return(0,r.jsx)(X,{children:V()(F.A4).map((function(e){return(0,r.jsxs)(_,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[(0,r.jsxs)(u.Z,{style:{flex:1},children:[(0,r.jsx)(D.Z,{height:"21px",width:"70%",mb:"4px"}),(0,r.jsx)(D.Z,{height:"21px",width:"30%",mb:"4px"}),(0,r.jsx)(D.Z,{height:"21px",width:"40%"})]}),(0,r.jsx)(D.Z,{height:"32px",width:"32px"})]},e)}))})},G=t(27878),Q=t(89501),$=t(41052),q=t(23187);function K(){var e,n,t=(e=["\n  background-color: ",";\n  padding-top: 16px;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return K=function(){return t},t}var Y=o.ZP.div(K(),(function(e){return e.theme.colors.input})),U=function(e){switch(e){case I.nK.COMMUNITY:return 1;case I.nK.ALL:return 2;case I.nK.CORE:default:return 0}},R=function(e){var n=e.proposalType,t=e.onTypeChange,a=(0,p.$G)().t;return(0,r.jsx)(Y,{children:(0,r.jsxs)(G.Z,{activeIndex:U(n),onItemClick:function(e){t(function(e){switch(e){case 1:return I.nK.COMMUNITY;case 2:return I.nK.ALL;default:return I.nK.CORE}}(e))},children:[(0,r.jsx)(Q.Z,{children:(0,r.jsxs)(i.Z,{alignItems:"center",children:[(0,r.jsx)($.Z,{color:"currentColor",mr:"4px"}),a("Core")]})}),(0,r.jsxs)(Q.Z,{children:[" ",(0,r.jsxs)(i.Z,{alignItems:"center",children:[(0,r.jsx)(q.Z,{color:"currentColor",mr:"4px"}),a("Community")]})]}),(0,r.jsx)(Q.Z,{children:"All"})]})})},ee=t(19782),ne=t(7098),te=t(53629),re=t(19013),ie=t(42298);function ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ae(e,n,t[n])}))}return e}var ue=function(e){var n=(0,re.default)(1e3*e);return(0,ie.default)(n,"MMM do, yyyy HH:mm")},se=function(e){var n=e.startDate,t=e.endDate,i=e.proposalState,a=(0,p.$G)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return i===I.r7.CLOSED?(0,r.jsx)(c.Z,oe({},o,{children:a("Ended %date%",{date:ue(t)})})):i===I.r7.PENDING?(0,r.jsx)(c.Z,oe({},o,{children:a("Starts %date%",{date:ue(n)})})):(0,r.jsx)(c.Z,oe({},o,{children:a("Ends %date%",{date:ue(t)})}))},ce=t(37121);function le(){var e,n,t=(e=["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return le=function(){return t},t}var de=(0,o.ZP)(te.a)(le(),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),fe=function(e){var n=e.proposal,t="/voting/proposal/".concat(n.id);return(0,r.jsxs)(de,{to:t,children:[(0,r.jsxs)(u.Z,{as:"span",style:{flex:1},children:[(0,r.jsx)(c.Z,{bold:!0,mb:"8px",children:n.title}),(0,r.jsx)(i.Z,{alignItems:"center",mb:"8px",children:(0,r.jsx)(se,{startDate:n.start,endDate:n.end,proposalState:n.state})}),(0,r.jsxs)(i.Z,{alignItems:"center",children:[(0,r.jsx)(ce.U,{proposalState:n.state}),(0,r.jsx)(ce.g,{isCoreProposal:(0,T.md)(n),ml:"8px"})]})]}),(0,r.jsx)(ee.Z,{variant:"text",children:(0,r.jsx)(ne.Z,{width:"24px"})})]})},he=t(83482);function me(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function pe(){var e=me(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"]);return pe=function(){return e},e}function be(){var e=me(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]);return be=function(){return e},e}var ge=(0,o.ZP)(i.Z).attrs({alignItems:"center"})(pe(),(function(e){return e.theme.colors.cardBorder})),ve=o.ZP.label(be()),xe=[{value:I.r7.ACTIVE,label:"Vote Now"},{value:I.r7.PENDING,label:"Soon"},{value:I.r7.CLOSED,label:"Closed"}],ye=function(e){var n=e.filterState,t=e.onFilterChange,i=e.isLoading,a=(0,p.$G)().t;return(0,r.jsx)(ge,{children:xe.map((function(e){var o=e.value,u=e.label;return(0,r.jsxs)(ve,{children:[(0,r.jsx)(he.Z,{scale:"sm",value:o,checked:n===o,onChange:function(e){var n=e.currentTarget.value;t(n)},disabled:i}),(0,r.jsx)(c.Z,{ml:"8px",children:a(u)})]},u)}))})};function je(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function we(e,n,t,r,i,a,o){try{var u=e[a](o),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,i)}function Pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ze(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Pe(e,n,t[n])}))}return e}function Oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(s){u=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return je(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ce=function(){var e,n=(0,p.$G)().t,t=Oe(function(e,n){var t=(0,d.useState)((function(){try{var t=window.sessionStorage.getItem(e);return t?JSON.parse(t):(window.sessionStorage.setItem(e,JSON.stringify(n)),n)}catch(r){return n}})),r=t[0],i=t[1];return(0,d.useEffect)((function(){try{window.sessionStorage.setItem(e,JSON.stringify(r))}catch(n){}}),[e,r]),[r,i]}("proposals-filter",{proposalType:I.nK.CORE,filterState:I.r7.ACTIVE}),2),a=t[0],o=t[1],l=a.proposalType,f=a.filterState,h=(0,W.ZP)(["proposals",f],(e=M().mark((function e(){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.Bp)(1e3,0,f));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){we(a,r,i,o,u,"next",e)}function u(e){we(a,r,i,o,u,"throw",e)}o(void 0)}))})),m=h.status,v=h.data,x=(0,T.JY)((0,T.LJ)(v,l),f);return(0,r.jsxs)(g.Z,{py:"40px",children:[(0,r.jsx)(u.Z,{mb:"48px",children:(0,r.jsxs)(k.Z,{children:[(0,r.jsx)(b.default,{href:"/",children:n("Home")}),(0,r.jsx)(c.Z,{children:n("Voting")})]})}),(0,r.jsx)(s.Z,{as:"h2",scale:"xl",mb:"32px",id:"voting-proposals",children:n("Proposals")}),(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(R,{proposalType:l,onTypeChange:function(e){o((function(n){return Ze({},n,{proposalType:e})}))}}),(0,r.jsx)(ye,{filterState:f,onFilterChange:function(e){o((function(n){return Ze({},n,{filterState:e})}))},isLoading:m!==z.iF.Fetched}),m!==z.iF.Fetched&&(0,r.jsx)(B,{}),m===z.iF.Fetched&&x.length>0&&x.map((function(e){return(0,r.jsx)(fe,{proposal:e},e.id)})),m===z.iF.Fetched&&0===x.length&&(0,r.jsx)(i.Z,{alignItems:"center",justifyContent:"center",p:"32px",children:(0,r.jsx)(s.Z,{as:"h5",children:n("No proposals found")})})]})]})};function Se(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function Me(){var e=Se(["\n  flex: none;\n"]);return Me=function(){return e},e}function ke(){var e=Se(["\n  flex: 1;\n  height: 100%;\n"]);return ke=function(){return e},e}var Ae=o.ZP.div(Me()),We=o.ZP.div(ke()),Ie=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.V,{}),(0,r.jsxs)(i.Z,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[(0,r.jsx)(Ae,{children:(0,r.jsx)(C,{})}),(0,r.jsx)(We,{children:(0,r.jsx)(Ce,{})}),(0,r.jsx)(Ae,{children:(0,r.jsx)(P,{})})]})]})}}},function(e){e.O(0,[2298,1905,712,9774,2888,179],(function(){return n=91227,e(e.s=n);var n}));var n=e.O();_N_E=n}]);