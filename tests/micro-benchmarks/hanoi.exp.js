// hanoi.js
function Stack() {
  function v2() {
    var str$$6 = this.discs.join(",");
    return str$$6
  }
  function v1() {
    var ret = this.discs.pop();
    if(ret === Infinity) {
      console.log("Attempting to pop the base");
      var v5 = this.discs;
      JAM.call(v5.push, v5, [ret]);
      return false
    }
    return ret
  }
  function v0(disc) {
    if(typeof disc != "number") {
      console.log("Invalid disc type: " + disc);
      return false
    }
    var v24 = disc === NaN;
    if(!v24) {
      var v28 = disc === Infinity;
      if(!v28) {
        v28 = disc === -Infinity
      }
      v24 = v28
    }
    if(v24) {
      console.log("Invalid disc number: " + disc);
      return false
    }
    if(disc > this.discs[this.discs.length - 1]) {
      console.log("Invalid disc ordering: " + disc + " > " + this.discs[this.discs.length - 1]);
      return false
    }
    var v13 = this.discs;
    JAM.call(v13.push, v13, [disc]);
    return true
  }
  this.discs = [Infinity];
  this.push = v0;
  this.pop = v1;
  this.toString = v2;
  return
}
function move(n$$1, from, to, using) {
  var ok = true;
  if(n$$1 == 0) {
    return ok
  }
  ok = move(n$$1 - 1, from, using, to);
  if(!ok) {
    return false
  }
  var d = from.pop();
  if(d === false) {
    return false
  }
  JAM.call(to.push, to, [d]);
  ok = move(n$$1 - 1, using, to, from);
  return ok
}
var initialStack = new Stack;
var targetStack = new Stack;
var auxStack = new Stack;
var num = 20;
var i = num;
var v19 = i > 0;
for(;v19;) {
  JAM.call(initialStack.push, initialStack, [i]);
  i = i - 1;
  v19 = i > 0
}
var done = move(num, initialStack, targetStack, auxStack);
alert("Initial: " + initialStack);
alert("Aux: " + auxStack);
alert("Target: " + targetStack)
