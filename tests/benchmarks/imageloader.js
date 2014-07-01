/*
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
/**
 * The YAHOO object is the single global object used by YUI Library.  It
 * contains utility function for setting up namespaces, inheritance, and
 * logging.  YAHOO.util, YAHOO.widget, and YAHOO.example are namespaces
 * created automatically for and used by the library.
 * @module yahoo
 * @title  YAHOO Global
 */

/**
 * YAHOO_config is not included as part of the library.  Instead it is an
 * object that can be defined by the implementer immediately before
 * including the YUI library.  The properties included in this object
 * will be used to configure global properties needed as soon as the
 * library begins to load.
 * @class YAHOO_config
 * @static
 */

/**
 * A reference to a function that will be executed every time a YAHOO module
 * is loaded.  As parameter, this function will receive the version
 * information for the module. See <a href="YAHOO.env.html#getVersion">
 * YAHOO.env.getVersion</a> for the description of the version data structure.
 * @property listener
 * @type Function
 * @static
 * @default undefined
 */

/**
 * Set to true if the library will be dynamically loaded after window.onload.
 * Defaults to false
 * @property injecting
 * @type boolean
 * @static
 * @default undefined
 */

/**
 * Instructs the yuiloader component to dynamically load yui components and
 * their dependencies.  See the yuiloader documentation for more information
 * about dynamic loading
 * @property load
 * @static
 * @default undefined
 * @see yuiloader
 */

/**
 * Forces the use of the supplied locale where applicable in the library
 * @property locale
 * @type string
 * @static
 * @default undefined
 */

if (typeof YAHOO == "undefined" || !YAHOO) {
    /**
     * The YAHOO global namespace object.  If YAHOO is already defined, the
     * existing YAHOO object will not be overwritten so that defined
     * namespaces are preserved.
     * @class YAHOO
     * @static
     */
    var YAHOO = {};
}

/**
 * Returns the namespace specified and creates it if it doesn't exist
 * <pre>
 * YAHOO.namespace("property.package");
 * YAHOO.namespace("YAHOO.property.package");
 * </pre>
 * Either of the above would create YAHOO.property, then
 * YAHOO.property.package
 *
 * Be careful when naming packages. Reserved words may work in some browsers
 * and not others. For instance, the following will fail in Safari:
 * <pre>
 * YAHOO.namespace("really.long.nested.namespace");
 * </pre>
 * This fails because "long" is a future reserved word in ECMAScript
 *
 * For implementation code that uses YUI, do not create your components
 * in the namespaces defined by YUI (
 * <code>YAHOO.util</code>,
 * <code>YAHOO.widget</code>,
 * <code>YAHOO.lang</code>,
 * <code>YAHOO.tool</code>,
 * <code>YAHOO.example</code>,
 * <code>YAHOO.env</code>) -- create your own namespace (e.g., 'companyname').
 *
 * @method namespace
 * @static
 * @param  {String*} arguments 1-n namespaces to create
 * @return {Object}  A reference to the last namespace object created
 */
YAHOO.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=(""+a[i]).split(".");
        o=YAHOO;

        // YAHOO is implied, so it is ignored if it is included
        for (j=(d[0] == "YAHOO") ? 1 : 0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }

    return o;
};

/**
 * Uses YAHOO.widget.Logger to output a log message, if the widget is
 * available.
 * Note: LogReader adds the message, category, and source to the DOM as HTML.
 *
 * @method log
 * @static
 * @param  {HTML}  msg  The message to log.
 * @param  {HTML}  cat  The log category for the message.  Default
 *                        categories are "info", "warn", "error", time".
 *                        Custom categories can be used as well. (opt)
 * @param  {HTML}  src  The source of the the message (opt)
 * @return {Boolean}      True if the log operation was successful.
 */
YAHOO.log = function(msg, cat, src) {
    var l=YAHOO.widget.Logger;
    if(l && l.log) {
        return l.log(msg, cat, src);
    } else {
        return false;
    }
};

/**
 * Registers a module with the YAHOO object
 * @method register
 * @static
 * @param {String}   name    the name of the module (event, slider, etc)
 * @param {Function} mainClass a reference to class in the module.  This
 *                             class will be tagged with the version info
 *                             so that it will be possible to identify the
 *                             version that is in use when multiple versions
 *                             have loaded
 * @param {Object}   data      metadata object for the module.  Currently it
 *                             is expected to contain a "version" property
 *                             and a "build" property at minimum.
 */
YAHOO.register = function(name, mainClass, data) {
    var mods = YAHOO.env.modules, m, v, b, ls, i;

    if (!mods[name]) {
        mods[name] = {
            versions:[],
            builds:[]
        };
    }

    m  = mods[name];
    v  = data.version;
    b  = data.build;
    ls = YAHOO.env.listeners;

    m.name = name;
    m.version = v;
    m.build = b;
    m.versions.push(v);
    m.builds.push(b);
    m.mainClass = mainClass;

    // fire the module load listeners
    for (i=0;i<ls.length;i=i+1) {
        ls[i](m);
    }
    // label the main class
    if (mainClass) {
        mainClass.VERSION = v;
        mainClass.BUILD = b;
    } else {
        YAHOO.log("mainClass is undefined for module " + name, "warn");
    }
};

/**
 * YAHOO.env is used to keep track of what is known about the YUI library and
 * the browsing environment
 * @class YAHOO.env
 * @static
 */
YAHOO.env = YAHOO.env || {

    /**
     * Keeps the version info for all YUI modules that have reported themselves
     * @property modules
     * @type Object[]
     */
    modules: [],

    /**
     * List of functions that should be executed every time a YUI module
     * reports itself.
     * @property listeners
     * @type Function[]
     */
    listeners: []
};

/**
 * Returns the version data for the specified module:
 *      <dl>
 *      <dt>name:</dt>      <dd>The name of the module</dd>
 *      <dt>version:</dt>   <dd>The version in use</dd>
 *      <dt>build:</dt>     <dd>The build number in use</dd>
 *      <dt>versions:</dt>  <dd>All versions that were registered</dd>
 *      <dt>builds:</dt>    <dd>All builds that were registered.</dd>
 *      <dt>mainClass:</dt> <dd>An object that was was stamped with the
 *                 current version and build. If
 *                 mainClass.VERSION != version or mainClass.BUILD != build,
 *                 multiple versions of pieces of the library have been
 *                 loaded, potentially causing issues.</dd>
 *       </dl>
 *
 * @method getVersion
 * @static
 * @param {String}  name the name of the module (event, slider, etc)
 * @return {Object} The version info
 */
