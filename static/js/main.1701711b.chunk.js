(this["webpackJsonpqrcode.volt.link"]=this["webpackJsonpqrcode.volt.link"]||[]).push([[0],{204:function(e,t,n){e.exports={app:"App_app__3hbGO"}},217:function(e,t,n){},430:function(e,t,n){var a={"./de.ftl":[432,3],"./en.ftl":[433,4]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=430,e.exports=r},431:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(9),c=n(2),l=n.n(c),o=n(203),i=n.n(o),s=(n(217),n(204)),u=n.n(s),d=n(16),j=n(76),b=n(107),h=n(41),p=n(3),f=function(e){return Object(p.jsx)(j.b,Object(d.a)(Object(d.a)({},e),{},{elems:Object(d.a)({br:Object(p.jsx)("br",{})},e.elems),children:Object(p.jsx)(l.a.Fragment,{children:e.children})}),e.id)};var g=n(15),v=n.n(g),O=n(30),m=n(57),x=n.n(m);var w=function(e){var t=e.ariaLabel,n=e.items,a=e.defaultValue,l=e.onChange,o=e.style,i=e.className,s=Object(c.useState)(),u=Object(r.a)(s,2),j=u[0],b=u[1];Object(c.useEffect)((function(){return b(a)}),[a,b]);var h=Object(c.useCallback)((function(e){var t=e.target.dataset.value;b(t),l&&l(t)}),[b,l]);return Object(p.jsx)("div",{"aria-label":t,className:"buttonRow "+(i||""),style:Object(d.a)({display:"inline-block"},o),children:n.map((function(e){var t=e.value,n=e.title,a=e.icon||null;return Object(p.jsx)("button",{className:"".concat(j===t?"choosen":""," ").concat(a?"hasIcon":""),onClick:h,"data-value":t,children:Object(p.jsxs)("span",{style:{pointerEvents:"none"},children:[a||null,Object(p.jsx)("span",{style:{verticalAlign:"middle"},children:n})]})},t)}))})},C=n(108),_=n.n(C),k=n(109),L=n(20),y=n(211);function E(e,t){var n=document.createElement("a");document.body.appendChild(n),n.download=e,n.href=t,n.click(),n.remove()}_.a.stringToBytes=_.a.stringToBytesFuncs["UTF-8"];var S={black:"#000000",white:"#ffffff",purple:"#502379",yellow:"#FDC220",green:"#1BBE6F",blue:"#82D0F4",red:"#E63E12",transparent:"transparent"};function q(e){var t=e.content,n=e.size,a=e.margin,r=e.errorCorrectionLevel,c=e.backgroundColor,l=e.foregroundColor,o=e.displayLogo;if("yes"===o?o=!0:"no"===o&&(o=!1),""===t)return{qrcode_svg:null,realCanvasSize:null};var i=parseInt(n),s=parseInt(a)||0,u=_()(0,r);u.addData(t),u.make();var d=u.getModuleCount(),j=Math.ceil(i/d),b=u.createSvgTag({cellSize:j,margin:j*s,scalable:!0}),h=d*j+j*(2*s);if(!0===o){var p=.4*i,f=.5*h-.5*p;b=b.replace("</svg>",'\n        <svg x="'.concat(f,'" y="').concat(f,'" width="').concat(p,'" height="').concat(p,'" viewBox="0 0 2083 2083" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect width="2083" height="2083" rx="1041.5" fill="logo_bg"/>\n        <path d="M1653.47 1157.13V982.509H1782.78V865.558H1653.47V707.932L1512.84 730.219V1159.04C1512.84 1191.11 1515.78 1220.38 1521.81 1246.79C1527.77 1273.2 1538.29 1295.7 1553.44 1314.24C1568.52 1332.77 1588.67 1347.26 1613.83 1357.64C1638.98 1368.01 1670.76 1373.23 1709.15 1373.23C1739.38 1373.23 1764.83 1370.73 1785.57 1365.65C1806.32 1360.65 1825.22 1354.62 1842.21 1347.71L1822.35 1238.26C1809.11 1243.33 1794.55 1247.23 1778.44 1250.03C1762.41 1252.82 1746.81 1254.29 1731.73 1254.29C1700.25 1254.29 1679.36 1245.47 1668.99 1227.89C1658.62 1210.31 1653.47 1186.7 1653.47 1157.13Z" fill="logo_fg"/>\n        <path d="M642.687 1361.9C668.578 1307.25 694.175 1250.32 719.331 1191.18C744.486 1132.05 768.391 1073.57 791.046 1015.68C813.701 957.795 834.516 902.482 853.64 849.744C872.691 796.859 889.535 749.637 904.172 707.932H747.428C735.145 746.033 721.464 786.855 706.532 830.473C691.527 874.164 676.301 917.708 660.781 961.032C645.261 1004.43 630.183 1045.91 615.619 1085.63C601.055 1125.35 587.595 1159.55 575.311 1188.24C562.292 1159.33 548.611 1125.06 534.415 1085.34C520.146 1045.62 505.288 1004.06 489.768 960.737C474.248 917.414 458.949 873.87 443.944 830.252C428.939 786.561 415.331 745.812 403.121 707.932H240.787C254.689 749.416 271.165 796.638 290.289 849.523C309.413 902.409 330.303 957.722 353.104 1015.54C375.906 1073.35 399.958 1131.82 425.261 1190.89C450.564 1249.95 476.234 1306.96 502.272 1361.9H642.687Z" fill="logo_fg"/>\n        <path d="M1466.41 707.932L1325.78 730.219V1361.9H1466.41V707.932Z" fill="logo_fg"/>\n        <path d="M1286.51 1120.28C1286.51 979.568 1172.43 865.485 1031.72 865.485C973.684 865.485 920.211 884.904 877.402 917.488C865.486 949.337 852.982 981.995 839.816 1015.54C820.839 1063.93 801.053 1112.85 780.311 1162.13C800.391 1282.98 905.279 1375.07 1031.72 1375.07C1172.43 1375.07 1286.51 1260.99 1286.51 1120.28ZM1158.97 1120.28C1158.97 1189.93 1102.48 1246.42 1032.82 1246.42C963.166 1246.42 906.677 1189.93 906.677 1120.28C906.677 1050.62 963.166 994.132 1032.82 994.132C1102.48 994.132 1158.97 1050.62 1158.97 1120.28Z" fill="logo_fg"/>\n        </svg>\n      </svg>\n      '))}var g=c,v=l;v===g&&("white"===g?v="purple":g="white"),"white"!==v&&"transparent"!==g&&(g="white");var O="white",m="purple";"purple"===g&&"white"===v&&(O="purple",m="white");var x=S[g]||"white",w=S[v]||"black",C=S[O]||"white",k=S[m]||"black";return{qrcode_svg:b=b.replace(/fill="black"/g,'fill="'.concat(w,'"')).replace(/fill="white"/g,'fill="'.concat(x,'"')).replace(/fill="logo_bg"/g,'fill="'.concat(C,'"')).replace(/fill="logo_fg"/g,'fill="'.concat(k,'"')),realCanvasSize:h}}var F="LMQH".split(""),M={L:0,M:1,Q:2,H:3},z=null;var B,N=(B=function(e){var t=e.getString,n=Object(c.useRef)(null),a=Object(L.d)().search.substr(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{}),l=Object(c.useState)("1000"),o=Object(r.a)(l,2),i=o[0],s=o[1],u=Object(c.useState)(null),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)("M"),g=Object(r.a)(h,2),m=g[0],C=g[1],_=Object(c.useState)(a.c||""),S=Object(r.a)(_,2),B=S[0],N=S[1],V=Object(c.useState)(null),G=Object(r.a)(V,2),D=G[0],I=G[1],H=Object(c.useState)(null),T=Object(r.a)(H,2),R=T[0],U=T[1],W=Object(c.useState)("1"),A=Object(r.a)(W,2),Z=A[0],P=A[1],Q=Object(c.useState)("white"),J=Object(r.a)(Q,2),K=J[0],Y=J[1],X=Object(c.useState)("purple"),$=Object(r.a)(X,2),ee=$[0],te=$[1],ne=Object(c.useState)("yes"),ae=Object(r.a)(ne,2),re=ae[0],ce=ae[1],le=Object(c.useState)(!0),oe=Object(r.a)(le,1)[0],ie=Object(c.useState)(F.length-1),se=Object(r.a)(ie,2),ue=se[0],de=se[1],je=Math.min(ue,F.length-1),be=F[F.length-1];be=M[m]<je?F[je]:m;var he=Object(c.useCallback)((function(e){clearTimeout(z);var t=e.target.value;t.length<=0&&t.length>=1200?N(""):z=setTimeout((function(){N(t)}),400)}),[N]);Object(c.useEffect)((function(){var e=K;function t(e,t){return a.apply(this,arguments)}function a(){return(a=Object(O.a)(v.a.mark((function a(r,c){var l,o,i,s,u,d,j,b;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l=F[c],o=q({content:B,size:1e3,margin:4,errorCorrectionLevel:l,backgroundColor:e,foregroundColor:ee,displayLogo:r}),i=o.qrcode_svg,s=o.realCanvasSize,null!==i){a.next=6;break}U(!1),a.next=14;break;case 6:return u=n.current,d=u.getContext("2d"),(j=k.a.fromString(d,i)).resize(s,s),a.next=12,j.render();case 12:b=u.toDataURL("image/jpeg"),y.a.scanImage(b).then((function(e){de(c),U(!0)})).catch((function(e){c<F.length-1?t(r,c+1):U(!1)}));case 14:case"end":return a.stop()}}),a)})))).apply(this,arguments)}"transparent"===e&&(e="white"===ee?"black":"white"),t(re,0)}),[B,K,ee,re,n,U,de]),Object(c.useEffect)((function(){var e=q({content:B,size:i,margin:Z,errorCorrectionLevel:be,backgroundColor:K,foregroundColor:ee,displayLogo:!1!==oe&&re}),t=e.qrcode_svg,n=e.realCanvasSize;b(n),I(t)}),[oe,be,B,i,Z,K,ee,re,b,I]);var pe=function(){var e=Object(O.a)(v.a.mark((function e(){var t,a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.current,a=t.getContext("2d"),(r=k.a.fromString(a,D)).resize(j,j),e.next=6,r.render();case 6:c=t.toDataURL("image/jpeg"),window.umami.trackEvent("E: jpeg"),window.umami.trackEvent("BG: "+K),window.umami.trackEvent("FG: "+ee),window.umami.trackEvent("Logo: "+re),window.umami.trackEvent("ECL: "+m),window.umami.trackEvent("Size: "+i),window.umami.trackEvent("Length: "+Math.round(.1*B.length*10)),E("volt-qrcode.jpeg",c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(O.a)(v.a.mark((function e(){var t,a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.current,a=t.getContext("2d"),(r=k.a.fromString(a,D)).resize(j,j),e.next=6,r.render();case 6:c=t.toDataURL("image/png"),window.umami.trackEvent("E: png"),window.umami.trackEvent("BG: "+K),window.umami.trackEvent("FG: "+ee),window.umami.trackEvent("Logo: "+re),window.umami.trackEvent("ECL: "+m),window.umami.trackEvent("Size: "+i),window.umami.trackEvent("Length: "+Math.round(.1*B.length*10)),E("volt-qrcode.png",c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=["purple","white","black"].map((function(e){return{value:e,title:t(e)}})),ve=["purple","white","black","transparent"];"white"!==ee?ve=["white","transparent"]:"white"===ee&&(ve=["purple","black","transparent"]),ve=ve.map((function(e){return{value:e,title:t(e)}}));var Oe=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"foreground_color_headline"})}),Object(p.jsx)(w,{onChange:te,ariaLabel:t("foreground_color_headline"),defaultValue:ee,items:ge}),Object(p.jsx)("br",{}),ve.length<=1?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"background_color_headline"})}),Object(p.jsx)(w,{onChange:Y,ariaLabel:t("background_color_headline"),defaultValue:K,items:ve}),Object(p.jsx)("br",{})]}),!0===oe?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"display_logo_headline"})}),Object(p.jsx)(w,{onChange:ce,ariaLabel:t("display_logo_headline"),defaultValue:re,items:[{value:"yes",title:t("label_display_logo_yes")},{value:"no",title:t("label_display_logo_no")}]}),Object(p.jsx)("br",{})]}):null,je===F.length-1?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"error_correction_level_headline"})}),Object(p.jsx)(w,{onChange:C,ariaLabel:t("error_correction_level_headline"),defaultValue:be,items:F.slice(je).map((function(e){return{value:e,title:t("label_error_correction_level_"+e)}}))}),Object(p.jsx)("br",{})]}),Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"margin_headline"})}),Object(p.jsx)(w,{onChange:P,ariaLabel:t("margin_headline"),defaultValue:Z,items:[{value:"1",title:t("label_margin_yes")},{value:"0",title:t("label_margin_no")}]}),Object(p.jsx)("br",{})]});return Object(p.jsxs)("div",{className:x.a.qrcodeWrapper,children:[Object(p.jsx)("h1",{children:Object(p.jsx)(f,{id:"website_title"})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:Object(p.jsx)(f,{id:"text_content_input_info"})}),Object(p.jsx)("textarea",{className:x.a.qrcodeContentInput,placeholder:t("text_content_input_placeholder"),onChange:he,style:{marginTop:"0"},defaultValue:B}),B.length>0?Oe:null,null===D?null:R?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:x.a.qrCodeSvgWrapper,dangerouslySetInnerHTML:{__html:D}}),Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"size_headline"})}),Object(p.jsx)(w,{onChange:s,ariaLabel:t("size_headline"),defaultValue:i,items:[{value:"500",title:"500px"},{value:"1000",title:"1000px"},{value:"2000",title:"2000px"},{value:"4000",title:"4000px"}]}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:Object(p.jsx)(f,{id:"download_headline"})}),Object(p.jsx)("button",{onClick:function(){var e="data:image/svg+xml;base64,"+btoa(D);window.umami.trackEvent("E: svg"),window.umami.trackEvent("BG: "+K),window.umami.trackEvent("FG: "+ee),window.umami.trackEvent("Logo: "+re),window.umami.trackEvent("ECL: "+m),window.umami.trackEvent("Size: "+i),window.umami.trackEvent("Length: "+Math.round(.1*B.length*10)),E("volt-qrcode.svg",e)},className:"green "+x.a.downloadButton,children:Object(p.jsx)(f,{id:"svg_label"})}),Object(p.jsx)("button",{onClick:fe,className:"green "+x.a.downloadButton,children:Object(p.jsx)(f,{id:"png_label"})}),"transparent"===K?null:Object(p.jsx)("button",{onClick:pe,className:"green "+x.a.downloadButton,children:Object(p.jsx)(f,{id:"jpeg_label"})})]}):Object(p.jsx)("p",{children:Object(p.jsx)("strong",{children:Object(p.jsx)(f,{id:"error_qrcode_not_usable"})})}),Object(p.jsx)("canvas",{style:{display:"none"},ref:n})]})},function(e){var t=l.a.useContext(h.a);return l.a.createElement(B,Object(d.a)({fluentByObject:function(e,n){if(n||(n=null),e){var r,c=t.supportedLocales||[],l=Object.keys(e).filter((function(e){return c.includes(e)})),o=Object(b.a)(t.userLocales,l,{defaultLocale:t.defaultLocale}),i=Object(a.a)(o);try{for(i.s();!(r=i.n()).done;){var s=r.value;if(e[s])return e[s]}}catch(u){i.e(u)}finally{i.f()}return n}return n},getString:function(e,n,a){return t.getString(e,n,a||" ")}},e))});var V=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:u.a.app,children:Object(p.jsx)(N,{})}),Object(p.jsxs)("footer",{children:[Object(p.jsx)("a",{href:"mailto:thomas.rosen@volteuropa.org",children:Object(p.jsx)(f,{id:"contact"})}),"\xa0 \u2022 \xa0",Object(p.jsx)("a",{href:"https://github.com/voltbonn/qrcode.volt.link",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(f,{id:"source_code"})})]})]})},G=n(143),D=(n(426),n(105)),I=n(94),H={de:"Deutsch",en:"English"},T=Object.keys(H),R="en";function U(e){return W.apply(this,arguments)}function W(){return(W=Object(O.a)(v.a.mark((function e(t){var a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(430)("./"+t+".ftl");case 2:return a=e.sent,e.next=5,fetch(a.default);case 5:return r=e.sent,e.next=8,r.text();case 8:return c=e.sent,e.abrupt("return",Object(D.a)({},t,new I.b(c)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(O.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(U));case 2:return n=e.sent,r=n.reduce((function(e,t){return Object.assign(e,t)})),e.abrupt("return",v.a.mark((function e(){var n,c,l,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(a.a)(t),e.prev=1,n.s();case 3:if((c=n.n()).done){e.next=11;break}return l=c.value,(o=new I.a(l)).addResource(r[l]),e.next=9,o;case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=e.userLocales,n=e.children,a=e.onLocaleChange,l=Object(c.useState)(function(){var e=new I.a("");return e.addResource(new I.b("")),new j.c([e])}()),o=Object(r.a)(l,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(v.a.mark((function e(){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(b.a)(t,T,{defaultLocale:R}),a&&a(n),e.next=4,A(n);case 4:r=e.sent,(c=new j.c(r())).userLocales=t,c.defaultLocale=R,c.supportedLocales=T,s(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a]),i?Object(p.jsx)(j.a,{l10n:i,children:n}):Object(p.jsx)("div",{children:"Loading texts\u2026"})}function Q(){var e=Object(c.useState)(navigator.languages),t=Object(r.a)(e,2),n=t[0],l=t[1],o=Object(c.useState)(null),i=Object(r.a)(o,2),s=i[0],u=i[1];Object(c.useEffect)((function(){if(window.umami){var e=navigator.languages;if(e||Array.isArray(e)){var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,c=(r=r.toLowerCase()).split("-")[0];c!==r&&window.umami.trackEvent("L: "+c),window.umami.trackEvent("L: "+r)}}catch(l){n.e(l)}finally{n.f()}}}}),[]);var d=Object(c.useCallback)((function(e){l([e.target.dataset.locale])}),[l]),j=Object(c.useCallback)((function(e){u(e.length>0?e[0]:"")}),[u]);return Object(p.jsx)(P,{userLocales:n,onLocaleChange:j,children:Object(p.jsx)(V,{locales:H,currentLocale:s,onLanguageChange:d})},"AppLocalizationProvider")}window.domains={frontend:"http://localhost:3000/",backend:"http://localhost:4000/"},i.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(G.a,{children:Object(p.jsx)(Q,{})})}),document.getElementById("root"))},57:function(e,t,n){e.exports={qrcodeWrapper:"Generator_qrcodeWrapper__1MUQn",qrcodeContentInput:"Generator_qrcodeContentInput__1C_pN",qrCodeSvgWrapper:"Generator_qrCodeSvgWrapper__1NpDK",downloadButton:"Generator_downloadButton__FFIYG"}}},[[431,1,2]]]);
//# sourceMappingURL=main.1701711b.chunk.js.map