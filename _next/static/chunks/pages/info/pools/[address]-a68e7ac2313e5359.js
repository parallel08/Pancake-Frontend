(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1391],{60864:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/pools/[address]",function(){return r(66224)}])},66224:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return R}});var t=r(85893),o=r(11163),s=r(19690),l=r(87761),i=r(51888),c=r(51166),d=r(57393),a=r(5545),x=r(65333),u=r(99273),p=r(56934),f=r(53503),h=r(53382),m=r(55739),j=r(50783),Z=r(87388),y=r(68112),b=r(83559),k=r(53629),w=r(99150),S=r(67294),v=r(53985),g=r(77176),z=r(186),D=r(38328),C=r(60764),T=r(5004),P=r(58543),_=r(37795),A=r(77522),I=r(56245);function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,s=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function F(){var e=q(["\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-gap: 1em;\n  margin-top: 16px;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]);return F=function(){return e},e}function U(){var e=q(["\n  padding: 8px 0px;\n  margin-right: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return U=function(){return e},e}function X(){var e=q(["\n  border: 1px solid ",";\n  background-color: ",";\n  padding: 16px;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  border-radius: 16px;\n  max-width: 280px;\n"]);return X=function(){return e},e}var E=z.ZP.div(F()),$=(0,z.ZP)(l.Z)(U()),N=(0,z.ZP)(l.Z)(X(),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.background})),V=function(e){var n=e.address,r=(0,i.Z)(),o=r.isXs,s=r.isSm,z=(0,w.$G)().t,L=(0,S.useState)(0),q=L[0],F=L[1],U=(0,c.Z)(z("Based on last 7 days' performance. Does not account for impermanent loss"),{}),X=U.tooltip,V=U.tooltipVisible,H=U.targetRef,R=n.toLowerCase(),B=(0,v.zV)([R])[0],W=(0,v.lR)(R),G=(0,v.j8)(R),M=O((0,g.Hx)(),2),J=M[0],K=M[1];return(0,t.jsx)(b.Z,{symbol:B?"".concat(null===B||void 0===B?void 0:B.token0.symbol," / ").concat(null===B||void 0===B?void 0:B.token1.symbol):null,children:B?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.Z,{justifyContent:"space-between",mb:"16px",flexDirection:["column","column","row"],children:[(0,t.jsxs)(d.Z,{mb:"32px",children:[(0,t.jsx)(k.a,{to:"/info",children:(0,t.jsx)(a.Z,{color:"primary",children:z("Info")})}),(0,t.jsx)(k.a,{to:"/info/pools",children:(0,t.jsx)(a.Z,{color:"primary",children:z("Pools")})}),(0,t.jsx)(l.Z,{children:(0,t.jsx)(a.Z,{mr:"8px",children:"".concat(B.token0.symbol," / ").concat(B.token1.symbol)})})]}),(0,t.jsxs)(l.Z,{justifyContent:[null,null,"flex-end"],mt:["8px","8px",0],children:[(0,t.jsx)(x.Z,{mr:"8px",href:(0,D.s6)(R,"address"),children:z("View on BscScan")}),(0,t.jsx)(A.Z,{fill:J.includes(R),onClick:function(){return K(R)}})]})]}),(0,t.jsxs)(l.Z,{flexDirection:"column",children:[(0,t.jsxs)(l.Z,{alignItems:"center",mb:["8px",null],children:[(0,t.jsx)(C.g,{address0:B.token0.address,address1:B.token1.address,size:32}),(0,t.jsx)(a.Z,{ml:"38px",bold:!0,fontSize:o||s?"24px":"40px",id:"info-pool-pair-title",children:"".concat(B.token0.symbol," / ").concat(B.token1.symbol)})]}),(0,t.jsxs)(l.Z,{justifyContent:"space-between",flexDirection:["column","column","column","row"],children:[(0,t.jsxs)(l.Z,{flexDirection:["column","column","row"],mb:["8px","8px",null],children:[(0,t.jsx)(k.a,{to:"/info/token/".concat(B.token0.address),children:(0,t.jsxs)($,{children:[(0,t.jsx)(C.X,{address:B.token0.address,size:"24px"}),(0,t.jsx)(a.Z,{fontSize:"16px",ml:"4px",style:{whiteSpace:"nowrap"},width:"fit-content",children:"1 ".concat(B.token0.symbol," =  ").concat((0,I.d)(B.token1Price,{notation:"standard",displayThreshold:.001,tokenPrecision:!0})," ").concat(B.token1.symbol)})]})}),(0,t.jsx)(k.a,{to:"/info/token/".concat(B.token1.address),children:(0,t.jsxs)($,{ml:[null,null,"10px"],children:[(0,t.jsx)(C.X,{address:B.token1.address,size:"24px"}),(0,t.jsx)(a.Z,{fontSize:"16px",ml:"4px",style:{whiteSpace:"nowrap"},width:"fit-content",children:"1 ".concat(B.token1.symbol," =  ").concat((0,I.d)(B.token0Price,{notation:"standard",displayThreshold:.001,tokenPrecision:!0})," ").concat(B.token0.symbol)})]})})]}),(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(k.a,{to:"/add/".concat(B.token0.address,"/").concat(B.token1.address),children:(0,t.jsx)(u.Z,{mr:"8px",variant:"secondary",children:z("Add Liquidity")})}),(0,t.jsx)(k.a,{to:"/swap?inputCurrency=".concat(B.token0.address,"&outputCurrency=").concat(B.token1.address),children:(0,t.jsx)(u.Z,{children:z("Trade")})})]})]})]}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(f.Z,{children:(0,t.jsxs)(p.Z,{p:"24px",children:[(0,t.jsxs)(l.Z,{justifyContent:"space-between",children:[(0,t.jsxs)(l.Z,{flex:"1",flexDirection:"column",children:[(0,t.jsx)(a.Z,{color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:z("Liquidity")}),(0,t.jsxs)(a.Z,{fontSize:"24px",bold:!0,children:["$",(0,I.d)(B.liquidityUSD)]}),(0,t.jsx)(_.Z,{value:B.liquidityUSDChange})]}),(0,t.jsxs)(l.Z,{flex:"1",flexDirection:"column",children:[(0,t.jsx)(a.Z,{color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:z("LP reward APR")}),(0,t.jsxs)(a.Z,{fontSize:"24px",bold:!0,children:[(0,I.d)(B.lpApr7d),"%"]}),(0,t.jsxs)(l.Z,{alignItems:"center",children:[(0,t.jsx)("span",{ref:H,children:(0,t.jsx)(h.Z,{color:"textSubtle"})}),(0,t.jsx)(a.Z,{ml:"4px",fontSize:"12px",color:"textSubtle",children:z("7D performance")}),V&&X]})]})]}),(0,t.jsx)(a.Z,{color:"secondary",bold:!0,mt:"24px",fontSize:"12px",textTransform:"uppercase",children:z("Total Tokens Locked")}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(l.Z,{justifyContent:"space-between",children:[(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(C.X,{address:B.token0.address,size:"24px"}),(0,t.jsx)(a.Z,{small:!0,color:"textSubtle",ml:"8px",children:B.token0.symbol})]}),(0,t.jsx)(a.Z,{small:!0,children:(0,I.d)(B.liquidityToken0)})]}),(0,t.jsxs)(l.Z,{justifyContent:"space-between",children:[(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(C.X,{address:B.token1.address,size:"24px"}),(0,t.jsx)(a.Z,{small:!0,color:"textSubtle",ml:"8px",children:B.token1.symbol})]}),(0,t.jsx)(a.Z,{small:!0,children:(0,I.d)(B.liquidityToken1)})]})]})]})}),(0,t.jsx)(f.Z,{mt:"16px",children:(0,t.jsxs)(l.Z,{flexDirection:"column",p:"24px",children:[(0,t.jsxs)(m.Z,{activeIndex:q,onItemClick:function(e){return F(e)},scale:"sm",variant:"subtle",children:[(0,t.jsx)(j.Z,{width:"100%",children:z("24H")}),(0,t.jsx)(j.Z,{width:"100%",children:z("7D")})]}),(0,t.jsxs)(l.Z,{mt:"24px",children:[(0,t.jsxs)(l.Z,{flex:"1",flexDirection:"column",children:[(0,t.jsx)(a.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:z(q?"Volume 7D":"Volume 24H")}),(0,t.jsxs)(a.Z,{fontSize:"24px",bold:!0,children:["$",q?(0,I.d)(B.volumeUSDWeek):(0,I.d)(B.volumeUSD)]}),(0,t.jsx)(_.Z,{value:q?B.volumeUSDChangeWeek:B.volumeUSDChange})]}),(0,t.jsxs)(l.Z,{flex:"1",flexDirection:"column",children:[(0,t.jsx)(a.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:z(q?"LP reward fees 7D":"LP reward fees 24H")}),(0,t.jsxs)(a.Z,{fontSize:"24px",bold:!0,children:["$",q?(0,I.d)(B.lpFees7d):(0,I.d)(B.lpFees24h)]}),(0,t.jsx)(a.Z,{color:"textSubtle",fontSize:"12px",children:z("out of $%totalFees% total fees",{totalFees:q?(0,I.d)(B.totalFees7d):(0,I.d)(B.totalFees24h)})})]})]})]})})]}),(0,t.jsx)(T.Z,{variant:"pool",chartData:W})]}),(0,t.jsx)(Z.Z,{mb:"16px",mt:"40px",scale:"lg",children:z("Transactions")}),(0,t.jsx)(P.Z,{transactions:G})]}):(0,t.jsx)(l.Z,{mt:"80px",justifyContent:"center",children:(0,t.jsx)(y.Z,{})})})},H=function(){var e=(0,o.useRouter)();return(0,t.jsx)(V,{address:String(e.query.address)})};H.Layout=s.O;var R=H}},function(e){e.O(0,[2077,9297,8956,9287,6631,4838,7285,9774,2888,179],(function(){return n=60864,e(e.s=n);var n}));var n=e.O();_N_E=n}]);