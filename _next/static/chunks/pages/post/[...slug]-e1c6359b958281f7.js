(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6248:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slug]",function(){return n(5788)}])},7645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=s.default,l=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:n,pastDelay:r}=e;return null}};if(e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=r({},l,e)),(l=r({},l,t)).suspense&&(delete l.ssr,delete l.loading),l.loadableGenerated&&delete(l=r({},l,l.loadableGenerated)).loadableGenerated,"boolean"==typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,i(n,l);delete l.ssr}return n(l)},t.noSSR=i;var r=n(6495).Z,l=n(2648).Z,s=(l(n(7294)),l(n(4588)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let l=r.default.createContext(null);t.LoadableContext=l},4588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,l=(0,n(1598).Z)(n(7294)),s=n(3644);let i=[],o=[],a=!1;function u(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));let i=null;function u(){if(!i){let t=new d(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!a){let c=n.webpack?n.webpack():n.modules;c&&o.push(e=>{for(let t of c)if(-1!==e.indexOf(t))return u()})}function p(){u();let e=l.default.useContext(s.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}let h=n.suspense?function(e,t){return p(),l.default.createElement(n.lazy,r({},e,{ref:t}))}:function(e,t){p();let r=l.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),l.default.useMemo(()=>{var t;return r.loading||r.error?l.default.createElement(n.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?l.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])};return h.preload=()=>u(),h.displayName="LoadableComponent",l.default.forwardRef(h)}(u,e)}function p(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(a=!0,t());p(o,e).then(n,n)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},5788:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return m}});var r=n(5893),l=n(9008),s=n.n(l),i=n(5105),o=n(9144),a=n(8905),u=n(350);let d=e=>{let{data:t}=e;return(0,r.jsx)(o.Z,{sx:{maxWidth:"900px"},children:(0,r.jsx)(u.IpynbRenderer,{ipynb:{cells:[t]},syntaxTheme:"ghcolors",language:"python",bgTransparent:!0,formulaOptions:{mathjax3:{tex:{tags:"ams"}}},mdiOptions:{html:!0}})})};var c=n(5152),p=n.n(c);let h=e=>{var t,l;let{data:s}=e,i=p()(Promise.all([n.e(960),n.e(288)]).then(n.bind(n,2288)),{loadableGenerated:{webpack:()=>[2288]},ssr:!1});return(0,r.jsx)(o.Z,{sx:{mb:"20px"},children:(0,r.jsx)(i,{data:null===(t=s["application/vnd.plotly.v1+json"])||void 0===t?void 0:t.data,layout:{width:800,height:550,...null===(l=s["application/vnd.plotly.v1+json"])||void 0===l?void 0:l.layout}})})},f=e=>{let{block:t}=e;return(0,r.jsxs)(r.Fragment,{children:["cell"===t.type&&"markdown"===t.data.cell_type?(0,r.jsx)(d,{data:t.data}):null,"plotly"===t.type?t.data.outputs.map((e,t)=>(0,r.jsx)(h,{data:e.data},"plotly_".concat(t))):null]})};var x=!0;function m(e){let{fileStructure:t,file:n,title:l}=e,[u]=(0,a.s5)(n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:l}),(0,r.jsx)("meta",{name:"description",content:"Fairlabs Enlight"}),(0,r.jsx)("link",{rel:"icon",href:"/fairlabs_icon.svg"})]}),(0,r.jsx)("main",{children:(0,r.jsx)(i.Z,{fileStructure:t,children:(0,r.jsx)(o.Z,{mt:6,children:u.map((e,t)=>(0,r.jsx)(f,{block:e},"block_".concat(t)))})})})]})}},5105:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(5893),l={src:"/_next/static/media/logo.c82793f7.svg",height:25,width:128},s=n(5675),i=n.n(s),o=n(9144),a=n(9630),u=n(1664),d=n.n(u);let c=e=>{let{children:t}=e;return(0,r.jsx)(o.Z,{sx:{borderBottom:"1px solid rgb(214, 222, 230)",backgroundColor:"white",padding:"10px 20px",position:"sticky",top:"0px",zIndex:"999",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)(o.Z,{spacing:2,direction:"row",sx:{maxWidth:"1200px",width:"100%",alignItems:"center"},children:[(0,r.jsx)(i(),{src:l,width:120,alt:"logo",onClick:()=>window.location.href="https://www.fairlabs.io",style:{cursor:"pointer"}}),(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)(a.Z,{variant:"h6",sx:{cursor:"pointer"},children:"Blog"})}),t]})})};var p=n(8905),h=n(5214),f=n(5982),x=n(9901),m=n(4548),y=n(2766),_=n(5512),j=n(181),b=n(3508);let g=e=>{let{node:t,fileStructure:n,handleOpen:l}=e;return(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(f.Z,{onClick:()=>l(t),sx:{border:"1px solid #0077b6",borderRadius:"14px",mb:"10px"},children:[(0,r.jsx)(x.Z,{children:(0,r.jsx)(_.Z,{})}),(0,r.jsx)(m.Z,{primary:t.name,sx:{".MuiTypography-root":{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}}),t.open?(0,r.jsx)(j.Z,{}):(0,r.jsx)(b.Z,{})]}),(0,r.jsx)(o.Z,{sx:{ml:"20px"},children:(0,r.jsx)(y.Z,{in:t.open,timeout:"auto",unmountOnExit:!0,children:(0,r.jsx)(h.Z,{component:"div",disablePadding:!0,children:t.dir.map((e,s)=>(0,r.jsx)("div",{children:(0,r.jsx)(O,{fileStructure:n,node:e,handleOpen:l})},"".concat(t.name,"_").concat(s)))})})})]})};var v=n(4634),w=n(1163);let Z=e=>{let{node:t}=e,n=(0,w.useRouter)(),l=t.name.split(".")[0],s=t.link.split("/").slice(2).join("/"),i=encodeURI(s);return(0,r.jsx)(d(),{href:"/post/".concat(s),children:(0,r.jsxs)(f.Z,{sx:{mb:"10px"},children:[(0,r.jsx)(x.Z,{children:(0,r.jsx)(v.Z,{})}),(0,r.jsx)(m.Z,{secondary:l,sx:{".MuiTypography-root":{fontWeight:n.asPath==="/post/".concat(i)?"bold":"",fontSize:"12px",color:n.asPath==="/post/".concat(i)?"black":"",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})]})})},k=e=>{let{fileStructure:t,node:n,handleOpen:l}=e;if(0!==n.length){if("file"===n.type)return(0,r.jsx)(Z,{node:n});if("folder"===n.type)return(0,r.jsx)(g,{node:n,fileStructure:t,handleOpen:l})}};var O=k;let S=e=>{let{fileStructure:t}=e,[n,l]=(0,p.W0)(t);return(0,r.jsx)(o.Z,{sx:{padding:"20px",width:"300px"},children:(0,r.jsxs)(o.Z,{position:"sticky",top:"80px",children:[(0,r.jsx)(a.Z,{sx:{fontSize:"20px",fontWeight:"700",my:"20px"},children:"Contents"}),(0,r.jsx)(h.Z,{sx:{maxWidth:"100%"},children:n.map((e,n)=>(0,r.jsx)("div",{children:(0,r.jsx)(O,{fileStructure:t,node:e,handleOpen:l})},"fileStructure_".concat(n)))})]})})},E=e=>{let{children:t,banner:n,fileStructure:l}=e;return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c,{}),n,(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"center",spacing:8,sx:{minWidth:"1200px",width:"100%"},children:[(0,r.jsx)(S,{fileStructure:l}),(0,r.jsx)(o.Z,{sx:{maxWidth:"1200px"},children:t})]})]})};var C=E},8905:function(e,t,n){"use strict";n.d(t,{W0:function(){return s},kx:function(){return i},s5:function(){return o}});var r=n(7294),l=n(1163);let s=e=>{let[t,n]=(0,r.useState)(e),l=e=>{let r=s(t,e);n(r)},s=(e,t)=>{let n=JSON.parse(JSON.stringify(e));return n.forEach((e,r)=>{e.link===t.link?e.open=!e.open:e.dir&&e.dir.length>0&&(n[r].dir=s(e.dir,t))}),n};return[t,l]},i=e=>{let[t,n]=(0,r.useState)([]),l=()=>{let t=[],r=e=>{0!==e.length&&e.forEach((e,n)=>{"file"===e.type&&t.push(e),"folder"===e.type&&r(e.dir)})};r(e),n(t)};return(0,r.useEffect)(()=>{l()},[]),[t]},o=e=>{let t=(0,l.useRouter)(),[n,s]=(0,r.useState)([]),i=e.cells,o=async()=>{let e=[];await i.forEach((t,n)=>{var r;(null===(r=t.outputs)||void 0===r?void 0:r.length)>0&&t.outputs.forEach((n,r)=>{n.data&&"application/vnd.plotly.v1+json"===n.data&&e.push({type:"plotly",data:t})}),t.outputs&&t.outputs[0]&&t.outputs[0].data&&t.outputs[0].data["application/vnd.plotly.v1+json"]?(e.push({type:"cell",data:a(t)}),e.push({type:"plotly",data:t})):e.push({type:"cell",data:t})}),s(e)},a=e=>{let t=JSON.parse(JSON.stringify(e));return t.outputs=[],t};return(0,r.useEffect)(()=>{o()},[t]),[n]}},5152:function(e,t,n){e.exports=n(7645)}},function(e){e.O(0,[204,447,774,888,179],function(){return e(e.s=6248)}),_N_E=e.O()}]);