YAHOO.env.getVersion = function(name) {
    return YAHOO.env.modules[name] || null;
};

/**
 * Do not fork for a browser if it can be avoided.  Use feature detection when
 * you can.  Use the user agent as a last resort.  YAHOO.env.ua stores a version
 * number for the browser engine, 0 otherwise.  This value may or may not map
 * to the version number of the browser using the engine.  The value is
 * presented as a float so that it can easily be used for boolean evaluation
 * as well as for looking for a particular range of versions.  Because of this,
 * some of the granularity of the version info may be lost (e.g., Gecko 1.8.0.9
 * reports 1.8).
 * @class YAHOO.env.ua
 * @static
 */

/**
 * parses a user agent string (or looks for one in navigator to parse if
 * not supplied).
 * @method parseUA
 * @since 2.9.0
 * @static
 */
YAHOO.env.parseUA = function(agent) {

        var numberify = function(s) {
            var c = 0;
            return parseFloat(s.replace(/\./g, function() {
                return (c++ == 1) ? '' : '.';
            }));
        },

        nav = navigator,

        o = {

        /**
         * Internet Explorer version number or 0.  Example: 6
         * @property ie
         * @type float
         * @static
         */
        ie: 0,

        /**
         * Opera version number or 0.  Example: 9.2
         * @property opera
         * @type float
         * @static
         */
        opera: 0,

        /**
         * Gecko engine revision number.  Will evaluate to 1 if Gecko
         * is detected but the revision could not be found. Other browsers
         * will be 0.  Example: 1.8
         * <pre>
         * Firefox 1.0.0.4: 1.7.8   <-- Reports 1.7
         * Firefox 1.5.0.9: 1.8.0.9 <-- 1.8
         * Firefox 2.0.0.3: 1.8.1.3 <-- 1.81
         * Firefox 3.0   <-- 1.9
         * Firefox 3.5   <-- 1.91
         * </pre>
         * @property gecko
         * @type float
         * @static
         */
        gecko: 0,

        /**
         * AppleWebKit version.  KHTML browsers that are not WebKit browsers
         * will evaluate to 1, other browsers 0.  Example: 418.9
         * <pre>
         * Safari 1.3.2 (312.6): 312.8.1 <-- Reports 312.8 -- currently the
         *                                   latest available for Mac OSX 10.3.
         * Safari 2.0.2:         416     <-- hasOwnProperty introduced
         * Safari 2.0.4:         418     <-- preventDefault fixed
         * Safari 2.0.4 (419.3): 418.9.1 <-- One version of Safari may run
         *                                   different versions of webkit
         * Safari 2.0.4 (419.3): 419     <-- Tiger installations that have been
         *                                   updated, but not updated
         *                                   to the latest patch.
         * Webkit 212 nightly:   522+    <-- Safari 3.0 precursor (with native
         * SVG and many major issues fixed).
         * Safari 3.0.4 (523.12) 523.12  <-- First Tiger release - automatic
         * update from 2.x via the 10.4.11 OS patch.
         * Webkit nightly 1/2008:525+    <-- Supports DOMContentLoaded event.
         *                                   yahoo.com user agent hack removed.
         * </pre>
         * http://en.wikipedia.org/wiki/Safari_version_history
         * @property webkit
         * @type float
         * @static
         */
        webkit: 0,

        /**
         * Chrome will be detected as webkit, but this property will also
         * be populated with the Chrome version number
         * @property chrome
         * @type float
         * @static
         */
        chrome: 0,

        /**
         * The mobile property will be set to a string containing any relevant
         * user agent information when a modern mobile browser is detected.
         * Currently limited to Safari on the iPhone/iPod Touch, Nokia N-series
         * devices with the WebKit-based browser, and Opera Mini.
         * @property mobile
         * @type string
         * @static
         */
        mobile: null,

        /**
         * Adobe AIR version number or 0.  Only populated if webkit is detected.
         * Example: 1.0
         * @property air
         * @type float
         */
        air: 0,
        /**
         * Detects Apple iPad's OS version
         * @property ipad
         * @type float
         * @static
         */
        ipad: 0,
        /**
         * Detects Apple iPhone's OS version
         * @property iphone
         * @type float
         * @static
         */
        iphone: 0,
        /**
         * Detects Apples iPod's OS version
         * @property ipod
         * @type float
         * @static
         */
        ipod: 0,
        /**
         * General truthy check for iPad, iPhone or iPod
         * @property ios
         * @type float
         * @static
         */
        ios: null,
        /**
         * Detects Googles Android OS version
         * @property android
         * @type float
         * @static
         */
        android: 0,
        /**
         * Detects Palms WebOS version
         * @property webos
         * @type float
         * @static
         */
        webos: 0,

        /**
         * Google Caja version number or 0.
         * @property caja
         * @type float
         */
        caja: nav && nav.cajaVersion,

        /**
         * Set to true if the page appears to be in SSL
         * @property secure
         * @type boolean
         * @static
         */
        secure: false,

        /**
         * The operating system.  Currently only detecting windows or macintosh
         * @property os
         * @type string
         * @static
         */
        os: null

    },

    ua = agent || (navigator && navigator.userAgent),

    loc = window && window.location,

    href = loc && loc.href,

    m;

    o.secure = href && (href.toLowerCase().indexOf("https") === 0);

    if (ua) {

        if ((/windows|win32/i).test(ua)) {
            o.os = 'windows';
        } else if ((/macintosh/i).test(ua)) {
            o.os = 'macintosh';
        } else if ((/rhino/i).test(ua)) {
            o.os = 'rhino';
        }

        // Modern KHTML browsers should qualify as Safari X-Grade
        if ((/KHTML/).test(ua)) {
            o.webkit = 1;
        }
        // Modern WebKit browsers are at least X-Grade
        m = ua.match(/AppleWebKit\/([^\s]*)/);
        if (m && m[1]) {
            o.webkit = numberify(m[1]);

            // Mobile browser check
            if (/ Mobile\//.test(ua)) {
                o.mobile = 'Apple'; // iPhone or iPod Touch

                m = ua.match(/OS ([^\s]*)/);
                if (m && m[1]) {
                    m = numberify(m[1].replace('_', '.'));
                }
                o.ios = m;
                o.ipad = o.ipod = o.iphone = 0;

                m = ua.match(/iPad|iPod|iPhone/);
                if (m && m[0]) {
                    o[m[0].toLowerCase()] = o.ios;
                }
            } else {
                m = ua.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
                if (m) {
                    // Nokia N-series, Android, webOS, ex: NokiaN95
                    o.mobile = m[0];
                }
                if (/webOS/.test(ua)) {
                    o.mobile = 'WebOS';
                    m = ua.match(/webOS\/([^\s]*);/);
                    if (m && m[1]) {
                        o.webos = numberify(m[1]);
                    }
                }
                if (/ Android/.test(ua)) {
                    o.mobile = 'Android';
                    m = ua.match(/Android ([^\s]*);/);
                    if (m && m[1]) {
                        o.android = numberify(m[1]);
                    }

                }
            }

            m = ua.match(/Chrome\/([^\s]*)/);
            if (m && m[1]) {
                o.chrome = numberify(m[1]); // Chrome
            } else {
                m = ua.match(/AdobeAIR\/([^\s]*)/);
                if (m) {
                    o.air = m[0]; // Adobe AIR 1.0 or better
                }
            }
        }

        if (!o.webkit) { // not webkit
// @todo check Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1316; fi; U; ssr)
            m = ua.match(/Opera[\s\/]([^\s]*)/);
            if (m && m[1]) {
                o.opera = numberify(m[1]);
                m = ua.match(/Version\/([^\s]*)/);
                if (m && m[1]) {
                    o.opera = numberify(m[1]); // opera 10+
                }
                m = ua.match(/Opera Mini[^;]*/);
                if (m) {
                    o.mobile = m[0]; // ex: Opera Mini/2.0.4509/1316
                }
            } else { // not opera or webkit
                m = ua.match(/MSIE\s([^;]*)/);
                if (m && m[1]) {
                    o.ie = numberify(m[1]);
                } else { // not opera, webkit, or ie
                    m = ua.match(/Gecko\/([^\s]*)/);
                    if (m) {
                        o.gecko = 1; // Gecko detected, look for revision
                        m = ua.match(/rv:([^\s\)]*)/);
                        if (m && m[1]) {
                            o.gecko = numberify(m[1]);
                        }
                    }
                }
            }
        }
    }

    return o;
};

