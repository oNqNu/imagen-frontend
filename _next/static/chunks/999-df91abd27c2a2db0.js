"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{8150:function(e,n,t){t.d(n,{PE:function(){return h},L6:function(){return m},ME:function(){return x},kI:function(){return f}});var r=t(5893),i=t(8790),l=t(1604),a=t(7496),s=t(3750),o=t(7610);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h=function(e){var n=e.originalSrc,t=e.resultSrc,a=u(e,["originalSrc","resultSrc"]);return(0,r.jsxs)(i.M5,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({},a,{children:[(0,r.jsx)(l.m$.img,{src:"".concat(n),alt:"original image",h:["24","40"]}),(0,r.jsx)(s.qhT,{size:"50px"}),(0,r.jsx)(l.m$.img,{src:"".concat(t),alt:"result image",h:["24","40"]})]}))},m=function(e){var n=e.image,t=e.key;u(e,["image","key"]);return(0,r.jsx)(l.m$.img,{src:URL.createObjectURL(n),alt:"description of image",w:"96"},t)},x=function(e){var n=e.originalImage,t=e.resulImage,l=e.key;u(e,["originalImage","resulImage","key"]);return(0,r.jsx)(i.xu,{w:"80%",children:(0,r.jsx)(o.vx,{itemOne:(0,r.jsx)(o.ps,{src:n,alt:"Image one"}),itemTwo:(0,r.jsx)(o.ps,{src:"data:image/jpeg;base64,".concat(t),alt:"Image two"})},l)})},f=function(e){var n=e.image,t=e.delay;return(0,r.jsx)(a.Rg,{in:!0,offsetY:"40px",transition:{enter:{duration:1,delay:t}},children:(0,r.jsx)(l.m$.img,{src:"https://onqnu.github.io/imagen-frontend/".concat(n),alt:"description of image",h:["28","32"]})})}},9385:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(5893),i=t(7375),l=t(3238),a=t(1604),s=t(8790),o=t(5193),c=t(4480),u=t(9815),h=t(9762),m=t(4612),x=t(3441),f=t(9101),g=t(9008),d=t(1163),p=t(7294),j=t(7516),b=t(3750),y=t(8193);function v(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var O=function(e){e.children,v(e,["children"]);var n=(0,i.qY)(),t=n.isOpen,O=n.onOpen,w=n.onClose,I=(0,l.pm)(),k=(0,p.useState)(""),S=k[0],C=k[1],z=(0,p.useState)(""),q=z[0],R=z[1],N=(0,p.useState)(""),P=N[0],_=N[1],F=(0,p.useState)(""),E=F[0],U=F[1],$=[{name:"\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb",label:"grayscale"},{name:"\u5e73\u6ed1\u5316",label:"smoothing"},{name:"\u30a8\u30c3\u30b8\u691c\u51fa",label:"edge-detection"},{name:"\u3057\u304d\u3044\u5024\u51e6\u7406",label:"binary"},{name:"\u753b\u7d20\u5024\u306e\u5909\u66f4",label:"change-color"}],A=(0,d.useRouter)(),D=function(e,n){e.preventDefault(),A.push(n)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.default,{children:[(0,r.jsx)("title",{children:"Imagen"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(a.m$.header,{bgColor:"black",w:"100%",h:"50px",display:"flex",alignItems:"center",children:(0,r.jsxs)(s.W2,{maxW:"7xl",h:"50px",justifyContent:"space-between",display:"flex",alignItems:"center",children:[(0,r.jsx)(s.xv,{color:"white",textAlign:"center",lineHeight:"50px",w:"32",fontSize:"4xl",fontFamily:"fantasy",cursor:"pointer",onClick:function(e){return D(e,"/")},display:"inline-block",children:"Imagen"}),(0,r.jsxs)(s.Ug,{display:"flex",gap:"4",children:[(0,r.jsx)(o.hU,{as:"a",colorScheme:"white","aria-label":"hithub",icon:(0,r.jsx)(b.rFR,{size:"40px"}),size:"40px",href:"https://github.com/oNqNu/imagen-frontend",target:"_blank"}),(0,r.jsx)(o.hU,{colorScheme:"white","aria-label":"form",icon:(0,r.jsx)(j.DBs,{size:"40px"}),size:"40px",onClick:O,display:["none","inline-block"]}),(0,r.jsxs)(c.v2,{children:[(0,r.jsx)(c.j2,{color:"white",as:o.hU,"aria-label":"Options",icon:(0,r.jsx)(y.qTj,{size:"30px"}),colorScheme:"blackAlpha"}),(0,r.jsx)(c.qy,{zIndex:"2",children:$.map((function(e,n){return(0,r.jsx)(c.sN,{onClick:function(n){return D(n,"/processes/".concat(e.label))},children:e.name},n)}))})]})]})]})}),(0,r.jsxs)(s.M5,{w:"100%",h:"60px",display:["none","flex"],children:[(0,r.jsx)(s.Ug,{gap:"4",mt:"4",children:$.map((function(e,n){return(0,r.jsx)(o.zx,{w:"28",textAlign:"center",lineHeight:"60px",color:"gray.500",variant:"link",onClick:function(n){return D(n,"/processes/".concat(e.label))},fontSize:"sm",children:e.name},n)}))}),(0,r.jsxs)(u.u_,{isOpen:t,onClose:w,size:"xl",isCentered:!0,children:[(0,r.jsx)(u.ZA,{}),(0,r.jsxs)(u.hz,{children:[(0,r.jsx)(u.xB,{children:"\u304a\u554f\u3044\u5408\u308f\u305b"}),(0,r.jsx)(u.ol,{}),(0,r.jsxs)(u.fe,{children:[(0,r.jsxs)(h.NI,{isRequired:!0,children:[(0,r.jsx)(h.lX,{htmlFor:"name",children:"\u304a\u540d\u524d"}),(0,r.jsx)(m.II,{id:"name",placeholder:"\u5c71\u7530\u592a\u90ce",value:S,onChange:function(e){return C(e.target.value)}})]}),(0,r.jsxs)(h.NI,{isRequired:!0,children:[(0,r.jsx)(h.lX,{htmlFor:"email",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),(0,r.jsx)(m.II,{id:"email",type:"email",placeholder:"sample@sample.com",value:q,onChange:function(e){return R(e.target.value)}})]}),(0,r.jsxs)(h.NI,{isRequired:!0,children:[(0,r.jsx)(h.lX,{htmlFor:"title",children:"\u4ef6\u540d"}),(0,r.jsx)(m.II,{id:"title",placeholder:"",value:P,onChange:function(e){return _(e.target.value)}})]}),(0,r.jsxs)(h.NI,{isRequired:!0,children:[(0,r.jsx)(h.lX,{htmlFor:"message",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"}),(0,r.jsx)(x.g,{value:E,onChange:function(e){return U(e.target.value)}})]})]}),(0,r.jsxs)(u.mz,{children:[(0,r.jsx)(o.zx,{colorScheme:"blue",mr:3,onClick:function(){w(),C(""),R(""),U(""),_("")},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),(0,r.jsx)(o.zx,{variant:"ghost",onClick:function(e){e.preventDefault(),function(){console.log("send");var e="Ix5hWOm52rnK4RQF1",n="imagen",t="template_fxgvlgl";(0,f.S1)(e);var r={from_name:S,from_email:q,title:P,message:E};(0,f.lW)(n,t,r).then((function(){I({title:"\u9001\u4fe1\u5b8c\u4e86.",description:"\u3042\u306a\u305f\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u6b63\u5e38\u306b\u51e6\u7406\u3055\u308c\u307e\u3057\u305f.",status:"success",duration:9e3,isClosable:!0}),C(""),R(""),U(""),_("")})).catch((function(e){console.log(e)}))}()},children:"\u9001\u4fe1\u3059\u308b"})]})]})]})]})]})}}}]);