define("@wsb/guac-widget-shared/lib/components/Carousel-d4bbd8a7.js",["exports","~/c/_rollupPluginBabelHelpers","~/c/_commonjsHelpers","~/c/interopRequireDefault","~/c/_react_commonjs-external"],(function(e,t,n,i,s){"use strict";var o=n.c((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),r=n.c((function(e){function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=s?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(i,r,a):i[r]=e[r]}return i.default=e,n&&n.set(e,i),i}})),a=n.c((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t.apply(this,arguments)}e.exports=t}));var l=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},d=1e3,u=60*d,c=60*u,h=24*c,f=365.25*h,p=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return function(e){if((e=String(e)).length>1e4)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*f;case"days":case"day":case"d":return n*h;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*d;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(e);if("number"===n&&!1===isNaN(e))return t.long?function(e){return m(e,h,"day")||m(e,c,"hour")||m(e,u,"minute")||m(e,d,"second")||e+" ms"}(e):function(e){if(e>=h)return Math.round(e/h)+"d";if(e>=c)return Math.round(e/c)+"h";if(e>=u)return Math.round(e/u)+"m";if(e>=d)return Math.round(e/d)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function m(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var g=n.c((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)&&s.length){var r=n.apply(null,s);r&&e.push(r)}else if("object"===o)for(var a in s)t.call(s,a)&&s[a]&&e.push(a)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));const y=global.PropTypes||guac["prop-types"];var v=n.c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s._),o=i.i(y),a=i.i(g);class l extends n.Component{static get propTypes(){return{numSlides:o.default.number.isRequired,selectedIndex:o.default.number.isRequired,goToSlide:o.default.func.isRequired}}render(){const{numSlides:e,selectedIndex:t,goToSlide:i}=this.props,s=[];for(let o=0;o<e;o++){const e=(0,a.default)("carousel-dot",{selected:o===t});s.push(n.default.createElement("li",{key:`dot-${o}`},n.default.createElement("button",{className:e,onClick:i.bind(null,o)},"•")))}return n.default.createElement("ul",{className:"carousel-dots"},s)}}t.default=l})),b=n.c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s._),o=i.i(y);class a extends n.Component{static get propTypes(){return{numSlides:o.default.number.isRequired,selectedIndex:o.default.number.isRequired,infinite:o.default.bool.isRequired,prevSlide:o.default.func.isRequired,nextSlide:o.default.func.isRequired,direction:o.default.oneOf(["left","right"]).isRequired,arrows:o.default.oneOfType([o.default.bool,o.default.shape({left:o.default.node.isRequired,right:o.default.node.isRequired,className:o.default.string})])}}hasNext(){const{direction:e,infinite:t,numSlides:n,selectedIndex:i}=this.props;return t||("left"===e?i>0:i<n-1)}render(){const{prevSlide:e,nextSlide:t,direction:i,arrows:s}=this.props;let o=null,r="carousel-arrow-default";return s.left&&(r=s.className?s.className:"",o="left"===i?s.left:s.right),n.default.createElement("button",{type:"button",disabled:!this.hasNext(),onClick:"left"===i?e:t,className:`carousel-arrow carousel-${i}-arrow ${r}`},o)}}t.default=a})),w=n.c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dots",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Arrow",{enumerable:!0,get:function(){return s.default}});var n=i.i(v),s=i.i(b)})),S=n.c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){if(e[n].props.src!==t[n].props.src)return!1}return!0};t.default=n})),_=n.c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e||!e.length)return;const n=e.length;return(t+=t<0?n:0)>=0&&t<n?e[t]:void 0}})),T=n.c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i.i(a),o=i.i(l),d=r(s._),u=i.i(y),c=i.i(p),h=i.i(g),f=i.i(S),m=i.i(_);const v="carousel-slide-selected",b="carousel-slide-loading";class T extends d.Component{static get propTypes(){return{initialSlide:u.default.number,className:u.default.string,transition:u.default.oneOf(["slide","fade"]),dots:u.default.bool,arrows:u.default.oneOfType([u.default.bool,u.default.shape({left:u.default.node.isRequired,right:u.default.node.isRequired,className:u.default.string})]),infinite:u.default.bool,children:u.default.any,viewportWidth:u.default.string,viewportHeight:u.default.string,width:u.default.string,height:u.default.string,imagesToPrefetch:u.default.number,maxRenderedSlides:u.default.number,cellPadding:u.default.number,slideWidth:u.default.string,slideHeight:u.default.string,beforeChange:u.default.func,afterChange:u.default.func,transitionDuration:u.default.oneOfType([u.default.number,u.default.string]),autoplay:u.default.bool,autoplaySpeed:u.default.oneOfType([u.default.number,u.default.string]),lazyLoad:u.default.bool,controls:u.default.arrayOf(u.default.shape({component:u.default.func.isRequired,props:u.default.object,position:u.default.oneOf(["top","bottom"])})),draggable:u.default.bool,pauseOnHover:u.default.bool,clickToNavigate:u.default.bool,dragThreshold:u.default.number,onSlideTransitioned:u.default.func,easing:u.default.oneOf(["ease","linear","ease-in","ease-out","ease-in-out"]),style:u.default.shape({container:u.default.object,containerInner:u.default.object,viewport:u.default.object,track:u.default.object,slide:u.default.object,selectedSlide:u.default.object})}}static get defaultProps(){return{initialSlide:0,dots:!0,arrows:!0,infinite:!0,viewportWidth:"100%",width:"100%",height:"auto",imagesToPrefetch:5,maxRenderedSlides:5,cellPadding:0,transitionDuration:500,autoplay:!1,autoplaySpeed:4e3,lazyLoad:!0,controls:[],draggable:!0,pauseOnHover:!0,transition:"slide",dragThreshold:.2,clickToNavigate:!0,easing:"ease-in-out",style:{}}}constructor(e){super(...arguments),(0,o.default)(this,"handleInitialLoad",(()=>{const{currentSlide:e}=this.state,t=this._track.childNodes,{slideWidth:n,slideHeight:i}=this.props;if(!n||!i)for(let n=0;n<t.length;n++){const i=t[n];if(parseInt(i.getAttribute("data-index"),10)===e){if(!i.offsetWidth||!i.offsetHeight)return void(this._initialLoadTimer=setTimeout(this.handleInitialLoad,10));this.setState({slideDimensions:{width:i.offsetWidth,height:i.offsetHeight}});break}}})),(0,o.default)(this,"goToSlide",((e,t,n=!1)=>{const{beforeChange:i,transitionDuration:s,transition:o,onSlideTransitioned:r,children:a}=this.props,{currentSlide:l}=this.state,u=d.Children.count(a)-1,c=e<0?u+e+1:e<=u?e:e-u-1;t=t||(e>l?"right":"left"),r&&r({autoPlay:n,index:c,direction:t}),l!==c&&(this._animating||(this._animating=!0,i&&i(e,l,t),this.setState({transitionDuration:s},(()=>{this.setState({currentSlide:c,direction:t,transitioningFrom:l},(()=>{s&&"fade"!==o||this.slideTransitionEnd()}))}))))})),(0,o.default)(this,"nextSlide",(e=>{const{currentSlide:t}=this.state;this.goToSlide(t+1,"right","object"!=typeof e)})),(0,o.default)(this,"prevSlide",(()=>{const{currentSlide:e}=this.state;this.goToSlide(e-1,"left")})),(0,o.default)(this,"slideTransitionEnd",(e=>{const{currentSlide:t}=this.state,{afterChange:n}=this.props;e&&"transform"!==e.propertyName||(this._animating=!1,this.setState({direction:null,transitioningFrom:null,transitionDuration:0},(()=>{this._allImagesLoaded||this.fetchImages()})),this.props.autoplay&&this.startAutoplay(),n&&n(t))})),(0,o.default)(this,"calcLeftOffset",((e=0)=>{const{direction:t,loading:n}=this.state,i=this._viewport&&this._viewport.offsetWidth;if(clearTimeout(this._retryTimer),!this._track||!i)return void(this._retryTimer=setTimeout(this.calcLeftOffset,10));const{infinite:s,children:o,cellPadding:r}=this.props;let{currentSlide:a}=this.state;const l=this._track.childNodes,u=d.Children.count(o);s&&(0===a&&"right"===t?a=u:a===u-1&&"left"===t&&(a=-1));let c,h,f=0,p=!1,m=!1;for(let e=0;e<l.length&&(c=l[e],f-=r,m=-1!==c.className.indexOf(b),h=c.offsetWidth,p=p||!h&&!m,parseInt(c.getAttribute("data-index"),10)!==a);e++)f-=h;f+=(i-h)/2;const g=p&&e<500;f!==this.state.leftOffset&&this.setState({leftOffset:f}),g?this._retryTimer=setTimeout(this.calcLeftOffset.bind(this,++e),10):n&&this.setState({loading:!1})})),(0,o.default)(this,"handleSlideClick",(e=>{const{clickToNavigate:t}=this.props,{currentSlide:n}=this.state,i=parseInt(e.currentTarget.getAttribute("data-index"),10);!t||i===n||Math.abs(this._startPos.x-e.clientX)>.01||this.goToSlide(i)})),(0,o.default)(this,"onMouseDown",(e=>{const{draggable:t,transition:n}=this.props;"IMG"===e.target.nodeName&&e.preventDefault(),t&&"fade"!==n&&!this._animating&&(this._autoplayTimer&&clearTimeout(this._autoplayTimer),this._startPos={x:e.clientX,y:e.clientY,startTime:Date.now()},this.setState({transitionDuration:0}),document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.stopDragging,!1))})),(0,o.default)(this,"onMouseMove",(e=>{e.preventDefault(),this.setState({dragOffset:e.clientX-this._startPos.x})})),(0,o.default)(this,"onMouseEnter",(()=>{document.addEventListener("mousemove",this.handleMovement,!1)})),(0,o.default)(this,"handleMovement",(()=>{this.setHoverState(!0)})),(0,o.default)(this,"onMouseOver",(()=>{this.setHoverState(!0)})),(0,o.default)(this,"onMouseLeave",(()=>{document.removeEventListener("mousemove",this.handleMovement,!1),this.setHoverState(!1),!this._animating&&this._startPos&&this.stopDragging()})),(0,o.default)(this,"onTouchStart",(e=>{const{draggable:t,transition:n}=this.props;t&&"fade"!==n&&!this._animating&&(this._autoplayTimer&&clearTimeout(this._autoplayTimer),1===e.touches.length&&(this._startPos={x:e.touches[0].screenX,y:e.touches[0].screenY,startTime:Date.now()},document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.stopDragging,!1)))})),(0,o.default)(this,"onTouchMove",(e=>{const{x:t,y:n}=this._prevPos||this._startPos,{screenX:i,screenY:s}=e.touches[0],o=180*Math.abs(Math.atan2(s-n,i-t))/Math.PI;this._prevPos={x:i,y:s},(o<20||o>160)&&(e.preventDefault(),this.setState({dragOffset:i-this._startPos.x}))})),(0,o.default)(this,"stopDragging",(()=>{const{dragThreshold:e,transitionDuration:t}=this.props,{dragOffset:n}=this.state,i=this._viewport&&this._viewport.offsetWidth||1,s=Math.abs(n/i),o=Date.now()-this._startPos.startTime||1,r=o/(s*i),a=s>.05&&o<250;let l;l=a||s>e?Math.min(r*(1-s)*i,(0,c.default)(""+t)*(1-s)):(0,c.default)(""+t)*s,this.removeDragListeners(),this.setState({transitionDuration:l},(()=>{const{children:t,infinite:i}=this.props,{currentSlide:o}=this.state,r=d.Children.count(t);let l=o,u="";(s>e||a)&&(n>0?(l--,l<0&&(l=i?r-1:o)):(l++,l===r&&(l=i?0:o)),u=n>0?"left":"right"),this.setState({dragOffset:0,currentSlide:l,direction:u})})),this.props.autoplay&&this.startAutoplay()})),this.state={currentSlide:e.initialSlide,loading:e.lazyLoad,loadedImages:{},slideDimensions:{},dragOffset:0,transitionDuration:0,transitioningFrom:null}}static getDerivedStateFromProps(e,t){const{currentSlide:n}=t,i=d.Children.count(e.children);return n>=i?{currentSlide:i?i-1:0}:null}componentDidUpdate(e,t){const{children:n,autoplay:i,slideWidth:s}=this.props,{currentSlide:o,loadedImages:r,direction:a,loading:l,slideDimensions:u}=this.state,c=e.children;a===t.direction&&o===t.currentSlide&&r===t.loadedImages&&s===e.slideWidth&&u.width===t.slideDimensions.width&&u.height===t.slideDimensions.height||this.calcLeftOffset(),(0,f.default)(d.Children.toArray(n),d.Children.toArray(c))||(this._animating=!1,this.fetchImages()),i&&(!l&&t.loading||!e.autoplay)&&this.startAutoplay()}componentDidMount(){const{lazyLoad:e,autoplay:t}=this.props;this._isMounted=!0,e?this.fetchImages():(t&&this.startAutoplay(),this.calcLeftOffset()),window.addEventListener("resize",this.calcLeftOffset,!1),window.IntersectionObserver&&(this._observer=new window.IntersectionObserver((e=>{this.props.autoplay&&(e&&e[0]&&e[0].isIntersecting?this.startAutoplay():clearTimeout(this._autoplayTimer))})),this._observer.observe(this._containerRef))}componentWillUnmount(){this.removeDragListeners(),window.removeEventListener("resize",this.calcLeftOffset,!1),document.removeEventListener("mousemove",this.handleMovement,!1),clearTimeout(this._autoplayTimer),clearTimeout(this._retryTimer),clearTimeout(this._initialLoadTimer),this._observer&&this._observer.unobserve(this._containerRef),this._isMounted=!1}startAutoplay(){clearTimeout(this._autoplayTimer),this._autoplayTimer=setTimeout((()=>{const{autoplay:e}=this.props;e&&this.nextSlide()}),(0,c.default)(""+this.props.autoplaySpeed))}fetchImages(){const{children:e}=this.props,{loadedImages:t,currentSlide:n}=this.state,i=d.Children.toArray(e),s=Math.min(this.props.imagesToPrefetch,i.length),o=n-Math.floor(s/2),r=o+s,a=[],l=i[n].props.src;for(let e=o;e<r;e++){const n=(0,m.default)(i,e%i.length).props.src;n&&!t[n]&&a.push(n)}a.length?a.forEach((e=>{const t=new Image;t.onload=t.onerror=()=>{this._isMounted&&this.setState({loadedImages:{...this.state.loadedImages,[e]:{width:t.width||"auto",height:t.height||"auto"}}},(()=>{e===l&&this.handleInitialLoad()}))},t.src=e})):this.calcLeftOffset()}getControls(){const{arrows:e,dots:t,controls:n}=this.props;let i=n.slice(0);return t&&i.push({component:w.Dots}),e&&(i=i.concat([{component:w.Arrow,props:{direction:"left"}},{component:w.Arrow,props:{direction:"right"}}])),i}render(){const{className:e,viewportWidth:t,viewportHeight:i,width:s,height:o,dots:r,infinite:a,children:l,slideHeight:u,transition:f,style:p,draggable:m,easing:g,arrows:y}=this.props,{loading:v,transitionDuration:b,dragOffset:w,currentSlide:S,leftOffset:_}=this.state,T=d.Children.count(l),x=(0,h.default)("carousel",e,{loaded:!v}),O={...p.container||{},width:s,height:o},M={...p.containerInner||{},width:s,height:o,marginBottom:r?"20px":0},E={...p.viewport||{},width:t,height:i||u||"auto"};let L={...p.track};if("fade"!==f){const e=_+w;L={...L,transform:`translateX(${e}px)`,transition:b?`transform ${(0,c.default)(""+b)}ms ${g}`:"none"}}m||(L.touchAction="auto");const k=this.getControls();return d.default.createElement("div",{className:x,style:O,ref:e=>{this._containerRef=e}},d.default.createElement("div",{className:"carousel-container-inner",style:M},k.filter((e=>"top"===e.position)).map(((e,t)=>d.default.createElement(e.component,(0,n.default)({},e.props,{key:`control-${t}`,selectedIndex:S,numSlides:T,nextSlide:this.nextSlide,prevSlide:this.prevSlide,goToSlide:this.goToSlide,infinite:a})))),d.default.createElement("div",{className:"carousel-viewport",ref:e=>{this._viewport=e},style:E},d.default.createElement("ul",{className:"carousel-track",style:L,ref:e=>{this._track=e},onTransitionEnd:this.slideTransitionEnd,onMouseDown:this.onMouseDown,onMouseLeave:this.onMouseLeave,onMouseOver:this.onMouseOver,onMouseEnter:this.onMouseEnter,onTouchStart:this.onTouchStart},this.renderSlides())),k.filter((e=>"top"!==e.position)).map(((e,t)=>d.default.createElement(e.component,(0,n.default)({},e.props,{key:`control-${t}`,selectedIndex:S,numSlides:T,nextSlide:this.nextSlide,prevSlide:this.prevSlide,goToSlide:this.goToSlide,arrows:y,infinite:a}))))))}renderSlides(){const{children:e,infinite:t,cellPadding:n,slideWidth:i,slideHeight:s,transition:o,transitionDuration:r,style:a,easing:l,lazyLoad:u}=this.props,{slideDimensions:f,currentSlide:p,loadedImages:m}=this.state;this._allImagesLoaded=!0;let g=d.Children.map(e,((e,t)=>{const g=`slide-${t}`,y=e.props.src,w=(0,h.default)("carousel-slide",{[v]:t===p,"carousel-slide-fade":"fade"===o});let S={marginLeft:`${n}px`,height:s,width:i};"fade"===o&&(S.transition=`opacity ${(0,c.default)(""+r)}ms ${l}`),s&&(S.overflowY="hidden",S.minHeight=s),i&&(S.overflowX="hidden",S.minWidth=i),S={...S,...a.slide||{},...t===p&&a.selectedSlide||{}};const _={...S||{},marginLeft:S.marginLeft,width:i||f.width,height:s||f.height},T=this.getIndicesToRender();if(!u||(y?m[y]:T.indexOf(t)>-1)){if(y&&m[y]){const{width:e,height:t}=m[y];S.height=S.height||t,S.width=S.width||e}return d.default.createElement("li",{key:g,style:S,"data-index":t,className:w,onClick:this.handleSlideClick},e)}return y&&(this._allImagesLoaded=!1),d.default.createElement("li",{key:g,style:_,"data-index":t,className:(0,h.default)(w,b),onClick:this.handleSlideClick})}));return t&&"fade"!==o&&(g=this.addClones(g)),g}getIndicesToRender(){const{currentSlide:e,transitioningFrom:t}=this.state,{children:n,infinite:i,maxRenderedSlides:s}=this.props,o=d.Children.count(n);function r(e,t){const n=[];for(let s=e;s<=t;s++)i&&s<0?n.push(o+s):i&&s>=o?n.push(s-o):n.push(s);return n}const a=Math.max(1,s),l=Math.floor((a-1)/2),u=Math.floor(a/2);let c=r(e-l,e+u);return null!==t&&(c=c.concat(r(t-l,t+u))),c}addClones(e){const t=e.length,n=[(0,m.default)(e,t-2),(0,m.default)(e,t-1),(0,m.default)(e,0),(0,m.default)(e,Math.min(1,t-1))],i=[(0,d.cloneElement)(n[0],{key:"clone-1","data-index":-2,className:n[0].props.className.replace(v,"")}),(0,d.cloneElement)(n[1],{key:"clone-0","data-index":-1,className:n[1].props.className.replace(v,"")})],s=[(0,d.cloneElement)(n[2],{key:"clone-2","data-index":t,className:n[2].props.className.replace(v,"")}),(0,d.cloneElement)(n[3],{key:"clone-3","data-index":t+1,className:n[3].props.className.replace(v,"")})];return i.concat(e).concat(s)}setHoverState(e){const{pauseOnHover:t,autoplay:n}=this.props;t&&n&&(clearTimeout(this._hoverTimer),e?(clearTimeout(this._autoplayTimer),this._hoverTimer=setTimeout((()=>{this.setHoverState(!1)}),2e3)):this.startAutoplay())}removeDragListeners(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.stopDragging,!1),document.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),document.removeEventListener("touchend",this.stopDragging,!1)}}t.default=T})),x=n.g(T),O=".carousel {\n  text-align: center;\n  position: relative;\n  opacity: 0;\n  margin: 0 auto;\n  transition: opacity 0.5s;\n}\n.carousel .carousel-container-inner {\n  margin: 0 auto;\n  position: relative;\n}\n.carousel .carousel-viewport {\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n}\n.carousel .carousel-arrow-default {\n  border: 3px solid !important;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.9);\n  height: 32px;\n  width: 32px;\n  font-weight: 900;\n  background: rgba(0, 0, 0, 0.15);\n}\n.carousel .carousel-arrow {\n  position: absolute;\n  z-index: 1;\n  bottom: 23px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n}\n.carousel .carousel-arrow:focus {\n  outline: none;\n}\n.carousel .carousel-arrow:before {\n  font-size: 19px;\n  display: block;\n  margin-top: -2px;\n}\n.carousel .carousel-arrow:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.carousel .carousel-left-arrow {\n  left: 23px;\n}\n.carousel .carousel-right-arrow {\n  right: 23px;\n}\n.carousel .carousel-left-arrow.carousel-arrow-default:before {\n  content: '<';\n  padding-right: 2px;\n}\n.carousel .carousel-right-arrow.carousel-arrow-default:before {\n  content: '>';\n  padding-left: 2px;\n}\n.carousel .carousel-track {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  touch-action: pan-y pinch-zoom;\n}\n.carousel .carousel-track .carousel-slide {\n  display: inline-block;\n  opacity: 0.7;\n  transition: opacity 0.5s ease-in-out;\n}\n.carousel .carousel-track .carousel-slide > * {\n  display: block;\n  white-space: normal;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-loading {\n  background: rgba(204, 204, 204, 0.7);\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-fade {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-selected {\n  opacity: 1;\n  z-index: 1;\n}\n.carousel.loaded {\n  opacity: 1;\n}\n.carousel .carousel-dots {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -30px;\n  text-align: center;\n}\n.carousel .carousel-dots li {\n  display: inline-block;\n}\n.carousel .carousel-dots button {\n  border: 0;\n  background: transparent;\n  font-size: 1.1em;\n  cursor: pointer;\n  color: #CCC;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.carousel .carousel-dots button.selected {\n  color: black;\n}\n.carousel .carousel-dots button:focus {\n  outline: none;\n}\n";const M="carousel-stylesheet";var E=(global.React||guac.react).forwardRef(((e,n)=>{const i="undefined"==typeof window;return(global.React||guac.react).useEffect((()=>{if(document.getElementById(M))return;const e=document.createElement("style");e.setAttribute("id",M),e.textContent=O,document.head.appendChild(e)}),[]),(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,(global.React||guac.react).createElement(x,t._({},e,{ref:n})),i&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX.Style,{attributes:{id:M}}," ",O," "))}));e.default=E,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=Carousel-d4bbd8a7.js.map