YAHOO.env.ua = YAHOO.env.parseUA();

/*
 * Initializes the global by creating the default namespaces and applying
 * any new configuration information that is detected.  This is the setup
 * for env.
 * @method init
 * @static
 * @private
 */
(function() {
    YAHOO.namespace("util", "widget", "example");
    /*global YAHOO_config*/
    if ("undefined" !== typeof YAHOO_config) {
        var l=YAHOO_config.listener, ls=YAHOO.env.listeners,unique=true, i;
        if (l) {
            // if YAHOO is loaded multiple times we need to check to see if
            // this is a new config object.  If it is, add the new component
            // load listener to the stack
            for (i=0; i<ls.length; i++) {
                if (ls[i] == l) {
                    unique = false;
                    break;
                }
            }

            if (unique) {
                ls.push(l);
            }
        }
    }
})();
/**
 * Provides the language utilites and extensions used by the library
 * @class YAHOO.lang
 */
YAHOO.lang = YAHOO.lang || {};

(function() {


var L = YAHOO.lang,

    OP = Object.prototype,
    ARRAY_TOSTRING = '[object Array]',
    FUNCTION_TOSTRING = '[object Function]',
    OBJECT_TOSTRING = '[object Object]',
    NOTHING = [],

    HTML_CHARS = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;'
    },

    // ADD = ["toString", "valueOf", "hasOwnProperty"],
    ADD = ["toString", "valueOf"],

    OB = {

    /**
     * Determines wheather or not the provided object is an array.
     * @method isArray
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isArray: function(o) {
        return OP.toString.apply(o) === ARRAY_TOSTRING;
    },

    /**
     * Determines whether or not the provided object is a boolean
     * @method isBoolean
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isBoolean: function(o) {
        return typeof o === 'boolean';
    },

    /**
     * Determines whether or not the provided object is a function.
     * Note: Internet Explorer thinks certain functions are objects:
     *
     * var obj = document.createElement("object");
     * YAHOO.lang.isFunction(obj.getAttribute) // reports false in IE
     *
     * var input = document.createElement("input"); // append to body
     * YAHOO.lang.isFunction(input.focus) // reports false in IE
     *
     * You will have to implement additional tests if these functions
     * matter to you.
     *
     * @method isFunction
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isFunction: function(o) {
        return (typeof o === 'function') || OP.toString.apply(o) === FUNCTION_TOSTRING;
    },

    /**
     * Determines whether or not the provided object is null
     * @method isNull
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isNull: function(o) {
        return o === null;
    },

    /**
     * Determines whether or not the provided object is a legal number
     * @method isNumber
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isNumber: function(o) {
        return typeof o === 'number' && isFinite(o);
    },

    /**
     * Determines whether or not the provided object is of type object
     * or function
     * @method isObject
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isObject: function(o) {
return (o && (typeof o === 'object' || L.isFunction(o))) || false;
    },

    /**
     * Determines whether or not the provided object is a string
     * @method isString
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isString: function(o) {
        return typeof o === 'string';
    },

    /**
     * Determines whether or not the provided object is undefined
     * @method isUndefined
     * @param {any} o The object being testing
     * @return {boolean} the result
     */
    isUndefined: function(o) {
        return typeof o === 'undefined';
    },


    /**
     * IE will not enumerate native functions in a derived object even if the
     * function was overridden.  This is a workaround for specific functions
     * we care about on the Object prototype.
     * @property _IEEnumFix
     * @param {Function} r  the object to receive the augmentation
     * @param {Function} s  the object that supplies the properties to augment
     * @static
     * @private
     */
    _IEEnumFix: (YAHOO.env.ua.ie) ? function(r, s) {
            var i, fname, f;
            for (i=0;i<ADD.length;i=i+1) {

                fname = ADD[i];
                f = s[fname];

                if (L.isFunction(f) && f!=OP[fname]) {
                    r[fname]=f;
                }
            }
    } : function(){},

    /**
     * <p>
     * Returns a copy of the specified string with special HTML characters
     * escaped. The following characters will be converted to their
     * corresponding character entities:
     * <code>&amp; &lt; &gt; &quot; &#x27; &#x2F; &#x60;</code>
     * </p>
     *
     * <p>
     * This implementation is based on the
     * <a href="http://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet">OWASP
     * HTML escaping recommendations</a>. In addition to the characters
     * in the OWASP recommendation, we also escape the <code>&#x60;</code>
     * character, since IE interprets it as an attribute delimiter when used in
     * innerHTML.
     * </p>
     *
     * @method escapeHTML
     * @param {String} html String to escape.
     * @return {String} Escaped string.
     * @static
     * @since 2.9.0
     */
    escapeHTML: function (html) {
        return html.replace(/[&<>"'\/`]/g, function (match) {
            return HTML_CHARS[match];
        });
    },

    /**
     * Utility to set up the prototype, constructor and superclass properties to
     * support an inheritance strategy that can chain constructors and methods.
     * Static members will not be inherited.
     *
     * @method extend
     * @static
     * @param {Function} subc   the object to modify
     * @param {Function} superc the object to inherit
     * @param {Object} overrides  additional properties/methods to add to the
     *                              subclass prototype.  These will override the
     *                              matching items obtained from the superclass
     *                              if present.
     */
    extend: function(subc, superc, overrides) {
        if (!superc||!subc) {
            throw new Error("extend failed, please check that " +
                            "all dependencies are included.");
        }
        var F = function() {}, i;
        F.prototype=superc.prototype;
        subc.prototype=new F();
        subc.prototype.constructor=subc;
        subc.superclass=superc.prototype;
        if (superc.prototype.constructor == OP.constructor) {
            superc.prototype.constructor=superc;
        }

        if (overrides) {
            for (i in overrides) {
                if (L.hasOwnProperty(overrides, i)) {
                    subc.prototype[i]=overrides[i];
                }
            }

            L._IEEnumFix(subc.prototype, overrides);
        }
    },

    /**
     * Applies all properties in the supplier to the receiver if the
     * receiver does not have these properties yet.  Optionally, one or
     * more methods/properties can be specified (as additional
     * parameters).  This option will overwrite the property if receiver
     * has it already.  If true is passed as the third parameter, all
     * properties will be applied and _will_ overwrite properties in
     * the receiver.
     *
     * @method augmentObject
     * @static
     * @since 2.3.0
     * @param {Function} r  the object to receive the augmentation
     * @param {Function} s  the object that supplies the properties to augment
     * @param {String*|boolean}  arguments zero or more properties methods
     *        to augment the receiver with.  If none specified, everything
     *        in the supplier will be used unless it would
     *        overwrite an existing property in the receiver. If true
     *        is specified as the third parameter, all properties will
     *        be applied and will overwrite an existing property in
     *        the receiver
     */
    augmentObject: function(r, s) {
        if (!s||!r) {
            throw new Error("Absorb failed, verify dependencies.");
        }
        var a=arguments, i, p, overrideList=a[2];
        if (overrideList && overrideList!==true) { // only absorb the specified properties
            for (i=2; i<a.length; i=i+1) {
                r[a[i]] = s[a[i]];
            }
        } else { // take everything, overwriting only if the third parameter is true
            for (p in s) {
                if (overrideList || !(p in r)) {
                    r[p] = s[p];
                }
            }

            L._IEEnumFix(r, s);
        }

        return r;
    },

    /**
     * Same as YAHOO.lang.augmentObject, except it only applies prototype properties
     * @see YAHOO.lang.augmentObject
     * @method augmentProto
     * @static
     * @param {Function} r  the object to receive the augmentation
     * @param {Function} s  the object that supplies the properties to augment
     * @param {String*|boolean}  arguments zero or more properties methods
     *        to augment the receiver with.  If none specified, everything
     *        in the supplier will be used unless it would overwrite an existing
     *        property in the receiver.  if true is specified as the third
     *        parameter, all properties will be applied and will overwrite an
     *        existing property in the receiver
     */
    augmentProto: function(r, s) {
        if (!s||!r) {
            throw new Error("Augment failed, verify dependencies.");
        }
        //var a=[].concat(arguments);
        var a=[r.prototype,s.prototype], i;
        for (i=2;i<arguments.length;i=i+1) {
            a.push(arguments[i]);
        }
        L.augmentObject.apply(this, a);

        return r;
    },


    /**
     * Returns a simple string representation of the object or array.
     * Other types of objects will be returned unprocessed.  Arrays
     * are expected to be indexed.  Use object notation for
     * associative arrays.
     * @method dump
     * @since 2.3.0
     * @param o {Object} The object to dump
     * @param d {int} How deep to recurse child objects, default 3
     * @return {String} the dump result
     */
    dump: function(o, d) {
        var i,len,s=[],OBJ="{...}",FUN="f(){...}",
            COMMA=', ', ARROW=' => ';

        // Cast non-objects to string
        // Skip dates because the std toString is what we want
        // Skip HTMLElement-like objects because trying to dump
        // an element will cause an unhandled exception in FF 2.x
        if (!L.isObject(o)) {
            return o + "";
        } else if (o instanceof Date || ("nodeType" in o && "tagName" in o)) {
            return o;
        } else if  (L.isFunction(o)) {
            return FUN;
        }

        // dig into child objects the depth specifed. Default 3
        d = (L.isNumber(d)) ? d : 3;

        // arrays [1, 2, 3]
        if (L.isArray(o)) {
            s.push("[");
            for (i=0,len=o.length;i<len;i=i+1) {
                if (L.isObject(o[i])) {
                    s.push((d > 0) ? L.dump(o[i], d-1) : OBJ);
                } else {
                    s.push(o[i]);
                }
                s.push(COMMA);
            }
            if (s.length > 1) {
                s.pop();
            }
            s.push("]");
        // objects {k1 => v1, k2 => v2}
        } else {
            s.push("{");
            for (i in o) {
                if (L.hasOwnProperty(o, i)) {
                    s.push(i + ARROW);
                    if (L.isObject(o[i])) {
                        s.push((d > 0) ? L.dump(o[i], d-1) : OBJ);
                    } else {
                        s.push(o[i]);
                    }
                    s.push(COMMA);
                }
            }
            if (s.length > 1) {
                s.pop();
            }
            s.push("}");
        }

        return s.join("");
    },

    /**
     * Does variable substitution on a string. It scans through the string
     * looking for expressions enclosed in { } braces. If an expression
     * is found, it is used a key on the object.  If there is a space in
     * the key, the first word is used for the key and the rest is provided
     * to an optional function to be used to programatically determine the
     * value (the extra information might be used for this decision). If
     * the value for the key in the object, or what is returned from the
     * function has a string value, number value, or object value, it is
     * substituted for the bracket expression and it repeats.  If this
     * value is an object, it uses the Object's toString() if this has
     * been overridden, otherwise it does a shallow dump of the key/value
     * pairs.
     *
     * By specifying the recurse option, the string is rescanned after
     * every replacement, allowing for nested template substitutions.
     * The side effect of this option is that curly braces in the
     * replacement content must be encoded.
     *
     * @method substitute
     * @since 2.3.0
     * @param s {String} The string that will be modified.
     * @param o {Object} An object containing the replacement values
     * @param f {Function} An optional function that can be used to
     *                     process each match.  It receives the key,
     *                     value, and any extra metadata included with
     *                     the key inside of the braces.
     * @param recurse {boolean} default true - if not false, the replaced
     * string will be rescanned so that nested substitutions are possible.
     * @return {String} the substituted string
     */
    substitute: function (s, o, f, recurse) {
        var i, j, k, key, v, meta, saved=[], token, lidx=s.length,
            DUMP='dump', SPACE=' ', LBRACE='{', RBRACE='}',
            dump, objstr;

        for (;;) {
            i = s.lastIndexOf(LBRACE, lidx);
            if (i < 0) {
                break;
            }
            j = s.indexOf(RBRACE, i);
            if (i + 1 > j) {
                break;
            }

            //Extract key and meta info
            token = s.substring(i + 1, j);
            key = token;
            meta = null;
            k = key.indexOf(SPACE);
            if (k > -1) {
                meta = key.substring(k + 1);
                key = key.substring(0, k);
            }

            // lookup the value
            v = o[key];

            // if a substitution function was provided, execute it
            if (f) {
                v = f(key, v, meta);
            }

            if (L.isObject(v)) {
                if (L.isArray(v)) {
                    v = L.dump(v, parseInt(meta, 10));
                } else {
                    meta = meta || "";

                    // look for the keyword 'dump', if found force obj dump
                    dump = meta.indexOf(DUMP);
                    if (dump > -1) {
                        meta = meta.substring(4);
                    }

                    objstr = v.toString();

                    // use the toString if it is not the Object toString
                    // and the 'dump' meta info was not found
                    if (objstr === OBJECT_TOSTRING || dump > -1) {
                        v = L.dump(v, parseInt(meta, 10));
                    } else {
                        v = objstr;
                    }
                }
            } else if (!L.isString(v) && !L.isNumber(v)) {
                // This {block} has no replace string. Save it for later.
                v = "~-" + saved.length + "-~";
                saved[saved.length] = token;

                // break;
            }

            s = s.substring(0, i) + v + s.substring(j + 1);

            if (recurse === false) {
                lidx = i-1;
            }

        }

        // restore saved {block}s
        for (i=saved.length-1; i>=0; i=i-1) {
            s = s.replace(new RegExp("~-" + i + "-~"), "{"  + saved[i] + "}", "g");
        }

        return s;
    },


    /**
     * Returns a string without any leading or trailing whitespace.  If
     * the input is not a string, the input will be returned untouched.
     * @method trim
     * @since 2.3.0
     * @param s {string} the string to trim
     * @return {string} the trimmed string
     */
    trim: function(s){
        try {
            return s.replace(/^\s+|\s+$/g, "");
        } catch(e) {
            return s;
        }
    },

    /**
     * Returns a new object containing all of the properties of
     * all the supplied objects.  The properties from later objects
     * will overwrite those in earlier objects.
     * @method merge
     * @since 2.3.0
     * @param arguments {Object*} the objects to merge
     * @return the new merged object
     */
    merge: function() {
        var o={}, a=arguments, l=a.length, i;
        for (i=0; i<l; i=i+1) {
            L.augmentObject(o, a[i], true);
        }
        return o;
    },

    /**
     * Executes the supplied function in the context of the supplied
     * object 'when' milliseconds later.  Executes the function a
     * single time unless periodic is set to true.
     * @method later
     * @since 2.4.0
     * @param when {int} the number of milliseconds to wait until the fn
     * is executed
     * @param o the context object
     * @param fn {Function|String} the function to execute or the name of
     * the method in the 'o' object to execute
     * @param data [Array] data that is provided to the function.  This accepts
     * either a single item or an array.  If an array is provided, the
     * function is executed with one parameter for each array item.  If
     * you need to pass a single array parameter, it needs to be wrapped in
     * an array [myarray]
     * @param periodic {boolean} if true, executes continuously at supplied
     * interval until canceled
     * @return a timer object. Call the cancel() method on this object to
     * stop the timer.
     */
    later: function(when, o, fn, data, periodic) {
        when = when || 0;
        o = o || {};
        var m=fn, d=data, f, r;

        if (L.isString(fn)) {
            m = o[fn];
        }

        if (!m) {
            throw new TypeError("method undefined");
        }

        if (!L.isUndefined(data) && !L.isArray(d)) {
            d = [data];
        }

        f = function() {
            m.apply(o, d || NOTHING);
        };

        r = (periodic) ? setInterval(f, when) : setTimeout(f, when);

        return {
            interval: periodic,
            cancel: function() {
                if (this.interval) {
                    clearInterval(r);
                } else {
                    clearTimeout(r);
                }
            }
        };
    },

    /**
     * A convenience method for detecting a legitimate non-null value.
     * Returns false for null/undefined/NaN, true for other values,
     * including 0/false/''
     * @method isValue
     * @since 2.3.0
     * @param o {any} the item to test
     * @return {boolean} true if it is not null/undefined/NaN || false
     */
    isValue: function(o) {
        // return (o || o === false || o === 0 || o === ''); // Infinity fails
return (L.isObject(o) || L.isString(o) || L.isNumber(o) || L.isBoolean(o));
    }

};

/**
 * Determines whether or not the property was added
 * to the object instance.  Returns false if the property is not present
 * in the object, or was inherited from the prototype.
 * This abstraction is provided to enable hasOwnProperty for Safari 1.3.x.
 * There is a discrepancy between YAHOO.lang.hasOwnProperty and
 * Object.prototype.hasOwnProperty when the property is a primitive added to
 * both the instance AND prototype with the same value:
 * <pre>
 * var A = function() {};
 * A.prototype.foo = 'foo';
 * var a = new A();
 * a.foo = 'foo';
 * alert(a.hasOwnProperty('foo')); // true
 * alert(YAHOO.lang.hasOwnProperty(a, 'foo')); // false when using fallback
 * </pre>
 * @method hasOwnProperty
 * @param {any} o The object being testing
 * @param prop {string} the name of the property to test
 * @return {boolean} the result
 */
L.hasOwnProperty = (OP.hasOwnProperty) ?
    function(o, prop) {
        return o && o.hasOwnProperty && o.hasOwnProperty(prop);
    } : function(o, prop) {
        return !L.isUndefined(o[prop]) &&
                o.constructor.prototype[prop] !== o[prop];
    };

// new lang wins
OB.augmentObject(L, OB, true);

/*
 * An alias for <a href="YAHOO.lang.html">YAHOO.lang</a>
 * @class YAHOO.util.Lang
 */
YAHOO.util.Lang = L;

/**
 * Same as YAHOO.lang.augmentObject, except it only applies prototype
 * properties.  This is an alias for augmentProto.
 * @see YAHOO.lang.augmentObject
 * @method augment
 * @static
 * @param {Function} r  the object to receive the augmentation
 * @param {Function} s  the object that supplies the properties to augment
 * @param {String*|boolean}  arguments zero or more properties methods to
 *        augment the receiver with.  If none specified, everything
 *        in the supplier will be used unless it would
 *        overwrite an existing property in the receiver.  if true
 *        is specified as the third parameter, all properties will
 *        be applied and will overwrite an existing property in
 *        the receiver
 */
L.augment = L.augmentProto;

/**
 * An alias for <a href="YAHOO.lang.html#augment">YAHOO.lang.augment</a>
 * @for YAHOO
 * @method augment
 * @static
 * @param {Function} r  the object to receive the augmentation
 * @param {Function} s  the object that supplies the properties to augment
 * @param {String*}  arguments zero or more properties methods to
 *        augment the receiver with.  If none specified, everything
 *        in the supplier will be used unless it would
 *        overwrite an existing property in the receiver
 */
YAHOO.augment = L.augmentProto;

/**
 * An alias for <a href="YAHOO.lang.html#extend">YAHOO.lang.extend</a>
 * @method extend
 * @static
 * @param {Function} subc   the object to modify
 * @param {Function} superc the object to inherit
 * @param {Object} overrides  additional properties/methods to add to the
 *        subclass prototype.  These will override the
 *        matching items obtained from the superclass if present.
 */
YAHOO.extend = L.extend;

})();
YAHOO.register("yahoo", YAHOO, {version: "2.9.0", build: "2800"});


