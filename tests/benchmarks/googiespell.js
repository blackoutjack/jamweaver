
// AJS.js

/*
Last Modified: 19/10/09 13:55:34

AJS JavaScript library
    A very small library with a lot of functionality
AUTHOR
    4mir Salihefendic (http://amix.dk) - amix@amix.dk
LICENSE
    Copyright (c) 2006 amix. All rights reserved.
    Copyright (c) 2005 Bob Ippolito. All rights reserved.
    http://www.opensource.org/licenses/mit-license.php
VERSION
    4.6
SITE
    http://orangoo.com/AmiNation/AJS
**/
if(!window.AJS) {
var AJS = {
    BASE_URL: "",
    ajaxErrorHandler: null,

////
// General accessor functions
////
    getQueryArgument: function(var_name) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if (pair[0] == var_name) {
                return pair[1];
            }
        }
        return null;
    },

    _agent: navigator.userAgent.toLowerCase(),
    _agent_version: navigator.productSub,

    isIe: function() {
        return (AJS._agent.indexOf("msie") != -1 && AJS._agent.indexOf("opera") == -1);
    },
    isIe8: function() {
        return AJS._agent.indexOf("msie 8") != -1;
    },
    isSafari: function(all) {
        if(all)
            return AJS._agent.indexOf("khtml");

        return (AJS._agent.indexOf("khtml") != -1 &&
                AJS._agent.match(/3\.\d\.\d safari/) == null);
    },
    isOpera: function() {
        return AJS._agent.indexOf("opera") != -1;
    },
    isMozilla: function() {
        return (AJS._agent.indexOf("gecko") != -1 && AJS._agent_version >= 20030210);
    },
    isMac: function() {
        return (AJS._agent.indexOf('macintosh') != -1);
    },
    isCamino: function() {
        return (AJS._agent.indexOf("camino") != -1);
    },


////
// Array functions
////
    //Shortcut: AJS.$A
    createArray: function(v) {
        if(AJS.isArray(v) && !AJS.isString(v))
            return v;
        else if(!v)
            return [];
        else
            return [v];
    },

    forceArray: function(args) {
        var r = [];
	//alert("args-len = " + args.length);
        for(var i = 0; i < args.length; i++)
            r.push(args[i]);
	//alert(r.toString());
        return r;
    },

    join: function(delim, list) {
        try {
            return list.join(delim);
        }
        catch(e) {
            var r = list[0] || '';
            AJS.map(list, function(elm) {
                r += delim + elm;
            }, 1);
            return r + '';
        }
    },

    isIn: function(elm, list) {
        var i = AJS.getIndex(elm, list);
        if(i != -1)
            return true;
        else
            return false;
    },

    getIndex: function(elm, list/*optional*/, eval_fn) {
        for(var i=0; i < list.length; i++)
            if(eval_fn && eval_fn(list[i]) || elm == list[i])
                return i;
        return -1;
    },

    getFirst: function(list) {
        if(list.length > 0)
            return list[0];
        else
            return null;
    },

    getLast: function(list) {
        if(list.length > 0)
            return list[list.length-1];
        else
            return null;
    },

    getRandom: function(list) {
        return list[Math.floor(Math.random()*list.length)];
    },

    update: function(l1, l2) {
        for(var i in l2)
            l1[i] = l2[i];
        return l1;
    },

    flattenList: function(list) {
	//alert("list = " + list.toString());
        var has_list = false;
        var new_list = [];

        for(var i=0; i < list.length; i++) {
            var elm = list[i];
            if(AJS.isArray(elm)) {
                has_list = true;
                break;
            }

            if(elm != null)
                new_list.push(elm);
        }

        if(!has_list){
	    //alert("new_list = " + new_list.toString());
            return new_list;
	}

        var r = [];
        var _flatten = function(r, l) {
            AJS.map(l, function(o) {
                if(o == null) {
                }
                else if (AJS.isArray(o))
                    _flatten(r, o);
                else
                    r.push(o);
            });
        }
        _flatten(r, list);
	//alert("r = " + r.toString());
        return r;
    },

    //[[elm1, ..., elmN], valX] -> [elm1, ..., elmN, valX]
    flattenElmArguments: function(args) {
	//alert("args = " + args.toSource());
	var f = AJS.forceArray(args);
	//alert("f = " + f);
	return AJS.flattenList(f);
	//return AJS.flattenList(AJS.forceArray(args));
    },


////
// Functional programming
////
    map: function(list, fn,/*optional*/ start_index, end_index) {
        var i = 0, l = list.length;
        if(start_index)
             i = start_index;
        if(end_index)
             l = end_index;
        for(i; i < l; i++) {
            var val = fn(list[i], i);
            if(val != undefined)
                return val;
        }
    },

    rmap: function(list, fn) {
        var i = list.length-1, l = 0;
        for(i; i >= l; i--) {
            var val = fn.apply(null, [list[i], i]);
            if(val != undefined)
                return val;
        }
    },

    filter: function(list, fn, /*optional*/ start_index, end_index) {
        var r = [];
        AJS.map(list, function(elm) {
            if(fn(elm))
                r.push(elm);
        }, start_index, end_index);
        return r;
    },

    partial: function(fn) {
        var args = AJS.$FA(arguments);
        args.shift();
        return function() {
            args = args.concat(AJS.$FA(arguments));
            return fn.apply(window, args);
        }
    },


////
// DOM functions
////

//--- Accessors ----------------------------------------------
    //Shortcut: AJS.$
    getElement: function(id) {
        if(AJS.isString(id) || AJS.isNumber(id))
            return document.getElementById(id);
        else
            return id;
    },

    //Shortcut: AJS.$$
    getElements: function(/*id1, id2, id3*/) {
        var args = AJS.flattenElmArguments(arguments);
        var elements = new Array();
            for (var i = 0; i < args.length; i++) {
                var element = AJS.getElement(args[i]);
                elements.push(element);
            }
            return elements;
    },

    //Shortcut: AJS.$bytc
    getElementsByTagAndClassName: function(tag_name, class_name, /*optional*/ parent, first_match) {
        var class_elements = [];

        if(!AJS.isDefined(parent))
            parent = document;
        if(!AJS.isDefined(tag_name))
            tag_name = '*';

        var i, j;

        if(class_name && document.getElementsByClassName) {
            var els = parent.getElementsByClassName(class_name);

            if(tag_name == '*') {
                class_elements = AJS.forceArray(els);
            }
            else {
                var els_len = els.length;
                for (i = 0; i < els_len; i++) {
                    if(els[i].nodeName.toLowerCase() == tag_name) {
                        class_elements.push(els[i]);
                    }
                }
            }
        }
        else {
            var els = parent.getElementsByTagName(tag_name);

            if(!class_name) {
                class_elements = AJS.forceArray(els);
            }
            else {
                var els_len = els.length;
                var pattern = new RegExp("(^|\\s)" + class_name + "(\\s|$)");
                for (i = 0; i < els_len; i++) {
                    if (pattern.test(els[i].className) || !class_name) {
                        class_elements.push(els[i]);
                    }
                }
            }
        }

        if(first_match)
            return class_elements[0];
        else
            return class_elements;
    },

    nodeName: function(elm) {
        return elm.nodeName.toLowerCase();
    },

    _nodeWalk: function(elm, tag_name, class_name, fn_next_elm) {
        var p = fn_next_elm(elm);

        var checkFn;
        if(tag_name && class_name) {
            checkFn = function(p) {
                return AJS.nodeName(p) == tag_name && AJS.hasClass(p, class_name);
            }
        }
        else if(tag_name) {
            checkFn = function(p) { return AJS.nodeName(p) == tag_name; }
        }
        else {
            checkFn = function(p) { return AJS.hasClass(p, class_name); }
        }

        if(checkFn(elm))
            return elm;

        while(p) {
            if(checkFn(p))
                return p;
            p = fn_next_elm(p);
        }
        return null;
    },

    //Shortcut: AJS.$gp
    getParentBytc: function(elm, tag_name, class_name) {
        return AJS._nodeWalk(elm, tag_name, class_name, function(m) { if(m) return m.parentNode; });
    },

    //Shortcut: AJS.$gc
    getChildBytc: function(elm, tag_name, class_name) {
        var elms = AJS.$bytc(tag_name, class_name, elm);
        if(elms.length > 0)
            return elms[0];
        else
            return null;
    },

    hasParent: function(elm, parent_to_consider, max_look_up) {
        if(elm == parent_to_consider)
            return true;
        if(max_look_up == 0)
            return false;
        return AJS.hasParent(elm.parentNode, parent_to_consider, max_look_up-1);
    },

    getPreviousSiblingBytc: function(elm, tag_name, class_name) {
        return AJS._nodeWalk(elm, tag_name, class_name, function(m) { return m.previousSibling; });
    },

    getNextSiblingBytc: function(elm, tag_name, class_name) {
        return AJS._nodeWalk(elm, tag_name, class_name, function(m) { return m.nextSibling; });
    },

    getBody: function() {
        return AJS.$bytc('body')[0]
    },


//--- Form related ----------------------------------------------
    //Shortcut: AJS.$f
    getFormElement: function(form, name) {
        form = AJS.$(form);
        var r = null;
        AJS.map(form.elements, function(elm) {
            if(elm.name && elm.name == name)
                r = elm;
        });
        if(r)
            return r;

        AJS.map(AJS.$bytc('select', null, form), function(elm) {
            if(elm.name && elm.name == name)
                r = elm;
        });
        return r;
    },

    getSelectValue: function(select) {
        var select = AJS.$(select);
        return select.options[select.selectedIndex].value;
    },


