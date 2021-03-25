/*! For license information please see component---src-pages-index-js-e249ffc3f92403ccbd41.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hyperspace=self.webpackChunkgatsby_starter_hyperspace||[]).push([[678],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var o=n(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:function(e,t,n){var o=n(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8585:function(e,t,n){var o=n(8).default,r=n(1506);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var o=n(3646),r=n(6860),l=n(379),a=n(8206);e.exports=function(e){return o(e)||r(e)||l(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var o=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5900:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&e.push(a)}else if("object"===l)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},4266:function(e,t,n){"use strict";var o=n(5318);t.Z=void 0;var r=o(n(7154)),l=o(n(9713)),a=o(n(319)),i=o(n(4575)),s=o(n(8585)),c=o(n(9754)),u=o(n(1506)),p=o(n(3913)),f=o(n(2205)),d=o(n(5697)),m=o(n(7294)),h=o(n(5900)),g=o(n(2470));var y=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,f.default)(t,e),(0,p.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,p.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],o=0,r=e.length;o<r;o++)n[o]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],o=[],r=e||this.state.targetItems,l=!1,i=0,s=r.length;i<s;i++){var c=r[i],u=!l&&this._isInView(c);u?(l=!0,t.push(c)):n.push(c);var p=i===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&p&&f&&(n.pop(),n.push.apply(n,(0,a.default)(t)),t=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:t,outView:n,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,o=n.rootEl,r=n.offset;o&&(t=document.querySelector(o).getBoundingClientRect());var l=e.getBoundingClientRect(),a=o?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+a,c=o?l.top+i-t.top+r:l.top+i+r,u=c+e.offsetHeight;return c<s&&u>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,o=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),o=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(o)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,o=n.children,a=n.className,i=n.scrolledPastClassName,s=n.style,c=0,u=m.default.Children.map(o,(function(t,n){var o;if(!t)return null;var a=t.type,s=i&&e.state.isScrolledPast[n],u=(0,h.default)((o={},(0,l.default)(o,"".concat(t.props.className),t.props.className),(0,l.default)(o,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,l.default)(o,"".concat(e.props.scrolledPastClassName),s),o));return m.default.createElement(a,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),p=(0,h.default)((0,l.default)({},"".concat(a),a));return m.default.createElement(t,{className:p,style:s},u)}}]),t}(m.default.Component);t.Z=y},2470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+o?(clearTimeout(n),n=setTimeout((function(){t=r,e()}),o)):(t=r,e())}};t.default=n},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=f(this),o=n.getBoundingClientRect(),l=this.getBoundingClientRect();n!==t.body?(m.call(this,n,n.scrollLeft+l.left-o.left,n.scrollTop+l.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function p(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function f(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function d(t){var n,o,r,a,i=(l()-t.startTime)/468;a=i=i>1?1:i,n=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,r),o===t.x&&r===t.y||e.requestAnimationFrame(d.bind(e,t))}function m(n,o,a){var s,c,u,p,f=l();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,p=r.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,p=i),d({scrollable:s,method:p,startTime:f,startX:c,startY:u,x:o,y:a})}}}}()},5581:function(e,t,n){"use strict";var o=n(7294);t.Z=function(){return o.createElement("footer",{id:"footer",className:"wrapper style1-alt"},o.createElement("div",{className:"inner"},o.createElement("ul",{className:"menu"},o.createElement("li",null,"© Karunya Sethuraman. All rights reserved."),o.createElement("li",null,"Design: ",o.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))))}},1528:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(7294),r=n(7068),l=n(5581),a=n(4266);var i=n(3552),s=n(9634),c=n.n(s),u=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){c().polyfill()},n.handleClick=function(e){e.preventDefault();var t=0,n=!0,o=this.props,r=o.type,l=o.element,a=o.offset,i=o.timeout;if(r&&l)switch(r){case"class":n=!!(t=document.getElementsByClassName(l)[0]);break;case"id":n=!!(t=document.getElementById(l))}n?this.scrollTo(t,a,i):console.log("Element not found: "+l)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),n):window.scroll({top:o+t,left:0,behavior:"smooth"})},n.render=function(){return o.createElement(u,null,"object"==typeof this.props.children?o.cloneElement(this.props.children,{onClick:this.handleClick}):o.createElement("span",{onClick:this.handleClick},this.props.children))},t}(o.Component),f=function(e){var t=e.content,n=e.href;return o.createElement("li",null,o.createElement(p,{type:"id",element:n},o.createElement("a",{href:"#"+n},t)))},d=function(){var e=o.useState([{content:"About",href:"intro"},{content:"Education",href:"one"},{content:"Professional Work Experience",href:"jobs"},{content:"Projects + Research",href:"two"},{content:"Programming Skills",href:"programming"},{content:"Get in touch",href:"three"}])[0];return o.createElement("section",{id:"sidebar"},o.createElement("div",{className:"inner"},o.createElement("nav",null,o.createElement(a.Z,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300},e.map((function(e){return o.createElement(f,Object.assign({key:e.href},e))}))))))},m=function(){return o.createElement("section",{id:"intro",className:"wrapper style1 fullscreen fade-up"},o.createElement("div",{className:"inner"},o.createElement("h1",null,"Karunya Sethuraman"),o.createElement("p",null,"Hi, my name is Karunya Sethuraman, and I'm a recent CS graduate from MIT (S.B. & M.Eng '20), currently open to new opportunities."),o.createElement("ul",{className:"actions"},o.createElement("li",null,o.createElement(p,{type:"id",element:"one"},o.createElement("a",{href:"#one",className:"button"},"See More"))))))},h=n.p+"static/pic01-a2ca62553aaf661b57307ac8532a0d83.jpg",g=n.p+"static/pic02-69b470ee7ff5bebc7a44ebd40e007264.jpg",y=(n.p,n(5444)),v=function(e){e.href;var t=e.image,n=e.heading,r=e.location,l=e.description,a=e.description1,i=e.to;return o.createElement("section",null,o.createElement("a",{className:"image",alt:"image"},o.createElement("img",{src:t,alt:"","data-position":"center center"})),o.createElement("div",{className:"content"},o.createElement("div",{className:"inner"},o.createElement("h2",null,n),o.createElement("h3",null,r),o.createElement("p",null,l),o.createElement("p",null,a),o.createElement("ul",{className:"actions"},o.createElement("li",null,o.createElement(y.Link,{className:"button",href:i.href},i.label))))))},b=function(){var e=[{href:"/#",image:h,heading:"Thesis: A Step Toward Dynamic Displays and Ecological Data Collection In Cognitive Testing",location:"Massachusetts Institute of Technology",description:"M. Eng in Computer Science and Engineering, Systems Concentration (Sept. 2020)",description1:"Thesis Advisors: Dr. Randall Davis and Dr. Dana L. Penney, MIT Computer Science & Artificial Intelligence Laboratory",to:{href:"../../pdfs/thesis.pdf",label:"Read more"}},{href:"/#",image:g,heading:"S.B. in Computer Science and Engineering (May. 2020)",location:"Massachusetts Institute of Technology",description:"",description1:"",to:{href:"#two",label:"Learn more"}}],t=o.useState(e)[0];return o.createElement("div",null,o.createElement("section",{id:"one",className:"wrapper style2 spotlights"},t.map((function(e){return o.createElement(v,Object.assign({key:e.heading},e))}))))},E=function(e){var t=e.title,n=e.location,r=e.time_period,l=e.description,a=e.description1;e.to;return o.createElement("section",null,o.createElement("div",{className:"content"},o.createElement("div",{className:"inner"},o.createElement("h2",null,t),o.createElement("h3",null,n),o.createElement("h5",null,r),o.createElement("i",null,l),o.createElement("p",null,a),o.createElement("ul",{className:"actions"}))))},w=function(){var e=o.useState([{title:"Morgan Stanley Technology Banking M&A",location:"Menlo Park, CA",time_period:"July 2020 - Present",description:"Investment Banking Analyst, Technology M&A",description1:"Worked on Xilinx’s $35Bn Sale to AMD and Gores Holdings VI’s $2.3Bn Acquisition of Matterport"},{title:"Morgan Stanley Technology Banking",location:"New York, NY",time_period:"July - August 2019",description:"\n Investment Banking Intern",description1:"\n Worked on several technology transactions; share buybacks, mergers, and acquisitions"},{title:"Oral Communication (6.UAT)",location:"Cambridge, MA",time_period:"January – May 2019",description:"Teaching Assistant",description1:"Taught students to speak confidently and give effective technical presentations"},{title:"Tophatter, Inc",location:"San Francisco, CA",time_period:"June – August 2018",description:"Software Engineering Intern",description1:"Built custom catalogs, responsive product page features, internal API for mobile clients, and internal tool to facilitate creation of personalized onsite schedule pages for interviewees"},{title:"MIT Music Technology Lab, led by Prof. Eran Egozy",location:"Cambridge, MA",time_period:"June – December 2017",description:"Undergraduate Researcher, ConcertCue",description1:"Full-stack web development; deployed web application to provide real-time content at concerts"}])[0];return o.createElement("div",null,o.createElement("section",{id:"jobs",className:"wrapper style1 spotlights"},e.map((function(e){return o.createElement(E,Object.assign({key:e.title},e))}))))},S=function(e){var t=e.heading,n=e.description,r=e.iconClass,l=e.to;return o.createElement("section",null,o.createElement("span",{className:"icon major "+r}),o.createElement("h3",null,t),o.createElement("p",null,n),o.createElement("ul",{className:"actions"},o.createElement("li",null,o.createElement("a",{className:"button",href:l.href},l.label))))},k=(n.p,function(){var e=o.useState([{heading:"Alabama Vaccine Aggregator",description:"Worked with Partners In Health on a website (https://bamavax.info) and twitter bot to scrape available Covid-19 vaccine appointments across the state of Alabama and make them available",iconClass:"fa-code",to:{href:"https://www.bamavax.info",label:"Link to Bamavax.info"}},{heading:"ColorStitch",description:"We aim to create a state-of-the-art cross-stitch pattern generator and use it to both generate and sell custom patterns & cross-stitch kits. Currently funded by MIT Sandbox.",iconClass:"fa-diamond",to:{href:"http://sandbox.mit.edu",label:"Link to Sandbox"}},{heading:"Secure Email Voting",description:"Final project for 6.857 (Network and Computer Security) - a secure email voting scheme based on an overlay network that utilizes onion routing to provide users with anonymity. Includes strategies for secure registration, voting, and authentication.",iconClass:"fa-cog",to:{href:"https://courses.csail.mit.edu/6.857/2020/projects/7-Chen-Hsu-Sethuraman-Srinivasan.pdf",label:"Read More"}},{heading:"ColorDJ",description:"A system that allows the user to submit images over text and returns a Spotify playlist songs based around the image's properties (color profile, detected expressions / objects, etc). This project was built with Flask in Python and uses the Google Cloud Vision and Language Processing API, the Spotify API, and Twilio.",iconClass:"fa-desktop",to:{href:"https://github.com/M1Hackers/ColorDJ",label:"Link to ColorDJ repository"}},{heading:"FRUITS",description:"FRUITS offers the opportunity to create an unlimited number of different itineraries. Each itinerary keeps track of the locations visited and the times in the schedule reserved for the visit. System: built using Ruby on Rails with a React frontend, leveraging Google Cloud Platform for Maps and Places.",iconClass:"fa-cog",to:{href:"https://github.com/M1Hackers/fruits",label:"Link to FRUITS repository"}},{heading:"Identifying Acute Myeloid Leukemia using Machine Learning Methods on Selected DNA Methylation Data",description:"Final Project for 6.047 (Computational Biology: Genomes, Networks, Evolution), a research project involving the creation and evaluation of feature selection and machine learning methods, outlining the pros and cons of each when applied to identifying AML cases using DNA methylation data.",iconClass:"fa-cog",to:{href:"../../pdfs/HsuSethuramanFinalReport Abstract.pdf",label:"Link to Abstract"}},{heading:"FunTimes",description:"Android application for finding fun places nearby, based on certain charecteristics. A project for YHack 2017.",iconClass:"fa-chain",to:{href:"https://github.com/M1Hackers/FunTimes",label:"Link to FunTimes repository"}},{heading:"Language Learner",description:"Available on the Chrome Web Store, Language Learner highlights words from the user's quizlet playlist in any webpage, so they can learn new vocabulary in context. Works across languages.",iconClass:"fa-lock",to:{href:"https://github.com/M1Hackers/languagelearner",label:"Link to repository"}}])[0];return o.createElement(o.Fragment,null,e.map((function(e){return o.createElement(S,Object.assign({key:e.heading},e))})))}),_=function(){return o.createElement("section",{id:"two",className:"wrapper style3 fade-up"},o.createElement("div",{className:"inner"},o.createElement("h2",null,"Projects & Research"),o.createElement("p",null,"Please see below a couple projects I've worked on."),o.createElement("div",{className:"features"},o.createElement(k,null)),o.createElement("ul",{className:"actions"},o.createElement("li",null,o.createElement(y.Link,{className:"button",href:"https://github.com/karunyas"},"Link to Github")))))},x=function(){return o.createElement("section",{id:"programming",className:"wrapper style1 fullscreen fade-up"},o.createElement("div",{className:"inner"},o.createElement("h1",null,"Programming Languages"),o.createElement("p",null,"Advanced: Python, C++, JavaScript, HTML, CSS, Java, Ruby on Rails, Node.js"),o.createElement("p",null,"Intermediate: SQL, Scheme, Matlab, Swift")))},C=function(){return o.createElement("section",null,o.createElement("ul",{className:"contact"},o.createElement("li",null,o.createElement("h3",null,"Email"),o.createElement("a",{href:"/#"},"karunyas@alum.mit.edu")),o.createElement("li",null,o.createElement("h3",null,"Social"),o.createElement("ul",{className:"icons"},o.createElement("li",null,o.createElement("a",{href:"https://github.com/karunyas",className:"fa-github"},o.createElement("span",{className:"label"},"GitHub"))),o.createElement("li",null,o.createElement("a",{href:"https://www.linkedin.com/in/karunyasethuraman/",className:"fa-linkedin"},o.createElement("span",{className:"label"},"LinkedIn")))))))},T=function(){return o.createElement("section",{id:"three",className:"wrapper style1 fade-up"},o.createElement("div",{className:"inner"},o.createElement("h2",null,"Get in touch"),o.createElement("p",null,"If you have an opportunity you think I'd be interested in, or would like to chat, please reach out!"),o.createElement(C,null)))},N=function(){return o.createElement(r.Z,null,o.createElement(d,null),o.createElement("div",{id:"wrapper"},o.createElement(m,null),o.createElement(b,null),o.createElement(w,null),o.createElement(_,null),o.createElement(x,null),o.createElement(T,null)),o.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e249ffc3f92403ccbd41.js.map