/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.2r1
*/
/**
 * The ImageLoader Utility is a framework to dynamically load images according to certain triggers,
 * enabling faster load times and a more responsive UI.
 *
 * @module imageloader
 * @namespace YAHOO.util
 * @requires yahoo, dom, event
 */

if (typeof(YAHOO.util.ImageLoader) == 'undefined') {
	YAHOO.util.ImageLoader = {};
}

/**
 * A group for images. A group can have one time limit and a series of triggers. Thus the images belonging to this group must share these constraints.
 * @class YAHOO.util.ImageLoader.group
 * @requires YAHOO.util.Dom
 * @requires YAHOO.util.Event
 * @constructor
 * @param {String|HTMLElement}	trigEl	The HTML element id or reference to assign the trigger event to. Can be null for no trigger
 * @param {String}	trigAct The type of event to assign to trigEl. Can be null for no trigger
 * @param {Number}	timeout	Timeout (time limit) length, in seconds. Can be undefined, or <= 0, for no time limit
 */
YAHOO.util.ImageLoader.group = function(trigEl, trigAct, timeout) {
	/**
	 * Name for the group. Only used to identify the group in logging statements
	 * @property name
	 * @type String
	 */
	this.name = 'unnamed';
	
	/**
	 * Collection of images registered with this group
	 * @property _imgObjs
	 * @private
	 * @type Object
	 */
	this._imgObjs = {};
	
	/**
	 * Timeout (time limit) length, in seconds
	 * @property timeoutLen
	 * @type Number
	 */
	this.timeoutLen = timeout;
	
	/**
	 * Timeout object to keep a handle on the time limit
	 * @property _timeout
	 * @private
	 * @type Object
	 */
	this._timeout = null;
	
	/**
	 * Collection of triggers for this group.
	 * Keeps track of each trigger's element, event, and event-listener-callback "fetch" function
	 * @property _triggers
	 * @private
	 * @type Array
	 */
	this._triggers = [];

	/**
	 * Collection of custom-event triggers for this group.
	 * Keeps track of each trigger's event object and event-listener-callback "fetch" function
	 * @property _customTriggers
	 * @private
	 * @type Array
	 */
	this._customTriggers = [];

	/**
	 * Flag to check if images are above the fold. If foldConditional is true, the group will check each of its image locations at page load. If any part of the image is within the client viewport, the image is displayed immediately
	 * @property foldConditional
	 * @type Boolean
	 */
	this.foldConditional = false;

	/**
	 * Class name that will identify images belonging to the group. This class name will be removed from each element in order to fetch images.
	 * This class should have, in its CSS style definition, "background:none !important;"
	 * @property className
	 * @type String
	 */
	this.className = null;

	/**
	 * HTML elements having the class name that is associated with this group
	 * Elements are stored during the _foldCheck function and reused later during the fetch function. Gives a slight performance improvement when className and foldConditional are both used
	 * @property _classImageEls
	 * @private
	 * @type Array
	 */
	this._classImageEls = null;

	// add a listener to set the time limit in the onload
	YAHOO.util.Event.addListener(window, 'load', this._onloadTasks, this, true);
	// add the trigger
	this.addTrigger(trigEl, trigAct);

};

