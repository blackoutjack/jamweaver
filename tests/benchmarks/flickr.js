// <head> block 1
var page_timing = {}; page_timing.modules = {}; page_timing.page_start = new Date().getTime();

// <head> block 2
var farm_timing = {}; farm_timing.page_start = new Date().getTime();

// <head> block 3
// Modified flickr_regex to allow loading locally.
page_timing.head_js_start = new Date().getTime();	
F = window.F || {};

    
  (function(F){var TIMEOUT=10000;var pollers={},pollerCount=0,cachedEls={},testDiv=document.createElement('div'),support={nativeTrim:typeof String.prototype.trim==='function',classList:'classList'in testDiv};F.util={clone:function(o){if(o===null||typeof o!=='object'){return o;} var c=new o.constructor();for(var k in o){c[k]=F.util.clone(o[k]);} return c;},trim:function(str){if(support.nativeTrim){return str.trim();} else{return str.replace(/^\s+|\s+$/g,'');}},getElementById:function(id){if(!cachedEls[id]){cachedEls[id]=document.getElementById(id);} return cachedEls[id];},hasClass:function(el,className){if(!el){return false;} if(support.classList){return el.classList.contains(className);} else{var re=new RegExp('(?:^|\\s+)'+className+'(?:\\s+|$)');return re.test(el.className);}},addClass:function(el,className){if(!el){return;} if(support.classList){el.classList.add(className);} else if(!F.util.hasClass(el,className)){el.className=F.util.trim([el.className,className].join(' '));}},removeClass:function(el,className){if(support.classList){el.classList.remove(className);} else if(className&&F.util.hasClass(el,className)){el.className=F.util.trim(el.className.replace(new RegExp('(?:^|\\s+)'+className+'(?:\\s+|$)'),' '));if(F.util.hasClass(el,className)){F.util.removeClass(el,className);}}},whenElementExists:function(id,callback,interval){var iterations=0,pollerId=id+pollerCount++;interval=interval||10;var checkElementAndCallback=function(){var el=(id==='body')?document.body:F.util.getElementById(id);if(el){clearInterval(pollers[pollerId]);callback(el);return true;} else if(++iterations*interval>=TIMEOUT){clearInterval(pollers[pollerId]);return false;}};if(!checkElementAndCallback()){pollers[pollerId]=setInterval(checkElementAndCallback,interval);}},addListener:function(el,type,fn,capture){if(el.addEventListener){el.addEventListener(type,fn,capture);} else if(el.attachEvent){el.attachEvent('on'+type,fn);}},setCookie:function(name,value,days,path){var date,expires='',path=path||'/';if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires='; expires='+date.toGMTString();} document.cookie=name+'='+value+expires+'; path='+path;},getCookie:function(name){var i,cookies=' '+document.cookie+';';name=' '+name+'=';if((i=cookies.indexOf(name))>=0){i+=name.length;cookies=cookies.substring(i,cookies.indexOf(';',i));return cookies;}},removeCookie:function(name){return F.util.setCookie(name,'',0);}};testDiv=null;}(F));
      
