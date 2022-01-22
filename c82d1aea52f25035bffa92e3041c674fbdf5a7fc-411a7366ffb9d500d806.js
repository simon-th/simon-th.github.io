"use strict";(self.webpackChunkgatsby_starter=self.webpackChunkgatsby_starter||[]).push([[833],{208:function(t,e,n){function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},s.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,s,a={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return N}});var r=n(1721);function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(7294),l=n(3935),u=!1,p=o.createContext(null),c="unmounted",d="exited",f="entering",E="entered",h="exiting",m=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var a,r=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?r?(a=d,s.appearStatus=f):a=E:a=e.unmountOnExit||e.mountOnEnter?c:d,s.state={status:a},s.nextCallback=null,s}(0,r.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(e=f):n!==f&&n!==E||(e=h)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!=typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===f?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,a=this.props.nodeRef?[s]:[l.findDOMNode(this),s],r=a[0],i=a[1],o=this.getTimeouts(),p=s?o.appear:o.enter;!t&&!n||u?this.safeSetState({status:E},(function(){e.props.onEntered(r)})):(this.props.onEnter(r,i),this.safeSetState({status:f},(function(){e.props.onEntering(r,i),e.onTransitionEnd(p,(function(){e.safeSetState({status:E},(function(){e.props.onEntered(r,i)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:l.findDOMNode(this);e&&!u?(this.props.onExit(s),this.safeSetState({status:h},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=a[0],i=a[1];this.props.addEndListener(r,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,a(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(p.Provider,{value:null},"function"==typeof n?n(t,s):o.cloneElement(o.Children.only(n),s))},e}(o.Component);function x(){}m.contextType=p,m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},m.UNMOUNTED=c,m.EXITED=d,m.ENTERING=f,m.ENTERED=E,m.EXITING=h;var v=m,g=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"==typeof n.className?n.className=i(n.className,s):n.setAttribute("class",i(n.className&&n.className.baseVal||"",s)));var n,s}))},C=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),a=s[0],r=s[1];e.removeClasses(a,"exit"),e.addClass(a,r?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),a=s[0],r=s[1]?"appear":"enter";e.addClass(a,r,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),a=s[0],r=s[1]?"appear":"enter";e.removeClasses(a,r),e.addClass(a,r,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"==typeof n,a=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:a,activeClassName:s?a+"-active":n[t+"Active"],doneClassName:s?a+"-done":n[t+"Done"]}},e}(0,r.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&a&&(s+=" "+a),"active"===n&&t&&t.scrollTop,s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"==typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,a=n.active,r=n.done;this.appliedClasses[e]={},s&&g(t,s),a&&g(t,a),r&&g(t,r)},n.render=function(){var t=this.props,e=(t.classNames,a(t,["classNames"]));return o.createElement(v,s({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(o.Component);C.defaultProps={classNames:""};var N=C},6044:function(t,e,n){n.d(e,{T:function(){return r},y:function(){return i}});var s=n(7294),a=n(5273);function r(t,e){var n=[];return t.forEach((function(t){n.push(s.createElement("li",{className:e},t))})),n}function i(t){var e=[];return t.forEach((function(t){e.push(s.createElement("p",{className:a.p+" mb-4"},t))})),e}}}]);
//# sourceMappingURL=c82d1aea52f25035bffa92e3041c674fbdf5a7fc-411a7366ffb9d500d806.js.map