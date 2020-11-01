
<%@ Page Language="C#"  AutoEventWireup="true" CodeBehind="SDMR.aspx.cs" Inherits="SDM.SDM2" validateRequest="false" async="true" %>
<%@ Import Namespace="System.Web.Optimization" %>
<%@ Import Namespace="Salient.UXT.Properties" %>
<%@ Import Namespace="SDM.KMAN" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=10.0, user-scalable=yes, shrink-to-fit=no" />

    <base target="_blank" />
    <title>React, Webpack, and Babel</title>
    
    <!-- favicon -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="location icon" href="images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="icon" href="images/favicon.ico" type="image/vnd.microsoft.icon" />
    
    <script src="<%="ResourceStrings-" + InternalResources.LATEST_API_VERSION + ".js.aspx"%>" type="text/javascript"></script>
    
    <% if (ConfigManager.GetApplicationConfig("ClientShouldLogRequests") == "true") { %>
    <script type="text/javascript">document.RequestLogging = true;</script>
    <% } %>

    <%:Scripts.Render("~/Bundles/plugins") %>
    <%:Styles.Render("~/Bundles/pluginStyles") %>
    <%:Styles.Render("~/Bundles/sdmCssBundle") %>

    <% if ( HttpContext.Current.IsDebuggingEnabled ) { %>
	<link rel="stylesheet" type="text/css" href="Scripts/Client/Source/build/development/DashboardViewer/resources/DashboardViewer-all.css" />
    <script id="microloader" type="text/javascript" src="Scripts/Client/Source/bootstrap.js"></script>
    <% } else { %>
	<script type="text/javascript">var Ext=(Ext||{});Ext.manifest=("app.json?_dc="+new Date());</script>
    <script type="text/javascript">var Ext=Ext||{};Ext.manifest=Ext.manifest||"app.json";Ext=Ext||{};
Ext.Boot=Ext.Boot||function(j){function k(a){if(a.$isRequest)return a;a=a.url?a:{url:a};var b=a.url;p(a,{urls:b.charAt?[b]:b,charset:a.charset||d.config.charset});p(this,a)}function r(a){if(a.$isEntry)return a;var b=a.charset||d.config.charset,c=Ext.manifest,c=c&&c.loader,e=void 0!==a.cache?a.cache:c&&c.cache,m;void 0===e&&(e=!d.config.disableCaching);!1===e?m=+new Date:!0!==e&&(m=e);m&&(c=c&&c.cacheParam||d.config.disableCachingParam,m=c+"\x3d"+m);p(a,{charset:b,buster:m,requests:[]});p(this,a)}
var h=document,f=function(a,b,c){c&&f(a,c);if(a&&b&&"object"==typeof b)for(var e in b)a[e]=b[e];return a},t={disableCaching:/[?&](?:cache|disableCacheBuster)\b/i.test(location.search)||!/http[s]?\:/i.test(location.href)||/(^|[ ;])ext-cache=1/.test(h.cookie)?!1:!0,disableCachingParam:"_dc",loadDelay:!1,preserveScripts:!0,charset:void 0},v=/\.css(?:\?|$)/i,u=h.createElement("a"),q="undefined"!==typeof window,s={browser:q,node:!q&&"function"===typeof require,phantom:"undefined"!==typeof phantom&&phantom.fs},
n=Ext.platformTags={},p=function(a,b,c){c&&p(a,c);if(a&&b&&"object"===typeof b)for(var e in b)a[e]=b[e];return a},d={loading:0,loaded:0,env:s,config:t,scripts:{},currentFile:null,suspendedQueue:[],currentRequest:null,syncMode:!1,useElements:!0,listeners:[],Request:k,Entry:r,detectPlatformTags:function(){var a=navigator.userAgent,b=n.isMobile=/Mobile(\/|\s)/.test(a),c,e,m,l;c=document.createElement("div");e="iPhone;iPod;Android;Silk;Android 2;BlackBerry;BB;iPad;RIM Tablet OS;MSIE 10;Trident;Chrome;Tizen;Firefox;Safari;Windows Phone".split(";");
var g={};m=e.length;var w;for(w=0;w<m;w++)l=e[w],g[l]=RegExp(l).test(a);b=g.iPhone||g.iPod||!g.Silk&&g.Android&&(g["Android 2"]||b)||(g.BlackBerry||g.BB)&&g.isMobile||g["Windows Phone"];a=!n.isPhone&&(g.iPad||g.Android||g.Silk||g["RIM Tablet OS"]||g["MSIE 10"]&&/; Touch/.test(a));e="ontouchend"in c;!e&&(c.setAttribute&&c.removeAttribute)&&(c.setAttribute("ontouchend",""),e="function"===typeof c.ontouchend,"undefined"!==typeof c.ontouchend&&(c.ontouchend=void 0),c.removeAttribute("ontouchend"));e=
e||navigator.maxTouchPoints||navigator.msMaxTouchPoints;c=!b&&!a;m=g["MSIE 10"];l=g.Blackberry||g.BB;f(n,d.loadPlatformsParam(),{phone:b,tablet:a,desktop:c,touch:e,ios:g.iPad||g.iPhone||g.iPod,android:g.Android||g.Silk,blackberry:l,safari:g.Safari&&!l,chrome:g.Chrome,ie10:m,windows:m||g.Trident,tizen:g.Tizen,firefox:g.Firefox})},loadPlatformsParam:function(){var a=window.location.search.substr(1).split("\x26"),b={},c,e,d;for(c=0;c<a.length;c++)e=a[c].split("\x3d"),b[e[0]]=e[1];if(b.platformTags){e=
b.platform.split(/\W/);a=e.length;for(c=0;c<a;c++)d=e[c].split(":")}return d},filterPlatform:function(a){a=[].concat(a);var b,c,e;b=a.length;for(c=0;c<b;c++)if(e=a[c],n.hasOwnProperty(e))return!!n[e];return!1},init:function(){var a=h.getElementsByTagName("script"),b=a.length,c=/\/ext(\-[a-z\-]+)?\.js$/,e,m,l,g,f,x;for(x=0;x<b;x++)if(m=(e=a[x]).src)l=e.readyState||null,!g&&c.test(m)&&(d.hasReadyState="readyState"in e,d.hasAsync="async"in e||!d.hasReadyState,g=m),d.scripts[f=d.canonicalUrl(m)]||new r({key:f,
url:m,done:null===l||"loaded"===l||"complete"===l,el:e,prop:"src"});g||(e=a[a.length-1],g=e.src,d.hasReadyState="readyState"in e,d.hasAsync="async"in e||!d.hasReadyState);d.baseUrl=g.substring(0,g.lastIndexOf("/")+1);d.origin=window.location.origin||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");d.detectPlatformTags();Ext.filterPlatform=d.filterPlatform},canonicalUrl:function(a){u.href=a;a=u.href;var b=t.disableCachingParam,b=b?a.indexOf(b+
"\x3d"):-1,c,e;if(0<b&&("?"===(c=a.charAt(b-1))||"\x26"===c)){e=a.indexOf("\x26",b);if((e=0>e?"":a.substring(e))&&"?"===c)++b,e=e.substring(1);a=a.substring(0,b-1)+e}return a},getConfig:function(a){return a?d.config[a]:d.config},setConfig:function(a,b){if("string"===typeof a)d.config[a]=b;else for(var c in a)d.setConfig(c,a[c]);return d},getHead:function(){return d.docHead||(d.docHead=h.head||h.getElementsByTagName("head")[0])},create:function(a,b,c){c=c||{};c.url=a;c.key=b;return d.scripts[b]=new r(c)},
getEntry:function(a,b){var c=d.canonicalUrl(a),e=d.scripts[c];e||(e=d.create(a,c,b));return e},processRequest:function(a,b){a.loadEntries(b)},load:function(a){a=new k(a);if(a.sync||d.syncMode)return d.loadSync(a);d.currentRequest?(a.getEntries(),d.suspendedQueue.push(a)):(d.currentRequest=a,d.processRequest(a,!1));return d},loadSync:function(a){a=new k(a);d.syncMode++;d.processRequest(a,!0);d.syncMode--;return d},loadBasePrefix:function(a){a=new k(a);a.prependBaseUrl=!0;return d.load(a)},loadSyncBasePrefix:function(a){a=
new k(a);a.prependBaseUrl=!0;return d.loadSync(a)},requestComplete:function(a){if(d.currentRequest===a)for(d.currentRequest=null;0<d.suspendedQueue.length;)if(a=d.suspendedQueue.shift(),!a.done){d.load(a);break}!d.currentRequest&&0==d.suspendedQueue.length&&d.fireListeners()},isLoading:function(){return!d.currentRequest&&0==d.suspendedQueue.length},fireListeners:function(){for(var a;d.isLoading()&&(a=d.listeners.shift());)a()},onBootReady:function(a){d.isLoading()?d.listeners.push(a):a()},getPathsFromIndexes:function(a,
b){return k.prototype.getPathsFromIndexes(a,b)},createLoadOrderMap:function(a){return k.prototype.createLoadOrderMap(a)},fetch:function(a,b,c,e){e=void 0===e?!!b:e;var d=new XMLHttpRequest,l,g,f,h=!1,j=function(){d&&4==d.readyState&&(g=1223===d.status?204:0===d.status&&("file:"===(self.location||{}).protocol||"ionp:"===(self.location||{}).protocol)?200:d.status,f=d.responseText,l={content:f,status:g,exception:h},b&&b.call(c,l),d=null)};e&&(d.onreadystatechange=j);try{d.open("GET",a,e),d.send(null)}catch(k){return h=
k,j(),l}e||j();return l},notifyAll:function(a){a.notifyRequests()}};k.prototype={$isRequest:!0,createLoadOrderMap:function(a){var b=a.length,c={},e,d;for(e=0;e<b;e++)d=a[e],c[d.path]=d;return c},getLoadIndexes:function(a,b,c,e,m){var l=c[a],g,f,h,j,k;if(b[a])return b;b[a]=!0;for(a=!1;!a;){h=!1;for(j in b)if(b.hasOwnProperty(j)&&(l=c[j]))if(f=this.prepareUrl(l.path),f=d.getEntry(f),!m||!f||!f.done){f=l.requires;e&&l.uses&&(f=f.concat(l.uses));l=f.length;for(g=0;g<l;g++)k=f[g],b[k]||(h=b[k]=!0)}h||
(a=!0)}return b},getPathsFromIndexes:function(a,b){var c=[],e=[],d,f;for(d in a)a.hasOwnProperty(d)&&a[d]&&c.push(d);c.sort(function(a,b){return a-b});d=c.length;for(f=0;f<d;f++)e.push(b[c[f]].path);return e},expandUrl:function(a,b,c,e){"string"==typeof a&&(a=[a]);var d=this.loadOrder,f=this.loadOrderMap;if(d){this.loadOrderMap=f=f||this.createLoadOrderMap(d);b=b||{};var g=a.length,h=[],j,k;for(j=0;j<g;j++)(k=f[a[j]])?this.getLoadIndexes(k.idx,b,d,c,e):h.push(a[j]);return this.getPathsFromIndexes(b,
d).concat(h)}return a},expandUrls:function(a,b){"string"==typeof a&&(a=[a]);var c=[],d={},f,l=a.length,g,h,j,k;for(g=0;g<l;g++){f=this.expandUrl(a[g],{},b,!0);h=0;for(j=f.length;h<j;h++)k=f[h],d[k]||(d[k]=!0,c.push(k))}0==c.length&&(c=a);return c},expandLoadOrder:function(){var a=this.urls,b;this.expanded?b=a:(b=this.expandUrls(a,!0),this.expanded=!0);this.urls=b;a.length!=b.length&&(this.sequential=!0);return this},getUrls:function(){this.expandLoadOrder();return this.urls},prepareUrl:function(a){return this.prependBaseUrl?
d.baseUrl+a:a},getEntries:function(){var a=this.entries,b,c,e;if(!a){a=[];e=this.getUrls();for(b=0;b<e.length;b++)c=this.prepareUrl(e[b]),c=d.getEntry(c,{buster:this.buster,charset:this.charset}),c.requests.push(this),a.push(c);this.entries=a}return a},loadEntries:function(a){var b=this,c=b.getEntries(),d=c.length,f=b.loadStart||0,h,g;void 0!==a&&(b.sync=a);b.loaded=b.loaded||0;b.loading=b.loading||d;for(g=f;g<d;g++)if(h=c[g],f=h.loaded?!0:c[g].load(b.sync),!f){b.loadStart=g;h.onDone(function(){b.loadEntries(a)});
break}b.processLoadedEntries()},processLoadedEntries:function(){var a=this.getEntries(),b=a.length,c=this.startIndex||0,d;if(!this.done){for(;c<b;c++){d=a[c];if(!d.loaded){this.startIndex=c;return}d.evaluated||d.evaluate();d.error&&(this.error=!0)}this.notify()}},notify:function(){var a=this;if(!a.done){var b=a.error,c=a[b?"failure":"success"],b="delay"in a?a.delay:b?1:d.config.chainDelay,e=a.scope||a;a.done=!0;c&&(0===b||0<b?setTimeout(function(){c.call(e,a)},b):c.call(e,a));a.fireListeners();d.requestComplete(a)}},
onDone:function(a){var b=this.listeners||(this.listeners=[]);this.done?a(this):b.push(a)},fireListeners:function(){var a=this.listeners,b;if(a)for(;b=a.shift();)b(this)}};r.prototype={$isEntry:!0,done:!1,evaluated:!1,loaded:!1,isCrossDomain:function(){void 0===this.crossDomain&&(this.crossDomain=0!==this.getLoadUrl().indexOf(d.origin));return this.crossDomain},isCss:function(){void 0===this.css&&(this.css=this.url&&v.test(this.url));return this.css},getElement:function(a){var b=this.el;b||(this.isCss()?
(a=a||"link",b=h.createElement(a),"link"==a?(b.rel="stylesheet",this.prop="href"):this.prop="textContent",b.type="text/css"):(b=h.createElement(a||"script"),b.type="text/javascript",this.prop="src",d.hasAsync&&(b.async=!1)),this.el=b);return b},getLoadUrl:function(){var a=d.canonicalUrl(this.url);this.loadUrl||(this.loadUrl=this.buster?a+(-1===a.indexOf("?")?"?":"\x26")+this.buster:a);return this.loadUrl},fetch:function(a){var b=this.getLoadUrl();d.fetch(b,a.complete,this,!!a.async)},onContentLoaded:function(a){var b=
a.status,c=a.content;a=a.exception;this.getLoadUrl();this.loaded=!0;(a||0===b)&&!s.phantom?this.evaluated=this.error=!0:200<=b&&300>b||304===b||s.phantom||0===b&&0<c.length?this.content=c:this.evaluated=this.error=!0},createLoadElement:function(a){var b=this,c=b.getElement();b.preserve=!0;c.onerror=function(){b.error=!0;a&&a()};d.hasReadyState?c.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&a&&a()}:c.onload=a;c[b.prop]=b.getLoadUrl()},onLoadElementReady:function(){d.getHead().appendChild(this.getElement());
this.evaluated=!0},inject:function(a){var b=d.getHead(),c=this.url,e=this.key,f,j;this.isCss()?(this.preserve=!0,j=e.substring(0,e.lastIndexOf("/")+1),f=h.createElement("base"),f.href=j,b.firstChild?b.insertBefore(f,b.firstChild):b.appendChild(f),f.href=f.href,c&&(a+="\n/*# sourceURL\x3d"+e+" */"),c=this.getElement("style"),e="styleSheet"in c,b.appendChild(f),e?(b.appendChild(c),c.styleSheet.cssText=a):(c.textContent=a,b.appendChild(c)),b.removeChild(f)):(c&&(a+="\n//# sourceURL\x3d"+e),Ext.globalEval(a));
return this},loadCrossDomain:function(){var a=this,b=function(){a.loaded=a.evaluated=a.done=!0;a.notifyRequests()};if(a.isCss())a.createLoadElement(),a.evaluateLoadElement(),b();else return a.createLoadElement(function(){b()}),a.evaluateLoadElement(),!1;return!0},loadElement:function(){var a=this;if(a.isCss())return a.loadCrossDomain();a.createLoadElement(function(){a.loaded=a.evaluated=a.done=!0;a.notifyRequests()});a.evaluateLoadElement();return!0},loadSync:function(){var a=this;a.fetch({async:!1,
complete:function(b){a.onContentLoaded(b)}});a.evaluate();a.notifyRequests()},load:function(a){var b=this;if(!b.loaded){if(b.loading)return!1;b.loading=!0;if(a)b.loadSync();else{if(b.isCrossDomain())return b.loadCrossDomain();if(!b.isCss()&&d.hasReadyState)b.createLoadElement(function(){b.loaded=!0;b.notifyRequests()});else{if(d.useElements)return b.loadElement();b.fetch({async:!a,complete:function(a){b.onContentLoaded(a);b.notifyRequests()}})}}}return!0},evaluateContent:function(){this.inject(this.content);
this.content=null},evaluateLoadElement:function(){d.getHead().appendChild(this.getElement())},evaluate:function(){!this.evaluated&&!this.evaluating&&(this.evaluating=!0,void 0!==this.content?this.evaluateContent():this.error||this.evaluateLoadElement(),this.evaluated=this.done=!0,this.cleanup())},cleanup:function(){var a=this.el,b;if(a){if(!this.preserve)for(b in this.el=null,a.parentNode.removeChild(a),a)try{b!==this.prop&&(a[b]=null),delete a[b]}catch(c){}a.onload=a.onerror=a.onreadystatechange=
j}},notifyRequests:function(){var a=this.requests,b=a.length,c,d;for(c=0;c<b;c++)d=a[c],d.processLoadedEntries();this.done&&this.fireListeners()},onDone:function(a){var b=this.listeners||(this.listeners=[]);this.done?a(this):b.push(a)},fireListeners:function(){var a=this.listeners,b;if(a&&0<a.length)for(;b=a.shift();)b(this)}};Ext.disableCacheBuster=function(a,b){var c=new Date;c.setTime(c.getTime()+864E5*(a?3650:-1));c=c.toGMTString();h.cookie="ext-cache\x3d1; expires\x3d"+c+"; path\x3d"+(b||"/")};
d.init();return d}(function(){});Ext.globalEval=Ext.globalEval||(this.execScript?function(j){execScript(j)}:function(j){eval.call(window,j)});Function.prototype.bind||function(){var j=Array.prototype.slice,k=function(k){var h=j.call(arguments,1),f=this;if(h.length)return function(){var t=arguments;return f.apply(k,t.length?h.concat(j.call(t)):h)};h=null;return function(){return f.apply(k,arguments)}};Function.prototype.bind=k;k.$extjs=!0}();Ext=Ext||window.Ext||{};
Ext.Microloader=Ext.Microloader||function(){var j=Ext.Boot,k=[],r=!1,h={detectPlatformTags:function(){Ext.beforeLoad&&Ext.beforeLoad(Ext.platformTags)},initPlatformTags:function(){h.detectPlatformTags()},init:function(){h.initPlatformTags();var f=Ext._beforereadyhandler;Ext._beforereadyhandler=function(){Ext.Boot!==j&&(Ext.apply(Ext.Boot,j),Ext.Boot=j);f&&f()}},run:function(){h.init();var f=Ext.manifest;if("string"===typeof f){var k=f.indexOf(".json")===f.length-5?f:f+".json";j.fetch(k,function(j){f=
Ext.manifest=JSON.parse(j.content);h.load(f)})}else h.load(f)},load:function(f){var k=f.loadOrder,v=k?j.createLoadOrderMap(k):null,u=[],q=f.js||[],s=f.css||[],n,p=function(){r=!0;h.notify()};k&&(f.loadOrderMap=v);for(var d=s.concat(q),s=d.length,q=0;q<s;q++)f=d[q],n=!0,f.platform&&!j.filterPlatform(f.platform)&&(n=!1),n&&u.push(f.path);j.load({url:u,loadOrder:k,loadOrderMap:v,sequential:!0,success:p,failure:p})},onMicroloaderReady:function(f){r?f():k.push(f)},notify:function(){for(var f;f=k.shift();)f()}};
return h}();Ext.manifest=Ext.manifest||"bootstrap";Ext.Microloader.run();</script>        
    <% } %>

</head>
<body>
    <form id="frmMain" runat="server">
        <div style="display: none">
            <asp:LinkButton ID="btnLogout" runat="server" OnClick="LogoutBtn_Click" CssClass="logoutLink">Logout</asp:LinkButton>
        </div>
        <div id="hiddenChartPool" runat="server" style="display: none;"></div>
        <input type="hidden" runat="server" id="loadAlert"/>
        <input type="hidden" runat="server" id="DisableGrippersInput" />
    </form>
    <div id="initialLoadMask" class="x-mask x-border-box x-mask-fixed">
        <div style="float: right; right: 50%; position: relative; margin-top: 25%; margin-bottom: 25%">
            <div id="initialLoadMaskSpinnerBox" class="x-mask-msg" style="float: right; right: -50%; position: relative;">
                <div class="x-mask-msg-inner">
                    <div class="x-mask-msg-text">
                        <%= Resources.LOADING %>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
