/*
 * Copyright 2008 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for W3C's CSS specification
 *  The whole file has been fully type annotated.
 *  http://www.w3.org/TR/DOM-Level-2-Style/css.html
 * @externs
 *
 * TODO(nicksantos): When there are no more occurrences of w3c_range.js and
 * gecko_dom.js being included directly in BUILD files, bug dbeam to split the
 * bottom part of this file into a separate externs.
 */

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet
 */
function StyleSheet() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-type
 */
StyleSheet.prototype.type;

/**
 * @type {boolean}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-disabled
 */
StyleSheet.prototype.disabled;

/**
 * @type {Node}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-owner
 */
StyleSheet.prototype.ownerNode;

/**
 * @type {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet
 */
StyleSheet.prototype.parentStyleSheet;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-href
 */
StyleSheet.prototype.href;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-title
 */
StyleSheet.prototype.title;

/**
 * @type {MediaList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-media
 */
StyleSheet.prototype.media;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList
 */
function StyleSheetList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList-length
 */
StyleSheetList.prototype.length;

/**
 * @param {number} index
 * @return {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList-item
 */
StyleSheetList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList
 */
function MediaList() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList-mediaText
 */
MediaList.prototype.mediaText;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList-length
 */
MediaList.prototype.length;

/**
 * @param {number} index
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList-item
 */
MediaList.prototype.item = function(index) {};

/**
 * @interface
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-LinkStyle
 */
function LinkStyle() {}

/**
 * @type {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-LinkStyle-sheet
 */
LinkStyle.prototype.sheet;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-DocumentStyle
 */
function DocumentStyle() {}

/**
 * @type {StyleSheetList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-DocumentStyle-styleSheets
 */
DocumentStyle.prototype.styleSheets;

/**
 * @constructor
 * @extends {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
 */
function CSSStyleSheet() {}

/**
 * @type {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-ownerRule
 */
CSSStyleSheet.prototype.ownerRule;

/**
 * @type {CSSRuleList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-cssRules
 */
CSSStyleSheet.prototype.cssRules;

/**
 * @param {string} rule
 * @param {number} index
 * @return {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
 */
CSSStyleSheet.prototype.insertRule = function(rule, index) {};

/**
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
 */
CSSStyleSheet.prototype.deleteRule = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList
 */
function CSSRuleList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList-length
 */
CSSRuleList.prototype.length;

/**
 * @param {number} index
 * @return {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList-item
 */
CSSRuleList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
 */
function CSSRule() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.prototype.type;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-cssText
 */
CSSRule.prototype.cssText;

/**
 * @type {CSSStyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-sheet
 */
CSSRule.prototype.parentStyleSheet;

/**
 * @type {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-parentRule
 */
CSSRule.prototype.parentRule;

/**
 * Indicates that the rule is a {@see CSSUnknownRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.UNKNOWN_RULE = 0;

/**
 * Indicates that the rule is a {@see CSSStyleRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.STYLE_RULE = 1;

/**
 * Indicates that the rule is a {@see CSSCharsetRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.CHARSET_RULE = 2;

/**
 * Indicates that the rule is a {@see CSSImportRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.IMPORT_RULE = 3;

/**
 * Indicates that the rule is a {@see CSSMediaRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.MEDIA_RULE = 4;

/**
 * Indicates that the rule is a {@see CSSFontFaceRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.FONT_FACE_RULE = 5;

/**
 * Indicates that the rule is a {@see CSSPageRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.PAGE_RULE = 6;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
 */
function CSSStyleRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-selectorText
 */
CSSStyleRule.prototype.selectorText;

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-style
 */
CSSStyleRule.prototype.style;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
 */
function CSSMediaRule() {}

/**
 * @type {MediaList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-mediaTypes
 */
CSSMediaRule.prototype.media;

/**
 * @type {CSSRuleList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-cssRules
 */
CSSMediaRule.prototype.cssRules;

/**
 * @param {string} rule
 * @param {number} index
 * @return {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-insertRule
 */
CSSMediaRule.prototype.insertRule = function(rule, index) {};

/**
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-deleteRule
 */
CSSMediaRule.prototype.deleteRule = function(index) {};

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSFontFaceRule
 */
function CSSFontFaceRule() {}

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSFontFaceRule-style
 */
CSSFontFaceRule.prototype.style;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPageRule
 */
function CSSPageRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPageRule-name
 */
CSSPageRule.prototype.selectorText;

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPageRule-style
 */
CSSPageRule.prototype.style;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
 */
function CSSImportRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule-href
 */
CSSImportRule.prototype.href;