(function(wipe_msg, root_url, bust_image_search, is_debug) {

var w=window,d=document,top_loc=top.location,self_loc=self.location,referrer=d.referrer,flickr_regex=/^.*$/i,/*/^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*flickr\.(?:(?:com)|(?:net))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,*/self_is_offline=(self_loc.protocol&&self_loc.protocol.indexOf('http')<0),self_is_flickr=flickr_regex.test(self_loc),self_url=self_is_flickr?self_loc.href:root_url+'/',photo_page_re_result=self_is_flickr&&/\/photos\/[^\/]+\/(\d+)/i.exec(self_loc.pathname),photo_id=photo_page_re_result&&parseInt(photo_page_re_result[1],10),frame_whitelist_regex=/^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*(?:(?:flickr\.(?:(?:com)|(?:net)))|(?:yahoo\.(?:(?:com)|(?:net)|(?:(?:com?\.)?[A-Za-z]{2})))|(?:creativecommons\.org)|(?:eyewonderlabs\.com)|(?:stumbleupon\.com)|(?:screenqueri\.es)|(?:su\.pr)|(?:bing\.com)|(?:google\.(?:(?:com)|(?:(?:com?\.)?[A-Za-z]{2}))))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,self_whitelist_regex=/^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*(?:(?:flickr\.(?:(?:com)|(?:net)))|(?:yahoo\.(?:(?:com)|(?:net)|(?:(?:com?\.)?[A-Za-z]{2})))|(?:translate\.google\.com)|(?:translate\.googleusercontent\.com)|(?:web\.archive\.org))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,image_search_regex=/^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*(?:(?:(?:google)|(?:bing))\.(?:(?:com)|(?:(?:com?\.)?[A-Za-z]{2})))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,referrer_is_flickr=flickr_regex.test(referrer),referrer_is_whitelisted=frame_whitelist_regex.test(referrer),referrer_is_image_search=image_search_regex.test(referrer),faq_url=root_url+'/frame_redir.gne?source='+encodeURIComponent(referrer)+'&dest='+encodeURIComponent(root_url+'/help/blogging/#1392237'),redir_url=root_url+'/frame_redir.gne?source='+encodeURIComponent(referrer)+'&dest='+encodeURIComponent(self_url),should_bust,should_wipe,base;function redirect(){w.onerror=function(){return true;};if(typeof top_loc.replace==='function'){top_loc.replace(redir_url);}else{top_loc.href=redir_url;}} function wipe(){var logo_w,font_size,win_width,html,msg;w.onerror=function(){return true;};logo_w=162;font_size='12px';setInterval(function(){if(d&&d.body){if(d.body.lastChild&&d.body.lastChild.className&&d.body.lastChild.className==='wipe-msg'){}else{msg=wipe_msg.replace('{url}',redir_url).replace('{faq}',faq_url);if(typeof w.innerWidth==='number'){win_width=w.innerWidth;}else if(d.body.clientWidth){win_width=d.body.clientWidth;} if(win_width&&win_width<162){logo_w=win_width;font_size='10px';} html='<div class="wipe-msg" style="font-size:'+font_size+';text-align:left;"><div style="margin-bottom:3px;"><img alt="Flickr" width="'+logo_w+'" src="https://s.yimg.com/pw/images/logo_home.png"></div><div style="padding-left:5px;line-height:1.2em;">'+msg+'</div></div>';d.body.style.margin='0';d.body.innerHTML=html;}}},200);} function get_frame_depth(){var win=self,frame_depth=0;while(win!==win.parent){frame_depth+=1;win=win.parent;} return frame_depth;} function debug(){if(is_debug){console.log(arguments);}} if(self_is_flickr&&self_loc===top_loc){}else if(self_is_offline){}else if(!self_is_flickr&&!self_whitelist_regex.test(self_loc)){should_wipe=true;}else if(bust_image_search&&photo_id&&referrer_is_image_search){should_bust=true;}else if(!referrer_is_whitelisted&&get_frame_depth()>0){should_wipe=true;}else if(!referrer_is_flickr&&get_frame_depth()>1){should_wipe=true;} if(is_debug){debug({self_is_flickr:self_is_flickr,top_loc:top_loc,self_loc:self_loc,referrer:referrer,self_is_offline:self_is_offline,self_is_flickr:self_is_flickr,self_url:self_url,photo_page_re_result:photo_page_re_result,photo_id:photo_id,referrer_is_flickr:referrer_is_flickr,referrer_is_whitelisted:referrer_is_whitelisted,referrer_is_image_search:referrer_is_image_search,self_is_whitelisted:self_whitelist_regex.test(self_loc),frame_depth:get_frame_depth(),faq_url:faq_url,redir_url:redir_url,should_bust:should_bust,should_wipe:should_wipe,base:base});}else{if(should_bust){setTimeout(function(){w.onbeforeunload=w.onunload=null;redirect();},1000);setTimeout(wipe,2000);redirect();}else if(should_wipe){wipe();}else if(referrer_is_whitelisted&&!referrer_is_flickr){base=document.createElement('base');base.target='_top';document.getElementsByTagName('head')[0].appendChild(base);}}

}('We\'re sorry, Flickr <a href="{faq}" target="_top">doesn\'t allow embedding within frames</a>.<br><br>If you\'d like to view this content, <a href="{url}" target="_top">please click here</a>.', 'https://www.flickr.com', true, false));


  (function(F){var el,w,d,n,ua,ae,is_away_from_tab,de,disabled=false,assigned_events=false;w=window;d=w.document;n=w.navigator;ua=n&&n.userAgent;var supportsActiveElt=false;if('activeElement'in document){supportsActiveElt=true;} function doF(e,me){if(is_away_from_tab&&e.target===w){is_away_from_tab=false;}else{el=e.target||me;}} function doB(e){if(el!==w&&e.target===w){is_away_from_tab=true;}else{el=undefined;}} function get(){var nt,in_doc;if(supportsActiveElt){el=document.activeElement;}else if(el&&(nt=el.nodeType)){if(d.contains){if((ua&&ua.match(/Opera[\s\/]([^\s]*)/))||nt===1){in_doc=d.contains(el);}else{while(el){if(d===el){in_doc=true;} el=el.parentNode;}}}else if(d.compareDocumentPosition){if(d===el||!!(d.compareDocumentPosition(el)&16)){in_doc=true;}}else{var myEl=el;while(myEl){if(d===myEl){in_doc=true;} myEl=myEl.parentNode;}}} return in_doc?el:undefined;} function isInput(){var n=get(),nn;if(!n){return false;} nn=n.nodeName.toLowerCase();return(nn==='input'||nn==='textarea');} function instrumentInputs(){if(!assigned_events){var i,me,inputs=document.getElementsByTagName('input'),tas=document.getElementsByTagName('textarea'),nInputs=inputs.length,nTextAreas=tas.length;if(nInputs||nTextAreas){for(i=0;i<nTextAreas;i++){me=tas[i];tas[i].attachEvent('onfocusin',function(e){if(!disabled){doF(e,me);}});} for(i=0;i<nInputs;i++){me=inputs[i];inputs[i].attachEvent('onfocusin',function(e){if(!disabled){doF(e,me);}});} assigned_events=true;}}} function destroy(){disabled=true;if(de=w.removeEventListener){de('focus',doF,true);de('blur',doB,true);}else if(de=d.removeEvent){de('blur',doB);}} function dom_onready(onready_handler){if(typeof onready_handler==='undefined'){return false;} if(document.readyState==='complete'){onready_handler();}else{if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener('DOMContentLoaded',DOMContentLoaded,false);onready_handler();};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==='complete'){document.detachEvent('onreadystatechange',DOMContentLoaded);onready_handler();}};} if(document.addEventListener){document.addEventListener('DOMContentLoaded',onready_handler,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',onready_handler);}}} if(ae=w.addEventListener){ae('focus',doF,true);ae('blur',doB,true);}else if(ae=d.attachEvent){dom_onready(instrumentInputs);ae('onfocusout',doB);} F.focus_tracker={get:get,isInput:isInput,destroy:destroy};}(F));	
  (function(){var mod='imageChecker',imgs={},i=0;function stamp(node){return node.id||(node.id=mod+'-'+new Date().getTime()+i++);} F[mod]={load:function(node){imgs[stamp(node)]=true;},error:function(node){imgs[stamp(node)]=false;},check:function(node){return imgs[stamp(node)];}};}());

// <head> block 4
page_timing.seed_fetch_start = new Date().getTime();

// https://s.yimg.com/pw/combo/1/3.11.0?j/yui/3.11.0/yui/yui-.E.A.v2cK5r&amp;j/yui/3.11.0/.FN/.FN-.E.A.v2cK5r

/*
YUI 3.11.0 (build d549e5c)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

typeof YUI!="undefined"&&(YUI._YUI=YUI);var YUI=function(){var e=0,t=this,n=arguments,r=n.length,i=function(e,t){return e&&e.hasOwnProperty&&e instanceof t},s=typeof YUI_config!="undefined"&&YUI_config;i(t,YUI)?(t._init(),YUI.GlobalConfig&&t.applyConfig(YUI.GlobalConfig),s&&t.applyConfig(s),r||t._setup()):t=new YUI;if(r){for(;e<r;e++)t.applyConfig(n[e]);t._setup()}return t.instanceOf=i,t};(function(){var e,t,n="3.11.0",r=".",i="http://yui.yahooapis.com/",s="yui3-js-enabled",o="yui3-css-stamp",u=function(){},a=Array.prototype.slice,f={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},l=typeof window!="undefined",c=l?window:null,h=l?c.document:null,p=h&&h.documentElement,d=p&&p.className,v={},m=(new Date).getTime(),g=function(e,t,n,r){e&&e.addEventListener?e.addEventListener(t,n,r):e&&e.attachEvent&&e.attachEvent("on"+t,n)},y=function(e,t,n,r){if(e&&e.removeEventListener)try{e.removeEventListener(t,n,r)}catch(i){}else e&&e.detachEvent&&e.detachEvent("on"+t,n)},b=function(){YUI.Env.windowLoaded=!0,YUI.Env.DOMReady=!0,l&&y(window,"load",b)},w=function(e,t){var n=e.Env._loader,r=["loader-base"],i=YUI.Env,s=i.mods;return n?(n.ignoreRegistered=!1,n.onEnd=null,n.data=null,n.required=[],n.loadType=null):(n=new e.Loader(e.config),e.Env._loader=n),s&&s.loader&&(r=[].concat(r,YUI.Env.loaderExtras)),YUI.Env.core=e.Array.dedupe([].concat(YUI.Env.core,r)),n},E=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},S={success:!0};p&&d.indexOf(s)==-1&&(d&&(d+=" "),d+=s,p.className=d),n.indexOf("@")>-1&&(n="3.5.0"),e={applyConfig:function(e){e=e||u;var t,n,r=this.config,i=r.modules,s=r.groups,o=r.aliases,a=this.Env._loader;for(n in e)e.hasOwnProperty(n)&&(t=e[n],i&&n=="modules"?E(i,t):o&&n=="aliases"?E(o,t):s&&n=="groups"?E(s,t):n=="win"?(r[n]=t&&t.contentWindow||t,r.doc=r[n]?r[n].document:null):n!="_yuid"&&(r[n]=t));a&&a._config(e)},_config:function(e){this.applyConfig(e)},_init:function(){var e,t,r=this,s=YUI.Env,u=r.Env,a;r.version=n;if(!u){r.Env={core:["get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:i,cdn:i+n+"/build/",_idx:0,_used:{},_attached:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(simpleyui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(e,t){var n=e.match(t),r,i;return n&&(r=RegExp.leftContext||e.slice(0,e.indexOf(n[0])),i=n[3],n[1]&&(r+="?"+n[1]),r={filter:i,path:r}),r},getBase:s&&s.getBase||function(t){var n=h&&h.getElementsByTagName("script")||[],i=u.cdn,s,o,a,f;for(o=0,a=n.length;o<a;++o){f=n[o].src;if(f){s=r.Env.parseBasePath(f,t);if(s){e=s.filter,i=s.path;break}}}return i}},u=r.Env,u._loaded[n]={};if(s&&r!==YUI)u._yidx=++s._yidx,u._guidp=("yui_"+n+"_"+u._yidx+"_"+m).replace(/[^a-z0-9_]+/g,"_");else if(YUI._YUI){s=YUI._YUI.Env,u._yidx+=s._yidx,u._uidx+=s._uidx;for(a in s)a in u||(u[a]=s[a]);delete YUI._YUI}r.id=r.stamp(r),v[r.id]=r}r.constructor=YUI,r.config=r.config||{bootstrap:!0,cacheUse:!0,debug:!0,doc:h,fetchCSS:!0,throwFail:!0,useBrowserConsole:!0,useNativeES5:!0,win:c,global:Function("return this")()},h&&!h.getElementById(o)?(t=h.createElement("div"),t.innerHTML='<div id="'+o+'" style="position: absolute !important; visibility: hidden !important"></div>',YUI.Env.cssStampEl=t.firstChild,h.body?h.body.appendChild(YUI.Env.cssStampEl):p.insertBefore(YUI.Env.cssStampEl,p.firstChild)):h&&h.getElementById(o)&&!YUI.Env.cssStampEl&&(YUI.Env.cssStampEl=h.getElementById(o)),r.config.lang=r.config.lang||"en-US",r.config.base=YUI.config.base||r.Env.getBase(r.Env._BASE_RE);if(!e||!"mindebug".indexOf(e))e="min";e=e?"-"+e:e,r.config.loaderPath=YUI.config.loaderPath||"loader/loader"+e+".js"},_setup:function(){var e,t=this,n=[],r=YUI.Env.mods,i=t.config.core||[].concat(YUI.Env.core);for(e=0;e<i.length;e++)r[i[e]]&&n.push(i[e]);t._attach(["yui-base"]),t._attach(n),t.Loader&&w(t)},applyTo:function(e,t,n){if(t in f){var r=v[e],i,s,o;if(r){i=t.split("."),s=r;for(o=0;o<i.length;o+=1)s=s[i[o]],s||this.log("applyTo not found: "+t,"warn","yui");return s&&s.apply(r,n)}return null}return this.log(t+": applyTo not allowed","warn","yui"),null},add:function(e,t,n,r){r=r||{};var i=YUI.Env,s={name:e,fn:t,version:n,details:r},o={},u,a,f,l=i.versions;i.mods[e]=s,l[n]=l[n]||{},l[n][e]=s;for(f in v)v.hasOwnProperty(f)&&(a=v[f],o[a.id]||(o[a.id]=!0,u=a.Env._loader,u&&(!u.moduleInfo[e]||u.moduleInfo[e].temp)&&u.addModule(r,e)));return this},_attach:function(e,t){var n,r,i,s,o,u,a,f=YUI.Env.mods,l=YUI.Env.aliases,c=this,h,p=YUI.Env._renderedMods,d=c.Env._loader,v=c.Env._attached,m=e.length,d,g,y,b=[];for(n=0;n<m;n++){r=e[n],i=f[r],b.push(r);if(d&&d.conditions[r])for(h in d.conditions[r])d.conditions[r].hasOwnProperty(h)&&(g=d.conditions[r][h],y=g&&(g.ua&&c.UA[g.ua]||g.test&&g.test(c)),y&&b.push(g.name))}e=b,m=e.length;for(n=0;n<m;n++)if(!v[e[n]]){r=e[n],i=f[r];if(l&&l[r]&&!i){c._attach(l[r]);continue}if(!i)d&&d.moduleInfo[r]&&(i=d.moduleInfo[r],t=!0),!t&&r&&r.indexOf("skin-")===-1&&r.indexOf("css")===-1&&(c.Env._missed.push(r),c.Env._missed=c.Array.dedupe(c.Env._missed),c.message("NOT loaded: "+r,"warn","yui"));else{v[r]=!0;for(h=0;h<c.Env._missed.length;h++)c.Env._missed[h]===r&&(c.message("Found: "+r+" (was reported as missing earlier)","warn","yui"),c.Env._missed.splice(h,1));if(d&&p&&p[r]&&p[r].temp){d.getRequires(p[r]),o=[];for(h in d.moduleInfo[r].expanded_map)d.moduleInfo[r].expanded_map.hasOwnProperty(h)&&o.push(h);c._attach(o)}s=i.details,o=s.requires,u=s.use,a=s.after,s.lang&&(o=o||[],o.unshift("intl"));if(o)for(h=0;h<o.length;h++)if(!v[o[h]]){if(!c._attach(o))return!1;break}if(a)for(h=0;h<a.length;h++)if(!v[a[h]]){if(!c._attach(a,!0))return!1;break}if(i.fn)if(c.config.throwFail)i.fn(c,r);else try{i.fn(c,r)}catch(w){return c.error("Attach error: "+r,w,r),!1}if(u)for(h=0;h<u.length;h++)if(!v[u[h]]){if(!c._attach(u))return!1;break}}}return!0},_delayCallback:function(e,t){var n=this,r=["event-base"];return t=n.Lang.isObject(
t)?t:{event:t},t.event==="load"&&r.push("event-synthetic"),function(){var i=arguments;n._use(r,function(){n.on(t.event,function(){i[1].delayUntil=t.event,e.apply(n,i)},t.args)})}},use:function(){var e=a.call(arguments,0),t=e[e.length-1],n=this,r=0,i,s=n.Env,o=!0;n.Lang.isFunction(t)?(e.pop(),n.config.delayUntil&&(t=n._delayCallback(t,n.config.delayUntil))):t=null,n.Lang.isArray(e[0])&&(e=e[0]);if(n.config.cacheUse){while(i=e[r++])if(!s._attached[i]){o=!1;break}if(o)return e.length,n._notify(t,S,e),n}return n._loading?(n._useQueue=n._useQueue||new n.Queue,n._useQueue.add([e,t])):n._use(e,function(n,r){n._notify(t,r,e)}),n},_notify:function(e,t,n){if(!t.success&&this.config.loadErrorFn)this.config.loadErrorFn.call(this,this,e,t,n);else if(e){this.Env._missed&&this.Env._missed.length&&(t.msg="Missing modules: "+this.Env._missed.join(),t.success=!1);if(this.config.throwFail)e(this,t);else try{e(this,t)}catch(r){this.error("use callback error",r,n)}}},_use:function(e,t){this.Array||this._attach(["yui-base"]);var r,i,s,o=this,u=YUI.Env,a=u.mods,f=o.Env,l=f._used,c=u.aliases,h=u._loaderQueue,p=e[0],d=o.Array,v=o.config,m=v.bootstrap,g=[],y,b=[],E=!0,S=v.fetchCSS,x=function(e,t){var r=0,i=[],s,o,f,h,p;if(!e.length)return;if(c){o=e.length;for(r=0;r<o;r++)c[e[r]]&&!a[e[r]]?i=[].concat(i,c[e[r]]):i.push(e[r]);e=i}o=e.length;for(r=0;r<o;r++){s=e[r],t||b.push(s);if(l[s])continue;f=a[s],h=null,p=null,f?(l[s]=!0,h=f.details.requires,p=f.details.use):u._loaded[n][s]?l[s]=!0:g.push(s),h&&h.length&&x(h),p&&p.length&&x(p,1)}},T=function(n){var r=n||{success:!0,msg:"not dynamic"},i,s,u=!0,a=r.data;o._loading=!1,a&&(s=g,g=[],b=[],x(a),i=g.length,i&&[].concat(g).sort().join()==s.sort().join()&&(i=!1)),i&&a?(o._loading=!0,o._use(g,function(){o._attach(a)&&o._notify(t,r,a)})):(a&&(u=o._attach(a)),u&&o._notify(t,r,e)),o._useQueue&&o._useQueue.size()&&!o._loading&&o._use.apply(o,o._useQueue.next())};if(p==="*"){e=[];for(y in a)a.hasOwnProperty(y)&&e.push(y);return E=o._attach(e),E&&T(),o}return(a.loader||a["loader-base"])&&!o.Loader&&o._attach(["loader"+(a.loader?"":"-base")]),m&&o.Loader&&e.length&&(i=w(o),i.require(e),i.ignoreRegistered=!0,i._boot=!0,i.calculate(null,S?null:"js"),e=i.sorted,i._boot=!1),x(e),r=g.length,r&&(g=d.dedupe(g),r=g.length),m&&r&&o.Loader?(o._loading=!0,i=w(o),i.onEnd=T,i.context=o,i.data=e,i.ignoreRegistered=!1,i.require(g),i.insert(null,S?null:"js")):m&&r&&o.Get&&!f.bootstrapped?(o._loading=!0,s=function(){o._loading=!1,h.running=!1,f.bootstrapped=!0,u._bootstrapping=!1,o._attach(["loader"])&&o._use(e,t)},u._bootstrapping?h.add(s):(u._bootstrapping=!0,o.Get.script(v.base+v.loaderPath,{onEnd:s}))):(E=o._attach(e),E&&T()),o},namespace:function(){var e=arguments,t,n=0,i,s,o;for(;n<e.length;n++){t=this,o=e[n];if(o.indexOf(r)>-1){s=o.split(r);for(i=s[0]=="YAHOO"?1:0;i<s.length;i++)t[s[i]]=t[s[i]]||{},t=t[s[i]]}else t[o]=t[o]||{},t=t[o]}return t},log:u,message:u,dump:function(e){return""+e},error:function(e,t,n){var r=this,i;r.config.errorFn&&(i=r.config.errorFn.apply(r,arguments));if(!i)throw t||new Error(e);return r.message(e,"error",""+n),r},guid:function(e){var t=this.Env._guidp+"_"+ ++this.Env._uidx;return e?e+t:t},stamp:function(e,t){var n;if(!e)return e;e.uniqueID&&e.nodeType&&e.nodeType!==9?n=e.uniqueID:n=typeof e=="string"?e:e._yuid;if(!n){n=this.guid();if(!t)try{e._yuid=n}catch(r){n=null}}return n},destroy:function(){var e=this;e.Event&&e.Event._unload(),delete v[e.id],delete e.Env,delete e.config}},YUI.prototype=e;for(t in e)e.hasOwnProperty(t)&&(YUI[t]=e[t]);YUI.applyConfig=function(e){if(!e)return;YUI.GlobalConfig&&this.prototype.applyConfig.call(this,YUI.GlobalConfig),this.prototype.applyConfig.call(this,e),YUI.GlobalConfig=this.config},YUI._init(),l?g(window,"load",b):b(),YUI.Env.add=g,YUI.Env.remove=y,typeof exports=="object"&&(exports.YUI=YUI,YUI.setLoadHook=function(e){YUI._getLoadHook=e},YUI._getLoadHook=null)})(),YUI.add("yui-base",function(e,t){function m(e,t,n){var r,i;t||(t=0);if(n||m.test(e))try{return d.slice.call(e,t)}catch(s){i=[];for(r=e.length;t<r;++t)i.push(e[t]);return i}return[e]}function g(){this._init(),this.add.apply(this,arguments)}var n=e.Lang||(e.Lang={}),r=String.prototype,i=Object.prototype.toString,s={"undefined":"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},o=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,u="	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",a="[	-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+",f=new RegExp("^"+a),l=new RegExp(a+"$"),c=new RegExp(f.source+"|"+l.source,"g"),h=/\{\s*\[(?:native code|function)\]\s*\}/i;n._isNative=function(t){return!!(e.config.useNativeES5&&t&&h.test(t))},n.isArray=n._isNative(Array.isArray)?Array.isArray:function(e){return n.type(e)==="array"},n.isBoolean=function(e){return typeof e=="boolean"},n.isDate=function(e){return n.type(e)==="date"&&e.toString()!=="Invalid Date"&&!isNaN(e)},n.isFunction=function(e){return n.type(e)==="function"},n.isNull=function(e){return e===null},n.isNumber=function(e){return typeof e=="number"&&isFinite(e)},n.isObject=function(e,t){var r=typeof e;return e&&(r==="object"||!t&&(r==="function"||n.isFunction(e)))||!1},n.isString=function(e){return typeof e=="string"},n.isUndefined=function(e){return typeof e=="undefined"},n.isValue=function(e){var t=n.type(e);switch(t){case"number":return isFinite(e);case"null":case"undefined":return!1;default:return!!t}},n.now=Date.now||function(){return(new Date).getTime()},n.sub=function(e,t){return e.replace?e.replace(o,function(e,r){return n.isUndefined(t[r])?e:t[r]}):e},n.trim=n._isNative(r.trim)&&!u.trim()?function(e){return e&&e.trim?e.trim():e}:function(e){try{return e.replace(c,"")}catch(t){return e}},n.trimLeft=n._isNative(r.trimLeft)&&!u.trimLeft()?function(e){return e.trimLeft()}:function(
e){return e.replace(f,"")},n.trimRight=n._isNative(r.trimRight)&&!u.trimRight()?function(e){return e.trimRight()}:function(e){return e.replace(l,"")},n.type=function(e){return s[typeof e]||s[i.call(e)]||(e?"object":"null")};var p=e.Lang,d=Array.prototype,v=Object.prototype.hasOwnProperty;e.Array=m,m.dedupe=p._isNative(Object.create)?function(e){var t=Object.create(null),n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],t[i]||(t[i]=1,n.push(i));return n}:function(e){var t={},n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],v.call(t,i)||(t[i]=1,n.push(i));return n},m.each=m.forEach=p._isNative(d.forEach)?function(t,n,r){return d.forEach.call(t||[],n,r||e),e}:function(t,n,r){for(var i=0,s=t&&t.length||0;i<s;++i)i in t&&n.call(r||e,t[i],i,t);return e},m.hash=function(e,t){var n={},r=t&&t.length||0,i,s;for(i=0,s=e.length;i<s;++i)i in e&&(n[e[i]]=r>i&&i in t?t[i]:!0);return n},m.indexOf=p._isNative(d.indexOf)?function(e,t,n){return d.indexOf.call(e,t,n)}:function(e,t,n){var r=e.length;n=+n||0,n=(n>0||-1)*Math.floor(Math.abs(n)),n<0&&(n+=r,n<0&&(n=0));for(;n<r;++n)if(n in e&&e[n]===t)return n;return-1},m.numericSort=function(e,t){return e-t},m.some=p._isNative(d.some)?function(e,t,n){return d.some.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&t.call(n,e[r],r,e))return!0;return!1},m.test=function(e){var t=0;if(p.isArray(e))t=1;else if(p.isObject(e))try{"length"in e&&!e.tagName&&(!e.scrollTo||!e.document)&&!e.apply&&(t=2)}catch(n){}return t},g.prototype={_init:function(){this._q=[]},next:function(){return this._q.shift()},last:function(){return this._q.pop()},add:function(){return this._q.push.apply(this._q,arguments),this},size:function(){return this._q.length}},e.Queue=g,YUI.Env._loaderQueue=YUI.Env._loaderQueue||new g;var y="__",v=Object.prototype.hasOwnProperty,b=e.Lang.isObject;e.cached=function(e,t,n){return t||(t={}),function(r){var i=arguments.length>1?Array.prototype.join.call(arguments,y):String(r);if(!(i in t)||n&&t[i]==n)t[i]=e.apply(e,arguments);return t[i]}},e.getLocation=function(){var t=e.config.win;return t&&t.location},e.merge=function(){var e=0,t=arguments.length,n={},r,i;for(;e<t;++e){i=arguments[e];for(r in i)v.call(i,r)&&(n[r]=i[r])}return n},e.mix=function(t,n,r,i,s,o){var u,a,f,l,c,h,p;if(!t||!n)return t||e;if(s){s===2&&e.mix(t.prototype,n.prototype,r,i,0,o),f=s===1||s===3?n.prototype:n,p=s===1||s===4?t.prototype:t;if(!f||!p)return t}else f=n,p=t;u=r&&!o;if(i)for(l=0,h=i.length;l<h;++l){c=i[l];if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}else{for(c in f){if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}e.Object._hasEnumBug&&e.mix(p,f,r,e.Object._forceEnum,s,o)}return t};var p=e.Lang,v=Object.prototype.hasOwnProperty,w,E=e.Object=p._isNative(Object.create)?function(e){return Object.create(e)}:function(){function e(){}return function(t){return e.prototype=t,new e}}(),S=E._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],x=E._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),T=E._hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),N=E.owns=function(e,t){return!!e&&v.call(e,t)};E.hasKey=N,E.keys=p._isNative(Object.keys)&&!T?Object.keys:function(e){if(!p.isObject(e))throw new TypeError("Object.keys called on a non-object");var t=[],n,r,i;if(T&&typeof e=="function")for(r in e)N(e,r)&&r!=="prototype"&&t.push(r);else for(r in e)N(e,r)&&t.push(r);if(x)for(n=0,i=S.length;n<i;++n)r=S[n],N(e,r)&&t.push(r);return t},E.values=function(e){var t=E.keys(e),n=0,r=t.length,i=[];for(;n<r;++n)i.push(e[t[n]]);return i},E.size=function(e){try{return E.keys(e).length}catch(t){return 0}},E.hasValue=function(t,n){return e.Array.indexOf(E.values(t),n)>-1},E.each=function(t,n,r,i){var s;for(s in t)(i||N(t,s))&&n.call(r||e,t[s],s,t);return e},E.some=function(t,n,r,i){var s;for(s in t)if(i||N(t,s))if(n.call(r||e,t[s],s,t))return!0;return!1},E.getValue=function(t,n){if(!p.isObject(t))return w;var r,i=e.Array(n),s=i.length;for(r=0;t!==w&&r<s;r++)t=t[i[r]];return t},E.setValue=function(t,n,r){var i,s=e.Array(n),o=s.length-1,u=t;if(o>=0){for(i=0;u!==w&&i<o;i++)u=u[s[i]];if(u===w)return w;u[s[i]]=r}return t},E.isEmpty=function(e){return!E.keys(Object(e)).length},YUI.Env.parseUA=function(t){var n=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===1?"":"."}))},r=e.config.win,i=r&&r.navigator,s={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,accel:!1,webos:0,caja:i&&i.cajaVersion,secure:!1,os:null,nodejs:0,winjs:typeof Windows!="undefined"&&!!Windows.System,touchEnabled:!1},o=t||i&&i.userAgent,u=r&&r.location,a=u&&u.href,f;return s.userAgent=o,s.secure=a&&a.toLowerCase().indexOf("https")===0,o&&(/windows|win32/i.test(o)?s.os="windows":/macintosh|mac_powerpc/i.test(o)?s.os="macintosh":/android/i.test(o)?s.os="android":/symbos/i.test(o)?s.os="symbos":/linux/i.test(o)?s.os="linux":/rhino/i.test(o)&&(s.os="rhino"),/KHTML/.test(o)&&(s.webkit=1),/IEMobile|XBLWP7/.test(o)&&(s.mobile="windows"),/Fennec/.test(o)&&(s.mobile="gecko"),f=o.match(/AppleWebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1]),s.safari=s.webkit,/PhantomJS/.test(o)&&(f=o.match(/PhantomJS\/([^\s]*)/),f&&f[1]&&(s.phantomjs=n(f[1]))),/ Mobile\//.test(o)||/iPad|iPod|iPhone/.test(o)?(s.mobile="Apple",f=o.match(/OS ([^\s]*)/),f&&f[1]&&(f=n(f[1].replace("_","."))),s.ios=f,s.os="ios",s.ipad=s.ipod=s.iphone=0,f=o.match(/iPad|iPod|iPhone/),f&&f[0]&&(s[f[0].toLowerCase()]=s.ios)):(f=o.match(/NokiaN[^\/]*|webOS\/\d\.\d/),f&&(s.mobile=f[0]),/webOS/.test(o)&&(s.mobile="WebOS",f=o.match(/webOS\/([^\s]*);/),f&&f[1]&&(s.webos=n(f[1]))),/ Android/.test(o)&&(/Mobile/.test(o)&&(s.mobile="Android"),f=o.match(/Android ([^\s]*);/),f&&f[1]&&(s.android=n(f[1]))),/Silk/.test(o)&&(f=o.match(/Silk\/([^\s]*)\)/),f&&f[1]&&(s.silk=n(f[1])),s.android||
(s.android=2.34,s.os="Android"),/Accelerated=true/.test(o)&&(s.accel=!0))),f=o.match(/OPR\/(\d+\.\d+)/),f&&f[1]?s.opera=n(f[1]):(f=o.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),f&&f[1]&&f[2]?(s.chrome=n(f[2]),s.safari=0,f[1]==="CrMo"&&(s.mobile="chrome")):(f=o.match(/AdobeAIR\/([^\s]*)/),f&&(s.air=f[0])))),s.webkit||(/Opera/.test(o)?(f=o.match(/Opera[\s\/]([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),f=o.match(/Version\/([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),/Opera Mobi/.test(o)&&(s.mobile="opera",f=o.replace("Opera Mobi","").match(/Opera ([^\s]*)/),f&&f[1]&&(s.opera=n(f[1]))),f=o.match(/Opera Mini[^;]*/),f&&(s.mobile=f[0])):(f=o.match(/MSIE ([^;]*)|Trident.*; rv ([0-9.]+)/),f&&(f[1]||f[2])?s.ie=n(f[1]||f[2]):(f=o.match(/Gecko\/([^\s]*)/),f&&(s.gecko=1,f=o.match(/rv:([^\s\)]*)/),f&&f[1]&&(s.gecko=n(f[1]),/Mobile|Tablet/.test(o)&&(s.mobile="ffos"))))))),r&&i&&!(s.chrome&&s.chrome<6)&&(s.touchEnabled="ontouchstart"in r||"msMaxTouchPoints"in i&&i.msMaxTouchPoints>0),t||(typeof process=="object"&&process.versions&&process.versions.node&&(s.os=process.platform,s.nodejs=n(process.versions.node)),YUI.Env.UA=s),s},e.UA=YUI.Env.UA||YUI.Env.parseUA(),e.UA.compareVersions=function(e,t){var n,r,i,s,o,u;if(e===t)return 0;r=(e+"").split("."),s=(t+"").split(".");for(o=0,u=Math.max(r.length,s.length);o<u;++o){n=parseInt(r[o],10),i=parseInt(s[o],10),isNaN(n)&&(n=0),isNaN(i)&&(i=0);if(n<i)return-1;if(n>i)return 1}return 0},YUI.Env.aliases={anim:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"anim-shape-transform":["anim-shape"],app:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","router","view","view-node-map"],attribute:["attribute-base","attribute-complex"],"attribute-events":["attribute-observable"],autocomplete:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],axes:["axis-numeric","axis-category","axis-time","axis-stacked"],"axes-base":["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"],base:["base-base","base-pluginhost","base-build"],cache:["cache-base","cache-offline","cache-plugin"],charts:["charts-base"],collection:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],color:["color-base","color-hsl","color-harmony"],controller:["router"],dataschema:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],datasource:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],datatable:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],datatype:["datatype-date","datatype-number","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format","datatype-date-math"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],dd:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],dom:["dom-base","dom-screen","dom-style","selector-native","selector"],editor:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],event:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],handlebars:["handlebars-compiler"],highlight:["highlight-base","highlight-accentfold"],history:["history-base","history-hash","history-hash-ie","history-html5"],io:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],json:["json-parse","json-stringify"],loader:["loader-base","loader-rollup","loader-yui3"],node:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],pluginhost:["pluginhost-base","pluginhost-config"],querystring:["querystring-parse","querystring-stringify"],recordset:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],resize:["resize-base","resize-proxy","resize-constrain"],slider:["slider-base","slider-value-range","clickable-rail","range-slider"],template:["template-base","template-micro"],text:["text-accentfold","text-wordbreak"],widget:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]}},"3.11.0",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]}),YUI.add("get",function(e,t){var n=e.Lang,r,i,s;e.Get=i={cssOptions:{attributes:{rel:"stylesheet"},doc:e.config.linkDoc||e.config.doc,pollInterval:50},jsOptions:{autopurge:!0,doc:e.config.scriptDoc||e.config.doc},options:{attributes:{charset:"utf-8"},purgethreshold:20},REGEX_CSS:/\.css(?:[?;].*)?$/i,REGEX_JS:/\.js(?:[?;].*)?$/i,_insertCache:{},_pending:null,_purgeNodes:[],_queue:[],abort:function(e){var t,n,r,i,s;if(!e.abort){n=e,s=this._pending,e=null;if(s&&s.transaction.id===n)e=s.transaction,this._pending=null;else for(t=0,i=this._queue.length;t<i;++t){r=this._queue[t].transaction;if(r.id===n){e=r,this._queue.splice(t,1);break}}}e&&e.abort()},css:function(e,t,n){return this._load("css",e,t,n)},js:function(e,t,n){return this._load("js",e,t,n)},load:function(e,t,n){return this._load(null,e,t,n)},_autoPurge:function(e){e&&this._purgeNodes.length>=e&&this._purge(this._purgeNodes)},_getEnv:function(){var t=e.config.doc,n=e.UA;return this._env={async:t&&t.createElement("script").async===!0||n.ie>=10,cssFail:n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0,cssLoad:(!n.gecko&&!n.webkit||n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0)&&!(n.chrome&&n.chrome<=18
),preservesScriptOrder:!!(n.gecko||n.opera||n.ie&&n.ie>=10)}},_getTransaction:function(t,r){var i=[],o,u,a,f;n.isArray(t)||(t=[t]),r=e.merge(this.options,r),r.attributes=e.merge(this.options.attributes,r.attributes);for(o=0,u=t.length;o<u;++o){f=t[o],a={attributes:{}};if(typeof f=="string")a.url=f;else{if(!f.url)continue;e.mix(a,f,!1,null,0,!0),f=f.url}e.mix(a,r,!1,null,0,!0),a.type||(this.REGEX_CSS.test(f)?a.type="css":(!this.REGEX_JS.test(f),a.type="js")),e.mix(a,a.type==="js"?this.jsOptions:this.cssOptions,!1,null,0,!0),a.attributes.id||(a.attributes.id=e.guid()),a.win?a.doc=a.win.document:a.win=a.doc.defaultView||a.doc.parentWindow,a.charset&&(a.attributes.charset=a.charset),i.push(a)}return new s(i,r)},_load:function(e,t,n,r){var s;return typeof n=="function"&&(r=n,n={}),n||(n={}),n.type=e,n._onFinish=i._onTransactionFinish,this._env||this._getEnv(),s=this._getTransaction(t,n),this._queue.push({callback:r,transaction:s}),this._next(),s},_onTransactionFinish:function(){i._pending=null,i._next()},_next:function(){var e;if(this._pending)return;e=this._queue.shift(),e&&(this._pending=e,e.transaction.execute(e.callback))},_purge:function(t){var n=this._purgeNodes,r=t!==n,i,s;while(s=t.pop()){if(!s._yuiget_finished)continue;s.parentNode&&s.parentNode.removeChild(s),r&&(i=e.Array.indexOf(n,s),i>-1&&n.splice(i,1))}}},i.script=i.js,i.Transaction=s=function(t,n){var r=this;r.id=s._lastId+=1,r.data=n.data,r.errors=[],r.nodes=[],r.options=n,r.requests=t,r._callbacks=[],r._queue=[],r._reqsWaiting=0,r.tId=r.id,r.win=n.win||e.config.win},s._lastId=0,s.prototype={_state:"new",abort:function(e){this._pending=null,this._pendingCSS=null,this._pollTimer=clearTimeout(this._pollTimer),this._queue=[],this._reqsWaiting=0,this.errors.push({error:e||"Aborted"}),this._finish()},execute:function(e){var t=this,n=t.requests,r=t._state,i,s,o,u;if(r==="done"){e&&e(t.errors.length?t.errors:null,t);return}e&&t._callbacks.push(e);if(r==="executing")return;t._state="executing",t._queue=o=[],t.options.timeout&&(t._timeout=setTimeout(function(){t.abort("Timeout")},t.options.timeout)),t._reqsWaiting=n.length;for(i=0,s=n.length;i<s;++i)u=n[i],u.async||u.type==="css"?t._insert(u):o.push(u);t._next()},purge:function(){i._purge(this.nodes)},_createNode:function(e,t,n){var i=n.createElement(e),s,o;r||(o=n.createElement("div"),o.setAttribute("class","a"),r=o.className==="a"?{}:{"for":"htmlFor","class":"className"});for(s in t)t.hasOwnProperty(s)&&i.setAttribute(r[s]||s,t[s]);return i},_finish:function(){var e=this.errors.length?this.errors:null,t=this.options,n=t.context||this,r,i,s;if(this._state==="done")return;this._state="done";for(i=0,s=this._callbacks.length;i<s;++i)this._callbacks[i].call(n,e,this);r=this._getEventData(),e?(t.onTimeout&&e[e.length-1].error==="Timeout"&&t.onTimeout.call(n,r),t.onFailure&&t.onFailure.call(n,r)):t.onSuccess&&t.onSuccess.call(n,r),t.onEnd&&t.onEnd.call(n,r),t._onFinish&&t._onFinish()},_getEventData:function(t){return t?e.merge(this,{abort:this.abort,purge:this.purge,request:t,url:t.url,win:t.win}):this},_getInsertBefore:function(t){var n=t.doc,r=t.insertBefore,s,o;return r?typeof r=="string"?n.getElementById(r):r:(s=i._insertCache,o=e.stamp(n),(r=s[o])?r:(r=n.getElementsByTagName("base")[0])?s[o]=r:(r=n.head||n.getElementsByTagName("head")[0],r?(r.appendChild(n.createTextNode("")),s[o]=r.lastChild):s[o]=n.getElementsByTagName("script")[0]))},_insert:function(t){function c(){u._progress("Failed to load "+t.url,t)}function h(){f&&clearTimeout(f),u._progress(null,t)}var n=i._env,r=this._getInsertBefore(t),s=t.type==="js",o=t.node,u=this,a=e.UA,f,l;o||(s?l="script":!n.cssLoad&&a.gecko?l="style":l="link",o=t.node=this._createNode(l,t.attributes,t.doc)),s?(o.setAttribute("src",t.url),t.async?o.async=!0:(n.async&&(o.async=!1),n.preservesScriptOrder||(this._pending=t))):!n.cssLoad&&a.gecko?o.innerHTML=(t.attributes.charset?'@charset "'+t.attributes.charset+'";':"")+'@import "'+t.url+'";':o.setAttribute("href",t.url),s&&a.ie&&(a.ie<9||document.documentMode&&document.documentMode<9)?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,h())}:!s&&!n.cssLoad?this._poll(t):(a.ie>=10?(o.onerror=function(){setTimeout(c,0)},o.onload=function(){setTimeout(h,0)}):(o.onerror=c,o.onload=h),!n.cssFail&&!s&&(f=setTimeout(c,t.timeout||3e3))),this.nodes.push(o),r.parentNode.insertBefore(o,r)},_next:function(){if(this._pending)return;this._queue.length?this._insert(this._queue.shift()):this._reqsWaiting||this._finish()},_poll:function(t){var n=this,r=n._pendingCSS,i=e.UA.webkit,s,o,u,a,f,l;if(t){r||(r=n._pendingCSS=[]),r.push(t);if(n._pollTimer)return}n._pollTimer=null;for(s=0;s<r.length;++s){f=r[s];if(i){l=f.doc.styleSheets,u=l.length,a=f.node.href;while(--u>=0)if(l[u].href===a){r.splice(s,1),s-=1,n._progress(null,f);break}}else try{o=!!f.node.sheet.cssRules,r.splice(s,1),s-=1,n._progress(null,f)}catch(c){}}r.length&&(n._pollTimer=setTimeout(function(){n._poll.call(n)},n.options.pollInterval))},_progress:function(e,t){var n=this.options;e&&(t.error=e,this.errors.push({error:e,request:t})),t.node._yuiget_finished=t.finished=!0,n.onProgress&&n.onProgress.call(n.context||this,this._getEventData(t)),t.autopurge&&(i._autoPurge(this.options.purgethreshold),i._purgeNodes.push(t.node)),this._pending===t&&(this._pending=null),this._reqsWaiting-=1,this._next()}}},"3.11.0",{requires:["yui-base"]}),YUI.add("features",function(e,t){var n={};e.mix(e.namespace("Features"),{tests:n,add:function(e,t,r){n[e]=n[e]||{},n[e][t]=r},all:function(t,r){var i=n[t],s=[];return i&&e.Object.each(i,function(n,i){s.push(i+":"+(e.Features.test(t,i,r)?1:0))}),s.length?s.join(";"):""},test:function(t,r,i){i=i||[];var s,o,u,a=n[t],f=a&&a[r];return!f||(s=f.result,e.Lang.isUndefined(s)&&(o=f.ua,o&&(s=e.UA[o]),u=f.test,u&&(!o||s)&&(s=u.apply(e,i)),f.result=s)),s}});var r=e.Features.add;r("load","0",{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in 
n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"}),r("load","1",{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"}),r("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),r("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"}),r("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),r("load","5",{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"}),r("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","10",{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","11",{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),r("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),r("load","14",{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"}),r("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"}),r("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),r("load","17",{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"}),r("load","18",{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"}),r("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),r("load","20",{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql",when:"after"}),r("load","21",{name:"yql-nodejs",trigger:"yql",ua:"nodejs",when:"after"}),r("load","22",{name:"yql-winjs",trigger:"yql",ua:"winjs",when:"after"})},"3.11.0",{requires:["yui-base"]}),YUI.add("intl-base",function(e,t){var n=/[, ]/;e.mix(e.namespace("Intl"),{lookupBestLang:function(t,r){function a(e){var t;for(t=0;t<r.length;t+=1)if(e.toLowerCase()===r[t].toLowerCase())return r[t]}var i,s,o,u;e.Lang.isString(t)&&(t=t.split(n));for(i=0;i<t.length;i+=1){s=t[i];if(!s||s==="*")continue;while(s.length>0){o=a(s);if(o)return o;u=s.lastIndexOf("-");if(!(u>=0))break;s=s.substring(0,u),u>=2&&s.charAt(u-2)==="-"&&(s=s.substring(0,u-2))}}return""}})},"3.11.0",{requires:["yui-base"]}),YUI.add("yui-log",function(e,t){var n=e,r="yui:log",i="undefined",s={debug:1,info:2,warn:4,error:8};n.log=function(e,t,o,u){var a,f,l,c,h,p,d=n,v=d.config,m=d.fire?d:YUI.Env.globalEvents;return v.debug&&(o=o||"",typeof o!="undefined"&&(f=v.logExclude,l=v.logInclude,!l||o in l?l&&o in l?a=!l[o]:f&&o in f&&(a=f[o]):a=1,d.config.logLevel=d.config.logLevel||"debug",p=s[d.config.logLevel.toLowerCase()],t in s&&s[t]<p&&(a=1)),a||(v.useBrowserConsole&&(c=o?o+": "+e:e,d.Lang.isFunction(v.logFn)?v.logFn.call(d,e,t,o):typeof console!==i&&console.log?(h=t&&console[t]&&t in s?t:"log",console[h](c)):typeof opera!==i&&opera.postError(c)),m&&!u&&(m===d&&!m.getEvent(r)&&m.publish(r,{broadcast:2}),m.fire(r,{msg:e,cat:t,src:o})))),d},n.message=function(){return n.log.apply(n,arguments)}},"3.11.0",{requires:["yui-base"]}),YUI.add("yui-later",function(e,t){var n=[];e.later=function(t,r,i,s,o){t=t||0,s=e.Lang.isUndefined(s)?n:e.Array(s),r=r||e.config.win||e;var u=!1,a=r&&e.Lang.isString(i)?r[i]:i,f=function(){u||(a.apply?a.apply(r,s||n):a(s[0],s[1],s[2],s[3]))},l=o?setInterval(f,t):setTimeout(f,t);return{id:
l,interval:o,cancel:function(){u=!0,this.interval?clearInterval(l):clearTimeout(l)}}},e.Lang.later=e.later},"3.11.0",{requires:["yui-base"]}),YUI.add("loader-base",function(e,t){YUI.Env[e.version]||function(){var t=e.version,n="/build/",r=t+"/",i=e.Env.base,s="gallery-2013.07.03-22-52",o="2in3",u="4",a="2.9.0",f=i+"combo?",l={version:t,root:r,base:e.Env.base,comboBase:f,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},c=l.groups,h=function(e,t,r){var s=o+"."+(e||u)+"/"+(t||a)+n,l=r&&r.base?r.base:i,h=r&&r.comboBase?r.comboBase:f;c.yui2.base=l+s,c.yui2.root=s,c.yui2.comboBase=h},p=function(e,t){var r=(e||s)+n,o=t&&t.base?t.base:i,u=t&&t.comboBase?t.comboBase:f;c.gallery.base=o+r,c.gallery.root=r,c.gallery.comboBase=u};c[t]={},c.gallery={ext:!1,combine:!0,comboBase:f,update:p,patterns:{"gallery-":{},"lang/gallery-":{},"gallerycss-":{type:"css"}}},c.yui2={combine:!0,ext:!1,comboBase:f,update:h,patterns:{"yui2-":{configFn:function(e){/-skin|reset|fonts|grids|base/.test(e.name)&&(e.type="css",e.path=e.path.replace(/\.js/,".css"),e.path=e.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin"))}}}},p(),h(),YUI.Env[t]=l}();var n={},r=[],i=1024,s=YUI.Env,o=s._loaded,u="css",a="js",f="intl",l="sam",c=e.version,h="",p=e.Object,d=p.each,v=e.Array,m=s._loaderQueue,g=s[c],y="skin-",b=e.Lang,w=s.mods,E,S=function(e,t,n,r){var i=e+"/"+t;return r||(i+="-min"),i+="."+(n||u),i};YUI.Env._cssLoaded||(YUI.Env._cssLoaded={}),e.Env.meta=g,e.Loader=function(t){var n=this;t=t||{},E=g.md5,n.context=e,n.base=e.Env.meta.base+e.Env.meta.root,n.comboBase=e.Env.meta.comboBase,n.combine=t.base&&t.base.indexOf(n.comboBase.substr(0,20))>-1,n.comboSep="&",n.maxURLLength=i,n.ignoreRegistered=t.ignoreRegistered,n.root=e.Env.meta.root,n.timeout=0,n.forceMap={},n.allowRollup=!1,n.filters={},n.required={},n.patterns={},n.moduleInfo={},n.groups=e.merge(e.Env.meta.groups),n.skin=e.merge(e.Env.meta.skin),n.conditions={},n.config=t,n._internal=!0,n._populateCache(),n.loaded=o[c],n.async=!0,n._inspectPage(),n._internal=!1,n._config(t),n.forceMap=n.force?e.Array.hash(n.force):{},n.testresults=null,e.config.tests&&(n.testresults=e.config.tests),n.sorted=[],n.dirty=!0,n.inserted={},n.skipped={},n.tested={},n.ignoreRegistered&&n._resetModules()},e.Loader.prototype={_populateCache:function(){var t=this,n=g.modules,r=s._renderedMods,i;if(r&&!t.ignoreRegistered){for(i in r)r.hasOwnProperty(i)&&(t.moduleInfo[i]=e.merge(r[i]));r=s._conditions;for(i in r)r.hasOwnProperty(i)&&(t.conditions[i]=e.merge(r[i]))}else for(i in n)n.hasOwnProperty(i)&&t.addModule(n[i],i)},_resetModules:function(){var e=this,t,n,r,i,s;for(t in e.moduleInfo)if(e.moduleInfo.hasOwnProperty(t)){r=e.moduleInfo[t],i=r.name,s=YUI.Env.mods[i]?YUI.Env.mods[i].details:null,s&&(e.moduleInfo[i]._reset=!0,e.moduleInfo[i].requires=s.requires||[],e.moduleInfo[i].optional=s.optional||[],e.moduleInfo[i].supersedes=s.supercedes||[]);if(r.defaults)for(n in r.defaults)r.defaults.hasOwnProperty(n)&&r[n]&&(r[n]=r.defaults[n]);delete r.langCache,delete r.skinCache,r.skinnable&&e._addSkin(e.skin.defaultSkin,r.name)}},REGEX_CSS:/\.css(?:[?;].*)?$/i,FILTER_DEFS:{RAW:{searchExp:"-min\\.js",replaceStr:".js"},DEBUG:{searchExp:"-min\\.js",replaceStr:"-debug.js"},COVERAGE:{searchExp:"-min\\.js",replaceStr:"-coverage.js"}},_inspectPage:function(){var e=this,t,n,r,i,s;for(s in e.moduleInfo)e.moduleInfo.hasOwnProperty(s)&&(t=e.moduleInfo[s],t.type&&t.type===u&&e.isCSSLoaded(t.name)&&(e.loaded[s]=!0));for(s in w)w.hasOwnProperty(s)&&(t=w[s],t.details&&(n=e.moduleInfo[t.name],r=t.details.requires,i=n&&n.requires,n?!n._inspected&&r&&i.length!==r.length&&delete n.expanded:n=e.addModule(t.details,s),n._inspected=!0))},_requires:function(e,t){var n,r,i,s,o=this.moduleInfo,a=o[e],f=o[t];if(!a||!f)return!1;r=a.expanded_map,i=a.after_map;if(i&&t in i)return!0;i=f.after_map;if(i&&e in i)return!1;s=o[t]&&o[t].supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(e,s[n]))return!0;s=o[e]&&o[e].supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(t,s[n]))return!1;return r&&t in r?!0:a.ext&&a.type===u&&!f.ext&&f.type===u?!0:!1},_config:function(t){var n,r,i,s,o,u,a,f=this,l=[],c;if(t)for(n in t)if(t.hasOwnProperty(n)){i=t[n];if(n==="require")f.require(i);else if(n==="skin")typeof i=="string"&&(f.skin.defaultSkin=t.skin,i={defaultSkin:i}),e.mix(f.skin,i,!0);else if(n==="groups"){for(r in i)if(i.hasOwnProperty(r)){a=r,u=i[r],f.addGroup(u,a);if(u.aliases)for(s in u.aliases)u.aliases.hasOwnProperty(s)&&f.addAlias(u.aliases[s],s)}}else if(n==="modules")for(r in i)i.hasOwnProperty(r)&&f.addModule(i[r],r);else if(n==="aliases")for(r in i)i.hasOwnProperty(r)&&f.addAlias(i[r],r);else n==="gallery"?this.groups.gallery.update&&this.groups.gallery.update(i,t):n==="yui2"||n==="2in3"?this.groups.yui2.update&&this.groups.yui2.update(t["2in3"],t.yui2,t):f[n]=i}o=f.filter,b.isString(o)&&(o=o.toUpperCase(),f.filterName=o,f.filter=f.FILTER_DEFS[o],o==="DEBUG"&&f.require("yui-log","dump"));if(f.filterName&&f.coverage&&f.filterName==="COVERAGE"&&b.isArray(f.coverage)&&f.coverage.length){for(n=0;n<f.coverage.length;n++)c=f.coverage[n],f.moduleInfo[c]&&f.moduleInfo[c].use?l=[].concat(l,f.moduleInfo[c].use):l.push(c);f.filters=f.filters||{},e.Array.each(l,function(e){f.filters[e]=f.FILTER_DEFS.COVERAGE}),f.filterName="RAW",f.filter=f.FILTER_DEFS[f.filterName]}},formatSkin:function(e,t){var n=y+e;return t&&(n=n+"-"+t),n},_addSkin:function(e,t,n){var r,i,s,o,u=this.moduleInfo,a=this.skin,f=u[t]&&u[t].ext;return t&&(s=this.formatSkin(e,t),u[s]||(r=u[t],i=r.pkg||t,o={skin:!0,name:s,group:r.group,type:"css",after:a.after,path:(n||i)+"/"+a.base+e+"/"+t+".css",ext:f},r.base&&(o.base=r.base),r.configFn&&(o.configFn=r.configFn),this.addModule(o,s))),s},addAlias:function(e,t){YUI.Env.aliases[t]=e,this.addModule({name:t,use:e})},addGroup:function(e,t){var n=e.modules,r=this,i,s;t=t||e.name,e.name=t,r.groups[t]=e;if(e.patterns
)for(i in e.patterns)e.patterns.hasOwnProperty(i)&&(e.patterns[i].group=t,r.patterns[i]=e.patterns[i]);if(n)for(i in n)n.hasOwnProperty(i)&&(s=n[i],typeof s=="string"&&(s={name:i,fullpath:s}),s.group=t,r.addModule(s,i))},addModule:function(t,n){n=n||t.name,typeof t=="string"&&(t={name:n,fullpath:t});var r,i,o,f,l,c,p,d,m,g,y,b,w,E,x,T,N,C,k,L,A,O,M=this.conditions,_;this.moduleInfo[n]&&this.moduleInfo[n].temp&&(t=e.merge(this.moduleInfo[n],t)),t.name=n;if(!t||!t.name)return null;t.type||(t.type=a,O=t.path||t.fullpath,O&&this.REGEX_CSS.test(O)&&(t.type=u)),!t.path&&!t.fullpath&&(t.path=S(n,n,t.type)),t.supersedes=t.supersedes||t.use,t.ext="ext"in t?t.ext:this._internal?!1:!0,r=t.submodules,this.moduleInfo[n]=t,t.requires=t.requires||[];if(this.requires)for(i=0;i<this.requires.length;i++)t.requires.push(this.requires[i]);if(t.group&&this.groups&&this.groups[t.group]){A=this.groups[t.group];if(A.requires)for(i=0;i<A.requires.length;i++)t.requires.push(A.requires[i])}t.defaults||(t.defaults={requires:t.requires?[].concat(t.requires):null,supersedes:t.supersedes?[].concat(t.supersedes):null,optional:t.optional?[].concat(t.optional):null}),t.skinnable&&t.ext&&t.temp&&(k=this._addSkin(this.skin.defaultSkin,n),t.requires.unshift(k)),t.requires.length&&(t.requires=this.filterRequires(t.requires)||[]);if(!t.langPack&&t.lang){y=v(t.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),p=this.moduleInfo[b],p||(p=this._addLangPack(T,t,b))}if(r){l=t.supersedes||[],o=0;for(i in r)if(r.hasOwnProperty(i)){c=r[i],c.path=c.path||S(n,i,t.type),c.pkg=n,c.group=t.group,c.supersedes&&(l=l.concat(c.supersedes)),p=this.addModule(c,i),l.push(i);if(p.skinnable){t.skinnable=!0,C=this.skin.overrides;if(C&&C[i])for(g=0;g<C[i].length;g++)k=this._addSkin(C[i][g],i,n),l.push(k);k=this._addSkin(this.skin.defaultSkin,i,n),l.push(k)}if(c.lang&&c.lang.length){y=v(c.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),w=this.getLangPackName(T,i),p=this.moduleInfo[b],p||(p=this._addLangPack(T,t,b)),E=E||v.hash(p.supersedes),w in E||p.supersedes.push(w),t.lang=t.lang||[],x=x||v.hash(t.lang),T in x||t.lang.push(T),b=this.getLangPackName(h,n),w=this.getLangPackName(h,i),p=this.moduleInfo[b],p||(p=this._addLangPack(T,t,b)),w in E||p.supersedes.push(w)}o++}t.supersedes=v.dedupe(l),this.allowRollup&&(t.rollup=o<4?o:Math.min(o-1,4))}d=t.plugins;if(d)for(i in d)d.hasOwnProperty(i)&&(m=d[i],m.pkg=n,m.path=m.path||S(n,i,t.type),m.requires=m.requires||[],m.group=t.group,this.addModule(m,i),t.skinnable&&this._addSkin(this.skin.defaultSkin,i,n));if(t.condition){f=t.condition.trigger,YUI.Env.aliases[f]&&(f=YUI.Env.aliases[f]),e.Lang.isArray(f)||(f=[f]);for(i=0;i<f.length;i++)_=f[i],L=t.condition.when,M[_]=M[_]||{},M[_][n]=t.condition,L&&L!=="after"?L==="instead"&&(t.supersedes=t.supersedes||[],t.supersedes.push(_)):(t.after=t.after||[],t.after.push(_))}return t.supersedes&&(t.supersedes=this.filterRequires(t.supersedes)),t.after&&(t.after=this.filterRequires(t.after),t.after_map=v.hash(t.after)),t.configFn&&(N=t.configFn(t),N===!1&&(delete this.moduleInfo[n],delete s._renderedMods[n],t=null)),t&&(s._renderedMods||(s._renderedMods={}),s._renderedMods[n]=e.mix(s._renderedMods[n]||{},t),s._conditions=M),t},require:function(t){var n=typeof t=="string"?v(arguments):t;this.dirty=!0,this.required=e.merge(this.required,v.hash(this.filterRequires(n))),this._explodeRollups()},_explodeRollups:function(){var e=this,t,n,r,i,s,o,u,a=e.required;if(!e.allowRollup){for(r in a)if(a.hasOwnProperty(r)){t=e.getModule(r);if(t&&t.use){o=t.use.length;for(i=0;i<o;i++){n=e.getModule(t.use[i]);if(n&&n.use){u=n.use.length;for(s=0;s<u;s++)a[n.use[s]]=!0}else a[t.use[i]]=!0}}}e.required=a}},filterRequires:function(t){if(t){e.Lang.isArray(t)||(t=[t]),t=e.Array(t);var n=[],r,i,s,o;for(r=0;r<t.length;r++){i=this.getModule(t[r]);if(i&&i.use)for(s=0;s<i.use.length;s++)o=this.getModule(i.use[s]),o&&o.use&&o.name!==i.name?n=e.Array.dedupe([].concat(n,this.filterRequires(o.use))):n.push(i.use[s]);else n.push(t[r])}t=n}return t},getRequires:function(t){if(!t)return r;if(t._parsed)return t.expanded||r;var n,i,s,o,u,a,l=this.testresults,c=t.name,m,g=w[c]&&w[c].details,y,b,E,S,x,T,N,C,k,L,A=t.lang||t.intl,O=this.moduleInfo,M=e.Features&&e.Features.tests.load,_,D;t.temp&&g&&(x=t,t=this.addModule(g,c),t.group=x.group,t.pkg=x.pkg,delete t.expanded),D=!!this.lang&&t.langCache!==this.lang||t.skinCache!==this.skin.defaultSkin;if(t.expanded&&!D)return t.expanded;y=[],_={},S=this.filterRequires(t.requires),t.lang&&(y.unshift("intl"),S.unshift("intl"),A=!0),T=this.filterRequires(t.optional),t._parsed=!0,t.langCache=this.lang,t.skinCache=this.skin.defaultSkin;for(n=0;n<S.length;n++)if(!_[S[n]]){y.push(S[n]),_[S[n]]=!0,i=this.getModule(S[n]);if(i){o=this.getRequires(i),A=A||i.expanded_map&&f in i.expanded_map;for(s=0;s<o.length;s++)y.push(o[s])}}S=this.filterRequires(t.supersedes);if(S)for(n=0;n<S.length;n++)if(!_[S[n]]){t.submodules&&y.push(S[n]),_[S[n]]=!0,i=this.getModule(S[n]);if(i){o=this.getRequires(i),A=A||i.expanded_map&&f in i.expanded_map;for(s=0;s<o.length;s++)y.push(o[s])}}if(T&&this.loadOptional)for(n=0;n<T.length;n++)if(!_[T[n]]){y.push(T[n]),_[T[n]]=!0,i=O[T[n]];if(i){o=this.getRequires(i),A=A||i.expanded_map&&f in i.expanded_map;for(s=0;s<o.length;s++)y.push(o[s])}}m=this.conditions[c];if(m){t._parsed=!1;if(l&&M)d(l,function(e,t){var n=M[t].name;!_[n]&&M[t].trigger===c&&e&&M[t]&&(_[n]=!0,y.push(n))});else for(n in m)if(m.hasOwnProperty(n)&&!_[n]){E=m[n],b=E&&(!E.ua&&!E.test||E.ua&&e.UA[E.ua]||E.test&&E.test(e,S));if(b){_[n]=!0,y.push(n),i=this.getModule(n);if(i){o=this.getRequires(i);for(s=0;s<o.length;s++)y.push(o[s])}}}}if(t.skinnable){C=this.skin.overrides;for(n in YUI.Env.aliases)YUI.Env.aliases.hasOwnProperty(n)&&e.Array.indexOf(YUI.Env.aliases[n],c)>-1&&(k=n);if(C&&(C[c]||k&&C[k])){L=c,C[k]&&(L=k);for(n=0;n<C[L].length;n++)N=this._addSkin(C[L][n],c),this.isCSSLoaded(N,this._boot)||y.push(N)}else N=this._addSkin(this.skin.defaultSkin,c),this.isCSSLoaded
(N,this._boot)||y.push(N)}return t._parsed=!1,A&&(t.lang&&!t.langPack&&e.Intl&&(a=e.Intl.lookupBestLang(this.lang||h,t.lang),u=this.getLangPackName(a,c),u&&y.unshift(u)),y.unshift(f)),t.expanded_map=v.hash(y),t.expanded=p.keys(t.expanded_map),t.expanded},isCSSLoaded:function(t,n){if(!t||!YUI.Env.cssStampEl||!n&&this.ignoreRegistered)return!1;var r=YUI.Env.cssStampEl,i=!1,s=YUI.Env._cssLoaded[t],o=r.currentStyle;return s!==undefined?s:(r.className=t,o||(o=e.config.doc.defaultView.getComputedStyle(r,null)),o&&o.display==="none"&&(i=!0),r.className="",YUI.Env._cssLoaded[t]=i,i)},getProvides:function(t){var r=this.getModule(t),i,s;return r?(r&&!r.provides&&(i={},s=r.supersedes,s&&v.each(s,function(t){e.mix(i,this.getProvides(t))},this),i[t]=!0,r.provides=i),r.provides):n},calculate:function(e,t){if(e||t||this.dirty)e&&this._config(e),this._init||this._setup(),this._explode(),this.allowRollup?this._rollup():this._explodeRollups(),this._reduce(),this._sort()},_addLangPack:function(t,n,r){var i=n.name,s,o,u=this.moduleInfo[r];return u||(s=S(n.pkg||i,r,a,!0),o={path:s,intl:!0,langPack:!0,ext:n.ext,group:n.group,supersedes:[]},n.root&&(o.root=n.root),n.base&&(o.base=n.base),n.configFn&&(o.configFn=n.configFn),this.addModule(o,r),t&&(e.Env.lang=e.Env.lang||{},e.Env.lang[t]=e.Env.lang[t]||{},e.Env.lang[t][i]=!0)),this.moduleInfo[r]},_setup:function(){var t=this.moduleInfo,n,r,i,o,u,a;for(n in t)t.hasOwnProperty(n)&&(o=t[n],o&&(o.requires=v.dedupe(o.requires),o.lang&&(a=this.getLangPackName(h,n),this._addLangPack(null,o,a))));u={},this.ignoreRegistered||e.mix(u,s.mods),this.ignore&&e.mix(u,v.hash(this.ignore));for(i in u)u.hasOwnProperty(i)&&e.mix(u,this.getProvides(i));if(this.force)for(r=0;r<this.force.length;r++)this.force[r]in u&&delete u[this.force[r]];e.mix(this.loaded,u),this._init=!0},getLangPackName:function(e,t){return"lang/"+t+(e?"_"+e:"")},_explode:function(){var t=this.required,n,r,i={},s=this,o,u;s.dirty=!1,s._explodeRollups(),t=s.required;for(o in t)t.hasOwnProperty(o)&&(i[o]||(i[o]=!0,n=s.getModule(o),n&&(u=n.expound,u&&(t[u]=s.getModule(u),r=s.getRequires(t[u]),e.mix(t,v.hash(r))),r=s.getRequires(n),e.mix(t,v.hash(r)))))},_patternTest:function(e,t){return e.indexOf(t)>-1},getModule:function(t){if(!t)return null;var n,r,i,s=this.moduleInfo[t],o=this.patterns;if(!s||s&&s.ext)for(i in o)if(o.hasOwnProperty(i)){n=o[i],n.test||(n.test=this._patternTest);if(n.test(t,i)){r=n;break}}return s?r&&s&&r.configFn&&!s.configFn&&(s.configFn=r.configFn,s.configFn(s)):r&&(n.action?n.action.call(this,t,i):(s=this.addModule(e.merge(r),t),r.configFn&&(s.configFn=r.configFn),s.temp=!0)),s},_rollup:function(){},_reduce:function(e){e=e||this.required;var t,n,r,i,s=this.loadType,o=this.ignore?v.hash(this.ignore):!1;for(t in e)if(e.hasOwnProperty(t)){i=this.getModule(t),((this.loaded[t]||w[t])&&!this.forceMap[t]&&!this.ignoreRegistered||s&&i&&i.type!==s)&&delete e[t],o&&o[t]&&delete e[t],r=i&&i.supersedes;if(r)for(n=0;n<r.length;n++)r[n]in e&&delete e[r[n]]}return e},_finish:function(e,t){m.running=!1;var n=this.onEnd;n&&n.call(this.context,{msg:e,data:this.data,success:t}),this._continue()},_onSuccess:function(){var t=this,n=e.merge(t.skipped),r,i=[],s=t.requireRegistration,o,u,f,l;for(f in n)n.hasOwnProperty(f)&&delete t.inserted[f];t.skipped={};for(f in t.inserted)t.inserted.hasOwnProperty(f)&&(l=t.getModule(f),!l||!s||l.type!==a||f in YUI.Env.mods?e.mix(t.loaded,t.getProvides(f)):i.push(f));r=t.onSuccess,u=i.length?"notregistered":"success",o=!i.length,r&&r.call(t.context,{msg:u,data:t.data,success:o,failed:i,skipped:n}),t._finish(u,o)},_onProgress:function(e){var t=this,n;if(e.data&&e.data.length)for(n=0;n<e.data.length;n++)e.data[n]=t.getModule(e.data[n].name);t.onProgress&&t.onProgress.call(t.context,{name:e.url,data:e.data})},_onFailure:function(e){var t=this.onFailure,n=[],r=0,i=e.errors.length;for(r;r<i;r++)n.push(e.errors[r].error);n=n.join(","),t&&t.call(this.context,{msg:n,data:this.data,success:!1}),this._finish(n,!1)},_onTimeout:function(e){var t=this.onTimeout;t&&t.call(this.context,{msg:"timeout",data:this.data,success:!1,transaction:e})},_sort:function(){var e=p.keys(this.required),t={},n=0,r,i,s,o,u,a,f;for(;;){r=e.length,a=!1;for(o=n;o<r;o++){i=e[o];for(u=o+1;u<r;u++){f=i+e[u];if(!t[f]&&this._requires(i,e[u])){s=e.splice(u,1),e.splice(o,0,s[0]),t[f]=!0,a=!0;break}}if(a)break;n++}if(!a)break}this.sorted=e},_insert:function(t,n,r,i){t&&this._config(t);var s=this.resolve(!i),o=this,f=0,l=0,c={},h,p;o._refetch=[],r&&(s[r===a?u:a]=[]),o.fetchCSS||(s.css=[]),s.js.length&&f++,s.css.length&&f++,p=function(t){l++;var n={},r=0,i=0,s="",u,a,p;if(t&&t.errors)for(r=0;r<t.errors.length;r++)t.errors[r].request?s=t.errors[r].request.url:s=t.errors[r],n[s]=s;if(t&&t.data&&t.data.length&&t.type==="success")for(r=0;r<t.data.length;r++){o.inserted[t.data[r].name]=!0;if(t.data[r].lang||t.data[r].skinnable)delete o.inserted[t.data[r].name],o._refetch.push(t.data[r].name)}if(l===f){o._loading=null;if(o._refetch.length){for(r=0;r<o._refetch.length;r++){h=o.getRequires(o.getModule(o._refetch[r]));for(i=0;i<h.length;i++)o.inserted[h[i]]||(c[h[i]]=h[i])}c=e.Object.keys(c);if(c.length){o.require(c),p=o.resolve(!0);if(p.cssMods.length){for(r=0;r<p.cssMods.length;r++)a=p.cssMods[r].name,delete YUI.Env._cssLoaded[a],o.isCSSLoaded(a)&&(o.inserted[a]=!0,delete o.required[a]);o.sorted=[],o._sort()}t=null,o._insert()}}t&&t.fn&&(u=t.fn,delete t.fn,u.call(o,t))}},this._loading=!0;if(!s.js.length&&!s.css.length){l=-1,p({fn:o._onSuccess});return}s.css.length&&e.Get.css(s.css,{data:s.cssMods,attributes:o.cssAttributes,insertBefore:o.insertBefore,charset:o.charset,timeout:o.timeout,context:o,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}}),s.js.length&&e.Get.js(s.js,{data:s.jsMods,insertBefore:o.insertBefore,attributes:o.jsAttributes,charset:o.charset
,timeout:o.timeout,autopurge:!1,context:o,async:o.async,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}})},_continue:function(){!m.running&&m.size()>0&&(m.running=!0,m.next()())},insert:function(t,n,r){var i=this,s=e.merge(this);delete s.require,delete s.dirty,m.add(function(){i._insert(s,t,n,r)}),this._continue()},loadNext:function(){return},_filter:function(e,t,n){var r=this.filter,i=t&&t in this.filters,s=i&&this.filters[t],o=n||(this.moduleInfo[t]?this.moduleInfo[t].group:null);return o&&this.groups[o]&&this.groups[o].filter&&(s=this.groups[o].filter,i=!0),e&&(i&&(r=b.isString(s)?this.FILTER_DEFS[s.toUpperCase()]||null:s),r&&(e=e.replace(new RegExp(r.searchExp,"g"),r.replaceStr))),e},_url:function(e,t,n){return this._filter((n||this.base||"")+e,t)},resolve:function(e,t){var r,s,o,f,c,h,p,d,v,m,g,y,w,E,S=[],x,T,N={},C=this,k,A,O=C.ignoreRegistered?{}:C.inserted,M={js:[],jsMods:[],css:[],cssMods:[]},_=C.loadType||"js",D;(C.skin.overrides||C.skin.defaultSkin!==l||C.ignoreRegistered)&&C._resetModules(),e&&C.calculate(),t=t||C.sorted,D=function(e){if(e){c=e.group&&C.groups[e.group]||n,c.async===!1&&(e.async=c.async),f=e.fullpath?C._filter(e.fullpath,t[s]):C._url(e.path,t[s],c.base||e.base);if(e.attributes||e.async===!1)f={url:f,async:e.async},e.attributes&&(f.attributes=e.attributes);M[e.type].push(f),M[e.type+"Mods"].push(e)}},r=t.length,y=C.comboBase,f=y,m={};for(s=0;s<r;s++){v=y,o=C.getModule(t[s]),h=o&&o.group,c=C.groups[h];if(h&&c){if(!c.combine||o.fullpath){D(o);continue}o.combine=!0,c.comboBase&&(v=c.comboBase),"root"in c&&b.isValue(c.root)&&(o.root=c.root),o.comboSep=c.comboSep||C.comboSep,o.maxURLLength=c.maxURLLength||C.maxURLLength}else if(!C.combine){D(o);continue}m[v]=m[v]||[],m[v].push(o)}for(p in m)if(m.hasOwnProperty(p)){N[p]=N[p]||{js:[],jsMods:[],css:[],cssMods:[]},f=p,g=m[p],r=g.length;if(r)for(s=0;s<r;s++){if(O[g[s]])continue;o=g[s],o&&(o.combine||!o.ext)?(N[p].comboSep=o.comboSep,N[p].group=o.group,N[p].maxURLLength=o.maxURLLength,d=(b.isValue(o.root)?o.root:C.root)+(o.path||o.fullpath),d=C._filter(d,o.name),N[p][o.type].push(d),N[p][o.type+"Mods"].push(o)):g[s]&&D(g[s])}}for(p in N)if(N.hasOwnProperty(p)){w=p,k=N[w].comboSep||C.comboSep,A=N[w].maxURLLength||C.maxURLLength;for(_ in N[w])if(_===a||_===u){E=N[w][_],g=N[w][_+"Mods"],r=E.length,x=w+E.join(k),T=x.length,A<=w.length&&(A=i);if(r)if(T>A){S=[];for(t=0;t<r;t++)S.push(E[t]),x=w+S.join(k),x.length>A&&(o=S.pop(),x=w+S.join(k),M[_].push(C._filter(x,null,N[w].group)),S=[],o&&S.push(o));S.length&&(x=w+S.join(k),M[_].push(C._filter(x,null,N[w].group)))}else M[_].push(C._filter(x,null,N[w].group));M[_+"Mods"]=M[_+"Mods"].concat(g)}}return N=null,M},load:function(e){if(!e)return;var t=this,n=t.resolve(!0);t.data=n,t.onEnd=function(){e.apply(t.context||t,arguments)},t.insert()}}},"3.11.0",{requires:["get","features"]}),YUI.add("loader-rollup",function(e,t){e.Loader.prototype._rollup=function(){var e,t,n,r,i=this.required,s,o=this.moduleInfo,u,a,f;if(this.dirty||!this.rollups){this.rollups={};for(e in o)o.hasOwnProperty(e)&&(n=this.getModule(e),n&&n.rollup&&(this.rollups[e]=n))}for(;;){u=!1;for(e in this.rollups)if(this.rollups.hasOwnProperty(e)&&!i[e]&&(!this.loaded[e]||this.forceMap[e])){n=this.getModule(e),r=n.supersedes||[],s=!1;if(!n.rollup)continue;a=0;for(t=0;t<r.length;t++){f=o[r[t]];if(this.loaded[r[t]]&&!this.forceMap[r[t]]){s=!1;break}if(i[r[t]]&&n.type===f.type){a++,s=a>=n.rollup;if(s)break}}s&&(i[e]=!0,u=!0,this.getRequires(n))}if(!u)break}}},"3.11.0",{requires:["loader-base"]}),YUI.add("loader-yui3",function(e,t){YUI.Env[e.version].modules=YUI.Env[e.version].modules||{},e.mix(YUI.Env[e.version].modules,{"align-plugin":{requires:["node-screen","node-pluginhost"]},anim:{use:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"]},"anim-base":{requires:["base-base","node-style"]},"anim-color":{requires:["anim-base"]},"anim-curve":{requires:["anim-xy"]},"anim-easing":{requires:["anim-base"]},"anim-node-plugin":{requires:["node-pluginhost","anim-base"]},"anim-scroll":{requires:["anim-base"]},"anim-shape":{requires:["anim-base","anim-easing","anim-color","matrix"]},"anim-shape-transform":{use:["anim-shape"]},"anim-xy":{requires:["anim-base","node-screen"]},app:{use:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","router","view","view-node-map"]},"app-base":{requires:["classnamemanager","pjax-base","router","view"]},"app-content":{requires:["app-base","pjax-content"]},"app-transitions":{requires:["app-base"]},"app-transitions-css":{type:"css"},"app-transitions-native":{condition:{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"},requires:["app-transitions","app-transitions-css","parallel","transition"]},"array-extras":{requires:["yui-base"]},"array-invoke":{requires:["yui-base"]},arraylist:{requires:["yui-base"]},"arraylist-add":{requires:["arraylist"]},"arraylist-filter":{requires:["arraylist"]},arraysort:{requires:["yui-base"]},"async-queue":{requires:["event-custom"]},attribute:{use:["attribute-base","attribute-complex"]},"attribute-base":{requires:["attribute-core","attribute-observable","attribute-extras"]},"attribute-complex":{requires:["attribute-base"]},"attribute-core":{requires:["oop"]},"attribute-events":{use:["attribute-observable"]},"attribute-extras":{requires:["oop"]},"attribute-observable":{requires:["event-custom"]},autocomplete:{use:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"]},"autocomplete-base":{optional:["autocomplete-sources"],requires:["array-extras","base-build","escape","event-valuechange","node-base"]},"autocomplete-filters"
:{requires:["array-extras","text-wordbreak"]},"autocomplete-filters-accentfold":{requires:["array-extras","text-accentfold","text-wordbreak"]},"autocomplete-highlighters":{requires:["array-extras","highlight-base"]},"autocomplete-highlighters-accentfold":{requires:["array-extras","highlight-accentfold"]},"autocomplete-list":{after:["autocomplete-sources"],lang:["en","es","hu","it"],requires:["autocomplete-base","event-resize","node-screen","selector-css3","shim-plugin","widget","widget-position","widget-position-align"],skinnable:!0},"autocomplete-list-keys":{condition:{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"},requires:["autocomplete-list","base-build"]},"autocomplete-plugin":{requires:["autocomplete-list","node-pluginhost"]},"autocomplete-sources":{optional:["io-base","json-parse","jsonp","yql"],requires:["autocomplete-base"]},axes:{use:["axis-numeric","axis-category","axis-time","axis-stacked"]},"axes-base":{use:["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"]},axis:{requires:["dom","widget","widget-position","widget-stack","graphics","axis-base"]},"axis-base":{requires:["classnamemanager","datatype-number","datatype-date","base","event-custom"]},"axis-category":{requires:["axis","axis-category-base"]},"axis-category-base":{requires:["axis-base"]},"axis-numeric":{requires:["axis","axis-numeric-base"]},"axis-numeric-base":{requires:["axis-base"]},"axis-stacked":{requires:["axis-numeric","axis-stacked-base"]},"axis-stacked-base":{requires:["axis-numeric-base"]},"axis-time":{requires:["axis","axis-time-base"]},"axis-time-base":{requires:["axis-base"]},base:{use:["base-base","base-pluginhost","base-build"]},"base-base":{requires:["attribute-base","base-core","base-observable"]},"base-build":{requires:["base-base"]},"base-core":{requires:["attribute-core"]},"base-observable":{requires:["attribute-observable"]},"base-pluginhost":{requires:["base-base","pluginhost"]},button:{requires:["button-core","cssbutton","widget"]},"button-core":{requires:["attribute-core","classnamemanager","node-base"]},"button-group":{requires:["button-plugin","cssbutton","widget"]},"button-plugin":{requires:["button-core","cssbutton","node-pluginhost"]},cache:{use:["cache-base","cache-offline","cache-plugin"]},"cache-base":{requires:["base"]},"cache-offline":{requires:["cache-base","json"]},"cache-plugin":{requires:["plugin","cache-base"]},calendar:{requires:["calendar-base","calendarnavigator"],skinnable:!0},"calendar-base":{lang:["de","en","es","es-AR","fr","hu","it","ja","nb-NO","nl","pt-BR","ru","zh-HANT-TW"],requires:["widget","datatype-date","datatype-date-math","cssgrids"],skinnable:!0},calendarnavigator:{requires:["plugin","classnamemanager","datatype-date","node"],skinnable:!0},charts:{use:["charts-base"]},"charts-base":{requires:["dom","event-mouseenter","event-touch","graphics-group","axes","series-pie","series-line","series-marker","series-area","series-spline","series-column","series-bar","series-areaspline","series-combo","series-combospline","series-line-stacked","series-marker-stacked","series-area-stacked","series-spline-stacked","series-column-stacked","series-bar-stacked","series-areaspline-stacked","series-combo-stacked","series-combospline-stacked"]},"charts-legend":{requires:["charts-base"]},classnamemanager:{requires:["yui-base"]},"clickable-rail":{requires:["slider-base"]},collection:{use:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"]},color:{use:["color-base","color-hsl","color-harmony"]},"color-base":{requires:["yui-base"]},"color-harmony":{requires:["color-hsl"]},"color-hsl":{requires:["color-base"]},"color-hsv":{requires:["color-base"]},console:{lang:["en","es","hu","it","ja"],requires:["yui-log","widget"],skinnable:!0},"console-filters":{requires:["plugin","console"],skinnable:!0},controller:{use:["router"]},cookie:{requires:["yui-base"]},"createlink-base":{requires:["editor-base"]},cssbase:{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},"cssbase-context":{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},cssbutton:{type:"css"},cssfonts:{type:"css"},"cssfonts-context":{type:"css"},cssgrids:{optional:["cssnormalize"],type:"css"},"cssgrids-base":{optional:["cssnormalize"],type:"css"},"cssgrids-responsive":{optional:["cssnormalize"],requires:["cssgrids","cssgrids-responsive-base"],type:"css"},"cssgrids-units":{optional:["cssnormalize"],requires:["cssgrids-base"],type:"css"},cssnormalize:{type:"css"},"cssnormalize-context":{type:"css"},cssreset:{type:"css"},"cssreset-context":{type:"css"},dataschema:{use:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"]},"dataschema-array":{requires:["dataschema-base"]},"dataschema-base":{requires:["base"]},"dataschema-json":{requires:["dataschema-base","json"]},"dataschema-text":{requires:["dataschema-base"]},"dataschema-xml":{requires:["dataschema-base"]},datasource:{use:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"]},"datasource-arrayschema":{requires:["datasource-local","plugin","dataschema-array"]},"datasource-cache":{requires:["datasource-local","plugin","cache-base"]},"datasource-function":{requires:["datasource-local"]},"datasource-get":{requires:["datasource-local","get"]},"datasource-io":{requires:["datasource-local","io-base"]},"datasource-jsonschema":{requires:["datasource-local","plugin","dataschema-json"]},"datasource-local":{requires:["base"]},"datasource-polling":{requires:["datasource-local"]},"datasource-textschema":{requires:["datasource-local","plugin","dataschema-text"]},"datasource-xmlschema":{requires:["datasource-local","plugin","datatype-xml","dataschema-xml"]},datatable:{use:["datatable-core"
,"datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"]},"datatable-base":{requires:["datatable-core","datatable-table","datatable-head","datatable-body","base-build","widget"],skinnable:!0},"datatable-body":{requires:["datatable-core","view","classnamemanager"]},"datatable-column-widths":{requires:["datatable-base"]},"datatable-core":{requires:["escape","model-list","node-event-delegate"]},"datatable-datasource":{requires:["datatable-base","plugin","datasource-local"]},"datatable-foot":{requires:["datatable-core","view"]},"datatable-formatters":{requires:["datatable-body","datatype-number-format","datatype-date-format","escape"]},"datatable-head":{requires:["datatable-core","view","classnamemanager"]},"datatable-message":{lang:["en","fr","es","hu","it"],requires:["datatable-base"],skinnable:!0},"datatable-mutable":{requires:["datatable-base"]},"datatable-paginator":{lang:["en"],requires:["model","view","paginator-core","datatable-foot","datatable-paginator-templates"],skinnable:!0},"datatable-paginator-templates":{requires:["template"]},"datatable-scroll":{requires:["datatable-base","datatable-column-widths","dom-screen"],skinnable:!0},"datatable-sort":{lang:["en","fr","es","hu"],requires:["datatable-base"],skinnable:!0},"datatable-table":{requires:["datatable-core","datatable-head","datatable-body","view","classnamemanager"]},datatype:{use:["datatype-date","datatype-number","datatype-xml"]},"datatype-date":{use:["datatype-date-parse","datatype-date-format","datatype-date-math"]},"datatype-date-format":{lang:["ar","ar-JO","ca","ca-ES","da","da-DK","de","de-AT","de-DE","el","el-GR","en","en-AU","en-CA","en-GB","en-IE","en-IN","en-JO","en-MY","en-NZ","en-PH","en-SG","en-US","es","es-AR","es-BO","es-CL","es-CO","es-EC","es-ES","es-MX","es-PE","es-PY","es-US","es-UY","es-VE","fi","fi-FI","fr","fr-BE","fr-CA","fr-FR","hi","hi-IN","hu","id","id-ID","it","it-IT","ja","ja-JP","ko","ko-KR","ms","ms-MY","nb","nb-NO","nl","nl-BE","nl-NL","pl","pl-PL","pt","pt-BR","ro","ro-RO","ru","ru-RU","sv","sv-SE","th","th-TH","tr","tr-TR","vi","vi-VN","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-Hant-TW"]},"datatype-date-math":{requires:["yui-base"]},"datatype-date-parse":{},"datatype-number":{use:["datatype-number-parse","datatype-number-format"]},"datatype-number-format":{},"datatype-number-parse":{},"datatype-xml":{use:["datatype-xml-parse","datatype-xml-format"]},"datatype-xml-format":{},"datatype-xml-parse":{},dd:{use:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"]},"dd-constrain":{requires:["dd-drag"]},"dd-ddm":{requires:["dd-ddm-base","event-resize"]},"dd-ddm-base":{requires:["node","base","yui-throttle","classnamemanager"]},"dd-ddm-drop":{requires:["dd-ddm"]},"dd-delegate":{requires:["dd-drag","dd-drop-plugin","event-mouseenter"]},"dd-drag":{requires:["dd-ddm-base"]},"dd-drop":{requires:["dd-drag","dd-ddm-drop"]},"dd-drop-plugin":{requires:["dd-drop"]},"dd-gestures":{condition:{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"},requires:["dd-drag","event-synthetic","event-gestures"]},"dd-plugin":{optional:["dd-constrain","dd-proxy"],requires:["dd-drag"]},"dd-proxy":{requires:["dd-drag"]},"dd-scroll":{requires:["dd-drag"]},dial:{lang:["en","es","hu"],requires:["widget","dd-drag","event-mouseenter","event-move","event-key","transition","intl"],skinnable:!0},dom:{use:["dom-base","dom-screen","dom-style","selector-native","selector"]},"dom-base":{requires:["dom-core"]},"dom-core":{requires:["oop","features"]},"dom-deprecated":{requires:["dom-base"]},"dom-screen":{requires:["dom-base","dom-style"]},"dom-style":{requires:["dom-base","color-base"]},"dom-style-ie":{condition:{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"},requires:["dom-style"]},dump:{requires:["yui-base"]},editor:{use:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"]},"editor-base":{requires:["base","frame","node","exec-command","editor-selection"]},"editor-bidi":{requires:["editor-base"]},"editor-br":{requires:["editor-base"]},"editor-lists":{requires:["editor-base"]},"editor-para":{requires:["editor-para-base"]},"editor-para-base":{requires:["editor-base"]},"editor-para-ie":{condition:{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"},requires:["editor-para-base"]},"editor-selection":{requires:["node"]},"editor-tab":{requires:["editor-base"]},escape:{requires:["yui-base"]},event:{after:["node-base"],use:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"]},"event-base":{after:["node-base"],requires:["event-custom-base"]},"event-base-ie":{after:["event-base"],condition:{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"},requires:["node-base"]},"event-contextmenu":{requires:["event-synthetic","dom-screen"]},"event-custom":{use:["event-custom-base","event-custom-complex"]},"event-custom-base":{requires:["oop"]},"event-custom-complex":{requires:["event-custom-base"]},"event-delegate":{requires:["node-base"]},"event-flick":{requires:["node-base","event-touch","event-synthetic"]},"event-focus":{requires:["event-synthetic"]},"event-gestures":{use:["event-flick","event-move"]},"event-hover":{requires:["event-mouseenter"]},"event-key":{requires:["event-synthetic"]},"event-mouseenter"
:{requires:["event-synthetic"]},"event-mousewheel":{requires:["node-base"]},"event-move":{requires:["node-base","event-touch","event-synthetic"]},"event-outside":{requires:["event-synthetic"]},"event-resize":{requires:["node-base","event-synthetic"]},"event-simulate":{requires:["event-base"]},"event-synthetic":{requires:["node-base","event-custom-complex"]},"event-tap":{requires:["node-base","event-base","event-touch","event-synthetic"]},"event-touch":{requires:["node-base"]},"event-valuechange":{requires:["event-focus","event-synthetic"]},"exec-command":{requires:["frame"]},features:{requires:["yui-base"]},file:{requires:["file-flash","file-html5"]},"file-flash":{requires:["base"]},"file-html5":{requires:["base"]},frame:{requires:["base","node","selector-css3","yui-throttle"]},"gesture-simulate":{requires:["async-queue","event-simulate","node-screen"]},get:{requires:["yui-base"]},graphics:{requires:["node","event-custom","pluginhost","matrix","classnamemanager"]},"graphics-canvas":{condition:{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"},requires:["graphics"]},"graphics-canvas-default":{condition:{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}},"graphics-group":{requires:["graphics"]},"graphics-svg":{condition:{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"},requires:["graphics"]},"graphics-svg-default":{condition:{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}},"graphics-vml":{condition:{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"},requires:["graphics"]},"graphics-vml-default":{condition:{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}},handlebars:{use:["handlebars-compiler"]},"handlebars-base":{requires:[]},"handlebars-compiler":{requires:["handlebars-base"]},highlight:{use:["highlight-base","highlight-accentfold"]},"highlight-accentfold":{requires:["highlight-base","text-accentfold"]},"highlight-base":{requires:["array-extras","classnamemanager","escape","text-wordbreak"]},history:{use:["history-base","history-hash","history-hash-ie","history-html5"]},"history-base":{requires:["event-custom-complex"]},"history-hash":{after:["history-html5"],requires:["event-synthetic","history-base","yui-later"]},"history-hash-ie":{condition:{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"},requires:["history-hash","node-base"]},"history-html5":{optional:["json"],requires:["event-base","history-base","node-base"]},imageloader:{requires:["base-base","node-style","node-screen"]},intl:{requires:["intl-base","event-custom"]},"intl-base":{requires:["yui-base"]},io:{use:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"]},"io-base":{requires:["event-custom-base","querystring-stringify-simple"]},"io-form":{requires:["io-base","node-base"]},"io-nodejs":{condition:{name:"io-nodejs",trigger:"io-base",ua:"nodejs"},requires:["io-base"]},"io-queue":{requires:["io-base","queue-promote"]},"io-upload-iframe":{requires:["io-base","node-base"]},"io-xdr":{requires:["io-base","datatype-xml-parse"]},json:{use:["json-parse","json-stringify"]},"json-parse":{requires:["yui-base"]},"json-parse-shim":{condition:{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"},requires:["json-parse"]},"json-stringify":{requires:["yui-base"]},"json-stringify-shim":{condition:{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"},requires:["json-stringify"]},jsonp:{requires:["get","oop"]},"jsonp-url":{requires:["jsonp"]},"lazy-model-list":{requires:["model-list"]},loader:{use:["loader-base","loader-rollup","loader-yui3"]},"loader-base":{requires:["get","features"]},"loader-rollup":{requires:["loader-base"]},"loader-yui3":{requires:["loader-base"]},matrix:{requires:["yui-base"]},model:{requires:["base-build","escape","json-parse"]},"model-list":{requires:["array-extras","array-invoke","arraylist","base-build","escape","json-parse","model"]},"model-sync-rest":{requires:["model","io-base","json-stringify"]},node:{use:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"]},"node-base":{requires:["event-base","node-core"
,"dom-base"]},"node-core":{requires:["dom-core","selector"]},"node-deprecated":{requires:["node-base"]},"node-event-delegate":{requires:["node-base","event-delegate"]},"node-event-html5":{requires:["node-base"]},"node-event-simulate":{requires:["node-base","event-simulate","gesture-simulate"]},"node-flick":{requires:["classnamemanager","transition","event-flick","plugin"],skinnable:!0},"node-focusmanager":{requires:["attribute","node","plugin","node-event-simulate","event-key","event-focus"]},"node-load":{requires:["node-base","io-base"]},"node-menunav":{requires:["node","classnamemanager","plugin","node-focusmanager"],skinnable:!0},"node-pluginhost":{requires:["node-base","pluginhost"]},"node-screen":{requires:["dom-screen","node-base"]},"node-scroll-info":{requires:["array-extras","base-build","event-resize","node-pluginhost","plugin","selector"]},"node-style":{requires:["dom-style","node-base"]},oop:{requires:["yui-base"]},overlay:{requires:["widget","widget-stdmod","widget-position","widget-position-align","widget-stack","widget-position-constrain"],skinnable:!0},paginator:{requires:["paginator-core"]},"paginator-core":{requires:["base"]},"paginator-url":{requires:["paginator"]},panel:{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:!0},parallel:{requires:["yui-base"]},pjax:{requires:["pjax-base","pjax-content"]},"pjax-base":{requires:["classnamemanager","node-event-delegate","router"]},"pjax-content":{requires:["io-base","node-base","router"]},"pjax-plugin":{requires:["node-pluginhost","pjax","plugin"]},plugin:{requires:["base-base"]},pluginhost:{use:["pluginhost-base","pluginhost-config"]},"pluginhost-base":{requires:["yui-base"]},"pluginhost-config":{requires:["pluginhost-base"]},promise:{requires:["timers"]},querystring:{use:["querystring-parse","querystring-stringify"]},"querystring-parse":{requires:["yui-base","array-extras"]},"querystring-parse-simple":{requires:["yui-base"]},"querystring-stringify":{requires:["yui-base"]},"querystring-stringify-simple":{requires:["yui-base"]},"queue-promote":{requires:["yui-base"]},"range-slider":{requires:["slider-base","slider-value-range","clickable-rail"]},recordset:{use:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"]},"recordset-base":{requires:["base","arraylist"]},"recordset-filter":{requires:["recordset-base","array-extras","plugin"]},"recordset-indexer":{requires:["recordset-base","plugin"]},"recordset-sort":{requires:["arraysort","recordset-base","plugin"]},resize:{use:["resize-base","resize-proxy","resize-constrain"]},"resize-base":{requires:["base","widget","event","oop","dd-drag","dd-delegate","dd-drop"],skinnable:!0},"resize-constrain":{requires:["plugin","resize-base"]},"resize-plugin":{optional:["resize-constrain"],requires:["resize-base","plugin"]},"resize-proxy":{requires:["plugin","resize-base"]},router:{optional:["querystring-parse"],requires:["array-extras","base-build","history"]},scrollview:{requires:["scrollview-base","scrollview-scrollbars"]},"scrollview-base":{requires:["widget","event-gestures","event-mousewheel","transition"],skinnable:!0},"scrollview-base-ie":{condition:{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"},requires:["scrollview-base"]},"scrollview-list":{requires:["plugin","classnamemanager"],skinnable:!0},"scrollview-paginator":{requires:["plugin","classnamemanager"]},"scrollview-scrollbars":{requires:["classnamemanager","transition","plugin"],skinnable:!0},selector:{requires:["selector-native"]},"selector-css2":{condition:{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"},requires:["selector-native"]},"selector-css3":{requires:["selector-native","selector-css2"]},"selector-native":{requires:["dom-base"]},"series-area":{requires:["series-cartesian","series-fill-util"]},"series-area-stacked":{requires:["series-stacked","series-area"]},"series-areaspline":{requires:["series-area","series-curve-util"]},"series-areaspline-stacked":{requires:["series-stacked","series-areaspline"]},"series-bar":{requires:["series-marker","series-histogram-base"]},"series-bar-stacked":{requires:["series-stacked","series-bar"]},"series-base":{requires:["graphics","axis-base"]},"series-candlestick":{requires:["series-range"]},"series-cartesian":{requires:["series-base"]},"series-column":{requires:["series-marker","series-histogram-base"]},"series-column-stacked":{requires:["series-stacked","series-column"]},"series-combo":{requires:["series-cartesian","series-line-util","series-plot-util","series-fill-util"]},"series-combo-stacked":{requires:["series-stacked","series-combo"]},"series-combospline":{requires:["series-combo","series-curve-util"]},"series-combospline-stacked":{requires:["series-combo-stacked","series-curve-util"]},"series-curve-util":{},"series-fill-util":{},"series-histogram-base":{requires:["series-cartesian","series-plot-util"]},"series-line":{requires:["series-cartesian","series-line-util"]},"series-line-stacked":{requires:["series-stacked","series-line"]},"series-line-util":{},"series-marker":{requires:["series-cartesian","series-plot-util"]},"series-marker-stacked":{requires:["series-stacked","series-marker"]},"series-ohlc":{requires:["series-range"]},"series-pie":{requires:["series-base","series-plot-util"]},"series-plot-util":{},"series-range":{requires:["series-cartesian"]},"series-spline":{requires:["series-line","series-curve-util"]},"series-spline-stacked":{requires:["series-stacked","series-spline"]},"series-stacked":{requires:["axis-stacked"]},"shim-plugin":{requires:["node-style","node-pluginhost"]},slider:{use:["slider-base","slider-value-range","clickable-rail","range-slider"]},"slider-base":{requires:["widget","dd-constrain","event-key"],skinnable:!0},"slider-value-range":{requires:["slider-base"]},sortable:{requires:["dd-delegate","dd-drop-plugin","dd-proxy"
]},"sortable-scroll":{requires:["dd-scroll","sortable"]},stylesheet:{requires:["yui-base"]},substitute:{optional:["dump"],requires:["yui-base"]},swf:{requires:["event-custom","node","swfdetect","escape"]},swfdetect:{requires:["yui-base"]},tabview:{requires:["widget","widget-parent","widget-child","tabview-base","node-pluginhost","node-focusmanager"],skinnable:!0},"tabview-base":{requires:["node-event-delegate","classnamemanager"]},"tabview-plugin":{requires:["tabview-base"]},template:{use:["template-base","template-micro"]},"template-base":{requires:["yui-base"]},"template-micro":{requires:["escape"]},test:{requires:["event-simulate","event-custom","json-stringify"]},"test-console":{requires:["console-filters","test","array-extras"],skinnable:!0},text:{use:["text-accentfold","text-wordbreak"]},"text-accentfold":{requires:["array-extras","text-data-accentfold"]},"text-data-accentfold":{requires:["yui-base"]},"text-data-wordbreak":{requires:["yui-base"]},"text-wordbreak":{requires:["array-extras","text-data-wordbreak"]},timers:{requires:["yui-base"]},transition:{requires:["node-style"]},"transition-timer":{condition:{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"},requires:["transition"]},tree:{requires:["base-build","tree-node"]},"tree-labelable":{requires:["tree"]},"tree-lazy":{requires:["base-pluginhost","plugin","tree"]},"tree-node":{},"tree-openable":{requires:["tree"]},"tree-selectable":{requires:["tree"]},"tree-sortable":{requires:["tree"]},uploader:{requires:["uploader-html5","uploader-flash"]},"uploader-flash":{requires:["swf","widget","base","cssbutton","node","event-custom","file-flash","uploader-queue"]},"uploader-html5":{requires:["widget","node-event-simulate","file-html5","uploader-queue"]},"uploader-queue":{requires:["base"]},view:{requires:["base-build","node-event-delegate"]},"view-node-map":{requires:["view"]},widget:{use:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]},"widget-anim":{requires:["anim-base","plugin","widget"]},"widget-autohide":{requires:["base-build","event-key","event-outside","widget"]},"widget-base":{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0},"widget-base-ie":{condition:{name:"widget-base-ie",trigger:"widget-base",ua:"ie"},requires:["widget-base"]},"widget-buttons":{requires:["button-plugin","cssbutton","widget-stdmod"]},"widget-child":{requires:["base-build","widget"]},"widget-htmlparser":{requires:["widget-base"]},"widget-locale":{requires:["widget-base"]},"widget-modality":{requires:["base-build","event-outside","widget"],skinnable:!0},"widget-parent":{requires:["arraylist","base-build","widget"]},"widget-position":{requires:["base-build","node-screen","widget"]},"widget-position-align":{requires:["widget-position"]},"widget-position-constrain":{requires:["widget-position"]},"widget-skin":{requires:["widget-base"]},"widget-stack":{requires:["base-build","widget"],skinnable:!0},"widget-stdmod":{requires:["base-build","widget"]},"widget-uievents":{requires:["node-event-delegate","widget-base"]},yql:{requires:["oop"]},"yql-jsonp":{condition:{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql",when:"after"},requires:["jsonp","jsonp-url"]},"yql-nodejs":{condition:{name:"yql-nodejs",trigger:"yql",ua:"nodejs",when:"after"}},"yql-winjs":{condition:{name:"yql-winjs",trigger:"yql",ua:"winjs",when:"after"}},yui:{},"yui-base":{},"yui-later":{requires:["yui-base"]},"yui-log":{requires:["yui-base"]},"yui-throttle":{requires:["yui-base"]}}),YUI.Env[e.version].md5="b48f48e0499b41d980deaefd4100d336"},"3.11.0",{requires:["loader-base"]}),YUI.add("yui",function(e,t){},"3.11.0",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]});