/**
 * Adds a trigger to the group. Call this with the same style as YAHOO.util.Event.addListener
 * @method addTrigger
 * @param {String|HTMLElement} trigEl  The HTML element id or reference to assign the trigger event to
 * @param {String} trigAct The type of event to assign to trigEl
 */
YAHOO.util.ImageLoader.group.prototype.addTrigger = function(trigEl, trigAct) {
	if (! trigEl || ! trigAct) {
		return;
	}
	/* Need to wrap the fetch function. Event Util can't distinguish prototyped functions of different instantiations
	 *   Leads to this scenario: groupA and groupZ both have window-scroll triggers. groupZ also has a 2-sec timeout (groupA has no timeout).
	 *   groupZ's timeout fires; we remove the triggers. The removeListener call finds the first window-scroll event with Y.u.IL.p.fetch, which is groupA's. 
	 *   groupA's trigger is removed and never fires, leaving images unfetched
	 */
	var wrappedFetch = function() {
		this.fetch();
	};
	this._triggers.push([trigEl, trigAct, wrappedFetch]);
	YAHOO.util.Event.addListener(trigEl, trigAct, wrappedFetch, this, true);
};

/**
 * Adds a custom event trigger to the group.
 * @method addCustomTrigger
 * @param {Object} event A YAHOO.util.CustomEvent object
 */
