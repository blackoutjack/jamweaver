function Stack() {
  function v2() {
    var v3 = this.discs;
    var str$$6 = v3.join(",");
    return str$$6
  }
  function v1() {
    var v4 = this.discs;
    var ret = JAMScript.call(v4.pop, v4, []);
    var v6 = ret === Infinity;
    if(v6) {
      console.log("Attempting to pop the base");
      var v5 = this.discs;
      JAMScript.call(v5.push, v5, [ret]);
      return false
    }
    return ret
  }
  function v0(disc) {
    var v23 = typeof disc;
    var v8 = v23 != "number";
    if(v8) {
      var v7 = "Invalid disc type: " + disc;
      console.log(v7);
      return false
    }
    var v24 = disc === NaN;
    var v29 = !v24;
    if(v29) {
      var v28 = disc === Infinity;
      var v36 = !v28;
      if(v36) {
        var v35 = -Infinity;
        v28 = disc === v35
      }
      v24 = v28
    }
    var v10 = v24;
    if(v10) {
      var v9 = "Invalid disc number: " + disc;
      console.log(v9);
      return false
    }
    var v30 = this.discs;
    var v39 = this.discs;
    var v37 = v39.length;
    var v31 = v37 - 1;
    var v25 = v30[v31];
    var v12 = disc > v25;
    if(v12) {
      var v32 = "Invalid disc ordering: " + disc;
      var v26 = v32 + " > ";
      var v33 = this.discs;
      var v40 = this.discs;
      var v38 = v40.length;
      var v34 = v38 - 1;
      var v27 = v33[v34];
      var v11 = v26 + v27;
      console.log(v11);
      return false
    }
    var v13 = this.discs;
    JAMScript.call(v13.push, v13, [disc]);
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
  var v14 = n$$1 == 0;
  if(v14) {
    return ok
  }
  var v15 = n$$1 - 1;
  ok = move(v15, from, using, to);
  var v16 = !ok;
  if(v16) {
    return false
  }
  var d = JAMScript.call(from.pop, from, []);
  var v17 = d === false;
  if(v17) {
    return false
  }
  JAMScript.call(to.push, to, [d]);
  var v18 = n$$1 - 1;
  ok = move(v18, using, to, from);
  return ok
}
var initialStack = new Stack;
var targetStack = new Stack;
var auxStack = new Stack;
var num = 20;
var i = num;
var v19 = i > 0;
for(;v19;) {
  JAMScript.call(initialStack.push, initialStack, [i]);
  i = i - 1;
  v19 = i > 0
}
var done = move(num, initialStack, targetStack, auxStack);
var v20 = "Initial: " + initialStack;
alert(v20);
var v21 = "Aux: " + auxStack;
alert(v21);
var v22 = "Target: " + targetStack;
alert(v22);