// <head> block 5
page_timing.seed_fetch_end = new Date().getTime();

// <head> block 6
page_timing.head_js_end = new Date().getTime();

// <head> block 7
page_timing.head_css_start = new Date().getTime();

// <head> block 8
page_timing.head_css_end = new Date().getTime();

// <head> block 9
page_timing.head_end = new Date().getTime();

// <body> block 1
(function(){var b=document.body,ua=typeof YUI==='function'&&YUI()&&YUI().UA,os=ua&&(ua.os?ua.os.replace(/\s/g,''):'')||(ua.ios?'ios':'')||(ua.android?'android':'');function make_class(browser){return(os&&ua[browser])?'ua-'+os+'-'+browser+' '+'ua-'+os+'-'+browser+'-'+Math.floor(ua[browser]):'';} b.className=[b.className,'js',make_class('webkit')||make_class('ie')||make_class('gecko')].join(' ');}());

// <body> block 2
page_timing.body_start = new Date().getTime();

// <body> block 3
// %%% Not sure if this has any function, but Closure botches it.
//('<a href="/enfnl">')

// <body> block 4
	/*jslint white: false, undef: false, browser: true, eqeqeq: true, regexp: false, newcap: true, immed: true, onevar: false, plusplus: false */
/*global F: false, YUI: false, window: false */ 

