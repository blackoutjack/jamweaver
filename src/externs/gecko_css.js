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
 * @fileoverview Definitions for Gecko's custom CSS properties. Copied from:
 * http://mxr.mozilla.org/mozilla2.0/source/dom/interfaces/css/nsIDOMCSS2Properties.idl
 *
 * @externs
 * @author nicksantos@google.com (Nick Santos)
 */


// These are non-standard Gecko CSSOM properties on Window.prototype.screen.

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.availTop
 */
Screen.prototype.availTop;

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.availLeft
 */
Screen.prototype.availLeft;

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.left
 */
Screen.prototype.left;

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.top
 */
Screen.prototype.top;