YAHOO.util.ImageLoader.group.prototype.addCustomTrigger = function(event) {
	// make sure we're dealing with a CustomEvent object
	if (! event || ! event instanceof YAHOO.util.CustomEvent) {
		return;
	}

	// see comment in addTrigger()
	var wrappedFetch = function() {
		this.fetch();
	};
	this._customTriggers.push([event, wrappedFetch]);
	event.subscribe(wrappedFetch, this, true);
};

/**
 * Setup to do in the window's onload
 * Initiates time limit for group; executes the fold check for the images
 * @method _onloadTasks
 * @private
 */
YAHOO.util.ImageLoader.group.prototype._onloadTasks = function() {
	if (this.timeoutLen && typeof(this.timeoutLen) == 'number' && this.timeoutLen > 0) {
		this._timeout = setTimeout(this._getFetchTimeout(), this.timeoutLen * 1000);
	}

	if (this.foldConditional) {
		this._foldCheck();
	}
};

/**
 * Returns the group's fetch method, with the proper closure, for use with setTimeout
 * @method _getFetchTimeout
 * @return {Function}  group's fetch method
 * @private
 */
YAHOO.util.ImageLoader.group.prototype._getFetchTimeout = function() {
	var self = this;
	return function() { self.fetch(); };
};

/**
 * Registers a background image with the group
 * @method registerBgImage
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 * @return {Object}	bgImgObj that was registered, for modifying any attributes in the object
 */
