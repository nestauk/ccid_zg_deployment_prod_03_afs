(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{93524:function(e,o,t){Promise.resolve().then(t.bind(t,44829)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,61481)),Promise.resolve().then(t.t.bind(t,53054,23)),Promise.resolve().then(t.bind(t,22908)),Promise.resolve().then(t.bind(t,15286))},44829:function(e,o,t){"use strict";t.d(o,{default:function(){return c}});var n=t(22988),i=t(2265),r=t(95885),l=t(2491),a=t(57437);let f=(e,o)=>(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),m=e=>(0,n.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),s=function(e){var o;let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(o=>{var t;let[n,r]=o;i[e.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:null==(t=r.palette)?void 0:t.mode}});let r=(0,n.Z)({html:f(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,n.Z)({margin:0},m(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),l=null==(o=e.components)||null==(o=o.MuiCssBaseline)?void 0:o.styleOverrides;return l&&(r=[r,l]),r};var c=function(e){let{children:o,enableColorScheme:t=!1}=(0,r.i)({props:e,name:"MuiCssBaseline"});return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(l.Z,{styles:e=>s(e,t)}),o]})}},10912:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=t(55592);function i(e){let{reason:o,children:t}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(o);return t}},61481:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"PreloadCss",{enumerable:!0,get:function(){return r}});let n=t(57437),i=t(58512);function r(e){let{moduleIds:o}=e;if("undefined"!=typeof window)return null;let t=(0,i.getExpectedRequestStore)("next/dynamic css"),r=[];if(t.reactLoadableManifest&&o){let e=t.reactLoadableManifest;for(let t of o){if(!e[t])continue;let o=e[t].files.filter(e=>e.endsWith(".css"));r.push(...o)}}return 0===r.length?null:(0,n.jsx)(n.Fragment,{children:r.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},22908:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return l}});var n=t(57437),i=t(98913),r=t(67022);function l(e){let{children:o}=e,t={authority:"https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_GZwWAJZLy",client_id:"62g786hog64fp87dce9cg62rhq",redirect_uri:"https://a-new-era.zg-app.com/facilitator/overview",postLogoutRedirectUri:"https://a-new-era.zg-app.com",automaticSilentRenew:!0,autoSignIn:!0,onSigninCallback:async e=>{console.debug("onSigninCallback")},userStore:new i.bA({store:window.localStorage})};return(0,n.jsx)(r.Ho,{...t,children:o})}},15286:function(e,o,t){"use strict";t.d(o,{default:function(){return w}});var n=t(57437),i=t(67036),r=t.n(i),l=t(74050);let{palette:a}=(0,l.Z)(),f=(0,l.Z)(),m=(0,l.Z)(f,{palette:{primary:{main:"#a6a6ffff"},secondary:{main:"#00b4baff"},pageBackground:a.augmentColor({color:{main:"#f5f9faff"}}),sectionBackground:a.augmentColor({color:{main:"#ffffff"}}),headerBarBackground:a.augmentColor({color:{main:"#ffffff"}}),buttonStandard:a.augmentColor({color:{main:"#000000"}}),buttonReverse:a.augmentColor({color:{main:"#ffffff"}}),buttonQuiet:a.augmentColor({color:{main:"#f0f0f0ff"}}),connected:a.augmentColor({color:{main:"#b1d9a5ff"}}),disconnected:a.augmentColor({color:{main:"#ff8b85ff"}}),slideSectionBackground:a.augmentColor({color:{main:"#ffffff"}}),optionButtonSelected:a.augmentColor({color:{main:"#7cd9de"}}),optionButtonSelectedBorder:a.augmentColor({color:{main:"#b2e9eb"}}),optionButtonUnselected:a.augmentColor({color:{main:"#e4f6f7"}}),summaryChartBackground:a.augmentColor({color:{main:"#f0f0f0"}}),promptPanelBackground:a.augmentColor({color:{main:"#f0f0f0"}}),progressBlipUnselected:a.augmentColor({color:{main:"#d9d9d9"}}),progressBlipSelected:a.augmentColor({color:{main:"#000000"}}),backgroundAgree:a.augmentColor({color:{main:"#cae3e0"}}),backgroundDisagree:a.augmentColor({color:{main:"#f0ccd1"}}),backgroundDivided:a.augmentColor({color:{main:"#f5e6c4"}}),updinkBackground:a.augmentColor({color:{main:"#f0f7ed"}}),updinkText:a.augmentColor({color:{main:"#2c2e33"}}),downdinkBackground:a.augmentColor({color:{main:"#ffe6e6"}}),downdinkText:a.augmentColor({color:{main:"#2a2e33"}}),recordingEnabled:a.augmentColor({color:{main:"#27ba02"}}),recordingDisabled:a.augmentColor({color:{main:"#ffffff"}}),recordingUploading:a.augmentColor({color:{main:"#ffcc85"}}),recordingFailed:a.augmentColor({color:{main:"#ff8b85"}}),pollingInProgress:a.augmentColor({color:{main:"#ffcc85"}}),pollingComplete:a.augmentColor({color:{main:"#b1d9a5"}}),pollingInProgressBackground:a.augmentColor({color:{main:"#ebebff"}}),taskReady:a.augmentColor({color:{main:"#b1d9a5ff"}}),taskRunning:a.augmentColor({color:{main:"#7cd9de"}}),taskWaiting:a.augmentColor({color:{main:"#ffcc85"}}),taskCancelled:a.augmentColor({color:{main:"#ffcc85"}}),taskFailed:a.augmentColor({color:{main:"#ff8b85ff"}}),taskSuccess:a.augmentColor({color:{main:"#b1d9a5ff"}}),rankedListAltBackground:a.augmentColor({color:{main:"#eeeeeeff"}}),rankedListItemBorder:a.augmentColor({color:{main:"#808080ff"}}),rankingBarBackground:a.augmentColor({color:{main:"#ffffffff"}}),rankingBarBorder:a.augmentColor({color:{main:"#444444ff"}}),rankingBarCentreLine:a.augmentColor({color:{main:"#0000007f"}}),rankingBarPositive:a.augmentColor({color:{main:"#90ee90ff"}}),rankingBarNeutral:a.augmentColor({color:{main:"#ffa500ff"}}),rankingBarNegative:a.augmentColor({color:{main:"#ff6347ff"}}),rankingBreakdownArrowPositive:a.augmentColor({color:{main:"#40b8a8ff"}}),rankingBreakdownBoxBorder:a.augmentColor({color:{main:"#d3d3d3ff"}})},typography:{body1:{fontFamily:r().style.fontFamily},body2:{fontFamily:r().style.fontFamily},body3:{fontSize:"1.15rem"},h1:{fontFamily:r().style.fontFamily},h2:{fontFamily:r().style.fontFamily},h3:{fontFamily:r().style.fontFamily},h4:{fontFamily:r().style.fontFamily},h5:{fontFamily:r().style.fontFamily},h6:{fontFamily:r().style.fontFamily},button:{fontFamily:r().style.fontFamily},slideHeading:{fontFamily:r().style.fontFamily,fontSize:"3rem",fontWeight:"bold"},slideSubHeading:{fontFamily:r().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},slideSubHeadingWhite:{fontFamily:r().style.fontFamily,fontSize:"2rem",fontWeight:"bold",color:"#ffffff"},slideSectionHeading:{fontFamily:r().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},slidePrompt:{fontFamily:r().style.fontFamily,fontSize:"2rem"},slideBody:{fontFamily:r().style.fontFamily,fontSize:"1.75rem",fontWeight:"normal",li:{marginTop:"0.5rem"},"li:not(:last-child)":{marginBottom:"1.5rem"}},slideExplanationWhite:{fontFamily:r().style.fontFamily,fontSize:"2rem",color:"white"},selectTiny:{fontFamily:r().style.fontFamily,fontSize:"0.8rem",textTransform:"uppercase",marginBottom:0,paddingBottom:0},selectLarge:{fontFamily:r().style.fontFamily,fontSize:"1.5rem"},submitButton:{fontFamily:r().style.fontFamily,fontSize:"1rem"},questionInstruction:{fontFamily:r().style.fontFamily,fontSize:"1.5rem",alignSelf:"flex-start",textAlign:"start",textTransform:"uppercase"},questionPrompt:{fontFamily:r().style.fontFamily,fontSize:"2.25rem",alignSelf:"flex-start",fontWeight:"normal",textAlign:"start"},questionExplanation:{fontFamily:r().style.fontFamily,fontSize:"1.25rem",alignSelf:"flex-start",textAlign:"start",textTransform:"uppercase"},multiBoxOption:{fontFamily:r().style.fontFamily,fontSize:"1.5rem",color:"white"},sliderMark:{fontFamily:r().style.fontFamily,fontSize:"0.8rem"},upDownQuestion:{fontFamily:r().style.fontFamily,fontSize:"1.75rem"},upDownCategory:{fontFamily:r().style.fontFamily,fontSize:"1.25rem",fontWeight:"bold",textTransform:"uppercase"},pointsAllocationCategoryTitle:{fontFamily:r().style.fontFamily,fontSize:"1rem",fontWeight:"bold",textTransform:"uppercase"},pointsAllocationCategoryDescription:{fontFamily:r().style.fontFamily,fontSize:"1rem"},topOptionsOptionRank:{fontFamily:r().style.fontFamily,fontSize:"1.6rem",fontWeight:"bold"},topOptionsOptionTitle:{fontFamily:r().style.fontFamily,fontSize:"1.25rem",fontWeight:"bold",textTransform:"uppercase"},topOptionsOptionDescription:{fontFamily:r().style.fontFamily,fontSize:"1rem"},topOptionsOptionPoints:{fontFamily:r().style.fontFamily,fontSize:"1rem"},rankedListItemTitle:{fontFamily:r().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},rankedListItemDescription:{fontFamily:r().style.fontFamily,fontSize:"1rem"},orderedListItemTitle:{fontFamily:r().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},orderedListItemDescription:{fontFamily:r().style.fontFamily,fontSize:"1rem"},sectionHeadingTitle:{fontFamily:r().style.fontFamily,fontSize:"1.3rem",fontWeight:"bold",textTransform:"uppercase"},sectionHeadingDescription:{fontFamily:r().style.fontFamily,fontSize:"1.25rem"},sectionHeadingTitleQuiet:{fontFamily:r().style.fontFamily,fontSize:"1.3rem",opacity:.5,fontWeight:"bold",textTransform:"uppercase"},summaryTitle:{fontFamily:r().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},summaryPrompt:{fontFamily:r().style.fontFamily,fontSize:"1.5rem"},slideAccordionHeading:{fontFamily:r().style.fontFamily,fontSize:"1rem",fontWeight:"bold"},slideAccordionText:{fontFamily:r().style.fontFamily,fontSize:"1rem"},slideInfoText:{fontFamily:r().style.fontFamily,fontSize:"1rem"},yesNoUnsureButton:{fontFamily:r().style.fontFamily,fontSize:"1.5rem",fontWeight:"normal"},demographicGroupHeading:{fontFamily:r().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},consentBody:{fontFamily:r().style.fontFamily,fontSize:"1.25rem"}},components:{MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none"}}},MuiCssBaseline:{styleOverrides:{html:{fontFamily:r().style.fontFamily,height:"100%"},body:{fontFamily:r().style.fontFamily,background:"#f5f9faff",height:"100%"}}},MuiSwitch:{styleOverrides:{root:{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"#40B8A8",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#7d7d7d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:f.palette.grey[100]},"&.Mui-disabled + .MuiSwitch-track":{opacity:.7}},"& .MuiSwitch-thumb":{boxShadow:"none",boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"#E9E9EA",opacity:1,transition:f.transitions.create(["background-color"],{duration:500})}}}},MuiTypography:{defaultProps:{variantMapping:{body3:"p"}}}}});var s=t(22988),c=t(23950),u=t(2265);let d=u.createContext(null);function y(){return u.useContext(d)}var g="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",p=function(e){let{children:o,theme:t}=e,i=y(),r=u.useMemo(()=>{let e=null===i?t:"function"==typeof t?t(i):(0,s.Z)({},i,t);return null!=e&&(e[g]=null!==i),e},[t,i]);return(0,n.jsx)(d.Provider,{value:r,children:o})},h=t(22606),b=t(34828),F=t(55158),S=t(24866);let C={};function k(e,o,t){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return u.useMemo(()=>{let i=e&&o[e]||o;if("function"==typeof t){let r=t(i),l=e?(0,s.Z)({},o,{[e]:r}):r;return n?()=>l:l}return e?(0,s.Z)({},o,{[e]:t}):(0,s.Z)({},o,t)},[e,o,t,n])}var x=function(e){let{children:o,theme:t,themeId:i}=e,r=(0,b.Z)(C),l=y()||C,a=k(i,r,t),f=k(i,l,t,!0),m="rtl"===a.direction;return(0,n.jsx)(p,{theme:f,children:(0,n.jsx)(h.T.Provider,{value:a,children:(0,n.jsx)(F.Z,{value:m,children:(0,n.jsx)(S.Z,{value:null==a?void 0:a.components,children:o})})})})},v=t(52737);let z=["theme"];function B(e){let{theme:o}=e,t=(0,c.Z)(e,z),i=o[v.Z];return(0,n.jsx)(x,(0,s.Z)({},t,{themeId:i?v.Z:void 0,theme:i||o}))}function w(e){let{children:o}=e;return(0,n.jsx)(B,{theme:m,children:o})}},53054:function(){},67036:function(e){e.exports={style:{fontFamily:"'__averta_c9805f', '__averta_Fallback_c9805f'"},className:"__className_c9805f"}}},function(e){e.O(0,[742,732,403,971,23,744],function(){return e(e.s=93524)}),_N_E=e.O()}]);