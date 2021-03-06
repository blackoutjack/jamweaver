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
 * @fileoverview Definitions for W3C's event specification.
 *  The whole file has been fully type annotated.
 *  Created from
 *   http://www.w3.org/TR/DOM-Level-2-Events/ecma-script-binding.html
 *
 * @externs
 */


/**
 * @interface
 */
function EventTarget() {}

/**
 * @param {string} type
 * @param {EventListener|function(Event):(boolean|undefined)} listener
 * @param {boolean} useCapture
 * @return {undefined}
 */
EventTarget.prototype.addEventListener = function(type, listener, useCapture) {};

/**
 * @param {string} type
 * @param {EventListener|function(Event):(boolean|undefined)} listener
 * @param {boolean} useCapture
 * @return {undefined}
 */
EventTarget.prototype.removeEventListener = function(type, listener, useCapture) {};

/**
 * @param {Event} evt
 * @return {boolean}
 */
EventTarget.prototype.dispatchEvent = function(evt) {};

/**
 * @interface
 */
function EventListener() {}

/**
 * @param {Event} evt
 * @return {undefined}
 */
EventListener.prototype.handleEvent = function(evt) {};

/**
 * @constructor
 */
function Event() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Events/ecma-script-binding.html
 */
Event.AT_TARGET;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Events/ecma-script-binding.html
 */
Event.BUBBLING_PHASE;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Events/ecma-script-binding.html
 */
Event.CAPTURING_PHASE;


/** @type {string} */
Event.prototype.type;

/** @type {EventTarget} */
Event.prototype.target;

/** @type {EventTarget} */
Event.prototype.currentTarget;

/** @type {number} */
Event.prototype.eventPhase;

/** @type {boolean} */
Event.prototype.bubbles;

/** @type {boolean} */
Event.prototype.cancelable;

/** @type {number} */
Event.prototype.timeStamp;

/** @type {Object} */
Event.prototype.state;

/**
 * @return {undefined}
 */
Event.prototype.stopPropagation = function() {};

/**
 * @return {undefined}
 */
Event.prototype.preventDefault = function() {};

/**
 * @param {string} eventTypeArg
 * @param {boolean} canBubbleArg
 * @param {boolean} cancelableArg
 * @return {undefined}
 */
Event.prototype.initEvent = function(eventTypeArg, canBubbleArg, cancelableArg) {};

/**
 * @param {string} eventType
 * @param {Object=} opt_details
 * @constructor
 * @extends {Event}
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent
 */
function CustomEvent(eventType, opt_details) {}

/**
 * @param {string} eventType
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @param {*} detail
 */
CustomEvent.prototype.initCustomEvent = function(
    eventType, bubbles, cancelable, detail) {};

/**
 * @type {*}
 */
CustomEvent.prototype.detail;

/**
 * @constructor
 */
// Doesn't exist in Firefox 17.0.5esr.
//function DocumentEvent() {}

/**
 * @param {string} eventType
 * @return {Event}
 */
//DocumentEvent.prototype.createEvent = function(eventType) {};

/**
 * @constructor
 * @extends {Event}
 */
function UIEvent() {}

/** @type {number} */
UIEvent.prototype.detail;

///**
// * @param {string} typeArg
// * @param {boolean} canBubbleArg
// * @param {boolean} cancelableArg
// * @param {AbstractView} viewArg
// * @param {number} detailArg
// * @return undefined
// */
//UIEvent.prototype.initUIEvent = function (typeArg, canBubbleArg, cancelableArg, viewArg, detailArg) {};

/**
 * @constructor
 * @extends {UIEvent}
 */
function MouseEvent() {}

/** @type {number} */
MouseEvent.prototype.screenX;

/** @type {number} */
MouseEvent.prototype.screenY;

/** @type {number} */
MouseEvent.prototype.clientX;

/** @type {number} */
MouseEvent.prototype.clientY;

/** @type {boolean} */
MouseEvent.prototype.ctrlKey;

/** @type {boolean} */
MouseEvent.prototype.shiftKey;

/** @type {boolean} */
MouseEvent.prototype.altKey;

/** @type {boolean} */
MouseEvent.prototype.metaKey;

/** @type {number} */
MouseEvent.prototype.button;

/** @type {EventTarget} */
MouseEvent.prototype.relatedTarget;


/**
 * @constructor
 * @extends {Event}
 */
function MutationEvent() {}

/** @type {Node} */
MutationEvent.prototype.relatedNode;

/** @type {string} */
MutationEvent.prototype.prevValue;

/** @type {string} */
MutationEvent.prototype.newValue;

/** @type {string} */
MutationEvent.prototype.attrName;

/** @type {number} */
MutationEvent.prototype.attrChange;

/**
 * @param {string} typeArg
 * @param {boolean} canBubbleArg
 * @param {boolean} cancelableArg
 * @param {Node} relatedNodeArg
 * @param {string} prevValueArg
 * @param {string} newValueArg
 * @param {string} attrNameArg
 * @param {number} attrChangeArg
 * @return {undefined}
 */
MutationEvent.prototype.initMutationEvent = function(typeArg, canBubbleArg, cancelableArg, relatedNodeArg, prevValueArg, newValueArg, attrNameArg, attrChangeArg) {};


// DOM3
/**
 * @constructor
 * @extends {UIEvent}
 */
function KeyboardEvent() {}

/** @type {string} */
KeyboardEvent.prototype.keyIdentifier;

/** @type {boolean} */
KeyboardEvent.prototype.ctrlKey;

/** @type {boolean} */
KeyboardEvent.prototype.shiftKey;

/** @type {boolean} */
KeyboardEvent.prototype.altKey;

/** @type {boolean} */
KeyboardEvent.prototype.metaKey;

/**
 * @param {string} keyIdentifierArg
 * @return {boolean}
 */
KeyboardEvent.prototype.getModifierState = function(keyIdentifierArg) {};