YAHOO.util.ImageLoader.group.prototype.registerBgImage = function(domId, url) {
	this._imgObjs[domId] = new YAHOO.util.ImageLoader.bgImgObj(domId, url);
	return this._imgObjs[domId];
};
/**
 * Registers a src image with the group
 * @method registerSrcImage
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 * @param {Int}	width	pixel width of the image - defaults to image's natural size
 * @param {Int}	height	pixel height of the image - defaults to image's natural size
 * @return {Object}	srcImgObj that was registered, for modifying any attributes in the object
 */
YAHOO.util.ImageLoader.group.prototype.registerSrcImage = function(domId, url, width, height) {
	this._imgObjs[domId] = new YAHOO.util.ImageLoader.srcImgObj(domId, url, width, height);
	return this._imgObjs[domId];
};
/**
 * Registers an alpha-channel-type png background image with the group
 * @method registerPngBgImage
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 * @param {Object}  ailProps The AlphaImageLoader properties to be set for the image
 *                    Valid properties are 'sizingMethod' and 'enabled'
 * @return {Object}	pngBgImgObj that was registered, for modifying any attributes in the object
 */
YAHOO.util.ImageLoader.group.prototype.registerPngBgImage = function(domId, url, ailProps) {
	this._imgObjs[domId] = new YAHOO.util.ImageLoader.pngBgImgObj(domId, url, ailProps);
	return this._imgObjs[domId];
};

/**
 * Displays the images in the group
 * @method fetch
 */
YAHOO.util.ImageLoader.group.prototype.fetch = function() {

	clearTimeout(this._timeout);
	// remove all listeners
	for (var i=0, len = this._triggers.length; i < len; i++) {
		YAHOO.util.Event.removeListener(this._triggers[i][0], this._triggers[i][1], this._triggers[i][2]);
	}
	// remove custom event subscriptions
	for (var i=0, len = this._customTriggers.length; i < len; i++) {
		this._customTriggers[i][0].unsubscribe(this._customTriggers[i][1], this);
	}

	// fetch whatever we need to by className
	this._fetchByClass();

	// fetch registered images
	for (var id in this._imgObjs) {
		if (YAHOO.lang.hasOwnProperty(this._imgObjs, id)) {
			this._imgObjs[id].fetch();
		}
	}
};

/**
 * Checks the position of each image in the group. If any part of the image is within the client viewport, shows the image immediately.
 * @method _foldCheck
 * @private
 */
YAHOO.util.ImageLoader.group.prototype._foldCheck = function() {
	var scrollTop = (document.compatMode != 'CSS1Compat') ? document.body.scrollTop : document.documentElement.scrollTop;
	var viewHeight = YAHOO.util.Dom.getViewportHeight();
	var hLimit = scrollTop + viewHeight;
	var scrollLeft = (document.compatMode != 'CSS1Compat') ? document.body.scrollLeft : document.documentElement.scrollLeft;
	var viewWidth = YAHOO.util.Dom.getViewportWidth();
	var wLimit = scrollLeft + viewWidth;
	for (var id in this._imgObjs) {
		if (YAHOO.lang.hasOwnProperty(this._imgObjs, id)) {
			var elPos = YAHOO.util.Dom.getXY(this._imgObjs[id].domId);
			if (elPos[1] < hLimit && elPos[0] < wLimit) {
				this._imgObjs[id].fetch();
			}
		}
	}
	// and by class
	if (this.className) {
		this._classImageEls = YAHOO.util.Dom.getElementsByClassName(this.className);
		for (var i=0, len = this._classImageEls.length; i < len; i++) {
			var elPos = YAHOO.util.Dom.getXY(this._classImageEls[i]);
			if (elPos[1] < hLimit && elPos[0] < wLimit) {
				YAHOO.util.Dom.removeClass(this._classImageEls[i], this.className);
			}
		}
	}
};

/**
 * Finds all elements in the Dom with the class name specified in the group. Removes the class from the element in order to let the style definitions trigger the image fetching
 * @method _fetchByClass
 * @private
 */
YAHOO.util.ImageLoader.group.prototype._fetchByClass = function() {
	if (! this.className) {
		return;
	}

	// this._classImageEls may have been set during _foldCheck
	if (this._classImageEls === null) {
		this._classImageEls = YAHOO.util.Dom.getElementsByClassName(this.className);
	}
	YAHOO.util.Dom.removeClass(this._classImageEls, this.className);
};