/**
 * @type {MediaList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule-media
 */
CSSImportRule.prototype.media;

/**
 * @type {CSSStyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule-styleSheet
 */
CSSImportRule.prototype.styleSheet;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSCharsetRule
 */
function CSSCharsetRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSCharsetRule-encoding
 */
CSSCharsetRule.prototype.encoding;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSUnknownRule
 */
function CSSUnknownRule() {}

/**
 * @constructor
 * @extends {CSSProperties}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 */
function CSSStyleDeclaration() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-cssText
 */
CSSStyleDeclaration.prototype.cssText;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-length
 */
CSSStyleDeclaration.prototype.length;

/**
 * @type {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-parentRule
 */
CSSStyleDeclaration.prototype.parentRule;

/**
 * @param {string} propertyName
 * @return {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyCSSValue
 */
CSSStyleDeclaration.prototype.getPropertyCSSValue = function(propertyName) {};

/**
 * @param {string} propertyName
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyPriority
 */
CSSStyleDeclaration.prototype.getPropertyPriority = function(propertyName) {};

/**
 * @param {string} propertyName
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
 */
CSSStyleDeclaration.prototype.getPropertyValue = function(propertyName) {};

/**
 * @param {number} index
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-item
 */
CSSStyleDeclaration.prototype.item = function(index) {};

/**
 * @param {string} propertyName
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
 */
CSSStyleDeclaration.prototype.removeProperty = function(propertyName) {};

/**
 * @param {string} propertyName
 * @param {string} value
 * @param {string=} opt_priority
 * @return {undefined}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
 */
CSSStyleDeclaration.prototype.setProperty = function(propertyName, value, opt_priority) {};

// IE-specific

/**
 * @param {string} name
 * @param {number=} opt_flags
 * @return {string|number|boolean|null}
 * @see http://msdn.microsoft.com/en-us/library/ms536429(VS.85).aspx
 */
// Doesn't exist in Firefox 17.0.5esr.
//CSSStyleDeclaration.prototype.getAttribute = function(name, opt_flags) {};

/**
 * @param {string} name
 * @return {string|number|boolean|null}
 * @see http://msdn.microsoft.com/en-us/library/aa358797(VS.85).aspx
 */
CSSStyleDeclaration.prototype.getExpression = function(name) {};

/**
 * @param {string} name
 * @param {number=} opt_flags
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms536696(VS.85).aspx
 */
//CSSStyleDeclaration.prototype.removeAttribute =
//    function(name, opt_flags) {};

/**
 * @param {string} name
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/aa358798(VS.85).aspx
 */
CSSStyleDeclaration.prototype.removeExpression = function(name) {};

/**
 * @param {string} name
 * @param {*} value
 * @param {number=} opt_flags
 * @see http://msdn.microsoft.com/en-us/library/ms536739(VS.85).aspx
 */
// Doesn't exist in Firefox 17.0.5esr.
//CSSStyleDeclaration.prototype.setAttribute = function(name, value, opt_flags) {};

/**
 * @param {string} name
 * @param {string} expr
 * @param {string=} opt_language
 * @return {undefined}
 * @see http://msdn.microsoft.com/en-us/library/ms531196(VS.85).aspx
 */
CSSStyleDeclaration.prototype.setExpression =
    function(name, expr, opt_language) {};


/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
 */
function CSSValue() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-cssText
 */
CSSValue.prototype.cssText;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-cssValueType
 */
CSSValue.prototype.cssValueType;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_INHERIT = 0;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_PRIMITIVE_VALUE = 1;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_VALUE_LIST = 2;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_CUSTOM = 3;

/**
 * @constructor
 * @extends {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
function CSSPrimitiveValue() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.prototype.primitiveType;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_UNKNOWN = 0;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_NUMBER = 1;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PERCENTAGE = 2;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_EMS = 3;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_EXS = 4;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PX = 5;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_CM = 6;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_MM = 7;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_IN = 8;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PT = 9;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PC = 10;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_DEG = 11;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_RAD = 12;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_GRAD = 13;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_MS = 14;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_S = 15;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_HZ = 16;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_KHZ = 17;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_DIMENSION = 18;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_STRING = 19;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_URI = 20;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_IDENT = 21;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_ATTR = 22;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_COUNTER = 23;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_RECT = 24;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_RGBCOLOR = 25;

/**
 * @return {Counter}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getCounterValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getCounterValue = function() {};

/**
 * @param {number} unitType
 * @return {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getFloatValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getFloatValue = function(unitType) {};

/**
 * @return {RGBColor}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getRGBColorValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getRGBColorValue = function() {};

/**
 * @return {Rect}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getRectValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getRectValue = function() {};

/**
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getStringValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getStringValue = function() {};

/**
 * @param {number} unitType
 * @param {number} floatValue
 * @return {undefined}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-setFloatValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR},
 *                      {@see DomException.NO_MODIFICATION_ALLOWED_ERR}
 */
