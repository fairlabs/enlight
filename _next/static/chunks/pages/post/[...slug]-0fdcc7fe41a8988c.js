(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6248:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slug]",function(){return n(4369)}])},7645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=s.default,r=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:n,pastDelay:l}=e;return null}};if(e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=l({},r,e)),(r=l({},r,t)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=l({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)},t.noSSR=i;var l=n(6495).Z,r=n(2648).Z,s=(r(n(7294)),r(n(4588)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,n(2648).Z)(n(7294));let r=l.default.createContext(null);t.LoadableContext=r},4588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(6495).Z,r=(0,n(1598).Z)(n(7294)),s=n(3644);let i=[],o=[],a=!1;function d(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=r.default.lazy(n.loader));let i=null;function d(){if(!i){let t=new u(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!a){let c=n.webpack?n.webpack():n.modules;c&&o.push(e=>{for(let t of c)if(-1!==e.indexOf(t))return d()})}function p(){d();let e=r.default.useContext(s.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}let h=n.suspense?function(e,t){return p(),r.default.createElement(n.lazy,l({},e,{ref:t}))}:function(e,t){p();let l=r.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:i.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.__esModule?t.default:t,e):null},[e,l])};return h.preload=()=>d(),h.displayName="LoadableComponent",r.default.forwardRef(h)}(d,e)}function p(e,t){let n=[];for(;e.length;){let l=e.pop();n.push(l(t))}return Promise.all(n).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(a=!0,t());p(o,e).then(n,n)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return f}});var l=n(5893),r=n(7294),s=n(9008),i=n.n(s),o=n(350),a=n(5152),d=n.n(a),u=n(7270),c=n(1163),p=n(9144),h=!0;function f(e){let{fileStructure:t,file:s,title:a}=e,h=(0,c.useRouter)(),f=s.cells,[x,m]=(0,r.useState)([]),y=d()(Promise.all([n.e(960),n.e(904)]).then(n.bind(n,6904)),{loadableGenerated:{webpack:()=>[6904]},ssr:!1});h.query.slug[h.query.slug.length];let _=async()=>{let e=[];await f.forEach((t,n)=>{var l;(null===(l=t.outputs)||void 0===l?void 0:l.length)>0&&t.outputs.forEach((n,l)=>{n.data&&"application/vnd.plotly.v1+json"===n.data&&(console.log("?"),e.push({type:"plotly",data:t}))}),t.outputs&&t.outputs[0]&&t.outputs[0].data&&t.outputs[0].data["application/vnd.plotly.v1+json"]?(e.push({type:"cell",data:j(t)}),e.push({type:"plotly",data:t})):e.push({type:"cell",data:t})}),m(e)},j=e=>{let t=JSON.parse(JSON.stringify(e));return t.outputs=[],t};return(0,r.useEffect)(()=>{_()},[h]),(0,l.jsxs)("div",{children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:a}),(0,l.jsx)("meta",{name:"description",content:"Fairlabs Enlight"}),(0,l.jsx)("link",{rel:"icon",href:"/fairlabs_icon.svg"})]}),(0,l.jsx)("main",{children:(0,l.jsx)(u.Z,{fileStructure:t,children:(0,l.jsx)(p.Z,{mt:6,children:x.map((e,t)=>"cell"===e.type&&"markdown"===e.data.cell_type?(0,l.jsx)(p.Z,{sx:{maxWidth:"900px"},children:(0,l.jsx)(o.IpynbRenderer,{ipynb:{cells:[e.data]},syntaxTheme:"ghcolors",language:"python",bgTransparent:!0,formulaOptions:{mathjax3:{tex:{tags:"ams"}}},mdiOptions:{html:!0}})},t):"plotly"===e.type?e.data.outputs.map((e,t)=>{var n,r;return(0,l.jsx)(p.Z,{sx:{mb:"20px"},children:(0,l.jsx)(y,{data:null===(n=e.data["application/vnd.plotly.v1+json"])||void 0===n?void 0:n.data,layout:{width:800,height:550,...null===(r=e.data["application/vnd.plotly.v1+json"])||void 0===r?void 0:r.layout}})},t)}):void 0)})})})]})}},7270:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var l=n(5893),r={src:"/_next/static/media/logo.c82793f7.svg",height:25,width:128},s=n(5675),i=n.n(s),o=n(9144),a=n(9630),d=n(1664),u=n.n(d);let c=e=>{let{children:t}=e;return(0,l.jsx)(o.Z,{sx:{borderBottom:"1px solid rgb(214, 222, 230)",backgroundColor:"white",padding:"10px 20px",position:"sticky",top:"0px",zIndex:"999",justifyContent:"center",alignItems:"center"},children:(0,l.jsxs)(o.Z,{spacing:2,direction:"row",sx:{maxWidth:"1200px",width:"100%",alignItems:"center"},children:[(0,l.jsx)(i(),{src:r,width:120,alt:"logo",onClick:()=>window.location.href="https://www.fairlabs.io",style:{cursor:"pointer"}}),(0,l.jsx)(u(),{href:"/",children:(0,l.jsx)(a.Z,{variant:"h6",sx:{cursor:"pointer"},children:"Blog"})}),t]})})};var p=n(7294);let h=e=>{let[t,n]=(0,p.useState)(e),l=e=>{let l=r(t,e);n(l)},r=(e,t)=>{let n=JSON.parse(JSON.stringify(e));return n.forEach((e,l)=>{e.link===t.link?e.open=!e.open:e.dir&&e.dir.length>0&&(n[l].dir=r(e.dir,t))}),n};return[t,l]};var f=n(5214),x=n(5982),m=n(9901),y=n(4548),_=n(2766),j=n(5512),b=n(181),g=n(3508);let v=e=>{let{node:t,fileStructure:n,handleOpen:r}=e;return(0,l.jsxs)(o.Z,{children:[(0,l.jsxs)(x.Z,{onClick:()=>r(t),sx:{border:"1px solid #0077b6",borderRadius:"14px",mb:"10px"},children:[(0,l.jsx)(m.Z,{children:(0,l.jsx)(j.Z,{})}),(0,l.jsx)(y.Z,{primary:t.name,sx:{".MuiTypography-root":{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}}),t.open?(0,l.jsx)(b.Z,{}):(0,l.jsx)(g.Z,{})]}),(0,l.jsx)(o.Z,{sx:{ml:"20px"},children:(0,l.jsx)(_.Z,{in:t.open,timeout:"auto",unmountOnExit:!0,children:(0,l.jsx)(f.Z,{component:"div",disablePadding:!0,children:t.dir.map((e,s)=>(0,l.jsx)("div",{children:(0,l.jsx)(S,{fileStructure:n,node:e,handleOpen:r})},"".concat(t.name,"_").concat(s)))})})})]})};var w=n(4634),Z=n(1163);let O=e=>{let{node:t}=e,n=(0,Z.useRouter)(),r=t.name.split(".")[0],s=t.link.split("/").slice(2).join("/"),i=encodeURI(s);return(0,l.jsx)(u(),{href:"/post/".concat(s),children:(0,l.jsxs)(x.Z,{sx:{mb:"10px"},children:[(0,l.jsx)(m.Z,{children:(0,l.jsx)(w.Z,{})}),(0,l.jsx)(y.Z,{secondary:r,sx:{".MuiTypography-root":{fontWeight:n.asPath==="/post/".concat(i)?"bold":"",fontSize:"12px",color:n.asPath==="/post/".concat(i)?"black":"",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})]})})},k=e=>{let{fileStructure:t,node:n,handleOpen:r}=e;if(0!==n.length){if("file"===n.type)return(0,l.jsx)(O,{node:n});if("folder"===n.type)return(0,l.jsx)(v,{node:n,fileStructure:t,handleOpen:r})}};var S=k;let E=e=>{let{fileStructure:t}=e,[n,r]=h(t);return(0,l.jsx)(o.Z,{sx:{padding:"20px",minWidth:"280px"},children:(0,l.jsxs)(o.Z,{position:"sticky",top:"80px",children:[(0,l.jsx)(a.Z,{sx:{fontSize:"20px",fontWeight:"700",my:"20px"},children:"Contents"}),(0,l.jsx)(f.Z,{sx:{maxWidth:360},children:n.map((e,n)=>(0,l.jsx)("div",{children:(0,l.jsx)(S,{fileStructure:t,node:e,handleOpen:r})},"fileStructure_".concat(n)))})]})})},C=e=>{let{children:t,banner:n,fileStructure:r}=e;return(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(c,{}),n,(0,l.jsxs)(o.Z,{direction:"row",justifyContent:"center",spacing:8,sx:{minWidth:"1200px",width:"100%"},children:[(0,l.jsx)(E,{fileStructure:r}),(0,l.jsx)(o.Z,{sx:{width:"900px"},children:t})]})]})};var P=C},5152:function(e,t,n){e.exports=n(7645)}},function(e){e.O(0,[204,447,774,888,179],function(){return e(e.s=6248)}),_N_E=e.O()}]);