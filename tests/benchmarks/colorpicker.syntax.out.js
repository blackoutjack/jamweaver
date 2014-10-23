// colorpicker.js
function v485() {
  var v486 = JAM.call($, null, ["#red, #green, #blue"]);
  JAM.call(v486.slider, v486, [{orientation:"horizontal", range:"min", max:255, value:127, slide:refreshSwatch, change:refreshSwatch}]);
  var v488 = JAM.call($, null, ["#red"]);
  JAM.call(v488.slider, v488, ["value", 255]);
  var v489 = JAM.call($, null, ["#green"]);
  JAM.call(v489.slider, v489, ["value", 140]);
  var v490 = JAM.call($, null, ["#blue"]);
  JAM.call(v490.slider, v490, ["value", 60]);
  return;
}
function v484($$$4, undefined$$5) {
  function v483(event$$35) {
    var v491 = JAM.call($$$4, null, [event$$35.target]);
    var index$$48 = JAM.call(v491.data, v491, ["ui-slider-handle-index"]);
    if (this._keySliding) {
      this._keySliding = false;
      JAM.call(this._stop, this, [event$$35, index$$48]);
      JAM.call(this._change, this, [event$$35, index$$48]);
      var v492 = JAM.call($$$4, null, [event$$35.target]);
      JAM.call(v492.removeClass, v492, ["ui-state-active"]);
    }
    return;
  }
  function v482(event$$34) {
    event$$34.preventDefault();
    return;
  }
  function v481(event$$33) {
    var allowed$$2;
    var curVal;
    var newVal$$1;
    var step$$1;
    var v494 = JAM.call($$$4, null, [event$$33.target]);
    var index$$47 = JAM.call(v494.data, v494, ["ui-slider-handle-index"]);
    switch(event$$33.keyCode) {
      case $$$4.ui.keyCode.HOME:
      ;
      case $$$4.ui.keyCode.END:
      ;
      case $$$4.ui.keyCode.PAGE_UP:
      ;
      case $$$4.ui.keyCode.PAGE_DOWN:
      ;
      case $$$4.ui.keyCode.UP:
      ;
      case $$$4.ui.keyCode.RIGHT:
      ;
      case $$$4.ui.keyCode.DOWN:
      ;
      case $$$4.ui.keyCode.LEFT:
        event$$33.preventDefault();
        if (!this._keySliding) {
          this._keySliding = true;
          var v495 = JAM.call($$$4, null, [event$$33.target]);
          JAM.call(v495.addClass, v495, ["ui-state-active"]);
          allowed$$2 = JAM.call(this._start, this, [event$$33, index$$47]);
          if (allowed$$2 === false) {
            return;
          }
        }
      ;
    }
    step$$1 = this.options.step;
    var v2497 = this.options.values;
    if (v2497) {
      v2497 = this.options.values.length;
    }
    if (v2497) {
      curVal = newVal$$1 = JAM.call(this.values, this, [index$$47]);
    } else {
      curVal = newVal$$1 = this.value();
    }
    switch(event$$33.keyCode) {
      case $$$4.ui.keyCode.HOME:
        newVal$$1 = this.options.min;
        break;
      case $$$4.ui.keyCode.END:
        newVal$$1 = this.options.max;
        break;
      case $$$4.ui.keyCode.PAGE_UP:
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal + (this.options.max - this.options.min) / numPages]);
        break;
      case $$$4.ui.keyCode.PAGE_DOWN:
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal - (this.options.max - this.options.min) / numPages]);
        break;
      case $$$4.ui.keyCode.UP:
      ;
      case $$$4.ui.keyCode.RIGHT:
        if (curVal === this.options.max) {
          return;
        }
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal + step$$1]);
        break;
      case $$$4.ui.keyCode.DOWN:
      ;
      case $$$4.ui.keyCode.LEFT:
        if (curVal === this.options.min) {
          return;
        }
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal - step$$1]);
    }
    JAM.call(this._slide, this, [event$$33, index$$47, newVal$$1]);
    return;
  }
  function v480() {
    function v479(i$$110) {
      valPercent = (JAM.call(that$$3.values, that$$3, [i$$110]) - that$$3.options.min) / (that$$3.options.max - that$$3.options.min) * 100;
      var v2504;
      if (that$$3.orientation === "horizontal") {
        v2504 = "left";
      } else {
        v2504 = "bottom";
      }
      JAM.set(_set, v2504, valPercent + "%", JAM.policy.p3);
      var v2505 = JAM.call($$$4, null, [this]);
      var v512 = JAM.call(v2505.stop, v2505, [1, 1]);
      var v2506;
      if (animate) {
        v2506 = "animate";
      } else {
        v2506 = "css";
      }
      JAM.call(JAM.get(v512, v2506, JAM.policy.p4), v512, [_set, o$$2.animate]);
      if (that$$3.options.range === true) {
        if (that$$3.orientation === "horizontal") {
          if (i$$110 === 0) {
            var v2509 = that$$3.range;
            var v515 = JAM.call(v2509.stop, v2509, [1, 1]);
            var v2510;
            if (animate) {
              v2510 = "animate";
            } else {
              v2510 = "css";
            }
            JAM.call(JAM.get(v515, v2510, JAM.policy.p4), v515, [{left:valPercent + "%"}, o$$2.animate]);
          }
          if (i$$110 === 1) {
            var v520 = that$$3.range;
            var v2512;
            if (animate) {
              v2512 = "animate";
            } else {
              v2512 = "css";
            }
            JAM.call(JAM.get(v520, v2512, JAM.policy.p4), v520, [{width:valPercent - lastValPercent + "%"}, {queue:false, duration:o$$2.animate}]);
          }
        } else {
          if (i$$110 === 0) {
            var v2515 = that$$3.range;
            var v525 = JAM.call(v2515.stop, v2515, [1, 1]);
            var v2516;
            if (animate) {
              v2516 = "animate";
            } else {
              v2516 = "css";
            }
            JAM.call(JAM.get(v525, v2516, JAM.policy.p4), v525, [{bottom:valPercent + "%"}, o$$2.animate]);
          }
          if (i$$110 === 1) {
            var v530 = that$$3.range;
            var v2518;
            if (animate) {
              v2518 = "animate";
            } else {
              v2518 = "css";
            }
            JAM.call(JAM.get(v530, v2518, JAM.policy.p4), v530, [{height:valPercent - lastValPercent + "%"}, {queue:false, duration:o$$2.animate}]);
          }
        }
      }
      lastValPercent = valPercent;
      return;
    }
    var lastValPercent;
    var valPercent;
    var value$$51;
    var valueMin;
    var valueMax;
    var oRange = this.options.range;
    var o$$2 = this.options;
    var that$$3 = this;
    var v538;
    if (!this._animateOff) {
      v538 = o$$2.animate;
    } else {
      v538 = false;
    }
    var animate = v538;
    var _set = {};
    var v2522 = this.options.values;
    if (v2522) {
      v2522 = this.options.values.length;
    }
    if (v2522) {
      var v539 = this.handles;
      JAM.call(v539.each, v539, [v479]);
    } else {
      value$$51 = this.value();
      valueMin = this.options.min;
      valueMax = this.options.max;
      var v542;
      if (valueMax !== valueMin) {
        v542 = (value$$51 - valueMin) / (valueMax - valueMin) * 100;
      } else {
        v542 = 0;
      }
      valPercent = v542;
      var v2525;
      if (this.orientation === "horizontal") {
        v2525 = "left";
      } else {
        v2525 = "bottom";
      }
      JAM.set(_set, v2525, valPercent + "%", JAM.policy.p3);
      var v2526 = this.handle;
      var v544 = JAM.call(v2526.stop, v2526, [1, 1]);
      var v2527;
      if (animate) {
        v2527 = "animate";
      } else {
        v2527 = "css";
      }
      JAM.call(JAM.get(v544, v2527, JAM.policy.p4), v544, [_set, o$$2.animate]);
      var v2528 = oRange === "min";
      if (v2528) {
        v2528 = this.orientation === "horizontal";
      }
      if (v2528) {
        var v2529 = this.range;
        var v547 = JAM.call(v2529.stop, v2529, [1, 1]);
        var v2530;
        if (animate) {
          v2530 = "animate";
        } else {
          v2530 = "css";
        }
        JAM.call(JAM.get(v547, v2530, JAM.policy.p4), v547, [{width:valPercent + "%"}, o$$2.animate]);
      }
      var v2532 = oRange === "max";
      if (v2532) {
        v2532 = this.orientation === "horizontal";
      }
      if (v2532) {
        var v552 = this.range;
        var v2533;
        if (animate) {
          v2533 = "animate";
        } else {
          v2533 = "css";
        }
        JAM.call(JAM.get(v552, v2533, JAM.policy.p4), v552, [{width:100 - valPercent + "%"}, {queue:false, duration:o$$2.animate}]);
      }
      var v2536 = oRange === "min";
      if (v2536) {
        v2536 = this.orientation === "vertical";
      }
      if (v2536) {
        var v2537 = this.range;
        var v557 = JAM.call(v2537.stop, v2537, [1, 1]);
        var v2538;
        if (animate) {
          v2538 = "animate";
        } else {
          v2538 = "css";
        }
        JAM.call(JAM.get(v557, v2538, JAM.policy.p4), v557, [{height:valPercent + "%"}, o$$2.animate]);
      }
      var v2540 = oRange === "max";
      if (v2540) {
        v2540 = this.orientation === "vertical";
      }
      if (v2540) {
        var v562 = this.range;
        var v2541;
        if (animate) {
          v2541 = "animate";
        } else {
          v2541 = "css";
        }
        JAM.call(JAM.get(v562, v2541, JAM.policy.p4), v562, [{height:100 - valPercent + "%"}, {queue:false, duration:o$$2.animate}]);
      }
    }
    return;
  }
  function v478() {
    return this.options.max;
  }
  function v477() {
    return this.options.min;
  }
  function v476(val$$10) {
    if (val$$10 <= this.options.min) {
      return this.options.min;
    }
    if (val$$10 >= this.options.max) {
      return this.options.max;
    }
    var v574;
    if (this.options.step > 0) {
      v574 = this.options.step;
    } else {
      v574 = 1;
    }
    var step = v574;
    var valModStep = (val$$10 - this.options.min) % step;
    var alignValue = val$$10 - valModStep;
    if (Math.abs(valModStep) * 2 >= step) {
      var v3840;
      if (valModStep > 0) {
        v3840 = step;
      } else {
        v3840 = -step;
      }
      alignValue = alignValue + v3840;
    }
    return parseFloat(alignValue.toFixed(5));
  }
  function v475(index$$46) {
    var val$$9;
    var vals$$1;
    var i$$109;
    if (arguments.length) {
      var v578 = this.options.values;
      introspect(JAM.policy.p4) {
        val$$9 = v578[index$$46];
      }
      val$$9 = JAM.call(this._trimAlignValue, this, [val$$9]);
      return val$$9;
    } else {
      var v2552 = this.options.values;
      if (v2552) {
        v2552 = this.options.values.length;
      }
      if (v2552) {
        vals$$1 = this.options.values.slice();
        i$$109 = 0;
        var v582 = i$$109 < vals$$1.length;
        for (;v582;) {
          var v580 = vals$$1;
          var v581 = i$$109;
          introspect(JAM.policy.p4) {
            var v2555 = vals$$1[i$$109]
          }
          var v5539 = JAM.call(this._trimAlignValue, this, [v2555]);
          introspect(JAM.policy.p3) {
            v580[v581] = v5539;
          }
          i$$109 = i$$109 + 1;
          v582 = i$$109 < vals$$1.length;
        }
        return vals$$1;
      } else {
        return[];
      }
    }
    return;
  }
  function v474() {
    var val$$8 = this.options.value;
    val$$8 = JAM.call(this._trimAlignValue, this, [val$$8]);
    return val$$8;
  }
  function v473(key$$26, value$$50) {
    var i$$108;
    var valsLength = 0;
    var v2557 = key$$26 === "range";
    if (v2557) {
      v2557 = this.options.range === true;
    }
    if (v2557) {
      if (value$$50 === "min") {
        var v586 = this.options;
        var v5540 = JAM.call(this._values, this, [0]);
        v586.value = v5540;
        this.options.values = null;
      } else {
        if (value$$50 === "max") {
          var v588 = this.options;
          var v5541 = JAM.call(this._values, this, [this.options.values.length - 1]);
          v588.value = v5541;
          this.options.values = null;
        }
      }
    }
    if (JAM.call($$$4.isArray, $$$4, [this.options.values])) {
      valsLength = this.options.values.length;
    }
    var v595 = $$$4.Widget.prototype._setOption;
    JAM.call(v595.apply, v595, [this, arguments]);
    switch(key$$26) {
      case "orientation":
        this._detectOrientation();
        var v2562 = this.element;
        var v596 = JAM.call(v2562.removeClass, v2562, ["ui-slider-horizontal ui-slider-vertical"]);
        JAM.call(v596.addClass, v596, ["ui-slider-" + this.orientation]);
        this._refreshValue();
        break;
      case "value":
        this._animateOff = true;
        this._refreshValue();
        JAM.call(this._change, this, [null, 0]);
        this._animateOff = false;
        break;
      case "values":
        this._animateOff = true;
        this._refreshValue();
        i$$108 = 0;
        var v598 = i$$108 < valsLength;
        for (;v598;) {
          JAM.call(this._change, this, [null, i$$108]);
          i$$108 = i$$108 + 1;
          v598 = i$$108 < valsLength;
        }
        this._animateOff = false;
        break;
      case "min":
      ;
      case "max":
        this._animateOff = true;
        this._refreshValue();
        this._animateOff = false;
        break;
      case "range":
        this._animateOff = true;
        this._refresh();
        this._animateOff = false;
    }
    return;
  }
  function v472(index$$45, newValue$$1) {
    var vals;
    var newValues$$1;
    var i$$107;
    if (arguments.length > 1) {
      var v599 = this.options.values;
      var v600 = index$$45;
      var v5542 = JAM.call(this._trimAlignValue, this, [newValue$$1]);
      JAM.set(v599, v600, v5542, JAM.policy.p3);
      this._refreshValue();
      JAM.call(this._change, this, [null, index$$45]);
      return;
    }
    if (arguments.length) {
      introspect(JAM.policy.p4) {
        var v2566 = arguments[0]
      }
      if (JAM.call($$$4.isArray, $$$4, [v2566])) {
        vals = this.options.values;
        introspect(JAM.policy.p4) {
          newValues$$1 = arguments[0];
        }
        i$$107 = 0;
        var v605 = i$$107 < vals.length;
        for (;v605;) {
          var v603 = vals;
          var v604 = i$$107;
          introspect(JAM.policy.p4) {
            var v2568 = newValues$$1[i$$107]
          }
          var v5543 = JAM.call(this._trimAlignValue, this, [v2568]);
          introspect(JAM.policy.p3) {
            v603[v604] = v5543;
          }
          JAM.call(this._change, this, [null, i$$107]);
          i$$107 = i$$107 + 1;
          v605 = i$$107 < vals.length;
        }
        this._refreshValue();
      } else {
        var v2570 = this.options.values;
        if (v2570) {
          v2570 = this.options.values.length;
        }
        if (v2570) {
          return JAM.call(this._values, this, [index$$45]);
        } else {
          return this.value();
        }
      }
    } else {
      return this._values();
    }
    return;
  }
  function v471(newValue) {
    if (arguments.length) {
      var v609 = this.options;
      var v5544 = JAM.call(this._trimAlignValue, this, [newValue]);
      v609.value = v5544;
      this._refreshValue();
      JAM.call(this._change, this, [null, 0]);
      return;
    }
    return this._value();
  }
  function v470(event$$32, index$$44) {
    var v2571 = !this._keySliding;
    if (v2571) {
      v2571 = !this._mouseSliding;
    }
    if (v2571) {
      var v2572 = this.handles;
      introspect(JAM.policy.p4) {
        var v611 = v2572[index$$44]
      }
      var uiHash$$2 = {handle:v611, value:this.value()};
      var v2573 = this.options.values;
      if (v2573) {
        v2573 = this.options.values.length;
      }
      if (v2573) {
        var v613 = uiHash$$2;
        var v5545 = JAM.call(this.values, this, [index$$44]);
        v613.value = v5545;
        var v614 = uiHash$$2;
        var v5546 = this.values();
        v614.values = v5546;
      }
      this._lastChangedValue = index$$44;
      JAM.call(this._trigger, this, ["change", event$$32, uiHash$$2]);
    }
    return;
  }
  function v469(event$$31, index$$43) {
    var v2574 = this.handles;
    introspect(JAM.policy.p4) {
      var v617 = v2574[index$$43]
    }
    var uiHash$$1 = {handle:v617, value:this.value()};
    var v2575 = this.options.values;
    if (v2575) {
      v2575 = this.options.values.length;
    }
    if (v2575) {
      var v619 = uiHash$$1;
      var v5547 = JAM.call(this.values, this, [index$$43]);
      v619.value = v5547;
      var v620 = uiHash$$1;
      var v5548 = this.values();
      v620.values = v5548;
    }
    JAM.call(this._trigger, this, ["stop", event$$31, uiHash$$1]);
    return;
  }
  function v468(event$$30, index$$42, newVal) {
    var otherVal;
    var newValues;
    var allowed$$1;
    var v2576 = this.options.values;
    if (v2576) {
      v2576 = this.options.values.length;
    }
    if (v2576) {
      var v2577;
      if (index$$42) {
        v2577 = 0;
      } else {
        v2577 = 1;
      }
      otherVal = JAM.call(this.values, this, [v2577]);
      var v3857 = this.options.values.length === 2;
      if (v3857) {
        v3857 = this.options.range === true;
      }
      var v2578 = v3857;
      if (v2578) {
        var v4716 = index$$42 === 0;
        if (v4716) {
          v4716 = newVal > otherVal;
        }
        var v3858 = v4716;
        if (!v3858) {
          var v4717 = index$$42 === 1;
          if (v4717) {
            v4717 = newVal < otherVal;
          }
          v3858 = v4717;
        }
        v2578 = v3858;
      }
      if (v2578) {
        newVal = otherVal;
      }
      if (newVal !== JAM.call(this.values, this, [index$$42])) {
        newValues = this.values();
        JAM.set(newValues, index$$42, newVal, JAM.policy.p3);
        var v3859 = this.handles;
        introspect(JAM.policy.p4) {
          var v2581 = v3859[index$$42]
        }
        allowed$$1 = JAM.call(this._trigger, this, ["slide", event$$30, {handle:v2581, value:newVal, values:newValues}]);
        var v2582;
        if (index$$42) {
          v2582 = 0;
        } else {
          v2582 = 1;
        }
        otherVal = JAM.call(this.values, this, [v2582]);
        if (allowed$$1 !== false) {
          JAM.call(this.values, this, [index$$42, newVal, true]);
        }
      }
    } else {
      if (newVal !== this.value()) {
        var v3860 = this.handles;
        introspect(JAM.policy.p4) {
          var v2585 = v3860[index$$42]
        }
        allowed$$1 = JAM.call(this._trigger, this, ["slide", event$$30, {handle:v2585, value:newVal}]);
        if (allowed$$1 !== false) {
          JAM.call(this.value, this, [newVal]);
        }
      }
    }
    return;
  }
  function v467(event$$29, index$$41) {
    var v2586 = this.handles;
    introspect(JAM.policy.p4) {
      var v632 = v2586[index$$41]
    }
    var uiHash = {handle:v632, value:this.value()};
    var v2587 = this.options.values;
    if (v2587) {
      v2587 = this.options.values.length;
    }
    if (v2587) {
      var v634 = uiHash;
      var v5549 = JAM.call(this.values, this, [index$$41]);
      v634.value = v5549;
      var v635 = uiHash;
      var v5550 = this.values();
      v635.values = v5550;
    }
    return JAM.call(this._trigger, this, ["start", event$$29, uiHash]);
  }
  function v466(position$$3) {
    var pixelTotal;
    var pixelMouse;
    var percentMouse;
    var valueTotal;
    var valueMouse;
    if (this.orientation === "horizontal") {
      pixelTotal = this.elementSize.width;
      var v638 = position$$3.x - this.elementOffset.left;
      var v2591;
      if (this._clickOffset) {
        v2591 = this._clickOffset.left;
      } else {
        v2591 = 0;
      }
      pixelMouse = v638 - v2591;
    } else {
      pixelTotal = this.elementSize.height;
      var v641 = position$$3.y - this.elementOffset.top;
      var v2594;
      if (this._clickOffset) {
        v2594 = this._clickOffset.top;
      } else {
        v2594 = 0;
      }
      pixelMouse = v641 - v2594;
    }
    percentMouse = pixelMouse / pixelTotal;
    if (percentMouse > 1) {
      percentMouse = 1;
    }
    if (percentMouse < 0) {
      percentMouse = 0;
    }
    if (this.orientation === "vertical") {
      percentMouse = 1 - percentMouse;
    }
    valueTotal = this.options.max - this.options.min;
    valueMouse = this.options.min + percentMouse * valueTotal;
    return JAM.call(this._trimAlignValue, this, [valueMouse]);
  }
  function v465() {
    var v651;
    if (this.options.orientation === "vertical") {
      v651 = "vertical";
    } else {
      v651 = "horizontal";
    }
    this.orientation = v651;
    return;
  }
  function v464(event$$28) {
    var v652 = this.handles;
    JAM.call(v652.removeClass, v652, ["ui-state-active"]);
    this._mouseSliding = false;
    JAM.call(this._stop, this, [event$$28, this._handleIndex]);
    JAM.call(this._change, this, [event$$28, this._handleIndex]);
    this._handleIndex = null;
    this._clickOffset = null;
    this._animateOff = false;
    return false;
  }
  function v463(event$$27) {
    var position$$2 = {x:event$$27.pageX, y:event$$27.pageY};
    var normValue$$1 = JAM.call(this._normValueFromMouse, this, [position$$2]);
    JAM.call(this._slide, this, [event$$27, this._handleIndex, normValue$$1]);
    return false;
  }
  function v462() {
    return true;
  }
  function v461(event$$26) {
    function v460(i$$106) {
      var thisDistance = Math.abs(normValue - JAM.call(that$$2.values, that$$2, [i$$106]));
      var v2602 = distance > thisDistance;
      if (!v2602) {
        var v3870 = distance === thisDistance;
        if (v3870) {
          var v4721 = i$$106 === that$$2._lastChangedValue;
          if (!v4721) {
            v4721 = JAM.call(that$$2.values, that$$2, [i$$106]) === o$$1.min;
          }
          v3870 = v4721;
        }
        v2602 = v3870;
      }
      if (v2602) {
        distance = thisDistance;
        closestHandle = JAM.call($$$4, null, [this]);
        index$$40 = i$$106;
      }
      return;
    }
    var position$$1;
    var normValue;
    var distance;
    var closestHandle;
    var index$$40;
    var allowed;
    var offset$$9;
    var mouseOverHandle;
    var that$$2 = this;
    var o$$1 = this.options;
    if (o$$1.disabled) {
      return false;
    }
    this.elementSize = {width:this.element.outerWidth(), height:this.element.outerHeight()};
    var v5551 = this.element.offset();
    this.elementOffset = v5551;
    position$$1 = {x:event$$26.pageX, y:event$$26.pageY};
    normValue = JAM.call(this._normValueFromMouse, this, [position$$1]);
    distance = this.options.max - this.options.min + 1;
    var v667 = this.handles;
    JAM.call(v667.each, v667, [v460]);
    allowed = JAM.call(this._start, this, [event$$26, index$$40]);
    if (allowed === false) {
      return false;
    }
    this._mouseSliding = true;
    this._handleIndex = index$$40;
    JAM.call(closestHandle.addClass, closestHandle, ["ui-state-active"]).focus();
    offset$$9 = closestHandle.offset();
    var v2607 = JAM.call($$$4, null, [event$$26.target]).parents().addBack();
    mouseOverHandle = !JAM.call(v2607.is, v2607, [".ui-slider-handle"]);
    var v671;
    if (mouseOverHandle) {
      v671 = {left:0, top:0};
    } else {
      var v2608 = event$$26.pageX - offset$$9.left - closestHandle.width() / 2;
      var v5176 = event$$26.pageY - offset$$9.top - closestHandle.height() / 2;
      var v5402 = parseInt(JAM.call(closestHandle.css, closestHandle, ["borderTopWidth"]), 10);
      if (!v5402) {
        v5402 = 0;
      }
      var v4726 = v5176 - v5402;
      var v5178 = parseInt(JAM.call(closestHandle.css, closestHandle, ["borderBottomWidth"]), 10);
      if (!v5178) {
        v5178 = 0;
      }
      var v3877 = v4726 - v5178;
      var v4728 = parseInt(JAM.call(closestHandle.css, closestHandle, ["marginTop"]), 10);
      if (!v4728) {
        v4728 = 0;
      }
      v671 = {left:v2608, top:v3877 + v4728};
    }
    this._clickOffset = v671;
    var v3879 = this.handles;
    if (!JAM.call(v3879.hasClass, v3879, ["ui-state-hover"])) {
      JAM.call(this._slide, this, [event$$26, index$$40, normValue]);
    }
    this._animateOff = true;
    return true;
  }
  function v459() {
    this.handles.remove();
    this.range.remove();
    var v675 = this.element;
    JAM.call(v675.removeClass, v675, ["ui-slider" + " ui-slider-horizontal" + " ui-slider-vertical" + " ui-widget" + " ui-widget-content" + " ui-corner-all"]);
    this._mouseDestroy();
    return;
  }
  function v458() {
    var v2612 = this.handles;
    var v677 = JAM.call(v2612.add, v2612, [this.range]);
    var elements$$1 = JAM.call(v677.filter, v677, ["a"]);
    JAM.call(this._off, this, [elements$$1]);
    JAM.call(this._on, this, [elements$$1, this._handleEvents]);
    JAM.call(this._hoverable, this, [elements$$1]);
    JAM.call(this._focusable, this, [elements$$1]);
    return;
  }
  function v457() {
    var options$$15 = this.options;
    var classes = "";
    if (options$$15.range) {
      if (options$$15.range === true) {
        if (!options$$15.values) {
          options$$15.values = [this.options.min, this.options.min];
        } else {
          var v2618 = options$$15.values.length;
          if (v2618) {
            v2618 = options$$15.values.length !== 2;
          }
          if (v2618) {
            var v2619 = options$$15.values;
            introspect(JAM.policy.p4) {
              var v681 = v2619[0]
            }
            var v2620 = options$$15.values;
            introspect(JAM.policy.p4) {
              var v682 = v2620[0]
            }
            options$$15.values = [v681, v682];
          } else {
            if (JAM.call($$$4.isArray, $$$4, [options$$15.values])) {
              var v683 = options$$15;
              var v2622 = options$$15.values;
              var v5552 = JAM.call(v2622.slice, v2622, [0]);
              v683.values = v5552;
            }
          }
        }
      }
      var v2623 = !this.range;
      if (!v2623) {
        v2623 = !this.range.length;
      }
      if (v2623) {
        var v688 = JAM.call($$$4, null, ["<div></div>"]);
        var v5553 = JAM.call(v688.appendTo, v688, [this.element]);
        this.range = v5553;
        classes = "ui-slider-range" + " ui-widget-header ui-corner-all";
      } else {
        var v2624 = this.range;
        var v690 = JAM.call(v2624.removeClass, v2624, ["ui-slider-range-min ui-slider-range-max"]);
        JAM.call(v690.css, v690, [{"left":"", "bottom":""}]);
      }
      var v693 = this.range;
      var v3886;
      var v5182 = options$$15.range === "min";
      if (!v5182) {
        v5182 = options$$15.range === "max";
      }
      if (v5182) {
        v3886 = " ui-slider-range-" + options$$15.range;
      } else {
        v3886 = "";
      }
      JAM.call(v693.addClass, v693, [classes + v3886]);
    } else {
      var v5554 = JAM.call($$$4, null, [[]]);
      this.range = v5554;
    }
    return;
  }
  function v456() {
    function v455(i$$105) {
      var v696 = JAM.call($$$4, null, [this]);
      JAM.call(v696.data, v696, ["ui-slider-handle-index", i$$105]);
      return;
    }
    var i$$104;
    var handleCount;
    var options$$14 = this.options;
    var v2626 = this.element;
    var v697 = JAM.call(v2626.find, v2626, [".ui-slider-handle"]);
    var existingHandles = JAM.call(v697.addClass, v697, ["ui-state-default ui-corner-all"]);
    var handle$$16 = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
    var handles = [];
    var v2627 = options$$14.values;
    if (v2627) {
      v2627 = options$$14.values.length;
    }
    var v698 = v2627;
    if (!v698) {
      v698 = 1;
    }
    handleCount = v698;
    if (existingHandles.length > handleCount) {
      JAM.call(existingHandles.slice, existingHandles, [handleCount]).remove();
      existingHandles = JAM.call(existingHandles.slice, existingHandles, [0, handleCount]);
    }
    i$$104 = existingHandles.length;
    var v701 = i$$104 < handleCount;
    for (;v701;) {
      JAM.call(handles.push, handles, [handle$$16]);
      i$$104 = i$$104 + 1;
      v701 = i$$104 < handleCount;
    }
    var v2630 = JAM.call($$$4, null, [handles.join("")]);
    var v5555 = JAM.call(existingHandles.add, existingHandles, [JAM.call(v2630.appendTo, v2630, [this.element])]);
    this.handles = v5555;
    var v703 = this.handles;
    var v5556 = JAM.call(v703.eq, v703, [0]);
    this.handle = v5556;
    var v704 = this.handles;
    JAM.call(v704.each, v704, [v455]);
    return;
  }
  function v454() {
    this._createRange();
    this._createHandles();
    this._setupEvents();
    this._refreshValue();
    return;
  }
  function v453() {
    this._keySliding = false;
    this._mouseSliding = false;
    this._animateOff = true;
    this._handleIndex = null;
    this._detectOrientation();
    this._mouseInit();
    var v705 = this.element;
    JAM.call(v705.addClass, v705, ["ui-slider" + " ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"]);
    this._refresh();
    JAM.call(this._setOption, this, ["disabled", this.options.disabled]);
    this._animateOff = false;
    return;
  }
  var numPages = 5;
  JAM.call($$$4.widget, $$$4, ["ui.slider", $$$4.ui.mouse, {version:"1.10.1", widgetEventPrefix:"slide", options:{animate:false, distance:0, max:100, min:0, orientation:"horizontal", range:false, step:1, value:0, values:null, change:null, slide:null, start:null, stop:null}, _create:v453, _refresh:v454, _createHandles:v456, _createRange:v457, _setupEvents:v458, _destroy:v459, _mouseCapture:v461, _mouseStart:v462, _mouseDrag:v463, _mouseStop:v464, _detectOrientation:v465, _normValueFromMouse:v466, 
  _start:v467, _slide:v468, _stop:v469, _change:v470, value:v471, values:v472, _setOption:v473, _value:v474, _values:v475, _trimAlignValue:v476, _valueMin:v477, _valueMax:v478, _refreshValue:v480, _handleEvents:{keydown:v481, click:v482, keyup:v483}}]);
  return;
}
function v452($$$3, undefined$$4) {
  function v451() {
    return true;
  }
  function v450() {
    return;
  }
  function v449() {
    return;
  }
  function v448() {
    return;
  }
  function v447() {
    return this.mouseDelayMet;
  }
  function v446(event$$25) {
    return JAM.call(Math.max, Math, [Math.abs(this._mouseDownEvent.pageX - event$$25.pageX), Math.abs(this._mouseDownEvent.pageY - event$$25.pageY)]) >= this.options.distance;
  }
  function v445(event$$24) {
    var v2640 = JAM.call($$$3, null, [document]);
    var v712 = JAM.call(v2640.unbind, v2640, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
    JAM.call(v712.unbind, v712, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    if (this._mouseStarted) {
      this._mouseStarted = false;
      if (event$$24.target === this._mouseDownEvent.target) {
        JAM.call($$$3.data, $$$3, [event$$24.target, this.widgetName + ".preventClickEvent", true]);
      }
      JAM.call(this._mouseStop, this, [event$$24]);
    }
    return false;
  }
  function v444(event$$23) {
    var v3894 = $$$3.ui.ie;
    if (v3894) {
      var v4740 = !document.documentMode;
      if (!v4740) {
        v4740 = document.documentMode < 9;
      }
      v3894 = v4740;
    }
    var v2647 = v3894;
    if (v2647) {
      v2647 = !event$$23.button;
    }
    if (v2647) {
      return JAM.call(this._mouseUp, this, [event$$23]);
    }
    if (this._mouseStarted) {
      JAM.call(this._mouseDrag, this, [event$$23]);
      return event$$23.preventDefault();
    }
    var v2648 = JAM.call(this._mouseDistanceMet, this, [event$$23]);
    if (v2648) {
      v2648 = this.mouseDelayMet;
    }
    if (v2648) {
      this._mouseStarted = JAM.call(this._mouseStart, this, [this._mouseDownEvent, event$$23]) !== false;
      var v722;
      if (this._mouseStarted) {
        v722 = JAM.call(this._mouseDrag, this, [event$$23]);
      } else {
        v722 = JAM.call(this._mouseUp, this, [event$$23]);
      }
      v722;
    }
    return!this._mouseStarted;
  }
  function v443(event$$20) {
    function v442(event$$22) {
      return JAM.call(that$$1._mouseUp, that$$1, [event$$22]);
    }
    function v441(event$$21) {
      return JAM.call(that$$1._mouseMove, that$$1, [event$$21]);
    }
    function v440() {
      that$$1.mouseDelayMet = true;
      return;
    }
    if (mouseHandled) {
      return;
    }
    var v725 = this._mouseStarted;
    if (v725) {
      JAM.call(this._mouseUp, this, [event$$20]);
    }
    this._mouseDownEvent = event$$20;
    var that$$1 = this;
    var btnIsLeft = event$$20.which === 1;
    var v727;
    var v3896 = typeof this.options.cancel === "string";
    if (v3896) {
      v3896 = event$$20.target.nodeName;
    }
    if (v3896) {
      var v3897 = JAM.call($$$3, null, [event$$20.target]);
      v727 = JAM.call(v3897.closest, v3897, [this.options.cancel]).length;
    } else {
      v727 = false;
    }
    var elIsCancel = v727;
    var v3899 = !btnIsLeft;
    if (!v3899) {
      v3899 = elIsCancel;
    }
    var v2653 = v3899;
    if (!v2653) {
      v2653 = !JAM.call(this._mouseCapture, this, [event$$20]);
    }
    if (v2653) {
      return true;
    }
    this.mouseDelayMet = !this.options.delay;
    if (!this.mouseDelayMet) {
      var v5557 = JAM.call(setTimeout, null, [v440, this.options.delay]);
      this._mouseDelayTimer = v5557;
    }
    var v2657 = JAM.call(this._mouseDistanceMet, this, [event$$20]);
    if (v2657) {
      v2657 = this.mouseDelayMet;
    }
    if (v2657) {
      this._mouseStarted = JAM.call(this._mouseStart, this, [event$$20]) !== false;
      if (!this._mouseStarted) {
        event$$20.preventDefault();
        return true;
      }
    }
    if (true === JAM.call($$$3.data, $$$3, [event$$20.target, this.widgetName + ".preventClickEvent"])) {
      JAM.call($$$3.removeData, $$$3, [event$$20.target, this.widgetName + ".preventClickEvent"]);
    }
    this._mouseMoveDelegate = v441;
    this._mouseUpDelegate = v442;
    var v2661 = JAM.call($$$3, null, [document]);
    var v738 = JAM.call(v2661.bind, v2661, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
    JAM.call(v738.bind, v738, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    event$$20.preventDefault();
    mouseHandled = true;
    return true;
  }
  function v439() {
    var v741 = this.element;
    JAM.call(v741.unbind, v741, ["." + this.widgetName]);
    if (this._mouseMoveDelegate) {
      var v2666 = JAM.call($$$3, null, [document]);
      var v743 = JAM.call(v2666.unbind, v2666, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
      JAM.call(v743.unbind, v743, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    }
    return;
  }
  function v438() {
    function v437(event$$19) {
      if (true === JAM.call($$$3.data, $$$3, [event$$19.target, that.widgetName + ".preventClickEvent"])) {
        JAM.call($$$3.removeData, $$$3, [event$$19.target, that.widgetName + ".preventClickEvent"]);
        event$$19.stopImmediatePropagation();
        return false;
      }
      return;
    }
    function v436(event$$18) {
      return JAM.call(that._mouseDown, that, [event$$18]);
    }
    var that = this;
    var v2672 = this.element;
    var v750 = JAM.call(v2672.bind, v2672, ["mousedown." + this.widgetName, v436]);
    JAM.call(v750.bind, v750, ["click." + this.widgetName, v437]);
    this.started = false;
    return;
  }
  function v435() {
    mouseHandled = false;
    return;
  }
  var mouseHandled = false;
  var v752 = JAM.call($$$3, null, [document]);
  JAM.call(v752.mouseup, v752, [v435]);
  JAM.call($$$3.widget, $$$3, ["ui.mouse", {version:"1.10.1", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0}, _mouseInit:v438, _mouseDestroy:v439, _mouseDown:v443, _mouseMove:v444, _mouseUp:v445, _mouseDistanceMet:v446, _mouseDelayMet:v447, _mouseStart:v448, _mouseDrag:v449, _mouseStop:v450, _mouseCapture:v451}]);
  return;
}
function v434($$$2, undefined$$3) {
  function v433(method$$2, defaultEffect) {
    function v432(element$$12, options$$13, callback$$43) {
      function v431(next$$1) {
        var v754 = JAM.call($$$2, null, [this]);
        JAM.call(JAM.get(v754, method$$2, JAM.policy.p4), v754, []);
        if (callback$$43) {
          introspect(JAM.policy.p4) {
            var v755 = element$$12[0]
          }
          JAM.call(callback$$43.call, callback$$43, [v755]);
        }
        next$$1();
        return;
      }
      if (typeof options$$13 === "string") {
        options$$13 = {effect:options$$13};
      }
      var hasOptions;
      var v757;
      if (!options$$13) {
        v757 = method$$2;
      } else {
        var v2677;
        var v4748 = options$$13 === true;
        if (!v4748) {
          v4748 = typeof options$$13 === "number";
        }
        if (v4748) {
          v2677 = defaultEffect;
        } else {
          var v3909 = options$$13.effect;
          if (!v3909) {
            v3909 = defaultEffect;
          }
          v2677 = v3909;
        }
        v757 = v2677;
      }
      var effectName = v757;
      options$$13 = options$$13 || {};
      if (typeof options$$13 === "number") {
        options$$13 = {duration:options$$13};
      }
      hasOptions = !JAM.call($$$2.isEmptyObject, $$$2, [options$$13]);
      options$$13.complete = callback$$43;
      if (options$$13.delay) {
        JAM.call(element$$12.delay, element$$12, [options$$13.delay]);
      }
      var v3911 = hasOptions;
      if (v3911) {
        v3911 = $$$2.effects;
      }
      var v2680 = v3911;
      if (v2680) {
        var v3912 = $$$2.effects.effect;
        introspect(JAM.policy.p4) {
          v2680 = v3912[effectName];
        }
      }
      if (v2680) {
        JAM.call(JAM.get(element$$12, method$$2, JAM.policy.p4), element$$12, [options$$13]);
      } else {
        var v2681 = effectName !== method$$2;
        if (v2681) {
          introspect(JAM.policy.p4) {
            v2681 = element$$12[effectName];
          }
        }
        if (v2681) {
          JAM.call(JAM.get(element$$12, effectName, JAM.policy.p4), element$$12, [options$$13.duration, options$$13.easing, callback$$43]);
        } else {
          JAM.call(element$$12.queue, element$$12, [v431]);
        }
      }
      return;
    }
    JAM.set($$$2.Widget.prototype, "_" + method$$2, v432, JAM.policy.p3);
    return;
  }
  function v430(type$$67, event$$17, data$$44) {
    var prop$$9;
    var orig$$4;
    var v768 = this.options;
    introspect(JAM.policy.p4) {
      var callback$$42 = v768[type$$67]
    }
    data$$44 = data$$44 || {};
    event$$17 = JAM.call($$$2.Event, $$$2, [event$$17]);
    var v769 = event$$17;
    var v3913;
    if (type$$67 === this.widgetEventPrefix) {
      v3913 = type$$67;
    } else {
      v3913 = this.widgetEventPrefix + type$$67;
    }
    var v5558 = v3913.toLowerCase();
    v769.type = v5558;
    var v770 = this.element;
    introspect(JAM.policy.p4) {
      event$$17.target = v770[0];
    }
    orig$$4 = event$$17.originalEvent;
    if (orig$$4) {
      for (prop$$9 in orig$$4) {
        if (!(prop$$9 in event$$17)) {
          JAM.set(event$$17, prop$$9, JAM.get(orig$$4, prop$$9, JAM.policy.p3), JAM.policy.p3);
        }
      }
    }
    var v772 = this.element;
    JAM.call(v772.trigger, v772, [event$$17, data$$44]);
    var v3914 = JAM.call($$$2.isFunction, $$$2, [callback$$42]);
    if (v3914) {
      var v5409 = this.element;
      introspect(JAM.policy.p4) {
        var v5194 = v5409[0]
      }
      v3914 = JAM.call(callback$$42.apply, callback$$42, [v5194, [event$$17].concat(data$$44)]) === false;
    }
    var v2685 = v3914;
    if (!v2685) {
      v2685 = event$$17.isDefaultPrevented();
    }
    return!v2685;
  }
  function v429(element$$11) {
    function v428(event$$16) {
      var v774 = JAM.call($$$2, null, [event$$16.currentTarget]);
      JAM.call(v774.removeClass, v774, ["ui-state-focus"]);
      return;
    }
    function v427(event$$15) {
      var v775 = JAM.call($$$2, null, [event$$15.currentTarget]);
      JAM.call(v775.addClass, v775, ["ui-state-focus"]);
      return;
    }
    var v776 = this.focusable;
    var v5559 = JAM.call(v776.add, v776, [element$$11]);
    this.focusable = v5559;
    JAM.call(this._on, this, [element$$11, {focusin:v427, focusout:v428}]);
    return;
  }
  function v426(element$$10) {
    function v425(event$$14) {
      var v778 = JAM.call($$$2, null, [event$$14.currentTarget]);
      JAM.call(v778.removeClass, v778, ["ui-state-hover"]);
      return;
    }
    function v424(event$$13) {
      var v779 = JAM.call($$$2, null, [event$$13.currentTarget]);
      JAM.call(v779.addClass, v779, ["ui-state-hover"]);
      return;
    }
    var v780 = this.hoverable;
    var v5560 = JAM.call(v780.add, v780, [element$$10]);
    this.hoverable = v5560;
    JAM.call(this._on, this, [element$$10, {mouseenter:v424, mouseleave:v425}]);
    return;
  }
  function v423(handler$$9, delay$$4) {
    function handlerProxy$$1() {
      var v2690;
      if (typeof handler$$9 === "string") {
        introspect(JAM.policy.p4) {
          v2690 = instance$$4[handler$$9];
        }
      } else {
        v2690 = handler$$9;
      }
      var v782 = v2690;
      return JAM.call(v782.apply, v782, [instance$$4, arguments]);
    }
    var instance$$4 = this;
    return JAM.call(setTimeout, null, [handlerProxy$$1, delay$$4 || 0]);
  }
  function v422(element$$9, eventName$$2) {
    eventName$$2 = (eventName$$2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
    var v786 = JAM.call(element$$9.unbind, element$$9, [eventName$$2]);
    JAM.call(v786.undelegate, v786, [eventName$$2]);
    return;
  }
  function v421(suppressDisabledCheck, element$$8, handlers$$2) {
    function v420(event$$12, handler$$8) {
      function handlerProxy() {
        var v2693 = !suppressDisabledCheck;
        if (v2693) {
          var v3919 = instance$$3.options.disabled === true;
          if (!v3919) {
            var v4756 = JAM.call($$$2, null, [this]);
            v3919 = JAM.call(v4756.hasClass, v4756, ["ui-state-disabled"]);
          }
          v2693 = v3919;
        }
        if (v2693) {
          return;
        }
        var v2694;
        if (typeof handler$$8 === "string") {
          introspect(JAM.policy.p4) {
            v2694 = instance$$3[handler$$8];
          }
        } else {
          v2694 = handler$$8;
        }
        var v788 = v2694;
        return JAM.call(v788.apply, v788, [instance$$3, arguments]);
      }
      if (typeof handler$$8 !== "string") {
        var v2696 = handler$$8.guid;
        if (!v2696) {
          v2696 = handlerProxy.guid;
        }
        var v789 = v2696;
        if (!v789) {
          v789 = $$$2.guid;
          $$$2.guid = $$$2.guid + 1;
        }
        handlerProxy.guid = handler$$8.guid = v789;
      }
      var match$$38 = JAM.call(event$$12.match, event$$12, [/^(\w+)\s*(.*)$/]);
      introspect(JAM.policy.p4) {
        var v791 = match$$38[1]
      }
      var eventName$$1 = v791 + instance$$3.eventNamespace;
      introspect(JAM.policy.p4) {
        var selector$$22 = match$$38[2]
      }
      if (selector$$22) {
        JAM.call(delegateElement.delegate, delegateElement, [selector$$22, eventName$$1, handlerProxy]);
      } else {
        JAM.call(element$$8.bind, element$$8, [eventName$$1, handlerProxy]);
      }
      return;
    }
    var delegateElement;
    var instance$$3 = this;
    if (typeof suppressDisabledCheck !== "boolean") {
      handlers$$2 = element$$8;
      element$$8 = suppressDisabledCheck;
      suppressDisabledCheck = false;
    }
    if (!handlers$$2) {
      handlers$$2 = element$$8;
      element$$8 = this.element;
      delegateElement = this.widget();
    } else {
      element$$8 = delegateElement = JAM.call($$$2, null, [element$$8]);
      var v794 = this.bindings;
      var v5561 = JAM.call(v794.add, v794, [element$$8]);
      this.bindings = v5561;
    }
    JAM.call($$$2.each, $$$2, [handlers$$2, v420]);
    return;
  }
  function v419() {
    return JAM.call(this._setOption, this, ["disabled", true]);
  }
  function v418() {
    return JAM.call(this._setOption, this, ["disabled", false]);
  }
  function v417(key$$25, value$$49) {
    JAM.set(this.options, key$$25, value$$49, JAM.policy.p3);
    if (key$$25 === "disabled") {
      var v2699 = this.widget();
      var v797 = JAM.call(v2699.toggleClass, v2699, [this.widgetFullName + "-disabled ui-state-disabled", !!value$$49]);
      JAM.call(v797.attr, v797, ["aria-disabled", value$$49]);
      var v798 = this.hoverable;
      JAM.call(v798.removeClass, v798, ["ui-state-hover"]);
      var v799 = this.focusable;
      JAM.call(v799.removeClass, v799, ["ui-state-focus"]);
    }
    return this;
  }
  function v416(options$$12) {
    var key$$24;
    for (key$$24 in options$$12) {
      introspect(JAM.policy.p4) {
        var v801 = options$$12[key$$24]
      }
      JAM.call(this._setOption, this, [key$$24, v801]);
    }
    return this;
  }
  function v415(key$$23, value$$48) {
    var options$$11 = key$$23;
    var parts$$4;
    var curOption;
    var i$$103;
    if (arguments.length === 0) {
      var v802 = $$$2.widget;
      return JAM.call(v802.extend, v802, [{}, this.options]);
    }
    if (typeof key$$23 === "string") {
      options$$11 = {};
      parts$$4 = key$$23.split(".");
      key$$23 = parts$$4.shift();
      if (parts$$4.length) {
        var v805 = options$$11;
        var v806 = key$$23;
        var v2704 = $$$2.widget;
        var v3925 = this.options;
        introspect(JAM.policy.p4) {
          var v2705 = v3925[key$$23]
        }
        var v5562 = JAM.call(v2704.extend, v2704, [{}, v2705]);
        curOption = JAM.set(v805, v806, v5562, JAM.policy.p3);
        i$$103 = 0;
        var v809 = i$$103 < parts$$4.length - 1;
        for (;v809;) {
          introspect(JAM.policy.p4) {
            var v807 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p4) {
            var v3927 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p4) {
            var v2707 = curOption[v3927]
          }
          if (!v2707) {
            v2707 = {};
          }
          JAM.set(curOption, v807, v2707, JAM.policy.p3);
          introspect(JAM.policy.p4) {
            var v808 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p4) {
            curOption = curOption[v808];
          }
          i$$103 = i$$103 + 1;
          v809 = i$$103 < parts$$4.length - 1;
        }
        key$$23 = parts$$4.pop();
        if (value$$48 === undefined$$3) {
          var v810;
          introspect(JAM.policy.p4) {
            var v3930 = curOption[key$$23]
          }
          if (v3930 === undefined$$3) {
            v810 = null;
          } else {
            introspect(JAM.policy.p4) {
              v810 = curOption[key$$23];
            }
          }
          return v810;
        }
        JAM.set(curOption, key$$23, value$$48, JAM.policy.p3);
      } else {
        if (value$$48 === undefined$$3) {
          var v812;
          var v4759 = this.options;
          introspect(JAM.policy.p4) {
            var v3931 = v4759[key$$23]
          }
          if (v3931 === undefined$$3) {
            v812 = null;
          } else {
            var v2710 = this.options;
            introspect(JAM.policy.p4) {
              v812 = v2710[key$$23];
            }
          }
          return v812;
        }
        JAM.set(options$$11, key$$23, value$$48, JAM.policy.p3);
      }
    }
    JAM.call(this._setOptions, this, [options$$11]);
    return this;
  }
  function v414() {
    return this.element;
  }
  function v413() {
    this._destroy();
    var v4760 = this.element;
    var v3932 = JAM.call(v4760.unbind, v4760, [this.eventNamespace]);
    var v2712 = JAM.call(v3932.removeData, v3932, [this.widgetName]);
    var v816 = JAM.call(v2712.removeData, v2712, [this.widgetFullName]);
    JAM.call(v816.removeData, v816, [JAM.call($$$2.camelCase, $$$2, [this.widgetFullName])]);
    var v3934 = this.widget();
    var v2715 = JAM.call(v3934.unbind, v3934, [this.eventNamespace]);
    var v818 = JAM.call(v2715.removeAttr, v2715, ["aria-disabled"]);
    JAM.call(v818.removeClass, v818, [this.widgetFullName + "-disabled " + "ui-state-disabled"]);
    var v820 = this.bindings;
    JAM.call(v820.unbind, v820, [this.eventNamespace]);
    var v822 = this.hoverable;
    JAM.call(v822.removeClass, v822, ["ui-state-hover"]);
    var v823 = this.focusable;
    JAM.call(v823.removeClass, v823, ["ui-state-focus"]);
    return;
  }
  function v412(options$$10, element$$7) {
    function v411(event$$11) {
      if (event$$11.target === element$$7) {
        this.destroy();
      }
      return;
    }
    var v4762 = element$$7;
    if (!v4762) {
      v4762 = this.defaultElement;
    }
    var v3937 = v4762;
    if (!v3937) {
      v3937 = this;
    }
    var v825 = JAM.call($$$2, null, [v3937]);
    introspect(JAM.policy.p4) {
      element$$7 = v825[0];
    }
    var v5563 = JAM.call($$$2, null, [element$$7]);
    this.element = v5563;
    this.uuid = uuid$$2;
    uuid$$2 = uuid$$2 + 1;
    this.eventNamespace = "." + this.widgetName + this.uuid;
    var v828 = $$$2.widget;
    var v5564 = JAM.call(v828.extend, v828, [{}, this.options, this._getCreateOptions(), options$$10]);
    this.options = v5564;
    var v5565 = $$$2();
    this.bindings = v5565;
    var v5566 = $$$2();
    this.hoverable = v5566;
    var v5567 = $$$2();
    this.focusable = v5567;
    if (element$$7 !== this) {
      JAM.call($$$2.data, $$$2, [element$$7, this.widgetFullName, this]);
      JAM.call(this._on, this, [true, this.element, {remove:v411}]);
      var v2720;
      if (element$$7.style) {
        v2720 = element$$7.ownerDocument;
      } else {
        var v3938 = element$$7.document;
        if (!v3938) {
          v3938 = element$$7;
        }
        v2720 = v3938;
      }
      var v5568 = JAM.call($$$2, null, [v2720]);
      this.document = v5568;
      var v4765 = this.document;
      introspect(JAM.policy.p4) {
        var v3940 = v4765[0]
      }
      var v2721 = v3940.defaultView;
      if (!v2721) {
        var v4766 = this.document;
        introspect(JAM.policy.p4) {
          var v3941 = v4766[0]
        }
        v2721 = v3941.parentWindow;
      }
      var v5569 = JAM.call($$$2, null, [v2721]);
      this.window = v5569;
    }
    this._create();
    JAM.call(this._trigger, this, ["create", null, this._getCreateEventData()]);
    this._init();
    return;
  }
  function v410() {
    return;
  }
  function v409(name$$63, object$$1) {
    function v408(options$$9) {
      function v407() {
        var instance$$2 = JAM.call($$$2.data, $$$2, [this, fullName$$1]);
        if (instance$$2) {
          JAM.call(instance$$2.option, instance$$2, [options$$9 || {}])._init();
        } else {
          JAM.call($$$2.data, $$$2, [this, fullName$$1, JAM.new(object$$1, [options$$9, this])]);
        }
        return;
      }
      function v406() {
        var methodValue;
        var instance$$1 = JAM.call($$$2.data, $$$2, [this, fullName$$1]);
        if (!instance$$1) {
          return JAM.call($$$2.error, $$$2, ["cannot call methods on " + name$$63 + " prior to initialization; " + "attempted to call method '" + options$$9 + "'"]);
        }
        introspect(JAM.policy.p4) {
          var v4768 = instance$$1[options$$9]
        }
        var v2724 = !JAM.call($$$2.isFunction, $$$2, [v4768]);
        if (!v2724) {
          v2724 = options$$9.charAt(0) === "_";
        }
        if (v2724) {
          return JAM.call($$$2.error, $$$2, ["no such method '" + options$$9 + "' for " + name$$63 + " widget instance"]);
        }
        introspect(JAM.policy.p4) {
          var v844 = instance$$1[options$$9]
        }
        methodValue = JAM.call(v844.apply, v844, [instance$$1, args$$10]);
        var v2726 = methodValue !== instance$$1;
        if (v2726) {
          v2726 = methodValue !== undefined$$3;
        }
        if (v2726) {
          var v845;
          var v3948 = methodValue;
          if (v3948) {
            v3948 = methodValue.jquery;
          }
          if (v3948) {
            v845 = JAM.call(returnValue$$1.pushStack, returnValue$$1, [methodValue.get()]);
          } else {
            v845 = methodValue;
          }
          returnValue$$1 = v845;
          return false;
        }
        return;
      }
      var isMethodCall = typeof options$$9 === "string";
      var args$$10 = JAM.call(slice$$1.call, slice$$1, [arguments, 1]);
      var returnValue$$1 = this;
      var v848;
      var v3949 = !isMethodCall;
      if (v3949) {
        v3949 = args$$10.length;
      }
      if (v3949) {
        var v2729 = $$$2.widget.extend;
        v848 = JAM.call(v2729.apply, v2729, [null, [options$$9].concat(args$$10)]);
      } else {
        v848 = options$$9;
      }
      options$$9 = v848;
      if (isMethodCall) {
        JAM.call(this.each, this, [v406]);
      } else {
        JAM.call(this.each, this, [v407]);
      }
      return returnValue$$1;
    }
    var v849 = object$$1.prototype.widgetFullName;
    if (!v849) {
      v849 = name$$63;
    }
    var fullName$$1 = v849;
    JAM.set($$$2.fn, name$$63, v408, JAM.policy.p3);
    return;
  }
  function v405(target$$29) {
    var input = JAM.call(slice$$1.call, slice$$1, [arguments, 1]);
    var inputIndex = 0;
    var inputLength = input.length;
    var key$$22;
    var value$$47;
    var v857 = inputIndex < inputLength;
    for (;v857;) {
      introspect(JAM.policy.p4) {
        var v856 = input[inputIndex]
      }
      for (key$$22 in v856) {
        introspect(JAM.policy.p4) {
          var v851 = input[inputIndex]
        }
        introspect(JAM.policy.p4) {
          value$$47 = v851[key$$22];
        }
        introspect(JAM.policy.p4) {
          var v3952 = input[inputIndex]
        }
        var v2734 = v3952.hasOwnProperty(key$$22);
        if (v2734) {
          v2734 = value$$47 !== undefined$$3;
        }
        if (v2734) {
          if (JAM.call($$$2.isPlainObject, $$$2, [value$$47])) {
            var v852 = target$$29;
            var v853 = key$$22;
            var v2735;
            introspect(JAM.policy.p4) {
              var v4770 = target$$29[key$$22]
            }
            if (JAM.call($$$2.isPlainObject, $$$2, [v4770])) {
              var v3953 = $$$2.widget;
              introspect(JAM.policy.p4) {
                var v3954 = target$$29[key$$22]
              }
              v2735 = JAM.call(v3953.extend, v3953, [{}, v3954, value$$47]);
            } else {
              var v3955 = $$$2.widget;
              v2735 = JAM.call(v3955.extend, v3955, [{}, value$$47]);
            }
            JAM.set(v852, v853, v2735, JAM.policy.p3);
          } else {
            JAM.set(target$$29, key$$22, value$$47, JAM.policy.p3);
          }
        }
      }
      inputIndex = inputIndex + 1;
      v857 = inputIndex < inputLength;
    }
    return target$$29;
  }
  function v404(name$$62, base$$1, prototype) {
    function v403(i$$102, child$$1) {
      var childPrototype = child$$1.prototype;
      JAM.call($$$2.widget, $$$2, [childPrototype.namespace + "." + childPrototype.widgetName, constructor, child$$1._proto]);
      return;
    }
    function v402(prop$$8, value$$46) {
      function v401() {
        function v400() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;
          this._super = _super;
          this._superApply = _superApply;
          returnValue = JAM.call(value$$46.apply, value$$46, [this, arguments]);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue;
        }
        function _superApply(args$$9) {
          var v2738 = base$$1.prototype;
          introspect(JAM.policy.p4) {
            var v860 = v2738[prop$$8]
          }
          return JAM.call(v860.apply, v860, [this, args$$9]);
        }
        function _super() {
          var v2739 = base$$1.prototype;
          introspect(JAM.policy.p4) {
            var v861 = v2739[prop$$8]
          }
          return JAM.call(v861.apply, v861, [this, arguments]);
        }
        return v400;
      }
      if (!JAM.call($$$2.isFunction, $$$2, [value$$46])) {
        JAM.set(proxiedPrototype, prop$$8, value$$46, JAM.policy.p3);
        return;
      }
      var v5570 = v401();
      JAM.set(proxiedPrototype, prop$$8, v5570, JAM.policy.p3);
      return;
    }
    function v399(options$$8, element$$6) {
      if (!this._createWidget) {
        return JAM.new(constructor, [options$$8, element$$6]);
      }
      if (arguments.length) {
        JAM.call(this._createWidget, this, [options$$8, element$$6]);
      }
      return;
    }
    function v398(elem$$129) {
      return!!JAM.call($$$2.data, $$$2, [elem$$129, fullName]);
    }
    var fullName;
    var existingConstructor;
    var constructor;
    var basePrototype;
    var proxiedPrototype = {};
    var v866 = name$$62.split(".");
    introspect(JAM.policy.p4) {
      var namespace$$3 = v866[0]
    }
    var v867 = name$$62.split(".");
    introspect(JAM.policy.p4) {
      name$$62 = v867[1];
    }
    fullName = namespace$$3 + "-" + name$$62;
    if (!prototype) {
      prototype = base$$1;
      base$$1 = $$$2.Widget;
    }
    JAM.set($$$2.expr[":"], fullName.toLowerCase(), v398, JAM.policy.p3);
    introspect(JAM.policy.p4) {
      var v872 = $$$2[namespace$$3]
    }
    if (!v872) {
      v872 = {};
    }
    JAM.set($$$2, namespace$$3, v872, JAM.policy.p3);
    introspect(JAM.policy.p4) {
      var v873 = $$$2[namespace$$3]
    }
    introspect(JAM.policy.p4) {
      existingConstructor = v873[name$$62];
    }
    introspect(JAM.policy.p4) {
      var v874 = $$$2[namespace$$3]
    }
    constructor = JAM.set(v874, name$$62, v399, JAM.policy.p3);
    JAM.call($$$2.extend, $$$2, [constructor, existingConstructor, {version:prototype.version, _proto:JAM.call($$$2.extend, $$$2, [{}, prototype]), _childConstructors:[]}]);
    basePrototype = new base$$1;
    var v876 = basePrototype;
    var v2747 = $$$2.widget;
    var v5571 = JAM.call(v2747.extend, v2747, [{}, basePrototype.options]);
    v876.options = v5571;
    JAM.call($$$2.each, $$$2, [prototype, v402]);
    var v877 = constructor;
    var v2749 = $$$2.widget;
    var v4771;
    if (existingConstructor) {
      v4771 = basePrototype.widgetEventPrefix;
    } else {
      v4771 = name$$62;
    }
    var v5572 = JAM.call(v2749.extend, v2749, [basePrototype, {widgetEventPrefix:v4771}, proxiedPrototype, {constructor:constructor, namespace:namespace$$3, widgetName:name$$62, widgetFullName:fullName}]);
    v877.prototype = v5572;
    if (existingConstructor) {
      JAM.call($$$2.each, $$$2, [existingConstructor._childConstructors, v403]);
      delete existingConstructor._childConstructors;
    } else {
      var v879 = base$$1._childConstructors;
      JAM.call(v879.push, v879, [constructor]);
    }
    var v880 = $$$2.widget;
    JAM.call(v880.bridge, v880, [name$$62, constructor]);
    return;
  }
  function v397(elems$$10) {
    var i$$101 = 0;
    var elem$$128;
    introspect(JAM.policy.p4) {
      var v2752 = elem$$128 = elems$$10[i$$101]
    }
    var v882 = v2752 != null;
    for (;v882;) {
      try {
        var v881 = JAM.call($$$2, null, [elem$$128]);
        JAM.call(v881.triggerHandler, v881, ["remove"]);
      } catch (e$$31) {
      }
      i$$101 = i$$101 + 1;
      introspect(JAM.policy.p4) {
        var v2753 = elem$$128 = elems$$10[i$$101]
      }
      v882 = v2753 != null;
    }
    JAM.call(_cleanData, null, [elems$$10]);
    return;
  }
  var uuid$$2 = 0;
  var slice$$1 = Array.prototype.slice;
  var _cleanData = $$$2.cleanData;
  $$$2.cleanData = v397;
  $$$2.widget = v404;
  $$$2.widget.extend = v405;
  $$$2.widget.bridge = v409;
  $$$2.Widget = v410;
  $$$2.Widget._childConstructors = [];
  $$$2.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", defaultElement:"<div>", options:{disabled:false, create:null}, _createWidget:v412, _getCreateOptions:$$$2.noop, _getCreateEventData:$$$2.noop, _create:$$$2.noop, _init:$$$2.noop, destroy:v413, _destroy:$$$2.noop, widget:v414, option:v415, _setOptions:v416, _setOption:v417, enable:v418, disable:v419, _on:v421, _off:v422, _delay:v423, _hoverable:v426, _focusable:v429, _trigger:v430};
  JAM.call($$$2.each, $$$2, [{show:"fadeIn", hide:"fadeOut"}, v433]);
  return;
}
function v396($$$1, undefined$$2) {
  function v395(el$$1, a$$7) {
    var v3959 = JAM.call($$$1, null, [el$$1]);
    if (JAM.call(v3959.css, v3959, ["overflow"]) === "hidden") {
      return false;
    }
    var v890;
    var v3960 = a$$7;
    if (v3960) {
      v3960 = a$$7 === "left";
    }
    if (v3960) {
      v890 = "scrollLeft";
    } else {
      v890 = "scrollTop";
    }
    var scroll = v890;
    var has = false;
    introspect(JAM.policy.p4) {
      var v2762 = el$$1[scroll]
    }
    if (v2762 > 0) {
      return true;
    }
    JAM.set(el$$1, scroll, 1, JAM.policy.p3);
    introspect(JAM.policy.p4) {
      var v892 = el$$1[scroll]
    }
    has = v892 > 0;
    JAM.set(el$$1, scroll, 0, JAM.policy.p3);
    return has;
  }
  function v394(instance, name$$61, args$$8) {
    var i$$100;
    var v893 = instance.plugins;
    introspect(JAM.policy.p4) {
      var set$$10 = v893[name$$61]
    }
    var v3961 = !set$$10;
    if (!v3961) {
      var v5411 = instance.element;
      introspect(JAM.policy.p4) {
        var v5199 = v5411[0]
      }
      v3961 = !v5199.parentNode;
    }
    var v2763 = v3961;
    if (!v2763) {
      var v5412 = instance.element;
      introspect(JAM.policy.p4) {
        var v5200 = v5412[0]
      }
      v2763 = v5200.parentNode.nodeType === 11;
    }
    if (v2763) {
      return;
    }
    i$$100 = 0;
    var v898 = i$$100 < set$$10.length;
    for (;v898;) {
      var v2765 = instance.options;
      introspect(JAM.policy.p4) {
        var v3964 = set$$10[i$$100]
      }
      introspect(JAM.policy.p4) {
        var v2766 = v3964[0]
      }
      introspect(JAM.policy.p4) {
        var v897 = v2765[v2766]
      }
      if (v897) {
        introspect(JAM.policy.p4) {
          var v2767 = set$$10[i$$100]
        }
        introspect(JAM.policy.p4) {
          var v895 = v2767[1]
        }
        JAM.call(v895.apply, v895, [instance.element, args$$8]);
      }
      i$$100 = i$$100 + 1;
      v898 = i$$100 < set$$10.length;
    }
    return;
  }
  function v393(module, option$$1, set$$9) {
    var i$$99;
    var v2769 = $$$1.ui;
    introspect(JAM.policy.p4) {
      var v899 = v2769[module]
    }
    var proto$$1 = v899.prototype;
    for (i$$99 in set$$9) {
      var v900 = proto$$1.plugins;
      var v3965 = proto$$1.plugins;
      introspect(JAM.policy.p4) {
        var v2770 = v3965[i$$99]
      }
      if (!v2770) {
        v2770 = [];
      }
      JAM.set(v900, i$$99, v2770, JAM.policy.p3);
      var v2771 = proto$$1.plugins;
      introspect(JAM.policy.p4) {
        var v901 = v2771[i$$99]
      }
      introspect(JAM.policy.p4) {
        var v2772 = set$$9[i$$99]
      }
      JAM.call(v901.push, v901, [[option$$1, v2772]]);
    }
    return;
  }
  function v392() {
    return JAM.call(this.unbind, this, [".ui-disableSelection"]);
  }
  function v391() {
    function v390(event$$10) {
      event$$10.preventDefault();
      return;
    }
    var v3967;
    if ($$$1.support.selectstart) {
      v3967 = "selectstart";
    } else {
      v3967 = "mousedown";
    }
    return JAM.call(this.bind, this, [v3967 + ".ui-disableSelection", v390]);
  }
  function v389(removeData) {
    function v388(key$$21) {
      if (arguments.length) {
        return JAM.call(removeData.call, removeData, [this, JAM.call($$$1.camelCase, $$$1, [key$$21])]);
      } else {
        return JAM.call(removeData.call, removeData, [this]);
      }
      return;
    }
    return v388;
  }
  function v387(selector$$21) {
    var v2774;
    if (selector$$21 == null) {
      v2774 = this.prevObject;
    } else {
      var v3968 = this.prevObject;
      v2774 = JAM.call(v3968.filter, v3968, [selector$$21]);
    }
    return JAM.call(this.add, this, [v2774]);
  }
  function v386(i$$98, name$$60) {
    function v385(size$$7, margin$$2) {
      function v384() {
        var v907 = JAM.call($$$1, null, [this]);
        JAM.call(v907.css, v907, [type$$66, reduce(this, size$$7, true, margin$$2) + "px"]);
        return;
      }
      if (typeof size$$7 !== "number") {
        var v2777 = "outer" + name$$60;
        introspect(JAM.policy.p4) {
          var v909 = orig$$3[v2777]
        }
        return JAM.call(v909.call, v909, [this, size$$7]);
      }
      return JAM.call(this.each, this, [v384]);
    }
    function v383(size$$6) {
      function v382() {
        var v911 = JAM.call($$$1, null, [this]);
        JAM.call(v911.css, v911, [type$$66, reduce(this, size$$6) + "px"]);
        return;
      }
      if (size$$6 === undefined$$2) {
        var v2779 = "inner" + name$$60;
        introspect(JAM.policy.p4) {
          var v913 = orig$$3[v2779]
        }
        return JAM.call(v913.call, v913, [this]);
      }
      return JAM.call(this.each, this, [v382]);
    }
    function reduce(elem$$127, size$$5, border$$2, margin$$1) {
      function v381() {
        var v2780 = size$$5;
        var v3970 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "padding" + this]));
        if (!v3970) {
          v3970 = 0;
        }
        size$$5 = v2780 - v3970;
        if (border$$2) {
          var v2782 = size$$5;
          var v3971 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "border" + this + "Width"]));
          if (!v3971) {
            v3971 = 0;
          }
          size$$5 = v2782 - v3971;
        }
        if (margin$$1) {
          var v2784 = size$$5;
          var v3972 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "margin" + this]));
          if (!v3972) {
            v3972 = 0;
          }
          size$$5 = v2784 - v3972;
        }
        return;
      }
      JAM.call($$$1.each, $$$1, [side, v381]);
      return size$$5;
    }
    var v915;
    if (name$$60 === "Width") {
      v915 = ["Left", "Right"];
    } else {
      v915 = ["Top", "Bottom"];
    }
    var side = v915;
    var type$$66 = name$$60.toLowerCase();
    var orig$$3 = {innerWidth:$$$1.fn.innerWidth, innerHeight:$$$1.fn.innerHeight, outerWidth:$$$1.fn.outerWidth, outerHeight:$$$1.fn.outerHeight};
    JAM.set($$$1.fn, "inner" + name$$60, v383, JAM.policy.p3);
    JAM.set($$$1.fn, "outer" + name$$60, v385, JAM.policy.p3);
    return;
  }
  function v380(element$$5) {
    var tabIndex = JAM.call($$$1.attr, $$$1, [element$$5, "tabindex"]);
    var isTabIndexNaN = isNaN(tabIndex);
    var v2791 = isTabIndexNaN;
    if (!v2791) {
      v2791 = tabIndex >= 0;
    }
    var v924 = v2791;
    if (v924) {
      v924 = focusable(element$$5, !isTabIndexNaN);
    }
    return v924;
  }
  function v379(element$$4) {
    return focusable(element$$4, !isNaN(JAM.call($$$1.attr, $$$1, [element$$4, "tabindex"])));
  }
  function v378(elem$$126, i$$97, match$$37) {
    introspect(JAM.policy.p4) {
      var v3975 = match$$37[3]
    }
    return!!JAM.call($$$1.data, $$$1, [elem$$126, v3975]);
  }
  function v377(dataName) {
    function v376(elem$$125) {
      return!!JAM.call($$$1.data, $$$1, [elem$$125, dataName]);
    }
    return v376;
  }
  function v375() {
    function v374() {
      if (runiqueId.test(this.id)) {
        var v928 = JAM.call($$$1, null, [this]);
        JAM.call(v928.removeAttr, v928, ["id"]);
      }
      return;
    }
    return JAM.call(this.each, this, [v374]);
  }
  function v373() {
    function v372() {
      if (!this.id) {
        this.id = "ui-id-" + (uuid$$1 = uuid$$1 + 1);
      }
      return;
    }
    return JAM.call(this.each, this, [v372]);
  }
  function v371(zIndex) {
    if (zIndex !== undefined$$2) {
      return JAM.call(this.css, this, ["zIndex", zIndex]);
    }
    if (this.length) {
      introspect(JAM.policy.p4) {
        var v933 = this[0]
      }
      var elem$$124 = JAM.call($$$1, null, [v933]);
      var position;
      var value$$45;
      var v2798 = elem$$124.length;
      if (v2798) {
        introspect(JAM.policy.p4) {
          var v3976 = elem$$124[0]
        }
        v2798 = v3976 !== document;
      }
      var v937 = v2798;
      for (;v937;) {
        position = JAM.call(elem$$124.css, elem$$124, ["position"]);
        var v3977 = position === "absolute";
        if (!v3977) {
          v3977 = position === "relative";
        }
        var v2799 = v3977;
        if (!v2799) {
          v2799 = position === "fixed";
        }
        if (v2799) {
          value$$45 = parseInt(JAM.call(elem$$124.css, elem$$124, ["zIndex"]), 10);
          var v2800 = !isNaN(value$$45);
          if (v2800) {
            v2800 = value$$45 !== 0;
          }
          if (v2800) {
            return value$$45;
          }
        }
        elem$$124 = elem$$124.parent();
        var v2801 = elem$$124.length;
        if (v2801) {
          introspect(JAM.policy.p4) {
            var v3980 = elem$$124[0]
          }
          v2801 = v3980 !== document;
        }
        v937 = v2801;
      }
    }
    return 0;
  }
  function v370() {
    function v369() {
      return/(auto|scroll)/.test(JAM.call($$$1.css, $$$1, [this, "overflow"]) + JAM.call($$$1.css, $$$1, [this, "overflow-y"]) + JAM.call($$$1.css, $$$1, [this, "overflow-x"]));
    }
    function v368() {
      var v940 = /(relative|absolute|fixed)/.test(JAM.call($$$1.css, $$$1, [this, "position"]));
      if (v940) {
        v940 = /(auto|scroll)/.test(JAM.call($$$1.css, $$$1, [this, "overflow"]) + JAM.call($$$1.css, $$$1, [this, "overflow-y"]) + JAM.call($$$1.css, $$$1, [this, "overflow-x"]));
      }
      return v940;
    }
    var scrollParent;
    var v3985 = $$$1.ui.ie;
    if (v3985) {
      v3985 = /(static|relative)/.test(JAM.call(this.css, this, ["position"]));
    }
    var v2806 = v3985;
    if (!v2806) {
      v2806 = /absolute/.test(JAM.call(this.css, this, ["position"]));
    }
    if (v2806) {
      var v2807 = this.parents();
      var v941 = JAM.call(v2807.filter, v2807, [v368]);
      scrollParent = JAM.call(v941.eq, v941, [0]);
    } else {
      var v2808 = this.parents();
      var v942 = JAM.call(v2808.filter, v2808, [v369]);
      scrollParent = JAM.call(v942.eq, v942, [0]);
    }
    var v944;
    var v3988 = /fixed/.test(JAM.call(this.css, this, ["position"]));
    if (!v3988) {
      v3988 = !scrollParent.length;
    }
    if (v3988) {
      v944 = JAM.call($$$1, null, [document]);
    } else {
      v944 = scrollParent;
    }
    return v944;
  }
  function v367(delay$$3, fn$$18) {
    function v366() {
      function v365() {
        JAM.call($$$1, null, [elem$$123]).focus();
        if (fn$$18) {
          JAM.call(fn$$18.call, fn$$18, [elem$$123]);
        }
        return;
      }
      var elem$$123 = this;
      JAM.call(setTimeout, null, [v365, delay$$3]);
      return;
    }
    var v946;
    if (typeof delay$$3 === "number") {
      v946 = JAM.call(this.each, this, [v366]);
    } else {
      var v2810 = this._focus;
      v946 = JAM.call(v2810.apply, v2810, [this, arguments]);
    }
    return v946;
  }
  function focusable(element$$2, isTabIndexNotNaN) {
    var map;
    var mapName;
    var img$$2;
    var nodeName$$1 = element$$2.nodeName.toLowerCase();
    if ("area" === nodeName$$1) {
      map = element$$2.parentNode;
      mapName = map.name;
      var v3990 = !element$$2.href;
      if (!v3990) {
        v3990 = !mapName;
      }
      var v2812 = v3990;
      if (!v2812) {
        v2812 = map.nodeName.toLowerCase() !== "map";
      }
      if (v2812) {
        return false;
      }
      var v949 = JAM.call($$$1, null, ["img[usemap=#" + mapName + "]"]);
      introspect(JAM.policy.p4) {
        img$$2 = v949[0];
      }
      var v950 = !!img$$2;
      if (v950) {
        v950 = visible(img$$2);
      }
      return v950;
    }
    var v2815;
    if (/input|select|textarea|button|object/.test(nodeName$$1)) {
      v2815 = !element$$2.disabled;
    } else {
      var v3995;
      if ("a" === nodeName$$1) {
        var v4793 = element$$2.href;
        if (!v4793) {
          v4793 = isTabIndexNotNaN;
        }
        v3995 = v4793;
      } else {
        v3995 = isTabIndexNotNaN;
      }
      v2815 = v3995;
    }
    var v952 = v2815;
    if (v952) {
      v952 = visible(element$$2);
    }
    return v952;
  }
  function visible(element$$3) {
    function v364() {
      return JAM.call($$$1.css, $$$1, [this, "visibility"]) === "hidden";
    }
    var v2816 = $$$1.expr.filters;
    var v954 = JAM.call(v2816.visible, v2816, [element$$3]);
    if (v954) {
      var v4795 = JAM.call($$$1, null, [element$$3]).parents().addBack();
      v954 = !JAM.call(v4795.filter, v4795, [v364]).length;
    }
    return v954;
  }
  var uuid$$1 = 0;
  var runiqueId = /^ui-id-\d+$/;
  var v955 = $$$1.ui;
  if (!v955) {
    v955 = {};
  }
  $$$1.ui = v955;
  if ($$$1.ui.version) {
    return;
  }
  JAM.call($$$1.extend, $$$1, [$$$1.ui, {version:"1.10.1", keyCode:{BACKSPACE:8, COMMA:188, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, LEFT:37, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SPACE:32, TAB:9, UP:38}}]);
  var v959 = $$$1.fn;
  JAM.call(v959.extend, v959, [{_focus:$$$1.fn.focus, focus:v367, scrollParent:v370, zIndex:v371, uniqueId:v373, removeUniqueId:v375}]);
  var v961 = $$$1.expr[":"];
  var v4000;
  if ($$$1.expr.createPseudo) {
    var v4796 = $$$1.expr;
    v4000 = JAM.call(v4796.createPseudo, v4796, [v377]);
  } else {
    v4000 = v378;
  }
  JAM.call($$$1.extend, $$$1, [v961, {data:v4000, focusable:v379, tabbable:v380}]);
  var v4798 = JAM.call($$$1, null, ["<a>"]);
  if (!JAM.call(v4798.outerWidth, v4798, [1]).jquery) {
    JAM.call($$$1.each, $$$1, [["Width", "Height"], v386]);
  }
  if (!$$$1.fn.addBack) {
    $$$1.fn.addBack = v387;
  }
  var v4799 = JAM.call($$$1, null, ["<a>"]);
  var v4003 = JAM.call(v4799.data, v4799, ["a-b", "a"]);
  var v2826 = JAM.call(v4003.removeData, v4003, ["a-b"]);
  if (JAM.call(v2826.data, v2826, ["a-b"])) {
    var v967 = $$$1.fn;
    var v5573 = v389($$$1.fn.removeData);
    v967.removeData = v5573;
  }
  $$$1.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  $$$1.support.selectstart = "onselectstart" in document.createElement("div");
  var v971 = $$$1.fn;
  JAM.call(v971.extend, v971, [{disableSelection:v391, enableSelection:v392}]);
  JAM.call($$$1.extend, $$$1, [$$$1.ui, {plugin:{add:v393, call:v394}, hasScroll:v395}]);
  return;
}
function v363(window$$1, undefined$$1) {
  function v362(i$$95, name$$59) {
    function v361(size$$4) {
      function v360(i$$96) {
        var self$$14 = jQuery$$1(this);
        JAM.call(JAM.get(self$$14, type$$65, JAM.policy.p4), self$$14, [JAM.call(size$$4.call, size$$4, [this, i$$96, JAM.call(JAM.get(self$$14, type$$65, JAM.policy.p4), self$$14, [])])]);
        return;
      }
      introspect(JAM.policy.p4) {
        var elem$$122 = this[0]
      }
      if (!elem$$122) {
        var v976;
        if (size$$4 == null) {
          v976 = null;
        } else {
          v976 = this;
        }
        return v976;
      }
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [size$$4])) {
        return JAM.call(this.each, this, [v360]);
      }
      var v979;
      var v4006 = "scrollTo" in elem$$122;
      if (v4006) {
        v4006 = elem$$122.document;
      }
      if (v4006) {
        var v4007 = elem$$122.document.compatMode === "CSS1Compat";
        if (v4007) {
          var v4802 = elem$$122.document.documentElement;
          var v4803 = "client" + name$$59;
          introspect(JAM.policy.p4) {
            v4007 = v4802[v4803];
          }
        }
        var v2833 = v4007;
        if (!v2833) {
          var v4008 = elem$$122.document.body;
          var v4009 = "client" + name$$59;
          introspect(JAM.policy.p4) {
            v2833 = v4008[v4009];
          }
        }
        v979 = v2833;
      } else {
        var v2834;
        if (elem$$122.nodeType === 9) {
          var v4806 = elem$$122.documentElement;
          var v4807 = "client" + name$$59;
          introspect(JAM.policy.p4) {
            var v4011 = v4806[v4807]
          }
          var v4808 = elem$$122.body;
          var v4809 = "scroll" + name$$59;
          introspect(JAM.policy.p4) {
            var v4012 = v4808[v4809]
          }
          var v4810 = elem$$122.documentElement;
          var v4811 = "scroll" + name$$59;
          introspect(JAM.policy.p4) {
            var v4013 = v4810[v4811]
          }
          var v4812 = elem$$122.body;
          var v4813 = "offset" + name$$59;
          introspect(JAM.policy.p4) {
            var v4014 = v4812[v4813]
          }
          var v4814 = elem$$122.documentElement;
          var v4815 = "offset" + name$$59;
          introspect(JAM.policy.p4) {
            var v4015 = v4814[v4815]
          }
          v2834 = JAM.call(Math.max, Math, [v4011, v4012, v4013, v4014, v4015]);
        } else {
          var v4016;
          if (size$$4 === undefined$$1) {
            v4016 = JAM.call(jQuery$$1.css, jQuery$$1, [elem$$122, type$$65]);
          } else {
            var v5211;
            if (typeof size$$4 === "string") {
              v5211 = size$$4;
            } else {
              v5211 = size$$4 + "px";
            }
            v4016 = JAM.call(this.css, this, [type$$65, v5211]);
          }
          v2834 = v4016;
        }
        v979 = v2834;
      }
      return v979;
    }
    function v359(margin) {
      var v980;
      introspect(JAM.policy.p4) {
        var v2838 = this[0]
      }
      if (v2838) {
        introspect(JAM.policy.p4) {
          var v2836 = this[0]
        }
        var v4018;
        if (margin) {
          v4018 = "margin";
        } else {
          v4018 = "border";
        }
        v980 = JAM.call(jQuery$$1.css, jQuery$$1, [v2836, type$$65, false, v4018]);
      } else {
        v980 = null;
      }
      return v980;
    }
    function v358() {
      var v981;
      introspect(JAM.policy.p4) {
        var v2840 = this[0]
      }
      if (v2840) {
        introspect(JAM.policy.p4) {
          var v2839 = this[0]
        }
        v981 = JAM.call(jQuery$$1.css, jQuery$$1, [v2839, type$$65, false, "padding"]);
      } else {
        v981 = null;
      }
      return v981;
    }
    var type$$65 = name$$59.toLowerCase();
    JAM.set(jQuery$$1.fn, "inner" + name$$59, v358, JAM.policy.p3);
    JAM.set(jQuery$$1.fn, "outer" + name$$59, v359, JAM.policy.p3);
    JAM.set(jQuery$$1.fn, type$$65, v361, JAM.policy.p3);
    return;
  }
  function v357(i$$94, name$$58) {
    function v356(val$$7) {
      function v355() {
        win = getWindow(this);
        if (win) {
          var v2841;
          if (!i$$94) {
            v2841 = val$$7;
          } else {
            v2841 = jQuery$$1(win).scrollLeft();
          }
          var v987 = v2841;
          var v2842;
          if (i$$94) {
            v2842 = val$$7;
          } else {
            v2842 = jQuery$$1(win).scrollTop();
          }
          win.scrollTo(v987, v2842);
        } else {
          JAM.set(this, method$$1, val$$7, JAM.policy.p3);
        }
        return;
      }
      introspect(JAM.policy.p4) {
        var elem$$121 = this[0]
      }
      var win;
      if (!elem$$121) {
        return null;
      }
      if (val$$7 !== undefined$$1) {
        return JAM.call(this.each, this, [v355]);
      } else {
        win = getWindow(elem$$121);
        var v990;
        if (win) {
          var v2843;
          if ("pageXOffset" in win) {
            var v4818;
            if (i$$94) {
              v4818 = "pageYOffset";
            } else {
              v4818 = "pageXOffset";
            }
            var v4022 = v4818;
            introspect(JAM.policy.p4) {
              v2843 = win[v4022];
            }
          } else {
            var v4819 = jQuery$$1.support.boxModel;
            if (v4819) {
              var v5213 = win.document.documentElement;
              introspect(JAM.policy.p4) {
                v4819 = v5213[method$$1];
              }
            }
            var v4023 = v4819;
            if (!v4023) {
              var v4820 = win.document.body;
              introspect(JAM.policy.p4) {
                v4023 = v4820[method$$1];
              }
            }
            v2843 = v4023;
          }
          v990 = v2843;
        } else {
          introspect(JAM.policy.p4) {
            v990 = elem$$121[method$$1];
          }
        }
        return v990;
      }
      return;
    }
    var method$$1 = "scroll" + name$$58;
    JAM.set(jQuery$$1.fn, method$$1, v356, JAM.policy.p3);
    return;
  }
  function v354() {
    function v353() {
      var v993 = this.offsetParent;
      if (!v993) {
        v993 = document$$1.body;
      }
      var offsetParent$$2 = v993;
      var v2845 = offsetParent$$2;
      if (v2845) {
        var v4025 = !/^body|html$/i.test(offsetParent$$2.nodeName);
        if (v4025) {
          v4025 = JAM.call(jQuery$$1.css, jQuery$$1, [offsetParent$$2, "position"]) === "static";
        }
        v2845 = v4025;
      }
      var v994 = v2845;
      for (;v994;) {
        offsetParent$$2 = offsetParent$$2.offsetParent;
        var v2846 = offsetParent$$2;
        if (v2846) {
          var v4026 = !/^body|html$/i.test(offsetParent$$2.nodeName);
          if (v4026) {
            v4026 = JAM.call(jQuery$$1.css, jQuery$$1, [offsetParent$$2, "position"]) === "static";
          }
          v2846 = v4026;
        }
        v994 = v2846;
      }
      return offsetParent$$2;
    }
    return JAM.call(this.map, this, [v353]);
  }
  function v352() {
    introspect(JAM.policy.p4) {
      var v2847 = this[0]
    }
    if (!v2847) {
      return null;
    }
    introspect(JAM.policy.p4) {
      var elem$$120 = this[0]
    }
    var offsetParent$$1 = this.offsetParent();
    var offset$$8 = this.offset();
    var v996;
    introspect(JAM.policy.p4) {
      var v4826 = offsetParent$$1[0]
    }
    if (/^body|html$/i.test(v4826.nodeName)) {
      v996 = {top:0, left:0};
    } else {
      v996 = offsetParent$$1.offset();
    }
    var parentOffset = v996;
    var v997 = offset$$8;
    var v4028 = v997.top;
    var v4827 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$120, "marginTop", true]));
    if (!v4827) {
      v4827 = 0;
    }
    v997.top = v4028 - v4827;
    var v998 = offset$$8;
    var v4030 = v998.left;
    var v4828 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$120, "marginLeft", true]));
    if (!v4828) {
      v4828 = 0;
    }
    v998.left = v4030 - v4828;
    var v999 = parentOffset;
    var v4032 = v999.top;
    introspect(JAM.policy.p4) {
      var v5417 = offsetParent$$1[0]
    }
    var v4829 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [v5417, "borderTopWidth", true]));
    if (!v4829) {
      v4829 = 0;
    }
    v999.top = v4032 + v4829;
    var v1000 = parentOffset;
    var v4034 = v1000.left;
    introspect(JAM.policy.p4) {
      var v5418 = offsetParent$$1[0]
    }
    var v4830 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [v5418, "borderLeftWidth", true]));
    if (!v4830) {
      v4830 = 0;
    }
    v1000.left = v4034 + v4830;
    return{top:offset$$8.top - parentOffset.top, left:offset$$8.left - parentOffset.left};
  }
  function v351(elem$$119, options$$7, i$$93) {
    if (/static/.test(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "position"]))) {
      elem$$119.style.position = "relative";
    }
    var curElem = jQuery$$1(elem$$119);
    var curOffset = curElem.offset();
    var v1005 = parseInt(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "top", true]), 10);
    if (!v1005) {
      v1005 = 0;
    }
    var curTop = v1005;
    var v1006 = parseInt(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "left", true]), 10);
    if (!v1006) {
      v1006 = 0;
    }
    var curLeft = v1006;
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [options$$7])) {
      options$$7 = JAM.call(options$$7.call, options$$7, [elem$$119, i$$93, curOffset]);
    }
    var props$$3 = {top:options$$7.top - curOffset.top + curTop, left:options$$7.left - curOffset.left + curLeft};
    if ("using" in options$$7) {
      var v1010 = options$$7.using;
      JAM.call(v1010.call, v1010, [elem$$119, props$$3]);
    } else {
      JAM.call(curElem.css, curElem, [props$$3]);
    }
    return;
  }
  function v350(body$$4) {
    var top$$3 = body$$4.offsetTop;
    var left$$6 = body$$4.offsetLeft;
    jQuery$$1.offset.initialize();
    if (jQuery$$1.offset.doesNotIncludeMarginInBodyOffset) {
      var v2861 = top$$3;
      var v4040 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$4, "marginTop", true]));
      if (!v4040) {
        v4040 = 0;
      }
      top$$3 = v2861 + v4040;
      var v2863 = left$$6;
      var v4041 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$4, "marginLeft", true]));
      if (!v4041) {
        v4041 = 0;
      }
      left$$6 = v2863 + v4041;
    }
    return{top:top$$3, left:left$$6};
  }
  function v349() {
    var body$$3 = document$$1.body;
    var container = document$$1.createElement("div");
    var innerDiv;
    var checkDiv;
    var table$$1;
    var td;
    var v1014 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$3, "marginTop", true]));
    if (!v1014) {
      v1014 = 0;
    }
    var bodyMarginTop = v1014;
    var html$$4 = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    JAM.call(jQuery$$1.extend, jQuery$$1, [container.style, {position:"absolute", top:0, left:0, margin:0, border:0, width:"1px", height:"1px", visibility:"hidden"}]);
    JAM.set(container, "innerHTML", html$$4);
    JAM.call(body$$3.insertBefore, body$$3, [container, body$$3.firstChild]);
    innerDiv = container.firstChild;
    checkDiv = innerDiv.firstChild;
    td = innerDiv.nextSibling.firstChild.firstChild;
    this.doesNotAddBorder = checkDiv.offsetTop !== 5;
    this.doesAddBorderForTableAndCells = td.offsetTop === 5;
    checkDiv.style.position = "fixed";
    checkDiv.style.top = "20px";
    var v1021 = checkDiv.offsetTop === 20;
    if (!v1021) {
      v1021 = checkDiv.offsetTop === 15;
    }
    this.supportsFixedPosition = v1021;
    checkDiv.style.position = checkDiv.style.top = "";
    innerDiv.style.overflow = "hidden";
    innerDiv.style.position = "relative";
    this.subtractsBorderForOverflowNotVisible = checkDiv.offsetTop === -5;
    this.doesNotIncludeMarginInBodyOffset = body$$3.offsetTop !== bodyMarginTop;
    body$$3.removeChild(container);
    body$$3 = container = innerDiv = checkDiv = table$$1 = td = null;
    jQuery$$1.offset.initialize = jQuery$$1.noop;
    return;
  }
  function v348(options$$6) {
    function v347(i$$92) {
      var v1026 = jQuery$$1.offset;
      JAM.call(v1026.setOffset, v1026, [this, options$$6, i$$92]);
      return;
    }
    introspect(JAM.policy.p4) {
      var elem$$118 = this[0]
    }
    if (options$$6) {
      return JAM.call(this.each, this, [v347]);
    }
    var v2876 = !elem$$118;
    if (!v2876) {
      v2876 = !elem$$118.ownerDocument;
    }
    if (v2876) {
      return null;
    }
    if (elem$$118 === elem$$118.ownerDocument.body) {
      var v1028 = jQuery$$1.offset;
      return JAM.call(v1028.bodyOffset, v1028, [elem$$118]);
    }
    jQuery$$1.offset.initialize();
    var offsetParent = elem$$118.offsetParent;
    var prevOffsetParent = elem$$118;
    var doc$$4 = elem$$118.ownerDocument;
    var computedStyle$$1;
    var docElem$$1 = doc$$4.documentElement;
    var body$$2 = doc$$4.body;
    var defaultView$$1 = doc$$4.defaultView;
    var v1031;
    if (defaultView$$1) {
      v1031 = defaultView$$1.getComputedStyle(elem$$118, null);
    } else {
      v1031 = elem$$118.currentStyle;
    }
    var prevComputedStyle = v1031;
    var top$$2 = elem$$118.offsetTop;
    var left$$5 = elem$$118.offsetLeft;
    var v4045 = elem$$118 = elem$$118.parentNode;
    if (v4045) {
      v4045 = elem$$118 !== body$$2;
    }
    var v2878 = v4045;
    if (v2878) {
      v2878 = elem$$118 !== docElem$$1;
    }
    var v1037 = v2878;
    for (;v1037;) {
      var v2879 = jQuery$$1.offset.supportsFixedPosition;
      if (v2879) {
        v2879 = prevComputedStyle.position === "fixed";
      }
      if (v2879) {
        break;
      }
      var v1033;
      if (defaultView$$1) {
        v1033 = defaultView$$1.getComputedStyle(elem$$118, null);
      } else {
        v1033 = elem$$118.currentStyle;
      }
      computedStyle$$1 = v1033;
      top$$2 = top$$2 - elem$$118.scrollTop;
      left$$5 = left$$5 - elem$$118.scrollLeft;
      if (elem$$118 === offsetParent) {
        top$$2 = top$$2 + elem$$118.offsetTop;
        left$$5 = left$$5 + elem$$118.offsetLeft;
        var v2884 = jQuery$$1.offset.doesNotAddBorder;
        if (v2884) {
          var v4835 = jQuery$$1.offset.doesAddBorderForTableAndCells;
          if (v4835) {
            v4835 = /^t(able|d|h)$/i.test(elem$$118.nodeName);
          }
          v2884 = !v4835;
        }
        if (v2884) {
          var v2885 = top$$2;
          var v4050 = parseFloat(computedStyle$$1.borderTopWidth);
          if (!v4050) {
            v4050 = 0;
          }
          top$$2 = v2885 + v4050;
          var v2887 = left$$5;
          var v4051 = parseFloat(computedStyle$$1.borderLeftWidth);
          if (!v4051) {
            v4051 = 0;
          }
          left$$5 = v2887 + v4051;
        }
        prevOffsetParent = offsetParent;
        offsetParent = elem$$118.offsetParent;
      }
      var v2889 = jQuery$$1.offset.subtractsBorderForOverflowNotVisible;
      if (v2889) {
        v2889 = computedStyle$$1.overflow !== "visible";
      }
      if (v2889) {
        var v2890 = top$$2;
        var v4054 = parseFloat(computedStyle$$1.borderTopWidth);
        if (!v4054) {
          v4054 = 0;
        }
        top$$2 = v2890 + v4054;
        var v2892 = left$$5;
        var v4055 = parseFloat(computedStyle$$1.borderLeftWidth);
        if (!v4055) {
          v4055 = 0;
        }
        left$$5 = v2892 + v4055;
      }
      prevComputedStyle = computedStyle$$1;
      var v4056 = elem$$118 = elem$$118.parentNode;
      if (v4056) {
        v4056 = elem$$118 !== body$$2;
      }
      var v2894 = v4056;
      if (v2894) {
        v2894 = elem$$118 !== docElem$$1;
      }
      v1037 = v2894;
    }
    var v2895 = prevComputedStyle.position === "relative";
    if (!v2895) {
      v2895 = prevComputedStyle.position === "static";
    }
    if (v2895) {
      top$$2 = top$$2 + body$$2.offsetTop;
      left$$5 = left$$5 + body$$2.offsetLeft;
    }
    var v2898 = jQuery$$1.offset.supportsFixedPosition;
    if (v2898) {
      v2898 = prevComputedStyle.position === "fixed";
    }
    if (v2898) {
      top$$2 = top$$2 + JAM.call(Math.max, Math, [docElem$$1.scrollTop, body$$2.scrollTop]);
      left$$5 = left$$5 + JAM.call(Math.max, Math, [docElem$$1.scrollLeft, body$$2.scrollLeft]);
    }
    return{top:top$$2, left:left$$5};
  }
  function v346(options$$5) {
    function v345(i$$91) {
      var v1040 = jQuery$$1.offset;
      JAM.call(v1040.setOffset, v1040, [this, options$$5, i$$91]);
      return;
    }
    introspect(JAM.policy.p4) {
      var elem$$117 = this[0]
    }
    if (options$$5) {
      return JAM.call(this.each, this, [v345]);
    }
    var v2903 = !elem$$117;
    if (!v2903) {
      v2903 = !elem$$117.ownerDocument;
    }
    if (v2903) {
      return null;
    }
    if (elem$$117 === elem$$117.ownerDocument.body) {
      var v1042 = jQuery$$1.offset;
      return JAM.call(v1042.bodyOffset, v1042, [elem$$117]);
    }
    var box = elem$$117.getBoundingClientRect();
    var doc$$3 = elem$$117.ownerDocument;
    var body$$1 = doc$$3.body;
    var docElem = doc$$3.documentElement;
    var v2905 = docElem.clientTop;
    if (!v2905) {
      v2905 = body$$1.clientTop;
    }
    var v1044 = v2905;
    if (!v1044) {
      v1044 = 0;
    }
    var clientTop = v1044;
    var v2907 = docElem.clientLeft;
    if (!v2907) {
      v2907 = body$$1.clientLeft;
    }
    var v1045 = v2907;
    if (!v1045) {
      v1045 = 0;
    }
    var clientLeft = v1045;
    var v2909 = box.top;
    var v4844 = self.pageYOffset;
    if (!v4844) {
      var v5227 = jQuery$$1.support.boxModel;
      if (v5227) {
        v5227 = docElem.scrollTop;
      }
      v4844 = v5227;
    }
    var v4071 = v4844;
    if (!v4071) {
      v4071 = body$$1.scrollTop;
    }
    var top$$1 = v2909 + v4071 - clientTop;
    var v2911 = box.left;
    var v4846 = self.pageXOffset;
    if (!v4846) {
      var v5229 = jQuery$$1.support.boxModel;
      if (v5229) {
        v5229 = docElem.scrollLeft;
      }
      v4846 = v5229;
    }
    var v4072 = v4846;
    if (!v4072) {
      v4072 = body$$1.scrollLeft;
    }
    var left$$4 = v2911 + v4072 - clientLeft;
    return{top:top$$1, left:left$$4};
  }
  function v344(elem$$116) {
    function v343(fn$$17) {
      return elem$$116 === fn$$17.elem;
    }
    return JAM.call(jQuery$$1.grep, jQuery$$1, [jQuery$$1.timers, v343]).length;
  }
  function v342(fx$$1) {
    var v2914 = fx$$1.elem.style;
    if (v2914) {
      var v4848 = fx$$1.elem.style;
      var v4849 = fx$$1.prop;
      introspect(JAM.policy.p4) {
        var v4074 = v4848[v4849]
      }
      v2914 = v4074 != null;
    }
    if (v2914) {
      var v1050 = fx$$1.elem.style;
      var v1051 = fx$$1.prop;
      var v4075;
      var v5232 = fx$$1.prop === "width";
      if (!v5232) {
        v5232 = fx$$1.prop === "height";
      }
      if (v5232) {
        v4075 = JAM.call(Math.max, Math, [0, fx$$1.now]);
      } else {
        v4075 = fx$$1.now;
      }
      JAM.set(v1050, v1051, v4075 + fx$$1.unit, JAM.policy.p3);
    } else {
      JAM.set(fx$$1.elem, fx$$1.prop, JAM.get(fx$$1, "now", JAM.policy.p3), JAM.policy.p3);
    }
    return;
  }
  function v341(fx) {
    JAM.call(jQuery$$1.style, jQuery$$1, [fx.elem, "opacity", fx.now]);
    return;
  }
  function v340() {
    clearInterval(timerId);
    timerId = null;
    return;
  }
  function v339() {
    var timers$$1 = jQuery$$1.timers;
    var i$$90 = 0;
    var v1059 = i$$90 < timers$$1.length;
    for (;v1059;) {
      if (!JAM.call(JAM.get(timers$$1, i$$90, JAM.policy.p4), timers$$1, [])) {
        var v1057 = i$$90;
        i$$90 = i$$90 - 1;
        JAM.call(timers$$1.splice, timers$$1, [v1057, 1]);
      }
      i$$90 = i$$90 + 1;
      v1059 = i$$90 < timers$$1.length;
    }
    if (!timers$$1.length) {
      jQuery$$1.fx.stop();
    }
    return;
  }
  function v338(gotoEnd$$2) {
    var t$$1 = now();
    var done$$2 = true;
    var v2922 = gotoEnd$$2;
    if (!v2922) {
      v2922 = t$$1 >= this.options.duration + this.startTime;
    }
    if (v2922) {
      this.now = this.end;
      this.pos = this.state = 1;
      this.update();
      JAM.set(this.options.curAnim, this.prop, true, JAM.policy.p3);
      var i$$89;
      for (i$$89 in this.options.curAnim) {
        var v4078 = this.options.curAnim;
        introspect(JAM.policy.p4) {
          var v2925 = v4078[i$$89]
        }
        if (v2925 !== true) {
          done$$2 = false;
        }
      }
      if (done$$2) {
        if (this.options.display != null) {
          this.elem.style.overflow = this.options.overflow;
          var old$$7 = JAM.call(jQuery$$1.data, jQuery$$1, [this.elem, "olddisplay"]);
          var v1068 = this.elem.style;
          var v2930;
          if (old$$7) {
            v2930 = old$$7;
          } else {
            v2930 = this.options.display;
          }
          v1068.display = v2930;
          if (JAM.call(jQuery$$1.css, jQuery$$1, [this.elem, "display"]) === "none") {
            this.elem.style.display = "block";
          }
        }
        if (this.options.hide) {
          jQuery$$1(this.elem).hide();
        }
        var v2935 = this.options.hide;
        if (!v2935) {
          v2935 = this.options.show;
        }
        if (v2935) {
          var p$$3;
          for (p$$3 in this.options.curAnim) {
            var v1074 = this.elem;
            var v2937 = this.options.orig;
            introspect(JAM.policy.p4) {
              var v1075 = v2937[p$$3]
            }
            JAM.call(jQuery$$1.style, jQuery$$1, [v1074, p$$3, v1075]);
          }
        }
        var v1078 = this.options.complete;
        JAM.call(v1078.call, v1078, [this.elem]);
      }
      return false;
    } else {
      var n$$5 = t$$1 - this.startTime;
      this.state = n$$5 / this.options.duration;
      var v1082 = this.options.specialEasing;
      if (v1082) {
        var v2941 = this.options.specialEasing;
        var v2942 = this.prop;
        introspect(JAM.policy.p4) {
          v1082 = v2941[v2942];
        }
      }
      var specialEasing = v1082;
      var v1083 = this.options.easing;
      if (!v1083) {
        var v2944;
        if (jQuery$$1.easing.swing) {
          v2944 = "swing";
        } else {
          v2944 = "linear";
        }
        v1083 = v2944;
      }
      var defaultEasing = v1083;
      var v1084 = jQuery$$1.easing;
      var v5574 = JAM.call(JAM.get(v1084, specialEasing || defaultEasing, JAM.policy.p4), v1084, [this.state, n$$5, 0, 1, this.options.duration]);
      this.pos = v5574;
      this.now = this.start + (this.end - this.start) * this.pos;
      this.update();
    }
    return true;
  }
  function v337() {
    var v1091 = this.options.orig;
    var v1092 = this.prop;
    var v5575 = JAM.call(jQuery$$1.style, jQuery$$1, [this.elem, this.prop]);
    JAM.set(v1091, v1092, v5575, JAM.policy.p3);
    this.options.hide = true;
    JAM.call(this.custom, this, [this.cur(), 0]);
    return;
  }
  function v336() {
    var v1095 = this.options.orig;
    var v1096 = this.prop;
    var v5576 = JAM.call(jQuery$$1.style, jQuery$$1, [this.elem, this.prop]);
    JAM.set(v1095, v1096, v5576, JAM.policy.p3);
    this.options.show = true;
    var v2955;
    var v4856 = this.prop === "width";
    if (!v4856) {
      v4856 = this.prop === "height";
    }
    if (v4856) {
      v2955 = 1;
    } else {
      v2955 = 0;
    }
    JAM.call(this.custom, this, [v2955, this.cur()]);
    jQuery$$1(this.elem).show();
    return;
  }
  function v335(from, to$$1, unit$$1) {
    function t(gotoEnd$$1) {
      return JAM.call(self$$13.step, self$$13, [gotoEnd$$1]);
    }
    var v5577 = now();
    this.startTime = v5577;
    this.start = from;
    this.end = to$$1;
    var v2957 = unit$$1;
    if (!v2957) {
      v2957 = this.unit;
    }
    var v1101 = v2957;
    if (!v1101) {
      v1101 = "px";
    }
    this.unit = v1101;
    this.now = this.start;
    this.pos = this.state = 0;
    var self$$13 = this;
    t.elem = this.elem;
    var v4092 = t();
    if (v4092) {
      var v4857 = jQuery$$1.timers;
      v4092 = JAM.call(v4857.push, v4857, [t]);
    }
    var v2959 = v4092;
    if (v2959) {
      v2959 = !timerId;
    }
    if (v2959) {
      timerId = JAM.call(setInterval, null, [jQuery$$1.fx.tick, 13]);
    }
    return;
  }
  function v334(force$$2) {
    var v4858 = this.elem;
    var v4859 = this.prop;
    introspect(JAM.policy.p4) {
      var v4093 = v4858[v4859]
    }
    var v2961 = v4093 != null;
    if (v2961) {
      var v4094 = !this.elem.style;
      if (!v4094) {
        var v5238 = this.elem.style;
        var v5239 = this.prop;
        introspect(JAM.policy.p4) {
          var v4861 = v5238[v5239]
        }
        v4094 = v4861 == null;
      }
      v2961 = v4094;
    }
    if (v2961) {
      var v1104 = this.elem;
      var v1105 = this.prop;
      introspect(JAM.policy.p4) {
        return v1104[v1105];
      }
    }
    var r$$2 = parseFloat(JAM.call(jQuery$$1.css, jQuery$$1, [this.elem, this.prop, force$$2]));
    var v1108;
    var v4095 = r$$2;
    if (v4095) {
      v4095 = r$$2 > -1E4;
    }
    if (v4095) {
      v1108 = r$$2;
    } else {
      var v2964 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [this.elem, this.prop]));
      if (!v2964) {
        v2964 = 0;
      }
      v1108 = v2964;
    }
    return v1108;
  }
  function v333() {
    if (this.options.step) {
      var v1109 = this.options.step;
      JAM.call(v1109.call, v1109, [this.elem, this.now, this]);
    }
    var v4098 = jQuery$$1.fx.step;
    var v4099 = this.prop;
    introspect(JAM.policy.p4) {
      var v2968 = v4098[v4099]
    }
    if (!v2968) {
      v2968 = jQuery$$1.fx.step._default;
    }
    JAM.call(v2968, null, [this]);
    var v4102 = this.prop === "height";
    if (!v4102) {
      v4102 = this.prop === "width";
    }
    var v2969 = v4102;
    if (v2969) {
      v2969 = this.elem.style;
    }
    if (v2969) {
      this.elem.style.display = "block";
    }
    return;
  }
  function v332(elem$$115, options$$4, prop$$7) {
    this.options = options$$4;
    this.elem = elem$$115;
    this.prop = prop$$7;
    if (!options$$4.orig) {
      options$$4.orig = {};
    }
    return;
  }
  function v331(p$$2, n$$4, firstNum$$1, diff$$2) {
    return(-Math.cos(p$$2 * Math.PI) / 2 + .5) * diff$$2 + firstNum$$1;
  }
  function v330(p$$1, n$$3, firstNum, diff$$1) {
    return firstNum + diff$$1 * p$$1;
  }
  function v329(speed$$5, easing$$1, fn$$16) {
    function v328() {
      if (opt$$1.queue !== false) {
        jQuery$$1(this).dequeue();
      }
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [opt$$1.old])) {
        var v1121 = opt$$1.old;
        JAM.call(v1121.call, v1121, [this]);
      }
      return;
    }
    var v1123;
    var v4105 = speed$$5;
    if (v4105) {
      v4105 = typeof speed$$5 === "object";
    }
    if (v4105) {
      v1123 = speed$$5;
    } else {
      var v4872 = fn$$16;
      if (!v4872) {
        var v5241 = !fn$$16;
        if (v5241) {
          v5241 = easing$$1;
        }
        v4872 = v5241;
      }
      var v4106 = v4872;
      if (!v4106) {
        var v4873 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [speed$$5]);
        if (v4873) {
          v4873 = speed$$5;
        }
        v4106 = v4873;
      }
      var v2975 = v4106;
      var v4107 = fn$$16 && easing$$1;
      if (!v4107) {
        var v5243 = easing$$1;
        if (v5243) {
          v5243 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [easing$$1]);
        }
        var v4875 = v5243;
        if (v4875) {
          v4875 = easing$$1;
        }
        v4107 = v4875;
      }
      v1123 = {complete:v2975, duration:speed$$5, easing:v4107};
    }
    var opt$$1 = v1123;
    var v1124;
    if (jQuery$$1.fx.off) {
      v1124 = 0;
    } else {
      var v2978;
      if (typeof opt$$1.duration === "number") {
        v2978 = opt$$1.duration;
      } else {
        var v4878 = jQuery$$1.fx.speeds;
        var v4879 = opt$$1.duration;
        introspect(JAM.policy.p4) {
          var v4109 = v4878[v4879]
        }
        if (!v4109) {
          v4109 = jQuery$$1.fx.speeds._default;
        }
        v2978 = v4109;
      }
      v1124 = v2978;
    }
    opt$$1.duration = v1124;
    opt$$1.old = opt$$1.complete;
    opt$$1.complete = v328;
    return opt$$1;
  }
  function v327(name$$57, props$$2) {
    function v326(speed$$4, callback$$41) {
      return JAM.call(this.animate, this, [props$$2, speed$$4, callback$$41]);
    }
    JAM.set(jQuery$$1.fn, name$$57, v326, JAM.policy.p3);
    return;
  }
  function v325(clearQueue, gotoEnd) {
    function v324() {
      var i$$88 = timers.length - 1;
      var v1128 = i$$88 >= 0;
      for (;v1128;) {
        introspect(JAM.policy.p4) {
          var v4111 = timers[i$$88]
        }
        if (v4111.elem === this) {
          if (gotoEnd) {
            JAM.call(JAM.get(timers, i$$88, JAM.policy.p4), timers, [true]);
          }
          JAM.call(timers.splice, timers, [i$$88, 1]);
        }
        i$$88 = i$$88 - 1;
        v1128 = i$$88 >= 0;
      }
      return;
    }
    var timers = jQuery$$1.timers;
    if (clearQueue) {
      JAM.call(this.queue, this, [[]]);
    }
    JAM.call(this.each, this, [v324]);
    if (!gotoEnd) {
      this.dequeue();
    }
    return this;
  }
  function v323(prop$$6, speed$$3, easing, callback$$40) {
    function v322() {
      function v321(name$$56, val$$6) {
        var e$$30 = JAM.new(jQuery$$1.fx, [self$$12, opt, name$$56]);
        if (rfxtypes.test(val$$6)) {
          var v2981;
          if (val$$6 === "toggle") {
            var v4112;
            if (hidden) {
              v4112 = "show";
            } else {
              v4112 = "hide";
            }
            v2981 = v4112;
          } else {
            v2981 = val$$6;
          }
          JAM.call(JAM.get(e$$30, v2981, JAM.policy.p4), e$$30, [prop$$6]);
        } else {
          var parts$$3 = rfxnum.exec(val$$6);
          var v1132 = JAM.call(e$$30.cur, e$$30, [true]);
          if (!v1132) {
            v1132 = 0;
          }
          var start$$4 = v1132;
          if (parts$$3) {
            introspect(JAM.policy.p4) {
              var v1133 = parts$$3[2]
            }
            var end$$1 = parseFloat(v1133);
            introspect(JAM.policy.p4) {
              var v1134 = parts$$3[3]
            }
            if (!v1134) {
              v1134 = "px";
            }
            var unit = v1134;
            if (unit !== "px") {
              JAM.set(self$$12.style, name$$56, (end$$1 || 1) + unit, JAM.policy.p3);
              start$$4 = (end$$1 || 1) / JAM.call(e$$30.cur, e$$30, [true]) * start$$4;
              JAM.set(self$$12.style, name$$56, start$$4 + unit, JAM.policy.p3);
            }
            introspect(JAM.policy.p4) {
              var v1140 = parts$$3[1]
            }
            if (v1140) {
              var v4114;
              introspect(JAM.policy.p4) {
                var v5247 = parts$$3[1]
              }
              if (v5247 === "-=") {
                v4114 = -1;
              } else {
                v4114 = 1;
              }
              end$$1 = v4114 * end$$1 + start$$4;
            }
            JAM.call(e$$30.custom, e$$30, [start$$4, end$$1, unit]);
          } else {
            JAM.call(e$$30.custom, e$$30, [start$$4, val$$6, ""]);
          }
        }
        return;
      }
      var opt = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, optall]);
      var p;
      var v1142 = this.nodeType === 1;
      if (v1142) {
        var v2989 = jQuery$$1(this);
        v1142 = JAM.call(v2989.is, v2989, [":hidden"]);
      }
      var hidden = v1142;
      var self$$12 = this;
      for (p in prop$$6) {
        var name$$55 = p.replace(rdashAlpha, fcamelCase);
        if (p !== name$$55) {
          JAM.set(prop$$6, name$$55, JAM.get(prop$$6, p, JAM.policy.p3), JAM.policy.p3);
          introspect(JAM.policy.p4) {
            delete prop$$6[p];
          }
          p = name$$55;
        }
        introspect(JAM.policy.p4) {
          var v4883 = prop$$6[p]
        }
        var v4115 = v4883 === "hide";
        if (v4115) {
          v4115 = hidden;
        }
        var v2990 = v4115;
        if (!v2990) {
          introspect(JAM.policy.p4) {
            var v4884 = prop$$6[p]
          }
          var v4116 = v4884 === "show";
          if (v4116) {
            v4116 = !hidden;
          }
          v2990 = v4116;
        }
        if (v2990) {
          var v1144 = opt.complete;
          return JAM.call(v1144.call, v1144, [this]);
        }
        var v4118 = p === "height";
        if (!v4118) {
          v4118 = p === "width";
        }
        var v2991 = v4118;
        if (v2991) {
          v2991 = this.style;
        }
        if (v2991) {
          var v1146 = opt;
          var v5578 = JAM.call(jQuery$$1.css, jQuery$$1, [this, "display"]);
          v1146.display = v5578;
          opt.overflow = this.style.overflow;
        }
        introspect(JAM.policy.p4) {
          var v2992 = prop$$6[p]
        }
        if (JAM.call(jQuery$$1.isArray, jQuery$$1, [v2992])) {
          var v2993 = opt.specialEasing;
          if (!v2993) {
            v2993 = {};
          }
          var v1149 = opt.specialEasing = v2993;
          introspect(JAM.policy.p4) {
            var v2994 = prop$$6[p]
          }
          JAM.set(v1149, p, JAM.get(v2994, 1, JAM.policy.p3), JAM.policy.p3);
          introspect(JAM.policy.p4) {
            var v1150 = prop$$6[p]
          }
          JAM.set(prop$$6, p, JAM.get(v1150, 0, JAM.policy.p3), JAM.policy.p3);
        }
      }
      if (opt.overflow != null) {
        this.style.overflow = "hidden";
      }
      var v1154 = opt;
      var v5579 = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, prop$$6]);
      v1154.curAnim = v5579;
      JAM.call(jQuery$$1.each, jQuery$$1, [prop$$6, v321]);
      return true;
    }
    var optall = JAM.call(jQuery$$1.speed, jQuery$$1, [speed$$3, easing, callback$$40]);
    if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [prop$$6])) {
      return JAM.call(this.each, this, [optall.complete]);
    }
    var v2996;
    if (optall.queue === false) {
      v2996 = "each";
    } else {
      v2996 = "queue";
    }
    return JAM.call(JAM.get(this, v2996, JAM.policy.p4), this, [v322]);
  }
  function v320(speed$$2, to, callback$$39) {
    var v4887 = JAM.call(this.filter, this, [":hidden"]);
    var v1158 = JAM.call(v4887.css, v4887, ["opacity", 0]).show().end();
    return JAM.call(v1158.animate, v1158, [{opacity:to}, speed$$2, callback$$39]);
  }
  function v319(fn$$15, fn2) {
    function v318() {
      var v1160;
      if (bool) {
        v1160 = fn$$15;
      } else {
        var v2998 = jQuery$$1(this);
        v1160 = JAM.call(v2998.is, v2998, [":hidden"]);
      }
      var state$$1 = v1160;
      var v1161 = jQuery$$1(this);
      var v2999;
      if (state$$1) {
        v2999 = "show";
      } else {
        v2999 = "hide";
      }
      JAM.call(JAM.get(v1161, v2999, JAM.policy.p4), v1161, []);
      return;
    }
    var bool = typeof fn$$15 === "boolean";
    var v3000 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [fn$$15]);
    if (v3000) {
      v3000 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [fn2]);
    }
    if (v3000) {
      var v1164 = this._toggle;
      JAM.call(v1164.apply, v1164, [this, arguments]);
    } else {
      var v3001 = fn$$15 == null;
      if (!v3001) {
        v3001 = bool;
      }
      if (v3001) {
        JAM.call(this.each, this, [v318]);
      } else {
        JAM.call(this.animate, this, [genFx("toggle", 3), fn$$15, fn2]);
      }
    }
    return this;
  }
  function v317(speed$$1, callback$$38) {
    var v3002 = speed$$1;
    if (!v3002) {
      v3002 = speed$$1 === 0;
    }
    if (v3002) {
      return JAM.call(this.animate, this, [genFx("hide", 3), speed$$1, callback$$38]);
    } else {
      var i$$87 = 0;
      var l$$24 = this.length;
      var v1173 = i$$87 < l$$24;
      for (;v1173;) {
        introspect(JAM.policy.p4) {
          var v1169 = this[i$$87]
        }
        var old$$6 = JAM.call(jQuery$$1.data, jQuery$$1, [v1169, "olddisplay"]);
        var v3003 = !old$$6;
        if (v3003) {
          v3003 = old$$6 !== "none";
        }
        if (v3003) {
          introspect(JAM.policy.p4) {
            var v1170 = this[i$$87]
          }
          introspect(JAM.policy.p4) {
            var v3004 = this[i$$87]
          }
          JAM.call(jQuery$$1.data, jQuery$$1, [v1170, "olddisplay", JAM.call(jQuery$$1.css, jQuery$$1, [v3004, "display"])]);
        }
        i$$87 = i$$87 + 1;
        v1173 = i$$87 < l$$24;
      }
      var j$$6 = 0;
      var k$$3 = this.length;
      var v1175 = j$$6 < k$$3;
      for (;v1175;) {
        introspect(JAM.policy.p4) {
          var v3005 = this[j$$6]
        }
        v3005.style.display = "none";
        j$$6 = j$$6 + 1;
        v1175 = j$$6 < k$$3;
      }
      return this;
    }
    return;
  }
  function v316(speed, callback$$37) {
    var v3006 = speed;
    if (!v3006) {
      v3006 = speed === 0;
    }
    if (v3006) {
      return JAM.call(this.animate, this, [genFx("show", 3), speed, callback$$37]);
    } else {
      var i$$86 = 0;
      var l$$23 = this.length;
      var v1186 = i$$86 < l$$23;
      for (;v1186;) {
        introspect(JAM.policy.p4) {
          var v1178 = this[i$$86]
        }
        var old$$5 = JAM.call(jQuery$$1.data, jQuery$$1, [v1178, "olddisplay"]);
        introspect(JAM.policy.p4) {
          var v3007 = this[i$$86]
        }
        v3007.style.display = old$$5 || "";
        introspect(JAM.policy.p4) {
          var v4125 = this[i$$86]
        }
        if (JAM.call(jQuery$$1.css, jQuery$$1, [v4125, "display"]) === "none") {
          introspect(JAM.policy.p4) {
            var v1180 = this[i$$86]
          }
          var nodeName = v1180.nodeName;
          var display;
          introspect(JAM.policy.p4) {
            var v1183 = elemdisplay[nodeName]
          }
          if (v1183) {
            introspect(JAM.policy.p4) {
              display = elemdisplay[nodeName];
            }
          } else {
            var v1181 = jQuery$$1("<" + nodeName + " />");
            var elem$$114 = JAM.call(v1181.appendTo, v1181, ["body"]);
            display = JAM.call(elem$$114.css, elem$$114, ["display"]);
            if (display === "none") {
              display = "block";
            }
            elem$$114.remove();
            JAM.set(elemdisplay, nodeName, display, JAM.policy.p3);
          }
          introspect(JAM.policy.p4) {
            var v1184 = this[i$$86]
          }
          JAM.call(jQuery$$1.data, jQuery$$1, [v1184, "olddisplay", display]);
        }
        i$$86 = i$$86 + 1;
        v1186 = i$$86 < l$$23;
      }
      var j$$5 = 0;
      var k$$2 = this.length;
      var v1188 = j$$5 < k$$2;
      for (;v1188;) {
        introspect(JAM.policy.p4) {
          var v3010 = this[j$$5]
        }
        var v1187 = v3010.style;
        introspect(JAM.policy.p4) {
          var v4127 = this[j$$5]
        }
        var v3011 = JAM.call(jQuery$$1.data, jQuery$$1, [v4127, "olddisplay"]);
        if (!v3011) {
          v3011 = "";
        }
        v1187.display = v3011;
        j$$5 = j$$5 + 1;
        v1188 = j$$5 < k$$2;
      }
      return this;
    }
    return;
  }
  function v315(a$$6, traditional) {
    function v314() {
      add(this.name, this.value);
      return;
    }
    function buildParams(prefix$$3, obj$$21) {
      function v313(k$$1, v$$1) {
        buildParams(prefix$$3 + "[" + k$$1 + "]", v$$1);
        return;
      }
      function v312(i$$85, v) {
        var v3013 = traditional;
        if (!v3013) {
          v3013 = /\[\]$/.test(prefix$$3);
        }
        if (v3013) {
          add(prefix$$3, v);
        } else {
          var v4131 = prefix$$3 + "[";
          var v4888;
          var v5427 = typeof v === "object";
          if (!v5427) {
            v5427 = JAM.call(jQuery$$1.isArray, jQuery$$1, [v]);
          }
          if (v5427) {
            v4888 = i$$85;
          } else {
            v4888 = "";
          }
          buildParams(v4131 + v4888 + "]", v);
        }
        return;
      }
      if (JAM.call(jQuery$$1.isArray, jQuery$$1, [obj$$21])) {
        JAM.call(jQuery$$1.each, jQuery$$1, [obj$$21, v312]);
      } else {
        var v4133 = !traditional;
        if (v4133) {
          v4133 = obj$$21 != null;
        }
        var v3015 = v4133;
        if (v3015) {
          v3015 = typeof obj$$21 === "object";
        }
        if (v3015) {
          JAM.call(jQuery$$1.each, jQuery$$1, [obj$$21, v313]);
        } else {
          add(prefix$$3, obj$$21);
        }
      }
      return;
    }
    function add(key$$20, value$$44) {
      var v1197;
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$44])) {
        v1197 = value$$44();
      } else {
        v1197 = value$$44;
      }
      value$$44 = v1197;
      var v1198 = s$$5;
      var v1199 = s$$5.length;
      var v3017 = encodeURIComponent(key$$20) + "=";
      var v3018 = encodeURIComponent(value$$44);
      introspect(JAM.policy.p3) {
        v1198[v1199] = v3017 + v3018;
      }
      return;
    }
    var s$$5 = [];
    if (traditional === undefined$$1) {
      traditional = jQuery$$1.ajaxSettings.traditional;
    }
    var v3019 = JAM.call(jQuery$$1.isArray, jQuery$$1, [a$$6]);
    if (!v3019) {
      v3019 = a$$6.jquery;
    }
    if (v3019) {
      JAM.call(jQuery$$1.each, jQuery$$1, [a$$6, v314]);
    } else {
      var prefix$$2;
      for (prefix$$2 in a$$6) {
        introspect(JAM.policy.p4) {
          var v1202 = a$$6[prefix$$2]
        }
        buildParams(prefix$$2, v1202);
      }
    }
    return s$$5.join("&").replace(r20, "+");
  }
  function v311(xhr$$4, type$$64, s$$4) {
    var v1205 = xhr$$4.getResponseHeader("content-type");
    if (!v1205) {
      v1205 = "";
    }
    var ct = v1205;
    var v1206 = type$$64 === "xml";
    if (!v1206) {
      var v3021 = !type$$64;
      if (v3021) {
        v3021 = ct.indexOf("xml") >= 0;
      }
      v1206 = v3021;
    }
    var xml = v1206;
    var v1207;
    if (xml) {
      v1207 = xhr$$4.responseXML;
    } else {
      v1207 = xhr$$4.responseText;
    }
    var data$$43 = v1207;
    var v3023 = xml;
    if (v3023) {
      v3023 = data$$43.documentElement.nodeName === "parsererror";
    }
    if (v3023) {
      JAM.call(jQuery$$1.error, jQuery$$1, ["parsererror"]);
    }
    var v3024 = s$$4;
    if (v3024) {
      v3024 = s$$4.dataFilter;
    }
    if (v3024) {
      data$$43 = JAM.call(s$$4.dataFilter, s$$4, [data$$43, type$$64]);
    }
    if (typeof data$$43 === "string") {
      var v3026 = type$$64 === "json";
      if (!v3026) {
        var v4139 = !type$$64;
        if (v4139) {
          v4139 = ct.indexOf("json") >= 0;
        }
        v3026 = v4139;
      }
      if (v3026) {
        data$$43 = JAM.call(jQuery$$1.parseJSON, jQuery$$1, [data$$43]);
      } else {
        var v3027 = type$$64 === "script";
        if (!v3027) {
          var v4141 = !type$$64;
          if (v4141) {
            v4141 = ct.indexOf("javascript") >= 0;
          }
          v3027 = v4141;
        }
        if (v3027) {
          JAM.call(jQuery$$1.globalEval, jQuery$$1, [data$$43]);
        }
      }
    }
    return data$$43;
  }
  function v310(xhr$$3, url$$7) {
    var lastModified = xhr$$3.getResponseHeader("Last-Modified");
    var etag = xhr$$3.getResponseHeader("Etag");
    if (lastModified) {
      JAM.set(jQuery$$1.lastModified, url$$7, lastModified, JAM.policy.p3);
    }
    if (etag) {
      JAM.set(jQuery$$1.etag, url$$7, etag, JAM.policy.p3);
    }
    var v1215 = xhr$$3.status === 304;
    if (!v1215) {
      v1215 = xhr$$3.status === 0;
    }
    return v1215;
  }
  function v309(xhr$$2) {
    try {
      var v5249 = !xhr$$2.status;
      if (v5249) {
        v5249 = location.protocol === "file:";
      }
      var v4892 = v5249;
      if (!v4892) {
        var v5250 = xhr$$2.status >= 200;
        if (v5250) {
          v5250 = xhr$$2.status < 300;
        }
        v4892 = v5250;
      }
      var v4143 = v4892;
      if (!v4143) {
        v4143 = xhr$$2.status === 304;
      }
      var v3031 = v4143;
      if (!v3031) {
        v3031 = xhr$$2.status === 1223;
      }
      var v1216 = v3031;
      if (!v1216) {
        v1216 = xhr$$2.status === 0;
      }
      return v1216;
    } catch (e$$29) {
    }
    return false;
  }
  function v308(s$$3, xhr$$1, status$$2, e$$28) {
    if (s$$3.error) {
      var v1217 = s$$3.error;
      var v3034 = s$$3.context;
      if (!v3034) {
        v3034 = s$$3;
      }
      JAM.call(v1217.call, v1217, [v3034, xhr$$1, status$$2, e$$28]);
    }
    if (s$$3.global) {
      var v3035;
      if (s$$3.context) {
        v3035 = jQuery$$1(s$$3.context);
      } else {
        v3035 = jQuery$$1.event;
      }
      var v1220 = v3035;
      JAM.call(v1220.trigger, v1220, ["ajaxError", [xhr$$1, s$$3, e$$28]]);
    }
    return;
  }
  function v307(origSettings) {
    function v306() {
      var v3036 = xhr;
      if (v3036) {
        v3036 = !requestDone;
      }
      if (v3036) {
        JAM.call(onreadystatechange, null, ["timeout"]);
      }
      return;
    }
    function v305() {
      if (xhr) {
        JAM.call(oldAbort.call, oldAbort, [xhr]);
      }
      JAM.call(onreadystatechange, null, ["abort"]);
      return;
    }
    function v304(isTimeout) {
      var v4149 = !xhr;
      if (!v4149) {
        v4149 = xhr.readyState === 0;
      }
      var v3037 = v4149;
      if (!v3037) {
        v3037 = isTimeout === "abort";
      }
      if (v3037) {
        if (!requestDone) {
          complete();
        }
        requestDone = true;
        if (xhr) {
          JAM.set(xhr, "onreadystatechange", jQuery$$1.noop);
        }
      } else {
        var v4151 = !requestDone;
        if (v4151) {
          v4151 = xhr;
        }
        var v3038 = v4151;
        if (v3038) {
          var v4152 = xhr.readyState === 4;
          if (!v4152) {
            v4152 = isTimeout === "timeout";
          }
          v3038 = v4152;
        }
        if (v3038) {
          requestDone = true;
          JAM.set(xhr, "onreadystatechange", jQuery$$1.noop);
          var v1225;
          if (isTimeout === "timeout") {
            v1225 = "timeout";
          } else {
            var v3039;
            if (!JAM.call(jQuery$$1.httpSuccess, jQuery$$1, [xhr])) {
              v3039 = "error";
            } else {
              var v4153;
              var v5252 = s$$2.ifModified;
              if (v5252) {
                v5252 = JAM.call(jQuery$$1.httpNotModified, jQuery$$1, [xhr, s$$2.url]);
              }
              if (v5252) {
                v4153 = "notmodified";
              } else {
                v4153 = "success";
              }
              v3039 = v4153;
            }
            v1225 = v3039;
          }
          status$$1 = v1225;
          var errMsg;
          if (status$$1 === "success") {
            try {
              data$$42 = JAM.call(jQuery$$1.httpData, jQuery$$1, [xhr, s$$2.dataType, s$$2]);
            } catch (err) {
              status$$1 = "parsererror";
              errMsg = err;
            }
          }
          var v3041 = status$$1 === "success";
          if (!v3041) {
            v3041 = status$$1 === "notmodified";
          }
          if (v3041) {
            if (!jsonp) {
              success();
            }
          } else {
            JAM.call(jQuery$$1.handleError, jQuery$$1, [s$$2, xhr, status$$1, errMsg]);
          }
          complete();
          if (isTimeout === "timeout") {
            xhr.abort();
          }
          if (s$$2.async) {
            xhr = null;
          }
        }
      }
      return;
    }
    function v303() {
      var v3042 = !done$$1;
      if (v3042) {
        var v4901 = !this.readyState;
        if (!v4901) {
          v4901 = this.readyState === "loaded";
        }
        var v4156 = v4901;
        if (!v4156) {
          v4156 = this.readyState === "complete";
        }
        v3042 = v4156;
      }
      if (v3042) {
        done$$1 = true;
        success();
        complete();
        JAM.set(script$$2, "onload", JAM.set(script$$2, "onreadystatechange", null));
        var v3043 = head$$1;
        if (v3043) {
          v3043 = script$$2.parentNode;
        }
        if (v3043) {
          head$$1.removeChild(script$$2);
        }
      }
      return;
    }
    function v302(tmp$$1) {
      data$$42 = tmp$$1;
      success();
      complete();
      JAM.set(window$$1, jsonp, undefined$$1, JAM.policy.p3);
      try {
        introspect(JAM.policy.p4) {
          delete window$$1[jsonp];
        }
      } catch (e$$24) {
      }
      if (head$$1) {
        head$$1.removeChild(script$$2);
      }
      return;
    }
    function success() {
      if (s$$2.success) {
        var v1236 = s$$2.success;
        JAM.call(v1236.call, v1236, [callbackContext, data$$42, status$$1, xhr]);
      }
      if (s$$2.global) {
        trigger$$1("ajaxSuccess", [xhr, s$$2]);
      }
      return;
    }
    function complete() {
      if (s$$2.complete) {
        var v1240 = s$$2.complete;
        JAM.call(v1240.call, v1240, [callbackContext, xhr, status$$1]);
      }
      if (s$$2.global) {
        trigger$$1("ajaxComplete", [xhr, s$$2]);
      }
      var v3044 = s$$2.global;
      if (v3044) {
        v3044 = !(jQuery$$1.active = jQuery$$1.active - 1);
      }
      if (v3044) {
        var v1244 = jQuery$$1.event;
        JAM.call(v1244.trigger, v1244, ["ajaxStop"]);
      }
      return;
    }
    function trigger$$1(type$$63, args$$7) {
      var v3045;
      if (s$$2.context) {
        v3045 = jQuery$$1(s$$2.context);
      } else {
        v3045 = jQuery$$1.event;
      }
      var v1246 = v3045;
      JAM.call(v1246.trigger, v1246, [type$$63, args$$7]);
      return;
    }
    var s$$2 = JAM.call(jQuery$$1.extend, jQuery$$1, [true, {}, jQuery$$1.ajaxSettings, origSettings]);
    var jsonp;
    var status$$1;
    var data$$42;
    var v3046 = origSettings;
    if (v3046) {
      v3046 = origSettings.context;
    }
    var v1248 = v3046;
    if (!v1248) {
      v1248 = s$$2;
    }
    var callbackContext = v1248;
    var type$$62 = s$$2.type.toUpperCase();
    var v4160 = s$$2.data;
    if (v4160) {
      v4160 = s$$2.processData;
    }
    var v3048 = v4160;
    if (v3048) {
      v3048 = typeof s$$2.data !== "string";
    }
    if (v3048) {
      var v1250 = s$$2;
      var v5580 = JAM.call(jQuery$$1.param, jQuery$$1, [s$$2.data, s$$2.traditional]);
      v1250.data = v5580;
    }
    if (s$$2.dataType === "jsonp") {
      if (type$$62 === "GET") {
        if (!jsre.test(s$$2.url)) {
          var v1252 = s$$2;
          var v4163 = v1252.url;
          var v5433;
          if (rquery.test(s$$2.url)) {
            v5433 = "&";
          } else {
            v5433 = "?";
          }
          var v5257 = v5433;
          var v5434 = s$$2.jsonp;
          if (!v5434) {
            v5434 = "callback";
          }
          v1252.url = v4163 + (v5257 + v5434 + "=?");
        }
      } else {
        var v3053 = !s$$2.data;
        if (!v3053) {
          v3053 = !jsre.test(s$$2.data);
        }
        if (v3053) {
          var v4168;
          if (s$$2.data) {
            v4168 = s$$2.data + "&";
          } else {
            v4168 = "";
          }
          var v3054 = v4168;
          var v4169 = s$$2.jsonp;
          if (!v4169) {
            v4169 = "callback";
          }
          s$$2.data = v3054 + v4169 + "=?";
        }
      }
      s$$2.dataType = "json";
    }
    var v3056 = s$$2.dataType === "json";
    if (v3056) {
      var v4910 = s$$2.data;
      if (v4910) {
        v4910 = jsre.test(s$$2.data);
      }
      var v4171 = v4910;
      if (!v4171) {
        v4171 = jsre.test(s$$2.url);
      }
      v3056 = v4171;
    }
    if (v3056) {
      var v1258 = s$$2.jsonpCallback;
      if (!v1258) {
        var v3057 = jsc;
        jsc = jsc + 1;
        v1258 = "jsonp" + v3057;
      }
      jsonp = v1258;
      if (s$$2.data) {
        var v1259 = s$$2;
        var v5581 = (s$$2.data + "").replace(jsre, "=" + jsonp + "$1");
        v1259.data = v5581;
      }
      var v1261 = s$$2;
      var v5582 = s$$2.url.replace(jsre, "=" + jsonp + "$1");
      v1261.url = v5582;
      s$$2.dataType = "script";
      introspect(JAM.policy.p4) {
        var v1262 = window$$1[jsonp]
      }
      if (!v1262) {
        v1262 = v302;
      }
      JAM.set(window$$1, jsonp, v1262, JAM.policy.p3);
    }
    var v3064 = s$$2.dataType === "script";
    if (v3064) {
      v3064 = s$$2.cache === null;
    }
    if (v3064) {
      s$$2.cache = false;
    }
    var v3065 = s$$2.cache === false;
    if (v3065) {
      v3065 = type$$62 === "GET";
    }
    if (v3065) {
      var ts = now();
      var ret$$23 = s$$2.url.replace(rts, "$1_=" + ts + "$2");
      var v1267 = s$$2;
      var v3067 = ret$$23;
      var v4178;
      if (ret$$23 === s$$2.url) {
        var v5435;
        if (rquery.test(s$$2.url)) {
          v5435 = "&";
        } else {
          v5435 = "?";
        }
        v4178 = v5435 + "_=" + ts;
      } else {
        v4178 = "";
      }
      v1267.url = v3067 + v4178;
    }
    var v3069 = s$$2.data;
    if (v3069) {
      v3069 = type$$62 === "GET";
    }
    if (v3069) {
      var v1269 = s$$2;
      var v4179 = v1269.url;
      var v5262;
      if (rquery.test(s$$2.url)) {
        v5262 = "&";
      } else {
        v5262 = "?";
      }
      v1269.url = v4179 + (v5262 + s$$2.data);
    }
    var v3070 = s$$2.global;
    if (v3070) {
      var v4181 = jQuery$$1.active;
      jQuery$$1.active = jQuery$$1.active + 1;
      v3070 = !v4181;
    }
    if (v3070) {
      var v1271 = jQuery$$1.event;
      JAM.call(v1271.trigger, v1271, ["ajaxStart"]);
    }
    var parts$$2 = rurl.exec(s$$2.url);
    var v1274 = parts$$2;
    if (v1274) {
      introspect(JAM.policy.p4) {
        var v4182 = parts$$2[1]
      }
      if (v4182) {
        introspect(JAM.policy.p4) {
          var v4917 = parts$$2[1]
        }
        v4182 = v4917 !== location.protocol;
      }
      var v3071 = v4182;
      if (!v3071) {
        introspect(JAM.policy.p4) {
          var v4183 = parts$$2[2]
        }
        v3071 = v4183 !== location.host;
      }
      v1274 = v3071;
    }
    var remote = v1274;
    var v4186 = s$$2.dataType === "script";
    if (v4186) {
      v4186 = type$$62 === "GET";
    }
    var v3072 = v4186;
    if (v3072) {
      v3072 = remote;
    }
    if (v3072) {
      var v3073 = document$$1.getElementsByTagName("head");
      introspect(JAM.policy.p4) {
        var v1275 = v3073[0]
      }
      if (!v1275) {
        v1275 = document$$1.documentElement;
      }
      var head$$1 = v1275;
      var script$$2 = document$$1.createElement("script");
      introspect(JAM.policy.p1) {
        script$$2.src = s$$2.url;
      }
      if (s$$2.scriptCharset) {
        script$$2.charset = s$$2.scriptCharset;
      }
      if (!jsonp) {
        var done$$1 = false;
        JAM.set(script$$2, "onload", JAM.set(script$$2, "onreadystatechange", v303));
      }
      JAM.call(head$$1.insertBefore, head$$1, [script$$2, head$$1.firstChild]);
      return undefined$$1;
    }
    var requestDone = false;
    var xhr = s$$2.xhr();
    if (!xhr) {
      return;
    }
    if (s$$2.username) {
      xhr.open(type$$62, s$$2.url, s$$2.async, s$$2.username, s$$2.password);
    } else {
      xhr.open(type$$62, s$$2.url, s$$2.async);
    }
    try {
      var v3075 = s$$2.data;
      if (!v3075) {
        var v4187 = origSettings;
        if (v4187) {
          v4187 = origSettings.contentType;
        }
        v3075 = v4187;
      }
      if (v3075) {
        xhr.setRequestHeader("Content-Type", s$$2.contentType);
      }
      if (s$$2.ifModified) {
        var v3076 = jQuery$$1.lastModified;
        var v3077 = s$$2.url;
        introspect(JAM.policy.p4) {
          var v1291 = v3076[v3077]
        }
        if (v1291) {
          var v3078 = jQuery$$1.lastModified;
          var v3079 = s$$2.url;
          introspect(JAM.policy.p4) {
            var v1290 = v3078[v3079]
          }
          xhr.setRequestHeader("If-Modified-Since", v1290);
        }
        var v3080 = jQuery$$1.etag;
        var v3081 = s$$2.url;
        introspect(JAM.policy.p4) {
          var v1293 = v3080[v3081]
        }
        if (v1293) {
          var v3082 = jQuery$$1.etag;
          var v3083 = s$$2.url;
          introspect(JAM.policy.p4) {
            var v1292 = v3082[v3083]
          }
          xhr.setRequestHeader("If-None-Match", v1292);
        }
      }
      if (!remote) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      }
      var v3084;
      var v4920 = s$$2.dataType;
      if (v4920) {
        var v5264 = s$$2.accepts;
        var v5265 = s$$2.dataType;
        introspect(JAM.policy.p4) {
          v4920 = v5264[v5265];
        }
      }
      if (v4920) {
        var v4921 = s$$2.accepts;
        var v4922 = s$$2.dataType;
        introspect(JAM.policy.p4) {
          var v4189 = v4921[v4922]
        }
        v3084 = v4189 + ", */*";
      } else {
        v3084 = s$$2.accepts._default;
      }
      xhr.setRequestHeader("Accept", v3084);
    } catch (e$$25) {
    }
    var v3085 = s$$2.beforeSend;
    if (v3085) {
      var v4923 = s$$2.beforeSend;
      v3085 = JAM.call(v4923.call, v4923, [callbackContext, xhr, s$$2]) === false;
    }
    if (v3085) {
      var v3086 = s$$2.global;
      if (v3086) {
        v3086 = !(jQuery$$1.active = jQuery$$1.active - 1);
      }
      if (v3086) {
        var v1297 = jQuery$$1.event;
        JAM.call(v1297.trigger, v1297, ["ajaxStop"]);
      }
      xhr.abort();
      return false;
    }
    if (s$$2.global) {
      trigger$$1("ajaxSend", [xhr, s$$2]);
    }
    var onreadystatechange = JAM.set(xhr, "onreadystatechange", v304);
    try {
      var oldAbort = xhr.abort;
      xhr.abort = v305;
    } catch (e$$26) {
    }
    var v3087 = s$$2.async;
    if (v3087) {
      v3087 = s$$2.timeout > 0;
    }
    if (v3087) {
      JAM.call(setTimeout, null, [v306, s$$2.timeout]);
    }
    try {
      var v3088;
      var v5267 = type$$62 === "POST";
      if (!v5267) {
        v5267 = type$$62 === "PUT";
      }
      var v4924 = v5267;
      if (!v4924) {
        v4924 = type$$62 === "DELETE";
      }
      if (v4924) {
        v3088 = s$$2.data;
      } else {
        v3088 = null;
      }
      xhr.send(v3088);
    } catch (e$$27) {
      JAM.call(jQuery$$1.handleError, jQuery$$1, [s$$2, xhr, null, e$$27]);
      complete();
    }
    if (!s$$2.async) {
      onreadystatechange();
    }
    return xhr;
  }
  function v301() {
    try {
      return JAM.new(window$$1.ActiveXObject, ["Microsoft.XMLHTTP"]);
    } catch (e$$23) {
    }
    return;
  }
  function v300() {
    return new window$$1.XMLHttpRequest;
  }
  function v299(settings) {
    JAM.call(jQuery$$1.extend, jQuery$$1, [jQuery$$1.ajaxSettings, settings]);
    return;
  }
  function v298(url$$6, data$$41, callback$$36, type$$61) {
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$41])) {
      type$$61 = type$$61 || callback$$36;
      callback$$36 = data$$41;
      data$$41 = {};
    }
    return JAM.call(jQuery$$1.ajax, jQuery$$1, [{type:"POST", url:url$$6, data:data$$41, success:callback$$36, dataType:type$$61}]);
  }
  function v297(url$$5, data$$40, callback$$35) {
    return JAM.call(jQuery$$1.get, jQuery$$1, [url$$5, data$$40, callback$$35, "json"]);
  }
  function v296(url$$4, callback$$34) {
    return JAM.call(jQuery$$1.get, jQuery$$1, [url$$4, null, callback$$34, "script"]);
  }
  function v295(url$$3, data$$39, callback$$33, type$$60) {
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$39])) {
      type$$60 = type$$60 || callback$$33;
      callback$$33 = data$$39;
      data$$39 = null;
    }
    return JAM.call(jQuery$$1.ajax, jQuery$$1, [{type:"GET", url:url$$3, data:data$$39, success:callback$$33, dataType:type$$60}]);
  }
  function v294(i$$84, o) {
    function v293(f) {
      return JAM.call(this.bind, this, [o, f]);
    }
    JAM.set(jQuery$$1.fn, o, v293, JAM.policy.p3);
    return;
  }
  function v292() {
    function v291(i$$82, elem$$113) {
      function v290(val$$5, i$$83) {
        return{name:elem$$113.name, value:val$$5};
      }
      var val$$4 = jQuery$$1(this).val();
      var v1316;
      if (val$$4 == null) {
        v1316 = null;
      } else {
        var v3090;
        if (JAM.call(jQuery$$1.isArray, jQuery$$1, [val$$4])) {
          v3090 = JAM.call(jQuery$$1.map, jQuery$$1, [val$$4, v290]);
        } else {
          v3090 = {name:elem$$113.name, value:val$$4};
        }
        v1316 = v3090;
      }
      return v1316;
    }
    function v289() {
      var v3092 = this.name;
      if (v3092) {
        v3092 = !this.disabled;
      }
      var v1317 = v3092;
      if (v1317) {
        var v4199 = this.checked;
        if (!v4199) {
          v4199 = rselectTextarea.test(this.nodeName);
        }
        var v3093 = v4199;
        if (!v3093) {
          v3093 = rinput.test(this.type);
        }
        v1317 = v3093;
      }
      return v1317;
    }
    function v288() {
      var v1318;
      if (this.elements) {
        v1318 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [this.elements]);
      } else {
        v1318 = this;
      }
      return v1318;
    }
    var v4202 = JAM.call(this.map, this, [v288]);
    var v3096 = JAM.call(v4202.filter, v4202, [v289]);
    return JAM.call(v3096.map, v3096, [v291]).get();
  }
  function v287() {
    return JAM.call(jQuery$$1.param, jQuery$$1, [this.serializeArray()]);
  }
  function v286(url$$2, params, callback$$32) {
    function v285(res, status) {
      var v3097 = status === "success";
      if (!v3097) {
        v3097 = status === "notmodified";
      }
      if (v3097) {
        var v3098;
        if (selector$$20) {
          var v4927 = jQuery$$1("<div />");
          var v4204 = JAM.call(v4927.append, v4927, [res.responseText.replace(rscript, "")]);
          v3098 = JAM.call(v4204.find, v4204, [selector$$20]);
        } else {
          v3098 = res.responseText;
        }
        JAM.call(self$$11.html, self$$11, [v3098]);
      }
      if (callback$$32) {
        JAM.call(self$$11.each, self$$11, [callback$$32, [res.responseText, status, res]]);
      }
      return;
    }
    if (typeof url$$2 !== "string") {
      return JAM.call(_load.call, _load, [this, url$$2]);
    } else {
      if (!this.length) {
        return this;
      }
    }
    var off = url$$2.indexOf(" ");
    if (off >= 0) {
      var selector$$20 = JAM.call(url$$2.slice, url$$2, [off, url$$2.length]);
      url$$2 = JAM.call(url$$2.slice, url$$2, [0, off]);
    }
    var type$$59 = "GET";
    if (params) {
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [params])) {
        callback$$32 = params;
        params = null;
      } else {
        if (typeof params === "object") {
          params = JAM.call(jQuery$$1.param, jQuery$$1, [params, jQuery$$1.ajaxSettings.traditional]);
          type$$59 = "POST";
        }
      }
    }
    var self$$11 = this;
    JAM.call(jQuery$$1.ajax, jQuery$$1, [{url:url$$2, type:type$$59, dataType:"html", data:params, complete:v285}]);
    return this;
  }
  function v284(elem$$112) {
    var v3104 = jQuery$$1.expr.filters;
    return!JAM.call(v3104.hidden, v3104, [elem$$112]);
  }
  function v283(elem$$111) {
    var width$$9 = elem$$111.offsetWidth;
    var height$$8 = elem$$111.offsetHeight;
    var skip = elem$$111.nodeName.toLowerCase() === "tr";
    var v1334;
    var v4929 = width$$9 === 0;
    if (v4929) {
      v4929 = height$$8 === 0;
    }
    var v4206 = v4929;
    if (v4206) {
      v4206 = !skip;
    }
    if (v4206) {
      v1334 = true;
    } else {
      var v3106;
      var v5270 = width$$9 > 0;
      if (v5270) {
        v5270 = height$$8 > 0;
      }
      var v4930 = v5270;
      if (v4930) {
        v4930 = !skip;
      }
      if (v4930) {
        v3106 = false;
      } else {
        v3106 = JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$111, "display"]) === "none";
      }
      v1334 = v3106;
    }
    return v1334;
  }
  function v282(elem$$110, options$$3, callback$$31) {
    var old$$4 = {};
    var name$$54;
    for (name$$54 in options$$3) {
      JAM.set(old$$4, name$$54, JAM.get(elem$$110.style, name$$54, JAM.policy.p3), JAM.policy.p3);
      JAM.set(elem$$110.style, name$$54, JAM.get(options$$3, name$$54, JAM.policy.p3), JAM.policy.p3);
    }
    JAM.call(callback$$31.call, callback$$31, [elem$$110]);
    for (name$$54 in options$$3) {
      JAM.set(elem$$110.style, name$$54, JAM.get(old$$4, name$$54, JAM.policy.p3), JAM.policy.p3);
    }
    return;
  }
  function v281(elem$$109, name$$53, force$$1) {
    var ret$$22;
    var style$$1 = elem$$109.style;
    var filter$$4;
    var v4209 = !jQuery$$1.support.opacity;
    if (v4209) {
      v4209 = name$$53 === "opacity";
    }
    var v3108 = v4209;
    if (v3108) {
      v3108 = elem$$109.currentStyle;
    }
    if (v3108) {
      var v1338;
      var v4932 = elem$$109.currentStyle.filter;
      if (!v4932) {
        v4932 = "";
      }
      if (ropacity.test(v4932)) {
        v1338 = parseFloat(RegExp.$1) / 100 + "";
      } else {
        v1338 = "";
      }
      ret$$22 = v1338;
      var v1339;
      if (ret$$22 === "") {
        v1339 = "1";
      } else {
        v1339 = ret$$22;
      }
      return v1339;
    }
    if (rfloat.test(name$$53)) {
      name$$53 = styleFloat;
    }
    var v4212 = !force$$1;
    if (v4212) {
      v4212 = style$$1;
    }
    var v3112 = v4212;
    if (v3112) {
      introspect(JAM.policy.p4) {
        v3112 = style$$1[name$$53];
      }
    }
    if (v3112) {
      introspect(JAM.policy.p4) {
        ret$$22 = style$$1[name$$53];
      }
    } else {
      if (getComputedStyle) {
        if (rfloat.test(name$$53)) {
          name$$53 = "float";
        }
        name$$53 = name$$53.replace(rupper, "-$1").toLowerCase();
        var defaultView = elem$$109.ownerDocument.defaultView;
        if (!defaultView) {
          return null;
        }
        var computedStyle = defaultView.getComputedStyle(elem$$109, null);
        if (computedStyle) {
          ret$$22 = computedStyle.getPropertyValue(name$$53);
        }
        var v3113 = name$$53 === "opacity";
        if (v3113) {
          v3113 = ret$$22 === "";
        }
        if (v3113) {
          ret$$22 = "1";
        }
      } else {
        if (elem$$109.currentStyle) {
          var camelCase = name$$53.replace(rdashAlpha, fcamelCase);
          var v3114 = elem$$109.currentStyle;
          introspect(JAM.policy.p4) {
            var v1347 = v3114[name$$53]
          }
          if (!v1347) {
            var v3115 = elem$$109.currentStyle;
            introspect(JAM.policy.p4) {
              v1347 = v3115[camelCase];
            }
          }
          ret$$22 = v1347;
          var v3117 = !rnumpx.test(ret$$22);
          if (v3117) {
            v3117 = rnum.test(ret$$22);
          }
          if (v3117) {
            var left$$3 = style$$1.left;
            var rsLeft = elem$$109.runtimeStyle.left;
            elem$$109.runtimeStyle.left = elem$$109.currentStyle.left;
            var v1350;
            if (camelCase === "fontSize") {
              v1350 = "1em";
            } else {
              v1350 = ret$$22 || 0;
            }
            style$$1.left = v1350;
            ret$$22 = style$$1.pixelLeft + "px";
            style$$1.left = left$$3;
            elem$$109.runtimeStyle.left = rsLeft;
          }
        }
      }
    }
    return ret$$22;
  }
  function v280(elem$$108, name$$52, force, extra$$2) {
    function v279() {
      function v278() {
        if (!extra$$2) {
          var v3120 = val$$3;
          var v4214 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "padding" + this, true]));
          if (!v4214) {
            v4214 = 0;
          }
          val$$3 = v3120 - v4214;
        }
        if (extra$$2 === "margin") {
          var v3122 = val$$3;
          var v4215 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "margin" + this, true]));
          if (!v4215) {
            v4215 = 0;
          }
          val$$3 = v3122 + v4215;
        } else {
          var v3124 = val$$3;
          var v4216 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "border" + this + "Width", true]));
          if (!v4216) {
            v4216 = 0;
          }
          val$$3 = v3124 - v4216;
        }
        return;
      }
      var v1358;
      if (name$$52 === "width") {
        v1358 = elem$$108.offsetWidth;
      } else {
        v1358 = elem$$108.offsetHeight;
      }
      val$$3 = v1358;
      if (extra$$2 === "border") {
        return;
      }
      JAM.call(jQuery$$1.each, jQuery$$1, [which, v278]);
      return;
    }
    var v3127 = name$$52 === "width";
    if (!v3127) {
      v3127 = name$$52 === "height";
    }
    if (v3127) {
      var getWH = v279;
      var val$$3;
      var props$$1 = cssShow;
      var v1360;
      if (name$$52 === "width") {
        v1360 = cssWidth;
      } else {
        v1360 = cssHeight;
      }
      var which = v1360;
      if (elem$$108.offsetWidth !== 0) {
        getWH();
      } else {
        JAM.call(jQuery$$1.swap, jQuery$$1, [elem$$108, props$$1, getWH]);
      }
      return JAM.call(Math.max, Math, [0, Math.round(val$$3)]);
    }
    return JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, name$$52, force]);
  }
  function v277(elem$$107, name$$51, value$$43) {
    var v4218 = !elem$$107;
    if (!v4218) {
      v4218 = elem$$107.nodeType === 3;
    }
    var v3130 = v4218;
    if (!v3130) {
      v3130 = elem$$107.nodeType === 8;
    }
    if (v3130) {
      return undefined$$1;
    }
    var v4221 = name$$51 === "width";
    if (!v4221) {
      v4221 = name$$51 === "height";
    }
    var v3131 = v4221;
    if (v3131) {
      v3131 = parseFloat(value$$43) < 0;
    }
    if (v3131) {
      value$$43 = undefined$$1;
    }
    var v1366 = elem$$107.style;
    if (!v1366) {
      v1366 = elem$$107;
    }
    var style = v1366;
    var set$$8 = value$$43 !== undefined$$1;
    var v3133 = !jQuery$$1.support.opacity;
    if (v3133) {
      v3133 = name$$51 === "opacity";
    }
    if (v3133) {
      if (set$$8) {
        style.zoom = 1;
        var v1367;
        if (parseInt(value$$43, 10) + "" === "NaN") {
          v1367 = "";
        } else {
          v1367 = "alpha(opacity=" + value$$43 * 100 + ")";
        }
        var opacity = v1367;
        var v3136 = style.filter;
        if (!v3136) {
          v3136 = JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$107, "filter"]);
        }
        var v1368 = v3136;
        if (!v1368) {
          v1368 = "";
        }
        var filter$$3 = v1368;
        var v1369 = style;
        var v3138;
        if (ralpha.test(filter$$3)) {
          v3138 = filter$$3.replace(ralpha, opacity);
        } else {
          v3138 = opacity;
        }
        v1369.filter = v3138;
      }
      var v1370;
      var v4228 = style.filter;
      if (v4228) {
        v4228 = style.filter.indexOf("opacity=") >= 0;
      }
      if (v4228) {
        var v5278 = ropacity.exec(style.filter);
        introspect(JAM.policy.p4) {
          var v4946 = v5278[1]
        }
        v1370 = parseFloat(v4946) / 100 + "";
      } else {
        v1370 = "";
      }
      return v1370;
    }
    if (rfloat.test(name$$51)) {
      name$$51 = styleFloat;
    }
    name$$51 = name$$51.replace(rdashAlpha, fcamelCase);
    if (set$$8) {
      JAM.set(style, name$$51, value$$43, JAM.policy.p3);
    }
    introspect(JAM.policy.p4) {
      return style[name$$51];
    }
  }
  function v276(name$$49, value$$41) {
    function v275(elem$$106, name$$50, value$$42) {
      if (value$$42 === undefined$$1) {
        return JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$106, name$$50]);
      }
      var v3141 = typeof value$$42 === "number";
      if (v3141) {
        v3141 = !rexclude.test(name$$50);
      }
      if (v3141) {
        value$$42 = value$$42 + "px";
      }
      JAM.call(jQuery$$1.style, jQuery$$1, [elem$$106, name$$50, value$$42]);
      return;
    }
    return access(this, name$$49, value$$41, true, v275);
  }
  function v274(elems$$9) {
    var data$$38;
    var id$$5;
    var cache$$2 = jQuery$$1.cache;
    var special$$4 = jQuery$$1.event.special;
    var deleteExpando = jQuery$$1.support.deleteExpando;
    var i$$81 = 0;
    var elem$$105;
    introspect(JAM.policy.p4) {
      var v3142 = elem$$105 = elems$$9[i$$81]
    }
    var v1386 = v3142 != null;
    for (;v1386;) {
      var v1377 = jQuery$$1.expando;
      introspect(JAM.policy.p4) {
        id$$5 = elem$$105[v1377];
      }
      if (id$$5) {
        introspect(JAM.policy.p4) {
          data$$38 = cache$$2[id$$5];
        }
        if (data$$38.events) {
          var type$$58;
          for (type$$58 in data$$38.events) {
            introspect(JAM.policy.p4) {
              var v1380 = special$$4[type$$58]
            }
            if (v1380) {
              var v1378 = jQuery$$1.event;
              JAM.call(v1378.remove, v1378, [elem$$105, type$$58]);
            } else {
              JAM.call(removeEvent, null, [elem$$105, type$$58, data$$38.handle]);
            }
          }
        }
        if (deleteExpando) {
          var v1383 = jQuery$$1.expando;
          introspect(JAM.policy.p4) {
            delete elem$$105[v1383];
          }
        } else {
          if (elem$$105.removeAttribute) {
            elem$$105.removeAttribute(jQuery$$1.expando);
          }
        }
        introspect(JAM.policy.p4) {
          delete cache$$2[id$$5];
        }
      }
      i$$81 = i$$81 + 1;
      introspect(JAM.policy.p4) {
        var v3143 = elem$$105 = elems$$9[i$$81]
      }
      v1386 = v3143 != null;
    }
    return;
  }
  function v273(elems$$8, context$$15, fragment$$3, scripts$$2) {
    context$$15 = context$$15 || document$$1;
    if (typeof context$$15.createElement === "undefined") {
      var v3145 = context$$15.ownerDocument;
      if (!v3145) {
        introspect(JAM.policy.p4) {
          var v4233 = context$$15[0]
        }
        if (v4233) {
          introspect(JAM.policy.p4) {
            var v4947 = context$$15[0]
          }
          v4233 = v4947.ownerDocument;
        }
        v3145 = v4233;
      }
      var v1387 = v3145;
      if (!v1387) {
        v1387 = document$$1;
      }
      context$$15 = v1387;
    }
    var ret$$21 = [];
    var i$$80 = 0;
    var elem$$104;
    introspect(JAM.policy.p4) {
      var v3147 = elem$$104 = elems$$8[i$$80]
    }
    var v1409 = v3147 != null;
    for (;v1409;) {
      if (typeof elem$$104 === "number") {
        elem$$104 = elem$$104 + "";
      }
      if (!elem$$104) {
        i$$80 = i$$80 + 1;
        introspect(JAM.policy.p4) {
          var v3149 = elem$$104 = elems$$8[i$$80]
        }
        v1409 = v3149 != null;
        continue;
      }
      var v3150 = typeof elem$$104 === "string";
      if (v3150) {
        v3150 = !rhtml.test(elem$$104);
      }
      if (v3150) {
        elem$$104 = context$$15.createTextNode(elem$$104);
      } else {
        if (typeof elem$$104 === "string") {
          elem$$104 = elem$$104.replace(rxhtmlTag, fcloseTag);
          var v4237 = rtagName.exec(elem$$104);
          if (!v4237) {
            v4237 = ["", ""];
          }
          var v3152 = v4237;
          introspect(JAM.policy.p4) {
            var v1391 = v3152[1]
          }
          var tag$$1 = v1391.toLowerCase();
          introspect(JAM.policy.p4) {
            var v1392 = wrapMap[tag$$1]
          }
          if (!v1392) {
            v1392 = wrapMap._default;
          }
          var wrap$$1 = v1392;
          introspect(JAM.policy.p4) {
            var depth$$1 = wrap$$1[0]
          }
          var div$$6 = context$$15.createElement("div");
          introspect(JAM.policy.p4) {
            var v3154 = wrap$$1[1]
          }
          var v1393 = v3154 + elem$$104;
          introspect(JAM.policy.p4) {
            var v1394 = wrap$$1[2]
          }
          JAM.set(div$$6, "innerHTML", v1393 + v1394);
          var v1395 = depth$$1;
          depth$$1 = depth$$1 - 1;
          for (;v1395;) {
            div$$6 = div$$6.lastChild;
            v1395 = depth$$1;
            depth$$1 = depth$$1 - 1;
          }
          if (!jQuery$$1.support.tbody) {
            var hasBody = rtbody.test(elem$$104);
            var v1396;
            var v4239 = tag$$1 === "table";
            if (v4239) {
              v4239 = !hasBody;
            }
            if (v4239) {
              var v3156 = div$$6.firstChild;
              if (v3156) {
                v3156 = div$$6.firstChild.childNodes;
              }
              v1396 = v3156;
            } else {
              var v3157;
              introspect(JAM.policy.p4) {
                var v5279 = wrap$$1[1]
              }
              var v4949 = v5279 === "<table>";
              if (v4949) {
                v4949 = !hasBody;
              }
              if (v4949) {
                v3157 = div$$6.childNodes;
              } else {
                v3157 = [];
              }
              v1396 = v3157;
            }
            var tbody = v1396;
            var j$$4 = tbody.length - 1;
            var v1401 = j$$4 >= 0;
            for (;v1401;) {
              introspect(JAM.policy.p4) {
                var v4242 = tbody[j$$4]
              }
              var v3159 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [v4242, "tbody"]);
              if (v3159) {
                introspect(JAM.policy.p4) {
                  var v5280 = tbody[j$$4]
                }
                v3159 = !v5280.childNodes.length;
              }
              if (v3159) {
                introspect(JAM.policy.p4) {
                  var v3160 = tbody[j$$4]
                }
                var v1398 = v3160.parentNode;
                introspect(JAM.policy.p4) {
                  var v1399 = tbody[j$$4]
                }
                v1398.removeChild(v1399);
              }
              j$$4 = j$$4 - 1;
              v1401 = j$$4 >= 0;
            }
          }
          var v3161 = !jQuery$$1.support.leadingWhitespace;
          if (v3161) {
            v3161 = rleadingWhitespace.test(elem$$104);
          }
          if (v3161) {
            var v4245 = rleadingWhitespace.exec(elem$$104);
            introspect(JAM.policy.p4) {
              var v3162 = v4245[0]
            }
            JAM.call(div$$6.insertBefore, div$$6, [context$$15.createTextNode(v3162), div$$6.firstChild]);
          }
          elem$$104 = div$$6.childNodes;
        }
      }
      if (elem$$104.nodeType) {
        JAM.call(ret$$21.push, ret$$21, [elem$$104]);
      } else {
        ret$$21 = JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$21, elem$$104]);
      }
      i$$80 = i$$80 + 1;
      introspect(JAM.policy.p4) {
        var v3163 = elem$$104 = elems$$8[i$$80]
      }
      v1409 = v3163 != null;
    }
    if (fragment$$3) {
      i$$80 = 0;
      introspect(JAM.policy.p4) {
        var v1416 = ret$$21[i$$80]
      }
      for (;v1416;) {
        var v4246 = scripts$$2;
        if (v4246) {
          introspect(JAM.policy.p4) {
            var v4952 = ret$$21[i$$80]
          }
          v4246 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [v4952, "script"]);
        }
        var v3164 = v4246;
        if (v3164) {
          introspect(JAM.policy.p4) {
            var v5281 = ret$$21[i$$80]
          }
          var v4247 = !v5281.type;
          if (!v4247) {
            introspect(JAM.policy.p4) {
              var v5440 = ret$$21[i$$80]
            }
            v4247 = v5440.type.toLowerCase() === "text/javascript";
          }
          v3164 = v4247;
        }
        if (v3164) {
          var v3165;
          introspect(JAM.policy.p4) {
            var v4956 = ret$$21[i$$80]
          }
          if (v4956.parentNode) {
            introspect(JAM.policy.p4) {
              var v4957 = ret$$21[i$$80]
            }
            var v4248 = v4957.parentNode;
            introspect(JAM.policy.p4) {
              var v4249 = ret$$21[i$$80]
            }
            v3165 = v4248.removeChild(v4249);
          } else {
            introspect(JAM.policy.p4) {
              v3165 = ret$$21[i$$80];
            }
          }
          JAM.call(scripts$$2.push, scripts$$2, [v3165]);
        } else {
          introspect(JAM.policy.p4) {
            var v4251 = ret$$21[i$$80]
          }
          if (v4251.nodeType === 1) {
            var v1411 = ret$$21.splice;
            var v3167 = [i$$80 + 1, 0];
            introspect(JAM.policy.p4) {
              var v4958 = ret$$21[i$$80]
            }
            JAM.call(v1411.apply, v1411, [ret$$21, v3167.concat(JAM.call(jQuery$$1.makeArray, jQuery$$1, [v4958.getElementsByTagName("script")]))]);
          }
          introspect(JAM.policy.p4) {
            var v1414 = ret$$21[i$$80]
          }
          JAM.call(fragment$$3.appendChild, fragment$$3, [v1414]);
        }
        i$$80 = i$$80 + 1;
        introspect(JAM.policy.p4) {
          v1416 = ret$$21[i$$80];
        }
      }
    }
    return ret$$21;
  }
  function v272(name$$48, original) {
    function v271(selector$$19) {
      var ret$$20 = [];
      var insert = jQuery$$1(selector$$19);
      var v1417 = this.length === 1;
      if (v1417) {
        introspect(JAM.policy.p4) {
          var v3170 = this[0]
        }
        v1417 = v3170.parentNode;
      }
      var parent$$8 = v1417;
      var v4959 = parent$$8;
      if (v4959) {
        v4959 = parent$$8.nodeType === 11;
      }
      var v4254 = v4959;
      if (v4254) {
        v4254 = parent$$8.childNodes.length === 1;
      }
      var v3171 = v4254;
      if (v3171) {
        v3171 = insert.length === 1;
      }
      if (v3171) {
        introspect(JAM.policy.p4) {
          var v1418 = this[0]
        }
        JAM.call(JAM.get(insert, original, JAM.policy.p4), insert, [v1418]);
        return this;
      } else {
        var i$$79 = 0;
        var l$$22 = insert.length;
        var v1422 = i$$79 < l$$22;
        for (;v1422;) {
          var v3172;
          if (i$$79 > 0) {
            v3172 = JAM.call(this.clone, this, [true]);
          } else {
            v3172 = this;
          }
          var elems$$7 = v3172.get();
          var v3173 = jQuery$$1.fn;
          introspect(JAM.policy.p4) {
            var v1420 = v3173[original]
          }
          introspect(JAM.policy.p4) {
            var v3174 = insert[i$$79]
          }
          JAM.call(v1420.apply, v1420, [jQuery$$1(v3174), elems$$7]);
          ret$$20 = ret$$20.concat(elems$$7);
          i$$79 = i$$79 + 1;
          v1422 = i$$79 < l$$22;
        }
        return JAM.call(this.pushStack, this, [ret$$20, name$$48, insert.selector]);
      }
      return;
    }
    JAM.set(jQuery$$1.fn, name$$48, v271, JAM.policy.p3);
    return;
  }
  function v270(args$$6, table, callback$$30) {
    function v269(i$$78) {
      var self$$10 = jQuery$$1(this);
      var v1426 = args$$6;
      var v4257;
      if (table) {
        v4257 = self$$10.html();
      } else {
        v4257 = undefined$$1;
      }
      var v5583 = JAM.call(value$$40.call, value$$40, [this, i$$78, v4257]);
      introspect(JAM.policy.p3) {
        v1426[0] = v5583;
      }
      JAM.call(self$$10.domManip, self$$10, [args$$6, table, callback$$30]);
      return;
    }
    function v268() {
      var v1427 = jQuery$$1(this);
      JAM.call(v1427.domManip, v1427, [args$$6, table, callback$$30, true]);
      return;
    }
    function root$$3(elem$$103, cur$$7) {
      var v1428;
      if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$103, "table"])) {
        var v4258 = elem$$103.getElementsByTagName("tbody");
        introspect(JAM.policy.p4) {
          var v3176 = v4258[0]
        }
        if (!v3176) {
          v3176 = JAM.call(elem$$103.appendChild, elem$$103, [elem$$103.ownerDocument.createElement("tbody")]);
        }
        v1428 = v3176;
      } else {
        v1428 = elem$$103;
      }
      return v1428;
    }
    var results$$7;
    var first$$3;
    introspect(JAM.policy.p4) {
      var value$$40 = args$$6[0]
    }
    var scripts$$1 = [];
    var fragment$$2;
    var parent$$7;
    var v4962 = !jQuery$$1.support.checkClone;
    if (v4962) {
      v4962 = arguments.length === 3;
    }
    var v4261 = v4962;
    if (v4261) {
      v4261 = typeof value$$40 === "string";
    }
    var v3178 = v4261;
    if (v3178) {
      v3178 = rchecked.test(value$$40);
    }
    if (v3178) {
      return JAM.call(this.each, this, [v268]);
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$40])) {
      return JAM.call(this.each, this, [v269]);
    }
    introspect(JAM.policy.p4) {
      var v1439 = this[0]
    }
    if (v1439) {
      var v1431 = value$$40;
      if (v1431) {
        v1431 = value$$40.parentNode;
      }
      parent$$7 = v1431;
      var v4964 = jQuery$$1.support.parentNode;
      if (v4964) {
        v4964 = parent$$7;
      }
      var v4262 = v4964;
      if (v4262) {
        v4262 = parent$$7.nodeType === 11;
      }
      var v3179 = v4262;
      if (v3179) {
        v3179 = parent$$7.childNodes.length === this.length;
      }
      if (v3179) {
        results$$7 = {fragment:parent$$7};
      } else {
        results$$7 = buildFragment(args$$6, this, scripts$$1);
      }
      fragment$$2 = results$$7.fragment;
      if (fragment$$2.childNodes.length === 1) {
        first$$3 = fragment$$2 = fragment$$2.firstChild;
      } else {
        first$$3 = fragment$$2.firstChild;
      }
      if (first$$3) {
        var v1434 = table;
        if (v1434) {
          v1434 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [first$$3, "tr"]);
        }
        table = v1434;
        var i$$77 = 0;
        var l$$21 = this.length;
        var v1437 = i$$77 < l$$21;
        for (;v1437;) {
          var v3181;
          if (table) {
            introspect(JAM.policy.p4) {
              var v4266 = this[i$$77]
            }
            v3181 = root$$3(v4266, first$$3);
          } else {
            introspect(JAM.policy.p4) {
              v3181 = this[i$$77];
            }
          }
          var v1435 = v3181;
          var v3182;
          var v5288 = i$$77 > 0;
          if (!v5288) {
            v5288 = results$$7.cacheable;
          }
          var v4967 = v5288;
          if (!v4967) {
            v4967 = this.length > 1;
          }
          if (v4967) {
            v3182 = fragment$$2.cloneNode(true);
          } else {
            v3182 = fragment$$2;
          }
          JAM.call(callback$$30.call, callback$$30, [v1435, v3182]);
          i$$77 = i$$77 + 1;
          v1437 = i$$77 < l$$21;
        }
      }
      if (scripts$$1.length) {
        JAM.call(jQuery$$1.each, jQuery$$1, [scripts$$1, evalScript]);
      }
    }
    return this;
  }
  function v267(selector$$18) {
    return JAM.call(this.remove, this, [selector$$18, true]);
  }
  function v266(value$$39) {
    function v265() {
      var next = this.nextSibling;
      var parent$$6 = this.parentNode;
      jQuery$$1(this).remove();
      if (next) {
        var v1441 = jQuery$$1(next);
        JAM.call(v1441.before, v1441, [value$$39]);
      } else {
        var v1442 = jQuery$$1(parent$$6);
        JAM.call(v1442.append, v1442, [value$$39]);
      }
      return;
    }
    function v264(i$$76) {
      var self$$9 = jQuery$$1(this);
      var old$$3 = self$$9.html();
      JAM.call(self$$9.replaceWith, self$$9, [JAM.call(value$$39.call, value$$39, [this, i$$76, old$$3])]);
      return;
    }
    introspect(JAM.policy.p4) {
      var v3183 = this[0]
    }
    if (v3183) {
      introspect(JAM.policy.p4) {
        var v4268 = this[0]
      }
      v3183 = v4268.parentNode;
    }
    if (v3183) {
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$39])) {
        return JAM.call(this.each, this, [v264]);
      }
      if (typeof value$$39 !== "string") {
        value$$39 = jQuery$$1(value$$39).detach();
      }
      return JAM.call(this.each, this, [v265]);
    } else {
      var v4269;
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$39])) {
        v4269 = value$$39();
      } else {
        v4269 = value$$39;
      }
      return JAM.call(this.pushStack, this, [jQuery$$1(v4269), "replaceWith", value$$39]);
    }
    return;
  }
  function v263(value$$38) {
    function v262(i$$75) {
      function v261() {
        return JAM.call(value$$38.call, value$$38, [this, i$$75, old$$2]);
      }
      var self$$8 = jQuery$$1(this);
      var old$$2 = self$$8.html();
      var v1449 = self$$8.empty();
      JAM.call(v1449.append, v1449, [v261]);
      return;
    }
    if (value$$38 === undefined$$1) {
      var v1450;
      introspect(JAM.policy.p4) {
        var v4270 = this[0]
      }
      if (v4270) {
        introspect(JAM.policy.p4) {
          var v5291 = this[0]
        }
        v4270 = v5291.nodeType === 1;
      }
      if (v4270) {
        introspect(JAM.policy.p4) {
          var v4271 = this[0]
        }
        v1450 = v4271.innerHTML.replace(rinlinejQuery, "");
      } else {
        v1450 = null;
      }
      return v1450;
    } else {
      var v4970 = typeof value$$38 === "string";
      if (v4970) {
        v4970 = !rnocache.test(value$$38);
      }
      var v4272 = v4970;
      if (v4272) {
        var v4971 = jQuery$$1.support.leadingWhitespace;
        if (!v4971) {
          v4971 = !rleadingWhitespace.test(value$$38);
        }
        v4272 = v4971;
      }
      var v3188 = v4272;
      if (v3188) {
        var v4972 = wrapMap;
        var v5495 = rtagName.exec(value$$38);
        if (!v5495) {
          v5495 = ["", ""];
        }
        var v5443 = v5495;
        introspect(JAM.policy.p4) {
          var v5297 = v5443[1]
        }
        var v4973 = v5297.toLowerCase();
        introspect(JAM.policy.p4) {
          var v4273 = v4972[v4973]
        }
        v3188 = !v4273;
      }
      if (v3188) {
        value$$38 = value$$38.replace(rxhtmlTag, fcloseTag);
        try {
          var i$$74 = 0;
          var l$$20 = this.length;
          var v1454 = i$$74 < l$$20;
          for (;v1454;) {
            introspect(JAM.policy.p4) {
              var v4274 = this[i$$74]
            }
            if (v4274.nodeType === 1) {
              introspect(JAM.policy.p4) {
                var v3190 = this[i$$74]
              }
              JAM.call(jQuery$$1.cleanData, jQuery$$1, [v3190.getElementsByTagName("*")]);
              introspect(JAM.policy.p4) {
                var v1452 = this[i$$74]
              }
              JAM.set(v1452, "innerHTML", value$$38);
            }
            i$$74 = i$$74 + 1;
            v1454 = i$$74 < l$$20;
          }
        } catch (e$$22) {
          var v1455 = this.empty();
          JAM.call(v1455.append, v1455, [value$$38]);
        }
      } else {
        if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$38])) {
          JAM.call(this.each, this, [v262]);
        } else {
          var v1456 = this.empty();
          JAM.call(v1456.append, v1456, [value$$38]);
        }
      }
    }
    return this;
  }
  function v260(events$$5) {
    function v259() {
      var v3191 = !jQuery$$1.support.noCloneEvent;
      if (v3191) {
        v3191 = !JAM.call(jQuery$$1.isXMLDoc, jQuery$$1, [this]);
      }
      if (v3191) {
        var html$$3 = this.outerHTML;
        var ownerDocument = this.ownerDocument;
        if (!html$$3) {
          var div$$5 = ownerDocument.createElement("div");
          JAM.call(div$$5.appendChild, div$$5, [this.cloneNode(true)]);
          html$$3 = div$$5.innerHTML;
        }
        var v1462 = JAM.call(jQuery$$1.clean, jQuery$$1, [[html$$3.replace(rinlinejQuery, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(rleadingWhitespace, "")], ownerDocument]);
        introspect(JAM.policy.p4) {
          return v1462[0];
        }
      } else {
        return this.cloneNode(true);
      }
      return;
    }
    var ret$$19 = JAM.call(this.map, this, [v259]);
    if (events$$5 === true) {
      cloneCopyEvent(this, ret$$19);
      cloneCopyEvent(JAM.call(this.find, this, ["*"]), JAM.call(ret$$19.find, ret$$19, ["*"]));
    }
    return ret$$19;
  }
  function v258() {
    var i$$73 = 0;
    var elem$$102;
    introspect(JAM.policy.p4) {
      var v3193 = elem$$102 = this[i$$73]
    }
    var v1471 = v3193 != null;
    for (;v1471;) {
      if (elem$$102.nodeType === 1) {
        JAM.call(jQuery$$1.cleanData, jQuery$$1, [elem$$102.getElementsByTagName("*")]);
      }
      var v1470 = elem$$102.firstChild;
      for (;v1470;) {
        elem$$102.removeChild(elem$$102.firstChild);
        v1470 = elem$$102.firstChild;
      }
      i$$73 = i$$73 + 1;
      introspect(JAM.policy.p4) {
        var v3195 = elem$$102 = this[i$$73]
      }
      v1471 = v3195 != null;
    }
    return this;
  }
  function v257(selector$$17, keepData) {
    var i$$72 = 0;
    var elem$$101;
    introspect(JAM.policy.p4) {
      var v3196 = elem$$101 = this[i$$72]
    }
    var v1478 = v3196 != null;
    for (;v1478;) {
      var v3197 = !selector$$17;
      if (!v3197) {
        v3197 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$17, [elem$$101]]).length;
      }
      if (v3197) {
        var v3198 = !keepData;
        if (v3198) {
          v3198 = elem$$101.nodeType === 1;
        }
        if (v3198) {
          JAM.call(jQuery$$1.cleanData, jQuery$$1, [elem$$101.getElementsByTagName("*")]);
          JAM.call(jQuery$$1.cleanData, jQuery$$1, [[elem$$101]]);
        }
        if (elem$$101.parentNode) {
          elem$$101.parentNode.removeChild(elem$$101);
        }
      }
      i$$72 = i$$72 + 1;
      introspect(JAM.policy.p4) {
        var v3199 = elem$$101 = this[i$$72]
      }
      v1478 = v3199 != null;
    }
    return this;
  }
  function v256() {
    function v255(elem$$100) {
      var v1479 = this.parentNode;
      JAM.call(v1479.insertBefore, v1479, [elem$$100, this.nextSibling]);
      return;
    }
    introspect(JAM.policy.p4) {
      var v3200 = this[0]
    }
    if (v3200) {
      introspect(JAM.policy.p4) {
        var v4281 = this[0]
      }
      v3200 = v4281.parentNode;
    }
    if (v3200) {
      return JAM.call(this.domManip, this, [arguments, false, v255]);
    } else {
      if (arguments.length) {
        var set$$7 = JAM.call(this.pushStack, this, [this, "after", arguments]);
        var v1481 = set$$7.push;
        introspect(JAM.policy.p4) {
          var v4282 = arguments[0]
        }
        JAM.call(v1481.apply, v1481, [set$$7, jQuery$$1(v4282).toArray()]);
        return set$$7;
      }
    }
    return;
  }
  function v254() {
    function v253(elem$$99) {
      var v1485 = this.parentNode;
      JAM.call(v1485.insertBefore, v1485, [elem$$99, this]);
      return;
    }
    introspect(JAM.policy.p4) {
      var v3202 = this[0]
    }
    if (v3202) {
      introspect(JAM.policy.p4) {
        var v4283 = this[0]
      }
      v3202 = v4283.parentNode;
    }
    if (v3202) {
      return JAM.call(this.domManip, this, [arguments, false, v253]);
    } else {
      if (arguments.length) {
        introspect(JAM.policy.p4) {
          var v1486 = arguments[0]
        }
        var set$$6 = jQuery$$1(v1486);
        var v1487 = set$$6.push;
        JAM.call(v1487.apply, v1487, [set$$6, this.toArray()]);
        return JAM.call(this.pushStack, this, [set$$6, "before", arguments]);
      }
    }
    return;
  }
  function v252() {
    function v251(elem$$98) {
      if (this.nodeType === 1) {
        JAM.call(this.insertBefore, this, [elem$$98, this.firstChild]);
      }
      return;
    }
    return JAM.call(this.domManip, this, [arguments, true, v251]);
  }
  function v250() {
    function v249(elem$$97) {
      if (this.nodeType === 1) {
        JAM.call(this.appendChild, this, [elem$$97]);
      }
      return;
    }
    return JAM.call(this.domManip, this, [arguments, true, v249]);
  }
  function v248() {
    function v247() {
      if (!JAM.call(jQuery$$1.nodeName, jQuery$$1, [this, "body"])) {
        var v1494 = jQuery$$1(this);
        JAM.call(v1494.replaceWith, v1494, [this.childNodes]);
      }
      return;
    }
    var v3206 = this.parent();
    return JAM.call(v3206.each, v3206, [v247]).end();
  }
  function v246(html$$2) {
    function v245() {
      var v1498 = jQuery$$1(this);
      JAM.call(v1498.wrapAll, v1498, [html$$2]);
      return;
    }
    return JAM.call(this.each, this, [v245]);
  }
  function v244(html$$1) {
    function v243() {
      var self$$7 = jQuery$$1(this);
      var contents = self$$7.contents();
      if (contents.length) {
        JAM.call(contents.wrapAll, contents, [html$$1]);
      } else {
        JAM.call(self$$7.append, self$$7, [html$$1]);
      }
      return;
    }
    function v242(i$$71) {
      var v1500 = jQuery$$1(this);
      JAM.call(v1500.wrapInner, v1500, [JAM.call(html$$1.call, html$$1, [this, i$$71])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [html$$1])) {
      return JAM.call(this.each, this, [v242]);
    }
    return JAM.call(this.each, this, [v243]);
  }
  function v241(html) {
    function v240() {
      var elem$$96 = this;
      var v3207 = elem$$96.firstChild;
      if (v3207) {
        v3207 = elem$$96.firstChild.nodeType === 1;
      }
      var v1503 = v3207;
      for (;v1503;) {
        elem$$96 = elem$$96.firstChild;
        var v3208 = elem$$96.firstChild;
        if (v3208) {
          v3208 = elem$$96.firstChild.nodeType === 1;
        }
        v1503 = v3208;
      }
      return elem$$96;
    }
    function v239(i$$70) {
      var v1504 = jQuery$$1(this);
      JAM.call(v1504.wrapAll, v1504, [JAM.call(html.call, html, [this, i$$70])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [html])) {
      return JAM.call(this.each, this, [v239]);
    }
    introspect(JAM.policy.p4) {
      var v1511 = this[0]
    }
    if (v1511) {
      introspect(JAM.policy.p4) {
        var v4979 = this[0]
      }
      var v3209 = jQuery$$1(html, v4979.ownerDocument);
      var v1507 = JAM.call(v3209.eq, v3209, [0]);
      var wrap = JAM.call(v1507.clone, v1507, [true]);
      introspect(JAM.policy.p4) {
        var v3210 = this[0]
      }
      if (v3210.parentNode) {
        introspect(JAM.policy.p4) {
          var v1508 = this[0]
        }
        JAM.call(wrap.insertBefore, wrap, [v1508]);
      }
      var v1510 = JAM.call(wrap.map, wrap, [v240]);
      JAM.call(v1510.append, v1510, [this]);
    }
    return this;
  }
  function v238(text$$8) {
    function v237(i$$69) {
      var self$$6 = jQuery$$1(this);
      JAM.call(self$$6.text, self$$6, [JAM.call(text$$8.call, text$$8, [this, i$$69, self$$6.text()])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [text$$8])) {
      return JAM.call(this.each, this, [v237]);
    }
    var v3212 = typeof text$$8 !== "object";
    if (v3212) {
      v3212 = text$$8 !== undefined$$1;
    }
    if (v3212) {
      var v1514 = this.empty();
      introspect(JAM.policy.p4) {
        var v4980 = this[0]
      }
      if (v4980) {
        introspect(JAM.policy.p4) {
          var v5299 = this[0]
        }
        v4980 = v5299.ownerDocument;
      }
      var v4288 = v4980;
      if (!v4288) {
        v4288 = document$$1;
      }
      return JAM.call(v1514.append, v1514, [v4288.createTextNode(text$$8)]);
    }
    return JAM.call(jQuery$$1.text, jQuery$$1, [this]);
  }
  function v236(n$$2, elem$$95) {
    var r$$1 = [];
    for (;n$$2;) {
      var v3214 = n$$2.nodeType === 1;
      if (v3214) {
        v3214 = n$$2 !== elem$$95;
      }
      if (v3214) {
        JAM.call(r$$1.push, r$$1, [n$$2]);
      }
      n$$2 = n$$2.nextSibling;
    }
    return r$$1;
  }
  function v235(cur$$6, result$$5, dir$$3, elem$$94) {
    result$$5 = result$$5 || 1;
    var num$$7 = 0;
    for (;cur$$6;) {
      var v3215 = cur$$6.nodeType === 1;
      if (v3215) {
        v3215 = (num$$7 = num$$7 + 1) === result$$5;
      }
      if (v3215) {
        break;
      }
      introspect(JAM.policy.p4) {
        cur$$6 = cur$$6[dir$$3];
      }
    }
    return cur$$6;
  }
  function v234(elem$$93, dir$$2, until$$4) {
    var matched = [];
    introspect(JAM.policy.p4) {
      var cur$$5 = elem$$93[dir$$2]
    }
    var v4292 = cur$$5;
    if (v4292) {
      v4292 = cur$$5.nodeType !== 9;
    }
    var v3216 = v4292;
    if (v3216) {
      var v4983 = until$$4 === undefined$$1;
      if (!v4983) {
        v4983 = cur$$5.nodeType !== 1;
      }
      var v4293 = v4983;
      if (!v4293) {
        var v5302 = jQuery$$1(cur$$5);
        v4293 = !JAM.call(v5302.is, v5302, [until$$4]);
      }
      v3216 = v4293;
    }
    var v1520 = v3216;
    for (;v1520;) {
      if (cur$$5.nodeType === 1) {
        JAM.call(matched.push, matched, [cur$$5]);
      }
      introspect(JAM.policy.p4) {
        cur$$5 = cur$$5[dir$$2];
      }
      var v4294 = cur$$5;
      if (v4294) {
        v4294 = cur$$5.nodeType !== 9;
      }
      var v3218 = v4294;
      if (v3218) {
        var v4987 = until$$4 === undefined$$1;
        if (!v4987) {
          v4987 = cur$$5.nodeType !== 1;
        }
        var v4295 = v4987;
        if (!v4295) {
          var v5305 = jQuery$$1(cur$$5);
          v4295 = !JAM.call(v5305.is, v5305, [until$$4]);
        }
        v3218 = v4295;
      }
      v1520 = v3218;
    }
    return matched;
  }
  function v233(expr$$6, elems$$6, not$$5) {
    if (not$$5) {
      expr$$6 = ":not(" + expr$$6 + ")";
    }
    var v1522 = jQuery$$1.find;
    return JAM.call(v1522.matches, v1522, [expr$$6, elems$$6]);
  }
  function v232(name$$47, fn$$14) {
    function v231(until$$3, selector$$16) {
      var ret$$18 = JAM.call(jQuery$$1.map, jQuery$$1, [this, fn$$14, until$$3]);
      if (!runtil.test(name$$47)) {
        selector$$16 = until$$3;
      }
      var v3220 = selector$$16;
      if (v3220) {
        v3220 = typeof selector$$16 === "string";
      }
      if (v3220) {
        ret$$18 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$16, ret$$18]);
      }
      var v1525;
      if (this.length > 1) {
        v1525 = JAM.call(jQuery$$1.unique, jQuery$$1, [ret$$18]);
      } else {
        v1525 = ret$$18;
      }
      ret$$18 = v1525;
      var v4298 = this.length > 1;
      if (!v4298) {
        v4298 = rmultiselector.test(selector$$16);
      }
      var v3222 = v4298;
      if (v3222) {
        v3222 = rparentsprev.test(name$$47);
      }
      if (v3222) {
        ret$$18 = ret$$18.reverse();
      }
      return JAM.call(this.pushStack, this, [ret$$18, name$$47, JAM.call(slice.call, slice, [arguments]).join(",")]);
    }
    JAM.set(jQuery$$1.fn, name$$47, v231, JAM.policy.p3);
    return;
  }
  function v230(elem$$92) {
    var v1529;
    if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$92, "iframe"])) {
      var v3224 = elem$$92.contentDocument;
      if (!v3224) {
        v3224 = elem$$92.contentWindow.document;
      }
      v1529 = v3224;
    } else {
      v1529 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [elem$$92.childNodes]);
    }
    return v1529;
  }
  function v229(elem$$91) {
    return JAM.call(jQuery$$1.sibling, jQuery$$1, [elem$$91.firstChild]);
  }
  function v228(elem$$90) {
    return JAM.call(jQuery$$1.sibling, jQuery$$1, [elem$$90.parentNode.firstChild, elem$$90]);
  }
  function v227(elem$$89, i$$68, until$$2) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$89, "previousSibling", until$$2]);
  }
  function v226(elem$$88, i$$67, until$$1) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$88, "nextSibling", until$$1]);
  }
  function v225(elem$$87) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$87, "previousSibling"]);
  }
  function v224(elem$$86) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$86, "nextSibling"]);
  }
  function v223(elem$$85) {
    return JAM.call(jQuery$$1.nth, jQuery$$1, [elem$$85, 2, "previousSibling"]);
  }
  function v222(elem$$84) {
    return JAM.call(jQuery$$1.nth, jQuery$$1, [elem$$84, 2, "nextSibling"]);
  }
  function v221(elem$$83, i$$66, until) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$83, "parentNode", until]);
  }
  function v220(elem$$82) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$82, "parentNode"]);
  }
  function v219(elem$$81) {
    var parent$$5 = elem$$81.parentNode;
    var v1532;
    var v4301 = parent$$5;
    if (v4301) {
      v4301 = parent$$5.nodeType !== 11;
    }
    if (v4301) {
      v1532 = parent$$5;
    } else {
      v1532 = null;
    }
    return v1532;
  }
  function v218() {
    return JAM.call(this.add, this, [this.prevObject]);
  }
  function v217(selector$$15, context$$14) {
    var v1534;
    if (typeof selector$$15 === "string") {
      var v4303 = context$$14;
      if (!v4303) {
        v4303 = this.context;
      }
      v1534 = jQuery$$1(selector$$15, v4303);
    } else {
      v1534 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [selector$$15]);
    }
    var set$$5 = v1534;
    var all$$4 = JAM.call(jQuery$$1.merge, jQuery$$1, [this.get(), set$$5]);
    var v3231;
    introspect(JAM.policy.p4) {
      var v5306 = set$$5[0]
    }
    var v4994 = isDisconnected(v5306);
    if (!v4994) {
      introspect(JAM.policy.p4) {
        var v5307 = all$$4[0]
      }
      v4994 = isDisconnected(v5307);
    }
    if (v4994) {
      v3231 = all$$4;
    } else {
      v3231 = JAM.call(jQuery$$1.unique, jQuery$$1, [all$$4]);
    }
    return JAM.call(this.pushStack, this, [v3231]);
  }
  function v216(elem$$80) {
    var v3232 = !elem$$80;
    if (!v3232) {
      v3232 = typeof elem$$80 === "string";
    }
    if (v3232) {
      introspect(JAM.policy.p4) {
        var v1537 = this[0]
      }
      var v3233;
      if (elem$$80) {
        v3233 = jQuery$$1(elem$$80);
      } else {
        v3233 = this.parent().children();
      }
      return JAM.call(jQuery$$1.inArray, jQuery$$1, [v1537, v3233]);
    }
    var v3234;
    if (elem$$80.jquery) {
      introspect(JAM.policy.p4) {
        v3234 = elem$$80[0];
      }
    } else {
      v3234 = elem$$80;
    }
    return JAM.call(jQuery$$1.inArray, jQuery$$1, [v3234, this]);
  }
  function v215(selectors$$8, context$$13) {
    function v214(i$$65, cur$$4) {
      var v4309 = cur$$4;
      if (v4309) {
        v4309 = cur$$4.ownerDocument;
      }
      var v3235 = v4309;
      if (v3235) {
        v3235 = cur$$4 !== context$$13;
      }
      var v1542 = v3235;
      for (;v1542;) {
        var v3236;
        if (pos$$1) {
          v3236 = JAM.call(pos$$1.index, pos$$1, [cur$$4]) > -1;
        } else {
          var v4311 = jQuery$$1(cur$$4);
          v3236 = JAM.call(v4311.is, v4311, [selectors$$8]);
        }
        if (v3236) {
          return cur$$4;
        }
        cur$$4 = cur$$4.parentNode;
        var v4312 = cur$$4;
        if (v4312) {
          v4312 = cur$$4.ownerDocument;
        }
        var v3237 = v4312;
        if (v3237) {
          v3237 = cur$$4 !== context$$13;
        }
        v1542 = v3237;
      }
      return null;
    }
    if (JAM.call(jQuery$$1.isArray, jQuery$$1, [selectors$$8])) {
      var ret$$17 = [];
      introspect(JAM.policy.p4) {
        var cur$$3 = this[0]
      }
      var match$$36;
      var matches = {};
      var selector$$14;
      var v3238 = cur$$3;
      if (v3238) {
        v3238 = selectors$$8.length;
      }
      if (v3238) {
        var i$$64 = 0;
        var l$$19 = selectors$$8.length;
        var v1546 = i$$64 < l$$19;
        for (;v1546;) {
          introspect(JAM.policy.p4) {
            selector$$14 = selectors$$8[i$$64];
          }
          introspect(JAM.policy.p4) {
            var v3239 = matches[selector$$14]
          }
          if (!v3239) {
            var v1543 = matches;
            var v1544 = selector$$14;
            var v3240;
            if (jQuery$$1.expr.match.POS.test(selector$$14)) {
              var v4996 = context$$13;
              if (!v4996) {
                v4996 = this.context;
              }
              v3240 = jQuery$$1(selector$$14, v4996);
            } else {
              v3240 = selector$$14;
            }
            JAM.set(v1543, v1544, v3240, JAM.policy.p3);
          }
          i$$64 = i$$64 + 1;
          v1546 = i$$64 < l$$19;
        }
        var v4315 = cur$$3;
        if (v4315) {
          v4315 = cur$$3.ownerDocument;
        }
        var v3241 = v4315;
        if (v3241) {
          v3241 = cur$$3 !== context$$13;
        }
        var v1549 = v3241;
        for (;v1549;) {
          for (selector$$14 in matches) {
            introspect(JAM.policy.p4) {
              match$$36 = matches[selector$$14];
            }
            var v3242;
            if (match$$36.jquery) {
              v3242 = JAM.call(match$$36.index, match$$36, [cur$$3]) > -1;
            } else {
              var v4317 = jQuery$$1(cur$$3);
              v3242 = JAM.call(v4317.is, v4317, [match$$36]);
            }
            if (v3242) {
              JAM.call(ret$$17.push, ret$$17, [{selector:selector$$14, elem:cur$$3}]);
              introspect(JAM.policy.p4) {
                delete matches[selector$$14];
              }
            }
          }
          cur$$3 = cur$$3.parentNode;
          var v4319 = cur$$3;
          if (v4319) {
            v4319 = cur$$3.ownerDocument;
          }
          var v3243 = v4319;
          if (v3243) {
            v3243 = cur$$3 !== context$$13;
          }
          v1549 = v3243;
        }
      }
      return ret$$17;
    }
    var v1552;
    if (jQuery$$1.expr.match.POS.test(selectors$$8)) {
      var v4321 = context$$13;
      if (!v4321) {
        v4321 = this.context;
      }
      v1552 = jQuery$$1(selectors$$8, v4321);
    } else {
      v1552 = null;
    }
    var pos$$1 = v1552;
    return JAM.call(this.map, this, [v214]);
  }
  function v213(selector$$13) {
    var v1553 = !!selector$$13;
    if (v1553) {
      v1553 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$13, this]).length > 0;
    }
    return v1553;
  }
  function v212(selector$$12) {
    return JAM.call(this.pushStack, this, [winnow(this, selector$$12, true), "filter", selector$$12]);
  }
  function v211(selector$$11) {
    return JAM.call(this.pushStack, this, [winnow(this, selector$$11, false), "not", selector$$11]);
  }
  function v210(target$$28) {
    function v209() {
      var i$$63 = 0;
      var l$$18 = targets.length;
      var v1557 = i$$63 < l$$18;
      for (;v1557;) {
        introspect(JAM.policy.p4) {
          var v3248 = targets[i$$63]
        }
        if (JAM.call(jQuery$$1.contains, jQuery$$1, [this, v3248])) {
          return true;
        }
        i$$63 = i$$63 + 1;
        v1557 = i$$63 < l$$18;
      }
      return;
    }
    var targets = jQuery$$1(target$$28);
    return JAM.call(this.filter, this, [v209]);
  }
  function v208(selector$$10) {
    var ret$$16 = JAM.call(this.pushStack, this, ["", "find", selector$$10]);
    var length$$17 = 0;
    var i$$62 = 0;
    var l$$17 = this.length;
    var v1564 = i$$62 < l$$17;
    for (;v1564;) {
      length$$17 = ret$$16.length;
      introspect(JAM.policy.p4) {
        var v1558 = this[i$$62]
      }
      JAM.call(jQuery$$1.find, jQuery$$1, [selector$$10, v1558, ret$$16]);
      if (i$$62 > 0) {
        var n$$1 = length$$17;
        var v1562 = n$$1 < ret$$16.length;
        for (;v1562;) {
          var r = 0;
          var v1561 = r < length$$17;
          for (;v1561;) {
            introspect(JAM.policy.p4) {
              var v3250 = ret$$16[r]
            }
            introspect(JAM.policy.p4) {
              var v3251 = ret$$16[n$$1]
            }
            if (v3250 === v3251) {
              var v1559 = n$$1;
              n$$1 = n$$1 - 1;
              JAM.call(ret$$16.splice, ret$$16, [v1559, 1]);
              break;
            }
            r = r + 1;
            v1561 = r < length$$17;
          }
          n$$1 = n$$1 + 1;
          v1562 = n$$1 < ret$$16.length;
        }
      }
      i$$62 = i$$62 + 1;
      v1564 = i$$62 < l$$17;
    }
    return ret$$16;
  }
  function v207() {
    function v206(a$$5, b$$4) {
      var v1565 = a$$5 !== b$$4;
      if (v1565) {
        var v3253;
        if (a$$5.contains) {
          v3253 = JAM.call(a$$5.contains, a$$5, [b$$4]);
        } else {
          v3253 = true;
        }
        v1565 = v3253;
      }
      return v1565;
    }
    function v205(a$$4, b$$3) {
      return!!(a$$4.compareDocumentPosition(b$$3) & 16);
    }
    function v204() {
      function v203(match$$34, context$$11, isXML$$10) {
        var v3255 = typeof context$$11.getElementsByClassName !== "undefined";
        if (v3255) {
          v3255 = !isXML$$10;
        }
        if (v3255) {
          introspect(JAM.policy.p4) {
            var v1567 = match$$34[1]
          }
          return context$$11.getElementsByClassName(v1567);
        }
        return;
      }
      var div$$4 = document$$1.createElement("div");
      JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
      var v3256 = !div$$4.getElementsByClassName;
      if (!v3256) {
        v3256 = div$$4.getElementsByClassName("e").length === 0;
      }
      if (v3256) {
        return;
      }
      div$$4.lastChild.className = "e";
      if (div$$4.getElementsByClassName("e").length === 1) {
        return;
      }
      var v1572 = Expr.order;
      JAM.call(v1572.splice, v1572, [1, 0, "CLASS"]);
      Expr.find.CLASS = v203;
      div$$4 = null;
      return;
    }
    function v202() {
      function v201(query$$2, context$$10, extra$$1, seed$$1) {
        context$$10 = context$$10 || document$$1;
        var v4330 = !seed$$1;
        if (v4330) {
          v4330 = context$$10.nodeType === 9;
        }
        var v3258 = v4330;
        if (v3258) {
          v3258 = !isXML(context$$10);
        }
        if (v3258) {
          try {
            return JAM.call(makeArray, null, [context$$10.querySelectorAll(query$$2), extra$$1]);
          } catch (e$$21) {
          }
        }
        return JAM.call(oldSizzle, null, [query$$2, context$$10, extra$$1, seed$$1]);
      }
      var oldSizzle = Sizzle;
      var div$$3 = document$$1.createElement("div");
      JAM.set(div$$3, "innerHTML", "<p class='TEST'></p>");
      var v3259 = div$$3.querySelectorAll;
      if (v3259) {
        v3259 = div$$3.querySelectorAll(".TEST").length === 0;
      }
      if (v3259) {
        return;
      }
      Sizzle = v201;
      var prop$$5;
      for (prop$$5 in oldSizzle) {
        JAM.set(Sizzle, prop$$5, JAM.get(oldSizzle, prop$$5, JAM.policy.p3), JAM.policy.p3);
      }
      div$$3 = null;
      return;
    }
    function v200() {
      function v199(elem$$74) {
        return elem$$74.getAttribute("href", 2);
      }
      function v198(match$$33, context$$9) {
        introspect(JAM.policy.p4) {
          var v1577 = match$$33[1]
        }
        var results$$6 = context$$9.getElementsByTagName(v1577);
        introspect(JAM.policy.p4) {
          var v3260 = match$$33[1]
        }
        if (v3260 === "*") {
          var tmp = [];
          var i$$57 = 0;
          introspect(JAM.policy.p4) {
            var v1580 = results$$6[i$$57]
          }
          for (;v1580;) {
            introspect(JAM.policy.p4) {
              var v4333 = results$$6[i$$57]
            }
            if (v4333.nodeType === 1) {
              introspect(JAM.policy.p4) {
                var v1578 = results$$6[i$$57]
              }
              JAM.call(tmp.push, tmp, [v1578]);
            }
            i$$57 = i$$57 + 1;
            introspect(JAM.policy.p4) {
              v1580 = results$$6[i$$57];
            }
          }
          results$$6 = tmp;
        }
        return results$$6;
      }
      var div$$2 = document$$1.createElement("div");
      JAM.call(div$$2.appendChild, div$$2, [document$$1.createComment("")]);
      if (div$$2.getElementsByTagName("*").length > 0) {
        Expr.find.TAG = v198;
      }
      JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
      var v4335 = div$$2.firstChild;
      if (v4335) {
        v4335 = typeof div$$2.firstChild.getAttribute !== "undefined";
      }
      var v3263 = v4335;
      if (v3263) {
        v3263 = div$$2.firstChild.getAttribute("href") !== "#";
      }
      if (v3263) {
        Expr.attrHandle.href = v199;
      }
      div$$2 = null;
      return;
    }
    function v197() {
      function v196(elem$$73, match$$32) {
        var v1587 = typeof elem$$73.getAttributeNode !== "undefined";
        if (v1587) {
          v1587 = elem$$73.getAttributeNode("id");
        }
        var node$$4 = v1587;
        var v3265 = elem$$73.nodeType === 1;
        if (v3265) {
          v3265 = node$$4;
        }
        var v1588 = v3265;
        if (v1588) {
          v1588 = node$$4.nodeValue === match$$32;
        }
        return v1588;
      }
      function v195(match$$31, context$$8, isXML$$9) {
        var v3267 = typeof context$$8.getElementById !== "undefined";
        if (v3267) {
          v3267 = !isXML$$9;
        }
        if (v3267) {
          introspect(JAM.policy.p4) {
            var v1589 = match$$31[1]
          }
          var m$$2 = context$$8.getElementById(v1589);
          var v1590;
          if (m$$2) {
            var v3268;
            var v5313 = m$$2.id;
            introspect(JAM.policy.p4) {
              var v5314 = match$$31[1]
            }
            var v5006 = v5313 === v5314;
            if (!v5006) {
              var v5315 = typeof m$$2.getAttributeNode !== "undefined";
              if (v5315) {
                var v5447 = m$$2.getAttributeNode("id").nodeValue;
                introspect(JAM.policy.p4) {
                  var v5448 = match$$31[1]
                }
                v5315 = v5447 === v5448;
              }
              v5006 = v5315;
            }
            if (v5006) {
              v3268 = [m$$2];
            } else {
              v3268 = undefined$$1;
            }
            v1590 = v3268;
          } else {
            v1590 = [];
          }
          return v1590;
        }
        return;
      }
      var form = document$$1.createElement("div");
      var id$$4 = "script" + (new Date).getTime();
      JAM.set(form, "innerHTML", "<a name='" + id$$4 + "'/>");
      var root$$1 = document$$1.documentElement;
      JAM.call(root$$1.insertBefore, root$$1, [form, root$$1.firstChild]);
      if (document$$1.getElementById(id$$4)) {
        Expr.find.ID = v195;
        Expr.filter.ID = v196;
      }
      root$$1.removeChild(form);
      root$$1 = form = null;
      return;
    }
    function v194(a$$3, b$$2) {
      var v3270 = !a$$3.ownerDocument;
      if (!v3270) {
        v3270 = !b$$2.ownerDocument;
      }
      if (v3270) {
        if (a$$3 == b$$2) {
          hasDuplicate = true;
        }
        var v1599;
        if (a$$3.ownerDocument) {
          v1599 = -1;
        } else {
          v1599 = 1;
        }
        return v1599;
      }
      var aRange = a$$3.ownerDocument.createRange();
      var bRange = b$$2.ownerDocument.createRange();
      aRange.setStart(a$$3, 0);
      aRange.setEnd(a$$3, 0);
      bRange.setStart(b$$2, 0);
      bRange.setEnd(b$$2, 0);
      var ret$$15 = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
      if (ret$$15 === 0) {
        hasDuplicate = true;
      }
      return ret$$15;
    }
    function v193(a$$2, b$$1) {
      var v3272 = !a$$2.sourceIndex;
      if (!v3272) {
        v3272 = !b$$1.sourceIndex;
      }
      if (v3272) {
        if (a$$2 == b$$1) {
          hasDuplicate = true;
        }
        var v1606;
        if (a$$2.sourceIndex) {
          v1606 = -1;
        } else {
          v1606 = 1;
        }
        return v1606;
      }
      var ret$$14 = a$$2.sourceIndex - b$$1.sourceIndex;
      if (ret$$14 === 0) {
        hasDuplicate = true;
      }
      return ret$$14;
    }
    function v192(a$$1, b) {
      var v3274 = !a$$1.compareDocumentPosition;
      if (!v3274) {
        v3274 = !b.compareDocumentPosition;
      }
      if (v3274) {
        if (a$$1 == b) {
          hasDuplicate = true;
        }
        var v1612;
        if (a$$1.compareDocumentPosition) {
          v1612 = -1;
        } else {
          v1612 = 1;
        }
        return v1612;
      }
      var v1614;
      if (a$$1.compareDocumentPosition(b) & 4) {
        v1614 = -1;
      } else {
        var v3276;
        if (a$$1 === b) {
          v3276 = 0;
        } else {
          v3276 = 1;
        }
        v1614 = v3276;
      }
      var ret$$13 = v1614;
      if (ret$$13 === 0) {
        hasDuplicate = true;
      }
      return ret$$13;
    }
    function v191(array$$16, results$$5) {
      var ret$$12 = results$$5 || [];
      if (JAM.call(toString$$1.call, toString$$1, [array$$16]) === "[object Array]") {
        var v1616 = Array.prototype.push;
        JAM.call(v1616.apply, v1616, [ret$$12, array$$16]);
      } else {
        if (typeof array$$16.length === "number") {
          var i$$56 = 0;
          var l$$15 = array$$16.length;
          var v1618 = i$$56 < l$$15;
          for (;v1618;) {
            introspect(JAM.policy.p4) {
              var v1617 = array$$16[i$$56]
            }
            JAM.call(ret$$12.push, ret$$12, [v1617]);
            i$$56 = i$$56 + 1;
            v1618 = i$$56 < l$$15;
          }
        } else {
          i$$56 = 0;
          introspect(JAM.policy.p4) {
            var v1620 = array$$16[i$$56]
          }
          for (;v1620;) {
            introspect(JAM.policy.p4) {
              var v1619 = array$$16[i$$56]
            }
            JAM.call(ret$$12.push, ret$$12, [v1619]);
            i$$56 = i$$56 + 1;
            introspect(JAM.policy.p4) {
              v1620 = array$$16[i$$56];
            }
          }
        }
      }
      return ret$$12;
    }
    function v190(all$$3, num$$6) {
      return "\\" + (num$$6 - 0 + 1);
    }
    function v189(elem$$72, match$$30, i$$55, array$$14) {
      introspect(JAM.policy.p4) {
        var name$$46 = match$$30[2]
      }
      var v1624 = Expr.setFilters;
      introspect(JAM.policy.p4) {
        var filter$$2 = v1624[name$$46]
      }
      if (filter$$2) {
        return JAM.call(filter$$2, null, [elem$$72, i$$55, match$$30, array$$14]);
      }
      return;
    }
    function v188(elem$$71, match$$29) {
      introspect(JAM.policy.p4) {
        var name$$45 = match$$29[1]
      }
      var v1625;
      var v4353 = Expr.attrHandle;
      introspect(JAM.policy.p4) {
        var v3284 = v4353[name$$45]
      }
      if (v3284) {
        var v3282 = Expr.attrHandle;
        v1625 = JAM.call(JAM.get(v3282, name$$45, JAM.policy.p4), v3282, [elem$$71]);
      } else {
        var v3283;
        introspect(JAM.policy.p4) {
          var v5007 = elem$$71[name$$45]
        }
        if (v5007 != null) {
          introspect(JAM.policy.p4) {
            v3283 = elem$$71[name$$45];
          }
        } else {
          v3283 = elem$$71.getAttribute(name$$45);
        }
        v1625 = v3283;
      }
      var result$$4 = v1625;
      var value$$37 = result$$4 + "";
      introspect(JAM.policy.p4) {
        var type$$57 = match$$29[2]
      }
      introspect(JAM.policy.p4) {
        var check = match$$29[4]
      }
      var v1626;
      if (result$$4 == null) {
        v1626 = type$$57 === "!=";
      } else {
        var v3285;
        if (type$$57 === "=") {
          v3285 = value$$37 === check;
        } else {
          var v4355;
          if (type$$57 === "*=") {
            v4355 = value$$37.indexOf(check) >= 0;
          } else {
            var v5009;
            if (type$$57 === "~=") {
              v5009 = (" " + value$$37 + " ").indexOf(check) >= 0;
            } else {
              var v5318;
              if (!check) {
                var v5450 = value$$37;
                if (v5450) {
                  v5450 = result$$4 !== false;
                }
                v5318 = v5450;
              } else {
                var v5451;
                if (type$$57 === "!=") {
                  v5451 = value$$37 !== check;
                } else {
                  var v5499;
                  if (type$$57 === "^=") {
                    v5499 = value$$37.indexOf(check) === 0;
                  } else {
                    var v5515;
                    if (type$$57 === "$=") {
                      v5515 = value$$37.substr(value$$37.length - check.length) === check;
                    } else {
                      var v5526;
                      if (type$$57 === "|=") {
                        var v5530 = value$$37 === check;
                        if (!v5530) {
                          v5530 = value$$37.substr(0, check.length + 1) === check + "-";
                        }
                        v5526 = v5530;
                      } else {
                        v5526 = false;
                      }
                      v5515 = v5526;
                    }
                    v5499 = v5515;
                  }
                  v5451 = v5499;
                }
                v5318 = v5451;
              }
              v5009 = v5318;
            }
            v4355 = v5009;
          }
          v3285 = v4355;
        }
        v1626 = v3285;
      }
      return v1626;
    }
    function v187(elem$$70, match$$28) {
      var v5320 = elem$$70.className;
      if (!v5320) {
        v5320 = elem$$70.getAttribute("class");
      }
      return(" " + v5320 + " ").indexOf(match$$28) > -1;
    }
    function v186(elem$$69, match$$27) {
      var v3288 = match$$27 === "*";
      if (v3288) {
        v3288 = elem$$69.nodeType === 1;
      }
      var v1628 = v3288;
      if (!v1628) {
        v1628 = elem$$69.nodeName.toLowerCase() === match$$27;
      }
      return v1628;
    }
    function v185(elem$$68, match$$26) {
      var v1629 = elem$$68.nodeType === 1;
      if (v1629) {
        v1629 = elem$$68.getAttribute("id") === match$$26;
      }
      return v1629;
    }
    function v184(elem$$67, match$$25) {
      introspect(JAM.policy.p4) {
        var type$$56 = match$$25[1]
      }
      var node$$3 = elem$$67;
      introspect(JAM.policy.p4) {
        switch(type$$56) {
          case "only":
          ;
          case "first":
            var v1631 = node$$3 = node$$3.previousSibling;
            for (;v1631;) {
              var v3293 = node$$3.nodeType;
              var v1630 = v3293 === 1;
              if (v1630) {
                return false;
              }
              v1631 = node$$3 = node$$3.previousSibling;
            }
            var v1632 = type$$56 === "first";
            if (v1632) {
              return true;
            }
            node$$3 = elem$$67;
          case "last":
            var v1634 = node$$3 = node$$3.nextSibling;
            for (;v1634;) {
              var v3294 = node$$3.nodeType;
              var v1633 = v3294 === 1;
              if (v1633) {
                return false;
              }
              v1634 = node$$3 = node$$3.nextSibling;
            }
            return true;
          case "nth":
            introspect(JAM.policy.p4) {
              var first$$2 = match$$25[2]
            }
            introspect(JAM.policy.p4) {
              var last = match$$25[3]
            }
            var v3295 = first$$2 === 1;
            if (v3295) {
              v3295 = last === 0;
            }
            var v1635 = v3295;
            if (v1635) {
              return true;
            }
            introspect(JAM.policy.p4) {
              var doneName$$4 = match$$25[0]
            }
            var parent$$4 = elem$$67.parentNode;
            var v3296 = parent$$4;
            if (v3296) {
              var v5012 = parent$$4.sizcache;
              var v4360 = v5012 !== doneName$$4;
              var v5014 = !v4360;
              if (v5014) {
                var v5013 = elem$$67.nodeIndex;
                v4360 = !v5013;
              }
              v3296 = v4360;
            }
            var v1637 = v3296;
            if (v1637) {
              var count$$3 = 0;
              node$$3 = parent$$4.firstChild;
              for (;node$$3;) {
                var v3297 = node$$3.nodeType;
                var v1636 = v3297 === 1;
                if (v1636) {
                  node$$3.nodeIndex = count$$3 = count$$3 + 1;
                }
                node$$3 = node$$3.nextSibling;
              }
              parent$$4.sizcache = doneName$$4;
            }
            var v1638 = elem$$67.nodeIndex;
            var diff = v1638 - last;
            var v1640 = first$$2 === 0;
            if (v1640) {
              return diff === 0;
            } else {
              var v3298 = diff % first$$2;
              var v1639 = v3298 === 0;
              if (v1639) {
                var v3299 = diff / first$$2;
                v1639 = v3299 >= 0;
              }
              return v1639;
            }
          ;
        }
      }
      return;
    }
    function v183(elem$$66, match$$24, i$$54, array$$13) {
      introspect(JAM.policy.p4) {
        var name$$44 = match$$24[1]
      }
      var v1641 = Expr.filters;
      introspect(JAM.policy.p4) {
        var filter$$1 = v1641[name$$44]
      }
      if (filter$$1) {
        return JAM.call(filter$$1, null, [elem$$66, i$$54, match$$24, array$$13]);
      } else {
        if (name$$44 === "contains") {
          var v5321 = elem$$66.textContent;
          if (!v5321) {
            v5321 = elem$$66.innerText;
          }
          var v5015 = v5321;
          if (!v5015) {
            v5015 = getText([elem$$66]);
          }
          var v4361 = v5015;
          if (!v4361) {
            v4361 = "";
          }
          var v3300 = v4361;
          introspect(JAM.policy.p4) {
            var v3301 = match$$24[3]
          }
          return v3300.indexOf(v3301) >= 0;
        } else {
          if (name$$44 === "not") {
            introspect(JAM.policy.p4) {
              var not$$4 = match$$24[3]
            }
            i$$54 = 0;
            var l$$14 = not$$4.length;
            var v1644 = i$$54 < l$$14;
            for (;v1644;) {
              introspect(JAM.policy.p4) {
                var v3302 = not$$4[i$$54]
              }
              if (v3302 === elem$$66) {
                return false;
              }
              i$$54 = i$$54 + 1;
              v1644 = i$$54 < l$$14;
            }
            return true;
          } else {
            JAM.call(Sizzle.error, Sizzle, ["Syntax error, unrecognized expression: " + name$$44]);
          }
        }
      }
      return;
    }
    function v182(elem$$65, i$$53, match$$23) {
      introspect(JAM.policy.p4) {
        var v3303 = match$$23[3]
      }
      return v3303 - 0 === i$$53;
    }
    function v181(elem$$64, i$$52, match$$22) {
      introspect(JAM.policy.p4) {
        var v3304 = match$$22[3]
      }
      return v3304 - 0 === i$$52;
    }
    function v180(elem$$63, i$$51, match$$21) {
      introspect(JAM.policy.p4) {
        var v3305 = match$$21[3]
      }
      return i$$51 > v3305 - 0;
    }
    function v179(elem$$62, i$$50, match$$20) {
      introspect(JAM.policy.p4) {
        var v3306 = match$$20[3]
      }
      return i$$50 < v3306 - 0;
    }
    function v178(elem$$61, i$$49) {
      return i$$49 % 2 === 1;
    }
    function v177(elem$$60, i$$48) {
      return i$$48 % 2 === 0;
    }
    function v176(elem$$59, i$$47, match$$19, array$$12) {
      return i$$47 === array$$12.length - 1;
    }
    function v175(elem$$58, i$$46) {
      return i$$46 === 0;
    }
    function v174(elem$$57) {
      return/input|select|textarea|button/i.test(elem$$57.nodeName);
    }
    function v173(elem$$56) {
      var v1656 = "button" === elem$$56.type;
      if (!v1656) {
        v1656 = elem$$56.nodeName.toLowerCase() === "button";
      }
      return v1656;
    }
    function v172(elem$$55) {
      return "reset" === elem$$55.type;
    }
    function v171(elem$$54) {
      return "image" === elem$$54.type;
    }
    function v170(elem$$53) {
      return "submit" === elem$$53.type;
    }
    function v169(elem$$52) {
      return "password" === elem$$52.type;
    }
    function v168(elem$$51) {
      return "file" === elem$$51.type;
    }
    function v167(elem$$50) {
      return "checkbox" === elem$$50.type;
    }
    function v166(elem$$49) {
      return "radio" === elem$$49.type;
    }
    function v165(elem$$48) {
      return "text" === elem$$48.type;
    }
    function v164(elem$$47) {
      return/h\d/i.test(elem$$47.nodeName);
    }
    function v163(elem$$46, i$$45, match$$18) {
      introspect(JAM.policy.p4) {
        var v5017 = match$$18[3]
      }
      return!!JAM.call(Sizzle, null, [v5017, elem$$46]).length;
    }
    function v162(elem$$45) {
      return!elem$$45.firstChild;
    }
    function v161(elem$$44) {
      return!!elem$$44.firstChild;
    }
    function v160(elem$$43) {
      return elem$$43.selected === true;
    }
    function v159(elem$$42) {
      return elem$$42.checked === true;
    }
    function v158(elem$$41) {
      return elem$$41.disabled === true;
    }
    function v157(elem$$40) {
      var v1672 = elem$$40.disabled === false;
      if (v1672) {
        v1672 = elem$$40.type !== "hidden";
      }
      return v1672;
    }
    function v156(match$$17) {
      match$$17.unshift(true);
      return match$$17;
    }
    function v155(match$$16, curLoop$$4, inplace$$3, result$$3, not$$3) {
      introspect(JAM.policy.p4) {
        var v3315 = match$$16[1]
      }
      if (v3315 === "not") {
        introspect(JAM.policy.p4) {
          var v5455 = match$$16[3]
        }
        var v5324 = chunker.exec(v5455);
        if (!v5324) {
          v5324 = "";
        }
        var v3316 = v5324.length > 1;
        if (!v3316) {
          introspect(JAM.policy.p4) {
            var v4365 = match$$16[3]
          }
          v3316 = /^\w/.test(v4365);
        }
        if (v3316) {
          var v1673 = match$$16;
          introspect(JAM.policy.p4) {
            var v3317 = match$$16[3]
          }
          var v5584 = JAM.call(Sizzle, null, [v3317, null, null, curLoop$$4]);
          introspect(JAM.policy.p3) {
            v1673[3] = v5584;
          }
        } else {
          introspect(JAM.policy.p4) {
            var v1674 = match$$16[3]
          }
          var ret$$11 = JAM.call(Sizzle.filter, Sizzle, [v1674, curLoop$$4, inplace$$3, true ^ not$$3]);
          if (!inplace$$3) {
            var v1676 = result$$3.push;
            JAM.call(v1676.apply, v1676, [result$$3, ret$$11]);
          }
          return false;
        }
      } else {
        var v4367 = Expr.match.POS;
        introspect(JAM.policy.p4) {
          var v4368 = match$$16[0]
        }
        var v3318 = v4367.test(v4368);
        if (!v3318) {
          var v4369 = Expr.match.CHILD;
          introspect(JAM.policy.p4) {
            var v4370 = match$$16[0]
          }
          v3318 = v4369.test(v4370);
        }
        if (v3318) {
          return true;
        }
      }
      return match$$16;
    }
    function v154(match$$15, curLoop$$3, inplace$$2, result$$2, not$$2, isXML$$8) {
      introspect(JAM.policy.p4) {
        var v1681 = match$$15[1]
      }
      var name$$43 = v1681.replace(/\\/g, "");
      var v3319 = !isXML$$8;
      if (v3319) {
        var v4372 = Expr.attrMap;
        introspect(JAM.policy.p4) {
          v3319 = v4372[name$$43];
        }
      }
      if (v3319) {
        var v1682 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          match$$15[1] = v1682[name$$43];
        }
      }
      introspect(JAM.policy.p4) {
        var v3320 = match$$15[2]
      }
      if (v3320 === "~=") {
        introspect(JAM.policy.p4) {
          var v3321 = match$$15[4]
        }
        var v1684 = " " + v3321;
        introspect(JAM.policy.p3) {
          match$$15[4] = v1684 + " ";
        }
      }
      return match$$15;
    }
    function v153(match$$14) {
      introspect(JAM.policy.p4) {
        var v3322 = match$$14[1]
      }
      if (v3322 === "nth") {
        introspect(JAM.policy.p4) {
          var v5457 = match$$14[2]
        }
        var v5325 = v5457 === "even";
        if (v5325) {
          v5325 = "2n";
        }
        var v5021 = v5325;
        if (!v5021) {
          introspect(JAM.policy.p4) {
            var v5458 = match$$14[2]
          }
          var v5326 = v5458 === "odd";
          if (v5326) {
            v5326 = "2n+1";
          }
          v5021 = v5326;
        }
        var v4373 = v5021;
        if (!v4373) {
          introspect(JAM.policy.p4) {
            var v5459 = match$$14[2]
          }
          var v5022 = !/\D/.test(v5459);
          if (v5022) {
            introspect(JAM.policy.p4) {
              var v5329 = match$$14[2]
            }
            v5022 = "0n+" + v5329;
          }
          v4373 = v5022;
        }
        var v3323 = v4373;
        if (!v3323) {
          introspect(JAM.policy.p4) {
            v3323 = match$$14[2];
          }
        }
        var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(v3323);
        introspect(JAM.policy.p4) {
          var v3324 = test[1]
        }
        introspect(JAM.policy.p4) {
          var v4375 = test[2]
        }
        if (!v4375) {
          v4375 = 1;
        }
        var v1687 = v3324 + v4375;
        introspect(JAM.policy.p3) {
          match$$14[2] = v1687 - 0;
        }
        introspect(JAM.policy.p4) {
          var v1688 = test[3]
        }
        introspect(JAM.policy.p3) {
          match$$14[3] = v1688 - 0;
        }
      }
      introspect(JAM.policy.p3) {
        match$$14[0] = done;
      }
      done = done + 1;
      return match$$14;
    }
    function v152(match$$13, curLoop$$2) {
      introspect(JAM.policy.p4) {
        var v1690 = match$$13[1]
      }
      return v1690.toLowerCase();
    }
    function v151(match$$12) {
      introspect(JAM.policy.p4) {
        var v1691 = match$$12[1]
      }
      return v1691.replace(/\\/g, "");
    }
    function v150(match$$11, curLoop$$1, inplace$$1, result$$1, not$$1, isXML$$7) {
      introspect(JAM.policy.p4) {
        var v4376 = match$$11[1]
      }
      match$$11 = " " + v4376.replace(/\\/g, "") + " ";
      if (isXML$$7) {
        return match$$11;
      }
      var i$$44 = 0;
      var elem$$39;
      introspect(JAM.policy.p4) {
        var v3327 = elem$$39 = curLoop$$1[i$$44]
      }
      var v1695 = v3327 != null;
      for (;v1695;) {
        if (elem$$39) {
          var v3328 = not$$1;
          var v4377 = elem$$39.className;
          if (v4377) {
            v4377 = (" " + elem$$39.className + " ").replace(/[\t\n]/g, " ").indexOf(match$$11) >= 0;
          }
          if (v3328 ^ v4377) {
            if (!inplace$$1) {
              JAM.call(result$$1.push, result$$1, [elem$$39]);
            }
          } else {
            if (inplace$$1) {
              introspect(JAM.policy.p3) {
                curLoop$$1[i$$44] = false;
              }
            }
          }
        }
        i$$44 = i$$44 + 1;
        introspect(JAM.policy.p4) {
          var v3330 = elem$$39 = curLoop$$1[i$$44]
        }
        v1695 = v3330 != null;
      }
      return false;
    }
    function v149(match$$10, context$$7) {
      introspect(JAM.policy.p4) {
        var v1696 = match$$10[1]
      }
      return context$$7.getElementsByTagName(v1696);
    }
    function v148(match$$9, context$$6) {
      if (typeof context$$6.getElementsByName !== "undefined") {
        var ret$$10 = [];
        introspect(JAM.policy.p4) {
          var v1697 = match$$9[1]
        }
        var results$$3 = context$$6.getElementsByName(v1697);
        var i$$43 = 0;
        var l$$13 = results$$3.length;
        var v1700 = i$$43 < l$$13;
        for (;v1700;) {
          introspect(JAM.policy.p4) {
            var v4379 = results$$3[i$$43]
          }
          var v3332 = v4379.getAttribute("name");
          introspect(JAM.policy.p4) {
            var v3333 = match$$9[1]
          }
          if (v3332 === v3333) {
            introspect(JAM.policy.p4) {
              var v1698 = results$$3[i$$43]
            }
            JAM.call(ret$$10.push, ret$$10, [v1698]);
          }
          i$$43 = i$$43 + 1;
          v1700 = i$$43 < l$$13;
        }
        var v1701;
        if (ret$$10.length === 0) {
          v1701 = null;
        } else {
          v1701 = ret$$10;
        }
        return v1701;
      }
      return;
    }
    function v147(match$$8, context$$5, isXML$$6) {
      var v3335 = typeof context$$5.getElementById !== "undefined";
      if (v3335) {
        v3335 = !isXML$$6;
      }
      if (v3335) {
        introspect(JAM.policy.p4) {
          var v1703 = match$$8[1]
        }
        var m$$1 = context$$5.getElementById(v1703);
        var v1704;
        if (m$$1) {
          v1704 = [m$$1];
        } else {
          v1704 = [];
        }
        return v1704;
      }
      return;
    }
    function v146(checkSet$$6, part$$3, isXML$$5) {
      var doneName$$3 = done;
      done = done + 1;
      var checkFn$$1 = dirCheck;
      var v3336 = typeof part$$3 === "string";
      if (v3336) {
        v3336 = !/\W/.test(part$$3);
      }
      if (v3336) {
        var nodeCheck$$3 = part$$3 = part$$3.toLowerCase();
        checkFn$$1 = dirNodeCheck;
      }
      JAM.call(checkFn$$1, null, ["previousSibling", part$$3, doneName$$3, checkSet$$6, nodeCheck$$3, isXML$$5]);
      return;
    }
    function v145(checkSet$$5, part$$2, isXML$$4) {
      var doneName$$2 = done;
      done = done + 1;
      var checkFn = dirCheck;
      var v3337 = typeof part$$2 === "string";
      if (v3337) {
        v3337 = !/\W/.test(part$$2);
      }
      if (v3337) {
        var nodeCheck$$2 = part$$2 = part$$2.toLowerCase();
        checkFn = dirNodeCheck;
      }
      JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$4]);
      return;
    }
    function v144(checkSet$$4, part$$1) {
      var isPartStr$$1 = typeof part$$1 === "string";
      var v3338 = isPartStr$$1;
      if (v3338) {
        v3338 = !/\W/.test(part$$1);
      }
      if (v3338) {
        part$$1 = part$$1.toLowerCase();
        var i$$42 = 0;
        var l$$12 = checkSet$$4.length;
        var v1711 = i$$42 < l$$12;
        for (;v1711;) {
          introspect(JAM.policy.p4) {
            var elem$$38 = checkSet$$4[i$$42]
          }
          if (elem$$38) {
            var parent$$3 = elem$$38.parentNode;
            var v1709 = checkSet$$4;
            var v1710 = i$$42;
            var v3339;
            if (parent$$3.nodeName.toLowerCase() === part$$1) {
              v3339 = parent$$3;
            } else {
              v3339 = false;
            }
            introspect(JAM.policy.p3) {
              v1709[v1710] = v3339;
            }
          }
          i$$42 = i$$42 + 1;
          v1711 = i$$42 < l$$12;
        }
      } else {
        i$$42 = 0;
        l$$12 = checkSet$$4.length;
        var v1713 = i$$42 < l$$12;
        for (;v1713;) {
          introspect(JAM.policy.p4) {
            elem$$38 = checkSet$$4[i$$42];
          }
          if (elem$$38) {
            var v1712;
            if (isPartStr$$1) {
              v1712 = elem$$38.parentNode;
            } else {
              v1712 = elem$$38.parentNode === part$$1;
            }
            introspect(JAM.policy.p3) {
              checkSet$$4[i$$42] = v1712;
            }
          }
          i$$42 = i$$42 + 1;
          v1713 = i$$42 < l$$12;
        }
        if (isPartStr$$1) {
          JAM.call(Sizzle.filter, Sizzle, [part$$1, checkSet$$4, true]);
        }
      }
      return;
    }
    function v143(checkSet$$3, part) {
      var isPartStr = typeof part === "string";
      var v1716 = isPartStr;
      if (v1716) {
        v1716 = !/\W/.test(part);
      }
      var isTag = v1716;
      var v1717 = isPartStr;
      if (v1717) {
        v1717 = !isTag;
      }
      var isPartStrNotTag = v1717;
      if (isTag) {
        part = part.toLowerCase();
      }
      var i$$41 = 0;
      var l$$11 = checkSet$$3.length;
      var elem$$37;
      var v1722 = i$$41 < l$$11;
      for (;v1722;) {
        introspect(JAM.policy.p4) {
          var v1721 = elem$$37 = checkSet$$3[i$$41]
        }
        if (v1721) {
          var v3342 = elem$$37 = elem$$37.previousSibling;
          if (v3342) {
            v3342 = elem$$37.nodeType !== 1;
          }
          var v1718 = v3342;
          for (;v1718;) {
            var v3343 = elem$$37 = elem$$37.previousSibling;
            if (v3343) {
              v3343 = elem$$37.nodeType !== 1;
            }
            v1718 = v3343;
          }
          var v1719 = checkSet$$3;
          var v1720 = i$$41;
          var v3344;
          var v5028 = isPartStrNotTag;
          if (!v5028) {
            var v5332 = elem$$37;
            if (v5332) {
              v5332 = elem$$37.nodeName.toLowerCase() === part;
            }
            v5028 = v5332;
          }
          if (v5028) {
            v3344 = elem$$37 || false;
          } else {
            v3344 = elem$$37 === part;
          }
          introspect(JAM.policy.p3) {
            v1719[v1720] = v3344;
          }
        }
        i$$41 = i$$41 + 1;
        v1722 = i$$41 < l$$11;
      }
      if (isPartStrNotTag) {
        JAM.call(Sizzle.filter, Sizzle, [part, checkSet$$3, true]);
      }
      return;
    }
    function v142(elem$$36) {
      return elem$$36.getAttribute("href");
    }
    function v141(msg$$1) {
      throw "Syntax error, unrecognized expression: " + msg$$1;
    }
    function v140(expr$$5, set$$4, inplace, not) {
      var old$$1 = expr$$5;
      var result = [];
      var curLoop = set$$4;
      var match$$7;
      var anyFound;
      var v3345 = set$$4;
      if (v3345) {
        introspect(JAM.policy.p4) {
          v3345 = set$$4[0];
        }
      }
      var v1723 = v3345;
      if (v1723) {
        introspect(JAM.policy.p4) {
          var v3346 = set$$4[0]
        }
        v1723 = isXML(v3346);
      }
      var isXMLFilter = v1723;
      var v3347 = expr$$5;
      if (v3347) {
        v3347 = set$$4.length;
      }
      var v1742 = v3347;
      for (;v1742;) {
        var type$$55;
        for (type$$55 in Expr.filter) {
          var v5334 = Expr.leftMatch;
          introspect(JAM.policy.p4) {
            var v5029 = v5334[type$$55]
          }
          var v3348 = (match$$7 = v5029.exec(expr$$5)) != null;
          if (v3348) {
            introspect(JAM.policy.p4) {
              v3348 = match$$7[2];
            }
          }
          if (v3348) {
            var v1724 = Expr.filter;
            introspect(JAM.policy.p4) {
              var filter = v1724[type$$55]
            }
            var found;
            var item;
            introspect(JAM.policy.p4) {
              var left$$2 = match$$7[1]
            }
            anyFound = false;
            JAM.call(match$$7.splice, match$$7, [1, 1]);
            if (left$$2.substr(left$$2.length - 1) === "\\") {
              continue;
            }
            if (curLoop === result) {
              result = [];
            }
            var v3350 = Expr.preFilter;
            introspect(JAM.policy.p4) {
              var v1730 = v3350[type$$55]
            }
            if (v1730) {
              var v1727 = Expr.preFilter;
              match$$7 = JAM.call(JAM.get(v1727, type$$55, JAM.policy.p4), v1727, [match$$7, curLoop, inplace, result, not, isXMLFilter]);
              if (!match$$7) {
                anyFound = found = true;
              } else {
                if (match$$7 === true) {
                  continue;
                }
              }
            }
            if (match$$7) {
              var i$$40 = 0;
              introspect(JAM.policy.p4) {
                var v3351 = item = curLoop[i$$40]
              }
              var v1733 = v3351 != null;
              for (;v1733;) {
                if (item) {
                  found = JAM.call(filter, null, [item, match$$7, i$$40, curLoop]);
                  var pass$$2 = not ^ !!found;
                  var v3353 = inplace;
                  if (v3353) {
                    v3353 = found != null;
                  }
                  if (v3353) {
                    if (pass$$2) {
                      anyFound = true;
                    } else {
                      introspect(JAM.policy.p3) {
                        curLoop[i$$40] = false;
                      }
                    }
                  } else {
                    if (pass$$2) {
                      JAM.call(result.push, result, [item]);
                      anyFound = true;
                    }
                  }
                }
                i$$40 = i$$40 + 1;
                introspect(JAM.policy.p4) {
                  var v3354 = item = curLoop[i$$40]
                }
                v1733 = v3354 != null;
              }
            }
            if (found !== undefined$$1) {
              if (!inplace) {
                curLoop = result;
              }
              var v3355 = Expr.match;
              introspect(JAM.policy.p4) {
                var v1735 = v3355[type$$55]
              }
              expr$$5 = expr$$5.replace(v1735, "");
              if (!anyFound) {
                return[];
              }
              break;
            }
          }
        }
        if (expr$$5 === old$$1) {
          if (anyFound == null) {
            JAM.call(Sizzle.error, Sizzle, [expr$$5]);
          } else {
            break;
          }
        }
        old$$1 = expr$$5;
        var v3356 = expr$$5;
        if (v3356) {
          v3356 = set$$4.length;
        }
        v1742 = v3356;
      }
      return curLoop;
    }
    function v139(expr$$4, context$$4, isXML$$3) {
      var set$$3;
      var match$$6;
      if (!expr$$4) {
        return[];
      }
      var i$$39 = 0;
      var l$$10 = Expr.order.length;
      var v1752 = i$$39 < l$$10;
      for (;v1752;) {
        var v1745 = Expr.order;
        introspect(JAM.policy.p4) {
          var type$$54 = v1745[i$$39]
        }
        var v4393 = Expr.leftMatch;
        introspect(JAM.policy.p4) {
          var v3357 = v4393[type$$54]
        }
        if (match$$6 = v3357.exec(expr$$4)) {
          introspect(JAM.policy.p4) {
            var left$$1 = match$$6[1]
          }
          JAM.call(match$$6.splice, match$$6, [1, 1]);
          if (left$$1.substr(left$$1.length - 1) !== "\\") {
            var v1746 = match$$6;
            introspect(JAM.policy.p4) {
              var v4395 = match$$6[1]
            }
            if (!v4395) {
              v4395 = "";
            }
            var v5585 = v4395.replace(/\\/g, "");
            introspect(JAM.policy.p3) {
              v1746[1] = v5585;
            }
            var v1747 = Expr.find;
            set$$3 = JAM.call(JAM.get(v1747, type$$54, JAM.policy.p4), v1747, [match$$6, context$$4, isXML$$3]);
            if (set$$3 != null) {
              var v3360 = Expr.match;
              introspect(JAM.policy.p4) {
                var v1748 = v3360[type$$54]
              }
              expr$$4 = expr$$4.replace(v1748, "");
              break;
            }
          }
        }
        i$$39 = i$$39 + 1;
        v1752 = i$$39 < l$$10;
      }
      if (!set$$3) {
        set$$3 = context$$4.getElementsByTagName("*");
      }
      return{set:set$$3, expr:expr$$4};
    }
    function v138(expr$$3, set$$2) {
      return JAM.call(Sizzle, null, [expr$$3, null, null, set$$2]);
    }
    function v137(results$$2) {
      if (sortOrder) {
        hasDuplicate = baseHasDuplicate;
        JAM.call(results$$2.sort, results$$2, [sortOrder]);
        if (hasDuplicate) {
          var i$$38 = 1;
          var v1756 = i$$38 < results$$2.length;
          for (;v1756;) {
            introspect(JAM.policy.p4) {
              var v3362 = results$$2[i$$38]
            }
            var v4396 = i$$38 - 1;
            introspect(JAM.policy.p4) {
              var v3363 = results$$2[v4396]
            }
            if (v3362 === v3363) {
              var v1754 = i$$38;
              i$$38 = i$$38 - 1;
              JAM.call(results$$2.splice, results$$2, [v1754, 1]);
            }
            i$$38 = i$$38 + 1;
            v1756 = i$$38 < results$$2.length;
          }
        }
      }
      return results$$2;
    }
    function v136() {
      baseHasDuplicate = false;
      return 0;
    }
    function posProcess(selector$$9, context$$12) {
      var tmpSet = [];
      var later = "";
      var match$$35;
      var v1757;
      if (context$$12.nodeType) {
        v1757 = [context$$12];
      } else {
        v1757 = context$$12;
      }
      var root$$2 = v1757;
      var v1759 = match$$35 = Expr.match.PSEUDO.exec(selector$$9);
      for (;v1759;) {
        introspect(JAM.policy.p4) {
          var v3367 = match$$35[0]
        }
        later = later + v3367;
        selector$$9 = selector$$9.replace(Expr.match.PSEUDO, "");
        v1759 = match$$35 = Expr.match.PSEUDO.exec(selector$$9);
      }
      var v1760;
      var v4399 = Expr.relative;
      introspect(JAM.policy.p4) {
        var v3370 = v4399[selector$$9]
      }
      if (v3370) {
        v1760 = selector$$9 + "*";
      } else {
        v1760 = selector$$9;
      }
      selector$$9 = v1760;
      var i$$58 = 0;
      var l$$16 = root$$2.length;
      var v1762 = i$$58 < l$$16;
      for (;v1762;) {
        introspect(JAM.policy.p4) {
          var v1761 = root$$2[i$$58]
        }
        JAM.call(Sizzle, null, [selector$$9, v1761, tmpSet]);
        i$$58 = i$$58 + 1;
        v1762 = i$$58 < l$$16;
      }
      return JAM.call(Sizzle.filter, Sizzle, [later, tmpSet]);
    }
    function isXML(elem$$75) {
      var v3371;
      if (elem$$75) {
        var v4400 = elem$$75.ownerDocument;
        if (!v4400) {
          v4400 = elem$$75;
        }
        v3371 = v4400;
      } else {
        v3371 = 0;
      }
      var documentElement = v3371.documentElement;
      var v1764;
      if (documentElement) {
        v1764 = documentElement.nodeName !== "HTML";
      } else {
        v1764 = false;
      }
      return v1764;
    }
    function makeArray(array$$15, results$$4) {
      var v1765 = Array.prototype.slice;
      array$$15 = JAM.call(v1765.call, v1765, [array$$15, 0]);
      if (results$$4) {
        var v1766 = results$$4.push;
        JAM.call(v1766.apply, v1766, [results$$4, array$$15]);
        return results$$4;
      }
      return array$$15;
    }
    function Sizzle(selector$$8, context$$3, results$$1, seed) {
      results$$1 = results$$1 || [];
      var origContext = context$$3 = context$$3 || document$$1;
      var v3374 = context$$3.nodeType !== 1;
      if (v3374) {
        v3374 = context$$3.nodeType !== 9;
      }
      if (v3374) {
        return[];
      }
      var v3375 = !selector$$8;
      if (!v3375) {
        v3375 = typeof selector$$8 !== "string";
      }
      if (v3375) {
        return results$$1;
      }
      var parts$$1 = [];
      var m;
      var set$$1;
      var checkSet$$2;
      var extra;
      var prune = true;
      var contextXML = isXML(context$$3);
      var soFar = selector$$8;
      chunker.exec("");
      var v1771 = (m = chunker.exec(soFar)) !== null;
      for (;v1771;) {
        introspect(JAM.policy.p4) {
          soFar = m[3];
        }
        introspect(JAM.policy.p4) {
          var v1769 = m[1]
        }
        JAM.call(parts$$1.push, parts$$1, [v1769]);
        introspect(JAM.policy.p4) {
          var v1770 = m[2]
        }
        if (v1770) {
          introspect(JAM.policy.p4) {
            extra = m[3];
          }
          break;
        }
        chunker.exec("");
        v1771 = (m = chunker.exec(soFar)) !== null;
      }
      var v3378 = parts$$1.length > 1;
      if (v3378) {
        v3378 = origPOS.exec(selector$$8);
      }
      if (v3378) {
        var v3379 = parts$$1.length === 2;
        if (v3379) {
          var v4407 = Expr.relative;
          introspect(JAM.policy.p4) {
            var v4408 = parts$$1[0]
          }
          introspect(JAM.policy.p4) {
            v3379 = v4407[v4408];
          }
        }
        if (v3379) {
          introspect(JAM.policy.p4) {
            var v3380 = parts$$1[0]
          }
          introspect(JAM.policy.p4) {
            var v3381 = parts$$1[1]
          }
          set$$1 = posProcess(v3380 + v3381, context$$3);
        } else {
          var v1773;
          var v4409 = Expr.relative;
          introspect(JAM.policy.p4) {
            var v4410 = parts$$1[0]
          }
          introspect(JAM.policy.p4) {
            var v3383 = v4409[v4410]
          }
          if (v3383) {
            v1773 = [context$$3];
          } else {
            v1773 = JAM.call(Sizzle, null, [parts$$1.shift(), context$$3]);
          }
          set$$1 = v1773;
          var v1775 = parts$$1.length;
          for (;v1775;) {
            selector$$8 = parts$$1.shift();
            var v3384 = Expr.relative;
            introspect(JAM.policy.p4) {
              var v1774 = v3384[selector$$8]
            }
            if (v1774) {
              selector$$8 = selector$$8 + parts$$1.shift();
            }
            set$$1 = posProcess(selector$$8, set$$1);
            v1775 = parts$$1.length;
          }
        }
      } else {
        var v5462 = !seed;
        if (v5462) {
          v5462 = parts$$1.length > 1;
        }
        var v5335 = v5462;
        if (v5335) {
          v5335 = context$$3.nodeType === 9;
        }
        var v5034 = v5335;
        if (v5034) {
          v5034 = !contextXML;
        }
        var v4411 = v5034;
        if (v4411) {
          var v5035 = Expr.match.ID;
          introspect(JAM.policy.p4) {
            var v5036 = parts$$1[0]
          }
          v4411 = v5035.test(v5036);
        }
        var v3387 = v4411;
        if (v3387) {
          var v5037 = Expr.match.ID;
          var v5338 = parts$$1.length - 1;
          introspect(JAM.policy.p4) {
            var v5038 = parts$$1[v5338]
          }
          v3387 = !v5037.test(v5038);
        }
        if (v3387) {
          var ret$$9 = JAM.call(Sizzle.find, Sizzle, [parts$$1.shift(), context$$3, contextXML]);
          var v1778;
          if (ret$$9.expr) {
            var v3388 = JAM.call(Sizzle.filter, Sizzle, [ret$$9.expr, ret$$9.set]);
            introspect(JAM.policy.p4) {
              v1778 = v3388[0];
            }
          } else {
            var v3389 = ret$$9.set;
            introspect(JAM.policy.p4) {
              v1778 = v3389[0];
            }
          }
          context$$3 = v1778;
        }
        if (context$$3) {
          var v1780;
          if (seed) {
            v1780 = {expr:parts$$1.pop(), set:JAM.call(makeArray, null, [seed])};
          } else {
            var v3393 = parts$$1.pop();
            var v4415;
            var v5465 = parts$$1.length === 1;
            if (v5465) {
              introspect(JAM.policy.p4) {
                var v5518 = parts$$1[0]
              }
              var v5505 = v5518 === "~";
              if (!v5505) {
                introspect(JAM.policy.p4) {
                  var v5519 = parts$$1[0]
                }
                v5505 = v5519 === "+";
              }
              v5465 = v5505;
            }
            var v5339 = v5465;
            if (v5339) {
              v5339 = context$$3.parentNode;
            }
            if (v5339) {
              v4415 = context$$3.parentNode;
            } else {
              v4415 = context$$3;
            }
            v1780 = JAM.call(Sizzle.find, Sizzle, [v3393, v4415, contextXML]);
          }
          ret$$9 = v1780;
          var v1781;
          if (ret$$9.expr) {
            v1781 = JAM.call(Sizzle.filter, Sizzle, [ret$$9.expr, ret$$9.set]);
          } else {
            v1781 = ret$$9.set;
          }
          set$$1 = v1781;
          if (parts$$1.length > 0) {
            checkSet$$2 = JAM.call(makeArray, null, [set$$1]);
          } else {
            prune = false;
          }
          var v1786 = parts$$1.length;
          for (;v1786;) {
            var cur$$2 = parts$$1.pop();
            var pop = cur$$2;
            var v4416 = Expr.relative;
            introspect(JAM.policy.p4) {
              var v3399 = v4416[cur$$2]
            }
            if (!v3399) {
              cur$$2 = "";
            } else {
              pop = parts$$1.pop();
            }
            if (pop == null) {
              pop = context$$3;
            }
            var v1785 = Expr.relative;
            JAM.call(JAM.get(v1785, cur$$2, JAM.policy.p4), v1785, [checkSet$$2, pop, contextXML]);
            v1786 = parts$$1.length;
          }
        } else {
          checkSet$$2 = parts$$1 = [];
        }
      }
      if (!checkSet$$2) {
        checkSet$$2 = set$$1;
      }
      if (!checkSet$$2) {
        JAM.call(Sizzle.error, Sizzle, [cur$$2 || selector$$8]);
      }
      if (JAM.call(toString$$1.call, toString$$1, [checkSet$$2]) === "[object Array]") {
        if (!prune) {
          var v1791 = results$$1.push;
          JAM.call(v1791.apply, v1791, [results$$1, checkSet$$2]);
        } else {
          var v3401 = context$$3;
          if (v3401) {
            v3401 = context$$3.nodeType === 1;
          }
          if (v3401) {
            var i$$37 = 0;
            introspect(JAM.policy.p4) {
              var v3402 = checkSet$$2[i$$37]
            }
            var v1794 = v3402 != null;
            for (;v1794;) {
              introspect(JAM.policy.p4) {
                var v3403 = checkSet$$2[i$$37]
              }
              if (v3403) {
                introspect(JAM.policy.p4) {
                  var v5040 = checkSet$$2[i$$37]
                }
                var v4418 = v5040 === true;
                if (!v4418) {
                  introspect(JAM.policy.p4) {
                    var v5466 = checkSet$$2[i$$37]
                  }
                  var v5041 = v5466.nodeType === 1;
                  if (v5041) {
                    introspect(JAM.policy.p4) {
                      var v5341 = checkSet$$2[i$$37]
                    }
                    v5041 = JAM.call(contains, null, [context$$3, v5341]);
                  }
                  v4418 = v5041;
                }
                v3403 = v4418;
              }
              if (v3403) {
                introspect(JAM.policy.p4) {
                  var v1792 = set$$1[i$$37]
                }
                JAM.call(results$$1.push, results$$1, [v1792]);
              }
              i$$37 = i$$37 + 1;
              introspect(JAM.policy.p4) {
                var v3404 = checkSet$$2[i$$37]
              }
              v1794 = v3404 != null;
            }
          } else {
            i$$37 = 0;
            introspect(JAM.policy.p4) {
              var v3405 = checkSet$$2[i$$37]
            }
            var v1797 = v3405 != null;
            for (;v1797;) {
              introspect(JAM.policy.p4) {
                var v3406 = checkSet$$2[i$$37]
              }
              if (v3406) {
                introspect(JAM.policy.p4) {
                  var v5043 = checkSet$$2[i$$37]
                }
                v3406 = v5043.nodeType === 1;
              }
              if (v3406) {
                introspect(JAM.policy.p4) {
                  var v1795 = set$$1[i$$37]
                }
                JAM.call(results$$1.push, results$$1, [v1795]);
              }
              i$$37 = i$$37 + 1;
              introspect(JAM.policy.p4) {
                var v3407 = checkSet$$2[i$$37]
              }
              v1797 = v3407 != null;
            }
          }
        }
      } else {
        JAM.call(makeArray, null, [checkSet$$2, results$$1]);
      }
      if (extra) {
        JAM.call(Sizzle, null, [extra, origContext, results$$1, seed]);
        JAM.call(Sizzle.uniqueSort, Sizzle, [results$$1]);
      }
      return results$$1;
    }
    function getText(elems$$5) {
      var ret$$8 = "";
      var elem$$33;
      var i$$34 = 0;
      introspect(JAM.policy.p4) {
        var v1803 = elems$$5[i$$34]
      }
      for (;v1803;) {
        introspect(JAM.policy.p4) {
          elem$$33 = elems$$5[i$$34];
        }
        var v3408 = elem$$33.nodeType === 3;
        if (!v3408) {
          v3408 = elem$$33.nodeType === 4;
        }
        if (v3408) {
          ret$$8 = ret$$8 + elem$$33.nodeValue;
        } else {
          if (elem$$33.nodeType !== 8) {
            ret$$8 = ret$$8 + getText(elem$$33.childNodes);
          }
        }
        i$$34 = i$$34 + 1;
        introspect(JAM.policy.p4) {
          v1803 = elems$$5[i$$34];
        }
      }
      return ret$$8;
    }
    function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML$$1) {
      var i$$35 = 0;
      var l$$8 = checkSet.length;
      var v1808 = i$$35 < l$$8;
      for (;v1808;) {
        introspect(JAM.policy.p4) {
          var elem$$34 = checkSet[i$$35]
        }
        if (elem$$34) {
          introspect(JAM.policy.p4) {
            elem$$34 = elem$$34[dir];
          }
          var match$$4 = false;
          for (;elem$$34;) {
            if (elem$$34.sizcache === doneName) {
              var v1804 = elem$$34.sizset;
              introspect(JAM.policy.p4) {
                match$$4 = checkSet[v1804];
              }
              break;
            }
            var v3414 = elem$$34.nodeType === 1;
            if (v3414) {
              v3414 = !isXML$$1;
            }
            if (v3414) {
              elem$$34.sizcache = doneName;
              elem$$34.sizset = i$$35;
            }
            if (elem$$34.nodeName.toLowerCase() === cur) {
              match$$4 = elem$$34;
              break;
            }
            introspect(JAM.policy.p4) {
              elem$$34 = elem$$34[dir];
            }
          }
          introspect(JAM.policy.p3) {
            checkSet[i$$35] = match$$4;
          }
        }
        i$$35 = i$$35 + 1;
        v1808 = i$$35 < l$$8;
      }
      return;
    }
    function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$2) {
      var i$$36 = 0;
      var l$$9 = checkSet$$1.length;
      var v1816 = i$$36 < l$$9;
      for (;v1816;) {
        introspect(JAM.policy.p4) {
          var elem$$35 = checkSet$$1[i$$36]
        }
        if (elem$$35) {
          introspect(JAM.policy.p4) {
            elem$$35 = elem$$35[dir$$1];
          }
          var match$$5 = false;
          for (;elem$$35;) {
            if (elem$$35.sizcache === doneName$$1) {
              var v1809 = elem$$35.sizset;
              introspect(JAM.policy.p4) {
                match$$5 = checkSet$$1[v1809];
              }
              break;
            }
            if (elem$$35.nodeType === 1) {
              if (!isXML$$2) {
                elem$$35.sizcache = doneName$$1;
                elem$$35.sizset = i$$36;
              }
              if (typeof cur$$1 !== "string") {
                if (elem$$35 === cur$$1) {
                  match$$5 = true;
                  break;
                }
              } else {
                if (JAM.call(Sizzle.filter, Sizzle, [cur$$1, [elem$$35]]).length > 0) {
                  match$$5 = elem$$35;
                  break;
                }
              }
            }
            introspect(JAM.policy.p4) {
              elem$$35 = elem$$35[dir$$1];
            }
          }
          introspect(JAM.policy.p3) {
            checkSet$$1[i$$36] = match$$5;
          }
        }
        i$$36 = i$$36 + 1;
        v1816 = i$$36 < l$$9;
      }
      return;
    }
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var done = 0;
    var toString$$1 = Object.prototype.toString;
    var hasDuplicate = false;
    var baseHasDuplicate = true;
    var v1818 = [0, 0];
    JAM.call(v1818.sort, v1818, [v136]);
    Sizzle.uniqueSort = v137;
    Sizzle.matches = v138;
    Sizzle.find = v139;
    Sizzle.filter = v140;
    Sizzle.error = v141;
    var Expr = Sizzle.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, 
    leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:v142}, relative:{"+":v143, ">":v144, "":v145, "~":v146}, find:{ID:v147, NAME:v148, TAG:v149}, preFilter:{CLASS:v150, ID:v151, TAG:v152, CHILD:v153, ATTR:v154, PSEUDO:v155, POS:v156}, filters:{enabled:v157, disabled:v158, checked:v159, selected:v160, parent:v161, empty:v162, has:v163, header:v164, text:v165, radio:v166, checkbox:v167, file:v168, password:v169, submit:v170, image:v171, reset:v172, button:v173, input:v174}, 
    setFilters:{first:v175, last:v176, even:v177, odd:v178, lt:v179, gt:v180, nth:v181, eq:v182}, filter:{PSEUDO:v183, CHILD:v184, ID:v185, TAG:v186, CLASS:v187, ATTR:v188, POS:v189}};
    var origPOS = Expr.match.POS;
    var type$$53;
    for (type$$53 in Expr.match) {
      var v1830 = Expr.match;
      var v1831 = type$$53;
      var v5342 = Expr.match;
      introspect(JAM.policy.p4) {
        var v5045 = v5342[type$$53]
      }
      var v5586 = new RegExp(v5045.source + /(?![^\[]*\])(?![^\(]*\))/.source);
      JAM.set(v1830, v1831, v5586, JAM.policy.p3);
      var v1832 = Expr.leftMatch;
      var v1833 = type$$53;
      var v4429 = /(^(?:.|\r|\n)*?)/.source;
      var v5467 = Expr.match;
      introspect(JAM.policy.p4) {
        var v5343 = v5467[type$$53]
      }
      var v5587 = new RegExp(v4429 + v5343.source.replace(/\\(\d+)/g, v190));
      JAM.set(v1832, v1833, v5587, JAM.policy.p3);
    }
    try {
      var v4431 = Array.prototype.slice;
      var v3422 = JAM.call(v4431.call, v4431, [document$$1.documentElement.childNodes, 0]);
      introspect(JAM.policy.p4) {
        var v1835 = v3422[0]
      }
      v1835.nodeType;
    } catch (e$$20) {
      makeArray = v191;
    }
    var sortOrder;
    if (document$$1.documentElement.compareDocumentPosition) {
      sortOrder = v192;
    } else {
      if ("sourceIndex" in document$$1.documentElement) {
        sortOrder = v193;
      } else {
        if (document$$1.createRange) {
          sortOrder = v194;
        }
      }
    }
    v197();
    v200();
    if (document$$1.querySelectorAll) {
      v202();
    }
    v204();
    var v1840;
    if (document$$1.compareDocumentPosition) {
      v1840 = v205;
    } else {
      v1840 = v206;
    }
    var contains = v1840;
    jQuery$$1.find = Sizzle;
    jQuery$$1.expr = Sizzle.selectors;
    jQuery$$1.expr[":"] = jQuery$$1.expr.filters;
    jQuery$$1.unique = Sizzle.uniqueSort;
    jQuery$$1.text = getText;
    jQuery$$1.isXMLDoc = isXML;
    jQuery$$1.contains = contains;
    return;
  }
  function v135() {
    var id$$3;
    for (id$$3 in jQuery$$1.cache) {
      var v4433 = jQuery$$1.cache;
      introspect(JAM.policy.p4) {
        var v3427 = v4433[id$$3]
      }
      if (v3427.handle) {
        try {
          var v1842 = jQuery$$1.event;
          var v5049 = jQuery$$1.cache;
          introspect(JAM.policy.p4) {
            var v4434 = v5049[id$$3]
          }
          JAM.call(v1842.remove, v1842, [v4434.handle.elem]);
        } catch (e$$19) {
        }
      }
    }
    return;
  }
  function v134(i$$33, name$$42) {
    function v133(fn$$13) {
      var v1846;
      if (fn$$13) {
        v1846 = JAM.call(this.bind, this, [name$$42, fn$$13]);
      } else {
        v1846 = JAM.call(this.trigger, this, [name$$42]);
      }
      return v1846;
    }
    JAM.set(jQuery$$1.fn, name$$42, v133, JAM.policy.p3);
    if (jQuery$$1.attrFn) {
      JAM.set(jQuery$$1.attrFn, name$$42, true, JAM.policy.p3);
    }
    return;
  }
  function v132(i$$31, name$$41) {
    function v131(types$$4, data$$37, fn$$12, origSelector) {
      function v130() {
        var v1850 = jQuery$$1.event;
        JAM.call(v1850.add, v1850, [this, liveConvert(type$$52, selector$$7), {data:data$$37, selector:selector$$7, handler:fn$$12, origType:type$$52, origHandler:fn$$12, preType:preType}]);
        return;
      }
      var type$$52;
      var i$$32 = 0;
      var match$$3;
      var namespaces$$9;
      var preType;
      var v1853 = origSelector;
      if (!v1853) {
        v1853 = this.selector;
      }
      var selector$$7 = v1853;
      var v1854;
      if (origSelector) {
        v1854 = this;
      } else {
        v1854 = jQuery$$1(this.context);
      }
      var context$$2 = v1854;
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$37])) {
        fn$$12 = data$$37;
        data$$37 = undefined$$1;
      }
      types$$4 = (types$$4 || "").split(" ");
      var v4435 = i$$32;
      i$$32 = i$$32 + 1;
      introspect(JAM.policy.p4) {
        var v3431 = type$$52 = types$$4[v4435]
      }
      var v1865 = v3431 != null;
      for (;v1865;) {
        match$$3 = rnamespaces.exec(type$$52);
        namespaces$$9 = "";
        if (match$$3) {
          introspect(JAM.policy.p4) {
            namespaces$$9 = match$$3[0];
          }
          type$$52 = type$$52.replace(rnamespaces, "");
        }
        if (type$$52 === "hover") {
          JAM.call(types$$4.push, types$$4, ["mouseenter" + namespaces$$9, "mouseleave" + namespaces$$9]);
          var v4436 = i$$32;
          i$$32 = i$$32 + 1;
          introspect(JAM.policy.p4) {
            var v3432 = type$$52 = types$$4[v4436]
          }
          v1865 = v3432 != null;
          continue;
        }
        preType = type$$52;
        var v3433 = type$$52 === "focus";
        if (!v3433) {
          v3433 = type$$52 === "blur";
        }
        if (v3433) {
          introspect(JAM.policy.p4) {
            var v3434 = liveMap[type$$52]
          }
          JAM.call(types$$4.push, types$$4, [v3434 + namespaces$$9]);
          type$$52 = type$$52 + namespaces$$9;
        } else {
          introspect(JAM.policy.p4) {
            var v3435 = liveMap[type$$52]
          }
          if (!v3435) {
            v3435 = type$$52;
          }
          type$$52 = v3435 + namespaces$$9;
        }
        if (name$$41 === "live") {
          JAM.call(context$$2.each, context$$2, [v130]);
        } else {
          JAM.call(context$$2.unbind, context$$2, [liveConvert(type$$52, selector$$7), fn$$12]);
        }
        var v4439 = i$$32;
        i$$32 = i$$32 + 1;
        introspect(JAM.policy.p4) {
          var v3436 = type$$52 = types$$4[v4439]
        }
        v1865 = v3436 != null;
      }
      return this;
    }
    JAM.set(jQuery$$1.fn, name$$41, v131, JAM.policy.p3);
    return;
  }
  function v129(fnOver, fnOut) {
    var v1867 = JAM.call(this.mouseenter, this, [fnOver]);
    return JAM.call(v1867.mouseleave, v1867, [fnOut || fnOver]);
  }
  function v128(fn$$11) {
    function v127(event$$9) {
      var v3437 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "lastToggle" + fn$$11.guid]);
      if (!v3437) {
        v3437 = 0;
      }
      var lastToggle = v3437 % i$$30;
      JAM.call(jQuery$$1.data, jQuery$$1, [this, "lastToggle" + fn$$11.guid, lastToggle + 1]);
      event$$9.preventDefault();
      introspect(JAM.policy.p4) {
        var v3439 = args$$5[lastToggle]
      }
      var v1872 = JAM.call(v3439.apply, v3439, [this, arguments]);
      if (!v1872) {
        v1872 = false;
      }
      return v1872;
    }
    var args$$5 = arguments;
    var i$$30 = 1;
    var v1874 = i$$30 < args$$5.length;
    for (;v1874;) {
      var v3442 = i$$30;
      i$$30 = i$$30 + 1;
      introspect(JAM.policy.p4) {
        var v1873 = args$$5[v3442]
      }
      JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$11, v1873]);
      v1874 = i$$30 < args$$5.length;
    }
    return JAM.call(this.click, this, [JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$11, v127])]);
  }
  function v126(type$$51, data$$36) {
    introspect(JAM.policy.p4) {
      var v1878 = this[0]
    }
    if (v1878) {
      var event$$8 = JAM.call(jQuery$$1.Event, jQuery$$1, [type$$51]);
      event$$8.preventDefault();
      event$$8.stopPropagation();
      var v1876 = jQuery$$1.event;
      introspect(JAM.policy.p4) {
        var v1877 = this[0]
      }
      JAM.call(v1876.trigger, v1876, [event$$8, data$$36, v1877]);
      return event$$8.result;
    }
    return;
  }
  function v125(type$$50, data$$35) {
    function v124() {
      var v1879 = jQuery$$1.event;
      JAM.call(v1879.trigger, v1879, [type$$50, data$$35, this]);
      return;
    }
    return JAM.call(this.each, this, [v124]);
  }
  function v123(selector$$6, types$$3, fn$$10) {
    if (arguments.length === 0) {
      return JAM.call(this.unbind, this, ["live"]);
    } else {
      return JAM.call(this.die, this, [types$$3, null, fn$$10, selector$$6]);
    }
    return;
  }
  function v122(selector$$5, types$$2, data$$34, fn$$9) {
    return JAM.call(this.live, this, [types$$2, data$$34, fn$$9, selector$$5]);
  }
  function v121(type$$49, fn$$8) {
    var v3445 = typeof type$$49 === "object";
    if (v3445) {
      v3445 = !type$$49.preventDefault;
    }
    if (v3445) {
      var key$$19;
      for (key$$19 in type$$49) {
        introspect(JAM.policy.p4) {
          var v1881 = type$$49[key$$19]
        }
        JAM.call(this.unbind, this, [key$$19, v1881]);
      }
    } else {
      var i$$29 = 0;
      var l$$7 = this.length;
      var v1884 = i$$29 < l$$7;
      for (;v1884;) {
        var v1882 = jQuery$$1.event;
        introspect(JAM.policy.p4) {
          var v1883 = this[i$$29]
        }
        JAM.call(v1882.remove, v1882, [v1883, type$$49, fn$$8]);
        i$$29 = i$$29 + 1;
        v1884 = i$$29 < l$$7;
      }
    }
    return this;
  }
  function v120(i$$27, name$$40) {
    function v119(type$$48, data$$33, fn$$7) {
      function v118(event$$7) {
        var v1886 = jQuery$$1(this);
        JAM.call(v1886.unbind, v1886, [event$$7, handler$$7]);
        return JAM.call(fn$$7.apply, fn$$7, [this, arguments]);
      }
      if (typeof type$$48 === "object") {
        var key$$18;
        for (key$$18 in type$$48) {
          introspect(JAM.policy.p4) {
            var v1887 = type$$48[key$$18]
          }
          JAM.call(JAM.get(this, name$$40, JAM.policy.p4), this, [key$$18, data$$33, v1887, fn$$7]);
        }
        return this;
      }
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$33])) {
        fn$$7 = data$$33;
        data$$33 = undefined$$1;
      }
      var v1890;
      if (name$$40 === "one") {
        v1890 = JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$7, v118]);
      } else {
        v1890 = fn$$7;
      }
      var handler$$7 = v1890;
      var v3448 = type$$48 === "unload";
      if (v3448) {
        v3448 = name$$40 !== "one";
      }
      if (v3448) {
        JAM.call(this.one, this, [type$$48, data$$33, fn$$7]);
      } else {
        var i$$28 = 0;
        var l$$6 = this.length;
        var v1893 = i$$28 < l$$6;
        for (;v1893;) {
          var v1891 = jQuery$$1.event;
          introspect(JAM.policy.p4) {
            var v1892 = this[i$$28]
          }
          JAM.call(v1891.add, v1891, [v1892, type$$48, handler$$7, data$$33]);
          i$$28 = i$$28 + 1;
          v1893 = i$$28 < l$$6;
        }
      }
      return this;
    }
    JAM.set(jQuery$$1.fn, name$$40, v119, JAM.policy.p3);
    return;
  }
  function v117(orig$$2, fix$$1) {
    function v116() {
      this.removeEventListener(orig$$2, handler$$6, true);
      return;
    }
    function v115() {
      this.addEventListener(orig$$2, handler$$6, true);
      return;
    }
    function handler$$6(e$$18) {
      var v1896 = jQuery$$1.event;
      e$$18 = JAM.call(v1896.fix, v1896, [e$$18]);
      e$$18.type = fix$$1;
      var v1897 = jQuery$$1.event.handle;
      return JAM.call(v1897.call, v1897, [this, e$$18]);
    }
    JAM.set(jQuery$$1.event.special, fix$$1, {setup:v115, teardown:v116}, JAM.policy.p3);
    return;
  }
  function v114(namespaces$$8) {
    var v1899 = jQuery$$1.event;
    JAM.call(v1899.remove, v1899, [this, ".specialChange"]);
    return formElems.test(this.nodeName);
  }
  function v113(data$$32, namespaces$$7) {
    if (this.type === "file") {
      return false;
    }
    var type$$47;
    for (type$$47 in changeFilters) {
      var v1902 = jQuery$$1.event;
      var v1903 = type$$47 + ".specialChange";
      introspect(JAM.policy.p4) {
        var v1904 = changeFilters[type$$47]
      }
      JAM.call(v1902.add, v1902, [this, v1903, v1904]);
    }
    return formElems.test(this.nodeName);
  }
  function v112(e$$17) {
    var elem$$32 = e$$17.target;
    JAM.call(jQuery$$1.data, jQuery$$1, [elem$$32, "_change_data", JAM.call(getVal, null, [elem$$32])]);
    return;
  }
  function v111(e$$16) {
    var elem$$31 = e$$16.target;
    var type$$46 = elem$$31.type;
    var v5051 = e$$16.keyCode === 13;
    if (v5051) {
      v5051 = elem$$31.nodeName.toLowerCase() !== "textarea";
    }
    var v4444 = v5051;
    if (!v4444) {
      var v5052 = e$$16.keyCode === 32;
      if (v5052) {
        var v5347 = type$$46 === "checkbox";
        if (!v5347) {
          v5347 = type$$46 === "radio";
        }
        v5052 = v5347;
      }
      v4444 = v5052;
    }
    var v3452 = v4444;
    if (!v3452) {
      v3452 = type$$46 === "select-multiple";
    }
    if (v3452) {
      return JAM.call(testChange.call, testChange, [this, e$$16]);
    }
    return;
  }
  function v110(e$$15) {
    var elem$$30 = e$$15.target;
    var type$$45 = elem$$30.type;
    var v4446 = type$$45 === "radio";
    if (!v4446) {
      v4446 = type$$45 === "checkbox";
    }
    var v3453 = v4446;
    if (!v3453) {
      v3453 = elem$$30.nodeName.toLowerCase() === "select";
    }
    if (v3453) {
      return JAM.call(testChange.call, testChange, [this, e$$15]);
    }
    return;
  }
  function testChange$$1(e$$14) {
    var elem$$29 = e$$14.target;
    var data$$31;
    var val$$2;
    var v3454 = !formElems.test(elem$$29.nodeName);
    if (!v3454) {
      v3454 = elem$$29.readOnly;
    }
    if (v3454) {
      return;
    }
    data$$31 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$29, "_change_data"]);
    val$$2 = JAM.call(getVal, null, [elem$$29]);
    var v3455 = e$$14.type !== "focusout";
    if (!v3455) {
      v3455 = elem$$29.type !== "radio";
    }
    if (v3455) {
      JAM.call(jQuery$$1.data, jQuery$$1, [elem$$29, "_change_data", val$$2]);
    }
    var v3456 = data$$31 === undefined$$1;
    if (!v3456) {
      v3456 = val$$2 === data$$31;
    }
    if (v3456) {
      return;
    }
    var v3457 = data$$31 != null;
    if (!v3457) {
      v3457 = val$$2;
    }
    if (v3457) {
      e$$14.type = "change";
      var v1912 = jQuery$$1.event;
      introspect(JAM.policy.p4) {
        var v1913 = arguments[1]
      }
      return JAM.call(v1912.trigger, v1912, [e$$14, v1913, elem$$29]);
    }
    return;
  }
  function v109(elem$$27) {
    function v108(elem$$28) {
      return elem$$28.selected;
    }
    var type$$44 = elem$$27.type;
    var val$$1 = elem$$27.value;
    var v3458 = type$$44 === "radio";
    if (!v3458) {
      v3458 = type$$44 === "checkbox";
    }
    if (v3458) {
      val$$1 = elem$$27.checked;
    } else {
      if (type$$44 === "select-multiple") {
        var v1915;
        if (elem$$27.selectedIndex > -1) {
          v1915 = JAM.call(jQuery$$1.map, jQuery$$1, [elem$$27.options, v108]).join("-");
        } else {
          v1915 = "";
        }
        val$$1 = v1915;
      } else {
        if (elem$$27.nodeName.toLowerCase() === "select") {
          val$$1 = elem$$27.selectedIndex;
        }
      }
    }
    return val$$1;
  }
  function v107(namespaces$$6) {
    var v1919 = jQuery$$1.event;
    JAM.call(v1919.remove, v1919, [this, ".specialSubmit"]);
    return;
  }
  function v106(data$$30, namespaces$$5) {
    function v105(e$$13) {
      var elem$$26 = e$$13.target;
      var type$$43 = elem$$26.type;
      var v5057 = type$$43 === "text";
      if (!v5057) {
        v5057 = type$$43 === "password";
      }
      var v4460 = v5057;
      if (v4460) {
        var v5349 = jQuery$$1(elem$$26);
        v4460 = JAM.call(v5349.closest, v5349, ["form"]).length;
      }
      var v3462 = v4460;
      if (v3462) {
        v3462 = e$$13.keyCode === 13;
      }
      if (v3462) {
        return trigger("submit", this, arguments);
      }
      return;
    }
    function v104(e$$12) {
      var elem$$25 = e$$12.target;
      var type$$42 = elem$$25.type;
      var v4462 = type$$42 === "submit";
      if (!v4462) {
        v4462 = type$$42 === "image";
      }
      var v3463 = v4462;
      if (v3463) {
        var v5060 = jQuery$$1(elem$$25);
        v3463 = JAM.call(v5060.closest, v5060, ["form"]).length;
      }
      if (v3463) {
        return trigger("submit", this, arguments);
      }
      return;
    }
    if (this.nodeName.toLowerCase() !== "form") {
      var v1922 = jQuery$$1.event;
      JAM.call(v1922.add, v1922, [this, "click.specialSubmit", v104]);
      var v1923 = jQuery$$1.event;
      JAM.call(v1923.add, v1923, [this, "keypress.specialSubmit", v105]);
    } else {
      return false;
    }
    return;
  }
  function v103(orig$$1, fix) {
    function v102(data$$29) {
      var v1925 = jQuery$$1.event;
      var v3465;
      var v5061 = data$$29;
      if (v5061) {
        v5061 = data$$29.selector;
      }
      if (v5061) {
        v3465 = delegate;
      } else {
        v3465 = withinElement;
      }
      JAM.call(v1925.remove, v1925, [this, fix, v3465]);
      return;
    }
    function v101(data$$28) {
      var v1927 = jQuery$$1.event;
      var v3466;
      var v5062 = data$$28;
      if (v5062) {
        v5062 = data$$28.selector;
      }
      if (v5062) {
        v3466 = delegate;
      } else {
        v3466 = withinElement;
      }
      JAM.call(v1927.add, v1927, [this, fix, v3466, orig$$1]);
      return;
    }
    JAM.set(jQuery$$1.event.special, orig$$1, {setup:v101, teardown:v102}, JAM.policy.p3);
    return;
  }
  function v100() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
    return;
  }
  function v99() {
    this.isPropagationStopped = returnTrue;
    var e$$10 = this.originalEvent;
    if (!e$$10) {
      return;
    }
    if (e$$10.stopPropagation) {
      e$$10.stopPropagation();
    }
    e$$10.cancelBubble = true;
    return;
  }
  function v98() {
    this.isDefaultPrevented = returnTrue;
    var e$$9 = this.originalEvent;
    if (!e$$9) {
      return;
    }
    if (e$$9.preventDefault) {
      e$$9.preventDefault();
    }
    e$$9.returnValue = false;
    return;
  }
  function v97(src$$2) {
    if (!this.preventDefault) {
      return JAM.new(jQuery$$1.Event, [src$$2]);
    }
    var v3469 = src$$2;
    if (v3469) {
      v3469 = src$$2.type;
    }
    if (v3469) {
      this.originalEvent = src$$2;
      this.type = src$$2.type;
    } else {
      this.type = src$$2;
    }
    var v5588 = now();
    this.timeStamp = v5588;
    JAM.set(this, expando, true, JAM.policy.p3);
    return;
  }
  function v96(elem$$24, type$$41, handle$$15) {
    JAM.call(elem$$24.detachEvent, elem$$24, ["on" + type$$41, handle$$15]);
    return;
  }
  function v95(elem$$23, type$$40, handle$$14) {
    elem$$23.removeEventListener(type$$40, handle$$14, false);
    return;
  }
  function v94(namespaces$$4, eventHandle$$2) {
    if (this.onbeforeunload === eventHandle$$2) {
      JAM.set(this, "onbeforeunload", null);
    }
    return;
  }
  function v93(data$$27, namespaces$$3, eventHandle$$1) {
    if (this.setInterval) {
      JAM.set(this, "onbeforeunload", eventHandle$$1);
    }
    return false;
  }
  function v92(handleObj$$5) {
    function v91() {
      if (type$$39 === this.origType.replace(rnamespaces, "")) {
        remove = false;
        return false;
      }
      return;
    }
    var remove = true;
    var type$$39 = handleObj$$5.origType.replace(rnamespaces, "");
    var v3473 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]).live;
    if (!v3473) {
      v3473 = [];
    }
    JAM.call(jQuery$$1.each, jQuery$$1, [v3473, v91]);
    if (remove) {
      var v1943 = jQuery$$1.event;
      JAM.call(v1943.remove, v1943, [this, handleObj$$5.origType, liveHandler]);
    }
    return;
  }
  function v90(handleObj$$4) {
    var v1945 = jQuery$$1.event;
    JAM.call(v1945.add, v1945, [this, handleObj$$4.origType, JAM.call(jQuery$$1.extend, jQuery$$1, [{}, handleObj$$4, {handler:liveHandler}])]);
    return;
  }
  function v89(event$$4) {
    introspect(JAM.policy.p4) {
      var v1948 = event$$4[expando]
    }
    if (v1948) {
      return event$$4;
    }
    var originalEvent = event$$4;
    event$$4 = JAM.call(jQuery$$1.Event, jQuery$$1, [originalEvent]);
    var i$$26 = this.props.length;
    var prop$$4;
    for (;i$$26;) {
      var v1950 = this.props;
      var v1951 = i$$26 = i$$26 - 1;
      introspect(JAM.policy.p4) {
        prop$$4 = v1950[v1951];
      }
      JAM.set(event$$4, prop$$4, JAM.get(originalEvent, prop$$4, JAM.policy.p3), JAM.policy.p3);
    }
    if (!event$$4.target) {
      var v1952 = event$$4.srcElement;
      if (!v1952) {
        v1952 = document$$1;
      }
      event$$4.target = v1952;
    }
    if (event$$4.target.nodeType === 3) {
      event$$4.target = event$$4.target.parentNode;
    }
    var v3478 = !event$$4.relatedTarget;
    if (v3478) {
      v3478 = event$$4.fromElement;
    }
    if (v3478) {
      var v1956;
      if (event$$4.fromElement === event$$4.target) {
        v1956 = event$$4.toElement;
      } else {
        v1956 = event$$4.fromElement;
      }
      event$$4.relatedTarget = v1956;
    }
    var v3480 = event$$4.pageX == null;
    if (v3480) {
      v3480 = event$$4.clientX != null;
    }
    if (v3480) {
      var doc$$2 = document$$1.documentElement;
      var body = document$$1.body;
      var v3481 = event$$4.clientX;
      var v5350 = doc$$2;
      if (v5350) {
        v5350 = doc$$2.scrollLeft;
      }
      var v5063 = v5350;
      if (!v5063) {
        var v5351 = body;
        if (v5351) {
          v5351 = body.scrollLeft;
        }
        v5063 = v5351;
      }
      var v4476 = v5063;
      if (!v4476) {
        v4476 = 0;
      }
      var v1958 = v3481 + v4476;
      var v5065 = doc$$2;
      if (v5065) {
        v5065 = doc$$2.clientLeft;
      }
      var v4477 = v5065;
      if (!v4477) {
        var v5066 = body;
        if (v5066) {
          v5066 = body.clientLeft;
        }
        v4477 = v5066;
      }
      var v3483 = v4477;
      if (!v3483) {
        v3483 = 0;
      }
      event$$4.pageX = v1958 - v3483;
      var v3484 = event$$4.clientY;
      var v5353 = doc$$2;
      if (v5353) {
        v5353 = doc$$2.scrollTop;
      }
      var v5068 = v5353;
      if (!v5068) {
        var v5354 = body;
        if (v5354) {
          v5354 = body.scrollTop;
        }
        v5068 = v5354;
      }
      var v4479 = v5068;
      if (!v4479) {
        v4479 = 0;
      }
      var v1960 = v3484 + v4479;
      var v5070 = doc$$2;
      if (v5070) {
        v5070 = doc$$2.clientTop;
      }
      var v4480 = v5070;
      if (!v4480) {
        var v5071 = body;
        if (v5071) {
          v5071 = body.clientTop;
        }
        v4480 = v5071;
      }
      var v3486 = v4480;
      if (!v3486) {
        v3486 = 0;
      }
      event$$4.pageY = v1960 - v3486;
    }
    var v3487 = !event$$4.which;
    if (v3487) {
      var v4483;
      var v5356 = event$$4.charCode;
      if (!v5356) {
        v5356 = event$$4.charCode === 0;
      }
      if (v5356) {
        v4483 = event$$4.charCode;
      } else {
        v4483 = event$$4.keyCode;
      }
      v3487 = v4483;
    }
    if (v3487) {
      var v1963 = event$$4.charCode;
      if (!v1963) {
        v1963 = event$$4.keyCode;
      }
      event$$4.which = v1963;
    }
    var v3489 = !event$$4.metaKey;
    if (v3489) {
      v3489 = event$$4.ctrlKey;
    }
    if (v3489) {
      event$$4.metaKey = event$$4.ctrlKey;
    }
    var v3490 = !event$$4.which;
    if (v3490) {
      v3490 = event$$4.button !== undefined$$1;
    }
    if (v3490) {
      var v1966;
      if (event$$4.button & 1) {
        v1966 = 1;
      } else {
        var v3491;
        if (event$$4.button & 2) {
          v3491 = 3;
        } else {
          var v4488;
          if (event$$4.button & 4) {
            v4488 = 2;
          } else {
            v4488 = 0;
          }
          v3491 = v4488;
        }
        v1966 = v3491;
      }
      event$$4.which = v1966;
    }
    return event$$4;
  }
  function v88(event$$3) {
    var all$$2;
    var handlers$$1;
    var namespaces$$2;
    var namespace$$2;
    var events$$4;
    var v1968 = arguments;
    var v3493 = jQuery$$1.event;
    var v4490 = event$$3;
    if (!v4490) {
      v4490 = window$$1.event;
    }
    var v5589 = JAM.call(v3493.fix, v3493, [v4490]);
    introspect(JAM.policy.p3) {
      event$$3 = v1968[0] = v5589;
    }
    event$$3.currentTarget = this;
    var v1969 = event$$3.type.indexOf(".") < 0;
    if (v1969) {
      v1969 = !event$$3.exclusive;
    }
    all$$2 = v1969;
    if (!all$$2) {
      namespaces$$2 = event$$3.type.split(".");
      var v1971 = event$$3;
      var v5590 = namespaces$$2.shift();
      v1971.type = v5590;
      namespace$$2 = new RegExp("(^|\\.)" + JAM.call(namespaces$$2.slice, namespaces$$2, [0]).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
    }
    events$$4 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]);
    var v1974 = event$$3.type;
    introspect(JAM.policy.p4) {
      handlers$$1 = events$$4[v1974];
    }
    if (events$$4 && handlers$$1) {
      handlers$$1 = JAM.call(handlers$$1.slice, handlers$$1, [0]);
      var j$$3 = 0;
      var l$$5 = handlers$$1.length;
      var v1980 = j$$3 < l$$5;
      for (;v1980;) {
        introspect(JAM.policy.p4) {
          var handleObj$$3 = handlers$$1[j$$3]
        }
        var v3498 = all$$2;
        if (!v3498) {
          v3498 = namespace$$2.test(handleObj$$3.namespace);
        }
        if (v3498) {
          event$$3.handler = handleObj$$3.handler;
          event$$3.data = handleObj$$3.data;
          event$$3.handleObj = handleObj$$3;
          var v1975 = handleObj$$3.handler;
          var ret$$7 = JAM.call(v1975.apply, v1975, [this, arguments]);
          if (ret$$7 !== undefined$$1) {
            event$$3.result = ret$$7;
            if (ret$$7 === false) {
              event$$3.preventDefault();
              event$$3.stopPropagation();
            }
          }
          if (event$$3.isImmediatePropagationStopped()) {
            break;
          }
        }
        j$$3 = j$$3 + 1;
        v1980 = j$$3 < l$$5;
      }
    }
    return event$$3.result;
  }
  function v87(event$$2, data$$26, elem$$22) {
    function v86() {
      var v3499 = this.events;
      if (v3499) {
        var v4495 = this.events;
        introspect(JAM.policy.p4) {
          v3499 = v4495[type$$38];
        }
      }
      if (v3499) {
        var v1982 = jQuery$$1.event;
        JAM.call(v1982.trigger, v1982, [event$$2, data$$26, this.handle.elem]);
      }
      return;
    }
    var v1985 = event$$2.type;
    if (!v1985) {
      v1985 = event$$2;
    }
    var type$$38 = v1985;
    introspect(JAM.policy.p4) {
      var bubbling = arguments[3]
    }
    if (!bubbling) {
      var v1986;
      if (typeof event$$2 === "object") {
        var v3502;
        introspect(JAM.policy.p4) {
          var v4498 = event$$2[expando]
        }
        if (v4498) {
          v3502 = event$$2;
        } else {
          v3502 = JAM.call(jQuery$$1.extend, jQuery$$1, [JAM.call(jQuery$$1.Event, jQuery$$1, [type$$38]), event$$2]);
        }
        v1986 = v3502;
      } else {
        v1986 = JAM.call(jQuery$$1.Event, jQuery$$1, [type$$38]);
      }
      event$$2 = v1986;
      if (type$$38.indexOf("!") >= 0) {
        event$$2.type = type$$38 = JAM.call(type$$38.slice, type$$38, [0, -1]);
        event$$2.exclusive = true;
      }
      if (!elem$$22) {
        event$$2.stopPropagation();
        var v3505 = jQuery$$1.event.global;
        introspect(JAM.policy.p4) {
          var v1990 = v3505[type$$38]
        }
        if (v1990) {
          JAM.call(jQuery$$1.each, jQuery$$1, [jQuery$$1.cache, v86]);
        }
      }
      var v4500 = !elem$$22;
      if (!v4500) {
        v4500 = elem$$22.nodeType === 3;
      }
      var v3506 = v4500;
      if (!v3506) {
        v3506 = elem$$22.nodeType === 8;
      }
      if (v3506) {
        return undefined$$1;
      }
      event$$2.result = undefined$$1;
      event$$2.target = elem$$22;
      data$$26 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [data$$26]);
      data$$26.unshift(event$$2);
    }
    event$$2.currentTarget = elem$$22;
    var handle$$13 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$22, "handle"]);
    if (handle$$13) {
      JAM.call(handle$$13.apply, handle$$13, [elem$$22, data$$26]);
    }
    var v1994 = elem$$22.parentNode;
    if (!v1994) {
      v1994 = elem$$22.ownerDocument;
    }
    var parent$$1 = v1994;
    try {
      var v5080 = elem$$22;
      if (v5080) {
        v5080 = elem$$22.nodeName;
      }
      var v4503 = v5080;
      if (v4503) {
        var v5081 = jQuery$$1.noData;
        var v5082 = elem$$22.nodeName.toLowerCase();
        introspect(JAM.policy.p4) {
          v4503 = v5081[v5082];
        }
      }
      if (!v4503) {
        var v4504 = "on" + type$$38;
        introspect(JAM.policy.p4) {
          var v3509 = elem$$22[v4504]
        }
        if (v3509) {
          var v5360 = "on" + type$$38;
          introspect(JAM.policy.p4) {
            var v5083 = elem$$22[v5360]
          }
          v3509 = JAM.call(v5083.apply, v5083, [elem$$22, data$$26]) === false;
        }
        if (v3509) {
          event$$2.result = false;
        }
      }
    } catch (e$$7) {
    }
    var v3510 = !event$$2.isPropagationStopped();
    if (v3510) {
      v3510 = parent$$1;
    }
    if (v3510) {
      var v1997 = jQuery$$1.event;
      JAM.call(v1997.trigger, v1997, [event$$2, data$$26, parent$$1, true]);
    } else {
      if (!event$$2.isDefaultPrevented()) {
        var target$$27 = event$$2.target;
        var old;
        var v1998 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [target$$27, "a"]);
        if (v1998) {
          v1998 = type$$38 === "click";
        }
        var isClick = v1998;
        var v3512 = jQuery$$1.event.special;
        introspect(JAM.policy.p4) {
          var v1999 = v3512[type$$38]
        }
        if (!v1999) {
          v1999 = {};
        }
        var special$$3 = v1999;
        var v5084 = !special$$3._default;
        if (!v5084) {
          var v5472 = special$$3._default;
          v5084 = JAM.call(v5472.call, v5472, [elem$$22, event$$2]) === false;
        }
        var v4508 = v5084;
        if (v4508) {
          v4508 = !isClick;
        }
        var v3514 = v4508;
        if (v3514) {
          var v5364 = target$$27;
          if (v5364) {
            v5364 = target$$27.nodeName;
          }
          var v5085 = v5364;
          if (v5085) {
            var v5365 = jQuery$$1.noData;
            var v5366 = target$$27.nodeName.toLowerCase();
            introspect(JAM.policy.p4) {
              v5085 = v5365[v5366];
            }
          }
          v3514 = !v5085;
        }
        if (v3514) {
          try {
            introspect(JAM.policy.p4) {
              var v2003 = target$$27[type$$38]
            }
            if (v2003) {
              var v2000 = "on" + type$$38;
              introspect(JAM.policy.p4) {
                old = target$$27[v2000];
              }
              if (old) {
                JAM.set(target$$27, "on" + type$$38, null, JAM.policy.p3);
              }
              jQuery$$1.event.triggered = true;
              JAM.call(JAM.get(target$$27, type$$38, JAM.policy.p4), target$$27, []);
            }
          } catch (e$$8) {
          }
          if (old) {
            JAM.set(target$$27, "on" + type$$38, old, JAM.policy.p3);
          }
          jQuery$$1.event.triggered = false;
        }
      }
    }
    return;
  }
  function v85(elem$$21, types$$1, handler$$5, pos) {
    var v3515 = elem$$21.nodeType === 3;
    if (!v3515) {
      v3515 = elem$$21.nodeType === 8;
    }
    if (v3515) {
      return;
    }
    var ret$$6;
    var type$$37;
    var fn$$6;
    var i$$25 = 0;
    var all$$1;
    var namespaces$$1;
    var namespace$$1;
    var special$$2;
    var eventType$$2;
    var handleObj$$2;
    var origType;
    var elemData$$1 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$21]);
    var v2010 = elemData$$1;
    if (v2010) {
      v2010 = elemData$$1.events;
    }
    var events$$3 = v2010;
    var v3516 = !elemData$$1;
    if (!v3516) {
      v3516 = !events$$3;
    }
    if (v3516) {
      return;
    }
    var v3517 = types$$1;
    if (v3517) {
      v3517 = types$$1.type;
    }
    if (v3517) {
      handler$$5 = types$$1.handler;
      types$$1 = types$$1.type;
    }
    var v3518 = !types$$1;
    if (!v3518) {
      var v4514 = typeof types$$1 === "string";
      if (v4514) {
        v4514 = types$$1.charAt(0) === ".";
      }
      v3518 = v4514;
    }
    if (v3518) {
      types$$1 = types$$1 || "";
      for (type$$37 in events$$3) {
        var v2013 = jQuery$$1.event;
        JAM.call(v2013.remove, v2013, [elem$$21, type$$37 + types$$1]);
      }
      return;
    }
    types$$1 = types$$1.split(" ");
    var v3519 = i$$25;
    i$$25 = i$$25 + 1;
    introspect(JAM.policy.p4) {
      var v2038 = type$$37 = types$$1[v3519]
    }
    for (;v2038;) {
      origType = type$$37;
      handleObj$$2 = null;
      all$$1 = type$$37.indexOf(".") < 0;
      namespaces$$1 = [];
      if (!all$$1) {
        namespaces$$1 = type$$37.split(".");
        type$$37 = namespaces$$1.shift();
        namespace$$1 = new RegExp("(^|\\.)" + JAM.call(jQuery$$1.map, jQuery$$1, [JAM.call(namespaces$$1.slice, namespaces$$1, [0]).sort(), fcleanup]).join("\\.(?:.*\\.)?") + "(\\.|$)");
      }
      introspect(JAM.policy.p4) {
        eventType$$2 = events$$3[type$$37];
      }
      if (!eventType$$2) {
        var v3521 = i$$25;
        i$$25 = i$$25 + 1;
        introspect(JAM.policy.p4) {
          v2038 = type$$37 = types$$1[v3521];
        }
        continue;
      }
      if (!handler$$5) {
        var j$$2 = 0;
        var v2024 = j$$2 < eventType$$2.length;
        for (;v2024;) {
          introspect(JAM.policy.p4) {
            handleObj$$2 = eventType$$2[j$$2];
          }
          var v3523 = all$$1;
          if (!v3523) {
            v3523 = namespace$$1.test(handleObj$$2.namespace);
          }
          if (v3523) {
            var v2020 = jQuery$$1.event;
            JAM.call(v2020.remove, v2020, [elem$$21, origType, handleObj$$2.handler, j$$2]);
            var v2022 = j$$2;
            j$$2 = j$$2 - 1;
            JAM.call(eventType$$2.splice, eventType$$2, [v2022, 1]);
          }
          j$$2 = j$$2 + 1;
          v2024 = j$$2 < eventType$$2.length;
        }
        var v3525 = i$$25;
        i$$25 = i$$25 + 1;
        introspect(JAM.policy.p4) {
          v2038 = type$$37 = types$$1[v3525];
        }
        continue;
      }
      var v3526 = jQuery$$1.event.special;
      introspect(JAM.policy.p4) {
        var v2026 = v3526[type$$37]
      }
      if (!v2026) {
        v2026 = {};
      }
      special$$2 = v2026;
      j$$2 = pos || 0;
      var v2034 = j$$2 < eventType$$2.length;
      for (;v2034;) {
        introspect(JAM.policy.p4) {
          handleObj$$2 = eventType$$2[j$$2];
        }
        if (handler$$5.guid === handleObj$$2.guid) {
          var v3531 = all$$1;
          if (!v3531) {
            v3531 = namespace$$1.test(handleObj$$2.namespace);
          }
          if (v3531) {
            if (pos == null) {
              var v2027 = j$$2;
              j$$2 = j$$2 - 1;
              JAM.call(eventType$$2.splice, eventType$$2, [v2027, 1]);
            }
            if (special$$2.remove) {
              var v2029 = special$$2.remove;
              JAM.call(v2029.call, v2029, [elem$$21, handleObj$$2]);
            }
          }
          if (pos != null) {
            break;
          }
        }
        j$$2 = j$$2 + 1;
        v2034 = j$$2 < eventType$$2.length;
      }
      var v3533 = eventType$$2.length === 0;
      if (!v3533) {
        var v4523 = pos != null;
        if (v4523) {
          v4523 = eventType$$2.length === 1;
        }
        v3533 = v4523;
      }
      if (v3533) {
        var v3534 = !special$$2.teardown;
        if (!v3534) {
          var v5090 = special$$2.teardown;
          v3534 = JAM.call(v5090.call, v5090, [elem$$21, namespaces$$1]) === false;
        }
        if (v3534) {
          JAM.call(removeEvent, null, [elem$$21, type$$37, elemData$$1.handle]);
        }
        ret$$6 = null;
        introspect(JAM.policy.p4) {
          delete events$$3[type$$37];
        }
      }
      var v3535 = i$$25;
      i$$25 = i$$25 + 1;
      introspect(JAM.policy.p4) {
        v2038 = type$$37 = types$$1[v3535];
      }
    }
    if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [events$$3])) {
      var handle$$12 = elemData$$1.handle;
      if (handle$$12) {
        handle$$12.elem = null;
      }
      delete elemData$$1.events;
      delete elemData$$1.handle;
      if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [elemData$$1])) {
        JAM.call(jQuery$$1.removeData, jQuery$$1, [elem$$21]);
      }
    }
    return;
  }
  function v84(elem$$20, types, handler$$4, data$$25) {
    function v83() {
      var v2041;
      var v4528 = typeof jQuery$$1 !== "undefined";
      if (v4528) {
        v4528 = !jQuery$$1.event.triggered;
      }
      if (v4528) {
        var v3536 = jQuery$$1.event.handle;
        v2041 = JAM.call(v3536.apply, v3536, [eventHandle.elem, arguments]);
      } else {
        v2041 = undefined$$1;
      }
      return v2041;
    }
    var v3539 = elem$$20.nodeType === 3;
    if (!v3539) {
      v3539 = elem$$20.nodeType === 8;
    }
    if (v3539) {
      return;
    }
    var v3540 = elem$$20.setInterval;
    if (v3540) {
      var v4533 = elem$$20 !== window$$1;
      if (v4533) {
        v4533 = !elem$$20.frameElement;
      }
      v3540 = v4533;
    }
    if (v3540) {
      elem$$20 = window$$1;
    }
    var handleObjIn;
    var handleObj$$1;
    if (handler$$4.handler) {
      handleObjIn = handler$$4;
      handler$$4 = handleObjIn.handler;
    }
    if (!handler$$4.guid) {
      handler$$4.guid = jQuery$$1.guid;
      jQuery$$1.guid = jQuery$$1.guid + 1;
    }
    var elemData = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$20]);
    if (!elemData) {
      return;
    }
    var v2047 = elemData.events;
    if (!v2047) {
      v2047 = {};
    }
    var events$$2 = elemData.events = v2047;
    var eventHandle = elemData.handle;
    if (!eventHandle) {
      elemData.handle = eventHandle = v83;
    }
    eventHandle.elem = elem$$20;
    types = types.split(" ");
    var type$$36;
    var i$$24 = 0;
    var namespaces;
    var v3544 = i$$24;
    i$$24 = i$$24 + 1;
    introspect(JAM.policy.p4) {
      var v2063 = type$$36 = types[v3544]
    }
    for (;v2063;) {
      var v2049;
      if (handleObjIn) {
        v2049 = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, handleObjIn]);
      } else {
        v2049 = {handler:handler$$4, data:data$$25};
      }
      handleObj$$1 = v2049;
      if (type$$36.indexOf(".") > -1) {
        namespaces = type$$36.split(".");
        type$$36 = namespaces.shift();
        var v2050 = handleObj$$1;
        var v5591 = JAM.call(namespaces.slice, namespaces, [0]).sort().join(".");
        v2050.namespace = v5591;
      } else {
        namespaces = [];
        handleObj$$1.namespace = "";
      }
      handleObj$$1.type = type$$36;
      handleObj$$1.guid = handler$$4.guid;
      introspect(JAM.policy.p4) {
        var handlers = events$$2[type$$36]
      }
      var v3547 = jQuery$$1.event.special;
      introspect(JAM.policy.p4) {
        var v2052 = v3547[type$$36]
      }
      if (!v2052) {
        v2052 = {};
      }
      var special$$1 = v2052;
      if (!handlers) {
        handlers = JAM.set(events$$2, type$$36, [], JAM.policy.p3);
        var v3549 = !special$$1.setup;
        if (!v3549) {
          var v5094 = special$$1.setup;
          v3549 = JAM.call(v5094.call, v5094, [elem$$20, data$$25, namespaces, eventHandle]) === false;
        }
        if (v3549) {
          if (elem$$20.addEventListener) {
            elem$$20.addEventListener(type$$36, eventHandle, false);
          } else {
            if (elem$$20.attachEvent) {
              JAM.call(elem$$20.attachEvent, elem$$20, ["on" + type$$36, eventHandle]);
            }
          }
        }
      }
      if (special$$1.add) {
        var v2058 = special$$1.add;
        JAM.call(v2058.call, v2058, [elem$$20, handleObj$$1]);
        if (!handleObj$$1.handler.guid) {
          handleObj$$1.handler.guid = handler$$4.guid;
        }
      }
      JAM.call(handlers.push, handlers, [handleObj$$1]);
      JAM.set(jQuery$$1.event.global, type$$36, true, JAM.policy.p3);
      var v3552 = i$$24;
      i$$24 = i$$24 + 1;
      introspect(JAM.policy.p4) {
        v2063 = type$$36 = types[v3552];
      }
    }
    elem$$20 = null;
    return;
  }
  function v82(elem$$19, name$$39, value$$36, pass$$1) {
    var v4540 = !elem$$19;
    if (!v4540) {
      v4540 = elem$$19.nodeType === 3;
    }
    var v3553 = v4540;
    if (!v3553) {
      v3553 = elem$$19.nodeType === 8;
    }
    if (v3553) {
      return undefined$$1;
    }
    var v3554 = pass$$1;
    if (v3554) {
      v3554 = name$$39 in jQuery$$1.attrFn;
    }
    if (v3554) {
      var v2065 = jQuery$$1(elem$$19);
      return JAM.call(JAM.get(v2065, name$$39, JAM.policy.p4), v2065, [value$$36]);
    }
    var v2067 = elem$$19.nodeType !== 1;
    if (!v2067) {
      v2067 = !JAM.call(jQuery$$1.isXMLDoc, jQuery$$1, [elem$$19]);
    }
    var notxml = v2067;
    var set = value$$36 !== undefined$$1;
    var v3558 = notxml;
    if (v3558) {
      var v4544 = jQuery$$1.props;
      introspect(JAM.policy.p4) {
        v3558 = v4544[name$$39];
      }
    }
    var v2068 = v3558;
    if (!v2068) {
      v2068 = name$$39;
    }
    name$$39 = v2068;
    if (elem$$19.nodeType === 1) {
      var special = rspecialurl.test(name$$39);
      var v3561 = name$$39 === "selected";
      if (v3561) {
        v3561 = !jQuery$$1.support.optSelected;
      }
      if (v3561) {
        var parent = elem$$19.parentNode
      }
      var v4546 = name$$39 in elem$$19;
      if (v4546) {
        v4546 = notxml;
      }
      var v3562 = v4546;
      if (v3562) {
        v3562 = !special;
      }
      if (v3562) {
        if (set) {
          var v4547 = name$$39 === "type";
          if (v4547) {
            v4547 = rtype.test(elem$$19.nodeName);
          }
          var v3563 = v4547;
          if (v3563) {
            v3563 = elem$$19.parentNode;
          }
          if (v3563) {
            JAM.call(jQuery$$1.error, jQuery$$1, ["type property can't be changed"]);
          }
          JAM.set(elem$$19, name$$39, value$$36, JAM.policy.p3);
        }
        var v3564 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$19, "form"]);
        if (v3564) {
          v3564 = elem$$19.getAttributeNode(name$$39);
        }
        if (v3564) {
          return elem$$19.getAttributeNode(name$$39).nodeValue;
        }
        if (name$$39 === "tabIndex") {
          var attributeNode = elem$$19.getAttributeNode("tabIndex");
          var v2073;
          var v4548 = attributeNode;
          if (v4548) {
            v4548 = attributeNode.specified;
          }
          if (v4548) {
            v2073 = attributeNode.value;
          } else {
            var v3565;
            var v5099 = rfocusable.test(elem$$19.nodeName);
            if (!v5099) {
              var v5370 = rclickable.test(elem$$19.nodeName);
              if (v5370) {
                v5370 = elem$$19.href;
              }
              v5099 = v5370;
            }
            if (v5099) {
              v3565 = 0;
            } else {
              v3565 = undefined$$1;
            }
            v2073 = v3565;
          }
          return v2073;
        }
        introspect(JAM.policy.p4) {
          return elem$$19[name$$39];
        }
      }
      var v4550 = !jQuery$$1.support.style;
      if (v4550) {
        v4550 = notxml;
      }
      var v3567 = v4550;
      if (v3567) {
        v3567 = name$$39 === "style";
      }
      if (v3567) {
        if (set) {
          elem$$19.style.cssText = "" + value$$36;
        }
        return elem$$19.style.cssText;
      }
      if (set) {
        JAM.call(elem$$19.setAttribute, elem$$19, [name$$39, "" + value$$36]);
      }
      var v2080;
      var v5101 = !jQuery$$1.support.hrefNormalized;
      if (v5101) {
        v5101 = notxml;
      }
      var v4551 = v5101;
      if (v4551) {
        v4551 = special;
      }
      if (v4551) {
        v2080 = elem$$19.getAttribute(name$$39, 2);
      } else {
        v2080 = elem$$19.getAttribute(name$$39);
      }
      var attr = v2080;
      var v2081;
      if (attr === null) {
        v2081 = undefined$$1;
      } else {
        v2081 = attr;
      }
      return v2081;
    }
    return JAM.call(jQuery$$1.style, jQuery$$1, [elem$$19, name$$39, value$$36]);
  }
  function v81(value$$35) {
    function v80(i$$23) {
      function v79() {
        this.selected = JAM.call(jQuery$$1.inArray, jQuery$$1, [jQuery$$1(this).val(), values$$5]) >= 0;
        return;
      }
      var self$$5 = jQuery$$1(this);
      var val = value$$35;
      if (this.nodeType !== 1) {
        return;
      }
      if (isFunction) {
        val = JAM.call(value$$35.call, value$$35, [this, i$$23, self$$5.val()]);
      }
      if (typeof val === "number") {
        val = val + "";
      }
      var v3573 = JAM.call(jQuery$$1.isArray, jQuery$$1, [val]);
      if (v3573) {
        v3573 = rradiocheck.test(this.type);
      }
      if (v3573) {
        this.checked = JAM.call(jQuery$$1.inArray, jQuery$$1, [self$$5.val(), val]) >= 0;
      } else {
        if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [this, "select"])) {
          var values$$5 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [val]);
          var v2088 = jQuery$$1("option", this);
          JAM.call(v2088.each, v2088, [v79]);
          if (!values$$5.length) {
            this.selectedIndex = -1;
          }
        } else {
          this.value = val;
        }
      }
      return;
    }
    if (value$$35 === undefined$$1) {
      introspect(JAM.policy.p4) {
        var elem$$18 = this[0]
      }
      if (elem$$18) {
        if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$18, "option"])) {
          var v2092;
          var v5102 = elem$$18.attributes.value;
          if (!v5102) {
            v5102 = {};
          }
          if (v5102.specified) {
            v2092 = elem$$18.value;
          } else {
            v2092 = elem$$18.text;
          }
          return v2092;
        }
        if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$18, "select"])) {
          var index$$39 = elem$$18.selectedIndex;
          var values$$4 = [];
          var options$$2 = elem$$18.options;
          var one = elem$$18.type === "select-one";
          if (index$$39 < 0) {
            return null;
          }
          var v2096;
          if (one) {
            v2096 = index$$39;
          } else {
            v2096 = 0;
          }
          var i$$22 = v2096;
          var v2097;
          if (one) {
            v2097 = index$$39 + 1;
          } else {
            v2097 = options$$2.length;
          }
          var max = v2097;
          var v2100 = i$$22 < max;
          for (;v2100;) {
            introspect(JAM.policy.p4) {
              var option = options$$2[i$$22]
            }
            if (option.selected) {
              value$$35 = jQuery$$1(option).val();
              if (one) {
                return value$$35;
              }
              JAM.call(values$$4.push, values$$4, [value$$35]);
            }
            i$$22 = i$$22 + 1;
            v2100 = i$$22 < max;
          }
          return values$$4;
        }
        var v3577 = rradiocheck.test(elem$$18.type);
        if (v3577) {
          v3577 = !jQuery$$1.support.checkOn;
        }
        if (v3577) {
          var v2102;
          if (elem$$18.getAttribute("value") === null) {
            v2102 = "on";
          } else {
            v2102 = elem$$18.value;
          }
          return v2102;
        }
        var v3579 = elem$$18.value;
        if (!v3579) {
          v3579 = "";
        }
        return v3579.replace(rreturn, "");
      }
      return undefined$$1;
    }
    var isFunction = JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$35]);
    return JAM.call(this.each, this, [v80]);
  }
  function v78(selector$$4) {
    var className$$3 = " " + selector$$4 + " ";
    var i$$21 = 0;
    var l$$4 = this.length;
    var v2108 = i$$21 < l$$4;
    for (;v2108;) {
      introspect(JAM.policy.p4) {
        var v5506 = this[i$$21]
      }
      if ((" " + v5506.className + " ").replace(rclass, " ").indexOf(className$$3) > -1) {
        return true;
      }
      i$$21 = i$$21 + 1;
      v2108 = i$$21 < l$$4;
    }
    return false;
  }
  function v77(value$$34, stateVal) {
    function v76() {
      if (type$$35 === "string") {
        var className$$2;
        var i$$20 = 0;
        var self$$4 = jQuery$$1(this);
        var state = stateVal;
        var classNames$$3 = value$$34.split(rspace);
        var v3581 = i$$20;
        i$$20 = i$$20 + 1;
        introspect(JAM.policy.p4) {
          var v2111 = className$$2 = classNames$$3[v3581]
        }
        for (;v2111;) {
          var v2109;
          if (isBool) {
            v2109 = state;
          } else {
            v2109 = !JAM.call(self$$4.hasClass, self$$4, [className$$2]);
          }
          state = v2109;
          var v3583;
          if (state) {
            v3583 = "addClass";
          } else {
            v3583 = "removeClass";
          }
          JAM.call(JAM.get(self$$4, v3583, JAM.policy.p4), self$$4, [className$$2]);
          var v3584 = i$$20;
          i$$20 = i$$20 + 1;
          introspect(JAM.policy.p4) {
            v2111 = className$$2 = classNames$$3[v3584];
          }
        }
      } else {
        var v3585 = type$$35 === "undefined";
        if (!v3585) {
          v3585 = type$$35 === "boolean";
        }
        if (v3585) {
          if (this.className) {
            JAM.call(jQuery$$1.data, jQuery$$1, [this, "__className__", this.className]);
          }
          var v2114;
          var v4561 = this.className;
          if (!v4561) {
            v4561 = value$$34 === false;
          }
          if (v4561) {
            v2114 = "";
          } else {
            var v3586 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "__className__"]);
            if (!v3586) {
              v3586 = "";
            }
            v2114 = v3586;
          }
          this.className = v2114;
        }
      }
      return;
    }
    function v75(i$$19) {
      var self$$3 = jQuery$$1(this);
      JAM.call(self$$3.toggleClass, self$$3, [JAM.call(value$$34.call, value$$34, [this, i$$19, JAM.call(self$$3.attr, self$$3, ["class"]), stateVal]), stateVal]);
      return;
    }
    var type$$35 = typeof value$$34;
    var isBool = typeof stateVal === "boolean";
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$34])) {
      return JAM.call(this.each, this, [v75]);
    }
    return JAM.call(this.each, this, [v76]);
  }
  function v74(value$$33) {
    function v73(i$$18) {
      var self$$2 = jQuery$$1(this);
      JAM.call(self$$2.removeClass, self$$2, [JAM.call(value$$33.call, value$$33, [this, i$$18, JAM.call(self$$2.attr, self$$2, ["class"])])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$33])) {
      return JAM.call(this.each, this, [v73]);
    }
    var v4563 = value$$33;
    if (v4563) {
      v4563 = typeof value$$33 === "string";
    }
    var v3590 = v4563;
    if (!v3590) {
      v3590 = value$$33 === undefined$$1;
    }
    if (v3590) {
      var classNames$$2 = (value$$33 || "").split(rspace);
      var i$$17 = 0;
      var l$$3 = this.length;
      var v2128 = i$$17 < l$$3;
      for (;v2128;) {
        introspect(JAM.policy.p4) {
          var elem$$17 = this[i$$17]
        }
        var v3591 = elem$$17.nodeType === 1;
        if (v3591) {
          v3591 = elem$$17.className;
        }
        if (v3591) {
          if (value$$33) {
            var className$$1 = (" " + elem$$17.className + " ").replace(rclass, " ");
            var c$$1 = 0;
            var cl$$1 = classNames$$2.length;
            var v2125 = c$$1 < cl$$1;
            for (;v2125;) {
              introspect(JAM.policy.p4) {
                var v4567 = classNames$$2[c$$1]
              }
              className$$1 = className$$1.replace(" " + v4567 + " ", " ");
              c$$1 = c$$1 + 1;
              v2125 = c$$1 < cl$$1;
            }
            var v2126 = elem$$17;
            var v5592 = JAM.call(jQuery$$1.trim, jQuery$$1, [className$$1]);
            v2126.className = v5592;
          } else {
            elem$$17.className = "";
          }
        }
        i$$17 = i$$17 + 1;
        v2128 = i$$17 < l$$3;
      }
    }
    return this;
  }
  function v72(value$$32) {
    function v71(i$$16) {
      var self$$1 = jQuery$$1(this);
      JAM.call(self$$1.addClass, self$$1, [JAM.call(value$$32.call, value$$32, [this, i$$16, JAM.call(self$$1.attr, self$$1, ["class"])])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$32])) {
      return JAM.call(this.each, this, [v71]);
    }
    var v3595 = value$$32;
    if (v3595) {
      v3595 = typeof value$$32 === "string";
    }
    if (v3595) {
      var classNames$$1 = (value$$32 || "").split(rspace);
      var i$$15 = 0;
      var l$$2 = this.length;
      var v2139 = i$$15 < l$$2;
      for (;v2139;) {
        introspect(JAM.policy.p4) {
          var elem$$16 = this[i$$15]
        }
        if (elem$$16.nodeType === 1) {
          if (!elem$$16.className) {
            elem$$16.className = value$$32;
          } else {
            var className = " " + elem$$16.className + " ";
            var setClass = elem$$16.className;
            var c = 0;
            var cl = classNames$$1.length;
            var v2135 = c < cl;
            for (;v2135;) {
              introspect(JAM.policy.p4) {
                var v5377 = classNames$$1[c]
              }
              if (className.indexOf(" " + v5377 + " ") < 0) {
                introspect(JAM.policy.p4) {
                  var v4570 = classNames$$1[c]
                }
                setClass = setClass + (" " + v4570);
              }
              c = c + 1;
              v2135 = c < cl;
            }
            var v2136 = elem$$16;
            var v5593 = JAM.call(jQuery$$1.trim, jQuery$$1, [setClass]);
            v2136.className = v5593;
          }
        }
        i$$15 = i$$15 + 1;
        v2139 = i$$15 < l$$2;
      }
    }
    return this;
  }
  function v70(name$$38, fn$$5) {
    function v69() {
      JAM.call(jQuery$$1.attr, jQuery$$1, [this, name$$38, ""]);
      if (this.nodeType === 1) {
        this.removeAttribute(name$$38);
      }
      return;
    }
    return JAM.call(this.each, this, [v69]);
  }
  function v68(name$$37, value$$31) {
    return access(this, name$$37, value$$31, true, jQuery$$1.attr);
  }
  function v67(type$$34) {
    return JAM.call(this.queue, this, [type$$34 || "fx", []]);
  }
  function v66(time, type$$33) {
    function v65() {
      function v64() {
        JAM.call(jQuery$$1.dequeue, jQuery$$1, [elem$$15, type$$33]);
        return;
      }
      var elem$$15 = this;
      JAM.call(setTimeout, null, [v64, time]);
      return;
    }
    var v2144;
    if (jQuery$$1.fx) {
      var v4571 = jQuery$$1.fx.speeds;
      introspect(JAM.policy.p4) {
        var v3602 = v4571[time]
      }
      if (!v3602) {
        v3602 = time;
      }
      v2144 = v3602;
    } else {
      v2144 = time;
    }
    time = v2144;
    type$$33 = type$$33 || "fx";
    return JAM.call(this.queue, this, [type$$33, v65]);
  }
  function v63(type$$32) {
    function v62() {
      JAM.call(jQuery$$1.dequeue, jQuery$$1, [this, type$$32]);
      return;
    }
    return JAM.call(this.each, this, [v62]);
  }
  function v61(type$$31, data$$24) {
    function v60(i$$14, elem$$14) {
      var queue$$1 = JAM.call(jQuery$$1.queue, jQuery$$1, [this, type$$31, data$$24]);
      var v3604 = type$$31 === "fx";
      if (v3604) {
        introspect(JAM.policy.p4) {
          var v4573 = queue$$1[0]
        }
        v3604 = v4573 !== "inprogress";
      }
      if (v3604) {
        JAM.call(jQuery$$1.dequeue, jQuery$$1, [this, type$$31]);
      }
      return;
    }
    if (typeof type$$31 !== "string") {
      data$$24 = type$$31;
      type$$31 = "fx";
    }
    if (data$$24 === undefined$$1) {
      introspect(JAM.policy.p4) {
        var v2147 = this[0]
      }
      return JAM.call(jQuery$$1.queue, jQuery$$1, [v2147, type$$31]);
    }
    return JAM.call(this.each, this, [v60]);
  }
  function v59(elem$$13, type$$30) {
    function v58() {
      JAM.call(jQuery$$1.dequeue, jQuery$$1, [elem$$13, type$$30]);
      return;
    }
    type$$30 = type$$30 || "fx";
    var queue = JAM.call(jQuery$$1.queue, jQuery$$1, [elem$$13, type$$30]);
    var fn$$4 = queue.shift();
    if (fn$$4 === "inprogress") {
      fn$$4 = queue.shift();
    }
    if (fn$$4) {
      if (type$$30 === "fx") {
        queue.unshift("inprogress");
      }
      JAM.call(fn$$4.call, fn$$4, [elem$$13, v58]);
    }
    return;
  }
  function v57(elem$$12, type$$29, data$$23) {
    if (!elem$$12) {
      return;
    }
    type$$29 = (type$$29 || "fx") + "queue";
    var q = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$12, type$$29]);
    if (!data$$23) {
      return q || [];
    }
    var v3606 = !q;
    if (!v3606) {
      v3606 = JAM.call(jQuery$$1.isArray, jQuery$$1, [data$$23]);
    }
    if (v3606) {
      q = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$12, type$$29, JAM.call(jQuery$$1.makeArray, jQuery$$1, [data$$23])]);
    } else {
      JAM.call(q.push, q, [data$$23]);
    }
    return q;
  }
  function v56(key$$17) {
    function v55() {
      JAM.call(jQuery$$1.removeData, jQuery$$1, [this, key$$17]);
      return;
    }
    return JAM.call(this.each, this, [v55]);
  }
  function v54(key$$16, value$$30) {
    function v53() {
      JAM.call(jQuery$$1.data, jQuery$$1, [this, key$$16, value$$30]);
      return;
    }
    function v52() {
      JAM.call(jQuery$$1.data, jQuery$$1, [this, key$$16]);
      return;
    }
    var v3607 = typeof key$$16 === "undefined";
    if (v3607) {
      v3607 = this.length;
    }
    if (v3607) {
      introspect(JAM.policy.p4) {
        var v2156 = this[0]
      }
      return JAM.call(jQuery$$1.data, jQuery$$1, [v2156]);
    } else {
      if (typeof key$$16 === "object") {
        return JAM.call(this.each, this, [v52]);
      }
    }
    var parts = key$$16.split(".");
    var v2159;
    introspect(JAM.policy.p4) {
      var v3610 = parts[1]
    }
    if (v3610) {
      introspect(JAM.policy.p4) {
        var v3609 = parts[1]
      }
      v2159 = "." + v3609;
    } else {
      v2159 = "";
    }
    introspect(JAM.policy.p3) {
      parts[1] = v2159;
    }
    if (value$$30 === undefined$$1) {
      introspect(JAM.policy.p4) {
        var v4576 = parts[1]
      }
      var v2160 = "getData" + v4576 + "!";
      introspect(JAM.policy.p4) {
        var v3612 = parts[0]
      }
      var data$$22 = JAM.call(this.triggerHandler, this, [v2160, [v3612]]);
      var v3613 = data$$22 === undefined$$1;
      if (v3613) {
        v3613 = this.length;
      }
      if (v3613) {
        introspect(JAM.policy.p4) {
          var v2162 = this[0]
        }
        data$$22 = JAM.call(jQuery$$1.data, jQuery$$1, [v2162, key$$16]);
      }
      var v2164;
      var v4577 = data$$22 === undefined$$1;
      if (v4577) {
        introspect(JAM.policy.p4) {
          v4577 = parts[1];
        }
      }
      if (v4577) {
        introspect(JAM.policy.p4) {
          var v3614 = parts[0]
        }
        v2164 = JAM.call(this.data, this, [v3614]);
      } else {
        v2164 = data$$22;
      }
      return v2164;
    } else {
      introspect(JAM.policy.p4) {
        var v5109 = parts[1]
      }
      var v3616 = "setData" + v5109 + "!";
      introspect(JAM.policy.p4) {
        var v4579 = parts[0]
      }
      var v2165 = JAM.call(this.trigger, this, [v3616, [v4579, value$$30]]);
      return JAM.call(v2165.each, v2165, [v53]);
    }
    return;
  }
  function v51(elem$$11, name$$36) {
    var v3618 = elem$$11.nodeName;
    if (v3618) {
      var v4580 = jQuery$$1.noData;
      var v4581 = elem$$11.nodeName.toLowerCase();
      introspect(JAM.policy.p4) {
        v3618 = v4580[v4581];
      }
    }
    if (v3618) {
      return;
    }
    var v2168;
    if (elem$$11 == window$$1) {
      v2168 = windowData;
    } else {
      v2168 = elem$$11;
    }
    elem$$11 = v2168;
    introspect(JAM.policy.p4) {
      var id$$2 = elem$$11[expando]
    }
    var cache$$1 = jQuery$$1.cache;
    introspect(JAM.policy.p4) {
      var thisCache$$1 = cache$$1[id$$2]
    }
    if (name$$36) {
      if (thisCache$$1) {
        introspect(JAM.policy.p4) {
          delete thisCache$$1[name$$36];
        }
        if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [thisCache$$1])) {
          JAM.call(jQuery$$1.removeData, jQuery$$1, [elem$$11]);
        }
      }
    } else {
      if (jQuery$$1.support.deleteExpando) {
        var v2170 = jQuery$$1.expando;
        introspect(JAM.policy.p4) {
          delete elem$$11[v2170];
        }
      } else {
        if (elem$$11.removeAttribute) {
          elem$$11.removeAttribute(jQuery$$1.expando);
        }
      }
      introspect(JAM.policy.p4) {
        delete cache$$1[id$$2];
      }
    }
    return;
  }
  function v50(elem$$10, name$$35, data$$21) {
    var v3621 = elem$$10.nodeName;
    if (v3621) {
      var v4582 = jQuery$$1.noData;
      var v4583 = elem$$10.nodeName.toLowerCase();
      introspect(JAM.policy.p4) {
        v3621 = v4582[v4583];
      }
    }
    if (v3621) {
      return;
    }
    var v2175;
    if (elem$$10 == window$$1) {
      v2175 = windowData;
    } else {
      v2175 = elem$$10;
    }
    elem$$10 = v2175;
    introspect(JAM.policy.p4) {
      var id$$1 = elem$$10[expando]
    }
    var cache = jQuery$$1.cache;
    var thisCache;
    var v4584 = !id$$1;
    if (v4584) {
      v4584 = typeof name$$35 === "string";
    }
    var v3623 = v4584;
    if (v3623) {
      v3623 = data$$21 === undefined$$1;
    }
    if (v3623) {
      return null;
    }
    if (!id$$1) {
      id$$1 = uuid = uuid + 1;
    }
    if (typeof name$$35 === "object") {
      JAM.set(elem$$10, expando, id$$1, JAM.policy.p3);
      var v2178 = cache;
      var v2179 = id$$1;
      var v5594 = JAM.call(jQuery$$1.extend, jQuery$$1, [true, {}, name$$35]);
      thisCache = JAM.set(v2178, v2179, v5594, JAM.policy.p3);
    } else {
      introspect(JAM.policy.p4) {
        var v3625 = cache[id$$1]
      }
      if (!v3625) {
        JAM.set(elem$$10, expando, id$$1, JAM.policy.p3);
        JAM.set(cache, id$$1, {}, JAM.policy.p3);
      }
    }
    introspect(JAM.policy.p4) {
      thisCache = cache[id$$1];
    }
    if (data$$21 !== undefined$$1) {
      JAM.set(thisCache, name$$35, data$$21, JAM.policy.p3);
    }
    var v2183;
    if (typeof name$$35 === "string") {
      introspect(JAM.policy.p4) {
        v2183 = thisCache[name$$35];
      }
    } else {
      v2183 = thisCache;
    }
    return v2183;
  }
  function v49() {
    function v48() {
      var div$$1 = document$$1.createElement("div");
      div$$1.style.width = div$$1.style.paddingLeft = "1px";
      var v2185 = document$$1.body;
      JAM.call(v2185.appendChild, v2185, [div$$1]);
      jQuery$$1.boxModel = jQuery$$1.support.boxModel = div$$1.offsetWidth === 2;
      document$$1.body.removeChild(div$$1).style.display = "none";
      div$$1 = null;
      return;
    }
    function click() {
      jQuery$$1.support.noCloneEvent = false;
      JAM.call(div.detachEvent, div, ["onclick", click]);
      return;
    }
    function eventSupported(eventName) {
      var el = document$$1.createElement("div");
      eventName = "on" + eventName;
      var isSupported = eventName in el;
      if (!isSupported) {
        JAM.call(el.setAttribute, el, [eventName, "return;"]);
        introspect(JAM.policy.p4) {
          var v3630 = el[eventName]
        }
        isSupported = typeof v3630 === "function";
      }
      el = null;
      return isSupported;
    }
    jQuery$$1.support = {};
    var root = document$$1.documentElement;
    var script$$1 = document$$1.createElement("script");
    var div = document$$1.createElement("div");
    var id = "script" + now();
    div.style.display = "none";
    JAM.set(div, "innerHTML", "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>");
    var all = div.getElementsByTagName("*");
    var v2193 = div.getElementsByTagName("a");
    introspect(JAM.policy.p4) {
      var a = v2193[0]
    }
    var v4587 = !all;
    if (!v4587) {
      v4587 = !all.length;
    }
    var v3631 = v4587;
    if (!v3631) {
      v3631 = !a;
    }
    if (v3631) {
      return;
    }
    var v2195 = jQuery$$1;
    var v3632 = div.firstChild.nodeType === 3;
    var v3633 = !div.getElementsByTagName("tbody").length;
    var v3634 = !!div.getElementsByTagName("link").length;
    var v3635 = /red/.test(a.getAttribute("style"));
    var v3636 = a.getAttribute("href") === "/a";
    var v3637 = /^0.55$/.test(a.style.opacity);
    var v3638 = !!a.style.cssFloat;
    var v5380 = div.getElementsByTagName("input");
    introspect(JAM.policy.p4) {
      var v5120 = v5380[0]
    }
    var v3639 = v5120.value === "on";
    var v5121 = document$$1.createElement("select");
    v2195.support = {leadingWhitespace:v3632, tbody:v3633, htmlSerialize:v3634, style:v3635, hrefNormalized:v3636, opacity:v3637, cssFloat:v3638, checkOn:v3639, optSelected:JAM.call(v5121.appendChild, v5121, [document$$1.createElement("option")]).selected, parentNode:div.removeChild(JAM.call(div.appendChild, div, [document$$1.createElement("div")])).parentNode === null, deleteExpando:true, checkClone:false, scriptEval:false, noCloneEvent:true, boxModel:null};
    script$$1.type = "text/javascript";
    try {
      JAM.call(script$$1.appendChild, script$$1, [document$$1.createTextNode("window." + id + "=1;")]);
    } catch (e$$5) {
    }
    JAM.call(root.insertBefore, root, [script$$1, root.firstChild]);
    introspect(JAM.policy.p4) {
      var v2199 = window$$1[id]
    }
    if (v2199) {
      jQuery$$1.support.scriptEval = true;
      introspect(JAM.policy.p4) {
        delete window$$1[id];
      }
    }
    try {
      delete script$$1.test;
    } catch (e$$6) {
      jQuery$$1.support.deleteExpando = false;
    }
    root.removeChild(script$$1);
    var v3643 = div.attachEvent;
    if (v3643) {
      v3643 = div.fireEvent;
    }
    if (v3643) {
      JAM.call(div.attachEvent, div, ["onclick", click]);
      var v2201 = div.cloneNode(true);
      JAM.call(v2201.fireEvent, v2201, ["onclick"]);
    }
    div = document$$1.createElement("div");
    JAM.set(div, "innerHTML", "<input type='radio' name='radiotest' checked='checked'/>");
    var fragment$$1 = document$$1.createDocumentFragment();
    JAM.call(fragment$$1.appendChild, fragment$$1, [div.firstChild]);
    jQuery$$1.support.checkClone = fragment$$1.cloneNode(true).cloneNode(true).lastChild.checked;
    jQuery$$1(v48);
    var v2205 = jQuery$$1.support;
    var v5595 = eventSupported("submit");
    v2205.submitBubbles = v5595;
    var v2206 = jQuery$$1.support;
    var v5596 = eventSupported("change");
    v2206.changeBubbles = v5596;
    root = script$$1 = div = all = a = null;
    return;
  }
  function v47() {
    if (document$$1.readyState === "complete") {
      JAM.call(document$$1.detachEvent, document$$1, ["onreadystatechange", DOMContentLoaded]);
      jQuery$$1.ready();
    }
    return;
  }
  function v46() {
    document$$1.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
    jQuery$$1.ready();
    return;
  }
  function v45(elem$$9, array$$11) {
    return JAM.call(indexOf.call, indexOf, [array$$11, elem$$9]);
  }
  function v44(ua) {
    ua = ua.toLowerCase();
    var v5125 = /(webkit)[ \/]([\w.]+)/.exec(ua);
    if (!v5125) {
      v5125 = /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua);
    }
    var v4601 = v5125;
    if (!v4601) {
      v4601 = /(msie) ([\w.]+)/.exec(ua);
    }
    var v3646 = v4601;
    if (!v3646) {
      var v4602 = !/compatible/.test(ua);
      if (v4602) {
        v4602 = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua);
      }
      v3646 = v4602;
    }
    var v2208 = v3646;
    if (!v2208) {
      v2208 = [];
    }
    var match$$2 = v2208;
    introspect(JAM.policy.p4) {
      var v3648 = match$$2[1]
    }
    if (!v3648) {
      v3648 = "";
    }
    var v2209 = v3648;
    introspect(JAM.policy.p4) {
      var v3649 = match$$2[2]
    }
    if (!v3649) {
      v3649 = "0";
    }
    return{browser:v2209, version:v3649};
  }
  function v43(fn$$3, proxy, thisObject) {
    function v42() {
      return JAM.call(fn$$3.apply, fn$$3, [thisObject || this, arguments]);
    }
    if (arguments.length === 2) {
      if (typeof proxy === "string") {
        thisObject = fn$$3;
        introspect(JAM.policy.p4) {
          fn$$3 = thisObject[proxy];
        }
        proxy = undefined$$1;
      } else {
        var v3652 = proxy;
        if (v3652) {
          v3652 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [proxy]);
        }
        if (v3652) {
          thisObject = proxy;
          proxy = undefined$$1;
        }
      }
    }
    var v3653 = !proxy;
    if (v3653) {
      v3653 = fn$$3;
    }
    if (v3653) {
      proxy = v42;
    }
    if (fn$$3) {
      var v3654 = fn$$3.guid;
      if (!v3654) {
        v3654 = proxy.guid;
      }
      var v2216 = v3654;
      if (!v2216) {
        v2216 = jQuery$$1.guid;
        jQuery$$1.guid = jQuery$$1.guid + 1;
      }
      proxy.guid = fn$$3.guid = v2216;
    }
    return proxy;
  }
  function v41(elems$$4, callback$$29, arg$$2) {
    var ret$$5 = [];
    var value$$29;
    var i$$13 = 0;
    var length$$16 = elems$$4.length;
    var v2220 = i$$13 < length$$16;
    for (;v2220;) {
      introspect(JAM.policy.p4) {
        var v2217 = elems$$4[i$$13]
      }
      value$$29 = JAM.call(callback$$29, null, [v2217, i$$13, arg$$2]);
      if (value$$29 != null) {
        var v2218 = ret$$5.length;
        introspect(JAM.policy.p3) {
          ret$$5[v2218] = value$$29;
        }
      }
      i$$13 = i$$13 + 1;
      v2220 = i$$13 < length$$16;
    }
    var v2221 = ret$$5.concat;
    return JAM.call(v2221.apply, v2221, [[], ret$$5]);
  }
  function v40(elems$$3, callback$$28, inv) {
    var ret$$4 = [];
    var i$$12 = 0;
    var length$$15 = elems$$3.length;
    var v2224 = i$$12 < length$$15;
    for (;v2224;) {
      var v3656 = !inv;
      introspect(JAM.policy.p4) {
        var v5128 = elems$$3[i$$12]
      }
      if (v3656 !== !JAM.call(callback$$28, null, [v5128, i$$12])) {
        introspect(JAM.policy.p4) {
          var v2222 = elems$$3[i$$12]
        }
        JAM.call(ret$$4.push, ret$$4, [v2222]);
      }
      i$$12 = i$$12 + 1;
      v2224 = i$$12 < length$$15;
    }
    return ret$$4;
  }
  function v39(first$$1, second) {
    var i$$11 = first$$1.length;
    var j$$1 = 0;
    if (typeof second.length === "number") {
      var l$$1 = second.length;
      var v2226 = j$$1 < l$$1;
      for (;v2226;) {
        var v2225 = i$$11;
        i$$11 = i$$11 + 1;
        JAM.set(first$$1, v2225, JAM.get(second, j$$1, JAM.policy.p3), JAM.policy.p3);
        j$$1 = j$$1 + 1;
        v2226 = j$$1 < l$$1;
      }
    } else {
      introspect(JAM.policy.p4) {
        var v3659 = second[j$$1]
      }
      var v2228 = v3659 !== undefined$$1;
      for (;v2228;) {
        var v2227 = i$$11;
        i$$11 = i$$11 + 1;
        var v3660 = j$$1;
        j$$1 = j$$1 + 1;
        JAM.set(first$$1, v2227, JAM.get(second, v3660, JAM.policy.p3), JAM.policy.p3);
        introspect(JAM.policy.p4) {
          var v3661 = second[j$$1]
        }
        v2228 = v3661 !== undefined$$1;
      }
    }
    first$$1.length = i$$11;
    return first$$1;
  }
  function v38(elem$$8, array$$10) {
    if (array$$10.indexOf) {
      return array$$10.indexOf(elem$$8);
    }
    var i$$10 = 0;
    var length$$14 = array$$10.length;
    var v2232 = i$$10 < length$$14;
    for (;v2232;) {
      introspect(JAM.policy.p4) {
        var v3662 = array$$10[i$$10]
      }
      if (v3662 === elem$$8) {
        return i$$10;
      }
      i$$10 = i$$10 + 1;
      v2232 = i$$10 < length$$14;
    }
    return-1;
  }
  function v37(array$$9, results) {
    var ret$$3 = results || [];
    if (array$$9 != null) {
      var v5129 = array$$9.length == null;
      if (!v5129) {
        v5129 = typeof array$$9 === "string";
      }
      var v4611 = v5129;
      if (!v4611) {
        v4611 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [array$$9]);
      }
      var v3663 = v4611;
      if (!v3663) {
        var v4612 = typeof array$$9 !== "function";
        if (v4612) {
          v4612 = array$$9.setInterval;
        }
        v3663 = v4612;
      }
      if (v3663) {
        JAM.call(push.call, push, [ret$$3, array$$9]);
      } else {
        JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$3, array$$9]);
      }
    }
    return ret$$3;
  }
  function v36(text$$7) {
    return(text$$7 || "").replace(rtrim, "");
  }
  function v35(object, callback$$27, args$$4) {
    var name$$34;
    var i$$9 = 0;
    var length$$13 = object.length;
    var v2236 = length$$13 === undefined$$1;
    if (!v2236) {
      v2236 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [object]);
    }
    var isObj = v2236;
    if (args$$4) {
      if (isObj) {
        for (name$$34 in object) {
          introspect(JAM.policy.p4) {
            var v4614 = object[name$$34]
          }
          if (JAM.call(callback$$27.apply, callback$$27, [v4614, args$$4]) === false) {
            break;
          }
        }
      } else {
        var v2239 = i$$9 < length$$13;
        for (;v2239;) {
          var v5132 = i$$9;
          i$$9 = i$$9 + 1;
          introspect(JAM.policy.p4) {
            var v4615 = object[v5132]
          }
          if (JAM.call(callback$$27.apply, callback$$27, [v4615, args$$4]) === false) {
            break;
          }
          v2239 = i$$9 < length$$13;
        }
      }
    } else {
      if (isObj) {
        for (name$$34 in object) {
          introspect(JAM.policy.p4) {
            var v4616 = object[name$$34]
          }
          introspect(JAM.policy.p4) {
            var v4617 = object[name$$34]
          }
          if (JAM.call(callback$$27.call, callback$$27, [v4616, name$$34, v4617]) === false) {
            break;
          }
        }
      } else {
        introspect(JAM.policy.p4) {
          var value$$28 = object[0]
        }
        var v3668 = i$$9 < length$$13;
        if (v3668) {
          v3668 = JAM.call(callback$$27.call, callback$$27, [value$$28, i$$9, value$$28]) !== false;
        }
        var v2241 = v3668;
        for (;v2241;) {
          var v3669 = i$$9 = i$$9 + 1;
          introspect(JAM.policy.p4) {
            value$$28 = object[v3669];
          }
          var v3670 = i$$9 < length$$13;
          if (v3670) {
            v3670 = JAM.call(callback$$27.call, callback$$27, [value$$28, i$$9, value$$28]) !== false;
          }
          v2241 = v3670;
        }
      }
    }
    return object;
  }
  function v34(elem$$7, name$$33) {
    var v2242 = elem$$7.nodeName;
    if (v2242) {
      v2242 = elem$$7.nodeName.toUpperCase() === name$$33.toUpperCase();
    }
    return v2242;
  }
  function v33(data$$20) {
    var v3673 = data$$20;
    if (v3673) {
      v3673 = rnotwhite.test(data$$20);
    }
    if (v3673) {
      var v3674 = document$$1.getElementsByTagName("head");
      introspect(JAM.policy.p4) {
        var v2243 = v3674[0]
      }
      if (!v2243) {
        v2243 = document$$1.documentElement;
      }
      var head = v2243;
      var script = document$$1.createElement("script");
      script.type = "text/javascript";
      if (jQuery$$1.support.scriptEval) {
        JAM.call(script.appendChild, script, [document$$1.createTextNode(data$$20)]);
      } else {
        script.text = data$$20;
      }
      JAM.call(head.insertBefore, head, [script, head.firstChild]);
      head.removeChild(script);
    }
    return;
  }
  function v32() {
    return;
  }
  function v31(data$$19) {
    var v3677 = typeof data$$19 !== "string";
    if (!v3677) {
      v3677 = !data$$19;
    }
    if (v3677) {
      return null;
    }
    data$$19 = JAM.call(jQuery$$1.trim, jQuery$$1, [data$$19]);
    if (/^[\],:{}\s]*$/.test(data$$19.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
      var v2249;
      var v4624 = window$$1.JSON;
      if (v4624) {
        v4624 = window$$1.JSON.parse;
      }
      if (v4624) {
        v2249 = window$$1.JSON.parse(data$$19);
      } else {
        v2249 = JAM.new(Function, ["return " + data$$19])();
      }
      return v2249;
    } else {
      JAM.call(jQuery$$1.error, jQuery$$1, ["Invalid JSON: " + data$$19]);
    }
    return;
  }
  function v30(msg) {
    throw msg;
  }
  function v29(obj$$20) {
    var name$$32;
    for (name$$32 in obj$$20) {
      return false;
    }
    return true;
  }
  function v28(obj$$19) {
    var v5135 = !obj$$19;
    if (!v5135) {
      v5135 = JAM.call(toString.call, toString, [obj$$19]) !== "[object Object]";
    }
    var v4626 = v5135;
    if (!v4626) {
      v4626 = obj$$19.nodeType;
    }
    var v3682 = v4626;
    if (!v3682) {
      v3682 = obj$$19.setInterval;
    }
    if (v3682) {
      return false;
    }
    var v4628 = obj$$19.constructor;
    if (v4628) {
      v4628 = !JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19, "constructor"]);
    }
    var v3683 = v4628;
    if (v3683) {
      v3683 = !JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19.constructor.prototype, "isPrototypeOf"]);
    }
    if (v3683) {
      return false;
    }
    var key$$15;
    for (key$$15 in obj$$19) {
    }
    var v2254 = key$$15 === undefined$$1;
    if (!v2254) {
      v2254 = JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19, key$$15]);
    }
    return v2254;
  }
  function v27(obj$$18) {
    return JAM.call(toString.call, toString, [obj$$18]) === "[object Array]";
  }
  function v26(obj$$17) {
    return JAM.call(toString.call, toString, [obj$$17]) === "[object Function]";
  }
  function v25() {
    if (readyBound) {
      return;
    }
    readyBound = true;
    if (document$$1.readyState === "complete") {
      return jQuery$$1.ready();
    }
    if (document$$1.addEventListener) {
      document$$1.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
      window$$1.addEventListener("load", jQuery$$1.ready, false);
    } else {
      if (document$$1.attachEvent) {
        JAM.call(document$$1.attachEvent, document$$1, ["onreadystatechange", DOMContentLoaded]);
        JAM.call(window$$1.attachEvent, window$$1, ["onload", jQuery$$1.ready]);
        var toplevel = false;
        try {
          toplevel = window$$1.frameElement == null;
        } catch (e$$4) {
        }
        var v3686 = document$$1.documentElement.doScroll;
        if (v3686) {
          v3686 = toplevel;
        }
        if (v3686) {
          doScrollCheck();
        }
      }
    }
    return;
  }
  function v24() {
    if (!jQuery$$1.isReady) {
      if (!document$$1.body) {
        return JAM.call(setTimeout, null, [jQuery$$1.ready, 13]);
      }
      jQuery$$1.isReady = true;
      if (readyList) {
        var fn$$2;
        var i$$8 = 0;
        var v3689 = i$$8;
        i$$8 = i$$8 + 1;
        introspect(JAM.policy.p4) {
          var v2266 = fn$$2 = readyList[v3689]
        }
        for (;v2266;) {
          JAM.call(fn$$2.call, fn$$2, [document$$1, jQuery$$1]);
          var v3690 = i$$8;
          i$$8 = i$$8 + 1;
          introspect(JAM.policy.p4) {
            v2266 = fn$$2 = readyList[v3690];
          }
        }
        readyList = null;
      }
      if (jQuery$$1.fn.triggerHandler) {
        var v2267 = jQuery$$1(document$$1);
        JAM.call(v2267.triggerHandler, v2267, ["ready"]);
      }
    }
    return;
  }
  function v23(deep$$3) {
    window$$1.$ = _$;
    if (deep$$3) {
      window$$1.jQuery = _jQuery;
    }
    return jQuery$$1;
  }
  function v22() {
    introspect(JAM.policy.p4) {
      var v2270 = arguments[0]
    }
    if (!v2270) {
      v2270 = {};
    }
    var target$$26 = v2270;
    var i$$7 = 1;
    var length$$12 = arguments.length;
    var deep$$2 = false;
    var options$$1;
    var name$$31;
    var src$$1;
    var copy;
    if (typeof target$$26 === "boolean") {
      deep$$2 = target$$26;
      introspect(JAM.policy.p4) {
        var v2271 = arguments[1]
      }
      if (!v2271) {
        v2271 = {};
      }
      target$$26 = v2271;
      i$$7 = 2;
    }
    var v3695 = typeof target$$26 !== "object";
    if (v3695) {
      v3695 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [target$$26]);
    }
    if (v3695) {
      target$$26 = {};
    }
    if (length$$12 === i$$7) {
      target$$26 = this;
      i$$7 = i$$7 - 1;
    }
    var v2282 = i$$7 < length$$12;
    for (;v2282;) {
      introspect(JAM.policy.p4) {
        var v3696 = options$$1 = arguments[i$$7]
      }
      if (v3696 != null) {
        for (name$$31 in options$$1) {
          introspect(JAM.policy.p4) {
            src$$1 = target$$26[name$$31];
          }
          introspect(JAM.policy.p4) {
            copy = options$$1[name$$31];
          }
          if (target$$26 === copy) {
            continue;
          }
          var v3697 = deep$$2 && copy;
          if (v3697) {
            var v4633 = JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [copy]);
            if (!v4633) {
              v4633 = JAM.call(jQuery$$1.isArray, jQuery$$1, [copy]);
            }
            v3697 = v4633;
          }
          if (v3697) {
            var v2276;
            var v4634 = src$$1;
            if (v4634) {
              var v5140 = JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [src$$1]);
              if (!v5140) {
                v5140 = JAM.call(jQuery$$1.isArray, jQuery$$1, [src$$1]);
              }
              v4634 = v5140;
            }
            if (v4634) {
              v2276 = src$$1;
            } else {
              var v3698;
              if (JAM.call(jQuery$$1.isArray, jQuery$$1, [copy])) {
                v3698 = [];
              } else {
                v3698 = {};
              }
              v2276 = v3698;
            }
            var clone = v2276;
            var v2277 = target$$26;
            var v2278 = name$$31;
            var v5597 = JAM.call(jQuery$$1.extend, jQuery$$1, [deep$$2, clone, copy]);
            JAM.set(v2277, v2278, v5597, JAM.policy.p3);
          } else {
            if (copy !== undefined$$1) {
              JAM.set(target$$26, name$$31, copy, JAM.policy.p3);
            }
          }
        }
      }
      i$$7 = i$$7 + 1;
      v2282 = i$$7 < length$$12;
    }
    return target$$26;
  }
  function v21() {
    var v2283 = this.prevObject;
    if (!v2283) {
      v2283 = jQuery$$1(null);
    }
    return v2283;
  }
  function v20(callback$$26) {
    function v19(elem$$6, i$$6) {
      return JAM.call(callback$$26.call, callback$$26, [elem$$6, i$$6, elem$$6]);
    }
    return JAM.call(this.pushStack, this, [JAM.call(jQuery$$1.map, jQuery$$1, [this, v19])]);
  }
  function v18() {
    return JAM.call(this.pushStack, this, [JAM.call(slice.apply, slice, [this, arguments]), "slice", JAM.call(slice.call, slice, [arguments]).join(",")]);
  }
  function v17() {
    return JAM.call(this.eq, this, [-1]);
  }
  function v16() {
    return JAM.call(this.eq, this, [0]);
  }
  function v15(i$$5) {
    var v2287;
    if (i$$5 === -1) {
      v2287 = JAM.call(this.slice, this, [i$$5]);
    } else {
      v2287 = JAM.call(this.slice, this, [i$$5, +i$$5 + 1]);
    }
    return v2287;
  }
  function v14(fn$$1) {
    jQuery$$1.bindReady();
    if (jQuery$$1.isReady) {
      JAM.call(fn$$1.call, fn$$1, [document$$1, jQuery$$1]);
    } else {
      if (readyList) {
        JAM.call(readyList.push, readyList, [fn$$1]);
      }
    }
    return this;
  }
  function v13(callback$$25, args$$3) {
    return JAM.call(jQuery$$1.each, jQuery$$1, [this, callback$$25, args$$3]);
  }
  function v12(elems$$2, name$$30, selector$$3) {
    var ret$$2 = jQuery$$1();
    if (JAM.call(jQuery$$1.isArray, jQuery$$1, [elems$$2])) {
      JAM.call(push.apply, push, [ret$$2, elems$$2]);
    } else {
      JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$2, elems$$2]);
    }
    ret$$2.prevObject = this;
    ret$$2.context = this.context;
    if (name$$30 === "find") {
      var v3704 = this.selector;
      var v4637;
      if (this.selector) {
        v4637 = " ";
      } else {
        v4637 = "";
      }
      ret$$2.selector = v3704 + v4637 + selector$$3;
    } else {
      if (name$$30) {
        ret$$2.selector = this.selector + "." + name$$30 + "(" + selector$$3 + ")";
      }
    }
    return ret$$2;
  }
  function v11(num$$5) {
    var v2293;
    if (num$$5 == null) {
      v2293 = this.toArray();
    } else {
      var v3707;
      if (num$$5 < 0) {
        var v4639 = JAM.call(this.slice, this, [num$$5]);
        introspect(JAM.policy.p4) {
          v3707 = v4639[0];
        }
      } else {
        introspect(JAM.policy.p4) {
          v3707 = this[num$$5];
        }
      }
      v2293 = v3707;
    }
    return v2293;
  }
  function v10() {
    return JAM.call(slice.call, slice, [this, 0]);
  }
  function v9() {
    return this.length;
  }
  function v8(selector$$2, context$$1) {
    var match$$1;
    var elem$$5;
    var ret$$1;
    var doc$$1;
    if (!selector$$2) {
      return this;
    }
    if (selector$$2.nodeType) {
      introspect(JAM.policy.p3) {
        this.context = this[0] = selector$$2;
      }
      this.length = 1;
      return this;
    }
    var v3709 = selector$$2 === "body";
    if (v3709) {
      v3709 = !context$$1;
    }
    if (v3709) {
      this.context = document$$1;
      introspect(JAM.policy.p3) {
        this[0] = document$$1.body;
      }
      this.selector = "body";
      this.length = 1;
      return this;
    }
    if (typeof selector$$2 === "string") {
      match$$1 = quickExpr.exec(selector$$2);
      var v3711 = match$$1;
      if (v3711) {
        introspect(JAM.policy.p4) {
          var v4641 = match$$1[1]
        }
        if (!v4641) {
          v4641 = !context$$1;
        }
        v3711 = v4641;
      }
      if (v3711) {
        introspect(JAM.policy.p4) {
          var v2307 = match$$1[1]
        }
        if (v2307) {
          var v2297;
          if (context$$1) {
            var v3712 = context$$1.ownerDocument;
            if (!v3712) {
              v3712 = context$$1;
            }
            v2297 = v3712;
          } else {
            v2297 = document$$1;
          }
          doc$$1 = v2297;
          ret$$1 = rsingleTag.exec(selector$$2);
          if (ret$$1) {
            if (JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [context$$1])) {
              introspect(JAM.policy.p4) {
                var v3713 = ret$$1[1]
              }
              selector$$2 = [document$$1.createElement(v3713)];
              var v2299 = jQuery$$1.fn.attr;
              JAM.call(v2299.call, v2299, [selector$$2, context$$1, true]);
            } else {
              introspect(JAM.policy.p4) {
                var v3715 = ret$$1[1]
              }
              selector$$2 = [doc$$1.createElement(v3715)];
            }
          } else {
            introspect(JAM.policy.p4) {
              var v3716 = match$$1[1]
            }
            ret$$1 = buildFragment([v3716], [doc$$1]);
            var v3717;
            if (ret$$1.cacheable) {
              v3717 = ret$$1.fragment.cloneNode(true);
            } else {
              v3717 = ret$$1.fragment;
            }
            selector$$2 = v3717.childNodes;
          }
          return JAM.call(jQuery$$1.merge, jQuery$$1, [this, selector$$2]);
        } else {
          introspect(JAM.policy.p4) {
            var v2305 = match$$1[2]
          }
          elem$$5 = document$$1.getElementById(v2305);
          if (elem$$5) {
            var v3718 = elem$$5.id;
            introspect(JAM.policy.p4) {
              var v3719 = match$$1[2]
            }
            if (v3718 !== v3719) {
              return JAM.call(rootjQuery.find, rootjQuery, [selector$$2]);
            }
            this.length = 1;
            introspect(JAM.policy.p3) {
              this[0] = elem$$5;
            }
          }
          this.context = document$$1;
          this.selector = selector$$2;
          return this;
        }
      } else {
        var v3720 = !context$$1;
        if (v3720) {
          v3720 = /^\w+$/.test(selector$$2);
        }
        if (v3720) {
          this.selector = selector$$2;
          this.context = document$$1;
          selector$$2 = document$$1.getElementsByTagName(selector$$2);
          return JAM.call(jQuery$$1.merge, jQuery$$1, [this, selector$$2]);
        } else {
          var v3721 = !context$$1;
          if (!v3721) {
            v3721 = context$$1.jquery;
          }
          if (v3721) {
            var v2308 = context$$1 || rootjQuery;
            return JAM.call(v2308.find, v2308, [selector$$2]);
          } else {
            var v2309 = jQuery$$1(context$$1);
            return JAM.call(v2309.find, v2309, [selector$$2]);
          }
        }
      }
    } else {
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [selector$$2])) {
        return JAM.call(rootjQuery.ready, rootjQuery, [selector$$2]);
      }
    }
    if (selector$$2.selector !== undefined$$1) {
      this.selector = selector$$2.selector;
      this.context = selector$$2.context;
    }
    return JAM.call(jQuery$$1.makeArray, jQuery$$1, [selector$$2, this]);
  }
  function fcamelCase(all$$6, letter) {
    return letter.toUpperCase();
  }
  function fcloseTag(all$$5, front, tag) {
    var v2316;
    if (rselfClosing.test(tag)) {
      v2316 = all$$5;
    } else {
      v2316 = front + "></" + tag + ">";
    }
    return v2316;
  }
  function winnow(elements, qualifier, keep) {
    function v4(elem$$79, i$$61) {
      return JAM.call(jQuery$$1.inArray, jQuery$$1, [elem$$79, qualifier]) >= 0 === keep;
    }
    function v3(elem$$78) {
      return elem$$78.nodeType === 1;
    }
    function v2(elem$$77, i$$60) {
      return elem$$77 === qualifier === keep;
    }
    function v1(elem$$76, i$$59) {
      return!!JAM.call(qualifier.call, qualifier, [elem$$76, i$$59, elem$$76]) === keep;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [qualifier])) {
      return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v1]);
    } else {
      if (qualifier.nodeType) {
        return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v2]);
      } else {
        if (typeof qualifier === "string") {
          var filtered = JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v3]);
          if (isSimple.test(qualifier)) {
            return JAM.call(jQuery$$1.filter, jQuery$$1, [qualifier, filtered, !keep]);
          } else {
            qualifier = JAM.call(jQuery$$1.filter, jQuery$$1, [qualifier, filtered]);
          }
        }
      }
    }
    return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v4]);
  }
  function delegate(event$$6) {
    event$$6.type = event$$6.data;
    var v2326 = jQuery$$1.event.handle;
    JAM.call(v2326.apply, v2326, [this, arguments]);
    return;
  }
  function withinElement(event$$5) {
    var parent$$2 = event$$5.relatedTarget;
    try {
      var v3729 = parent$$2;
      if (v3729) {
        v3729 = parent$$2 !== this;
      }
      var v2327 = v3729;
      for (;v2327;) {
        parent$$2 = parent$$2.parentNode;
        var v3730 = parent$$2;
        if (v3730) {
          v3730 = parent$$2 !== this;
        }
        v2327 = v3730;
      }
      if (parent$$2 !== this) {
        event$$5.type = event$$5.data;
        var v2328 = jQuery$$1.event.handle;
        JAM.call(v2328.apply, v2328, [this, arguments]);
      }
    } catch (e$$11) {
    }
    return;
  }
  function fcleanup(nm) {
    function v5(ch) {
      return "\\" + ch;
    }
    return nm.replace(/[^\w\s\.\|`]/g, v5);
  }
  function jQuery$$1(selector$$1, context) {
    return JAM.new(jQuery$$1.fn.init, [selector$$1, context]);
  }
  function doScrollCheck() {
    if (jQuery$$1.isReady) {
      return;
    }
    try {
      var v2332 = document$$1.documentElement;
      JAM.call(v2332.doScroll, v2332, ["left"]);
    } catch (error$$1) {
      JAM.call(setTimeout, null, [doScrollCheck, 1]);
      return;
    }
    jQuery$$1.ready();
    return;
  }
  function evalScript(i$$1, elem$$1) {
    if (elem$$1.src) {
      JAM.call(jQuery$$1.ajax, jQuery$$1, [{url:elem$$1.src, async:false, dataType:"script"}]);
    } else {
      var v5144 = elem$$1.text;
      if (!v5144) {
        v5144 = elem$$1.textContent;
      }
      var v4648 = v5144;
      if (!v4648) {
        v4648 = elem$$1.innerHTML;
      }
      var v3734 = v4648;
      if (!v3734) {
        v3734 = "";
      }
      JAM.call(jQuery$$1.globalEval, jQuery$$1, [v3734]);
    }
    if (elem$$1.parentNode) {
      elem$$1.parentNode.removeChild(elem$$1);
    }
    return;
  }
  function access(elems, key$$14, value$$27, exec, fn, pass) {
    var length$$11 = elems.length;
    if (typeof key$$14 === "object") {
      var k;
      for (k in key$$14) {
        introspect(JAM.policy.p4) {
          var v2338 = key$$14[k]
        }
        access(elems, k, v2338, exec, fn, value$$27);
      }
      return elems;
    }
    if (value$$27 !== undefined$$1) {
      var v3736 = !pass;
      if (v3736) {
        v3736 = exec;
      }
      var v2340 = v3736;
      if (v2340) {
        v2340 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$27]);
      }
      exec = v2340;
      var i$$2 = 0;
      var v2343 = i$$2 < length$$11;
      for (;v2343;) {
        introspect(JAM.policy.p4) {
          var v2341 = elems[i$$2]
        }
        var v3737;
        if (exec) {
          introspect(JAM.policy.p4) {
            var v4650 = elems[i$$2]
          }
          introspect(JAM.policy.p4) {
            var v5146 = elems[i$$2]
          }
          v3737 = JAM.call(value$$27.call, value$$27, [v4650, i$$2, JAM.call(fn, null, [v5146, key$$14])]);
        } else {
          v3737 = value$$27;
        }
        JAM.call(fn, null, [v2341, key$$14, v3737, pass]);
        i$$2 = i$$2 + 1;
        v2343 = i$$2 < length$$11;
      }
      return elems;
    }
    var v2345;
    if (length$$11) {
      introspect(JAM.policy.p4) {
        var v3738 = elems[0]
      }
      v2345 = JAM.call(fn, null, [v3738, key$$14]);
    } else {
      v2345 = undefined$$1;
    }
    return v2345;
  }
  function now() {
    return(new Date).getTime();
  }
  function returnFalse() {
    return false;
  }
  function returnTrue() {
    return true;
  }
  function trigger(type$$25, elem$$2, args) {
    introspect(JAM.policy.p4) {
      var v2347 = args[0]
    }
    v2347.type = type$$25;
    var v2348 = jQuery$$1.event.handle;
    return JAM.call(v2348.apply, v2348, [elem$$2, args]);
  }
  function liveHandler(event$$1) {
    var stop;
    var elems$$1 = [];
    var selectors$$7 = [];
    var args$$1 = arguments;
    var related;
    var match;
    var handleObj;
    var elem$$3;
    var j;
    var i$$3;
    var l;
    var data$$18;
    var events = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]);
    var v5147 = event$$1.liveFired === this;
    if (!v5147) {
      v5147 = !events;
    }
    var v4652 = v5147;
    if (!v4652) {
      v4652 = !events.live;
    }
    var v3740 = v4652;
    if (!v3740) {
      var v4653 = event$$1.button;
      if (v4653) {
        v4653 = event$$1.type === "click";
      }
      v3740 = v4653;
    }
    if (v3740) {
      return;
    }
    event$$1.liveFired = this;
    var v2350 = events.live;
    var live = JAM.call(v2350.slice, v2350, [0]);
    j = 0;
    var v2354 = j < live.length;
    for (;v2354;) {
      introspect(JAM.policy.p4) {
        handleObj = live[j];
      }
      if (handleObj.origType.replace(rnamespaces, "") === event$$1.type) {
        JAM.call(selectors$$7.push, selectors$$7, [handleObj.selector]);
      } else {
        var v2352 = j;
        j = j - 1;
        JAM.call(live.splice, live, [v2352, 1]);
      }
      j = j + 1;
      v2354 = j < live.length;
    }
    var v2355 = jQuery$$1(event$$1.target);
    match = JAM.call(v2355.closest, v2355, [selectors$$7, event$$1.currentTarget]);
    i$$3 = 0;
    l = match.length;
    var v2364 = i$$3 < l;
    for (;v2364;) {
      j = 0;
      var v2363 = j < live.length;
      for (;v2363;) {
        introspect(JAM.policy.p4) {
          handleObj = live[j];
        }
        introspect(JAM.policy.p4) {
          var v4656 = match[i$$3]
        }
        if (v4656.selector === handleObj.selector) {
          introspect(JAM.policy.p4) {
            var v2357 = match[i$$3]
          }
          elem$$3 = v2357.elem;
          related = null;
          var v3749 = handleObj.preType === "mouseenter";
          if (!v3749) {
            v3749 = handleObj.preType === "mouseleave";
          }
          if (v3749) {
            var v3750 = jQuery$$1(event$$1.relatedTarget);
            var v2358 = JAM.call(v3750.closest, v3750, [handleObj.selector]);
            introspect(JAM.policy.p4) {
              related = v2358[0];
            }
          }
          var v3752 = !related;
          if (!v3752) {
            v3752 = related !== elem$$3;
          }
          if (v3752) {
            JAM.call(elems$$1.push, elems$$1, [{elem:elem$$3, handleObj:handleObj}]);
          }
        }
        j = j + 1;
        v2363 = j < live.length;
      }
      i$$3 = i$$3 + 1;
      v2364 = i$$3 < l;
    }
    i$$3 = 0;
    l = elems$$1.length;
    var v2367 = i$$3 < l;
    for (;v2367;) {
      introspect(JAM.policy.p4) {
        match = elems$$1[i$$3];
      }
      event$$1.currentTarget = match.elem;
      event$$1.data = match.handleObj.data;
      event$$1.handleObj = match.handleObj;
      var v4662 = match.handleObj.origHandler;
      if (JAM.call(v4662.apply, v4662, [match.elem, args$$1]) === false) {
        stop = false;
        break;
      }
      i$$3 = i$$3 + 1;
      v2367 = i$$3 < l;
    }
    return stop;
  }
  function liveConvert(type$$26, selector) {
    var v4664;
    var v5394 = type$$26;
    if (v5394) {
      v5394 = type$$26 !== "*";
    }
    if (v5394) {
      v4664 = type$$26 + ".";
    } else {
      v4664 = "";
    }
    return "live." + v4664 + selector.replace(/\./g, "`").replace(/ /g, "&");
  }
  function isDisconnected(node$$2) {
    var v3757 = !node$$2;
    if (!v3757) {
      v3757 = !node$$2.parentNode;
    }
    var v2370 = v3757;
    if (!v2370) {
      v2370 = node$$2.parentNode.nodeType === 11;
    }
    return v2370;
  }
  function cloneCopyEvent(orig, ret) {
    function v6() {
      var v3760 = this.nodeName;
      introspect(JAM.policy.p4) {
        var v4668 = orig[i$$4]
      }
      if (v4668) {
        introspect(JAM.policy.p4) {
          var v5153 = orig[i$$4]
        }
        v4668 = v5153.nodeName;
      }
      if (v3760 !== v4668) {
        return;
      }
      var v3762 = i$$4;
      i$$4 = i$$4 + 1;
      introspect(JAM.policy.p4) {
        var v2372 = orig[v3762]
      }
      var oldData = JAM.call(jQuery$$1.data, jQuery$$1, [v2372]);
      var curData = JAM.call(jQuery$$1.data, jQuery$$1, [this, oldData]);
      var v2373 = oldData;
      if (v2373) {
        v2373 = oldData.events;
      }
      var events$$1 = v2373;
      if (events$$1) {
        delete curData.handle;
        curData.events = {};
        var type$$27;
        for (type$$27 in events$$1) {
          var handler$$3;
          introspect(JAM.policy.p4) {
            var v2377 = events$$1[type$$27]
          }
          for (handler$$3 in v2377) {
            var v2374 = jQuery$$1.event;
            introspect(JAM.policy.p4) {
              var v3763 = events$$1[type$$27]
            }
            introspect(JAM.policy.p4) {
              var v2375 = v3763[handler$$3]
            }
            introspect(JAM.policy.p4) {
              var v4669 = events$$1[type$$27]
            }
            introspect(JAM.policy.p4) {
              var v3764 = v4669[handler$$3]
            }
            JAM.call(v2374.add, v2374, [this, type$$27, v2375, v3764.data]);
          }
        }
      }
      return;
    }
    var i$$4 = 0;
    JAM.call(ret.each, ret, [v6]);
    return;
  }
  function buildFragment(args$$2, nodes, scripts) {
    var fragment;
    var cacheable;
    var cacheresults;
    var v2378;
    var v4670 = nodes;
    if (v4670) {
      introspect(JAM.policy.p4) {
        v4670 = nodes[0];
      }
    }
    if (v4670) {
      introspect(JAM.policy.p4) {
        var v4671 = nodes[0]
      }
      var v3765 = v4671.ownerDocument;
      if (!v3765) {
        introspect(JAM.policy.p4) {
          v3765 = nodes[0];
        }
      }
      v2378 = v3765;
    } else {
      v2378 = document$$1;
    }
    var doc = v2378;
    var v5479 = args$$2.length === 1;
    if (v5479) {
      introspect(JAM.policy.p4) {
        var v5521 = args$$2[0]
      }
      v5479 = typeof v5521 === "string";
    }
    var v5395 = v5479;
    if (v5395) {
      introspect(JAM.policy.p4) {
        var v5509 = args$$2[0]
      }
      v5395 = v5509.length < 512;
    }
    var v5154 = v5395;
    if (v5154) {
      v5154 = doc === document$$1;
    }
    var v4673 = v5154;
    if (v4673) {
      introspect(JAM.policy.p4) {
        var v5396 = args$$2[0]
      }
      v4673 = !rnocache.test(v5396);
    }
    var v3767 = v4673;
    if (v3767) {
      var v4674 = jQuery$$1.support.checkClone;
      if (!v4674) {
        introspect(JAM.policy.p4) {
          var v5397 = args$$2[0]
        }
        v4674 = !rchecked.test(v5397);
      }
      v3767 = v4674;
    }
    if (v3767) {
      cacheable = true;
      var v2379 = jQuery$$1.fragments;
      introspect(JAM.policy.p4) {
        var v2380 = args$$2[0]
      }
      introspect(JAM.policy.p4) {
        cacheresults = v2379[v2380];
      }
      if (cacheresults) {
        if (cacheresults !== 1) {
          fragment = cacheresults;
        }
      }
    }
    if (!fragment) {
      fragment = doc.createDocumentFragment();
      JAM.call(jQuery$$1.clean, jQuery$$1, [args$$2, doc, fragment, scripts]);
    }
    if (cacheable) {
      var v2384 = jQuery$$1.fragments;
      introspect(JAM.policy.p4) {
        var v2385 = args$$2[0]
      }
      var v3768;
      if (cacheresults) {
        v3768 = fragment;
      } else {
        v3768 = 1;
      }
      JAM.set(v2384, v2385, v3768, JAM.policy.p3);
    }
    return{fragment:fragment, cacheable:cacheable};
  }
  function genFx(type$$28, num$$4) {
    function v7() {
      JAM.set(obj$$16, this, type$$28, JAM.policy.p3);
      return;
    }
    var obj$$16 = {};
    var v3769 = fxAttrs.concat;
    JAM.call(jQuery$$1.each, jQuery$$1, [JAM.call(v3769.apply, v3769, [[], JAM.call(fxAttrs.slice, fxAttrs, [0, num$$4])]), v7]);
    return obj$$16;
  }
  function getWindow(elem$$4) {
    var v2387;
    var v4675 = "scrollTo" in elem$$4;
    if (v4675) {
      v4675 = elem$$4.document;
    }
    if (v4675) {
      v2387 = elem$$4;
    } else {
      var v3771;
      if (elem$$4.nodeType === 9) {
        var v4676 = elem$$4.defaultView;
        if (!v4676) {
          v4676 = elem$$4.parentWindow;
        }
        v3771 = v4676;
      } else {
        v3771 = false;
      }
      v2387 = v3771;
    }
    return v2387;
  }
  var _jQuery = window$$1.jQuery;
  var _$ = window$$1.$;
  var document$$1 = window$$1.document;
  var rootjQuery;
  var quickExpr = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/;
  var isSimple = /^.[^:#\[\.,]*$/;
  var rnotwhite = /\S/;
  var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
  var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  var userAgent = navigator.userAgent;
  var browserMatch;
  var readyBound = false;
  var readyList = [];
  var DOMContentLoaded;
  var toString = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var push = Array.prototype.push;
  var slice = Array.prototype.slice;
  var indexOf = Array.prototype.indexOf;
  jQuery$$1.fn = jQuery$$1.prototype = {init:v8, selector:"", jquery:"1.4.2", length:0, size:v9, toArray:v10, get:v11, pushStack:v12, each:v13, ready:v14, eq:v15, first:v16, last:v17, slice:v18, map:v20, end:v21, push:push, sort:[].sort, splice:[].splice};
  jQuery$$1.fn.init.prototype = jQuery$$1.fn;
  jQuery$$1.extend = jQuery$$1.fn.extend = v22;
  JAM.call(jQuery$$1.extend, jQuery$$1, [{noConflict:v23, isReady:false, ready:v24, bindReady:v25, isFunction:v26, isArray:v27, isPlainObject:v28, isEmptyObject:v29, error:v30, parseJSON:v31, noop:v32, globalEval:v33, nodeName:v34, each:v35, trim:v36, makeArray:v37, inArray:v38, merge:v39, grep:v40, map:v41, guid:1, proxy:v43, uaMatch:v44, browser:{}}]);
  browserMatch = JAM.call(jQuery$$1.uaMatch, jQuery$$1, [userAgent]);
  if (browserMatch.browser) {
    JAM.set(jQuery$$1.browser, browserMatch.browser, true, JAM.policy.p3);
    jQuery$$1.browser.version = browserMatch.version;
  }
  if (jQuery$$1.browser.webkit) {
    jQuery$$1.browser.safari = true;
  }
  if (indexOf) {
    jQuery$$1.inArray = v45;
  }
  rootjQuery = jQuery$$1(document$$1);
  if (document$$1.addEventListener) {
    DOMContentLoaded = v46;
  } else {
    if (document$$1.attachEvent) {
      DOMContentLoaded = v47;
    }
  }
  v49();
  jQuery$$1.props = {"for":"htmlFor", "class":"className", readonly:"readOnly", maxlength:"maxLength", cellspacing:"cellSpacing", rowspan:"rowSpan", colspan:"colSpan", tabindex:"tabIndex", usemap:"useMap", frameborder:"frameBorder"};
  var expando = "jQuery" + now();
  var uuid = 0;
  var windowData = {};
  JAM.call(jQuery$$1.extend, jQuery$$1, [{cache:{}, expando:expando, noData:{"embed":true, "object":true, "applet":true}, data:v50, removeData:v51}]);
  var v2408 = jQuery$$1.fn;
  JAM.call(v2408.extend, v2408, [{data:v54, removeData:v56}]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{queue:v57, dequeue:v59}]);
  var v2411 = jQuery$$1.fn;
  JAM.call(v2411.extend, v2411, [{queue:v61, dequeue:v63, delay:v66, clearQueue:v67}]);
  var rclass = /[\n\t]/g;
  var rspace = /\s+/;
  var rreturn = /\r/g;
  var rspecialurl = /href|src|style/;
  var rtype = /(button|input)/i;
  var rfocusable = /(button|input|object|select|textarea)/i;
  var rclickable = /^(a|area)$/i;
  var rradiocheck = /radio|checkbox/;
  var v2413 = jQuery$$1.fn;
  JAM.call(v2413.extend, v2413, [{attr:v68, removeAttr:v70, addClass:v72, removeClass:v74, toggleClass:v77, hasClass:v78, val:v81}]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{attrFn:{val:true, css:true, html:true, text:true, data:true, width:true, height:true, offset:true}, attr:v82}]);
  var rnamespaces = /\.(.*)$/;
  jQuery$$1.event = {add:v84, global:{}, remove:v85, trigger:v87, handle:v88, props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix:v89, guid:1E8, proxy:jQuery$$1.proxy, special:{ready:{setup:jQuery$$1.bindReady, 
  teardown:jQuery$$1.noop}, live:{add:v90, remove:v92}, beforeunload:{setup:v93, teardown:v94}}};
  var v2417;
  if (document$$1.removeEventListener) {
    v2417 = v95;
  } else {
    v2417 = v96;
  }
  var removeEvent = v2417;
  jQuery$$1.Event = v97;
  jQuery$$1.Event.prototype = {preventDefault:v98, stopPropagation:v99, stopImmediatePropagation:v100, isDefaultPrevented:returnFalse, isPropagationStopped:returnFalse, isImmediatePropagationStopped:returnFalse};
  JAM.call(jQuery$$1.each, jQuery$$1, [{mouseenter:"mouseover", mouseleave:"mouseout"}, v103]);
  if (!jQuery$$1.support.submitBubbles) {
    jQuery$$1.event.special.submit = {setup:v106, teardown:v107};
  }
  if (!jQuery$$1.support.changeBubbles) {
    var formElems = /textarea|input|select/i;
    var changeFilters;
    var getVal = v109;
    var testChange = testChange$$1;
    jQuery$$1.event.special.change = {filters:{focusout:testChange, click:v110, keydown:v111, beforeactivate:v112}, setup:v113, teardown:v114};
    changeFilters = jQuery$$1.event.special.change.filters;
  }
  if (document$$1.addEventListener) {
    JAM.call(jQuery$$1.each, jQuery$$1, [{focus:"focusin", blur:"focusout"}, v117]);
  }
  JAM.call(jQuery$$1.each, jQuery$$1, [["bind", "one"], v120]);
  var v2428 = jQuery$$1.fn;
  JAM.call(v2428.extend, v2428, [{unbind:v121, delegate:v122, undelegate:v123, trigger:v125, triggerHandler:v126, toggle:v128, hover:v129}]);
  var liveMap = {focus:"focusin", blur:"focusout", mouseenter:"mouseover", mouseleave:"mouseout"};
  JAM.call(jQuery$$1.each, jQuery$$1, [["live", "die"], v132]);
  JAM.call(jQuery$$1.each, jQuery$$1, [("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error").split(" "), v134]);
  var v3788 = window$$1.attachEvent;
  if (v3788) {
    v3788 = !window$$1.addEventListener;
  }
  if (v3788) {
    JAM.call(window$$1.attachEvent, window$$1, ["onunload", v135]);
  }
  v207();
  var runtil = /Until$/;
  var rparentsprev = /^(?:parents|prevUntil|prevAll)/;
  var rmultiselector = /,/;
  slice = Array.prototype.slice;
  var v2434 = jQuery$$1.fn;
  JAM.call(v2434.extend, v2434, [{find:v208, has:v210, not:v211, filter:v212, is:v213, closest:v215, index:v216, add:v217, andSelf:v218}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [{parent:v219, parents:v220, parentsUntil:v221, next:v222, prev:v223, nextAll:v224, prevAll:v225, nextUntil:v226, prevUntil:v227, siblings:v228, children:v229, contents:v230}, v232]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{filter:v233, dir:v234, nth:v235, sibling:v236}]);
  var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g;
  var rleadingWhitespace = /^\s+/;
  var rxhtmlTag = /(<([\w:]+)[^>]*?)\/>/g;
  var rselfClosing = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i;
  var rtagName = /<([\w:]+)/;
  var rtbody = /<tbody/i;
  var rhtml = /<|&#?\w+;/;
  var rnocache = /<script|<object|<embed|<option|<style/i;
  var rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var wrapMap = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]};
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  if (!jQuery$$1.support.htmlSerialize) {
    wrapMap._default = [1, "div<div>", "</div>"];
  }
  var v2447 = jQuery$$1.fn;
  JAM.call(v2447.extend, v2447, [{text:v238, wrapAll:v241, wrapInner:v244, wrap:v246, unwrap:v248, append:v250, prepend:v252, before:v254, after:v256, remove:v257, empty:v258, clone:v260, html:v263, replaceWith:v266, detach:v267, domManip:v270}]);
  jQuery$$1.fragments = {};
  JAM.call(jQuery$$1.each, jQuery$$1, [{appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, v272]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{clean:v273, cleanData:v274}]);
  var rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i;
  var ralpha = /alpha\([^)]*\)/;
  var ropacity = /opacity=([^)]*)/;
  var rfloat = /float/i;
  var rdashAlpha = /-([a-z])/ig;
  var rupper = /([A-Z])/g;
  var rnumpx = /^-?\d+(?:px)?$/i;
  var rnum = /^-?\d/;
  var cssShow = {position:"absolute", visibility:"hidden", display:"block"};
  var cssWidth = ["Left", "Right"];
  var cssHeight = ["Top", "Bottom"];
  var v2451 = document$$1.defaultView;
  if (v2451) {
    v2451 = document$$1.defaultView.getComputedStyle;
  }
  var getComputedStyle = v2451;
  var v2452;
  if (jQuery$$1.support.cssFloat) {
    v2452 = "cssFloat";
  } else {
    v2452 = "styleFloat";
  }
  var styleFloat = v2452;
  jQuery$$1.fn.css = v276;
  JAM.call(jQuery$$1.extend, jQuery$$1, [{style:v277, css:v280, curCSS:v281, swap:v282}]);
  var v3792 = jQuery$$1.expr;
  if (v3792) {
    v3792 = jQuery$$1.expr.filters;
  }
  if (v3792) {
    jQuery$$1.expr.filters.hidden = v283;
    jQuery$$1.expr.filters.visible = v284;
  }
  var jsc = now();
  var rscript = /<script(.|\s)*?\/script>/gi;
  var rselectTextarea = /select|textarea/i;
  var rinput = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i;
  var jsre = /=\?(&|$)/;
  var rquery = /\?/;
  var rts = /(\?|&)_=.*?(&|$)/;
  var rurl = /^(\w+:)?\/\/([^\/?#]+)/;
  var r20 = /%20/g;
  var _load = jQuery$$1.fn.load;
  var v2459 = jQuery$$1.fn;
  JAM.call(v2459.extend, v2459, [{load:v286, serialize:v287, serializeArray:v292}]);
  JAM.call(jQuery$$1.each, jQuery$$1, ["ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), v294]);
  var v4689 = location.href;
  var v5163;
  var v5481 = window$$1.XMLHttpRequest;
  if (v5481) {
    var v5510 = window$$1.location.protocol !== "file:";
    if (!v5510) {
      v5510 = !window$$1.ActiveXObject;
    }
    v5481 = v5510;
  }
  if (v5481) {
    v5163 = v300;
  } else {
    v5163 = v301;
  }
  JAM.call(jQuery$$1.extend, jQuery$$1, [{get:v295, getScript:v296, getJSON:v297, post:v298, ajaxSetup:v299, ajaxSettings:{url:v4689, global:true, type:"GET", contentType:"application/x-www-form-urlencoded", processData:true, async:true, xhr:v5163, accepts:{xml:"application/xml, text/xml", html:"text/html", script:"text/javascript, application/javascript", json:"application/json, text/javascript", text:"text/plain", _default:"*/*"}}, lastModified:{}, etag:{}, ajax:v307, handleError:v308, active:0, 
  httpSuccess:v309, httpNotModified:v310, httpData:v311, param:v315}]);
  var elemdisplay = {};
  var rfxtypes = /toggle|show|hide/;
  var rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/;
  var timerId;
  var fxAttrs = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
  var v2466 = jQuery$$1.fn;
  JAM.call(v2466.extend, v2466, [{show:v316, hide:v317, _toggle:jQuery$$1.fn.toggle, toggle:v319, fadeTo:v320, animate:v323, stop:v325}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [{slideDown:genFx("show", 1), slideUp:genFx("hide", 1), slideToggle:genFx("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}}, v327]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{speed:v329, easing:{linear:v330, swing:v331}, timers:[], fx:v332}]);
  jQuery$$1.fx.prototype = {update:v333, cur:v334, custom:v335, show:v336, hide:v337, step:v338};
  JAM.call(jQuery$$1.extend, jQuery$$1, [jQuery$$1.fx, {tick:v339, stop:v340, speeds:{slow:600, fast:200, _default:400}, step:{opacity:v341, _default:v342}}]);
  var v3805 = jQuery$$1.expr;
  if (v3805) {
    v3805 = jQuery$$1.expr.filters;
  }
  if (v3805) {
    jQuery$$1.expr.filters.animated = v344;
  }
  if ("getBoundingClientRect" in document$$1.documentElement) {
    jQuery$$1.fn.offset = v346;
  } else {
    jQuery$$1.fn.offset = v348;
  }
  jQuery$$1.offset = {initialize:v349, bodyOffset:v350, setOffset:v351};
  var v2478 = jQuery$$1.fn;
  JAM.call(v2478.extend, v2478, [{position:v352, offsetParent:v354}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [["Left", "Top"], v357]);
  JAM.call(jQuery$$1.each, jQuery$$1, [["Height", "Width"], v362]);
  window$$1.jQuery = window$$1.$ = jQuery$$1;
  return;
}
function hexFromRGB(r$$3, g, b$$5) {
  function v0(nr, val$$11) {
    if (val$$11.length == 1) {
      JAM.set(hex, nr, "0" + val$$11, JAM.policy.p3);
    }
    return;
  }
  var hex = [r$$3.toString(16), g.toString(16), b$$5.toString(16)];
  JAM.call($.each, $, [hex, v0]);
  return hex.join("").toUpperCase();
}
function refreshSwatch() {
  var v2487 = JAM.call($, null, ["#red"]);
  var red$$3 = JAM.call(v2487.slider, v2487, ["value"]);
  var v2488 = JAM.call($, null, ["#green"]);
  var green$$3 = JAM.call(v2488.slider, v2488, ["value"]);
  var v2489 = JAM.call($, null, ["#blue"]);
  var blue$$3 = JAM.call(v2489.slider, v2489, ["value"]);
  var hex$$1 = hexFromRGB(red$$3, green$$3, blue$$3);
  var v2490 = JAM.call($, null, ["#swatch"]);
  JAM.call(v2490.css, v2490, ["background-color", "#" + hex$$1]);
  return;
}
v363(window);
v396(jQuery);
v434(jQuery);
v452(jQuery);
v484(jQuery);
$ = window.$;
JAM.call($, null, [v485])