(function(F){var OFFSETS={GLOBAL_NAV:null,UNIVERSAL_HEADER:null};function alignToAnchor(anchor,preventDelay){var delay=(!preventDelay&&document.documentMode)?800:50;var elt=document.getElementById(anchor)||document.getElementsByName(anchor)[0];if(elt){setTimeout(function(){var destination=elt.offsetTop,origPosition=elt.style.position;if(F.util.hasClass(document.body,'header-underlap')){destination-=OFFSETS.GLOBAL_NAV;} if(F.util.hasClass(document.body,'with-eyebrow')){destination-=OFFSETS.UNIVERSAL_HEADER;} if(!origPosition){elt.style.position='relative';destination=Math.max(destination,elt.offsetTop-destination);elt.style.position=origPosition;} window.scrollTo(0,destination);},delay);}} function normalizeAnchor(){var anchor=document.location.hash;if(anchor[0]==='#'){anchor=anchor.replace('#','');} return anchor;} function handleEvent(elt,eventName,handler,useCapture){useCapture=useCapture||false;if(elt.addEventListener){elt.addEventListener(eventName,handler,useCapture);}else if(elt.attachEvent){elt.attachEvent('on'+eventName,handler);}} F.anchorRepositioner={init:function(){F.util.whenElementExists('global-nav',function(nav){OFFSETS.GLOBAL_NAV=nav.offsetHeight;});F.util.whenElementExists('eyebrow',function(eyebrow){OFFSETS.UNIVERSAL_HEADER=eyebrow.offsetHeight;});var pageLoadAnchor=normalizeAnchor();if(pageLoadAnchor){handleEvent(document,'DOMContentLoaded',function(){alignToAnchor(pageLoadAnchor);});} handleEvent(window,'hashchange',function(e){if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;} var anchor=normalizeAnchor();alignToAnchor(anchor);},true);}};}(F));	F.anchorRepositioner.init();

// <body> block 5
			/*jslint white: false, undef: false, browser: true, eqeqeq: true, regexp: false, newcap: true, immed: true, onevar: false, plusplus: false */
/*global F: false, YUI: false, window: false */

(function(F) {
	var useNewExplore =  false ,
    	    useEyebrow = true,
	    HEIGHT_TO_PHOTO_TOP = 71,
    	    savingThrowAgainstTrailingCommas = true;
 
            var NEW_PHOTO_HEIGHT;
    var MIN_PAGE_WIDTH=1024,MIN_PAGE_HEIGHT=768,MIN_PHOTO_WIDTH=975,SCROLLBAR_GUTTER=26,PHOTO_INTERIOR_PADDING_TOP=0,PHOTO_INTERIOR_PADDING_SIDES=10,PHOTO_TITLE_HEIGHT=41,PHOTO_ATTRIBUTION_HEIGHT=NEW_PHOTO_HEIGHT||45;var bodyInitialized=false,subnavDefaultWidth=0;function verifyDimension(n){return(typeof n==='number'&&n>0);} function resizeCoverPhoto(subnav){var main=F.util.getElementById('main')||F.util.getElementById('Main');if(F.util.hasClass(document.body,'breakout')){subnav.style.left=0;subnav.style.width='auto';return;} if(!subnavDefaultWidth){subnavDefaultWidth=main.offsetWidth;} var clientWidth=document.body.clientWidth;if(clientWidth<975){return;} var offset=Math.ceil((clientWidth-subnavDefaultWidth)/2);subnav.style.left=(-1*offset)+'px';subnav.style.width=clientWidth+'px';} F.liquid={getDimensions:function(preventHighResolution){var doc=window.document,win=doc.defaultView||doc.parentWindow,mode=doc.compatMode,h=win.innerHeight,w=win.innerWidth,root=doc.documentElement,preventHighResolution=preventHighResolution||false,pixelRatio=preventHighResolution?1:(window.devicePixelRatio||1);if(mode){if(mode!=='CSS1Compat'){root=doc.body;} h=root.clientHeight;w=root.clientWidth;} h*=pixelRatio;w*=pixelRatio;if(verifyDimension(w)&&verifyDimension(h)){return{height:h,width:w,isHighResolution:(pixelRatio>1)};} return false;},getAvailableSpaceForPhoto:function(){var dimensions,pixelRatio=window.devicePixelRatio||1;dimensions=F.liquid.getDimensions()||{width:MIN_PAGE_WIDTH,height:MIN_PAGE_HEIGHT};return{w:Math.max(dimensions.width-(2*pixelRatio*PHOTO_INTERIOR_PADDING_SIDES),pixelRatio*MIN_PHOTO_WIDTH),h:dimensions.height-(pixelRatio*(HEIGHT_TO_PHOTO_TOP+PHOTO_INTERIOR_PADDING_TOP+PHOTO_TITLE_HEIGHT+PHOTO_ATTRIBUTION_HEIGHT))};},getAvailableSpaceForPhotoContainer:function(){var dimensions,pixelRatio=window.devicePixelRatio||1;dimensions=F.liquid.getDimensions()||{width:MIN_PAGE_WIDTH,height:MIN_PAGE_HEIGHT};dimensions.width/=pixelRatio;dimensions.height/=pixelRatio;return{w:dimensions.width,h:dimensions.height-HEIGHT_TO_PHOTO_TOP-PHOTO_ATTRIBUTION_HEIGHT};},resizePage:function(){var pageDimensions=F.liquid.getDimensions(true),pageWidth=pageDimensions.width,pageHeight=pageDimensions.height-HEIGHT_TO_PHOTO_TOP;F.util.setCookie('liqpw',pageWidth,365);F.util.setCookie('liqph',pageHeight,365);if(!bodyInitialized){F.util.whenElementExists('body',function(body){F.util.addClass(body,'liquid');bodyInitialized=true;});} F.util.whenElementExists('subnav-refresh',function(subnav){resizeCoverPhoto(subnav);});return pageWidth;}};}(F));		F.liquid.resizePage();
	
// <body> block 6
// %%% Not sure if this has any function, but Closure botches it.
//('<a href="/enfnl">')