CSSPrimitiveValue.prototype.setFloatValue = function(unitType, floatValue) {};

/**
 * @param {number} stringType
 * @param {string} stringValue
 * @return {undefined}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-setStringValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR},
 *                      {@see DomException.NO_MODIFICATION_ALLOWED_ERR}
 */
CSSPrimitiveValue.prototype.setStringValue = function(stringType, stringValue) {};

/**
 * @constructor
 * @extends {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValueList
 */
function CSSValueList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValueList-length
 */
CSSValueList.prototype.length;

/**
 * @param {number} index
 * @return {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValueList-item
 */
CSSValueList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor
 */
function RGBColor() {}

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor-red
 */
RGBColor.prototype.red;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor-green
 */
RGBColor.prototype.green;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor-blue
 */
RGBColor.prototype.blue;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect
 */
function Rect() {}

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-top
 */
Rect.prototype.top;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-right
 */
Rect.prototype.right;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-bottom
 */
Rect.prototype.bottom;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-left
 */
Rect.prototype.left;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter
 */
function Counter() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter-identifier
 */
Counter.prototype.identifier;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter-listStyle
 */
Counter.prototype.listStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter-separator
 */
Counter.prototype.separator;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ViewCSS
 */
// Doesn't exist in Firefox 17.0.5esr.
//function ViewCSS() {}

/**
 * @param {Element} elt
 * @param {?string} pseudoElt
 * @return {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle
 */
//ViewCSS.prototype.getComputedStyle = function(elt, pseudoElt) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DocumentCSS
 */
function DocumentCSS() {}

/**
 * @param {Element} elt
 * @param {string} pseudoElt
 * @return {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DocumentCSS-getOverrideStyle
 */
DocumentCSS.prototype.getOverrideStyle = function(elt, pseudoElt) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DOMImplementationCSS
 */
function DOMImplementationCSS() {}

/**
 * @param {string} title
 * @param {string} media
 * @return {CSSStyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DOMImplementationCSS-createCSSStyleSheet
 * @throws DOMException {@see DomException.SYNTAX_ERR}
 */
DOMImplementationCSS.prototype.createCSSStyleSheet = function(title, media) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle
 */
function ElementCSSInlineStyle() {}

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle-style
 */
ElementCSSInlineStyle.prototype.style;


/**
 * TODO(dbeam): Put this in separate file named w3c_cssom.js.
 * Externs for the CSSOM View Module.
 * @see http://www.w3.org/TR/cssom-view/
 */

// http://www.w3.org/TR/cssom-view/#extensions-to-the-window-interface

/**
 * @param {string} media_query_list
 * @return {MediaQueryList}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-matchmedia
 */
Window.prototype.matchMedia = function(media_query_list) {};

/**
 * @type {Screen}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-screen
 */
Window.prototype.screen;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-innerwidth
 */
Window.prototype.innerWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-innerheight
 */
Window.prototype.innerHeight;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrollx
 */
Window.prototype.scrollX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-pagexoffset
 */
Window.prototype.pageXOffset;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrolly
 */
Window.prototype.scrollY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-pageyoffset
 */
Window.prototype.pageYOffset;

/**
 * @param {number} x
 * @param {number} y
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scroll
 */
Window.prototype.scroll = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrollto
 */
Window.prototype.scrollTo = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrollby
 */
Window.prototype.scrollBy = function(x, y) {};

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-screenx
 */
Window.prototype.screenX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-screeny
 */
Window.prototype.screenY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-outerwidth
 */
Window.prototype.outerWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-outerheight
 */
Window.prototype.outerHeight;

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#mediaquerylist
 */
function MediaQueryList() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-media
 */
MediaQueryList.prototype.media;

/**
 * @type {boolean}
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-matches
 */
MediaQueryList.prototype.matches;

/**
 * @param {MediaQueryListListener} listener
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-addlistener
 */
MediaQueryList.prototype.addListener = function(listener) {};

/**
 * @param {MediaQueryListListener} listener
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-removelistener
 */
MediaQueryList.prototype.removeListener = function(listener) {};

/**
 * @typedef {(function(!MediaQueryList) : void)}
 * @see http://www.w3.org/TR/cssom-view/#mediaquerylistlistener
 */
