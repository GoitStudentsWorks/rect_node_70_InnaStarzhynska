"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[706],{2424:function(n,e,t){t.d(e,{Z:function(){return w}});var r,i,o,a=t(9439),d=t(7525),p=t(168),s=t(7770),l=t(5867),c=l.ZP.button(r||(r=(0,p.Z)(["\ndisplay: flex;\nalign-items:center;\njustify-content: center;\nwidth: 35px;\nheight: 35px;\nborder-radius: 50%;\nborder:  1px solid ",";\ncolor: ",";\nbackground-color: ",";\nfont-family: Inter;\nfont-size: 16px;\nfont-weight: 400;\ncursor: pointer;\n\n&:hover, &focus {\n    color: ",";\n    background-color: ","\n}\n"])),s.O.blueColor,(function(n){return"current"===n.className?s.O.whiteColor:s.O.textColor}),(function(n){return"current"===n.className?s.O.blueColor:"transparent"}),s.O.textButtonColor,s.O.blueColor),x=l.ZP.div(i||(i=(0,p.Z)(["\ndisplay: flex;\ngap: 8px\n"]))),u=l.ZP.div(o||(o=(0,p.Z)(["\ndisplay: flex;\njustify-content: center;\ngap: 23px"]))),g=t(2791),f=t(1087),h=t(9434),m=t(6351),b=t(184);function w(n){var e,t=n.currentPage,r=n.changePage,i=n.totalPages,o=(0,g.useState)(window.innerWidth<768),p=(0,a.Z)(o,2),s=p[0],l=p[1],w=(0,f.lr)(),v=(0,a.Z)(w,2),Z=v[0],j=v[1],k=null!==(e=Z.get("query"))&&void 0!==e?e:"",y=(0,h.v9)(m.lB),z=(0,h.v9)(m.Er);(0,g.useEffect)((function(){var n=function(){var n=window.innerWidth;l(n<768)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var H=function(n,e){if(s){if(e<=4){for(var t=[],r=1;r<=e;r+=1)t.push(r);return t}if(e>4&&n<=3)return[1,2,3,4];if(e>4&&n>3&&n+1<=e)return[n-2,n-1,n,n+1];if(e>5&&n>3&&n+1>=e)return[e-3,e-2,e-1,e]}if(e<=5){for(var i=[],o=1;o<=e;o+=1)i.push(o);return i}return e>5&&n<=3?[1,2,3,4,5]:e>5&&n>3&&n+2<=e?[n-2,n-1,n,n+1,n+2]:e>5&&n>3&&n+2>=e?[n-4,e-3,e-2,e-1,e]:void 0}(t,i),P=function(n){return n===t?"current":""};return(0,b.jsx)(b.Fragment,{children:(0!==y.length||0!==z.length)&&(0,b.jsxs)(u,{children:[(0,b.jsx)(c,{onClick:function(){j({query:k,page:t-1})},disabled:1===t,className:"buttonArrow",children:(0,b.jsx)(d.Z,{id:"icon-arrow-right",className:"iconArrowLeft"})}),(0,b.jsx)(x,{children:H.map((function(n){return(0,b.jsx)(c,{className:P(n),onClick:r,children:n},n)}))}),(0,b.jsx)(c,{onClick:function(){j({query:k,page:t+1})},disabled:t===i,className:"buttonArrow",children:(0,b.jsx)(d.Z,{id:"icon-arrow-right",className:"iconArrow"})})]})})}},3706:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,i,o,a,d,p,s,l,c,x,u,g=t(9439),f=t(2791),h=t(7525),m=t(9434),b=t(168),w=t(5867),v=t(3592),Z=w.zo.ul(r||(r=(0,b.Z)(["\n  padding: 24px 0 40px;\n  width: 100%;\n  column-gap: 30px;\n  row-gap: 35px;\n\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (",") {\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    column-gap: 30px;\n    row-gap: 35px;\n    padding: 40px 0 60px;\n  }\n  @media screen and (",") {\n    padding: 60px 0 68px;\n    column-gap: 30px;\n    row-gap: 37px;\n  }\n"])),v.H.tablet,v.H.desktop),j=t(2426),k=t.n(j),y=w.zo.li(i||(i=(0,b.Z)(["\n  position: relative;\n  width: 100%;\n  height: 578px;\n  border-radius: 20px;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n\n  &:before {\n    position: absolute;\n    content: '';\n    top: -20px;\n    display: block;\n    height: 8px;\n    width: 100%;\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n    border-radius: 40px;\n  }\n\n  @media screen and (",") {\n    height: 556px;\n    flex-basis: calc((100% - 32px) / 2);\n\n    &:before {\n      top: -19px;\n    }\n  }\n\n  @media screen and (",") {\n    height: 534px;\n    flex-basis: calc((100% - 62px) / 3);\n  }\n"])),v.H.tablet,v.H.desktop),z=w.zo.img(o||(o=(0,b.Z)(["\n  margin-bottom: 16px;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n  height: 252px;\n\n  @media screen and (",") {\n  }\n\n  @media screen and (",") {\n  }\n"])),v.H.tablet,v.H.desktop),H=w.zo.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding-left: 12px;\n  padding-right: 12px;\n\n  @media screen and (",") {\n  }\n\n  @media screen and (",") {\n  }\n"])),v.H.tablet,v.H.tablet),P=w.zo.h3(d||(d=(0,b.Z)(["\n  text-align: left;\n  font-size: 24px;\n  line-height: 32.78px;\n"]))),C=w.zo.p(p||(p=(0,b.Z)(["\n  font-size: 16px;\n  line-height: 22px;\n  margin-top: 16px;\n  text-align: left;\n  overflow: none;\n  height: 110px;\n  @media screen and (",") {\n    overflow: hidden;\n\n    height: 132px;\n  }\n\n  @media screen and (",") {\n  }\n"])),v.H.tablet,v.H.desktop),N=(w.zo.button(s||(s=(0,b.Z)(["\n  background: none;\n  border: none;\n  color: blue;\n  cursor: pointer;\n"]))),w.zo.div(l||(l=(0,b.Z)(["\n  position: absolute;\n  top: 545px;\n  @media screen and (",") {\n    top: 527px;\n  }\n\n  @media screen and (",") {\n    top: 503px;\n  }\n"])),v.H.tablet,v.H.desktop)),q=w.zo.span(c||(c=(0,b.Z)(["\n  line-height: 22px;\n  font-size: 16px;\n  color: rgba(136, 136, 136, 1);\n"]))),E=w.zo.a(x||(x=(0,b.Z)(["\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(84, 173, 255, 1);\n  margin-left: 90px;\n  @media screen and (",") {\n    margin-left: 140px;\n  }\n\n  @media screen and (",") {\n    margin-left: 190px;\n  }\n"])),v.H.tablet,v.H.desktop),_=w.zo.a(u||(u=(0,b.Z)(["\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(84, 173, 255, 1);\n  @media screen and (",") {\n  }\n\n  @media screen and (",") {\n  }\n"])),v.H.tablet,v.H.desktop),O=t(9220),A=t(184);function L(n){var e=n.article,t=e.url,r=void 0===t?"":t,i=e.text,o=e.title,a=e.imgUrl,d=e.date,p=k()(d).format("L"),s=(0,f.useState)(!1),l=(0,g.Z)(s,1)[0];return(0,A.jsxs)(y,{children:[(0,A.jsx)(z,{src:a,alt:"news",onError:function(n){n.target.src=O,n.onerror=null}}),(0,A.jsxs)(H,{children:[(0,A.jsx)(P,{children:o}),(0,A.jsxs)(C,{children:[l?i:i.split(" ").slice(0,23).join(" "),!l&&i.split(" ").length>20&&(0,A.jsx)(_,{href:r,target:"_blank",children:"..."})]}),(0,A.jsxs)(N,{children:[(0,A.jsx)(q,{children:p}),(0,A.jsx)(E,{href:r,target:"_blank",children:"Read more"})]})]})]})}var S,I,W,B,F,D=t(6351),R=t(9079),U=function(){var n=(0,m.v9)(D.Er),e=0!==n.length;return(0,A.jsx)(Z,{children:e?n.map((function(n){return(0,A.jsx)(L,{article:n},n._id)})):(0,A.jsx)(R.x,{children:"No news was found for your request "})})},V=w.ZP.div(S||(S=(0,b.Z)(["\n  padding-top: 40px;\n  padding-bottom: 117px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n\n  @media screen and (",") {\n    padding-top: 80px;\n     padding-bottom: 126px;\n  }\n"])),v.H.tablet),$=w.ZP.h2(I||(I=(0,b.Z)(["\n  margin-bottom: 24px;\n  font-size: 24px;\n  line-height: 32.78px;\n\n  @media screen and (",") {\n    line-height: 66px;\n    font-size: 48px;\n    font-weight: 700;\n    margin-bottom: 40px;\n  }\n"])),v.H.tablet),G=w.ZP.form(W||(W=(0,b.Z)(["\n  position: relative;\n  width: 280px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 44px;\n  @media screen and (",") {\n    width: 608px;\n    margin-bottom: 62px;\n  }\n  @media screen and (",") {\n    margin-bottom: 80px;\n  }\n"])),v.H.tablet,v.H.desktop),J=w.ZP.input(B||(B=(0,b.Z)(["\n  width: 100%;\n  padding: 14px 36px 13px 20px;\n  border-radius: 24px;\n  border: none;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  @media screen and (",") {\n    font-size: 20px;\n    line-height: 24px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n  }\n  @media screen and (",") {\n  }\n"])),v.H.tablet,v.H.desktop),K=w.ZP.button(F||(F=(0,b.Z)(["\n  position: absolute;\n  right: 12px;\n  top: 0;\n  padding: 10px 0 6px;\n  background-color: transparent;\n  border-color: transparent;\n"]))),M=t(5665),Q=t(9801),T=t(7863),X=t(1087),Y=t(2424);function nn(){var n,e,t=(0,m.I0)(),r=(0,X.lr)(),i=(0,g.Z)(r,2),o=i[0],a=i[1],d=Number(null!==(n=o.get("page"))&&void 0!==n?n:1),p=(0,m.v9)(D.iE),s=null!==(e=o.get("query"))&&void 0!==e?e:"",l=(0,m.v9)(D.$y);(0,f.useEffect)((function(){t((0,T.t)({query:s,page:d}))}),[t,s,d]);return(0,A.jsx)(A.Fragment,{children:l?(0,A.jsx)(Q.Z,{}):(0,A.jsxs)(M.W,{children:[(0,A.jsxs)(V,{children:[(0,A.jsx)($,{children:"News"}),(0,A.jsxs)(G,{onSubmit:function(n){n.preventDefault();var e=n.target.search.value.trim();a({query:e,page:d})},children:[(0,A.jsx)(J,{defaultValue:s,type:"text",name:"search",placeholder:"Search"}),(0,A.jsx)(K,{type:"submit",children:(0,A.jsx)(h.Z,{id:"icon-search"})})]}),(0,A.jsx)(U,{})]}),(0,A.jsx)(Y.Z,{changePage:function(n){var e=n.target.textContent;a({query:s,page:e})},currentPage:d,totalPages:p})]})})}},9079:function(n,e,t){t.d(e,{x:function(){return o}});var r,i=t(168),o=t(5867).ZP.p(r||(r=(0,i.Z)(["\npadding: 70px 0;\nmargin: 0 auto;\nfont-weight: 600;\nfont-size: 36px;\ntext-align: center\n"])))},9220:function(n,e,t){n.exports=t.p+"static/media/errorImg.f78af20b00de23926dbb.jpg"}}]);
//# sourceMappingURL=706.3cd15ae1.chunk.js.map