// <body> block 7

	(function() {
					page_timing.js_assets_start = new Date().getTime();
				

	
		
	
F.intl = 'en-us';

var yconf = {"flickr":{"is_secure":true,"flags":{"enable_grease":true,"enable_advanced_gestures":true,"enable_advanced_gestures_lightbox":true,"enable_desktop_lightbox_retina_images":true,"enable_fave_keyboard_shortcut":true,"enable_sets_keyboard_shortcut":true,"enable_faves_manage":true,"enable_galleries_context":true,"enable_rapid_tracking":true,"enable_groups_keyboard_shortcut":true,"enable_gallery_keyboard_shortcut":true,"enable_addperson_keyboard_shortcut":true,"enable_tags_keyboard_shortcut":true,"enable_comments_keyboard_shortcut":true,"enable_sitekey_fetcher":true,"enable_keyboard_shortcut_legend":true,"enable_keyboard_shortcut_legend_keyboard_layouts":true,"enable_keyboard_shortcuts":true,"enable_faves_page_flanal":true,"enable_viewing_party_ie9_support_messages":true,"enable_facebook_2":true,"enable_touch_lightbox_searchified":true,"enable_tag_selecta_photogne":true,"enable_tag_selecta_uploadr":true,"enable_exif_thumbs":true,"enable_justified_search":true,"enable_retina_justified":true,"aviary_photo_editing":true,"enable_jsfail_detection":true,"enable_farm_timing_sampling":true,"enable_high_res_pref":true,"enable_liquid_everything":true,"enable_justified_explore":true,"enable_account_order_redesign":true,"enable_global_nav":true,"enable_ywa_rapid":true,"enable_photopage_perf":true,"enable_homerun_navtiming_beacon":true,"enable_uh_eyebrow":true,"enable_2013_photo_page":true,"enable_2013_photo_page_extras":true,"enable_ken_burns":true,"enable_ken_burns_face":true,"enable_hermes_sihp_fb_friendfinder":true,"enable_hermes_sihp_deferred_sidebar":true,"enable_refresh_sihp_feed_ads":true,"enable_justified_inline_ads":true,"enable_justified_view_inline_commenting":true,"enable_justified_groups":true,"enable_sihp_viewcount":true,"enable_photostream_viewcount":true,"enable_n_to_ldrb_ads":true,"enable_follow_theme":true,"enable_group_post_beta":true,"enable_ads_on_login_page":1,"enable_playr":true,"enable_merch_from_organizr":true,"enable_set_to_album_change":true,"enable_https_api":true,"enable_client_fullpath_api":true},"formatting":{"thousandsSeparator":",","decimalSeparator":"."},"farm_samples":{"f1":4,"f2":5,"f3":15,"f4":20,"f5":20,"f6":20,"f7":20,"f8":70,"f9":20,"f10":20},"is_zeus":true,"justified_row_height":330,"lang":"en-us","photo_root":"http:\/\/farm.staticflickr.com\/","site_root":"https:\/\/www.flickr.com","images_root":"https:\/\/s.yimg.com\/pw\/images","intl_images_root":"https:\/\/s.yimg.com\/pw\/images\/en-us","int2lang":{"1":"en-us","2":"fr-fr","3":"es-us","4":"de-de","5":"it-it","6":"pt-br","7":"ko-kr","9":"zh-hk","13":"vn-vn","14":"id-id"},"search":{"textsearch_enabled":true,"search_scope":"all"},"photos":[],"contact_limit":3000,"server_timestamp":1403991700,"magic_cookie":"66c91cbd0168f56e750b04b8a8532dc0","filmstrips":{"preload_page_count":2,"photos_per_page":4,"container":"#sidebar"},"notes":{"can_add_note":false,"can_add_person":false,"ratio":0,"count":0,"max_count":100},"video_player_version":"145061","lightbox":{"enable":false,"enable_faves":true,"enable_comments":true,"enable_favorites_count":true,"node_prune_threshold":50,"node_prune_amount":10,"position_preload_limit":10,"position_preload_threshold":5,"image_preload_limit":2,"hd_default":false,"video_autoplay":true,"enable_mobile_lightbox":true,"enable_mobile_lightbox_pinch_zoom":true,"enable_fullscreen":true,"spaceid":792600515,"biggering_2013":true},"max_photo_ids_per_api_call":20,"flickr_api_uri_direct":"https:\/\/api.flickr.com\/services\/rest\/","host_ip":"127.0.0.1","radjax_endpoint":"https:\/\/y-flickr.yahoo.com\/ad","static_domain":"staticflickr.com","user":{"user_ok":false,"useragent_fully_supported":true,"useragent_reboot_supported":true,"enable_alternate_map_type":4},"printing":{"use_printcart":true,"snapfish_cart_url":"http:\/\/www.snapfish.com\/flickrentry\/"},"sharing":[],"nav_selecta":{"additional_sections":[{"name":"Terms of Use","sectionType":"text","url":"\/help\/terms\/"},{"name":"Your Privacy","sectionType":"text","url":"\/help\/privacy-policy\/"},{"name":"Copyright\/IP Policy","sectionType":"text","url":"https:\/\/info.yahoo.com\/legal\/us\/yahoo\/copyright\/en-us\/"}]},"people":{"api_url":"","can_only_add_self":true},"tags":{"api_url":""},"iphone_app_store_url":"https:\/\/itunes.apple.com\/app\/flickr\/id328407587"},"flickrAPI":{"flickr_api_uri":"https:\/\/api.flickr.com\/services\/rest","api_key":"ef9e901d328e2bbdba75f7fb89142cad","auth_hash":"66c91cbd0168f56e750b04b8a8532dc0","auth_token":"","secret":"be7b59a897ae3044"},"flickrMap":{"generatedInYconf":true,"enable_alternate_tiles_plugin":1},"yui2":"2.5.2","loadOptional":false,"combine":true,"root":"","base":"https:\/\/s.yimg.com\/pw\/combo\/1\/3.11.0?","comboBase":"https:\/\/s.yimg.com\/pw\/combo\/1\/3.11.0?","workerBase":"\/combo\/1\/3.11.0?","maxURLLength":1999,"dev":false,"debug":false,"modules":{"account-manage":{"path":"j\/.IR-manage.A.v29oKK","requires":["flickr-dialog","io-base","sprintf","yui-base"],"ext":false},"account-order-transjax":{"path":"j\/.IR-.JM-.C-.F.A.v24XRK","requires":["transjax-base","yui-base"],"ext":false},"account-order-ywa-tracking":{"path":"j\/.IR-.JM-ywa-.BW.A.v24uvx","requires":["event","datatype-date-format","yahoo-web-analytics","yui-base"],"ext":false},"account-order-manage-ywa-tracking":{"path":"j\/.IR-.JM-manage-ywa-.BW.A.v24M3a","requires":["event","datatype-date-format","yahoo-web-analytics","yui-base"],"ext":false},"account-order-zeus":{"path":"j\/.IR-.JM-.D.A.v257qi","requires":["account-order-transjax","io-base","sprintf","yui-base"],"ext":false},"account-refund":{"path":"j\/.IR-refund.A.v29WC2","requires":["flickr-dialog","io-base","rapid-tracker","sprintf","yui-base"],"ext":false},"account-rules":{"path":"j\/.IR-rules.A.vY7V8","requires":["dd-constrain","dd-drop","dd-proxy","event","flickr-dialog-confirmation","gallery-flickr-api","node","yui-base"],"ext":false},"account-upgrade":{"path":"j\/.IR-upgrade.A.v2agwz","requires":["flickr-dialog","io-base","rapid-tracker","sprintf","yui-base"],"ext":false},"actions-menu-css":{"path":"c\/c_.IS-.BB.BC.v27yEi","type":"css","ext":false},"ad-masker":{"path":"j\/ad-masker.A.v23TBp","requires":["node","page-context","yui-base"],"ext":false},"add-to-dialog-css":{"path":"c\/c_.KQ.W-.D.BC.v27yEi","type":"css","ext":false},"addressbook":{"path":"j\/.HE.A.v2h6HT","requires":["better-throttle","event","gallery-flickr-api","io","node","yui-base"],"ext":false},"autocomplete-2-5-1":{"path":"j\/.CM\/.BA_2.5.1-.D.A.vPzuD","requires":["yui2-datasource","yui2-dom","yui2-event","yui2-yahoo"],"ext":false},"autosuggest":{"path":"j\/autosuggest.A.v2hRmV","requires":["promise","oop","base","querystring-stringify-simple","text-accentfold","template-base","handlebars-base","autocomplete","io","node","yui-base"],"ext":false},"aviary-editor-frame-css":{"path":"c\/c_aviary-.GZor-.JW.BC.v27yEi","type":"css","ext":false},"aviary-editor-frame-transjax":{"path":"j\/aviary-.GZor-.JW-.C-.F.A.v22w9M","requires":["transjax-base","yui-base"],"ext":false},"aviary-editor-frame":{"path":"j\/aviary-.GZor-.JW.A.v2eZMt","requires":["base","aviary-editor-frame-css","aviary-editor-frame-transjax","event","flickr-dialog-frame","flickr-dialog-spinner","yui-base"],"ext":false},"batchr-photo-privacy":{"path":"j\/batchr-.B-privacy.A.v27wnx","requires":["batchr-photo-privacy-transjax","flickr-dialog","gallery-flickr-api","yui-base"],"ext":false},"batchr-photo-privacy-transjax":{"path":"j\/batchr-.B-privacy-.C-.F.A.v27ydr","requires":["transjax-base","yui-base"],"ext":false},"beehive-contact-suggestions":{"path":"j\/.IT-.FF-.IL.A.v2h6HT","requires":["anim","beehive-contact-suggestions-transjax","contact-changer","gallery-flickr-api","node","yui-base"],"ext":false},"beehive-contact-suggestions-transjax":{"path":"j\/.IT-.FF-.IL-.C-.F.A.v2d5xK","requires":["transjax-base","yui-base"],"ext":false},"better-throttle":{"path":"j\/.EH-.EB.A.vWJ4t","requires":["yui-base","yui-later"],"ext":false},"bitmap-text":{"path":"j\/.Z-.DK-.D.A.vLQEz","requires":["yui-base"],"ext":false},"bitmap-type-silkscreen":{"path":"j\/.Z-.DJ-.BJ.A.vLQEz","requires":["yui-base"],"ext":false},"boomerang":{"path":"j\/.JK.A.v2gujr","requires":["yui-base"],"ext":false},"box-host":{"path":"j\/box-.DG.A.v23NN6","requires":["event-mousedrag","math","node","yui-base"],"ext":false},"bo-selecta":{"path":"j\/.HO-.D.A.v2fchH","requires":["anim","autocomplete-2-5-1","bo-selecta-css","bo-selecta-transjax","event","event-custom","gallery-flickr-api","io-base","node","string-filters","yui-base"],"ext":false},"bo-selecta-3":{"path":"j\/.HO-3.A.v2fchH","requires":["anim","autocomplete","bo-selecta-3-css","bo-selecta-global-search-datasource","bo-selecta-transjax","datasource-function","event","event-custom","gallery-flickr-api","image-fader","io-base","node","string-filters","widget","yui-base"],"optional":["contact-changer"],"ext":false},"bo-selecta-css":{"path":"c\/c_.HO-.D.BC.v27yEi","type":"css","ext":false},"bo-selecta-3-css":{"path":"c\/c_.HO-3.BC.v223Nz","type":"css","ext":false},"bo-selecta-global-search-datasource":{"path":"j\/.HO-.X-.CA-.BYsource.A.v22NwM","requires":["bo-selecta-transjax","datasource-local","gallery-flickr-api","yui-base"],"ext":false},"bo-selecta-transjax":{"path":"j\/.HO-.C-.F.A.vT2e8","requires":["transjax-base","yui-base"],"ext":false},"cache-simple":{"path":"j\/.EJ-.GK.A.vS6oH","requires":["yui-base"],"ext":false},"ccv":{"path":"j\/ccv.A.v2aNJV","requires":["yui-base"],"ext":false},"comscore":{"path":"j\/.JN.A.v22NTt","ext":false},"contact-changer":{"path":"j\/.FF-.FG-.D.A.v2dJTT","requires":["contact-changer-css","contact-changer-transjax","refresh-sihp-transjax","event-custom","event-delegate","gallery-flickr-api","global-dialog","io-base","yui-base"],"ext":false},"contact-changer-css":{"path":"c\/c_.FF-.FG-.D.BC.v27yEi","type":"css","ext":false},"contact-changer-transjax":{"path":"j\/.FF-.FG-.C-.F.A.vLpue","requires":["transjax-base","yui-base"],"ext":false},"context-data":{"path":"j\/.H-.BY.A.v2b4dz","requires":["event-custom","gallery-flickr-api","photo-data","urls","yui-base"],"ext":false},"cookie-crusher":{"path":"j\/.CK-crusher.A.v2ftc8","requires":["cookie"],"ext":false},"dataview":{"path":"j\/.BY.JB.A.v23Hgp","requires":["yui-base"],"ext":false},"date-widgets":{"path":"j\/.HB-.EZs.A.v26Knc","requires":["yui-base"],"optional":["datatype-date","event","gallery-calendar","node"],"ext":false},"defer-images":{"path":"j\/.GI-.GC.A.v2apUM","requires":["node-visibility","retry-image-on-error","yui-base"],"ext":false},"dejaview":{"path":"j\/.BZ-.D.A.vNstX","requires":["cookie","yui-base"],"ext":false},"discussion-comments":{"path":"j\/discussion-.LGs.A.v25RaB","requires":["event","node","yui-base"],"ext":false},"donut-progress-ui":{"path":"j\/donut.ID-ui.A.v23YW2","requires":["yui-base"],"ext":false},"dynamic-messaging":{"path":"j\/dynamic-messaging.A.v26PTg","requires":["io-form","gallery-flickr-api","message-primary-email-transjax","transjax-base","yui-base"],"ext":false},"editr":{"path":"j\/.GZr.A.v2gujr","requires":["boomerang","editr-edit-panel","editr-errors","editr-grid","editr-progress","editr-publish-dialog","editr-toolbar","event-base","feature-tour","health-check","gallery-popover","page-context","polyfills-placeholder","yui-base"],"optional":["editr-file-picker","editr-photo-picker","editr-upload-queue","flickr-dialog"],"ext":false},"editr-blocked":{"path":"j\/.GZr-blocked.A.v29set","requires":["cookie","yui-base"],"ext":false},"editr-data-base":{"path":"j\/.KA.BL.A.v24Yqv","requires":["array-extras","event-custom","yui-base"],"ext":false},"editr-data-groups":{"path":"j\/.KA.DMs.A.v2fcjr","requires":["editr-data-photos","editr-data-base","type-cast","yui-base"],"ext":false},"editr-data-people":{"path":"j\/.KA.L.A.vZXGe","requires":["editr-data-base","type-cast","yui-base"],"ext":false},"editr-data-photos":{"path":"j\/.KA.EC.A.v265HP","requires":["editr-data-base","type-cast","yui-base"],"ext":false},"editr-data-sets":{"path":"j\/.KA.KF.A.v2fcjr","requires":["editr-data-photos","editr-data-base","escape","type-cast","yui-base"],"ext":false},"editr-edit-panel":{"path":"j\/.GZr-.GZ.IC.A.v26TFX","requires":["better-throttle","editr-data-photos","editr-edit-panel-tooltip","editr-edit-panel-groups","editr-edit-panel-owner-settings","editr-edit-panel-people","editr-edit-panel-sets","editr-edit-panel-tags","editr-edit-panel-title-description","editr-edit-panel-transjax","editr-grid","event-base","substitute","string-filters","yui-base"],"ext":false},"editr-edit-panel-component":{"path":"j\/.JZ.JY.A.v22jGZ","requires":["event-base","keyboard-shortcut-manager","yui-base"],"ext":false},"editr-edit-panel-groups":{"path":"j\/.JZ.DMs.A.v26THF","requires":["editr-data-photos","editr-data-groups","editr-edit-panel-tooltip","editr-edit-panel-transjax","event-base","flickr-dialog","keyboard-shortcut-manager","string-filters","yui-base"],"ext":false},"editr-edit-panel-location":{"path":"j\/.JZ.BR.A.v21Czp","requires":["editr-data-photos","editr-edit-panel-component","editr-edit-panel-transjax","yui-base"],"ext":false},"editr-edit-panel-owner-settings":{"path":"j\/.JZ.BK-.FR.A.v2hvQa","requires":["editr-data-photos","editr-edit-panel-component","editr-edit-panel-transjax","yui-base"],"optional":["date-widgets"],"ext":false},"editr-edit-panel-people":{"path":"j\/.JZ.L.A.v22Aja","requires":["bo-selecta-3","editr-data-people","editr-data-photos","editr-edit-panel-component","editr-edit-panel-transjax","event-base","flickr-dialog","photo-keyboard-shortcuts-transjax","photo-people-transjax","string-filters","yui-base"],"ext":false},"editr-edit-panel-sets":{"path":"j\/.JZ.KF.A.v2dBy2","requires":["editr-data-photos","editr-data-sets","editr-edit-panel-tooltip","editr-edit-panel-transjax","event-base","flickr-dialog","keyboard-shortcut-manager","string-filters","yui-base"],"ext":false},"editr-edit-panel-tags":{"path":"j\/.JZ.KD.A.v268bV","requires":["editr-data-photos","editr-edit-panel-transjax","event-base","tag-selecta","yui-base"],"ext":false},"editr-edit-panel-title-description":{"path":"j\/.JZ.KB-.KC.A.v23Cvx","requires":["better-throttle","editr-data-photos","editr-edit-panel-transjax","event-base","focus-tracker","yui-base"],"ext":false},"editr-edit-panel-tooltip":{"path":"j\/.JZ.JT.A.v268dD","requires":["editr-edit-panel-tooltip-css","editr-edit-panel-tooltip-transjax","escape","event-base","gallery-popover","yui-base"],"ext":false},"editr-edit-panel-tooltip-css":{"path":"c\/c_.JZ.JT.BC.v27yEi","type":"css","ext":false},"editr-edit-panel-tooltip-transjax":{"path":"j\/.JZ.JT-.C-.F.A.v24uoD","requires":["transjax-base","yui-base"],"ext":false},"editr-edit-panel-transjax":{"path":"j\/.JZ.C-.F.A.v2fKfa","requires":["transjax-base","yui-base"],"ext":false},"editr-errors":{"path":"j\/.GZr-.JPs.A.v23yma","requires":["editr-data-photos","yui-base"],"ext":false},"editr-exif":{"path":"j\/.GZr-.GO.A.v24UaX","requires":["editr-data-photos","exif-thumbnail-extractor","datatype-xml","worker","yui-base"],"ext":false},"editr-file-picker":{"path":"j\/.GZr-.KG.A.v2gqKx","requires":["datatype","editr-data-photos","editr-exif","editr-file-picker-transjax","editr-progress","flickr-dialog","gallery-flickr-api","health-check","md5","string-filters","uploader","yui-base"],"ext":false},"editr-file-picker-transjax":{"path":"j\/.GZr-.KG-.C-.F.A.v2gqHP","requires":["transjax-base","yui-base"],"ext":false},"editr-grid":{"path":"j\/.KJ.A.v2dnsM","requires":["editr-data-photos","editr-grid-external-events","editr-grid-form-handler","editr-grid-item","editr-grid-key-monitor","editr-grid-marquee","editr-grid-progress-handler","editr-grid-selection","editr-grid-selection-ui","editr-grid-transjax","editr-grid-user-messaging","event-custom","editr-zoom","editr-errors","flickr-dialog","focus-tracker","gallery-popover","menus","yui-base"],"optional":["editr-upload-queue"],"ext":false},"editr-grid-external-events":{"path":"j\/.KJ-.KK-.Gs.A.v2dnsM","requires":["editr-grid","yui-base"],"ext":false},"editr-grid-form-handler":{"path":"j\/.KJ-.KL.A.v24zi8","requires":["editr-grid","yui-base"],"ext":false},"editr-grid-item":{"path":"j\/.KJ-item.A.v2eQf2","requires":["editr-grid","yui-base"],"ext":false},"editr-grid-key-monitor":{"path":"j\/.KJ-.KM.A.v24uoD","requires":["editr-grid","keyboard-shortcut-manager","yui-base"],"ext":false},"editr-grid-marquee":{"path":"j\/.KJ-marquee.A.v24uoD","requires":["editr-grid","yui-base"],"ext":false},"editr-grid-progress-handler":{"path":"j\/.KJ.ID-handler.A.v28ptk","requires":["editr-grid","editr-publish-dialog","transjax-base","yui-base"],"ext":false},"editr-grid-selection":{"path":"j\/.KJ-.KN.A.v24zi8","requires":["editr-grid","yui-base"],"ext":false},"editr-grid-selection-ui":{"path":"j\/.KJ-.KN-ui.A.v24zi8","requires":["editr-grid","transjax-base","yui-base"],"ext":false},"editr-grid-transjax":{"path":"j\/.KJ-.C-.F.A.v25krt","requires":["transjax-base","yui-base"],"ext":false},"editr-grid-user-messaging":{"path":"j\/.KJ-.KO.A.v24uoD","requires":["editr-grid","editr-errors","yui-base"],"ext":false},"editr-photo-picker":{"path":"j\/.GZr-.B-picker.A.vZW9z","requires":["editr-data-photos","flickr-dialog-spinner","flickr-geo","gallery-flickr-api","yui-base"],"ext":false},"editr-progress":{"path":"j\/.GZr.ID.A.v24b7i","requires":["better-throttle","event-base","event-custom","yui-base"],"ext":false},"editr-publish-dialog":{"path":"j\/.GZr-.KE-.W.A.v2gmyr","requires":["editr-progress","editr-publisher","editr-publisher-transjax","editr-upload-queue","event-base","event-custom","flickr-dialog","gallery-flickr-api","health-check","yui-base"],"optional":["flanal"],"ext":false},"editr-publisher":{"path":"j\/.GZr-.KEer.A.v29tQz","requires":["editr-data-people","editr-data-photos","editr-data-sets","editr-errors","editr-publisher-transjax","editr-upload-queue","event-base","event-custom","flickr-dialog","gallery-flickr-api","health-check","yui-base"],"ext":false},"editr-publisher-transjax":{"path":"j\/.GZr-.KEer-.C-.F.A.v2hswM","requires":["transjax-base","yui-base"],"ext":false},"editr-secret-about-box":{"path":"j\/.GZr-secret-about-box.A.v25WMt","requires":["event","node","page-context","yui-base"],"ext":false},"editr-toolbar":{"path":"j\/.GZr-.KP.A.v24jZP","requires":["editr-grid","menus","yui-base"],"ext":false},"editr-upload-queue":{"path":"j\/.GZr-.KI-.CT.A.v2gmyr","requires":["editr-data-photos","editr-errors","editr-file-picker","editr-publisher","event-custom","gallery-flickr-api","health-check","json","yui-base"],"optional":["flanal"],"ext":false},"editr-zoom":{"path":"j\/.GZr-zoom.A.v242QZ","requires":["editr-zoom-transjax","editr-data-photos","editr-file-picker","event-base","event-custom","flickr-dialog","node-event-html5","yui-base"],"ext":false},"editr-zoom-transjax":{"path":"j\/.GZr-zoom-.C-.F.A.v24uoD","requires":["transjax-base","yui-base"],"ext":false},"exif-extractor":{"path":"j\/.KU.A.v23Hgp","requires":["exif-extractor-tags","xmp-extractor","yui-base"],"ext":false},"exif-extractor-tags":{"path":"j\/.KU-.KD.A.v21yYM","requires":["yui-base"],"ext":false},"exif-thumbnail-extractor":{"path":"j\/.GO-.IM-.IN.A.vWJd6","requires":["yui-base"],"ext":false},"event-annotations":{"path":"j\/.G-.BD.A.vNHT4","requires":["yui-base"],"ext":false},"event-mousedrag":{"path":"j\/.G-.BO.A.v24EaT","requires":["event-annotations","event-custom-complex","event-synthetic","node","yui-base","yui-throttle"],"ext":false},"face":{"path":"j\/face.A.v296G6","ext":false},"photo-list-model":{"path":"j\/.B-.CZ-.JA.A.v2h3Ei","requires":["gallery-flickr-api","model","murmurhash","photos-list","photo-data","context-data","querystring-stringify-simple","io","yui-base"],"ext":false},"photo-list-view":{"path":"j\/.B-.CZ-.JB.A.v2hREa","requires":["view","handlebars","murmurhash","photos-list","io","flickr-app","lightbox","photos-list-justifier","flickr-dialog-infinite-spinner","better-throttle","rapid-tracker","template-fetcher","yui-base","node-imports","flickr-page-timing","view-count-on-visible"],"ext":false},"explore-hera-view":{"path":"j\/.FP-.LJ.JB.A.v2hREa","requires":["view","datatype-date","murmurhash","handlebars","photo-list-model","photo-list-view","flickr-app-explore","flickr-dialog-infinite-spinner","template-fetcher","gallery-popover","rapid-tracker","io","yui-base"],"ext":false},"search-hera-view":{"path":"j\/.CA-.LJ.JB.A.v2aUbr","requires":["view","datatype-date","murmurhash","handlebars","photo-list-model","photo-list-view","flickr-app-explore","flickr-dialog-infinite-spinner","template-fetcher","gallery-popover","rapid-tracker","io","yui-base"],"ext":false},"photostream-hera-view":{"path":"j\/.ECtream-.LJ.JB.A.v2gCe4","requires":["view","app","datatype-date","murmurhash","handlebars","photo-list-model","photo-list-view","flickr-dialog-infinite-spinner","template-fetcher","gallery-popover","rapid-tracker","io","yui-base"],"ext":false},"fave-star":{"path":"j\/.CX-.CY.A.v295v8","requires":["anim","node","yui-base"],"ext":false},"farm_timing":{"path":"j\/farm_.FZ.A.v23iXF","requires":["node","yui-base","io","event"],"ext":false},"feature-tour":{"path":"j\/.KT-.DA.A.v25VS2","requires":["anim","cookie","dom","event","feature-tour-css","feature-tour-transjax","yui-base"],"ext":false},"feature-tour-css":{"path":"c\/c_.KT-.DA.BC.v27yEi","type":"css","ext":false},"feature-tour-transjax":{"path":"j\/.KT-.DA-.C-.F.A.v22t7V","requires":["transjax-base","yui-base"],"ext":false},"flanal":{"path":"j\/.IU.A.v26U3D","requires":["yui-base"],"optional":["io"],"ext":false},"flapid":{"path":"j\/.JO.A.vT5pB","requires":["gallery-flickr-api","yui-base"],"ext":false},"flickr":{"path":"j\/.J-.D.A.v29EgK","requires":["flickr-app","flickr-tooltips","personmenu","yui-base"],"optional":["gallery-flickr-api","share-this-v3-menu"],"ext":false},"flickr-app":{"path":"j\/.J-app.A.v24yDc","requires":["app-base","yui-base"],"ext":false},"flickr-app-photo":{"path":"j\/.J-app-.B.A.v24xxp","requires":["context-data","flickr-app","photo-data","urls","yui-base"],"optional":["video"],"ext":false},"flickr-app-photostream":{"path":"j\/.J-app-.ECtream.A.v2b2Bt","requires":["context-data","flickr-app","photo-data","template-fetcher","photo-list-model","photo-list-view","photostream-hera-view","photos-subnav-view","refresh-sihp-comment","urls","io","yui-base"],"optional":["video"],"ext":false},"flickr-app-explore":{"path":"j\/.J-app-.FP.A.v2acKB","requires":["context-data","flickr-app","explore-hera-view","rapid-tracker","template-fetcher","urls","yui-base"],"ext":false},"flickr-app-soup":{"path":"j\/.J-app-soup.A.v29Wi4","requires":["flickr-app","soup-hera-view","rapid-tracker","template-fetcher","urls","yui-base"],"ext":false},"fps-counter":{"path":"j\/fps-counter.A.v2f22T","ext":false},"fps-beacon":{"path":"j\/fps-beacon.A.v2f2k8","requires":["fps-counter"],"ext":false},"group-model":{"path":"j\/.DM-.JA.A.v253Rp","requires":["context-data","model","gallery-flickr-api","urls","yui-base"],"ext":false},"groups-model":{"path":"j\/.DMs-.JA.A.v254x4","requires":["context-data","model","model-list","lazy-model-list","group-model","gallery-flickr-api","urls","yui-base"],"ext":false},"groups-page-model":{"path":"j\/.DMs-.GF-.JA.A.v255QV","requires":["context-data","model","group-model","gallery-flickr-api","urls","yui-base"],"ext":false},"groups-list-view":{"path":"j\/.DMs-.CZ-.JB.A.v2bpGv","requires":["context-data","view","groups-model","handlebars","yui-base"],"ext":false},"groups-recent-view":{"path":"j\/.DMs-recent-.JB.A.v254x4","requires":["context-data","view","groups-model","groups-page-model","handlebars","yui-base"],"ext":false},"group-subnav":{"path":"j\/.DM-subnav.A.v2bbjD","requires":["flickr-dialog","yui-base"],"ext":false},"flickr-app-groups":{"path":"j\/.J-app-.DMs.A.v2bbgc","requires":["context-data","cookie","flickr-app","groups-model","group-model","groups-page-model","groups-list-view","groups-recent-view","group-strip-view","template-fetcher","urls","yui-base"],"ext":false},"flickr-dialog":{"path":"j\/.IZ.A.vXoma","requires":["flickr-dialog-alert","flickr-dialog-confirmation","flickr-dialog-destructive-confirmation","flickr-dialog-frame","flickr-dialog-short-message","flickr-dialog-spinner","yui-base"],"ext":false},"flickr-dialog-alert":{"path":"j\/.IZ-.JX.A.vYz1V","requires":["flickr-dialog-base","substitute","yui-base"],"ext":false},"flickr-dialog-base":{"path":"j\/.IZ-.BL.A.v24baK","requires":["attribute","better-throttle","event","event-custom","focus-tracker","flickr-dialog-css","global-dialog-transjax","keyboard-shortcut-manager","node","page-context","substitute","yui-base"],"ext":false},"flickr-dialog-confirmation":{"path":"j\/.IZ-.JR.A.v26nue","requires":["flickr-dialog-base","substitute","yui-base"],"ext":false},"flickr-dialog-css":{"path":"c\/c_.IZ.BC.v26nUn","type":"css","ext":false},"flickr-dialog-destructive-confirmation":{"path":"j\/.IZ-.JS-.JR.A.v227un","requires":["flickr-dialog-base","yui-base"],"ext":false},"flickr-dialog-frame":{"path":"j\/.IZ-.JW.A.vXqPg","requires":["flickr-dialog-base","yui-base"],"ext":false},"flickr-dialog-geo-css":{"path":"c\/c_.IZ-geo.BC.v27yEi","type":"css","ext":false},"flickr-dialog-geo":{"path":"j\/.IZ-geo.A.v24BhD","requires":["flickr-dialog-base","flickr-dialog-geo-css","flickr-map2","yui-base"],"ext":false},"flickr-dialog-infinite-spinner-css":{"path":"c\/c_.IZ-infinite-.JV.BC.v25k44","type":"css","ext":false},"flickr-dialog-infinite-spinner":{"path":"j\/.IZ-infinite-.JV.A.v2etr8","requires":["flickr-dialog-base","flickr-dialog-infinite-spinner-css","yui-base","html5-balls"],"ext":false},"flickr-dialog-short-message":{"path":"j\/.IZ-short-.JU.A.vYz1V","requires":["flickr-dialog-base","substitute","yui-base"],"ext":false},"flickr-dialog-spinner":{"path":"j\/.IZ-.JV.A.vXUzB","requires":["flickr-dialog-base","yui-base"],"ext":false},"flickr-gallery-comments":{"path":"j\/.J-.FW-.LGs.A.v23TBp","requires":["anim","anim-scroll","dejaview","event-custom","event-delegate","formatting-tips-css","gallery-flickr-api","global-dialog","history-manager","input-hint","io-form","node","node-visibility","page-context","photo-comments-transjax","swfobject","yui-base"],"ext":false},"flickr-gallery-gallery-owner":{"path":"j\/.J-.FW-.FW-.BK.A.v26K4X","requires":["dd-drop","dd-proxy","event","flickr-gallery-gallery-owner-transjax","flickr-gallery-photo-remover","insitu","node","yui-base"],"ext":false},"flickr-gallery-gallery-owner-actions-menu":{"path":"j\/.J-.FW-.FW-.BK-.IS-.BB.A.vVtRx","requires":["event","gallery-popover","menus","node","yui-base"],"optional":["flickr-gallery-gallery-owner"],"ext":false},"flickr-gallery-gallery-owner-transjax":{"path":"j\/.J-.FW-.FW-.BK-.C-.F.A.vUnPK","requires":["transjax-base","yui-base"],"ext":false},"flickr-gallery-keyboard-shortcuts":{"path":"j\/.J-.FW-.HZs.A.v28aJM","requires":["anim","anim-scroll","better-throttle","event","flickr-gallery-keyboard-shortcuts-transjax","keyboard-shortcut-manager","node","node-visibility","yui-base"],"ext":false},"flickr-gallery-keyboard-shortcuts-transjax":{"path":"j\/.J-.FW-.HZs-.C-.F.A.vUDUv","requires":["transjax-base","yui-base"],"ext":false},"flickr-gallery-photo-owner":{"path":"j\/.J-.FW-.B-.BK.A.vVtRx","requires":["event","flickr-gallery-photo-remover","node","yui-base"],"ext":false},"flickr-gallery-photo-remover":{"path":"j\/.J-.FW-.B-.IP.A.vUuse","requires":["event","flickr-gallery-photo-remover-transjax","gallery-flickr-api","global-dialog","node","yui-base"],"ext":false},"flickr-gallery-photo-remover-transjax":{"path":"j\/.J-.FW-.B-.IP-.C-.F.A.vUioR","requires":["transjax-base","yui-base"],"ext":false},"flickr-geo":{"path":"j\/.J-geo.A.v2fZ1r","requires":["io","gallery-flickr-api","yui-base"],"ext":false},"flickr-leaflet-utils-css":{"path":"c\/c_.J-leaflet-utils.BC.v2h2BX","type":"css","ext":false},"flickr-leaflet-utils":{"path":"j\/.J-leaflet-utils.A.v2ffaX","requires":["osm-places","flickr-leaflet-utils-css","yui-base"],"ext":false},"flickr-location-search":{"path":"j\/.J_.BR_.CA.A.v2h6HT","requires":["event","node","query-string-args","yui-base"],"ext":false},"flickr-map":{"path":"j\/.J-map.A.v2fZ1r","requires":["flickr-map-transjax","base","selector-css3","slider","gallery-flickr-api","photo","dragdrop","dd-drag","flickr-map-css","flickr-map-css-intl","excanvas","json","gallery-storage-lite","better-throttle","selector-circle","flickr-geo","yui-base"],"ext":false},"flickr-map2":{"path":"j\/.J-map2.A.v2eCBT","requires":["base","cookie","dd-drag","dragdrop","event","flickr-geo","flickr-map-css","flickr-map-transjax","keyboard-shortcut-manager","page-context","selector-css3","slider","yui-base"],"ext":false},"flickr-map-provider-ymap":{"path":"j\/.J-.IK-ymap.A.v231xk","requires":["ymap","yui-base","yui2_5-yahoo","yui2_5-event","yui2_5-dom","yui2_5-animation","yui2_5-dragdrop"],"ext":false},"flickr-map-provider-bing":{"path":"j\/.J-.IK-bing.A.vRygx","requires":["bing_map","yui-base"],"ext":false},"flickr-map-provider-ovi":{"path":"j\/.J-.IK-ovi.A.v264Ft","requires":["yui-base"],"ext":false},"flickr-map-provider-gmap":{"path":"j\/.J-.IK-gmap.A.vZg4k","requires":["yui-base"],"ext":false},"flickr-map-provider-flickr_osm":{"path":"j\/.J-.IK-.J_osm.A.v25XcB","requires":["yui-base"],"ext":false},"flickr-map-transjax":{"path":"j\/.J-map-.C-.F.A.v2446p","requires":["transjax-base","yui-base"],"ext":false},"flickr-map-css":{"path":"c\/c_.J-map.BC.v27yEi","type":"css","ext":false},"flickr-map-css-intl":{"path":"c\/c_.J-map-.F.BC.v27yEi","type":"css","ext":false},"flickr-nav":{"path":"j\/.J_nav.A.v23TBp","requires":["event","node","page-context","yui-base"],"ext":false},"flickr-overlay-css":{"path":"c\/c_.J-overlay-.BL.BC.v27yEi","type":"css","ext":false},"flickr-overlay-base":{"path":"j\/.J-overlay-.BL.A.v23TBp","requires":["attribute","better-throttle","event","event-custom","focus-tracker","flickr-overlay-css","keyboard-shortcut-manager","node","page-context","substitute","yui-base"],"ext":false},"flickr-page-timing":{"path":"j\/.J_.GF_.FZ.A.v2avNa","requires":["event","node","yui-base"],"ext":false},"flickr-printing":{"path":"j\/.J_.FD.A.v2dZfD","requires":["node","event","io","gallery-flickr-api","event-delegate","global-dialog","sprintf","flickr-printing-css","flickr-printing-transjax","flickr-tooltips","yui-base"],"ext":false},"flickr-printing-css":{"path":"c\/c_.J_.FD_.D.BC.v27yEi","type":"css","ext":false},"flickr-printing-transjax":{"path":"j\/.J_.FD-.C-.F.A.v25DUa","requires":["transjax-base","yui-base"],"ext":false},"flickr-tooltips":{"path":"j\/.J-.GA.A.vThqa","requires":["event","event-delegate","yui-base"],"ext":false},"focus-tracker":{"path":"j\/.CV-.CH.A.v22DsV","requires":["event","node","yui-base"],"ext":false},"formatting-tips-css":{"path":"c\/c_.EN_.EQ_.D.BC.v27yEi","type":"css","ext":false},"gallery-boomr":{"path":"j\/.FW-boomr.A.vS9fe","requires":["lang","yui-base"],"ext":false},"gallery-calendar":{"path":"j\/.FW-.IO.A.v24LYH","requires":["gallery-calendar-transjax","gallery-popover","node","yui-base"],"ext":false},"gallery-calendar-transjax":{"path":"j\/.FW-.IO-.C-.F.A.vXh76","requires":["transjax-base","yui-base"],"ext":false},"gallery-flickr-api":{"path":"j\/.J_api.A.v2fZ1r","requires":["dump","event","io-xdr","json-parse","yui-base"],"ext":false},"gallery-history-lite":{"path":"j\/.FW-.CE-.GH.A.vL4ix","requires":["event-custom","event-custom-complex","node","yui-base"],"ext":false},"gallery-popover":{"path":"j\/.FW-.HN.A.v2aULV","requires":["event-custom","node","overlay","yui-base"],"ext":false},"gallery-popover-css":{"path":"c\/c_.FW-.HN.BC.v29hvF","type":"css","ext":false},"gallery-storage-lite":{"path":"j\/.FW-.FX-.GH.A.vTo8c","requires":["event-base","event-custom","event-custom-complex","json","yui-base"],"ext":false},"geo-exif-backfill-transjax":{"path":"j\/geo-.GO-.IF-.C-.F.A.vXkcp","requires":["transjax-base","yui-base"],"ext":false},"geofences-geopanel-css":{"path":"c\/c_.IA-.IB.BC.v27yEi","type":"css","ext":false},"geofences-geopanel-transjax":{"path":"j\/.IA-.IB-.C-.F.A.vXjvK","requires":["transjax-base","yui-base"],"ext":false},"geofences-geopanel":{"path":"j\/.IA-.IB.A.v2416g","requires":["geofences-geopanel-transjax","geofences-geopanel-css","geopanel","global-dialog","map-pinwin","yui-base"],"ext":false},"geofences":{"path":"j\/.IA.A.vWZSH","requires":["base","yui-base"],"optional":["gallery-flickr-api"],"ext":false},"geofences-apply-panel":{"path":"j\/.IA.IE.IC.A.vXjvK","requires":["anim","event","event-custom","gallery-flickr-api","geofences","geofences-transjax","global-dialog","io","node","node-visibility","yui-base"],"optional":["geofences-geopanel"],"ext":false},"geofences-apply-progress":{"path":"j\/.IA.IE.ID.A.vXa6c","requires":["better-throttle","event-custom","gallery-flickr-api","geofences","yui-base"],"ext":false},"geofences-list-view":{"path":"j\/.IA-.CZ-.JB.A.vX1g8","requires":["better-throttle","event","event-custom","geofences-geopanel","geofences","geofences-apply-panel","geofences-apply-progress","global-dialog","io","node","yui-base"],"optional":["anim"],"ext":false},"geofences-prefs-map":{"path":"j\/.IA-prefs-map.A.v27R8t","requires":["node","event","css3pie","flickr-map","geofences","geofences-transjax","geofences-prefs-map-transjax","map-pinwin","yui-base"],"ext":false},"geofences-prefs-map-transjax":{"path":"j\/.IA-prefs-map-.C-.F.A.v21yYM","requires":["transjax-base","yui-base"],"ext":false},"geofences-transjax":{"path":"j\/.IA-.C-.F.A.vX5dr","requires":["transjax-base","yui-base"],"ext":false},"geopanel-css":{"path":"c\/c_.IB.BC.v27yEi","type":"css","ext":false},"geopanel":{"path":"j\/.IB.A.v23TBp","requires":["event","global-dialog","geopanel-css","yui-base"],"optional":["autocomplete-2-5-1","flickr-map","gallery-flickr-api"],"ext":false},"getty":{"path":"j\/.FI_new.A.v2bqNi","requires":["anim","dom","event","gallery-flickr-api","node","yui-base"],"ext":false},"global-dialog":{"path":"j\/.X-.W-.D.A.v28Vm6","requires":["event","event-custom","event-delegate","event-key","focus-tracker","global-dialog-css","global-dialog-transjax","keyboard-shortcut-manager","node","page-context","yui-base"],"ext":false},"global-dialog-css":{"path":"c\/c_.X-.W-.D.BC.vZF8T","type":"css","ext":false},"global-dialog-transjax":{"path":"j\/.X-.W-.C-.F.A.vKPQv","requires":["transjax-base","yui-base"],"ext":false},"global-nav":{"path":"j\/.JC.A.v2eY6c","requires":["anim","event","menus","node","page-context","yui-base"],"ext":false},"group-blast-insitu":{"path":"j\/.DM-blast-.DT.A.v2bbjD","requires":["event","insitu","node","string-filters","yui-base"],"ext":false},"guestpass-hide":{"path":"j\/.DZ-.ET.A.vVdW2","requires":["anim","cookie","node","yui-base"],"ext":false},"grease":{"path":"j\/.HQ.A.v2bAj2","requires":["event-focus","gallery-flickr-api","gallery-storage-lite","global-dialog","json","node","occult","photo-data","urls","yui-base"],"ext":false},"grease-css":{"path":"c\/c_.HQ.BC.v2gvYZ","type":"css","ext":false},"health-check":{"path":"j\/.KH.A.v22qwV","requires":["event-custom","gallery-flickr-api","yui-base"],"ext":false},"history-manager":{"path":"j\/.CE-.K.A.v2fLWr","requires":["event","urls","yui-base"],"ext":false},"html5-balls":{"path":"j\/.LI.A.v28Tgp","requires":["event","urls","base","yui-base","html5-balls-css"],"ext":false},"html5-balls-css":{"path":"c\/c_.LI.BC.v27yEi","type":"css","ext":false},"image-fader":{"path":"j\/.CW-.CU.A.vZNyV","requires":["anim","node","yui-base"],"ext":false},"infinite-scrolling-transjax":{"path":"j\/infinite-scrolling-.C-.F.A.v21C6P","requires":["transjax-base","yui-base"],"ext":false},"input-hint":{"path":"j\/.CN-.DD.A.v23LDX","requires":["event-focus","focus-tracker","node","yui-base"],"ext":false},"input-counter":{"path":"j\/.CN-counter.A.vUvzK","requires":["event","node","yui-base"],"ext":false},"india-disclaimer":{"path":"j\/.IH.A.vRTtk","requires":["event","global-dialog","io-base","node","yui-base"],"ext":false},"insitu":{"path":"j\/.DT-.D.A.v2ceLr","requires":["input-counter","dejaview","event-custom","event-key","gallery-flickr-api","insitu-transjax","json-stringify","node","string-filters","substitute","yui-base"],"optional":["anim","anim-scroll","io","photo-data"],"ext":false},"insitu-transjax":{"path":"j\/.DT-.C-.F.A.v2ceLr","requires":["transjax-base","yui-base"],"ext":false},"iphone-link-sms-dialog-transjax":{"path":"j\/iphone-link-sms-.W-.C-.F.A.v26y52","requires":["rapid-tracker","transjax-base","yui-base"],"ext":false},"iphone-link-sms-dialog-css":{"path":"c\/c_iphone-link-sms-.W.BC.v26ALV","type":"css","ext":false},"iphone-link-sms-dialog":{"path":"j\/iphone-link-sms-.W.A.v29rSM","requires":["flickr-dialog-spinner","iphone-link-sms-dialog-css","iphone-link-sms-dialog-transjax","yui-base"],"ext":false},"jfif-extractor":{"path":"j\/jfif-.IN.A.v2ht1n","requires":["yui-base"],"ext":false},"jobs":{"path":"j\/jobs.A.v23ypB","requires":["event","flanal","flickr-page-timing","io","motion-blur","node","popup-login","rapid-tracker","transition","yui-base"],"ext":false},"justifier":{"path":"j\/.LA.A.v25UfV","requires":["yui-base"],"ext":false},"ken-burns":{"path":"j\/.KY.A.v2bb48","requires":["smart-crop","gallery-flickr-api","yui-base","page-context","ken-burns-transjax","context-data","html5-balls","konami","event-custom","rapid-tracker","oop"],"ext":false},"ken-burns-transjax":{"path":"j\/.KY-.C-.F.A.v29uBp","requires":["transjax-base","yui-base"],"ext":false},"keyboard-shortcut-legend":{"path":"j\/.HZ-.HY.A.v23TBp","requires":["better-throttle","cookie","gallery-flickr-api","global-dialog","keyboard-shortcut-legend-css","keyboard-shortcut-legend-layouts","keyboard-shortcut-legend-transjax","page-context","yui-base"],"ext":false},"keyboard-shortcut-legend-css":{"path":"c\/c_.HZ-.HY.BC.v27FA2","type":"css","ext":false},"keyboard-shortcut-legend-layouts":{"path":"j\/.HZ-.HY-layouts.A.vYgFK","requires":["keyboard-shortcut-legend-transjax","yui-base"],"ext":false},"keyboard-shortcut-legend-transjax":{"path":"j\/.HZ-.HY-.C-.F.A.vYgTP","requires":["transjax-base","yui-base"],"ext":false},"keyboard-shortcut-manager":{"path":"j\/.HZ-.K.A.v25NBk","requires":["event-custom","event-focus","event-key","focus-tracker","keyboard-shortcut-legend","node","page-context","yui-base"],"ext":false},"konami":{"path":"j\/.LC.A.v2a62X","ext":false},"leaflet":{"path":"j\/leaflet.A.v2ffaX","requires":["flickr-leaflet-utils","leaflet-css","leaflet-utils-css","yui-base"],"ext":false},"leaflet-css":{"path":"c\/c_leaflet.BC.v25Wzp","type":"css","ext":false},"leaflet-utils-css":{"path":"c\/c_leaflet-utils.BC.v27yEi","type":"css","ext":false},"lightbox":{"path":"j\/.N.A.v2h6HT","requires":["anim","better-throttle","context-data","cookie","node","escape","event-annotations","event-custom","event-delegate","event-gestures","event-key","fave-star","gallery-flickr-api","history","history-manager","json","ken-burns","keyboard-shortcut-manager","lightbox-transjax","node-visibility","page-context","photo-context-menu","photo-transjax","rapid-tracker","string-filters","swfobject","transition","urls","view-count","yui-base","yui-throttle"],"optional":["global-dialog","photos-list-transjax"],"ext":false},"lightbox-transjax":{"path":"j\/.N-.C-.F.A.v29Wba","requires":["transjax-base","yui-base"],"ext":false},"liquid-photo-resizer":{"path":"j\/.JL-.B.LB.A.v233DK","requires":["event"],"ext":false},"liquid-resizer":{"path":"j\/.JL.LB.A.v22DzP","requires":["event"],"ext":false},"location-picker-css":{"path":"c\/c_.BR-picker.BC.v27yEi","type":"css","ext":false},"location-picker":{"path":"j\/.BR-picker.A.vZRmZ","requires":["location-picker-css","keyboard-shortcut-manager","flickr-geo","event","map-pinwin","dragdrop","dd-drag","yui-base"],"ext":false},"location-selecta-css":{"path":"c\/c_.BR-.S.BC.v27yEi","type":"css","ext":false},"location-selecta":{"path":"j\/.BR-.S.A.vZPhi","requires":["location-selecta-css","keyboard-shortcut-manager","flickr-geo","event","yui-base"],"ext":false},"make-a-book-css":{"path":"c\/c_make-a-book.BC.v2dFK8","type":"css","ext":false},"make-a-book":{"path":"j\/make-a-book.A.v2gQi4","requires":["template-fetcher","view","event","node","gallery-flickr-api","flickr-dialog-frame","flickr-dialog","html5-balls","make-a-book-css","yui-base","escape","rapid-tracker"],"ext":false},"mail-zeus":{"path":"j\/mail-.D.A.vYGeT","requires":["mail-zeus-transjax","flickr-dialog-confirmation","event","node","yui-base"],"ext":false},"mail-zeus-transjax":{"path":"j\/mail-.D-.C-.F.A.vYCRk","requires":["transjax-base","yui-base"],"ext":false},"map-pinwin":{"path":"j\/map-.IV.A.vYzkT","requires":["map-pinwin-css","string-filters","yui-base"],"ext":false},"map-pinwin-css":{"path":"c\/c_map-.IV.BC.v27yEi","type":"css","ext":false},"math":{"path":"j\/.DL.A.vLPjZ","requires":["yui-base"],"ext":false},"matrix-math":{"path":"j\/matrix-.DL.A.vVRWz","requires":["yui-base"],"ext":false},"message-primary-email-transjax":{"path":"j\/.JU-primary-.HH-.C-.F.A.v25PLz","requires":["transjax-base","yui-base"],"ext":false},"md5":{"path":"j\/md5-.D.A.vXTyZ","ext":false},"menus":{"path":"j\/.BBs.A.v2bqJR","requires":["base","event","event-custom","gallery-popover","keyboard-shortcut-manager","node","page-context","yui-base"],"ext":false},"momentjs":{"path":"j\/momentjs-wrapper.A.v2bz2T","requires":[],"ext":false},"motion-blur":{"path":"j\/motion-blur.A.vUD1M","requires":["node","transition","yui-base"],"ext":false},"mrpinchy":{"path":"j\/mrpinchy.A.vWCYD","requires":["node","event","event-custom","transition","urls","matrix-math","yui-base"],"ext":false},"murmurhash":{"path":"j\/.KZ3_gc.A.v23PFP","ext":false},"nav-selecta":{"path":"j\/.JQ.A.v2h6HT","requires":["bo-selecta-3","keyboard-shortcut-manager","nav-selecta-css","nav-selecta-transjax","nav-selecta-rapid","node","event","widget","string-filters","yui-base"],"ext":false},"nav-selecta-css":{"path":"c\/c_.JQ.BC.v25xKg","type":"css","ext":false},"nav-selecta-transjax":{"path":"j\/.JQ-.C-.F.A.v24v3z","requires":["transjax-base","yui-base"],"ext":false},"nav-selecta-rapid":{"path":"j\/.JQ-.IY.A.v22o1n","requires":["event","rapid-tracker","yui-base"],"ext":false},"node-visibility":{"path":"j\/.CR-.DY.A.v2aY3z","requires":["better-throttle","cache-simple","node","node-pluginhost","yui-base"],"optional":["anim","anim-scroll"],"ext":false},"note-data":{"path":"j\/note-.BY.A.vRjAr","requires":["base","person-data","yui-base"],"ext":false},"notification-base":{"path":"j\/notification-.BL.A.v22wAD","requires":["attribute","notification-center"],"ext":false},"notification-center":{"path":"j\/notification-center.A.v22wQr","requires":["attribute","cookie","event","event-custom","gallery-flickr-api"],"ext":false},"number":{"path":"j\/.Y.A.v2bYfr","requires":["number-transjax","yui-base"],"ext":false},"number-transjax":{"path":"j\/.Y-.C-.F.A.vNqGv","requires":["transjax-base","yui-base"],"ext":false},"occult":{"path":"j\/.CF.A.vNC2p","requires":["node","yui-base"],"ext":false},"osm-places":{"path":"j\/osm-places.A.v2hppK","requires":["yui-base"],"ext":false},"page-context":{"path":"j\/.GF-.H.A.v23TD8","requires":["event-custom","yui-base"],"ext":false},"pagination-keyboard-shortcuts":{"path":"j\/.EG-.HZs.A.vXp7Z","requires":["keyboard-shortcut-manager","node","pagination-keyboard-shortcuts-transjax","yui-base"],"ext":false},"pagination-keyboard-shortcuts-transjax":{"path":"j\/.EG-.HZs-.C-.F.A.vUYzg","requires":["transjax-base","yui-base"],"ext":false},"person-data":{"path":"j\/.FK-.BY.A.vRjAr","requires":["base","yui-base"],"ext":false},"personmenu":{"path":"j\/.CB-.D.A.v2ah4B","requires":["anim","anim-scroll","cache-simple","event-custom","io-base","node","node-visibility","personmenu-css","personmenu-transjax","personmenu-rapid","yui-base"],"optional":["contact-changer"],"ext":false},"personmenu-css":{"path":"c\/c_.CB-.D.BC.v2ah4B","type":"css","ext":false},"personmenu-transjax":{"path":"j\/.CB-.C-.F.A.vNwWz","requires":["transjax-base","yui-base"],"ext":false},"personmenu-rapid":{"path":"j\/.CB-.IY.A.vZzGn","requires":["event","rapid-tracker","yui-base"],"ext":false},"photo":{"path":"j\/.B-.D.A.v2a8Fp","requires":["anim","anim-scroll","better-throttle","context-data","defer-images","event-annotations","event-custom","event-delegate","event-key","event-mousedrag","event-mouseenter","flickr-app-photo","focus-tracker","global-dialog","history-manager","html5-balls","keyboard-shortcut-manager","math","node-visibility","occult","page-context","photo-button-bar","photo-comments","photo-context-menu","photo-data","photo-keyboard-shortcuts","photo-rotate","photo-sidebar","retry-image-on-error","share-this-v3-menu","lightbox","urls","yahoo-ult","yui-base"],"optional":["gallery-flickr-api","io-base","photo-group-invites","photo-insitu","photo-notes","photo-people-list","photo-tags","view-count"],"ext":false},"photo-button-bar":{"path":"j\/.B-.T-bar.A.v2eqwa","requires":["add-to-dialog-css","context-data","event","event-custom","event-delegate","event-key","fave-star","flanal","focus-tracker","gallery-flickr-api","gallery-popover","global-dialog","io-base","keyboard-shortcut-manager","menus","node","node-event-simulate","page-context","photo-button-bar-transjax","photo-people-list","querystring-stringify-simple","urls","yui-base"],"optional":["flickr-printing","photo-notes","photo-replace","photo-rotate","picnik"],"ext":false},"photo-button-bar-transjax":{"path":"j\/.B-.T-bar-.C-.F.A.v2fHhn","requires":["transjax-base","yui-base"],"ext":false},"photo-comments":{"path":"j\/.B-.LGs.A.v2b6ig","requires":["anim","anim-scroll","defer-images","dejaview","event-custom","event-delegate","flickr-app","flickr-dialog-alert","flickr-dialog-confirmation","flickr-dialog-spinner","formatting-tips-css","gallery-flickr-api","input-hint","io-form","node","node-visibility","page-context","photo-comments-transjax","photo-data","swfobject","urls","yui-base"],"optional":["insitu"],"ext":false},"photo-comments-image-hiding":{"path":"j\/.B-.LGs-.CW-hiding.A.vTJvX","requires":["node","yui-base"],"ext":false},"photo-comments-transjax":{"path":"j\/.B-.LGs-.C-.F.A.v29egK","requires":["transjax-base","yui-base"],"ext":false},"photo-context-menu":{"path":"j\/.B-.H-.BB.A.v23ZBF","requires":["event","node","photo","photo-context-menu-css","photo-context-menu-transjax","photo-data","urls","yui-base"],"ext":false},"photo-context-menu-css":{"path":"c\/c_.B-.H-.BB.BC.v27yEi","type":"css","ext":false},"photo-context-menu-transjax":{"path":"j\/.B-.H-.BB-.C-.F.A.v221oV","requires":["transjax-base","yui-base"],"ext":false},"photo-data":{"path":"j\/.B-.BY.A.v2acKB","requires":["anim","base","cookie","event","gallery-flickr-api","grease","node","photo-transjax","type-cast","urls","yui-base"],"ext":false},"photo-filmstrips":{"path":"j\/.B-.Ms.A.v2dJTT","requires":["anim","base","better-throttle","context-data","event","event-custom","event-delegate","event-key","focus-tracker","global-dialog","image-fader","io","keyboard-shortcut-manager","node","number","page-context","photo-button-bar-transjax","photo-data","photo-filmstrips-transjax","retry-image-on-error","string-filters","transition","urls","yui-base"],"ext":false},"photo-filmstrips-transjax":{"path":"j\/.B-.Ms-.C-.F.A.v2fzcp","requires":["transjax-base","yui-base"],"ext":false},"photo-geolocation":{"path":"j\/.B-.R.A.v2f7RP","requires":["global-dialog","page-context","photo","photo-geolocation-transjax","yui-base"],"optional":["autocomplete-2-5-1","flickr-map","gallery-flickr-api","photo-geolocation-css"],"ext":false},"photo-geolocation-transjax":{"path":"j\/.B-.R-.C-.F.A.vXt8K","requires":["transjax-base","yui-base"],"ext":false},"photo-geolocation-css":{"path":"c\/c_.B-.R.BC.v24BhD","type":"css","ext":false},"photo-geopanel":{"path":"j\/.B-.IB.A.v24VQv","requires":["flickr-dialog-geo","flickr-geo","flickr-map-provider-flickr_osm","location-picker","photo-map-display-pinwin","woe-corrector","yui-base","ymap"],"ext":false},"flickr-ymap":{"path":"j\/.J-ymap.A.v26FYD","requires":["base","event"],"ext":false},"flickr-leaflet":{"path":"j\/.J-leaflet.A.v26KXF","requires":["base","event","leaflet"],"ext":false},"geo-editor":{"path":"j\/geo-.GZor.A.v26FYD","requires":["flickr-geo","flickr-dialog","html5-balls","base","event"],"ext":false},"parallax":{"path":"j\/parallax.A.v2aeK8","requires":["base","node-base"],"ext":false},"photo-group-invites":{"path":"j\/.B-.DM-.CO.A.v24a8p","requires":["context-data","gallery-flickr-api","global-dialog","node","photo","photo-group-invites-transjax","yui-base"],"ext":false},"photo-group-invites-transjax":{"path":"j\/.B-.DM-.CO-.C-.F.A.vU8jn","requires":["transjax-base","yui-base"],"ext":false},"photo-insitu":{"path":"j\/.B-.DT.A.v23qNe","requires":["insitu","photo","photo-data","photo-transjax","yui-base"],"ext":false},"photo-keyboard-shortcuts":{"path":"j\/.B-.HZs.A.v24jER","requires":["cookie","event-focus","event-key","event-simulate","focus-tracker","keyboard-shortcut-manager","node","page-context","photo-keyboard-shortcuts-transjax","yui-base"],"optional":["photo-people-list"],"ext":false},"photo-keyboard-shortcuts-transjax":{"path":"j\/.B-.HZs-.C-.F.A.v21yYM","requires":["transjax-base","yui-base"],"ext":false},"photo-map-display-pinwin-css":{"path":"c\/c_.B-map-.IQ-.IV.BC.v24BhD","type":"css","ext":false},"photo-map-display-pinwin":{"path":"j\/.B-map-.IQ-.IV.A.v24BhD","requires":["flickr-geo","map-pinwin","base","photo-map-display-pinwin-css","yui-base"],"ext":false},"photo-notes":{"path":"j\/.B-.BE-.D.A.v2gNsa","requires":["better-throttle","bo-selecta-3","bo-selecta-transjax","box-host","event","escape","event-annotations","event-delegate","focus-tracker","gallery-flickr-api","global-dialog","node","node-visibility","photo-notes-transjax","photo-people-controller","photo-people-transjax","string-filters","urls","yui-base"],"optional":["note-data"],"ext":false},"photo-notes-transjax":{"path":"j\/.B-.BE-.C-.F.A.vYpcX","requires":["transjax-base","yui-base"],"ext":false},"photo-owner-dialogs-css":{"path":"c\/c_.B-.BK-.EO-.D.BC.v27yEi","type":"css","ext":false},"photo-people-controller":{"path":"j\/.HX-.BH.A.v22NwM","requires":["event","gallery-flickr-api","dejaview","photo-people-transjax","yui-base"],"ext":false},"photo-people-list":{"path":"j\/.HX-.CZ.A.v29FSR","requires":["anim","bo-selecta-3","event-delegate","global-dialog","node","node-visibility","photo","photo-people-controller","photo-people-transjax","string-filters","urls","yui-base"],"optional":["photo-notes"],"ext":false},"photo-people-transjax":{"path":"j\/.HX-.C-.F.A.vNxQi","requires":["transjax-base","yui-base"],"ext":false},"photo-preloader":{"path":"j\/.B-.FJ.A.v23ZBF","requires":["context-data","event","yui-base"],"ext":false},"photo-replace":{"path":"j\/.B-.GQ.A.v23Sdn","requires":["event","global-dialog","io","node","yui-base"],"optional":["flanal","worker"],"ext":false},"photo-rotate":{"path":"j\/.B-.GE.A.v24xxp","requires":["anim","event","gallery-flickr-api","node","photo","photo-data","photo-rotate-css","photo-rotate-transjax","yui-base"],"ext":false},"photo-rotate-css":{"path":"c\/c_.B-.GE.BC.v27yEi","type":"css","ext":false},"photo-rotate-transjax":{"path":"j\/.B-.GE-.C-.F.A.vPnbR","requires":["transjax-base","yui-base"],"ext":false},"photo-sidebar":{"path":"j\/.HV.A.v2cK7a","requires":["anim","bitmap-text","bitmap-type-silkscreen","event-custom","event-delegate","excanvas","flapid","gallery-flickr-api","io-base","node","node-visibility","photo-data","photo-filmstrips","photo-sidebar-transjax","querystring-stringify-simple","contact-changer","contact-changer","stylesheet","datatype","yui-base","photo-sidebar-not-owner"],"optional":["context-data","photo-sidebar-admin","photo-sidebar-owner"],"ext":false},"photo-sidebar-transjax":{"path":"j\/.HV-.C-.F.A.vPKU6","requires":["transjax-base","yui-base"],"ext":false},"photo-sidebar-not-owner":{"path":"j\/.HV-.HW.A.v24hPX","requires":["flickr-dialog-frame","flickr-dialog-short-message","flickr-dialog-spinner","gallery-flickr-api","photo-owner-dialogs-css","photo-sidebar","photo-sidebar-not-owner-transjax","yui-base"],"ext":false},"photo-sidebar-not-owner-transjax":{"path":"j\/.HV-.HW-.C-.F.A.vNx12","requires":["photo-sidebar-owner-transjax","transjax-base","yui-base"],"ext":false},"photo-sidebar-owner":{"path":"j\/.HV-.BK.A.v29ebz","requires":["better-throttle","event-custom","flickr-dialog-frame","flickr-dialog-short-message","flickr-dialog-spinner","gallery-flickr-api","page-context","photo-owner-dialogs-css","photo-data","photo-sidebar","photo-sidebar-owner-transjax","yui-base"],"ext":false},"photo-sidebar-owner-transjax":{"path":"j\/.HV-.BK-.C-.F.A.vX3nx","requires":["transjax-base","yui-base"],"ext":false},"photos-subnav-view":{"path":"j\/.EC-subnav-.JB.A.v2bEQ6","requires":["parallax","template-fetcher","view","yui-base"],"ext":false},"photo-tags":{"path":"j\/.B-.KD.A.v2cMdz","requires":["event","event-delegate","node","node-visibility","photo","photo-tags-transjax","query-string-args","urls","yui-base"],"ext":false},"photo-tags-transjax":{"path":"j\/.B-.KD-.C-.F.A.v2cQha","requires":["transjax-base","yui-base"],"ext":false},"photo-tour":{"path":"j\/.B-.DA.A.v25k5M","requires":["anim","cookie","dom","event","photo","photo-tour-transjax","yui-base"],"ext":false},"photo-tour-transjax":{"path":"j\/.B-.DA-.C-.F.A.vN3je","requires":["transjax-base","yui-base"],"ext":false},"photo-transjax":{"path":"j\/.B-.C-.F.A.vQ7Tk","requires":["transjax-base","yui-base"],"ext":false},"photo-ywa-tracking":{"path":"j\/.B-ywa-.BW.A.vPwkT","requires":["event","yahoo-web-analytics","yui-base"],"ext":false},"photogne-exif-fetcher":{"path":"j\/.Bgne-.GO-fetcher.A.v27wfD","requires":["gallery-flickr-api","yui-base"],"ext":false},"photos-user-favorites":{"path":"j\/.EC-user-.LFs.A.vQd64","requires":["event","io","node","yui-base"],"ext":false},"photos-display":{"path":"j\/.EC-.IQ.A.v2412P","requires":["photos-display-css","event","io","node","photo-data","selector-css3","photos-display-transjax","yui-base"],"ext":false},"photos-display-transjax":{"path":"j\/.EC-.IQ-.C-.F.A.v2fvtT","requires":["transjax-base","yui-base"],"ext":false},"photos-display-css":{"path":"c\/c_.EC-.IQ.BC.v27yEi","type":"css","ext":false},"photos-list":{"path":"j\/.EC-.CZ.A.v2h6HT","requires":["anim","anim-scroll","better-throttle","cookie","defer-images","event","flanal","gallery-flickr-api","gallery-popover","global-dialog","io","keyboard-shortcut-manager","menus","murmurhash","node","node-visibility","pagination-keyboard-shortcuts","photo-data","photos-list-transjax","string-filters","better-throttle","refresh-sihp-comment","refresh-sihp-share","urls","yui-base"],"optional":["lightbox"],"ext":false},"photos-list-justifier":{"path":"j\/.EC-.CZ-.LA.A.v2erLz","requires":["refresh-sihp-comment","refresh-sihp-share","yui-base"],"ext":false},"photos-list-transjax":{"path":"j\/.EC-.CZ-.C-.F.A.v2412P","requires":["transjax-base","yui-base"],"ext":false},"photostream-insitu":{"path":"j\/.ECtream-.DT.A.v2gNdn","requires":["event","insitu","node","yui-base"],"ext":false},"photoset-transjax":{"path":"j\/.ECet-.C-.F.A.v2ds6K","requires":["transjax-base","yui-base"],"ext":false},"photoset":{"path":"j\/.ECet.A.v2eh3M","requires":["anim","event","insitu","node","gallery-flickr-api","yui-base","flickr-dialog-alert","photoset-transjax"],"ext":false},"picnik":{"path":"j\/.EY-.D.A.v23TBp","requires":["global-dialog","io-base","json","picnik-css","picnik-transjax","swfobject","yui-base"],"ext":false},"picnik-css":{"path":"c\/c_.EY-.D.BC.v27yEi","type":"css","ext":false},"picnik-transjax":{"path":"j\/.EY-.C-.F.A.vLqt8","requires":["transjax-base","yui-base"],"ext":false},"playr":{"path":"j\/playr.A.v2h6HT","requires":["context-data","cookie","escape","event","gallery-flickr-api","history-manager","html5-balls","keyboard-shortcut-manager","lightbox-transjax","node","page-context","photo-transjax","rapid-tracker","refresh-sihp-comment","swfobject","urls","view-count","yui-base"],"optional":["lightbox"],"ext":false},"polyfills-placeholder":{"path":"j\/.KR-.KS.A.v23CyZ","requires":["node","yui-base"],"ext":false},"popup-login":{"path":"j\/.HP.A.v2bAj2","requires":["event","node","io-base","yui-base"],"ext":false},"post-message":{"path":"j\/post-.JU.A.v2bWpx","requires":["event","node","yui-base"],"ext":false},"post-upload-sharing-ui":{"path":"j\/post-.KI-.EE-ui.A.v23UeB","requires":["event","node","yui-base"],"ext":false},"post-upload-sharing-owner-ui":{"path":"j\/post-.KI-.EE-.BK-ui.A.v24pUi","requires":["event","node","yui-base","share-this-v3-menu","share-this-v3-dialog"],"ext":false},"pro-survey":{"path":"j\/pro-survey.A.v26onX","requires":["event","node","yui-base","attribute","flickr-dialog-confirmation","rapid-tracker"],"ext":false},"pro-upsell-bandwidth-limit-notification":{"path":"j\/pro-upsell-bandwidth-limit-notification.A.v25vnk","requires":["flickr-dialog-confirmation","notification-base","pro-upsell-notification-transjax"],"ext":false},"pro-upsell-photo-limit-notification":{"path":"j\/pro-upsell-.B-limit-notification.A.v25vnk","requires":["flickr-dialog-confirmation","notification-base","pro-upsell-notification-transjax"],"ext":false},"pro-upsell-notification-transjax":{"path":"j\/pro-upsell-notification-.C-.F.A.v22xhi","requires":["transjax-base","yui-base"],"ext":false},"query-string-args":{"path":"j\/.CP-.U-.DE.A.vKEJV","requires":["yui-base"],"ext":false},"rapid-tracker-2":{"path":"j\/.IY-.CH-2.A.v2eCLv","requires":["yui-base"],"ext":false},"rapid-tracker-3":{"path":"j\/.IY-.CH-3.A.v2hPGn","requires":["yui-base"],"ext":false},"rapid-tracker":{"path":"j\/.IY-.CH-yui3-wrapper.A.v2aYwa","requires":["yui-base","rapid-tracker-3"],"ext":false},"refresh-sihp":{"path":"j\/refresh-sihp.A.v2g9D4","requires":["gallery-flickr-api","swfobject","html5-balls","view-count-on-visible","io-form","refresh-sihp-comment","refresh-sihp-feed-ads","refresh-sihp-favorite","refresh-sihp-keyboard","refresh-sihp-muting","refresh-sihp-share","refresh-sihp-transjax","defer-images","yui-base","event-custom"],"ext":false},"refresh-sihp-comment":{"path":"j\/.LD.LG.A.v2c1tK","requires":["flickr-dialog","photo-comments-transjax","refresh-sihp-sidebar","share-this-v3-menu","grease","node-visibility","yui-base"],"ext":false},"refresh-sihp-favorite":{"path":"j\/.LD.LF.A.v2b9Kg","requires":["yui-base"],"ext":false},"refresh-sihp-feed-ads":{"path":"j\/.LDfeed-ads.A.v2h11R","requires":["yui-base","event-custom","refresh-sihp-sidebar"],"ext":false},"refresh-sihp-friendfinder":{"path":"j\/.LD.LH.A.v2d8Gv","requires":["gallery-flickr-api","string-filters","yui-base"],"ext":false},"refresh-sihp-keyboard":{"path":"j\/.LD.Q.A.v2adhD","requires":["anim-scroll","better-throttle","dom","keyboard-shortcut-manager","yui-base"],"ext":false},"refresh-sihp-muting":{"path":"j\/.LD.LE.A.v2a9xp","requires":["yui-base"],"ext":false},"refresh-sihp-recofeed":{"path":"j\/.LDrecofeed.A.v29tM8","requires":["gallery-flickr-api","yui-base"],"ext":false},"refresh-sihp-share":{"path":"j\/.LD.DN.A.v2bqRK","requires":["share-this-v3-menu","global-dialog","yui-base"],"ext":false},"fmodal-dialog":{"path":"j\/fmodal-.W.A.v2cC4x","requires":["yui-base","io","node","event","event-key","dom"],"ext":false},"fb_suggestions_v2":{"path":"j\/fb_.IL_v2.A.v2cZ8X","requires":["yui-base","node","cookie","event","dom","io","json","gallery-flickr-api","fb_suggestions_transjax","yui-array","rapid-tracker"],"ext":false},"fb_suggestions":{"path":"j\/fb_.IL.A.v2d44x","requires":["yui-base","node","cookie","event","dom","io","json","gallery-flickr-api","fb_suggestions_transjax","yui-array","rapid-tracker"],"ext":false},"fb_suggestions_transjax":{"path":"j\/fb_.IL_.C.A.v2cNhD","ext":false},"fb_signup":{"path":"j\/fb_signup.A.v2cQ56","requires":["yui-base","fb_suggestions","node","event","dom","io","json","event-focus","fb_signup_transjax","rapid-tracker"],"ext":false},"fb_signup_transjax":{"path":"j\/fb_signup_.C.A.v2cNhD","ext":false},"fb-reco":{"path":"j\/fb-reco.A.v2ee76","requires":["yui-base","node","event","dom"],"ext":false},"fb-reco-transjax":{"path":"j\/fb-reco-.C-.F.A.v2cC4x","ext":false},"signup-dialog":{"path":"j\/signup-.W.A.v2csun","requires":["yui-base","signup-dialog-transjax","io","node","event","dom","fmodal-dialog","fb-reco"],"ext":false},"signup-dialog-transjax":{"path":"j\/signup-.W-.C-.F.A.v2csun","ext":false},"refresh-sihp-sidebar":{"path":"j\/.LD.I.A.v2e8Ez","requires":["yui-base","fb-reco","refresh-sihp-friendfinder","refresh-sihp-transjax","rapid-tracker"],"ext":false},"refresh-sihp-transjax":{"path":"j\/.LD.C-.F.A.v2cC6g","requires":["transjax-base","yui-base"],"ext":false},"refresh-photo-page-description":{"path":"j\/refresh-.B-.GF-.KC.A.v2a16K","requires":["yui-base"],"ext":false},"retry-image-on-error":{"path":"j\/retry-.CW-on-.JP.A.v22TPF","requires":["event-base","yui-base","yui-later"],"optional":["flanal"],"ext":false},"rev-dan-map":{"path":"j\/rev-dan-map.A.v2fXGz","requires":["event-base","yui-base"],"ext":false},"rushmore-settings":{"path":"j\/.FS-.FR.A.v21HM8","requires":["event","event-delegate","global-dialog","io","node","yui-base"],"ext":false},"search-keyboard-shortcuts":{"path":"j\/.CA-.HZs.A.v28aJM","requires":["anim","event","keyboard-shortcut-manager","node","yui-base"],"ext":false},"flickr-app-search":{"path":"j\/.J-app-.CA.A.v2ak9V","requires":["context-data","flickr-app","search-hera-view","rapid-tracker","template-fetcher","urls","yui-base"],"ext":false},"search-refer":{"path":"j\/.CA-.DX-.D.A.vT4ua","requires":["anim","cookie","node","yahoo-ult","yui-base"],"ext":false},"selector-circle-css":{"path":"c\/c_.GB-circle.BC.v27yEi","type":"css","ext":false},"selector-circle":{"path":"j\/.GB-circle.A.vXbxF","requires":["base","css3pie","event","selector-circle-css","yui-base"],"ext":false},"set-meta-insitu":{"path":"j\/set-meta-.DT.A.vTUon","requires":["event","insitu","node","yui-base"],"ext":false},"share-menu-transjax":{"path":"j\/.DN-.BB-.D-.C-.F.A.vVvzx","requires":["transjax-base","yui-base"],"ext":false},"share-this-v3-account-settings":{"path":"j\/.HG-.IR-.FR.A.v21yYM","requires":["dom","event","global-dialog","io","io-form","querystring-stringify-simple","yui-base"],"ext":false},"share-this-v3-css":{"path":"c\/c_.HG.BC.v29veB","type":"css","ext":false},"share-this-v3-dialog":{"path":"j\/.HG-.W.A.v27Xcc","requires":["dom","event","global-dialog","io-base","node","share-menu-transjax","share-this-v3-dialog-css","share-this-v3-dialog-transjax","share-this-v3-services","yui-base"],"optional":["flanal"],"ext":false},"share-this-v3-dialog-css":{"path":"c\/c_.HG-.W.BC.v2fQ12","type":"css","ext":false},"share-this-v3-dialog-transjax":{"path":"j\/.HG-.W-.C-.F.A.vVVE6","requires":["transjax-base","yui-base"],"ext":false},"share-this-v3-menu":{"path":"j\/.HG-.BB.A.v2ca6K","requires":["better-throttle","dom","event","event-custom","gallery-flickr-api","gallery-popover","global-dialog","io-base","json-stringify","menus","node","share-menu-transjax","share-this-v3-triggers","yui-base","node-visibility"],"optional":["photo-data"],"ext":false},"share-this-v3-service-blogger":{"path":"j\/.HF.HJ.A.vU5pp","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-service-email":{"path":"j\/.HF.HH.A.v2fchH","requires":["bo-selecta-3","share-this-v3-services","share-this-v3-service-email-transjax","yui-base"],"ext":false},"share-this-v3-service-email-transjax":{"path":"j\/.HF.HH-.C-.F.A.vTPCv","requires":["transjax-base","yui-base"],"ext":false},"share-this-v3-service-facebook":{"path":"j\/.HF.HL.A.v22bcT","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-service-livejournal":{"path":"j\/.HF.HT.A.vTV8t","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-service-tumblr":{"path":"j\/.HF.HU.A.vVs3n","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-service-twitter":{"path":"j\/.HF.HK.A.v26ZMp","requires":["share-this-v3-services","share-this-v3-service-twitter-transjax","yui-base"],"ext":false},"share-this-v3-service-twitter-transjax":{"path":"j\/.HF.HK-.C-.F.A.vUELv","requires":["transjax-base","yui-base"],"ext":false},"share-this-v3-service-wordpress":{"path":"j\/.HF.HM.A.vVt5H","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-service-yahoo-pulse":{"path":"j\/.HF.CM-.HI.A.vU1vx","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-service-pinterest":{"path":"j\/.HFpinterest.A.v22VZx","requires":["share-this-v3-services","yui-base"],"ext":false},"share-this-v3-services":{"path":"j\/.HG-.HR.A.vVs3n","requires":["share-this-v3-service-blogger","share-this-v3-service-email","share-this-v3-service-facebook","share-this-v3-service-livejournal","share-this-v3-service-pinterest","share-this-v3-service-tumblr","share-this-v3-service-twitter","share-this-v3-service-wordpress","share-this-v3-service-yahoo-pulse","yui-base"],"ext":false},"share-this-v3-triggers":{"path":"j\/.HG-.HS.A.v23WPB","requires":["event","flanal","node","share-this-v3-dialog","yui-base"],"ext":false},"sprintf":{"path":"j\/.CC.A.vVNpp","requires":["yui-base"],"ext":false},"smartbanner-css":{"path":"c\/c_smartbanner.BC.v2gRUa","type":"css","ext":false},"smartbanner":{"path":"j\/smartbanner.A.v2hC5e","requires":["smartbanner-css","node","array-extras"],"ext":false},"smart-crop":{"path":"j\/.KX.A.v2aRDT","requires":["ccv","face"],"ext":false},"soundmanager2":{"path":"j\/sound.K2.A.v2gtac","requires":["yui-base"],"ext":false},"string-filters":{"path":"j\/.U-.CG.A.v23pnt","requires":["yui-base"],"ext":false},"soup":{"path":"j\/soup.A.v26wLa","requires":["event","flanal","flickr-page-timing","io","motion-blur","node","popup-login","rapid-tracker","transition","yui-base"],"ext":false},"soup-hera-view":{"path":"j\/soup-.LJ.JB.A.v29xpt","requires":["view","datatype-date","murmurhash","handlebars","photo-list-model","photo-list-view","flickr-dialog-infinite-spinner","template-fetcher","gallery-popover","rapid-tracker","io","yui-base"],"ext":false},"tag-selecta":{"path":"j\/tag-.S.A.v26fex","requires":["anim","autocomplete","tag-selecta-css","tag-selecta-transjax","datasource-function","event","event-custom","gallery-flickr-api","image-fader","io-base","node","string-filters","yui-base"],"ext":false},"tag-selecta-css":{"path":"c\/c_tag-.S.BC.v27yEi","type":"css","ext":false},"tag-selecta-transjax":{"path":"j\/tag-.S-.C-.F.A.v24eyi","requires":["transjax-base","yui-base"],"ext":false},"template-fetcher":{"path":"j\/.KW.A.v2au1H","requires":["handlebars"],"ext":false},"timing-average":{"path":"j\/.FZ-.JJ.A.v22o1n","requires":["cookie","event","yui-base"],"ext":false},"tour-nav":{"path":"j\/.DA-nav.A.v24fSa","requires":["anim","node","node-event-simulate","io","querystring","history","yahoo-ult","yui-base"],"ext":false},"tour-carousel":{"path":"j\/.DA-.ER.A.vN3UH","requires":["anim","node","yui-base"],"ext":false},"touch-lightbox":{"path":"j\/touch-.N.A.v2eumz","requires":["context-data","cookie","escape","event","gallery-flickr-api","history-manager","lightbox-transjax","mrpinchy","node","page-context","photo-transjax","rapid-tracker","transition","urls","view-count","yui-base"],"optional":["lightbox"],"ext":false},"type-cast":{"path":"j\/.DJ-cast.A.vZVnK","requires":["yui-base"],"ext":false},"transjax-base":{"path":"j\/.C-.BL.A.vPPjn","requires":["sprintf","yui-base"],"ext":false},"urls":{"path":"j\/urls.A.v28Ea4","requires":["yui-base"],"ext":false},"user-refave":{"path":"j\/user-re.CX.A.vPWbD","requires":["event","gallery-flickr-api","node","yui-base"],"ext":false},"video":{"path":"j\/.DV-.D.A.v2hxjn","requires":["cookie","event-custom","gallery-flickr-api","node","query-string-args","string-filters","swfobject","video-transjax","yui-base"],"ext":false},"video-masker":{"path":"j\/.DV-masker-.D.A.v23TBp","requires":["node","page-context","yui-base"],"ext":false},"video-transjax":{"path":"j\/.DV-.D-.C-.F.A.v217nF","requires":["transjax-base","yui-base"],"ext":false},"view-count":{"path":"j\/.JB-count.A.v21B4t","requires":["gallery-flickr-api","json","yui-base"],"ext":false},"view-count-on-visible":{"path":"j\/.JB-count-on-visible.A.v2bt4k","requires":["node-visibility","view-count","yui-base"],"ext":false},"whispers":{"path":"j\/whispers.A.vUbGV","requires":["node","event","gallery-flickr-api","yui-base"],"ext":false},"woe-corrector-css":{"path":"c\/c_woe-corrector.BC.v27yEi","type":"css","ext":false},"woe-corrector":{"path":"j\/woe-corrector.A.vZWAr","requires":["base","woe-corrector-css","keyboard-shortcut-manager","flickr-geo","event","yui-base"],"ext":false},"worker":{"path":"j\/.IW.A.v25T3e","requires":["base","event","yui-base"],"ext":false},"xmp-extractor":{"path":"j\/xmp-.IN.A.v23NN6","requires":["yui-base"],"ext":false},"you-subnav-menu":{"path":"j\/you-subnav-.BB.A.v256UZ","requires":["actions-menu-css","event","gallery-popover","gallery-popover-css","menus","node","yui-base"],"ext":false},"ywa-link-tracking":{"path":"j\/ywa-link-.BW.A.v24J32","requires":["event","yahoo-web-analytics","yui-base"],"ext":false},"zero-clipboard":{"path":"j\/zero-clipboard.A.vV8nB","requires":["yui-base"],"ext":false},"swfobject":{"path":"j\/.BM.A.vSDLi","ext":false},"yahoo-ult":{"path":"j\/.CM-ult.A.vPboZ","ext":false},"yahoo-web-analytics":{"path":"j\/ywa.A.vN4Nr","ext":false},"roundtrip":{"path":"j\/roundtrip.A.v28gYR","ext":false},"lighthouse":{"path":"j\/lighthouse.A.v2exeP","ext":false},"ymap":{"path":"j\/.FV.A.vZWmD","requires":["event-synthetic","yui2_5-animation","yui2_5-yahoo","yui2_5-event","yui2_5-dom","yui2_5-dragdrop"],"ext":false},"bing_map":{"path":"j\/bing_map_6_3.A.vRhUa","ext":false},"yui2_5-yahoo":{"path":"j\/.CM\/.CM_2.5.1.A.vr3bv","ext":false},"yui2_5-event":{"path":"j\/.CM\/.G_2.5.1.A.vr3bv","requires":["yui2_5-yahoo"],"ext":false},"yui2_5-dom":{"path":"j\/.CM\/dom_2.5.1.A.vr3bv","requires":["yui2_5-yahoo"],"ext":false},"yui2_5-dragdrop":{"path":"j\/.CM\/.FT_2.5.1.A.vWHYi","requires":["yui2_5-dom","yui2_5-event","yui2_5-yahoo"],"ext":false},"yui2_5-animation":{"path":"j\/.CM\/.FL_2.5.1.A.vr3bv","requires":["yui2_5-dom","yui2_5-event","yui2_5-yahoo"],"ext":false},"worker-echo":{"path":"j\/.IW-echo.A.vWYgB","requires":["worker-yui-ready","yui-base"],"ext":false},"worker-exif-extractor":{"path":"j\/.IW-.KU.A.v23Hgp","requires":["jfif-extractor","better-throttle","dataview","exif-extractor","exif-extractor-tags","worker-yui-ready","yui-base","xmp-extractor"],"ext":false},"worker-yui-ready":{"path":"j\/.IW-.KV.A.vWPcK","requires":["event","event-custom","yui-base"],"ext":false},"set-inline-comments-transjax":{"path":"j\/set-inline-.LGs-.C-.F.A.v2aFB8","ext":false}}};

	
		
	
		
	
		

	

F.config = F.util.clone(yconf);		YUI(yconf).use(function (Y) {
							page_timing.js_assets_end = new Date().getTime();
						Y.use('node', 'dom', 'anim', 'rapid-tracker', 'nav-selecta-rapid', 'cookie', function(Y) {

	

	/**
	 * Howdy. Did I mention we're hiring? Because we are. ;)
	 * http://flickr.com/jobs/
	 */

	var winloc = window.location.toString();

	var css = {
	    disabled: 'disabled',
	    enabled: 'enabled',
	    mobile: 'mobile',
	    notEmpty: 'not-empty',
	    visible: 'visible',
	    yoohooOverHere: 'yoohoo-over-here'
	};

	var windowInnerWidth;
	var windowInnerHeight;
	var bodyOffsetHeight;

	var dotsNavItems = document.querySelectorAll('.sohp-dots-nav li');
	var lastDotNavItem;

	var sohp = Y.one('#sohp-2014');

	var frames = Y.all('.sohp-section');
	var frameHeights = [];

	var maxSections = frames.size();

	// whether ads are present on the page, or not
	var adEnabled = (0 || 0);

	// presumed true until otherwise.
	var hasAd = true;

	// if there's no ad in section 0, it will be hidden from view and minSection will be 1.
	var minSection = 0;

	var sectionBodies = Y.all('.sohp-section-bd');

	var scrollAnimation;
	var lastScrollTimestamp = new Date();

	var upArrowLink = Y.one('#up-arrow-link');
	var upArrowUI = Y.one('#up-arrow-ui');
	var downArrowLink = Y.one('#down-arrow-link');
	var downArrowUI = Y.one('#down-arrow-ui');

	var downloads = Y.one('#sohp-downloads');

	var overlayWrapper = Y.one('#section-stunning-overlay');
	var overlayWrapperVisible = false;

	var overlays = {
		graphite: Y.one('#section-stunning-graphite'),
		icedTea: Y.one('#section-stunning-iced-tea'),
		throwback: Y.one('#section-stunning-throwback')
	};

	var backgrounds = [Y.one('#background-noblur'), Y.one('#background-blur'), Y.one('#background-superblur')];
	var backgroundOpacity = [1,0,0];
	
	var backgroundParallax = Y.one('#background-parallax');

	var amount = 0;
	var lastAmount = 0;

	var searchField = Y.one('#search-field');

	// some browsers prefer scrollTop applied to documentElement, others prefer document.body.
	var scrollElement = (navigator.userAgent.match(/firefox|trident/i) ? document.documentElement : document.body);

	// various UA sniffing, mostly for performance or minor UI quirks.
	var isWebkit = (navigator.userAgent.match(/webkit/i));
	var isSafari = (navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i));
	var isFirefox = (navigator.userAgent.match(/firefox/i));
	var isOldIE = (navigator.userAgent.match(/msie 8/i));
	var isIE9 = (navigator.userAgent.match(/msie 9/i));
	var isMobile = (navigator.userAgent.match(/iphone|ipad|android|silk|mobile/i));
	var isWinXP = (navigator.userAgent.match(/windows nt 5/i));

	var allowMobile = (winloc.match(/allowmobile/i));

	var useBlur = (!winloc.match(/noblur/i));

	var scrollTop;

	var useParallax;

	// for now, everybody gets in on the fun; why not.
	useParallax = true;

	// allow URL-based overrides
	if (useParallax && winloc.match(/noparallax/i)) {

		useParallax = false;

	} else if (!useParallax && winloc.match(/parallax/i)) {

		useParallax = true;

	}

	var forceScale3D = winloc.match(/scale3d/i);

	var useIncrementalScroll = (winloc.match(/incrementalscroll/i));

	// exclude mobile (iOS, etc.) from zoom as the UI may go haywire.
	var useZoom = (!isOldIE && !isIE9 && !isMobile && !winloc.match(/nozoom/i));

	var useScroll = (!winloc.match(/noscroll/i));

	// Webkit scales fonts up rasterized when using transforms (boourns), but Firefox gets it right (and also doesn't support element.style.zoom.)
	var useTransformZoom = (navigator.userAgent.match(/firefox|msie/i));

	var lastZoomScale = 1;
	var zoomScaleMin = 1;
	var zoomScaleMax = 2;

	var lastParallax;

	var isRetina;

	var useScale3D;

	var didFirstScroll;

	var animationTimer;

    var videos = document.getElementsByTagName('video');

	var enterEvents = {

		// these fire after the animation has completed, and the new section is in view.

		'section-1': function() {

			playVideo(1);

		},

		'section-2': function() {

			playVideo(2);

		},

		'section-3': function() {

			/**
			 * show the special overlays for the "stunning" section
			 * ... ensuring we're actually there when this runs, also.
			 */

			if (getCurrentSection() === 3) {

				if (!overlayWrapperVisible) {

					overlayWrapper.addClass('visible');
					overlayWrapperVisible = true;

				}

			}

			playVideo(3);

		},

		'section-4': function() {

			playVideo(4);

		}


	};

	var leaveEvents = {

		// these fire when the section begins to animate out.

		'section-3': function() {

			// leaving the "stunning" section - hide the overlays.
			
			if (overlayWrapperVisible) {

				overlayWrapper.removeClass('visible');
				overlayWrapperVisible = false;

			}

		}

	};

	var videoActions = {

		/**
		 * given a video ID, provide an array of methods to be called when a certain position is reached.
		 * methods fire once until video ends or is otherwise reset.
		 */

		// <video> ID
		'section-stunning-video': {

			reset: function() {

				overlays.graphite.removeClass(css.visible);
				overlays.icedTea.removeClass(css.visible);
				overlays.throwback.removeClass(css.visible);

			},

			timeline: [{

				method: function() {
					// iced tea filter + texture
					overlays.graphite.removeClass(css.visible);
					overlays.icedTea.addClass(css.visible);
					overlays.throwback.removeClass(css.visible);
				},
				time: 0.25,
				fired: false

			}, {

				method: function() {
					// throwback filter
					overlays.graphite.removeClass(css.visible);
					overlays.icedTea.removeClass(css.visible);
					overlays.throwback.addClass(css.visible);
				},
				time: 3.45,
				fired: false

			}, {

				method: function() {
					// grey!
					overlays.graphite.addClass(css.visible);
					overlays.icedTea.removeClass(css.visible);
					overlays.throwback.removeClass(css.visible);
				},
				time: 6.75,
				fired: false

			}, {

				method: function() {
					// back to original
					overlays.graphite.removeClass(css.visible);
					overlays.icedTea.removeClass(css.visible);
					overlays.throwback.removeClass(css.visible);
				},
				time: 10.25,
				fired: false

			}]

		}

	};

	function checkRetina() {

		return (typeof window.devicePixelRatio !== 'undefined' && window.devicePixelRatio > 1);

	}

	function checkScale3D() {

		/**
		 * Perhaps this could be optimized / I'm missing something.
		 * As of 03/2014, Safari is smooth, Chrome slightly slow, Firefox quite slow when combining scale3d() + translate3d() on a 15" Retina LCD.
		 * Test machine: 15" (2880x1800) MacBook Pro Retina, Mid 2012 (NVIDIA GeForce GT 650M 1024 MB, 16 GB 1600 MHz DDR3, 2.6 GHz Intel Core i7)
		 */
		return (forceScale3D || (!isWinXP && !isFirefox && (!isRetina || isSafari)));

	}

	function animateTo(node, preventInterrupt, scrollAction) {

		var easing,
		    id,
		    oldId,
		    from,
		    duration,
		    interrupted,
		    sectionOffset,
		    targetY,
		    to,
		    oldSection;

		if (node) {

			oldSection = getCurrentSection();

			node = Y.one(node);

			if (!node) {
				return false;
			}

			id = node.get('id');

			targetY = node.getY();

			if (!preventInterrupt) {

				// new animation? stop the current one.
				if (scrollAnimation) {

					scrollAnimation.stop(false);

					// this is crap, but we have to debounce scroll events that may still be firing - particularly from touchpads.
					if (scrollAction) {

						window.setTimeout(function() {
							scrollAnimation = null;
						}, 500);

					} else {

						scrollAnimation = null;

					}

					interrupted = true;

				}

			} else {

				// new animation attempt while one is running? ignore, and bail.
				if (scrollAnimation) {
					return false;
				}

			}

			// remove "pulse" effect, as applicable
			if (!didFirstScroll) {
				downArrowUI.removeClass(css.yoohooOverHere);
				didFirstScroll = true;
			}

			// update retina check, for those of you who move windows between non-retina and retina monitors.
			isRetina = checkRetina();

			// and update useScale3D, too.
			useScale3D = checkScale3D();

			// force update of scrollTop?
			scrollTop = parseInt(scrollElement.scrollTop, 10);

			from = scrollTop;
			to = parseInt(targetY, 10);
			duration = 1;

			scrollAnimation = new Y.Anim({
				node: scrollElement,
				to: {
					scrollTop: parseInt(targetY, 10)
				},
				// if existing animation was interrupted, move really fast to indicate responsiveness.
				easing: (interrupted ? 'easeOutStrong' : (scrollAction ? 'easeBoth' : 'easeBothStrong')),
				duration: duration
			});

			easing = scrollAnimation.get('easing');

			scrollAnimation.on('tween', function(e) {

				var elapsedTime = this.get('elapsedTime');
				var position = easing(elapsedTime, from, to - from, duration*1000);

				scrollTop = parseInt(position, 10);

			});

			scrollAnimation.on('end', function() {

				// reset the previous video, if any.
				resetVideo(oldSection);

				// for crap browsers, navigate to the target URL after animation completes.
				if (!history || !history.replaceState) {
					window.location.hash = '#' + id;
				}

				// for preventing multiple simultaneous animations
				scrollAnimation = null;

				if (enterEvents[id]) {

					// apply this after a short delay, also checking that a new animation has not started.

					if (animationTimer) {
						window.clearTimeout(animationTimer);
					}

					animationTimer = window.setTimeout(function() {

						if (!scrollAnimation) {

							if (enterEvents[id]) {
								enterEvents[id]();
							}

						}

						animationTimer = null;

					}, 250);

				}

			});

			// update the browser URL without navigating to the link
			if (history && history.replaceState) {
				history.replaceState({}, id, "#" + id);
			}

			oldId = 'section-' + oldSection;

			// "leave" events should always fire.
			if (leaveEvents[oldId]) {
				leaveEvents[oldId]();
			}

			scrollAnimation.run();

			if (lastDotNavItem) {
				lastDotNavItem.removeClass('selected');
			}

			// hackish: section-3 to 3, etc.
			sectionOffset = parseInt(id.substr(id.length-1), 10);

			lastDotNavItem = Y.one(dotsNavItems[sectionOffset]);

			if (lastDotNavItem) {
				lastDotNavItem.addClass('selected');
			}

		}

		updateFixedItems();

	}

	function updateFixedItems() {

		var currentSection = getCurrentSection();

		// app links

		if (currentSection > 1 && currentSection < maxSections) {

			downloads.removeClass(css.disabled);

		} else {

			downloads.addClass(css.disabled);
			
		}

		// nav arrows

		if (currentSection <= minSection) {

			// top

			upArrowLink.addClass(css.disabled);
			upArrowUI.addClass(css.disabled);

			downArrowLink.removeClass(css.disabled);
			downArrowUI.removeClass(css.disabled);

		} else if (currentSection >= maxSections) {

			// bottom

			downArrowLink.addClass(css.disabled);
			downArrowUI.addClass(css.disabled);

			upArrowLink.removeClass(css.disabled);
			upArrowUI.removeClass(css.disabled);

		} else {

			// somewhere in-between

			upArrowLink.removeClass(css.disabled);
			upArrowUI.removeClass(css.disabled);

			downArrowLink.removeClass(css.disabled);
			downArrowUI.removeClass(css.disabled);

		}

	}

	function playVideo(section) {

		var videoId,
		    video;

		section = parseInt(section, 10);

		// videoId = 'section-' + section + '-video';
		// video = document.getElementById(videoId);

		video = videos[section-1];

		if (getCurrentSection() === section && video) {

			if (!isMobile) {

				try {
					video.play();
				} catch(e) {
					// d'oh well
				}

			}

		}

	}

	function checkVideoPosition(video) {

		var i, j, id, action, foundMatch, timeline;

		if (video) {

			foundMatch = false;

			id = video.id;
			time = video.currentTime;

			if (id) {

				action = videoActions[id];

				if (action && action.timeline) {

					timeline = action.timeline;

					if (timeline.length) {

						// we have an object.
						for (i=0, j=timeline.length; i<j; i++) {

							if (timeline[i].method && !timeline[i].fired && time >= timeline[i].time) {
								timeline[i].method();
								timeline[i].fired = true;
							}

						}

					}

				}

			}

		}

	}

	function disableVideo(video) {

		/**
		 * If a video throws a fatal error, attempt to hide it with a static JPEG.
		 * Use with caution.
		 */

		var img;

		video = Y.one(video);

		img = video.get('parentNode').all('img');

		if (!video.getAttribute('data-disabled')) {

			video.setAttribute('data-disabled', 1);

			img = document.createElement('img');
			img.className = 'thumb';

			img.src = video.getAttribute('data-fallback');

			video.get('parentNode').appendChild(img);

		}

	}

	function resetVideoActions(videoId) {

		var i, j,
		    action,
		    timeline;

		action = videoActions[videoId];

		if (action) {

			timeline = action.timeline;

			// reset "fired" state
			for (i=0, j=timeline.length; i<j; i++) {
				timeline[i].fired = false;
			}

			// fire "reset" method, if provided.
			if (action.reset) {

				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(action.reset)
				} else {
					action.reset();
				}

			}

		}

	}

	function resetVideo(videoNodeOrOffset) {

		// <video> element, or section number matching DOM ID pattern, section-#-video.

		var video;

		if (typeof videoNodeOrOffset === 'number') {
			video = videos[videoNodeOrOffset-1];
		} else {
			video = videoNodeOrOffset;
		}

		if (video) {

			try {
				video.pause();
				video.currentTime = 0;
			} catch(e) {
				// may fail if not loaded or not ready
			}

			resetVideoActions(video.id);

		}

	}

	function getCurrentSection() {

		var hash = window.location.hash,
		    sectionPrefix = 'section-';

		// parse out of the URL, or assume default.
		if (hash.match(/section/i)) {
			section = hash.substr(sectionPrefix.length+1);
		} else {
			section = minSection;
		}

		return parseInt(section, 10);

	}

	function getNextSection() {

		var currentSection = getCurrentSection();

		currentSection = Math.min(maxSections, currentSection+1);

		return currentSection;

	}

	function getPreviousSection() {

		var currentSection = getCurrentSection();

		currentSection = Math.max(minSection, currentSection-1);

		return currentSection;

	}

	function updateSearch() {

		if (searchField.get('value').length === 0) {
			searchField.removeClass(css.notEmpty);
		} else {
			searchField.addClass(css.notEmpty);
		}

	}

	function getDimensions() {

		// potentially-expensive, layout-triggering DOM queries.

		windowInnerWidth = parseInt(window.innerWidth, 10);
		windowInnerHeight = parseInt(window.innerHeight, 10);
		bodyOffsetHeight = document.body.offsetHeight;

	}

	function resizeHandler() {

		var i,
		    j,
		    offset,
		    minWidth = 1001, // from min-width on .sohp {} CSS
		    adjustedScrollTop = 0,
		    absoluteMinimumHeight,
		    zoomScale = 1,
		    zoomScaleOverflow,
		    scaledWidth,
		    currentFrame,
		    thisMinHeight,
		    innerHeight,
		    hash;
		
		// ensure measurements are current
		getDimensions();

		targetHeight = windowInnerHeight;
		windowWidth = windowInnerWidth;

		/**
		 * Determine how small each screen can get. Ideally, each one is near full-height.
		 * If window is really short (i.e., 11" or 13" macbook screen with a full-size dock), let content get down to 600px height. otherwise, bump up toward desired target of 780. Scaling will take things from there for larger windows.
		 */

		absoluteMinimumHeight = (Math.min(Math.max(600, targetHeight), 780));

		innerHeight = Math.max(targetHeight, absoluteMinimumHeight);

		hash = window.location.hash;

		/**
		 * WARNING: pixelation and dragons ahead.
		 * This is why we use retina icons assets on non-retina screens, etc. (Thankfully, the file sizes are quite small as-is.)
		 * "You so crazy / I think I wanna have your baby"
		 */

		if (useZoom && targetHeight !== absoluteMinimumHeight) {

			// we have a candidate for scaling.
			// restrict scale to fit within both width + height of current browser window.
			zoomScale = Math.min(windowWidth / minWidth, targetHeight / absoluteMinimumHeight);

			// regardless of browser dimensions, limit within global range.
			zoomScale = Math.max(zoomScaleMin, Math.min(zoomScaleMax, zoomScale));

		}

		// ad should always be centered in a full-height frame.
		// only count if an ad is showing.
		
		if (hasAd) {

			Y.one('#section-0').setStyle('height', windowInnerHeight + 'px');

			// for positioning offset calculations
			frameHeights[0] = windowInnerHeight;

		} else {

			frameHeights[0] = 0;

		}

		// assign new min-height, based on natural offsetHeight.
		Y.each(frames, function(frame, i) {

			// special case: exclude the ad section (index 0) from scaling.
			if (!hasAd || i > 0) {

				if (zoomScale !== lastZoomScale) {

					// transform: scale3d() results in raster-sized fonts on Webkit. However, .style.zoom works on Webkit (and old IE.)
					if (useTransformZoom) {

						sectionBodies.item(i).setStyle('transform', 'scale3d(' + zoomScale + ',' + zoomScale + ',' + zoomScale + ')');
						frame.setStyle('overflow', 'hidden');

					} else {

						sectionBodies.item(i).setStyle('zoom', zoomScale);
						// frame.style.overflow = 'hidden';

					}

				}

				// read natural content height, assign min-height rounded up to nearest screen length.
				frame.setStyle('minHeight', '1px');
				frame.setStyle('height', 'auto');

				// reading offsetHeight may be expensive, cause layout etc. re-assigning height certainly will.
				thisMinHeight = Math.max(1, Math.ceil(frame.getAttribute('offsetHeight') / innerHeight));

				frameHeights[i] = thisMinHeight * innerHeight;

				frame.setStyle('minHeight', frameHeights[i] + 'px');

				if (isOldIE) {

					// no min-height here...
					frame.setStyle('height', frameHeights[i] + 'px');

				} else {

					frame.setStyle('height', 'auto');

				}

			}

		});

		if (zoomScale !== lastZoomScale) {
			lastZoomScale = zoomScale;
		}

		// determine current position/offset
		if (hash) {

			currentFrame = document.getElementById(hash.substr(1));

			if (currentFrame && document.body) {

				// figure out target height, and go there!

				// if there is no ad, subtract 1 since #section-0 will be gone.
				offset = parseInt(hash.substr(hash.lastIndexOf('-')+1), 10) + (!hasAd ? -1 : 0);

				for (i=0, j=offset; i<j; i++) {
					adjustedScrollTop += frameHeights[i];
				}

				// ipad may fire this on scroll, which breaks scroll.
				if (!isMobile || allowMobile) {
					scrollElement.scrollTop = adjustedScrollTop;
				}

			}

		}

		// refresh, since page layout likely just changed
		getDimensions();

	}

	function setBackgroundOpacity(offset, opacity) {

		if (backgroundOpacity[offset] !== opacity) {
			backgrounds[offset].setStyle('opacity', opacity);
			backgroundOpacity[offset] = opacity;
		}

	}

	function scrollUpdate() {

		var innerHeight,
		    documentHeight,
		    relativeScroll,
		    bgScale,
		    blur;

		// first-run, undefined case
		if (!windowInnerHeight || !bodyOffsetHeight) {
			getDimensions();
		}

		/**
		 * reading scrollTop may be expensive / trigger layout. Only read if a YUI animation is not running.
		 * in the case of YUI animation, we know and can calculate scrollTop independently.
		 */
		
		if (!scrollAnimation) {
			if (console && console.log) {
				console.log('scrollAnimation inactive - reading expensive scroll from DOM');
			}
			scrollTop = scrollElement.scrollTop;
		}

		innerHeight = windowInnerHeight;
		documentHeight = bodyOffsetHeight;

		scrollPosition = (scrollTop / (documentHeight - innerHeight));

		// probably don't need *every* pixel, etc.
		if (!useIncrementalScroll) {

			amount = scrollPosition;

		} else {

			// trade-off: fidelity, less DOM updates, better performance
			amount = Math.floor(scrollPosition * 64);

		}

		if (amount !== lastAmount) {

			if (useBlur) {

				if (scrollPosition >= 0.45) {

					// bottom half: show partial blur, work down to full blur
					setBackgroundOpacity(1, 1);
					setBackgroundOpacity(2, Math.min(1, (scrollPosition-0.45) / 0.5));

				} else {

					// upper half: show original background, work down to partial blur
					setBackgroundOpacity(2, 0);
					setBackgroundOpacity(1, Math.min(1, scrollPosition / 0.45));

				}

			}

			if (useParallax) {

				if (lastParallax !== scrollPosition) {

					/**
					 * here's where the fun happens.
					 * subtract percentage of 110% height on background, and that's how much space we get to play with.
					 */

					if (useScale3D) {
						bgScale = 1 + (scrollPosition * 0.025);
						backgroundParallax.setStyle('transform', 'scale3d(' + bgScale + ', ' + bgScale + ', 1) translate3d(0%, ' + (-((10/110)*100) * scrollPosition) + '%, 0)');
					} else {
						backgroundParallax.setStyle('transform', 'translate3d(0%,' + (-((10/110)*100) * scrollPosition) + '%, 0)');
					}

					lastParallax = scrollPosition;

				}

			}

			// update
			lastAmount = amount;

		}

	}

	function scrollHandler() {

		// dirty, dirty, evil!
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(scrollUpdate);
		}

	}

	function evilWheelHandler(e) {

		/**
		 * There is nothing wrong with your television set. Do not attempt to adjust the picture. We are controlling transmission.
		 * ... We will control the horizontal. We will control the vertical.
		 */

		var now,
		    deltaY;

		// for now, just exit if there is an active animation.
		if (scrollAnimation) {
			e.preventDefault();
			return false;
		}

		// -- evil stuff below --

		now = new Date();
		deltaY = parseInt(e.deltaY || e.wheelDeltaY, 10);

		// don't mess with the event if there's no y.
		if (deltaY !== undefined && !isNaN(deltaY)) {

			// basic de-bouncing of scroll events; treat any that fire within a certain window as not being unique.
			if (now - lastScrollTimestamp > 1500) {

				// here's a fun one - this may not be fully implemented. doesn't seem to work when scrolling is inverted per OS preferences(?)
				if (typeof e.webkitDirectionInvertedFromDevice !== 'undefined') {

					if (e.webkitDirectionInvertedFromDevice) {
						deltaY *= -1;
					} else if (isSafari) {
						// HACK: if OS X and preference for scroll direction is flipped, this will fix that case.
						// it'll probably break regular scroll for everyone else. :/
						deltaY *= -1;
					}

				} 

				// new scroll action
				if (deltaY < 0) {

					// up!
					animateTo('#section-' + getPreviousSection(), true, true);

				} else if (deltaY > 0) {

					// down!
					animateTo('#section-' + getNextSection(), true, true);

				}

				lastScrollTimestamp = Date.now();

			}

			e.preventDefault();
			return false;

		}

	}

	function addScrollHandlers() {

		/**
		 * dirty, dirty, evil: hijack mouse wheel (+trackpad) scroll gesture-type events, force controlled scroll.
		 * also, touch events if apparently supported.
		 * don't apply if it looks like there's a horizontal scrollbar.
	     */

		if (useScroll) {

			if (!isMobile) {

				if (window.addEventListener && document.body.scrollWidth <= window.innerWidth) {
					window.addEventListener('mousewheel', evilWheelHandler, false);
					window.addEventListener('wheel', evilWheelHandler, false);
				}

			}

			
						

		}

	}

	function enhancePage() {

		if (isOldIE) {
			return false;
		}

		Y.one('window').on('resize', resizeHandler, false);

		// no special effects for mobile, too expensive.
		if (!isMobile || allowMobile) {
			Y.one('window').on('scroll', scrollHandler, false);
		}

		// update retina check, for those of you who move windows between non-retina and retina monitors.
		isRetina = checkRetina();

		// and update useScale3D, too.
		useScale3D = checkScale3D();

		scrollHandler();
		resizeHandler();

		if (!isMobile || allowMobile) {
			// enable + load some of the larger background images.
			sohp.addClass(css.enabled);
		} else {
			// explicitly disable a few things for mobile.
			sohp.addClass(css.mobile);
		}

		Y.one(document).on('keydown', function(e) {

			var down, up, beginning, end;
			var ignoreMultiple;

			// space bar / page down, j/k, arrow keys
			if (e.keyCode) {
				down = (e.keyCode === 32 || e.keyCode === 34 || e.keyCode === 74 || e.keyCode === 40);
				up = (e.keyCode === 33 || e.keyCode === 75 || e.keyCode === 38);
				beginning = (e.keyCode === 36);
				end = (e.keyCode === 35);
			}

			// ignore if in an input, select/option etc.
			if (!document.activeElement || !document.activeElement.nodeName.match(/(input|select|option)/i)) {

				// block multiple events only for up/down arrow keys.
				if (!down && !up) {
					ignoreMultiple = true;
				}

				// do the nav thing
				if (down) {
					animateTo('#section-' + getNextSection(), ignoreMultiple);
				} else if (up) {
					animateTo('#section-' + getPreviousSection(), ignoreMultiple);
				} else if (beginning) {
					animateTo('#section-1');
				} else if (end) {
					animateTo('#section-' + maxSections);
				}

				if (up || down || beginning || end) {
					e.preventDefault();
					return false;
				}

			}

		});

		// watch scrolling
		addScrollHandlers();

		// wait a moment, notify user
		window.setTimeout(function() {

			updateFixedItems();

			window.setTimeout(function() {

				if (!didFirstScroll && getCurrentSection() < maxSections) {
					downArrowUI.addClass(css.yoohooOverHere);

				}

				// update nav, and start first video
				updateDotsNav();

			}, 550);

		}, 250);

	}

	if (!isOldIE) {

		// get the party started.

		// listen to video progress events.
		(function() {

			var i, j;
			var videos = document.querySelectorAll('video');

			/**
			 * IE 9 *might* choke on some MP4 videos, despite them apparently being encoded to spec.
			 * Additionally, IE 9-11 may not support the <video> poster attribute (or, it doesn't show in the error case) - so, use a fallback.
			 */

			var handleErrors = (navigator.userAgent.match(/msie|trident/i));

			// not you, IE 8.
			if (window.addEventListener) {

				for (i=0, j=videos.length; i<j; i++) {

					videos[i].addEventListener('timeupdate', function(e) {
						checkVideoPosition(e.target);
					}, false);

					videos[i].addEventListener('ended', function(e) {
						resetVideoActions(e.target.id);
					}, false);

					if (handleErrors) {

						videos[i].addEventListener('error', function(e) {
							disableVideo(e.target);
						}, false);

					}
					
				}

			}

		}());

		// watch clicks for section links - direct navigation, or previous/next.

		Y.one('body').on('click', function(e) {

			var target = e.target;
			var href = target.get('href');
			var hash, hashOffset;
			var url;
			var anim;

			if (href) {

				// a #section-x link was clicked.

				if (href.match(/section/i)) {

					hashOffset = href.indexOf('#');

					if (hashOffset !== -1) {
						hash = href.substr(hashOffset);
						animateTo(hash);
						e.preventDefault();
						return false;
					}

				} else {

					// up/down navigation links.

					if (href.match(/\#down/i)) {

						animateTo('#section-' + getNextSection());

						e.preventDefault();
						return false;

					} else if (href.match(/\#up/i)) {

						animateTo('#section-' + getPreviousSection());

						e.preventDefault();
						return false;

					}

				}

			}

		});

		/**
		 * Glorious hacks!
		 * Because of nested relative elements, the hover / click target for
		 * the up/down arrows and their respective UI bits must be separated.
		 * The link is flexible, while the arrow must be 50% and bottom-of-screen.
		 */

		if (upArrowLink) {

			upArrowLink.on('mouseover', function(e) {
				upArrowUI.addClass('hover');
			});

			upArrowLink.on('mouseout', function(e) {
				upArrowUI.removeClass('hover');
			});

			downArrowLink.on('mouseover', function(e) {
				downArrowUI.addClass('hover');
			});

			downArrowLink.on('mouseout', function(e) {
				downArrowUI.removeClass('hover');
			});

		}

		(function() {

			var searchField = Y.one('#search-field');

			// silly UI tweak for search, since webkit and desktop Safari pad the search box heavily.
			if (isWebkit && !isMobile && !navigator.platform.match(/win/i)) {
				searchField.setStyle('paddingLeft', '0px');
				if (isSafari) {
					searchField.setStyle('paddingRight', '0px');
                    searchField.setStyle('font-size', '12px');
				}
			}

			if (searchField) {
				searchField.on('keyup', updateSearch);
				searchField.on('change', updateSearch);
				searchField.on('click', function(e) {
					window.setTimeout(function() {
						updateSearch(e);
					}, 20);
				});
			}


		}());

		// update dots nav
		function updateDotsNav() {

			var currentSection = getCurrentSection(),
			    navItem,
			    eventID;

			if (lastDotNavItem) {
				lastDotNavItem.removeClass('selected');
			}

			navItem = Y.one(dotsNavItems[currentSection]);

			navItem.addClass('selected');
			lastDotNavItem = navItem;

			eventID = 'section-' + currentSection;

			if (enterEvents[eventID]) {

				// apply this after a short delay, also checking that a new animation has not started.

				if (animationTimer) {
					window.clearTimeout(animationTimer);
				}

				animationTimer = window.setTimeout(function() {
					if (!scrollAnimation) {
						enterEvents[eventID]();
					}
					animationTimer = null;
				}, 250);

			}

		}

	}

	// ad stuff

    function noAd() {

		// Ad iframe says, no ad (or postMessage error / timed out, etc.) Hide ad section of page, prevent navigation from going there.

		var sohp = document.getElementById('sohp-2014');

		if (sohp) {
			sohp.className = ((sohp.className ? sohp.className + ' ' : '') + 'no-ad');
		}

		// update ad flag, prevent nav going to 0.
		hasAd = false;
		minSection = 1;

		// if the ad was enabled, remove the extra section.
		if (adEnabled) {
			maxSections--;
		}

	}

	(function() {

		// safety net
		var adTimer;

		/**
		 * Wait and see if we have an ad scheduled, according to adHelper.
		 * If no response within a reasonable time, presume there is no ad and render page without ad elements.
		 */

		if (adEnabled && typeof window.billboardAd !== 'undefined' && F && F.adHelper) {

			// if no ad response within a reasonable amount of time, enable all the JS.
			adTimer = window.setTimeout(function() {

				noAd();
				enhancePage();

			}, 2000);

			F.adHelper.onScheduledAd(window.billboardAd, function() {

				// Ad server says, "we have an ad."

				// kill the timer, if running
				if (adTimer) {
					window.clearTimeout(adTimer);
					adTimer = null;
				}

				// and get fancy
				enhancePage();

			});

			F.adHelper.onEmptyAd(window.billboardAd, function() {

				// Ad server says, "no ad."

				// kill the timer, if running
				if (adTimer) {
					window.clearTimeout(adTimer);
					adTimer = null;
				}

				noAd();

				// and enable the scroll features
				enhancePage();

			});

		} else {

			// no ad - enable features right away.

			noAd();
			enhancePage();

		}

	}());

	// Apply a GPU tweak to fix some scroll-based rendering quirks - video or text not displaying on scroll, etc.
	if (isWebkit) {
		Y.one('#sohp-2014').addClass('gpu');
	}

	
	
	
		
		
			var breakpoints = [320,360,480,540,600,640,720,768,800,854,960,1024,1050,1080,1152,1200,1280,1344,1360,1366,1400,1440,1536,1600,1680,1920,2048,240,2560],
			    doc_body    = Y.one('body'),
			    viewport_w  = doc_body.get('winWidth'),
			    viewport_h  = doc_body.get('winHeight');
		
			function whatFormat(width, height) {
	
				//
				// This function chooses a common format from the ratio of hight and width
				//
				// The common formats are:
				// 0 : Narrow
				// 1 : Square
				// 2 : Wide
				// 3 : Double Wide
				//
				// This code is shared with YWA so don't change it here without changing
				// it in YWA chief.
				//

				var ratio = parseFloat(width / height, 10);

				if (ratio < 1) {
					return 0; // 'Narrow'
				}
	
				if (ratio == 1.0) {
					return 1; // 'Square'
				}
	
				if (ratio > 1) {
					if (ratio < 1.5) {
						return 3; // 'Wide'
					} else {
						return 4; // 'Double Wide'
					}
				}
			}
			
			function findClosestBreakpoint(width) {
				var compare = {}, low, hi;
				for (i = 0; breakpoints.length > i; i++) {
					low = width - (breakpoints[i - 1] || 0);
					hi  = breakpoints[i] - width;
					if (Math.max(width, breakpoints[i]) === breakpoints[i]) {
						compare[low] = (breakpoints[i - 1] || 0);
						compare[hi]  = breakpoints[i];
						return compare[Math.min(low, hi)];
					}
				}
			}
			
			function clientOnOffSwitch() {
				var enableRapid = true;
				
				return enableRapid;
			}
		
		
		
		//
		// This enables campaign keeper. This takes a campaign id from the 
		// querystring and adds it to a cookie. This cookie will be used to 
		// track campaigns accross Reboot and Refresh in YWA
		//
		var campaigns = '';
				
			
			
				var raw_campaigns = Y.Cookie.get('flcp'),
				    campaigns_object;
			
				if(raw_campaigns && raw_campaigns.substring(0,2) === 'j:') {
					
					if (raw_campaigns.substring(0, 2)) {
						campaigns_object = JSON.parse(raw_campaigns.substring(2));
					}

					if (Y.Lang.isObject(campaigns_object)) {
						campaigns = Object.keys(campaigns_object);
					}
				}
			
			
		
			
	
				
		
		
		
		var keys = {
			A_pn: '/index.gne'
			, joindate: '-1'
											};

			
		YAHOO.i13n.YWA_ACTION_MAP = {
				};
		
				YAHOO.i13n.YWA_CF_MAP = {
			joindate: 6,
			actcard: 22,
			autotags: 23
		};

		
		
		
				
		var ywa = {
			project_id: 10001561398679,
			host: 'y.analytics.yahoo.com',
			document_name: '/index.gne',
						cf: {
								28: 'sohp_2014',
								39: 'n',
								43: 'n',
								1: 'en-us',
				3: 'Prod',
				4: '',
								7: '0',
				8: 'photo_page:scrappy_beta_signed_out,https_all:ssl_redirect_enabled,search_page:new_page,autosuggest:current,photostream_page:classic,albums_page:classic,favorites_page:classic,groups_page:classic,explore_page:classic',
				9: '0',
				10: '-1',
				11: '-1',
				12: '-1',
				13: '2',
				16: viewport_w + 'x' + viewport_h,
				45: '3',
				51: '7',
				52: whatFormat(viewport_w, viewport_h),
				53: findClosestBreakpoint(viewport_w),
				54: '2',
				55: Y.Lang.isArray(campaigns) ? campaigns.join(',') : '',
				
				56: '0',
				57: '0',
				58: '0'
			}
		};
	
	
		var conf = {
			use_rapid: (true && clientOnOffSwitch()),
			ywa: ywa,			keys: keys,
			lt_attr: 'data-track',
			client_only: 1,
			spaceid: '792600119',
			tracked_mods: [], 			track_lv: true,
			compr_on: true,
			webworker_file: '/javascript/rapidworker-1.1.js',

					use_sampling: false,
		
					
					
			
			nofollow_class: ["nav_more","signin-popup","rapidnofollow","contact-changer-trigger","personmenu-relationship-change"]
		};

						
					conf.tracked_mods.push('sohp-2014');
		
		Y.config.flickr.rapidconf = conf;
		Y.rapidTracker.init(conf);
		
	

	
});
			Y.use('flickr', 'popup-login', 'grease', 'comscore', function(Y) {

		Y.flickr();
	
		Y.popup_login.init();
	
	Y.grease.init(0);

	if (typeof COMSCORE !== 'undefined') {
		COMSCORE._flickrconf = { c1: 2, c2: 7241469, c3: "", c4: "www.flickr.com%2F", c5: "792600119", c6: "", c15: "" };
		COMSCORE.beacon(COMSCORE._flickrconf);
	}


	page_timing.js_done = new Date().getTime();
	
});
			Y.use('flickr-page-timing', function(Y) {

	Y.flickrPageTiming({
		is_owner: false,
		page_id: 'soup'	});


	
});
		});
	})();


// <body> block 8
(function(){if(typeof page_timing!='undefined'){page_timing.page_end=new Date().getTime();function timing_dom_ready(){page_timing.dom_ready=new Date().getTime();} function timing_window_load(){page_timing.window_load=new Date().getTime();} function dom_onready(onready_handler){if(typeof onready_handler=='undefined'){return false;} if(document.readyState==="complete"){onready_handler();}else{if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener('DOMContentLoaded',DOMContentLoaded,false);onready_handler();}}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);onready_handler();}}};if(document.addEventListener){document.addEventListener('DOMContentLoaded',onready_handler,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",onready_handler);}}} function window_onload(onready_handler){var m1=window.addEventListener;var m2=document.addEvent;if(m1){m1('load',onready_handler,false);}else if(m2){m2(window,'onload',onready_handler);}} dom_onready(timing_dom_ready);window_onload(timing_window_load);}})();