//--- DOM related ----------------------------------------------
    //Shortcut: AJS.DI
    documentInsert: function(elm) {
        if(typeof(elm) == 'string')
            elm = AJS.HTML2DOM(elm);
        document.write('<span id="dummy_holder"></span>');
        AJS.swapDOM(AJS.$('dummy_holder'), elm);
    },

    //Shortcut: AJS.ACN
    appendChildNodes: function(elm/*, elms...*/) {
        if(arguments.length >= 2) {
            AJS.map(arguments, function(n) {
                if(AJS.isString(n))
                    n = AJS.TN(n);
                if(AJS.isDefined(n))
                    elm.appendChild(n);
            }, 1);
        }
        return elm;
    },

    appendToTop: function(elm/*, elms...*/) {
        var args = AJS.flattenElmArguments(arguments).slice(1);
        if(args.length >= 1) {
            var first_child = elm.firstChild;
            if(first_child) {
                while(true) {
                    var t_elm = args.shift();
                    if(t_elm)
                        AJS.insertBefore(t_elm, first_child);
                    else
                        break;
                }
            }
            else {
                AJS.ACN.apply(null, arguments);
            }
        }
        return elm;
    },

    //Shortcut: AJS.RCN
    replaceChildNodes: function(elm/*, elms...*/) {
        var child;
        while ((child = elm.firstChild))
            AJS.swapDOM(child, null);

        if (arguments.length < 2)
            return elm;
        else
            return AJS.appendChildNodes.apply(null, arguments);
        return elm;
    },

    insertAfter: function(elm, reference_elm) {
        reference_elm.parentNode.insertBefore(elm, reference_elm.nextSibling);
        return elm;
    },

    insertBefore: function(elm, reference_elm) {
        reference_elm.parentNode.insertBefore(elm, reference_elm);
        return elm;
    },

    swapDOM: function(dest, src) {
        dest = AJS.getElement(dest);
        var parent = dest.parentNode;
        if (src) {
            src = AJS.getElement(src);
            parent.replaceChild(src, dest);
        } else {
            parent.removeChild(dest);
        }

        return src;
    },

    removeElement: function(/*elm1, elm2...*/) {
        var args = AJS.flattenElmArguments(arguments);
        try {
            AJS.map(args, function(elm) { 
                if($(elm)) 
                    AJS.swapDOM(elm, null); 
            });
        }
        catch(e) {
        }
    },

    createDOM: function(name, attrs) {
        var i=0, attr;
        var elm = document.createElement(name);

        var first_attr = attrs[0];
        if(AJS.isDict(attrs[i])) {
            for(k in first_attr) {
                attr = first_attr[k];
                if(k == 'style' || k == 's')
                    elm.style.cssText = attr;
                else if(k == 'c' || k == 'class' || k == 'className')
                    elm.className = attr;
                else {
                    elm.setAttribute(k, attr);
                }
            }
            i++;
        }

        if(first_attr == null)
            i = 1;

        for(var j=i; j < attrs.length; j++) {
            var attr = attrs[j];
            if(attr) {
                var type = typeof(attr);
                if(type == 'string' || type == 'number')
                    attr = AJS.TN(attr);
                elm.appendChild(attr);
            }
        }

        return elm;
    },

    _createDomShortcuts: function() {
        var elms = [
                "ul", "li", "td", "tr", "th",
                "tbody", "table", "input", "span", "b",
                "a", "div", "img", "button", "h1",
                "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form",
                "p", "select", "option", "optgroup", "iframe", "script",
                "center", "dl", "dt", "dd", "small",
                "pre", 'i', 'label', 'thead'
        ];
        var extends_ajs = function(elm) {
            AJS[elm.toUpperCase()] = function() {
                return AJS.createDOM.apply(null, [elm, arguments]); 
            };
        }
        AJS.map(elms, extends_ajs);
        AJS.TN = function(text) { return document.createTextNode(text) };
    },
    
    setHTML: function(/*elms..., html*/) {
        var args = AJS.flattenElmArguments(arguments);
        var html = args.pop();
        AJS.map(args, function(elm) { 
            if(elm)
                elm.innerHTML = html;
        });
        return args[0];
    },


//--- CSS related ----------------------------------------------
    //Shortcut: AJS.$sv
    setVisibility: function(/*elms..., val*/) {
        var args = AJS.flattenElmArguments(arguments);
        var val = args.pop() && 'visible' || 'hidden';
        AJS.setStyle(args, 'visibility', val);
    },

    showElement: function(/*elms...*/) {
        AJS.setStyle(AJS.flattenElmArguments(arguments), 'display', '');
    },

    hideElement: function(elm) {
        AJS.setStyle(AJS.flattenElmArguments(arguments), 'display', 'none');
    },

    isElementHidden: function(elm) {
        return ((elm.style.display == "none") || (elm.style.visibility == "hidden"));
    },

    isElementShown: function(elm) {
        return !AJS.isElementHidden(elm);
    },

    setStyle: function(/*elm1, elm2..., {prop: value}*/) {
	//alert("arg-len = "  + arguments.length);
	//if(arguments.length == 3)
	//	alert(" 2 arg = " + arguments[0] + ":" + arguments[1] + ":" + arguments[2]);
        var args = AJS.flattenElmArguments(arguments);
	//alert("args = " + args.toString());
        var value = args.pop();
	//alert("value is value = " + AJS.isObject(value));
	var num_styles = ['top', 'left', 'right', 'width', 'height'];
        if(AJS.isObject(value)) {
            AJS.map(args, function(elm) { 
                AJS.map(AJS.keys(value), function(prop) {
                    var css_dim = value[prop];
                    if(AJS.isIn(prop, num_styles))
                        css_dim = AJS.isString(css_dim) && css_dim || css_dim + 'px';

                    elm.style[prop] = css_dim;
                });
            });
        }
        else {
            var property = args.pop();
	    AJS.map(args, function(elm) { 
		if(AJS.isIn(property, num_styles))
                    value = AJS.isString(value) && value || value + 'px';
                elm.style[property] = value;
		//alert("elm = " + elm + " : value = " + value);
            });
        }
    },

    __cssDim: function(args, property) {
	//alert("arg-len 1 = "  + args.length);
	var args = AJS.$FA(args);
	//alert("arg-len 2 = "  + args.length);
	//alert("property = "  + property + " : prop-len = " + property.length);
        args.splice(args.length-1, 0, property);
	//alert(" 1 arg = "  + args[0] + ":" + args[1] + ":" + args[2]);
        AJS.setStyle.apply(null, args);
    },

    setWidth: function(/*elm1, elm2..., width*/) { 
        return AJS.__cssDim(arguments, 'width');
    },
    setHeight: function(/*elm1, elm2..., height*/) {
        return AJS.__cssDim(arguments, 'height');
    },
    setLeft: function(/*elm1, elm2..., left*/) {
        return AJS.__cssDim(arguments, 'left');
    },
    setRight: function(/*elm1, elm2..., left*/) {
        return AJS.__cssDim(arguments, 'right');
    },
    setTop: function(/*elm1, elm2..., top*/) {
        return AJS.__cssDim(arguments, 'top');
    },

    setClass: function(/*elm1, elm2..., className*/) {
        var args = AJS.flattenElmArguments(arguments);
        var c = args.pop();
        AJS.map(args, function(elm) { elm.className = c});
    },
    addClass: function(/*elm1, elm2..., className*/) {
        var args = AJS.flattenElmArguments(arguments);
        var cls = args.pop();
        var add_class = function(o) {
            if(!new RegExp("(^|\\s)" + cls + "(\\s|$)").test(o.className))
                o.className += (o.className ? " " : "") + cls;
        };
        AJS.map(args, function(elm) { add_class(elm); });
    },
    hasClass: function(elm, cls) {
        if(!elm || !elm.className)
            return false;
        var e_cls = elm.className;
        return (e_cls.length > 0 && (e_cls == cls ||
                new RegExp("(^|\\s)" + cls + "(\\s|$)").test(e_cls)));
    },
    removeClass: function(/*elm1, elm2..., className*/) {
        var args = AJS.flattenElmArguments(arguments);
        var cls = args.pop();
        var rm_class = function(o) {
            o.className = o.className.replace(new RegExp("(^|\\s)" + cls, 'g'), "");
        };
        AJS.map(args, function(elm) { rm_class(elm); });
    },

    setOpacity: function(elm, p) {
        if(p == 1) {
            elm.style.opacity = 1;
            elm.style.filter = "";
        }
        else {
            elm.style.opacity = p;
            elm.style.filter = "alpha(opacity="+ p*100 +")";
        }
    },


//--- Misc ----------------------------------------------
    HTML2DOM: function(html,/*optional*/ first_child) {
        var d = AJS.DIV();
        d.innerHTML = html;
        if(first_child)
            return d.childNodes[0];
        else
            return d;
    },

    preloadImages: function(/*img_src1, ..., img_srcN*/) {
        AJS.AEV(window, 'load', AJS.$p(function(args) {
            AJS.map(args, function(src) {
                var pic = new Image();
                pic.src = src;
            });
        }, arguments));
    },

    RND: function(tmpl, ns, scope) {
         scope = scope || window;
         var fn = function(w, g) {
             g = g.split("|");
             var cnt = ns[g[0]];
             for(var i=1; i < g.length; i++)
                 cnt = scope[g[i]](cnt);
             if(cnt == '')
                 return '';
             if(cnt == 0 || cnt == -1)
                 cnt += '';
             return cnt || w;
         };
         return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn);
    }, 