/**
 * Base class for image objects to be registered with the groups
 * @class YAHOO.util.ImageLoader.imgObj
 * @constructor
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 */
YAHOO.util.ImageLoader.imgObj = function(domId, url) {
	/**
	 * HTML DOM id of the image element
	 * @property domId
	 * @type String
	 */
	this.domId = domId;

	/**
	 * URL for the image
	 * @property url
	 * @type String
	 */
	this.url = url;

	/**
	 * Pixel width of the image. Will be set as a "width" attribute after the image is fetched.
	 * Detaults to the natural width of the image.
	 * Only appropriate with src images
	 * @property width
	 * @type Int
	 */
	this.width = null;

	/**
	 * Pixel height of the image. Will be set as a "height" attribute after the image is fetched.
	 * Detaults to the natural height of the image.
	 * Only appropriate with src images
	 * @property height
	 * @type Int
	 */
	this.height = null;

	/**
	 * Whether the style.visibility should be set to "visible" after the image is fetched.
	 * Used when setting src images as visibility:hidden prior to image fetching
	 * @property setVisible
	 * @type Boolean
	 */
	this.setVisible = false;

	/**
	 * Whether the image has already been fetched. In the case of a foldCondional group, keeps track for when the trigger is fired so images aren't fetched twice
	 * @property _fetched
	 * @type Boolean
	 * @private
	 */
	this._fetched = false;
};

/**
 * Displays the image; puts the URL into the DOM
 * @method fetch
 */
YAHOO.util.ImageLoader.imgObj.prototype.fetch = function() {
	if (this._fetched) {
    alert("BOOM1");
		return;
	}
	var el = document.getElementById(this.domId);
	if (! el) {
    alert("BOOM2");
		return;
	}
	this._applyUrl(el);

	if (this.setVisible) {
		el.style.visibility = 'visible';
	}
	if (this.width) {
		el.width = this.width;
	}
	if (this.height) {
		el.height = this.height;
	}
	this._fetched = true;
};

/**
 * Inserts the image URL into the DOM so that the image is displayed.
 * Must be overridden by child class
 * @method _applyUrl
 * @param {Object}	el	HTML DOM element
 * @private
 */
YAHOO.util.ImageLoader.imgObj.prototype._applyUrl = function(el) {
};

/**
 * Background image object. A background image is one whose URL is specified by "background-image" in the element's style
 * @class YAHOO.util.ImageLoader.bgImgObj
 * @constructor
 * @extends YAHOO.util.ImageLoader.imgObj
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 */
YAHOO.util.ImageLoader.bgImgObj = function(domId, url) {
	YAHOO.util.ImageLoader.bgImgObj.superclass.constructor.call(this, domId, url);
};

YAHOO.lang.extend(YAHOO.util.ImageLoader.bgImgObj, YAHOO.util.ImageLoader.imgObj);

/**
 * Inserts the image URL into the DOM so that the image is displayed.
 * Sets style.backgroundImage
 * @method _applyUrl
 * @param {Object}	el	HTML DOM element
 * @private
 */
YAHOO.util.ImageLoader.bgImgObj.prototype._applyUrl = function(el) {
	el.style.backgroundImage = "url('" + this.url + "')";
};

/**
 * Source image object. A source image is one whose URL is specified by a src attribute in the DOM element
 * @class YAHOO.util.ImageLoader.srcImgObj
 * @constructor
 * @extends YAHOO.util.ImageLoader.imgObj
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 * @param {Int}	width	pixel width of the image - defaults to image's natural size
 * @param {Int}	height	pixel height of the image - defaults to image's natural size
 */
YAHOO.util.ImageLoader.srcImgObj = function(domId, url, width, height) {
	YAHOO.util.ImageLoader.srcImgObj.superclass.constructor.call(this, domId, url);
	this.width = width;
	this.height = height;
};

YAHOO.lang.extend(YAHOO.util.ImageLoader.srcImgObj, YAHOO.util.ImageLoader.imgObj);

/**
 * Inserts the image URL into the DOM so that the image is displayed.
 * Sets src
 * @method _applyUrl
 * @param {Object}	el	HTML DOM element
 * @private
 */
YAHOO.util.ImageLoader.srcImgObj.prototype._applyUrl = function(el) {
	el.src = this.url;
};

/**
 * PNG background image object. A PNG background image is one whose URL is specified through AlphaImageLoader or by "background-image" in the element's style
 * @class YAHOO.util.ImageLoader.pngBgImgObj
 * @constructor
 * @extends YAHOO.util.ImageLoader.imgObj
 * @param {String}	domId	HTML DOM id of the image element
 * @param {String}	url	URL for the image
 * @param {Object}  ailProps The AlphaImageLoader properties to be set for the image
 *                    Valid properties are 'sizingMethod' and 'enabled'
 */
YAHOO.util.ImageLoader.pngBgImgObj = function(domId, url, ailProps) {
	YAHOO.util.ImageLoader.pngBgImgObj.superclass.constructor.call(this, domId, url);

	/**
	 * AlphaImageLoader properties to be set for the image.
	 * Valid properties are "sizingMethod" and "enabled".
	 * @property props
	 * @type Object
	 */
	this.props = ailProps || {};
};

YAHOO.lang.extend(YAHOO.util.ImageLoader.pngBgImgObj, YAHOO.util.ImageLoader.imgObj);

/**
 * Inserts the image URL into the DOM so that the image is displayed.
 * If the browser is determined to be IE6 (or older), sets the AlphaImageLoader src; otherwise sets style.backgroundImage
 * @method _applyUrl
 * @param {Object}	el	HTML DOM element
 * @private
 */
YAHOO.util.ImageLoader.pngBgImgObj.prototype._applyUrl = function(el) {
	if (YAHOO.env.ua.ie && YAHOO.env.ua.ie <= 6) {
		var sizingMethod = (YAHOO.lang.isUndefined(this.props.sizingMethod)) ? 'scale' : this.props.sizingMethod;
		var enabled = (YAHOO.lang.isUndefined(this.props.enabled)) ? 'true' : this.props.enabled;
		el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + this.url + '", sizingMethod="' + sizingMethod + '", enabled="' + enabled + '")';
	}
	else {
		el.style.backgroundImage = "url('" + this.url + "')";
	}
};
YAHOO.register("imageloader", YAHOO.util.ImageLoader, {version: "2.8.2r1", build: "7"});

// Load an image.
function doLoad() {
  var img = new YAHOO.util.ImageLoader.srcImgObj('image', 'http://www.blackoutjack.com/pics/TweekGhost.jpg');
  img.fetch()
}
setTimeout(doLoad, 1000);
