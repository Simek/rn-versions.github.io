(this["webpackJsonprn-version-tracker"]=this["webpackJsonprn-version-tracker"]||[]).push([[0],{146:function(e,t,a){e.exports={app:"App_app__2ziFi",contentContainer:"App_contentContainer__3BvVB",cardContainer:"App_cardContainer__2YSdb"}},147:function(e,t,a){e.exports={chartContainer:"VersionDownloadChart_chartContainer__3BBDr",placeholderContainer:"VersionDownloadChart_placeholderContainer__3zvnR",legend:"VersionDownloadChart_legend__1O_OJ"}},35:function(e,t,a){e.exports={packageCardFrame:"PackageCard_packageCardFrame__37prK",visibleCardFrame:"PackageCard_visibleCardFrame__3sw4n",fadedCardFrame:"PackageCard_fadedCardFrame__h8you",noDataCardFrame:"PackageCard_noDataCardFrame__9FLQg",packageCardContent:"PackageCard_packageCardContent__3Kr50",visibleCardContent:"PackageCard_visibleCardContent__4_7O-",fadedCardContent:"PackageCard_fadedCardContent__1fKCN",noDataCardContent:"PackageCard_noDataCardContent__2PBHC",headerLeft:"PackageCard_headerLeft__udvRl",header:"PackageCard_header__1bpM1",headerText:"PackageCard_headerText__3etfm",packageName:"PackageCard_packageName__3oAJu",headerControls:"PackageCard_headerControls__3S0-z",chartContainer:"PackageCard_chartContainer__2-gCP"}},40:function(e,t,a){e.exports={app:"NavBar_app__2ndwE",contentContainer:"NavBar_contentContainer__1HrNg",cardContainer:"NavBar_cardContainer__2-0S2",nav:"NavBar_nav__kUiGN",navSpacer:"NavBar_navSpacer__1qgrd",navContent:"NavBar_navContent__WY6pJ",reactLogo:"NavBar_reactLogo__31oQg",gitHubLink:"NavBar_gitHubLink__129fm",gitHubIconStroke:"NavBar_gitHubIconStroke__fEafs",gitHubIconButton:"NavBar_gitHubIconButton__B7oPV",gitHubTextButton:"NavBar_gitHubTextButton__31Ju7",gitHubLogo:"NavBar_gitHubLogo__2VQ1M",mobileHeader:"NavBar_mobileHeader__2NWsD",mobileHeaderContent:"NavBar_mobileHeaderContent__3s4_A",mobileBrand:"NavBar_mobileBrand__3wO91",brand:"NavBar_brand__2ilIm",pivot:"NavBar_pivot__2oWsQ"}},465:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(61),o=a.n(i),c=a(25),s=a(146),u=a.n(s),l=a(43),d=a.n(l),h=a(101),v=a(35),m=a.n(v),f={area:{isAnimationActive:!1},responsiveContainer:{width:"100%",height:230},grid:{strokeDasharray:"3 3"},xAxis:{height:32,tickLine:!1,tickMargin:10},yAxis:{width:72,tickLine:!1,tickMargin:10,tickSize:0,tickCount:5},tooltip:{animationDuration:300,animationEasing:"ease-in-out"}},b=a(530),j=a(527),p=a(532),g=a(526),_=a(523),O=a(150),y=a(91),x=a.n(y);function C(e){if("0.0"===e)return"nightly";var t=e.match(Object(O.a)(/^0\.0\.0\x2D([0-9a-f]{1,7})[0-9a-f]*$/,{hash:1}));return t?"nightly@".concat(t.groups.hash):e}var k=function(e){return x.a.lt(e,"0.0.0")},N=function(e,t){return x.a.gte(e,"".concat(t,".0"),{includePrerelease:!0})},D={"@types/react-native":{friendlyName:"DefinitelyTyped Typings",versionFilter:function(e){return N(e,"0.63")}},"react-native":{friendlyName:"React Native",versionFilter:function(e){return N(e,"0.63")||k(e)},versionLabeler:function(e){if("0.0"===e)return"nightly";var t=e.match(Object(O.a)(/^0\.0\.0\x2D([0-9]{4})([0-9]{2})([0-9]{2})\x2D[0-9]{4}\x2D[0-9a-f]+$/,{year:1,month:2,day:3}));if(t){var a=parseInt(t.groups.year,10),n=parseInt(t.groups.month,10),r=parseInt(t.groups.day,10),i=new Date(a,n-1,r);return"nightly@".concat(i.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit"}))}return e}},"react-native-macos":{friendlyName:"React Native macOS",versionFilter:function(e){return N(e,"0.63")||k(e)},versionLabeler:C},"react-native-web":{friendlyName:"React Native Web",versionFilter:function(e){return N(e,"0.11")||k(e)},versionLabeler:C},"react-native-windows":{friendlyName:"React Native Windows",versionFilter:function(e){return(N(e,"0.63")||k(e))&&"1.0.0"!==e},versionLabeler:function(e){if("0.0"===e)return"canary";var t=e.match(Object(O.a)(/^0\.0\.0\x2D(canary.[0-9]+)$/,{canary:1}));return t?t.groups.canary:e}}},w=a(130),P=a(263),L=a(30),S=a(19),M=a(49),T=a(230),B=a.n(T);function F(e,t,a){var n=(2-t/100)*a/2,r=t*a/(n<50?2*n:200-2*n);return"hsl(".concat(e,", ").concat(Math.round(r),"%, ").concat(Math.round(n),"%)")}function H(e,t){return Math.abs((e-t+.5)%1-.5)}var I=a(147),A=a.n(I),z=a(73),V=a.n(z),R=a(131),E=100;function J(e){if(e){var t=Q(e)||function(e){if(e.startsWith("#")&&7===e.length&&/^#[\da-fA-F]{6}$/.test(e))return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16),a:E}}(e)||function(e){if(e.startsWith("#")&&4===e.length&&/^#[\da-fA-F]{3}$/.test(e))return{r:parseInt(e[1]+e[1],16),g:parseInt(e[2]+e[2],16),b:parseInt(e[3]+e[3],16),a:E}}(e)||function(e){var t=e.match(/^hsl(a?)\(([\d., ]+)\)$/);if(t){var a=!!t[1],n=a?4:3,r=t[2].split(/ *, */).map(Number);if(r.length===n){var i=U({h:r[0],s:r[1],l:r[2]});return i.a=a?100*r[3]:E,i}}}(e);return t||function(e){if("undefined"===typeof document)return;var t=document.createElement("div");t.style.backgroundColor=e,t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",t.style.height="1px",t.style.width="1px",document.body.appendChild(t);var a=getComputedStyle(t).backgroundColor;if(document.body.removeChild(t),"rgba(0, 0, 0, 0)"===a||"transparent"===a){switch(e.trim()){case"transparent":case"#0000":case"#00000000":return{r:0,g:0,b:0,a:0}}return}return Q(a)}(e)}}function Q(e){if(e){var t=e.match(/^rgb(a?)\(([\d., ]+)\)$/);if(t){var a=!!t[1],n=a?4:3,r=t[2].split(/ *, */).map(Number);if(r.length===n)return{r:r[0],g:r[1],b:r[2],a:a?100*r[3]:E}}}}function W(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;return 100!==n?"rgba(".concat(e,", ").concat(t,", ").concat(a,", ").concat(n/100,")"):"#".concat(K(e,t,a))}function K(e,t,a){return[$(e),$(t),$(a)].join("")}function $(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}function U(e){var t=(1-Math.abs(2*e.l-1))*e.s,a=t*(1-Math.abs(e.h/60%2-1)),n=e.l-t/2,r=0,i=0,o=0;return e.h<60?(r=t,i=a,o=0):e.h<120?(r=a,i=t,o=0):e.h<180?(r=0,i=t,o=a):e.h<240?(r=0,i=a,o=t):e.h<300?(r=a,i=0,o=t):(r=t,i=0,o=a),{r:Math.round(255*(r+n)),g:Math.round(255*(i+n)),b:Math.round(255*(o+n))}}var Y={minimal:1.5,low:3,medium:4.5,high:6},G={rgbLookup:{},cache:{}};function q(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4.5,n=Z(t,a);return-1===n.min?{r:0,g:0,b:0}:2===n.min?{r:255,g:255,b:255}:X(e,n)}function X(e,t){var a=ee(e.r,e.g,e.b);if(a>=t.min&&a<=t.max)return{r:e.r,g:e.g,b:e.b};for(var n=function(e){var t=e.r/255,a=e.g/255,n=e.b/255,r=Math.max(t,a,n),i=Math.min(t,a,n),o=r-i,c=0;0===o?c=0:t===r?c=(a-n)/o%6:a===r?c=(n-t)/o+2:n===r&&(c=(t-a)/o+4),(c*=60)<0&&(c+=360);var s=(r+i)/2,u=0;return 0!==o&&(u=o/(1-Math.abs(2*s-1))),{h:c,s:u,l:s}}(e),r=Math.max(t.min-.01,0),i=Math.min(t.max+.01,1),o=a<r?n.l:0,c=a>i?n.l:1,s={r:0,g:0,b:0};a<r||a>i;)n.l=(c+o)/2,(a=ee((s=U(n)).r,s.g,s.b))>i?c=(c+o)/2:a<r&&(o=(c+o)/2);return s}function Z(e,t){var a=ee(e.r,e.g,e.b),n=(a+.05)/t-.05;return n>0&&n<1?{min:0,max:n}:(n=t*(a+.05)-.05)<1&&n>0?{min:n,max:1}:{min:-1,max:-1}}function ee(e,t,a){return.2126*te(e/255)+.7152*te(t/255)+.0722*te(a/255)}function te(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}var ae=a(3);var ne=function(e){var t=e.label,a=e.payload,n=e.measurementTransform,r=e.theme,i=Object(M.a)(null!==a&&void 0!==a?a:[]);return i.reverse(),Object(ae.jsx)(R.a.Consumer,{children:function(e){var a,o,c;r=null!==(a=r)&&void 0!==a?a:e;var s,u=i.length>0&&Object(ae.jsx)("ul",{className:V.a.versionsList,children:i.map((function(e,t){var a=r?function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"medium",n=Y[a],r=JSON.stringify(e),i=JSON.stringify(e),o=G[i]=G[i]||{},c=o[r]=o[r]||{};if(!c[a]){var s=q(J(e),J(t),n);c[a]=W(s.r,s.g,s.b)}return c[a]}(e.color,r.semanticColors.bodyBackground,"medium"):e.color,i=function(e,t,a){var n=t.payload.versionCounts,r=e/Object.values(n).reduce((function(e,t){return e+t}),0)*100;return"percentage"===a?"".concat(Math.round(100*r)/100,"%"):"".concat(e.toLocaleString()," (").concat(Math.round(r),"%)")}(e.value,e,n);return Object(ae.jsxs)("li",{className:V.a.versionsListItem,children:[Object(ae.jsx)("div",{className:V.a.versionColorIndicator,style:{backgroundColor:a}}),Object(ae.jsx)(b.a,{variant:"small",className:V.a.versionLabel,children:e.name}),Object(ae.jsx)(b.a,{variant:"small",className:V.a.versionCount,children:i})]},t)}))});return Object(ae.jsxs)(g.a,{theme:r,className:V.a.frame,style:{backgroundColor:null===(o=null!==(c=r)&&void 0!==c?c:e)||void 0===o?void 0:o.semanticColors.bodyBackground},children:[Object(ae.jsx)(b.a,{className:V.a.date,variant:"medium",children:(s=t,new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric"}))}),u]})}})},re=a(507),ie=a(508),oe=a(251),ce=a(252),se=a(511),ue=a(110),le=a(105),de=a(265),he=a(142),ve=["ref"],me=he.a;function fe(e,t){var a=e[0],n=e[e.length-1];if(0===t)return[];if(1===t)return[a];if(2===t)return[a,n];for(var r=n-a,i=t-1,o=6048e5;Math.floor(r/o)>i;)o*=2;var c,s=new Set([a]),u=be(a,o),l=Object(S.a)(e);try{for(l.s();!(c=l.n()).done;){var d=c.value;d>=u&&(s.add(d),u=be(d,o))}}catch(h){l.e(h)}finally{l.f()}return Object(M.a)(s)}function be(e,t){var a=new Date(e);return a.setHours(0,0,0,0),a.getTime()+t}var je=function(e){var t,a=e.historyPoints,r=e.maxDaysShown,o=e.maxVersionsShown,s=e.maxTicks,u=e.showLegend,l=e.showTooltip,d=e.measurementTransform,h=e.versionLabeler,v=(e.theme,e.tooltipTheme),m=Object(n.useState)(null),b=Object(c.a)(m,2),j=b[0],p=b[1];r=null!==(t=r)&&void 0!==t?t:30;var g,_,O=o?function(e,t,a){if(0===e.length)return[];var n,r=e[e.length-1].date,i=new Date(r).setHours(0,0,0,0)-24*a*60*60*1e3,o=[],c=Object(S.a)(e);try{var s=function(){var e=n.value;if(e.date>=i){var t=o.find((function(t){return t.version===e.version})),a=e.date<i?0:e.count;t?t.count+=a:o.push({version:e.version,count:a})}};for(c.s();!(n=c.n()).done;)s()}catch(F){c.e(F)}finally{c.f()}var u,l=o.sort((function(e,t){return e.count-t.count})).slice(-t).map((function(e){return e.version})),d=[],h=Object(S.a)(e);try{for(h.s();!(u=h.n()).done;){var v=u.value;l.includes(v.version)&&!d.includes(v.version)&&d.push(v.version)}}catch(F){h.e(F)}finally{h.f()}var m,f=[],b=Object(S.a)(e);try{for(b.s();!(m=b.n()).done;){var j=m.value;l.includes(j.version)&&f.push(j)}}catch(F){b.e(F)}finally{b.f()}for(var p=new Map,g=0,_=f;g<_.length;g++){var O,y=_[g],x=null!==(O=p.get(y.date))&&void 0!==O?O:[];p.set(y.date,[].concat(Object(M.a)(x),[y]))}var C,k=Object(M.a)(p.keys()).sort(),N=[],D=Object(S.a)(k);try{for(D.s();!(C=D.n()).done;){var w=C.value;if(!(w<i)){var P,T=Object(S.a)(d);try{var B=function(){var e=P.value,t=p.get(w).find((function(t){return t.version===e}));t?N.push(Object(L.a)({date:w},t)):N.push({date:w,version:e,count:0})};for(T.s();!(P=T.n()).done;)B()}catch(F){T.e(F)}finally{T.f()}}}}catch(F){D.e(F)}finally{D.f()}return N}(a,o,r):a,y="percentage"===d?function(e){var t,a={},n=Object(S.a)(e);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,o=null!==(r=a[i.date])&&void 0!==r?r:0;a[i.date]=o+i.count}}catch(c){n.e(c)}finally{n.f()}return e.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{count:e.count/a[e.date]})}))}(O):O,x=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}),C=new Set(y.map((function(e){return e.version}))),k=function(e,t,a){var r=void 0;return e.map((function(e){var a=function(e,t){var a,n,r=B.a.create(e),i=100;do{n=r.random(),n+=.618033988749895,n%=1}while(t&&--i>0&&(H(n,t.adjacentHue)<.25||t.allHues.find((function(e){return H(n,e)<.05}))));return{color:F(360*n,100,90),avoidToken:{adjacentHue:n,allHues:[].concat(Object(M.a)(null!==(a=null===t||void 0===t?void 0:t.allHues)&&void 0!==a?a:[]),[n])}}}(e,r),i=a.color,o=a.avoidToken;return r=o,Object(n.createElement)(de.a,Object(L.a)(Object(L.a)({},f.area),{},{name:t?t(e):e,key:e,dataKey:function(t){return t.versionCounts[e]},stackId:"1",stroke:i,fill:i}))}))}(Object(M.a)(C),h),N=[],D=Object(S.a)(C);try{for(D.s();!(g=D.n()).done;){var T,I=g.value,z=Object(S.a)(y);try{var V=function(){var e=T.value;if(e.version===I){var t=N.find((function(t){return t.date===e.date}));t?t.versionCounts[I]=e.count:N.push({date:e.date,versionCounts:Object(w.a)({},I,e.count)})}};for(z.s();!(T=z.n()).done;)V()}catch(R){z.e(R)}finally{z.f()}}}catch(R){D.e(R)}finally{D.f()}return 0===y.length?Object(ae.jsx)("div",{className:A.a.placeholderContainer,style:{height:f.responsiveContainer.height}}):Object(ae.jsxs)("div",{className:A.a.chartContainer,children:[Object(ae.jsx)(re.a,Object(L.a)(Object(L.a)({},f.responsiveContainer),{},{children:Object(ae.jsxs)(ie.a,{data:N,children:[Object(ae.jsx)(oe.a,Object(L.a)(Object(L.a)({},f.xAxis),{},{dataKey:"date",type:"number",scale:"time",domain:["dataMin","dataMax"],tickFormatter:function(e){return x.format(new Date(e))},interval:0,ticks:fe(y.map((function(e){return e.date})),null!==s&&void 0!==s?s:6)})),Object(ae.jsx)(ce.a,Object(L.a)(Object(L.a)({},f.yAxis),{},{type:"number"},"percentage"===d?{domain:[0,1],tickFormatter:function(e){return"".concat(Math.round(100*e),"%")}}:{domain:["auto","auto"],tickFormatter:function(e){return e.toLocaleString()}})),Object(ae.jsx)(se.a,Object(L.a)({},f.grid)),!1!==l&&Object(ae.jsx)(ue.a,{content:(_={measurementTransform:d,theme:v},function(e){return Object(ae.jsx)(ne,Object(L.a)(Object(L.a)({},_),e))})}),!1!==u&&j&&Object(ae.jsx)(le.a,{height:0,content:function(e){e.ref;var t=Object(P.a)(e,ve);return Object(i.createPortal)(Object(ae.jsx)(me,Object(L.a)({},t)),j)}}),k]})})),Object(ae.jsx)("div",{ref:function(e){return p(e)},className:A.a.legend})]})},pe=a(253),ge=a(254),_e=function(){function e(t,a){Object(pe.a)(this,e),this.packageDescription=void 0,this.historyPoints=void 0,this.majorDatePoints=null,this.patchDatePoints=null,this.prereleaseDatePoints=null,this.packageDescription=D[t],this.historyPoints=a}return Object(ge.a)(e,[{key:"getMajorDatePoints",value:function(){return this.majorDatePoints||(this.majorDatePoints=this.accumulateDatePoints({versionMapper:this.mapToMajor})),this.majorDatePoints}},{key:"mapToMajor",value:function(e){var t=x.a.parse(e);return 0===t.major?"0.".concat(t.minor):"".concat(t.major,".0")}},{key:"getPatchDatePoints",value:function(){return this.patchDatePoints||(this.patchDatePoints=this.accumulateDatePoints()),this.patchDatePoints}},{key:"getPrereleaseDataPoints",value:function(){return this.prereleaseDatePoints||(this.prereleaseDatePoints=this.accumulateDatePoints({extraFilter:function(e){return!!x.a.prerelease(e.version)}})),this.prereleaseDatePoints}},{key:"getDatePoints",value:function(e){switch(e){case"major":return this.getMajorDatePoints();case"patch":return this.getPatchDatePoints();case"prerelease":return this.getPrereleaseDataPoints()}}},{key:"accumulateDatePoints",value:function(e){var t,a=this;if(t=(null===e||void 0===e?void 0:e.extraFilter)?this.historyPoints.filter((function(t){return e.extraFilter(t)&&a.packageDescription.versionFilter(t.version)})):this.historyPoints.filter((function(e){return a.packageDescription.versionFilter(e.version)})),null===e||void 0===e?void 0:e.versionMapper){var n,r={},i=Object(S.a)(t);try{var o=function(){var t,a=n.value,i=e.versionMapper(a.version),o=null!==(t=r[i])&&void 0!==t?t:[];r[i]=o;var c=o.find((function(e){return a.date===e.date}));c?c.count+=a.count:o.push({date:a.date,count:a.count})};for(i.s();!(n=i.n()).done;)o()}catch(d){i.e(d)}finally{i.f()}t=[];for(var s=function(){var e,a=Object(c.a)(l[u],2),n=a[0],r=a[1].sort((function(e,t){return e.date-t.date}));(e=t).push.apply(e,Object(M.a)(r.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{version:n})}))))},u=0,l=Object.entries(r);u<l.length;u++)s()}return t}}],[{key:"get",value:function(){var t=Object(h.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.instances[a]){t.next=5;break}return t.next=3,e.loadHistoryFile(a);case 3:n=t.sent,e.instances[a]=new e(a,n.points);case 5:return t.abrupt("return",e.instances[a]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadHistoryFile",value:function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="@types/react-native"===e.t0?3:"react-native"===e.t0?6:"react-native-macos"===e.t0?9:"react-native-web"===e.t0?12:"react-native-windows"===e.t0?15:18;break;case 3:return e.next=5,a.e(3).then(a.t.bind(null,539,3));case 5:case 8:case 11:case 14:case 17:return e.abrupt("return",e.sent);case 6:return e.next=8,a.e(7).then(a.t.bind(null,540,3));case 9:return e.next=11,a.e(4).then(a.t.bind(null,541,3));case 12:return e.next=14,a.e(5).then(a.t.bind(null,542,3));case 15:return e.next=17,a.e(6).then(a.t.bind(null,543,3));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();_e.instances={};var Oe=a(79),ye=Object(Oe.a)({palette:{themePrimary:"#79bdbc",themeLighterAlt:"#f9fcfc",themeLighter:"#e6f4f4",themeLight:"#d2ebeb",themeTertiary:"#a9d7d6",themeSecondary:"#86c5c4",themeDarkAlt:"#6daaa9",themeDark:"#5c8f8f",themeDarker:"#446a69",neutralLighterAlt:"#302e2d",neutralLighter:"#383735",neutralLight:"#464443",neutralQuaternaryAlt:"#4e4d4b",neutralQuaternary:"#555352",neutralTertiaryAlt:"#72706e",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#252423"}}),xe=Object(Oe.a)({palette:{themePrimary:"#467877",themeLighterAlt:"#f5fafa",themeLighter:"#dae9e9",themeLight:"#bbd6d6",themeTertiary:"#82aead",themeSecondary:"#568887",themeDarkAlt:"#3f6c6b",themeDark:"#355b5a",themeDarker:"#274343",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#0d0d0c",neutralSecondary:"#111110",neutralPrimaryAlt:"#151514",neutralPrimary:"#252423",neutralDark:"#1e1d1c",black:"#222120",white:"#ffffff"}});function Ce(e){switch(e){case"major":return 56;case"patch":return 28;case"prerelease":return 14}}var ke=function(e){var t=e.loaded,a=e.hasData,n=e.theme,r=e.children;return Object(ae.jsx)(g.a,{theme:n,className:"".concat(m.a.packageCardFrame," ").concat(t?a?m.a.visibleCardFrame:m.a.noDataCardFrame:m.a.fadedCardFrame),children:Object(ae.jsx)("div",{className:"".concat(m.a.packageCardContent," ").concat(t?a?m.a.visibleCardContent:m.a.noDataCardContent:m.a.fadedCardContent),children:r})})},Ne=function(e){var t=e.identifier,a=e.versionFilter,r=e.theme,i=e.tooltipTheme,o=Object(n.useState)(a),s=Object(c.a)(o,2),u=s[0],l=s[1],v=Object(n.useState)(!1),g=Object(c.a)(v,2),O=g[0],y=g[1],x=Object(n.useState)(null),C=Object(c.a)(x,2),k=C[0],N=C[1];Object(n.useEffect)((function(){k||Object(h.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.get(t);case 2:a=e.sent,N(a);case 4:case"end":return e.stop()}}),e)})))()}),[k,t]),Object(n.useEffect)((function(){a!==u&&(y(!1),l(a))}),[a,u]);var w=null===k||void 0===k?void 0:k.getDatePoints(a),P=D[t];return Object(ae.jsxs)(ke,{theme:null!==r&&void 0!==r?r:xe,loaded:!!w,hasData:!!w&&w.length>0,children:[Object(ae.jsxs)("div",{className:m.a.header,children:[Object(ae.jsx)("div",{className:m.a.headerLeft}),Object(ae.jsxs)("div",{className:m.a.headerText,children:[Object(ae.jsx)(b.a,{variant:"large",className:m.a.packageName,children:P.friendlyName}),Object(ae.jsx)(b.a,{variant:"medium",children:"(Downloads/Week)"})]}),Object(ae.jsx)("div",{className:m.a.headerControls,children:Object(ae.jsx)(j.a,{content:"Show as percentage",theme:i,children:Object(ae.jsx)(p.a,{toggle:!0,"aria-label":"Show as percentage",disabled:!w||0===w.length,onRenderIcon:function(){return Object(ae.jsx)(_.a,{})},checked:O,onClick:function(){return y(!O)}})})})]}),w?Object(ae.jsx)("div",{className:m.a.chartContainer,children:Object(ae.jsx)(je,{historyPoints:w,maxDaysShown:Ce(a),maxVersionsShown:6,measurementTransform:O?"percentage":"totalDownloads",versionLabeler:P.versionLabeler,theme:r,tooltipTheme:i})}):Object(ae.jsx)("div",{style:{height:f.responsiveContainer.height}})]})},De=a(40),we=a.n(De),Pe=a(529),Le=a(260),Se=a(531),Me=a(267),Te=a(524),Be=a(143),Fe=Object(Be.a)({displayName:"ReactLogoIcon",svg:function(e){var t=e.classes;return Object(ae.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"120 2 600 600",className:t.svg,children:Object(ae.jsxs)("g",{fill:"#61DAFB",children:[Object(ae.jsx)("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),Object(ae.jsx)("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),Object(ae.jsx)("path",{d:"M520.5 78.1z"})]})})}}),He=function(e){var t=e.className;return Object(ae.jsxs)("div",{className:t,children:[Object(ae.jsx)(Fe,{className:we.a.reactLogo}),Object(ae.jsx)(b.a,{variant:"large",children:"React Native Versions"})]})},Ie=function(e){var t,a,n=null!==(t=e.theme)&&void 0!==t?t:ye,r={backgroundColor:(null!==(a=e.theme)&&void 0!==a?a:ye).semanticColors.bodyBackground};return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(g.a,{className:we.a.mobileHeader,theme:n,style:r,children:Object(ae.jsx)("div",{className:we.a.mobileHeaderContent,children:Object(ae.jsx)(He,{className:we.a.mobileBrand})})}),Object(ae.jsx)(g.a,{className:we.a.nav,theme:n,style:r,children:Object(ae.jsxs)("div",{className:we.a.navContent,children:[Object(ae.jsx)(He,{className:we.a.brand}),Object(ae.jsx)(Pe.a,{headersOnly:!0,className:we.a.pivot,onLinkClick:function(t){window.scrollTo({left:0,top:0,behavior:"smooth"}),e.onItemSelected&&e.onItemSelected(t.props.itemKey)},children:e.items.map((function(e){return Object(ae.jsx)(Le.a,{headerText:e.label,itemKey:e.key})}))}),Object(ae.jsxs)(Se.a,{className:we.a.gitHubLink,underline:!1,href:"https://github.com/rn-versions/rn-versions.github.io",target:"_blank",rel:"noreferrer",children:[Object(ae.jsx)(Me.a,{className:we.a.gitHubTextButton,text:"Contribute","aria-label":"Contribute",onRenderIcon:function(){return Object(ae.jsx)(Te.a,{className:we.a.gitHubLogo})}}),Object(ae.jsx)(p.a,{className:we.a.gitHubIconButton,"aria-label":"Contribute",onRenderIcon:function(){return Object(ae.jsx)(Te.a,{className:we.a.gitHubLogo})}})]})]})})]})},Ae=[{name:"react-native"},{name:"@types/react-native"},{name:"react-native-windows"},{name:"react-native-macos"},{name:"react-native-web"}],ze=[{label:"Major",key:"major"},{label:"Patch",key:"patch"},{label:"Prerelease",key:"prerelease"}];var Ve=function(){var e=Object(n.useState)("major"),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(ae.jsxs)("div",{className:u.a.app,children:[Object(ae.jsx)(Ie,{items:ze,onItemSelected:function(e){return r(e)},theme:ye}),Object(ae.jsx)("div",{className:u.a.contentContainer,children:Object(ae.jsx)("div",{className:u.a.cardContainer,children:Ae.map((function(e){return Object(ae.jsx)(Ne,{identifier:e.name,versionFilter:a,theme:xe,tooltipTheme:ye},e.name)}))})})]})};a(465);o.a.render(Object(ae.jsx)(r.a.StrictMode,{children:Object(ae.jsx)(Ve,{})}),document.body)},73:function(e,t,a){e.exports={frame:"VersionTooltip_frame__Ear68",date:"VersionTooltip_date__3iXaR",versionsList:"VersionTooltip_versionsList__pBT1t",versionsListItem:"VersionTooltip_versionsListItem__9IYnp",versionColorIndicator:"VersionTooltip_versionColorIndicator__16U_R",versionLabel:"VersionTooltip_versionLabel__3hu-9",versionCount:"VersionTooltip_versionCount__3pGiH"}}},[[466,1,2]]]);
//# sourceMappingURL=main.6e8eed17.chunk.js.map