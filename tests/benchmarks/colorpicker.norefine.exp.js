function v485() {
  var v486 = JAM.call($, null, ["#red, #green, #blue"]);
  JAM.call(v486.slider, v486, [{orientation:"horizontal", range:"min", max:255, value:127, slide:refreshSwatch, change:refreshSwatch}]);
  var v488 = JAM.call($, null, ["#red"]);
  JAM.call(v488.slider, v488, ["value", 255]);
  var v489 = JAM.call($, null, ["#green"]);
  JAM.call(v489.slider, v489, ["value", 140]);
  var v490 = JAM.call($, null, ["#blue"]);
  JAM.call(v490.slider, v490, ["value", 60]);
  return
}
function v484($$$4, undefined$$5) {
  function v483(event$$35) {
    var v491 = JAM.call($$$4, null, [event$$35.target]);
    var index$$48 = JAM.call(v491.data, v491, ["ui-slider-handle-index"]);
    if(this._keySliding) {
      this._keySliding = false;
      JAM.call(this._stop, this, [event$$35, index$$48]);
      JAM.call(this._change, this, [event$$35, index$$48]);
      var v492 = JAM.call($$$4, null, [event$$35.target]);
      JAM.call(v492.removeClass, v492, ["ui-state-active"])
    }
    return
  }
  function v482(event$$34) {
    event$$34.preventDefault();
    return
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
        if(!this._keySliding) {
          this._keySliding = true;
          var v495 = JAM.call($$$4, null, [event$$33.target]);
          JAM.call(v495.addClass, v495, ["ui-state-active"]);
          allowed$$2 = JAM.call(this._start, this, [event$$33, index$$47]);
          if(allowed$$2 === false) {
            return
          }
        }
    }
    step$$1 = this.options.step;
    var v2495 = this.options.values;
    if(v2495) {
      v2495 = this.options.values.length
    }
    if(v2495) {
      curVal = newVal$$1 = JAM.call(this.values, this, [index$$47])
    }else {
      curVal = newVal$$1 = this.value()
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
        if(curVal === this.options.max) {
          return
        }
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal + step$$1]);
        break;
      case $$$4.ui.keyCode.DOWN:
      ;
      case $$$4.ui.keyCode.LEFT:
        if(curVal === this.options.min) {
          return
        }
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal - step$$1])
    }
    JAM.call(this._slide, this, [event$$33, index$$47, newVal$$1]);
    return
  }
  function v480() {
    function v479(i$$110) {
      valPercent = (JAM.call(that$$3.values, that$$3, [i$$110]) - that$$3.options.min) / (that$$3.options.max - that$$3.options.min) * 100;
      var v2502;
      if(that$$3.orientation === "horizontal") {
        v2502 = "left"
      }else {
        v2502 = "bottom"
      }
      JAM.set(_set, v2502, valPercent + "%", JAM.policy.p2);
      var v2503 = JAM.call($$$4, null, [this]);
      var v512 = JAM.call(v2503.stop, v2503, [1, 1]);
      var v2504;
      if(animate) {
        v2504 = "animate"
      }else {
        v2504 = "css"
      }
      JAM.call(JAM.get(v512, v2504, JAM.policy.p3), v512, [_set, o$$2.animate]);
      if(that$$3.options.range === true) {
        if(that$$3.orientation === "horizontal") {
          if(i$$110 === 0) {
            var v2507 = that$$3.range;
            var v515 = JAM.call(v2507.stop, v2507, [1, 1]);
            var v2508;
            if(animate) {
              v2508 = "animate"
            }else {
              v2508 = "css"
            }
            JAM.call(JAM.get(v515, v2508, JAM.policy.p3), v515, [{left:valPercent + "%"}, o$$2.animate])
          }
          if(i$$110 === 1) {
            var v520 = that$$3.range;
            var v2510;
            if(animate) {
              v2510 = "animate"
            }else {
              v2510 = "css"
            }
            JAM.call(JAM.get(v520, v2510, JAM.policy.p3), v520, [{width:valPercent - lastValPercent + "%"}, {queue:false, duration:o$$2.animate}])
          }
        }else {
          if(i$$110 === 0) {
            var v2513 = that$$3.range;
            var v525 = JAM.call(v2513.stop, v2513, [1, 1]);
            var v2514;
            if(animate) {
              v2514 = "animate"
            }else {
              v2514 = "css"
            }
            JAM.call(JAM.get(v525, v2514, JAM.policy.p3), v525, [{bottom:valPercent + "%"}, o$$2.animate])
          }
          if(i$$110 === 1) {
            var v530 = that$$3.range;
            var v2516;
            if(animate) {
              v2516 = "animate"
            }else {
              v2516 = "css"
            }
            JAM.call(JAM.get(v530, v2516, JAM.policy.p3), v530, [{height:valPercent - lastValPercent + "%"}, {queue:false, duration:o$$2.animate}])
          }
        }
      }
      lastValPercent = valPercent;
      return
    }
    var lastValPercent;
    var valPercent;
    var value$$53;
    var valueMin;
    var valueMax;
    var oRange = this.options.range;
    var o$$2 = this.options;
    var that$$3 = this;
    var v538;
    if(!this._animateOff) {
      v538 = o$$2.animate
    }else {
      v538 = false
    }
    var animate = v538;
    var _set = {};
    var v2520 = this.options.values;
    if(v2520) {
      v2520 = this.options.values.length
    }
    if(v2520) {
      var v539 = this.handles;
      JAM.call(v539.each, v539, [v479])
    }else {
      value$$53 = this.value();
      valueMin = this.options.min;
      valueMax = this.options.max;
      var v542;
      if(valueMax !== valueMin) {
        v542 = (value$$53 - valueMin) / (valueMax - valueMin) * 100
      }else {
        v542 = 0
      }
      valPercent = v542;
      var v2523;
      if(this.orientation === "horizontal") {
        v2523 = "left"
      }else {
        v2523 = "bottom"
      }
      JAM.set(_set, v2523, valPercent + "%", JAM.policy.p2);
      var v2524 = this.handle;
      var v544 = JAM.call(v2524.stop, v2524, [1, 1]);
      var v2525;
      if(animate) {
        v2525 = "animate"
      }else {
        v2525 = "css"
      }
      JAM.call(JAM.get(v544, v2525, JAM.policy.p3), v544, [_set, o$$2.animate]);
      var v2526 = oRange === "min";
      if(v2526) {
        v2526 = this.orientation === "horizontal"
      }
      if(v2526) {
        var v2527 = this.range;
        var v547 = JAM.call(v2527.stop, v2527, [1, 1]);
        var v2528;
        if(animate) {
          v2528 = "animate"
        }else {
          v2528 = "css"
        }
        JAM.call(JAM.get(v547, v2528, JAM.policy.p3), v547, [{width:valPercent + "%"}, o$$2.animate])
      }
      var v2530 = oRange === "max";
      if(v2530) {
        v2530 = this.orientation === "horizontal"
      }
      if(v2530) {
        var v552 = this.range;
        var v2531;
        if(animate) {
          v2531 = "animate"
        }else {
          v2531 = "css"
        }
        JAM.call(JAM.get(v552, v2531, JAM.policy.p3), v552, [{width:100 - valPercent + "%"}, {queue:false, duration:o$$2.animate}])
      }
      var v2534 = oRange === "min";
      if(v2534) {
        v2534 = this.orientation === "vertical"
      }
      if(v2534) {
        var v2535 = this.range;
        var v557 = JAM.call(v2535.stop, v2535, [1, 1]);
        var v2536;
        if(animate) {
          v2536 = "animate"
        }else {
          v2536 = "css"
        }
        JAM.call(JAM.get(v557, v2536, JAM.policy.p3), v557, [{height:valPercent + "%"}, o$$2.animate])
      }
      var v2538 = oRange === "max";
      if(v2538) {
        v2538 = this.orientation === "vertical"
      }
      if(v2538) {
        var v562 = this.range;
        var v2539;
        if(animate) {
          v2539 = "animate"
        }else {
          v2539 = "css"
        }
        JAM.call(JAM.get(v562, v2539, JAM.policy.p3), v562, [{height:100 - valPercent + "%"}, {queue:false, duration:o$$2.animate}])
      }
    }
    return
  }
  function v478() {
    return this.options.max
  }
  function v477() {
    return this.options.min
  }
  function v476(val$$10) {
    if(val$$10 <= this.options.min) {
      return this.options.min
    }
    if(val$$10 >= this.options.max) {
      return this.options.max
    }
    var v574;
    if(this.options.step > 0) {
      v574 = this.options.step
    }else {
      v574 = 1
    }
    var step = v574;
    var valModStep = (val$$10 - this.options.min) % step;
    var alignValue = val$$10 - valModStep;
    if(Math.abs(valModStep) * 2 >= step) {
      var v3831;
      if(valModStep > 0) {
        v3831 = step
      }else {
        v3831 = -step
      }
      alignValue = alignValue + v3831
    }
    return parseFloat(alignValue.toFixed(5))
  }
  function v475(index$$46) {
    var val$$9;
    var vals$$1;
    var i$$109;
    if(arguments.length) {
      var v578 = this.options.values;
      introspect(JAM.policy.p3) {
        val$$9 = v578[index$$46]
      }
      val$$9 = JAM.call(this._trimAlignValue, this, [val$$9]);
      return val$$9
    }else {
      var v2550 = this.options.values;
      if(v2550) {
        v2550 = this.options.values.length
      }
      if(v2550) {
        vals$$1 = this.options.values.slice();
        i$$109 = 0;
        var v582 = i$$109 < vals$$1.length;
        for(;v582;) {
          var v580 = vals$$1;
          var v581 = i$$109;
          introspect(JAM.policy.p3) {
            var v2553 = vals$$1[i$$109]
          }
          var v5553 = JAM.call(this._trimAlignValue, this, [v2553]);
          v580[v581] = v5553;
          i$$109 = i$$109 + 1;
          v582 = i$$109 < vals$$1.length
        }
        return vals$$1
      }else {
        return[]
      }
    }
    return
  }
  function v474() {
    var val$$8 = this.options.value;
    val$$8 = JAM.call(this._trimAlignValue, this, [val$$8]);
    return val$$8
  }
  function v473(key$$26, value$$52) {
    var i$$108;
    var valsLength = 0;
    var v2555 = key$$26 === "range";
    if(v2555) {
      v2555 = this.options.range === true
    }
    if(v2555) {
      if(value$$52 === "min") {
        var v586 = this.options;
        var v5554 = JAM.call(this._values, this, [0]);
        v586.value = v5554;
        this.options.values = null
      }else {
        if(value$$52 === "max") {
          var v588 = this.options;
          var v5555 = JAM.call(this._values, this, [this.options.values.length - 1]);
          v588.value = v5555;
          this.options.values = null
        }
      }
    }
    if(JAM.call($$$4.isArray, $$$4, [this.options.values])) {
      valsLength = this.options.values.length
    }
    var v595 = $$$4.Widget.prototype._setOption;
    JAM.call(v595.apply, v595, [this, arguments]);
    switch(key$$26) {
      case "orientation":
        this._detectOrientation();
        var v2560 = this.element;
        var v596 = JAM.call(v2560.removeClass, v2560, ["ui-slider-horizontal ui-slider-vertical"]);
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
        for(;v598;) {
          JAM.call(this._change, this, [null, i$$108]);
          i$$108 = i$$108 + 1;
          v598 = i$$108 < valsLength
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
        this._animateOff = false
    }
    return
  }
  function v472(index$$45, newValue$$1) {
    var vals;
    var newValues$$1;
    var i$$107;
    if(arguments.length > 1) {
      var v599 = this.options.values;
      var v600 = index$$45;
      var v5556 = JAM.call(this._trimAlignValue, this, [newValue$$1]);
      JAM.set(v599, v600, v5556, JAM.policy.p2);
      this._refreshValue();
      JAM.call(this._change, this, [null, index$$45]);
      return
    }
    if(arguments.length) {
      if(JAM.call($$$4.isArray, $$$4, [arguments[0]])) {
        vals = this.options.values;
        newValues$$1 = arguments[0];
        i$$107 = 0;
        var v605 = i$$107 < vals.length;
        for(;v605;) {
          var v603 = vals;
          var v604 = i$$107;
          introspect(JAM.policy.p3) {
            var v2566 = newValues$$1[i$$107]
          }
          var v5557 = JAM.call(this._trimAlignValue, this, [v2566]);
          v603[v604] = v5557;
          JAM.call(this._change, this, [null, i$$107]);
          i$$107 = i$$107 + 1;
          v605 = i$$107 < vals.length
        }
        this._refreshValue()
      }else {
        var v2568 = this.options.values;
        if(v2568) {
          v2568 = this.options.values.length
        }
        if(v2568) {
          return JAM.call(this._values, this, [index$$45])
        }else {
          return this.value()
        }
      }
    }else {
      return this._values()
    }
    return
  }
  function v471(newValue) {
    if(arguments.length) {
      var v609 = this.options;
      var v5558 = JAM.call(this._trimAlignValue, this, [newValue]);
      v609.value = v5558;
      this._refreshValue();
      JAM.call(this._change, this, [null, 0]);
      return
    }
    return this._value()
  }
  function v470(event$$32, index$$44) {
    var v2569 = !this._keySliding;
    if(v2569) {
      v2569 = !this._mouseSliding
    }
    if(v2569) {
      var v2570 = this.handles;
      introspect(JAM.policy.p3) {
        var v611 = v2570[index$$44]
      }
      var uiHash$$2 = {handle:v611, value:this.value()};
      var v2571 = this.options.values;
      if(v2571) {
        v2571 = this.options.values.length
      }
      if(v2571) {
        var v613 = uiHash$$2;
        var v5559 = JAM.call(this.values, this, [index$$44]);
        v613.value = v5559;
        var v614 = uiHash$$2;
        var v5560 = this.values();
        v614.values = v5560
      }
      this._lastChangedValue = index$$44;
      JAM.call(this._trigger, this, ["change", event$$32, uiHash$$2])
    }
    return
  }
  function v469(event$$31, index$$43) {
    var v2572 = this.handles;
    introspect(JAM.policy.p3) {
      var v617 = v2572[index$$43]
    }
    var uiHash$$1 = {handle:v617, value:this.value()};
    var v2573 = this.options.values;
    if(v2573) {
      v2573 = this.options.values.length
    }
    if(v2573) {
      var v619 = uiHash$$1;
      var v5561 = JAM.call(this.values, this, [index$$43]);
      v619.value = v5561;
      var v620 = uiHash$$1;
      var v5562 = this.values();
      v620.values = v5562
    }
    JAM.call(this._trigger, this, ["stop", event$$31, uiHash$$1]);
    return
  }
  function v468(event$$30, index$$42, newVal) {
    var otherVal;
    var newValues;
    var allowed$$1;
    var v2574 = this.options.values;
    if(v2574) {
      v2574 = this.options.values.length
    }
    if(v2574) {
      var v2575;
      if(index$$42) {
        v2575 = 0
      }else {
        v2575 = 1
      }
      otherVal = JAM.call(this.values, this, [v2575]);
      var v3848 = this.options.values.length === 2;
      if(v3848) {
        v3848 = this.options.range === true
      }
      var v2576 = v3848;
      if(v2576) {
        var v4688 = index$$42 === 0;
        if(v4688) {
          v4688 = newVal > otherVal
        }
        var v3849 = v4688;
        if(!v3849) {
          var v4689 = index$$42 === 1;
          if(v4689) {
            v4689 = newVal < otherVal
          }
          v3849 = v4689
        }
        v2576 = v3849
      }
      if(v2576) {
        newVal = otherVal
      }
      if(newVal !== JAM.call(this.values, this, [index$$42])) {
        newValues = this.values();
        JAM.set(newValues, index$$42, newVal, JAM.policy.p2);
        var v3850 = this.handles;
        introspect(JAM.policy.p3) {
          var v2579 = v3850[index$$42]
        }
        allowed$$1 = JAM.call(this._trigger, this, ["slide", event$$30, {handle:v2579, value:newVal, values:newValues}]);
        var v2580;
        if(index$$42) {
          v2580 = 0
        }else {
          v2580 = 1
        }
        otherVal = JAM.call(this.values, this, [v2580]);
        if(allowed$$1 !== false) {
          JAM.call(this.values, this, [index$$42, newVal, true])
        }
      }
    }else {
      if(newVal !== this.value()) {
        var v3851 = this.handles;
        introspect(JAM.policy.p3) {
          var v2583 = v3851[index$$42]
        }
        allowed$$1 = JAM.call(this._trigger, this, ["slide", event$$30, {handle:v2583, value:newVal}]);
        if(allowed$$1 !== false) {
          JAM.call(this.value, this, [newVal])
        }
      }
    }
    return
  }
  function v467(event$$29, index$$41) {
    var v2584 = this.handles;
    introspect(JAM.policy.p3) {
      var v632 = v2584[index$$41]
    }
    var uiHash = {handle:v632, value:this.value()};
    var v2585 = this.options.values;
    if(v2585) {
      v2585 = this.options.values.length
    }
    if(v2585) {
      var v634 = uiHash;
      var v5563 = JAM.call(this.values, this, [index$$41]);
      v634.value = v5563;
      var v635 = uiHash;
      var v5564 = this.values();
      v635.values = v5564
    }
    return JAM.call(this._trigger, this, ["start", event$$29, uiHash])
  }
  function v466(position$$3) {
    var pixelTotal;
    var pixelMouse;
    var percentMouse;
    var valueTotal;
    var valueMouse;
    if(this.orientation === "horizontal") {
      pixelTotal = this.elementSize.width;
      var v638 = position$$3.x - this.elementOffset.left;
      var v2589;
      if(this._clickOffset) {
        v2589 = this._clickOffset.left
      }else {
        v2589 = 0
      }
      pixelMouse = v638 - v2589
    }else {
      pixelTotal = this.elementSize.height;
      var v641 = position$$3.y - this.elementOffset.top;
      var v2592;
      if(this._clickOffset) {
        v2592 = this._clickOffset.top
      }else {
        v2592 = 0
      }
      pixelMouse = v641 - v2592
    }
    percentMouse = pixelMouse / pixelTotal;
    if(percentMouse > 1) {
      percentMouse = 1
    }
    if(percentMouse < 0) {
      percentMouse = 0
    }
    if(this.orientation === "vertical") {
      percentMouse = 1 - percentMouse
    }
    valueTotal = this.options.max - this.options.min;
    valueMouse = this.options.min + percentMouse * valueTotal;
    return JAM.call(this._trimAlignValue, this, [valueMouse])
  }
  function v465() {
    var v651;
    if(this.options.orientation === "vertical") {
      v651 = "vertical"
    }else {
      v651 = "horizontal"
    }
    this.orientation = v651;
    return
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
    return false
  }
  function v463(event$$27) {
    var position$$2 = {x:event$$27.pageX, y:event$$27.pageY};
    var normValue$$1 = JAM.call(this._normValueFromMouse, this, [position$$2]);
    JAM.call(this._slide, this, [event$$27, this._handleIndex, normValue$$1]);
    return false
  }
  function v462() {
    return true
  }
  function v461(event$$26) {
    function v460(i$$106) {
      var thisDistance = Math.abs(normValue - JAM.call(that$$2.values, that$$2, [i$$106]));
      var v2600 = distance > thisDistance;
      if(!v2600) {
        var v3861 = distance === thisDistance;
        if(v3861) {
          var v4693 = i$$106 === that$$2._lastChangedValue;
          if(!v4693) {
            v4693 = JAM.call(that$$2.values, that$$2, [i$$106]) === o$$1.min
          }
          v3861 = v4693
        }
        v2600 = v3861
      }
      if(v2600) {
        distance = thisDistance;
        closestHandle = JAM.call($$$4, null, [this]);
        index$$40 = i$$106
      }
      return
    }
    var position$$1;
    var normValue;
    var distance;
    var closestHandle;
    var index$$40;
    var allowed;
    var offset$$13;
    var mouseOverHandle;
    var that$$2 = this;
    var o$$1 = this.options;
    if(o$$1.disabled) {
      return false
    }
    this.elementSize = {width:this.element.outerWidth(), height:this.element.outerHeight()};
    var v5565 = this.element.offset();
    this.elementOffset = v5565;
    position$$1 = {x:event$$26.pageX, y:event$$26.pageY};
    normValue = JAM.call(this._normValueFromMouse, this, [position$$1]);
    distance = this.options.max - this.options.min + 1;
    var v667 = this.handles;
    JAM.call(v667.each, v667, [v460]);
    allowed = JAM.call(this._start, this, [event$$26, index$$40]);
    if(allowed === false) {
      return false
    }
    this._mouseSliding = true;
    this._handleIndex = index$$40;
    JAM.call(closestHandle.addClass, closestHandle, ["ui-state-active"]).focus();
    offset$$13 = closestHandle.offset();
    var v2605 = JAM.call($$$4, null, [event$$26.target]).parents().addBack();
    mouseOverHandle = !JAM.call(v2605.is, v2605, [".ui-slider-handle"]);
    var v671;
    if(mouseOverHandle) {
      v671 = {left:0, top:0}
    }else {
      var v2606 = event$$26.pageX - offset$$13.left - closestHandle.width() / 2;
      var v5141 = event$$26.pageY - offset$$13.top - closestHandle.height() / 2;
      var v5365 = parseInt(JAM.call(closestHandle.css, closestHandle, ["borderTopWidth"]), 10);
      if(!v5365) {
        v5365 = 0
      }
      var v4698 = v5141 - v5365;
      var v5143 = parseInt(JAM.call(closestHandle.css, closestHandle, ["borderBottomWidth"]), 10);
      if(!v5143) {
        v5143 = 0
      }
      var v3868 = v4698 - v5143;
      var v4700 = parseInt(JAM.call(closestHandle.css, closestHandle, ["marginTop"]), 10);
      if(!v4700) {
        v4700 = 0
      }
      v671 = {left:v2606, top:v3868 + v4700}
    }
    this._clickOffset = v671;
    var v3870 = this.handles;
    if(!JAM.call(v3870.hasClass, v3870, ["ui-state-hover"])) {
      JAM.call(this._slide, this, [event$$26, index$$40, normValue])
    }
    this._animateOff = true;
    return true
  }
  function v459() {
    this.handles.remove();
    this.range.remove();
    var v675 = this.element;
    JAM.call(v675.removeClass, v675, ["ui-slider" + " ui-slider-horizontal" + " ui-slider-vertical" + " ui-widget" + " ui-widget-content" + " ui-corner-all"]);
    this._mouseDestroy();
    return
  }
  function v458() {
    var v2610 = this.handles;
    var v677 = JAM.call(v2610.add, v2610, [this.range]);
    var elements$$1 = JAM.call(v677.filter, v677, ["a"]);
    JAM.call(this._off, this, [elements$$1]);
    JAM.call(this._on, this, [elements$$1, this._handleEvents]);
    JAM.call(this._hoverable, this, [elements$$1]);
    JAM.call(this._focusable, this, [elements$$1]);
    return
  }
  function v457() {
    var options$$15 = this.options;
    var classes = "";
    if(options$$15.range) {
      if(options$$15.range === true) {
        if(!options$$15.values) {
          options$$15.values = [this.options.min, this.options.min]
        }else {
          var v2616 = options$$15.values.length;
          if(v2616) {
            v2616 = options$$15.values.length !== 2
          }
          if(v2616) {
            options$$15.values = [options$$15.values[0], options$$15.values[0]]
          }else {
            if(JAM.call($$$4.isArray, $$$4, [options$$15.values])) {
              var v683 = options$$15;
              var v2620 = options$$15.values;
              var v5566 = JAM.call(v2620.slice, v2620, [0]);
              v683.values = v5566
            }
          }
        }
      }
      var v2621 = !this.range;
      if(!v2621) {
        v2621 = !this.range.length
      }
      if(v2621) {
        var v688 = JAM.call($$$4, null, ["<div></div>"]);
        var v5567 = JAM.call(v688.appendTo, v688, [this.element]);
        this.range = v5567;
        classes = "ui-slider-range" + " ui-widget-header ui-corner-all"
      }else {
        var v2622 = this.range;
        var v690 = JAM.call(v2622.removeClass, v2622, ["ui-slider-range-min ui-slider-range-max"]);
        JAM.call(v690.css, v690, [{"left":"", "bottom":""}])
      }
      var v693 = this.range;
      var v3877;
      var v5147 = options$$15.range === "min";
      if(!v5147) {
        v5147 = options$$15.range === "max"
      }
      if(v5147) {
        v3877 = " ui-slider-range-" + options$$15.range
      }else {
        v3877 = ""
      }
      JAM.call(v693.addClass, v693, [classes + v3877])
    }else {
      var v5568 = JAM.call($$$4, null, [[]]);
      this.range = v5568
    }
    return
  }
  function v456() {
    function v455(i$$105) {
      var v696 = JAM.call($$$4, null, [this]);
      JAM.call(v696.data, v696, ["ui-slider-handle-index", i$$105]);
      return
    }
    var i$$104;
    var handleCount;
    var options$$14 = this.options;
    var v2624 = this.element;
    var v697 = JAM.call(v2624.find, v2624, [".ui-slider-handle"]);
    var existingHandles = JAM.call(v697.addClass, v697, ["ui-state-default ui-corner-all"]);
    var handle$$16 = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
    var handles = [];
    var v2625 = options$$14.values;
    if(v2625) {
      v2625 = options$$14.values.length
    }
    var v698 = v2625;
    if(!v698) {
      v698 = 1
    }
    handleCount = v698;
    if(existingHandles.length > handleCount) {
      JAM.call(existingHandles.slice, existingHandles, [handleCount]).remove();
      existingHandles = JAM.call(existingHandles.slice, existingHandles, [0, handleCount])
    }
    i$$104 = existingHandles.length;
    var v701 = i$$104 < handleCount;
    for(;v701;) {
      JAM.call(handles.push, handles, [handle$$16]);
      i$$104 = i$$104 + 1;
      v701 = i$$104 < handleCount
    }
    var v2628 = JAM.call($$$4, null, [handles.join("")]);
    var v5569 = JAM.call(existingHandles.add, existingHandles, [JAM.call(v2628.appendTo, v2628, [this.element])]);
    this.handles = v5569;
    var v703 = this.handles;
    var v5570 = JAM.call(v703.eq, v703, [0]);
    this.handle = v5570;
    var v704 = this.handles;
    JAM.call(v704.each, v704, [v455]);
    return
  }
  function v454() {
    this._createRange();
    this._createHandles();
    this._setupEvents();
    this._refreshValue();
    return
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
    return
  }
  var numPages = 5;
  JAM.call($$$4.widget, $$$4, ["ui.slider", $$$4.ui.mouse, {version:"1.10.1", widgetEventPrefix:"slide", options:{animate:false, distance:0, max:100, min:0, orientation:"horizontal", range:false, step:1, value:0, values:null, change:null, slide:null, start:null, stop:null}, _create:v453, _refresh:v454, _createHandles:v456, _createRange:v457, _setupEvents:v458, _destroy:v459, _mouseCapture:v461, _mouseStart:v462, _mouseDrag:v463, _mouseStop:v464, _detectOrientation:v465, _normValueFromMouse:v466, 
  _start:v467, _slide:v468, _stop:v469, _change:v470, value:v471, values:v472, _setOption:v473, _value:v474, _values:v475, _trimAlignValue:v476, _valueMin:v477, _valueMax:v478, _refreshValue:v480, _handleEvents:{keydown:v481, click:v482, keyup:v483}}]);
  return
}
function v452($$$3, undefined$$4) {
  function v451() {
    return true
  }
  function v450() {
    return
  }
  function v449() {
    return
  }
  function v448() {
    return
  }
  function v447() {
    return this.mouseDelayMet
  }
  function v446(event$$25) {
    return JAM.call(Math.max, Math, [Math.abs(this._mouseDownEvent.pageX - event$$25.pageX), Math.abs(this._mouseDownEvent.pageY - event$$25.pageY)]) >= this.options.distance
  }
  function v445(event$$24) {
    var v2638 = JAM.call($$$3, null, [document]);
    var v712 = JAM.call(v2638.unbind, v2638, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
    JAM.call(v712.unbind, v712, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    if(this._mouseStarted) {
      this._mouseStarted = false;
      if(event$$24.target === this._mouseDownEvent.target) {
        JAM.call($$$3.data, $$$3, [event$$24.target, this.widgetName + ".preventClickEvent", true])
      }
      JAM.call(this._mouseStop, this, [event$$24])
    }
    return false
  }
  function v444(event$$23) {
    var v2645 = $$$3.ui.ie;
    if(v2645) {
      var v4711 = !document.documentMode;
      if(!v4711) {
        v4711 = document.documentMode < 9
      }
      var v3886 = v4711;
      if(v3886) {
        v3886 = !event$$23.button
      }
      v2645 = v3886
    }
    if(v2645) {
      return JAM.call(this._mouseUp, this, [event$$23])
    }
    if(this._mouseStarted) {
      JAM.call(this._mouseDrag, this, [event$$23]);
      return event$$23.preventDefault()
    }
    var v2646 = JAM.call(this._mouseDistanceMet, this, [event$$23]);
    if(v2646) {
      v2646 = this.mouseDelayMet
    }
    if(v2646) {
      this._mouseStarted = JAM.call(this._mouseStart, this, [this._mouseDownEvent, event$$23]) !== false;
      var v722;
      if(this._mouseStarted) {
        v722 = JAM.call(this._mouseDrag, this, [event$$23])
      }else {
        v722 = JAM.call(this._mouseUp, this, [event$$23])
      }
      v722
    }
    return!this._mouseStarted
  }
  function v443(event$$20) {
    function v442(event$$22) {
      return JAM.call(that$$1._mouseUp, that$$1, [event$$22])
    }
    function v441(event$$21) {
      return JAM.call(that$$1._mouseMove, that$$1, [event$$21])
    }
    function v440() {
      that$$1.mouseDelayMet = true;
      return
    }
    if(mouseHandled) {
      return
    }
    var v725 = this._mouseStarted;
    if(v725) {
      JAM.call(this._mouseUp, this, [event$$20])
    }
    this._mouseDownEvent = event$$20;
    var that$$1 = this;
    var btnIsLeft = event$$20.which === 1;
    var v727;
    var v3887 = typeof this.options.cancel === "string";
    if(v3887) {
      v3887 = event$$20.target.nodeName
    }
    if(v3887) {
      var v3888 = JAM.call($$$3, null, [event$$20.target]);
      v727 = JAM.call(v3888.closest, v3888, [this.options.cancel]).length
    }else {
      v727 = false
    }
    var elIsCancel = v727;
    var v2651 = !btnIsLeft;
    if(!v2651) {
      var v3890 = elIsCancel;
      if(!v3890) {
        v3890 = !JAM.call(this._mouseCapture, this, [event$$20])
      }
      v2651 = v3890
    }
    if(v2651) {
      return true
    }
    this.mouseDelayMet = !this.options.delay;
    if(!this.mouseDelayMet) {
      var v5571 = JAM.call(setTimeout, null, [v440, this.options.delay]);
      this._mouseDelayTimer = v5571
    }
    var v2655 = JAM.call(this._mouseDistanceMet, this, [event$$20]);
    if(v2655) {
      v2655 = this.mouseDelayMet
    }
    if(v2655) {
      this._mouseStarted = JAM.call(this._mouseStart, this, [event$$20]) !== false;
      if(!this._mouseStarted) {
        event$$20.preventDefault();
        return true
      }
    }
    if(true === JAM.call($$$3.data, $$$3, [event$$20.target, this.widgetName + ".preventClickEvent"])) {
      JAM.call($$$3.removeData, $$$3, [event$$20.target, this.widgetName + ".preventClickEvent"])
    }
    this._mouseMoveDelegate = v441;
    this._mouseUpDelegate = v442;
    var v2659 = JAM.call($$$3, null, [document]);
    var v738 = JAM.call(v2659.bind, v2659, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
    JAM.call(v738.bind, v738, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    event$$20.preventDefault();
    mouseHandled = true;
    return true
  }
  function v439() {
    var v741 = this.element;
    JAM.call(v741.unbind, v741, ["." + this.widgetName]);
    if(this._mouseMoveDelegate) {
      var v2664 = JAM.call($$$3, null, [document]);
      var v743 = JAM.call(v2664.unbind, v2664, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
      JAM.call(v743.unbind, v743, ["mouseup." + this.widgetName, this._mouseUpDelegate])
    }
    return
  }
  function v438() {
    function v437(event$$19) {
      if(true === JAM.call($$$3.data, $$$3, [event$$19.target, that.widgetName + ".preventClickEvent"])) {
        JAM.call($$$3.removeData, $$$3, [event$$19.target, that.widgetName + ".preventClickEvent"]);
        event$$19.stopImmediatePropagation();
        return false
      }
      return
    }
    function v436(event$$18) {
      return JAM.call(that._mouseDown, that, [event$$18])
    }
    var that = this;
    var v2670 = this.element;
    var v750 = JAM.call(v2670.bind, v2670, ["mousedown." + this.widgetName, v436]);
    JAM.call(v750.bind, v750, ["click." + this.widgetName, v437]);
    this.started = false;
    return
  }
  function v435() {
    mouseHandled = false;
    return
  }
  var mouseHandled = false;
  var v752 = JAM.call($$$3, null, [document]);
  JAM.call(v752.mouseup, v752, [v435]);
  JAM.call($$$3.widget, $$$3, ["ui.mouse", {version:"1.10.1", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0}, _mouseInit:v438, _mouseDestroy:v439, _mouseDown:v443, _mouseMove:v444, _mouseUp:v445, _mouseDistanceMet:v446, _mouseDelayMet:v447, _mouseStart:v448, _mouseDrag:v449, _mouseStop:v450, _mouseCapture:v451}]);
  return
}
function v434($$$2, undefined$$3) {
  function v433(method$$2, defaultEffect) {
    function v432(element$$13, options$$13, callback$$43) {
      function v431(next$$1) {
        var v754 = JAM.call($$$2, null, [this]);
        JAM.call(JAM.get(v754, method$$2, JAM.policy.p3), v754, []);
        if(callback$$43) {
          JAM.call(callback$$43.call, callback$$43, [element$$13[0]])
        }
        next$$1();
        return
      }
      if(typeof options$$13 === "string") {
        options$$13 = {effect:options$$13}
      }
      var hasOptions;
      var v757;
      if(!options$$13) {
        v757 = method$$2
      }else {
        var v2675;
        var v4721 = options$$13 === true;
        if(!v4721) {
          v4721 = typeof options$$13 === "number"
        }
        if(v4721) {
          v2675 = defaultEffect
        }else {
          var v3899 = options$$13.effect;
          if(!v3899) {
            v3899 = defaultEffect
          }
          v2675 = v3899
        }
        v757 = v2675
      }
      var effectName = v757;
      options$$13 = options$$13 || {};
      if(typeof options$$13 === "number") {
        options$$13 = {duration:options$$13}
      }
      hasOptions = !JAM.call($$$2.isEmptyObject, $$$2, [options$$13]);
      options$$13.complete = callback$$43;
      if(options$$13.delay) {
        JAM.call(element$$13.delay, element$$13, [options$$13.delay])
      }
      var v2678 = hasOptions;
      if(v2678) {
        var v3901 = $$$2.effects;
        if(v3901) {
          var v4723 = $$$2.effects.effect;
          introspect(JAM.policy.p3) {
            v3901 = v4723[effectName]
          }
        }
        v2678 = v3901
      }
      if(v2678) {
        JAM.call(JAM.get(element$$13, method$$2, JAM.policy.p3), element$$13, [options$$13])
      }else {
        var v2679 = effectName !== method$$2;
        if(v2679) {
          introspect(JAM.policy.p3) {
            v2679 = element$$13[effectName]
          }
        }
        if(v2679) {
          JAM.call(JAM.get(element$$13, effectName, JAM.policy.p3), element$$13, [options$$13.duration, options$$13.easing, callback$$43])
        }else {
          JAM.call(element$$13.queue, element$$13, [v431])
        }
      }
      return
    }
    JAM.set($$$2.Widget.prototype, "_" + method$$2, v432, JAM.policy.p2);
    return
  }
  function v430(type$$67, event$$17, data$$44) {
    var prop$$9;
    var orig$$4;
    var v768 = this.options;
    introspect(JAM.policy.p3) {
      var callback$$42 = v768[type$$67]
    }
    data$$44 = data$$44 || {};
    event$$17 = JAM.call($$$2.Event, $$$2, [event$$17]);
    var v769 = event$$17;
    var v3902;
    if(type$$67 === this.widgetEventPrefix) {
      v3902 = type$$67
    }else {
      v3902 = this.widgetEventPrefix + type$$67
    }
    var v5572 = v3902.toLowerCase();
    v769.type = v5572;
    event$$17.target = this.element[0];
    orig$$4 = event$$17.originalEvent;
    if(orig$$4) {
      for(prop$$9 in orig$$4) {
        if(!(prop$$9 in event$$17)) {
          JAM.set(event$$17, prop$$9, JAM.get(orig$$4, prop$$9, JAM.policy.p4), JAM.policy.p4)
        }
      }
    }
    var v772 = this.element;
    JAM.call(v772.trigger, v772, [event$$17, data$$44]);
    var v3903 = JAM.call($$$2.isFunction, $$$2, [callback$$42]);
    if(v3903) {
      v3903 = JAM.call(callback$$42.apply, callback$$42, [this.element[0], [event$$17].concat(data$$44)]) === false
    }
    var v2683 = v3903;
    if(!v2683) {
      v2683 = event$$17.isDefaultPrevented()
    }
    return!v2683
  }
  function v429(element$$12) {
    function v428(event$$16) {
      var v774 = JAM.call($$$2, null, [event$$16.currentTarget]);
      JAM.call(v774.removeClass, v774, ["ui-state-focus"]);
      return
    }
    function v427(event$$15) {
      var v775 = JAM.call($$$2, null, [event$$15.currentTarget]);
      JAM.call(v775.addClass, v775, ["ui-state-focus"]);
      return
    }
    var v776 = this.focusable;
    var v5573 = JAM.call(v776.add, v776, [element$$12]);
    this.focusable = v5573;
    JAM.call(this._on, this, [element$$12, {focusin:v427, focusout:v428}]);
    return
  }
  function v426(element$$11) {
    function v425(event$$14) {
      var v778 = JAM.call($$$2, null, [event$$14.currentTarget]);
      JAM.call(v778.removeClass, v778, ["ui-state-hover"]);
      return
    }
    function v424(event$$13) {
      var v779 = JAM.call($$$2, null, [event$$13.currentTarget]);
      JAM.call(v779.addClass, v779, ["ui-state-hover"]);
      return
    }
    var v780 = this.hoverable;
    var v5574 = JAM.call(v780.add, v780, [element$$11]);
    this.hoverable = v5574;
    JAM.call(this._on, this, [element$$11, {mouseenter:v424, mouseleave:v425}]);
    return
  }
  function v423(handler$$9, delay$$4) {
    function handlerProxy$$1() {
      var v2688;
      if(typeof handler$$9 === "string") {
        introspect(JAM.policy.p3) {
          v2688 = instance$$4[handler$$9]
        }
      }else {
        v2688 = handler$$9
      }
      var v782 = v2688;
      return JAM.call(v782.apply, v782, [instance$$4, arguments])
    }
    var instance$$4 = this;
    return JAM.call(setTimeout, null, [handlerProxy$$1, delay$$4 || 0])
  }
  function v422(element$$10, eventName$$2) {
    eventName$$2 = (eventName$$2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
    var v786 = JAM.call(element$$10.unbind, element$$10, [eventName$$2]);
    JAM.call(v786.undelegate, v786, [eventName$$2]);
    return
  }
  function v421(suppressDisabledCheck, element$$9, handlers$$2) {
    function v420(event$$12, handler$$8) {
      function handlerProxy() {
        var v2691 = !suppressDisabledCheck;
        if(v2691) {
          var v3908 = instance$$3.options.disabled === true;
          if(!v3908) {
            var v4729 = JAM.call($$$2, null, [this]);
            v3908 = JAM.call(v4729.hasClass, v4729, ["ui-state-disabled"])
          }
          v2691 = v3908
        }
        if(v2691) {
          return
        }
        var v2692;
        if(typeof handler$$8 === "string") {
          introspect(JAM.policy.p3) {
            v2692 = instance$$3[handler$$8]
          }
        }else {
          v2692 = handler$$8
        }
        var v788 = v2692;
        return JAM.call(v788.apply, v788, [instance$$3, arguments])
      }
      if(typeof handler$$8 !== "string") {
        var v789 = handler$$8.guid;
        if(!v789) {
          var v2694 = handlerProxy.guid;
          if(!v2694) {
            v2694 = $$$2.guid;
            $$$2.guid = $$$2.guid + 1
          }
          v789 = v2694
        }
        handlerProxy.guid = handler$$8.guid = v789
      }
      var match$$38 = JAM.call(event$$12.match, event$$12, [/^(\w+)\s*(.*)$/]);
      var eventName$$1 = match$$38[1] + instance$$3.eventNamespace;
      var selector$$22 = match$$38[2];
      if(selector$$22) {
        JAM.call(delegateElement.delegate, delegateElement, [selector$$22, eventName$$1, handlerProxy])
      }else {
        JAM.call(element$$9.bind, element$$9, [eventName$$1, handlerProxy])
      }
      return
    }
    var delegateElement;
    var instance$$3 = this;
    if(typeof suppressDisabledCheck !== "boolean") {
      handlers$$2 = element$$9;
      element$$9 = suppressDisabledCheck;
      suppressDisabledCheck = false
    }
    if(!handlers$$2) {
      handlers$$2 = element$$9;
      element$$9 = this.element;
      delegateElement = this.widget()
    }else {
      element$$9 = delegateElement = JAM.call($$$2, null, [element$$9]);
      var v794 = this.bindings;
      var v5575 = JAM.call(v794.add, v794, [element$$9]);
      this.bindings = v5575
    }
    JAM.call($$$2.each, $$$2, [handlers$$2, v420]);
    return
  }
  function v419() {
    return JAM.call(this._setOption, this, ["disabled", true])
  }
  function v418() {
    return JAM.call(this._setOption, this, ["disabled", false])
  }
  function v417(key$$25, value$$51) {
    JAM.set(this.options, key$$25, value$$51, JAM.policy.p2);
    if(key$$25 === "disabled") {
      var v2697 = this.widget();
      var v797 = JAM.call(v2697.toggleClass, v2697, [this.widgetFullName + "-disabled ui-state-disabled", !!value$$51]);
      JAM.call(v797.attr, v797, ["aria-disabled", value$$51]);
      var v798 = this.hoverable;
      JAM.call(v798.removeClass, v798, ["ui-state-hover"]);
      var v799 = this.focusable;
      JAM.call(v799.removeClass, v799, ["ui-state-focus"])
    }
    return this
  }
  function v416(options$$12) {
    var key$$24;
    for(key$$24 in options$$12) {
      introspect(JAM.policy.p3) {
        var v801 = options$$12[key$$24]
      }
      JAM.call(this._setOption, this, [key$$24, v801])
    }
    return this
  }
  function v415(key$$23, value$$50) {
    var options$$11 = key$$23;
    var parts$$4;
    var curOption;
    var i$$103;
    if(arguments.length === 0) {
      var v802 = $$$2.widget;
      return JAM.call(v802.extend, v802, [{}, this.options])
    }
    if(typeof key$$23 === "string") {
      options$$11 = {};
      parts$$4 = key$$23.split(".");
      key$$23 = parts$$4.shift();
      if(parts$$4.length) {
        var v805 = options$$11;
        var v806 = key$$23;
        var v2702 = $$$2.widget;
        var v3913 = this.options;
        introspect(JAM.policy.p3) {
          var v2703 = v3913[key$$23]
        }
        var v5576 = JAM.call(v2702.extend, v2702, [{}, v2703]);
        curOption = JAM.set(v805, v806, v5576, JAM.policy.p2);
        i$$103 = 0;
        var v809 = i$$103 < parts$$4.length - 1;
        for(;v809;) {
          introspect(JAM.policy.p3) {
            var v807 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            var v3915 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            var v2705 = curOption[v3915]
          }
          if(!v2705) {
            v2705 = {}
          }
          JAM.set(curOption, v807, v2705, JAM.policy.p2);
          introspect(JAM.policy.p3) {
            var v808 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            curOption = curOption[v808]
          }
          i$$103 = i$$103 + 1;
          v809 = i$$103 < parts$$4.length - 1
        }
        key$$23 = parts$$4.pop();
        if(value$$50 === undefined$$3) {
          var v810;
          introspect(JAM.policy.p3) {
            var v3918 = curOption[key$$23]
          }
          if(v3918 === undefined$$3) {
            v810 = null
          }else {
            introspect(JAM.policy.p3) {
              v810 = curOption[key$$23]
            }
          }
          return v810
        }
        JAM.set(curOption, key$$23, value$$50, JAM.policy.p2)
      }else {
        if(value$$50 === undefined$$3) {
          var v812;
          var v4733 = this.options;
          introspect(JAM.policy.p3) {
            var v3919 = v4733[key$$23]
          }
          if(v3919 === undefined$$3) {
            v812 = null
          }else {
            var v2708 = this.options;
            introspect(JAM.policy.p3) {
              v812 = v2708[key$$23]
            }
          }
          return v812
        }
        JAM.set(options$$11, key$$23, value$$50, JAM.policy.p2)
      }
    }
    JAM.call(this._setOptions, this, [options$$11]);
    return this
  }
  function v414() {
    return this.element
  }
  function v413() {
    this._destroy();
    var v4734 = this.element;
    var v3920 = JAM.call(v4734.unbind, v4734, [this.eventNamespace]);
    var v2710 = JAM.call(v3920.removeData, v3920, [this.widgetName]);
    var v816 = JAM.call(v2710.removeData, v2710, [this.widgetFullName]);
    JAM.call(v816.removeData, v816, [JAM.call($$$2.camelCase, $$$2, [this.widgetFullName])]);
    var v3922 = this.widget();
    var v2713 = JAM.call(v3922.unbind, v3922, [this.eventNamespace]);
    var v818 = JAM.call(v2713.removeAttr, v2713, ["aria-disabled"]);
    JAM.call(v818.removeClass, v818, [this.widgetFullName + "-disabled " + "ui-state-disabled"]);
    var v820 = this.bindings;
    JAM.call(v820.unbind, v820, [this.eventNamespace]);
    var v822 = this.hoverable;
    JAM.call(v822.removeClass, v822, ["ui-state-hover"]);
    var v823 = this.focusable;
    JAM.call(v823.removeClass, v823, ["ui-state-focus"]);
    return
  }
  function v412(options$$10, element$$8) {
    function v411(event$$11) {
      if(event$$11.target === element$$8) {
        this.destroy()
      }
      return
    }
    var v3925 = element$$8;
    if(!v3925) {
      var v4736 = this.defaultElement;
      if(!v4736) {
        v4736 = this
      }
      v3925 = v4736
    }
    element$$8 = JAM.call($$$2, null, [v3925])[0];
    var v5577 = JAM.call($$$2, null, [element$$8]);
    this.element = v5577;
    this.uuid = uuid$$2;
    uuid$$2 = uuid$$2 + 1;
    this.eventNamespace = "." + this.widgetName + this.uuid;
    var v828 = $$$2.widget;
    var v5578 = JAM.call(v828.extend, v828, [{}, this.options, this._getCreateOptions(), options$$10]);
    this.options = v5578;
    var v5579 = $$$2();
    this.bindings = v5579;
    var v5580 = $$$2();
    this.hoverable = v5580;
    var v5581 = $$$2();
    this.focusable = v5581;
    if(element$$8 !== this) {
      JAM.call($$$2.data, $$$2, [element$$8, this.widgetFullName, this]);
      JAM.call(this._on, this, [true, this.element, {remove:v411}]);
      var v2718;
      if(element$$8.style) {
        v2718 = element$$8.ownerDocument
      }else {
        var v3926 = element$$8.document;
        if(!v3926) {
          v3926 = element$$8
        }
        v2718 = v3926
      }
      var v5582 = JAM.call($$$2, null, [v2718]);
      this.document = v5582;
      var v2719 = this.document[0].defaultView;
      if(!v2719) {
        v2719 = this.document[0].parentWindow
      }
      var v5583 = JAM.call($$$2, null, [v2719]);
      this.window = v5583
    }
    this._create();
    JAM.call(this._trigger, this, ["create", null, this._getCreateEventData()]);
    this._init();
    return
  }
  function v410() {
    return
  }
  function v409(name$$64, object$$1) {
    function v408(options$$9) {
      function v407() {
        var instance$$2 = JAM.call($$$2.data, $$$2, [this, fullName$$1]);
        if(instance$$2) {
          JAM.call(instance$$2.option, instance$$2, [options$$9 || {}])._init()
        }else {
          JAM.call($$$2.data, $$$2, [this, fullName$$1, JAM.new(object$$1, [options$$9, this])])
        }
        return
      }
      function v406() {
        var methodValue;
        var instance$$1 = JAM.call($$$2.data, $$$2, [this, fullName$$1]);
        if(!instance$$1) {
          return JAM.call($$$2.error, $$$2, ["cannot call methods on " + name$$64 + " prior to initialization; " + "attempted to call method '" + options$$9 + "'"])
        }
        introspect(JAM.policy.p3) {
          var v4742 = instance$$1[options$$9]
        }
        var v2722 = !JAM.call($$$2.isFunction, $$$2, [v4742]);
        if(!v2722) {
          v2722 = options$$9.charAt(0) === "_"
        }
        if(v2722) {
          return JAM.call($$$2.error, $$$2, ["no such method '" + options$$9 + "' for " + name$$64 + " widget instance"])
        }
        introspect(JAM.policy.p3) {
          var v844 = instance$$1[options$$9]
        }
        methodValue = JAM.call(v844.apply, v844, [instance$$1, args$$10]);
        var v2724 = methodValue !== instance$$1;
        if(v2724) {
          v2724 = methodValue !== undefined$$3
        }
        if(v2724) {
          var v845;
          var v3936 = methodValue;
          if(v3936) {
            v3936 = methodValue.jquery
          }
          if(v3936) {
            v845 = JAM.call(returnValue$$1.pushStack, returnValue$$1, [methodValue.get()])
          }else {
            v845 = methodValue
          }
          returnValue$$1 = v845;
          return false
        }
        return
      }
      var isMethodCall = typeof options$$9 === "string";
      var args$$10 = JAM.call(slice$$1.call, slice$$1, [arguments, 1]);
      var returnValue$$1 = this;
      var v848;
      var v3937 = !isMethodCall;
      if(v3937) {
        v3937 = args$$10.length
      }
      if(v3937) {
        var v2727 = $$$2.widget.extend;
        v848 = JAM.call(v2727.apply, v2727, [null, [options$$9].concat(args$$10)])
      }else {
        v848 = options$$9
      }
      options$$9 = v848;
      if(isMethodCall) {
        JAM.call(this.each, this, [v406])
      }else {
        JAM.call(this.each, this, [v407])
      }
      return returnValue$$1
    }
    var v849 = object$$1.prototype.widgetFullName;
    if(!v849) {
      v849 = name$$64
    }
    var fullName$$1 = v849;
    JAM.set($$$2.fn, name$$64, v408, JAM.policy.p2);
    return
  }
  function v405(target$$40) {
    var input = JAM.call(slice$$1.call, slice$$1, [arguments, 1]);
    var inputIndex = 0;
    var inputLength = input.length;
    var key$$22;
    var value$$49;
    var v857 = inputIndex < inputLength;
    for(;v857;) {
      introspect(JAM.policy.p3) {
        var v856 = input[inputIndex]
      }
      for(key$$22 in v856) {
        introspect(JAM.policy.p3) {
          var v851 = input[inputIndex]
        }
        introspect(JAM.policy.p3) {
          value$$49 = v851[key$$22]
        }
        introspect(JAM.policy.p3) {
          var v3940 = input[inputIndex]
        }
        var v2732 = v3940.hasOwnProperty(key$$22);
        if(v2732) {
          v2732 = value$$49 !== undefined$$3
        }
        if(v2732) {
          if(JAM.call($$$2.isPlainObject, $$$2, [value$$49])) {
            var v852 = target$$40;
            var v853 = key$$22;
            var v2733;
            introspect(JAM.policy.p3) {
              var v4744 = target$$40[key$$22]
            }
            if(JAM.call($$$2.isPlainObject, $$$2, [v4744])) {
              var v3941 = $$$2.widget;
              introspect(JAM.policy.p3) {
                var v3942 = target$$40[key$$22]
              }
              v2733 = JAM.call(v3941.extend, v3941, [{}, v3942, value$$49])
            }else {
              var v3943 = $$$2.widget;
              v2733 = JAM.call(v3943.extend, v3943, [{}, value$$49])
            }
            JAM.set(v852, v853, v2733, JAM.policy.p2)
          }else {
            JAM.set(target$$40, key$$22, value$$49, JAM.policy.p2)
          }
        }
      }
      inputIndex = inputIndex + 1;
      v857 = inputIndex < inputLength
    }
    return target$$40
  }
  function v404(name$$63, base$$1, prototype) {
    function v403(i$$102, child$$1) {
      var childPrototype = child$$1.prototype;
      JAM.call($$$2.widget, $$$2, [childPrototype.namespace + "." + childPrototype.widgetName, constructor, child$$1._proto]);
      return
    }
    function v402(prop$$8, value$$48) {
      function v401() {
        function v400() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;
          this._super = _super;
          this._superApply = _superApply;
          returnValue = JAM.call(value$$48.apply, value$$48, [this, arguments]);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue
        }
        function _superApply(args$$9) {
          var v2736 = base$$1.prototype;
          introspect(JAM.policy.p3) {
            var v860 = v2736[prop$$8]
          }
          return JAM.call(v860.apply, v860, [this, args$$9])
        }
        function _super() {
          var v2737 = base$$1.prototype;
          introspect(JAM.policy.p3) {
            var v861 = v2737[prop$$8]
          }
          return JAM.call(v861.apply, v861, [this, arguments])
        }
        return v400
      }
      if(!JAM.call($$$2.isFunction, $$$2, [value$$48])) {
        JAM.set(proxiedPrototype, prop$$8, value$$48, JAM.policy.p2);
        return
      }
      var v5584 = v401();
      JAM.set(proxiedPrototype, prop$$8, v5584, JAM.policy.p2);
      return
    }
    function v399(options$$8, element$$7) {
      if(!this._createWidget) {
        return JAM.new(constructor, [options$$8, element$$7])
      }
      if(arguments.length) {
        JAM.call(this._createWidget, this, [options$$8, element$$7])
      }
      return
    }
    function v398(elem$$129) {
      return!!JAM.call($$$2.data, $$$2, [elem$$129, fullName])
    }
    var fullName;
    var existingConstructor;
    var constructor;
    var basePrototype;
    var proxiedPrototype = {};
    var namespace$$3 = name$$63.split(".")[0];
    name$$63 = name$$63.split(".")[1];
    fullName = namespace$$3 + "-" + name$$63;
    if(!prototype) {
      prototype = base$$1;
      base$$1 = $$$2.Widget
    }
    JAM.set($$$2.expr[":"], fullName.toLowerCase(), v398, JAM.policy.p2);
    introspect(JAM.policy.p3) {
      var v872 = $$$2[namespace$$3]
    }
    if(!v872) {
      v872 = {}
    }
    JAM.set($$$2, namespace$$3, v872, JAM.policy.p2);
    introspect(JAM.policy.p3) {
      var v873 = $$$2[namespace$$3]
    }
    introspect(JAM.policy.p3) {
      existingConstructor = v873[name$$63]
    }
    introspect(JAM.policy.p3) {
      var v874 = $$$2[namespace$$3]
    }
    constructor = JAM.set(v874, name$$63, v399, JAM.policy.p2);
    JAM.call($$$2.extend, $$$2, [constructor, existingConstructor, {version:prototype.version, _proto:JAM.call($$$2.extend, $$$2, [{}, prototype]), _childConstructors:[]}]);
    basePrototype = new base$$1;
    var v876 = basePrototype;
    var v2745 = $$$2.widget;
    var v5585 = JAM.call(v2745.extend, v2745, [{}, basePrototype.options]);
    v876.options = v5585;
    JAM.call($$$2.each, $$$2, [prototype, v402]);
    var v877 = constructor;
    var v2747 = $$$2.widget;
    var v4745;
    if(existingConstructor) {
      v4745 = basePrototype.widgetEventPrefix
    }else {
      v4745 = name$$63
    }
    var v5586 = JAM.call(v2747.extend, v2747, [basePrototype, {widgetEventPrefix:v4745}, proxiedPrototype, {constructor:constructor, namespace:namespace$$3, widgetName:name$$63, widgetFullName:fullName}]);
    v877.prototype = v5586;
    if(existingConstructor) {
      JAM.call($$$2.each, $$$2, [existingConstructor._childConstructors, v403]);
      delete existingConstructor._childConstructors
    }else {
      var v879 = base$$1._childConstructors;
      JAM.call(v879.push, v879, [constructor])
    }
    var v880 = $$$2.widget;
    JAM.call(v880.bridge, v880, [name$$63, constructor]);
    return
  }
  function v397(elems$$10) {
    var i$$101 = 0;
    var elem$$128;
    introspect(JAM.policy.p3) {
      var v2750 = elem$$128 = elems$$10[i$$101]
    }
    var v882 = v2750 != null;
    for(;v882;) {
      try {
        var v881 = JAM.call($$$2, null, [elem$$128]);
        JAM.call(v881.triggerHandler, v881, ["remove"])
      }catch(e$$31) {
      }
      i$$101 = i$$101 + 1;
      introspect(JAM.policy.p3) {
        var v2751 = elem$$128 = elems$$10[i$$101]
      }
      v882 = v2751 != null
    }
    JAM.call(_cleanData, null, [elems$$10]);
    return
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
  return
}
function v396($$$1, undefined$$2) {
  function v395(el$$1, a$$7) {
    var v3947 = JAM.call($$$1, null, [el$$1]);
    if(JAM.call(v3947.css, v3947, ["overflow"]) === "hidden") {
      return false
    }
    var v890;
    var v3948 = a$$7;
    if(v3948) {
      v3948 = a$$7 === "left"
    }
    if(v3948) {
      v890 = "scrollLeft"
    }else {
      v890 = "scrollTop"
    }
    var scroll = v890;
    var has = false;
    introspect(JAM.policy.p3) {
      var v2760 = el$$1[scroll]
    }
    if(v2760 > 0) {
      return true
    }
    JAM.set(el$$1, scroll, 1, JAM.policy.p2);
    introspect(JAM.policy.p3) {
      var v892 = el$$1[scroll]
    }
    has = v892 > 0;
    JAM.set(el$$1, scroll, 0, JAM.policy.p2);
    return has
  }
  function v394(instance, name$$62, args$$8) {
    var i$$100;
    var v893 = instance.plugins;
    introspect(JAM.policy.p3) {
      var set$$10 = v893[name$$62]
    }
    var v2761 = !set$$10;
    if(!v2761) {
      var v3949 = !instance.element[0].parentNode;
      if(!v3949) {
        v3949 = instance.element[0].parentNode.nodeType === 11
      }
      v2761 = v3949
    }
    if(v2761) {
      return
    }
    i$$100 = 0;
    var v898 = i$$100 < set$$10.length;
    for(;v898;) {
      var v2763 = instance.options;
      introspect(JAM.policy.p3) {
        var v3951 = set$$10[i$$100]
      }
      var v2764 = v3951[0];
      introspect(JAM.policy.p3) {
        var v897 = v2763[v2764]
      }
      if(v897) {
        introspect(JAM.policy.p3) {
          var v2765 = set$$10[i$$100]
        }
        var v895 = v2765[1];
        JAM.call(v895.apply, v895, [instance.element, args$$8])
      }
      i$$100 = i$$100 + 1;
      v898 = i$$100 < set$$10.length
    }
    return
  }
  function v393(module, option$$1, set$$9) {
    var i$$99;
    var v2767 = $$$1.ui;
    introspect(JAM.policy.p3) {
      var v899 = v2767[module]
    }
    var proto$$1 = v899.prototype;
    for(i$$99 in set$$9) {
      var v900 = proto$$1.plugins;
      var v3952 = proto$$1.plugins;
      introspect(JAM.policy.p3) {
        var v2768 = v3952[i$$99]
      }
      if(!v2768) {
        v2768 = []
      }
      JAM.set(v900, i$$99, v2768, JAM.policy.p2);
      var v2769 = proto$$1.plugins;
      introspect(JAM.policy.p3) {
        var v901 = v2769[i$$99]
      }
      introspect(JAM.policy.p3) {
        var v2770 = set$$9[i$$99]
      }
      JAM.call(v901.push, v901, [[option$$1, v2770]])
    }
    return
  }
  function v392() {
    return JAM.call(this.unbind, this, [".ui-disableSelection"])
  }
  function v391() {
    function v390(event$$10) {
      event$$10.preventDefault();
      return
    }
    var v3954;
    if($$$1.support.selectstart) {
      v3954 = "selectstart"
    }else {
      v3954 = "mousedown"
    }
    return JAM.call(this.bind, this, [v3954 + ".ui-disableSelection", v390])
  }
  function v389(removeData) {
    function v388(key$$21) {
      if(arguments.length) {
        return JAM.call(removeData.call, removeData, [this, JAM.call($$$1.camelCase, $$$1, [key$$21])])
      }else {
        return JAM.call(removeData.call, removeData, [this])
      }
      return
    }
    return v388
  }
  function v387(selector$$21) {
    var v2772;
    if(selector$$21 == null) {
      v2772 = this.prevObject
    }else {
      var v3955 = this.prevObject;
      v2772 = JAM.call(v3955.filter, v3955, [selector$$21])
    }
    return JAM.call(this.add, this, [v2772])
  }
  function v386(i$$98, name$$61) {
    function v385(size$$7, margin$$2) {
      function v384() {
        var v907 = JAM.call($$$1, null, [this]);
        JAM.call(v907.css, v907, [type$$66, reduce(this, size$$7, true, margin$$2) + "px"]);
        return
      }
      if(typeof size$$7 !== "number") {
        var v2775 = "outer" + name$$61;
        introspect(JAM.policy.p3) {
          var v909 = orig$$3[v2775]
        }
        return JAM.call(v909.call, v909, [this, size$$7])
      }
      return JAM.call(this.each, this, [v384])
    }
    function v383(size$$6) {
      function v382() {
        var v911 = JAM.call($$$1, null, [this]);
        JAM.call(v911.css, v911, [type$$66, reduce(this, size$$6) + "px"]);
        return
      }
      if(size$$6 === undefined$$2) {
        var v2777 = "inner" + name$$61;
        introspect(JAM.policy.p3) {
          var v913 = orig$$3[v2777]
        }
        return JAM.call(v913.call, v913, [this])
      }
      return JAM.call(this.each, this, [v382])
    }
    function reduce(elem$$127, size$$5, border$$2, margin$$1) {
      function v381() {
        var v2778 = size$$5;
        var v3957 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "padding" + this]));
        if(!v3957) {
          v3957 = 0
        }
        size$$5 = v2778 - v3957;
        if(border$$2) {
          var v2780 = size$$5;
          var v3958 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "border" + this + "Width"]));
          if(!v3958) {
            v3958 = 0
          }
          size$$5 = v2780 - v3958
        }
        if(margin$$1) {
          var v2782 = size$$5;
          var v3959 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "margin" + this]));
          if(!v3959) {
            v3959 = 0
          }
          size$$5 = v2782 - v3959
        }
        return
      }
      JAM.call($$$1.each, $$$1, [side, v381]);
      return size$$5
    }
    var v915;
    if(name$$61 === "Width") {
      v915 = ["Left", "Right"]
    }else {
      v915 = ["Top", "Bottom"]
    }
    var side = v915;
    var type$$66 = name$$61.toLowerCase();
    var orig$$3 = {innerWidth:$$$1.fn.innerWidth, innerHeight:$$$1.fn.innerHeight, outerWidth:$$$1.fn.outerWidth, outerHeight:$$$1.fn.outerHeight};
    JAM.set($$$1.fn, "inner" + name$$61, v383, JAM.policy.p2);
    JAM.set($$$1.fn, "outer" + name$$61, v385, JAM.policy.p2);
    return
  }
  function v380(element$$6) {
    var tabIndex = JAM.call($$$1.attr, $$$1, [element$$6, "tabindex"]);
    var isTabIndexNaN = isNaN(tabIndex);
    var v2789 = isTabIndexNaN;
    if(!v2789) {
      v2789 = tabIndex >= 0
    }
    var v924 = v2789;
    if(v924) {
      v924 = focusable(element$$6, !isTabIndexNaN)
    }
    return v924
  }
  function v379(element$$5) {
    return focusable(element$$5, !isNaN(JAM.call($$$1.attr, $$$1, [element$$5, "tabindex"])))
  }
  function v378(elem$$126, i$$97, match$$37) {
    return!!JAM.call($$$1.data, $$$1, [elem$$126, match$$37[3]])
  }
  function v377(dataName) {
    function v376(elem$$125) {
      return!!JAM.call($$$1.data, $$$1, [elem$$125, dataName])
    }
    return v376
  }
  function v375() {
    function v374() {
      if(runiqueId.test(this.id)) {
        var v928 = JAM.call($$$1, null, [this]);
        JAM.call(v928.removeAttr, v928, ["id"])
      }
      return
    }
    return JAM.call(this.each, this, [v374])
  }
  function v373() {
    function v372() {
      if(!this.id) {
        this.id = "ui-id-" + (uuid$$1 = uuid$$1 + 1)
      }
      return
    }
    return JAM.call(this.each, this, [v372])
  }
  function v371(zIndex) {
    if(zIndex !== undefined$$2) {
      return JAM.call(this.css, this, ["zIndex", zIndex])
    }
    if(this.length) {
      var elem$$124 = JAM.call($$$1, null, [this[0]]);
      var position;
      var value$$47;
      var v2796 = elem$$124.length;
      if(v2796) {
        v2796 = elem$$124[0] !== document
      }
      var v937 = v2796;
      for(;v937;) {
        position = JAM.call(elem$$124.css, elem$$124, ["position"]);
        var v2797 = position === "absolute";
        if(!v2797) {
          var v3964 = position === "relative";
          if(!v3964) {
            v3964 = position === "fixed"
          }
          v2797 = v3964
        }
        if(v2797) {
          value$$47 = parseInt(JAM.call(elem$$124.css, elem$$124, ["zIndex"]), 10);
          var v2798 = !isNaN(value$$47);
          if(v2798) {
            v2798 = value$$47 !== 0
          }
          if(v2798) {
            return value$$47
          }
        }
        elem$$124 = elem$$124.parent();
        var v2799 = elem$$124.length;
        if(v2799) {
          v2799 = elem$$124[0] !== document
        }
        v937 = v2799
      }
    }
    return 0
  }
  function v370() {
    function v369() {
      return/(auto|scroll)/.test(JAM.call($$$1.css, $$$1, [this, "overflow"]) + JAM.call($$$1.css, $$$1, [this, "overflow-y"]) + JAM.call($$$1.css, $$$1, [this, "overflow-x"]))
    }
    function v368() {
      var v940 = /(relative|absolute|fixed)/.test(JAM.call($$$1.css, $$$1, [this, "position"]));
      if(v940) {
        v940 = /(auto|scroll)/.test(JAM.call($$$1.css, $$$1, [this, "overflow"]) + JAM.call($$$1.css, $$$1, [this, "overflow-y"]) + JAM.call($$$1.css, $$$1, [this, "overflow-x"]))
      }
      return v940
    }
    var scrollParent;
    var v3972 = $$$1.ui.ie;
    if(v3972) {
      v3972 = /(static|relative)/.test(JAM.call(this.css, this, ["position"]))
    }
    var v2804 = v3972;
    if(!v2804) {
      v2804 = /absolute/.test(JAM.call(this.css, this, ["position"]))
    }
    if(v2804) {
      var v2805 = this.parents();
      var v941 = JAM.call(v2805.filter, v2805, [v368]);
      scrollParent = JAM.call(v941.eq, v941, [0])
    }else {
      var v2806 = this.parents();
      var v942 = JAM.call(v2806.filter, v2806, [v369]);
      scrollParent = JAM.call(v942.eq, v942, [0])
    }
    var v944;
    var v3975 = /fixed/.test(JAM.call(this.css, this, ["position"]));
    if(!v3975) {
      v3975 = !scrollParent.length
    }
    if(v3975) {
      v944 = JAM.call($$$1, null, [document])
    }else {
      v944 = scrollParent
    }
    return v944
  }
  function v367(delay$$3, fn$$18) {
    function v366() {
      function v365() {
        JAM.call($$$1, null, [elem$$123]).focus();
        if(fn$$18) {
          JAM.call(fn$$18.call, fn$$18, [elem$$123])
        }
        return
      }
      var elem$$123 = this;
      JAM.call(setTimeout, null, [v365, delay$$3]);
      return
    }
    var v946;
    if(typeof delay$$3 === "number") {
      v946 = JAM.call(this.each, this, [v366])
    }else {
      var v2808 = this._focus;
      v946 = JAM.call(v2808.apply, v2808, [this, arguments])
    }
    return v946
  }
  function focusable(element$$3, isTabIndexNotNaN) {
    var map;
    var mapName;
    var img$$2;
    var nodeName$$1 = element$$3.nodeName.toLowerCase();
    if("area" === nodeName$$1) {
      map = element$$3.parentNode;
      mapName = map.name;
      var v2810 = !element$$3.href;
      if(!v2810) {
        var v3978 = !mapName;
        if(!v3978) {
          v3978 = map.nodeName.toLowerCase() !== "map"
        }
        v2810 = v3978
      }
      if(v2810) {
        return false
      }
      img$$2 = JAM.call($$$1, null, ["img[usemap=#" + mapName + "]"])[0];
      var v950 = !!img$$2;
      if(v950) {
        v950 = visible(img$$2)
      }
      return v950
    }
    var v2813;
    if(/input|select|textarea|button|object/.test(nodeName$$1)) {
      v2813 = !element$$3.disabled
    }else {
      var v3982;
      if("a" === nodeName$$1) {
        var v4766 = element$$3.href;
        if(!v4766) {
          v4766 = isTabIndexNotNaN
        }
        v3982 = v4766
      }else {
        v3982 = isTabIndexNotNaN
      }
      v2813 = v3982
    }
    var v952 = v2813;
    if(v952) {
      v952 = visible(element$$3)
    }
    return v952
  }
  function visible(element$$4) {
    function v364() {
      return JAM.call($$$1.css, $$$1, [this, "visibility"]) === "hidden"
    }
    var v2814 = $$$1.expr.filters;
    var v954 = JAM.call(v2814.visible, v2814, [element$$4]);
    if(v954) {
      var v4768 = JAM.call($$$1, null, [element$$4]).parents().addBack();
      v954 = !JAM.call(v4768.filter, v4768, [v364]).length
    }
    return v954
  }
  var uuid$$1 = 0;
  var runiqueId = /^ui-id-\d+$/;
  var v955 = $$$1.ui;
  if(!v955) {
    v955 = {}
  }
  $$$1.ui = v955;
  if($$$1.ui.version) {
    return
  }
  JAM.call($$$1.extend, $$$1, [$$$1.ui, {version:"1.10.1", keyCode:{BACKSPACE:8, COMMA:188, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, LEFT:37, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SPACE:32, TAB:9, UP:38}}]);
  var v959 = $$$1.fn;
  JAM.call(v959.extend, v959, [{_focus:$$$1.fn.focus, focus:v367, scrollParent:v370, zIndex:v371, uniqueId:v373, removeUniqueId:v375}]);
  var v961 = $$$1.expr[":"];
  var v3987;
  if($$$1.expr.createPseudo) {
    var v4769 = $$$1.expr;
    v3987 = JAM.call(v4769.createPseudo, v4769, [v377])
  }else {
    v3987 = v378
  }
  JAM.call($$$1.extend, $$$1, [v961, {data:v3987, focusable:v379, tabbable:v380}]);
  var v4771 = JAM.call($$$1, null, ["<a>"]);
  if(!JAM.call(v4771.outerWidth, v4771, [1]).jquery) {
    JAM.call($$$1.each, $$$1, [["Width", "Height"], v386])
  }
  if(!$$$1.fn.addBack) {
    $$$1.fn.addBack = v387
  }
  var v4772 = JAM.call($$$1, null, ["<a>"]);
  var v3990 = JAM.call(v4772.data, v4772, ["a-b", "a"]);
  var v2824 = JAM.call(v3990.removeData, v3990, ["a-b"]);
  if(JAM.call(v2824.data, v2824, ["a-b"])) {
    var v967 = $$$1.fn;
    var v5587 = v389($$$1.fn.removeData);
    v967.removeData = v5587
  }
  $$$1.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  $$$1.support.selectstart = "onselectstart" in document.createElement("div");
  var v971 = $$$1.fn;
  JAM.call(v971.extend, v971, [{disableSelection:v391, enableSelection:v392}]);
  JAM.call($$$1.extend, $$$1, [$$$1.ui, {plugin:{add:v393, call:v394}, hasScroll:v395}]);
  return
}
function v363(window$$1, undefined$$1) {
  function v362(i$$95, name$$60) {
    function v361(size$$4) {
      function v360(i$$96) {
        var self$$14 = jQuery$$1(this);
        JAM.call(JAM.get(self$$14, type$$65, JAM.policy.p3), self$$14, [JAM.call(size$$4.call, size$$4, [this, i$$96, JAM.call(JAM.get(self$$14, type$$65, JAM.policy.p3), self$$14, [])])]);
        return
      }
      var elem$$122 = this[0];
      if(!elem$$122) {
        var v976;
        if(size$$4 == null) {
          v976 = null
        }else {
          v976 = this
        }
        return v976
      }
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [size$$4])) {
        return JAM.call(this.each, this, [v360])
      }
      var v979;
      var v3993 = "scrollTo" in elem$$122;
      if(v3993) {
        v3993 = elem$$122.document
      }
      if(v3993) {
        var v3994 = elem$$122.document.compatMode === "CSS1Compat";
        if(v3994) {
          var v4775 = elem$$122.document.documentElement;
          var v4776 = "client" + name$$60;
          introspect(JAM.policy.p3) {
            v3994 = v4775[v4776]
          }
        }
        var v2831 = v3994;
        if(!v2831) {
          var v3995 = elem$$122.document.body;
          var v3996 = "client" + name$$60;
          introspect(JAM.policy.p3) {
            v2831 = v3995[v3996]
          }
        }
        v979 = v2831
      }else {
        var v2832;
        if(elem$$122.nodeType === 9) {
          var v4779 = elem$$122.documentElement;
          var v4780 = "client" + name$$60;
          introspect(JAM.policy.p3) {
            var v3998 = v4779[v4780]
          }
          var v4781 = elem$$122.body;
          var v4782 = "scroll" + name$$60;
          introspect(JAM.policy.p3) {
            var v3999 = v4781[v4782]
          }
          var v4783 = elem$$122.documentElement;
          var v4784 = "scroll" + name$$60;
          introspect(JAM.policy.p3) {
            var v4000 = v4783[v4784]
          }
          var v4785 = elem$$122.body;
          var v4786 = "offset" + name$$60;
          introspect(JAM.policy.p3) {
            var v4001 = v4785[v4786]
          }
          var v4787 = elem$$122.documentElement;
          var v4788 = "offset" + name$$60;
          introspect(JAM.policy.p3) {
            var v4002 = v4787[v4788]
          }
          v2832 = JAM.call(Math.max, Math, [v3998, v3999, v4000, v4001, v4002])
        }else {
          var v4003;
          if(size$$4 === undefined$$1) {
            v4003 = JAM.call(jQuery$$1.css, jQuery$$1, [elem$$122, type$$65])
          }else {
            var v5178;
            if(typeof size$$4 === "string") {
              v5178 = size$$4
            }else {
              v5178 = size$$4 + "px"
            }
            v4003 = JAM.call(this.css, this, [type$$65, v5178])
          }
          v2832 = v4003
        }
        v979 = v2832
      }
      return v979
    }
    function v359(margin) {
      var v980;
      if(this[0]) {
        var v2834 = this[0];
        var v4005;
        if(margin) {
          v4005 = "margin"
        }else {
          v4005 = "border"
        }
        v980 = JAM.call(jQuery$$1.css, jQuery$$1, [v2834, type$$65, false, v4005])
      }else {
        v980 = null
      }
      return v980
    }
    function v358() {
      var v981;
      if(this[0]) {
        v981 = JAM.call(jQuery$$1.css, jQuery$$1, [this[0], type$$65, false, "padding"])
      }else {
        v981 = null
      }
      return v981
    }
    var type$$65 = name$$60.toLowerCase();
    JAM.set(jQuery$$1.fn, "inner" + name$$60, v358, JAM.policy.p2);
    JAM.set(jQuery$$1.fn, "outer" + name$$60, v359, JAM.policy.p2);
    JAM.set(jQuery$$1.fn, type$$65, v361, JAM.policy.p2);
    return
  }
  function v357(i$$94, name$$59) {
    function v356(val$$7) {
      function v355() {
        win = getWindow(this);
        if(win) {
          var v2839;
          if(!i$$94) {
            v2839 = val$$7
          }else {
            v2839 = jQuery$$1(win).scrollLeft()
          }
          var v987 = v2839;
          var v2840;
          if(i$$94) {
            v2840 = val$$7
          }else {
            v2840 = jQuery$$1(win).scrollTop()
          }
          win.scrollTo(v987, v2840)
        }else {
          JAM.set(this, method$$1, val$$7, JAM.policy.p2)
        }
        return
      }
      var elem$$121 = this[0];
      var win;
      if(!elem$$121) {
        return null
      }
      if(val$$7 !== undefined$$1) {
        return JAM.call(this.each, this, [v355])
      }else {
        win = getWindow(elem$$121);
        var v990;
        if(win) {
          var v2841;
          if("pageXOffset" in win) {
            var v4791;
            if(i$$94) {
              v4791 = "pageYOffset"
            }else {
              v4791 = "pageXOffset"
            }
            var v4009 = v4791;
            introspect(JAM.policy.p3) {
              v2841 = win[v4009]
            }
          }else {
            var v4792 = jQuery$$1.support.boxModel;
            if(v4792) {
              var v5180 = win.document.documentElement;
              introspect(JAM.policy.p3) {
                v4792 = v5180[method$$1]
              }
            }
            var v4010 = v4792;
            if(!v4010) {
              var v4793 = win.document.body;
              introspect(JAM.policy.p3) {
                v4010 = v4793[method$$1]
              }
            }
            v2841 = v4010
          }
          v990 = v2841
        }else {
          introspect(JAM.policy.p3) {
            v990 = elem$$121[method$$1]
          }
        }
        return v990
      }
      return
    }
    var method$$1 = "scroll" + name$$59;
    JAM.set(jQuery$$1.fn, method$$1, v356, JAM.policy.p2);
    return
  }
  function v354() {
    function v353() {
      var v993 = this.offsetParent;
      if(!v993) {
        v993 = document$$1.body
      }
      var offsetParent$$2 = v993;
      var v2843 = offsetParent$$2;
      if(v2843) {
        var v4012 = !/^body|html$/i.test(offsetParent$$2.nodeName);
        if(v4012) {
          v4012 = JAM.call(jQuery$$1.css, jQuery$$1, [offsetParent$$2, "position"]) === "static"
        }
        v2843 = v4012
      }
      var v994 = v2843;
      for(;v994;) {
        offsetParent$$2 = offsetParent$$2.offsetParent;
        var v2844 = offsetParent$$2;
        if(v2844) {
          var v4013 = !/^body|html$/i.test(offsetParent$$2.nodeName);
          if(v4013) {
            v4013 = JAM.call(jQuery$$1.css, jQuery$$1, [offsetParent$$2, "position"]) === "static"
          }
          v2844 = v4013
        }
        v994 = v2844
      }
      return offsetParent$$2
    }
    return JAM.call(this.map, this, [v353])
  }
  function v352() {
    if(!this[0]) {
      return null
    }
    var elem$$120 = this[0];
    var offsetParent$$1 = this.offsetParent();
    var offset$$12 = this.offset();
    var v996;
    if(/^body|html$/i.test(offsetParent$$1[0].nodeName)) {
      v996 = {top:0, left:0}
    }else {
      v996 = offsetParent$$1.offset()
    }
    var parentOffset = v996;
    var v997 = offset$$12;
    var v4015 = v997.top;
    var v4800 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$120, "marginTop", true]));
    if(!v4800) {
      v4800 = 0
    }
    v997.top = v4015 - v4800;
    var v998 = offset$$12;
    var v4017 = v998.left;
    var v4801 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$120, "marginLeft", true]));
    if(!v4801) {
      v4801 = 0
    }
    v998.left = v4017 - v4801;
    var v999 = parentOffset;
    var v4019 = v999.top;
    var v4802 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [offsetParent$$1[0], "borderTopWidth", true]));
    if(!v4802) {
      v4802 = 0
    }
    v999.top = v4019 + v4802;
    var v1000 = parentOffset;
    var v4021 = v1000.left;
    var v4803 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [offsetParent$$1[0], "borderLeftWidth", true]));
    if(!v4803) {
      v4803 = 0
    }
    v1000.left = v4021 + v4803;
    return{top:offset$$12.top - parentOffset.top, left:offset$$12.left - parentOffset.left}
  }
  function v351(elem$$119, options$$7, i$$93) {
    if(/static/.test(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "position"]))) {
      elem$$119.style.position = "relative"
    }
    var curElem = jQuery$$1(elem$$119);
    var curOffset = curElem.offset();
    var v1005 = parseInt(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "top", true]), 10);
    if(!v1005) {
      v1005 = 0
    }
    var curTop = v1005;
    var v1006 = parseInt(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "left", true]), 10);
    if(!v1006) {
      v1006 = 0
    }
    var curLeft = v1006;
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [options$$7])) {
      options$$7 = JAM.call(options$$7.call, options$$7, [elem$$119, i$$93, curOffset])
    }
    var props$$3 = {top:options$$7.top - curOffset.top + curTop, left:options$$7.left - curOffset.left + curLeft};
    if("using" in options$$7) {
      var v1010 = options$$7.using;
      JAM.call(v1010.call, v1010, [elem$$119, props$$3])
    }else {
      JAM.call(curElem.css, curElem, [props$$3])
    }
    return
  }
  function v350(body$$4) {
    var top$$4 = body$$4.offsetTop;
    var left$$7 = body$$4.offsetLeft;
    jQuery$$1.offset.initialize();
    if(jQuery$$1.offset.doesNotIncludeMarginInBodyOffset) {
      var v2859 = top$$4;
      var v4027 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$4, "marginTop", true]));
      if(!v4027) {
        v4027 = 0
      }
      top$$4 = v2859 + v4027;
      var v2861 = left$$7;
      var v4028 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$4, "marginLeft", true]));
      if(!v4028) {
        v4028 = 0
      }
      left$$7 = v2861 + v4028
    }
    return{top:top$$4, left:left$$7}
  }
  function v349() {
    var body$$3 = document$$1.body;
    var container = document$$1.createElement("div");
    var innerDiv;
    var checkDiv;
    var table$$1;
    var td;
    var v1014 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$3, "marginTop", true]));
    if(!v1014) {
      v1014 = 0
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
    if(!v1021) {
      v1021 = checkDiv.offsetTop === 15
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
    return
  }
  function v348(options$$6) {
    function v347(i$$92) {
      var v1026 = jQuery$$1.offset;
      JAM.call(v1026.setOffset, v1026, [this, options$$6, i$$92]);
      return
    }
    var elem$$118 = this[0];
    if(options$$6) {
      return JAM.call(this.each, this, [v347])
    }
    var v2874 = !elem$$118;
    if(!v2874) {
      v2874 = !elem$$118.ownerDocument
    }
    if(v2874) {
      return null
    }
    if(elem$$118 === elem$$118.ownerDocument.body) {
      var v1028 = jQuery$$1.offset;
      return JAM.call(v1028.bodyOffset, v1028, [elem$$118])
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
    if(defaultView$$1) {
      v1031 = defaultView$$1.getComputedStyle(elem$$118, null)
    }else {
      v1031 = elem$$118.currentStyle
    }
    var prevComputedStyle = v1031;
    var top$$3 = elem$$118.offsetTop;
    var left$$6 = elem$$118.offsetLeft;
    var v2876 = elem$$118 = elem$$118.parentNode;
    if(v2876) {
      var v4032 = elem$$118 !== body$$2;
      if(v4032) {
        v4032 = elem$$118 !== docElem$$1
      }
      v2876 = v4032
    }
    var v1037 = v2876;
    for(;v1037;) {
      var v2877 = jQuery$$1.offset.supportsFixedPosition;
      if(v2877) {
        v2877 = prevComputedStyle.position === "fixed"
      }
      if(v2877) {
        break
      }
      var v1033;
      if(defaultView$$1) {
        v1033 = defaultView$$1.getComputedStyle(elem$$118, null)
      }else {
        v1033 = elem$$118.currentStyle
      }
      computedStyle$$1 = v1033;
      top$$3 = top$$3 - elem$$118.scrollTop;
      left$$6 = left$$6 - elem$$118.scrollLeft;
      if(elem$$118 === offsetParent) {
        top$$3 = top$$3 + elem$$118.offsetTop;
        left$$6 = left$$6 + elem$$118.offsetLeft;
        var v2882 = jQuery$$1.offset.doesNotAddBorder;
        if(v2882) {
          var v4808 = jQuery$$1.offset.doesAddBorderForTableAndCells;
          if(v4808) {
            v4808 = /^t(able|d|h)$/i.test(elem$$118.nodeName)
          }
          v2882 = !v4808
        }
        if(v2882) {
          var v2883 = top$$3;
          var v4037 = parseFloat(computedStyle$$1.borderTopWidth);
          if(!v4037) {
            v4037 = 0
          }
          top$$3 = v2883 + v4037;
          var v2885 = left$$6;
          var v4038 = parseFloat(computedStyle$$1.borderLeftWidth);
          if(!v4038) {
            v4038 = 0
          }
          left$$6 = v2885 + v4038
        }
        prevOffsetParent = offsetParent;
        offsetParent = elem$$118.offsetParent
      }
      var v2887 = jQuery$$1.offset.subtractsBorderForOverflowNotVisible;
      if(v2887) {
        v2887 = computedStyle$$1.overflow !== "visible"
      }
      if(v2887) {
        var v2888 = top$$3;
        var v4041 = parseFloat(computedStyle$$1.borderTopWidth);
        if(!v4041) {
          v4041 = 0
        }
        top$$3 = v2888 + v4041;
        var v2890 = left$$6;
        var v4042 = parseFloat(computedStyle$$1.borderLeftWidth);
        if(!v4042) {
          v4042 = 0
        }
        left$$6 = v2890 + v4042
      }
      prevComputedStyle = computedStyle$$1;
      var v2892 = elem$$118 = elem$$118.parentNode;
      if(v2892) {
        var v4043 = elem$$118 !== body$$2;
        if(v4043) {
          v4043 = elem$$118 !== docElem$$1
        }
        v2892 = v4043
      }
      v1037 = v2892
    }
    var v2893 = prevComputedStyle.position === "relative";
    if(!v2893) {
      v2893 = prevComputedStyle.position === "static"
    }
    if(v2893) {
      top$$3 = top$$3 + body$$2.offsetTop;
      left$$6 = left$$6 + body$$2.offsetLeft
    }
    var v2896 = jQuery$$1.offset.supportsFixedPosition;
    if(v2896) {
      v2896 = prevComputedStyle.position === "fixed"
    }
    if(v2896) {
      top$$3 = top$$3 + JAM.call(Math.max, Math, [docElem$$1.scrollTop, body$$2.scrollTop]);
      left$$6 = left$$6 + JAM.call(Math.max, Math, [docElem$$1.scrollLeft, body$$2.scrollLeft])
    }
    return{top:top$$3, left:left$$6}
  }
  function v346(options$$5) {
    function v345(i$$91) {
      var v1040 = jQuery$$1.offset;
      JAM.call(v1040.setOffset, v1040, [this, options$$5, i$$91]);
      return
    }
    var elem$$117 = this[0];
    if(options$$5) {
      return JAM.call(this.each, this, [v345])
    }
    var v2901 = !elem$$117;
    if(!v2901) {
      v2901 = !elem$$117.ownerDocument
    }
    if(v2901) {
      return null
    }
    if(elem$$117 === elem$$117.ownerDocument.body) {
      var v1042 = jQuery$$1.offset;
      return JAM.call(v1042.bodyOffset, v1042, [elem$$117])
    }
    var box = elem$$117.getBoundingClientRect();
    var doc$$3 = elem$$117.ownerDocument;
    var body$$1 = doc$$3.body;
    var docElem = doc$$3.documentElement;
    var v1044 = docElem.clientTop;
    if(!v1044) {
      var v2903 = body$$1.clientTop;
      if(!v2903) {
        v2903 = 0
      }
      v1044 = v2903
    }
    var clientTop = v1044;
    var v1045 = docElem.clientLeft;
    if(!v1045) {
      var v2905 = body$$1.clientLeft;
      if(!v2905) {
        v2905 = 0
      }
      v1045 = v2905
    }
    var clientLeft = v1045;
    var v2907 = box.top;
    var v4058 = self.pageYOffset;
    if(!v4058) {
      var v5194 = jQuery$$1.support.boxModel;
      if(v5194) {
        v5194 = docElem.scrollTop
      }
      var v4817 = v5194;
      if(!v4817) {
        v4817 = body$$1.scrollTop
      }
      v4058 = v4817
    }
    var top$$2 = v2907 + v4058 - clientTop;
    var v2909 = box.left;
    var v4059 = self.pageXOffset;
    if(!v4059) {
      var v5196 = jQuery$$1.support.boxModel;
      if(v5196) {
        v5196 = docElem.scrollLeft
      }
      var v4819 = v5196;
      if(!v4819) {
        v4819 = body$$1.scrollLeft
      }
      v4059 = v4819
    }
    var left$$5 = v2909 + v4059 - clientLeft;
    return{top:top$$2, left:left$$5}
  }
  function v344(elem$$116) {
    function v343(fn$$17) {
      return elem$$116 === fn$$17.elem
    }
    return JAM.call(jQuery$$1.grep, jQuery$$1, [jQuery$$1.timers, v343]).length
  }
  function v342(fx$$1) {
    var v2912 = fx$$1.elem.style;
    if(v2912) {
      var v4821 = fx$$1.elem.style;
      var v4822 = fx$$1.prop;
      introspect(JAM.policy.p3) {
        var v4061 = v4821[v4822]
      }
      v2912 = v4061 != null
    }
    if(v2912) {
      var v1050 = fx$$1.elem.style;
      var v1051 = fx$$1.prop;
      var v4062;
      var v5199 = fx$$1.prop === "width";
      if(!v5199) {
        v5199 = fx$$1.prop === "height"
      }
      if(v5199) {
        v4062 = JAM.call(Math.max, Math, [0, fx$$1.now])
      }else {
        v4062 = fx$$1.now
      }
      JAM.set(v1050, v1051, v4062 + fx$$1.unit, JAM.policy.p2)
    }else {
      JAM.set(fx$$1.elem, fx$$1.prop, fx$$1.now, JAM.policy.p2)
    }
    return
  }
  function v341(fx) {
    JAM.call(jQuery$$1.style, jQuery$$1, [fx.elem, "opacity", fx.now]);
    return
  }
  function v340() {
    clearInterval(timerId);
    timerId = null;
    return
  }
  function v339() {
    var timers$$1 = jQuery$$1.timers;
    var i$$90 = 0;
    var v1059 = i$$90 < timers$$1.length;
    for(;v1059;) {
      if(!JAM.call(JAM.get(timers$$1, i$$90, JAM.policy.p3), timers$$1, [])) {
        var v1057 = i$$90;
        i$$90 = i$$90 - 1;
        JAM.call(timers$$1.splice, timers$$1, [v1057, 1])
      }
      i$$90 = i$$90 + 1;
      v1059 = i$$90 < timers$$1.length
    }
    if(!timers$$1.length) {
      jQuery$$1.fx.stop()
    }
    return
  }
  function v338(gotoEnd$$2) {
    var t$$1 = now();
    var done$$2 = true;
    var v2920 = gotoEnd$$2;
    if(!v2920) {
      v2920 = t$$1 >= this.options.duration + this.startTime
    }
    if(v2920) {
      this.now = this.end;
      this.pos = this.state = 1;
      this.update();
      JAM.set(this.options.curAnim, this.prop, true, JAM.policy.p2);
      var i$$89;
      for(i$$89 in this.options.curAnim) {
        var v4065 = this.options.curAnim;
        introspect(JAM.policy.p3) {
          var v2923 = v4065[i$$89]
        }
        if(v2923 !== true) {
          done$$2 = false
        }
      }
      if(done$$2) {
        if(this.options.display != null) {
          this.elem.style.overflow = this.options.overflow;
          var old$$7 = JAM.call(jQuery$$1.data, jQuery$$1, [this.elem, "olddisplay"]);
          var v1068 = this.elem.style;
          var v2928;
          if(old$$7) {
            v2928 = old$$7
          }else {
            v2928 = this.options.display
          }
          v1068.display = v2928;
          if(JAM.call(jQuery$$1.css, jQuery$$1, [this.elem, "display"]) === "none") {
            this.elem.style.display = "block"
          }
        }
        if(this.options.hide) {
          jQuery$$1(this.elem).hide()
        }
        var v2933 = this.options.hide;
        if(!v2933) {
          v2933 = this.options.show
        }
        if(v2933) {
          var p$$3;
          for(p$$3 in this.options.curAnim) {
            var v1074 = this.elem;
            var v2935 = this.options.orig;
            introspect(JAM.policy.p3) {
              var v1075 = v2935[p$$3]
            }
            JAM.call(jQuery$$1.style, jQuery$$1, [v1074, p$$3, v1075])
          }
        }
        var v1078 = this.options.complete;
        JAM.call(v1078.call, v1078, [this.elem])
      }
      return false
    }else {
      var n$$5 = t$$1 - this.startTime;
      this.state = n$$5 / this.options.duration;
      var v1082 = this.options.specialEasing;
      if(v1082) {
        var v2939 = this.options.specialEasing;
        var v2940 = this.prop;
        introspect(JAM.policy.p3) {
          v1082 = v2939[v2940]
        }
      }
      var specialEasing = v1082;
      var v1083 = this.options.easing;
      if(!v1083) {
        var v2942;
        if(jQuery$$1.easing.swing) {
          v2942 = "swing"
        }else {
          v2942 = "linear"
        }
        v1083 = v2942
      }
      var defaultEasing = v1083;
      var v1084 = jQuery$$1.easing;
      var v5588 = JAM.call(JAM.get(v1084, specialEasing || defaultEasing, JAM.policy.p3), v1084, [this.state, n$$5, 0, 1, this.options.duration]);
      this.pos = v5588;
      this.now = this.start + (this.end - this.start) * this.pos;
      this.update()
    }
    return true
  }
  function v337() {
    var v1091 = this.options.orig;
    var v1092 = this.prop;
    var v5589 = JAM.call(jQuery$$1.style, jQuery$$1, [this.elem, this.prop]);
    JAM.set(v1091, v1092, v5589, JAM.policy.p2);
    this.options.hide = true;
    JAM.call(this.custom, this, [this.cur(), 0]);
    return
  }
  function v336() {
    var v1095 = this.options.orig;
    var v1096 = this.prop;
    var v5590 = JAM.call(jQuery$$1.style, jQuery$$1, [this.elem, this.prop]);
    JAM.set(v1095, v1096, v5590, JAM.policy.p2);
    this.options.show = true;
    var v2953;
    var v4829 = this.prop === "width";
    if(!v4829) {
      v4829 = this.prop === "height"
    }
    if(v4829) {
      v2953 = 1
    }else {
      v2953 = 0
    }
    JAM.call(this.custom, this, [v2953, this.cur()]);
    jQuery$$1(this.elem).show();
    return
  }
  function v335(from, to$$1, unit$$1) {
    function t(gotoEnd$$1) {
      return JAM.call(self$$13.step, self$$13, [gotoEnd$$1])
    }
    var v5591 = now();
    this.startTime = v5591;
    this.start = from;
    this.end = to$$1;
    var v1101 = unit$$1;
    if(!v1101) {
      var v2955 = this.unit;
      if(!v2955) {
        v2955 = "px"
      }
      v1101 = v2955
    }
    this.unit = v1101;
    this.now = this.start;
    this.pos = this.state = 0;
    var self$$13 = this;
    t.elem = this.elem;
    var v2957 = t();
    if(v2957) {
      var v4830 = jQuery$$1.timers;
      var v4079 = JAM.call(v4830.push, v4830, [t]);
      if(v4079) {
        v4079 = !timerId
      }
      v2957 = v4079
    }
    if(v2957) {
      timerId = JAM.call(setInterval, null, [jQuery$$1.fx.tick, 13])
    }
    return
  }
  function v334(force$$2) {
    var v4831 = this.elem;
    var v4832 = this.prop;
    introspect(JAM.policy.p3) {
      var v4080 = v4831[v4832]
    }
    var v2959 = v4080 != null;
    if(v2959) {
      var v4081 = !this.elem.style;
      if(!v4081) {
        var v5205 = this.elem.style;
        var v5206 = this.prop;
        introspect(JAM.policy.p3) {
          var v4834 = v5205[v5206]
        }
        v4081 = v4834 == null
      }
      v2959 = v4081
    }
    if(v2959) {
      var v1104 = this.elem;
      var v1105 = this.prop;
      introspect(JAM.policy.p3) {
        return v1104[v1105]
      }
    }
    var r$$2 = parseFloat(JAM.call(jQuery$$1.css, jQuery$$1, [this.elem, this.prop, force$$2]));
    var v1108;
    var v4082 = r$$2;
    if(v4082) {
      v4082 = r$$2 > -1E4
    }
    if(v4082) {
      v1108 = r$$2
    }else {
      var v2962 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [this.elem, this.prop]));
      if(!v2962) {
        v2962 = 0
      }
      v1108 = v2962
    }
    return v1108
  }
  function v333() {
    if(this.options.step) {
      var v1109 = this.options.step;
      JAM.call(v1109.call, v1109, [this.elem, this.now, this])
    }
    var v4085 = jQuery$$1.fx.step;
    var v4086 = this.prop;
    introspect(JAM.policy.p3) {
      var v2966 = v4085[v4086]
    }
    if(!v2966) {
      v2966 = jQuery$$1.fx.step._default
    }
    JAM.call(v2966, null, [this]);
    var v4089 = this.prop === "height";
    if(!v4089) {
      v4089 = this.prop === "width"
    }
    var v2967 = v4089;
    if(v2967) {
      v2967 = this.elem.style
    }
    if(v2967) {
      this.elem.style.display = "block"
    }
    return
  }
  function v332(elem$$115, options$$4, prop$$7) {
    this.options = options$$4;
    this.elem = elem$$115;
    this.prop = prop$$7;
    if(!options$$4.orig) {
      options$$4.orig = {}
    }
    return
  }
  function v331(p$$2, n$$4, firstNum$$1, diff$$2) {
    return(-Math.cos(p$$2 * Math.PI) / 2 + 0.5) * diff$$2 + firstNum$$1
  }
  function v330(p$$1, n$$3, firstNum, diff$$1) {
    return firstNum + diff$$1 * p$$1
  }
  function v329(speed$$5, easing$$1, fn$$16) {
    function v328() {
      if(opt$$1.queue !== false) {
        jQuery$$1(this).dequeue()
      }
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [opt$$1.old])) {
        var v1121 = opt$$1.old;
        JAM.call(v1121.call, v1121, [this])
      }
      return
    }
    var v1123;
    var v4092 = speed$$5;
    if(v4092) {
      v4092 = typeof speed$$5 === "object"
    }
    if(v4092) {
      v1123 = speed$$5
    }else {
      var v4093 = fn$$16;
      if(!v4093) {
        var v5208 = !fn$$16;
        if(v5208) {
          v5208 = easing$$1
        }
        var v4845 = v5208;
        if(!v4845) {
          var v5209 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [speed$$5]);
          if(v5209) {
            v5209 = speed$$5
          }
          v4845 = v5209
        }
        v4093 = v4845
      }
      var v2973 = v4093;
      var v4094 = fn$$16 && easing$$1;
      if(!v4094) {
        var v4847 = easing$$1;
        if(v4847) {
          var v5211 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [easing$$1]);
          if(v5211) {
            v5211 = easing$$1
          }
          v4847 = v5211
        }
        v4094 = v4847
      }
      v1123 = {complete:v2973, duration:speed$$5, easing:v4094}
    }
    var opt$$1 = v1123;
    var v1124;
    if(jQuery$$1.fx.off) {
      v1124 = 0
    }else {
      var v2976;
      if(typeof opt$$1.duration === "number") {
        v2976 = opt$$1.duration
      }else {
        var v4850 = jQuery$$1.fx.speeds;
        var v4851 = opt$$1.duration;
        introspect(JAM.policy.p3) {
          var v4096 = v4850[v4851]
        }
        if(!v4096) {
          v4096 = jQuery$$1.fx.speeds._default
        }
        v2976 = v4096
      }
      v1124 = v2976
    }
    opt$$1.duration = v1124;
    opt$$1.old = opt$$1.complete;
    opt$$1.complete = v328;
    return opt$$1
  }
  function v327(name$$58, props$$2) {
    function v326(speed$$4, callback$$41) {
      return JAM.call(this.animate, this, [props$$2, speed$$4, callback$$41])
    }
    JAM.set(jQuery$$1.fn, name$$58, v326, JAM.policy.p2);
    return
  }
  function v325(clearQueue, gotoEnd) {
    function v324() {
      var i$$88 = timers.length - 1;
      var v1128 = i$$88 >= 0;
      for(;v1128;) {
        introspect(JAM.policy.p3) {
          var v4098 = timers[i$$88]
        }
        if(v4098.elem === this) {
          if(gotoEnd) {
            JAM.call(timers[i$$88], timers, [true])
          }
          JAM.call(timers.splice, timers, [i$$88, 1])
        }
        i$$88 = i$$88 - 1;
        v1128 = i$$88 >= 0
      }
      return
    }
    var timers = jQuery$$1.timers;
    if(clearQueue) {
      JAM.call(this.queue, this, [[]])
    }
    JAM.call(this.each, this, [v324]);
    if(!gotoEnd) {
      this.dequeue()
    }
    return this
  }
  function v323(prop$$6, speed$$3, easing, callback$$40) {
    function v322() {
      function v321(name$$57, val$$6) {
        var e$$30 = JAM.new(jQuery$$1.fx, [self$$12, opt, name$$57]);
        if(rfxtypes.test(val$$6)) {
          var v2979;
          if(val$$6 === "toggle") {
            var v4099;
            if(hidden) {
              v4099 = "show"
            }else {
              v4099 = "hide"
            }
            v2979 = v4099
          }else {
            v2979 = val$$6
          }
          JAM.call(JAM.get(e$$30, v2979, JAM.policy.p3), e$$30, [prop$$6])
        }else {
          var parts$$3 = rfxnum.exec(val$$6);
          var v1132 = JAM.call(e$$30.cur, e$$30, [true]);
          if(!v1132) {
            v1132 = 0
          }
          var start$$4 = v1132;
          if(parts$$3) {
            var end$$1 = parseFloat(parts$$3[2]);
            var v1134 = parts$$3[3];
            if(!v1134) {
              v1134 = "px"
            }
            var unit = v1134;
            if(unit !== "px") {
              JAM.set(self$$12.style, name$$57, (end$$1 || 1) + unit, JAM.policy.p2);
              start$$4 = (end$$1 || 1) / JAM.call(e$$30.cur, e$$30, [true]) * start$$4;
              JAM.set(self$$12.style, name$$57, start$$4 + unit, JAM.policy.p2)
            }
            if(parts$$3[1]) {
              var v4101;
              if(parts$$3[1] === "-=") {
                v4101 = -1
              }else {
                v4101 = 1
              }
              end$$1 = v4101 * end$$1 + start$$4
            }
            JAM.call(e$$30.custom, e$$30, [start$$4, end$$1, unit])
          }else {
            JAM.call(e$$30.custom, e$$30, [start$$4, val$$6, ""])
          }
        }
        return
      }
      var opt = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, optall]);
      var p;
      var v1142 = this.nodeType === 1;
      if(v1142) {
        var v2987 = jQuery$$1(this);
        v1142 = JAM.call(v2987.is, v2987, [":hidden"])
      }
      var hidden = v1142;
      var self$$12 = this;
      for(p in prop$$6) {
        var name$$56 = p.replace(rdashAlpha, fcamelCase);
        if(p !== name$$56) {
          JAM.set(prop$$6, name$$56, JAM.get(prop$$6, p, JAM.policy.p4), JAM.policy.p4);
          delete prop$$6[p];
          p = name$$56
        }
        introspect(JAM.policy.p3) {
          var v4855 = prop$$6[p]
        }
        var v4102 = v4855 === "hide";
        if(v4102) {
          v4102 = hidden
        }
        var v2988 = v4102;
        if(!v2988) {
          introspect(JAM.policy.p3) {
            var v4856 = prop$$6[p]
          }
          var v4103 = v4856 === "show";
          if(v4103) {
            v4103 = !hidden
          }
          v2988 = v4103
        }
        if(v2988) {
          var v1144 = opt.complete;
          return JAM.call(v1144.call, v1144, [this])
        }
        var v4105 = p === "height";
        if(!v4105) {
          v4105 = p === "width"
        }
        var v2989 = v4105;
        if(v2989) {
          v2989 = this.style
        }
        if(v2989) {
          var v1146 = opt;
          var v5592 = JAM.call(jQuery$$1.css, jQuery$$1, [this, "display"]);
          v1146.display = v5592;
          opt.overflow = this.style.overflow
        }
        introspect(JAM.policy.p3) {
          var v2990 = prop$$6[p]
        }
        if(JAM.call(jQuery$$1.isArray, jQuery$$1, [v2990])) {
          var v2991 = opt.specialEasing;
          if(!v2991) {
            v2991 = {}
          }
          var v1149 = opt.specialEasing = v2991;
          introspect(JAM.policy.p3) {
            var v2992 = prop$$6[p]
          }
          JAM.set(v1149, p, v2992[1], JAM.policy.p2);
          introspect(JAM.policy.p3) {
            var v1150 = prop$$6[p]
          }
          JAM.set(prop$$6, p, v1150[0], JAM.policy.p2)
        }
      }
      if(opt.overflow != null) {
        this.style.overflow = "hidden"
      }
      var v1154 = opt;
      var v5593 = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, prop$$6]);
      v1154.curAnim = v5593;
      JAM.call(jQuery$$1.each, jQuery$$1, [prop$$6, v321]);
      return true
    }
    var optall = JAM.call(jQuery$$1.speed, jQuery$$1, [speed$$3, easing, callback$$40]);
    if(JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [prop$$6])) {
      return JAM.call(this.each, this, [optall.complete])
    }
    var v2994;
    if(optall.queue === false) {
      v2994 = "each"
    }else {
      v2994 = "queue"
    }
    return JAM.call(JAM.get(this, v2994, JAM.policy.p3), this, [v322])
  }
  function v320(speed$$2, to, callback$$39) {
    var v4859 = JAM.call(this.filter, this, [":hidden"]);
    var v1158 = JAM.call(v4859.css, v4859, ["opacity", 0]).show().end();
    return JAM.call(v1158.animate, v1158, [{opacity:to}, speed$$2, callback$$39])
  }
  function v319(fn$$15, fn2) {
    function v318() {
      var v1160;
      if(bool) {
        v1160 = fn$$15
      }else {
        var v2996 = jQuery$$1(this);
        v1160 = JAM.call(v2996.is, v2996, [":hidden"])
      }
      var state$$1 = v1160;
      var v1161 = jQuery$$1(this);
      var v2997;
      if(state$$1) {
        v2997 = "show"
      }else {
        v2997 = "hide"
      }
      JAM.call(JAM.get(v1161, v2997, JAM.policy.p3), v1161, []);
      return
    }
    var bool = typeof fn$$15 === "boolean";
    var v2998 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [fn$$15]);
    if(v2998) {
      v2998 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [fn2])
    }
    if(v2998) {
      var v1164 = this._toggle;
      JAM.call(v1164.apply, v1164, [this, arguments])
    }else {
      var v2999 = fn$$15 == null;
      if(!v2999) {
        v2999 = bool
      }
      if(v2999) {
        JAM.call(this.each, this, [v318])
      }else {
        JAM.call(this.animate, this, [genFx("toggle", 3), fn$$15, fn2])
      }
    }
    return this
  }
  function v317(speed$$1, callback$$38) {
    var v3000 = speed$$1;
    if(!v3000) {
      v3000 = speed$$1 === 0
    }
    if(v3000) {
      return JAM.call(this.animate, this, [genFx("hide", 3), speed$$1, callback$$38])
    }else {
      var i$$87 = 0;
      var l$$24 = this.length;
      var v1173 = i$$87 < l$$24;
      for(;v1173;) {
        introspect(JAM.policy.p3) {
          var v1169 = this[i$$87]
        }
        var old$$6 = JAM.call(jQuery$$1.data, jQuery$$1, [v1169, "olddisplay"]);
        var v3001 = !old$$6;
        if(v3001) {
          v3001 = old$$6 !== "none"
        }
        if(v3001) {
          introspect(JAM.policy.p3) {
            var v1170 = this[i$$87]
          }
          introspect(JAM.policy.p3) {
            var v3002 = this[i$$87]
          }
          JAM.call(jQuery$$1.data, jQuery$$1, [v1170, "olddisplay", JAM.call(jQuery$$1.css, jQuery$$1, [v3002, "display"])])
        }
        i$$87 = i$$87 + 1;
        v1173 = i$$87 < l$$24
      }
      var j$$6 = 0;
      var k$$3 = this.length;
      var v1175 = j$$6 < k$$3;
      for(;v1175;) {
        introspect(JAM.policy.p3) {
          var v3003 = this[j$$6]
        }
        v3003.style.display = "none";
        j$$6 = j$$6 + 1;
        v1175 = j$$6 < k$$3
      }
      return this
    }
    return
  }
  function v316(speed, callback$$37) {
    var v3004 = speed;
    if(!v3004) {
      v3004 = speed === 0
    }
    if(v3004) {
      return JAM.call(this.animate, this, [genFx("show", 3), speed, callback$$37])
    }else {
      var i$$86 = 0;
      var l$$23 = this.length;
      var v1186 = i$$86 < l$$23;
      for(;v1186;) {
        introspect(JAM.policy.p3) {
          var v1178 = this[i$$86]
        }
        var old$$5 = JAM.call(jQuery$$1.data, jQuery$$1, [v1178, "olddisplay"]);
        introspect(JAM.policy.p3) {
          var v3005 = this[i$$86]
        }
        v3005.style.display = old$$5 || "";
        introspect(JAM.policy.p3) {
          var v4112 = this[i$$86]
        }
        if(JAM.call(jQuery$$1.css, jQuery$$1, [v4112, "display"]) === "none") {
          introspect(JAM.policy.p3) {
            var v1180 = this[i$$86]
          }
          var nodeName = v1180.nodeName;
          var display;
          introspect(JAM.policy.p3) {
            var v1183 = elemdisplay[nodeName]
          }
          if(v1183) {
            introspect(JAM.policy.p3) {
              display = elemdisplay[nodeName]
            }
          }else {
            var v1181 = jQuery$$1("<" + nodeName + " />");
            var elem$$114 = JAM.call(v1181.appendTo, v1181, ["body"]);
            display = JAM.call(elem$$114.css, elem$$114, ["display"]);
            if(display === "none") {
              display = "block"
            }
            elem$$114.remove();
            JAM.set(elemdisplay, nodeName, display, JAM.policy.p2)
          }
          introspect(JAM.policy.p3) {
            var v1184 = this[i$$86]
          }
          JAM.call(jQuery$$1.data, jQuery$$1, [v1184, "olddisplay", display])
        }
        i$$86 = i$$86 + 1;
        v1186 = i$$86 < l$$23
      }
      var j$$5 = 0;
      var k$$2 = this.length;
      var v1188 = j$$5 < k$$2;
      for(;v1188;) {
        introspect(JAM.policy.p3) {
          var v3008 = this[j$$5]
        }
        var v1187 = v3008.style;
        introspect(JAM.policy.p3) {
          var v4114 = this[j$$5]
        }
        var v3009 = JAM.call(jQuery$$1.data, jQuery$$1, [v4114, "olddisplay"]);
        if(!v3009) {
          v3009 = ""
        }
        v1187.display = v3009;
        j$$5 = j$$5 + 1;
        v1188 = j$$5 < k$$2
      }
      return this
    }
    return
  }
  function v315(a$$6, traditional) {
    function v314() {
      add(this.name, this.value);
      return
    }
    function buildParams(prefix$$3, obj$$21) {
      function v313(k$$1, v$$1) {
        buildParams(prefix$$3 + "[" + k$$1 + "]", v$$1);
        return
      }
      function v312(i$$85, v) {
        var v3011 = traditional;
        if(!v3011) {
          v3011 = /\[\]$/.test(prefix$$3)
        }
        if(v3011) {
          add(prefix$$3, v)
        }else {
          var v4118 = prefix$$3 + "[";
          var v4860;
          var v5390 = typeof v === "object";
          if(!v5390) {
            v5390 = JAM.call(jQuery$$1.isArray, jQuery$$1, [v])
          }
          if(v5390) {
            v4860 = i$$85
          }else {
            v4860 = ""
          }
          buildParams(v4118 + v4860 + "]", v)
        }
        return
      }
      if(JAM.call(jQuery$$1.isArray, jQuery$$1, [obj$$21])) {
        JAM.call(jQuery$$1.each, jQuery$$1, [obj$$21, v312])
      }else {
        var v3013 = !traditional;
        if(v3013) {
          var v4120 = obj$$21 != null;
          if(v4120) {
            v4120 = typeof obj$$21 === "object"
          }
          v3013 = v4120
        }
        if(v3013) {
          JAM.call(jQuery$$1.each, jQuery$$1, [obj$$21, v313])
        }else {
          add(prefix$$3, obj$$21)
        }
      }
      return
    }
    function add(key$$20, value$$46) {
      var v1197;
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$46])) {
        v1197 = value$$46()
      }else {
        v1197 = value$$46
      }
      value$$46 = v1197;
      s$$5[s$$5.length] = encodeURIComponent(key$$20) + "=" + encodeURIComponent(value$$46);
      return
    }
    var s$$5 = [];
    if(traditional === undefined$$1) {
      traditional = jQuery$$1.ajaxSettings.traditional
    }
    var v3017 = JAM.call(jQuery$$1.isArray, jQuery$$1, [a$$6]);
    if(!v3017) {
      v3017 = a$$6.jquery
    }
    if(v3017) {
      JAM.call(jQuery$$1.each, jQuery$$1, [a$$6, v314])
    }else {
      var prefix$$2;
      for(prefix$$2 in a$$6) {
        introspect(JAM.policy.p3) {
          var v1202 = a$$6[prefix$$2]
        }
        buildParams(prefix$$2, v1202)
      }
    }
    return s$$5.join("&").replace(r20, "+")
  }
  function v311(xhr$$4, type$$64, s$$4) {
    var v1205 = xhr$$4.getResponseHeader("content-type");
    if(!v1205) {
      v1205 = ""
    }
    var ct = v1205;
    var v1206 = type$$64 === "xml";
    if(!v1206) {
      var v3019 = !type$$64;
      if(v3019) {
        v3019 = ct.indexOf("xml") >= 0
      }
      v1206 = v3019
    }
    var xml = v1206;
    var v1207;
    if(xml) {
      v1207 = xhr$$4.responseXML
    }else {
      v1207 = xhr$$4.responseText
    }
    var data$$43 = v1207;
    var v3021 = xml;
    if(v3021) {
      v3021 = data$$43.documentElement.nodeName === "parsererror"
    }
    if(v3021) {
      JAM.call(jQuery$$1.error, jQuery$$1, ["parsererror"])
    }
    var v3022 = s$$4;
    if(v3022) {
      v3022 = s$$4.dataFilter
    }
    if(v3022) {
      data$$43 = JAM.call(s$$4.dataFilter, s$$4, [data$$43, type$$64])
    }
    if(typeof data$$43 === "string") {
      var v3024 = type$$64 === "json";
      if(!v3024) {
        var v4125 = !type$$64;
        if(v4125) {
          v4125 = ct.indexOf("json") >= 0
        }
        v3024 = v4125
      }
      if(v3024) {
        data$$43 = JAM.call(jQuery$$1.parseJSON, jQuery$$1, [data$$43])
      }else {
        var v3025 = type$$64 === "script";
        if(!v3025) {
          var v4127 = !type$$64;
          if(v4127) {
            v4127 = ct.indexOf("javascript") >= 0
          }
          v3025 = v4127
        }
        if(v3025) {
          JAM.call(jQuery$$1.globalEval, jQuery$$1, [data$$43])
        }
      }
    }
    return data$$43
  }
  function v310(xhr$$3, url$$8) {
    var lastModified = xhr$$3.getResponseHeader("Last-Modified");
    var etag = xhr$$3.getResponseHeader("Etag");
    if(lastModified) {
      JAM.set(jQuery$$1.lastModified, url$$8, lastModified, JAM.policy.p2)
    }
    if(etag) {
      JAM.set(jQuery$$1.etag, url$$8, etag, JAM.policy.p2)
    }
    var v1215 = xhr$$3.status === 304;
    if(!v1215) {
      v1215 = xhr$$3.status === 0
    }
    return v1215
  }
  function v309(xhr$$2) {
    try {
      var v3029 = !xhr$$2.status;
      if(v3029) {
        v3029 = location.protocol === "file:"
      }
      var v1216 = v3029;
      if(!v1216) {
        var v4131 = xhr$$2.status >= 200;
        if(v4131) {
          v4131 = xhr$$2.status < 300
        }
        var v3030 = v4131;
        if(!v3030) {
          var v4132 = xhr$$2.status === 304;
          if(!v4132) {
            var v4868 = xhr$$2.status === 1223;
            if(!v4868) {
              v4868 = xhr$$2.status === 0
            }
            v4132 = v4868
          }
          v3030 = v4132
        }
        v1216 = v3030
      }
      return v1216
    }catch(e$$29) {
    }
    return false
  }
  function v308(s$$3, xhr$$1, status$$2, e$$28) {
    if(s$$3.error) {
      var v1217 = s$$3.error;
      var v3032 = s$$3.context;
      if(!v3032) {
        v3032 = s$$3
      }
      JAM.call(v1217.call, v1217, [v3032, xhr$$1, status$$2, e$$28])
    }
    if(s$$3.global) {
      var v3033;
      if(s$$3.context) {
        v3033 = jQuery$$1(s$$3.context)
      }else {
        v3033 = jQuery$$1.event
      }
      var v1220 = v3033;
      JAM.call(v1220.trigger, v1220, ["ajaxError", [xhr$$1, s$$3, e$$28]])
    }
    return
  }
  function v307(origSettings) {
    function v306() {
      var v3034 = xhr;
      if(v3034) {
        v3034 = !requestDone
      }
      if(v3034) {
        JAM.call(onreadystatechange, null, ["timeout"])
      }
      return
    }
    function v305() {
      if(xhr) {
        JAM.call(oldAbort.call, oldAbort, [xhr])
      }
      JAM.call(onreadystatechange, null, ["abort"]);
      return
    }
    function v304(isTimeout) {
      var v3035 = !xhr;
      if(!v3035) {
        var v4137 = xhr.readyState === 0;
        if(!v4137) {
          v4137 = isTimeout === "abort"
        }
        v3035 = v4137
      }
      if(v3035) {
        if(!requestDone) {
          complete()
        }
        requestDone = true;
        if(xhr) {
          JAM.set(xhr, "onreadystatechange", jQuery$$1.noop)
        }
      }else {
        var v3036 = !requestDone;
        if(v3036) {
          var v4139 = xhr;
          if(v4139) {
            var v4872 = xhr.readyState === 4;
            if(!v4872) {
              v4872 = isTimeout === "timeout"
            }
            v4139 = v4872
          }
          v3036 = v4139
        }
        if(v3036) {
          requestDone = true;
          JAM.set(xhr, "onreadystatechange", jQuery$$1.noop);
          var v1225;
          if(isTimeout === "timeout") {
            v1225 = "timeout"
          }else {
            var v3037;
            if(!JAM.call(jQuery$$1.httpSuccess, jQuery$$1, [xhr])) {
              v3037 = "error"
            }else {
              var v4140;
              var v5222 = s$$2.ifModified;
              if(v5222) {
                v5222 = JAM.call(jQuery$$1.httpNotModified, jQuery$$1, [xhr, s$$2.url])
              }
              if(v5222) {
                v4140 = "notmodified"
              }else {
                v4140 = "success"
              }
              v3037 = v4140
            }
            v1225 = v3037
          }
          status$$1 = v1225;
          var errMsg;
          if(status$$1 === "success") {
            try {
              data$$42 = JAM.call(jQuery$$1.httpData, jQuery$$1, [xhr, s$$2.dataType, s$$2])
            }catch(err) {
              status$$1 = "parsererror";
              errMsg = err
            }
          }
          var v3039 = status$$1 === "success";
          if(!v3039) {
            v3039 = status$$1 === "notmodified"
          }
          if(v3039) {
            if(!jsonp) {
              success()
            }
          }else {
            JAM.call(jQuery$$1.handleError, jQuery$$1, [s$$2, xhr, status$$1, errMsg])
          }
          complete();
          if(isTimeout === "timeout") {
            xhr.abort()
          }
          if(s$$2.async) {
            xhr = null
          }
        }
      }
      return
    }
    function v303() {
      var v3040 = !done$$1;
      if(v3040) {
        var v4143 = !this.readyState;
        if(!v4143) {
          var v4876 = this.readyState === "loaded";
          if(!v4876) {
            v4876 = this.readyState === "complete"
          }
          v4143 = v4876
        }
        v3040 = v4143
      }
      if(v3040) {
        done$$1 = true;
        success();
        complete();
        JAM.set(script$$2, "onload", JAM.set(script$$2, "onreadystatechange", null));
        var v3041 = head$$1;
        if(v3041) {
          v3041 = script$$2.parentNode
        }
        if(v3041) {
          head$$1.removeChild(script$$2)
        }
      }
      return
    }
    function v302(tmp$$1) {
      data$$42 = tmp$$1;
      success();
      complete();
      JAM.set(window$$1, jsonp, undefined$$1, JAM.policy.p2);
      try {
        delete window$$1[jsonp]
      }catch(e$$24) {
      }
      if(head$$1) {
        head$$1.removeChild(script$$2)
      }
      return
    }
    function success() {
      if(s$$2.success) {
        var v1236 = s$$2.success;
        JAM.call(v1236.call, v1236, [callbackContext, data$$42, status$$1, xhr])
      }
      if(s$$2.global) {
        trigger$$1("ajaxSuccess", [xhr, s$$2])
      }
      return
    }
    function complete() {
      if(s$$2.complete) {
        var v1240 = s$$2.complete;
        JAM.call(v1240.call, v1240, [callbackContext, xhr, status$$1])
      }
      if(s$$2.global) {
        trigger$$1("ajaxComplete", [xhr, s$$2])
      }
      var v3042 = s$$2.global;
      if(v3042) {
        v3042 = !(jQuery$$1.active = jQuery$$1.active - 1)
      }
      if(v3042) {
        var v1244 = jQuery$$1.event;
        JAM.call(v1244.trigger, v1244, ["ajaxStop"])
      }
      return
    }
    function trigger$$1(type$$63, args$$7) {
      var v3043;
      if(s$$2.context) {
        v3043 = jQuery$$1(s$$2.context)
      }else {
        v3043 = jQuery$$1.event
      }
      var v1246 = v3043;
      JAM.call(v1246.trigger, v1246, [type$$63, args$$7]);
      return
    }
    var s$$2 = JAM.call(jQuery$$1.extend, jQuery$$1, [true, {}, jQuery$$1.ajaxSettings, origSettings]);
    var jsonp;
    var status$$1;
    var data$$42;
    var v3044 = origSettings;
    if(v3044) {
      v3044 = origSettings.context
    }
    var v1248 = v3044;
    if(!v1248) {
      v1248 = s$$2
    }
    var callbackContext = v1248;
    var type$$62 = s$$2.type.toUpperCase();
    var v3046 = s$$2.data;
    if(v3046) {
      var v4147 = s$$2.processData;
      if(v4147) {
        v4147 = typeof s$$2.data !== "string"
      }
      v3046 = v4147
    }
    if(v3046) {
      var v1250 = s$$2;
      var v5594 = JAM.call(jQuery$$1.param, jQuery$$1, [s$$2.data, s$$2.traditional]);
      v1250.data = v5594
    }
    if(s$$2.dataType === "jsonp") {
      if(type$$62 === "GET") {
        if(!jsre.test(s$$2.url)) {
          var v1252 = s$$2;
          var v4149 = v1252.url;
          var v5392;
          if(rquery.test(s$$2.url)) {
            v5392 = "&"
          }else {
            v5392 = "?"
          }
          var v5228 = v5392;
          var v5393 = s$$2.jsonp;
          if(!v5393) {
            v5393 = "callback"
          }
          v1252.url = v4149 + (v5228 + v5393 + "=?")
        }
      }else {
        var v3051 = !s$$2.data;
        if(!v3051) {
          v3051 = !jsre.test(s$$2.data)
        }
        if(v3051) {
          var v4154;
          if(s$$2.data) {
            v4154 = s$$2.data + "&"
          }else {
            v4154 = ""
          }
          var v3052 = v4154;
          var v4155 = s$$2.jsonp;
          if(!v4155) {
            v4155 = "callback"
          }
          s$$2.data = v3052 + v4155 + "=?"
        }
      }
      s$$2.dataType = "json"
    }
    var v3054 = s$$2.dataType === "json";
    if(v3054) {
      var v4884 = s$$2.data;
      if(v4884) {
        v4884 = jsre.test(s$$2.data)
      }
      var v4157 = v4884;
      if(!v4157) {
        v4157 = jsre.test(s$$2.url)
      }
      v3054 = v4157
    }
    if(v3054) {
      var v1258 = s$$2.jsonpCallback;
      if(!v1258) {
        var v3055 = jsc;
        jsc = jsc + 1;
        v1258 = "jsonp" + v3055
      }
      jsonp = v1258;
      if(s$$2.data) {
        var v1259 = s$$2;
        var v5595 = (s$$2.data + "").replace(jsre, "=" + jsonp + "$1");
        v1259.data = v5595
      }
      var v1261 = s$$2;
      var v5596 = s$$2.url.replace(jsre, "=" + jsonp + "$1");
      v1261.url = v5596;
      s$$2.dataType = "script";
      introspect(JAM.policy.p3) {
        var v1262 = window$$1[jsonp]
      }
      if(!v1262) {
        v1262 = v302
      }
      JAM.set(window$$1, jsonp, v1262, JAM.policy.p2)
    }
    var v3062 = s$$2.dataType === "script";
    if(v3062) {
      v3062 = s$$2.cache === null
    }
    if(v3062) {
      s$$2.cache = false
    }
    var v3063 = s$$2.cache === false;
    if(v3063) {
      v3063 = type$$62 === "GET"
    }
    if(v3063) {
      var ts = now();
      var ret$$23 = s$$2.url.replace(rts, "$1_=" + ts + "$2");
      var v1267 = s$$2;
      var v3065 = ret$$23;
      var v4164;
      if(ret$$23 === s$$2.url) {
        var v5394;
        if(rquery.test(s$$2.url)) {
          v5394 = "&"
        }else {
          v5394 = "?"
        }
        v4164 = v5394 + "_=" + ts
      }else {
        v4164 = ""
      }
      v1267.url = v3065 + v4164
    }
    var v3067 = s$$2.data;
    if(v3067) {
      v3067 = type$$62 === "GET"
    }
    if(v3067) {
      var v1269 = s$$2;
      var v4165 = v1269.url;
      var v5233;
      if(rquery.test(s$$2.url)) {
        v5233 = "&"
      }else {
        v5233 = "?"
      }
      v1269.url = v4165 + (v5233 + s$$2.data)
    }
    var v3068 = s$$2.global;
    if(v3068) {
      var v4167 = jQuery$$1.active;
      jQuery$$1.active = jQuery$$1.active + 1;
      v3068 = !v4167
    }
    if(v3068) {
      var v1271 = jQuery$$1.event;
      JAM.call(v1271.trigger, v1271, ["ajaxStart"])
    }
    var parts$$2 = rurl.exec(s$$2.url);
    var v1274 = parts$$2;
    if(v1274) {
      var v4168 = parts$$2[1];
      if(v4168) {
        v4168 = parts$$2[1] !== location.protocol
      }
      var v3069 = v4168;
      if(!v3069) {
        v3069 = parts$$2[2] !== location.host
      }
      v1274 = v3069
    }
    var remote = v1274;
    var v3070 = s$$2.dataType === "script";
    if(v3070) {
      var v4173 = type$$62 === "GET";
      if(v4173) {
        v4173 = remote
      }
      v3070 = v4173
    }
    if(v3070) {
      var v1275 = document$$1.getElementsByTagName("head")[0];
      if(!v1275) {
        v1275 = document$$1.documentElement
      }
      var head$$1 = v1275;
      var script$$2 = document$$1.createElement("script");
      introspect(JAM.policy.p1) {
        script$$2.src = s$$2.url
      }
      if(s$$2.scriptCharset) {
        script$$2.charset = s$$2.scriptCharset
      }
      if(!jsonp) {
        var done$$1 = false;
        JAM.set(script$$2, "onload", JAM.set(script$$2, "onreadystatechange", v303))
      }
      JAM.call(head$$1.insertBefore, head$$1, [script$$2, head$$1.firstChild]);
      return undefined$$1
    }
    var requestDone = false;
    var xhr = s$$2.xhr();
    if(!xhr) {
      return
    }
    if(s$$2.username) {
      xhr.open(type$$62, s$$2.url, s$$2.async, s$$2.username, s$$2.password)
    }else {
      xhr.open(type$$62, s$$2.url, s$$2.async)
    }
    try {
      var v3073 = s$$2.data;
      if(!v3073) {
        var v4174 = origSettings;
        if(v4174) {
          v4174 = origSettings.contentType
        }
        v3073 = v4174
      }
      if(v3073) {
        xhr.setRequestHeader("Content-Type", s$$2.contentType)
      }
      if(s$$2.ifModified) {
        var v3074 = jQuery$$1.lastModified;
        var v3075 = s$$2.url;
        introspect(JAM.policy.p3) {
          var v1291 = v3074[v3075]
        }
        if(v1291) {
          var v3076 = jQuery$$1.lastModified;
          var v3077 = s$$2.url;
          introspect(JAM.policy.p3) {
            var v1290 = v3076[v3077]
          }
          xhr.setRequestHeader("If-Modified-Since", v1290)
        }
        var v3078 = jQuery$$1.etag;
        var v3079 = s$$2.url;
        introspect(JAM.policy.p3) {
          var v1293 = v3078[v3079]
        }
        if(v1293) {
          var v3080 = jQuery$$1.etag;
          var v3081 = s$$2.url;
          introspect(JAM.policy.p3) {
            var v1292 = v3080[v3081]
          }
          xhr.setRequestHeader("If-None-Match", v1292)
        }
      }
      if(!remote) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
      }
      var v3082;
      var v4893 = s$$2.dataType;
      if(v4893) {
        var v5235 = s$$2.accepts;
        var v5236 = s$$2.dataType;
        introspect(JAM.policy.p3) {
          v4893 = v5235[v5236]
        }
      }
      if(v4893) {
        var v4894 = s$$2.accepts;
        var v4895 = s$$2.dataType;
        introspect(JAM.policy.p3) {
          var v4176 = v4894[v4895]
        }
        v3082 = v4176 + ", */*"
      }else {
        v3082 = s$$2.accepts._default
      }
      xhr.setRequestHeader("Accept", v3082)
    }catch(e$$25) {
    }
    var v3083 = s$$2.beforeSend;
    if(v3083) {
      var v4896 = s$$2.beforeSend;
      v3083 = JAM.call(v4896.call, v4896, [callbackContext, xhr, s$$2]) === false
    }
    if(v3083) {
      var v3084 = s$$2.global;
      if(v3084) {
        v3084 = !(jQuery$$1.active = jQuery$$1.active - 1)
      }
      if(v3084) {
        var v1297 = jQuery$$1.event;
        JAM.call(v1297.trigger, v1297, ["ajaxStop"])
      }
      xhr.abort();
      return false
    }
    if(s$$2.global) {
      trigger$$1("ajaxSend", [xhr, s$$2])
    }
    var onreadystatechange = JAM.set(xhr, "onreadystatechange", v304);
    try {
      var oldAbort = xhr.abort;
      xhr.abort = v305
    }catch(e$$26) {
    }
    var v3085 = s$$2.async;
    if(v3085) {
      v3085 = s$$2.timeout > 0
    }
    if(v3085) {
      JAM.call(setTimeout, null, [v306, s$$2.timeout])
    }
    try {
      var v3086;
      var v4897 = type$$62 === "POST";
      if(!v4897) {
        var v5238 = type$$62 === "PUT";
        if(!v5238) {
          v5238 = type$$62 === "DELETE"
        }
        v4897 = v5238
      }
      if(v4897) {
        v3086 = s$$2.data
      }else {
        v3086 = null
      }
      xhr.send(v3086)
    }catch(e$$27) {
      JAM.call(jQuery$$1.handleError, jQuery$$1, [s$$2, xhr, null, e$$27]);
      complete()
    }
    if(!s$$2.async) {
      onreadystatechange()
    }
    return xhr
  }
  function v301() {
    try {
      return JAM.new(window$$1.ActiveXObject, ["Microsoft.XMLHTTP"])
    }catch(e$$23) {
    }
    return
  }
  function v300() {
    return new window$$1.XMLHttpRequest
  }
  function v299(settings) {
    JAM.call(jQuery$$1.extend, jQuery$$1, [jQuery$$1.ajaxSettings, settings]);
    return
  }
  function v298(url$$7, data$$41, callback$$36, type$$61) {
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$41])) {
      type$$61 = type$$61 || callback$$36;
      callback$$36 = data$$41;
      data$$41 = {}
    }
    return JAM.call(jQuery$$1.ajax, jQuery$$1, [{type:"POST", url:url$$7, data:data$$41, success:callback$$36, dataType:type$$61}])
  }
  function v297(url$$6, data$$40, callback$$35) {
    return JAM.call(jQuery$$1.get, jQuery$$1, [url$$6, data$$40, callback$$35, "json"])
  }
  function v296(url$$5, callback$$34) {
    return JAM.call(jQuery$$1.get, jQuery$$1, [url$$5, null, callback$$34, "script"])
  }
  function v295(url$$4, data$$39, callback$$33, type$$60) {
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$39])) {
      type$$60 = type$$60 || callback$$33;
      callback$$33 = data$$39;
      data$$39 = null
    }
    return JAM.call(jQuery$$1.ajax, jQuery$$1, [{type:"GET", url:url$$4, data:data$$39, success:callback$$33, dataType:type$$60}])
  }
  function v294(i$$84, o) {
    function v293(f) {
      return JAM.call(this.bind, this, [o, f])
    }
    JAM.set(jQuery$$1.fn, o, v293, JAM.policy.p2);
    return
  }
  function v292() {
    function v291(i$$82, elem$$113) {
      function v290(val$$5, i$$83) {
        return{name:elem$$113.name, value:val$$5}
      }
      var val$$4 = jQuery$$1(this).val();
      var v1316;
      if(val$$4 == null) {
        v1316 = null
      }else {
        var v3088;
        if(JAM.call(jQuery$$1.isArray, jQuery$$1, [val$$4])) {
          v3088 = JAM.call(jQuery$$1.map, jQuery$$1, [val$$4, v290])
        }else {
          v3088 = {name:elem$$113.name, value:val$$4}
        }
        v1316 = v3088
      }
      return v1316
    }
    function v289() {
      var v1317 = this.name;
      if(v1317) {
        var v3090 = !this.disabled;
        if(v3090) {
          var v4186 = this.checked;
          if(!v4186) {
            var v4898 = rselectTextarea.test(this.nodeName);
            if(!v4898) {
              v4898 = rinput.test(this.type)
            }
            v4186 = v4898
          }
          v3090 = v4186
        }
        v1317 = v3090
      }
      return v1317
    }
    function v288() {
      var v1318;
      if(this.elements) {
        v1318 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [this.elements])
      }else {
        v1318 = this
      }
      return v1318
    }
    var v4187 = JAM.call(this.map, this, [v288]);
    var v3093 = JAM.call(v4187.filter, v4187, [v289]);
    return JAM.call(v3093.map, v3093, [v291]).get()
  }
  function v287() {
    return JAM.call(jQuery$$1.param, jQuery$$1, [this.serializeArray()])
  }
  function v286(url$$3, params, callback$$32) {
    function v285(res, status) {
      var v3094 = status === "success";
      if(!v3094) {
        v3094 = status === "notmodified"
      }
      if(v3094) {
        var v3095;
        if(selector$$20) {
          var v4900 = jQuery$$1("<div />");
          var v4189 = JAM.call(v4900.append, v4900, [res.responseText.replace(rscript, "")]);
          v3095 = JAM.call(v4189.find, v4189, [selector$$20])
        }else {
          v3095 = res.responseText
        }
        JAM.call(self$$11.html, self$$11, [v3095])
      }
      if(callback$$32) {
        JAM.call(self$$11.each, self$$11, [callback$$32, [res.responseText, status, res]])
      }
      return
    }
    if(typeof url$$3 !== "string") {
      return JAM.call(_load.call, _load, [this, url$$3])
    }else {
      if(!this.length) {
        return this
      }
    }
    var off = url$$3.indexOf(" ");
    if(off >= 0) {
      var selector$$20 = JAM.call(url$$3.slice, url$$3, [off, url$$3.length]);
      url$$3 = JAM.call(url$$3.slice, url$$3, [0, off])
    }
    var type$$59 = "GET";
    if(params) {
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [params])) {
        callback$$32 = params;
        params = null
      }else {
        if(typeof params === "object") {
          params = JAM.call(jQuery$$1.param, jQuery$$1, [params, jQuery$$1.ajaxSettings.traditional]);
          type$$59 = "POST"
        }
      }
    }
    var self$$11 = this;
    JAM.call(jQuery$$1.ajax, jQuery$$1, [{url:url$$3, type:type$$59, dataType:"html", data:params, complete:v285}]);
    return this
  }
  function v284(elem$$112) {
    var v3101 = jQuery$$1.expr.filters;
    return!JAM.call(v3101.hidden, v3101, [elem$$112])
  }
  function v283(elem$$111) {
    var width$$9 = elem$$111.offsetWidth;
    var height$$8 = elem$$111.offsetHeight;
    var skip = elem$$111.nodeName.toLowerCase() === "tr";
    var v1334;
    var v4191 = width$$9 === 0;
    if(v4191) {
      var v4902 = height$$8 === 0;
      if(v4902) {
        v4902 = !skip
      }
      v4191 = v4902
    }
    if(v4191) {
      v1334 = true
    }else {
      var v3103;
      var v4903 = width$$9 > 0;
      if(v4903) {
        var v5244 = height$$8 > 0;
        if(v5244) {
          v5244 = !skip
        }
        v4903 = v5244
      }
      if(v4903) {
        v3103 = false
      }else {
        v3103 = JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$111, "display"]) === "none"
      }
      v1334 = v3103
    }
    return v1334
  }
  function v282(elem$$110, options$$3, callback$$31) {
    var old$$4 = {};
    var name$$55;
    for(name$$55 in options$$3) {
      JAM.set(old$$4, name$$55, JAM.get(elem$$110.style, name$$55, JAM.policy.p4), JAM.policy.p4);
      JAM.set(elem$$110.style, name$$55, JAM.get(options$$3, name$$55, JAM.policy.p4), JAM.policy.p4)
    }
    JAM.call(callback$$31.call, callback$$31, [elem$$110]);
    for(name$$55 in options$$3) {
      JAM.set(elem$$110.style, name$$55, JAM.get(old$$4, name$$55, JAM.policy.p4), JAM.policy.p4)
    }
    return
  }
  function v281(elem$$109, name$$54, force$$1) {
    var ret$$22;
    var style$$1 = elem$$109.style;
    var filter$$4;
    var v3105 = !jQuery$$1.support.opacity;
    if(v3105) {
      var v4195 = name$$54 === "opacity";
      if(v4195) {
        v4195 = elem$$109.currentStyle
      }
      v3105 = v4195
    }
    if(v3105) {
      var v1338;
      var v4905 = elem$$109.currentStyle.filter;
      if(!v4905) {
        v4905 = ""
      }
      if(ropacity.test(v4905)) {
        v1338 = parseFloat(RegExp.$1) / 100 + ""
      }else {
        v1338 = ""
      }
      ret$$22 = v1338;
      var v1339;
      if(ret$$22 === "") {
        v1339 = "1"
      }else {
        v1339 = ret$$22
      }
      return v1339
    }
    if(rfloat.test(name$$54)) {
      name$$54 = styleFloat
    }
    var v3109 = !force$$1;
    if(v3109) {
      var v4198 = style$$1;
      if(v4198) {
        introspect(JAM.policy.p3) {
          v4198 = style$$1[name$$54]
        }
      }
      v3109 = v4198
    }
    if(v3109) {
      introspect(JAM.policy.p3) {
        ret$$22 = style$$1[name$$54]
      }
    }else {
      if(getComputedStyle) {
        if(rfloat.test(name$$54)) {
          name$$54 = "float"
        }
        name$$54 = name$$54.replace(rupper, "-$1").toLowerCase();
        var defaultView = elem$$109.ownerDocument.defaultView;
        if(!defaultView) {
          return null
        }
        var computedStyle = defaultView.getComputedStyle(elem$$109, null);
        if(computedStyle) {
          ret$$22 = computedStyle.getPropertyValue(name$$54)
        }
        var v3110 = name$$54 === "opacity";
        if(v3110) {
          v3110 = ret$$22 === ""
        }
        if(v3110) {
          ret$$22 = "1"
        }
      }else {
        if(elem$$109.currentStyle) {
          var camelCase = name$$54.replace(rdashAlpha, fcamelCase);
          var v3111 = elem$$109.currentStyle;
          introspect(JAM.policy.p3) {
            var v1347 = v3111[name$$54]
          }
          if(!v1347) {
            var v3112 = elem$$109.currentStyle;
            introspect(JAM.policy.p3) {
              v1347 = v3112[camelCase]
            }
          }
          ret$$22 = v1347;
          var v3114 = !rnumpx.test(ret$$22);
          if(v3114) {
            v3114 = rnum.test(ret$$22)
          }
          if(v3114) {
            var left$$4 = style$$1.left;
            var rsLeft = elem$$109.runtimeStyle.left;
            elem$$109.runtimeStyle.left = elem$$109.currentStyle.left;
            var v1350;
            if(camelCase === "fontSize") {
              v1350 = "1em"
            }else {
              v1350 = ret$$22 || 0
            }
            style$$1.left = v1350;
            ret$$22 = style$$1.pixelLeft + "px";
            style$$1.left = left$$4;
            elem$$109.runtimeStyle.left = rsLeft
          }
        }
      }
    }
    return ret$$22
  }
  function v280(elem$$108, name$$53, force, extra$$2) {
    function v279() {
      function v278() {
        if(!extra$$2) {
          var v3117 = val$$3;
          var v4200 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "padding" + this, true]));
          if(!v4200) {
            v4200 = 0
          }
          val$$3 = v3117 - v4200
        }
        if(extra$$2 === "margin") {
          var v3119 = val$$3;
          var v4201 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "margin" + this, true]));
          if(!v4201) {
            v4201 = 0
          }
          val$$3 = v3119 + v4201
        }else {
          var v3121 = val$$3;
          var v4202 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "border" + this + "Width", true]));
          if(!v4202) {
            v4202 = 0
          }
          val$$3 = v3121 - v4202
        }
        return
      }
      var v1358;
      if(name$$53 === "width") {
        v1358 = elem$$108.offsetWidth
      }else {
        v1358 = elem$$108.offsetHeight
      }
      val$$3 = v1358;
      if(extra$$2 === "border") {
        return
      }
      JAM.call(jQuery$$1.each, jQuery$$1, [which, v278]);
      return
    }
    var v3124 = name$$53 === "width";
    if(!v3124) {
      v3124 = name$$53 === "height"
    }
    if(v3124) {
      var val$$3;
      var props$$1 = cssShow;
      var v1360;
      if(name$$53 === "width") {
        v1360 = cssWidth
      }else {
        v1360 = cssHeight
      }
      var which = v1360;
      var getWH = v279;
      if(elem$$108.offsetWidth !== 0) {
        getWH()
      }else {
        JAM.call(jQuery$$1.swap, jQuery$$1, [elem$$108, props$$1, getWH])
      }
      return JAM.call(Math.max, Math, [0, Math.round(val$$3)])
    }
    return JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, name$$53, force])
  }
  function v277(elem$$107, name$$52, value$$45) {
    var v3127 = !elem$$107;
    if(!v3127) {
      var v4204 = elem$$107.nodeType === 3;
      if(!v4204) {
        v4204 = elem$$107.nodeType === 8
      }
      v3127 = v4204
    }
    if(v3127) {
      return undefined$$1
    }
    var v4206 = name$$52 === "width";
    if(!v4206) {
      v4206 = name$$52 === "height"
    }
    var v3128 = v4206;
    if(v3128) {
      v3128 = parseFloat(value$$45) < 0
    }
    if(v3128) {
      value$$45 = undefined$$1
    }
    var v1366 = elem$$107.style;
    if(!v1366) {
      v1366 = elem$$107
    }
    var style = v1366;
    var set$$8 = value$$45 !== undefined$$1;
    var v3130 = !jQuery$$1.support.opacity;
    if(v3130) {
      v3130 = name$$52 === "opacity"
    }
    if(v3130) {
      if(set$$8) {
        style.zoom = 1;
        var v1367;
        if(parseInt(value$$45, 10) + "" === "NaN") {
          v1367 = ""
        }else {
          v1367 = "alpha(opacity=" + value$$45 * 100 + ")"
        }
        var opacity = v1367;
        var v1368 = style.filter;
        if(!v1368) {
          var v3133 = JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$107, "filter"]);
          if(!v3133) {
            v3133 = ""
          }
          v1368 = v3133
        }
        var filter$$3 = v1368;
        var v1369 = style;
        var v3135;
        if(ralpha.test(filter$$3)) {
          v3135 = filter$$3.replace(ralpha, opacity)
        }else {
          v3135 = opacity
        }
        v1369.filter = v3135
      }
      var v1370;
      var v4213 = style.filter;
      if(v4213) {
        v4213 = style.filter.indexOf("opacity=") >= 0
      }
      if(v4213) {
        v1370 = parseFloat(ropacity.exec(style.filter)[1]) / 100 + ""
      }else {
        v1370 = ""
      }
      return v1370
    }
    if(rfloat.test(name$$52)) {
      name$$52 = styleFloat
    }
    name$$52 = name$$52.replace(rdashAlpha, fcamelCase);
    if(set$$8) {
      JAM.set(style, name$$52, value$$45, JAM.policy.p2)
    }
    introspect(JAM.policy.p3) {
      return style[name$$52]
    }
  }
  function v276(name$$50, value$$43) {
    function v275(elem$$106, name$$51, value$$44) {
      if(value$$44 === undefined$$1) {
        return JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$106, name$$51])
      }
      var v3138 = typeof value$$44 === "number";
      if(v3138) {
        v3138 = !rexclude.test(name$$51)
      }
      if(v3138) {
        value$$44 = value$$44 + "px"
      }
      JAM.call(jQuery$$1.style, jQuery$$1, [elem$$106, name$$51, value$$44]);
      return
    }
    return access(this, name$$50, value$$43, true, v275)
  }
  function v274(elems$$9) {
    var data$$38;
    var id$$5;
    var cache$$2 = jQuery$$1.cache;
    var special$$4 = jQuery$$1.event.special;
    var deleteExpando = jQuery$$1.support.deleteExpando;
    var i$$81 = 0;
    var elem$$105;
    introspect(JAM.policy.p3) {
      var v3139 = elem$$105 = elems$$9[i$$81]
    }
    var v1386 = v3139 != null;
    for(;v1386;) {
      var v1377 = jQuery$$1.expando;
      introspect(JAM.policy.p3) {
        id$$5 = elem$$105[v1377]
      }
      if(id$$5) {
        introspect(JAM.policy.p3) {
          data$$38 = cache$$2[id$$5]
        }
        if(data$$38.events) {
          var type$$58;
          for(type$$58 in data$$38.events) {
            introspect(JAM.policy.p3) {
              var v1380 = special$$4[type$$58]
            }
            if(v1380) {
              var v1378 = jQuery$$1.event;
              JAM.call(v1378.remove, v1378, [elem$$105, type$$58])
            }else {
              JAM.call(removeEvent, null, [elem$$105, type$$58, data$$38.handle])
            }
          }
        }
        if(deleteExpando) {
          delete elem$$105[jQuery$$1.expando]
        }else {
          if(elem$$105.removeAttribute) {
            elem$$105.removeAttribute(jQuery$$1.expando)
          }
        }
        delete cache$$2[id$$5]
      }
      i$$81 = i$$81 + 1;
      introspect(JAM.policy.p3) {
        var v3140 = elem$$105 = elems$$9[i$$81]
      }
      v1386 = v3140 != null
    }
    return
  }
  function v273(elems$$8, context$$15, fragment$$3, scripts$$2) {
    context$$15 = context$$15 || document$$1;
    if(typeof context$$15.createElement === "undefined") {
      var v1387 = context$$15.ownerDocument;
      if(!v1387) {
        var v4218 = context$$15[0];
        if(v4218) {
          v4218 = context$$15[0].ownerDocument
        }
        var v3142 = v4218;
        if(!v3142) {
          v3142 = document$$1
        }
        v1387 = v3142
      }
      context$$15 = v1387
    }
    var ret$$21 = [];
    var i$$80 = 0;
    var elem$$104;
    introspect(JAM.policy.p3) {
      var v3144 = elem$$104 = elems$$8[i$$80]
    }
    var v1409 = v3144 != null;
    for(;v1409;) {
      if(typeof elem$$104 === "number") {
        elem$$104 = elem$$104 + ""
      }
      if(!elem$$104) {
        i$$80 = i$$80 + 1;
        introspect(JAM.policy.p3) {
          var v3146 = elem$$104 = elems$$8[i$$80]
        }
        v1409 = v3146 != null;
        continue
      }
      var v3147 = typeof elem$$104 === "string";
      if(v3147) {
        v3147 = !rhtml.test(elem$$104)
      }
      if(v3147) {
        elem$$104 = context$$15.createTextNode(elem$$104)
      }else {
        if(typeof elem$$104 === "string") {
          elem$$104 = elem$$104.replace(rxhtmlTag, fcloseTag);
          var v4222 = rtagName.exec(elem$$104);
          if(!v4222) {
            v4222 = ["", ""]
          }
          var tag$$1 = v4222[1].toLowerCase();
          introspect(JAM.policy.p3) {
            var v1392 = wrapMap[tag$$1]
          }
          if(!v1392) {
            v1392 = wrapMap._default
          }
          var wrap$$1 = v1392;
          var depth$$1 = wrap$$1[0];
          var div$$6 = context$$15.createElement("div");
          JAM.set(div$$6, "innerHTML", wrap$$1[1] + elem$$104 + wrap$$1[2]);
          var v1395 = depth$$1;
          depth$$1 = depth$$1 - 1;
          for(;v1395;) {
            div$$6 = div$$6.lastChild;
            v1395 = depth$$1;
            depth$$1 = depth$$1 - 1
          }
          if(!jQuery$$1.support.tbody) {
            var hasBody = rtbody.test(elem$$104);
            var v1396;
            var v4224 = tag$$1 === "table";
            if(v4224) {
              v4224 = !hasBody
            }
            if(v4224) {
              var v3153 = div$$6.firstChild;
              if(v3153) {
                v3153 = div$$6.firstChild.childNodes
              }
              v1396 = v3153
            }else {
              var v3154;
              var v4923 = wrap$$1[1] === "<table>";
              if(v4923) {
                v4923 = !hasBody
              }
              if(v4923) {
                v3154 = div$$6.childNodes
              }else {
                v3154 = []
              }
              v1396 = v3154
            }
            var tbody = v1396;
            var j$$4 = tbody.length - 1;
            var v1401 = j$$4 >= 0;
            for(;v1401;) {
              introspect(JAM.policy.p3) {
                var v4227 = tbody[j$$4]
              }
              var v3156 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [v4227, "tbody"]);
              if(v3156) {
                introspect(JAM.policy.p3) {
                  var v5253 = tbody[j$$4]
                }
                v3156 = !v5253.childNodes.length
              }
              if(v3156) {
                introspect(JAM.policy.p3) {
                  var v3157 = tbody[j$$4]
                }
                var v1398 = v3157.parentNode;
                introspect(JAM.policy.p3) {
                  var v1399 = tbody[j$$4]
                }
                v1398.removeChild(v1399)
              }
              j$$4 = j$$4 - 1;
              v1401 = j$$4 >= 0
            }
          }
          var v3158 = !jQuery$$1.support.leadingWhitespace;
          if(v3158) {
            v3158 = rleadingWhitespace.test(elem$$104)
          }
          if(v3158) {
            JAM.call(div$$6.insertBefore, div$$6, [context$$15.createTextNode(rleadingWhitespace.exec(elem$$104)[0]), div$$6.firstChild])
          }
          elem$$104 = div$$6.childNodes
        }
      }
      if(elem$$104.nodeType) {
        JAM.call(ret$$21.push, ret$$21, [elem$$104])
      }else {
        ret$$21 = JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$21, elem$$104])
      }
      i$$80 = i$$80 + 1;
      introspect(JAM.policy.p3) {
        var v3160 = elem$$104 = elems$$8[i$$80]
      }
      v1409 = v3160 != null
    }
    if(fragment$$3) {
      i$$80 = 0;
      introspect(JAM.policy.p3) {
        var v1416 = ret$$21[i$$80]
      }
      for(;v1416;) {
        var v3161 = scripts$$2;
        if(v3161) {
          introspect(JAM.policy.p3) {
            var v4926 = ret$$21[i$$80]
          }
          var v4231 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [v4926, "script"]);
          if(v4231) {
            introspect(JAM.policy.p3) {
              var v5399 = ret$$21[i$$80]
            }
            var v4927 = !v5399.type;
            if(!v4927) {
              introspect(JAM.policy.p3) {
                var v5477 = ret$$21[i$$80]
              }
              v4927 = v5477.type.toLowerCase() === "text/javascript"
            }
            v4231 = v4927
          }
          v3161 = v4231
        }
        if(v3161) {
          var v3162;
          introspect(JAM.policy.p3) {
            var v4928 = ret$$21[i$$80]
          }
          if(v4928.parentNode) {
            introspect(JAM.policy.p3) {
              var v4929 = ret$$21[i$$80]
            }
            var v4232 = v4929.parentNode;
            introspect(JAM.policy.p3) {
              var v4233 = ret$$21[i$$80]
            }
            v3162 = v4232.removeChild(v4233)
          }else {
            v3162 = ret$$21[i$$80]
          }
          JAM.call(scripts$$2.push, scripts$$2, [v3162])
        }else {
          introspect(JAM.policy.p3) {
            var v4235 = ret$$21[i$$80]
          }
          if(v4235.nodeType === 1) {
            var v1411 = ret$$21.splice;
            var v3164 = [i$$80 + 1, 0];
            introspect(JAM.policy.p3) {
              var v4930 = ret$$21[i$$80]
            }
            JAM.call(v1411.apply, v1411, [ret$$21, v3164.concat(JAM.call(jQuery$$1.makeArray, jQuery$$1, [v4930.getElementsByTagName("script")]))])
          }
          introspect(JAM.policy.p3) {
            var v1414 = ret$$21[i$$80]
          }
          JAM.call(fragment$$3.appendChild, fragment$$3, [v1414])
        }
        i$$80 = i$$80 + 1;
        v1416 = ret$$21[i$$80]
      }
    }
    return ret$$21
  }
  function v272(name$$49, original) {
    function v271(selector$$19) {
      var ret$$20 = [];
      var insert = jQuery$$1(selector$$19);
      var v1417 = this.length === 1;
      if(v1417) {
        v1417 = this[0].parentNode
      }
      var parent$$8 = v1417;
      var v3168 = parent$$8;
      if(v3168) {
        var v4238 = parent$$8.nodeType === 11;
        if(v4238) {
          var v4932 = parent$$8.childNodes.length === 1;
          if(v4932) {
            v4932 = insert.length === 1
          }
          v4238 = v4932
        }
        v3168 = v4238
      }
      if(v3168) {
        JAM.call(JAM.get(insert, original, JAM.policy.p3), insert, [this[0]]);
        return this
      }else {
        var i$$79 = 0;
        var l$$22 = insert.length;
        var v1422 = i$$79 < l$$22;
        for(;v1422;) {
          var v3169;
          if(i$$79 > 0) {
            v3169 = JAM.call(this.clone, this, [true])
          }else {
            v3169 = this
          }
          var elems$$7 = v3169.get();
          var v3170 = jQuery$$1.fn;
          introspect(JAM.policy.p3) {
            var v1420 = v3170[original]
          }
          introspect(JAM.policy.p3) {
            var v3171 = insert[i$$79]
          }
          JAM.call(v1420.apply, v1420, [jQuery$$1(v3171), elems$$7]);
          ret$$20 = ret$$20.concat(elems$$7);
          i$$79 = i$$79 + 1;
          v1422 = i$$79 < l$$22
        }
        return JAM.call(this.pushStack, this, [ret$$20, name$$49, insert.selector])
      }
      return
    }
    JAM.set(jQuery$$1.fn, name$$49, v271, JAM.policy.p2);
    return
  }
  function v270(args$$6, table, callback$$30) {
    function v269(i$$78) {
      var self$$10 = jQuery$$1(this);
      var v1426 = args$$6;
      var v4240;
      if(table) {
        v4240 = self$$10.html()
      }else {
        v4240 = undefined$$1
      }
      var v5597 = JAM.call(value$$42.call, value$$42, [this, i$$78, v4240]);
      v1426[0] = v5597;
      JAM.call(self$$10.domManip, self$$10, [args$$6, table, callback$$30]);
      return
    }
    function v268() {
      var v1427 = jQuery$$1(this);
      JAM.call(v1427.domManip, v1427, [args$$6, table, callback$$30, true]);
      return
    }
    var results$$7;
    var first$$3;
    var value$$42 = args$$6[0];
    var scripts$$1 = [];
    var fragment$$2;
    var parent$$7;
    var v3173 = !jQuery$$1.support.checkClone;
    if(v3173) {
      var v4242 = arguments.length === 3;
      if(v4242) {
        var v4935 = typeof value$$42 === "string";
        if(v4935) {
          v4935 = rchecked.test(value$$42)
        }
        v4242 = v4935
      }
      v3173 = v4242
    }
    if(v3173) {
      return JAM.call(this.each, this, [v268])
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$42])) {
      return JAM.call(this.each, this, [v269])
    }
    if(this[0]) {
      var v1430 = value$$42;
      if(v1430) {
        v1430 = value$$42.parentNode
      }
      parent$$7 = v1430;
      var v3174 = jQuery$$1.support.parentNode;
      if(v3174) {
        var v4244 = parent$$7;
        if(v4244) {
          var v4936 = parent$$7.nodeType === 11;
          if(v4936) {
            v4936 = parent$$7.childNodes.length === this.length
          }
          v4244 = v4936
        }
        v3174 = v4244
      }
      if(v3174) {
        results$$7 = {fragment:parent$$7}
      }else {
        results$$7 = buildFragment(args$$6, this, scripts$$1)
      }
      fragment$$2 = results$$7.fragment;
      if(fragment$$2.childNodes.length === 1) {
        first$$3 = fragment$$2 = fragment$$2.firstChild
      }else {
        first$$3 = fragment$$2.firstChild
      }
      if(first$$3) {
        var v1433 = table;
        if(v1433) {
          v1433 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [first$$3, "tr"])
        }
        table = v1433;
        var i$$77 = 0;
        var l$$21 = this.length;
        var v1436 = i$$77 < l$$21;
        for(;v1436;) {
          var v3176;
          if(table) {
            var v4246;
            introspect(JAM.policy.p3) {
              var v5263 = this[i$$77]
            }
            if(JAM.call(jQuery$$1.nodeName, jQuery$$1, [v5263, "table"])) {
              introspect(JAM.policy.p3) {
                var v5403 = this[i$$77]
              }
              var v4937 = v5403.getElementsByTagName("tbody")[0];
              if(!v4937) {
                introspect(JAM.policy.p3) {
                  var v5265 = this[i$$77]
                }
                introspect(JAM.policy.p3) {
                  var v5478 = this[i$$77]
                }
                v4937 = JAM.call(v5265.appendChild, v5265, [v5478.ownerDocument.createElement("tbody")])
              }
              v4246 = v4937
            }else {
              v4246 = this[i$$77]
            }
            v3176 = v4246
          }else {
            v3176 = this[i$$77]
          }
          var v1434 = v3176;
          var v3177;
          var v4939 = i$$77 > 0;
          if(!v4939) {
            var v5268 = results$$7.cacheable;
            if(!v5268) {
              v5268 = this.length > 1
            }
            v4939 = v5268
          }
          if(v4939) {
            v3177 = fragment$$2.cloneNode(true)
          }else {
            v3177 = fragment$$2
          }
          JAM.call(callback$$30.call, callback$$30, [v1434, v3177]);
          i$$77 = i$$77 + 1;
          v1436 = i$$77 < l$$21
        }
      }
      if(scripts$$1.length) {
        JAM.call(jQuery$$1.each, jQuery$$1, [scripts$$1, evalScript])
      }
    }
    return this
  }
  function v267(selector$$18) {
    return JAM.call(this.remove, this, [selector$$18, true])
  }
  function v266(value$$41) {
    function v265() {
      var next = this.nextSibling;
      var parent$$6 = this.parentNode;
      jQuery$$1(this).remove();
      if(next) {
        var v1440 = jQuery$$1(next);
        JAM.call(v1440.before, v1440, [value$$41])
      }else {
        var v1441 = jQuery$$1(parent$$6);
        JAM.call(v1441.append, v1441, [value$$41])
      }
      return
    }
    function v264(i$$76) {
      var self$$9 = jQuery$$1(this);
      var old$$3 = self$$9.html();
      JAM.call(self$$9.replaceWith, self$$9, [JAM.call(value$$41.call, value$$41, [this, i$$76, old$$3])]);
      return
    }
    var v3178 = this[0];
    if(v3178) {
      v3178 = this[0].parentNode
    }
    if(v3178) {
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$41])) {
        return JAM.call(this.each, this, [v264])
      }
      if(typeof value$$41 !== "string") {
        value$$41 = jQuery$$1(value$$41).detach()
      }
      return JAM.call(this.each, this, [v265])
    }else {
      var v4249;
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$41])) {
        v4249 = value$$41()
      }else {
        v4249 = value$$41
      }
      return JAM.call(this.pushStack, this, [jQuery$$1(v4249), "replaceWith", value$$41])
    }
    return
  }
  function v263(value$$40) {
    function v262(i$$75) {
      function v261() {
        return JAM.call(value$$40.call, value$$40, [this, i$$75, old$$2])
      }
      var self$$8 = jQuery$$1(this);
      var old$$2 = self$$8.html();
      var v1448 = self$$8.empty();
      JAM.call(v1448.append, v1448, [v261]);
      return
    }
    if(value$$40 === undefined$$1) {
      var v1449;
      var v4250 = this[0];
      if(v4250) {
        v4250 = this[0].nodeType === 1
      }
      if(v4250) {
        v1449 = this[0].innerHTML.replace(rinlinejQuery, "")
      }else {
        v1449 = null
      }
      return v1449
    }else {
      var v3183 = typeof value$$40 === "string";
      if(v3183) {
        var v4253 = !rnocache.test(value$$40);
        if(v4253) {
          var v5271 = jQuery$$1.support.leadingWhitespace;
          if(!v5271) {
            v5271 = !rleadingWhitespace.test(value$$40)
          }
          var v4943 = v5271;
          if(v4943) {
            var v5410 = wrapMap;
            var v5531 = rtagName.exec(value$$40);
            if(!v5531) {
              v5531 = ["", ""]
            }
            var v5411 = v5531[1].toLowerCase();
            introspect(JAM.policy.p3) {
              var v5272 = v5410[v5411]
            }
            v4943 = !v5272
          }
          v4253 = v4943
        }
        v3183 = v4253
      }
      if(v3183) {
        value$$40 = value$$40.replace(rxhtmlTag, fcloseTag);
        try {
          var i$$74 = 0;
          var l$$20 = this.length;
          var v1453 = i$$74 < l$$20;
          for(;v1453;) {
            introspect(JAM.policy.p3) {
              var v4254 = this[i$$74]
            }
            if(v4254.nodeType === 1) {
              introspect(JAM.policy.p3) {
                var v3185 = this[i$$74]
              }
              JAM.call(jQuery$$1.cleanData, jQuery$$1, [v3185.getElementsByTagName("*")]);
              introspect(JAM.policy.p3) {
                var v1451 = this[i$$74]
              }
              JAM.set(v1451, "innerHTML", value$$40)
            }
            i$$74 = i$$74 + 1;
            v1453 = i$$74 < l$$20
          }
        }catch(e$$22) {
          var v1454 = this.empty();
          JAM.call(v1454.append, v1454, [value$$40])
        }
      }else {
        if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$40])) {
          JAM.call(this.each, this, [v262])
        }else {
          var v1455 = this.empty();
          JAM.call(v1455.append, v1455, [value$$40])
        }
      }
    }
    return this
  }
  function v260(events$$5) {
    function v259() {
      var v3186 = !jQuery$$1.support.noCloneEvent;
      if(v3186) {
        v3186 = !JAM.call(jQuery$$1.isXMLDoc, jQuery$$1, [this])
      }
      if(v3186) {
        var html$$3 = this.outerHTML;
        var ownerDocument = this.ownerDocument;
        if(!html$$3) {
          var div$$5 = ownerDocument.createElement("div");
          JAM.call(div$$5.appendChild, div$$5, [this.cloneNode(true)]);
          html$$3 = div$$5.innerHTML
        }
        return JAM.call(jQuery$$1.clean, jQuery$$1, [[html$$3.replace(rinlinejQuery, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(rleadingWhitespace, "")], ownerDocument])[0]
      }else {
        return this.cloneNode(true)
      }
      return
    }
    var ret$$19 = JAM.call(this.map, this, [v259]);
    if(events$$5 === true) {
      cloneCopyEvent(this, ret$$19);
      cloneCopyEvent(JAM.call(this.find, this, ["*"]), JAM.call(ret$$19.find, ret$$19, ["*"]))
    }
    return ret$$19
  }
  function v258() {
    var i$$73 = 0;
    var elem$$102;
    introspect(JAM.policy.p3) {
      var v3188 = elem$$102 = this[i$$73]
    }
    var v1470 = v3188 != null;
    for(;v1470;) {
      if(elem$$102.nodeType === 1) {
        JAM.call(jQuery$$1.cleanData, jQuery$$1, [elem$$102.getElementsByTagName("*")])
      }
      var v1469 = elem$$102.firstChild;
      for(;v1469;) {
        elem$$102.removeChild(elem$$102.firstChild);
        v1469 = elem$$102.firstChild
      }
      i$$73 = i$$73 + 1;
      introspect(JAM.policy.p3) {
        var v3190 = elem$$102 = this[i$$73]
      }
      v1470 = v3190 != null
    }
    return this
  }
  function v257(selector$$17, keepData) {
    var i$$72 = 0;
    var elem$$101;
    introspect(JAM.policy.p3) {
      var v3191 = elem$$101 = this[i$$72]
    }
    var v1477 = v3191 != null;
    for(;v1477;) {
      var v3192 = !selector$$17;
      if(!v3192) {
        v3192 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$17, [elem$$101]]).length
      }
      if(v3192) {
        var v3193 = !keepData;
        if(v3193) {
          v3193 = elem$$101.nodeType === 1
        }
        if(v3193) {
          JAM.call(jQuery$$1.cleanData, jQuery$$1, [elem$$101.getElementsByTagName("*")]);
          JAM.call(jQuery$$1.cleanData, jQuery$$1, [[elem$$101]])
        }
        if(elem$$101.parentNode) {
          elem$$101.parentNode.removeChild(elem$$101)
        }
      }
      i$$72 = i$$72 + 1;
      introspect(JAM.policy.p3) {
        var v3194 = elem$$101 = this[i$$72]
      }
      v1477 = v3194 != null
    }
    return this
  }
  function v256() {
    function v255(elem$$100) {
      var v1478 = this.parentNode;
      JAM.call(v1478.insertBefore, v1478, [elem$$100, this.nextSibling]);
      return
    }
    var v3195 = this[0];
    if(v3195) {
      v3195 = this[0].parentNode
    }
    if(v3195) {
      return JAM.call(this.domManip, this, [arguments, false, v255])
    }else {
      if(arguments.length) {
        var set$$7 = JAM.call(this.pushStack, this, [this, "after", arguments]);
        var v1480 = set$$7.push;
        JAM.call(v1480.apply, v1480, [set$$7, jQuery$$1(arguments[0]).toArray()]);
        return set$$7
      }
    }
    return
  }
  function v254() {
    function v253(elem$$99) {
      var v1484 = this.parentNode;
      JAM.call(v1484.insertBefore, v1484, [elem$$99, this]);
      return
    }
    var v3197 = this[0];
    if(v3197) {
      v3197 = this[0].parentNode
    }
    if(v3197) {
      return JAM.call(this.domManip, this, [arguments, false, v253])
    }else {
      if(arguments.length) {
        var set$$6 = jQuery$$1(arguments[0]);
        var v1486 = set$$6.push;
        JAM.call(v1486.apply, v1486, [set$$6, this.toArray()]);
        return JAM.call(this.pushStack, this, [set$$6, "before", arguments])
      }
    }
    return
  }
  function v252() {
    function v251(elem$$98) {
      if(this.nodeType === 1) {
        JAM.call(this.insertBefore, this, [elem$$98, this.firstChild])
      }
      return
    }
    return JAM.call(this.domManip, this, [arguments, true, v251])
  }
  function v250() {
    function v249(elem$$97) {
      if(this.nodeType === 1) {
        JAM.call(this.appendChild, this, [elem$$97])
      }
      return
    }
    return JAM.call(this.domManip, this, [arguments, true, v249])
  }
  function v248() {
    function v247() {
      if(!JAM.call(jQuery$$1.nodeName, jQuery$$1, [this, "body"])) {
        var v1493 = jQuery$$1(this);
        JAM.call(v1493.replaceWith, v1493, [this.childNodes])
      }
      return
    }
    var v3201 = this.parent();
    return JAM.call(v3201.each, v3201, [v247]).end()
  }
  function v246(html$$2) {
    function v245() {
      var v1497 = jQuery$$1(this);
      JAM.call(v1497.wrapAll, v1497, [html$$2]);
      return
    }
    return JAM.call(this.each, this, [v245])
  }
  function v244(html$$1) {
    function v243() {
      var self$$7 = jQuery$$1(this);
      var contents = self$$7.contents();
      if(contents.length) {
        JAM.call(contents.wrapAll, contents, [html$$1])
      }else {
        JAM.call(self$$7.append, self$$7, [html$$1])
      }
      return
    }
    function v242(i$$71) {
      var v1499 = jQuery$$1(this);
      JAM.call(v1499.wrapInner, v1499, [JAM.call(html$$1.call, html$$1, [this, i$$71])]);
      return
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [html$$1])) {
      return JAM.call(this.each, this, [v242])
    }
    return JAM.call(this.each, this, [v243])
  }
  function v241(html) {
    function v240() {
      var elem$$96 = this;
      var v3202 = elem$$96.firstChild;
      if(v3202) {
        v3202 = elem$$96.firstChild.nodeType === 1
      }
      var v1502 = v3202;
      for(;v1502;) {
        elem$$96 = elem$$96.firstChild;
        var v3203 = elem$$96.firstChild;
        if(v3203) {
          v3203 = elem$$96.firstChild.nodeType === 1
        }
        v1502 = v3203
      }
      return elem$$96
    }
    function v239(i$$70) {
      var v1503 = jQuery$$1(this);
      JAM.call(v1503.wrapAll, v1503, [JAM.call(html.call, html, [this, i$$70])]);
      return
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [html])) {
      return JAM.call(this.each, this, [v239])
    }
    if(this[0]) {
      var v3204 = jQuery$$1(html, this[0].ownerDocument);
      var v1506 = JAM.call(v3204.eq, v3204, [0]);
      var wrap = JAM.call(v1506.clone, v1506, [true]);
      if(this[0].parentNode) {
        JAM.call(wrap.insertBefore, wrap, [this[0]])
      }
      var v1509 = JAM.call(wrap.map, wrap, [v240]);
      JAM.call(v1509.append, v1509, [this])
    }
    return this
  }
  function v238(text$$8) {
    function v237(i$$69) {
      var self$$6 = jQuery$$1(this);
      JAM.call(self$$6.text, self$$6, [JAM.call(text$$8.call, text$$8, [this, i$$69, self$$6.text()])]);
      return
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [text$$8])) {
      return JAM.call(this.each, this, [v237])
    }
    var v3207 = typeof text$$8 !== "object";
    if(v3207) {
      v3207 = text$$8 !== undefined$$1
    }
    if(v3207) {
      var v1513 = this.empty();
      var v4950 = this[0];
      if(v4950) {
        v4950 = this[0].ownerDocument
      }
      var v4268 = v4950;
      if(!v4268) {
        v4268 = document$$1
      }
      return JAM.call(v1513.append, v1513, [v4268.createTextNode(text$$8)])
    }
    return JAM.call(jQuery$$1.text, jQuery$$1, [this])
  }
  function v236(n$$2, elem$$95) {
    var r$$1 = [];
    for(;n$$2;) {
      var v3209 = n$$2.nodeType === 1;
      if(v3209) {
        v3209 = n$$2 !== elem$$95
      }
      if(v3209) {
        JAM.call(r$$1.push, r$$1, [n$$2])
      }
      n$$2 = n$$2.nextSibling
    }
    return r$$1
  }
  function v235(cur$$6, result$$5, dir$$3, elem$$94) {
    result$$5 = result$$5 || 1;
    var num$$7 = 0;
    for(;cur$$6;) {
      var v3210 = cur$$6.nodeType === 1;
      if(v3210) {
        v3210 = (num$$7 = num$$7 + 1) === result$$5
      }
      if(v3210) {
        break
      }
      introspect(JAM.policy.p3) {
        cur$$6 = cur$$6[dir$$3]
      }
    }
    return cur$$6
  }
  function v234(elem$$93, dir$$2, until$$4) {
    var matched = [];
    introspect(JAM.policy.p3) {
      var cur$$5 = elem$$93[dir$$2]
    }
    var v3211 = cur$$5;
    if(v3211) {
      var v4272 = cur$$5.nodeType !== 9;
      if(v4272) {
        var v4953 = until$$4 === undefined$$1;
        if(!v4953) {
          var v5275 = cur$$5.nodeType !== 1;
          if(!v5275) {
            var v5480 = jQuery$$1(cur$$5);
            v5275 = !JAM.call(v5480.is, v5480, [until$$4])
          }
          v4953 = v5275
        }
        v4272 = v4953
      }
      v3211 = v4272
    }
    var v1519 = v3211;
    for(;v1519;) {
      if(cur$$5.nodeType === 1) {
        JAM.call(matched.push, matched, [cur$$5])
      }
      introspect(JAM.policy.p3) {
        cur$$5 = cur$$5[dir$$2]
      }
      var v3213 = cur$$5;
      if(v3213) {
        var v4273 = cur$$5.nodeType !== 9;
        if(v4273) {
          var v4955 = until$$4 === undefined$$1;
          if(!v4955) {
            var v5277 = cur$$5.nodeType !== 1;
            if(!v5277) {
              var v5481 = jQuery$$1(cur$$5);
              v5277 = !JAM.call(v5481.is, v5481, [until$$4])
            }
            v4955 = v5277
          }
          v4273 = v4955
        }
        v3213 = v4273
      }
      v1519 = v3213
    }
    return matched
  }
  function v233(expr$$6, elems$$6, not$$5) {
    if(not$$5) {
      expr$$6 = ":not(" + expr$$6 + ")"
    }
    var v1521 = jQuery$$1.find;
    return JAM.call(v1521.matches, v1521, [expr$$6, elems$$6])
  }
  function v232(name$$48, fn$$14) {
    function v231(until$$3, selector$$16) {
      var ret$$18 = JAM.call(jQuery$$1.map, jQuery$$1, [this, fn$$14, until$$3]);
      if(!runtil.test(name$$48)) {
        selector$$16 = until$$3
      }
      var v3215 = selector$$16;
      if(v3215) {
        v3215 = typeof selector$$16 === "string"
      }
      if(v3215) {
        ret$$18 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$16, ret$$18])
      }
      var v1524;
      if(this.length > 1) {
        v1524 = JAM.call(jQuery$$1.unique, jQuery$$1, [ret$$18])
      }else {
        v1524 = ret$$18
      }
      ret$$18 = v1524;
      var v4276 = this.length > 1;
      if(!v4276) {
        v4276 = rmultiselector.test(selector$$16)
      }
      var v3217 = v4276;
      if(v3217) {
        v3217 = rparentsprev.test(name$$48)
      }
      if(v3217) {
        ret$$18 = ret$$18.reverse()
      }
      return JAM.call(this.pushStack, this, [ret$$18, name$$48, JAM.call(slice.call, slice, [arguments]).join(",")])
    }
    JAM.set(jQuery$$1.fn, name$$48, v231, JAM.policy.p2);
    return
  }
  function v230(elem$$92) {
    var v1528;
    if(JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$92, "iframe"])) {
      var v3219 = elem$$92.contentDocument;
      if(!v3219) {
        v3219 = elem$$92.contentWindow.document
      }
      v1528 = v3219
    }else {
      v1528 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [elem$$92.childNodes])
    }
    return v1528
  }
  function v229(elem$$91) {
    return JAM.call(jQuery$$1.sibling, jQuery$$1, [elem$$91.firstChild])
  }
  function v228(elem$$90) {
    return JAM.call(jQuery$$1.sibling, jQuery$$1, [elem$$90.parentNode.firstChild, elem$$90])
  }
  function v227(elem$$89, i$$68, until$$2) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$89, "previousSibling", until$$2])
  }
  function v226(elem$$88, i$$67, until$$1) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$88, "nextSibling", until$$1])
  }
  function v225(elem$$87) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$87, "previousSibling"])
  }
  function v224(elem$$86) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$86, "nextSibling"])
  }
  function v223(elem$$85) {
    return JAM.call(jQuery$$1.nth, jQuery$$1, [elem$$85, 2, "previousSibling"])
  }
  function v222(elem$$84) {
    return JAM.call(jQuery$$1.nth, jQuery$$1, [elem$$84, 2, "nextSibling"])
  }
  function v221(elem$$83, i$$66, until) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$83, "parentNode", until])
  }
  function v220(elem$$82) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$82, "parentNode"])
  }
  function v219(elem$$81) {
    var parent$$5 = elem$$81.parentNode;
    var v1531;
    var v4279 = parent$$5;
    if(v4279) {
      v4279 = parent$$5.nodeType !== 11
    }
    if(v4279) {
      v1531 = parent$$5
    }else {
      v1531 = null
    }
    return v1531
  }
  function v218() {
    return JAM.call(this.add, this, [this.prevObject])
  }
  function v217(selector$$15, context$$14) {
    var v1533;
    if(typeof selector$$15 === "string") {
      var v4281 = context$$14;
      if(!v4281) {
        v4281 = this.context
      }
      v1533 = jQuery$$1(selector$$15, v4281)
    }else {
      v1533 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [selector$$15])
    }
    var set$$5 = v1533;
    var all$$4 = JAM.call(jQuery$$1.merge, jQuery$$1, [this.get(), set$$5]);
    var v3226;
    var v5279 = !set$$5[0];
    if(!v5279) {
      var v5419 = !set$$5[0].parentNode;
      if(!v5419) {
        v5419 = set$$5[0].parentNode.nodeType === 11
      }
      v5279 = v5419
    }
    var v4960 = v5279;
    if(!v4960) {
      var v5280 = !all$$4[0];
      if(!v5280) {
        var v5422 = !all$$4[0].parentNode;
        if(!v5422) {
          v5422 = all$$4[0].parentNode.nodeType === 11
        }
        v5280 = v5422
      }
      v4960 = v5280
    }
    if(v4960) {
      v3226 = all$$4
    }else {
      v3226 = JAM.call(jQuery$$1.unique, jQuery$$1, [all$$4])
    }
    return JAM.call(this.pushStack, this, [v3226])
  }
  function v216(elem$$80) {
    var v3227 = !elem$$80;
    if(!v3227) {
      v3227 = typeof elem$$80 === "string"
    }
    if(v3227) {
      var v1536 = this[0];
      var v3228;
      if(elem$$80) {
        v3228 = jQuery$$1(elem$$80)
      }else {
        v3228 = this.parent().children()
      }
      return JAM.call(jQuery$$1.inArray, jQuery$$1, [v1536, v3228])
    }
    var v3229;
    if(elem$$80.jquery) {
      v3229 = elem$$80[0]
    }else {
      v3229 = elem$$80
    }
    return JAM.call(jQuery$$1.inArray, jQuery$$1, [v3229, this])
  }
  function v215(selectors$$8, context$$13) {
    function v214(i$$65, cur$$4) {
      var v3230 = cur$$4;
      if(v3230) {
        var v4287 = cur$$4.ownerDocument;
        if(v4287) {
          v4287 = cur$$4 !== context$$13
        }
        v3230 = v4287
      }
      var v1541 = v3230;
      for(;v1541;) {
        var v3231;
        if(pos$$1) {
          v3231 = JAM.call(pos$$1.index, pos$$1, [cur$$4]) > -1
        }else {
          var v4289 = jQuery$$1(cur$$4);
          v3231 = JAM.call(v4289.is, v4289, [selectors$$8])
        }
        if(v3231) {
          return cur$$4
        }
        cur$$4 = cur$$4.parentNode;
        var v3232 = cur$$4;
        if(v3232) {
          var v4290 = cur$$4.ownerDocument;
          if(v4290) {
            v4290 = cur$$4 !== context$$13
          }
          v3232 = v4290
        }
        v1541 = v3232
      }
      return null
    }
    if(JAM.call(jQuery$$1.isArray, jQuery$$1, [selectors$$8])) {
      var ret$$17 = [];
      var cur$$3 = this[0];
      var match$$36;
      var matches = {};
      var selector$$14;
      var v3233 = cur$$3;
      if(v3233) {
        v3233 = selectors$$8.length
      }
      if(v3233) {
        var i$$64 = 0;
        var l$$19 = selectors$$8.length;
        var v1545 = i$$64 < l$$19;
        for(;v1545;) {
          selector$$14 = selectors$$8[i$$64];
          introspect(JAM.policy.p3) {
            var v3234 = matches[selector$$14]
          }
          if(!v3234) {
            var v1542 = matches;
            var v1543 = selector$$14;
            var v3235;
            if(jQuery$$1.expr.match.POS.test(selector$$14)) {
              var v4962 = context$$13;
              if(!v4962) {
                v4962 = this.context
              }
              v3235 = jQuery$$1(selector$$14, v4962)
            }else {
              v3235 = selector$$14
            }
            JAM.set(v1542, v1543, v3235, JAM.policy.p2)
          }
          i$$64 = i$$64 + 1;
          v1545 = i$$64 < l$$19
        }
        var v3236 = cur$$3;
        if(v3236) {
          var v4293 = cur$$3.ownerDocument;
          if(v4293) {
            v4293 = cur$$3 !== context$$13
          }
          v3236 = v4293
        }
        var v1548 = v3236;
        for(;v1548;) {
          for(selector$$14 in matches) {
            introspect(JAM.policy.p3) {
              match$$36 = matches[selector$$14]
            }
            var v3237;
            if(match$$36.jquery) {
              v3237 = JAM.call(match$$36.index, match$$36, [cur$$3]) > -1
            }else {
              var v4295 = jQuery$$1(cur$$3);
              v3237 = JAM.call(v4295.is, v4295, [match$$36])
            }
            if(v3237) {
              JAM.call(ret$$17.push, ret$$17, [{selector:selector$$14, elem:cur$$3}]);
              delete matches[selector$$14]
            }
          }
          cur$$3 = cur$$3.parentNode;
          var v3238 = cur$$3;
          if(v3238) {
            var v4297 = cur$$3.ownerDocument;
            if(v4297) {
              v4297 = cur$$3 !== context$$13
            }
            v3238 = v4297
          }
          v1548 = v3238
        }
      }
      return ret$$17
    }
    var v1551;
    if(jQuery$$1.expr.match.POS.test(selectors$$8)) {
      var v4299 = context$$13;
      if(!v4299) {
        v4299 = this.context
      }
      v1551 = jQuery$$1(selectors$$8, v4299)
    }else {
      v1551 = null
    }
    var pos$$1 = v1551;
    return JAM.call(this.map, this, [v214])
  }
  function v213(selector$$13) {
    var v1552 = !!selector$$13;
    if(v1552) {
      v1552 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$13, this]).length > 0
    }
    return v1552
  }
  function v212(selector$$12) {
    return JAM.call(this.pushStack, this, [winnow(this, selector$$12, true), "filter", selector$$12])
  }
  function v211(selector$$11) {
    return JAM.call(this.pushStack, this, [winnow(this, selector$$11, false), "not", selector$$11])
  }
  function v210(target$$39) {
    function v209() {
      var i$$63 = 0;
      var l$$18 = targets.length;
      var v1556 = i$$63 < l$$18;
      for(;v1556;) {
        introspect(JAM.policy.p3) {
          var v3243 = targets[i$$63]
        }
        if(JAM.call(jQuery$$1.contains, jQuery$$1, [this, v3243])) {
          return true
        }
        i$$63 = i$$63 + 1;
        v1556 = i$$63 < l$$18
      }
      return
    }
    var targets = jQuery$$1(target$$39);
    return JAM.call(this.filter, this, [v209])
  }
  function v208(selector$$10) {
    var ret$$16 = JAM.call(this.pushStack, this, ["", "find", selector$$10]);
    var length$$17 = 0;
    var i$$62 = 0;
    var l$$17 = this.length;
    var v1563 = i$$62 < l$$17;
    for(;v1563;) {
      length$$17 = ret$$16.length;
      introspect(JAM.policy.p3) {
        var v1557 = this[i$$62]
      }
      JAM.call(jQuery$$1.find, jQuery$$1, [selector$$10, v1557, ret$$16]);
      if(i$$62 > 0) {
        var n$$1 = length$$17;
        var v1561 = n$$1 < ret$$16.length;
        for(;v1561;) {
          var r = 0;
          var v1560 = r < length$$17;
          for(;v1560;) {
            introspect(JAM.policy.p3) {
              var v3245 = ret$$16[r]
            }
            introspect(JAM.policy.p3) {
              var v3246 = ret$$16[n$$1]
            }
            if(v3245 === v3246) {
              var v1558 = n$$1;
              n$$1 = n$$1 - 1;
              JAM.call(ret$$16.splice, ret$$16, [v1558, 1]);
              break
            }
            r = r + 1;
            v1560 = r < length$$17
          }
          n$$1 = n$$1 + 1;
          v1561 = n$$1 < ret$$16.length
        }
      }
      i$$62 = i$$62 + 1;
      v1563 = i$$62 < l$$17
    }
    return ret$$16
  }
  function v207() {
    function v206(a$$5, b$$4) {
      var v1564 = a$$5 !== b$$4;
      if(v1564) {
        var v3248;
        if(a$$5.contains) {
          v3248 = JAM.call(a$$5.contains, a$$5, [b$$4])
        }else {
          v3248 = true
        }
        v1564 = v3248
      }
      return v1564
    }
    function v205(a$$4, b$$3) {
      return!!(a$$4.compareDocumentPosition(b$$3) & 16)
    }
    function v204() {
      function v203(match$$34, context$$11, isXML$$10) {
        var v3250 = typeof context$$11.getElementsByClassName !== "undefined";
        if(v3250) {
          v3250 = !isXML$$10
        }
        if(v3250) {
          return context$$11.getElementsByClassName(match$$34[1])
        }
        return
      }
      var div$$4 = document$$1.createElement("div");
      JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
      var v3251 = !div$$4.getElementsByClassName;
      if(!v3251) {
        v3251 = div$$4.getElementsByClassName("e").length === 0
      }
      if(v3251) {
        return
      }
      div$$4.lastChild.className = "e";
      if(div$$4.getElementsByClassName("e").length === 1) {
        return
      }
      var v1571 = Expr.order;
      JAM.call(v1571.splice, v1571, [1, 0, "CLASS"]);
      Expr.find.CLASS = v203;
      div$$4 = null;
      return
    }
    function v202() {
      function v201(query$$2, context$$10, extra$$1, seed$$1) {
        context$$10 = context$$10 || document$$1;
        var v3253 = !seed$$1;
        if(v3253) {
          var v4308 = context$$10.nodeType === 9;
          if(v4308) {
            v4308 = !isXML(context$$10)
          }
          v3253 = v4308
        }
        if(v3253) {
          try {
            return JAM.call(makeArray, null, [context$$10.querySelectorAll(query$$2), extra$$1])
          }catch(e$$21) {
          }
        }
        return JAM.call(oldSizzle, null, [query$$2, context$$10, extra$$1, seed$$1])
      }
      var oldSizzle = Sizzle;
      var div$$3 = document$$1.createElement("div");
      JAM.set(div$$3, "innerHTML", "<p class='TEST'></p>");
      var v3254 = div$$3.querySelectorAll;
      if(v3254) {
        v3254 = div$$3.querySelectorAll(".TEST").length === 0
      }
      if(v3254) {
        return
      }
      Sizzle = v201;
      var prop$$5;
      for(prop$$5 in oldSizzle) {
        JAM.set(Sizzle, prop$$5, JAM.get(oldSizzle, prop$$5, JAM.policy.p4), JAM.policy.p4)
      }
      div$$3 = null;
      return
    }
    function v200() {
      function v199(elem$$74) {
        return elem$$74.getAttribute("href", 2)
      }
      function v198(match$$33, context$$9) {
        var results$$6 = context$$9.getElementsByTagName(match$$33[1]);
        if(match$$33[1] === "*") {
          var tmp = [];
          var i$$57 = 0;
          introspect(JAM.policy.p3) {
            var v1579 = results$$6[i$$57]
          }
          for(;v1579;) {
            introspect(JAM.policy.p3) {
              var v4310 = results$$6[i$$57]
            }
            if(v4310.nodeType === 1) {
              introspect(JAM.policy.p3) {
                var v1577 = results$$6[i$$57]
              }
              JAM.call(tmp.push, tmp, [v1577])
            }
            i$$57 = i$$57 + 1;
            v1579 = results$$6[i$$57]
          }
          results$$6 = tmp
        }
        return results$$6
      }
      var div$$2 = document$$1.createElement("div");
      JAM.call(div$$2.appendChild, div$$2, [document$$1.createComment("")]);
      if(div$$2.getElementsByTagName("*").length > 0) {
        Expr.find.TAG = v198
      }
      JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
      var v3258 = div$$2.firstChild;
      if(v3258) {
        var v4312 = typeof div$$2.firstChild.getAttribute !== "undefined";
        if(v4312) {
          v4312 = div$$2.firstChild.getAttribute("href") !== "#"
        }
        v3258 = v4312
      }
      if(v3258) {
        Expr.attrHandle.href = v199
      }
      div$$2 = null;
      return
    }
    function v197() {
      function v196(elem$$73, match$$32) {
        var v1586 = typeof elem$$73.getAttributeNode !== "undefined";
        if(v1586) {
          v1586 = elem$$73.getAttributeNode("id")
        }
        var node$$4 = v1586;
        var v1587 = elem$$73.nodeType === 1;
        if(v1587) {
          var v3261 = node$$4;
          if(v3261) {
            v3261 = node$$4.nodeValue === match$$32
          }
          v1587 = v3261
        }
        return v1587
      }
      function v195(match$$31, context$$8, isXML$$9) {
        var v3262 = typeof context$$8.getElementById !== "undefined";
        if(v3262) {
          v3262 = !isXML$$9
        }
        if(v3262) {
          var m$$2 = context$$8.getElementById(match$$31[1]);
          var v1589;
          if(m$$2) {
            var v3263;
            var v4973 = m$$2.id === match$$31[1];
            if(!v4973) {
              var v5289 = typeof m$$2.getAttributeNode !== "undefined";
              if(v5289) {
                v5289 = m$$2.getAttributeNode("id").nodeValue === match$$31[1]
              }
              v4973 = v5289
            }
            if(v4973) {
              v3263 = [m$$2]
            }else {
              v3263 = undefined$$1
            }
            v1589 = v3263
          }else {
            v1589 = []
          }
          return v1589
        }
        return
      }
      var form = document$$1.createElement("div");
      var id$$4 = "script" + (new Date).getTime();
      JAM.set(form, "innerHTML", "<a name='" + id$$4 + "'/>");
      var root$$1 = document$$1.documentElement;
      JAM.call(root$$1.insertBefore, root$$1, [form, root$$1.firstChild]);
      if(document$$1.getElementById(id$$4)) {
        Expr.find.ID = v195;
        Expr.filter.ID = v196
      }
      root$$1.removeChild(form);
      root$$1 = form = null;
      return
    }
    function v194(a$$3, b$$2) {
      var v3265 = !a$$3.ownerDocument;
      if(!v3265) {
        v3265 = !b$$2.ownerDocument
      }
      if(v3265) {
        if(a$$3 == b$$2) {
          hasDuplicate = true
        }
        var v1598;
        if(a$$3.ownerDocument) {
          v1598 = -1
        }else {
          v1598 = 1
        }
        return v1598
      }
      var aRange = a$$3.ownerDocument.createRange();
      var bRange = b$$2.ownerDocument.createRange();
      aRange.setStart(a$$3, 0);
      aRange.setEnd(a$$3, 0);
      bRange.setStart(b$$2, 0);
      bRange.setEnd(b$$2, 0);
      var ret$$15 = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
      if(ret$$15 === 0) {
        hasDuplicate = true
      }
      return ret$$15
    }
    function v193(a$$2, b$$1) {
      var v3267 = !a$$2.sourceIndex;
      if(!v3267) {
        v3267 = !b$$1.sourceIndex
      }
      if(v3267) {
        if(a$$2 == b$$1) {
          hasDuplicate = true
        }
        var v1605;
        if(a$$2.sourceIndex) {
          v1605 = -1
        }else {
          v1605 = 1
        }
        return v1605
      }
      var ret$$14 = a$$2.sourceIndex - b$$1.sourceIndex;
      if(ret$$14 === 0) {
        hasDuplicate = true
      }
      return ret$$14
    }
    function v192(a$$1, b) {
      var v3269 = !a$$1.compareDocumentPosition;
      if(!v3269) {
        v3269 = !b.compareDocumentPosition
      }
      if(v3269) {
        if(a$$1 == b) {
          hasDuplicate = true
        }
        var v1611;
        if(a$$1.compareDocumentPosition) {
          v1611 = -1
        }else {
          v1611 = 1
        }
        return v1611
      }
      var v1613;
      if(a$$1.compareDocumentPosition(b) & 4) {
        v1613 = -1
      }else {
        var v3271;
        if(a$$1 === b) {
          v3271 = 0
        }else {
          v3271 = 1
        }
        v1613 = v3271
      }
      var ret$$13 = v1613;
      if(ret$$13 === 0) {
        hasDuplicate = true
      }
      return ret$$13
    }
    function v191(array$$16, results$$5) {
      var ret$$12 = results$$5 || [];
      if(JAM.call(toString$$1.call, toString$$1, [array$$16]) === "[object Array]") {
        var v1615 = Array.prototype.push;
        JAM.call(v1615.apply, v1615, [ret$$12, array$$16])
      }else {
        if(typeof array$$16.length === "number") {
          var i$$56 = 0;
          var l$$15 = array$$16.length;
          var v1617 = i$$56 < l$$15;
          for(;v1617;) {
            introspect(JAM.policy.p3) {
              var v1616 = array$$16[i$$56]
            }
            JAM.call(ret$$12.push, ret$$12, [v1616]);
            i$$56 = i$$56 + 1;
            v1617 = i$$56 < l$$15
          }
        }else {
          i$$56 = 0;
          introspect(JAM.policy.p3) {
            var v1619 = array$$16[i$$56]
          }
          for(;v1619;) {
            introspect(JAM.policy.p3) {
              var v1618 = array$$16[i$$56]
            }
            JAM.call(ret$$12.push, ret$$12, [v1618]);
            i$$56 = i$$56 + 1;
            v1619 = array$$16[i$$56]
          }
        }
      }
      return ret$$12
    }
    function v190(all$$3, num$$6) {
      return"\\" + (num$$6 - 0 + 1)
    }
    function v189(elem$$72, match$$30, i$$55, array$$14) {
      var name$$47 = match$$30[2];
      var v1623 = Expr.setFilters;
      introspect(JAM.policy.p3) {
        var filter$$2 = v1623[name$$47]
      }
      if(filter$$2) {
        return JAM.call(filter$$2, null, [elem$$72, i$$55, match$$30, array$$14])
      }
      return
    }
    function v188(elem$$71, match$$29) {
      var name$$46 = match$$29[1];
      var v1624;
      var v4329 = Expr.attrHandle;
      introspect(JAM.policy.p3) {
        var v3279 = v4329[name$$46]
      }
      if(v3279) {
        var v3277 = Expr.attrHandle;
        v1624 = JAM.call(JAM.get(v3277, name$$46, JAM.policy.p3), v3277, [elem$$71])
      }else {
        var v3278;
        introspect(JAM.policy.p3) {
          var v4974 = elem$$71[name$$46]
        }
        if(v4974 != null) {
          introspect(JAM.policy.p3) {
            v3278 = elem$$71[name$$46]
          }
        }else {
          v3278 = elem$$71.getAttribute(name$$46)
        }
        v1624 = v3278
      }
      var result$$4 = v1624;
      var value$$39 = result$$4 + "";
      var type$$57 = match$$29[2];
      var check = match$$29[4];
      var v1625;
      if(result$$4 == null) {
        v1625 = type$$57 === "!="
      }else {
        var v3280;
        if(type$$57 === "=") {
          v3280 = value$$39 === check
        }else {
          var v4331;
          if(type$$57 === "*=") {
            v4331 = value$$39.indexOf(check) >= 0
          }else {
            var v4976;
            if(type$$57 === "~=") {
              v4976 = (" " + value$$39 + " ").indexOf(check) >= 0
            }else {
              var v5292;
              if(!check) {
                var v5430 = value$$39;
                if(v5430) {
                  v5430 = result$$4 !== false
                }
                v5292 = v5430
              }else {
                var v5431;
                if(type$$57 === "!=") {
                  v5431 = value$$39 !== check
                }else {
                  var v5491;
                  if(type$$57 === "^=") {
                    v5491 = value$$39.indexOf(check) === 0
                  }else {
                    var v5514;
                    if(type$$57 === "$=") {
                      v5514 = value$$39.substr(value$$39.length - check.length) === check
                    }else {
                      var v5535;
                      if(type$$57 === "|=") {
                        var v5543 = value$$39 === check;
                        if(!v5543) {
                          v5543 = value$$39.substr(0, check.length + 1) === check + "-"
                        }
                        v5535 = v5543
                      }else {
                        v5535 = false
                      }
                      v5514 = v5535
                    }
                    v5491 = v5514
                  }
                  v5431 = v5491
                }
                v5292 = v5431
              }
              v4976 = v5292
            }
            v4331 = v4976
          }
          v3280 = v4331
        }
        v1625 = v3280
      }
      return v1625
    }
    function v187(elem$$70, match$$28) {
      var v5294 = elem$$70.className;
      if(!v5294) {
        v5294 = elem$$70.getAttribute("class")
      }
      return(" " + v5294 + " ").indexOf(match$$28) > -1
    }
    function v186(elem$$69, match$$27) {
      var v3283 = match$$27 === "*";
      if(v3283) {
        v3283 = elem$$69.nodeType === 1
      }
      var v1627 = v3283;
      if(!v1627) {
        v1627 = elem$$69.nodeName.toLowerCase() === match$$27
      }
      return v1627
    }
    function v185(elem$$68, match$$26) {
      var v1628 = elem$$68.nodeType === 1;
      if(v1628) {
        v1628 = elem$$68.getAttribute("id") === match$$26
      }
      return v1628
    }
    function v184(elem$$67, match$$25) {
      var type$$56 = match$$25[1];
      var node$$3 = elem$$67;
      switch(type$$56) {
        case "only":
        ;
        case "first":
          var v1630 = node$$3 = node$$3.previousSibling;
          for(;v1630;) {
            if(node$$3.nodeType === 1) {
              return false
            }
            v1630 = node$$3 = node$$3.previousSibling
          }
          if(type$$56 === "first") {
            return true
          }
          node$$3 = elem$$67;
        case "last":
          var v1633 = node$$3 = node$$3.nextSibling;
          for(;v1633;) {
            if(node$$3.nodeType === 1) {
              return false
            }
            v1633 = node$$3 = node$$3.nextSibling
          }
          return true;
        case "nth":
          var first$$2 = match$$25[2];
          var last = match$$25[3];
          var v3290 = first$$2 === 1;
          if(v3290) {
            v3290 = last === 0
          }
          if(v3290) {
            return true
          }
          var doneName$$4 = match$$25[0];
          var parent$$4 = elem$$67.parentNode;
          var v3291 = parent$$4;
          if(v3291) {
            var v4336 = parent$$4.sizcache !== doneName$$4;
            if(!v4336) {
              v4336 = !elem$$67.nodeIndex
            }
            v3291 = v4336
          }
          if(v3291) {
            var count$$6 = 0;
            node$$3 = parent$$4.firstChild;
            for(;node$$3;) {
              if(node$$3.nodeType === 1) {
                node$$3.nodeIndex = count$$6 = count$$6 + 1
              }
              node$$3 = node$$3.nextSibling
            }
            parent$$4.sizcache = doneName$$4
          }
          var diff = elem$$67.nodeIndex - last;
          if(first$$2 === 0) {
            return diff === 0
          }else {
            var v1638 = diff % first$$2 === 0;
            if(v1638) {
              v1638 = diff / first$$2 >= 0
            }
            return v1638
          }
      }
      return
    }
    function v183(elem$$66, match$$24, i$$54, array$$13) {
      var name$$45 = match$$24[1];
      var v1640 = Expr.filters;
      introspect(JAM.policy.p3) {
        var filter$$1 = v1640[name$$45]
      }
      if(filter$$1) {
        return JAM.call(filter$$1, null, [elem$$66, i$$54, match$$24, array$$13])
      }else {
        if(name$$45 === "contains") {
          var v4337 = elem$$66.textContent;
          if(!v4337) {
            var v4982 = elem$$66.innerText;
            if(!v4982) {
              var v5295 = getText([elem$$66]);
              if(!v5295) {
                v5295 = ""
              }
              v4982 = v5295
            }
            v4337 = v4982
          }
          return v4337.indexOf(match$$24[3]) >= 0
        }else {
          if(name$$45 === "not") {
            var not$$4 = match$$24[3];
            i$$54 = 0;
            var l$$14 = not$$4.length;
            var v1643 = i$$54 < l$$14;
            for(;v1643;) {
              introspect(JAM.policy.p3) {
                var v3297 = not$$4[i$$54]
              }
              if(v3297 === elem$$66) {
                return false
              }
              i$$54 = i$$54 + 1;
              v1643 = i$$54 < l$$14
            }
            return true
          }else {
            JAM.call(Sizzle.error, Sizzle, ["Syntax error, unrecognized expression: " + name$$45])
          }
        }
      }
      return
    }
    function v182(elem$$65, i$$53, match$$23) {
      return match$$23[3] - 0 === i$$53
    }
    function v181(elem$$64, i$$52, match$$22) {
      return match$$22[3] - 0 === i$$52
    }
    function v180(elem$$63, i$$51, match$$21) {
      return i$$51 > match$$21[3] - 0
    }
    function v179(elem$$62, i$$50, match$$20) {
      return i$$50 < match$$20[3] - 0
    }
    function v178(elem$$61, i$$49) {
      return i$$49 % 2 === 1
    }
    function v177(elem$$60, i$$48) {
      return i$$48 % 2 === 0
    }
    function v176(elem$$59, i$$47, match$$19, array$$12) {
      return i$$47 === array$$12.length - 1
    }
    function v175(elem$$58, i$$46) {
      return i$$46 === 0
    }
    function v174(elem$$57) {
      return/input|select|textarea|button/i.test(elem$$57.nodeName)
    }
    function v173(elem$$56) {
      var v1655 = "button" === elem$$56.type;
      if(!v1655) {
        v1655 = elem$$56.nodeName.toLowerCase() === "button"
      }
      return v1655
    }
    function v172(elem$$55) {
      return"reset" === elem$$55.type
    }
    function v171(elem$$54) {
      return"image" === elem$$54.type
    }
    function v170(elem$$53) {
      return"submit" === elem$$53.type
    }
    function v169(elem$$52) {
      return"password" === elem$$52.type
    }
    function v168(elem$$51) {
      return"file" === elem$$51.type
    }
    function v167(elem$$50) {
      return"checkbox" === elem$$50.type
    }
    function v166(elem$$49) {
      return"radio" === elem$$49.type
    }
    function v165(elem$$48) {
      return"text" === elem$$48.type
    }
    function v164(elem$$47) {
      return/h\d/i.test(elem$$47.nodeName)
    }
    function v163(elem$$46, i$$45, match$$18) {
      return!!JAM.call(Sizzle, null, [match$$18[3], elem$$46]).length
    }
    function v162(elem$$45) {
      return!elem$$45.firstChild
    }
    function v161(elem$$44) {
      return!!elem$$44.firstChild
    }
    function v160(elem$$43) {
      return elem$$43.selected === true
    }
    function v159(elem$$42) {
      return elem$$42.checked === true
    }
    function v158(elem$$41) {
      return elem$$41.disabled === true
    }
    function v157(elem$$40) {
      var v1671 = elem$$40.disabled === false;
      if(v1671) {
        v1671 = elem$$40.type !== "hidden"
      }
      return v1671
    }
    function v156(match$$17) {
      match$$17.unshift(true);
      return match$$17
    }
    function v155(match$$16, curLoop$$4, inplace$$3, result$$3, not$$3) {
      if(match$$16[1] === "not") {
        var v5297 = chunker.exec(match$$16[3]);
        if(!v5297) {
          v5297 = ""
        }
        var v3311 = v5297.length > 1;
        if(!v3311) {
          v3311 = /^\w/.test(match$$16[3])
        }
        if(v3311) {
          var v1672 = match$$16;
          var v5598 = JAM.call(Sizzle, null, [match$$16[3], null, null, curLoop$$4]);
          v1672[3] = v5598
        }else {
          var ret$$11 = JAM.call(Sizzle.filter, Sizzle, [match$$16[3], curLoop$$4, inplace$$3, true ^ not$$3]);
          if(!inplace$$3) {
            var v1675 = result$$3.push;
            JAM.call(v1675.apply, v1675, [result$$3, ret$$11])
          }
          return false
        }
      }else {
        var v3313 = Expr.match.POS.test(match$$16[0]);
        if(!v3313) {
          v3313 = Expr.match.CHILD.test(match$$16[0])
        }
        if(v3313) {
          return true
        }
      }
      return match$$16
    }
    function v154(match$$15, curLoop$$3, inplace$$2, result$$2, not$$2, isXML$$8) {
      var name$$44 = match$$15[1].replace(/\\/g, "");
      var v3314 = !isXML$$8;
      if(v3314) {
        var v4348 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          v3314 = v4348[name$$44]
        }
      }
      if(v3314) {
        var v1681 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          match$$15[1] = v1681[name$$44]
        }
      }
      if(match$$15[2] === "~=") {
        match$$15[4] = " " + match$$15[4] + " "
      }
      return match$$15
    }
    function v153(match$$14) {
      if(match$$14[1] === "nth") {
        var v4349 = match$$14[2] === "even";
        if(v4349) {
          v4349 = "2n"
        }
        var v3318 = v4349;
        if(!v3318) {
          var v4989 = match$$14[2] === "odd";
          if(v4989) {
            v4989 = "2n+1"
          }
          var v4350 = v4989;
          if(!v4350) {
            var v5299 = !/\D/.test(match$$14[2]);
            if(v5299) {
              v5299 = "0n+" + match$$14[2]
            }
            var v4990 = v5299;
            if(!v4990) {
              v4990 = match$$14[2]
            }
            v4350 = v4990
          }
          v3318 = v4350
        }
        var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(v3318);
        var v3319 = test[1];
        var v4352 = test[2];
        if(!v4352) {
          v4352 = 1
        }
        match$$14[2] = v3319 + v4352 - 0;
        match$$14[3] = test[3] - 0
      }
      match$$14[0] = done;
      done = done + 1;
      return match$$14
    }
    function v152(match$$13, curLoop$$2) {
      return match$$13[1].toLowerCase()
    }
    function v151(match$$12) {
      return match$$12[1].replace(/\\/g, "")
    }
    function v150(match$$11, curLoop$$1, inplace$$1, result$$1, not$$1, isXML$$7) {
      match$$11 = " " + match$$11[1].replace(/\\/g, "") + " ";
      if(isXML$$7) {
        return match$$11
      }
      var i$$44 = 0;
      var elem$$39;
      introspect(JAM.policy.p3) {
        var v3322 = elem$$39 = curLoop$$1[i$$44]
      }
      var v1694 = v3322 != null;
      for(;v1694;) {
        if(elem$$39) {
          var v3323 = not$$1;
          var v4354 = elem$$39.className;
          if(v4354) {
            v4354 = (" " + elem$$39.className + " ").replace(/[\t\n]/g, " ").indexOf(match$$11) >= 0
          }
          if(v3323 ^ v4354) {
            if(!inplace$$1) {
              JAM.call(result$$1.push, result$$1, [elem$$39])
            }
          }else {
            if(inplace$$1) {
              curLoop$$1[i$$44] = false
            }
          }
        }
        i$$44 = i$$44 + 1;
        introspect(JAM.policy.p3) {
          var v3325 = elem$$39 = curLoop$$1[i$$44]
        }
        v1694 = v3325 != null
      }
      return false
    }
    function v149(match$$10, context$$7) {
      return context$$7.getElementsByTagName(match$$10[1])
    }
    function v148(match$$9, context$$6) {
      if(typeof context$$6.getElementsByName !== "undefined") {
        var ret$$10 = [];
        var results$$3 = context$$6.getElementsByName(match$$9[1]);
        var i$$43 = 0;
        var l$$13 = results$$3.length;
        var v1699 = i$$43 < l$$13;
        for(;v1699;) {
          introspect(JAM.policy.p3) {
            var v4356 = results$$3[i$$43]
          }
          if(v4356.getAttribute("name") === match$$9[1]) {
            introspect(JAM.policy.p3) {
              var v1697 = results$$3[i$$43]
            }
            JAM.call(ret$$10.push, ret$$10, [v1697])
          }
          i$$43 = i$$43 + 1;
          v1699 = i$$43 < l$$13
        }
        var v1700;
        if(ret$$10.length === 0) {
          v1700 = null
        }else {
          v1700 = ret$$10
        }
        return v1700
      }
      return
    }
    function v147(match$$8, context$$5, isXML$$6) {
      var v3330 = typeof context$$5.getElementById !== "undefined";
      if(v3330) {
        v3330 = !isXML$$6
      }
      if(v3330) {
        var m$$1 = context$$5.getElementById(match$$8[1]);
        var v1703;
        if(m$$1) {
          v1703 = [m$$1]
        }else {
          v1703 = []
        }
        return v1703
      }
      return
    }
    function v146(checkSet$$6, part$$3, isXML$$5) {
      var doneName$$3 = done;
      done = done + 1;
      var checkFn$$1 = dirCheck;
      var v3331 = typeof part$$3 === "string";
      if(v3331) {
        v3331 = !/\W/.test(part$$3)
      }
      if(v3331) {
        var nodeCheck$$3 = part$$3 = part$$3.toLowerCase();
        checkFn$$1 = dirNodeCheck
      }
      JAM.call(checkFn$$1, null, ["previousSibling", part$$3, doneName$$3, checkSet$$6, nodeCheck$$3, isXML$$5]);
      return
    }
    function v145(checkSet$$5, part$$2, isXML$$4) {
      var doneName$$2 = done;
      done = done + 1;
      var checkFn = dirCheck;
      var v3332 = typeof part$$2 === "string";
      if(v3332) {
        v3332 = !/\W/.test(part$$2)
      }
      if(v3332) {
        var nodeCheck$$2 = part$$2 = part$$2.toLowerCase();
        checkFn = dirNodeCheck
      }
      JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$4]);
      return
    }
    function v144(checkSet$$4, part$$1) {
      var isPartStr$$1 = typeof part$$1 === "string";
      var v3333 = isPartStr$$1;
      if(v3333) {
        v3333 = !/\W/.test(part$$1)
      }
      if(v3333) {
        part$$1 = part$$1.toLowerCase();
        var i$$42 = 0;
        var l$$12 = checkSet$$4.length;
        var v1710 = i$$42 < l$$12;
        for(;v1710;) {
          introspect(JAM.policy.p3) {
            var elem$$38 = checkSet$$4[i$$42]
          }
          if(elem$$38) {
            var parent$$3 = elem$$38.parentNode;
            var v1708 = checkSet$$4;
            var v1709 = i$$42;
            var v3334;
            if(parent$$3.nodeName.toLowerCase() === part$$1) {
              v3334 = parent$$3
            }else {
              v3334 = false
            }
            v1708[v1709] = v3334
          }
          i$$42 = i$$42 + 1;
          v1710 = i$$42 < l$$12
        }
      }else {
        i$$42 = 0;
        l$$12 = checkSet$$4.length;
        var v1712 = i$$42 < l$$12;
        for(;v1712;) {
          elem$$38 = checkSet$$4[i$$42];
          if(elem$$38) {
            var v1711;
            if(isPartStr$$1) {
              v1711 = elem$$38.parentNode
            }else {
              v1711 = elem$$38.parentNode === part$$1
            }
            checkSet$$4[i$$42] = v1711
          }
          i$$42 = i$$42 + 1;
          v1712 = i$$42 < l$$12
        }
        if(isPartStr$$1) {
          JAM.call(Sizzle.filter, Sizzle, [part$$1, checkSet$$4, true])
        }
      }
      return
    }
    function v143(checkSet$$3, part) {
      var isPartStr = typeof part === "string";
      var v1715 = isPartStr;
      if(v1715) {
        v1715 = !/\W/.test(part)
      }
      var isTag = v1715;
      var v1716 = isPartStr;
      if(v1716) {
        v1716 = !isTag
      }
      var isPartStrNotTag = v1716;
      if(isTag) {
        part = part.toLowerCase()
      }
      var i$$41 = 0;
      var l$$11 = checkSet$$3.length;
      var elem$$37;
      var v1721 = i$$41 < l$$11;
      for(;v1721;) {
        introspect(JAM.policy.p3) {
          var v1720 = elem$$37 = checkSet$$3[i$$41]
        }
        if(v1720) {
          var v3337 = elem$$37 = elem$$37.previousSibling;
          if(v3337) {
            v3337 = elem$$37.nodeType !== 1
          }
          var v1717 = v3337;
          for(;v1717;) {
            var v3338 = elem$$37 = elem$$37.previousSibling;
            if(v3338) {
              v3338 = elem$$37.nodeType !== 1
            }
            v1717 = v3338
          }
          var v1718 = checkSet$$3;
          var v1719 = i$$41;
          var v3339;
          var v4996 = isPartStrNotTag;
          if(!v4996) {
            var v5303 = elem$$37;
            if(v5303) {
              v5303 = elem$$37.nodeName.toLowerCase() === part
            }
            v4996 = v5303
          }
          if(v4996) {
            v3339 = elem$$37 || false
          }else {
            v3339 = elem$$37 === part
          }
          v1718[v1719] = v3339
        }
        i$$41 = i$$41 + 1;
        v1721 = i$$41 < l$$11
      }
      if(isPartStrNotTag) {
        JAM.call(Sizzle.filter, Sizzle, [part, checkSet$$3, true])
      }
      return
    }
    function v142(elem$$36) {
      return elem$$36.getAttribute("href")
    }
    function v141(msg$$1) {
      throw"Syntax error, unrecognized expression: " + msg$$1;
    }
    function v140(expr$$5, set$$4, inplace, not) {
      var old$$1 = expr$$5;
      var result = [];
      var curLoop = set$$4;
      var match$$7;
      var anyFound;
      var v1722 = set$$4;
      if(v1722) {
        var v3340 = set$$4[0];
        if(v3340) {
          v3340 = isXML(set$$4[0])
        }
        v1722 = v3340
      }
      var isXMLFilter = v1722;
      var v3341 = expr$$5;
      if(v3341) {
        v3341 = set$$4.length
      }
      var v1741 = v3341;
      for(;v1741;) {
        var type$$55;
        for(type$$55 in Expr.filter) {
          var v5305 = Expr.leftMatch;
          introspect(JAM.policy.p3) {
            var v4997 = v5305[type$$55]
          }
          var v3342 = (match$$7 = v4997.exec(expr$$5)) != null;
          if(v3342) {
            v3342 = match$$7[2]
          }
          if(v3342) {
            var v1723 = Expr.filter;
            introspect(JAM.policy.p3) {
              var filter = v1723[type$$55]
            }
            var found;
            var item;
            var left$$3 = match$$7[1];
            anyFound = false;
            JAM.call(match$$7.splice, match$$7, [1, 1]);
            if(left$$3.substr(left$$3.length - 1) === "\\") {
              continue
            }
            if(curLoop === result) {
              result = []
            }
            var v3344 = Expr.preFilter;
            introspect(JAM.policy.p3) {
              var v1729 = v3344[type$$55]
            }
            if(v1729) {
              var v1726 = Expr.preFilter;
              match$$7 = JAM.call(JAM.get(v1726, type$$55, JAM.policy.p3), v1726, [match$$7, curLoop, inplace, result, not, isXMLFilter]);
              if(!match$$7) {
                anyFound = found = true
              }else {
                if(match$$7 === true) {
                  continue
                }
              }
            }
            if(match$$7) {
              var i$$40 = 0;
              introspect(JAM.policy.p3) {
                var v3345 = item = curLoop[i$$40]
              }
              var v1732 = v3345 != null;
              for(;v1732;) {
                if(item) {
                  found = JAM.call(filter, null, [item, match$$7, i$$40, curLoop]);
                  var pass$$2 = not ^ !!found;
                  var v3347 = inplace;
                  if(v3347) {
                    v3347 = found != null
                  }
                  if(v3347) {
                    if(pass$$2) {
                      anyFound = true
                    }else {
                      curLoop[i$$40] = false
                    }
                  }else {
                    if(pass$$2) {
                      JAM.call(result.push, result, [item]);
                      anyFound = true
                    }
                  }
                }
                i$$40 = i$$40 + 1;
                introspect(JAM.policy.p3) {
                  var v3348 = item = curLoop[i$$40]
                }
                v1732 = v3348 != null
              }
            }
            if(found !== undefined$$1) {
              if(!inplace) {
                curLoop = result
              }
              var v3349 = Expr.match;
              introspect(JAM.policy.p3) {
                var v1734 = v3349[type$$55]
              }
              expr$$5 = expr$$5.replace(v1734, "");
              if(!anyFound) {
                return[]
              }
              break
            }
          }
        }
        if(expr$$5 === old$$1) {
          if(anyFound == null) {
            JAM.call(Sizzle.error, Sizzle, [expr$$5])
          }else {
            break
          }
        }
        old$$1 = expr$$5;
        var v3350 = expr$$5;
        if(v3350) {
          v3350 = set$$4.length
        }
        v1741 = v3350
      }
      return curLoop
    }
    function v139(expr$$4, context$$4, isXML$$3) {
      var set$$3;
      var match$$6;
      if(!expr$$4) {
        return[]
      }
      var i$$39 = 0;
      var l$$10 = Expr.order.length;
      var v1751 = i$$39 < l$$10;
      for(;v1751;) {
        var v1744 = Expr.order;
        introspect(JAM.policy.p3) {
          var type$$54 = v1744[i$$39]
        }
        var v4371 = Expr.leftMatch;
        introspect(JAM.policy.p3) {
          var v3351 = v4371[type$$54]
        }
        if(match$$6 = v3351.exec(expr$$4)) {
          var left$$2 = match$$6[1];
          JAM.call(match$$6.splice, match$$6, [1, 1]);
          if(left$$2.substr(left$$2.length - 1) !== "\\") {
            var v1745 = match$$6;
            var v4373 = match$$6[1];
            if(!v4373) {
              v4373 = ""
            }
            var v5599 = v4373.replace(/\\/g, "");
            v1745[1] = v5599;
            var v1746 = Expr.find;
            set$$3 = JAM.call(JAM.get(v1746, type$$54, JAM.policy.p3), v1746, [match$$6, context$$4, isXML$$3]);
            if(set$$3 != null) {
              var v3354 = Expr.match;
              introspect(JAM.policy.p3) {
                var v1747 = v3354[type$$54]
              }
              expr$$4 = expr$$4.replace(v1747, "");
              break
            }
          }
        }
        i$$39 = i$$39 + 1;
        v1751 = i$$39 < l$$10
      }
      if(!set$$3) {
        set$$3 = context$$4.getElementsByTagName("*")
      }
      return{set:set$$3, expr:expr$$4}
    }
    function v138(expr$$3, set$$2) {
      return JAM.call(Sizzle, null, [expr$$3, null, null, set$$2])
    }
    function v137(results$$2) {
      if(sortOrder) {
        hasDuplicate = baseHasDuplicate;
        JAM.call(results$$2.sort, results$$2, [sortOrder]);
        if(hasDuplicate) {
          var i$$38 = 1;
          var v1755 = i$$38 < results$$2.length;
          for(;v1755;) {
            introspect(JAM.policy.p3) {
              var v3356 = results$$2[i$$38]
            }
            var v4374 = i$$38 - 1;
            introspect(JAM.policy.p3) {
              var v3357 = results$$2[v4374]
            }
            if(v3356 === v3357) {
              var v1753 = i$$38;
              i$$38 = i$$38 - 1;
              JAM.call(results$$2.splice, results$$2, [v1753, 1])
            }
            i$$38 = i$$38 + 1;
            v1755 = i$$38 < results$$2.length
          }
        }
      }
      return results$$2
    }
    function v136() {
      baseHasDuplicate = false;
      return 0
    }
    function posProcess(selector$$9, context$$12) {
      var tmpSet = [];
      var later = "";
      var match$$35;
      var v1756;
      if(context$$12.nodeType) {
        v1756 = [context$$12]
      }else {
        v1756 = context$$12
      }
      var root$$2 = v1756;
      var v1758 = match$$35 = Expr.match.PSEUDO.exec(selector$$9);
      for(;v1758;) {
        later = later + match$$35[0];
        selector$$9 = selector$$9.replace(Expr.match.PSEUDO, "");
        v1758 = match$$35 = Expr.match.PSEUDO.exec(selector$$9)
      }
      var v1759;
      var v4377 = Expr.relative;
      introspect(JAM.policy.p3) {
        var v3364 = v4377[selector$$9]
      }
      if(v3364) {
        v1759 = selector$$9 + "*"
      }else {
        v1759 = selector$$9
      }
      selector$$9 = v1759;
      var i$$58 = 0;
      var l$$16 = root$$2.length;
      var v1761 = i$$58 < l$$16;
      for(;v1761;) {
        introspect(JAM.policy.p3) {
          var v1760 = root$$2[i$$58]
        }
        JAM.call(Sizzle, null, [selector$$9, v1760, tmpSet]);
        i$$58 = i$$58 + 1;
        v1761 = i$$58 < l$$16
      }
      return JAM.call(Sizzle.filter, Sizzle, [later, tmpSet])
    }
    function isXML(elem$$75) {
      var v3365;
      if(elem$$75) {
        var v4378 = elem$$75.ownerDocument;
        if(!v4378) {
          v4378 = elem$$75
        }
        v3365 = v4378
      }else {
        v3365 = 0
      }
      var documentElement = v3365.documentElement;
      var v1763;
      if(documentElement) {
        v1763 = documentElement.nodeName !== "HTML"
      }else {
        v1763 = false
      }
      return v1763
    }
    function makeArray(array$$15, results$$4) {
      var v1764 = Array.prototype.slice;
      array$$15 = JAM.call(v1764.call, v1764, [array$$15, 0]);
      if(results$$4) {
        var v1765 = results$$4.push;
        JAM.call(v1765.apply, v1765, [results$$4, array$$15]);
        return results$$4
      }
      return array$$15
    }
    function Sizzle(selector$$8, context$$3, results$$1, seed) {
      results$$1 = results$$1 || [];
      var origContext = context$$3 = context$$3 || document$$1;
      var v3368 = context$$3.nodeType !== 1;
      if(v3368) {
        v3368 = context$$3.nodeType !== 9
      }
      if(v3368) {
        return[]
      }
      var v3369 = !selector$$8;
      if(!v3369) {
        v3369 = typeof selector$$8 !== "string"
      }
      if(v3369) {
        return results$$1
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
      var v1770 = (m = chunker.exec(soFar)) !== null;
      for(;v1770;) {
        soFar = m[3];
        JAM.call(parts$$1.push, parts$$1, [m[1]]);
        if(m[2]) {
          extra = m[3];
          break
        }
        chunker.exec("");
        v1770 = (m = chunker.exec(soFar)) !== null
      }
      var v3372 = parts$$1.length > 1;
      if(v3372) {
        v3372 = origPOS.exec(selector$$8)
      }
      if(v3372) {
        var v3373 = parts$$1.length === 2;
        if(v3373) {
          var v4385 = Expr.relative;
          var v4386 = parts$$1[0];
          introspect(JAM.policy.p3) {
            v3373 = v4385[v4386]
          }
        }
        if(v3373) {
          set$$1 = posProcess(parts$$1[0] + parts$$1[1], context$$3)
        }else {
          var v1772;
          var v4387 = Expr.relative;
          var v4388 = parts$$1[0];
          introspect(JAM.policy.p3) {
            var v3377 = v4387[v4388]
          }
          if(v3377) {
            v1772 = [context$$3]
          }else {
            v1772 = JAM.call(Sizzle, null, [parts$$1.shift(), context$$3])
          }
          set$$1 = v1772;
          var v1774 = parts$$1.length;
          for(;v1774;) {
            selector$$8 = parts$$1.shift();
            var v3378 = Expr.relative;
            introspect(JAM.policy.p3) {
              var v1773 = v3378[selector$$8]
            }
            if(v1773) {
              selector$$8 = selector$$8 + parts$$1.shift()
            }
            set$$1 = posProcess(selector$$8, set$$1);
            v1774 = parts$$1.length
          }
        }
      }else {
        var v3381 = !seed;
        if(v3381) {
          var v4389 = parts$$1.length > 1;
          if(v4389) {
            var v5003 = context$$3.nodeType === 9;
            if(v5003) {
              var v5307 = !contextXML;
              if(v5307) {
                var v5442 = Expr.match.ID.test(parts$$1[0]);
                if(v5442) {
                  var v5518 = Expr.match.ID;
                  var v5538 = parts$$1.length - 1;
                  introspect(JAM.policy.p3) {
                    var v5519 = parts$$1[v5538]
                  }
                  v5442 = !v5518.test(v5519)
                }
                v5307 = v5442
              }
              v5003 = v5307
            }
            v4389 = v5003
          }
          v3381 = v4389
        }
        if(v3381) {
          var ret$$9 = JAM.call(Sizzle.find, Sizzle, [parts$$1.shift(), context$$3, contextXML]);
          var v1777;
          if(ret$$9.expr) {
            v1777 = JAM.call(Sizzle.filter, Sizzle, [ret$$9.expr, ret$$9.set])[0]
          }else {
            v1777 = ret$$9.set[0]
          }
          context$$3 = v1777
        }
        if(context$$3) {
          var v1779;
          if(seed) {
            v1779 = {expr:parts$$1.pop(), set:JAM.call(makeArray, null, [seed])}
          }else {
            var v3387 = parts$$1.pop();
            var v4392;
            var v5308 = parts$$1.length === 1;
            if(v5308) {
              var v5499 = parts$$1[0] === "~";
              if(!v5499) {
                v5499 = parts$$1[0] === "+"
              }
              var v5444 = v5499;
              if(v5444) {
                v5444 = context$$3.parentNode
              }
              v5308 = v5444
            }
            if(v5308) {
              v4392 = context$$3.parentNode
            }else {
              v4392 = context$$3
            }
            v1779 = JAM.call(Sizzle.find, Sizzle, [v3387, v4392, contextXML])
          }
          ret$$9 = v1779;
          var v1780;
          if(ret$$9.expr) {
            v1780 = JAM.call(Sizzle.filter, Sizzle, [ret$$9.expr, ret$$9.set])
          }else {
            v1780 = ret$$9.set
          }
          set$$1 = v1780;
          if(parts$$1.length > 0) {
            checkSet$$2 = JAM.call(makeArray, null, [set$$1])
          }else {
            prune = false
          }
          var v1785 = parts$$1.length;
          for(;v1785;) {
            var cur$$2 = parts$$1.pop();
            var pop = cur$$2;
            var v4393 = Expr.relative;
            introspect(JAM.policy.p3) {
              var v3393 = v4393[cur$$2]
            }
            if(!v3393) {
              cur$$2 = ""
            }else {
              pop = parts$$1.pop()
            }
            if(pop == null) {
              pop = context$$3
            }
            var v1784 = Expr.relative;
            JAM.call(JAM.get(v1784, cur$$2, JAM.policy.p3), v1784, [checkSet$$2, pop, contextXML]);
            v1785 = parts$$1.length
          }
        }else {
          checkSet$$2 = parts$$1 = []
        }
      }
      if(!checkSet$$2) {
        checkSet$$2 = set$$1
      }
      if(!checkSet$$2) {
        JAM.call(Sizzle.error, Sizzle, [cur$$2 || selector$$8])
      }
      if(JAM.call(toString$$1.call, toString$$1, [checkSet$$2]) === "[object Array]") {
        if(!prune) {
          var v1790 = results$$1.push;
          JAM.call(v1790.apply, v1790, [results$$1, checkSet$$2])
        }else {
          var v3395 = context$$3;
          if(v3395) {
            v3395 = context$$3.nodeType === 1
          }
          if(v3395) {
            var i$$37 = 0;
            introspect(JAM.policy.p3) {
              var v3396 = checkSet$$2[i$$37]
            }
            var v1793 = v3396 != null;
            for(;v1793;) {
              introspect(JAM.policy.p3) {
                var v3397 = checkSet$$2[i$$37]
              }
              if(v3397) {
                introspect(JAM.policy.p3) {
                  var v5005 = checkSet$$2[i$$37]
                }
                var v4395 = v5005 === true;
                if(!v4395) {
                  introspect(JAM.policy.p3) {
                    var v5445 = checkSet$$2[i$$37]
                  }
                  var v5006 = v5445.nodeType === 1;
                  if(v5006) {
                    introspect(JAM.policy.p3) {
                      var v5310 = checkSet$$2[i$$37]
                    }
                    v5006 = JAM.call(contains, null, [context$$3, v5310])
                  }
                  v4395 = v5006
                }
                v3397 = v4395
              }
              if(v3397) {
                introspect(JAM.policy.p3) {
                  var v1791 = set$$1[i$$37]
                }
                JAM.call(results$$1.push, results$$1, [v1791])
              }
              i$$37 = i$$37 + 1;
              introspect(JAM.policy.p3) {
                var v3398 = checkSet$$2[i$$37]
              }
              v1793 = v3398 != null
            }
          }else {
            i$$37 = 0;
            introspect(JAM.policy.p3) {
              var v3399 = checkSet$$2[i$$37]
            }
            var v1796 = v3399 != null;
            for(;v1796;) {
              introspect(JAM.policy.p3) {
                var v3400 = checkSet$$2[i$$37]
              }
              if(v3400) {
                introspect(JAM.policy.p3) {
                  var v5008 = checkSet$$2[i$$37]
                }
                v3400 = v5008.nodeType === 1
              }
              if(v3400) {
                introspect(JAM.policy.p3) {
                  var v1794 = set$$1[i$$37]
                }
                JAM.call(results$$1.push, results$$1, [v1794])
              }
              i$$37 = i$$37 + 1;
              introspect(JAM.policy.p3) {
                var v3401 = checkSet$$2[i$$37]
              }
              v1796 = v3401 != null
            }
          }
        }
      }else {
        JAM.call(makeArray, null, [checkSet$$2, results$$1])
      }
      if(extra) {
        JAM.call(Sizzle, null, [extra, origContext, results$$1, seed]);
        JAM.call(Sizzle.uniqueSort, Sizzle, [results$$1])
      }
      return results$$1
    }
    function getText(elems$$5) {
      var ret$$8 = "";
      var elem$$33;
      var i$$34 = 0;
      introspect(JAM.policy.p3) {
        var v1802 = elems$$5[i$$34]
      }
      for(;v1802;) {
        elem$$33 = elems$$5[i$$34];
        var v3402 = elem$$33.nodeType === 3;
        if(!v3402) {
          v3402 = elem$$33.nodeType === 4
        }
        if(v3402) {
          ret$$8 = ret$$8 + elem$$33.nodeValue
        }else {
          if(elem$$33.nodeType !== 8) {
            ret$$8 = ret$$8 + getText(elem$$33.childNodes)
          }
        }
        i$$34 = i$$34 + 1;
        v1802 = elems$$5[i$$34]
      }
      return ret$$8
    }
    function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML$$1) {
      var i$$35 = 0;
      var l$$8 = checkSet.length;
      var v1807 = i$$35 < l$$8;
      for(;v1807;) {
        introspect(JAM.policy.p3) {
          var elem$$34 = checkSet[i$$35]
        }
        if(elem$$34) {
          introspect(JAM.policy.p3) {
            elem$$34 = elem$$34[dir]
          }
          var match$$4 = false;
          for(;elem$$34;) {
            if(elem$$34.sizcache === doneName) {
              var v1803 = elem$$34.sizset;
              introspect(JAM.policy.p3) {
                match$$4 = checkSet[v1803]
              }
              break
            }
            var v3408 = elem$$34.nodeType === 1;
            if(v3408) {
              v3408 = !isXML$$1
            }
            if(v3408) {
              elem$$34.sizcache = doneName;
              elem$$34.sizset = i$$35
            }
            if(elem$$34.nodeName.toLowerCase() === cur) {
              match$$4 = elem$$34;
              break
            }
            introspect(JAM.policy.p3) {
              elem$$34 = elem$$34[dir]
            }
          }
          checkSet[i$$35] = match$$4
        }
        i$$35 = i$$35 + 1;
        v1807 = i$$35 < l$$8
      }
      return
    }
    function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$2) {
      var i$$36 = 0;
      var l$$9 = checkSet$$1.length;
      var v1815 = i$$36 < l$$9;
      for(;v1815;) {
        introspect(JAM.policy.p3) {
          var elem$$35 = checkSet$$1[i$$36]
        }
        if(elem$$35) {
          introspect(JAM.policy.p3) {
            elem$$35 = elem$$35[dir$$1]
          }
          var match$$5 = false;
          for(;elem$$35;) {
            if(elem$$35.sizcache === doneName$$1) {
              var v1808 = elem$$35.sizset;
              introspect(JAM.policy.p3) {
                match$$5 = checkSet$$1[v1808]
              }
              break
            }
            if(elem$$35.nodeType === 1) {
              if(!isXML$$2) {
                elem$$35.sizcache = doneName$$1;
                elem$$35.sizset = i$$36
              }
              if(typeof cur$$1 !== "string") {
                if(elem$$35 === cur$$1) {
                  match$$5 = true;
                  break
                }
              }else {
                if(JAM.call(Sizzle.filter, Sizzle, [cur$$1, [elem$$35]]).length > 0) {
                  match$$5 = elem$$35;
                  break
                }
              }
            }
            introspect(JAM.policy.p3) {
              elem$$35 = elem$$35[dir$$1]
            }
          }
          checkSet$$1[i$$36] = match$$5
        }
        i$$36 = i$$36 + 1;
        v1815 = i$$36 < l$$9
      }
      return
    }
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var done = 0;
    var toString$$1 = Object.prototype.toString;
    var hasDuplicate = false;
    var baseHasDuplicate = true;
    var v1817 = [0, 0];
    JAM.call(v1817.sort, v1817, [v136]);
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
    for(type$$53 in Expr.match) {
      var v1829 = Expr.match;
      var v1830 = type$$53;
      var v5311 = Expr.match;
      introspect(JAM.policy.p3) {
        var v5010 = v5311[type$$53]
      }
      var v5600 = new RegExp(v5010.source + /(?![^\[]*\])(?![^\(]*\))/.source);
      JAM.set(v1829, v1830, v5600, JAM.policy.p2);
      var v1831 = Expr.leftMatch;
      var v1832 = type$$53;
      var v4406 = /(^(?:.|\r|\n)*?)/.source;
      var v5446 = Expr.match;
      introspect(JAM.policy.p3) {
        var v5312 = v5446[type$$53]
      }
      var v5601 = new RegExp(v4406 + v5312.source.replace(/\\(\d+)/g, v190));
      JAM.set(v1831, v1832, v5601, JAM.policy.p2)
    }
    try {
      var v4408 = Array.prototype.slice;
      JAM.call(v4408.call, v4408, [document$$1.documentElement.childNodes, 0])[0].nodeType
    }catch(e$$20) {
      makeArray = v191
    }
    var sortOrder;
    if(document$$1.documentElement.compareDocumentPosition) {
      sortOrder = v192
    }else {
      if("sourceIndex" in document$$1.documentElement) {
        sortOrder = v193
      }else {
        if(document$$1.createRange) {
          sortOrder = v194
        }
      }
    }
    v197();
    v200();
    if(document$$1.querySelectorAll) {
      v202()
    }
    v204();
    var v1839;
    if(document$$1.compareDocumentPosition) {
      v1839 = v205
    }else {
      v1839 = v206
    }
    var contains = v1839;
    jQuery$$1.find = Sizzle;
    jQuery$$1.expr = Sizzle.selectors;
    jQuery$$1.expr[":"] = jQuery$$1.expr.filters;
    jQuery$$1.unique = Sizzle.uniqueSort;
    jQuery$$1.text = getText;
    jQuery$$1.isXMLDoc = isXML;
    jQuery$$1.contains = contains;
    return
  }
  function v135() {
    var id$$3;
    for(id$$3 in jQuery$$1.cache) {
      var v4410 = jQuery$$1.cache;
      introspect(JAM.policy.p3) {
        var v3421 = v4410[id$$3]
      }
      if(v3421.handle) {
        try {
          var v1841 = jQuery$$1.event;
          var v5014 = jQuery$$1.cache;
          introspect(JAM.policy.p3) {
            var v4411 = v5014[id$$3]
          }
          JAM.call(v1841.remove, v1841, [v4411.handle.elem])
        }catch(e$$19) {
        }
      }
    }
    return
  }
  function v134(i$$33, name$$43) {
    function v133(fn$$13) {
      var v1845;
      if(fn$$13) {
        v1845 = JAM.call(this.bind, this, [name$$43, fn$$13])
      }else {
        v1845 = JAM.call(this.trigger, this, [name$$43])
      }
      return v1845
    }
    JAM.set(jQuery$$1.fn, name$$43, v133, JAM.policy.p2);
    if(jQuery$$1.attrFn) {
      JAM.set(jQuery$$1.attrFn, name$$43, true, JAM.policy.p2)
    }
    return
  }
  function v132(i$$31, name$$42) {
    function v131(types$$4, data$$37, fn$$12, origSelector) {
      function v130() {
        var v1849 = jQuery$$1.event;
        JAM.call(v1849.add, v1849, [this, liveConvert(type$$52, selector$$7), {data:data$$37, selector:selector$$7, handler:fn$$12, origType:type$$52, origHandler:fn$$12, preType:preType}]);
        return
      }
      var type$$52;
      var i$$32 = 0;
      var match$$3;
      var namespaces$$9;
      var preType;
      var v1852 = origSelector;
      if(!v1852) {
        v1852 = this.selector
      }
      var selector$$7 = v1852;
      var v1853;
      if(origSelector) {
        v1853 = this
      }else {
        v1853 = jQuery$$1(this.context)
      }
      var context$$2 = v1853;
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$37])) {
        fn$$12 = data$$37;
        data$$37 = undefined$$1
      }
      types$$4 = (types$$4 || "").split(" ");
      var v4412 = i$$32;
      i$$32 = i$$32 + 1;
      introspect(JAM.policy.p3) {
        var v3425 = type$$52 = types$$4[v4412]
      }
      var v1864 = v3425 != null;
      for(;v1864;) {
        match$$3 = rnamespaces.exec(type$$52);
        namespaces$$9 = "";
        if(match$$3) {
          namespaces$$9 = match$$3[0];
          type$$52 = type$$52.replace(rnamespaces, "")
        }
        if(type$$52 === "hover") {
          JAM.call(types$$4.push, types$$4, ["mouseenter" + namespaces$$9, "mouseleave" + namespaces$$9]);
          var v4413 = i$$32;
          i$$32 = i$$32 + 1;
          introspect(JAM.policy.p3) {
            var v3426 = type$$52 = types$$4[v4413]
          }
          v1864 = v3426 != null;
          continue
        }
        preType = type$$52;
        var v3427 = type$$52 === "focus";
        if(!v3427) {
          v3427 = type$$52 === "blur"
        }
        if(v3427) {
          introspect(JAM.policy.p3) {
            var v3428 = liveMap[type$$52]
          }
          JAM.call(types$$4.push, types$$4, [v3428 + namespaces$$9]);
          type$$52 = type$$52 + namespaces$$9
        }else {
          introspect(JAM.policy.p3) {
            var v3429 = liveMap[type$$52]
          }
          if(!v3429) {
            v3429 = type$$52
          }
          type$$52 = v3429 + namespaces$$9
        }
        if(name$$42 === "live") {
          JAM.call(context$$2.each, context$$2, [v130])
        }else {
          JAM.call(context$$2.unbind, context$$2, [liveConvert(type$$52, selector$$7), fn$$12])
        }
        var v4416 = i$$32;
        i$$32 = i$$32 + 1;
        introspect(JAM.policy.p3) {
          var v3430 = type$$52 = types$$4[v4416]
        }
        v1864 = v3430 != null
      }
      return this
    }
    JAM.set(jQuery$$1.fn, name$$42, v131, JAM.policy.p2);
    return
  }
  function v129(fnOver, fnOut) {
    var v1866 = JAM.call(this.mouseenter, this, [fnOver]);
    return JAM.call(v1866.mouseleave, v1866, [fnOut || fnOver])
  }
  function v128(fn$$11) {
    function v127(event$$9) {
      var v3431 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "lastToggle" + fn$$11.guid]);
      if(!v3431) {
        v3431 = 0
      }
      var lastToggle = v3431 % i$$30;
      JAM.call(jQuery$$1.data, jQuery$$1, [this, "lastToggle" + fn$$11.guid, lastToggle + 1]);
      event$$9.preventDefault();
      introspect(JAM.policy.p3) {
        var v3433 = args$$5[lastToggle]
      }
      var v1871 = JAM.call(v3433.apply, v3433, [this, arguments]);
      if(!v1871) {
        v1871 = false
      }
      return v1871
    }
    var args$$5 = arguments;
    var i$$30 = 1;
    var v1873 = i$$30 < args$$5.length;
    for(;v1873;) {
      var v3436 = i$$30;
      i$$30 = i$$30 + 1;
      introspect(JAM.policy.p3) {
        var v1872 = args$$5[v3436]
      }
      JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$11, v1872]);
      v1873 = i$$30 < args$$5.length
    }
    return JAM.call(this.click, this, [JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$11, v127])])
  }
  function v126(type$$51, data$$36) {
    if(this[0]) {
      var event$$8 = JAM.call(jQuery$$1.Event, jQuery$$1, [type$$51]);
      event$$8.preventDefault();
      event$$8.stopPropagation();
      var v1875 = jQuery$$1.event;
      JAM.call(v1875.trigger, v1875, [event$$8, data$$36, this[0]]);
      return event$$8.result
    }
    return
  }
  function v125(type$$50, data$$35) {
    function v124() {
      var v1878 = jQuery$$1.event;
      JAM.call(v1878.trigger, v1878, [type$$50, data$$35, this]);
      return
    }
    return JAM.call(this.each, this, [v124])
  }
  function v123(selector$$6, types$$3, fn$$10) {
    if(arguments.length === 0) {
      return JAM.call(this.unbind, this, ["live"])
    }else {
      return JAM.call(this.die, this, [types$$3, null, fn$$10, selector$$6])
    }
    return
  }
  function v122(selector$$5, types$$2, data$$34, fn$$9) {
    return JAM.call(this.live, this, [types$$2, data$$34, fn$$9, selector$$5])
  }
  function v121(type$$49, fn$$8) {
    var v3439 = typeof type$$49 === "object";
    if(v3439) {
      v3439 = !type$$49.preventDefault
    }
    if(v3439) {
      var key$$19;
      for(key$$19 in type$$49) {
        introspect(JAM.policy.p3) {
          var v1880 = type$$49[key$$19]
        }
        JAM.call(this.unbind, this, [key$$19, v1880])
      }
    }else {
      var i$$29 = 0;
      var l$$7 = this.length;
      var v1883 = i$$29 < l$$7;
      for(;v1883;) {
        var v1881 = jQuery$$1.event;
        introspect(JAM.policy.p3) {
          var v1882 = this[i$$29]
        }
        JAM.call(v1881.remove, v1881, [v1882, type$$49, fn$$8]);
        i$$29 = i$$29 + 1;
        v1883 = i$$29 < l$$7
      }
    }
    return this
  }
  function v120(i$$27, name$$41) {
    function v119(type$$48, data$$33, fn$$7) {
      function v118(event$$7) {
        var v1885 = jQuery$$1(this);
        JAM.call(v1885.unbind, v1885, [event$$7, handler$$7]);
        return JAM.call(fn$$7.apply, fn$$7, [this, arguments])
      }
      if(typeof type$$48 === "object") {
        var key$$18;
        for(key$$18 in type$$48) {
          introspect(JAM.policy.p3) {
            var v1886 = type$$48[key$$18]
          }
          JAM.call(JAM.get(this, name$$41, JAM.policy.p3), this, [key$$18, data$$33, v1886, fn$$7])
        }
        return this
      }
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$33])) {
        fn$$7 = data$$33;
        data$$33 = undefined$$1
      }
      var v1889;
      if(name$$41 === "one") {
        v1889 = JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$7, v118])
      }else {
        v1889 = fn$$7
      }
      var handler$$7 = v1889;
      var v3442 = type$$48 === "unload";
      if(v3442) {
        v3442 = name$$41 !== "one"
      }
      if(v3442) {
        JAM.call(this.one, this, [type$$48, data$$33, fn$$7])
      }else {
        var i$$28 = 0;
        var l$$6 = this.length;
        var v1892 = i$$28 < l$$6;
        for(;v1892;) {
          var v1890 = jQuery$$1.event;
          introspect(JAM.policy.p3) {
            var v1891 = this[i$$28]
          }
          JAM.call(v1890.add, v1890, [v1891, type$$48, handler$$7, data$$33]);
          i$$28 = i$$28 + 1;
          v1892 = i$$28 < l$$6
        }
      }
      return this
    }
    JAM.set(jQuery$$1.fn, name$$41, v119, JAM.policy.p2);
    return
  }
  function v117(orig$$2, fix$$1) {
    function v116() {
      this.removeEventListener(orig$$2, handler$$6, true);
      return
    }
    function v115() {
      this.addEventListener(orig$$2, handler$$6, true);
      return
    }
    function handler$$6(e$$18) {
      var v1895 = jQuery$$1.event;
      e$$18 = JAM.call(v1895.fix, v1895, [e$$18]);
      e$$18.type = fix$$1;
      var v1896 = jQuery$$1.event.handle;
      return JAM.call(v1896.call, v1896, [this, e$$18])
    }
    JAM.set(jQuery$$1.event.special, fix$$1, {setup:v115, teardown:v116}, JAM.policy.p2);
    return
  }
  function v114(namespaces$$8) {
    var v1898 = jQuery$$1.event;
    JAM.call(v1898.remove, v1898, [this, ".specialChange"]);
    return formElems.test(this.nodeName)
  }
  function v113(data$$32, namespaces$$7) {
    if(this.type === "file") {
      return false
    }
    var type$$47;
    for(type$$47 in changeFilters) {
      var v1901 = jQuery$$1.event;
      var v1902 = type$$47 + ".specialChange";
      introspect(JAM.policy.p3) {
        var v1903 = changeFilters[type$$47]
      }
      JAM.call(v1901.add, v1901, [this, v1902, v1903])
    }
    return formElems.test(this.nodeName)
  }
  function v112(e$$17) {
    var elem$$32 = e$$17.target;
    JAM.call(jQuery$$1.data, jQuery$$1, [elem$$32, "_change_data", JAM.call(getVal, null, [elem$$32])]);
    return
  }
  function v111(e$$16) {
    var elem$$31 = e$$16.target;
    var type$$46 = elem$$31.type;
    var v4421 = e$$16.keyCode === 13;
    if(v4421) {
      v4421 = elem$$31.nodeName.toLowerCase() !== "textarea"
    }
    var v3446 = v4421;
    if(!v3446) {
      var v5018 = e$$16.keyCode === 32;
      if(v5018) {
        var v5315 = type$$46 === "checkbox";
        if(!v5315) {
          v5315 = type$$46 === "radio"
        }
        v5018 = v5315
      }
      var v4422 = v5018;
      if(!v4422) {
        v4422 = type$$46 === "select-multiple"
      }
      v3446 = v4422
    }
    if(v3446) {
      return JAM.call(testChange.call, testChange, [this, e$$16])
    }
    return
  }
  function v110(e$$15) {
    var elem$$30 = e$$15.target;
    var type$$45 = elem$$30.type;
    var v3447 = type$$45 === "radio";
    if(!v3447) {
      var v4424 = type$$45 === "checkbox";
      if(!v4424) {
        v4424 = elem$$30.nodeName.toLowerCase() === "select"
      }
      v3447 = v4424
    }
    if(v3447) {
      return JAM.call(testChange.call, testChange, [this, e$$15])
    }
    return
  }
  function testChange$$1(e$$14) {
    var elem$$29 = e$$14.target;
    var data$$31;
    var val$$2;
    var v3448 = !formElems.test(elem$$29.nodeName);
    if(!v3448) {
      v3448 = elem$$29.readOnly
    }
    if(v3448) {
      return
    }
    data$$31 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$29, "_change_data"]);
    val$$2 = JAM.call(getVal, null, [elem$$29]);
    var v3449 = e$$14.type !== "focusout";
    if(!v3449) {
      v3449 = elem$$29.type !== "radio"
    }
    if(v3449) {
      JAM.call(jQuery$$1.data, jQuery$$1, [elem$$29, "_change_data", val$$2])
    }
    var v3450 = data$$31 === undefined$$1;
    if(!v3450) {
      v3450 = val$$2 === data$$31
    }
    if(v3450) {
      return
    }
    var v3451 = data$$31 != null;
    if(!v3451) {
      v3451 = val$$2
    }
    if(v3451) {
      e$$14.type = "change";
      var v1911 = jQuery$$1.event;
      return JAM.call(v1911.trigger, v1911, [e$$14, arguments[1], elem$$29])
    }
    return
  }
  function v109(elem$$27) {
    function v108(elem$$28) {
      return elem$$28.selected
    }
    var type$$44 = elem$$27.type;
    var val$$1 = elem$$27.value;
    var v3452 = type$$44 === "radio";
    if(!v3452) {
      v3452 = type$$44 === "checkbox"
    }
    if(v3452) {
      val$$1 = elem$$27.checked
    }else {
      if(type$$44 === "select-multiple") {
        var v1914;
        if(elem$$27.selectedIndex > -1) {
          v1914 = JAM.call(jQuery$$1.map, jQuery$$1, [elem$$27.options, v108]).join("-")
        }else {
          v1914 = ""
        }
        val$$1 = v1914
      }else {
        if(elem$$27.nodeName.toLowerCase() === "select") {
          val$$1 = elem$$27.selectedIndex
        }
      }
    }
    return val$$1
  }
  function v107(namespaces$$6) {
    var v1918 = jQuery$$1.event;
    JAM.call(v1918.remove, v1918, [this, ".specialSubmit"]);
    return
  }
  function v106(data$$30, namespaces$$5) {
    function v105(e$$13) {
      var elem$$26 = e$$13.target;
      var type$$43 = elem$$26.type;
      var v4437 = type$$43 === "text";
      if(!v4437) {
        v4437 = type$$43 === "password"
      }
      var v3456 = v4437;
      if(v3456) {
        var v5317 = jQuery$$1(elem$$26);
        var v4438 = JAM.call(v5317.closest, v5317, ["form"]).length;
        if(v4438) {
          v4438 = e$$13.keyCode === 13
        }
        v3456 = v4438
      }
      if(v3456) {
        return trigger("submit", this, arguments)
      }
      return
    }
    function v104(e$$12) {
      var elem$$25 = e$$12.target;
      var type$$42 = elem$$25.type;
      var v4439 = type$$42 === "submit";
      if(!v4439) {
        v4439 = type$$42 === "image"
      }
      var v3457 = v4439;
      if(v3457) {
        var v5027 = jQuery$$1(elem$$25);
        v3457 = JAM.call(v5027.closest, v5027, ["form"]).length
      }
      if(v3457) {
        return trigger("submit", this, arguments)
      }
      return
    }
    if(this.nodeName.toLowerCase() !== "form") {
      var v1921 = jQuery$$1.event;
      JAM.call(v1921.add, v1921, [this, "click.specialSubmit", v104]);
      var v1922 = jQuery$$1.event;
      JAM.call(v1922.add, v1922, [this, "keypress.specialSubmit", v105])
    }else {
      return false
    }
    return
  }
  function v103(orig$$1, fix) {
    function v102(data$$29) {
      var v1924 = jQuery$$1.event;
      var v3459;
      var v5028 = data$$29;
      if(v5028) {
        v5028 = data$$29.selector
      }
      if(v5028) {
        v3459 = delegate
      }else {
        v3459 = withinElement
      }
      JAM.call(v1924.remove, v1924, [this, fix, v3459]);
      return
    }
    function v101(data$$28) {
      var v1926 = jQuery$$1.event;
      var v3460;
      var v5029 = data$$28;
      if(v5029) {
        v5029 = data$$28.selector
      }
      if(v5029) {
        v3460 = delegate
      }else {
        v3460 = withinElement
      }
      JAM.call(v1926.add, v1926, [this, fix, v3460, orig$$1]);
      return
    }
    JAM.set(jQuery$$1.event.special, orig$$1, {setup:v101, teardown:v102}, JAM.policy.p2);
    return
  }
  function v100() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
    return
  }
  function v99() {
    this.isPropagationStopped = returnTrue;
    var e$$10 = this.originalEvent;
    if(!e$$10) {
      return
    }
    if(e$$10.stopPropagation) {
      e$$10.stopPropagation()
    }
    e$$10.cancelBubble = true;
    return
  }
  function v98() {
    this.isDefaultPrevented = returnTrue;
    var e$$9 = this.originalEvent;
    if(!e$$9) {
      return
    }
    if(e$$9.preventDefault) {
      e$$9.preventDefault()
    }
    e$$9.returnValue = false;
    return
  }
  function v97(src$$2) {
    if(!this.preventDefault) {
      return JAM.new(jQuery$$1.Event, [src$$2])
    }
    var v3463 = src$$2;
    if(v3463) {
      v3463 = src$$2.type
    }
    if(v3463) {
      this.originalEvent = src$$2;
      this.type = src$$2.type
    }else {
      this.type = src$$2
    }
    var v5602 = now();
    this.timeStamp = v5602;
    JAM.set(this, expando, true, JAM.policy.p2);
    return
  }
  function v96(elem$$24, type$$41, handle$$15) {
    JAM.call(elem$$24.detachEvent, elem$$24, ["on" + type$$41, handle$$15]);
    return
  }
  function v95(elem$$23, type$$40, handle$$14) {
    elem$$23.removeEventListener(type$$40, handle$$14, false);
    return
  }
  function v94(namespaces$$4, eventHandle$$2) {
    if(this.onbeforeunload === eventHandle$$2) {
      JAM.set(this, "onbeforeunload", null)
    }
    return
  }
  function v93(data$$27, namespaces$$3, eventHandle$$1) {
    if(this.setInterval) {
      JAM.set(this, "onbeforeunload", eventHandle$$1)
    }
    return false
  }
  function v92(handleObj$$5) {
    function v91() {
      if(type$$39 === this.origType.replace(rnamespaces, "")) {
        remove = false;
        return false
      }
      return
    }
    var remove = true;
    var type$$39 = handleObj$$5.origType.replace(rnamespaces, "");
    var v3467 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]).live;
    if(!v3467) {
      v3467 = []
    }
    JAM.call(jQuery$$1.each, jQuery$$1, [v3467, v91]);
    if(remove) {
      var v1942 = jQuery$$1.event;
      JAM.call(v1942.remove, v1942, [this, handleObj$$5.origType, liveHandler])
    }
    return
  }
  function v90(handleObj$$4) {
    var v1944 = jQuery$$1.event;
    JAM.call(v1944.add, v1944, [this, handleObj$$4.origType, JAM.call(jQuery$$1.extend, jQuery$$1, [{}, handleObj$$4, {handler:liveHandler}])]);
    return
  }
  function v89(event$$4) {
    introspect(JAM.policy.p3) {
      var v1947 = event$$4[expando]
    }
    if(v1947) {
      return event$$4
    }
    var originalEvent = event$$4;
    event$$4 = JAM.call(jQuery$$1.Event, jQuery$$1, [originalEvent]);
    var i$$26 = this.props.length;
    var prop$$4;
    for(;i$$26;) {
      prop$$4 = this.props[i$$26 = i$$26 - 1];
      JAM.set(event$$4, prop$$4, JAM.get(originalEvent, prop$$4, JAM.policy.p4), JAM.policy.p4)
    }
    if(!event$$4.target) {
      var v1951 = event$$4.srcElement;
      if(!v1951) {
        v1951 = document$$1
      }
      event$$4.target = v1951
    }
    if(event$$4.target.nodeType === 3) {
      event$$4.target = event$$4.target.parentNode
    }
    var v3472 = !event$$4.relatedTarget;
    if(v3472) {
      v3472 = event$$4.fromElement
    }
    if(v3472) {
      var v1955;
      if(event$$4.fromElement === event$$4.target) {
        v1955 = event$$4.toElement
      }else {
        v1955 = event$$4.fromElement
      }
      event$$4.relatedTarget = v1955
    }
    var v3474 = event$$4.pageX == null;
    if(v3474) {
      v3474 = event$$4.clientX != null
    }
    if(v3474) {
      var doc$$2 = document$$1.documentElement;
      var body = document$$1.body;
      var v3475 = event$$4.clientX;
      var v5030 = doc$$2;
      if(v5030) {
        v5030 = doc$$2.scrollLeft
      }
      var v4453 = v5030;
      if(!v4453) {
        var v5318 = body;
        if(v5318) {
          v5318 = body.scrollLeft
        }
        var v5031 = v5318;
        if(!v5031) {
          v5031 = 0
        }
        v4453 = v5031
      }
      var v1957 = v3475 + v4453;
      var v4454 = doc$$2;
      if(v4454) {
        v4454 = doc$$2.clientLeft
      }
      var v3477 = v4454;
      if(!v3477) {
        var v5033 = body;
        if(v5033) {
          v5033 = body.clientLeft
        }
        var v4455 = v5033;
        if(!v4455) {
          v4455 = 0
        }
        v3477 = v4455
      }
      event$$4.pageX = v1957 - v3477;
      var v3478 = event$$4.clientY;
      var v5035 = doc$$2;
      if(v5035) {
        v5035 = doc$$2.scrollTop
      }
      var v4457 = v5035;
      if(!v4457) {
        var v5320 = body;
        if(v5320) {
          v5320 = body.scrollTop
        }
        var v5036 = v5320;
        if(!v5036) {
          v5036 = 0
        }
        v4457 = v5036
      }
      var v1959 = v3478 + v4457;
      var v4458 = doc$$2;
      if(v4458) {
        v4458 = doc$$2.clientTop
      }
      var v3480 = v4458;
      if(!v3480) {
        var v5038 = body;
        if(v5038) {
          v5038 = body.clientTop
        }
        var v4459 = v5038;
        if(!v4459) {
          v4459 = 0
        }
        v3480 = v4459
      }
      event$$4.pageY = v1959 - v3480
    }
    var v3481 = !event$$4.which;
    if(v3481) {
      var v4462;
      var v5322 = event$$4.charCode;
      if(!v5322) {
        v5322 = event$$4.charCode === 0
      }
      if(v5322) {
        v4462 = event$$4.charCode
      }else {
        v4462 = event$$4.keyCode
      }
      v3481 = v4462
    }
    if(v3481) {
      var v1962 = event$$4.charCode;
      if(!v1962) {
        v1962 = event$$4.keyCode
      }
      event$$4.which = v1962
    }
    var v3483 = !event$$4.metaKey;
    if(v3483) {
      v3483 = event$$4.ctrlKey
    }
    if(v3483) {
      event$$4.metaKey = event$$4.ctrlKey
    }
    var v3484 = !event$$4.which;
    if(v3484) {
      v3484 = event$$4.button !== undefined$$1
    }
    if(v3484) {
      var v1965;
      if(event$$4.button & 1) {
        v1965 = 1
      }else {
        var v3485;
        if(event$$4.button & 2) {
          v3485 = 3
        }else {
          var v4467;
          if(event$$4.button & 4) {
            v4467 = 2
          }else {
            v4467 = 0
          }
          v3485 = v4467
        }
        v1965 = v3485
      }
      event$$4.which = v1965
    }
    return event$$4
  }
  function v88(event$$3) {
    var all$$2;
    var handlers$$1;
    var namespaces$$2;
    var namespace$$2;
    var events$$4;
    var v1967 = arguments;
    var v3487 = jQuery$$1.event;
    var v4469 = event$$3;
    if(!v4469) {
      v4469 = window$$1.event
    }
    var v5603 = JAM.call(v3487.fix, v3487, [v4469]);
    event$$3 = v1967[0] = v5603;
    event$$3.currentTarget = this;
    var v1968 = event$$3.type.indexOf(".") < 0;
    if(v1968) {
      v1968 = !event$$3.exclusive
    }
    all$$2 = v1968;
    if(!all$$2) {
      namespaces$$2 = event$$3.type.split(".");
      var v1970 = event$$3;
      var v5604 = namespaces$$2.shift();
      v1970.type = v5604;
      namespace$$2 = new RegExp("(^|\\.)" + JAM.call(namespaces$$2.slice, namespaces$$2, [0]).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
    }
    events$$4 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]);
    var v1973 = event$$3.type;
    introspect(JAM.policy.p3) {
      handlers$$1 = events$$4[v1973]
    }
    if(events$$4 && handlers$$1) {
      handlers$$1 = JAM.call(handlers$$1.slice, handlers$$1, [0]);
      var j$$3 = 0;
      var l$$5 = handlers$$1.length;
      var v1979 = j$$3 < l$$5;
      for(;v1979;) {
        introspect(JAM.policy.p3) {
          var handleObj$$3 = handlers$$1[j$$3]
        }
        var v3492 = all$$2;
        if(!v3492) {
          v3492 = namespace$$2.test(handleObj$$3.namespace)
        }
        if(v3492) {
          event$$3.handler = handleObj$$3.handler;
          event$$3.data = handleObj$$3.data;
          event$$3.handleObj = handleObj$$3;
          var v1974 = handleObj$$3.handler;
          var ret$$7 = JAM.call(v1974.apply, v1974, [this, arguments]);
          if(ret$$7 !== undefined$$1) {
            event$$3.result = ret$$7;
            if(ret$$7 === false) {
              event$$3.preventDefault();
              event$$3.stopPropagation()
            }
          }
          if(event$$3.isImmediatePropagationStopped()) {
            break
          }
        }
        j$$3 = j$$3 + 1;
        v1979 = j$$3 < l$$5
      }
    }
    return event$$3.result
  }
  function v87(event$$2, data$$26, elem$$22) {
    function v86() {
      var v3493 = this.events;
      if(v3493) {
        var v4474 = this.events;
        introspect(JAM.policy.p3) {
          v3493 = v4474[type$$38]
        }
      }
      if(v3493) {
        var v1981 = jQuery$$1.event;
        JAM.call(v1981.trigger, v1981, [event$$2, data$$26, this.handle.elem])
      }
      return
    }
    var v1984 = event$$2.type;
    if(!v1984) {
      v1984 = event$$2
    }
    var type$$38 = v1984;
    var bubbling = arguments[3];
    if(!bubbling) {
      var v1985;
      if(typeof event$$2 === "object") {
        var v3496;
        introspect(JAM.policy.p3) {
          var v4477 = event$$2[expando]
        }
        if(v4477) {
          v3496 = event$$2
        }else {
          v3496 = JAM.call(jQuery$$1.extend, jQuery$$1, [JAM.call(jQuery$$1.Event, jQuery$$1, [type$$38]), event$$2])
        }
        v1985 = v3496
      }else {
        v1985 = JAM.call(jQuery$$1.Event, jQuery$$1, [type$$38])
      }
      event$$2 = v1985;
      if(type$$38.indexOf("!") >= 0) {
        event$$2.type = type$$38 = JAM.call(type$$38.slice, type$$38, [0, -1]);
        event$$2.exclusive = true
      }
      if(!elem$$22) {
        event$$2.stopPropagation();
        var v3499 = jQuery$$1.event.global;
        introspect(JAM.policy.p3) {
          var v1989 = v3499[type$$38]
        }
        if(v1989) {
          JAM.call(jQuery$$1.each, jQuery$$1, [jQuery$$1.cache, v86])
        }
      }
      var v3500 = !elem$$22;
      if(!v3500) {
        var v4479 = elem$$22.nodeType === 3;
        if(!v4479) {
          v4479 = elem$$22.nodeType === 8
        }
        v3500 = v4479
      }
      if(v3500) {
        return undefined$$1
      }
      event$$2.result = undefined$$1;
      event$$2.target = elem$$22;
      data$$26 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [data$$26]);
      data$$26.unshift(event$$2)
    }
    event$$2.currentTarget = elem$$22;
    var handle$$13 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$22, "handle"]);
    if(handle$$13) {
      JAM.call(handle$$13.apply, handle$$13, [elem$$22, data$$26])
    }
    var v1993 = elem$$22.parentNode;
    if(!v1993) {
      v1993 = elem$$22.ownerDocument
    }
    var parent$$1 = v1993;
    try {
      var v4481 = elem$$22;
      if(v4481) {
        var v5048 = elem$$22.nodeName;
        if(v5048) {
          var v5325 = jQuery$$1.noData;
          var v5326 = elem$$22.nodeName.toLowerCase();
          introspect(JAM.policy.p3) {
            v5048 = v5325[v5326]
          }
        }
        v4481 = v5048
      }
      if(!v4481) {
        var v4482 = "on" + type$$38;
        introspect(JAM.policy.p3) {
          var v3503 = elem$$22[v4482]
        }
        if(v3503) {
          var v5327 = "on" + type$$38;
          introspect(JAM.policy.p3) {
            var v5049 = elem$$22[v5327]
          }
          v3503 = JAM.call(v5049.apply, v5049, [elem$$22, data$$26]) === false
        }
        if(v3503) {
          event$$2.result = false
        }
      }
    }catch(e$$7) {
    }
    var v3504 = !event$$2.isPropagationStopped();
    if(v3504) {
      v3504 = parent$$1
    }
    if(v3504) {
      var v1996 = jQuery$$1.event;
      JAM.call(v1996.trigger, v1996, [event$$2, data$$26, parent$$1, true])
    }else {
      if(!event$$2.isDefaultPrevented()) {
        var target$$38 = event$$2.target;
        var old;
        var v1997 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [target$$38, "a"]);
        if(v1997) {
          v1997 = type$$38 === "click"
        }
        var isClick = v1997;
        var v3506 = jQuery$$1.event.special;
        introspect(JAM.policy.p3) {
          var v1998 = v3506[type$$38]
        }
        if(!v1998) {
          v1998 = {}
        }
        var special$$3 = v1998;
        var v4486 = !special$$3._default;
        if(!v4486) {
          var v5328 = special$$3._default;
          v4486 = JAM.call(v5328.call, v5328, [elem$$22, event$$2]) === false
        }
        var v3508 = v4486;
        if(v3508) {
          var v4487 = !isClick;
          if(v4487) {
            var v5329 = target$$38;
            if(v5329) {
              var v5451 = target$$38.nodeName;
              if(v5451) {
                var v5500 = jQuery$$1.noData;
                var v5501 = target$$38.nodeName.toLowerCase();
                introspect(JAM.policy.p3) {
                  v5451 = v5500[v5501]
                }
              }
              v5329 = v5451
            }
            v4487 = !v5329
          }
          v3508 = v4487
        }
        if(v3508) {
          try {
            introspect(JAM.policy.p3) {
              var v2002 = target$$38[type$$38]
            }
            if(v2002) {
              var v1999 = "on" + type$$38;
              introspect(JAM.policy.p3) {
                old = target$$38[v1999]
              }
              if(old) {
                JAM.set(target$$38, "on" + type$$38, null, JAM.policy.p2)
              }
              jQuery$$1.event.triggered = true;
              JAM.call(JAM.get(target$$38, type$$38, JAM.policy.p3), target$$38, [])
            }
          }catch(e$$8) {
          }
          if(old) {
            JAM.set(target$$38, "on" + type$$38, old, JAM.policy.p2)
          }
          jQuery$$1.event.triggered = false
        }
      }
    }
    return
  }
  function v85(elem$$21, types$$1, handler$$5, pos) {
    var v3509 = elem$$21.nodeType === 3;
    if(!v3509) {
      v3509 = elem$$21.nodeType === 8
    }
    if(v3509) {
      return
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
    var v2009 = elemData$$1;
    if(v2009) {
      v2009 = elemData$$1.events
    }
    var events$$3 = v2009;
    var v3510 = !elemData$$1;
    if(!v3510) {
      v3510 = !events$$3
    }
    if(v3510) {
      return
    }
    var v3511 = types$$1;
    if(v3511) {
      v3511 = types$$1.type
    }
    if(v3511) {
      handler$$5 = types$$1.handler;
      types$$1 = types$$1.type
    }
    var v3512 = !types$$1;
    if(!v3512) {
      var v4492 = typeof types$$1 === "string";
      if(v4492) {
        v4492 = types$$1.charAt(0) === "."
      }
      v3512 = v4492
    }
    if(v3512) {
      types$$1 = types$$1 || "";
      for(type$$37 in events$$3) {
        var v2012 = jQuery$$1.event;
        JAM.call(v2012.remove, v2012, [elem$$21, type$$37 + types$$1])
      }
      return
    }
    types$$1 = types$$1.split(" ");
    var v3513 = i$$25;
    i$$25 = i$$25 + 1;
    introspect(JAM.policy.p3) {
      var v2037 = type$$37 = types$$1[v3513]
    }
    for(;v2037;) {
      origType = type$$37;
      handleObj$$2 = null;
      all$$1 = type$$37.indexOf(".") < 0;
      namespaces$$1 = [];
      if(!all$$1) {
        namespaces$$1 = type$$37.split(".");
        type$$37 = namespaces$$1.shift();
        namespace$$1 = new RegExp("(^|\\.)" + JAM.call(jQuery$$1.map, jQuery$$1, [JAM.call(namespaces$$1.slice, namespaces$$1, [0]).sort(), fcleanup]).join("\\.(?:.*\\.)?") + "(\\.|$)")
      }
      introspect(JAM.policy.p3) {
        eventType$$2 = events$$3[type$$37]
      }
      if(!eventType$$2) {
        var v3515 = i$$25;
        i$$25 = i$$25 + 1;
        v2037 = type$$37 = types$$1[v3515];
        continue
      }
      if(!handler$$5) {
        var j$$2 = 0;
        var v2023 = j$$2 < eventType$$2.length;
        for(;v2023;) {
          introspect(JAM.policy.p3) {
            handleObj$$2 = eventType$$2[j$$2]
          }
          var v3517 = all$$1;
          if(!v3517) {
            v3517 = namespace$$1.test(handleObj$$2.namespace)
          }
          if(v3517) {
            var v2019 = jQuery$$1.event;
            JAM.call(v2019.remove, v2019, [elem$$21, origType, handleObj$$2.handler, j$$2]);
            var v2021 = j$$2;
            j$$2 = j$$2 - 1;
            JAM.call(eventType$$2.splice, eventType$$2, [v2021, 1])
          }
          j$$2 = j$$2 + 1;
          v2023 = j$$2 < eventType$$2.length
        }
        var v3519 = i$$25;
        i$$25 = i$$25 + 1;
        v2037 = type$$37 = types$$1[v3519];
        continue
      }
      var v3520 = jQuery$$1.event.special;
      introspect(JAM.policy.p3) {
        var v2025 = v3520[type$$37]
      }
      if(!v2025) {
        v2025 = {}
      }
      special$$2 = v2025;
      j$$2 = pos || 0;
      var v2033 = j$$2 < eventType$$2.length;
      for(;v2033;) {
        introspect(JAM.policy.p3) {
          handleObj$$2 = eventType$$2[j$$2]
        }
        if(handler$$5.guid === handleObj$$2.guid) {
          var v3525 = all$$1;
          if(!v3525) {
            v3525 = namespace$$1.test(handleObj$$2.namespace)
          }
          if(v3525) {
            if(pos == null) {
              var v2026 = j$$2;
              j$$2 = j$$2 - 1;
              JAM.call(eventType$$2.splice, eventType$$2, [v2026, 1])
            }
            if(special$$2.remove) {
              var v2028 = special$$2.remove;
              JAM.call(v2028.call, v2028, [elem$$21, handleObj$$2])
            }
          }
          if(pos != null) {
            break
          }
        }
        j$$2 = j$$2 + 1;
        v2033 = j$$2 < eventType$$2.length
      }
      var v3527 = eventType$$2.length === 0;
      if(!v3527) {
        var v4501 = pos != null;
        if(v4501) {
          v4501 = eventType$$2.length === 1
        }
        v3527 = v4501
      }
      if(v3527) {
        var v3528 = !special$$2.teardown;
        if(!v3528) {
          var v5058 = special$$2.teardown;
          v3528 = JAM.call(v5058.call, v5058, [elem$$21, namespaces$$1]) === false
        }
        if(v3528) {
          JAM.call(removeEvent, null, [elem$$21, type$$37, elemData$$1.handle])
        }
        ret$$6 = null;
        delete events$$3[type$$37]
      }
      var v3529 = i$$25;
      i$$25 = i$$25 + 1;
      v2037 = type$$37 = types$$1[v3529]
    }
    if(JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [events$$3])) {
      var handle$$12 = elemData$$1.handle;
      if(handle$$12) {
        handle$$12.elem = null
      }
      delete elemData$$1.events;
      delete elemData$$1.handle;
      if(JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [elemData$$1])) {
        JAM.call(jQuery$$1.removeData, jQuery$$1, [elem$$21])
      }
    }
    return
  }
  function v84(elem$$20, types, handler$$4, data$$25) {
    function v83() {
      var v2040;
      var v4506 = typeof jQuery$$1 !== "undefined";
      if(v4506) {
        v4506 = !jQuery$$1.event.triggered
      }
      if(v4506) {
        var v3530 = jQuery$$1.event.handle;
        v2040 = JAM.call(v3530.apply, v3530, [eventHandle.elem, arguments])
      }else {
        v2040 = undefined$$1
      }
      return v2040
    }
    var v3533 = elem$$20.nodeType === 3;
    if(!v3533) {
      v3533 = elem$$20.nodeType === 8
    }
    if(v3533) {
      return
    }
    var v3534 = elem$$20.setInterval;
    if(v3534) {
      var v4511 = elem$$20 !== window$$1;
      if(v4511) {
        v4511 = !elem$$20.frameElement
      }
      v3534 = v4511
    }
    if(v3534) {
      elem$$20 = window$$1
    }
    var handleObjIn;
    var handleObj$$1;
    if(handler$$4.handler) {
      handleObjIn = handler$$4;
      handler$$4 = handleObjIn.handler
    }
    if(!handler$$4.guid) {
      handler$$4.guid = jQuery$$1.guid;
      jQuery$$1.guid = jQuery$$1.guid + 1
    }
    var elemData = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$20]);
    if(!elemData) {
      return
    }
    var v2046 = elemData.events;
    if(!v2046) {
      v2046 = {}
    }
    var events$$2 = elemData.events = v2046;
    var eventHandle = elemData.handle;
    if(!eventHandle) {
      elemData.handle = eventHandle = v83
    }
    eventHandle.elem = elem$$20;
    types = types.split(" ");
    var type$$36;
    var i$$24 = 0;
    var namespaces;
    var v3538 = i$$24;
    i$$24 = i$$24 + 1;
    introspect(JAM.policy.p3) {
      var v2062 = type$$36 = types[v3538]
    }
    for(;v2062;) {
      var v2048;
      if(handleObjIn) {
        v2048 = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, handleObjIn])
      }else {
        v2048 = {handler:handler$$4, data:data$$25}
      }
      handleObj$$1 = v2048;
      if(type$$36.indexOf(".") > -1) {
        namespaces = type$$36.split(".");
        type$$36 = namespaces.shift();
        var v2049 = handleObj$$1;
        var v5605 = JAM.call(namespaces.slice, namespaces, [0]).sort().join(".");
        v2049.namespace = v5605
      }else {
        namespaces = [];
        handleObj$$1.namespace = ""
      }
      handleObj$$1.type = type$$36;
      handleObj$$1.guid = handler$$4.guid;
      introspect(JAM.policy.p3) {
        var handlers = events$$2[type$$36]
      }
      var v3541 = jQuery$$1.event.special;
      introspect(JAM.policy.p3) {
        var v2051 = v3541[type$$36]
      }
      if(!v2051) {
        v2051 = {}
      }
      var special$$1 = v2051;
      if(!handlers) {
        handlers = JAM.set(events$$2, type$$36, [], JAM.policy.p2);
        var v3543 = !special$$1.setup;
        if(!v3543) {
          var v5062 = special$$1.setup;
          v3543 = JAM.call(v5062.call, v5062, [elem$$20, data$$25, namespaces, eventHandle]) === false
        }
        if(v3543) {
          if(elem$$20.addEventListener) {
            elem$$20.addEventListener(type$$36, eventHandle, false)
          }else {
            if(elem$$20.attachEvent) {
              JAM.call(elem$$20.attachEvent, elem$$20, ["on" + type$$36, eventHandle])
            }
          }
        }
      }
      if(special$$1.add) {
        var v2057 = special$$1.add;
        JAM.call(v2057.call, v2057, [elem$$20, handleObj$$1]);
        if(!handleObj$$1.handler.guid) {
          handleObj$$1.handler.guid = handler$$4.guid
        }
      }
      JAM.call(handlers.push, handlers, [handleObj$$1]);
      JAM.set(jQuery$$1.event.global, type$$36, true, JAM.policy.p2);
      var v3546 = i$$24;
      i$$24 = i$$24 + 1;
      v2062 = type$$36 = types[v3546]
    }
    elem$$20 = null;
    return
  }
  function v82(elem$$19, name$$40, value$$38, pass$$1) {
    var v3547 = !elem$$19;
    if(!v3547) {
      var v4518 = elem$$19.nodeType === 3;
      if(!v4518) {
        v4518 = elem$$19.nodeType === 8
      }
      v3547 = v4518
    }
    if(v3547) {
      return undefined$$1
    }
    var v3548 = pass$$1;
    if(v3548) {
      v3548 = name$$40 in jQuery$$1.attrFn
    }
    if(v3548) {
      var v2064 = jQuery$$1(elem$$19);
      return JAM.call(JAM.get(v2064, name$$40, JAM.policy.p3), v2064, [value$$38])
    }
    var v2066 = elem$$19.nodeType !== 1;
    if(!v2066) {
      v2066 = !JAM.call(jQuery$$1.isXMLDoc, jQuery$$1, [elem$$19])
    }
    var notxml = v2066;
    var set = value$$38 !== undefined$$1;
    var v3552 = notxml;
    if(v3552) {
      var v4521 = jQuery$$1.props;
      introspect(JAM.policy.p3) {
        v3552 = v4521[name$$40]
      }
    }
    var v2067 = v3552;
    if(!v2067) {
      v2067 = name$$40
    }
    name$$40 = v2067;
    if(elem$$19.nodeType === 1) {
      var special = rspecialurl.test(name$$40);
      var v3555 = name$$40 === "selected";
      if(v3555) {
        v3555 = !jQuery$$1.support.optSelected
      }
      if(v3555) {
        var parent = elem$$19.parentNode
      }
      var v3556 = name$$40 in elem$$19;
      if(v3556) {
        var v4523 = notxml;
        if(v4523) {
          v4523 = !special
        }
        v3556 = v4523
      }
      if(v3556) {
        if(set) {
          var v3557 = name$$40 === "type";
          if(v3557) {
            var v4524 = rtype.test(elem$$19.nodeName);
            if(v4524) {
              v4524 = elem$$19.parentNode
            }
            v3557 = v4524
          }
          if(v3557) {
            JAM.call(jQuery$$1.error, jQuery$$1, ["type property can't be changed"])
          }
          JAM.set(elem$$19, name$$40, value$$38, JAM.policy.p2)
        }
        var v3558 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$19, "form"]);
        if(v3558) {
          v3558 = elem$$19.getAttributeNode(name$$40)
        }
        if(v3558) {
          return elem$$19.getAttributeNode(name$$40).nodeValue
        }
        if(name$$40 === "tabIndex") {
          var attributeNode = elem$$19.getAttributeNode("tabIndex");
          var v2072;
          var v4525 = attributeNode;
          if(v4525) {
            v4525 = attributeNode.specified
          }
          if(v4525) {
            v2072 = attributeNode.value
          }else {
            var v3559;
            var v5068 = rfocusable.test(elem$$19.nodeName);
            if(!v5068) {
              var v5333 = rclickable.test(elem$$19.nodeName);
              if(v5333) {
                v5333 = elem$$19.href
              }
              v5068 = v5333
            }
            if(v5068) {
              v3559 = 0
            }else {
              v3559 = undefined$$1
            }
            v2072 = v3559
          }
          return v2072
        }
        introspect(JAM.policy.p3) {
          return elem$$19[name$$40]
        }
      }
      var v3561 = !jQuery$$1.support.style;
      if(v3561) {
        var v4528 = notxml;
        if(v4528) {
          v4528 = name$$40 === "style"
        }
        v3561 = v4528
      }
      if(v3561) {
        if(set) {
          elem$$19.style.cssText = "" + value$$38
        }
        return elem$$19.style.cssText
      }
      if(set) {
        JAM.call(elem$$19.setAttribute, elem$$19, [name$$40, "" + value$$38])
      }
      var v2079;
      var v4529 = !jQuery$$1.support.hrefNormalized;
      if(v4529) {
        v4529 = notxml && special
      }
      if(v4529) {
        v2079 = elem$$19.getAttribute(name$$40, 2)
      }else {
        v2079 = elem$$19.getAttribute(name$$40)
      }
      var attr = v2079;
      var v2080;
      if(attr === null) {
        v2080 = undefined$$1
      }else {
        v2080 = attr
      }
      return v2080
    }
    return JAM.call(jQuery$$1.style, jQuery$$1, [elem$$19, name$$40, value$$38])
  }
  function v81(value$$37) {
    function v80(i$$23) {
      function v79() {
        this.selected = JAM.call(jQuery$$1.inArray, jQuery$$1, [jQuery$$1(this).val(), values$$5]) >= 0;
        return
      }
      var self$$5 = jQuery$$1(this);
      var val = value$$37;
      if(this.nodeType !== 1) {
        return
      }
      if(isFunction) {
        val = JAM.call(value$$37.call, value$$37, [this, i$$23, self$$5.val()])
      }
      if(typeof val === "number") {
        val = val + ""
      }
      var v3567 = JAM.call(jQuery$$1.isArray, jQuery$$1, [val]);
      if(v3567) {
        v3567 = rradiocheck.test(this.type)
      }
      if(v3567) {
        this.checked = JAM.call(jQuery$$1.inArray, jQuery$$1, [self$$5.val(), val]) >= 0
      }else {
        if(JAM.call(jQuery$$1.nodeName, jQuery$$1, [this, "select"])) {
          var values$$5 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [val]);
          var v2087 = jQuery$$1("option", this);
          JAM.call(v2087.each, v2087, [v79]);
          if(!values$$5.length) {
            this.selectedIndex = -1
          }
        }else {
          this.value = val
        }
      }
      return
    }
    if(value$$37 === undefined$$1) {
      var elem$$18 = this[0];
      if(elem$$18) {
        if(JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$18, "option"])) {
          var v2091;
          var v5071 = elem$$18.attributes.value;
          if(!v5071) {
            v5071 = {}
          }
          if(v5071.specified) {
            v2091 = elem$$18.value
          }else {
            v2091 = elem$$18.text
          }
          return v2091
        }
        if(JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$18, "select"])) {
          var index$$39 = elem$$18.selectedIndex;
          var values$$4 = [];
          var options$$2 = elem$$18.options;
          var one = elem$$18.type === "select-one";
          if(index$$39 < 0) {
            return null
          }
          var v2095;
          if(one) {
            v2095 = index$$39
          }else {
            v2095 = 0
          }
          var i$$22 = v2095;
          var v2096;
          if(one) {
            v2096 = index$$39 + 1
          }else {
            v2096 = options$$2.length
          }
          var max = v2096;
          var v2099 = i$$22 < max;
          for(;v2099;) {
            introspect(JAM.policy.p3) {
              var option = options$$2[i$$22]
            }
            if(option.selected) {
              value$$37 = jQuery$$1(option).val();
              if(one) {
                return value$$37
              }
              JAM.call(values$$4.push, values$$4, [value$$37])
            }
            i$$22 = i$$22 + 1;
            v2099 = i$$22 < max
          }
          return values$$4
        }
        var v3571 = rradiocheck.test(elem$$18.type);
        if(v3571) {
          v3571 = !jQuery$$1.support.checkOn
        }
        if(v3571) {
          var v2101;
          if(elem$$18.getAttribute("value") === null) {
            v2101 = "on"
          }else {
            v2101 = elem$$18.value
          }
          return v2101
        }
        var v3573 = elem$$18.value;
        if(!v3573) {
          v3573 = ""
        }
        return v3573.replace(rreturn, "")
      }
      return undefined$$1
    }
    var isFunction = JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$37]);
    return JAM.call(this.each, this, [v80])
  }
  function v78(selector$$4) {
    var className$$3 = " " + selector$$4 + " ";
    var i$$21 = 0;
    var l$$4 = this.length;
    var v2107 = i$$21 < l$$4;
    for(;v2107;) {
      introspect(JAM.policy.p3) {
        var v5502 = this[i$$21]
      }
      if((" " + v5502.className + " ").replace(rclass, " ").indexOf(className$$3) > -1) {
        return true
      }
      i$$21 = i$$21 + 1;
      v2107 = i$$21 < l$$4
    }
    return false
  }
  function v77(value$$36, stateVal) {
    function v76() {
      if(type$$35 === "string") {
        var className$$2;
        var i$$20 = 0;
        var self$$4 = jQuery$$1(this);
        var state = stateVal;
        var classNames$$3 = value$$36.split(rspace);
        var v3575 = i$$20;
        i$$20 = i$$20 + 1;
        introspect(JAM.policy.p3) {
          var v2110 = className$$2 = classNames$$3[v3575]
        }
        for(;v2110;) {
          var v2108;
          if(isBool) {
            v2108 = state
          }else {
            v2108 = !JAM.call(self$$4.hasClass, self$$4, [className$$2])
          }
          state = v2108;
          var v3577;
          if(state) {
            v3577 = "addClass"
          }else {
            v3577 = "removeClass"
          }
          JAM.call(JAM.get(self$$4, v3577, JAM.policy.p3), self$$4, [className$$2]);
          var v3578 = i$$20;
          i$$20 = i$$20 + 1;
          v2110 = className$$2 = classNames$$3[v3578]
        }
      }else {
        var v3579 = type$$35 === "undefined";
        if(!v3579) {
          v3579 = type$$35 === "boolean"
        }
        if(v3579) {
          if(this.className) {
            JAM.call(jQuery$$1.data, jQuery$$1, [this, "__className__", this.className])
          }
          var v2113;
          var v4539 = this.className;
          if(!v4539) {
            v4539 = value$$36 === false
          }
          if(v4539) {
            v2113 = ""
          }else {
            var v3580 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "__className__"]);
            if(!v3580) {
              v3580 = ""
            }
            v2113 = v3580
          }
          this.className = v2113
        }
      }
      return
    }
    function v75(i$$19) {
      var self$$3 = jQuery$$1(this);
      JAM.call(self$$3.toggleClass, self$$3, [JAM.call(value$$36.call, value$$36, [this, i$$19, JAM.call(self$$3.attr, self$$3, ["class"]), stateVal]), stateVal]);
      return
    }
    var type$$35 = typeof value$$36;
    var isBool = typeof stateVal === "boolean";
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$36])) {
      return JAM.call(this.each, this, [v75])
    }
    return JAM.call(this.each, this, [v76])
  }
  function v74(value$$35) {
    function v73(i$$18) {
      var self$$2 = jQuery$$1(this);
      JAM.call(self$$2.removeClass, self$$2, [JAM.call(value$$35.call, value$$35, [this, i$$18, JAM.call(self$$2.attr, self$$2, ["class"])])]);
      return
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$35])) {
      return JAM.call(this.each, this, [v73])
    }
    var v4541 = value$$35;
    if(v4541) {
      v4541 = typeof value$$35 === "string"
    }
    var v3584 = v4541;
    if(!v3584) {
      v3584 = value$$35 === undefined$$1
    }
    if(v3584) {
      var classNames$$2 = (value$$35 || "").split(rspace);
      var i$$17 = 0;
      var l$$3 = this.length;
      var v2127 = i$$17 < l$$3;
      for(;v2127;) {
        introspect(JAM.policy.p3) {
          var elem$$17 = this[i$$17]
        }
        var v3585 = elem$$17.nodeType === 1;
        if(v3585) {
          v3585 = elem$$17.className
        }
        if(v3585) {
          if(value$$35) {
            var className$$1 = (" " + elem$$17.className + " ").replace(rclass, " ");
            var c$$1 = 0;
            var cl$$1 = classNames$$2.length;
            var v2124 = c$$1 < cl$$1;
            for(;v2124;) {
              introspect(JAM.policy.p3) {
                var v4545 = classNames$$2[c$$1]
              }
              className$$1 = className$$1.replace(" " + v4545 + " ", " ");
              c$$1 = c$$1 + 1;
              v2124 = c$$1 < cl$$1
            }
            var v2125 = elem$$17;
            var v5606 = JAM.call(jQuery$$1.trim, jQuery$$1, [className$$1]);
            v2125.className = v5606
          }else {
            elem$$17.className = ""
          }
        }
        i$$17 = i$$17 + 1;
        v2127 = i$$17 < l$$3
      }
    }
    return this
  }
  function v72(value$$34) {
    function v71(i$$16) {
      var self$$1 = jQuery$$1(this);
      JAM.call(self$$1.addClass, self$$1, [JAM.call(value$$34.call, value$$34, [this, i$$16, JAM.call(self$$1.attr, self$$1, ["class"])])]);
      return
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$34])) {
      return JAM.call(this.each, this, [v71])
    }
    var v3589 = value$$34;
    if(v3589) {
      v3589 = typeof value$$34 === "string"
    }
    if(v3589) {
      var classNames$$1 = (value$$34 || "").split(rspace);
      var i$$15 = 0;
      var l$$2 = this.length;
      var v2138 = i$$15 < l$$2;
      for(;v2138;) {
        introspect(JAM.policy.p3) {
          var elem$$16 = this[i$$15]
        }
        if(elem$$16.nodeType === 1) {
          if(!elem$$16.className) {
            elem$$16.className = value$$34
          }else {
            var className = " " + elem$$16.className + " ";
            var setClass = elem$$16.className;
            var c = 0;
            var cl = classNames$$1.length;
            var v2134 = c < cl;
            for(;v2134;) {
              introspect(JAM.policy.p3) {
                var v5339 = classNames$$1[c]
              }
              if(className.indexOf(" " + v5339 + " ") < 0) {
                introspect(JAM.policy.p3) {
                  var v4548 = classNames$$1[c]
                }
                setClass = setClass + (" " + v4548)
              }
              c = c + 1;
              v2134 = c < cl
            }
            var v2135 = elem$$16;
            var v5607 = JAM.call(jQuery$$1.trim, jQuery$$1, [setClass]);
            v2135.className = v5607
          }
        }
        i$$15 = i$$15 + 1;
        v2138 = i$$15 < l$$2
      }
    }
    return this
  }
  function v70(name$$39, fn$$5) {
    function v69() {
      JAM.call(jQuery$$1.attr, jQuery$$1, [this, name$$39, ""]);
      if(this.nodeType === 1) {
        this.removeAttribute(name$$39)
      }
      return
    }
    return JAM.call(this.each, this, [v69])
  }
  function v68(name$$38, value$$33) {
    return access(this, name$$38, value$$33, true, jQuery$$1.attr)
  }
  function v67(type$$34) {
    return JAM.call(this.queue, this, [type$$34 || "fx", []])
  }
  function v66(time, type$$33) {
    function v65() {
      function v64() {
        JAM.call(jQuery$$1.dequeue, jQuery$$1, [elem$$15, type$$33]);
        return
      }
      var elem$$15 = this;
      JAM.call(setTimeout, null, [v64, time]);
      return
    }
    var v2143;
    if(jQuery$$1.fx) {
      var v4549 = jQuery$$1.fx.speeds;
      introspect(JAM.policy.p3) {
        var v3596 = v4549[time]
      }
      if(!v3596) {
        v3596 = time
      }
      v2143 = v3596
    }else {
      v2143 = time
    }
    time = v2143;
    type$$33 = type$$33 || "fx";
    return JAM.call(this.queue, this, [type$$33, v65])
  }
  function v63(type$$32) {
    function v62() {
      JAM.call(jQuery$$1.dequeue, jQuery$$1, [this, type$$32]);
      return
    }
    return JAM.call(this.each, this, [v62])
  }
  function v61(type$$31, data$$24) {
    function v60(i$$14, elem$$14) {
      var queue$$1 = JAM.call(jQuery$$1.queue, jQuery$$1, [this, type$$31, data$$24]);
      var v3598 = type$$31 === "fx";
      if(v3598) {
        v3598 = queue$$1[0] !== "inprogress"
      }
      if(v3598) {
        JAM.call(jQuery$$1.dequeue, jQuery$$1, [this, type$$31])
      }
      return
    }
    if(typeof type$$31 !== "string") {
      data$$24 = type$$31;
      type$$31 = "fx"
    }
    if(data$$24 === undefined$$1) {
      return JAM.call(jQuery$$1.queue, jQuery$$1, [this[0], type$$31])
    }
    return JAM.call(this.each, this, [v60])
  }
  function v59(elem$$13, type$$30) {
    function v58() {
      JAM.call(jQuery$$1.dequeue, jQuery$$1, [elem$$13, type$$30]);
      return
    }
    type$$30 = type$$30 || "fx";
    var queue = JAM.call(jQuery$$1.queue, jQuery$$1, [elem$$13, type$$30]);
    var fn$$4 = queue.shift();
    if(fn$$4 === "inprogress") {
      fn$$4 = queue.shift()
    }
    if(fn$$4) {
      if(type$$30 === "fx") {
        queue.unshift("inprogress")
      }
      JAM.call(fn$$4.call, fn$$4, [elem$$13, v58])
    }
    return
  }
  function v57(elem$$12, type$$29, data$$23) {
    if(!elem$$12) {
      return
    }
    type$$29 = (type$$29 || "fx") + "queue";
    var q = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$12, type$$29]);
    if(!data$$23) {
      return q || []
    }
    var v3600 = !q;
    if(!v3600) {
      v3600 = JAM.call(jQuery$$1.isArray, jQuery$$1, [data$$23])
    }
    if(v3600) {
      q = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$12, type$$29, JAM.call(jQuery$$1.makeArray, jQuery$$1, [data$$23])])
    }else {
      JAM.call(q.push, q, [data$$23])
    }
    return q
  }
  function v56(key$$17) {
    function v55() {
      JAM.call(jQuery$$1.removeData, jQuery$$1, [this, key$$17]);
      return
    }
    return JAM.call(this.each, this, [v55])
  }
  function v54(key$$16, value$$32) {
    function v53() {
      JAM.call(jQuery$$1.data, jQuery$$1, [this, key$$16, value$$32]);
      return
    }
    function v52() {
      JAM.call(jQuery$$1.data, jQuery$$1, [this, key$$16]);
      return
    }
    var v3601 = typeof key$$16 === "undefined";
    if(v3601) {
      v3601 = this.length
    }
    if(v3601) {
      return JAM.call(jQuery$$1.data, jQuery$$1, [this[0]])
    }else {
      if(typeof key$$16 === "object") {
        return JAM.call(this.each, this, [v52])
      }
    }
    var parts = key$$16.split(".");
    var v2158;
    if(parts[1]) {
      v2158 = "." + parts[1]
    }else {
      v2158 = ""
    }
    parts[1] = v2158;
    if(value$$32 === undefined$$1) {
      var data$$22 = JAM.call(this.triggerHandler, this, ["getData" + parts[1] + "!", [parts[0]]]);
      var v3607 = data$$22 === undefined$$1;
      if(v3607) {
        v3607 = this.length
      }
      if(v3607) {
        data$$22 = JAM.call(jQuery$$1.data, jQuery$$1, [this[0], key$$16])
      }
      var v2163;
      var v4555 = data$$22 === undefined$$1;
      if(v4555) {
        v4555 = parts[1]
      }
      if(v4555) {
        v2163 = JAM.call(this.data, this, [parts[0]])
      }else {
        v2163 = data$$22
      }
      return v2163
    }else {
      var v2164 = JAM.call(this.trigger, this, ["setData" + parts[1] + "!", [parts[0], value$$32]]);
      return JAM.call(v2164.each, v2164, [v53])
    }
    return
  }
  function v51(elem$$11, name$$37) {
    var v3612 = elem$$11.nodeName;
    if(v3612) {
      var v4558 = jQuery$$1.noData;
      var v4559 = elem$$11.nodeName.toLowerCase();
      introspect(JAM.policy.p3) {
        v3612 = v4558[v4559]
      }
    }
    if(v3612) {
      return
    }
    var v2167;
    if(elem$$11 == window$$1) {
      v2167 = windowData
    }else {
      v2167 = elem$$11
    }
    elem$$11 = v2167;
    introspect(JAM.policy.p3) {
      var id$$2 = elem$$11[expando]
    }
    var cache$$1 = jQuery$$1.cache;
    introspect(JAM.policy.p3) {
      var thisCache$$1 = cache$$1[id$$2]
    }
    if(name$$37) {
      if(thisCache$$1) {
        delete thisCache$$1[name$$37];
        if(JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [thisCache$$1])) {
          JAM.call(jQuery$$1.removeData, jQuery$$1, [elem$$11])
        }
      }
    }else {
      if(jQuery$$1.support.deleteExpando) {
        delete elem$$11[jQuery$$1.expando]
      }else {
        if(elem$$11.removeAttribute) {
          elem$$11.removeAttribute(jQuery$$1.expando)
        }
      }
      delete cache$$1[id$$2]
    }
    return
  }
  function v50(elem$$10, name$$36, data$$21) {
    var v3615 = elem$$10.nodeName;
    if(v3615) {
      var v4560 = jQuery$$1.noData;
      var v4561 = elem$$10.nodeName.toLowerCase();
      introspect(JAM.policy.p3) {
        v3615 = v4560[v4561]
      }
    }
    if(v3615) {
      return
    }
    var v2174;
    if(elem$$10 == window$$1) {
      v2174 = windowData
    }else {
      v2174 = elem$$10
    }
    elem$$10 = v2174;
    introspect(JAM.policy.p3) {
      var id$$1 = elem$$10[expando]
    }
    var cache = jQuery$$1.cache;
    var thisCache;
    var v3617 = !id$$1;
    if(v3617) {
      var v4562 = typeof name$$36 === "string";
      if(v4562) {
        v4562 = data$$21 === undefined$$1
      }
      v3617 = v4562
    }
    if(v3617) {
      return null
    }
    if(!id$$1) {
      id$$1 = uuid = uuid + 1
    }
    if(typeof name$$36 === "object") {
      JAM.set(elem$$10, expando, id$$1, JAM.policy.p2);
      var v2177 = cache;
      var v2178 = id$$1;
      var v5608 = JAM.call(jQuery$$1.extend, jQuery$$1, [true, {}, name$$36]);
      thisCache = JAM.set(v2177, v2178, v5608, JAM.policy.p2)
    }else {
      introspect(JAM.policy.p3) {
        var v3619 = cache[id$$1]
      }
      if(!v3619) {
        JAM.set(elem$$10, expando, id$$1, JAM.policy.p2);
        JAM.set(cache, id$$1, {}, JAM.policy.p2)
      }
    }
    introspect(JAM.policy.p3) {
      thisCache = cache[id$$1]
    }
    if(data$$21 !== undefined$$1) {
      JAM.set(thisCache, name$$36, data$$21, JAM.policy.p2)
    }
    var v2182;
    if(typeof name$$36 === "string") {
      introspect(JAM.policy.p3) {
        v2182 = thisCache[name$$36]
      }
    }else {
      v2182 = thisCache
    }
    return v2182
  }
  function v49() {
    function v48() {
      var div$$1 = document$$1.createElement("div");
      div$$1.style.width = div$$1.style.paddingLeft = "1px";
      var v2184 = document$$1.body;
      JAM.call(v2184.appendChild, v2184, [div$$1]);
      jQuery$$1.boxModel = jQuery$$1.support.boxModel = div$$1.offsetWidth === 2;
      document$$1.body.removeChild(div$$1).style.display = "none";
      div$$1 = null;
      return
    }
    function click() {
      jQuery$$1.support.noCloneEvent = false;
      JAM.call(div.detachEvent, div, ["onclick", click]);
      return
    }
    function eventSupported(eventName) {
      var el = document$$1.createElement("div");
      eventName = "on" + eventName;
      var isSupported = eventName in el;
      if(!isSupported) {
        JAM.call(el.setAttribute, el, [eventName, "return;"]);
        introspect(JAM.policy.p3) {
          var v3624 = el[eventName]
        }
        isSupported = typeof v3624 === "function"
      }
      el = null;
      return isSupported
    }
    jQuery$$1.support = {};
    var root = document$$1.documentElement;
    var script$$1 = document$$1.createElement("script");
    var div = document$$1.createElement("div");
    var id = "script" + now();
    div.style.display = "none";
    JAM.set(div, "innerHTML", "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>");
    var all = div.getElementsByTagName("*");
    var a = div.getElementsByTagName("a")[0];
    var v3625 = !all;
    if(!v3625) {
      var v4565 = !all.length;
      if(!v4565) {
        v4565 = !a
      }
      v3625 = v4565
    }
    if(v3625) {
      return
    }
    var v2194 = jQuery$$1;
    var v3626 = div.firstChild.nodeType === 3;
    var v3627 = !div.getElementsByTagName("tbody").length;
    var v3628 = !!div.getElementsByTagName("link").length;
    var v3629 = /red/.test(a.getAttribute("style"));
    var v3630 = a.getAttribute("href") === "/a";
    var v3631 = /^0.55$/.test(a.style.opacity);
    var v3632 = !!a.style.cssFloat;
    var v3633 = div.getElementsByTagName("input")[0].value === "on";
    var v5090 = document$$1.createElement("select");
    v2194.support = {leadingWhitespace:v3626, tbody:v3627, htmlSerialize:v3628, style:v3629, hrefNormalized:v3630, opacity:v3631, cssFloat:v3632, checkOn:v3633, optSelected:JAM.call(v5090.appendChild, v5090, [document$$1.createElement("option")]).selected, parentNode:div.removeChild(JAM.call(div.appendChild, div, [document$$1.createElement("div")])).parentNode === null, deleteExpando:true, checkClone:false, scriptEval:false, noCloneEvent:true, boxModel:null};
    script$$1.type = "text/javascript";
    try {
      JAM.call(script$$1.appendChild, script$$1, [document$$1.createTextNode("window." + id + "=1;")])
    }catch(e$$5) {
    }
    JAM.call(root.insertBefore, root, [script$$1, root.firstChild]);
    introspect(JAM.policy.p3) {
      var v2198 = window$$1[id]
    }
    if(v2198) {
      jQuery$$1.support.scriptEval = true;
      delete window$$1[id]
    }
    try {
      delete script$$1.test
    }catch(e$$6) {
      jQuery$$1.support.deleteExpando = false
    }
    root.removeChild(script$$1);
    var v3637 = div.attachEvent;
    if(v3637) {
      v3637 = div.fireEvent
    }
    if(v3637) {
      JAM.call(div.attachEvent, div, ["onclick", click]);
      var v2200 = div.cloneNode(true);
      JAM.call(v2200.fireEvent, v2200, ["onclick"])
    }
    div = document$$1.createElement("div");
    JAM.set(div, "innerHTML", "<input type='radio' name='radiotest' checked='checked'/>");
    var fragment$$1 = document$$1.createDocumentFragment();
    JAM.call(fragment$$1.appendChild, fragment$$1, [div.firstChild]);
    jQuery$$1.support.checkClone = fragment$$1.cloneNode(true).cloneNode(true).lastChild.checked;
    jQuery$$1(v48);
    var v2204 = jQuery$$1.support;
    var v5609 = eventSupported("submit");
    v2204.submitBubbles = v5609;
    var v2205 = jQuery$$1.support;
    var v5610 = eventSupported("change");
    v2205.changeBubbles = v5610;
    root = script$$1 = div = all = a = null;
    return
  }
  function v47() {
    if(document$$1.readyState === "complete") {
      JAM.call(document$$1.detachEvent, document$$1, ["onreadystatechange", DOMContentLoaded]);
      jQuery$$1.ready()
    }
    return
  }
  function v46() {
    document$$1.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
    jQuery$$1.ready();
    return
  }
  function v45(elem$$9, array$$11) {
    return JAM.call(indexOf.call, indexOf, [array$$11, elem$$9])
  }
  function v44(ua) {
    ua = ua.toLowerCase();
    var v2207 = /(webkit)[ \/]([\w.]+)/.exec(ua);
    if(!v2207) {
      var v3640 = /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua);
      if(!v3640) {
        var v4579 = /(msie) ([\w.]+)/.exec(ua);
        if(!v4579) {
          var v5344 = !/compatible/.test(ua);
          if(v5344) {
            v5344 = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua)
          }
          var v5094 = v5344;
          if(!v5094) {
            v5094 = []
          }
          v4579 = v5094
        }
        v3640 = v4579
      }
      v2207 = v3640
    }
    var match$$2 = v2207;
    var v3642 = match$$2[1];
    if(!v3642) {
      v3642 = ""
    }
    var v2208 = v3642;
    var v3643 = match$$2[2];
    if(!v3643) {
      v3643 = "0"
    }
    return{browser:v2208, version:v3643}
  }
  function v43(fn$$3, proxy, thisObject) {
    function v42() {
      return JAM.call(fn$$3.apply, fn$$3, [thisObject || this, arguments])
    }
    if(arguments.length === 2) {
      if(typeof proxy === "string") {
        thisObject = fn$$3;
        introspect(JAM.policy.p3) {
          fn$$3 = thisObject[proxy]
        }
        proxy = undefined$$1
      }else {
        var v3646 = proxy;
        if(v3646) {
          v3646 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [proxy])
        }
        if(v3646) {
          thisObject = proxy;
          proxy = undefined$$1
        }
      }
    }
    var v3647 = !proxy;
    if(v3647) {
      v3647 = fn$$3
    }
    if(v3647) {
      proxy = v42
    }
    if(fn$$3) {
      var v2215 = fn$$3.guid;
      if(!v2215) {
        var v3648 = proxy.guid;
        if(!v3648) {
          v3648 = jQuery$$1.guid;
          jQuery$$1.guid = jQuery$$1.guid + 1
        }
        v2215 = v3648
      }
      proxy.guid = fn$$3.guid = v2215
    }
    return proxy
  }
  function v41(elems$$4, callback$$29, arg$$5) {
    var ret$$5 = [];
    var value$$31;
    var i$$13 = 0;
    var length$$16 = elems$$4.length;
    var v2219 = i$$13 < length$$16;
    for(;v2219;) {
      introspect(JAM.policy.p3) {
        var v2216 = elems$$4[i$$13]
      }
      value$$31 = JAM.call(callback$$29, null, [v2216, i$$13, arg$$5]);
      if(value$$31 != null) {
        ret$$5[ret$$5.length] = value$$31
      }
      i$$13 = i$$13 + 1;
      v2219 = i$$13 < length$$16
    }
    var v2220 = ret$$5.concat;
    return JAM.call(v2220.apply, v2220, [[], ret$$5])
  }
  function v40(elems$$3, callback$$28, inv) {
    var ret$$4 = [];
    var i$$12 = 0;
    var length$$15 = elems$$3.length;
    var v2223 = i$$12 < length$$15;
    for(;v2223;) {
      var v3650 = !inv;
      introspect(JAM.policy.p3) {
        var v5097 = elems$$3[i$$12]
      }
      if(v3650 !== !JAM.call(callback$$28, null, [v5097, i$$12])) {
        introspect(JAM.policy.p3) {
          var v2221 = elems$$3[i$$12]
        }
        JAM.call(ret$$4.push, ret$$4, [v2221])
      }
      i$$12 = i$$12 + 1;
      v2223 = i$$12 < length$$15
    }
    return ret$$4
  }
  function v39(first$$1, second) {
    var i$$11 = first$$1.length;
    var j$$1 = 0;
    if(typeof second.length === "number") {
      var l$$1 = second.length;
      var v2225 = j$$1 < l$$1;
      for(;v2225;) {
        var v2224 = i$$11;
        i$$11 = i$$11 + 1;
        JAM.set(first$$1, v2224, second[j$$1], JAM.policy.p2);
        j$$1 = j$$1 + 1;
        v2225 = j$$1 < l$$1
      }
    }else {
      introspect(JAM.policy.p3) {
        var v3653 = second[j$$1]
      }
      var v2227 = v3653 !== undefined$$1;
      for(;v2227;) {
        var v2226 = i$$11;
        i$$11 = i$$11 + 1;
        var v3654 = j$$1;
        j$$1 = j$$1 + 1;
        JAM.set(first$$1, v2226, second[v3654], JAM.policy.p2);
        introspect(JAM.policy.p3) {
          var v3655 = second[j$$1]
        }
        v2227 = v3655 !== undefined$$1
      }
    }
    first$$1.length = i$$11;
    return first$$1
  }
  function v38(elem$$8, array$$10) {
    if(array$$10.indexOf) {
      return array$$10.indexOf(elem$$8)
    }
    var i$$10 = 0;
    var length$$14 = array$$10.length;
    var v2231 = i$$10 < length$$14;
    for(;v2231;) {
      introspect(JAM.policy.p3) {
        var v3656 = array$$10[i$$10]
      }
      if(v3656 === elem$$8) {
        return i$$10
      }
      i$$10 = i$$10 + 1;
      v2231 = i$$10 < length$$14
    }
    return-1
  }
  function v37(array$$9, results) {
    var ret$$3 = results || [];
    if(array$$9 != null) {
      var v3657 = array$$9.length == null;
      if(!v3657) {
        var v4588 = typeof array$$9 === "string";
        if(!v4588) {
          var v5099 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [array$$9]);
          if(!v5099) {
            var v5346 = typeof array$$9 !== "function";
            if(v5346) {
              v5346 = array$$9.setInterval
            }
            v5099 = v5346
          }
          v4588 = v5099
        }
        v3657 = v4588
      }
      if(v3657) {
        JAM.call(push.call, push, [ret$$3, array$$9])
      }else {
        JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$3, array$$9])
      }
    }
    return ret$$3
  }
  function v36(text$$7) {
    return(text$$7 || "").replace(rtrim, "")
  }
  function v35(object, callback$$27, args$$4) {
    var name$$35;
    var i$$9 = 0;
    var length$$13 = object.length;
    var v2235 = length$$13 === undefined$$1;
    if(!v2235) {
      v2235 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [object])
    }
    var isObj = v2235;
    if(args$$4) {
      if(isObj) {
        for(name$$35 in object) {
          introspect(JAM.policy.p3) {
            var v4590 = object[name$$35]
          }
          if(JAM.call(callback$$27.apply, callback$$27, [v4590, args$$4]) === false) {
            break
          }
        }
      }else {
        var v2238 = i$$9 < length$$13;
        for(;v2238;) {
          var v5101 = i$$9;
          i$$9 = i$$9 + 1;
          introspect(JAM.policy.p3) {
            var v4591 = object[v5101]
          }
          if(JAM.call(callback$$27.apply, callback$$27, [v4591, args$$4]) === false) {
            break
          }
          v2238 = i$$9 < length$$13
        }
      }
    }else {
      if(isObj) {
        for(name$$35 in object) {
          introspect(JAM.policy.p3) {
            var v4592 = object[name$$35]
          }
          introspect(JAM.policy.p3) {
            var v4593 = object[name$$35]
          }
          if(JAM.call(callback$$27.call, callback$$27, [v4592, name$$35, v4593]) === false) {
            break
          }
        }
      }else {
        var value$$30 = object[0];
        var v3662 = i$$9 < length$$13;
        if(v3662) {
          v3662 = JAM.call(callback$$27.call, callback$$27, [value$$30, i$$9, value$$30]) !== false
        }
        var v2240 = v3662;
        for(;v2240;) {
          value$$30 = object[i$$9 = i$$9 + 1];
          var v3664 = i$$9 < length$$13;
          if(v3664) {
            v3664 = JAM.call(callback$$27.call, callback$$27, [value$$30, i$$9, value$$30]) !== false
          }
          v2240 = v3664
        }
      }
    }
    return object
  }
  function v34(elem$$7, name$$34) {
    var v2241 = elem$$7.nodeName;
    if(v2241) {
      v2241 = elem$$7.nodeName.toUpperCase() === name$$34.toUpperCase()
    }
    return v2241
  }
  function v33(data$$20) {
    var v3667 = data$$20;
    if(v3667) {
      v3667 = rnotwhite.test(data$$20)
    }
    if(v3667) {
      var v2242 = document$$1.getElementsByTagName("head")[0];
      if(!v2242) {
        v2242 = document$$1.documentElement
      }
      var head = v2242;
      var script = document$$1.createElement("script");
      script.type = "text/javascript";
      if(jQuery$$1.support.scriptEval) {
        JAM.call(script.appendChild, script, [document$$1.createTextNode(data$$20)])
      }else {
        script.text = data$$20
      }
      JAM.call(head.insertBefore, head, [script, head.firstChild]);
      head.removeChild(script)
    }
    return
  }
  function v32() {
    return
  }
  function v31(data$$19) {
    var v3671 = typeof data$$19 !== "string";
    if(!v3671) {
      v3671 = !data$$19
    }
    if(v3671) {
      return null
    }
    data$$19 = JAM.call(jQuery$$1.trim, jQuery$$1, [data$$19]);
    if(/^[\],:{}\s]*$/.test(data$$19.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
      var v2248;
      var v4600 = window$$1.JSON;
      if(v4600) {
        v4600 = window$$1.JSON.parse
      }
      if(v4600) {
        v2248 = window$$1.JSON.parse(data$$19)
      }else {
        v2248 = JAM.new(Function, ["return " + data$$19])()
      }
      return v2248
    }else {
      JAM.call(jQuery$$1.error, jQuery$$1, ["Invalid JSON: " + data$$19])
    }
    return
  }
  function v30(msg) {
    throw msg;
  }
  function v29(obj$$20) {
    var name$$33;
    for(name$$33 in obj$$20) {
      return false
    }
    return true
  }
  function v28(obj$$19) {
    var v3676 = !obj$$19;
    if(!v3676) {
      var v4602 = JAM.call(toString.call, toString, [obj$$19]) !== "[object Object]";
      if(!v4602) {
        var v5105 = obj$$19.nodeType;
        if(!v5105) {
          v5105 = obj$$19.setInterval
        }
        v4602 = v5105
      }
      v3676 = v4602
    }
    if(v3676) {
      return false
    }
    var v3677 = obj$$19.constructor;
    if(v3677) {
      var v4604 = !JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19, "constructor"]);
      if(v4604) {
        v4604 = !JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19.constructor.prototype, "isPrototypeOf"])
      }
      v3677 = v4604
    }
    if(v3677) {
      return false
    }
    var key$$15;
    for(key$$15 in obj$$19) {
    }
    var v2253 = key$$15 === undefined$$1;
    if(!v2253) {
      v2253 = JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19, key$$15])
    }
    return v2253
  }
  function v27(obj$$18) {
    return JAM.call(toString.call, toString, [obj$$18]) === "[object Array]"
  }
  function v26(obj$$17) {
    return JAM.call(toString.call, toString, [obj$$17]) === "[object Function]"
  }
  function v25() {
    if(readyBound) {
      return
    }
    readyBound = true;
    if(document$$1.readyState === "complete") {
      return jQuery$$1.ready()
    }
    if(document$$1.addEventListener) {
      document$$1.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
      window$$1.addEventListener("load", jQuery$$1.ready, false)
    }else {
      if(document$$1.attachEvent) {
        JAM.call(document$$1.attachEvent, document$$1, ["onreadystatechange", DOMContentLoaded]);
        JAM.call(window$$1.attachEvent, window$$1, ["onload", jQuery$$1.ready]);
        var toplevel = false;
        try {
          toplevel = window$$1.frameElement == null
        }catch(e$$4) {
        }
        var v3680 = document$$1.documentElement.doScroll;
        if(v3680) {
          v3680 = toplevel
        }
        if(v3680) {
          doScrollCheck()
        }
      }
    }
    return
  }
  function v24() {
    if(!jQuery$$1.isReady) {
      if(!document$$1.body) {
        return JAM.call(setTimeout, null, [jQuery$$1.ready, 13])
      }
      jQuery$$1.isReady = true;
      if(readyList) {
        var fn$$2;
        var i$$8 = 0;
        var v3683 = i$$8;
        i$$8 = i$$8 + 1;
        introspect(JAM.policy.p3) {
          var v2265 = fn$$2 = readyList[v3683]
        }
        for(;v2265;) {
          JAM.call(fn$$2.call, fn$$2, [document$$1, jQuery$$1]);
          var v3684 = i$$8;
          i$$8 = i$$8 + 1;
          v2265 = fn$$2 = readyList[v3684]
        }
        readyList = null
      }
      if(jQuery$$1.fn.triggerHandler) {
        var v2266 = jQuery$$1(document$$1);
        JAM.call(v2266.triggerHandler, v2266, ["ready"])
      }
    }
    return
  }
  function v23(deep$$3) {
    window$$1.$ = _$;
    if(deep$$3) {
      window$$1.jQuery = _jQuery
    }
    return jQuery$$1
  }
  function v22() {
    var v2269 = arguments[0];
    if(!v2269) {
      v2269 = {}
    }
    var target$$37 = v2269;
    var i$$7 = 1;
    var length$$12 = arguments.length;
    var deep$$2 = false;
    var options$$1;
    var name$$32;
    var src$$1;
    var copy;
    if(typeof target$$37 === "boolean") {
      deep$$2 = target$$37;
      var v2270 = arguments[1];
      if(!v2270) {
        v2270 = {}
      }
      target$$37 = v2270;
      i$$7 = 2
    }
    var v3689 = typeof target$$37 !== "object";
    if(v3689) {
      v3689 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [target$$37])
    }
    if(v3689) {
      target$$37 = {}
    }
    if(length$$12 === i$$7) {
      target$$37 = this;
      i$$7 = i$$7 - 1
    }
    var v2281 = i$$7 < length$$12;
    for(;v2281;) {
      introspect(JAM.policy.p3) {
        var v3690 = options$$1 = arguments[i$$7]
      }
      if(v3690 != null) {
        for(name$$32 in options$$1) {
          introspect(JAM.policy.p3) {
            src$$1 = target$$37[name$$32]
          }
          introspect(JAM.policy.p3) {
            copy = options$$1[name$$32]
          }
          if(target$$37 === copy) {
            continue
          }
          var v3691 = deep$$2;
          if(v3691) {
            var v4608 = copy;
            if(v4608) {
              var v5109 = JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [copy]);
              if(!v5109) {
                v5109 = JAM.call(jQuery$$1.isArray, jQuery$$1, [copy])
              }
              v4608 = v5109
            }
            v3691 = v4608
          }
          if(v3691) {
            var v2275;
            var v4609 = src$$1;
            if(v4609) {
              var v5110 = JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [src$$1]);
              if(!v5110) {
                v5110 = JAM.call(jQuery$$1.isArray, jQuery$$1, [src$$1])
              }
              v4609 = v5110
            }
            if(v4609) {
              v2275 = src$$1
            }else {
              var v3692;
              if(JAM.call(jQuery$$1.isArray, jQuery$$1, [copy])) {
                v3692 = []
              }else {
                v3692 = {}
              }
              v2275 = v3692
            }
            var clone = v2275;
            var v2276 = target$$37;
            var v2277 = name$$32;
            var v5611 = JAM.call(jQuery$$1.extend, jQuery$$1, [deep$$2, clone, copy]);
            JAM.set(v2276, v2277, v5611, JAM.policy.p2)
          }else {
            if(copy !== undefined$$1) {
              JAM.set(target$$37, name$$32, copy, JAM.policy.p2)
            }
          }
        }
      }
      i$$7 = i$$7 + 1;
      v2281 = i$$7 < length$$12
    }
    return target$$37
  }
  function v21() {
    var v2282 = this.prevObject;
    if(!v2282) {
      v2282 = jQuery$$1(null)
    }
    return v2282
  }
  function v20(callback$$26) {
    function v19(elem$$6, i$$6) {
      return JAM.call(callback$$26.call, callback$$26, [elem$$6, i$$6, elem$$6])
    }
    return JAM.call(this.pushStack, this, [JAM.call(jQuery$$1.map, jQuery$$1, [this, v19])])
  }
  function v18() {
    return JAM.call(this.pushStack, this, [JAM.call(slice.apply, slice, [this, arguments]), "slice", JAM.call(slice.call, slice, [arguments]).join(",")])
  }
  function v17() {
    return JAM.call(this.eq, this, [-1])
  }
  function v16() {
    return JAM.call(this.eq, this, [0])
  }
  function v15(i$$5) {
    var v2286;
    if(i$$5 === -1) {
      v2286 = JAM.call(this.slice, this, [i$$5])
    }else {
      v2286 = JAM.call(this.slice, this, [i$$5, +i$$5 + 1])
    }
    return v2286
  }
  function v14(fn$$1) {
    jQuery$$1.bindReady();
    if(jQuery$$1.isReady) {
      JAM.call(fn$$1.call, fn$$1, [document$$1, jQuery$$1])
    }else {
      if(readyList) {
        JAM.call(readyList.push, readyList, [fn$$1])
      }
    }
    return this
  }
  function v13(callback$$25, args$$3) {
    return JAM.call(jQuery$$1.each, jQuery$$1, [this, callback$$25, args$$3])
  }
  function v12(elems$$2, name$$31, selector$$3) {
    var ret$$2 = jQuery$$1();
    if(JAM.call(jQuery$$1.isArray, jQuery$$1, [elems$$2])) {
      JAM.call(push.apply, push, [ret$$2, elems$$2])
    }else {
      JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$2, elems$$2])
    }
    ret$$2.prevObject = this;
    ret$$2.context = this.context;
    if(name$$31 === "find") {
      var v3698 = this.selector;
      var v4612;
      if(this.selector) {
        v4612 = " "
      }else {
        v4612 = ""
      }
      ret$$2.selector = v3698 + v4612 + selector$$3
    }else {
      if(name$$31) {
        ret$$2.selector = this.selector + "." + name$$31 + "(" + selector$$3 + ")"
      }
    }
    return ret$$2
  }
  function v11(num$$5) {
    var v2292;
    if(num$$5 == null) {
      v2292 = this.toArray()
    }else {
      var v3701;
      if(num$$5 < 0) {
        v3701 = JAM.call(this.slice, this, [num$$5])[0]
      }else {
        introspect(JAM.policy.p3) {
          v3701 = this[num$$5]
        }
      }
      v2292 = v3701
    }
    return v2292
  }
  function v10() {
    return JAM.call(slice.call, slice, [this, 0])
  }
  function v9() {
    return this.length
  }
  function v8(selector$$2, context$$1) {
    var match$$1;
    var elem$$5;
    var ret$$1;
    var doc$$1;
    if(!selector$$2) {
      return this
    }
    if(selector$$2.nodeType) {
      this.context = this[0] = selector$$2;
      this.length = 1;
      return this
    }
    var v3703 = selector$$2 === "body";
    if(v3703) {
      v3703 = !context$$1
    }
    if(v3703) {
      this.context = document$$1;
      this[0] = document$$1.body;
      this.selector = "body";
      this.length = 1;
      return this
    }
    if(typeof selector$$2 === "string") {
      match$$1 = quickExpr.exec(selector$$2);
      var v3705 = match$$1;
      if(v3705) {
        var v4616 = match$$1[1];
        if(!v4616) {
          v4616 = !context$$1
        }
        v3705 = v4616
      }
      if(v3705) {
        if(match$$1[1]) {
          var v2296;
          if(context$$1) {
            var v3706 = context$$1.ownerDocument;
            if(!v3706) {
              v3706 = context$$1
            }
            v2296 = v3706
          }else {
            v2296 = document$$1
          }
          doc$$1 = v2296;
          ret$$1 = rsingleTag.exec(selector$$2);
          if(ret$$1) {
            if(JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [context$$1])) {
              selector$$2 = [document$$1.createElement(ret$$1[1])];
              var v2298 = jQuery$$1.fn.attr;
              JAM.call(v2298.call, v2298, [selector$$2, context$$1, true])
            }else {
              selector$$2 = [doc$$1.createElement(ret$$1[1])]
            }
          }else {
            ret$$1 = buildFragment([match$$1[1]], [doc$$1]);
            var v3711;
            if(ret$$1.cacheable) {
              v3711 = ret$$1.fragment.cloneNode(true)
            }else {
              v3711 = ret$$1.fragment
            }
            selector$$2 = v3711.childNodes
          }
          return JAM.call(jQuery$$1.merge, jQuery$$1, [this, selector$$2])
        }else {
          elem$$5 = document$$1.getElementById(match$$1[2]);
          if(elem$$5) {
            if(elem$$5.id !== match$$1[2]) {
              return JAM.call(rootjQuery.find, rootjQuery, [selector$$2])
            }
            this.length = 1;
            this[0] = elem$$5
          }
          this.context = document$$1;
          this.selector = selector$$2;
          return this
        }
      }else {
        var v3714 = !context$$1;
        if(v3714) {
          v3714 = /^\w+$/.test(selector$$2)
        }
        if(v3714) {
          this.selector = selector$$2;
          this.context = document$$1;
          selector$$2 = document$$1.getElementsByTagName(selector$$2);
          return JAM.call(jQuery$$1.merge, jQuery$$1, [this, selector$$2])
        }else {
          var v3715 = !context$$1;
          if(!v3715) {
            v3715 = context$$1.jquery
          }
          if(v3715) {
            var v2307 = context$$1 || rootjQuery;
            return JAM.call(v2307.find, v2307, [selector$$2])
          }else {
            var v2308 = jQuery$$1(context$$1);
            return JAM.call(v2308.find, v2308, [selector$$2])
          }
        }
      }
    }else {
      if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [selector$$2])) {
        return JAM.call(rootjQuery.ready, rootjQuery, [selector$$2])
      }
    }
    if(selector$$2.selector !== undefined$$1) {
      this.selector = selector$$2.selector;
      this.context = selector$$2.context
    }
    return JAM.call(jQuery$$1.makeArray, jQuery$$1, [selector$$2, this])
  }
  function fcamelCase(all$$6, letter) {
    return letter.toUpperCase()
  }
  function fcloseTag(all$$5, front, tag) {
    var v2315;
    if(rselfClosing.test(tag)) {
      v2315 = all$$5
    }else {
      v2315 = front + "></" + tag + ">"
    }
    return v2315
  }
  function winnow(elements, qualifier, keep) {
    function v4(elem$$79, i$$61) {
      return JAM.call(jQuery$$1.inArray, jQuery$$1, [elem$$79, qualifier]) >= 0 === keep
    }
    function v3(elem$$78) {
      return elem$$78.nodeType === 1
    }
    function v2(elem$$77, i$$60) {
      return elem$$77 === qualifier === keep
    }
    function v1(elem$$76, i$$59) {
      return!!JAM.call(qualifier.call, qualifier, [elem$$76, i$$59, elem$$76]) === keep
    }
    if(JAM.call(jQuery$$1.isFunction, jQuery$$1, [qualifier])) {
      return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v1])
    }else {
      if(qualifier.nodeType) {
        return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v2])
      }else {
        if(typeof qualifier === "string") {
          var filtered = JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v3]);
          if(isSimple.test(qualifier)) {
            return JAM.call(jQuery$$1.filter, jQuery$$1, [qualifier, filtered, !keep])
          }else {
            qualifier = JAM.call(jQuery$$1.filter, jQuery$$1, [qualifier, filtered])
          }
        }
      }
    }
    return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v4])
  }
  function delegate(event$$6) {
    event$$6.type = event$$6.data;
    var v2325 = jQuery$$1.event.handle;
    JAM.call(v2325.apply, v2325, [this, arguments]);
    return
  }
  function withinElement(event$$5) {
    var parent$$2 = event$$5.relatedTarget;
    try {
      var v3723 = parent$$2;
      if(v3723) {
        v3723 = parent$$2 !== this
      }
      var v2326 = v3723;
      for(;v2326;) {
        parent$$2 = parent$$2.parentNode;
        var v3724 = parent$$2;
        if(v3724) {
          v3724 = parent$$2 !== this
        }
        v2326 = v3724
      }
      if(parent$$2 !== this) {
        event$$5.type = event$$5.data;
        var v2327 = jQuery$$1.event.handle;
        JAM.call(v2327.apply, v2327, [this, arguments])
      }
    }catch(e$$11) {
    }
    return
  }
  function fcleanup(nm) {
    function v5(ch) {
      return"\\" + ch
    }
    return nm.replace(/[^\w\s\.\|`]/g, v5)
  }
  function jQuery$$1(selector$$1, context) {
    return JAM.new(jQuery$$1.fn.init, [selector$$1, context])
  }
  function doScrollCheck() {
    if(jQuery$$1.isReady) {
      return
    }
    try {
      var v2331 = document$$1.documentElement;
      JAM.call(v2331.doScroll, v2331, ["left"])
    }catch(error$$2) {
      JAM.call(setTimeout, null, [doScrollCheck, 1]);
      return
    }
    jQuery$$1.ready();
    return
  }
  function evalScript(i$$1, elem$$1) {
    if(elem$$1.src) {
      JAM.call(jQuery$$1.ajax, jQuery$$1, [{url:elem$$1.src, async:false, dataType:"script"}])
    }else {
      var v3728 = elem$$1.text;
      if(!v3728) {
        var v4623 = elem$$1.textContent;
        if(!v4623) {
          var v5114 = elem$$1.innerHTML;
          if(!v5114) {
            v5114 = ""
          }
          v4623 = v5114
        }
        v3728 = v4623
      }
      JAM.call(jQuery$$1.globalEval, jQuery$$1, [v3728])
    }
    if(elem$$1.parentNode) {
      elem$$1.parentNode.removeChild(elem$$1)
    }
    return
  }
  function access(elems, key$$14, value$$29, exec, fn, pass) {
    var length$$11 = elems.length;
    if(typeof key$$14 === "object") {
      var k;
      for(k in key$$14) {
        introspect(JAM.policy.p3) {
          var v2337 = key$$14[k]
        }
        access(elems, k, v2337, exec, fn, value$$29)
      }
      return elems
    }
    if(value$$29 !== undefined$$1) {
      var v2339 = !pass;
      if(v2339) {
        var v3730 = exec;
        if(v3730) {
          v3730 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$29])
        }
        v2339 = v3730
      }
      exec = v2339;
      var i$$2 = 0;
      var v2342 = i$$2 < length$$11;
      for(;v2342;) {
        introspect(JAM.policy.p3) {
          var v2340 = elems[i$$2]
        }
        var v3731;
        if(exec) {
          introspect(JAM.policy.p3) {
            var v4625 = elems[i$$2]
          }
          introspect(JAM.policy.p3) {
            var v5116 = elems[i$$2]
          }
          v3731 = JAM.call(value$$29.call, value$$29, [v4625, i$$2, JAM.call(fn, null, [v5116, key$$14])])
        }else {
          v3731 = value$$29
        }
        JAM.call(fn, null, [v2340, key$$14, v3731, pass]);
        i$$2 = i$$2 + 1;
        v2342 = i$$2 < length$$11
      }
      return elems
    }
    var v2344;
    if(length$$11) {
      v2344 = JAM.call(fn, null, [elems[0], key$$14])
    }else {
      v2344 = undefined$$1
    }
    return v2344
  }
  function now() {
    return(new Date).getTime()
  }
  function returnFalse() {
    return false
  }
  function returnTrue() {
    return true
  }
  function trigger(type$$25, elem$$2, args) {
    args[0].type = type$$25;
    var v2347 = jQuery$$1.event.handle;
    return JAM.call(v2347.apply, v2347, [elem$$2, args])
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
    var v3734 = event$$1.liveFired === this;
    if(!v3734) {
      var v4628 = !events;
      if(!v4628) {
        var v5117 = !events.live;
        if(!v5117) {
          var v5355 = event$$1.button;
          if(v5355) {
            v5355 = event$$1.type === "click"
          }
          v5117 = v5355
        }
        v4628 = v5117
      }
      v3734 = v4628
    }
    if(v3734) {
      return
    }
    event$$1.liveFired = this;
    var v2349 = events.live;
    var live = JAM.call(v2349.slice, v2349, [0]);
    j = 0;
    var v2353 = j < live.length;
    for(;v2353;) {
      introspect(JAM.policy.p3) {
        handleObj = live[j]
      }
      if(handleObj.origType.replace(rnamespaces, "") === event$$1.type) {
        JAM.call(selectors$$7.push, selectors$$7, [handleObj.selector])
      }else {
        var v2351 = j;
        j = j - 1;
        JAM.call(live.splice, live, [v2351, 1])
      }
      j = j + 1;
      v2353 = j < live.length
    }
    var v2354 = jQuery$$1(event$$1.target);
    match = JAM.call(v2354.closest, v2354, [selectors$$7, event$$1.currentTarget]);
    i$$3 = 0;
    l = match.length;
    var v2363 = i$$3 < l;
    for(;v2363;) {
      j = 0;
      var v2362 = j < live.length;
      for(;v2362;) {
        introspect(JAM.policy.p3) {
          handleObj = live[j]
        }
        introspect(JAM.policy.p3) {
          var v4631 = match[i$$3]
        }
        if(v4631.selector === handleObj.selector) {
          introspect(JAM.policy.p3) {
            var v2356 = match[i$$3]
          }
          elem$$3 = v2356.elem;
          related = null;
          var v3743 = handleObj.preType === "mouseenter";
          if(!v3743) {
            v3743 = handleObj.preType === "mouseleave"
          }
          if(v3743) {
            var v3744 = jQuery$$1(event$$1.relatedTarget);
            related = JAM.call(v3744.closest, v3744, [handleObj.selector])[0]
          }
          var v3746 = !related;
          if(!v3746) {
            v3746 = related !== elem$$3
          }
          if(v3746) {
            JAM.call(elems$$1.push, elems$$1, [{elem:elem$$3, handleObj:handleObj}])
          }
        }
        j = j + 1;
        v2362 = j < live.length
      }
      i$$3 = i$$3 + 1;
      v2363 = i$$3 < l
    }
    i$$3 = 0;
    l = elems$$1.length;
    var v2366 = i$$3 < l;
    for(;v2366;) {
      introspect(JAM.policy.p3) {
        match = elems$$1[i$$3]
      }
      event$$1.currentTarget = match.elem;
      event$$1.data = match.handleObj.data;
      event$$1.handleObj = match.handleObj;
      var v4637 = match.handleObj.origHandler;
      if(JAM.call(v4637.apply, v4637, [match.elem, args$$1]) === false) {
        stop = false;
        break
      }
      i$$3 = i$$3 + 1;
      v2366 = i$$3 < l
    }
    return stop
  }
  function liveConvert(type$$26, selector) {
    var v4639;
    var v5357 = type$$26;
    if(v5357) {
      v5357 = type$$26 !== "*"
    }
    if(v5357) {
      v4639 = type$$26 + "."
    }else {
      v4639 = ""
    }
    return"live." + v4639 + selector.replace(/\./g, "`").replace(/ /g, "&")
  }
  function cloneCopyEvent(orig, ret) {
    function v6() {
      var v3751 = this.nodeName;
      introspect(JAM.policy.p3) {
        var v4640 = orig[i$$4]
      }
      if(v4640) {
        introspect(JAM.policy.p3) {
          var v5121 = orig[i$$4]
        }
        v4640 = v5121.nodeName
      }
      if(v3751 !== v4640) {
        return
      }
      var v3753 = i$$4;
      i$$4 = i$$4 + 1;
      introspect(JAM.policy.p3) {
        var v2370 = orig[v3753]
      }
      var oldData = JAM.call(jQuery$$1.data, jQuery$$1, [v2370]);
      var curData = JAM.call(jQuery$$1.data, jQuery$$1, [this, oldData]);
      var v2371 = oldData;
      if(v2371) {
        v2371 = oldData.events
      }
      var events$$1 = v2371;
      if(events$$1) {
        delete curData.handle;
        curData.events = {};
        var type$$27;
        for(type$$27 in events$$1) {
          var handler$$3;
          introspect(JAM.policy.p3) {
            var v2375 = events$$1[type$$27]
          }
          for(handler$$3 in v2375) {
            var v2372 = jQuery$$1.event;
            introspect(JAM.policy.p3) {
              var v3754 = events$$1[type$$27]
            }
            introspect(JAM.policy.p3) {
              var v2373 = v3754[handler$$3]
            }
            introspect(JAM.policy.p3) {
              var v4641 = events$$1[type$$27]
            }
            introspect(JAM.policy.p3) {
              var v3755 = v4641[handler$$3]
            }
            JAM.call(v2372.add, v2372, [this, type$$27, v2373, v3755.data])
          }
        }
      }
      return
    }
    var i$$4 = 0;
    JAM.call(ret.each, ret, [v6]);
    return
  }
  function buildFragment(args$$2, nodes, scripts) {
    var fragment;
    var cacheable;
    var cacheresults;
    var v2376;
    var v4642 = nodes;
    if(v4642) {
      v4642 = nodes[0]
    }
    if(v4642) {
      var v3756 = nodes[0].ownerDocument;
      if(!v3756) {
        v3756 = nodes[0]
      }
      v2376 = v3756
    }else {
      v2376 = document$$1
    }
    var doc = v2376;
    var v3758 = args$$2.length === 1;
    if(v3758) {
      var v4646 = typeof args$$2[0] === "string";
      if(v4646) {
        var v5123 = args$$2[0].length < 512;
        if(v5123) {
          var v5360 = doc === document$$1;
          if(v5360) {
            var v5461 = !rnocache.test(args$$2[0]);
            if(v5461) {
              var v5504 = jQuery$$1.support.checkClone;
              if(!v5504) {
                v5504 = !rchecked.test(args$$2[0])
              }
              v5461 = v5504
            }
            v5360 = v5461
          }
          v5123 = v5360
        }
        v4646 = v5123
      }
      v3758 = v4646
    }
    if(v3758) {
      cacheable = true;
      var v2377 = jQuery$$1.fragments;
      var v2378 = args$$2[0];
      introspect(JAM.policy.p3) {
        cacheresults = v2377[v2378]
      }
      if(cacheresults) {
        if(cacheresults !== 1) {
          fragment = cacheresults
        }
      }
    }
    if(!fragment) {
      fragment = doc.createDocumentFragment();
      JAM.call(jQuery$$1.clean, jQuery$$1, [args$$2, doc, fragment, scripts])
    }
    if(cacheable) {
      var v2382 = jQuery$$1.fragments;
      var v2383 = args$$2[0];
      var v3759;
      if(cacheresults) {
        v3759 = fragment
      }else {
        v3759 = 1
      }
      JAM.set(v2382, v2383, v3759, JAM.policy.p2)
    }
    return{fragment:fragment, cacheable:cacheable}
  }
  function genFx(type$$28, num$$4) {
    function v7() {
      JAM.set(obj$$16, this, type$$28, JAM.policy.p2);
      return
    }
    var obj$$16 = {};
    var v3760 = fxAttrs.concat;
    JAM.call(jQuery$$1.each, jQuery$$1, [JAM.call(v3760.apply, v3760, [[], JAM.call(fxAttrs.slice, fxAttrs, [0, num$$4])]), v7]);
    return obj$$16
  }
  function getWindow(elem$$4) {
    var v2385;
    var v4647 = "scrollTo" in elem$$4;
    if(v4647) {
      v4647 = elem$$4.document
    }
    if(v4647) {
      v2385 = elem$$4
    }else {
      var v3762;
      if(elem$$4.nodeType === 9) {
        var v4648 = elem$$4.defaultView;
        if(!v4648) {
          v4648 = elem$$4.parentWindow
        }
        v3762 = v4648
      }else {
        v3762 = false
      }
      v2385 = v3762
    }
    return v2385
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
  if(browserMatch.browser) {
    JAM.set(jQuery$$1.browser, browserMatch.browser, true, JAM.policy.p2);
    jQuery$$1.browser.version = browserMatch.version
  }
  if(jQuery$$1.browser.webkit) {
    jQuery$$1.browser.safari = true
  }
  if(indexOf) {
    jQuery$$1.inArray = v45
  }
  rootjQuery = jQuery$$1(document$$1);
  if(document$$1.addEventListener) {
    DOMContentLoaded = v46
  }else {
    if(document$$1.attachEvent) {
      DOMContentLoaded = v47
    }
  }
  v49();
  jQuery$$1.props = {"for":"htmlFor", "class":"className", readonly:"readOnly", maxlength:"maxLength", cellspacing:"cellSpacing", rowspan:"rowSpan", colspan:"colSpan", tabindex:"tabIndex", usemap:"useMap", frameborder:"frameBorder"};
  var expando = "jQuery" + now();
  var uuid = 0;
  var windowData = {};
  JAM.call(jQuery$$1.extend, jQuery$$1, [{cache:{}, expando:expando, noData:{"embed":true, "object":true, "applet":true}, data:v50, removeData:v51}]);
  var v2406 = jQuery$$1.fn;
  JAM.call(v2406.extend, v2406, [{data:v54, removeData:v56}]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{queue:v57, dequeue:v59}]);
  var v2409 = jQuery$$1.fn;
  JAM.call(v2409.extend, v2409, [{queue:v61, dequeue:v63, delay:v66, clearQueue:v67}]);
  var rclass = /[\n\t]/g;
  var rspace = /\s+/;
  var rreturn = /\r/g;
  var rspecialurl = /href|src|style/;
  var rtype = /(button|input)/i;
  var rfocusable = /(button|input|object|select|textarea)/i;
  var rclickable = /^(a|area)$/i;
  var rradiocheck = /radio|checkbox/;
  var v2411 = jQuery$$1.fn;
  JAM.call(v2411.extend, v2411, [{attr:v68, removeAttr:v70, addClass:v72, removeClass:v74, toggleClass:v77, hasClass:v78, val:v81}]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{attrFn:{val:true, css:true, html:true, text:true, data:true, width:true, height:true, offset:true}, attr:v82}]);
  var rnamespaces = /\.(.*)$/;
  jQuery$$1.event = {add:v84, global:{}, remove:v85, trigger:v87, handle:v88, props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix:v89, guid:1E8, proxy:jQuery$$1.proxy, special:{ready:{setup:jQuery$$1.bindReady, 
  teardown:jQuery$$1.noop}, live:{add:v90, remove:v92}, beforeunload:{setup:v93, teardown:v94}}};
  var v2415;
  if(document$$1.removeEventListener) {
    v2415 = v95
  }else {
    v2415 = v96
  }
  var removeEvent = v2415;
  jQuery$$1.Event = v97;
  jQuery$$1.Event.prototype = {preventDefault:v98, stopPropagation:v99, stopImmediatePropagation:v100, isDefaultPrevented:returnFalse, isPropagationStopped:returnFalse, isImmediatePropagationStopped:returnFalse};
  JAM.call(jQuery$$1.each, jQuery$$1, [{mouseenter:"mouseover", mouseleave:"mouseout"}, v103]);
  if(!jQuery$$1.support.submitBubbles) {
    jQuery$$1.event.special.submit = {setup:v106, teardown:v107}
  }
  if(!jQuery$$1.support.changeBubbles) {
    var formElems = /textarea|input|select/i;
    var changeFilters;
    var getVal = v109;
    var testChange = testChange$$1;
    jQuery$$1.event.special.change = {filters:{focusout:testChange, click:v110, keydown:v111, beforeactivate:v112}, setup:v113, teardown:v114};
    changeFilters = jQuery$$1.event.special.change.filters
  }
  if(document$$1.addEventListener) {
    JAM.call(jQuery$$1.each, jQuery$$1, [{focus:"focusin", blur:"focusout"}, v117])
  }
  JAM.call(jQuery$$1.each, jQuery$$1, [["bind", "one"], v120]);
  var v2426 = jQuery$$1.fn;
  JAM.call(v2426.extend, v2426, [{unbind:v121, delegate:v122, undelegate:v123, trigger:v125, triggerHandler:v126, toggle:v128, hover:v129}]);
  var liveMap = {focus:"focusin", blur:"focusout", mouseenter:"mouseover", mouseleave:"mouseout"};
  JAM.call(jQuery$$1.each, jQuery$$1, [["live", "die"], v132]);
  JAM.call(jQuery$$1.each, jQuery$$1, [("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error").split(" "), v134]);
  var v3779 = window$$1.attachEvent;
  if(v3779) {
    v3779 = !window$$1.addEventListener
  }
  if(v3779) {
    JAM.call(window$$1.attachEvent, window$$1, ["onunload", v135])
  }
  v207();
  var runtil = /Until$/;
  var rparentsprev = /^(?:parents|prevUntil|prevAll)/;
  var rmultiselector = /,/;
  slice = Array.prototype.slice;
  var v2432 = jQuery$$1.fn;
  JAM.call(v2432.extend, v2432, [{find:v208, has:v210, not:v211, filter:v212, is:v213, closest:v215, index:v216, add:v217, andSelf:v218}]);
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
  if(!jQuery$$1.support.htmlSerialize) {
    wrapMap._default = [1, "div<div>", "</div>"]
  }
  var v2445 = jQuery$$1.fn;
  JAM.call(v2445.extend, v2445, [{text:v238, wrapAll:v241, wrapInner:v244, wrap:v246, unwrap:v248, append:v250, prepend:v252, before:v254, after:v256, remove:v257, empty:v258, clone:v260, html:v263, replaceWith:v266, detach:v267, domManip:v270}]);
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
  var v2449 = document$$1.defaultView;
  if(v2449) {
    v2449 = document$$1.defaultView.getComputedStyle
  }
  var getComputedStyle = v2449;
  var v2450;
  if(jQuery$$1.support.cssFloat) {
    v2450 = "cssFloat"
  }else {
    v2450 = "styleFloat"
  }
  var styleFloat = v2450;
  jQuery$$1.fn.css = v276;
  JAM.call(jQuery$$1.extend, jQuery$$1, [{style:v277, css:v280, curCSS:v281, swap:v282}]);
  var v3783 = jQuery$$1.expr;
  if(v3783) {
    v3783 = jQuery$$1.expr.filters
  }
  if(v3783) {
    jQuery$$1.expr.filters.hidden = v283;
    jQuery$$1.expr.filters.visible = v284
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
  var v2457 = jQuery$$1.fn;
  JAM.call(v2457.extend, v2457, [{load:v286, serialize:v287, serializeArray:v292}]);
  JAM.call(jQuery$$1.each, jQuery$$1, ["ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), v294]);
  var v4661 = location.href;
  var v5128;
  var v5462 = window$$1.XMLHttpRequest;
  if(v5462) {
    var v5505 = window$$1.location.protocol !== "file:";
    if(!v5505) {
      v5505 = !window$$1.ActiveXObject
    }
    v5462 = v5505
  }
  if(v5462) {
    v5128 = v300
  }else {
    v5128 = v301
  }
  JAM.call(jQuery$$1.extend, jQuery$$1, [{get:v295, getScript:v296, getJSON:v297, post:v298, ajaxSetup:v299, ajaxSettings:{url:v4661, global:true, type:"GET", contentType:"application/x-www-form-urlencoded", processData:true, async:true, xhr:v5128, accepts:{xml:"application/xml, text/xml", html:"text/html", script:"text/javascript, application/javascript", json:"application/json, text/javascript", text:"text/plain", _default:"*/*"}}, lastModified:{}, etag:{}, ajax:v307, handleError:v308, active:0, 
  httpSuccess:v309, httpNotModified:v310, httpData:v311, param:v315}]);
  var elemdisplay = {};
  var rfxtypes = /toggle|show|hide/;
  var rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/;
  var timerId;
  var fxAttrs = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
  var v2464 = jQuery$$1.fn;
  JAM.call(v2464.extend, v2464, [{show:v316, hide:v317, _toggle:jQuery$$1.fn.toggle, toggle:v319, fadeTo:v320, animate:v323, stop:v325}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [{slideDown:genFx("show", 1), slideUp:genFx("hide", 1), slideToggle:genFx("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}}, v327]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{speed:v329, easing:{linear:v330, swing:v331}, timers:[], fx:v332}]);
  jQuery$$1.fx.prototype = {update:v333, cur:v334, custom:v335, show:v336, hide:v337, step:v338};
  JAM.call(jQuery$$1.extend, jQuery$$1, [jQuery$$1.fx, {tick:v339, stop:v340, speeds:{slow:600, fast:200, _default:400}, step:{opacity:v341, _default:v342}}]);
  var v3796 = jQuery$$1.expr;
  if(v3796) {
    v3796 = jQuery$$1.expr.filters
  }
  if(v3796) {
    jQuery$$1.expr.filters.animated = v344
  }
  if("getBoundingClientRect" in document$$1.documentElement) {
    jQuery$$1.fn.offset = v346
  }else {
    jQuery$$1.fn.offset = v348
  }
  jQuery$$1.offset = {initialize:v349, bodyOffset:v350, setOffset:v351};
  var v2476 = jQuery$$1.fn;
  JAM.call(v2476.extend, v2476, [{position:v352, offsetParent:v354}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [["Left", "Top"], v357]);
  JAM.call(jQuery$$1.each, jQuery$$1, [["Height", "Width"], v362]);
  window$$1.jQuery = window$$1.$ = jQuery$$1;
  return
}
function hexFromRGB(r$$3, g, b$$5) {
  function v0(nr, val$$11) {
    if(val$$11.length == 1) {
      JAM.set(hex, nr, "0" + val$$11, JAM.policy.p2)
    }
    return
  }
  var hex = [r$$3.toString(16), g.toString(16), b$$5.toString(16)];
  JAM.call($.each, $, [hex, v0]);
  return hex.join("").toUpperCase()
}
function refreshSwatch() {
  var v2485 = JAM.call($, null, ["#red"]);
  var red$$3 = JAM.call(v2485.slider, v2485, ["value"]);
  var v2486 = JAM.call($, null, ["#green"]);
  var green$$3 = JAM.call(v2486.slider, v2486, ["value"]);
  var v2487 = JAM.call($, null, ["#blue"]);
  var blue$$3 = JAM.call(v2487.slider, v2487, ["value"]);
  var hex$$1 = hexFromRGB(red$$3, green$$3, blue$$3);
  var v2488 = JAM.call($, null, ["#swatch"]);
  JAM.call(v2488.css, v2488, ["background-color", "#" + hex$$1]);
  return
}
v363(window);
v396(jQuery);
v434(jQuery);
v452(jQuery);
v484(jQuery);
$ = window.$;
JAM.call($, null, [v485]);