var MediaQueryListListener;

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#screen
 */
function Screen() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-availwidth
 */
Screen.prototype.availWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-availheight
 */
Screen.prototype.availHeight;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-width
 */
Screen.prototype.width;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-height
 */
Screen.prototype.height;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-colordepth
 */
Screen.prototype.colorDepth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-pixeldepth
 */
Screen.prototype.pixelDepth;


// http://www.w3.org/TR/cssom-view/#extensions-to-the-document-interface

/**
 * @param {number} x
 * @param {number} y
 * @return {?Element}
 * @see http://www.w3.org/TR/cssom-view/#dom-document-elementfrompoint
 */
Document.prototype.elementFromPoint = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {CaretPosition}
 * @see http://www.w3.org/TR/cssom-view/#dom-document-caretpositionfrompoint
 */
Document.prototype.caretPositionFromPoint = function(x, y) {};


/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#caretposition
 */
function CaretPosition() {}

/**
 * @type {Node}
 * @see http://www.w3.org/TR/cssom-view/#dom-caretposition-offsetnode
 */
CaretPosition.prototype.offsetNode;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-caretposition-offset
 */
CaretPosition.prototype.offset;


// http://www.w3.org/TR/cssom-view/#extensions-to-the-element-interface

/**
 * @return {ClientRectList}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-getclientrects
 */
Element.prototype.getClientRects = function() {};

/**
 * @return {ClientRect}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-getboundingclientrect
 */
Element.prototype.getBoundingClientRect = function() {};

/**
 * @param {boolean=} opt_top
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollintoview
 */
Element.prototype.scrollIntoView = function(opt_top) {};

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrolltop
 */
Element.prototype.scrollTop;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollleft
 */
Element.prototype.scrollLeft;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollwidth
 */
Element.prototype.scrollWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollheight
 */
Element.prototype.scrollHeight;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clienttop
 */
Element.prototype.clientTop;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clientleft
 */
Element.prototype.clientLeft;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clientwidth
 */
Element.prototype.clientWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clientheight
 */
Element.prototype.clientHeight;

// http://www.w3.org/TR/cssom-view/#extensions-to-the-htmlelement-interface

/**
 * @type {Element}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetparent
 */
HTMLElement.prototype.offsetParent;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsettop
 */
HTMLElement.prototype.offsetTop;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetleft
 */
HTMLElement.prototype.offsetLeft;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetwidth
 */
HTMLElement.prototype.offsetWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetheight
 */
HTMLElement.prototype.offsetHeight;


// http://www.w3.org/TR/cssom-view/#extensions-to-the-range-interface

/**
 * @return {ClientRectList}
 * @see http://www.w3.org/TR/cssom-view/#dom-range-getclientrects
 */
Range.prototype.getClientRects = function() {};

/**
 * @return {ClientRect}
 * @see http://www.w3.org/TR/cssom-view/#dom-range-getboundingclientrect
 */
Range.prototype.getBoundingClientRect = function() {};


// http://www.w3.org/TR/cssom-view/#extensions-to-the-mouseevent-interface

// MouseEvent: screen{X,Y} and client{X,Y} are in DOM Level 2/3 Event as well,
// so it seems like a specification issue. I've emailed www-style@w3.org in
// hopes of resolving the conflict, but in the mean time they can live here
// (http://lists.w3.org/Archives/Public/www-style/2012May/0039.html).

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-screenx
 */
//MouseEvent.prototype.screenX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-screeny
 */
//MouseEvent.prototype.screenY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-pagex
 */
MouseEvent.prototype.pageX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-pagey
 */
MouseEvent.prototype.pageY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-clientx
 */
//MouseEvent.prototype.clientX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-clienty
 */
//MouseEvent.prototype.clientY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-x
 */
MouseEvent.prototype.x;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-y
 */
MouseEvent.prototype.y;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-offsetx
 */
MouseEvent.prototype.offsetX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-offsety
 */
MouseEvent.prototype.offsetY;


// http://www.w3.org/TR/cssom-view/#rectangles

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#the-clientrectlist-interface
 */
function ClientRectList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrectlist-length
 */
ClientRectList.prototype.length;

/**
 * @param {number} index
 * @return {ClientRect}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrectlist-item
 */
ClientRectList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#the-clientrect-interface
 */
function ClientRect() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-top
 */
ClientRect.prototype.top;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-right
 */
ClientRect.prototype.right;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-bottom
 */
ClientRect.prototype.bottom;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-left
 */
ClientRect.prototype.left;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-width
 */
ClientRect.prototype.width;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-height
 */
ClientRect.prototype.height;