////
// Ajax functions
////
    getXMLHttpRequest: function() {
        var try_these = [
            function () { return new XMLHttpRequest(); },
            function () { return new ActiveXObject('Msxml2.XMLHTTP'); },
            function () { return new ActiveXObject('Microsoft.XMLHTTP'); },
            function () { return new ActiveXObject('Msxml2.XMLHTTP.4.0'); },
            function () { throw "Browser does not support XMLHttpRequest"; }
        ];
        for (var i = 0; i < try_these.length; i++) {
            var func = try_these[i];
            try {
                return func();
            } catch (e) {
                AJS.log(e);
            }
        }
    },

    getRequest: function(url, method) {
        var req = AJS.getXMLHttpRequest();

        if(url.match(/^https?:\/\//) == null) {
            if(AJS.BASE_URL != '') {
                if(AJS.BASE_URL.lastIndexOf('/') != AJS.BASE_URL.length-1)
                    AJS.BASE_URL += '/';
                url = AJS.BASE_URL + url;
            }
        }

        if(!method)
            method = "POST";

        return new AJSDeferred(req, method, url);
    },

    serializeJSON: function(o) {
        var objtype = typeof(o);
        if (objtype == "undefined") {
            return "null";
        } else if (objtype == "number" || objtype == "boolean") {
            return o + "";
        } else if (o === null) {
            return "null";
        }
        if (objtype == "string") {
            return AJS._reprString(o);
        }
        if(objtype == 'object' && o.getFullYear) {
            return AJS._reprDate(o);
        }
        var me = arguments.callee;
        if (objtype != "function" && typeof(o.length) == "number") {
            var res = [];
            for (var i = 0; i < o.length; i++) {
                var val = me(o[i]);
                if (typeof(val) != "string") {
                    val = "undefined";
                }
                res.push(val);
            }
            return "[" + res.join(",") + "]";
        }
        // it's a function with no adapter, bad
        if (objtype == "function")
            return null;
        res = [];
        for (var k in o) {
            var useKey;
            if (typeof(k) == "number") {
                useKey = '"' + k + '"';
            } else if (typeof(k) == "string") {
                useKey = AJS._reprString(k);
            } else {
                // skip non-string or number keys
                continue;
            }
            val = me(o[k]);
            if (typeof(val) != "string") {
                // skip non-serializable values
                continue;
            }
            res.push(useKey + ":" + val);
        }
        return "{" + res.join(",") + "}";
    },

    loadJSON: function(url, type, debug) {
        var d = AJS.getRequest(url, type);
        var eval_req = function(data, req) {
            var text = req.responseText;
            if(text == "Error")
                d.errback(req);
            else
                return AJS.evalTxt(text);
        };
        d.addCallback(eval_req);
        return d;
    },

    evalTxt: function(txt) {
        try {
            return eval('('+ txt + ')');
        }
        catch(e) {
            return eval(txt);
        }
    },

    evalScriptTags: function(html) {
        var script_data = html.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
        if(script_data != null) {
            for(var i=0; i < script_data.length; i++) {
                var script_only = script_data[i].replace(/<script.*?>/g, "");
                script_only = script_only.replace(/<\/script>/g, "");
                eval(script_only);
            }
        }
    },

    encodeArguments: function(data) {
        var post_data = [];
        for(k in data)
            post_data.push(k + "=" + AJS.urlencode(data[k]));
        return post_data.join("&");
    },

    _reprString: function(o) {
        return ('"' + o.replace(/(["\\])/g, '\\$1') + '"'
        ).replace(/[\f]/g, "\\f"
        ).replace(/[\b]/g, "\\b"
        ).replace(/[\n]/g, "\\n"
        ).replace(/[\t]/g, "\\t"
        ).replace(/[\r]/g, "\\r");
    },

    _reprDate: function(date) {
        var year = date.getUTCFullYear();
        var dd = date.getUTCDate();
        var mm = date.getUTCMonth()+1;

        var leadingZero = function(nr) {
            if (nr < 10) nr = "0" + nr;
            return nr;
        }

        return '"' + year + '-' + mm + '-' + dd + 'T' + leadingZero(date.getUTCHours()) + ':' + leadingZero(date.getUTCMinutes()) + ':' + leadingZero(date.getUTCSeconds()) + '"';
    },


////
// Position and size
////
    getMousePos: function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return {x: posx, y: posy};
    },

    getScrollTop: function() {
        //From: http://www.quirksmode.org/js/doctypes.html
        var t;
        if (document.documentElement && document.documentElement.scrollTop)
                t = document.documentElement.scrollTop;
        else if (document.body)
                t = document.body.scrollTop;
        return t;
    },

    //Shortcut: AJS.$AP
    absolutePosition: function(elm) {
        if(!elm)
            return {x: 0, y: 0};

        if(elm.scrollLeft)
            return {x: elm.scrollLeft, y: elm.scrollTop};
        else if(elm.clientX)
            return {x: elm.clientX, y: elm.clientY};

        var posObj = {'x': elm.offsetLeft, 'y': elm.offsetTop};

        if(elm.offsetParent) {
            var next = elm.offsetParent;
            while(next) {
                posObj.x += next.offsetLeft;
                posObj.y += next.offsetTop;
                next = next.offsetParent;
            }
        }
        // safari bug
        if (AJS.isSafari() && elm.style.position == 'absolute' ) {
            posObj.x -= document.body.offsetLeft;
            posObj.y -= document.body.offsetTop;
        }
        return posObj;
    },

    getWindowSize: function(doc) {
        doc = doc || document;
        var win_w, win_h;
        if (self.innerHeight) {
            win_w = self.innerWidth;
            win_h = self.innerHeight;
        } else if (doc.documentElement && doc.documentElement.clientHeight) {
            win_w = doc.documentElement.clientWidth;
            win_h = doc.documentElement.clientHeight;
        } else if (doc.body) {
            win_w = doc.body.clientWidth;
            win_h = doc.body.clientHeight;
        }
        return {'w': win_w, 'h': win_h};
    },

    isOverlapping: function(elm1, elm2) {
        var pos_elm1 = AJS.absolutePosition(elm1);
        var pos_elm2 = AJS.absolutePosition(elm2);

        var top1 = pos_elm1.y;
        var left1 = pos_elm1.x;
        var right1 = left1 + elm1.offsetWidth;
        var bottom1 = top1 + elm1.offsetHeight;
        var top2 = pos_elm2.y;
        var left2 = pos_elm2.x;
        var right2 = left2 + elm2.offsetWidth;
        var bottom2 = top2 + elm2.offsetHeight;
        var getSign = function(v) {
            if(v > 0) return "+";
            else if(v < 0) return "-";
            else return 0;
        }

        if ((getSign(top1 - bottom2) != getSign(bottom1 - top2)) &&
                (getSign(left1 - right2) != getSign(right1 - left2)))
            return true;
        return false;
    },


////
// Events
////
    getEventElm: function(e) {
        if(e && !e.type && !e.keyCode)
            return e
        var targ;
        if (!e) var e = window.event;
        if (e.target) 
            targ = e.target;
        else if (e.srcElement) 
            targ = e.srcElement;
        if (targ && targ.nodeType == 3) // defeat Safari bug
            targ = targ.parentNode;
        return targ;
    },

    setEventKey: function(e) {
        if(!e)
            e = window.event;

        e.key = e.keyCode ? e.keyCode : e.charCode;

        e.ctrl = e.ctrlKey;
        e.alt = e.altKey;
        e.meta = e.metaKey;
        e.shift = e.shiftKey;
    },

    onEvent: function(elms, type, handler, listen_once) {
        //Reset the current
        elms = AJS.$A(elms);
        AJS.map(elms, function(elm) {
            if(elm.events)
                elm.events[type] = {};
        });

        return AJS.AEV(elms, type, handler, listen_once);
    },

    //--- window.onload optimization ----------------------------------------------
    ready_bound: false,
    is_ready: false,
    bindReady: function() {
        if ( AJS.ready_bound ) return;
        AJS.ready_bound = true;

        // Mozilla, Opera and webkit nightlies currently support this event
        if ( document.addEventListener ) {
            // Use the handy event callback
            document.addEventListener( "DOMContentLoaded", function(){
                document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
                AJS.ready();
            }, false );

        // If IE event model is used
        } else if ( document.attachEvent ) {
            // ensure firing before onload,
            // maybe late but safe also for iframes
            document.attachEvent("onreadystatechange", function(){
                if ( document.readyState === "complete" ) {
                    document.detachEvent( "onreadystatechange", arguments.callee );
                    AJS.ready();
                }
            });

            // If IE and not an iframe
            // continually check to see if the document is ready
            if ( document.documentElement.doScroll && window == window.top ) (function(){
                if ( AJS.is_ready ) return;

                try {
                    // If IE is used, use the trick by Diego Perini
                    // http://javascript.nwbox.com/IEContentLoaded/
                    document.documentElement.doScroll("left");
                } catch( error ) {
                    setTimeout( arguments.callee, 0 );
                    return;
                }

                // and execute any waiting functions
                AJS.ready();
            })();
        }

        // A fallback to window.onload, that will always work
        AJS.AEV( window, "load", AJS.ready );
    },

    ready_list: [],
    ready: function(fn) {
        if(AJS.is_ready)
            return ;

        AJS.is_ready = true;
        AJS.map(AJS.ready_list, function(fn) {
            fn.call(window);
        });
        AJS.ready_list = [];
    },

    _f_guid: 0,
    _wipe_guid: 0,

    //Shortcut: AJS.AEV
    myaddEventListener: function(elms, types, handler, listen_once) {
        elms = AJS.$A(elms);
        types = AJS.$A(types);

        AJS.map(elms, function(elm) {
            if(listen_once)
                handler.listen_once = true;
                
            if (!handler.$f_guid) 
                handler.$f_guid = AJS._f_guid++;

            if (!elm.events) 
                elm.events = {};
            
            AJS.map(types, function(type) {
                var handlers = elm.events[type];

                if(elm == window && type == 'load') {
                    AJS.ready_list.push( handler );
                }
                else {
                    if(type == 'lazy_load') {
                        type = 'load';
                    }

                    if (!handlers) {
                        handlers = elm.events[type] = {};

                        if(elm["on" + type])
                            handlers[0] = elm["on" + type];
                    }

                    if(!elm._wipe_guid) {
                        elm._wipe_guid = AJS._wipe_guid++;
                    }

                    handlers[handler.$f_guid] = handler;
                    //elm["on" + type] = AJS.handleEvent;
		    elm.addEventListener(type, AJS.handleEvent, false);
                }
            });

            elm = null;
        });
    },

    handleEvent: function(event) {
         var me = this;

         event = event || window.event;
	 
         if(!event)
             return ;

         if(!event.ctrl && event.type.indexOf('key') != -1)
             AJS.setEventKey(event);

         var handlers = this.events[event.type];
	 
         var handlers_to_delete = [];
         var res = true;
         for (var i in handlers) {
             var handler = this.$$handleEvent = handlers[i];

             if(handler == AJS.handleEvent)
                 continue;

             res = handler(event);
	     if(handler.listen_once)
                 handlers_to_delete.push(handler);
         }

        if(handlers_to_delete.length > 0)
            AJS.map(handlers_to_delete, function(handler) {
                delete me.events[event.type][handler.$f_guid];
		//alert("res = " + res);
            });

        return res;
    },

    //Shortcut: AJS.REV
    removeEventListener: function(elms, type, handler) {
        elms = AJS.$A(elms);
        map(elms, function(elm) {
            if (elm.events && elm.events[type]) {
                delete elm.events[type][handler.$f_guid];
            }
        });
    },

    //Shortcut: AJS.$b
    bind: function(fn, scope, /*optional*/ extra_args) {
        fn._cscope = scope;
        return AJS._getRealScope(fn, extra_args);
    },

    bindMethods: function(self) {
        for (var k in self) {
            var func = self[k];
            if (typeof(func) == 'function') {
                self[k] = AJS.$b(func, self);
            }
        }
    },

    preventDefault: function(e) {
        if(AJS.isIe()) 
            window.event.returnValue = false;
        else {
            e.preventDefault();
        }
    },

    _listenOnce: function(elm, type, fn) {
        var r_fn = function() {
            AJS.removeEventListener(elm, type, r_fn);
            fn(arguments);
        }
        return r_fn;
    },

    _getRealScope: function(fn, /*optional*/ extra_args) {
        extra_args = AJS.$A(extra_args);
        var scope = fn._cscope || window;

        return function() {
            try {
                var args = AJS.$FA(arguments).concat(extra_args);
                return fn.apply(scope, args);
            }
            catch(e) {
            }
        };
    },

////
// Timeouts
////
    _reccruing_tos: {},
    setSingleTimeout: function(name, fn, interval) {
        var current = AJS._reccruing_tos[name];
        if(current)
            clearTimeout(current);
        AJS._reccruing_tos[name] = setTimeout(fn, interval);
    },


////
// Misc.
////
    keys: function(obj) {
        var rval = [];
        for (var prop in obj) {
            rval.push(prop);
        }
        return rval;
    },

    values: function(obj) {
        var rval = [];
        for (var prop in obj) {
            rval.push(obj[prop]);
        }
        return rval;
    },

    urlencode: function(str) {
        return encodeURIComponent(AJS.isDefined(str) && str.toString() || '');
    },

    urldecode: function(str) {
        var result = decodeURIComponent(AJS.isDefined(str) && str.toString() || '');
        return result.replace(/\+/g, ' ');
    },

    isDefined: function(o) {
        return (o != "undefined" && o != null)
    },

    isArray: function(obj) {
        try {
            return obj instanceof Array;
        }
        catch(e) {
            return false;
        }
    },

    isString: function(obj) {
        return (typeof obj == 'string');
    },

    isNumber: function(obj) {
        return (typeof obj == 'number');
    },

    isObject: function(obj) {
        return (typeof obj == 'object');
    },

    isFunction: function(obj) {
        return (typeof obj == 'function');
    },

    isDict: function(o) {
        var str_repr = String(o);
        return str_repr.indexOf(" Object") != -1;
    },

    exportToGlobalScope: function(scope) {
        scope = scope || window;
        for(e in AJS)
            if(e != 'addEventListener')
                scope[e] = AJS[e];
    },

    log: function(o) {
        try {
            if(window._firebug)
                window._firebug.log(o);
            else if(window.console)
                console.log(o);
        }
        catch(e) {
        }
    },

    withScope: function(export_scope, fn) {
        fn.apply(export_scope, []);
    },

    strip: function(str) {
        return str.replace(/^\s+/, '').replace(/\s+$/g, '');
    },

    trim_if_needed: function(str, limit, delim) {
        if(str.length > limit) {
            return str.substring(0, limit) + (delim || '...');
        }
        return str;
    }

}

AJS.Class = function(members) {
    var fn = function() {
        if(arguments[0] != 'no_init') {
            return this.init.apply(this, arguments);
        }
    }
    fn.prototype = members;
    AJS.update(fn, AJS.Class.prototype);
    return fn;
}
AJS.Class.prototype = {
    extend: function(members) {
        var parent = new this('no_init');
        for(k in members) {
            var prev = parent[k];
            var cur = members[k];
            if (prev && prev != cur && typeof cur == 'function') {
                cur = this._parentize(cur, prev);
            }
            parent[k] = cur;
        }
        return new AJS.Class(parent);
    },

    implement: function(members) {
        AJS.update(this.prototype, members);
    },

    _parentize: function(cur, prev) {
        return function(){
            this.parent = prev;
            return cur.apply(this, arguments);
        }
    }
};//End class

//Shortcuts
AJS.$ = AJS.getElement;
AJS.$$ = AJS.getElements;
AJS.$f = AJS.getFormElement;
AJS.$b = AJS.bind;
AJS.$p = AJS.partial;
AJS.$FA = AJS.forceArray;
AJS.$A = AJS.createArray;
AJS.DI = AJS.documentInsert;
AJS.ACN = AJS.appendChildNodes;
AJS.RCN = AJS.replaceChildNodes;
AJS.AEV = AJS.myaddEventListener;
AJS.REV = AJS.removeEventListener;
AJS.$bytc = AJS.getElementsByTagAndClassName;
AJS.$AP = AJS.absolutePosition;

//Old stuff
AJS.loadJSONDoc = AJS.loadJSON;
AJS.queryArguments = AJS.encodeArguments;

AJS.$gp = AJS.getParentBytc;
AJS.$gc = AJS.getChildBytc;

AJS.$sv = AJS.setVisibility;

//General callsbacks
AJS.generalErrorback = null;
AJS.generalCallback = null;

AJSDeferred = function(req, method, url) {
    this.callbacks = [];
    this.errbacks = [];
    this.req = req;
    this.http_method = method;
    this.http_url = url;
}
AJSDeferred.prototype = {
    excCallbackSeq: function(req, list) {
        var data = req.responseText;

        if(AJS.generalCallback) {
            data = AJS.generalCallback(req, list);
            if(!data)
                return ;
        }

        while (list.length > 0) {
            var fn = list.pop();
            var new_data = fn(data, req);
            if(new_data)
                data = new_data;
            else if(new_data == false)
                break;
        }
    },

    callback: function () {
        this.excCallbackSeq(this.req, this.callbacks);
    },

    errback: function() {
        if(this.errbacks.length == 0) {
            if(AJS.ajaxErrorHandler)
                AJS.ajaxErrorHandler(req.responseText, req);
            else {
                var txt = this.req.responseText.substring(0, 200);
                if(AJS.strip(txt) && txt.indexOf("<html") == -1) {
                    alert("Error encountered:\n" + txt);
                }
            }
        }

        if(AJS.generalErrorback) {
            var result = AJS.generalErrorback(this.req);
            if(!result)
                return ;
        }

        this.excCallbackSeq(this.req, this.errbacks);
    },

    addErrback: function(fn) {
        this.errbacks.unshift(fn);
    },

    addCallback: function(fn) {
        this.callbacks.unshift(fn);
    },

    abort: function() {
        this.req.abort();
    },

    addCallbacks: function(fn1, fn2) {
        this.addCallback(fn1);
        this.addErrback(fn2);
    },

    _onreadystatechange: function () {
        var req = this.req;
        var d = this;

        if (req.readyState == 4) {
            var status = '';

            try {
                status = req.status;
            }
            catch(e) {
            };

            if(status == 200 || status == 304 || req.responseText == null) {
                this.callback();
            }
            else {
                this.errback();
            }
        }
    },

    sendReq: function(data) {
        var req = this.req;
        var http_method = this.http_method;
        var http_url = this.http_url;

        if(http_method == 'POST') {
            req.open(http_method, http_url, true);
            req.onreadystatechange = AJS.$b(this._onreadystatechange, this);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            if(AJS.isObject(data)) {
                req.send(AJS.encodeArguments(data));
            }
            else if(AJS.isDefined(data))
                req.send(data);
            else {
                req.send('');
            }
        }
        else {
            req.open("GET", http_url, true)
            req.onreadystatechange = AJS.$b(this._onreadystatechange, this);
            req.send(null);
        }

    }
};//End deferred

AJS._createDomShortcuts()
}

script_loaded = true;
AJS.exportToGlobalScope();
AJS.bindReady();


// googiespell.js


/****
Last Modified: 13/05/07 00:25:28

 GoogieSpell
     Google spell checker for your own web-apps :)
 Copyright Amir Salihefendic 2006
     LICENSE
     GPL (see gpl.txt for more information)
     This basically means that you can't use this script with/in proprietary software!
     There is another license that permits you to use this script with proprietary software. Check out:... for more info.
     AUTHOR
         4mir Salihefendic (http://amix.dk) - amix@amix.dk
 VERSION
     4.0
****/
var GOOGIE_CUR_LANG = null;
var GOOGIE_DEFAULT_LANG = "en";

function GoogieSpell(img_dir, server_url) {
    var cookie_value;
    var lang;
    cookie_value = getCookie('language');

    if(cookie_value != null)
        GOOGIE_CUR_LANG = cookie_value;
    else
        GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;

    this.img_dir = img_dir;
    this.server_url = server_url;

    this.org_lang_to_word = {"da": "Dansk", "de": "Deutsch", "en": "English",
                                             "es": "Espa&#241;ol", "fr": "Fran&#231;ais", "it": "Italiano", 
                                             "nl": "Nederlands", "pl": "Polski", "pt": "Portugu&#234;s",
                                             "fi": "Suomi", "sv": "Svenska"};
    this.lang_to_word = this.org_lang_to_word;
    this.langlist_codes = AJS.keys(this.lang_to_word);

    this.show_change_lang_pic = true;
    this.change_lang_pic_placement = "left";

    this.report_state_change = true;

    this.ta_scroll_top = 0;
    this.el_scroll_top = 0;

    this.lang_chck_spell = "Check spelling";
    this.lang_revert = "Revert to";
    this.lang_close = "Close";
    this.lang_rsm_edt = "Resume editing";
    this.lang_no_error_found = "No spelling errors found";
    this.lang_no_suggestions = "No suggestions";
    
    this.show_spell_img = true;
    this.decoration = true;
    this.use_close_btn = true;
    this.edit_layer_dbl_click = true;
    this.report_ta_not_found = true;

    //Extensions
    this.custom_ajax_error = null;
    this.custom_no_spelling_error = null;
    this.custom_menu_builder = []; //Should take an eval function and a build menu function
    this.custom_item_evaulator = null; //Should take an eval function and a build menu function
    this.extra_menu_items = [];
    this.custom_spellcheck_starter = null;
    this.main_controller = true;

    //Observers
    this.lang_state_observer = null;
    this.spelling_state_observer = null;
    this.show_menu_observer = null;
    this.all_errors_fixed_observer = null;

    //Focus links - used to give the text box focus
    this.use_focus = false;
    this.focus_link_t = null;
    this.focus_link_b = null;

    //Counters
    this.cnt_errors = 0;
    this.cnt_errors_fixed = 0;

    //Set document on click to hide the language and error menu
    var fn = function(e) {
        var elm = AJS.getEventElm(e);
        if(elm.googie_action_btn != "1" && this.isLangWindowShown())
            this.hideLangWindow();
        if(elm.googie_action_btn != "1" && this.isErrorWindowShown())
            this.hideErrorWindow();
    };
    AJS.AEV(document, "click", AJS.$b(fn, this));
}

GoogieSpell.prototype.decorateTextarea = function(id) {
    if(typeof(id) == "string")
        this.text_area = AJS.$(id);
    else
        this.text_area = id;

    var r_width, r_height;

    if(this.text_area != null) {
        if(!AJS.isDefined(this.spell_container) && this.decoration) {
            var table = AJS.TABLE();
            var tbody = AJS.TBODY();
            var tr = AJS.TR();
            if(AJS.isDefined(this.force_width))
                r_width = this.force_width;
            else
                r_width = this.text_area.offsetWidth + "px";

            if(AJS.isDefined(this.force_height))
                r_height = this.force_height;
            else
                r_height = "";

            var spell_container = AJS.TD();
            this.spell_container = spell_container;

            tr.appendChild(spell_container);

            tbody.appendChild(tr);
            table.appendChild(tbody);

            AJS.insertBefore(table, this.text_area);

            //Set width
            AJS.setHeight(table, spell_container, r_height);
            AJS.setWidth(table, spell_container, r_width);

            spell_container.style.textAlign = "right";
        }

        this.checkSpellingState();
    }
    else 
        if(this.report_ta_not_found)
            alert("Text area not found");
}

//////
// API Functions (the ones that you can call)
/////
GoogieSpell.prototype.setSpellContainer = function(elm) {
    this.spell_container = AJS.$(elm);
}

GoogieSpell.prototype.setLanguages = function(lang_dict) {
    this.lang_to_word = lang_dict;
    this.langlist_codes = AJS.keys(lang_dict);
}

GoogieSpell.prototype.setForceWidthHeight = function(width, height) {
    /***
        Set to null if you want to use one of them
    ***/
    this.force_width = width;
    this.force_height = height;
}

GoogieSpell.prototype.setDecoration = function(bool) {
    this.decoration = bool;
}

GoogieSpell.prototype.dontUseCloseButtons = function() {
    this.use_close_btn = false;
}

GoogieSpell.prototype.appendNewMenuItem = function(name, call_back_fn, checker) {
    this.extra_menu_items.push([name, call_back_fn, checker]);
}

GoogieSpell.prototype.appendCustomMenuBuilder = function(eval, builder) {
    this.custom_menu_builder.push([eval, builder]);
}

GoogieSpell.prototype.setFocus = function() {
    try {
        this.focus_link_b.focus();
        this.focus_link_t.focus();
        return true;
    }
    catch(e) {
        return false;
    }
}

GoogieSpell.prototype.getValue = function(ta) {
    return ta.value;
}

GoogieSpell.prototype.setValue = function(ta, value) {
    ta.value = value;
}


//////
// Set functions (internal)
/////
GoogieSpell.prototype.setStateChanged = function(current_state) {
    this.state = current_state;
    if(this.spelling_state_observer != null && this.report_state_change)
        this.spelling_state_observer(current_state, this);
}

GoogieSpell.prototype.setReportStateChange = function(bool) {
    this.report_state_change = bool;
}


//////
// Request functions
/////
GoogieSpell.prototype.getGoogleUrl = function() {
    return this.server_url + GOOGIE_CUR_LANG;
}

GoogieSpell.escapeSepcial = function(val) {
    return val.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

GoogieSpell.createXMLReq = function (text) {
    return '<?xml version="1.0" encoding="utf-8" ?><spellrequest textalreadyclipped="0" ignoredups="0" ignoredigits="1" ignoreallcaps="1"><text>' + text + '</text></spellrequest>';
}

GoogieSpell.prototype.spellCheck = function(ignore) {
    var me = this;

    this.cnt_errors_fixed = 0;
    this.cnt_errors = 0;
    this.setStateChanged("checking_spell");

    if(this.main_controller)
        this.appendIndicator(this.spell_span);

    this.error_links = [];
    this.ta_scroll_top = this.text_area.scrollTop;

    try { this.hideLangWindow(); }
    catch(e) {}

    this.ignore = ignore;

    if(this.getValue(this.text_area) == '' || ignore) {
        if(!me.custom_no_spelling_error)
            me.flashNoSpellingErrorState();
        else
            me.custom_no_spelling_error(me);
        me.removeIndicator();
        return ;
    }

    this.createEditLayer(this.text_area.offsetWidth, this.text_area.offsetHeight);

    this.createErrorWindow();
    AJS.getBody().appendChild(this.error_window);

    /*try { netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"); } 
    catch (e) { }*/

    if(this.main_controller)
        this.spell_span.onclick = null;

    this.orginal_text = this.getValue(this.text_area);

    //Create request
    var d = AJS.getRequest(this.getGoogleUrl());
    var reqdone = function(res_txt) {
	//alert("reqdone");
        var r_text = res_txt;
        me.results = me.parseResult(r_text);

        if(r_text.match(/<c.*>/) != null) {
            //Before parsing be sure that errors were found
            me.showErrorsInIframe();
	    //alert("reqdone : before resume");
            me.resumeEditingState();
        }
        else {
            if(!me.custom_no_spelling_error)
                me.flashNoSpellingErrorState();
            else
                me.custom_no_spelling_error(me);
        }
        me.removeIndicator();
    };

    d.addCallback(reqdone);
    reqdone = null;

    var reqfailed = function(res_txt, req) {
	//alert("reqfailed");
        if(me.custom_ajax_error)
            me.custom_ajax_error(req);
        else
            alert("An error was encountered on the server. Please try again later.");

        if(me.main_controller) {
            AJS.removeElement(me.spell_span);
            me.removeIndicator();
        }
        me.checkSpellingState();
    };
    d.addErrback(reqfailed);
    reqfailed = null;

    var req_text = GoogieSpell.escapeSepcial(this.orginal_text);
    d.sendReq(GoogieSpell.createXMLReq(req_text));
}


//////
// Spell checking functions
/////
GoogieSpell.prototype.parseResult = function(r_text) {
    /***
     Retunrs an array
     result[item] -> ['attrs'], ['suggestions']
        ***/
    var re_split_attr_c = /\w+="(\d+|true)"/g;
    var re_split_text = /\t/g;

    var matched_c = r_text.match(/<c[^>]*>[^<]*<\/c>/g);
    var results = new Array();

    if(matched_c == null)
        return results;
    
    for(var i=0; i < matched_c.length; i++) {
        var item = new Array();
        this.errorFound();

        //Get attributes
        item['attrs'] = new Array();
        var split_c = matched_c[i].match(re_split_attr_c);
        for(var j=0; j < split_c.length; j++) {
            var c_attr = split_c[j].split(/=/);
            var val = c_attr[1].replace(/"/g, '');
            if(val != "true")
                item['attrs'][c_attr[0]] = parseInt(val);
            else {
                item['attrs'][c_attr[0]] = val;
            }
        }

        //Get suggestions
        item['suggestions'] = new Array();
        var only_text = matched_c[i].replace(/<[^>]*>/g, "");
        var split_t = only_text.split(re_split_text);
        for(var k=0; k < split_t.length; k++) {
        if(split_t[k] != "")
            item['suggestions'].push(split_t[k]);
        }
        results.push(item);
    }
    return results;
}

//////
// Counters
/////
GoogieSpell.prototype.errorFixed = function() { 
    this.cnt_errors_fixed++; 
    if(this.all_errors_fixed_observer)
        if(this.cnt_errors_fixed == this.cnt_errors) {
            this.hideErrorWindow();
            this.all_errors_fixed_observer();
        }
}
GoogieSpell.prototype.errorFound = function() { this.cnt_errors++; }

//////
// Error menu functions
/////
GoogieSpell.prototype.createErrorWindow = function() {
    this.error_window = AJS.DIV();
    this.error_window.className = "googie_window";
    this.error_window.googie_action_btn = "1";
}

GoogieSpell.prototype.isErrorWindowShown = function() {
    return this.error_window != null && this.error_window.style.visibility == "visible";
}

GoogieSpell.prototype.hideErrorWindow = function() {
    try {
        this.error_window.style.visibility = "hidden";
        if(this.error_window_iframe)
            this.error_window_iframe.style.visibility = "hidden";
    }
    catch(e) {}
}

GoogieSpell.prototype.updateOrginalText = function(offset, old_value, new_value, id) {
    var part_1 = this.orginal_text.substring(0, offset);
    var part_2 = this.orginal_text.substring(offset+old_value.length);
    this.orginal_text = part_1 + new_value + part_2;
    this.setValue(this.text_area, this.orginal_text);
    var add_2_offset = new_value.length - old_value.length;
    for(var j=0; j < this.results.length; j++) {
        //Don't edit the offset of the current item
        if(j != id && j > id){
            this.results[j]['attrs']['o'] += add_2_offset;
        }
    }
}

GoogieSpell.prototype.saveOldValue = function(elm, old_value) {
    elm.is_changed = true;
    elm.old_value = old_value;
}

GoogieSpell.prototype.createListSeparator = function() {
    var e_col = AJS.TD(" ");
    e_col.googie_action_btn = "1";
    e_col.style.cursor = "default";
    e_col.style.fontSize = "3px";
    e_col.style.borderTop = "1px solid #ccc";
    e_col.style.paddingTop = "3px";

    return AJS.TR(e_col);
}

GoogieSpell.prototype.correctError = function(id, elm, l_elm, /*optional*/ rm_pre_space) {
    var old_value = elm.innerHTML;
    var new_value = l_elm.innerHTML;
    var offset = this.results[id]['attrs']['o'];

    if(rm_pre_space) {
        var pre_length = elm.previousSibling.innerHTML;
        elm.previousSibling.innerHTML = pre_length.slice(0, pre_length.length-1);
        old_value = " " + old_value;
        offset--;
    }

    this.hideErrorWindow();

    this.updateOrginalText(offset, old_value, new_value, id);

    elm.innerHTML = new_value;
    
    elm.style.color = "green";
    elm.is_corrected = true;

    this.results[id]['attrs']['l'] = new_value.length;

    if(!AJS.isDefined(elm.old_value))
        this.saveOldValue(elm, old_value);
    
    this.errorFixed();
}

GoogieSpell.prototype.showErrorWindow = function(elm, id) {
    if(this.show_menu_observer)
        this.show_menu_observer(this);
    var me = this;

    var abs_pos = AJS.absolutePosition(elm);
    abs_pos.y -= this.edit_layer.scrollTop;
    this.error_window.style.visibility = "visible";

    AJS.setTop(this.error_window, (abs_pos.y+20));
    AJS.setLeft(this.error_window, (abs_pos.x));

    //this.error_window.innerHTML = "";

    var table = AJS.TABLE({'class': 'googie_list'});
    table.googie_action_btn = "1";
    var list = AJS.TBODY();

    //Check if we should use custom menu builder, if not we use the default
    var changed = false;
    if(this.custom_menu_builder != []) {
        for(var k=0; k<this.custom_menu_builder.length; k++) {
            var eb = this.custom_menu_builder[k];
            if(eb[0]((this.results[id]))){
                changed = eb[1](this, list, elm);
                break;
            }
        }
    }

    if(!changed) {
        //Build up the result list
        var suggestions = this.results[id]['suggestions'];
        var offset = this.results[id]['attrs']['o'];
        var len = this.results[id]['attrs']['l'];

        if(suggestions.length == 0) {
            var row = AJS.TR();
            var item = AJS.TD({'style': 'cursor: default;'});
            var dummy = AJS.SPAN();
            dummy.innerHTML = this.lang_no_suggestions;
            AJS.ACN(item, AJS.TN(dummy.innerHTML));
            item.googie_action_btn = "1";
            row.appendChild(item);
            list.appendChild(row);
        }

        for(i=0; i < suggestions.length; i++) {
            var row = AJS.TR();
            var item = AJS.TD();
            var dummy = AJS.SPAN();
            dummy.innerHTML = suggestions[i];
	    var tre = AJS.TN(dummy.innerHTML);
            //item.appendChild(AJS.TN(dummy.innerHTML));
	    item.appendChild(tre);

            var fn = function(e) {
                var l_elm = AJS.getEventElm(e);
                this.correctError(id, elm, l_elm);
            };

            AJS.AEV(item, "click", AJS.$b(fn, this));

            //item.onmouseover = GoogieSpell.item_onmouseover;
	    var mytxfn1 = GoogieSpell.item_onmouseover;
	    AJS.AEV(item, "mouseover", mytxfn1);
	    //item.addEventListener("mouseover", mytxfn1, false);

            //item.onmouseout = GoogieSpell.item_onmouseout;
	    var mytxfn2 = GoogieSpell.item_onmouseout;
	    AJS.AEV(item, "mouseout", mytxfn2);
	    //item.addEventListener("mouseout", mytxfn2, false);

            row.appendChild(item);
            list.appendChild(row);
        }

        //The element is changed, append the revert
        if(elm.is_changed && elm.innerHTML != elm.old_value) {
            var old_value = elm.old_value;
            var revert_row = AJS.TR();
            var revert = AJS.TD();

            //revert.onmouseover = GoogieSpell.item_onmouseover;
	    var mytxfn1 = GoogieSpell.item_onmouseover;
	    AJS.AEV(revert, "mouseover", mytxfn1);

            //revert.onmouseout = GoogieSpell.item_onmouseout;
	    var mytxfn2 = GoogieSpell.item_onmouseout;
	    AJS.AEV(revert, "mouseout", mytxfn2);

            var rev_span = AJS.SPAN({'class': 'googie_list_revert'});
            rev_span.innerHTML = this.lang_revert + " " + old_value;
            revert.appendChild(rev_span);

            var fn = function(e) { 
                this.updateOrginalText(offset, elm.innerHTML, old_value, id);
                elm.is_corrected = true;
                elm.style.color = "#b91414";
                elm.innerHTML = old_value;
                this.hideErrorWindow();
            };
            AJS.AEV(revert, "click", AJS.$b(fn, this));

            revert_row.appendChild(revert);
            list.appendChild(revert_row);
        }

        //Append the edit box
        var edit_row = AJS.TR();
        var edit = AJS.TD({'style': 'cursor: default'});

        var edit_input = AJS.INPUT({'style': 'width: 120px; margin:0; padding:0', 'value': elm.innerHTML});
        edit_input.googie_action_btn = "1";

        var onsub = function () {
            if(edit_input.value != "") {
                if(!AJS.isDefined(elm.old_value))
                    this.saveOldValue(elm, elm.innerHTML);

                this.updateOrginalText(offset, elm.innerHTML, edit_input.value, id);
                elm.style.color = "green"
                elm.is_corrected = true;
                elm.innerHTML = edit_input.value;
                
                this.hideErrorWindow();
            }
            return false;
        };
        onsub = AJS.$b(onsub, this);
        
        var ok_pic = AJS.IMG({'src': this.img_dir + "ok.gif", 'style': 'width: 32px; height: 16px; margin-left: 2px; margin-right: 2px; cursor: pointer;'});
        var edit_form = AJS.FORM({'style': 'margin: 0; padding: 0; cursor: default;'}, edit_input, ok_pic);

        edit_form.googie_action_btn = "1";
        edit.googie_action_btn = "1";

        AJS.AEV(edit_form, "submit", onsub);
        AJS.AEV(ok_pic, "click", onsub);

        edit.appendChild(edit_form);
        edit_row.appendChild(edit);
        list.appendChild(edit_row);

        //Append extra menu items
        if(this.extra_menu_items.length > 0)
            AJS.ACN(list, this.createListSeparator());

        var loop = function(i) {
                if(i < me.extra_menu_items.length) {
                    var e_elm = me.extra_menu_items[i];

                    if(!e_elm[2] || e_elm[2](elm, me)) {
                        var e_row = AJS.TR();
                        var e_col = AJS.TD(e_elm[0]);

                        e_col.onmouseover = GoogieSpell.item_onmouseover;
                        e_col.onmouseout = GoogieSpell.item_onmouseout;

                        var fn = function() {
                            return e_elm[1](elm, me);
                        };
                        AJS.AEV(e_col, "click", fn);

                        AJS.ACN(e_row, e_col);
                        AJS.ACN(list, e_row);

                    }
                    loop(i+1);
                }
        }
        loop(0);
        loop = null;

        //Close button
        if(this.use_close_btn) {
            AJS.ACN(list, this.createCloseButton(this.hideErrorWindow));
        }
    }

    table.appendChild(list);
    this.error_window.appendChild(table);

    //Dummy for IE - dropdown bug fix
    if(AJS.isIe() && !this.error_window_iframe) {
        var iframe = AJS.IFRAME({'style': 'position: absolute; z-index: 0;'});
        AJS.ACN(AJS.getBody(), iframe);
        this.error_window_iframe = iframe;
    }
    if(AJS.isIe()) {
        var iframe = this.error_window_iframe;
        AJS.setTop(iframe, this.error_window.offsetTop);
        AJS.setLeft(iframe, this.error_window.offsetLeft);

        AJS.setWidth(iframe, this.error_window.offsetWidth);
        AJS.setHeight(iframe, this.error_window.offsetHeight);

        iframe.style.visibility = "visible";
    }

    //Set focus on the last element
    var link = this.createFocusLink('link');
    var a1 = AJS.TD({'style': 'text-align: right; font-size: 1px; height: 1px; margin: 0; padding: 0;'}, link);
    var a2 = AJS.TR(a1);
    list.appendChild(a2);
    //list.appendChild(AJS.TR(AJS.TD({'style': 'text-align: right; font-size: 1px; height: 1px; margin: 0; padding: 0;'}, link)));
    link.focus();
}


//////
// Edit layer (the layer where the suggestions are stored)
//////
GoogieSpell.prototype.createEditLayer = function(width, height) {
    this.edit_layer = AJS.DIV({'class': 'googie_edit_layer'});

    //Set the style so it looks like edit areas
    this.edit_layer.className = this.text_area.className;
    this.edit_layer.style.border = "1px solid #999";
    this.edit_layer.style.backgroundColor = "#f7f7f7";
    this.edit_layer.style.padding = "3px";
    this.edit_layer.style.margin = "0px";

    AJS.setWidth(this.edit_layer, (width-8));

    if(AJS.nodeName(this.text_area) != "input" || this.getValue(this.text_area) == "") {
        this.edit_layer.style.overflow = "auto";
        AJS.setHeight(this.edit_layer, (height-6));
    }
    else {
        this.edit_layer.style.overflow = "hidden";
    }

    if(this.edit_layer_dbl_click) {
        var me = this;
        var fn = function(e) {
            if(AJS.getEventElm(e).className != "googie_link" && !me.isErrorWindowShown()) {
                me.resumeEditing();
                var fn1 = function() {
                    me.text_area.focus();
                    fn1 = null;
                };
                setTimeout(fn1, 10);
            }
            return false;
        };
        this.edit_layer.ondblclick = fn;
        fn = null;
    }
}

GoogieSpell.prototype.resumeEditing = function() {
    this.setStateChanged("spell_check");
    this.switch_lan_pic.style.display = "inline";

    if(this.edit_layer)
        this.el_scroll_top = this.edit_layer.scrollTop;

    this.hideErrorWindow();

    if(this.main_controller)
        this.spell_span.className = "googie_no_style";

    if(!this.ignore) {
        //Remove the EDIT_LAYER
        try {
            this.edit_layer.parentNode.removeChild(this.edit_layer);
            if(this.use_focus) {
                AJS.removeElement(this.focus_link_t);
                AJS.removeElement(this.focus_link_b);
            }
        }
        catch(e) {
        }

        AJS.showElement(this.text_area);

        if(this.el_scroll_top != undefined)
            this.text_area.scrollTop = this.el_scroll_top;
    }

    this.checkSpellingState(false);
}

GoogieSpell.prototype.createErrorLink = function(text, id) {
    var elm = AJS.SPAN({'class': 'googie_link'});
    var me = this;
    var d = function (e) {
        me.showErrorWindow(elm, id);
        d = null;
        return false;
    };
    AJS.AEV(elm, "click", d);

    elm.googie_action_btn = "1";
    elm.g_id = id;
    elm.is_corrected = false;
    //elm.oncontextmenu = d;
    AJS.AEV(elm, "contextmenu", d);
    elm.innerHTML = text;
    return elm;
}

GoogieSpell.createPart = function(txt_part) {
    if(txt_part == " ")
        return AJS.TN(" ");
    var result = AJS.SPAN();

    var is_first = true;
    var is_safari = (navigator.userAgent.toLowerCase().indexOf("safari") != -1);

    var part = AJS.SPAN();
    txt_part = GoogieSpell.escapeSepcial(txt_part);
    txt_part = txt_part.replace(/\n/g, "<br>");
    txt_part = txt_part.replace(/    /g, " &nbsp;");
    txt_part = txt_part.replace(/^ /g, "&nbsp;");
    txt_part = txt_part.replace(/ $/g, "&nbsp;");
    
    part.innerHTML = txt_part;

    return part;
}

GoogieSpell.prototype.showErrorsInIframe = function() {
    var output = AJS.DIV();
    output.style.textAlign = "left";
    var pointer = 0;
    var results = this.results;

    if(results.length > 0) {
        for(var i=0; i < results.length; i++) {
            var offset = results[i]['attrs']['o'];
            var len = results[i]['attrs']['l'];
            
            var part_1_text = this.orginal_text.substring(pointer, offset);
	    var part_1 = GoogieSpell.createPart(part_1_text);
            output.appendChild(part_1);
            pointer += offset - pointer;
            
            //If the last child was an error, then insert some space
            var err_link = this.createErrorLink(this.orginal_text.substr(offset, len), i);
            this.error_links.push(err_link);
            output.appendChild(err_link);
            pointer += len;
        }
        //Insert the rest of the orginal text
        var part_2_text = this.orginal_text.substr(pointer, this.orginal_text.length);
        var part_2 = GoogieSpell.createPart(part_2_text);
        output.appendChild(part_2);
    }
    else
        output.innerHTML = this.orginal_text;

    var me = this;
    if(this.custom_item_evaulator)
        AJS.map(this.error_links, function(elm){me.custom_item_evaulator(me, elm)});
    
    AJS.ACN(this.edit_layer, output);

    //Hide text area
    this.text_area_bottom = this.text_area.offsetTop + this.text_area.offsetHeight;

    AJS.hideElement(this.text_area);

    AJS.insertBefore(this.edit_layer, this.text_area);

    if(this.use_focus) {
        this.focus_link_t = this.createFocusLink('focus_t');
        this.focus_link_b = this.createFocusLink('focus_b');

        AJS.insertBefore(this.focus_link_t, this.edit_layer);
        AJS.insertAfter(this.focus_link_b, this.edit_layer);
    }

    this.edit_layer.scrollTop = this.ta_scroll_top;
}


//////
// Choose language menu
//////
GoogieSpell.prototype.createLangWindow = function() {
    this.language_window = AJS.DIV({'class': 'googie_window'});
    AJS.setWidth(this.language_window, 100);

    this.language_window.googie_action_btn = "1";

    //Build up the result list
    var table = AJS.TABLE({'class': 'googie_list'});
    AJS.setWidth(table, "100%");
    var list = AJS.TBODY();

    this.lang_elms = new Array();

    for(i=0; i < this.langlist_codes.length; i++) {
        var row = AJS.TR();
        var item = AJS.TD();
        item.googieId = this.langlist_codes[i];
        this.lang_elms.push(item);
        var lang_span = AJS.SPAN();
        lang_span.innerHTML = this.lang_to_word[this.langlist_codes[i]];
        item.appendChild(AJS.TN(lang_span.innerHTML));

        var fn = function(e) {
            var elm = AJS.getEventElm(e);
            this.deHighlightCurSel();

            this.setCurrentLanguage(elm.googieId);

            if(this.lang_state_observer != null) {
                this.lang_state_observer();
            }

            this.highlightCurSel();
            this.hideLangWindow();
        };
        AJS.AEV(item, "click", AJS.$b(fn, this));

        item.onmouseover = function(e) { 
            var i_it = AJS.getEventElm(e);
            if(i_it.className != "googie_list_selected")
                i_it.className = "googie_list_onhover";
        };
        item.onmouseout = function(e) { 
            var i_it = AJS.getEventElm(e);
            if(i_it.className != "googie_list_selected")
                i_it.className = "googie_list_onout"; 
        };

        row.appendChild(item);
        list.appendChild(row);
    }

    //Close button
    if(this.use_close_btn) {
        list.appendChild(this.createCloseButton(this.hideLangWindow));
    }

    this.highlightCurSel();

    table.appendChild(list);
    this.language_window.appendChild(table);
}

GoogieSpell.prototype.setCurrentLanguage = function(lan_code) {
    GOOGIE_CUR_LANG = lan_code;

    //Set cookie
    var now = new Date();
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    setCookie('language', lan_code, now);
}

GoogieSpell.prototype.isLangWindowShown = function() {
    return this.language_window != null && this.language_window.style.visibility == "visible";
}

GoogieSpell.prototype.hideLangWindow = function() {
    try {
        this.language_window.style.visibility = "hidden";
        this.switch_lan_pic.className = "googie_lang_3d_on";
    }
    catch(e) {}
}

GoogieSpell.prototype.deHighlightCurSel = function() {
    this.lang_cur_elm.className = "googie_list_onout";
}

GoogieSpell.prototype.highlightCurSel = function() {
    if(GOOGIE_CUR_LANG == null)
        GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
    for(var i=0; i < this.lang_elms.length; i++) {
        if(this.lang_elms[i].googieId == GOOGIE_CUR_LANG) {
            this.lang_elms[i].className = "googie_list_selected";
            this.lang_cur_elm = this.lang_elms[i];
        }
        else {
            this.lang_elms[i].className = "googie_list_onout";
        }
    }
}

GoogieSpell.prototype.showLangWindow = function(elm, ofst_top, ofst_left) {
    if(this.show_menu_observer)
        this.show_menu_observer(this);
    if(!AJS.isDefined(ofst_top))
        ofst_top = 20;
    if(!AJS.isDefined(ofst_left))
        ofst_left = 100;

    this.createLangWindow();
    AJS.getBody().appendChild(this.language_window);

    var abs_pos = AJS.absolutePosition(elm);
    AJS.showElement(this.language_window);
    AJS.setTop(this.language_window, (abs_pos.y+ofst_top));
    AJS.setLeft(this.language_window, (abs_pos.x+ofst_left-this.language_window.offsetWidth));

    this.highlightCurSel();
    this.language_window.style.visibility = "visible";
}

GoogieSpell.prototype.createChangeLangPic = function() {
    var img = AJS.IMG({'src': this.img_dir + 'change_lang.gif', 'alt': "Change language"});
    img.googie_action_btn = "1";
    var switch_lan = AJS.SPAN({'class': 'googie_lang_3d_on', 'style': 'padding-left: 6px;'}, img);

    var fn = function(e) {
        var elm = AJS.getEventElm(e);
        if(AJS.nodeName(elm) == 'img')
            elm = elm.parentNode;
        if(elm.className == "googie_lang_3d_click") {
            elm.className = "googie_lang_3d_on";
            this.hideLangWindow();
        }
        else {
            elm.className = "googie_lang_3d_click";
            this.showLangWindow(switch_lan);
        }
    }

    AJS.AEV(switch_lan, "click", AJS.$b(fn, this));
    return switch_lan;
}

GoogieSpell.prototype.createSpellDiv = function() {
    var chk_spell = AJS.SPAN({'class': 'googie_check_spelling_link','id':'googie_check_spelling_link'});

    chk_spell.innerHTML = this.lang_chck_spell;
    var spell_img = null;
    if(this.show_spell_img)
        spell_img = AJS.IMG({'src': this.img_dir + "spellc.gif"});
    return AJS.SPAN(spell_img, " ", chk_spell);
}


//////
// State functions
/////
GoogieSpell.prototype.flashNoSpellingErrorState = function(on_finish) {
    var no_spell_errors;

    if(on_finish) {
        var fn = function() {
            on_finish();
            this.checkSpellingState();
        };
        no_spell_errors = fn;
    }
    else
        no_spell_errors = this.checkSpellingState;

    this.setStateChanged("no_error_found");

    if(this.main_controller) {
        AJS.hideElement(this.switch_lan_pic);

        var dummy = AJS.IMG({'src': this.img_dir + "blank.gif", 'style': 'height: 16px; width: 1px;'});
        var rsm = AJS.SPAN();
        rsm.innerHTML = this.lang_no_error_found;

        AJS.RCN(this.spell_span, AJS.SPAN(dummy, rsm));

        this.spell_span.className = "googie_check_spelling_ok";
        this.spell_span.style.textDecoration = "none";
        this.spell_span.style.cursor = "default";

        setTimeout(AJS.$b(no_spell_errors, this), 1200);
    }
}

GoogieSpell.prototype.resumeEditingState = function() {
    this.setStateChanged("resume_editing");

    //Change link text to resume
    if(this.main_controller) {
        AJS.hideElement(this.switch_lan_pic);
        var dummy = AJS.IMG({'src': this.img_dir + "blank.gif", 'style': 'height: 16px; width: 1px;'});
        var rsm = AJS.SPAN();
        rsm.innerHTML = this.lang_rsm_edt;
        AJS.RCN(this.spell_span, AJS.SPAN(dummy, rsm));
    
        var fn = function(e) {
            this.resumeEditing();
        }
        //this.spell_span.onclick = AJS.$b(fn, this);
	var myfn = AJS.$b(fn, this);
	this.spell_span.addEventListener("click", myfn, false);
	//AJS.AEV(this.spell_span, "click", myfn);

        this.spell_span.className = "googie_resume_editing";
    }

    try { this.edit_layer.scrollTop = this.ta_scroll_top; }
    catch(e) { }
}

GoogieSpell.prototype.checkSpellingState = function(fire) {
    if(!AJS.isDefined(fire) || fire)
        this.setStateChanged("spell_check");

    if(this.show_change_lang_pic)
        this.switch_lan_pic = this.createChangeLangPic();
    else
        this.switch_lan_pic = AJS.SPAN();

    var span_chck = this.createSpellDiv();
    var fn = function() {
        this.spellCheck();
    };

    if(this.custom_spellcheck_starter){
        span_chck.onclick = this.custom_spellcheck_starter;
    }else {
        //span_chck.onclick = AJS.$b(fn, this);
	var myfn = AJS.$b(fn, this);
	//span_chck.addEventListener("click", myfn, false);
	AJS.AEV(span_chck, "click", myfn);
    }

    this.spell_span = span_chck;
    if(this.main_controller) {
        if(this.change_lang_pic_placement == "left")
            AJS.RCN(this.spell_container, span_chck, " ", this.switch_lan_pic);
        else
            AJS.RCN(this.spell_container, this.switch_lan_pic, " ", span_chck);
    }
}


//////
// Misc. functions
/////
GoogieSpell.item_onmouseover = function(e) {
    var elm = AJS.getEventElm(e);
    if(elm.className != "googie_list_revert" && elm.className != "googie_list_close")
        elm.className = "googie_list_onhover";
    else
        elm.parentNode.className = "googie_list_onhover";
}
GoogieSpell.item_onmouseout = function(e) {
    var elm = AJS.getEventElm(e);
    if(elm.className != "googie_list_revert" && elm.className != "googie_list_close")
        elm.className = "googie_list_onout";
    else
        elm.parentNode.className = "googie_list_onout";
}

GoogieSpell.prototype.createCloseButton = function(c_fn) {
    return this.createButton(this.lang_close, 'googie_list_close', AJS.$b(c_fn, this));
}

GoogieSpell.prototype.createButton = function(name, css_class, c_fn) {
    var btn_row = AJS.TR();
    var btn = AJS.TD();

    btn.onmouseover = GoogieSpell.item_onmouseover;
    btn.onmouseout = GoogieSpell.item_onmouseout;

    var spn_btn;
    if(css_class != "") {
        spn_btn = AJS.SPAN({'class': css_class});
        spn_btn.innerHTML = name;
    }
    else {
        spn_btn = AJS.TN(name);
    }
    btn.appendChild(spn_btn);
    AJS.AEV(btn, "click", c_fn);
    btn_row.appendChild(btn);

    return btn_row;
}

GoogieSpell.prototype.removeIndicator = function(elm) {
    try { AJS.removeElement(this.indicator); }
    catch(e) {}
}

GoogieSpell.prototype.appendIndicator = function(elm) {
    var img = AJS.IMG({'src': this.img_dir + 'indicator.gif', 'style': 'margin-right: 5px;'});
    AJS.setWidth(img, 16);
    AJS.setHeight(img, 16);
    this.indicator = img;
    img.style.textDecoration = "none";
    try {
        AJS.insertBefore(img, elm);
    }
    catch(e) {}
}

GoogieSpell.prototype.createFocusLink = function(name) {
    return AJS.A({'href': 'javascript:;', name: name});
}


// cookiesupport.js

function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}


// txspell.html

var x = document.cookie;
// Google discontinued their spellcheck service.
//var googie1 = new GoogieSpell("googiespell/", "https://www.google.com/tbproxy/spell?lang=");
var googie1 = new GoogieSpell("./", "./spell-check/spell-check.php?lang=");
googie1.decorateTextarea("ta1");

