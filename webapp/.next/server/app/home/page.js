(()=>{var e={};e.id=951,e.ids=[951],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8884:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(3315),r(2029),r(5866);var s=r(3191),a=r(8716),i=r(7922),l=r.n(i),n=r(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let d=["",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3315)),"D:\\app_tech_feed\\webapp\\src\\app\\home\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"D:\\app_tech_feed\\webapp\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\app_tech_feed\\webapp\\src\\app\\home\\page.tsx"],x="/home/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/home/page",pathname:"/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7278:(e,t,r)=>{Promise.resolve().then(r.bind(r,8018)),Promise.resolve().then(r.bind(r,7605))},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let s=r(1174),a=r(8374),i=r(326),l=a._(r(7577)),n=s._(r(962)),o=s._(r(815)),d=r(3078),c=r(5248),x=r(1206);r(576);let p=r(131),u=s._(r(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,s,a,i,l){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==s?void 0:s.current)&&s.current(e)}}))}function f(e){let[t,r]=l.version.split(".",2),s=parseInt(t,10),a=parseInt(r,10);return s>18||18===s&&a>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:s,sizes:a,height:n,width:o,decoding:d,className:c,style:x,fetchPriority:p,placeholder:u,loading:m,unoptimized:g,fill:y,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:v,setShowAltText:w,sizesInput:N,onLoad:_,onError:k,...S}=e;return(0,i.jsx)("img",{...S,...f(p),loading:m,width:o,height:n,decoding:d,"data-nimg":y?"fill":"1",className:c,style:x,sizes:a,srcSet:s,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&h(e,u,b,j,v,g,N))},[r,u,b,j,v,k,g,N,t]),onLoad:e=>{h(e.currentTarget,u,b,j,v,g,N)},onError:e=>{w(!0),"empty"!==u&&v(!0),k&&k(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,s={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...f(r.fetchPriority)};return t&&n.default.preload?(n.default.preload(r.src,s),null):(0,i.jsx)(o.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...s},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(p.RouterContext),s=(0,l.useContext)(x.ImageConfigContext),a=(0,l.useMemo)(()=>{let e=m||s||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[s]),{onLoad:n,onLoadingComplete:o}=e,h=(0,l.useRef)(n);(0,l.useEffect)(()=>{h.current=n},[n]);let f=(0,l.useRef)(o);(0,l.useEffect)(()=>{f.current=o},[o]);let[b,j]=(0,l.useState)(!1),[v,w]=(0,l.useState)(!1),{props:N,meta:_}=(0,d.getImgProps)(e,{defaultLoader:u.default,imgConf:a,blurComplete:b,showAltText:v});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{...N,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:f,setBlurComplete:j,setShowAltText:w,sizesInput:e.sizes,ref:t}),_.priority?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:N}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:s=!1}=void 0===e?{}:e;return t||r&&s}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(576);let s=r(380),a=r(5248);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r;let n,o,d,{src:c,sizes:x,unoptimized:p=!1,priority:u=!1,loading:m,className:h,quality:f,width:g,height:y,fill:b=!1,style:j,overrideSrc:v,onLoad:w,onLoadingComplete:N,placeholder:_="empty",blurDataURL:k,fetchPriority:S,layout:C,objectFit:P,objectPosition:E,lazyBoundary:M,lazyRoot:z,...O}=e,{imgConf:A,showAltText:I,blurComplete:R,defaultLoader:D}=t,T=A||a.imageConfigDefault;if("allSizes"in T)n=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);n={...T,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=O.loader||D;delete O.loader,delete O.srcSet;let q="__next_img_default"in U;if(q){if("custom"===n.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...s}=t;return e(s)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!x&&(x=t)}let G="",L=l(g),B=l(y);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,d=e.blurHeight,k=k||e.blurDataURL,G=e.src,!b){if(L||B){if(L&&!B){let t=L/e.width;B=Math.round(e.height*t)}else if(!L&&B){let t=B/e.height;L=Math.round(e.width*t)}}else L=e.width,B=e.height}}let F=!u&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,F=!1),n.unoptimized&&(p=!0),q&&c.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(p=!0),u&&(S="high");let H=l(f),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:E}:{},I?{}:{color:"transparent"},j),V=R||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:o,blurHeight:d,blurDataURL:k||"",objectFit:W.objectFit})+'")':'url("'+_+'")',$=V?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function(e){let{config:t,src:r,unoptimized:s,width:a,quality:i,sizes:l,loader:n}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:d}=function(e,t,r){let{deviceSizes:s,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}}(t,a,l),c=o.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:o.map((e,s)=>n({config:t,src:r,quality:i,width:e})+" "+("w"===d?e:s+1)+d).join(", "),src:n({config:t,src:r,quality:i,width:o[c]})}}({config:n,src:c,unoptimized:p,width:L,quality:H,sizes:x,loader:U});return{props:{...O,loading:F?"lazy":m,fetchPriority:S,width:L,height:B,decoding:"async",className:h,style:{...W,...$},sizes:Y.sizes,srcSet:Y.srcSet,src:v||Y.src},meta:{unoptimized:p,priority:u,placeholder:_,fill:b}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return x}});let s=r(1174),a=r(8374),i=r(326),l=a._(r(7577)),n=s._(r(8003)),o=r(3484),d=r(1157),c=r(8710);function x(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let u=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(x(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,s={};return a=>{let i=!0,l=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){l=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(let e=0,t=u.length;e<t;e++){let t=u[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=a.props[t],r=s[t]||new Set;("name"!==t||!l)&&r.has(e)?i=!1:(r.add(e),s[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let s=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:s})})}let h=function(e){let{children:t}=e,r=(0,l.useContext)(o.AmpStateContext),s=(0,l.useContext)(d.HeadManagerContext);return(0,i.jsx)(n.default,{reduceComponentsToState:m,headManager:s,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:a,blurDataURL:i,objectFit:l}=e,n=s?40*s:t,o=a?40*a:r,d=n&&o?"viewBox='0 0 "+n+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return s}});let r=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return n}});let s=r(1174),a=r(3078),i=r(2481),l=s._(r(6820));function n(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=i.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:s,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+s+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let s=r(7577),a=()=>{},i=()=>{};function l(e){var t;let{headManager:r,reduceComponentsToState:l}=e;function n(){if(r&&r.mountedInstances){let t=s.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(l(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),n(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=n),()=>{r&&(r._pendingUpdate=n)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},8018:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(326),a=r(7577),i=r(9029),l=r.n(i);let n=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"relative inline-block text-center",children:[s.jsx("div",{children:s.jsx("button",{type:"button",className:"inline-flex justify-center w-full rounded-3xl border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",id:"menu-button","aria-expanded":"true","aria-haspopup":"true",onClick:()=>{t(!e)},children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16",children:[s.jsx("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"}),s.jsx("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"})]})})}),e&&s.jsx("div",{className:"origin-top-right absolute right-0 z-20 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",children:(0,s.jsxs)("div",{className:"py-1 ",role:"none",children:[s.jsx("a",{href:"/#",className:"text-gray-700 font-bold block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-0",children:"Name"}),s.jsx("a",{href:"/#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-1",children:"Administrator"}),(0,s.jsxs)("a",{href:"/#",className:"flex text-center gap-1 justify-center items-center text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-2",children:["Active",s.jsx("div",{className:"w-2 h-2 my2 bg-green-500 rounded-full animate-pulse"})]}),(0,s.jsxs)("form",{className:"inline-flex justify-center",method:"POST",action:"#",role:"none",children:[s.jsx("button",{type:"submit",className:"text-gray-700 block w-full text-left px-4 py-2 text-sm",role:"menuitem",id:"menu-item-3",children:"Logout"}),(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:" text-blue-600 my-4 bi bi-box-arrow-right",viewBox:"0 0 16 16",children:[s.jsx("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),s.jsx("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"})]})]})]})})]})};var o=r(9404),d=r.n(o);let c=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"flex",children:[s.jsx("div",{className:`bg-white text-black 
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${e?"w-64":"w-0 overflow-hidden"}`,children:(0,s.jsxs)("div",{className:"flex gap-8 flex-col justify-left items-left p-4 ",children:[s.jsx("div",{className:"flex flex-col gap-6",children:s.jsx(l(),{src:"/images/Yaskawa_logo.svg.png",width:170,height:0,alt:"img",className:"mt-4"})}),s.jsx("div",{className:"flex flex-col gap-6 p-2",children:s.jsx(d(),{href:"#home",className:"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]",children:"Home"})}),s.jsx("div",{className:"flex flex-col gap-6 p-2",children:s.jsx(d(),{href:"#dashboard",className:"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]",children:"Dashboard"})}),s.jsx("div",{className:"flex flex-col gap-6 p-2",children:s.jsx("a",{href:"#customers",className:"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]",children:"Customers"})}),s.jsx("div",{className:"flex flex-col gap-6 p-2",children:s.jsx(d(),{href:"#employees",className:"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]",children:"Employees"})}),s.jsx("div",{className:"flex flex-col gap-6 p-2",children:s.jsx(d(),{href:"#settings",className:"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]",children:"Settings"})})]})}),(0,s.jsxs)("div",{className:"flex w-screen bg-white justify-between",children:[s.jsx("div",{className:`flex p-4 
                        ${e?"ml-64":"ml-0"}`,children:s.jsx("div",{className:"ml-auto",children:s.jsx("button",{className:"text-black",onClick:()=>t(!e),children:e?s.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",color:"black",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-justify-left",viewBox:"0 0 16 16",children:s.jsx("path",{fillRule:"evenodd",d:"M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"})})})})}),s.jsx("div",{className:"flex p-3",children:s.jsx(n,{})})]})]})}},3250:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(9510);r(1159);let a=()=>s.jsx("div",{className:"text-black bg-white text-3xl h-screen font-bold text-center",id:"customers",children:"Customers"})},4058:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(9510);r(1159);let a=()=>s.jsx("div",{className:"text-black bg-white text-3xl h-screen font-bold text-center",id:"employees",children:"Employees"})},3315:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(9510);r(1159);var a=r(8570);let i=(0,a.createProxy)(String.raw`D:\app_tech_feed\webapp\src\app\Sidebar.tsx`),{__esModule:l,$$typeof:n}=i;i.default;let o=(0,a.createProxy)(String.raw`D:\app_tech_feed\webapp\src\app\Sidebar.tsx#default`);var d=r(619),c=r(3250),x=r(4058),p=r(5964);let u=()=>(0,s.jsxs)("div",{className:"scroll-smooth",children:[s.jsx(o,{}),s.jsx("div",{className:"relative h-screen overflow-x-auto overflow-y-auto  sm:rounded-lg p-8",id:"home",children:(0,s.jsxs)("table",{className:"w-full shadow-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[s.jsx("thead",{className:"text-xs font-bold border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,s.jsxs)("tr",{children:[s.jsx("th",{scope:"col",className:"px-6 py-3",children:"S.no"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Employee_Id"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Employee_name"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Phone_number"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Designation"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"1"}),s.jsx("td",{className:"px-6 py-4",children:"TC_101"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white  dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"2"}),s.jsx("td",{className:"px-6 py-4",children:"TC_102"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"3"}),s.jsx("td",{className:"px-6 py-4",children:"TC_103"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"4"}),s.jsx("td",{className:"px-6 py-4",children:"TC_104"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"5"}),s.jsx("td",{className:"px-6 py-4",children:"TC_105"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"6"}),s.jsx("td",{className:"px-6 py-4",children:"TC_106"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"7"}),s.jsx("td",{className:"px-6 py-4",children:"TC_107"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"8"}),s.jsx("td",{className:"px-6 py-4",children:"TC_108"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,s.jsxs)("tr",{className:"bg-white dark:bg-gray-800",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"9"}),s.jsx("td",{className:"px-6 py-4",children:"TC_109"}),s.jsx("td",{className:"px-6 py-4",children:"Username"}),s.jsx("td",{className:"px-6 py-4",children:"+91 xxxx xxxxxx"}),s.jsx("td",{className:"px-6 py-4",children:"Employee"}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]})]})]})}),s.jsx(d.default,{}),s.jsx(c.default,{}),s.jsx(x.default,{}),s.jsx(p.default,{})]})},5964:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(9510);r(1159);let a=()=>s.jsx("div",{className:"text-black bg-white text-3xl h-screen font-bold text-center",id:"settings",children:"Settings"})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,349,621,404,859],()=>r(8884));module.exports=s})();