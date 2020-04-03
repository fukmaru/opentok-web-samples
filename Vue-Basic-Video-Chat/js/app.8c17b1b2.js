(function(e){function t(t){for(var r,o,u=t[0],a=t[1],c=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==s[a]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"session"},on:{error:e.errorHandler}},[n("publisher",{attrs:{session:e.session},on:{error:e.errorHandler}}),e._l(e.streams,(function(t){return n("div",{key:t.streamId,attrs:{id:"subscribers"}},[n("subscriber",{attrs:{stream:t,session:e.session},on:{error:e.errorHandler}})],1)}))],2)},i=[],o=(n("c975"),n("a434"),n("33ba")),u=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},c=[],l={name:"publisher",props:{session:{type:u.a.Session,required:!1},opts:{type:Object,required:!1}},mounted:function(){var e=this,t=u.a.initPublisher(this.$el,this.opts,(function(t){t?e.$emit("error",t):e.$emit("publisherCompleted")}));this.$emit("publisherCreated",t);var n=function(){e.session.publish(t,(function(n){n?e.$emit("error",n):e.$emit("publisherConnected",t)}))};this.session&&this.session.isConnected()&&n(),this.session&&this.session.on("sessionConnected",n)}},p=l,d=n("2877"),f=Object(d["a"])(p,a,c,!1,null,null,null),h=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},m=[],v={name:"subscriber",props:{stream:{type:u.a.Stream,required:!0},session:{type:u.a.Session,required:!0},opts:{type:Object,required:!1}},mounted:function(){var e=this,t=this.session.subscribe(this.stream,this.$el,this.opts,(function(n){n?e.$emit("error",n):e.$emit("subscriberConnected",t)}));this.$emit("subscriberCreated",t)}},y=v,g=Object(d["a"])(y,b,m,!1,null,null,null),O=g.exports,j=function(e){alert(e.message)},k={name:"session",components:{Publisher:h,Subscriber:O},props:{apiKey:{type:String,default:""},sessionId:{type:String,default:""},token:{type:String,default:""}},created:function(){var e=this;this.session=u.a.initSession(this.apiKey,this.sessionId),this.session.connect(this.token,(function(e){e&&j(e)})),this.session.on("streamCreated",(function(t){e.streams.push(t.stream)})),this.session.on("streamDestroyed",(function(t){var n=e.streams.indexOf(t.stream);n>-1&&e.streams.splice(n,1)}))},data:function(){return{streams:[],session:null}},methods:{errorHandler:j}},$=k,S=(n("f62a"),Object(d["a"])($,s,i,!1,null,null,null)),_=S.exports;r["a"].config.productionTip=!1;var w=function(e,t,n){new r["a"]({render:function(r){return r(_,{props:{sessionId:t,apiKey:e,token:n}})}}).$mount("#app")};fetch("https://opentok-web-samples-backend.herokuapp.com/session").then((function(e){return e.json()})).then((function(e){w(e.apiKey,e.sessionId,e.token)})).catch((function(){alert("Failed to get opentok sessionId and token. Make sure you have updated the .env file.")}))},d136:function(e,t,n){},f62a:function(e,t,n){"use strict";var r=n("d136"),s=n.n(r);s.a}});
//# sourceMappingURL=app.8c17b1b2.js.map